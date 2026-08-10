// ==UserScript==
// @name         PihubPaste
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Add window.paste()
// @author       Akuma
// @match        http://192.168.*.*:9292/pages/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/${DIR_PATH}/${FILE_NAME}
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/${DIR_PATH}/${FILE_NAME}
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
    // TODO: 考虑还是用 setValue 传递数据
})();

function inject() {

}
