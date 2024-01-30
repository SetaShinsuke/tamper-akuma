// @grant        GM_xmlhttpRequest
// @require https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js

let n = new NetHelper();

class NetHelper {
    constructor() {
        let referer = `${window.location.protocol}//${window.location.host}`;
        // content-type: 发送格式
        this.headers = {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
            "Referer": referer
        };
        // data-type: 接收格式
        this.dataType = 'json';
        this._onProgress = progress => {
        };
    }

    head(url) {
        this.#doRequest('HEAD', url);
    }

    get(url) {
        this.#doRequest('GET', url);
    }

    post(url, data) {
        this.#doRequest('POST', url, data);
    }

    put(url, data) {
        this.#doRequest('PUT', url, data);
    }

    #doRequest(_method, _url, _data = {}) {
        return new Promise((resolve, reject) => {
            let _dataType = this.dataType;
            let _onProgress = this._onProgress;
            GM_xmlhttpRequest({
                method: _method,
                url: _url,
                headers: this.headers,
                dataType: _dataType, // 接收格式
                data: _data,
                onerror: function (error) {
                    console.log(`${_method} error: \n`, error);
                    reject(error);
                },
                onload: function (response) {
                    if (/json/.test(_dataType)) {
                        let resJson = JSON.parse(response.responseText);
                        console.log(`${_method} success: \n`, resJson);
                        resolve(resJson);
                    } else {
                        resolve(response);
                    }
                },
                onprogress: function (progress) {
                    _onProgress(progress);
                }
            });
        });
    }
}
