// ==UserScript==
// @name         youtube popup killer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Selbereth
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

// 原项目：
// https://gist.github.com/cutiepoka/a9347c68bfcf29060926a8af46bb1701

(function () {
  window.debug = true;
  if (debug) console.log("started");
  setInterval(() => {
    if (!!popupFind()) {
      if (debug) console.log("remove popup");
     const popup = popupFind()
     console.log(popup)
      popup.parentNode.removeChild(popup)

      if (debug) console.log("resume video");
      //pauseFind().click()
      if (debug) console.log("done ");
    }
  }, 1000);
})();

function popupFind() {
  return document.querySelector("body > ytd-app > ytd-popup-container");
}
function pauseFind(){

  return document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");

}