// ==UserScript==
// @name         crawler-tx
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Crawl manga pics from tencent
// @author       Akuma
// @match        https://ac.qq.com/ComicView/index/id/*/cid/*
// @match        https://ac.qq.com/ComicView/index/id/*/seqno/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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

// 1. 滚动每个 img 然后爬取（弃用）
// 2. 直接调用 DATA，然后 decode

let remain = 0; // 想要下载总共多少话，就在 query 里设置数值

(function () {
    'use strict';
    console.log('Starting inject...');

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
        chapName = verifyFileName(chapName).replace('#','_');
        let chapIndex = document.querySelector(`.now-reading .tool_chapters_list_number`).textContent.match(/\[(.*)\]/)[1];
        if (!chapIndex) {
            chapIndex = window.location.pathname.match(/\/(cid|seqno)\/(.?)(\??)/)[2];
        }
        chapName = `${chapIndex}`.padStart(4, '0') + `_` + chapName;

        // 从 DATA 里直接获取 picture:[]
        console.log(DATA);
        let picUrls = [];
        try {
            let picData = atob(DATA).match(/"picture.*?]/)[0];
            picUrls = JSON.parse(`{${picData}}`).picture.map(it => it.url);
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
                toast('滚动爬取完毕,准备下载...');
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

