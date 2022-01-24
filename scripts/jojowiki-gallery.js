// ==UserScript==
// @name         JOJOWikiGallery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  复制 JOJO wiki 页面的所有图片链接
// @author       Seta
// @match        https://jojowiki.com/Art_Gallery*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/jojowiki-gallery.js
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';
    // console.log('injecting js');
    // window.addEventListener('load', (x) => {
    //     console.log('window loaded');
    //     setTimeout(() => {
    inject()
    //     }, 3000)
    // });
})();

function inject() {
    var json = {};
    json['config'] = {'book_name': 'JOJO-Wiki-Gallery', 'referer': 'https://jojowiki.com/'};

    // 图片列表，要事先把每个tag都点开！！
    document.querySelectorAll(".tabbertab").forEach(tab => {
        var tabTitle = tab.title;
        var tasks = [];
        tab.querySelectorAll('table').forEach(table => {
            var td = table.querySelector('td');
            if (!td) {
                return;
            }
            var img = td.querySelector('img');
            if (img) {
                var src = img.src;
                var org = src.replace('/thumb', '');
                var splits = org.split('/');
                org = org.replace(`/${splits[splits.length - 1]}`, '');
                // console.log(org);

                // 日期
                var dateTd = table.querySelector('td:nth-child(2)');
                var dateString = '';
                if (dateTd) {
                    dateString = parseDate(dateTd.innerText);
                }

                var fileName = `${dateString}_${splits[splits.length - 2]}`;
                // console.log(fileName);

                tasks.push({'url': org, 'file_name': fileName});
            }
        });
        // 添加 tasks 到 json
        if(tasks.length > 0){
            json[tabTitle] = tasks;
        }
    });

    // 保存 tasks.json
    console.log(json);
    saveTextFile(JSON.stringify(json), `tasks_jojo.json`);
}

function parseDate(dateString) {
    if (!dateString || dateString.length === 0) {
        return '';
    }
    if (dateString.length === 4) {
        dateString = `December 31, ${dateString}`;
    }
    if (dateString.includes(' -')){
        dateString = dateString.split(' -')[0];
    }
    var date = new Date(Date.parse(dateString)); // Date 2011-05-09T06:08:45.178Z
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
    // console.log(`${year}-${month}-${day}`);
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