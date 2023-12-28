// ==UserScript==
// @name         crawler-tx
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  desc
// @author       Akuma
// @match        https://ac.qq.com/ComicView/index/id/*/cid/*
// @match        https://ac.qq.com/ComicView/index/id/*/seqno/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-end
// @grant        GM_notification
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-tx.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-tx.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = document.querySelector('#chapter').getAttribute('title');
            bookName = verifyFileName(bookName);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = document.querySelector(`.now-reading .tool_chapters_list_number`).textContent.match(/\[(.*)\]/)[1];
            if (!chapIndex) {
                chapIndex = window.location.pathname.match(/\/(cid|seqno)\/(.?)(\??)/)[2];
            }
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = document.querySelector('#comicTitle>span.title-comicHeading').textContent;
            chapName = verifyFileName(chapName).replace('#', '_');
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise(async (resolve, reject) => {
            let picUrls = [];
            try {
                let picData = getDataByDecode();
                if (!picData) {
                    console.log('尝试硬解DATA');
                    picData = atob(DATA).match(/"picture.*?]/)[0];
                    picData = JSON.parse(`{${picData}}`);
                }
                picUrls = picData.picture.map(it => it.url);
                console.log('成功从 DATA 获取数据!');
            } catch (e) {
                console.log(e);
                console.log('DATA 解码失败，尝试滚动爬取...');
                toast('DATA 解码失败，尝试滚动爬取...');
                await getPicsByScroll().then(urls => {
                    picUrls = urls;
                });
            }
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = document.querySelector('#nextChapter').href;
            console.log(`nextChapUrl: ` + nextChapUrl);
            resolve(nextChapUrl);
        });
    }
}

// ---------- 正片开始 --------------------------------------------------
(function () {
    'use strict';
    console.log('Ready to crawl.');
    roastOff();
    console.log(`Fake nonce: ${nonce}`);
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

function roastOff() {
    runWhenLoaded('#icoBarShow', toastSwitch => {
        let isOn = /roastState=1/.test(document.cookie);
        console.log('弹幕是否开启: ' + isOn);
        if (isOn) {
            toastSwitch.click();
            console.log('弹幕已关闭');
        }
    });
}

function getDataByDecode() {
    // window.nonce 是被修改过的, getNonce() 搞到的是原始 nonce
    let nonce = getNonce();
    console.log(`nonce: ${nonce}`);
    if (typeof (nonce) !== 'string') {
        return false;
    }
    let data = decode(DATA, nonce);
    console.log(data);
    return data;
}

// 去 <script> 里找 nonce
function getNonce() {
    let nonce = null;
    let scripts = document.body.getElementsByTagName('script');
    Array.from(scripts).forEach(script => {
        let jsText = script.innerText;
        if (/^\n\s+window\["n/.test(jsText)) {
            let result = {};
            jsText = jsText.replace(/(^[ \t\r\n]+|[ \t\r\n]+$)/g, '')
            console.log(jsText);
            new Function('window', jsText)(result);
            console.log(result);
            nonce = result['nonce'];
        }
    });
    return nonce;
}

function decode(raw, _nonce) {
    var a = String.fromCharCode((1 << 7) - 31);
    var key = ['d' + a + 't' + a, 'mp' + 'mvr'].join('-');
    var nonce = _nonce || window.nonce;
    raw = raw.split('');
    nonce = nonce.match(/\d+[a-zA-Z]+/g);
    var len = nonce.length;
    while (len--) {
        var offset = parseInt(nonce[len]) & 255;
        var noise = nonce[len].replace(/\d+/g, '');
        raw.splice(offset, noise.length);
    }
    // var _data = ek.encoding.decodeBase64(raw.join(''));
    var _data = atob(raw.join(''));
    // console.log(_data);
    return JSON.parse(_data);
}

function getPicsByScroll() {
    return new Promise(resolve => {
        let imgSelector = `#comicContain img:not(#adTop)`;
        let imgs = document.querySelectorAll(imgSelector);
        let i = 0;
        // 0.5 秒滚动一图，直到滚到底部
        let loop = setInterval(() => {
            console.log(`滚动到 ${i}`);
            if (/pixel.gif/.test(imgs[i].src)) {
                console.log(`图片 [${i}] 未加载, 重试中...`);
                return
            }
            imgs[i].scrollIntoView({
                behavior: "instant",
                block: "end"
            });
            i += 1;
            if (i >= imgs.length) {
                // 【注意！】必须滚动到底部，才能完全加载
                let picUrls = Array.from(document.querySelectorAll(imgSelector)).map(img => img.src);
                resolve(picUrls);
                console.log('已经滚动到底部!');
                toast('滚动爬取完毕,准备下载...', 5_000);
                clearInterval(loop);
            }
        }, 250); // 读图的速度似乎是70ms
    });
}