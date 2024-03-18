// @require https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// 依赖 utils.js 里面的 getExtByName() 和 saveTextFile()

class CrawlerBase {
    constructor() {
    }

    findBookName() {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    // 指定文件名，但是不包含扩展名，扩展名由 url 决定
    findFileNames() {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    getRemainCount() {
        let params = new URLSearchParams(document.location.search);
        let remain = parseInt(params.get('remain'));
        if (isNaN(remain)) {
            try {
                remain = window.location.hash.match(/#remain=(\d+)/)[1];
                remain = parseInt(remain);
            } catch (e) {
                console.log(`Get hash error, ignore.`);
                remain = -1;
            }
        }
        return remain;
    }

    forkTasks(doSave, extraConfigs = {}) {
        console.log(`forkTasks`);
        return new Promise(async (onFetched, onFetchFail) => {
            let info = {};
            try {
                info.bookName = await this.findBookName();
                info.chapIndex = await this.findChapIndex();
                info.chapName = await this.findChapName();
                info.picUrls = await this.findPicUrls();
                info.fileNames = await this.findFileNames();
            } catch (e) {
                onFetchFail(e);
                return
            }

            console.log(`info: \n`, info);
            let tasks = this.#forkMangaChap(info, extraConfigs);

            // 保存
            if (!doSave) {
                console.log(`不保存 tasks.json`);
                onFetched(tasks);
                return;
            }
            let indexStr = '';
            if (info.chapIndex) {
                indexStr = `${info.chapIndex}`.padStart(4, '0') + '_';
            }
            var saveName = `tasks_${indexStr}${info.chapName}.json`;
            if (typeof doSave === 'string' || doSave instanceof String) {
                saveName = `tasks${doSave}.json`;
            }
            console.log(saveName);
            saveTextFile(JSON.stringify(tasks), saveName);
            // tasks.json 已完成
            onFetched(tasks);
        });
    }

    /**
     * #forkMangaChap()
     * 根据 info 组装成 tasks.json
     * 依赖 utils.js 里面的 getExtByName() 和 saveTextFile()
     * @param chapInfo: bookName, chapIndex, chapName, picUrls
     * @param extraConfigs: configs 额外配置 configs
     * @returns tasks: task json
     */
    #forkMangaChap(chapInfo, extraConfigs = null) {
        if (!getExtByName || !saveTextFile) {
            throw new Error('Utils.js not imported!');
        }
        let info = chapInfo;
        var bookName = info.bookName;
        let chapName = info.chapName;
        let chapIndex = info.chapIndex;
        let fileNames = info.fileNames;
        if (chapIndex) {
            chapName = `${chapIndex}`.padStart(4, '0') + '_' + chapName;
        }
        let tasks = {};
        // config
        let referer = `${window.location.protocol}//${window.location.host}`;
        console.log(info);
        if (info.picUrls.length === 0) {
            console.log(`No pics found`);
            return tasks;
        }
        tasks['config'] = {};
        tasks['config']['referer'] = referer;
        tasks['config']['book_name'] = bookName;
        if (extraConfigs) {
            Object.keys(extraConfigs).forEach(k => {
                tasks['config'][k] = extraConfigs[k];
            });
            console.log(`configs: ${tasks['config']}`);
        }
        // 图片列表
        tasks[chapName] = [];
        let i = 0;
        let hasNames = info.fileNames?.length === info.picUrls.length;
        info.picUrls.forEach(_url => {
            let url = _url;
            let ext = getExtByName(url);
            let fileName = '';
            if (hasNames) {
                // 加上 url 里的文件名
                let orgName = getFileNameByUrl(url);
                fileName = info.fileNames[i] + `_${orgName}`;
                console.log(`info.fileName[${i}]: ${fileName}`);
                i += 1;
            } else { // 默认使用序号命名
                fileName = `${i += 1}`.padStart(4, '0') + ext;
            }
            tasks[chapName].push({'url': url, 'file_name': fileName});
        });

        console.log(tasks);
        return tasks;
    }

    /**
     * resumeNextChap()
     * @param remain: 当前剩余页面数
     * @param timeout: 转到下一个页面的延时
     * @returns {number|*}: 跳转后还剩几个页面
     */
    async resumeNextChap(remain, timeout = 3_000) {
        let nextPageUrl = "";
        await this.findNextChapUrl().then(url => {
            nextPageUrl = url;
        });
        console.log(`next: ${nextPageUrl}\nremain: ${remain}`);
        let nextUrl = new URL('undefined:');
        if (nextPageUrl) {
            nextUrl = new URL(nextPageUrl);
        }
        if (nextUrl.host.length === 0 || isNaN(remain) || remain <= 0) {
            console.log('任务结束');
            return remain;
        }
        console.log(`${timeout / 1_000}S 后进入下一话...`);
        toast('即将进入下一话...');
        let thenRemain = remain - 1;
        nextUrl.searchParams.append('remain', `${thenRemain}`);
        setTimeout(() => {
            window.open(nextUrl + '', '_self');
        }, timeout);
        return thenRemain;
    }

}