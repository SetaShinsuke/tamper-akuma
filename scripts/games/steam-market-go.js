// ==UserScript==
// @name         steam-market-go
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  添加卡牌市场的跳转链接
// @author       Akuma
// @match        https://store.steampowered.com/app/*
// @match        https://steamcommunity.com/id/*/gamecards/*
// @match        https://steamcommunity.com/id/*/inventory*
// @match        https://steamcommunity.com/id/*/badges*
// @match        https://www.steamcardexchange.net/index.php?badgeprices*
// @match        https://www.steamcardexchange.net/index.php?foilbadgeprices*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/steam-market-go.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/steam-market-go.js
// ==/UserScript==

const URL_BADGE = "https://steamcommunity.com/my/gamecards/{APP_ID}/";
const URL_MARKET = "https://steamcommunity.com/market/search?appid=753&category_753_Game[]=tag_app_{APP_ID}&&category_753_item_class%5B%5D=tag_item_class_2";
const URL_EXCHANGE = "https://www.steamcardexchange.net/index.php?gamepage-appid-{APP_ID}";
const URL_CARD_DETAIL = "https://steamcommunity.com/market/listings/753/{APP_ID}-{CARD_NAME}";

(function () {
    'use strict';
    console.log('Starting inject...');
    switch (location.host) {
        case 'store.steampowered.com':
            injectStorePage();
            break;
        case 'steamcommunity.com':
            if (/gamecards/.test(location.pathname)) {
                injectBadgesPage();
            } else if (/inventory/.test(location.pathname)) {
                injectInventoryPage();
            } else if (/badges/.test(location.pathname)) {
                // 徽章列表页：记录出我能收集卡牌的 appids
                injectBadgeList();
            }
            break;
        case 'steamcardexchange.net':
            break;
    }
})();

function injectBadgeList() {
    addButton(`复制 appIds`, {'left': '1%', 'bottom': '1%'}, async _ => {
        await waitForEle(`.badge_row_inner`);
        let finIds = [];
        Array.from(document.querySelectorAll(`.badge_row_inner`)).forEach(item => {
            let hint = item.querySelector(`.progress_info_bold`)
            if (!hint) {
                return;
            }
            hint = hint.innerText;
            // let got = item.querySelector(`.badge_progress_info`).innerText.match(/(\d+)\s?\/\s?\d+/);
            // if (got.length > 1){
            //     got = parseInt(got[1]);
            // }
            // if (/无剩余卡牌掉落/.test(hint) && got == 0){ // 不能掉落/已经掉落并出售
            // if (/无剩余卡牌掉落/.test(hint)){
            let appId = item.parentNode.querySelector(`a`).href.replace(/.+gamecards\/(\d+).+/, `$1`);
            finIds.push(appId);
            // }
        });
        console.log(`可掉落卡牌的游戏: \n`, finIds);
        copyToClipboard(finIds + '');
        toast('Appid 列表已复制!');
    }, 0);
}

function injectStorePage() {
    addButton('查看徽章进度', {'left': '1%', 'bottom': '1%'}, _ => {
        let appId = location.pathname.match(/\/app\/(\d+)/)[1];
        let link = URL_BADGE.replace(`{APP_ID}`, appId);
        window.open(link, '_blank');
    }, 0);
}

function injectBadgesPage() {
    // 给每个卡牌添加链接
    document.querySelectorAll('.badge_card_set_text.badge_card_set_title.ellipsis').forEach(card => {
        let appId = location.pathname.match(/\/gamecards\/(\d+)/)[1];
        let cardName = card.textContent.match(/\t([^\t\n]+)\t/);
        if (cardName?.length > 0) {
            cardName = cardName[1];
        } else {
            cardName = card.textContent;
        }
        let link = URL_CARD_DETAIL.replace('{APP_ID}', appId).replace('{CARD_NAME}', cardName);
        card.style['cursor'] = 'pointer';
        card.setAttribute('title', '在新标签查看');
        card.addEventListener('click', _ => {
            window.open(link, '_blank');
        });
    });
    // 在市场搜索卡牌
    addButton('查看市场', {'left': '1%', 'bottom': '1%'}, _ => {
        let appId = location.pathname.match(/\/gamecards\/(\d+)/)[1];
        let link = URL_MARKET.replace(`{APP_ID}`, appId);
        window.open(link, '_blank');
    }, 0);
    // 在站外查看大图
    addButton('徽章预览', {'left': '1%', 'bottom': '8%'}, _ => {
        let appId = location.pathname.match(/\/gamecards\/(\d+)/)[1];
        let link = URL_EXCHANGE.replace(`{APP_ID}`, appId);
        window.open(link, '_blank');
    }, 0)
}

function injectInventoryPage() {
    // 点击标题查看详情
    let onCardImgClick = event => {
        console.log(event.target);
        let descDiv = event.target.parentElement.parentElement.parentElement;
        let cardTitle = descDiv.querySelector('h1.hover_item_name');
        let appId = descDiv.querySelector('.steamdb_badge_info>a')?.href?.match(/\/gamecards\/(\d+)/)[1];
        if (!appId) {
            console.log('不是卡牌, 忽略点击');
            return;
        }
        let cardName = cardTitle.innerText;
        let link = URL_CARD_DETAIL.replace('{APP_ID}', appId).replace('{CARD_NAME}', cardName);
        window.open(link, '_blank');
    };
    let onInvItemClick = _ => {
        console.log('Click inventory item');
        document.querySelectorAll('.inventory_iteminfo .item_desc_icon_center').forEach(cardImg => {
            cardImg.style.cursor = 'zoom-in';
            cardImg.removeEventListener('click', onCardImgClick);
            cardImg.removeEventListener('auxclick', onCardImgClick);
            cardImg.addEventListener('click', onCardImgClick);
            cardImg.addEventListener('auxclick', onCardImgClick);
        });
    };
    let setItemClick = _ => {
        runWhenLoaded('.inventory_item_link', _ => {
            // 点击库存
            let invItems = document.querySelectorAll('.inventory_item_link');
            invItems.forEach(item => {
                item.removeEventListener('click', onInvItemClick);
                item.addEventListener('click', onInvItemClick);
            });
        });
    };
    runWhenLoaded('#pagecontrol_max', _ => {
        setItemClick();
    });
    // 点击翻页时重新绑定点击
    runWhenLoaded(`#inventory_pagecontrols`, pageNav => {
        pageNav.addEventListener('click', _ => {
            console.log('Click pageNav');
            setItemClick();
        });
    });
}

