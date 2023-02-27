// ==UserScript==
// @name         GoogleTranslateKeymap
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  在谷歌翻译中，输入完毕后按下 shift+enter 即可发音，再次按下可再次输入，不用操作鼠标了！
// @author       Akuma
// @match        https://translate.google.com/*
// @match        https://translate.google.co.uk/*
// @match        https://translate.google.com.hk/*
// @exclude      https://translate.google.com/_/TranslateWebserverUi/bscframe
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/google-translate-keymap.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/google-translate-keymap.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('google translate add vocal keymap');

    var button = null;
    runWhenLoaded('TEXTAREA', textArea => {
        console.log(textArea);
        // 拦截 Alt 键，防止焦点到 chrome 右上角的设置键
        textArea.addEventListener('keydown', event => {
            if (event.altKey) {
                event.preventDefault();
            }
        });
        if (!button) {
            button = document.querySelector('button[data-tooltip-label-off]');
        }
        // shift + enter 发音
        textArea.addEventListener('keypress', event => {
            if (['Enter', 'NumpadEnter'].includes(event.code) && event.shiftKey) {
                console.log('shift + enter');
                event.preventDefault();
                button?.click();
            }
        });
        ``
        // 切回到输入框
        button?.addEventListener('keypress', event => {
            if (['Enter', 'NumpadEnter'].includes(event.code) && event.shiftKey) {
                console.log('shift + enter');
                textArea.focus();
                textArea.select();
            }
        });
    });
})();