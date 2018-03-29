function canScanItem(t, e, n) {
    t = (t || "").toLowerCase(), e = (e || "").toLowerCase();
    return "available" == (n = (n || "").toLowerCase()) && ("annex" == t && ("book" == e || "periodical title" == e))
}

function easyScanFullLink(t, e, n) {
    return t + "&title=" + n + "&bibnum=" + e
}

function itemRequestFullLink(t, e) {
    return "https://library.brown.edu/easyrequest/login/?bibnum=" + e + "&barcode=" + t
}

function jcbRequestFullLink(t, e, n, i, r) {
    return "https://jcbl.aeon.atlas-sys.com/aeon.dll?Action=10&Form=30&ReferenceNumber=" + t + "&ItemTitle=" + extractTitle(e) + "&ItemAuthor=" + extractAuthor(n) + "&ItemPublisher=" + i + "&CallNumber=" + r + "&ItemInfo2="
}

function hayAeonFullLink(t, e, n, i, r, a) {
    return "https://brown.aeon.atlas-sys.com/logon/" + "?Action=10&Form=30&ReferenceNumber=" + t + "&ItemTitle=" + extractTitle(e) + "&ItemAuthor=" + extractAuthor(n) + "&ItemPublisher=" + i + "&CallNumber=" + r + "&Location=" + a + "&ItemInfo2="
}

