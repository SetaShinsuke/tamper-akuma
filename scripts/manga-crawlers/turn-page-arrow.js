// ==UserScript==
// @name         turn-page-arrow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://ac.qq.com/Comic/all/*/search/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/turn-page-arrow.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/turn-page-arrow.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    document.addEventListener('keydown', e => {
        const btnSearch = document.querySelector(`button.search-here`);
        switch (e.code){
            case "ArrowRight":
                document.querySelector('.mod_page_next').click();
                break
            case "ArrowLeft":
                document.querySelector('.mod_page_prev').click();
                break
        }
        console.log(`Keydown, key code: ${e.code}`);
    });
}
