// ==UserScript==
// @name           JavFullPic
// @namespace      http://tampermonkey.net/
// @version        0.23
// @description    Click 👁 to see full picture, as well as other experience-enhancing functions
// @author         Akuma
// @match          https://javgg.net/*
// @match          https://jav.guru/*
// @match          https://javchill.com/*
// @match          https://javcl.com/*
// @match          https://tktube.com/*
// @match          https://javtiful.com/*
// @match          https://missav.com/*
// @match          https://missav.ws/*
// @match          https://missav.ai/*
// @icon           data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant          GM_openInTab
// @grant          GM_xmlhttpRequest
// @connect        192.168.50.166
// @require        https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require        https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-fullpic.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-fullpic.js
// ==/UserScript==

const API_SEARCH = `http://192.168.50.166:9292/api/javs?count=true&filter=`;
const PI_JAV = `http://192.168.50.166:9292/pages/#/no_media/javs?filter=`;

const FAKE_AD_ID = 'zlVjUDdSLHIP';

(function () {
    'use strict';
    // setTimeout(onReady, TIMEOUT);
    console.log(`Starting JavFullPic injection...`);
    console.log(window.location.href);
    if (/\/(player|embed)\//.test(window.location.pathname)) {
        console.log('Fullpic: skip embed pages.');
        return;
    }
    switch (document.location.hostname) {
        case 'tktube.com':
            injectTube();
            break;
        case 'javtiful.com':
            injectFul();
            break;
        case 'missav.com':
        case 'missav.ws':
        case 'missav.ai':
            injectMis();
            break
        // region deprecated
        case 'javgg.net':
            injectGG();
            break;
        case 'jav.guru':
            injectGuru();
            break;
        case 'javchill.com':
            injectChill();
            break;
        case 'javcl.com':
            injectCl();
            break;
        // endregion
    }
})();

// 通用
async function checkForked(javNo) {
    // 搜索是否已经 fork
    let no = javNo;
    let netHelper = new NetHelper();
    let searchUrl = API_SEARCH + `${no}`;
    console.log(`Check if forked: ${no}`);
    let resJson = await netHelper.get(searchUrl);
    console.log(`Already forked count: ${resJson.javs}`);
    let btnId;
    if (resJson.javs > 0) {
        btnId = addButton('已Fork', {'bottom': '1%'}, _ => {
            let piJav = PI_JAV + `${no}`;
            try {
                GM_openInTab(piJav, false);
            } catch (e) {
                console.log(e);
                window.open(piJav, "_blank");
            }
        });
    } else {
        btnId = addButton('未Fork', {'bottom': '1%', 'background': 'grey'}, null, 0);
    }
    console.log(`CheckFork btn id: ${btnId}`);
}

// --------------------------
function injectFul() {
    // 播放页
    if (/\/video\//.test(window.location.pathname)) {
        let no = window.location.pathname.split('/').pop();
        checkForked(no);
    }
    // 搜索快捷键
    runWhenLoaded(`input[name='search_query']`, inputSearch => {
        document.addEventListener('keydown', e => {
            const btnSearch = document.querySelector(`button.search-here`);
            if (e.code !== 'Slash') {
                return
            }
            console.log(`Keydown, key code: ${e.code}`);
            // 按下斜杠"/"
            if (document.querySelector('.search-form-action')?.style?.visibility !== 'visible') {
                btnSearch?.click();
            }
            e.preventDefault();
            inputSearch.focus();
            inputSearch.select();
        });
    });

    // 封面图
    let player = document.querySelector('#player');
    if (player) {
        // 播放页面，忽略
        console.log('播放页，不缩放封面');
        // 添加假的AD元素(来不及)
        // let fakeDiv = document.createElement('div');
        // fakeDiv.style.display = 'none';
        // // fakeDiv.id = 'player';
        // fakeDiv.id = FAKE_AD_ID;
        // let container = document.body;
        // container.insertBefore(fakeDiv, container.firstChild);
        return
    }
    runWhenLoaded('.container-lg', mainDiv => {
        mainDiv.style['max-width'] = '100%';
        document.querySelectorAll('section .card')?.forEach(card => {
            let coverUrl = card.querySelector('img').getAttribute('data-src');
            // card.querySelector('.video-views').setAttribute('href', cover);
            let a = document.createElement('a');
            a.href = coverUrl;
            a.innerText = 'Pic';
            a.classList.add('video-addtime');
            a.style.textDecoration = 'none';
            card.querySelector('.video-views')?.appendChild(a);
        });
    });
}

