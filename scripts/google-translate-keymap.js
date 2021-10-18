// ==UserScript==
// @name         GoogleTranslateKeymap
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在谷歌翻译中，输入完毕后按下 shift+enter 即可发音，再次按下可再次输入，不用操作鼠标了！
// @author       Seta
// @match        https://translate.google.com*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/google-translate-keymap.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('google translate add vocal keymap');

    let textArea = document.getElementsByTagName('TEXTAREA')[0];

    console.log(textArea);

    if (textArea) {
        // 拦截 Alt 键，防止焦点到 chrome 右上角的设置键
        textArea.addEventListener('keypress', event => {
            if (event.altKey) {
                event.preventDefault();
            }
        });
        var button;
        try {
            button = textArea.parentNode.parentNode.parentNode.parentNode
                .getElementsByTagName("BUTTON")[4];
            button.addEventListener('keypress', event => {
                if (['Enter', 'NumpadEnter'].includes(event.code) && event.shiftKey) {
                    console.log('shift + enter');
                    textArea.focus();
                    textArea.select();
                }
            });
        } catch (e) {
            console.log(e);
        }
        if (button) {
            textArea.addEventListener('keypress', event => {
                if (['Enter', 'NumpadEnter'].includes(event.code) && event.shiftKey) {
                    console.log('shift + enter');
                    event.preventDefault();
                    button.click();
                }
            });
        }
    }
})();