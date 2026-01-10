// ==UserScript==
// @name         steam-card-manager
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Description here
// @author       Akuma
// @match        https://steamcommunity.com/market/listings/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      192.168.0.120
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/steam_card_manager.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/steam_card_manager.js
// ==/UserScript==

const API_CARD = `http://192.168.0.120:9292/api/cards`;
const API_CARD_HISTORY = `${API_CARD}/histories`;
const API_ALL_HISTORY = API_CARD_HISTORY + "?all=true";
const S_LISTING = 's_listing';
const B_LISTING = 'b_listing';

let netHelper = new NetHelper();

const findCardUid = _ => window.location.pathname.match(/\/market\/listings\/\d+\/(\d+.*)/)[1];

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

async function inject() {
    let uid = findCardUid();
    // 显示两侧列表
    showHistories(S_LISTING);
    showHistories(B_LISTING);
    // 点击添加记录
    addButton(`+出售单记录`, {'left': '1%', 'bottom': '1%'}, _ => addListing(uid, S_LISTING), 0);
    addButton(`+订购单记录`, {'right': '1%', 'bottom': '1%'}, _ => addListing(uid, B_LISTING), 0);
}

async function showHistories(listingType) {
    let cardUid = findCardUid();
    let url = API_ALL_HISTORY + `&card_uid=${cardUid}&kind=${listingType}`;
    console.log(url);
    let histories = await netHelper.get(url).catch(e => {
        console.error(e);
        alert('Error: ' + e.message);
    });
    if (!histories) {
        return;
    }
    histories = histories.histories;
    // console.log(histories);
    console.log('显示 table: ' + listingType);
    let position = 'left';
    if (listingType === B_LISTING) {
        position = 'right'
    }
    let divId = `billboard-${listingType}`;
    let billboard = document.getElementById(divId);
    if (!billboard) {
        billboard = document.createElement('div');
        billboard.id = divId;
    }
    billboard.innerHTML = '';
    histories.forEach(h => {
        billboard.innerHTML += `${(h.price / 100.0).toFixed(2)}---${h.count}---${(new Date(h.record_date)).toLocaleDateString()}<br>`;
    });
    billboard.style['top'] = '15%';
    billboard.style['position'] = 'fixed';
    billboard.style['display'] = 'block';
    // billboard.style['background'] = 'red';
    billboard.style['color'] = 'white';
    billboard.style['z-index'] = '2147483647';
    billboard.style[position] = '1%';
    // console.log('billboard', billboard);
    document.body.appendChild(billboard);
}

// 获取 cardId
async function fetchCardId() {
    let cardUid = findCardUid();
    let cardId;
    console.log(`sync card: ${cardUid}`);
    let response = await netHelper.get(API_CARD + `?uid=${cardUid}`).catch(e => {
        console.error(e);
        alert('Error: ' + e.message);
        throw e;
    });
    let cards = response.cards;
    console.log(cards);
    if (cards?.length <= 0) {
        console.log(`卡牌未保存，尝试保存...`);
        cardId = await addCard();
    } else {
        console.log(`Card already forked, uid: ${cardUid}`);
        cardId = cards[0].id;
    }
    return cardId;
}

// 添加 card 并返回 cardId
async function addCard() {
    let uid = findCardUid();
    let cardId;
    let name = await findCardName();
    // 图片加载出来再继续
    let img = await waitForEle(`.largeiteminfo_react_placeholder img`);
    img = img.src;
    let marketId = parseInt(window.location.pathname.match(/market\/listings\/(\d+)\//)[1]);
    let isFoil = /\([fF]oil\)$/.test(window.location.pathname);
    let data = {
        uid: uid,
        name: name,
        img: img,
        market_id: marketId,
        foil: isFoil
    }
    console.log(`正在添加卡牌: \n`, data);
    let response = await netHelper.post(API_CARD, data);
    cardId = response.card.id;
    console.log(`已添加卡牌\n`, response);
    console.log(`cardId: ${cardId};`);
    return cardId;
}

async function addListing(uid, listingType) {
    // 先更新卡牌信息
    let cardId = await fetchCardId();

    let tableId = `#market_commodity_forsale_table`;
    let countIndex = 0
    if (listingType === B_LISTING) {
        tableId = `#market_commodity_buyreqeusts_table`;
        countIndex = 2;
    }
    let firstListing = document.querySelector(`${tableId} tr:nth-child(2)`);
    let price = firstListing.querySelector(`td`).innerText.replace(/¥\s+/, '');
    price = parseInt(Number(price) * 100);
    // let count = firstListing.querySelector(`td:last-child`).innerText;
    let count = document.querySelectorAll(`span.market_commodity_orders_header_promote`)[countIndex].innerText;
    count = parseInt(count);
    let date = (new Date()).toISOString();
    let data = {
        card_id: cardId,
        kind: listingType,
        price: price,
        count: count,
        record_date: date
    }
    console.log(data);
    netHelper.post(API_CARD_HISTORY, data).then(response => {
        if (response.error) {
            console.log(response.error);
            alert('Error: ' + response.error);
            return;
        }
        showHistories(listingType);
        toast(`已添加记录!`);
    }).catch(error => {
        console.log(error);
        alert(`记录添加失败!`);
    });
}

async function findCardName() {
    return (await waitForEle(`.largeiteminfo_react_placeholder h1 span`))?.innerText;
}
