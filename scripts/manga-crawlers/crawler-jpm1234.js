// ==UserScript==
// @name         Crawl-Jpm1234
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取热血漫画网(jpm1234)的漫画
// @author       Akuma
// @match        http://www.jpm1234.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawl-ythuiju.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawl-ythuiju.js
// ==/UserScript==

(function () {
    'use strict';
    // 'http://img4.jpm1234.com/uploads/comic/19/9408/409158/0017.jpg'
    console.log('Ready to crawl!')

    var section = document.querySelector('.hcover>img').src.split('cover/').pop().split('/')[0];
    var id;
    try {
        id = bInfo.id;
    } catch (e) {
        console.log(e);
        id = document.querySelector('.hcover>img').src.split('cover/').pop().split('/').pop().split('.')[0];
    }

    var chaps = document.querySelector('.chapter-list').querySelectorAll('a');

    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    // tasks['config']['book_name'] = document.querySelector('.book-title>h1').innerHTML;
    tasks['config']['book_name'] = bInfo.name;

    chaps.forEach(chap => {
        var chpId = chap.href.split('/').pop().split('.')[0];
        var chapInfo = chap.querySelector('span').childNodes[0];
        var chapName = chapInfo.textContent;
        if (Number.isInteger(Number(chapName))) {
            chapName = `第` + `${chapName}`.padStart(3, '0') + `话`;
        }
        tasks[chapName] = [];
        var pages = Number(chap.querySelector('i').innerText.split('p')[0]);
        for (var i = 0; i < pages; i++) {
            var index = i;
            index = `${index}`.padStart(4, '0');
            var url = `http://img4.jpm1234.com/uploads/comic/${section}/${id}/${chpId}/${index}.jpg`;
            var fileName = `${chapName}_` + `${index}`.padStart(4, '0') + '.jpg';
            tasks[chapName].push({'url': url, 'file_name': fileName});
        }
    });

    console.log(tasks);

    // 保存
    var save_name = `tasks_${(new Date()).getTime()}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
})();

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