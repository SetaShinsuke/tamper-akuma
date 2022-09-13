// ==UserScript==
// @name         InsRightClick
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enable right click on img
// @author       Akuma
// @match        https://www.instagram.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/ins-right-click.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/ins-right-click.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // 隐藏图片上面的遮罩
    // 或者可以在 ABP 添加屏蔽规则: instagram.com##._aagu>._aagw
    document.querySelectorAll('._aagu>._aagw').forEach(mask => {
        mask.style['display'] = 'none';
    });
}
