// ==UserScript==
// @name         zhihu2md
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  copy answer to markdown
// @author       Akuma
// @match        https://www.zhihu.com/question/*/answer/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tmp/zhihu2md.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tmp/zhihu2md.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    addButton('复制为markdown', {}, _ => {
        copyMd();
        toast('文本已复制!');
    }, 0.5);
}

function copyMd() {
    let text = '---\n';
    let title = `### 《${document.querySelector('h1.QuestionHeader-title').innerText}》`;
    text += title;
    text += `    \n[查看全部回答](${location.href.replace(/\/answer.*/, '')})`;
    text += `    \n`;
    // text += `    \n*${document.querySelector('.ContentItem-meta').innerText.replaceAll('\n', '    \n')}*`;
    let content = document.querySelector('.RichContent.RichContent--unescapable>span').innerText;
    text += `    \n${content}`;
    let votes = document.querySelector('.ContentItem-actions .VoteButton--up').innerText;
    votes = votes.replace(/[\u200B-\u200D\uFEFF]/g, '').replace('\n', '');
    text += `    \n    \n[${votes}]`;
    text += '    \n<br/>\n\n';
    copyToClipboard(text);
}
