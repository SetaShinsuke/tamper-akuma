// ==UserScript==
// @name         crawler-haoman8
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  desc
// @author       Akuma
// @match        https://www.haoman8.com/comic/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-haoman8.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-haoman8.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

// 【注意】只能抓取手机版网页, 用 Head-Editor 修改 UA 即可
class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = shareArr[0].match(/《(.*)》/)[1];
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = document.querySelector('h1.comic-name').innerText.match(/第?(\d+)/);
            chapIndex = chapIndex ? chapIndex[1] : null;
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = document.querySelector('h1.comic-name').innerText;
            chapName = verifyFileName(chapName);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = [...document.querySelectorAll('li.comic-page>img')].map(li => {
                return li.getAttribute('image-loading');
            });
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = document.querySelector('.next-chapter.next-btn').getAttribute('_href');
            nextChapUrl = location.protocol + "//" + location.hostname + nextChapUrl;
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
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);
    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
}