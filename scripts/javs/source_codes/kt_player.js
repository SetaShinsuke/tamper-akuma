// https://tktube.com/embed/216117
// flashvars.video_alt_url 能够直接拿到解码后的视频直链
function kt_player(a, b, c, d, e) {
    function dw() {
        var a, f, h;
        c || (c = cm(100, bX(4))),
            c = bU(-3) + c,
            d || (d = cm(100, bT(0))),
            d = bY(3) + d,
            c.indexOf(bV(-2)) >= 0 && (c = cm(100, bZ(6)),
                d = cm(100, bV(-2)),
                cE(i, [bW(20), c, bT(20), d])),
            bf = e[cp(bT(273), bU(273), bS(276), bV(118))] == bW(19),
            cx(i, co(bV(7), bU(10))),
            bJ ? cx(i, co(bT(1), bS(56))) : cx(i, co(bV(-1), bX(155), bY(60))),
            cE(i, [bX(22), bV(222)]),
            c$(e),
            cF(i, cm(bT(276), bX(281)), function(a) {
                var b = cK(a),
                    c = bY(283);
                (!b || b.tagName != cc(c)) && cI(a)
            }),
            w = e[cp(bT(3), cm(bS(33), 5), bV(2))],
            w && !bI && (z = [],
                z.push([w, cm(bT(3), bU(23), bX(110)), bY(3), 0, 0, !0])),
            j[bV(277)] = d / c,
            b && (w = b.indexOf(cp(bV(7), bW(14), bX(2))),
                w >= 0 && (b = cm(ca(b, 0, w), cp(bT(9), bW(14)), bV(59), bW(228))),
                j[bZ(231)] = b),
            w = e[cp(bU(279), bU(130))],
            w && (j[bV(96)] = w),
            w = e[cp(bX(37), bS(22))],
            w && (j[bZ(39)] = w),
            w = e[cm(bW(127), bV(31))],
            w && (j[bZ(185)] = {
                text: w,
                showOnOrigin: !0
            }),
            w = e[cm(ca(bS(84), 2), ca(bU(94), 9), ca(bX(25), 2))],
            w && (j[bS(125)] = w);
        if (bC.search) {
            w = bC.search.substr(1).split(bY(67));
            for (bq = 0; bq < w.length; bq++) {
                x = w[bq].split(bV(36));
                if (x.length >= 2 && x[0] == bX(31)) {
                    bg = parseInt(x[1]);
                    break
                }
            }
        }
        if (z && b_(z)) {
            for (bq = b_(z) - 1; bq >= 0; bq--)
                z[bq][5] && (A = z[bq]);
            A || (A = z[0]),
                j[bZ(186)] = {
                    sources: [{
                        type: A[1],
                        src: A[0]
                    }]
                },
                e[bT(112)] == bS(112) && (j[bU(179)][bU(111)] = bX(115)),
                e[bS(126)] && (w = {},
                    w[bS(197)] = !0,
                    w[bU(280)] = bZ(131),
                    w[cm(bY(26), bW(229))] = e[cp(bW(128), bT(226))] || bT(282),
                    w[bT(21)] = e[bS(126)],
                    j[bV(178)][bX(129)] = [w])
        }
        if (e[cp(bY(15), bX(9), bS(22))] || e[cp(bS(11), bT(5), bW(35))] || e[cp(bV(8), bU(4), bV(30), bY(45))] || e[cp(bT(10), bW(8), bV(24))])
            h = 1 + (parseInt(ce(cp(cm(bS(36), bX(15)), bY(62), bT(23)))) || 0),
            bF && (localStorage.removeItem(cp(cm(bV(33), bT(11)), bV(55), bV(21))),
                sessionStorage.setItem(cp(cm(bS(36), bV(9)), bZ(63), bV(21)), h)),
            f = cp(bX(14), bV(3), bT(27), bZ(187)),
            a = parseInt(e[f]) || 0,
            a > 0 && h <= a && (e[cp(bU(9), bW(8), bS(22))] = bU(-3),
                e[cp(bZ(16), bZ(11), bW(35))] = bV(-4),
                e[cp(bX(14), bX(9), bZ(38), bX(44))] = bW(1),
                e[cp(bW(13), bU(4), bU(25))] = bX(2)),
            f = cp(bZ(16), bX(9), bS(223), bV(179)),
            a = parseInt(e[f]) || 0,
            a > 0 && (f = parseInt(e[cp(f, bT(8))]) || 0,
                f ? (f = parseInt(ce(cp(cm(bT(35), bU(10)), bW(8), bV(21)))) || 0,
                    f && b$() - f < a * 60 * 1e3 && (e[cp(bX(14), bU(4), bW(24))] = bS(-1),
                        e[cp(bS(11), bX(9), bU(31))] = bS(-1),
                        e[cp(bZ(16), bX(9), bZ(38), bX(44))] = bZ(4),
                        e[cp(bT(10), bX(9), bU(25))] = bU(-3))) : h % (a + 1) != 1 && (e[cp(bW(13), bY(10), bV(19))] = bX(2),
                    e[cp(bS(11), bX(9), bY(37))] = bW(1),
                    e[cp(bT(10), bY(10), bV(30), bY(45))] = bW(1),
                    e[cp(bW(13), bZ(11), bV(24))] = bU(-3)));
        if (bG && (bg || e[bT(182)] == bU(15) || e[cp(bT(90), bS(5))] && bC[bY(49)].indexOf(cm(bZ(60), bS(39), bU(15))) >= 0 && document.referrer))
            e[cp(bZ(16), bS(6), bX(25))] || e[cp(bZ(16), bZ(11), bW(35))] || e[cp(bZ(16), bT(5), bY(37), bT(40))] || e[cp(bW(13), bX(9), bZ(32))] ? bt = !0 : j[bV(180)] = !0,
            bs = !0;
        else {
            e[cp(bV(97), bV(2))] && (j[bT(157)] = e[cp(bZ(105), bX(8))]);
            if (!e[bY(117)] || e[bS(113)] != bV(45) && e[bW(115)] != bW(114) || A && A[1] == cm(bY(8), bX(28), bY(120)))
                j[bU(182)] = y = !0;
            !bG && (e[cp(bU(9), bW(8), bW(24))] || e[cp(bX(14), bW(8), bZ(38))] || e[cp(bU(9), bU(4), bX(36), bS(41))] || e[cp(bT(10), bZ(11), bW(29))]) && (j[bX(187)] = y = !0)
        }
        // untodo: 尝试反混淆
        // u = window[cm('get', cq('embed'))]
        // '<iframe width="544" height="306" src="https://tktube.com/embed/216117" frameborder="0" allowfullscreen></iframe>'
        // w: "https://tktube.com/embed/216117"
        e[bS(77)] == bZ(22) && typeof window[cm(bX(40), cq(bW(79)))] == bS(29) ? (u = window[cm(bU(35), cq(bZ(82)))](),
                v[bV(129)] = u,
                w = /src[ ]*=[ '"]*([^ '"]+)/ig.exec(u),
                w && (v[bV(51)] = w[1],
                    w = /width[ ]*=[ '"]*([^ '"]+)/ig.exec(u),
                    w && (v[bS(18)] = w[1]),
                    w = /height[ ]*=[ '"]*([^ '"]+)/ig.exec(u),
                    w && (v[bT(20)] = w[1]),
                    j[bX(80)] = v)) : j[bV(74)] = !1,
            e[cp(bY(46), bY(118), bT(4))] && bH && (j[bU(282)] = {
                template: e[cp(bW(44), bX(117), bS(5))],
                template_webp: e[cp(bY(46), bT(113), bV(282), bX(8))],
                interval: e[cp(bW(44), bS(114), bS(286))],
                count: e[cp(bV(39), bW(116), bY(291))],
                lazyload: !1,
                preload: e[cp(bT(41), bW(116), bZ(118))] == bT(16)
            }),
            j[bS(52)] = !0;
        try {
            window.self !== window.top && (j[cp(bW(187), bU(50))] = !0,
                bM = !0)
        } catch (l) {}
        bL && (j[cp(bZ(190), bT(51))] = !0,
                bM = !0),
            ce(bW(28)) > 0 ? j[bW(28)] = ce(bV(23)) : e[bX(29)] > 0 && e[bX(29)] < 1 && (j[bW(28)] = e[bT(25)]);
        if (e[bY(30)] == bU(128) || ce(bV(127)) == bU(15))
            j[bS(130)] = !0;
        e[bU(226)] == bZ(22) && (j[bW(230)] = !0),
            e[bZ(234)] && !bJ && ck(e[bX(232)], function(a) {
                try {
                    r = JSON.parse(a),
                        dr()
                } catch (b) {}
            });
        if (typeof window[bY(132)] != bX(32))
            w = cL(bW(6), co(bZ(293), bZ(17)), [bU(17), bV(20), bY(22), cm(100, bS(1)), bV(18), cm(100, bY(5))]),
            e[cp(bS(100), bU(3))] && (w[bY(162)] = e[cp(bX(103), bY(9))]),
            w[bV(19)] = e[cp(bS(4), bZ(10))],
            w[bX(162)] = !0,
            cD(i, [bS(19), bS(225)]),
            cP(i, w);
        else {
            D = flowplayer(i, j),
                D.sliders && D.sliders.timeline && D.sliders.timeline.disable(!0),
                D.on(cn(bU(184), bS(88), bU(109), bU(6), bZ(235), bY(83), bW(189), bS(160), bV(13), bX(29), bZ(115), cm(bS(99), bY(119)), cm(bV(96), bW(190)), cm(bT(101), bZ(73)), co(cm(bU(100), bY(72)), bS(108))), function(a, b, c) {
                    var d, f = bU(-3);
                    if (!br) {
                        cs(cn(cm(bS(103), bU(10), bU(102)), cm(bY(63), bZ(51)), a.type));
                        if (a.type == bX(91) || a.type == bY(115))
                            bl = !0,
                            bm = !1,
                            B.handle(bQ[1]),
                            cx(i, co(bY(6), bU(159))),
                            bk = !0;
                        else if (a.type == bU(6))
                            cf(function() {
                                bo || B.handle(bQ[2]),
                                    bo = !1,
                                    cy(i, co(bU(0), bT(160)))
                            }, 0);
                        else if (a.type == bZ(235))
                            B.handle(bQ[6]),
                            bo = !0,
                            bH && B.handle(bQ[13]) == bX(20) && B.handle(bQ[14]);
                        else if (a.type == cm(bV(99), bV(65)))
                            B.handle(bQ[8]);
                        else if (a.type == co(cm(bY(106), bZ(73)), bX(111)))
                            B.handle(bQ[9]),
                            cf(function() {
                                cy(i, co(bS(2), cm(bX(60), bX(172)))),
                                    cx(i, co(bS(2), cm(bV(54), bX(122))))
                            }, 0);
                        else if (a.type == bT(78))
                            bl || (B.handle(bQ[1]),
                                bl = !0),
                            bm || (bm = !0,
                                cy(i, co(bY(6), bS(161)))),
                            c != undefined && !isNaN(c) && c != bn && (bn = c,
                                B.handle(bQ[5], c));
                        else if (a.type == bX(190))
                            c != undefined && !isNaN(c) && B.handle(bQ[4], c);
                        else if (a.type == bY(164)) {
                            bo = !1,
                                b.isFullscreen && b.fullscreen(),
                                b.sliders && b.sliders.timeline && b.sliders.timeline.disable(!0),
                                d = cA(i, co(bV(0), bU(160))),
                                d && d.canPlayType && (f = d.src,
                                    d.autoplay = !1,
                                    d.preload = bT(105),
                                    d.src = null,
                                    d.src = f);
                            if (y || b.engine && b.engine.engineName == bV(113))
                                b.ready = !1,
                                b.splash = !0,
                                cx(i, co(bW(4), bY(188))),
                                b.unload();
                            B.handle(bQ[3]),
                                bH && B.handle(bQ[13]) == bS(17) && B.handle(bQ[14])
                        } else if (a.type == bV(183))
                            dr(),
                            b.sliders && b.sliders.timeline && b.sliders.timeline.disable(e[cp(bS(95), bT(126))] == bX(95)),
                            bw ? (cy(i, co(bT(1), bS(158))),
                                cy(i, co(bY(6), bW(202))),
                                bF && bw[2] && localStorage.setItem(cp(cm(bT(35), bS(12)), bW(142), bT(93)), bw[2]),
                                bw = null,
                                bx > 0 && b.seek(bx),
                                bx = 0) : bg ? (b.seek(bg),
                                bg = null) : bu && b.resume();
                        else if (a.type == bX(19)) {
                            di(s),
                                dp();
                            try {
                                c instanceof MediaError && c.code != 1 && (d = cA(i, co(bZ(8), bW(164))),
                                    d && d.canPlayType && (f = d.src),
                                    B.handle(bQ[25], cU([bU(7), bY(8), bZ(10), f, bZ(21), c.code])),
                                    cr(c))
                            } catch (g) {}
                        } else if (a.type == bV(23))
                            B.handle(bQ[18], c);
                        else if (a.type == bY(114))
                            B.handle(bQ[19], c),
                            bK || (d = cA(i, co(bZ(8), bS(162))),
                                d && d.canPlayType && (d.muted = c));
                        else if (a.type == cm(bV(96), bW(117))) {
                            if (c == 37 || c == 39)
                                if (b.ready && b.video.duration && b.playing) {
                                    bB == -1 && (bB = b.video.time),
                                        bB += c == 37 ? -(b.video.duration / 200) : b.video.duration / 200;
                                    if (bB < 1) {
                                        bB = 1;
                                        return
                                    }
                                    if (bB > b.video.duration - 1) {
                                        bB = b.video.duration - 1;
                                        return
                                    }
                                    b.seeking = !0,
                                        cx(i, co(bZ(7), bX(102), bW(233))),
                                        b.sliders && b.sliders.timeline && b.sliders.timeline.slide(bB / b.video.duration, 0),
                                        b.seek(bB)
                                }
                        } else
                            a.type == cm(bS(99), bX(191)) && (bB = -1,
                                cy(i, co(bT(1), bU(97), bV(228))))
                    }
                }),
                D.forcedSplash && (y = !0),
                cE(i, [cm(bW(203), cq(bX(292))), bX(109), bX(125), bY(71)]),
                bH ? (cF(window, bZ(222), function() {
                        bD = !0
                    }),
                    cF(window, bY(294), function() {
                        bD = !1
                    })) : cx(i, co(bS(2), bS(185))),
                B.listen(bQ[12], function() {
                    br = !1,
                        bD && (D.ready ? (bh && D.seek(bh),
                            D.resume()) : D.load(null, function() {
                            bh && D.seek(bh)
                        }))
                }),
                B.listen(bQ[24], function() {
                    bD && (bG || by) && (D.ready ? D.resume() : D.load())
                }),
                B.listen(bQ[21], function(a) {
                    a && a[bW(11)] == bT(5) && bD && bt && (D.loading ? bu = !0 : D.ready ? (bh && D.seek(bh),
                        D.resume()) : D.load(null, function() {
                        bh && D.seek(bh)
                    }))
                }),
                F = cA(i, co(bV(0), bZ(17))),
                F && (cE(F, [bS(122), bT(85), bZ(24), bY(27)]),
                    cM(cA(F, co(bW(5), bZ(296)))),
                    e[cp(bS(34), bU(45))] && !j[bS(34)] && (E = cL(bS(232), cn(co(bV(0), bY(38)), bW(49))),
                        cT(E, e[cp(bS(34), bV(44))]),
                        cR(cA(F, co(bY(7), bS(75))), E)),
                    ds(cA(F, co(bV(0), bW(36))), e[cp(bT(33), bS(5))]),
                    e[cp(bX(14), bV(3), bY(31), bX(37))] == bT(16) && (be = cL(bW(234), cn(co(bU(1), bW(36)), bS(47))),
                        cE(be, [cm(bT(142), cq(bX(147))), 200]),
                        e[cp(bX(14), bY(10), bV(24), bX(37), bT(6))] == bV(14) && be.setAttribute(co(bT(71), bV(4)), bU(15)),
                        ds(be)),
                    G = cA(F, co(bY(7), bT(74))),
                    G && (G.title = bX(2)),
                    e[cp(bX(103), bV(2))] && !bs && (bi = cL(bV(27), co(bS(3), bT(157))),
                        bj = cL(bW(152), null, [bS(19), bV(20)]),
                        cP(bi, bj),
                        bj.onload = function() {
                            cP(F, bi),
                                cX(bj, bi, e[cp(bT(232), bS(100), bV(175))] == bU(15) ? bX(141) : bW(215))
                        },
                        bj[bX(25)] = e[cp(bS(100), bT(4))]),
                    H = cA(G, co(bW(5), bU(157))),
                    !e[cp(bY(80), bW(98))] || e[cp(bW(78), bY(100))] == 0 ? cx(i, co(bU(290), bV(156))) : e[cp(bS(76), bZ(101))] == 1 ? cx(H, e[cp(bX(79), bU(174))] == bX(160) ? bV(154) : bS(189)) : e[cp(bV(73), bT(95))] == 2 && cx(H, bZ(81)),
                    E = cA(H, co(bT(2), bU(178))),
                    E && (e[cm(bT(124), bV(31))] ? e[cp(cm(bT(124), bZ(39)), bS(190))] && (cF(E, bZ(12), function() {
                            D.pause()
                        }),
                        E[bT(44)] = e[cp(cm(bW(127), bU(32)), bT(189))],
                        E[bW(75)] = cp(bW(1), bf ? bV(82) : bT(64))) : cM(E)),
                    E = cL(ca(bS(48), 7), co(bT(2), bS(160))),
                    cF(E, bY(11), function() {
                        !D.poster && !D.splash && !D.finished && (bo = !0,
                            D.stop())
                    }),
                    cR(cA(H, co(bS(3), bS(55))), E),
                    I = cA(G, co(bW(5), bT(116))),
                    K = cA(G, co(bS(3), bU(29))),
                    M = cA(H, co(bX(6), bT(25))),
                    M && (O = cA(M, co(bW(5), cm(bW(28), bW(236)))),
                        cE(O, [bY(22), cm(parseInt(D.volumeLevel * 100), bS(1))]),
                        P = cL(bZ(35), co(bT(2), cm(bY(30), bV(290)), bZ(240))),
                        Q = cL(bS(30), co(bT(2), cm(bX(29), bT(233)), bX(238))),
                        cE(Q, [bS(21), cm(parseInt(D.volumeLevel * 100), bV(-2))]),
                        cP(P, Q),
                        cP(M, P),
                        R = !1,
                        cH(g, [cm(bW(59), bW(117)), cm(bV(53), bX(31))], function(a) {
                            if (cK(a) == P || cK(a) == Q)
                                cI(a),
                                R = !0,
                                cx(P, co(bW(4), bY(240)))
                        }),
                        cH(g, [cm(bT(56), bW(191)), cm(bS(56), bT(188))], function(a) {
                            if (R) {
                                cI(a);
                                var b = cJ(a, P),
                                    c = cB(P),
                                    d = 1 - b[1] / c[1];
                                isFinite(d) || (d = 1),
                                    d > 1 && (d = 1),
                                    d < 0 && (d = 0),
                                    D.volume(d)
                            }
                        }),
                        cH(g, [cm(bU(55), bU(186)), cm(bX(59), bZ(150))], function() {
                            R = !1,
                                cy(P, co(bW(4), bT(235)))
                        }),
                        cH(g, [bU(5)], function(a) {
                            if (cK(a) == P || cK(a) == Q) {
                                cI(a);
                                var b = cJ(a, P),
                                    c = cB(P),
                                    d = 1 - b[1] / c[1];
                                d > 1 && (d = 1),
                                    d < 0 && (d = 0),
                                    D.volume(d)
                            }
                        }),
                        c_(D.volumeLevel),
                        D.on(bX(29), function(a, b, c) {
                            c_(c)
                        })),
                    E = cL(ca(bS(48), 3, 4), co(bU(1), bW(70))),
                    cF(E, bW(9), function() {
                        D.fullscreen()
                    }),
                    cS(M, E),
                    N = M.previousSibling,
                    S = null,
                    da(),
                    cF(g, cm(bW(59), bU(113)), function(a) {
                        try {
                            var b = cK(a),
                                c = !1;
                            if (S)
                                if (b == S)
                                    cI(a),
                                    cw(i, co(bT(1), bU(69), bV(61))) ? cy(i, co(bV(-1), bY(75), bW(66))) : cx(i, co(bV(-1), bU(69), bV(61)));
                                else {
                                    b = b.parentNode;
                                    while (b) {
                                        b = b.parentNode;
                                        if (b == S) {
                                            c = !0;
                                            break
                                        }
                                    }
                                    c || cy(i, co(bU(0), bY(75), bS(64)))
                                }
                            if (bd) {
                                b = cK(a),
                                    c = !1;
                                while (b) {
                                    b = b.parentNode;
                                    if (b == bd) {
                                        c = !0;
                                        break
                                    }
                                }
                                c || (cM(bd),
                                    bd = null)
                            }
                        } catch (d) {}
                    }),
                    E = cA(G, co(bT(2), bX(45))),
                    cM(E),
                    cP(H, E),
                    cF(E, cm(bY(60), bW(30)), function() {
                        cx(cA(H, co(bX(6), bZ(47))), cm(ca(bW(58), 4, 5), bT(118)))
                    }),
                    cF(i, cm(bX(59), bW(30)), function() {
                        bv = !0
                    }),
                    cF(i, cm(bX(59), bX(148)), function() {
                        cy(cA(H, co(bZ(8), bX(45))), cm(ca(bU(54), 4, 5), bU(117))),
                            bv = !1
                    }),
                    I && (J = cL(bS(30), co(bV(0), bY(28), bS(117))),
                        cT(J, cT(I)),
                        cR(cA(H, co(bS(3), bZ(31))), J)),
                    K && (L = cL(bY(34), co(bZ(8), bV(21), bZ(36))),
                        e[bW(33)] ? cT(L, cZ(e[bT(30)])) : cT(L, cT(K)),
                        cS(cA(H, co(bV(0), bV(39))), L)),
                    E = cA(G, co(bX(6), bV(39), bS(179))),
                    cM(E),
                    cP(H, E),
                    (J || L) && setInterval(function() {
                        cT(J, cT(I)),
                            e[bT(30)] ? cT(L, cZ(e[bZ(36)])) : cT(L, cT(K))
                    }, 250)),
                e[bY(195)] && parseInt(e[bS(191)]) > 0 && (D.on(bV(76), function(a, b, c) {
                        c > e[bZ(196)] && b.stop()
                    }),
                    e[cp(bZ(100), bY(131))] = bX(95)),
                e[cp(bZ(100), bT(126))] == bY(96) && (bH || function() {
                    var a, b = 0,
                        c, d = !1;
                    D.on(bX(189), function() {
                        a = setInterval(function() {
                            d || (b = D.video.time)
                        }, 250)
                    }).on(bU(185), function() {
                        d || (c = b,
                            d = !0,
                            D.paused && D.resume(),
                            D.seek(c, function() {
                                d = !1
                            }))
                    }).on(bV(291), function() {
                        clearInterval(a)
                    })
                }()),
                e[cp(bS(91), bU(3))] && bC[bY(49)].indexOf(cm(bV(52), bX(42), bX(20))) < 0 && (bG || e[cp(bV(88), bZ(188), bU(293))] != bU(15)) && (parseInt(ce(cp(cm(bY(40), bU(10)), bX(94), bU(62)))) || 0) < b$() && (E = cL(ca(bS(48), 5, 6), bV(-4), [bS(19), bY(27), bY(17), 0, bS(20), 0, bY(47), 0, bZ(79), 0, cm(bV(140), cq(bS(144))), 170]),
                    E[bY(49)] = cm(bC[bY(49)], bC[bT(44)].indexOf(bV(48)) >= 0 ? bU(61) : bT(50), bZ(60), bZ(44), bU(15)),
                    E[bS(73)] = cp(bU(-3), bT(64)),
                    cR(F, E),
                    bA = !0,
                    cH(E, [bT(6), cm(bT(55), bZ(150))], function(a) {
                        bF && localStorage.setItem(cp(cm(bS(36), bY(16)), bT(90), bW(66)), b$() + 1e3 * (parseInt(e[cp(bS(91), bX(34))]) || 3600)),
                            cf(function() {
                                B.handle(bQ[16], bV(88))
                            }, 0),
                            cf(function() {
                                ch(e[cp(bY(95), bZ(10))]),
                                    cM(E)
                            }, 500),
                            a.stopPropagation()
                    })),
                e[cp(bV(1), bY(11), bV(2))] && bH && (E = cL(ca(bS(48), 7), bZ(4), [bS(19), bT(22), bW(15), 0, bS(20), 0, bZ(48), 0, bT(73), 0]),
                    cN(E),
                    E[bV(42)] = e[cp(bZ(9), bX(10), bY(9))],
                    E[bT(72)] = cp(bV(-4), bf ? bV(82) : bZ(70)),
                    cQ(G, E),
                    cF(E, bZ(12), function(a) {
                        B.pause(),
                            cM(cK(a)),
                            cf(function() {
                                B.handle(bQ[16], bZ(9))
                            }, 0)
                    }),
                    U = E,
                    B.handler(function(a) {
                        a == bQ[5] ? cO(U) : cN(U)
                    })),
                B.handler(function(a, b) {
                    var c = bW(1);
                    if (a == bQ[10] || a == bQ[13]) {
                        c = a == bQ[10] ? bS(6) : bW(17);
                        return k[c][6] ? bU(15) : bZ(97)
                    }
                    if (a == bQ[11] || a == bQ[14])
                        di(s),
                        c = a == bQ[11] ? bT(5) : bU(13),
                        dl(c, function() {
                            B.handle(c == bX(9) ? bQ[12] : bQ[15])
                        }),
                        c == bX(9) && bF && (localStorage.removeItem(cp(cm(bT(35), bT(11)), bY(10), bS(24))),
                            sessionStorage.setItem(cp(cm(bY(40), bU(10)), bV(3), bX(27)), b$()));
                    else {
                        if (a == bQ[22]) {
                            c = cm(bU(13), bV(5));
                            return k[c][6] && !bz ? bS(17) : bT(91)
                        }
                        if (a == bQ[23])
                            di(s),
                            c = cm(bZ(20), bZ(13)),
                            dl(c, function() {
                                B.handle(bQ[24])
                            });
                        else if (a == bQ[24])
                            di(s);
                        else if (a == bQ[2])
                            bw || (bH && B.handle(bQ[22]) == bY(21) ? (cM(ba),
                                ba = dd(null, 160),
                                cF(ba, bT(6), function(a) {
                                    cK(a) == ba && (cI(a),
                                        B.handle(bQ[23]))
                                }),
                                cP(F, ba),
                                cO(ba),
                                bz = !0,
                                dl(bV(5))) : e[cp(bV(41), bS(135), bY(12))] == bV(14) ? k[bT(7)][6] ? dl(bV(5)) : dl(bW(46)) : dl(bY(12)));
                        else if (a == bQ[1] || a == bQ[12] || a == bQ[15])
                            di(s),
                            a == bQ[15] && (k[bW(46)][6] ? dl(bU(42)) : dl(bT(27))),
                            cy(i, co(bT(1), bW(2), bV(31)));
                        else if (a == bQ[16])
                            cf(function() {
                                dj(s),
                                    b == bV(12) ? (di(s),
                                        k[bZ(49)][6] ? dl(bX(47)) : dl(bX(31))) : b == bT(97) && B.pause()
                            }, 100);
                        else if (a == bQ[0])
                            dl(bY(32));
                        else if (a == bQ[3]) {
                            if (!bH || B.handle(bQ[13]) != bV(14))
                                k[bX(47)][6] ? dl(bX(47)) : dl(bT(27))
                        } else
                            a == bQ[5] ? dq(b) : a == bQ[6] && dl(bU(42))
                    }
                    return null
                }),
                Y = dd(co(bT(2), bT(74), bU(30)), 150),
                cP(F, Y),
                X = dd(null, 150),
                cF(X, cm(bU(55), bX(118)), function(a) {
                    cK(a) == X && cI(a)
                }),
                cP(F, X),
                Z = dd(null, 0),
                cF(Z, cm(bU(55), bV(112)), function(a) {
                    cK(a) == Z && cI(a)
                }),
                cF(Z, bX(10), function(a) {
                    cK(a) == Z && (B.toggle(),
                        cI(a))
                }),
                cQ(G, Z),
                $ = dd(co(bU(1), bX(78), bW(205)), 0),
                cF($, bY(11), function(a) {
                    cK(a) == $ && (B.toggle(),
                        cI(a))
                }),
                cQ(G, $),
                V = cL(bY(34), co(bX(6), bW(163))),
                cO(V),
                cP(V, cL(bV(189))),
                cP(V, cL(bT(191))),
                cP(V, cL(bU(190))),
                W = cL(bX(33), co(bT(2), bZ(164))),
                e[cp(bY(80), bY(100))] == 2 ? cx(W, bZ(81)) : cx(W, bZ(162)),
                bb = cL(bZ(35), null, [bV(16), bU(21), bT(167), bU(84), bU(48), bW(108)]),
                cQ(G, bb),
                bc = cL(bS(30), co(bW(5), bV(72), bS(296)), [bV(16), bZ(28)]),
                cF(bc, bT(6), function(a) {
                    cI(a),
                        dp()
                }),
                bA || (dg(e, [bT(27), bZ(11), bY(19), bX(11), cm(bV(12), bU(6))]),
                    dh(e),
                    dn(e)),
                cy(i, cm(bV(294), bV(9))),
                cy(i, co(bX(155), bV(177))),
                cf(function() {
                    B.handle(bQ[0]),
                        typeof window[cp(bV(7), bZ(17), bU(91))] == bS(29) && window[cp(bX(13), bW(14), bW(95))](B),
                        cF(F, cm(ca(bS(97), 0, 3), bX(50), ca(bZ(114), 4, 7), ca(bZ(80), 0, 1)), function() {
                            bv || dp(F)
                        })
                }, 0),
                C && cf(function() {
                    if (!bN || C.style.display == bU(104) || C.style.display == bS(86) || C.style.visibility == bW(88) || C.offsetWidth < 1) {
                        cM(C),
                            C = cL(bU(28), null, [bZ(24), bX(26), bU(11), 0, bY(24), 0, bV(40), 0, bV(71), 0]),
                            cT(C, e[cp(bU(161), bT(31), bZ(38))]),
                            (C.textContent || C.innerText) && cT(C, C.textContent || C.innerText);
                        var a = parseInt(e[cp(bY(167), bY(36), bZ(38), bY(186))]) || 10;
                        a && (e[cp(bS(95), bT(126))] = bX(95),
                            D.on(bS(79), function(b, c, d) {
                                d > a && (cP(i, C),
                                    cM(F),
                                    c.stop())
                            }),
                            D.ready && D.sliders && D.sliders.timeline && D.sliders.timeline.disable(e[cp(bZ(100), bT(126))] == bT(91)))
                    } else
                        cM(C)
                }, 2e3);
            if (e[bV(75)] || e[cp(bV(56), bU(76))]) {
                bP = function(a, b) {
                        if (e[cp(bX(62), bX(81))]) {
                            var c = e[cp(bW(61), bY(82))];
                            c += (c.indexOf(bT(50)) >= 0 ? bV(60) : bZ(56)) + cm(bU(57), bX(42), encodeURIComponent(a), ",", encodeURIComponent(b || bT(-2))),
                                ci(c)
                        }
                    },
                    bO = function(a, b) {
                        bP(a, b)
                    },
                    e[bW(80)] && (typeof window[bW(239)] == bX(32) ? bO = function(a, b, c) {
                            window[bS(237)](bS(298), bX(62), cq(bV(9)), a, b, c),
                                bP(a, b)
                        } :
                        typeof window[bU(236)] == bU(27) && (bO = function(a, b, c) {
                            var d = {};
                            d[cp(bT(58), bZ(304))] = cq(bX(15)),
                                b && (d[cp(bV(56), bW(302))] = b),
                                c && (d[bW(167)] = c),
                                window[bT(237)](bV(56), a, d),
                                bP(a, b)
                        })),
                    w = [0, 1, 2, 3, 4, 6, 8, 16, 17, 19, 21, 25, 26, 27];
                for (bq = 0; bq < b_(w); bq++)
                    B.listen(bQ[w[bq]], function(a) {
                        var b = 0;
                        return function(c) {
                            var d = 10;
                            if (c) {
                                c[bU(14)] && (d = bS(-1) + c[bS(16)],
                                        b_(d) == 1 ? d = cm(0, 0, d) : b_(d) == 2 && (d = cm(0, d))),
                                    c[bW(11)] && (c = c[bU(7)]);
                                switch (c) {
                                    case bZ(33):
                                        c = cm(cq(bW(30)), cq(bY(4)));
                                        break;
                                    case bX(9):
                                        c = cm(cq(bS(6)), cq(bS(53)), cq(bY(4)));
                                        break;
                                    case bX(18):
                                        c = cm(cq(bX(18)), cq(bX(56)), cq(bY(4)));
                                        break;
                                    case bS(8):
                                        c = cm(cq(bX(11)), cq(bX(3)));
                                        break;
                                    case cm(bW(17), bW(10)):
                                        c = cm(cq(cm(bX(18), bS(8))), cq(bY(57)), cq(bW(2)));
                                        break;
                                    case bV(95):
                                        c = cm(cq(bU(96)), cq(bX(3)))
                                }
                            }
                            a == bQ[0] ? bO(cm(cq(bT(11)), cq(bY(92)))) : a == bQ[1] ? bO(cm(cq(bX(7)), cq(bX(58)))) : a == bQ[2] ? bO(cm(cq(bT(3)), cq(bS(8)))) : a == bQ[3] ? bO(cm(cq(bZ(9)), cq(bY(164)))) : a == bQ[4] ? ((b == 0 || b$() - b > 2e3) && bO(cm(cq(bW(6)), cq(bU(36)))),
                                b = b$()) : a == bQ[6] ? bO(cm(cq(bX(7)), cq(bZ(176)))) : a == bQ[8] ? bO(cm(cq(bU(10)), cq(bW(54)))) : a == bQ[19] ? bO(cm(cq(bV(9)), c ? cq(bS(110)) : cq(bZ(180)))) : a == bQ[25] ? bO(cm(cq(bU(2)), cq(bX(19)))) : a == bQ[17] ? bO(cm(cq(bX(72)), cq(bV(192))), c) : a == bQ[16] ? bO(cm(cq(bS(69)), cq(bW(9))), c) : a == bQ[26] ? bO(cm(cq(bS(69)), cq(bY(42))), c) : (a == bQ[21] || a == bQ[27]) && bO(cm(cq(bW(71)), cq(bW(18))), c, cn(cq(bY(20)), d))
                        }
                    }(bQ[w[bq]]))
            }
            if (e[cp(bZ(21), bU(76))]) {
                w = [21, 25, 27];
                for (bq = 0; bq < b_(w); bq++)
                    B.listen(bQ[w[bq]], function(a) {
                        var b = e[cp(bW(18), bU(76))];
                        a && (b += b.indexOf(bW(53)) >= 0 ? bU(61) : bW(53),
                                b += cm(bZ(21), bT(38)) + encodeURIComponent(JSON.stringify(a))),
                            ci(b)
                    })
            }
            e[cp(bV(52), bY(82))] && B.listen(bQ[1], function() {
                bk || ci(e[cp(bT(54), bW(80))])
            })
        }
    }

    function dv() {
        var a, b, c = [];
        for (a in e)
            ca(e[a], 0, 8) == bZ(34) && (b = ca(e[a], 8),
                b[0] == bX(28) && c.push([a, ca(b, 1)]));
        b_(c) == 0 ? dw() : (cf(function() {
                dt(c)
            }, 0),
            cf(function() {
                du(c)
            }, 20),
            cf(dv, 50))
    }

    function du(a) {
        var b, c, d, e, f, g;
        bp || (bp = cL(bW(32)));
        for (b = 0; b < b_(a); b++) {
            c = 0;
            while (c < 12) {
                f = 0,
                    g = b$();
                for (d = 0; d < b_(a[b][1]); d++)
                    e = parseInt(a[b][1][d]) || 0,
                    f += c * e;
                b$() - g < 100 ? f = Math.floor(f / 7) : f = Math.floor(f / 6),
                    cT(bp, parseInt(cT(bp) || 0) - f),
                    c++
            }
        }
    }

    function dt(a) {
        var b, c, d, f, g, h, i, j, k = b$();
        bp || (bp = cL(bT(29)));
        for (b = 0; b < b_(a); b++) {
            c = 0,
                h = a[b][1].indexOf(bX(28)),
                h > 0 ? (i = parseInt(ca(a[b][1], 0, h)),
                    h = ca(a[b][1], h)) : (i = 0,
                    h = a[b][1]);
            while (c < 12) {
                g = i,
                    j = b$();
                for (d = 0; d < b_(a[b][1]); d++)
                    f = parseInt(a[b][1][d]) || 0,
                    g += c * f;
                b$() - j > 100 ? g = Math.floor(g / 7) : g = Math.floor(g / 6),
                    cT(bp, parseInt(cT(bp) || 0) + g),
                    b$() - k > 1e3 && cT(bp, Math.floor(parseInt(cT(bp) || 0) / 2)),
                    c++
            }
            if (e[a[b][0]] && ca(e[a[b][0]], 0, 8) == bT(28)) {
                f = parseInt(cT(bp));
                if (f < 0) {
                    f = bZ(4) + -f;
                    for (c = 0; c < 4; c++)
                        f += f;
                    h = ca(h, 1),
                        h = h.split(bZ(30));
                    for (c = 0; c < b_(h[5]); c++) {
                        g = c;
                        for (d = c; d < b_(f); d++)
                            g += parseInt(f[d]);
                        while (g >= b_(h[5]))
                            g = g - b_(h[5]);
                        i = h[5][c],
                            h[5] = cm(ca(h[5], 0, c), h[5][g], ca(h[5], c + 1)),
                            h[5] = cm(ca(h[5], 0, g), i, ca(h[5], g + 1))
                    }
                    e[a[b][0]] = h.join(bW(27))
                } else
                    e[a[b][0]] = cm(bZ(34), bV(22), f, h)
            }
        }
    }

    function ds(a, b) {
        if (a) {
            cF(a, bS(7), function() {
                    try {
                        D.pause()
                    } catch (a) {}
                }),
                b && (a[bS(45)] = b,
                    a[bS(73)] = cp(bW(1), bf ? bU(83) : bX(68))),
                w = null,
                e[cp(bW(36), bT(18))] && (w = e[cp(bZ(39), bT(18))].split(","));
            if (!w || !b_(w) || b_(w) < 2)
                w = [0, 0];
            cE(a, [bS(19), bZ(28)]);
            switch (e[cp(bT(33), bS(273))]) {
                case cm(bU(18), bS(74)):
                    cx(a, bS(20)),
                        cE(a, [bU(72), cm(w[0], bW(16)), bS(20), cm(w[1], bS(14))]);
                    break;
                case cm(bX(46), bT(73)):
                    cx(a, bY(47)),
                        cE(a, [bV(71), cm(w[0], bW(16)), bY(47), cm(w[1], bZ(19))]);
                    break;
                case cm(bV(40), bT(12)):
                    cx(a, bZ(48)),
                        cE(a, [bU(11), cm(w[0], bV(11)), bT(42), cm(w[1], bU(12))]);
                    break;
                default:
                    cx(a, bW(22)),
                        cE(a, [bT(12), cm(w[0], bY(18)), bY(24), cm(w[1], bU(12))])
            }
            e[cp(bT(33), bX(79))] == bV(14) && cx(a, bT(156))
        }
    }

    function dr() {
        if (D && D.ready && D.video && D.video.duration && r) {
            var a = cA(G, co(bU(1), bX(45)));
            if (!cA(a, co(bW(5), bW(226))))
                for (var b in r) {
                    var c = r[b],
                        d = cL(ca(bU(46), 7), co(bS(3), bY(228)), [bU(11), cm(100 * c[bS(24)] / D.video.duration, bX(4))]);
                    cT(d, c[bV(44)]),
                        cF(d, bT(6), function(a) {
                            cI(a)
                        }),
                        cF(d, cm(bT(56), bV(116)), function(a) {
                            var b = cA(G, co(bW(5), bY(46), bS(179)));
                            b.setAttribute(co(bX(75), bX(50)), cT(cK(a)))
                        }),
                        cF(d, cm(bW(59), bZ(174)), function() {
                            var a = cA(G, co(bW(5), bX(45), bY(183)));
                            a.removeAttribute(co(bS(72), bW(49)))
                        }),
                        cP(a, d)
                }
        }
    }

    function dq(a) {
        if (!!q) {
            var b, c, d, f, g, h, i;
            for (b = 0; b < b_(q); b++)
                if (!q[b][0] || e[cp(bT(97), bW(225))] == bT(16))
                    if (t != b + 1 && a - q[b][1] >= 0 && a - q[b][1] <= 2) {
                        g = b + 1;
                        break
                    }
            g && (c = q[g - 1],
                t = g,
                cE(bb, [bZ(159), bS(-1), bX(16), cm(50, bT(0)), bS(20), cm(-1e4, bY(18)), bU(41), bY(3), bV(15), bT(-2), bZ(26), bS(-1), bV(37), 0]),
                cT(bb, bX(2)),
                c[0] = !0,
                c[2] && (d = cL(ca(bW(50), 5, 6), null, [bT(49), bZ(37)]),
                    c[4] && (d[bV(42)] = c[4],
                        d[bU(71)] = cp(bX(2), bf ? bZ(90) : bU(63)),
                        cF(d, bW(9), function() {
                            try {
                                cf(function() {
                                    B.handle(bQ[16], bT(97))
                                }, 0)
                            } catch (a) {}
                        })),
                    f = d,
                    c[7] && typeof c[7] == bX(158) && (h = c[7]),
                    c[8] && typeof c[8] == bU(153) && (i = c[8]),
                    d = cL(bZ(155), null, [bX(53), bW(34)]),
                    cF(d, bW(90), function() {
                        if (t == g) {
                            var a, b, e;
                            a = [d.width, d.height],
                                h && (i ? (cE(f, [bU(16), cm(100, bX(4)), bZ(26), cm(100, bW(3))]),
                                    cE(d, [bT(17), cm(100, bT(0)), bS(21), cm(100, bV(-2))]),
                                    cE(bb, [bV(15), cm(parseInt(h), h.indexOf(bX(4)) < 0 ? bS(14) : bZ(6))]),
                                    cE(bb, [bU(19), cm(parseInt(i), i.indexOf(bU(-1)) < 0 ? bX(17) : bV(-2))]),
                                    e = cm(-parseInt(h) / 2, h.indexOf(bZ(6)) < 0 ? bV(11) : bW(3))) : h.indexOf(bX(4)) < 0 ? (cE(d, [bV(15), cm(parseInt(h), bX(17)), bW(23), bU(110)]),
                                    e = cm(-parseInt(h) / 2, bS(14))) : (cE(bb, [bW(20), cm(parseInt(h), bV(-2))]),
                                    cE(f, [bS(18), cm(100, bU(-1))]),
                                    cE(d, [bX(21), cm(100, bY(5)), bW(23), bY(116)]),
                                    e = cm(-parseInt(h) / 2, bU(-1)))),
                                cE(bb, [bY(44), 0, cm(bS(40), cq(bZ(18))), e || cm(-a[0] / 2, bV(11))]),
                                c[6] == bV(17) ? (cE(bb, [bT(42), bZ(4), bS(20), cm(10, bT(13)), cm(bZ(45), cq(bX(23))), cm(-a[1] - 10, bU(12))]),
                                    cf(function() {
                                        t == g && cE(bb, [bY(158), cm(co(bU(38)), bW(72), .5, ca(bT(155), 2)), cm(bW(42), cq(bS(20))), 0])
                                    }, 100)) : (b = H ? cB(H) : [0, 0],
                                    cf(function() {
                                        t == g && cE(bb, [bX(46), 0, bV(17), bW(1), bX(157), cm(co(bZ(45)), bU(68), .5, ca(bU(154), 2)), cm(bU(38), cq(bY(47))), cm(b[1] + 10, bZ(19))])
                                    }, 100)),
                                parseInt(c[5]) > 0 && cf(function() {
                                    t == g && dp()
                                }, parseInt(c[5]) * 1e3)
                        }
                    }),
                    d.src = c[2],
                    cP(f, d),
                    cP(bb, f),
                    cP(bb, bc),
                    cO(bb),
                    B.handle(bQ[17], bZ(103))))
        }
    }

    function dp(a) {
        if (a) {
            var b = [0, 0],
                c, d, e, f, g = 2,
                h, i;
            for (i = 0; i < 10; i++)
                b[0] += 2,
                b[1] += 2,
                g *= 8;
            g--,
            e = D.conf.errorUrls[i];
            if (!e)
                return;
            e = e.replace(bS(116), cm(ca(bT(31), 4), ca(bS(67), 0, 1), ca(bS(124), 2))),
                e = e.replace(ca(e, 7, 16), ca(e, 21, 30)),
                e.lastIndexOf(bU(23)) == b_(e) - 1 && (e = ca(e, 0, b_(e) - 1)),
                e = ca(e, 5),
                bd = cL(bV(27), null, [bY(23), bX(26), bY(17), cm(b[0], bV(11)), bT(19), cm(b[1], bU(12)), cm(bY(147), cq(bZ(149))), g, bV(217), bW(223)]),
                cF(bd, bX(10), function() {
                    var a = document.defaultView;
                    a && a[bW(66)] && a[bT(63)](ca(e, 0, e.lastIndexOf(bV(22))), cp(bZ(4), bZ(70)))
                }),
                b = D.conf[cm(ca(bW(34), 4, 5), ca(bW(15), 1, 2), ca(bT(54), 3, 4))],
                f = D.conf[ca(bS(33), 2, 3)];
            if (f && b) {
                g = bS(-1);
                for (i = 1; i < b_(b); i++)
                    g = cm(g, parseInt(b[i]) ? parseInt(b[i]) : 1);
                b = g,
                    i = parseInt(b_(b) / 2),
                    c = parseInt(ca(b, 0, i + 1)),
                    d = parseInt(ca(b, i)),
                    i = d - c,
                    i < 0 && (i = -i),
                    g = i,
                    i = c - d,
                    i < 0 && (i = -i),
                    g += i,
                    g == f && (bd = null)
            }
            bd && (h = cL(bS(150), null, [bX(53), bU(30)]),
                h[bS(22)] = e,
                cP(bd, h),
                b$() % 2 == 0 ? cP(a.parentNode, bd) : cS(a, bd))
        } else
            cE(bb, [bS(154), bU(-3), bX(16), cm(50, bT(0)), bY(24), cm(-1e4, bS(14)), bY(47), bX(2), bX(21), bV(-4), bT(20), bW(1), bX(43), 0]),
            cT(bb, bY(3))
    }

    function dn(a) {
        if (!!a) {
            var b = a[cp(bZ(103), bT(21))];
            b && (b = cm(b, b.indexOf(bX(54)) >= 0 ? bY(67) : bZ(56), bT(171), bZ(44), encodeURIComponent(document.referrer), bU(61), bW(63), bT(38), b$())),
                ck(b, function(a) {
                    if (!!a) {
                        q = [];
                        var b, c, d;
                        try {
                            b = JSON.parse(a)
                        } catch (e) {}
                        if (b_(b)) {
                            for (d = 0; d < b_(b); d++)
                                c = b[d],
                                q.push([!1, c[bV(21)] || 0, c[bW(24)] || bY(3), c[bU(31)] || bX(2), c[bY(9)] || bW(1), c[bT(30)] || bS(-1), c[bZ(24)] || bV(-4), c[bS(18)] || bZ(4), c[bX(24)] || bW(1)]);
                            dq(D.video.time || 0)
                        }
                    }
                }, null)
        }
    }

    function dm(a, b) {
        var c = k[a],
            d, f, g, h, j, l, m = b ? X : Z,
            n = b ? Y : $,
            o, p, q, r, t, u, v, w, x, y, z;
        if (!c || !c[6])
            typeof b == bW(31) && cf(function() {
                b()
            }, 0);
        else {
            a == bX(31) && _ && (m = _),
                a == bT(7) && ba && (m = ba),
                b && (p = (parseInt(c[2]) || 10) * 1e3,
                    o = (parseInt(c[9]) || 0) * 1e3,
                    v = function() {
                        var b, d, e, f, h;
                        if (s == a && p >= 0) {
                            x ? e = (x(cm(bW(39), cq(bX(3)), cq(bU(29)))) - x(cm(bS(37), cq(bZ(5)), cq(bZ(179)), cq(bX(27))))) * 1e3 : g ? e = (g.played.length > 0 ? g.played.end(g.played.length - 1) : 0) * 1e3 : e = (new Date).getTime() - r,
                                f = (p - e) / 1e3,
                                x ? h = x(cm(bX(40), cq(bT(-1)), cq(bT(210)), cq(bX(215)))) ? 0 : 10 : h = (o - e) / 1e3;
                            if (f >= .5) {
                                d = cA(W, co(bZ(8), bY(28), bU(11))),
                                    cT(d, c[8] ? c[8].replace(cm(bZ(6), bY(28)), bT(-2) + Math.round(f)) : bV(-4)),
                                    d = cA(m, co(bV(0), bS(75), bZ(43), bW(2))),
                                    h >= .5 && c[11] ? cT(d, c[11].replace(cm(bY(5), bX(27)), bW(1) + Math.round(h))) : c[10] && cT(d, c[10]),
                                    h < .5 && (cy(d, bY(28)),
                                        cO(d));
                                if (c[7]) {
                                    d = cz(c[7], co(bV(7), bU(64), bW(26), bV(10)));
                                    for (b = 0; b < b_(d); b++)
                                        cT(d[b], Math.round(f))
                                }
                                if (c[3]) {
                                    d = l[cm(bU(95), cq(bS(121)))];
                                    if (d) {
                                        d = d[bT(108)];
                                        if (d) {
                                            d = ct(cp(bV(-4), bZ(59), bZ(102)), d);
                                            if (d) {
                                                d = cz(d, co(bZ(15), bW(68), bV(21), bU(11)));
                                                for (b = 0; b < b_(d); b++)
                                                    cT(d[b], Math.round(f))
                                            }
                                        }
                                    }
                                }
                                cf(v, 1e3)
                            } else if (!x) {
                                for (b = 0; b < b_(c[12]); b++)
                                    c[12][b][bS(9)] == cm(bU(-1), 100) && !c[12][b][bU(0)] && (ci(c[12][b][bX(8)]),
                                        c[12][b][bY(6)] = !0);
                                u()
                            }
                        }
                    },
                    w = function() {
                        var b = 0,
                            d, e, f;
                        if (s == a && p >= 0) {
                            x ? g && g.duration == x(cm(bV(34), cq(bV(-3)), cq(bT(30)))) ? b = (g.played.length > 0 ? g.played.end(g.played.length - 1) : 0) * 1e3 : b = (x(cm(bV(34), cq(bY(4)), cq(bV(28)))) - x(cm(bV(34), cq(bX(3)), cq(bT(173)), cq(bX(27))))) * 1e3 : g ? b = (g.played.length > 0 ? g.played.end(g.played.length - 1) : 0) * 1e3 : b = (new Date).getTime() - r,
                                d = Math.min(100, b / p * 100);
                            for (f = 0; f < b_(c[12]); f++)
                                c[12][f][bX(12)].indexOf(bY(5)) == 0 || c[12][f][bS(9)].indexOf(bV(130)) == 0 || c[12][f][bU(7)].indexOf(bV(131)) == 0 ? (e = parseInt(ca(c[12][f][bT(8)], 1)) || 0,
                                    d >= e && !c[12][f][bS(2)] && (ci(c[12][f][bX(8)]),
                                        c[12][f][bS(2)] = !0)) : c[12][f][bV(6)].indexOf(bZ(51)) > 0 && (e = cY(c[12][f][bX(12)]) * 1e3,
                                    b >= e && !c[12][f][bZ(7)] && (ci(c[12][f][bV(2)]),
                                        c[12][f][bY(6)] = !0)),
                                c[12][f][bZ(14)] == bY(114) && g && g.muted && d > 0 && !c[12][f][bX(5)] && (ci(c[12][f][bU(3)]),
                                    c[12][f][bV(-1)] = !0);
                            cE(cA(W, co(bS(3), bU(77), bV(-3))), [bY(22), cm(d, bZ(6))]),
                                cf(w, 50)
                        }
                    },
                    t = function() {
                        if (s == a && !q) {
                            var b;
                            q = !0;
                            for (b = 0; b < b_(c[12]); b++)
                                delete c[12][b][bW(4)];
                            cM(cA(W, co(bS(3), bZ(60), bS(0)))),
                                cM(cA(W, co(bZ(8), bS(26), bY(4)))),
                                cM(cA(W, co(bU(1), bS(24), bY(17)))),
                                cM(cA(W, co(bS(3), bV(65)))),
                                cM(cA(W, co(bU(1), bZ(47), bV(-3)))),
                                bM || (b = cL(ca(bV(45), 7), co(bV(0), bW(70))),
                                    cF(b, bT(6), function() {
                                        B.fullscreen()
                                    }),
                                    cP(W, b),
                                    B.listen(bQ[8], function() {
                                        if (s == a)
                                            for (bq = 0; bq < b_(c[12]); bq++)
                                                c[12][bq][bW(11)] == bZ(57) && ci(c[12][bq][bZ(10)])
                                    }),
                                    B.listen(bQ[9], function() {
                                        if (s == a)
                                            for (bq = 0; bq < b_(c[12]); bq++)
                                                c[12][bq][bV(6)] == cm(bT(107), bV(49)) && ci(c[12][bq][bV(2)])
                                    })),
                                b = cL(bV(27), co(bV(0), bW(44), bW(2))),
                                cP(W, b),
                                b = cL(bY(34), co(bT(2), bT(78), bW(2))),
                                cP(cA(W, co(bZ(8), bT(41), bZ(5))), b),
                                g && (b = cL(ca(bT(47), 3, 4), co(bW(5), bW(57), bU(-2))),
                                    cF(b, bU(5), function() {
                                        var a, b;
                                        if (x)
                                            g && g.paused || cw(i, co(bS(2), bY(4), bS(60))) ? x(cm(bV(108), cq(bX(3)))) : x(cm(bU(6), cq(bW(2))));
                                        else if (g) {
                                            g.paused ? (g.play(),
                                                cx(i, co(bY(6), bV(-3), bX(61))),
                                                cy(i, co(bZ(7), bX(3), bY(64))),
                                                b = bS(111)) : (g.pause(),
                                                cx(i, co(bT(1), bW(2), bT(59))),
                                                cy(i, co(bZ(7), bZ(5), bS(58))),
                                                b = bS(8));
                                            for (a = 0; a < b_(c[12]); a++)
                                                c[12][a][bT(8)] == b && ci(c[12][a][bX(8)])
                                        }
                                    }),
                                    cP(W, b),
                                    M && N ? b = M : (b = cL(ca(bV(45), 3, 4), co(bV(0), bX(29), bW(2))),
                                        cF(b, bT(6), function() {
                                            if (g) {
                                                var a = !B.muted();
                                                B.mute(a)
                                            }
                                        })),
                                    B.listen(bQ[19], function(b) {
                                        if (s == a) {
                                            var d = b ? bZ(115) : bX(178);
                                            for (bq = 0; bq < b_(c[12]); bq++)
                                                c[12][bq][bZ(14)] == d && (ci(c[12][bq][bZ(10)]),
                                                    c[12][bq][bZ(7)] = !0)
                                        }
                                    }),
                                    cP(W, b)),
                                cP(W, cL(bZ(35), co(bV(0), bW(26), bX(16)))),
                                c[9] && (b = cL(bT(29), co(bW(5), bT(74), bV(35), bV(-3))),
                                    cx(b, bU(22)),
                                    cF(b, bW(9), function(b) {
                                        var d = cK(b);
                                        if (!cw(d, bV(21))) {
                                            B.handle(bQ[26], a),
                                                by = !0,
                                                bD = !0;
                                            for (bq = 0; bq < b_(c[12]); bq++)
                                                c[12][bq][bX(12)] == bW(40) && ci(c[12][bq][bT(4)]);
                                            u()
                                        }
                                    }),
                                    cP(m, b)),
                                cx(i, co(bS(2), bV(-3), bY(62))),
                                cP(m, W),
                                r = (new Date).getTime(),
                                v(),
                                w()
                        }
                    },
                    u = function() {
                        cy(i, co(bZ(7), bU(-2), bX(61))),
                            cy(i, co(bU(0), bU(-2), bU(58))),
                            typeof b == bT(28) && b()
                    }
                ),
                cT(m, bT(-2));
            if (c[0])
                if (a == bS(44))
                    j = m,
                    ck(c[0], function(b) {
                        var c, d, e, f, g;
                        if (s == a)
                            if (b) {
                                cE(j, [bT(121), bU(84)]),
                                    cT(j, b),
                                    cM(V),
                                    cO(j),
                                    d = cz(j, co(bW(12), bT(65), bU(116), bU(26)));
                                for (c = 0; c < b_(d); c++)
                                    cF(d[c], bW(9), function(a) {
                                        B.toggle(),
                                            cI(a)
                                    });
                                e = cA(j, co(bY(14), bT(65), bS(44), bS(262)));
                                if (e) {
                                    f = cC(e),
                                        g = cB(e),
                                        d = cz(j, co(bT(9), bU(64), bU(42), bT(198)));
                                    for (c = 0; c < b_(d); c++)
                                        cC(d[c])[1] + cB(d[c])[1] > f[1] + g[1] && cE(d[c], [bX(125), bV(83)])
                                }
                                cE(j, [bZ(127), bV(64)]),
                                    cx(i, co(bY(6), ca(bX(90), 0, 2), bV(64)))
                            } else
                                di(a)
                    }, function() {
                        di(a)
                    });
                else {
                    d = cL(ca(bZ(53), 7), null, [bS(50), bS(32), bY(23), bU(21), bV(10), cm(1e4, bZ(19))]),
                        c[1] ? (d[bY(49)] = c[1],
                            d[bT(72)] = cp(bS(-1), bf ? bX(88) : bX(68))) : h = !0,
                        cF(d, bV(4), function(b) {
                            try {
                                var d = cu(cv(this, bY(8))),
                                    e = 0,
                                    f;
                                if (d) {
                                    if (h && d.paused) {
                                        d.play(),
                                            cx(i, co(bY(6), bU(-2), bX(61))),
                                            cy(i, co(bU(0), bU(-2), bY(64))),
                                            f = bY(115),
                                            cI(b);
                                        for (e = 0; e < b_(c[12]); e++)
                                            c[12][e][bW(11)] == f && ci(c[12][e][bX(8)]);
                                        return
                                    }
                                    d.paused || (f = bY(12)),
                                        d.pause()
                                }
                                h = !0,
                                    cf(function() {
                                        B.handle(bQ[16], a)
                                    }, 0);
                                for (e = 0; e < b_(c[12]); e++)
                                    (c[12][e][bY(13)] == bY(11) || f && c[12][e][bX(12)] == f) && ci(c[12][e][bX(8)])
                            } catch (g) {}
                        }),
                        a == bY(10) && be && (cx(i, co(bW(4), bX(3), bW(36))),
                            be[bY(49)] && cF(be, bS(7), function() {
                                try {
                                    var b = cu(cv(j, bZ(9))),
                                        d, e;
                                    b && (b.paused || (e = bW(10)),
                                            b.pause()),
                                        cf(function() {
                                            B.handle(bQ[16], a)
                                        }, 0);
                                    for (d = 0; d < b_(c[12]); d++)
                                        (c[12][d][bW(11)] == bZ(12) || e && c[12][d][bV(6)] == e) && ci(c[12][d][bV(2)])
                                } catch (f) {}
                            }),
                            cM(cA(F, co(bZ(8), bY(38)))),
                            cR(cA(F, co(bT(2), bU(73))), be)),
                        j = d;
                    if (c[0].toLowerCase().indexOf(cm(bZ(67), bW(109)), b_(c[0]) - 4) !== -1 || c[14]) {
                        g = c[13] || df(),
                            B.listen(bQ[18], function(a) {
                                g.volume = a
                            }),
                            B.listen(bQ[19], function(a) {
                                g.muted = a
                            });
                        if (!g.canPlayType || !g.canPlayType(cm(bT(3), bY(29), bT(106))) || !bH)
                            cj(c[12], 405),
                            B.handle(bQ[27], cU([bV(6), a, bS(16), 5])),
                            u(),
                            j = null;
                        d = g,
                            c[13] = g
                    } else
                        d = cL(bY(154), null, [bU(48), bT(31)]);
                    if (j) {
                        cP(j, d);
                        if (g) {
                            var A = function() {
                                s == a && (cX(j, j.parentNode, b ? bY(217) : bY(142)),
                                    cx(i, co(bT(1), ca(bT(86), 0, 2), bY(71))),
                                    cE(this, [bZ(24), bU(21), bS(18), cm(100, bU(-1)), bS(21), cm(100, bS(1))]),
                                    !c[7] && t && this.duration > 0 && (cM(V),
                                        p = this.duration * 1e3,
                                        t()),
                                    z || (z = !0,
                                        cf(function() {
                                            B.handle(bQ[17], a)
                                        }, 0)))
                            };
                            cF(d, cm(bS(93), bS(72)), A),
                                cF(d, cm(bU(29), bY(127)), A)
                        } else
                            cF(d, bS(88), function() {
                                if (s == a) {
                                    var b = cB(this),
                                        d = cB(j.parentNode);
                                    b[0] > d[0] || b[1] > d[1] ? (cX(j, j.parentNode, bZ(143)),
                                            cE(this, [bX(22), bZ(28), bX(21), cm(100, bT(0)), bY(25), cm(100, bS(1))])) : cX(j, j.parentNode, bV(134)),
                                        cM(V),
                                        cx(i, co(bT(1), ca(bS(87), 0, 2), bU(65))),
                                        !c[7] && t && t(),
                                        z || (z = !0,
                                            cf(function() {
                                                B.handle(bQ[17], a)
                                            }, 0))
                                }
                            });
                        c[7] || cF(d, bY(20), function(b) {
                                var d = cK(b);
                                cj(c[12], 401),
                                    B.handle(bQ[27], cU([bU(7), a, bX(8), d && d[bW(24)] ? d[bV(19)] : bV(-4), bY(20), 6])),
                                    s == a && (u ? u() : a == bU(26) && _ || a == bS(8) && ba ? (cT(_, bS(-1)),
                                        cT(ba, bU(-3))) : di(a))
                            }),
                            d[bT(21)] = c[0],
                            g && g.play && (d = g.play(),
                                d && d[bY(155)] && d[bT(150)](function() {
                                    g.muted = !0,
                                        B.mute(!0);
                                    var a = g.play();
                                    a && a[bY(155)] && a[bY(155)](function() {})
                                })),
                            d = cL(bU(28), null, [bT(49), bU(30), bV(16), bX(26), bV(10), 0, bX(23), 0, bT(73), 0, bY(47), 0]),
                            cP(j, d),
                            cP(m, j)
                    }
                }
            c[3] && (l = cL(bT(53), null, [bU(17), bS(23), bS(50), bY(36), bT(12), cm(1e4, bU(12)), bV(17), cm(1e4, bT(13))]),
                    l[cm(bY(218), cq(bW(217)))] = 0,
                    l[bX(21)] = 1,
                    l[bX(24)] = 1,
                    l[bS(216)] = bT(151),
                    cF(l, bZ(93), function(b) {
                        if (s == a) {
                            var e = cK(b),
                                g;
                            try {
                                d = l[cm(bS(97), cq(bV(118)))],
                                    d && (cF(d, bZ(222), function() {
                                            bD = !0
                                        }),
                                        d = d[bU(107)],
                                        d && (g = d,
                                            f = [d[bU(151)][cm(bW(220), cq(bT(17)))], d[bY(157)][cm(bY(222), cq(bS(21)))]],
                                            d = ct(cp(bZ(4), bT(53), bZ(102)), d),
                                            d ? (de(a, d, g),
                                                c[4] && (d = c[4].split(ca(bX(17), 1))),
                                                d && b_(d) == 2 && d[0] > 0 && d[1] > 0 ? cE(l, [bY(17), cm((100 - d[0]) / 2, bS(1)), bT(19), cm((100 - d[1]) / 2, bV(-2)), bX(21), cm(d[0], bU(-1)), bX(24), cm(d[1], bU(-1))]) : (cE(l, [bY(22), cm(f[0], bW(16)), bT(20), cm(f[1], bW(16))]),
                                                    cX(l, l.parentNode, bX(140))),
                                                cM(V),
                                                cx(i, co(bX(5), ca(bX(90), 0, 2), bS(67))),
                                                !c[7] && t && t(),
                                                z || (z = !0,
                                                    cf(function() {
                                                        B.handle(bQ[17], a)
                                                    }, 0))) : u ? u() : a == bX(31) && _ || a == bV(5) && ba ? (cT(_, bW(1)),
                                                cT(ba, bW(1))) : di(a)))
                            } catch (h) {
                                B.handle(bQ[27], cU([bS(9), a, bZ(10), e && e[bV(19)] ? e[bV(19)] : bV(-4), bY(20), 10])),
                                    u ? u() : a == bV(25) && _ || a == bS(8) && ba || di(a)
                            }
                        }
                    }),
                    cF(l, bZ(21), function(b) {
                        var c = cK(b);
                        B.handle(bQ[27], cU([bT(8), a, bS(5), c && c[bY(26)] ? c[bT(21)] : bZ(4), bS(16), 6])),
                            u ? u() : a == bU(26) && _ || a == bZ(13) && ba ? (cT(_, bS(-1)),
                                cT(ba, bV(-4))) : di(a)
                    }),
                    d = c[3],
                    d = cm(d, d.indexOf(bT(50)) >= 0 ? bY(67) : bW(53), bW(174), bX(42), encodeURIComponent(document.referrer), bX(66), bV(58), bU(37), b$()),
                    l[bX(25)] = d,
                    cP(m, l)),
                c[18] && (l = cL(bY(58), null, [bS(19), bW(25), bY(54), bY(36), bW(15), 0, bU(18), 0, bS(18), cm(100, bV(-2)), bS(21), cm(100, bZ(6))]),
                    l[cm(bY(218), cq(bT(214)))] = 0,
                    l[bX(219)] = bW(154),
                    cP(m, l),
                    d = l[cm(bT(96), cq(bW(123)))],
                    d && d[bU(107)] ? (d[bT(108)].write(cm(bW(91), cn(bZ(38), cm(bS(176), bW(41), '"', bY(22), bW(48), 100, bV(-2), ";", bX(24), bS(46), 100, bT(0), '"')), bY(94), bS(89), bZ(182), bY(94), bT(88), bX(28), bS(177), bS(90), bS(89), cn(bY(157), cm(bV(173), bZ(44), '"', bY(22), bX(49), 100, bT(0), ";", bV(18), bV(43), 100, bX(4), ";", bW(170), bV(43), bZ(91), ";", bS(40), bW(48), 0, '"')), bX(93), bZ(94), bX(222), bZ(75), bT(21), bT(38), '"', c[18], '"', bY(94), bV(86), bX(28), bY(223), bY(94), bZ(94), bS(25), bZ(158), bY(94), bV(86), bS(25), bV(30), bY(94))),
                        d[bU(107)].close(),
                        d[cm(bX(39), bW(14))] = b$(),
                        cf(function() {
                            var b, f = -1,
                                h = -1,
                                n, o, q = [],
                                r = [cm(cq(bV(-3)), cq(bZ(98))), cm(cq(bS(0)), cq(bT(100))), cm(cq(bV(-3)), cq(bT(193))), cm(cq(bY(4)), cq(bZ(268))), cm(cq(bU(-2)), cq(bT(145)), cq(bT(122))), cm(cq(bZ(5)), cq(bU(29)), cq(bY(127))), cm(cq(bU(-2)), cq(bW(28)), cq(bZ(128))), cm(cq(bZ(5)), cq(bX(267)), cq(bW(125))), cm(cq(bT(-1)), cq(bV(1)), cq(bT(27))), cm(cq(bV(-3)), cq(bW(6)), cq(bU(204)), cq(bW(150))), cm(cq(bS(0)), cq(bT(3)), cq(bV(262))), cm(cq(bS(0)), cq(bS(4)), cq(bW(209)), cq(bX(151))), cm(cq(bS(0)), cq(bV(1)), cq(bW(173))), cm(cq(bX(3)), cq(bU(58))), cm(cq(bZ(5)), cq(bU(56))), cm(cq(bV(-3)), cq(bX(207))), cm(cq(bT(-1)), cq(bY(11)), cq(bU(264))), cm(cq(bT(-1)), cq(bS(16)))];
                            if (s == a)
                                try {
                                    d = l[cm(bX(100), cq(bS(121)))];
                                    if (!d[cm(bX(40), cc(cm(ca(bZ(9), 0, 1), ca(bZ(13), 0, 2), bW(43))), cq(bX(3)))]) {
                                        if (d[cm(bT(35), bY(16))] && b$() - d[cm(bY(40), bW(14))] >= 5e3) {
                                            cj(c[21], 901),
                                                B.handle(bQ[27], cU([bT(8), a, bV(2), c[18], bU(14), 8])),
                                                u ? u() : di(a);
                                            return
                                        }
                                        cf(arguments.callee, 100);
                                        return
                                    }
                                    o = d[cm(bZ(42), cc(cm(ca(bX(7), 0, 1), ca(bU(6), 0, 2), bS(41))), cq(bY(4)))](),
                                        x = function(b, d, e, f) {
                                            if (!o || !b)
                                                return null;
                                            if (typeof o[b] == bT(28)) {
                                                e && f && (q[e] = !0,
                                                        cf(function() {
                                                            s == a && q[e] && (cj(c[21], 901),
                                                                B.handle(bQ[27], cU([bT(8), a, bY(9), c[18], bU(14), 8])),
                                                                u ? u() : di(a),
                                                                cr(e))
                                                        }, f)),
                                                    b != cm(bW(39), cq(bT(-1)), cq(bX(34))) && b != cm(bY(41), cq(bY(4)), cq(bS(174)), cq(bU(22))) && b != cm(bW(39), cq(bX(3)), cq(bZ(216)), cq(bU(210))) && cs(cn(cm(bS(103), cm(ca(bT(3), 0, 1), ca(bY(12), 0, 2), bV(38)), bS(104)), cm(bT(11), bT(45)), b));
                                                return o[b].apply(o, b_(d) ? d : [])
                                            }
                                            return null
                                        },
                                        k[a][20] = x,
                                        y = function(b) {
                                            return function() {
                                                var d, g, j;
                                                q[b] && delete q[b];
                                                if (s == a) {
                                                    cs(cn(cm(bZ(108), cm(ca(bZ(9), 0, 1), ca(bX(11), 0, 2), bS(41)), bS(104)), cm(bW(61), bZ(51)), b));
                                                    try {
                                                        b == r[0] ? x(cm(bW(30), cq(bW(2))), [], cm(cq(bW(2)), cq(bT(100))), (e[cp(bS(27), cm(bS(173), 2))] || 2) * 1e3) : b == r[1] ? (p = x(cm(bT(36), cq(bT(-1)), cq(bT(30)))) * 1e3,
                                                            cM(V),
                                                            cx(i, co(bY(6), ca(bX(90), 0, 2), bW(69))),
                                                            !c[7] && t && t(),
                                                            z || (z = !0,
                                                                cf(function() {
                                                                    B.handle(bQ[17], a)
                                                                }, 0)),
                                                            g = cm(bT(133), 0)) : b == r[2] ? (bD = !0,
                                                            u ? u() : di(a)) : b == r[3] ? (bD = !0,
                                                            u ? u() : di(a),
                                                            g = bX(41)) : b == r[4] ? x(cm(bS(37), cq(bT(-1)), cq(bX(149)))) || (u ? u() : di(a)) : b == r[5] ? p = x(cm(bY(41), cq(bX(3)), cq(bT(30)))) * 1e3 : b == r[6] ? (f = x(cm(bW(39), cq(bX(3)), cq(bW(28)))),
                                                            (h > 0 || h == -1) && f == 0 ? g = bT(109) : h == 0 && f > 0 && (g = bZ(180)),
                                                            h = f,
                                                            j = !0) : b == r[7] ? (g = n ? bT(51) : cm(bV(105), bY(56)),
                                                            j = !0) : b == r[8] ? g = cm(bW(3), 0) : b == r[9] ? g = cm(bT(0), 25) : b == r[10] ? g = cm(bT(0), 50) : b == r[11] ? g = cm(bS(1), 75) : b == r[12] ? g = cm(bV(-2), 100) : b == r[13] ? (g = bU(6),
                                                            j = !0,
                                                            cx(i, co(bV(-1), bU(-2), bV(57))),
                                                            cy(i, co(bX(5), bU(-2), bS(58)))) : b == r[14] ? (g = bZ(116),
                                                            j = !0,
                                                            cx(i, co(bX(5), bV(-3), bY(62))),
                                                            cy(i, co(bX(5), bT(-1), bX(63)))) : b == r[15] ? g = cm(bW(135), 0) : b == r[16] ? (arguments[2] && window.open(arguments[0] || c[1], cp(bW(1), bf ? bV(82) : bW(67))),
                                                            cf(function() {
                                                                B.handle(bQ[16], a)
                                                            }, 0),
                                                            g = bY(11),
                                                            j = !0) : b == r[17] && cj(c[21], 901)
                                                    } catch (k) {
                                                        cr(k)
                                                    }
                                                    if (g)
                                                        for (d = 0; d < b_(c[21]); d++)
                                                            c[21][d][bY(13)] == g && (j || !c[21][d][bU(0)]) && (ci(c[21][d][bY(9)]),
                                                                c[21][d][bZ(7)] = !0)
                                                }
                                            }
                                        };
                                    for (b = 0; b < b_(r); b++)
                                        x(bU(265), [y(r[b]), r[b]]);
                                    x(cm(bW(270), cq(bU(267))), [cm(2, bZ(67), 0)]),
                                        j = cL(bT(29), null, [bU(48), bV(29), bV(16), bS(23), bU(11), 0, bX(23), 0, bX(21), cm(100, bT(0)), bV(18), cm(100, bU(-1)), bX(43), 0]),
                                        g = c[13] || df(),
                                        cE(g, [bS(19), bV(20), bS(18), cm(100, bU(-1)), bY(25), cm(100, bZ(6)), bV(217), bT(220)]),
                                        B.listen(bQ[18], function(b) {
                                            s == a && (g.volume = b,
                                                x(cm(bV(267), cq(bY(4)), cq(bW(28))), [Math.round(g.volume * 100)]))
                                        }),
                                        B.listen(bQ[19], function(b) {
                                            s == a && (g.muted = b)
                                        }),
                                        B.listen(bQ[8], function() {
                                            s == a && (n = !0,
                                                x(cm(bU(176), cq(bX(3))), [0, 0, bS(52)]))
                                        }),
                                        B.listen(bQ[9], function() {
                                            s == a && (n = !1,
                                                x(cm(bY(182), cq(bU(-2))), [cB(m)[0], cB(m)[1], bX(225)]))
                                        }),
                                        c[13] = g,
                                        cP(m, g),
                                        cP(m, j),
                                        x(cm(bV(268), cq(bY(4))), [cB(m)[0], cB(m)[1], bT(221), 1e3, cU([cm(cq(bV(-3)), cq(bU(145))), c[19] || bV(-4)]), cU([bT(138), j, cm(bU(2), cq(bU(137))), g, cm(bV(1), cq(bU(137)), cq(bZ(277)), cq(bV(109)), cq(bY(59))), !0])], cm(cq(bW(2)), cq(bV(90))), (e[cp(bU(25), cm(bY(177), 1))] || 10) * 1e3)
                                } catch (v) {
                                    cj(c[21], 901),
                                        B.handle(bQ[27], cU([bY(13), a, bX(8), c[18], bW(18), 10])),
                                        u ? u() : di(a),
                                        cr(v)
                                }
                        }, 100)) : l = null),
                j || l || c[7] ? (s = a,
                    c[7] ? (cP(m, c[7]),
                        cE(c[7], [bS(13), cm(1e4, bX(17)), bW(22), cm(1e4, bS(14))]),
                        cf(function() {
                            cO(c[7]),
                                cX(c[7], c[7].parentNode, bY(141))
                        }, 0),
                        cx(i, co(bX(5), ca(bU(85), 0, 2), bV(64))),
                        t && t(),
                        z = !0,
                        cf(function() {
                            B.handle(bQ[17], a)
                        }, 0)) : (a == bT(5) || a == bZ(20) || a == cm(bZ(20), bX(11)) || a == bZ(49)) && cP(n, V),
                    cO(n),
                    cO(m)) : u && u()
        }
    }

    function dl(a, b, c) {
        var d = function(c) {
            B.handle(bQ[27], cU([bX(12), a, bU(14), 10, bT(4), c.message])),
                cr(c),
                by = !0,
                cg(n[a]),
                n[a] = null,
                typeof b == bU(27) && cf(function() {
                    b()
                }, 0)
        };
        try {
            a == bW(8) && (cM(_),
                    _ = null,
                    !bG && !c && (br = !0,
                        D.load(null, function() {
                            s == bW(8) ? D.pause(function() {
                                br = !1,
                                    bL && k[s][13] && k[s][13].paused && k[s][13].play()
                            }) : br = !1
                        }))),
                a == cm(bT(14), bY(12)) && (cM(ba),
                    ba = null);
            if (l[a]) {
                var f = cB(i),
                    g = 0,
                    h, j, p = l[a][m[a]],
                    q = b ? X : Z,
                    r = b ? Y : $,
                    t = [bS(18), f[0], bV(18), f[1], bT(260), window.location.hostname || bX(2), bS(61), b$(), bY(9), window.location.href || bT(-2), bZ(177), document.referrer || bW(1), bW(26), Math.floor(b$() / 1e3), bX(212), e[cp(bY(8), bW(211))] || bU(-3), bZ(215), e[cp(bV(1), bV(207))] || bY(3)],
                    u = function(c, d) {
                        cj(p[bS(35)], d),
                            m[a]++;
                        b_(l[a]) > m[a] ? dl(a, b, !0) : (B.handle(bQ[21], cU([bY(13), a, bS(5), p[bX(52)], bW(18), c])),
                            by = !0,
                            cg(n[a]),
                            n[a] = null,
                            typeof b == bV(26) && cf(function() {
                                b()
                            }, 0))
                    };
                k[a][13] = k[a][13] || df(),
                    o[a] || (o[a] = []);
                if (p[bV(46)] && o[a].indexOf(p[bW(51)]) == -1) {
                    o[a].push(p[bZ(54)]),
                        c && (be = null);
                    while (g < b_(t))
                        g <= b_(t) && (p[bW(51)] = p[bT(48)].replace(cp(bV(-4), bU(-3), t[g], bY(3), bU(-3)), encodeURIComponent(t[++g])),
                            g++);
                    s = a,
                        (a == bV(3) || a == bX(18) || a == cm(bZ(20), bW(10))) && cP(r, V),
                        cO(r),
                        cO(q),
                        cg(n[a]),
                        j = n[a] = cf(function() {
                            u(7, 301)
                        }, (e[cp(bT(26), cm(bX(176), 1))] || 10) * 1e3),
                        cl(p[bS(49)], function(c) {
                            cg(j);
                            if (n[a] == j)
                                try {
                                    B.handle(bQ[20], cU([bU(7), a, bX(8), p[bV(46)], bS(132), c]));
                                    var e, f, g, h;
                                    if (!c) {
                                        u(1, 100);
                                        return
                                    }
                                    e = cV(c);
                                    if (e && e[bW(29)]) {
                                        e = e[bU(25)],
                                            e[bV(13)] && (f = cW(e[bZ(21)])),
                                            e = e[bV(-3)],
                                            e && !cd(e) && (e = [e]);
                                        if (b_(e) > 0) {
                                            m[a]++;
                                            for (h = b_(e) - 1; h >= 0; h--)
                                                g = dk(a, e[h]),
                                                p[bZ(40)] && (g[bU(33)] = p[bU(33)].concat(g[bZ(40)] || [])),
                                                f && (g[bY(39)] = [cU([bS(9), bT(15), bU(3), f])].concat(g[bY(39)] || [])),
                                                l[a].splice(m[a], 0, g);
                                            dl(a, b, !0)
                                        } else
                                            u(2, 303)
                                    } else
                                        u(1, 101)
                                } catch (i) {
                                    d(i)
                                }
                        }, function() {
                            u(3, 301)
                        })
                } else {
                    be && a == bU(4) && (p[bU(118)] ? (cT(be, p[bT(119)]),
                        ds(be, p[bY(11)]),
                        be.getAttribute(co(bU(70), bS(7))) == bZ(22) && delete p[bS(7)]) : be = null);
                    if (p[bX(7)] || p[cm(ca(bV(1), 0, 1), ca(bW(151), 0, 2), bX(44))]) {
                        p[bS(4)] ? (k[a][0] = p[bV(1)],
                                k[a][12] = p[bS(35)],
                                p[bT(37)] ? k[a][9] = p[bY(42)] : k[a][9] = bY(3)) : (k[a][18] = p[cm(ca(bS(4), 0, 1), ca(bS(149), 0, 2), bX(44))],
                                k[a][21] = p[bW(37)],
                                k[a][19] = p[bX(150)] || bV(-4),
                                k[a][9] = bZ(4)),
                            p[bZ(12)] && (k[a][1] = p[bW(9)]),
                            k[a][2] = p[bS(31)],
                            k[a][3] = bS(-1);
                        for (g = 0; g < b_(p[bT(34)]); g++)
                            p[bZ(40)][g][bU(7)] == bY(92) && ci(p[bU(33)][g][bV(2)]);
                        k[a][14] = !0,
                            k[a][6] = !0,
                            h = !0
                    }
                    if (!h) {
                        u(2, 403);
                        return
                    }
                    dc(a),
                        cg(n[a]),
                        n[a] = null,
                        dm(a, b)
                }
            } else
                dm(a, b)
        } catch (v) {
            d(v)
        }
    }

    function dk(a, b) {
        var c = cU([bV(32), []]),
            d, e, f, g;
        b[bT(48)] && (c[bX(52)] = cW(b[bT(48)][cm(bT(26), bS(0), ca(bV(69), 2), ca(bU(33), 7), ca(bZ(10), 0, 2), ca(bY(124), 1, 2))])),
            b = b[bT(202)] || b[bZ(54)];
        if (b) {
            b[bU(14)] && c[bT(34)].push(cU([bW(11), bU(14), bX(8), cW(b[bV(13)])])),
                c[bV(117)] = cW(b[cm(bX(3), bU(118))]),
                d = b[bT(203)];
            if (d) {
                cd(d) || (d = [d]);
                for (g = 0; g < b_(d); g++)
                    e = cU([bT(8), cm(bS(133), 0), bU(3), cW(d[g])]),
                    e[bS(5)] && e[bX(8)].indexOf(cm(ca(bZ(37), 4, 5), ca(bT(12), 1, 2), ca(bV(58), 0, 2), ca(bX(120), 0, 2), ca(bV(20), 6, 8))) > 0 && (p[a] = !0),
                    c[bU(33)].push(e)
            }
            b = b[cm(bV(167), ca(bU(25), 2, 3))];
            if (b) {
                b = b[bX(173)];
                if (b) {
                    if (cd(b))
                        for (g = 0; g < b_(b); g++)
                            if (b[g][bX(149)]) {
                                b = b[g];
                                break
                            }
                    b = b[bW(148)];
                    if (b) {
                        c[bW(33)] = cY(cW(b[bX(34)])) || 10,
                            b[cm(bU(80), bS(83))] && (d = b[cm(bW(84), bW(85))][cm(bU(36), bT(204))] || bS(-1),
                                d.indexOf(bZ(6)) > 0 ? c[bS(38)] = parseInt(d) / 100 * c[bT(30)] : d && (c[bW(40)] = cY(d))),
                            d = b[cm(bW(6), bZ(12), ca(bT(26), 2, 3))];
                        if (d) {
                            c[bS(7)] = cW(d[cm(bV(4), bU(254))]),
                                d = d[cm(bW(9), bT(34))];
                            if (d) {
                                cd(d) || (d = [d]);
                                for (g = 0; g < b_(d); g++)
                                    c[bS(35)].push(cU([bZ(14), bZ(12), bU(3), cW(d[g])]))
                            }
                        }
                        d = b[cm(bX(3), bW(149))],
                            d && (c[bZ(152)] = cW(d)),
                            d = b[cm(bT(34), bS(59), ca(bU(25), 2, 3))];
                        if (d) {
                            d = d[bV(32)];
                            if (d) {
                                cd(d) || (d = [d]);
                                for (g = 0; g < b_(d); g++)
                                    if (d[g][cm(bY(86), bU(81))]) {
                                        e = d[g][cm(bS(82), bW(85))][bZ(64)];
                                        if (e) {
                                            switch (e) {
                                                case bW(30):
                                                    e = cm(bZ(6), 0);
                                                    break;
                                                case cm(bS(170), cq(bZ(262))):
                                                    e = cm(bU(132), 0);
                                                    break;
                                                case cm(bW(208), cq(bW(150))):
                                                    e = cm(bY(5), 25);
                                                    break;
                                                case cm(bZ(263), bW(261)):
                                                    e = cm(bU(-1), 50);
                                                    break;
                                                case cm(bS(207), cq(bZ(153))):
                                                    e = cm(bX(4), 75);
                                                    break;
                                                case bW(173):
                                                    e = cm(bX(4), 100);
                                                    break;
                                                case bT(51):
                                                    e = bV(49);
                                                    break;
                                                case cm(bU(106), cq(bX(55))):
                                                    e = cm(bZ(113), bS(52));
                                                    break;
                                                case bY(83):
                                                    f = d[g][cm(bS(82), bY(87))][bZ(210)],
                                                        f && f.indexOf(bS(1)) > 0 ? e = cm(bW(3), f.substr(0, f.indexOf(bZ(6)))) : f && f.indexOf(bU(60)) > 0 ? e = f.substr(0, f.indexOf(bS(62))) : e = f
                                            }
                                            c[bT(34)].push(cU([bU(7), e, bX(8), cW(d[g])]))
                                        }
                                    }
                            }
                        }
                        b = b[cm(bZ(172), bZ(213), ca(bS(27), 2, 3))];
                        if (b) {
                            b = b[cm(bW(169), bX(211))];
                            if (b) {
                                cd(b) || (b = [b]);
                                for (g = 0; g < b_(b); g++)
                                    d = b[g][cm(bX(85), bX(86))],
                                    d && (cb(d[cm(bS(66), ca(bS(54), 1), bY(264))] || bT(-2)) == cm(ca(bX(7), 0, 1), ca(bV(146), 0, 2), bT(40)) ? c[cm(ca(bU(2), 0, 1), ca(bX(152), 0, 2), bV(38))] = cW(b[g]) : cb(d[bY(13)] || bY(3)) == cm(bT(3), bT(24), bS(107)) && (c[bW(6)] = cW(b[g])))
                            }
                        }
                    }
                }
            }
        }
        return c
    }

    function dj(a) {
        if (a && s == a && k[a]) {
            var b = k[a][20],
                c = k[a][13];
            b ? c && !c.paused && b(cm(bT(7), cq(bU(-2)))) : c && (c.pause(),
                cx(i, co(bX(5), bW(2), bX(63))),
                cy(i, co(bZ(7), bX(3), bW(60))))
        }
    }

    function di(a) {
        a && s == a && (cT(k[a][7]) && cM(k[a][7]),
            k[a][13] && k[a][13].pause(),
            cN(_),
            cN(ba),
            cT(_, bX(2)),
            cT(ba, bZ(4)),
            cN(Y),
            cT(Y, bS(-1)),
            cN(X),
            cT(X, bV(-4)),
            cN($),
            cT($, bU(-3)),
            cN(Z),
            cT(Z, bX(2)),
            cy(i, co(bW(4), ca(bY(91), 0, 2), bS(67))),
            M && N && M.parentNode != G && cR(N, M),
            s = null)
    }

    function dh(a) {
        var b = bZ(49);
        k[b] = [a[cp(bZ(49), bS(22))] || bW(1), bY(3), bV(-4), bV(-4), bW(1), bY(3)],
            k[b][6] = !!k[b][0]
    }

    function dg(a, b) {
        if (!!a && !!b_(b)) {
            var c, d, e;
            for (c = 0; c < b_(b); c++) {
                if (b[c] == bU(26) && bs)
                    continue;
                k[b[c]] = [a[cp(bX(14), b[c], bU(20))] || bZ(4), a[cp(bT(10), b[c], bV(2))] || bY(3), a[cp(bS(11), b[c], bZ(36))] || bX(2), a[cp(bW(13), b[c], bS(33))] || bX(2), a[cp(bU(9), b[c], bS(33), bW(254))] || bU(-3), a[cp(bS(11), b[c], bX(36), bT(40))] || bY(3), !1, null, a[cp(bS(11), b[c], bV(28), bY(51))] || bT(-2), a[cp(bU(9), b[c], bW(40), bW(33))] || bV(-4), a[cp(bX(14), b[c], bU(36), bV(44))], a[cp(bZ(16), b[c], bX(41), bU(45), bU(22))],
                        [], null, !1, null, null, null, null, null, null, []
                    ],
                    k[b[c]][6] = !!(k[b[c]][0] || k[b[c]][3] || k[b[c]][5]),
                    k[b[c]][5] && (k[b[c]][7] = ct(k[b[c]][5]),
                        de(b[c], k[b[c]][7], document));
                if (a[cp(bX(14), b[c], bY(31))]) {
                    d = !0,
                        e = cb(navigator.userAgent),
                        e.indexOf(bS(253)) >= 0 && (e.indexOf(bS(254)) < 0 || e.indexOf(bY(259)) >= 0) && (bG = !0,
                            d = !1);
                    if (d) {
                        k[b[c]][0] = k[b[c]][1] = k[b[c]][2] = k[b[c]][3] = k[b[c]][4] = k[b[c]][5] = k[b[c]][7] = bT(-2),
                            l[b[c]] = [],
                            d = a[cp(bS(11), b[c], bV(24))].split("|");
                        for (e = 0; e < b_(d); e++)
                            l[b[c]].push(cU([bV(46), d[e]]));
                        m[b[c]] = 0;
                        if (a[cp(bT(10), b[c], bV(24), bV(163))]) {
                            d = a[cp(bU(9), b[c], bV(24), bZ(171))].split("|");
                            for (e = 0; e < b_(d); e++)
                                l[b[c]].push(cU([bW(51), d[e]]))
                        }
                        k[b[c]][6] = !0
                    }
                }
                b[c] == bT(5) && !bm && bH && B.handle(bQ[10]) == bU(15) && (bt ? (cy(i, co(bU(0), cm(bZ(62), bY(173)))),
                    cx(i, co(bY(6), cm(bV(54), bW(121)))),
                    B.handle(bQ[11])) : bs || (cM(_),
                    _ = dd(null, 160),
                    cF(_, bY(11), function(a) {
                        cK(a) == _ && (cI(a),
                            B.handle(bQ[11]))
                    }),
                    cP(F, _),
                    cO(_)))
            }
        }
    }

    function df() {
        var a = cL(bX(7), null, [bZ(55), bX(35)]);
        a.controls = !1,
            a.setAttribute(co(bX(254), bZ(207)), bW(19)),
            a.setAttribute(bX(205), bU(15)),
            a.muted = B.muted(),
            a.volume = B.volume() || ce(bW(28)) || .5,
            !bG && D && D.video && D.video.src && (a.src = D.video.src,
                a.load());
        return a
    }

    function de(a, b, c) {
        var d, e, f;
        if (!!a && !!b) {
            d = cz(b, co(bV(7), bS(66), bV(115), bV(25)));
            for (e = 0; e < b_(d); e++)
                cF(d[e], bY(11), function(a) {
                    _ ? B.handle(bQ[11]) : ba ? B.handle(bQ[23]) : B.toggle(),
                        cI(a)
                });
            d = cz(b, co(bT(9), bU(64), bU(116), bT(37)));
            for (e = 0; e < b_(d); e++)
                cF(d[e], bX(10), function(b) {
                    B.handle(bQ[26], a),
                        a == bS(6) ? (by = !0,
                            bD = !0,
                            B.handle(bQ[12])) : a == bZ(20) ? B.handle(bQ[15]) : a == cm(bU(13), bY(12)) && (by = !0,
                            bD = !0,
                            B.handle(bQ[24])),
                        cI(b)
                });
            d = cv(b, ca(bZ(53), 5, 6));
            for (e = 0; e < b_(d); e++)
                !cw(d[e], co(bS(10), bZ(71), bX(121), bX(31))) && !cw(d[e], co(bY(14), bY(70), bX(121), bY(42))) && (cF(d[e], bT(6), function() {
                        try {
                            cf(function() {
                                B.handle(bQ[16], a)
                            }, 0)
                        } catch (b) {}
                    }),
                    d[e][bX(76)] || (d[e][bT(72)] = cp(bZ(4), bf ? bU(83) : bU(63))));
            d = cv(b, bX(57)),
                b_(d) > 0 && c && setInterval(function() {
                    if (!f) {
                        var b = c.activeElement;
                        b && b.tagName == cc(bZ(59)) && (f = !0,
                            B.handle(bQ[16], a))
                    }
                }, 100)
        }
    }

    function dd(a, b) {
        var c = cL(bW(32), a, [bV(16), bX(26), bY(17), 0, bX(23), 0, bT(42), 0, bS(74), 0, bT(167), bU(84)]);
        b > 0 && cE(c, [cm(bY(147), cq(bZ(149))), b]),
            a || cE(c, [bX(204), bT(249)]),
            cF(c, cm(bZ(61), bS(145)), function(a) {
                a.stopPropagation()
            }),
            cN(c);
        return c
    }

    function dc(a) {
        var b = e[cm(ca(bS(84), 2), ca(bT(95), 9), ca(bZ(27), 2), ca(bW(86), 0, 1))],
            c = bV(-4),
            d, f = [],
            g = bZ(4),
            h, i;
        if (b) {
            c = ca(b, 0, 10),
                d = ca(D.conf[cm(ca(bZ(37), 4, 5), ca(bX(16), 1, 2), ca(bV(52), 3, 4))], 1),
                f.push(ca(c, d.length - c.length) + c),
                f.push(c + ca(c, 0, d.length - c.length)),
                g = bU(-3);
            for (i = 0; i < f.length; i++) {
                g = bT(-2);
                for (h = 0; h < d.length; h++) {
                    var j = parseInt(ca(d, h, h + 1)) + parseInt(ca(f[i], h, h + 1));
                    j >= 10 && (j -= 10),
                        g += bW(1) + j
                }
                d = g
            }
        }
        (!b || b != c + g || parseInt(c) < D[cm(ca(bT(28), 4, 6), ca(bT(166), 0, 2))]) && k[a] && k[a][6] && !p[a] && (k[a][18] ? k[a][6] = k[a][18] && k[a][18].indexOf(cm(ca(bV(29), 4, 5), ca(bZ(18), 1, 2), ca(bS(61), 0, 2), ca(bT(116), 0, 2), ca(bY(27), 6, 8))) > 0 : k[a][6] = k[a][1] && k[a][1].indexOf(cm(ca(bX(35), 4, 5), ca(bW(15), 1, 2), ca(bX(64), 0, 2), ca(bX(120), 0, 2), ca(bZ(28), 6, 8))) > 0)
    }

    function db() {
        bw && D && (cx(i, co(bU(0), bZ(205))),
            D.load({
                sources: [{
                    type: bw[1],
                    src: bw[0]
                }]
            }))
    }

    function da() {
        var a, b;
        if (z && b_(z) > 1) {
            S || (S = cL(ca(bZ(53), 7), co(bZ(8), bT(70))),
                    cR(M, S),
                    cF(S, bU(5), function(a) {
                        try {
                            if (z && b_(z) > 1) {
                                var b = cK(a),
                                    c;
                                if (b && b.hasAttribute(co(bU(70), bT(93)))) {
                                    cI(a),
                                        c = parseInt(b.getAttribute(co(bZ(77), bZ(99))));
                                    if (c && b_(z) >= c) {
                                        A = z[c - 1];
                                        if (B.handle(bQ[7], A[2]) != bV(14)) {
                                            if (!A[5]) {
                                                for (bq = b_(z) - 1; bq >= 0; bq--)
                                                    z[bq][5] = !1;
                                                A[5] = !0,
                                                    bw = A,
                                                    bx = Math.floor(D[bY(8)][bV(21)]),
                                                    D.playing ? (bo = !0,
                                                        D.pause(db)) : db(),
                                                    da()
                                            }
                                        } else
                                            D && D.playing && D.pause()
                                    }
                                    cy(i, co(bW(4), bU(69), bS(64)))
                                }
                            }
                        } catch (d) {}
                    })),
                cy(S, co(bW(4), bS(142))),
                cy(S, co(bS(2), bY(145))),
                T || (T = cL(bU(28), co(bZ(8), bU(69), bV(195))),
                    cP(S, T)),
                cT(T, bU(-3));
            for (bq = b_(z) - 1; bq >= 0; bq--)
                A = z[bq],
                a = cL(bT(29), co(bU(1), bU(69), bS(198), bU(197))),
                b = cL(ca(bV(45), 3, 4)),
                cT(b, A[2]),
                A[3] ? (b[bZ(50)] = A[0],
                    b[bU(71)] = cp(bT(-2), bf ? bZ(90) : bV(62)),
                    cF(b, bU(5), function(a) {
                        try {
                            D && D.playing && D.pause(),
                                cy(i, co(bY(6), bS(71), bY(68))),
                                B.handle(bQ[7], cT(cK(a))) == bZ(22) && cI(a)
                        } catch (b) {}
                    })) : b.setAttribute(co(bW(74), bU(92)), cm(bZ(4), bq + 1)),
                A[4] == 2 ? cx(a, co(bV(-1), bU(139))) : A[4] == 1 && cx(a, co(bX(5), bS(142))),
                A[5] && (cx(a, co(bU(0), bV(137))),
                    A[4] == 2 ? cx(S, co(bX(5), bY(145))) : A[4] == 1 && cx(S, co(bY(6), bX(145)))),
                cP(a, b),
                cP(T, a)
        } else
            S && (cM(S),
                S = T = null)
    }

    function c_(a) {
        cy(i, co(bV(-1), bV(81), bY(109))),
            a > 0 ? a < .25 ? cx(i, co(bS(2), bY(88), 25)) : a < .5 ? cx(i, co(bW(4), bX(87), 50)) : a < .75 && cx(i, co(bV(-1), bY(88), 75)) : cx(i, co(bY(6), bS(84), 0)),
            cE(Q, [bU(19), cm(parseInt(a * 100), bS(1))])
    }

    function c$(a) {
        z = [];
        if (!!a) {
            var b, c = cp(bV(1), bT(4)),
                d, e, f, g = !1,
                h = parseInt(a[cp(bU(195), bY(143))]) || 1,
                i, j;
            f = ce(cp(cm(bY(40), bW(14)), bZ(145), bX(97))),
                a[cp(bU(36), bV(137), bU(92))] == bU(15) && (f = null),
                a[bS(61)] && (i = b$(),
                    bF && (j = ce(cm(ch(), bV(133), bX(64))),
                        j && i - j < 36e5 && (i = j),
                        sessionStorage.setItem(cm(ch(), bX(139), bV(58)), i)));
            for (b = 0; b <= 7; b++)
                b > 0 && (c = cp(bY(8), bU(164), bW(7)),
                    b > 1 && (c += b)),
                a[c] && (d = a[c],
                    e = [d, d.toLowerCase().indexOf(cm(bT(61), bV(92))) > 0 ? cm(bT(3), bS(25), bW(118)) : cm(bT(3), bW(27), bU(105)), a[c + cp(bT(-2), bW(49))] || bV(-4), a[c + cp(bS(-1), bS(249))] || 0, (a[c + cp(bY(3), bW(143))] ? 2 : a[c + cp(bX(2), bV(139))] ? 1 : 0) || 0, f ? f == a[c + cp(bU(-3), bZ(52))] : !1],
                    i && (e[0] = cm(d, d.indexOf(bU(49)) >= 0 ? bY(67) : bZ(56), bV(58), bW(41), i)),
                    z.push(e),
                    e[5] && (g = !0,
                        e[3] && (e[5] = !1,
                            g = !1)));
            !g && b_(z) > 0 && (h > b_(z) && (h = 1),
                z[h - 1][5] = !0)
        }
    }

    function cZ(a) {
        function d(a) {
            a = parseInt(a, 10);
            return a >= 10 ? a : cm(0, a)
        }
        a = a || 0;
        var b = Math.floor(a / 3600),
            c = Math.floor(a / 60);
        a = a - c * 60;
        if (b >= 1) {
            c -= b * 60;
            return cm(b, bU(44), d(c), bU(44), d(a))
        }
        return cm(d(c), bY(50), d(a))
    }

    function cY(a) {
        if (a && typeof a.split == bT(28)) {
            a = a.split(bU(44));
            if (b_(a) == 3)
                return parseInt(a[0]) * 3600 + parseInt(a[1]) * 60 + parseInt(a[2]);
            if (b_(a) == 2)
                return parseInt(a[0]) * 60 + parseInt(a[1]);
            if (b_(a) == 1)
                return parseInt(a[0])
        }
        return 0
    }

    function cX(a, b, c) {
        if (!!a && !!b) {
            var d = cB(b),
                e, f, g;
            a.width && a.height ? (e = [a.width, a.height],
                    a.tagName && cb(a.tagName) == bY(58) && (e = cB(a))) : e = cB(a),
                c == bV(134) ? cE(a, [bU(17), bZ(28), bX(16), cm(50, bT(0)), bX(23), cm(50, bX(4)), bT(39), 0, cm(bZ(45), cq(bX(16))), cm(-e[0] / 2, bU(12)), cm(bY(44), cq(bU(18))), cm(-e[1] / 2, bY(18))]) : c == bS(138) ? e[0] / e[1] > d[0] / d[1] ? (f = e[1] * d[0] / e[0] / d[1] * 100,
                    cE(a, [bT(18), bZ(28), bZ(18), 0, bY(24), cm((100 - f) / 2, bS(1)), bX(21), cm(100, bZ(6)), bY(25), cm(f, bS(1)), bY(44), 0])) : (g = e[0] * d[1] / e[1] / d[0] * 100,
                    cE(a, [bY(23), bW(25), bV(10), cm((100 - g) / 2, bV(-2)), bT(19), 0, bZ(23), cm(g, bY(5)), bV(18), cm(100, bX(4)), bW(42), 0])) : cE(a, [bX(22), bU(21), bU(11), 0, bZ(25), 0, bW(20), cm(100, bU(-1)), bY(25), cm(100, bS(1)), bX(43), 0])
        }
    }

    function cW(a) {
        if (a)
            return a[cm(bW(138), bY(169))];
        return bW(1)
    }

    function cV(a) {
        var b = {},
            c, d, e = bZ(4),
            f = !1,
            g = 0,
            h = 0;
        if (!a)
            return b;
        if (a.nodeType == 1) {
            if (b_(a.attributes) > 0) {
                b[cm(bZ(87), bS(83))] = {};
                for (h = 0; h < b_(a.attributes); h++) {
                    var i = a.attributes.item(h);
                    b[cm(bX(85), bT(82))][cb(i.nodeName)] = i.nodeValue
                }
            }
        } else if (a.nodeType == 3 || a.nodeType == 4)
            return a.nodeValue;
        if (a.hasChildNodes()) {
            for (g = 0; g < b_(a.childNodes); g++) {
                c = a.childNodes.item(g),
                    d = cb(c.nodeName);
                if (c.nodeType == 3 || c.nodeType == 4)
                    e += (c.nodeValue || bX(2)).trim();
                else {
                    f = !0;
                    if (typeof b[d] == bX(134))
                        b[d] = cV(c);
                    else {
                        if (typeof b[d].push == bV(128)) {
                            var j = b[d];
                            b[d] = [],
                                b[d].push(j)
                        }
                        b[d].push(cV(c))
                    }
                }
            }
            f || (b[cm(bT(135), bX(168))] = e)
        }
        return b
    }

    function cU(a) {
        if (!b_(a))
            return {};
        var b = 0,
            c = {};
        while (b < b_(a))
            b <= b_(a) && (c[a[b]] = a[++b],
                b++);
        return c
    }

    function cT(a, b) {
        if (!a)
            return bV(-4);
        typeof b != bS(131) && (a.innerHTML = b);
        return a.innerHTML
    }

    function cS(a, b) {
        !!a && !!b && a.parentNode.insertBefore(b, a)
    }

    function cR(a, b) {
        !!a && !!b && a.parentNode.insertBefore(b, a.nextSibling)
    }

    function cQ(a, b) {
        !!a && !!b && b.parentNode != a && (a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b))
    }

    function cP(a, b) {
        !!a && !!b && b.parentNode != a && a.appendChild(b)
    }

    function cO(a) {
        !a || cE(a, [bT(49), bT(31)])
    }

    function cN(a) {
        !a || cE(a, [bX(53), bZ(111)])
    }

    function cM(a) {
        !!a && !!a.parentNode && a.parentNode.removeChild(a)
    }

    function cL(a, b, c) {
        var d = g.createElement(cc(a ? a : bZ(35)));
        b && (d[cm(bT(79), cq(bU(79)))] = b),
            cE(d, c);
        return d
    }

    function cK(a) {
        a = a || window.event;
        return a.srcElement || a.target
    }

    function cJ(a, b) {
        a = a || window.event;
        var c = a.clientX || (a.changedTouches ? a.changedTouches[0].clientX : 0),
            d = a.clientY || (a.changedTouches ? a.changedTouches[0].clientY : 0),
            e;
        if (b) {
            e = b.getBoundingClientRect();
            return [c - e.left, d - e.top]
        }
        return [c, d]
    }

    function cI(a) {
        a = a || window.event,
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        return !1
    }

    function cH(a, b, c) {
        if (!!a)
            for (var d = 0; d < b_(b); d++)
                cF(a, b[d], c)
    }

    function cG(a, b, c) {
        !a || !b || !c || (a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent(bT(134) + b, c))
    }

    function cF(a, b, c) {
        !a || !b || !c || (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent(bZ(140) + b, c) : a[bT(134) + b] = c,
            a == g && h.push([b, c]))
    }

    function cE(a, b) {
        if (!!a && !!b_(b)) {
            var c = 0,
                d = {};
            while (c < b_(b))
                c <= b_(b) && (d[b[c]] = b[++c],
                    c++);
            cD(a, d)
        }
    }

    function cD(a, b) {
        if (!!a && !!b)
            for (var c in b)
                a.style[c] = b[c]
    }

    function cC(a) {
        if (!a)
            return [0, 0];
        var b = 0,
            c = 0;
        if (a && a.offsetParent)
            while (a)
                b += a.offsetLeft,
                c += a.offsetTop,
                a = a.offsetParent;
        return [b, c]
    }

    function cB(a) {
        if (!a)
            return [0, 0];
        return [a.offsetWidth, a.offsetHeight]
    }

    function cA(a, b) {
        return cu(cz(a, b))
    }

    function cz(a, b) {
        var c = [],
            d = !0,
            e, f;
        if (!a || !b)
            return c;
        b.indexOf(bS(105)) > 0 && (b = ca(b, 0, b.indexOf(bY(109))),
                d = !1),
            e = cv(a, bS(105));
        for (f = 0; f < b_(e); f++)
            cw(e[f], b, !d) && c.push(e[f]);
        return c
    }

    function cy(a, b) {
        if (!!a)
            try {
                var c = a[cm(bU(78), cq(bW(83)))].split(bZ(75)),
                    d = bT(-2),
                    e = !1,
                    f;
                b.indexOf(bW(107)) > 0 && (b = ca(b, 0, b.indexOf(bT(104))),
                    e = !0);
                for (f = 0; f < b_(c); f++)
                    e && c[f].indexOf(b) !== 0 ? d += bV(67) + c[f] : !e && c[f] != b && (d += bX(73) + c[f]);
                a[cm(bU(78), cq(bU(79)))] = d.trim()
            } catch (g) {
                cs(g)
            }
    }

    function cx(a, b) {
        !a || cw(a, b, !1) || (b_(a[cm(bT(79), cq(bX(84)))]) == 0 ? a[cm(bX(83), cq(bU(79)))] = b : a[cm(bW(82), cq(bU(79)))] += bX(73) + b)
    }

    function cw(a, b, c) {
        if (!a)
            return !1;
        try {
            var d = a[cm(bV(77), cq(bZ(86)))].split(bY(74)),
                e;
            for (e = 0; e < b_(d); e++) {
                if (c && d[e].indexOf(b) === 0)
                    return !0;
                if (d[e] == b)
                    return !0
            }
        } catch (f) {
            cs(f)
        }
        return !1
    }

    function cv(a, b) {
        if (!a || !b)
            return [];
        return a.getElementsByTagName(b)
    }

    function cu(a) {
        if (b_(a) > 0)
            return a[0];
        return null
    }

    function ct(a, b) {
        b || (b = g);
        return b.getElementById(a)
    }

    function cs(a) {
        bC[bT(44)].indexOf(cm(bS(12), bZ(253), bV(36), bS(17))) > 0 && console && typeof console.log == bU(27) && console.log(a)
    }

    function cr(a) {
        console && typeof console.error == bV(26) && console.error(a)
    }

    function cq() {
        var a = Array.prototype.slice.call(arguments),
            b;
        for (b = 0; b < b_(a); b++)
            a[b] = cc(a[b].charAt(0)) + a[b].slice(1);
        return a.join(bW(1))
    }

    function cp() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bZ(139))
    }

    function co() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bY(137))
    }

    function cn() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bY(74))
    }

    function cm() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bX(2))
    }

    function cl(a, b, c) {
        if (!!a && !!b) {
            var d = new XMLHttpRequest;
            d.withCredentials = !0,
                d.onreadystatechange = function() {
                    this.readyState === 4 && (this.status >= 400 ? c && c() : b(this.responseXML))
                },
                d.open(bT(36), a, !0),
                d.send()
        }
    }

    function ck(a, b, c) {
        if (!!a && !!b) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                    this.readyState === 4 && (this.status >= 400 ? c && c() : b(this.responseText))
                },
                d.open(bW(39), a, !0),
                d.send()
        }
    }

    function cj(a, b) {
        if (a) {
            b || (b = 900);
            for (var c = 0; c < b_(a); c++)
                a[c][bX(12)] == bY(20) && a[c][bV(2)] && ci(a[c][bT(4)].replace(cm(bY(107), cc(bZ(21)), cc(bS(132)), bS(104)), b))
        }
    }

    function ci(a) {
        a && ((new Image).src = a)
    }

    function ch(a) {
        a && (window.top ? window.top.location = a : window.location = a);
        return window.location
    }

    function cg(a) {
        a && clearTimeout(a)
    }

    function cf(a, b) {
        if (a)
            return setTimeout(a, b);
        return null
    }

    function ce(a) {
        var b = null;
        try {
            bF && (b = localStorage.getItem(a),
                b || (b = sessionStorage.getItem(a)))
        } catch (c) {}
        b || (b = bS(-1));
        return b
    }

    function cd(a) {
        return a && Array.isArray(a)
    }

    function cc(a) {
        if (a && typeof a.toUpperCase == bY(33))
            return a.toUpperCase();
        return bV(-4)
    }

    function cb(a) {
        if (a && typeof a.toLowerCase == bZ(34))
            return a.toLowerCase();
        return bY(3)
    }

    function ca(a, b, c) {
        if (a && typeof a.substring == bX(32))
            return a.substring(b, c);
        return bT(-2)
    }

    function b_(a) {
        if (a)
            return a.length;
        return 0
    }

    function b$() {
        return (new Date).getTime()
    }

    function bZ(a) {
        return f[a - 4]
    }

    function bY(a) {
        return f[a - 3]
    }

    function bX(a) {
        return f[a - 2]
    }

    function bW(a) {
        return f[a - 1]
    }

    function bV(a) {
        return f[a + 4]
    }

    function bU(a) {
        return f[a + 3]
    }

    function bT(a) {
        return f[a + 2]
    }

    function bS(a) {
        return f[a + 1]
    }
    var f = ["", "ad", "%", "is", "fp", "video", "url", "pre", "click", "pause", "type", "kt", "adv", "player", "left", "px", "post", "error", "true", "width", "position", "top", "height", "src", "absolute", "time", "/", "volume", "vast", "start", "function", "div", "duration", "block", "html", "logo", "tracking", "kvs", "get", "skip", "=", "margin", "id", "timeline", "bottom", "related", "href", ":", "text", "metadata", "wrapper", "display", "?", "fullscreen", "roll", "iframe", "play", "touch", "mouse", "playing", "event", "paused", "rnd", ".", "&", "open", "blank", "api", "visible", "screen", "advertising", " ", "settings", "data", "target", "right", "ui", "hide", "embed", "reporting", "progress", "class", "name", "@", "attributes", "vol", "parent", "hidden", "adzone", "load", "<", ">", "popunder", "false", "loaded", "format", "flv", "controlbar", "content", "float", "key", "preview", "started", "full", "[", "]", "*", "none", "mp4", "exit", "document", "mute", "resume", "auto", "preload", "screens", "down", "flash", "elapsed", "btn", "over", "title", "window", "visibility", "change", "css", "m", "subtitles", "stream", "flowplayer", "finished", "muted", "undefined", "code", "-", "_", "on", "#", "preserve", "match", "slot", "selected", "4k", "hd", "z", "index", "end", "linear", "parameters", "quartile", "padding", "img", "catch", "no", "body", "transition", "string", "ads", "fade", "poster", "controls", "stop", "waiting", "engine", "protect", "before", "value", "alt", "media", "overflow", "out", "creative", "complete", "referer", "timeout", "remaining", "unmute", "style", "head", "resize", "tooltip", "brand", "clip", "after", "autoplay", "splash", "native", "ready", "seek", "up", "move", "link", "sec", "em", "skin", "stopped", "show", "test", "default", "list", "item", "loading", "background", "playsinline", "inline", "impression", "offset", "first", "third", "file", "categories", "tags", "skippable", "state", "fill", "frame", "border", "scrolling", "focus", "scroll", "script", "cursor", "pointer", "normal", "replay", "cuepoint", "relative", "swf", "lang", "loop", "cuepoints", "finish", "seeking", "a", "disable", "level", "vertical", "dragging", "ga", "gtag", "location", "scrolled", "changing", "activated", "deactivated", "changed", "object", "array", "storage", "debug", "redirect", "transparent", "webkit", "adaptive", "ucbrowser", "windows", "mobile", "through", "view", "mid", "point", "work", "domain", "container", "skipped", "size", "midpoint", "thru", "subscribe", "handshake", "version", "set", "init", "can", "anchor", "urls", "in", "same", "context", "menu", "textarea", "ratio", "license", "kind", "en", "thumbnails", "webp", "interval", "count", "basic", "image", "blur", "help", "fixed", "slider", "unload", "only", "close", "flow", "send", "category", "label", "configuration", "http", "white", "dark", "rel", "stylesheet"],
        g = document,
        h = [],
        i = ct(a),
        j = {},
        k = {},
        l = {},
        m = {},
        n = {},
        o = {},
        p = {},
        q, r, s, t, u, v = {},
        w, x, y, z = [],
        A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx = 0,
        by, bz, bA, bB = -1,
        bC = window[bW(241)],
        bD = !0,
        bE = window[bU(126)] && window[bS(128)].support ? window[bZ(133)].support : {},
        bF = !1,
        bG = bE.autoplay || !1,
        bH = bE.inlineVideo || !1,
        bI = bE.flashVideo || !1,
        bJ = bE.touch || !1,
        bK = bE.volume || !1,
        bL = bE.iphone || !1,
        bM = !1,
        bN = !1,
        bO, bP, bQ = [cm(bZ(15), cq(bT(11)), cq(bW(95))), cm(bT(9), cq(bV(1)), cq(bY(105))), cm(bZ(15), cq(bX(7)), cq(bS(60))), cm(bT(9), cq(bW(6)), cq(bZ(199))), cm(bT(9), cq(bT(3)), cq(bX(243))), cm(bW(12), cq(bV(1)), cq(bW(81))), cm(bW(12), cq(bT(3)), cq(bW(131))), cm(bY(14), cq(bZ(9)), cq(bY(98)), cq(bY(245))), cm(bY(14), cq(bS(102)), cq(bY(72)), cq(bV(239))), cm(bY(14), cq(bS(102)), cq(bX(71)), cq(bW(245))), cm(bS(10), cq(bT(5)), cq(bS(53)), cq(bT(163))), cm(bW(12), cq(bU(4)), cq(bZ(58)), cq(bX(104))), cm(bS(10), cq(bT(5)), cq(bU(51)), cq(bX(132))), cm(bW(12), cq(bX(18)), cq(bX(56)), cq(bW(166))), cm(bZ(15), cq(bY(19)), cq(bW(55)), cq(bW(103))), cm(bT(9), cq(bY(19)), cq(bS(53)), cq(bZ(134))), cm(bS(10), cq(bY(73)), cq(bX(10))), cm(bS(10), cq(bV(66)), cq(bX(198))), cm(bW(12), cq(bZ(31)), cq(bW(246))), cm(bY(14), cq(bT(25)), cq(bT(129))), cm(bU(8), cq(bY(31)), cq(bV(90))), cm(bU(8), cq(bS(27)), cq(bX(19))), cm(bT(9), cq(cm(bV(12), bV(5))), cq(bY(57)), cq(bS(164))), cm(bT(9), cq(cm(bX(18), bV(5))), cq(bZ(58)), cq(bS(101))), cm(bU(8), cq(cm(bV(12), bU(6))), cq(bV(50)), cq(bX(132))), cm(bX(13), cq(bW(6)), cq(bZ(21))), cm(bS(10), cq(bW(71)), cq(bT(37))), cm(bS(10), cq(bY(73)), cq(bZ(21)))];
    typeof String.prototype.trim != bT(28) && (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, bU(-3))
        }),
        Array.isArray || (Array.isArray = function(a) {
            return Object.prototype.toString.call(a) === cn(cm(bZ(108), bX(248)), cm(cq(bS(246)), bT(103)))
        });
    if (typeof Storage !== bW(133))
        try {
            localStorage.setItem(cp(cm(bS(36), bX(15)), bW(198), bX(250)), bS(196)),
                bF = !0
        } catch (bR) {}
    cT(i, bV(-4)),
        e[bZ(82)] == 0 && (e[bZ(82)] = bZ(97)),
        e[bU(75)] == 1 && (e[bW(79)] = bW(19));
    for (w in e)
        typeof e[w] != bZ(160) && (e[w] = cm(bZ(4), e[w])),
        cs(cn(cm(bY(107), bT(300), bU(102)), w, bS(39), e[w]));
    if (!this[cm(bU(34), bX(15))]) {
        w = e[bV(190)];
        if (w != bY(237)) {
            if (!w || w.indexOf(bV(299)) < 0 || w.indexOf(cm(bZ(30), bU(23))) < 0)
                if (b) {
                    if (!w || w.indexOf(cm(bT(61), bU(122))) <= 0)
                        e[bX(196)] == 2 ? w = cm(bU(301), bZ(67), bW(126)) : w = cm(bV(301), bY(66), bZ(129));
                    w = cm(ca(b, 0, b.lastIndexOf(bT(24))), bV(22), bY(197), bW(27), w)
                }
            E = cL(bY(194)),
                E.setAttribute(bS(305), bS(306)),
                E.setAttribute(bS(9), cm(bW(49), bS(25), bT(123))),
                E.setAttribute(bT(44), w),
                cP(cu(cv(g, bV(174))), E)
        }
    }
    e[cp(bT(162), bX(35))] && (C = cL(bV(51)),
            cF(C, bU(86), function() {
                bN = !0
            }),
            C[bT(20)] = cm(1, bU(12)),
            C[bY(22)] = cm(1, bX(17)),
            C[bT(40)] = cp(bY(160), bU(52)),
            C[cm(bS(80), cq(bW(83)))] = co(bW(158), bY(58)),
            C[bX(25)] = cm(e[cp(bV(160), bX(35))], bU(49), cp(bX(72), bX(44)), bS(39), Math.random(), bS(63), cp(bY(91)), bV(36), Math.random()),
            cE(C, [bW(21), bT(22), bW(15), cm(-10, bT(13)), bZ(25), cm(-10, bZ(19))]),
            cP(i, C)),
        B = {
            container: function() {
                return i
            },
            listen: function(a, b) {
                if (!a || !b || typeof b != bU(27))
                    return this;
                this.a || (this.a = {}),
                    this.a[a] || (this.a[a] = []),
                    this.a[a].push(b);
                return this
            },
            handler: function(a) {
                if (!a || typeof a != bT(28))
                    return this;
                this.b || (this.b = []),
                    this.b.push(a);
                return this
            },
            handle: function(a, b) {
                var c, d, e, f;
                if (this.b)
                    for (d = 0; d < b_(this.b); d++)
                        try {
                            f = this.b[d](a, b),
                                f && (e = f)
                        } catch (g) {}
                if (this.a) {
                    c = this.a[a];
                    if (c)
                        for (d = 0; d < b_(c); d++)
                            try {
                                f = c[d](b),
                                    f && (e = f)
                            } catch (g) {}
                }
                return e
            },
            play: function(a) {
                if (D)
                    if (_)
                        this.handle(bQ[11]);
                    else if (ba)
                    this.handle(bQ[23]);
                else {
                    if (s == bY(10) || s == bU(13) || s == cm(bU(13), bT(7)))
                        return;
                    a ? (typeof a == bW(157) && (z = [
                                [a, a.indexOf(cm(bU(60), bS(95))) > 0 ? cm(bY(8), bS(25), bU(114)) : cm(bS(4), bW(27), bU(105)), bW(1), 0, 0, !0]
                            ],
                            bw = z[0]),
                        D.playing ? D.pause(db()) : db(),
                        da()) : D.ready ? D.resume() : D.load()
                }
            },
            pause: function() {
                if (D) {
                    if (s == bS(6) || s == bU(13) || s == cm(bW(17), bS(8)))
                        return;
                    D.pause()
                }
            },
            toggle: function() {
                if (D)
                    if (_)
                        this.handle(bQ[11]);
                    else if (ba)
                    this.handle(bQ[23]);
                else {
                    if (s == bS(6) || s == bZ(20) || s == cm(bY(19), bS(8)))
                        return;
                    cy(i, co(bV(-1), bX(63))),
                        D.toggle()
                }
            },
            skip_preroll: function() {
                s == bX(9) && this.handle(bQ[12])
            },
            skip_postroll: function() {
                (s == bX(18) || s == cm(bT(14), bV(5))) && this.handle(bQ[15])
            },
            fullscreen: function() {
                D && D.fullscreen()
            },
            volume: function(a) {
                if (D) {
                    a && D.volume(a);
                    return D.volumeLevel
                }
                return 1
            },
            mute: function(a) {
                D && D.mute(a)
            },
            muted: function() {
                if (D)
                    return D.muted;
                return !1
            },
            seek: function(a) {
                a = parseInt(a);
                if (D && a > 0)
                    if (_)
                        bh = a,
                        this.handle(bQ[11]);
                    else if (ba)
                    bh = a,
                    this.handle(bQ[23]);
                else {
                    if (s == bS(6) || s == bU(13) || s == cm(bW(17), bW(10)))
                        return;
                    D.ready ? (D.seek(a),
                        D.resume()) : D.load(null, function() {
                        D.seek(a)
                    })
                }
            },
            unload: function() {
                if (D) {
                    var a = cA(i, co(bU(1), bY(166)));
                    a && a.canPlayType && (a.autoplay = !1,
                            a.preload = bS(106),
                            a.src = null),
                        D.disable(),
                        D.shutdown()
                }
                if (b_(h))
                    for (var b = 0; b < b_(h); b++)
                        cG(g, h[b][0], h[b][1]);
                cO(Y)
            },
            fpapi: function() {
                return D
            }
        },
        B.conf = e,
        this[cm(bZ(41), bZ(17))] || (this[cm(bV(33), bU(10))] = {}),
        this[cm(bT(35), bZ(17))][a] && this[cm(bW(38), bU(10))][a].unload(),
        this[cm(bX(39), bY(16))][a] = B,
        i && cf(dv, 0);
    return B
}