// ==UserScript==
// @name         Crawl-Ythuiju
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取扑飞漫画网的漫画
// @author       Akuma
// @match        https://www.ythuiju.com/chapter/*?save=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawl-ythuiju.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawl-ythuiju.js
// ==/UserScript==

(function () {
    'use strict';
    getTasks();
})();

function getTasks() {
    var info = __cr;
    var bookName = info.comic_name;
    var chapId = info.chapter_id;
    var chapName = info.chapter_name;
    var imgs = info.chapter_list_all;
    // __cr.nexturl

    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    tasks[chapName] = [];
    imgs.forEach(img => {
        var url = img.split('url=').pop().replaceAll('.low', '.high');
        var fileName = url.split('/').pop();
        fileName = fileName.replaceAll('-smh.high', '').padStart(8, '0');
        fileName = `${chapId}_` + fileName;
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });

    console.log(tasks);
    // 保存
    var save_name = `tasks_${(new Date()).getTime()}.json`;
    if (bookName === '惊爆校园') {
        var index = chapId - 1008325;
        save_name = `tasks_` + `${index}` + `.json`;
    }
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);

    // 选中下一章
    var nextBtn = document.querySelector('.looknext');
    nextBtn.href += '?save=true';
    nextBtn.focus();
}

function verifyFileName(fileName) {
    fileName = fileName.replace('\\', '_').replace('/', '_');
    fileName = fileName.replace('（', '(').replace('）', ')')
        .replace(' ', '_').replace('：', ':');
    var reg = /[/:*?"<>|]/g;
    fileName = fileName.replace(reg, '-');
    if (fileName.length > 150) {
        fileName = fileName.substring(0, 100);
    } //# 文件名超长
    return fileName;
}

// 保存.txt
function saveTextFile(text, fileName) {
    var data = new Blob([text], {type: 'text/plain'});
    // // If we are replacing a previously generated file we need to
    // // manually revoke the object URL to avoid memory leaks.
    // if (textFile !== null) {
    //     window.URL.revokeObjectURL(textFile);
    // }
    let textFile = window.URL.createObjectURL(data);

    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = textFile;
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });

    return textFile;
}