// ==UserScript==
// @name         Bilibili-live-alive
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  防止B站直播在后台自动暂停
// @author       xfgryujk
// @include      /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-live-alive.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-live-alive.js
// ==/UserScript==

(function() {
    console.log('Prevent sleeping script running...');
    let realSetTimeout = window.setTimeout;
    let realSetInterval = window.setInterval;
    window.setTimeout = function (func, ...args) {
        let code = func.toString();
        if (code.indexOf('triggerSleepCallback') !== -1) {
            console.log(`${code} \nPrevent sleeping`);
            return null;
        }
        return realSetTimeout.call(this, func, ...args);
    }
    window.setInterval = function (func, ...args) {
        let code = func.toString();
        if (code.indexOf('triggerSleepCallback') !== -1) {
            console.log(`${code} \nPrevent sleeping`);
            return null;
        }
        return realSetInterval.call(this, func, ...args);
    }
})();