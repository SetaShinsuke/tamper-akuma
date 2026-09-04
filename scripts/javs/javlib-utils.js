// ==UserScript==
// @name         JavLibUtils
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Search contents in multiple websites
// @author       Akuma
// @match        https://www.javlibrary.com/*
// @match        https://www.f61m.com/*
// @match        https://javlib.com/*
// @match        http://javlib.com/*
// @match        https://g64w.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javlib-utils.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javlib-utils.js
// ==/UserScript==

const SYNC_COVER = "sync_cover";
const TODO = "todo";

(function () {
    'use strict';
    console.log(`jav host: ${window.location.hostname}`);
    switch (window.location.hostname) {
        case 'javlib.com':
            // 跳转到中文网页
            window.open('https://www.javlibrary.com/cn/', '_self');
            break;
        case 'www.javlibrary.com':
        case 'www.f61m.com':
        case 'g64w.com':
            // 自动选择'已成年'
            setAdult();
            setSearch();
            break;
    }
    // 自动同步封面
    if (GM_getValue()) {

    }
})();

function syncCover() {
    // TODO: 自动同步封面
    // 1. 搜索页，搜出了多个结果
    //      自动点击其中一个（非蓝光的，封面更完整）
    // 2. 详情页 (有#video_jacket_img)
    //      cover = document.querySelector(`#video_jacket_img`).src
    // 3. GM_setValue(SYNC_COVER) = cover
    // 4. 关闭标签
    // (pihub 中监听 GM_value 的变化，原本是 todo，现在不是了，则修改 input)
}

function setSearch() {
    // todo: 搜索 jav
    console.log('TODO: Add jav search');
    // 详情页
    let noSelector = `#video_id>table>tbody>tr>td.text`;
    runWhenLoaded(noSelector, titleEle => {
        titleEle.addEventListener('click', () => {
            searchInNewTab(titleEle.innerText);
        });
    }, 2000);
    // 任意页，添加搜索按钮
    runWhenLoaded('[name="searchbar"]>table>tbody>tr', tr => {
        var td = tr.insertCell(1);
        td.innerHTML = `<input type="button" value="全网搜索" id="searchAllSites">`;
        var btn = document.querySelector('#searchAllSites');
        btn.addEventListener('click', () => {
            var input = document.querySelector('#idsearchbox');
            var keyword = input.value;
            if (!keyword) { // 搜索栏是空的，自动点击标题，进行搜索
                document.querySelector(noSelector)?.click();
                return;
            }
            searchInNewTab(keyword);
        });
    });
}

function searchInNewTab(keyword) {
    if (!confirm(`确认搜索: ${keyword} ?\n(将会打开较多标签页)`)) {
        console.log(`Searching canceled, keyword: ${keyword}`);
        return
    }
    console.log(`Searching jav: ${keyword}`);
    // 安排网站列表
    var urls = [];
    urls.push(`https://javtiful.com/search?q=${keyword}`);
    urls.push(`https://missav.ai/en/search/${keyword}`);
    urls.push(`https://www.javhdporn.net/search/${keyword}/`);
    // 次级网站
    urls.push(`https://javgg.net/?s=${keyword}`);
    urls.push(`https://jav.guru/?s=${keyword}`);
    urls.push(`https://javsky.tv/search/movie/${keyword}`);
    urls.push(`https://javcl.com/search/${keyword}`);
    urls.push(`https://javgiga.com/?s=${keyword}`);
    urls.push(`https://supjav.com/?s=${keyword}`);
    urls.push(`https://javtsunami.com/?s=${keyword}`);
    // region: deprecated
    // urls.push(`${keyword}`);
    // urls.push(`https://javhd.today/search/video/?s=${keyword}`);
    // urls.push(`https://hpjav.tv/?s=${keyword}`);
    // urls.push(`https://javchill.com/search?search=${keyword}`);
    // urls.push(`http://javtk.com/search.php?s=${keyword}`);
    // urls.push(`https://javabc.com/search/${keyword}`);
    // urls.push(`https://opjav.com/search/${keyword}`);
    // urls.push(`https://fbjav.com/search/${keyword}`);
    // urls.push(`https://bejav.net/search/${keyword}`);
    // endregion
    urls.reverse().forEach(url => {
        GM_openInTab(url, false);
    });
}

function setAdult() {
    if (getCookie('over18') === '18') {
        console.log('Over 18 confirmed.');
        return
    }
    runWhenLoaded('#adultwarningmask', (adultWarningMask) => {
        if (adultWarningMask.style['display'] === 'none') {
            console.log('Adult warning already canceled');
        } else {
            adultWarningMask.style['display'] = 'none';
            setCookie('over18', 18);
        }
    });
}

