// ==UserScript==
// @name         Crawl-Dashu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取大树漫画的漫画
// @author       Akuma
// @match        https://www.dashuhuwai.com/comic/*/*.html*
// @match        https://www.dashumanhua.com/comic/*/*.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-dashu.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-dashu.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    let onClick = _ => {
      getTasks();
    };
    addButton('获取图片', {}, onClick);
})();

function getTasks() {
    // 图片列表在JS代码里，并且这部分代码被加密了
    // https://res.xiaoqinre.com/images/comic/646/1290950/1587399540Jk6CM4SQU8YNnNGC.jpg
    // var funcStr = myvue.$mount.toString();

    // 找到含有图片url的代码片段
    // var t = document.scripts[11].text.match(/else\n\s+\{\n\s+eval\(.*\)\n\s+\}\n\s+\n\s+/);
    // var result = t[0].match(/eval\(.*\)/)[0];
    // result = result.replaceAll(`"`, `\\"`);
    // console.log(result);
    let jsString = document.scripts[11].text.match(/else\n\s+{\n\s+eval\((.*)\)\n;\n\s+}\n/)[1];
    jsString.replaceAll(`"`, `\\"`);
    eval(jsString);
    console.log(picTree);
}