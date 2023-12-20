// @require https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler_utils.js

/**
 * forkMangaChap()
 * 根据 info 组装成 tasks.json
 * 依赖 utils.js 里面的 getExtByName() 和 saveTextFile()
 * @param chapInfo: bookName, chapIndex, chapName, picUrls
 * @param doSave: true: 默认名保存(chapName); false: 不保存; string: 修改保存名
 * @param extraConfigs: configs 额外配置 configs
 * @returns tasks: task json
 */
function forkMangaChap(chapInfo, doSave = true, extraConfigs = null) {
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

    // 保存
    if (!doSave) {
        console.log(`不保存 tasks.json`);
        return tasks;
    }
    var save_name = `tasks_${chapName}.json`;
    if (typeof doSave === 'string' || doSave instanceof String) {
        save_name = `tasks${doSave}.json`;
    }
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
    return tasks;
}

/**
 * resumeNextChap()
 * @param nextPageUrl: 下一个要爬的页面
 * @param remain: 当前剩余页面数
 * @param timeout: 转到下一个页面的延时
 * @returns {number|*}: 跳转后还剩几个页面
 */
function resumeNextChap(nextPageUrl, remain, timeout = 3_000) {
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
    }, 3000);
    return thenRemain;
}