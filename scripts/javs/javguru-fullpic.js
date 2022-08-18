// ==UserScript==
// @name         JavGuru-FullPic
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Click 👁 to see full picture.
// @author       Akuma
// @match        https://jav.guru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javguru-fullpic.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javguru-fullpic.js
// ==/UserScript==

var TIMEOUT = 3000;

console.log('starting inject');

(function () {
    'use strict';
    window.addEventListener('load', (x) => {
        console.log('window loaded');
        setTimeout(() => {
            try{
                onReady();
            }catch (e) {
                console.error(e);
            }
        }, TIMEOUT);
    });
})();

function onReady() {
    document.querySelectorAll('.fa-eye').forEach(x => {
        var imgUrl = x.closest('.inside-article').querySelector('img').src;
        var href = imgUrl;
        if (imgUrl.includes('-') && imgUrl.includes('x')) {
            var slices = imgUrl.split('-');
            var sizeStr = slices[slices.length - 1].split('.')[0];
            // console.log(`Open in background ${href}`);
            href = imgUrl.replace(`-${sizeStr}`, '');
        }
        // console.log(`Check img: ${href}`);
        console.log('Pic source injected.')
        x.href = href;

        x.addEventListener('click', y => {
            window.open(x.href, '_blank').focus();
        });
        x.removeEventListener('auxclick', onAuxClick);
        x.addEventListener('auxclick', onAuxClick);
        var a = document.createElement('a');
        a.innerText = x.innerText;
        a.title = x.title
        a.href = href;
        a.classList = x.classList;
        // x.parentNode.insertBefore(a, x);
        x.parentNode.appendChild(a);
        x.style.display = 'none';
    });
}

function onAuxClick(event) {
    console.log(event);
    if (event.button !== 1) {
        return;
    }
    // console.log(event.target);
    // var item = event.target.closest(".pull-right");
    // if (!item) {
    //     return;
    // }
    // var url = item.getAttribute('durl');
    var item = event.target;
    var url = item.href;
    console.log(url);
    window.open(url, '_blank').focus();
}