// ==UserScript==
// @name         grammarly-adb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动关闭广告
// @author       Akuma
// @match        https://www.grammarly.com/blog/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tmp/grammarly-adb.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tmp/grammarly-adb.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    runWhenLoaded('.ReactModal__Content>button', btn => {
        btn.click();
        console.log(`自动关闭弹窗广告`);
    });
}
