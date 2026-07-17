// ==UserScript==
// @name         B-Snapshot
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Press S to save a screenshot. Inspired by original author Kazurin.
// @author       Akuma
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/b-snapshot.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/b-snapshot.js
// ==/UserScript==

'use strict';
var video, videoTitle, bgmTitle, canvas, ctx, link;

function lazyInitialize() {
    if (!canvas) {
        video = document.querySelector('#bilibili-player video') || document.querySelector('.bilibili-player-video video');
        videoTitle = document.querySelector('h1.video-title') || document.querySelector('.video-title span');
        // bgmTitle = document.querySelector('.media-title');
        bgmTitle = document.querySelector('a[class^="mediainfo_mediaTitle"]');
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild(link);
    }
}

function getVideoCurrentTime(video) {
    var time = Math.round(video.currentTime);
    var seconds = time % 60;
    var minutes = (time - seconds) / 60;
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    return pad(minutes) + '-' + pad(seconds);
}

function getTimestampPrefix() {
    var now = new Date();
    var year = String(now.getFullYear()).slice(-2);
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    return year + pad(month) + pad(day) + `-${pad(hours)}-${pad(minutes)}-${pad(seconds)}`;
}

function startDownload(uri) {
    link.href = uri;
    var timestamp = getTimestampPrefix();
    if (window.location.href.indexOf('/bangumi/') >= 0) {
        // 视频类型为番剧
        var bgmEpisode = document.querySelector('#eplist_module .ep-item.cursor .ep-title') ||
            document.querySelector('.ep-section-module .ep-item.cursor .ep-title') ||
            document.querySelector('div[class*="numberListItem_select"] span');
        if (bgmEpisode) {
            // 视频有分集
            link.download = timestamp + '-' + bgmTitle.textContent + ' ' + bgmEpisode.textContent + ' ' + getVideoCurrentTime(video);
        } else {
            // 视频无分集
            link.download = timestamp + '-' + bgmTitle.textContent + ' ' + getVideoCurrentTime(video);
        }
    } else {
        // 视频类型为普通视频
        var episode = document.querySelector('.cur-list ul.list-box li.on span.page-num');
        if (episode) {
            // 视频有分集
            link.download = timestamp + '-' + videoTitle.textContent + ' ' + episode.textContent + ' ' + getVideoCurrentTime(video);
        } else {
            // 视频无分集
            link.download = timestamp + '-' + videoTitle.textContent + ' ' + getVideoCurrentTime(video);
        }
    }
    link.download = verifyFileName(link.download) + '.png';
    link.click();
}

function onError(error) {
    console.error('截图失败');
    console.error(error);
    window.alert('截图失败，请重试。如果此问题反复出现，请在 F12 控制台查看错误消息，并向开发者反馈。');
}

function downloadScreenshot() {
    lazyInitialize();
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (typeof (canvas.toBlob) !== 'undefined') {
        // 如果浏览器支持 canvas.toBlob()，则用 blob URL 下载
        canvas.toBlob(function (blob) {
            try {
                var url = URL.createObjectURL(blob, 'image/png');
                startDownload(url);
                URL.revokeObjectURL(url);
            } catch (e) {
                onError(e);
            }
        });
    } else {
        // 否则用 data URL 下载
        startDownload(canvas.toDataURL('image/png'));
    }
}

function hasActiveInput() {
    // 检查当前焦点是否在输入框上
    const activeTag = document.activeElement.tagName;
    return activeTag == 'INPUT' || activeTag == 'TEXTAREA';
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 83 && !hasActiveInput()) {
        e.preventDefault();
        try {
            downloadScreenshot();
        } catch (e) {
            onError(e);
        }
    }
});
