// ==UserScript==
// @name         Kindle-ID&Names
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  找出 kindle 的书籍 ID 与书名的对应关系
// @author       Akuma
// @match        https://www.amazon.cn/gp/digital/fiona/manage*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/kindle-id-names.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/kindle-id-names.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    var result = {};
    var lists = document.querySelectorAll('.contentTableList_myx')[1].querySelectorAll('.tab_myx>a>.ng-scope>div>div');
    lists.forEach(item => {
        // B08BRWW2ZY
        var bookId = item.getAttribute('name').replaceAll('contentTabList_', '');
        // 双城记(xxxxx...
        var bookName = item.querySelector('.myx-float-left').firstElementChild.title;
        bookName = bookName.replaceAll('）', ')').replaceAll('（', '(');
        bookName = bookName.split(/[（【]/)[0].replaceAll(' (', '(');
        bookName = bookName.replace(/\(.*[！，。《]?\)/g, '');
        bookName = verifyFileName(bookName);
        // 记录
        result[bookId] = bookName;
    });
    var json = JSON.stringify(result);
    console.log(json);
})();

function verifyFileName(fileName) {
    fileName = fileName.replace(/[\\\/\s+、，。]/g, '_')
    fileName = fileName.replace('（', '(').replace('）', ')').replace('：', ':');
    var reg = /[/·. :*?"<>|]/g;
    fileName = fileName.replace(reg, '_');
    fileName = fileName.replace(/_+/, '_');
    if (fileName.length > 150) {
        fileName = fileName.substring(0, 100);
    } //# 文件名超长
    return fileName;
}