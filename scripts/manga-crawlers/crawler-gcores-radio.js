// ==UserScript==
// @name         crawler-gcores-radio
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  desc
// @author       Akuma
// @match        https://www.gcores.com/albums/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-gcores-radio.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-gcores-radio.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

let API_RADIO = `https://www.gcores.com/gapi/v1/radios/#{radio_id}?include=media`;
let API_RADIO_PROTECTED = `https://www.gcores.com/gapi/v1/medias/protected/radios/`;
let RADIO_HOST = `https://alioss.gcores.com/uploads/audio/`;

let VIP_CATES = ['Gadio Spec', '会员专享', 'BOOOM 暴造游戏开发'];

let referer = `${window.location.protocol}//${window.location.host}`
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": referer,
    "Origin": referer
}

class CrawlerGcsAlbum extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = 'GCores';
            // 会员内容
            if (/赠送/.test(document.querySelector('.albumDetail_actions').innerText)) {
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

    findFileNames() {
        return new Promise((resolve, reject) => {
            let fileNames = Array.from(document.querySelectorAll('.albumRadios h3 a')).map(a => {
                return verifyFileName(a.innerText);
            });
            console.log(`fileNames: \n`, fileNames);
            resolve(fileNames);
        });
    }

    findPicUrls() {
        return new Promise(async (resolve, reject) => {
            let picUrls = [];

            for (const li of Array.from(document.querySelectorAll('.albumRadios .albumRadio'))) {
                let a = li.querySelector('h3 a');
                let radioId = a.href.split('radios/').pop();
                let cate = li.querySelector('.albumRadio_title .u_color-category').innerText;
                let isProtected = VIP_CATES.includes(cate);
                console.log(`radioId: ${radioId}, isProtected: ${isProtected}`);
                await getRadioUrl(radioId, isProtected).then(fileUrl => {
                    picUrls.push(fileUrl);
                });
            }
            console.log(`picUrls: ` + picUrls);
            resolve(picUrls);
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
    let crawler = new CrawlerGcsAlbum();
    let onClick = () => {
        crawler.forkTasks(DO_SAVE, EX_CONFIGS).then(tasks => {
            // crawler.resumeNextChap(remain, NEXT_TIMEOUT);
        });
    }
    addButton('获取文件', {'top': '10%'}, onClick, 0.5);
}

function getRadioUrl(radioId, isProtected) {
    return new Promise(async (resolve, reject) => {
        let randomMs = randomInRange(1_000, 5_000);
        console.log(`随机等待 ${randomMs}ms 后开始获取`);
        await sleep(randomMs);
        let requestUrl = API_RADIO + radioId;
        if (isProtected) {
            // 付费内容
            requestUrl = API_RADIO_PROTECTED + radioId;
            console.log(requestUrl);
            GM_xmlhttpRequest({
                method: "HEAD",
                url: requestUrl,
                headers: HEADERS,
                onerror: function (error) {
                    console.log('Get vip radio api error: \n', error);
                    reject(error);
                },
                onload: function (response) {
                    // unsafeWindow.response = response;
                    let fileUrl = response.finalUrl;
                    console.log(`file url: ${fileUrl}`);
                    resolve(fileUrl)
                }
            });
        } else {
            requestUrl = API_RADIO.replace('#{radio_id}', radioId);
            console.log(requestUrl);
            GM_xmlhttpRequest({
                method: "GET",
                url: requestUrl,
                headers: HEADERS,
                onerror: function (error) {
                    console.log('Get radio api error: \n', error);
                    reject(error);
                },
                onload: function (response) {
                    // console.log(response);
                    console.log(response.responseText);
                    let resJson = JSON.parse(response.responseText);
                    console.log(resJson);
                    let includes = resJson.included;
                    for (const inc of includes) {
                        if (inc.type === 'medias') {
                            // 617b67d5-0f40-4b24-9851-69f707d27665.mp3
                            let fileId = inc.attributes.audio;
                            let fileUrl = RADIO_HOST + fileId;
                            console.log(`radio url: `, fileUrl);
                            resolve(fileUrl);
                            break;
                        }
                    }
                }
            });
        }
    });
}