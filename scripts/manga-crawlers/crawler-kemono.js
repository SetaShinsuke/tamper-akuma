// ==UserScript==
// @name         crawler-kemono
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  desc
// @author       Akuma
// @match        https://kemono.su/fanbox/user/*/post/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-kemono.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-kemono.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {'memo': ''};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = document.querySelector('.post__title').innerText;
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
            let chapName = location.pathname.replace(`/`, '').replaceAll(`/`, '_');
            chapName = verifyFileName(chapName);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findFileNames() {
        let names = [];
        let chapName = location.pathname.replace(`/`, '').replaceAll(`/`, '_');
        chapName = verifyFileName(chapName);
        let imgCount = document.querySelectorAll(`.post__files figure a`).length;
        for (var i = 0; i < imgCount; i++) {
            names.push(`${chapName}_` + `${i}`.padStart(4, '0'));
        }
        return names;
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = Array.from(document.querySelectorAll(`.post__files figure a`)).map(x => x.href);
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
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