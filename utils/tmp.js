!function(e) {
    function t(t) {
        for (var i, r, s = t[0], c = t[1], u = t[2], l = 0, M = []; l < s.length; l++)
            r = s[l],
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && M.push(o[r][0]),
                o[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        for (d && d(t); M.length; )
            M.shift()();
        return a.push.apply(a, u || []),
            n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], i = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (i = !1)
            }
            i && (a.splice(t--, 1),
                e = s(s.s = n[0]))
        }
        return e
    }
    var i = {}
        , r = {
        12: 0
    }
        , o = {
        12: 0
    }
        , a = [];
    function s(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
            n.l = !0,
            n.exports
    }
    s.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            2: 1,
            4: 1,
            21: 1,
            22: 1,
            26: 1,
            27: 1,
            28: 1,
            29: 1,
            31: 1
        }[e] && t.push(r[e] = new Promise((function(t, n) {
                for (var i = "static/css/" + e + "." + {
                    2: "73011bac86",
                    4: "6d5a99a854",
                    15: "31d6cfe0d1",
                    21: "aa074c2a05",
                    22: "8b8d9f0d45",
                    26: "8be216027e",
                    27: "f4e6f50f2a",
                    28: "ad54239390",
                    29: "551b2c26c6",
                    31: "01dc06bef5"
                }[e] + ".css", o = s.p + i, a = document.getElementsByTagName("link"), c = 0; c < a.length; c++) {
                    var u = (d = a[c]).getAttribute("data-href") || d.getAttribute("href");
                    if ("stylesheet" === d.rel && (u === i || u === o))
                        return t()
                }
                var l = document.getElementsByTagName("style");
                for (c = 0; c < l.length; c++) {
                    var d;
                    if ((u = (d = l[c]).getAttribute("data-href")) === i || u === o)
                        return t()
                }
                var M = document.createElement("link");
                M.rel = "stylesheet",
                    M.type = "text/css";
                M.onerror = M.onload = function(i) {
                    if (M.onerror = M.onload = null,
                    "load" === i.type)
                        t();
                    else {
                        var a = i && ("load" === i.type ? "missing" : i.type)
                            , s = i && i.target && i.target.href || o
                            , c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                        c.code = "CSS_CHUNK_LOAD_FAILED",
                            c.type = a,
                            c.request = s,
                            delete r[e],
                            M.parentNode.removeChild(M),
                            n(c)
                    }
                }
                    ,
                    M.href = o,
                    document.head.appendChild(M)
            }
        )).then((function() {
                r[e] = 0
            }
        )));
        var n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise((function(t, i) {
                        n = o[e] = [t, i]
                    }
                ));
                t.push(n[2] = i);
                var a, c = document.createElement("script");
                c.charset = "utf-8",
                    c.timeout = 120,
                s.nc && c.setAttribute("nonce", s.nc),
                    c.src = function(e) {
                        return s.p + "static/js/" + ({}[e] || e) + "." + {
                            2: "dcb1dddbb8",
                            4: "3ea34b025b",
                            15: "b11d9b4ddd",
                            21: "c3b50899ee",
                            22: "6d024dd931",
                            26: "4b9776f9cf",
                            27: "3566945307",
                            28: "8bc3581d3e",
                            29: "537309d5b9",
                            31: "b2d496fd8e"
                        }[e] + ".js"
                    }(e);
                var u = new Error;
                a = function(t) {
                    c.onerror = c.onload = null,
                        clearTimeout(l);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                                , r = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")",
                                u.name = "ChunkLoadError",
                                u.type = i,
                                u.request = r,
                                n[1](u)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                        a({
                            type: "timeout",
                            target: c
                        })
                    }
                ), 12e4);
                c.onerror = c.onload = a,
                    document.head.appendChild(c)
            }
        return Promise.all(t)
    }
        ,
        s.m = e,
        s.c = i,
        s.d = function(e, t, n) {
            s.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        s.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        s.t = function(e, t) {
            if (1 & t && (e = s(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (s.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    s.d(n, i, function(t) {
                        return e[t]
                    }
                        .bind(null, i));
            return n
        }
        ,
        s.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return s.d(t, "a", t),
                t
        }
        ,
        s.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        s.p = "//i0.hdslb.com/bfs/manga-static/manga-pc/",
        s.oe = function(e) {
            throw console.error(e),
                e
        }
    ;
    var c = window.webpackJsonp = window.webpackJsonp || []
        , u = c.push.bind(c);
    c.push = t,
        c = c.slice();
    for (var l = 0; l < c.length; l++)
        t(c[l]);
    var d = u;
    a.push(["ODuK", 0, 1]),
        n()
}({
    "+8rY": function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjUuMzI4MTI1LDUuNTYyNTAwMDIgQzIzLjYwOTM3NSw0LjQxNjY2NjY4IDIxLjczOTU4MzMsMy44NDM3NTAwMiAxOS43MTg3NSwzLjg0Mzc1MDAyIEMxOC4xMDQxNjY2LDMuODQzNzUwMDIgMTYuNTc4MTI1LDQuMjIzOTU4MzUgMTUuMTQwNjI1LDQuOTg0Mzc1MDIgQzEzLjcwMzEyNSw1Ljc0NDc5MTcgMTIuNDUzMTI1LDYuNzg2NDU4MzYgMTEuMzkwNjI1LDguMTA5Mzc1MDIgQzEwLjYwOTM3NSw5LjA3ODEyNTAxIDkuOTg2OTc5MTYsMTAuMjEzNTQxNyA5LjUyMzQzNzUsMTEuNTE1NjI1IEM5LjA1OTg5NTg0LDEyLjgxNzcwODQgOC44MDcyOTE2NywxNC4yMDMxMjUgOC43NjU2MjQ5OSwxNS42NzE4NzUgTDguNzY1NjI0OTksMTYuMzI4MTI1IEM4LjgwNzI5MTY2LDE3Ljc5Njg3NSA5LjA1OTg5NTgzLDE5LjE4MjI5MTcgOS41MjM0Mzc1LDIwLjQ4NDM3NSBDOS45ODY5NzkxOCwyMS43ODY0NTg0IDEwLjYwOTM3NSwyMi45MjE4NzUgMTEuMzkwNjI1LDIzLjg5MDYyNSBDMTIuNDUzMTI1LDI1LjIxMzU0MTcgMTMuNzAzMTI1LDI2LjI1NTIwODQgMTUuMTQwNjI1LDI3LjAxNTYyNSBDMTYuNTc4MTI1LDI3Ljc3NjA0MTcgMTguMTA0MTY2NywyOC4xNTYyNSAxOS43MTg3NSwyOC4xNTYyNSBDMjEuNzM5NTgzMywyOC4xNTYyNSAyMy42MDkzNzUsMjcuNTgzMzMzNCAyNS4zMjgxMjUsMjYuNDM3NSBDMjQuMDY3NzA4MywyNy41NjI1IDIyLjYzODAyMDgsMjguNDM3NSAyMS4wMzkwNjI1LDI5LjA2MjUgQzE5LjQ0MDEwNDEsMjkuNjg3NSAxNy43NjA0MTY2LDMwIDE2LDMwIEMxNS42OTc5MTY2LDMwIDE1LjQ3Mzk1ODMsMjkuOTk0NzkxNyAxNS4zMjgxMjUsMjkuOTg0Mzc1IEMxMy41MDUyMDgzLDI5LjkwMTA0MTcgMTEuNzcwODMzMywyOS40NzM5NTgzIDEwLjEyNSwyOC43MDMxMjUgQzguNDc5MTY2NjUsMjcuOTMyMjkxNyA3LjA2MjQ5OTk4LDI2LjkyNzA4MzQgNS44NzQ5OTk5OCwyNS42ODc1IEM0LjY4NzQ5OTk5LDI0LjQ0NzkxNjcgMy43NDQ3OTE2NiwyMi45ODQzNzUgMy4wNDY4NzQ5OSwyMS4yOTY4NzUgQzIuMzQ4OTU4MzMsMTkuNjA5Mzc1IDIsMTcuODQzNzUgMiwxNiBDMiwxNC4xMDQxNjY3IDIuMzY5NzkxNjcsMTIuMjkxNjY2NyAzLjEwOTM3NTAxLDEwLjU2MjUgQzMuODQ4OTU4MzUsOC44MzMzMzMzMyA0Ljg0Mzc1MDAyLDcuMzQzNzUgNi4wOTM3NTAwMSw2LjA5Mzc1MDAxIEM3LjM0Mzc1LDQuODQzNzUwMDIgOC44MzMzMzMzMywzLjg0ODk1ODM1IDEwLjU2MjUsMy4xMDkzNzUwMSBDMTIuMjkxNjY2NywyLjM2OTc5MTY3IDE0LjEwNDE2NjcsMiAxNiwyIEwxNi4wNDY4NzUsMiBDMTcuNzk2ODc1LDIuMDEwNDE2NjcgMTkuNDY2MTQ1OSwyLjMyNTUyMDg1IDIxLjA1NDY4NzUsMi45NDUzMTI1MSBDMjIuNjQzMjI5MiwzLjU2NTEwNDE4IDI0LjA2NzcwODQsNC40Mzc1MDAwMSAyNS4zMjgxMjUsNS41NjI1MDAwMiBMMjUuMzI4MTI1LDUuNTYyNTAwMDIgWiBNMzAsMTYgQzMwLDE4IDI5LjU5ODk1ODMsMTkuODg4MDIwOSAyOC43OTY4NzUsMjEuNjY0MDYyNSBDMjcuOTk0NzkxNywyMy40NDAxMDQyIDI2Ljg4NTQxNjcsMjQuOTg0Mzc1IDI1LjQ2ODc1LDI2LjI5Njg3NSBDMjQuMzg1NDE2NywyNi45NTMxMjUgMjMuMjI5MTY2NywyNy4yODEyNSAyMiwyNy4yODEyNSBDMjAuNTcyOTE2NywyNy4yODEyNSAxOS4yNDQ3OTE2LDI2Ljg0Mzc1IDE4LjAxNTYyNSwyNS45Njg3NSBDMTkuNjE5NzkxNiwyNS4zODU0MTY3IDIwLjk0MDEwNDEsMjQuMTcxODc1IDIxLjk3NjU2MjUsMjIuMzI4MTI1IEMyMy4wMTMwMjA4LDIwLjQ4NDM3NSAyMy41MzEyNSwxOC4zNzUgMjMuNTMxMjUsMTYgQzIzLjUzMTI1LDEzLjYzNTQxNjcgMjMuMDE1NjI1LDExLjUzMTI1IDIxLjk4NDM3NSw5LjY4NzUwMDAyIEMyMC45NTMxMjUsNy44NDM3NTAwMyAxOS42MzU0MTY2LDYuNjI1MDAwMDIgMTguMDMxMjUsNi4wMzEyNTAwMiBDMTkuMjcwODMzMyw1LjE2NjY2NjY5IDIwLjU5Mzc1LDQuNzM0Mzc1MDMgMjIsNC43MzQzNzUwMyBDMjMuMjM5NTgzMyw0LjczNDM3NTAzIDI0LjQxNjY2NjYsNS4wNzI5MTY2OSAyNS41MzEyNSw1Ljc1MDAwMDAyIEMyNi45Mzc1LDcuMDUyMDgzMzUgMjguMDMzODU0MSw4LjU4ODU0MTY5IDI4LjgyMDMxMjQsMTAuMzU5Mzc1IEMyOS42MDY3NzA4LDEyLjEzMDIwODQgMzAsMTQuMDEwNDE2NyAzMCwxNiBMMzAsMTYgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
    },
    "+J0b": function(e, t, n) {
        "use strict";
        var i, r;
        function o(e) {
            switch (e) {
                case i.FREE:
                    return r.free;
                case i.POPULARITY_JAPAN:
                    return r.japan;
                case i.POPULARITY_CHINA:
                    return r.china;
                case i.RISING:
                    return r.rising;
                default:
                    return null
            }
        }
        n.d(t, "a", (function() {
                return i
            }
        )),
            n.d(t, "b", (function() {
                    return r
                }
            )),
            n.d(t, "c", (function() {
                    return o
                }
            )),
            function(e) {
                e.POPULARITY_JAPAN = "ninnki",
                    e.POPULARITY_CHINA = "renqi",
                    e.RISING = "rising",
                    e.FREE = "muryou"
            }(i || (i = {})),
            function(e) {
                e[e.popularity = 0] = "popularity",
                    e[e.free = 1] = "free",
                    e[e.rising = 2] = "rising",
                    e[e.japan = 3] = "japan",
                    e[e.china = 4] = "china"
            }(r || (r = {}))
    },
    "+cnd": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return m
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("7W2i")
            , M = n.n(d)
            , p = n("a1gu")
            , f = n.n(p)
            , y = n("Nsbk")
            , g = n.n(y)
            , A = n("vDqi")
            , D = n.n(A)
            , h = n("fLv1")
            , N = n("91CG")
            , j = function() {
            function e() {
                c()(this, e)
            }
            return l()(e, null, [{
                key: "getImageToken",
                value: function(e) {
                    return N.a.post({
                        url: "/twirp/comic.v1.Comic/ImageToken",
                        data: {
                            urls: JSON.stringify(e)
                        }
                    })
                }
            }]),
                e
        }()
            , v = n("SiI8")
            , w = n("ZojZ")
            , I = n("Ubnt");
        function T(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = g()(e);
                if (t) {
                    var r = g()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return f()(this, n)
            }
        }
        var m = function(e) {
            M()(s, e);
            var t, n, i, o = T(s);
            function s(e) {
                var t;
                c()(this, s),
                    (t = o.call(this, document.createElement("canvas"), I.b.ReaderImage))._token = "",
                    t._tokenExpireTimer = null,
                    t._imagePath = "",
                    t._isSizeInvalid = !1,
                    t._url = "",
                    t._width = 0,
                    t._height = 0,
                    t._cancelToken = null;
                var n = e.width
                    , i = e.height
                    , r = e.imagePath
                    , a = e.seasonId
                    , u = e.episodeId
                    , l = e.index;
                return n > 0 && i > 0 ? (t._width = n,
                    t._height = i,
                    t.element.width = n,
                    t.element.height = i) : (t._isSizeInvalid = !0,
                    w.a.warn("[".concat(a, "/").concat(u, "] Size data for image ").concat(l, " is invalid."))),
                    t._imagePath = v.a.bfsLink(r.replace(".JPG", ".jpg"), n),
                    t.resetState(),
                    t
            }
            return l()(s, [{
                key: "loadToken",
                value: (i = a()(r.a.mark((function e() {
                            var t, n, i;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    j.getImageToken([this._imagePath]);
                                            case 2:
                                                if (t = e.sent,
                                                    n = t.data,
                                                    !(i = t.error)) {
                                                    e.next = 7;
                                                    break
                                                }
                                                throw i;
                                            case 7:
                                                e.prev = 7,
                                                    this._token = n[0].token,
                                                    this._url = n[0].url,
                                                    this.startTokenExpireTimer(),
                                                    e.next = 16;
                                                break;
                                            case 13:
                                                throw e.prev = 13,
                                                    e.t0 = e.catch(7),
                                                    new Error("Failed to access token from server response: " + e.t0.message);
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[7, 13]])
                        }
                    ))),
                        function() {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "startTokenExpireTimer",
                value: function() {
                    var e = this;
                    clearTimeout(this._tokenExpireTimer),
                        this._tokenExpireTimer = setTimeout((function() {
                                e._token = ""
                            }
                        ), h.a.TOKEN_LIFE_TIME)
                }
            }, {
                key: "resetState",
                value: function() {
                    this.resetVM()
                }
            }, {
                key: "loadImage",
                value: (n = a()(r.a.mark((function e() {
                            var t = this;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", new Promise(function() {
                                                    var e = a()(r.a.mark((function e(n, i) {
                                                            var o, a, s, c, u, l, d, M, p;
                                                            return r.a.wrap((function(e) {
                                                                    for (; ; )
                                                                        switch (e.prev = e.next) {
                                                                            case 0:
                                                                                if (o = t.vm,
                                                                                    a = o.isLoaded,
                                                                                    s = o.inLoading,
                                                                                !a && !s) {
                                                                                    e.next = 3;
                                                                                    break
                                                                                }
                                                                                return e.abrupt("return", n());
                                                                            case 3:
                                                                                if (t.vm.inLoading = !0,
                                                                                    t._token) {
                                                                                    e.next = 15;
                                                                                    break
                                                                                }
                                                                                return e.prev = 5,
                                                                                    e.next = 8,
                                                                                    t.loadToken();
                                                                            case 8:
                                                                                e.next = 15;
                                                                                break;
                                                                            case 10:
                                                                                return e.prev = 10,
                                                                                    e.t0 = e.catch(5),
                                                                                    t.vm.inLoading = !1,
                                                                                    t.vm.isLoadingFailed = !0,
                                                                                    e.abrupt("return", i(e.t0));
                                                                            case 15:
                                                                                return t.vm.progress = 0,
                                                                                    c = null,
                                                                                    u = D.a.CancelToken.source(),
                                                                                    t._cancelToken = u,
                                                                                    l = D.a.create(),
                                                                                    d = "".concat(t._url, "?token=").concat(t._token),
                                                                                    e.prev = 21,
                                                                                    e.next = 24,
                                                                                    l({
                                                                                        url: d,
                                                                                        responseType: "blob",
                                                                                        onDownloadProgress: function(e) {
                                                                                            t.vm.progress = Math.floor(e.loaded / e.total * 100)
                                                                                        },
                                                                                        timeout: h.a.IMAGE_REQUEST_TIME_OUT,
                                                                                        cancelToken: u.token
                                                                                    });
                                                                            case 24:
                                                                                M = e.sent,
                                                                                    c = M.data,
                                                                                    e.next = 35;
                                                                                break;
                                                                            case 28:
                                                                                if (e.prev = 28,
                                                                                    e.t1 = e.catch(21),
                                                                                    !D.a.isCancel(e.t1)) {
                                                                                    e.next = 33;
                                                                                    break
                                                                                }
                                                                                return t.vm.isAbortByUser = !0,
                                                                                    e.abrupt("return", n());
                                                                            case 33:
                                                                                return t.vm.isLoadingFailed = !0,
                                                                                    e.abrupt("return", i(e.t1));
                                                                            case 35:
                                                                                (p = new Image).onload = function() {
                                                                                    var e = p.width
                                                                                        , i = p.height;
                                                                                    t.element.width = e,
                                                                                        t.element.height = i,
                                                                                        t._width = e,
                                                                                        t._height = i,
                                                                                        t._context.drawImage(p, 0, 0),
                                                                                        t.vm.inLoading = !1,
                                                                                        t.vm.isLoaded = !0,
                                                                                        n()
                                                                                }
                                                                                    ,
                                                                                    p.onerror = function(e) {
                                                                                        t.vm.isLoadingFailed = !0,
                                                                                            i(e)
                                                                                    }
                                                                                    ,
                                                                                    p.src = URL.createObjectURL(c);
                                                                            case 39:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                }
                                                            ), e, null, [[5, 10], [21, 28]])
                                                        }
                                                    )));
                                                    return function(t, n) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function() {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "abort",
                value: function() {
                    this._cancelToken && this._cancelToken.cancel()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.abort(),
                        this.removeElement(),
                        this.resetState()
                }
            }, {
                key: "reload",
                value: (t = a()(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return this.resetState(),
                                                    e.next = 3,
                                                    this.loadImage();
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "appendTo",
                value: function(e) {
                    e.appendChild(this._element)
                }
            }, {
                key: "removeElement",
                value: function() {
                    var e = this._element
                        , t = e.parentElement;
                    t && t.removeChild(e);
                    var n = document.createElement("canvas");
                    n.width = this._width,
                        n.height = this._height,
                        this._element = n
                }
            }, {
                key: "isSizeInvalid",
                get: function() {
                    return this._isSizeInvalid
                }
            }, {
                key: "url",
                get: function() {
                    return this._url
                }
            }, {
                key: "width",
                get: function() {
                    return this._width
                }
            }, {
                key: "height",
                get: function() {
                    return this._height
                }
            }, {
                key: "heightWidthRatio",
                get: function() {
                    return this._width && this._height ? this._height / this._width : 1
                }
            }, {
                key: "_context",
                get: function() {
                    var e = this.element.getContext("2d");
                    try {
                        e.__proto__.getImageData = function() {
                            return console.log("有 ♂ 点 ♂ 骚"),
                                new ImageData(1,1)
                        }
                    } catch (e) {}
                    return e
                }
            }]),
                s
        }(I.a)
    },
    "+r91": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return l
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("cDf5")
            , a = n.n(o)
            , s = n("1aRO")
            , c = function(e, t, n, i) {
            var r, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : a()(Reflect)) && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
            return o > 3 && s && Object.defineProperty(t, n, s),
                s
        }
            , u = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : a()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , l = function e() {
            r()(this, e),
                this.gold = 0,
                this.coupon = 0,
                this.limitedFreeCoupon = 0,
                this.hasFirstReward = !1,
                this.unuseableGold = 0,
                this.discountCard = 0
        };
        c([Object(s.a)("remain_gold"), u("design:type", Number)], l.prototype, "gold", void 0),
            c([Object(s.a)("remain_coupon"), u("design:type", Number)], l.prototype, "coupon", void 0),
            c([Object(s.a)("remain_item"), u("design:type", Number)], l.prototype, "limitedFreeCoupon", void 0),
            c([Object(s.a)("first_reward"), u("design:type", Boolean)], l.prototype, "hasFirstReward", void 0),
            c([Object(s.a)("unusable_gold"), u("design:type", Number)], l.prototype, "unuseableGold", void 0),
            c([Object(s.a)("remain_discount"), u("design:type", Number)], l.prototype, "discountCard", void 0),
            l = c([Object(s.b)()], l)
    },
    0: function(e, t) {},
    "1iKj": function(e, t, n) {
        "use strict";
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("7W2i")
            , c = n.n(s)
            , u = n("a1gu")
            , l = n.n(u)
            , d = n("Nsbk")
            , M = n.n(d)
            , p = n("cDf5")
            , f = n.n(p)
            , y = n("+B0l")
            , g = n("XrP9");
        function A(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var D = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , h = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , N = function(e) {
            c()(n, e);
            var t = A(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).countdown = null,
                    e.countdownStr = "",
                    e.remainMs = 0,
                    e
            }
            return a()(n, [{
                key: "updateCountdown",
                value: function() {
                    var e = new Date;
                    this.remainMs = this.endDate.getTime() - e.getTime(),
                        this.remainMs > 0 ? this.countdownStr = g.a.formatTimeLength(this.remainMs, this.format) : (this.countdownStr = g.a.formatTimeLength(0, this.format),
                            this.remainMs = 0,
                        this.countdown && clearInterval(this.countdown))
                }
            }, {
                key: "mounted",
                value: function() {
                    var e = this;
                    this.updateCountdown(),
                    this.remainMs > 0 && (this.countdown = setInterval((function() {
                            return e.updateCountdown()
                        }
                    ), this.interval))
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.countdown && clearInterval(this.countdown)
                }
            }]),
                n
        }(n("oCYn").default);
        D([Object(y.d)({
            type: Date,
            default: function() {
                return new Date
            }
        }), h("design:type", Date)], N.prototype, "endDate", void 0),
            D([Object(y.d)({
                type: Number,
                default: 1e3
            }), h("design:type", Number)], N.prototype, "interval", void 0),
            D([Object(y.d)({
                type: String,
                default: "HH:MM:SS"
            }), h("design:type", String)], N.prototype, "format", void 0);
        var j = N = D([y.b], N)
            , v = n("KHd+")
            , w = Object(v.a)(j, (function() {
                var e = this
                    , t = e.$createElement;
                return (e._self._c || t)("div", [e._t("default", null, {
                    countdownStr: e.countdownStr,
                    remainMs: e.remainMs
                })], 2)
            }
        ), [], !1, null, null, null);
        t.a = w.exports
    },
    "20sy": function(e, t, n) {
        e.exports = n.p + "static/img/c5d1be7a55989.png"
    },
    "2wKr": function(e, t, n) {
        "use strict";
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("7W2i")
            , a = n.n(o)
            , s = n("a1gu")
            , c = n.n(s)
            , u = n("Nsbk")
            , l = n.n(u)
            , d = n("cDf5")
            , M = n.n(d)
            , p = n("+B0l");
        function f(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = l()(e);
                if (t) {
                    var r = l()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return c()(this, n)
            }
        }
        var y = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , g = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , A = function(e) {
            a()(n, e);
            var t = f(n);
            function n() {
                return r()(this, n),
                    t.apply(this, arguments)
            }
            return n
        }(n("oCYn").default);
        y([Object(p.d)({
            type: [Number, String],
            default: 30
        }), g("design:type", Number)], A.prototype, "size", void 0),
            y([Object(p.d)({
                type: String,
                default: "#32aaff"
            }), g("design:type", String)], A.prototype, "color", void 0);
        var D = A = y([p.b], A)
            , h = n("KHd+")
            , N = Object(h.a)(D, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "dp-i-block v-middle"
                }, [n("svg", {
                    staticClass: "progress-svg v-middle",
                    style: {
                        width: e.size + "px"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "22.8 22.8 45.7 45.7"
                    }
                }, [n("circle", {
                    staticClass: "circular-overlay",
                    style: {
                        stroke: e.color
                    },
                    attrs: {
                        fill: "transparent",
                        cx: "45.7",
                        cy: "45.7",
                        r: "20",
                        "stroke-width": "5.7",
                        "stroke-dasharray": "125.6",
                        "stroke-dashoffset": "125.6"
                    }
                })])])
            }
        ), [], !1, null, "69a010ff", null);
        t.a = N.exports
    },
    "3RDl": function(e, t, n) {
        "use strict";
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("lwsE")
            , a = n.n(o)
            , s = n("W8MJ")
            , c = n.n(s)
            , u = n("7W2i")
            , l = n.n(u)
            , d = n("a1gu")
            , M = n.n(d)
            , p = n("Nsbk")
            , f = n.n(p)
            , y = n("cDf5")
            , g = n.n(y)
            , A = n("+B0l");
        function D(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function N(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = f()(e);
                if (t) {
                    var r = f()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return M()(this, n)
            }
        }
        var j = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , v = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , w = function(e) {
            l()(n, e);
            var t = N(n);
            function n() {
                return a()(this, n),
                    t.apply(this, arguments)
            }
            return c()(n, [{
                key: "onWatchValue",
                value: function(e) {
                    e && this.$sendStatisticsEvent({
                        reportConfig: {
                            spmId: "777.73.collection_popup.show"
                        },
                        msg: h({}, this.reportInfo)
                    })
                }
            }, {
                key: "handleConfirm",
                value: function() {
                    this.$emit("input", !1),
                        this.$emit("unfavorite")
                }
            }]),
                n
        }(n("oCYn").default);
        j([Object(A.d)({
            type: Boolean,
            default: !1
        }), v("design:type", Boolean)], w.prototype, "value", void 0),
            j([Object(A.d)({
                type: Object,
                default: function() {
                    return {
                        location: I.Detail,
                        manga_id: 0
                    }
                }
            }), v("design:type", Object)], w.prototype, "reportInfo", void 0),
            j([Object(A.g)("value"), v("design:type", Function), v("design:paramtypes", [Boolean]), v("design:returntype", void 0)], w.prototype, "onWatchValue", null);
        var I, T = w = j([Object(A.b)({})], w);
        !function(e) {
            e[e.Detail = 1] = "Detail",
                e[e.Reader = 2] = "Reader"
        }(I || (I = {}));
        var m = T
            , E = n("KHd+")
            , O = Object(E.a)(m, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("jk-dialog-layout", {
                    staticClass: "overlay",
                    attrs: {
                        value: e.value,
                        "click-to-close": !0,
                        "background-color": "rgba(0, 0, 0, .8)"
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, [n("div", {
                    staticClass: "content"
                }, [n("button", {
                    staticClass: "app-button close-button",
                    on: {
                        click: function(t) {
                            return e.$emit("input", !1)
                        }
                    }
                }), n("div", {
                    staticClass: "first-line"
                }, [e._v("是否取消追漫？")]), n("div", {
                    staticClass: "second-line"
                }, [e._v("人家这么好看，给个机会吧！")]), n("div", {
                    staticClass: "buttons"
                }, [n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.73.collection_popup.click",
                        expression: "'777.73.collection_popup.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: Object.assign({}, e.reportInfo, {
                            type: 2
                        }),
                        expression: "{...reportInfo, type: 2}"
                    }],
                    staticClass: "app-button confirm",
                    on: {
                        click: e.handleConfirm
                    }
                }, [e._v("取消追漫")]), n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.73.collection_popup.click",
                        expression: "'777.73.collection_popup.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: Object.assign({}, e.reportInfo, {
                            type: 1
                        }),
                        expression: "{...reportInfo, type: 1}"
                    }],
                    staticClass: "app-button cancel",
                    on: {
                        click: function(t) {
                            return e.$emit("input", !1)
                        }
                    }
                }, [e._v("再想想")])])])])
            }
        ), [], !1, null, "35d52abe", null);
        t.a = O.exports
    },
    "4ps3": function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii43IiBkPSJNNCw4LjYgQzMuNjY4NjI5MTUsOC42IDMuNCw4LjMzMTM3MDg1IDMuNCw4IEMzLjQsNy42Njg2MjkxNSAzLjY2ODYyOTE1LDcuNCA0LDcuNCBMMTIsNy40IEMxMi4zMzEzNzA4LDcuNCAxMi42LDcuNjY4NjI5MTUgMTIuNiw4IEMxMi42LDguMzMxMzcwODUgMTIuMzMxMzcwOCw4LjYgMTIsOC42IEw0LDguNiBaIE00LDQuNiBDMy42Njg2MjkxNSw0LjYgMy40LDQuMzMxMzcwODUgMy40LDQgQzMuNCwzLjY2ODYyOTE1IDMuNjY4NjI5MTUsMy40IDQsMy40IEwxMiwzLjQgQzEyLjMzMTM3MDgsMy40IDEyLjYsMy42Njg2MjkxNSAxMi42LDQgQzEyLjYsNC4zMzEzNzA4NSAxMi4zMzEzNzA4LDQuNiAxMiw0LjYgTDQsNC42IFogTTQsMTIuNiBDMy42Njg2MjkxNSwxMi42IDMuNCwxMi4zMzEzNzA4IDMuNCwxMiBDMy40LDExLjY2ODYyOTIgMy42Njg2MjkxNSwxMS40IDQsMTEuNCBMMTIsMTEuNCBDMTIuMzMxMzcwOCwxMS40IDEyLjYsMTEuNjY4NjI5MiAxMi42LDEyIEMxMi42LDEyLjMzMTM3MDggMTIuMzMxMzcwOCwxMi42IDEyLDEyLjYgTDQsMTIuNiBaIi8+Cjwvc3ZnPgo="
    },
    "6MYt": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return M
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("1aRO");
        function M(e) {
            return function() {
                function t() {
                    c()(this, t)
                }
                var n, i;
                return l()(t, null, [{
                    key: "get",
                    value: (i = a()(r.a.mark((function t(n) {
                                var i, o, a, s, c, u, l, M;
                                return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return i = {
                                                        data: null,
                                                        error: null,
                                                        code: null,
                                                        message: null,
                                                        status: null
                                                    },
                                                        o = Object.assign({
                                                            params: n.data
                                                        }, n.config),
                                                        t.next = 4,
                                                        e.get(n.url, o);
                                                case 4:
                                                    if (a = t.sent,
                                                        s = a.data,
                                                        c = a.error,
                                                        u = a.code,
                                                        l = a.message,
                                                        M = a.status,
                                                        c)
                                                        i.error = c;
                                                    else if (i.code = u,
                                                        i.message = l,
                                                        i.status = M,
                                                    void 0 !== n.type)
                                                        try {
                                                            i.data = Array.isArray(s) ? s.map((function(e) {
                                                                    return Object(d.c)(e, n.type)
                                                                }
                                                            )) : Object(d.c)(s || Object.create({}), n.type)
                                                        } catch (e) {
                                                            i.error = e
                                                        }
                                                    else
                                                        i.data = s;
                                                    return t.abrupt("return", i);
                                                case 12:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t)
                            }
                        ))),
                            function(e) {
                                return i.apply(this, arguments)
                            }
                    )
                }, {
                    key: "post",
                    value: (n = a()(r.a.mark((function t(n) {
                                var i, o, a, s, c, u, l;
                                return r.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return i = {
                                                        data: null,
                                                        error: null,
                                                        code: null,
                                                        message: null,
                                                        status: null
                                                    },
                                                        t.next = 3,
                                                        e.post(n.url, n.data, n.config);
                                                case 3:
                                                    if (o = t.sent,
                                                        a = o.data,
                                                        s = o.error,
                                                        c = o.code,
                                                        u = o.message,
                                                        l = o.status,
                                                        i.status = l,
                                                        s)
                                                        i.error = s;
                                                    else if (i.code = c,
                                                        i.message = u,
                                                    void 0 !== n.type)
                                                        try {
                                                            i.data = Array.isArray(a) ? a.map((function(e) {
                                                                    return Object(d.c)(e, n.type)
                                                                }
                                                            )) : Object(d.c)(a || Object.create({}), n.type)
                                                        } catch (e) {
                                                            i.error = e
                                                        }
                                                    else
                                                        i.data = a;
                                                    return t.abrupt("return", i);
                                                case 12:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t)
                            }
                        ))),
                            function(e) {
                                return n.apply(this, arguments)
                            }
                    )
                }]),
                    t
            }()
        }
    },
    "8HwU": function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjUuMzI4MTI1LDUuNTYyNTAwMDIgQzIzLjYwOTM3NSw0LjQxNjY2NjY4IDIxLjczOTU4MzMsMy44NDM3NTAwMiAxOS43MTg3NSwzLjg0Mzc1MDAyIEMxOC4xMDQxNjY2LDMuODQzNzUwMDIgMTYuNTc4MTI1LDQuMjIzOTU4MzUgMTUuMTQwNjI1LDQuOTg0Mzc1MDIgQzEzLjcwMzEyNSw1Ljc0NDc5MTcgMTIuNDUzMTI1LDYuNzg2NDU4MzYgMTEuMzkwNjI1LDguMTA5Mzc1MDIgQzEwLjYwOTM3NSw5LjA3ODEyNTAxIDkuOTg2OTc5MTYsMTAuMjEzNTQxNyA5LjUyMzQzNzUsMTEuNTE1NjI1IEM5LjA1OTg5NTg0LDEyLjgxNzcwODQgOC44MDcyOTE2NywxNC4yMDMxMjUgOC43NjU2MjQ5OSwxNS42NzE4NzUgTDguNzY1NjI0OTksMTYuMzI4MTI1IEM4LjgwNzI5MTY2LDE3Ljc5Njg3NSA5LjA1OTg5NTgzLDE5LjE4MjI5MTcgOS41MjM0Mzc1LDIwLjQ4NDM3NSBDOS45ODY5NzkxOCwyMS43ODY0NTg0IDEwLjYwOTM3NSwyMi45MjE4NzUgMTEuMzkwNjI1LDIzLjg5MDYyNSBDMTIuNDUzMTI1LDI1LjIxMzU0MTcgMTMuNzAzMTI1LDI2LjI1NTIwODQgMTUuMTQwNjI1LDI3LjAxNTYyNSBDMTYuNTc4MTI1LDI3Ljc3NjA0MTcgMTguMTA0MTY2NywyOC4xNTYyNSAxOS43MTg3NSwyOC4xNTYyNSBDMjEuNzM5NTgzMywyOC4xNTYyNSAyMy42MDkzNzUsMjcuNTgzMzMzNCAyNS4zMjgxMjUsMjYuNDM3NSBDMjQuMDY3NzA4MywyNy41NjI1IDIyLjYzODAyMDgsMjguNDM3NSAyMS4wMzkwNjI1LDI5LjA2MjUgQzE5LjQ0MDEwNDEsMjkuNjg3NSAxNy43NjA0MTY2LDMwIDE2LDMwIEMxNS42OTc5MTY2LDMwIDE1LjQ3Mzk1ODMsMjkuOTk0NzkxNyAxNS4zMjgxMjUsMjkuOTg0Mzc1IEMxMy41MDUyMDgzLDI5LjkwMTA0MTcgMTEuNzcwODMzMywyOS40NzM5NTgzIDEwLjEyNSwyOC43MDMxMjUgQzguNDc5MTY2NjUsMjcuOTMyMjkxNyA3LjA2MjQ5OTk4LDI2LjkyNzA4MzQgNS44NzQ5OTk5OCwyNS42ODc1IEM0LjY4NzQ5OTk5LDI0LjQ0NzkxNjcgMy43NDQ3OTE2NiwyMi45ODQzNzUgMy4wNDY4NzQ5OSwyMS4yOTY4NzUgQzIuMzQ4OTU4MzMsMTkuNjA5Mzc1IDIsMTcuODQzNzUgMiwxNiBDMiwxNC4xMDQxNjY3IDIuMzY5NzkxNjcsMTIuMjkxNjY2NyAzLjEwOTM3NTAxLDEwLjU2MjUgQzMuODQ4OTU4MzUsOC44MzMzMzMzMyA0Ljg0Mzc1MDAyLDcuMzQzNzUgNi4wOTM3NTAwMSw2LjA5Mzc1MDAxIEM3LjM0Mzc1LDQuODQzNzUwMDIgOC44MzMzMzMzMywzLjg0ODk1ODM1IDEwLjU2MjUsMy4xMDkzNzUwMSBDMTIuMjkxNjY2NywyLjM2OTc5MTY3IDE0LjEwNDE2NjcsMiAxNiwyIEwxNi4wNDY4NzUsMiBDMTcuNzk2ODc1LDIuMDEwNDE2NjcgMTkuNDY2MTQ1OSwyLjMyNTUyMDg1IDIxLjA1NDY4NzUsMi45NDUzMTI1MSBDMjIuNjQzMjI5MiwzLjU2NTEwNDE4IDI0LjA2NzcwODQsNC40Mzc1MDAwMSAyNS4zMjgxMjUsNS41NjI1MDAwMiBMMjUuMzI4MTI1LDUuNTYyNTAwMDIgWiBNMzAsMTYgQzMwLDE4IDI5LjU5ODk1ODMsMTkuODg4MDIwOSAyOC43OTY4NzUsMjEuNjY0MDYyNSBDMjcuOTk0NzkxNywyMy40NDAxMDQyIDI2Ljg4NTQxNjcsMjQuOTg0Mzc1IDI1LjQ2ODc1LDI2LjI5Njg3NSBDMjQuMzg1NDE2NywyNi45NTMxMjUgMjMuMjI5MTY2NywyNy4yODEyNSAyMiwyNy4yODEyNSBDMjAuNTcyOTE2NywyNy4yODEyNSAxOS4yNDQ3OTE2LDI2Ljg0Mzc1IDE4LjAxNTYyNSwyNS45Njg3NSBDMTkuNjE5NzkxNiwyNS4zODU0MTY3IDIwLjk0MDEwNDEsMjQuMTcxODc1IDIxLjk3NjU2MjUsMjIuMzI4MTI1IEMyMy4wMTMwMjA4LDIwLjQ4NDM3NSAyMy41MzEyNSwxOC4zNzUgMjMuNTMxMjUsMTYgQzIzLjUzMTI1LDEzLjYzNTQxNjcgMjMuMDE1NjI1LDExLjUzMTI1IDIxLjk4NDM3NSw5LjY4NzUwMDAyIEMyMC45NTMxMjUsNy44NDM3NTAwMyAxOS42MzU0MTY2LDYuNjI1MDAwMDIgMTguMDMxMjUsNi4wMzEyNTAwMiBDMTkuMjcwODMzMyw1LjE2NjY2NjY5IDIwLjU5Mzc1LDQuNzM0Mzc1MDMgMjIsNC43MzQzNzUwMyBDMjMuMjM5NTgzMyw0LjczNDM3NTAzIDI0LjQxNjY2NjYsNS4wNzI5MTY2OSAyNS41MzEyNSw1Ljc1MDAwMDAyIEMyNi45Mzc1LDcuMDUyMDgzMzUgMjguMDMzODU0MSw4LjU4ODU0MTY5IDI4LjgyMDMxMjQsMTAuMzU5Mzc1IEMyOS42MDY3NzA4LDEyLjEzMDIwODQgMzAsMTQuMDEwNDE2NyAzMCwxNiBMMzAsMTYgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
    },
    "8XqL": function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNCwxNC41NDY4NTExIEw0LjAxNDYyNTcyLDE0LjU0Njg1MTEgQzQuMTY5NTUwMDYsMTMuMzI2ODU1NiA0LjQ1MjU4NDg5LDEyLjE1NzU1NzYgNC44NjM3MzAyNCwxMS4wMzg5NTczIEM1LjI3NDg3NTU4LDkuOTIwMzU2OTMgNS44MzExOTQ3Nyw4Ljg2OTgwNTIyIDYuNTMyNjg3ODIsNy44ODczMDIxNCBDNy4yMzQxODA4Niw2LjkwNDc5OTA2IDguMDQ0MjgzNDQsNi4wNTI2OTk5NiA4Ljk2Mjk5NTU2LDUuMzMxMDA0ODEgQzkuODgxNzA3NjksNC42MDkzMDk2NyAxMC45NjI2NTcsNC4wNDA1MjA2NCAxMi4yMDU4NDM1LDMuNjI0NjM3NzIgQzEzLjQ0OTAzLDMuMjA4NzU0NzkgMTQuNzg2NDcxMiwzLjAwMDU0MjIyIDE2LjIxODE2NywzIEMxOC40NTI2NTI2LDMgMjAuNDU1MDIyNSwzLjUxMDc3MTQ3IDIyLjIyNTI3NjgsNC41MzIzMTQ0IEMyMy45OTU1MzEsNS41NTM4NTczMyAyNS40MTc0NzY0LDcuMDIzMjc0MTkgMjYuNDkxMTEyOCw4Ljk0MDU2NDk2IEMyNy40OTcwMzc2LDEwLjc1MTAzODMgMjgsMTIuODkwOTEwNSAyOCwxNS4zNjAxODE1IEwyOCwxOC4wOTA1MzE1IEwxMS42NzY4Nzk4LDE4LjA5MDUzMTUgQzExLjY4NjYzMDMsMTkuMTY1MjEyIDExLjk0NTI4OSwyMC4wOTcyODg2IDEyLjQ1Mjg1NTcsMjAuODg2NzYxMyBDMTIuOTYwNDIyNSwyMS42NzYyMzQgMTMuNjIwNzQ2OSwyMi4yNjk0MjI5IDE0LjQzMzgyODgsMjIuNjY2MzI4MSBDMTUuMjQ2OTEwNywyMy4wNjMyMzMzIDE2LjE2MzQ1NiwyMy4zMzkyMjM0IDE3LjE4MzQ2NDgsMjMuNDk0Mjk4NCBDMTguMjAzNDczNiwyMy42NDkzNzM0IDE5LjIzMzc3NDYsMjMuNjY0MDEzNCAyMC4yNzQzNjc3LDIzLjUzODIxODMgQzIxLjMxNDk2MDksMjMuNDEyNDIzMiAyMi4zMjA4ODU3LDIzLjE4NzQwMTggMjMuMjkyMTQyMSwyMi44NjMxNTQxIEMyNC4yNjMzOTg0LDIyLjUzODkwNjQgMjUuMTAyNDgxNiwyMi4xMjk4MDEyIDI1LjgwOTM5MTYsMjEuNjM1ODM4NiBMMjUuODA5MzkxNiwyNy4xMTExNzg2IEMyNC45MTkzODkyLDI3LjY0MzYzODggMjMuODA5NDU5MywyOC4wODkwNzI4IDIyLjQ3OTYwMTksMjguNDQ3NDgwMyBDMjEuMTQ5NzQ0NCwyOC44MDU4ODc5IDE5LjYzODQxOTYsMjguOTg5OTcxNyAxNy45NDU2Mjc1LDI4Ljk5OTczMTcgQzE2LjI1MjgzNTQsMjkuMDA5NDkxNiAxNC43MjQ0NDczLDI4Ljc1MzAyMTQgMTMuMzYwNDYzMSwyOC4yMzAzMjExIEMxMS41MzIyNDc3LDI3LjUyMzI2NTkgMTAuMDI1NTI3MywyNi4zMTc5MTAzIDguODQwMzAxOTksMjQuNjE0MjU0MyBDNy42NTUwNzY2OCwyMi45MTA1OTgzIDcuMDUyOTg0MzksMjEuMTA5NjEzOCA3LjAzNDAyNTEyLDE5LjIxMTMwMDggQzcuMDA0NzczNjcsMTYuODY4MzY3MSA3LjU0MTU5MTksMTQuODczODA5OSA4LjY0NDQ3OTgsMTMuMjI3NjI5MyBDOS43NDczNjc3MSwxMS41ODE0NDg2IDExLjMxOTM2MjIsMTAuMjgzOTE1NiAxMy4zNjA0NjMxLDkuMzM1MDMwMTggQzEyLjg5NjIzMTgsOS45MTU3NDgwNiAxMi41MTg5NDIzLDEwLjUyMzMwNTggMTIuMjI4NTk0NiwxMS4xNTc3MDM1IEMxMS45MzgyNDY5LDExLjc5MjEwMTIgMTEuNzE1ODgxOCwxMi41NjQyMjI4IDExLjU2MTQ5OTEsMTMuNDc0MDY4NCBMMjAuNzc0ODkyNSwxMy40NzQwNjg0IEMyMC44NTIzNTQ3LDEyLjcyODUxNTYgMjAuODEzNjIzNiwxMi4wNTA3NDAzIDIwLjY1ODY5OTMsMTEuNDQwNzQyNSBDMjAuNTAzNzc0OSwxMC44MzA3NDQ3IDIwLjI3NjUzNDUsMTAuMzM5MjIyMSAxOS45NzY5NzgsOS45NjYxNzQ1NCBDMTkuNjc3NDIxNSw5LjU5MzEyNzAyIDE5LjMzNjQyNTUsOS4yNzEwNDgxOSAxOC45NTM5ODk5LDguOTk5OTM4MDcgQzE4LjU3MTU1NDMsOC43Mjg4Mjc5NSAxOC4xODIwNzY3LDguNTMwMzc1MzQgMTcuNzg1NTU3MSw4LjQwNDU4MDI1IEMxNy4zODkwMzc1LDguMjc4Nzg1MTUgMTcuMDI2MzczNyw4LjE3OTU1ODg1IDE2LjY5NzU2NTgsOC4xMDY5MDEzNCBDMTYuMzY4NzU3OCw4LjAzNDI0MzgyIDE2LjA5NzkxMTEsNy45OTMwMzUwOSAxNS44ODUwMjU2LDcuOTgzMjc1MTIgTDE1LjU2NTY5NzMsNy45Njg2MzUxOCBDMTQuMjU5Njc0Myw4LjAxNjg5Mjc4IDEzLjAwNDU3MDUsOC4yMzI0MjUzMiAxMS44MDAzODYsOC42MTUyMzI4MSBDMTAuNTk2MjAxNCw4Ljk5ODA0MDMgOS41MTUyNTIwNiw5LjUwMzkzMTc5IDguNTU3NTM4LDEwLjEzMjkwNzMgQzcuNTk5ODIzOTUsMTAuNzYxODgyNyA2Ljc0ODU1MjY2LDExLjQ0MjA5OCA2LjAwMzcyNDE0LDEyLjE3MzU1MzEgQzUuMjU4ODk1NjIsMTIuOTA1MDA4MiA0LjU5MTUyOTI3LDEzLjY5NjY0OTggNC4wMDE2MjUwOCwxNC41NDg0Nzc4IEw0LDE0LjU0Njg1MTEgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
    },
    "91CG": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return s
            }
        ));
        var i = n("otMs")
            , r = n("stNh")
            , o = n("6MYt")
            , a = new i.b;
        a.axios.interceptors.request.use((function(e) {
                return r.a.isDev && /manga.bilibili.com/.test(e.url) && (e.url = e.url.replace(/(\/\/)?manga.bilibili.com/, "")),
                r.a.isProduction && !/(https?:)?\/\/manga.bilibili.com/.test(e.url) && (e.url = "//".concat(r.a.isUatBuild ? "uat-" : "", "manga.bilibili.com") + e.url),
                    e
            }
        ));
        var s = Object(o.a)(a)
    },
    "96Y2": function(e, t, n) {
        "use strict";
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("7W2i")
            , c = n.n(s)
            , u = n("a1gu")
            , l = n.n(u)
            , d = n("Nsbk")
            , M = n.n(d)
            , p = n("cDf5")
            , f = n.n(p)
            , y = n("+B0l")
            , g = n("ewXD")
            , A = n("oCYn")
            , D = n("IdHk")
            , h = n("9ljz")
            , N = n("wahp");
        function j(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var v = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , w = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , I = function(e) {
            c()(n, e);
            var t = j(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).clickShowTooltip = !0,
                    e
            }
            return a()(n, [{
                key: "handleClick",
                value: function() {
                    this.reportClickEvent(),
                        window.open(this.createJumpUrl("/app-download"), "_blank"),
                        this.clickShowTooltip = !1,
                        h.a.setItem("BilibiliManga:AppReminderNavClicked", "1")
                }
            }, {
                key: "showTooltipReport",
                value: function() {
                    this.showTooltip && this.$sendStatisticsEvent({
                        reportConfig: {
                            spmId: "777.14.selfdown_remind.show"
                        }
                    })
                }
            }, {
                key: "reportClickEvent",
                value: function() {
                    this.$sendStatisticsEvent({
                        reportConfig: {
                            spmId: "777.14.selfdown.click"
                        },
                        msg: {
                            type: this.showTooltip ? 1 : 2
                        }
                    })
                }
            }, {
                key: "createJumpUrl",
                value: function(e) {
                    return this.urlQueryString ? e + "?" + this.urlQueryString : e
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$watch("showToolTip", this.showTooltipReport),
                        this.clickShowTooltip = !("1" === h.a.getItem("BilibiliManga:AppReminderNavClicked"))
                }
            }, {
                key: "showTooltip",
                get: function() {
                    var e, t, n, i = this.clickShowTooltip, r = this.newbieInfoState.isFirstLoadFinished && this.newbieInfoState.hasMobileNewbieGift, o = !0 === (null === (e = this.userState) || void 0 === e ? void 0 : e.isFirstLoadFinished) && !0 !== (null === (t = this.userState) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.isLogin);
                    return i && (r || o)
                }
            }]),
                n
        }(A.default);
        v([Object(y.d)({
            type: String,
            default: ""
        }), w("design:type", String)], I.prototype, "urlQueryString", void 0);
        var T = I = v([Object(y.b)({
            subscriptions: function() {
                return {
                    userState: D.b,
                    newbieInfoState: N.b
                }
            }
        })], I)
            , m = n("KHd+")
            , E = Object(m.a)(T, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("button", {
                    staticClass: "download-app app-button",
                    on: {
                        click: function(t) {
                            return e.handleClick()
                        }
                    }
                }, [n("span", {
                    staticClass: "item-label v-middle"
                }, [e._v("下载 APP")]), e.showTooltip ? n("div", {
                    staticClass: "tooltip"
                }) : e._e(), e._m(0)])
            }
        ), [function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "hovercard"
            }, [n("div", {
                staticClass: "tip"
            }), n("div", {
                staticClass: "qrcode"
            }), n("div", {
                staticClass: "line first"
            }, [n("div", {
                staticClass: "icon"
            }), n("span", [e._v("下载APP")])]), n("div", {
                staticClass: "line second"
            }, [n("span", {
                staticClass: "hl"
            }, [e._v("免费解锁")]), n("span", [e._v("更多章节")])])])
        }
        ], !1, null, "0aad3594", null).exports
            , O = n("o0o1")
            , z = n.n(O)
            , b = n("yXPU")
            , L = n.n(b)
            , x = n("xvbi")
            , k = n.n(x)
            , S = n("t/UT")
            , C = n("Qyje")
            , Q = n.n(C)
            , P = n("qQS4")
            , U = n("h3Yl")
            , R = n("COaM")
            , Y = n("AMMt")
            , B = n("nVpw")
            , W = n("TRC1")
            , F = n("ZojZ")
            , _ = n("sp85");
        function Z(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var G = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , q = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , H = function(e) {
            c()(o, e);
            var t, i = Z(o);
            function o() {
                var e;
                return r()(this, o),
                    (e = i.apply(this, arguments)).ps = null,
                    e.inLoading = !1,
                    e.isLoadingFailed = !1,
                    e.defaultCover = n("oD+a"),
                    e.dataList = [],
                    e
            }
            return a()(o, [{
                key: "createDetailPageUrl",
                value: function(e) {
                    return _.a.detailPage(e, Q.a.parse(this.urlQueryString))
                }
            }, {
                key: "createReaderPageUrl",
                value: function(e, t) {
                    return _.a.readerPage(e, t, Q.a.parse(this.urlQueryString))
                }
            }, {
                key: "isVomic",
                value: function(e) {
                    return e.type === R.i.video
                }
            }, {
                key: "hinterToast",
                value: function() {
                    Y.a.hint("Vomic仅支持在手机端观看~ " + P.happy())
                }
            }, {
                key: "routerToDetail",
                value: function(e) {
                    this.isVomic(e) ? this.hinterToast() : window.open(this.createDetailPageUrl(e.seasonId), "_blank")
                }
            }, {
                key: "initPs",
                value: function() {
                    this.ps = new S.default(this.listContainer,{
                        wheelPropagation: !1
                    })
                }
            }, {
                key: "createText",
                value: function(e) {
                    var t = e.lastReadEpisodeShortTitle
                        , n = "";
                    return n += t ? "看到 ".concat(t) : "未看"
                }
            }, {
                key: "createText1",
                value: function(e) {
                    switch (e.status) {
                        case U.b.Incoming:
                            return "未开刊";
                        case U.b.OnShow:
                            return "更新至 ".concat(e.latestEpisodeShortTitle);
                        case U.b.Finished:
                            return "共 ".concat(e.episodeCount, " 话")
                    }
                }
            }, {
                key: "getHistoryList",
                value: (t = L()(z.a.mark((function e() {
                            var t, n, i, r;
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.inLoading) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return this.inLoading = !0,
                                                    t = B.a.getFavListOrder() || W.a.FavouriteDesc,
                                                    e.next = 6,
                                                    B.a.getFavouriteManga(1, 3, t);
                                            case 6:
                                                if (n = e.sent,
                                                    i = n.data,
                                                    r = n.error,
                                                    this.inLoading = !1,
                                                    !r) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return this.isLoadingFailed = !0,
                                                    F.a.error("追漫列表获取失败:", r),
                                                    e.abrupt("return");
                                            case 14:
                                                this.dataList = i.filter((function(e) {
                                                        return e.status !== U.b.Offline
                                                    }
                                                )),
                                                    this.updatePs();
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "updatePs",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                            e.ps && e.ps.update()
                        }
                    ), 1)
                }
            }, {
                key: "retry",
                value: function() {
                    this.isLoadingFailed = !1,
                        this.getHistoryList()
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initPs(),
                        this.getHistoryList()
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.ps.destroy(),
                        this.ps = null
                }
            }, {
                key: "listContainer",
                get: function() {
                    return this.$refs.listContainer
                }
            }]),
                o
        }(A.default);
        G([Object(y.d)({
            type: String,
            default: ""
        }), q("design:type", String)], H.prototype, "urlQueryString", void 0);
        var V = H = G([y.b], H)
            , J = Object(m.a)(V, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "data-list border-box a-move-in-left"
                }, [n("div", {
                    ref: "listContainer",
                    staticClass: "list-container p-relative border-box over-hidden"
                }, [e._l(e.dataList, (function(t, i) {
                        return n("div", {
                            staticClass: "data-item p-relative",
                            class: {
                                "is-last": i === e.dataList.length - 1
                            }
                        }, [n("a", {
                            attrs: {
                                target: "_blank"
                            },
                            on: {
                                click: function(n) {
                                    return e.routerToDetail(t)
                                }
                            }
                        }, [n("div", {
                            staticClass: "manga-cover p-relative bg-cover bg-center bg-no-repeat",
                            style: {
                                "background-image": "url(" + e.defaultCover + ")"
                            },
                            attrs: {
                                role: "img",
                                title: t.title
                            }
                        }, [n("img", {
                            staticClass: "w-100 p-absolute p-zero",
                            attrs: {
                                src: e.$bfs.bfsLink(t.verticalCover, 200)
                            }
                        })])]), n("div", {
                            staticClass: "text-section h-100 p-absolute border-box"
                        }, [n("a", {
                            attrs: {
                                target: "_blank"
                            },
                            on: {
                                click: function(n) {
                                    return e.routerToDetail(t)
                                }
                            }
                        }, [n("jk-multi-line-text", {
                            staticClass: "manga-title",
                            attrs: {
                                title: t.title
                            }
                        }, [e._v(e._s(t.title))])], 1), n("div", {
                            staticClass: "footer-text w-100 p-absolute border-box"
                        }, [n("div", {
                            staticClass: "text",
                            attrs: {
                                title: e.createText1(t)
                            },
                            domProps: {
                                textContent: e._s(e.createText1(t))
                            }
                        }), e.isVomic(t) ? n("a", {
                            staticClass: "read-progress",
                            on: {
                                click: e.hinterToast
                            }
                        }, [n("div", {
                            staticClass: "text",
                            attrs: {
                                title: e.createText(t)
                            },
                            domProps: {
                                textContent: e._s(e.createText(t))
                            }
                        })]) : n("a", {
                            staticClass: "read-progress",
                            attrs: {
                                href: t.lastReadEpisodeId ? e.createReaderPageUrl(t.seasonId, t.lastReadEpisodeId) : e.createDetailPageUrl(t.seasonId),
                                target: "_blank"
                            }
                        }, [n("div", {
                            staticClass: "text",
                            attrs: {
                                title: e.createText(t)
                            },
                            domProps: {
                                textContent: e._s(e.createText(t))
                            }
                        })])])])])
                    }
                )), e.inLoading ? [n("div", {
                    staticClass: "loading-hinter t-center"
                }, [e._v("载入中... " + e._s(e.$emoji.happy()))])] : e.isLoadingFailed ? [n("div", {
                    staticClass: "failure-hinter t-center"
                }, [n("span", [e._v("载入失败，要不")]), n("a", {
                    staticClass: "pointer",
                    on: {
                        click: e.retry
                    }
                }, [e._v("重试")]), n("span", [e._v("一下？" + e._s(e.$emoji.sad()))])])] : e.dataList.length ? e._e() : [n("div", {
                    staticClass: "empty-hinter t-center"
                }, [e._v("您还没有看过漫画喔 " + e._s(e.$emoji.helpless()))])]], 2)])
            }
        ), [], !1, null, "2b2fc7ed", null).exports
            , X = n("wLAv");
        function K(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var $ = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , ee = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , te = function(e) {
            c()(i, e);
            var t, n = K(i);
            function i() {
                var e;
                return r()(this, i),
                    (e = n.apply(this, arguments)).isPanelActive = !1,
                    e.lens = null,
                    e.enterTimer = null,
                    e.leaveTimer = null,
                    e.newFavNum = 0,
                    e
            }
            return a()(i, [{
                key: "onMouseEnter",
                value: function(e) {
                    var t = this;
                    clearTimeout(this.enterTimer),
                        clearTimeout(this.leaveTimer),
                        this.enterTimer = setTimeout((function() {
                                t.isPanelActive = !0
                            }
                        ), 250)
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    var e = this;
                    clearTimeout(this.enterTimer),
                        clearTimeout(this.leaveTimer),
                        this.leaveTimer = setTimeout((function() {
                                e.isPanelActive = !1
                            }
                        ), 250)
                }
            }, {
                key: "initLens",
                value: function() {
                    var e = new k.a(this.$refs.dropList);
                    e.observe({
                        deepWatch: !0
                    }),
                        this.lens = e
                }
            }, {
                key: "sendMyFollowSPM",
                value: function() {
                    X.a.sendEvent({
                        spmId: "777.14.my_follow.click"
                    })
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initLens()
                }
            }, {
                key: "getNewFavNum",
                value: (t = L()(z.a.mark((function e() {
                            var t;
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    B.a.getInitInfo();
                                            case 2:
                                                t = e.sent,
                                                    this.newFavNum = t.data ? t.data.newFavNum : 0,
                                                this.newFavNum >= 0 && X.a.sendEvent({
                                                    spmId: "777.14.update_reminder.show"
                                                });
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.lens.disconnect()
                }
            }]),
                i
        }(A.default);
        $([Object(y.d)({
            type: String,
            default: ""
        }), ee("design:type", String)], te.prototype, "urlQueryString", void 0);
        var ne = te = $([Object(y.b)({
            components: {
                DataList: J
            }
        })], te)
            , ie = Object(m.a)(ne, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "manga-navbar-favourite-manga h-100 p-relative",
                    on: {
                        mouseenter: e.onMouseEnter,
                        mouseleave: e.onMouseLeave
                    }
                }, [n("a", {
                    attrs: {
                        href: "/account-center/my-favourite",
                        target: "_blank"
                    },
                    on: {
                        click: e.sendMyFollowSPM
                    }
                }, [n("button", {
                    staticClass: "action-button app-button"
                }, [e._v("追漫"), e.newFavNum ? n("div", {
                    staticClass: "red-dot"
                }) : e._e()])]), n("div", {
                    staticClass: "drop-list p-absolute over-hidden"
                }, [n("transition", {
                    attrs: {
                        "leave-active-class": "a-fade-out"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isPanelActive,
                        expression: "isPanelActive"
                    }],
                    ref: "dropList",
                    staticClass: "size-ruler"
                }, [n("transition", {
                    attrs: {
                        "leave-active-class": "a-move-out-top"
                    }
                }, [e.isPanelActive ? n("data-list", {
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }) : e._e()], 1), n("div", {
                    staticClass: "more-btn-container"
                }, [n("a", {
                    attrs: {
                        href: "/account-center/my-favourite",
                        target: "_blank"
                    }
                }, [n("button", {
                    staticClass: "more-button app-button w-100"
                }, [e._v("查看全部 >")])])])], 1)])], 1)])
            }
        ), [], !1, null, "57645200", null).exports
            , re = n("aZbF")
            , oe = n("z8gV");
        function ae(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var se = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , ce = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ue = function(e) {
            c()(o, e);
            var t, i = ae(o);
            function o() {
                var e;
                return r()(this, o),
                    (e = i.apply(this, arguments)).ps = null,
                    e.inLoading = !1,
                    e.isLoadingFailed = !1,
                    e.defaultCover = n("oD+a"),
                    e.dataList = [],
                    e
            }
            return a()(o, [{
                key: "isVomic",
                value: function(e) {
                    return e.type === R.i.video
                }
            }, {
                key: "hinterToast",
                value: function() {
                    Y.a.hint("Vomic仅支持在手机端观看~ " + P.happy())
                }
            }, {
                key: "routerToDetail",
                value: function(e) {
                    this.isVomic(e) ? this.hinterToast() : window.open(this.createDetailPageUrl(e.seasonId), "_blank")
                }
            }, {
                key: "initPs",
                value: function() {
                    this.ps = new S.default(this.listContainer,{
                        wheelPropagation: !1
                    })
                }
            }, {
                key: "createText1",
                value: function(e) {
                    switch (e.status) {
                        case re.b.ToBeOpened:
                            return "未开刊";
                        case re.b.OnShow:
                            return "更新至 ".concat(e.latestEpisodeShortTitleFormatted);
                        case re.b.Finished:
                            return "共 ".concat(e.episodeCount, " 话")
                    }
                }
            }, {
                key: "createText2",
                value: function(e) {
                    return e.lastReadEpisodeShortTitleFormatted ? "阅读至 ".concat(e.lastReadEpisodeShortTitleFormatted) : "未看"
                }
            }, {
                key: "createDetailPageUrl",
                value: function(e) {
                    return _.a.detailPage(e, Q.a.parse(this.urlQueryString))
                }
            }, {
                key: "createReaderPageUrl",
                value: function(e, t) {
                    return _.a.readerPage(e, t, Q.a.parse(this.urlQueryString))
                }
            }, {
                key: "getHistoryList",
                value: (t = L()(z.a.mark((function e() {
                            var t, n, i;
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.inLoading) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return this.inLoading = !0,
                                                    e.next = 5,
                                                    oe.a.getReadHistory(1, 3);
                                            case 5:
                                                if (t = e.sent,
                                                    n = t.data,
                                                    i = t.error,
                                                    this.inLoading = !1,
                                                    !i) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return this.isLoadingFailed = !0,
                                                    F.a.error("阅读记录获取失败:", i),
                                                    e.abrupt("return");
                                            case 13:
                                                this.dataList = n.filter((function(e) {
                                                        return e.status !== re.b.Offline
                                                    }
                                                )),
                                                    this.updatePs();
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "updatePs",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                            e.ps && e.ps.update()
                        }
                    ), 1)
                }
            }, {
                key: "retry",
                value: function() {
                    this.isLoadingFailed = !1,
                        this.getHistoryList()
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initPs(),
                        this.getHistoryList()
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.ps.destroy(),
                        this.ps = null
                }
            }, {
                key: "listContainer",
                get: function() {
                    return this.$refs.listContainer
                }
            }]),
                o
        }(A.default);
        se([Object(y.d)({
            type: String,
            default: ""
        }), ce("design:type", String)], ue.prototype, "urlQueryString", void 0);
        var le = ue = se([y.b], ue)
            , de = Object(m.a)(le, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "data-list border-box a-move-in-left"
                }, [n("div", {
                    ref: "listContainer",
                    staticClass: "list-container p-relative border-box over-hidden"
                }, [e._l(e.dataList, (function(t, i) {
                        return n("div", {
                            staticClass: "data-item p-relative",
                            class: {
                                "is-last": i === e.dataList.length - 1
                            }
                        }, [n("a", {
                            attrs: {
                                target: "_blank"
                            },
                            on: {
                                click: function(n) {
                                    return e.routerToDetail(t)
                                }
                            }
                        }, [n("div", {
                            staticClass: "manga-cover p-relative bg-cover bg-center bg-no-repeat",
                            style: {
                                "background-image": "url(" + e.defaultCover + ")"
                            },
                            attrs: {
                                role: "img",
                                title: t.title
                            }
                        }, [n("img", {
                            staticClass: "w-100 p-absolute p-zero",
                            attrs: {
                                src: e.$bfs.bfsLink(t.verticalCover, 200)
                            }
                        })])]), n("div", {
                            staticClass: "text-section h-100 p-absolute border-box"
                        }, [n("a", {
                            attrs: {
                                target: "_blank"
                            },
                            on: {
                                click: function(n) {
                                    return e.routerToDetail(t)
                                }
                            }
                        }, [n("jk-multi-line-text", {
                            staticClass: "manga-title",
                            attrs: {
                                title: t.title
                            }
                        }, [e._v(e._s(t.title))])], 1), n("div", {
                            staticClass: "footer-text w-100 p-absolute border-box"
                        }, [n("div", {
                            staticClass: "text",
                            attrs: {
                                title: e.createText1(t)
                            },
                            domProps: {
                                textContent: e._s(e.createText1(t))
                            }
                        }), e.isVomic(t) ? n("a", {
                            staticClass: "read-progress",
                            on: {
                                click: e.hinterToast
                            }
                        }, [n("div", {
                            staticClass: "text",
                            attrs: {
                                title: e.createText2(t)
                            },
                            domProps: {
                                textContent: e._s(e.createText2(t))
                            }
                        })]) : n("a", {
                            staticClass: "read-progress",
                            attrs: {
                                href: e.createReaderPageUrl(t.seasonId, t.lastReadEpisodeId),
                                target: "_blank"
                            }
                        }, [n("div", {
                            staticClass: "text",
                            attrs: {
                                title: e.createText2(t)
                            },
                            domProps: {
                                textContent: e._s(e.createText2(t))
                            }
                        })])])])])
                    }
                )), e.inLoading ? [n("div", {
                    staticClass: "loading-hinter t-center"
                }, [e._v("载入中... " + e._s(e.$emoji.happy()))])] : e.isLoadingFailed ? [n("div", {
                    staticClass: "failure-hinter t-center"
                }, [n("span", [e._v("载入失败，要不")]), n("a", {
                    staticClass: "pointer",
                    on: {
                        click: e.retry
                    }
                }, [e._v("重试")]), n("span", [e._v("一下？" + e._s(e.$emoji.sad()))])])] : e.dataList.length ? e._e() : [n("div", {
                    staticClass: "empty-hinter t-center"
                }, [e._v("您还没有看过漫画喔 " + e._s(e.$emoji.helpless()))])]], 2)])
            }
        ), [], !1, null, "9293f53e", null).exports;
        function Me(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var pe = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , fe = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ye = function(e) {
            c()(n, e);
            var t = Me(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).isPanelActive = !1,
                    e.lens = null,
                    e.enterTimer = null,
                    e.leaveTimer = null,
                    e
            }
            return a()(n, [{
                key: "onMouseEnter",
                value: function(e) {
                    var t = this;
                    clearTimeout(this.enterTimer),
                        clearTimeout(this.leaveTimer),
                        this.enterTimer = setTimeout((function() {
                                t.isPanelActive = !0
                            }
                        ), 250)
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    var e = this;
                    clearTimeout(this.enterTimer),
                        clearTimeout(this.leaveTimer),
                        this.leaveTimer = setTimeout((function() {
                                e.isPanelActive = !1
                            }
                        ), 250)
                }
            }, {
                key: "initLens",
                value: function() {
                    var e = new k.a(this.$refs.dropList);
                    e.observe({
                        deepWatch: !0
                    }),
                        this.lens = e
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initLens()
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.lens.disconnect()
                }
            }]),
                n
        }(A.default);
        pe([Object(y.d)({
            type: String,
            default: ""
        }), fe("design:type", String)], ye.prototype, "urlQueryString", void 0);
        var ge = ye = pe([Object(y.b)({
            components: {
                DataList: de
            }
        })], ye)
            , Ae = Object(m.a)(ge, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "manga-navbar-history-list h-100 p-relative",
                    on: {
                        mouseenter: e.onMouseEnter,
                        mouseleave: e.onMouseLeave
                    }
                }, [e._m(0), n("div", {
                    staticClass: "drop-list p-absolute over-hidden"
                }, [n("transition", {
                    attrs: {
                        "leave-active-class": "a-fade-out"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isPanelActive,
                        expression: "isPanelActive"
                    }],
                    ref: "dropList",
                    staticClass: "size-ruler"
                }, [n("transition", {
                    attrs: {
                        "leave-active-class": "a-move-out-top"
                    }
                }, [e.isPanelActive ? n("data-list", {
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }) : e._e()], 1), n("div", {
                    staticClass: "more-btn-container"
                }, [n("a", {
                    attrs: {
                        href: "/account-center/read-history",
                        target: "_blank"
                    }
                }, [n("button", {
                    staticClass: "more-button app-button w-100"
                }, [e._v("查看全部 >")])])])], 1)])], 1)])
            }
        ), [function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("a", {
                attrs: {
                    href: "/account-center/read-history",
                    target: "_blank"
                }
            }, [n("button", {
                staticClass: "action-button app-button"
            }, [e._v("历史")])])
        }
        ], !1, null, "1ae46879", null).exports
            , De = n("f91u");
        function he(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var Ne = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , je = function(e) {
            c()(i, e);
            var t, n = he(i);
            function i() {
                return r()(this, i),
                    n.apply(this, arguments)
            }
            return a()(i, [{
                key: "doLogin",
                value: (t = L()(z.a.mark((function e() {
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    De.a.openQuickLoginPanel({
                                                        onSuccess: function() {
                                                            return window.location.reload()
                                                        }
                                                    });
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "doRegister",
                value: function() {
                    window.location.href = "https://passport.bilibili.com/register/phone.html"
                }
            }]),
                i
        }(A.default)
            , ve = je = Ne([y.b], je)
            , we = Object(m.a)(ve, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "login-panel h-100 p-relative"
                }, [n("button", {
                    staticClass: "action-button app-button",
                    on: {
                        click: e.doLogin
                    }
                }, [e._v("登录")]), n("div", {
                    staticClass: "divider"
                }), n("button", {
                    staticClass: "action-button app-button",
                    on: {
                        click: e.doRegister
                    }
                }, [e._v("注册")])])
            }
        ), [], !1, null, "05bd5335", null).exports
            , Ie = [function() {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("div", {
                staticClass: "manga-navbar-manga-logo"
            }, [i("img", {
                staticClass: "logo-img dp-i-block v-middle",
                attrs: {
                    src: n("fqmh")
                }
            }), i("span", {
                staticClass: "dp-i-block v-middle"
            }, [e._v("哔哩哔哩漫画")])])
        }
        ];
        function Te(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var me = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Ee = function(e) {
            c()(n, e);
            var t = Te(n);
            function n() {
                return r()(this, n),
                    t.apply(this, arguments)
            }
            return a()(n, [{
                key: "isInIndexPage",
                get: function() {
                    return "/" === window.location.pathname
                }
            }]),
                n
        }(A.default)
            , Oe = Ee = me([y.b], Ee)
            , ze = Object(m.a)(Oe, (function() {
                var e = this
                    , t = e.$createElement;
                return (e._self._c || t)("a", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.14.top_nav.click",
                        expression: "'777.14.top_nav.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            type: 0
                        },
                        expression: "{type: 0}"
                    }],
                    attrs: {
                        href: "/",
                        target: e.isInIndexPage ? "_self" : "_blank"
                    }
                }, [e._m(0)])
            }
        ), Ie, !1, null, "308d0e4a", null).exports;
        function be(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var Le = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , xe = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ke = function(e) {
            c()(n, e);
            var t = be(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).navItems = [{
                        label: "冒险",
                        link: "/classify?styles=1013",
                        reportType: 1013
                    }, {
                        label: "热血",
                        link: "/classify?styles=999",
                        reportType: 999
                    }, {
                        label: "搞笑",
                        link: "/classify?styles=994",
                        reportType: 994
                    }, {
                        label: "恋爱",
                        link: "/classify?styles=995",
                        reportType: 995
                    }, {
                        label: "少女",
                        link: "/classify?styles=1026",
                        reportType: 1026
                    }, {
                        label: "分类",
                        link: "/classify",
                        reportType: 3
                    }],
                    e.navItemsOther = [{
                        label: "更新",
                        link: "/updates",
                        reportType: 5
                    }],
                    e
            }
            return a()(n, [{
                key: "createJumpUrl",
                value: function(e) {
                    return this.urlQueryString ? e.includes("?") ? e + "&" + this.urlQueryString : e + "?" + this.urlQueryString : e
                }
            }]),
                n
        }(A.default);
        Le([Object(y.d)({
            type: String,
            default: ""
        }), xe("design:type", String)], ke.prototype, "urlQueryString", void 0);
        var Se = ke = Le([Object(y.b)({})], ke)
            , Ce = Object(m.a)(Se, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "nav-list h-100 p-relative"
                }, [e._l(e.navItems, (function(t, i) {
                        return n("a", {
                            directives: [{
                                name: "click-report",
                                rawName: "v-click-report",
                                value: "777.14.top_nav.click",
                                expression: "'777.14.top_nav.click'"
                            }, {
                                name: "report-msg",
                                rawName: "v-report-msg",
                                value: {
                                    type: t.reportType
                                },
                                expression: "{type: item.reportType}"
                            }],
                            staticClass: "app-button nav-item",
                            attrs: {
                                href: e.createJumpUrl(t.link),
                                target: "_blank"
                            }
                        }, [n("span", [e._v(e._s(t.label))]), "分类" === t.label ? n("div", {
                            staticClass: "dp-i-block emmet"
                        }) : e._e()])
                    }
                )), n("div", {
                    staticClass: "divider"
                }), e._l(e.navItemsOther, (function(t, i) {
                        return n("a", {
                            directives: [{
                                name: "click-report",
                                rawName: "v-click-report",
                                value: "777.14.top_nav.click",
                                expression: "'777.14.top_nav.click'"
                            }, {
                                name: "report-msg",
                                rawName: "v-report-msg",
                                value: {
                                    type: t.reportType
                                },
                                expression: "{type: item.reportType}"
                            }],
                            staticClass: "app-button nav-item other",
                            attrs: {
                                href: e.createJumpUrl(t.link),
                                target: "_blank"
                            }
                        }, [n("span", [e._v(e._s(t.label))])])
                    }
                ))], 2)
            }
        ), [], !1, null, "d455879a", null).exports;
        function Qe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var Pe = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Ue = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Re = function(e) {
            c()(i, e);
            var t = Qe(i);
            function i() {
                var e;
                return r()(this, i),
                    (e = t.apply(this, arguments)).navItems = [{
                        label: "主站",
                        link: "//www.bilibili.com",
                        icon: n("MGnk"),
                        reportType: 1
                    }, {
                        label: "首页",
                        link: "/",
                        reportType: 2
                    }, {
                        label: "分类",
                        link: "/classify",
                        reportType: 3
                    }, {
                        label: "更新",
                        link: "/updates",
                        reportType: 5
                    }, {
                        label: "排行榜",
                        link: "/ranking",
                        reportType: 4
                    }],
                    e
            }
            return a()(i, [{
                key: "checkIsCurrentPage",
                value: function(e) {
                    var t = window.location.pathname;
                    return e.replace("#/", "") === t
                }
            }, {
                key: "createJumpUrl",
                value: function(e) {
                    return this.urlQueryString ? e + "?" + this.urlQueryString : e
                }
            }]),
                i
        }(A.default);
        Pe([Object(y.d)({
            type: String,
            default: ""
        }), Ue("design:type", String)], Re.prototype, "urlQueryString", void 0);
        var Ye = Re = Pe([y.b], Re)
            , Be = Object(m.a)(Ye, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "nav-list h-100 p-relative"
                }, e._l(e.navItems, (function(t, i) {
                        return n("a", {
                            directives: [{
                                name: "click-report",
                                rawName: "v-click-report",
                                value: "777.14.top_nav.click",
                                expression: "'777.14.top_nav.click'"
                            }, {
                                name: "report-msg",
                                rawName: "v-report-msg",
                                value: {
                                    type: t.reportType
                                },
                                expression: "{type: item.reportType}"
                            }],
                            staticClass: "dp-i-block h-100 v-middle",
                            attrs: {
                                href: e.createJumpUrl(t.link),
                                target: "_blank"
                            }
                        }, [n("button", {
                            staticClass: "nav-item h-100 app-button",
                            class: {
                                first: 0 === i,
                                active: e.checkIsCurrentPage(t.link)
                            }
                        }, [t.icon ? n("img", {
                            staticClass: "item-icon v-middle",
                            attrs: {
                                src: t.icon
                            }
                        }) : e._e(), n("span", {
                            staticClass: "item-label v-middle"
                        }, [e._v(e._s(t.label))]), e.checkIsCurrentPage(t.link) ? n("div", {
                            staticClass: "item-underline"
                        }) : e._e()])])
                    }
                )), 0)
            }
        ), [], !1, null, "4e88cdf7", null).exports
            , We = n("Gi3i")
            , Fe = n("rcyk")
            , _e = n("vXCh")
            , Ze = n("RBbJ");
        function Ge(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var qe = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , He = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Ve = function(e) {
            c()(u, e);
            var t, n, i, o, s = Ge(u);
            function u() {
                var e;
                return r()(this, u),
                    (e = s.apply(this, arguments)).SUGGESTION_ITEM_HEIGHT = 30,
                    e.SUGGESTION_COUNT_PER_PAGE = 5,
                    e.SUGGESTION_LOAD_COUNT = 20,
                    e.keyword = "",
                    e.suggestionList = [],
                    e.ps = null,
                    e.isExpand = !1,
                    e.inLoading = !1,
                    e.searchBarDefaultHeight = 32,
                    e.searchBarHeight = e.searchBarDefaultHeight,
                    e.placeholders = [],
                    e.currentPlaceholderIndex = 0,
                    e.placeholderTimer = null,
                    e.isInputInFocus = !1,
                    e.isImeInputStart = !1,
                    e.selectedIndex = -1,
                    e.inputWidth = "118px",
                    e.inSearch = !1,
                    e
            }
            return a()(u, [{
                key: "resetState",
                value: function() {
                    this.inLoading = !1,
                        this.isExpand = !1,
                        this.selectedIndex = -1
                }
            }, {
                key: "observeInput",
                value: function() {
                    this.keywordInput$.pipe(Object(We.a)(500)).subscribe(this.getSuggestionList)
                }
            }, {
                key: "onSubmit",
                value: (o = L()(z.a.mark((function e() {
                            var t;
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                t = (this.keyword || this.placeholders[this.currentPlaceholderIndex]).trim(),
                                                    this.doSearch(t);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return o.apply(this, arguments)
                        }
                )
            }, {
                key: "onInputFocus",
                value: function() {
                    this.isInputInFocus = !0,
                    this.suggestionList.length && this.openSuggestion(),
                        this.inputWidth = "166px"
                }
            }, {
                key: "onInputBlur",
                value: function() {
                    this.isInputInFocus = !1,
                        this.inputWidth = "118px"
                }
            }, {
                key: "onImeInputStart",
                value: function() {
                    this.isImeInputStart = !0
                }
            }, {
                key: "onImeInputEnd",
                value: function() {
                    this.isImeInputStart = !1
                }
            }, {
                key: "onInputKeyDown",
                value: function(e) {
                    if (this.suggestionList.length) {
                        switch (e.key) {
                            case "ArrowUp":
                                this.selectedIndex > 0 && this.selectedIndex--;
                                break;
                            case "ArrowDown":
                            case "Tab":
                                this.selectedIndex < this.suggestionList.length - 1 && this.selectedIndex++;
                                break;
                            default:
                                return
                        }
                        e.preventDefault(),
                            this.selectSuggestionAsKeyword(),
                            this.scrollPsToSelectedSuggestion()
                    }
                }
            }, {
                key: "selectSuggestionAsKeyword",
                value: function() {
                    var e = this.suggestionList[this.selectedIndex];
                    this.keyword = this.filterHTML(e)
                }
            }, {
                key: "scrollPsToSelectedSuggestion",
                value: function() {
                    var e = Math.ceil((this.selectedIndex + 1) / this.SUGGESTION_COUNT_PER_PAGE) - 1
                        , t = this.SUGGESTION_COUNT_PER_PAGE * this.SUGGESTION_ITEM_HEIGHT * e;
                    this.suggestionListElement.scrollTop = t
                }
            }, {
                key: "getSuggestionList",
                value: (i = L()(z.a.mark((function e() {
                            var t, n, i, r;
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (t = this.keyword,
                                                !this.inLoading && t) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return t || (this.suggestionList = [],
                                                    this.resetState()),
                                                    e.abrupt("return");
                                            case 4:
                                                return this.inLoading = !0,
                                                    this.suggestionList = [],
                                                    e.next = 8,
                                                    _e.a.getSearchSuggestion(t, this.SUGGESTION_LOAD_COUNT);
                                            case 8:
                                                if (n = e.sent,
                                                    i = n.data,
                                                    r = n.error,
                                                    this.inLoading = !1,
                                                    !r) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return F.a.error("搜索关键词获取失败:", r),
                                                    e.abrupt("return");
                                            case 15:
                                                this.suggestionList = i,
                                                    this.selectedIndex = -1,
                                                    i.length > 0 ? this.openSuggestion() : this.closeSuggestion(),
                                                    this.updatePs();
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "getPlaceholders",
                value: (n = L()(z.a.mark((function e() {
                            var t, n;
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    _e.a.getSearchPlaceHolder();
                                            case 2:
                                                t = e.sent,
                                                    n = t.data,
                                                t.error || (this.placeholders = n.map((function(e) {
                                                        return e.title
                                                    }
                                                )));
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "initPlaceholderTimer",
                value: function() {
                    var e = this;
                    this.placeholderTimer = setInterval((function() {
                            if (!e.isInputInFocus) {
                                var t = e.currentPlaceholderIndex;
                                t < e.placeholders.length - 1 ? t++ : t = 0,
                                    e.currentPlaceholderIndex = t
                            }
                        }
                    ), 5e3)
                }
            }, {
                key: "initPs",
                value: function() {
                    this.ps = new S.default(this.suggestionListElement,{
                        suppressScrollX: !0,
                        wheelPropagation: !1
                    })
                }
            }, {
                key: "updatePs",
                value: function() {
                    var e = this;
                    this.$nextTick((function() {
                            return e.ps.update()
                        }
                    ))
                }
            }, {
                key: "openSuggestion",
                value: function() {
                    this.isExpand = !0
                }
            }, {
                key: "closeSuggestion",
                value: function() {
                    this.isExpand = !1
                }
            }, {
                key: "goSearchPage",
                value: function(e) {
                    var t = this.filterHTML(e).trim();
                    this.doSearch(t)
                }
            }, {
                key: "doSearch",
                value: (t = L()(z.a.mark((function e(t) {
                            return z.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.inSearch) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                if (t) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return Y.a.info("小老弟你输入的是空格吧 " + Object(P.helpless)()),
                                                    e.abrupt("return");
                                            case 5:
                                                if ("function" != typeof this.onSearch) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return this.inSearch = !0,
                                                    e.next = 9,
                                                    this.onSearch(t);
                                            case 9:
                                                return this.inSearch = !1,
                                                    e.abrupt("return");
                                            case 11:
                                                Fe.a.goToSearchPage({
                                                    keyword: t,
                                                    query: Q.a.parse(this.urlQueryString)
                                                });
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "filterHTML",
                value: function(e) {
                    return Ze.a.filterHTML(e)
                }
            }, {
                key: "onSuggestionListChange",
                value: function(e) {
                    var t = e.length;
                    if (0 === t)
                        this.searchBarHeight = this.searchBarDefaultHeight;
                    else if (t < 5)
                        this.searchBarHeight = t * this.SUGGESTION_ITEM_HEIGHT + this.searchBarDefaultHeight;
                    else {
                        var n = this.SUGGESTION_ITEM_HEIGHT * this.SUGGESTION_COUNT_PER_PAGE + 1;
                        this.searchBarHeight = n + this.searchBarDefaultHeight
                    }
                }
            }, {
                key: "created",
                value: function() {
                    this.observeInput(),
                        this.getPlaceholders()
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initPs(),
                        this.initPlaceholderTimer(),
                        window.addEventListener("click", this.closeSuggestion)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.ps.destroy(),
                        this.ps = null,
                        window.removeEventListener("click", this.closeSuggestion),
                        clearInterval(this.placeholderTimer)
                }
            }, {
                key: "suggestionListElement",
                get: function() {
                    return this.$refs.suggestionList
                }
            }]),
                u
        }(A.default);
        qe([Object(y.d)({
            type: String,
            default: ""
        }), He("design:type", String)], Ve.prototype, "urlQueryString", void 0),
            qe([Object(y.d)({
                type: Function,
                default: null
            }), He("design:type", Function)], Ve.prototype, "onSearch", void 0),
            qe([Object(y.g)("suggestionList"), He("design:type", Function), He("design:paramtypes", [Object]), He("design:returntype", void 0)], Ve.prototype, "onSuggestionListChange", null);
        var Je = Ve = qe([Object(y.b)({
            domStreams: ["keywordInput$"]
        })], Ve)
            , Xe = Object(m.a)(Je, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "search-bar p-relative border-box",
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [n("div", {
                    staticClass: "search-bar-bg w-100 p-absolute p-zero ts-dot-4",
                    class: {
                        expand: e.isExpand
                    },
                    style: {
                        height: e.isExpand ? e.searchBarHeight + "px" : void 0
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isExpand,
                        expression: "isExpand"
                    }],
                    staticClass: "search-suggestion w-100 p-absolute border-box over-hidden",
                    style: {
                        height: e.SUGGESTION_ITEM_HEIGHT * e.SUGGESTION_COUNT_PER_PAGE + "px"
                    }
                }, [n("div", {
                    ref: "suggestionList",
                    staticClass: "data-list h-100 p-relative"
                }, e._l(e.suggestionList, (function(t, i) {
                        return n("div", {
                            staticClass: "suggestion-item pointer t-no-wrap t-over-hidden border-box a-move-in-bottom",
                            class: {
                                selected: i === e.selectedIndex
                            },
                            style: {
                                height: e.SUGGESTION_ITEM_HEIGHT + "px"
                            },
                            attrs: {
                                title: e.filterHTML(t)
                            },
                            domProps: {
                                innerHTML: e._s(t)
                            },
                            on: {
                                click: function(n) {
                                    return e.goSearchPage(t)
                                }
                            }
                        })
                    }
                )), 0)])]), n("form", {
                    staticClass: "p-relative",
                    on: {
                        submit: function(t) {
                            return t.preventDefault(),
                                e.onSubmit(t)
                        }
                    }
                }, [n("jk-vertical-center", [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.keyword.length && !e.isImeInputStart,
                        expression: "!keyword.length && !isImeInputStart"
                    }],
                    staticClass: "placeholder-list w-100 h-100 p-absolute p-zero border-box over-hidden"
                }, e._l(e.placeholders, (function(t) {
                        return n("div", {
                            staticClass: "placeholder-item t-over-hidden t-no-wrap ts-dot-4",
                            style: {
                                transform: "translate(0, " + -100 * e.currentPlaceholderIndex + "%)"
                            }
                        }, [e._v(e._s(t))])
                    }
                )), 0)]), n("jk-vertical-center", {
                    staticClass: "p-relative"
                }, [n("input", {
                    directives: [{
                        name: "stream",
                        rawName: "v-stream:input",
                        value: e.keywordInput$,
                        expression: "keywordInput$",
                        arg: "input"
                    }, {
                        name: "model",
                        rawName: "v-model",
                        value: e.keyword,
                        expression: "keyword"
                    }],
                    staticClass: "search-input v-middle ts-dot-2",
                    style: {
                        width: e.inputWidth
                    },
                    attrs: {
                        title: "人……人家才不想让你搜索呢！哼！" + e.$emoji.angry()
                    },
                    domProps: {
                        value: e.keyword
                    },
                    on: {
                        compositionstart: e.onImeInputStart,
                        compositionend: e.onImeInputEnd,
                        focus: e.onInputFocus,
                        blur: e.onInputBlur,
                        keydown: e.onInputKeyDown,
                        input: function(t) {
                            t.target.composing || (e.keyword = t.target.value)
                        }
                    }
                }), n("button", {
                    staticClass: "confirm-btn app-button v-middle pointer",
                    attrs: {
                        type: "submit"
                    }
                }, [n("div", {
                    staticClass: "search-icon bg-cover bg-center bg-no-repeat"
                })])])], 1)])
            }
        ), [], !1, null, "630abf38", null).exports
            , Ke = n("ZxM/")
            , $e = n("CnmV")
            , et = n("rm82")
            , tt = n("GdVg")
            , nt = n("ZcLj")
            , it = n("reI8");
        function rt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var ot = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , at = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , st = function(e) {
            c()(n, e);
            var t = rt(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).tooltip = {
                        text: "下载 APP 领 5 张漫读券",
                        link: "/app-download"
                    },
                    e.clickShowTooltip = !0,
                    e
            }
            return a()(n, [{
                key: "goAccountCenter",
                value: function() {
                    Fe.a.goAccountCenter({
                        openInNewWindow: !0
                    })
                }
            }, {
                key: "removeTooltip",
                value: function() {
                    h.a.setItem("BilibiliManga:AppReminderUserClicked", "1"),
                        this.clickShowTooltip = !1,
                        this.$sendStatisticsEvent({
                            reportConfig: {
                                spmId: "777.14.profile_selfdown.click"
                            }
                        })
                }
            }, {
                key: "createJumpUrl",
                value: function() {
                    return _.a.accountCenter()
                }
            }, {
                key: "createJumpMyCouponUrl",
                value: function() {
                    return _.a.accountCenter({
                        subPage: it.a.MyCouponPage
                    })
                }
            }, {
                key: "createJumpMyLimitCouponUrl",
                value: function() {
                    return _.a.accountCenter({
                        subPage: it.a.MyLimitFreeCouponPage
                    })
                }
            }, {
                key: "createJumpMyDiscountCardUrl",
                value: function() {
                    return _.a.accountCenter({
                        subPage: it.a.MyDiscountCardPage
                    })
                }
            }, {
                key: "mounted",
                value: function() {
                    this.clickShowTooltip = !("1" === h.a.getItem("BilibiliManga:AppReminderUserClicked")),
                    this.showTooltip && this.$sendStatisticsEvent({
                        reportConfig: {
                            spmId: "777.14.profile_selfdown.show"
                        }
                    })
                }
            }, {
                key: "username",
                get: function() {
                    var e, t, n;
                    return null !== (e = null === (t = this.userState) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.nickname) && void 0 !== e ? e : "神秘用户 " + P.helpless()
                }
            }, {
                key: "coin",
                get: function() {
                    return this.walletState.gold || 0
                }
            }, {
                key: "coupon",
                get: function() {
                    return this.walletState.coupon || 0
                }
            }, {
                key: "limitedFreeCoupon",
                get: function() {
                    return this.walletState.limitedFreeCoupon || 0
                }
            }, {
                key: "discountCard",
                get: function() {
                    return this.walletState.discountCard || 0
                }
            }, {
                key: "showTooltip",
                get: function() {
                    return this.clickShowTooltip && this.newbieInfoState.hasMobileNewbieGift
                }
            }]),
                n
        }(A.default);
        ot([Object(y.d)({
            type: String,
            default: ""
        }), at("design:type", String)], st.prototype, "urlQueryString", void 0);
        var ct = st = ot([Object(y.b)({
            filters: {
                labelFormat: function(e) {
                    return nt.c.LabelFormat.tenThousand(e || 0)
                }
            },
            subscriptions: function() {
                return {
                    userState: D.b,
                    walletState: tt.b,
                    newbieInfoState: N.b
                }
            }
        })], st)
            , ut = Object(m.a)(ct, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "user-info-panel border-box"
                }, [i("div", {
                    staticClass: "user-name t-center t-no-wrap t-over-hidden",
                    attrs: {
                        title: e.username
                    }
                }, [e._v(e._s(e.username))]), i("a", {
                    attrs: {
                        href: e.createJumpUrl(),
                        target: "_blank"
                    }
                }, [i("div", {
                    staticClass: "info-item"
                }, [i("img", {
                    staticClass: "item-icon",
                    attrs: {
                        src: n("gtSF")
                    }
                }), i("span", {
                    staticClass: "item-text"
                }, [e._v("漫币")]), i("span", {
                    staticClass: "item-num",
                    attrs: {
                        title: "漫币：" + e.coin
                    }
                }, [e._v(e._s(e._f("labelFormat")(e.coin)))])])]), i("a", {
                    attrs: {
                        href: e.createJumpMyCouponUrl(),
                        target: "_blank"
                    }
                }, [i("div", {
                    staticClass: "info-item"
                }, [i("img", {
                    staticClass: "item-icon",
                    attrs: {
                        src: n("GW4A")
                    }
                }), i("span", {
                    staticClass: "item-text"
                }, [e._v("漫读券")]), i("span", {
                    staticClass: "item-num",
                    attrs: {
                        title: "漫读券：" + e.coupon
                    }
                }, [e._v(e._s(e._f("labelFormat")(e.coupon)))])])]), i("a", {
                    attrs: {
                        href: e.createJumpMyLimitCouponUrl(),
                        target: "_blank"
                    }
                }, [i("div", {
                    staticClass: "info-item"
                }, [i("img", {
                    staticClass: "item-icon",
                    attrs: {
                        src: n("VCHA")
                    }
                }), i("span", {
                    staticClass: "item-text"
                }, [e._v("限免卡")]), i("span", {
                    staticClass: "item-num",
                    attrs: {
                        title: "限免卡：" + e.limitedFreeCoupon
                    }
                }, [e._v(e._s(e._f("labelFormat")(e.limitedFreeCoupon)))])])]), i("a", {
                    attrs: {
                        href: e.createJumpMyDiscountCardUrl(),
                        target: "_blank"
                    }
                }, [i("div", {
                    staticClass: "info-item"
                }, [i("img", {
                    staticClass: "item-icon",
                    attrs: {
                        src: n("UTQG")
                    }
                }), i("span", {
                    staticClass: "item-text"
                }, [e._v("打折卡")]), i("span", {
                    staticClass: "item-num",
                    attrs: {
                        title: "打折卡：" + e.discountCard
                    }
                }, [e._v(e._s(e._f("labelFormat")(e.discountCard)))])])]), e.showTooltip ? i("a", {
                    attrs: {
                        href: e.tooltip.link,
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.removeTooltip()
                        }
                    }
                }, [i("div", {
                    staticClass: "tooltip"
                }, [e._v(e._s(e.tooltip.text))])]) : e._e()])
            }
        ), [], !1, null, "39c37407", null).exports;
        function lt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var dt = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Mt = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , pt = function(e) {
            c()(n, e);
            var t = lt(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).lens = null,
                    e.enterTimer = null,
                    e.leaveTimer = null,
                    e.isPanelActive = !1,
                    e
            }
            return a()(n, [{
                key: "onMouseEnter",
                value: function(e) {
                    var t = this;
                    clearTimeout(this.enterTimer),
                        clearTimeout(this.leaveTimer),
                        this.enterTimer = setTimeout((function() {
                                t.isPanelActive = !0,
                                    t.getWalletData()
                            }
                        ), 250)
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    var e = this;
                    clearTimeout(this.enterTimer),
                        clearTimeout(this.leaveTimer),
                        this.leaveTimer = setTimeout((function() {
                                e.isPanelActive = !1
                            }
                        ), 250)
                }
            }, {
                key: "getWalletData",
                value: function() {
                    return et.a.refreshWalletData()
                }
            }, {
                key: "initLens",
                value: function() {
                    var e = new k.a(this.$refs.dropList);
                    e.observe({
                        deepWatch: !0
                    }),
                        this.lens = e
                }
            }, {
                key: "createJumpUrl",
                value: function() {
                    return _.a.accountCenter()
                }
            }, {
                key: "logout",
                value: function() {
                    return $e.a.logout()
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initLens()
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.lens.disconnect()
                }
            }, {
                key: "avatar",
                get: function() {
                    var e, t, n;
                    return null !== (e = null === (t = this.userState) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.avatar) && void 0 !== e ? e : ""
                }
            }]),
                n
        }(A.default);
        dt([Object(y.d)({
            type: String,
            default: ""
        }), Mt("design:type", String)], pt.prototype, "urlQueryString", void 0),
            dt([Object(Ke.a)({
                isShowQuickLoginPanel: !1
            }), Mt("design:type", Function), Mt("design:paramtypes", []), Mt("design:returntype", void 0)], pt.prototype, "getWalletData", null);
        var ft = pt = dt([Object(y.b)({
            components: {
                InfoPanel: ut
            },
            subscriptions: function() {
                return {
                    userState: D.b,
                    walletState: tt.b
                }
            }
        })], pt)
            , yt = Object(m.a)(ft, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "user-panel p-relative",
                    on: {
                        mouseenter: e.onMouseEnter,
                        mouseleave: e.onMouseLeave
                    }
                }, [n("div", {
                    staticClass: "drop-list p-absolute over-hidden"
                }, [n("transition", {
                    attrs: {
                        "leave-active-class": "a-fade-out"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isPanelActive,
                        expression: "isPanelActive"
                    }],
                    ref: "dropList",
                    staticClass: "size-ruler"
                }, [n("transition", {
                    attrs: {
                        "leave-active-class": "a-move-out-top"
                    }
                }, [n("info-panel", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isPanelActive,
                        expression: "isPanelActive"
                    }],
                    staticClass: "a-move-in-bottom",
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                })], 1), n("div", {
                    staticClass: "logout-btn-container"
                }, [n("button", {
                    staticClass: "logout-button app-button w-100",
                    on: {
                        click: e.logout
                    }
                }, [e._v("退出登录")])])], 1)])], 1), n("a", {
                    attrs: {
                        href: e.createJumpUrl(),
                        target: "_blank"
                    }
                }, [n("div", {
                    staticClass: "user-avatar b-circle bg-cover bg-center pointer ts-dot-4",
                    class: {
                        "large-mode": e.isPanelActive
                    },
                    style: {
                        "background-image": "url(" + e.$bfs.bfsLink(e.avatar, 120) + ")"
                    },
                    attrs: {
                        role: "img"
                    }
                })])])
            }
        ), [], !1, null, "31ce2e23", null).exports;
        function gt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var At = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Dt = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ht = function(e) {
            c()(n, e);
            var t = gt(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).isHideNavbar = !1,
                    e.lastScrollTop = 0,
                    e
            }
            return a()(n, [{
                key: "onScroll",
                value: function(e) {
                    var t = g.a.getScrollTop();
                    this.isHideNavbar = t > 100 && t - this.lastScrollTop > 0,
                        this.lastScrollTop = t
                }
            }, {
                key: "mounted",
                value: function() {
                    this.isFixMode || window.addEventListener("scroll", this.onScroll)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.isFixMode || window.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "isLogin",
                get: function() {
                    var e, t;
                    return !0 === (null === (e = this.userState) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.isLogin)
                }
            }]),
                n
        }(A.default);
        At([Object(y.d)({
            type: Boolean,
            default: !1
        }), Dt("design:type", Boolean)], ht.prototype, "isFixMode", void 0),
            At([Object(y.d)({
                type: Boolean,
                default: !0
            }), Dt("design:type", Boolean)], ht.prototype, "isShowSearchBar", void 0),
            At([Object(y.d)({
                type: Boolean,
                default: !0
            }), Dt("design:type", Boolean)], ht.prototype, "isShowNavLink", void 0),
            At([Object(y.d)({
                type: Boolean,
                default: !0
            }), Dt("design:type", Boolean)], ht.prototype, "isShowLogo", void 0),
            At([Object(y.d)({
                type: String,
                default: ""
            }), Dt("design:type", String)], ht.prototype, "urlQueryString", void 0),
            At([Object(y.d)({
                type: Function,
                default: null
            }), Dt("design:type", Function)], ht.prototype, "onSearch", void 0);
        var Nt = ht = At([Object(y.b)({
            components: {
                FavouriteManga: ie,
                HistoryList: Ae,
                MangaLogo: ze,
                NavList: Be,
                NavCategory: Ce,
                SearchBar: Xe,
                DownloadApp: E,
                UserPanel: yt,
                LoginPanel: we
            },
            subscriptions: function() {
                return {
                    userState: D.b
                }
            }
        })], ht)
            , jt = Object(m.a)(Nt, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("nav", {
                    staticClass: "manga-navbar p-relative"
                }, [n("div", {
                    staticClass: "size-ruler dp-flex align-center h-100 m-auto t-no-wrap"
                }, [e.isShowLogo ? n("manga-logo", {
                    staticClass: "manga-logo dp-i-block v-middle"
                }) : e._e(), n("div", {
                    staticClass: "wrapper"
                }, [n("div", {
                    staticClass: "spacer ts-dot-4",
                    class: [e.isHideNavbar ? "hide-mode" : ""]
                }, [n("div", {
                    staticClass: "row"
                }, [e.isShowNavLink ? n("nav-list", {
                    staticClass: "dp-i-block v-middle",
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }) : e._e(), e._t("centerPart")], 2), n("div", {
                    staticClass: "row"
                }, [e.isShowNavLink ? n("nav-category", {
                    staticClass: "dp-i-block v-middle",
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }) : e._e()], 1)])]), n("div", {
                    staticClass: "right-part h-100"
                }, [n("search-bar", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowSearchBar,
                        expression: "isShowSearchBar"
                    }],
                    attrs: {
                        "url-query-string": e.urlQueryString,
                        "on-search": e.onSearch
                    }
                }), n("download-app", {
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }), e.isLogin ? [n("history-list", {
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }), n("favourite-manga", {
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                }), n("user-panel", {
                    attrs: {
                        "url-query-string": e.urlQueryString
                    }
                })] : [n("login-panel")]], 2)], 1)])
            }
        ), [], !1, null, "0b65b86e", null);
        t.a = jt.exports
    },
    "9ljz": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return c
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("ZojZ")
            , c = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "getItem",
                value: function(e) {
                    try {
                        return localStorage.getItem(e)
                    } catch (e) {
                        return s.a.error("Failed to get data from local storage:", e),
                            null
                    }
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    try {
                        localStorage.setItem(e, t)
                    } catch (e) {
                        s.a.error("Failed to set data to local storage:", e)
                    }
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    try {
                        localStorage.removeItem(e)
                    } catch (e) {
                        s.a.error("Failed to remove data from local storage:", e)
                    }
                }
            }]),
                e
        }()
    },
    AMMt: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return m
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("ZcLj")
            , c = n("oCYn")
            , u = n("7W2i")
            , l = n.n(u)
            , d = n("a1gu")
            , M = n.n(d)
            , p = n("Nsbk")
            , f = n.n(p)
            , y = n("cDf5")
            , g = n.n(y)
            , A = n("+B0l");
        function D(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = f()(e);
                if (t) {
                    var r = f()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return M()(this, n)
            }
        }
        var h = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , N = function(e) {
            l()(n, e);
            var t = D(n);
            function n() {
                var e;
                return r()(this, n),
                    (e = t.apply(this, arguments)).hinters = [],
                    e
            }
            return a()(n, [{
                key: "createStyle",
                value: function(e) {
                    var t = {
                        maxWidth: "400px",
                        padding: "15px",
                        "margin-top": "10px",
                        color: "#fff",
                        "box-sizing": "border-box",
                        "border-radius": "5px"
                    };
                    switch (e) {
                        case "info":
                            t["background-color"] = "#2196F3";
                            break;
                        case "success":
                            t["background-color"] = "#4CAF50";
                            break;
                        case "warning":
                            t["background-color"] = "#FF9800";
                            break;
                        case "error":
                            t["background-color"] = "#FF5722"
                    }
                    return t
                }
            }, {
                key: "addHinter",
                value: function(e) {
                    var t = this
                        , n = {
                        id: s.d.randomString(),
                        text: e.text,
                        type: e.type,
                        timeout: e.timeout
                    };
                    this.hinters.push(n),
                        setTimeout((function() {
                                var e = t.hinters.indexOf(n);
                                e > -1 && t.hinters.splice(e, 1)
                            }
                        ), n.timeout)
                }
            }]),
                n
        }(c.default)
            , j = N = h([A.b], N)
            , v = n("KHd+")
            , w = Object(v.a)(j, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "snake-hinter p-fixed"
                }, [n("transition-group", {
                    staticClass: "container",
                    attrs: {
                        "leave-active-class": "a-move-out-top",
                        tag: "div"
                    }
                }, e._l(e.hinters, (function(t) {
                        return n("div", {
                            key: t.id,
                            staticClass: "snake-hinter-item a-move-in-top ts-dot-2",
                            style: e.createStyle(t.type)
                        }, [n("span", {
                            staticClass: "text"
                        }, [e._v(e._s(t.text))])])
                    }
                )), 0)], 1)
            }
        ), [], !1, null, "08fec2bd", null).exports
            , I = null
            , T = !1
            , m = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "hint",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info"
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3
                        , i = I.snakeHinter;
                    i.addHinter({
                        text: e,
                        type: t,
                        timeout: n
                    })
                }
            }, {
                key: "info",
                value: function(e, t) {
                    this.hint(e, "info", t)
                }
            }, {
                key: "success",
                value: function(e, t) {
                    this.hint(e, "success", t)
                }
            }, {
                key: "warning",
                value: function(e, t) {
                    this.hint(e, "warning", t)
                }
            }, {
                key: "error",
                value: function(e, t) {
                    this.hint(e, "error", t)
                }
            }, {
                key: "init",
                value: function() {
                    if (!T) {
                        I = new c.default({
                            components: {
                                SnakeHinter: w
                            },
                            template: '<div><snake-hinter ref="snakeHinter"></snake-hinter></div>',
                            computed: {
                                snakeHinter: function() {
                                    return this.$refs.snakeHinter
                                }
                            }
                        });
                        var e = document.createElement("div");
                        e.id = "hinter-element-" + s.d.randomString(),
                            document.body.appendChild(e),
                            I.$mount(e),
                            T = !0
                    }
                }
            }]),
                e
        }()
    },
    B7eG: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", (function() {
                return i
            }
        )),
            function(e) {
                e[e.NotAvailable = -1] = "NotAvailable",
                    e[e.SinglePage = 0] = "SinglePage",
                    e[e.DoublePage = 1] = "DoublePage"
            }(i || (i = {}))
    },
    BVgE: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return j
            }
        ));
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("o0o1")
            , a = n.n(o)
            , s = n("yXPU")
            , c = n.n(s)
            , u = n("lwsE")
            , l = n.n(u)
            , d = n("W8MJ")
            , M = n.n(d)
            , p = n("qQS4")
            , f = n("Ymyz")
            , y = n("AMMt")
            , g = n("91CG")
            , A = n("ZojZ")
            , D = n("wahp");
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var j = function() {
            function e() {
                l()(this, e)
            }
            var t, n;
            return M()(e, null, [{
                key: "getNewbieInfo",
                value: function() {
                    return g.a.post({
                        url: "/twirp/user.v1.User/GetNewbieInfo",
                        type: f.a
                    })
                }
            }, {
                key: "receivePcNewbieGift",
                value: (n = c()(a.a.mark((function e() {
                            var t, n, i, r;
                            return a.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    g.a.post({
                                                        url: "/twirp/user.v1.User/GetPCNewbieGift",
                                                        type: f.b
                                                    });
                                            case 2:
                                                return t = e.sent,
                                                    n = t.data,
                                                    i = t.error,
                                                    r = t.code,
                                                    i ? (y.a.error("新人礼包领取失败，请稍后再试，非常抱歉 " + Object(p.sad)()),
                                                        A.a.error("新人礼包领取失败:", i)) : 1 === r ? y.a.warning("领取前请先绑定手机号喔 " + Object(p.happy)()) : 2 === r ? y.a.warning("您已经领取过新人礼包了，不能再领取了 " + Object(p.happy)()) : 0 !== r ? (y.a.warning("新人礼包领取失败，请稍后再试，非常抱歉 " + Object(p.sad)()),
                                                        A.a.error("新人礼包领取失败: 服务器返回状态码 ".concat(r))) : y.a.success("领取成功！您领取了 ".concat(n.amount, " 张漫读券喔 ").concat(Object(p.happy)())),
                                                    e.abrupt("return", t);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function() {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "setNewbieStoreData",
                value: function(e) {
                    D.a.next((function(t) {
                            return N(N({}, t), e)
                        }
                    ))
                }
            }, {
                key: "refreshNewbieInfoStore",
                value: (t = c()(a.a.mark((function t() {
                            var n, i, r, o, s;
                            return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null,
                                                    code: 0
                                                },
                                                    this.setNewbieStoreData({
                                                        isInLoad: !0,
                                                        isLoadFailed: !1
                                                    }),
                                                    t.next = 4,
                                                    e.getNewbieInfo();
                                            case 4:
                                                if (i = t.sent,
                                                    r = i.data,
                                                    o = i.error,
                                                    s = i.code,
                                                    this.setNewbieStoreData({
                                                        isInLoad: !1
                                                    }),
                                                    !o) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return this.setNewbieStoreData({
                                                    isLoadFailed: !0
                                                }),
                                                    n.error = o,
                                                    A.a.error("用户新人礼包数据获取失败:", o),
                                                    t.abrupt("return", n);
                                            case 14:
                                                return n.code = s,
                                                    0 === s ? this.setNewbieStoreData(N(N({}, r), {}, {
                                                        isFirstLoadFinished: !0
                                                    })) : A.a.error("用户新人礼包数据获取失败: 服务器返回状态码 ".concat(s)),
                                                    t.abrupt("return", n);
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }()
    },
    BweS: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return y
            }
        )),
            n.d(t, "b", (function() {
                    return r
                }
            ));
        var i, r, o = n("o0o1"), a = n.n(o), s = n("yXPU"), c = n.n(s), u = n("lSNA"), l = n.n(u), d = n("stNh"), M = n("wLAv"), p = {};
        !function(e) {
            e.HomePage = "homePage",
                e.ClassifyPage = "classifyPage",
                e.DetailPage = "detailPage",
                e.ReaderPage = "readerPage"
        }(r || (r = {}));
        var f = (i = {},
            l()(i, r.HomePage, "777.14.loading.track"),
            l()(i, r.ClassifyPage, "777.15.loading.track"),
            l()(i, r.DetailPage, "777.16.loading.track"),
            l()(i, r.ReaderPage, "777.17.loading.track"),
            i);
        function y(e) {
            return p[e] || (p[e] = {
                startTs: 0,
                endTs: 0,
                assignCount: 0,
                dispatchedCount: 0,
                isSent: !1
            }),
                p[e].assignCount++,
            d.a.isDev && console.log("[InitPerformance] assigned:", p[e].assignCount),
                function(t, n, i) {
                    var r = t[n];
                    return {
                        enumerable: !0,
                        configurable: !0,
                        value: function() {
                            var t = c()(a.a.mark((function t() {
                                    var n, i, o, s, c, u, l, M = arguments;
                                    return a.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        for (n = Date.now(),
                                                             (0 === (i = p[e]).startTs || n < i.startTs) && (i.startTs = n),
                                                                 o = M.length,
                                                                 s = new Array(o),
                                                                 c = 0; c < o; c++)
                                                            s[c] = M[c];
                                                        return t.next = 6,
                                                            r.call.apply(r, [this].concat(s));
                                                    case 6:
                                                        return u = t.sent,
                                                            l = Date.now(),
                                                        (0 === i.endTs || l > i.endTs) && (i.endTs = l),
                                                            i.dispatchedCount++,
                                                        d.a.isDev && console.log("[InitPerformance] dispatched:", i.dispatchedCount),
                                                        i.dispatchedCount >= i.assignCount && !i.isSent && (g(e),
                                                            i.isSent = !0),
                                                            t.abrupt("return", u);
                                                    case 13:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t, this)
                                }
                            )));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }
                }
        }
        function g(e) {
            var t = f[e]
                , n = "002558"
                , i = p[e].endTs - p[e].startTs;
            d.a.isDev && console.log("[InitPerformance] Send: ".concat(t, ", ").concat(n, ", ").concat(i)),
            d.a.isProduction && t && i > 0 && M.a.sendEvent({
                spmId: t,
                logId: n,
                msg: {
                    time_cost: i
                }
            })
        }
    },
    COaM: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
                return m
            }
        )),
            n.d(t, "i", (function() {
                    return r
                }
            )),
            n.d(t, "g", (function() {
                    return o
                }
            )),
            n.d(t, "f", (function() {
                    return a
                }
            )),
            n.d(t, "e", (function() {
                    return s
                }
            )),
            n.d(t, "d", (function() {
                    return u
                }
            )),
            n.d(t, "b", (function() {
                    return l
                }
            )),
            n.d(t, "a", (function() {
                    return d
                }
            )),
            n.d(t, "h", (function() {
                    return c
                }
            ));
        var i, r, o, a, s, c, u, l, d, M, p = n("lwsE"), f = n.n(p), y = n("W8MJ"), g = n.n(y), A = n("cDf5"), D = n.n(A), h = n("1aRO"), N = n("es5R"), j = n("XrP9"), v = n("ZS4h"), w = n("XGqN"), I = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : D()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, T = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : D()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }, m = function() {
            function e() {
                f()(this, e),
                    this._id = 0,
                    this._seasonId = 0,
                    this.authorName = [],
                    this.episodeList = [],
                    this._title = "",
                    this.comicType = i.Manga,
                    this._type = r.comic,
                    this.evaluate = "",
                    this.defaultReaderMode = o.Manga,
                    this.horizontalCover = "",
                    this.verticalCover = "",
                    this.squareCover = "",
                    this.onShowStatus = s.Incoming,
                    this.status = a.Online,
                    this.releaseTime = "",
                    this.payMode = c.Free,
                    this.isLimited = N.a.True,
                    this.lastReadEpisodeOrder = 0,
                    this._lastReadEpisodeShortTitle = "",
                    this.lastReadEpisodeId = 0,
                    this.latestEpisodeOrder = 0,
                    this._latestEpisodeShortTitle = "",
                    this._allowedReaderMode = 0,
                    this.styles = [],
                    this.total = 0,
                    this.updateSchedule = "",
                    this._isFavourite = N.a.False,
                    this.discountType = u.None,
                    this.discount = 0,
                    this.discountEndTime = "",
                    this.epDiscountType = l.NoDiscount,
                    this.batchDiscountType = d.NoDiscount,
                    this.hasFavActivity = !1,
                    this.favFreeAmount = 0,
                    this.allowWaitFree = !1,
                    this.waitHour = 0,
                    this._waitFreeAt = "",
                    this.payForNew = 0,
                    this.episodeDisplayType = M.InEpisode,
                    this.noDiscount = !1,
                    this.isJapanComic = !1
            }
            return g()(e, [{
                key: "id",
                get: function() {
                    return this._id || this._seasonId
                }
            }, {
                key: "title",
                get: function() {
                    return this._title.trim()
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }, {
                key: "lastReadEpisodeShortTitle",
                get: function() {
                    return this._lastReadEpisodeShortTitle.trim()
                }
            }, {
                key: "lastReadEpisodeShortTitleFormatted",
                get: function() {
                    return v.a.formatShortTitle(this._lastReadEpisodeShortTitle)
                }
            }, {
                key: "lastReadEpisodeShortTitleFormattedPrefix",
                get: function() {
                    return v.a.formatShortTitle(this._lastReadEpisodeShortTitle, "第")
                }
            }, {
                key: "latestEpisodeShortTitle",
                get: function() {
                    return this._latestEpisodeShortTitle
                }
            }, {
                key: "latestEpisodeShortTitleFormatted",
                get: function() {
                    return v.a.formatShortTitle(this._latestEpisodeShortTitle, "", this.type === r.video ? "集" : "话")
                }
            }, {
                key: "allowedReaderMode",
                get: function() {
                    var e = this;
                    return [o.Landscape, o.Manga, o.Horizontal, o.Scrolling].filter((function(t) {
                            return (e._allowedReaderMode | t) === e._allowedReaderMode
                        }
                    ))
                }
            }, {
                key: "isFavourite",
                get: function() {
                    return this._isFavourite === N.a.True
                }
            }, {
                key: "waitFreeAt",
                get: function() {
                    return j.a.convertServerDateToDate(this._waitFreeAt)
                }
            }, {
                key: "payForNewAvail",
                get: function() {
                    return this.payForNew > 0
                }
            }, {
                key: "onShowStatusText",
                get: function() {
                    switch (this.onShowStatus) {
                        case s.Incoming:
                            return "未开刊";
                        case s.Finished:
                            return "已完结";
                        case s.OnShow:
                            return "连载中"
                    }
                }
            }, {
                key: "episodeStatusText",
                get: function() {
                    switch (this.onShowStatus) {
                        case s.Finished:
                            return "[完结] 共 ".concat(this.total, " ").concat(this.type === r.video ? "集" : "话");
                        case s.Incoming:
                            return "未开刊";
                        case s.OnShow:
                            return "更新至 ".concat(this.latestEpisodeShortTitleFormatted || "--")
                    }
                }
            }]),
                e
        }();
        I([Object(h.a)("id"), T("design:type", Number)], m.prototype, "_id", void 0),
            I([Object(h.a)("season_id"), T("design:type", Number)], m.prototype, "_seasonId", void 0),
            I([Object(h.a)("author_name"), T("design:type", Array)], m.prototype, "authorName", void 0),
            I([Object(h.a)({
                name: "ep_list",
                type: w.a
            }), T("design:type", Array)], m.prototype, "episodeList", void 0),
            I([Object(h.a)("title"), T("design:type", String)], m.prototype, "_title", void 0),
            I([Object(h.a)("comic_type"), T("design:type", Number)], m.prototype, "comicType", void 0),
            I([Object(h.a)("type"), T("design:type", Number)], m.prototype, "_type", void 0),
            I([Object(h.a)("evaluate"), T("design:type", String)], m.prototype, "evaluate", void 0),
            I([Object(h.a)("page_default"), T("design:type", Number)], m.prototype, "defaultReaderMode", void 0),
            I([Object(h.a)("horizontal_cover"), T("design:type", String)], m.prototype, "horizontalCover", void 0),
            I([Object(h.a)("vertical_cover"), T("design:type", String)], m.prototype, "verticalCover", void 0),
            I([Object(h.a)("square_cover"), T("design:type", String)], m.prototype, "squareCover", void 0),
            I([Object(h.a)("is_finish"), T("design:type", Number)], m.prototype, "onShowStatus", void 0),
            I([Object(h.a)("status"), T("design:type", Number)], m.prototype, "status", void 0),
            I([Object(h.a)("release_time"), T("design:type", String)], m.prototype, "releaseTime", void 0),
            I([Object(h.a)("pay_mode"), T("design:type", Number)], m.prototype, "payMode", void 0),
            I([Object(h.a)("is_limit"), T("design:type", Number)], m.prototype, "isLimited", void 0),
            I([Object(h.a)("read_order"), T("design:type", Number)], m.prototype, "lastReadEpisodeOrder", void 0),
            I([Object(h.a)("read_short_title"), T("design:type", String)], m.prototype, "_lastReadEpisodeShortTitle", void 0),
            I([Object(h.a)("read_epid"), T("design:type", Number)], m.prototype, "lastReadEpisodeId", void 0),
            I([Object(h.a)("last_ord"), T("design:type", Number)], m.prototype, "latestEpisodeOrder", void 0),
            I([Object(h.a)("last_short_title"), T("design:type", String)], m.prototype, "_latestEpisodeShortTitle", void 0),
            I([Object(h.a)("page_allow"), T("design:type", Number)], m.prototype, "_allowedReaderMode", void 0),
            I([Object(h.a)(), T("design:type", Array)], m.prototype, "styles", void 0),
            I([Object(h.a)("total"), T("design:type", Number)], m.prototype, "total", void 0),
            I([Object(h.a)("renewal_time"), T("design:type", String)], m.prototype, "updateSchedule", void 0),
            I([Object(h.a)("fav"), T("design:type", Number)], m.prototype, "_isFavourite", void 0),
            I([Object(h.a)("discount_type"), T("design:type", Number)], m.prototype, "discountType", void 0),
            I([Object(h.a)("discount"), T("design:type", Number)], m.prototype, "discount", void 0),
            I([Object(h.a)("discount_end"), T("design:type", String)], m.prototype, "discountEndTime", void 0),
            I([Object(h.a)("ep_discount_type"), T("design:type", Number)], m.prototype, "epDiscountType", void 0),
            I([Object(h.a)("batch_discount_type"), T("design:type", Number)], m.prototype, "batchDiscountType", void 0),
            I([Object(h.a)("has_fav_activity"), T("design:type", Boolean)], m.prototype, "hasFavActivity", void 0),
            I([Object(h.a)("fav_free_amount"), T("design:type", Number)], m.prototype, "favFreeAmount", void 0),
            I([Object(h.a)("allow_wait_free"), T("design:type", Boolean)], m.prototype, "allowWaitFree", void 0),
            I([Object(h.a)("wait_hour"), T("design:type", Number)], m.prototype, "waitHour", void 0),
            I([Object(h.a)("wait_free_at"), T("design:type", String)], m.prototype, "_waitFreeAt", void 0),
            I([Object(h.a)("pay_for_new"), T("design:type", Number)], m.prototype, "payForNew", void 0),
            I([Object(h.a)("show_type"), T("design:type", Number)], m.prototype, "episodeDisplayType", void 0),
            I([Object(h.a)("no_discount"), T("design:type", Boolean)], m.prototype, "noDiscount", void 0),
            I([Object(h.a)("japan_comic"), T("design:type", Boolean)], m.prototype, "isJapanComic", void 0),
            m = I([Object(h.b)()], m),
            function(e) {
                e[e.OnePage = 0] = "OnePage",
                    e[e.Manga = 1] = "Manga"
            }(i || (i = {})),
            function(e) {
                e[e.comic = 0] = "comic",
                    e[e.video = 1] = "video"
            }(r || (r = {})),
            function(e) {
                e[e.NotAvailable = -1] = "NotAvailable",
                    e[e.Scrolling = 1] = "Scrolling",
                    e[e.Horizontal = 2] = "Horizontal",
                    e[e.Manga = 4] = "Manga",
                    e[e.Landscape = 8] = "Landscape"
            }(o || (o = {})),
            function(e) {
                e[e.Offline = -1] = "Offline",
                    e[e.Online = 0] = "Online"
            }(a || (a = {})),
            function(e) {
                e[e.OnShow = 0] = "OnShow",
                    e[e.Finished = 1] = "Finished",
                    e[e.Incoming = -1] = "Incoming"
            }(s || (s = {})),
            function(e) {
                e[e.Free = 0] = "Free",
                    e[e.InEpisode = 1] = "InEpisode",
                    e[e.InVolume = 2] = "InVolume"
            }(c || (c = {})),
            function(e) {
                e[e.None = 0] = "None",
                    e[e.Discount = 1] = "Discount",
                    e[e.FreeForLimit = 2] = "FreeForLimit",
                    e[e.FreeForAppointChapters = 3] = "FreeForAppointChapters"
            }(u || (u = {})),
            function(e) {
                e[e.NoDiscount = 0] = "NoDiscount",
                    e[e.Discount = 1] = "Discount"
            }(l || (l = {})),
            function(e) {
                e[e.NoDiscount = 0] = "NoDiscount",
                    e[e.Discount = 1] = "Discount"
            }(d || (d = {})),
            function(e) {
                e[e.InEpisode = 0] = "InEpisode",
                    e[e.InVolume = 1] = "InVolume"
            }(M || (M = {}))
    },
    CnmV: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return b
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("lSNA")
            , a = n.n(o)
            , s = n("yXPU")
            , c = n.n(s)
            , u = n("lwsE")
            , l = n.n(u)
            , d = n("W8MJ")
            , M = n.n(d)
            , p = n("bten")
            , f = n("qQS4")
            , y = n("ZcLj")
            , g = n("Qyje")
            , A = n.n(g)
            , D = n("stNh")
            , h = n("AMMt")
            , N = n("otMs")
            , j = n("6MYt")
            , v = new N.a;
        v.axios.interceptors.request.use((function(e) {
                return e.withCredentials = !0,
                    e
            }
        ));
        var w = Object(j.a)(v)
            , I = n("ZojZ")
            , T = n("BVgE")
            , m = n("IdHk");
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                        a()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var z = []
            , b = function() {
            function e() {
                l()(this, e)
            }
            var t, n;
            return M()(e, null, [{
                key: "getUserData",
                value: function() {
                    return Object(p.b)()
                }
            }, {
                key: "refreshUserData",
                value: (n = c()(r.a.mark((function e() {
                            var t, n, i, o, a, s, c, u;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null,
                                                    code: 0
                                                },
                                                    (t = function(e) {
                                                            m.a.next((function(t) {
                                                                    return O(O({}, t), e)
                                                                }
                                                            ))
                                                        }
                                                    )({
                                                        isLoadFailed: !1,
                                                        isInLoad: !0
                                                    }),
                                                    e.next = 5,
                                                    this.getUserData();
                                            case 5:
                                                if (i = e.sent,
                                                    o = i.data,
                                                    a = i.error,
                                                    s = i.code,
                                                    t({
                                                        isInLoad: !1
                                                    }),
                                                    !a) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return t({
                                                    isLoadFailed: !0
                                                }),
                                                    n.error = a,
                                                    h.a.error("用户数据获取失败，可能会影响您的使用，请刷新页面，非常抱歉 " + f.sad()),
                                                    I.a.error("用户数据获取失败:", a),
                                                    e.abrupt("return", n);
                                            case 16:
                                                if (n.code = s,
                                                -101 !== s) {
                                                    e.next = 21;
                                                    break
                                                }
                                                return I.a.info("用户数据载入失败: 账号未登录."),
                                                    t({
                                                        isFirstLoadFinished: !0
                                                    }),
                                                    e.abrupt("return", n);
                                            case 21:
                                                if (0 === s) {
                                                    e.next = 25;
                                                    break
                                                }
                                                return t({
                                                    isLoadFailed: !0
                                                }),
                                                    I.a.error("用户数据载入失败: 服务器返回状态码 ".concat(s)),
                                                    e.abrupt("return", n);
                                            case 25:
                                                return t({
                                                    data: o,
                                                    isFirstLoadFinished: !0
                                                }),
                                                    e.next = 28,
                                                    T.a.refreshNewbieInfoStore();
                                            case 28:
                                                if (c = e.sent,
                                                    !(u = c.error)) {
                                                    e.next = 33;
                                                    break
                                                }
                                                return n.error = u,
                                                    e.abrupt("return", n);
                                            case 33:
                                                return e.abrupt("return", n);
                                            case 34:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "checkLogin",
                value: function() {
                    var e = !1;
                    return m.b.subscribe((function(t) {
                            var n;
                            e = !0 === (null == t || null === (n = t.data) || void 0 === n ? void 0 : n.isLogin)
                        }
                    )).unsubscribe(),
                        e
                }
            }, {
                key: "logout",
                value: (t = c()(r.a.mark((function e() {
                            var t, n, i, o, a, s;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return t = A.a.stringify({
                                                    biliCSRF: y.a.getCookie("bili_jct")
                                                }),
                                                    e.next = 3,
                                                    w.post({
                                                        url: "//".concat(D.a.isUatBuild ? "uat-" : "", "passport.bilibili.com/login/exit/v2?").concat(t)
                                                    });
                                            case 3:
                                                if (n = e.sent,
                                                    i = n.data,
                                                    o = n.error,
                                                    a = n.code,
                                                    !o) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return h.a.error("退出登录失败, 请稍后再试, 非常抱歉 " + f.sad()),
                                                    I.a.error("账号退出失败:", o),
                                                    e.abrupt("return");
                                            case 11:
                                                if (0 === a) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return h.a.warning("退出登录失败, 请稍后再试, 非常抱歉 " + f.shock()),
                                                    I.a.warn("账号退出失败: 服务器返回状态码 " + a),
                                                    e.abrupt("return");
                                            case 15:
                                                z.forEach((function(e) {
                                                        return "function" == typeof e && e()
                                                    }
                                                )),
                                                    "string" == typeof (s = i.redirectUrl) && s ? window.location.href = s : window.location.reload();
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "onLogout",
                value: function(e) {
                    z.includes(e) || z.push(e)
                }
            }]),
                e
        }()
    },
    E7aQ: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", (function() {
                return i
            }
        )),
            function(e) {
                e.Light = "light",
                    e.Dark = "dark"
            }(i || (i = {}))
    },
    FmG3: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+cmVhZGVyX29wdGlvbl9pY288L3RpdGxlPjxwYXRoIGQ9Ik0xMi44NSwxLjY4bDcuNjYsNC40M2ExLjY4LDEuNjgsMCwwLDEsLjg1LDEuNDd2OC44NGExLjY4LDEuNjgsMCwwLDEtLjg1LDEuNDdsLTcuNjYsNC40M2ExLjcyLDEuNzIsMCwwLDEtMS43LDBMMy40OSwxNy44OWExLjY4LDEuNjgsMCwwLDEtLjg1LTEuNDdWNy41OGExLjY4LDEuNjgsMCwwLDEsLjg1LTEuNDdsNy42Ni00LjQzQTEuNzIsMS43MiwwLDAsMSwxMi44NSwxLjY4Wm0tLjcsMS4yMWEuMzIuMzIsMCwwLDAtLjMsMEw0LjE5LDcuMzJBLjMuMywwLDAsMCw0LDcuNTh2OC44NGEuMy4zLDAsMCwwLC4xNS4yNmw3LjY2LDQuNDNhLjMyLjMyLDAsMCwwLC4zLDBsNy42Ni00LjQzYS4zLjMsMCwwLDAsLjE1LS4yNlY3LjU4YS4zLjMsMCwwLDAtLjE1LS4yNlpNMTIsMTUuN0EzLjcsMy43LDAsMSwxLDE1LjcsMTIsMy43LDMuNywwLDAsMSwxMiwxNS43Wm0wLTEuNEEyLjMsMi4zLDAsMSwwLDkuNywxMiwyLjMsMi4zLDAsMCwwLDEyLDE0LjNaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eTowLjg5OTk5OTk3NjE1ODE0MjE7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48L3N2Zz4="
    },
    GW4A: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAACUtJREFUaAXtWVtsXEcZnnN212t7124S0mA7tHH6EFWkIlFdARLiocBLlVA1GMcoiYxoq4b2ASGV9gUJoki8gPpaWoSEEDRy7bomohE3qQiqQEHBid2kjSgU28R26hg79u7ae/Mu3/ef+Y/nbHaTtggJCf/S2Zn/fpnLmTNrTAPwSO97ZbLqraNTxlMJ2jga09axy3QljOlsAVI1ZmbJGJ+M7JVpIZDI583z5wfE1CN/qFY7m6HRGjDeXTZGTF17488Hr4E2AT9CoK9G4D34wrm+ZPv2Ic+JaKi/24unu+4aak5tNT1boctQ4dz/6eS6f+r+bZ5hDjai+Ywxg8e6Y97R3yxVm1u2mHtv32C+9vqUkXAffP5PB6ilEb38tU+cgdj7A7F05PdL1WTrFvHfjhrtaYcRxkKw7dsowOyUdU36l8+WqrF43HSxYqjx6AVEbeHQx9rM785NmaFj3Z7UHHQv5iNSrYlaVw3gzaltgklIR3+1WE2iVh4YVdSKLZMNcdYPT+7qZE5t/A+1kkPfmcmqlM/GKjmwz1xsC8Hyi/3dCRnEdOcuSZIC93GSECjMh4B2bCYY8KCssBJatQIi6PwIH7gorPzt0skqrAgRLQdNnnEMHvDzM8b88HPBmEkONPTw61CBp57t1iwENaTzV0RBZMXD4dFJEZYEIafWRyeC6dEE0d7vjz9OU6L18B8D6+Jhx4ZlCogXhjUFLw94nlSJsXNKkDk2Z6cEV48Wg+GRDxCF+bFXe7xEulMoumAEwY9dylMXf/FbJf2ftTIKzLn/13PV1u0dYdXJ0EKLEAvrPDIQFq/HX7ny9sjwwJ4vyiDQQawJewVHiXZUEW0Xtg/ZpilEugsubvtXMZVmVzClY029FA0dFBevnYGDA8n0lsCJdRYahQF3n3L9cM8irBZhHDt/9uqUuXj6qSRpkh07Cv1nZqutH+oMGDC6E6+MDr5oFOpETdbymjF/X0A7/eYzLz2y9xsqrpuk4Hv7+priieaNlY0sZBxUuoFxstsQL8clnmh9QsXZhhkcPj1dTe24I4xcd4LOlH3xuVquI9IdfOKKMYXcmsktTJ8afvTuo2EGiZa2GyOHojhS4zTkGJO+4pa3I40smlqM7zcfoVo4yKXMskkk0xh9kCAsqaFEs5wVGDgB4ALkW4MhXXG0+ZVFk5t/Z7+V3mw2K/AfViBcaHj7lzA9g2nLaQjDcpKhA2cKSl+dctqSR3BkSisLh0eP3zdMshjs/dlfX0p37YqLkKMUznXXyM34lrcaTw7BtgQvDvw4tlYYCVctWLoH7cc5LcZQFNQZ8Zp+Bfg4XtJxbv0WgpIQAVPfA6Jo8fdqnCZ8BqZ2SADIXgR6RTIgBQLyoJEcSSOQruD2laYteUzFgmRw6cdPtewd+F4h3bFLyB4to56SkRW81cuGYhMoTyF73RSzC+H5XTK4NDxcHPp8t5+ZxbGbzm0AYQYbAVl3NzbT+OopFstmbWHm5NDAnoMqsTEGMLuezz0DxpNhmRxnh/YHr0V1HrbW0r9w/C5cv2ZGHr3n22qcbfg+IFIpFMZ1kCT62shdPEyPmgFUyiXthm3EQVP71udZIj46TUNJ1zj7Lg6U/hLNbYav3VDH0gV/6Cfjj7d17X420Rq82ZgJHd1rT6ujPDzXATlRQG4dk2ICB+sMThQvDnQzcAlBEu0duvxCasedR+JJHB9Idp6eD6uotS5qtq+Npa3h2HIZMyk7/08zOHCn2JYS+YnmwDgVHOMiUc+gGlZ5i7fgW5r6LJWCzCIxRIo1pri7DkSh1lktbm2oPtFgmlaqORhPudGzT8Gxq/jhJkagQdJtKzjpyg9bCgQgJVqd+cenCjgJiGfwdKqqQRGlYXZuxodApVw2hVUcTi2IDvs9j51o3fnxB+6XD33lsuWniwWmq3cL7goNieCX8tm5nz/92THV2Ww3K7BZgf92BcJl7Driku765KfvDi8XXKbbd5a4Sw77uuZDQp3OrWxApbqanZt967XLf/nBidVaC5EEDj736r6Wj9x1IZFqM4lUe/ApRYmaTY5GhKx0iqAfylHA4oFgdJMk+wZ9uwtLQNQl2LayXjal3AqejMnNvbP/lSc/Mx4I6KvAYi137D7LwJPt9prMCapegOqMPOnTp9MXsxb/QPr0D8O84/TbcD6ueibdsfssqPiMDSCyoUMgZeTECCaV+diGAQpqacrrwiUD76frgsrWY75Hnl6rBAXy4BYxOhBNwDLkxKVCcKTV1aCVJXijQBrRqdyI14Ae8V8jEzkyVkr5U+VsxpTWcCdDQUc4nBqk6amhUTCOHkUi0IhXh76GTeDdLLTBY0zl1YxhjK69MDmH6D00OP7VROttzza3bzM8oipIEq4j9GUKYRoJWF6jbxS1U9vqRZnSebx9ax5BY4cqYuEWMoumnF1+YuT4vucg40awMTtUWVsevvce++71ROq2lmSbs6hVAGaYPf+b0f9nlBVpI+4inACp4cv36SyiBL2YWcLOs7z2xumnt/Dbq4529LPGFaBCcXnpOLcuAXXEllMIre4s0ZoE4hEdhxTSaUdtOnx+f+m1QglTJp9ZOt4oeKpF1oBjR7p+U3KfH8NBXx05TmXuAa83B0VedWqNNqJbuSb7tS9J+AncFCT31Zpw8br+IeD1Dl484SfT30rdvtP4+GPKDYpKuqhlCrkbGwJs9AnnOnb7kTUA/elFYzgS6zj9ry7MmHI+e3LksXtO0K2rx34kAc77j37pOy97saYDmPuGN9cCqmbbSAK8qmUCKoPuB0rA0afPtYIx/JuPC7qQwYVEbtlUy8Uzl375zS+4UyqSQP/o5Ho81e7Lm1gN1gTNQCUBOOH7ogvvxA7dhejZBbXh0ur1G8mBzr96+R8qfeVXsKhXVyqDX+kOr5UiLzLI+PImVoO2dStOkk4fxiIL+f0E5cqqH5emfcuLYZXKixW4h1MC/EXWbQQJ57lECQUa0z5auQ+hIcdJFpubc58VcKhzK2gkQ7rl0W42HxjSItaajYzAeqk4Eivm5b6RgmLHGiNez0gGc/UCv/0JkL1BxtKUH46eY1cDvqk+5CvFPD7riyNiy/6ExVTioR+d60u0b+frOriVJUOd1bYuD/3wDKVypLkylh4mAZ7u+RQLk6+n75ty4frCkdGvB9fHlN+EzQpsVsCYfwPBbAoWgc/cWAAAAABJRU5ErkJggg=="
    },
    GdVg: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
                return s
            }
        )),
            n.d(t, "a", (function() {
                    return a
                }
            ));
        var i = n("26FU")
            , r = n("dC0D")
            , o = new (n("+r91").a)
            , a = new i.a((function(e) {
                return e
            }
        ))
            , s = a.pipe(Object(r.a)((function(e, t) {
                return t(e)
            }
        ), o))
    },
    Hsxi: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICB3aWR0aD0iMzYwcHgiIGhlaWdodD0iMzYwcHgiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgIGZpbGw9Im5vbmUiCiAgICAgICAgZD0iTTAuMDAwLDAuMDAwIEwzNjAuMDAwLDAuMDAwIEwzNjAuMDAwLDM2MC4wMDAgTDAuMDAwLDM2MC4wMDAgTDAuMDAwLDAuMDAwIFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBmaWxsPSJyZ2IoMjU1LCA3NywgNTkpIgogICAgICAgIGQ9Ik0yMDguMDAwLDM1NS4wMDAgTDE1My4wMDAsMzU1LjAwMCBDMTUwLjIzOSwzNTUuMDAwIDE0OC4wMDAsMzUyLjc2MSAxNDguMDAwLDM1MC4wMDAgTDE0OC4wMDAsMjk1LjQwNiBDMTQ4LjAwMCwyOTIuNjQ1IDE1MC4yMzksMjkwLjQwNiAxNTMuMDAwLDI5MC40MDYgTDIwOC4wMDAsMjkwLjQwNiBDMjEwLjc2MSwyOTAuNDA2IDIxMy4wMDAsMjkyLjY0NSAyMTMuMDAwLDI5NS40MDYgTDIxMy4wMDAsMzUwLjAwMCBDMjEzLjAwMCwzNTIuNzYxIDIxMC43NjEsMzU1LjAwMCAyMDguMDAwLDM1NS4wMDAgWk0yMDguMDAwLDI1My40MjcgTDE1My4wMDAsMjUzLjQyNyBDMTUwLjIzOSwyNTMuNDI3IDE0OC4wMDAsMjUxLjE4OCAxNDguMDAwLDI0OC40MjcgTDE0OC4wMDAsMTAuMDAwIEMxNDguMDAwLDcuMjM5IDE1MC4yMzksNS4wMDAgMTUzLjAwMCw1LjAwMCBMMjA4LjAwMCw1LjAwMCBDMjEwLjc2MSw1LjAwMCAyMTMuMDAwLDcuMjM5IDIxMy4wMDAsMTAuMDAwIEwyMTMuMDAwLDI0OC40MjcgQzIxMy4wMDAsMjUxLjE4OCAyMTAuNzYxLDI1My40MjcgMjA4LjAwMCwyNTMuNDI3IFoiLz4KPC9zdmc+Cg=="
    },
    IdHk: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
                return c
            }
        )),
            n.d(t, "a", (function() {
                    return s
                }
            ));
        var i = n("bten")
            , r = n("26FU")
            , o = n("dC0D")
            , a = {
            data: new i.a,
            isFirstLoadFinished: !1,
            isLoadFailed: !1,
            isInLoad: !1
        }
            , s = new r.a((function(e) {
                return e
            }
        ))
            , c = s.pipe(Object(o.a)((function(e, t) {
                return t(e)
            }
        ), a))
    },
    MGnk: function(e, t) {
        e.exports = "data:image/png;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A1qEAANahAADWoQAG1qEAb9ahAMvWoQD01qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD01qEAy9ahAG/WoQAG1qEAANahAADWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANDWoQAb1qEAANahAAfWoQDQ1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANHWoQAH1qEAbtahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAG7WoQDH1qEA/9ahAP/WoQD/1qEAtdahABjWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABvWoQC11qEA/9ahAP/WoQD/1qEAx9ahAPnWoQD/1qEA/9ahAP/WoQAZ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABjWoQD/1qEA/9ahAP/WoQDz1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA+dahAP/WoQD/1qEA/9ahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAGdahAP/WoQD/1qEA/9ahAPjWoQDH1qEA/9ahAP/WoQD/1qEAttahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABnWoQC21qEA/9ahAP/WoQD/1qEAx9ahAG3WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQBt1qEABtahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA0NahAAfWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAM/WoQAb1qEAANahAADWoQAA1qEABtahAG7WoQDH1qEA89ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA89ahAMfWoQBu1qEABtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAAbWoQDF1qEA/9ahAP/WoQD/1qEA/9ahAMXWoQAP1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAAbWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAYtahAP/WoQD/1qEA/9ahAP/WoQDF1qEADtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAY9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBf1qEA/9ahAP/WoQD/1qEAxdahAA7WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQBf1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAATWoQCg1qEA6tahAKjWoQAO1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAKjWoQDr1qEAoNahAATWoQAA1qEAANahAADWoQAA1qEAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////////AAAADgAAAAQAAAAAAAAAAA///wAf//+AP///wD///8A////AP///wDw/w8A8P8PAPD/DwDw/w8A8P8PAPD/DwD///8A////AH///gA///wAAAAAAAAAAAgAAAAcAAAAP8A8A/+AfgH/gP8B/4H/gf+D/8H/////8="
    },
    Naq3: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+bmF2X2Nsb3NlX2ljbzwvdGl0bGU+PHBhdGggZD0iTTEyLDEwLjg3bDUuNDMtNS40NGEuODEuODEsMCwwLDEsMS4xNCwxLjE0TDEzLjEzLDEybDUuNDQsNS40M2EuODEuODEsMCwwLDEtMS4xNCwxLjE0TDEyLDEzLjEzLDYuNTcsMTguNTdhLjgxLjgxLDAsMCwxLTEuMTQtMS4xNEwxMC44NywxMiw1LjQzLDYuNTdBLjgxLjgxLDAsMCwxLDYuNTcsNS40M1oiIHN0eWxlPSJmaWxsOiM2YzcyN2UiLz48L3N2Zz4="
    },
    ODuK: function(e, t, n) {
        "use strict";
        n.r(t);
        n("pNMO"),
            n("4Brf"),
            n("tjZM"),
            n("3I1R"),
            n("7+kd"),
            n("0oug"),
            n("KhsS"),
            n("gOCb"),
            n("a57n"),
            n("GXvd"),
            n("I1Gw"),
            n("gXIK"),
            n("lEou"),
            n("gbiT"),
            n("ma9I"),
            n("qHT+"),
            n("piMb"),
            n("yyme"),
            n("TeQF"),
            n("fbCW"),
            n("x0AG"),
            n("BIHw"),
            n("XbcX"),
            n("QWBl"),
            n("pjDv"),
            n("yq1k"),
            n("yXV3"),
            n("4mDm"),
            n("oVuX"),
            n("uqXc"),
            n("2B1R"),
            n("Xe3L"),
            n("E9XD"),
            n("9N29"),
            n("+2oP"),
            n("Rfxz"),
            n("94Xl"),
            n("pDQq"),
            n("QGkA"),
            n("c9m3"),
            n("wZ/5"),
            n("7+zs"),
            n("tW5y"),
            n("sMBO"),
            n("DEfu"),
            n("Tskq"),
            n("Uydy"),
            n("eajv"),
            n("n/mU"),
            n("PqOI"),
            n("QNnp"),
            n("/5zm"),
            n("CsgD"),
            n("9mRW"),
            n("QFcT"),
            n("vAFs"),
            n("a5NK"),
            n("yiG3"),
            n("kNcU"),
            n("KvGi"),
            n("AmFO"),
            n("eJiR"),
            n("I9xj"),
            n("tl/u"),
            n("qePV"),
            n("NbN+"),
            n("8AyJ"),
            n("i6QF"),
            n("kSko"),
            n("WDsR"),
            n("r/Vq"),
            n("5uH8"),
            n("w1rZ"),
            n("JevA"),
            n("toAj"),
            n("zKZe"),
            n("Eqjn"),
            n("5xtp"),
            n("T63A"),
            n("3KgV"),
            n("wfmh"),
            n("5DmW"),
            n("27RR"),
            n("cDke"),
            n("NBAS"),
            n("Kxld"),
            n("yQYn"),
            n("4h0Y"),
            n("5D5o"),
            n("tkto"),
            n("v5b1"),
            n("W/eh"),
            n("zuhW"),
            n("r5Og"),
            n("07d7"),
            n("B6y2"),
            n("5s+n"),
            n("p532"),
            n("pv2x"),
            n("SuFq"),
            n("PzqY"),
        n("rBZX"),
        n("XUE8"),
        n("nkod"),
        n("f3jH"),
        n("x2An"),
        n("25bX"),
        n("G/JM"),
        n("1t3B"),
        n("ftMj"),
        n("i5pp"),
        n("TWNs"),
        n("rB9j"),
        n("U3f4"),
        n("JfAA"),
        n("YGK4"),
        n("9bJ7"),
        n("inlA"),
        n("9tb/"),
        n("JTJg"),
        n("PKPk"),
        n("Rm1S"),
        n("hDyC"),
        n("TZCg"),
        n("2A+d"),
        n("OM9Z"),
        n("UxlC"),
        n("hByQ"),
        n("EnZy"),
        n("LKBx"),
        n("SYor"),
        n("HiXI"),
        n("7ueG"),
        n("GKVU"),
        n("E5NM"),
        n("BNMt"),
        n("zHFu"),
        n("x83w"),
        n("l2dK"),
        n("GRPF"),
        n("xdBZ"),
        n("mRH6"),
        n("yWo2"),
        n("IxXR"),
        n("TFPT"),
        n("Zk8X"),
        n("z8NH"),
        n("SpvK"),
        n("/Yfv"),
        n("iwkZ"),
        n("FDzp"),
        n("XMab"),
        n("ilnZ"),
        n("hMMk"),
        n("+ywr"),
        n("moxL"),
        n("qXVe"),
        n("c162"),
        n("waxf"),
        n("0TkE"),
        n("Onu3"),
        n("1dYe"),
        n("IL/d"),
        n("gvgV"),
        n("6R/c"),
        n("YL0P"),
        n("X5Zq"),
        n("MoCz"),
        n("P8wP"),
        n("7JcK"),
        n("ypFw"),
        n("JaFt"),
        n("zSZm"),
        n("PF2M"),
        n("KVSy"),
        n("ZJ55"),
        n("IZzc"),
        n("Fwt+"),
        n("s5qe"),
        n("cvf0"),
        n("ENF9"),
        n("H+LF"),
        n("66V8"),
        n("iIM6"),
        n("2tOg"),
        n("gYJb"),
        n("EDT/"),
        n("j+VE"),
        n("wgYD"),
        n("R3/m"),
        n("l/vG"),
        n("0q/z"),
        n("n5pg"),
        n("zu+z"),
        n("ihrJ"),
        n("Q7Pz"),
        n("unQa"),
        n("Vnov"),
        n("nIe3"),
        n("CUyW"),
        n("qc1c"),
        n("5921"),
        n("VOz1"),
        n("Thag"),
        n("9D6x"),
        n("cOPa"),
        n("vdRX"),
        n("KrxN"),
        n("SL6q"),
        n("lehK"),
        n("eO0o"),
        n("NqR8"),
        n("w7s6"),
        n("uWhJ"),
        n("WPzJ"),
        n("NV22"),
        n("ny8l"),
        n("a5/B"),
        n("vzwy"),
        n("pevA"),
        n("8go2"),
        n("DrvE"),
        n("kCkZ"),
        n("++zV"),
        n("Y4C7"),
        n("ZsH6"),
        n("vZi8"),
        n("5r1n"),
        n("sQ9d"),
        n("bdeN"),
        n("AwgR"),
        n("qgGA"),
        n("49+q"),
        n("AVoK"),
        n("hcok"),
        n("dNT4"),
        n("3uUd"),
        n("tijO"),
        n("1kQv"),
        n("ZY7T"),
        n("C1JJ"),
        n("lmH4"),
        n("Co1j"),
        n("5JV0"),
        n("ctDJ"),
        n("8r4s"),
        n("JwUS"),
        n("qaHo"),
        n("Si40"),
        n("BGb9"),
        n("fN96"),
        n("UzNg"),
        n("DhMN"),
        n("rZ3M"),
        n("apDx"),
        n("4XaG"),
        n("6V7H"),
        n("cfiF"),
        n("702D"),
        n("TJ79"),
        n("Z4nd"),
        n("8STE"),
        n("spTT"),
        n("rb3L"),
        n("FZtP"),
        n("3bBZ"),
        n("Ew+T"),
        n("n5b4"),
        n("Kz25"),
        n("vxnP"),
        n("mGGf"),
        n("mNvP"),
        n("rNO/"),
        n("FDjc"),
        n("1Qz/"),
        n("799b"),
        n("faiq"),
        n("qcRv"),
        n("yyZF");
        var i = n("Y6y7")
            , r = n("qQS4")
            , o = n("+B0l")
            , a = n("oCYn")
            , s = n("zhlO")
            , c = n("E7aQ")
            , u = n("SiI8")
            , l = n("AMMt")
            , d = n("yhYn")
            , M = n("t5Pa")
            , p = n("hEH1")
            , f = n("hnE4")
            , y = n("CnmV")
            , g = n("OW6k")
            , A = n("2wKr")
            , D = n("YMW7")
            , h = n("wLAv")
            , N = n("lwsE")
            , j = n.n(N)
            , v = n("W8MJ")
            , w = n.n(v)
            , I = n("7W2i")
            , T = n.n(I)
            , m = n("a1gu")
            , E = n.n(m)
            , O = n("Nsbk")
            , z = n.n(O)
            , b = n("cDf5")
            , L = n.n(b)
            , x = n("ZcLj")
            , k = n("ZojZ")
            , S = n("o0o1")
            , C = n.n(S)
            , Q = n("lSNA")
            , P = n.n(Q)
            , U = n("yXPU")
            , R = n.n(U)
            , Y = n("Qyje")
            , B = n.n(Y)
            , W = n("WCiE")
            , F = n("BweS")
            , _ = n("ZxM/")
            , Z = n("1aRO")
            , G = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , q = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , H = function e() {
            j()(this, e),
                this.seasonId = 0,
                this.seasonTitle = "",
                this.title = "",
                this.shortTitle = ""
        };
        G([Object(Z.a)("comic_id"), q("design:type", Number)], H.prototype, "seasonId", void 0),
            G([Object(Z.a)("comic_title"), q("design:type", String)], H.prototype, "seasonTitle", void 0),
            G([Object(Z.a)("title"), q("design:type", String)], H.prototype, "title", void 0),
            G([Object(Z.a)("short_title"), q("design:type", String)], H.prototype, "shortTitle", void 0),
            H = G([Object(Z.b)()], H);
        var V, J, X = n("COaM"), K = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "createPageTitle",
                value: function(e, t) {
                    var n = t.shortTitle
                        , i = e.title
                        , r = "";
                    return n && (r += n + " - "),
                    i && (r += i + " - "),
                        r += "漫画全集在线观看 - 哔哩哔哩漫画"
                }
            }]),
                e
        }(), $ = n("91CG"), ee = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "getEpisodeData",
                value: function(e) {
                    return $.a.post({
                        url: "/twirp/comic.v1.Comic/GetEpisode",
                        type: H,
                        data: {
                            id: e
                        }
                    })
                }
            }]),
                e
        }(), te = n("nVpw"), ne = n("SOox"), ie = n("yH7B"), re = n("hxfU"), oe = n("f8jW"), ae = n("rcyk"), se = n("blo6"), ce = n("z8gV"), ue = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "removeTargetItem",
                value: function(e, t) {
                    var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1)
                }
            }]),
                e
        }(), le = "BilibiliManga:ReaderMode", de = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "getReaderModeFromStorage",
                value: function() {
                    var e = x.c.intFormat(localStorage.getItem(le), X.g.NotAvailable);
                    return e !== X.g.Scrolling && e !== X.g.Horizontal && e !== X.g.Manga && e !== X.g.Landscape ? X.g.NotAvailable : e
                }
            }, {
                key: "setReaderModeToStorage",
                value: function(e) {
                    localStorage.setItem(le, e.toString())
                }
            }]),
                e
        }(), Me = n("fLv1");
        !function(e) {
            e[e.VeryPoor = .4] = "VeryPoor",
                e[e.Poor = .5] = "Poor",
                e[e.Normal = .7] = "Normal",
                e[e.Good = .85] = "Good",
                e[e.VeryHigh = 1] = "VeryHigh"
        }(V || (V = {})),
            function(e) {
                e[e.VeryPoor = 350] = "VeryPoor",
                    e[e.Poor = 450] = "Poor",
                    e[e.Normal = 800] = "Normal",
                    e[e.Good = 1100] = "Good",
                    e[e.VeryHigh = 1600] = "VeryHigh"
            }(J || (J = {}));
        var pe = n("B7eG")
            , fe = n("Ubnt");
        function ye(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var ge = function(e) {
            T()(n, e);
            var t = ye(n);
            function n() {
                return j()(this, n),
                    t.call(this, document.createElement("div"), fe.b.BlankImage)
            }
            return n
        }(fe.a)
            , Ae = n("+cnd")
            , De = n("3RDl");
        function he(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var Ne = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , je = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ve = function(e) {
            T()(n, e);
            var t = he(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "onInput",
                value: function(e) {
                    this.$emit("input", e)
                }
            }, {
                key: "closePanel",
                value: function() {
                    this.onInput(!1)
                }
            }]),
                n
        }(a.default);
        Ne([Object(o.d)({
            type: Boolean,
            default: !1
        }), je("design:type", Boolean)], ve.prototype, "value", void 0),
            Ne([Object(o.d)({
                type: Number,
                default: 0
            }), je("design:type", Number)], ve.prototype, "episodeId", void 0);
        var we = ve = Ne([Object(o.b)({
            components: {
                AppComment: i.Business.AppCommentV2
            }
        })], ve)
            , Ie = n("KHd+")
            , Te = Object(Ie.a)(we, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("jk-dialog-layout", {
                    staticClass: "comment-dialog-ctnr",
                    attrs: {
                        value: e.value,
                        "slot-enter-class": "a-move-in-top",
                        "slot-leave-class": "a-scale-out",
                        "background-enter-class": "a-fade-in",
                        "background-leave-class": "a-fade-out",
                        "background-color": "rgba(0, 0, 0, .8)",
                        "click-to-close": !0
                    },
                    on: {
                        input: e.onInput
                    },
                    nativeOn: {
                        keydown: function(e) {
                            e.stopPropagation()
                        },
                        keyup: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [i("div", {
                    staticClass: "episode-comment p-relative"
                }, [i("div", {
                    staticClass: "header-section p-relative"
                }, [i("div", [e._v("单话评论")]), i("button", {
                    staticClass: "close-button app-button p-absolute",
                    on: {
                        click: e.closePanel
                    }
                }, [i("img", {
                    attrs: {
                        src: n("Naq3"),
                        width: "20"
                    }
                })])]), i("div", {
                    staticClass: "comment-container border-box"
                }, [e.value ? i("app-comment", {
                    attrs: {
                        id: e.episodeId,
                        type: 29,
                        "no-level-limit": !0
                    }
                }) : e._e()], 1)])])
            }
        ), [], !1, null, "53ab0f70", null).exports;
        function me(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var Ee = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Oe = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ze = function(e) {
            T()(n, e);
            var t = me(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return n
        }(a.default);
        Ee([Object(o.d)({
            type: Boolean,
            default: !1
        }), Oe("design:type", Boolean)], ze.prototype, "isShowPreEpisodeToast", void 0),
            Ee([Object(o.d)({
                type: Boolean,
                default: !1
            }), Oe("design:type", Boolean)], ze.prototype, "isShowNexEpisodeToast", void 0);
        var be = ze = Ee([o.b], ze)
            , Le = Object(Ie.a)(be, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        "leave-active-class": "a-fade-out"
                    }
                }, [e.isShowPreEpisodeToast || e.isShowNexEpisodeToast ? n("div", {
                    staticClass: "episode-toast a-fade-in"
                }, [n("div", {
                    staticClass: "toast-content"
                }, [e._v(e._s(e.isShowPreEpisodeToast ? "没有上一话啦" : "没有下一话啦"))])]) : e._e()])
            }
        ), [], !1, null, "fc078798", null).exports;
        function xe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var ke = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Se = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Ce = function(e) {
            T()(n, e);
            var t = xe(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "onClick",
                value: function(e) {
                    this.$emit("click", e)
                }
            }]),
                n
        }(a.default);
        ke([Object(o.d)({
            default: !1
        }), Se("design:type", Boolean)], Ce.prototype, "round", void 0);
        var Qe = Ce = ke([o.b], Ce)
            , Pe = Object(Ie.a)(Qe, (function() {
                var e = this
                    , t = e.$createElement;
                return (e._self._c || t)("button", {
                    staticClass: "floating-button app-button none-select",
                    class: {
                        circle: e.round
                    },
                    on: {
                        click: e.onClick
                    }
                }, [e._t("default")], 2)
            }
        ), [], !1, null, "5da64f43", null).exports;
        function Ue(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var Re = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Ye = function(e) {
            T()(n, e);
            var t = Ue(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "handleClickFollow",
                value: function() {
                    this.$emit("follow")
                }
            }, {
                key: "handleClickClose",
                value: function() {
                    this.$emit("close")
                }
            }]),
                n
        }(a.default)
            , Be = Ye = Re([o.b], Ye)
            , We = Object(Ie.a)(Be, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "follow-reminder"
                }, [n("div", {
                    staticClass: "tv"
                }), n("div", {
                    staticClass: "dialog"
                }, [n("div", {
                    staticClass: "text"
                }, [e._v("喜欢这本漫画就追漫吧")]), n("div", {
                    staticClass: "button app-button"
                }, [n("div", {
                    staticClass: "icon"
                }), n("div", {
                    staticClass: "button-text",
                    on: {
                        click: function(t) {
                            return e.handleClickFollow()
                        }
                    }
                }, [e._v("追漫")])]), n("div", {
                    staticClass: "close-button app-button",
                    on: {
                        click: function(t) {
                            return e.handleClickClose()
                        }
                    }
                }, [n("div", {
                    staticClass: "icon"
                })])])])
            }
        ), [], !1, null, "4039c38a", null).exports;
        function Fe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var _e = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Ze = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Ge = function(e) {
            T()(n, e);
            var t = Fe(n);
            function n() {
                var e;
                return j()(this, n),
                    (e = t.apply(this, arguments))._isShowToast = !1,
                    e.enterTimer = null,
                    e
            }
            return w()(n, [{
                key: "onMouseEnter",
                value: function() {
                    var e = this;
                    this.externalControl || (clearTimeout(this.enterTimer),
                        this.enterTimer = setTimeout((function() {
                                e._isShowToast = !0
                            }
                        ), 300))
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    this.externalControl || (clearTimeout(this.enterTimer),
                        this._isShowToast = !1)
                }
            }, {
                key: "isShowToast",
                get: function() {
                    return this.externalControl ? this.value : this._isShowToast
                }
            }]),
                n
        }(a.default);
        _e([Object(o.d)({
            type: String,
            default: "left"
        }), Ze("design:type", String)], Ge.prototype, "mode", void 0),
            _e([Object(o.d)({
                type: Boolean,
                default: !1
            }), Ze("design:type", Boolean)], Ge.prototype, "externalControl", void 0),
            _e([Object(o.d)({
                type: Boolean,
                default: !1
            }), Ze("design:type", Boolean)], Ge.prototype, "value", void 0);
        var qe = Ge = _e([o.b], Ge)
            , He = Object(Ie.a)(qe, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "hover-toast-container p-relative",
                    on: {
                        mouseenter: e.onMouseEnter,
                        mouseleave: e.onMouseLeave
                    }
                }, [n("transition", {
                    attrs: {
                        "enter-active-class": "a-scale-in-ease",
                        "leave-active-class": "a-scale-out-ease"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowToast,
                        expression: "isShowToast"
                    }],
                    staticClass: "animation-element w-100 h-100 p-absolute"
                }, [n("div", {
                    staticClass: "hover-toast p-absolute border-box",
                    class: e.mode
                }, [e._t("default")], 2)])]), n("div", {
                    staticClass: "p-relative"
                }, [e._t("activator")], 2)], 1)
            }
        ), [], !1, null, "2d03e36a", null).exports
            , Ve = n("26FU")
            , Je = n("dC0D")
            , Xe = {
            seasonData: new X.c,
            episodeDetail: new H,
            isFavourite: !1
        }
            , Ke = new Ve.a((function(e) {
                return e
            }
        ))
            , $e = Ke.pipe(Object(Je.a)((function(e, t) {
                return t(e)
            }
        ), Xe));
        var et = "BilibiliManga:IsAppendBlankPageInDouble"
            , tt = "BilibiliManga:HorizontalMode"
            , nt = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "checkIsAppendBlankPageInDoubleMode",
                value: function() {
                    return "true" === localStorage.getItem(et)
                }
            }, {
                key: "setBlankPageAppendingInDoubleMode",
                value: function(e) {
                    localStorage.setItem(et, e ? "true" : "false")
                }
            }, {
                key: "getHorizontalModeFromStorage",
                value: function() {
                    var e = x.c.intFormat(localStorage.getItem(tt), pe.a.NotAvailable);
                    return e !== pe.a.DoublePage && e !== pe.a.SinglePage ? pe.a.NotAvailable : e
                }
            }, {
                key: "setHorizontalModeToStorage",
                value: function(e) {
                    localStorage.setItem(tt, e.toString())
                }
            }]),
                e
        }()
            , it = {
            readerMode: Me.a.DEFAULT_PAGING_MODE,
            horizontalMode: Me.a.DEFAULT_HORIZONTAL_MODE,
            isAllowDirectionChange: !1,
            isAllowHorizontal: !1,
            isAllowVerticalMode: !1,
            isAllowDisplayMessageBox: !1,
            isAddBlankPage: nt.checkIsAppendBlankPageInDoubleMode()
        }
            , rt = new Ve.a((function(e) {
                return e
            }
        ))
            , ot = rt.pipe(Object(Je.a)((function(e, t) {
                return t(e)
            }
        ), it));
        function at(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var st = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , ct = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ut = function(e) {
            T()(n, e);
            var t = at(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "displayPageCount",
                get: function() {
                    return this.isAddBlankPage && this.isInDoublePageMode ? this.pageCount - 1 : this.pageCount
                }
            }, {
                key: "displayPage",
                get: function() {
                    var e = this.pageIndex + 1;
                    return this.isInDoublePageMode ? (this.isAddBlankPage && (e -= 1),
                    e < 1 && (e = 1),
                    e > 999 && (e = 999),
                    e > this.displayPageCount && (e = null),
                        e) : e
                }
            }, {
                key: "displayNextPage",
                get: function() {
                    var e = this.displayPage + 1;
                    return e > this.displayPageCount && (e = 0),
                    e > 999 && (e = 999),
                        e
                }
            }, {
                key: "isInMangaMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Manga
                }
            }, {
                key: "isInScrollingMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Scrolling
                }
            }, {
                key: "isInHorizontalMode",
                get: function() {
                    return this.isInMangaMode || this.readerSettingState.readerMode === X.g.Horizontal
                }
            }, {
                key: "isInDoublePageMode",
                get: function() {
                    return this.readerSettingState.horizontalMode === pe.a.DoublePage && this.isInHorizontalMode
                }
            }, {
                key: "isMangaLayout",
                get: function() {
                    return this.mangaInfoState.seasonData.defaultReaderMode === X.g.Manga
                }
            }, {
                key: "isAddBlankPage",
                get: function() {
                    return this.readerSettingState.isAddBlankPage
                }
            }, {
                key: "isInAddBlankPageMode",
                get: function() {
                    return this.isAddBlankPage && 1 === this.displayPage
                }
            }]),
                n
        }(a.default);
        st([Object(o.d)({
            type: Number,
            default: 0
        }), ct("design:type", Number)], ut.prototype, "pageIndex", void 0),
            st([Object(o.d)({
                type: Number,
                default: 0
            }), ct("design:type", Number)], ut.prototype, "pageCount", void 0),
            st([Object(o.d)({
                type: String,
                default: "--"
            }), ct("design:type", String)], ut.prototype, "shortTitle", void 0),
            st([Object(o.d)({
                type: Boolean,
                default: !1
            }), ct("design:type", Boolean)], ut.prototype, "showProgress", void 0),
            st([Object(o.d)({
                type: Boolean,
                default: !1
            }), ct("design:type", Boolean)], ut.prototype, "onlyShowEpisode", void 0);
        var lt = ut = st([Object(o.b)({
            subscriptions: function() {
                return {
                    mangaInfoState: $e,
                    readerSettingState: ot
                }
            }
        })], ut)
            , dt = Object(Ie.a)(lt, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "info-hud none-select"
                }, [e.onlyShowEpisode ? [i("div", [e._v(e._s(e.shortTitle))])] : [e.isInDoublePageMode ? i("div", {
                    staticClass: "hinter-image-container double"
                }, [i("img", {
                    staticClass: "hinter-image ts-dot-4 v-middle",
                    class: {
                        flip: e.isInMangaMode
                    },
                    attrs: {
                        src: n("r4XI"),
                        height: "32"
                    }
                }), i("span", {
                    staticClass: "current-page p-absolute ts-dot-4 a-fade-in",
                    class: [e.isMangaLayout ? e.isInAddBlankPageMode ? "left-position" : "right-position" : e.isInAddBlankPageMode ? "right-position" : "left-position"]
                }, [e._v(e._s(e.displayPage || ""))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isInAddBlankPageMode,
                        expression: "!isInAddBlankPageMode"
                    }],
                    staticClass: "next-page p-absolute ts-dot-4 a-fade-in",
                    class: [e.isMangaLayout ? "left-position" : "right-position"]
                }, [e._v(e._s(e.displayNextPage || ""))])]) : i("div", {
                    staticClass: "hinter-image-container single"
                }, [i("img", {
                    staticClass: "hinter-image ts-dot-4 v-middle",
                    class: {
                        flip: e.isInMangaMode,
                        rotate: e.isInScrollingMode
                    },
                    attrs: {
                        src: n("ll70"),
                        height: "32"
                    }
                }), i("span", {
                    staticClass: "current-page p-absolute a-fade-in"
                }, [e._v(e._s(e.displayPage || ""))])]), i("div", {
                    staticClass: "info-text dp-i-block v-middle",
                    staticStyle: {
                        "margin-left": "8px"
                    }
                }, [i("div", [e._v(e._s(e.displayPageCount) + "P")]), i("div", [e._v(e._s(e.shortTitle))])]), i("manga-progress", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showProgress,
                        expression: "showProgress"
                    }],
                    staticClass: "v-middle",
                    staticStyle: {
                        "margin-left": "10px"
                    },
                    attrs: {
                        size: 14,
                        title: "当前有图片或章节正在载入 " + e.$emoji.happy()
                    }
                })]], 2)
            }
        ), [], !1, null, "eb8f99c0", null).exports;
        function Mt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var pt = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , ft = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , yt = function(e) {
            T()(o, e);
            var t, n, i, r = Mt(o);
            function o() {
                var e;
                return j()(this, o),
                    (e = r.apply(this, arguments)).isShowMessage = !1,
                    e.showTimer = 0,
                    e
            }
            return w()(o, [{
                key: "onWatchIsShowDirection",
                value: (i = R()(C.a.mark((function e(t) {
                            var n = this;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                this.isShowMessage = t,
                                                null !== this.showTimer && clearTimeout(this.showTimer),
                                                    this.showTimer = window.setTimeout((function() {
                                                            n.isShowMessage = !1
                                                        }
                                                    ), 3e3);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "onWatchIsNormalReadModel",
                value: (n = R()(C.a.mark((function e(t) {
                            var n = this;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                this.isShowDirection && (this.isShowMessage = !0,
                                                null !== this.showTimer && clearTimeout(this.showTimer),
                                                    this.showTimer = window.setTimeout((function() {
                                                            n.isShowMessage = !1
                                                        }
                                                    ), 3e3));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "created",
                value: function() {
                    this.isShowMessage = this.isShowDirection
                }
            }, {
                key: "mounted",
                value: (t = R()(C.a.mark((function e() {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.isShowMessage) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.next = 3,
                                                    x.e.sleep(3e3);
                                            case 3:
                                                this.isShowMessage = !1;
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "isAllowDisplayMessageBox",
                get: function() {
                    return this.readerSettingState.isAllowDisplayMessageBox
                }
            }]),
                o
        }(a.default);
        pt([Object(o.d)({
            type: Boolean,
            default: !1
        }), ft("design:type", Boolean)], yt.prototype, "isNormalReadModel", void 0),
            pt([Object(o.d)({
                type: Boolean,
                default: !0
            }), ft("design:type", Boolean)], yt.prototype, "isShowDirection", void 0),
            pt([Object(o.g)("isShowDirection"), ft("design:type", Function), ft("design:paramtypes", [Boolean]), ft("design:returntype", Promise)], yt.prototype, "onWatchIsShowDirection", null),
            pt([Object(o.g)("isNormalReadModel"), ft("design:type", Function), ft("design:paramtypes", [Boolean]), ft("design:returntype", Promise)], yt.prototype, "onWatchIsNormalReadModel", null);
        var gt = yt = pt([Object(o.b)({
            subscriptions: function() {
                return {
                    readerSettingState: ot
                }
            }
        })], yt)
            , At = Object(Ie.a)(gt, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        "leave-active-class": "a-fade-out"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowMessage && e.isAllowDisplayMessageBox,
                        expression: "isShowMessage && isAllowDisplayMessageBox"
                    }],
                    staticClass: "message-box none-select a-fade-in"
                }, [i("div", {
                    staticClass: "img-container"
                }, [i("img", {
                    staticClass: "arrow-image ts-dot-4",
                    class: {
                        flip: e.isNormalReadModel
                    },
                    attrs: {
                        src: n("pfP6")
                    }
                })]), i("div", {
                    staticClass: "direction-text"
                }, [e._v("当前阅读器翻页方向")]), i("div", {
                    staticClass: "direction-content"
                }, [e._v(e._s(e.isNormalReadModel ? "从右向左" : "从左向右"))])])])
            }
        ), [], !1, null, "6bbc3074", null).exports
            , Dt = n("XGqN")
            , ht = {
            isFavourite: !0
        }
            , Nt = new Ve.a((function(e) {
                return e
            }
        ))
            , jt = Nt.pipe(Object(Je.a)((function(e, t) {
                return t(e)
            }
        ), ht));
        function vt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var wt = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , It = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Tt = function(e) {
            T()(n, e);
            var t = vt(n);
            function n() {
                var e;
                return j()(this, n),
                    (e = t.apply(this, arguments)).delayTimer = null,
                    e
            }
            return w()(n, [{
                key: "onInput",
                value: function(e) {
                    var t = this
                        , n = e.target.value;
                    this.delay ? (clearTimeout(this.delayTimer),
                        this.delayTimer = setTimeout((function() {
                                t.$emit("input", x.c.intFormat(n, 0))
                            }
                        ), this.delay)) : this.$emit("input", x.c.intFormat(n, 0))
                }
            }, {
                key: "isEdgeBrowser",
                get: function() {
                    try {
                        return window.navigator.userAgent.indexOf("Edge") > -1
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "newvalue",
                get: function() {
                    return this.isInDoublePage ? this.value : this.value - 1
                }
            }, {
                key: "newMaximum",
                get: function() {
                    return this.isInDoublePage ? this.maximum : this.maximum - 1
                }
            }]),
                n
        }(a.default);
        wt([Object(o.d)({
            type: Number,
            default: 0
        }), It("design:type", Number)], Tt.prototype, "value", void 0),
            wt([Object(o.d)({
                type: Number,
                default: 0
            }), It("design:type", Number)], Tt.prototype, "minimum", void 0),
            wt([Object(o.d)({
                type: Number,
                default: 100
            }), It("design:type", Number)], Tt.prototype, "maximum", void 0),
            wt([Object(o.d)({
                type: Number,
                default: 1
            }), It("design:type", Number)], Tt.prototype, "step", void 0),
            wt([Object(o.d)({
                type: Boolean,
                default: !1
            }), It("design:type", Boolean)], Tt.prototype, "hideIndicator", void 0),
            wt([Object(o.d)({
                type: Number,
                default: 0
            }), It("design:type", Number)], Tt.prototype, "delay", void 0),
            wt([Object(o.d)({
                type: Boolean,
                default: !1
            }), It("design:type", Boolean)], Tt.prototype, "isInDoublePage", void 0);
        var mt = Tt = wt([o.b], Tt)
            , Et = Object(Ie.a)(mt, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "slider-component"
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.hideIndicator,
                        expression: "!hideIndicator"
                    }],
                    staticClass: "progress-indicator"
                }, [e._v(e._s(e.value) + " / " + e._s(e.maximum))]), n("div", {
                    staticClass: "slider-body w-100"
                }, [n("input", {
                    staticClass: "range-input",
                    class: {
                        edge: e.isEdgeBrowser
                    },
                    attrs: {
                        type: "range",
                        max: e.newMaximum,
                        min: e.minimum,
                        step: e.step
                    },
                    domProps: {
                        value: e.newvalue
                    },
                    on: {
                        input: e.onInput,
                        change: e.onInput
                    }
                })])])
            }
        ), [], !1, null, "b53abbbc", null).exports
            , Ot = n("96Y2");
        function zt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var bt = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Lt = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , xt = function(e) {
            T()(n, e);
            var t = zt(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "onClick",
                value: function(e) {
                    this.$emit("click", e)
                }
            }]),
                n
        }(a.default);
        bt([Object(o.d)({
            type: String,
            default: ""
        }), Lt("design:type", String)], xt.prototype, "imgUrl", void 0),
            bt([Object(o.d)({
                type: String,
                default: ""
            }), Lt("design:type", String)], xt.prototype, "label", void 0),
            bt([Object(o.d)({
                type: Number,
                default: 24
            }), Lt("design:type", Number)], xt.prototype, "iconSize", void 0),
            bt([Object(o.d)({
                type: Boolean,
                default: !1
            }), Lt("design:type", Boolean)], xt.prototype, "disabled", void 0),
            bt([Object(o.d)({
                type: Boolean,
                default: !1
            }), Lt("design:type", Boolean)], xt.prototype, "loading", void 0);
        var kt = xt = bt([o.b], xt)
            , St = Object(Ie.a)(kt, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("button", {
                    staticClass: "action-button app-button t-center",
                    attrs: {
                        disabled: e.disabled
                    },
                    on: {
                        click: e.onClick
                    }
                }, [e.loading ? [n("manga-progress", {
                    attrs: {
                        size: "20"
                    }
                })] : [n("img", {
                    style: {
                        width: e.iconSize + "px",
                        height: e.iconSize + "px"
                    },
                    attrs: {
                        src: e.imgUrl,
                        width: e.iconSize
                    }
                }), n("br"), n("span", [e._v(e._s(e.label))]), e._t("default")]], 2)
            }
        ), [], !1, null, "01e2848b", null).exports
            , Ct = n("t/UT")
            , Qt = n("rVBG")
            , Pt = n("ewXD");
        function Ut(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var Rt = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Yt = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Bt = function(e) {
            T()(o, e);
            var t, n, i = Ut(o);
            function o() {
                var e;
                return j()(this, o),
                    (e = i.apply(this, arguments)).showButton = !1,
                    e.showCountdown = [],
                    e.ps = null,
                    e
            }
            return w()(o, [{
                key: "onWatchValue",
                value: function(e) {
                    e && (this.scrollToCurrentPosition(),
                        this.setBatchBuyButtonVisibility())
                }
            }, {
                key: "onCurrentEpisodeIdChange",
                value: function() {
                    this.setBatchBuyButtonVisibility()
                }
            }, {
                key: "onWatchEpisodeList",
                value: function() {
                    this.updatePs()
                }
            }, {
                key: "handleBatchButton",
                value: function() {
                    this.$emit("close"),
                        this.openPurchasePanel()
                }
            }, {
                key: "initPs",
                value: function() {
                    this.ps = new Ct.default(this.$refs.episodeList,{
                        wheelPropagation: !1
                    })
                }
            }, {
                key: "updatePs",
                value: function() {
                    this.ps && this.ps.update()
                }
            }, {
                key: "destroyPs",
                value: function() {
                    this.ps && this.ps.destroy(),
                        this.ps = null
                }
            }, {
                key: "episodeSwitch",
                value: (n = R()(C.a.mark((function e(t) {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.t0 = this,
                                                    e.t1 = t,
                                                    e.next = 4,
                                                    se.a.getPageHistory(t);
                                            case 4:
                                                e.t2 = e.sent,
                                                    e.t3 = {
                                                        episodeId: e.t1,
                                                        pageIndex: e.t2,
                                                        loadInForce: !0
                                                    },
                                                    e.t0.onUiEpisodeSwitch.call(e.t0, e.t3);
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "scrollToCurrentPosition",
                value: function() {
                    var e = this;
                    this.$nextTick((function() {
                            Pt.a.scrollTo(e.episodeListDom, {
                                x: 0,
                                y: 48 * (e.currentPosition - 4)
                            })
                        }
                    ))
                }
            }, {
                key: "setCountdown",
                value: function(e, t) {
                    this.$set(this.showCountdown, e, t)
                }
            }, {
                key: "setBatchBuyButtonVisibility",
                value: (t = R()(C.a.mark((function e() {
                            var t, n, i, o, a;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (this.showButton = !1,
                                                this.mangaSeason.payMode !== X.h.InVolume) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 3:
                                                if (0 !== this.currentEpisodeId) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 5:
                                                return e.next = 7,
                                                    ne.a.getEpisodePurchaseInfo(this.currentEpisodeId);
                                            case 7:
                                                if (t = e.sent,
                                                    n = t.data,
                                                    i = t.error,
                                                    o = t.status,
                                                    !i) {
                                                    e.next = 17;
                                                    break
                                                }
                                                if (401 !== o) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 14:
                                                return l.a.error("购买信息获取失败，请稍后再试，非常抱歉 " + r.sad()),
                                                    k.a.error("购买信息获取失败:", i),
                                                    e.abrupt("return");
                                            case 17:
                                                a = n.batchBuy.filter((function(e) {
                                                        return e.usable && 0 !== e.payGold
                                                    }
                                                )),
                                                    this.showButton = a.length > 0;
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "mounted",
                value: function() {
                    this.initPs(),
                        this.showCountdown = Array(this.episodeList.length).fill(!1)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.destroyPs()
                }
            }, {
                key: "episodeListDom",
                get: function() {
                    return this.$refs.episodeList
                }
            }, {
                key: "currentPosition",
                get: function() {
                    var e = this;
                    return this.episodeList.findIndex((function(t) {
                            return t.id === e.currentEpisodeId
                        }
                    ))
                }
            }]),
                o
        }(a.default);
        Rt([Object(o.d)({
            type: Object,
            default: function() {
                return new X.c
            }
        }), Yt("design:type", X.c)], Bt.prototype, "mangaSeason", void 0),
            Rt([Object(o.d)({
                type: Array,
                default: function() {
                    return []
                }
            }), Yt("design:type", Array)], Bt.prototype, "episodeList", void 0),
            Rt([Object(o.d)({
                type: Number,
                default: 0
            }), Yt("design:type", Number)], Bt.prototype, "currentEpisodeId", void 0),
            Rt([Object(o.d)({
                type: Array,
                default: function() {
                    return []
                }
            }), Yt("design:type", Array)], Bt.prototype, "loadingEpisodeIds", void 0),
            Rt([Object(o.d)({
                type: Array,
                default: function() {
                    return []
                }
            }), Yt("design:type", Array)], Bt.prototype, "failedEpisodeIds", void 0),
            Rt([Object(o.d)({
                type: Boolean,
                default: !1
            }), Yt("design:type", Boolean)], Bt.prototype, "isShowEpisodeList", void 0),
            Rt([Object(o.g)("isShowEpisodeList"), Yt("design:type", Function), Yt("design:paramtypes", [Boolean]), Yt("design:returntype", void 0)], Bt.prototype, "onWatchValue", null),
            Rt([Object(o.g)("currentEpisodeId"), Yt("design:type", Function), Yt("design:paramtypes", []), Yt("design:returntype", void 0)], Bt.prototype, "onCurrentEpisodeIdChange", null),
            Rt([Object(o.g)("episodeList"), Yt("design:type", Function), Yt("design:paramtypes", []), Yt("design:returntype", void 0)], Bt.prototype, "onWatchEpisodeList", null),
            Rt([Object(o.e)("onUiEpisodeSwitch"), Yt("design:type", Function)], Bt.prototype, "onUiEpisodeSwitch", void 0),
            Rt([Object(o.e)("openPurchasePanel"), Yt("design:type", Function)], Bt.prototype, "openPurchasePanel", void 0);
        var Wt = Bt = Rt([Object(o.b)({
            components: {
                EpisodeAvailabilityTag: Qt.a
            },
            subscriptions: function() {
                return {
                    readerSettingState: ot
                }
            }
        })], Bt)
            , Ft = Object(Ie.a)(Wt, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "episode-list border-box"
                }, [i("div", {
                    staticClass: "panel-title"
                }, [i("div", {
                    staticClass: "text"
                }, [e._v("全部章节（" + e._s(e.episodeList.length) + "）")]), e.showButton ? i("div", {
                    staticClass: "app-button batch-button",
                    on: {
                        click: function(t) {
                            return e.handleBatchButton()
                        }
                    }
                }, [e._v("批量购买")]) : e._e()]), i("div", {
                    ref: "episodeList",
                    staticClass: "data-list p-relative"
                }, [e.episodeList.length ? e._l(e.episodeList, (function(t, r) {
                        return i("button", {
                            staticClass: "list-item app-button",
                            class: {
                                selected: t.id === e.currentEpisodeId,
                                read: 1 === t.readStatus
                            },
                            on: {
                                click: function(n) {
                                    return e.episodeSwitch(t.id)
                                }
                            }
                        }, [i("div", {
                            staticClass: "label"
                        }, [e._v(e._s(t.shortTitle + " " + t.title))]), i("manga-progress", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.loadingEpisodeIds.includes(t.id),
                                expression: "loadingEpisodeIds.includes(item.id)"
                            }],
                            staticStyle: {
                                "margin-left": "5px"
                            },
                            attrs: {
                                size: 20
                            }
                        }), i("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.failedEpisodeIds.includes(t.id),
                                expression: "failedEpisodeIds.includes(item.id)"
                            }],
                            staticClass: "error-icon",
                            staticStyle: {
                                "margin-left": "5px"
                            },
                            attrs: {
                                src: n("hTcJ"),
                                width: "16",
                                title: "此章节载入失败了，您可点击重试 " + e.$emoji.sad()
                            }
                        }), i("EpisodeAvailabilityTag", {
                            attrs: {
                                "season-data": e.mangaSeason,
                                "episode-data": t,
                                "use-white-background": !1,
                                "is-showing-countdown": e.showCountdown[r]
                            },
                            on: {
                                mouseenter: function(t) {
                                    return e.setCountdown(r, !0)
                                },
                                mouseleave: function(t) {
                                    return e.setCountdown(r, !1)
                                }
                            }
                        })], 1)
                    }
                )) : [i("div", {
                    staticClass: "empty-hint t-center"
                }, [e._v("木有章节可以跳转 " + e._s(e.$emoji.shock()))])]], 2)])
            }
        ), [], !1, null, "2266b260", null).exports
            , _t = n("mwIZ")
            , Zt = n.n(_t);
        function Gt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var qt = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Ht = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Vt = function(e) {
            T()(n, e);
            var t = Gt(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "mangaSeasonTitle",
                get: function() {
                    return this.mangaSeason.title ? this.mangaSeason.title : "--"
                }
            }, {
                key: "getMangaId",
                get: function() {
                    return "/detail/mc" + this.mangaSeason.id
                }
            }, {
                key: "getEpisodeId",
                get: function() {
                    var e = this
                        , t = this.mangaSeason.episodeList.filter((function(t) {
                            return t.id === e.currentEpisodeId
                        }
                    ))
                        , n = Zt()(t, [0, "shortTitleFormattedPrefix"], "") || "第 -- 话"
                        , i = Zt()(t, [0, "title"], "");
                    return n + (i ? "  " : "") + i
                }
            }]),
                n
        }(a.default);
        qt([Object(o.d)({
            type: X.c,
            default: function() {
                return new X.c
            }
        }), Ht("design:type", X.c)], Vt.prototype, "mangaSeason", void 0),
            qt([Object(o.d)({
                type: Number,
                default: 0
            }), Ht("design:type", Number)], Vt.prototype, "currentEpisodeId", void 0);
        var Jt = Vt = qt([o.b], Vt)
            , Xt = Object(Ie.a)(Jt, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "read-nav"
                }, [n("a", {
                    attrs: {
                        href: "/"
                    }
                }, [e._v("首页")]), n("span", {
                    staticClass: "next-icon"
                }, [e._v(">")]), n("a", {
                    staticClass: "manga-title t-over-hidden",
                    attrs: {
                        href: e.getMangaId,
                        title: e.mangaSeasonTitle
                    }
                }, [e._v(e._s(e.mangaSeasonTitle))]), n("span", {
                    staticClass: "next-icon"
                }, [e._v(">")]), n("span", {
                    staticClass: "episode t-over-hidden"
                }, [e._v(e._s(e.getEpisodeId))])])
            }
        ), [], !1, null, "3183dec0", null).exports;
        function Kt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function $t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Kt(Object(n), !0).forEach((function(t) {
                        P()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function en(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var tn = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , nn = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , rn = function(e) {
            T()(n, e);
            var t = en(n);
            function n() {
                var e;
                return j()(this, n),
                    (e = t.apply(this, arguments)).observer = null,
                    e.height = "0",
                    e
            }
            return w()(n, [{
                key: "switchHorizontalMode",
                value: function(e) {
                    rt.next((function(t) {
                            return $t($t({}, t), {}, {
                                horizontalMode: e
                            })
                        }
                    )),
                        nt.setHorizontalModeToStorage(e)
                }
            }, {
                key: "calcHeight",
                value: function() {
                    this.height = window.getComputedStyle(this.sizeRuler).height
                }
            }, {
                key: "initLens",
                value: function() {
                    var e = this;
                    if (MutationObserver) {
                        var t = new MutationObserver((function() {
                                e.calcHeight()
                            }
                        ));
                        t.observe(this.$el, {
                            subtree: !0,
                            childList: !0,
                            attributes: !0
                        }),
                            this.observer = t
                    }
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initLens(),
                        this.calcHeight()
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.observer && this.observer.disconnect(),
                        this.observer = null
                }
            }, {
                key: "isInHorizontalMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Horizontal || this.readerSettingState.readerMode === X.g.Manga
                }
            }, {
                key: "isInScrollingMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Scrolling
                }
            }, {
                key: "isInMangaMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Manga
                }
            }, {
                key: "sizeRuler",
                get: function() {
                    return this.$refs.sizeRuler
                }
            }]),
                n
        }(a.default);
        tn([Object(o.d)({
            type: Boolean,
            default: !1
        }), nn("design:type", Boolean)], rn.prototype, "value", void 0),
            tn([Object(o.d)({
                type: Boolean,
                default: !1
            }), nn("design:type", Boolean)], rn.prototype, "isOpen", void 0),
            tn([Object(o.e)("switchReaderMode"), nn("design:type", Function)], rn.prototype, "switchReaderMode", void 0);
        var on = rn = tn([Object(o.b)({
            subscriptions: function() {
                return {
                    readerSettingState: ot
                }
            }
        })], rn)
            , an = Object(Ie.a)(on, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        "leave-active-class": "a-scale-out-ease"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.value,
                        expression: "value"
                    }],
                    staticClass: "reader-setting ts-dot-4",
                    style: {
                        height: e.height
                    }
                }, [n("div", {
                    ref: "sizeRuler",
                    staticClass: "size-ruler border-box"
                }, [n("div", {
                    staticClass: "section a-scale-in-ease"
                }, [n("div", {
                    staticClass: "section-title"
                }, [e._v("阅读模式")]), n("div", {
                    staticClass: "section-content"
                }, [n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.read_option.click",
                        expression: "'777.17.read_option.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            ways: "1"
                        },
                        expression: "{ways:'1'}"
                    }],
                    staticClass: "app-button",
                    class: {
                        selected: e.isInHorizontalMode
                    },
                    attrs: {
                        disabled: !e.readerSettingState.isAllowHorizontal
                    },
                    on: {
                        click: function(t) {
                            return e.switchReaderMode(2)
                        }
                    }
                }, [e._v("左右翻页")]), n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.read_option.click",
                        expression: "'777.17.read_option.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            ways: "2"
                        },
                        expression: "{ways:'2'}"
                    }],
                    staticClass: "app-button",
                    class: {
                        selected: e.isInScrollingMode
                    },
                    attrs: {
                        disabled: !e.readerSettingState.isAllowVerticalMode
                    },
                    on: {
                        click: function(t) {
                            return e.switchReaderMode(1)
                        }
                    }
                }, [e._v("上下滚动")])])]), n("transition", {
                    attrs: {
                        "leave-active-class": "a-scale-out-ease"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isInHorizontalMode,
                        expression: "isInHorizontalMode"
                    }],
                    staticClass: "section a-scale-in-ease"
                }, [n("div", {
                    staticClass: "section-title"
                }, [e._v("页面模式")]), n("div", {
                    staticClass: "section-content"
                }, [n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.page_option.click",
                        expression: "'777.17.page_option.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            ways: "1"
                        },
                        expression: "{ways:'1'}"
                    }],
                    staticClass: "app-button",
                    class: {
                        selected: 1 === e.readerSettingState.horizontalMode
                    },
                    on: {
                        click: function(t) {
                            return e.switchHorizontalMode(1)
                        }
                    }
                }, [e._v("双页")]), n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.page_option.click",
                        expression: "'777.17.page_option.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            ways: "2"
                        },
                        expression: "{ways:'2'}"
                    }],
                    staticClass: "app-button",
                    class: {
                        selected: 0 === e.readerSettingState.horizontalMode
                    },
                    on: {
                        click: function(t) {
                            return e.switchHorizontalMode(0)
                        }
                    }
                }, [e._v("单页")])])])]), n("transition", {
                    attrs: {
                        "leave-active-class": "a-scale-out-ease"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isInHorizontalMode,
                        expression: "isInHorizontalMode"
                    }],
                    staticClass: "section a-scale-in-ease"
                }, [n("div", {
                    staticClass: "section-title"
                }, [e._v("翻页方向")]), n("div", {
                    staticClass: "section-content"
                }, [n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.direction.click",
                        expression: "'777.17.direction.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            ways: "1"
                        },
                        expression: "{ways:'1'}"
                    }],
                    staticClass: "app-button",
                    class: {
                        selected: !e.isInMangaMode
                    },
                    on: {
                        click: function(t) {
                            return e.switchReaderMode(2)
                        }
                    }
                }, [e._v("普通模式")]), n("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.direction.click",
                        expression: "'777.17.direction.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            ways: "2"
                        },
                        expression: "{ways:'2'}"
                    }],
                    staticClass: "app-button",
                    class: {
                        selected: e.isInMangaMode
                    },
                    on: {
                        click: function(t) {
                            return e.switchReaderMode(4)
                        }
                    }
                }, [e._v("日漫模式")])])])])], 1)])])
            }
        ), [], !1, null, "556bc0b0", null).exports;
        function sn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var cn = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , un = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , ln = function(e) {
            T()(i, e);
            var t, n = sn(i);
            function i() {
                var e;
                return j()(this, i),
                    (e = n.apply(this, arguments)).isShowEpisodeList = !1,
                    e.isShowReaderSetting = !1,
                    e
            }
            return w()(i, [{
                key: "onEpisodeSwitchButtonClick",
                value: (t = R()(C.a.mark((function e(t) {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.t0 = this,
                                                    e.t1 = t,
                                                    e.next = 4,
                                                    se.a.getPageHistory(t);
                                            case 4:
                                                e.t2 = e.sent,
                                                    e.t3 = {
                                                        episodeId: e.t1,
                                                        pageIndex: e.t2
                                                    },
                                                    e.t0.$emit.call(e.t0, "episode-switch", e.t3);
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "onPageSwitch",
                value: function(e) {
                    this.isInDoublePage && (e = 2 * (e - 1)),
                        this.$emit("page-switch", e)
                }
            }, {
                key: "closePanel",
                value: function() {
                    if (this.isAnyPanelOpen)
                        return this.closeAllPanels();
                    this.$emit("input", !1)
                }
            }, {
                key: "openEpisodeList",
                value: function() {
                    this.closeAllPanels(),
                        this.isShowEpisodeList = !0
                }
            }, {
                key: "closeEpisodeList",
                value: function() {
                    this.isShowEpisodeList = !1
                }
            }, {
                key: "onSettingButtonClick",
                value: function() {
                    this.isShowReaderSetting ? this.closeReaderSetting() : this.openReaderSetting()
                }
            }, {
                key: "openReaderSetting",
                value: function() {
                    this.closeAllPanels(),
                        this.isShowReaderSetting = !0
                }
            }, {
                key: "closeReaderSetting",
                value: function() {
                    this.isShowReaderSetting = !1
                }
            }, {
                key: "closeAllPanels",
                value: function() {
                    this.closeEpisodeList(),
                        this.closeReaderSetting()
                }
            }, {
                key: "doPageMatching",
                value: function() {
                    this.$emit("page-matching")
                }
            }, {
                key: "openEpisodeComment",
                value: function() {
                    this.$emit("open-comment")
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    this.$emit("mouse-move-ui")
                }
            }, {
                key: "onMouseLeave",
                value: function(e) {
                    this.$emit("mouse-leave-ui")
                }
            }, {
                key: "onUiClick",
                value: function(e) {
                    this.$emit("ui-any-click")
                }
            }, {
                key: "onZoomOut",
                value: function() {
                    this.$emit("zoom-step-out")
                }
            }, {
                key: "onZoomIn",
                value: function() {
                    this.$emit("zoom-step-in")
                }
            }, {
                key: "onZoomReset",
                value: function() {
                    this.$emit("zoom-reset")
                }
            }, {
                key: "mounted",
                value: function() {
                    window.addEventListener("click", this.closeAllPanels)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    window.removeEventListener("click", this.closeAllPanels)
                }
            }, {
                key: "displayZoomFactor",
                get: function() {
                    return (100 * this.zoomFactor).toFixed(0) + "%"
                }
            }, {
                key: "commentCount",
                get: function() {
                    var e = this
                        , t = this.mangaSeason.episodeList.find((function(t) {
                            return t.id === e.currentEpisodeId
                        }
                    ));
                    return t ? t.commentCount : 0
                }
            }, {
                key: "isInHorizontalMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Horizontal || this.readerSettingState.readerMode === X.g.Manga
                }
            }, {
                key: "isInDoublePage",
                get: function() {
                    return this.isInHorizontalMode && this.readerSettingState.horizontalMode === pe.a.DoublePage
                }
            }, {
                key: "isAnyPanelOpen",
                get: function() {
                    return this.isShowEpisodeList || this.isShowReaderSetting
                }
            }, {
                key: "episodeList",
                get: function() {
                    return ((this.mangaSeason || Object.create(null)).episodeList || []).slice().sort((function(e, t) {
                            return e.ord - t.ord
                        }
                    ))
                }
            }, {
                key: "pageIndex$",
                get: function() {
                    var e = this.pageIndex;
                    return this.isInDoublePage && (e = Math.floor(this.pageIndex / 2)),
                    e + 1
                }
            }, {
                key: "getMinimum",
                get: function() {
                    return this.isInDoublePage ? 1 : 0
                }
            }, {
                key: "pageCount$",
                get: function() {
                    var e = this.pageCount;
                    return this.isInDoublePage && (e = Math.ceil(this.pageCount / 2)),
                    e || 1
                }
            }, {
                key: "isFavourite",
                get: function() {
                    return this.mangaInfoState && this.mangaInfoState.isFavourite
                }
            }, {
                key: "isDoFavouriteButtonDisabled",
                get: function() {
                    return this.loadingStatusState && this.loadingStatusState.isFavourite
                }
            }, {
                key: "isInFavourite",
                get: function() {
                    return this.loadingStatusState.isFavourite
                }
            }, {
                key: "isShowPageMatchingButton",
                get: function() {
                    return (this.readerSettingState.readerMode === X.g.Horizontal || this.readerSettingState.readerMode === X.g.Manga) && this.readerSettingState.horizontalMode === pe.a.DoublePage
                }
            }]),
                i
        }(a.default);
        cn([Object(o.d)({
            type: Boolean,
            default: !1
        }), un("design:type", Boolean)], ln.prototype, "value", void 0),
            cn([Object(o.d)({
                type: Number,
                default: 1
            }), un("design:type", Number)], ln.prototype, "zoomFactor", void 0),
            cn([Object(o.d)({
                type: X.c,
                default: function() {
                    return new X.c
                }
            }), un("design:type", X.c)], ln.prototype, "mangaSeason", void 0),
            cn([Object(o.d)({
                type: Number,
                default: 0
            }), un("design:type", Number)], ln.prototype, "currentEpisodeId", void 0),
            cn([Object(o.d)({
                type: Dt.a,
                default: null
            }), un("design:type", Dt.a)], ln.prototype, "prevEpisode", void 0),
            cn([Object(o.d)({
                type: Dt.a,
                default: null
            }), un("design:type", Dt.a)], ln.prototype, "nextEpisode", void 0),
            cn([Object(o.d)({
                type: Number,
                default: 0
            }), un("design:type", Number)], ln.prototype, "pageIndex", void 0),
            cn([Object(o.d)({
                type: Number,
                default: 0
            }), un("design:type", Number)], ln.prototype, "pageCount", void 0),
            cn([Object(o.d)({
                type: Array,
                default: function() {
                    return []
                }
            }), un("design:type", Array)], ln.prototype, "loadingEpisodeIds", void 0),
            cn([Object(o.d)({
                type: Array,
                default: function() {
                    return []
                }
            }), un("design:type", Array)], ln.prototype, "failedEpisodeIds", void 0);
        var dn, Mn = ln = cn([Object(o.b)({
            components: {
                EpisodeList: Ft,
                MangaNavbar: Ot.a,
                ReaderSetting: an,
                Slider: Et,
                ReadNav: Xt,
                ActionButton: St,
                UnfavoritePanel: De.a
            },
            subscriptions: function() {
                return {
                    readerSettingState: ot,
                    mangaInfoState: $e,
                    loadingStatusState: jt
                }
            }
        })], ln), pn = Object(Ie.a)(Mn, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        "leave-active-class": "a-fade-out"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.value,
                        expression: "value"
                    }],
                    staticClass: "manga-reader-ui",
                    on: {
                        click: e.onUiClick
                    }
                }, [i("div", {
                    staticClass: "navbar-container w-100 p-absolute p-zero a-move-in-bottom",
                    on: {
                        mousemove: e.onMouseMove,
                        mouseleave: e.onMouseLeave
                    }
                }, [i("manga-navbar", {
                    staticClass: "manga-navbar",
                    attrs: {
                        "is-show-nav-link": !1,
                        "is-show-search-bar": !1
                    },
                    scopedSlots: e._u([e.mangaSeason ? {
                        key: "centerPart",
                        fn: function() {
                            return [i("read-nav", {
                                attrs: {
                                    "manga-season": e.mangaSeason,
                                    "current-episode-id": e.currentEpisodeId
                                }
                            })]
                        },
                        proxy: !0
                    } : null], null, !0)
                })], 1), i("div", {
                    staticClass: "action-bar-container w-100 p-absolute a-move-in-top",
                    on: {
                        mousemove: e.onMouseMove,
                        mouseleave: e.onMouseLeave
                    }
                }, [i("div", {
                    staticClass: "action-bar-content"
                }, [i("div", {
                    staticClass: "zoomer dp-i-block v-middle t-center"
                }, [i("span", {
                    staticClass: "v-middle zoom-btn btn-minus bg-center bg-no-repeat pointer",
                    on: {
                        click: e.onZoomOut
                    }
                }), i("span", {
                    staticClass: "v-middle zoom-display t-center pointer",
                    on: {
                        click: e.onZoomReset
                    }
                }, [e._v(e._s(e.displayZoomFactor))]), i("span", {
                    staticClass: "v-middle zoom-btn btn-plus bg-center bg-no-repeat pointer",
                    on: {
                        click: e.onZoomIn
                    }
                })]), i("div", {
                    staticClass: "page-slider"
                }, [i("slider", {
                    attrs: {
                        value: e.pageIndex$,
                        "is-in-double-page": e.isInDoublePage,
                        minimum: e.getMinimum,
                        maximum: e.pageCount$
                    },
                    on: {
                        input: e.onPageSwitch
                    }
                })], 1), i("div", {
                    staticClass: "action-buttons navigate"
                }, [i("button", {
                    staticClass: "app-button",
                    attrs: {
                        disabled: !e.prevEpisode
                    },
                    on: {
                        click: function(t) {
                            e.prevEpisode && e.onEpisodeSwitchButtonClick(e.prevEpisode.id)
                        }
                    }
                }, [i("span", {
                    staticClass: "v-middle pageup"
                }, [e._v("上一话")]), i("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.failedEpisodeIds.includes((e.prevEpisode || {}).id),
                        expression: "failedEpisodeIds.includes((prevEpisode || {}).id)"
                    }],
                    staticClass: "v-middle",
                    attrs: {
                        width: "16",
                        src: n("Hsxi"),
                        title: "上一话加载失败了，您可进入章节后重新载入 " + e.$emoji.happy()
                    }
                })]), i("button", {
                    staticClass: "app-button",
                    attrs: {
                        disabled: !e.nextEpisode
                    },
                    on: {
                        click: function(t) {
                            e.nextEpisode && e.onEpisodeSwitchButtonClick(e.nextEpisode.id)
                        }
                    }
                }, [i("span", {
                    staticClass: "v-middle pagedown"
                }, [e._v("下一话")]), i("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.failedEpisodeIds.includes((e.nextEpisode || {}).id),
                        expression: "failedEpisodeIds.includes((nextEpisode || {}).id)"
                    }],
                    staticClass: "v-middle",
                    attrs: {
                        width: "16",
                        src: n("Hsxi"),
                        title: "下一话加载失败了，您可进入章节后重新载入 " + e.$emoji.happy()
                    }
                })]), i("div", {
                    staticClass: "episode-list-button"
                }, [i("button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.contents.click",
                        expression: "'777.17.contents.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            manga_id: e.mangaSeason.id + "",
                            manga_num: e.currentEpisodeId + ""
                        },
                        expression: "{manga_id: mangaSeason.id + '', manga_num: currentEpisodeId + ''}"
                    }],
                    staticClass: "app-button w-100",
                    on: {
                        click: function(t) {
                            e.isShowEpisodeList ? e.closeEpisodeList() : e.openEpisodeList()
                        }
                    }
                }, [i("span", {
                    staticClass: "v-middle toc"
                }, [e._v("目录")])]), i("transition", {
                    attrs: {
                        "leave-active-class": "a-scale-out-ease"
                    }
                }, [i("episode-list", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowEpisodeList,
                        expression: "isShowEpisodeList"
                    }],
                    staticClass: "episode-list p-absolute a-scale-in-ease",
                    attrs: {
                        "is-show-episode-list": e.isShowEpisodeList,
                        "current-episode-id": e.currentEpisodeId,
                        "episode-list": e.episodeList,
                        "loading-episode-ids": e.loadingEpisodeIds,
                        "failed-episode-ids": e.failedEpisodeIds,
                        "manga-season": e.mangaSeason
                    },
                    on: {
                        close: function(t) {
                            return e.closeEpisodeList()
                        }
                    },
                    nativeOn: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                })], 1)], 1)]), i("div", {
                    staticClass: "divider"
                }), i("div", {
                    staticClass: "action-buttons settings"
                }, [i("action-button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.comment.click",
                        expression: "'777.17.comment.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            manga_id: e.mangaSeason.id + "",
                            manga_num: e.currentEpisodeId + ""
                        },
                        expression: "{ manga_id: mangaSeason.id + '', manga_num: currentEpisodeId + '' }"
                    }],
                    staticClass: "comment-button",
                    attrs: {
                        "img-url": n("PzWz"),
                        label: "单话评论"
                    },
                    on: {
                        click: e.openEpisodeComment
                    }
                }, [e.commentCount ? i("span", {
                    staticClass: "episode-comment-count p-absolute"
                }, [e._v(e._s(e.commentCount))]) : e._e()]), i("action-button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.follow_icon.click",
                        expression: "'777.17.follow_icon.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            manga_id: e.mangaSeason.id + "",
                            manga_num: e.currentEpisodeId + ""
                        },
                        expression: "{manga_id: mangaSeason.id + '', manga_num: currentEpisodeId + ''}"
                    }],
                    staticClass: "fav-toggle-button",
                    attrs: {
                        disabled: e.isDoFavouriteButtonDisabled,
                        label: e.isFavourite ? "已追" : "追漫",
                        loading: e.isInFavourite,
                        "img-url": e.isFavourite ? n("T2P2") : n("d5oT")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("toggle-favourite")
                        }
                    }
                }), i("div", {
                    staticClass: "setting-button-container"
                }, [i("action-button", {
                    staticClass: "setting-button w-100 p-relative v-middle",
                    attrs: {
                        "img-url": n("FmG3"),
                        label: "阅读设置"
                    },
                    on: {
                        click: e.onSettingButtonClick
                    }
                }), i("reader-setting", {
                    staticClass: "reader-setting a-scale-in-ease",
                    nativeOn: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    },
                    model: {
                        value: e.isShowReaderSetting,
                        callback: function(t) {
                            e.isShowReaderSetting = t
                        },
                        expression: "isShowReaderSetting"
                    }
                })], 1)], 1)])])])])
            }
        ), [], !1, null, "14354ac2", null).exports, fn = n("l6h4"), yn = "last_show_time", gn = function() {
            function e() {
                j()(this, e)
            }
            var t, n, i, r, o;
            return w()(e, null, [{
                key: "openDb",
                value: (o = R()(C.a.mark((function e() {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0,
                                                    e.next = 3,
                                                    fn.a.openDb({
                                                        dbName: "BilibiliManga:SeasonFollowReminder",
                                                        dbVersion: 1,
                                                        onUpgradeNeeded: function(e) {
                                                            e.objectStoreNames.contains(yn) || e.createObjectStore(yn, {
                                                                keyPath: "season_id"
                                                            }).createIndex("season_id", "season_id", {
                                                                unique: !0
                                                            })
                                                        }
                                                    });
                                            case 3:
                                                return e.abrupt("return", e.sent);
                                            case 6:
                                                throw e.prev = 6,
                                                    e.t0 = e.catch(0),
                                                    e.t0;
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[0, 6]])
                        }
                    ))),
                        function() {
                            return o.apply(this, arguments)
                        }
                )
            }, {
                key: "addRecord",
                value: (r = R()(C.a.mark((function e(t) {
                            var n, i, r, o, a, s, c;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null
                                                },
                                                    e.next = 3,
                                                    this.getRecord(t);
                                            case 3:
                                                if (i = e.sent,
                                                    r = i.data,
                                                    !(o = i.error)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return n.error = o,
                                                    e.abrupt("return", n);
                                            case 9:
                                                return e.prev = 9,
                                                    e.next = 12,
                                                    this.openDb();
                                            case 12:
                                                if (a = e.sent,
                                                    s = {
                                                        season_id: t,
                                                        timestamp: new Date
                                                    },
                                                    !r) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return c = r.season_id,
                                                    e.next = 18,
                                                    fn.a.removeValue(a, yn, c);
                                            case 18:
                                                return e.next = 20,
                                                    fn.a.addValue(a, yn, s);
                                            case 20:
                                                e.next = 26;
                                                break;
                                            case 22:
                                                e.prev = 22,
                                                    e.t0 = e.catch(9),
                                                    k.a.error("设置追漫提醒显示记录失败:", e.t0),
                                                    n.error = e.t0;
                                            case 26:
                                                return e.abrupt("return", n);
                                            case 27:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[9, 22]])
                        }
                    ))),
                        function(e) {
                            return r.apply(this, arguments)
                        }
                )
            }, {
                key: "getRecord",
                value: (i = R()(C.a.mark((function e(t) {
                            var n, i;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null
                                                },
                                                    e.prev = 1,
                                                    e.next = 4,
                                                    this.openDb();
                                            case 4:
                                                return i = e.sent,
                                                    e.next = 7,
                                                    fn.a.getValueByIndex(i, yn, "season_id", t);
                                            case 7:
                                                n.data = e.sent,
                                                    e.next = 14;
                                                break;
                                            case 10:
                                                e.prev = 10,
                                                    e.t0 = e.catch(1),
                                                    k.a.error("获取追漫提醒显示记录失败:", e.t0),
                                                    n.error = e.t0;
                                            case 14:
                                                return e.abrupt("return", n);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[1, 10]])
                        }
                    ))),
                        function(e) {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "removeRecord",
                value: (n = R()(C.a.mark((function e(t) {
                            var n, i;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null
                                                },
                                                    e.prev = 1,
                                                    e.next = 4,
                                                    this.openDb();
                                            case 4:
                                                return i = e.sent,
                                                    e.next = 7,
                                                    fn.a.removeValue(i, yn, t);
                                            case 7:
                                                e.next = 12;
                                                break;
                                            case 9:
                                                e.prev = 9,
                                                    e.t0 = e.catch(1),
                                                    n.error = e.t0;
                                            case 12:
                                                return e.abrupt("return", n);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[1, 9]])
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "getLastReminderDate",
                value: (t = R()(C.a.mark((function e(t) {
                            var n, i;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    this.getRecord(t);
                                            case 2:
                                                return i = e.sent,
                                                    e.abrupt("return", (null === (n = i.data) || void 0 === n ? void 0 : n.timestamp) || new Date("1970-01-01"));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }(), An = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "getImageSizeByQuality",
                value: function(e, t, n) {
                    var i = {
                        width: 0,
                        height: 0
                    };
                    if (e < 1 || t < 1)
                        return i.width = J.Good,
                            i;
                    var r = e / t
                        , o = Math.floor(e * n);
                    switch (n) {
                        case V.VeryPoor:
                            o > J.VeryPoor && (o = J.VeryPoor);
                            break;
                        case V.Poor:
                            o > J.Poor && (o = J.Poor);
                            break;
                        case V.Normal:
                            o > J.Normal && (o = J.Normal);
                            break;
                        case V.Good:
                            o > J.Good && (o = J.Good);
                            break;
                        case V.VeryHigh:
                            o > J.VeryHigh && (o = J.VeryHigh)
                    }
                    return i.width = o,
                        i.height = Math.floor(o / r),
                        i
                }
            }]),
                e
        }(), Dn = n("J3ON"), hn = n("vDqi"), Nn = n.n(hn).a.create();
        !function(e) {
            e[e.Normal = 0] = "Normal",
                e[e.EpisodeNeedToBePurchased = 1] = "EpisodeNeedToBePurchased",
                e[e.EpisodeIsOffline = 2] = "EpisodeIsOffline"
        }(dn || (dn = {}));
        var jn, vn = function() {
            function e() {
                j()(this, e)
            }
            var t, n, i;
            return w()(e, null, [{
                key: "getIndexFileUrl",
                value: (i = R()(C.a.mark((function e(t) {
                            var n, i, r, o, a;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null,
                                                    code: null
                                                },
                                                    e.next = 3,
                                                    $.a.post({
                                                        url: "/twirp/comic.v1.Comic/GetImageIndex",
                                                        data: {
                                                            ep_id: t
                                                        }
                                                    });
                                            case 3:
                                                if (i = e.sent,
                                                    r = i.data,
                                                    o = i.error,
                                                    a = i.code,
                                                    !o) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return n.error = o,
                                                    f.a.captureException(o),
                                                    e.abrupt("return", n);
                                            case 11:
                                                e.t0 = a,
                                                    e.next = 0 === e.t0 ? 14 : 1 === e.t0 ? 17 : 501 === e.t0 ? 19 : 21;
                                                break;
                                            case 14:
                                                return n.code = dn.Normal,
                                                    n.data = r,
                                                    e.abrupt("break", 21);
                                            case 17:
                                                return n.code = dn.EpisodeNeedToBePurchased,
                                                    e.abrupt("break", 21);
                                            case 19:
                                                return n.code = dn.EpisodeIsOffline,
                                                    e.abrupt("break", 21);
                                            case 21:
                                                return e.abrupt("return", n);
                                            case 22:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function(e) {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "getIndexFileFromBfs",
                value: (n = R()(C.a.mark((function e(t) {
                            var n, i, r, o;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = null,
                                                    i = null,
                                                    e.prev = 2,
                                                    e.next = 5,
                                                    Nn.get(t, {
                                                        responseType: "arraybuffer"
                                                    });
                                            case 5:
                                                r = e.sent,
                                                    o = r.data,
                                                    n = o,
                                                    e.next = 14;
                                                break;
                                            case 10:
                                                e.prev = 10,
                                                    e.t0 = e.catch(2),
                                                    i = e.t0,
                                                    f.a.captureException(i);
                                            case 14:
                                                return e.abrupt("return", {
                                                    data: n,
                                                    error: i
                                                });
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[2, 10]])
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "decodeIndexFile",
                value: (t = R()(C.a.mark((function e(t) {
                            var n, i, r;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = null,
                                                    i = null,
                                                    e.prev = 2,
                                                    r = new Uint8Array(t.indexData),
                                                    e.t0 = JSON,
                                                    e.next = 7,
                                                    Object(Dn.a)(t.seasonId, t.episodeId, r);
                                            case 7:
                                                e.t1 = e.sent,
                                                    n = e.t0.parse.call(e.t0, e.t1),
                                                    e.next = 15;
                                                break;
                                            case 11:
                                                e.prev = 11,
                                                    e.t2 = e.catch(2),
                                                    i = e.t2,
                                                    f.a.captureException(i);
                                            case 15:
                                                return e.abrupt("return", {
                                                    data: n,
                                                    error: i
                                                });
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[2, 11]])
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }(), wn = function() {
            function e() {
                j()(this, e)
            }
            var t;
            return w()(e, null, [{
                key: "loadTargetEpisodeImages",
                value: (t = R()(C.a.mark((function e(t, n, i) {
                            var r, o, a, s, c, u, l, d, M, p, f, y, g, A, D;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return r = {
                                                    data: null,
                                                    error: null,
                                                    code: null
                                                },
                                                    e.next = 3,
                                                    vn.getIndexFileUrl(n);
                                            case 3:
                                                if (o = e.sent,
                                                    a = o.data,
                                                    s = o.error,
                                                    c = o.code,
                                                    !s) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return r.error = s,
                                                    e.abrupt("return", r);
                                            case 10:
                                                e.t0 = c,
                                                    e.next = e.t0 === dn.EpisodeIsOffline ? 13 : e.t0 === dn.EpisodeNeedToBePurchased ? 15 : 17;
                                                break;
                                            case 13:
                                                return r.code = jn.EpisodeIsOffline,
                                                    e.abrupt("return", r);
                                            case 15:
                                                return r.code = jn.EpisodeNeedToPurchase,
                                                    e.abrupt("return", r);
                                            case 17:
                                                return u = a.host + a.path,
                                                    e.next = 20,
                                                    vn.getIndexFileFromBfs(u);
                                            case 20:
                                                if (l = e.sent,
                                                    d = l.data,
                                                    !(M = l.error)) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return r.error = M,
                                                    e.abrupt("return", r);
                                            case 26:
                                                return e.next = 28,
                                                    vn.decodeIndexFile({
                                                        seasonId: t,
                                                        episodeId: n,
                                                        indexData: d
                                                    });
                                            case 28:
                                                if (p = e.sent,
                                                    f = p.data,
                                                    !(y = p.error)) {
                                                    e.next = 34;
                                                    break
                                                }
                                                return r.error = y,
                                                    e.abrupt("return", r);
                                            case 34:
                                                if (Array.isArray(f.pics)) {
                                                    e.next = 37;
                                                    break
                                                }
                                                return r.error = new Error("index.pics is not an array."),
                                                    e.abrupt("return", r);
                                            case 37:
                                                return g = f.sizes.slice(),
                                                    A = f.pics.slice(),
                                                    D = A.map((function(e, r) {
                                                            var o = g[r]
                                                                , a = An.getImageSizeByQuality(o.cx, o.cy, i)
                                                                , s = a.width
                                                                , c = a.height;
                                                            return new Ae.a({
                                                                width: s,
                                                                height: c,
                                                                imagePath: e,
                                                                index: r,
                                                                seasonId: t,
                                                                episodeId: n
                                                            })
                                                        }
                                                    )),
                                                    r.data = D,
                                                    e.abrupt("return", r);
                                            case 42:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function(e, n, i) {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }();
        function In(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        !function(e) {
            e[e.Normal = 0] = "Normal",
                e[e.EpisodeIsOffline = 1] = "EpisodeIsOffline",
                e[e.EpisodeNeedToPurchase = 2] = "EpisodeNeedToPurchase"
        }(jn || (jn = {}));
        var Tn = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "setLock",
                value: function(e, t) {
                    Nt.next((function(n) {
                            var i = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? In(Object(n), !0).forEach((function(t) {
                                            P()(e, t, n[t])
                                        }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }
                                    ))
                                }
                                return e
                            }({}, n);
                            return "boolean" == typeof i[e] && (i[e] = t),
                                i
                        }
                    ))
                }
            }, {
                key: "lock",
                value: function(e) {
                    this.setLock(e, !0)
                }
            }, {
                key: "release",
                value: function(e) {
                    this.setLock(e, !1)
                }
            }]),
                e
        }()
            , mn = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "assignTargetEpisodeAsPurchased",
                value: function(e, t) {
                    var n = e.episodeList.find((function(e) {
                            return e.id === t
                        }
                    ));
                    n && (n.isLocked = !1)
                }
            }]),
                e
        }()
            , En = n("9ljz")
            , On = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "getHintAutoDisplayStatus",
                value: function() {
                    return "false" !== En.a.getItem(this.STORAGE_KEY)
                }
            }, {
                key: "setHintAutoDisplayStatus",
                value: function(e) {
                    En.a.setItem(this.STORAGE_KEY, e ? "true" : "false")
                }
            }]),
                e
        }();
        On.STORAGE_KEY = "BilibiliManga:IsAutoDisplayPageMatchingHint";
        var zn = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , bn = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , Ln = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "tryToPurchaseEpisode",
                value: function(e) {
                    return ne.a.purchaseEpisode({
                        purchaseMethod: ie.b.AutoPurchase,
                        episodeId: e
                    })
                }
            }]),
                e
        }();
        zn([Object(_.a)({
            isShowQuickLoginPanel: !1
        }), bn("design:type", Function), bn("design:paramtypes", [Number]), bn("design:returntype", Promise)], Ln, "tryToPurchaseEpisode", null);
        var xn = function() {
            function e() {
                j()(this, e)
            }
            return w()(e, null, [{
                key: "getPrevEpisodeData",
                value: function(e, t) {
                    var n = null
                        , i = t.episodeList || []
                        , r = i.indexOf(e)
                        , o = r + 1;
                    return r > -1 && o <= i.length - 1 && (n = i[o]),
                        n
                }
            }, {
                key: "getNextEpisodeData",
                value: function(e, t) {
                    var n = null
                        , i = t.episodeList || []
                        , r = i.indexOf(e) - 1;
                    return r > -1 && (n = i[r]),
                        n
                }
            }]),
                e
        }();
        function kn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function Sn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? kn(Object(n), !0).forEach((function(t) {
                        P()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function Cn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var Qn, Pn = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, Un = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        };
        !function(e) {
            e[e.none = 0] = "none",
                e[e.Retry = 1] = "Retry",
                e[e.CountdownBack = 2] = "CountdownBack"
        }(Qn || (Qn = {}));
        var Rn = function(e) {
            T()(N, e);
            var t, n, i, o, s, c, d, M, p, f, g, A, D, h = Cn(N);
            function N() {
                var e;
                return j()(this, N),
                    (e = h.apply(this, arguments)).seasonId = 0,
                    e.episodeId = 0,
                    e.isFirstInitFinished = !1,
                    e.zoomFactor = 1,
                    e.errorType = Qn.none,
                    e.errorPageTypeMap = Object.assign({}, Qn),
                    e.errorMessage = "",
                    e.isAllowPrevNextEpisodeAutoLoad = !1,
                    e.isAddBlankPage = nt.checkIsAppendBlankPageInDoubleMode(),
                    e.imageQuality = V.Good,
                    e.allEpisodeReaderImages = {},
                    e.pageIndex = 0,
                    e.loadedEpisodeIds = [],
                    e.loadingEpisodeIds = [],
                    e.failedEpisodeIds = [],
                    e.offlineEpisodeIds = [],
                    e.toPurchaseEpisodeIds = [],
                    e.inPurchaseEpisodeIds = [],
                    e.isSeasonInLoading = !1,
                    e.isLoadingFailed = !1,
                    e.isUiOpen = !0,
                    e.isShowPurchasePanel = !1,
                    e.isShowComment = !1,
                    e.uiCloseTimer = 0,
                    e.noEpisodeHinterTimer = 0,
                    e.isShowNoPrevEpisodeToast = !1,
                    e.isShowNoNextEpisodeToast = !1,
                    e.isShowShortcutsInfo = !1,
                    e.isShowPageMatchingHint = !1,
                    e.episodeOrd = 0,
                    e.isShowVolumePurchasePanel = !1,
                    e.episodeReadCount = 0,
                    e.isShowFollowReminder = !1,
                    e.isPageHistoryInSet = !1,
                    e.uiScreenTriggerOpenTimer = null,
                    e.showUnfavPanel = !1,
                    e
            }
            return w()(N, [{
                key: "lockPrevNextEpisodeAutoLoad",
                value: function() {
                    this.isAllowPrevNextEpisodeAutoLoad = !1
                }
            }, {
                key: "releasePrevNextEpisodeAutoLoad",
                value: function() {
                    this.isAllowPrevNextEpisodeAutoLoad = !0
                }
            }, {
                key: "getReaderUi",
                value: function() {
                    return this.$refs.readerUi
                }
            }, {
                key: "onUiDisplayStateChange",
                value: function(e) {
                    this.isUiOpen = e
                }
            }, {
                key: "clearErrorAndReInit",
                value: function() {
                    this.errorType = Qn.none,
                        this.errorMessage = "",
                        this.$emit("re-init")
                }
            }, {
                key: "closePageMatchingHoverToast",
                value: function() {
                    this.isShowPageMatchingHint = !1,
                        On.setHintAutoDisplayStatus(!1)
                }
            }, {
                key: "createReaderViewsForEpisode",
                value: function(e) {
                    var t = Array.isArray(this.allEpisodeReaderImages[e]) ? this.allEpisodeReaderImages[e].slice() : [];
                    return this.toPurchaseEpisodeIds.includes(e) ? (t.push(new ge),
                        t) : (this.isInHorizontalMode && this.isInDoublePageMode && this.isAddBlankPage && (t = [new ge].concat(t)),
                        t)
                }
            }, {
                key: "openUi",
                value: function(e) {
                    this.clearUiCloseTimer(),
                        this.isUiOpen = !0,
                    "number" == typeof e && this.reportToolbarDisplayEvent(e)
                }
            }, {
                key: "toggleUi",
                value: function() {
                    this.isUiOpen = !this.isUiOpen
                }
            }, {
                key: "closeUi",
                value: function() {
                    var e = this
                        , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (t)
                        this.uiCloseTimer = window.setTimeout((function() {
                                e.isUiOpen = !1;
                                var t = e.getReaderUi();
                                t && t.closePanel()
                            }
                        ), t);
                    else {
                        this.isUiOpen = !1;
                        var n = this.getReaderUi();
                        n && n.closePanel()
                    }
                }
            }, {
                key: "clearUiCloseTimer",
                value: function() {
                    clearTimeout(this.uiCloseTimer)
                }
            }, {
                key: "onUiClick",
                value: function() {
                    this.clearUiCloseTimer()
                }
            }, {
                key: "openPurchasePanel",
                value: function() {
                    this.seasonData.payMode === X.h.InVolume ? this.isShowVolumePurchasePanel = !0 : this.isShowPurchasePanel = !0
                }
            }, {
                key: "closePurchasePanel",
                value: function() {
                    this.seasonData.payMode === X.h.InVolume && (this.isShowVolumePurchasePanel = !1),
                        this.isShowPurchasePanel = !1
                }
            }, {
                key: "goAppDownloadPage",
                value: function() {
                    ae.a.goAppDownloadPage()
                }
            }, {
                key: "openEpisodeComment",
                value: function() {
                    if (this.isCurrentEpisodeNeedToPurchase)
                        return l.a.warning("现在暂时无法评论该章节哦~");
                    this.isShowComment = !0
                }
            }, {
                key: "getSeasonData",
                value: (D = R()(C.a.mark((function e() {
                            var t, n, i, r;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.isSeasonInLoading) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return this.isSeasonInLoading = !0,
                                                    e.next = 5,
                                                    re.a.getSeasonData(this.seasonId);
                                            case 5:
                                                if (t = e.sent,
                                                    n = t.data,
                                                    i = t.error,
                                                    r = t.code,
                                                    this.isSeasonInLoading = !1,
                                                    !i) {
                                                    e.next = 12;
                                                    break
                                                }
                                                throw i;
                                            case 12:
                                                if (404 !== r) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return window.location.href = "/",
                                                    e.abrupt("return");
                                            case 15:
                                                if (0 === r) {
                                                    e.next = 17;
                                                    break
                                                }
                                                throw new Error("Response code is not 0 but " + r);
                                            case 17:
                                                this.filterEpisodeListOfMangaSeason(n),
                                                    Ke.next((function(e) {
                                                            return Sn(Sn({}, e), {}, {
                                                                seasonData: n
                                                            })
                                                        }
                                                    ));
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return D.apply(this, arguments)
                        }
                )
            }, {
                key: "getMangaEpisodeDetail",
                value: (A = R()(C.a.mark((function e() {
                            var t, n, i;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (this.episodeId) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return k.a.warn("this.episodeId should have not been empty but it was."),
                                                    e.abrupt("return");
                                            case 3:
                                                return e.next = 5,
                                                    ee.getEpisodeData(this.episodeId);
                                            case 5:
                                                if (t = e.sent,
                                                    n = t.data,
                                                    !(i = t.error)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                throw i;
                                            case 10:
                                                Ke.next((function(e) {
                                                        return Sn(Sn({}, e), {}, {
                                                            episodeDetail: n
                                                        })
                                                    }
                                                ));
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return A.apply(this, arguments)
                        }
                )
            }, {
                key: "getFavouriteState",
                value: (g = R()(C.a.mark((function e() {
                            var t, n, i;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (t = this.seasonId,
                                                    this.seasonId) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 3:
                                                return Tn.lock("isFavourite"),
                                                    e.next = 6,
                                                    te.a.hasFavourite(t);
                                            case 6:
                                                n = e.sent,
                                                    i = n.data,
                                                n.error || Ke.next((function(e) {
                                                        return Sn(Sn({}, e), {}, {
                                                            isFavourite: i
                                                        })
                                                    }
                                                )),
                                                    Tn.release("isFavourite");
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return g.apply(this, arguments)
                        }
                )
            }, {
                key: "initReaderMode",
                value: function() {
                    var e = this.seasonData
                        , t = e.allowedReaderMode.indexOf(X.g.Horizontal) > -1 || e.allowedReaderMode.indexOf(X.g.Manga) > -1
                        , n = e.allowedReaderMode.indexOf(X.g.Horizontal) > -1 && e.allowedReaderMode.indexOf(X.g.Manga) > -1
                        , i = e.allowedReaderMode.indexOf(X.g.Scrolling) > -1
                        , r = de.getReaderModeFromStorage();
                    e.allowedReaderMode.indexOf(r) < 0 && (r = e.defaultReaderMode),
                    r === X.g.Landscape && (r = X.g.Horizontal);
                    var o = nt.getHorizontalModeFromStorage();
                    o === pe.a.NotAvailable && (o = pe.a.DoublePage),
                        rt.next((function(e) {
                                return Sn(Sn({}, e), {}, {
                                    isAllowDisplayMessageBox: !0,
                                    isAllowDirectionChange: n,
                                    isAllowHorizontal: t,
                                    isAllowVerticalMode: i,
                                    readerMode: r,
                                    horizontalMode: o
                                })
                            }
                        ))
                }
            }, {
                key: "loadTargetEpisodeImages",
                value: (f = R()(C.a.mark((function e(t, n) {
                            var i, o, s, c, u, d, M, p, f, g, A, D, h, N, j = this;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (o = (i = n || {
                                                    loadInForce: !1,
                                                    stopIfNeedPurchase: !1
                                                }).loadInForce,
                                                    s = i.stopIfNeedPurchase,
                                                    !(this.offlineEpisodeIds.includes(t) || !o && (this.loadingEpisodeIds.includes(t) || this.loadedEpisodeIds.includes(t) || this.failedEpisodeIds.includes(t)))) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 4:
                                                return this.loadingEpisodeIds.push(t),
                                                    ue.removeTargetItem(t, this.failedEpisodeIds),
                                                    e.next = 8,
                                                    wn.loadTargetEpisodeImages(this.seasonId, t, this.imageQuality);
                                            case 8:
                                                if (c = e.sent,
                                                    u = c.data,
                                                    d = c.error,
                                                    M = c.code,
                                                    ue.removeTargetItem(t, this.loadingEpisodeIds),
                                                    !d) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return l.a.error("漫画数据载入失败，非常抱歉，您可稍后重试 " + r.sad()),
                                                    k.a.error("Episode ".concat(t, " 载入失败:"), d),
                                                this.failedEpisodeIds.includes(t) || this.failedEpisodeIds.push(t),
                                                    e.abrupt("return");
                                            case 18:
                                                if (M !== jn.EpisodeNeedToPurchase) {
                                                    e.next = 50;
                                                    break
                                                }
                                                if (!s) {
                                                    e.next = 21;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 21:
                                                if (!this.inPurchaseEpisodeIds.includes(t)) {
                                                    e.next = 23;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 23:
                                                return e.next = 25,
                                                    ne.a.getEpisodePurchaseInfo(t);
                                            case 25:
                                                if (p = e.sent,
                                                    f = p.error,
                                                    g = p.data,
                                                    f) {
                                                    e.next = 33;
                                                    break
                                                }
                                                if (!(g.allowWaitFree || g.remainItem > 0)) {
                                                    e.next = 33;
                                                    break
                                                }
                                                return this.toPurchaseEpisodeIds.push(t),
                                                    e.abrupt("return");
                                            case 33:
                                                return this.inPurchaseEpisodeIds.push(t),
                                                    e.next = 36,
                                                    Ln.tryToPurchaseEpisode(t);
                                            case 36:
                                                if (A = e.sent,
                                                    D = A.error,
                                                    h = A.code,
                                                    N = A.data,
                                                    ue.removeTargetItem(t, this.inPurchaseEpisodeIds),
                                                D || h !== ie.c.Success) {
                                                    e.next = 48;
                                                    break
                                                }
                                                return l.a.success("自动购买成功，已自动扣除 " + N.autoUseItem + " " + r.happy()),
                                                    mn.assignTargetEpisodeAsPurchased(this.seasonData, t),
                                                    this.seasonData.episodeList.some((function(e) {
                                                            if (e.id === t)
                                                                return e.isLocked = !1,
                                                                    !0
                                                        }
                                                    )),
                                                    y.a.refreshUserData(),
                                                    setTimeout((function() {
                                                            return j.reloadCurrentEpisodeImage(t)
                                                        }
                                                    ), 1),
                                                    e.abrupt("return");
                                            case 48:
                                                return this.toPurchaseEpisodeIds.includes(t) || this.toPurchaseEpisodeIds.push(t),
                                                    e.abrupt("return");
                                            case 50:
                                                if (M !== jn.EpisodeIsOffline) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return this.offlineEpisodeIds.includes(t) || this.offlineEpisodeIds.push(t),
                                                    e.abrupt("return");
                                            case 53:
                                                a.default.set(this.allEpisodeReaderImages, t, u),
                                                    this.loadedEpisodeIds.push(t);
                                            case 55:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e, t) {
                            return f.apply(this, arguments)
                        }
                )
            }, {
                key: "showEpisodeLoadingHint",
                value: function(e) {
                    var t = this.seasonData.episodeList.find((function(t) {
                            return t.id === e
                        }
                    )).shortTitle;
                    l.a.info("章节 ".concat(t, " 正在载入中，请稍等喔 ") + r.happy())
                }
            }, {
                key: "goToEpisode",
                value: (p = R()(C.a.mark((function e(t) {
                            var n, i, r, o, a = this;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (n = t.episodeId,
                                                    i = t.loadInForce,
                                                (r = t.pageIndex) < 0 && (r = 0),
                                                this.episodeId !== n || i) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 5:
                                                if (!this.loadingEpisodeIds.includes(n)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return this.showEpisodeLoadingHint(n),
                                                    e.abrupt("return");
                                            case 9:
                                                return e.prev = 9,
                                                    this.episodeId = n,
                                                    e.next = 13,
                                                    this.getMangaEpisodeDetail();
                                            case 13:
                                                if (0 !== this.episodeDetail.seasonId) {
                                                    e.next = 19;
                                                    break
                                                }
                                                return this.errorType = Qn.CountdownBack,
                                                    this.errorMessage = "漫画单话数据不存在或已下线",
                                                    e.abrupt("return");
                                            case 19:
                                                if (this.episodeDetail.seasonId === this.seasonId) {
                                                    e.next = 23;
                                                    break
                                                }
                                                return this.errorType = Qn.CountdownBack,
                                                    this.errorMessage = "漫画单话与漫画数据不匹配",
                                                    e.abrupt("return");
                                            case 23:
                                                e.next = 29;
                                                break;
                                            case 25:
                                                e.prev = 25,
                                                    e.t0 = e.catch(9),
                                                    this.errorType = Qn.Retry,
                                                    this.errorMessage = "漫画单话数据加载失败";
                                            case 29:
                                                return e.next = 31,
                                                    this.loadTargetEpisodeImages(n, {
                                                        loadInForce: i
                                                    });
                                            case 31:
                                                if (!this.offlineEpisodeIds.includes(n)) {
                                                    e.next = 36;
                                                    break
                                                }
                                                return this.errorType = Qn.CountdownBack,
                                                    this.errorMessage = "漫画单话数据不存在或已下线",
                                                    e.abrupt("return");
                                            case 36:
                                                if ((o = this.seasonData.episodeList.find((function(e) {
                                                        return e.id === a.episodeId
                                                    }
                                                ))) && (this.episodeOrd = o.ord),
                                                    this.setPageTitle(),
                                                    this.setMetaData(),
                                                    this.setOgData(),
                                                    this.setCanonical(),
                                                    this.setAlternate(),
                                                    this.replaceHistoryState(),
                                                    this.destroyOtherEpisodeImages(),
                                                    !this.loadedEpisodeIds.includes(n)) {
                                                    e.next = 49;
                                                    break
                                                }
                                                return e.next = 49,
                                                    ce.a.setReadHistory(this.seasonId, n);
                                            case 49:
                                                return this.toPurchaseEpisodeIds.includes(n) ? (this.closePurchasePanel(),
                                                    this.$nextTick((function() {
                                                            return a.openPurchasePanel()
                                                        }
                                                    ))) : (this.closePurchasePanel(),
                                                    this.episodeReadCount += 1),
                                                    e.next = 53,
                                                    x.e.sleep(10);
                                            case 53:
                                                this.goTargetPage(r);
                                            case 54:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[9, 25]])
                        }
                    ))),
                        function(e) {
                            return p.apply(this, arguments)
                        }
                )
            }, {
                key: "onPurchaseDone",
                value: function(e) {
                    var t = this;
                    ue.removeTargetItem(this.episodeId, this.toPurchaseEpisodeIds),
                        this.closePurchasePanel(),
                        this.reloadCurrentEpisodeImage(),
                        ce.a.setReadHistory(this.seasonId, this.episodeId),
                        e.forEach((function(e) {
                                return mn.assignTargetEpisodeAsPurchased(t.seasonData, e)
                            }
                        )),
                        this.getSeasonData()
                }
            }, {
                key: "reloadCurrentEpisodeImage",
                value: (M = R()(C.a.mark((function e() {
                            var t, n = arguments;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : this.episodeId,
                                                    e.next = 3,
                                                    this.loadTargetEpisodeImages(t, {
                                                        loadInForce: !0
                                                    });
                                            case 3:
                                                this.autoLoadImages();
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return M.apply(this, arguments)
                        }
                )
            }, {
                key: "clearNoEpisodeHintTimer",
                value: function() {
                    window.clearTimeout(this.noEpisodeHinterTimer)
                }
            }, {
                key: "showNoPrevEpisodeHint",
                value: function() {
                    var e = this;
                    this.isShowNoPrevEpisodeToast = !0,
                        this.clearNoEpisodeHintTimer(),
                        this.noEpisodeHinterTimer = window.setTimeout((function() {
                                e.isShowNoPrevEpisodeToast = !1
                            }
                        ), 3e3)
                }
            }, {
                key: "showNoNextEpisodeHint",
                value: function() {
                    var e = this;
                    this.isShowNoNextEpisodeToast = !0,
                        this.clearNoEpisodeHintTimer(),
                        this.noEpisodeHinterTimer = window.setTimeout((function() {
                                e.isShowNoNextEpisodeToast = !1
                            }
                        ), 3e3)
                }
            }, {
                key: "goPrevPage",
                value: function() {
                    var e = this.pageIndex - 1
                        , t = this.readerSettingState
                        , n = t.horizontalMode
                        , i = t.readerMode
                        , r = n === pe.a.DoublePage && (i === X.g.Horizontal || i === X.g.Manga);
                    e % 2 != 0 && r && e--,
                        !this.prevEpisodeData && e < 0 ? (e = 0,
                            this.showNoPrevEpisodeHint()) : this.isShowNoNextEpisodeToast = !1,
                        this.goTargetPage(e)
                }
            }, {
                key: "goNextPage",
                value: function() {
                    var e = this.pageIndex + 1;
                    e % 2 != 0 && this.isInDoublePageMode && e++,
                        !this.nextEpisodeData && e > this.episodeReaderViews.length - 1 ? (e = this.episodeReaderViews.length - 1,
                            this.showNoNextEpisodeHint()) : this.isShowNoNextEpisodeToast = !1,
                    this.preventExtraPagingInDoublePageMode() && this.goTargetPage(e)
                }
            }, {
                key: "preventExtraPagingInDoublePageMode",
                value: function() {
                    if (this.isInDoublePageMode && !this.nextEpisodeData) {
                        var e = this.episodeReaderViews.length
                            , t = Math.ceil(e / 2);
                        if (Math.floor(this.pageIndex / 2) + 1 >= t)
                            return !1
                    }
                    return !0
                }
            }, {
                key: "goTargetPage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (this.isInHorizontalMode) {
                        var t = this.episodeReaderViews.length > 0;
                        if (e < 0 && t) {
                            var n = this.prevEpisodeData;
                            if (n) {
                                var i = this.createReaderViewsForEpisode(n.id)
                                    , r = i.length < 1 ? 0 : this.isInDoublePageMode && i.length % 2 == 0 ? i.length - 2 : i.length - 1;
                                this.goToEpisode({
                                    episodeId: n.id,
                                    pageIndex: r
                                })
                            }
                            return
                        }
                        if (e > this.episodeReaderViews.length - 1 && t) {
                            var o = this.nextEpisodeData;
                            return void (o && this.goToEpisode({
                                episodeId: o.id
                            }))
                        }
                        if (t && e <= Me.a.LOAD_PREF_EPISODE_BEFORE && this.isAllowPrevNextEpisodeAutoLoad) {
                            var a = this.prevEpisodeData;
                            a && this.loadTargetEpisodeImages(a.id, {
                                stopIfNeedPurchase: !0
                            })
                        }
                        if (t && e >= this.episodeReaderViews.length - Me.a.LOAD_NEXT_EPISODE_BEFORE && this.isAllowPrevNextEpisodeAutoLoad) {
                            var s = this.nextEpisodeData;
                            s && this.loadTargetEpisodeImages(s.id, {
                                stopIfNeedPurchase: !0
                            })
                        }
                        if (!t)
                            return void (this.pageIndex = 0)
                    }
                    this.pageIndex = e,
                    this.isInHorizontalMode && this.destroyImages(),
                        this.autoLoadImages(),
                        this.setPageHistory()
                }
            }, {
                key: "setPageHistory",
                value: (d = R()(C.a.mark((function e() {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.isPageHistoryInSet) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                if (this.isPageHistoryInSet = !0,
                                                    !(this.pageIndex >= this.episodeReaderViews.length - 1)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.next = 7,
                                                    se.a.removeHistory(this.episodeId);
                                            case 7:
                                                e.next = 11;
                                                break;
                                            case 9:
                                                return e.next = 11,
                                                    se.a.addRecord(this.episodeId, this.pageIndex);
                                            case 11:
                                                this.isPageHistoryInSet = !1;
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return d.apply(this, arguments)
                        }
                )
            }, {
                key: "autoLoadImages",
                value: function() {
                    var e = this.pageIndex - Me.a.PREV_IMAGE_LOAD_COUNT
                        , t = this.pageIndex + Me.a.NEXT_IMAGE_LOAD_COUNT;
                    this.episodeReaderViews.filter((function(n, i) {
                            return i <= t && i >= e && n instanceof Ae.a
                        }
                    )).forEach(function() {
                        var e = R()(C.a.mark((function e(t) {
                                return C.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        t.loadImage();
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "destroyOtherEpisodeImages",
                value: function() {
                    var e = this;
                    Object.keys(this.allEpisodeReaderImages).filter((function(t) {
                            return t !== e.episodeId.toString()
                        }
                    )).forEach((function(t) {
                            e.allEpisodeReaderImages[t].forEach((function(e) {
                                    e instanceof Ae.a && e.destroy()
                                }
                            ))
                        }
                    ))
                }
            }, {
                key: "destroyImages",
                value: function() {
                    var e = this.pageIndex - Me.a.IN_MEMORY_IMAGE_PREV
                        , t = this.pageIndex + Me.a.IN_MEMORY_IMAGE_NEXT;
                    this.episodeReaderImages.filter((function(n, i) {
                            return i < e || i > t
                        }
                    )).forEach((function(e) {
                            e instanceof Ae.a && e.destroy()
                        }
                    ))
                }
            }, {
                key: "replaceHistoryState",
                value: function() {
                    var e = this.seasonData
                        , t = this.episodeId
                        , n = this.episodeDetail;
                    if (e && t && n) {
                        var i = e.id
                            , r = K.createPageTitle(e, n)
                            , o = window.location.search;
                        window.history.replaceState({
                            seasonId: i,
                            episodeId: t
                        }, r, "/mc".concat(i, "/").concat(t).concat(o))
                    }
                }
            }, {
                key: "doPageMatching",
                value: function() {
                    if (this.isInHorizontalMode && this.isInDoublePageMode) {
                        var e = !nt.checkIsAppendBlankPageInDoubleMode();
                        this.updateAddBlankPageState(e),
                        this.pageIndex >= this.episodeReaderViews.length && this.goTargetPage(this.pageIndex - 2)
                    }
                }
            }, {
                key: "updateAddBlankPageState",
                value: function(e) {
                    this.isAddBlankPage = e,
                        nt.setBlankPageAppendingInDoubleMode(e),
                        rt.next((function(t) {
                                return Sn(Sn({}, t), {}, {
                                    isAddBlankPage: e
                                })
                            }
                        ))
                }
            }, {
                key: "onUiEpisodeSwitch",
                value: (c = R()(C.a.mark((function e(t) {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return this.lockPrevNextEpisodeAutoLoad(),
                                                    e.next = 3,
                                                    this.goToEpisode(t);
                                            case 3:
                                                this.releasePrevNextEpisodeAutoLoad();
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return c.apply(this, arguments)
                        }
                )
            }, {
                key: "goPrevEpisode",
                value: (s = R()(C.a.mark((function e() {
                            var t, n;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!(t = this.prevEpisodeData)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return n = t.id,
                                                    e.t0 = this,
                                                    e.t1 = n,
                                                    e.next = 7,
                                                    se.a.getPageHistory(n);
                                            case 7:
                                                e.t2 = e.sent,
                                                    e.t3 = {
                                                        episodeId: e.t1,
                                                        pageIndex: e.t2
                                                    },
                                                    e.t0.onUiEpisodeSwitch.call(e.t0, e.t3);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return s.apply(this, arguments)
                        }
                )
            }, {
                key: "goNextEpisode",
                value: (o = R()(C.a.mark((function e() {
                            var t, n;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!(t = this.nextEpisodeData)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return n = t.id,
                                                    e.t0 = this,
                                                    e.t1 = n,
                                                    e.next = 7,
                                                    se.a.getPageHistory(n);
                                            case 7:
                                                e.t2 = e.sent,
                                                    e.t3 = {
                                                        episodeId: e.t1,
                                                        pageIndex: e.t2
                                                    },
                                                    e.t0.onUiEpisodeSwitch.call(e.t0, e.t3);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return o.apply(this, arguments)
                        }
                )
            }, {
                key: "switchReaderMode",
                value: function(e) {
                    rt.next((function(t) {
                            return Sn(Sn({}, t), {}, {
                                readerMode: e
                            })
                        }
                    )),
                        this.zoomFactor = 1,
                        de.setReaderModeToStorage(e)
                }
            }, {
                key: "clearScreenTriggerOpenTimer",
                value: function() {
                    clearTimeout(this.uiScreenTriggerOpenTimer),
                        this.uiScreenTriggerOpenTimer = null
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    var t = this
                        , n = e.clientY
                        , i = window.innerHeight;
                    n <= 50 || i - n <= 50 ? this.uiScreenTriggerOpenTimer || (this.uiScreenTriggerOpenTimer = setTimeout((function() {
                            t.openUi(3)
                        }
                    ), 500)) : this.clearScreenTriggerOpenTimer()
                }
            }, {
                key: "reportToolbarDisplayEvent",
                value: function(e) {
                    this.seasonId && this.episodeData && this.$sendStatisticsEvent({
                        reportConfig: {
                            spmId: "777.17.toobar.click"
                        },
                        msg: {
                            manga_id: this.seasonId + "",
                            manga_num: this.episodeData.id + "",
                            type: e
                        }
                    })
                }
            }, {
                key: "onMouseMoveUi",
                value: function() {
                    this.clearUiCloseTimer()
                }
            }, {
                key: "onMouseLeaveUi",
                value: function() {
                    this.clearScreenTriggerOpenTimer(),
                        this.closeUi(1500)
                }
            }, {
                key: "onUiAnyClick",
                value: function() {
                    this.clearUiCloseTimer()
                }
            }, {
                key: "onKeyDownHandler",
                value: function(e) {
                    var t = e.key;
                    e.ctrlKey && ("=" !== t && "+" !== t && "-" !== t && "_" !== t || e.preventDefault())
                }
            }, {
                key: "onKeyUpHandler",
                value: function(e) {
                    var t = e.key
                        , n = e.altKey
                        , i = e.ctrlKey
                        , r = e.shiftKey
                        , o = e.metaKey
                        , a = !(i || n || r || o)
                        , s = i && !n && !r
                        , c = r && !i && !n
                        , u = this.zoomFactor > 1
                        , l = this.readerSettingState.readerMode === X.g.Manga
                        , d = this.isInHorizontalMode
                        , M = this.isInDoublePageMode
                        , p = this.seasonData.allowedReaderMode
                        , f = p.includes(X.g.Manga) || p.includes(X.g.Horizontal);
                    if (s) {
                        if ("0" === t)
                            return e.preventDefault(),
                                this.onZoomReset();
                        if ("+" === t || "=" === t)
                            return e.preventDefault(),
                                this.onZoomIn();
                        if ("-" === t || "_" === t)
                            return e.preventDefault(),
                                this.onZoomOut();
                        if ("ArrowLeft" === t && f)
                            return this.switchReaderMode(X.g.Manga);
                        if ("ArrowRight" === t && f)
                            return this.switchReaderMode(X.g.Horizontal);
                        if ("ArrowDown" === t && p.includes(X.g.Scrolling))
                            return this.switchReaderMode(X.g.Scrolling)
                    }
                    if (c && !u) {
                        if ("ArrowLeft" === t)
                            return l ? this.goNextEpisode() : this.goPrevEpisode(),
                                void this.closeUi();
                        if ("ArrowRight" === t)
                            return l ? this.goPrevEpisode() : this.goNextEpisode(),
                                void this.closeUi()
                    }
                    switch (t) {
                        case "ArrowLeft":
                            return void (a && d && !u && (l ? this.goNextPage() : this.goPrevPage(),
                                this.closeUi()));
                        case "ArrowRight":
                            return void (a && d && !u && (l ? this.goPrevPage() : this.goNextPage(),
                                this.closeUi()));
                        case "ArrowUp":
                        case "PageUp":
                        case "Backspace":
                            return void (d && a && !u && (this.goPrevPage(),
                                this.closeUi()));
                        case "ArrowDown":
                        case "PageDown":
                        case " ":
                            return void (d && a && !u && (this.goNextPage(),
                                this.closeUi()));
                        case "Home":
                            return void (d && a && (this.goTargetPage(0),
                                this.closeUi()));
                        case "End":
                            return void (d && a && (this.goTargetPage(this.episodeReaderViews.length - 1),
                                this.closeUi()));
                        case "c":
                            return void (M && a && this.doPageMatching());
                        case "Enter":
                            return void (!n && this.toggleUi())
                    }
                }
            }, {
                key: "setPageTitle",
                value: function() {
                    var e = K.createPageTitle(this.seasonData, this.episodeDetail);
                    oe.a.setPageTitle(e)
                }
            }, {
                key: "setMetaData",
                value: function() {
                    var e = this.seasonData.title.trim()
                        , t = this.episodeDetail.shortTitle.trim()
                        , n = this.episodeDetail.title.trim()
                        , i = "".concat(e, "漫画, ").concat(e, "全集");
                    t && (i += ", ".concat(t)),
                    n && (i += ", ".concat(n)),
                        i += " , 哔哩哔哩漫画, bilibili 漫画官方网站",
                        oe.a.setKeywords(i);
                    var r = this.seasonData.evaluate;
                    oe.a.setDescription(r)
                }
            }, {
                key: "setOgData",
                value: function() {
                    var e = this.seasonData
                        , t = this.episodeData
                        , n = "".concat(t.shortTitle, " - ").concat(e.title, " - 漫画全集在线观看 - 哔哩哔哩漫画")
                        , i = u.a.bfsLink(e.verticalCover, 500)
                        , r = window.location.origin + window.location.pathname
                        , o = e.evaluate.replace(/[\n\r]/, "");
                    oe.a.setOgMetaTags({
                        title: n,
                        url: r,
                        image: i,
                        description: o
                    })
                }
            }, {
                key: "setCanonical",
                value: function() {
                    oe.a.setCanonical()
                }
            }, {
                key: "setAlternate",
                value: function() {
                    var e = this.seasonId
                        , t = this.episodeId;
                    if (!(e < 1 || t < 1)) {
                        var n = "https://manga.bilibili.com/m/mc".concat(e, "/").concat(t);
                        oe.a.setAlternate(n)
                    }
                }
            }, {
                key: "openShortcutsInfo",
                value: function() {
                    this.isShowShortcutsInfo = !0
                }
            }, {
                key: "onWatchIsInDoublePageMode",
                value: function(e) {
                    e && (On.getHintAutoDisplayStatus() && (this.isShowPageMatchingHint = !0))
                }
            }, {
                key: "thisSeasonDoesNotExist",
                value: function() {
                    this.errorType = Qn.CountdownBack,
                        this.errorMessage = "漫画数据不存在或已下线"
                }
            }, {
                key: "init",
                value: (i = R()(C.a.mark((function e(t, n) {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return this.seasonId = t,
                                                    e.prev = 1,
                                                    this.lockPrevNextEpisodeAutoLoad(),
                                                    e.next = 5,
                                                    this.getSeasonData();
                                            case 5:
                                                if (0 !== this.seasonData.id) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", this.thisSeasonDoesNotExist());
                                            case 7:
                                                return this.initReaderMode(),
                                                    e.t0 = this,
                                                    e.t1 = n,
                                                    e.next = 12,
                                                    se.a.getPageHistory(n);
                                            case 12:
                                                return e.t2 = e.sent,
                                                    e.t3 = {
                                                        episodeId: e.t1,
                                                        pageIndex: e.t2
                                                    },
                                                    e.next = 16,
                                                    e.t0.goToEpisode.call(e.t0, e.t3);
                                            case 16:
                                                this.getFavouriteState(),
                                                    this.isFirstInitFinished = !0,
                                                    this.releasePrevNextEpisodeAutoLoad(),
                                                    e.next = 27;
                                                break;
                                            case 21:
                                                e.prev = 21,
                                                    e.t4 = e.catch(1),
                                                    this.errorType = Qn.Retry,
                                                    this.errorMessage = "漫画阅读器初始化失败 " + (e.t4 && e.t4.message),
                                                    l.a.error("漫画加载失败，请稍后再试，非常抱歉 " + r.sad()),
                                                    k.a.error("漫画数据初始化失败:", e.t4);
                                            case 27:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[1, 21]])
                        }
                    ))),
                        function(e, t) {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "initWatchers",
                value: function() {
                    this.$watch("isInDoublePageMode", this.onWatchIsInDoublePageMode, {
                        immediate: !0
                    })
                }
            }, {
                key: "onZoomIn",
                value: function() {
                    this.zoomFactor - 2 < Number.EPSILON && (this.zoomFactor += .1)
                }
            }, {
                key: "onZoomOut",
                value: function() {
                    this.zoomFactor - .5 > Number.EPSILON && (this.zoomFactor -= .1)
                }
            }, {
                key: "onZoomReset",
                value: function() {
                    this.zoomFactor = 1
                }
            }, {
                key: "onWheel",
                value: function(e) {
                    var t = e.deltaY
                        , n = e.ctrlKey
                        , i = e.detail
                        , r = (t || i) < 0;
                    n && (e.preventDefault(),
                        e.stopPropagation(),
                        r ? this.onZoomIn() : this.onZoomOut())
                }
            }, {
                key: "filterEpisodeListOfMangaSeason",
                value: function(e) {
                    "purchased_comic" === B.a.parse(document.location.search, {
                        ignoreQueryPrefix: !0
                    }).from && (e.episodeList = e.episodeList.filter((function(e) {
                            return e.isUnlockedEpisode
                        }
                    )))
                }
            }, {
                key: "toggleFavourite",
                value: function() {
                    this.isFavourite ? this.showUnfavPanel = !0 : this.setFavorite(!0)
                }
            }, {
                key: "setFavorite",
                value: (n = R()(C.a.mark((function e(t) {
                            var n, i, o, a;
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.isInFavourite) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                if (Tn.lock("isFavourite"),
                                                    !t) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.next = 6,
                                                    te.a.addFavourite([this.seasonId]);
                                            case 6:
                                                e.t0 = e.sent,
                                                    e.next = 12;
                                                break;
                                            case 9:
                                                return e.next = 11,
                                                    te.a.removeFavourite([this.seasonId]);
                                            case 11:
                                                e.t0 = e.sent;
                                            case 12:
                                                if (n = e.t0,
                                                    i = n.error,
                                                    o = n.code,
                                                    Tn.release("isFavourite"),
                                                    !i) {
                                                    e.next = 20;
                                                    break
                                                }
                                                return l.a.error("操作失败，请稍后再试，非常抱歉 " + r.sad()),
                                                    k.a.error("追漫操作失败:", i),
                                                    e.abrupt("return");
                                            case 20:
                                                if (0 !== o) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return a = t ? "已加入豪华午餐 " + r.happy() : "我已经不再喜欢你了 " + r.helpless(),
                                                    l.a.success(a),
                                                    Ke.next((function(e) {
                                                            return Sn(Sn({}, e), {}, {
                                                                isFavourite: t
                                                            })
                                                        }
                                                    )),
                                                t && this.hideFollowReminder(),
                                                    e.abrupt("return");
                                            case 26:
                                                l.a.error("[".concat(o, "] 操作失败，请稍后再试，非常抱歉 ") + r.sad()),
                                                    k.a.error("操作追漫失败: 服务器返回装填码 " + o);
                                            case 28:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "onWatchEpisodeId",
                value: function(e) {
                    this.hideFollowReminder(),
                        this.$sendStatisticsEvent({
                            reportConfig: {
                                spmId: "777.17.0.show"
                            },
                            msg: {
                                manga_id: this.seasonId,
                                manga_num: e
                            }
                        })
                }
            }, {
                key: "onWatchEpisodeReadCount",
                value: function(e) {
                    3 === e && this.showFollowReminder()
                }
            }, {
                key: "onWatchIsShowPurchasePanel",
                value: function(e, t) {
                    !1 === e && !0 === t && (this.episodeReadCount += 1)
                }
            }, {
                key: "onWatchPageIndex",
                value: function() {
                    this.isShowFollowReminder && this.hideFollowReminder()
                }
            }, {
                key: "showFollowReminder",
                value: (t = R()(C.a.mark((function e() {
                            return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!this.isFavourite) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return e.next = 4,
                                                    gn.getLastReminderDate(this.seasonId);
                                            case 4:
                                                e.sent.getTime() < (new Date).getTime() - 864e5 && (this.isShowFollowReminder = !0,
                                                    gn.addRecord(this.seasonId),
                                                    this.$sendStatisticsEvent({
                                                        reportConfig: {
                                                            spmId: "777.17.follow_remind.show"
                                                        },
                                                        msg: {
                                                            manga_id: this.seasonId
                                                        }
                                                    }));
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "setFavoriteFromReminder",
                value: function() {
                    this.setFavorite(!0),
                        this.$sendStatisticsEvent({
                            reportConfig: {
                                spmId: "777.17.follow_remind.click"
                            },
                            msg: {
                                manga_id: this.seasonId
                            }
                        })
                }
            }, {
                key: "hideFollowReminder",
                value: function() {
                    this.isShowFollowReminder = !1
                }
            }, {
                key: "created",
                value: function() {
                    this.initWatchers()
                }
            }, {
                key: "mounted",
                value: function() {
                    this.closeUi(2e3),
                        window.addEventListener("keydown", this.onKeyDownHandler),
                        window.addEventListener("keyup", this.onKeyUpHandler)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.clearUiCloseTimer(),
                        this.clearNoEpisodeHintTimer(),
                        window.removeEventListener("keydown", this.onKeyDownHandler),
                        window.removeEventListener("keyup", this.onKeyUpHandler)
                }
            }, {
                key: "seasonData",
                get: function() {
                    return this.mangaInfoState ? this.mangaInfoState.seasonData : new X.c
                }
            }, {
                key: "episodeDetail",
                get: function() {
                    return this.mangaInfoState ? this.mangaInfoState.episodeDetail : new H
                }
            }, {
                key: "isUiOpenOrAnyPanelShowing",
                get: function() {
                    return this.isUiOpen || this.isShowPurchasePanel
                }
            }, {
                key: "isShowDirectionSwitchHint",
                get: function() {
                    var e = this.readerSettingState.readerMode;
                    return !this.isShowPurchasePanel && e !== X.g.Scrolling
                }
            }, {
                key: "isNormalReadModel",
                get: function() {
                    var e = this.readerSettingState.readerMode;
                    return 2 !== e && (4 === e || void 0)
                }
            }, {
                key: "episodeData",
                get: function() {
                    var e = this
                        , t = null;
                    return this.seasonData && (t = this.seasonData.episodeList.find((function(t) {
                            return t.id === e.episodeId
                        }
                    ))),
                        t
                }
            }, {
                key: "prevEpisodeData",
                get: function() {
                    var e = this.episodeData;
                    return e ? xn.getPrevEpisodeData(e, this.seasonData) : null
                }
            }, {
                key: "nextEpisodeData",
                get: function() {
                    var e = this.episodeData;
                    return e ? xn.getNextEpisodeData(e, this.seasonData) : null
                }
            }, {
                key: "episodeReaderImages",
                get: function() {
                    return Array.isArray(this.allEpisodeReaderImages[this.episodeId]) ? this.allEpisodeReaderImages[this.episodeId].slice() : []
                }
            }, {
                key: "episodeReaderViews",
                get: function() {
                    return this.createReaderViewsForEpisode(this.episodeId)
                }
            }, {
                key: "isAnyImageInLoading",
                get: function() {
                    return this.episodeReaderImages.map((function(e) {
                            return e.vm
                        }
                    )).filter((function(e) {
                            return e.inLoading
                        }
                    )).length > 0
                }
            }, {
                key: "isPrevOrNextEpisodeInLoading",
                get: function() {
                    return this.prevEpisodeData && this.nextEpisodeData && (this.loadingEpisodeIds.includes(this.prevEpisodeData.id) || this.loadingEpisodeIds.includes(this.nextEpisodeData.id))
                }
            }, {
                key: "isInHorizontalMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Horizontal || this.readerSettingState.readerMode === X.g.Manga
                }
            }, {
                key: "isInDoublePageMode",
                get: function() {
                    return this.isInHorizontalMode && this.readerSettingState.horizontalMode === pe.a.DoublePage
                }
            }, {
                key: "isInVerticalMode",
                get: function() {
                    return this.readerSettingState.readerMode === X.g.Scrolling
                }
            }, {
                key: "isCurrentEpisodeNeedToPurchase",
                get: function() {
                    return this.toPurchaseEpisodeIds.includes(this.episodeId)
                }
            }, {
                key: "isInFavourite",
                get: function() {
                    return this.loadingStatusState.isFavourite
                }
            }, {
                key: "isFavourite",
                get: function() {
                    return this.mangaInfoState && this.mangaInfoState.isFavourite
                }
            }, {
                key: "unfavReportInfo",
                get: function() {
                    return {
                        location: W.a.Reader,
                        manga_id: this.seasonId,
                        manga_num: this.episodeId
                    }
                }
            }]),
                N
        }(a.default);
        Pn([Object(o.f)("openPurchasePanel"), Un("design:type", Function), Un("design:paramtypes", []), Un("design:returntype", void 0)], Rn.prototype, "openPurchasePanel", null),
            Pn([Object(o.f)("goToEpisode"), Un("design:type", Function), Un("design:paramtypes", [Object]), Un("design:returntype", Promise)], Rn.prototype, "goToEpisode", null),
            Pn([Object(o.f)("onUiEpisodeSwitch"), Un("design:type", Function), Un("design:paramtypes", [Object]), Un("design:returntype", Promise)], Rn.prototype, "onUiEpisodeSwitch", null),
            Pn([Object(o.f)("switchReaderMode"), Un("design:type", Function), Un("design:paramtypes", [Number]), Un("design:returntype", void 0)], Rn.prototype, "switchReaderMode", null),
            Pn([Object(F.a)(F.b.ReaderPage), Un("design:type", Function), Un("design:paramtypes", [Number, Number]), Un("design:returntype", Promise)], Rn.prototype, "init", null),
            Pn([Object(_.a)(), Un("design:type", Function), Un("design:paramtypes", [Boolean]), Un("design:returntype", Promise)], Rn.prototype, "setFavorite", null),
            Pn([Object(o.g)("episodeId"), Un("design:type", Function), Un("design:paramtypes", [Number]), Un("design:returntype", void 0)], Rn.prototype, "onWatchEpisodeId", null),
            Pn([Object(o.g)("episodeReadCount"), Un("design:type", Function), Un("design:paramtypes", [Number]), Un("design:returntype", void 0)], Rn.prototype, "onWatchEpisodeReadCount", null),
            Pn([Object(o.g)("isShowPurchasePanel"), Un("design:type", Function), Un("design:paramtypes", [Object, Object]), Un("design:returntype", void 0)], Rn.prototype, "onWatchIsShowPurchasePanel", null),
            Pn([Object(o.g)("pageIndex"), Un("design:type", Function), Un("design:paramtypes", []), Un("design:returntype", void 0)], Rn.prototype, "onWatchPageIndex", null);
        var Yn = Rn = Pn([Object(o.b)({
            components: {
                HorizontalMode: function() {
                    return n.e(21).then(n.bind(null, "VztH"))
                },
                VerticalMode: function() {
                    return n.e(22).then(n.bind(null, "bqNt"))
                },
                PurchasePanel: function() {
                    return Promise.all([n.e(2), n.e(4)]).then(n.bind(null, "0zoM"))
                },
                PurchasePlaceholder: function() {
                    return n.e(29).then(n.bind(null, "M1pz"))
                },
                ShortcutsInfo: function() {
                    return n.e(26).then(n.bind(null, "jSF1"))
                },
                CountdownErrorPage: function() {
                    return n.e(27).then(n.bind(null, "d5ph"))
                },
                RetryErrorPage: function() {
                    return n.e(28).then(n.bind(null, "nTv8"))
                },
                InfoHud: dt,
                ReaderUi: pn,
                MessageBox: At,
                FloatingButton: Pe,
                EpisodeComment: Te,
                EpisodeToast: Le,
                HoverToast: He,
                UnfavoritePanel: De.a,
                VolumePurchasePanel: function() {
                    return n.e(31).then(n.bind(null, "jFkE"))
                },
                FollowReminder: We
            },
            subscriptions: function() {
                return {
                    readerSettingState: ot,
                    mangaInfoState: $e,
                    loadingStatusState: jt
                }
            }
        })], Rn)
            , Bn = Object(Ie.a)(Yn, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "manga-reader p-relative",
                    on: {
                        contextmenu: function(t) {
                            t.preventDefault(),
                                t.stopPropagation(),
                                e.isUiOpenOrAnyPanelShowing ? e.closeUi() : e.openUi(2)
                        },
                        click: function(t) {
                            return t.stopPropagation(),
                                e.onUiClick(t)
                        },
                        "!wheel": function(t) {
                            return e.onWheel(t)
                        },
                        mousemove: e.onMouseMove
                    }
                }, [e.errorType === e.errorPageTypeMap.CountdownBack ? [i("countdown-error-page", {
                    attrs: {
                        message: e.errorMessage
                    }
                })] : e.errorType === e.errorPageTypeMap.Retry ? [i("retry-error-page", {
                    attrs: {
                        message: e.errorMessage
                    },
                    on: {
                        retry: e.clearErrorAndReInit
                    }
                })] : e.isSeasonInLoading ? [i("jk-vertical-center", {
                    staticClass: "h-100"
                }, [i("p", [e._v("载入中 " + e._s(e.$emoji.happy()))])])] : [i("div", {
                    staticClass: "reader-body w-100 h-100 p-absolute p-zero",
                    on: {
                        "!click": function(t) {
                            return e.closeUi()
                        }
                    }
                }, [e.isInHorizontalMode ? i("horizontal-mode", {
                    staticClass: "h-100",
                    attrs: {
                        "page-index": e.pageIndex,
                        "image-list": e.episodeReaderViews,
                        "horizontal-mode": e.readerSettingState.horizontalMode,
                        "reader-mode": e.readerSettingState.readerMode,
                        "manga-default-reader-mode": e.seasonData.defaultReaderMode,
                        "zoom-factor": e.zoomFactor,
                        "next-episode-data": e.nextEpisodeData,
                        "is-paid": e.isShowPurchasePanel
                    },
                    on: {
                        "go-prev": e.goPrevPage,
                        "go-next": e.goNextPage,
                        "zoom-step-in": e.onZoomIn,
                        "zoom-step-out": e.onZoomOut
                    }
                }) : e._e(), e.isInVerticalMode ? i("vertical-mode", {
                    staticClass: "h-100",
                    attrs: {
                        "page-index": e.pageIndex,
                        "image-list": e.episodeReaderViews,
                        "prev-episode-data": e.prevEpisodeData,
                        "next-episode-data": e.nextEpisodeData,
                        "is-hide-ep-switch-button": e.isCurrentEpisodeNeedToPurchase,
                        "zoom-factor": e.zoomFactor
                    },
                    on: {
                        "page-switch": e.goTargetPage
                    }
                }) : e._e()], 1), i("info-hud", {
                    staticClass: "info-hud p-absolute info-layer",
                    attrs: {
                        "page-index": e.pageIndex,
                        "page-count": e.episodeReaderViews.length,
                        "short-title": (e.episodeData || {}).shortTitleFormattedPrefix,
                        "show-progress": e.isAnyImageInLoading || e.isPrevOrNextEpisodeInLoading,
                        "only-show-episode": e.episodeReaderImages.length < 1
                    }
                }), i("message-box", {
                    staticClass: "message-box p-absolute info-layer",
                    attrs: {
                        "is-normal-read-model": e.isNormalReadModel,
                        "is-show-direction": e.isShowDirectionSwitchHint
                    }
                }), i("episode-toast", {
                    staticClass: "episode-toast p-absolute info-layer",
                    attrs: {
                        "is-show-pre-episode-toast": e.isShowNoPrevEpisodeToast,
                        "is-show-nex-episode-toast": e.isShowNoNextEpisodeToast
                    }
                }), i("div", {
                    on: {
                        "!click": function(t) {
                            return e.closeUi()
                        }
                    }
                }, [i("volume-purchase-panel", {
                    staticClass: "volume-purchase-panel",
                    on: {
                        click: e.goAppDownloadPage
                    },
                    model: {
                        value: e.isShowVolumePurchasePanel,
                        callback: function(t) {
                            e.isShowVolumePurchasePanel = t
                        },
                        expression: "isShowVolumePurchasePanel"
                    }
                }), i("purchase-panel", {
                    ref: "purchasePanel",
                    staticClass: "purchase-panel",
                    attrs: {
                        "manga-season": e.seasonData,
                        "episode-id": e.episodeId,
                        "episode-ord": e.episodeOrd,
                        "short-title": e.episodeDetail.shortTitle,
                        "epi-purchase": e.isCurrentEpisodeNeedToPurchase
                    },
                    on: {
                        "purchase-done": e.onPurchaseDone
                    },
                    model: {
                        value: e.isShowPurchasePanel,
                        callback: function(t) {
                            e.isShowPurchasePanel = t
                        },
                        expression: "isShowPurchasePanel"
                    }
                })], 1), i("div", {
                    staticClass: "floating-buttons p-absolute info-layer"
                }, [i("div", {
                    staticClass: "t-right"
                }, [i("floating-button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.question_icon.click",
                        expression: "'777.17.question_icon.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            manga_id: e.seasonData.id + "",
                            manga_num: e.episodeId + ""
                        },
                        expression: "{manga_id: seasonData.id + '', manga_num: episodeId + ''}"
                    }],
                    staticClass: "shortcuts-info",
                    attrs: {
                        round: "",
                        title: "快捷键说明"
                    },
                    on: {
                        click: e.openShortcutsInfo
                    }
                }, [e._v("?")])], 1), i("transition", {
                    attrs: {
                        "enter-active-class": "a-scale-in-ease",
                        "leave-active-class": "a-scale-out-ease"
                    }
                }, [e.isInDoublePageMode ? i("hover-toast", {
                    staticClass: "page-matching-button",
                    attrs: {
                        "external-control": !0,
                        mode: "left"
                    },
                    model: {
                        value: e.isShowPageMatchingHint,
                        callback: function(t) {
                            e.isShowPageMatchingHint = t
                        },
                        expression: "isShowPageMatchingHint"
                    }
                }, [i("floating-button", {
                    directives: [{
                        name: "click-report",
                        rawName: "v-click-report",
                        value: "777.17.cross_page.click",
                        expression: "'777.17.cross_page.click'"
                    }, {
                        name: "report-msg",
                        rawName: "v-report-msg",
                        value: {
                            manga_id: e.seasonData.id + "",
                            manga_num: e.episodeId + "",
                            target_ways: e.isAddBlankPage ? "2" : "1"
                        },
                        expression: "{manga_id: seasonData.id + '', manga_num: episodeId + '', target_ways: isAddBlankPage ? '2': '1'}"
                    }],
                    staticStyle: {
                        width: "130px"
                    },
                    attrs: {
                        slot: "activator",
                        title: "当您在并页模式阅读时，如果出现合并不正确的情况，请点击进行修正"
                    },
                    on: {
                        click: e.doPageMatching
                    },
                    slot: "activator"
                }, [i("span", [e._v("更改跨页匹配")]), i("span", {
                    staticStyle: {
                        "margin-left": "5px",
                        opacity: ".5"
                    }
                }, [e._v("(C)")])]), i("div", [i("span", {
                    staticClass: "dp-i-block v-middle"
                }, [e._v("如果跨页内容不匹配，可以尝试点击修正")]), i("button", {
                    staticClass: "app-button dp-i-block v-middle",
                    staticStyle: {
                        padding: "0",
                        margin: "0 0 0 10px"
                    },
                    on: {
                        click: e.closePageMatchingHoverToast
                    }
                }, [i("img", {
                    staticClass: "v-middle",
                    attrs: {
                        src: n("ys8D"),
                        width: "18",
                        height: "18"
                    }
                })])])], 1) : e._e()], 1), i("div", [i("floating-button", {
                    staticClass: "ui-opener",
                    on: {
                        click: function(t) {
                            return e.openUi(1)
                        }
                    }
                }, [i("img", {
                    staticClass: "v-middle",
                    attrs: {
                        src: n("4ps3")
                    }
                }), i("span", {
                    staticClass: "v-middle",
                    staticStyle: {
                        "margin-left": "8px"
                    }
                }, [e._v("显示工具栏")])])], 1)], 1), i("reader-ui", {
                    ref: "readerUi",
                    attrs: {
                        value: e.isUiOpenOrAnyPanelShowing,
                        "manga-season": e.seasonData,
                        "current-episode-id": e.episodeId,
                        "prev-episode": e.prevEpisodeData,
                        "next-episode": e.nextEpisodeData,
                        "page-index": e.pageIndex,
                        "page-count": e.episodeReaderViews.length,
                        "loading-episode-ids": e.loadingEpisodeIds,
                        "failed-episode-ids": e.failedEpisodeIds,
                        "zoom-factor": e.zoomFactor
                    },
                    on: {
                        input: e.onUiDisplayStateChange,
                        "episode-switch": e.onUiEpisodeSwitch,
                        "page-switch": e.goTargetPage,
                        "page-matching": e.doPageMatching,
                        "open-comment": e.openEpisodeComment,
                        "mouse-move-ui": e.onMouseMoveUi,
                        "mouse-leave-ui": e.onMouseLeaveUi,
                        "ui-any-click": e.onUiAnyClick,
                        "zoom-step-in": e.onZoomIn,
                        "zoom-step-out": e.onZoomOut,
                        "zoom-reset": e.onZoomReset,
                        "toggle-favourite": e.toggleFavourite
                    }
                }), i("unfavorite-panel", {
                    attrs: {
                        "report-info": e.unfavReportInfo
                    },
                    on: {
                        unfavorite: function(t) {
                            return e.setFavorite(!1)
                        }
                    },
                    model: {
                        value: e.showUnfavPanel,
                        callback: function(t) {
                            e.showUnfavPanel = t
                        },
                        expression: "showUnfavPanel"
                    }
                }), i("episode-comment", {
                    ref: "episodeComment",
                    attrs: {
                        "episode-id": e.episodeId
                    },
                    model: {
                        value: e.isShowComment,
                        callback: function(t) {
                            e.isShowComment = t
                        },
                        expression: "isShowComment"
                    }
                }), i("shortcuts-info", {
                    model: {
                        value: e.isShowShortcutsInfo,
                        callback: function(t) {
                            e.isShowShortcutsInfo = t
                        },
                        expression: "isShowShortcutsInfo"
                    }
                }), i("transition", {
                    attrs: {
                        "enter-active-class": "a-move-in-right",
                        "leave-active-class": "a-move-out-left"
                    }
                }, [e.isShowFollowReminder ? i("follow-reminder", {
                    on: {
                        close: function(t) {
                            return e.hideFollowReminder()
                        },
                        follow: function(t) {
                            return e.setFavoriteFromReminder()
                        }
                    }
                }) : e._e()], 1)]], 2)
            }
        ), [], !1, null, "12b79049", null).exports
            , Wn = Object(Ie.a)({}, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("jk-vertical-center", [n("div", {
                    staticClass: "incorrect-url t-center"
                }, [n("p", [e._v("走错门了吧骚年 " + e._s(e.$emoji.angry()))]), n("p", [e._v("请注意 URL 的正确性喔 " + e._s(e.$emoji.helpless()))]), n("a", {
                    attrs: {
                        href: "/classify"
                    }
                }, [n("manga-button", [e._v("返回")])], 1)])])
            }
        ), [], !1, null, "6cb6ce87", null).exports;
        function Fn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = z()(e);
                if (t) {
                    var r = z()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return E()(this, n)
            }
        }
        var _n = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , Zn = function(e) {
            T()(n, e);
            var t = Fn(n);
            function n() {
                return j()(this, n),
                    t.apply(this, arguments)
            }
            return w()(n, [{
                key: "initReader",
                value: function() {
                    this.mangaReader && this.mangaReader.init(this.seasonId, this.episodeId)
                }
            }, {
                key: "refresh",
                value: function() {
                    window.location.reload()
                }
            }, {
                key: "mounted",
                value: function() {
                    this.initReader()
                }
            }, {
                key: "seasonId",
                get: function() {
                    try {
                        return x.c.intFormat(window.location.href.match(/\/mc(\d+)/)[1], 0)
                    } catch (e) {
                        return k.a.error("未正确获取 SeasonId:", e),
                            0
                    }
                }
            }, {
                key: "episodeId",
                get: function() {
                    try {
                        return x.c.intFormat(window.location.href.match(/\/(\d+)/)[1], 0)
                    } catch (e) {
                        return k.a.error("未正确获取 SeasonId:", e),
                            0
                    }
                }
            }, {
                key: "mangaReader",
                get: function() {
                    return this.$refs.mangaReader
                }
            }]),
                n
        }(a.default)
            , Gn = Zn = _n([Object(o.b)({
            components: {
                MangaReader: Bn,
                UrlIncorrect: Wn
            }
        })], Zn)
            , qn = Object(Ie.a)(Gn, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "reader-layout w-100 h-100 p-absolute p-zero"
                }, [e.seasonId && e.episodeId ? [n("manga-reader", {
                    ref: "mangaReader",
                    staticClass: "w-100 h-100 p-absolute p-zero",
                    on: {
                        "re-init": e.refresh
                    }
                })] : [n("url-incorrect")]], 2)
            }
        ), [], !1, null, "1e9118ec", null).exports;
        f.a.init(),
            a.default.use(s.a),
            a.default.use(i.FirebirdComponent),
            function() {
                try {
                    HTMLCanvasElement.prototype.toDataURL = void 0,
                        HTMLCanvasElement.prototype.toBlob = void 0
                } catch (e) {}
            }(),
            a.default.component("manga-button", g.a),
            a.default.component("manga-progress", A.a),
            Object(p.a)(a.default),
            d.a.switchTheme(c.a.Dark, !1),
            a.default.prototype.$emoji = r,
            a.default.prototype.$bfs = u.a,
            l.a.init(),
            new o.a({
                name: "manga-app",
                element: "#app-vm",
                RootComponent: M.a.checkIsOldBrowser() ? D.a : qn
            }).start(),
            y.a.refreshUserData(),
            h.a.sendPv({
                spmId: "777.17.0.0.0.0"
            })
    },
    OW6k: function(e, t, n) {
        "use strict";
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("7W2i")
            , c = n.n(s)
            , u = n("a1gu")
            , l = n.n(u)
            , d = n("Nsbk")
            , M = n.n(d)
            , p = n("cDf5")
            , f = n.n(p)
            , y = n("+B0l");
        function g(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var A = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , D = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , h = function(e) {
            c()(n, e);
            var t = g(n);
            function n() {
                return r()(this, n),
                    t.apply(this, arguments)
            }
            return a()(n, [{
                key: "onClick",
                value: function(e) {
                    this.$emit("click", e)
                }
            }, {
                key: "buttonStyle",
                get: function() {
                    var e = {};
                    return "string" != typeof this.width && "number" != typeof this.width || (e.width = "number" == typeof this.width ? this.width + "px" : this.width,
                        e.padding = "0"),
                    "string" != typeof this.height && "number" != typeof this.height || (e.height = "number" == typeof this.height ? this.height + "px" : this.height,
                        e.padding = "0"),
                        e
                }
            }]),
                n
        }(n("oCYn").default);
        A([Object(y.d)({
            type: [Number, String]
        }), D("design:type", Object)], h.prototype, "width", void 0),
            A([Object(y.d)({
                type: [Number, String]
            }), D("design:type", Object)], h.prototype, "height", void 0),
            A([Object(y.d)({
                type: String
            }), D("design:type", String)], h.prototype, "type", void 0),
            A([Object(y.d)({
                type: String,
                default: "primary"
            }), D("design:type", String)], h.prototype, "theme", void 0),
            A([Object(y.d)({
                type: Boolean,
                default: !1
            }), D("design:type", Boolean)], h.prototype, "disabled", void 0);
        var N = h = A([y.b], h)
            , j = n("KHd+")
            , v = Object(j.a)(N, (function() {
                var e = this
                    , t = e.$createElement;
                return (e._self._c || t)("button", {
                    staticClass: "manga-button",
                    class: e.theme,
                    style: e.buttonStyle,
                    attrs: {
                        type: e.type,
                        disabled: e.disabled
                    },
                    on: {
                        click: e.onClick
                    }
                }, [e._t("default")], 2)
            }
        ), [], !1, null, "b8e7c12a", null);
        t.a = v.exports
    },
    PzWz: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+6ZiF6K+75ZmoLeivhOiuui0wPC90aXRsZT48cGF0aCBkPSJNMTQuMDcsMTguNDVhLjY2LjY2LDAsMCwxLC40My0uMTVoNC45YTEuOSwxLjksMCwwLDAsMS45LTEuOVY1LjZhMS45LDEuOSwwLDAsMC0xLjktMS45SDQuNkExLjksMS45LDAsMCwwLDIuNyw1LjZWMTYuNGExLjksMS45LDAsMCwwLDEuOSwxLjlIMTBhLjcuNywwLDAsMSwuNy43djIuMDdaTTQuNiwxOS43YTMuMywzLjMsMCwwLDEtMy4zLTMuM1Y1LjZBMy4zLDMuMywwLDAsMSw0LjYsMi4zSDE5LjRhMy4zLDMuMywwLDAsMSwzLjMsMy4zVjE2LjRhMy4zLDMuMywwLDAsMS0zLjMsMy4zSDE0Ljc0bC00LjMxLDMuMzVBLjcuNywwLDAsMSw5LjMsMjIuNVYxOS43Wk04LDkuN0EuNy43LDAsMCwxLDgsOC4zaDhhLjcuNywwLDAsMSwwLDEuNFptMCw0LjVhLjcuNywwLDAsMSwwLTEuNGg1YS43LjcsMCwwLDEsMCwxLjRaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+"
    },
    RBbJ: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return s
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "filterHTML",
                value: function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e,
                        t.textContent
                }
            }]),
                e
        }()
    },
    "S8+f": function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIuNzAxMTcyNSwyOS4yOTU0OTM0IEwxMy4zMTUxNzY0LDI5LjY4ODAyMDMgQzEwLjE0NDA1MzIsMjkuMDM4MTY4NyA3LjQ5ODAxNzksMjcuNDg3OTczMyA1LjI1NzI0NjMxLDI1LjMwOTk4NTggQzIuOTc4NTkzODUsMjMuMDk1MTMwMSAxLjgxMDY0NDU3LDIwLjM2NjQ4OTQgMS4zNzMwOTU3MiwxNy4yOTI3NTk3IEwxLjA2OTE2OTkzLDE4LjE3NDUwMjEgQzEuMDc0MDYyNSwxNi43NTEwMDI5IDEuMDMzNjkxNDEsMTUuMzI5MDM3NiAxLjM1ODkxNjAzLDEzLjkxMTg2OSBDMS4yMzkyNjc1OSwxNC4wODM2MDQ4IDEuMTE5NjQ4NDQsMTQuMjU1NDUyMSAxLDE0LjQyNzI0MzYgQzEuNTI1MDg3OTIsMTIuMzg0OTg4MiAyLjAzNTE0NjU0LDEwLjM0Mzk1OTkgMy43MDQyMTg4OSw4LjgwMDQwMTg0IEM1LjAyNzgyMjQ3LDcuNTc2MzMxNDQgNi41ODM0NTczMSw3LjAyODQzOTE4IDguNDIzNDc2OTMsNy4yNDMwNjcwNCBDOC41MjUxMzcxLDcuMjU0OTE5NTQgOC42MjU1MDgxOSw3LjI3ODUxMjk4IDguNzI1NTU3MDMsNy4zMDA1MTY4IEM4Ljc3NDEzMTI1LDcuMzExMTcwMTEgOC44MjA1Mzc1LDcuMzMwNzc1NTQgOC44Nzc0NjEzMyw3LjM0OTQ2MDY1IEw4LjY1MDU4NjMyLDguNjE2MTQ0MjcgQzkuODE0MTcwMzYsNi45NjY2Mzg4NSAxMS4xMzk5NDE5LDUuNzI5MTgyMSAxMy4zNTU5NTc2LDUuODU3ODAyNjQgQzEzLjI5MDE4NjIsNS45MjQ1NjcwOCAxMy4yMjY2MTE5LDUuOTkzMzY3MzUgMTMuMTU4MzIwOSw2LjA1NzY0OTczIEMxMi4xODYzMDkyLDYuOTcyOTEzNzEgMTEuNDkyOTEwNyw4LjAzMjQ3MTQxIDExLjE5MTU2Myw5LjMyMTY4ODcyIEMxMC44NjU3ODE3LDEwLjcxNTQ1OSAxMS4yNDE0ODQ5LDExLjkzMjM5IDEyLjEwNTcxMzQsMTMuMDU0OTE5NCBDMTIuNTUwNjc0NCwxMy42MzI5NTg4IDEyLjM5NzgwMzMsMTQuMjY5ODcwMyAxMi4zMTg4MTg5LDE0Ljg5NTY4MjMgQzEyLjI4NjQ1MDEsMTQuOTExOTQxNSAxMi4yNTQwOTY2LDE0LjkyODIyODIgMTIuMjIxNzU4NCwxNC45NDQ1NDI1IEMxMi4xMzI0OTA4LDE0LjgzOTU0MzMgMTIuMDU0MTgwMiwxNC43MjM1ODQgMTEuOTUyMzQ0MywxNC42MzExMDY2IEMxMC4zNzEwNDU0LDEzLjE5NDU4MzcgOC4wMzc4MTI4NSwxMy42MjAxODYgNy4xNDk5MTI0MiwxNS41Mjg5OTYyIEM2LjQ1Mzk5NDQxLDE3LjAyNTExNjQgNi44MTI4ODExNSwxOC4zOTY4MjcxIDcuODA2MzM4MjMsMTkuNjYyMjgzNiBDNy45Mjg5NDU2NiwxOS44MTg1MTM1IDguMDcyNTAwMzUsMTkuOTU5NzM5NSA4LjI1NjgzNjMsMjAuMDc1MTQxIEM4LjIwMzk1NTQ0LDIwLjAwOTIxMzIgOC4xNTE0MjYxNCwxOS45NDI5Nzg3IDguMDk4MTM1MTIsMTkuODc3MzI5OCBDNy4yMTk2Mzg5OCwxOC43OTUzNDk5IDYuODE2MjUwMjksMTcuNjAxNzA1NiA3LjIxNzY0NjgsMTYuMjQ2MjI1OCBDNy41NTQxODAwMiwxNS4xMDk2OTY2IDguNjY5ODYzNjcsMTQuMjQ3Njk5MiA5Ljc1NTAxOTk3LDE0LjI0MTE3MzMgQzEwLjIwMjkxMDYsMTQuMjM4NDEyNCAxMC41NzkyODc2LDE0LjM1MjAyOTEgMTAuOTUzOTk0NiwxNC41OTgwODcgQzEwLjAxNDgyNDcsMTUuNjE4NjAxMSA5Ljk1MzU2NDksMTYuODUyOTkwMiAxMC4wNzg4MDksMTguMDk4MzM5MyBDMTAuMjAxMjcsMTkuMzE1NTIxMyAxMC44MzEyNywyMC4yOTg4NjA0IDExLjg2NDgwNTIsMjEuMDM3NjQ3NyBDMTEuOTQ2OTI0NCwyMS4wOTYzNTI0IDEyLjA0NzA2MTEsMjEuMTQ0MDEzNCAxMi4xMDQ0NTM3LDIxLjIyMDMxNTYgQzEyLjQ3MTU0MzUsMjEuNzA3ODAyIDEzLjAwNzk0MDEsMjEuODU1NDE0NCAxMy41OTI1MDA2LDIxLjk1NTAzMTIgQzE0LjEyNjQwNjksMjIuMDQ2MDMwNSAxNC42NDkzNTYyLDIyLjE5NjE4MDcgMTUuMTc1NDY5NSwyMi4zMjY1MzAzIEMxNS4yNTA0MTA5LDIyLjM0NTEzMTggMTUuMzE1NzQyOSwyMi4zOTg3ODg3IDE1LjQ1MDY1NSwyMi40NzExNTg3IEwxNC40NjMxNzQ1LDIyLjQ3MTE1ODcgQzE0Ljc0MzM0MDUsMjIuNzg2MDE2OSAxNS4xMTE3NDg4LDIyLjkxMDkwMDQgMTUuNDk1NTY3MSwyMy4wMDU1MjUyIEMxNi4zODExNTMxLDIzLjIyMzg5MDEgMTcuMjU0OTYxOCwyMy4wNzc0NDg5IDE4LjEyNDk5MTEsMjIuOTE0Nzc2OSBDMTguNjQ0NTQxOSwyMi44MTc2MTQzIDE5LjE1ODIzMzMsMjIuNjkyMTczIDE5LjcwODA0NzgsMjIuNTcyMDU4MyBMMTkuNTg3ODcyLDIyLjk2NDkxOTkgQzIwLjAwODI4MjIsMjIuNzY0MzE5OCAyMC4zMjk5NjE5LDIyLjUxNzc4NzggMjAuNTg4NDE4OSwyMi4xODc5NTM3IEMyMC43MDQ1ODExLDIyLjAzOTcyNzcgMjAuODI0NDYzOSwyMS44ODg4ODAzIDIwLjk2OTUxMjcsMjEuNzY4NDg2OCBDMjEuMDU2ODc2LDIxLjY5NjAwNTIgMjEuMTk1OTQ4MywyMS42Nzk4MDIyIDIxLjMxMjMxNTUsMjEuNjM4MTY1IEMyMS4zNDA1ODcsMjEuODA1NDY2NiAyMS4zNTk4MDU3LDIxLjkxOTI1MDYgMjEuMzc4OTY1OSwyMi4wMzMwMzQ1IEMyMS41MDk1NDIsMjEuOTg5NjEyNiAyMS42NTkxNjEyLDIxLjk3MTgxOTkgMjEuNzY3NTU5NiwyMS44OTg1ODU0IEMyMi41Mjk1NzE0LDIxLjM4NDAxOTUgMjIuOTg4NDE5MSwyMC42NTI4NDU4IDIzLjI2NTI0NTMsMTkuODI5NTg1MSBDMjMuNTM2NDc1NywxOS4wMjI4MzQzIDIzLjczMzQwOTMsMTguMTkzNDY2MSAyMy45NzczNjQ0LDE3LjMyMjU0NDQgQzI0LjA5NDA4MzIsMTcuNTM4Mzk5MyAyNC4yMTIxNDk2LDE3Ljc1Njc2NDIgMjQuMzYxMywxOC4wMzI4MDE5IEMyNC40NzczNDQ5LDE3LjQwOTgwNjcgMjQuNjY0MjI5NywxNi44MTg3OTkyIDI0LjY3OTYxMDYsMTYuMjIzNjM2NCBDMjQuNzAxMzQ4OCwxNS4zODY4MjIgMjQuNjAwNjU1NSwxNC41NDY3NzI2IDI0LjU0MjI2NjgsMTMuNzA4NjQ3NSBDMjQuNTE2NTE0OCwxMy4zMzkwNDQ3IDI0LjQ2NjIxMjEsMTIuOTcxMDAzNyAyNC40MjAxNTc0LDEyLjUzODA5NDYgQzI0Ljk5ODE1NTUsMTIuODUwMDgwMyAyNS4zNTc4MzMzLDEzLjI3MTQ5OTQgMjUuNjczMDA5LDEzLjc1OTg3ODIgQzI1LjY4ODg1ODcsMTIuNDk0ODk1NyAyNS42NzkzNjY1LDExLjIxNjA4MDcgMjUuMTI3MjM3NSwxMC4wNDU3Nzg4IEMyNC41NzkwMDUxLDguODgzNDUzIDIzLjgyNTE5NjUsNy44MjY3MTIwMSAyMi43Nzk0NzM3LDYuOTg2OTY5MzggQzIzLjMxMzE3NDksNi44NzcxNDU1MSAyMy45NzI0MTMzLDcuMTU3NzI5MDQgMjUuMzA1NjU1NSw4LjAzNTkwMTY2IEMyNC44MTMzMjE1LDcuMjEyNDQ1NzYgMjQuMTk3NDEzMyw2LjQ3MzI2ODA5IDIzLjQ2NTI4NDMsNS44MzY5NDIyNCBDMjIuNzQyMDYxNiw1LjIwODM2OTMyIDIxLjk2MjczNTQsNC42MzgzODk1OCAyMS4yMDc1NDk4LDQgQzIyLjAyMzExNjMsNC4zMDk5NDk4NCAyMi44NDY2MjIyLDQuNjAyNTI1MzEgMjMuNjUxNzg4Miw0LjkzNTI4NzczIEMyNC4zMTczMjU0LDUuMjEwMzc3MjcgMjQuODkwNDMwOSw1LjYyNDIzODY4IDI1LjQxNDgxNTcsNi4xMDU2MTc1IEMyNi4zODMwNDgxLDYuOTk0Mzg3NjUgMjcuMzg2MTczMiw3Ljg1MDcyMzc4IDI4LjE2ODY2MzUsOC45MTQ1NzYyNyBDMjguMTI1MTI4Myw4LjgzMjk3NTMgMjguMDg1NTc3NSw4Ljc0OTI1NDgyIDI4LjAzNzQxMzUsOC42NzAxNjM3OCBDMjcuMzgxMzY4NSw3LjU5MjE3MTk2IDI2LjUzOTAyNDcsNi42NTU1MTc3MSAyNS41ODM1MDcxLDUuODEzODIyOSBDMjUuMzE0MTgwOSw1LjU3NjU0OTggMjUuMjIxMjUxMiw1LjMzODA3NzUgMjUuMzEyODA0LDQuOTUzNzc3NjMgQzI1Ljk4MDU2NzcsNS40MjI3MTgyOSAyNi42MzQzNTY4LDUuODYyNTQzNjQgMjcuMTQ2NDk1NCw2LjUwNjQ1NTA5IEwyNy4yNDA1Njc3LDYuMjUyNTg4NDkgQzI5LjU4MTAwNzMsOC4yMDQ2MjU0OCAzMC4yOTcxMTA4LDEwLjY4NTQ1MTMgMjkuOTk3MDUyMiwxMy41MjM5NDM3IEMzMC4wMjk5NTI2LDEzLjUzMDYwOSAzMC4wNjI5MTE2LDEzLjUzNzIxODUgMzAuMDk1NzUzNCwxMy41NDM4MjggQzMwLjI1MTY3MTQsMTMuMjE0Nzc0NyAzMC40MDc2MTg3LDEyLjg4NTcyMTUgMzAuNTkwNzUzNCwxMi40OTg5Njc0IEMzMC43MDEyMzIsMTMuMDcyNDYxMSAzMC44MjcwMDM0LDEzLjYwNTc2NzggMzAuOTAzNDA5NywxNC4xNDUyOTM2IEMzMS4xMDIwMTMyLDE1LjU0NzU0MTkgMzEuMDMwMDg5NCwxNi45MTg2NjcgMzAuMzQ3Nzk0NCwxOC4yMTc4MTI1IEMzMC4wOTUyODQ3LDE4LjY5ODU0OTkgMjkuODk1MjQ1NiwxOS4yMDQxMDc4IDI5LjY1Nzk0MDksMTkuNjkyNDg2NiBDMjkuNTM3NDQyOCwxOS45NDA1ODAzIDI5LjQ5NjkyNTMsMjAuMTcxNzQ1OSAyOS41NjkzMTc4LDIwLjQ1MTEwMjMgQzI5Ljc4ODA3NzYsMjEuMjk0NjY1NiAyOS42NjU5NjgyLDIyLjEwMjAzIDI5LjE5NDc1NzMsMjIuODU2MSBDMjguMjc1MzkyLDI0LjMyNzMxNiAyNy4wNjYzMDk5LDI1LjUxMjYyMTcgMjUuNDYxODY2NSwyNi4zMTQ3MTUyIEMyNS4zNTAyNzQ3LDI2LjM3MDQ5MTcgMjUuMjYzMjA0MywyNi40NzUyMTIgMjUuMTczODc4MiwyNi41NjU0MzA1IEMyNS4xMTgyMTQxLDI2LjYyMTc5MjYgMjUuMDc2NTUzOSwyNi42OTE3MDg0IDI1LjAzNDI0OTMsMjYuNzU4ODkxMSBDMjQuMjQzNTg1MSwyOC4wMTU1MzUgMjMuMDA3OTAxNSwyOC42MTUzODMgMjEuNTYzMDk2NywyOC45NDYzODg1IEMxOS45MDY1NjM0LDI5LjMyNTg2MzcgMTguMjQxNTYzNCwyOS42MTAxODQzIDE2LjUzMDc0MywyOS41ODcxNDg2IEMxNi40ODI1MjAzLDI5LjU4NjUzNSAxNi40MzQxNTEyLDI5LjU5MzE0NDUgMTYuMzEwNjA2MiwyOS42MDEzNDM3IEMxNi40Nzk1MzIsMjkuNzQ4MzQyNiAxNi42MDEyMzEyLDI5Ljg1NDE3ODQgMTYuNzY2OTkzLDI5Ljk5ODMzMjcgQzE1LjMyNTQxMDksMzAuMDI3MzkyMiAxNC4wMjI3ODM5LDI5LjY3MjkwNDkgMTIuNzM5MDgyNiwyOS4yMjMxNzkyIEwxMi43MDExNzI1LDI5LjI5NTQ5MzQgWiBNMTAuMDI4MjYxMSwxNiBDMTAuODgwNzU3MiwxNi43NDI3MjI3IDExLjc4NzExNjYsMTcuMjI4OTcxMiAxMi44ODQ2MzM1LDE3LjI4OTQxNDcgQzEzLjQxOTk3NDksMTcuMzE4OTU0MyAxMy45MDQ3NDQ1LDE3LjE3OTI3NDUgMTQuMzY2MDU1MywxNi45MDUzNDM4IEMxNS4zNTc3OTgyLDE2LjMxNjYxMTQgMTYuMzYzODc4NiwxNi4zNzkyMjY1IDE3LjM1OTMwMzUsMTYuODk5ODU5MSBDMTcuNjg0OTkzNywxNy4wNzAyMjAxIDE3LjkwMzk4OTQsMTcuMzQ1NDg3MSAxNy45ODMyNjQyLDE3LjcxMjAxOCBDMTguMDU3NDA2NCwxOC4wNTUxMzQzIDE3Ljg4MTA2MDYsMTguMjY4MDM2OSAxNy41MzY0NTgyLDE4LjIwMDI5ODkgQzE3LjA4MTcwMjUsMTguMTEwOTg0IDE2LjcyMzQ4NzksMTguMjMxODQzMSAxNi4zNzUxNDc4LDE4LjUyNjQwNDIgQzE2LjA1NTM5OSwxOC43OTY4ODI2IDE1LjY4NDkzODksMTkuMDA2NjExMiAxNS4zNDQzODEyLDE5LjI1MzYxOTMgQzE0LjQ1NDQ1MTQsMTkuODk5MTc1OCAxMy40MzMzOTE5LDE5Ljk4OTM1MzkgMTIuMzc5Mzg5NiwxOS45OTk5MDU3IEMxMS45ODgwMzcsMjAuMDAzODAzNSAxMS42OTIzMzI4LDE5Ljg4Njg3IDExLjM5OTY0MTEsMTkuNjQ2NzM4NyBDMTAuMjQ5MDk3OCwxOC43MDI0NzI3IDkuODg5NDA0NzksMTcuNDcxMzU3NyAxMC4wMjgyNjExLDE2IFogTTUuNDA1NTQ0NTMsNiBMNSw1LjY3MDA3ODQzIEM5LjE1ODY2NjQ1LDEuNzg1MTY4OTYgMTcuMDM5Mzk2NCwwLjU3ODI2ODQwMSAyMyw0LjA0NDQ0OTI0IEMyMi43ODk0MTI3LDMuOTcwNTcwNDEgMjIuNTg0NDA5NywzLjg4MDY4MTI0IDIyLjM2NzMxNzEsMy44MjU5MTE1NSBDMjEuNzU4MTIyNCwzLjY3MjIyNjg4IDIxLjE0MjM5MzYsMy41MzczODA4MSAyMC41MzE5NjEyLDMuMzg3MDE2MjYgQzE5Ljc5NTcxMTgsMy4yMDU2MzkzMyAxOS4wNzI5MDQ3LDIuOTczNTk5ODIgMTguMzI1Nzc0NywyLjgzNjcxMjUgQzEzLjQ5ODk2MywxLjk1MjE4MzMgOS4yNjE4MDEyNCwyLjkzMzkzMDUzIDUuNjM5NTMzNTYsNS44MTMxMzg3MiBDNS41NzMxMjc3Nyw1Ljg2NTk2NTUyIDUuNTA2OTIzNDcsNS45MTkwMzgyNiA1LjQwNTU0NDUzLDYgWiBNMTEuOTgxNDEwMiwxMyBDMTEuMTQ1NzUzNywxMS44NTk3MjAzIDEwLjc1MjUxNzksMTAuNTYwODc2MiAxMS4xNjUxNzM1LDkgQzExLjYzMDg1NTYsOS41NTEyODkzMSAxMi4yMjMyNTAzLDkuNTE1NTYwNTkgMTIuODA0OTY3MSw5LjUzMzkyNjEyIEMxMy4zNzY3NjIzLDkuNTUyMDAwNjUgMTMuOTUwMjgxNyw5LjU1OTcyODQgMTQuNTE5MDgyMyw5LjYxNjc2NTAxIEMxNC45MjY2MjU5LDkuNjU3NjY3MTIgMTUuMDI3OTU5Nyw5LjgxNTg0MzUgMTQuOTkzODY5MiwxMC4yNTQ2NzYzIEMxNC45NDUxNjg1LDEwLjg4MjE3NjEgMTQuNzQ3MjgwMSwxMS4zOTQ0Mzg2IDE0LjE2MDc1MzYsMTEuNzA0MjI3NiBDMTMuNDIzNjQ4MSwxMi4wOTM1MjUyIDEyLjcyMDUxMjEsMTIuNTU2MjIwMiAxMS45ODE0MTAyLDEzIEwxMS45ODE0MTAyLDEzIFogTTIsOSBDMi4wOTkxNDM4Myw3LjU1MDY0MDkzIDIuNDMzMjUzNzksNi4xODA3ODQxMiAzLjcwOTk0MjY2LDUgQzMuNzk1ODE5ODEsNS45MTA0ODIxIDQuMTk2MTI3NDQsNi42MjU0NjQ1MSA1LDcuMjAzNjk2MjMgQzMuODA1NzYxMzQsNy42MTM0NjY5NyAyLjg2NDAzMDY3LDguMjUyMzE2MzQgMiw5IFoiLz4KICA8L2c+Cjwvc3ZnPgo="
    },
    SOox: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return j
            }
        )),
            n.d(t, "b", (function() {
                    return i
                }
            ));
        var i, r = n("o0o1"), o = n.n(r), a = n("yXPU"), s = n.n(a), c = n("lwsE"), u = n.n(c), l = n("W8MJ"), d = n.n(l), M = n("cDf5"), p = n.n(M), f = n("1aRO"), y = n("ZxM/"), g = n("uS9E"), A = n("91CG"), D = n("yH7B"), h = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, N = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }, j = function() {
            function e() {
                u()(this, e)
            }
            var t, n, i;
            return d()(e, null, [{
                key: "getEpisodePurchaseInfo",
                value: function(e) {
                    return A.a.post({
                        url: "/twirp/comic.v1.Comic/GetEpisodeBuyInfo",
                        data: {
                            ep_id: e
                        },
                        type: g.e
                    })
                }
            }, {
                key: "purchaseEpisode",
                value: (i = s()(o.a.mark((function e(t) {
                            var n, i, r, a, s, c;
                            return o.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    buy_method: t.purchaseMethod
                                                },
                                                    t.episodeId ? n.ep_id = t.episodeId : n.comic_id = t.seasonId,
                                                t.purchaseMethod === D.b.ByWaitFreeChance && (n.comic_id = t.seasonId),
                                                t.couponId && (n.coupon_id = t.couponId),
                                                t.payGoldAmount && (n.pay_amount = t.payGoldAmount),
                                                t.autoPurchaseCouponsStatus && (n.auto_pay_coupons_status = t.autoPurchaseCouponsStatus),
                                                t.autoPayGoldStatus && (n.auto_pay_gold_status = t.autoPayGoldStatus),
                                                t.withOrdScope && (n.with_ord_scope = !0,
                                                    n.start_ord = t.startOrd,
                                                    n.limit = t.limit),
                                                    i = {
                                                        data: null,
                                                        error: null,
                                                        code: D.c.Success
                                                    },
                                                    e.next = 11,
                                                    A.a.post({
                                                        data: n,
                                                        url: "/twirp/comic.v1.Comic/BuyEpisode",
                                                        type: v
                                                    });
                                            case 11:
                                                if (r = e.sent,
                                                    a = r.code,
                                                    s = r.error,
                                                    c = r.data,
                                                    !s) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return i.error = s,
                                                    e.abrupt("return", i);
                                            case 18:
                                                i.data = c,
                                                    e.t0 = a,
                                                    e.next = 1 === e.t0 ? 22 : 2 === e.t0 ? 24 : 3 === e.t0 ? 26 : 4 === e.t0 ? 28 : 5 === e.t0 ? 30 : 32;
                                                break;
                                            case 22:
                                                return i.code = D.c.NoEnoughCoupon,
                                                    e.abrupt("break", 34);
                                            case 24:
                                                return i.code = D.c.NoEnoughGold,
                                                    e.abrupt("break", 34);
                                            case 26:
                                                return i.code = D.c.AutoPurchaseSettingHasBeenChanged,
                                                    e.abrupt("break", 34);
                                            case 28:
                                                return i.code = D.c.PayAmountMayChanged,
                                                    e.abrupt("break", 34);
                                            case 30:
                                                return i.code = D.c.CanNotPurchaseViaCoupon,
                                                    e.abrupt("break", 34);
                                            case 32:
                                                return i.code = D.c.Success,
                                                    e.abrupt("break", 34);
                                            case 34:
                                                return e.abrupt("return", i);
                                            case 35:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function(e) {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "rentEpisode",
                value: function(e, t) {
                    return A.a.post({
                        data: {
                            ep_id: e,
                            item_id: t
                        },
                        url: "/twirp/comic.v1.Comic/RentEpisode"
                    })
                }
            }, {
                key: "getPurchasedManga",
                value: (n = s()(o.a.mark((function e(t) {
                            return o.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", A.a.post({
                                                    url: "/twirp/user.v1.User/GetAutoBuyComics",
                                                    data: {
                                                        pay_type: t.payType,
                                                        page_num: t.pageNum || 1,
                                                        page_size: t.loadCount || 15
                                                    },
                                                    type: g.b
                                                }));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "setAutoPurchaseType",
                value: (t = s()(o.a.mark((function e(t) {
                            return o.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", A.a.post({
                                                    url: "/twirp/user.v1.User/UpdateAutoBuyComic",
                                                    data: {
                                                        id: t.id,
                                                        gold_status: t.goldStatus,
                                                        coupon_status: t.couponStatus
                                                    }
                                                }));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }();
        h([Object(y.a)({
            isShowQuickLoginPanel: !1
        }), N("design:type", Function), N("design:paramtypes", [Object]), N("design:returntype", Promise)], j, "purchaseEpisode", null),
            h([Object(y.a)({
                isShowQuickLoginPanel: !1
            }), N("design:type", Function), N("design:paramtypes", [Number, Number]), N("design:returntype", Promise)], j, "rentEpisode", null),
            function(e) {
                e[e.ByGold = 1] = "ByGold",
                    e[e.ByCoupon = 2] = "ByCoupon",
                    e[e.All = 100] = "All"
            }(i || (i = {}));
        var v = function e() {
            u()(this, e),
                this.autoUseItem = ""
        };
        h([Object(f.a)("auto_use_item"), N("design:type", String)], v.prototype, "autoUseItem", void 0),
            v = h([Object(f.b)()], v)
    },
    SiI8: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return d
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("Blr9")
            , c = n("ZojZ")
            , u = new s.a
            , l = new s.a({
            webp: !1
        })
            , d = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "bfsLink",
                value: function(e, t, n) {
                    try {
                        return e = this.bfsHttps(e),
                            u.getImageLink(e, t, n)
                    } catch (t) {
                        return c.a.error("[BfsService.bfsLink] ".concat(e, " 解析错误:"), t),
                            e
                    }
                }
            }, {
                key: "bfsLinkWithoutWebp",
                value: function(e, t, n) {
                    try {
                        return l.getImageLink(e, t, n)
                    } catch (t) {
                        return c.a.error("[BfsService.bfsLinkWithoutWebp] ".concat(e, " 解析错误:"), t),
                            e
                    }
                }
            }, {
                key: "bfsHttps",
                value: function(e) {
                    return e.replace("http://", "//")
                }
            }]),
                e
        }()
    },
    T2P2: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+5oiR55qELeW3sui/vTwvdGl0bGU+PHBhdGggZD0iTTEyLDE4LjQ4LDYuNDMsMjEuMjJhLjcuNywwLDAsMS0xLS43M2wuODgtNi4xNEwyLDkuOWEuNy43LDAsMCwxLC4zOC0xLjE4TDguNDksNy42NmwyLjg5LTUuNDlhLjcxLjcxLDAsMCwxLDEuMjQsMGwyLjg5LDUuNDksNi4xMiwxLjA2QS43LjcsMCwwLDEsMjIsOS45bC00LjMyLDQuNDUuODgsNi4xNGEuNy43LDAsMCwxLTEsLjczWiIgc3R5bGU9ImZpbGw6I2ZmYTAxNTtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjwvc3ZnPg=="
    },
    TRC1: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", (function() {
                return i
            }
        )),
            function(e) {
                e[e.FavouriteDesc = 1] = "FavouriteDesc",
                    e[e.UpdateDesc = 2] = "UpdateDesc",
                    e[e.RecentReadDesc = 3] = "RecentReadDesc",
                    e[e.WaitFreeDesc = 4] = "WaitFreeDesc"
            }(i || (i = {}))
    },
    UTQG: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUxpcc8wX88yX88wX9YzZv+CmP9ea/99nP9Yb9AwX/9MeehTePVri9pBbP9ieGVJjOkAAAAFdFJOUwDIZb0ZCo6xpgAAAbJJREFUSMftlL9uwjAQh1HpS7B1ZevarS9heSCskV/AihBhjSpvtFLpiWSn7VxSBsYoygMgFKG+S8//kpAYWBj5ie0+fWcfzvV6t1wvdwNwZv6g6/dPcCJvzwrow++LzWr1VecbHhUw/GB1XTSRz1cFDNaMSUQI/AnRVMwVAJE1COloKkADvh9Fsp4RSklQJWwAWkAwnFJqiQbgRwbgdfkIYLWBcN4FmL4G1lUD7mjBrIGEOXe2kApZHwGkWJv+pccG3xo2AEsENkmrhTVQiAvAEUAcuA0e7MaQBxPV5wiQs1RH+BlhsUw6g2LWIIEpLNqAmmXVosAunRbmFmWC+nIZdA14DQkUAPEY9l3ADsrbHrKN7tAxMKLjQRxuD/mJFpgZpLKR+xZq2nhKedQWgMOsOniwn+E5WoA1TMysOoBvDlkmRAFpG4i0YQQL4m5hDAVk1PzpbcBXACzxVehn0wL0oMawI9Q8PLeBqLcd5sE5gHMa0HOA+jzoWQO5aOAuQ1YTpPX5V2F2Fek1AmYFVfVqmeEqQsSsoOF7BUSVQKzqJdaHtcsghF2DFxfpxVV8y1XyD/20X+Dx4T3YAAAAAElFTkSuQmCC"
    },
    Ubnt: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return l
            }
        )),
            n.d(t, "b", (function() {
                    return i
                }
            ));
        var i, r = n("W8MJ"), o = n.n(r), a = n("lwsE"), s = n.n(a), c = n("oCYn"), u = function e() {
            s()(this, e),
                this.inLoading = !1,
                this.isLoaded = !1,
                this.isLoadingFailed = !1,
                this.isAbortByUser = !1,
                this.progress = 0
        }, l = function() {
            function e(t, n) {
                s()(this, e),
                    this._element = null,
                    this._type = null,
                    this._vm = c.default.observable(new u),
                    this._element = t,
                    this._type = n
            }
            return o()(e, [{
                key: "getRect",
                value: function() {
                    try {
                        return this._element.getBoundingClientRect()
                    } catch (e) {
                        return console.warn('[Bilibili Manga] Use getBoundingClientRect to a "detached" element under IE will get the "-2147467259" exception.\nSo I think you are using IE-like stuff, and it is the time to switch to another browser.\nMicrosoft Edge insider is good for an example.\n', e),
                            {
                                bottom: 0,
                                height: 0,
                                left: 0,
                                right: 0,
                                top: 0,
                                width: 0
                            }
                    }
                }
            }, {
                key: "resetVM",
                value: function() {
                    this._vm.inLoading = !1,
                        this._vm.isLoaded = !1,
                        this._vm.isLoadingFailed = !1,
                        this._vm.isAbortByUser = !1,
                        this._vm.progress = 0
                }
            }, {
                key: "element",
                get: function() {
                    return this._element
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }, {
                key: "vm",
                get: function() {
                    return this._vm
                }
            }, {
                key: "isBringIntoView",
                get: function() {
                    var e = window.innerWidth || document.documentElement.clientWidth
                        , t = window.innerHeight || document.documentElement.clientHeight
                        , n = this.getRect()
                        , i = n.width
                        , r = n.height
                        , o = n.left
                        , a = n.top;
                    return o < e && o + i > 0 && a < t * (2 / 3) && a + r > 0
                }
            }]),
                e
        }();
        !function(e) {
            e[e.ReaderImage = 0] = "ReaderImage",
                e[e.BlankImage = 1] = "BlankImage",
                e[e.PurchaseHinter = 2] = "PurchaseHinter"
        }(i || (i = {}))
    },
    VCHA: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAABGdBTUEAALGPC/xhBQAAB59JREFUWAntWE2IHEUUftXTM7Ozk53NbrKr+4ORaEyC5hCJqOAlIioq+BuEgCeVnDwIkVz1ZGLwIIJgSEAPIh68+XMRRC8iJhqMByUgmqi7Mc7+ZH9mZ3e62+97r6p7Mhu9BjS1292vXr2f7716VdU9Ildojryd597LOklVOmsVWcMVk5mkZXFJWXZtHJYscxIps1OWHY1hac4uKlMl2+dn5ZvOknQwmCQtyq1vbttXr/8WjU1OdDoVSFbl1x0PRXE0MjqRJLHc2tis9pY//SCNE3hNXFkycTIztwSbMSgRN/7ZO2knqUgCjM1HnlLs6z1dgWNR/vxulpaqMl4ZkkbcR4Pq054iX3933oLswF8KDOeWWvL97CUVIhZmgRfxaOAUykBO1gZkY6WCQfo2odMXMkmRwqvYNOrtZ09krtqPgErAEy4ECHr1/F8yff8zLt768StPumoNzEh2DlwnopH6YBDQt5gztkgSjEEoy0ryw9wMomdDxLjYoQG2KJGSCgVhWqSgaThJYUAFBYLUImMgrirz0mJLJ14T7i3GggDoNk0i2dLoV5cDdTwNg45RW6Oe/Pw40l9CEUOBSrSSMupImifPbJKXX55RV1flphCD55u/PPyWuPjGjBlLwSVczRSyzT6LEjGidn2sCCuTtekHn32M0pRQg1s/euXhyvaJj1yVtc2YnYxWGrKpUs+TZHPlVXziyPv24rLKJ39cXL3wwP6qzaKTPimxrC2BaRbJ9EpLWkmHFtA48WicWyIkSR6I3Zv70YFeFmnp6HrhFHL6XMRQUEVAyPDOXlrQ/q6NQzTnmxm1jjkiEBYUm+1RCDOCIQemGtS6LWhTNlQGVTNlJGRZGpcZpELhxXJ4Q39dBrG6rVl4Z348J4vLK54nctfuHUrTWGq7iE0KuO6GL46lpbFRkPTGUDzCK9GBpxE56Uz9KbMnT1/lgs3jvEb0ZsAKCtyhw/sGN91z5/vCwuYqwExyxegqwZPLkbSuCl3nLBX0F5ZPTD31wofBsBocfHX/0Oi9d8yUx0e1sFNdYlY2qW4KVptcPSx8M2702sU5yZoLh6Yff+41GtWVMrJ3z0x5YsTqTxeqk50bYFwRFb45ZHs1CSdTS6syNTwsa4k7AsZRjtoCpGct1lDQfDI8KrKxj0bkvrF/fX9F6jE2/5KejTpoBlXajFKJxn5ZmveqwUh40g9o76wcwUSXI28QRpTJiaBwJEudRM7Mzcpsu32ZAZuYgJPypAtnajCc/0y4IiRK72B+lSdjYSAncyOMLIzrnk55zpgZuYwmr5A1uotB0o49C5SiRcjqkeESvl104pyduL2hUlk9ICqLRjlWNgFdCDcU8Y7BhlSYdDggkpm5RaWpWqnEUq/VYBN/CoJcX4es+JL3ZIMR3jA3mgTu4TT/6ec/ct7I8KDctKWmEa0zSClDWeQyaGqJ+M7dt29XKhjgfDVbzHORQztTFlYOSWX+SDTEw8iMnm4yPO/AnzWhpArnGG+vSra0PAVhneu8gMY/efNgVOs/GvIYDivbIKDIlcRchdSoM3QT9/vso09MKvRrt2sZ+E9mIF8mITo9/vbuOYPtZUL4sqgDXH8kij2t6ION5WNnQvEM25MtevJDM1umz+WHEbxUZ4stHJsH9JQLknwWAF/cV9v29F1nJYomSsMNiapV231yUBQ342W8XErEdW28dWB0b7TxANAQch/gP84hXGvYqWzfAMbmnKTtNb40HLjw5PPHaJnNXq9BbL3vtodwtk7Em7Gnlu0b2qKGI76BODp0MlFtSKNsH8FdaVFj3fGqrt6KHHghBag0xqeW1mR6OZEI7wrZ3AJfSN7G2HFcuhMWmyw4zAij02fY9fzrkYIEr63fPpYJdaI3gjAgxKSZ9VksZEjBtpcLwY3VK/hGRylBngdxPu4V8wxqn0K4HE96b8ym0fjk/dlu6cXpHipX5Tp8ZJc43d6gEb1Z6x0PwvbUpMCeBqmBFeMFQP0QxkB+YBsojUiV2Kei54Nuomaa7XkZwOfcloE6w9dx3ov2b+B81j0onSUFWmjnAFmvsS4CZFCfnCqbugDMwPXysXCgwWLvbfl05ekNEh6Y74bpVftaUkGua5GQpYKaIYrSMZnMQABweRa7s0nR0CivEP4BGOXyIQaGTnjXo83ulmdQvxRVmALcTrwin1AK2TQaBsHn30gf6rBmP6KYYQOXA8i9FY51TG+Bh/ojSNg0P7lSsc2QZVFAOKxcBRf4gIatpupiGav3yYa495cwcxac935PFy5F7PVvrIsVZsaXS9dIkUEWIRrrzXLALJJTKPNDaqRe7QHXBUwN8CZyy9Zx7GlqgMmBFbNNKi5xxVpbhc35FfNhGQwj9swBJq322RIy1plflmhokPsy2nqQF1t4pQygmWH1zCyDABJ9qm0DEYI0dz5Y/F6TrmKTXsywr5KHk2WlrVeWyCnI6iZNHYVhynp3k5+88ZLrrx2J+vrE4bXePj+LLBYOzXAAFfhaQ1oaNN39aWV9ldNxC55ncXoJ79uddGr29Pe39f5U1wswx7rh6MHR2sDgYM7Iie4FkTOlXZCeurJcr5hLy8n8iRPn5dQpHMTX2v8wA38DUw/unxKk2VEAAAAASUVORK5CYII="
    },
    "W+cc": function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNCwxNC41NDY4NTExIEw0LjAxNDYyNTcyLDE0LjU0Njg1MTEgQzQuMTY5NTUwMDYsMTMuMzI2ODU1NiA0LjQ1MjU4NDg5LDEyLjE1NzU1NzYgNC44NjM3MzAyNCwxMS4wMzg5NTczIEM1LjI3NDg3NTU4LDkuOTIwMzU2OTMgNS44MzExOTQ3Nyw4Ljg2OTgwNTIyIDYuNTMyNjg3ODIsNy44ODczMDIxNCBDNy4yMzQxODA4Niw2LjkwNDc5OTA2IDguMDQ0MjgzNDQsNi4wNTI2OTk5NiA4Ljk2Mjk5NTU2LDUuMzMxMDA0ODEgQzkuODgxNzA3NjksNC42MDkzMDk2NyAxMC45NjI2NTcsNC4wNDA1MjA2NCAxMi4yMDU4NDM1LDMuNjI0NjM3NzIgQzEzLjQ0OTAzLDMuMjA4NzU0NzkgMTQuNzg2NDcxMiwzLjAwMDU0MjIyIDE2LjIxODE2NywzIEMxOC40NTI2NTI2LDMgMjAuNDU1MDIyNSwzLjUxMDc3MTQ3IDIyLjIyNTI3NjgsNC41MzIzMTQ0IEMyMy45OTU1MzEsNS41NTM4NTczMyAyNS40MTc0NzY0LDcuMDIzMjc0MTkgMjYuNDkxMTEyOCw4Ljk0MDU2NDk2IEMyNy40OTcwMzc2LDEwLjc1MTAzODMgMjgsMTIuODkwOTEwNSAyOCwxNS4zNjAxODE1IEwyOCwxOC4wOTA1MzE1IEwxMS42NzY4Nzk4LDE4LjA5MDUzMTUgQzExLjY4NjYzMDMsMTkuMTY1MjEyIDExLjk0NTI4OSwyMC4wOTcyODg2IDEyLjQ1Mjg1NTcsMjAuODg2NzYxMyBDMTIuOTYwNDIyNSwyMS42NzYyMzQgMTMuNjIwNzQ2OSwyMi4yNjk0MjI5IDE0LjQzMzgyODgsMjIuNjY2MzI4MSBDMTUuMjQ2OTEwNywyMy4wNjMyMzMzIDE2LjE2MzQ1NiwyMy4zMzkyMjM0IDE3LjE4MzQ2NDgsMjMuNDk0Mjk4NCBDMTguMjAzNDczNiwyMy42NDkzNzM0IDE5LjIzMzc3NDYsMjMuNjY0MDEzNCAyMC4yNzQzNjc3LDIzLjUzODIxODMgQzIxLjMxNDk2MDksMjMuNDEyNDIzMiAyMi4zMjA4ODU3LDIzLjE4NzQwMTggMjMuMjkyMTQyMSwyMi44NjMxNTQxIEMyNC4yNjMzOTg0LDIyLjUzODkwNjQgMjUuMTAyNDgxNiwyMi4xMjk4MDEyIDI1LjgwOTM5MTYsMjEuNjM1ODM4NiBMMjUuODA5MzkxNiwyNy4xMTExNzg2IEMyNC45MTkzODkyLDI3LjY0MzYzODggMjMuODA5NDU5MywyOC4wODkwNzI4IDIyLjQ3OTYwMTksMjguNDQ3NDgwMyBDMjEuMTQ5NzQ0NCwyOC44MDU4ODc5IDE5LjYzODQxOTYsMjguOTg5OTcxNyAxNy45NDU2Mjc1LDI4Ljk5OTczMTcgQzE2LjI1MjgzNTQsMjkuMDA5NDkxNiAxNC43MjQ0NDczLDI4Ljc1MzAyMTQgMTMuMzYwNDYzMSwyOC4yMzAzMjExIEMxMS41MzIyNDc3LDI3LjUyMzI2NTkgMTAuMDI1NTI3MywyNi4zMTc5MTAzIDguODQwMzAxOTksMjQuNjE0MjU0MyBDNy42NTUwNzY2OCwyMi45MTA1OTgzIDcuMDUyOTg0MzksMjEuMTA5NjEzOCA3LjAzNDAyNTEyLDE5LjIxMTMwMDggQzcuMDA0NzczNjcsMTYuODY4MzY3MSA3LjU0MTU5MTksMTQuODczODA5OSA4LjY0NDQ3OTgsMTMuMjI3NjI5MyBDOS43NDczNjc3MSwxMS41ODE0NDg2IDExLjMxOTM2MjIsMTAuMjgzOTE1NiAxMy4zNjA0NjMxLDkuMzM1MDMwMTggQzEyLjg5NjIzMTgsOS45MTU3NDgwNiAxMi41MTg5NDIzLDEwLjUyMzMwNTggMTIuMjI4NTk0NiwxMS4xNTc3MDM1IEMxMS45MzgyNDY5LDExLjc5MjEwMTIgMTEuNzE1ODgxOCwxMi41NjQyMjI4IDExLjU2MTQ5OTEsMTMuNDc0MDY4NCBMMjAuNzc0ODkyNSwxMy40NzQwNjg0IEMyMC44NTIzNTQ3LDEyLjcyODUxNTYgMjAuODEzNjIzNiwxMi4wNTA3NDAzIDIwLjY1ODY5OTMsMTEuNDQwNzQyNSBDMjAuNTAzNzc0OSwxMC44MzA3NDQ3IDIwLjI3NjUzNDUsMTAuMzM5MjIyMSAxOS45NzY5NzgsOS45NjYxNzQ1NCBDMTkuNjc3NDIxNSw5LjU5MzEyNzAyIDE5LjMzNjQyNTUsOS4yNzEwNDgxOSAxOC45NTM5ODk5LDguOTk5OTM4MDcgQzE4LjU3MTU1NDMsOC43Mjg4Mjc5NSAxOC4xODIwNzY3LDguNTMwMzc1MzQgMTcuNzg1NTU3MSw4LjQwNDU4MDI1IEMxNy4zODkwMzc1LDguMjc4Nzg1MTUgMTcuMDI2MzczNyw4LjE3OTU1ODg1IDE2LjY5NzU2NTgsOC4xMDY5MDEzNCBDMTYuMzY4NzU3OCw4LjAzNDI0MzgyIDE2LjA5NzkxMTEsNy45OTMwMzUwOSAxNS44ODUwMjU2LDcuOTgzMjc1MTIgTDE1LjU2NTY5NzMsNy45Njg2MzUxOCBDMTQuMjU5Njc0Myw4LjAxNjg5Mjc4IDEzLjAwNDU3MDUsOC4yMzI0MjUzMiAxMS44MDAzODYsOC42MTUyMzI4MSBDMTAuNTk2MjAxNCw4Ljk5ODA0MDMgOS41MTUyNTIwNiw5LjUwMzkzMTc5IDguNTU3NTM4LDEwLjEzMjkwNzMgQzcuNTk5ODIzOTUsMTAuNzYxODgyNyA2Ljc0ODU1MjY2LDExLjQ0MjA5OCA2LjAwMzcyNDE0LDEyLjE3MzU1MzEgQzUuMjU4ODk1NjIsMTIuOTA1MDA4MiA0LjU5MTUyOTI3LDEzLjY5NjY0OTggNC4wMDE2MjUwOCwxNC41NDg0Nzc4IEw0LDE0LjU0Njg1MTEgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
    },
    WCiE: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return I
            }
        ));
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("lwsE")
            , a = n.n(o)
            , s = n("W8MJ")
            , c = n.n(s)
            , u = n("7W2i")
            , l = n.n(u)
            , d = n("a1gu")
            , M = n.n(d)
            , p = n("Nsbk")
            , f = n.n(p)
            , y = n("cDf5")
            , g = n.n(y)
            , A = n("+B0l");
        function D(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function N(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = f()(e);
                if (t) {
                    var r = f()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return M()(this, n)
            }
        }
        var j = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , v = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , w = function(e) {
            l()(n, e);
            var t = N(n);
            function n() {
                return a()(this, n),
                    t.apply(this, arguments)
            }
            return c()(n, [{
                key: "onWatchValue",
                value: function(e) {
                    e && this.$sendStatisticsEvent({
                        reportConfig: {
                            spmId: "777.73.collection_popup.show"
                        },
                        msg: h({}, this.reportInfo)
                    })
                }
            }, {
                key: "handleConfirm",
                value: function() {
                    this.$emit("input", !1),
                        this.$emit("unfavorite")
                }
            }]),
                n
        }(n("oCYn").default);
        j([Object(A.d)({
            type: Boolean,
            default: !1
        }), v("design:type", Boolean)], w.prototype, "value", void 0),
            j([Object(A.d)({
                type: Object,
                default: function() {
                    return {
                        location: I.Detail,
                        manga_id: 0
                    }
                }
            }), v("design:type", Object)], w.prototype, "reportInfo", void 0),
            j([Object(A.g)("value"), v("design:type", Function), v("design:paramtypes", [Boolean]), v("design:returntype", void 0)], w.prototype, "onWatchValue", null);
        var I;
        w = j([Object(A.b)({})], w);
        !function(e) {
            e[e.Detail = 1] = "Detail",
                e[e.Reader = 2] = "Reader"
        }(I || (I = {}))
    },
    XGqN: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return D
            }
        )),
            n.d(t, "d", (function() {
                    return r
                }
            )),
            n.d(t, "c", (function() {
                    return a
                }
            )),
            n.d(t, "e", (function() {
                    return i
                }
            )),
            n.d(t, "b", (function() {
                    return s
                }
            ));
        var i, r, o, a, s, c = n("lwsE"), u = n.n(c), l = n("W8MJ"), d = n.n(l), M = n("cDf5"), p = n.n(M), f = n("1aRO"), y = n("ZS4h"), g = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, A = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }, D = function() {
            function e() {
                u()(this, e),
                    this.id = 0,
                    this.ord = 0,
                    this.isLocked = !1,
                    this.isInFree = !1,
                    this.payMode = r.Free,
                    this.payGold = 0,
                    this.readStatus = o.UnRead,
                    this._shortTitle = "",
                    this.title = "",
                    this.allImageSize = 0,
                    this.commentCount = 0,
                    this.unlockType = i.Locked,
                    this.unlockUntil = "",
                    this.allowWaitFree = !1
            }
            return d()(e, [{
                key: "shortTitle",
                get: function() {
                    return this._shortTitle.trim()
                }
            }, {
                key: "shortTitleFormatted",
                get: function() {
                    return y.a.formatShortTitle(this.shortTitle)
                }
            }, {
                key: "shortTitleFormattedPrefix",
                get: function() {
                    return y.a.formatShortTitle(this.shortTitle, "第")
                }
            }, {
                key: "isFreeEpisode",
                get: function() {
                    return this.payMode === r.Free
                }
            }, {
                key: "isUnlockedEpisode",
                get: function() {
                    return this.isFreeEpisode || !this.isLocked && this.unlockType !== i.WaitFree && this.unlockType !== i.LimitedFree
                }
            }]),
                e
        }();
        g([Object(f.a)(), A("design:type", Number)], D.prototype, "id", void 0),
            g([Object(f.a)(), A("design:type", Number)], D.prototype, "ord", void 0),
            g([Object(f.a)("is_locked"), A("design:type", Boolean)], D.prototype, "isLocked", void 0),
            g([Object(f.a)("is_in_free"), A("design:type", Boolean)], D.prototype, "isInFree", void 0),
            g([Object(f.a)("pay_mode"), A("design:type", Number)], D.prototype, "payMode", void 0),
            g([Object(f.a)("pay_gold"), A("design:type", Number)], D.prototype, "payGold", void 0),
            g([Object(f.a)("read"), A("design:type", Number)], D.prototype, "readStatus", void 0),
            g([Object(f.a)("short_title"), A("design:type", String)], D.prototype, "_shortTitle", void 0),
            g([Object(f.a)("title"), A("design:type", String)], D.prototype, "title", void 0),
            g([Object(f.a)("size"), A("design:type", Number)], D.prototype, "allImageSize", void 0),
            g([Object(f.a)("comments"), A("design:type", Number)], D.prototype, "commentCount", void 0),
            g([Object(f.a)("unlock_type"), A("design:type", Number)], D.prototype, "unlockType", void 0),
            g([Object(f.a)("unlock_expire_at"), A("design:type", String)], D.prototype, "unlockUntil", void 0),
            g([Object(f.a)("allow_wait_free"), A("design:type", Boolean)], D.prototype, "allowWaitFree", void 0),
            D = g([Object(f.b)()], D),
            function(e) {
                e[e.Locked = 0] = "Locked",
                    e[e.CoinOrCoupon = 1] = "CoinOrCoupon",
                    e[e.WaitFree = 2] = "WaitFree",
                    e[e.LimitedFree = 3] = "LimitedFree"
            }(i || (i = {})),
            function(e) {
                e[e.Free = 0] = "Free",
                    e[e.Pay = 1] = "Pay"
            }(r || (r = {})),
            function(e) {
                e[e.UnRead = 0] = "UnRead",
                    e[e.Read = 1] = "Read"
            }(o || (o = {})),
            function(e) {
                e[e.None = 0] = "None",
                    e[e.Discount = 1] = "Discount"
            }(a || (a = {})),
            function(e) {
                e[e.Free = 0] = "Free",
                    e[e.PermUnlocked = 1] = "PermUnlocked",
                    e[e.WaitFreeUnlocked = 2] = "WaitFreeUnlocked",
                    e[e.LimitedFreeCouponUnlocked = 3] = "LimitedFreeCouponUnlocked",
                    e[e.LimitedFreeOtherUnlocked = 4] = "LimitedFreeOtherUnlocked",
                    e[e.WaitFreeAvail = 5] = "WaitFreeAvail",
                    e[e.Locked = 6] = "Locked",
                    e[e.PayForNew = 7] = "PayForNew"
            }(s || (s = {}))
    },
    XmzZ: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIuNzAxMTcyNSwyOS4yOTU0OTM0IEwxMy4zMTUxNzY0LDI5LjY4ODAyMDMgQzEwLjE0NDA1MzIsMjkuMDM4MTY4NyA3LjQ5ODAxNzksMjcuNDg3OTczMyA1LjI1NzI0NjMxLDI1LjMwOTk4NTggQzIuOTc4NTkzODUsMjMuMDk1MTMwMSAxLjgxMDY0NDU3LDIwLjM2NjQ4OTQgMS4zNzMwOTU3MiwxNy4yOTI3NTk3IEwxLjA2OTE2OTkzLDE4LjE3NDUwMjEgQzEuMDc0MDYyNSwxNi43NTEwMDI5IDEuMDMzNjkxNDEsMTUuMzI5MDM3NiAxLjM1ODkxNjAzLDEzLjkxMTg2OSBDMS4yMzkyNjc1OSwxNC4wODM2MDQ4IDEuMTE5NjQ4NDQsMTQuMjU1NDUyMSAxLDE0LjQyNzI0MzYgQzEuNTI1MDg3OTIsMTIuMzg0OTg4MiAyLjAzNTE0NjU0LDEwLjM0Mzk1OTkgMy43MDQyMTg4OSw4LjgwMDQwMTg0IEM1LjAyNzgyMjQ3LDcuNTc2MzMxNDQgNi41ODM0NTczMSw3LjAyODQzOTE4IDguNDIzNDc2OTMsNy4yNDMwNjcwNCBDOC41MjUxMzcxLDcuMjU0OTE5NTQgOC42MjU1MDgxOSw3LjI3ODUxMjk4IDguNzI1NTU3MDMsNy4zMDA1MTY4IEM4Ljc3NDEzMTI1LDcuMzExMTcwMTEgOC44MjA1Mzc1LDcuMzMwNzc1NTQgOC44Nzc0NjEzMyw3LjM0OTQ2MDY1IEw4LjY1MDU4NjMyLDguNjE2MTQ0MjcgQzkuODE0MTcwMzYsNi45NjY2Mzg4NSAxMS4xMzk5NDE5LDUuNzI5MTgyMSAxMy4zNTU5NTc2LDUuODU3ODAyNjQgQzEzLjI5MDE4NjIsNS45MjQ1NjcwOCAxMy4yMjY2MTE5LDUuOTkzMzY3MzUgMTMuMTU4MzIwOSw2LjA1NzY0OTczIEMxMi4xODYzMDkyLDYuOTcyOTEzNzEgMTEuNDkyOTEwNyw4LjAzMjQ3MTQxIDExLjE5MTU2Myw5LjMyMTY4ODcyIEMxMC44NjU3ODE3LDEwLjcxNTQ1OSAxMS4yNDE0ODQ5LDExLjkzMjM5IDEyLjEwNTcxMzQsMTMuMDU0OTE5NCBDMTIuNTUwNjc0NCwxMy42MzI5NTg4IDEyLjM5NzgwMzMsMTQuMjY5ODcwMyAxMi4zMTg4MTg5LDE0Ljg5NTY4MjMgQzEyLjI4NjQ1MDEsMTQuOTExOTQxNSAxMi4yNTQwOTY2LDE0LjkyODIyODIgMTIuMjIxNzU4NCwxNC45NDQ1NDI1IEMxMi4xMzI0OTA4LDE0LjgzOTU0MzMgMTIuMDU0MTgwMiwxNC43MjM1ODQgMTEuOTUyMzQ0MywxNC42MzExMDY2IEMxMC4zNzEwNDU0LDEzLjE5NDU4MzcgOC4wMzc4MTI4NSwxMy42MjAxODYgNy4xNDk5MTI0MiwxNS41Mjg5OTYyIEM2LjQ1Mzk5NDQxLDE3LjAyNTExNjQgNi44MTI4ODExNSwxOC4zOTY4MjcxIDcuODA2MzM4MjMsMTkuNjYyMjgzNiBDNy45Mjg5NDU2NiwxOS44MTg1MTM1IDguMDcyNTAwMzUsMTkuOTU5NzM5NSA4LjI1NjgzNjMsMjAuMDc1MTQxIEM4LjIwMzk1NTQ0LDIwLjAwOTIxMzIgOC4xNTE0MjYxNCwxOS45NDI5Nzg3IDguMDk4MTM1MTIsMTkuODc3MzI5OCBDNy4yMTk2Mzg5OCwxOC43OTUzNDk5IDYuODE2MjUwMjksMTcuNjAxNzA1NiA3LjIxNzY0NjgsMTYuMjQ2MjI1OCBDNy41NTQxODAwMiwxNS4xMDk2OTY2IDguNjY5ODYzNjcsMTQuMjQ3Njk5MiA5Ljc1NTAxOTk3LDE0LjI0MTE3MzMgQzEwLjIwMjkxMDYsMTQuMjM4NDEyNCAxMC41NzkyODc2LDE0LjM1MjAyOTEgMTAuOTUzOTk0NiwxNC41OTgwODcgQzEwLjAxNDgyNDcsMTUuNjE4NjAxMSA5Ljk1MzU2NDksMTYuODUyOTkwMiAxMC4wNzg4MDksMTguMDk4MzM5MyBDMTAuMjAxMjcsMTkuMzE1NTIxMyAxMC44MzEyNywyMC4yOTg4NjA0IDExLjg2NDgwNTIsMjEuMDM3NjQ3NyBDMTEuOTQ2OTI0NCwyMS4wOTYzNTI0IDEyLjA0NzA2MTEsMjEuMTQ0MDEzNCAxMi4xMDQ0NTM3LDIxLjIyMDMxNTYgQzEyLjQ3MTU0MzUsMjEuNzA3ODAyIDEzLjAwNzk0MDEsMjEuODU1NDE0NCAxMy41OTI1MDA2LDIxLjk1NTAzMTIgQzE0LjEyNjQwNjksMjIuMDQ2MDMwNSAxNC42NDkzNTYyLDIyLjE5NjE4MDcgMTUuMTc1NDY5NSwyMi4zMjY1MzAzIEMxNS4yNTA0MTA5LDIyLjM0NTEzMTggMTUuMzE1NzQyOSwyMi4zOTg3ODg3IDE1LjQ1MDY1NSwyMi40NzExNTg3IEwxNC40NjMxNzQ1LDIyLjQ3MTE1ODcgQzE0Ljc0MzM0MDUsMjIuNzg2MDE2OSAxNS4xMTE3NDg4LDIyLjkxMDkwMDQgMTUuNDk1NTY3MSwyMy4wMDU1MjUyIEMxNi4zODExNTMxLDIzLjIyMzg5MDEgMTcuMjU0OTYxOCwyMy4wNzc0NDg5IDE4LjEyNDk5MTEsMjIuOTE0Nzc2OSBDMTguNjQ0NTQxOSwyMi44MTc2MTQzIDE5LjE1ODIzMzMsMjIuNjkyMTczIDE5LjcwODA0NzgsMjIuNTcyMDU4MyBMMTkuNTg3ODcyLDIyLjk2NDkxOTkgQzIwLjAwODI4MjIsMjIuNzY0MzE5OCAyMC4zMjk5NjE5LDIyLjUxNzc4NzggMjAuNTg4NDE4OSwyMi4xODc5NTM3IEMyMC43MDQ1ODExLDIyLjAzOTcyNzcgMjAuODI0NDYzOSwyMS44ODg4ODAzIDIwLjk2OTUxMjcsMjEuNzY4NDg2OCBDMjEuMDU2ODc2LDIxLjY5NjAwNTIgMjEuMTk1OTQ4MywyMS42Nzk4MDIyIDIxLjMxMjMxNTUsMjEuNjM4MTY1IEMyMS4zNDA1ODcsMjEuODA1NDY2NiAyMS4zNTk4MDU3LDIxLjkxOTI1MDYgMjEuMzc4OTY1OSwyMi4wMzMwMzQ1IEMyMS41MDk1NDIsMjEuOTg5NjEyNiAyMS42NTkxNjEyLDIxLjk3MTgxOTkgMjEuNzY3NTU5NiwyMS44OTg1ODU0IEMyMi41Mjk1NzE0LDIxLjM4NDAxOTUgMjIuOTg4NDE5MSwyMC42NTI4NDU4IDIzLjI2NTI0NTMsMTkuODI5NTg1MSBDMjMuNTM2NDc1NywxOS4wMjI4MzQzIDIzLjczMzQwOTMsMTguMTkzNDY2MSAyMy45NzczNjQ0LDE3LjMyMjU0NDQgQzI0LjA5NDA4MzIsMTcuNTM4Mzk5MyAyNC4yMTIxNDk2LDE3Ljc1Njc2NDIgMjQuMzYxMywxOC4wMzI4MDE5IEMyNC40NzczNDQ5LDE3LjQwOTgwNjcgMjQuNjY0MjI5NywxNi44MTg3OTkyIDI0LjY3OTYxMDYsMTYuMjIzNjM2NCBDMjQuNzAxMzQ4OCwxNS4zODY4MjIgMjQuNjAwNjU1NSwxNC41NDY3NzI2IDI0LjU0MjI2NjgsMTMuNzA4NjQ3NSBDMjQuNTE2NTE0OCwxMy4zMzkwNDQ3IDI0LjQ2NjIxMjEsMTIuOTcxMDAzNyAyNC40MjAxNTc0LDEyLjUzODA5NDYgQzI0Ljk5ODE1NTUsMTIuODUwMDgwMyAyNS4zNTc4MzMzLDEzLjI3MTQ5OTQgMjUuNjczMDA5LDEzLjc1OTg3ODIgQzI1LjY4ODg1ODcsMTIuNDk0ODk1NyAyNS42NzkzNjY1LDExLjIxNjA4MDcgMjUuMTI3MjM3NSwxMC4wNDU3Nzg4IEMyNC41NzkwMDUxLDguODgzNDUzIDIzLjgyNTE5NjUsNy44MjY3MTIwMSAyMi43Nzk0NzM3LDYuOTg2OTY5MzggQzIzLjMxMzE3NDksNi44NzcxNDU1MSAyMy45NzI0MTMzLDcuMTU3NzI5MDQgMjUuMzA1NjU1NSw4LjAzNTkwMTY2IEMyNC44MTMzMjE1LDcuMjEyNDQ1NzYgMjQuMTk3NDEzMyw2LjQ3MzI2ODA5IDIzLjQ2NTI4NDMsNS44MzY5NDIyNCBDMjIuNzQyMDYxNiw1LjIwODM2OTMyIDIxLjk2MjczNTQsNC42MzgzODk1OCAyMS4yMDc1NDk4LDQgQzIyLjAyMzExNjMsNC4zMDk5NDk4NCAyMi44NDY2MjIyLDQuNjAyNTI1MzEgMjMuNjUxNzg4Miw0LjkzNTI4NzczIEMyNC4zMTczMjU0LDUuMjEwMzc3MjcgMjQuODkwNDMwOSw1LjYyNDIzODY4IDI1LjQxNDgxNTcsNi4xMDU2MTc1IEMyNi4zODMwNDgxLDYuOTk0Mzg3NjUgMjcuMzg2MTczMiw3Ljg1MDcyMzc4IDI4LjE2ODY2MzUsOC45MTQ1NzYyNyBDMjguMTI1MTI4Myw4LjgzMjk3NTMgMjguMDg1NTc3NSw4Ljc0OTI1NDgyIDI4LjAzNzQxMzUsOC42NzAxNjM3OCBDMjcuMzgxMzY4NSw3LjU5MjE3MTk2IDI2LjUzOTAyNDcsNi42NTU1MTc3MSAyNS41ODM1MDcxLDUuODEzODIyOSBDMjUuMzE0MTgwOSw1LjU3NjU0OTggMjUuMjIxMjUxMiw1LjMzODA3NzUgMjUuMzEyODA0LDQuOTUzNzc3NjMgQzI1Ljk4MDU2NzcsNS40MjI3MTgyOSAyNi42MzQzNTY4LDUuODYyNTQzNjQgMjcuMTQ2NDk1NCw2LjUwNjQ1NTA5IEwyNy4yNDA1Njc3LDYuMjUyNTg4NDkgQzI5LjU4MTAwNzMsOC4yMDQ2MjU0OCAzMC4yOTcxMTA4LDEwLjY4NTQ1MTMgMjkuOTk3MDUyMiwxMy41MjM5NDM3IEMzMC4wMjk5NTI2LDEzLjUzMDYwOSAzMC4wNjI5MTE2LDEzLjUzNzIxODUgMzAuMDk1NzUzNCwxMy41NDM4MjggQzMwLjI1MTY3MTQsMTMuMjE0Nzc0NyAzMC40MDc2MTg3LDEyLjg4NTcyMTUgMzAuNTkwNzUzNCwxMi40OTg5Njc0IEMzMC43MDEyMzIsMTMuMDcyNDYxMSAzMC44MjcwMDM0LDEzLjYwNTc2NzggMzAuOTAzNDA5NywxNC4xNDUyOTM2IEMzMS4xMDIwMTMyLDE1LjU0NzU0MTkgMzEuMDMwMDg5NCwxNi45MTg2NjcgMzAuMzQ3Nzk0NCwxOC4yMTc4MTI1IEMzMC4wOTUyODQ3LDE4LjY5ODU0OTkgMjkuODk1MjQ1NiwxOS4yMDQxMDc4IDI5LjY1Nzk0MDksMTkuNjkyNDg2NiBDMjkuNTM3NDQyOCwxOS45NDA1ODAzIDI5LjQ5NjkyNTMsMjAuMTcxNzQ1OSAyOS41NjkzMTc4LDIwLjQ1MTEwMjMgQzI5Ljc4ODA3NzYsMjEuMjk0NjY1NiAyOS42NjU5NjgyLDIyLjEwMjAzIDI5LjE5NDc1NzMsMjIuODU2MSBDMjguMjc1MzkyLDI0LjMyNzMxNiAyNy4wNjYzMDk5LDI1LjUxMjYyMTcgMjUuNDYxODY2NSwyNi4zMTQ3MTUyIEMyNS4zNTAyNzQ3LDI2LjM3MDQ5MTcgMjUuMjYzMjA0MywyNi40NzUyMTIgMjUuMTczODc4MiwyNi41NjU0MzA1IEMyNS4xMTgyMTQxLDI2LjYyMTc5MjYgMjUuMDc2NTUzOSwyNi42OTE3MDg0IDI1LjAzNDI0OTMsMjYuNzU4ODkxMSBDMjQuMjQzNTg1MSwyOC4wMTU1MzUgMjMuMDA3OTAxNSwyOC42MTUzODMgMjEuNTYzMDk2NywyOC45NDYzODg1IEMxOS45MDY1NjM0LDI5LjMyNTg2MzcgMTguMjQxNTYzNCwyOS42MTAxODQzIDE2LjUzMDc0MywyOS41ODcxNDg2IEMxNi40ODI1MjAzLDI5LjU4NjUzNSAxNi40MzQxNTEyLDI5LjU5MzE0NDUgMTYuMzEwNjA2MiwyOS42MDEzNDM3IEMxNi40Nzk1MzIsMjkuNzQ4MzQyNiAxNi42MDEyMzEyLDI5Ljg1NDE3ODQgMTYuNzY2OTkzLDI5Ljk5ODMzMjcgQzE1LjMyNTQxMDksMzAuMDI3MzkyMiAxNC4wMjI3ODM5LDI5LjY3MjkwNDkgMTIuNzM5MDgyNiwyOS4yMjMxNzkyIEwxMi43MDExNzI1LDI5LjI5NTQ5MzQgWiBNMTAuMDI4MjYxMSwxNiBDMTAuODgwNzU3MiwxNi43NDI3MjI3IDExLjc4NzExNjYsMTcuMjI4OTcxMiAxMi44ODQ2MzM1LDE3LjI4OTQxNDcgQzEzLjQxOTk3NDksMTcuMzE4OTU0MyAxMy45MDQ3NDQ1LDE3LjE3OTI3NDUgMTQuMzY2MDU1MywxNi45MDUzNDM4IEMxNS4zNTc3OTgyLDE2LjMxNjYxMTQgMTYuMzYzODc4NiwxNi4zNzkyMjY1IDE3LjM1OTMwMzUsMTYuODk5ODU5MSBDMTcuNjg0OTkzNywxNy4wNzAyMjAxIDE3LjkwMzk4OTQsMTcuMzQ1NDg3MSAxNy45ODMyNjQyLDE3LjcxMjAxOCBDMTguMDU3NDA2NCwxOC4wNTUxMzQzIDE3Ljg4MTA2MDYsMTguMjY4MDM2OSAxNy41MzY0NTgyLDE4LjIwMDI5ODkgQzE3LjA4MTcwMjUsMTguMTEwOTg0IDE2LjcyMzQ4NzksMTguMjMxODQzMSAxNi4zNzUxNDc4LDE4LjUyNjQwNDIgQzE2LjA1NTM5OSwxOC43OTY4ODI2IDE1LjY4NDkzODksMTkuMDA2NjExMiAxNS4zNDQzODEyLDE5LjI1MzYxOTMgQzE0LjQ1NDQ1MTQsMTkuODk5MTc1OCAxMy40MzMzOTE5LDE5Ljk4OTM1MzkgMTIuMzc5Mzg5NiwxOS45OTk5MDU3IEMxMS45ODgwMzcsMjAuMDAzODAzNSAxMS42OTIzMzI4LDE5Ljg4Njg3IDExLjM5OTY0MTEsMTkuNjQ2NzM4NyBDMTAuMjQ5MDk3OCwxOC43MDI0NzI3IDkuODg5NDA0NzksMTcuNDcxMzU3NyAxMC4wMjgyNjExLDE2IFogTTUuNDA1NTQ0NTMsNiBMNSw1LjY3MDA3ODQzIEM5LjE1ODY2NjQ1LDEuNzg1MTY4OTYgMTcuMDM5Mzk2NCwwLjU3ODI2ODQwMSAyMyw0LjA0NDQ0OTI0IEMyMi43ODk0MTI3LDMuOTcwNTcwNDEgMjIuNTg0NDA5NywzLjg4MDY4MTI0IDIyLjM2NzMxNzEsMy44MjU5MTE1NSBDMjEuNzU4MTIyNCwzLjY3MjIyNjg4IDIxLjE0MjM5MzYsMy41MzczODA4MSAyMC41MzE5NjEyLDMuMzg3MDE2MjYgQzE5Ljc5NTcxMTgsMy4yMDU2MzkzMyAxOS4wNzI5MDQ3LDIuOTczNTk5ODIgMTguMzI1Nzc0NywyLjgzNjcxMjUgQzEzLjQ5ODk2MywxLjk1MjE4MzMgOS4yNjE4MDEyNCwyLjkzMzkzMDUzIDUuNjM5NTMzNTYsNS44MTMxMzg3MiBDNS41NzMxMjc3Nyw1Ljg2NTk2NTUyIDUuNTA2OTIzNDcsNS45MTkwMzgyNiA1LjQwNTU0NDUzLDYgWiBNMTEuOTgxNDEwMiwxMyBDMTEuMTQ1NzUzNywxMS44NTk3MjAzIDEwLjc1MjUxNzksMTAuNTYwODc2MiAxMS4xNjUxNzM1LDkgQzExLjYzMDg1NTYsOS41NTEyODkzMSAxMi4yMjMyNTAzLDkuNTE1NTYwNTkgMTIuODA0OTY3MSw5LjUzMzkyNjEyIEMxMy4zNzY3NjIzLDkuNTUyMDAwNjUgMTMuOTUwMjgxNyw5LjU1OTcyODQgMTQuNTE5MDgyMyw5LjYxNjc2NTAxIEMxNC45MjY2MjU5LDkuNjU3NjY3MTIgMTUuMDI3OTU5Nyw5LjgxNTg0MzUgMTQuOTkzODY5MiwxMC4yNTQ2NzYzIEMxNC45NDUxNjg1LDEwLjg4MjE3NjEgMTQuNzQ3MjgwMSwxMS4zOTQ0Mzg2IDE0LjE2MDc1MzYsMTEuNzA0MjI3NiBDMTMuNDIzNjQ4MSwxMi4wOTM1MjUyIDEyLjcyMDUxMjEsMTIuNTU2MjIwMiAxMS45ODE0MTAyLDEzIEwxMS45ODE0MTAyLDEzIFogTTIsOSBDMi4wOTkxNDM4Myw3LjU1MDY0MDkzIDIuNDMzMjUzNzksNi4xODA3ODQxMiAzLjcwOTk0MjY2LDUgQzMuNzk1ODE5ODEsNS45MTA0ODIxIDQuMTk2MTI3NDQsNi42MjU0NjQ1MSA1LDcuMjAzNjk2MjMgQzMuODA1NzYxMzQsNy42MTM0NjY5NyAyLjg2NDAzMDY3LDguMjUyMzE2MzQgMiw5IFoiLz4KICA8L2c+Cjwvc3ZnPgo="
    },
    XrP9: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return M
            }
        ));
        var i, r = n("sXyB"), o = n.n(r), a = n("RIqP"), s = n.n(a), c = n("lwsE"), u = n.n(c), l = n("W8MJ"), d = n.n(l);
        !function(e) {
            e[e.Year = 0] = "Year",
                e[e.Month = 1] = "Month",
                e[e.Day = 2] = "Day",
                e[e.Hour = 3] = "Hour",
                e[e.Minute = 4] = "Minute",
                e[e.Second = 5] = "Second"
        }(i || (i = {}));
        var M = function() {
            function e() {
                u()(this, e)
            }
            return d()(e, null, [{
                key: "getWeekDayLabel",
                value: function(e) {
                    switch (e) {
                        case 0:
                            return "周日";
                        case 1:
                            return "周一";
                        case 2:
                            return "周二";
                        case 3:
                            return "周三";
                        case 4:
                            return "周四";
                        case 5:
                            return "周五";
                        case 6:
                            return "周六"
                    }
                }
            }, {
                key: "parseReadableDateString",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        , r = n.timeZoneHourOffset
                        , a = e.convertReadableDataStringToArray(t);
                    return a ? (a[i.Month] = a[i.Month] - 1,
                        void 0 === r ? o()(Date, [a[i.Year], a[i.Month]].concat(s()(a.slice(i.Day)))) : (a[i.Hour] += r,
                            new Date(Date.UTC.apply(Date, [a[i.Year], a[i.Month]].concat(s()(a.slice(i.Day))))))) : null
                }
            }, {
                key: "convertServerDateToDate",
                value: function(t) {
                    return e.parseReadableDateString(t, {
                        timeZoneHourOffset: -8
                    })
                }
            }, {
                key: "convertReadableDataStringToArray",
                value: function(e) {
                    var t = e.split(" ");
                    if (2 !== t.length)
                        return null;
                    var n = t[0].split("-").map((function(e) {
                            return parseInt(e, 0)
                        }
                    )).filter((function(e) {
                            return !isNaN(e)
                        }
                    ));
                    if (3 !== n.length)
                        return null;
                    var i = t[1].split(":").map((function(e) {
                            return parseInt(e, 0)
                        }
                    )).filter((function(e) {
                            return !isNaN(e)
                        }
                    ));
                    return 3 !== i.length ? null : [].concat(s()(n), s()(i))
                }
            }, {
                key: "formatTimeLength",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "HH:MM:SS:ll"
                        , n = e < 0
                        , i = Math.abs(e)
                        , r = Math.floor(i % 1e3)
                        , o = Math.floor(i / 1e3)
                        , a = Math.floor(o % 60)
                        , s = Math.floor(o / 60)
                        , c = Math.floor(s % 60)
                        , u = Math.floor(s / 60)
                        , l = Math.floor(u % 24)
                        , d = Math.floor(l / 24)
                        , M = t
                        , p = !1
                        , f = !1
                        , y = !1
                        , g = !1;
                    return M.includes("DD") ? M = M.replace("DD", d.toString().padStart(2, "0")) : M.includes("D") ? M = M.replace("D", d.toString()) : p = !0,
                        M.includes("HH") ? M = p ? M.replace("HH", u.toString().padStart(2, "0")) : M.replace("HH", l.toString().padStart(2, "0")) : M.includes("H") ? M = p ? M.replace("H", u.toString()) : M.replace("H", l.toString()) : f = !0,
                        M.includes("MM") ? M = f ? M.replace("MM", s.toString().padStart(2, "0")) : M.replace("MM", c.toString().padStart(2, "0")) : M.includes("M") ? M = f ? M.replace("M", s.toString()) : M.replace("M", c.toString()) : y = !0,
                        M.includes("SS") ? M = y ? M.replace("SS", o.toString().padStart(2, "0")) : M.replace("SS", a.toString().padStart(2, "0")) : M.includes("S") ? M = y ? M.replace("S", o.toString()) : M.replace("S", a.toString()) : g = !0,
                    M.includes("ll") && (M = g ? M.replace("ll", i.toString().padStart(3, "0")) : M.replace("ll", r.toString().padStart(3, "0"))),
                    (n ? "-" : "") + M
                }
            }]),
                e
        }()
    },
    YMW7: function(e, t, n) {
        "use strict";
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("7W2i")
            , a = n.n(o)
            , s = n("a1gu")
            , c = n.n(s)
            , u = n("Nsbk")
            , l = n.n(u)
            , d = n("cDf5")
            , M = n.n(d)
            , p = n("+B0l");
        function f(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = l()(e);
                if (t) {
                    var r = l()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return c()(this, n)
            }
        }
        var y = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , g = function(e) {
            a()(n, e);
            var t = f(n);
            function n() {
                return r()(this, n),
                    t.apply(this, arguments)
            }
            return n
        }(n("oCYn").default)
            , A = g = y([p.b], g)
            , D = n("KHd+")
            , h = Object(D.a)(A, (function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("jk-vertical-center", {
                    staticClass: "old-browsers w-100 h-100 p-fixed p-zero t-center"
                }, [i("div", {
                    staticClass: "hint-text"
                }, [i("img", {
                    attrs: {
                        src: n("20sy"),
                        width: "288",
                        height: "240"
                    }
                }), i("p", [e._v("邀请您使用以下新版浏览器 " + e._s(e.$emoji.happy()))])]), i("div", {
                    staticClass: "divider"
                }), i("div", {
                    staticClass: "browser-list-container"
                }, [i("p", {
                    staticStyle: {
                        "font-size": "14px"
                    }
                }, [e._v("以下四款官方正版浏览器任君挑选")]), i("div", {
                    staticClass: "browser-list"
                }, [i("a", {
                    staticClass: "list-item",
                    attrs: {
                        href: "https://www.microsoftedgeinsider.com"
                    }
                }, [i("img", {
                    staticClass: "list-img",
                    attrs: {
                        src: n("8XqL")
                    }
                }), i("img", {
                    staticClass: "list-img activated",
                    attrs: {
                        src: n("W+cc")
                    }
                }), i("div", {
                    staticClass: "label"
                }, [e._v("Edge")]), i("div", {
                    staticClass: "vendor"
                }, [e._v("微软")])]), i("a", {
                    staticClass: "list-item",
                    attrs: {
                        href: "https://www.google.cn/intl/zh-CN/chrome"
                    }
                }, [i("img", {
                    staticClass: "list-img",
                    attrs: {
                        src: n("xaVA")
                    }
                }), i("img", {
                    staticClass: "list-img activated",
                    attrs: {
                        src: n("kHPA")
                    }
                }), i("div", {
                    staticClass: "label"
                }, [e._v("Chrome")]), i("div", {
                    staticClass: "vendor"
                }, [e._v("谷歌")])]), i("a", {
                    staticClass: "list-item",
                    attrs: {
                        href: "https://www.mozilla.org/zh-CN/firefox/new"
                    }
                }, [i("img", {
                    staticClass: "list-img",
                    attrs: {
                        src: n("S8+f")
                    }
                }), i("img", {
                    staticClass: "list-img activated",
                    attrs: {
                        src: n("XmzZ")
                    }
                }), i("div", {
                    staticClass: "label"
                }, [e._v("Firefox")]), i("div", {
                    staticClass: "vendor"
                }, [e._v("火狐")])]), i("a", {
                    staticClass: "list-item",
                    attrs: {
                        href: "https://www.opera.com/zh-cn"
                    }
                }, [i("img", {
                    staticClass: "list-img",
                    attrs: {
                        src: n("+8rY")
                    }
                }), i("img", {
                    staticClass: "list-img activated",
                    attrs: {
                        src: n("8HwU")
                    }
                }), i("div", {
                    staticClass: "label"
                }, [e._v("Opera")]), i("div", {
                    staticClass: "vendor"
                }, [e._v("欧朋")])])])]), i("div", {
                    staticClass: "copyright"
                }, [i("span", [e._v("© 2019 哔哩哔哩漫画")]), i("br"), i("span", [e._v("# Carry Your World #")])])])
            }
        ), [], !1, null, "e423b1c2", null);
        t.a = h.exports
    },
    Ymyz: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return d
            }
        )),
            n.d(t, "b", (function() {
                    return M
                }
            ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("cDf5")
            , a = n.n(o)
            , s = n("1aRO")
            , c = function(e, t, n, i) {
            var r, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : a()(Reflect)) && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
            return o > 3 && s && Object.defineProperty(t, n, s),
                s
        }
            , u = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : a()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , l = function e() {
            r()(this, e),
                this.amount = 0,
                this.label = "--"
        };
        c([Object(s.a)("amount"), u("design:type", Number)], l.prototype, "amount", void 0),
            c([Object(s.a)("name"), u("design:type", String)], l.prototype, "label", void 0),
            l = c([Object(s.b)()], l);
        var d = function e() {
            r()(this, e),
                this.hasMobileNewbieGift = !1,
                this.hasPcNewbieGift = !1,
                this.moreAwardDetail = [],
                this.pcNewbieCouponAmount = 5
        };
        c([Object(s.a)("has_newbie_gift"), u("design:type", Boolean)], d.prototype, "hasMobileNewbieGift", void 0),
            c([Object(s.a)("has_pc_newbie_gift"), u("design:type", Boolean)], d.prototype, "hasPcNewbieGift", void 0),
            c([Object(s.a)({
                name: "coupons",
                type: l
            }), u("design:type", Array)], d.prototype, "moreAwardDetail", void 0),
            c([Object(s.a)("pc_newbie_coupon_amount"), u("design:type", Number)], d.prototype, "pcNewbieCouponAmount", void 0),
            d = c([Object(s.b)()], d);
        var M = function e() {
            r()(this, e),
                this.amount = 0
        };
        c([Object(s.a)("amount"), u("design:type", Number)], M.prototype, "amount", void 0),
            M = c([Object(s.b)()], M)
    },
    ZS4h: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return s
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "formatShortTitle",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "话";
                    return t && (t = "".concat(t, " ")),
                        /^(\d+|[\uFF10-\uFF19]+)$/.test(e) ? "".concat(t).concat(e, " ").concat(n) : e
                }
            }]),
                e
        }()
    },
    ZojZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return s
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "info",
                value: function() {
                    try {
                        for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        (e = console).log.apply(e, ["[Info]"].concat(n))
                    } catch (e) {}
                }
            }, {
                key: "warn",
                value: function() {
                    try {
                        for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        (e = console).warn.apply(e, ["[Warn]"].concat(n))
                    } catch (e) {}
                }
            }, {
                key: "error",
                value: function() {
                    try {
                        for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        (e = console).error.apply(e, ["[Error]"].concat(n))
                    } catch (e) {}
                }
            }]),
                e
        }()
    },
    "ZxM/": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return f
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("qQS4")
            , c = n("f91u")
            , u = n("CnmV")
            , l = n("rm82")
            , d = n("AMMt")
            , M = n("IdHk")
            , p = !1;
        function f() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function(t, n, i) {
                var o = t[n]
                    , M = "boolean" != typeof e.isShowQuickLoginPanel || e.isShowQuickLoginPanel
                    , f = e.callback;
                return {
                    enumerable: !0,
                    configurable: !0,
                    value: function() {
                        var e = a()(r.a.mark((function e() {
                                var t, n, i, a, y = this, g = arguments;
                                return r.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (t = this,
                                                        p) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    if (!M) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return d.a.info("请在登录后再进行操作喔 ".concat(s.happy())),
                                                        e.next = 6,
                                                        c.a.openQuickLoginPanel({
                                                            onSuccess: function() {
                                                                "function" == typeof f ? "function" == typeof f && f.call(y) : (u.a.refreshUserData(),
                                                                    l.a.refreshWalletData())
                                                            }
                                                        });
                                                case 6:
                                                case 7:
                                                    return e.abrupt("return", Object.create(null));
                                                case 8:
                                                    for (n = g.length,
                                                             i = new Array(n),
                                                             a = 0; a < n; a++)
                                                        i[a] = g[a];
                                                    return e.abrupt("return", o.call.apply(o, [t].concat(i)));
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, this)
                            }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }
            }
        }
        M.b.subscribe((function(e) {
                var t;
                p = !0 === (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.isLogin)
            }
        ))
    },
    aZbF: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return y
            }
        )),
            n.d(t, "b", (function() {
                    return i
                }
            ));
        var i, r = n("lwsE"), o = n.n(r), a = n("W8MJ"), s = n.n(a), c = n("cDf5"), u = n.n(c), l = n("1aRO"), d = n("ZS4h"), M = n("COaM"), p = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : u()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, f = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : u()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }, y = function() {
            function e() {
                o()(this, e),
                    this.id = "",
                    this.seasonId = 0,
                    this.title = "--",
                    this.status = i.ToBeOpened,
                    this.lastReadTime = "",
                    this.horizontalCover = "",
                    this.verticalCover = "",
                    this.squareCover = "",
                    this.lastReadEpisodeId = 0,
                    this.lastReadEpisodeOrder = 0,
                    this._lastReadEpisodeShortTitle = "--",
                    this._latestEpisodeShortTitle = "--",
                    this._type = M.i.comic,
                    this.episodeCount = 0
            }
            return s()(e, [{
                key: "lastReadEpisodeShortTitle",
                get: function() {
                    return this._lastReadEpisodeShortTitle
                }
            }, {
                key: "lastReadEpisodeShortTitleFormatted",
                get: function() {
                    return d.a.formatShortTitle(this._lastReadEpisodeShortTitle, "", this.type === M.i.video ? "集" : "话")
                }
            }, {
                key: "latestEpisodeShortTitle",
                get: function() {
                    return this._latestEpisodeShortTitle
                }
            }, {
                key: "latestEpisodeShortTitleFormatted",
                get: function() {
                    return d.a.formatShortTitle(this._latestEpisodeShortTitle, "", this.type === M.i.video ? "集" : "话")
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }]),
                e
        }();
        p([Object(l.a)(), f("design:type", String)], y.prototype, "id", void 0),
            p([Object(l.a)("comic_id"), f("design:type", Number)], y.prototype, "seasonId", void 0),
            p([Object(l.a)(), f("design:type", String)], y.prototype, "title", void 0),
            p([Object(l.a)(), f("design:type", Number)], y.prototype, "status", void 0),
            p([Object(l.a)("read_time"), f("design:type", String)], y.prototype, "lastReadTime", void 0),
            p([Object(l.a)("hcover"), f("design:type", String)], y.prototype, "horizontalCover", void 0),
            p([Object(l.a)("vcover"), f("design:type", String)], y.prototype, "verticalCover", void 0),
            p([Object(l.a)("scover"), f("design:type", String)], y.prototype, "squareCover", void 0),
            p([Object(l.a)("last_ep_id"), f("design:type", Number)], y.prototype, "lastReadEpisodeId", void 0),
            p([Object(l.a)("last_ord"), f("design:type", Number)], y.prototype, "lastReadEpisodeOrder", void 0),
            p([Object(l.a)("last_ep_short_title"), f("design:type", String)], y.prototype, "_lastReadEpisodeShortTitle", void 0),
            p([Object(l.a)("latest_ep_short_title"), f("design:type", String)], y.prototype, "_latestEpisodeShortTitle", void 0),
            p([Object(l.a)("type"), f("design:type", Number)], y.prototype, "_type", void 0),
            p([Object(l.a)("ord_count"), f("design:type", Number)], y.prototype, "episodeCount", void 0),
            y = p([Object(l.b)()], y),
            function(e) {
                e[e.ToBeOpened = 1] = "ToBeOpened",
                    e[e.OnShow = 2] = "OnShow",
                    e[e.Finished = 3] = "Finished",
                    e[e.Offline = 4] = "Offline"
            }(i || (i = {}))
    },
    blo6: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return y
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("ZojZ")
            , M = n("l6h4")
            , p = "page"
            , f = "episode_id"
            , y = function() {
            function e() {
                c()(this, e)
            }
            var t, n, i, o, s;
            return l()(e, null, [{
                key: "openDb",
                value: (s = a()(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0,
                                                    e.next = 3,
                                                    M.a.openDb({
                                                        dbName: "BilibiliManga:PageHistory",
                                                        dbVersion: 1,
                                                        onUpgradeNeeded: function(e) {
                                                            e.objectStoreNames.contains(p) || e.createObjectStore(p, {
                                                                keyPath: "episode_id"
                                                            }).createIndex("episode_id", f, {
                                                                unique: !0
                                                            })
                                                        }
                                                    });
                                            case 3:
                                                return e.abrupt("return", e.sent);
                                            case 6:
                                                throw e.prev = 6,
                                                    e.t0 = e.catch(0),
                                                    e.t0;
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[0, 6]])
                        }
                    ))),
                        function() {
                            return s.apply(this, arguments)
                        }
                )
            }, {
                key: "addRecord",
                value: (o = a()(r.a.mark((function e(t, n) {
                            var i, o, a, s, c, u, l;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return i = {
                                                    data: null,
                                                    error: null
                                                },
                                                    e.next = 3,
                                                    this.getRecord(t);
                                            case 3:
                                                if (o = e.sent,
                                                    a = o.data,
                                                    !(s = o.error)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return i.error = s,
                                                    e.abrupt("return", i);
                                            case 9:
                                                return e.prev = 9,
                                                    e.next = 12,
                                                    this.openDb();
                                            case 12:
                                                if (c = e.sent,
                                                    u = {
                                                        episode_id: t,
                                                        page: n
                                                    },
                                                    !a) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return l = a.episode_id,
                                                    e.next = 18,
                                                    M.a.removeValue(c, p, l);
                                            case 18:
                                                return e.next = 20,
                                                    M.a.addValue(c, p, u);
                                            case 20:
                                                e.next = 26;
                                                break;
                                            case 22:
                                                e.prev = 22,
                                                    e.t0 = e.catch(9),
                                                    d.a.error("设置页码记录失败:", e.t0),
                                                    i.error = e.t0;
                                            case 26:
                                                return e.abrupt("return", i);
                                            case 27:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[9, 22]])
                        }
                    ))),
                        function(e, t) {
                            return o.apply(this, arguments)
                        }
                )
            }, {
                key: "getRecord",
                value: (i = a()(r.a.mark((function e(t) {
                            var n, i;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null
                                                },
                                                    e.prev = 1,
                                                    e.next = 4,
                                                    this.openDb();
                                            case 4:
                                                return i = e.sent,
                                                    e.next = 7,
                                                    M.a.getValueByIndex(i, p, f, t);
                                            case 7:
                                                n.data = e.sent,
                                                    e.next = 14;
                                                break;
                                            case 10:
                                                e.prev = 10,
                                                    e.t0 = e.catch(1),
                                                    d.a.error("获取页码记录失败:", e.t0),
                                                    n.error = e.t0;
                                            case 14:
                                                return e.abrupt("return", n);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[1, 10]])
                        }
                    ))),
                        function(e) {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "removeHistory",
                value: (n = a()(r.a.mark((function e(t) {
                            var n, i;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = {
                                                    data: null,
                                                    error: null
                                                },
                                                    e.prev = 1,
                                                    e.next = 4,
                                                    this.openDb();
                                            case 4:
                                                return i = e.sent,
                                                    e.next = 7,
                                                    M.a.removeValue(i, p, t);
                                            case 7:
                                                e.next = 12;
                                                break;
                                            case 9:
                                                e.prev = 9,
                                                    e.t0 = e.catch(1),
                                                    n.error = e.t0;
                                            case 12:
                                                return e.abrupt("return", n);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this, [[1, 9]])
                        }
                    ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "getPageHistory",
                value: (t = a()(r.a.mark((function e(t) {
                            var n, i, o;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = 0,
                                                    e.next = 3,
                                                    this.getRecord(t);
                                            case 3:
                                                return i = e.sent,
                                                    o = i.data,
                                                !i.error && o && (n = o.page),
                                                    e.abrupt("return", n);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }()
    },
    d5oT: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+5oiR55qELei/vea8qzwvdGl0bGU+PHBhdGggZD0iTTEyLDE4LjQ4LDYuNDMsMjEuMjJhLjcuNywwLDAsMS0xLS43M2wuODgtNi4xNEwyLDkuOWEuNy43LDAsMCwxLC4zOC0xLjE4TDguNDksNy42NmwyLjg5LTUuNDlhLjcxLjcxLDAsMCwxLDEuMjQsMGwyLjg5LDUuNDksNi4xMiwxLjA2QS43LjcsMCwwLDEsMjIsOS45bC00LjMyLDQuNDUuODgsNi4xNGEuNy43LDAsMCwxLTEsLjczWm0tLjMxLTEuNDFhLjc1Ljc1LDAsMCwxLC42MiwwTDE3LDE5LjM4bC0uNzUtNS4xN2EuNy43LDAsMCwxLC4xOS0uNTlsMy42NC0zLjc1TDE0Ljk0LDlhLjY3LjY3LDAsMCwxLS41LS4zNkwxMiw0LDkuNTYsOC42MmEuNjcuNjcsMCwwLDEtLjUuMzZsLTUuMTQuODksMy42NCwzLjc1YS43LjcsMCwwLDEsLjE5LjU5TDcsMTkuMzhaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eTowLjg5OTk5OTk3NjE1ODE0MjE7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48L3N2Zz4K"
    },
    ewXD: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return c
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("ZojZ")
            , c = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "getScrollTop",
                value: function() {
                    try {
                        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
                    } catch (e) {
                        return s.a.warn("Failed to get scrollTop:", e),
                            0
                    }
                }
            }, {
                key: "scrollYWithAnimation",
                value: function(e) {
                    var t = this
                        , n = this.getScrollTop()
                        , i = n + .4 * (e - n)
                        , r = Math.abs(e - i) < 30
                        , o = i + window.innerHeight >= (document.documentElement.scrollHeight || document.body.scrollHeight);
                    (r || o) && (i = e),
                        window.scrollTo(0, i),
                    i !== e && requestAnimationFrame((function() {
                            return t.scrollYWithAnimation(e)
                        }
                    ))
                }
            }, {
                key: "scrollToTopWithAnimation",
                value: function() {
                    this.scrollYWithAnimation(0)
                }
            }, {
                key: "scrollTo",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        , n = t.x
                        , i = t.y
                        , r = isNaN(n) ? e.scrollLeft : n
                        , o = isNaN(i) ? e.scrollTop : i;
                    e.scrollTo ? e.scrollTo(r, o) : (e.scrollTop = o,
                        e.scrollLeft = r)
                }
            }]),
                e
        }()
    },
    f8jW: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return c
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "transformHttps",
                value: function(e) {
                    return e ? e.replace(/^\/\//, "https://") : ""
                }
            }]),
                e
        }()
            , c = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "setPageTitle",
                value: function(e) {
                    var t = document.querySelector("title");
                    t && (t.textContent = e)
                }
            }, {
                key: "setKeywords",
                value: function(e) {
                    var t = document.querySelector("meta[name=keywords]");
                    t && e && t.setAttribute("content", e)
                }
            }, {
                key: "setDescription",
                value: function(e) {
                    var t = document.querySelector("meta[name=description]");
                    t && e && t.setAttribute("content", e)
                }
            }, {
                key: "setOgMetaTags",
                value: function(e) {
                    var t = "https://i0.hdslb.com/bfs/static/manga/pc/img/og-image.jpg?ts=" + Date.now()
                        , n = {
                        "og:title": e.title || "哔哩哔哩漫画",
                        "og:type": e.type || "book",
                        "og:image": s.transformHttps(e.image || t),
                        "og:url": e.url,
                        "og:description": e.description,
                        "og:locale": e.locale || "zh_CN"
                    }
                        , i = document.querySelector("head");
                    Object.keys(n).forEach((function(e) {
                            var t = document.querySelector('meta[property="'.concat(e, '"]'));
                            t || (t = document.createElement("meta"),
                                i.appendChild(t)),
                                t.setAttribute("property", e),
                                t.setAttribute("content", n[e])
                        }
                    ))
                }
            }, {
                key: "setCanonical",
                value: function(e) {
                    e = e || window.location.origin + window.location.pathname;
                    var t = document.querySelector('link[rel="canonical"]');
                    t || ((t = document.createElement("link")).setAttribute("rel", "canonical"),
                        document.querySelector("head").appendChild(t));
                    t.setAttribute("href", e)
                }
            }, {
                key: "setAlternate",
                value: function(e) {
                    var t = document.querySelector('link[rel="alternate"]');
                    t || ((t = document.createElement("link")).setAttribute("rel", "alternate"),
                        t.setAttribute("media", "only screen and (max-width: 640px)"),
                        document.querySelector("head").appendChild(t));
                    t.setAttribute("href", e)
                }
            }]),
                e
        }()
    },
    f91u: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return y
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("qQS4")
            , M = n("pDEV")
            , p = n("AMMt")
            , f = n("ZojZ")
            , y = function() {
            function e() {
                c()(this, e)
            }
            var t;
            return l()(e, null, [{
                key: "openQuickLoginPanel",
                value: (t = a()(r.a.mark((function e() {
                            var t, n, i = arguments;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return t = i.length > 0 && void 0 !== i[0] ? i[0] : {},
                                                    e.prev = 1,
                                                    e.next = 4,
                                                    M.a();
                                            case 4:
                                                "success" === e.sent.status && "function" == typeof (n = null == t ? void 0 : t.onSuccess) && n(),
                                                    e.next = 12;
                                                break;
                                            case 8:
                                                e.prev = 8,
                                                    e.t0 = e.catch(1),
                                                    p.a.error("登录组件载入失败，请您稍后再次重试，非常抱歉 " + d.sad()),
                                                    f.a.error("快速登录弹窗载入失败:", e.t0);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[1, 8]])
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "goLoginPage",
                value: function() {
                    window.location.href = "https://passport.bilibili.com/login"
                }
            }]),
                e
        }()
    },
    fLv1: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return s
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("COaM")
            , a = n("B7eG")
            , s = function e() {
            r()(this, e)
        };
        s.IN_MEMORY_IMAGE_PREV = 5,
            s.IN_MEMORY_IMAGE_NEXT = 5,
            s.NEXT_IMAGE_LOAD_COUNT = 3,
            s.PREV_IMAGE_LOAD_COUNT = 3,
            s.LOAD_PREF_EPISODE_BEFORE = 1,
            s.LOAD_NEXT_EPISODE_BEFORE = 2,
            s.TOKEN_LIFE_TIME = 3e5,
            s.IMAGE_REQUEST_TIME_OUT = 15e3,
            s.DEFAULT_PAGING_MODE = o.g.Manga,
            s.DEFAULT_HORIZONTAL_MODE = a.a.DoublePage,
            s.LARGE_VIEWPORT_WIDTH_POINT = 1160,
            s.LARGE_IMAGE_WIDTH_RATIO = .5,
            s.MIDDLE_VIEWPORT_WIDTH_POINT = 900,
            s.MIDDLE_IMAGE_WIDTH_RATIO = .8
    },
    fqmh: function(e, t, n) {
        e.exports = n.p + "static/img/99e0a7fae4c4f.png"
    },
    gtSF: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAADiJJREFUaAXtWXtwVNUZ/+7dd3YT8tqAvA0BURQRiESEcVrGFv/oDKhMp6221VpbtS+pSmfUqWNbLTqlr5FqrVCHRx2p1toHVludjlNeCeHRBmgICZAQSAIJ2Wyym927e/v7vnPv3bubBGP/6PQPT3LvPY/vfb7zne+cJRqjaHZ/5u0VJqWypOHRb/27JgOZd1aYGX8peUouI8oSaUcOki4YaZMysTOUPtdEZKLHyJJXDWTJP22x6sxiJGWSwyO7fbnwYD76vbudflsG5ysj8T9/zCzSwW44Q+2dCZpx315N3//8kjtCU66mtC9Iw1qSpi5cIFj65dHAFhYxfeaQdGgeH7WuX9il/+yVo8UsTmjeKgpMXkxaWytVr2uc6H1iR0/8Czfto5mlATLB498dQ5sZdYRYzLNqgm9LkVej2IBBL+9sKWZk4eNGGNz5cTPk1cmMXqnG2DJsHvxrxw/T6a4EzfxGvebh7vbfLDPLQqhOvIpS7Q2UaPo9+acupvie58k/BRYsm0ilsR66bWFFQmxuJDOkGUyQKZoUqfuqAgYStzV+DJOGhsyDjg4nX1hiTq8Ikjl9LhFMIpOFl97WRmZfHzWfHdo897uH7maJRpTD31/wSOuzi7p2fWf+yhGDH7bDEclGbN261Iz4PZSBiwwOGXtq7t1zgz3GXwehecuN+2ZNCtZqmF7KmGTC2ez6s39qKlm36fyAg9DwwvVrFs4qeTUbipIWrnQUljk48U/xVP0z7wtxMeuC6uJXzYwmwDwPUmDhVEcDmdXXwKxEJzcsxpuU7+smkCfCnCip9nosDIPi9S8JgnRWXkYzygNSFQ6UZcFReOJQ4ntfhB5pqTN1s7SSTOjFRRCkodrSya/g7JutOgZaW2AEBSCrjr2y5ORhohnXiFsIVYxHrq8Wpno8TqfPD7PzOGbVsq/dlBVzzpovnSId+9DBRjLSWMb37xUrOfMAZE962zLDy+A8DxnolSHqi6WoYm2DG84S1fqsv7uy+PgPr3vv6A8WvJA/8j9qjSla/fNLbq8s9u2YWuknjwbjsxEQtkxoxuuJvcZEOxY3qC+e7q/+yt4yyIze/DKCQcvW5fumV/lrvTqGQMjMgnhVDaiqMCnoQgav3i7SLnYrsmB25kKSpt23jwFhXVXyGLRtX2ZOr4KHsXRFVcrPbUibaF7bboB/M+Ijzxsm7+jpxNr5jzb+mEclJnGldfuN5oxoUIAoOoc0f4S7nRjF68KO8Jn+Dho6uF1cP8Axi0vFJNJ6zpEOQcIB/ZOl0eSGvx4YSqmlgPGIT1fLF6o65iiQOnlsp9BKHP2jCltoMQibQZy7GusPWkR8Hrp19rQ3GdhhYGBzYt+UGMFYBcTDi79IRt8pCZ6EDcZ/2bWMr8wJWGBjG0wrfPg56DXzsDMHx39Vt7t6YqhOvKU4SlQ60WLCYCjCUFXz2yDMwxjXDjUK3PlYmqq+rRaPo8Hse/bccPJcYkDD/Gt93aS1InDZxU2c66CmJMMXbbPvIulYwmyeXhB/YFODikUAdTSwafHK/OySmtiUcj8QgC1+DyLRyWSGS2B7L+nJIaKus2QOxBUzxL90OkMdvanu6scOQPVcGcEgN0R0+JnFD5YEaENF2EdhP5RlZgwAxlnY+QKi2FAyazy8bX94RxOl3Lgf1cdtgUvOwRP3RyOfu2HOO17NrAsiVQngSSPYp5CSGZiD3phx56Jv1W+9FLexGGgnti3rLw97iyeEPVYEBRkJfrZnqYnu6BmmntjwmtqHDvx2NEYjGKy/+4riT98cjU2LBuDjGHYTZQrsuvwPDQQZnpVIGHS2b7i+5mv11xcyKWTgOf3KMmNKJYIeL00gE2cOkaocHrqFQwYrsv0YQgOAwDQDhqe6kvU138xn4kRTRmvbfmN2WjSkiDOhSVcR+cM8pIpNnFu8CZUyYwTJobhE0ZBPm7JqUVnTi+91HVEIrmB3eFPdg1MtycU0SCfz4o8Qt9Fc37IomeUI1fgLIopGi/07XKO5aFoc9G7gTUzsWznbIc65kqQ/gqW4GBfaZC/IxDoVXFkVLApkmGpqWYD2P3ntHTYTCXY8sdh/RQqRWs9tj0ycmWQutisc8Eg2/yXHwKJkzrpSJp2FLC/ybsljcMvSsvuKguDFExtxxSqXWRIgKsyzznZr01BfFoqdAo9PTGF18yfo1W7hsCsAAbVV5tmfk24r2Usef1thut/AFXdkAfHv90hLIMREHl27ilMQZR4Qk4K2xcXevdJdTbKreSKTLBgQZjAU3tH4n9sjNEimzTeUBlg86YRNV2Hab2yTw23vSyt4xUrVaxF3EGAeE1okUzkzigb98eHfZax01bzYBWQH0yZPwVkrnLrmxUK0ikjOdUaRxckMcviOsbqQE0XhSexq5vSrFXoOTlS3m4zEtGxBRPtzZ0nrOifZXmv38J6axxrlNCIaMGgikTHsOKN1wyVtahadvKbVYEZMnJs28diQQVsPtd/MaFwcBg+/tTvciy1QoOMXcU7oVxAuyqKutPkFTfHhmn7ogFR4vHfQ6HcfTx0GO3ZQCunG5jRPEDC1rtOkdZ5STOy3QxwSc1867RBnHJwiqPrRA5wEO0XgnBYqrRvruqaUeat8fHoXQfEKhEmrnERmsAhnlxRpMWjXeUa5KC8uED/TO0zbdp0uWfemOtDZNEcw4IFjP63dVBn23FWObEJszGsEDwc0e57s/SCDE2PHhWGa+eiBvKz6kgx4cM088j97b+1gkV/3luOwruNexGEGfoPYZDhtiSUya+c/eUgyaZuo+zuqBm4Aru96bP7KsrB3dcCrrYLERxLD5s6djR2/KDRHId5H7fFYYFxTMB5CnEKtnFe9FNdBCzxebRYy2Tk6gjQzwKnqiJHRmrHETgwNawff2t26y70Wx0N/LJj/SoE1a8j/+C11D0RCnmdwceENQdoQDmChgI4DryYBRL1UpJLlyhLAufmImEReOISLpwQuyMjUjNhg+pHv/aPhOY4lYwk6Vv+HUcBz7OWlL/p92l0lIR+VFHnIi32RdxcVT1Rwkm0R3Jgw12XpM3cXHDfdbQOhgEPwwFCGho3s5rlfr/8yIHJbliCM/vpABTiduX1FZYvfq1VFS/3kQ3Yt4QICsXBKSJYHbc4AA7iaxG5n4phFurW3I1nQsNWYqSFkgDHkPENAsAQqUIwz9+7+NKUNs3tH44ka+yZsdPGtiD7GoAaLvxTw6XdNrlCC56yrLK/5S8gsQXLhytHyaImQ/LLtZEuNLq5CKe08EsNB7G0MwwFb1SgFRZCs89a+ee7ahi+h24UsYPKyKed6UGMfX796WXdxyDOhvMTaDSyL89SbE6YiT8NhdlSSIOD02xVmY9XtrjyOaGBz1s6eElXdbtkbT/Nm0L/ul/VVo51hRyjA0eTzy+f0lRb5vKURuAEzlAeCw+JUCuEvVURAW0qX4Ixjdxfio9+G1DpPEg2oTEP6YLDYYIYuDhrGr3edLCuMXgyTV1q2LtsdCep17O85XwfvooIjlIWVf26AIL4iCi+6ExUXaRYcggw2biEzDf+3Ct+Py9243YGvCN3dSdoF3KBxsZTrwbqIJXGt/ND+vGtlJx1i2F3PLVzpwVG4ohiXmuwqeFgJglB55z8GHqOwgMMn3lOjIriqcp9b+EJ0FtxRGfctFEJAYOGZBjKiirCXb+XqOC1w4+YpMCEUWB1EPOfEhC8t7cyHwriWGq0w8VFKuqeZjJ4WZ8Q430Lp881O212xBRdd5WWNIr1T/JUh+ajEP4eUhfTVbvw8BXC4XSVnHhASzS2qphcH5sLCY1KcCvlwRWmXZOu7yC2T8nDdLr7KHAz3WSxURdrSgyChZiA3C6acxxAVV9m0+Ms5pFNwsjmCp8r2faHOo1nc8OvqktYBlkFn0qVbC5RQ4PLl6niFa4XksbcUuPWrQWDmciiEY5m7OPq7Nj2MS2Jt6cLrhwtveCyjNKxX3gwkkpmdHH8ZgZWQdcC7aQK/qggNm6JNQhG2W/z1TZxH3rIZ0pWJnyN+uHAfj+UVoCsTKOHhLM6wFsOGBzncITWF69xEytzpAKGSp8Dr77Zt5J1wEFu6+B90EVfqgxD4cSZXLEb8yfGUYRYoWPMJ57JZOnF05z4RtgCehZYdnQnZ9AxscJ0d4JlzZT4g8L3a601nNgpN65XvA+jc/5PaO8pLvFumVQRwJ41hmyjYmJPhv15rb3BTQZ0JiWzyUoN2n/1VALbVGZ6Fxxc4/OVi4qCnHT0Cw0F66bDu6vpSdH4gdeeip/61VQ2ot43n7qPDP8cNb5F3w5SyIHnsObIUMfmSvHSUqGQJ7gjroiizaLXdFh8hfHcX6ec6VX5l0eOruTMXU9Q/xtFsVAWYV8OPFq2pKPa9WoVUIhRABBYF8LK+fGtGuNiSNuBtQhZfJS4atkLqa1mc4S1A/mgQXIPgijY+1hpM4IjeHTOoJ45b0qebxndLqjg7b0/LxrrdAS/VTsLOjFskpu4IzQw13DVmJ1RAGcwKMlAR1BKOAW3/5i+3xV2QxFFPDx78KsGuwiQtugzFVj8Lqw8bZn3N4wd45x0ztWb4Dyz8C8VtC6v/hn2kNooZKcJdpQgCTMWYJbBIuQQpzF5FYVs5C84WnrH5gNM9kMZipfrX6ttXjOfQPS4FXBpq9U9dd1tFxLdJ18zi0iIvReBevHOzRkKMBSywqKOsHHDUOMPz9jCA6AL/pkzW7L8Qz9xT+/Th1ywIF9uxqx9WgTxKT6yJRj61YNqqCUHPA17drGNBeSfnYyVfYtouxy7BvxQbeHEoZAVh5T39ydRzfzjW9UZhhpnH5KPG/7kF/gNxNseLyZavIwAAAABJRU5ErkJggg=="
    },
    h3Yl: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return f
            }
        )),
            n.d(t, "b", (function() {
                    return i
                }
            ));
        var i, r = n("lwsE"), o = n.n(r), a = n("W8MJ"), s = n.n(a), c = n("cDf5"), u = n.n(c), l = n("1aRO"), d = n("COaM"), M = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : u()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, p = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : u()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }, f = function() {
            function e() {
                o()(this, e),
                    this.id = "0",
                    this.seasonId = 0,
                    this.title = "",
                    this.status = i.OnShow,
                    this.lastReadTime = "",
                    this.horizontalCover = "",
                    this.verticalCover = "",
                    this.squareCover = "",
                    this.lastReadEpisodeId = 0,
                    this.lastReadEpisodeOrder = 0,
                    this._lastReadEpisodeShortTitle = "",
                    this._latestEpisodeShortTitle = "",
                    this._type = d.i.comic,
                    this.episodeCount = 0
            }
            return s()(e, [{
                key: "lastReadEpisodeShortTitle",
                get: function() {
                    return /^\d+$/.test(this._lastReadEpisodeShortTitle) ? "".concat(this._lastReadEpisodeShortTitle, " 话") : this._lastReadEpisodeShortTitle
                }
            }, {
                key: "latestEpisodeShortTitle",
                get: function() {
                    return /^\d+$/.test(this._latestEpisodeShortTitle) ? "".concat(this._latestEpisodeShortTitle, " ").concat(this.type === d.i.video ? "集" : "话") : this._latestEpisodeShortTitle
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }]),
                e
        }();
        M([Object(l.a)("id"), p("design:type", String)], f.prototype, "id", void 0),
            M([Object(l.a)("comic_id"), p("design:type", Number)], f.prototype, "seasonId", void 0),
            M([Object(l.a)("title"), p("design:type", String)], f.prototype, "title", void 0),
            M([Object(l.a)("status"), p("design:type", Number)], f.prototype, "status", void 0),
            M([Object(l.a)("read_time"), p("design:type", String)], f.prototype, "lastReadTime", void 0),
            M([Object(l.a)("hcover"), p("design:type", String)], f.prototype, "horizontalCover", void 0),
            M([Object(l.a)("vcover"), p("design:type", String)], f.prototype, "verticalCover", void 0),
            M([Object(l.a)("scover"), p("design:type", String)], f.prototype, "squareCover", void 0),
            M([Object(l.a)("last_ep_id"), p("design:type", Number)], f.prototype, "lastReadEpisodeId", void 0),
            M([Object(l.a)("last_ord"), p("design:type", Number)], f.prototype, "lastReadEpisodeOrder", void 0),
            M([Object(l.a)("last_ep_short_title"), p("design:type", String)], f.prototype, "_lastReadEpisodeShortTitle", void 0),
            M([Object(l.a)("latest_ep_short_title"), p("design:type", String)], f.prototype, "_latestEpisodeShortTitle", void 0),
            M([Object(l.a)("type"), p("design:type", Number)], f.prototype, "_type", void 0),
            M([Object(l.a)("ord_count"), p("design:type", Number)], f.prototype, "episodeCount", void 0),
            f = M([Object(l.b)()], f),
            function(e) {
                e[e.Incoming = 1] = "Incoming",
                    e[e.OnShow = 2] = "OnShow",
                    e[e.Finished = 3] = "Finished",
                    e[e.Offline = 4] = "Offline"
            }(i || (i = {}))
    },
    hEH1: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
                return c
            }
        )),
            n.d(t, "a", (function() {
                    return u
                }
            ));
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("jXYe");
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var c = new o.a({
            baseReportConfigs: {
                eventReport: {
                    logId: "002558"
                },
                exposeReport: {
                    logId: "002558"
                },
                clickReport: {
                    logId: "002558"
                },
                pvReport: {
                    logId: "002557"
                }
            },
            debugMode: !1,
            disableReport: !1
        });
        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e.use(o.b, s(s({}, t), {}, {
                collectorInstance: c
            }))
        }
    },
    hTcJ: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICB3aWR0aD0iMzYwcHgiIGhlaWdodD0iMzYwcHgiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgIGZpbGw9Im5vbmUiCiAgICAgICAgZD0iTTAuMDAwLDAuMDAwIEwzNjAuMDAwLDAuMDAwIEwzNjAuMDAwLDM2MC4wMDAgTDAuMDAwLDM2MC4wMDAgTDAuMDAwLDAuMDAwIFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBmaWxsPSJyZ2IoMjU1LCA3NywgNTkpIgogICAgICAgIGQ9Ik0yMDguMDAwLDM1NS4wMDAgTDE1My4wMDAsMzU1LjAwMCBDMTUwLjIzOSwzNTUuMDAwIDE0OC4wMDAsMzUyLjc2MSAxNDguMDAwLDM1MC4wMDAgTDE0OC4wMDAsMjk1LjQwNiBDMTQ4LjAwMCwyOTIuNjQ1IDE1MC4yMzksMjkwLjQwNiAxNTMuMDAwLDI5MC40MDYgTDIwOC4wMDAsMjkwLjQwNiBDMjEwLjc2MSwyOTAuNDA2IDIxMy4wMDAsMjkyLjY0NSAyMTMuMDAwLDI5NS40MDYgTDIxMy4wMDAsMzUwLjAwMCBDMjEzLjAwMCwzNTIuNzYxIDIxMC43NjEsMzU1LjAwMCAyMDguMDAwLDM1NS4wMDAgWk0yMDguMDAwLDI1My40MjcgTDE1My4wMDAsMjUzLjQyNyBDMTUwLjIzOSwyNTMuNDI3IDE0OC4wMDAsMjUxLjE4OCAxNDguMDAwLDI0OC40MjcgTDE0OC4wMDAsMTAuMDAwIEMxNDguMDAwLDcuMjM5IDE1MC4yMzksNS4wMDAgMTUzLjAwMCw1LjAwMCBMMjA4LjAwMCw1LjAwMCBDMjEwLjc2MSw1LjAwMCAyMTMuMDAwLDcuMjM5IDIxMy4wMDAsMTAuMDAwIEwyMTMuMDAwLDI0OC40MjcgQzIxMy4wMDAsMjUxLjE4OCAyMTAuNzYxLDI1My40MjcgMjA4LjAwMCwyNTMuNDI3IFoiLz4KPC9zdmc+Cg=="
    },
    hnE4: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return p
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("3CEA")
            , c = n("1Wj6")
            , u = n("gtzJ")
            , l = n("5ZRF")
            , d = n("oCYn")
            , M = n("stNh")
            , p = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "init",
                value: function() {
                    M.a.isProduction && s.a({
                        dsn: M.a.sentryDSN,
                        release: "1.13.5",
                        environment: "production",
                        integrations: [new l.a({
                            Vue: d.default,
                            attachProps: !0,
                            logErrors: !0
                        })],
                        sampleRate: .1,
                        whitelistUrls: ["i0.hdslb.com/bfs/static/manga/pc/static/js"]
                    })
                }
            }, {
                key: "captureMessage",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.a.Info;
                    M.a.isProduction && u.c(e, t)
                }
            }, {
                key: "captureException",
                value: function(e) {
                    M.a.isProduction && u.b(e)
                }
            }, {
                key: "captureEvent",
                value: function(e) {
                    M.a.isProduction && u.a(e)
                }
            }]),
                e
        }()
    },
    hxfU: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return u
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("COaM")
            , c = n("91CG")
            , u = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "getSeasonData",
                value: function(e) {
                    return c.a.post({
                        url: "/twirp/comic.v1.Comic/ComicDetail",
                        type: s.c,
                        data: {
                            comic_id: e
                        }
                    })
                }
            }]),
                e
        }()
    },
    kHPA: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS4wNTQ2ODc1LDE0LjIyMjY1NjIgTDUuMDYyNSw3LjI3NzM0Mzc1IEM2LjM1Njc3MDgzLDUuNjM2NzE4NzUgNy45NjA5Mzc1LDQuMzQ3MDA1MjEgOS44NzUsMy40MDgyMDMxMiBDMTEuNzg5MDYyNSwyLjQ2OTQwMTA0IDEzLjgzMDcyOTIsMiAxNiwyIEMxOC41MTU2MjUsMiAyMC44NDQ0MDEsMi42MTk3OTE2NyAyMi45ODYzMjgxLDMuODU5Mzc1IEMyNS4xMjgyNTUyLDUuMDk4OTU4MzMgMjYuODE5MDEwNCw2Ljc2NjkyNzA4IDI4LjA1ODU5MzcsOC44NjMyODEyNSBMMTYuNjI4OTA2Miw4Ljg2MzI4MTI1IEMxNi40MjgzODU0LDguODQ1MDUyMDggMTYuMjE4NzUsOC44MzU5Mzc1IDE2LDguODM1OTM3NSBDMTQuMzU5Mzc1LDguODM1OTM3NSAxMi44OTE5MjcxLDkuMzQxNzk2ODggMTEuNTk3NjU2MiwxMC4zNTM1MTU2IEMxMC4zMDMzODU0LDExLjM2NTIzNDQgOS40NTU3MjkxNywxMi42NTQ5NDc5IDkuMDU0Njg3NSwxNC4yMjI2NTYyIFogTTIxLjAwMzkwNjIsMTAuODg2NzE4OCBMMjkuMDQyOTY4OCwxMC44ODY3MTg4IEMyOS42ODA5ODk2LDEyLjUyNzM0MzggMzAsMTQuMjMxNzcwOCAzMCwxNiBDMzAsMTcuODc3NjA0MiAyOS42MzU0MTY3LDE5LjY3NzczNDQgMjguOTA2MjUsMjEuNDAwMzkwNiBDMjguMTc3MDgzMywyMy4xMjMwNDY5IDI3LjE5NzI2NTYsMjQuNjA4NzI0IDI1Ljk2Njc5NjksMjUuODU3NDIxOSBDMjQuNzM2MzI4MSwyNy4xMDYxMTk4IDIzLjI2NDMyMjksMjguMTA0MTY2NyAyMS41NTA3ODEyLDI4Ljg1MTU2MjUgQzE5LjgzNzIzOTYsMjkuNTk4OTU4MyAxOC4wNDE2NjY3LDI5Ljk4MTc3MDggMTYuMTY0MDYyNSwzMCBMMjEuODc4OTA2MiwyMC4wNzQyMTg4IEMyMi43MzU2NzcxLDE4Ljg1Mjg2NDYgMjMuMTY0MDYyNSwxNy40OTQ3OTE3IDIzLjE2NDA2MjUsMTYgQzIzLjE2NDA2MjUsMTMuOTk0NzkxNyAyMi40NDQwMTA0LDEyLjI5MDM2NDYgMjEuMDAzOTA2MiwxMC44ODY3MTg4IFogTTEwLjkxNDA2MjUsMTYgQzEwLjkxNDA2MjUsMTQuNTk2MzU0MiAxMS40MTA4MDczLDEzLjM5Nzc4NjUgMTIuNDA0Mjk2OSwxMi40MDQyOTY5IEMxMy4zOTc3ODY1LDExLjQxMDgwNzMgMTQuNTk2MzU0MiwxMC45MTQwNjI1IDE2LDEwLjkxNDA2MjUgQzE3LjQwMzY0NTgsMTAuOTE0MDYyNSAxOC42MDIyMTM1LDExLjQxMDgwNzMgMTkuNTk1NzAzMSwxMi40MDQyOTY5IEMyMC41ODkxOTI3LDEzLjM5Nzc4NjUgMjEuMDg1OTM3NSwxNC41OTYzNTQyIDIxLjA4NTkzNzUsMTYgQzIxLjA4NTkzNzUsMTcuNDAzNjQ1OCAyMC41ODkxOTI3LDE4LjYwMjIxMzUgMTkuNTk1NzAzMSwxOS41OTU3MDMxIEMxOC42MDIyMTM1LDIwLjU4OTE5MjcgMTcuNDAzNjQ1OCwyMS4wODU5Mzc1IDE2LDIxLjA4NTkzNzUgQzE0LjU5NjM1NDIsMjEuMDg1OTM3NSAxMy4zOTc3ODY1LDIwLjU4OTE5MjcgMTIuNDA0Mjk2OSwxOS41OTU3MDMxIEMxMS40MTA4MDczLDE4LjYwMjIxMzUgMTAuOTE0MDYyNSwxNy40MDM2NDU4IDEwLjkxNDA2MjUsMTYgWiBNMTcuOTE0MDYyNSwyMi45MTc5Njg4IEwxMy45MjE4NzUsMjkuODM1OTM3NSBDMTEuNjk3OTE2NywyOS41MDc4MTI1IDkuNjc0NDc5MTcsMjguNjk2NjE0NiA3Ljg1MTU2MjUsMjcuNDAyMzQzOCBDNi4wMjg2NDU4MywyNi4xMDgwNzI5IDQuNTk3NjU2MjUsMjQuNDU4MzMzMyAzLjU1ODU5Mzc1LDIyLjQ1MzEyNSBDMi41MTk1MzEyNSwyMC40NDc5MTY3IDIsMTguMjk2ODc1IDIsMTYgQzIsMTMuNTM5MDYyNSAyLjYwMTU2MjUsMTEuMjUxMzAyMSAzLjgwNDY4NzUsOS4xMzY3MTg3NSBMOS41MTk1MzEyNSwxOS4wMzUxNTYyIEMxMC4xMDI4NjQ2LDIwLjI3NDczOTYgMTAuOTc3ODY0NiwyMS4yNzI3ODY1IDEyLjE0NDUzMTMsMjIuMDI5Mjk2OSBDMTMuMzExMTk3OSwyMi43ODU4MDczIDE0LjU5NjM1NDIsMjMuMTY0MDYyNSAxNiwyMy4xNjQwNjI1IEMxNi42NTYyNSwyMy4xNjQwNjI1IDE3LjI5NDI3MDgsMjMuMDgyMDMxMiAxNy45MTQwNjI1LDIyLjkxNzk2ODggWiIvPgogIDwvZz4KPC9zdmc+Cg=="
    },
    l6h4: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return l
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("ZojZ")
            , c = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
            , u = !!c
            , l = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "openDb",
                value: function(e) {
                    return new Promise((function(t, n) {
                            var i = e.dbVersion
                                , r = e.dbName
                                , o = e.onUpgradeNeeded;
                            if (!u)
                                return n(new Error("IndexDb is not supported."));
                            var a = c.open(r, i);
                            a.onsuccess = function() {
                                var e = a.result;
                                t(e)
                            }
                                ,
                                a.onerror = function(e) {
                                    var t = e.target.error || new Error("Failed to open IndexDb.");
                                    s.a.error("Failed to open IndexDb:", t),
                                        n(t)
                                }
                                ,
                                a.onupgradeneeded = function(e) {
                                    var n = e.target.result;
                                    "function" == typeof o && o(n),
                                        e.target.transaction.oncomplete = function() {
                                            t(n)
                                        }
                                }
                        }
                    ))
                }
            }, {
                key: "addValue",
                value: function(e, t, n) {
                    return new Promise((function(i, r) {
                            var o = e.transaction(t, "readwrite").objectStore(t).add(n);
                            o.onsuccess = function() {
                                i()
                            }
                                ,
                                o.onerror = function(e) {
                                    var n = e.target.error || new Error("Unknown error");
                                    s.a.error("Failed to add value to IndexDb [".concat(t, "]:"), n),
                                        r(n)
                                }
                        }
                    ))
                }
            }, {
                key: "getValueByIndex",
                value: function(e, t, n, i) {
                    return new Promise((function(r, o) {
                            var a = e.transaction(t).objectStore(t).index(n).get(i);
                            a.onsuccess = function(e) {
                                var t = e.target.result;
                                r(t || null)
                            }
                                ,
                                a.onerror = function(e) {
                                    var t = e.target.error || new Error("Unknown error");
                                    s.a.error("Failed to get value from IndexDb:", t),
                                        o(t)
                                }
                        }
                    ))
                }
            }, {
                key: "removeValue",
                value: function(e, t, n) {
                    return new Promise((function(i, r) {
                            var o = e.transaction(t, "readwrite").objectStore(t).delete(n);
                            o.onsuccess = function() {
                                i()
                            }
                                ,
                                o.onerror = function(e) {
                                    var t = e.target.error || new Error("Unknown error");
                                    s.a.error("Failed to remove value from IndexDb:", t),
                                        r(t)
                                }
                        }
                    ))
                }
            }]),
                e
        }()
    },
    ll70: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAABACAYAAACtK6/LAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQTc3MEZGMENERkIxMUU5OUREMkI3NTZFMzUyMThBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQTc3MEZFRkNERkIxMUU5OUREMkI3NTZFMzUyMThBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0Y5RTczN0NEN0QxMUU5QjlGMUI3QUM1QjVCODU1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0Y5RTczOENEN0QxMUU5QjlGMUI3QUM1QjVCODU1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr630EAAAADySURBVHja7NvNDYIwGIdxMA5h4hjM4SIeHcSjiziHY5i4Ra0XEkKhJR60fZ7/kXD5vS/9CtCHEDpqdh044qnZF9wz1Aw8nS+P1PX77Wrnv6rgvyZ2dnDMixcvXrx48eLFi3dvX39KziJ2fuNpqYauO+bFi4fh49x0IHf+mCtA64/9agEIY36xAJQJL1kA0mw/KwBtqZsUgLjOjwVwkwPLMx58XkT8CKfhJ3ASfgan4JNwAn4R3jp+Fd40Pgd3kyNePC+bX1qUvhCw8z/M5zu83Ld4jnnx4sWLFy9evHjxxINNyT8rdr6i9P5LK148Km8BBgBPXkHCny6JkwAAAABJRU5ErkJggg=="
    },
    nVpw: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return T
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("h3Yl")
            , M = n("cDf5")
            , p = n.n(M)
            , f = n("1aRO")
            , y = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , g = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , A = function e() {
            c()(this, e),
                this.status = 0
        };
        y([Object(f.a)(), g("design:type", Number)], A.prototype, "status", void 0),
            A = y([Object(f.b)()], A);
        var D = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , h = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : p()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , N = function e() {
            c()(this, e),
                this.newFavNum = 0,
                this.hadFollowOffcial = !1
        };
        D([Object(f.a)("new_fav_num"), h("design:type", Number)], N.prototype, "newFavNum", void 0),
            D([Object(f.a)("had_follow_offcial"), h("design:type", Boolean)], N.prototype, "hadFollowOffcial", void 0),
            N = D([Object(f.b)()], N);
        var j = n("ZojZ")
            , v = n("91CG")
            , w = n("9ljz")
            , I = n("TRC1")
            , T = function() {
            function e() {
                c()(this, e)
            }
            var t;
            return l()(e, null, [{
                key: "getFavouriteManga",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                        , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.a.FavouriteDesc
                        , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return v.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/ListFavorite",
                        data: {
                            page_num: e,
                            page_size: t,
                            order: n,
                            wait_free: i ? 1 : 0
                        },
                        type: d.a
                    })
                }
            }, {
                key: "addFavourite",
                value: function(e) {
                    return v.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/AddFavorite",
                        data: {
                            comic_ids: e.join(",")
                        }
                    })
                }
            }, {
                key: "hasFavourite",
                value: function(e) {
                    return v.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/HasFavorite",
                        data: {
                            comic_id: e
                        }
                    })
                }
            }, {
                key: "removeFavourite",
                value: (t = a()(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    v.a.post({
                                                        url: "/twirp/bookshelf.v1.Bookshelf/DeleteFavorite",
                                                        data: {
                                                            comic_ids: t.slice(0, this.MaxRemovableCount).join(",")
                                                        }
                                                    });
                                            case 2:
                                                return (n = e.sent).error && j.a.error("追漫记录删除失败:", n.error),
                                                    e.abrupt("return", n);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "getInitInfo",
                value: function() {
                    return v.a.post({
                        url: "/twirp/user.v1.User/GetInitInfo",
                        type: N
                    })
                }
            }, {
                key: "followOffcial",
                value: function() {
                    return v.a.post({
                        url: "/twirp/user.v1.User/FollowOffcial",
                        type: A
                    })
                }
            }, {
                key: "getFavListOrder",
                value: function() {
                    return parseInt(w.a.getItem(this.favOrderStorageKey))
                }
            }, {
                key: "setFavListOrder",
                value: function(e) {
                    w.a.setItem(this.favOrderStorageKey, e.toString())
                }
            }]),
                e
        }();
        T.MaxRemovableCount = 20,
            T.favOrderStorageKey = "BilibiliManga:favListOrder"
    },
    "oD+a": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAAGqBAMAAABg4TVWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURefn57i4uMPDw9jY2M7OzuDg4EBvMYIAAAX2SURBVHja7ZrLkqo6GIVpgXmDOjeIc7zNBXWOqO//Kid/wiXa2ufswY6cqu+rsuzG7qrlf8tKIAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/QjwmLcXPS/sR6QvD89OV2zkoxqPvEIQnJ17xLjvLxbEwqbWmKs1Ox+12e6qyJNcXguNo9C3bqFWJJs2Oda96FDSHl10bLUbSvPmbD/Lxhe+Byyg6JJz9+Sc+Kd9HqRxBBTbTX0KbfryFo9cS4swsKM2nMxyq16vYJElW8r5ZfVTeNXtTfCppBVbnD6qr0tfRi81CkhhpN+/LXHzdnjSVyve/qdOY4MZbz04r0q/7fXt/o36X9KTdxcK3vrex3alkbPrCIZIP6pJk+h++0V/Q9zTx1snshbo0y0/dH978utHiaQTaUXJz1OXHh+9w/KC+jR0l10FdenpeUr4/pu/2WHCi7vhjwQv92oSvVl8VhNUPdXa52C3dwTzx6wMvNkBNkhlJy4uWpVx1MqAPgf6k+0J+9a2NvrgNWBFofdNmUHe1u6RrtwLrL+R3J1zaKWODZ1ez71glMyP71qV81i9wwdqvvqzXp4NnG2TR+kBnAub2uvlCfvXpaRzf66DUMZLgpWUbpyZxm3kzxK/06qLjaSyNsZQAakFHqb+683y2JvVP6WRYf5VXfdG3rb1DaTMc6ncz5brC24viuej7/oS+r4WkUvesVqCLTuzUrLX0SZJVYgrWuvK++vQGymv9mW5UUnxtAWqpkR51X8YxR62+g/xafEJf1gZrpjtEKi2/nrZ6upikH3SWZ8FVOkbnOGnz6rV/Q2Pq9Lybmoil2rwbx1xLTL+lCk2fFDqGSfABfRM706KskIgtu+3GtJaszvoBKPrSfz9h+DvlF+9OJ3mT/ugdTN64RqEok862BmuP/iWedaNOB0UdrP1LjaRVb071x7Wj77Lwnd6oHb7WlS7t6Psu7Ww2lSj6uu3HxKM/bdcqkVJY+1clB6tvfhHHstZTRfQpZ3s099e98/58JSnNalFERp+EK5IGvlh98po/tLxH72cTLB2qZO7lyiy3aSwhmyRnmTfBsLy1NeulO7pK1/rmkW7fMmk7RFIcyJhuu9jV1zoyD+x6kyB2VKU6m9IhmQ6jsjOvmzZx7/4k6r6qr18IJrnZmG+lBvP9bWk6ZjEZ9kmhq+/L0wLi+CSlndXE7onsdkgvdvPwUV+/bEQH3/pi8Vai4WhnYKrbWBef/JRv6yZJI1df7GlAX119ulfVrI43rSuVKzrJdst2PTeDvfJ3wDEcBJjdZXArhg2RLLjFeuaesg36Jp4aZNNlWFI7vbTSzD59oX9bxEZc1l53ysFTg0QrR9+itHagXht9E8n49ZQNHsZpJ18OsJu00roHSWJe2I3RTN7Sx9Mi5/98HUE3i0GftgD5vloaryC78+ezokFf7O0mQ7eUyplQoM5iTtNuI14+n2X1/3Ty6K+Kzl/Ng230cNB8cQ93XX0bj/uPdvvxFLKi3wDr+Xzc12aLOXtuKn8JDtvodLdizNGaXOyf4mgGe5p5PT4o21DZON66jC5rmdmOUd50+hq/p7vmpn13SyFU7smuStxC2x08m7/+eEi7l9yeoT60bKpWv410b8dr+tUdXJhbC84heZq/3RF4o5dgo7dybzK8uN+69CwvqLoGUP093uBaGROY/4yVL2v6M2G6N9J8iFd8f5nIxre8P7xb4P8hsf9wN0i7rKy9RXgYnz6d+EweAMh0Ofoypm7F/8t6cEv6Ntkdr8HY9EWJa/bu/vWFv+Y3Vv4r7knBrwLWq+DTtPrCXaacpznbiyN4pM60pJxNplmVZXaP1Iev+Ly+2vjS/Hjvhp0S92fDNw/GQKhyN07xTrXGoKnHIC/66QN2ykyV1Sii96rG4s3yzSdjITwGYTBq9nUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACj5B/3ItHYlt0IsAAAAABJRU5ErkJggg=="
    },
    pfP6: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHRpZmY6T3JpZW50YXRpb249IjEiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTMxVDE4OjUzOjUzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOC0wOVQxMTozMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOC0wOVQxMTozMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFhOTUyYi01NDYwLWExNDMtYmQxYi02NzAxZmIwZGEzZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZDFhYTk1MmItNTQ2MC1hMTQzLWJkMWItNjcwMWZiMGRhM2Y4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDFhYTk1MmItNTQ2MC1hMTQzLWJkMWItNjcwMWZiMGRhM2Y4Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDFhYTk1MmItNTQ2MC1hMTQzLWJkMWItNjcwMWZiMGRhM2Y4IiBzdEV2dDp3aGVuPSIyMDE5LTA4LTA5VDExOjMwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PsdGcQAABypJREFUeNrt3euPXGUdwPH+O8w5M7MDWKRLqb0gVmqBSjRAGo00ELQxpAqmhEsbTbm0KCQYSymk3Mql4UWJSGwTjISQgIQAgRBf6BvuIEa8oIDyc+bZ7na2e5vLmZmz3c8m3z9gT36feZ5z5sw5yyJimbRUcxAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIA0KgCNRuPJsbGx0GBbdsKfYzL4WrO9IAAHCoCTOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCQAABAAAAgAAAQAAAIAAAEAgAAAQAAAIAAAEAAACAAABAAAAgAAAQCAAABAAAAgAAAQAAAIAAAEAAACAAAAAAAAAAAAAMBxBwAAAQCAAABAAAAgAAAYVvV6ve8A0KIDUMTgLyYMAAAw8OEvMwQAABja8JcRAgAAjARAWSAAAMDIhr8MEAAAoBQARgUBAAC6GtDqaWdEtv1w5Nc/FdV1F0WtVlvUEAAAoKvBzH9wV9Tv+3uMHfw0qvs/iOxnz0S+dtOihQAAAF0NZLZlT9Tv/0ec+likEoS734/sp7+PfPUFUa1WB4IBAADKsQX60orI974VjUe/mELQDiHf+XRkq74xBaFoDAAAMFIArYHOtuyO+oGPpwGYsSLsOBr5qg3TIBSJAQAAhg5gcojzeiPyO/8cjUf+NyuCBOGh/0R133uR3XgkspVfLy0EAADoGkBaBS7aFrV7/zongBkQrn8qsrPWlw4CAAB0Pfytqq2V4LZXo/Hw5wsimA7hN5GfdW5pIAAAQE8A0lZo/eao7f+wIwBTEB789wSEa5+IbPyckUMAAIDeVoDm4OZ5nr4HaJ34doPgOIR3J75UG183sqtGAADQM4BW2dnnpU/0bgHMgPCTxyNfsXboEAAAoC8ArVWg0hzesQc/6RnBBIRPEoT8mkORn7lmINui2SAAAEBfANIqsPzsyPe+PePLsZ4h3PVO5D9+JPIvrx74+QEAAPR0GbQdQFoFrvzltFskCoOw7aHIz1hVKAQAAOh7FWgHkFaBsdMi/9Wb83451hOEB/51DMIDkS9fWRgEAAAodBuUVoFLrov6gb8VCqAdQmublV11X1TbIAAAQGm2QVm1Fvkdf2yuAv8dCILWOcYUhB/e01wRxnuGAAAAhQNIq8DGy6N270cDAdAOoX7/PycgbN0X+eln9owAAAAKuxyaVoEsi+zWFwe2CswO4a3Ivr83avUxAAAowSqweUfaqgwawDQIBz5Ol04BAGBkV4OmVoFtB9PNb8MCMPk7hOzmF7raCgEAQE8I5j0RPn28sC/FOvr0b261Wrdl57e/ke4yBQCAkQFI+/8fPTyU7c+0wb9wa1Rr9a6vCAEAQN8A2hFUVpyT7ucZ/OB/FNkvXo/s/CsjP+F2agAAGAmAtP258cjA9v6tH960Bj//+WtR2XhFGvxJeAAAMPItULZmU/ox/MAG/7ZXo7LhssiOnWhXAQCgLFeB0qf/Tc9H4+BnxQ7+PX+JbM8rUTnve+n8YvIqEwAAlApA1hzQ1rAWOfj5npej8rXvzBj8E4cfAABG+kVYXq2lE9JOfxw/5+A3V4/0ib/7paicuzkqlcqMwS9y+AEAoJhP/w4fjzLv4O//MPJb/tAc/EvnHPxOhh8AAIb7bKBqPfI7/9TTbwAmBz+75YWofPXiNPizbXcGNfwAAND3jXDZd3fN+YjEBQe/edJ8yrpvdz34RQ0/AAD0BSA7dfnEL8A6vOWhNfjpceq7novKum8VNvj9DD8AAPS+/dm6r6PfAB9/j8Czccqab867xx/G4AMAQN+f/q0fqS90w1v7CzQqqy+c99O+28Ev8ofxAADQFYB05eeaQ3M+B6j9hRllHHxPhQCgLwDpCc+z3PA2Nfg7fxeVr5xfysH3YCwA+gew/XB6nOG0pz43B7+y42h6M0xZB3+uxyMCAEB3L8fY+XTa/qRneh57E0y2akPXQz/qwQcAgN4ANE+Asxt+G9nVj6Y3v8w34GUefAAA6Pv9AIt58AEAoG8AnSCYb+jL8AZJAADo6YuwfvOSPC06AEUg8JpULWoAvSLwomydNAA6RVDmN8QDAEBfAIbVoP93AABYkoMPAAClBDDs4w4AAEty8AEAoBQIRn3cAQBgJADKctwBAGCoCMp23AEAYCgIynrcAQBgYBAWw3EHAIAlHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhIAAAgAAAQAAAIAAAEAgAAAQAAAIAAAEAAACAAABAAAAgAAAQCAAABAAAAgAAAQAAAIAAAEAAACoMwAGo3Gkw4UACdpv14QgLSUchAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIA0pP4PB538DmjUqPUAAAAASUVORK5CYII="
    },
    qcRv: function(e, t, n) {},
    r4XI: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABACAYAAAAUPymDAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNzZGMUIwNkNFMDAxMUU5QkJFQ0JFOEFBMUI1MzIzQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNzZGMUIwNUNFMDAxMUU5QkJFQ0JFOEFBMUI1MzIzQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OEM1ODJGOENEODAxMUU5ODU1MEEwMTA1NzM5MDFEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OEM1ODJGOUNEODAxMUU5ODU1MEEwMTA1NzM5MDFEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsD0CQ4AAAEZSURBVHja7N29EYJAFEZRdejBxC6sg0YIKcTQRqzDLkysAjV3ZHEG5VvODTWC41t+RnE7DMNGme3sAniCpyk1H9472j3/r+3667vXL+eTyat18j7Ka96ekzW68pk8JyyCJ3jwBE/wBA+e4M3b6w5FyV2K5JrCHRGxMW3Xr2rymrVsaNoHsOSesmOeY57gCR48wdPXZ8d7eLkdxgDhBQPCCwaEFwwILxgQXjAgvGBAeC7S9cNubdff4QXDwQuGgxcMBy8YDl4wHLxgOHgLbgwOnot0wdPkir4xvbavkVeFV8kJgGVTv6nkV07wLJuLXCarf3KTyYMneIIHT/AET/DgaSGN3mGp/SlCJk9/aeu/hEye4AneSnoIMACI7Uv5w3fEzAAAAABJRU5ErkJggg=="
    },
    "rNO/": function(e, t, n) {
        "use strict";
        var i = n("ZojZ");
        !function() {
            try {
                void 0 === window.DocumentTouch && (window.DocumentTouch = HTMLDocument)
            } catch (e) {
                i.a.error("Failed to apply Perfect Scrollbar polyfill:", e)
            }
        }()
    },
    rVBG: function(e, t, n) {
        "use strict";
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("7W2i")
            , c = n.n(s)
            , u = n("a1gu")
            , l = n.n(u)
            , d = n("Nsbk")
            , M = n.n(d)
            , p = n("cDf5")
            , f = n.n(p)
            , y = n("+B0l")
            , g = n("1iKj")
            , A = n("XGqN")
            , D = n("COaM")
            , h = n("XrP9");
        function N(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = M()(e);
                if (t) {
                    var r = M()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return l()(this, n)
            }
        }
        var j = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , v = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : f()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , w = function(e) {
            c()(n, e);
            var t = N(n);
            function n() {
                return r()(this, n),
                    t.apply(this, arguments)
            }
            return a()(n, [{
                key: "onEpisodeAvailabilityChange",
                value: function() {
                    this.report()
                }
            }, {
                key: "onmouseenter",
                value: function() {
                    this.$emit("mouseenter")
                }
            }, {
                key: "onmouseleave",
                value: function() {
                    this.$emit("mouseleave")
                }
            }, {
                key: "report",
                value: function() {
                    this.$emit("status-update", this.episodeAvailability)
                }
            }, {
                key: "mounted",
                value: function() {
                    this.report()
                }
            }, {
                key: "endDate",
                get: function() {
                    return h.a.convertServerDateToDate(this.episodeData.unlockUntil)
                }
            }, {
                key: "isFree",
                get: function() {
                    return this.episodeData.payMode === A.d.Free
                }
            }, {
                key: "isUnlocked",
                get: function() {
                    return !this.episodeData.isLocked && this.episodeData.unlockType !== A.e.WaitFree && this.episodeData.unlockType !== A.e.LimitedFree
                }
            }, {
                key: "isWaitFreeUnlocked",
                get: function() {
                    return this.episodeData.unlockType === A.e.WaitFree
                }
            }, {
                key: "isLimitedFreeCouponUnlocked",
                get: function() {
                    return this.episodeData.unlockType === A.e.LimitedFree
                }
            }, {
                key: "isLimitedFreeOtherUnlocked",
                get: function() {
                    return this.seasonData.discountType === D.d.FreeForLimit || this.episodeData.isInFree
                }
            }, {
                key: "isWaitFreeAvail",
                get: function() {
                    return this.episodeData.allowWaitFree
                }
            }, {
                key: "isPayForNewAvail",
                get: function() {
                    return this.seasonData.payForNewAvail
                }
            }, {
                key: "episodeAvailability",
                get: function() {
                    return this.isFree ? A.b.Free : this.isUnlocked ? A.b.PermUnlocked : this.isWaitFreeUnlocked ? A.b.WaitFreeUnlocked : this.isLimitedFreeCouponUnlocked ? A.b.LimitedFreeCouponUnlocked : this.isLimitedFreeOtherUnlocked ? A.b.LimitedFreeOtherUnlocked : this.isWaitFreeAvail ? A.b.WaitFreeAvail : this.isPayForNewAvail ? A.b.PayForNew : A.b.Locked
                }
            }]),
                n
        }(n("oCYn").default);
        j([Object(y.d)({
            type: D.c,
            default: function() {
                return new D.c
            }
        }), v("design:type", D.c)], w.prototype, "seasonData", void 0),
            j([Object(y.d)({
                type: A.a,
                default: function() {
                    return new A.a
                }
            }), v("design:type", A.a)], w.prototype, "episodeData", void 0),
            j([Object(y.d)({
                type: Boolean,
                default: !1
            }), v("design:type", Boolean)], w.prototype, "isShowingCountdown", void 0),
            j([Object(y.d)({
                type: Boolean,
                default: !1
            }), v("design:type", Boolean)], w.prototype, "useWhiteBackground", void 0),
            j([Object(y.g)("episodeAvailability"), v("design:type", Function), v("design:paramtypes", []), v("design:returntype", void 0)], w.prototype, "onEpisodeAvailabilityChange", null);
        var I = w = j([Object(y.b)({
            components: {
                Countdown: g.a
            }
        })], w)
            , T = n("KHd+")
            , m = Object(T.a)(I, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", [1 === e.episodeAvailability ? n("div", {
                    staticClass: "tag lock-icon unlocked"
                }) : e._e(), 2 === e.episodeAvailability ? n("Countdown", {
                    attrs: {
                        "end-date": e.endDate,
                        format: "剩余 H 小时 MM 分",
                        interval: 1e3
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [n("div", {
                                staticClass: "tag text wait-free",
                                class: {
                                    activated: e.isShowingCountdown,
                                    white: e.useWhiteBackground
                                },
                                on: {
                                    mouseenter: e.onmouseenter,
                                    mouseleave: e.onmouseleave
                                }
                            }, [e._v(e._s(e.isShowingCountdown ? t.countdownStr : "等免中"))])]
                        }
                    }], null, !1, 2105951417)
                }) : e._e(), 3 === e.episodeAvailability ? n("Countdown", {
                    attrs: {
                        "end-date": e.endDate,
                        format: "剩余 H 小时 MM 分",
                        interval: 1e3
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [n("div", {
                                on: {
                                    mouseenter: e.onmouseenter,
                                    mouseleave: e.onmouseleave
                                }
                            }, [e.isShowingCountdown ? n("div", {
                                staticClass: "tag text limit-free",
                                class: {
                                    activated: e.isShowingCountdown,
                                    white: e.useWhiteBackground
                                }
                            }, [e._v(e._s(t.countdownStr))]) : n("div", {
                                staticClass: "tag limit-free-icon"
                            })])]
                        }
                    }], null, !1, 771980189)
                }) : e._e(), 4 === e.episodeAvailability ? n("div", {
                    staticClass: "tag limit-free-icon"
                }) : e._e(), 5 === e.episodeAvailability ? n("div", {
                    staticClass: "tag wait-free-icon"
                }) : e._e(), 6 === e.episodeAvailability ? n("div", {
                    staticClass: "tag lock-icon locked"
                }) : e._e(), 7 === e.episodeAvailability ? n("div", {
                    staticClass: "tag pay-for-new-icon"
                }) : e._e()], 1)
            }
        ), [], !1, null, "7617b800", null);
        t.a = m.exports
    },
    rcyk: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return c
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("sp85")
            , c = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "execWindowOpen",
                value: function(e, t) {
                    (t = "boolean" != typeof t || t) ? window.open(e) : window.location.href = e
                }
            }, {
                key: "goToClassifyPage",
                value: function(e) {
                    var t = e.openInNewWindow
                        , n = e.query
                        , i = s.a.classify(n);
                    this.execWindowOpen(i, t)
                }
            }, {
                key: "goToDetailPage",
                value: function(e) {
                    var t = e.seasonId
                        , n = e.openInNewWindow
                        , i = e.query
                        , r = s.a.detailPage(t, i);
                    this.execWindowOpen(r, n)
                }
            }, {
                key: "goToReadPage",
                value: function(e) {
                    var t = e.seasonId
                        , n = e.episodeId
                        , i = e.openInNewWindow
                        , r = e.query
                        , o = s.a.readerPage(t, n, r);
                    this.execWindowOpen(o, i)
                }
            }, {
                key: "goToSearchPage",
                value: function(e) {
                    var t = e.keyword
                        , n = e.openInNewWindow
                        , i = e.query
                        , r = s.a.searchPage(t, i);
                    this.execWindowOpen(r, n)
                }
            }, {
                key: "goAccountCenter",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , t = s.a.accountCenter({
                        query: e.query
                    });
                    this.execWindowOpen(t, e.openInNewWindow)
                }
            }, {
                key: "goAppDownloadPage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , t = s.a.appDownloadPage(e.query);
                    this.execWindowOpen(t, e.openInNewWindow)
                }
            }]),
                e
        }()
    },
    reI8: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return i
            }
        )),
            n.d(t, "b", (function() {
                    return a
                }
            ));
        var i, r = n("lwsE"), o = n.n(r), a = function e() {
            o()(this, e)
        };
        a.Home = "/",
            a.Classify = "/classify",
            a.Detail = "/detail/mc",
            a.Reader = "/mc",
            a.Search = "/search",
            a.AccountCenter = "/account-center",
            a.Ranking = "/ranking",
            a.Updates = "/updates",
            a.AppDownload = "/app-download",
            function(e) {
                e.None = "",
                    e.MyCouponPage = "my-coupon",
                    e.MyLimitFreeCouponPage = "my-limited-free-coupons",
                    e.MyDiscountCardPage = "my-discount-cards"
            }(i || (i = {}))
    },
    rm82: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return v
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("cDf5")
            , M = n.n(d)
            , p = n("qQS4")
            , f = n("ZxM/")
            , y = n("+r91")
            , g = n("AMMt")
            , A = n("91CG")
            , D = n("ZojZ")
            , h = n("GdVg")
            , N = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , j = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , v = function() {
            function e() {
                c()(this, e)
            }
            var t;
            return l()(e, null, [{
                key: "getUserWalletInfo",
                value: function() {
                    return A.a.post({
                        url: "/twirp/user.v1.User/GetWallet",
                        type: y.a
                    })
                }
            }, {
                key: "refreshWalletData",
                value: (t = a()(r.a.mark((function e() {
                            var t, n, i;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    this.getUserWalletInfo();
                                            case 2:
                                                if (t = e.sent,
                                                    n = t.data,
                                                    !(i = t.error)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return g.a.error("钱包数据刷新失败，可能会影响您的使用，请稍后尝试刷新页面，非常抱歉 " + p.sad()),
                                                    D.a.error("钱包数据刷新失败:", i),
                                                    e.abrupt("return");
                                            case 9:
                                                h.a.next((function() {
                                                        return n
                                                    }
                                                ));
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function() {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }();
        N([Object(f.a)({
            isShowQuickLoginPanel: !1
        }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], v, "getUserWalletInfo", null),
            N([Object(f.a)({
                isShowQuickLoginPanel: !1
            }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], v, "refreshWalletData", null)
    },
    skQq: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
                return s
            }
        )),
            n.d(t, "a", (function() {
                    return a
                }
            ));
        var i = n("26FU")
            , r = n("dC0D")
            , o = {
            theme: n("E7aQ").a.Light
        }
            , a = new i.a((function(e) {
                return e
            }
        ))
            , s = a.pipe(Object(r.a)((function(e, t) {
                return t(e)
            }
        ), o))
    },
    sp85: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return y
            }
        ));
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("lwsE")
            , a = n.n(o)
            , s = n("W8MJ")
            , c = n.n(s)
            , u = n("Qyje")
            , l = n.n(u)
            , d = n("reI8")
            , M = n("+J0b");
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var y = function() {
            function e() {
                a()(this, e)
            }
            return c()(e, null, [{
                key: "home",
                value: function(e) {
                    return d.b.Home + this.createQueryString(e)
                }
            }, {
                key: "classify",
                value: function(e) {
                    var t = this.createQueryString(e);
                    return t ? d.b.Classify + t : d.b.Classify
                }
            }, {
                key: "detailPage",
                value: function(e, t) {
                    return d.b.Detail + e + this.createQueryString(t)
                }
            }, {
                key: "readerPage",
                value: function(e, t, n) {
                    return d.b.Reader + e + "/" + t + this.createQueryString(n)
                }
            }, {
                key: "searchPage",
                value: function(e, t) {
                    return d.b.Search + this.createQueryString(f(f({}, t), {}, {
                        keyword: e
                    }))
                }
            }, {
                key: "accountCenter",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , t = e.query
                        , n = e.subPage;
                    return n || (n = d.a.None),
                    "".concat(d.b.AccountCenter, "/").concat(n) + this.createQueryString(t)
                }
            }, {
                key: "rechargePage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.accountCenter({
                        query: f(f({}, e), {}, {
                            show_recharge: "true"
                        })
                    })
                }
            }, {
                key: "ranking",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.a.POPULARITY_JAPAN
                        , t = arguments.length > 1 ? arguments[1] : void 0
                        , n = this.createQueryString(t);
                    return d.b.Ranking + "/" + e + n
                }
            }, {
                key: "appDownloadPage",
                value: function(e) {
                    var t = this.createQueryString(e);
                    return d.b.AppDownload + t
                }
            }, {
                key: "createQueryString",
                value: function(e) {
                    var t = l.a.stringify(e);
                    return t ? "?" + t : ""
                }
            }]),
                e
        }()
    },
    stNh: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return o
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = function e() {
            r()(this, e)
        };
        o.isDev = !1,
            o.isProduction = !0,
            o.sentryDSN = "http".concat("s", "://a1670f938ee14192b5b27a8727150377@api.bilibili.com/x/traceback/57"),
            o.isUatBuild = !1
    },
    t5Pa: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return s
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "checkIsOldBrowser",
                value: function() {
                    var e = navigator.userAgent;
                    return /MSIE \d/.test(e)
                }
            }]),
                e
        }()
    },
    uS9E: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
                return D
            }
        )),
            n.d(t, "b", (function() {
                    return v
                }
            )),
            n.d(t, "a", (function() {
                    return N
                }
            )),
            n.d(t, "d", (function() {
                    return i
                }
            )),
            n.d(t, "c", (function() {
                    return h
                }
            ));
        var i, r = n("lwsE"), o = n.n(r), a = n("W8MJ"), s = n.n(a), c = n("cDf5"), u = n.n(c), l = n("1aRO"), d = n("es5R"), M = n("XGqN"), p = n("COaM"), f = n("XrP9"), y = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : u()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }, g = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : u()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        };
        !function(e) {
            e[e.Episode20 = 20] = "Episode20",
                e[e.Episode50 = 50] = "Episode50",
                e[e.TheRestEpisodes = 0] = "TheRestEpisodes"
        }(i || (i = {}));
        var A = function() {
            function e() {
                o()(this, e),
                    this.batchLimit = 0,
                    this.amount = 0,
                    this.originalGold = 0,
                    this.payGold = 0,
                    this.discountType = 0,
                    this.discount = 0,
                    this.discountBatchGold = 0,
                    this.usable = !1
            }
            return s()(e, [{
                key: "discountStr",
                get: function() {
                    return (this.discount / 10).toFixed(1) + " 折"
                }
            }]),
                e
        }();
        y([Object(l.a)("batch_limit"), g("design:type", Number)], A.prototype, "batchLimit", void 0),
            y([Object(l.a)("amount"), g("design:type", Number)], A.prototype, "amount", void 0),
            y([Object(l.a)("original_gold"), g("design:type", Number)], A.prototype, "originalGold", void 0),
            y([Object(l.a)("pay_gold"), g("design:type", Number)], A.prototype, "payGold", void 0),
            y([Object(l.a)("discount_type"), g("design:type", Number)], A.prototype, "discountType", void 0),
            y([Object(l.a)("discount"), g("design:type", Number)], A.prototype, "discount", void 0),
            y([Object(l.a)("discount_batch_gold"), g("design:type", Number)], A.prototype, "discountBatchGold", void 0),
            y([Object(l.a)("usable"), g("design:type", Boolean)], A.prototype, "usable", void 0),
            A = y([Object(l.b)()], A);
        var D = function() {
            function e() {
                o()(this, e),
                    this.remainCoupon = 0,
                    this.remainGold = 0,
                    this.recommendCouponId = 0,
                    this.recommendLimitedFreeCouponId = 0,
                    this.remainLockedEpisodeCount = 0,
                    this.autoPayGoldStatus = d.a.False,
                    this.autoPayCouponsStatus = d.a.False,
                    this.seasonId = 0,
                    this.isLocked = !0,
                    this.isAllowCoupons = !1,
                    this.seasonDiscountType = p.d.None,
                    this.seasonDiscount = 0,
                    this.seasonOriginalGold = 0,
                    this.seasonPayGold = 0,
                    this.episodeDiscountType = M.c.None,
                    this.episodeDiscount = 0,
                    this.episodeOriginalGold = 0,
                    this.episodePayGold = 0,
                    this.batchBuy = [],
                    this.allowItem = !1,
                    this.remainItem = 0,
                    this._firstImageUrl = "",
                    this._firstImageToken = "",
                    this.allowWaitFree = !1,
                    this._waitFreeAt = "",
                    this.recommendDiscountId = 0,
                    this.recommendDiscount = 0,
                    this.remainDiscountCard = 0,
                    this.discountEpGold = 0,
                    this.discountRemainGold = 0
            }
            return s()(e, [{
                key: "firstImageUrl",
                get: function() {
                    return this._firstImageToken && this._firstImageUrl ? "".concat(this._firstImageUrl, "?token=").concat(this._firstImageToken) : ""
                }
            }, {
                key: "waitFreeAt",
                get: function() {
                    return f.a.convertServerDateToDate(this._waitFreeAt)
                }
            }]),
                e
        }();
        y([Object(l.a)("remain_coupon"), g("design:type", Number)], D.prototype, "remainCoupon", void 0),
            y([Object(l.a)("remain_gold"), g("design:type", Number)], D.prototype, "remainGold", void 0),
            y([Object(l.a)("recommend_coupon_id"), g("design:type", Number)], D.prototype, "recommendCouponId", void 0),
            y([Object(l.a)("recommend_item_id"), g("design:type", Number)], D.prototype, "recommendLimitedFreeCouponId", void 0),
            y([Object(l.a)("remain_lock_ep_num"), g("design:type", Number)], D.prototype, "remainLockedEpisodeCount", void 0),
            y([Object(l.a)("auto_pay_gold_status"), g("design:type", Number)], D.prototype, "autoPayGoldStatus", void 0),
            y([Object(l.a)("auto_pay_coupons_status"), g("design:type", Number)], D.prototype, "autoPayCouponsStatus", void 0),
            y([Object(l.a)("comic_id"), g("design:type", Number)], D.prototype, "seasonId", void 0),
            y([Object(l.a)("is_locked"), g("design:type", Boolean)], D.prototype, "isLocked", void 0),
            y([Object(l.a)("allow_coupon"), g("design:type", Boolean)], D.prototype, "isAllowCoupons", void 0),
            y([Object(l.a)("discount_type"), g("design:type", Number)], D.prototype, "seasonDiscountType", void 0),
            y([Object(l.a)("discount"), g("design:type", Number)], D.prototype, "seasonDiscount", void 0),
            y([Object(l.a)("original_gold"), g("design:type", Number)], D.prototype, "seasonOriginalGold", void 0),
            y([Object(l.a)("remain_lock_ep_gold"), g("design:type", Number)], D.prototype, "seasonPayGold", void 0),
            y([Object(l.a)("ep_discount_type"), g("design:type", Number)], D.prototype, "episodeDiscountType", void 0),
            y([Object(l.a)("ep_discount"), g("design:type", Number)], D.prototype, "episodeDiscount", void 0),
            y([Object(l.a)("ep_original_gold"), g("design:type", Number)], D.prototype, "episodeOriginalGold", void 0),
            y([Object(l.a)("pay_gold"), g("design:type", Number)], D.prototype, "episodePayGold", void 0),
            y([Object(l.a)({
                name: "batch_buy",
                type: A
            }), g("design:type", Array)], D.prototype, "batchBuy", void 0),
            y([Object(l.a)("allow_item"), g("design:type", Boolean)], D.prototype, "allowItem", void 0),
            y([Object(l.a)("remain_item"), g("design:type", Number)], D.prototype, "remainItem", void 0),
            y([Object(l.a)("first_image_url"), g("design:type", String)], D.prototype, "_firstImageUrl", void 0),
            y([Object(l.a)("first_image_token"), g("design:type", String)], D.prototype, "_firstImageToken", void 0),
            y([Object(l.a)("allow_wait_free"), g("design:type", Boolean)], D.prototype, "allowWaitFree", void 0),
            y([Object(l.a)("wait_free_at"), g("design:type", String)], D.prototype, "_waitFreeAt", void 0),
            y([Object(l.a)("recommend_discount_id"), g("design:type", Number)], D.prototype, "recommendDiscountId", void 0),
            y([Object(l.a)("recommend_discount"), g("design:type", Number)], D.prototype, "recommendDiscount", void 0),
            y([Object(l.a)("remain_discount_card"), g("design:type", Number)], D.prototype, "remainDiscountCard", void 0),
            y([Object(l.a)("discount_ep_gold"), g("design:type", Number)], D.prototype, "discountEpGold", void 0),
            y([Object(l.a)("discount_remain_gold"), g("design:type", Number)], D.prototype, "discountRemainGold", void 0),
            D = y([Object(l.b)()], D);
        var h, N, j, v = function() {
            function e() {
                o()(this, e),
                    this.id = 0,
                    this.comicId = 0,
                    this.comicTitle = "",
                    this.hCover = "",
                    this.sCover = "",
                    this.vCover = "",
                    this.boughtEpCount = 0,
                    this.goldStatus = 0,
                    this.couponStatus = 0,
                    this.comicStatus = h.Ordinary,
                    this.lastOrd = 0,
                    this.cTime = "",
                    this.lastShortTitle = "",
                    this.purchaseType = j.Unknown,
                    this._type = p.i.comic
            }
            return s()(e, [{
                key: "purchasedCountLabel",
                get: function() {
                    return this.purchaseType === j.InVolume ? "".concat(this.boughtEpCount, " 卷") : "".concat(this.boughtEpCount, " ").concat(this.type === p.i.video ? "集" : "话")
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }]),
                e
        }();
        y([Object(l.a)("id"), g("design:type", Number)], v.prototype, "id", void 0),
            y([Object(l.a)("comic_id"), g("design:type", Number)], v.prototype, "comicId", void 0),
            y([Object(l.a)("comic_title"), g("design:type", String)], v.prototype, "comicTitle", void 0),
            y([Object(l.a)("hcover"), g("design:type", String)], v.prototype, "hCover", void 0),
            y([Object(l.a)("scover"), g("design:type", String)], v.prototype, "sCover", void 0),
            y([Object(l.a)("vcover"), g("design:type", String)], v.prototype, "vCover", void 0),
            y([Object(l.a)("bought_ep_count"), g("design:type", Number)], v.prototype, "boughtEpCount", void 0),
            y([Object(l.a)("gold_status"), g("design:type", Number)], v.prototype, "goldStatus", void 0),
            y([Object(l.a)("coupon_status"), g("design:type", Number)], v.prototype, "couponStatus", void 0),
            y([Object(l.a)("comic_status"), g("design:type", Number)], v.prototype, "comicStatus", void 0),
            y([Object(l.a)("last_ord"), g("design:type", Number)], v.prototype, "lastOrd", void 0),
            y([Object(l.a)("ctime"), g("design:type", String)], v.prototype, "cTime", void 0),
            y([Object(l.a)("last_short_title"), g("design:type", String)], v.prototype, "lastShortTitle", void 0),
            y([Object(l.a)("buy_type"), g("design:type", Number)], v.prototype, "purchaseType", void 0),
            y([Object(l.a)("type"), g("design:type", Number)], v.prototype, "_type", void 0),
            v = y([Object(l.b)()], v),
            function(e) {
                e[e.Offline = -1] = "Offline",
                    e[e.Ordinary = 0] = "Ordinary",
                    e[e.Deleted = 1] = "Deleted",
                    e[e.Release = 2] = "Release"
            }(h || (h = {})),
            function(e) {
                e[e.couponPrior = 1] = "couponPrior",
                    e[e.closeAutoPurchase = 2] = "closeAutoPurchase",
                    e[e.glodPrior = 3] = "glodPrior"
            }(N || (N = {})),
            function(e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.InVolume = 9] = "InVolume"
            }(j || (j = {}))
    },
    vXCh: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return D
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("cDf5")
            , M = n.n(d)
            , p = n("1aRO")
            , f = n("COaM")
            , y = n("91CG")
            , g = function(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
                a
        }
            , A = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
            , D = function() {
            function e() {
                c()(this, e)
            }
            var t;
            return l()(e, null, [{
                key: "searchManga",
                value: (t = a()(r.a.mark((function e(t) {
                            var n, i, o = arguments;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = o.length > 1 && void 0 !== o[1] ? o[1] : 1,
                                                    i = o.length > 2 && void 0 !== o[2] ? o[2] : 10,
                                                    e.abrupt("return", y.a.post({
                                                        url: "/twirp/comic.v1.Comic/Search",
                                                        data: {
                                                            key_word: t,
                                                            page_num: n,
                                                            page_size: i
                                                        },
                                                        type: h
                                                    }));
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }, {
                key: "getSearchSuggestion",
                value: function(e, t) {
                    return y.a.post({
                        url: "/twirp/comic.v1.Comic/SearchSug",
                        data: {
                            term: e,
                            num: t
                        }
                    })
                }
            }, {
                key: "getSearchPlaceHolder",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                    return y.a.post({
                        url: "/twirp/comic.v1.Comic/Recommend",
                        data: {
                            JsonData: JSON.stringify([{
                                pool_id: 100002,
                                num: e
                            }])
                        },
                        type: f.c
                    })
                }
            }]),
                e
        }()
            , h = function e() {
            c()(this, e)
        };
        g([Object(p.a)({
            name: "list",
            type: f.c
        }), A("design:type", Array)], h.prototype, "list", void 0),
            g([Object(p.a)("total_page"), A("design:type", Number)], h.prototype, "totalPage", void 0),
            h = g([Object(p.b)()], h)
    },
    wLAv: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return c
            }
        ));
        var i = n("lwsE")
            , r = n.n(i)
            , o = n("W8MJ")
            , a = n.n(o)
            , s = n("hEH1")
            , c = function() {
            function e() {
                r()(this, e)
            }
            return a()(e, null, [{
                key: "sendEvent",
                value: function(e) {
                    var t = e.spmId
                        , n = e.msg
                        , i = e.logId
                        , r = e.event;
                    s.b.sendEvent({
                        reportConfig: {
                            spmId: t,
                            logId: i
                        },
                        msg: n,
                        event: r
                    })
                }
            }, {
                key: "sendPv",
                value: function(e) {
                    var t = e.spmId
                        , n = e.logId;
                    s.b.sendPv({
                        spmId: t,
                        logId: n
                    })
                }
            }, {
                key: "triggerExposeReport",
                value: function() {
                    s.b.triggerExposeReport()
                }
            }]),
                e
        }()
    },
    wahp: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
                return d
            }
        )),
            n.d(t, "a", (function() {
                    return l
                }
            ));
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("26FU")
            , a = n("dC0D");
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var u = c(c({}, new (n("Ymyz").a)), {}, {
            isFirstLoadFinished: !1,
            isInLoad: !1,
            isLoadFailed: !1
        })
            , l = new o.a((function(e) {
                return e
            }
        ))
            , d = l.pipe(Object(a.a)((function(e, t) {
                return t(e)
            }
        ), u))
    },
    xaVA: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS4wNTQ2ODc1LDE0LjIyMjY1NjIgTDUuMDYyNSw3LjI3NzM0Mzc1IEM2LjM1Njc3MDgzLDUuNjM2NzE4NzUgNy45NjA5Mzc1LDQuMzQ3MDA1MjEgOS44NzUsMy40MDgyMDMxMiBDMTEuNzg5MDYyNSwyLjQ2OTQwMTA0IDEzLjgzMDcyOTIsMiAxNiwyIEMxOC41MTU2MjUsMiAyMC44NDQ0MDEsMi42MTk3OTE2NyAyMi45ODYzMjgxLDMuODU5Mzc1IEMyNS4xMjgyNTUyLDUuMDk4OTU4MzMgMjYuODE5MDEwNCw2Ljc2NjkyNzA4IDI4LjA1ODU5MzcsOC44NjMyODEyNSBMMTYuNjI4OTA2Miw4Ljg2MzI4MTI1IEMxNi40MjgzODU0LDguODQ1MDUyMDggMTYuMjE4NzUsOC44MzU5Mzc1IDE2LDguODM1OTM3NSBDMTQuMzU5Mzc1LDguODM1OTM3NSAxMi44OTE5MjcxLDkuMzQxNzk2ODggMTEuNTk3NjU2MiwxMC4zNTM1MTU2IEMxMC4zMDMzODU0LDExLjM2NTIzNDQgOS40NTU3MjkxNywxMi42NTQ5NDc5IDkuMDU0Njg3NSwxNC4yMjI2NTYyIFogTTIxLjAwMzkwNjIsMTAuODg2NzE4OCBMMjkuMDQyOTY4OCwxMC44ODY3MTg4IEMyOS42ODA5ODk2LDEyLjUyNzM0MzggMzAsMTQuMjMxNzcwOCAzMCwxNiBDMzAsMTcuODc3NjA0MiAyOS42MzU0MTY3LDE5LjY3NzczNDQgMjguOTA2MjUsMjEuNDAwMzkwNiBDMjguMTc3MDgzMywyMy4xMjMwNDY5IDI3LjE5NzI2NTYsMjQuNjA4NzI0IDI1Ljk2Njc5NjksMjUuODU3NDIxOSBDMjQuNzM2MzI4MSwyNy4xMDYxMTk4IDIzLjI2NDMyMjksMjguMTA0MTY2NyAyMS41NTA3ODEyLDI4Ljg1MTU2MjUgQzE5LjgzNzIzOTYsMjkuNTk4OTU4MyAxOC4wNDE2NjY3LDI5Ljk4MTc3MDggMTYuMTY0MDYyNSwzMCBMMjEuODc4OTA2MiwyMC4wNzQyMTg4IEMyMi43MzU2NzcxLDE4Ljg1Mjg2NDYgMjMuMTY0MDYyNSwxNy40OTQ3OTE3IDIzLjE2NDA2MjUsMTYgQzIzLjE2NDA2MjUsMTMuOTk0NzkxNyAyMi40NDQwMTA0LDEyLjI5MDM2NDYgMjEuMDAzOTA2MiwxMC44ODY3MTg4IFogTTEwLjkxNDA2MjUsMTYgQzEwLjkxNDA2MjUsMTQuNTk2MzU0MiAxMS40MTA4MDczLDEzLjM5Nzc4NjUgMTIuNDA0Mjk2OSwxMi40MDQyOTY5IEMxMy4zOTc3ODY1LDExLjQxMDgwNzMgMTQuNTk2MzU0MiwxMC45MTQwNjI1IDE2LDEwLjkxNDA2MjUgQzE3LjQwMzY0NTgsMTAuOTE0MDYyNSAxOC42MDIyMTM1LDExLjQxMDgwNzMgMTkuNTk1NzAzMSwxMi40MDQyOTY5IEMyMC41ODkxOTI3LDEzLjM5Nzc4NjUgMjEuMDg1OTM3NSwxNC41OTYzNTQyIDIxLjA4NTkzNzUsMTYgQzIxLjA4NTkzNzUsMTcuNDAzNjQ1OCAyMC41ODkxOTI3LDE4LjYwMjIxMzUgMTkuNTk1NzAzMSwxOS41OTU3MDMxIEMxOC42MDIyMTM1LDIwLjU4OTE5MjcgMTcuNDAzNjQ1OCwyMS4wODU5Mzc1IDE2LDIxLjA4NTkzNzUgQzE0LjU5NjM1NDIsMjEuMDg1OTM3NSAxMy4zOTc3ODY1LDIwLjU4OTE5MjcgMTIuNDA0Mjk2OSwxOS41OTU3MDMxIEMxMS40MTA4MDczLDE4LjYwMjIxMzUgMTAuOTE0MDYyNSwxNy40MDM2NDU4IDEwLjkxNDA2MjUsMTYgWiBNMTcuOTE0MDYyNSwyMi45MTc5Njg4IEwxMy45MjE4NzUsMjkuODM1OTM3NSBDMTEuNjk3OTE2NywyOS41MDc4MTI1IDkuNjc0NDc5MTcsMjguNjk2NjE0NiA3Ljg1MTU2MjUsMjcuNDAyMzQzOCBDNi4wMjg2NDU4MywyNi4xMDgwNzI5IDQuNTk3NjU2MjUsMjQuNDU4MzMzMyAzLjU1ODU5Mzc1LDIyLjQ1MzEyNSBDMi41MTk1MzEyNSwyMC40NDc5MTY3IDIsMTguMjk2ODc1IDIsMTYgQzIsMTMuNTM5MDYyNSAyLjYwMTU2MjUsMTEuMjUxMzAyMSAzLjgwNDY4NzUsOS4xMzY3MTg3NSBMOS41MTk1MzEyNSwxOS4wMzUxNTYyIEMxMC4xMDI4NjQ2LDIwLjI3NDczOTYgMTAuOTc3ODY0NiwyMS4yNzI3ODY1IDEyLjE0NDUzMTMsMjIuMDI5Mjk2OSBDMTMuMzExMTk3OSwyMi43ODU4MDczIDE0LjU5NjM1NDIsMjMuMTY0MDYyNSAxNiwyMy4xNjQwNjI1IEMxNi42NTYyNSwyMy4xNjQwNjI1IDE3LjI5NDI3MDgsMjMuMDgyMDMxMiAxNy45MTQwNjI1LDIyLjkxNzk2ODggWiIvPgogIDwvZz4KPC9zdmc+Cg=="
    },
    yH7B: function(e, t, n) {
        "use strict";
        var i, r, o;
        n.d(t, "c", (function() {
                return i
            }
        )),
            n.d(t, "b", (function() {
                    return o
                }
            )),
            n.d(t, "a", (function() {
                    return r
                }
            )),
            function(e) {
                e[e.Success = 0] = "Success",
                    e[e.NoEnoughCoupon = 1] = "NoEnoughCoupon",
                    e[e.NoEnoughGold = 2] = "NoEnoughGold",
                    e[e.AutoPurchaseSettingHasBeenChanged = 3] = "AutoPurchaseSettingHasBeenChanged",
                    e[e.PayAmountMayChanged = 4] = "PayAmountMayChanged",
                    e[e.CanNotPurchaseViaCoupon = 5] = "CanNotPurchaseViaCoupon"
            }(i || (i = {})),
            function(e) {
                e[e.On = 1] = "On",
                    e[e.Off = 2] = "Off"
            }(r || (r = {})),
            function(e) {
                e[e.ByLimitedFreeCard = -1] = "ByLimitedFreeCard",
                    e[e.AutoPurchase = 1] = "AutoPurchase",
                    e[e.ByCoupons = 2] = "ByCoupons",
                    e[e.ByGold = 3] = "ByGold",
                    e[e.ByWaitFreeChance = 4] = "ByWaitFreeChance"
            }(o || (o = {}))
    },
    yhYn: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return D
            }
        ));
        var i = n("lSNA")
            , r = n.n(i)
            , o = n("lwsE")
            , a = n.n(o)
            , s = n("W8MJ")
            , c = n.n(s)
            , u = n("ZcLj")
            , l = n("E7aQ")
            , d = n("9ljz")
            , M = n("skQq");
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var y = "theme-"
            , g = "BilibiliManga:Theme"
            , A = l.a.Light
            , D = function() {
            function e() {
                a()(this, e)
            }
            return c()(e, null, [{
                key: "switchTheme",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if ("server" !== Object({
                        APP_NAME: "哔哩哔哩漫画",
                        AUTHOR: "LancerComet",
                        NODE_ENV: "production",
                        THEME_COLOR: "#fb7299",
                        VERSION: "1.13.5",
                        BILI_ENV: void 0
                    }).VUE_ENV) {
                        var n = document.querySelector("html");
                        u.b.removeClass(n, y + A),
                            u.b.addClass(n, y + e),
                            A = e,
                            M.a.next((function(t) {
                                    return f(f({}, t), {}, {
                                        theme: e
                                    })
                                }
                            )),
                        t && d.a.setItem(g, e)
                    }
                }
            }, {
                key: "switchToStoredTheme",
                value: function() {
                    var e = d.a.getItem(g);
                    e && this.switchTheme(e)
                }
            }, {
                key: "attachFunctionToGlobal",
                value: function() {
                    var e = this;
                    window.switchToTheme = function(t) {
                        e.switchTheme(t)
                    }
                }
            }]),
                e
        }()
    },
    ys8D: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+bmF2X2Nsb3NlX2ljbzwvdGl0bGU+PHBhdGggZD0iTTEyLDEwLjg3bDUuNDMtNS40NGEuODEuODEsMCwwLDEsMS4xNCwxLjE0TDEzLjEzLDEybDUuNDQsNS40M2EuODEuODEsMCwwLDEtMS4xNCwxLjE0TDEyLDEzLjEzLDYuNTcsMTguNTdhLjgxLjgxLDAsMCwxLTEuMTQtMS4xNEwxMC44NywxMiw1LjQzLDYuNTdBLjgxLjgxLDAsMCwxLDYuNTcsNS40M1oiIHN0eWxlPSJmaWxsOiM2YzcyN2UiLz48L3N2Zz4="
    },
    yyZF: function(e, t, n) {},
    z8gV: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return f
            }
        ));
        var i = n("o0o1")
            , r = n.n(i)
            , o = n("yXPU")
            , a = n.n(o)
            , s = n("lwsE")
            , c = n.n(s)
            , u = n("W8MJ")
            , l = n.n(u)
            , d = n("aZbF")
            , M = n("91CG")
            , p = n("ZojZ")
            , f = function() {
            function e() {
                c()(this, e)
            }
            var t;
            return l()(e, null, [{
                key: "getReadHistory",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                        , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return M.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/ListHistory",
                        data: {
                            page_num: e,
                            page_size: t
                        },
                        type: d.a
                    })
                }
            }, {
                key: "setReadHistory",
                value: function(e, t) {
                    return M.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/AddHistory",
                        data: {
                            comic_id: e,
                            ep_id: t
                        }
                    })
                }
            }, {
                key: "removeReadHistory",
                value: (t = a()(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    M.a.post({
                                                        url: "/twirp/bookshelf.v1.Bookshelf/DeleteHistory",
                                                        data: {
                                                            comic_ids: t.slice(0, this.MaxRemovableCount).join(",")
                                                        }
                                                    });
                                            case 2:
                                                return (n = e.sent).error && p.a.error("阅读记录删除失败:", n.error),
                                                    e.abrupt("return", n);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function(e) {
                            return t.apply(this, arguments)
                        }
                )
            }]),
                e
        }();
        f.MaxRemovableCount = 20
    }
});
