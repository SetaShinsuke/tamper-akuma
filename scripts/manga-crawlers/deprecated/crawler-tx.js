// ==UserScript==
// @name         crawler-tx
// @namespace    http://tampermonkey.net/
// @version      0.17
// @description  Crawl manga pics from tencent
// @author       Akuma
// @match        https://ac.qq.com/ComicView/index/id/*/cid/*
// @match        https://ac.qq.com/ComicView/index/id/*/seqno/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-end
// @grant        GM_notification
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-tx.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-tx.js
// ==/UserScript==

let referer = `${window.location.protocol}//${window.location.host}`;
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", "Referer": referer, "Origin": referer
};
// 不再match移动端: https://m.ac.qq.com/chapter/index/id/*/cid/*

// 1. 直接调用 DATA，然后 decode
// 2. 滚动每个 img 然后爬取
// DATA 只有在 nonce 被修改之前可以解码出来，因此不能稳定成功
// 禁用此地址后可解析DATA - https://ac.gtimg.com/media/js/ac.page.chapter.view_v2.7.0.js?v=202302281653

let remain = 0; // 想要下载总共多少话，就在 query 里设置数值

(function () {
    'use strict';
    console.log('Starting inject...');
    console.log(`Fake nonce: ${nonce}`);
    // 自动关弹幕
    roastOff();

    // 地址栏设置了 remain，自动进行并继续任务
    let urlParams = new URLSearchParams(document.location.search);
    remain = parseInt(urlParams.get('remain'));
    console.log('remain: ' + remain);
    let onClick = e => {
        // scrollToCrawl();
        getInfo().then(info => {
            getTasks(info);
            followAction();
        });
    };
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);

    // 没有剩余任务，停止
    if (isNaN(remain) || remain === 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ${remain}`);
    onClick();
})();

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

function followAction() {
    let nextUrl = new URL(document.querySelector('#nextChapter').href);
    if (nextUrl.host.length === 0 || remain === 0 || isNaN(remain)) {
        console.log('任务结束');
        return;
    }
    console.log('3S后进入下一话...');
    toast('即将进入下一话...');
    nextUrl.searchParams.append('remain', `${remain - 1}`);
    setTimeout(() => {
        window.open(nextUrl + '', '_self');
    }, 3000);
}

function getInfo() {
    return new Promise(async resolve => {
        var bookName = document.querySelector('#chapter').getAttribute('title');
        bookName = verifyFileName(bookName);

        let chapName = document.querySelector('#comicTitle>span.title-comicHeading').textContent;
        chapName = verifyFileName(chapName).replace('#', '_');
        let chapIndex = document.querySelector(`.now-reading .tool_chapters_list_number`).textContent.match(/\[(.*)\]/)[1];
        if (!chapIndex) {
            chapIndex = window.location.pathname.match(/\/(cid|seqno)\/(.?)(\??)/)[2];
        }
        chapName = `${chapIndex}`.padStart(4, '0') + `_` + chapName;

        // 从 DATA 里直接获取 picture:[]
        console.log(DATA);
        let picUrls = [];
        try {
            let picData = getDataByDecode();
            if (!picData) {
                console.log('尝试硬解DATA');
                console.log(nonce);
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
        resolve({
            bookName: bookName, chapName: chapName, picUrls: picUrls
        })
    });
}

// 返回 picUrls []
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


function getTasks(info) {
    console.log(info);
    if (info.picUrls.length === 0) {
        console.log(`No pics found`);
        return
    }

    var tasks = {};
    var bookName = info.bookName;
    tasks['config'] = {};
    tasks['config']['referer'] = referer;
    tasks['config']['book_name'] = bookName;

    let chapName = info.chapName;

    tasks[chapName] = [];
    let i = 0;
    info.picUrls.forEach(_url => {
        // xxx/xx.jpg/800 -> xxx/xx.jpg/0
        let url = _url.replace(/(\.[^.^\/]+)\/([^\/]+)$/, '$1/0');
        let ext = getExtByName(url);
        let fileName = `${i += 1}`.padStart(4, '0') + ext;
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });

    console.log(tasks);

    // 保存
    var save_name = `tasks_${chapName}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}

function getDataByDecode() {
    // window.nonce 是被修改过的, getNonce() 搞到的是原始 nonce
    let nonce = getNonce();
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

// function getDataByDecode() {
//     // window.nonce 是被修改过的, getNonce() 搞到的是原始 nonce
//     let nonce = getNonce();
//     if (typeof (nonce) !== 'string') {
//         return false;
//     }
//
//     function Base() {
//         var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//         this.decode = function (c) {
//             var a = "",
//                 b, d, h, f, g, e = 0;
//             for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e < c.length;) b = _keyStr.indexOf(c.charAt(e++)), d = _keyStr.indexOf(c.charAt(e++)), f = _keyStr.indexOf(c.charAt(e++)), g = _keyStr.indexOf(c.charAt(e++)), b = b << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, h = (f & 3) << 6 | g, a += String.fromCharCode(b), 64 != f && (a += String.fromCharCode(d)), 64 != g && (a += String.fromCharCode(h));
//             return a = _utf8_decode(a)
//         };
//         var _utf8_decode = function (c) {
//             for (var a = "", b = 0, d = c1 = c2 = 0; b < c.length;) d = c.charCodeAt(b), 128 > d ? (a += String.fromCharCode(d), b++) : 191 < d && 224 > d ? (c2 = c.charCodeAt(b + 1), a += String.fromCharCode((d & 31) << 6 | c2 & 63), b += 2) : (c2 = c.charCodeAt(b + 1), c3 = c.charCodeAt(b + 2), a += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), b += 3);
//             return a
//         }
//     }
//
// // T: DATA, N: nonce, W: window?
// // nonce 在 chapter_viewer.js 里被替换成了 Math.random()
//     var W = window;
//     var B = new Base(),
//         // T = W['DA' + 'TA'].split(''),
//         // N = W['n' + 'onc' + 'e'],
//         T = DATA.split(''),
//         N = nonce,
//         len, locate, str;
//     N = N.match(/\d+[a-zA-Z]+/g);
//     len = N.length;
//     while (len--) {
//         locate = parseInt(N[len]) & 255;
//         str = N[len].replace(/\d+/g, '');
//         T.splice(locate, str.length)
//     }
//     T = T.join('');
//     _v = JSON.parse(B.decode(T));
//     console.log(_v);
//     return _v;
// }

// async function scrollToCrawl() {
//     // 滚到页面底部让它加载图片
//     // window.scrollTo(0, document.body.scrollHeight);
//     // document.querySelector('.main_control').scrollIntoView({behavior: "smooth"});
//     toast("正在爬取图片...", 'top', 5_000);
//     switch (window.location.hostname) {
//         case 'ac.qq.com':
//             await crawlWeb().then(info => getTasks(info));
//             break;
//         case 'm.ac.qq.com': // 不建议，因为瀑布流图片会错乱
//             await crawMobile().then(info => getTasks(info));
//             break;
//     }
// }
//
// function crawlWeb() {
//     return new Promise((resolve, reject) => {
//         var bookName = document.querySelector('#chapter').getAttribute('title');
//         bookName = verifyFileName(bookName);
//
//         let chapName = document.querySelector('#comicTitle>span.title-comicHeading').textContent;
//         let chapIndex = window.location.pathname.match(/\/(cid|seqno)\/(.?)(\??)/)[2];
//         chapName = `${chapIndex}`.padStart(4, '0') + `_` + chapName;
//
//         let imgSelector = `#comicContain img:not(#adTop)`;
//         let imgs = document.querySelectorAll(imgSelector);
//         let i = 0;
//         // 0.5 秒滚动一图，直到滚到底部
//         let loop = setInterval(() => {
//             console.log(`滚动到 ${i}`);
//             imgs[i].scrollIntoView({behavior: "instant"});
//             i += 1;
//             if (i >= imgs.length) {
//                 // 【注意！】必须滚动到底部，才能完全加载
//                 let picUrls = Array.from(document.querySelectorAll(imgSelector)).map(img => img.src);
//                 resolve({
//                     bookName: bookName,
//                     chapName: chapName,
//                     picUrls: picUrls
//                 });
//                 console.log('已经滚动到底部!');
//                 toast('爬取完毕,准备下载...');
//                 clearInterval(loop);
//             }
//         }, 100); // 读图的速度似乎是70ms
//     });
// }
//
// function crawMobile() {
//     return new Promise((resolve, reject) => {
//         var bookName = document.querySelector('.comic-title').childNodes[0].textContent
//             .replace(/[\n]/, '').replaceAll(' ', '');
//         bookName = verifyFileName(bookName);
//
//         let chapName = document.querySelector(`.comic-chap-title span.chap-title`).textContent;
//         let chapIndex = window.location.pathname.match(/\/(cid|seqno)\/(.?)(\??)/)[2];
//         // '第7话 - 2/36'
//         let indexName = document.querySelector('.float-bar-title>.progress').textContent;
//         indexName = indexName.replace(/ - .*/, '')
//         chapName = `${chapIndex}`.padStart(4, '0') + `_${indexName}_` + chapName;
//
//         let picUrls = document.querySelectorAll(`img.comic-pic`);
//         picUrls = Array.from(picUrls).map(img => img.getAttribute('data-src'));
//
//         resolve({
//             bookName: bookName,
//             chapName: chapName,
//             picUrls: picUrls
//         });
//     });
// }

