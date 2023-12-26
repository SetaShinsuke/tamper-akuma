// ==UserScript==
// @name         crawler-gcores-radio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://www.gcores.com/albums/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-gcores-radio.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-gcores-radio.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

let API_RADIO = `https://www.gcores.com/gapi/v1/radios/`;
let API_RADIO_PROTECTED = `https://www.gcores.com/gapi/v1/medias/protected/radios/`;

class CrawlerGcsAlbum extends CrawlerBase {
    needVip(){
        let needVip = /赠送/.test(document.querySelector('.albumDetail_actions').innerText);
        console.log(`need Vip: ${needVip}`);
        return needVip;
    }

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = 'GCores';
            // 会员内容
            if (this.needVip()) {
                bookName = 'GPASS';
            }
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = window.location.pathname.replace('/albums/', '');
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = document.querySelector('.albumDetail_content h1').innerText;
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise(async (resolve, reject) => {
            let radioIds = Array.from(document.querySelectorAll('.albumRadios h3 a')).map(a => {
                return a.href.split('radios/').pop();
            });
            await this.getRadio(radioIds[0]).then(res => {

            });
            let picUrls = [];
            console.log(`picUrls: ` + picUrls);
            resolve(picUrls);
        });
    }

    getRadio(radioId) {
        return new Promise((resolve, reject) => {
            let needVip = this.needVip();
            let requestUrl = API_RADIO + radioId;
            if(needVip){
                requestUrl = API_RADIO_PROTECTED + radioId;
            }
            console.log(requestUrl);
            GM_xmlhttpRequest({
                method: "GET",
                url: requestUrl,
                headers: {
                    "Referer": getReferer()
                },
                onerror: function (error) {
                    console.log('Get radio api error: \n', error);
                },
                onload: function (response) {
                    console.log(response);
                    let resJson = JSON.parse(response.responseText);
                    console.log(resJson);
                    resolve(response);
                }
            });
        });
    }

    findFileNames() {
        return new Promise((resolve, reject) => {
            let fileNames = Array.from(document.querySelectorAll('.albumRadios h3 a')).map(a => {
                return verifyFileName(a.innerText);
            });
            console.log(`fileNames: ` + fileNames);
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
    // do stuff
    let crawler = new CrawlerGcsAlbum();
    // let remain = crawler.getRemainCount();
    let onClick = () => {
        crawler.forkTasks(DO_SAVE, EX_CONFIGS).then(tasks => {
            // crawler.resumeNextChap(remain, NEXT_TIMEOUT);
        });
    }
    addButton('获取文件', {'top': '10%'}, onClick, 0.5);
    // if (remain <= 0) {
    //     console.log('Nothing remain');
        // return
    // }
    // toast(`自动进行任务，剩余: ` + remain);
    // onClick();
}