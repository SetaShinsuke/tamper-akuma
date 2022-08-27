// ==UserScript==
// @name         Javnow-Fetch
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  抓取视频链接
// @author       Akuma
// @match        https://watchjavnow.xyz/v/*
// @match        https://*.mycloudzz.com/v/*
// @match        https://javcl.me/v/*
// @match        https://www.ffem.club/v/*
// @grant        GM.setClipboard
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @connect      *
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javnow-fetch.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/javnow-fetch.js
// ==/UserScript==

(function () {
    console.log('Ready to inject.');
    runWhenLoaded('svg', (playIcon) => {
        playIcon.addEventListener('click', () => {
            console.log('Play icon clicked.');
            addCopyBtn();
        })
    });
})();

function addCopyBtn() {
    runWhenLoaded('#vstr', playerDiv =>{
        var btn = document.createElement("button");
        btn.innerHTML = "Copy";
        btn.style['color'] = 'white';
        btn.style['background'] = 'transparent';
        btn.classList.add('jw-icon-inline');
        playerDiv.appendChild(btn);
        playerDiv.style['min-height'] = '95%';
        btn.addEventListener('click', onCopyClick);
    });
}

function onCopyClick() {
    console.log('Copy btn clicked');
    var videoUrl = document.querySelector('video').src;
    console.log(`Video url: \n${videoUrl}`);
    var urlParams = new URLSearchParams(document.location.search);
    var videoName = urlParams.get('v_name');
    console.log(`Video name: ${videoName}`);

    GM_xmlhttpRequest({
        method: 'head',
        url: videoUrl,
        onloadstart: function () {
            console.log('onLoadStart');
        },
        onload: function (response) {
            var finalUrl = response.finalUrl;
            console.log('FinalUrl: ', finalUrl);
            // doDownload(finalUrl, videoName);
            // -480p.mp4
            var ext = finalUrl.split('-').pop();
            videoName = `${videoName}-${ext}`;
            GM.setClipboard(videoName);
            console.log('Video name copied!');
            // window.open(`thunder://${videoUrl}`, '_blank').focus();
            // window.open(`${videoUrl}`, '_blank').focus();
            downloadURI(finalUrl, videoName);
        }
    });
}

// 使用浏览器下载
function downloadURI(uri, name) {
    var link = document.querySelector("#final_link");
    if (!link) {
        link = document.createElement("a");
        document.body.insertBefore(link, document.body.firstElementChild);
    }
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.id = "final_link";
    link.innerHTML = "Link";
    link.style['color'] = 'white';
    link.style['background'] = 'transparent';
    link.classList.add('jw-icon-inline');
    link.setAttribute('download', name);
    link.href = uri;
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
}

function doGet(url) {
    GM_xmlhttpRequest({
        method: 'get',
        url: url,
        saveAs: true,
        onloadstart: function () {
            console.log('Get start...');
        },
        onerror: function (error) {
            console.log(error);
        },
        onload: function () {
            console.log('Get onload...');
            var responseXML = null;
            // Inject responseXML into existing Object (only appropriate for XML content).
            if (!response.responseXML) {
                responseXML = new DOMParser()
                    .parseFromString(response.responseText, "text/xml");
            }

            console.log([
                response.status,
                response.statusText,
                response.readyState,
                response.responseHeaders,
                response.responseText,
                response.finalUrl,
                responseXML
            ].join("\n"));
        }
    });
}

function doDownload(url, name) {
    GM_download({
        url: url,
        name: name,
        saveAs: true,
        onerror: function (error) {
            console.log(error);
        },
        onprogress: function (progress) {
            console.log('progress: ', `${(progress.loaded / progress.total * 100).toFixed(4)}%`);
        },
        onload: function () {
            console.log('Download onload...');
        }
    });
}