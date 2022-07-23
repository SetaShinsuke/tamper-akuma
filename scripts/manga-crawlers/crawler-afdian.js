// ==UserScript==
// @name         Crawl-Afdian
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取爱发电的漫画
// @author       Akuma
// @match        https://afdian.net/album/*?save=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    var tasks = {};
    var bookNameOrg = document.querySelector('.tit').innerText;
    var bookName = verifyFileName(bookNameOrg);
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var index = document.querySelector('.flex-box.gl-hover-text').children[2].innerText.replace(' / ', '');
    index = parseInt(index);
    if (isNaN(index)) {
        index = (new Date()).getTime();
    } else {
        index = `${index}`.padStart(4, '0');
    }
    var chapName = document.querySelector('.title-box').innerText.replace(`${bookNameOrg} `, '');
    chapName = verifyFileName(`${index}_${chapName}`);
    tasks[chapName] = [];

    var imgs = document.querySelectorAll('.article-box>p>img');
    var i = 0;
    imgs.forEach(img => {
        // 'https://pic1.afdiancdn.com/user/6f4f9c4a967e11e9aec452540025c377/common/1affc42bed4cdacc35cec60cc43220e3_w800_h1163_s371.jpg?imageView2/2/w/640'
        var url = img.src.split('?')[0];
        i += 1;
        var fileName = `${index}_` + `${i}`.padStart(4, '0') + '.' + url.split('.').pop();
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });

    console.log(tasks);

    // 保存
    var save_name = `tasks_${index}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);

    // 选中下一章
    var btnNext = document.querySelector('.vm-feed>.flex-box.mt16').lastChild;
    btnNext.href += '?save=true';
    btnNext.focus();
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