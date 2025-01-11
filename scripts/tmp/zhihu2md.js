// ==UserScript==
// @name         zhihu2md
// @namespace    http://tampermonkey.net/
// @version      0.2
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
    let url = location.href.replace(/\/answer.*/, '');
    let text = '    \n    \n----------------------------------\n';
    let title = `#### [《${document.querySelector('h1.QuestionHeader-title').innerText}》](${url})`;
    text += title;
    // text += `    \n[查看全部回答](${url})`;
    text += `    \n`;
    // 日期
    let dateTag = document.querySelector('.ContentItem-time a span');
    let date = dateTag?.getAttribute('data-tooltip');
    if (date === dateTag.innerText) {
        date = `*(${date})*`;
    } else {
        date = `*(${date})*    \n*(${dateTag.innerText})*`;
    }
    text += `    \n${date}`;
    // 折叠
    text += `    \n<details><summary>展开原回答</summary>`;
    // 内容
    // text += `    \n*${document.querySelector('.ContentItem-meta').innerText.replaceAll('\n', '    \n')}*`;
    let content = document.querySelector('.RichContent.RichContent--unescapable>span').innerHTML;
    content = content.replace(/ height=".*?"/g, ' ').replace(/width="\d{3,}"/g, `width="480"`);
    text += `    \n${content}`;
    // 赞同数
    let votes = document.querySelector('.ContentItem-actions .VoteButton--up').innerText;
    votes = votes.replace(/[\u200B-\u200D\uFEFF]/g, '').replace('\n', '');
    text += `    \n    \n[${votes}]`;
    text += `    \n</details>`;
    text += '    \n<br/>\n\n';
    copyToClipboard(text);
}
