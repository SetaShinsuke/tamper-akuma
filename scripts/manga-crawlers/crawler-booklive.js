// ==UserScript==
// @name         crawler-booklive
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  获取漫画封面图
// @author       Akuma
// @match        https://booklive.jp/product/index/title_id/*/vol_no/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-booklive.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-booklive.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = document.querySelector('.book_title').innerText;
            bookName = verifyFileName(bookName);
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
            let chapName = '0000_Covers';
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    getVolCount() {
        let volCount = document.querySelector('.page_number>span:last-child').innerText.match(/(\d+)/)[1];
        volCount = parseInt(volCount);
        console.log(`Vol count: ${volCount}`);
        return volCount;
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let bookId = location.pathname.match(/title_id\/(\d+)\//)[1];
            let volCount = this.getVolCount();
            let picUrls = [];
            for (let i = 0; i < volCount; i++) {
                let vol = `${i + 1}`.padStart(3, '0');
                picUrls.push(`https://res.booklive.jp/${bookId}/${vol}/thumbnail/X.jpg`);
            }
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }


    findFileNames() {
        return new Promise((resolve, reject) => {
            let fileNames = [];
            for (let i = 0; i < this.getVolCount(); i++) {
               fileNames.push(`000_` + `${i+1}`.padStart(3,'0') + '_covers_jp');
            }
            resolve(fileNames);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = null;
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
    let onClick = () => {
        crawler.forkTasks(DO_SAVE, EX_CONFIGS).then(tasks => {
            crawler.resumeNextChap(remain, NEXT_TIMEOUT);
        });
    }
    addButton('获取封面', {'top': '10%'}, onClick, 0.5);
    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
}