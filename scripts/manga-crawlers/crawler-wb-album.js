// ==UserScript==
// @name         Crawl-Wb-Album
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取微博相册的图
// @author       Akuma
// @match        https://photo.weibo.com/*/albums/detail/album_id/*/mode/3/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-wb-album.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-wb-album.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    var tasks = {};
    var bookName = document.querySelector('strong').innerText
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = document.querySelector('.list>a>span.t').innerText.replaceAll(' ', '');
    tasks[chapName] = [];
    var imgs = document.querySelector('.photoList').querySelectorAll('img');
    imgs = Array.from(imgs).reverse();
    var i = 0;
    imgs.forEach(img => {
        var url = img.src.replace('/square', '/large');
        i += 1;
        var fileName = `${i}`.padStart(4, '0') + `.${url.split('.').pop()}`;
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });
    console.log(tasks);

    // 保存
    var save_name = `tasks_${(new Date).getTime()}.json`;
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