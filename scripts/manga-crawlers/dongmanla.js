// ==UserScript==
// @name         dongmanla
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://www.dongman.la/manhua/chapter/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/dongmanla.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/dongmanla.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = verifyFileName(document.querySelector('.mdui-typo-headline').innerText);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = null;
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = verifyFileName(document.querySelector('.mdui-typo-title').innerText);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = Array.from(document.querySelectorAll('.chapter-images .lazyBox img.lazy')).map(img => {
                return img.getAttribute('data-src');
            });
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = document.querySelector('.mdui-float-right a')?.href;
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

async function inject() {
    // do stuff
    let crawler = new CrawlerImpl();
    let remain = crawler.getRemainCount();
    let onClick = () => {
        if(!/\/all.html/.test(window.location.pathname)){
            window.open(window.location.href.replace(/\/\d+.html/, '/all.html'), '_self');
            return
        }
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
    await sleep(1_000);
    onClick();
}