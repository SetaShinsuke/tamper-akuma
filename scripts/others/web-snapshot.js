// ==UserScript==
// @name         web-snapshot
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  将网页保存为长图
// @author       Akuma
// @match        file:///C:/Users/24783/appdata/local/temp/29.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @require      https://html2canvas.hertzen.com/dist/html2canvas.min.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/web-snapshot.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/web-snapshot.js
// ==/UserScript==

const SNAP_W = '400px';

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    unsafeWindow.snap = snap;
    addButton('保存长图', {}, _ => {
        snap()
    }, 0);
}

async function snap(selector = '.markdown-body', width = SNAP_W) {
    const div = document.querySelector(selector);
    updateStyle(div, width);
    const canvas = await html2canvas(div);
    const img = canvas.toDataURL('image/png')
    // document.write('<img src="' + img + '" alt="snapshot"/>');
    const fileName = verifyFileName(document.title);
    saveImgFile(img, fileName);
}

function updateStyle(div, width){
    // 缩进先不加了，容易乱
    // [...div.querySelectorAll('p')].forEach(p => {
    //     p.style['text-indent'] = '2em';
    // });
    div.style['width'] = width;
}

function saveImgFile(imgUrl, fileName) {
    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = imgUrl;
    document.body.appendChild(link);
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}