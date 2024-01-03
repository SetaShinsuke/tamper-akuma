// ==UserScript==
// @name         jav-down
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Click to download video
// @author       Akuma
// @match        https://tktube.com/embed/*
// @match        https://javtiful.com/embed/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM.setClipboard
// @grant        GM_xmlhttpRequest
// @connect      tktube.com
// @connect      javtiful.com
// @connect      cloudflarestorage.com
// @connect      *
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-down.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-down.js
// ==/UserScript==

// body: {video_id: xxx}
let API_TIFUL = `https://javtiful.com/ajax/get_cdn`;

(function () {
    'use strict';
    console.log('Starting inject...');
    let onclick = async event => {
        let fileName = getQuery('v_name');
        let resolution = '-720P';
        let size = '--m';
        let videoUrl = undefined;
        switch (window.location.hostname) {
            case 'tktube.com':
                await fetchTubeUrl().then((url, _size) => {
                    videoUrl = url;
                    size = _size;
                });
                break;
            case 'javtiful.com':
                break;
        }
        let ext = getExtByName(videoUrl);
        event.target.innerText = `下载视频(${size})`;
        let idmLink = `akuma-idm://${videoUrl}?file_name___${fileName}${resolution}${ext}`;
        console.log(`link:\n`, idmLink);
    };
    addButton('下载视频', {}, onclick());
})();

function fetchTubeUrl() {
    return new Promise((resolve, reject) => {
        let url = flashvars.video_alt_url;
        GM_xmlhttpRequest({
            method: 'head',
            url: url,
            onload: async function (response) {
                var finalUrl = response.finalUrl;
                console.log('FinalUrl: ', finalUrl);
                await fetchFileSize(finalUrl).then(size => {
                    resolve(url, size);
                });
            },
            onerror: function (err) {
                console.log(`获取视频地址出错:`);
                console.log(err);
            }
        });
    })
}

function fetchTifulUrl() {
    return new Promise((resolve, reject) => {

    });
}

function fetchFileSize(finalUrl) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'head',
            url: finalUrl,
            onload: function (response) {
                console.log(response);
                if (response.responseText) {
                    var contentLength = response.responseHeaders.match(/\r\ncontent-length: .*\r\n/)[0];
                    contentLength = contentLength.replace(/\r\n/g, '').replace('content-length: ', '');
                    contentLength = parseInt(contentLength);
                    contentLength = `${(contentLength / 1024 / 1024).toFixed(2)}m`;
                    // document.querySelector('#btnCopy').innerHTML = `Copy (${contentLength})`;
                    console.log(`Video size: ${contentLength}`);
                    resolve(contentLength);
                }
            },
            onerror: function (err) {
                console.log(`获取视频大小出错:`);
                console.log(err);
                reject(err);
            }
        });
    });
}
