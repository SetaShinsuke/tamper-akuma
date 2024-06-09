// ==UserScript==
// @name         slash2search
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  desc
// @author       Akuma
// @match        https://*.wiktionary.org/*
// @match        https://shyyp.net/search?q=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/slash2search.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/slash2search.js
// ==/UserScript==

// [搜索框, 搜索按钮(搜索框隐藏的情况), 被隐藏的部分]
const DATA_MAP = {
    "wiktionary.org": ["#searchInput", null, null],
    "shyyp.net": ['#mainSearchInput', null, null]
};

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // 搜索快捷键
    let query = null;
    let btnQuery = null;
    let hiddenDiv = null;
    for (let key in DATA_MAP) {
        let regexp = new RegExp(key, 'g');
        if (regexp.test(window.location)) {
            query = DATA_MAP[key][0];
            btnQuery = DATA_MAP[key][1];
            hiddenDiv = DATA_MAP[key][2];
            break;
        }
    }
    if (query == null) {
        console.log('未找到搜索输入框');
        return
    }
    runWhenLoaded(query, inputSearch => {
        document.addEventListener('keydown', e => {
            const btnSearch = document.querySelector(btnQuery);
            if (e.code !== 'Slash') {
                return
            }
            // 按下斜杠"/"
            console.log(`Keydown, key code: ${e.code}`);
            if (document.querySelector(hiddenDiv)?.style?.visibility !== 'visible') {
                btnSearch?.click();
            }
            // 待定：允许输入框输入 slash
            // console.log(document.activeElement);
            // console.log(inputSearch);
            // console.log(document.activeElement === inputSearch);
            // if (document.activeElement === inputSearch) {
            //     return;
            // }
            e.preventDefault();
            inputSearch.focus();
            inputSearch.select();
        });
    });
}
