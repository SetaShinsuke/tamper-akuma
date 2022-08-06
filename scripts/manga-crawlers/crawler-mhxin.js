// ==UserScript==
// @name         Crawl-MHXin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取漫画芯的漫画
// @author       Akuma
// @match        https://www.mhxin.com/manhua/*/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-mhxin.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-mhxin.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    var tasks = {};
    var bookName = verifyFileName(document.querySelector('.book_title').title);
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = pageTitle.replace(' ', '_');
    if (/^[0-9]{1,3}话/.test(chapName)) {
        chapName = '第' + chapName;
    }
    // "第33话" "特别篇"
    var indexName = chapName.split('_')[0]
    var chapIndex = document.location.pathname.split('.html')[0].split('/').pop();
    // 针对钢炼漫画，获取 index
    if (prevChapterData.comic_id === 14482 || nextChapterData.comic_id === 14482) {
        chapIndex = parseInt(chapIndex) - 991985;
    }
    // 第1话_两个炼金术师
    chapName = `${chapIndex}`.padStart(3, '0') + '_' + chapName;
    chapName = verifyFileName(chapName);
    tasks[chapName] = [];
    var i = 0;
    chapterImages.forEach(img => {
        i += 1;
        var url = img;
        var ext = img.split('.').pop();
        var fileName = `${indexName}_` + `${i}`.padStart(3, '0') + `.${ext}`;
        tasks[chapName].push({
            'url': url, 'file_name': fileName
        });
    });
    console.log(tasks);

    // 保存
    var save_name = `tasks_${chapIndex}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}

function saveTextFile(text, fileName) {
    var data = new Blob([text], {type: 'text/plain'});
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

function verifyFileName(fileName) {
    fileName = fileName.replace('\\', '_').replace('/', '_');
    fileName = fileName.replace('（', '(').replace('）', ')')
        .replace(' ', '_').replace('：', ':');
    var reg = /[/·. :*?"<>|]/g;
    fileName = fileName.replace(reg, '-');
    if (fileName.length > 150) {
        fileName = fileName.substring(0, 100);
    } //# 文件名超长
    return fileName;
}