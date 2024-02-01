// ==UserScript==
// @name         _inject-net-helper
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Use NETTER in console to send requests.
// @author       Akuma
// @match        https://manga.bilibili.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tools/inject-net-helper.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/tools/inject-net-helper.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject NETTER...');
    inject();
    console.log(`NETTER injected!`);
})();

function inject() {
    // do stuff
    unsafeWindow.NETTER = new NetHelper();
}
