// @grant        GM_xmlhttpRequest
// @require https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js

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
        return this.#doRequest('HEAD', url);
    }

    get(url) {
        return this.#doRequest('GET', url);
    }

    post(url, data = {}) {
        return this.#doRequest('POST', url, data);
    }

    put(url, data) {
        return this.#doRequest('PUT', url, data);
    }

    #doRequest(_method, _url, _data = {}) {
        // 处理 data
        let dataString = '';
        Object.keys(_data).forEach(k => {
            let d = _data[k];
            if (Array.isArray(d)) {
                d = JSON.stringify(d);
            }
            dataString += `${k}=${d}&`;
        });
        dataString = dataString.slice(0, -1);
        // 返回 Promise
        return new Promise((resolve, reject) => {
            let _dataType = this.dataType;
            let _onProgress = this._onProgress;
            GM_xmlhttpRequest({
                method: _method,
                url: _url,
                headers: this.headers,
                dataType: _dataType, // 接收格式
                data: dataString,
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
