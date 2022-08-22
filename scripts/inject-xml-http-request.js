// ==UserScript==
// @name         InjectXmlHttpRequest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use tampermonkey request API in any page.
// @author       Akuma
// @match        https://manga.bilibili.com/*/mc*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/inject-xml-http-request.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/inject-xml-http-request.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('starting inject');
    unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
})();