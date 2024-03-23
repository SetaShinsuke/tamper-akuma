// ==UserScript==
// @name         crawler-acfun
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://www.acfun.cn/a/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-acfun.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-acfun.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = verifyFileName(articleInfo.title);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return super.findChapIndex();
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = verifyFileName(articleInfo.title); // 与bookName相同
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = [];
            (articleInfo.parts).forEach(part => {
                [...part.content.matchAll(/<img src="([^"]+)">/g)].forEach(match => {
                    picUrls.push(match[1]);
                });
            })
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findFileExt() {
        return '.jpg';
    }

    findNextChapUrl() {
        return super.findNextChapUrl();
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
    let onClick = () => {
        crawler.forkTasks(DO_SAVE, EX_CONFIGS).then(tasks => {
            crawler.resumeNextChap(remain, NEXT_TIMEOUT);
        });
    }
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);
    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
}