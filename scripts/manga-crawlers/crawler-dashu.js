// ==UserScript==
// @name         Crawl-Dashu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取大树漫画的漫画
// @author       Akuma
// @match        https://www.dashuhuwai.com/comic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-dashu.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-dashu.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    // 图片列表在JS代码里，并且这部分代码被加密了
    // https://res.xiaoqinre.com/images/comic/646/1290950/1587399540Jk6CM4SQU8YNnNGC.jpg
    var funcStr = myvue.$mount.toString();


}