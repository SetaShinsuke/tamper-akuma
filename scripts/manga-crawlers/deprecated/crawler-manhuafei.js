// ==UserScript==
// @name         Crwaler-Manhuafei
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Craw from manhuafei.com
// @author       Akuma
// @match        https://www.manhuafei.com/manhua/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuafei.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuafei.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    var tasks = {};
    var breadcrumbs = Array.from(document.querySelectorAll('.crumbs-all.fn-left>a'));
    var bookName = breadcrumbs.filter(x => {
        return /\/manhua\/mh/.test(x.href);
    })[0].text;
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = breadcrumbs.pop().text;

    tasks[chapName] = [];
    var dataset = document.querySelector('.d-none.vg-r-data').dataset;
    var domain = dataset['chapterDomain'];
    var indexName = dataset['chapter_num'];
    var i = 0;
    img_data_arr.forEach(x => {
        i += 1;
        var url = `${domain}${img_pre}${x}`;
        // var ext = x.split('.').pop();
        var ext = 'webp'; // 并不是 .jpg 格式
        var fileName = `${indexName}_` + `${i}`.padStart(3, '0') + `.${ext}`;
        tasks[chapName].push({
            'url': url, 'file_name': fileName
        });
    });
    console.log(tasks);

    // 保存
    var save_name = `tasks_${indexName}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}
