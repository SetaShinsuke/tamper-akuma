// ==UserScript==
// @name         Crawl-Maofly
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取漫画猫的漫画
// @author       Akuma
// @match        https://www.maofly.com/manga/*/*.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-maofly.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-maofly.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    if (!document.querySelector('.img-content')) {
        console.log('Not in reading page!');
        return
    }

    var tasks = {};
    var bookName = document.querySelector('h1>a').innerText;
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = document.querySelector('.breadcrumb-item').innerText;
    chapName = verifyFileName(chapName);
    tasks[chapName] = [];
    var imgs = img_data_arr;
    for (var i = 0; i < imgs.length; i++) {
        var url = cdnImage(img_pre + img_data_arr[parseInt(i)], asset_domain, asset_key);
        var fileName = `${i + 1}`.padStart(3, '0') + '_' + `${url.split('/').pop()}`;
        fileName = fileName.replace('.jpg', '.webp').replace('.png', '.webp');
        tasks[chapName].push({'url': url, 'file_name': fileName});
    }

    console.log(tasks);

    var index = document.querySelector('.vg-r-data').getAttribute('data-chapter_num');
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