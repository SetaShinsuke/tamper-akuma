// ==UserScript==
// @name         sina-archive-backup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://web.archive.org/web/*/http://book.sina.com.cn/nzt/ent/wulinbaodian/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tmp/sina-archive-backup.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tmp/sina-archive-backup.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    addButton('复制本页', {}, _ => {
        let text = '';
        let title = document.querySelector('#article b').innerText;
        let content = document.querySelector('#zoom').innerText;
        content = content.replace(/\n+(上一页 )?\[返回目录\] 下一页\n+ /, '\n\n\n\n');
        text = title;
        text += `\n\n`;
        text += content;

        copyToClipboard(text);
        toast('已复制!');
    }, 0.5);
}
