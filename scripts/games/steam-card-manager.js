// ==UserScript==
// @name         steam-card-manager
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Description here
// @author       Akuma
// @match        https://steamcommunity.com/market/listings/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      192.168.0.120
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/steam-card-manager.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/steam-card-manager.js
// ==/UserScript==

const HOST = `http://192.168.0.120:9292`;
const API_CARD = `${HOST}/api/steam_cards`;
const API_CARD_HISTORY = `${API_CARD}/histories`;
const API_ALL_HISTORY = API_CARD_HISTORY + "?all=true";
const S_LISTING = 's_listing';
const B_LISTING = 'b_listing';
const ON_LISTING = 'on';
const ORDER_LISTING = 'order';

let netHelper = new NetHelper();

const findCardUid = _ => window.location.pathname.match(/\/market\/listings\/\d+\/(\d+.*)/)[1];

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

async function inject() {
    let uid = findCardUid();
    // 如果有我出售单/订购单，则滚动到对应位置 + 添加对应按钮
    checkMyOrder(uid);
    // 显示两侧列表
    showChart(S_LISTING);
    showChart(B_LISTING);
    showChart(ON_LISTING);
    showChart(ORDER_LISTING);
    // 点击添加记录
    addButton(`+出售单记录`, {'left': '1%', 'bottom': '1%'}, _ => addListing(uid, S_LISTING), 0);
    addButton(`+订购单记录`, {'right': '1%', 'bottom': '1%'}, _ => addListing(uid, B_LISTING), 0);
}

function checkMyOrder(uid) {
    waitForEle(`.my_listing_section .market_listing_row.market_recent_listing_row`, 2_000, 10_000).then(myListing => {
        document.querySelector(`.market_commodity_orders_block`).scrollIntoView({behavior: 'smooth'});
        let listingType = ORDER_LISTING;
        let btnTag = `+订购记录`;
        if (document.querySelector(`.market_recent_listing_row .market_listing_my_price .market_listing_price span>span:nth-child(1)`)) {
            listingType = ON_LISTING;
            btnTag = `+上架记录`;
        }
        addButton(btnTag, {
            'left': '1%',
            'top': '1%',
            'background': 'rgb(229 138 0)'
        }, _ => addListing(uid, listingType), 0);
    });
}

async function showChart(listingType) {
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
    console.log('显示 table: ' + listingType);
    let position = 'left';
    if (listingType === B_LISTING || listingType === ORDER_LISTING) {
        position = 'right'
    }
    let vPosition = 'top';
    let opacity = '1';
    if (listingType === ON_LISTING || listingType === ORDER_LISTING) {
        vPosition = 'bottom';
        opacity = '0.25';
    }
    let divId = `billboard-${listingType}`;
    let billboard = document.getElementById(divId);
    if (!billboard) {
        billboard = document.createElement('div');
        billboard.id = divId;
        // 样式
        billboard.style[vPosition] = '15%';
        billboard.style[position] = '1%';
        billboard.style['opacity'] = opacity;
        billboard.style['position'] = 'fixed';
        billboard.style['display'] = 'block';
        billboard.style['color'] = 'white';
        billboard.style['z-index'] = '2147483647';
        billboard.style['background'] = 'rgba(0, 0, 0, 0.8)';
        billboard.style['border'] = '1px solid rgba(255, 255, 255, 0.3)';
        billboard.style['borderRadius'] = '5px';
        billboard.style['padding'] = '10px';
        billboard.style['maxHeight'] = '300px';
        billboard.style['overflow'] = 'auto';
    }
    // 如果没有数据，直接返回不显示
    if (histories.length === 0) {
        // 如果之前有显示，移除它
        if (billboard.parentNode) {
            billboard.parentNode.removeChild(billboard);
        }
        return;
    }
    
    billboard.innerHTML = '';
    
    // 创建表格
    let table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '12px';
    
    // 创建表头
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    
    let headers = ['价格', '数量', '日期'];
    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.textContent = headerText;
        th.style.padding = '4px 8px';
        th.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        th.style.textAlign = 'left';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // 创建表格主体
    let tbody = document.createElement('tbody');
    
    histories.forEach(h => {
        let row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.style.transition = 'background-color 0.2s';
        
        // 价格列
        let priceCell = document.createElement('td');
        priceCell.textContent = (h.price / 100.0).toFixed(2);
        priceCell.style.padding = '4px 8px';
        priceCell.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        
        // 数量列
        let countCell = document.createElement('td');
        countCell.textContent = h.count;
        countCell.style.padding = '4px 8px';
        countCell.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        
        // 日期列
        let dateCell = document.createElement('td');
        dateCell.textContent = (new Date(h.record_date)).toLocaleDateString();
        dateCell.style.padding = '4px 8px';
        dateCell.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        
        row.appendChild(priceCell);
        row.appendChild(countCell);
        row.appendChild(dateCell);
        
        // 鼠标悬停效果
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
        });
        
        // 点击事件
        row.addEventListener('click', () => {
            let url = `${HOST}/pages/#/games/steam_cards/histories?search=${cardUid}&search_by=card_uid&kind=${listingType}`;
            window.open(url, '_blank');
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    billboard.appendChild(table);
    
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
    // 包含 (foil) 或 (foil xxx)
    let isFoil = /(\([fF]oil\)|%28[fF]oil.+%29)/.test(window.location.pathname);
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

    let date = (new Date()).toISOString();
    let price, count, extra, now;
    let countIndex = 0
    switch (listingType) {
        case ON_LISTING:
            date = document.querySelector(`.market_listing_row .market_listing_right_cell.market_listing_listed_date.can_combine`).innerText;
            date = `2026-${date.replace(' 月 ', '-').replace('日', '')}`;
            now = new Date();
            date = new Date(Date.parse(date));
            if (date > now) { // 超过今天了，说明年份是去年
                date.setFullYear(date.getFullYear() - 1);
            }
            if (date.toLocaleDateString() === now.toLocaleDateString()) { // 日期为今日，应该是刚刚上架，把时间改成此刻
                date = now;
            }
            date = date.toISOString();
            // 预计赚到多少 (￥1.00)
            extra = document.querySelector(`.market_recent_listing_row .market_listing_my_price .market_listing_price>span>span:last-child`)?.innerText
        case ORDER_LISTING:
            count = 1;
            price = document.querySelector(`.market_recent_listing_row .market_listing_my_price .market_listing_price`).innerText;
            price = price.replace(/\n.+/, '');
            break;
        case B_LISTING:
            countIndex = 2;
        // 这里就不break，因为除 countIndex 之外的逻辑和 S_LISTING 分支相同
        case S_LISTING:
            count = document.querySelectorAll(`span.market_commodity_orders_header_promote`)[countIndex].innerText;
            count = parseInt(count);
            price = document.querySelectorAll(`span.market_commodity_orders_header_promote`)[countIndex + 1].innerText;
            break;
        default:
            break;
    }
    price = price.replace(/¥(\s+)?/, '');
    price = parseInt(Number(price) * 100);
    let data = {
        card_id: cardId,
        kind: listingType,
        price: price,
        count: count,
        record_date: date
    }
    if (extra) {
        data.extra = extra;
    }
    console.log(data);
    netHelper.post(API_CARD_HISTORY, data).then(response => {
        if (response.error) {
            console.log(response.error);
            alert('Error: ' + response.error);
            return;
        }
        showChart(listingType);
        toast(`已添加记录!`);
    }).catch(error => {
        console.log(error);
        alert(`记录添加失败!`);
    });
}

async function findCardName() {
    return (await waitForEle(`.largeiteminfo_react_placeholder h1 span`))?.innerText;
}
