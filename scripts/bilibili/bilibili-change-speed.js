// ==UserScript==
// @name         bilibili-change-speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://www.bilibili.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-change-speed.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-change-speed.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    document.addEventListener('keypress', e => {
        if (!e.shiftKey) {
            return
        }
        let speedBtn = document.querySelector('.bpx-player-ctrl-playbackrate-menu-item.bpx-state-active');
        let speed = parseFloat(speedBtn.getAttribute('data-value'));
        console.log(e.code);
        let step = 0.5;
        if (speed < 2) {
            step = 0.25;
        }
        switch (e.code) {
            case 'NumpadAdd':
            case 'Equal':
                speed = Math.min(4, speed + step);
                break
            case 'NumpadSubtract':
            case 'Minus':
                speed = Math.max(0.25, speed - step);
                break
            case 'Numpad0':
            case 'Digit0':
                speed = 1;
                break
            default:
                return;
        }
        speed = `${speed}`;
        console.log(`Change speed: ${speed}`);
        // 使用已有的按钮
        document.querySelectorAll('.bpx-player-ctrl-playbackrate-menu-item').forEach(btn => {
            if (btn.getAttribute('data-value') === speed) {
                speedBtn = btn;
            }
        });
        toast(`Speed: ${speed}`);
        speedBtn.setAttribute('data-value', speed);
        speedBtn.innerText = `${speed}x`;
        speedBtn.click();
    });
}
