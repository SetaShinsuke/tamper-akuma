// ==UserScript==
// @name         Javgg-CopyUrl
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to copy video player link address
// @author       Akuma
// @match        https://javgg.net/jav/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';
    inject();
})();

function inject() {
    var videoFrame = document.querySelector('.rptss');
    if(!videoFrame){
        alert('Video link not found!');
        return
    }
    var playerUrl = videoFrame.src;
    var no = document.location.pathname.replace('/jav/','').replace('/', '-');
    var text = `${playerUrl}\n${no}`;
    copyToClipboard(text);
}

function copyToClipboard(text) {
    console.log("Start copy...");
    var el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log("Copied!")
}