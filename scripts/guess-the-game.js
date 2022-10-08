// ==UserScript==
// @name         GuessTheGameHelper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to turn page
// @author       Akuma
// @match        https://guessthe.game/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    var page = document.querySelector('.game-image').style['background-image'].match(/\/\d+/)[0].replace('/', '');
    page = parseInt(page);
    var url = `https://guessthe.game/?fpg=${page += 1}`;
    console.log(`Turn to page ${page}`);
    window.open(url, '_self');
}
