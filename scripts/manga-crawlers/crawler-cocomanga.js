// ==UserScript==
// @name         Crawl-Cocomanga
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取Coco的漫画
// @author       Akuma
// @match        https://www.cocomanga.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-cocomanga.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-cocomanga.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    if(!document.getElementById('mangalist')){
        console.log('Not in manga reading page!');
        return
    }

    var tasks = {};
    var bookName = document.querySelectorAll('li>a.read_page_link')[1].title;
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = verifyFileName(document.querySelector('.mh_readtitle>h1').innerText);
    var index = window.location.pathname.split('/').pop().split('.')[0];
    index = `${index}`.padStart(4, '0');
    chapName = `${index}_${chapName}`;
    tasks[chapName] = [];

    var pics = document.querySelectorAll('.mh_comicpic');
    pics.forEach(pic => {
        var page = pic.getAttribute('p');
        var url = 'https:' + __cr.getPicUrl(page);
        var fileName = `${index}_` + url.split('=/').pop();
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });

    console.log(tasks);
    // 保存
    var save_name = `tasks_${index}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}

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