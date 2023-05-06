// ==UserScript==
// @name           JavFullPic
// @namespace      http://tampermonkey.net/
// @version        0.8
// @description    Click 👁 to see full picture.
// @author         Akuma
// @match          https://javgg.net/*
// @match          https://jav.guru/*
// @match          https://javchill.com/*
// @match          https://javcl.com/*
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
            break
    }
})();

function injectCl() {
    runWhenLoaded('.page-section>.container', div => {
        if(document.querySelector('.container>.mb-3')){
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