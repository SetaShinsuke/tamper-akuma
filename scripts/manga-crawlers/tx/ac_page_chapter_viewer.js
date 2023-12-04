/*
 *      create: 2014.12.24
 *      owner : rusherwang
 *      update: 2015.12.03
 */
! function (W, _v) {
  document.domain = 'qq.com';

  // Dont allow phamtomjs
  try {
    var ScrollTo = window['scrol' + 'lTo']
    window['scrol' + 'lTo'] = null
    HTMLObjectElement.prototype['scrol' + 'lInt' + 'oView'] = null
  } catch (e) {

  }

  var protocol = ("https:" === document.location.protocol ? "https:" : "http:"), // 协议头
    cssCore = function (testCss) {
      switch (true) {
        case testCss.webkitTransition === '':
          return 'webkit';
          break;
        case testCss.MozTransition === '':
          return 'Moz';
          break;
        case testCss.msTransition === '':
          return 'ms';
          break;
        case testCss.OTransition === '':
          return 'O';
          break;
        default:
          return '';
      }
    }(document.createElement('ComicView').style),
    translate = function (core) {
      if (core !== '') {
        return function (o, x, y) {
          o[cssCore + 'Transform'] = 'translate(' + x + 'px,' + y + 'px) translateZ(0)';
        }
      } else {
        return function (o, x, y) {
          o.left = x + 'px';
          o.top = y + 'px';
        }
      }
    }(cssCore),
    animationFrame = function () {
      var lastTime = 0,
        i = 0,
        vendors = ['webkit', 'moz', 'ms'],
        len = vendors.length;
      for (; i < len && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] ||
          window[vendors[i] + 'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame || !cancelAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
          var currTime = +new Date,
            timeToCall = Math.max(0, 16.7 - currTime + lastTime),
            id = window.setTimeout(function () {
              callback(currTime + timeToCall);
            }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        }
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        }
      }
    }(),
    ajax = {
      _createXMLHttpRequest: function (oldVersion, newVersion) {
        return function () {
          if (oldVersion) {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } else if (newVersion) {
            return new XMLHttpRequest();
          }
        }
      }(window.ActiveXObject, window.XMLHttpRequest),
      get: function (settings) {

        // 加一层防止发请求的封装
        if (settings.url.indexOf('User') !== -1 && !cookie('access_token')) {
          settings.callback('{"status":-99,"state":-99}');
          return;
        }

        var xhr = this._createXMLHttpRequest(),
          data = settings.data || '',
          async = settings.async || true;
        xhr.open('GET', settings.url, async);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            settings.callback(xhr.responseText);
          }
        }
        xhr.send(data);
      },
      post: function (settings) {
        var xhr = this._createXMLHttpRequest(),
          data = settings.data || '';
        if (data) {
          data = data.replace(/\+/g, "%2B");
        }
        xhr.open('POST', `settings`.url);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            if (typeof settings.callback === 'function') {
              if (settings.argu) {
                settings.callback(xhr.responseText, settings.argu);
              } else {
                settings.callback(xhr.responseText);
              }
            }
          }
        }
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
      }
    },
    addClass = function (o, cls) {
      if (!o) return;
      var oN = o.className;

      if (oN.indexOf(cls) === -1) {
        o.className = oN + ' ' + cls;
      }
    },
    removeClass = function (o, cls) {
      if (!o) return;
      var oN = o.className,
        arrName,
        arrNow;

      if (oN.indexOf(cls) === -1) return;
      arrName = oN.split(' ');
      arrNow = arrName.length;
      while (arrNow--) {
        if (arrName[arrNow] === cls) {
          arrName.splice(arrNow, 1);
        }
      }
      o.className = arrName.join(' ');
    },
    $$ = function (s) {
      return document.getElementById(s);
    },
    onHover = function (o, overfn, outfn) {
      if (!o) return;
      o.onmouseover = function (e) {
        overfn(e);
      }
      o.onmouseout = function (e) {
        outfn(e);
      }
    },
    docEle = document.documentElement,
    on = function () {
      if (window.addEventListener) {
        return function (o, e, f) {
          if (!o) return;
          o.addEventListener(e, f, false);
        }
      } else if (window.attachEvent) {
        return function (o, e, f) {
          if (!o) return;
          o.attachEvent('on' + e, f);
        }
      } else {
        if (!o) return;
        o['on' + e] = f;
      }
    }(),
    off = function () {
      if (window.removeEventListener) {
        return function (o, e, f) {
          if (!o) return;
          o.removeEventListener(e, f, false);
        }
      } else if (window.detachEvent) {
        return function (o, e, f) {
          if (!o) return;
          o.detachEvent('on' + e, f);
        }
      } else {
        if (!o) return;
        o['on' + e] = null;
      }
    }(),
    Fade = function (t) {
      var setOpacity;
      if (t.opacity === '') {
        setOpacity = function (o, value) {
          o.opacity = value;
        }
      } else {
        setOpacity = function (o, value) {
          o.filter = 'alpha(opacity=' + 100 * value + ')';
        }
      }
      return function (o, from, to, time) {
        if (!o) return;
        var os = o.style,
          timeStamp = +new Date,
          end = timeStamp + time,
          opacityDiff = to - from,
          _fade = function () {
            var diff = new Date - timeStamp,
              percent = ~~(diff / time * 100) / 100,
              opacityNow = from + opacityDiff * percent;

            if (opacityNow > 1) {
              opacityNow = 1;
            } else if (opacityNow < 0) {
              opacityNow = 0;
            }

            if (percent >= 1) {
              setOpacity(os, to);
              return 0;
            }
            setOpacity(os, opacityNow);
            return 1;
          },
          _requestFade = function () {
            requestAnimationFrame(function () {
              if (_fade()) _requestFade();
            });
          }
        setOpacity(os, from);
        _requestFade();
      }
    }(document.createElement('ComicView').style),
    osWidth = docEle.clientWidth ||
      window.innerWidth,
    osHeight = docEle.clientHeight ||
      window.innerHeight,
    isIE = function (ua) {
      return ua.indexOf('MSIE') !== -1;
    }(navigator.userAgent),
    isMac = function (ua) {
      return ua.indexOf('Mac OS') !== -1;
    }(navigator.userAgent),
    isLocalStorageNameSupported = function () {
      try {
        var local = 'localStorage' in window && window['localStorage'];
        local.setItem('__AC__', '1');
        local.removeItem('__AC__');
        return local ? true : false;
      } catch (e) {
        return false;
      }
    }(),
    mobileDevice = function (ua) {
      return ua.indexOf('iPad') !== -1 ||
        ua.indexOf('iPhone') !== -1 ||
        ua.indexOf('Android') !== -1;
    }(navigator.userAgent),
    mouse = {
      down: mobileDevice ? 'touchstart' : 'mousedown',
      move: mobileDevice ? 'touchmove' : 'mousemove',
      up: mobileDevice ? 'touchend' : 'mouseup',
      click: mobileDevice ? 'touchend' : 'click'
    },
    makeArray = function (obj) {
      return Array.prototype.slice.call(obj, 0);
    },
    mainView = $$('mainView'),
    body = document.body || document.getElementsByTagName('body')[0],
    checkScrollChange = function () {
      return cssCore && mainView && !isIE
    }(),
    getScrollTop = function (f) {
      if (!f) {
        mainView.style.height = 'auto';
        return function () {
          return docEle.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        }
      } else {
        ScrollTo = function (x, y) {
          mainView.scrollTop = y;
        }
        return function () {
          return mainView.scrollTop;
        }
      }
    }(checkScrollChange);
  try {
    Array.prototype.slice.call(docEle.childNodes, 0)[0].nodeType;
  } catch (e) {
    makeArray = function (obj) {
      var res = [],
        len = obj.length,
        i = 0;
      for (; i < len; ++i) {
        res.push(obj[i]);
      }
      return res;
    }
  };

  if (cssCore !== '') {
    var _userAgents = navigator.userAgent;
    if (_userAgents.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
      var ctrl_list = $$("ctrl_list");
      ctrl_list && (ctrl_list.style.paddingBottom = "60px");
    }
    transToX = function (o, x, t, fn, n) {

      var s = o.style,
        c = 'translate(' + x + 'px, 0) translateZ(0)';

      s[cssCore + 'TransitionDuration'] = t + 'ms';
      s[cssCore + 'Transform'] = c;
      if (fn && n === nowPage) {
        switch (cssCore) {
          case 'webkit':
            o.addEventListener('webkitTransitionEnd', fn, false);
            break;
          case 'Moz':
            o.addEventListener('transitionend', fn, false);
            break;
          case 'ms':
            o.addEventListener('MSTransitionEnd', fn, false);
            break;
          default:
            setTimeout(fn, t);
            break;
        }
      }
    }

    transToY = function (o, y, t) {
      var s = o.style,
        c = 'translate(0,' + y + 'px) translateZ(0)';

      s[cssCore + 'TransitionDuration'] = t + 'ms';
      s[cssCore + 'Transform'] = c;
    }
  } else {

    transToX = function (o, x, t, fn, n) {
      // 禁用
      return;
      // var cs = o.currentStyle,
      //     s = o.style,
      //     cx = parseInt(s.left || cs.left || 0, 10),
      //     dx = x - cx,
      //     ft = +new Date,
      //     end = ft + t,
      //     pos = 0,
      //     diff,
      //     _trans = function () {
      //         if (+new Date > end) {
      //             s.left = x + 'px';
      //             return 0;
      //         } else {
      //             diff = end - new Date;
      //             pos = 1 - diff / t;
      //             s.left = (cx + dx * pos) + 'px';
      //             return 1;
      //         }
      //     },
      //     _requestTrans = function () {
      //         requestAnimationFrame(function () {
      //             if (_trans()) _requestTrans();
      //         });
      //     }
      // _requestTrans();
      // if (fn && n === nowPage) setTimeout(fn, t + 500);
    }

    transToY = function (o, y, t) {
      // 这是坑
      if (o.currentStyle.top === 'auto') o.style.top = '0px';

      var cs = o.currentStyle,
        s = o.style,
        cy = parseInt(s.top || cs.top || 0, 10),
        dy = y - cy,
        ft = +new Date,
        end = ft + t,
        pos = 0,
        diff,
        _trans = function () {
          if (+new Date > end) {
            s.top = y + 'px';
            return 0;
          } else {
            diff = end - new Date;
            pos = diff / t;
            s.top = (cy + dy * (1 - pos * pos)) + 'px';
          }
          return 1;
        },
        _requestTrans = function () {
          requestAnimationFrame(function () {
            if (_trans()) _requestTrans();
          });
        }

      _requestTrans();
    }
  }

  // 点击流统计
  var sendPgv = function (pgvName) {
    try {
      pgvSendClick({ statIframe: true, hottag: encodeURIComponent(pgvName) });
    } catch (e) {
      console.log(e);
    }
  },
    hotPgv = function (id, pgvName) {
      var o = $$(id);
      on(o, mouse.down, function () {
        sendPgv(pgvName);
      });
    };

  // 为手机端或者平板添加类
  if (mobileDevice) {
    addClass(body, 'mobile-device');
  }

  // 百度SEO
  !(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?f179d8d1a7d9619f10734edb75d482c4";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  // 风格(开灯)
  ! function () {
    var viewTheme = cookie('theme'),
      themeControl = $$('themeControl'),
      themeChild = themeControl.children,
      uav = $$('userAvatar'),
      //rav = $$('roastAvatar'),
      assignSysAvatar = function (theme) {
        if (theme === 'dark') {
          if (!W.USER) {
            uav.src = '//ac.gtimg.com/media/images/ac_chapter_avatar.jpg';
          }
        } else {
          if (!W.USER) {
            uav.src = '//ac.gtimg.com/media/images/ac_chapter_avatar_white.jpg';
          }
        }
      },
      changeTheme = function (newTheme) {
        var oldTheme = viewTheme;
        viewTheme = newTheme;
        cookie('theme', newTheme, { path: '/', expires: 30 });
        removeClass(body, 'theme-' + oldTheme);
        addClass(body, 'theme-' + newTheme);
        if (newTheme === 'white') {
          themeChild[1].innerHTML = '\u5173\u706f';
          assignSysAvatar('white');
        } else {
          themeChild[1].innerHTML = '\u5f00\u706f';
          assignSysAvatar('dark');
        }
        sendPgv('NEW.AC_VIEW.NEWEVENT.' + newTheme.toUpperCase());
      };

    if (viewTheme !== 'white' && viewTheme !== 'dark') {
      viewTheme = Math.random() >= .5 ? 'white' : 'dark';
      changeTheme(viewTheme);
    }
    // 【20220720】不需要页面进入时上报点击事件（详情咨询: thorwang）
    // setTimeout(function() {
    //     sendPgv('NEW.AC_VIEW.NEWEVENT.' + viewTheme.toUpperCase());
    // }, 3000);
    if (viewTheme === 'white') {
      removeClass(body, 'theme-dark');
      addClass(body, 'theme-white');
      themeChild[1].innerHTML = '\u5173\u706f';
    }

    assignSysAvatar(viewTheme);

    on(themeControl, mouse.click, function () {
      if (viewTheme === 'white') {
        changeTheme('dark');
      } else {
        changeTheme('white');
      }
    })
  }();

  // 对页模式
  var crossPage = +cookie('crossPage'),
    cp = $$('crossPage'),
    roastBarShrink = $$('roastBarShrink'),
    roastBarWrap = $$('roastBarWrap');
  if (crossPage) {
    addClass(document.body, 'cross-page');
    addClass(document.body, 'roast-right');
    //addClass(roastBarShrink, 'roast-bar-shrink');
    on(cp, mouse.click, function () {
      cookie('crossPage', '0', { expires: 10, path: '/' });
      window.location.reload();
    });
    cp.children[1].innerHTML = '切换至单页阅读'
  } else {
    on(cp, mouse.click, function () {
      cookie('crossPage', '1', { expires: 10, path: '/' });
      window.location.reload();
    });
  }


  ! function () {
    function a(a) {
      return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
    }

    function b(a) {
      return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }

    function c(c, d) {
      function e(a) {
        return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a
      }

      function f(b) {
        var c = m;
        if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
          return m++, "$line=" + m + ";"
        })), 0 === b.indexOf("=")) {
          var e = l && !/^=[=#]/.test(b);
          if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
            var f = b.replace(/\s*\([^\)]+\)/, "");
            n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")")
          } else b = "$string(" + b + ")";
          b = s[1] + b + s[2]
        }
        return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
          if (a && !p[a]) {
            var b;
            b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0
          }
        }), b + "\n"
      }

      var g = d.debug,
        h = d.openTag,
        i = d.closeTag,
        j = d.parser,
        k = d.compress,
        l = d.escape,
        m = 1,
        p = {
          $data: 1,
          $filename: 1,
          $utils: 1,
          $helpers: 1,
          $out: 1,
          $line: 1
        },
        q = "".trim,
        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
        t = q ? "$out+=text;return $out;" : "$out.push(text);",
        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
        x = s[0],
        y = "return new String(" + s[3] + ");";
      r(c.split(h), function (a) {
        a = a.split(i);
        var b = a[0],
          c = a[1];
        1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)))
      });
      var z = w + x + y;
      g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
      try {
        var A = new Function("$data", "$filename", z);
        return A.prototype = n, A
      } catch (B) {
        throw B.temp = "function anonymous($data,$filename) {" + z + "}", B
      }
    }

    var d = function (a, b) {
      return "string" == typeof b ? q(b, { filename: a }) : g(a, b)
    };
    d.version = "3.0.0", d.config = function (a, b) {
      e[a] = b
    };
    var e = d.defaults = {
      openTag: "<%",
      closeTag: "%>",
      escape: !0,
      cache: !0,
      compress: !1,
      parser: null
    },
      f = d.cache = {};
    d.render = function (a, b) {
      return q(a, b)
    };
    var g = d.renderFile = function (a, b) {
      var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });
      return b ? c(b) : c
    };
    d.get = function (a) {
      var b;
      if (f[a]) b = f[a];
      else if ("object" == typeof document) {
        var c = document.getElementById(a);
        if (c) {
          var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
          b = q(d, { filename: a })
        }
      }
      return b
    };
    var h = function (a, b) {
      return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a
    },
      i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
      j = function (a) {
        return i[a]
      },
      k = function (a) {
        return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
      },
      l = Array.isArray || function (a) {
        return "[object Array]" === {}.toString.call(a)
      },
      m = function (a, b) {
        var c, d;
        if (l(a))
          for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);
        else
          for (c in a) b.call(a, a[c], c)
      },
      n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };
    d.helper = function (a, b) {
      o[a] = b
    };
    var o = d.helpers = n.$helpers;
    d.onerror = function (a) {
      var b = "Template Error\n\n";
      for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n";
      "object" == typeof console && console.error(b)
    };
    var p = function (a) {
      return d.onerror(a),
        function () {
          return "{Template Error}"
        }
    },
      q = d.compile = function (a, b) {
        function d(c) {
          try {
            return new i(c, h) + ""
          } catch (d) {
            return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c))
          }
        }

        b = b || {};
        for (var g in e) void 0 === b[g] && (b[g] = e[g]);
        var h = b.filename;
        try {
          var i = c(a, b)
        } catch (j) {
          return j.filename = h || "anonymous", j.name = "Syntax Error", p(j)
        }
        return d.prototype = i.prototype, d.toString = function () {
          return i.toString()
        }, h && b.cache && (f[h] = d), d
      },
      r = n.$each,
      s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
      t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
      u = /[^\w$]+/g,
      v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
      w = /^\d[^,]*|,\d[^,]*/g,
      x = /^,+|,+$/g,
      y = /^$|,+/;
    e.openTag = "{{", e.closeTag = "}}";
    var z = function (a, b) {
      var c = b.split(":"),
        d = c.shift(),
        e = c.join(":") || "";
      return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")"
    };
    e.parser = function (a) {
      a = a.replace(/^\s/, "");
      var b = a.split(" "),
        c = b.shift(),
        e = b.join(" ");
      switch (c) {
        case "if":
          a = "if (" + e + "){";
          break;
        case "else":
          b = "if" === b.shift() ? " if (" + b.join(" ") + ")" : "", a = "}else" + b + "{";
          break;
        case "/if":
          a = "}";
          break;
        case "each":
          var f = b[0] || "$data",
            g = b[1] || "as",
            h = b[2] || "$value",
            i = b[3] || "$index",
            j = h + "," + i;
          "as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";
          break;
        case "/each":
          a = "});";
          break;
        case "echo":
          a = "print(" + e + ");";
          break;
        case "print":
        case "include":
          a = c + "(" + b.join(",") + ");";
          break;
        default:
          if (/^\s*\|\s*[\w\$]/.test(e)) {
            var k = !0;
            0 === a.indexOf("#") && (a = a.substr(1), k = !1);
            for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) o = z(o, m[l]);
            a = (k ? "=" : "=#") + o
          } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a
      }
      return a
    }, "function" == typeof define ? define(function () {
      return d
    }) : "undefined" != typeof exports ? module.exports = d : this.template = d
  }();

  /*
   *      scrollBar => Function
   *      @param => object
   *          contain: 滚动内容,
   *          wrap: 滚动内容包裹,
   *          scrollBg: 滚动条背景,
   *          scrollBlock: 滚动块,
   *          options.scrollBarHeightDiff: 包裹高度修正,
   *          heightfix: 固定滚动高度
   *      @interface => object
   *          init: 初始化滚动条高度
   *          ect...
   */

  function ScrollBar(options) {
    var c = options.contain,
      w = options.wrap,
      sb = options.scrollBg,
      sk = options.scrollBlock,
      fd = options.factHeightDiff || 0,
      fh = options.scrollBarHeightDiff || 0,
      fx = options.heightFix || 0,
      H = c.offsetHeight,
      cs = c.style,
      bs = sk.style,
      ws = w.style,
      gs = sb.style,
      isValidDrag = false,
      start = {},
      delta = {},
      nowTop = 0,
      max, h, S, s, _top;

    cs.position = 'absolute';
    if (isMac) {
      c.style[cssCore + 'Transition'] = 'none';
    }

    function pull() {
      if (mobileDevice) return;
      if (_top < 0 || !_top) {
        _top = 0
      } else if (_top > max) {
        _top = max;
      }
      try {
        bs.top = _top + 'px';
        translate(cs, 0, (_top / max * (h - H)) >> 0);
      } catch (e) {

      }
    }

    sk.onmousedown = function (e) {
      isValidDrag = true;
      body.onmousemove = goScroll;
      if (body.setCapture) {
        body.setCapture();
      } else if (window.captureEvents) {
        window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
      }
      addClass(sb, 'scroll-scrolling');
      removeClass(c, 'moved');
      e = e || window.event;
      start = {
        X: e.clientX,
        Y: e.clientY,
        time: +new Date
      }
      delta = {};
    }

    sb.onmousedown = function (e) {
      e = e || window.event;
      if ((e.target || e.srcElement) === sk) return;
      _top = e.offsetY < nowTop ? nowTop - (s * .7) >> 0 :
        nowTop + (s * .7) >> 0;
      pull();
      nowTop = _top;
    }

    return {
      init: function (width, height) {
        H = c.offsetHeight || H;
        h = fx ? fx : height - fd;
        h = H - 1 < h ? H : h;
        S = h - fh;
        s = h / H * S;
        s = s > S ? S + 1 : s;
        ws.width = c.offsetWidth + 'px';
        ws.height = h + 'px';
        try {
          gs.height = S + 'px';
          bs.height = s + 'px';
        } catch (e) {

        }
        if (H === h) {
          gs.display = 'none';
        } else {
          gs.display = 'block';
        }
        max = ~~(S - s + 1);
        setTimeout(function () {
          pull();
        }, 0);
      },
      set: function (p) {
        _top = ((S - s) * p);
        pull();
        nowTop = _top;
      },
      reStart: function () {
        isValidDrag = false;
        removeClass(sb, 'scroll-scrolling');
        addClass(c, 'moved');
        if (!delta.Y) return;
        nowTop = _top;
      },
      isValid: function () {
        return isValidDrag;
      },
      nowTop: function () {
        return nowTop;
      },
      runScroll: function (e) {
        _t = this;
        delta = {
          X: e.clientX - start.X,
          Y: e.clientY - start.Y
        }
        _top = nowTop + delta.Y;
        pull();
      },
      wheelMove: function (dir) {
        _top = nowTop + ~~(s * .1) * dir;
        pull();
        nowTop = _top;
      }
    }
  }
  var scaleRate = 1,
    _isbottom = false,
    goScroll = function (e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      switch (true) {
        case !crossPage && scrollRecommand.isValid():
          scrollRecommand.runScroll(e);
          break;
        case crossPage && scrollToolPage.isValid():
          scrollToolPage.runScroll(e);
          break;
        case scrollCatalogue.isValid():
          scrollCatalogue.runScroll(e);
          break;
        case scrollBookshelf && scrollBookshelf.isValid():
          scrollBookshelf.runScroll(e);
          break;
      }
    },
    wheelScroll = function (e) {
      var isFromScroll = false,
        direct,
        nowScale,
        thisScroll,
        o;
      e = e || window.event;
      o = e.target || e.srcElement;
      // debugger
      if (!o) return;
      while (o && o.tagName && o.tagName.toUpperCase() !== 'BODY') {
        thisScroll = o.getAttribute('data-scroll');
        if (thisScroll) {
          isFromScroll = true;
          break;
        } else {
          o = o.parentNode;
        }
      }

      direct = -e.wheelDelta || e.detail * 40;
      direct = direct / 110;
      if (!crossPage && e.ctrlKey) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        nowScale = -.005 * direct * (isMac ? .5 : 1) + scaleRate;
        if (nowScale > .6 && nowScale < 1.7) {
          promptRun('图片尺寸:' + ~~(nowScale * 100) + '%');
          scaleRate = nowScale;
        }
        if (isLocalStorageNameSupported) {
          window.localStorage.setItem(ID + 'scale', scaleRate);
        }
        return goScalePic();
      } else if (!crossPage) {
        if (window._isbottom && direct > 0 && o.tagName.toLowerCase() === 'body') {
          if (NEXT_CHAPTER) {
            // window.location.href = makeUrl(ID, NEXT_CHAPTER, 1);
          } else {
            // noMore();
          }
        }
      }
      if (isFromScroll) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        if (thisScroll === 'roast-bar') {
          window.changeRoastByBar(direct < 0 ? -1 : 1);
        } else {
          (new Function("return " + thisScroll)()).wheelMove(direct * (isMac ? .3 : 1));
        }
      } else {
        if (crossPage) {
          if (!e.ctrlKey) {
            goPage(nowPage + ((IS_JAPAN ? -direct : direct) < 0 ? -1 : 1));
          }
        } else {
          keyScroll(e, direct * 1.1 * (isMac ? .5 : 1));
        }
      }
    },
    scrollCatalogue = ScrollBar({
      contain: catalogueList,
      wrap: catalogueListWrap,
      scrollBg: catalogueScrollBg,
      scrollBlock: catalogueScrollBlock,
      factHeightDiff: 190,
      scrollBarHeightDiff: 0
    }),
    scrollBookshelf,
    scrollToolPage,
    scrollRecommand,
    _t,
    _thisStep;

  W.scrollCatalogue = scrollCatalogue
  W.scrollBookshelf = scrollBookshelf
  W.scrollToolPage = scrollToolPage

  document.onmouseup = function () {
    document.onmousemove = function () { };
    if (body.releaseCapture) {
      body.releaseCapture();
    } else if (window.releaseEvents) {
      window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
    }
    if (_t) {
      _t.reStart();
    }
  }

  document.onselectstart = function () {
    return false;
  }
  catalogueContain.onselectstart = function () {
    return false;
  }

  // 键盘事件
  var pageChangePrompt,
    autoFullpage;

  if (!crossPage) {
    var endDiff = 0,
      scrollInterval = null,
      smoothScroll = function (from, to, t) {
        endDiff = endDiff + to;
        var timeStamp = +new Date,
          nowDiff = endDiff,
          _smoothScroll = function () {
            var now = +new Date;
            per = 1 - (now - timeStamp) / t;
            per = 1 - per * per;

            if (per >= .98 || per < 0) {
              ScrollTo(0, from + nowDiff);
              endDiff = 0;
              clearInterval(scrollInterval);
            } else {
              ScrollTo(0, from + ~~(nowDiff * per));
              endDiff = ~~(nowDiff * (1 - per));
            }
          }
        clearInterval(scrollInterval);
        scrollInterval = setInterval(_smoothScroll, 20);
      },
      keyScroll = function (e, n) {
        var scrollTop = getScrollTop();
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        ScrollTo(0, scrollTop + 50 * n);
      }
    document.onkeydown = function (e) {
      e = e || window.event;
      var code = e.keyCode,
        moveLongRange = function (dir) {
          var scrollTop = getScrollTop();
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
          smoothScroll(scrollTop, osHeight * .5 * dir, 300);
        }

      if (onRoast && roastHandle) {
        if (code === 27) {
          roastHandle(-1);
        } else if (code === 13) {
          roastHandle(1);
        }
        return;
      }
      if (code === 37) {
        sendPgv('NEW.AC_VIEW.NEWEVENT.KEYB_PREV');
        if (PREV_CHAPTER) {
          window.location.href = makeUrl(ID, PREV_CHAPTER);
        } else {
          noPrev();
        }
      } else if (code === 39) {
        sendPgv('NEW.AC_VIEW.NEWEVENT.KEYB_NEXT');
        if (NEXT_CHAPTER) {
          window.location.href = makeUrl(ID, NEXT_CHAPTER, 1);
        } else {
          noMore();
        }
      } else if (code === 122) {
        sendPgv('NEW.AC_VIEW.NEWEVENT.KEYB_F11');
      } else if (code === 38) {
        keyScroll(e, -1)
      } else if (code === 40) {
        keyScroll(e, +1)
      } else if (code === 33) {
        moveLongRange(-1)
      } else if (code === 34) {
        moveLongRange(+1)
      } else if (code === 48 && e.ctrlKey) {
        promptRun('图片尺寸:100%');
        if (isLocalStorageNameSupported) {
          scaleRate = 1;
          window.localStorage.setItem(ID + 'scale', 1);
        }
        return goScalePic();
      }
    }
  } else {
    document.onkeydown = function (e) {
      e = e || window.event;
      var code = e.keyCode;
      if (onRoast) {
        if (code === 27) roastHandle(-1);
        return;
      }
      if (code === 37) {
        sendPgv(IS_JAPAN ? 'NEW.AC_VIEW.NEWEVENT.DUIYE.KEYB_PAGENEXT' : 'NEW.AC_VIEW.NEWEVENT.DUIYE.KEYB_PAGEPREV');
        goPage(nowPage - 1);
      } else if (code === 39) {
        sendPgv(IS_JAPAN ? 'NEW.AC_VIEW.NEWEVENT.DUIYE.KEYB_PAGEPREV' : 'NEW.AC_VIEW.NEWEVENT.DUIYE.KEYB_PAGENEXT');
        goPage(nowPage + 1);
      } else if (code === 122) {
        sendPgv('NEW.AC_VIEW.NEWEVENT.KEYB_F11');
      } else if (code === 38) {
        sendPgv('NEW.AC_VIEW.NEWEVENT.DUIYE.KEYB_PREV');
        if (PREV_CHAPTER) {
          window.location.href = makeUrl(ID, PREV_CHAPTER);
        } else {
          noPrev();
        }
      } else if (code === 40) {
        sendPgv('NEW.AC_VIEW.NEWEVENT.DUIYE.KEYB_NEXT');
        if (NEXT_CHAPTER) {
          window.location.href = makeUrl(ID, NEXT_CHAPTER, 1);
        } else {
          noMore();
        }
      } else if (code === 13 && pageChangePrompt) {
        if (IS_JAPAN) {
          localTo(nowPage === 0 ? 1 : -1);
        } else {
          localTo(nowPage === 0 ? -1 : 1);
        }
      }
    }
  }

  // 滚轮事件
  if (window.addEventListener) {
    document.addEventListener('DOMMouseScroll', wheelScroll, true);
  }
  window.onmousewheel = document.onmousewheel = wheelScroll;
  window.recommendHasSet = false;

  // 全屏
  ! function () {

    var fullscreenChange = $$('fullscreenChange');
    if (!checkScrollChange) return on(fullscreenChange, mouse.click, function () {
      promptRun('浏览器不支持 请按F11进入全屏模式');
    });

    var _cssCore = cssCore.toLowerCase(),
      checkScreen = function () {
        mainView.style.height = osHeight - 120 + 'px';
      };

    on(fullscreenChange, mouse.click, function () {
      var requestFullScreen = _cssCore === 'ms' ? 'msRequestFullscreen' :
        _cssCore + 'RequestFullScreen',
        cancelFullScreen = _cssCore === 'ms' ? 'msExitFullscreen' :
          _cssCore + 'CancelFullScreen';
      if (document[_cssCore + 'FullScreen'] ||
        document[_cssCore + 'IsFullScreen'] ||
        document['msFullscreenElement']) {
        document[cancelFullScreen]();
      } else {
        body[requestFullScreen]();
      }
    });

    on(document, _cssCore + 'fullscreenchange', checkScreen);

  }();

  // 反馈
  ! function () {

    var aiseeWr = $$('aiseeWr'),
      feedbackBtn = $$('feedbackBtn'),
      adviseBtn = $$('adviseBtn'),
      aiseeNavSubmit = $$('aiseeNavSubmit'),
      aiseeNavFeedback = $$('aiseeNavFeedback'),
      isIE = window && function (ua) {

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
      }(window.navigator.userAgent),
      // 获取反馈系统aisee的url
      getAiseeUrl = function (type, cb) {
        var url = '';

        ajax.post({
          url: protocol + '//ac.qq.com/Ajax/getAiseeUrl',
          data: 'type=' + type,
          async: false,
          callback: function (data) {
            var d = JSON.parse(data);
            if (d.status === -99) {
              toLogin()
            } else if (d.status === 2) {
              url = d.data.url;

              cb(url, type);
              return url;
            } else {
              promptRun('参数错误');
            }
          }
        });
      },
      aiseeCallback = function (url, type) {
        $$('aiseeFrame').src = url;
        removeClass(aiseeNavFeedback, 'active');
        removeClass(aiseeNavSubmit, 'active');
        addClass($$('aiseeNav').getElementsByTagName('span')[type - 1], 'active');
        aiseeWr.style.display = 'block';
      };

    if (isIE) {
      feedbackBtn.style.display = 'none';
      feedbackBtn.previousSibling.parentNode.removeChild(feedbackBtn.previousSibling);
    } else {
      on(feedbackBtn, mouse.click, function () {
        if (!W.USER) return toLogin();
        getAiseeUrl(1, aiseeCallback);
        removeClass(aiseeWr, 'type-2');
      });
      window.versionAdvise = function () {
        if (!W.USER) return toLogin();
        getAiseeUrl(1, aiseeCallback);
        addClass(aiseeWr, 'type-2');
      };

      on($$('aiseeNav'), mouse.click, function (e) {
        e = e || window.event;
        e = e.target || e.srcElement;

        if (e.className.indexOf('aisee-nav-item') !== -1) {
          var tmpId = e.getAttribute('id'),
            type = (tmpId == 'aiseeNavSubmit') ? 1 : 2;

          getAiseeUrl(type, aiseeCallback);
        }
      });

      on($$('aiseeCloseBtn'), mouse.click, function () {
        aiseeWr.style.display = 'none';
      });
    }
  }();

  // 鼠标手势
  var goPageEnable = false; // 对页开关
  window.isTipPrompting = false;
  ! function () {
    var comicContain = $$('comicContain'),
      comicContainCross = $$('comicContainCross'),
      roastBarShrink = $$('roastBarShrink'),
      roastStopElem = null,
      roastStopItem = null,
      plusOneWrap = $$('plusOneWrap'),
      roastStopState = body.className.indexOf('roast-dm') === -1 ? 1 : 2,
      roastPlusOne = function (e0, clientX, clientY) {
        var i = document.createElement('i'),
          doc = docEle;
        i.appendChild(document.createTextNode('+1'));
        if (e0.pageX == null && clientX !== null) {
          e0.pageX = clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          e0.pageY = clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        anchor = {
          x: e0.pageX - 9,
          y: e0.pageY - 14
        };
        i.style.cssText = 'top:' + anchor.y + 'px; left:' + ~~(anchor.x) + 'px;';
        plusOneWrap.appendChild(i);
        //Fade(i, 0, 1, 200);
        setTimeout(function () {
          transToY(i, -40 + (cssCore !== '' ? 0 : clientY || e0.pageY), 500);
          Fade(i, 1, 0, 500);
          setTimeout(function () {
            plusOneWrap.removeChild(i);
          }, 300);
        }, 50);
      },
      roastClickHandl = function (e) {
        var roastStopState = body.className.indexOf('roast-dm') === -1 ? 1 : 2;
        if (roastStopState !== 1 && roastStopState !== 2) return;
        e = e0 = e || window.event;
        e = e.target || e.srcElement;
        var parent = e.parentNode,
          gParent = parent.parentNode,
          roastSeqString = '',
          roastDataItem = null,
          roastStopState = body.className.indexOf('roast-dm') === -1 ? 1 : 2,
          promptTop = $$('promptTop'),
          roastGoodPrompt = function () {
            if (window.isTipPrompting) {
              return;
            }
            window.isTipPrompting = true;
            promptTop.style.display = 'block';
            promptTop.className = 'prompt-top prompt-good';
            Fade(promptTop, 0, 1, 200);
            setTimeout(function () {
              promptTop.style.display = 'none';
              window.isTipPrompting = false;
            }, 2000);
          },
          roastGood = function (tar, e0, type) {
            sendPgv('NEW.AC_VIEW.NEWDM.DIANZAN_TUCAO'); // h
            // 吐槽点赞
            if (!W.USER) {
              return toLogin();
            }
            if (type === 1) {
              roastSeqString = tar.getAttribute('data-roast-seq');
              if (tar.getAttribute('data-roast-hide') && tar.getAttribute('data-roast-hide') === '1') {
                return;
              }
              roastDataItem = getRoastData(roastSeqString);
            }
            if ((type === 1 && roastDataItem.hasGood) || (type === 2 && tar.getAttribute('data-good'))) {
              roastGoodPrompt();
            } else {
              var roastId = tar.getAttribute('data-roast-id'),
                goodObj = tar.getElementsByTagName('i')[0],
                clientX = e0.pageX ? null : e0.clientX,
                clientY = e0.pageY ? null : e0.clientY;
              //var e1 = e0.clientX;
              if (type === 1) {
                roastDataItem.hasGood = 1;
              } else if (type === 2) {
                tar.setAttribute('data-good', 1);
              }
              ajax.post({
                url: protocol + '//ac.qq.com/ComicView/updateRoastGoodorBad',
                data: 'comic_id=' + ID + '&roast_id=' + roastId + '&type=1&tokenKey=' + W.USER.token,
                callback: function (data) {
                  data = JSON.parse(data);
                  if (+data.ret === 2) {
                    roastPlusOne(e0, clientX, clientY);
                    if (type === 1) {
                      if (!goodObj) {
                        tar.innerHTML += '<i>1</i>';
                        roastDataItem.good = 1;
                      } else {
                        if (roastDataItem.good < 999) {
                          goodObj.innerHTML = +goodObj.innerHTML + 1;
                        } else if (roastDataItem.good === 999) {
                          goodObj.innerHTML = '1' + '\u4E07';
                        }
                        roastDataItem.good = ~~roastDataItem.good + 1;
                      }
                    } else if (type === 2) {
                      tar.innerHTML += '<i>1</i>';
                    }
                  } else if (+data.status === -99) {
                    toLogin();
                    sendPgv('NEW.AC_VIEW.NEWDM.DENGLU_DIANZAN'); // h
                  }
                }
              });
            }
          },
          dmGood = function (tar, e0, type) {
            sendPgv('NEW.AC_VIEW.NEWDM.DIANZAN_DANMU'); // h
            // 弹幕点赞
            if (!W.USER) {
              return toLogin();
            }
            if (type === 1) {
              roastSeqString = tar.getAttribute('data-roast-seq');
              roastDataItem = getRoastData(roastSeqString);
            }
            if ((type === 1 && roastDataItem.hasGood) || ((type === 2 || type === 3) && tar.getAttribute('data-good'))) {
              roastGoodPrompt();
            } else {
              var roastId = tar.getAttribute('data-roast-id'),
                goodObj = tar.getElementsByTagName('span')[0],
                clientX = e0.pageX ? null : e0.clientX,
                clientY = e0.pageY ? null : e0.clientY;
              if (type === 1) {
                roastDataItem.hasGood = 1;
              } else if (type === 2) {
                tar.setAttribute('data-good', 1);
              }
              ajax.post({
                url: protocol + '//ac.qq.com/ComicView/updateRoastGoodorBad',
                data: 'comic_id=' + ID + '&roast_id=' + roastId + '&type=1&tokenKey=' + W.USER.token,
                callback: function (data) {
                  data = JSON.parse(data);
                  if (+data.ret === 2) {
                    roastPlusOne(e0, clientX, clientY);
                    if (type === 1) {
                      if (!goodObj) {
                        //removeClass(e, 'roast-no-hot');
                        tar.innerHTML += '<span>1</span>';
                        //goodObj.innerHTML = 1;
                        roastDataItem.good = 1;
                      } else {
                        if (roastDataItem.good < 999) {
                          goodObj.innerHTML = +goodObj.innerHTML + 1;
                        } else if (roastDataItem.good === 999) {
                          goodObj.innerHTML = '1' + '\u4E07';
                        }
                        roastDataItem.good = ~~roastDataItem.good + 1;
                      }
                    } else if (type === 2) {
                      tar.innerHTML += '<span>1</span>';
                    }
                  } else if (+data.status === -99) {
                    toLogin();
                    sendPgv('NEW.AC_VIEW.NEWDM.DENGLU_DIANZAN'); // h
                  }
                }
              });
            }
          },
          roastClose = function () {
            if (!parent.getAttribute('data-user-hide')) {
              parent.setAttribute('data-user-hide', 'set');
              Fade(parent, 1, 0, 300);
              setTimeout(function () {
                parent.style.zIndex = '-1';
              }, 300);
              sendPgv('NEW.AC_VIEW.NEWDM.CHADIAO'); // h
            }
          };
        if (parent.className === 'for-roast') {
          if (roastStopState === 1) {
            roastGood(e, e0, 1);
          } else if (roastStopState === 2) {
            dmGood(e, e0, 1);
          }
        } else if (gParent.className === 'for-roast') {
          if (roastStopState === 1) {
            if (e.tagName.toLowerCase() === 'b') {
              roastClose();
            } else {
              roastGood(parent, e0, 1);
            }
          } else if (roastStopState === 2) {
            dmGood(parent, e0, 1);
          }
        } else if (parent.className === 'own-roast') {
          if (roastStopState === 2) {
            dmGood(e, e0, 2);
          } else if (roastStopState === 1) {
            roastGood(e, e0, 2);
          }
        } else if (gParent.className === 'own-roast') {
          if (roastStopState === 2) {
            dmGood(parent, e0, 2);
          } else if (roastStopState === 1) {
            roastGood(parent, e0, 2);
          }
        } else if (parent.className === 'adv-roast') {
          dmGood(e, e0, 3);
        }
      },
      roastRestart = function () {
        //return;
        //重新开始弹幕动画
        roastStopElem.style[cssCore + 'Transform'] = 'translate(-' + (roastStopElem.offsetWidth + roastStopElem.parentNode.offsetWidth + (roastStopElem.parentNode.className === 'adv-roast' ? 150 : 100)) + 'px,' + 0 + 'px) translateZ(0)';
        roastStopElem.style[cssCore + 'TransitionDuration'] = (DANMU_TIME - roastStopElem.getAttribute('data-timepass')) + 'ms';
        roastStopElem.setAttribute('data-timestart', +new Date());
        roastStopElem.setAttribute('data-roast', '');
        roastStopElem = null;
      },
      roastStop = function (e) {
        var roastStopState = body.className.indexOf('roast-dm') === -1 ? 1 : 2;
        if (roastStopState !== 2 && roastStopState !== 1) return;
        e = e || window.event;
        e = e.target || e.srcElement;
        var parent = e.parentNode,
          grandParent = parent.parentNode,
          roastItem = null;
        if (roastStopState === 2) {
          if (parent.className === 'for-roast' || parent.className === 'own-roast' || parent.className === 'adv-roast') {
            if (e.getAttribute('data-roast')) {
              return;
            }
            if (roastStopElem) {
              roastRestart();
            }
            roastStopElem = e;
            //停止更新单条弹幕
            e.setAttribute('data-roast', 'stop');
            //暂停弹幕动画
            var disAll = e.offsetWidth + parent.offsetWidth + (parent.className === 'adv-roast' ? 300 : 100),
              lastPass = e.getAttribute('data-timepass') ? ~~e.getAttribute('data-timepass') : 0,
              timePass = +new Date() - e.getAttribute('data-timestart') + lastPass,
              disPass = disAll * timePass / DANMU_TIME * (-1);
            e.setAttribute('data-timepass', timePass);
            //e.style[cssCore + 'Transform'] = 'translate(' + disPass +'px,' + 0 + 'px) translateZ(0)';
            if (parent.className === 'own-roast') {
              e.style[cssCore + 'Transform'] = 'translate(' + disPass + 'px,' + 0 + 'px) translateZ(0)';
            } else if (parent.className === 'adv-roast') {
              if (e.getAttribute('data-good') === 1) {
                e.style[cssCore + 'Transform'] = 'translate(' + (disPass + 30 + 150) + 'px,' + 0 + 'px) translateZ(0)';
              } else {
                e.style[cssCore + 'Transform'] = 'translate(' + (disPass + 150) + 'px,' + 0 + 'px) translateZ(0)';
              }
            } else {
              e.style[cssCore + 'Transform'] = 'translate(' + disPass + 'px,' + 0 + 'px) translateZ(0)';
            }
            e.style[cssCore + 'TransitionDuration'] = 0 + 'ms';
          } else if (grandParent.className === 'for-roast' || grandParent.className === 'own-roast') {
            if (roastStopElem) {
              roastRestart();
            }
            if (parent.getAttribute('data-roast')) {
              return;
            }
            roastStopElem = parent;
            //停止更新单条弹幕
            parent.setAttribute('data-roast', 'stop');
            //暂停弹幕动画
            var disAll = parent.offsetWidth + grandParent.offsetWidth + 100,
              lastPass = parent.getAttribute('data-timepass') ? ~~parent.getAttribute('data-timepass') : 0,
              timePass = +new Date() - parent.getAttribute('data-timestart') + lastPass,
              disPass = disAll * timePass / DANMU_TIME * (-1);
            parent.setAttribute('data-timepass', timePass);

            parent.style[cssCore + 'Transform'] = 'translate(' + disPass + 'px,' + 0 + 'px) translateZ(0)';
            parent.style[cssCore + 'TransitionDuration'] = 0 + 'ms';
          } else if (roastStopElem) {
            roastRestart();
          }
        } else if (roastStopState === 1) {
          if (parent.className === 'for-roast') {
            if (roastStopElem) {
              return;
            }
            roastStopElem = e;
            e.setAttribute('data-stop', 1);
          } else if (grandParent.className === 'for-roast') {
            if (roastStopElem) {
              return;
            }
            roastStopElem = parent;
            parent.setAttribute('data-stop', 1);
          } else if (roastStopElem) {
            roastStopElem.setAttribute('data-stop', '');
            roastStopElem = null;
          }
        }
      }
    // 提示进入新的一话

    if (comicContain) {
      on(comicContain, mouse.click, roastClickHandl);
      on(comicContain, mouse.move, roastStop);
      comicContain.onmousedown = function (e) {
        e = e || window.event;
        if (e.button === 2 ||
          e.which === 2 ||
          !e.which && e.button === 4 ||
          (e.target || e.srcElement).alt) return;
        var scrollTop = getScrollTop(),
          now = +new Date,
          from = {
            X: e.clientX,
            Y: e.clientY
          };
        comicContain.onmousemove = function (e) {
          e = e || window.event;
          var toY = from.Y - e.clientY;
          ScrollTo(0, toY + scrollTop);
        }
        comicContain.onmouseup = function (e) {
          e = e || window.event;
          var toX = from.X - e.clientX,
            toY = from.Y - e.clientY,
            diff = +new Date - now,
            v = toY / diff;
          if (Math.abs(toX) > 350) {
            if (toX < 0) {
              if (NEXT_CHAPTER) {
                window.location.href = makeUrl(ID, NEXT_CHAPTER, 1);
              } else {
                noMore();
              }
            } else {
              if (PREV_CHAPTER) {
                window.location.href = makeUrl(ID, PREV_CHAPTER);
              } else {
                noPrev();
              }
            }
          }
          if (Math.abs(v) > 1.4) {
            smoothScroll(toY + scrollTop, ~~(v * 20), 220);
          }
          comicContain.onmouseup = function () { };
          comicContain.onmousemove = function () { };
        }
      }
      if (window.addEventListener) {
        document.addEventListener('mouseup', function () {
          comicContain.onmousemove = function () { };
        }, false);
      } else {
        document.attachEvent('onmouseup', function () {
          comicContain.onmousemove = function () { };
        });
      }
      $$('comicTitle').onmouseover = function () {
        comicContain.onmousemove = function () { };
      }

      addClass(body, 'roast-right');
    }

    if (comicContainCross) {
      on(comicContainCross, mouse.click, roastClickHandl);
      on(comicContainCross, mouse.move, roastStop);
      var pageArrow = $$('pageArrow'),
        interval;
      if (mobileDevice) {
        on(body, mouse.move, function (e) {
          e = e || window.event;
          if (!goPageEnable && e.preventDefault) {
            e.preventDefault();
          }
        });
      }

      on(comicContainCross, mouse.down, function (e) {
        if (!goPageEnable) return;
        e = e || window.event;
        var tar = e.target;
        if (!tar) return e.returnValue = false;
        if (!mobileDevice &&
          e.button === 2 &&
          tar.tagName.toLowerCase() === 'img' &&
          !roastState) {
          var s = tar.style,
            p = tar.parentNode.parentNode.style;
          s[cssCore + 'Transform'] = 'scale(1) scaleZ(1)';
          s[cssCore + 'TransformOrigin'] = (e.offsetX || e.layerX) + 'px ' + (e.offsetY || e.layerY) + 'px';
          s[cssCore + 'Transform'] = 'scale(1.3) scaleZ(1)';
          p['zIndex'] = '3';
          clearTimeout(interval);
          document.body.onmouseup = function () {
            s[cssCore + 'Transform'] = 'scale(1) scaleZ(1)';
            interval = setTimeout(function () {
              p['zIndex'] = ''
            }, 190);
            document.body.onmouseup = null
          }
          return;
        }
        if (e.which === 2 ||
          !e.which && e.button === 4) return;
        e = e.touches ? e.touches[0] : e;
        var now = +new Date,
          from = {
            X: e.clientX,
            Y: e.clientY
          },
          move = function (e) {
            e = e || window.event;
            if (e.preventDefault) {
              e.preventDefault();
            }
            e = e.touches ? e.touches[0] : e;
            var toX = from.X - e.clientX;
            trans(comicContainCross, -nowPage * moveWidth - toX, 0, 0);
          },
          end = function (e) {
            e = e || window.event;
            e = e.changedTouches ? e.changedTouches[0] : e;
            var toX = from.X - e.clientX,
              diff = +new Date - now,
              v = toX / diff;
            if (Math.abs(toX) > moveWidth * .1 ||
              Math.abs(v) > 1) {
              if (toX > 0) {
                goPage(nowPage + 1);
              } else {
                goPage(nowPage - 1);
              }
            } else {
              trans(comicContainCross, -nowPage * moveWidth, 0, 300);
            }
            // comicContainCross.onmouseup = function() {};
            // comicContainCross.onmousemove = function() {};
            off(comicContainCross, mouse.move, move);
            off(comicContainCross, mouse.up, end);
            pageArrow.onmouseover = function () { };
          }

        on(comicContainCross, mouse.move, move);
        on(comicContainCross, mouse.up, end);
        pageArrow.onmouseover = end;
      });

      if (window.addEventListener) {
        document.addEventListener('mouseup', function () {
          comicContainCross.onmousemove = function () { };
        }, false);
      } else {
        document.attachEvent('onmouseup', function () {
          comicContainCross.onmousemove = function () { };
        });
      }
      $$('comicTitle').onmouseover = function () {
        comicContainCross.onmousemove = function () { };
      }
    }
  }();

  // 弹出框相关
  window.closeDialog = function () {
    removeClass($$('iframeMask'), 'active');
    $$('iframeMask').style.display = 'none';
    addClass($$('dialog'), 'hidden');
  }

  window.noPrev = function () {
    var im = $$('iframeMask'),
      dl = $$('dialog');
    if (im.className.indexOf('active') !== -1) return;
    addClass(im, 'active');
    im.style.display = 'block';
    removeClass(dl, 'hidden');
    // 渲染
    var dialogHtml = '',
      data = {
        title: '提示',
        emotion: '^_^',
        text: '主人，这是本作品的第一章，没有上一章哟~',
        button: [{
          id: 'goBack',
          name: '确定',
          fn: 'closeDialog'
        }],
        noReview: '',
        closebtn: {
          id: 'dialogClose',
          name: 'X',
          fn: 'closeDialog'
        }
      }
    dialogHtml = template('dialogMod', data);
    dl.innerHTML = dialogHtml;
  }

  // 两点间动画
  function UnitBezier(p1x, p1y, p2x, p2y) {
    // pre-calculate the polynomial coefficients
    // First and last control points are implied to be (0,0) and (1.0, 1.0)
    this.cx = 3.0 * p1x;
    this.bx = 3.0 * (p2x - p1x) - this.cx;
    this.ax = 1.0 - this.cx - this.bx;

    this.cy = 3.0 * p1y;
    this.by = 3.0 * (p2y - p1y) - this.cy;
    this.ay = 1.0 - this.cy - this.by;
  }

  UnitBezier.prototype = {
    epsilon: 1e-2, // Precision
    sampleCurveX: function (t) {
      return ((this.ax * t + this.bx) * t + this.cx) * t;
    },
    sampleCurveY: function (t) {
      return ((this.ay * t + this.by) * t + this.cy) * t;
    },
    sampleCurveDerivativeX: function (t) {
      return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
    },
    solveCurveX: function (x, epsilon) {
      var t0,
        t1,
        t2,
        x2,
        d2,
        i;

      // First try a few iterations of Newton's method -- normally very fast.
      for (t2 = x, i = 0; i < 8; ++i) {
        x2 = this.sampleCurveX(t2) - x;
        if (Math.abs(x2) < epsilon) return t2;
        d2 = this.sampleCurveDerivativeX(t2);
        if (Math.abs(d2) < epsilon) break;
        t2 = t2 - x2 / d2;
      }

      // No solution found, use bi-section -- normally very slow.
      t0 = 0.0;
      t1 = 1.0;
      t2 = x;

      if (t2 < t0) return t0;
      if (t2 > t1) return t1;

      while (t0 < t1) {
        x2 = this.sampleCurveX(t2);
        if (Math.abs(x2 - x) < epsilon) return t2;
        if (x > x2) {
          t0 = t2;
        } else {
          t1 = t2;
        }

        t2 = (t1 - t0) * .5 + t0;
      }

      // Give up T.T
      return t2;
    },

    // Find new T as a function of Y along curve X
    solve: function (x, epsilon) {
      return this.sampleCurveY(this.solveCurveX(x, epsilon));
    }
  }

  // trim
  function trim(s) {
    return s === null ? '' : s.toString().replace(/^\s+/, '').replace(/\s+$/, '');
  }

  // cookie功能
  function cookie(name, value, options) {
    if (typeof value !== 'undefined') {
      options = options || {};
      if (value === null) {
        value = '';
        options.expires = -1;
      }

      var expires = '';
      if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString)) {
        var date;
        if (typeof options.expires === 'number') {
          date = new Date;
          date.setTime(+date + (options.expires * 24 * 60 * 60 * 1000));
        } else {
          date = options.expires;
        }
        expires = '; expires=' + date.toGMTString();
      }

      var path = options.path ? '; path=' + options.path : '',
        domain = options.domain ? '; domain=' + options.domain : '',
        secure = options.secure ? '; secure' : '';

      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
      var cookieValue = null,
        i = 0,
        cookies,
        cookie;
      if (document.cookie && document.cookie !== '') {
        cookies = document.cookie.split(';');
        for (; i < cookies.length; ++i) {
          cookie = trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  }
  var isCookieSupported = function () {
    try {
      cookie('__AC__', '1', { path: '/ComicView/', expires: 1 });
      return cookie('__AC__') ? true : false;
    } catch (e) {
      return false;
    }
  }();

  // 建立id与cid对应的漫画链接
  function makeUrl(id, cid, fromPrev) {
    return '/ComicView/index/id/' + id + '/cid/' + cid + (fromPrev ? '?fromPrev=1' : '');
  }

  // 提示框
  var fullscreenTimeOut = null,
    promptTextTimeOut = null,
    pt = $$('promptText'),
    pm = $$('promptMain'),
    promptRun = function (text, width) {
      if (width) {
        pt.style.cssText = 'width: ' + width + 'px;margin-left:-' + ~~(width / 2) + 'px';
      } else {
        pt.style.cssText = '';
      }
      pm.innerHTML = text;
      clearTimeout(fullscreenTimeOut);
      clearTimeout(promptTextTimeOut);
      fullscreenTimeOut = setTimeout(function () {
        Fade(pt, 1, 0, 400);
        clearTimeout(promptTextTimeOut);
        promptTextTimeOut = setTimeout(function () {
          addClass(pt, 'hidden');
        }, 500);
      }, 2000);
      Fade(pt, 0, 1, 100);
      removeClass(pt, 'hidden');
    }

  // 检测全屏与清洁模式
  // var fullscreenTimeOut = null,
  //     promptTextTimeOut = null,
  //     cleanMode = cookie('cleanMode'),
  //     fullMode = osHeight >= window.screen.height - 2,
  //     fs = $$('fullscreen'),
  //     cleanModeInit = function() {
  //         var pt = $$('promptText'),
  //             pm = $$('promptMain'),
  //             fi = fs.children[0],
  //             ft = fs.children[1],
  //             run = function(text) {
  //                 clearTimeout(fullscreenTimeOut);
  //                 clearTimeout(promptTextTimeOut);
  //                 fullscreenTimeOut = setTimeout(function() {
  //                     Fade(pt, 1, 0, 800);
  //                     clearTimeout(promptTextTimeOut);
  //                     promptTextTimeOut = setTimeout(function() {
  //                         addClass(pt, 'hidden');
  //                     }, 900);
  //                 }, 1500);
  //                 pm.innerHTML = '已打扫干净，移开鼠标试试吧~';
  //                 Fade(pt, 0, 1, 200);
  //                 removeClass(pt, 'hidden');
  //             },
  //             gotoClean = function() {
  //                 addClass(body, 'fullscreen');
  //                 ft.innerHTML = '普通模式';
  //                 fs.onclick = exitClean;
  //                 cleanMode = !cleanMode;
  //                 cookie('cleanMode', '1', {path: '/', expires: 1});
  //                 run();
  //                 checkScreenMode();
  //             },
  //             exitClean = function() {
  //                 removeClass(body, 'fullscreen');
  //                 ft.innerHTML = '清洁模式';
  //                 fs.onclick = gotoClean;
  //                 cleanMode = !cleanMode;
  //                 cookie('cleanMode', '0', {path: '/', expires: 1});
  //                 checkScreenMode();
  //             }

  //         if (cleanMode) {
  //             addClass(body, 'fullscreen');
  //             ft.innerHTML = '普通模式';
  //             fs.onclick = exitClean;
  //         } else {
  //             removeClass(body, 'fullscreen');
  //             ft.innerHTML = '清洁模式';
  //             fs.onclick = gotoClean;
  //         }
  //     },
  //     checkScreenMode = function() {
  //         goScalePic();
  //         fullMode = osHeight >= window.screen.height - 2;
  //         // if (cleanMode || autoFullpage) return;
  //         if (cleanMode) return;
  //         if (fullMode) {
  //             addClass(document.body, 'fullscreen');
  //             fs.parentNode.style.display = 'none';
  //         } else {
  //             removeClass(document.body, 'fullscreen');
  //             fs.parentNode.style.display = 'block';
  //         }
  //     }
  //
  var cleanMode = crossPage ? 1 : 0,
    fullMode = osHeight >= window.screen.height - 2,
    cleanModeInit = function () {
      if (cleanMode) {
        addClass(body, 'fullscreen');
      } else {
        removeClass(body, 'fullscreen');
      }
    },
    checkScreenMode = function () {
      goScalePic();
      fullMode = osHeight >= window.screen.height - 2;
      if (cleanMode) return;
      if (fullMode) {
        addClass(document.body, 'fullscreen');
      } else {
        removeClass(document.body, 'fullscreen');
      }
    }

    // 数据
    ;
  ! function () {
    eval(function (p, a, c, k, e, r) {
      e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) };
      if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) { return r[e] }];
        e = function () { return '\\w+' };
        c = 1
      };
      while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
      return p
    }('p y(){i="J+/=";O.D=p(c){s a="",b,d,h,f,g,e=0;C(c=c.z(/[^A-G-H-9\\+\\/\\=]/g,"");e<c.k;)b=i.l(c.m(e++)),d=i.l(c.m(e++)),f=i.l(c.m(e++)),g=i.l(c.m(e++)),b=b<<2|d>>4,d=(d&15)<<4|f>>2,h=(f&3)<<6|g,a+=7.5(b),w!=f&&(a+=7.5(d)),w!=g&&(a+=7.5(h));v a=u(a)};u=p(c){C(s a="",b=0,d=17=8=0;b<c.k;)d=c.o(b),Q>d?(a+=7.5(d),b++):R<d&&S>d?(8=c.o(b+1),a+=7.5((d&F)<<6|8&r),b+=2):(8=c.o(b+1),x=c.o(b+2),a+=7.5((d&15)<<12|(8&r)<<6|x&r),b+=3);v a}}s B=I y(),T=W[\'K\'+\'L\'].M(\'\'),N=W[\'n\'+\'P\'+\'e\'],j,t,q;N=N.U(/\\d+[a-V-Z]+/g);j=N.k;X(j--){t=Y(N[j])&10;q=N[j].z(/\\d+/g,\'\');T.11(t,q.k)}T=T.13(\'\');14=16.E(B.D(T));', 62, 70, '|||||fromCharCode||String|c2||||||||||_keyStr|len|length|indexOf|charAt||charCodeAt|function|str|63|var|locate|_utf8_decode|return|64|c3|Base|replace|||for|decode|parse|31|Za|z0|new|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|DA|TA|split||this|onc|128|191|224||match|zA||while|parseInt||255|splice||join|_v||JSON|c1'.split('|'), 0, {}))
  }();
  var DATA = _v,
    ID = _v.comic.id,
    CID = _v.chapter.cid,
    PICTURE = _v.picture,
    PREV_CHAPTER = _v.chapter.prevCid,
    NEXT_CHAPTER = _v.chapter.nextCid,
    IS_VIP = +_v.chapter.vipStatus === 2,
    IS_JAPAN = _v.comic.isJapanComic,
    IS_LIGHTCOMIC = _v.comic.isLightComic,
    PREV_CHAPTER_NAME,
    NEXT_CHAPTER_NAME,
    IS_BLACK_MAN, IS_FAV,
    COLLECT_COUNT;

  W.USER = '';

  var nowPage,
    wrapWidth,
    crossPageTo,
    jumpPrompt,
    roastDelay,
    roastInterval,
    qqGameHallFirst,
    bigScreenRoastMode = !mobileDevice && osWidth >= 1300 && osHeight > 850 ? 1 : 0,
    bottomNum = IS_LIGHTCOMIC ? -350 : -400;

  var qqGameHall = +cookie('qq_game_new_chapter_view');

  try {
    if (recommendList) {
      scrollRecommand = ScrollBar({
        contain: recommendList,
        wrap: recommendListWrap,
        scrollBg: recommendScrollBg,
        scrollBlock: recommendScrollBlock,
        factHeightDiff: 100,
        scrollBarHeightDiff: 20
      });
    }
  } catch (e) {

  }

  // APP外屏蔽章节弹层
  if (_v.chapter.is_app_chapter) {
    // pgvSendClick({hottag:'ac.reading.hide'});
    var params = JSON.stringify({ comic_id: ID, chapter_id: CID });
    new QRCode(document.getElementById("qr_code"), {
      text: 'https://ovact.ac.qq.com/magic-act/L7f5rNsLfLlxyl6LYNnRHYj1KA/index_index.html?page=index&ovscroll=0',
      width: 100,
      height: 100,
    });
    var blockDialog = document.getElementById('in_app_block');
    var dialogTitle = blockDialog.querySelector('.in-app-block-title');
    var titleText = '亲爱的大大，当前章节仅支持在手机APP端和电脑版进行阅读哦';
    if (AcEnv.isMac) {
      titleText = '亲爱的大大，当前章节仅支持在手机APP端内阅读哦';
      document.getElementById('download_yyb').style.display = 'none';
    }
    dialogTitle.innerHTML = titleText;
    if (cookie("theme") == 'dark') {
      blockDialog.className = blockDialog.className + ' dark';
    }
    blockDialog.className = blockDialog.className + ' show';
    blockDialog.querySelector('.in-app-block-btn').onclick = function () {
      AcEnhance.callHelper('yyb', 'download', {
        fromPage: 'comicView',
        params: {
          comic_id: ID,
          chapter_id: CID
        }
      });
      pgvSendClick({ hottag: 'new.ac_view.about.pcreading.download' });
    };

    blockDialog.querySelector('.in-app-block-link').onclick = function () {
      AcEnhance.callHelper('yyb', 'callUp', {
        fromPage: 'comicView',
        params: {
          comic_id: ID,
          chapter_id: CID
        }
      });
      pgvSendClick({ hottag: 'new.ac_view.about.pcreading.start' });
    };

    pgvSendClick({ hottag: 'new.ac_view.about.pcreading.window' });
  }

  var popUpMsg = $$('popUpMsg'),
    popUpContent = $$('popUpContent'),
    popUpClose = $$('popUpClose'),
    advSeq = -1,
    advWrap = null;

  // 吐槽公用部分
  var roastState = cookie('roastState'),
    roastContent = $$('roastContent'),
    roastBarShrink = $$('roastBarShrink'),
    roastHandle,
    onRoast = false;

  if (roastState) {
    roastState = +roastState;
    if (cssCore === '') {
      addClass(roastBarShrink, 'roast-bar-ie');
      addClass(roastBarWrap, 'roast-bar-ie');
    }
    if (roastState === 2) {
      if (cssCore === '') {
        roastState = 1;
      }
    } else if (roastState === 0) {
      addClass(body, 'no-roast');
    }
  } else {
    if (cssCore !== '') {
      cookie('roastState', '2', { path: '/', expires: 10 });
    } else {
      roastState = 1;
      cookie('roastState', '1', { path: '/', expires: 10 });
    }
  }

  if (roastState === 2) {
    addClass(body, 'roast-dm');
  }

  // 临时代码,屏蔽日漫吐槽
  if (!DATA.comic.isRoastable) {
    addClass(body, 'is-japan');
    roastState = 0;
  }

  // 条漫去掉图片中间的页码分割，屏蔽掉对页模式
  if (IS_LIGHTCOMIC) {
    if (crossPage === 1) {
      cookie('crossPage', 0);
      window.location.reload();
    }
    addClass(body, 'is-tm');
  }

  // 对页默认切换逻辑
  // !function() {
  //     if (!isLocalStorageNameSupported) return;
  //     var id = ID + '',
  //         local = window.localStorage,
  //         init = local.getItem('crossPageInit'),
  //         initTimeStamp = local.getItem('crossPageInitTimeStamp'),
  //         popUpLeadTips = function(TipsName) {
  //             addClass(body, TipsName);
  //             on($$('pageLeadBtn'), mouse.click, function() {
  //                 removeClass(body, TipsName);
  //             });
  //             local.setItem('crossPageInit', '3');
  //             local.setItem('crossPageInitTimeStamp', +new Date);
  //         },
  //         list;
  //     if (init) {
  //         switch (init) {
  //             case '3':
  //                 if (!initTimeStamp || new Date - initTimeStamp >= 2.592E9) local.removeItem('crossPageInit');
  //                 break;
  //             case '1':
  //                 // 弹出单页浮层
  //                 popUpLeadTips('single-page-tips');
  //                 break;
  //             case '2':
  //                 // 弹出对页浮层
  //                 popUpLeadTips('cross-page-tips');
  //                 break;
  //             default:
  //                 break;
  //         }
  //         return;
  //     }
  //     if (osWidth <= 1500) {
  //         local.setItem('crossPageInit', '3');
  //         local.setItem('crossPageInitTimeStamp', +new Date);
  //     } else {
  //         // 这是需要默认切换对页的白名单
  //         list = '|505430|505432|505441|505433|505436|505437|505440|501661|505431|505439|505435|530129|530131|530876|530132|530986|530987|530988|530950|530989|530875|512063|530780|530763|530985|531616|531560|531615|531617|531618|531619|531620|531621|531723|512050|512052|512054|512060|512062|512064|512065|512066|512067|511915|519855|530969|17114|';
  //         if (list.indexOf('|' + id + '|') !== -1) {
  //             if (crossPage === 1) {
  //                 local.setItem('crossPageInit', '3');
  //                 local.setItem('crossPageInitTimeStamp', +new Date);
  //                 return;
  //             }
  //             cookie('crossPage', '1', {expires: 15, path: '/'});
  //             local.setItem('crossPageInit', '2');
  //         } else {
  //             cookie('crossPage', '0', {expires: 15, path: '/'});
  //             local.setItem('crossPageInit', '1');
  //         }
  //         window.location.reload();
  //     }
  // }();

  ! function () {
    var roastMode = $$('roastMode'),
      roastAndBarrage = $$('roastAndBarrage'),
      toRoast = $$('toRoast'),
      cancelRoast = $$('calcelRoast'),
      icoBarWrite = $$('icoBarWrite'),
      commentWrap = $$('commentWrap'),
      roastBtnText = $$('roastBtnText'),
      roastPrompt = $$('roastPrompt'),
      roastCount = $$('roastCount'),
      qrcode = $$('qrcode'),
      roastPromptOn = true,
      roastWarn = false,
      roastWrap = crossPage ? $$('comicContainCross') : $$('comicContain'),
      state = 0,
      checkText = function () {
        var value = this.value,
          len = value.length;
        if (value === '') {
          if (!roastPromptOn) {
            removeClass(roastPrompt, 'hidden');
            roastPromptOn = true;
            roastCount.innerHTML = '0/30';
          }
        } else {
          if (roastPromptOn) {
            addClass(roastPrompt, 'hidden');
            roastPromptOn = false;
          }
          roastCount.innerHTML = len + '/30';
          if (+len > 30) {
            if (!roastWarn) {
              roastCount.style.color = '#f04';
              roastWarn = true;
            }
          } else {
            if (roastWarn) {
              roastCount.style.color = '';
              roastWarn = false;
            }
          }
          this.value = value.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\u2000-\u2fff])/g, '');
        }
      },
      roastPut = function (e) {
        var target,
          pid,
          wrap,
          p,
          placed = {},
          pos = {},
          value = roastContent.value,
          avatarImg = null,
          roastPutState = body.className.indexOf('roast-dm') === -1 ? 1 : 2,
          roastPutCallBack = function (posX, posY, id) {
            wrap = target.nextSibling.nextSibling.nextSibling;
            if (!wrap.tagName || wrap.tagName.toLowerCase() !== 'div') {
              wrap = wrap.nextSibling;
            }
            p = document.createElement('p');
            p.setAttribute('data-roast-id', id);
            if (roastPutState === 2) {
              if (!avatarImg) {
                avatarImg = document.createElement('img');
                avatarImg.src = W.USER && W.USER.avatar || '//ac.gtimg.com/media/images/ac_chapter_avatar.jpg';
              }
              p.appendChild(avatarImg);
              p.appendChild(document.createTextNode(value));
              p.style.cssText = 'left:100%;top:' + (ROAST_VIEW * 45 + 50) + 'px;';
              p.setAttribute('data-timepass', 0);
              p.setAttribute('data-good', '');
              wrap.appendChild(p);
              setTimeout(function () {
                p.setAttribute('data-timestart', +new Date());
                transToX(p, cssCore ? -p.offsetWidth - target.parentNode.offsetWidth - 100 : -p.offsetWidth - 100, DANMU_TIME, function () {
                  p = null;
                }, nowPage);
              }, 300);
            } else {
              if (!avatarImg) {
                avatarImg = document.createElement('img');
                avatarImg.src = W.USER && W.USER.avatar || '//ac.gtimg.com/media/images/ac_chapter_avatar.jpg';
              }
              p.innerHTML = '<span></span>';
              p.appendChild(document.createTextNode(value));
              p.appendChild(avatarImg);
              p.style.cssText = 'left:' + posX + '%;top:' + posY + '%;opacity:0';
              Fade(p, 0, 1, 300);
              wrap.appendChild(p);
              p = null;
            }


          };
        e = e || window.event;
        target = e.target || e.srcElement;
        if (target.className === 'for-roast') {
          target = target.previousSibling.previousSibling;
        }
        pid = target.getAttribute('data-pid');
        if (!pid || !value) return;

        if (/(?:^[A-Za-z0-9\.\?\+\-,;!*`~。，、]+$)|(?:^[asdqwef\s]+$)|(QQ|Qq|qq|w(?:.*)w(?:.*)w)/.test(value)) {
          if (!/^(233+|666+)$/.test(value)) {
            roastHandle(-1);
            roastContent.select();
            promptRun('请不要发表无意义词汇');
            return;
          }
        }

        //roastPutCallBack();
        // 下面有坑（坑的意思是 + 18 和 - 16 的偏移值可能不对）
        placed = {
          x: (e.offsetX || e.layerX || e.clientX - target.getBoundingClientRect().left) + 18,
          y: (e.offsetY || e.layerY || e.clientY - target.getBoundingClientRect().top) - 16
        }
        pos = {
          x: ~~(placed.x / target.offsetWidth * 10000) / 100,
          y: ~~(placed.y / target.offsetHeight * 10000) / 100
        }
        addRoast(pid, pos.x, pos.y, target.getAttribute('data-w'), target.getAttribute('data-h'), value, roastPutCallBack);

        pos.x = ~~(pos.x / 100 * target.getAttribute('data-w'));
        pos.y = ~~(pos.y / 100 * target.getAttribute('data-h'));

        sendPgv('NEW.AC_VIEW.NEWEVENT.TC.FATUCAO_SUCCESS');

        roastContent.value = '';
        checkText.call(roastContent);
        continueRoast();
        onRoast = false;
        removeClass(toolWrapBottom, 'to-roast');
        changeBottom(commentWrap, -190, 200);
        off(roastWrap, 'click', roastPut);
        state = 0;
      },
      roastCancel = function (e) {
        e = e || window.event;
        if (+e.button === 2) {
          roastHandle(-1);
        }
      },
      changeBottom = function () {
        if (isIE) {
          return function (o, y, t) {
            // 这是坑
            if (o.currentStyle.bottom === 'auto') o.style.bottom = '-190px';
            var cs = o.currentStyle || window.getComputedStyle(o, null),
              s = o.style,
              cy = parseInt(s.bottom || cs.bottom || 0, 10),
              dy = y - cy,
              ft = +new Date,
              end = ft + t,
              pos = 0,
              diff,
              _trans = function () {
                if (+new Date > end) {
                  s.bottom = y + 'px';
                  return 0;
                } else {
                  diff = end - new Date;
                  pos = diff / t;
                  s.bottom = (cy + dy * (1 - pos)) + 'px';
                }
                return 1;
              },
              _requestTrans = function () {
                requestAnimationFrame(function () {
                  if (_trans()) _requestTrans();
                });
              }

            _requestTrans();
          }
        } else {
          return function (o, to) {
            o.style.bottom = to + 'px';
          }
        }
      }(),
      checkBlackUser = function (callback) {
        if (!W.USER) return;
        if (!IS_BLACK_MAN) {
          ajax.get({
            url: '/Ajax/checkBlack',
            callback: function (data) {
              data = JSON.parse(data);
              if (+data.status === 2) {
                IS_BLACK_MAN = data;
                promptRun(data.msg, 700);
              } else {
                IS_BLACK_MAN = data;
                callback();
              }
            }
          });
        } else {
          if (IS_BLACK_MAN.status === 2) {
            promptRun(IS_BLACK_MAN.msg, 700);
          } else {
            callback();
          }
        }
      },
      roastHandleEnable = true,
      gotoRoast;

    roastHandle = function (x, f) {
      if (!roastHandleEnable) return;
      roastHandleEnable = false;
      setTimeout(function () {
        roastHandleEnable = true;
      }, 200);
      if (x === -1) {
        if (state === 1) {
          onRoast = false;
          removeClass(toolWrapBottom, 'to-roast');
          changeBottom(commentWrap, -190, 200);
          state = 0;
        } else if (state === 2 && f === 2) {
          continueRoast();
          off(roastWrap, mouse.click, roastPut);
          off(body, mouse.down, roastCancel);
          state = 1;
        }
      } else if (x === 1) {
        if (state === 1) {
          if (roastContent.value.length === 0) return;
          addClass(body, 'set-roast');
          clearTimeout(roastInterval);
          on(roastWrap, mouse.click, roastPut);
          on(body, mouse.down, roastCancel);
          state = 2;
        }
      }
    }

    gotoRoast = function () {
      if (W.USER) {
        if (state === 2) {
          // sendPgv('NEW.AC_VIEW.NEWEVENT.TC.FQTUCAO_RIGHT');
          roastHandle(-1);
        } else if (onRoast) {
          onRoast = false;
          removeClass(toolWrapBottom, 'to-roast');
          changeBottom(commentWrap, -190, 200);
          state = 0;
        } else {
          checkBlackUser(function () {
            onRoast = true;
            addClass(toolWrapBottom, 'to-roast');
            changeBottom(commentWrap, 0, 200);
            setTimeout(function () {
              roastContent.focus();
            }, 50);
            state = 1;
          });
        }
      } else {
        try {
          toLogin();
        } catch (e) {

        }
      }
    };

    on(toRoast, mouse.click, gotoRoast);
    if (icoBarWrite) {
      on(icoBarWrite, mouse.click, gotoRoast);
    }
    if (!crossPage) {
      // 右侧工具栏
      on(roastBtnText, mouse.click, gotoRoast);
    }
    on(cancelRoast, mouse.click, function () {
      roastHandle(-1);
      sendPgv('NEW.AC_VIEW.NEWDM.QUXIAO_BUTTON'); // h
    });
    on(postRoast, mouse.click, function () {
      roastHandle(1);
      promptRun('蓝色区域才可以吐槽哦~');
      sendPgv('NEW.AC_VIEW.NEWDM.FASONG_BUTTON'); // h
    });
    on(roastPrompt.parentNode, mouse.click, function () {
      setTimeout(function () {
        roastContent.focus();
      }, 50);
    });
    roastContent.onkeydown = roastContent.onkeyup = checkText;
    if (roastMode && roastState === 0) {
      addClass(body, 'no-roast');
    }
  }();

  // 吐嘈获取与提交
  var getRoast = function (pid, page, size, callback) {
    if (typeof pid === 'object') {
      ajax.post({
        url: '/ComicView/getRoasts/',
        data: 'id=' + ID + '&cid=' + CID + '&pid=' + pid[0] + '&page=' + page + '&pagesize=' + size,
        argu: [1, nowPage],
        callback: function (responseText, argu) {
          callback(responseText, argu);
        }
      });
      ajax.post({
        url: '/ComicView/getRoasts/',
        data: 'id=' + ID + '&cid=' + CID + '&pid=' + pid[1] + '&page=' + page + '&pagesize=' + size,
        argu: [2, nowPage],
        callback: function (responseText, argu) {
          callback(responseText, argu);
        }
      });
    } else {
      ajax.post({
        url: '/ComicView/getRoasts/',
        data: 'id=' + ID + '&cid=' + CID + '&pid=' + pid + '&page=' + page + '&pagesize=' + size,
        argu: [0, nowPage],
        callback: function (responseText, argu) {
          callback(responseText, argu);
        }
      });
    }
  },
    addRoast = function (pid, xpos, ypos, w, h, content, func) {
      posX = ~~(xpos / 100 * w);
      posY = ~~(ypos / 100 * h);
      if (W.USER && W.USER.token) {
        ajax.post({
          url: '/ComicView/addRoast/',
          // data: 'id=' + ID + '&cid=' + CID + '&pid=' + pid + '&xpos=' + posX + '&ypos=' + posY + '&content=' + encodeURIComponent(content) + '&fc=' + fontColor + '&uin=' + W.USER.uin + '&tokenKey=' + W.USER.token,
          data: 'id=' + ID + '&cid=' + CID + '&pid=' + pid + '&xpos=' + posX + '&ypos=' + posY + '&content=' + encodeURIComponent(content) + '&uin=' + W.USER.uin + '&tokenKey=' + W.USER.token,
          callback: function (data) {
            if (func) {
              var data = JSON.parse(data);
              if (+data.ret === 2) {
                func(xpos, ypos, data.id);
              }
            }
          }
        });
      }
    };

  // url参数判断
  ! function () {
    var conf = window.location.href.split('?')[1],
      line,
      len,
      t,
      key,
      value;
    if (!conf) return;
    line = conf.split('&');
    len = line.length;
    while (len--) {
      t = line[len].split('=');
      if (!t[1]) return;
      key = t[0];
      value = t[1];
      t = [];
      switch (key) {
        case 'page':
          crossPageTo = +value;
          break;
        case 'top':
          !crossPage && smoothScroll(0, +value, ~~(+value / 1000) + 300);
          break;
        case 'jump':
          jumpPrompt = 1;
          break;
        case 'first':
          qqGameHallFirst = 1;
          break;
        case 'hd':
          window.hdID = value;
          break;
        default:
          break;
      }
    }
  }();

  ! function () {
    var comicContain = $$('comicContain'),
      comicContainCross = $$('comicContainCross'),
      // recommend = $$('recommend'),
      // recommendStack = $$('recommendStack'),
      // recommendListWrap = $$('recommendListWrap'),
      // recommendScrollBg = $$('recommendScrollBg'),
      // recommendScrollBlock = $$('recommendScrollBlock'),
      // catalogue = $$('catalogue'),
      // catalogueListWrap = $$('catalogueListWrap'),
      // catalogueScrollBg = $$('catalogueScrollBg'),
      // catalogueScrollBlock = $$('catalogueScrollBlock'),
      toolPageListChildren,
      imgobj = PICTURE,
      len = imgobj.length,
      innerUl = '',
      max = PRELOAD_NUM * 2 + 1,
      listTop = [],
      imgList = [],
      imgSrcList = [],
      imgPidList = [],
      loadingList = [],
      loadingState = [],
      roastAll = [],
      i = 0,
      nowLoadPic = 0,
      direction = 1,
      isLoading = false,
      list,
      _lowFixTop = function (os) {
        return os.indexOf('MSIE 7.0') !== -1 ? -4 : 0;
      }(navigator.userAgent),
      _isLoadFirstPic = false,
      _pvgCount = 0,
      _o,
      _len,
      _intervalResize,
      _intervalPreload,
      _intervalPvg,
      _loadPic;


    // 初始化滚动条
    function setBaseView(w, h) {
      scrollCatalogue.init(w, h);
      !crossPage && scrollRecommand && (scrollRecommand.init(w, h));
      scrollBookshelf && scrollBookshelf.init(w, h);
    }

    // pvg统计点击率
    function pvgCountAdd(PID) {
      if (++_pvgCount === 5) {
        ajax.post({
          url: '/ComicView/setPgvCountEx',
          data: 'pgv=5&eid=' + DATA.comic.eId
        });
        _pvgCount = 0;
      }
    }

    // 重新调节图片包裹大小
    if (!crossPage) {
      adjustWidth = function (width) {
        width = width > osWidth - 40 ? osWidth - 40 : width;
        width = width > 800 ? 800 : width;
        return width;
      }
      adjustHeight = function (width, height) {
        height = width > osWidth - 40 ? ~~((osWidth - 40) / width * height) : height;
        width = width > osWidth - 40 ? osWidth - 40 : width;
        height = width > 800 ? ~~(800 / width * height) : height;
        return height;
      }
    } else {
      adjustWidth = function (width) {
        return moveWidth;
      }
      adjustHeight = function (width, height) {
        osHeight = docEle.clientHeight ||
          window.innerHeight;
        return cleanMode || fullMode ? osHeight : osHeight - 97;
      }
    }

    // 吐槽展示
    ROAST_PRE = crossPage ? ROAST_PRE + 1 >> 1 : ROAST_PRE; // 对页数量变更
    ROAST_VIEW = crossPage ? ROAST_VIEW + 1 >> 1 : ROAST_VIEW; // 对页数量变更
    DANMU_TIME = crossPage ? DANMU_TIME - 4000 : DANMU_TIME; // 对页时间变更
    // compare = function(propertyName) {
    //     return function(o1, o2) {
    //         var v1 = +o1[propertyName],
    //             v2 = +o2[propertyName];
    //         if (v1 > v2) {
    //             return 1
    //         } else if (v1 < v2) return -1;
    //         return 0;
    //     }
    // },
    var barrage = $$('barrage'),
      roastNum = $$('roastNum'),
      roastMode = $$('roastMode'),
      icoBarOpen = $$('icoBarOpen'),
      icoBarShow = $$('icoBarShow'),
      icoBarMode = $$('icoBarMode'),
      changeRoast = $$('changeRoast'),
      icoBarChange = $$('icoBarChange'),
      roastBarWrap = $$('roastBarWrap'),
      turnToRoastDm = $$('turnToRoastDm'),
      roastSmallBar = $$('roastSmallBar'),
      roastBarContent = $$('roastBarContent'),
      roastHide = $$('roastHide'),
      getRandomArray = function (from, to) {
        var arr = [],
          i = from;
        for (; i <= to; ++i) {
          arr[i - from] = i;
        }
        return arr.sort(function () {
          return Math.random() > .5 ? 1 : -1;
        });
      },
      rate = function (str) {
        var i = 1,
          strLen = str.length,
          len = (strLen / 2) >> 0,
          num = 0,
          t,
          reg;
        for (; i < len; ++i) {
          reg = new RegExp('([\\s\\S]{' + i + '})(?:\\1+)', 'g');
          t = str.replace(reg, '$1').length;
          num = num < strLen - t ? strLen - t : num;
        }
        return num / strLen;
      },
      roast = {
        get: function (Duiye, size) {
          if (Duiye) {
            return function (o, n, need) {
              if (nowPage !== n) return;
              if (!roastAll[n]) {
                if (o[n].length === 2) {
                  roastAll[n] = 'loading';
                  getRoast(o[n][1].pid, 1, size, roast.start);
                } else {
                  roastAll[n] = [];
                  roastAll[n][0] = roastAll[n][1] = 'loading';
                  getRoast([o[n][1].pid, o[n][2].pid], 1, size, roast.start);
                }
              } else {
                roast.continued(n, need);
              }
            }
          } else {
            return function (o, n, need) {
              if (nowPage !== n) return;
              if (!roastAll[n]) {
                roastAll[n] = 'loading';
                getRoast(o[n].pid, 1, ROAST_SIZE, roast.start);
              } else {
                roast.continued(n, need);
              }
            }
          }
        }(crossPage, ROAST_SIZE),
        changeMode: function (n) {
          if (advWrap) {
            advWrap.style.display = 'none';
          }
          var father = barrage.parentNode.parentNode;
          switch (+roastState) {
            case 0:
            case 2:
              roastState = 1;
              removeClass(body, 'roast-dm');
              break;
            case 1:
              roastState = 2;
              addClass(body, 'roast-dm');
              break;
            default:
              break;
          }
          cookie('roastState', roastState, { path: '/', expires: 10 });
          clearTimeout(roastInterval);
          if (crossPage) {
            roast.get(devideImg, n, 1);
          } else {
            roast.get(imgobj, n, 1);
          }
        },
        run: function (o, n, t) {
          if (t && o.length !== 2) return;
          var _w = adjustWidth(imgobj && imgobj[n].width),
            _diff = roastState === 2 ? DANMU_INTERVAL : TUCAO_INTERVAL,
            _run = function (o, n) {
              if (!o.wrap || nowPage !== n) return;
              var roastGroup = o.wrap.children,
                total = o.len < ROAST_SIZE ? o.len : ROAST_SIZE,
                view = o.len < ROAST_VIEW ? o.len : ROAST_VIEW,
                node,
                i,
                _barNode,
                _coinNode,
                _thisPosition,
                _nextGroup,
                _next,
                _o;
              if (roastState === 1) {
                if (!crossPage && total > ROAST_VIEW && bigScreenRoastMode) {
                  _thisPosition = o.next % total % ROAST_VIEW;
                  _nextGroup = ~~((o.next % total) / ROAST_VIEW);
                  _coinNode = roastBarContent.children[1];
                  if (!roastBarContent.children[0]) {
                    return roast.continued(n, 1);
                  }
                  _barNode = roastBarContent.children[0].children[0];
                  if (o.roastBarGroup !== _nextGroup) {
                    o.roastBarGroup = _nextGroup;
                    transToY(_barNode, -32 * ROAST_VIEW * _nextGroup, 500);
                  }
                  transToY(_coinNode, _thisPosition * 32 + (cssCore ? 0 : 13), 500);
                }
                if (!o.circle) return 1;
                for (var i = 0; i < ROAST_VIEW; ++i) {
                  if (roastGroup[0].getAttribute('data-stop')) {
                    node = o.wrap.removeChild(roastGroup[1]);
                  } else {
                    node = o.wrap.removeChild(roastGroup[0]);
                  }
                  _next = o.data[o.next % total];
                  node.innerHTML = ~~_next.good > 0 ? '<span></span>' + _next.content + '<i>' + (_next.good > 10000 ? (_next.good - _next.good % 10000) / 10000 + '\u4E07' : _next.good) + '</i>' + '<b style="display:none;"></b>' :
                    '<span></span>' + _next.content + '<b style="display:none;"></b>';
                  node.style.cssText = 'left:' + _next.x + '%;top:' + _next.y + '%';
                  node.removeAttribute('data-user-hide');
                  node.setAttribute('data-roast-id', _next.roastId);
                  node.setAttribute('data-roast-seq', _next.sequence);

                  if (+_next.fc) {
                    node.className = 'color-' + _next.fc;
                  } else {
                    var _nodeClass = node.className;
                    if (_nodeClass) removeClass(node, _nodeClass);
                  }
                  o.wrap.appendChild(node);
                  Fade(node, 0, 1, 400);
                  o.next++;
                  if (o.next >= o.len) {
                    o.next = 0;
                    break;
                  }
                }
              } else if (roastState === 2) {
                // 弹幕右侧滚动
                // o.dmNextGroup = o.next;
                if (!crossPage && total > 17 && bigScreenRoastMode) {
                  o.roastBarGroup = !o.roastBarGroup ? 0 : o.roastBarGroup;
                }

                if (o.next < view) {
                  var _former = o.next,
                    _w = o.wrap.parentNode.offsetWidth,
                    _restart = function () {
                      if (_o.getAttribute('data-roast')) {
                        return;
                      }

                      transToX(_o, cssCore ? 0 : _w, 0);
                      _next = o.data[(_former + ROAST_VIEW) % total];
                      _former = (_former + ROAST_VIEW) % total;
                      _o.setAttribute('data-timestart', 0);
                      _o.setAttribute('data-timepass', 0);
                      _o.setAttribute('data-good', '');
                      _o.setAttribute('data-roast-id', _next.roastId);
                      // crossPage ? _o.setAttribute('data-roast-seq', n + '-' + _o.right + '-' + _former)
                      //           : _o.setAttribute('data-roast-seq', n + '-' + _former);
                      _o.setAttribute('data-roast-seq', _next.sequence);
                      _o.innerHTML = ~~_next.good > 0 ? _next.content + '<span>' + (_next.good > 10000 ? (_next.good - _next.good % 10000) / 10000 + '\u4E07' : _next.good) + '</span>' : _next.content;
                      if (+_next.fc) {
                        _o.className = 'color-' + _next.fc;
                      } else {
                        var _nodeClass = _o.className;
                        if (_nodeClass) removeClass(_o, _nodeClass);
                      }
                      setTimeout(function () {
                        _o.setAttribute('data-timestart', +new Date());
                        _o.setAttribute('data-timepass', 0);
                        transToX(_o, cssCore ? -_o.offsetWidth - _w - 100 : -_o.offsetWidth - 100, DANMU_TIME, _restart, n);
                      }, 300);
                    }
                  _o = roastGroup[_former];
                  _o.setAttribute('data-timestart', +new Date());
                  _o.setAttribute('data-timepass', 0);
                  transToX(_o, cssCore ? -_o.offsetWidth - _w - 100 : -_o.offsetWidth - 100, DANMU_TIME, _restart, n);
                  if (view === o.len && o.next === view - 1) return 1;
                } else return 1;
                o.next++;
              } else {
                if (!crossPage && total > 17 && bigScreenRoastMode) {
                  o.roastBarGroup = !o.roastBarGroup ? 0 : o.roastBarGroup;
                }
                o.next++;
              }

              if (o.next > total * 2 - 2) {
                o.next = o.next % total;
              }
            },
            end;
          clearTimeout(roastInterval);
          if (!t) {
            end = _run(o, n);
            if (end) return;
            roastInterval = setTimeout(function () {
              roast.run(o, n);
            }, _diff);
          } else {
            end = [];
            if (t === 3) {
              if (Math.random() < .5) {
                end[0] = _run(o[0], n);
                end[1] = 0;
              } else {
                end[0] = 0;
                end[1] = _run(o[1], n);
              }
            } else if (t === 2) {
              end[0] = 1;
              end[1] = _run(o[1], n);
              o[0].stop = 1;
            } else if (t === 1) {
              end[0] = _run(o[0], n);
              end[1] = 1;
              o[1].stop = 1;
            }

            if (end[0]) {
              if (end[1]) return;
              roastInterval = setTimeout(function () {
                roast.run(o, n, 2);
              }, _diff);
            } else if (end[1]) {
              roastInterval = setTimeout(function () {
                roast.run(o, n, 1);
              }, _diff);
            } else {
              roastInterval = setTimeout(function () {
                roast.run(o, n, 3);
              }, _diff);
            }
          }
        },
        start: function (data, argu) {
          var _temp = [],
            _hpos,
            _len,
            _t,
            innerRoast,
            innerRoastInfo,
            f = +argu[0] === 2 ? 1 : 0,
            n = argu[1],
            d = {},
            i = 0,
            w, h, nowImg, o;
          if (!data) return;
          data = JSON.parse(data);
          if (+data.ret !== 0) return;
          // 前端过滤
          ! function () {
            var i = 0,
              j = 0,
              regForNoMeaning = /(?:^[A-Za-z0-9\.\?\+\-,;!*`~。，、]+$)|(?:^[asdqwe\s]+$)|(秋Q|QQ|Qq|qq|w(?:.*)w(?:.*)w)|\u7834(?:.*)\u89e3|\u817e(?:.*)\u8baf|\u6536(?:.*)\u8d39/,
              regForCleaning = /[\u4e73\u54aa\u5978\u5a4a\u5c3b\u5c44\u5c4c\u5c4e\u5c59\u63d2\u64b8\u6deb\u80f8\u8279\u830e\u8349\u8d31\u903c\u9a9a\u9e21\u8214]|bi|cao|mi|shi|sao/g,
              regCheckAd = /jiawei|weixin|qun|manhua/,
              o,
              py;

            for (; i < data.data.length; ++i) {
              o = data.data[i].content;
              var f = false;

              // py = o.toPingYin('');
              // var len = py.length;
              // while (len--) {
              //     if (regCheckAd.test(py[len].replace(/^[a-zA-Z0-9]/g, ''))) {
              //         if (/[\da-zA-Z]{6,}/.test(o)) {
              //             f = true;
              //             break;
              //         }
              //     }
              // }

              if (regForNoMeaning.test(o) || rate(o) > .5) {
                // 删除例外
                // if (/^(233+|666+)$/.test(o)) {
                //     continue;
                // }
                f = true;
              }

              if (f) {
                data.data.splice(i, 1);
                i--;
                j++;
              } else {
                data.data[i].content = data.data[i].content.replace(regForCleaning, '*');
              }
            }
            data.total -= j;
          }();

          data.len = data.data.length;
          data.circle = ROAST_VIEW < data.len ? 1 : 0;
          data.next = 0;
          _len = data.len;

          // 按照时间顺序反转
          //data.data.reverse();

          // 按照热度排序
          // data.data.sort(function(a, b) {
          //     return (~~b.good) - (~~a.good) || (~~b.roastId) - (~~a.roastId);
          // });

          if (!crossPage) {
            o = imgobj[n];
            w = o.width;
            h = o.height;
            nowImg = imgList[n];
            //if (bigScreenRoastMode) {
            if (1) {
              d.data = data.data;
              d.total = data.total;
              d.hot = 0;
              innerRoastInfo = template('roastInfoMod', d);
              roastBarContent.innerHTML = innerRoastInfo;
            }
          } else {
            if (f) {
              o = devideImg[n][2];
            } else {
              o = devideImg[n][1];
            }
            w = o.width;
            h = o.height;
            o = comicContainCross.children[n].getElementsByTagName('img');
            if (f) {
              nowImg = o[1];
            } else {
              nowImg = o[0];
            }
          }

          if (!nowImg) return roastAll[n] = null;

          _hpos = ~~((1 - 38 / h) * 1000) / 10;

          for (; i < _len; ++i) {
            _t = data.data[i];
            // 这里对坐标进行了修正
            _t.x = ~~((+_t.xpos + 5) / w * 1000) / 10;
            _t.y = ~~((+_t.ypos + 1) / h * 1000) / 10;
            _t.x = _t.x > 100 ? 100 : _t.x;
            _t.y = _t.y > _hpos ? _t.y > 100 ? ~~(_hpos * Math.random()) : _hpos : _t.y;
            _t.sequence = nowPage + (crossPage ? '-' + (+argu[0] === 2 ? 1 : 0) : '') + '-' + i;
            // 超出边界旧数据进行随机分布
            if (i < ROAST_VIEW) {
              _temp.push(data.data[i]);
            }
          }

          d.list = _temp;
          data.wrap = nowImg.nextSibling.nextSibling;
          if (roastState === 1) {
            innerRoast = template('roastMod', d);

          } else if (roastState === 2) {
            d.width = data.wrap.parentNode.offsetWidth;
            d.random = getRandomArray(0, ROAST_VIEW - 1);
            innerRoast = template('roastModForDm', d);
          }
          d.list = _temp;
          data.resetData = _temp;
          data.mode = roastState;
          data.wrap.innerHTML = innerRoast;
          _temp = null;

          if (!crossPage) {
            if (data.total <= ROAST_VIEW) {
              addClass(roastBarContent.children[1], 'hidden');
            } else {
              removeClass(roastBarContent.children[1], 'hidden');
            }
          }

          var r0, r1;
          if (+argu[0]) {
            try {
              roastAll[n][+argu[0] - 1] = data;
            } catch (e) {
              return;
            }
            r0 = roastAll[n][0];
            r1 = roastAll[n][1];
            if (!r0 || r0 === 'loading' || !r1 || r1 === 'loading') return;
            clearTimeout(roastInterval);
            roast.run(roastAll[n], n, 3);
            roastNum.innerHTML = +r0.total + +r1.total;
          } else {
            roastAll[n] = data;
            roastAll[n].dmNextGroup = 0;
            clearTimeout(roastInterval);
            roast.run(data, n);
            if (!data.total && +data.total !== 0) return;
            roastNum.innerHTML = data.total;
          }
          // 广告弹幕
          if (nowPage === advSeq) {
            advDmRoast();
          }
        },
        continued: function (n, need, notChangeBar) {
          var o = roastAll[n],
            needChangeData,
            _changeMod = function (o) {
              if (!o.wrap) return;

              var d = {},
                innerRoast;

              o.mode = roastState;
              o.next = 0;
              d.list = o.resetData;

              if (roastState === 1) {
                innerRoast = template('roastMod', d);
                o.wrap.innerHTML = innerRoast;
              } else if (roastState === 2) {
                d.width = o.wrap.parentNode.offsetWidth;
                d.random = getRandomArray(0, ROAST_VIEW - 1);
                innerRoast = template('roastModForDm', d);
                o.wrap.innerHTML = innerRoast;
              }
            }
          if (o === 'loading' || !o) {
            roastAll[n] = '';
            return roast.get(crossPage ? devideImg : imgobj, nowPage, 1);
          }
          if (need && o.wrap) o.wrap.nextSibling.nextSibling.innerHTML = '';
          if (n !== nowPage || o.total === 0) return;
          clearTimeout(roastInterval);
          needChangeData = o.mode && roastState !== o.mode ||
            o[0] && roastState !== o[0].mode ? 1 : 0;
          if (needChangeData || need) {

            if (o.length) {
              _changeMod(o[0]);
              _changeMod(o[1]);
            } else {
              _changeMod(o);
            }
          }


          if (!notChangeBar && !crossPage && bigScreenRoastMode) {
            // 数据重新排序
            o.data.sort(function (a, b) {
              return ~~b.good - ~~a.good || (~~b.roastId) - (~~a.roastId);
            });

            o.hot = 0;
            var innerRoastInfo = template('roastInfoMod', o),
              node;
            roastBarContent.innerHTML = innerRoastInfo;
            if (o.total <= ROAST_VIEW) {
              addClass(roastBarContent.children[1], 'hidden');
            } else {
              removeClass(roastBarContent.children[1], 'hidden');
            }
            node = roastBarContent.children[0].children[0];
            transToY(node, -32 * ROAST_VIEW * o.roastBarGroup, 0);
          }


          if (o.length) {
            if (o[0] === 'loading' || o[1] === 'loading') {
              roast.get(devideImg, n);
            }
            roastNum.innerHTML = +o[0].total + +o[1].total;
            if (o[0].next === -1 && o[1].next === -1) return;
            if (o[0].stop) {
              if (o[1].stop) {
                return;
              } else {
                roast.run(o, n, 2);
              }
            } else if (o[1].stop) {
              roast.run(o, n, 1);
            } else {
              roast.run(o, n, 3);
            }
          } else {
            roastNum.innerHTML = o.total;
            if (o.next === -1) return;
            roast.run(o, n);
          }

        },
        stop: function () {
          addClass(document.body, 'no-roast');
          clearTimeout(roastInterval);
        },
        change: function (direction, check) {
          if (roastState === 1) {
            clearTimeout(roastInterval);
          }
          var _tcChange = function (o) {
            var from = o.next,
              to = from + (ROAST_VIEW > o.len ? o.len : ROAST_VIEW) - (crossPage ? 0 : 1),
              i = from,
              arr = [],
              data = {},
              innerRoast;
            if (from === -1) return 1;
            for (; i < to; ++i) {
              arr.push(o.data[(i + o.len) % o.len]);
            }
            Fade(o.wrap, 0, 1, 400);
            data.list = arr;
            innerRoast = template('roastChangeMod', data);
            o.wrap.innerHTML = innerRoast;
            o.next = to;
            o.hasChanged = 1;
          },
            _dmChange = function (o) {
              var total = o.len < ROAST_SIZE ? o.len : ROAST_SIZE,
                _barNode = roastBarContent.children[0].children[0];
              if (!crossPage && total > ROAST_VIEW && bigScreenRoastMode) {
                transToY(_barNode, -32 * ROAST_VIEW * o.roastBarGroup, 500);
              }
            },
            _n = nowPage,
            _o = roastAll[_n],
            maxBarGroup,
            maxBarDmGroup;
          if (!_o) return;
          if (direction && bigScreenRoastMode) {
            if (roastState === 1) {
              maxBarGroup = ~~((_o.total <= ROAST_SIZE ? _o.total : ROAST_SIZE) / ROAST_VIEW);
              if (direction === 1) {
                if (check && _o.roastBarGroup === maxBarGroup) return 1;
                _o.next = (_o.roastBarGroup === maxBarGroup ? 0 : _o.roastBarGroup + 1) * ROAST_VIEW - ROAST_VIEW + 1;
              } else if (direction === -1) {
                if (check && _o.roastBarGroup === 0) return 1;
                _o.next = (_o.roastBarGroup === 0 ? 0 : _o.roastBarGroup - 1) * ROAST_VIEW - ROAST_VIEW + 1;
              }
            } else if (roastState === 2) {
              maxBarDmGroup = ~~(_o.data.length / ROAST_VIEW);
              if (direction === -1) {
                _o.roastBarGroup += _o.roastBarGroup === 0 ? 0 : direction;
              } else if (direction === 1) {
                //_o.roastBarGroup = _o.roastBarGroup === maxBarGroup ? 0 : _o.roastBarGroup + direction;
                _o.roastBarGroup = (_o.roastBarGroup === maxBarDmGroup ? 0 : _o.roastBarGroup + 1);
              }
              _dmChange(_o);
            }
          }

          if (roastState === 1) {
            if (_o.length) {
              _tcChange(_o[0]);
              _tcChange(_o[1]);
            } else {
              _tcChange(_o);
            }
            roast.continued(_n, false, true);
          }

        }
      }
    if (icoBarChange) {
      on(icoBarChange, mouse.click, function () {
        if (roastState === 0) return;
        roast.change();
      });
    }
    if (!crossPage) {
      var changeBarRoastEnable = true,
        resetBarReset,
        roastDragTip = $$('roastDragTip'),
        hasBindDrag = false,
        doc = docEle,
        canDragMove = false;
      window.changeRoastByBar = function (direction, check) {
        if (changeBarRoastEnable) {
          changeBarRoastEnable = false;
          setTimeout(function () {
            changeBarRoastEnable = true;
          }, isMac ? 1000 : 500);
          // sendPgv('NEW.AC_VIEW.NEWEVENT.TC.QIEHUAN_RES');
          return roast.change(direction, check);
        }
      }
      var roastDragMove = function (e) {
        e0 = e || window.event;
        if (e0.pageX == null && e0.clientX != null) {
          e0.pageX = e0.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          e0.pageY = e0.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        anchor = {
          x: e0.pageX - 165 / 2,
          y: e0.pageY - 26 / 2
        };
        // roastDragTip.style.cssText = 'top:' + (~~(anchor.y) + 50) + 'px;';
      }
      onHover(roastBarContent, function (e) {
        e0 = e || window.event;
        e = e || window.event;
        e = e.target || e.srcElement;
        var n = nowPage,
          total;
        if (!roastAll[n]) return;
        total = roastAll[n].total;
        if (total > ROAST_VIEW && e.className !== 'roast-bar-p-size') {
          addClass(roastBarWrap, 'on-content-hover');
          if (!hasBindDrag) {
            hasBindDrag = true;
            roastBarContent.onmousemove = function (e) {
              if (roastState === 1) {
                roastDragMove(e);
              }
            };
          }
        }
      }, function (e) {
        e = e || window.event;
        e = e.target || e.srcElement;
        if (e.className === 'roast-mouse-bg') {
          hasBindDrag = false;
        }
        removeClass(roastBarWrap, 'on-content-hover');
        /*
         roastDragTip.style.display = 'none';
         roastDragTip.style.cssText = 'top:-999px';
         */
      });

      // roastBarContent.onmousemove = function(e) {
      //     roastDragMove(e);
      // };

      /*
       roastBarContent.onmousedown = function(e) {
       if (!changeBarRoastEnable) return;
       e = e || window.event;
       var tar = e.target || e.srcElement,
       n = nowPage,
       o = roastAll[n],
       child = roastBarContent.children[0].children[0];
       if (!o || o.total <= 17 || !tar) return e.returnValue = false;
       if (e.which === 2 || !e.which && e.button === 4) return;
       addClass(roastBarContent.children[1], 'hidden');
       clearTimeout(resetBarReset);
       clearTimeout(roastInterval);
       sendPgv('NEW.AC_VIEW.NEWDM.TUOZHUAI_ACT'); //h
       var now = +new Date,
       from = {
       X: e.clientX,
       Y: e.clientY
       };
       roastBarContent.onmousemove = function(e) {
       e = e || window.event;
       var toY = from.Y - e.clientY,
       loc = - 544 * o.roastBarGroup - toY;
       loc = loc > 0 ? loc / 2 : loc;
       transToY(child, loc, 0);
       }
       roastBarContent.onmouseup = function(e) {
       e = e || window.event;
       var tar = e.target || e.srcElement;
       if (e.type === 'mousemove' && (tar.tagName.toLowerCase() === 'p' || tar.tagName.toLowerCase() === 'span')) return;
       var toY = from.Y - e.clientY,
       diff = +new Date - now,
       v = toY / diff,
       reset = function() {
       transToY(child, - 544 * o.roastBarGroup, 300);
       resetBarReset = setTimeout(function() {
       roast.continued(n, false, true);
       }, 1000);
       }
       if (Math.abs(toY) > 120 || Math.abs(v) > 1.4) {
       if (changeRoastByBar(toY > 0 ? 1 : -1, true)) reset();
       } else {
       reset();
       }
       setTimeout(function() {
       removeClass(roastBarContent.children[1], 'hidden')
       }, 250);
       roastBarContent.onmouseup = function() {};
       roastBarContent.onmousemove = function() {};
       roastBarWrap.onmousemove = function() {};
       }
       roastBarWrap.onmousemove = roastBarContent.onmouseup;
       }
       */
    }
    on(changeRoast, mouse.click, function () {
      if (roastState === 0) return;
      roast.change();
    });
    on(barrage, mouse.click, function () {
      if (roastState === 0) return;
      roast.changeMode(nowPage);
    });
    var roastModeChange = function () {
      sendPgv('NEW.AC_VIEW.NEWDM.YINCANG_BUTTON'); // h
      if (+roastState) {
        cookie('roastState', '0', { path: '/', expires: 2 });
        roastState = 0;
        roast.stop();
      } else {
        if (!bigScreenRoastMode) {
          addClass(body, 'roast-shrink');
        }
        roastState = body.className.indexOf('roast-dm') === -1 ? 1 : 2;
        cookie('roastState', roastState, { path: '/', expires: 10 });
        removeClass(body, 'no-roast');
        clearTimeout(roastDelay);
        roastDelay = setTimeout(function () {
          if (roastState === 1) {
            roast.continued(nowPage);
          } else {
            roast.get(imgobj, nowPage, 1);
          }
        }, 100);
      }
    }
    on(roastMode, mouse.click, roastModeChange);
    if (icoBarOpen) {
      //on(roastSmallBar, mouse.click, roastModeChange);
      on(icoBarOpen, mouse.click, roastModeChange);
    }
    if (roastHide) {
      on(roastHide, mouse.click, roastModeChange);
    }
    if (icoBarShow) {
      on(icoBarShow, mouse.click, roastModeChange);
    }


    window.continueRoast = function () {
      removeClass(body, 'set-roast');
      if (roastState && roastAll[nowPage]) {
        roast.continued(nowPage);
      }
    }

    if (icoBarMode) {
      on(icoBarMode, mouse.click, function () {
        if (roastState === 0) return;
        roast.changeMode(nowPage);
      });
    }

    if (!crossPage) {
      // 右侧工具栏
      on(turnToRoastDm, mouse.click, function () {
        if (roastState === 0) return;
        roast.changeMode(nowPage);
      });
      // 更新图片加载队列
      function updateLoadingList(n) {
        var i = 0;
        nowLoadPic = 0;
        for (; i < max; ++i) {
          loadingList[i] = i < PRELOAD_NUM + 1 ? direction * i + n :
            -direction * (i - PRELOAD_NUM) + n;
        }
      }

      // 寻找当前页数
      function findPageNow(dis) {
        if (nowPage === undefined) return 0;
        var p = nowPage,
          _len = len;
        if (listTop[p] >= dis) {
          direction = -1;
          while (p > 0 && listTop[p] > dis) {
            p--;
          }
        } else {
          direction = 1;
          while (p < _len && listTop[p + 1] < dis) {
            p++;
          }
        }
        if (list[p + 1]) {
          if (dis < listTop[p + 1] / 2 + listTop[p] / 2) p--;
        } else {
          if (dis < listTop[p] + imgList[_len - 1].offsetHeight / 2) p--
        }
        return p < 0 ? 0 : p;
      }

      // 闲时逻辑
      var loadRestInterval = null;
      // 图片过大而隐藏右侧
      window.picShrink = false;
      // 懒加载图片
      var _loadPic = function () {
        var image = new Image(),
          thisPage = loadingList[nowLoadPic];
        if (thisPage >= 0 && thisPage < len) {
          if (!loadingState[thisPage] ||
            loadingState[thisPage] === 'pre-loading') {
            loadingState[thisPage] = 'loading';
            (function (former) {
              var listFormer = imgList[former],
                loadTimeout = setTimeout(function () {
                  var wrap = listFormer.parentNode,
                    before = listFormer.nextSibling.nextSibling,
                    newNode = document.createElement('img');
                  newNode.src = imgSrcList[former];
                  newNode.className = 'network-slow';
                  wrap.removeChild(listFormer);
                  wrap.insertBefore(newNode, before);
                }, 2000);
              image.onload = function () {
                image.onload = null;
                image = null;
                if (listFormer) {
                  clearTimeout(loadTimeout);
                  Fade(listFormer, 0, 1, 300);
                  listFormer.className = 'loaded';
                  listFormer.src = imgSrcList[former];
                }

                loadingState[former] = 'loaded';
                loadNext();
                pvgCountAdd(imgPidList[former]);

                if (!_isLoadFirstPic) {
                  otherData();
                  _isLoadFirstPic = true;
                }
              }
              image.onerror = function () {
                listFormer.className = 'network-error';
                listFormer.src = imgSrcList[former];
              }
            }(thisPage));
            image.src = imgSrcList[thisPage];
          } else {
            loadNext();
          }
        } else {
          nowLoadPic++;
          if (nowLoadPic < max - 1) _loadPic();
        }
      }

      function loadPictures() {
        // 统计流量
        clearTimeout(_intervalPvg);
        _intervalPvg = setTimeout(function () {
          if (typeof pgvMain === 'function') {
            pvRepeatCount = 1;
            pgvMain({ statIframe: true, repeatApplay: "true" });
          }
        }, 1000);

        clearTimeout(_intervalPreload);
        _intervalPreload = setTimeout(_loadPic, 70);
      }

      // 加载下张图，递归
      var line = 0,
        newLoad = function (lineFormer, next) {
          var forCache = new Image(),
            i = len,
            nextFlag = false,
            nextPic;
          if (next) {
            while (loadingState[next] === 'pre-loading' ||
              loadingState[next] === 'loaded') {
              next++;
            }
            nextPic = next;
          } else {
            while (i--) {
              if (loadingState[i] === 'loading') return;
              if (!nextFlag && loadingState[i]) {
                nextFlag = true;
                nextPic = i + 1;
              }
            }
            // 中止线程
            if (nextPic === len) {
              loadNext = function () {
                nowLoadPic++;
                if (nowLoadPic < max - 1) {
                  _loadPic();
                }
              }
            }
          }
          if (nextPic >= len) return;

          forCache.onload = function () {
            forCache.onload = null;
            forCache = null;
            if (lineFormer === line) newLoad(lineFormer, nextPic + 1);
          }
          forCache.src = imgSrcList[nextPic];
          loadingState[nextPic] = 'pre-loading';
        },
        loadNext = function () {
          nowLoadPic++;
          if (nowLoadPic < max - 1) {
            _loadPic();
          } else {
            line++;
            newLoad(line);
          }
        }

      // 更新图片加载距离(顶部)
      var getListOffsetTop = function () {
        var i = 0,
          _len = len;
        for (; i < _len; ++i) {
          listTop[i] = list[i].offsetTop + _lowFixTop * i;
        }
      }

      // 向外暴露最大页码
      window.maxPage = len;

      // 滚动事件轮询
      var _saveTopInterval,
        _checkCleanInterval,
        _loadInterval,
        _formerScrollTop;

      var handler = function (f) {
        if (!crossPage) {
          comicHeight = comicContain.offsetHeight;
        }
        var scrollTop = getScrollTop(),
          distance = scrollTop + osHeight,
          _close = jumpPrompt ? true : false,
          _nowPage,
          _saveTop = function () {
            var promptContinueRead = $$('promptContinueRead');
            if (!promptContinueRead) _close = true;
            if (isLocalStorageNameSupported) {
              window.localStorage.setItem(ID + 'top', scrollTop);
              if (!_close && scrollTop > 1000) {
                Fade(promptContinueRead, 1, 0, 200);
                setTimeout(function () {
                  promptContinueRead.parentNode.removeChild(promptContinueRead);
                  promptContinueRead = null
                }, 210);
                _close = true;
              }
            }
          },
          checkClean = function () {
            window._isbottom = comicHeight - scrollTop - osHeight < bottomNum;
            if (scrollTop > 100 && !cleanMode && _formerScrollTop <= scrollTop && !window._isbottom) {
              cleanMode = 1;
              addClass(body, 'fullscreen');
            } else if (window._isbottom || (cleanMode && _formerScrollTop > scrollTop && Math.abs(_formerScrollTop - scrollTop) >= 550)) {
              // 自动进入下一话
              cleanMode = 0;
              removeClass(body, 'fullscreen');
            }
            _formerScrollTop = scrollTop;
          }

        clearTimeout(_checkCleanInterval);
        _checkCleanInterval = setTimeout(checkClean, 250);

        // 存储滚动位置与吐槽加载
        clearTimeout(_saveTopInterval);
        _saveTopInterval = setTimeout(_saveTop, 500);

        _loadInterval = setTimeout(function () {
          _nowPage = findPageNow(distance);
          if (_nowPage === nowPage) return;

          nowPage = _nowPage;
          updateLoadingList(_nowPage);
          loadPictures();
          clearTimeout(roastDelay);
          if (roastState) {
            clearTimeout(roastDelay);
            roastDelay = setTimeout(function () {
              roast.get(imgobj, nowPage);
            }, 1000);
          } else {
            roastNum.innerHTML = '--';
          }
          // if (roastState) {
          //     roastDelay = setTimeout(function() {
          //         roast.get(imgobj, nowPage);
          //     }, 1000);
          // }
        }, f ? 0 : 120);
        if (bigScreenRoastMode && !window.picShrink) {
          addClass(body, 'roast-right');
          //removeClass(roastBarShrink, 'roast-bar-shrink');
          removeClass(body, 'roast-shrink');
        } else {
          // removeClass(body, 'roast-right');
          addClass(body, 'roast-right');
          //addClass(roastBarShrink, 'roast-bar-shrink');
          addClass(body, 'roast-shrink');
        }
      }

      // resize
      // var picShrinkCheck = false;
      window.goScalePic = function () {
        var i = 0,
          _len = len,
          _list = list,
          _o;
        for (; i < _len; ++i) {
          _o = imgobj[i];
          if (!_list) return;
          _list[i].style.cssText = 'width:' + adjustWidth(_o.width) * scaleRate + 'px;height:' +
            adjustHeight(_o.width, _o.height) * scaleRate + 'px;';
          // if (!picShrinkCheck && _o.width >= 1200) {
          //     window.picShrink = true;
          // }
        }
        getListOffsetTop();
        handler();
      }

      // 插入图片模版
      for (; i < len; ++i) {
        _o = imgobj[i];
        imgSrcList[i] = _o.url;
        imgPidList[i] = _o.pid;
        // 重载宽300以下的图源大小
        if (+_o.width < 300) {
          imgobj[i].height = (300 / (+_o.width) * (+_o.height)) >> 0;
          imgobj[i].width = 300;
        }
      }

      if (isLocalStorageNameSupported) {
        scaleRate = +window.localStorage.getItem(ID + 'scale') || 1;
      }
      _o = {
        firstPicState: window.loadedFirstPic,
        list: imgobj,
        aH: adjustHeight,
        aW: adjustWidth,
        top: DATA.ads.top,
        bottom: DATA.ads.bottom
      }
      if (window.loadedFirstPic) {
        loadingState[0] = +new Date;
        _pvgCount++;
        setTimeout(function () {
          if (typeof pgvMain === 'function') {
            pvRepeatCount = 1;
            pgvMain({ statIframe: true, repeatApplay: "true" });
          }
        }, 200);
        otherData();
      }
      innerUl = template('comicContainMod', _o);
      comicContain.innerHTML = innerUl;
    } else {
      // 对页临时代码
      var wrapWidth = osWidth * .44,
        devideImg = [],
        isFirstBlock = true,
        goPage,
        _tmpArr = [],
        _tmp;
      moveWidth = ~~(osWidth * .88 + 1);

      handler = function () { }
      // move-animation by Rusher
      var cubicCurve = {},
        trans,
        _curve,
        setCubic = function (a, b, c, d) {
          cubicCurve.A = a;
          cubicCurve.B = b;
          cubicCurve.C = c;
          cubicCurve.D = d;
        };

      // ease-in
      setCubic(0.25, 0.1, 0.25, 1);

      if (cssCore !== '') {

        comicContainCross[cssCore + 'TransitionTimingFunction'] = 'cubic-bezier(' + cubicCurve.A + ',' + cubicCurve.B + ',' + cubicCurve.C + ',' + cubicCurve.D + ')';

        trans = function (o, x, y, t, a) {

          var s = o.style,
            c = 'translate(' + x + 'px,' + y + 'px) translateZ(0)';

          s[cssCore + 'TransitionDuration'] = t + 'ms';

          if (a && a.scale) {
            c += t === 0 ? ' scale(' + a.scale[0] + ')' :
              ' scale(' + a.scale[1] + ')';
          }

          if (a && a.rotate) {
            c += t === 0 ? ' rotate(' + a.rotate[0] + 'deg)' :
              ' rotate(' + a.rotate[1] + 'deg)';
          }
          s[cssCore + 'TransformOrigin'] = '50% 50%';
          s[cssCore + 'Transform'] = c;
        }
      } else {
        // simulate translate for ie9-
        // Cubic-bezier : Fn(t) = (3p1-3p2+1)t^3+(3p2-6p1)t^2-3p1t.
        _curve = new UnitBezier(cubicCurve.A, cubicCurve.B, cubicCurve.C, cubicCurve.D);

        trans = function (o, x, y, t, e) {

          var cs = o.currentStyle,
            s = o.style,
            cx = parseInt(s.left || cs.left || 0, 10),
            cy = parseInt(s.top || cs.top || 0, 10),
            dx = x - cx,
            dy = y - cy,
            ft = +new Date,
            end = ft + t,
            pos = 0,
            diff,
            _trans = function () {
              if (+new Date > end) {
                s.left = x + 'px';
                s.top = y + 'px';
                if (e) {
                  s.filter = 'alpha(opacity=' + 100 * e[1] + ')';
                }
                return 0;
              } else {
                diff = end - new Date;
                pos = diff / t;
                // fix to cubic-bezier
                pos = _curve.solve(1 - pos, UnitBezier.prototype.epsilon);
                s.left = (cx + dx * pos) + 'px';
                s.top = (cy + dy * pos) + 'px';
                if (e) {
                  s.filter = 'alpha(opacity=' + ~~(100 * (e[1] * pos - e[0] * (1 - pos))) + ')';
                }
              }
              return 1;
            },
            _requestTrans = function () {
              requestAnimationFrame(function () {
                if (_trans()) _requestTrans();
              });
            }
          _requestTrans();
        }
      }
      window.trans = trans;

      // 组织对页拼装格式
      // 数组第0位是状态
      // 0 正常
      // 1 左侧大按钮
      // 2 左侧小按钮
      // 3 右侧大按钮
      // 4 右侧小按钮
      // 5 跨页
      // 6 补页
      // 7 末尾跨页
      _tmp = imgobj[0];
      if (_tmp.width < _tmp.height) {
        _tmpArr[0] = 1;
      } else {
        _tmpArr[0] = 2;
      }
      _tmpArr[1] = _tmp;
      if (DATA.chapter.blankFirst === 1 && IS_JAPAN) {
        _tmpArr[2] = imgobj[1];
        _tmpArr[0] = 4;
      }
      devideImg.push(_tmpArr);
      _tmpArr = [];
      for (i = devideImg[0][2] ? 2 : 1; i < len - 1; ++i) {
        _tmp = imgobj[i];
        if (+_tmp.width < +_tmp.height) {
          if (isFirstBlock) {
            _tmpArr[0] = 0;
            _tmpArr[1] = _tmp;
          } else {
            _tmpArr[2] = _tmp;
            devideImg.push(_tmpArr);
            _tmpArr = [];
          }
          isFirstBlock = !isFirstBlock;
        } else {
          if (!isFirstBlock) {
            _tmpArr[0] = 6;
            // 补内容
            devideImg.push(_tmpArr);
            _tmpArr = []; // 非常重要 push只是引用
          }
          _tmpArr[0] = 5;
          _tmpArr[1] = _tmp;
          devideImg.push(_tmpArr);
          _tmpArr = [];
          isFirstBlock = true;
        }
      }

      if (imgobj.length > 1) {
        _tmp = imgobj[len - 1];
        if (_tmp.width < _tmp.height) {
          if (isFirstBlock) {
            _tmpArr[0] = 3;
            _tmpArr[1] = _tmp;
          } else {
            _tmpArr[0] = 4;
            _tmpArr[2] = _tmp;
          }
          devideImg.push(_tmpArr);
          _tmpArr = [];
        } else {
          if (!isFirstBlock) {
            _tmpArr[0] = 6;
            devideImg.push(_tmpArr);
            _tmpArr = [];
          }
          _tmpArr[0] = 7;
          _tmpArr[1] = _tmp;
          devideImg.push(_tmpArr);
          _tmpArr = [];
          isFirstBlock = true;
        }
        _tmpArr = [];
      }
      if (IS_JAPAN) {
        crossPageTo = crossPageTo === 'max' ? 0 : crossPageTo;
        crossPageTo = crossPageTo === 'new' ? devideImg.length - 1 : crossPageTo;
        nowPage = devideImg.length - 1;
        devideImg.reverse();
      } else {
        crossPageTo = crossPageTo === 'max' ? devideImg.length - 1 : crossPageTo;
        crossPageTo = crossPageTo === 'new' ? 0 : crossPageTo;
        nowPage = 0;
      }

      _o = {
        firstPicState: window.loadedFirstPic,
        list: devideImg,
        cTitle: DATA.chapter.cTitle,
        title: DATA.comic.title,
        width: moveWidth,
        height: osHeight + (cleanMode || fullMode ? 0 : -97),
        ad: DATA.ads.top
      }

      window.comicContainReset = function () {
        comicContainCross.style.width = adjustWidth() * devideImg.length + 1 + 'px';
        comicContainCross.style.height = adjustHeight() + 'px';
        comicContainCross.parentNode.style.width = adjustWidth() + 'px';
        comicContainCross.parentNode.style.height = adjustHeight() + 'px';
      }

      // 临时：为修复日漫 付费 未登录情况下报错问题
      if (_o.list.length === 1) {
        _o.list[0][0] = 1;
        delete _o.list[0][2];
        _o.list[0].length = 2;
      }

      innerUl = template('comicContainModCross', _o);
      comicContainReset();
      comicContainCross.innerHTML = innerUl;
    }

    if (!crossPage) {
      list = makeArray(comicContain.children);
      imgList = makeArray(comicContain.getElementsByTagName('img'));
      // 剔除广告
      _len = list.length;
      for (i = 0; i < _len; ++i) {
        if (list[i].className) {
          list.splice(i, 1);
          imgList.splice(i, 1);
          _len--;
          i--;
        }
      }
      getListOffsetTop();
      handler(true);
    } else {
      list = makeArray(comicContainCross.children);
      imgList = makeArray(comicContainCross.getElementsByTagName('img'));

      // 向外暴露最大页码，供活动等调用
      window.maxPage = list.length - 1;

      // 闲时加载单线程,可优化
      var lineInterval = null,
        maxLoad = devideImg.length - 1,
        isJapanComic = IS_JAPAN,
        linePic = isJapanComic ? maxLoad - 2 : 2,
        startNewLoad = function (timeout, n) {
          clearTimeout(lineInterval);
          if (n) linePic = n;
          lineInterval = setTimeout(newLoad, timeout ? timeout : 100);
        },
        newLoad = function () {
          var _thisPreload = devideImg[linePic],
            _loadNow = 1,
            _loadNext = function () {
              var _o = new Image();
              if (!_thisPreload) return;
              if (_loadNow < _thisPreload.length) {
                _o.onload = function () {
                  _o.onload = null;
                  _o = null;
                  _loadNext();
                  // loadingState = 'pre-loaded';
                }
                // loadingState = 'pre-loading';
                _o.src = _thisPreload[_loadNow++].url;
              } else {
                linePic += isJapanComic ? -1 : 1;
                startNewLoad();
              }
            }
          if (linePic < 0 && isJapanComic ||
            !isJapanComic && linePic > maxLoad) {
            startNewLoad = function () { };
            return;
          }
          if (loadingState[linePic]) {
            linePic += isJapanComic ? -1 : 1;
            startNewLoad(20);
            return;
          }
          _loadNext();
        };

      // 第一组
      if (IS_JAPAN) {
        // list[list.length - 1].setAttribute('data-loaded', 1);
        loadingState[list.length - 1] = 'loaded';
      } else {
        loadingState[0] = 'loaded';
        // list[0].setAttribute('data-loaded', 1);
      }
      // 首图统计
      // pvgCountAdd();
      // if (typeof pgvMain === 'function') {
      //     pvRepeatCount = 1;
      //     pgvMain();
      // }

      // 翻页
      window.devideImg = devideImg;
      goPage = function (max, t) {
        var toolPageNow = $$('toolPageNow'),
          _close = jumpPrompt ? true : false,
          cl = $$('crossLeft'),
          cr = $$('crossRight'),
          state = 0,
          needPrompt = cookie('needPrompt'),
          canRead = DATA.chapter.canRead,
          local = window.localStorage,
          session = window.sessionStorage,
          sessionHistory = session && session.getItem(ID),
          comicContain = $$('comicContain'),
          turnNextChapter = function (id, title) {
            if (!canRead) return;
            if (needPrompt) {
              return function (n) {
                if (n === -1) {
                  window.location.href = makeUrl(ID, PREV_CHAPTER) + '?page=max';
                } else if (n === 1) {
                  window.location.href = makeUrl(ID, NEXT_CHAPTER, 1);
                }
              }
            } else {
              window.closePrompt = function () {
                pageChangePrompt = false;
                chapterChangePrompt.style.display = 'none';
              }
              window.localTo = function (n) {
                var x = $$('promptCheck').checked;
                if (x) cookie('needPrompt', '1', { path: '/', expires: 2 });
                if (n === -1) {
                  window.location.href = makeUrl(ID, PREV_CHAPTER) + '?page=max';
                } else if (n === 1) {
                  window.location.href = makeUrl(ID, NEXT_CHAPTER);
                }
              }
              return function (n) {
                var chapterChangePrompt = $$('chapterChangePrompt'),
                  innerPrompt,
                  data = {
                    title: title,
                    id: id,
                    turnTitle: n === -1 ? PREV_CHAPTER_NAME : NEXT_CHAPTER_NAME,
                    turnState: n === -1 ? '回到上' : '进入下',
                    turnTo: n
                  }
                pageChangePrompt = true;
                innerPrompt = template('chapterChangePromptMod', data);
                chapterChangePrompt.innerHTML = innerPrompt;
                chapterChangePrompt.style.display = 'block';
                // sendPgv(n === -1 ? 'NEW.AC_VIEW.NEWEVENT.DUIYE.ERRO_PREV' : 'NEW.AC_VIEW.NEWEVENT.DUIYE.ERRO_NEXT');
              }
            }
          }(ID, DATA.chapter.cTitle),
          putPicIn = function (o) {
            if (o.getAttribute('data-src')) {
              o.src = o.getAttribute('data-src');
            }
            clearTimeout(lineInterval);
          },
          checkList = function (n, str) {
            var f = 0,
              img,
              len,
              o;
            if (n > max || n < 0) return;
            o = list[n];
            if (str) {
              o.className = str;
            } else {
              o.removeAttribute('class');
              o.removeAttribute('className');
            }

            if (loadingState[n]) {
              startNewLoad(200, n);
              if (loadingState === 'loaded') return;
            }
            img = o.getElementsByTagName('img');
            len = img.length;
            if (len === 1) {
              img[0].onload = function () {
                this.removeAttribute('data-src');
                loadingState[n] = 'loaded';
                startNewLoad(200, nowPage);
              }
              putPicIn(img[0]);
            } else {
              img[0].onload = img[1].onload = function () {
                this.removeAttribute('data-src');
                if (f === 0) return f++;
                loadingState[n] = 'loaded';
                startNewLoad(200, nowPage);
              }
              putPicIn(img[0]);
              putPicIn(img[1]);
            }
          },
          updateActive = function (old, now) {

            if (Math.abs(old - now) === 1) {
              checkList(2 * old - now, '');
              checkList(2 * now - old, 'active');
            } else {

              checkList(old + 1, '');
              list[old].className = '';
              checkList(old - 1, '');

              checkList(now + 1, 'active');
              checkList(now, 'active');
              checkList(now - 1, 'active');

            }

          },
          checkChapterState = function (_state) {
            if (_state !== state && state ||
              _state === -1) {
              switch (state) {
                case 1:
                  removeClass(cl, 'prev-chapter');
                  break;
                case 2:
                  removeClass(cr, 'next-chapter');
                  break;
                case 3:
                  removeClass(cr, 'prev-chapter');
                  break;
                case 4:
                  removeClass(cl, 'next-chapter');
                  break;
                case 5:
                case 6:
                case 7:
                case 8:
                  removeClass(cl, 'no-chapter');
                  removeClass(cr, 'no-chapter');
                  break;
                default:
                  break;
              }
            }
          }
        return function (n) {
          var _state;
          if (!goPageEnable) return;
          goPageEnable = false;
          setTimeout(function () {
            goPageEnable = true;
          }, 300);
          var _t;
          if (n < 0 && !isJapanComic ||
            n > max && isJapanComic) {
            if (+PREV_CHAPTER) {
              turnNextChapter(-1);
            } else {
              noPrev();
            }
            return trans(comicContainCross, -nowPage * moveWidth, 0, 300);
          }
          if (n > max && !isJapanComic ||
            n < 0 && isJapanComic) {
            if (+NEXT_CHAPTER) {
              window.location.href = makeUrl(ID, NEXT_CHAPTER, 1);
            } else {
              noMore();
            }
            return trans(comicContainCross, -nowPage * moveWidth, 0, 300);
          }

          toolPageListChildren && (toolPageListChildren[isJapanComic ? max - nowPage : nowPage].className = '');
          updateActive(nowPage, n);
          trans(comicContainCross, -n * moveWidth, 0, t ? t : 300);
          nowPage = n;
          _t = isJapanComic ? max - n : n;
          toolPageListChildren && (toolPageListChildren[_t].className = 'now-reading');
          // 存储浏览记录

          if (local && sessionHistory) {
            window.localStorage.setItem(ID + 'page', nowPage);
          }

          // 切页按钮样式
          if (_t === 0) {
            if (PREV_CHAPTER) {
              if (IS_JAPAN) {
                checkChapterState(3);
                addClass(cr, 'prev-chapter');
                state = 3;
              } else {
                checkChapterState(1);
                addClass(cl, 'prev-chapter');
                state = 1;
              }
            } else {
              if (IS_JAPAN) {
                checkChapterState(7);
                addClass(cr, 'no-chapter');
                state = 7;
              } else {
                checkChapterState(5);
                addClass(cl, 'no-chapter');
                state = 5;
              }
            }
          } else if (_t === max) {
            if (NEXT_CHAPTER) {
              if (IS_JAPAN) {
                checkChapterState(4);
                addClass(cl, 'next-chapter');
                state = 4;
              } else {
                checkChapterState(2);
                addClass(cr, 'next-chapter');
                state = 2;
              }
            } else {
              if (IS_JAPAN) {
                checkChapterState(8);
                addClass(cl, 'no-chapter');
                state = 8;
              } else {
                checkChapterState(6);
                addClass(cr, 'no-chapter');
                state = 6;
              }
            }
          } else if (state) {
            checkChapterState(-1);
            state = 0;
          }

          if (!_close && _t > 1) {
            var promptContinueRead = $$('promptContinueRead');
            if (!promptContinueRead) _close = true;
            if (window.localStorage && !_close) {
              Fade(promptContinueRead, 1, 0, 200);
              setTimeout(function () {
                try {
                  promptContinueRead.parentNode.removeChild(promptContinueRead);
                  promptContinueRead = null
                } catch (e) {

                }
              }, 210);
              _close = true;
            }
          }


          _t = _t / max;
          _t = _t > .5 ? _t + 8 / max :
            _t - 4 / max;
          scrollToolPage && scrollToolPage.set(_t);

          setTimeout(function () {
            var nowPageNum = isJapanComic ? max - n + 1 : n + 1;
            nowPageNum = nowPageNum < 10 && max > 9 ? '0' + nowPageNum : nowPageNum;
            toolPageNow.innerHTML = nowPageNum + '/' + (max + 1);
          }, t);

          // 吐槽开始
          if (roastState) {
            clearTimeout(roastDelay);
            roastDelay = setTimeout(function () {
              roast.get(devideImg, n);
            }, 1000);
          } else {
            roastNum.innerHTML = '--';
          }

          // 流量统计 和 人气统计
          for (var i = 0; i < devideImg[n].length - 1; ++i) {
            pvgCountAdd(devideImg[n][i + 1]['pid']);
            if (typeof pgvMain === 'function') {
              pgvMain({ statIframe: true, repeatApplay: "true" });
            }
          }
        }
      }(list.length - 1);

      on($$('crossLeft'), mouse.down, function () {
        sendPgv(IS_JAPAN ? 'NEW.AC_VIEW.NEWEVENT.DUIYE.PAGENEXT' : 'NEW.AC_VIEW.NEWEVENT.DUIYE.PAGEPREV');
        goPage(nowPage - 1);
      })

      on($$('crossRight'), mouse.down, function () {
        sendPgv(IS_JAPAN ? 'NEW.AC_VIEW.NEWEVENT.DUIYE.PAGEPREV' : 'NEW.AC_VIEW.NEWEVENT.DUIYE.PAGENEXT');
        goPage(nowPage + 1);
      })

      ! function () {
        goPageEnable = true; // 此时开启 防止提前触摸
        window.goPage = goPage;
        goPage(nowPage, 0);
        if (+crossPageTo === 0) {
          if (IS_JAPAN) {
            goPageEnable = true;
            goPage(0, 0);
          }
        } else if (crossPageTo) {
          goPageEnable = true;
          goPage(+crossPageTo, 0);
        }
      }();

      var scalePicTimeout = null;
      window.goScalePic = function () {
        clearTimeout(scalePicTimeout);
        scalePicTimeout = setTimeout(function () {
          var i = 0,
            _len = len,
            _list = list,
            w,
            h,
            _o,
            _p,
            _w,
            _h,
            _f,
            _s,
            _tw,
            _th;
          // 重新定位图片
          osWidth = docEle.clientWidth ||
            window.innerWidth;
          moveWidth = ~~(osWidth * .88 + 1);
          trans(comicContainCross, -nowPage * moveWidth, 0, 0);

          comicContainReset();
          for (; i < _len; ++i) {
            _o = imgobj[i];
            if (!_list[i]) break;
            _list[i].style.cssText = 'width:' + adjustWidth(_o.width) + 'px;height:' +
              adjustHeight(_o.width, _o.height) + 'px;';
          }
          _len = imgList.length;
          while (_len--) {
            _o = imgList[_len];
            _p = _o.parentNode;
            _f = _p.parentNode;
            _w = +_o.getAttribute('data-w');
            _h = +_o.getAttribute('data-h');
            _s = _f.className === 'all' ? 1 : 0;
            w = +_f.offsetWidth;
            h = +_f.offsetHeight;

            _tw = ~~(_w / _h * h);
            _th = ~~(_h / _w * w);

            // if (_w > _h && w > _w && h > _h && !_s) {
            //     _p.style.cssText = 'height:' + _h + 'px;margin-top:' + (h - _h) / 2 + 'px';
            //     continue;
            // }
            if (w / h < _w / _h && !_s) {
              _p.style.cssText = 'width:99.5%;height:' + _th + 'px;top:50%;margin-top:-' + _th / 2 + 'px';
            } else {
              if (_h <= h) {
                _p.style.cssText = 'width:' + _w + 'px;height:' + _h + 'px;';
                _tw = _w;
                _th = _h;
                _p.style.marginTop = (h - _h) / 2 + 'px';
              } else {
                _p.style.cssText = 'width:' + _tw + 'px;height:' + h + 'px;';
                _th = h;
              }
              if (_s) {
                _p.style.marginLeft = -_tw / 2 + 'px';
                _p.style.marginTop = -_th / 2 + 'px';
              }
            }

          }


        }, 100);
      }
    }

    // 页内跳转
    ! function () {
      if (crossPage) {
        var i = 0,
          len = devideImg.length,
          pagerBtn = $$('pagerBtn'),
          toolPageList = $$('toolPageList'),
          toolPageListWrap = $$('toolPageListWrap'),
          toolPageScrollBg = $$('toolPageScrollBg'),
          toolPageScrollBlock = $$('toolPageScrollBlock'),
          toolPage = $$('toolPage'),
          toolPageClose = $$('toolPageClose'),
          toolPageListHtml = '',
          s = toolPage.style,
          _ia, _ib,
          hideToolPageList = function () {
            s.display = '';
          },
          toogleToolPageList = function () {
            var i = 0,
              len = devideImg.length,
              _o = toolPageListChildren,
              _t;
            if (s.display === 'block') {
              s.display = '';
            } else {
              s.display = 'block';
              scrollToolPage.init(osWidth, osHeight);
            }
          }
        for (i = 0; i < len; ++i) {
          _ia = IS_JAPAN ? len - i - 1 : i;
          _ib = i < 9 && len > 9 ? '0' + (i + 1) : (i + 1);
          toolPageListHtml += '<li><a href="javascript:void(0)" onclick=goPage(' + _ia + ');return false;>' + _ib + '</a></li>';
        }
        toolPageList.innerHTML = toolPageListHtml;

        pagerBtn.onclick = toogleToolPageList;
        toolPageClose.onclick = hideToolPageList;

        toolPageListChildren = $$('toolPageList').children;
        scrollToolPage = ScrollBar({
          contain: toolPageList,
          wrap: toolPageListWrap,
          scrollBg: toolPageScrollBg,
          scrollBlock: toolPageScrollBlock,
          heightFix: osHeight < 400 ? osHeight - 150 : 400,
          scrollBarHeightDiff: 0
        });
        scrollToolPage.init(osWidth, osHeight);

        addClass(toolPageListChildren[IS_JAPAN ? len - nowPage : nowPage], 'now-reading');
      }
    }();

    // 取消拖拽和选中
    _len = imgList.length;
    while (_len--) {
      _o = imgList[_len];
      _o.ondragstart = function () {
        return false;
      }
      _o.onselectstart = function () {
        return false;
      }
      _o.parentNode.onselectstart = function () {
        return false;
      }
      _o.parentNode.ondragstart = function () {
        return false;
      }
    }

    // 初始化目录 键盘操作
    function otherData() {
      var _o = $$('catalogueList').getElementsByTagName('li'),
        len = _o.length,
        i = 0,
        thisStep;
      for (; i < len; ++i) {
        if (_o[i].className) {
          thisStep = i / len;
          thisStep = thisStep > .5 ? thisStep + 8 / len :
            thisStep - 4 / len;
          // 记录下一章节名字
          if (i < len - 1) {
            NEXT_CHAPTER_NAME = _o[i + 1].children[0].title;
          }
          if (i > 0) {
            PREV_CHAPTER_NAME = _o[i - 1].children[0].title;
          }
          break;
        }
      }
      var nextInfo = $$('nextInfo');
      if (nextInfo) {
        nextInfo.innerHTML = DATA.comic.isFinish && !NEXT_CHAPTER ? '已完结' : NEXT_CHAPTER_NAME ? '<a href="' + makeUrl(ID, NEXT_CHAPTER) + '">下一话 ' + NEXT_CHAPTER_NAME + '</a>' : '未完待续...';
      }

      scrollCatalogue.init(osWidth, osHeight);
      scrollCatalogue.set(thisStep);
      _thisStep = thisStep;

      // 收起与展开猜你喜欢
      // if (!crossPage) {
      //     var recommendMode = cookie('recommendMode');
      //     // var recommendMode = 0; // 默认关闭猜你喜欢收缩
      //     scrollRecommand.init(osWidth, osHeight);
      //     window.recommendHasSet = recommendMode ? true : false;
      //     if (recommendMode === '1') {
      //         removeClass(recommendStack, 'hidden');
      //     } else {
      //         removeClass(recommend, 'hidden');
      //     }
      //     $$('recommendFadeOut').onclick = function() {
      //         addClass(recommend, 'hidden');
      //         removeClass(recommendStack, 'hidden');
      //         cookie('recommendMode', '1', { path: '/', expires: 2 });
      //         sendPgv('NEW.AC_VIEW.NEWEVENT.AD_LEFTOFF');
      //     }
      //     recommendStack.onclick = function() {
      //         Fade(recommend, 0, 1, 200);
      //         addClass(recommendStack, 'hidden');
      //         removeClass(recommend, 'hidden');
      //         cookie('recommendMode', '2', { path: '/', expires: 2 });
      //         scrollRecommand.init(osWidth, osHeight);
      //         sendPgv('NEW.AC_VIEW.NEWEVENT.AD_LEFTON');
      //     }
      // } else {
      //     if (osWidth < 1500) {
      //         addClass(recommendStack, 'hidden');
      //     } else {
      //         removeClass(recommendStack, 'hidden');
      //     }
      //     recommendStack.onclick = function() {
      //         var recommendForCrossPage = $$('recommendForCrossPage'),
      //             rs = recommendForCrossPage.style;
      //         if (rs.display === 'block') {
      //             rs.display = 'none';
      //             recommendForCrossPage.src = 'javascript:void(0)';
      //         } else {
      //             recommendForCrossPage.src = '/ComicView/showCrossPageRecommend/id/' + ID;

      //             window.recommendStackOpen = function() {
      //                 rs.display = 'block';
      //                 Fade(recommendForCrossPage, 0, 1, 400);
      //             }

      //             window.recommendStackClose = function() {
      //                 rs.display = 'none';
      //                 recommendForCrossPage.src = 'javascript:void(0)';
      //             }
      //         }
      //         sendPgv('NEW.AC_VIEW.NEWEVENT.DUIYE.AD_LEFTON')
      //     }
      // }

      hotPgv('adTop', 'NEW.AC_VIEW.NEWEVENT.AD_PICCONTENT1');
      hotPgv('adBottom', 'NEW.AC_VIEW.NEWEVENT.AD_PICCONTENT2');

      $$('catalogueList').onmousedown = function (e) {
        e = e || window.event;
        e = e.target || e.srcElement;
        if (e.tagName.toLowerCase() !== 'a') e = e.parentNode;
        if (e.tagName.toLowerCase() === 'a') {
          sendPgv('NEW.AC_VIEW.NEWEVENT.CATALOGUELIST');
        }
      }

      checkScreenMode();

    }

    // 如果所有图片都加载失败则依然需要加载工具条
    setTimeout(function () {
      if (!_isLoadFirstPic) {
        otherData();
        _isLoadFirstPic = true;
      }
    }, 500);

    if (osWidth < 700) {
      addClass(body, 'mobile-device');
    } else if (!mobileDevice) {
      removeClass(body, 'mobile-device');
    }

    if (!crossPage) {

      var comicHeight = comicContain.offsetHeight;
      if (checkScrollChange) {
        mainView.style.height = osHeight - 120 + 'px';
        on(mainView, 'scroll', handler);
      } else {
        on(window, 'scroll', handler);
      }

      window.onresize = function () {
        clearInterval(_intervalResize);
        _intervalResize = setTimeout(function () {
          osWidth = docEle.clientWidth ||
            window.innerWidth;
          osHeight = docEle.clientHeight ||
            window.innerHeight;

          checkScreenMode();
          if (checkScrollChange) {
            mainView.style.height = osHeight - 120 + 'px';
          }

          // if (!recommendHasSet) {
          //     if (osWidth < 1160) {
          //         addClass(recommend, 'hidden');
          //         removeClass(recommendStack, 'hidden');
          //     } else {
          //         addClass(recommendStack, 'hidden');
          //         removeClass(recommend, 'hidden');
          //     }
          // }

          if (osWidth < 700) {
            addClass(body, 'mobile-device');
          } else if (!mobileDevice) {
            removeClass(body, 'mobile-device');
          }

          bigScreenRoastMode = !mobileDevice && osWidth > 1300 && osHeight > 700 ? 1 : 0;
          comicHeight = comicContain.offsetHeight;

          setBaseView(osWidth, osHeight);
          getListOffsetTop();
          handler();
        }, 200);
        osHeight = docEle.clientHeight || window.innerHeight;
      }
    } else {
      window.onresize = function () {
        clearInterval(_intervalResize);
        _intervalResize = setTimeout(function () {

          osWidth = docEle.clientWidth ||
            window.innerWidth;
          osHeight = docEle.clientHeight ||
            window.innerHeight;
          moveWidth = ~~(osWidth * .88 + 1);

          checkScreenMode();
          // if (osWidth < 1500) {
          //     addClass(recommendStack, 'hidden');
          // } else {
          //     removeClass(recommendStack, 'hidden');
          // }

          setBaseView(osWidth, osHeight);
        }, 100);
        osHeight = docEle.clientHeight || window.innerHeight;
      }
    }
    goScalePic();

    // if (window.addEventListener) {
    //     window.addEventListener("scroll", handler, false);
    // } else {
    //     window.attachEvent("onscroll", handler);
    // }
    // on(window, 'scroll', handler);
    window.getRoastData = function (s) {
      var sequenceArr = s.split('-'),
        t = roastAll[+sequenceArr[0]];
      //return crossPage && t.length ? t[+sequenceArr[1]].data[+sequenceArr[2]] : t.data[+sequenceArr[1]];
      return crossPage ? (t.length ? t[+sequenceArr[1]].data[+sequenceArr[2]] : t.data[+sequenceArr[2]]) : t.data[+sequenceArr[1]];
    };
    window.getRoastList = function (n) {
      return crossPage === 1 ? roastAll[n][0].wrap.previousSibling.previousSibling : roastAll[n].wrap.previousSibling.previousSibling;
    }
  }();

  ! function () {
    var ic = $$('iconFavourite'),
      icn = $$('iconFavouriteNext'),
      af = $$('addFavourites'),
      fs = $$('favState'),
      refreshView = function (x) {
        var p = ic && ic.parentNode,
          pn = icn && icn.parentNode,
          ifp = $$('iconFavouritePro'),
          ifn = $$('iconFavouriteProNext');
        if (x) {
          fs.innerHTML = '\u5df2\u6536\u85cf';
          if (ifp) {
            ifp.innerHTML = '\u5df2\u6536\u85cf';
            removeClass(p, 'main_control_button_normal');
            addClass(p, 'main_control_button_trigger');
          }
          if (ifn) {
            ifn.innerHTML = '\u5df2\u6536\u85cf';
            removeClass(pn, 'main_control_button_normal');
            addClass(pn, 'main_control_button_trigger');
          }
        } else {
          fs.innerHTML = '\u6dfb\u52a0\u6536\u85cf';
          if (ifp) {
            ifp.innerHTML = '\u6536\u85cf';
            removeClass(p, 'main_control_button_trigger');
            addClass(p, 'main_control_button_normal');
          }
          if (ifn) {
            ifn.innerHTML = '\u6536\u85cf';
            removeClass(pn, 'main_control_button_trigger');
            addClass(pn, 'main_control_button_normal');
          }

        }
      };
    window.refreshView = refreshView;
  }();

  ! function () {
    var html = '',
      data = {};

    // 书架
    var bs = $$('bookshelf'),
      bc = $$('bookshelfContain'),
      bn = $$('bookshelfNum'),
      fst = $$('favCount'),
      collectMove = function (e, clientX, clientY) {
        var bookshelf = $$('bookshelf'),
          smallHeart = $$('smallHeart'),
          smallHeartStyle = smallHeart.style,
          start = {},
          end = {},
          cruveY = new UnitBezier(.09, .6, .63, .98),
          doc = docEle,
          getRect = function (ele) {
            var rect = ele.getBoundingClientRect(),
              top = doc.clientTop,
              left = doc.clientLeft;
            return {
              top: rect.top - top,
              bottom: rect.bottom - top,
              left: rect.left - left,
              right: rect.right - left
            }
          },
          // 动画时间
          animationTime = 600,
          timeStamp,
          endTime,
          move,
          _requestMove;

        e = e || window.event;
        if (e.pageX == null && clientX != null) {
          e.pageX = clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          e.pageY = clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        start = {
          x: e.pageX - smallHeart.offsetWidth / 2,
          y: e.pageY - smallHeart.offsetHeight / 2
        }
        end = {
          x: getRect(bookshelf).left + (doc && doc.scrollLeft || body && body.scrollLeft || 0),
          y: getRect(bookshelf).top + (doc && doc.scrollTop || body && body.scrollTop || 0)
        }
        end.y = end.y < 0 ? 0 : end.y;
        diff = {
          x: end.x - start.x,
          y: end.y - start.y
        }
        move = function () {
          var percent = (new Date - timeStamp) / animationTime,
            pFix = 1;
          percent = percent > 1 ? 1 : percent;
          if (percent === 1) {
            smallHeartStyle.cssText = '';
            return 0;
          }

          pFix = cruveY.solve(percent, 1e-3);
          smallHeartStyle.cssText = 'top:' + ~~(start.y + diff.y * pFix) + 'px;left:' + ~~(start.x + diff.x * percent) + 'px;opacity:' + ~~(140 - percent * 100) / 100 + ';width:' + ~~(40 - 30 * percent) + 'px;height:' + ~~(40 - 30 * percent) + 'px;';
          return 1;
        }
        _requestMove = function () {
          requestAnimationFrame(function () {
            if (move()) _requestMove();
          });
        }
        smallHeartStyle.cssText = 'top:' + start.y + 'px;left:' + start.x + 'px;';
        timeStamp = +new Date;
        endTime = timeStamp + animationTime,
          _requestMove();
      };

    // 书架
    $$('catalogueTitle').innerHTML = '\u300a' + DATA.comic.title + '\u300b\u76ee\u5f55';

    // 保存历史 cookie
    var o = DATA.comic,
      c = DATA.chapter,
      newRecord = [o.id, o.title, c.cid, c.cTitle, +c.cSeq],
      recordList = JSON.parse(cookie('readRecord')) || [],
      recordLastList = JSON.parse(cookie('readLastRecord')) || [],
      total = recordList.length,
      lastTotal = recordLastList.length,
      i = 0,
      j = 0,
      k = 0,
      newRecordList,
      newRecordLastList,
      hasPromptNext = false;
    if (total) {
      for (; j < total; ++j) {
        if (recordList[j][0] === ID && recordList[j][2] === CID) {
          hasPromptNext = true;
          break;
        }
      }
    }
    if (total) {
      for (; i < total; ++i) {
        if (o.id === recordList[i][0]) {
          recordList.splice(i, 1);
          break;
        }
      }
    }
    if (lastTotal) {
      for (; k < lastTotal; ++k) {
        if (o.id === recordLastList[k][0]) {
          recordLastList.splice(k, 1);
          break;
        }
      }
    }

    recordList.unshift(newRecord);
    recordList.splice(20);
    newRecordList = JSON.stringify(recordList);
    newRecordLastList = JSON.stringify(recordLastList);
    cookie('readRecord', newRecordList, { path: '/', expires: 30 });
    cookie('readLastRecord', newRecordLastList, { path: '/', expires: 30 });

    // 提示你已进入下一话
    var promptTop = $$('promptTop');
    if (!hasPromptNext && window.location.href.indexOf('fromPrev') !== -1) {
      if (window.isTipPrompting) {
        return;
      }
      window.isTipPrompting = true;
      promptTop.style.display = 'block';
      promptTop.className = 'prompt-top prompt-next';
      Fade(promptTop, 0, 1, 200);
      setTimeout(function () {
        promptTop.style.display = 'none';
        window.isTipPrompting = false;
      }, 2000);
    }

    // 存储历史 localStorage
    ! function () {
      var promptContinueRead = $$('promptContinueRead'),
        // mainAdTopExtra = $$('mainAdTopExtra'),
        local = window.localStorage,
        session = window.sessionStorage,
        historySession,
        historyStorage,
        historyData,
        continueHtml,
        data,
        interval,
        newLink,
        _t = crossPage ? 'page' : 'top';

      if (isLocalStorageNameSupported && session) {
        historyStorage = JSON.parse(localStorage.getItem(ID));
        historyData = localStorage.getItem(ID + _t);
        historyData = _t + '=' + (historyData ? historyData : 'new');
        historySession = session.getItem(ID);

        if (!historySession && crossPage) {
          var readPrompt = $$('readPrompt');
          readPrompt.style.display = 'block';
          setTimeout(function () {
            Fade(readPrompt, 1, 0, 400);
          }, 1600);
          setTimeout(function () {
            readPrompt.parentNode.removeChild(readPrompt);
            readPrompt = null;
          }, 2000);
        }

        if (!historySession) {
          window.advSeq = Math.floor(Math.random() * maxPage) + 1;
        }

        if (historySession) {
          // mainAdTopExtra.style.display = 'none';
        }

        if (!historySession && historyStorage && historyStorage.cid) {
          newLink = makeUrl(ID, historyStorage.cid) + '?' + historyData + '&jump=1';
          if (qqGameHall && qqGameHallFirst) {
            var _checkUserChapter = function () {
              if (!W.USER) {
                setTimeout(_checkUserChapter, 500);
              } else {
                ajax.post({
                  url: '/Ajax/getReadHistoryByComicId',
                  data: 'uin=' + W.USER.uin + '&comicId=' + ID,
                  callback: function (data) {
                    data = JSON.parse(data);
                    if (data.status === 2 && data.seqNo) {
                      if (+data.seqNo === +historyStorage.cSeq) {
                        window.location.href = newLink + '&ADTAG=channel.qqgame.id' + ID;
                      } else {
                        window.location.href = '/ComicView/index/id/' + ID + '/seqno/' + data.seqNo + '?jump=1';
                      }
                    }
                  }
                });
              }
            }
            _checkUserChapter();
          }
          data = {
            cTitle: historyStorage.cTitle,
            thisUrl: makeUrl(ID, historyStorage.cid),
            thisUrlWithData: newLink
          }
          continueHtml = template('promptContinueReadMod', data);
          promptContinueRead.innerHTML = continueHtml;

          $$('promptContinueClose').onclick = function () {
            Fade(promptContinueRead, 1, 0, 200);
            setTimeout(function () {
              promptContinueRead.parentNode.removeChild(promptContinueRead);
              promptContinueRead = null;
            }, 210);
          }
          if (NEXT_CHAPTER === 0) {
            localStorage.setItem(ID, JSON.stringify(DATA.chapter));
          }
        } else if (jumpPrompt && DATA.chapter.cTitle) {
          data = {
            locationChapter: DATA.chapter.cTitle
          }
          continueHtml = template('promptContinueReadJumpMod', data);
          promptContinueRead.innerHTML = continueHtml;
          setTimeout(function () {
            Fade(promptContinueRead, 1, 0, 500);
            setTimeout(function () {
              promptContinueRead.parentNode.removeChild(promptContinueRead);
              promptContinueRead = null;
            }, 510);
          }, 2000);
        } else {
          promptContinueRead.parentNode.removeChild(promptContinueRead);
          promptContinueRead = null;
          localStorage.setItem(ID, JSON.stringify(DATA.chapter));
        }


        session.setItem(ID, 1);


        // 收藏前端缓存
        ! function () {
          if (!isLocalStorageNameSupported) return;
          var fav = localStorage.getItem('favourite'),
            isfav = fav && fav.indexOf(ID) !== -1 ? 1 : 0;

          if (isfav) {
            refreshView(true);
          }
        }();
      }
    }();

    if (cookie('access_token') && !qqGameHallFirst) {
      var formerRecord = '';
      W.saveReadHistory = function () {
        var record = JSON.parse(JSON.stringify(newRecord));
        record.push(nowPage + 1);
        thisRecord = JSON.stringify(record)
        if (thisRecord != formerRecord) {
          formerRecord = thisRecord;
          ajax.post({
            url: protocol + '//ac.qq.com/ComicView/saveReadRecord',
            data: 'history=' + encodeURIComponent(thisRecord),
            callback: function () {

            }
          });
        }
      }
      setInterval(W.saveReadHistory, 5000);
    }

    // 获取书架
    ajax.get({
      url: '/MyPersonalCenter/getUserCollection',
      callback: function (data) {
        var favData = JSON.parse(data),
          bookshelfData = favData.data,
          len = bookshelfData && bookshelfData.length || 0,
          local = window.localStorage,
          fav = local.getItem('favourite'),
          isfav = fav && fav.indexOf(ID) !== -1 ? 1 : 0,
          html,
          favCount = DATA.comic.collect,
          favCountFormat = '';
        // 取消当前正在看的章节更新显示在书架上
        ! function () {
          if (!bookshelfData) return;
          var i = 0,
            needCheck,
            from,
            to,
            _len = len,
            _temp;
          for (; i < _len; ++i) {
            _temp = bookshelfData[i];
            if (!from && from !== 0) {
              if (+_temp.id === ID && +_temp.lateSeqNo === +DATA.chapter.cSeq) {
                bookshelfData[i].updateFlag = 0;
                from = i;
                to = len - 1;
              } else if (_temp.updateFlag === 0) return;
            } else {
              if (_temp.updateFlag === 0) {
                to = i - 1;
                break;
              }
            }
          }
          if (to <= from) return;
          _temp = bookshelfData[from];
          bookshelfData[from] = bookshelfData[to];
          bookshelfData[to] = _temp;
        }();

        data = {
          data: bookshelfData,
          total: favData.data ? favData.data.length : 0,
          state: favData.state,
          makeLink: makeUrl
        }

        html = template('bookshelfMod', data);
        bc.innerHTML = html;
        if (bookshelfData) {
          bn.innerHTML = bookshelfData.length;
        }

        while (len--) {
          if (bookshelfData[len].id == ID) {
            IS_FAV = true;
            break;
          }
        }

        if (!isLocalStorageNameSupported) {
          if (IS_FAV) {
            refreshView(true);
          }
        } else {
          if (IS_FAV) {
            if (!isfav) {
              refreshView(true);
              local.setItem('favourite', (fav + ',' + ID).replace('null,', ''));
            }
          } else if (isfav) {
            refreshView(false);
            fav = fav.replace(',' + ID, '');
            local.setItem('favourite', fav);
          }
        }

        favCountFormat = favCount > 9999 ? (favCount - favCount % 100) / 10000 + '万' : favCount;
        fst.innerHTML = '\uFF08' + favCountFormat + '\uFF09';

        setTimeout(function () {
          on(bs, mouse.click, function () {
            var btn = $$('catalogueControl');
            removeClass(cc, 'active');
            addClass(cm, 'hidden');

            if (bc.style.display === 'none') {
              bc.style.display = 'block';
              Fade(bc, 0, 1, 100);
              removeClass(btn, 'tool_chapters_button_trigger');
              scrollBookshelf && scrollBookshelf.init(osWidth, osHeight);
            } else {
              bc.style.display = 'none';
            }
          });
        }, 300);
        // 用户信息
        ajax.get({
          url: '/Ajax/getUserBaseInfo?' + Math.random(),
          async: false,
          callback: function (data) {
            var userInfoData = JSON.parse(data);

            window.toLogout = function () {
              cookie('open_id', '', { path: '/', domain: 'ac.qq.com' });
              cookie('access_token', '', { path: '/', domain: 'ac.qq.com' });
              cookie('login_type', '', { path: '/', domain: 'ac.qq.com' });
              cookie('nav_userinfo_cookie', '');
              setTimeout(function () {
                window.location.reload();
              }, 200);
            }

            //处理url，加上认证参数
            var processUrl = function (url) {
              if (url === (window.location.protocol + '//ac.qq.com') || url === (window.location.protocol + '//ac.qq.com/')) {
                url = window.location.protocol + '//ac.qq.com/index?auth=1';
              }
              else if (url.indexOf('?') != -1) {
                url = url + (url.indexOf('auth=1') != -1 ? '' : '&auth=1');
              }
              else {
                url = url + (url.indexOf('auth=1') != -1 ? '' : '?auth=1');
              }
              //console.log(url);
              return url;
            };

            //生成微信登录、QQ登录的iframe src
            var generateSrc = function (back_url) {

              document.domain = 'qq.com';

              var qq_link = "https://graph.qq.com/oauth2.0/authorize",
                qq_params = "?";
              qq_params += "response_type=code&";  // 获取回access_token
              qq_params += "client_id=101483258&"; // 应用的appid
              // 登录成功后跳转的代理页面，需要业务实现
              qq_params += "redirect_uri=" + window.location.protocol + '//ac.qq.com/loginSuccess.html?url=' + encodeURIComponent(back_url);

              var wx_link = "https://open.weixin.qq.com/connect/qrconnect",
                wx_params = '?';
              wx_params += "appid=wx811712de7fc48294&";
              // wx_params += "redirect_uri="+ encodeURIComponent(window.location.protocol + '//ac.qq.com/wxlogin.html?url=' + encodeURIComponent(back_url)+"&action=back") + "&";
              wx_params += "redirect_uri=" + encodeURIComponent(window.location.protocol + '//' + window.location.host + '/wxlogin.html?url=' + encodeURIComponent(back_url) + "&action=back") + "&";
              wx_params += "response_type=code&";
              wx_params += "scope=snsapi_login&";
              wx_params += "href=https://ac.gtimg.com/media/css/ac.iframe-login-wx.css";
              wx_params += "#wechat_redirect";

              return {
                qq: qq_link + qq_params,
                wx: wx_link + wx_params
              }
            };

            var showLogin = function (url) {
              var back_url = '';
              if (undefined == url || url == '') {
                back_url = location.href;
              } else {
                var httpPos = url.indexOf('http');
                if (httpPos < 0) {
                  back_url = window.location.protocol + '//ac.qq.com' + url;
                }
              }

              back_url = processUrl(back_url);

              var src = generateSrc(back_url),
                qq_src = src.qq,
                wx_src = src.wx;

              $$("iframe_qq").setAttribute("src", qq_src);
              $$("iframe_wx").setAttribute("src", wx_src);
            };

            // 初始化登陆条
            var un = $$('userName'),
              uav = $$('userAvatar'),
              uavw = $$('userAvatarWr'),
              //rav = $$('roastAvatar'),
              us = $$('userSign'),
              af = $$('addFavourites'),
              ic = $$('iconFavourite'),
              im = $$('iframeMask'),
              ia = $$('loginframe'),
              tl = $$('toLogin'),
              icn = $$('iconFavouriteNext'),
              uso = $$('userSignOut'),
              clientX = null,
              clientY = null,
              //rnn = $$('roastNickname'),
              //ruw = $$('roastUserWrap'),
              //rli = $$('roastLogIn'),
              toLogin = function () {
                var scrollTop = getScrollTop(),
                  wl = window.location.href.split('?')[0],
                  hd = crossPage ? 'page=' + nowPage : 'top=' + scrollTop;
                hd += window.hdID ? '&hd=' + window.hdID : '';
                if (wl.indexOf('/auth/1') !== -1) {
                  wl = wl + '?' + hd;
                } else {
                  wl = wl + '/auth/1?' + hd;
                }
                wl = encodeURIComponent(wl);
                Fade(im, 0, 1, 300);
                im.style.display = 'block';
                ia.style.display = 'block';
                // 初始化登录模块
                showLogin(location.pathname);
                addClass(im, 'active');
                setTimeout(function () {
                  ia.style.opacity = 1;
                  ia.style.filter = 'alpha(opacity=100)';
                }, isIE ? 200 : 20);
                // ia.style.cssText = 'display:block;opacity:0;filter:alpha(opacity=0);width:688px;height:388px;';
                // ia.src = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101483258&redirect_uri=' + protocol + '//ac.qq.com/loginSuccess.html?url=' + encodeURIComponent(wl);
                if (!window.AC) {
                  AC = {}
                  AC.Page = {}
                  AC.Page.reload = function (url) {
                    if (url) {
                      window.location.href = url;
                    } else {
                      window.location.reload();
                    }
                  }
                }

                // For 2018 ptlogin update
                if (typeof window.postMessage !== "undefined") {
                  window.onmessage = function (event) {
                    var msg = event || window.event;
                    var data;
                    if (typeof JSON !== "undefined") { data = JSON.parse(msg.data) } else { data = str2JSON(msg.data) }
                    switch (data.action) {
                      case "close":
                        ptlogin2_onClose();
                        break;
                      case "resize":
                        ptlogin2_onResize(data.width, data.height);
                        break;
                      default:
                        break
                    }
                  }
                } else {
                  navigator.ptlogin_callback = function (msg) {
                    var data = str2JSON(msg);
                    switch (data.action) {
                      case "close":
                        ptlogin2_onClose();
                        break;
                      case "resize":
                        ptlogin2_onResize(data.width, data.height);
                        break;
                      default:
                        break
                    }
                  }
                }

                function str2JSON(msg) {
                  var rvalidchars = /^[\],:{}\s]*$/,
                    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
                    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
                  if (rvalidchars.test(msg.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) { return (new Function("return " + msg))() }
                  return {}
                };
              },
              changeFav = function (from, e) {
                if (!W.USER) {
                  return toLogin();
                }
                if (e) {
                  clientX = e.pageX ? null : e.clientX;
                  clientY = e.pageY ? null : e.clientY;
                }
                if (IS_FAV) {
                  if (from.id === 'addFavourites') {
                    sendPgv('NEW.AC_VIEW.NEWDM.QUXIAOSC_TOP'); // h
                  } else {
                    sendPgv('NEW.AC_VIEW.NEWEVENT.BOTTOM_REMOVEFAVOURITES');
                  }
                  ajax.post({
                    url: '/Ajax/delCollection?' + Math.random(),
                    data: 'comic_id=' + ID + '&tokenKey=' + W.USER.token,
                    callback: function (data) {
                      var bookshelfList = $$('bookshelfList').children,
                        len = bookshelfList.length,
                        tar = DATA.comic.title,
                        str = '',
                        nowNum,
                        o,
                        favCount = fst.innerHTML.slice(1, -1),
                        favCountFormat = '';
                      data = +JSON.parse(data).status;
                      if (data === 1) {
                        if (favCount.indexOf('万') === -1) {
                          fst.innerHTML = '\uFF08' + (~~favCount - 1) + '\uFF09';
                        }
                        IS_FAV = false;
                        refreshView(IS_FAV);
                        while (len--) {
                          o = bookshelfList[len];
                          if (o.innerHTML.indexOf(tar) !== -1) {
                            o.parentNode.removeChild(o);
                            nowNum = +bn.innerHTML - 1
                            bn.innerHTML = nowNum;
                            $$('bookshelfNumIn').innerHTML = nowNum;
                            break;
                          }
                        }
                        scrollBookshelf.init(osWidth, osHeight);
                      }
                    }
                  });
                } else {
                  ajax.post({
                    url: '/Ajax/addCollection?' + Math.random(),
                    data: 'comic_id=' + ID + '&tokenKey=' + W.USER.token,
                    callback: function (data) {
                      var addBookshelf = function () {
                        var bookshelf = $$('bookshelf'),
                          bookshelfList = $$('bookshelfList').innerHTML,
                          addOne = bookshelf.children[1],
                          nowNum;
                        bookshelfList += '<li><a class="user-bookshelf-favourite-name-warp" href="#"><span class="user-bookshelf-favourite-name">' + DATA.comic.title + '</span></a><a class="user-bookshelf-favourite-chapter-warp" href="#"><span class="user-bookshelf-favourite-chapter">\u6b63\u5728\u6d4f\u89c8...</span></a></li>';
                        $$('bookshelfList').innerHTML = bookshelfList;
                        nowNum = +bn.innerHTML + 1
                        bn.innerHTML = nowNum;
                        addClass(bookshelf, 'user-bookshelf-active');
                        Fade(addOne, 0, 1, 500);
                        setTimeout(function () {
                          removeClass(bookshelf, 'user-bookshelf-active');
                          Fade(addOne, 1, 0, 200);
                        }, 850);
                        $$('bookshelfNumIn').innerHTML = nowNum;
                        setTimeout(function () {
                          scrollBookshelf.init(osWidth, osHeight);
                        }, 100);
                      }
                      data = +JSON.parse(data).status;
                      var favCount = fst.innerHTML.slice(1, -1);
                      if (data === 1) {
                        if (favCount.indexOf('万') === -1) {
                          fst.innerHTML = '\uff08' + (~~favCount + 1) + '\uff09';
                        }
                        IS_FAV = true;
                        refreshView(IS_FAV);
                        if (e) {
                          //sendPgv('NEW.AC_VIEW.NEWEVENT.BOTTOM_ADDFAVOURITES');
                          collectMove(e, clientX, clientY);
                          setTimeout(function () {
                            addBookshelf();
                          }, 600);
                        } else {
                          sendPgv('NEW.AC_VIEW.NEWDM.TIANJIASC-TOP'); // h
                          addBookshelf();
                        }
                      }
                    }
                  });
                }
              }
            window.toLogin = toLogin;
            //主题
            var theme, avatarSrc;
            if (document.getElementsByTagName('body')[0].className.indexOf('theme-white') === -1) {
              theme = 'dark';
              avatarSrc = '//ac.gtimg.com/media/images/ac_chapter_avatar.jpg';
            } else {
              theme = 'white';
              avatarSrc = '//ac.gtimg.com/media/images/ac_chapter_avatar_white.jpg';
            }
            if (userInfoData.status === 2) {
              W.USER = userInfoData.result;
              if (W.USER.isVipUser) {
                addClass(body, 'is-vip');
              }
              // un.innerHTML = USER && USER.shortNick || '';
              un.setAttribute('target', '_blank');
              un.onclick = function () { };
              un.href = 'https://ac.qq.com/Home';
              var usoIn = false;
              uav.src = W.USER && W.USER.avatar || avatarSrc;
              // if (rav) {
              //     rav.src = USER && USER.avatar || avatarSrc;
              // }
              addClass(uavw, 'user-avatar-login');
              //addClass(ruw, 'roast-user-login');
              // if (rnn) {
              //     rnn.innerHTML = USER && USER.shortNick || '\u817E\u8BAF\u52A8\u6F2B\u7528\u6237';
              // }

              // us.innerHTML = '[\u9000\u51fa]';
              if (uso) {
                uso.onclick = window.toLogout;
              }
              setTimeout(function () {
                if ($$('bookshelfList')) {
                  scrollBookshelf = ScrollBar({
                    contain: $$('bookshelfList'),
                    wrap: $$('bookshelfListWrap'),
                    scrollBg: $$('bookshelfScrollBg'),
                    scrollBlock: $$('bookshelfScrollBlock'),
                    factHeightDiff: 220,
                    scrollBarHeightDiff: 0
                  });
                  $$('bookshelfNumIn').innerHTML = bn.innerHTML;
                  W.scrollBookshelf = scrollBookshelf;
                }
              }, 200);
              if ($$('ignoreUpdate')) {
                $$('ignoreUpdate').onclick = function () {
                  var list = $$('bookshelfList').children,
                    i = 0,
                    o;
                  while (bookshelfData[i].updateFlag === 1) {
                    o = list[i].children[1];
                    o.className = 'user-bookshelf-favourite-chapter-warp';
                    o.innerHTML = '<span class="user-bookshelf-favourite-chapter">\u66f4\u65b0\u81f3\u7b2c' + bookshelfData[i].lateSeqNo + '\u8bdd</span>';
                    ++i;
                  }
                  ajax.post({
                    url: '/Ajax/ignoreUpdate',
                    data: 'tokenKey=' + W.USER.token,
                    callback: function (data) {

                      data = +JSON.parse(data).status;
                      if (data !== 1) {
                        console.log('标记已读失败');
                      }
                    }
                  });
                }
              }
              // 点击流相关
              if ($$('bookshelfList')) {
                $$('bookshelfList').onmousedown = function (e) {
                  e = e || window.event;
                  e = e.target || e.srcElement;
                  var cls = e.className;
                  if (cls.indexOf('favourite-name') !== -1) {
                    sendPgv('NEW.AC_VIEW.NEWEVENT.TOP_BSCOMIC');
                  } else if (cls.indexOf('favourite') !== -1) {
                    sendPgv('NEW.AC_VIEW.NEWEVENT.TOP_BSCHAPTER');
                  }
                }
              }
              hotPgv('ignoreUpdate', 'NEW.AC_VIEW.NEWEVENT.TOP_BSread');
            } else {
              if (theme === 'white') {
                uav.src = W.USER && W.USER.avatar || avatarSrc;
                // if (rav) {
                //     rav.src = USER && USER.avatar || avatarSrc;
                // }
              }
              // un.parentNode.removeChild(un);
              un.href = 'javascript:void(0)';
              un.setAttribute('target', '_self');
              un.onclick = toLogin;
              // us.innerHTML = '\u767b\u5f55';
              // us.onclick = toLogin;
              if (tl) {
                tl.onclick = toLogin;
              }
              // if (rli) {
              //     rli.onclick = toLogin;
              // }
            }

            // 关闭登录框事件
            window.ptlogin2_onClose = function () {
              try {
                im.style.display = 'none';
                removeClass(im, 'active');
                ia.src = 'javascript:void(0);';
                ia.style.cssText = 'display:none';
                setTimeout(function () {
                  addClass($$("item_qq"), "active");
                  removeClass($$("item_wx"), "active");
                  addClass($$("iframe_item_qq"), "active");
                  removeClass($$("iframe_item_wx"), "active");
                }, 350);
                $$("iframe_wx").setAttribute('src', 'javascript://');
                $$("iframe_qq").setAttribute('src', 'javascript://');
              } catch (e) {

              }
            }

            // 登录框调整大小
            window.ptlogin2_onResize = function () {

            }

            if ($$('notice')) removeClass($$('noticeControl'), 'hidden');

            $$('frameClose').onclick = function () {
              window.ptlogin2_onClose();
            };

            var tab_item = document.getElementsByClassName("tab-item");
            for (var i = 0; i < tab_item.length; i++) {
              tab_item[i].onclick = function (e) {
                if (e.currentTarget.classList.contains("active")) return;
                var _childNode = e.currentTarget.parentNode.children;
                for (var j = 0; j < _childNode.length; j++) {
                  removeClass(_childNode[j], "active");
                }
                addClass(e.currentTarget, "active");
                if (e.currentTarget.classList.contains("item-qq")) {
                  addClass($$("iframe_item_qq"), "active");
                  removeClass($$("iframe_item_wx"), "active");
                } else {
                  addClass($$("iframe_item_wx"), "active");
                  removeClass($$("iframe_item_qq"), "active");
                }
              }
            }

            af.onclick = function (e) {
              e = e || window.event;
              changeFav(af);
            }

            if (ic) {
              on(ic, mouse.click, function (e) {
                e = e || window.event;
                changeFav(ic, e);
                onHover(ic.parentNode, function () {
                  if (IS_FAV) {
                    if (ic.nextSibling.id === 'iconFavouritePro') {
                      ic.nextSibling.innerHTML = '\u53d6\u6d88\u6536\u85cf';
                    } else {
                      ic.nextSibling.nextSibling.innerHTML = '\u53d6\u6d88\u6536\u85cf';
                    }
                  }
                }, function () {
                  if (IS_FAV) {
                    if (ic.nextSibling.id === 'iconFavouritePro') {
                      ic.nextSibling.innerHTML = '\u5df2\u6536\u85cf';
                    } else {
                      ic.nextSibling.nextSibling.innerHTML = '\u5df2\u6536\u85cf';
                    }
                  }
                });
              });
            }

            if (icn) {
              on(icn, mouse.click, function (e) {
                e = e || window.event;
                changeFav(icn, e);
                onHover(icn.parentNode, function () {
                  if (IS_FAV) {
                    if (icn.nextSibling.id === 'iconFavouriteProNext') {
                      icn.nextSibling.innerHTML = '\u53d6\u6d88\u6536\u85cf';
                    } else {
                      icn.nextSibling.nextSibling.innerHTML = '\u53d6\u6d88\u6536\u85cf';
                    }
                  }
                }, function () {
                  if (IS_FAV) {
                    if (icn.nextSibling.id === 'iconFavouriteProNext') {
                      icn.nextSibling.innerHTML = '\u5df2\u6536\u85cf';
                    } else {
                      icn.nextSibling.nextSibling.innerHTML = '\u5df2\u6536\u85cf';
                    }
                  }
                });
              });
            }


            // 检查是否可以阅读
            ! function () {
              var checkVipFrame = $$('checkVipFrame'),
                token = W.USER && W.USER.token || '';

              var isAppBlock = DATA.chapter.is_app_chapter; // APP 拦截时，不展示付费

              if (!isAppBlock && !DATA.chapter.canRead) {
                checkVipFrame.style.opacity = 0;
                checkVipFrame.style.filter = 'alpha(opacity=0)';
                setTimeout(function () {
                  Fade(checkVipFrame, 0, 1, 200);
                  $$('navWrapTop').style.zIndex = '1003';
                  $$('toolWrapBottom').style.cssText = 'z-index:1003;height:63px;';
                  $$('themeControl').parentNode.style.display = 'none';
                }, 400);
                checkVipFrame.src = '/Buy/chapterBuyPage/buy_type/1/id/' + ID + '/cid/' + CID + '?id===' + ID + '&cid===' + CID + '&theme===' + cookie('theme') + '&token===' + token + '&pageType===1';
                removeClass(checkVipFrame, 'hidden');
              }
            }();
            // QQ大厅检测
            checkQQHall();
          }
        });
      }
    });


    // 目录
    var cc = $$('catalogueControl'),
      cm = $$('catalogueContain'),
      cd = $$('catalogueSlideDown'),
      bc = $$('bookshelfContain'),
      tp = $$('toolPage'),
      pw = $$('aiseeWr'),
      checkHotArea = function (e) {
        e = e || window.event;
        var tar = e.target || e.srcElement,
          tag = tar.tagName.toLowerCase();
        if (tag === 'img' ||
          tar.className === 'comic-contain' ||
          tar.className === 'for-roast' ||
          tar.className === 'main_control' ||
          tar.className === 'main_control_list') {
          removeClass(cc, 'tool_chapters_button_trigger');
          addClass(cc, 'tool_chapters_button');
          addClass(cm, 'hidden');
          bc.style.display = 'none';
          pw.style.display = 'none';
          tp && (tp.style.display = '');
          roastHandle(-1, +e.button);
        }
      };

    on(body, mouse.down, checkHotArea);

    on(cc, mouse.click, function () {
      if (cc.className.indexOf('trigger') === -1) {
        addClass(cc, 'tool_chapters_button_trigger');
        Fade(cm, 0, 1, 100);
        removeClass(cm, 'hidden');
        scrollCatalogue.init(osWidth, osHeight);
        scrollCatalogue.set(_thisStep);
        bc.style.display = 'none';
      } else {
        removeClass(cc, 'tool_chapters_button_trigger');
        addClass(cc, 'tool_chapters_button');
        addClass(cm, 'hidden');
      }
    });
    on(cd, mouse.click, function () {
      removeClass(cc, 'tool_chapters_button_trigger');
      addClass(cc, 'tool_chapters_button');
      addClass(cm, 'hidden');
    });

    // 清洁模式载入
    cleanModeInit();

    function putDataIn(argu) {

      var i;

      for (i in argu) {
        $$(i).innerHTML = argu[i];
      }
    }

    // 收起工具栏按钮
    var tb = $$('toolBottom');
    on($$('toolBtn'), mouse.down, function () {
      if (tb.className.indexOf('state-close') !== -1) {
        removeClass(tb, 'state-close')
      } else {
        addClass(tb, 'state-close');
      }
    });

    // 获取月票
    var iconMonth = $$('iconMonth'),
      iconPrize = $$('iconPrize');

    function getMonth() {
      if (isMonthGet) return;
      isMonthGet = true;
      ajax.get({
        url: '/Comic/getMonthTicketInfo/id/' + ID + '/source/1',
        callback: function (data) {
          var getMonthTicketInfo = JSON.parse(data),
            dataMonth = getMonthTicketInfo.monthTicket || {};
          if (dataMonth) {
            putDataIn({
              dataMonth: dataMonth.mtNum || 0,
              dataMonthRank: dataMonth.rank.rankNo || 0
            });
          }
        }
      });
    }

    // 获取打赏
    function getPrize() {
      if (isPrizeGet) return;
      isPrizeGet = true;
      ajax.get({
        url: '/Comic/getAwardInfo/id/' + ID + '/source/1',
        callback: function (data) {
          var getAwardInfo = JSON.parse(data),
            dataAward = getAwardInfo || {};
          if (dataAward) {
            putDataIn({
              highPrize: dataAward.topDq && dataAward.topDq.dq || 0,
              totalPrize: dataAward.count || 0,
              rankPrize: dataAward.rankNo || 0
            });
          }
        }
      });
    }

    window.isMonthGet = false;
    window.isPrizeGet = false;

    // 打赏月票功能
    var rf = $$('rewardFrame'),
      setRewardFrame = function (type, nocheck) {
        if (!W.USER && !nocheck) return toLogin();
        if (!nocheck) {
          if (checkLogin()) return;
        }
        if (type === 'showEndChpaterAds') {
          window.location.href = 'https://ac.qq.com/ComicView/showEndChapter/id/' + ID + '/cid/' + CID + '?fromPrev=1';
        } else {
          rf.style.opacity = 0;
          rf.style.filter = 'alpha(opacity=0)';
          removeClass(rf, 'hidden');
          setTimeout(function () {
            Fade(rf, 0, 1, 300);
          }, isIE ? 200 : 20);

          // 服务器不允许括号出现 转成中文
          var transName = function (s) {
            return s.replace(/\(/g, '（').replace(/\)/g, '）')
          }

          var USER = W.USER
          if (USER) {
            rf.src = '/ComicView/' + type + '/id/' + ID + '?token===' + USER.token + '&nick===' + encodeURIComponent(USER.shortNick) + '&img===' + encodeURIComponent(transName(USER.avatar)) + '&authorNick===' + encodeURIComponent(transName(DATA.artist.nick)) + '&authorImg===' + encodeURIComponent(DATA.artist.avatar) + '&uin===' + DATA.artist.uinCrypt + '&j===' + DATA.comic.isJapanComic + '&l===' + DATA.comic.isLightNovel + '&f===' + DATA.comic.isFinish;
          } else if (nocheck) {
            rf.src = '/ComicView/' + type + '/id/' + ID + '?j===' + DATA.comic.isJapanComic + '&l===' + DATA.comic.isLightNovel + '&f===' + DATA.comic.isFinish;
          } else {
            rf.src = '/ComicView/' + type + '/id/' + ID + '?f===' + DATA.comic.isFinish;
          }
        }
      };

    window.callReward = setRewardFrame;

    window.closeRewardFrame = function () {
      addClass(rf, 'hidden');
      rf.style.opacity = 0;
      rf.style.filter = 'alpha(opacity=0)';
      rf.src = 'javascript:void(0);';
    }
    window.checkLogin = function () {
      if (!cookie('access_token')) {
        toLogin();
        return 1;
      };
      return 0;
    }
    window.noMore = function () {
      if (qqGameHall) {
        setRewardFrame('showQQgameChpaterAds', 'nocheck');
      } else {
        setRewardFrame('showEndChpaterAds', 'nocheck');
      }
    }

    var monthTicketShow = $$('monthTicketShow');
    if (monthTicketShow) {
      on(monthTicketShow, mouse.click, function () {
        setRewardFrame('showMonthTicket');
      });
      on(iconMonth, mouse.click, function () {
        setRewardFrame('showMonthTicket');
      });
    }

    onHover(iconMonth && iconMonth.parentNode, function () {
      getMonth();
    }, function () {
      getMonth();
    });

    // 对页模式的附加按钮
    if (crossPage) {
      var forTicket = $$('forTicket'),
        forPrize = $$('forPrize');
      forTicket && (on(forTicket, mouse.click, function () {
        setRewardFrame('showMonthTicket');
      }));
    }

    // 阻止图片的右键事件
    var stopPopRight = function (e) {
      var target;
      e = e || window.event;
      if (+e.button === 2) {
        target = e.target || e.srcElement;
        if (e.stopPropagation) {
          e.stopPropagation();
          e.preventDefault();
        } else {
          e.cancelBubble = true;
          e.returnValue = false;
        }
      }
    }
    if (window.addEventListener) {
      document.body.addEventListener('contextmenu', stopPopRight, false);
    } else {
      document.body.attachEvent('oncontextmenu', stopPopRight);
    }

    if (window.console && window.console.log) {
      console.log('动漫无界，梦想无限！   - AC.QQ.COM  腾讯动漫');
      console.log('请勿在此控制台输入或粘贴你不明白的代码，以避免他人窃取你的信息来冒充你。');
    }
  }();


  // 公告移动
  ! function () {
    // 获取公告状态
    var hideNotice = cookie('notice'),
      notice = $$('notice'),
      comicTitle = $$('comicTitle'),
      noticeControl = $$('noticeControl'),
      noticeControlParent = noticeControl.parentNode,
      closeTag = '<span class="tool_title">打开公告</span>',
      openTag = '<span class="tool_title">关闭公告</span>';

    // 无公告情况
    if (!notice) return;
    // 有公告情况
    if (!+hideNotice) {
      removeClass(notice, 'hidden');
      addClass(comicTitle, 'hidden');
    } else {
      addClass(noticeControlParent, 'notice-open');
      noticeControl.innerHTML = closeTag;
    }

    var n1 = $$('noticeMod'),
      n2 = n1.nextSibling.nextSibling,
      n1s = n1.style,
      n2s = n2.style,
      nw = n1.offsetWidth,
      dis = 2 * nw,
      noticeMove = function () {
        var s1,
          s2;
        dis = dis - 1 < 0 ? 2 * nw : dis - 1;
        s1 = dis - nw < 0 ? dis : dis - 2 * nw;
        s2 = dis - 2 * nw;
        n1s.left = s1 + 'px';
        n2s.left = s2 + 'px';
      },
      autoHideNotice = function () {
        clearTimeout(noticeTimeout);
        noticeTimeout = setTimeout(function () {
          hideNotice = !+hideNotice;
          addClass(notice, 'hidden');
          removeClass(comicTitle, 'hidden');
          addClass(noticeControlParent, 'notice-open');
          noticeControl.innerHTML = closeTag;
          clearInterval(intervalNotice);
        }, NOTICE_TIME * 1000);
      },
      startNotice = function () {
        intervalNotice = setInterval(noticeMove, 50);
        autoHideNotice();
      },
      intervalNotice = null,
      noticeTimeout = null,
      hideNotice = cookie('notice');
    notice.onmouseover = function () {
      clearInterval(intervalNotice);
      clearTimeout(noticeTimeout);
    }
    notice.onmouseout = function () {
      startNotice();
      autoHideNotice();
    }

    noticeControl.onclick = function () {
      hideNotice = !+hideNotice;
      if (hideNotice) {
        addClass(notice, 'hidden');
        removeClass(comicTitle, 'hidden');
        addClass(noticeControlParent, 'notice-open');
        noticeControl.innerHTML = closeTag;
        cookie('notice', 1, { path: '/', expires: 2 });
        clearInterval(intervalNotice);
        sendPgv('NEW.AC_VIEW.NEWEVENT.TOP_OFFNOTICE');
      } else {
        removeClass(notice, 'hidden');
        addClass(comicTitle, 'hidden');
        removeClass(noticeControlParent, 'notice-open');
        noticeControl.innerHTML = openTag;
        cookie('notice', 0, { path: '/', expires: 2 });
        nw = n1.offsetWidth;
        startNotice();
        sendPgv('NEW.AC_VIEW.NEWEVENT.TOP_ONNOTICE');
      }
    }
    if (!+hideNotice) {
      startNotice();
    }
  }();

  window.nonce = Math.random();
  // 全屏手势
  var navWrapTop = $$('navWrapTop'),
    toolWrapBottom = $$('toolWrapBottom'),
    toolbarIn = function (e) {
      e = e || window.event;
      // 防止想要滚动的时候拉起了头部
      // if (osWidth - e.clientX < 20) return;
      if (cleanMode || fullMode) {
        addClass(body, 'toolbar');
      }
    },
    toolbarOut = function (e) {
      e = e || window.event;
      e = e.target || e.srcElement;
      // 修正mouseout的bug
      if (e.id === 'comicTitle' || e.parentNode.id === 'comicTitle') return;
      if ((cleanMode || fullMode) && !+isFixBottom) {
        removeClass(body, 'toolbar');
      }
    };
  navWrapTop.onmouseover = toolbarIn;
  navWrapTop.onmouseout = toolbarOut;
  toolWrapBottom.onmouseover = toolbarIn;
  toolWrapBottom.onmouseout = toolbarOut;

  // 锁定工具栏
  var isFixBottom = false;
  // var fixBottom = $$('fixBottom'),
  //     isFixBottom = cookie('isFixBottom');
  // if (!+isFixBottom) {
  //     fixBottom.innerHTML = '锁定工具栏';
  // } else {
  //     fixBottom.innerHTML = '取消锁定';
  //     addClass(body, 'toolbar');
  // }
  // fixBottom.onclick = function() {
  //     isFixBottom = !+isFixBottom;
  //     cookie('isFixBottom', isFixBottom ? '1' : '0', {path: '/', expires: 2});
  //     sendPgv('NEW.AC_VIEW.NEWEVENT.TOOLBAR_FIX');
  //     if (!+isFixBottom) {
  //         fixBottom.innerHTML = '锁定工具栏';
  //     } else {
  //         fixBottom.innerHTML = '取消锁定';
  //     }
  // }

  //添加点击流
  ! function () {
    hotPgv('prevChapter', 'NEW.AC_VIEW.NEWEVENT.TOOLS_PREV');
    hotPgv('nextChapter', 'NEW.AC_VIEW.NEWEVENT.TOOLS_NEXT');
    hotPgv('catalogueControl', 'NEW.AC_VIEW.NEWEVENT.TOOLS_MENUS');
    hotPgv('fullscreen', 'NEW.AC_VIEW.NEWEVENT.TOOLS_FULL');
    hotPgv('themeControl', 'NEW.AC_VIEW.NEWEVENT.TOOLS_LIGHT');
    hotPgv('fullscreenChange', 'NEW.AC_VIEW.NEWEVENT.TOOLS_FULLSCREEN');
    // hotPgv('mainControlNext', 'NEW.AC_VIEW.NEWEVENT.BOTTOM_NEXT');
    hotPgv('iconMonth', 'NEW.AC_VIEW.NEWEVENT.BOTTOM_YUEPIAO1');
    hotPgv('monthTicketShow', 'NEW.AC_VIEW.NEWEVENT.BOTTOM_YUEPIAO2');
    hotPgv('iconPrize', 'NEW.AC_VIEW.NEWEVENT.BOTTOM_DASHANG1');
    hotPgv('rewardShow', 'NEW.AC_VIEW.NEWEVENT.BOTTOM_DASHANG2');
    hotPgv('bookshelf', 'NEW.AC_VIEW.NEWEVENT.TOP_BOOKSHELF');
    hotPgv('userName', 'NEW.AC_VIEW.NEWEVENT.TOP_BStoSelf');
    hotPgv('chapter', 'NEW.AC_VIEW.NEWEVENT.TOP_toChapter');
    hotPgv('home', 'NEW.AC_VIEW.NEWEVENT.TOP_HOME');
    hotPgv('logo', 'NEW.AC_VIEW.NEWEVENT.TOP_LOGO');

    hotPgv('roastBtnText', 'NEW.AC_VIEW.NEWDM.FADANMU.ZHANKAI_BUTTON'); // h
    hotPgv('icoBarWrite', 'NEW.AC_VIEW.NEWDM.FADANMU.SHOUQI_BUTTON'); // h
    hotPgv('turnToRoastDm', 'NEW.AC_VIEW.NEWDM.QIEHUAN_BUTTON'); // h
    hotPgv('icoBarMode', 'NEW.AC_VIEW.NEWDM.QIEHUAN_BUTTON'); // h
    hotPgv('icoBarChange', 'NEW.AC_VIEW.NEWDM.HUANYIPI'); // h
    /* hotPgv('toRoast', 'NEW.AC_VIEW.NEWEVENT.TC.FATUCAO_BOTTOM');

     hotPgv('barrage', 'NEW.AC_VIEW.NEWEVENT.TC.FATUCAO_BOTTOM');
     hotPgv('roastSmallBar', 'NEW.AC_VIEW.NEWEVENT.TC.YINCANG_RIGHT');
     hotPgv('roastMode', 'NEW.AC_VIEW.NEWEVENT.TC.YINCANG_BOTTOM');
     hotPgv('changeRoast', 'NEW.AC_VIEW.NEWEVENT.TC.HUANYIPI');

     hotPgv('publishVip', 'NEW.AC_VIEW.NEWEVENT.TC.TOVIP')*/

    if (!crossPage) {
      /*$$('recommendList').onmousedown = function(e) {
       e = e || window.event;
       e = e.target || e. srcElement;
       var recommendPicId = e.getAttribute('data-pvg');
       if (recommendPicId) {
       sendPgv('NEW.AC_VIEW.NEWEVENT.AD_COMLEFT' + (+recommendPicId + 1));
       }
       }*/


      var leftPicAd = $$('leftPicAd');
      if (leftPicAd) {
        leftPicAd.onmousedown = function () {
          sendPgv('NEW.AC_VIEW.NEWEVENT.AD_PICLEFT');
        }
      }
    }

    // 【20220720】不需要页面进入时上报点击事件（详情咨询: thorwang）
    // setTimeout(function() {
    //     if (crossPage) {
    //         sendPgv('NEW.AC_VIEW.ALL.DUIYE');
    //         // sendPgv('NEW.AC_VIEW.CONTENT.DUIYE.' + ID);
    //     } else {
    //         sendPgv('NEW.AC_VIEW.ALL.DANYE');
    //     }
    //     sendPgv(IS_JAPAN ? 'NEW.AC_VIEW.ALL.RIMAN' : 'NEW.AC_VIEW.ALL.GUOMAN');
    //     sendPgv(cleanMode ? 'NEW.AC_VIEW.ALL.QINGJIE' : 'NEW.AC_VIEW.ALL.NORMAL');
    //     //sendPgv(bigScreenRoastMode ? 'NEW.AC_VIEW.ALL.TC_YOUCE' : 'NEW.AC_VIEW.ALL.TC_DIBU');
    //     if (roastState) {
    //         sendPgv(bigScreenRoastMode ? 'NEW.AC_VIEW.NEWDM.ZHANKAI' : 'NEW.AC_VIEW.NEWDM.SHOUQI'); // h
    //     }
    //     //sendPgv('NEW.AC_VIEW.ALL.TC_' + (roastState === 0 ? 'YINCANG' : roastState === 1 ? 'TUCAO' : 'DANMU'));
    //     sendPgv('NEW.AC_VIEW.NEWDM.' + (roastState === 0 ? 'YINCANG' : roastState === 1 ? 'TUCAO' : 'DANMU')); // h
    // }, 3000);
  }();

  // 添加腾讯视频相关入口
  // !function() {
  //     if (crossPage) return;
  //     var animateInfoWrap = $$('animateInfoWrap'),
  //         animateInfoContain = $$('animateInfoContain'),
  //         cartoonHide = cookie('cartoonHide'),
  //         initVideo;
  //     if (!animateInfoWrap) return;
  //     ajax.get({
  //         url: '/Ajax/getAssassinVideo',
  //         // data: '',
  //         callback: function(data) {
  //             var videoData = JSON.parse(data),
  //                 videoHtml = '';
  //             if (!videoData.list.length) return;
  //             videoData.list.reverse();

  //             videoHtml = template('animateInfoMod', videoData);
  //             animateInfoWrap.innerHTML = videoHtml;
  //             setTimeout(initVideo, 50);
  //         }
  //     });

  //     initVideo = function() {
  //         if (+cartoonHide) {
  //             addClass(animateInfoWrap, 'close');
  //         }
  //         removeClass(animateInfoWrap, 'hidden');
  //         $$('iconClose').onclick = function() {
  //             addClass(animateInfoWrap, 'close');
  //             cookie('cartoonHide', '1', {path: '/', expires: 2});
  //             cartoonHide = '1';
  //         }
  //         $$('btnLookAni').onclick = function() {
  //             if (+cartoonHide) {
  //                 removeClass(animateInfoWrap, 'close');
  //                 cookie('cartoonHide', '0', {path: '/', expires: 2});
  //                 cartoonHide = '0';
  //             } else {
  //                 addClass(animateInfoWrap, 'close');
  //                 cookie('cartoonHide', '1', {path: '/', expires: 2});
  //                 cartoonHide = '1';
  //             }
  //         }
  //     }
  // }();

  // 取消ie情况下的焦点边框
  ! function () {
    var ua = navigator.userAgent,
      a, len;
    if (ua.indexOf('MSIE') !== -1) {
      a = document.getElementsByTagName('a');
      len = a.length;
      while (len--) {
        a[len].onfocus = function () {
          this.blur();
        }
      }
    }
  }();

  // QQ大厅兼容代码
  var QQHALL_INIT = false;

  function checkQQHall() {
    if (!qqGameHall) return;
    var a = document.getElementsByTagName('a'),
      len = a.length,
      mainControlNext = $$('mainControlNext'),
      pageArrow = $$('pageArrow'),
      hideMeByClassName = function (o, str) {
        if (!o) return;
        if (o.className.indexOf(str) !== -1) {
          o.style.display = 'none';
        }
      },
      unableLink = function (o) {
        if (!o) return;
        o.onclick = function (e) {
          e = e || window.event;
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        o.style.cursor = 'default';
      },
      forClearCache,
      saveUserRecord = function () {
        var _image = new Image(),
          link = 'https://dir.minigame.qq.com/cgi-bin/UserHistory_Tlist?cmd=102&subKey=' + ID + '&content=' + encodeURIComponent(DATA.comic.title) + '&iType=1&strCol1=' + CID + '&strCol2=' + encodeURIComponent(DATA.chapter.cTitle);
        forClearCache = _image;
        _image.onload = _image.onerror = _image.onabort = function () {
          _image.onload = _image.onerror = _image.onabort = null;
          forClearCache = null
        }
        _image.src = link;
      }
    if (!QQHALL_INIT) {
      saveUserRecord();
      while (len--) {
        if (!a[len]) continue;
        a[len].target = '_self';
        if (a[len].href.indexOf('/theme/') != -1) {
          a[len].href = 'javascript:void(0)';
        };
      }
      if (!crossPage) {
        var comicContain = $$('comicContain').children,
          len = comicContain.length;
        while (len--) {
          hideMeByClassName(comicContain[len], 'main_ad');
        }
      }
      $$('navTop').children[0].innerHTML = '<a id="logo" class="logo" style="cursor: default">腾讯动漫</a>';
      if (NEXT_CHAPTER === 0) {
        if (!crossPage) {
          mainControlNext.innerHTML = '\u5373\u5C06\u8FDB\u5165\u4E0B\u4E00\u8BDD' + '<span class="iconfont icon-next"></span>';
        } else {
          addClass(pageArrow, 'page-arrow-qqhall');
        }
      }
      QQHALL_INIT = true;
    }

    var navTopChildren = $$('navTop').children,
      len = navTopChildren.length,
      uso = $$('userSignOut');
    while (len--) {
      hideMeByClassName(navTopChildren[len], 'top-btn-wrap');
    }

    $$('addFavourites').style.display = 'none';
    $$('bookshelf').parentNode.style.display = 'none';
    if (uso && uso.parentNode) {
      uso.parentNode.removeChild(uso);
    }

    unableLink($$('chapter'));
    //unableLink($$('userName'));
    unableLink($$('comicTitle').children[0]);

    // var ip = $$('iconPrize'),
    //     ifn = $$('iconFavouriteProNext');
    // if (crossPage) {
    //     if (ip) {
    //         $$('iconFavourite').parentNode.parentNode.style.display = 'none';
    //     }
    //     ifn && (ifn.parentNode.parentNode.style.display = 'none');

    //     recommendStack.style.display = 'none';
    // } else {
    //     var controlList = $$('iconFavouritePro').parentNode.parentNode.parentNode.children;
    //     controlList[0].style.display = 'none';
    //     controlList[1].style.marginLeft = '70px';
    //     if (IS_JAPAN || DATA.comic.isLightNovel) {
    //         $$('iconPrize').parentNode.parentNode.style.marginLeft = '140px';
    //     }
    // }

  }
  checkQQHall();

  // QQ大厅上报
  if (qqGameHall) {
    setTimeout(function () {
      sendPgv('NEW.AC_VIEW.NEWEVENT.QQHALL');
    }, 1000);
  }
}(window, {});


/**
 * rusherwang
 * 2019/02/18
 * 汉字转拼音，用于弹幕过滤等
 */
! function () {
  var TransPingYin = {
    escReg: new RegExp("[\\*\\.\\?\\+\\$\\^\\[\\]\\(\\)\\{\\}\\|\\\\\/]")
  };

  TransPingYin.toPingYin = function (str) {
    //给定字符串中所有的汉字转换成拼音和首字母（非汉字字符串不变），并返回包含结果数组的Object
    //需要注意，返回的Object包含2个二维数组(之所以需要二维数组，是因为同一串字符存在多种拼音组合)，分别是拼音结果和首字母结果。
    var len = str.length;
    var ziArr = str.split("");
    var pingyinArr = [];
    var allPingyinArr = [
      []
    ];
    var allPingyinArr_I = [
      []
    ];
    var zi, ziPingyinArr, ziPingyinArrLen, zipingyin, i, j, k;
    for (i = 0; i < len; i++) {
      zi = ziArr[i];
      ziPingyinArr = TransPingYin.getSinglePingYin(zi);
      if (ziPingyinArr && ziPingyinArr.length) {
        pingyinArr[i] = ziPingyinArr;
        ziPingyinArrLen = ziPingyinArr.length;
        if (ziPingyinArrLen == 1) {
          for (j = 0; j < allPingyinArr.length; j++) {
            zipingyin = ziPingyinArr[0];
            allPingyinArr[j].push(zipingyin);
            allPingyinArr_I[j].push(zipingyin.substr(0, 1));
          }
        } else {
          var newArr = [];
          var newArr_I = [];
          for (k = 0; k < ziPingyinArrLen; k++) {
            var temArr = JSON.parse(JSON.stringify(allPingyinArr));
            var temArr_I = JSON.parse(JSON.stringify(allPingyinArr_I));
            for (j = 0; j < temArr.length; j++) {
              zipingyin = ziPingyinArr[k];
              temArr[j].push(zipingyin);
              temArr_I[j].push(zipingyin.substr(0, 1));
            }
            newArr = newArr.concat(temArr);
            newArr_I = newArr_I.concat(temArr_I);
          }
          allPingyinArr = newArr;
          allPingyinArr_I = newArr_I;
        }
      } else {
        pingyinArr[i] = zi;
        for (j = 0; j < allPingyinArr.length; j++) {
          allPingyinArr[j].push(zi);
          allPingyinArr_I[j].push(zi);
        }
      }
    }

    return {
      pingyinArr: allPingyinArr,
      pingyinArr_I: allPingyinArr_I
    };
  }

  TransPingYin.getSinglePingYin = function (zi) {
    //获取单个汉字的拼音数组———为什么是数组？因为一个字可能有多个读音
    if (TransPingYin.escReg.test(zi))
      return false;
    var resultsArr = [];
    var reg = new RegExp(zi);
    for (var name in TransPingYin.all) {
      if (reg.test(TransPingYin.all[name])) {
        resultsArr.push(name);
      }
    }
    return resultsArr;
  }

  TransPingYin.all = {
    "a": "\u554a\u963f\u5416\u55c4\u814c\u9515",
    "ai": "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d",
    "an": "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9eef",
    "ang": "\u80ae\u6602\u76ce",
    "ao": "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5c99\u5ed2\u9068\u5aaa\u9a9c\u7352\u8071\u87af\u93ca\u9ccc\u93d6",
    "ba": "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u5c9c\u705e\u94af\u7c91\u9c85\u9b43",
    "bai": "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u4f2f\u636d\u63b0",
    "ban": "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8d32\u94a3\u7622\u764d\u8228",
    "bang": "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u6d5c",
    "bao": "\u82de\u80de\u5305\u8912\u5265\u8584\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u5228\u70ae\u52f9\u8446\u5b62\u7172\u9e28\u8913\u8db5\u9f85",
    "bei": "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u81c2\u5b5b\u9642\u90b6\u57e4\u8406\u84d3\u5457\u6096\u789a\u9e4e\u8919\u943e\u97b4",
    "ben": "\u5954\u82ef\u672c\u7b28\u755a\u574c\u8d32\u951b",
    "beng": "\u868c\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u580b\u5623\u750f",
    "bi": "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u79d8\u6ccc\u5315\u4ffe\u57e4\u8298\u835c\u8378\u8406\u859c\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0",
    "bian": "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a86\u890a\u8759\u7b3e\u9cca",
    "biao": "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u6753\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4\u9adf",
    "bie": "\u9cd6\u618b\u522b\u762a\u8e69",
    "bin": "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u8c73\u7f24\u73a2\u69df\u6ba1\u8191\u9554\u9acc\u9b13",
    "bing": "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u5c4f\u7980\u51ab\u90b4\u6452\u69df",
    "bo": "\u67cf\u767e\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u535c\u5b5b\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8db5\u8ddb\u8e23",
    "bu": "\u5821\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u57d4\u535f\u900b\u74ff\u6661\u949a\u94b8\u91ad",
    "ca": "\u64e6\u5693\u7924",
    "cai": "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521",
    "can": "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u5b71\u9a96\u74a8\u7cb2\u9eea",
    "cang": "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27",
    "cao": "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a",
    "ce": "\u5395\u7b56\u4fa7\u518c\u6d4b\u607b",
    "cen": "\u53c2\u5c91\u6d94",
    "ceng": "\u5c42\u8e6d\u66fe\u564c",
    "cha": "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u5239\u55b3\u5693\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9538\u9572\u8869",
    "chai": "\u5dee\u62c6\u67f4\u8c7a\u4faa\u9497\u7625\u867f\u9f87",
    "chan": "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5355\u5181\u8c04\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u89c7\u7985\u9561\u87fe\u8e94",
    "chang": "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3",
    "chao": "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u7ef0\u527f\u600a\u6641\u8016",
    "che": "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817",
    "chen": "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u8c36\u62bb\u55d4\u5bb8\u741b\u6987\u789c\u9f80",
    "cheng": "\u6491\u79f0\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u76db\u4e1e\u57d5\u564c\u5fb5\u67a8\u67fd\u584d\u77a0\u94d6\u94db\u88ce\u86cf\u9172",
    "chi": "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u577b\u5880\u830c\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u5ab8\u6555\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e1f\u9b51",
    "chong": "\u5145\u51b2\u866b\u5d07\u5ba0\u79cd\u91cd\u833a\u5fe1\u61a7\u94f3\u8202\u825f",
    "chou": "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u81ed\u4fe6\u5e31\u60c6\u7633\u96e0",
    "chu": "\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u755c\u4e8d\u520d\u6035\u61b7\u7ecc\u6775\u696e\u6a17\u891a\u870d\u8e70\u9edc",
    "chuai": "\u63e3\u640b\u562c\u81aa\u8e39",
    "chuan": "\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u821b\u9044\u5ddb\u6c1a\u948f\u8221",
    "chuang": "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006\u7592",
    "chui": "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc",
    "chun": "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u83bc\u9e51\u877d",
    "chuo": "\u6233\u7ef0\u555c\u8fb6\u8f8d\u8e14\u9f8a",
    "ci": "\u5dee\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u4f3a\u5179\u8308\u5472\u7960\u9e5a\u7ca2\u7ccd",
    "cong": "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u82c1\u6dd9\u9aa2\u742e\u7481\u679e",
    "cou": "\u51d1\u6971\u8f8f\u8160",
    "cu": "\u7c97\u918b\u7c07\u4fc3\u851f\u5f82\u731d\u6b82\u9162\u8e59\u8e74",
    "cuan": "\u8e7f\u7be1\u7a9c\u6512\u6c46\u64ba\u7228\u9569",
    "cui": "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u5550\u60b4\u7480\u69b1\u6bf3\u96b9",
    "cun": "\u6751\u5b58\u5bf8\u5fd6\u76b4",
    "cuo": "\u78cb\u64ae\u6413\u63aa\u632b\u9519\u539d\u5d6f\u811e\u9509\u77ec\u75e4\u7625\u9e7e\u8e49\u8e9c",
    "da": "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u6c93\u75b8\u8921\u7b2a\u977c\u9791",
    "dai": "\u5927\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u9a80\u7ed0\u73b3\u9edb",
    "dan": "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u8d61\u77f3\u510b\u840f\u5556\u6fb9\u6b9a\u8d55\u7708\u75b8\u7605\u8043\u7baa",
    "dang": "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6",
    "dao": "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u5202\u53e8\u5e31\u5fc9\u6c18\u7118\u7e9b",
    "de": "\u5fb7\u5f97\u7684\u5730\u951d",
    "dei": "\u5f97",
    "deng": "\u6f84\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26",
    "di": "\u7684\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u63d0\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6",
    "dia": "\u55f2",
    "dian": "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u963d\u576b\u5dc5\u73b7\u94bf\u765c\u766b\u7c1f\u8e2e",
    "diao": "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u94de\u94eb\u8c82\u9cb7",
    "die": "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u57a4\u581e\u63f2\u558b\u7252\u74de\u800b\u8e40\u9cbd",
    "ding": "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a",
    "diu": "\u4e22\u94e5",
    "dong": "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u549a\u5cbd\u5cd2\u6c21\u80e8\u80f4\u7850\u9e2b",
    "dou": "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u90fd\u8538\u7aa6\u86aa\u7bfc",
    "du": "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u724d\u8839\u7b03\u9ad1\u9ee9",
    "duan": "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u6934\u7145\u7c16",
    "dui": "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893",
    "dun": "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u6c8c\u7096\u7818\u7905\u76f9\u9566\u8db8",
    "duo": "\u5ea6\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u9a6e\u5484\u54da\u6cb2\u7f0d\u94ce\u88f0\u8e31",
    "e": "\u963f\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u54e6\u5669\u8c14\u57a9\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u816d\u9507\u9537\u9e57\u989a\u9cc4",
    "ei": "\u8bf6",
    "en": "\u6069\u84bd\u6441",
    "er": "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95",
    "fa": "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d",
    "fan": "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8543\u8629\u5e61\u68b5\u71d4\u7548\u8e6f",
    "fang": "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u678b\u94ab\u822b\u9c82",
    "fei": "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7eef\u69a7\u8d32\u8153\u6590\u6249\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1",
    "fen": "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u73a2\u68fc\u8d32\u9cbc\u9f22",
    "feng": "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u552a\u6ca3\u781c",
    "fo": "\u4f5b",
    "fou": "\u5426\u7f36",
    "fu": "\u4f5b\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u961d\u90db\u8299\u82be\u82fb\u832f\u83a9\u83d4\u62ca\u544b\u5e5e\u602b\u6ecf\u8274\u5b5a\u9a78\u7ec2\u7ecb\u6874\u8d59\u7953\u7829\u9efb\u9efc\u7f58\u7a03\u99a5\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9c8b\u9cc6",
    "ga": "\u5676\u560e\u5939\u5496\u4f3d\u5c2c\u5c15\u5c1c\u65ee\u9486",
    "gai": "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u82a5\u4e10\u9654\u5793\u6224\u8d45\u80f2",
    "gan": "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150",
    "gang": "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6760\u625b\u6206\u7f61\u7b7b",
    "gao": "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u85c1\u7f1f\u69d4\u69c1\u6772\u9506",
    "ge": "\u76d6\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u86e4\u9601\u9694\u94ec\u4e2a\u5404\u5408\u54af\u9b32\u4ee1\u54ff\u572a\u5865\u55dd\u7ea5\u643f\u8188\u94ea\u9549\u88bc\u867c\u8238\u9abc",
    "gei": "\u7ed9",
    "gen": "\u6839\u8ddf\u4e98\u831b\u54cf\u826e",
    "geng": "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u9888\u54fd\u8d53\u7ee0\u9ca0",
    "gong": "\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u5efe\u73d9\u80b1\u86a3\u89e5",
    "gou": "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u67b8\u89cf\u5f40\u7b31\u7bdd\u97b2",
    "gu": "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u8d3e\u560f\u8bc2\u83f0\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9e58",
    "gua": "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u80cd\u9e39",
    "guai": "\u4e56\u62d0\u602a\u63b4",
    "guan": "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u7eb6\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf",
    "guang": "\u5149\u5e7f\u901b\u54a3\u72b7\u6844\u80f1",
    "gui": "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u7094\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc",
    "gun": "\u8f8a\u6eda\u68cd\u886e\u7ef2\u78d9\u9ca7",
    "guo": "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u6da1\u9998\u57da\u63b4\u5459\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u873e\u8748",
    "ha": "\u86e4\u54c8\u94ea",
    "hai": "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u8fd8\u54b3\u55e8\u80f2\u91a2",
    "han": "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u701a\u6657\u7113\u9878\u9894\u86b6\u9f3e",
    "hang": "\u592f\u676d\u822a\u542d\u5df7\u884c\u6c86\u7ed7\u9883",
    "hao": "\u9550\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8c89\u84bf\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d",
    "he": "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u5413\u8bc3\u52be\u58d1\u55ec\u9616\u7ea5\u66f7\u76cd\u988c\u86b5\u7fee",
    "hei": "\u563f\u9ed1",
    "hen": "\u75d5\u5f88\u72e0\u6068",
    "heng": "\u54fc\u4ea8\u6a2a\u8861\u6052\u8605\u73e9\u6841",
    "hong": "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8a07\u8ba7\u836d\u857b\u85a8\u95f3\u6cd3",
    "hou": "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba",
    "hu": "\u6838\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u74e0\u9e44\u9e55\u9e71\u864d\u7b0f\u9190\u659b\u9e58",
    "hua": "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u9a85\u6866\u7809\u94e7",
    "huai": "\u69d0\u5f8a\u6000\u6dee\u574f\u8e1d",
    "huan": "\u6b22\u73af\u6853\u8fd8\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u8411\u64d0\u571c\u737e\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f",
    "huang": "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7",
    "hui": "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u6e83\u8bd9\u8334\u835f\u8559\u54b4\u54d5\u5599\u96b3\u6d04\u6d4d\u5f57\u7f0b\u6867\u6656\u605a\u867a\u87ea\u9ebe",
    "hun": "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u73f2",
    "huo": "\u548c\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u5290\u85ff\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816",
    "ji": "\u7ed9\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u85c9\u5947\u7cfb\u4e0c\u4e9f\u4e69\u525e\u4f76\u5048\u58bc\u82a8\u82b0\u8360\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82",
    "jia": "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u8304\u560f\u4f3d\u90cf\u846d\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u94ea\u9553\u75c2\u7615\u88b7\u86f1\u7b33\u8888\u8dcf",
    "jian": "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u8c2e\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7fe6\u8dbc\u8e3a\u9ca3\u97af",
    "jiang": "\u8679\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u5f3a\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47",
    "jiao": "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u7a96\u89c9\u6821\u4f7c\u50ec\u827d\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b",
    "jie": "\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5369\u62ee\u5588\u55df\u5a55\u5b51\u6840\u78a3\u9534\u7596\u9889\u86a7\u7faf\u9c92\u9ab1",
    "jin": "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u52b2\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u887f\u77dc",
    "jing": "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u9649\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc\u9753",
    "jiong": "\u70af\u7a98\u5182\u8fe5\u6243",
    "jiu": "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e20\u9e6b\u8d73\u9b0f",
    "ju": "\u8f66\u67dc\u97a0\u62d8\u72d9\u75bd\u5c45\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u77bf\u97ab",
    "juan": "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u5708\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd",
    "jue": "\u56bc\u811a\u89d2\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u5800\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6",
    "jun": "\u9f9f\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u76b2\u7b60\u9e87",
    "ka": "\u5580\u5496\u5361\u54af\u4f67\u5494\u80e9",
    "kai": "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e\u9534",
    "kan": "\u69db\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u961a\u6221\u9f9b\u77b0",
    "kang": "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u4f09\u95f6\u94aa",
    "kao": "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0",
    "ke": "\u5475\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u55d1\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u94ea\u951e\u7a1e\u75b4\u7aa0\u988f\u86b5\u874c\u9ac1",
    "ken": "\u80af\u5543\u57a6\u6073\u88c9",
    "keng": "\u5751\u542d\u80eb\u94d2\u94ff",
    "kong": "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c",
    "kou": "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58",
    "ku": "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7",
    "kua": "\u5938\u57ae\u630e\u8de8\u80ef\u4f89\u951e",
    "kuai": "\u4f1a\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u54d9\u72ef\u810d",
    "kuan": "\u5bbd\u6b3e\u9acb",
    "kuang": "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36",
    "kui": "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u8489\u63c6\u55b9\u559f\u609d\u6126\u9035\u668c\u777d\u8069\u8770\u7bd1\u8dec",
    "kun": "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1",
    "kuo": "\u62ec\u6269\u5ed3\u9614\u86de",
    "la": "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u843d\u524c\u908b\u65ef\u782c\u760c",
    "lai": "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41",
    "lan": "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5c9a\u6f24\u6984\u6593\u7f71\u9567\u8934",
    "lang": "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782",
    "lao": "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u843d\u7edc\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u8022\u91aa",
    "le": "\u52d2\u4e50\u4e86\u4ec2\u53fb\u6cd0\u9cd3",
    "lei": "\u52d2\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u808b\u7c7b\u6cea\u7fb8\u8bd4\u561e\u5ad8\u7f27\u6a91\u8012\u9179",
    "leng": "\u68f1\u695e\u51b7\u5844\u6123",
    "li": "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u9b32\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u67a5\u680e\u8f79\u623e\u783a\u782c\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7",
    "lia": "\u4fe9",
    "lian": "\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u8539\u5941\u6f4b\u6fc2\u740f\u695d\u6b93\u81c1\u88e2\u88e3\u880a\u9ca2",
    "liang": "\u4fe9\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u83a8\u690b\u8e09\u9b49",
    "liao": "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69",
    "lie": "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6369\u54a7\u6d0c\u8d94\u8e90\u9b23",
    "lin": "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u62ce\u853a\u5549\u5d99\u5eea\u61d4\u9074\u6aa9\u8f9a\u81a6\u77b5\u7cbc\u8e8f\u9e9f",
    "ling": "\u68f1\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae",
    "liu": "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u788c\u9646\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f",
    "lo": "\u54af",
    "long": "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643",
    "lou": "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u9732\u507b\u848c\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5",
    "lu": "\u516d\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u7eff\u5786\u64b8\u565c\u6cf8\u6e0c\u6f09\u902f\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u8d32\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88",
    "lv": "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u507b\u634b\u95fe\u6988\u8182\u7a06\u891b",
    "lve": "\u63a0\u7565\u950a",
    "luan": "\u5ce6\u631b\u5b6a\u6ee6\u5375\u4e71\u8114\u5a08\u683e\u9e3e\u92ae",
    "lun": "\u62a1\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5",
    "luo": "\u94ec\u54af\u70d9\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8803\u8366\u634b\u645e\u7321\u6cfa\u6f2f\u73de\u6924\u8136\u784c\u9559\u7630\u96d2",
    "m": "\u5452",
    "ma": "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u6469\u62b9\u551b\u72b8\u5b37\u6769\u87c6",
    "mai": "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u973e",
    "man": "\u57cb\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794",
    "mang": "\u8292\u832b\u76f2\u6c13\u5fd9\u83bd\u9099\u6f2d\u786d\u87d2",
    "mao": "\u732b\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u88a4\u8306\u5cc1\u6cd6\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u8765\u87ca\u9ae6",
    "me": "\u4e48",
    "mei": "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45",
    "men": "\u95e8\u95f7\u4eec\u626a\u7116\u61d1\u9494",
    "meng": "\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u6726\u791e\u867b\u8722\u8813\u824b\u8268",
    "mi": "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u54aa\u5627\u7315\u6c68\u5b93\u5f2d\u7e9f\u8112\u7962\u6549\u7cf8\u7e3b\u9e8b",
    "mian": "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e11\u6e4e\u5b80\u817c\u7704",
    "miao": "\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b",
    "mie": "\u8511\u706d\u4e5c\u54a9\u881b\u7bfe",
    "min": "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u7f17\u739f\u73c9\u610d\u9efe\u9cd8",
    "ming": "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169",
    "miu": "\u8c2c\u7f2a",
    "mo": "\u8109\u6ca1\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u4e07\u8c1f\u8309\u84e6\u998d\u5aeb\u6b81\u9546\u79e3\u763c\u8031\u8c8a\u8c98\u9ebd",
    "mou": "\u8c0b\u725f\u67d0\u4f94\u54de\u7f2a\u7738\u86d1\u936a",
    "mu": "\u6a21\u725f\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u5776\u82dc\u6c90\u6bea\u94bc",
    "na": "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u637a\u80ad\u954e\u8872",
    "nai": "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u4f74\u827f\u8418\u67f0",
    "nan": "\u5357\u7537\u96be\u5583\u56e1\u6960\u8169\u877b\u8d67",
    "nang": "\u56ca\u652e\u56d4\u9995\u66e9",
    "nao": "\u6320\u8111\u607c\u95f9\u6dd6\u5b6c\u57b4\u5476\u7331\u7459\u7847\u94d9\u86f2",
    "ne": "\u54ea\u5462\u8bb7",
    "nei": "\u9981\u5185",
    "nen": "\u5ae9\u6041",
    "neng": "\u80fd",
    "ng": "\u55ef",
    "ni": "\u5462\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5",
    "nian": "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u57dd\u8f87\u9ecf\u9c87\u9cb6",
    "niang": "\u5a18\u917f",
    "niao": "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885",
    "nie": "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u989e\u81ec\u8e51",
    "nin": "\u60a8",
    "ning": "\u67e0\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u549b\u752f\u804d",
    "niu": "\u725b\u626d\u94ae\u7ebd\u62d7\u72c3\u5ff8\u599e",
    "nong": "\u8113\u6d53\u519c\u5f04\u4fac\u54dd",
    "nou": "\u8028",
    "nu": "\u5974\u52aa\u6012\u5f29\u80ec\u5b65\u9a7d",
    "nv": "\u5973\u6067\u9495\u8844",
    "nve": "\u8650\u759f",
    "nuan": "\u6696",
    "nuo": "\u5a1c\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518",
    "o": "\u54e6\u5594\u5662",
    "ou": "\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u533a\u8bb4\u6004\u74ef\u8026",
    "pa": "\u6252\u8019\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u6777\u7b62",
    "pai": "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u8feb\u4ff3\u848e\u54cc",
    "pan": "\u756a\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u80d6\u62da\u4e2c\u723f\u6cee\u8d32\u88a2\u897b\u87e0\u8e52",
    "pang": "\u8180\u78c5\u9551\u4e53\u5e9e\u65c1\u802a\u80d6\u5f77\u6ec2\u9004\u8783",
    "pao": "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1",
    "pei": "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u8f94\u5e14\u65c6\u952b\u9185\u9708",
    "pen": "\u55b7\u76c6\u6e53",
    "peng": "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u580b\u562d\u6026\u87db",
    "pi": "\u8f9f\u5426\u576f\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u4ef3\u9642\u9674\u90b3\u90eb\u572e\u57e4\u9f19\u8298\u64d7\u567c\u5e80\u6de0\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u7656\u88e8\u758b\u868d\u8731\u8c94",
    "pian": "\u6241\u4fbf\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u7f0f\u728f\u80fc\u7fe9\u8e41",
    "piao": "\u98d8\u6f02\u74e2\u7968\u6734\u527d\u560c\u5ad6\u9aa0\u7f25\u6b8d\u779f\u87b5",
    "pie": "\u6487\u77a5\u4e3f\u82e4\u6c15",
    "pin": "\u62fc\u9891\u8d2b\u54c1\u8058\u59d8\u5ad4\u6980\u725d\u98a6",
    "ping": "\u51af\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86",
    "po": "\u6cca\u7e41\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u6734\u53f5\u9642\u9131\u73c0\u6534\u6535\u948b\u94b7\u76a4\u7b38",
    "pou": "\u5256\u88d2\u638a",
    "pu": "\u5821\u66b4\u812f\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6ea5\u6fee\u749e\u6c06\u9564\u9568\u8e7c",
    "qi": "\u7a3d\u7f09\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u4fdf\u573b\u8291\u82aa\u8360\u840b\u847a\u8572\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u8006\u6b39\u797a\u61a9\u789b\u9880\u86f4\u871e\u7da6\u7dae\u8e4a\u9ccd\u9e92",
    "qia": "\u5361\u6390\u6070\u6d3d\u845c\u88b7\u9ac2",
    "qian": "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u7ea4\u5029\u4f65\u9621\u828a\u82a1\u831c\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u728d\u80b7\u6106\u94a4\u8654\u7b9d\u7f9f",
    "qiang": "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u4e2c\u6215\u5af1\u6a2f\u6217\u709d\u9535\u956a\u8941\u8723\u7f9f\u8dc4",
    "qiao": "\u58f3\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u96c0\u5281\u8bee\u8c2f\u835e\u5ce4\u6100\u6194\u7f32\u6a35\u7857\u94eb\u8df7\u9792",
    "qie": "\u5207\u8304\u4e14\u602f\u7a83\u4f3d\u90c4\u60ec\u614a\u59be\u6308\u9532\u7ba7\u8d84",
    "qin": "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u63ff\u5423\u55ea\u5659\u5ed1\u6a8e\u9513\u77dc\u8983\u8793\u887e",
    "qing": "\u4eb2\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u82d8\u570a\u6aa0\u78ec\u9516\u873b\u7f44\u7b90\u7dae\u8b26\u9cad\u9ee5",
    "qiong": "\u743c\u7a77\u909b\u8315\u7a79\u86e9\u7b47\u8deb\u928e",
    "qiu": "\u4ec7\u9f9f\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u5def\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u866c\u86af\u8764\u88d8\u7cd7\u9cc5",
    "qu": "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u620c\u8bce\u52ac\u51f5\u82e3\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u6710\u795b\u78f2\u9e32\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2",
    "quan": "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u72ad\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08",
    "que": "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9615\u9619\u60ab",
    "qui": "\u9f3d",
    "qun": "\u88d9\u7fa4\u9021\u9e87",
    "ran": "\u7136\u71c3\u5189\u67d3\u82d2\u86ba\u9aef",
    "rang": "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70",
    "rao": "\u9976\u6270\u7ed5\u835b\u5a06\u6861",
    "re": "\u60f9\u70ed\u558f",
    "ren": "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ebb\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d",
    "reng": "\u6254\u4ecd",
    "ri": "\u65e5",
    "rong": "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u6995\u809c\u877e",
    "rou": "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3",
    "ru": "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u7f1b\u94f7\u8966\u98a5",
    "ruan": "\u8f6f\u962e\u670a",
    "rui": "\u854a\u745e\u9510\u82ae\u8564\u6798\u777f\u868b",
    "run": "\u95f0\u6da6",
    "ruo": "\u82e5\u5f31\u504c\u7bac",
    "sa": "\u6492\u6d12\u8428\u5345\u4ee8\u810e\u98d2",
    "sai": "\u816e\u9cc3\u585e\u8d5b\u567b",
    "san": "\u4e09\u53c1\u4f1e\u6563\u9993\u6bf5\u7cc1",
    "sang": "\u6851\u55d3\u4e27\u6421\u78c9\u98a1",
    "sao": "\u6414\u9a9a\u626b\u5ac2\u57fd\u7f2b\u81ca\u7619\u9ccb",
    "se": "\u585e\u745f\u8272\u6da9\u556c\u94ef\u7a51",
    "sen": "\u68ee",
    "seng": "\u50e7",
    "sha": "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u6749\u53a6\u553c\u6b43\u94e9\u75e7\u88df\u970e\u9ca8",
    "shai": "\u8272\u7b5b\u6652",
    "shan": "\u63ba\u5355\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u6805\u5261\u8baa\u912f\u57cf\u829f\u5f61\u6f78\u59d7\u5b17\u9a9f\u81bb\u7985\u9490\u759d\u87ee\u8222\u8dda\u9cdd\u9adf",
    "shang": "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de",
    "shao": "\u9798\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u6753\u86f8\u7b72\u8244",
    "she": "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u6298\u538d\u4f58\u63f2\u731e\u6ee0\u6b59\u7572\u94ca\u9e9d",
    "shei": "\u8c01",
    "shen": "\u53c2\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u4ec0\u8bdc\u8c02\u8398\u845a\u54c2\u6e16\u6939\u80c2\u77e7\u8703",
    "sheng": "\u4e58\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u5d4a\u6e11\u665f\u771a\u7b19",
    "shi": "\u5319\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u4f3c\u6b96\u5cd9\u8c25\u57d8\u83b3\u84cd\u5f11\u9963\u8f7c\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u917e\u8c55\u9ca5\u9cba",
    "shou": "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f",
    "shu": "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u4e28\u500f\u587e\u83fd\u6445\u6cad\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u758b",
    "shua": "\u5237\u800d\u5530",
    "shuai": "\u7387\u6454\u8870\u7529\u5e05\u87c0",
    "shuan": "\u6813\u62f4\u95e9\u6dae",
    "shuang": "\u971c\u53cc\u723d\u6cf7\u5b40",
    "shui": "\u6c34\u7761\u7a0e\u8bf4\u6c35",
    "shun": "\u542e\u77ac\u987a\u821c",
    "shuo": "\u6570\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u5981\u69ca\u94c4",
    "si": "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u53b6\u549d\u9963\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u9536\u9e36\u801c\u86f3\u7b25",
    "song": "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6",
    "sou": "\u641c\u8258\u64de\u55fd\u53df\u85ae\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b",
    "su": "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u7f29\u5919\u8c21\u850c\u55c9\u612b\u6d91\u7c0c\u89eb\u7a23",
    "suan": "\u9178\u849c\u7b97\u72fb",
    "sui": "\u5c3f\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u8c07\u837d\u6fc9\u9083\u71e7\u772d\u7762",
    "sun": "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u96bc",
    "suo": "\u838e\u84d1\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u55cd\u5a11\u686b\u6332\u7743\u7fa7",
    "ta": "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u62d3\u95fc\u6ebb\u6f2f\u9062\u69bb\u6c93\u94ca\u8dbf\u9cce",
    "tai": "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u9a80\u80bd\u70b1\u949b\u8dc6\u9c90",
    "tan": "\u5f39\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u6fb9\u6619\u8d55\u5fd0\u94bd\u952c\u9561\u8983",
    "tang": "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u5018\u8eba\u6dcc\u8d9f\u70eb\u50a5\u5e11\u9967\u6e8f\u746d\u6a18\u94db\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3",
    "tao": "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u9f17\u53e8\u5555\u6d2e\u97ec\u7118\u9955",
    "te": "\u7279\u5fd2\u5fd1\u94fd",
    "teng": "\u85e4\u817e\u75bc\u8a8a\u6ed5",
    "ti": "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u501c\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d",
    "tian": "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u9518",
    "tiao": "\u8c03\u6311\u6761\u8fe2\u773a\u8df3\u4f7b\u82d5\u7967\u94eb\u7a95\u8729\u7b24\u7c9c\u9f86\u9ca6\u9aeb",
    "tie": "\u8d34\u94c1\u5e16\u841c\u9507\u992e",
    "ting": "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u94e4\u8713\u9706",
    "tong": "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u578c\u833c\u55f5\u5cd2\u6078\u6f7c\u783c",
    "tou": "\u5077\u6295\u5934\u900f\u4ea0\u94ad\u9ab0",
    "tu": "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174",
    "tuan": "\u6e4d\u56e2\u629f\u5f56\u7583",
    "tui": "\u63a8\u9893\u817f\u8715\u892a\u9000\u717a",
    "tun": "\u56e4\u892a\u541e\u5c6f\u81c0\u6c3d\u9968\u66be\u8c5a",
    "tuo": "\u8bf4\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u67c1\u6a50\u7823\u94ca\u7ba8\u9161\u8dce\u9f0d",
    "wa": "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d",
    "wai": "\u6b6a\u5916\u5d34",
    "wan": "\u8513\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u839e\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u9794",
    "wang": "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d",
    "wei": "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u504e\u8bff\u9688\u9697\u5729\u8473\u8587\u56d7\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u75ff\u8249\u9c94",
    "wen": "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u960c\u6c76\u739f\u74ba\u96ef",
    "weng": "\u55e1\u7fc1\u74ee\u84ca\u8579",
    "wo": "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u502d\u83b4\u5594\u5e44\u6e25\u809f\u786a\u9f8c",
    "wu": "\u6076\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5514\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u5a7a\u9a9b\u674c\u727e\u65bc\u7110\u9e49\u9e5c\u75e6\u8708\u92c8\u9f2f",
    "xi": "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u531a\u50d6\u516e\u96b0\u90d7\u831c\u83e5\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u6b59\u71b9\u798a\u79a7\u7699\u7a78\u88fc\u8725\u8785\u87cb\u8204\u823e\u7fb2\u7c9e\u7fd5\u91af\u8e4a\u9f37",
    "xia": "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u5477\u72ce\u9050\u7455\u67d9\u7856\u7f45\u9ee0",
    "xian": "\u94e3\u6d17\u6380\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u82cb\u83b6\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u71f9\u7946\u9e47\u75c3\u75eb\u86ac\u7b45\u7c7c\u9170\u8de3\u8df9\u9730",
    "xiang": "\u964d\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8",
    "xiao": "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u86f8\u7b71\u7bab\u9b48",
    "xie": "\u89e3\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u8840\u53f6\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u736c\u5ee8\u6e2b\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u9889\u8e9e\u9c91\u9ab1",
    "xin": "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u5fc4\u6615\u6b46\u9561\u946b",
    "xing": "\u7701\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u9967\u60bb\u784e",
    "xiong": "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e",
    "xiu": "\u81ed\u5bbf\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u54bb\u5cab\u9990\u5ea5\u6eb4\u9e3a\u8c85\u9af9",
    "xu": "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u5401\u8be9\u52d6\u5729\u84ff\u6d2b\u6d52\u6e86\u987c\u6829\u7166\u76f1\u80e5\u7cc8\u9191",
    "xuan": "\u5238\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u6ceb\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f",
    "xue": "\u524a\u9774\u859b\u5b66\u7a74\u96ea\u8840\u8c11\u5671\u6cf6\u8e05\u9cd5",
    "xun": "\u6d5a\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u90c7\u57d9\u8340\u8368\u8548\u85b0\u5ccb\u5f87\u736f\u6042\u6d35\u6d54\u66db\u7aa8\u91ba\u9c9f",
    "ya": "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u8f67\u4f22\u57ad\u63e0\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6\u758b",
    "yan": "\u94c5\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u6bb7\u53a3\u8d5d\u5261\u4fe8\u5043\u5156\u8ba0\u8c33\u963d\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6e6e\u6edf\u598d\u5ae3\u7430\u6a90\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39\u9f3d",
    "yang": "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785",
    "yao": "\u4fa5\u556e\u759f\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u94a5\u592d\u723b\u5406\u5d24\u5d3e\u5fad\u5e7a\u73e7\u6773\u8f7a\u66dc\u80b4\u94eb\u9e5e\u7a88\u7e47\u9cd0",
    "ye": "\u90aa\u54bd\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u76c5\u9765\u8c12\u90ba\u63f6\u740a\u6654\u70e8\u94d8",
    "yi": "\u827e\u5c3e\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f5a\u4f7e\u8bd2\u961d\u572f\u57f8\u61ff\u82e1\u8351\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8f76\u8d3b\u6b39\u65d6\u71a0\u7719\u9487\u94ca\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf",
    "yin": "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5ef4\u57a0\u5819\u831a\u5432\u5591\u72fa\u5924\u6d07\u6e6e\u6c24\u94df\u763e\u7aa8\u8693\u972a\u9f88",
    "ying": "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u8365\u83ba\u8426\u84e5\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u5ab5\u9e66\u763f\u988d\u7f42",
    "yo": "\u54df\u80b2\u5537",
    "yong": "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u5581\u6175\u9095\u955b\u752c\u9cd9\u9954",
    "you": "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83a0\u839c\u83b8\u5c22\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u86b0\u86b4\u8763\u8764\u7e47\u9c7f\u9edd\u9f2c",
    "yu": "\u851a\u5c09\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u83c0\u84e3\u63c4\u5704\u5709\u5d5b\u72f3\u996b\u9980\u5ebe\u9608\u9b3b\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71a8\u71e0\u8080\u807f\u94b0\u9e46\u9e6c\u7610\u7600\u7aac\u7ab3\u872e\u8753\u7afd\u81fe\u8201\u96e9\u9f89",
    "yuan": "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u82ab\u63be\u571c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u7ba2\u9f0b",
    "yue": "\u4e50\u8bf4\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u54d5\u7039\u680e\u6a3e\u5216\u94ba",
    "yun": "\u5458\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u6120\u7ead\u97eb\u6b92\u6600\u6c32\u71a8\u7b60",
    "za": "\u531d\u7838\u6742\u624e\u548b\u62f6\u5482",
    "zai": "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u5d3d\u753e",
    "zan": "\u54b1\u6512\u6682\u8d5e\u62f6\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e",
    "zang": "\u85cf\u8d43\u810f\u846c\u9a75\u81e7",
    "zao": "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523",
    "ze": "\u8d23\u62e9\u5219\u6cfd\u548b\u4ec4\u8d5c\u5567\u5e3b\u8fee\u6603\u7b2e\u7ba6\u8234",
    "zei": "\u8d3c",
    "zen": "\u600e\u8c2e",
    "zeng": "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503",
    "zha": "\u67e5\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u67de\u63f8\u5412\u54a4\u54f3\u558b\u6942\u781f\u75c4\u86b1\u9f83\u9f44",
    "zhai": "\u7fdf\u62e9\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826\u7635",
    "zhan": "\u98a4\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u9aa3\u65c3",
    "zhang": "\u957f\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1",
    "zhao": "\u671d\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u7740\u8bcf\u5541\u68f9\u948a\u7b0a",
    "zhe": "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u7740\u8c2a\u647a\u67d8\u8f84\u78d4\u9e67\u8936\u8707\u8d6d",
    "zhen": "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u5e27\u5733\u84c1\u6d48\u6eb1\u7f1c\u6862\u6939\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u7a39\u9e29\u7bb4",
    "zheng": "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u75c7\u90d1\u8bc1\u8be4\u5ce5\u5fb5\u94b2\u94ee\u7b5d\u9cad",
    "zhi": "\u8bc6\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fb5\u5902\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u8d3d\u80dd\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef",
    "zhong": "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u5fea\u953a\u87bd\u822f\u8e35",
    "zhou": "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u836e\u5541\u59af\u7ea3\u7ec9\u80c4\u78a1\u7c40\u7e47\u914e",
    "zhu": "\u5c5e\u672f\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4e36\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u891a\u7afa\u7bb8\u8233\u7fe5\u8e85\u9e88",
    "zhua": "\u631d\u6293\u722a",
    "zhuai": "\u62fd\u8f6c",
    "zhuan": "\u4f20\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u556d\u9994\u6c8c\u989b",
    "zhuang": "\u5e62\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u5958\u6206",
    "zhui": "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u60f4\u9a93\u7f12\u96b9",
    "zhun": "\u8c06\u51c6\u9968\u80ab\u7a80",
    "zhuo": "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u5544\u7740\u707c\u6d4a\u502c\u8bfc\u64e2\u6d5e\u6dbf\u6fef\u712f\u799a\u65ab\u956f",
    "zi": "\u5431\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u8308\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u8d91\u89dc\u8a3e\u9f87\u9cbb\u9aed",
    "zong": "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u506c\u679e\u8159\u7cbd",
    "zou": "\u90b9\u8d70\u594f\u63cd\u8bf9\u966c\u9139\u9a7a\u9cb0",
    "zu": "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u955e",
    "zuan": "\u94bb\u7e82\u6525\u7f35\u8e9c",
    "zui": "\u5634\u9189\u6700\u7f6a\u855e\u89dc",
    "zun": "\u5c0a\u9075\u6499\u6a3d\u9cdf",
    "zuo": "\u64ae\u7422\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u963c\u5511\u562c\u600d\u80d9\u795a\u781f\u9162"
  };

  TransPingYin.all['jia'] += '+';
  TransPingYin.all['wei'] += 'V';
  TransPingYin.all['xin'] += '❤️';

  String.prototype.toPingYin = function (joinSting) {
    var res = TransPingYin.toPingYin(this)['pingyinArr'];
    if (typeof joinSting === 'string') {
      var len = res.length;
      while (len--) {
        res[len] = res[len].join(joinSting);
      }
    }
    return res;
  }
}()