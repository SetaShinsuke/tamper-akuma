// ==UserScript==
// @name         crawler-gcores-radio
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  desc
// @author       Akuma
// @match        https://www.gcores.com/albums/*
// @match        https://www.gcores.com/radios/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       context-menu
// @grant        GM_xmlhttpRequest
// @connect      protected.gcores.com
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
        return new Promise(async (resolve, reject) => {
            let bookName = 'GCores';
            // 会员内容
            if (/赠送/.test(document.querySelector('.albumDetail_actions').innerText)) {
                bookName = 'GPASS';
            }
            let chapIndex = await this.findChapIndex();
            let chapName = await this.findChapName();
            if (chapIndex && chapName) {
                bookName = `${chapIndex}`.padStart(4, '0') + '_' + chapName;
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
            chapName = verifyFileName(chapName);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findFileNames() {
        return new Promise((resolve, reject) => {
            // :not(.is_locked) 未解锁的节目
            let index = 0;
            let fileNames = Array.from(document.querySelectorAll('.albumRadios .albumRadio:not(.is_locked) h3 a')).map(a => {
                let radioId = a.href.match(/\/radios\/(\d+)/);
                if (radioId.length > 1) {
                    radioId = "_" + radioId[1];
                } else {
                    radioId = "";
                }
                let name = verifyFileName(`${index}`.padStart(3, '0') + radioId + '_' + a.innerText);
                index += 1;
                return name;
            });
            console.log(`fileNames: \n`, fileNames);
            resolve(fileNames);
        });
    }

    findPicUrls() {
        return new Promise(async (resolve, reject) => {
            let picUrls = [];

            let list = Array.from(document.querySelectorAll('.albumRadios .albumRadio:not(.is_locked)'));
            let index = 0;
            let total = list.length;
            for (const li of list) {
                let text = `${index += 1}/${total}`;
                console.log(text);
                toast(`正在获取: ${text}`);
                let a = li.querySelector('h3 a');
                let radioId = a.href.split('radios/').pop();
                let cate = li.querySelector('.albumRadio_title .u_color-category').innerText;
                let isProtected = VIP_CATES.includes(cate);
                let radioName = li.querySelector('h3>a')?.innerText;
                // 付费的 cate，并且不是试听集
                isProtected = isProtected && !/试听/.test(radioName);
                console.log(`radioId: ${radioId}, isProtected: ${isProtected}`);
                // 等待
                let randomMs = randomInRange(1_000, 5_000);
                console.log(`随机等待 ${randomMs}ms 后开始获取`);
                await sleep(randomMs);
                // 等待结束
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
    if (/\/radios\//.test(window.location.pathname)) {
        injectRadioPage();
    } else if (/\/albums\//.test(window.location.pathname)) {
        injectAlbumPage();
    }
})();

function injectAlbumPage() {
    let crawler = new CrawlerGcsAlbum();
    crawler.forkTasks(DO_SAVE, EX_CONFIGS)
}

function injectRadioPage() {
    let name = document.querySelector('h1.originalPage_title')?.innerText;
    name = name || document.querySelector('.gpf_header_info_text>p>a').innerText;
    name = verifyFileName(name);
    // 获取文件
    let radioId = window.location.pathname.match(/\/radios\/(\d+)/)[1];
    let cate = document.querySelector('.story_container a.u_color-category')?.innerText;
    cate = cate || document.querySelector('.gpf_header_title>a')?.innerText;
    let isProtected = VIP_CATES.includes(cate);
    isProtected = isProtected && !/试听/.test(name);
    getRadioUrl(radioId, isProtected).then(fileUrl => {
        copyToClipboard(name);
        toast('文件名已复制!');
        window.open(fileUrl, '_blank');
    });
}

function getRadioUrl(radioId, isProtected) {
    return new Promise(async (resolve, reject) => {
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