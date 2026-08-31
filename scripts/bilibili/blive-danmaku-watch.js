// ==UserScript==
// @name         blive-danmaku-watch
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Show danmaku only, hide everything else
// @note         v0.1.1: 修复进度条动画问题
// @author       Akuma
// @match        https://live.bilibili.com/h5/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-danmaku-watch.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-danmaku-watch.js
// ==/UserScript==

const NORMAL_SHOW_MS = 30000;   // 省电模式：遮罩显示时长（毫秒）
const NORMAL_HIDE_MS = 30000;   // 省电模式：遮罩隐去时长（毫秒）
const SUPER_SHOW_MS = 60000;   // 超级省电：遮罩显示时长（毫秒）
const SUPER_HIDE_MS = 30000;   // 超级省电：遮罩隐去时长（毫秒）

let mask = null;
let timerId = null;
let active = false;
let activeBtn = null;
let currentShowMs = NORMAL_SHOW_MS;
let currentHideMs = NORMAL_HIDE_MS;
let progressBar = null;

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function createButton(side, text, showMs, hideMs) {
    let btn = document.createElement('button');
    btn.textContent = text;
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '10px',
        [side]: '10px',
        zIndex: '2147483647',
        padding: '8px 12px',
        background: '#222',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
    });
    btn.addEventListener('click', () => onToggle(btn, showMs, hideMs));
    document.body.appendChild(btn);
    return btn;
}

function showMask() {
    if (!mask) {
        mask = document.createElement('div');
        Object.assign(mask.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            background: '#000',
            zIndex: '2147483647',
            pointerEvents: 'auto',
        });
        mask.addEventListener('click', () => {
            console.log('[省电模式] 点击遮罩：立即退出');
            if (active && activeBtn) onToggle(activeBtn);
        });
        // 进度条（作为 mask 子元素，自然显示在遮罩之上）
        progressBar = document.createElement('div');
        Object.assign(progressBar.style, {
            position: 'absolute',
            bottom: '0',
            left: '0',
            height: '10px',
            width: '100%',
            background: '#444',
            pointerEvents: 'none',
        });
        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        Object.assign(fill.style, {
            height: '100%',
            width: '100%',
            background: '#3ea6ff',
        });
        progressBar.appendChild(fill);
        mask.appendChild(progressBar);
    }
    mask.style.display = 'block';
    progressBar.style.display = 'block';
    if (!mask.parentNode) document.body.appendChild(mask);
}

function runProgress(durationMs) {
    const fill = progressBar.querySelector('.progress-fill');

    // 重置：移除所有过渡
    fill.style.transition = 'none';
    fill.style.width = '100%';
    void fill.offsetWidth;

    // 明确只过渡 width，覆盖原有的 'all'
    fill.style.transition = `width ${durationMs}ms linear`;
    fill.style.width = '0%';
}

function hideMask() {
    if (mask) mask.style.display = 'none';
    if (progressBar) progressBar.style.display = 'none';
}

function startCycle() {
    showMask();
    runProgress(currentShowMs);
    console.log(`[省电模式] 已显示遮罩，${currentShowMs / 1000}秒后隐去显示${currentHideMs / 1000}秒`);
    timerId = setTimeout(scheduleHide, currentShowMs);
}

function scheduleHide() {
    if (!active) return;
    hideMask();
    console.log(`[省电模式] 已隐去遮罩，${currentHideMs / 1000}秒后再次显示`);
    timerId = setTimeout(scheduleShow, currentHideMs);
}

function scheduleShow() {
    if (!active) return;
    showMask();
    runProgress(currentShowMs);
    console.log(`[省电模式] 已显示遮罩，${currentShowMs / 1000}秒后隐去显示${currentHideMs / 1000}秒`);
    timerId = setTimeout(scheduleHide, currentShowMs);
}

function stopCycle() {
    clearTimeout(timerId);
    timerId = null;
    hideMask();
}

function onToggle(btn, showMs, hideMs) {
    if (active) {
        active = false;
        if (activeBtn) activeBtn.textContent = activeBtn._originalText;
        activeBtn = null;
        stopCycle();
        console.log('[省电模式] 关闭：已停止循环并移除遮罩');
        return;
    }
    // 切换模式：先停止旧的，再启动新的
    if (timerId !== null) stopCycle();
    active = true;
    activeBtn = btn;
    currentShowMs = showMs;
    currentHideMs = hideMs;
    const bg = document.querySelector('.background-img');
    if (bg) bg.style.background = 'black';
    if (!btn._originalText) btn._originalText = btn.textContent;
    btn.textContent = '退出';
    console.log(`[省电模式] 开启：立即显示遮罩，${currentShowMs / 1000}秒后隐去显示${currentHideMs / 1000}秒`);
    startCycle();
}

function inject() {
    createButton('left', '省电模式', NORMAL_SHOW_MS, NORMAL_HIDE_MS);
    createButton('right', '超级省电', SUPER_SHOW_MS, SUPER_HIDE_MS);
}
