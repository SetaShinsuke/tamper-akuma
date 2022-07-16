// ==UserScript==
// @name         Crawl-Ythuiju
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取扑飞漫画网的漫画
// @author       Akuma
// @match        https://www.ythuiju.com/manhua/3402/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/crawl-ythuiju.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/crawl-ythuiju.js
// ==/UserScript==

(function () {
    'use strict';
    // saveChap1_2();
    saveChap3();
})();

function saveChap3() {
    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = document.querySelector('.title').innerHTML;

    // 30~36, 7页
    // 37~42, 4页
    // 第30话: https://www.ythuiju.com/chapter/153165.html
    // 第42话: https://www.ythuiju.com/chapter/153177.html
    // http://mhpic.samanlehua.com/comic/L/邻居家是画漫画的阿幺/第30话/1.jpg-smh.high
    // https://mhpic.samanlehua.com/comic/L/邻居家是画漫画的阿幺/第42话/4.jpg-smh.high

    var chap3 = '邻居家是画漫画的阿幺-卷03'
    tasks[chap3] = [];
    var page = 0;
    for (var i = 30; i <= 42; i++) {
        var maxJ = 7;
        if (i > 36) {
            maxJ = 4;
        }
        for (var j = 1; j <= maxJ; j++) {
            page += 1;
            var url = `https://mhpic.samanlehua.com/comic/L/` +
                encodeURIComponent(`邻居家是画漫画的阿幺`) + `/` +
                encodeURIComponent(`第${i}话`) +
                `/${j}.jpg-smh.high`;
            var fileName = `003_第${i}话_` + `${page}`.padStart(3, '0') + `.jpg`;
            tasks[chap3].push({'url': url, 'file_name': fileName});
        }
    }

    console.log(tasks);

    // 保存
    var save_name = `tasks_3.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}

function saveChap1_2() {
    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = document.querySelector('.title').innerHTML;

    var chap1 = '邻居家是画漫画的阿幺-卷01';
    var chap2 = '邻居家是画漫画的阿幺-卷02';
    tasks[chap1] = [];
    tasks[chap2] = [];
    // tasks['邻居家是画漫画的阿幺-卷03'] = [];
    // 第一卷：1-172，第二卷：1-220，第三卷：按话数分开……
    // https://mhpic.samanlehua.com/comic/L/邻居家是画漫画的阿幺/第1册/172.jpg-smh.high

    for (var i = 0; i < 172; i++) {
        var url1 = `https://mhpic.samanlehua.com/comic/L/` +
            encodeURIComponent(`邻居家是画漫画的阿幺`) + `/` +
            encodeURIComponent(`第1册`) +
            `/${i + 1}.jpg-smh.high`;
        var fileName1 = `001_` + `${i + 1}`.padStart(3, '0') + `.jpg`;
        tasks[chap1].push({'url': url1, 'file_name': fileName1});
    }

    for (var j = 0; j < 220; j++) {
        var url2 = `https://mhpic.samanlehua.com/comic/L/` +
            encodeURIComponent(`邻居家是画漫画的阿幺`) + `/` +
            encodeURIComponent(`第2册`) +
            `/${j + 1}.jpg-smh.high`;
        var fileName2 = `002_` + `${j + 1}`.padStart(3, '0') + `.jpg`
        tasks[chap2].push({'url': url2, 'file_name': fileName2});
    }

    console.log(tasks);

    // 保存
    var save_name = `tasks_1.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
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