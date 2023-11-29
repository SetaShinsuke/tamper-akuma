// ==UserScript==
// @name         crawler-baozi
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Crawl manga pics form baozimh.com
// @author       Akuma
// @match        https://cn.czmanga.com/comic/chapter/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// ==/UserScript==

let referer = `${window.location.protocol}//${window.location.host}`;

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
