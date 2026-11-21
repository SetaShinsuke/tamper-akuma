// ==UserScript==
// @name         BLiveImprover
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  防止B站直播在后台自动暂停/去除OW区马赛克/去用户ID水印
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
    // 移除水印
    removeWatermark();
    // 移除马赛克
    removeMosaic();
    // 防止挂机检测
    keepAlive();
})();

function removeWatermark() {
    runWhenLoaded(`.web-player-icon-roomStatus`, maskDiv => {
        // maskDiv?.remove();
        maskDiv.style['display'] = 'none';
        maskDiv.style['opacity'] = '0 !important';
        maskDiv.style['pointer-events'] = 'none !important';
        console.log('Removed room user id watermark.');
    });
}

function removeMosaic() {
    runWhenLoaded(`#web-player-module-area-mask-panel`, maskDiv => {
        // maskDiv?.remove();
        // maskDiv.style['display'] = 'none';
        // 改成 none 会报错 90005 违规操作
        maskDiv.style['opacity'] = '0 !important';
        maskDiv.style['pointer-events'] = 'none !important';
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