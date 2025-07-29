// ==UserScript==
// @name         crawler-pixiv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://www.pixiv.net/users/*/bookmarks/artworks*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-pixiv.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-pixiv.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {
    'proxy': 'http://192.168.50.266:7890'
};

const API_ART = `https://www.pixiv.net/ajax/illust/`; //+artwork_id
// ART_PICS = API_ART + '/pages'
let globalPicUrls = null;

let netHelper = null;

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = document.title;
            bookName = verifyFileName(bookName);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            // 第几页
            let chapIndex = document.querySelector(`nav button[aria-current="true"] span`).innerText;
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = document.querySelector(`nav button[aria-current="true"] span`).innerText;
            chapName = `${document.title}_${Date.now()}_P_${chapName}`;
            chapName = verifyFileName(chapName).replace('#', '_');
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise(async (resolve, reject) => {
            let picUrls = [];
            for (const it of Array.from(document.querySelectorAll('ul>li label a'))) {
                // let it = document.querySelector('ul>li label a');
                let artId = it.getAttribute('data-gtm-value');
                netHelper = new NetHelper();
                // let url_art = `${API_ART}/${artId}`;
                let url_pics = API_ART + artId + `/pages`;
                console.log(url_pics);
                await netHelper.get(url_pics).then(resJson => {
                    console.log(resJson);
                    let pics = resJson.body.map(picData => {
                        return picData.urls.original;
                    });
                    console.log(pics);
                    picUrls = picUrls.concat(pics);
                }).catch(err => console.log(err));
            }
            console.log(`picUrls: \n`, picUrls);
            globalPicUrls = picUrls;
            resolve(picUrls);
        });
    }

    findFileNames() {
        return new Promise(async (resolve, reject) => {
            let fileNames = null;
            if (globalPicUrls) {
                fileNames = globalPicUrls.map(picUrl => {
                    // return picUrl.split('/').pop();
                    return '';
                });
            }
            console.log(`fileNames: \n`, fileNames)
            resolve(fileNames);
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
    netHelper = new NetHelper();
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