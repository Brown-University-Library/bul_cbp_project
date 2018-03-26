/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
function josiahGetUrlParameter(t) {
    for (var e, n, i = window.location.search.substring(1), r = i.split("&"), e = 0; e < r.length; e++)
        if (n = r[e].split("="), n[0] == t) return n[1];
    return null
}

function canScanItem(t, e) {
    var t = (t || "").toLowerCase(),
        e = (e || "").toLowerCase();
    return "annex" != t ? !1 : "book" != e && "periodical title" != e ? !1 : !0
}

function easyScanFullLink(t, e, n) {
    return t + "&title=" + n + "&bibnum=" + e
}

function itemRequestFullLink(t, e) {
    return "https://library.brown.edu/easyrequest/login/?bibnum=" + e + "&barcode=" + t
}

function jcbRequestFullLink(t, e, n, i, r) {
    var o = t,
        a = extractTitle(e),
        s = extractAuthor(n),
        l = i,
        c = r;
    return "https://jcbl.aeon.atlas-sys.com/aeon.dll?Action=10&Form=30&ReferenceNumber=" + o + "&ItemTitle=" + a + "&ItemAuthor=" + s + "&ItemPublisher=" + l + "&CallNumber=" + c + "&ItemInfo2="
}

function hayAeonFullLink(t, e, n, i, r, o) {
    console.log("- starting hayAeonFullLink()");
    var a = "https://brown.aeon.atlas-sys.com/logon/",
        s = t,
        l = extractTitle(e),
        c = extractAuthor(n),
        u = i,
        d = r,
        h = o,
        p = a + "?Action=10&Form=30&ReferenceNumber=" + s + "&ItemTitle=" + l + "&ItemAuthor=" + c + "&ItemPublisher=" + u + "&CallNumber=" + d + "&Location=" + h + "&ItemInfo2=";
    return p
}

function isValidHayAeonLocation(t) {
    console.log("- starting isValidHayAeonLocation()");
    var e = !1,
        n = hay_aeon_exclusions;
    if ("HAY" == t.slice(0, 3)) {
        console.log("- seeing HAY slice");
        var i = n.indexOf(t);
        console.log("- indexOf(josiah_location) was `" + i + "`"), -1 == i && (console.log("- hay_found is `true`"), e = !0)
    }
    return console.log("- returning hay_found value of, ```" + e + "```"), e
}

function extractTitle(t) {
    var e = t;
    return t.length > 100 && (e = t.slice(0, 97) + "..."), e
}

