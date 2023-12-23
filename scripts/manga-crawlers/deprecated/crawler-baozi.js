// ==UserScript==
// @name         crawler-baozi
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Crawl manga pics form baozimh.com
// @author       Akuma
// @match        https://cn.czmanga.com/comic/chapter/*
// @match        https://cn.czmanga.com/comic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// ==/UserScript==

let referer = `${window.location.protocol}//${window.location.host}`;
let remain = 0; // 想要下载总共多少话，就在 query 里设置数值

(function () {
    'use strict';
    console.log('Starting inject...');
    if (/\/comic\/chapter\//.test(window.location.pathname)) {
        // 阅读页，添加按钮爬取图片
        injectChapPage();
    } else { // 作品页，添加 index
        injectInfoPage();
    }
})();

function injectChapPage() {
    // 地址栏设置了 remain，自动进行并继续任务
    let urlParams = new URLSearchParams(document.location.search);
    remain = parseInt(urlParams.get('remain'));
    console.log('remain: ' + remain);

    let onClick = (e => {
        // 滚到页面底部让它加载图片
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(_ => {
            getTasks();
            followAction();
        }, 1500);
    });
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);

    // 没有剩余任务，停止
    if (isNaN(remain) || remain === 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ${remain}`);
    onClick();
}

function followAction() {
    if (document.querySelector('#is_last_chapter_a')) {
        console.log('任务结束');
        return;
    }
    let nextUrl = new URL(document.querySelector('#next-chapter').href);
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

function getTasks() {
    var tasks = {};
    var bookName = document.title.match(/- (.*) - 包子漫画/)[1];
    bookName = verifyFileName(bookName);
    tasks['config'] = {};
    tasks['config']['referer'] = referer;
    tasks['config']['book_name'] = bookName;

    let chapName = document.querySelector(`.header .title`).textContent;
    let chapIndex = window.location.pathname.match(/\/0_(.*).html/)[1];
    chapIndex = parseInt(chapIndex) + 1;
    chapName = `${chapIndex}`.padStart(4, '0') + '_' + chapName;

    tasks[chapName] = [];
    let i = 0;
    document.querySelectorAll(`.comic-contain amp-img`).forEach(img => {
        let url = img.getAttribute('data-src');
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

function injectInfoPage() {
    runWhenLoaded('#chapter-items', () => {
        let i = 1;
        Array.from(document.querySelectorAll('#chapter-items>div span')).forEach(span => {
            span.textContent = `[${i}]${span.textContent}`;
            i += 1;
        });
    });
}
