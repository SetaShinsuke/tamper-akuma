// ==UserScript==
// @name         Crawl-Aiguoman
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取爱国漫漫画网的漫画
// @author       Akuma
// @match        https://www.aiguoman.com/chapter/*.html?save=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/crawl-aiguoman.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/crawl-aiguoman.js
// ==/UserScript==

// 扳手少年分卷:
// 1, 8, 16, 23, 29, 35, 41, 47, 53, 59, 65, 71, 77-?
//  7  8   7   6   6    6   6  6   6   6   6   6

(function () {
    'use strict';
    console.log('aiguoman match');

    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = document.querySelector('.chapter').innerText;

    var chapName = document.querySelector('.chapter-sub').innerText;
    chapName = chapName.replaceAll(' ', '_').replaceAll('.', '_').replaceAll('！', '').replaceAll('？', '');
    chapName = chapName.replaceAll('?', '_').replaceAll('!', '_');
    tasks[chapName] = [];

    var imgs = document.querySelectorAll('.main-item>img');
    imgs.forEach(img => {
        var url = img.src;
        var fileName = url.split('/').pop();
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });

    console.log(tasks);
    // 点击回车就跳到下一话
    document.querySelector('.J_next_eposide_btn').href += '?save=true';
    document.querySelector('.J_next_eposide_btn').focus();

    // 保存
    var index = (new Date()).getTime();
    try {
        index = parseInt(window.location.href.split('-').pop().replace('.html', ''));
        index = index + 1 - 3882;
    } catch (e) {
        console.log(e);
    }

    var save_name = `tasks_${index}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
})();

// 保存json
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