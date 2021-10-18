// ==UserScript==
// @name         VG-auto-login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto login to VGTime
// @author       Akuma
// @match        https://www.vgtime.com/*
// @icon         https://www.google.com/s2/favicons?domain=vgtime.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/vgtime-auto-login.js
// ==/UserScript==

(function() {
    'use strict';
    var avatar = document.querySelector('#vgonlyuinfo');
    if(avatar.src === 'https://static.vgtime.com/image/tou.gif'){
        avatar.parentNode.click();
        setTimeout(()=>{
            loginClick();
            avatar.parentNode.click();
        }, 3000);
    }
})();

function loginClick(){
    var username = document.querySelector('#username');
    var loginBtn = document.querySelector('#btnlogin');
    if(username && loginBtn){
        loginBtn.click();
    }
}