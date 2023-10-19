// ==UserScript==
// @name         adblock-defender
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://www.receivesms.org/*-number/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/adblock-defender.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/others/adblock-defender.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    switch (window.location.hostname) {
        case 'www.receivesms.org':
            injectReSMS();
            break;
    }
})();

function injectReSMS() {
    console.log('Showing msgtbl in 1s...');
    setTimeout(()=>{
        document.querySelector(`#msgtbl`).style.display = '';
        document.querySelector(`#result`).style.display = 'none';
    }, 1_000);
}