function extractAuthor(t) {
    var e = t;
    return t.length > 100 && (e = t.slice(0, 97) + "..."), e
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (re.isFunction(e)) return re.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return re.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (he.test(e)) return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = xe[t] = {};
        return re.each(t.match(be) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (fe.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }

    function s() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), re.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Ce, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _e.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function c(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u(t, e, n, i) {
        if (re.acceptData(t)) {
            var r, o, a = re.expando,
                s = t.nodeType,
                l = s ? re.cache : t,
                c = s ? t[a] : t[a] && a;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = s ? t[a] = Q.pop() || re.guid++ : a), l[c] || (l[c] = s ? {} : {
                toJSON: re.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = re.extend(l[c], e) : l[c].data = re.extend(l[c].data, e)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[re.camelCase(e)])) : r = o, r
        }
    }

    function d(t, e, n) {
        if (re.acceptData(t)) {
            var i, r, o = t.nodeType,
                a = o ? re.cache : t,
                s = o ? t[re.expando] : re.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !c(i) : !re.isEmptyObject(i)) return
                }(n || (delete a[s].data, c(a[s]))) && (o ? re.cleanData([t], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {}
    }

    function m(t) {
        var e = Le.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function g(t, e) {
        var n, i, r = 0,
            o = typeof t.getElementsByTagName !== Te ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Te ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || re.nodeName(i, e) ? o.push(i) : re.merge(o, g(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], o) : o
    }

    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function x(t) {
        var e = Xe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }

    function k(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, r, o = re._data(t),
                a = re._data(e, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) re.event.add(e, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }

    function T(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (i in r.events) re.removeEvent(e, i, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function _(e, n) {
        var i, r = re(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), o
    }

    function C(t) {
        var e = fe,
            n = Ze[t];
        return n || (n = _(t, e), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ke[0].contentWindow || Ke[0].contentDocument).document, e.write(), e.close(), n = _(t, e), Ke.detach()), Ze[t] = n), n
    }

    function S(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function E(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = pn.length; r--;)
            if (e = pn[r] + n, e in t) return e;
        return i
    }

    function j(t, e) {
        for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && je(i) && (o[a] = re._data(i, "olddisplay", C(i.nodeName)))) : (r = je(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function N(t, e, n) {
        var i = cn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function A(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(t, n + Ee[o], !0, r)), i ? ("content" === n && (a -= re.css(t, "padding" + Ee[o], !0, r)), "margin" !== n && (a -= re.css(t, "border" + Ee[o] + "Width", !0, r))) : (a += re.css(t, "padding" + Ee[o], !0, r), "padding" !== n && (a += re.css(t, "border" + Ee[o] + "Width", !0, r)));
        return a
    }

    function M(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = tn(t),
            a = ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = en(t, e, o), (0 > r || null == r) && (r = t.style[e]), rn.test(r)) return r;
            i = a && (ne.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + A(t, e, n || (a ? "border" : "content"), i, o) + "px"
    }

    function $(t, e, n, i, r) {
        return new $.prototype.init(t, e, n, i, r)
    }

    function D() {
        return setTimeout(function() {
            fn = void 0
        }), fn = re.now()
    }

    function I(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Ee[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function O(t, e, n) {
        for (var i, r = (xn[e] || []).concat(xn["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function L(t, e, n) {
        var i, r, o, a, s, l, c, u, d = this,
            h = {},
            p = t.style,
            f = t.nodeType && je(t),
            m = re._data(t, "fxshow");
        n.queue || (s = re._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, re.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = re.css(t, "display"), u = "none" === c ? re._data(t, "olddisplay") || C(t.nodeName) : c, "inline" === u && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], gn.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    f = !0
                }
                h[i] = m && m[i] || re.style(t, i)
            } else c = void 0;
        if (re.isEmptyObject(h)) "inline" === ("none" === c ? C(t.nodeName) : c) && (p.display = c);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = re._data(t, "fxshow", {}), o && (m.hidden = !f), f ? re(t).show() : d.done(function() {
                re(t).hide()
            }), d.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in h) re.style(t, e, h[e])
            });
            for (i in h) a = O(f ? m[i] : 0, i, d), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(t, e) {
        var n, i, r, o, a;
        for (n in t)
            if (i = re.camelCase(n), r = e[i], o = t[n], re.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = re.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function R(t, e, n) {
        var i, r, o = 0,
            a = bn.length,
            s = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = fn || D(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(t, [c, o, n]), 1 > o && l ? n : (s.resolveWith(t, [c]), !1)
            },
            c = s.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: fn || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = re.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); a > o; o++)
            if (i = bn[o].call(c, t, u, c.opts)) return i;
        return re.map(u, O, c), re.isFunction(c.opts.start) && c.opts.start.call(t, c), re.fx.timer(re.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function P(t, e, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, re.each(t[s] || [], function(t, s) {
                var c = s(e, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = t === zn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function B(t, e) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }

    function q(t, e, n) {
        for (var i, r, o, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function W(t, e, n, i) {
        var r, o, a, s, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function z(t, e, n, i) {
        var r;
        if (re.isArray(e)) re.each(e, function(e, r) {
            n || Qn.test(t) ? i(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== re.type(e)) i(t, e);
        else
            for (r in e) z(t + "[" + r + "]", e[r], n, i)
    }

    function V() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function X(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Q = [],
        G = Q.slice,
        Y = Q.concat,
        J = Q.push,
        K = Q.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.1",
        re = function(t, e) {
            return new re.fn.init(t, e)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(t, e) {
            return e.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: Q.sort,
        splice: Q.splice
    }, re.extend = re.fn.extend = function() {
        var t, e, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) t = a[i], n = r[i], a !== n && (c && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, o = t && re.isArray(t) ? t : []) : o = t && re.isPlainObject(t) ? t : {}, a[i] = re.extend(c, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !re.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
                a = t.length,
                s = n(t);
            if (i) {
                if (s)
                    for (; a > o && (r = e.apply(t[o], i), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(oe, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (K) return K.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, a = t.length, s = !n; a > o; o++) i = !e(t[o], o), i !== s && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
                a = t.length,
                s = n(t),
                l = [];
            if (s)
                for (; a > o; o++) r = e(t[o], o, i), null != r && l.push(r);
            else
                for (o in t) r = e(t[o], o, i), null != r && l.push(r);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (n = G.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(G.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce =
        /*!
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */
        function(t) {
            function e(t, e, n, i) {
                var r, o, a, s, l, c, d, p, f, m;
                if ((e ? e.ownerDocument || e : P) !== $ && M(e), e = e || $, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (s = e.nodeType) && 9 !== s) return [];
                if (I && !i) {
                    if (r = ye.exec(t))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (o = e.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && R(e, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((a = r[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!O || !O.test(t))) {
                        if (p = d = F, f = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = C(t), (d = e.getAttribute("id")) ? p = d.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                            f = be.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return Z.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[F] = !0, t
            }

            function r(t) {
                var e = $.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) k.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function u(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function d() {}

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = q++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, a) {
                    var s, l, c = [B, o];
                    if (a) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, a)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (l = e[F] || (e[F] = {}), (s = l[i]) && s[0] === B && s[1] === o) return c[2] = s[2];
                                if (l[i] = c, c[2] = t(e, n, a)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                return i
            }

            function g(t, e, n, i, r) {
                for (var o, a = [], s = 0, l = t.length, c = null != e; l > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), c && e.push(s));
                return a
            }

            function v(t, e, n, r, o, a) {
                return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, a)), i(function(i, a, s, l) {
                    var c, u, d, h = [],
                        p = [],
                        f = a.length,
                        v = i || m(e || "*", s.nodeType ? [s] : s, []),
                        y = !t || !i && e ? v : g(v, h, t, s, l),
                        b = n ? o || (i ? t : f || r) ? [] : a : y;
                    if (n && n(y, b, s, l), r)
                        for (c = g(b, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? ee.call(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
                })
            }

            function y(t) {
                for (var e, n, i, r = t.length, o = k.relative[t[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, a, !0), c = p(function(t) {
                        return ee.call(e, t) > -1
                    }, a, !0), u = [function(t, n, i) {
                        return !o && (i || n !== j) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                    }]; r > s; s++)
                    if (n = k.relative[t[s].type]) u = [p(f(u), n)];
                    else {
                        if (n = k.filter[t[s].type].apply(null, t[s].matches), n[F]) {
                            for (i = ++s; r > i && !k.relative[t[i].type]; i++);
                            return v(s > 1 && f(u), s > 1 && h(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > s && y(t.slice(s, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function b(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = j,
                            b = i || o && k.find.TAG("*", c),
                            x = B += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (j = a !== $ && a); f !== w && null != (u = b[f]); f++) {
                            if (o && u) {
                                for (d = 0; h = t[d++];)
                                    if (h(u, a, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (B = x)
                            }
                            r && ((u = !h && u) && p--, i && m.push(u))
                        }
                        if (p += f, r && f !== p) {
                            for (d = 0; h = n[d++];) h(m, v, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = J.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (B = x, j = y), m
                    };
                return r ? i(a) : a
            }
            var x, w, k, T, _, C, S, E, j, N, A, M, $, D, I, O, L, H, R, F = "sizzle" + -new Date,
                P = t.document,
                B = 0,
                q = 0,
                W = n(),
                z = n(),
                V = n(),
                U = function(t, e) {
                    return t === e && (A = !0), 0
                },
                X = "undefined",
                Q = 1 << 31,
                G = {}.hasOwnProperty,
                Y = [],
                J = Y.pop,
                K = Y.push,
                Z = Y.push,
                te = Y.slice,
                ee = Y.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = re.replace("w", "w#"),
                ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
                se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ce = new RegExp("^" + ie + "*," + ie + "*"),
                ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                he = new RegExp(se),
                pe = new RegExp("^" + oe + "$"),
                fe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                ke = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                Z.apply(Y = te.call(P.childNodes), P.childNodes), Y[P.childNodes.length].nodeType
            } catch (Te) {
                Z = {
                    apply: Y.length ? function(t, e) {
                        K.apply(t, te.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, _ = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, M = e.setDocument = function(t) {
                var e, n = t ? t.ownerDocument || t : P,
                    i = n.defaultView;
                return n !== $ && 9 === n.nodeType && n.documentElement ? ($ = n, D = n.documentElement, I = !_(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    M()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    M()
                })), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = r(function(t) {
                    return D.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), w.getById ? (k.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && I) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(t) {
                    var e = t.replace(we, ke);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function(t) {
                    var e = t.replace(we, ke);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), k.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, k.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && I ? e.getElementsByClassName(t) : void 0
                }, L = [], O = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = ve.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), L.push("!=", se)
                }), O = O.length && new RegExp(O.join("|")), L = L.length && new RegExp(L.join("|")), e = ve.test(D.compareDocumentPosition), R = e || ve.test(D.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === P && R(P, t) ? -1 : e === n || e.ownerDocument === P && R(P, e) ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i, r = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0;
                    if (o === s) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[r] === c[r];) r++;
                    return r ? a(l[r], c[r]) : l[r] === P ? -1 : c[r] === P ? 1 : 0
                }, n) : $
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== $ && M(t), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !I || L && L.test(n) || O && O.test(n))) try {
                    var i = H.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (r) {}
                return e(n, $, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== $ && M(t), R(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== $ && M(t);
                var n = k.attrHandle[e.toLowerCase()],
                    i = n && G.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (A = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(U), A) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return N = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += T(e);
                return n
            }, k = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(we, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(we, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(we, ke).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, h, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[F] || (g[F] = {}), c = u[t] || [], p = c[0] === B && c[1], h = c[0] === B && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++h && d === e) {
                                            u[t] = [B, p, h];
                                            break
                                        }
                                } else if (y && (c = (e[F] || (e[F] = {}))[t]) && c[0] === B) h = c[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[F] || (d[F] = {}))[t] = [B, h]), d !== e)););
                                return h -= r, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F] ? o(n) : o.length > 1 ? (r = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = o(t, n), a = r.length; a--;) i = ee.call(t, r[a]), t[i] = !(e[i] = r[a])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = S(t.replace(le, "$1"));
                        return r[F] ? i(function(t, e, n, i) {
                            for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, r(e, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, ke).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === D
                    },
                    focus: function(t) {
                        return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !k.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ge.test(t.nodeName)
                    },
                    input: function(t) {
                        return me.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[x] = l(x);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, C = e.tokenize = function(t, n) {
                var i, r, o, a, s, l, c, u = z[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = t, l = [], c = k.preFilter; s;) {
                    (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), s = s.slice(i.length));
                    for (a in k.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? e.error(t) : z(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[F] ? i.push(o) : r.push(o);
                    o = V(t, b(r, i)), o.selector = t
                }
                return o
            }, E = e.select = function(t, e, n, i) {
                var r, o, a, s, l, c = "function" == typeof t && t,
                    d = !i && C(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && I && k.relative[o[1].type]) {
                        if (e = (k.find.ID(a.matches[0].replace(we, ke), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (i = l(a.matches[0].replace(we, ke), be.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && h(o), !t) return Z.apply(n, i), n;
                            break
                        }
                }
                return (c || S(t, d))(i, e, !I, n, be.test(t) && u(e.parentNode) || e), n
            }, w.sortStable = F.split("").sort(U).join("") === F, w.detectDuplicates = !!A, M(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition($.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(ne, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
    re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
    var ue = re.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; r > e; e++)
                    if (re.contains(i[e], this)) return !0
            }));
            for (e = 0; r > e; e++) re.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ue.test(t) ? re(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = re.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), de.test(n[1]) && re.isPlainObject(e))
                        for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = fe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = fe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
        };
    ge.prototype = re.fn, pe = re(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), re.fn.extend({
        has: function(t) {
            var e, n = re(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], a = ue.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(n, i) {
            var r = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g,
        xe = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? xe[t] || o(t) : re.extend({}, t);
        var e, n, i, r, a, s, l = [],
            c = !t.once && [],
            u = function(o) {
                for (n = t.memory && o, i = !0, a = s || 0, s = 0, r = l.length, e = !0; l && r > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(e) {
                            re.each(e, function(e, n) {
                                var i = re.type(n);
                                "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), e ? r = l.length : n && (s = i, u(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(t, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = c = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, n) {
                    return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, re.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return re.Deferred(function(n) {
                            re.each(e, function(e, o) {
                                var a = re.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? re.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, re.each(e, function(t, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = G.call(arguments),
                a = o.length,
                s = 1 !== a || t && re.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : re.Deferred(),
                c = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, e)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var we;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!fe.body) return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (we.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
            }
        }
    }), re.ready.promise = function(e) {
        if (!we)
            if (we = re.Deferred(), "complete" === fe.readyState) setTimeout(re.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
        else {
            fe.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == t.frameElement && fe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    a(), re.ready()
                }
            }()
        }
        return we.promise(e)
    };
    var ke, Te = "undefined";
    for (ke in re(ne)) break;
    ne.ownLast = "0" !== ke, ne.inlineBlockNeedsLayout = !1, re(function() {
            var t, e, n, i;
            n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = fe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            t = null
        }(), re.acceptData = function(t) {
            var e = re.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ce = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !c(t)
        },
        data: function(t, e, n) {
            return u(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return u(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }), re.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : o ? l(o, t, re.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = re.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = re._queueHooks(t, e),
                a = function() {
                    re.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = re.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = re._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ee = ["Top", "Right", "Bottom", "Left"],
        je = function(t, e) {
            return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
        },
        Ne = re.access = function(t, e, n, i, r, o, a) {
            var s = 0,
                l = t.length,
                c = null == n;
            if ("object" === re.type(n)) {
                r = !0;
                for (s in n) re.access(t, e, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(re(t), n)
                })), e))
                for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = fe.createElement("input"),
            e = fe.createElement("div"),
            n = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, n, i = fe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Me = /^(?:input|select|textarea)$/i,
        $e = /^key/,
        De = /^(?:mouse|pointer|contextmenu)|click/,
        Ie = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, c, u, d, h, p, f, m, g = re._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                        return typeof re === Te || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(be) || [""], s = e.length; s--;) o = Oe.exec(e[s]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (c = re.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = re.event.special[p] || {}, d = re.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), re.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, a, s, l, c, u, d, h, p, f, m, g = re.hasData(t) && re._data(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(be) || [""], c = e.length; c--;)
                    if (s = Oe.exec(e[c]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || re.removeEvent(t, p, g.handle), delete u[p])
                    } else
                        for (p in u) re.event.remove(t, p + e[c], n, i, !0);
                re.isEmptyObject(u) && (delete g.handle, re._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, a, s, l, c, u, d, h = [i || fe],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = u = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), c = re.event.special[p] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !re.isWindow(i)) {
                    for (l = c.delegateType || p, Ie.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                    u === (i.ownerDocument || fe) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (d = 0;
                    (s = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || p, o = (re._data(s, "events") || {})[e.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && re.acceptData(i) && a && i[p] && !re.isWindow(i)) {
                    u = i[a], u && (i[a] = null), re.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    re.event.triggered = void 0, u && (i[a] = u)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, n, i, r, o, a = [],
                s = G.call(arguments),
                l = (re._data(this, "events") || {})[t.type] || [],
                c = re.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = re.event.handlers.call(this, t, l), e = 0;
                    (r = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], o = 0; s > o; o++) i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = De.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new re.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || fe, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = fe.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Te && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Me.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Me.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, e);
                r || i.addEventListener(t, n, !0), re._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, e) - 1;
                r ? re._data(i, e, r) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }
        }
    }), re.fn.extend({
        on: function(t, e, n, i, r) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === r && (a = i, i = function(t) {
                return re().off(t), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function() {
                re.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        He = / jQuery\d+="(?:null|\d+)"/g,
        Re = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
        Fe = /^\s+/,
        Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Be = /<([\w:]+)/,
        qe = /<tbody/i,
        We = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ye = m(fe),
        Je = Ye.appendChild(fe.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
        clone: function(t, e, n) {
            var i, r, o, a, s, l = re.contains(t.ownerDocument, t);
            if (ne.html5Clone || re.isXMLDoc(t) || !Re.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = g(o), s = g(t), a = 0; null != (r = s[a]); ++a) i[a] && T(r, i[a]);
            if (e)
                if (n)
                    for (s = s || g(t), i = i || g(o), a = 0; null != (r = s[a]); a++) k(r, i[a]);
                else k(t, o);
            return i = g(o, "script"), i.length > 0 && w(i, !l && g(t, "script")), i = s = r = null, o
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, a, s, l, c, u, d = t.length, h = m(e), p = [], f = 0; d > f; f++)
                if (o = t[f], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o);
                    else if (We.test(o)) {
                for (s = s || h.appendChild(e.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, s.innerHTML = u[1] + o.replace(Pe, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Fe.test(o) && p.push(e.createTextNode(Fe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || qe.test(o) ? "<table>" !== u[1] || qe.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (re.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else p.push(e.createTextNode(o));
            for (s && h.removeChild(s), ne.appendChecked || re.grep(g(p, "input"), v), f = 0; o = p[f++];)
                if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(h.appendChild(o), "script"), a && w(s), n))
                    for (r = 0; o = s[r++];) Ue.test(o.type || "") && n.push(o);
            return s = null, h
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, c = ne.deleteExpando, u = re.event.special; null != (n = t[a]); a++)
                if ((e || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, Q.push(r))
                }
        }
    }), re.fn.extend({
        text: function(t) {
            return Ne(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? re.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ne(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(He, "") : void 0;
                if (!("string" != typeof t || ze.test(t) || !ne.htmlSerialize && Re.test(t) || !ne.leadingWhitespace && Fe.test(t) || Ge[(Be.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Pe, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, i, r, o, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                h = t[0],
                p = re.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !ne.checkClone && Ve.test(h)) return this.each(function(n) {
                var i = u.eq(n);
                p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
            });
            if (c && (s = re.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = re.map(g(s, "script"), b), r = o.length; c > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), e.call(this[l], i, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                s = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = re(t), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[e](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ke, Ze = {};
    ! function() {
        var t;
        ne.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = fe.getElementsByTagName("body")[0], n && n.style ? (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var tn, en, nn = /^margin/,
        rn = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, en = function(t, e, n) {
            var i, r, o, a, s = t.style;
            return n = n || tn(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || re.contains(t.ownerDocument, t) || (a = re.style(t, e)), rn.test(a) && nn.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : fe.documentElement.currentStyle && (tn = function(t) {
            return t.currentStyle
        }, en = function(t, e, n) {
            var i, r, o, a, s = t.style;
            return n = n || tn(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), rn.test(a) && !on.test(e) && (i = s.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function e() {
                var e, n, i, r;
                n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, r = e.appendChild(fe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
            }
            var n, i, r, o, a, s, l;
            n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == s && e(), s
                },
                boxSizingReliable: function() {
                    return null == a && e(), a
                },
                pixelPosition: function() {
                    return null == o && e(), o
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), re.swap = function(t, e, n, i) {
            var r, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = a[o];
            return r
        };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = new RegExp("^(" + Se + ")(.*)$", "i"),
        un = new RegExp("^([+-])=(" + Se + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = en(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, s = re.camelCase(e),
                    l = t.style;
                if (e = re.cssProps[s] || (re.cssProps[s] = E(l, s)), a = re.cssHooks[e] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = un.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                    l[e] = n
                } catch (c) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, a, s = re.camelCase(e);
            return e = re.cssProps[s] || (re.cssProps[s] = E(t.style, s)), a = re.cssHooks[e] || re.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = en(t, e, i)), "normal" === o && e in hn && (o = hn[e]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ln.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, dn, function() {
                    return M(t, e, i)
                }) : M(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && tn(t);
                return N(t, n, i ? A(t, e, i, ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return sn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = S(ne.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, en, [t, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ee[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nn.test(t) || (re.cssHooks[t + e].set = N)
    }), re.fn.extend({
        css: function(t, e) {
            return Ne(this, function(t, e, n) {
                var i, r, o = {},
                    a = 0;
                if (re.isArray(e)) {
                    for (i = tn(t), r = e.length; r > a; a++) o[e[a]] = re.css(t, e[a], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                je(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = $, $.prototype = {
        constructor: $,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = $.propHooks[this.prop];
            return t && t.get ? t.get(this) : $.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = $.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = $.prototype.init, re.fx.step = {};
    var fn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [L],
        xn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    r = vn.exec(e),
                    o = r && r[3] || (re.cssNumber[t] ? "" : "px"),
                    a = (re.cssNumber[t] || "px" !== o && +i) && vn.exec(re.css(n.elem, t)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, re.style(n.elem, t, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(R, {
            tweener: function(t, e) {
                re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], xn[n] = xn[n] || [], xn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? bn.unshift(t) : bn.push(t)
            }
        }), re.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? re.extend({}, t) : {
                complete: n || !n && e || re.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !re.isFunction(e) && e
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(je).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = re.isEmptyObject(t),
                    o = re.speed(e, n, i),
                    a = function() {
                        var e = R(this, re.extend({}, t), o);
                        (r || re._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = re.timers,
                        a = re._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && yn.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && re.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = re._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(t, e) {
            var n = re.fn[e];
            re.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, i, r)
            }
        }), re.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            re.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var t, e = re.timers,
                n = 0;
            for (fn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || re.fx.stop(), fn = void 0
        }, re.fx.timer = function(t) {
            re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            mn || (mn = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(mn), mn = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t, e, n, i, r;
            e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = fe.createElement("select"), r = n.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
        }();
    var wn = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = re.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = re.makeArray(e), a = r.length; a--;)
                        if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var kn, Tn, _n = re.expr.attrHandle,
        Cn = /^(?:checked|selected)$/i,
        Sn = ne.getSetAttribute,
        En = ne.input;
    re.fn.extend({
        attr: function(t, e) {
            return Ne(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Te ? re.prop(t, e, n) : (1 === o && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? Tn : kn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(be);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? En && Sn || !Cn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(Sn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), Tn = {
        set: function(t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : En && Sn || !Cn.test(n) ? t.setAttribute(!Sn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = _n[e] || re.find.attr;
        _n[e] = En && Sn || !Cn.test(e) ? function(t, e, i) {
            var r, o;
            return i || (o = _n[e], _n[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, _n[e] = o), r
        } : function(t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), En && Sn || (re.attrHooks.value = {
        set: function(t, e, n) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : kn && kn.set(t, e, n)
        }
    }), Sn || (kn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, _n.id = _n.name = _n.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: kn.set
    }, re.attrHooks.contenteditable = {
        set: function(t, e, n) {
            kn.set(t, "" === e ? !1 : e, n)
        }
    }, re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var jn = /^(?:input|select|textarea|button|object)$/i,
        Nn = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return Ne(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !re.isXMLDoc(t), o && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : jn.test(t.nodeName) || Nn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a, s = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, a, s = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = t ? re.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = re(this), o = t.match(be) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Te || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Mn = re.now(),
        $n = /\?/,
        Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = re.trim(e + "");
        return r && !re.trim(r.replace(Dn, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var In, On, Ln = /#.*$/,
        Hn = /([?&])_=[^&]*/,
        Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pn = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Wn = {},
        zn = {},
        Vn = "*/".concat("*");
    try {
        On = location.href
    } catch (Un) {
        On = fe.createElement("a"), On.href = "", On = On.href
    }
    In = qn.exec(On.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: On,
            type: "GET",
            isLocal: Fn.test(In[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? B(B(t, re.ajaxSettings), e) : B(re.ajaxSettings, t)
        },
        ajaxPrefilter: F(Wn),
        ajaxTransport: F(zn),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, u, v, y, x, k = e;
                2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = q(d, w, n)), y = W(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, u = y.data, v = y.error, r = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", r ? f.resolveWith(h, [u, k, w]) : f.rejectWith(h, [w, k, v]), w.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]), m.fireWith(h, [w, k]), l && (p.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, a, s, l, c, u, d = re.ajaxSetup({}, e),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? re(h) : re.event,
                f = re.Deferred(),
                m = re.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!u)
                                for (u = {}; e = Rn.exec(a);) u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return c && c.abort(e), n(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || On) + "").replace(Ln, "").replace(Bn, In[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = qn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === In[1] && i[2] === In[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (In[3] || ("http:" === In[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), P(Wn, d, e, w), 2 === b) return w;
            l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += ($n.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Hn.test(o) ? o.replace(Hn, "$1_=" + Mn++) : o + ($n.test(o) ? "&" : "?") + "_=" + Mn++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](d[r]);
            if (c = P(zn, d, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function(t, e) {
        re[e] = function(t, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(re.isFunction(t) ? function(e) {
                re(this).wrapInner(t.call(this, e))
            } : function() {
                var e = re(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    };
    var Xn = /%20/g,
        Qn = /\[\]$/,
        Gn = /\r?\n/g,
        Yn = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) z(n, t[n], e, r);
        return i.join("&").replace(Xn, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Jn.test(this.nodeName) && !Yn.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Gn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Gn, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
    } : V;
    var Kn = 0,
        Zn = {},
        ti = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function() {
        for (var t in Zn) Zn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials" in ti, ti = ne.ajax = !!ti, ti && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, o = t.xhr(),
                        a = ++Kn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(t.hasContent && t.data || null), e = function(n, r) {
                        var s, l, c;
                        if (e && (r || 4 === o.readyState))
                            if (delete Zn[a], e = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && i(s, l, c, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Zn[a] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = fe.head || re("head")[0] || fe.documentElement;
            return {
                send: function(i, r) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ei.pop() || re.expando + "_" + Mn++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, a, s = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ni, "$1" + r) : e.jsonp !== !1 && (e.url += ($n.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || re.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            a = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, ei.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), re.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || fe;
        var i = de.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function(t, e, n) {
        if ("string" != typeof t && ii) return ii.apply(this, arguments);
        var i, r, o, a = this,
            s = t.indexOf(" ");
        return s >= 0 && (i = re.trim(t.slice(s, t.length)), t = t.slice(0, s)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && re.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, a.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            a.each(n, r || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, a, s, l, c, u = re.css(t, "position"),
                d = re(t),
                h = {};
            "static" === u && (t.style.position = "relative"), s = d.offset(), o = re.css(t, "top"), l = re.css(t, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
        }
    }, re.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = X(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || ri
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function(i) {
            return Ne(this, function(t, i, r) {
                var o = X(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = S(ne.pixelPosition, function(t, n) {
            return n ? (n = en(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ne(this, function(e, n, i) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? re.css(e, n, a) : re.style(e, n, i, a)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var oi = t.jQuery,
        ai = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = ai), e && t.jQuery === re && (t.jQuery = oi), re
    }, typeof e === Te && (t.jQuery = t.$ = re), re
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        handleRemote: function(i) {
            var r, o, a, s, l, c;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (a.push(u), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                return c = {
                    type: r || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, s && (c.xhrFields = {
                    withCredentials: s
                }), o && (c.url = o), n.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !n.protocol || !n.host || e.protocol + "//" + e.host != n.protocol + "//" + n.host
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                a = i.attr("target"),
                s = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                c = t('<form method="post" action="' + r + '"></form>'),
                u = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || s === e || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function(e, n, i) {
            var r, o, a = t(),
                s = n || "input,textarea",
                l = e.find(s);
            return l.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    a = a.add(r)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var r = t(this),
            o = r.data("method"),
            a = r.data("params"),
            s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (s && (!o || "GET" === o) && !a) return !0;
            var l = n.handleRemote(r);
            return l === !1 ? n.enableElement(r) : l.error(function() {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.error(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r, o, a = t(this),
            s = a.data("remote") !== e;
        if (!n.allowAction(a)) return n.stopEverything(i);
        if (a.attr("novalidate") == e && (r = n.blankInputs(a, n.requiredInputSelector), r && n.fire(a, "ajax:aborted:required", [r]))) return n.stopEverything(i);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function() {
            n.disableFormElements(a)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    var t, e, n, i, r, o, a, s, l, c, u, d, h, p, f, m, g, v, y, b, x, w, k, T, _, C, S, E, j, N, A, M, $, D, I, O, L, H, R, F, P, B, q, W, z, V, U, X, Q, G, Y, J, K, Z, te, ee, ne = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        ie = function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var i in e) re.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        },
        re = {}.hasOwnProperty,
        oe = [].slice,
        ae = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
    D = {}, h = 10, J = !1, R = null, y = null, M = null, B = null, ee = null, i = {
        BEFORE_CHANGE: "page:before-change",
        FETCH: "page:fetch",
        RECEIVE: "page:receive",
        CHANGE: "page:change",
        UPDATE: "page:update",
        LOAD: "page:load",
        RESTORE: "page:restore",
        BEFORE_UNLOAD: "page:before-unload",
        EXPIRE: "page:expire"
    }, T = function(t) {
        var e;
        return t = new n(t), U(), d(), null != R && R.start(), J && (e = K(t.absolute)) ? (_(e), C(t, null, !1)) : C(t, G)
    }, K = function(t) {
        var e;
        return e = D[t], e && !e.transitionCacheDisabled ? e : void 0
    }, x = function(t) {
        return null == t && (t = !0), J = t
    }, b = function(t) {
        return null == t && (t = !0), c ? t ? null != R ? R : R = new o("html") : (null != R && R.uninstall(), R = null) : void 0
    }, C = function(t, e, n) {
        return null == n && (n = !0), Z(i.FETCH, {
            url: t.absolute
        }), null != ee && ee.abort(), ee = new XMLHttpRequest, ee.open("GET", t.withoutHashForIE10compatibility(), !0), ee.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), ee.setRequestHeader("X-XHR-Referer", B), ee.onload = function() {
            var n;
            return Z(i.RECEIVE, {
                url: t.absolute
            }), (n = H()) ? (q(t), W(), p.apply(null, k(n)), $(), "function" == typeof e && e(), Z(i.LOAD)) : document.location.href = v() || t.absolute
        }, R && n && (ee.onprogress = function() {
            return function(t) {
                var e;
                return e = t.lengthComputable ? t.loaded / t.total * 100 : R.value + (100 - R.value) / 10, R.advanceTo(e)
            }
        }(this)), ee.onloadend = function() {
            return ee = null
        }, ee.onerror = function() {
            return document.location.href = t.absolute
        }, ee.send()
    }, _ = function(t) {
        return null != ee && ee.abort(), p(t.title, t.body), F(t), Z(i.RESTORE)
    }, d = function() {
        var t;
        return t = new n(y.url), D[t.absolute] = {
            url: t.relative,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset,
            cachedAt: (new Date).getTime(),
            transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
        }, m(h)
    }, O = function(t) {
        return null == t && (t = h), /^[\d]+$/.test(t) ? h = parseInt(t) : void 0
    }, m = function(t) {
        var e, n, r, o, a, s;
        for (a = Object.keys(D), e = a.map(function(t) {
                return D[t].cachedAt
            }).sort(function(t, e) {
                return e - t
            }), s = [], n = 0, o = a.length; o > n; n++) r = a[n], D[r].cachedAt <= e[t] && (Z(i.EXPIRE, D[r]), s.push(delete D[r]));
        return s
    }, p = function(e, n, r, o) {
        return Z(i.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(n, document.body), null != r && t.update(r), Y(), o && w(), y = window.history.state, null != R && R.done(), Z(i.CHANGE), Z(i.UPDATE)
    }, w = function() {
        var t, e, n, i, r, o, a, s, l, c, u, d;
        for (d = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, r = d.length; r > n; n++)
            if (u = d[n], "" === (l = u.type) || "text/javascript" === l) {
                for (e = document.createElement("script"), c = u.attributes, i = 0, o = c.length; o > i; i++) t = c[i], e.setAttribute(t.name, t.value);
                u.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(u.innerHTML)), s = u.parentNode, a = u.nextSibling, s.removeChild(u), s.insertBefore(e, a)
            }
    }, X = function(t) {
        return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, Y = function() {
        var t, e;
        return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
    }, q = function(t) {
        return (t = new n(t)).absolute !== B ? window.history.pushState({
            turbolinks: !0,
            url: t.absolute
        }, "", t.absolute) : void 0
    }, W = function() {
        var t, e;
        return (t = ee.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
    }, v = function() {
        var t;
        return null != (t = ee.getResponseHeader("Location")) && new n(t).crossOrigin() ? t : void 0
    }, U = function() {
        return B = document.location.href
    }, V = function() {
        return window.history.replaceState({
            turbolinks: !0,
            url: document.location.href
        }, "", document.location.href)
    }, z = function() {
        return y = window.history.state
    }, $ = function() {
        var t;
        return navigator.userAgent.match(/Firefox/) && !(t = new n).hasNoHash() ? (window.history.replaceState(y, "", t.withoutHash()), document.location.hash = t.hash) : void 0
    }, F = function(t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, G = function() {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, f = function(t) {
        var e, n, i;
        if (null == t || "object" != typeof t) return t;
        e = new t.constructor;
        for (n in t) i = t[n], e[n] = f(i);
        return e
    }, L = function(t) {
        var e, n;
        return n = (null != (e = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? e[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n
    }, Z = function(t, e) {
        var n;
        return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
    }, I = function(t) {
        return !Z(i.BEFORE_CHANGE, {
            url: t
        })
    }, H = function() {
        var t, e, n, i, r, o;
        return e = function() {
            var t;
            return 400 <= (t = ee.status) && 600 > t
        }, o = function() {
            var t;
            return null != (t = ee.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, i = function(t) {
            var e, n, i, r, o;
            for (r = t.querySelector("head").childNodes, o = [], e = 0, n = r.length; n > e; e++) i = r[e], null != ("function" == typeof i.getAttribute ? i.getAttribute("data-turbolinks-track") : void 0) && o.push(i.getAttribute("src") || i.getAttribute("href"));
            return o
        }, t = function(t) {
            var e;
            return M || (M = i(document)), e = i(t), e.length !== M.length || r(e, M).length !== M.length
        }, r = function(t, e) {
            var n, i, r, o, a;
            for (t.length > e.length && (r = [e, t], t = r[0], e = r[1]), o = [], n = 0, i = t.length; i > n; n++) a = t[n], ne.call(e, a) >= 0 && o.push(a);
            return o
        }, !e() && o() && (n = g(ee.responseText), n && !t(n)) ? n : void 0
    }, k = function(e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent : void 0, X(e.querySelector("body")), t.get(e).token, "runScripts"]
    }, t = {
        get: function(t) {
            var e;
            return null == t && (t = document), {
                node: e = t.querySelector('meta[name="csrf-token"]'),
                token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
            }
        },
        update: function(t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, g = function(t) {
        var e;
        return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
    }, n = function() {
        function t(e) {
            return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
        }
        return t.prototype.withoutHash = function() {
            return this.href.replace(this.hash, "").replace("#", "")
        }, t.prototype.withoutHashForIE10compatibility = function() {
            return this.withoutHash()
        }, t.prototype.hasNoHash = function() {
            return 0 === this.hash.length
        }, t.prototype.crossOrigin = function() {
            return this.origin !== (new t).origin
        }, t.prototype._parse = function() {
            var t;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, t
    }(), r = function(t) {
        function e(t) {
            return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
        }
        return ie(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function() {
            var t, n, i, r;
            for (n = 1 <= arguments.length ? oe.call(arguments, 0) : [], i = 0, r = n.length; r > i; i++) t = n[i], e.HTML_EXTENSIONS.push(t);
            return e.HTML_EXTENSIONS
        }, e.prototype.shouldIgnore = function() {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, e.prototype._anchored = function() {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
        }, e.prototype._nonHtml = function() {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, e.prototype._optOut = function() {
            var t, e;
            for (e = this.originalElement; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
            return t
        }, e.prototype._target = function() {
            return 0 !== this.link.target.length
        }, e
    }(n), e = function() {
        function t(t) {
            this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (I(this.link.absolute) || te(this.link.href), this.event.preventDefault()))
        }
        return t.installHandlerLast = function(e) {
            return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
        }, t.handle = function(e) {
            return new t(e)
        }, t.prototype._extractLink = function() {
            var t;
            for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
            return "A" === t.nodeName && 0 !== t.href.length ? this.link = new r(t) : void 0
        }, t.prototype._validForTurbolinks = function() {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, t.prototype._nonStandardClick = function() {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, t
    }(), o = function() {
        function t(t) {
            this.elementSelector = t, this._trickle = ae(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
        }
        var e;
        return e = "turbolinks-progress-bar", t.prototype.install = function() {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, t.prototype.uninstall = function() {
            return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
        }, t.prototype.start = function() {
            return this.advanceTo(5)
        }, t.prototype.advanceTo = function(t) {
            var e;
            if (t > (e = this.value) && 100 >= e) {
                if (this.value = t, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                if (this.value > 0) return this._startTrickle()
            }
        }, t.prototype.done = function() {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, t.prototype._reset = function() {
            var t;
            return t = this.opacity, setTimeout(function(t) {
                return function() {
                    return t.opacity = 0, t._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function(e) {
                return function() {
                    return e.value = 0, e.opacity = t, e._withSpeed(0, function() {
                        return e._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, t.prototype._startTrickle = function() {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, t.prototype._stopTrickle = function() {
            return delete this.trickling
        }, t.prototype._trickle = function() {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, t.prototype._withSpeed = function(t, e) {
            var n, i;
            return n = this.speed, this.speed = t, i = e(), this.speed = n, i
        }, t.prototype._updateStyle = function(t) {
            return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, t.prototype._changeContentToForceRepaint = function() {
            return this.content = "" === this.content ? " " : ""
        }, t.prototype._createCSSRule = function() {
            return this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, t
    }(), u = function(t) {
        return setTimeout(t, 500)
    }, j = function() {
        return document.addEventListener("DOMContentLoaded", function() {
            return Z(i.CHANGE), Z(i.UPDATE)
        }, !0)
    }, A = function() {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(t, e) {
            return jQuery.trim(e.responseText) ? Z(i.UPDATE) : void 0
        }) : void 0
    }, N = function(t) {
        var e, i;
        return (null != (i = t.state) ? i.turbolinks : void 0) ? (e = D[new n(t.state.url).absolute]) ? (d(), _(e)) : te(t.target.location.href) : void 0
    }, E = function() {
        return V(), z(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function() {
            return V(), z()
        }, !1), u(function() {
            return window.addEventListener("popstate", N, !1)
        })
    }, S = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && S, a = !navigator.userAgent.match(/CriOS\//), Q = "GET" === (P = L("request_method")) || "" === P, c = l && a && Q, s = document.addEventListener && document.createEvent, s && (j(), A()), c ? (te = T, E()) : te = function(t) {
        return document.location.href = t
    }, this.Turbolinks = {
        visit: te,
        pagesCached: O,
        enableTransitionCache: x,
        enableProgressBar: b,
        allowLinkExtensions: r.allowExtensions,
        supported: c,
        EVENTS: f(i)
    }
}.call(this), Blacklight = function() {
        var t = new Array;
        return {
            onLoad: function(e) {
                t.push(e)
            },
            activate: function() {
                for (var e = 0; e < t.length; e++) t[e].call()
            }
        }
    }(), $(document).on("page:load", function() {
        Blacklight.activate()
    }), $(document).ready(function() {
        Blacklight.activate()
    }),
    function(t) {
        Blacklight.do_search_autofocus_fallback = function() {
            "undefined" != typeof Modernizer && Modernizr.autofocus || t("input[autofocus]").focus()
        }, Blacklight.onLoad(function() {
            Blacklight.do_search_autofocus_fallback()
        })
    }(jQuery),
    function(t) {
        t.fn.bl_checkbox_submit = function(e) {
            return this.each(function() {
                function n(t) {
                    s.prop("checked", t), l.toggleClass("checked", t), t ? (r.find("input[name=_method]").val("delete"), c.text(r.attr("data-present"))) : (r.find("input[name=_method]").val("put"), c.text(r.attr("data-absent")))
                }
                var i = t.extend({}, t.fn.bl_checkbox_submit.defaults, e),
                    r = t(this);
                r.children().hide(), r.find("input[type=submit]").remove(), r.addClass("form-horizontal");
                var o = r.attr("data-doc-id") || Math.random(),
                    a = 0 != r.find("input[name=_method][value=delete]").size(),
                    s = t('<input type="checkbox">').addClass(i.css_class).attr("id", i.css_class + "_" + o),
                    l = t("<label>").addClass(i.css_class).attr("for", i.css_class + "_" + o).attr("title", r.attr("title") || ""),
                    c = t("<span>");
                l.append(s), l.append(" "), l.append(c);
                var u = t("<div class='checkbox' />").addClass(i.css_class).append(l);
                r.append(u), n(a), s.click(function() {
                    return c.text(r.attr("data-inprogress")), l.attr("disabled", "disabled"), s.attr("disabled", "disabled"), t.ajax({
                        url: r.attr("action"),
                        dataType: "json",
                        type: r.attr("method").toUpperCase(),
                        data: r.serialize(),
                        error: function() {
                            alert("Error"), n(a), l.removeAttr("disabled"), s.removeAttr("disabled")
                        },
                        success: function(t, e, o) {
                            0 != o.status ? (a = !a, n(a), l.removeAttr("disabled"), s.removeAttr("disabled"), i.success.call(r, a, o.responseJSON)) : (alert("Error"), n(a), l.removeAttr("disabled"), s.removeAttr("disabled"))
                        }
                    }), !1
                })
            }), this
        }, t.fn.bl_checkbox_submit.defaults = {
            css_class: "bl_checkbox_submit",
            success: function() {}
        }
    }(jQuery),
    function(t) {
        Blacklight.do_bookmark_toggle_behavior = function() {
            t(Blacklight.do_bookmark_toggle_behavior.selector).bl_checkbox_submit({
                css_class: "toggle_bookmark",
                success: function(e, n) {
                    n.bookmarks && t("[data-role=bookmark-counter]").text(n.bookmarks.count)
                }
            })
        }, Blacklight.do_bookmark_toggle_behavior.selector = "form.bookmark_toggle", Blacklight.onLoad(function() {
            Blacklight.do_bookmark_toggle_behavior()
        })
    }(jQuery), void 0 === Blacklight.ajaxModal && (Blacklight.ajaxModal = {}), Blacklight.ajaxModal.modalSelector = "#ajax-modal", Blacklight.ajaxModal.triggerLinkSelector = "a[data-ajax-modal~=trigger], a.lightboxLink,a.more_facets_link,.ajax_modal_launch", Blacklight.ajaxModal.triggerFormSelector = "form[data-ajax-modal~=trigger], form.ajax_form", Blacklight.ajaxModal.preserveLinkSelector = Blacklight.ajaxModal.modalSelector + " a[data-ajax-modal~=preserve]", Blacklight.ajaxModal.preserveFormSelector = Blacklight.ajaxModal.modalSelector + " form[data-ajax-modal~=preserve]", Blacklight.ajaxModal.containerSelector = "[data-ajax-modal~=container]", Blacklight.ajaxModal.modalCloseSelector = "[data-ajax-modal~=close], span.ajax-close-modal", Blacklight.ajaxModal.onFailure = function() {
        var t = "<div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\xd7</button>Network Error</div>";
        $(Blacklight.ajaxModal.modalSelector).find(".modal-content").html(t), $(Blacklight.ajaxModal.modalSelector).modal("show")
    }, Blacklight.ajaxModal.receiveAjax = function(t) {
        if (0 == t.readyState) Blacklight.ajaxModal.onFailure(t);
        else {
            var e = t.responseText,
                n = $("<div>").append(jQuery.parseHTML(e)).find(Blacklight.ajaxModal.containerSelector).first();
            0 !== n.size() && (e = n.html()), $(Blacklight.ajaxModal.modalSelector).find(".modal-content").html(e);
            var i = $.Event("loaded.blacklight.ajax-modal");
            if ($(Blacklight.ajaxModal.modalSelector).trigger(i), i.isDefaultPrevented()) return;
            $(Blacklight.ajaxModal.modalSelector).modal("show")
        }
    }, Blacklight.ajaxModal.modalAjaxLinkClick = function(t) {
        t.preventDefault();
        var e = $.ajax({
            url: $(this).attr("href"),
            dataType: "script"
        });
        e.always(Blacklight.ajaxModal.receiveAjax)
    }, Blacklight.ajaxModal.modalAjaxFormSubmit = function(t) {
        t.preventDefault();
        var e = $.ajax({
            url: $(this).attr("action"),
            data: $(this).serialize(),
            type: $(this).attr("method"),
            dataType: "script"
        });
        e.always(Blacklight.ajaxModal.receiveAjax)
    }, Blacklight.ajaxModal.setup_modal = function() {
        var t = $.Event("setup.blacklight.ajax-modal");
        $("body").trigger(t), t.isDefaultPrevented() || ($("body").on("click", Blacklight.ajaxModal.triggerLinkSelector + ", " + Blacklight.ajaxModal.preserveLinkSelector, Blacklight.ajaxModal.modalAjaxLinkClick), $("body").on("submit", Blacklight.ajaxModal.triggerFormSelector + ", " + Blacklight.ajaxModal.preserveFormSelector, Blacklight.ajaxModal.modalAjaxFormSubmit), $("body").on("loaded.blacklight.ajax-modal", Blacklight.ajaxModal.check_close_ajax_modal), $("body ").on("click", Blacklight.ajaxModal.modalSelector + " a[data-dismiss~=modal]", function(t) {
            t.preventDefault()
        }))
    }, Blacklight.ajaxModal.check_close_ajax_modal = function(t) {
        $(t.target).find(Blacklight.ajaxModal.modalCloseSelector).length && (modal_flashes = $(this).find(".flash_messages"), $(t.target).modal("hide"), t.preventDefault(), main_flashes = $("#main-flashes"), main_flashes.append(modal_flashes), modal_flashes.fadeIn(500))
    }, Blacklight.onLoad(function() {
        Blacklight.ajaxModal.setup_modal()
    }),
    function(t) {
        Blacklight.do_search_context_behavior = function() {
            t("a[data-context-href]").on("click.search-context", Blacklight.handleSearchContextMethod)
        }, Blacklight.handleSearchContextMethod = function(e) {
            var n = t(this),
                i = n.data("context-href"),
                r = "post",
                o = n.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                s = t("meta[name=csrf-param]").attr("content"),
                l = t('<form method="post" action="' + i + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />',
                u = '<input name="redirect" value="' + n.attr("href") + '" type="hidden" />';
            return (e.metaKey || e.ctrlKey) && (o = "_blank"), void 0 !== s && void 0 !== a && (c += '<input name="' + s + '" value="' + a + '" type="hidden" />'), o && l.attr("target", o), l.hide().append(c).append(u).appendTo("body"), l.submit(), !1
        }, Blacklight.onLoad(function() {
            Blacklight.do_search_context_behavior()
        })
    }(jQuery),
    function(t) {
        Blacklight.onLoad(function() {
            t(document).on("click", "a[data-toggle=collapse][href='#'], [data-toggle=collapse] a[href='#']", function(t) {
                t.preventDefault()
            })
        })
    }(jQuery),
    /* ========================================================================
     * Bootstrap: transition.js v3.3.5
     * http://getbootstrap.com/javascript/#transitions
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var r = function() {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(r, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery),
    /* ========================================================================
     * Bootstrap: collapse.js v3.3.5
     * http://getbootstrap.com/javascript/#collapse
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function n(e) {
            return this.each(function() {
                var n = t(this),
                    r = n.data("bs.collapse"),
                    o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                    var o = t.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return s.call(this);
                        var l = t.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var r = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
                var r = t(i);
                this.addAriaAndCollapsedClass(e(r), r)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var r = t.fn.collapse;
        t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = r, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var r = t(this);
            r.attr("data-target") || i.preventDefault();
            var o = e(r),
                a = o.data("bs.collapse"),
                s = a ? "toggle" : r.data();
            n.call(o, s)
        })
    }(jQuery),
    /* ========================================================================
     * Bootstrap: dropdown.js v3.3.5
     * http://getbootstrap.com/javascript/#dropdowns
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(r).remove(), t(o).each(function() {
                var i = t(this),
                    r = e(i),
                    o = {
                        relatedTarget: this
                    };
                r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o))))
            }))
        }

        function i(e) {
            return this.each(function() {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
            })
        }
        var r = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            a = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        a.VERSION = "3.3.5", a.prototype.toggle = function(i) {
            var r = t(this);
            if (!r.is(".disabled, :disabled")) {
                var o = e(r),
                    a = o.hasClass("open");
                if (n(), !a) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var s = {
                        relatedTarget: this
                    };
                    if (o.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                    r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
                }
                return !1
            }
        }, a.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = t(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = e(i),
                        a = r.hasClass("open");
                    if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                    var s = " li:not(.disabled):visible a",
                        l = r.find(".dropdown-menu" + s);
                    if (l.length) {
                        var c = l.index(n.target);
                        38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = s, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
    }(jQuery),
    /* ========================================================================
     * Bootstrap: alert.js v3.3.5
     * http://getbootstrap.com/javascript/#alerts
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    r = n.data("bs.alert");
                r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
            })
        }
        var n = '[data-dismiss="alert"]',
            i = function(e) {
                t(e).on("click", n, this.close)
            };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
            function n() {
                a.detach().trigger("closed.bs.alert").remove()
            }
            var r = t(this),
                o = r.attr("data-target");
            o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
            var a = t(o);
            e && e.preventDefault(), a.length || (a = r.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var r = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
            return t.fn.alert = r, this
        }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery),
    /* ========================================================================
     * Bootstrap: modal.js v3.3.5
     * http://getbootstrap.com/javascript/#modals
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e(e, i) {
            return this.each(function() {
                var r = t(this),
                    o = r.data("bs.modal"),
                    a = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
                o || r.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](i) : a.show && o.show(i)
            })
        }
        var n = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function(e) {
            var i = this,
                r = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var r = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var o = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                r ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
            }))
        }, n.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(e) {
            var i = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = t.support.transition && r;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
            } else e && e()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var i = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
            return t.fn.modal = i, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = t(this),
                r = i.attr("href"),
                o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                a = o.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(r) && r
                }, o.data(), i.data());
            i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(o, a, this)
        })
    }(jQuery), $(".no-js").removeClass("no-js").addClass("js"),
    function() {}.call(this),
    function() {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = i.push,
            s = i.slice,
            l = i.concat,
            c = r.toString,
            u = r.hasOwnProperty,
            d = i.forEach,
            h = i.map,
            p = i.reduce,
            f = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            x = Array.isArray,
            w = Object.keys,
            k = o.bind,
            T = function(t) {
                return t instanceof T ? t : this instanceof T ? void(this._wrapped = t) : new T(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.6.0";
        var _ = T.each = T.forEach = function(t, e, i) {
            if (null == t) return t;
            if (d && t.forEach === d) t.forEach(e, i);
            else if (t.length === +t.length) {
                for (var r = 0, o = t.length; o > r; r++)
                    if (e.call(i, t[r], r, t) === n) return
            } else
                for (var a = T.keys(t), r = 0, o = a.length; o > r; r++)
                    if (e.call(i, t[a[r]], a[r], t) === n) return;
            return t
        };
        T.map = T.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : h && t.map === h ? t.map(e, n) : (_(t, function(t, r, o) {
                i.push(e.call(n, t, r, o))
            }), i)
        };
        var C = "Reduce of empty array with no initial value";
        T.reduce = T.foldl = T.inject = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return i && (e = T.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
            if (_(t, function(t, o, a) {
                    r ? n = e.call(i, n, t, o, a) : (n = t, r = !0)
                }), !r) throw new TypeError(C);
            return n
        }, T.reduceRight = T.foldr = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return i && (e = T.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
            var o = t.length;
            if (o !== +o) {
                var a = T.keys(t);
                o = a.length
            }
            if (_(t, function(s, l, c) {
                    l = a ? a[--o] : --o, r ? n = e.call(i, n, t[l], l, c) : (n = t[l], r = !0)
                }), !r) throw new TypeError(C);
            return n
        }, T.find = T.detect = function(t, e, n) {
            var i;
            return S(t, function(t, r, o) {
                return e.call(n, t, r, o) ? (i = t, !0) : void 0
            }), i
        }, T.filter = T.select = function(t, e, n) {
            var i = [];
            return null == t ? i : m && t.filter === m ? t.filter(e, n) : (_(t, function(t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }), i)
        }, T.reject = function(t, e, n) {
            return T.filter(t, function(t, i, r) {
                return !e.call(n, t, i, r)
            }, n)
        }, T.every = T.all = function(t, e, i) {
            e || (e = T.identity);
            var r = !0;
            return null == t ? r : g && t.every === g ? t.every(e, i) : (_(t, function(t, o, a) {
                return (r = r && e.call(i, t, o, a)) ? void 0 : n
            }), !!r)
        };
        var S = T.some = T.any = function(t, e, i) {
            e || (e = T.identity);
            var r = !1;
            return null == t ? r : v && t.some === v ? t.some(e, i) : (_(t, function(t, o, a) {
                return r || (r = e.call(i, t, o, a)) ? n : void 0
            }), !!r)
        };
        T.contains = T.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : S(t, function(t) {
                return t === e
            })
        }, T.invoke = function(t, e) {
            var n = s.call(arguments, 2),
                i = T.isFunction(e);
            return T.map(t, function(t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, T.pluck = function(t, e) {
            return T.map(t, T.property(e))
        }, T.where = function(t, e) {
            return T.filter(t, T.matches(e))
        }, T.findWhere = function(t, e) {
            return T.find(t, T.matches(e))
        }, T.max = function(t, e, n) {
            if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            var i = -1 / 0,
                r = -1 / 0;
            return _(t, function(t, o, a) {
                var s = e ? e.call(n, t, o, a) : t;
                s > r && (i = t, r = s)
            }), i
        }, T.min = function(t, e, n) {
            if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            var i = 1 / 0,
                r = 1 / 0;
            return _(t, function(t, o, a) {
                var s = e ? e.call(n, t, o, a) : t;
                r > s && (i = t, r = s)
            }), i
        }, T.shuffle = function(t) {
            var e, n = 0,
                i = [];
            return _(t, function(t) {
                e = T.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        }, T.sample = function(t, e, n) {
            return null == e || n ? (t.length !== +t.length && (t = T.values(t)), t[T.random(t.length - 1)]) : T.shuffle(t).slice(0, Math.max(0, e))
        };
        var E = function(t) {
            return null == t ? T.identity : T.isFunction(t) ? t : T.property(t)
        };
        T.sortBy = function(t, e, n) {
            return e = E(e), T.pluck(T.map(t, function(t, i, r) {
                return {
                    value: t,
                    index: i,
                    criteria: e.call(n, t, i, r)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var j = function(t) {
            return function(e, n, i) {
                var r = {};
                return n = E(n), _(e, function(o, a) {
                    var s = n.call(i, o, a, e);
                    t(r, s, o)
                }), r
            }
        };
        T.groupBy = j(function(t, e, n) {
            T.has(t, e) ? t[e].push(n) : t[e] = [n]
        }), T.indexBy = j(function(t, e, n) {
            t[e] = n
        }), T.countBy = j(function(t, e) {
            T.has(t, e) ? t[e]++ : t[e] = 1
        }), T.sortedIndex = function(t, e, n, i) {
            n = E(n);
            for (var r = n.call(i, e), o = 0, a = t.length; a > o;) {
                var s = o + a >>> 1;
                n.call(i, t[s]) < r ? o = s + 1 : a = s
            }
            return o
        }, T.toArray = function(t) {
            return t ? T.isArray(t) ? s.call(t) : t.length === +t.length ? T.map(t, T.identity) : T.values(t) : []
        }, T.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : T.keys(t).length
        }, T.first = T.head = T.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : s.call(t, 0, e)
        }, T.initial = function(t, e, n) {
            return s.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, T.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
        }, T.rest = T.tail = T.drop = function(t, e, n) {
            return s.call(t, null == e || n ? 1 : e)
        }, T.compact = function(t) {
            return T.filter(t, T.identity)
        };
        var N = function(t, e, n) {
            return e && T.every(t, T.isArray) ? l.apply(n, t) : (_(t, function(t) {
                T.isArray(t) || T.isArguments(t) ? e ? a.apply(n, t) : N(t, e, n) : n.push(t)
            }), n)
        };
        T.flatten = function(t, e) {
            return N(t, e, [])
        }, T.without = function(t) {
            return T.difference(t, s.call(arguments, 1))
        }, T.partition = function(t, e) {
            var n = [],
                i = [];
            return _(t, function(t) {
                (e(t) ? n : i).push(t)
            }), [n, i]
        }, T.uniq = T.unique = function(t, e, n, i) {
            T.isFunction(e) && (i = n, n = e, e = !1);
            var r = n ? T.map(t, n, i) : t,
                o = [],
                a = [];
            return _(r, function(n, i) {
                (e ? i && a[a.length - 1] === n : T.contains(a, n)) || (a.push(n), o.push(t[i]))
            }), o
        }, T.union = function() {
            return T.uniq(T.flatten(arguments, !0))
        }, T.intersection = function(t) {
            var e = s.call(arguments, 1);
            return T.filter(T.uniq(t), function(t) {
                return T.every(e, function(e) {
                    return T.contains(e, t)
                })
            })
        }, T.difference = function(t) {
            var e = l.apply(i, s.call(arguments, 1));
            return T.filter(t, function(t) {
                return !T.contains(e, t)
            })
        }, T.zip = function() {
            for (var t = T.max(T.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = T.pluck(arguments, "" + n);
            return e
        }, T.object = function(t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, T.indexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = 0,
                r = t.length;
            if (n) {
                if ("number" != typeof n) return i = T.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; r > i; i++)
                if (t[i] === e) return i;
            return -1
        }, T.lastIndexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var r = i ? n : t.length; r--;)
                if (t[r] === e) return r;
            return -1
        }, T.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = t, t += n;
            return o
        };
        var A = function() {};
        T.bind = function(t, e) {
            var n, i;
            if (k && t.bind === k) return k.apply(t, s.call(arguments, 1));
            if (!T.isFunction(t)) throw new TypeError;
            return n = s.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return t.apply(e, n.concat(s.call(arguments)));
                A.prototype = t.prototype;
                var r = new A;
                A.prototype = null;
                var o = t.apply(r, n.concat(s.call(arguments)));
                return Object(o) === o ? o : r
            }
        }, T.partial = function(t) {
            var e = s.call(arguments, 1);
            return function() {
                for (var n = 0, i = e.slice(), r = 0, o = i.length; o > r; r++) i[r] === T && (i[r] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return t.apply(this, i)
            }
        }, T.bindAll = function(t) {
            var e = s.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return _(e, function(e) {
                t[e] = T.bind(t[e], t)
            }), t
        }, T.memoize = function(t, e) {
            var n = {};
            return e || (e = T.identity),
                function() {
                    var i = e.apply(this, arguments);
                    return T.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                }
        }, T.delay = function(t, e) {
            var n = s.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, T.defer = function(t) {
            return T.delay.apply(T, [t, 1].concat(s.call(arguments, 1)))
        }, T.throttle = function(t, e, n) {
            var i, r, o, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : T.now(), a = null, o = t.apply(i, r), i = r = null
            };
            return function() {
                var c = T.now();
                s || n.leading !== !1 || (s = c);
                var u = e - (c - s);
                return i = this, r = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = t.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, u)), o
            }
        }, T.debounce = function(t, e, n) {
            var i, r, o, a, s, l = function() {
                var c = T.now() - a;
                e > c ? i = setTimeout(l, e - c) : (i = null, n || (s = t.apply(o, r), o = r = null))
            };
            return function() {
                o = this, r = arguments, a = T.now();
                var c = n && !i;
                return i || (i = setTimeout(l, e)), c && (s = t.apply(o, r), o = r = null), s
            }
        }, T.once = function(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, T.wrap = function(t, e) {
            return T.partial(e, t)
        }, T.compose = function() {
            var t = arguments;
            return function() {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, T.after = function(t, e) {
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, T.keys = function(t) {
            if (!T.isObject(t)) return [];
            if (w) return w(t);
            var e = [];
            for (var n in t) T.has(t, n) && e.push(n);
            return e
        }, T.values = function(t) {
            for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
            return i
        }, T.pairs = function(t) {
            for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
            return i
        }, T.invert = function(t) {
            for (var e = {}, n = T.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
            return e
        }, T.functions = T.methods = function(t) {
            var e = [];
            for (var n in t) T.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, T.extend = function(t) {
            return _(s.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) t[n] = e[n]
            }), t
        }, T.pick = function(t) {
            var e = {},
                n = l.apply(i, s.call(arguments, 1));
            return _(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        }, T.omit = function(t) {
            var e = {},
                n = l.apply(i, s.call(arguments, 1));
            for (var r in t) T.contains(n, r) || (e[r] = t[r]);
            return e
        }, T.defaults = function(t) {
            return _(s.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, T.clone = function(t) {
            return T.isObject(t) ? T.isArray(t) ? t.slice() : T.extend({}, t) : t
        }, T.tap = function(t, e) {
            return e(t), t
        };
        var M = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
            var r = c.call(t);
            if (r != c.call(e)) return !1;
            switch (r) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var o = n.length; o--;)
                if (n[o] == t) return i[o] == e;
            var a = t.constructor,
                s = e.constructor;
            if (a !== s && !(T.isFunction(a) && a instanceof a && T.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return !1;
            n.push(t), i.push(e);
            var l = 0,
                u = !0;
            if ("[object Array]" == r) {
                if (l = t.length, u = l == e.length)
                    for (; l-- && (u = M(t[l], e[l], n, i)););
            } else {
                for (var d in t)
                    if (T.has(t, d) && (l++, !(u = T.has(e, d) && M(t[d], e[d], n, i)))) break;
                if (u) {
                    for (d in e)
                        if (T.has(e, d) && !l--) break;
                    u = !l
                }
            }
            return n.pop(), i.pop(), u
        };
        T.isEqual = function(t, e) {
            return M(t, e, [], [])
        }, T.isEmpty = function(t) {
            if (null == t) return !0;
            if (T.isArray(t) || T.isString(t)) return 0 === t.length;
            for (var e in t)
                if (T.has(t, e)) return !1;
            return !0
        }, T.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, T.isArray = x || function(t) {
            return "[object Array]" == c.call(t)
        }, T.isObject = function(t) {
            return t === Object(t)
        }, _(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            T["is" + t] = function(e) {
                return c.call(e) == "[object " + t + "]"
            }
        }), T.isArguments(arguments) || (T.isArguments = function(t) {
            return !(!t || !T.has(t, "callee"))
        }), "function" != typeof /./ && (T.isFunction = function(t) {
            return "function" == typeof t
        }), T.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, T.isNaN = function(t) {
            return T.isNumber(t) && t != +t
        }, T.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
        }, T.isNull = function(t) {
            return null === t
        }, T.isUndefined = function(t) {
            return void 0 === t
        }, T.has = function(t, e) {
            return u.call(t, e)
        }, T.noConflict = function() {
            return t._ = e, this
        }, T.identity = function(t) {
            return t
        }, T.constant = function(t) {
            return function() {
                return t
            }
        }, T.property = function(t) {
            return function(e) {
                return e[t]
            }
        }, T.matches = function(t) {
            return function(e) {
                if (e === t) return !0;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }
        }, T.times = function(t, e, n) {
            for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
            return i
        }, T.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, T.now = Date.now || function() {
            return (new Date).getTime()
        };
        var $ = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        $.unescape = T.invert($.escape);
        var D = {
            escape: new RegExp("[" + T.keys($.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + T.keys($.unescape).join("|") + ")", "g")
        };
        T.each(["escape", "unescape"], function(t) {
            T[t] = function(e) {
                return null == e ? "" : ("" + e).replace(D[t], function(e) {
                    return $[t][e]
                })
            }
        }), T.result = function(t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return T.isFunction(n) ? n.call(t) : n
        }, T.mixin = function(t) {
            _(T.functions(t), function(e) {
                var n = T[e] = t[e];
                T.prototype[e] = function() {
                    var t = [this._wrapped];
                    return a.apply(t, arguments), R.call(this, n.apply(T, t))
                }
            })
        };
        var I = 0;
        T.uniqueId = function(t) {
            var e = ++I + "";
            return t ? t + e : e
        }, T.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var O = /(.)^/,
            L = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        T.template = function(t, e, n) {
            var i;
            n = T.defaults({}, n, T.templateSettings);
            var r = new RegExp([(n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            t.replace(r, function(e, n, i, r, s) {
                return a += t.slice(o, s).replace(H, function(t) {
                    return "\\" + L[t]
                }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + e.length, e
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", a)
            } catch (s) {
                throw s.source = a, s
            }
            if (e) return i(e, T);
            var l = function(t) {
                return i.call(this, t, T)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
        }, T.chain = function(t) {
            return T(t).chain()
        };
        var R = function(t) {
            return this._chain ? T(t).chain() : t
        };
        T.mixin(T), _(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = i[t];
            T.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], R.call(this, n)
            }
        }), _(["concat", "join", "slice"], function(t) {
            var e = i[t];
            T.prototype[t] = function() {
                return R.call(this, e.apply(this._wrapped, arguments))
            }
        }), T.extend(T.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return T
        })
    }.call(this);
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars = function() {
    var t = function() {
            "use strict";

            function t(t) {
                this.string = t
            }
            var e;
            return t.prototype.toString = function() {
                return "" + this.string
            }, e = t
        }(),
        e = function(t) {
            "use strict";

            function e(t) {
                return s[t] || "&amp;"
            }

            function n(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }

            function i(t) {
                return t instanceof a ? t.toString() : t || 0 === t ? (t = "" + t, c.test(t) ? t.replace(l, e) : t) : ""
            }

            function r(t) {
                return t || 0 === t ? h(t) && 0 === t.length ? !0 : !1 : !0
            }
            var o = {},
                a = t,
                s = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                l = /[&<>"'`]/g,
                c = /[&<>"'`]/;
            o.extend = n;
            var u = Object.prototype.toString;
            o.toString = u;
            var d = function(t) {
                return "function" == typeof t
            };
            d(/x/) && (d = function(t) {
                return "function" == typeof t && "[object Function]" === u.call(t)
            });
            var d;
            o.isFunction = d;
            var h = Array.isArray || function(t) {
                return t && "object" == typeof t ? "[object Array]" === u.call(t) : !1
            };
            return o.isArray = h, o.escapeExpression = i, o.isEmpty = r, o
        }(t),
        n = function() {
            "use strict";

            function t(t, e) {
                var i;
                e && e.firstLine && (i = e.firstLine, t += " - " + i + ":" + e.firstColumn);
                for (var r = Error.prototype.constructor.call(this, t), o = 0; o < n.length; o++) this[n[o]] = r[n[o]];
                i && (this.lineNumber = i, this.column = e.firstColumn)
            }
            var e, n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return t.prototype = new Error, e = t
        }(),
        i = function(t, e) {
            "use strict";

            function n(t, e) {
                this.helpers = t || {}, this.partials = e || {}, i(this)
            }

            function i(t) {
                t.registerHelper("helperMissing", function(t) {
                    if (2 === arguments.length) return void 0;
                    throw new s("Missing helper: '" + t + "'")
                }), t.registerHelper("blockHelperMissing", function(e, n) {
                    var i = n.inverse || function() {},
                        r = n.fn;
                    return h(e) && (e = e.call(this)), e === !0 ? r(this) : e === !1 || null == e ? i(this) : d(e) ? e.length > 0 ? t.helpers.each(e, n) : i(this) : r(e)
                }), t.registerHelper("each", function(t, e) {
                    var n, i = e.fn,
                        r = e.inverse,
                        o = 0,
                        a = "";
                    if (h(t) && (t = t.call(this)), e.data && (n = g(e.data)), t && "object" == typeof t)
                        if (d(t))
                            for (var s = t.length; s > o; o++) n && (n.index = o, n.first = 0 === o, n.last = o === t.length - 1), a += i(t[o], {
                                data: n
                            });
                        else
                            for (var l in t) t.hasOwnProperty(l) && (n && (n.key = l, n.index = o, n.first = 0 === o), a += i(t[l], {
                                data: n
                            }), o++);
                    return 0 === o && (a = r(this)), a
                }), t.registerHelper("if", function(t, e) {
                    return h(t) && (t = t.call(this)), !e.hash.includeZero && !t || a.isEmpty(t) ? e.inverse(this) : e.fn(this)
                }), t.registerHelper("unless", function(e, n) {
                    return t.helpers["if"].call(this, e, {
                        fn: n.inverse,
                        inverse: n.fn,
                        hash: n.hash
                    })
                }), t.registerHelper("with", function(t, e) {
                    return h(t) && (t = t.call(this)), a.isEmpty(t) ? void 0 : e.fn(t)
                }), t.registerHelper("log", function(e, n) {
                    var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                    t.log(i, e)
                })
            }

            function r(t, e) {
                m.log(t, e)
            }
            var o = {},
                a = t,
                s = e,
                l = "1.3.0";
            o.VERSION = l;
            var c = 4;
            o.COMPILER_REVISION = c;
            var u = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: ">= 1.0.0"
            };
            o.REVISION_CHANGES = u;
            var d = a.isArray,
                h = a.isFunction,
                p = a.toString,
                f = "[object Object]";
            o.HandlebarsEnvironment = n, n.prototype = {
                constructor: n,
                logger: m,
                log: r,
                registerHelper: function(t, e, n) {
                    if (p.call(t) === f) {
                        if (n || e) throw new s("Arg not supported with multiple helpers");
                        a.extend(this.helpers, t)
                    } else n && (e.not = n), this.helpers[t] = e
                },
                registerPartial: function(t, e) {
                    p.call(t) === f ? a.extend(this.partials, t) : this.partials[t] = e
                }
            };
            var m = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(t, e) {
                    if (m.level <= t) {
                        var n = m.methodMap[t];
                        "undefined" != typeof console && console[n] && console[n].call(console, e)
                    }
                }
            };
            o.logger = m, o.log = r;
            var g = function(t) {
                var e = {};
                return a.extend(e, t), e
            };
            return o.createFrame = g, o
        }(e, n),
        r = function(t, e, n) {
            "use strict";

            function i(t) {
                var e = t && t[0] || 1,
                    n = h;
                if (e !== n) {
                    if (n > e) {
                        var i = p[n],
                            r = p[e];
                        throw new d("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                    }
                    throw new d("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                }
            }

            function r(t, e) {
                if (!e) throw new d("No environment passed to template");
                var n = function(t, n, i, r, o, a) {
                        var s = e.VM.invokePartial.apply(this, arguments);
                        if (null != s) return s;
                        if (e.compile) {
                            var l = {
                                helpers: r,
                                partials: o,
                                data: a
                            };
                            return o[n] = e.compile(t, {
                                data: void 0 !== a
                            }, e), o[n](i, l)
                        }
                        throw new d("The partial " + n + " could not be compiled when running in runtime-only mode")
                    },
                    i = {
                        escapeExpression: u.escapeExpression,
                        invokePartial: n,
                        programs: [],
                        program: function(t, e, n) {
                            var i = this.programs[t];
                            return n ? i = a(t, e, n) : i || (i = this.programs[t] = a(t, e)), i
                        },
                        merge: function(t, e) {
                            var n = t || e;
                            return t && e && t !== e && (n = {}, u.extend(n, e), u.extend(n, t)), n
                        },
                        programWithDepth: e.VM.programWithDepth,
                        noop: e.VM.noop,
                        compilerInfo: null
                    };
                return function(n, r) {
                    r = r || {};
                    var o, a, s = r.partial ? r : e;
                    r.partial || (o = r.helpers, a = r.partials);
                    var l = t.call(i, s, n, o, a, r.data);
                    return r.partial || e.VM.checkRevision(i.compilerInfo), l
                }
            }

            function o(t, e, n) {
                var i = Array.prototype.slice.call(arguments, 3),
                    r = function(t, r) {
                        return r = r || {}, e.apply(this, [t, r.data || n].concat(i))
                    };
                return r.program = t, r.depth = i.length, r
            }

            function a(t, e, n) {
                var i = function(t, i) {
                    return i = i || {}, e(t, i.data || n)
                };
                return i.program = t, i.depth = 0, i
            }

            function s(t, e, n, i, r, o) {
                var a = {
                    partial: !0,
                    helpers: i,
                    partials: r,
                    data: o
                };
                if (void 0 === t) throw new d("The partial " + e + " could not be found");
                return t instanceof Function ? t(n, a) : void 0
            }

            function l() {
                return ""
            }
            var c = {},
                u = t,
                d = e,
                h = n.COMPILER_REVISION,
                p = n.REVISION_CHANGES;
            return c.checkRevision = i, c.template = r, c.programWithDepth = o, c.program = a, c.invokePartial = s, c.noop = l, c
        }(e, n, i),
        o = function(t, e, n, i, r) {
            "use strict";
            var o, a = t,
                s = e,
                l = n,
                c = i,
                u = r,
                d = function() {
                    var t = new a.HandlebarsEnvironment;
                    return c.extend(t, a), t.SafeString = s, t.Exception = l, t.Utils = c, t.VM = u, t.template = function(e) {
                        return u.template(e, t)
                    }, t
                },
                h = d();
            return h.create = d, o = h
        }(i, t, n, e, r);
    return o
}();
(function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["catalog/catalog_record_availability_display"] = Handlebars.template(function(t, e, n, i, r) {
        function o() {
            return 'class="results"'
        }

        function a(t, e) {
            var i, r = "";
            return r += "\n    ", i = n["if"].call(t, t && t.summary, {
                hash: {},
                inverse: j.noop,
                fn: j.program(4, s, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n    ", i = n["if"].call(t, t && t.items, {
                hash: {},
                inverse: j.program(11, h, e),
                fn: j.program(8, u, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n  "
        }

        function s(t, e) {
            var i, r = "";
            return r += "\n      <h4>Summary</h4>\n      ", i = n.each.call(t, t && t.summary, {
                hash: {},
                inverse: j.noop,
                fn: j.program(5, l, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n    "
        }

        function l(t, e) {
            var i, r = "";
            return r += '\n      <div class="summary-holdings">\n        ', i = n.each.call(t, t, {
                hash: {},
                inverse: j.noop,
                fn: j.program(6, c, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n        <p>&nbsp;</p>\n      </div>\n      "
        }

        function c(t) {
            var e, n = "";
            return n += "\n          <span>" + E((e = t && t.label, typeof e === S ? e.apply(t) : e)) + ":&nbsp;</span>\n          <span>" + E((e = t && t.value, typeof e === S ? e.apply(t) : e)) + "</span>\n          </br>\n        "
        }

        function u(t, e) {
            var i, r = "";
            return r += "\n      <h4>\n        Availability\n        ", i = n["if"].call(t, t && t.request_link, {
                hash: {},
                inverse: j.noop,
                fn: j.program(9, d, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n      </h4>\n    "
        }

        function d(t, e) {
            var i, r, o = "";
            return o += '<a class="btn request-this-link" href="', (r = n.request_link) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.request_link, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" target="_blank">Request this</a>'
        }

        function h(t, e) {
            var i, r = "";
            return r += "\n      ", i = n["if"].call(t, t && t.online_resource, {
                hash: {},
                inverse: j.program(14, f, e),
                fn: j.program(12, p, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n    "
        }

        function p() {
            var t = "";
            return t += "\n        \n      "
        }

        function f() {
            return '\n        <h4>\n          Availability\n        </h4>\n        <div>\n          We don\'t currently have availability information for this item.\n          <a href="http://library.brown.edu/libweb/askalib.php" target="_blank">\n            Contact the library staff<a/>\n          for assistance with this item.\n        </div>\n      '
        }

        function m(t, e) {
            var i, r = "";
            return r += '\n  <table class="table">\n    <tr>\n      <th>Location</th>\n      <th>Call number</th>\n      <th>Status</th>\n    </tr>\n    <tbody>\n      ', i = n.each.call(t, t && t.items, {
                hash: {},
                inverse: j.noop,
                fn: j.program(17, g, e),
                data: e
            }), (i || 0 === i) && (r += i), r += "\n    </tbody>\n  </table>\n  "
        }

        function g(t, e) {
            var i, r, o = "";
            return o += '\n        <tr>\n          <td id="', (r = n.item_id) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.item_id, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '">\n            <span class="location">', (r = n.location) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.location, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + "</span>\n            ", i = n["if"].call(t, t && t.shelf, {
                hash: {},
                inverse: j.noop,
                fn: j.program(18, v, e),
                data: e
            }), (i || 0 === i) && (o += i), o += "\n            ", i = n["if"].call(t, t && t.bookplate_url, {
                hash: {},
                inverse: j.noop,
                fn: j.program(20, y, e),
                data: e
            }), (i || 0 === i) && (o += i), o += "\n          </td>\n          <td>", (r = n.callnumber) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.callnumber, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + "</td>\n          <td>", (r = n.status) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.status, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + " ", i = n["if"].call(t, t && t.scan, {
                hash: {},
                inverse: j.noop,
                fn: j.program(22, b, e),
                data: e
            }), (i || 0 === i) && (o += i), o += " ", i = n["if"].call(t, t && t.jcb_url, {
                hash: {},
                inverse: j.noop,
                fn: j.program(24, x, e),
                data: e
            }), (i || 0 === i) && (o += i), o += " ", i = n["if"].call(t, t && t.hay_aeon_url, {
                hash: {},
                inverse: j.noop,
                fn: j.program(26, w, e),
                data: e
            }), (i || 0 === i) && (o += i), o += "</td>\n        </tr>\n      "
        }

        function v(t, e) {
            var i, r, o = "";
            return o += ' -- <a href="', (r = n.map) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.map, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" class="stack-map-link">Level ' + E((i = t && t.shelf, i = null == i || i === !1 ? i : i.floor, typeof i === S ? i.apply(t) : i)) + ", Aisle " + E((i = t && t.shelf, i = null == i || i === !1 ? i : i.aisle, typeof i === S ? i.apply(t) : i)) + "</a>"
        }

        function y(t, e) {
            var i, r, o = "";
            return o += '\n              <div>\n                <a href="', (r = n.bookplate_url) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.bookplate_url, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" target="_blank">', (r = n.bookplate_display) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.bookplate_display, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + "</a>\n              </div>\n            "
        }

        function b(t, e) {
            var i, r, o = "";
            return o += ' <a href="', (r = n.scan) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.scan, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" class="scan">scan</a> | <a href="', (r = n.item_request_url) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.item_request_url, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '">item</a>'
        }

        function x(t, e) {
            var i, r, o = "";
            return o += ' <a href="', (r = n.jcb_url) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.jcb_url, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" class="scan">request-access</a> '
        }

        function w(t, e) {
            var i, r, o = "";
            return o += ' <a href="', (r = n.hay_aeon_url) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.hay_aeon_url, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" class="scan">request-access</a> '
        }

        function k(t, e) {
            var i, r, o = "";
            return o += '\n    <div class="more-results pull-right">\n        <a href="', (r = n.more_link) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.more_link, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" class="label label-info">more</a>\n    </div>\n  '
        }

        function T(t, e) {
            var i, r, o = "";
            return o += '\n\n    <div class="pull-right">\n        <a href="', (r = n.openurl) ? i = r.call(t, {
                hash: {},
                data: e
            }) : (r = t && t.openurl, i = typeof r === S ? r.call(t, {
                hash: {},
                data: e
            }) : r), o += E(i) + '" class="btn btn-primary btn-sm" role="button">Request Item</a>\n        <button class="glyphicon glyphicon-question-sign btn btn-default btn-sm" data-toggle="modal" data-target="#myModal"></button>\n    </div>\n\n  '
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), r = r || {};
        var _, C = "",
            S = "function",
            E = this.escapeExpression,
            j = this;
        return C += '\n\n<div class="holdings-wrapper" ', _ = n["if"].call(e, e && e.results, {
            hash: {},
            inverse: j.noop,
            fn: j.program(1, o, r),
            data: r
        }), (_ || 0 === _) && (C += _), C += ">\n  ", _ = n.unless.call(e, e && e.results, {
            hash: {},
            inverse: j.noop,
            fn: j.program(3, a, r),
            data: r
        }), (_ || 0 === _) && (C += _), C += "\n  ", _ = n["if"].call(e, e && e.items, {
            hash: {},
            inverse: j.noop,
            fn: j.program(16, m, r),
            data: r
        }), (_ || 0 === _) && (C += _), C += "\n\n  ", _ = n["if"].call(e, e && e.has_more, {
            hash: {},
            inverse: j.noop,
            fn: j.program(28, k, r),
            data: r
        }), (_ || 0 === _) && (C += _), C += "\n\n  ", _ = n["if"].call(e, e && e.show_ezb_button, {
            hash: {},
            inverse: j.noop,
            fn: j.program(30, T, r),
            data: r
        }), (_ || 0 === _) && (C += _), C += '\n\n</div>\n\n\n\n\n<!-- Modal dialog box; only shows if question-button is clicked -->\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n        <h4 class="modal-title" id="myModalLabel">When does the \'Request\' button appear?</h4>\n      </div>\n      <div class="modal-body">\n        \'Request\' means we\'ll get you a copy from a partner Library.\n        There\'s a lot of logic we\'ll spare you, but in a nutshell, our goal is to get you a copy of a book you can take home.\n        So of course if a Library copy isn\'t available, you\'ll see the Request button,\n        but you may also see it if, for instance, the Library\'s only copy must be used within the Library.\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->\n      </div>\n    </div>\n  </div>\n</div>'
    }), this.HandlebarsTemplates["catalog/catalog_record_availability_display"]
}).call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["easy/bdr_results"] = Handlebars.template(function(t, e, n, i, r) {
            function o(t, e, i) {
                var r, o, d, h = "";
                return h += '\n    <li>\n        <a href="' + f((r = t && t.link, typeof r === p ? r.apply(t) : r)) + '">', r = n["if"].call(t, t && t.nonsort, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(2, a, e),
                    data: e
                }), (r || 0 === r) && (h += r), h += f((o = n.truncate || t && t.truncate, d = {
                    hash: {},
                    data: e
                }, o ? o.call(t, t && t.title, i && i.max_title_length, d) : g.call(t, "truncate", t && t.title, i && i.max_title_length, d))) + "</a>\n        <br/>\n        <small>", r = n["if"].call(t, t && t.author, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(4, s, e),
                    data: e
                }), (r || 0 === r) && (h += r), r = n["if"].call(t, t && t.year, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(6, l, e),
                    data: e
                }), (r || 0 === r) && (h += r), h += "\n        ", r = n["if"].call(t, t && t.genre, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(8, c, e),
                    data: e
                }), (r || 0 === r) && (h += r), h += "\n        ", r = n["if"].call(t, t && t.online, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(10, u, e),
                    data: e
                }), (r || 0 === r) && (h += r), h += "</small>\n    </li>\n    "
            }

            function a(t) {
                var e, n = "";
                return n += f((e = t && t.nonsort, typeof e === p ? e.apply(t) : e)) + " "
            }

            function s(t) {
                var e, n = "";
                return n += f((e = t && t.author, typeof e === p ? e.apply(t) : e)) + ". "
            }

            function l(t) {
                var e, n = "";
                return n += f((e = t && t.year, typeof e === p ? e.apply(t) : e)) + "."
            }

            function c(t) {
                var e, n = "";
                return n += "<br/>" + f((e = t && t.genre, typeof e === p ? e.apply(t) : e))
            }

            function u(t) {
                var e, n = "";
                return n += '\n            <br/>\n            <a href="' + f((e = t && t.link, typeof e === p ? e.apply(t) : e)) + '" class="label label-info">Online</a>\n        '
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), r = r || {};
            var d, h = "",
                p = "function",
                f = this.escapeExpression,
                m = this,
                g = n.helperMissing;
            return h += '<ul class="list-unstyled">\n    ', d = n.each.call(e, e && e.docs, {
                hash: {},
                inverse: m.noop,
                fn: m.programWithDepth(1, o, r, e),
                data: r
            }), (d || 0 === d) && (h += d), h += '\n</ul>\n<div class="more center-block">\n    <a href="' + f((d = e && e.more, typeof d === p ? d.apply(e) : d)) + '">View ' + f((d = e && e.total, typeof d === p ? d.apply(e) : d)) + " results</a>\n</div>"
        }), this.HandlebarsTemplates["easy/bdr_results"]
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["easy/catalog_results"] = Handlebars.template(function(t, e, n, i, r) {
            function o(t, e) {
                var i, r = "";
                return r += '\n    <h3 class="bento-header">\n        <a href="' + g((i = t && t.more, typeof i === m ? i.apply(t) : i)) + '">', i = n["if"].call(t, t && t.icon, {
                    hash: {},
                    inverse: v.noop,
                    fn: v.program(2, a, e),
                    data: e
                }), (i || 0 === i) && (r += i), r += g((i = t && t.box, typeof i === m ? i.apply(t) : i)) + "</a>\n        ", i = n["if"].call(t, t && t.info, {
                    hash: {},
                    inverse: v.noop,
                    fn: v.program(4, s, e),
                    data: e
                }), (i || 0 === i) && (r += i), r += "\n    </h3>\n"
            }

            function a(t) {
                var e, n = "";
                return n += '<i class="fa fa-' + g((e = t && t.icon, typeof e === m ? e.apply(t) : e)) + '"></i>'
            }

            function s(t) {
                var e, n = "";
                return n += '<button type="button" class="btn btn-sm info-box" data-content="' + g((e = t && t.info, typeof e === m ? e.apply(t) : e)) + '">\n        <i class="fa fa-info"></i>\n        <span class="sr-only">Information</span>\n        </button>'
            }

            function l(t, e, i) {
                var r, o, a, s = "";
                return s += '\n    <li>\n        <a href="' + g((r = t && t.link, typeof r === m ? r.apply(t) : r)) + '">' + g((o = n.truncate || t && t.truncate, a = {
                    hash: {},
                    data: e
                }, o ? o.call(t, t && t.title_display, i && i.max_title_length, a) : y.call(t, "truncate", t && t.title_display, i && i.max_title_length, a))) + "</a>\n        <br/>\n        <small>\n            ", r = n["if"].call(t, t && t.author_text, {
                    hash: {},
                    inverse: v.noop,
                    fn: v.program(7, c, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += "\n            ", r = n["if"].call(t, t && t.pub_date, {
                    hash: {},
                    inverse: v.noop,
                    fn: v.program(9, u, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += "\n            ", r = n["if"].call(t, t && t.online, {
                    hash: {},
                    inverse: v.noop,
                    fn: v.program(11, d, e),
                    data: e
                }), (r || 0 === r) && (s += r), s += "\n        </small>\n    </li>\n    "
            }

            function c(t) {
                var e, n = "";
                return n += g((e = t && t.author_text, typeof e === m ? e.apply(t) : e)) + ".&nbsp;"
            }

            function u(t) {
                var e;
                return g((e = t && t.pub_date, typeof e === m ? e.apply(t) : e))
            }

            function d(t) {
                var e, n = "";
                return n += '\n                <a href="' + g((e = t && t.link, typeof e === m ? e.apply(t) : e)) + '" class="label label-info">Online</a>\n            '
            }

            function h(t) {
                var e, n = "";
                return n += '\n      <br/>\n      or use the <a href="' + g((e = t && t.advanced, typeof e === m ? e.apply(t) : e)) + '">advanced book search</a>\n    '
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), r = r || {};
            var p, f = "",
                m = "function",
                g = this.escapeExpression,
                v = this,
                y = n.helperMissing;
            return p = n["if"].call(e, e && e.other, {
                hash: {},
                inverse: v.noop,
                fn: v.program(1, o, r),
                data: r
            }), (p || 0 === p) && (f += p), f += '\n<ul class="list-unstyled">\n    ', p = n.each.call(e, e && e.docs, {
                hash: {},
                inverse: v.noop,
                fn: v.programWithDepth(6, l, r, e),
                data: r
            }), (p || 0 === p) && (f += p), f += '\n</ul>\n<div class="more center-block">\n    <a href="' + g((p = e && e.more, typeof p === m ? p.apply(e) : p)) + '">View ' + g((p = e && e.total, typeof p === m ? p.apply(e) : p)) + " results &raquo;</a>\n    ", p = n["if"].call(e, e && e.advanced, {
                hash: {},
                inverse: v.noop,
                fn: v.program(13, h, r),
                data: r
            }), (p || 0 === p) && (f += p), f += "\n</div>"
        }), this.HandlebarsTemplates["easy/catalog_results"]
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["easy/summon_results"] = Handlebars.template(function(t, e, n, i, r) {
            function o(t, e, i) {
                var r, o, p, f = "";
                return f += '\n    <li>\n        <a href="' + y((r = t && t.link, typeof r === v ? r.apply(t) : r)) + '" target="_blank">' + y((o = n.truncate || t && t.truncate, p = {
                    hash: {},
                    data: e
                }, o ? o.call(t, t && t.title, i && i.max_title_length, p) : b.call(t, "truncate", t && t.title, i && i.max_title_length, p))) + "</a>\n        <br/>\n        <small>\n          ", r = n["if"].call(t, t && t.author, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(2, a, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n          ", r = n["if"].call(t, t && t.year, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(4, s, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n          <br/>\n          ", r = n["if"].call(t, t && t.venue, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(6, l, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n          ", r = n["if"].call(t, t && t.volume, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(8, c, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n          ", r = n["if"].call(t, t && t.issue, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(10, u, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n          ", r = n["if"].call(t, t && t.start, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(12, d, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n          ", r = n["if"].call(t, t && t.database, {
                    hash: {},
                    inverse: x.noop,
                    fn: x.program(14, h, e),
                    data: e
                }), (r || 0 === r) && (f += r), f += "\n      </small>\n    </li>\n    "
            }

            function a(t) {
                var e, n = "";
                return n += y((e = t && t.author, typeof e === v ? e.apply(t) : e)) + ".&nbsp;"
            }

            function s(t) {
                var e;
                return y((e = t && t.year, typeof e === v ? e.apply(t) : e))
            }

            function l(t) {
                var e, n = "";
                return n += "<em>" + y((e = t && t.venue, typeof e === v ? e.apply(t) : e)) + "</em>.&nbsp;"
            }

            function c(t) {
                var e, n = "";
                return n += "Vol: " + y((e = t && t.volume, typeof e === v ? e.apply(t) : e)) + ".&nbsp;"
            }

            function u(t) {
                var e, n = "";
                return n += "Issue: " + y((e = t && t.issue, typeof e === v ? e.apply(t) : e)) + "&nbsp;"
            }

            function d(t) {
                var e, n = "";
                return n += "pg. " + y((e = t && t.start, typeof e === v ? e.apply(t) : e)) + "."
            }

            function h(t) {
                var e, n = "";
                return n += "(" + y((e = t && t.database, typeof e === v ? e.apply(t) : e)) + ")"
            }

            function p(t) {
                var e, n = "";
                return n += '\n      <br/>\n      or use the <a href="' + y((e = t && t.advanced, typeof e === v ? e.apply(t) : e)) + '" target="_blank">advanced journal search</a>\n    '
            }

            function f(t) {
                var e, n = "";
                return n += '\n      <br/>\n      <a href="' + y((e = t && t.raw, typeof e === v ? e.apply(t) : e)) + '" target="_blank" target="_blank">Raw JSON</a>\n    '
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), r = r || {};
            var m, g = "",
                v = "function",
                y = this.escapeExpression,
                b = n.helperMissing,
                x = this;
            return g += '<ul class="list-unstyled">\n    ', m = n.each.call(e, e && e.docs, {
                hash: {},
                inverse: x.noop,
                fn: x.programWithDepth(1, o, r, e),
                data: r
            }), (m || 0 === m) && (g += m), g += '\n</ul>\n<div class="more center-block">\n    <a href="' + y((m = e && e.more, typeof m === v ? m.apply(e) : m)) + '" target="_blank">View ' + y((m = e && e.total, typeof m === v ? m.apply(e) : m)) + " journal articles &raquo;</a>\n    ", m = n["if"].call(e, e && e.advanced, {
                hash: {},
                inverse: x.noop,
                fn: x.program(16, p, r),
                data: r
            }), (m || 0 === m) && (g += m), g += "\n    ", m = n["if"].call(e, e && e.raw, {
                hash: {},
                inverse: x.noop,
                fn: x.program(18, f, r),
                data: r
            }), (m || 0 === m) && (g += m), g += "\n</div>"
        }), this.HandlebarsTemplates["easy/summon_results"]
    }.call(this), Handlebars.registerHelper("truncate", function(t, e) {
        if (void 0 != t && t.length > e && t.length > 0) {
            var n = t + " ";
            return n = t.substr(0, e), n = t.substr(0, n.lastIndexOf(" ")), n = n.length > 0 ? n : t.substr(0, e), new Handlebars.SafeString(n + "...")
        }
        return t
    }),
    function(t) {
        t.fn.plugGoogleBookContent = function() {
            function e() {
                for (var t = a.find(c), e = t.length; e > 0;) u.push(t.splice(0, s)), e = t.length;
                n()
            }

            function n() {
                t.each(u, function(e, n) {
                    var r = o(n),
                        a = l + r;
                    t.ajax({
                        type: "GET",
                        url: a,
                        async: !1,
                        contentType: "application/json",
                        dataType: "jsonp",
                        success: function(t) {
                            i(t)
                        },
                        error: function(t) {
                            console.log(t)
                        }
                    })
                })
            }

            function i(e) {
                t.each(e, function(t, e) {
                    "undefined" != typeof e.thumbnail_url && r(t, e)
                })
            }

            function r(t, e) {
                var n = e.thumbnail_url,
                    i = "img." + t;
                n = n.replace(/zoom=5/, "zoom=1"), n = n.replace(/&?edge=curl/, "");
                var r = a.find(i);
                r.attr("src", n).removeClass("hide").addClass("show"), r.parent().removeClass("hide");
                var o = r.parent().find("span.preview-info a");
                o.attr("href", e.preview_url).removeClass("hide").addClass("show")
            }

            function o(e) {
                var n = "";
                return t.each(e, function() {
                    var e = t(this),
                        i = e.data("isbn") || "",
                        r = e.data("oclc") || "",
                        o = e.data("lccn") || "";
                    n += [i, r, o].join(",") + ","
                }), n = n.replace(/,,/, ""), n = n.replace(/,$/, "")
            }
            var a, s = 25,
                l = "//books.google.com/books?jscmd=viewapi&bibkeys=",
                c = "img.cover-image",
                u = [];
            return this.each(function() {
                a = t(this), e()
            })
        }
    }(jQuery), Blacklight.onLoad(function() {
        $("#documents").plugGoogleBookContent(), $("div#content .document").plugGoogleBookContent()
    }),
    /* ========================================================================
     * Bootstrap: tooltip.js v3.3.5
     * http://getbootstrap.com/javascript/#tooltip
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.tooltip"),
                    o = "object" == typeof e && e;
                (r || !/destroy|hide/.test(e)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
            })
        }
        var n = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
                var a = r[o];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != a) {
                    var s = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, n.prototype.getDelegateOptions = function() {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function(t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, n.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, n.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
        }, n.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i) return;
                var r = this,
                    o = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(s);
                c && (s = s.replace(l, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(),
                    d = o[0].offsetWidth,
                    h = o[0].offsetHeight;
                if (c) {
                    var p = s,
                        f = this.getPosition(this.$viewport);
                    s = "bottom" == s && u.bottom + h > f.bottom ? "top" : "top" == s && u.top - h < f.top ? "bottom" : "right" == s && u.right + d > f.width ? "left" : "left" == s && u.left - d < f.left ? "right" : s, o.removeClass(p).addClass(s)
                }
                var m = this.getCalculatedOffset(s, u, d, h);
                this.applyPlacement(m, s);
                var g = function() {
                    var t = r.hoverState;
                    r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
            }
        }, n.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                r = i[0].offsetWidth,
                o = i[0].offsetHeight,
                a = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                c = i[0].offsetHeight;
            "top" == n && c != o && (e.top = e.top + o - c);
            var u = this.getViewportAdjustedDelta(n, e, l, c);
            u.left ? e.left += u.left : e.top += u.top;
            var d = /top|bottom/.test(n),
                h = d ? 2 * u.left - r + l : 2 * u.top - o + c,
                p = d ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(h, i[0][p], d)
        }, n.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(e) {
            function i() {
                "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
            }
            var r = this,
                o = t(this.$tip),
                a = t.Event("hide.bs." + this.type);
            return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
        }, n.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(e) {
            e = e || this.$element;
            var n = e[0],
                i = "BODY" == n.tagName,
                r = n.getBoundingClientRect();
            null == r.width && (r = t.extend({}, r, {
                width: r.right - r.left,
                height: r.bottom - r.top
            }));
            var o = i ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                a = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                s = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, r, a, s, o)
        }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var r = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return r;
            var o = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var s = e.top - o - a.scroll,
                    l = e.top + o - a.scroll + i;
                s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
            } else {
                var c = e.left - o,
                    u = e.left + o + n;
                c < a.left ? r.left = a.left - c : u > a.right && (r.left = a.left + a.width - u)
            }
            return r
        }, n.prototype.getTitle = function() {
            var t, e = this.$element,
                n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
        }, n.prototype.getUID = function(t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, n.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled = !0
        }, n.prototype.disable = function() {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function(e) {
            var n = this;
            e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
            })
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = i, this
        }
    }(jQuery),
    /* ========================================================================
     * Bootstrap: popover.js v3.3.5
     * http://getbootstrap.com/javascript/#popovers
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.popover"),
                    o = "object" == typeof e && e;
                (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
            })
        }
        var n = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
            return t.fn.popover = i, this
        }
    }(jQuery), Blacklight.onLoad(function() {
        $("button.info-box").popover({
            trigger: "hover",
            placement: "auto",
            container: "body"
        }), $('[data-toggle="popover"]').popover()
    }), GoogleAnalytics = function() {
        function t() {}
        return t.load = function() {
            var e, n;
            window._gaq = [], t.analyticsId = t.getAnalyticsId(), window._gaq.push(["_setAccount", t.analyticsId]), n = document.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", e = document.getElementsByTagName("script")[0], e.parentNode.insertBefore(n, e)
        }, t.trackPageview = function(e) {
            return t.isLocalRequest() ? void 0 : (window._gaq.push(e ? ["_trackPageview", e] : ["_trackPageview"]), window._gaq.push(["_trackPageLoadTime"]))
        }, t.isLocalRequest = function() {
            return t.documentDomainIncludes("local")
        }, t.documentDomainIncludes = function(t) {
            return -1 !== document.domain.indexOf(t)
        }, t.getAnalyticsId = function() {
            return $("[data-analytics-id]").data("analytics-id")
        }, t
    }(), Blacklight.onLoad(function() {
        GoogleAnalytics.load(), GoogleAnalytics.analyticsId && GoogleAnalytics.trackPageview()
    }),
    /* Javascript plotting library for jQuery, version 0.8.2.

    Copyright (c) 2007-2013 IOLA and Ole Laursen.
    Licensed under the MIT license.

    */
    function(t) {
        t.color = {}, t.color.make = function(e, n, i, r) {
            var o = {};
            return o.r = e || 0, o.g = n || 0, o.b = i || 0, o.a = null != r ? r : 1, o.add = function(t, e) {
                for (var n = 0; n < t.length; ++n) o[t.charAt(n)] += e;
                return o.normalize()
            }, o.scale = function(t, e) {
                for (var n = 0; n < t.length; ++n) o[t.charAt(n)] *= e;
                return o.normalize()
            }, o.toString = function() {
                return o.a >= 1 ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
            }, o.normalize = function() {
                function t(t, e, n) {
                    return t > e ? t : e > n ? n : e
                }
                return o.r = t(0, parseInt(o.r), 255), o.g = t(0, parseInt(o.g), 255), o.b = t(0, parseInt(o.b), 255), o.a = t(0, o.a, 1), o
            }, o.clone = function() {
                return t.color.make(o.r, o.b, o.g, o.a)
            }, o.normalize()
        }, t.color.extract = function(e, n) {
            var i;
            do {
                if (i = e.css(n).toLowerCase(), "" != i && "transparent" != i) break;
                e = e.parent()
            } while (e.length && !t.nodeName(e.get(0), "body"));
            return "rgba(0, 0, 0, 0)" == i && (i = "transparent"), t.color.parse(i)
        }, t.color.parse = function(n) {
            var i, r = t.color.make;
            if (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return r(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10));
            if (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return r(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), parseFloat(i[4]));
            if (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) return r(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]));
            if (i = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return r(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]), parseFloat(i[4]));
            if (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return r(parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16));
            if (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return r(parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16));
            var o = t.trim(n).toLowerCase();
            return "transparent" == o ? r(255, 255, 255, 0) : (i = e[o] || [0, 0, 0], r(i[0], i[1], i[2]))
        };
        var e = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0]
        }
    }(jQuery),
    function(t) {
        function e(e, n) {
            var i = n.children("." + e)[0];
            if (null == i && (i = document.createElement("canvas"), i.className = e, t(i).css({
                    direction: "ltr",
                    position: "absolute",
                    left: 0,
                    top: 0
                }).appendTo(n), !i.getContext)) {
                if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                i = window.G_vmlCanvasManager.initElement(i)
            }
            this.element = i;
            var r = this.context = i.getContext("2d"),
                o = window.devicePixelRatio || 1,
                a = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
            this.pixelRatio = o / a, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
        }

        function n(n, r, o, a) {
            function s(t, e) {
                e = [ge].concat(e);
                for (var n = 0; n < t.length; ++n) t[n].apply(this, e)
            }

            function l() {
                for (var n = {
                        Canvas: e
                    }, i = 0; i < a.length; ++i) {
                    var r = a[i];
                    r.init(ge, n), r.options && t.extend(!0, re, r.options)
                }
            }

            function c(e) {
                t.extend(!0, re, e), e && e.colors && (re.colors = e.colors), null == re.xaxis.color && (re.xaxis.color = t.color.parse(re.grid.color).scale("a", .22).toString()), null == re.yaxis.color && (re.yaxis.color = t.color.parse(re.grid.color).scale("a", .22).toString()), null == re.xaxis.tickColor && (re.xaxis.tickColor = re.grid.tickColor || re.xaxis.color), null == re.yaxis.tickColor && (re.yaxis.tickColor = re.grid.tickColor || re.yaxis.color), null == re.grid.borderColor && (re.grid.borderColor = re.grid.color), null == re.grid.tickColor && (re.grid.tickColor = t.color.parse(re.grid.color).scale("a", .22).toString());
                var i, r, o, a = n.css("font-size"),
                    l = a ? +a.replace("px", "") : 13,
                    c = {
                        style: n.css("font-style"),
                        size: Math.round(.8 * l),
                        variant: n.css("font-variant"),
                        weight: n.css("font-weight"),
                        family: n.css("font-family")
                    };
                for (o = re.xaxes.length || 1, i = 0; o > i; ++i) r = re.xaxes[i], r && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, re.xaxis, r), re.xaxes[i] = r, r.font && (r.font = t.extend({}, c, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                for (o = re.yaxes.length || 1, i = 0; o > i; ++i) r = re.yaxes[i], r && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, re.yaxis, r), re.yaxes[i] = r, r.font && (r.font = t.extend({}, c, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                for (re.xaxis.noTicks && null == re.xaxis.ticks && (re.xaxis.ticks = re.xaxis.noTicks), re.yaxis.noTicks && null == re.yaxis.ticks && (re.yaxis.ticks = re.yaxis.noTicks), re.x2axis && (re.xaxes[1] = t.extend(!0, {}, re.xaxis, re.x2axis), re.xaxes[1].position = "top"), re.y2axis && (re.yaxes[1] = t.extend(!0, {}, re.yaxis, re.y2axis), re.yaxes[1].position = "right"), re.grid.coloredAreas && (re.grid.markings = re.grid.coloredAreas), re.grid.coloredAreasColor && (re.grid.markingsColor = re.grid.coloredAreasColor), re.lines && t.extend(!0, re.series.lines, re.lines), re.points && t.extend(!0, re.series.points, re.points), re.bars && t.extend(!0, re.series.bars, re.bars), null != re.shadowSize && (re.series.shadowSize = re.shadowSize), null != re.highlightColor && (re.series.highlightColor = re.highlightColor), i = 0; i < re.xaxes.length; ++i) g(ue, i + 1).options = re.xaxes[i];
                for (i = 0; i < re.yaxes.length; ++i) g(de, i + 1).options = re.yaxes[i];
                for (var u in me) re.hooks[u] && re.hooks[u].length && (me[u] = me[u].concat(re.hooks[u]));
                s(me.processOptions, [re])
            }

            function u(t) {
                ie = d(t), v(), y()
            }

            function d(e) {
                for (var n = [], i = 0; i < e.length; ++i) {
                    var r = t.extend(!0, {}, re.series);
                    null != e[i].data ? (r.data = e[i].data, delete e[i].data, t.extend(!0, r, e[i]), e[i].data = r.data) : r.data = e[i], n.push(r)
                }
                return n
            }

            function h(t, e) {
                var n = t[e + "axis"];
                return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
            }

            function p() {
                return t.grep(ue.concat(de), function(t) {
                    return t
                })
            }

            function f(t) {
                var e, n, i = {};
                for (e = 0; e < ue.length; ++e) n = ue[e], n && n.used && (i["x" + n.n] = n.c2p(t.left));
                for (e = 0; e < de.length; ++e) n = de[e], n && n.used && (i["y" + n.n] = n.c2p(t.top));
                return void 0 !== i.x1 && (i.x = i.x1), void 0 !== i.y1 && (i.y = i.y1), i
            }

            function m(t) {
                var e, n, i, r = {};
                for (e = 0; e < ue.length; ++e)
                    if (n = ue[e], n && n.used && (i = "x" + n.n, null == t[i] && 1 == n.n && (i = "x"), null != t[i])) {
                        r.left = n.p2c(t[i]);
                        break
                    }
                for (e = 0; e < de.length; ++e)
                    if (n = de[e], n && n.used && (i = "y" + n.n, null == t[i] && 1 == n.n && (i = "y"), null != t[i])) {
                        r.top = n.p2c(t[i]);
                        break
                    }
                return r
            }

            function g(e, n) {
                return e[n - 1] || (e[n - 1] = {
                    n: n,
                    direction: e == ue ? "x" : "y",
                    options: t.extend(!0, {}, e == ue ? re.xaxis : re.yaxis)
                }), e[n - 1]
            }

            function v() {
                var e, n = ie.length,
                    i = -1;
                for (e = 0; e < ie.length; ++e) {
                    var r = ie[e].color;
                    null != r && (n--, "number" == typeof r && r > i && (i = r))
                }
                i >= n && (n = i + 1);
                var o, a = [],
                    s = re.colors,
                    l = s.length,
                    c = 0;
                for (e = 0; n > e; e++) o = t.color.parse(s[e % l] || "#666"), e % l == 0 && e && (c = c >= 0 ? .5 > c ? -c - .2 : 0 : -c), a[e] = o.scale("rgb", 1 + c);
                var u, d = 0;
                for (e = 0; e < ie.length; ++e) {
                    if (u = ie[e], null == u.color ? (u.color = a[d].toString(), ++d) : "number" == typeof u.color && (u.color = a[u.color].toString()), null == u.lines.show) {
                        var p, f = !0;
                        for (p in u)
                            if (u[p] && u[p].show) {
                                f = !1;
                                break
                            }
                        f && (u.lines.show = !0)
                    }
                    null == u.lines.zero && (u.lines.zero = !!u.lines.fill), u.xaxis = g(ue, h(u, "x")), u.yaxis = g(de, h(u, "y"))
                }
            }

            function y() {
                function e(t, e, n) {
                    e < t.datamin && e != -y && (t.datamin = e), n > t.datamax && n != y && (t.datamax = n)
                }
                var n, i, r, o, a, l, c, u, d, h, f, m, g = Number.POSITIVE_INFINITY,
                    v = Number.NEGATIVE_INFINITY,
                    y = Number.MAX_VALUE;
                for (t.each(p(), function(t, e) {
                        e.datamin = g, e.datamax = v, e.used = !1
                    }), n = 0; n < ie.length; ++n) a = ie[n], a.datapoints = {
                    points: []
                }, s(me.processRawData, [a, a.data, a.datapoints]);
                for (n = 0; n < ie.length; ++n) {
                    if (a = ie[n], f = a.data, m = a.datapoints.format, !m) {
                        if (m = [], m.push({
                                x: !0,
                                number: !0,
                                required: !0
                            }), m.push({
                                y: !0,
                                number: !0,
                                required: !0
                            }), a.bars.show || a.lines.show && a.lines.fill) {
                            var b = !!(a.bars.show && a.bars.zero || a.lines.show && a.lines.zero);
                            m.push({
                                y: !0,
                                number: !0,
                                required: !1,
                                defaultValue: 0,
                                autoscale: b
                            }), a.bars.horizontal && (delete m[m.length - 1].y, m[m.length - 1].x = !0)
                        }
                        a.datapoints.format = m
                    }
                    if (null == a.datapoints.pointsize) {
                        a.datapoints.pointsize = m.length, c = a.datapoints.pointsize, l = a.datapoints.points;
                        var x = a.lines.show && a.lines.steps;
                        for (a.xaxis.used = a.yaxis.used = !0, i = r = 0; i < f.length; ++i, r += c) {
                            h = f[i];
                            var w = null == h;
                            if (!w)
                                for (o = 0; c > o; ++o) u = h[o], d = m[o], d && (d.number && null != u && (u = +u, isNaN(u) ? u = null : 1 / 0 == u ? u = y : u == -1 / 0 && (u = -y)), null == u && (d.required && (w = !0), null != d.defaultValue && (u = d.defaultValue))), l[r + o] = u;
                            if (w)
                                for (o = 0; c > o; ++o) u = l[r + o], null != u && (d = m[o], d.autoscale !== !1 && (d.x && e(a.xaxis, u, u), d.y && e(a.yaxis, u, u))), l[r + o] = null;
                            else if (x && r > 0 && null != l[r - c] && l[r - c] != l[r] && l[r - c + 1] != l[r + 1]) {
                                for (o = 0; c > o; ++o) l[r + c + o] = l[r + o];
                                l[r + 1] = l[r - c + 1], r += c
                            }
                        }
                    }
                }
                for (n = 0; n < ie.length; ++n) a = ie[n], s(me.processDatapoints, [a, a.datapoints]);
                for (n = 0; n < ie.length; ++n) {
                    a = ie[n], l = a.datapoints.points, c = a.datapoints.pointsize, m = a.datapoints.format;
                    var k = g,
                        T = g,
                        _ = v,
                        C = v;
                    for (i = 0; i < l.length; i += c)
                        if (null != l[i])
                            for (o = 0; c > o; ++o) u = l[i + o], d = m[o], d && d.autoscale !== !1 && u != y && u != -y && (d.x && (k > u && (k = u), u > _ && (_ = u)), d.y && (T > u && (T = u), u > C && (C = u)));
                    if (a.bars.show) {
                        var S;
                        switch (a.bars.align) {
                            case "left":
                                S = 0;
                                break;
                            case "right":
                                S = -a.bars.barWidth;
                                break;
                            default:
                                S = -a.bars.barWidth / 2
                        }
                        a.bars.horizontal ? (T += S, C += S + a.bars.barWidth) : (k += S, _ += S + a.bars.barWidth)
                    }
                    e(a.xaxis, k, _), e(a.yaxis, T, C)
                }
                t.each(p(), function(t, e) {
                    e.datamin == g && (e.datamin = null), e.datamax == v && (e.datamax = null)
                })
            }

            function b() {
                n.css("padding", 0).children().filter(function() {
                    return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                }).remove(), "static" == n.css("position") && n.css("position", "relative"), oe = new e("flot-base", n), ae = new e("flot-overlay", n), le = oe.context, ce = ae.context, se = t(ae.element).unbind();
                var i = n.data("plot");
                i && (i.shutdown(), ae.clear()), n.data("plot", ge)
            }

            function x() {
                re.grid.hoverable && (se.mousemove(V), se.bind("mouseleave", U)), re.grid.clickable && se.click(X), s(me.bindEvents, [se])
            }

            function w() {
                ye && clearTimeout(ye), se.unbind("mousemove", V), se.unbind("mouseleave", U), se.unbind("click", X), s(me.shutdown, [se])
            }

            function k(t) {
                function e(t) {
                    return t
                }
                var n, i, r = t.options.transform || e,
                    o = t.options.inverseTransform;
                "x" == t.direction ? (n = t.scale = pe / Math.abs(r(t.max) - r(t.min)), i = Math.min(r(t.max), r(t.min))) : (n = t.scale = fe / Math.abs(r(t.max) - r(t.min)), n = -n, i = Math.max(r(t.max), r(t.min))), t.p2c = r == e ? function(t) {
                    return (t - i) * n
                } : function(t) {
                    return (r(t) - i) * n
                }, t.c2p = o ? function(t) {
                    return o(i + t / n)
                } : function(t) {
                    return i + t / n
                }
            }

            function T(t) {
                for (var e = t.options, n = t.ticks || [], i = e.labelWidth || 0, r = e.labelHeight || 0, o = i || ("x" == t.direction ? Math.floor(oe.width / (n.length || 1)) : null), a = t.direction + "Axis " + t.direction + t.n + "Axis", s = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + a, l = e.font || "flot-tick-label tickLabel", c = 0; c < n.length; ++c) {
                    var u = n[c];
                    if (u.label) {
                        var d = oe.getTextInfo(s, u.label, l, null, o);
                        i = Math.max(i, d.width), r = Math.max(r, d.height)
                    }
                }
                t.labelWidth = e.labelWidth || i, t.labelHeight = e.labelHeight || r
            }

            function _(e) {
                var n = e.labelWidth,
                    i = e.labelHeight,
                    r = e.options.position,
                    o = "x" === e.direction,
                    a = e.options.tickLength,
                    s = re.grid.axisMargin,
                    l = re.grid.labelMargin,
                    c = !0,
                    u = !0,
                    d = !0,
                    h = !1;
                t.each(o ? ue : de, function(t, n) {
                    n && n.reserveSpace && (n === e ? h = !0 : n.options.position === r && (h ? u = !1 : c = !1), h || (d = !1))
                }), u && (s = 0), null == a && (a = d ? "full" : 5), isNaN(+a) || (l += +a), o ? (i += l, "bottom" == r ? (he.bottom += i + s, e.box = {
                    top: oe.height - he.bottom,
                    height: i
                }) : (e.box = {
                    top: he.top + s,
                    height: i
                }, he.top += i + s)) : (n += l, "left" == r ? (e.box = {
                    left: he.left + s,
                    width: n
                }, he.left += n + s) : (he.right += n + s, e.box = {
                    left: oe.width - he.right,
                    width: n
                })), e.position = r, e.tickLength = a, e.box.padding = l, e.innermost = c
            }

            function C(t) {
                "x" == t.direction ? (t.box.left = he.left - t.labelWidth / 2, t.box.width = oe.width - he.left - he.right + t.labelWidth) : (t.box.top = he.top - t.labelHeight / 2, t.box.height = oe.height - he.bottom - he.top + t.labelHeight)
            }

            function S() {
                var e, n = re.grid.minBorderMargin;
                if (null == n)
                    for (n = 0, e = 0; e < ie.length; ++e) n = Math.max(n, 2 * (ie[e].points.radius + ie[e].points.lineWidth / 2));
                var i = {
                    left: n,
                    right: n,
                    top: n,
                    bottom: n
                };
                t.each(p(), function(t, e) {
                    if (e.reserveSpace && e.ticks && e.ticks.length) {
                        var n = e.ticks[e.ticks.length - 1];
                        "x" === e.direction ? (i.left = Math.max(i.left, e.labelWidth / 2), n.v <= e.max && (i.right = Math.max(i.right, e.labelWidth / 2))) : (i.bottom = Math.max(i.bottom, e.labelHeight / 2), n.v <= e.max && (i.top = Math.max(i.top, e.labelHeight / 2)))
                    }
                }), he.left = Math.ceil(Math.max(i.left, he.left)), he.right = Math.ceil(Math.max(i.right, he.right)), he.top = Math.ceil(Math.max(i.top, he.top)), he.bottom = Math.ceil(Math.max(i.bottom, he.bottom))
            }

            function E() {
                var e, n = p(),
                    i = re.grid.show;
                for (var r in he) {
                    var o = re.grid.margin || 0;
                    he[r] = "number" == typeof o ? o : o[r] || 0
                }
                s(me.processOffset, [he]);
                for (var r in he) he[r] += "object" == typeof re.grid.borderWidth ? i ? re.grid.borderWidth[r] : 0 : i ? re.grid.borderWidth : 0;
                if (t.each(n, function(t, e) {
                        e.show = e.options.show, null == e.show && (e.show = e.used), e.reserveSpace = e.show || e.options.reserveSpace, j(e)
                    }), i) {
                    var a = t.grep(n, function(t) {
                        return t.reserveSpace
                    });
                    for (t.each(a, function(t, e) {
                            N(e), A(e), M(e, e.ticks), T(e)
                        }), e = a.length - 1; e >= 0; --e) _(a[e]);
                    S(), t.each(a, function(t, e) {
                        C(e)
                    })
                }
                pe = oe.width - he.left - he.right, fe = oe.height - he.bottom - he.top, t.each(n, function(t, e) {
                    k(e)
                }), i && L(), W()
            }

            function j(t) {
                var e = t.options,
                    n = +(null != e.min ? e.min : t.datamin),
                    i = +(null != e.max ? e.max : t.datamax),
                    r = i - n;
                if (0 == r) {
                    var o = 0 == i ? 1 : .01;
                    null == e.min && (n -= o), (null == e.max || null != e.min) && (i += o)
                } else {
                    var a = e.autoscaleMargin;
                    null != a && (null == e.min && (n -= r * a, 0 > n && null != t.datamin && t.datamin >= 0 && (n = 0)), null == e.max && (i += r * a, i > 0 && null != t.datamax && t.datamax <= 0 && (i = 0)))
                }
                t.min = n, t.max = i
            }

            function N(e) {
                var n, r = e.options;
                n = "number" == typeof r.ticks && r.ticks > 0 ? r.ticks : .3 * Math.sqrt("x" == e.direction ? oe.width : oe.height);
                var o = (e.max - e.min) / n,
                    a = -Math.floor(Math.log(o) / Math.LN10),
                    s = r.tickDecimals;
                null != s && a > s && (a = s);
                var l, c = Math.pow(10, -a),
                    u = o / c;
                if (1.5 > u ? l = 1 : 3 > u ? (l = 2, u > 2.25 && (null == s || s >= a + 1) && (l = 2.5, ++a)) : l = 7.5 > u ? 5 : 10, l *= c, null != r.minTickSize && l < r.minTickSize && (l = r.minTickSize), e.delta = o, e.tickDecimals = Math.max(0, null != s ? s : a), e.tickSize = r.tickSize || l, "time" == r.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                if (e.tickGenerator || (e.tickGenerator = function(t) {
                        var e, n = [],
                            r = i(t.min, t.tickSize),
                            o = 0,
                            a = Number.NaN;
                        do e = a, a = r + o * t.tickSize, n.push(a), ++o; while (a < t.max && a != e);
                        return n
                    }, e.tickFormatter = function(t, e) {
                        var n = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                            i = "" + Math.round(t * n) / n;
                        if (null != e.tickDecimals) {
                            var r = i.indexOf("."),
                                o = -1 == r ? 0 : i.length - r - 1;
                            if (o < e.tickDecimals) return (o ? i : i + ".") + ("" + n).substr(1, e.tickDecimals - o)
                        }
                        return i
                    }), t.isFunction(r.tickFormatter) && (e.tickFormatter = function(t, e) {
                        return "" + r.tickFormatter(t, e)
                    }), null != r.alignTicksWithAxis) {
                    var d = ("x" == e.direction ? ue : de)[r.alignTicksWithAxis - 1];
                    if (d && d.used && d != e) {
                        var h = e.tickGenerator(e);
                        if (h.length > 0 && (null == r.min && (e.min = Math.min(e.min, h[0])), null == r.max && h.length > 1 && (e.max = Math.max(e.max, h[h.length - 1]))), e.tickGenerator = function(t) {
                                var e, n, i = [];
                                for (n = 0; n < d.ticks.length; ++n) e = (d.ticks[n].v - d.min) / (d.max - d.min), e = t.min + e * (t.max - t.min), i.push(e);
                                return i
                            }, !e.mode && null == r.tickDecimals) {
                            var p = Math.max(0, -Math.floor(Math.log(e.delta) / Math.LN10) + 1),
                                f = e.tickGenerator(e);
                            f.length > 1 && /\..*0$/.test((f[1] - f[0]).toFixed(p)) || (e.tickDecimals = p)
                        }
                    }
                }
            }

            function A(e) {
                var n = e.options.ticks,
                    i = [];
                null == n || "number" == typeof n && n > 0 ? i = e.tickGenerator(e) : n && (i = t.isFunction(n) ? n(e) : n);
                var r, o;
                for (e.ticks = [], r = 0; r < i.length; ++r) {
                    var a = null,
                        s = i[r];
                    "object" == typeof s ? (o = +s[0], s.length > 1 && (a = s[1])) : o = +s, null == a && (a = e.tickFormatter(o, e)), isNaN(o) || e.ticks.push({
                        v: o,
                        label: a
                    })
                }
            }

            function M(t, e) {
                t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
            }

            function $() {
                oe.clear(), s(me.drawBackground, [le]);
                var t = re.grid;
                t.show && t.backgroundColor && I(), t.show && !t.aboveData && O();
                for (var e = 0; e < ie.length; ++e) s(me.drawSeries, [le, ie[e]]), H(ie[e]);
                s(me.draw, [le]), t.show && t.aboveData && O(), oe.render(), G()
            }

            function D(t, e) {
                for (var n, i, r, o, a = p(), s = 0; s < a.length; ++s)
                    if (n = a[s], n.direction == e && (o = e + n.n + "axis", t[o] || 1 != n.n || (o = e + "axis"), t[o])) {
                        i = t[o].from, r = t[o].to;
                        break
                    }
                if (t[o] || (n = "x" == e ? ue[0] : de[0], i = t[e + "1"], r = t[e + "2"]), null != i && null != r && i > r) {
                    var l = i;
                    i = r, r = l
                }
                return {
                    from: i,
                    to: r,
                    axis: n
                }
            }

            function I() {
                le.save(), le.translate(he.left, he.top), le.fillStyle = ne(re.grid.backgroundColor, fe, 0, "rgba(255, 255, 255, 0)"), le.fillRect(0, 0, pe, fe), le.restore()
            }

            function O() {
                var e, n, i, r;
                le.save(), le.translate(he.left, he.top);
                var o = re.grid.markings;
                if (o)
                    for (t.isFunction(o) && (n = ge.getAxes(), n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, o = o(n)), e = 0; e < o.length; ++e) {
                        var a = o[e],
                            s = D(a, "x"),
                            l = D(a, "y");
                        null == s.from && (s.from = s.axis.min), null == s.to && (s.to = s.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), s.to < s.axis.min || s.from > s.axis.max || l.to < l.axis.min || l.from > l.axis.max || (s.from = Math.max(s.from, s.axis.min), s.to = Math.min(s.to, s.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), (s.from != s.to || l.from != l.to) && (s.from = s.axis.p2c(s.from), s.to = s.axis.p2c(s.to), l.from = l.axis.p2c(l.from), l.to = l.axis.p2c(l.to), s.from == s.to || l.from == l.to ? (le.beginPath(), le.strokeStyle = a.color || re.grid.markingsColor, le.lineWidth = a.lineWidth || re.grid.markingsLineWidth, le.moveTo(s.from, l.from), le.lineTo(s.to, l.to), le.stroke()) : (le.fillStyle = a.color || re.grid.markingsColor, le.fillRect(s.from, l.to, s.to - s.from, l.from - l.to))))
                    }
                n = p(), i = re.grid.borderWidth;
                for (var c = 0; c < n.length; ++c) {
                    var u, d, h, f, m = n[c],
                        g = m.box,
                        v = m.tickLength;
                    if (m.show && 0 != m.ticks.length) {
                        for (le.lineWidth = 1, "x" == m.direction ? (u = 0, d = "full" == v ? "top" == m.position ? 0 : fe : g.top - he.top + ("top" == m.position ? g.height : 0)) : (d = 0, u = "full" == v ? "left" == m.position ? 0 : pe : g.left - he.left + ("left" == m.position ? g.width : 0)), m.innermost || (le.strokeStyle = m.options.color, le.beginPath(), h = f = 0, "x" == m.direction ? h = pe + 1 : f = fe + 1, 1 == le.lineWidth && ("x" == m.direction ? d = Math.floor(d) + .5 : u = Math.floor(u) + .5), le.moveTo(u, d), le.lineTo(u + h, d + f), le.stroke()), le.strokeStyle = m.options.tickColor, le.beginPath(), e = 0; e < m.ticks.length; ++e) {
                            var y = m.ticks[e].v;
                            h = f = 0, isNaN(y) || y < m.min || y > m.max || "full" == v && ("object" == typeof i && i[m.position] > 0 || i > 0) && (y == m.min || y == m.max) || ("x" == m.direction ? (u = m.p2c(y), f = "full" == v ? -fe : v, "top" == m.position && (f = -f)) : (d = m.p2c(y), h = "full" == v ? -pe : v, "left" == m.position && (h = -h)), 1 == le.lineWidth && ("x" == m.direction ? u = Math.floor(u) + .5 : d = Math.floor(d) + .5), le.moveTo(u, d), le.lineTo(u + h, d + f))
                        }
                        le.stroke()
                    }
                }
                i && (r = re.grid.borderColor, "object" == typeof i || "object" == typeof r ? ("object" != typeof i && (i = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i
                }), "object" != typeof r && (r = {
                    top: r,
                    right: r,
                    bottom: r,
                    left: r
                }), i.top > 0 && (le.strokeStyle = r.top, le.lineWidth = i.top, le.beginPath(), le.moveTo(0 - i.left, 0 - i.top / 2), le.lineTo(pe, 0 - i.top / 2), le.stroke()), i.right > 0 && (le.strokeStyle = r.right, le.lineWidth = i.right, le.beginPath(), le.moveTo(pe + i.right / 2, 0 - i.top), le.lineTo(pe + i.right / 2, fe), le.stroke()), i.bottom > 0 && (le.strokeStyle = r.bottom, le.lineWidth = i.bottom, le.beginPath(), le.moveTo(pe + i.right, fe + i.bottom / 2), le.lineTo(0, fe + i.bottom / 2), le.stroke()), i.left > 0 && (le.strokeStyle = r.left, le.lineWidth = i.left, le.beginPath(), le.moveTo(0 - i.left / 2, fe + i.bottom), le.lineTo(0 - i.left / 2, 0), le.stroke())) : (le.lineWidth = i, le.strokeStyle = re.grid.borderColor, le.strokeRect(-i / 2, -i / 2, pe + i, fe + i))), le.restore()
            }

            function L() {
                t.each(p(), function(t, e) {
                    var n, i, r, o, a, s = e.box,
                        l = e.direction + "Axis " + e.direction + e.n + "Axis",
                        c = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
                        u = e.options.font || "flot-tick-label tickLabel";
                    if (oe.removeText(c), e.show && 0 != e.ticks.length)
                        for (var d = 0; d < e.ticks.length; ++d) n = e.ticks[d], !n.label || n.v < e.min || n.v > e.max || ("x" == e.direction ? (o = "center", i = he.left + e.p2c(n.v), "bottom" == e.position ? r = s.top + s.padding : (r = s.top + s.height - s.padding, a = "bottom")) : (a = "middle", r = he.top + e.p2c(n.v), "left" == e.position ? (i = s.left + s.width - s.padding, o = "right") : i = s.left + s.padding), oe.addText(c, i, r, n.label, u, null, null, o, a))
                })
            }

            function H(t) {
                t.lines.show && R(t), t.bars.show && B(t), t.points.show && F(t)
            }

            function R(t) {
                function e(t, e, n, i, r) {
                    var o = t.points,
                        a = t.pointsize,
                        s = null,
                        l = null;
                    le.beginPath();
                    for (var c = a; c < o.length; c += a) {
                        var u = o[c - a],
                            d = o[c - a + 1],
                            h = o[c],
                            p = o[c + 1];
                        if (null != u && null != h) {
                            if (p >= d && d < r.min) {
                                if (p < r.min) continue;
                                u = (r.min - d) / (p - d) * (h - u) + u, d = r.min
                            } else if (d >= p && p < r.min) {
                                if (d < r.min) continue;
                                h = (r.min - d) / (p - d) * (h - u) + u, p = r.min
                            }
                            if (d >= p && d > r.max) {
                                if (p > r.max) continue;
                                u = (r.max - d) / (p - d) * (h - u) + u, d = r.max
                            } else if (p >= d && p > r.max) {
                                if (d > r.max) continue;
                                h = (r.max - d) / (p - d) * (h - u) + u, p = r.max
                            }
                            if (h >= u && u < i.min) {
                                if (h < i.min) continue;
                                d = (i.min - u) / (h - u) * (p - d) + d, u = i.min
                            } else if (u >= h && h < i.min) {
                                if (u < i.min) continue;
                                p = (i.min - u) / (h - u) * (p - d) + d, h = i.min
                            }
                            if (u >= h && u > i.max) {
                                if (h > i.max) continue;
                                d = (i.max - u) / (h - u) * (p - d) + d, u = i.max
                            } else if (h >= u && h > i.max) {
                                if (u > i.max) continue;
                                p = (i.max - u) / (h - u) * (p - d) + d, h = i.max
                            }(u != s || d != l) && le.moveTo(i.p2c(u) + e, r.p2c(d) + n), s = h, l = p, le.lineTo(i.p2c(h) + e, r.p2c(p) + n)
                        }
                    }
                    le.stroke()
                }

                function n(t, e, n) {
                    for (var i = t.points, r = t.pointsize, o = Math.min(Math.max(0, n.min), n.max), a = 0, s = !1, l = 1, c = 0, u = 0;;) {
                        if (r > 0 && a > i.length + r) break;
                        a += r;
                        var d = i[a - r],
                            h = i[a - r + l],
                            p = i[a],
                            f = i[a + l];
                        if (s) {
                            if (r > 0 && null != d && null == p) {
                                u = a, r = -r, l = 2;
                                continue
                            }
                            if (0 > r && a == c + r) {
                                le.fill(), s = !1, r = -r, l = 1, a = c = u + r;
                                continue
                            }
                        }
                        if (null != d && null != p) {
                            if (p >= d && d < e.min) {
                                if (p < e.min) continue;
                                h = (e.min - d) / (p - d) * (f - h) + h, d = e.min
                            } else if (d >= p && p < e.min) {
                                if (d < e.min) continue;
                                f = (e.min - d) / (p - d) * (f - h) + h, p = e.min
                            }
                            if (d >= p && d > e.max) {
                                if (p > e.max) continue;
                                h = (e.max - d) / (p - d) * (f - h) + h, d = e.max
                            } else if (p >= d && p > e.max) {
                                if (d > e.max) continue;
                                f = (e.max - d) / (p - d) * (f - h) + h, p = e.max
                            }
                            if (s || (le.beginPath(), le.moveTo(e.p2c(d), n.p2c(o)), s = !0), h >= n.max && f >= n.max) le.lineTo(e.p2c(d), n.p2c(n.max)), le.lineTo(e.p2c(p), n.p2c(n.max));
                            else if (h <= n.min && f <= n.min) le.lineTo(e.p2c(d), n.p2c(n.min)), le.lineTo(e.p2c(p), n.p2c(n.min));
                            else {
                                var m = d,
                                    g = p;
                                f >= h && h < n.min && f >= n.min ? (d = (n.min - h) / (f - h) * (p - d) + d, h = n.min) : h >= f && f < n.min && h >= n.min && (p = (n.min - h) / (f - h) * (p - d) + d, f = n.min), h >= f && h > n.max && f <= n.max ? (d = (n.max - h) / (f - h) * (p - d) + d, h = n.max) : f >= h && f > n.max && h <= n.max && (p = (n.max - h) / (f - h) * (p - d) + d, f = n.max), d != m && le.lineTo(e.p2c(m), n.p2c(h)), le.lineTo(e.p2c(d), n.p2c(h)), le.lineTo(e.p2c(p), n.p2c(f)), p != g && (le.lineTo(e.p2c(p), n.p2c(f)), le.lineTo(e.p2c(g), n.p2c(f)))
                            }
                        }
                    }
                }
                le.save(), le.translate(he.left, he.top), le.lineJoin = "round";
                var i = t.lines.lineWidth,
                    r = t.shadowSize;
                if (i > 0 && r > 0) {
                    le.lineWidth = r, le.strokeStyle = "rgba(0,0,0,0.1)";
                    var o = Math.PI / 18;
                    e(t.datapoints, Math.sin(o) * (i / 2 + r / 2), Math.cos(o) * (i / 2 + r / 2), t.xaxis, t.yaxis), le.lineWidth = r / 2, e(t.datapoints, Math.sin(o) * (i / 2 + r / 4), Math.cos(o) * (i / 2 + r / 4), t.xaxis, t.yaxis)
                }
                le.lineWidth = i, le.strokeStyle = t.color;
                var a = q(t.lines, t.color, 0, fe);
                a && (le.fillStyle = a, n(t.datapoints, t.xaxis, t.yaxis)), i > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), le.restore()
            }

            function F(t) {
                function e(t, e, n, i, r, o, a, s) {
                    for (var l = t.points, c = t.pointsize, u = 0; u < l.length; u += c) {
                        var d = l[u],
                            h = l[u + 1];
                        null == d || d < o.min || d > o.max || h < a.min || h > a.max || (le.beginPath(), d = o.p2c(d), h = a.p2c(h) + i, "circle" == s ? le.arc(d, h, e, 0, r ? Math.PI : 2 * Math.PI, !1) : s(le, d, h, e, r), le.closePath(), n && (le.fillStyle = n, le.fill()), le.stroke())
                    }
                }
                le.save(), le.translate(he.left, he.top);
                var n = t.points.lineWidth,
                    i = t.shadowSize,
                    r = t.points.radius,
                    o = t.points.symbol;
                if (0 == n && (n = 1e-4), n > 0 && i > 0) {
                    var a = i / 2;
                    le.lineWidth = a, le.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, r, null, a + a / 2, !0, t.xaxis, t.yaxis, o), le.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, r, null, a / 2, !0, t.xaxis, t.yaxis, o)
                }
                le.lineWidth = n, le.strokeStyle = t.color, e(t.datapoints, r, q(t.points, t.color), 0, !1, t.xaxis, t.yaxis, o), le.restore()
            }

            function P(t, e, n, i, r, o, a, s, l, c, u) {
                var d, h, p, f, m, g, v, y, b;
                c ? (y = g = v = !0, m = !1, d = n, h = t, f = e + i, p = e + r, d > h && (b = h, h = d, d = b, m = !0, g = !1)) : (m = g = v = !0, y = !1, d = t + i, h = t + r, p = n, f = e, p > f && (b = f, f = p, p = b, y = !0, v = !1)), h < a.min || d > a.max || f < s.min || p > s.max || (d < a.min && (d = a.min, m = !1), h > a.max && (h = a.max, g = !1), p < s.min && (p = s.min, y = !1), f > s.max && (f = s.max, v = !1), d = a.p2c(d), p = s.p2c(p), h = a.p2c(h), f = s.p2c(f), o && (l.fillStyle = o(p, f), l.fillRect(d, f, h - d, p - f)), u > 0 && (m || g || v || y) && (l.beginPath(), l.moveTo(d, p), m ? l.lineTo(d, f) : l.moveTo(d, f), v ? l.lineTo(h, f) : l.moveTo(h, f), g ? l.lineTo(h, p) : l.moveTo(h, p), y ? l.lineTo(d, p) : l.moveTo(d, p), l.stroke()))
            }

            function B(t) {
                function e(e, n, i, r, o, a) {
                    for (var s = e.points, l = e.pointsize, c = 0; c < s.length; c += l) null != s[c] && P(s[c], s[c + 1], s[c + 2], n, i, r, o, a, le, t.bars.horizontal, t.bars.lineWidth)
                }
                le.save(), le.translate(he.left, he.top), le.lineWidth = t.bars.lineWidth, le.strokeStyle = t.color;
                var n;
                switch (t.bars.align) {
                    case "left":
                        n = 0;
                        break;
                    case "right":
                        n = -t.bars.barWidth;
                        break;
                    default:
                        n = -t.bars.barWidth / 2
                }
                var i = t.bars.fill ? function(e, n) {
                    return q(t.bars, t.color, e, n)
                } : null;
                e(t.datapoints, n, n + t.bars.barWidth, i, t.xaxis, t.yaxis), le.restore()
            }

            function q(e, n, i, r) {
                var o = e.fill;
                if (!o) return null;
                if (e.fillColor) return ne(e.fillColor, i, r, n);
                var a = t.color.parse(n);
                return a.a = "number" == typeof o ? o : .4, a.normalize(), a.toString()
            }

            function W() {
                if (null != re.legend.container ? t(re.legend.container).html("") : n.find(".legend").remove(), re.legend.show) {
                    for (var e, i, r = [], o = [], a = !1, s = re.legend.labelFormatter, l = 0; l < ie.length; ++l) e = ie[l], e.label && (i = s ? s(e.label, e) : e.label, i && o.push({
                        label: i,
                        color: e.color
                    }));
                    if (re.legend.sorted)
                        if (t.isFunction(re.legend.sorted)) o.sort(re.legend.sorted);
                        else if ("reverse" == re.legend.sorted) o.reverse();
                    else {
                        var c = "descending" != re.legend.sorted;
                        o.sort(function(t, e) {
                            return t.label == e.label ? 0 : t.label < e.label != c ? 1 : -1
                        })
                    }
                    for (var l = 0; l < o.length; ++l) {
                        var u = o[l];
                        l % re.legend.noColumns == 0 && (a && r.push("</tr>"), r.push("<tr>"), a = !0), r.push('<td class="legendColorBox"><div style="border:1px solid ' + re.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + u.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + u.label + "</td>")
                    }
                    if (a && r.push("</tr>"), 0 != r.length) {
                        var d = '<table style="font-size:smaller;color:' + re.grid.color + '">' + r.join("") + "</table>";
                        if (null != re.legend.container) t(re.legend.container).html(d);
                        else {
                            var h = "",
                                p = re.legend.position,
                                f = re.legend.margin;
                            null == f[0] && (f = [f, f]), "n" == p.charAt(0) ? h += "top:" + (f[1] + he.top) + "px;" : "s" == p.charAt(0) && (h += "bottom:" + (f[1] + he.bottom) + "px;"), "e" == p.charAt(1) ? h += "right:" + (f[0] + he.right) + "px;" : "w" == p.charAt(1) && (h += "left:" + (f[0] + he.left) + "px;");
                            var m = t('<div class="legend">' + d.replace('style="', 'style="position:absolute;' + h + ";") + "</div>").appendTo(n);
                            if (0 != re.legend.backgroundOpacity) {
                                var g = re.legend.backgroundColor;
                                null == g && (g = re.grid.backgroundColor, g = g && "string" == typeof g ? t.color.parse(g) : t.color.extract(m, "background-color"), g.a = 1, g = g.toString());
                                var v = m.children();
                                t('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() + "px;" + h + "background-color:" + g + ';"> </div>').prependTo(m).css("opacity", re.legend.backgroundOpacity)
                            }
                        }
                    }
                }
            }

            function z(t, e, n) {
                var i, r, o, a = re.grid.mouseActiveRadius,
                    s = a * a + 1,
                    l = null;
                for (i = ie.length - 1; i >= 0; --i)
                    if (n(ie[i])) {
                        var c = ie[i],
                            u = c.xaxis,
                            d = c.yaxis,
                            h = c.datapoints.points,
                            p = u.c2p(t),
                            f = d.c2p(e),
                            m = a / u.scale,
                            g = a / d.scale;
                        if (o = c.datapoints.pointsize, u.options.inverseTransform && (m = Number.MAX_VALUE), d.options.inverseTransform && (g = Number.MAX_VALUE), c.lines.show || c.points.show)
                            for (r = 0; r < h.length; r += o) {
                                var v = h[r],
                                    y = h[r + 1];
                                if (null != v && !(v - p > m || -m > v - p || y - f > g || -g > y - f)) {
                                    var b = Math.abs(u.p2c(v) - t),
                                        x = Math.abs(d.p2c(y) - e),
                                        w = b * b + x * x;
                                    s > w && (s = w, l = [i, r / o])
                                }
                            }
                        if (c.bars.show && !l) {
                            var k, T;
                            switch (c.bars.align) {
                                case "left":
                                    k = 0;
                                    break;
                                case "right":
                                    k = -c.bars.barWidth;
                                    break;
                                default:
                                    k = -c.bars.barWidth / 2
                            }
                            for (T = k + c.bars.barWidth, r = 0; r < h.length; r += o) {
                                var v = h[r],
                                    y = h[r + 1],
                                    _ = h[r + 2];
                                null != v && (ie[i].bars.horizontal ? p <= Math.max(_, v) && p >= Math.min(_, v) && f >= y + k && y + T >= f : p >= v + k && v + T >= p && f >= Math.min(_, y) && f <= Math.max(_, y)) && (l = [i, r / o])
                            }
                        }
                    }
                return l ? (i = l[0], r = l[1], o = ie[i].datapoints.pointsize, {
                    datapoint: ie[i].datapoints.points.slice(r * o, (r + 1) * o),
                    dataIndex: r,
                    series: ie[i],
                    seriesIndex: i
                }) : null
            }

            function V(t) {
                re.grid.hoverable && Q("plothover", t, function(t) {
                    return 0 != t.hoverable
                })
            }

            function U(t) {
                re.grid.hoverable && Q("plothover", t, function() {
                    return !1
                })
            }

            function X(t) {
                Q("plotclick", t, function(t) {
                    return 0 != t.clickable
                })
            }

            function Q(t, e, i) {
                var r = se.offset(),
                    o = e.pageX - r.left - he.left,
                    a = e.pageY - r.top - he.top,
                    s = f({
                        left: o,
                        top: a
                    });
                s.pageX = e.pageX, s.pageY = e.pageY;
                var l = z(o, a, i);
                if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + r.left + he.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + r.top + he.top, 10)), re.grid.autoHighlight) {
                    for (var c = 0; c < ve.length; ++c) {
                        var u = ve[c];
                        u.auto != t || l && u.series == l.series && u.point[0] == l.datapoint[0] && u.point[1] == l.datapoint[1] || K(u.series, u.point)
                    }
                    l && J(l.series, l.datapoint, t)
                }
                n.trigger(t, [s, l])
            }

            function G() {
                var t = re.interaction.redrawOverlayInterval;
                return -1 == t ? void Y() : void(ye || (ye = setTimeout(Y, t)))
            }

            function Y() {
                ye = null, ce.save(), ae.clear(), ce.translate(he.left, he.top);
                var t, e;
                for (t = 0; t < ve.length; ++t) e = ve[t], e.series.bars.show ? ee(e.series, e.point) : te(e.series, e.point);
                ce.restore(), s(me.drawOverlay, [ce])
            }

            function J(t, e, n) {
                if ("number" == typeof t && (t = ie[t]), "number" == typeof e) {
                    var i = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(i * e, i * (e + 1))
                }
                var r = Z(t, e); - 1 == r ? (ve.push({
                    series: t,
                    point: e,
                    auto: n
                }), G()) : n || (ve[r].auto = !1)
            }

            function K(t, e) {
                if (null == t && null == e) return ve = [], void G();
                if ("number" == typeof t && (t = ie[t]), "number" == typeof e) {
                    var n = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(n * e, n * (e + 1))
                }
                var i = Z(t, e); - 1 != i && (ve.splice(i, 1), G())
            }

            function Z(t, e) {
                for (var n = 0; n < ve.length; ++n) {
                    var i = ve[n];
                    if (i.series == t && i.point[0] == e[0] && i.point[1] == e[1]) return n
                }
                return -1
            }

            function te(e, n) {
                var i = n[0],
                    r = n[1],
                    o = e.xaxis,
                    a = e.yaxis,
                    s = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
                if (!(i < o.min || i > o.max || r < a.min || r > a.max)) {
                    var l = e.points.radius + e.points.lineWidth / 2;
                    ce.lineWidth = l, ce.strokeStyle = s;
                    var c = 1.5 * l;
                    i = o.p2c(i), r = a.p2c(r), ce.beginPath(), "circle" == e.points.symbol ? ce.arc(i, r, c, 0, 2 * Math.PI, !1) : e.points.symbol(ce, i, r, c, !1), ce.closePath(), ce.stroke()
                }
            }

            function ee(e, n) {
                var i, r = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(),
                    o = r;
                switch (e.bars.align) {
                    case "left":
                        i = 0;
                        break;
                    case "right":
                        i = -e.bars.barWidth;
                        break;
                    default:
                        i = -e.bars.barWidth / 2
                }
                ce.lineWidth = e.bars.lineWidth, ce.strokeStyle = r, P(n[0], n[1], n[2] || 0, i, i + e.bars.barWidth, function() {
                    return o
                }, e.xaxis, e.yaxis, ce, e.bars.horizontal, e.bars.lineWidth)
            }

            function ne(e, n, i, r) {
                if ("string" == typeof e) return e;
                for (var o = le.createLinearGradient(0, i, 0, n), a = 0, s = e.colors.length; s > a; ++a) {
                    var l = e.colors[a];
                    if ("string" != typeof l) {
                        var c = t.color.parse(r);
                        null != l.brightness && (c = c.scale("rgb", l.brightness)), null != l.opacity && (c.a *= l.opacity), l = c.toString()
                    }
                    o.addColorStop(a / (s - 1), l)
                }
                return o
            }
            var ie = [],
                re = {
                    colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                    legend: {
                        show: !0,
                        noColumns: 1,
                        labelFormatter: null,
                        labelBoxBorderColor: "#ccc",
                        container: null,
                        position: "ne",
                        margin: 5,
                        backgroundColor: null,
                        backgroundOpacity: .85,
                        sorted: null
                    },
                    xaxis: {
                        show: null,
                        position: "bottom",
                        mode: null,
                        font: null,
                        color: null,
                        tickColor: null,
                        transform: null,
                        inverseTransform: null,
                        min: null,
                        max: null,
                        autoscaleMargin: null,
                        ticks: null,
                        tickFormatter: null,
                        labelWidth: null,
                        labelHeight: null,
                        reserveSpace: null,
                        tickLength: null,
                        alignTicksWithAxis: null,
                        tickDecimals: null,
                        tickSize: null,
                        minTickSize: null
                    },
                    yaxis: {
                        autoscaleMargin: .02,
                        position: "left"
                    },
                    xaxes: [],
                    yaxes: [],
                    series: {
                        points: {
                            show: !1,
                            radius: 3,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: "#ffffff",
                            symbol: "circle"
                        },
                        lines: {
                            lineWidth: 2,
                            fill: !1,
                            fillColor: null,
                            steps: !1
                        },
                        bars: {
                            show: !1,
                            lineWidth: 2,
                            barWidth: 1,
                            fill: !0,
                            fillColor: null,
                            align: "left",
                            horizontal: !1,
                            zero: !0
                        },
                        shadowSize: 3,
                        highlightColor: null
                    },
                    grid: {
                        show: !0,
                        aboveData: !1,
                        color: "#545454",
                        backgroundColor: null,
                        borderColor: null,
                        tickColor: null,
                        margin: 0,
                        labelMargin: 5,
                        axisMargin: 8,
                        borderWidth: 2,
                        minBorderMargin: null,
                        markings: null,
                        markingsColor: "#f4f4f4",
                        markingsLineWidth: 2,
                        clickable: !1,
                        hoverable: !1,
                        autoHighlight: !0,
                        mouseActiveRadius: 10
                    },
                    interaction: {
                        redrawOverlayInterval: 1e3 / 60
                    },
                    hooks: {}
                },
                oe = null,
                ae = null,
                se = null,
                le = null,
                ce = null,
                ue = [],
                de = [],
                he = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                pe = 0,
                fe = 0,
                me = {
                    processOptions: [],
                    processRawData: [],
                    processDatapoints: [],
                    processOffset: [],
                    drawBackground: [],
                    drawSeries: [],
                    draw: [],
                    bindEvents: [],
                    drawOverlay: [],
                    shutdown: []
                },
                ge = this;
            ge.setData = u, ge.setupGrid = E, ge.draw = $, ge.getPlaceholder = function() {
                return n
            }, ge.getCanvas = function() {
                return oe.element
            }, ge.getPlotOffset = function() {
                return he
            }, ge.width = function() {
                return pe
            }, ge.height = function() {
                return fe
            }, ge.offset = function() {
                var t = se.offset();
                return t.left += he.left, t.top += he.top, t
            }, ge.getData = function() {
                return ie
            }, ge.getAxes = function() {
                var e = {};
                return t.each(ue.concat(de), function(t, n) {
                    n && (e[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
                }), e
            }, ge.getXAxes = function() {
                return ue
            }, ge.getYAxes = function() {
                return de
            }, ge.c2p = f, ge.p2c = m, ge.getOptions = function() {
                return re
            }, ge.highlight = J, ge.unhighlight = K, ge.triggerRedrawOverlay = G, ge.pointOffset = function(t) {
                return {
                    left: parseInt(ue[h(t, "x") - 1].p2c(+t.x) + he.left, 10),
                    top: parseInt(de[h(t, "y") - 1].p2c(+t.y) + he.top, 10)
                }
            }, ge.shutdown = w, ge.destroy = function() {
                w(), n.removeData("plot").empty(), ie = [], re = null, oe = null, ae = null, se = null, le = null, ce = null, ue = [], de = [], me = null, ve = [], ge = null
            }, ge.resize = function() {
                var t = n.width(),
                    e = n.height();
                oe.resize(t, e), ae.resize(t, e)
            }, ge.hooks = me, l(ge), c(o), b(), u(r), E(), $(), x();
            var ve = [],
                ye = null
        }

        function i(t, e) {
            return e * Math.floor(t / e)
        }
        var r = Object.prototype.hasOwnProperty;
        e.prototype.resize = function(t, e) {
            if (0 >= t || 0 >= e) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
            var n = this.element,
                i = this.context,
                r = this.pixelRatio;
            this.width != t && (n.width = t * r, n.style.width = t + "px", this.width = t), this.height != e && (n.height = e * r, n.style.height = e + "px", this.height = e), i.restore(), i.save(), i.scale(r, r)
        }, e.prototype.clear = function() {
            this.context.clearRect(0, 0, this.width, this.height)
        }, e.prototype.render = function() {
            var t = this._textCache;
            for (var e in t)
                if (r.call(t, e)) {
                    var n = this.getTextLayer(e),
                        i = t[e];
                    n.hide();
                    for (var o in i)
                        if (r.call(i, o)) {
                            var a = i[o];
                            for (var s in a)
                                if (r.call(a, s)) {
                                    for (var l, c = a[s].positions, u = 0; l = c[u]; u++) l.active ? l.rendered || (n.append(l.element), l.rendered = !0) : (c.splice(u--, 1), l.rendered && l.element.detach());
                                    0 == c.length && delete a[s]
                                }
                        }
                    n.show()
                }
        }, e.prototype.getTextLayer = function(e) {
            var n = this.text[e];
            return null == n && (null == this.textContainer && (this.textContainer = t("<div class='flot-text'></div>").css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "font-size": "smaller",
                color: "#545454"
            }).insertAfter(this.element)), n = this.text[e] = t("<div></div>").addClass(e).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).appendTo(this.textContainer)), n
        }, e.prototype.getTextInfo = function(e, n, i, r, o) {
            var a, s, l, c;
            if (n = "" + n, a = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size + "px/" + i.lineHeight + "px " + i.family : i, s = this._textCache[e], null == s && (s = this._textCache[e] = {}), l = s[a], null == l && (l = s[a] = {}), c = l[n], null == c) {
                var u = t("<div></div>").html(n).css({
                    position: "absolute",
                    "max-width": o,
                    top: -9999
                }).appendTo(this.getTextLayer(e));
                "object" == typeof i ? u.css({
                    font: a,
                    color: i.color
                }) : "string" == typeof i && u.addClass(i), c = l[n] = {
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0),
                    element: u,
                    positions: []
                }, u.detach()
            }
            return c
        }, e.prototype.addText = function(t, e, n, i, r, o, a, s, l) {
            var c = this.getTextInfo(t, i, r, o, a),
                u = c.positions;
            "center" == s ? e -= c.width / 2 : "right" == s && (e -= c.width), "middle" == l ? n -= c.height / 2 : "bottom" == l && (n -= c.height);
            for (var d, h = 0; d = u[h]; h++)
                if (d.x == e && d.y == n) return void(d.active = !0);
            d = {
                active: !0,
                rendered: !1,
                element: u.length ? c.element.clone() : c.element,
                x: e,
                y: n
            }, u.push(d), d.element.css({
                top: Math.round(n),
                left: Math.round(e),
                "text-align": s
            })
        }, e.prototype.removeText = function(t, e, n, i, o, a) {
            if (null == i) {
                var s = this._textCache[t];
                if (null != s)
                    for (var l in s)
                        if (r.call(s, l)) {
                            var c = s[l];
                            for (var u in c)
                                if (r.call(c, u))
                                    for (var d, h = c[u].positions, p = 0; d = h[p]; p++) d.active = !1
                        }
            } else
                for (var d, h = this.getTextInfo(t, i, o, a).positions, p = 0; d = h[p]; p++) d.x == e && d.y == n && (d.active = !1)
        }, t.plot = function(e, i, r) {
            var o = new n(t(e), i, r, t.plot.plugins);
            return o
        }, t.plot.version = "0.8.2", t.plot.plugins = [], t.fn.plot = function(e, n) {
            return this.each(function() {
                t.plot(this, e, n)
            })
        }
    }(jQuery),
    /* Flot plugin for selecting regions of a plot.

    Copyright (c) 2007-2013 IOLA and Ole Laursen.
    Licensed under the MIT license.

    The plugin supports these options:

    selection: {
    	mode: null or "x" or "y" or "xy",
    	color: color,
    	shape: "round" or "miter" or "bevel",
    	minSize: number of pixels
    }

    Selection support is enabled by setting the mode to one of "x", "y" or "xy".
    In "x" mode, the user will only be able to specify the x range, similarly for
    "y" mode. For "xy", the selection becomes a rectangle where both ranges can be
    specified. "color" is color of the selection (if you need to change the color
    later on, you can get to it with plot.getOptions().selection.color). "shape"
    is the shape of the corners of the selection.

    "minSize" is the minimum size a selection can be in pixels. This value can
    be customized to determine the smallest size a selection can be and still
    have the selection rectangle be displayed. When customizing this value, the
    fact that it refers to pixels, not axis units must be taken into account.
    Thus, for example, if there is a bar graph in time mode with BarWidth set to 1
    minute, setting "minSize" to 1 will not make the minimum selection size 1
    minute, but rather 1 pixel. Note also that setting "minSize" to 0 will prevent
    "plotunselected" events from being fired when the user clicks the mouse without
    dragging.

    When selection support is enabled, a "plotselected" event will be emitted on
    the DOM element you passed into the plot function. The event handler gets a
    parameter with the ranges selected on the axes, like this:

    	placeholder.bind( "plotselected", function( event, ranges ) {
    		alert("You selected " + ranges.xaxis.from + " to " + ranges.xaxis.to)
    		// similar for yaxis - with multiple axes, the extra ones are in
    		// x2axis, x3axis, ...
    	});

    The "plotselected" event is only fired when the user has finished making the
    selection. A "plotselecting" event is fired during the process with the same
    parameters as the "plotselected" event, in case you want to know what's
    happening while it's happening,

    A "plotunselected" event with no arguments is emitted when the user clicks the
    mouse to remove the selection. As stated above, setting "minSize" to 0 will
    destroy this behavior.

    The plugin allso adds the following methods to the plot object:

    - setSelection( ranges, preventEvent )

      Set the selection rectangle. The passed in ranges is on the same form as
      returned in the "plotselected" event. If the selection mode is "x", you
      should put in either an xaxis range, if the mode is "y" you need to put in
      an yaxis range and both xaxis and yaxis if the selection mode is "xy", like
      this:

    	setSelection({ xaxis: { from: 0, to: 10 }, yaxis: { from: 40, to: 60 } });

      setSelection will trigger the "plotselected" event when called. If you don't
      want that to happen, e.g. if you're inside a "plotselected" handler, pass
      true as the second parameter. If you are using multiple axes, you can
      specify the ranges on any of those, e.g. as x2axis/x3axis/... instead of
      xaxis, the plugin picks the first one it sees.

    - clearSelection( preventEvent )

      Clear the selection rectangle. Pass in true to avoid getting a
      "plotunselected" event.

    - getSelection()

      Returns the current selection in the same format as the "plotselected"
      event. If there's currently no selection, the function returns null.

    */
    function(t) {
        function e(e) {
            function n(t) {
                f.active && (c(t), e.getPlaceholder().trigger("plotselecting", [o()]))
            }

            function i(e) {
                1 == e.which && (document.body.focus(), void 0 !== document.onselectstart && null == m.onselectstart && (m.onselectstart = document.onselectstart, document.onselectstart = function() {
                    return !1
                }), void 0 !== document.ondrag && null == m.ondrag && (m.ondrag = document.ondrag, document.ondrag = function() {
                    return !1
                }), l(f.first, e), f.active = !0, g = function(t) {
                    r(t)
                }, t(document).one("mouseup", g))
            }

            function r(t) {
                return g = null, void 0 !== document.onselectstart && (document.onselectstart = m.onselectstart), void 0 !== document.ondrag && (document.ondrag = m.ondrag), f.active = !1, c(t), p() ? a() : (e.getPlaceholder().trigger("plotunselected", []), e.getPlaceholder().trigger("plotselecting", [null])), !1
            }

            function o() {
                if (!p()) return null;
                if (!f.show) return null;
                var n = {},
                    i = f.first,
                    r = f.second;
                return t.each(e.getAxes(), function(t, e) {
                    if (e.used) {
                        var o = e.c2p(i[e.direction]),
                            a = e.c2p(r[e.direction]);
                        n[t] = {
                            from: Math.min(o, a),
                            to: Math.max(o, a)
                        }
                    }
                }), n
            }

            function a() {
                var t = o();
                e.getPlaceholder().trigger("plotselected", [t]), t.xaxis && t.yaxis && e.getPlaceholder().trigger("selected", [{
                    x1: t.xaxis.from,
                    y1: t.yaxis.from,
                    x2: t.xaxis.to,
                    y2: t.yaxis.to
                }])
            }

            function s(t, e, n) {
                return t > e ? t : e > n ? n : e
            }

            function l(t, n) {
                var i = e.getOptions(),
                    r = e.getPlaceholder().offset(),
                    o = e.getPlotOffset();
                t.x = s(0, n.pageX - r.left - o.left, e.width()), t.y = s(0, n.pageY - r.top - o.top, e.height()), "y" == i.selection.mode && (t.x = t == f.first ? 0 : e.width()), "x" == i.selection.mode && (t.y = t == f.first ? 0 : e.height())
            }

            function c(t) {
                null != t.pageX && (l(f.second, t), p() ? (f.show = !0, e.triggerRedrawOverlay()) : u(!0))
            }

            function u(t) {
                f.show && (f.show = !1, e.triggerRedrawOverlay(), t || e.getPlaceholder().trigger("plotunselected", []))
            }

            function d(t, n) {
                var i, r, o, a, s = e.getAxes();
                for (var l in s)
                    if (i = s[l], i.direction == n && (a = n + i.n + "axis", t[a] || 1 != i.n || (a = n + "axis"), t[a])) {
                        r = t[a].from, o = t[a].to;
                        break
                    }
                if (t[a] || (i = "x" == n ? e.getXAxes()[0] : e.getYAxes()[0], r = t[n + "1"], o = t[n + "2"]), null != r && null != o && r > o) {
                    var c = r;
                    r = o, o = c
                }
                return {
                    from: r,
                    to: o,
                    axis: i
                }
            }

            function h(t, n) {
                var i, r = e.getOptions();
                "y" == r.selection.mode ? (f.first.x = 0, f.second.x = e.width()) : (i = d(t, "x"), f.first.x = i.axis.p2c(i.from), f.second.x = i.axis.p2c(i.to)), "x" == r.selection.mode ? (f.first.y = 0, f.second.y = e.height()) : (i = d(t, "y"), f.first.y = i.axis.p2c(i.from), f.second.y = i.axis.p2c(i.to)), f.show = !0, e.triggerRedrawOverlay(), !n && p() && a()
            }

            function p() {
                var t = e.getOptions().selection.minSize;
                return Math.abs(f.second.x - f.first.x) >= t && Math.abs(f.second.y - f.first.y) >= t
            }
            var f = {
                    first: {
                        x: -1,
                        y: -1
                    },
                    second: {
                        x: -1,
                        y: -1
                    },
                    show: !1,
                    active: !1
                },
                m = {},
                g = null;
            e.clearSelection = u, e.setSelection = h, e.getSelection = o, e.hooks.bindEvents.push(function(t, e) {
                var r = t.getOptions();
                null != r.selection.mode && (e.mousemove(n), e.mousedown(i))
            }), e.hooks.drawOverlay.push(function(e, n) {
                if (f.show && p()) {
                    var i = e.getPlotOffset(),
                        r = e.getOptions();
                    n.save(), n.translate(i.left, i.top);
                    var o = t.color.parse(r.selection.color);
                    n.strokeStyle = o.scale("a", .8).toString(), n.lineWidth = 1, n.lineJoin = r.selection.shape, n.fillStyle = o.scale("a", .4).toString();
                    var a = Math.min(f.first.x, f.second.x) + .5,
                        s = Math.min(f.first.y, f.second.y) + .5,
                        l = Math.abs(f.second.x - f.first.x) - 1,
                        c = Math.abs(f.second.y - f.first.y) - 1;
                    n.fillRect(a, s, l, c), n.strokeRect(a, s, l, c), n.restore()
                }
            }), e.hooks.shutdown.push(function(e, r) {
                r.unbind("mousemove", n), r.unbind("mousedown", i), g && t(document).unbind("mouseup", g)
            })
        }
        t.plot.plugins.push({
            init: e,
            options: {
                selection: {
                    mode: null,
                    color: "#e8cfac",
                    shape: "round",
                    minSize: 5
                }
            },
            name: "selection",
            version: "1.1"
        })
    }(jQuery),
    /* =========================================================
     * bootstrap-slider.js v2.0.0
     * http://www.eyecon.ro/bootstrap-slider
     * =========================================================
     * Copyright 2012 Stefan Petre
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================= */
    ! function(t) {
        var e = function(e, n) {
            this.element = t(e), this.picker = t('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || n.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
            var i = this.element.data("slider-tooltip") || n.tooltip;
            switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), this.orientation = this.element.data("slider-orientation") || n.orientation, this.orientation) {
                case "vertical":
                    this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
                    break;
                default:
                    this.picker.addClass("slider-horizontal").css("width", this.element.outerWidth()), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
            }
            this.min = this.element.data("slider-min") || n.min, this.max = this.element.data("slider-max") || n.max, this.step = this.element.data("slider-step") || n.step, this.value = this.element.data("slider-value") || n.value, this.value[1] && (this.range = !0), this.selection = this.element.data("slider-selection") || n.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style;
            var r = this.element.data("slider-handle") || n.handle;
            switch (r) {
                case "round":
                    this.handle1.addClass("round"), this.handle2.addClass("round");
                    break;
                case "triangle":
                    this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
            }
            this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" == this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = n.formater, this.layout(), this.picker.on(this.touchCapable ? {
                touchstart: t.proxy(this.mousedown, this)
            } : {
                mousedown: t.proxy(this.mousedown, this)
            }), "show" === i ? this.picker.on({
                mouseenter: t.proxy(this.showTooltip, this),
                mouseleave: t.proxy(this.hideTooltip, this)
            }) : this.tooltip.addClass("hide")
        };
        e.prototype = {
            constructor: e,
            over: !1,
            inDrag: !1,
            showTooltip: function() {
                this.tooltip.addClass("in"), this.over = !0
            },
            hideTooltip: function() {
                this.inDrag === !1 && this.tooltip.removeClass("in"), this.over = !1
            },
            layout: function() {
                this.handle1Stype[this.stylePos] = this.percentage[0] + "%", this.handle2Stype[this.stylePos] = this.percentage[1] + "%", "vertical" == this.orientation ? (this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + "%") : (this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
            },
            mousedown: function(e) {
                this.touchCapable && "touchstart" === e.type && (e = e.originalEvent), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
                var n = this.getPercentage(e);
                if (this.range) {
                    var i = Math.abs(this.percentage[0] - n),
                        r = Math.abs(this.percentage[1] - n);
                    this.dragged = r > i ? 0 : 1
                } else this.dragged = 0;
                this.percentage[this.dragged] = n, this.layout(), t(document).on(this.touchCapable ? {
                    touchmove: t.proxy(this.mousemove, this),
                    touchend: t.proxy(this.mouseup, this)
                } : {
                    mousemove: t.proxy(this.mousemove, this),
                    mouseup: t.proxy(this.mouseup, this)
                }), this.inDrag = !0;
                var o = this.calculateValue();
                return this.element.trigger({
                    type: "slideStart",
                    value: o
                }).trigger({
                    type: "slide",
                    value: o
                }), !1
            },
            mousemove: function(t) {
                this.touchCapable && "touchmove" === t.type && (t = t.originalEvent);
                var e = this.getPercentage(t);
                this.range && (0 === this.dragged && this.percentage[1] < e ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > e && (this.percentage[1] = this.percentage[0], this.dragged = 0)), this.percentage[this.dragged] = e, this.layout();
                var n = this.calculateValue();
                return this.element.trigger({
                    type: "slide",
                    value: n
                }).data("value", n).prop("value", n), !1
            },
            mouseup: function() {
                t(document).off(this.touchCapable ? {
                    touchmove: this.mousemove,
                    touchend: this.mouseup
                } : {
                    mousemove: this.mousemove,
                    mouseup: this.mouseup
                }), this.inDrag = !1, 0 == this.over && this.hideTooltip(), this.element;
                var e = this.calculateValue();
                return this.element.trigger({
                    type: "slideStop",
                    value: e
                }).data("value", e).prop("value", e), !1
            },
            calculateValue: function() {
                var t;
                return this.range ? (t = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step], this.value = t) : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.value = [t, this.value[1]]), t
            },
            getPercentage: function(t) {
                this.touchCapable && (t = t.touches[0]);
                var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
                return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
            },
            getValue: function() {
                return this.range ? this.value : this.value[0]
            },
            setValue: function(t) {
                this.value = t, this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" == this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout()
            }
        }, t.fn.slider = function(n, i) {
            return this.each(function() {
                var r = t(this),
                    o = r.data("slider"),
                    a = "object" == typeof n && n;
                o || r.data("slider", o = new e(this, t.extend({}, t.fn.slider.defaults, a))), "string" == typeof n && o[n](i)
            })
        }, t.fn.slider.defaults = {
            min: 0,
            max: 10,
            step: 1,
            orientation: "horizontal",
            value: 5,
            selection: "before",
            tooltip: "show",
            handle: "round",
            formater: function(t) {
                return t
            }
        }, t.fn.slider.Constructor = e
    }(window.jQuery), Blacklight.onLoad(function() {
        function t(t) {
            if (t && t.width() > 0) {
                t.height(t.width() * s);
                var e = t.data("plot");
                if (e) {
                    e.resize(), e.setupGrid(), e.draw();
                    var n = $(t).closest(".limit_content").find("form.range_limit");
                    n.find("input.range_begin").trigger("change"), $(t).trigger(l)
                }
            }
        }

        function e(t, i) {
            if (t.width() > 0) {
                var r = t.width() * s;
                t.height(r), n($(t)), $(t).trigger(l)
            } else i > 0 && setTimeout(function() {
                e(t, i - 50)
            }, 50)
        }

        function n(t) {
            if (a()) {
                var e = new Array,
                    n = new Array,
                    s = new Array,
                    l = parseInt($(t).find("ul li:first-child span.from").text()),
                    c = parseInt($(t).find("ul li:last-child span.to").text());
                $(t).find("ul li").each(function() {
                    var t = parseInt($(this).find("span.from").text()),
                        i = parseInt($(this).find("span.to").text()),
                        r = parseInt($(this).find("span.count").text()),
                        o = r / (i - t + 1);
                    e.push([t, o]), e.push([i + 1, o]), s.push(t), n.push({
                        from: t,
                        to: i,
                        count: r,
                        label: $(this).find(".facet_select").text()
                    })
                });
                var u = parseInt($(t).find("ul li:last-child span.to").text()) + 1;
                s.push(u);
                var d, h = $(t).closest(".facet_limit").data("plot-config") || {};
                try {
                    d = $.plot($(t), [e], $.extend(!0, h, {
                        yaxis: {
                            ticks: [],
                            min: 0,
                            autoscaleMargin: .1
                        },
                        xaxis: {
                            tickDecimals: 0
                        },
                        series: {
                            lines: {
                                fill: !0,
                                steps: !0
                            }
                        },
                        grid: {
                            clickable: !0,
                            hoverable: !0,
                            autoHighlight: !1
                        },
                        selection: {
                            mode: "x"
                        }
                    }))
                } catch (p) {
                    alert(p)
                }
                find_segment_for = o(n);
                var f = null;
                $(t).bind("plothover", function(t, e) {
                    segment = find_segment_for(e.x), segment != f && ($(".distribution").tooltip("destroy"), $(".distribution").tooltip({
                        title: function() {
                            return find_segment_for(e.x).label + " (" + segment.count + ")"
                        },
                        placement: "bottom",
                        trigger: "manual",
                        delay: {
                            show: 0,
                            hide: 100
                        }
                    }), $(".distribution").tooltip("show"), f = segment)
                }), $(t).bind("mouseout", function() {
                    f = null, $(".distribution").tooltip("hide")
                }), $(t).bind("plotclick", function(t, e) {
                    null == d.getSelection() && (segment = find_segment_for(e.x), d.setSelection(i(segment.from, segment.to)))
                }), $(t).bind("plotselected plotselecting", function(e, n) {
                    if (null != n) {
                        var i = Math.floor(n.xaxis.from),
                            r = Math.floor(n.xaxis.to),
                            o = $(t).closest(".limit_content").find("form.range_limit");
                        o.find("input.range_begin").val(i), o.find("input.range_end").val(r);
                        var a = $(t).closest(".limit_content").find("[data-slider-placeholder]");
                        a && a.slider("setValue", [i, r + 1])
                    }
                });
                var m = $(t).closest(".limit_content").find("form.range_limit");
                m.find("input.range_begin, input.range_end").change(function() {
                    d.setSelection(r(m, l, c), !0)
                }), $(t).closest(".limit_content").find(".profile .range").on("slide", function(t) {
                    var e = $(t.target).data("slider").getValue();
                    m.find("input.range_begin").val(e[0]), m.find("input.range_end").val(e[1]), d.setSelection(i(e[0], Math.max(e[0], e[1] - 1)), !0)
                }), d.setSelection({
                    xaxis: {
                        from: l,
                        to: c + .9999
                    }
                })
            }
        }

        function i(t, e) {
            return e += .99999, {
                xaxis: {
                    from: t,
                    to: e
                }
            }
        }

        function r(t, e, n) {
            var r = parseInt($(t).find("input.range_begin").val());
            (isNaN(r) || e > r) && (r = e);
            var o = parseInt($(t).find("input.range_end").val());
            return (isNaN(o) || o > n) && (o = n), i(r, o)
        }

        function o(t) {
            return function(e) {
                for (var n = t.length - 1; n >= 0; n--) {
                    var i = t[n];
                    if (e >= i.from) return i
                }
                return t[0]
            }
        }

        function a() {
            var t = "undefined" != typeof $.plot,
                e = "undefined" != typeof document.createElement("canvas").getContext || "undefined" != typeof window.CanvasRenderingContext2D || "undefined" != typeof G_vmlCanvasManager;
            return t && e
        }
        var s = 1 / 3.236,
            l = "plotDrawn.blacklight.rangeLimit";
        $(".range_limit .profile .distribution.chart_js ul").each(function() {
            e($(this).parent())
        }), $(".range_limit .profile .distribution a.load_distribution").each(function() {
            var t = $(this).parent("div.distribution");
            $(t).load($(this).attr("href"), function(n, i) {
                $(t).hasClass("chart_js") && "success" == i && e(t)
            })
        }), $("body").on("show.bs.collapse", function(t) {
            var n = $(t.target).filter(".facet-content").find(".chart_js");
            n && 0 == n.find("canvas").size() && e(n, 1100)
        }), $("body").on("shown.bs.collapse", function(e) {
            var n = $(e.target).filter(".facet-content").find(".chart_js");
            t(n)
        }), debounce = function(t, e, n) {
            var i;
            return function() {
                var r = this,
                    o = arguments,
                    a = function() {
                        i = null, n || t.apply(r, o)
                    },
                    s = n && !i;
                clearTimeout(i), i = setTimeout(a, e), s && t.apply(r, o)
            }
        }, $(window).on("resize", debounce(function() {
            $(".chart_js").each(function(e, n) {
                t($(n))
            })
        }, 350))
    }), Blacklight.onLoad(function() {
        function t(t) {
            var e = $(t).closest(".limit_content.range_limit").find(".current"),
                n = max = parseInt(e.find(".single").text());
            return isNaN(n) && (n = parseInt(e.find(".from").first().text()), max = parseInt(e.find(".to").first().text())), (isNaN(n) || isNaN(max)) && (n = parseInt($(t).find(".min").first().text()), max = parseInt($(t).find(".max").first().text())), [n, max]
        }

        function e(t) {
            return t % 1 === 0
        }
        $(".range_limit .profile .range.slider_js").each(function() {
            var n = $(this),
                i = t(this),
                r = i[0],
                o = i[1];
            if (e(r) && e(o)) {
                $(this).contents().wrapAll('<div style="display:none" />');
                var n = $(this),
                    a = $(n).closest(".range_limit").find("form.range_limit"),
                    s = a.find("input.range_begin"),
                    l = a.find("input.range_end"),
                    c = $('<input type="text" data-slider-placeholder="true" style="width:100%;">').appendTo(n);
                if (void 0 !== c.slider) {
                    c.slider({
                        min: r,
                        max: o + 1,
                        value: [r, o + 1],
                        tooltip: "hide"
                    });
                    var u = n.closest(".range_limit"),
                        d = u.find(".chart_js").data("plot"),
                        h = u.find(".slider");
                    d && h ? (h.width(d.width()), h.css("display", "block"), h.css("margin-right", "auto"), h.css("margin-left", "auto")) : h && h.css("width", "100%")
                }
            }
            s.val(r), l.val(o), s.change(function() {
                var t = parseInt($(this).val());
                (isNaN(t) || r > t) && (t = r);
                var e = c.data("slider").getValue();
                e[0] = t, c.slider("setValue", e)
            }), l.change(function() {
                var t = parseInt($(this).val());
                (isNaN(t) || t > o) && (t = o);
                var e = c.data("slider").getValue();
                e[1] = t, c.slider("setValue", e)
            })
        }), $("body").on("plotDrawn.blacklight.rangeLimit", function(t) {
            var e = $(t.target).closest(".limit_content.range_limit"),
                n = e.find(".chart_js").data("plot"),
                i = e.find(".slider");
            n && i && (i.width(n.width()), i.css("display", "block"), i.css("margin-right", "auto"), i.css("margin-left", "auto"))
        })
    }),
    /*!
     Simple JavaScript Templating originally by John Resig:
     http://ejohn.org/blog/javascript-micro-templating/
     Modified by Rick Strahl:
     http://west-wind.com/weblog/posts/2008/Oct/13/Client-Templating-with-jQuery
     MIT Licensed
    */
    function() {
        var t = {};
        this.tmpl = function e(n, i) {
            var r = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/^[\r\t\n ]+/, "").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');") : t[n] = t[n] || e(document.getElementById(n).innerHTML);
            return i ? r(i) : r
        }
    }(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, i, r) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
        },
        easeInQuad: function(t, e, n, i, r) {
            return i * (e /= r) * e + n
        },
        easeOutQuad: function(t, e, n, i, r) {
            return -i * (e /= r) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, r) {
            return i * (e /= r) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, r) {
            return -i * ((e = e / r - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, r) {
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
        },
        easeInExpo: function(t, e, n, i, r) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, r) {
            return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function(t, e, n, i, r) {
            return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a)) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / a) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (a || (a = .3 * r * 1.5), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
        },
        easeOutBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
        },
        easeInBounce: function(t, e, n, i, r) {
            return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, r) {
            return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
        }
    }),
    /*!
    	Stack View - The jQuery virtual stack plugin
    	by The Harvard Library Innovation Lab
    	
    	Dual licensed under MIT and GPL.
    */
    function(t, e, n, i) {
        var r, o, a = "stackView",
            s = {};
        r = {
            init: "stackview.init",
            item_added: "stackview.itemadded",
            item_removed: "stackview.itemremoved",
            page_load: "stackview.pageload"
        };
        var l = function(e) {
                var n;
                return t.each(s, function(t, i) {
                    return i.match(e) ? (n = i, !1) : void 0
                }), n
            },
            c = function(e, n, i) {
                var r = i ? "before" : "append",
                    o = i ? i : e.$element.find(e.options.selectors.item_list);
                t.each(n, function(n, i) {
                    var a, s = l(i);
                    return null == s ? !0 : (a = t(tmpl(s.template, s.adapter(i, e.options))), a.data("stackviewItem", i), void o[r](a))
                }), i && i.remove()
            },
            u = function(t) {
                var e, n = t.options;
                return e = {
                    start: t.page * t.options.items_per_page,
                    limit: t.options.items_per_page,
                    search_type: t.options.search_type,
                    query: t.options.query
                }, "loc_sort_order" === e.search_type && (e.start = 0, 0 === t.page ? (t.loc = {
                    low: n.id - Math.floor(n.items_per_page / 2),
                    high: n.id + Math.floor(n.items_per_page / 2)
                }, e.query = ["[", t.loc.low, " TO ", t.loc.high, "]"].join("")) : "down" === t.direction ? (e.query = ["[", t.loc.high + 1, " TO ", t.loc.high + n.items_per_page + 1, "]"].join(""), t.loc.high = t.loc.high + n.items_per_page + 1) : "up" === t.direction && (e.query = ["[", t.loc.low - n.items_per_page - 1, " TO ", t.loc.low - 1, "]"].join(""), t.loc.low = t.loc.low - n.items_per_page - 1)), e
            },
            d = function(n, i) {
                var r, o = u(n),
                    a = t.param(o);
                n.page++, r = e.stackCache.get(n.options.url + a), r ? i(r) : t.ajax({
                    url: n.options.url,
                    data: a,
                    dataType: n.options.jsonp ? "jsonp" : "json",
                    success: function(t) {
                        e.stackCache.set(n.options.url + o, t, n.options.cache_ttl), i(t)
                    }
                })
            };
        o = function(e, n) {
            this.element = e, this.$element = t(e), this.options = t.extend(!0, {}, o.defaults, n), this.page = 0, this.finished = {
                up: !1,
                down: !1
            }, this.loc = {
                low: null,
                high: null
            }, this.direction = "down", this.init()
        }, t.extend(!0, o, {
            defaults: {
                cache_ttl: 60,
                data: "",
                id: null,
                items_per_page: 10,
                jsonp: !1,
                query: "",
                ribbon: "Stack View",
                search_type: "keyword",
                selectors: {
                    item: ".stack-item",
                    item_list: ".stack-items",
                    ribbon: ".ribbon"
                },
                url: "basic.json"
            },
            utils: {
                get_heat: function(t) {
                    return 100 === t ? 10 : Math.floor(t / 10) + 1
                }
            },
            register_type: function(t) {
                s[t.name] = t
            },
            get_types: function() {
                return s
            }
        }), t.extend(!0, o.prototype, {
            init: function() {
                var t = this;
                this.$element.html(tmpl(o.templates.scaffold, {
                    ribbon: this.options.ribbon
                })).addClass("stackview").bind(r.page_load, function() {
                    t.zIndex()
                }), this.$element.data("stackviewObject", this), this.$element.trigger(r.init), this.next_page()
            },
            next_page: function() {
                var e = t(tmpl(o.templates.placeholder, {})),
                    n = this,
                    i = this.options;
                this.finished.down || (this.direction = "down", i.data ? (c(this, i.data.docs ? i.data.docs : i.data), this.finished.down = !0, this.$element.trigger(r.page_load, [i.data])) : i.url && (this.$element.find(i.selectors.item_list).append(e), d(this, function(t) {
                    c(n, t.docs, e), -1 === parseInt(t.start, 10) && (n.finished.down = !0), n.$element.trigger(r.page_load, [t])
                })))
            },
            prev_page: function() {
                var e = t(tmpl(o.templates.placeholder, {})),
                    n = this.options,
                    i = this,
                    a = i.$element.find(n.selectors.item).first();
                "loc_sort_order" !== n.search_type || this.finished.up || (this.direction = "up", this.$element.find(n.selectors.item_list).prepend(e), d(this, function(t) {
                    var o = a.position().top;
                    c(i, t.docs, e), i.page > 1 && i.$element.find(n.selectors.item_list).animate({
                        scrollTop: "+=" + (a.position().top - o)
                    }, 0), -1 === parseInt(t.start, 10) && (i.finished.up = !0), i.$element.trigger(r.page_load, [t])
                }))
            },
            add: function() {
                var e, n, i, o, a, s, c = this.$element.find(this.options.selectors.item);
                "number" == typeof arguments[0] ? (e = arguments[0], n = arguments[1]) : (e = c.length, n = arguments[0]), e > c.length || 0 > e || (e === c.length ? (a = c.last(), o = "after") : (a = c.eq(e), o = "before"), i = l(n), null != i && (s = t(tmpl(i.template, i.adapter(n, this.options))), s.data("stackviewItem", n), a[o](s), this.zIndex(), this.$element.trigger(r.item_added)))
            },
            remove: function(e) {
                var n, i, o = this.$element.find(this.options.selectors.item);
                return "number" == typeof e ? n = o.eq(e) : e.nodeType || e.jquery ? n = t(e) : o.each(function(i, r) {
                    var o = t(r);
                    return o.data("stackviewItem") === e ? (n = o, !1) : void 0
                }), null != n && n.length ? (n.detach(), i = n.data("stackviewItem"), this.$element.trigger(r.item_removed, [i]), n) : void 0
            },
            getData: function() {
                var e = [];
                return this.$element.find(this.options.selectors.item).each(function() {
                    e.push(t(this).data("stackviewItem"))
                }), e
            },
            zIndex: function(t) {
                for (var e = this.$element.find(this.options.selectors.item), n = e.length, i = 0, r = t ? 0 : e.length - 1; n > i;) e.eq(i).css("z-index", r), r += t ? 1 : -1, i++
            }
        }), t.fn[a] = function(e) {
            var n, r = Array.prototype.slice.call(arguments, 1);
            return this.each(function(a, s) {
                var l = t(s),
                    c = l.data("stackviewObject");
                if (c) {
                    if (c[e]) {
                        var u = c[e].apply(c, r);
                        n === i && u !== i && (n = u)
                    }
                } else new o(s, e)
            }), n === i ? this : n
        }, e.StackView = o
    }(jQuery, window, document),
    function(t) {
        var e, n = t(document);
        t.extend(StackView.defaults, {
            infiniteScrollDistance: 100
        }), e = function(e) {
            var n, i, r, o, a, s, l = t(e.target),
                c = l.data("stackviewObject"),
                r = c.options;
            n = l.find(r.selectors.item_list), i = l.find(r.selectors.item), o = i.length ? i.last().position().top : 0, o += n.scrollTop(), a = o - l.height() - r.infiniteScrollDistance, s = function() {
                "loc_sort_order" === r.search_type && n.scrollTop() <= r.infiniteScrollDistance ? (n.unbind("scroll.stackview"), l.stackView("prev_page")) : n.scrollTop() >= a && (n.unbind("scroll.stackview"), l.stackView("next_page"))
            }, n.bind("scroll.stackview", s), s()
        }, n.delegate(".stackview", "stackview.pageload", e)
    }(jQuery),
    function(t) {
        var e = t(document),
            n = window.StackView;
        t.extend(!0, n.defaults, {
            transitionDuration: 500,
            transitionEasing: "easeOutQuad",
            navigationPercent: 80,
            selectors: {
                downstream: ".downstream",
                upstream: ".upstream",
                num_items: ".num-found span"
            }
        }), e.delegate(".stackview", "stackview.init", function(e) {
            var i = t(e.target),
                r = i.data("stackviewObject"),
                o = i.find(r.options.selectors.item_list),
                a = i.height() * r.options.navigationPercent / 100;
            r.num_found_delta = 0, i.prepend(tmpl(n.templates.navigation, {
                empty: "loc_sort_order" === r.options.search_type
            })), i.delegate(r.options.selectors.downstream, "click", function() {
                return o.animate({
                    scrollTop: "+=" + a
                }, r.options.transitionDuration, r.options.transitionEasing), !1
            }).delegate(r.options.selectors.upstream, "click", function() {
                return o.animate({
                    scrollTop: "-=" + a
                }, r.options.transitionDuration, r.options.transitionEasing), !1
            })
        }).delegate(".stackview", "stackview.pageload", function(e, n) {
            var i, r = t(e.target),
                o = r.data("stackviewObject"),
                a = n.num_found ? parseInt(n.num_found, 10) : n.length;
            o.num_found = a, i = a + o.num_found_delta, r.find(o.options.selectors.num_items).text(i)
        }).delegate(".stackview", "stackview.itemadded stackview.itemremoved", function(e) {
            {
                var n, i = t(e.target),
                    r = i.data("stackviewObject");
                i.find(r.options.selectors.item)
            }
            r.num_found_delta += "itemadded" === e.namespace ? 1 : -1, n = r.num_found + r.num_found_delta, i.find(r.options.selectors.num_items).text(n)
        })
    }(jQuery),
    function(t) {
        var e = t(document),
            n = window.StackView;
        t.extend(!0, n.defaults, {
            classes: {
                ministack: "stackview-mini"
            },
            ministack: {
                breakpoint: 220,
                max_height_percentage: 100,
                min_height_percentage: 80,
                page_multiple: .08
            }
        }), e.delegate(".stackview", "stackview.init", function(e) {
            var n = t(e.target),
                i = n.data("stackviewObject");
            n.width() <= i.options.ministack.breakpoint && (n.addClass(i.options.classes.ministack), t.each(["max_height_percentage", "min_height_percentage", "page_multiple"], function(t, e) {
                i.options.book[e] = i.options.ministack[e]
            }))
        })
    }(jQuery), window.stackCache = function(t) {
        function e(t, e, n) {
            var i = n && new Date(+new Date + 1e3 * n),
                a = {
                    expires: +i,
                    value: e
                };
            if (o) try {
                localStorage[t] = JSON.stringify(a)
            } catch (s) {
                return s
            } else r[t] = a
        }

        function n(t) {
            var e, n;
            return o ? (e = localStorage[t], e && (e = JSON.parse(e))) : e = r[t], e && (e.expires && e.expires < +new Date ? i(t) : n = e.value), n
        }

        function i(t) {
            o ? localStorage.removeItem(t) : delete r[t]
        }
        var r = {},
            o = t.JSON && function() {
                try {
                    return "localStorage" in t && null !== t.localStorage
                } catch (e) {
                    return !1
                }
            }();
        return {
            set: e,
            get: n,
            remove: i
        }
    }(window),
    function() {
        StackView.templates = {
            scaffold: '			<div class="ribbon"><%= ribbon %></div>			<ul class="stack-items" />',
            navigation: '			<div class="stack-navigation<%= empty ? " empty" : ""%>">				<div class="upstream">Up</div>				<div class="num-found">					<span></span><br />items				</div>				<div class="downstream">Down</div>			</div>',
            book: '			<li class="stack-item stack-book heat<%= heat %>" style="width:<%= book_height %>; height:<%= book_thickness %>;">				<a href="<%= link %>" target="_newtab">					<span class="spine-text">						<span class="spine-title"><%= title %></span>						<span class="spine-author"><%= author %></span>					</span>					<span class="spine-year"><%= year %></span>					<span class="stack-pages" />					<span class="stack-cover" />				</a>			</li>',
            placeholder: '<li class="stackview-placeholder"></li>'
        }
    }(),
    function(t, e) {
        t.extend(!0, e.StackView.defaults, {
            book: {
                max_height_percentage: 100,
                max_height: 39,
                max_pages: 540,
                min_height_percentage: 59,
                min_height: 20,
                min_pages: 200,
                page_multiple: .2
            },
            selectors: {
                book: ".stack-book"
            }
        });
        var n = function(t, e, n, i, r) {
                var o = n - e,
                    a = r - i,
                    s = (t - e) / o;
                return i + s * a
            },
            i = function(t, e) {
                var i = parseInt(e.measurement_height_numeric, 10),
                    r = t.book.min_height,
                    o = t.book.max_height;
                return isNaN(i) && (i = r), i = Math.min(Math.max(i, r), o), i = n(i, t.book.min_height, t.book.max_height, t.book.min_height_percentage, t.book.max_height_percentage), i + "%"
            },
            r = function(t, e) {
                var n = parseInt(e.measurement_page_numeric, 10),
                    i = t.book.min_pages,
                    r = t.book.max_pages,
                    o = t.book.page_multiple;
                return isNaN(n) && (n = i), n = Math.min(Math.max(n, i), r) * o, n + "px"
            },
            o = function(t) {
                return t.title_link_friendly ? "../shelflife/book/" + t.title_link_friendly + "/" + t.id : t.link
            },
            a = function(t) {
                var e = t.creator && t.creator.length ? t.creator[0] : "";
                return /^([^,]*)/.test(e) && (e = e.match(/^[^,]*/)), e
            };
        e.StackView.register_type({
            name: "book",
            match: function(t) {
                return t.format && "book" === t.format || !t.format
            },
            adapter: function(t, n) {
                return {
                    heat: e.StackView.utils.get_heat(t.shelfrank),
                    book_height: i(n, t),
                    book_thickness: r(n, t),
                    link: o(t),
                    title: t.title,
                    author: a(t),
                    year: t.pub_date
                }
            },
            template: '			<li class="stack-item stack-book heat<%= heat %>" style="width:<%= book_height %>; height:<%= book_thickness %>;">				<a href="<%= link %>" target="_blank">					<span class="spine-text">						<span class="spine-title"><%= title %></span>						<span class="spine-author"><%= author %></span>					</span>					<span class="spine-year"><%= year %></span>					<span class="stack-pages" />					<span class="stack-cover" />				</a>			</li>'
        })
    }(jQuery, window),
    function(t, e) {
        t.extend(!0, e.StackView.defaults, {
            selectors: {
                serial: ".stack-serial"
            }
        }), e.StackView.register_type({
            name: "serial",
            match: function(t) {
                return "Serial" === t.format
            },
            adapter: function(t) {
                return {
                    heat: e.StackView.utils.get_heat(t.shelfrank),
                    title: t.title,
                    link: t.link
                }
            },
            template: '			<li class="stack-item stack-serial heat<%= heat %>">				<a href="<%= link %>" target="_blank">					<span class="spine-text">						<span class="spine-title"><%= title %></span>					</span>					<span class="serial-edge" />					<span class="serial-cover" />				</a>			</li>'
        })
    }(jQuery, window),
    function(t, e) {
        t.extend(!0, e.StackView.defaults, {
            selectors: {
                soundrecording: ".stack-soundrecording"
            }
        }), e.StackView.register_type({
            name: "soundrecording",
            match: function(t) {
                return "Sound Recording" === t.format
            },
            adapter: function(t) {
                return {
                    heat: e.StackView.utils.get_heat(t.shelfrank),
                    link: t.link || "#",
                    title: t.title,
                    year: t.pub_date
                }
            },
            template: '			<li class="stack-item stack-soundrecording heat<%= heat %>">				<a href="<%= link %>" target="_blank">						<span class="spine-text">							<span class="spine-title"><%= title %></span>						</span>						<span class="spine-year"><%= year %></span>						<span class="sound-edge"></span>						<span class="sound-cover"></span>				</a>			</li>'
        })
    }(jQuery, window),
    function(t, e) {
        t.extend(!0, e.StackView.defaults, {
            selectors: {
                videofilm: ".stack-videofilm"
            }
        });
        var n = function(t) {
            return t.link || t.title || "#"
        };
        e.StackView.register_type({
            name: "videofilm",
            match: function(t) {
                return "Video/Film" === t.format
            },
            adapter: function(t) {
                return {
                    heat: e.StackView.utils.get_heat(t.shelfrank),
                    height: "65%",
                    title: t.title,
                    year: t.pub_date,
                    link: n(t)
                }
            },
            template: '			<li class="stack-item stack-videofilm heat<%= heat %>" style="width:<%= height %>;">				<a href="<%= link %>" target="_blank">					<span class="spine-text">						<span class="spine-title"><%= title %></span>					</span>					<span class="spine-year"><%= year %></span>					<span class="videofilm-edge" />					<span class="videofilm-cover" />				</a>			</li>'
        })
    }(jQuery, window),
    function(t, e) {
        t.extend(!0, e.StackView.defaults, {
            selectors: {
                webpage: ".stack-webpage"
            }
        }), e.StackView.register_type({
            name: "webpage",
            match: function(t) {
                return "webpage" === t.format
            },
            adapter: function(t) {
                return {
                    heat: e.StackView.utils.get_heat(t.shelfrank),
                    link: t.rsrc_value || t.link,
                    publisher: t.publisher,
                    title: t.title
                }
            },
            template: '			<li class="stack-item stack-webpage heat<%= heat %>">				<a href="<%= link %>" target="_blank">					<span class="url-bar">						<span class="url-publisher"><%= publisher %>:</span>						<span class="url-title"><%= title %></span>					</span>					<span class="webpage-top"></span>					<span class="webpage-edge"></span>				</a>			</li>'
        })
    }(jQuery, window);