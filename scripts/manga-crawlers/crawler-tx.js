// ==UserScript==
// @name         crawler-tx
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Crawl manga pics from tencent
// @author       Akuma
// @match        https://m.ac.qq.com/chapter/index/id/*/cid/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-tx.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-tx.js
// ==/UserScript==

let referer = `${window.location.protocol}//${window.location.host}`;
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": referer,
    "Origin": referer
};

(function () {
    'use strict';
    console.log('Starting inject...');
    addButton('获取图片', {'top': '10%'}, (e => {
        // 滚到页面底部让它加载图片
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(_ => {
            getTasks();
        }, 1500);
    }), 0.5);
})();

function getTasks() {
    // do stuff
    var tasks = {};
    var bookName = document.querySelector('.comic-title').childNodes[0].textContent
        .replace(/[\n]/, '').replaceAll(' ', '');
    bookName = verifyFileName(bookName);
    tasks['config'] = {};
    tasks['config']['referer'] = referer;
    tasks['config']['book_name'] = bookName;

    let chapName = document.querySelector(`.comic-chap-title span.chap-title`).textContent;
    let chapIndex = window.location.pathname.match(/\/cid\/(.?)(\??)/)[1];
    // '第7话 - 2/36'
    let indexName = document.querySelector('.float-bar-title>.progress').textContent;
    indexName = indexName.replace(/ - .*/, '')
    chapName = `${chapIndex}`.padStart(4, '0') + `_${indexName}_` + chapName;

    tasks[chapName] = [];
    let i = 0;
    document.querySelectorAll(`img.comic-pic`).forEach(img => {
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