function isValidHayAeonLocation(t) {
    var e = !1,
        n = hay_aeon_exclusions;
    "HAY" == t.slice(0, 3) && (-1 == n.indexOf(t) && (e = !0));
    return e
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
        var e = !!t && "length" in t && t.length,
            n = pt.type(t);
        return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e, n) {
        if (pt.isFunction(e)) return pt.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return pt.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (Tt.test(e)) return pt.filter(e, t, n);
            e = pt.filter(e, t)
        }
        return pt.grep(t, function(t) {
            return pt.inArray(t, e) > -1 !== n
        })
    }

    function r(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }

    function a(t) {
        var e = {};
        return pt.each(t.match(Nt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function o() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s)) : (it.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }

    function s() {
        (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (o(), pt.ready())
    }

    function l(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var i = "data-" + e.replace(It, "-$1").toLowerCase();
            if ("string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $t.test(n) ? pt.parseJSON(n) : n)
                } catch (r) {}
                pt.data(t, e, n)
            } else n = undefined
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (Dt(t)) {
            var r, a, o = pt.expando,
                s = t.nodeType,
                l = s ? pt.cache : t,
                u = s ? t[o] : t[o] && o;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof e) return u || (u = s ? t[o] = nt.pop() || pt.guid++ : o), l[u] || (l[u] = s ? {} : {
                toJSON: pt.noop
            }), "object" != typeof e && "function" != typeof e || (i ? l[u] = pt.extend(l[u], e) : l[u].data = pt.extend(l[u].data, e)), a = l[u], i || (a.data || (a.data = {}), a = a.data), n !== undefined && (a[pt.camelCase(e)] = n), "string" == typeof e ? null == (r = a[e]) && (r = a[pt.camelCase(e)]) : r = a, r
        }
    }

    function d(t, e, n) {
        if (Dt(t)) {
            var i, r, a = t.nodeType,
                o = a ? pt.cache : t,
                s = a ? t[pt.expando] : pt.expando;
            if (o[s]) {
                if (e && (i = n ? o[s] : o[s].data)) {
                    r = (e = pt.isArray(e) ? e.concat(pt.map(e, pt.camelCase)) : e in i ? [e] : (e = pt.camelCase(e)) in i ? [e] : e.split(" ")).length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !u(i) : !pt.isEmptyObject(i)) return
                }(n || (delete o[s].data, u(o[s]))) && (a ? pt.cleanData([t], !0) : dt.deleteExpando || o != o.window ? delete o[s] : o[s] = undefined)
            }
        }
    }

    function f(t, e, n, i) {
        var r, a = 1,
            o = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return pt.css(t, e, "")
            },
            l = s(),
            u = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
            c = (pt.cssNumber[e] || "px" !== u && +l) && Bt.exec(pt.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                c /= a = a || ".5", pt.style(t, e, c + u)
            } while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function p(t) {
        var e = Qt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function h(t, e) {
        var n, i, r = 0,
            a = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!a)
            for (a = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || pt.nodeName(i, e) ? a.push(i) : pt.merge(a, h(i, e));
        return e === undefined || e && pt.nodeName(t, e) ? pt.merge([t], a) : a
    }

    function m(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"))
    }

    function g(t) {
        Wt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, n, i, r) {
        for (var a, o, s, l, u, c, d, f = t.length, v = p(e), y = [], b = 0; b < f; b++)
            if ((o = t[b]) || 0 === o)
                if ("object" === pt.type(o)) pt.merge(y, o.nodeType ? [o] : o);
                else if (Gt.test(o)) {
            for (l = l || v.appendChild(e.createElement("div")), u = (zt.exec(o) || ["", ""])[1].toLowerCase(), d = Xt[u] || Xt._default, l.innerHTML = d[1] + pt.htmlPrefilter(o) + d[2], a = d[0]; a--;) l = l.lastChild;
            if (!dt.leadingWhitespace && Ut.test(o) && y.push(e.createTextNode(Ut.exec(o)[0])), !dt.tbody)
                for (a = (o = "table" !== u || Yt.test(o) ? "<table>" !== d[1] || Yt.test(o) ? 0 : l : l.firstChild) && o.childNodes.length; a--;) pt.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
            for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(e.createTextNode(o));
        for (l && v.removeChild(l), dt.appendChecked || pt.grep(h(y, "input"), g), b = 0; o = y[b++];)
            if (i && pt.inArray(o, i) > -1) r && r.push(o);
            else if (s = pt.contains(o.ownerDocument, o), l = h(v.appendChild(o), "script"), s && m(l), n)
            for (a = 0; o = l[a++];) Vt.test(o.type || "") && n.push(o);
        return l = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return it.activeElement
        } catch (t) {}
    }

    function w(t, e, n, i, r, a) {
        var o, s;
        if ("object" == typeof e) {
            for (s in "string" != typeof n && (i = i || n, n = undefined), e) w(t, s, n, i, e[s], a);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = b;
        else if (!r) return t;
        return 1 === a && (o = r, (r = function(t) {
            return pt().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = pt.guid++)), t.each(function() {
            pt.event.add(this, e, r, i, n)
        })
    }

    function k(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function T(t) {
        return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = se.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function C(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var n, i, r, a = pt._data(t),
                o = pt._data(e, a),
                s = a.events;
            if (s)
                for (n in delete o.handle, o.events = {}, s)
                    for (i = 0, r = s[n].length; i < r; i++) pt.event.add(e, n, s[n][i]);
            o.data && (o.data = pt.extend({}, o.data))
        }
    }

    function S(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[pt.expando]) {
                for (i in (r = pt._data(e)).events) pt.removeEvent(e, i, r.handle);
                e.removeAttribute(pt.expando)
            }
            "script" === n && e.text !== t.text ? (T(e).text = t.text, _(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Wt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function E(t, e, n, i) {
        e = at.apply([], e);
        var r, a, o, s, l, u, c = 0,
            d = t.length,
            f = d - 1,
            p = e[0],
            m = pt.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !dt.checkClone && oe.test(p)) return t.each(function(r) {
            var a = t.eq(r);
            m && (e[0] = p.call(this, r, a.html())), E(a, e, n, i)
        });
        if (d && (r = (u = v(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (o = (s = pt.map(h(u, "script"), T)).length; c < d; c++) a = u, c !== f && (a = pt.clone(a, !0, !0), o && pt.merge(s, h(a, "script"))), n.call(t[c], a, c);
            if (o)
                for (l = s[s.length - 1].ownerDocument, pt.map(s, _), c = 0; c < o; c++) a = s[c], Vt.test(a.type || "") && !pt._data(a, "globalEval") && pt.contains(l, a) && (a.src ? pt._evalUrl && pt._evalUrl(a.src) : pt.globalEval((a.text || a.textContent || a.innerHTML || "").replace(le, "")));
            u = r = null
        }
        return t
    }

    function j(t, e, n) {
        for (var i, r = e ? pt.filter(e, t) : t, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || pt.cleanData(h(i)), i.parentNode && (n && pt.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function M(t, e) {
        var n = pt(e.createElement(t)).appendTo(e.body),
            i = pt.css(n[0], "display");
        return n.detach(), i
    }

    function N(t) {
        var e = it,
            n = de[t];
        return n || ("none" !== (n = M(t, e)) && n || ((e = ((ce = (ce || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ce[0].contentDocument).document).write(), e.close(), n = M(t, e), ce.detach()), de[t] = n), n
    }

    function A(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function D(t) {
        if (t in Se) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)
            if ((t = Ce[n] + e) in Se) return t
    }

    function $(t, e) {
        for (var n, i, r, a = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (a[o] = pt._data(i, "olddisplay"), n = i.style.display, e ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ft(i) && (a[o] = pt._data(i, "olddisplay", N(i.nodeName)))) : (r = Ft(i), (n && "none" !== n || !r) && pt._data(i, "olddisplay", r ? n : pt.css(i, "display"))));
        for (o = 0; o < s; o++)(i = t[o]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? a[o] || "" : "none"));
        return t
    }

    function I(t, e, n) {
        var i = ke.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function O(t, e, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += pt.css(t, n + Ht[a], !0, r)), i ? ("content" === n && (o -= pt.css(t, "padding" + Ht[a], !0, r)), "margin" !== n && (o -= pt.css(t, "border" + Ht[a] + "Width", !0, r))) : (o += pt.css(t, "padding" + Ht[a], !0, r), "padding" !== n && (o += pt.css(t, "border" + Ht[a] + "Width", !0, r)));
        return o
    }

    function L(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            a = ge(t),
            o = dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, a);
        if (r <= 0 || null == r) {
            if (((r = ve(t, e, a)) < 0 || null == r) && (r = t.style[e]), pe.test(r)) return r;
            i = o && (dt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + O(t, e, n || (o ? "border" : "content"), i, a) + "px"
    }

    function P(t, e, n, i, r) {
        return new P.prototype.init(t, e, n, i, r)
    }

    function R() {
        return t.setTimeout(function() {
            Ee = undefined
        }), Ee = pt.now()
    }

    function B(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = Ht[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function H(t, e, n) {
        for (var i, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), a = 0, o = r.length; a < o; a++)
            if (i = r[a].call(n, e, t)) return i
    }

    function F(t, e, n) {
        var i, r, a, o, s, l, u, c = this,
            d = {},
            f = t.style,
            p = t.nodeType && Ft(t),
            h = pt._data(t, "fxshow");
        for (i in n.queue || (null == (s = pt._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, pt.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = pt.css(t, "display")) ? pt._data(t, "olddisplay") || N(t.nodeName) : u) && "none" === pt.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", dt.shrinkWrapBlocks() || c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), e)
            if (r = e[i], Ie.exec(r)) {
                if (delete e[i], a = a || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !h || h[i] === undefined) continue;
                    p = !0
                }
                d[i] = h && h[i] || pt.style(t, i)
            } else u = undefined;
        if (pt.isEmptyObject(d)) "inline" === ("none" === u ? N(t.nodeName) : u) && (f.display = u);
        else
            for (i in h ? "hidden" in h && (p = h.hidden) : h = pt._data(t, "fxshow", {}), a && (h.hidden = !p), p ? pt(t).show() : c.done(function() {
                    pt(t).hide()
                }), c.done(function() {
                    var e;
                    for (e in pt._removeData(t, "fxshow"), d) pt.style(t, e, d[e])
                }), d) o = H(p ? h[i] : 0, i, c), i in h || (h[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
    }

    function q(t, e) {
        var n, i, r, a, o;
        for (n in t)
            if (r = e[i = pt.camelCase(n)], a = t[n], pt.isArray(a) && (r = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), (o = pt.cssHooks[i]) && "expand" in o)
                for (n in a = o.expand(a), delete t[i], a) n in t || (t[n] = a[n], e[n] = r);
            else e[i] = r
    }

    function W(t, e, n) {
        var i, r, a = 0,
            o = W.prefilters.length,
            s = pt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Ee || R(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), a = 0, o = u.tweens.length; a < o; a++) u.tweens[a].run(i);
                return s.notifyWith(t, [u, i, n]), i < 1 && o ? n : (s.resolveWith(t, [u]), !1)
            },
            u = s.promise({
                elem: t,
                props: pt.extend({}, e),
                opts: pt.extend(!0, {
                    specialEasing: {},
                    easing: pt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ee || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = pt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (q(c, u.opts.specialEasing); a < o; a++)
            if (i = W.prefilters[a].call(u, t, c, u.opts)) return pt.isFunction(i.stop) && (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(i.stop, i)), i;
        return pt.map(c, H, u), pt.isFunction(u.opts.start) && u.opts.start.call(t, u), pt.fx.timer(pt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(t) {
        return pt.attr(t, "class") || ""
    }

    function V(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                a = e.toLowerCase().match(Nt) || [];
            if (pt.isFunction(n))
                for (; i = a[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function U(t, e, n, i) {
        function r(s) {
            var l;
            return a[s] = !0, pt.each(t[s] || [], function(t, s) {
                var u = s(e, n, i);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var a = {},
            o = t === on;
        return r(e.dataTypes[0]) || !a["*"] && r("*")
    }

    function Q(t, e) {
        var n, i, r = pt.ajaxSettings.flatOptions || {};
        for (i in e) e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && pt.extend(!0, t, n), t
    }

    function X(t, e, n) {
        for (var i, r, a, o, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), r === undefined && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                i || (i = o)
            }
            a = a || i
        }
        if (a) return a !== l[0] && l.unshift(a), n[a]
    }

    function G(t, e, n, i) {
        var r, a, o, s, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (a = c.shift(); a;)
            if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (!(o = u[l + " " + a] || u["* " + a]))
                for (r in u)
                    if ((s = r.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== o)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: o ? d : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Y(t) {
        return t.style && t.style.display || pt.css(t, "display")
    }

    function J(t) {
        if (!pt.contains(t.ownerDocument || it, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === Y(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function K(t, e, n, i) {
        var r;
        if (pt.isArray(e)) pt.each(e, function(e, r) {
            n || dn.test(t) ? i(t, r) : K(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== pt.type(e)) i(t, e);
        else
            for (r in e) K(t + "[" + r + "]", e[r], n, i)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function et(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
        it = t.document,
        rt = nt.slice,
        at = nt.concat,
        ot = nt.push,
        st = nt.indexOf,
        lt = {},
        ut = lt.toString,
        ct = lt.hasOwnProperty,
        dt = {},
        ft = "1.12.4",
        pt = function(t, e) {
            return new pt.fn.init(t, e)
        },
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    pt.fn = pt.prototype = {
        jquery: ft,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function() {
            return rt.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
        },
        pushStack: function(t) {
            var e = pt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return pt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(pt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ot,
        sort: nt.sort,
        splice: nt.splice
    }, pt.extend = pt.fn.extend = function() {
        var t, e, n, i, r, a, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || pt.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
            if (null != (r = arguments[s]))
                for (i in r) t = o[i], o !== (n = r[i]) && (u && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1, a = t && pt.isArray(t) ? t : []) : a = t && pt.isPlainObject(t) ? t : {}, o[i] = pt.extend(u, a, n)) : n !== undefined && (o[i] = n));
        return o
    }, pt.extend({
        expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === pt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === pt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t) return ct.call(t, e);
            for (e in t);
            return e === undefined || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && pt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(gt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; r < i && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ht, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? pt.merge(i, "string" == typeof t ? [t] : t) : ot.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (st) return st.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
            if (n != n)
                for (; e[i] !== undefined;) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, a = t.length, o = !n; r < a; r++) !e(t[r], r) !== o && i.push(t[r]);
            return i
        },
        map: function(t, e, i) {
            var r, a, o = 0,
                s = [];
            if (n(t))
                for (r = t.length; o < r; o++) null != (a = e(t[o], o, i)) && s.push(a);
            else
                for (o in t) null != (a = e(t[o], o, i)) && s.push(a);
            return at.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), pt.isFunction(t) ? (n = rt.call(arguments, 2), (i = function() {
                return t.apply(e || this, n.concat(rt.call(arguments)))
            }).guid = t.guid = t.guid || pt.guid++, i) : undefined
        },
        now: function() {
            return +new Date
        },
        support: dt
    }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
        function e(t, e, n, i) {
            var r, a, o, s, l, u, d, p, h = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((e ? e.ownerDocument || e : H) !== D && A(e), e = e || D, I)) {
                if (11 !== m && (u = vt.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(o = e.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (h && (o = h.getElementById(r)) && R(e, o) && o.id === r) return n.push(o), n
                    } else {
                        if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
                    }
                if (w.qsa && !V[t + " "] && (!O || !O.test(t))) {
                    if (1 !== m) h = e, p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(bt, "\\$&") : e.setAttribute("id", s = B), a = (d = C(t)).length, l = ft.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = l + " " + f(d[a]);
                        p = d.join(","), h = yt.test(t) && c(e.parentNode) || e
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)), n
                    } catch (g) {} finally {
                        s === B && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(st, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[B] = !0, t
        }

        function r(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function a(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = e
        }

        function o(t, e) {
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
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, a = t([], n.length, e), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function f(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                a = q++;
            return e.first ? function(e, n, a) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, a)
            } : function(e, n, o) {
                var s, l, u, c = [F, a];
                if (o) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if ((s = (l = (u = e[B] || (e[B] = {}))[e.uniqueID] || (u[e.uniqueID] = {}))[i]) && s[0] === F && s[1] === a) return c[2] = s[2];
                            if (l[i] = c, c[2] = t(e, n, o)) return !0
                        }
            }
        }

        function h(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, a = n.length; r < a; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var a, o = [], s = 0, l = t.length, u = null != e; s < l; s++)(a = t[s]) && (n && !n(a, i, r) || (o.push(a), u && e.push(s)));
            return o
        }

        function v(t, e, n, r, a, o) {
            return r && !r[B] && (r = v(r)), a && !a[B] && (a = v(a, o)), i(function(i, o, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = o.length,
                    v = i || m(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !i && e ? v : g(v, f, t, s, l),
                    b = n ? a || (i ? t : h || r) ? [] : o : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (a || t) {
                        if (a) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            a(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = a ? tt(i, d) : f[c]) > -1 && (i[u] = !(o[u] = d))
                    }
                } else b = g(b === o ? b.splice(h, b.length) : b), a ? a(null, o, b, l) : K.apply(o, b)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, a = k.relative[t[0].type], o = a || k.relative[" "], s = a ? 1 : 0, l = p(function(t) {
                    return t === e
                }, o, !0), u = p(function(t) {
                    return tt(e, t) > -1
                }, o, !0), c = [function(t, n, i) {
                    var r = !a && (i || n !== j) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                    return e = null, r
                }]; s < r; s++)
                if (n = k.relative[t[s].type]) c = [p(h(c), n)];
                else {
                    if ((n = k.filter[t[s].type].apply(null, t[s].matches))[B]) {
                        for (i = ++s; i < r && !k.relative[t[i].type]; i++);
                        return v(s > 1 && h(c), s > 1 && f(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), n, s < i && y(t.slice(s, i)), i < r && y(t = t.slice(i)), i < r && f(t))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(t, n) {
            var r = n.length > 0,
                a = t.length > 0,
                o = function(i, o, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = j,
                        b = i || a && k.find.TAG("*", u),
                        x = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (j = o === D || o || u); h !== w && null != (c = b[h]); h++) {
                        if (a && c) {
                            for (d = 0, o || c.ownerDocument === D || (A(c), s = !I); f = t[d++];)
                                if (f(c, o || D, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (F = x)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, o, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Y.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (F = x, j = y), m
                };
            return r ? i(o) : o
        }
        var x, w, k, T, _, C, S, E, j, M, N, A, D, $, I, O, L, P, R, B = "sizzle" + 1 * new Date,
            H = t.document,
            F = 0,
            q = 0,
            W = n(),
            z = n(),
            V = n(),
            U = function(t, e) {
                return t === e && (N = !0), 0
            },
            Q = 1 << 31,
            X = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(at),
            ft = new RegExp("^" + it + "$"),
            pt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            wt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            kt = function() {
                A()
            };
        try {
            K.apply(G = Z.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
        } catch (Tt) {
            K = {
                apply: G.length ? function(t, e) {
                    J.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        for (x in w = e.support = {}, _ = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, A = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : H;
                return i !== D && 9 === i.nodeType && i.documentElement ? ($ = (D = i).documentElement, I = !_(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = gt.test(D.getElementsByClassName), w.getById = r(function(t) {
                    return $.appendChild(t).id = B, !D.getElementsByName || !D.getElementsByName(B).length
                }), w.getById ? (k.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, k.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), k.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        a = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, k.find.CLASS = w.getElementsByClassName && function(t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && I) return e.getElementsByClassName(t)
                }, L = [], O = [], (w.qsa = gt.test(D.querySelectorAll)) && (r(function(t) {
                    $.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + B + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || O.push(".#.+[+~]")
                }), r(function(t) {
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = gt.test(P = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), L.push("!=", at)
                }), O = O.length && new RegExp(O.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test($.compareDocumentPosition), R = e || gt.test($.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && R(H, t) ? -1 : e === D || e.ownerDocument === H && R(H, e) ? 1 : M ? tt(M, t) - tt(M, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        s = [t],
                        l = [e];
                    if (!r || !a) return t === D ? -1 : e === D ? 1 : r ? -1 : a ? 1 : M ? tt(M, t) - tt(M, e) : 0;
                    if (r === a) return o(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? o(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
                }, D) : D
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== D && A(t), n = n.replace(ct, "='$1']"), w.matchesSelector && I && !V[n + " "] && (!L || !L.test(n)) && (!O || !O.test(n))) try {
                    var i = P.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (Tt) {}
                return e(n, D, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && A(t), R(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && A(t);
                var n = k.attrHandle[e.toLowerCase()],
                    i = n && X.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !I) : undefined;
                return i !== undefined ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (N = !w.detectDuplicates, M = !w.sortStable && t.slice(0), t.sort(U), N) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return M = null, t
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
            }, (k = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
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
                        return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var a = e.attr(r, t);
                            return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var a = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, d, f, p, h, m = a !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (f = e; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = m = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (b = (p = (u = (c = (d = (f = g)[B] || (f[B] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === F && u[1]) && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === e) {
                                            c[t] = [F, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (u = (c = (d = (f = e)[B] || (f[B] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === F && u[1]), !1 === b)
                                    for (;
                                        (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[B] || (f[B] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] = [F, b]), f !== e)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, a = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return a[B] ? a(n) : a.length > 1 ? (r = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = a(t, n), o = r.length; o--;) t[i = tt(t, r[o])] = !(e[i] = r[o])
                        }) : function(t) {
                            return a(t, 0, r)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = S(t.replace(st, "$1"));
                        return r[B] ? i(function(t, e, n, i) {
                            for (var a, o = r(t, null, i, []), s = t.length; s--;)(a = o[s]) && (t[s] = !(e[s] = a))
                        }) : function(t, i, a) {
                            return e[0] = t, r(e, null, a, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(xt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === $
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
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
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ht.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = k.pseudos.eq, {
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
            var i, r, a, o, s, l, u, c = z[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = t, l = [], u = k.preFilter; s;) {
                for (o in i && !(r = lt.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ut.exec(s)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(st, " ")
                    }), s = s.slice(i.length)), k.filter) !(r = pt[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: o,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? e.error(t) : z(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                a = V[t + " "];
            if (!a) {
                for (e || (e = C(t)), n = e.length; n--;)(a = y(e[n]))[B] ? i.push(a) : r.push(a);
                (a = V(t, b(r, i))).selector = t
            }
            return a
        }, E = e.select = function(t, e, n, i) {
            var r, a, o, s, l, u = "function" == typeof t && t,
                d = !i && C(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if ((a = d[0] = d[0].slice(0)).length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === e.nodeType && I && k.relative[a[1].type]) {
                    if (!(e = (k.find.ID(o.matches[0].replace(xt, wt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(a.shift().value.length)
                }
                for (r = pt.needsContext.test(t) ? 0 : a.length; r-- && (o = a[r], !k.relative[s = o.type]);)
                    if ((l = k.find[s]) && (i = l(o.matches[0].replace(xt, wt), yt.test(a[0].type) && c(e.parentNode) || e))) {
                        if (a.splice(r, 1), !(t = i.length && f(a))) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || S(t, d))(i, e, !I, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, w.sortStable = B.split("").sort(U).join("") === B, w.detectDuplicates = !!N, A(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || a("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || a(et, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    pt.find = yt, pt.expr = yt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = yt.uniqueSort, pt.text = yt.getText, pt.isXMLDoc = yt.isXML, pt.contains = yt.contains;
    var bt = function(t, e, n) {
            for (var i = [], r = n !== undefined;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && pt(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        xt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = pt.expr.match.needsContext,
        kt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Tt = /^.[^:#\[\.,]*$/;
    pt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? pt.find.matchesSelector(i, t) ? [i] : [] : pt.find.matches(t, pt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, pt.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
                for (e = 0; e < r; e++)
                    if (pt.contains(i[e], this)) return !0
            }));
            for (e = 0; e < r; e++) pt.find(t, i[e], n);
            return (n = this.pushStack(r > 1 ? pt.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && wt.test(t) ? pt(t) : t || [], !1).length
        }
    });
    var _t, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pt.fn.init = function(t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || _t, "string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), kt.test(i[1]) && pt.isPlainObject(e))
                    for (i in e) pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((r = it.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return _t.find(t);
                this.length = 1, this[0] = r
            }
            return this.context = it, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(pt) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
    }).prototype = pt.fn, _t = pt(it);
    var St = /^(?:parents|prev(?:Until|All))/,
        Et = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pt.fn.extend({
        has: function(t) {
            var e, n = pt(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (pt.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, a = [], o = wt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? pt.uniqueSort(a) : a)
        },
        index: function(t) {
            return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), pt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
        }
    }, function(t, e) {
        pt.fn[t] = function(n, i) {
            var r = pt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = pt.filter(i, r)), this.length > 1 && (Et[t] || (r = pt.uniqueSort(r)), St.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var jt, Mt, Nt = /\S+/g;
    for (Mt in pt.Callbacks = function(t) {
            t = "string" == typeof t ? a(t) : pt.extend({}, t);
            var e, n, i, r, o = [],
                s = [],
                l = -1,
                u = function() {
                    for (r = t.once, i = e = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && t.stopOnFalse && (l = o.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (n && !e && (l = o.length - 1, s.push(n)), function i(e) {
                            pt.each(e, function(e, n) {
                                pt.isFunction(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== pt.type(n) && i(n)
                            })
                        }(arguments), n && !e && u()), this
                    },
                    remove: function() {
                        return pt.each(arguments, function(t, e) {
                            for (var n;
                                (n = pt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? pt.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = !0, n || c.disable(), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, pt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pt.Callbacks("memory")]
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
                            return pt.Deferred(function(n) {
                                pt.each(e, function(e, a) {
                                    var o = pt.isFunction(t[e]) && t[e];
                                    r[a[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && pt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? pt.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, pt.each(e, function(t, a) {
                    var o = a[2],
                        s = a[3];
                    i[a[1]] = o.add, s && o.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[a[0]] = function() {
                        return r[a[0] + "With"](this === r ? i : this, arguments), this
                    }, r[a[0] + "With"] = o.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    a = rt.call(arguments),
                    o = a.length,
                    s = 1 !== o || t && pt.isFunction(t.promise) ? o : 0,
                    l = 1 === s ? t : pt.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) a[r] && pt.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, e)).done(u(r, i, a)).fail(l.reject) : --s;
                return s || l.resolveWith(i, a), l.promise()
            }
        }), pt.fn.ready = function(t) {
            return pt.ready.promise().done(t), this
        }, pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? pt.readyWait++ : pt.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, !0 !== t && --pt.readyWait > 0 || (jt.resolveWith(it, [pt]), pt.fn.triggerHandler && (pt(it).triggerHandler("ready"), pt(it).off("ready"))))
            }
        }), pt.ready.promise = function(e) {
            if (!jt)
                if (jt = pt.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) t.setTimeout(pt.ready);
                else if (it.addEventListener) it.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s);
            else {
                it.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (i) {}
                n && n.doScroll && function r() {
                    if (!pt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (i) {
                            return t.setTimeout(r, 50)
                        }
                        o(), pt.ready()
                    }
                }()
            }
            return jt.promise(e)
        }, pt.ready.promise(), pt(dt)) break;
    dt.ownFirst = "0" === Mt, dt.inlineBlockNeedsLayout = !1, pt(function() {
            var t, e, n, i;
            (n = it.getElementsByTagName("body")[0]) && n.style && (e = it.createElement("div"), (i = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = it.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                dt.deleteExpando = !1
            }
            t = null
        }();
    var At, Dt = function(t) {
            var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
        },
        $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        It = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]) && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }), pt.fn.extend({
        data: function(t, e) {
            var n, i, r, a = this[0],
                o = a && a.attributes;
            if (t === undefined) {
                if (this.length && (r = pt.data(a), 1 === a.nodeType && !pt._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && l(a, i = pt.camelCase(i.slice(5)), r[i]);
                    pt._data(a, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                pt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                pt.data(this, t, e)
            }) : a ? l(a, t, pt.data(a, t)) : undefined
        },
        removeData: function(t) {
            return this.each(function() {
                pt.removeData(this, t)
            })
        }
    }), pt.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = pt._data(t, e), n && (!i || pt.isArray(n) ? i = pt._data(t, e, pt.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = pt.queue(t, e),
                i = n.length,
                r = n.shift(),
                a = pt._queueHooks(t, e),
                o = function() {
                    pt.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete a.stop, r.call(t, o, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return pt._data(t, n) || pt._data(t, n, {
                empty: pt.Callbacks("once memory").add(function() {
                    pt._removeData(t, e + "queue"), pt._removeData(t, n)
                })
            })
        }
    }), pt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? pt.queue(this[0], t) : e === undefined ? this : this.each(function() {
                var n = pt.queue(this, t, e);
                pt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                pt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = pt.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --i || r.resolveWith(a, [a])
                };
            for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; o--;)(n = pt._data(a[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e)
        }
    }), dt.shrinkWrapBlocks = function() {
        return null != At ? At : (At = !1, (e = it.getElementsByTagName("body")[0]) && e.style ? (t = it.createElement("div"), (n = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(it.createElement("div")).style.width = "5px", At = 3 !== t.offsetWidth), e.removeChild(n), At) : void 0);
        var t, e, n
    };
    var Ot, Lt, Pt, Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Bt = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$", "i"),
        Ht = ["Top", "Right", "Bottom", "Left"],
        Ft = function(t, e) {
            return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
        },
        qt = function(t, e, n, i, r, a, o) {
            var s = 0,
                l = t.length,
                u = null == n;
            if ("object" === pt.type(n))
                for (s in r = !0, n) qt(t, e, s, n[s], !0, a, o);
            else if (i !== undefined && (r = !0, pt.isFunction(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(pt(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, o ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : a
        },
        Wt = /^(?:checkbox|radio)$/i,
        zt = /<([\w:-]+)/,
        Vt = /^$|\/(?:java|ecma)script/i,
        Ut = /^\s+/,
        Qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Ot = it.createElement("div"), Lt = it.createDocumentFragment(), Pt = it.createElement("input"), Ot.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === Ot.firstChild.nodeType, dt.tbody = !Ot.getElementsByTagName("tbody").length, dt.htmlSerialize = !!Ot.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, Pt.type = "checkbox", Pt.checked = !0, Lt.appendChild(Pt), dt.appendChecked = Pt.checked, Ot.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!Ot.cloneNode(!0).lastChild.defaultValue, Lt.appendChild(Ot), (Pt = it.createElement("input")).setAttribute("type", "radio"), Pt.setAttribute("checked", "checked"), Pt.setAttribute("name", "t"), Ot.appendChild(Pt), dt.checkClone = Ot.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!Ot.addEventListener, Ot[pt.expando] = 1, dt.attributes = !Ot.getAttribute(pt.expando);
    var Xt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
    var Gt = /<|&#?\w+;/,
        Yt = /<tbody/i;
    ! function() {
        var e, n, i = it.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (dt[e] = n in t) || (i.setAttribute(n, "t"), dt[e] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Jt = /^(?:input|select|textarea)$/i,
        Kt = /^key/,
        Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        te = /^(?:focusinfocus|focusoutblur)$/,
        ee = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var a, o, s, l, u, c, d, f, p, h, m, g = pt._data(t);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = pt.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || ((c = g.handle = function(t) {
                        return void 0 === pt || t && pt.event.triggered === t.type ? undefined : pt.event.dispatch.apply(c.elem, arguments)
                    }).elem = t), s = (e = (e || "").match(Nt) || [""]).length; s--;) p = m = (a = ee.exec(e[s]) || [])[1], h = (a[2] || "").split(".").sort(), p && (u = pt.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pt.event.special[p] || {}, d = pt.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pt.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = o[p]) || ((f = o[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, h, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), pt.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var a, o, s, l, u, c, d, f, p, h, m, g = pt.hasData(t) && pt._data(t);
            if (g && (c = g.events)) {
                for (u = (e = (e || "").match(Nt) || [""]).length; u--;)
                    if (p = m = (s = ee.exec(e[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pt.event.special[p] || {}, f = c[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = f.length; a--;) o = f[a], !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(t, o));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || pt.removeEvent(t, p, g.handle), delete c[p])
                    } else
                        for (p in c) pt.event.remove(t, p + e[u], n, i, !0);
                pt.isEmptyObject(c) && (delete g.handle, pt._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var a, o, s, l, u, c, d, f = [i || it],
                p = ct.call(e, "type") ? e.type : e,
                h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !te.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (p = (h = p.split(".")).shift(), h.sort()), o = p.indexOf(":") < 0 && "on" + p, (e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = i), n = null == n ? [e] : pt.makeArray(n, [e]), u = pt.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!r && !u.noBubble && !pt.isWindow(i)) {
                    for (l = u.delegateType || p, te.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (i.ownerDocument || it) && f.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0;
                    (s = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || p, (a = (pt._data(s, "events") || {})[e.type] && pt._data(s, "handle")) && a.apply(s, n), (a = o && s[o]) && a.apply && Dt(s) && (e.result = a.apply(s, n), !1 === e.result && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), n)) && Dt(i) && o && i[p] && !pt.isWindow(i)) {
                    (c = i[o]) && (i[o] = null), pt.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    pt.event.triggered = undefined, c && (i[o] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = pt.event.fix(t);
            var e, n, i, r, a, o = [],
                s = rt.call(arguments),
                l = (pt._data(this, "events") || {})[t.type] || [],
                u = pt.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (o = pt.event.handlers.call(this, t, l), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, (i = ((pt.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, a, o = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; n < s; n++) i[r = (a = e[n]).selector + " "] === undefined && (i[r] = a.needsContext ? pt(r, this).index(l) > -1 : pt.find(r, this, null, [l]).length), i[r] && i.push(a);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < e.length && o.push({
                elem: this,
                handlers: e.slice(s)
            }), o
        },
        fix: function(t) {
            if (t[pt.expando]) return t;
            var e, n, i, r = t.type,
                a = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Zt.test(r) ? this.mouseHooks : Kt.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new pt.Event(a), e = i.length; e--;) t[n = i[e]] = a[n];
            return t.target || (t.target = a.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, a) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
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
                var n, i, r, a = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || it).documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || a === undefined || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(t) {
                    return pt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = pt.extend(new pt.Event, n, {
                type: t,
                isSimulated: !0
            });
            pt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, pt.removeEvent = it.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, pt.Event = function(t, e) {
        if (!(this instanceof pt.Event)) return new pt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), this[pt.expando] = !0
    }, pt.Event.prototype = {
        constructor: pt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        pt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    a = t.handleObj;
                return r && (r === i || pt.contains(i, r)) || (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.submit || (pt.event.special.submit = {
        setup: function() {
            if (pt.nodeName(this, "form")) return !1;
            pt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : undefined;
                n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), pt._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            if (pt.nodeName(this, "form")) return !1;
            pt.event.remove(this, "._submit")
        }
    }), dt.change || (pt.event.special.change = {
        setup: function() {
            if (Jt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), pt.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t)
            })), !1;
            pt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Jt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
                }), pt._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pt.event.remove(this, "._change"), !Jt.test(this.nodeName)
        }
    }), dt.focusin || pt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            pt.event.simulate(e, t.target, pt.event.fix(t))
        };
        pt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = pt._data(i, e);
                r || i.addEventListener(t, n, !0), pt._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = pt._data(i, e) - 1;
                r ? pt._data(i, e, r) : (i.removeEventListener(t, n, !0), pt._removeData(i, e))
            }
        }
    }), pt.fn.extend({
        on: function(t, e, n, i) {
            return w(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return w(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = b), this.each(function() {
                pt.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                pt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return pt.event.trigger(t, e, n, !0)
        }
    });
    var ne = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + Qt + ")[\\s/>]", "i"),
        re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ae = /<script|<style|<link/i,
        oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ue = p(it).appendChild(it.createElement("div"));
    pt.extend({
        htmlPrefilter: function(t) {
            return t.replace(re, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, a, o, s, l = pt.contains(t.ownerDocument, t);
            if (dt.html5Clone || pt.isXMLDoc(t) || !ie.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(a = ue.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                for (i = h(a), s = h(t), o = 0; null != (r = s[o]); ++o) i[o] && S(r, i[o]);
            if (e)
                if (n)
                    for (s = s || h(t), i = i || h(a), o = 0; null != (r = s[o]); o++) C(r, i[o]);
                else C(t, a);
            return (i = h(a, "script")).length > 0 && m(i, !l && h(t, "script")), i = s = r = null, a
        },
        cleanData: function(t, e) {
            for (var n, i, r, a, o = 0, s = pt.expando, l = pt.cache, u = dt.attributes, c = pt.event.special; null != (n = t[o]); o++)
                if ((e || Dt(n)) && (a = (r = n[s]) && l[r])) {
                    if (a.events)
                        for (i in a.events) c[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, a.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), nt.push(r))
                }
        }
    }), pt.fn.extend({
        domManip: E,
        detach: function(t) {
            return j(this, t, !0)
        },
        remove: function(t) {
            return j(this, t)
        },
        text: function(t) {
            return qt(this, function(t) {
                return t === undefined ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = k(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return E(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && pt.cleanData(h(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && pt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return pt.clone(this, t, e)
            })
        },
        html: function(t) {
            return qt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ne, "") : undefined;
                if ("string" == typeof t && !ae.test(t) && (dt.htmlSerialize || !ie.test(t)) && (dt.leadingWhitespace || !Ut.test(t)) && !Xt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = pt.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (pt.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return E(this, arguments, function(e) {
                var n = this.parentNode;
                pt.inArray(this, t) < 0 && (pt.cleanData(h(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), pt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        pt.fn[t] = function(t) {
            for (var n, i = 0, r = [], a = pt(t), o = a.length - 1; i <= o; i++) n = i === o ? this : this.clone(!0), pt(a[i])[e](n), ot.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ce, de = {
            HTML: "block",
            BODY: "block"
        },
        fe = /^margin/,
        pe = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$", "i"),
        he = function(t, e, n, i) {
            var r, a, o = {};
            for (a in e) o[a] = t.style[a], t.style[a] = e[a];
            for (a in r = n.apply(t, i || []), e) t.style[a] = o[a];
            return r
        },
        me = it.documentElement;
    ! function() {
        function e() {
            var e, c, d = it.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = o = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, (e = u.appendChild(it.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", (a = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (e = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), d.removeChild(l)
        }
        var n, i, r, a, o, s, l = it.createElement("div"),
            u = it.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === u.style.opacity, dt.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === u.style.backgroundClip, (l = it.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), dt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pt.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == n && e(), a
            },
            boxSizingReliable: function() {
                return null == n && e(), r
            },
            pixelMarginRight: function() {
                return null == n && e(), i
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == n && e(), o
            },
            reliableMarginLeft: function() {
                return null == n && e(), s
            }
        }))
    }();
    var ge, ve, ye = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ge = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, ve = function(t, e, n) {
        var i, r, a, o, s = t.style;
        return "" !== (o = (n = n || ge(t)) ? n.getPropertyValue(e) || n[e] : undefined) && o !== undefined || pt.contains(t.ownerDocument, t) || (o = pt.style(t, e)), n && !dt.pixelMarginRight() && pe.test(o) && fe.test(e) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), o === undefined ? o : o + ""
    }) : me.currentStyle && (ge = function(t) {
        return t.currentStyle
    }, ve = function(t, e, n) {
        var i, r, a, o, s = t.style;
        return null == (o = (n = n || ge(t)) ? n[e] : undefined) && s && s[e] && (o = s[e]), pe.test(o) && !ye.test(e) && (i = s.left, (a = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), o === undefined ? o : o + "" || "auto"
    });
    var be = /alpha\([^)]*\)/i,
        xe = /opacity\s*=\s*([^)]*)/i,
        we = /^(none|table(?!-c[ea]).+)/,
        ke = new RegExp("^(" + Rt + ")(.*)$", "i"),
        Te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ce = ["Webkit", "O", "Moz", "ms"],
        Se = it.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ve(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, a, o, s = pt.camelCase(e),
                    l = t.style;
                if (e = pt.cssProps[s] || (pt.cssProps[s] = D(s) || s), o = pt.cssHooks[e] || pt.cssHooks[s], n === undefined) return o && "get" in o && (r = o.get(t, !1, i)) !== undefined ? r : l[e];
                if ("string" === (a = typeof n) && (r = Bt.exec(n)) && r[1] && (n = f(t, e, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (pt.cssNumber[s] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && (n = o.set(t, n, i)) === undefined))) try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, a, o, s = pt.camelCase(e);
            return e = pt.cssProps[s] || (pt.cssProps[s] = D(s) || s), (o = pt.cssHooks[e] || pt.cssHooks[s]) && "get" in o && (a = o.get(t, !0, n)), a === undefined && (a = ve(t, e, i)), "normal" === a && e in _e && (a = _e[e]), "" === n || n ? (r = parseFloat(a), !0 === n || isFinite(r) ? r || 0 : a) : a
        }
    }), pt.each(["height", "width"], function(t, e) {
        pt.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return we.test(pt.css(t, "display")) && 0 === t.offsetWidth ? he(t, Te, function() {
                    return L(t, e, i)
                }) : L(t, e, i)
            },
            set: function(t, n, i) {
                var r = i && ge(t);
                return I(t, n, i ? O(t, e, i, dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), dt.opacity || (pt.cssHooks.opacity = {
        get: function(t, e) {
            return xe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                a = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(a.replace(be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = be.test(a) ? a.replace(be, r) : a + " " + r)
        }
    }), pt.cssHooks.marginRight = A(dt.reliableMarginRight, function(t, e) {
        if (e) return he(t, {
            display: "inline-block"
        }, ve, [t, "marginRight"])
    }), pt.cssHooks.marginLeft = A(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(ve(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), pt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        pt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Ht[i] + e] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, fe.test(t) || (pt.cssHooks[t + e].set = I)
    }), pt.fn.extend({
        css: function(t, e) {
            return qt(this, function(t, e, n) {
                var i, r, a = {},
                    o = 0;
                if (pt.isArray(e)) {
                    for (i = ge(t), r = e.length; o < r; o++) a[e[o]] = pt.css(t, e[o], !1, i);
                    return a
                }
                return n !== undefined ? pt.style(t, e, n) : pt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ft(this) ? pt(this).show() : pt(this).hide()
            })
        }
    }), pt.Tween = P, P.prototype = {
        constructor: P,
        init: function(t, e, n, i, r, a) {
            this.elem = t, this.prop = n, this.easing = r || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (pt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, pt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, pt.fx = P.prototype.init, pt.fx.step = {};
    var Ee, je, Me, Ne, Ae, De, $e, Ie = /^(?:toggle|show|hide)$/,
        Oe = /queueHooks$/;
    pt.Animation = pt.extend(W, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return f(n.elem, t, Bt.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Nt);
            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
        },
        prefilters: [F],
        prefilter: function(t, e) {
            e ? W.prefilters.unshift(t) : W.prefilters.push(t)
        }
    }), pt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? pt.extend({}, t) : {
            complete: n || !n && e || pt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !pt.isFunction(e) && e
        };
        return i.duration = pt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pt.fx.speeds ? pt.fx.speeds[i.duration] : pt.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            pt.isFunction(i.old) && i.old.call(this), i.queue && pt.dequeue(this, i.queue)
        }, i
    }, pt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Ft).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = pt.isEmptyObject(t),
                a = pt.speed(e, n, i),
                o = function() {
                    var e = W(this, pt.extend({}, t), a);
                    (r || pt._data(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = undefined), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    a = pt.timers,
                    o = pt._data(this);
                if (r) o[r] && o[r].stop && i(o[r]);
                else
                    for (r in o) o[r] && o[r].stop && Oe.test(r) && i(o[r]);
                for (r = a.length; r--;) a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim.stop(n), e = !1, a.splice(r, 1));
                !e && n || pt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = pt._data(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    a = pt.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, pt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), pt.each(["toggle", "show", "hide"], function(t, e) {
        var n = pt.fn[e];
        pt.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, r)
        }
    }), pt.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
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
        pt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), pt.timers = [], pt.fx.tick = function() {
        var t, e = pt.timers,
            n = 0;
        for (Ee = pt.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || pt.fx.stop(), Ee = undefined
    }, pt.fx.timer = function(t) {
        pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
    }, pt.fx.interval = 13, pt.fx.start = function() {
        je || (je = t.setInterval(pt.fx.tick, pt.fx.interval))
    }, pt.fx.stop = function() {
        t.clearInterval(je), je = null
    }, pt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, pt.fn.delay = function(e, n) {
        return e = pt.fx && pt.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    }, Ne = it.createElement("input"), Ae = it.createElement("div"), De = it.createElement("select"), $e = De.appendChild(it.createElement("option")), (Ae = it.createElement("div")).setAttribute("className", "t"), Ae.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Me = Ae.getElementsByTagName("a")[0], Ne.setAttribute("type", "checkbox"), Ae.appendChild(Ne), (Me = Ae.getElementsByTagName("a")[0]).style.cssText = "top:1px", dt.getSetAttribute = "t" !== Ae.className, dt.style = /top/.test(Me.getAttribute("style")), dt.hrefNormalized = "/a" === Me.getAttribute("href"), dt.checkOn = !!Ne.value, dt.optSelected = $e.selected, dt.enctype = !!it.createElement("form").enctype, De.disabled = !0, dt.optDisabled = !$e.disabled, (Ne = it.createElement("input")).setAttribute("value", ""), dt.input = "" === Ne.getAttribute("value"), Ne.value = "t", Ne.setAttribute("type", "radio"), dt.radioValue = "t" === Ne.value;
    var Le = /\r/g,
        Pe = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = pt.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, pt(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : pt.isArray(r) && (r = pt.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && e.set(this, r, "value") !== undefined || (this.value = r))
            })) : r ? (e = pt.valHooks[r.type] || pt.valHooks[r.nodeName.toLowerCase()]) && "get" in e && (n = e.get(r, "value")) !== undefined ? n : "string" == typeof(n = r.value) ? n.replace(Le, "") : null == n ? "" : n : void 0
        }
    }), pt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = pt.find.attr(t, "value");
                    return null != e ? e : pt.trim(pt.text(t)).replace(Pe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, a = "select-one" === t.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++)
                        if (((n = i[l]).selected || l === r) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = pt(n).val(), a) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, a = pt.makeArray(e), o = r.length; o--;)
                        if (i = r[o], pt.inArray(pt.valHooks.option.get(i), a) > -1) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), pt.each(["radio", "checkbox"], function() {
        pt.valHooks[this] = {
            set: function(t, e) {
                if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1
            }
        }, dt.checkOn || (pt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Re, Be, He = pt.expr.attrHandle,
        Fe = /^(?:checked|selected)$/i,
        qe = dt.getSetAttribute,
        We = dt.input;
    pt.fn.extend({
        attr: function(t, e) {
            return qt(this, pt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                pt.removeAttr(this, t)
            })
        }
    }), pt.extend({
        attr: function(t, e, n) {
            var i, r, a = t.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === a && pt.isXMLDoc(t) || (e = e.toLowerCase(), r = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Be : Re)), n !== undefined ? null === n ? void pt.removeAttr(t, e) : r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = pt.find.attr(t, e)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                a = e && e.match(Nt);
            if (a && 1 === t.nodeType)
                for (; n = a[r++];) i = pt.propFix[n] || n, pt.expr.match.bool.test(n) ? We && qe || !Fe.test(n) ? t[i] = !1 : t[pt.camelCase("default-" + n)] = t[i] = !1 : pt.attr(t, n, ""), t.removeAttribute(qe ? n : i)
        }
    }), Be = {
        set: function(t, e, n) {
            return !1 === e ? pt.removeAttr(t, n) : We && qe || !Fe.test(n) ? t.setAttribute(!qe && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = He[e] || pt.find.attr;
        We && qe || !Fe.test(e) ? He[e] = function(t, e, i) {
            var r, a;
            return i || (a = He[e], He[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, He[e] = a), r
        } : He[e] = function(t, e, n) {
            if (!n) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), We && qe || (pt.attrHooks.value = {
        set: function(t, e, n) {
            if (!pt.nodeName(t, "input")) return Re && Re.set(t, e, n);
            t.defaultValue = e
        }
    }), qe || (Re = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, He.id = He.name = He.coords = function(t, e, n) {
        var i;
        if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, pt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: Re.set
    }, pt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Re.set(t, "" !== e && e, n)
        }
    }, pt.each(["width", "height"], function(t, e) {
        pt.attrHooks[e] = {
            set: function(t, n) {
                if ("" === n) return t.setAttribute(e, "auto"), n
            }
        }
    })), dt.style || (pt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || undefined
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ze = /^(?:input|select|textarea|button|object)$/i,
        Ve = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function(t, e) {
            return qt(this, pt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = pt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) {}
            })
        }
    }), pt.extend({
        prop: function(t, e, n) {
            var i, r, a = t.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, r = pt.propHooks[e]), n !== undefined ? r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = pt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ze.test(t.nodeName) || Ve.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.hrefNormalized || pt.each(["href", "src"], function(t, e) {
        pt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), dt.optSelected || (pt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pt.propFix[this.toLowerCase()] = this
    }), dt.enctype || (pt.propFix.enctype = "encoding");
    var Ue = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function(t) {
            var e, n, i, r, a, o, s, l = 0;
            if (pt.isFunction(t)) return this.each(function(e) {
                pt(this).addClass(t.call(this, e, z(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Nt) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ue, " ")) {
                        for (o = 0; a = e[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        r !== (s = pt.trim(i)) && pt.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, a, o, s, l = 0;
            if (pt.isFunction(t)) return this.each(function(e) {
                pt(this).removeClass(t.call(this, e, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Nt) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ue, " ")) {
                        for (o = 0; a = e[o++];)
                            for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                        r !== (s = pt.trim(i)) && pt.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(n) {
                pt(this).toggleClass(t.call(this, n, z(this), e), e)
            }) : this.each(function() {
                var e, i, r, a;
                if ("string" === n)
                    for (i = 0, r = pt(this), a = t.match(Nt) || []; e = a[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else t !== undefined && "boolean" !== n || ((e = z(this)) && pt._data(this, "__className__", e), pt.attr(this, "class", e || !1 === t ? "" : pt._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Ue, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        pt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), pt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Qe = t.location,
        Xe = pt.now(),
        Ge = /\?/,
        Ye = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = pt.trim(e + "");
        return r && !pt.trim(r.replace(Ye, function(t, e, r, a) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !a - !r, "")
        })) ? Function("return " + r)() : pt.error("Invalid JSON: " + e)
    }, pt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : ((n = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(e))
        } catch (r) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), n
    };
    var Je = /#.*$/,
        Ke = /([?&])_=[^&]*/,
        Ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        en = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        an = {},
        on = {},
        sn = "*/".concat("*"),
        ln = Qe.href,
        un = rn.exec(ln.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln,
            type: "GET",
            isLocal: tn.test(un[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pt.parseJSON,
                "text xml": pt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Q(Q(t, pt.ajaxSettings), e) : Q(pt.ajaxSettings, t)
        },
        ajaxPrefilter: V(an),
        ajaxTransport: V(on),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var a, d, y, b, w, T = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), c = undefined, s = r || "", k.readyState = e > 0 ? 4 : 0, a = e >= 200 && e < 300 || 304 === e, i && (b = X(f, k, i)), b = G(f, b, k, a), a ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (pt.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (pt.etag[o] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, a = !(y = b.error))) : (y = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (n || T) + "", a ? m.resolveWith(p, [d, T, k]) : m.rejectWith(p, [k, T, y]), k.statusCode(v), v = undefined, u && h.trigger(a ? "ajaxSuccess" : "ajaxError", [k, f, a ? d : y]), g.fireWith(p, [k, T]), u && (h.trigger("ajaxComplete", [k, f]), --pt.active || pt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = undefined), n = n || {};
            var r, a, o, s, l, u, c, d, f = pt.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
                m = pt.Deferred(),
                g = pt.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; e = Ze.exec(s);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (x < 2)
                                for (e in t) v[e] = [v[e], t[e]];
                            else k.always(t[k.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || ln) + "").replace(Je, "").replace(nn, un[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pt.trim(f.dataType || "*").toLowerCase().match(Nt) || [""], null == f.crossDomain && (r = rn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === un[1] && r[2] === un[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pt.param(f.data, f.traditional)), U(an, f, n, k), 2 === x) return k;
            for (a in (u = pt.event && f.global) && 0 == pt.active++ && pt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !en.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Ge.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Ke.test(o) ? o.replace(Ke, "$1_=" + Xe++) : o + (Ge.test(o) ? "&" : "?") + "_=" + Xe++)), f.ifModified && (pt.lastModified[o] && k.setRequestHeader("If-Modified-Since", pt.lastModified[o]), pt.etag[o] && k.setRequestHeader("If-None-Match", pt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(a, f.headers[a]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, k, f) || 2 === x)) return k.abort();
            for (a in w = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[a](f[a]);
            if (c = U(on, f, n, k)) {
                if (k.readyState = 1, u && h.trigger("ajaxSend", [k, f]), 2 === x) return k;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(y, i)
                } catch (T) {
                    if (!(x < 2)) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function(t, e, n) {
            return pt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return pt.get(t, undefined, e, "script")
        }
    }), pt.each(["get", "post"], function(t, e) {
        pt[e] = function(t, n, i, r) {
            return pt.isFunction(n) && (r = r || i, i = n, n = undefined), pt.ajax(pt.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, pt.isPlainObject(t) && t))
        }
    }), pt._evalUrl = function(t) {
        return pt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pt.fn.extend({
        wrapAll: function(t) {
            if (pt.isFunction(t)) return this.each(function(e) {
                pt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return pt.isFunction(t) ? this.each(function(e) {
                pt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = pt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = pt.isFunction(t);
            return this.each(function(n) {
                pt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pt.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
    }, pt.expr.filters.visible = function(t) {
        return !pt.expr.filters.hidden(t)
    };
    var cn = /%20/g,
        dn = /\[\]$/,
        fn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = pt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (e === undefined && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) K(n, t[n], e, r);
        return i.join("&").replace(cn, "+")
    }, pt.fn.extend({
        serialize: function() {
            return pt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = pt.prop(this, "elements");
                return t ? pt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !pt(this).is(":disabled") && hn.test(this.nodeName) && !pn.test(t) && (this.checked || !Wt.test(t))
            }).map(function(t, e) {
                var n = pt(this).val();
                return null == n ? null : pt.isArray(n) ? pt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(fn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), pt.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function() {
        return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var mn = 0,
        gn = {},
        vn = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in gn) gn[t](undefined, !0)
    }), dt.cors = !!vn && "withCredentials" in vn, (vn = dt.ajax = !!vn) && pt.ajaxTransport(function(e) {
        var n;
        if (!e.crossDomain || dt.cors) return {
            send: function(i, r) {
                var a, o = e.xhr(),
                    s = ++mn;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) o[a] = e.xhrFields[a];
                for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) i[a] !== undefined && o.setRequestHeader(a, i[a] + "");
                o.send(e.hasContent && e.data || null), n = function(t, i) {
                    var a, l, u;
                    if (n && (i || 4 === o.readyState))
                        if (delete gn[s], n = undefined, o.onreadystatechange = pt.noop, i) 4 !== o.readyState && o.abort();
                        else {
                            u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch (c) {
                                l = ""
                            }
                            a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                        }
                    u && r(a, l, u, o.getAllResponseHeaders())
                }, e.async ? 4 === o.readyState ? t.setTimeout(n) : o.onreadystatechange = gn[s] = n : n()
            },
            abort: function() {
                n && n(undefined, !0)
            }
        }
    }), pt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return pt.globalEval(t), t
            }
        }
    }), pt.ajaxPrefilter("script", function(t) {
        t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), pt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = it.head || pt("head")[0] || it.documentElement;
            return {
                send: function(i, r) {
                    (e = it.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(undefined, !0)
                }
            }
        }
    });
    var yn = [],
        bn = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = yn.pop() || pt.expando + "_" + Xe++;
            return this[t] = !0, t
        }
    }), pt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, a, o, s = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(bn, "$1" + r) : !1 !== e.jsonp && (e.url += (Ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || pt.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", a = t[r], t[r] = function() {
            o = arguments
        }, i.always(function() {
            a === undefined ? pt(t).removeProp(r) : t[r] = a, e[r] && (e.jsonpCallback = n.jsonpCallback, yn.push(r)), o && pt.isFunction(a) && a(o[0]), o = a = undefined
        }), "script"
    }), pt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || it;
        var i = kt.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = v([t], e, r), r && r.length && pt(r).remove(), pt.merge([], i.childNodes))
    };
    var xn = pt.fn.load;
    pt.fn.load = function(t, e, n) {
        if ("string" != typeof t && xn) return xn.apply(this, arguments);
        var i, r, a, o = this,
            s = t.indexOf(" ");
        return s > -1 && (i = pt.trim(t.slice(s, t.length)), t = t.slice(0, s)), pt.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (r = "POST"), o.length > 0 && pt.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            a = arguments, o.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            o.each(function() {
                n.apply(this, a || [t.responseText, e, t])
            })
        }), this
    }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        pt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), pt.expr.filters.animated = function(t) {
        return pt.grep(pt.timers, function(e) {
            return t === e.elem
        }).length
    }, pt.offset = {
        setOffset: function(t, e, n) {
            var i, r, a, o, s, l, u = pt.css(t, "position"),
                c = pt(t),
                d = {};
            "static" === u && (t.style.position = "relative"), s = c.offset(), a = pt.css(t, "top"), l = pt.css(t, "left"), ("absolute" === u || "fixed" === u) && pt.inArray("auto", [a, l]) > -1 ? (o = (i = c.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, s))), null != e.top && (d.top = e.top - s.top + o), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, pt.fn.extend({
        offset: function(t) {
            if (arguments.length) return t === undefined ? this : this.each(function(e) {
                pt.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                a = r && r.ownerDocument;
            return a ? (e = a.documentElement, pt.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(a), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0), n.left += pt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - pt.css(i, "marginTop", !0),
                    left: e.left - n.left - pt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
                return t || me
            })
        }
    }), pt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        pt.fn[t] = function(i) {
            return qt(this, function(t, i, r) {
                var a = et(t);
                if (r === undefined) return a ? e in a ? a[e] : a.document.documentElement[i] : t[i];
                a ? a.scrollTo(n ? pt(a).scrollLeft() : r, n ? r : pt(a).scrollTop()) : t[i] = r
            }, t, i, arguments.length, null)
        }
    }), pt.each(["top", "left"], function(t, e) {
        pt.cssHooks[e] = A(dt.pixelPosition, function(t, n) {
            if (n) return n = ve(t, e), pe.test(n) ? pt(t).position()[e] + "px" : n
        })
    }), pt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        pt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            pt.fn[i] = function(i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    o = n || (!0 === i || !0 === r ? "margin" : "border");
                return qt(this, function(e, n, i) {
                    var r;
                    return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : i === undefined ? pt.css(e, n, o) : pt.style(e, n, i, o)
                }, e, a ? i : undefined, a, null)
            }
        })
    }), pt.fn.extend({
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
    }), pt.fn.size = function() {
        return this.length
    }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pt
    });
    var wn = t.jQuery,
        kn = t.$;
    return pt.noConflict = function(e) {
        return t.$ === pt && (t.$ = kn), e && t.jQuery === pt && (t.jQuery = wn), pt
    }, e || (t.jQuery = t.$ = pt), pt
}),
function(t, e) {
    "use strict";
    var n;
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), !1 !== r.result
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
        isRemote: function(t) {
            return t.data("remote") !== e && !1 !== t.data("remote")
        },
        handleRemote: function(i) {
            var r, a, o, s, l, u;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), a = i.data("ujs:submit-button-formaction") || i.attr("action"), o = t(i[0]).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (o.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), a = n.href(i), o = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function(t, r) {
                        if (r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [t, r])) return !1;
                        i.trigger("ajax:send", t)
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
                    crossDomain: n.isCrossDomain(a)
                }, s && (u.xhrFields = {
                    withCredentials: s
                }), a && (u.url = a), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                a = i.data("method"),
                o = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                u = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + a + '" type="hidden" />';
            l === e || s === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
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
            n = t.is("button") ? "html" : "val", (i = t.data("disable-with")) !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(t, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (a) {
                    (console.error || console.log).call(console, a.stack || a)
                }
                e = n.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(e, n, i) {
            var r, a, o, s = t(),
                l = n || "input,textarea",
                u = e.find(l),
                c = {};
            return u.each(function() {
                (r = t(this)).is("input[type=radio]") ? (o = r.attr("name"), c[o] || (0 === e.find('input[type=radio]:checked[name="' + o + '"]').length && (a = e.find('input[type=radio][name="' + o + '"]'), s = s.add(a)), c[o] = o)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (s = s.add(r))
            }), !!s.length && s
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(t(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(t(this))
    }), i.on("click.rails", n.linkClickSelector, function(e) {
        var i = t(this),
            r = i.data("method"),
            a = i.data("params"),
            o = e.metaKey || e.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(e);
        if (!o && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (o && (!r || "GET" === r) && !a) return !0;
            var s = n.handleRemote(i);
            return !1 === s ? n.enableElement(i) : s.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return !1 === r ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(e) {
        var i = t(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var r, a, o = t(this),
            s = n.isRemote(o);
        if (!n.allowAction(o)) return n.stopEverything(i);
        if (o.attr("novalidate") === e)
            if (o.data("ujs:formnovalidate-button") === e) {
                if ((r = n.blankInputs(o, n.requiredInputSelector, !1)) && n.fire(o, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else o.data("ujs:formnovalidate-button", e);
        if (s) {
            if (a = n.nonBlankInputs(o, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(o)
                }, 13);
                var l = n.fire(o, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    n.enableFormElements(o)
                }, 13), l
            }
            return n.handleRemote(o), !1
        }
        setTimeout(function() {
            n.disableFormElements(o)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            a = r ? {
                name: r,
                value: i.val()
            } : null,
            o = i.closest("form");
        0 === o.length && (o = t("#" + i.attr("form"))), o.data("ujs:submit-button", a), o.data("ujs:formnovalidate-button", i.attr("formnovalidate")), o.data("ujs:submit-button-formaction", i.attr("formaction")), o.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery), Blacklight = function() {
        var t = new Array;
        return {
            onLoad: function(e) {
                t.push(e)
            },
            activate: function() {
                for (var e = 0; e < t.length; e++) t[e].call()
            },
            listeners: function() {
                var t = [];
                return "undefined" != typeof Turbolinks && Turbolinks.supported ? Turbolinks.BrowserAdapter ? t.push("turbolinks:load") : t.push("page:load", "ready") : t.push("ready"), t.join(" ")
            }
        }
    }(), $(document).on(Blacklight.listeners(), function() {
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
                    s.prop("checked", t), l.toggleClass("checked", t), t ? (r.find("input[name=_method]").val("delete"), u.text(r.attr("data-present"))) : (r.find("input[name=_method]").val("put"), u.text(r.attr("data-absent")))
                }
                var i = t.extend({}, t.fn.bl_checkbox_submit.defaults, e),
                    r = t(this);
                r.children().hide(), r.find("input[type=submit]").remove(), r.addClass("form-horizontal");
                var a = r.attr("data-doc-id") || Math.random(),
                    o = 0 != r.find("input[name=_method][value=delete]").size(),
                    s = t('<input type="checkbox">').addClass(i.css_class).attr("id", i.css_class + "_" + a),
                    l = t("<label>").addClass(i.css_class).attr("for", i.css_class + "_" + a).attr("title", r.attr("title") || ""),
                    u = t("<span>");
                l.append(s), l.append(" "), l.append(u);
                var c = t("<div class='checkbox' />").addClass(i.css_class).append(l);
                r.append(c), n(o), s.click(function() {
                    return u.text(r.attr("data-inprogress")), l.attr("disabled", "disabled"), s.attr("disabled", "disabled"), t.ajax({
                        url: r.attr("action"),
                        dataType: "json",
                        type: r.attr("method").toUpperCase(),
                        data: r.serialize(),
                        error: function() {
                            alert("Error"), n(o), l.removeAttr("disabled"), s.removeAttr("disabled")
                        },
                        success: function(t, e, a) {
                            0 != a.status ? (n(o = !o), l.removeAttr("disabled"), s.removeAttr("disabled"), i.success.call(r, o, a.responseJSON)) : (alert("Error"), n(o), l.removeAttr("disabled"), s.removeAttr("disabled"))
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
    }(jQuery), Blacklight.ajaxModal === undefined && (Blacklight.ajaxModal = {}), Blacklight.ajaxModal.modalSelector = "#ajax-modal", Blacklight.ajaxModal.triggerLinkSelector = "a[data-ajax-modal~=trigger], a.lightboxLink,a.more_facets_link,.ajax_modal_launch", Blacklight.ajaxModal.triggerFormSelector = "form[data-ajax-modal~=trigger], form.ajax_form", Blacklight.ajaxModal.preserveLinkSelector = Blacklight.ajaxModal.modalSelector + " a[data-ajax-modal~=preserve]", Blacklight.ajaxModal.preserveFormSelector = Blacklight.ajaxModal.modalSelector + " form[data-ajax-modal~=preserve]", Blacklight.ajaxModal.containerSelector = "[data-ajax-modal~=container]", Blacklight.ajaxModal.modalCloseSelector = "[data-ajax-modal~=close], span.ajax-close-modal", Blacklight.ajaxModal.onFailure = function() {
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
        t.preventDefault(), $.ajax({
            url: $(this).attr("href"),
            dataType: "script"
        }).always(Blacklight.ajaxModal.receiveAjax)
    }, Blacklight.ajaxModal.modalAjaxFormSubmit = function(t) {
        t.preventDefault(), $.ajax({
            url: $(this).attr("action"),
            data: $(this).serialize(),
            type: $(this).attr("method"),
            dataType: "script"
        }).always(Blacklight.ajaxModal.receiveAjax)
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
                a = n.attr("target"),
                o = t("meta[name=csrf-token]").attr("content"),
                s = t("meta[name=csrf-param]").attr("content"),
                l = t('<form method="post" action="' + i + '"></form>'),
                u = '<input name="_method" value="' + r + '" type="hidden" />',
                c = '<input name="redirect" value="' + n.attr("href") + '" type="hidden" />';
            return (e.metaKey || e.ctrlKey) && (a = "_blank"), s !== undefined && o !== undefined && (u += '<input name="' + s + '" value="' + o + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(u).append(c).appendTo("body"), l.submit(), !1
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
    function(t) {
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
                if (t.style[n] !== undefined) return {
                    end: e[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            return t(this).one("bsTransitionEnd", function() {
                n = !0
            }), setTimeout(function() {
                n || t(i).trigger(t.support.transition.end)
            }, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function n(e) {
            return this.each(function() {
                var n = t(this),
                    r = n.data("bs.collapse"),
                    a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !r && a.toggle && /show|hide/.test(e) && (a.toggle = !1), r || n.data("bs.collapse", r = new i(this, a)), "string" == typeof e && r[e]()
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (e = r.data("bs.collapse")) && e.transitioning)) {
                    var a = t.Event("show.bs.collapse");
                    if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                        r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                        var o = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return s.call(this);
                        var l = t.camelCase(["scroll", o].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][l])
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
                    if (!t.support.transition) return r.call(this);
                    this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
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
            var a = e(r),
                o = a.data("bs.collapse") ? "toggle" : r.data();
            n.call(a, o)
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(r).remove(), t(a).each(function() {
                var i = t(this),
                    r = e(i),
                    a = {
                        relatedTarget: this
                    };
                r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", a)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
            }))
        }

        function i(e) {
            return this.each(function() {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
            })
        }
        var r = ".dropdown-backdrop",
            a = '[data-toggle="dropdown"]',
            o = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        o.VERSION = "3.3.7", o.prototype.toggle = function(i) {
            var r = t(this);
            if (!r.is(".disabled, :disabled")) {
                var a = e(r),
                    o = a.hasClass("open");
                if (n(), !o) {
                    "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var s = {
                        relatedTarget: this
                    };
                    if (a.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                    r.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                }
                return !1
            }
        }, o.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = t(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = e(i),
                        o = r.hasClass("open");
                    if (!o && 27 != n.which || o && 27 == n.which) return 27 == n.which && r.find(a).trigger("focus"), i.trigger("click");
                    var s = " li:not(.disabled):visible a",
                        l = r.find(".dropdown-menu" + s);
                    if (l.length) {
                        var u = l.index(n.target);
                        38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = i, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = s, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", a, o.prototype.toggle).on("keydown.bs.dropdown.data-api", a, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
    }(jQuery),
    function(t) {
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
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
            function n() {
                o.detach().trigger("closed.bs.alert").remove()
            }
            var r = t(this),
                a = r.attr("data-target");
            a || (a = (a = r.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, ""));
            var o = t("#" === a ? [] : a);
            e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var r = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
            return t.fn.alert = r, this
        }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery),
    function(t) {
        "use strict";

        function e(e, i) {
            return this.each(function() {
                var r = t(this),
                    a = r.data("bs.modal"),
                    o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
                a || r.data("bs.modal", a = new n(this, o)), "string" == typeof e ? a[e](i) : o.show && a.show(i)
            })
        }
        var n = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
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
                var a = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                r ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(a)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
            }))
        }, n.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
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
                var a = t.support.transition && r;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function() {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
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
                a = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                o = a.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(r) && r
                }, a.data(), i.data());
            i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(a, o, this)
        })
    }(jQuery), $(".no-js").removeClass("no-js").addClass("js"),
    function() {}.call(this),
    function() {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            a = Function.prototype,
            o = i.push,
            s = i.slice,
            l = i.concat,
            u = r.toString,
            c = r.hasOwnProperty,
            d = i.forEach,
            f = i.map,
            p = i.reduce,
            h = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            x = Array.isArray,
            w = Object.keys,
            k = a.bind,
            T = function(t) {
                return t instanceof T ? t : this instanceof T ? void(this._wrapped = t) : new T(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.6.0";
        var _ = T.each = T.forEach = function(t, e, i) {
            if (null == t) return t;
            if (d && t.forEach === d) t.forEach(e, i);
            else if (t.length === +t.length) {
                for (var r = 0, a = t.length; a > r; r++)
                    if (e.call(i, t[r], r, t) === n) return
            } else {
                var o = T.keys(t);
                for (r = 0, a = o.length; a > r; r++)
                    if (e.call(i, t[o[r]], o[r], t) === n) return
            }
            return t
        };
        T.map = T.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : f && t.map === f ? t.map(e, n) : (_(t, function(t, r, a) {
                i.push(e.call(n, t, r, a))
            }), i)
        };
        var C = "Reduce of empty array with no initial value";
        T.reduce = T.foldl = T.inject = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return i && (e = T.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
            if (_(t, function(t, a, o) {
                    r ? n = e.call(i, n, t, a, o) : (n = t, r = !0)
                }), !r) throw new TypeError(C);
            return n
        }, T.reduceRight = T.foldr = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), h && t.reduceRight === h) return i && (e = T.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
            var a = t.length;
            if (a !== +a) {
                var o = T.keys(t);
                a = o.length
            }
            if (_(t, function(s, l, u) {
                    l = o ? o[--a] : --a, r ? n = e.call(i, n, t[l], l, u) : (n = t[l], r = !0)
                }), !r) throw new TypeError(C);
            return n
        }, T.find = T.detect = function(t, e, n) {
            var i;
            return S(t, function(t, r, a) {
                return e.call(n, t, r, a) ? (i = t, !0) : void 0
            }), i
        }, T.filter = T.select = function(t, e, n) {
            var i = [];
            return null == t ? i : m && t.filter === m ? t.filter(e, n) : (_(t, function(t, r, a) {
                e.call(n, t, r, a) && i.push(t)
            }), i)
        }, T.reject = function(t, e, n) {
            return T.filter(t, function(t, i, r) {
                return !e.call(n, t, i, r)
            }, n)
        }, T.every = T.all = function(t, e, i) {
            e || (e = T.identity);
            var r = !0;
            return null == t ? r : g && t.every === g ? t.every(e, i) : (_(t, function(t, a, o) {
                return (r = r && e.call(i, t, a, o)) ? void 0 : n
            }), !!r)
        };
        var S = T.some = T.any = function(t, e, i) {
            e || (e = T.identity);
            var r = !1;
            return null == t ? r : v && t.some === v ? t.some(e, i) : (_(t, function(t, a, o) {
                return r || (r = e.call(i, t, a, o)) ? n : void 0
            }), !!r)
        };
        T.contains = T.include = function(t, e) {
            return null != t && (y && t.indexOf === y ? -1 != t.indexOf(e) : S(t, function(t) {
                return t === e
            }))
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
            return _(t, function(t, a, o) {
                var s = e ? e.call(n, t, a, o) : t;
                s > r && (i = t, r = s)
            }), i
        }, T.min = function(t, e, n) {
            if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            var i = 1 / 0,
                r = 1 / 0;
            return _(t, function(t, a, o) {
                var s = e ? e.call(n, t, a, o) : t;
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
                return n = E(n), _(e, function(a, o) {
                    var s = n.call(i, a, o, e);
                    t(r, s, a)
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
            for (var r = (n = E(n)).call(i, e), a = 0, o = t.length; o > a;) {
                var s = a + o >>> 1;
                n.call(i, t[s]) < r ? a = s + 1 : o = s
            }
            return a
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
        var M = function(t, e, n) {
            return e && T.every(t, T.isArray) ? l.apply(n, t) : (_(t, function(t) {
                T.isArray(t) || T.isArguments(t) ? e ? o.apply(n, t) : M(t, e, n) : n.push(t)
            }), n)
        };
        T.flatten = function(t, e) {
            return M(t, e, [])
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
                a = [],
                o = [];
            return _(r, function(n, i) {
                (e ? i && o[o.length - 1] === n : T.contains(o, n)) || (o.push(n), a.push(t[i]))
            }), a
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
                if ("number" != typeof n) return t[i = T.sortedIndex(t, e)] === e ? i : -1;
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
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, a = new Array(i); i > r;) a[r++] = t, t += n;
            return a
        };
        var N = function() {};
        T.bind = function(t, e) {
            var n, i;
            if (k && t.bind === k) return k.apply(t, s.call(arguments, 1));
            if (!T.isFunction(t)) throw new TypeError;
            return n = s.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return t.apply(e, n.concat(s.call(arguments)));
                N.prototype = t.prototype;
                var r = new N;
                N.prototype = null;
                var a = t.apply(r, n.concat(s.call(arguments)));
                return Object(a) === a ? a : r
            }
        }, T.partial = function(t) {
            var e = s.call(arguments, 1);
            return function() {
                for (var n = 0, i = e.slice(), r = 0, a = i.length; a > r; r++) i[r] === T && (i[r] = arguments[n++]);
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
            var i, r, a, o = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = !1 === n.leading ? 0 : T.now(), o = null, a = t.apply(i, r), i = r = null
            };
            return function() {
                var u = T.now();
                s || !1 !== n.leading || (s = u);
                var c = e - (u - s);
                return i = this, r = arguments, 0 >= c ? (clearTimeout(o), o = null, s = u, a = t.apply(i, r), i = r = null) : o || !1 === n.trailing || (o = setTimeout(l, c)), a
            }
        }, T.debounce = function(t, e, n) {
            var i, r, a, o, s, l = function() {
                var u = T.now() - o;
                e > u ? i = setTimeout(l, e - u) : (i = null, n || (s = t.apply(a, r), a = r = null))
            };
            return function() {
                a = this, r = arguments, o = T.now();
                var u = n && !i;
                return i || (i = setTimeout(l, e)), u && (s = t.apply(a, r), a = r = null), s
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
        var A = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
            var r = u.call(t);
            if (r != u.call(e)) return !1;
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
            for (var a = n.length; a--;)
                if (n[a] == t) return i[a] == e;
            var o = t.constructor,
                s = e.constructor;
            if (o !== s && !(T.isFunction(o) && o instanceof o && T.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return !1;
            n.push(t), i.push(e);
            var l = 0,
                c = !0;
            if ("[object Array]" == r) {
                if (c = (l = t.length) == e.length)
                    for (; l-- && (c = A(t[l], e[l], n, i)););
            } else {
                for (var d in t)
                    if (T.has(t, d) && (l++, !(c = T.has(e, d) && A(t[d], e[d], n, i)))) break;
                if (c) {
                    for (d in e)
                        if (T.has(e, d) && !l--) break;
                    c = !l
                }
            }
            return n.pop(), i.pop(), c
        };
        T.isEqual = function(t, e) {
            return A(t, e, [], [])
        }, T.isEmpty = function(t) {
            if (null == t) return !0;
            if (T.isArray(t) || T.isString(t)) return 0 === t.length;
            for (var e in t)
                if (T.has(t, e)) return !1;
            return !0
        }, T.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, T.isArray = x || function(t) {
            return "[object Array]" == u.call(t)
        }, T.isObject = function(t) {
            return t === Object(t)
        }, _(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            T["is" + t] = function(e) {
                return u.call(e) == "[object " + t + "]"
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
            return !0 === t || !1 === t || "[object Boolean]" == u.call(t)
        }, T.isNull = function(t) {
            return null === t
        }, T.isUndefined = function(t) {
            return void 0 === t
        }, T.has = function(t, e) {
            return c.call(t, e)
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
        var D = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        D.unescape = T.invert(D.escape);
        var $ = {
            escape: new RegExp("[" + T.keys(D.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + T.keys(D.unescape).join("|") + ")", "g")
        };
        T.each(["escape", "unescape"], function(t) {
            T[t] = function(e) {
                return null == e ? "" : ("" + e).replace($[t], function(e) {
                    return D[t][e]
                })
            }
        }), T.result = function(t, e) {
            if (null != t) {
                var n = t[e];
                return T.isFunction(n) ? n.call(t) : n
            }
        }, T.mixin = function(t) {
            _(T.functions(t), function(e) {
                var n = T[e] = t[e];
                T.prototype[e] = function() {
                    var t = [this._wrapped];
                    return o.apply(t, arguments), R.call(this, n.apply(T, t))
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
                "\t": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            P = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        T.template = function(t, e, n) {
            var i;
            n = T.defaults({}, n, T.templateSettings);
            var r = new RegExp([(n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source].join("|") + "|$", "g"),
                a = 0,
                o = "__p+='";
            t.replace(r, function(e, n, i, r, s) {
                return o += t.slice(a, s).replace(P, function(t) {
                    return "\\" + L[t]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (o += "';\n" + r + "\n__p+='"), a = s + e.length, e
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", o)
            } catch (s) {
                throw s.source = o, s
            }
            if (e) return i(e, T);
            var l = function(t) {
                return i.call(this, t, T)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l
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
    }.call(this),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Handlebars = e() : t.Handlebars = e()
    }(this, function() {
        return function(t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            "use strict";

            function i() {
                var t = new o.HandlebarsEnvironment;
                return u.extend(t, o), t.SafeString = s["default"], t.Exception = l["default"], t.Utils = u, t.escapeExpression = u.escapeExpression, t.VM = c, t.template = function(e) {
                    return c.template(e, t)
                }, t
            }
            var r = n(1)["default"],
                a = n(2)["default"];
            e.__esModule = !0;
            var o = r(n(3)),
                s = a(n(17)),
                l = a(n(5)),
                u = r(n(4)),
                c = r(n(18)),
                d = a(n(19)),
                f = i();
            f.create = i, d["default"](f), f["default"] = f, e["default"] = f, t.exports = e["default"]
        }, function(t, e) {
            "use strict";
            e["default"] = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }, e.__esModule = !0
        }, function(t, e) {
            "use strict";
            e["default"] = function(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }, e.__esModule = !0
        }, function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                this.helpers = t || {}, this.partials = e || {}, this.decorators = n || {}, s.registerDefaultHelpers(this), l.registerDefaultDecorators(this)
            }
            var r = n(2)["default"];
            e.__esModule = !0, e.HandlebarsEnvironment = i;
            var a = n(4),
                o = r(n(5)),
                s = n(6),
                l = n(14),
                u = r(n(16)),
                c = "4.0.5";
            e.VERSION = c;
            var d = 7;
            e.COMPILER_REVISION = d;
            var f = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0"
            };
            e.REVISION_CHANGES = f;
            var p = "[object Object]";
            i.prototype = {
                constructor: i,
                logger: u["default"],
                log: u["default"].log,
                registerHelper: function(t, e) {
                    if (a.toString.call(t) === p) {
                        if (e) throw new o["default"]("Arg not supported with multiple helpers");
                        a.extend(this.helpers, t)
                    } else this.helpers[t] = e
                },
                unregisterHelper: function(t) {
                    delete this.helpers[t]
                },
                registerPartial: function(t, e) {
                    if (a.toString.call(t) === p) a.extend(this.partials, t);
                    else {
                        if (void 0 === e) throw new o["default"]('Attempting to register a partial called "' + t + '" as undefined');
                        this.partials[t] = e
                    }
                },
                unregisterPartial: function(t) {
                    delete this.partials[t]
                },
                registerDecorator: function(t, e) {
                    if (a.toString.call(t) === p) {
                        if (e) throw new o["default"]("Arg not supported with multiple decorators");
                        a.extend(this.decorators, t)
                    } else this.decorators[t] = e
                },
                unregisterDecorator: function(t) {
                    delete this.decorators[t]
                }
            };
            var h = u["default"].log;
            e.log = h, e.createFrame = a.createFrame, e.logger = u["default"]
        }, function(t, e) {
            "use strict";

            function n(t) {
                return c[t]
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++)
                    for (var n in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
                return t
            }

            function r(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            }

            function a(t) {
                if ("string" != typeof t) {
                    if (t && t.toHTML) return t.toHTML();
                    if (null == t) return "";
                    if (!t) return t + "";
                    t = "" + t
                }
                return f.test(t) ? t.replace(d, n) : t
            }

            function o(t) {
                return !t && 0 !== t || !(!m(t) || 0 !== t.length)
            }

            function s(t) {
                var e = i({}, t);
                return e._parent = t, e
            }

            function l(t, e) {
                return t.path = e, t
            }

            function u(t, e) {
                return (t ? t + "." : "") + e
            }
            e.__esModule = !0, e.extend = i, e.indexOf = r, e.escapeExpression = a, e.isEmpty = o, e.createFrame = s, e.blockParams = l, e.appendContextPath = u;
            var c = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                d = /[&<>"'`=]/g,
                f = /[&<>"'`=]/,
                p = Object.prototype.toString;
            e.toString = p;
            var h = function(t) {
                return "function" == typeof t
            };
            h(/x/) && (e.isFunction = h = function(t) {
                return "function" == typeof t && "[object Function]" === p.call(t)
            }), e.isFunction = h;
            var m = Array.isArray || function(t) {
                return !(!t || "object" != typeof t) && "[object Array]" === p.call(t)
            };
            e.isArray = m
        }, function(t, e) {
            "use strict";

            function n(t, e) {
                var r = e && e.loc,
                    a = undefined,
                    o = undefined;
                r && (t += " - " + (a = r.start.line) + ":" + (o = r.start.column));
                for (var s = Error.prototype.constructor.call(this, t), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
                Error.captureStackTrace && Error.captureStackTrace(this, n), r && (this.lineNumber = a, this.column = o)
            }
            e.__esModule = !0;
            var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            n.prototype = new Error, e["default"] = n, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                a["default"](t), o["default"](t), s["default"](t), l["default"](t), u["default"](t), c["default"](t), d["default"](t)
            }
            var r = n(2)["default"];
            e.__esModule = !0, e.registerDefaultHelpers = i;
            var a = r(n(7)),
                o = r(n(8)),
                s = r(n(9)),
                l = r(n(10)),
                u = r(n(11)),
                c = r(n(12)),
                d = r(n(13))
        }, function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(4);
            e["default"] = function(t) {
                t.registerHelper("blockHelperMissing", function(e, n) {
                    var r = n.inverse,
                        a = n.fn;
                    if (!0 === e) return a(this);
                    if (!1 === e || null == e) return r(this);
                    if (i.isArray(e)) return e.length > 0 ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n)) : r(this);
                    if (n.data && n.ids) {
                        var o = i.createFrame(n.data);
                        o.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {
                            data: o
                        }
                    }
                    return a(e, n)
                })
            }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            var i = n(2)["default"];
            e.__esModule = !0;
            var r = n(4),
                a = i(n(5));
            e["default"] = function(t) {
                t.registerHelper("each", function(t, e) {
                    function n(e, n, a) {
                        u && (u.key = e, u.index = n, u.first = 0 === n, u.last = !!a, c && (u.contextPath = c + e)), l += i(t[e], {
                            data: u,
                            blockParams: r.blockParams([t[e], e], [c + e, null])
                        })
                    }
                    if (!e) throw new a["default"]("Must pass iterator to #each");
                    var i = e.fn,
                        o = e.inverse,
                        s = 0,
                        l = "",
                        u = undefined,
                        c = undefined;
                    if (e.data && e.ids && (c = r.appendContextPath(e.data.contextPath, e.ids[0]) + "."), r.isFunction(t) && (t = t.call(this)), e.data && (u = r.createFrame(e.data)), t && "object" == typeof t)
                        if (r.isArray(t))
                            for (var d = t.length; s < d; s++) s in t && n(s, s, s === t.length - 1);
                        else {
                            var f = undefined;
                            for (var p in t) t.hasOwnProperty(p) && (f !== undefined && n(f, s - 1), f = p, s++);
                            f !== undefined && n(f, s - 1, !0)
                        }
                    return 0 === s && (l = o(this)), l
                })
            }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            var i = n(2)["default"];
            e.__esModule = !0;
            var r = i(n(5));
            e["default"] = function(t) {
                t.registerHelper("helperMissing", function() {
                    if (1 === arguments.length) return undefined;
                    throw new r["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                })
            }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(4);
            e["default"] = function(t) {
                t.registerHelper("if", function(t, e) {
                    return i.isFunction(t) && (t = t.call(this)), !e.hash.includeZero && !t || i.isEmpty(t) ? e.inverse(this) : e.fn(this)
                }), t.registerHelper("unless", function(e, n) {
                    return t.helpers["if"].call(this, e, {
                        fn: n.inverse,
                        inverse: n.fn,
                        hash: n.hash
                    })
                })
            }, t.exports = e["default"]
        }, function(t, e) {
            "use strict";
            e.__esModule = !0, e["default"] = function(t) {
                t.registerHelper("log", function() {
                    for (var e = [undefined], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) e.push(arguments[i]);
                    var r = 1;
                    null != n.hash.level ? r = n.hash.level : n.data && null != n.data.level && (r = n.data.level), e[0] = r, t.log.apply(t, e)
                })
            }, t.exports = e["default"]
        }, function(t, e) {
            "use strict";
            e.__esModule = !0, e["default"] = function(t) {
                t.registerHelper("lookup", function(t, e) {
                    return t && t[e]
                })
            }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(4);
            e["default"] = function(t) {
                t.registerHelper("with", function(t, e) {
                    i.isFunction(t) && (t = t.call(this));
                    var n = e.fn;
                    if (i.isEmpty(t)) return e.inverse(this);
                    var r = e.data;
                    return e.data && e.ids && ((r = i.createFrame(e.data)).contextPath = i.appendContextPath(e.data.contextPath, e.ids[0])), n(t, {
                        data: r,
                        blockParams: i.blockParams([t], [r && r.contextPath])
                    })
                })
            }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                a["default"](t)
            }
            var r = n(2)["default"];
            e.__esModule = !0, e.registerDefaultDecorators = i;
            var a = r(n(15))
        }, function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(4);
            e["default"] = function(t) {
                t.registerDecorator("inline", function(t, e, n, r) {
                    var a = t;
                    return e.partials || (e.partials = {}, a = function(r, a) {
                        var o = n.partials;
                        n.partials = i.extend({}, o, e.partials);
                        var s = t(r, a);
                        return n.partials = o, s
                    }), e.partials[r.args[0]] = r.fn, a
                })
            }, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(4),
                r = {
                    methodMap: ["debug", "info", "warn", "error"],
                    level: "info",
                    lookupLevel: function(t) {
                        if ("string" == typeof t) {
                            var e = i.indexOf(r.methodMap, t.toLowerCase());
                            t = e >= 0 ? e : parseInt(t, 10)
                        }
                        return t
                    },
                    log: function(t) {
                        if (t = r.lookupLevel(t), "undefined" != typeof console && r.lookupLevel(r.level) <= t) {
                            var e = r.methodMap[t];
                            console[e] || (e = "log");
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            console[e].apply(console, i)
                        }
                    }
                };
            e["default"] = r, t.exports = e["default"]
        }, function(t, e) {
            "use strict";

            function n(t) {
                this.string = t
            }
            e.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
                return "" + this.string
            }, e["default"] = n, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                var e = t && t[0] || 1,
                    n = m.COMPILER_REVISION;
                if (e !== n) {
                    if (e < n) {
                        var i = m.REVISION_CHANGES[n],
                            r = m.REVISION_CHANGES[e];
                        throw new h["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                    }
                    throw new h["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                }
            }

            function r(t, e) {
                function n(n, i, r) {
                    r.hash && (i = p.extend({}, i, r.hash), r.ids && (r.ids[0] = !0)), n = e.VM.resolvePartial.call(this, n, i, r);
                    var a = e.VM.invokePartial.call(this, n, i, r);
                    if (null == a && e.compile && (r.partials[r.name] = e.compile(n, t.compilerOptions, e), a = r.partials[r.name](i, r)), null != a) {
                        if (r.indent) {
                            for (var o = a.split("\n"), s = 0, l = o.length; s < l && (o[s] || s + 1 !== l); s++) o[s] = r.indent + o[s];
                            a = o.join("\n")
                        }
                        return a
                    }
                    throw new h["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode")
                }

                function i(e) {
                    function n(e) {
                        return "" + t.main(r, e, r.helpers, r.partials, o, l, s)
                    }
                    var a = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                        o = a.data;
                    i._setup(a), !a.partial && t.useData && (o = u(e, o));
                    var s = undefined,
                        l = t.useBlockParams ? [] : undefined;
                    return t.useDepths && (s = a.depths ? e !== a.depths[0] ? [e].concat(a.depths) : a.depths : [e]), (n = c(t.main, n, r, a.depths || [], o, l))(e, a)
                }
                if (!e) throw new h["default"]("No environment passed to template");
                if (!t || !t.main) throw new h["default"]("Unknown template object: " + typeof t);
                t.main.decorator = t.main_d, e.VM.checkRevision(t.compiler);
                var r = {
                    strict: function(t, e) {
                        if (!(e in t)) throw new h["default"]('"' + e + '" not defined in ' + t);
                        return t[e]
                    },
                    lookup: function(t, e) {
                        for (var n = t.length, i = 0; i < n; i++)
                            if (t[i] && null != t[i][e]) return t[i][e]
                    },
                    lambda: function(t, e) {
                        return "function" == typeof t ? t.call(e) : t
                    },
                    escapeExpression: p.escapeExpression,
                    invokePartial: n,
                    fn: function(e) {
                        var n = t[e];
                        return n.decorator = t[e + "_d"], n
                    },
                    programs: [],
                    program: function(t, e, n, i, r) {
                        var o = this.programs[t],
                            s = this.fn(t);
                        return e || r || i || n ? o = a(this, t, s, e, n, i, r) : o || (o = this.programs[t] = a(this, t, s)), o
                    },
                    data: function(t, e) {
                        for (; t && e--;) t = t._parent;
                        return t
                    },
                    merge: function(t, e) {
                        var n = t || e;
                        return t && e && t !== e && (n = p.extend({}, e, t)), n
                    },
                    noop: e.VM.noop,
                    compilerInfo: t.compiler
                };
                return i.isTop = !0, i._setup = function(n) {
                    n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, e.helpers), t.usePartial && (r.partials = r.merge(n.partials, e.partials)), (t.usePartial || t.useDecorators) && (r.decorators = r.merge(n.decorators, e.decorators)))
                }, i._child = function(e, n, i, o) {
                    if (t.useBlockParams && !i) throw new h["default"]("must pass block params");
                    if (t.useDepths && !o) throw new h["default"]("must pass parent depths");
                    return a(r, e, t[e], n, 0, i, o)
                }, i
            }

            function a(t, e, n, i, r, a, o) {
                function s(e) {
                    var r = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                        s = o;
                    return o && e !== o[0] && (s = [e].concat(o)), n(t, e, t.helpers, t.partials, r.data || i, a && [r.blockParams].concat(a), s)
                }
                return (s = c(n, s, t, o, i, a)).program = e, s.depth = o ? o.length : 0, s.blockParams = r || 0, s
            }

            function o(t, e, n) {
                return t ? t.call || n.name || (n.name = t, t = n.partials[t]) : t = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], t
            }

            function s(t, e, n) {
                n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
                var i = undefined;
                if (n.fn && n.fn !== l && (n.data = m.createFrame(n.data), (i = n.data["partial-block"] = n.fn).partials && (n.partials = p.extend({}, n.partials, i.partials))), t === undefined && i && (t = i), t === undefined) throw new h["default"]("The partial " + n.name + " could not be found");
                if (t instanceof Function) return t(e, n)
            }

            function l() {
                return ""
            }

            function u(t, e) {
                return e && "root" in e || ((e = e ? m.createFrame(e) : {}).root = t), e
            }

            function c(t, e, n, i, r, a) {
                if (t.decorator) {
                    var o = {};
                    e = t.decorator(e, o, n, i && i[0], r, a, i), p.extend(e, o)
                }
                return e
            }
            var d = n(1)["default"],
                f = n(2)["default"];
            e.__esModule = !0, e.checkRevision = i, e.template = r, e.wrapProgram = a, e.resolvePartial = o, e.invokePartial = s, e.noop = l;
            var p = d(n(4)),
                h = f(n(5)),
                m = n(3)
        }, function(t, e) {
            (function(n) {
                "use strict";
                e.__esModule = !0, e["default"] = function(t) {
                    var e = void 0 !== n ? n : window,
                        i = e.Handlebars;
                    t.noConflict = function() {
                        return e.Handlebars === t && (e.Handlebars = i), t
                    }
                }, t.exports = e["default"]
            }).call(e, function() {
                return this
            }())
        }])
    }),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["catalog/catalog_record_availability_display"] = Handlebars.template({
            1: function() {
                return 'class="results"'
            },
            3: function(t, e, n, i, r) {
                var a;
                return (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.summary : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(4, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.items : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(8, r, 0),
                    inverse: t.program(11, r, 0),
                    data: r
                })) ? a : "")
            },
            4: function(t, e, n, i, r) {
                var a;
                return "      <h4>Summary</h4>\n" + (null != (a = n.each.call(null != e ? e : {}, null != e ? e.summary : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(5, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "")
            },
            5: function(t, e, n, i, r) {
                var a;
                return '      <div class="summary-holdings">\n' + (null != (a = n.each.call(null != e ? e : {}, e, {
                    name: "each",
                    hash: {},
                    fn: t.program(6, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "      </div>\n"
            },
            6: function(t, e) {
                return "          <span>" + t.escapeExpression(t.lambda(null != e ? e.label : e, e)) + ":&nbsp;</span>\n          <span>" + t.escapeExpression(t.lambda(null != e ? e.value : e, e)) + "</span>\n          </br>\n"
            },
            8: function(t, e, n, i, r) {
                var a;
                return "      <h4>\n        Availability\n        " + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.request_link : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(9, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "\n      </h4>\n"
            },
            9: function(t, e, n, i, r) {
                var a;
                return '<a class="btn request-this-link" href="' + t.escapeExpression("function" == typeof(a = null != (a = n.request_link || (null != e ? e.request_link : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "request_link",
                    hash: {},
                    data: r
                }) : a) + '" target="_blank">Request this</a>'
            },
            11: function(t, e, n, i, r) {
                var a;
                return null != (a = n["if"].call(null != e ? e : {}, null != e ? e.online_resource : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(12, r, 0),
                    inverse: t.program(14, r, 0),
                    data: r
                })) ? a : ""
            },
            12: function() {
                return ""
            },
            14: function() {
                return '        <h4>\n          Availability\n        </h4>\n        <div>\n          We don\'t currently have availability information for this item.\n          <a href="http://library.brown.edu/libweb/askalib.php" target="_blank">\n            Contact the library staff<a/>\n          for assistance with this item.\n        </div>\n'
            },
            16: function(t, e, n, i, r) {
                var a;
                return '  <table class="table">\n    <tr>\n      <th>Location</th>\n      <th>Call number</th>\n      <th>Status</th>\n    </tr>\n    <tbody>\n' + (null != (a = n.each.call(null != e ? e : {}, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(17, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.ezbBIB : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(26, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "    </tbody>\n  </table>\n"
            },
            17: function(t, e, n, i, r) {
                var a, o;
                return '        <tr>\n          <td id="' + t.escapeExpression("function" == typeof(o = null != (o = n.item_id || (null != e ? e.item_id : e)) ? o : n.helperMissing) ? o.call(null != e ? e : {}, {
                    name: "item_id",
                    hash: {},
                    data: r
                }) : o) + '">\n            <span class="location">' + t.escapeExpression("function" == typeof(o = null != (o = n.location || (null != e ? e.location : e)) ? o : n.helperMissing) ? o.call(null != e ? e : {}, {
                    name: "location",
                    hash: {},
                    data: r
                }) : o) + "</span>\n            " + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.shelf : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(18, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "\n" + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.bookplate_url : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(20, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "          </td>\n          <td>" + t.escapeExpression("function" == typeof(o = null != (o = n.callnumber || (null != e ? e.callnumber : e)) ? o : n.helperMissing) ? o.call(null != e ? e : {}, {
                    name: "callnumber",
                    hash: {},
                    data: r
                }) : o) + "</td>\n          <td>" + t.escapeExpression("function" == typeof(o = null != (o = n.status || (null != e ? e.status : e)) ? o : n.helperMissing) ? o.call(null != e ? e : {}, {
                    name: "status",
                    hash: {},
                    data: r
                }) : o) + " " + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.scan : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(22, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + " " + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.jcb_url : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(24, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "</td>\n        </tr>\n"
            },
            18: function(t, e, n, i, r) {
                var a, o;
                return ' -- <a href="' + t.escapeExpression("function" == typeof(o = null != (o = n.map || (null != e ? e.map : e)) ? o : n.helperMissing) ? o.call(null != e ? e : {}, {
                    name: "map",
                    hash: {},
                    data: r
                }) : o) + '" class="stack-map-link">Level ' + t.escapeExpression(t.lambda(null != (a = null != e ? e.shelf : e) ? a.floor : a, e)) + ", Aisle " + t.escapeExpression(t.lambda(null != (a = null != e ? e.shelf : e) ? a.aisle : a, e)) + "</a>"
            },
            20: function(t, e, n, i, r) {
                var a;
                return '              <div>\n                <a href="' + t.escapeExpression("function" == typeof(a = null != (a = n.bookplate_url || (null != e ? e.bookplate_url : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "bookplate_url",
                    hash: {},
                    data: r
                }) : a) + '" target="_blank">' + t.escapeExpression("function" == typeof(a = null != (a = n.bookplate_display || (null != e ? e.bookplate_display : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "bookplate_display",
                    hash: {},
                    data: r
                }) : a) + "</a>\n              </div>\n"
            },
            22: function(t, e, n, i, r) {
                var a;
                return ' <a href="' + t.escapeExpression("function" == typeof(a = null != (a = n.scan || (null != e ? e.scan : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "scan",
                    hash: {},
                    data: r
                }) : a) + '" class="scan">scan</a> | <a href="' + t.escapeExpression("function" == typeof(a = null != (a = n.item_request_url || (null != e ? e.item_request_url : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "item_request_url",
                    hash: {},
                    data: r
                }) : a) + '">item</a>'
            },
            24: function(t, e, n, i, r) {
                var a;
                return ' <a href="' + t.escapeExpression("function" == typeof(a = null != (a = n.jcb_url || (null != e ? e.jcb_url : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "jcb_url",
                    hash: {},
                    data: r
                }) : a) + '" class="scan">request-access</a> '
            },
            26: function(t, e, n, i, r) {
                var a;
                return '        <tr>\n          <td></td>\n          <td></td>\n          <td>Available via easyBorrow <a href="' + t.escapeExpression("function" == typeof(a = null != (a = n.bibURL || (null != e ? e.bibURL : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "bibURL",
                    hash: {},
                    data: r
                }) : a) + '">view details</a></td>\n        </tr>\n'
            },
            28: function(t, e, n, i, r) {
                var a;
                return '    <div class="more-results pull-right">\n        <a href="' + t.escapeExpression("function" == typeof(a = null != (a = n.more_link || (null != e ? e.more_link : e)) ? a : n.helperMissing) ? a.call(null != e ? e : {}, {
                    name: "more_link",
                    hash: {},
                    data: r
                }) : a) + '" class="label label-info">more</a>\n    </div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(t, e, n, i, r) {
                var a;
                return '\n<div class="holdings-wrapper" ' + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.results : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(1, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + ">\n" + (null != (a = n.unless.call(null != e ? e : {}, null != e ? e.results : e, {
                    name: "unless",
                    hash: {},
                    fn: t.program(3, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.items : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(16, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "\n" + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.has_more : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(28, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "</div>"
            },
            useData: !0
        }), this.HandlebarsTemplates["catalog/catalog_record_availability_display"]
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["easy/bdr_results"] = Handlebars.template({
            1: function(t, e, n, i, r, a, o) {
                var s;
                return '    <li>\n        <a href="' + t.escapeExpression(t.lambda(null != e ? e.link : e, e)) + '">' + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.nonsort : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(2, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + t.escapeExpression((n.truncate || e && e.truncate || n.helperMissing).call(null != e ? e : {}, null != e ? e.title : e, null != o[1] ? o[1].max_title_length : o[1], {
                    name: "truncate",
                    hash: {},
                    data: r
                })) + "</a>\n        <br/>\n        <small>" + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.author : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(4, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.year : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(6, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n        " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.genre : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(8, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.online : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(10, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "</small>\n    </li>\n"
            },
            2: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.nonsort : e, e)) + " "
            },
            4: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.author : e, e)) + ". "
            },
            6: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.year : e, e)) + "."
            },
            8: function(t, e) {
                return "<br/>" + t.escapeExpression(t.lambda(null != e ? e.genre : e, e))
            },
            10: function(t, e) {
                return '            <br/>\n            <a href="' + t.escapeExpression(t.lambda(null != e ? e.link : e, e)) + '" class="label label-info">Online</a>\n        '
            },
            compiler: [7, ">= 4.0.0"],
            main: function(t, e, n, i, r, a, o) {
                var s;
                return '<ul class="list-unstyled">\n' + (null != (s = n.each.call(null != e ? e : {}, null != e ? e.docs : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(1, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + '</ul>\n<div class="more center-block">\n    <a href="' + t.escapeExpression(t.lambda(null != e ? e.more : e, e)) + '">View ' + t.escapeExpression(t.lambda(null != e ? e.total : e, e)) + " results</a>\n</div>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsTemplates["easy/bdr_results"]
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["easy/catalog_results"] = Handlebars.template({
            1: function(t, e, n, i, r) {
                var a;
                return '    <h3 class="bento-header">\n        <a href="' + t.escapeExpression(t.lambda(null != e ? e.more : e, e)) + '">' + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.icon : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(2, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + t.escapeExpression(t.lambda(null != e ? e.box : e, e)) + "</a>\n        " + (null != (a = n["if"].call(null != e ? e : {}, null != e ? e.info : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(4, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "\n    </h3>\n"
            },
            2: function(t, e) {
                return '<i class="fa fa-' + t.escapeExpression(t.lambda(null != e ? e.icon : e, e)) + '"></i>'
            },
            4: function(t, e) {
                return '<button type="button" class="btn btn-sm info-box" data-content="' + t.escapeExpression(t.lambda(null != e ? e.info : e, e)) + '">\n        <i class="fa fa-info"></i>\n        <span class="sr-only">Information</span>\n        </button>'
            },
            6: function(t, e, n, i, r, a, o) {
                var s;
                return '    <li>\n        <a href="' + t.escapeExpression(t.lambda(null != e ? e.link : e, e)) + '">' + t.escapeExpression((n.truncate || e && e.truncate || n.helperMissing).call(null != e ? e : {}, null != e ? e.title_display : e, null != o[1] ? o[1].max_title_length : o[1], {
                    name: "truncate",
                    hash: {},
                    data: r
                })) + "</a>\n        <br/>\n        <small>\n            " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.author_text : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(7, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n            " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.pub_date : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(9, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.online : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(11, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "        </small>\n    </li>\n"
            },
            7: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.author_text : e, e)) + ".&nbsp;"
            },
            9: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.pub_date : e, e))
            },
            11: function(t, e) {
                return '                <a href="' + t.escapeExpression(t.lambda(null != e ? e.link : e, e)) + '" class="label label-info">Online</a>\n'
            },
            13: function(t, e) {
                return '      <br/>\n      or use the <a href="' + t.escapeExpression(t.lambda(null != e ? e.advanced : e, e)) + '">advanced book search</a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(t, e, n, i, r, a, o) {
                var s;
                return (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.other : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(1, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + '<ul class="list-unstyled">\n' + (null != (s = n.each.call(null != e ? e : {}, null != e ? e.docs : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(6, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + '</ul>\n<div class="more center-block">\n    <a href="' + t.escapeExpression(t.lambda(null != e ? e.more : e, e)) + '">View ' + t.escapeExpression(t.lambda(null != e ? e.total : e, e)) + " results &raquo;</a>\n" + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.advanced : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(13, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "</div>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsTemplates["easy/catalog_results"]
    }.call(this),
    function() {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["easy/summon_results"] = Handlebars.template({
            1: function(t, e, n, i, r, a, o) {
                var s;
                return '    <li>\n        <a href="' + t.escapeExpression(t.lambda(null != e ? e.link : e, e)) + '" target="_blank">' + t.escapeExpression((n.truncate || e && e.truncate || n.helperMissing).call(null != e ? e : {}, null != e ? e.title : e, null != o[1] ? o[1].max_title_length : o[1], {
                    name: "truncate",
                    hash: {},
                    data: r
                })) + "</a>\n        <br/>\n        <small>\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.author : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(2, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.year : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(4, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n          <br/>\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.venue : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(6, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.volume : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(8, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.issue : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(10, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.start : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(12, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n          " + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.database : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(14, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "\n      </small>\n    </li>\n"
            },
            2: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.author : e, e)) + ".&nbsp;"
            },
            4: function(t, e) {
                return t.escapeExpression(t.lambda(null != e ? e.year : e, e))
            },
            6: function(t, e) {
                return "<em>" + t.escapeExpression(t.lambda(null != e ? e.venue : e, e)) + "</em>.&nbsp;"
            },
            8: function(t, e) {
                return "Vol: " + t.escapeExpression(t.lambda(null != e ? e.volume : e, e)) + ".&nbsp;"
            },
            10: function(t, e) {
                return "Issue: " + t.escapeExpression(t.lambda(null != e ? e.issue : e, e)) + "&nbsp;"
            },
            12: function(t, e) {
                return "pg. " + t.escapeExpression(t.lambda(null != e ? e.start : e, e)) + "."
            },
            14: function(t, e) {
                return "(" + t.escapeExpression(t.lambda(null != e ? e.database : e, e)) + ")"
            },
            16: function(t, e) {
                return '      <br/>\n      or use the <a href="' + t.escapeExpression(t.lambda(null != e ? e.advanced : e, e)) + '" target="_blank">advanced journal search</a>\n'
            },
            18: function(t, e) {
                return '      <br/>\n      <a href="' + t.escapeExpression(t.lambda(null != e ? e.raw : e, e)) + '" target="_blank" target="_blank">Raw JSON</a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(t, e, n, i, r, a, o) {
                var s;
                return '<ul class="list-unstyled">\n' + (null != (s = n.each.call(null != e ? e : {}, null != e ? e.docs : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(1, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + '</ul>\n<div class="more center-block">\n    <a href="' + t.escapeExpression(t.lambda(null != e ? e.more : e, e)) + '" target="_blank">View ' + t.escapeExpression(t.lambda(null != e ? e.total : e, e)) + " journal articles &raquo;</a>\n" + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.advanced : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(16, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(null != e ? e : {}, null != e ? e.raw : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(18, r, 0, a, o),
                    inverse: t.noop,
                    data: r
                })) ? s : "") + "</div>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsTemplates["easy/summon_results"]
    }.call(this), Handlebars.registerHelper("truncate", function(t, e) {
        if (t != undefined && t.length > e && t.length > 0) {
            var n = t + " ";
            return n = t.substr(0, e), n = (n = t.substr(0, n.lastIndexOf(" "))).length > 0 ? n : t.substr(0, e), new Handlebars.SafeString(n + "...")
        }
        return t
    }),
    function(t) {
        t.fn.plugGoogleBookContent = function() {
            function e() {
                for (var t = o.find(u), e = t.length; e > 0;) c.push(t.splice(0, s)), e = t.length;
                n()
            }

            function n() {
                t.each(c, function(e, n) {
                    var r = a(n),
                        o = l + r;
                    t.ajax({
                        type: "GET",
                        url: o,
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
                n = (n = n.replace(/zoom=5/, "zoom=1")).replace(/&?edge=curl/, "");
                var r = o.find(i);
                r.attr("src", n).removeClass("hide").addClass("show"), r.parent().removeClass("hide"), r.parent().find("span.preview-info a").attr("href", e.preview_url).removeClass("hide").addClass("show")
            }

            function a(e) {
                var n = "";
                return t.each(e, function() {
                    var e = t(this),
                        i = e.data("isbn") || "",
                        r = e.data("oclc") || "",
                        a = e.data("lccn") || "";
                    n += [i, r, a].join(",") + ","
                }), n = (n = n.replace(/,,/, "")).replace(/,$/, "")
            }
            var o, s = 25,
                l = "//books.google.com/books?jscmd=viewapi&bibkeys=",
                u = "img.cover-image",
                c = [];
            return this.each(function() {
                o = t(this), e()
            })
        }
    }(jQuery), Blacklight.onLoad(function() {
        $("#documents").plugGoogleBookContent(), $("div#content .document").plugGoogleBookContent()
    }),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.tooltip"),
                    a = "object" == typeof e && e;
                !r && /destroy|hide/.test(e) || (r || i.data("bs.tooltip", r = new n(this, a)), "string" == typeof e && r[e]())
            })
        }
        var n = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
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
            for (var r = this.options.trigger.split(" "), a = r.length; a--;) {
                var o = r[a];
                if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != o) {
                    var s = "hover" == o ? "mouseenter" : "focusin",
                        l = "hover" == o ? "mouseleave" : "focusout";
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
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
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
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
            else {
                if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                n.timeout = setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)
            }
        }, n.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, n.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)
            }
        }, n.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i) return;
                var r = this,
                    a = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), a.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && a.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    u = l.test(s);
                u && (s = s.replace(l, "") || "top"), a.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(),
                    d = a[0].offsetWidth,
                    f = a[0].offsetHeight;
                if (u) {
                    var p = s,
                        h = this.getPosition(this.$viewport);
                    s = "bottom" == s && c.bottom + f > h.bottom ? "top" : "top" == s && c.top - f < h.top ? "bottom" : "right" == s && c.right + d > h.width ? "left" : "left" == s && c.left - d < h.left ? "right" : s, a.removeClass(p).addClass(s)
                }
                var m = this.getCalculatedOffset(s, c, d, f);
                this.applyPlacement(m, s);
                var g = function() {
                    var t = r.hoverState;
                    r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
                };
                t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
            }
        }, n.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                r = i[0].offsetWidth,
                a = i[0].offsetHeight,
                o = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(s) && (s = 0), e.top += o, e.left += s, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                u = i[0].offsetHeight;
            "top" == n && u != a && (e.top = e.top + a - u);
            var c = this.getViewportAdjustedDelta(n, e, l, u);
            c.left ? e.left += c.left : e.top += c.top;
            var d = /top|bottom/.test(n),
                f = d ? 2 * c.left - r + l : 2 * c.top - a + u,
                p = d ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(f, i[0][p], d)
        }, n.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(e) {
            function i() {
                "in" != r.hoverState && a.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
            }
            var r = this,
                a = t(this.$tip),
                o = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(o), !o.isDefaultPrevented()) return a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
        }, n.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(e) {
            var n = (e = e || this.$element)[0],
                i = "BODY" == n.tagName,
                r = n.getBoundingClientRect();
            null == r.width && (r = t.extend({}, r, {
                width: r.right - r.left,
                height: r.bottom - r.top
            }));
            var a = window.SVGElement && n instanceof window.SVGElement,
                o = i ? {
                    top: 0,
                    left: 0
                } : a ? null : e.offset(),
                s = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                l = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, r, s, l, o)
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
            var a = this.options.viewport && this.options.viewport.padding || 0,
                o = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var s = e.top - a - o.scroll,
                    l = e.top + a - o.scroll + i;
                s < o.top ? r.top = o.top - s : l > o.top + o.height && (r.top = o.top + o.height - l)
            } else {
                var u = e.left - a,
                    c = e.left + a + n;
                u < o.left ? r.left = o.left - u : c > o.right && (r.left = o.left + o.width - c)
            }
            return r
        }, n.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, n.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
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
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = i, this
        }
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.popover"),
                    a = "object" == typeof e && e;
                !r && /destroy|hide/.test(e) || (r || i.data("bs.popover", r = new n(this, a)), "string" == typeof e && r[e]())
            })
        }
        var n = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
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
            window._gaq = [], t.analyticsId = t.getAnalyticsId(), window._gaq.push(["_setAccount", t.analyticsId]), (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", (e = document.getElementsByTagName("script")[0]).parentNode.insertBefore(n, e)
        }, t.trackPageview = function(e) {
            if (!t.isLocalRequest()) return e ? window._gaq.push(["_trackPageview", e]) : window._gaq.push(["_trackPageview"]), window._gaq.push(["_trackPageLoadTime"])
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
    function(t) {
        t.color = {}, t.color.make = function(e, n, i, r) {
            var a = {};
            return a.r = e || 0, a.g = n || 0, a.b = i || 0, a.a = null != r ? r : 1, a.add = function(t, e) {
                for (var n = 0; n < t.length; ++n) a[t.charAt(n)] += e;
                return a.normalize()
            }, a.scale = function(t, e) {
                for (var n = 0; n < t.length; ++n) a[t.charAt(n)] *= e;
                return a.normalize()
            }, a.toString = function() {
                return a.a >= 1 ? "rgb(" + [a.r, a.g, a.b].join(",") + ")" : "rgba(" + [a.r, a.g, a.b, a.a].join(",") + ")"
            }, a.normalize = function() {
                function t(t, e, n) {
                    return e < t ? t : e > n ? n : e
                }
                return a.r = t(0, parseInt(a.r), 255), a.g = t(0, parseInt(a.g), 255), a.b = t(0, parseInt(a.b), 255), a.a = t(0, a.a, 1), a
            }, a.clone = function() {
                return t.color.make(a.r, a.b, a.g, a.a)
            }, a.normalize()
        }, t.color.extract = function(e, n) {
            var i;
            do {
                if ("" != (i = e.css(n).toLowerCase()) && "transparent" != i) break;
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
            var a = t.trim(n).toLowerCase();
            return "transparent" == a ? r(255, 255, 255, 0) : r((i = e[a] || [0, 0, 0])[0], i[1], i[2])
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
            if (null == i && ((i = document.createElement("canvas")).className = e, t(i).css({
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
                a = window.devicePixelRatio || 1,
                o = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
            this.pixelRatio = a / o, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
        }

        function n(n, r, a, o) {
            function s(t, e) {
                e = [gt].concat(e);
                for (var n = 0; n < t.length; ++n) t[n].apply(this, e)
            }

            function l() {
                for (var n = {
                        Canvas: e
                    }, i = 0; i < o.length; ++i) {
                    var r = o[i];
                    r.init(gt, n), r.options && t.extend(!0, rt, r.options)
                }
            }

            function u(e) {
                t.extend(!0, rt, e), e && e.colors && (rt.colors = e.colors), null == rt.xaxis.color && (rt.xaxis.color = t.color.parse(rt.grid.color).scale("a", .22).toString()), null == rt.yaxis.color && (rt.yaxis.color = t.color.parse(rt.grid.color).scale("a", .22).toString()), null == rt.xaxis.tickColor && (rt.xaxis.tickColor = rt.grid.tickColor || rt.xaxis.color), null == rt.yaxis.tickColor && (rt.yaxis.tickColor = rt.grid.tickColor || rt.yaxis.color), null == rt.grid.borderColor && (rt.grid.borderColor = rt.grid.color), null == rt.grid.tickColor && (rt.grid.tickColor = t.color.parse(rt.grid.color).scale("a", .22).toString());
                var i, r, a, o = n.css("font-size"),
                    l = o ? +o.replace("px", "") : 13,
                    u = {
                        style: n.css("font-style"),
                        size: Math.round(.8 * l),
                        variant: n.css("font-variant"),
                        weight: n.css("font-weight"),
                        family: n.css("font-family")
                    };
                for (a = rt.xaxes.length || 1, i = 0; i < a; ++i)(r = rt.xaxes[i]) && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, rt.xaxis, r), rt.xaxes[i] = r, r.font && (r.font = t.extend({}, u, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                for (a = rt.yaxes.length || 1, i = 0; i < a; ++i)(r = rt.yaxes[i]) && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, rt.yaxis, r), rt.yaxes[i] = r, r.font && (r.font = t.extend({}, u, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                for (rt.xaxis.noTicks && null == rt.xaxis.ticks && (rt.xaxis.ticks = rt.xaxis.noTicks), rt.yaxis.noTicks && null == rt.yaxis.ticks && (rt.yaxis.ticks = rt.yaxis.noTicks), rt.x2axis && (rt.xaxes[1] = t.extend(!0, {}, rt.xaxis, rt.x2axis), rt.xaxes[1].position = "top"), rt.y2axis && (rt.yaxes[1] = t.extend(!0, {}, rt.yaxis, rt.y2axis), rt.yaxes[1].position = "right"), rt.grid.coloredAreas && (rt.grid.markings = rt.grid.coloredAreas), rt.grid.coloredAreasColor && (rt.grid.markingsColor = rt.grid.coloredAreasColor), rt.lines && t.extend(!0, rt.series.lines, rt.lines), rt.points && t.extend(!0, rt.series.points, rt.points), rt.bars && t.extend(!0, rt.series.bars, rt.bars), null != rt.shadowSize && (rt.series.shadowSize = rt.shadowSize), null != rt.highlightColor && (rt.series.highlightColor = rt.highlightColor), i = 0; i < rt.xaxes.length; ++i) g(ct, i + 1).options = rt.xaxes[i];
                for (i = 0; i < rt.yaxes.length; ++i) g(dt, i + 1).options = rt.yaxes[i];
                for (var c in mt) rt.hooks[c] && rt.hooks[c].length && (mt[c] = mt[c].concat(rt.hooks[c]));
                s(mt.processOptions, [rt])
            }

            function c(t) {
                it = d(t), v(), y()
            }

            function d(e) {
                for (var n = [], i = 0; i < e.length; ++i) {
                    var r = t.extend(!0, {}, rt.series);
                    null != e[i].data ? (r.data = e[i].data, delete e[i].data, t.extend(!0, r, e[i]), e[i].data = r.data) : r.data = e[i], n.push(r)
                }
                return n
            }

            function f(t, e) {
                var n = t[e + "axis"];
                return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
            }

            function p() {
                return t.grep(ct.concat(dt), function(t) {
                    return t
                })
            }

            function h(t) {
                var e, n, i = {};
                for (e = 0; e < ct.length; ++e)(n = ct[e]) && n.used && (i["x" + n.n] = n.c2p(t.left));
                for (e = 0; e < dt.length; ++e)(n = dt[e]) && n.used && (i["y" + n.n] = n.c2p(t.top));
                return i.x1 !== undefined && (i.x = i.x1), i.y1 !== undefined && (i.y = i.y1), i
            }

            function m(t) {
                var e, n, i, r = {};
                for (e = 0; e < ct.length; ++e)
                    if ((n = ct[e]) && n.used && (null == t[i = "x" + n.n] && 1 == n.n && (i = "x"), null != t[i])) {
                        r.left = n.p2c(t[i]);
                        break
                    }
                for (e = 0; e < dt.length; ++e)
                    if ((n = dt[e]) && n.used && (null == t[i = "y" + n.n] && 1 == n.n && (i = "y"), null != t[i])) {
                        r.top = n.p2c(t[i]);
                        break
                    }
                return r
            }

            function g(e, n) {
                return e[n - 1] || (e[n - 1] = {
                    n: n,
                    direction: e == ct ? "x" : "y",
                    options: t.extend(!0, {}, e == ct ? rt.xaxis : rt.yaxis)
                }), e[n - 1]
            }

            function v() {
                var e, n = it.length,
                    i = -1;
                for (e = 0; e < it.length; ++e) {
                    var r = it[e].color;
                    null != r && (n--, "number" == typeof r && r > i && (i = r))
                }
                n <= i && (n = i + 1);
                var a, o = [],
                    s = rt.colors,
                    l = s.length,
                    u = 0;
                for (e = 0; e < n; e++) a = t.color.parse(s[e % l] || "#666"), e % l == 0 && e && (u = u >= 0 ? u < .5 ? -u - .2 : 0 : -u), o[e] = a.scale("rgb", 1 + u);
                var c, d = 0;
                for (e = 0; e < it.length; ++e) {
                    if (null == (c = it[e]).color ? (c.color = o[d].toString(), ++d) : "number" == typeof c.color && (c.color = o[c.color].toString()), null == c.lines.show) {
                        var p, h = !0;
                        for (p in c)
                            if (c[p] && c[p].show) {
                                h = !1;
                                break
                            }
                        h && (c.lines.show = !0)
                    }
                    null == c.lines.zero && (c.lines.zero = !!c.lines.fill), c.xaxis = g(ct, f(c, "x")), c.yaxis = g(dt, f(c, "y"))
                }
            }

            function y() {
                function e(t, e, n) {
                    e < t.datamin && e != -y && (t.datamin = e), n > t.datamax && n != y && (t.datamax = n)
                }
                var n, i, r, a, o, l, u, c, d, f, h, m, g = Number.POSITIVE_INFINITY,
                    v = Number.NEGATIVE_INFINITY,
                    y = Number.MAX_VALUE;
                for (t.each(p(), function(t, e) {
                        e.datamin = g, e.datamax = v, e.used = !1
                    }), n = 0; n < it.length; ++n)(o = it[n]).datapoints = {
                    points: []
                }, s(mt.processRawData, [o, o.data, o.datapoints]);
                for (n = 0; n < it.length; ++n) {
                    if (h = (o = it[n]).data, !(m = o.datapoints.format)) {
                        if ((m = []).push({
                                x: !0,
                                number: !0,
                                required: !0
                            }), m.push({
                                y: !0,
                                number: !0,
                                required: !0
                            }), o.bars.show || o.lines.show && o.lines.fill) {
                            var b = !!(o.bars.show && o.bars.zero || o.lines.show && o.lines.zero);
                            m.push({
                                y: !0,
                                number: !0,
                                required: !1,
                                defaultValue: 0,
                                autoscale: b
                            }), o.bars.horizontal && (delete m[m.length - 1].y, m[m.length - 1].x = !0)
                        }
                        o.datapoints.format = m
                    }
                    if (null == o.datapoints.pointsize) {
                        o.datapoints.pointsize = m.length, u = o.datapoints.pointsize, l = o.datapoints.points;
                        var x = o.lines.show && o.lines.steps;
                        for (o.xaxis.used = o.yaxis.used = !0, i = r = 0; i < h.length; ++i, r += u) {
                            var w = null == (f = h[i]);
                            if (!w)
                                for (a = 0; a < u; ++a) c = f[a], (d = m[a]) && (d.number && null != c && (c = +c, isNaN(c) ? c = null : c == Infinity ? c = y : c == -Infinity && (c = -y)), null == c && (d.required && (w = !0), null != d.defaultValue && (c = d.defaultValue))), l[r + a] = c;
                            if (w)
                                for (a = 0; a < u; ++a) null != (c = l[r + a]) && !1 !== (d = m[a]).autoscale && (d.x && e(o.xaxis, c, c), d.y && e(o.yaxis, c, c)), l[r + a] = null;
                            else if (x && r > 0 && null != l[r - u] && l[r - u] != l[r] && l[r - u + 1] != l[r + 1]) {
                                for (a = 0; a < u; ++a) l[r + u + a] = l[r + a];
                                l[r + 1] = l[r - u + 1], r += u
                            }
                        }
                    }
                }
                for (n = 0; n < it.length; ++n) o = it[n], s(mt.processDatapoints, [o, o.datapoints]);
                for (n = 0; n < it.length; ++n) {
                    l = (o = it[n]).datapoints.points, u = o.datapoints.pointsize, m = o.datapoints.format;
                    var k = g,
                        T = g,
                        _ = v,
                        C = v;
                    for (i = 0; i < l.length; i += u)
                        if (null != l[i])
                            for (a = 0; a < u; ++a) c = l[i + a], (d = m[a]) && !1 !== d.autoscale && c != y && c != -y && (d.x && (c < k && (k = c), c > _ && (_ = c)), d.y && (c < T && (T = c), c > C && (C = c)));
                    if (o.bars.show) {
                        var S;
                        switch (o.bars.align) {
                            case "left":
                                S = 0;
                                break;
                            case "right":
                                S = -o.bars.barWidth;
                                break;
                            default:
                                S = -o.bars.barWidth / 2
                        }
                        o.bars.horizontal ? (T += S, C += S + o.bars.barWidth) : (k += S, _ += S + o.bars.barWidth)
                    }
                    e(o.xaxis, k, _), e(o.yaxis, T, C)
                }
                t.each(p(), function(t, e) {
                    e.datamin == g && (e.datamin = null), e.datamax == v && (e.datamax = null)
                })
            }

            function b() {
                n.css("padding", 0).children().filter(function() {
                    return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                }).remove(), "static" == n.css("position") && n.css("position", "relative"), at = new e("flot-base", n), ot = new e("flot-overlay", n), lt = at.context, ut = ot.context, st = t(ot.element).unbind();
                var i = n.data("plot");
                i && (i.shutdown(), ot.clear()), n.data("plot", gt)
            }

            function x() {
                rt.grid.hoverable && (st.mousemove(V), st.bind("mouseleave", U)), rt.grid.clickable && st.click(Q), s(mt.bindEvents, [st])
            }

            function w() {
                yt && clearTimeout(yt), st.unbind("mousemove", V), st.unbind("mouseleave", U), st.unbind("click", Q), s(mt.shutdown, [st])
            }

            function k(t) {
                function e(t) {
                    return t
                }
                var n, i, r = t.options.transform || e,
                    a = t.options.inverseTransform;
                "x" == t.direction ? (n = t.scale = pt / Math.abs(r(t.max) - r(t.min)), i = Math.min(r(t.max), r(t.min))) : (n = -(n = t.scale = ht / Math.abs(r(t.max) - r(t.min))), i = Math.max(r(t.max), r(t.min))), t.p2c = r == e ? function(t) {
                    return (t - i) * n
                } : function(t) {
                    return (r(t) - i) * n
                }, t.c2p = a ? function(t) {
                    return a(i + t / n)
                } : function(t) {
                    return i + t / n
                }
            }

            function T(t) {
                for (var e = t.options, n = t.ticks || [], i = e.labelWidth || 0, r = e.labelHeight || 0, a = i || ("x" == t.direction ? Math.floor(at.width / (n.length || 1)) : null), o = t.direction + "Axis " + t.direction + t.n + "Axis", s = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + o, l = e.font || "flot-tick-label tickLabel", u = 0; u < n.length; ++u) {
                    var c = n[u];
                    if (c.label) {
                        var d = at.getTextInfo(s, c.label, l, null, a);
                        i = Math.max(i, d.width), r = Math.max(r, d.height)
                    }
                }
                t.labelWidth = e.labelWidth || i, t.labelHeight = e.labelHeight || r
            }

            function _(e) {
                var n = e.labelWidth,
                    i = e.labelHeight,
                    r = e.options.position,
                    a = "x" === e.direction,
                    o = e.options.tickLength,
                    s = rt.grid.axisMargin,
                    l = rt.grid.labelMargin,
                    u = !0,
                    c = !0,
                    d = !0,
                    f = !1;
                t.each(a ? ct : dt, function(t, n) {
                    n && n.reserveSpace && (n === e ? f = !0 : n.options.position === r && (f ? c = !1 : u = !1), f || (d = !1))
                }), c && (s = 0), null == o && (o = d ? "full" : 5), isNaN(+o) || (l += +o), a ? (i += l, "bottom" == r ? (ft.bottom += i + s, e.box = {
                    top: at.height - ft.bottom,
                    height: i
                }) : (e.box = {
                    top: ft.top + s,
                    height: i
                }, ft.top += i + s)) : (n += l, "left" == r ? (e.box = {
                    left: ft.left + s,
                    width: n
                }, ft.left += n + s) : (ft.right += n + s, e.box = {
                    left: at.width - ft.right,
                    width: n
                })), e.position = r, e.tickLength = o, e.box.padding = l, e.innermost = u
            }

            function C(t) {
                "x" == t.direction ? (t.box.left = ft.left - t.labelWidth / 2, t.box.width = at.width - ft.left - ft.right + t.labelWidth) : (t.box.top = ft.top - t.labelHeight / 2, t.box.height = at.height - ft.bottom - ft.top + t.labelHeight)
            }

            function S() {
                var e, n = rt.grid.minBorderMargin;
                if (null == n)
                    for (n = 0, e = 0; e < it.length; ++e) n = Math.max(n, 2 * (it[e].points.radius + it[e].points.lineWidth / 2));
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
                }), ft.left = Math.ceil(Math.max(i.left, ft.left)), ft.right = Math.ceil(Math.max(i.right, ft.right)), ft.top = Math.ceil(Math.max(i.top, ft.top)), ft.bottom = Math.ceil(Math.max(i.bottom, ft.bottom))
            }

            function E() {
                var e, n = p(),
                    i = rt.grid.show;
                for (var r in ft) {
                    var a = rt.grid.margin || 0;
                    ft[r] = "number" == typeof a ? a : a[r] || 0
                }
                for (var r in s(mt.processOffset, [ft]), ft) "object" == typeof rt.grid.borderWidth ? ft[r] += i ? rt.grid.borderWidth[r] : 0 : ft[r] += i ? rt.grid.borderWidth : 0;
                if (t.each(n, function(t, e) {
                        e.show = e.options.show, null == e.show && (e.show = e.used), e.reserveSpace = e.show || e.options.reserveSpace, j(e)
                    }), i) {
                    var o = t.grep(n, function(t) {
                        return t.reserveSpace
                    });
                    for (t.each(o, function(t, e) {
                            M(e), N(e), A(e, e.ticks), T(e)
                        }), e = o.length - 1; e >= 0; --e) _(o[e]);
                    S(), t.each(o, function(t, e) {
                        C(e)
                    })
                }
                pt = at.width - ft.left - ft.right, ht = at.height - ft.bottom - ft.top, t.each(n, function(t, e) {
                    k(e)
                }), i && L(), W()
            }

            function j(t) {
                var e = t.options,
                    n = +(null != e.min ? e.min : t.datamin),
                    i = +(null != e.max ? e.max : t.datamax),
                    r = i - n;
                if (0 == r) {
                    var a = 0 == i ? 1 : .01;
                    null == e.min && (n -= a), null != e.max && null == e.min || (i += a)
                } else {
                    var o = e.autoscaleMargin;
                    null != o && (null == e.min && (n -= r * o) < 0 && null != t.datamin && t.datamin >= 0 && (n = 0), null == e.max && (i += r * o) > 0 && null != t.datamax && t.datamax <= 0 && (i = 0))
                }
                t.min = n, t.max = i
            }

            function M(e) {
                var n, r = e.options;
                n = "number" == typeof r.ticks && r.ticks > 0 ? r.ticks : .3 * Math.sqrt("x" == e.direction ? at.width : at.height);
                var a = (e.max - e.min) / n,
                    o = -Math.floor(Math.log(a) / Math.LN10),
                    s = r.tickDecimals;
                null != s && o > s && (o = s);
                var l, u = Math.pow(10, -o),
                    c = a / u;
                if (c < 1.5 ? l = 1 : c < 3 ? (l = 2, c > 2.25 && (null == s || o + 1 <= s) && (l = 2.5, ++o)) : l = c < 7.5 ? 5 : 10, l *= u, null != r.minTickSize && l < r.minTickSize && (l = r.minTickSize), e.delta = a, e.tickDecimals = Math.max(0, null != s ? s : o), e.tickSize = r.tickSize || l, "time" == r.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                if (e.tickGenerator || (e.tickGenerator = function(t) {
                        var e, n = [],
                            r = i(t.min, t.tickSize),
                            a = 0,
                            o = Number.NaN;
                        do {
                            e = o, o = r + a * t.tickSize, n.push(o), ++a
                        } while (o < t.max && o != e);
                        return n
                    }, e.tickFormatter = function(t, e) {
                        var n = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                            i = "" + Math.round(t * n) / n;
                        if (null != e.tickDecimals) {
                            var r = i.indexOf("."),
                                a = -1 == r ? 0 : i.length - r - 1;
                            if (a < e.tickDecimals) return (a ? i : i + ".") + ("" + n).substr(1, e.tickDecimals - a)
                        }
                        return i
                    }), t.isFunction(r.tickFormatter) && (e.tickFormatter = function(t, e) {
                        return "" + r.tickFormatter(t, e)
                    }), null != r.alignTicksWithAxis) {
                    var d = ("x" == e.direction ? ct : dt)[r.alignTicksWithAxis - 1];
                    if (d && d.used && d != e) {
                        var f = e.tickGenerator(e);
                        if (f.length > 0 && (null == r.min && (e.min = Math.min(e.min, f[0])), null == r.max && f.length > 1 && (e.max = Math.max(e.max, f[f.length - 1]))), e.tickGenerator = function(t) {
                                var e, n, i = [];
                                for (n = 0; n < d.ticks.length; ++n) e = (d.ticks[n].v - d.min) / (d.max - d.min), e = t.min + e * (t.max - t.min), i.push(e);
                                return i
                            }, !e.mode && null == r.tickDecimals) {
                            var p = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10)),
                                h = e.tickGenerator(e);
                            h.length > 1 && /\..*0$/.test((h[1] - h[0]).toFixed(p)) || (e.tickDecimals = p)
                        }
                    }
                }
            }

            function N(e) {
                var n, i, r = e.options.ticks,
                    a = [];
                for (null == r || "number" == typeof r && r > 0 ? a = e.tickGenerator(e) : r && (a = t.isFunction(r) ? r(e) : r), e.ticks = [], n = 0; n < a.length; ++n) {
                    var o = null,
                        s = a[n];
                    "object" == typeof s ? (i = +s[0], s.length > 1 && (o = s[1])) : i = +s, null == o && (o = e.tickFormatter(i, e)), isNaN(i) || e.ticks.push({
                        v: i,
                        label: o
                    })
                }
            }

            function A(t, e) {
                t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
            }

            function D() {
                at.clear(), s(mt.drawBackground, [lt]);
                var t = rt.grid;
                t.show && t.backgroundColor && I(), t.show && !t.aboveData && O();
                for (var e = 0; e < it.length; ++e) s(mt.drawSeries, [lt, it[e]]), P(it[e]);
                s(mt.draw, [lt]), t.show && t.aboveData && O(), at.render(), G()
            }

            function $(t, e) {
                for (var n, i, r, a, o = p(), s = 0; s < o.length; ++s)
                    if ((n = o[s]).direction == e && (t[a = e + n.n + "axis"] || 1 != n.n || (a = e + "axis"), t[a])) {
                        i = t[a].from, r = t[a].to;
                        break
                    }
                if (t[a] || (n = "x" == e ? ct[0] : dt[0], i = t[e + "1"], r = t[e + "2"]), null != i && null != r && i > r) {
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
                lt.save(), lt.translate(ft.left, ft.top), lt.fillStyle = nt(rt.grid.backgroundColor, ht, 0, "rgba(255, 255, 255, 0)"), lt.fillRect(0, 0, pt, ht), lt.restore()
            }

            function O() {
                var e, n, i, r;
                lt.save(), lt.translate(ft.left, ft.top);
                var a = rt.grid.markings;
                if (a)
                    for (t.isFunction(a) && ((n = gt.getAxes()).xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, a = a(n)), e = 0; e < a.length; ++e) {
                        var o = a[e],
                            s = $(o, "x"),
                            l = $(o, "y");
                        null == s.from && (s.from = s.axis.min), null == s.to && (s.to = s.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), s.to < s.axis.min || s.from > s.axis.max || l.to < l.axis.min || l.from > l.axis.max || (s.from = Math.max(s.from, s.axis.min), s.to = Math.min(s.to, s.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), s.from == s.to && l.from == l.to || (s.from = s.axis.p2c(s.from), s.to = s.axis.p2c(s.to), l.from = l.axis.p2c(l.from), l.to = l.axis.p2c(l.to), s.from == s.to || l.from == l.to ? (lt.beginPath(), lt.strokeStyle = o.color || rt.grid.markingsColor, lt.lineWidth = o.lineWidth || rt.grid.markingsLineWidth, lt.moveTo(s.from, l.from), lt.lineTo(s.to, l.to), lt.stroke()) : (lt.fillStyle = o.color || rt.grid.markingsColor, lt.fillRect(s.from, l.to, s.to - s.from, l.from - l.to))))
                    }
                n = p(), i = rt.grid.borderWidth;
                for (var u = 0; u < n.length; ++u) {
                    var c, d, f, h, m = n[u],
                        g = m.box,
                        v = m.tickLength;
                    if (m.show && 0 != m.ticks.length) {
                        for (lt.lineWidth = 1, "x" == m.direction ? (c = 0, d = "full" == v ? "top" == m.position ? 0 : ht : g.top - ft.top + ("top" == m.position ? g.height : 0)) : (d = 0, c = "full" == v ? "left" == m.position ? 0 : pt : g.left - ft.left + ("left" == m.position ? g.width : 0)), m.innermost || (lt.strokeStyle = m.options.color, lt.beginPath(), f = h = 0, "x" == m.direction ? f = pt + 1 : h = ht + 1, 1 == lt.lineWidth && ("x" == m.direction ? d = Math.floor(d) + .5 : c = Math.floor(c) + .5), lt.moveTo(c, d), lt.lineTo(c + f, d + h), lt.stroke()), lt.strokeStyle = m.options.tickColor, lt.beginPath(), e = 0; e < m.ticks.length; ++e) {
                            var y = m.ticks[e].v;
                            f = h = 0, isNaN(y) || y < m.min || y > m.max || "full" == v && ("object" == typeof i && i[m.position] > 0 || i > 0) && (y == m.min || y == m.max) || ("x" == m.direction ? (c = m.p2c(y), h = "full" == v ? -ht : v, "top" == m.position && (h = -h)) : (d = m.p2c(y), f = "full" == v ? -pt : v, "left" == m.position && (f = -f)), 1 == lt.lineWidth && ("x" == m.direction ? c = Math.floor(c) + .5 : d = Math.floor(d) + .5), lt.moveTo(c, d), lt.lineTo(c + f, d + h))
                        }
                        lt.stroke()
                    }
                }
                i && (r = rt.grid.borderColor, "object" == typeof i || "object" == typeof r ? ("object" != typeof i && (i = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i
                }), "object" != typeof r && (r = {
                    top: r,
                    right: r,
                    bottom: r,
                    left: r
                }), i.top > 0 && (lt.strokeStyle = r.top, lt.lineWidth = i.top, lt.beginPath(), lt.moveTo(0 - i.left, 0 - i.top / 2), lt.lineTo(pt, 0 - i.top / 2), lt.stroke()), i.right > 0 && (lt.strokeStyle = r.right, lt.lineWidth = i.right, lt.beginPath(), lt.moveTo(pt + i.right / 2, 0 - i.top), lt.lineTo(pt + i.right / 2, ht), lt.stroke()), i.bottom > 0 && (lt.strokeStyle = r.bottom, lt.lineWidth = i.bottom, lt.beginPath(), lt.moveTo(pt + i.right, ht + i.bottom / 2), lt.lineTo(0, ht + i.bottom / 2), lt.stroke()), i.left > 0 && (lt.strokeStyle = r.left, lt.lineWidth = i.left, lt.beginPath(), lt.moveTo(0 - i.left / 2, ht + i.bottom), lt.lineTo(0 - i.left / 2, 0), lt.stroke())) : (lt.lineWidth = i, lt.strokeStyle = rt.grid.borderColor, lt.strokeRect(-i / 2, -i / 2, pt + i, ht + i))), lt.restore()
            }

            function L() {
                t.each(p(), function(t, e) {
                    var n, i, r, a, o, s = e.box,
                        l = e.direction + "Axis " + e.direction + e.n + "Axis",
                        u = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
                        c = e.options.font || "flot-tick-label tickLabel";
                    if (at.removeText(u), e.show && 0 != e.ticks.length)
                        for (var d = 0; d < e.ticks.length; ++d) !(n = e.ticks[d]).label || n.v < e.min || n.v > e.max || ("x" == e.direction ? (a = "center", i = ft.left + e.p2c(n.v), "bottom" == e.position ? r = s.top + s.padding : (r = s.top + s.height - s.padding, o = "bottom")) : (o = "middle", r = ft.top + e.p2c(n.v), "left" == e.position ? (i = s.left + s.width - s.padding, a = "right") : i = s.left + s.padding), at.addText(u, i, r, n.label, c, null, null, a, o))
                })
            }

            function P(t) {
                t.lines.show && R(t), t.bars.show && F(t), t.points.show && B(t)
            }

            function R(t) {
                function e(t, e, n, i, r) {
                    var a = t.points,
                        o = t.pointsize,
                        s = null,
                        l = null;
                    lt.beginPath();
                    for (var u = o; u < a.length; u += o) {
                        var c = a[u - o],
                            d = a[u - o + 1],
                            f = a[u],
                            p = a[u + 1];
                        if (null != c && null != f) {
                            if (d <= p && d < r.min) {
                                if (p < r.min) continue;
                                c = (r.min - d) / (p - d) * (f - c) + c, d = r.min
                            } else if (p <= d && p < r.min) {
                                if (d < r.min) continue;
                                f = (r.min - d) / (p - d) * (f - c) + c, p = r.min
                            }
                            if (d >= p && d > r.max) {
                                if (p > r.max) continue;
                                c = (r.max - d) / (p - d) * (f - c) + c, d = r.max
                            } else if (p >= d && p > r.max) {
                                if (d > r.max) continue;
                                f = (r.max - d) / (p - d) * (f - c) + c, p = r.max
                            }
                            if (c <= f && c < i.min) {
                                if (f < i.min) continue;
                                d = (i.min - c) / (f - c) * (p - d) + d, c = i.min
                            } else if (f <= c && f < i.min) {
                                if (c < i.min) continue;
                                p = (i.min - c) / (f - c) * (p - d) + d, f = i.min
                            }
                            if (c >= f && c > i.max) {
                                if (f > i.max) continue;
                                d = (i.max - c) / (f - c) * (p - d) + d, c = i.max
                            } else if (f >= c && f > i.max) {
                                if (c > i.max) continue;
                                p = (i.max - c) / (f - c) * (p - d) + d, f = i.max
                            }
                            c == s && d == l || lt.moveTo(i.p2c(c) + e, r.p2c(d) + n), s = f, l = p, lt.lineTo(i.p2c(f) + e, r.p2c(p) + n)
                        }
                    }
                    lt.stroke()
                }

                function n(t, e, n) {
                    for (var i = t.points, r = t.pointsize, a = Math.min(Math.max(0, n.min), n.max), o = 0, s = !1, l = 1, u = 0, c = 0; !(r > 0 && o > i.length + r);) {
                        var d = i[(o += r) - r],
                            f = i[o - r + l],
                            p = i[o],
                            h = i[o + l];
                        if (s) {
                            if (r > 0 && null != d && null == p) {
                                c = o, r = -r, l = 2;
                                continue
                            }
                            if (r < 0 && o == u + r) {
                                lt.fill(), s = !1, l = 1, o = u = c + (r = -r);
                                continue
                            }
                        }
                        if (null != d && null != p) {
                            if (d <= p && d < e.min) {
                                if (p < e.min) continue;
                                f = (e.min - d) / (p - d) * (h - f) + f, d = e.min
                            } else if (p <= d && p < e.min) {
                                if (d < e.min) continue;
                                h = (e.min - d) / (p - d) * (h - f) + f, p = e.min
                            }
                            if (d >= p && d > e.max) {
                                if (p > e.max) continue;
                                f = (e.max - d) / (p - d) * (h - f) + f, d = e.max
                            } else if (p >= d && p > e.max) {
                                if (d > e.max) continue;
                                h = (e.max - d) / (p - d) * (h - f) + f, p = e.max
                            }
                            if (s || (lt.beginPath(), lt.moveTo(e.p2c(d), n.p2c(a)), s = !0), f >= n.max && h >= n.max) lt.lineTo(e.p2c(d), n.p2c(n.max)), lt.lineTo(e.p2c(p), n.p2c(n.max));
                            else if (f <= n.min && h <= n.min) lt.lineTo(e.p2c(d), n.p2c(n.min)), lt.lineTo(e.p2c(p), n.p2c(n.min));
                            else {
                                var m = d,
                                    g = p;
                                f <= h && f < n.min && h >= n.min ? (d = (n.min - f) / (h - f) * (p - d) + d, f = n.min) : h <= f && h < n.min && f >= n.min && (p = (n.min - f) / (h - f) * (p - d) + d, h = n.min), f >= h && f > n.max && h <= n.max ? (d = (n.max - f) / (h - f) * (p - d) + d, f = n.max) : h >= f && h > n.max && f <= n.max && (p = (n.max - f) / (h - f) * (p - d) + d, h = n.max), d != m && lt.lineTo(e.p2c(m), n.p2c(f)), lt.lineTo(e.p2c(d), n.p2c(f)), lt.lineTo(e.p2c(p), n.p2c(h)), p != g && (lt.lineTo(e.p2c(p), n.p2c(h)), lt.lineTo(e.p2c(g), n.p2c(h)))
                            }
                        }
                    }
                }
                lt.save(), lt.translate(ft.left, ft.top), lt.lineJoin = "round";
                var i = t.lines.lineWidth,
                    r = t.shadowSize;
                if (i > 0 && r > 0) {
                    lt.lineWidth = r, lt.strokeStyle = "rgba(0,0,0,0.1)";
                    var a = Math.PI / 18;
                    e(t.datapoints, Math.sin(a) * (i / 2 + r / 2), Math.cos(a) * (i / 2 + r / 2), t.xaxis, t.yaxis), lt.lineWidth = r / 2, e(t.datapoints, Math.sin(a) * (i / 2 + r / 4), Math.cos(a) * (i / 2 + r / 4), t.xaxis, t.yaxis)
                }
                lt.lineWidth = i, lt.strokeStyle = t.color;
                var o = q(t.lines, t.color, 0, ht);
                o && (lt.fillStyle = o, n(t.datapoints, t.xaxis, t.yaxis)), i > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), lt.restore()
            }

            function B(t) {
                function e(t, e, n, i, r, a, o, s) {
                    for (var l = t.points, u = t.pointsize, c = 0; c < l.length; c += u) {
                        var d = l[c],
                            f = l[c + 1];
                        null == d || d < a.min || d > a.max || f < o.min || f > o.max || (lt.beginPath(), d = a.p2c(d), f = o.p2c(f) + i, "circle" == s ? lt.arc(d, f, e, 0, r ? Math.PI : 2 * Math.PI, !1) : s(lt, d, f, e, r), lt.closePath(), n && (lt.fillStyle = n, lt.fill()), lt.stroke())
                    }
                }
                lt.save(), lt.translate(ft.left, ft.top);
                var n = t.points.lineWidth,
                    i = t.shadowSize,
                    r = t.points.radius,
                    a = t.points.symbol;
                if (0 == n && (n = 1e-4), n > 0 && i > 0) {
                    var o = i / 2;
                    lt.lineWidth = o, lt.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, r, null, o + o / 2, !0, t.xaxis, t.yaxis, a), lt.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, r, null, o / 2, !0, t.xaxis, t.yaxis, a)
                }
                lt.lineWidth = n, lt.strokeStyle = t.color, e(t.datapoints, r, q(t.points, t.color), 0, !1, t.xaxis, t.yaxis, a), lt.restore()
            }

            function H(t, e, n, i, r, a, o, s, l, u, c) {
                var d, f, p, h, m, g, v, y, b;
                u ? (y = g = v = !0, m = !1, h = e + i, p = e + r, (f = t) < (d = n) && (b = f, f = d, d = b, m = !0, g = !1)) : (m = g = v = !0, y = !1, d = t + i, f = t + r, (h = e) < (p = n) && (b = h, h = p, p = b, y = !0, v = !1)), f < o.min || d > o.max || h < s.min || p > s.max || (d < o.min && (d = o.min, m = !1), f > o.max && (f = o.max, g = !1), p < s.min && (p = s.min, y = !1), h > s.max && (h = s.max, v = !1), d = o.p2c(d), p = s.p2c(p), f = o.p2c(f), h = s.p2c(h), a && (l.fillStyle = a(p, h), l.fillRect(d, h, f - d, p - h)), c > 0 && (m || g || v || y) && (l.beginPath(), l.moveTo(d, p), m ? l.lineTo(d, h) : l.moveTo(d, h), v ? l.lineTo(f, h) : l.moveTo(f, h), g ? l.lineTo(f, p) : l.moveTo(f, p), y ? l.lineTo(d, p) : l.moveTo(d, p), l.stroke()))
            }

            function F(t) {
                function e(e, n, i, r, a, o) {
                    for (var s = e.points, l = e.pointsize, u = 0; u < s.length; u += l) null != s[u] && H(s[u], s[u + 1], s[u + 2], n, i, r, a, o, lt, t.bars.horizontal, t.bars.lineWidth)
                }
                var n;
                switch (lt.save(), lt.translate(ft.left, ft.top), lt.lineWidth = t.bars.lineWidth, lt.strokeStyle = t.color, t.bars.align) {
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
                e(t.datapoints, n, n + t.bars.barWidth, i, t.xaxis, t.yaxis), lt.restore()
            }

            function q(e, n, i, r) {
                var a = e.fill;
                if (!a) return null;
                if (e.fillColor) return nt(e.fillColor, i, r, n);
                var o = t.color.parse(n);
                return o.a = "number" == typeof a ? a : .4, o.normalize(), o.toString()
            }

            function W() {
                if (null != rt.legend.container ? t(rt.legend.container).html("") : n.find(".legend").remove(), rt.legend.show) {
                    for (var e, i, r = [], a = [], o = !1, s = rt.legend.labelFormatter, l = 0; l < it.length; ++l)(e = it[l]).label && (i = s ? s(e.label, e) : e.label) && a.push({
                        label: i,
                        color: e.color
                    });
                    if (rt.legend.sorted)
                        if (t.isFunction(rt.legend.sorted)) a.sort(rt.legend.sorted);
                        else if ("reverse" == rt.legend.sorted) a.reverse();
                    else {
                        var u = "descending" != rt.legend.sorted;
                        a.sort(function(t, e) {
                            return t.label == e.label ? 0 : t.label < e.label != u ? 1 : -1
                        })
                    }
                    for (l = 0; l < a.length; ++l) {
                        var c = a[l];
                        l % rt.legend.noColumns == 0 && (o && r.push("</tr>"), r.push("<tr>"), o = !0), r.push('<td class="legendColorBox"><div style="border:1px solid ' + rt.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + c.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + c.label + "</td>")
                    }
                    if (o && r.push("</tr>"), 0 != r.length) {
                        var d = '<table style="font-size:smaller;color:' + rt.grid.color + '">' + r.join("") + "</table>";
                        if (null != rt.legend.container) t(rt.legend.container).html(d);
                        else {
                            var f = "",
                                p = rt.legend.position,
                                h = rt.legend.margin;
                            null == h[0] && (h = [h, h]), "n" == p.charAt(0) ? f += "top:" + (h[1] + ft.top) + "px;" : "s" == p.charAt(0) && (f += "bottom:" + (h[1] + ft.bottom) + "px;"), "e" == p.charAt(1) ? f += "right:" + (h[0] + ft.right) + "px;" : "w" == p.charAt(1) && (f += "left:" + (h[0] + ft.left) + "px;");
                            var m = t('<div class="legend">' + d.replace('style="', 'style="position:absolute;' + f + ";") + "</div>").appendTo(n);
                            if (0 != rt.legend.backgroundOpacity) {
                                var g = rt.legend.backgroundColor;
                                null == g && ((g = (g = rt.grid.backgroundColor) && "string" == typeof g ? t.color.parse(g) : t.color.extract(m, "background-color")).a = 1, g = g.toString());
                                var v = m.children();
                                t('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() + "px;" + f + "background-color:" + g + ';"> </div>').prependTo(m).css("opacity", rt.legend.backgroundOpacity)
                            }
                        }
                    }
                }
            }

            function z(t, e, n) {
                var i, r, a, o = rt.grid.mouseActiveRadius,
                    s = o * o + 1,
                    l = null;
                for (i = it.length - 1; i >= 0; --i)
                    if (n(it[i])) {
                        var u = it[i],
                            c = u.xaxis,
                            d = u.yaxis,
                            f = u.datapoints.points,
                            p = c.c2p(t),
                            h = d.c2p(e),
                            m = o / c.scale,
                            g = o / d.scale;
                        if (a = u.datapoints.pointsize, c.options.inverseTransform && (m = Number.MAX_VALUE), d.options.inverseTransform && (g = Number.MAX_VALUE), u.lines.show || u.points.show)
                            for (r = 0; r < f.length; r += a) {
                                var v = f[r],
                                    y = f[r + 1];
                                if (null != v && !(v - p > m || v - p < -m || y - h > g || y - h < -g)) {
                                    var b = Math.abs(c.p2c(v) - t),
                                        x = Math.abs(d.p2c(y) - e),
                                        w = b * b + x * x;
                                    w < s && (s = w, l = [i, r / a])
                                }
                            }
                        if (u.bars.show && !l) {
                            var k, T;
                            switch (u.bars.align) {
                                case "left":
                                    k = 0;
                                    break;
                                case "right":
                                    k = -u.bars.barWidth;
                                    break;
                                default:
                                    k = -u.bars.barWidth / 2
                            }
                            for (T = k + u.bars.barWidth, r = 0; r < f.length; r += a) {
                                v = f[r], y = f[r + 1];
                                var _ = f[r + 2];
                                null != v && ((it[i].bars.horizontal ? p <= Math.max(_, v) && p >= Math.min(_, v) && h >= y + k && h <= y + T : p >= v + k && p <= v + T && h >= Math.min(_, y) && h <= Math.max(_, y)) && (l = [i, r / a]))
                            }
                        }
                    }
                return l ? (i = l[0], r = l[1], a = it[i].datapoints.pointsize, {
                    datapoint: it[i].datapoints.points.slice(r * a, (r + 1) * a),
                    dataIndex: r,
                    series: it[i],
                    seriesIndex: i
                }) : null
            }

            function V(t) {
                rt.grid.hoverable && X("plothover", t, function(t) {
                    return 0 != t.hoverable
                })
            }

            function U(t) {
                rt.grid.hoverable && X("plothover", t, function() {
                    return !1
                })
            }

            function Q(t) {
                X("plotclick", t, function(t) {
                    return 0 != t.clickable
                })
            }

            function X(t, e, i) {
                var r = st.offset(),
                    a = e.pageX - r.left - ft.left,
                    o = e.pageY - r.top - ft.top,
                    s = h({
                        left: a,
                        top: o
                    });
                s.pageX = e.pageX, s.pageY = e.pageY;
                var l = z(a, o, i);
                if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + r.left + ft.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + r.top + ft.top, 10)), rt.grid.autoHighlight) {
                    for (var u = 0; u < vt.length; ++u) {
                        var c = vt[u];
                        c.auto != t || l && c.series == l.series && c.point[0] == l.datapoint[0] && c.point[1] == l.datapoint[1] || K(c.series, c.point)
                    }
                    l && J(l.series, l.datapoint, t)
                }
                n.trigger(t, [s, l])
            }

            function G() {
                var t = rt.interaction.redrawOverlayInterval; - 1 != t ? yt || (yt = setTimeout(Y, t)) : Y()
            }

            function Y() {
                var t, e;
                for (yt = null, ut.save(), ot.clear(), ut.translate(ft.left, ft.top), t = 0; t < vt.length; ++t)(e = vt[t]).series.bars.show ? et(e.series, e.point) : tt(e.series, e.point);
                ut.restore(), s(mt.drawOverlay, [ut])
            }

            function J(t, e, n) {
                if ("number" == typeof t && (t = it[t]), "number" == typeof e) {
                    var i = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(i * e, i * (e + 1))
                }
                var r = Z(t, e); - 1 == r ? (vt.push({
                    series: t,
                    point: e,
                    auto: n
                }), G()) : n || (vt[r].auto = !1)
            }

            function K(t, e) {
                if (null == t && null == e) return vt = [], void G();
                if ("number" == typeof t && (t = it[t]), "number" == typeof e) {
                    var n = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(n * e, n * (e + 1))
                }
                var i = Z(t, e); - 1 != i && (vt.splice(i, 1), G())
            }

            function Z(t, e) {
                for (var n = 0; n < vt.length; ++n) {
                    var i = vt[n];
                    if (i.series == t && i.point[0] == e[0] && i.point[1] == e[1]) return n
                }
                return -1
            }

            function tt(e, n) {
                var i = n[0],
                    r = n[1],
                    a = e.xaxis,
                    o = e.yaxis,
                    s = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
                if (!(i < a.min || i > a.max || r < o.min || r > o.max)) {
                    var l = e.points.radius + e.points.lineWidth / 2;
                    ut.lineWidth = l, ut.strokeStyle = s;
                    var u = 1.5 * l;
                    i = a.p2c(i), r = o.p2c(r), ut.beginPath(), "circle" == e.points.symbol ? ut.arc(i, r, u, 0, 2 * Math.PI, !1) : e.points.symbol(ut, i, r, u, !1), ut.closePath(), ut.stroke()
                }
            }

            function et(e, n) {
                var i, r = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(),
                    a = r;
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
                ut.lineWidth = e.bars.lineWidth, ut.strokeStyle = r, H(n[0], n[1], n[2] || 0, i, i + e.bars.barWidth, function() {
                    return a
                }, e.xaxis, e.yaxis, ut, e.bars.horizontal, e.bars.lineWidth)
            }

            function nt(e, n, i, r) {
                if ("string" == typeof e) return e;
                for (var a = lt.createLinearGradient(0, i, 0, n), o = 0, s = e.colors.length; o < s; ++o) {
                    var l = e.colors[o];
                    if ("string" != typeof l) {
                        var u = t.color.parse(r);
                        null != l.brightness && (u = u.scale("rgb", l.brightness)), null != l.opacity && (u.a *= l.opacity), l = u.toString()
                    }
                    a.addColorStop(o / (s - 1), l)
                }
                return a
            }
            var it = [],
                rt = {
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
                at = null,
                ot = null,
                st = null,
                lt = null,
                ut = null,
                ct = [],
                dt = [],
                ft = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                pt = 0,
                ht = 0,
                mt = {
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
                gt = this;
            gt.setData = c, gt.setupGrid = E, gt.draw = D, gt.getPlaceholder = function() {
                return n
            }, gt.getCanvas = function() {
                return at.element
            }, gt.getPlotOffset = function() {
                return ft
            }, gt.width = function() {
                return pt
            }, gt.height = function() {
                return ht
            }, gt.offset = function() {
                var t = st.offset();
                return t.left += ft.left, t.top += ft.top, t
            }, gt.getData = function() {
                return it
            }, gt.getAxes = function() {
                var e = {};
                return t.each(ct.concat(dt), function(t, n) {
                    n && (e[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
                }), e
            }, gt.getXAxes = function() {
                return ct
            }, gt.getYAxes = function() {
                return dt
            }, gt.c2p = h, gt.p2c = m, gt.getOptions = function() {
                return rt
            }, gt.highlight = J, gt.unhighlight = K, gt.triggerRedrawOverlay = G, gt.pointOffset = function(t) {
                return {
                    left: parseInt(ct[f(t, "x") - 1].p2c(+t.x) + ft.left, 10),
                    top: parseInt(dt[f(t, "y") - 1].p2c(+t.y) + ft.top, 10)
                }
            }, gt.shutdown = w, gt.destroy = function() {
                w(), n.removeData("plot").empty(), it = [], rt = null, at = null, ot = null, st = null, lt = null, ut = null, ct = [], dt = [], mt = null, vt = [], gt = null
            }, gt.resize = function() {
                var t = n.width(),
                    e = n.height();
                at.resize(t, e), ot.resize(t, e)
            }, gt.hooks = mt, l(gt), u(a), b(), c(r), E(), D(), x();
            var vt = [],
                yt = null
        }

        function i(t, e) {
            return e * Math.floor(t / e)
        }
        var r = Object.prototype.hasOwnProperty;
        e.prototype.resize = function(t, e) {
            if (t <= 0 || e <= 0) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
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
                    for (var a in n.hide(), i)
                        if (r.call(i, a)) {
                            var o = i[a];
                            for (var s in o)
                                if (r.call(o, s)) {
                                    for (var l, u = o[s].positions, c = 0; l = u[c]; c++) l.active ? l.rendered || (n.append(l.element), l.rendered = !0) : (u.splice(c--, 1), l.rendered && l.element.detach());
                                    0 == u.length && delete o[s]
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
        }, e.prototype.getTextInfo = function(e, n, i, r, a) {
            var o, s, l, u;
            if (n = "" + n, o = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size + "px/" + i.lineHeight + "px " + i.family : i, null == (s = this._textCache[e]) && (s = this._textCache[e] = {}), null == (l = s[o]) && (l = s[o] = {}), null == (u = l[n])) {
                var c = t("<div></div>").html(n).css({
                    position: "absolute",
                    "max-width": a,
                    top: -9999
                }).appendTo(this.getTextLayer(e));
                "object" == typeof i ? c.css({
                    font: o,
                    color: i.color
                }) : "string" == typeof i && c.addClass(i), u = l[n] = {
                    width: c.outerWidth(!0),
                    height: c.outerHeight(!0),
                    element: c,
                    positions: []
                }, c.detach()
            }
            return u
        }, e.prototype.addText = function(t, e, n, i, r, a, o, s, l) {
            var u = this.getTextInfo(t, i, r, a, o),
                c = u.positions;
            "center" == s ? e -= u.width / 2 : "right" == s && (e -= u.width), "middle" == l ? n -= u.height / 2 : "bottom" == l && (n -= u.height);
            for (var d, f = 0; d = c[f]; f++)
                if (d.x == e && d.y == n) return void(d.active = !0);
            d = {
                active: !0,
                rendered: !1,
                element: c.length ? u.element.clone() : u.element,
                x: e,
                y: n
            }, c.push(d), d.element.css({
                top: Math.round(n),
                left: Math.round(e),
                "text-align": s
            })
        }, e.prototype.removeText = function(t, e, n, i, a, o) {
            if (null == i) {
                var s = this._textCache[t];
                if (null != s)
                    for (var l in s)
                        if (r.call(s, l)) {
                            var u = s[l];
                            for (var c in u)
                                if (r.call(u, c))
                                    for (var d = u[c].positions, f = 0; p = d[f]; f++) p.active = !1
                        }
            } else {
                var p;
                for (d = this.getTextInfo(t, i, a, o).positions, f = 0; p = d[f]; f++) p.x == e && p.y == n && (p.active = !1)
            }
        }, t.plot = function(e, i, r) {
            return new n(t(e), i, r, t.plot.plugins)
        }, t.plot.version = "0.8.2", t.plot.plugins = [], t.fn.plot = function(e, n) {
            return this.each(function() {
                t.plot(this, e, n)
            })
        }
    }(jQuery),
    function(t) {
        function e(e) {
            function n(t) {
                h.active && (u(t), e.getPlaceholder().trigger("plotselecting", [a()]))
            }

            function i(e) {
                1 == e.which && (document.body.focus(), document.onselectstart !== undefined && null == m.onselectstart && (m.onselectstart = document.onselectstart, document.onselectstart = function() {
                    return !1
                }), document.ondrag !== undefined && null == m.ondrag && (m.ondrag = document.ondrag, document.ondrag = function() {
                    return !1
                }), l(h.first, e), h.active = !0, g = function(t) {
                    r(t)
                }, t(document).one("mouseup", g))
            }

            function r(t) {
                return g = null, document.onselectstart !== undefined && (document.onselectstart = m.onselectstart), document.ondrag !== undefined && (document.ondrag = m.ondrag), h.active = !1, u(t), p() ? o() : (e.getPlaceholder().trigger("plotunselected", []), e.getPlaceholder().trigger("plotselecting", [null])), !1
            }

            function a() {
                if (!p()) return null;
                if (!h.show) return null;
                var n = {},
                    i = h.first,
                    r = h.second;
                return t.each(e.getAxes(), function(t, e) {
                    if (e.used) {
                        var a = e.c2p(i[e.direction]),
                            o = e.c2p(r[e.direction]);
                        n[t] = {
                            from: Math.min(a, o),
                            to: Math.max(a, o)
                        }
                    }
                }), n
            }

            function o() {
                var t = a();
                e.getPlaceholder().trigger("plotselected", [t]), t.xaxis && t.yaxis && e.getPlaceholder().trigger("selected", [{
                    x1: t.xaxis.from,
                    y1: t.yaxis.from,
                    x2: t.xaxis.to,
                    y2: t.yaxis.to
                }])
            }

            function s(t, e, n) {
                return e < t ? t : e > n ? n : e
            }

            function l(t, n) {
                var i = e.getOptions(),
                    r = e.getPlaceholder().offset(),
                    a = e.getPlotOffset();
                t.x = s(0, n.pageX - r.left - a.left, e.width()), t.y = s(0, n.pageY - r.top - a.top, e.height()), "y" == i.selection.mode && (t.x = t == h.first ? 0 : e.width()), "x" == i.selection.mode && (t.y = t == h.first ? 0 : e.height())
            }

            function u(t) {
                null != t.pageX && (l(h.second, t), p() ? (h.show = !0, e.triggerRedrawOverlay()) : c(!0))
            }

            function c(t) {
                h.show && (h.show = !1, e.triggerRedrawOverlay(), t || e.getPlaceholder().trigger("plotunselected", []))
            }

            function d(t, n) {
                var i, r, a, o, s = e.getAxes();
                for (var l in s)
                    if ((i = s[l]).direction == n && (t[o = n + i.n + "axis"] || 1 != i.n || (o = n + "axis"), t[o])) {
                        r = t[o].from, a = t[o].to;
                        break
                    }
                if (t[o] || (i = "x" == n ? e.getXAxes()[0] : e.getYAxes()[0], r = t[n + "1"], a = t[n + "2"]), null != r && null != a && r > a) {
                    var u = r;
                    r = a, a = u
                }
                return {
                    from: r,
                    to: a,
                    axis: i
                }
            }

            function f(t, n) {
                var i, r = e.getOptions();
                "y" == r.selection.mode ? (h.first.x = 0, h.second.x = e.width()) : (i = d(t, "x"), h.first.x = i.axis.p2c(i.from), h.second.x = i.axis.p2c(i.to)), "x" == r.selection.mode ? (h.first.y = 0, h.second.y = e.height()) : (i = d(t, "y"), h.first.y = i.axis.p2c(i.from), h.second.y = i.axis.p2c(i.to)), h.show = !0, e.triggerRedrawOverlay(), !n && p() && o()
            }

            function p() {
                var t = e.getOptions().selection.minSize;
                return Math.abs(h.second.x - h.first.x) >= t && Math.abs(h.second.y - h.first.y) >= t
            }
            var h = {
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
            e.clearSelection = c, e.setSelection = f, e.getSelection = a, e.hooks.bindEvents.push(function(t, e) {
                null != t.getOptions().selection.mode && (e.mousemove(n), e.mousedown(i))
            }), e.hooks.drawOverlay.push(function(e, n) {
                if (h.show && p()) {
                    var i = e.getPlotOffset(),
                        r = e.getOptions();
                    n.save(), n.translate(i.left, i.top);
                    var a = t.color.parse(r.selection.color);
                    n.strokeStyle = a.scale("a", .8).toString(), n.lineWidth = 1, n.lineJoin = r.selection.shape, n.fillStyle = a.scale("a", .4).toString();
                    var o = Math.min(h.first.x, h.second.x) + .5,
                        s = Math.min(h.first.y, h.second.y) + .5,
                        l = Math.abs(h.second.x - h.first.x) - 1,
                        u = Math.abs(h.second.y - h.first.y) - 1;
                    n.fillRect(o, s, l, u), n.strokeRect(o, s, l, u), n.restore()
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
    function(t) {
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
            switch (this.min = this.element.data("slider-min") || n.min, this.max = this.element.data("slider-max") || n.max, this.step = this.element.data("slider-step") || n.step, this.value = this.element.data("slider-value") || n.value, this.value[1] && (this.range = !0), this.selection = this.element.data("slider-selection") || n.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style, this.element.data("slider-handle") || n.handle) {
                case "round":
                    this.handle1.addClass("round"), this.handle2.addClass("round");
                    break;
                case "triangle":
                    this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
            }
            this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = n.formater, this.layout(), this.touchCapable ? this.picker.on({
                touchstart: t.proxy(this.mousedown, this)
            }) : this.picker.on({
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
                !1 === this.inDrag && this.tooltip.removeClass("in"), this.over = !1
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
                    this.dragged = i < r ? 0 : 1
                } else this.dragged = 0;
                this.percentage[this.dragged] = n, this.layout(), this.touchCapable ? t(document).on({
                    touchmove: t.proxy(this.mousemove, this),
                    touchend: t.proxy(this.mouseup, this)
                }) : t(document).on({
                    mousemove: t.proxy(this.mousemove, this),
                    mouseup: t.proxy(this.mouseup, this)
                }), this.inDrag = !0;
                var a = this.calculateValue();
                return this.element.trigger({
                    type: "slideStart",
                    value: a
                }).trigger({
                    type: "slide",
                    value: a
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
                this.touchCapable ? t(document).off({
                    touchmove: this.mousemove,
                    touchend: this.mouseup
                }) : t(document).off({
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
                this.value = t, this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout()
            }
        }, t.fn.slider = function(n, i) {
            return this.each(function() {
                var r = t(this),
                    a = r.data("slider"),
                    o = "object" == typeof n && n;
                a || r.data("slider", a = new e(this, t.extend({}, t.fn.slider.defaults, o))), "string" == typeof n && a[n](i)
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
                if (e) e.resize(), e.setupGrid(), e.draw(), $(t).closest(".limit_content").find("form.range_limit").find("input.range_begin").trigger("change"), $(t).trigger(l)
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
            if (o()) {
                var e = new Array,
                    n = new Array,
                    s = new Array,
                    l = BlacklightRangeLimit.parseNum($(t).find("ul li:first-child span.from").text()),
                    u = BlacklightRangeLimit.parseNum($(t).find("ul li:last-child span.to").text());
                $(t).find("ul li").each(function() {
                    var t = BlacklightRangeLimit.parseNum($(this).find("span.from").text()),
                        i = BlacklightRangeLimit.parseNum($(this).find("span.to").text()),
                        r = BlacklightRangeLimit.parseNum($(this).find("span.count").text()),
                        a = r / (i - t + 1);
                    e.push([t, a]), e.push([i + 1, a]), s.push(t), n.push({
                        from: t,
                        to: i,
                        count: r,
                        label: $(this).find(".facet_select").text()
                    })
                });
                var c, d = BlacklightRangeLimit.parseNum($(t).find("ul li:last-child span.to").text()) + 1;
                s.push(d);
                var f = $(t).closest(".facet_limit").data("plot-config") || {};
                try {
                    c = $.plot($(t), [e], $.extend(!0, f, {
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
                } catch (m) {
                    alert(m)
                }
                find_segment_for = a(n);
                var p = null;
                $(t).bind("plothover", function(t, e) {
                    segment = find_segment_for(e.x), segment != p && ($(".distribution").tooltip("destroy"), $(".distribution").tooltip({
                        title: function() {
                            return find_segment_for(e.x).label + " (" + BlacklightRangeLimit.parseNum(segment.count) + ")"
                        },
                        placement: "bottom",
                        trigger: "manual",
                        delay: {
                            show: 0,
                            hide: 100
                        }
                    }), $(".distribution").tooltip("show"), p = segment)
                }), $(t).bind("mouseout", function() {
                    p = null, $(".distribution").tooltip("hide")
                }), $(t).bind("plotclick", function(t, e) {
                    null == c.getSelection() && (segment = find_segment_for(e.x), c.setSelection(i(segment.from, segment.to)))
                }), $(t).bind("plotselected plotselecting", function(e, n) {
                    if (null != n) {
                        var i = Math.floor(n.xaxis.from),
                            r = Math.floor(n.xaxis.to),
                            a = $(t).closest(".limit_content").find("form.range_limit");
                        a.find("input.range_begin").val(i), a.find("input.range_end").val(r);
                        var o = $(t).closest(".limit_content").find("[data-slider-placeholder]");
                        o && o.slider("setValue", [i, r + 1])
                    }
                });
                var h = $(t).closest(".limit_content").find("form.range_limit");
                h.find("input.range_begin, input.range_end").change(function() {
                    c.setSelection(r(h, l, u), !0)
                }), $(t).closest(".limit_content").find(".profile .range").on("slide", function(t) {
                    var e = $(t.target).data("slider").getValue();
                    h.find("input.range_begin").val(e[0]), h.find("input.range_end").val(e[1]), c.setSelection(i(e[0], Math.max(e[0], e[1] - 1)), !0)
                }), c.setSelection({
                    xaxis: {
                        from: l,
                        to: u + .9999
                    }
                })
            }
        }

        function i(t, e) {
            return {
                xaxis: {
                    from: t,
                    to: e += .99999
                }
            }
        }

        function r(t, e, n) {
            var r = BlacklightRangeLimit.parseNum($(t).find("input.range_begin").val());
            (isNaN(r) || r < e) && (r = e);
            var a = BlacklightRangeLimit.parseNum($(t).find("input.range_end").val());
            return (isNaN(a) || a > n) && (a = n), i(r, a)
        }

        function a(t) {
            return function(e) {
                for (var n = t.length - 1; n >= 0; n--) {
                    var i = t[n];
                    if (e >= i.from) return i
                }
                return t[0]
            }
        }

        function o() {
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
            t($(e.target).filter(".facet-content").find(".chart_js"))
        }), debounce = function(t, e, n) {
            var i;
            return function() {
                var r = this,
                    a = arguments,
                    o = function() {
                        i = null, n || t.apply(r, a)
                    },
                    s = n && !i;
                clearTimeout(i), i = setTimeout(o, e), s && t.apply(r, a)
            }
        }, $(window).on("resize", debounce(function() {
            $(".chart_js").each(function(e, n) {
                t($(n))
            })
        }, 350))
    }),
    function(t) {
        "use strict";

        function e(t) {
            this.options = t || {}
        }
        var n = t.BlacklightRangeLimit;
        e.noConflict = function() {
            return t.BlacklightRangeLimit = n, e
        }, e.parseNum = function(t) {
            return t = String(t).replace(/[^0-9]/g, ""), parseInt(t, 10)
        }, t.BlacklightRangeLimit = e
    }(this), Blacklight.onLoad(function() {
        function t(t) {
            var e = $(t).closest(".limit_content.range_limit").find(".current"),
                n = max = BlacklightRangeLimit.parseNum(e.find(".single").text());
            return isNaN(n) && (n = BlacklightRangeLimit.parseNum(e.find(".from").first().text()), max = BlacklightRangeLimit.parseNum(e.find(".to").first().text())), (isNaN(n) || isNaN(max)) && (n = BlacklightRangeLimit.parseNum($(t).find(".min").first().text()), max = BlacklightRangeLimit.parseNum($(t).find(".max").first().text())), [n, max]
        }

        function e(t) {
            return t % 1 == 0
        }
        $(".range_limit .profile .range.slider_js").each(function() {
            var n = $(this),
                i = t(this),
                r = i[0],
                a = i[1];
            if (e(r) && e(a)) {
                $(this).contents().wrapAll('<div style="display:none" />');
                n = $(this);
                var o = $(n).closest(".range_limit").find("form.range_limit"),
                    s = o.find("input.range_begin"),
                    l = o.find("input.range_end"),
                    u = $('<input type="text" data-slider-placeholder="true" style="width:100%;">').appendTo(n);
                if (u.slider !== undefined) {
                    u.slider({
                        min: r,
                        max: a + 1,
                        value: [r, a + 1],
                        tooltip: "hide"
                    });
                    var c = n.closest(".range_limit"),
                        d = c.find(".chart_js").data("plot"),
                        f = c.find(".slider");
                    d && f ? (f.width(d.width()), f.css("display", "block"), f.css("margin-right", "auto"), f.css("margin-left", "auto")) : f && f.css("width", "100%")
                }
            }
            s.val(r), l.val(a), s.change(function() {
                var t = BlacklightRangeLimit.parseNum($(this).val());
                (isNaN(t) || t < r) && (t = r);
                var e = u.data("slider").getValue();
                e[0] = t, u.slider("setValue", e)
            }), l.change(function() {
                var t = BlacklightRangeLimit.parseNum($(this).val());
                (isNaN(t) || t > a) && (t = a);
                var e = u.data("slider").getValue();
                e[1] = t, u.slider("setValue", e)
            })
        }), $("body").on("plotDrawn.blacklight.rangeLimit", function(t) {
            var e = $(t.target).closest(".limit_content.range_limit"),
                n = e.find(".chart_js").data("plot"),
                i = e.find(".slider");
            n && i && (i.width(n.width()), i.css("display", "block"), i.css("margin-right", "auto"), i.css("margin-left", "auto"))
        })
    }),
    function() {
        var t = {};
        this.tmpl = function e(n, i) {
            var r = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/^[\r\t\n ]+/, "").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');") : t[n] = t[n] || e(document.getElementById(n).innerHTML);
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
            return e == r ? n + i : i * (1 - Math.pow(2, -10 * e / r)) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
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
            var a = 1.70158,
                o = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), s < Math.abs(i)) {
                s = i;
                a = o / 4
            } else a = o / (2 * Math.PI) * Math.asin(i / s);
            return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / o) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var a = 1.70158,
                o = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), s < Math.abs(i)) {
                s = i;
                a = o / 4
            } else a = o / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * r - a) * (2 * Math.PI) / o) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var a = 1.70158,
                o = 0,
                s = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (o || (o = r * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                a = o / 4
            } else a = o / (2 * Math.PI) * Math.asin(i / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / o) * -.5 + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / o) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, a) {
            return a == undefined && (a = 1.70158), i * (e /= r) * e * ((a + 1) * e - a) + n
        },
        easeOutBack: function(t, e, n, i, r, a) {
            return a == undefined && (a = 1.70158), i * ((e = e / r - 1) * e * ((a + 1) * e + a) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, a) {
            return a == undefined && (a = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + n : i / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + n
        },
        easeInBounce: function(t, e, n, i, r) {
            return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, r) {
            return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
        }
    }),
    function(t, e, n, i) {
        var r, a, o = "stackView",
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
                    if (i.match(e)) return n = i, !1
                }), n
            },
            u = function(e, n, i) {
                var r = i ? "before" : "append",
                    a = i || e.$element.find(e.options.selectors.item_list);
                t.each(n, function(n, i) {
                    var o, s = l(i);
                    if (null == s) return !0;
                    (o = t(tmpl(s.template, s.adapter(i, e.options)))).data("stackviewItem", i), a[r](o)
                }), i && i.remove()
            },
            c = function(t) {
                var e, n = t.options;
                return "loc_sort_order" === (e = {
                    start: t.page * t.options.items_per_page,
                    limit: t.options.items_per_page,
                    search_type: t.options.search_type,
                    query: t.options.query
                }).search_type && (e.start = 0, 0 === t.page ? (t.loc = {
                    low: n.id - Math.floor(n.items_per_page / 2),
                    high: n.id + Math.floor(n.items_per_page / 2)
                }, e.query = ["[", t.loc.low, " TO ", t.loc.high, "]"].join("")) : "down" === t.direction ? (e.query = ["[", t.loc.high + 1, " TO ", t.loc.high + n.items_per_page + 1, "]"].join(""), t.loc.high = t.loc.high + n.items_per_page + 1) : "up" === t.direction && (e.query = ["[", t.loc.low - n.items_per_page - 1, " TO ", t.loc.low - 1, "]"].join(""), t.loc.low = t.loc.low - n.items_per_page - 1)), e
            },
            d = function(n, i) {
                var r, a = c(n),
                    o = t.param(a);
                n.page++, (r = e.stackCache.get(n.options.url + o)) ? i(r) : t.ajax({
                    url: n.options.url,
                    data: o,
                    dataType: n.options.jsonp ? "jsonp" : "json",
                    success: function(t) {
                        e.stackCache.set(n.options.url + a, t, n.options.cache_ttl), i(t)
                    }
                })
            };
        a = function(e, n) {
            this.element = e, this.$element = t(e), this.options = t.extend(!0, {}, a.defaults, n), this.page = 0, this.finished = {
                up: !1,
                down: !1
            }, this.loc = {
                low: null,
                high: null
            }, this.direction = "down", this.init()
        }, t.extend(!0, a, {
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
        }), t.extend(!0, a.prototype, {
            init: function() {
                var t = this;
                this.$element.html(tmpl(a.templates.scaffold, {
                    ribbon: this.options.ribbon
                })).addClass("stackview").bind(r.page_load, function() {
                    t.zIndex()
                }), this.$element.data("stackviewObject", this), this.$element.trigger(r.init), this.next_page()
            },
            next_page: function() {
                var e = t(tmpl(a.templates.placeholder, {})),
                    n = this,
                    i = this.options;
                this.finished.down || (this.direction = "down", i.data ? (u(this, i.data.docs ? i.data.docs : i.data), this.finished.down = !0, this.$element.trigger(r.page_load, [i.data])) : i.url && (this.$element.find(i.selectors.item_list).append(e), d(this, function(t) {
                    u(n, t.docs, e), -1 === parseInt(t.start, 10) && (n.finished.down = !0), n.$element.trigger(r.page_load, [t])
                })))
            },
            prev_page: function() {
                var e = t(tmpl(a.templates.placeholder, {})),
                    n = this.options,
                    i = this,
                    o = i.$element.find(n.selectors.item).first();
                "loc_sort_order" !== n.search_type || this.finished.up || (this.direction = "up", this.$element.find(n.selectors.item_list).prepend(e), d(this, function(t) {
                    var a = o.position().top;
                    u(i, t.docs, e), i.page > 1 && i.$element.find(n.selectors.item_list).animate({
                        scrollTop: "+=" + (o.position().top - a)
                    }, 0), -1 === parseInt(t.start, 10) && (i.finished.up = !0), i.$element.trigger(r.page_load, [t])
                }))
            },
            add: function() {
                var e, n, i, a, o, s, u = this.$element.find(this.options.selectors.item);
                "number" == typeof arguments[0] ? (e = arguments[0], n = arguments[1]) : (e = u.length, n = arguments[0]), e > u.length || e < 0 || (e === u.length ? (o = u.last(), a = "after") : (o = u.eq(e), a = "before"), null != (i = l(n)) && ((s = t(tmpl(i.template, i.adapter(n, this.options)))).data("stackviewItem", n), o[a](s), this.zIndex(), this.$element.trigger(r.item_added)))
            },
            remove: function(e) {
                var n, i, a = this.$element.find(this.options.selectors.item);
                if ("number" == typeof e ? n = a.eq(e) : e.nodeType || e.jquery ? n = t(e) : a.each(function(i, r) {
                        var a = t(r);
                        if (a.data("stackviewItem") === e) return n = a, !1
                    }), null != n && n.length) return n.detach(), i = n.data("stackviewItem"), this.$element.trigger(r.item_removed, [i]), n
            },
            getData: function() {
                var e = [];
                return this.$element.find(this.options.selectors.item).each(function() {
                    e.push(t(this).data("stackviewItem"))
                }), e
            },
            zIndex: function(t) {
                for (var e = this.$element.find(this.options.selectors.item), n = e.length, i = 0, r = t ? 0 : e.length - 1; i < n;) e.eq(i).css("z-index", r), r += t ? 1 : -1, i++
            }
        }), t.fn[o] = function(e) {
            var n, r = Array.prototype.slice.call(arguments, 1);
            return this.each(function(o, s) {
                var l = t(s).data("stackviewObject");
                if (l) {
                    if (l[e]) {
                        var u = l[e].apply(l, r);
                        n === i && u !== i && (n = u)
                    }
                } else new a(s, e)
            }), n === i ? this : n
        }, e.StackView = a
    }(jQuery, window, document),
    function(t) {
        var e, n = t(document);
        t.extend(StackView.defaults, {
            infiniteScrollDistance: 100
        }), e = function(e) {
            var n, i, r, a, o, s = t(e.target),
                l = s.data("stackviewObject").options;
            n = s.find(l.selectors.item_list), r = (i = s.find(l.selectors.item)).length ? i.last().position().top : 0, r += n.scrollTop(), a = r - s.height() - l.infiniteScrollDistance, o = function() {
                "loc_sort_order" === l.search_type && n.scrollTop() <= l.infiniteScrollDistance ? (n.unbind("scroll.stackview"), s.stackView("prev_page")) : n.scrollTop() >= a && (n.unbind("scroll.stackview"), s.stackView("next_page"))
            }, n.bind("scroll.stackview", o), o()
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
                a = i.find(r.options.selectors.item_list),
                o = i.height() * r.options.navigationPercent / 100;
            r.num_found_delta = 0, i.prepend(tmpl(n.templates.navigation, {
                empty: "loc_sort_order" === r.options.search_type
            })), i.delegate(r.options.selectors.downstream, "click", function() {
                return a.animate({
                    scrollTop: "+=" + o
                }, r.options.transitionDuration, r.options.transitionEasing), !1
            }).delegate(r.options.selectors.upstream, "click", function() {
                return a.animate({
                    scrollTop: "-=" + o
                }, r.options.transitionDuration, r.options.transitionEasing), !1
            })
        }).delegate(".stackview", "stackview.pageload", function(e, n) {
            var i, r = t(e.target),
                a = r.data("stackviewObject"),
                o = n.num_found ? parseInt(n.num_found, 10) : n.length;
            a.num_found = o, i = o + a.num_found_delta, r.find(a.options.selectors.num_items).text(i)
        }).delegate(".stackview", "stackview.itemadded stackview.itemremoved", function(e) {
            var n, i = t(e.target),
                r = i.data("stackviewObject");
            i.find(r.options.selectors.item);
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
            var i = {
                expires: +(n && new Date(+new Date + 1e3 * n)),
                value: e
            };
            if (a) try {
                localStorage[t] = JSON.stringify(i)
            } catch (o) {
                return o
            } else r[t] = i
        }

        function n(t) {
            var e, n;
            return a ? (e = localStorage[t]) && (e = JSON.parse(e)) : e = r[t], e && (e.expires && e.expires < +new Date ? i(t) : n = e.value), n
        }

        function i(t) {
            a ? localStorage.removeItem(t) : delete r[t]
        }
        var r = {},
            a = t.JSON && function() {
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
    }(window), StackView.templates = {
        scaffold: '\t\t\t<div class="ribbon"><%= ribbon %></div>\t\t\t<ul class="stack-items" />',
        navigation: '\t\t\t<div class="stack-navigation<%= empty ? " empty" : ""%>">\t\t\t\t<div class="upstream">Up</div>\t\t\t\t<div class="num-found">\t\t\t\t\t<span></span><br />items\t\t\t\t</div>\t\t\t\t<div class="downstream">Down</div>\t\t\t</div>',
        book: '\t\t\t<li class="stack-item stack-book heat<%= heat %>" style="width:<%= book_height %>; height:<%= book_thickness %>;">\t\t\t\t<a href="<%= link %>" target="_newtab">\t\t\t\t\t<span class="spine-text">\t\t\t\t\t\t<span class="spine-title"><%= title %></span>\t\t\t\t\t\t<span class="spine-author"><%= author %></span>\t\t\t\t\t</span>\t\t\t\t\t<span class="spine-year"><%= year %></span>\t\t\t\t\t<span class="stack-pages" />\t\t\t\t\t<span class="stack-cover" />\t\t\t\t</a>\t\t\t</li>',
        placeholder: '<li class="stackview-placeholder"></li>'
    },
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
                return i + (t - e) / (n - e) * (r - i)
            },
            i = function(t, e) {
                var i = parseInt(e.measurement_height_numeric, 10),
                    r = t.book.min_height,
                    a = t.book.max_height;
                return isNaN(i) && (i = r), i = Math.min(Math.max(i, r), a), (i = n(i, t.book.min_height, t.book.max_height, t.book.min_height_percentage, t.book.max_height_percentage)) + "%"
            },
            r = function(t, e) {
                var n = parseInt(e.measurement_page_numeric, 10),
                    i = t.book.min_pages,
                    r = t.book.max_pages,
                    a = t.book.page_multiple;
                return isNaN(n) && (n = i), (n = Math.min(Math.max(n, i), r) * a) + "px"
            },
            a = function(t) {
                return t.title_link_friendly ? "../shelflife/book/" + t.title_link_friendly + "/" + t.id : t.link
            },
            o = function(t) {
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
                    link: a(t),
                    title: t.title,
                    author: o(t),
                    year: t.pub_date
                }
            },
            template: '\t\t\t<li class="stack-item stack-book heat<%= heat %>" style="width:<%= book_height %>; height:<%= book_thickness %>;">\t\t\t\t<a href="<%= link %>" target="_blank">\t\t\t\t\t<span class="spine-text">\t\t\t\t\t\t<span class="spine-title"><%= title %></span>\t\t\t\t\t\t<span class="spine-author"><%= author %></span>\t\t\t\t\t</span>\t\t\t\t\t<span class="spine-year"><%= year %></span>\t\t\t\t\t<span class="stack-pages" />\t\t\t\t\t<span class="stack-cover" />\t\t\t\t</a>\t\t\t</li>'
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
            template: '\t\t\t<li class="stack-item stack-serial heat<%= heat %>">\t\t\t\t<a href="<%= link %>" target="_blank">\t\t\t\t\t<span class="spine-text">\t\t\t\t\t\t<span class="spine-title"><%= title %></span>\t\t\t\t\t</span>\t\t\t\t\t<span class="serial-edge" />\t\t\t\t\t<span class="serial-cover" />\t\t\t\t</a>\t\t\t</li>'
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
            template: '\t\t\t<li class="stack-item stack-soundrecording heat<%= heat %>">\t\t\t\t<a href="<%= link %>" target="_blank">\t\t\t\t\t\t<span class="spine-text">\t\t\t\t\t\t\t<span class="spine-title"><%= title %></span>\t\t\t\t\t\t</span>\t\t\t\t\t\t<span class="spine-year"><%= year %></span>\t\t\t\t\t\t<span class="sound-edge"></span>\t\t\t\t\t\t<span class="sound-cover"></span>\t\t\t\t</a>\t\t\t</li>'
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
            template: '\t\t\t<li class="stack-item stack-videofilm heat<%= heat %>" style="width:<%= height %>;">\t\t\t\t<a href="<%= link %>" target="_blank">\t\t\t\t\t<span class="spine-text">\t\t\t\t\t\t<span class="spine-title"><%= title %></span>\t\t\t\t\t</span>\t\t\t\t\t<span class="spine-year"><%= year %></span>\t\t\t\t\t<span class="videofilm-edge" />\t\t\t\t\t<span class="videofilm-cover" />\t\t\t\t</a>\t\t\t</li>'
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
            template: '\t\t\t<li class="stack-item stack-webpage heat<%= heat %>">\t\t\t\t<a href="<%= link %>" target="_blank">\t\t\t\t\t<span class="url-bar">\t\t\t\t\t\t<span class="url-publisher"><%= publisher %>:</span>\t\t\t\t\t\t<span class="url-title"><%= title %></span>\t\t\t\t\t</span>\t\t\t\t\t<span class="webpage-top"></span>\t\t\t\t\t<span class="webpage-edge"></span>\t\t\t\t</a>\t\t\t</li>'
        })
    }(jQuery, window), window.josiahObject = {}, window.josiahObject.getUrlParameter = function(t) {
        for (var e, n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++)
            if ((e = n[i].split("="))[0] == t) return e[1];
        return null
    };
