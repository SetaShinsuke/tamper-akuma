// ==UserScript==
// @name         BReadImages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  右键扒取B站文章里的图
// @author       Akuma
// @match        https://www.bilibili.com/read/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @require      https://ghproxy.com/https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/b-read-imgs.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/b-read-imgs.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff

    var tasks = {};
    var bookName = "死神单行本封面";
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = "Covers";
    tasks[chapName] = [];
    var i = 0;
    document.querySelectorAll('figure>img').forEach(img => {
        if(i===0){
            i+=1;
            return
        }
        var url = `https:` + img.dataset.src.replace(/@.*/, '');
        var vol = parseInt((i-1) / 2) + 1;
        vol += 49;
        var fileName = `000_` + `${vol}`.padStart(3, '0') + '_' + `${(i-1) % 2}` + `.jpg`;
        // if (i === 58) {
        //     fileName = `000_029_2.jpg`;
        // } else if (i === 89) {
        //     fileName = `000_044_2.jpg`;
        // } else if (i > 89) {
        //     vol = parseInt((i - 2) / 2) + 1;
        //     fileName = `000_` + `${vol}`.padStart(3, '0') + '_' + `${i % 2}` + `.jpg`;
        // } else if (i > 58) {
        //     vol = parseInt((i - 1) / 2) + 1;
        //     fileName = `000_` + `${vol}`.padStart(3, '0') + '_' + `${i % 2}` + `.jpg`;
        // }
        tasks[chapName].push({'url': url, 'file_name': fileName});
        i += 1;
    });
    console.log(tasks);

    // 保存
    var save_name = `tasks_${(new Date()).getTime()}.json`;
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
