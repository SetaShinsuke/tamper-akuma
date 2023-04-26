// ==UserScript==
// @name         Jav-EnableConsole
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Stop clearing console!!
// @author       Akuma
// @match        https://jav.guru/*
// @match        https://vanfem.com/*
// @match        https://watchjavnow.xyz/v/*
// @match        https://mycloudzz.com/v/*
// @match        https://stream.cdnsh.xyz*
// @match        https://javsky.tv/*
// @match        https://javcl.me/*
// @match        https://javlove.club/*
// @match        https://sbchill.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-enable-console.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-enable-console.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting to enable console');
    let stopper = function stopIt() {
        // 阻止清空 console
        console.log('Console clearing canceled.');
    };

    switch (window.location.hostname) {
        case 'sbchill.com':
            check = stopper;
            break
        default:
            devtoolIsOpening = stopper;
    }

})();