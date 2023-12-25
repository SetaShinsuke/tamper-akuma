// 依赖 utils.js 里面的 getExtByName() 和 saveTextFile()

class CrawlerBase {
    constructor() {
    }

    findBookName() {
        return new Promise((resolve, reject) => {
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
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
                console.log(`Get hash error: `);
                console.log(e);
                remain = -1;
            }
        }
        return remain;
    }

    forkTasks(doSave, extraConfigs = {}) {
        return new Promise(async (onFetched, onFetchFail) => {
            let info = {};
            await this.findBookName().then(bookName => {
                info.bookName = bookName;
            }).catch(e => onFetchFail(e));
            await this.findChapIndex().then(chapIndex => {
                info.chapIndex = chapIndex;
            }).catch(e => onFetchFail(e));
            await this.findChapName().then(chapName => {
                info.chapName = chapName;
            }).catch(e => onFetchFail(e));
            await this.findPicUrls().then(picUrls => {
                info.picUrls = picUrls;
            }).catch(e => onFetchFail(e));
            console.log(`info: \n`, info);
            let tasks = this.#forkMangaChap(info, extraConfigs);

            // 保存
            if (!doSave) {
                console.log(`不保存 tasks.json`);
                onFetched(tasks);
                return;
            }
            var save_name = `tasks_${info.chapName}.json`;
            if (typeof doSave === 'string' || doSave instanceof String) {
                save_name = `tasks${doSave}.json`;
            }
            console.log(save_name);
            saveTextFile(JSON.stringify(tasks), save_name);
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
        info.picUrls.forEach(_url => {
            let url = _url;
            let ext = getExtByName(url);
            let fileName = `${i += 1}`.padStart(4, '0') + ext;
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
        await self.findNextChapUrl().then(url => {
            nextPageUrl = url;
        });
        console.log(`next: ${nextPageUrl}\nremain: ${remain}`);
        let nextUrl = new URL(nextPageUrl);
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