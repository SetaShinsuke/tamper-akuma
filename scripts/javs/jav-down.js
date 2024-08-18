// ==UserScript==
// @name         jav-down
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Click to download video
// @author       Akuma
// @match        https://tktube.com/embed/*
// @match        https://tktube.com/*/embed/*
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
// @downloadURL  https://raw.githubuserconnettent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-down.js
// ==/UserScript==

// body: {video_id: xxx}
let API_TIFUL = `https://javtiful.com/ajax/get_cdn`;

let referer = getReferer();
// content-type 必要
var HEADERS = {
    "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
    "Referer": referer
};

(function () {
    'use strict';
    console.log('Starting inject...');
    removeShade();
    let onClick = async (event, doSize) => {
        let fileName = getQuery('v_name');
        let resolution = '-720P';
        let size = '--m';
        let videoUrl = undefined;
        switch (window.location.hostname) {
            case 'tktube.com':
                await fetchTubeUrl(doSize).then(res => {
                    videoUrl = res.url;
                    size = res.size;
                });
                break;
            case 'javtiful.com':
                await fetchTifulUrl(doSize).then(res => {
                    videoUrl = res.url;
                    size = res.size;
                });
                break;
        }
        let ext = getExtByUrl(videoUrl);
        fileName = `${fileName}${resolution}${ext}`;
        if (size) {
            event.target.innerText = `下载视频(${size})`;
        }
        // let idmLink = `akuma-idm://${videoUrl}?file_name___${fileName}${resolution}${ext}`;
        let idmLink = `akuma-idm://` + videoUrl + '-----' + fileName;
        window.open(idmLink, '_self');
        console.log(`link:\n`, idmLink);
    };

    addButton('下载视频', {'left': '1%'}, e => {
        onClick(e, false);
    });
    addButton('获取视频大小', {'left': '1%', 'top': '8%'}, e => {
        onClick(e, true);
    });
})();

function fetchTubeUrl(doSize = false) {
    return new Promise((resolve, reject) => {
        let url = flashvars.video_alt_url;
        if (!url || url.length === 0) {
            alert("Get URL fail!");
            reject(new Error(`Video alt url is empty`));
        }
        GM_xmlhttpRequest({
            method: 'head',
            url: url,
            onload: function (response) {
                var finalUrl = response.finalUrl;
                console.log('FinalUrl: ', finalUrl);
                if (!doSize) {
                    resolve({
                        url: finalUrl,
                        size: ''
                    });
                    return
                }
                fetchFileSize(finalUrl).then(_size => {
                    resolve({
                        url: finalUrl,
                        size: _size
                    });
                }).catch(err => reject(err));
            },
            onerror: function (err) {
                console.log(`获取视频地址出错:`);
                console.log(err);
                reject(err);
            }
        });
    })
}

function fetchTifulUrl(doSize = false) {
    return new Promise((resolve, reject) => {
        let videoId = video_id;
        console.log(`videoId: ${videoId}`);
        GM_xmlhttpRequest({
            method: 'POST',
            url: API_TIFUL,
            headers: HEADERS,
            data: `video_id=${videoId}`,
            onload: function (response) {
                // unsafeWindow.res = response;
                console.log(response.responseText);
                var resJson = JSON.parse(response.responseText);
                let finalUrl = resJson.playlists;
                if (!doSize) {
                    resolve({
                        url: finalUrl,
                        size: ''
                    });
                    return
                }
                fetchFileSize(finalUrl).then(_size => {
                    resolve({
                        url: finalUrl,
                        size: _size
                    });
                }).catch(err => reject(err));
            },
            onerror: function (err) {
                console.log(`获取视频地址出错:`);
                console.log(err);
                reject(err);
            }
        });
    });
}

function fetchFileSize(finalUrl) {
    console.log(`Fetch file size, url: ${finalUrl}`);
    return new Promise((resolve, reject) => {
        let req = GM_xmlhttpRequest({
            method: 'get',
            url: finalUrl,
            headers: HEADERS,
            onloadstart: function (response) {
                console.log('on load start: ');
                console.log(response);
            },
            onreadystatechange: function (response) {
                // 0请求未初始化; 1连接已建立; 2请求已接收; 3请求处理中; 4请求已完成
                console.log(`onreadystatechange`);
                console.log(response)
                unsafeWindow.res = response;
                if (response.readyState === 2) {
                    var contentLength = response.responseHeaders.match(/\ncontent-length:(.*)\n/);
                    if (contentLength.length < 2) {
                        console.log(`Error getting content length, headers: `);
                        console.log(response.responseHeaders);
                        return
                    }
                    contentLength = parseInt(contentLength[1]);
                    contentLength = `${(contentLength / 1024 / 1024).toFixed(2)}m`;
                    // document.querySelector('#btnCopy').innerHTML = `Copy (${contentLength})`;
                    console.log(`Video size: ${contentLength}`);
                    req.abort();
                    resolve(contentLength);
                }
            },
            onprogress: function (progress) {
                console.log(`total: `, progress.total);
                let contentLength = parseInt(progress.total);
                contentLength = `${(contentLength / 1024 / 1024).toFixed(2)}m`;
                // document.querySelector('#btnCopy').innerHTML = `Copy (${contentLength})`;
                req.abort();
                console.log(req);
                console.log(`Video size: ${contentLength}`);
                resolve(contentLength);
            },
            onload: function (response) {
                // 貌似失效了，现在改在 onReadyStateChange 里判断
                console.log(`onload: `);
                console.log(response);
                // unsafeWindow.res = response;
                if (response.responseText) {
                    var contentLength = response.responseHeaders.match(/\r\ncontent-length: .*\r\n/)[0];
                    contentLength = contentLength.replace(/\r\n/g, '').replace('content-length: ', '');
                    contentLength = parseInt(contentLength);
                    contentLength = `${(contentLength / 1024 / 1024).toFixed(2)}m`;
                    // document.querySelector('#btnCopy').innerHTML = `Copy (${contentLength})`;
                    console.log(`Video size: ${contentLength}`);
                    resolve(contentLength);
                } else {
                    resolve('??m');
                }
            },
            onerror: function (err) {
                console.log(`获取视频大小出错:`);
                console.log(err);
                reject(err);
            },
            onabort: function (response) {
                console.log(`onabort`);
                console.log(response)
            },
            ontimeout: function (response) {
                console.log(`ontimeout`);
                console.log(response)
            }
        });
    });
}

function removeShade() {
    console.log(`remove ad shade`);
    // 隐藏上层遮罩
    var divs = document.querySelectorAll('div');
    var ad = divs[divs.length - 1];
    console.log(ad);
    if (ad.style['opacity'] !== '' || ad.style['opacity'] === '0.01') {
        ad.style['display'] = 'none';
    }
}
