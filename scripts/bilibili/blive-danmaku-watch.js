// ==UserScript==
// @name         blive-danmaku-watch
// @namespace    http://tampermonkey.net/
// @version      0.1.4
// @description  Show danmaku only, hide everything else
// @note         v0.1.1/2: 修复进度条动画问题;控制屏幕常亮;
// @author       Akuma
// @match        https://live.bilibili.com/h5/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-danmaku-watch.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-danmaku-watch.js
// ==/UserScript==

// TODO: .bili-danmaku-wrap: width = 100%
// .danmaku-content.v-middle: font-size = 24px
// document.querySelectorAll(`#app__display-area>.open-app-btn`)[1].style["display"] = "none"; // 隐藏打开app按钮

const NORMAL_SHOW_MS = 30000;   // 省电模式：遮罩显示时长（毫秒）
const NORMAL_HIDE_MS = 30000;   // 省电模式：遮罩隐去时长（毫秒）
const SUPER_SHOW_MS = 60000;   // 超级省电：遮罩显示时长（毫秒）
const SUPER_HIDE_MS = 30000;   // 超级省电：遮罩隐去时长（毫秒）

const CSS_INJECT = `
.danmaku-content.v-middle { font-size: 26px!important; }
#bili-danmaku-wrap { width: 100%; margin: 0px}
.background-img { background: black!important }`;

let mask = null;
let timerId = null;
let active = false;
let activeBtn = null;
let currentShowMs = NORMAL_SHOW_MS;
let currentHideMs = NORMAL_HIDE_MS;
let progressBar = null;
let wakeLock = null;

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

let styleApplied = false;   // 全局样式只注入一次

// 通过 <style> 全局覆盖类样式（该类下元素实时更新，无法逐个修改）
function applyStyleOverrides() {
    if (styleApplied) return;
    styleApplied = true;
    // 隐藏下方“打开app”按钮
    const openBtn = document.querySelectorAll(`#app__display-area>.open-app-btn`)[1];
    if (openBtn) openBtn.style.display = 'none';
    // 修改字体等
    const style = document.createElement('style');
    style.textContent = CSS_INJECT;
    document.head.appendChild(style);
    console.log('[样式] 已应用全局样式覆盖');
}

// 申请屏幕常亮（防止屏幕变暗/休眠）
async function acquireWakeLock() {
    if (!navigator.wakeLock) {
        console.log('[屏幕常亮] 当前浏览器不支持 Wake Lock');
        return;
    }
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('[屏幕常亮] 已申请');
        // 浏览器可能会在特定时机释放锁，监听 visibilitychange 重新申请
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'visible' && active) {
                await acquireWakeLock();
            }
        });
    } catch (err) {
        console.error(`[屏幕常亮] 申请失败: ${err.name}: ${err.message}`);
    }
}

function releaseWakeLock() {
    if (wakeLock) {
        wakeLock.release()
            .then(() => console.log('[屏幕常亮] 已释放'))
            .catch(err => console.error(`[屏幕常亮] 释放失败: ${err}`));
        wakeLock = null;
    }
}

function onToggle(btn, showMs, hideMs) {
    if (active) {
        active = false;
        if (activeBtn) activeBtn.textContent = activeBtn._originalText;
        activeBtn = null;
        stopCycle();
        releaseWakeLock();
        console.log('[省电模式] 关闭：已停止循环并移除遮罩');
        return;
    }
    // 切换模式：先停止旧的，再启动新的
    if (timerId !== null) stopCycle();
    active = true;
    activeBtn = btn;
    currentShowMs = showMs;
    currentHideMs = hideMs;
    applyStyleOverrides();
    if (!btn._originalText) btn._originalText = btn.textContent;
    btn.textContent = '退出';
    console.log(`[省电模式] 开启：立即显示遮罩，${currentShowMs / 1000}秒后隐去显示${currentHideMs / 1000}秒`);
    startCycle();
    acquireWakeLock();
}

function inject() {
    createButton('left', '省电模式', NORMAL_SHOW_MS, NORMAL_HIDE_MS);
    createButton('right', '超级省电', SUPER_SHOW_MS, SUPER_HIDE_MS);
}
