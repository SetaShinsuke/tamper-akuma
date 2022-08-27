// ==UserScript==
// @name         MangaSearchBangumi
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Search contents in multiple websites
// @author       Akuma
// @match        https://bangumi.tv/subject/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @grant        GM_openInTab
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/jav/javlib-utils.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/jav/javlib-utils.js
// ==/UserScript==

(function () {
    'use strict';
    // setTimeout(onReady, TIMEOUT);
    console.log(`Starting injection...`);
    runWhenLoaded('li>a.chl.focus>span', section => {
        if (section.innerText !== '书籍') {
            return
        }
        runWhenLoaded('#infobox>li', bookNameLi => {
            var a = document.createElement('a');
            a.classList.add('l');
            a.style['marginLeft'] = '5px';
            a.href = '#';
            a.innerText = '\uD83D\uDD0D';
            bookNameLi.appendChild(a);
            a.addEventListener('click', () => {
                var bookName = bookNameLi.childNodes[1].textContent;
                search(bookName);
            });
        });
    });
})();

function search(name) {
    if (!window.confirm(`确认搜索: ${name} ?\n(将会打开较多标签页)`)) {
        return
    }
    console.log(`搜索: ${name}`)
    var urls = [];
    urls.push(`microsoft-edge:https://www.haoman8.com/index.php/search?key=${name}`);
    // urls.push(`microsoft-edge:http://www.haoman6.cc/index.php/search?key=${name}`);
    urls.push(`https://www.maofly.com/search.html?q=${name}`);
    urls.push(`https://www.dashuhuwai.com/search?types=comic&searhword=${name}`);
    urls.push(`http://www.manhuakk.com/statics/search.aspx?key=${name}`);
    urls.push(`https://www.cocomanga.com/search?type=1&searchString=${name}`);
    urls.push(`https://www.mhxin.com/search/?keywords=${name}`);
    urls.push(`https://www.manhuagui.com/s/${name}.html`);
    urls.push(`https://www.baozimh.com/search?q=${name}`);
    // 野鸡网站1234
    urls.push(`https://www.mkzhan.com/search/?keyword=${name}`);
    urls.push(`https://www.aiguoman.com/search?key=${name}`);
    urls.push(`https://ythuiju.com/sort/?key=${name}`);
    urls.push(`http://www.gugu5.com/statics/search.aspx?key=${name}&button=搜索`);
    urls.reverse().forEach(url => {
        GM_openInTab(url, false);
    });
}