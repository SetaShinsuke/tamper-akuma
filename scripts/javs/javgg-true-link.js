// ==UserScript==
// @name         Javgg-CopyUrl
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Right click to copy video player link address
// @author       Akuma
// @match        https://javgg.net/jav/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javgg-true-link.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javgg-true-link.js
// ==/UserScript==

(function () {
    'use strict';
    var btn;
    var btns = document.querySelectorAll('.dooplay_player_option');
    console.log(btns);
    btns.forEach(b => {
        if (b.innerText.includes('婴儿床') || b.innerText.includes('fembed')) {
            btn = b;
        }
    });
    btn.click();
    setTimeout(() => {
        inject()
    }, 3000)
})();

function inject() {
    var videoFrame = document.querySelector('.rptss');
    if (!videoFrame) {
        alert('Video link not found!');
        return
    }
    var playerUrl = videoFrame.src;
    var no = document.location.pathname.replace('/jav/', '').replace('/javs/', '').replace('/', '-');
    var text = `[${no.slice(0, -1)}](${playerUrl}?v_name=${no})`;
    copyToClipboard(text);
    toast('Copied!');
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

function toast(text) {
    var snackbar = document.getElementById('snackbar_jav');
    if (!snackbar) {
        console.log('Creating snackbar...')
        snackbar = document.createElement('div');
        snackbar.id = 'snackbar_jav';
        // snackbar.style['visibility'] = "visible";
        snackbar.style['visibility'] = "hidden";
        snackbar.style['min-width'] = "250px";
        snackbar.style['margin-left'] = "-125px";
        snackbar.style['background-color'] = "#333";
        snackbar.style['color'] = "#fff";
        snackbar.style['text-align'] = "center";
        snackbar.style['border-radius'] = "2px";
        snackbar.style['padding'] = "16px";
        snackbar.style['position'] = "fixed";
        snackbar.style['z-index'] = "1";
        snackbar.style['left'] = "50%";
        snackbar.style['top'] = "400px";
        snackbar.style['font-size'] = "17px";
        document.body.appendChild(snackbar);
    }
    snackbar.innerHTML = text;
    snackbar.style['visibility'] = 'visible';
    console.log('Snackbar showed');
    setTimeout(() => {
        snackbar.style["visibility"] = 'hidden';
    }, 3000);
}

// actorJP = ["吉高宁々", ]
// actorCN = ["吉高宁宁", ]