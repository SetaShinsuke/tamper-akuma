// ==UserScript==
// @name         ComikonMoreFiles
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  推送漫画到漫画控时，多选文件
// @author       Akumu
// @match        http://192.168.50.70:8080/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/comikon-more-files.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/comikon-more-files.js
// ==/UserScript==
(function() {
    'use strict';
    var form = document.getElementsByTagName('form')[0]
    form.getElementsByTagName('p').forEach(p => {
        var input = p.firstElementChild();
        input.setAttribute('multiple', '');
    })
    // var pNew = p.cloneNode(true);
    // form.appendChild(pNew);
})();