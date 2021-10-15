// ==UserScript==
// @name         BetterGoogleBilibili
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  避免在Google搜索的Bilibili视频结果中出现"/s/video"的链接
// @author       Seta
// @match        https://www.google.com/search?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.querySelectorAll("a[href^='https://www.bilibili.com/s/video/']");
    if(links.length>0){
        Array.from(links).forEach(link => {
            link.href = link.href.replaceAll('com/s/video', 'com/video');
        });
    }
})();