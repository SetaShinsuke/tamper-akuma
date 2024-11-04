// ==UserScript==
// @name         JavFork
// @namespace    http://tampermonkey.net/
// @version      0.28
// @description  Right click to fork jav data
// @author       Akuma
// @match        https://javgg.net/jav/*
// @match        https://jav.guru/*/*/*
// @match        https://vanfem.com/v/*
// @match        http://javtk.com/*
// @match        https://javtk.com/*
// @match        https://javcl.com/*
// @match        https://javgiga.com/*
// @match        https://asianclub.tv/f/*
// @match        https://tktube.com/videos/*
// @match        https://tktube.com/*/videos/*
// @match        https://javtiful.com/video/*
// @match        https://missav.com/*
// @match        https://rule34video.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-fork.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-fork.js
// ==/UserScript==

const HOST = 'http://192.168.50.166:9292';

(function () {
    // addButton("获取链接",{},()=>{
    'use strict';
    inject();
    // });
})();

function inject() {
    let onClick = _ => {
        switch (window.location.hostname) {
            case 'tktube.com':
                forkTkTube()
                break
            case 'javtiful.com':
                forkTiful();
                break
            case 'missav.com':
                forkMis();
                break
            case 'rule34video.com':
                forkRule34();
                break
            // region //+deprecated sites
            case 'javgg.net':
                forkJavGG();
                break;
            case 'jav.guru':
                alert('todo');
                break;
            case 'vanfem.com':
                // todo: 在这里操作
                // enableConsole();
                forkJavGuru();
                break
            case 'javtk.com':
                forkJavTk();
                break
            case 'javcl.com':
                forkJavCl();
                break
            case 'asianclub.tv':
                forkJavAS();
                break
            case 'javgiga.com':
                forkGiga();
                break
            // endregion
        }
    }
    addButton(`FORK IT!`, {'left': '1%', 'bottom': '1%'}, onClick, 0);
}

