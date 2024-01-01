// ==UserScript==
// @name         mhxin
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  desc
// @author       Akuma
// @match        https://www.mhxin.com/manhua/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/mhxin.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/mhxin.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = verifyFileName(document.querySelector('.book_title').title);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = null;
            console.log(`注意 vol_heads 以此网站的 ID 为准!`)
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = verifyFileName(document.querySelector('.book_num').title);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = chapterImages;
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = nextChapterData.url;
            console.log(`nextChapUrl: ` + nextChapUrl);
            resolve(nextChapUrl);
        });
    }
}

// ---------- 正片开始 --------------------------------------------------
(function () {
    'use strict';
    console.log('Ready to crawl.');
    inject();
})();

function inject() {
    // do stuff
    let crawler = new CrawlerImpl();
    let remain = crawler.getRemainCount();
    let onClick = async () => {
        let info = {};
        await crawler.findChapName().then(chapName => {
            info.chapName = chapName;
        });
        await crawler.findPicUrls().then(picUrls => {
            info.picUrls = picUrls;
        });
        console.log(`info: \n`, info);
        let bat = '';
        let i = 0;
        info.picUrls.forEach(pic => {
            let folder = `"C:\\Users\\24783\\Downloads\\Video\\${info.chapName}"`;
            let fileName = `${i+=1}`.padStart(4, '0') + getExtByName(pic);
            bat += `"C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe" /n /p ${folder} /f ${fileName} /d ${pic}`;
            bat += " & ";
        });
        bat += 'pause';
        console.log(bat);
        saveTextFile(bat, `tasks_${info.chapName}.bat`);
        // saveGbkFile(bat, `tasks_${info.chapName}.txt`);
        // crawler.forkTasks(false, EX_CONFIGS).then(tasks => {
        //     let batch = '';
        //     tasks.forEach(task=>{
        //
        //     });
        //     crawler.resumeNextChap(remain, NEXT_TIMEOUT);
        // });
    }
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);
    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
}