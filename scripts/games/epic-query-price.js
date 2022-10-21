// ==UserScript==
// @name         EpicQueryPrice
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Query price data in epic store
// @author       Akuma
// @match        https://store.epicgames.com/*/p/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/epic-query-price.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/epic-query-price.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    var priceData = null
    window.__REACT_QUERY_INITIAL_QUERIES__.queries.forEach(x => {
        if (x.queryHash.match(/getCatalogOffer/)) {
            priceData = x.state.data.Catalog.catalogOffer.price;
            console.log(priceData);
        }
    })
    // todo: 上报给 pihub
    // var prices = {
    //     "price": {
    //         "totalPrice": {
    //             "discountPrice": 0,
    //             "originalPrice": 1399,
    //             "voucherDiscount": 0,
    //             "discount": 1399,
    //             "currencyCode": "USD",
    //             "currencyInfo": {
    //                 "decimals": 2
    //             },
    //             "fmtPrice": {
    //                 "originalPrice": "US$13.99",
    //                 "discountPrice": "0",
    //                 "intermediatePrice": "0"
    //             }
    //         }
    //     }
    // }
}
