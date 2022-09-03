// ==UserScript==
// @name         Wb2Mobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to mobile web
// @author       Akuma
// @match        https://weibo.com/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       context-menu
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-to-mobile.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-to-mobile.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    var statusId = window.location.pathname.split('/').pop();
    var url = `https://m.weibo.cn/status/${statusId}`;
    console.log(`Web wb url: ${url}`);
    window.open(url, '_self').focus();
}
