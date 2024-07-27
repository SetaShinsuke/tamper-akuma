// ==UserScript==
// @name         BLiveImprover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  防止B站直播在后台自动暂停/去除OW区马赛克
// @author       Akuma
// @include      /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-improver.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-improver.js
// ==/UserScript==

(function () {
    console.log('Prevent sleeping script running...');
    // 移除马赛克
    removeMosaic();
    // 防止挂机检测
    keepAlive();
})();

function removeMosaic() {
    runWhenLoaded(`.web-player-module-area-mask`, maskDiv => {
        maskDiv?.remove();
        console.log('Removed web player mask.');
    });
}

function keepAlive() {
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
}