function forkTiful() {
    // runWhenLoaded('#video-section .share-btn', shareBtn => {
    let shareBtn = document.querySelector('#video-section .share-btn');
    let playerUrl = shareBtn.getAttribute('data-embed-url');
    let no = window.location.pathname.split('/').pop();
    var text = `[${no}](${playerUrl}?v_name=${no}-)`;
    console.log(text);
    // copyToClipboard(text);
    // toast('Copied!');

    const fullUrl = new URL(playerUrl);
    let hostname = fullUrl.hostname;
    let uid = fullUrl.pathname;
    let data = {
        title: no,
        site: hostname,
        uid: uid,
        auto_sync_cover: false,
        tags: 'hd'
    };
    let cover = document.querySelector("meta[property='og:image']").getAttribute("content");
    if (cover) {
        data.cover = cover;
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
    // });
}

function forkTkTube() {
    let vid = document.querySelector(`input[name=video_id]`)?.value;
    let playerUrl = `https://tktube.com/embed/${vid}`;
    // let no = window.location.pathname.replace(/(.*)\/$/, '$1').split('/').pop();
    let no = document.querySelector('.headline h1').innerText
        .replace(/\[破壞版]\s*\(/, `【モザイク破壊】`)
        .replace(/\[馬賽克破壞]\s*/, '【モザイク破壊】')
        .replace(/【馬賽克破壞】\s*/, '【モザイク破壊】')
        .replace(/\[流出版]\s*\(*/, '【unleak】')
        .split(/\s/)[0];
    let tags = [];
    if (/モザイク破壊/.test(no)) {
        tags.push('unreduce');
    }
    if (/unleak/.test(no)) {
        tags.push('unleak')
    }
    no = no.replace(/【.*】/, '');
    var text = `[${no}](${playerUrl}?v_name=${no}-)`;
    console.log(text);
    // copyToClipboard(text);
    toast('Copied!');

    const fullUrl = new URL(playerUrl);
    let hostname = fullUrl.hostname;
    let uid = fullUrl.pathname;
    let data = {
        title: no,
        site: hostname,
        uid: uid,
        auto_sync_cover: false
    };
    console.log('tags: ', tags);
    if (tags?.length > 0) {
        data.tags = tags.join('-');
    }
    let cover = document.head.querySelector("[property~='og:image']").getAttribute('content');
    if (cover) {
        data.cover = cover;
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
}

function forkMis() {
    // window.axios.get('https://missav.com/api/playlists/siro-769').then(response => {
    //     playlists = response.data.data
    // }
    let no = document.querySelector('.mt-4 h1').innerText.split(/\s/)[0];
    let hostname = location.hostname;
    let uid = location.pathname;
    let tags = ['ttss'];
    let data = {
        title: no,
        site: hostname,
        uid: uid,
        auto_sync_cover: false
    };
    console.log('tags: ', tags);
    if (tags?.length > 0) {
        data.tags = tags.join('-');
    }
    let cover = document.querySelector('.plyr__poster').style.getPropertyValue('background-image');
    cover = cover?.match(/url\("(.*)"\)/);
    if (cover?.length > 0) {
        data.cover = cover[1];
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
}

function forkRule34() {
    let no = location.pathname.replace(/\/video\/(.*?)\/(.*?)\//, '$2_$1');
    let author = document.querySelector('span.name').innerText;
    no = `${no}_by_${author}`;
    let hostname = location.hostname;
    let uid = location.pathname;
    let tags = ['anime'];
    let data = {
        title: no,
        site: hostname,
        uid: uid,
        auto_sync_cover: false
    };
    console.log('tags: ', tags);
    data.cover = flashvars["preview_url"];
    if (tags?.length > 0) {
        data.tags = tags.join('-');
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
}

// region //+deprecated sites
function forkJavTk() {
    let playerDiv = document.querySelector('.play-video');
    // todo: 获取视频地址 javTK
    let links_code = playerDiv.querySelector('#links')?.getAttribute('value');
    let iframe = playerDiv.querySelector('iframe');
    if (!iframe) {
        alert('Video link not found!');
        return
    }
    var playerUrl = iframe.src;
    var no = document.querySelector('title').innerText.match(/(.*?-\S+)\s/);
    if (no.length > 1) {
        no = no[1];
    }
    var text = `[${no}](${playerUrl}?v_name=${no}-)`;
    console.log(text);
    // copyToClipboard(text);
    toast('Copied!');
}

function forkGiga() {
    let a = document.querySelector(`a[href*='javlove.club']`);
    if (!a) {
        alert('Video link not found!');
        return
    }
    const playerUrl = a.href;
    const no = window.location.pathname.match(/\/(.*-.*)\//)[1];
    const fullUrl = new URL(playerUrl);
    let hostname = fullUrl.hostname;
    let uid = fullUrl.pathname.replace(/^\/v\//, '');
    let data = {
        title: no,
        site: hostname,
        uid: uid
    };
    let cover = document.querySelector('.video-description img').src;
    if (cover) {
        data.cover = cover;
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
}

function forkJavCl() {
    var iframe = document.querySelector('iframe');
    if (!iframe) {
        alert('Video link not found!');
        return
    }
    var playerUrl = iframe.src;
    var no = document.querySelector('.mb-1')?.innerText;
    var text = `[${no}](${playerUrl}?v_name=${no}-)`;
    console.log(text);
    // copyToClipboard(text);
    toast('Copied!');

    const fullUrl = new URL(playerUrl);
    let hostname = fullUrl.hostname;
    let uid = fullUrl.pathname.replace(/^\/v\//, '');
    let data = {
        title: no,
        site: hostname,
        uid: uid,
        auto_sync_cover: false
    };
    let cover = document.querySelector('.row img').getAttribute('data-src');
    if (cover) {
        data.cover = cover;
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
}

function forkJavGuru() {
    // todo: 点击等等
    alert('?');
    var v = document.querySelector('#vstr');
    console.log(v);

    // var c = document.querySelector('.jw-preview');
    // var url = c.style['background-image'];
    // console.log(url);

    // var iframe = document.querySelector('iframe');
    // var iframe2 = iframe.contentDocument.getElementsByTagName('iframe')[0];
    // var player = iframe.contentWindow.document.querySelector('#vstr');
    // if (!player) {
    //     alert('Video not found!');
    //     return;
    // }
    // var div = player.querySelectorAll('div')[1];
    // var uid = div.style['background-image'].match(/\/[^\/]*\?/)[0].replace(/[\/\?]/g, '').split('.')[0];
    // alert(uid);
}

function forkJavGG() {
    var btn = document.querySelector('.dooplay_player_option.on');
    if (!btn) {
        var btns = document.querySelectorAll('.dooplay_player_option');
        console.log(btns);
        btns.forEach(b => {
            if (b.innerText.includes('婴儿床') || b.innerText.includes('fembed')) {
                btn = b;
            }
        });
        btns.forEach(b => {
            if (b.innerText.includes('婴儿床') || b.innerText.includes('streamsb')) {
                btn = b;
            }
        });
        if (!btn && btns.length > 0) {
            btn = btns[0];
        }
        btn.click();
    }
    setTimeout(() => {
        forkGG()
    }, 3000)
}

function forkGG() {
    var videoFrame = document.querySelector('.rptss');
    if (!videoFrame) {
        alert('Video link not found!');
        return
    }
    var playerUrl = videoFrame.src;
    var no = document.location.pathname.replace('/jav/', '').replace('/javs/', '').replace('/', '-');
    var text = `[${no.slice(0, -1)}](${playerUrl}?v_name=${no})`;
    // copyToClipboard(text);
    toast('Copied!');

    const fullUrl = new URL(playerUrl);
    let hostname = fullUrl.hostname;
    let uid = fullUrl.pathname.replace(/^\/v\//, '');
    let cover = document.querySelector('#coverimage>img')?.getAttribute('data-src');
    let data = {
        title: no.slice(0, -1),
        site: hostname,
        uid: uid,
        auto_sync_cover: false
    };
    if (cover) {
        data.cover = cover;
    }
    data.wrapper = window.location.href.replace(/\?.*/, '');
    console.log(data);
    forkIt(data);
}

function forkJavAS() {
    // 隐藏上层遮罩
    var divs = document.querySelectorAll('div');
    console.log('隐藏AD遮罩');
    divs.forEach(ad => {
        if (ad.style['opacity'] !== '') {
            ad.style['display'] = 'none';
        }
    });
    // 复制链接
    var no = document.querySelector('h1').innerText;
    no = no.replace(`.${no.split('.').pop()}`, '');
    var text = `[${no}](${window.location.href.split('?')[0]}?v_name=${no}-)`;
    console.log(text);
    // 复制
    // copyToClipboard(text);
    toast('Copied!');
    // 减少倒计时
    // document.querySelector('#countdown').innerHTML = '1';
    // document.querySelector('#download').click();
}

// endregion

function forkIt(data) {
    let url = `${HOST}/pages/#/no_media/javs/new?`;
    for (const [key, value] of Object.entries(data)) {
        url += `${key}=${value}&`;
    }
    console.log('Fork to: ', url);
    try {
        GM_openInTab(url, false);
    } catch (e) {
        console.log(e);
        window.open(url, "_blank");
    }
}

// function copyToClipboard(text) {
//     console.log("Start copy...");
//     var el = document.createElement('textarea');
//     el.value = text;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//     console.log("Copied!")
// }
//
// function toast(text) {
//     var snackbar = document.getElementById('snackbar_jav');
//     if (!snackbar) {
//         console.log('Creating snackbar...')
//         snackbar = document.createElement('div');
//         snackbar.id = 'snackbar_jav';
//         // snackbar.style['visibility'] = "visible";
//         snackbar.style['visibility'] = "hidden";
//         snackbar.style['min-width'] = "250px";
//         snackbar.style['margin-left'] = "-125px";
//         snackbar.style['background-color'] = "#333";
//         snackbar.style['color'] = "#fff";
//         snackbar.style['text-align'] = "center";
//         snackbar.style['border-radius'] = "2px";
//         snackbar.style['padding'] = "16px";
//         snackbar.style['position'] = "fixed";
//         snackbar.style['z-index'] = "1";
//         snackbar.style['left'] = "50%";
//         snackbar.style['top'] = "400px";
//         snackbar.style['font-size'] = "17px";
//         document.body.appendChild(snackbar);
//     }
//     snackbar.innerHTML = text;
//     snackbar.style['visibility'] = 'visible';
//     console.log('Snackbar showed');
//     setTimeout(() => {
//         snackbar.style["visibility"] = 'hidden';
//     }, 3000);
// }

// actorJP = ["吉高宁々", ]
// actorCN = ["吉高宁宁", ]