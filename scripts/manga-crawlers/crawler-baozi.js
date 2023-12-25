// ==UserScript==
// @name         crawler-baozi
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  desc
// @author       Akuma
// @match        https://cn.czmanga.com/comic/chapter/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 1_500;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = verifyFileName(document.title.match(/- (.*) - 包子漫画/)[1]);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = window.location.pathname.match(/\/0_(.*).html/)[1];
            chapIndex = parseInt(chapIndex) + 1;
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = document.querySelector(`.header .title`).textContent;
            chapName = verifyFileName(chapName);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = Array.from(document.querySelectorAll(`.comic-contain amp-img`))
                .map(img => img.getAttribute('data-src'));
            console.log(`picUrls: ` + picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextPage = document.querySelector('#next-chapter').href;
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
        runWhenLoaded('#bottom', bottomDiv => {
            bottomDiv.scrollIntoView({
                behavior: "instant",
                block: "end"
            });
            // 延迟后开始爬
            setTimeout(() => {
                crawler.forkTasks(DO_SAVE, EX_CONFIGS).then(tasks => {
                    crawler.resumeNextChap(remain, NEXT_TIMEOUT);
                });
            }, 2_500);
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