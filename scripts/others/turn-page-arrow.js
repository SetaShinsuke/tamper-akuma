// ==UserScript==
// @name         turn-page-arrow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://ac.qq.com/Comic/all/*/search/*
// @match        https://www.dongman.la/manhua/*/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/turn-page-arrow.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/turn-page-arrow.js
// ==/UserScript==

const ARROW_KEY_MAP = {
    "ac.qq.com": ['.mod_page_next', '.mod_page_prev'],
    "www.dongman.la": ['.NewPages>ul>li:nth-child(2)>a', '.NewPages>ul>li:nth-last-child(2)>a']
};

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    let keys = ARROW_KEY_MAP[window.location.host];
    console.log(`kyes:\n`, keys);
    if (!keys || keys.length < 2) {
        console.log(`Arrow keys not configured`);
        return
    }
    let left = keys[0];
    let right = keys[1];
    document.addEventListener('keydown', e => {
        // const btnSearch = document.querySelector(`button.search-here`);
        let btn;
        switch (e.code) {
            case "ArrowRight":
                btn = document.querySelector(right);
                console.log(btn);
                btn?.click();
                break
            case "ArrowLeft":
                btn = document.querySelector(left);
                console.log(btn);
                btn?.click();
                break
        }
        console.log(`Keydown, key code: ${e.code}`);
    });
}