function injectTube() {
    // 播放页
    if (/\/videos\/\d+/.test(window.location.pathname)) {
        // 切换到截图tab
        runWhenLoaded(`a[href="#tab_screenshots"]`, btnScr => {
            btnScr.click();
        });
        let no = document.querySelector('.headline h1').innerText.split(/\s/)[0];
        checkForked(no);
    }

    //搜索快捷键
    runWhenLoaded(`.search-text>input`, inputSearch => {
        document.addEventListener('keydown', e => {
            if (e.code !== 'Slash') {
                return
            }
            console.log(`click, key code: ${e.code}`);
            // 按下斜杠"/"
            setTimeout(_ => {
                inputSearch.focus();
                inputSearch.select();
            }, 250);
        });
    });
    // 界面宽度
    runWhenLoaded('.content', div => {
        if (document.querySelector('.block-video')) {
            // 播放页，不处理缩放
            runWhenLoaded('.block-video>.table', ad => {
                ad.style['display'] = 'none';
            });
            return
        }
        div.style['max-width'] = '90%';
    });

    // 大图
    let setFullPic = _ => {
        runWhenLoaded('.list-videos .item .thumb', _ => {
            document.querySelectorAll('.list-videos .item').forEach(item => {
                let cover = item.querySelector('.thumb');
                let fullPic = cover.getAttribute('data-webp');
                let title = item.querySelector('.title');
                if (!/國產精品/.test(title.innerText)) {
                    fullPic = cover.getAttribute('data-webp').replace(/([0-9]+x.*)/, 'preview_720p.mp4.jpg');
                }
                cover.style['height'] = 'auto';
                cover.src = fullPic;
                cover.setAttribute('data-webp', fullPic);
                // 链接
                // let a = item.querySelector('a');
                // let link = a.href;
                // console.log(link);
                // a.removeAttribute('href');
                // cover.setAttribute('href', link);
                // title.setAttribute('href', link);
            });
        });
    };
    setFullPic();
    runWhenLoaded('.pagination a', _ => {
        document.querySelectorAll('.pagination a').forEach(pag => {
            pag.addEventListener('click', _ => {
                console.log('click: ', pag);
                setTimeout(setFullPic, 2500);
            });
        });
    });
    runWhenLoaded('#list_videos_common_videos_list .headline h1', headline => {
        console.log(headline);
        headline.style['cursor'] = 'pointer';
        headline.addEventListener('click', e => {
            console.log('Headline clicked');
            setFullPic();
        });
    });
}

function injectMis() {
    // 搜索
    runWhenLoaded(`a.rounded-md`, btnSearch => {
        document.addEventListener('keydown', async e => {
            if (e.code !== 'Slash') {
                return
            }
            console.log(`Keydown, key code: ${e.code}`);
            // 按下斜杠"/"
            if (document.querySelector('input.bg-nord1')?.style?.visibility !== 'visible') {
                btnSearch?.click();
            }
            e.preventDefault();
            let inputSearch = await waitForEle('input.bg-nord1');
            inputSearch.focus();
            inputSearch.select();
        });
    });
    // 检查是否已fork
    let no = [].concat(document.querySelector('.mt-4 h1')?.innerText?.split(/\s/))[0];
    if (no) {
        checkForked(no);
    }
}

// region deprecated sites
function injectCl() {
    runWhenLoaded('.page-section>.container', div => {
        if (document.querySelector('.container>.mb-3')) {
            // 播放页，不处理
            return
        }
        div.style['max-width'] = '90%';
    })

    runWhenLoaded('.video-thumb', () => {
        document.querySelectorAll('.video-thumb').forEach(tb => {
            tb.src = tb.src.replace(/-[0-9]+x[0-9]+.jpg/, '.jpg');
            tb.setAttribute('data-src', tb.getAttribute('data-src').replace(/-[0-9]+x[0-9]+.jpg/, '.jpg'));
        })
    })
}

function injectGG() {
    runWhenLoaded('.pagination', () => {
        var main = document.querySelector('#contenedor');
        main.style['maxWidth'] = '100%';
        runWhenLoaded('.module>.content>.items>.item', () => {
            var items = document.querySelectorAll('.module>.content>.items>.item');
            items.forEach(item => {
                // var thumb = item.querySelector('img').dataset.src;
                var thumb = item.querySelector('img').src;
                var picUrl = thumb.replace(/-\d*x\d*.jpg/, '.jpg');
                var span = item.querySelector('.data>span');
                var a = document.createElement('a');
                a.style['fontSize'] = '12px';
                a.style['marginLeft'] = '2px';
                a.style['color'] = '#757a7d';
                a.innerText = '\ud83d\udc41';
                a.title = span.title
                a.href = picUrl;
                var onClick = (event) => {
                    console.log(picUrl);
                }
                a.addEventListener('click', onClick);
                a.addEventListener('auxclick', onClick)
                span.appendChild(a);
            });
        });
    });
}

function injectGuru() {
    runWhenLoaded('.paging-navigation', page => {
        page.style['maxWidth'] = '85%';
    });

    runWhenLoaded('.fa-eye', () => {
        document.querySelectorAll('.fa-eye').forEach(x => {
            var imgUrl = x.closest('.inside-article').querySelector('img').src;
            var href = imgUrl;
            if (imgUrl.includes('-') && imgUrl.includes('x')) {
                var slices = imgUrl.split('-');
                var sizeStr = slices[slices.length - 1].split('.')[0];
                href = imgUrl.replace(`-${sizeStr}`, '');
            }
            console.log('Pic source injected.')
            x.href = href;
            var a = document.createElement('a');
            a.innerText = x.innerText;
            a.title = x.title
            a.href = href;
            a.classList = x.classList;
            x.parentNode.appendChild(a);
            x.style.display = 'none';
        });
    });
}

function injectChill() {
    runWhenLoaded('.pull-right', () => {
        document.querySelectorAll(".pull-right").forEach(x => {
            var thumb = x.nextElementSibling;
            if (thumb && thumb.classList.contains('thumb')) {
                var url = thumb.style['background-image'].replaceAll('url("', '').replaceAll('")', '');
                x.attributes['durl'] = url;
                x.href = url;
                console.log('durl added');
                x.addEventListener('click', y => {
                    window.open(url, '_blank').focus();
                });
                var onAuxClick = (event) => {
                    console.log('On aux click');
                    if (event.button !== 1) {
                        return;
                    }
                    var item = event.target.closest(".pull-right");
                    if (!item) {
                        return;
                    }
                    var url = item.href;
                    console.log(url);
                    window.open(url, '_blank').focus();
                }
                x.removeEventListener('auxclick', onAuxClick);
                x.addEventListener('auxclick', onAuxClick);
            }
        });
    });
}

// endregion