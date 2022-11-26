// ==UserScript==
// @name         DioAddAcq
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  添加 Acquisition
// @author       Akuma
// @match        https://store.epicgames.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @connect      hcaptaintito.zicp.io
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-add-acq.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-add-acq.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // todo: 跳转到 pihub - Acq 添加页
}
