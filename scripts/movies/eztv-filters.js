// ==UserScript==
// @name         eztv-filters
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  使用 filter(x,y,z) 筛选
// @author       Akuma
// @match        https://eztvx.to/search/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/eztv-filters.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/eztv-filters.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    unsafeWindow.filter = filter;
    addButton('筛选1080x265', {}, _ => {
        filter('1080', '265');
    }, '0.5');
}

function filter(...keywords) {
    // (?=.*265)(?=.*MeGusta)
    let str = '(?=.*' + keywords.join(')(?=.*') + ')';
    console.log(str);
    const regex = new RegExp(str);
    [...document.querySelectorAll('tr.forum_header_border')].forEach(div => {
        let info = div.querySelector('.forum_thread_post>.epinfo').title;
        if (regex.test(info)) {
            div.style.opacity = '1';
            return;
        }
        div.style.opacity = '0.2';
    });
}