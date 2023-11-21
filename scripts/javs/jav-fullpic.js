// ==UserScript==
// @name           JavFullPic
// @namespace      http://tampermonkey.net/
// @version        0.14
// @description    Click 👁 to see full picture, as well as other experience-enhancing functions
// @author         Akuma
// @match          https://javgg.net/*
// @match          https://jav.guru/*
// @match          https://javchill.com/*
// @match          https://javcl.com/*
// @match          https://tktube.com/*
// @match          https://javtiful.com/*
// @icon           data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant          none
// @require        https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-fullpic.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-fullpic.js
// ==/UserScript==

(function () {
    'use strict';
    // setTimeout(onReady, TIMEOUT);
    console.log(`Starting JavFullPic injection...`);
    switch (document.location.hostname) {
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
        case 'tktube.com':
            injectTube();
            break;
        case 'javtiful.com':
            injectFul();
            break;
    }
})();

function injectFul() {
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
    //搜索快捷键
    runWhenLoaded(`.search-text>input`, inputSearch => {
        document.addEventListener('keydown', e => {
            if (e.code !== 'Slash') {
                return
            }
            console.log(`Keydown, key code: ${e.code}`);
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
}

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