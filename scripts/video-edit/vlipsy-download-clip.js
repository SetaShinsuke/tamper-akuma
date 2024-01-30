// ==UserScript==
// @name         vlipsy-download-clip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://vlipsy.com/embed/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/video-edit/vlipsy-download-clip.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/video-edit/vlipsy-download-clip.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    runWhenLoaded('video#video', video => {
        let src = video.src;
        console.log(`video src: ${src}`);
        window.open(src, '_blank');
    });
}
