(function () {
    const n = document.createElement('link').relList;
    if (n && n.supports && n.supports('modulepreload')) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        o(u);
    new MutationObserver((u) => {
        for (const c of u)
            if (c.type === 'childList')
                for (const g of c.addedNodes)
                    g.tagName === 'LINK' && g.rel === 'modulepreload' && o(g);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(u) {
        const c = {};
        return (
            u.integrity && (c.integrity = u.integrity),
            u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
            u.crossOrigin === 'use-credentials'
                ? (c.credentials = 'include')
                : u.crossOrigin === 'anonymous'
                  ? (c.credentials = 'omit')
                  : (c.credentials = 'same-origin'),
            c
        );
    }
    function o(u) {
        if (u.ep) return;
        u.ep = !0;
        const c = r(u);
        fetch(u.href, c);
    }
})();
function io(e, n) {
    const r = Object.create(null),
        o = e.split(',');
    for (let u = 0; u < o.length; u++) r[o[u]] = !0;
    return n ? (u) => !!r[u.toLowerCase()] : (u) => !!r[u];
}
function oo(e) {
    if (_e(e)) {
        const n = {};
        for (let r = 0; r < e.length; r++) {
            const o = e[r],
                u = Ue(o) ? nl(o) : oo(o);
            if (u) for (const c in u) n[c] = u[c];
        }
        return n;
    } else {
        if (Ue(e)) return e;
        if (Re(e)) return e;
    }
}
const Zu = /;(?![^(]*\))/g,
    el = /:([^]+)/,
    tl = /\/\*.*?\*\//gs;
function nl(e) {
    const n = {};
    return (
        e
            .replace(tl, '')
            .split(Zu)
            .forEach((r) => {
                if (r) {
                    const o = r.split(el);
                    o.length > 1 && (n[o[0].trim()] = o[1].trim());
                }
            }),
        n
    );
}
function Xt(e) {
    let n = '';
    if (Ue(e)) n = e;
    else if (_e(e))
        for (let r = 0; r < e.length; r++) {
            const o = Xt(e[r]);
            o && (n += o + ' ');
        }
    else if (Re(e)) for (const r in e) e[r] && (n += r + ' ');
    return n.trim();
}
const rl =
        'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    il = io(rl);
function Ks(e) {
    return !!e || e === '';
}
const ds = (e) =>
        Ue(e)
            ? e
            : e == null
              ? ''
              : _e(e) || (Re(e) && (e.toString === Ys || !ve(e.toString)))
                ? JSON.stringify(e, Xs, 2)
                : String(e),
    Xs = (e, n) =>
        n && n.__v_isRef
            ? Xs(e, n.value)
            : Fn(n)
              ? {
                    [`Map(${n.size})`]: [...n.entries()].reduce(
                        (r, [o, u]) => ((r[`${o} =>`] = u), r),
                        {}
                    ),
                }
              : zs(n)
                ? { [`Set(${n.size})`]: [...n.values()] }
                : Re(n) && !_e(n) && !Js(n)
                  ? String(n)
                  : n,
    De = {},
    jn = [],
    Nt = () => {},
    ol = () => !1,
    sl = /^on[^a-z]/,
    Vr = (e) => sl.test(e),
    so = (e) => e.startsWith('onUpdate:'),
    tt = Object.assign,
    ao = (e, n) => {
        const r = e.indexOf(n);
        r > -1 && e.splice(r, 1);
    },
    al = Object.prototype.hasOwnProperty,
    we = (e, n) => al.call(e, n),
    _e = Array.isArray,
    Fn = (e) => Ur(e) === '[object Map]',
    zs = (e) => Ur(e) === '[object Set]',
    ve = (e) => typeof e == 'function',
    Ue = (e) => typeof e == 'string',
    uo = (e) => typeof e == 'symbol',
    Re = (e) => e !== null && typeof e == 'object',
    Qs = (e) => Re(e) && ve(e.then) && ve(e.catch),
    Ys = Object.prototype.toString,
    Ur = (e) => Ys.call(e),
    ul = (e) => Ur(e).slice(8, -1),
    Js = (e) => Ur(e) === '[object Object]',
    lo = (e) =>
        Ue(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    Hr = io(
        ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    Gr = (e) => {
        const n = Object.create(null);
        return (r) => n[r] || (n[r] = e(r));
    },
    ll = /-(\w)/g,
    $t = Gr((e) => e.replace(ll, (n, r) => (r ? r.toUpperCase() : ''))),
    fl = /\B([A-Z])/g,
    Wn = Gr((e) => e.replace(fl, '-$1').toLowerCase()),
    Kr = Gr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Ii = Gr((e) => (e ? `on${Kr(e)}` : '')),
    Rr = (e, n) => !Object.is(e, n),
    ki = (e, n) => {
        for (let r = 0; r < e.length; r++) e[r](n);
    },
    Br = (e, n, r) => {
        Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !1,
            value: r,
        });
    },
    cl = (e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
    };
let ps;
const dl = () =>
    ps ||
    (ps =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : typeof global < 'u'
                  ? global
                  : {});
let Ot;
class Zs {
    constructor(n = !1) {
        (this.detached = n),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = Ot),
            !n &&
                Ot &&
                (this.index = (Ot.scopes || (Ot.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    run(n) {
        if (this._active) {
            const r = Ot;
            try {
                return (Ot = this), n();
            } finally {
                Ot = r;
            }
        }
    }
    on() {
        Ot = this;
    }
    off() {
        Ot = this.parent;
    }
    stop(n) {
        if (this._active) {
            let r, o;
            for (r = 0, o = this.effects.length; r < o; r++)
                this.effects[r].stop();
            for (r = 0, o = this.cleanups.length; r < o; r++)
                this.cleanups[r]();
            if (this.scopes)
                for (r = 0, o = this.scopes.length; r < o; r++)
                    this.scopes[r].stop(!0);
            if (!this.detached && this.parent && !n) {
                const u = this.parent.scopes.pop();
                u &&
                    u !== this &&
                    ((this.parent.scopes[this.index] = u),
                    (u.index = this.index));
            }
            (this.parent = void 0), (this._active = !1);
        }
    }
}
function pl(e) {
    return new Zs(e);
}
function hl(e, n = Ot) {
    n && n.active && n.effects.push(e);
}
function gl() {
    return Ot;
}
const fo = (e) => {
        const n = new Set(e);
        return (n.w = 0), (n.n = 0), n;
    },
    ea = (e) => (e.w & sn) > 0,
    ta = (e) => (e.n & sn) > 0,
    _l = ({ deps: e }) => {
        if (e.length) for (let n = 0; n < e.length; n++) e[n].w |= sn;
    },
    vl = (e) => {
        const { deps: n } = e;
        if (n.length) {
            let r = 0;
            for (let o = 0; o < n.length; o++) {
                const u = n[o];
                ea(u) && !ta(u) ? u.delete(e) : (n[r++] = u),
                    (u.w &= ~sn),
                    (u.n &= ~sn);
            }
            n.length = r;
        }
    },
    Bi = new WeakMap();
let sr = 0,
    sn = 1;
const $i = 30;
let Pt;
const Sn = Symbol(''),
    qi = Symbol('');
class co {
    constructor(n, r = null, o) {
        (this.fn = n),
            (this.scheduler = r),
            (this.active = !0),
            (this.deps = []),
            (this.parent = void 0),
            hl(this, o);
    }
    run() {
        if (!this.active) return this.fn();
        let n = Pt,
            r = rn;
        for (; n; ) {
            if (n === this) return;
            n = n.parent;
        }
        try {
            return (
                (this.parent = Pt),
                (Pt = this),
                (rn = !0),
                (sn = 1 << ++sr),
                sr <= $i ? _l(this) : hs(this),
                this.fn()
            );
        } finally {
            sr <= $i && vl(this),
                (sn = 1 << --sr),
                (Pt = this.parent),
                (rn = r),
                (this.parent = void 0),
                this.deferStop && this.stop();
        }
    }
    stop() {
        Pt === this
            ? (this.deferStop = !0)
            : this.active &&
              (hs(this), this.onStop && this.onStop(), (this.active = !1));
    }
}
function hs(e) {
    const { deps: n } = e;
    if (n.length) {
        for (let r = 0; r < n.length; r++) n[r].delete(e);
        n.length = 0;
    }
}
let rn = !0;
const na = [];
function Vn() {
    na.push(rn), (rn = !1);
}
function Un() {
    const e = na.pop();
    rn = e === void 0 ? !0 : e;
}
function dt(e, n, r) {
    if (rn && Pt) {
        let o = Bi.get(e);
        o || Bi.set(e, (o = new Map()));
        let u = o.get(r);
        u || o.set(r, (u = fo())), ra(u);
    }
}
function ra(e, n) {
    let r = !1;
    sr <= $i ? ta(e) || ((e.n |= sn), (r = !ea(e))) : (r = !e.has(Pt)),
        r && (e.add(Pt), Pt.deps.push(e));
}
function zt(e, n, r, o, u, c) {
    const g = Bi.get(e);
    if (!g) return;
    let y = [];
    if (n === 'clear') y = [...g.values()];
    else if (r === 'length' && _e(e)) {
        const b = Number(o);
        g.forEach((A, N) => {
            (N === 'length' || N >= b) && y.push(A);
        });
    } else
        switch ((r !== void 0 && y.push(g.get(r)), n)) {
            case 'add':
                _e(e)
                    ? lo(r) && y.push(g.get('length'))
                    : (y.push(g.get(Sn)), Fn(e) && y.push(g.get(qi)));
                break;
            case 'delete':
                _e(e) || (y.push(g.get(Sn)), Fn(e) && y.push(g.get(qi)));
                break;
            case 'set':
                Fn(e) && y.push(g.get(Sn));
                break;
        }
    if (y.length === 1) y[0] && Wi(y[0]);
    else {
        const b = [];
        for (const A of y) A && b.push(...A);
        Wi(fo(b));
    }
}
function Wi(e, n) {
    const r = _e(e) ? e : [...e];
    for (const o of r) o.computed && gs(o);
    for (const o of r) o.computed || gs(o);
}
function gs(e, n) {
    (e !== Pt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ml = io('__proto__,__v_isRef,__isVue'),
    ia = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== 'arguments' && e !== 'caller')
            .map((e) => Symbol[e])
            .filter(uo)
    ),
    yl = po(),
    bl = po(!1, !0),
    wl = po(!0),
    _s = xl();
function xl() {
    const e = {};
    return (
        ['includes', 'indexOf', 'lastIndexOf'].forEach((n) => {
            e[n] = function (...r) {
                const o = Te(this);
                for (let c = 0, g = this.length; c < g; c++)
                    dt(o, 'get', c + '');
                const u = o[n](...r);
                return u === -1 || u === !1 ? o[n](...r.map(Te)) : u;
            };
        }),
        ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((n) => {
            e[n] = function (...r) {
                Vn();
                const o = Te(this)[n].apply(this, r);
                return Un(), o;
            };
        }),
        e
    );
}
function Tl(e) {
    const n = Te(this);
    return dt(n, 'has', e), n.hasOwnProperty(e);
}
function po(e = !1, n = !1) {
    return function (o, u, c) {
        if (u === '__v_isReactive') return !e;
        if (u === '__v_isReadonly') return e;
        if (u === '__v_isShallow') return n;
        if (u === '__v_raw' && c === (e ? (n ? Rl : la) : n ? ua : aa).get(o))
            return o;
        const g = _e(o);
        if (!e) {
            if (g && we(_s, u)) return Reflect.get(_s, u, c);
            if (u === 'hasOwnProperty') return Tl;
        }
        const y = Reflect.get(o, u, c);
        return (uo(u) ? ia.has(u) : ml(u)) || (e || dt(o, 'get', u), n)
            ? y
            : it(y)
              ? g && lo(u)
                  ? y
                  : y.value
              : Re(y)
                ? e
                    ? fa(y)
                    : zr(y)
                : y;
    };
}
const Al = oa(),
    Sl = oa(!0);
function oa(e = !1) {
    return function (r, o, u, c) {
        let g = r[o];
        if (cr(g) && it(g) && !it(u)) return !1;
        if (
            !e &&
            (!Vi(u) && !cr(u) && ((g = Te(g)), (u = Te(u))),
            !_e(r) && it(g) && !it(u))
        )
            return (g.value = u), !0;
        const y = _e(r) && lo(o) ? Number(o) < r.length : we(r, o),
            b = Reflect.set(r, o, u, c);
        return (
            r === Te(c) &&
                (y ? Rr(u, g) && zt(r, 'set', o, u) : zt(r, 'add', o, u)),
            b
        );
    };
}
function Cl(e, n) {
    const r = we(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && r && zt(e, 'delete', n, void 0), o;
}
function El(e, n) {
    const r = Reflect.has(e, n);
    return (!uo(n) || !ia.has(n)) && dt(e, 'has', n), r;
}
function Ol(e) {
    return dt(e, 'iterate', _e(e) ? 'length' : Sn), Reflect.ownKeys(e);
}
const sa = { get: yl, set: Al, deleteProperty: Cl, has: El, ownKeys: Ol },
    Ml = {
        get: wl,
        set(e, n) {
            return !0;
        },
        deleteProperty(e, n) {
            return !0;
        },
    },
    Pl = tt({}, sa, { get: bl, set: Sl }),
    ho = (e) => e,
    Xr = (e) => Reflect.getPrototypeOf(e);
function Mr(e, n, r = !1, o = !1) {
    e = e.__v_raw;
    const u = Te(e),
        c = Te(n);
    r || (n !== c && dt(u, 'get', n), dt(u, 'get', c));
    const { has: g } = Xr(u),
        y = o ? ho : r ? mo : vo;
    if (g.call(u, n)) return y(e.get(n));
    if (g.call(u, c)) return y(e.get(c));
    e !== u && e.get(n);
}
function Pr(e, n = !1) {
    const r = this.__v_raw,
        o = Te(r),
        u = Te(e);
    return (
        n || (e !== u && dt(o, 'has', e), dt(o, 'has', u)),
        e === u ? r.has(e) : r.has(e) || r.has(u)
    );
}
function Ir(e, n = !1) {
    return (
        (e = e.__v_raw),
        !n && dt(Te(e), 'iterate', Sn),
        Reflect.get(e, 'size', e)
    );
}
function vs(e) {
    e = Te(e);
    const n = Te(this);
    return Xr(n).has.call(n, e) || (n.add(e), zt(n, 'add', e, e)), this;
}
function ms(e, n) {
    n = Te(n);
    const r = Te(this),
        { has: o, get: u } = Xr(r);
    let c = o.call(r, e);
    c || ((e = Te(e)), (c = o.call(r, e)));
    const g = u.call(r, e);
    return (
        r.set(e, n),
        c ? Rr(n, g) && zt(r, 'set', e, n) : zt(r, 'add', e, n),
        this
    );
}
function ys(e) {
    const n = Te(this),
        { has: r, get: o } = Xr(n);
    let u = r.call(n, e);
    u || ((e = Te(e)), (u = r.call(n, e))), o && o.call(n, e);
    const c = n.delete(e);
    return u && zt(n, 'delete', e, void 0), c;
}
function bs() {
    const e = Te(this),
        n = e.size !== 0,
        r = e.clear();
    return n && zt(e, 'clear', void 0, void 0), r;
}
function kr(e, n) {
    return function (o, u) {
        const c = this,
            g = c.__v_raw,
            y = Te(g),
            b = n ? ho : e ? mo : vo;
        return (
            !e && dt(y, 'iterate', Sn),
            g.forEach((A, N) => o.call(u, b(A), b(N), c))
        );
    };
}
function Nr(e, n, r) {
    return function (...o) {
        const u = this.__v_raw,
            c = Te(u),
            g = Fn(c),
            y = e === 'entries' || (e === Symbol.iterator && g),
            b = e === 'keys' && g,
            A = u[e](...o),
            N = r ? ho : n ? mo : vo;
        return (
            !n && dt(c, 'iterate', b ? qi : Sn),
            {
                next() {
                    const { value: s, done: d } = A.next();
                    return d
                        ? { value: s, done: d }
                        : { value: y ? [N(s[0]), N(s[1])] : N(s), done: d };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function tn(e) {
    return function (...n) {
        return e === 'delete' ? !1 : this;
    };
}
function Il() {
    const e = {
            get(c) {
                return Mr(this, c);
            },
            get size() {
                return Ir(this);
            },
            has: Pr,
            add: vs,
            set: ms,
            delete: ys,
            clear: bs,
            forEach: kr(!1, !1),
        },
        n = {
            get(c) {
                return Mr(this, c, !1, !0);
            },
            get size() {
                return Ir(this);
            },
            has: Pr,
            add: vs,
            set: ms,
            delete: ys,
            clear: bs,
            forEach: kr(!1, !0),
        },
        r = {
            get(c) {
                return Mr(this, c, !0);
            },
            get size() {
                return Ir(this, !0);
            },
            has(c) {
                return Pr.call(this, c, !0);
            },
            add: tn('add'),
            set: tn('set'),
            delete: tn('delete'),
            clear: tn('clear'),
            forEach: kr(!0, !1),
        },
        o = {
            get(c) {
                return Mr(this, c, !0, !0);
            },
            get size() {
                return Ir(this, !0);
            },
            has(c) {
                return Pr.call(this, c, !0);
            },
            add: tn('add'),
            set: tn('set'),
            delete: tn('delete'),
            clear: tn('clear'),
            forEach: kr(!0, !0),
        };
    return (
        ['keys', 'values', 'entries', Symbol.iterator].forEach((c) => {
            (e[c] = Nr(c, !1, !1)),
                (r[c] = Nr(c, !0, !1)),
                (n[c] = Nr(c, !1, !0)),
                (o[c] = Nr(c, !0, !0));
        }),
        [e, r, n, o]
    );
}
const [kl, Nl, Ll, Dl] = Il();
function go(e, n) {
    const r = n ? (e ? Dl : Ll) : e ? Nl : kl;
    return (o, u, c) =>
        u === '__v_isReactive'
            ? !e
            : u === '__v_isReadonly'
              ? e
              : u === '__v_raw'
                ? o
                : Reflect.get(we(r, u) && u in o ? r : o, u, c);
}
const Hl = { get: go(!1, !1) },
    jl = { get: go(!1, !0) },
    Fl = { get: go(!0, !1) },
    aa = new WeakMap(),
    ua = new WeakMap(),
    la = new WeakMap(),
    Rl = new WeakMap();
function Bl(e) {
    switch (e) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
    }
}
function $l(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Bl(ul(e));
}
function zr(e) {
    return cr(e) ? e : _o(e, !1, sa, Hl, aa);
}
function ql(e) {
    return _o(e, !1, Pl, jl, ua);
}
function fa(e) {
    return _o(e, !0, Ml, Fl, la);
}
function _o(e, n, r, o, u) {
    if (!Re(e) || (e.__v_raw && !(n && e.__v_isReactive))) return e;
    const c = u.get(e);
    if (c) return c;
    const g = $l(e);
    if (g === 0) return e;
    const y = new Proxy(e, g === 2 ? o : r);
    return u.set(e, y), y;
}
function Rn(e) {
    return cr(e) ? Rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function cr(e) {
    return !!(e && e.__v_isReadonly);
}
function Vi(e) {
    return !!(e && e.__v_isShallow);
}
function ca(e) {
    return Rn(e) || cr(e);
}
function Te(e) {
    const n = e && e.__v_raw;
    return n ? Te(n) : e;
}
function da(e) {
    return Br(e, '__v_skip', !0), e;
}
const vo = (e) => (Re(e) ? zr(e) : e),
    mo = (e) => (Re(e) ? fa(e) : e);
function Wl(e) {
    rn && Pt && ((e = Te(e)), ra(e.dep || (e.dep = fo())));
}
function Vl(e, n) {
    e = Te(e);
    const r = e.dep;
    r && Wi(r);
}
function it(e) {
    return !!(e && e.__v_isRef === !0);
}
function Ul(e) {
    return it(e) ? e.value : e;
}
const Gl = {
    get: (e, n, r) => Ul(Reflect.get(e, n, r)),
    set: (e, n, r, o) => {
        const u = e[n];
        return it(u) && !it(r) ? ((u.value = r), !0) : Reflect.set(e, n, r, o);
    },
};
function pa(e) {
    return Rn(e) ? e : new Proxy(e, Gl);
}
var ha;
class Kl {
    constructor(n, r, o, u) {
        (this._setter = r),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this[ha] = !1),
            (this._dirty = !0),
            (this.effect = new co(n, () => {
                this._dirty || ((this._dirty = !0), Vl(this));
            })),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !u),
            (this.__v_isReadonly = o);
    }
    get value() {
        const n = Te(this);
        return (
            Wl(n),
            (n._dirty || !n._cacheable) &&
                ((n._dirty = !1), (n._value = n.effect.run())),
            n._value
        );
    }
    set value(n) {
        this._setter(n);
    }
}
ha = '__v_isReadonly';
function Xl(e, n, r = !1) {
    let o, u;
    const c = ve(e);
    return (
        c ? ((o = e), (u = Nt)) : ((o = e.get), (u = e.set)),
        new Kl(o, u, c || !u, r)
    );
}
function on(e, n, r, o) {
    let u;
    try {
        u = o ? e(...o) : e();
    } catch (c) {
        Qr(c, n, r);
    }
    return u;
}
function Tt(e, n, r, o) {
    if (ve(e)) {
        const c = on(e, n, r, o);
        return (
            c &&
                Qs(c) &&
                c.catch((g) => {
                    Qr(g, n, r);
                }),
            c
        );
    }
    const u = [];
    for (let c = 0; c < e.length; c++) u.push(Tt(e[c], n, r, o));
    return u;
}
function Qr(e, n, r, o = !0) {
    const u = n ? n.vnode : null;
    if (n) {
        let c = n.parent;
        const g = n.proxy,
            y = r;
        for (; c; ) {
            const A = c.ec;
            if (A) {
                for (let N = 0; N < A.length; N++)
                    if (A[N](e, g, y) === !1) return;
            }
            c = c.parent;
        }
        const b = n.appContext.config.errorHandler;
        if (b) {
            on(b, null, 10, [e, g, y]);
            return;
        }
    }
    zl(e, r, u, o);
}
function zl(e, n, r, o = !0) {
    console.error(e);
}
let dr = !1,
    Ui = !1;
const et = [];
let Bt = 0;
const Bn = [];
let Kt = null,
    wn = 0;
const ga = Promise.resolve();
let yo = null;
function Ql(e) {
    const n = yo || ga;
    return e ? n.then(this ? e.bind(this) : e) : n;
}
function Yl(e) {
    let n = Bt + 1,
        r = et.length;
    for (; n < r; ) {
        const o = (n + r) >>> 1;
        pr(et[o]) < e ? (n = o + 1) : (r = o);
    }
    return n;
}
function bo(e) {
    (!et.length || !et.includes(e, dr && e.allowRecurse ? Bt + 1 : Bt)) &&
        (e.id == null ? et.push(e) : et.splice(Yl(e.id), 0, e), _a());
}
function _a() {
    !dr && !Ui && ((Ui = !0), (yo = ga.then(ma)));
}
function Jl(e) {
    const n = et.indexOf(e);
    n > Bt && et.splice(n, 1);
}
function Zl(e) {
    _e(e)
        ? Bn.push(...e)
        : (!Kt || !Kt.includes(e, e.allowRecurse ? wn + 1 : wn)) && Bn.push(e),
        _a();
}
function ws(e, n = dr ? Bt + 1 : 0) {
    for (; n < et.length; n++) {
        const r = et[n];
        r && r.pre && (et.splice(n, 1), n--, r());
    }
}
function va(e) {
    if (Bn.length) {
        const n = [...new Set(Bn)];
        if (((Bn.length = 0), Kt)) {
            Kt.push(...n);
            return;
        }
        for (
            Kt = n, Kt.sort((r, o) => pr(r) - pr(o)), wn = 0;
            wn < Kt.length;
            wn++
        )
            Kt[wn]();
        (Kt = null), (wn = 0);
    }
}
const pr = (e) => (e.id == null ? 1 / 0 : e.id),
    ef = (e, n) => {
        const r = pr(e) - pr(n);
        if (r === 0) {
            if (e.pre && !n.pre) return -1;
            if (n.pre && !e.pre) return 1;
        }
        return r;
    };
function ma(e) {
    (Ui = !1), (dr = !0), et.sort(ef);
    const n = Nt;
    try {
        for (Bt = 0; Bt < et.length; Bt++) {
            const r = et[Bt];
            r && r.active !== !1 && on(r, null, 14);
        }
    } finally {
        (Bt = 0),
            (et.length = 0),
            va(),
            (dr = !1),
            (yo = null),
            (et.length || Bn.length) && ma();
    }
}
function tf(e, n, ...r) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || De;
    let u = r;
    const c = n.startsWith('update:'),
        g = c && n.slice(7);
    if (g && g in o) {
        const N = `${g === 'modelValue' ? 'model' : g}Modifiers`,
            { number: s, trim: d } = o[N] || De;
        d && (u = r.map((m) => (Ue(m) ? m.trim() : m))), s && (u = r.map(cl));
    }
    let y,
        b = o[(y = Ii(n))] || o[(y = Ii($t(n)))];
    !b && c && (b = o[(y = Ii(Wn(n)))]), b && Tt(b, e, 6, u);
    const A = o[y + 'Once'];
    if (A) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[y]) return;
        (e.emitted[y] = !0), Tt(A, e, 6, u);
    }
}
function ya(e, n, r = !1) {
    const o = n.emitsCache,
        u = o.get(e);
    if (u !== void 0) return u;
    const c = e.emits;
    let g = {},
        y = !1;
    if (!ve(e)) {
        const b = (A) => {
            const N = ya(A, n, !0);
            N && ((y = !0), tt(g, N));
        };
        !r && n.mixins.length && n.mixins.forEach(b),
            e.extends && b(e.extends),
            e.mixins && e.mixins.forEach(b);
    }
    return !c && !y
        ? (Re(e) && o.set(e, null), null)
        : (_e(c) ? c.forEach((b) => (g[b] = null)) : tt(g, c),
          Re(e) && o.set(e, g),
          g);
}
function Yr(e, n) {
    return !e || !Vr(n)
        ? !1
        : ((n = n.slice(2).replace(/Once$/, '')),
          we(e, n[0].toLowerCase() + n.slice(1)) || we(e, Wn(n)) || we(e, n));
}
let xt = null,
    Jr = null;
function $r(e) {
    const n = xt;
    return (xt = e), (Jr = (e && e.type.__scopeId) || null), n;
}
function Zr(e) {
    Jr = e;
}
function ei() {
    Jr = null;
}
function nf(e, n = xt, r) {
    if (!n || e._n) return e;
    const o = (...u) => {
        o._d && ks(-1);
        const c = $r(n);
        let g;
        try {
            g = e(...u);
        } finally {
            $r(c), o._d && ks(1);
        }
        return g;
    };
    return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Ni(e) {
    const {
        type: n,
        vnode: r,
        proxy: o,
        withProxy: u,
        props: c,
        propsOptions: [g],
        slots: y,
        attrs: b,
        emit: A,
        render: N,
        renderCache: s,
        data: d,
        setupState: m,
        ctx: T,
        inheritAttrs: E,
    } = e;
    let j, O;
    const Z = $r(e);
    try {
        if (r.shapeFlag & 4) {
            const ce = u || o;
            (j = Rt(N.call(ce, ce, s, c, m, d, T))), (O = b);
        } else {
            const ce = n;
            (j = Rt(
                ce.length > 1
                    ? ce(c, { attrs: b, slots: y, emit: A })
                    : ce(c, null)
            )),
                (O = n.props ? b : rf(b));
        }
    } catch (ce) {
        (fr.length = 0), Qr(ce, e, 1), (j = ct(Lt));
    }
    let Q = j;
    if (O && E !== !1) {
        const ce = Object.keys(O),
            { shapeFlag: Ae } = Q;
        ce.length &&
            Ae & 7 &&
            (g && ce.some(so) && (O = of(O, g)), (Q = an(Q, O)));
    }
    return (
        r.dirs &&
            ((Q = an(Q)), (Q.dirs = Q.dirs ? Q.dirs.concat(r.dirs) : r.dirs)),
        r.transition && (Q.transition = r.transition),
        (j = Q),
        $r(Z),
        j
    );
}
const rf = (e) => {
        let n;
        for (const r in e)
            (r === 'class' || r === 'style' || Vr(r)) &&
                ((n || (n = {}))[r] = e[r]);
        return n;
    },
    of = (e, n) => {
        const r = {};
        for (const o in e) (!so(o) || !(o.slice(9) in n)) && (r[o] = e[o]);
        return r;
    };
function sf(e, n, r) {
    const { props: o, children: u, component: c } = e,
        { props: g, children: y, patchFlag: b } = n,
        A = c.emitsOptions;
    if (n.dirs || n.transition) return !0;
    if (r && b >= 0) {
        if (b & 1024) return !0;
        if (b & 16) return o ? xs(o, g, A) : !!g;
        if (b & 8) {
            const N = n.dynamicProps;
            for (let s = 0; s < N.length; s++) {
                const d = N[s];
                if (g[d] !== o[d] && !Yr(A, d)) return !0;
            }
        }
    } else
        return (u || y) && (!y || !y.$stable)
            ? !0
            : o === g
              ? !1
              : o
                ? g
                    ? xs(o, g, A)
                    : !0
                : !!g;
    return !1;
}
function xs(e, n, r) {
    const o = Object.keys(n);
    if (o.length !== Object.keys(e).length) return !0;
    for (let u = 0; u < o.length; u++) {
        const c = o[u];
        if (n[c] !== e[c] && !Yr(r, c)) return !0;
    }
    return !1;
}
function af({ vnode: e, parent: n }, r) {
    for (; n && n.subTree === e; ) ((e = n.vnode).el = r), (n = n.parent);
}
const uf = (e) => e.__isSuspense;
function lf(e, n) {
    n && n.pendingBranch
        ? _e(e)
            ? n.effects.push(...e)
            : n.effects.push(e)
        : Zl(e);
}
function ff(e, n) {
    if (Be) {
        let r = Be.provides;
        const o = Be.parent && Be.parent.provides;
        o === r && (r = Be.provides = Object.create(o)), (r[e] = n);
    }
}
function ar(e, n, r = !1) {
    const o = Be || xt;
    if (o) {
        const u =
            o.parent == null
                ? o.vnode.appContext && o.vnode.appContext.provides
                : o.parent.provides;
        if (u && e in u) return u[e];
        if (arguments.length > 1) return r && ve(n) ? n.call(o.proxy) : n;
    }
}
const Lr = {};
function ur(e, n, r) {
    return ba(e, n, r);
}
function ba(
    e,
    n,
    { immediate: r, deep: o, flush: u, onTrack: c, onTrigger: g } = De
) {
    const y = gl() === (Be == null ? void 0 : Be.scope) ? Be : null;
    let b,
        A = !1,
        N = !1;
    if (
        (it(e)
            ? ((b = () => e.value), (A = Vi(e)))
            : Rn(e)
              ? ((b = () => e), (o = !0))
              : _e(e)
                ? ((N = !0),
                  (A = e.some((Q) => Rn(Q) || Vi(Q))),
                  (b = () =>
                      e.map((Q) => {
                          if (it(Q)) return Q.value;
                          if (Rn(Q)) return Hn(Q);
                          if (ve(Q)) return on(Q, y, 2);
                      })))
                : ve(e)
                  ? n
                      ? (b = () => on(e, y, 2))
                      : (b = () => {
                            if (!(y && y.isUnmounted))
                                return s && s(), Tt(e, y, 3, [d]);
                        })
                  : (b = Nt),
        n && o)
    ) {
        const Q = b;
        b = () => Hn(Q());
    }
    let s,
        d = (Q) => {
            s = O.onStop = () => {
                on(Q, y, 4);
            };
        },
        m;
    if (gr)
        if (
            ((d = Nt),
            n ? r && Tt(n, y, 3, [b(), N ? [] : void 0, d]) : b(),
            u === 'sync')
        ) {
            const Q = uc();
            m = Q.__watcherHandles || (Q.__watcherHandles = []);
        } else return Nt;
    let T = N ? new Array(e.length).fill(Lr) : Lr;
    const E = () => {
        if (O.active)
            if (n) {
                const Q = O.run();
                (o ||
                    A ||
                    (N ? Q.some((ce, Ae) => Rr(ce, T[Ae])) : Rr(Q, T))) &&
                    (s && s(),
                    Tt(n, y, 3, [
                        Q,
                        T === Lr ? void 0 : N && T[0] === Lr ? [] : T,
                        d,
                    ]),
                    (T = Q));
            } else O.run();
    };
    E.allowRecurse = !!n;
    let j;
    u === 'sync'
        ? (j = E)
        : u === 'post'
          ? (j = () => ft(E, y && y.suspense))
          : ((E.pre = !0), y && (E.id = y.uid), (j = () => bo(E)));
    const O = new co(b, j);
    n
        ? r
            ? E()
            : (T = O.run())
        : u === 'post'
          ? ft(O.run.bind(O), y && y.suspense)
          : O.run();
    const Z = () => {
        O.stop(), y && y.scope && ao(y.scope.effects, O);
    };
    return m && m.push(Z), Z;
}
function cf(e, n, r) {
    const o = this.proxy,
        u = Ue(e) ? (e.includes('.') ? wa(o, e) : () => o[e]) : e.bind(o, o);
    let c;
    ve(n) ? (c = n) : ((c = n.handler), (r = n));
    const g = Be;
    qn(this);
    const y = ba(u, c.bind(o), r);
    return g ? qn(g) : Cn(), y;
}
function wa(e, n) {
    const r = n.split('.');
    return () => {
        let o = e;
        for (let u = 0; u < r.length && o; u++) o = o[r[u]];
        return o;
    };
}
function Hn(e, n) {
    if (!Re(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
    if ((n.add(e), it(e))) Hn(e.value, n);
    else if (_e(e)) for (let r = 0; r < e.length; r++) Hn(e[r], n);
    else if (zs(e) || Fn(e))
        e.forEach((r) => {
            Hn(r, n);
        });
    else if (Js(e)) for (const r in e) Hn(e[r], n);
    return e;
}
function df() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
    };
    return (
        Sa(() => {
            e.isMounted = !0;
        }),
        Ca(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const wt = [Function, Array],
    pf = {
        name: 'BaseTransition',
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: wt,
            onEnter: wt,
            onAfterEnter: wt,
            onEnterCancelled: wt,
            onBeforeLeave: wt,
            onLeave: wt,
            onAfterLeave: wt,
            onLeaveCancelled: wt,
            onBeforeAppear: wt,
            onAppear: wt,
            onAfterAppear: wt,
            onAppearCancelled: wt,
        },
        setup(e, { slots: n }) {
            const r = ec(),
                o = df();
            let u;
            return () => {
                const c = n.default && Ta(n.default(), !0);
                if (!c || !c.length) return;
                let g = c[0];
                if (c.length > 1) {
                    for (const E of c)
                        if (E.type !== Lt) {
                            g = E;
                            break;
                        }
                }
                const y = Te(e),
                    { mode: b } = y;
                if (o.isLeaving) return Li(g);
                const A = Ts(g);
                if (!A) return Li(g);
                const N = Gi(A, y, o, r);
                Ki(A, N);
                const s = r.subTree,
                    d = s && Ts(s);
                let m = !1;
                const { getTransitionKey: T } = A.type;
                if (T) {
                    const E = T();
                    u === void 0 ? (u = E) : E !== u && ((u = E), (m = !0));
                }
                if (d && d.type !== Lt && (!xn(A, d) || m)) {
                    const E = Gi(d, y, o, r);
                    if ((Ki(d, E), b === 'out-in'))
                        return (
                            (o.isLeaving = !0),
                            (E.afterLeave = () => {
                                (o.isLeaving = !1),
                                    r.update.active !== !1 && r.update();
                            }),
                            Li(g)
                        );
                    b === 'in-out' &&
                        A.type !== Lt &&
                        (E.delayLeave = (j, O, Z) => {
                            const Q = xa(o, d);
                            (Q[String(d.key)] = d),
                                (j._leaveCb = () => {
                                    O(),
                                        (j._leaveCb = void 0),
                                        delete N.delayedLeave;
                                }),
                                (N.delayedLeave = Z);
                        });
                }
                return g;
            };
        },
    },
    hf = pf;
function xa(e, n) {
    const { leavingVNodes: r } = e;
    let o = r.get(n.type);
    return o || ((o = Object.create(null)), r.set(n.type, o)), o;
}
function Gi(e, n, r, o) {
    const {
            appear: u,
            mode: c,
            persisted: g = !1,
            onBeforeEnter: y,
            onEnter: b,
            onAfterEnter: A,
            onEnterCancelled: N,
            onBeforeLeave: s,
            onLeave: d,
            onAfterLeave: m,
            onLeaveCancelled: T,
            onBeforeAppear: E,
            onAppear: j,
            onAfterAppear: O,
            onAppearCancelled: Z,
        } = n,
        Q = String(e.key),
        ce = xa(r, e),
        Ae = (de, le) => {
            de && Tt(de, o, 9, le);
        },
        f = (de, le) => {
            const Se = le[1];
            Ae(de, le),
                _e(de)
                    ? de.every((qe) => qe.length <= 1) && Se()
                    : de.length <= 1 && Se();
        },
        Ke = {
            mode: c,
            persisted: g,
            beforeEnter(de) {
                let le = y;
                if (!r.isMounted)
                    if (u) le = E || y;
                    else return;
                de._leaveCb && de._leaveCb(!0);
                const Se = ce[Q];
                Se && xn(e, Se) && Se.el._leaveCb && Se.el._leaveCb(),
                    Ae(le, [de]);
            },
            enter(de) {
                let le = b,
                    Se = A,
                    qe = N;
                if (!r.isMounted)
                    if (u) (le = j || b), (Se = O || A), (qe = Z || N);
                    else return;
                let ke = !1;
                const nt = (de._enterCb = (Qe) => {
                    ke ||
                        ((ke = !0),
                        Qe ? Ae(qe, [de]) : Ae(Se, [de]),
                        Ke.delayedLeave && Ke.delayedLeave(),
                        (de._enterCb = void 0));
                });
                le ? f(le, [de, nt]) : nt();
            },
            leave(de, le) {
                const Se = String(e.key);
                if ((de._enterCb && de._enterCb(!0), r.isUnmounting))
                    return le();
                Ae(s, [de]);
                let qe = !1;
                const ke = (de._leaveCb = (nt) => {
                    qe ||
                        ((qe = !0),
                        le(),
                        nt ? Ae(T, [de]) : Ae(m, [de]),
                        (de._leaveCb = void 0),
                        ce[Se] === e && delete ce[Se]);
                });
                (ce[Se] = e), d ? f(d, [de, ke]) : ke();
            },
            clone(de) {
                return Gi(de, n, r, o);
            },
        };
    return Ke;
}
function Li(e) {
    if (ti(e)) return (e = an(e)), (e.children = null), e;
}
function Ts(e) {
    return ti(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Ki(e, n) {
    e.shapeFlag & 6 && e.component
        ? Ki(e.component.subTree, n)
        : e.shapeFlag & 128
          ? ((e.ssContent.transition = n.clone(e.ssContent)),
            (e.ssFallback.transition = n.clone(e.ssFallback)))
          : (e.transition = n);
}
function Ta(e, n = !1, r) {
    let o = [],
        u = 0;
    for (let c = 0; c < e.length; c++) {
        let g = e[c];
        const y =
            r == null ? g.key : String(r) + String(g.key != null ? g.key : c);
        g.type === vt
            ? (g.patchFlag & 128 && u++, (o = o.concat(Ta(g.children, n, y))))
            : (n || g.type !== Lt) && o.push(y != null ? an(g, { key: y }) : g);
    }
    if (u > 1) for (let c = 0; c < o.length; c++) o[c].patchFlag = -2;
    return o;
}
const jr = (e) => !!e.type.__asyncLoader,
    ti = (e) => e.type.__isKeepAlive;
function gf(e, n) {
    Aa(e, 'a', n);
}
function _f(e, n) {
    Aa(e, 'da', n);
}
function Aa(e, n, r = Be) {
    const o =
        e.__wdc ||
        (e.__wdc = () => {
            let u = r;
            for (; u; ) {
                if (u.isDeactivated) return;
                u = u.parent;
            }
            return e();
        });
    if ((ni(n, o, r), r)) {
        let u = r.parent;
        for (; u && u.parent; )
            ti(u.parent.vnode) && vf(o, n, r, u), (u = u.parent);
    }
}
function vf(e, n, r, o) {
    const u = ni(n, e, o, !0);
    Ea(() => {
        ao(o[n], u);
    }, r);
}
function ni(e, n, r = Be, o = !1) {
    if (r) {
        const u = r[e] || (r[e] = []),
            c =
                n.__weh ||
                (n.__weh = (...g) => {
                    if (r.isUnmounted) return;
                    Vn(), qn(r);
                    const y = Tt(n, r, e, g);
                    return Cn(), Un(), y;
                });
        return o ? u.unshift(c) : u.push(c), c;
    }
}
const Qt =
        (e) =>
        (n, r = Be) =>
            (!gr || e === 'sp') && ni(e, (...o) => n(...o), r),
    mf = Qt('bm'),
    Sa = Qt('m'),
    yf = Qt('bu'),
    bf = Qt('u'),
    Ca = Qt('bum'),
    Ea = Qt('um'),
    wf = Qt('sp'),
    xf = Qt('rtg'),
    Tf = Qt('rtc');
function Af(e, n = Be) {
    ni('ec', e, n);
}
function mn(e, n, r, o) {
    const u = e.dirs,
        c = n && n.dirs;
    for (let g = 0; g < u.length; g++) {
        const y = u[g];
        c && (y.oldValue = c[g].value);
        let b = y.dir[o];
        b && (Vn(), Tt(b, r, 8, [e.el, y, e, n]), Un());
    }
}
const Oa = 'components';
function or(e, n) {
    return Cf(Oa, e, !0, n) || e;
}
const Sf = Symbol();
function Cf(e, n, r = !0, o = !1) {
    const u = xt || Be;
    if (u) {
        const c = u.type;
        if (e === Oa) {
            const y = oc(c, !1);
            if (y && (y === n || y === $t(n) || y === Kr($t(n)))) return c;
        }
        const g = As(u[e] || c[e], n) || As(u.appContext[e], n);
        return !g && o ? c : g;
    }
}
function As(e, n) {
    return e && (e[n] || e[$t(n)] || e[Kr($t(n))]);
}
function Ss(e, n, r, o) {
    let u;
    const c = r && r[o];
    if (_e(e) || Ue(e)) {
        u = new Array(e.length);
        for (let g = 0, y = e.length; g < y; g++)
            u[g] = n(e[g], g, void 0, c && c[g]);
    } else if (typeof e == 'number') {
        u = new Array(e);
        for (let g = 0; g < e; g++) u[g] = n(g + 1, g, void 0, c && c[g]);
    } else if (Re(e))
        if (e[Symbol.iterator])
            u = Array.from(e, (g, y) => n(g, y, void 0, c && c[y]));
        else {
            const g = Object.keys(e);
            u = new Array(g.length);
            for (let y = 0, b = g.length; y < b; y++) {
                const A = g[y];
                u[y] = n(e[A], A, y, c && c[y]);
            }
        }
    else u = [];
    return r && (r[o] = u), u;
}
const Xi = (e) => (e ? (Ra(e) ? Ao(e) || e.proxy : Xi(e.parent)) : null),
    lr = tt(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Xi(e.parent),
        $root: (e) => Xi(e.root),
        $emit: (e) => e.emit,
        $options: (e) => wo(e),
        $forceUpdate: (e) => e.f || (e.f = () => bo(e.update)),
        $nextTick: (e) => e.n || (e.n = Ql.bind(e.proxy)),
        $watch: (e) => cf.bind(e),
    }),
    Di = (e, n) => e !== De && !e.__isScriptSetup && we(e, n),
    Ef = {
        get({ _: e }, n) {
            const {
                ctx: r,
                setupState: o,
                data: u,
                props: c,
                accessCache: g,
                type: y,
                appContext: b,
            } = e;
            let A;
            if (n[0] !== '$') {
                const m = g[n];
                if (m !== void 0)
                    switch (m) {
                        case 1:
                            return o[n];
                        case 2:
                            return u[n];
                        case 4:
                            return r[n];
                        case 3:
                            return c[n];
                    }
                else {
                    if (Di(o, n)) return (g[n] = 1), o[n];
                    if (u !== De && we(u, n)) return (g[n] = 2), u[n];
                    if ((A = e.propsOptions[0]) && we(A, n))
                        return (g[n] = 3), c[n];
                    if (r !== De && we(r, n)) return (g[n] = 4), r[n];
                    zi && (g[n] = 0);
                }
            }
            const N = lr[n];
            let s, d;
            if (N) return n === '$attrs' && dt(e, 'get', n), N(e);
            if ((s = y.__cssModules) && (s = s[n])) return s;
            if (r !== De && we(r, n)) return (g[n] = 4), r[n];
            if (((d = b.config.globalProperties), we(d, n))) return d[n];
        },
        set({ _: e }, n, r) {
            const { data: o, setupState: u, ctx: c } = e;
            return Di(u, n)
                ? ((u[n] = r), !0)
                : o !== De && we(o, n)
                  ? ((o[n] = r), !0)
                  : we(e.props, n) || (n[0] === '$' && n.slice(1) in e)
                    ? !1
                    : ((c[n] = r), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: n,
                    accessCache: r,
                    ctx: o,
                    appContext: u,
                    propsOptions: c,
                },
            },
            g
        ) {
            let y;
            return (
                !!r[g] ||
                (e !== De && we(e, g)) ||
                Di(n, g) ||
                ((y = c[0]) && we(y, g)) ||
                we(o, g) ||
                we(lr, g) ||
                we(u.config.globalProperties, g)
            );
        },
        defineProperty(e, n, r) {
            return (
                r.get != null
                    ? (e._.accessCache[n] = 0)
                    : we(r, 'value') && this.set(e, n, r.value, null),
                Reflect.defineProperty(e, n, r)
            );
        },
    };
let zi = !0;
function Of(e) {
    const n = wo(e),
        r = e.proxy,
        o = e.ctx;
    (zi = !1), n.beforeCreate && Cs(n.beforeCreate, e, 'bc');
    const {
        data: u,
        computed: c,
        methods: g,
        watch: y,
        provide: b,
        inject: A,
        created: N,
        beforeMount: s,
        mounted: d,
        beforeUpdate: m,
        updated: T,
        activated: E,
        deactivated: j,
        beforeDestroy: O,
        beforeUnmount: Z,
        destroyed: Q,
        unmounted: ce,
        render: Ae,
        renderTracked: f,
        renderTriggered: Ke,
        errorCaptured: de,
        serverPrefetch: le,
        expose: Se,
        inheritAttrs: qe,
        components: ke,
        directives: nt,
        filters: Qe,
    } = n;
    if ((A && Mf(A, o, null, e.appContext.config.unwrapInjectedRef), g))
        for (const Ne in g) {
            const Ce = g[Ne];
            ve(Ce) && (o[Ne] = Ce.bind(r));
        }
    if (u) {
        const Ne = u.call(r, r);
        Re(Ne) && (e.data = zr(Ne));
    }
    if (((zi = !0), c))
        for (const Ne in c) {
            const Ce = c[Ne],
                qt = ve(Ce)
                    ? Ce.bind(r, r)
                    : ve(Ce.get)
                      ? Ce.get.bind(r, r)
                      : Nt,
                ln = !ve(Ce) && ve(Ce.set) ? Ce.set.bind(r) : Nt,
                Ge = $a({ get: qt, set: ln });
            Object.defineProperty(o, Ne, {
                enumerable: !0,
                configurable: !0,
                get: () => Ge.value,
                set: (mt) => (Ge.value = mt),
            });
        }
    if (y) for (const Ne in y) Ma(y[Ne], o, r, Ne);
    if (b) {
        const Ne = ve(b) ? b.call(r) : b;
        Reflect.ownKeys(Ne).forEach((Ce) => {
            ff(Ce, Ne[Ce]);
        });
    }
    N && Cs(N, e, 'c');
    function Xe(Ne, Ce) {
        _e(Ce) ? Ce.forEach((qt) => Ne(qt.bind(r))) : Ce && Ne(Ce.bind(r));
    }
    if (
        (Xe(mf, s),
        Xe(Sa, d),
        Xe(yf, m),
        Xe(bf, T),
        Xe(gf, E),
        Xe(_f, j),
        Xe(Af, de),
        Xe(Tf, f),
        Xe(xf, Ke),
        Xe(Ca, Z),
        Xe(Ea, ce),
        Xe(wf, le),
        _e(Se))
    )
        if (Se.length) {
            const Ne = e.exposed || (e.exposed = {});
            Se.forEach((Ce) => {
                Object.defineProperty(Ne, Ce, {
                    get: () => r[Ce],
                    set: (qt) => (r[Ce] = qt),
                });
            });
        } else e.exposed || (e.exposed = {});
    Ae && e.render === Nt && (e.render = Ae),
        qe != null && (e.inheritAttrs = qe),
        ke && (e.components = ke),
        nt && (e.directives = nt);
}
function Mf(e, n, r = Nt, o = !1) {
    _e(e) && (e = Qi(e));
    for (const u in e) {
        const c = e[u];
        let g;
        Re(c)
            ? 'default' in c
                ? (g = ar(c.from || u, c.default, !0))
                : (g = ar(c.from || u))
            : (g = ar(c)),
            it(g) && o
                ? Object.defineProperty(n, u, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => g.value,
                      set: (y) => (g.value = y),
                  })
                : (n[u] = g);
    }
}
function Cs(e, n, r) {
    Tt(_e(e) ? e.map((o) => o.bind(n.proxy)) : e.bind(n.proxy), n, r);
}
function Ma(e, n, r, o) {
    const u = o.includes('.') ? wa(r, o) : () => r[o];
    if (Ue(e)) {
        const c = n[e];
        ve(c) && ur(u, c);
    } else if (ve(e)) ur(u, e.bind(r));
    else if (Re(e))
        if (_e(e)) e.forEach((c) => Ma(c, n, r, o));
        else {
            const c = ve(e.handler) ? e.handler.bind(r) : n[e.handler];
            ve(c) && ur(u, c, e);
        }
}
function wo(e) {
    const n = e.type,
        { mixins: r, extends: o } = n,
        {
            mixins: u,
            optionsCache: c,
            config: { optionMergeStrategies: g },
        } = e.appContext,
        y = c.get(n);
    let b;
    return (
        y
            ? (b = y)
            : !u.length && !r && !o
              ? (b = n)
              : ((b = {}),
                u.length && u.forEach((A) => qr(b, A, g, !0)),
                qr(b, n, g)),
        Re(n) && c.set(n, b),
        b
    );
}
function qr(e, n, r, o = !1) {
    const { mixins: u, extends: c } = n;
    c && qr(e, c, r, !0), u && u.forEach((g) => qr(e, g, r, !0));
    for (const g in n)
        if (!(o && g === 'expose')) {
            const y = Pf[g] || (r && r[g]);
            e[g] = y ? y(e[g], n[g]) : n[g];
        }
    return e;
}
const Pf = {
    data: Es,
    props: bn,
    emits: bn,
    methods: bn,
    computed: bn,
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    components: bn,
    directives: bn,
    watch: kf,
    provide: Es,
    inject: If,
};
function Es(e, n) {
    return n
        ? e
            ? function () {
                  return tt(
                      ve(e) ? e.call(this, this) : e,
                      ve(n) ? n.call(this, this) : n
                  );
              }
            : n
        : e;
}
function If(e, n) {
    return bn(Qi(e), Qi(n));
}
function Qi(e) {
    if (_e(e)) {
        const n = {};
        for (let r = 0; r < e.length; r++) n[e[r]] = e[r];
        return n;
    }
    return e;
}
function rt(e, n) {
    return e ? [...new Set([].concat(e, n))] : n;
}
function bn(e, n) {
    return e ? tt(tt(Object.create(null), e), n) : n;
}
function kf(e, n) {
    if (!e) return n;
    if (!n) return e;
    const r = tt(Object.create(null), e);
    for (const o in n) r[o] = rt(e[o], n[o]);
    return r;
}
function Nf(e, n, r, o = !1) {
    const u = {},
        c = {};
    Br(c, ii, 1), (e.propsDefaults = Object.create(null)), Pa(e, n, u, c);
    for (const g in e.propsOptions[0]) g in u || (u[g] = void 0);
    r
        ? (e.props = o ? u : ql(u))
        : e.type.props
          ? (e.props = u)
          : (e.props = c),
        (e.attrs = c);
}
function Lf(e, n, r, o) {
    const {
            props: u,
            attrs: c,
            vnode: { patchFlag: g },
        } = e,
        y = Te(u),
        [b] = e.propsOptions;
    let A = !1;
    if ((o || g > 0) && !(g & 16)) {
        if (g & 8) {
            const N = e.vnode.dynamicProps;
            for (let s = 0; s < N.length; s++) {
                let d = N[s];
                if (Yr(e.emitsOptions, d)) continue;
                const m = n[d];
                if (b)
                    if (we(c, d)) m !== c[d] && ((c[d] = m), (A = !0));
                    else {
                        const T = $t(d);
                        u[T] = Yi(b, y, T, m, e, !1);
                    }
                else m !== c[d] && ((c[d] = m), (A = !0));
            }
        }
    } else {
        Pa(e, n, u, c) && (A = !0);
        let N;
        for (const s in y)
            (!n || (!we(n, s) && ((N = Wn(s)) === s || !we(n, N)))) &&
                (b
                    ? r &&
                      (r[s] !== void 0 || r[N] !== void 0) &&
                      (u[s] = Yi(b, y, s, void 0, e, !0))
                    : delete u[s]);
        if (c !== y)
            for (const s in c) (!n || !we(n, s)) && (delete c[s], (A = !0));
    }
    A && zt(e, 'set', '$attrs');
}
function Pa(e, n, r, o) {
    const [u, c] = e.propsOptions;
    let g = !1,
        y;
    if (n)
        for (let b in n) {
            if (Hr(b)) continue;
            const A = n[b];
            let N;
            u && we(u, (N = $t(b)))
                ? !c || !c.includes(N)
                    ? (r[N] = A)
                    : ((y || (y = {}))[N] = A)
                : Yr(e.emitsOptions, b) ||
                  ((!(b in o) || A !== o[b]) && ((o[b] = A), (g = !0)));
        }
    if (c) {
        const b = Te(r),
            A = y || De;
        for (let N = 0; N < c.length; N++) {
            const s = c[N];
            r[s] = Yi(u, b, s, A[s], e, !we(A, s));
        }
    }
    return g;
}
function Yi(e, n, r, o, u, c) {
    const g = e[r];
    if (g != null) {
        const y = we(g, 'default');
        if (y && o === void 0) {
            const b = g.default;
            if (g.type !== Function && ve(b)) {
                const { propsDefaults: A } = u;
                r in A
                    ? (o = A[r])
                    : (qn(u), (o = A[r] = b.call(null, n)), Cn());
            } else o = b;
        }
        g[0] &&
            (c && !y
                ? (o = !1)
                : g[1] && (o === '' || o === Wn(r)) && (o = !0));
    }
    return o;
}
function Ia(e, n, r = !1) {
    const o = n.propsCache,
        u = o.get(e);
    if (u) return u;
    const c = e.props,
        g = {},
        y = [];
    let b = !1;
    if (!ve(e)) {
        const N = (s) => {
            b = !0;
            const [d, m] = Ia(s, n, !0);
            tt(g, d), m && y.push(...m);
        };
        !r && n.mixins.length && n.mixins.forEach(N),
            e.extends && N(e.extends),
            e.mixins && e.mixins.forEach(N);
    }
    if (!c && !b) return Re(e) && o.set(e, jn), jn;
    if (_e(c))
        for (let N = 0; N < c.length; N++) {
            const s = $t(c[N]);
            Os(s) && (g[s] = De);
        }
    else if (c)
        for (const N in c) {
            const s = $t(N);
            if (Os(s)) {
                const d = c[N],
                    m = (g[s] =
                        _e(d) || ve(d) ? { type: d } : Object.assign({}, d));
                if (m) {
                    const T = Is(Boolean, m.type),
                        E = Is(String, m.type);
                    (m[0] = T > -1),
                        (m[1] = E < 0 || T < E),
                        (T > -1 || we(m, 'default')) && y.push(s);
                }
            }
        }
    const A = [g, y];
    return Re(e) && o.set(e, A), A;
}
function Os(e) {
    return e[0] !== '$';
}
function Ms(e) {
    const n = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return n ? n[2] : e === null ? 'null' : '';
}
function Ps(e, n) {
    return Ms(e) === Ms(n);
}
function Is(e, n) {
    return _e(n) ? n.findIndex((r) => Ps(r, e)) : ve(n) && Ps(n, e) ? 0 : -1;
}
const ka = (e) => e[0] === '_' || e === '$stable',
    xo = (e) => (_e(e) ? e.map(Rt) : [Rt(e)]),
    Df = (e, n, r) => {
        if (n._n) return n;
        const o = nf((...u) => xo(n(...u)), r);
        return (o._c = !1), o;
    },
    Na = (e, n, r) => {
        const o = e._ctx;
        for (const u in e) {
            if (ka(u)) continue;
            const c = e[u];
            if (ve(c)) n[u] = Df(u, c, o);
            else if (c != null) {
                const g = xo(c);
                n[u] = () => g;
            }
        }
    },
    La = (e, n) => {
        const r = xo(n);
        e.slots.default = () => r;
    },
    Hf = (e, n) => {
        if (e.vnode.shapeFlag & 32) {
            const r = n._;
            r ? ((e.slots = Te(n)), Br(n, '_', r)) : Na(n, (e.slots = {}));
        } else (e.slots = {}), n && La(e, n);
        Br(e.slots, ii, 1);
    },
    jf = (e, n, r) => {
        const { vnode: o, slots: u } = e;
        let c = !0,
            g = De;
        if (o.shapeFlag & 32) {
            const y = n._;
            y
                ? r && y === 1
                    ? (c = !1)
                    : (tt(u, n), !r && y === 1 && delete u._)
                : ((c = !n.$stable), Na(n, u)),
                (g = n);
        } else n && (La(e, n), (g = { default: 1 }));
        if (c) for (const y in u) !ka(y) && !(y in g) && delete u[y];
    };
function Da() {
    return {
        app: null,
        config: {
            isNativeTag: ol,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let Ff = 0;
function Rf(e, n) {
    return function (o, u = null) {
        ve(o) || (o = Object.assign({}, o)), u != null && !Re(u) && (u = null);
        const c = Da(),
            g = new Set();
        let y = !1;
        const b = (c.app = {
            _uid: Ff++,
            _component: o,
            _props: u,
            _container: null,
            _context: c,
            _instance: null,
            version: lc,
            get config() {
                return c.config;
            },
            set config(A) {},
            use(A, ...N) {
                return (
                    g.has(A) ||
                        (A && ve(A.install)
                            ? (g.add(A), A.install(b, ...N))
                            : ve(A) && (g.add(A), A(b, ...N))),
                    b
                );
            },
            mixin(A) {
                return c.mixins.includes(A) || c.mixins.push(A), b;
            },
            component(A, N) {
                return N ? ((c.components[A] = N), b) : c.components[A];
            },
            directive(A, N) {
                return N ? ((c.directives[A] = N), b) : c.directives[A];
            },
            mount(A, N, s) {
                if (!y) {
                    const d = ct(o, u);
                    return (
                        (d.appContext = c),
                        N && n ? n(d, A) : e(d, A, s),
                        (y = !0),
                        (b._container = A),
                        (A.__vue_app__ = b),
                        Ao(d.component) || d.component.proxy
                    );
                }
            },
            unmount() {
                y && (e(null, b._container), delete b._container.__vue_app__);
            },
            provide(A, N) {
                return (c.provides[A] = N), b;
            },
        });
        return b;
    };
}
function Ji(e, n, r, o, u = !1) {
    if (_e(e)) {
        e.forEach((d, m) => Ji(d, n && (_e(n) ? n[m] : n), r, o, u));
        return;
    }
    if (jr(o) && !u) return;
    const c = o.shapeFlag & 4 ? Ao(o.component) || o.component.proxy : o.el,
        g = u ? null : c,
        { i: y, r: b } = e,
        A = n && n.r,
        N = y.refs === De ? (y.refs = {}) : y.refs,
        s = y.setupState;
    if (
        (A != null &&
            A !== b &&
            (Ue(A)
                ? ((N[A] = null), we(s, A) && (s[A] = null))
                : it(A) && (A.value = null)),
        ve(b))
    )
        on(b, y, 12, [g, N]);
    else {
        const d = Ue(b),
            m = it(b);
        if (d || m) {
            const T = () => {
                if (e.f) {
                    const E = d ? (we(s, b) ? s[b] : N[b]) : b.value;
                    u
                        ? _e(E) && ao(E, c)
                        : _e(E)
                          ? E.includes(c) || E.push(c)
                          : d
                            ? ((N[b] = [c]), we(s, b) && (s[b] = N[b]))
                            : ((b.value = [c]), e.k && (N[e.k] = b.value));
                } else
                    d
                        ? ((N[b] = g), we(s, b) && (s[b] = g))
                        : m && ((b.value = g), e.k && (N[e.k] = g));
            };
            g ? ((T.id = -1), ft(T, r)) : T();
        }
    }
}
const ft = lf;
function Bf(e) {
    return $f(e);
}
function $f(e, n) {
    const r = dl();
    r.__VUE__ = !0;
    const {
            insert: o,
            remove: u,
            patchProp: c,
            createElement: g,
            createText: y,
            createComment: b,
            setText: A,
            setElementText: N,
            parentNode: s,
            nextSibling: d,
            setScopeId: m = Nt,
            insertStaticContent: T,
        } = e,
        E = (
            C,
            P,
            F,
            q = null,
            L = null,
            U = null,
            J = !1,
            K = null,
            z = !!P.dynamicChildren
        ) => {
            if (C === P) return;
            C && !xn(C, P) && ((q = Yt(C)), mt(C, L, U, !0), (C = null)),
                P.patchFlag === -2 && ((z = !1), (P.dynamicChildren = null));
            const { type: G, ref: ie, shapeFlag: ee } = P;
            switch (G) {
                case ri:
                    j(C, P, F, q);
                    break;
                case Lt:
                    O(C, P, F, q);
                    break;
                case Hi:
                    C == null && Z(P, F, q, J);
                    break;
                case vt:
                    ke(C, P, F, q, L, U, J, K, z);
                    break;
                default:
                    ee & 1
                        ? Ae(C, P, F, q, L, U, J, K, z)
                        : ee & 6
                          ? nt(C, P, F, q, L, U, J, K, z)
                          : (ee & 64 || ee & 128) &&
                            G.process(C, P, F, q, L, U, J, K, z, Ye);
            }
            ie != null && L && Ji(ie, C && C.ref, U, P || C, !P);
        },
        j = (C, P, F, q) => {
            if (C == null) o((P.el = y(P.children)), F, q);
            else {
                const L = (P.el = C.el);
                P.children !== C.children && A(L, P.children);
            }
        },
        O = (C, P, F, q) => {
            C == null ? o((P.el = b(P.children || '')), F, q) : (P.el = C.el);
        },
        Z = (C, P, F, q) => {
            [C.el, C.anchor] = T(C.children, P, F, q, C.el, C.anchor);
        },
        Q = ({ el: C, anchor: P }, F, q) => {
            let L;
            for (; C && C !== P; ) (L = d(C)), o(C, F, q), (C = L);
            o(P, F, q);
        },
        ce = ({ el: C, anchor: P }) => {
            let F;
            for (; C && C !== P; ) (F = d(C)), u(C), (C = F);
            u(P);
        },
        Ae = (C, P, F, q, L, U, J, K, z) => {
            (J = J || P.type === 'svg'),
                C == null ? f(P, F, q, L, U, J, K, z) : le(C, P, L, U, J, K, z);
        },
        f = (C, P, F, q, L, U, J, K) => {
            let z, G;
            const {
                type: ie,
                props: ee,
                shapeFlag: te,
                transition: se,
                dirs: ge,
            } = C;
            if (
                ((z = C.el = g(C.type, U, ee && ee.is, ee)),
                te & 8
                    ? N(z, C.children)
                    : te & 16 &&
                      de(
                          C.children,
                          z,
                          null,
                          q,
                          L,
                          U && ie !== 'foreignObject',
                          J,
                          K
                      ),
                ge && mn(C, null, q, 'created'),
                Ke(z, C, C.scopeId, J, q),
                ee)
            ) {
                for (const ye in ee)
                    ye !== 'value' &&
                        !Hr(ye) &&
                        c(z, ye, null, ee[ye], U, C.children, q, L, At);
                'value' in ee && c(z, 'value', null, ee.value),
                    (G = ee.onVnodeBeforeMount) && jt(G, q, C);
            }
            ge && mn(C, null, q, 'beforeMount');
            const Ee = (!L || (L && !L.pendingBranch)) && se && !se.persisted;
            Ee && se.beforeEnter(z),
                o(z, P, F),
                ((G = ee && ee.onVnodeMounted) || Ee || ge) &&
                    ft(() => {
                        G && jt(G, q, C),
                            Ee && se.enter(z),
                            ge && mn(C, null, q, 'mounted');
                    }, L);
        },
        Ke = (C, P, F, q, L) => {
            if ((F && m(C, F), q))
                for (let U = 0; U < q.length; U++) m(C, q[U]);
            if (L) {
                let U = L.subTree;
                if (P === U) {
                    const J = L.vnode;
                    Ke(C, J, J.scopeId, J.slotScopeIds, L.parent);
                }
            }
        },
        de = (C, P, F, q, L, U, J, K, z = 0) => {
            for (let G = z; G < C.length; G++) {
                const ie = (C[G] = K ? nn(C[G]) : Rt(C[G]));
                E(null, ie, P, F, q, L, U, J, K);
            }
        },
        le = (C, P, F, q, L, U, J) => {
            const K = (P.el = C.el);
            let { patchFlag: z, dynamicChildren: G, dirs: ie } = P;
            z |= C.patchFlag & 16;
            const ee = C.props || De,
                te = P.props || De;
            let se;
            F && yn(F, !1),
                (se = te.onVnodeBeforeUpdate) && jt(se, F, P, C),
                ie && mn(P, C, F, 'beforeUpdate'),
                F && yn(F, !0);
            const ge = L && P.type !== 'foreignObject';
            if (
                (G
                    ? Se(C.dynamicChildren, G, K, F, q, ge, U)
                    : J || Ce(C, P, K, null, F, q, ge, U, !1),
                z > 0)
            ) {
                if (z & 16) qe(K, P, ee, te, F, q, L);
                else if (
                    (z & 2 &&
                        ee.class !== te.class &&
                        c(K, 'class', null, te.class, L),
                    z & 4 && c(K, 'style', ee.style, te.style, L),
                    z & 8)
                ) {
                    const Ee = P.dynamicProps;
                    for (let ye = 0; ye < Ee.length; ye++) {
                        const He = Ee[ye],
                            st = ee[He],
                            Jt = te[He];
                        (Jt !== st || He === 'value') &&
                            c(K, He, st, Jt, L, C.children, F, q, At);
                    }
                }
                z & 1 && C.children !== P.children && N(K, P.children);
            } else !J && G == null && qe(K, P, ee, te, F, q, L);
            ((se = te.onVnodeUpdated) || ie) &&
                ft(() => {
                    se && jt(se, F, P, C), ie && mn(P, C, F, 'updated');
                }, q);
        },
        Se = (C, P, F, q, L, U, J) => {
            for (let K = 0; K < P.length; K++) {
                const z = C[K],
                    G = P[K],
                    ie =
                        z.el && (z.type === vt || !xn(z, G) || z.shapeFlag & 70)
                            ? s(z.el)
                            : F;
                E(z, G, ie, null, q, L, U, J, !0);
            }
        },
        qe = (C, P, F, q, L, U, J) => {
            if (F !== q) {
                if (F !== De)
                    for (const K in F)
                        !Hr(K) &&
                            !(K in q) &&
                            c(C, K, F[K], null, J, P.children, L, U, At);
                for (const K in q) {
                    if (Hr(K)) continue;
                    const z = q[K],
                        G = F[K];
                    z !== G &&
                        K !== 'value' &&
                        c(C, K, G, z, J, P.children, L, U, At);
                }
                'value' in q && c(C, 'value', F.value, q.value);
            }
        },
        ke = (C, P, F, q, L, U, J, K, z) => {
            const G = (P.el = C ? C.el : y('')),
                ie = (P.anchor = C ? C.anchor : y(''));
            let { patchFlag: ee, dynamicChildren: te, slotScopeIds: se } = P;
            se && (K = K ? K.concat(se) : se),
                C == null
                    ? (o(G, F, q),
                      o(ie, F, q),
                      de(P.children, F, ie, L, U, J, K, z))
                    : ee > 0 && ee & 64 && te && C.dynamicChildren
                      ? (Se(C.dynamicChildren, te, F, L, U, J, K),
                        (P.key != null || (L && P === L.subTree)) &&
                            Ha(C, P, !0))
                      : Ce(C, P, F, ie, L, U, J, K, z);
        },
        nt = (C, P, F, q, L, U, J, K, z) => {
            (P.slotScopeIds = K),
                C == null
                    ? P.shapeFlag & 512
                        ? L.ctx.activate(P, F, q, J, z)
                        : Qe(P, F, q, L, U, J, z)
                    : un(C, P, z);
        },
        Qe = (C, P, F, q, L, U, J) => {
            const K = (C.component = Zf(C, q, L));
            if ((ti(C) && (K.ctx.renderer = Ye), tc(K), K.asyncDep)) {
                if ((L && L.registerDep(K, Xe), !C.el)) {
                    const z = (K.subTree = ct(Lt));
                    O(null, z, P, F);
                }
                return;
            }
            Xe(K, C, P, F, L, U, J);
        },
        un = (C, P, F) => {
            const q = (P.component = C.component);
            if (sf(C, P, F))
                if (q.asyncDep && !q.asyncResolved) {
                    Ne(q, P, F);
                    return;
                } else (q.next = P), Jl(q.update), q.update();
            else (P.el = C.el), (q.vnode = P);
        },
        Xe = (C, P, F, q, L, U, J) => {
            const K = () => {
                    if (C.isMounted) {
                        let {
                                next: ie,
                                bu: ee,
                                u: te,
                                parent: se,
                                vnode: ge,
                            } = C,
                            Ee = ie,
                            ye;
                        yn(C, !1),
                            ie ? ((ie.el = ge.el), Ne(C, ie, J)) : (ie = ge),
                            ee && ki(ee),
                            (ye = ie.props && ie.props.onVnodeBeforeUpdate) &&
                                jt(ye, se, ie, ge),
                            yn(C, !0);
                        const He = Ni(C),
                            st = C.subTree;
                        (C.subTree = He),
                            E(st, He, s(st.el), Yt(st), C, L, U),
                            (ie.el = He.el),
                            Ee === null && af(C, He.el),
                            te && ft(te, L),
                            (ye = ie.props && ie.props.onVnodeUpdated) &&
                                ft(() => jt(ye, se, ie, ge), L);
                    } else {
                        let ie;
                        const { el: ee, props: te } = P,
                            { bm: se, m: ge, parent: Ee } = C,
                            ye = jr(P);
                        if (
                            (yn(C, !1),
                            se && ki(se),
                            !ye &&
                                (ie = te && te.onVnodeBeforeMount) &&
                                jt(ie, Ee, P),
                            yn(C, !0),
                            ee && zn)
                        ) {
                            const He = () => {
                                (C.subTree = Ni(C)),
                                    zn(ee, C.subTree, C, L, null);
                            };
                            ye
                                ? P.type
                                      .__asyncLoader()
                                      .then(() => !C.isUnmounted && He())
                                : He();
                        } else {
                            const He = (C.subTree = Ni(C));
                            E(null, He, F, q, C, L, U), (P.el = He.el);
                        }
                        if (
                            (ge && ft(ge, L),
                            !ye && (ie = te && te.onVnodeMounted))
                        ) {
                            const He = P;
                            ft(() => jt(ie, Ee, He), L);
                        }
                        (P.shapeFlag & 256 ||
                            (Ee && jr(Ee.vnode) && Ee.vnode.shapeFlag & 256)) &&
                            C.a &&
                            ft(C.a, L),
                            (C.isMounted = !0),
                            (P = F = q = null);
                    }
                },
                z = (C.effect = new co(K, () => bo(G), C.scope)),
                G = (C.update = () => z.run());
            (G.id = C.uid), yn(C, !0), G();
        },
        Ne = (C, P, F) => {
            P.component = C;
            const q = C.vnode.props;
            (C.vnode = P),
                (C.next = null),
                Lf(C, P.props, q, F),
                jf(C, P.children, F),
                Vn(),
                ws(),
                Un();
        },
        Ce = (C, P, F, q, L, U, J, K, z = !1) => {
            const G = C && C.children,
                ie = C ? C.shapeFlag : 0,
                ee = P.children,
                { patchFlag: te, shapeFlag: se } = P;
            if (te > 0) {
                if (te & 128) {
                    ln(G, ee, F, q, L, U, J, K, z);
                    return;
                } else if (te & 256) {
                    qt(G, ee, F, q, L, U, J, K, z);
                    return;
                }
            }
            se & 8
                ? (ie & 16 && At(G, L, U), ee !== G && N(F, ee))
                : ie & 16
                  ? se & 16
                      ? ln(G, ee, F, q, L, U, J, K, z)
                      : At(G, L, U, !0)
                  : (ie & 8 && N(F, ''),
                    se & 16 && de(ee, F, q, L, U, J, K, z));
        },
        qt = (C, P, F, q, L, U, J, K, z) => {
            (C = C || jn), (P = P || jn);
            const G = C.length,
                ie = P.length,
                ee = Math.min(G, ie);
            let te;
            for (te = 0; te < ee; te++) {
                const se = (P[te] = z ? nn(P[te]) : Rt(P[te]));
                E(C[te], se, F, null, L, U, J, K, z);
            }
            G > ie ? At(C, L, U, !0, !1, ee) : de(P, F, q, L, U, J, K, z, ee);
        },
        ln = (C, P, F, q, L, U, J, K, z) => {
            let G = 0;
            const ie = P.length;
            let ee = C.length - 1,
                te = ie - 1;
            for (; G <= ee && G <= te; ) {
                const se = C[G],
                    ge = (P[G] = z ? nn(P[G]) : Rt(P[G]));
                if (xn(se, ge)) E(se, ge, F, null, L, U, J, K, z);
                else break;
                G++;
            }
            for (; G <= ee && G <= te; ) {
                const se = C[ee],
                    ge = (P[te] = z ? nn(P[te]) : Rt(P[te]));
                if (xn(se, ge)) E(se, ge, F, null, L, U, J, K, z);
                else break;
                ee--, te--;
            }
            if (G > ee) {
                if (G <= te) {
                    const se = te + 1,
                        ge = se < ie ? P[se].el : q;
                    for (; G <= te; )
                        E(
                            null,
                            (P[G] = z ? nn(P[G]) : Rt(P[G])),
                            F,
                            ge,
                            L,
                            U,
                            J,
                            K,
                            z
                        ),
                            G++;
                }
            } else if (G > te) for (; G <= ee; ) mt(C[G], L, U, !0), G++;
            else {
                const se = G,
                    ge = G,
                    Ee = new Map();
                for (G = ge; G <= te; G++) {
                    const Je = (P[G] = z ? nn(P[G]) : Rt(P[G]));
                    Je.key != null && Ee.set(Je.key, G);
                }
                let ye,
                    He = 0;
                const st = te - ge + 1;
                let Jt = !1,
                    Vt = 0;
                const St = new Array(st);
                for (G = 0; G < st; G++) St[G] = 0;
                for (G = se; G <= ee; G++) {
                    const Je = C[G];
                    if (He >= st) {
                        mt(Je, L, U, !0);
                        continue;
                    }
                    let je;
                    if (Je.key != null) je = Ee.get(Je.key);
                    else
                        for (ye = ge; ye <= te; ye++)
                            if (St[ye - ge] === 0 && xn(Je, P[ye])) {
                                je = ye;
                                break;
                            }
                    je === void 0
                        ? mt(Je, L, U, !0)
                        : ((St[je - ge] = G + 1),
                          je >= Vt ? (Vt = je) : (Jt = !0),
                          E(Je, P[je], F, null, L, U, J, K, z),
                          He++);
                }
                const Qn = Jt ? qf(St) : jn;
                for (ye = Qn.length - 1, G = st - 1; G >= 0; G--) {
                    const Je = ge + G,
                        je = P[Je],
                        ze = Je + 1 < ie ? P[Je + 1].el : q;
                    St[G] === 0
                        ? E(null, je, F, ze, L, U, J, K, z)
                        : Jt &&
                          (ye < 0 || G !== Qn[ye] ? Ge(je, F, ze, 2) : ye--);
                }
            }
        },
        Ge = (C, P, F, q, L = null) => {
            const {
                el: U,
                type: J,
                transition: K,
                children: z,
                shapeFlag: G,
            } = C;
            if (G & 6) {
                Ge(C.component.subTree, P, F, q);
                return;
            }
            if (G & 128) {
                C.suspense.move(P, F, q);
                return;
            }
            if (G & 64) {
                J.move(C, P, F, Ye);
                return;
            }
            if (J === vt) {
                o(U, P, F);
                for (let ee = 0; ee < z.length; ee++) Ge(z[ee], P, F, q);
                o(C.anchor, P, F);
                return;
            }
            if (J === Hi) {
                Q(C, P, F);
                return;
            }
            if (q !== 2 && G & 1 && K)
                if (q === 0)
                    K.beforeEnter(U), o(U, P, F), ft(() => K.enter(U), L);
                else {
                    const { leave: ee, delayLeave: te, afterLeave: se } = K,
                        ge = () => o(U, P, F),
                        Ee = () => {
                            ee(U, () => {
                                ge(), se && se();
                            });
                        };
                    te ? te(U, ge, Ee) : Ee();
                }
            else o(U, P, F);
        },
        mt = (C, P, F, q = !1, L = !1) => {
            const {
                type: U,
                props: J,
                ref: K,
                children: z,
                dynamicChildren: G,
                shapeFlag: ie,
                patchFlag: ee,
                dirs: te,
            } = C;
            if ((K != null && Ji(K, null, F, C, !0), ie & 256)) {
                P.ctx.deactivate(C);
                return;
            }
            const se = ie & 1 && te,
                ge = !jr(C);
            let Ee;
            if (
                (ge && (Ee = J && J.onVnodeBeforeUnmount) && jt(Ee, P, C),
                ie & 6)
            )
                vr(C.component, F, q);
            else {
                if (ie & 128) {
                    C.suspense.unmount(F, q);
                    return;
                }
                se && mn(C, null, P, 'beforeUnmount'),
                    ie & 64
                        ? C.type.remove(C, P, F, L, Ye, q)
                        : G && (U !== vt || (ee > 0 && ee & 64))
                          ? At(G, P, F, !1, !0)
                          : ((U === vt && ee & 384) || (!L && ie & 16)) &&
                            At(z, P, F),
                    q && Wt(C);
            }
            ((ge && (Ee = J && J.onVnodeUnmounted)) || se) &&
                ft(() => {
                    Ee && jt(Ee, P, C), se && mn(C, null, P, 'unmounted');
                }, F);
        },
        Wt = (C) => {
            const { type: P, el: F, anchor: q, transition: L } = C;
            if (P === vt) {
                On(F, q);
                return;
            }
            if (P === Hi) {
                ce(C);
                return;
            }
            const U = () => {
                u(F), L && !L.persisted && L.afterLeave && L.afterLeave();
            };
            if (C.shapeFlag & 1 && L && !L.persisted) {
                const { leave: J, delayLeave: K } = L,
                    z = () => J(F, U);
                K ? K(C.el, U, z) : z();
            } else U();
        },
        On = (C, P) => {
            let F;
            for (; C !== P; ) (F = d(C)), u(C), (C = F);
            u(P);
        },
        vr = (C, P, F) => {
            const { bum: q, scope: L, update: U, subTree: J, um: K } = C;
            q && ki(q),
                L.stop(),
                U && ((U.active = !1), mt(J, C, P, F)),
                K && ft(K, P),
                ft(() => {
                    C.isUnmounted = !0;
                }, P),
                P &&
                    P.pendingBranch &&
                    !P.isUnmounted &&
                    C.asyncDep &&
                    !C.asyncResolved &&
                    C.suspenseId === P.pendingId &&
                    (P.deps--, P.deps === 0 && P.resolve());
        },
        At = (C, P, F, q = !1, L = !1, U = 0) => {
            for (let J = U; J < C.length; J++) mt(C[J], P, F, q, L);
        },
        Yt = (C) =>
            C.shapeFlag & 6
                ? Yt(C.component.subTree)
                : C.shapeFlag & 128
                  ? C.suspense.next()
                  : d(C.anchor || C.el),
        fn = (C, P, F) => {
            C == null
                ? P._vnode && mt(P._vnode, null, null, !0)
                : E(P._vnode || null, C, P, null, null, null, F),
                ws(),
                va(),
                (P._vnode = C);
        },
        Ye = {
            p: E,
            um: mt,
            m: Ge,
            r: Wt,
            mt: Qe,
            mc: de,
            pc: Ce,
            pbc: Se,
            n: Yt,
            o: e,
        };
    let Xn, zn;
    return (
        n && ([Xn, zn] = n(Ye)),
        { render: fn, hydrate: Xn, createApp: Rf(fn, Xn) }
    );
}
function yn({ effect: e, update: n }, r) {
    e.allowRecurse = n.allowRecurse = r;
}
function Ha(e, n, r = !1) {
    const o = e.children,
        u = n.children;
    if (_e(o) && _e(u))
        for (let c = 0; c < o.length; c++) {
            const g = o[c];
            let y = u[c];
            y.shapeFlag & 1 &&
                !y.dynamicChildren &&
                ((y.patchFlag <= 0 || y.patchFlag === 32) &&
                    ((y = u[c] = nn(u[c])), (y.el = g.el)),
                r || Ha(g, y)),
                y.type === ri && (y.el = g.el);
        }
}
function qf(e) {
    const n = e.slice(),
        r = [0];
    let o, u, c, g, y;
    const b = e.length;
    for (o = 0; o < b; o++) {
        const A = e[o];
        if (A !== 0) {
            if (((u = r[r.length - 1]), e[u] < A)) {
                (n[o] = u), r.push(o);
                continue;
            }
            for (c = 0, g = r.length - 1; c < g; )
                (y = (c + g) >> 1), e[r[y]] < A ? (c = y + 1) : (g = y);
            A < e[r[c]] && (c > 0 && (n[o] = r[c - 1]), (r[c] = o));
        }
    }
    for (c = r.length, g = r[c - 1]; c-- > 0; ) (r[c] = g), (g = n[g]);
    return r;
}
const Wf = (e) => e.__isTeleport,
    vt = Symbol(void 0),
    ri = Symbol(void 0),
    Lt = Symbol(void 0),
    Hi = Symbol(void 0),
    fr = [];
let It = null;
function Mt(e = !1) {
    fr.push((It = e ? null : []));
}
function Vf() {
    fr.pop(), (It = fr[fr.length - 1] || null);
}
let hr = 1;
function ks(e) {
    hr += e;
}
function ja(e) {
    return (
        (e.dynamicChildren = hr > 0 ? It || jn : null),
        Vf(),
        hr > 0 && It && It.push(e),
        e
    );
}
function Ft(e, n, r, o, u, c) {
    return ja(Ie(e, n, r, o, u, c, !0));
}
function Uf(e, n, r, o, u) {
    return ja(ct(e, n, r, o, u, !0));
}
function Gf(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, n) {
    return e.type === n.type && e.key === n.key;
}
const ii = '__vInternal',
    Fa = ({ key: e }) => e ?? null,
    Fr = ({ ref: e, ref_key: n, ref_for: r }) =>
        e != null
            ? Ue(e) || it(e) || ve(e)
                ? { i: xt, r: e, k: n, f: !!r }
                : e
            : null;
function Ie(
    e,
    n = null,
    r = null,
    o = 0,
    u = null,
    c = e === vt ? 0 : 1,
    g = !1,
    y = !1
) {
    const b = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: n,
        key: n && Fa(n),
        ref: n && Fr(n),
        scopeId: Jr,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: c,
        patchFlag: o,
        dynamicProps: u,
        dynamicChildren: null,
        appContext: null,
        ctx: xt,
    };
    return (
        y
            ? (To(b, r), c & 128 && e.normalize(b))
            : r && (b.shapeFlag |= Ue(r) ? 8 : 16),
        hr > 0 &&
            !g &&
            It &&
            (b.patchFlag > 0 || c & 6) &&
            b.patchFlag !== 32 &&
            It.push(b),
        b
    );
}
const ct = Kf;
function Kf(e, n = null, r = null, o = 0, u = null, c = !1) {
    if (((!e || e === Sf) && (e = Lt), Gf(e))) {
        const y = an(e, n, !0);
        return (
            r && To(y, r),
            hr > 0 &&
                !c &&
                It &&
                (y.shapeFlag & 6 ? (It[It.indexOf(e)] = y) : It.push(y)),
            (y.patchFlag |= -2),
            y
        );
    }
    if ((sc(e) && (e = e.__vccOpts), n)) {
        n = Xf(n);
        let { class: y, style: b } = n;
        y && !Ue(y) && (n.class = Xt(y)),
            Re(b) && (ca(b) && !_e(b) && (b = tt({}, b)), (n.style = oo(b)));
    }
    const g = Ue(e) ? 1 : uf(e) ? 128 : Wf(e) ? 64 : Re(e) ? 4 : ve(e) ? 2 : 0;
    return Ie(e, n, r, o, u, g, c, !0);
}
function Xf(e) {
    return e ? (ca(e) || ii in e ? tt({}, e) : e) : null;
}
function an(e, n, r = !1) {
    const { props: o, ref: u, patchFlag: c, children: g } = e,
        y = n ? Qf(o || {}, n) : o;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: y,
        key: y && Fa(y),
        ref:
            n && n.ref
                ? r && u
                    ? _e(u)
                        ? u.concat(Fr(n))
                        : [u, Fr(n)]
                    : Fr(n)
                : u,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: g,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: n && e.type !== vt ? (c === -1 ? 16 : c | 16) : c,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && an(e.ssContent),
        ssFallback: e.ssFallback && an(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
    };
}
function $n(e = ' ', n = 0) {
    return ct(ri, null, e, n);
}
function zf(e = '', n = !1) {
    return n ? (Mt(), Uf(Lt, null, e)) : ct(Lt, null, e);
}
function Rt(e) {
    return e == null || typeof e == 'boolean'
        ? ct(Lt)
        : _e(e)
          ? ct(vt, null, e.slice())
          : typeof e == 'object'
            ? nn(e)
            : ct(ri, null, String(e));
}
function nn(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : an(e);
}
function To(e, n) {
    let r = 0;
    const { shapeFlag: o } = e;
    if (n == null) n = null;
    else if (_e(n)) r = 16;
    else if (typeof n == 'object')
        if (o & 65) {
            const u = n.default;
            u && (u._c && (u._d = !1), To(e, u()), u._c && (u._d = !0));
            return;
        } else {
            r = 32;
            const u = n._;
            !u && !(ii in n)
                ? (n._ctx = xt)
                : u === 3 &&
                  xt &&
                  (xt.slots._ === 1
                      ? (n._ = 1)
                      : ((n._ = 2), (e.patchFlag |= 1024)));
        }
    else
        ve(n)
            ? ((n = { default: n, _ctx: xt }), (r = 32))
            : ((n = String(n)), o & 64 ? ((r = 16), (n = [$n(n)])) : (r = 8));
    (e.children = n), (e.shapeFlag |= r);
}
function Qf(...e) {
    const n = {};
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (const u in o)
            if (u === 'class')
                n.class !== o.class && (n.class = Xt([n.class, o.class]));
            else if (u === 'style') n.style = oo([n.style, o.style]);
            else if (Vr(u)) {
                const c = n[u],
                    g = o[u];
                g &&
                    c !== g &&
                    !(_e(c) && c.includes(g)) &&
                    (n[u] = c ? [].concat(c, g) : g);
            } else u !== '' && (n[u] = o[u]);
    }
    return n;
}
function jt(e, n, r, o = null) {
    Tt(e, n, 7, [r, o]);
}
const Yf = Da();
let Jf = 0;
function Zf(e, n, r) {
    const o = e.type,
        u = (n ? n.appContext : e.appContext) || Yf,
        c = {
            uid: Jf++,
            vnode: e,
            type: o,
            parent: n,
            appContext: u,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Zs(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: n ? n.provides : Object.create(u.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ia(o, u),
            emitsOptions: ya(o, u),
            emit: null,
            emitted: null,
            propsDefaults: De,
            inheritAttrs: o.inheritAttrs,
            ctx: De,
            data: De,
            props: De,
            attrs: De,
            slots: De,
            refs: De,
            setupState: De,
            setupContext: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (c.ctx = { _: c }),
        (c.root = n ? n.root : c),
        (c.emit = tf.bind(null, c)),
        e.ce && e.ce(c),
        c
    );
}
let Be = null;
const ec = () => Be || xt,
    qn = (e) => {
        (Be = e), e.scope.on();
    },
    Cn = () => {
        Be && Be.scope.off(), (Be = null);
    };
function Ra(e) {
    return e.vnode.shapeFlag & 4;
}
let gr = !1;
function tc(e, n = !1) {
    gr = n;
    const { props: r, children: o } = e.vnode,
        u = Ra(e);
    Nf(e, r, u, n), Hf(e, o);
    const c = u ? nc(e, n) : void 0;
    return (gr = !1), c;
}
function nc(e, n) {
    const r = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = da(new Proxy(e.ctx, Ef)));
    const { setup: o } = r;
    if (o) {
        const u = (e.setupContext = o.length > 1 ? ic(e) : null);
        qn(e), Vn();
        const c = on(o, e, 0, [e.props, u]);
        if ((Un(), Cn(), Qs(c))) {
            if ((c.then(Cn, Cn), n))
                return c
                    .then((g) => {
                        Ns(e, g, n);
                    })
                    .catch((g) => {
                        Qr(g, e, 0);
                    });
            e.asyncDep = c;
        } else Ns(e, c, n);
    } else Ba(e, n);
}
function Ns(e, n, r) {
    ve(n)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = n)
            : (e.render = n)
        : Re(n) && (e.setupState = pa(n)),
        Ba(e, r);
}
let Ls;
function Ba(e, n, r) {
    const o = e.type;
    if (!e.render) {
        if (!n && Ls && !o.render) {
            const u = o.template || wo(e).template;
            if (u) {
                const { isCustomElement: c, compilerOptions: g } =
                        e.appContext.config,
                    { delimiters: y, compilerOptions: b } = o,
                    A = tt(tt({ isCustomElement: c, delimiters: y }, g), b);
                o.render = Ls(u, A);
            }
        }
        e.render = o.render || Nt;
    }
    qn(e), Vn(), Of(e), Un(), Cn();
}
function rc(e) {
    return new Proxy(e.attrs, {
        get(n, r) {
            return dt(e, 'get', '$attrs'), n[r];
        },
    });
}
function ic(e) {
    const n = (o) => {
        e.exposed = o || {};
    };
    let r;
    return {
        get attrs() {
            return r || (r = rc(e));
        },
        slots: e.slots,
        emit: e.emit,
        expose: n,
    };
}
function Ao(e) {
    if (e.exposed)
        return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy(pa(da(e.exposed)), {
                get(n, r) {
                    if (r in n) return n[r];
                    if (r in lr) return lr[r](e);
                },
                has(n, r) {
                    return r in n || r in lr;
                },
            }))
        );
}
function oc(e, n = !0) {
    return ve(e) ? e.displayName || e.name : e.name || (n && e.__name);
}
function sc(e) {
    return ve(e) && '__vccOpts' in e;
}
const $a = (e, n) => Xl(e, n, gr),
    ac = Symbol(''),
    uc = () => ar(ac),
    lc = '3.2.47',
    fc = 'http://www.w3.org/2000/svg',
    Tn = typeof document < 'u' ? document : null,
    Ds = Tn && Tn.createElement('template'),
    cc = {
        insert: (e, n, r) => {
            n.insertBefore(e, r || null);
        },
        remove: (e) => {
            const n = e.parentNode;
            n && n.removeChild(e);
        },
        createElement: (e, n, r, o) => {
            const u = n
                ? Tn.createElementNS(fc, e)
                : Tn.createElement(e, r ? { is: r } : void 0);
            return (
                e === 'select' &&
                    o &&
                    o.multiple != null &&
                    u.setAttribute('multiple', o.multiple),
                u
            );
        },
        createText: (e) => Tn.createTextNode(e),
        createComment: (e) => Tn.createComment(e),
        setText: (e, n) => {
            e.nodeValue = n;
        },
        setElementText: (e, n) => {
            e.textContent = n;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => Tn.querySelector(e),
        setScopeId(e, n) {
            e.setAttribute(n, '');
        },
        insertStaticContent(e, n, r, o, u, c) {
            const g = r ? r.previousSibling : n.lastChild;
            if (u && (u === c || u.nextSibling))
                for (
                    ;
                    n.insertBefore(u.cloneNode(!0), r),
                        !(u === c || !(u = u.nextSibling));

                );
            else {
                Ds.innerHTML = o ? `<svg>${e}</svg>` : e;
                const y = Ds.content;
                if (o) {
                    const b = y.firstChild;
                    for (; b.firstChild; ) y.appendChild(b.firstChild);
                    y.removeChild(b);
                }
                n.insertBefore(y, r);
            }
            return [
                g ? g.nextSibling : n.firstChild,
                r ? r.previousSibling : n.lastChild,
            ];
        },
    };
function dc(e, n, r) {
    const o = e._vtc;
    o && (n = (n ? [n, ...o] : [...o]).join(' ')),
        n == null
            ? e.removeAttribute('class')
            : r
              ? e.setAttribute('class', n)
              : (e.className = n);
}
function pc(e, n, r) {
    const o = e.style,
        u = Ue(r);
    if (r && !u) {
        if (n && !Ue(n)) for (const c in n) r[c] == null && Zi(o, c, '');
        for (const c in r) Zi(o, c, r[c]);
    } else {
        const c = o.display;
        u ? n !== r && (o.cssText = r) : n && e.removeAttribute('style'),
            '_vod' in e && (o.display = c);
    }
}
const Hs = /\s*!important$/;
function Zi(e, n, r) {
    if (_e(r)) r.forEach((o) => Zi(e, n, o));
    else if ((r == null && (r = ''), n.startsWith('--'))) e.setProperty(n, r);
    else {
        const o = hc(e, n);
        Hs.test(r)
            ? e.setProperty(Wn(o), r.replace(Hs, ''), 'important')
            : (e[o] = r);
    }
}
const js = ['Webkit', 'Moz', 'ms'],
    ji = {};
function hc(e, n) {
    const r = ji[n];
    if (r) return r;
    let o = $t(n);
    if (o !== 'filter' && o in e) return (ji[n] = o);
    o = Kr(o);
    for (let u = 0; u < js.length; u++) {
        const c = js[u] + o;
        if (c in e) return (ji[n] = c);
    }
    return n;
}
const Fs = 'http://www.w3.org/1999/xlink';
function gc(e, n, r, o, u) {
    if (o && n.startsWith('xlink:'))
        r == null
            ? e.removeAttributeNS(Fs, n.slice(6, n.length))
            : e.setAttributeNS(Fs, n, r);
    else {
        const c = il(n);
        r == null || (c && !Ks(r))
            ? e.removeAttribute(n)
            : e.setAttribute(n, c ? '' : r);
    }
}
function _c(e, n, r, o, u, c, g) {
    if (n === 'innerHTML' || n === 'textContent') {
        o && g(o, u, c), (e[n] = r ?? '');
        return;
    }
    if (n === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
        e._value = r;
        const b = r ?? '';
        (e.value !== b || e.tagName === 'OPTION') && (e.value = b),
            r == null && e.removeAttribute(n);
        return;
    }
    let y = !1;
    if (r === '' || r == null) {
        const b = typeof e[n];
        b === 'boolean'
            ? (r = Ks(r))
            : r == null && b === 'string'
              ? ((r = ''), (y = !0))
              : b === 'number' && ((r = 0), (y = !0));
    }
    try {
        e[n] = r;
    } catch {}
    y && e.removeAttribute(n);
}
function vc(e, n, r, o) {
    e.addEventListener(n, r, o);
}
function mc(e, n, r, o) {
    e.removeEventListener(n, r, o);
}
function yc(e, n, r, o, u = null) {
    const c = e._vei || (e._vei = {}),
        g = c[n];
    if (o && g) g.value = o;
    else {
        const [y, b] = bc(n);
        if (o) {
            const A = (c[n] = Tc(o, u));
            vc(e, y, A, b);
        } else g && (mc(e, y, g, b), (c[n] = void 0));
    }
}
const Rs = /(?:Once|Passive|Capture)$/;
function bc(e) {
    let n;
    if (Rs.test(e)) {
        n = {};
        let o;
        for (; (o = e.match(Rs)); )
            (e = e.slice(0, e.length - o[0].length)),
                (n[o[0].toLowerCase()] = !0);
    }
    return [e[2] === ':' ? e.slice(3) : Wn(e.slice(2)), n];
}
let Fi = 0;
const wc = Promise.resolve(),
    xc = () => Fi || (wc.then(() => (Fi = 0)), (Fi = Date.now()));
function Tc(e, n) {
    const r = (o) => {
        if (!o._vts) o._vts = Date.now();
        else if (o._vts <= r.attached) return;
        Tt(Ac(o, r.value), n, 5, [o]);
    };
    return (r.value = e), (r.attached = xc()), r;
}
function Ac(e, n) {
    if (_e(n)) {
        const r = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                r.call(e), (e._stopped = !0);
            }),
            n.map((o) => (u) => !u._stopped && o && o(u))
        );
    } else return n;
}
const Bs = /^on[a-z]/,
    Sc = (e, n, r, o, u = !1, c, g, y, b) => {
        n === 'class'
            ? dc(e, o, u)
            : n === 'style'
              ? pc(e, r, o)
              : Vr(n)
                ? so(n) || yc(e, n, r, o, g)
                : (
                        n[0] === '.'
                            ? ((n = n.slice(1)), !0)
                            : n[0] === '^'
                              ? ((n = n.slice(1)), !1)
                              : Cc(e, n, o, u)
                    )
                  ? _c(e, n, o, c, g, y, b)
                  : (n === 'true-value'
                        ? (e._trueValue = o)
                        : n === 'false-value' && (e._falseValue = o),
                    gc(e, n, o, u));
    };
function Cc(e, n, r, o) {
    return o
        ? !!(
              n === 'innerHTML' ||
              n === 'textContent' ||
              (n in e && Bs.test(n) && ve(r))
          )
        : n === 'spellcheck' ||
            n === 'draggable' ||
            n === 'translate' ||
            n === 'form' ||
            (n === 'list' && e.tagName === 'INPUT') ||
            (n === 'type' && e.tagName === 'TEXTAREA') ||
            (Bs.test(n) && Ue(r))
          ? !1
          : n in e;
}
const Ec = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
};
hf.props;
const Oc = tt({ patchProp: Sc }, cc);
let $s;
function Mc() {
    return $s || ($s = Bf(Oc));
}
const Pc = (...e) => {
    const n = Mc().createApp(...e),
        { mount: r } = n;
    return (
        (n.mount = (o) => {
            const u = Ic(o);
            if (!u) return;
            const c = n._component;
            !ve(c) && !c.render && !c.template && (c.template = u.innerHTML),
                (u.innerHTML = '');
            const g = r(u, !1, u instanceof SVGElement);
            return (
                u instanceof Element &&
                    (u.removeAttribute('v-cloak'),
                    u.setAttribute('data-v-app', '')),
                g
            );
        }),
        n
    );
};
function Ic(e) {
    return Ue(e) ? document.querySelector(e) : e;
}
function kc() {
    return qa().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function qa() {
    return typeof navigator < 'u' && typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : {};
}
const Nc = typeof Proxy == 'function',
    Lc = 'devtools-plugin:setup',
    Dc = 'plugin:settings:set';
let Nn, eo;
function Hc() {
    var e;
    return (
        Nn !== void 0 ||
            (typeof window < 'u' && window.performance
                ? ((Nn = !0), (eo = window.performance))
                : typeof global < 'u' &&
                    !((e = global.perf_hooks) === null || e === void 0) &&
                    e.performance
                  ? ((Nn = !0), (eo = global.perf_hooks.performance))
                  : (Nn = !1)),
        Nn
    );
}
function jc() {
    return Hc() ? eo.now() : Date.now();
}
class Fc {
    constructor(n, r) {
        (this.target = null),
            (this.targetQueue = []),
            (this.onQueue = []),
            (this.plugin = n),
            (this.hook = r);
        const o = {};
        if (n.settings)
            for (const g in n.settings) {
                const y = n.settings[g];
                o[g] = y.defaultValue;
            }
        const u = `__vue-devtools-plugin-settings__${n.id}`;
        let c = Object.assign({}, o);
        try {
            const g = localStorage.getItem(u),
                y = JSON.parse(g);
            Object.assign(c, y);
        } catch {}
        (this.fallbacks = {
            getSettings() {
                return c;
            },
            setSettings(g) {
                try {
                    localStorage.setItem(u, JSON.stringify(g));
                } catch {}
                c = g;
            },
            now() {
                return jc();
            },
        }),
            r &&
                r.on(Dc, (g, y) => {
                    g === this.plugin.id && this.fallbacks.setSettings(y);
                }),
            (this.proxiedOn = new Proxy(
                {},
                {
                    get: (g, y) =>
                        this.target
                            ? this.target.on[y]
                            : (...b) => {
                                  this.onQueue.push({ method: y, args: b });
                              },
                }
            )),
            (this.proxiedTarget = new Proxy(
                {},
                {
                    get: (g, y) =>
                        this.target
                            ? this.target[y]
                            : y === 'on'
                              ? this.proxiedOn
                              : Object.keys(this.fallbacks).includes(y)
                                ? (...b) => (
                                      this.targetQueue.push({
                                          method: y,
                                          args: b,
                                          resolve: () => {},
                                      }),
                                      this.fallbacks[y](...b)
                                  )
                                : (...b) =>
                                      new Promise((A) => {
                                          this.targetQueue.push({
                                              method: y,
                                              args: b,
                                              resolve: A,
                                          });
                                      }),
                }
            ));
    }
    async setRealTarget(n) {
        this.target = n;
        for (const r of this.onQueue) this.target.on[r.method](...r.args);
        for (const r of this.targetQueue)
            r.resolve(await this.target[r.method](...r.args));
    }
}
function Rc(e, n) {
    const r = e,
        o = qa(),
        u = kc(),
        c = Nc && r.enableEarlyProxy;
    if (u && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !c)) u.emit(Lc, e, n);
    else {
        const g = c ? new Fc(r, u) : null;
        (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: r,
            setupFn: n,
            proxy: g,
        }),
            g && n(g.proxiedTarget);
    }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var So = 'store';
function Bc(e) {
    return e === void 0 && (e = null), ar(e !== null ? e : So);
}
function $c(e, n) {
    return e.filter(n)[0];
}
function to(e, n) {
    if ((n === void 0 && (n = []), e === null || typeof e != 'object'))
        return e;
    var r = $c(n, function (u) {
        return u.original === e;
    });
    if (r) return r.copy;
    var o = Array.isArray(e) ? [] : {};
    return (
        n.push({ original: e, copy: o }),
        Object.keys(e).forEach(function (u) {
            o[u] = to(e[u], n);
        }),
        o
    );
}
function Gn(e, n) {
    Object.keys(e).forEach(function (r) {
        return n(e[r], r);
    });
}
function Wa(e) {
    return e !== null && typeof e == 'object';
}
function qc(e) {
    return e && typeof e.then == 'function';
}
function Wc(e, n) {
    return function () {
        return e(n);
    };
}
function Va(e, n, r) {
    return (
        n.indexOf(e) < 0 && (r && r.prepend ? n.unshift(e) : n.push(e)),
        function () {
            var o = n.indexOf(e);
            o > -1 && n.splice(o, 1);
        }
    );
}
function Ua(e, n) {
    (e._actions = Object.create(null)),
        (e._mutations = Object.create(null)),
        (e._wrappedGetters = Object.create(null)),
        (e._modulesNamespaceMap = Object.create(null));
    var r = e.state;
    oi(e, r, [], e._modules.root, !0), Co(e, r, n);
}
function Co(e, n, r) {
    var o = e._state,
        u = e._scope;
    (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
    var c = e._wrappedGetters,
        g = {},
        y = {},
        b = pl(!0);
    b.run(function () {
        Gn(c, function (A, N) {
            (g[N] = Wc(A, e)),
                (y[N] = $a(function () {
                    return g[N]();
                })),
                Object.defineProperty(e.getters, N, {
                    get: function () {
                        return y[N].value;
                    },
                    enumerable: !0,
                });
        });
    }),
        (e._state = zr({ data: n })),
        (e._scope = b),
        e.strict && Xc(e),
        o &&
            r &&
            e._withCommit(function () {
                o.data = null;
            }),
        u && u.stop();
}
function oi(e, n, r, o, u) {
    var c = !r.length,
        g = e._modules.getNamespace(r);
    if (
        (o.namespaced &&
            (e._modulesNamespaceMap[g], (e._modulesNamespaceMap[g] = o)),
        !c && !u)
    ) {
        var y = Eo(n, r.slice(0, -1)),
            b = r[r.length - 1];
        e._withCommit(function () {
            y[b] = o.state;
        });
    }
    var A = (o.context = Vc(e, g, r));
    o.forEachMutation(function (N, s) {
        var d = g + s;
        Uc(e, d, N, A);
    }),
        o.forEachAction(function (N, s) {
            var d = N.root ? s : g + s,
                m = N.handler || N;
            Gc(e, d, m, A);
        }),
        o.forEachGetter(function (N, s) {
            var d = g + s;
            Kc(e, d, N, A);
        }),
        o.forEachChild(function (N, s) {
            oi(e, n, r.concat(s), N, u);
        });
}
function Vc(e, n, r) {
    var o = n === '',
        u = {
            dispatch: o
                ? e.dispatch
                : function (c, g, y) {
                      var b = Wr(c, g, y),
                          A = b.payload,
                          N = b.options,
                          s = b.type;
                      return (!N || !N.root) && (s = n + s), e.dispatch(s, A);
                  },
            commit: o
                ? e.commit
                : function (c, g, y) {
                      var b = Wr(c, g, y),
                          A = b.payload,
                          N = b.options,
                          s = b.type;
                      (!N || !N.root) && (s = n + s), e.commit(s, A, N);
                  },
        };
    return (
        Object.defineProperties(u, {
            getters: {
                get: o
                    ? function () {
                          return e.getters;
                      }
                    : function () {
                          return Ga(e, n);
                      },
            },
            state: {
                get: function () {
                    return Eo(e.state, r);
                },
            },
        }),
        u
    );
}
function Ga(e, n) {
    if (!e._makeLocalGettersCache[n]) {
        var r = {},
            o = n.length;
        Object.keys(e.getters).forEach(function (u) {
            if (u.slice(0, o) === n) {
                var c = u.slice(o);
                Object.defineProperty(r, c, {
                    get: function () {
                        return e.getters[u];
                    },
                    enumerable: !0,
                });
            }
        }),
            (e._makeLocalGettersCache[n] = r);
    }
    return e._makeLocalGettersCache[n];
}
function Uc(e, n, r, o) {
    var u = e._mutations[n] || (e._mutations[n] = []);
    u.push(function (g) {
        r.call(e, o.state, g);
    });
}
function Gc(e, n, r, o) {
    var u = e._actions[n] || (e._actions[n] = []);
    u.push(function (g) {
        var y = r.call(
            e,
            {
                dispatch: o.dispatch,
                commit: o.commit,
                getters: o.getters,
                state: o.state,
                rootGetters: e.getters,
                rootState: e.state,
            },
            g
        );
        return (
            qc(y) || (y = Promise.resolve(y)),
            e._devtoolHook
                ? y.catch(function (b) {
                      throw (e._devtoolHook.emit('vuex:error', b), b);
                  })
                : y
        );
    });
}
function Kc(e, n, r, o) {
    e._wrappedGetters[n] ||
        (e._wrappedGetters[n] = function (c) {
            return r(o.state, o.getters, c.state, c.getters);
        });
}
function Xc(e) {
    ur(
        function () {
            return e._state.data;
        },
        function () {},
        { deep: !0, flush: 'sync' }
    );
}
function Eo(e, n) {
    return n.reduce(function (r, o) {
        return r[o];
    }, e);
}
function Wr(e, n, r) {
    return (
        Wa(e) && e.type && ((r = n), (n = e), (e = e.type)),
        { type: e, payload: n, options: r }
    );
}
var zc = 'vuex bindings',
    qs = 'vuex:mutations',
    Ri = 'vuex:actions',
    Ln = 'vuex',
    Qc = 0;
function Yc(e, n) {
    Rc(
        {
            id: 'org.vuejs.vuex',
            app: e,
            label: 'Vuex',
            homepage: 'https://next.vuex.vuejs.org/',
            logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
            packageName: 'vuex',
            componentStateTypes: [zc],
        },
        function (r) {
            r.addTimelineLayer({ id: qs, label: 'Vuex Mutations', color: Ws }),
                r.addTimelineLayer({
                    id: Ri,
                    label: 'Vuex Actions',
                    color: Ws,
                }),
                r.addInspector({
                    id: Ln,
                    label: 'Vuex',
                    icon: 'storage',
                    treeFilterPlaceholder: 'Filter stores...',
                }),
                r.on.getInspectorTree(function (o) {
                    if (o.app === e && o.inspectorId === Ln)
                        if (o.filter) {
                            var u = [];
                            Qa(u, n._modules.root, o.filter, ''),
                                (o.rootNodes = u);
                        } else o.rootNodes = [za(n._modules.root, '')];
                }),
                r.on.getInspectorState(function (o) {
                    if (o.app === e && o.inspectorId === Ln) {
                        var u = o.nodeId;
                        Ga(n, u),
                            (o.state = ed(
                                nd(n._modules, u),
                                u === 'root'
                                    ? n.getters
                                    : n._makeLocalGettersCache,
                                u
                            ));
                    }
                }),
                r.on.editInspectorState(function (o) {
                    if (o.app === e && o.inspectorId === Ln) {
                        var u = o.nodeId,
                            c = o.path;
                        u !== 'root' &&
                            (c = u.split('/').filter(Boolean).concat(c)),
                            n._withCommit(function () {
                                o.set(n._state.data, c, o.state.value);
                            });
                    }
                }),
                n.subscribe(function (o, u) {
                    var c = {};
                    o.payload && (c.payload = o.payload),
                        (c.state = u),
                        r.notifyComponentUpdate(),
                        r.sendInspectorTree(Ln),
                        r.sendInspectorState(Ln),
                        r.addTimelineEvent({
                            layerId: qs,
                            event: { time: Date.now(), title: o.type, data: c },
                        });
                }),
                n.subscribeAction({
                    before: function (o, u) {
                        var c = {};
                        o.payload && (c.payload = o.payload),
                            (o._id = Qc++),
                            (o._time = Date.now()),
                            (c.state = u),
                            r.addTimelineEvent({
                                layerId: Ri,
                                event: {
                                    time: o._time,
                                    title: o.type,
                                    groupId: o._id,
                                    subtitle: 'start',
                                    data: c,
                                },
                            });
                    },
                    after: function (o, u) {
                        var c = {},
                            g = Date.now() - o._time;
                        (c.duration = {
                            _custom: {
                                type: 'duration',
                                display: g + 'ms',
                                tooltip: 'Action duration',
                                value: g,
                            },
                        }),
                            o.payload && (c.payload = o.payload),
                            (c.state = u),
                            r.addTimelineEvent({
                                layerId: Ri,
                                event: {
                                    time: Date.now(),
                                    title: o.type,
                                    groupId: o._id,
                                    subtitle: 'end',
                                    data: c,
                                },
                            });
                    },
                });
        }
    );
}
var Ws = 8702998,
    Jc = 6710886,
    Zc = 16777215,
    Ka = { label: 'namespaced', textColor: Zc, backgroundColor: Jc };
function Xa(e) {
    return e && e !== 'root' ? e.split('/').slice(-2, -1)[0] : 'Root';
}
function za(e, n) {
    return {
        id: n || 'root',
        label: Xa(n),
        tags: e.namespaced ? [Ka] : [],
        children: Object.keys(e._children).map(function (r) {
            return za(e._children[r], n + r + '/');
        }),
    };
}
function Qa(e, n, r, o) {
    o.includes(r) &&
        e.push({
            id: o || 'root',
            label: o.endsWith('/') ? o.slice(0, o.length - 1) : o || 'Root',
            tags: n.namespaced ? [Ka] : [],
        }),
        Object.keys(n._children).forEach(function (u) {
            Qa(e, n._children[u], r, o + u + '/');
        });
}
function ed(e, n, r) {
    n = r === 'root' ? n : n[r];
    var o = Object.keys(n),
        u = {
            state: Object.keys(e.state).map(function (g) {
                return { key: g, editable: !0, value: e.state[g] };
            }),
        };
    if (o.length) {
        var c = td(n);
        u.getters = Object.keys(c).map(function (g) {
            return {
                key: g.endsWith('/') ? Xa(g) : g,
                editable: !1,
                value: no(function () {
                    return c[g];
                }),
            };
        });
    }
    return u;
}
function td(e) {
    var n = {};
    return (
        Object.keys(e).forEach(function (r) {
            var o = r.split('/');
            if (o.length > 1) {
                var u = n,
                    c = o.pop();
                o.forEach(function (g) {
                    u[g] ||
                        (u[g] = {
                            _custom: {
                                value: {},
                                display: g,
                                tooltip: 'Module',
                                abstract: !0,
                            },
                        }),
                        (u = u[g]._custom.value);
                }),
                    (u[c] = no(function () {
                        return e[r];
                    }));
            } else
                n[r] = no(function () {
                    return e[r];
                });
        }),
        n
    );
}
function nd(e, n) {
    var r = n.split('/').filter(function (o) {
        return o;
    });
    return r.reduce(
        function (o, u, c) {
            var g = o[u];
            if (!g)
                throw new Error(
                    'Missing module "' + u + '" for path "' + n + '".'
                );
            return c === r.length - 1 ? g : g._children;
        },
        n === 'root' ? e : e.root._children
    );
}
function no(e) {
    try {
        return e();
    } catch (n) {
        return n;
    }
}
var Ht = function (n, r) {
        (this.runtime = r),
            (this._children = Object.create(null)),
            (this._rawModule = n);
        var o = n.state;
        this.state = (typeof o == 'function' ? o() : o) || {};
    },
    Ya = { namespaced: { configurable: !0 } };
Ya.namespaced.get = function () {
    return !!this._rawModule.namespaced;
};
Ht.prototype.addChild = function (n, r) {
    this._children[n] = r;
};
Ht.prototype.removeChild = function (n) {
    delete this._children[n];
};
Ht.prototype.getChild = function (n) {
    return this._children[n];
};
Ht.prototype.hasChild = function (n) {
    return n in this._children;
};
Ht.prototype.update = function (n) {
    (this._rawModule.namespaced = n.namespaced),
        n.actions && (this._rawModule.actions = n.actions),
        n.mutations && (this._rawModule.mutations = n.mutations),
        n.getters && (this._rawModule.getters = n.getters);
};
Ht.prototype.forEachChild = function (n) {
    Gn(this._children, n);
};
Ht.prototype.forEachGetter = function (n) {
    this._rawModule.getters && Gn(this._rawModule.getters, n);
};
Ht.prototype.forEachAction = function (n) {
    this._rawModule.actions && Gn(this._rawModule.actions, n);
};
Ht.prototype.forEachMutation = function (n) {
    this._rawModule.mutations && Gn(this._rawModule.mutations, n);
};
Object.defineProperties(Ht.prototype, Ya);
var En = function (n) {
    this.register([], n, !1);
};
En.prototype.get = function (n) {
    return n.reduce(function (r, o) {
        return r.getChild(o);
    }, this.root);
};
En.prototype.getNamespace = function (n) {
    var r = this.root;
    return n.reduce(function (o, u) {
        return (r = r.getChild(u)), o + (r.namespaced ? u + '/' : '');
    }, '');
};
En.prototype.update = function (n) {
    Ja([], this.root, n);
};
En.prototype.register = function (n, r, o) {
    var u = this;
    o === void 0 && (o = !0);
    var c = new Ht(r, o);
    if (n.length === 0) this.root = c;
    else {
        var g = this.get(n.slice(0, -1));
        g.addChild(n[n.length - 1], c);
    }
    r.modules &&
        Gn(r.modules, function (y, b) {
            u.register(n.concat(b), y, o);
        });
};
En.prototype.unregister = function (n) {
    var r = this.get(n.slice(0, -1)),
        o = n[n.length - 1],
        u = r.getChild(o);
    u && u.runtime && r.removeChild(o);
};
En.prototype.isRegistered = function (n) {
    var r = this.get(n.slice(0, -1)),
        o = n[n.length - 1];
    return r ? r.hasChild(o) : !1;
};
function Ja(e, n, r) {
    if ((n.update(r), r.modules))
        for (var o in r.modules) {
            if (!n.getChild(o)) return;
            Ja(e.concat(o), n.getChild(o), r.modules[o]);
        }
}
function rd(e) {
    return new ot(e);
}
var ot = function (n) {
        var r = this;
        n === void 0 && (n = {});
        var o = n.plugins;
        o === void 0 && (o = []);
        var u = n.strict;
        u === void 0 && (u = !1);
        var c = n.devtools;
        (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new En(n)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._makeLocalGettersCache = Object.create(null)),
            (this._scope = null),
            (this._devtools = c);
        var g = this,
            y = this,
            b = y.dispatch,
            A = y.commit;
        (this.dispatch = function (d, m) {
            return b.call(g, d, m);
        }),
            (this.commit = function (d, m, T) {
                return A.call(g, d, m, T);
            }),
            (this.strict = u);
        var N = this._modules.root.state;
        oi(this, N, [], this._modules.root),
            Co(this, N),
            o.forEach(function (s) {
                return s(r);
            });
    },
    Oo = { state: { configurable: !0 } };
ot.prototype.install = function (n, r) {
    n.provide(r || So, this), (n.config.globalProperties.$store = this);
    var o = this._devtools !== void 0 ? this._devtools : !1;
    o && Yc(n, this);
};
Oo.state.get = function () {
    return this._state.data;
};
Oo.state.set = function (e) {};
ot.prototype.commit = function (n, r, o) {
    var u = this,
        c = Wr(n, r, o),
        g = c.type,
        y = c.payload,
        b = { type: g, payload: y },
        A = this._mutations[g];
    A &&
        (this._withCommit(function () {
            A.forEach(function (s) {
                s(y);
            });
        }),
        this._subscribers.slice().forEach(function (N) {
            return N(b, u.state);
        }));
};
ot.prototype.dispatch = function (n, r) {
    var o = this,
        u = Wr(n, r),
        c = u.type,
        g = u.payload,
        y = { type: c, payload: g },
        b = this._actions[c];
    if (b) {
        try {
            this._actionSubscribers
                .slice()
                .filter(function (N) {
                    return N.before;
                })
                .forEach(function (N) {
                    return N.before(y, o.state);
                });
        } catch {}
        var A =
            b.length > 1
                ? Promise.all(
                      b.map(function (N) {
                          return N(g);
                      })
                  )
                : b[0](g);
        return new Promise(function (N, s) {
            A.then(
                function (d) {
                    try {
                        o._actionSubscribers
                            .filter(function (m) {
                                return m.after;
                            })
                            .forEach(function (m) {
                                return m.after(y, o.state);
                            });
                    } catch {}
                    N(d);
                },
                function (d) {
                    try {
                        o._actionSubscribers
                            .filter(function (m) {
                                return m.error;
                            })
                            .forEach(function (m) {
                                return m.error(y, o.state, d);
                            });
                    } catch {}
                    s(d);
                }
            );
        });
    }
};
ot.prototype.subscribe = function (n, r) {
    return Va(n, this._subscribers, r);
};
ot.prototype.subscribeAction = function (n, r) {
    var o = typeof n == 'function' ? { before: n } : n;
    return Va(o, this._actionSubscribers, r);
};
ot.prototype.watch = function (n, r, o) {
    var u = this;
    return ur(
        function () {
            return n(u.state, u.getters);
        },
        r,
        Object.assign({}, o)
    );
};
ot.prototype.replaceState = function (n) {
    var r = this;
    this._withCommit(function () {
        r._state.data = n;
    });
};
ot.prototype.registerModule = function (n, r, o) {
    o === void 0 && (o = {}),
        typeof n == 'string' && (n = [n]),
        this._modules.register(n, r),
        oi(this, this.state, n, this._modules.get(n), o.preserveState),
        Co(this, this.state);
};
ot.prototype.unregisterModule = function (n) {
    var r = this;
    typeof n == 'string' && (n = [n]),
        this._modules.unregister(n),
        this._withCommit(function () {
            var o = Eo(r.state, n.slice(0, -1));
            delete o[n[n.length - 1]];
        }),
        Ua(this);
};
ot.prototype.hasModule = function (n) {
    return typeof n == 'string' && (n = [n]), this._modules.isRegistered(n);
};
ot.prototype.hotUpdate = function (n) {
    this._modules.update(n), Ua(this, !0);
};
ot.prototype._withCommit = function (n) {
    var r = this._committing;
    (this._committing = !0), n(), (this._committing = r);
};
Object.defineProperties(ot.prototype, Oo);
var Dt = ai(function (e, n) {
        var r = {};
        return (
            si(n).forEach(function (o) {
                var u = o.key,
                    c = o.val;
                (r[u] = function () {
                    var y = this.$store.state,
                        b = this.$store.getters;
                    if (e) {
                        var A = ui(this.$store, 'mapState', e);
                        if (!A) return;
                        (y = A.context.state), (b = A.context.getters);
                    }
                    return typeof c == 'function' ? c.call(this, y, b) : y[c];
                }),
                    (r[u].vuex = !0);
            }),
            r
        );
    }),
    Za = ai(function (e, n) {
        var r = {};
        return (
            si(n).forEach(function (o) {
                var u = o.key,
                    c = o.val;
                r[u] = function () {
                    for (var y = [], b = arguments.length; b--; )
                        y[b] = arguments[b];
                    var A = this.$store.commit;
                    if (e) {
                        var N = ui(this.$store, 'mapMutations', e);
                        if (!N) return;
                        A = N.context.commit;
                    }
                    return typeof c == 'function'
                        ? c.apply(this, [A].concat(y))
                        : A.apply(this.$store, [c].concat(y));
                };
            }),
            r
        );
    }),
    eu = ai(function (e, n) {
        var r = {};
        return (
            si(n).forEach(function (o) {
                var u = o.key,
                    c = o.val;
                (c = e + c),
                    (r[u] = function () {
                        if (!(e && !ui(this.$store, 'mapGetters', e)))
                            return this.$store.getters[c];
                    }),
                    (r[u].vuex = !0);
            }),
            r
        );
    }),
    kt = ai(function (e, n) {
        var r = {};
        return (
            si(n).forEach(function (o) {
                var u = o.key,
                    c = o.val;
                r[u] = function () {
                    for (var y = [], b = arguments.length; b--; )
                        y[b] = arguments[b];
                    var A = this.$store.dispatch;
                    if (e) {
                        var N = ui(this.$store, 'mapActions', e);
                        if (!N) return;
                        A = N.context.dispatch;
                    }
                    return typeof c == 'function'
                        ? c.apply(this, [A].concat(y))
                        : A.apply(this.$store, [c].concat(y));
                };
            }),
            r
        );
    }),
    id = function (e) {
        return {
            mapState: Dt.bind(null, e),
            mapGetters: eu.bind(null, e),
            mapMutations: Za.bind(null, e),
            mapActions: kt.bind(null, e),
        };
    };
function si(e) {
    return od(e)
        ? Array.isArray(e)
            ? e.map(function (n) {
                  return { key: n, val: n };
              })
            : Object.keys(e).map(function (n) {
                  return { key: n, val: e[n] };
              })
        : [];
}
function od(e) {
    return Array.isArray(e) || Wa(e);
}
function ai(e) {
    return function (n, r) {
        return (
            typeof n != 'string'
                ? ((r = n), (n = ''))
                : n.charAt(n.length - 1) !== '/' && (n += '/'),
            e(n, r)
        );
    };
}
function ui(e, n, r) {
    var o = e._modulesNamespaceMap[r];
    return o;
}
function sd(e) {
    e === void 0 && (e = {});
    var n = e.collapsed;
    n === void 0 && (n = !0);
    var r = e.filter;
    r === void 0 &&
        (r = function (N, s, d) {
            return !0;
        });
    var o = e.transformer;
    o === void 0 &&
        (o = function (N) {
            return N;
        });
    var u = e.mutationTransformer;
    u === void 0 &&
        (u = function (N) {
            return N;
        });
    var c = e.actionFilter;
    c === void 0 &&
        (c = function (N, s) {
            return !0;
        });
    var g = e.actionTransformer;
    g === void 0 &&
        (g = function (N) {
            return N;
        });
    var y = e.logMutations;
    y === void 0 && (y = !0);
    var b = e.logActions;
    b === void 0 && (b = !0);
    var A = e.logger;
    return (
        A === void 0 && (A = console),
        function (N) {
            var s = to(N.state);
            typeof A > 'u' ||
                (y &&
                    N.subscribe(function (d, m) {
                        var T = to(m);
                        if (r(d, s, T)) {
                            var E = Gs(),
                                j = u(d),
                                O = 'mutation ' + d.type + E;
                            Vs(A, O, n),
                                A.log(
                                    '%c prev state',
                                    'color: #9E9E9E; font-weight: bold',
                                    o(s)
                                ),
                                A.log(
                                    '%c mutation',
                                    'color: #03A9F4; font-weight: bold',
                                    j
                                ),
                                A.log(
                                    '%c next state',
                                    'color: #4CAF50; font-weight: bold',
                                    o(T)
                                ),
                                Us(A);
                        }
                        s = T;
                    }),
                b &&
                    N.subscribeAction(function (d, m) {
                        if (c(d, m)) {
                            var T = Gs(),
                                E = g(d),
                                j = 'action ' + d.type + T;
                            Vs(A, j, n),
                                A.log(
                                    '%c action',
                                    'color: #03A9F4; font-weight: bold',
                                    E
                                ),
                                Us(A);
                        }
                    }));
        }
    );
}
function Vs(e, n, r) {
    var o = r ? e.groupCollapsed : e.group;
    try {
        o.call(e, n);
    } catch {
        e.log(n);
    }
}
function Us(e) {
    try {
        e.groupEnd();
    } catch {
        e.log('—— log end ——');
    }
}
function Gs() {
    var e = new Date();
    return (
        ' @ ' +
        Dr(e.getHours(), 2) +
        ':' +
        Dr(e.getMinutes(), 2) +
        ':' +
        Dr(e.getSeconds(), 2) +
        '.' +
        Dr(e.getMilliseconds(), 3)
    );
}
function ad(e, n) {
    return new Array(n + 1).join(e);
}
function Dr(e, n) {
    return ad('0', n - e.toString().length) + e;
}
var ud = {
    version: '4.1.0',
    Store: ot,
    storeKey: So,
    createStore: rd,
    useStore: Bc,
    mapState: Dt,
    mapMutations: Za,
    mapGetters: eu,
    mapActions: kt,
    createNamespacedHelpers: id,
    createLogger: sd,
};
const ld = ud,
    fd = {
        namespaced: !0,
        state: {
            numOfRows: 6,
            numOfCols: 7,
            boardSlots: [],
            moves: [],
            undoneMoves: [],
        },
        mutations: {
            setBoardSlotsArray(e, n) {
                e.boardSlots[n.index] = n.value;
            },
            pushObjectToBoardSlotsArray(e, n) {
                e.boardSlots[n.index].push(n.object);
            },
            updateSpecificSlotProperty(e, n) {
                e.boardSlots[n.col][n.row][n.property] = n.value;
            },
            setMovesArray(e, n) {
                e.moves = n;
            },
            pushToMovesArray(e, n) {
                e.moves.push(n);
            },
            popMovesArray(e) {
                e.moves.pop();
            },
            setUndoneMovesArray(e, n) {
                e.undoneMoves = n;
            },
            pushToUndoneMovesArray(e, n) {
                e.undoneMoves.push(n);
            },
            popUndoneMovesArray(e) {
                e.undoneMoves.pop();
            },
        },
        actions: {
            setBoardSlotsArray(e, { index: n, value: r }) {
                e.commit('setBoardSlotsArray', { index: n, value: r });
            },
            pushObjectToBoardSlotsArray(e, { index: n, object: r }) {
                e.commit('pushObjectToBoardSlotsArray', {
                    index: n,
                    object: r,
                });
            },
            updateSpecificSlotProperty(
                e,
                { col: n, row: r, property: o, value: u }
            ) {
                e.commit('updateSpecificSlotProperty', {
                    col: n,
                    row: r,
                    property: o,
                    value: u,
                });
            },
            setMovesArray(e, n) {
                e.commit('setMovesArray', n);
            },
            pushToMovesArray(e, n) {
                e.commit('pushToMovesArray', n);
            },
            popMovesArray(e) {
                e.commit('popMovesArray');
            },
            setUndoneMovesArray(e, n) {
                e.commit('setUndoneMovesArray', n);
            },
            pushToUndoneMovesArray(e, n) {
                e.commit('pushToUndoneMovesArray', n);
            },
            popUndoneMovesArray(e) {
                e.commit('popUndoneMovesArray');
            },
        },
    },
    cd = {
        namespaced: !0,
        state: { score: { player1: 0, player2: 0 } },
        mutations: {
            updateScore(e, n) {
                e.score['player' + n.player] = n.value;
            },
        },
        actions: {
            updateScore(e, n) {
                e.commit('updateScore', n);
            },
        },
    },
    dd = {
        namespaced: !0,
        state: { visible: !1, message: '' },
        mutations: {
            updateVisible(e, n) {
                e.visible = n;
            },
            updateMessage(e, n) {
                e.message = n;
            },
        },
        actions: {
            updateVisible(e, n) {
                e.commit('updateVisible', n);
            },
            showAlert(e, n) {
                e.commit('updateMessage', n), e.dispatch('updateVisible', !0);
            },
        },
    },
    pd = new ld.Store({
        strict: !1,
        modules: { Board: fd, Scoreboard: cd, Alert: dd },
        state: { currentPlayer: 1, playerCanPlay: !0 },
        mutations: {
            swapToNextPlayer(e) {
                e.currentPlayer === 1
                    ? (e.currentPlayer = 2)
                    : (e.currentPlayer = 1);
            },
            updatePlayerCanPlay(e, n) {
                e.playerCanPlay = n;
            },
        },
        actions: {
            swapToNextPlayer(e) {
                e.commit('swapToNextPlayer');
            },
            updatePlayerCanPlay(e, n) {
                e.commit('updatePlayerCanPlay', n);
            },
        },
    });
function hd(e) {
    return {
        all: (e = e || new Map()),
        on: function (n, r) {
            var o = e.get(n);
            o ? o.push(r) : e.set(n, [r]);
        },
        off: function (n, r) {
            var o = e.get(n);
            o && (r ? o.splice(o.indexOf(r) >>> 0, 1) : e.set(n, []));
        },
        emit: function (n, r) {
            var o = e.get(n);
            o &&
                o.slice().map(function (u) {
                    u(r);
                }),
                (o = e.get('*')) &&
                    o.slice().map(function (u) {
                        u(n, r);
                    });
        },
    };
}
var Dn =
        typeof globalThis < 'u'
            ? globalThis
            : typeof window < 'u'
              ? window
              : typeof global < 'u'
                ? global
                : typeof self < 'u'
                  ? self
                  : {},
    ro = {},
    gd = {
        get exports() {
            return ro;
        },
        set exports(e) {
            ro = e;
        },
    };
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */ (function (e) {
    (function (n, r) {
        e.exports = n.document
            ? r(n, !0)
            : function (o) {
                  if (!o.document)
                      throw new Error(
                          'jQuery requires a window with a document'
                      );
                  return r(o);
              };
    })(typeof window < 'u' ? window : Dn, function (n, r) {
        var o = [],
            u = Object.getPrototypeOf,
            c = o.slice,
            g = o.flat
                ? function (t) {
                      return o.flat.call(t);
                  }
                : function (t) {
                      return o.concat.apply([], t);
                  },
            y = o.push,
            b = o.indexOf,
            A = {},
            N = A.toString,
            s = A.hasOwnProperty,
            d = s.toString,
            m = d.call(Object),
            T = {},
            E = function (i) {
                return (
                    typeof i == 'function' &&
                    typeof i.nodeType != 'number' &&
                    typeof i.item != 'function'
                );
            },
            j = function (i) {
                return i != null && i === i.window;
            },
            O = n.document,
            Z = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function Q(t, i, a) {
            a = a || O;
            var l,
                p,
                h = a.createElement('script');
            if (((h.text = t), i))
                for (l in Z)
                    (p = i[l] || (i.getAttribute && i.getAttribute(l))),
                        p && h.setAttribute(l, p);
            a.head.appendChild(h).parentNode.removeChild(h);
        }
        function ce(t) {
            return t == null
                ? t + ''
                : typeof t == 'object' || typeof t == 'function'
                  ? A[N.call(t)] || 'object'
                  : typeof t;
        }
        var Ae = '3.6.3',
            f = function (t, i) {
                return new f.fn.init(t, i);
            };
        (f.fn = f.prototype =
            {
                jquery: Ae,
                constructor: f,
                length: 0,
                toArray: function () {
                    return c.call(this);
                },
                get: function (t) {
                    return t == null
                        ? c.call(this)
                        : t < 0
                          ? this[t + this.length]
                          : this[t];
                },
                pushStack: function (t) {
                    var i = f.merge(this.constructor(), t);
                    return (i.prevObject = this), i;
                },
                each: function (t) {
                    return f.each(this, t);
                },
                map: function (t) {
                    return this.pushStack(
                        f.map(this, function (i, a) {
                            return t.call(i, a, i);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(c.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        f.grep(this, function (t, i) {
                            return (i + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        f.grep(this, function (t, i) {
                            return i % 2;
                        })
                    );
                },
                eq: function (t) {
                    var i = this.length,
                        a = +t + (t < 0 ? i : 0);
                    return this.pushStack(a >= 0 && a < i ? [this[a]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: y,
                sort: o.sort,
                splice: o.splice,
            }),
            (f.extend = f.fn.extend =
                function () {
                    var t,
                        i,
                        a,
                        l,
                        p,
                        h,
                        _ = arguments[0] || {},
                        S = 1,
                        w = arguments.length,
                        k = !1;
                    for (
                        typeof _ == 'boolean' &&
                            ((k = _), (_ = arguments[S] || {}), S++),
                            typeof _ != 'object' && !E(_) && (_ = {}),
                            S === w && ((_ = this), S--);
                        S < w;
                        S++
                    )
                        if ((t = arguments[S]) != null)
                            for (i in t)
                                (l = t[i]),
                                    !(i === '__proto__' || _ === l) &&
                                        (k &&
                                        l &&
                                        (f.isPlainObject(l) ||
                                            (p = Array.isArray(l)))
                                            ? ((a = _[i]),
                                              p && !Array.isArray(a)
                                                  ? (h = [])
                                                  : !p && !f.isPlainObject(a)
                                                    ? (h = {})
                                                    : (h = a),
                                              (p = !1),
                                              (_[i] = f.extend(k, h, l)))
                                            : l !== void 0 && (_[i] = l));
                    return _;
                }),
            f.extend({
                expando: 'jQuery' + (Ae + Math.random()).replace(/\D/g, ''),
                isReady: !0,
                error: function (t) {
                    throw new Error(t);
                },
                noop: function () {},
                isPlainObject: function (t) {
                    var i, a;
                    return !t || N.call(t) !== '[object Object]'
                        ? !1
                        : ((i = u(t)),
                          i
                              ? ((a =
                                    s.call(i, 'constructor') && i.constructor),
                                typeof a == 'function' && d.call(a) === m)
                              : !0);
                },
                isEmptyObject: function (t) {
                    var i;
                    for (i in t) return !1;
                    return !0;
                },
                globalEval: function (t, i, a) {
                    Q(t, { nonce: i && i.nonce }, a);
                },
                each: function (t, i) {
                    var a,
                        l = 0;
                    if (Ke(t))
                        for (
                            a = t.length;
                            l < a && i.call(t[l], l, t[l]) !== !1;
                            l++
                        );
                    else for (l in t) if (i.call(t[l], l, t[l]) === !1) break;
                    return t;
                },
                makeArray: function (t, i) {
                    var a = i || [];
                    return (
                        t != null &&
                            (Ke(Object(t))
                                ? f.merge(a, typeof t == 'string' ? [t] : t)
                                : y.call(a, t)),
                        a
                    );
                },
                inArray: function (t, i, a) {
                    return i == null ? -1 : b.call(i, t, a);
                },
                merge: function (t, i) {
                    for (var a = +i.length, l = 0, p = t.length; l < a; l++)
                        t[p++] = i[l];
                    return (t.length = p), t;
                },
                grep: function (t, i, a) {
                    for (var l, p = [], h = 0, _ = t.length, S = !a; h < _; h++)
                        (l = !i(t[h], h)), l !== S && p.push(t[h]);
                    return p;
                },
                map: function (t, i, a) {
                    var l,
                        p,
                        h = 0,
                        _ = [];
                    if (Ke(t))
                        for (l = t.length; h < l; h++)
                            (p = i(t[h], h, a)), p != null && _.push(p);
                    else
                        for (h in t)
                            (p = i(t[h], h, a)), p != null && _.push(p);
                    return g(_);
                },
                guid: 1,
                support: T,
            }),
            typeof Symbol == 'function' &&
                (f.fn[Symbol.iterator] = o[Symbol.iterator]),
            f.each(
                'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                    ' '
                ),
                function (t, i) {
                    A['[object ' + i + ']'] = i.toLowerCase();
                }
            );
        function Ke(t) {
            var i = !!t && 'length' in t && t.length,
                a = ce(t);
            return E(t) || j(t)
                ? !1
                : a === 'array' ||
                      i === 0 ||
                      (typeof i == 'number' && i > 0 && i - 1 in t);
        }
        var de = (function (t) {
            var i,
                a,
                l,
                p,
                h,
                _,
                S,
                w,
                k,
                H,
                W,
                D,
                R,
                re,
                he,
                ne,
                We,
                $e,
                pt,
                Oe = 'sizzle' + 1 * new Date(),
                pe = t.document,
                ut = 0,
                be = 0,
                Fe = Sr(),
                tr = Sr(),
                xr = Sr(),
                ht = Sr(),
                pn = function (v, x) {
                    return v === x && (W = !0), 0;
                },
                hn = {}.hasOwnProperty,
                lt = [],
                Zt = lt.pop,
                yt = lt.push,
                en = lt.push,
                rs = lt.slice,
                gn = function (v, x) {
                    for (var M = 0, B = v.length; M < B; M++)
                        if (v[M] === x) return M;
                    return -1;
                },
                Ti =
                    'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                xe = '[\\x20\\t\\r\\n\\f]',
                _n =
                    '(?:\\\\[\\da-fA-F]{1,6}' +
                    xe +
                    '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                is =
                    '\\[' +
                    xe +
                    '*(' +
                    _n +
                    ')(?:' +
                    xe +
                    '*([*^$|!~]?=)' +
                    xe +
                    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                    _n +
                    '))|)' +
                    xe +
                    '*\\]',
                Ai =
                    ':(' +
                    _n +
                    `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                    is +
                    ')*)|.*)\\)|)',
                Ru = new RegExp(xe + '+', 'g'),
                Tr = new RegExp(
                    '^' + xe + '+|((?:^|[^\\\\])(?:\\\\.)*)' + xe + '+$',
                    'g'
                ),
                Bu = new RegExp('^' + xe + '*,' + xe + '*'),
                os = new RegExp('^' + xe + '*([>+~]|' + xe + ')' + xe + '*'),
                $u = new RegExp(xe + '|>'),
                qu = new RegExp(Ai),
                Wu = new RegExp('^' + _n + '$'),
                Ar = {
                    ID: new RegExp('^#(' + _n + ')'),
                    CLASS: new RegExp('^\\.(' + _n + ')'),
                    TAG: new RegExp('^(' + _n + '|[*])'),
                    ATTR: new RegExp('^' + is),
                    PSEUDO: new RegExp('^' + Ai),
                    CHILD: new RegExp(
                        '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                            xe +
                            '*(even|odd|(([+-]|)(\\d*)n|)' +
                            xe +
                            '*(?:([+-]|)' +
                            xe +
                            '*(\\d+)|))' +
                            xe +
                            '*\\)|)',
                        'i'
                    ),
                    bool: new RegExp('^(?:' + Ti + ')$', 'i'),
                    needsContext: new RegExp(
                        '^' +
                            xe +
                            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                            xe +
                            '*((?:-\\d)?\\d*)' +
                            xe +
                            '*\\)|)(?=[^-]|$)',
                        'i'
                    ),
                },
                Vu = /HTML$/i,
                Uu = /^(?:input|select|textarea|button)$/i,
                Gu = /^h\d$/i,
                nr = /^[^{]+\{\s*\[native \w/,
                Ku = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Si = /[+~]/,
                Ut = new RegExp(
                    '\\\\[\\da-fA-F]{1,6}' + xe + '?|\\\\([^\\r\\n\\f])',
                    'g'
                ),
                Gt = function (v, x) {
                    var M = '0x' + v.slice(1) - 65536;
                    return (
                        x ||
                        (M < 0
                            ? String.fromCharCode(M + 65536)
                            : String.fromCharCode(
                                  (M >> 10) | 55296,
                                  (M & 1023) | 56320
                              ))
                    );
                },
                ss = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                as = function (v, x) {
                    return x
                        ? v === '\0'
                            ? '�'
                            : v.slice(0, -1) +
                              '\\' +
                              v.charCodeAt(v.length - 1).toString(16) +
                              ' '
                        : '\\' + v;
                },
                us = function () {
                    D();
                },
                Xu = Er(
                    function (v) {
                        return (
                            v.disabled === !0 &&
                            v.nodeName.toLowerCase() === 'fieldset'
                        );
                    },
                    { dir: 'parentNode', next: 'legend' }
                );
            try {
                en.apply((lt = rs.call(pe.childNodes)), pe.childNodes),
                    lt[pe.childNodes.length].nodeType;
            } catch {
                en = {
                    apply: lt.length
                        ? function (x, M) {
                              yt.apply(x, rs.call(M));
                          }
                        : function (x, M) {
                              for (
                                  var B = x.length, I = 0;
                                  (x[B++] = M[I++]);

                              );
                              x.length = B - 1;
                          },
                };
            }
            function Me(v, x, M, B) {
                var I,
                    $,
                    V,
                    X,
                    Y,
                    ae,
                    oe,
                    fe = x && x.ownerDocument,
                    me = x ? x.nodeType : 9;
                if (
                    ((M = M || []),
                    typeof v != 'string' ||
                        !v ||
                        (me !== 1 && me !== 9 && me !== 11))
                )
                    return M;
                if (!B && (D(x), (x = x || R), he)) {
                    if (me !== 11 && (Y = Ku.exec(v)))
                        if ((I = Y[1])) {
                            if (me === 9)
                                if ((V = x.getElementById(I))) {
                                    if (V.id === I) return M.push(V), M;
                                } else return M;
                            else if (
                                fe &&
                                (V = fe.getElementById(I)) &&
                                pt(x, V) &&
                                V.id === I
                            )
                                return M.push(V), M;
                        } else {
                            if (Y[2])
                                return (
                                    en.apply(M, x.getElementsByTagName(v)), M
                                );
                            if (
                                (I = Y[3]) &&
                                a.getElementsByClassName &&
                                x.getElementsByClassName
                            )
                                return (
                                    en.apply(M, x.getElementsByClassName(I)), M
                                );
                        }
                    if (
                        a.qsa &&
                        !ht[v + ' '] &&
                        (!ne || !ne.test(v)) &&
                        (me !== 1 || x.nodeName.toLowerCase() !== 'object')
                    ) {
                        if (
                            ((oe = v),
                            (fe = x),
                            me === 1 && ($u.test(v) || os.test(v)))
                        ) {
                            for (
                                fe = (Si.test(v) && Ei(x.parentNode)) || x,
                                    (fe !== x || !a.scope) &&
                                        ((X = x.getAttribute('id'))
                                            ? (X = X.replace(ss, as))
                                            : x.setAttribute('id', (X = Oe))),
                                    ae = _(v),
                                    $ = ae.length;
                                $--;

                            )
                                ae[$] =
                                    (X ? '#' + X : ':scope') + ' ' + Cr(ae[$]);
                            oe = ae.join(',');
                        }
                        try {
                            if (
                                a.cssSupportsSelector &&
                                !CSS.supports('selector(:is(' + oe + '))')
                            )
                                throw new Error();
                            return en.apply(M, fe.querySelectorAll(oe)), M;
                        } catch {
                            ht(v, !0);
                        } finally {
                            X === Oe && x.removeAttribute('id');
                        }
                    }
                }
                return w(v.replace(Tr, '$1'), x, M, B);
            }
            function Sr() {
                var v = [];
                function x(M, B) {
                    return (
                        v.push(M + ' ') > l.cacheLength && delete x[v.shift()],
                        (x[M + ' '] = B)
                    );
                }
                return x;
            }
            function Et(v) {
                return (v[Oe] = !0), v;
            }
            function bt(v) {
                var x = R.createElement('fieldset');
                try {
                    return !!v(x);
                } catch {
                    return !1;
                } finally {
                    x.parentNode && x.parentNode.removeChild(x), (x = null);
                }
            }
            function Ci(v, x) {
                for (var M = v.split('|'), B = M.length; B--; )
                    l.attrHandle[M[B]] = x;
            }
            function ls(v, x) {
                var M = x && v,
                    B =
                        M &&
                        v.nodeType === 1 &&
                        x.nodeType === 1 &&
                        v.sourceIndex - x.sourceIndex;
                if (B) return B;
                if (M) {
                    for (; (M = M.nextSibling); ) if (M === x) return -1;
                }
                return v ? 1 : -1;
            }
            function zu(v) {
                return function (x) {
                    var M = x.nodeName.toLowerCase();
                    return M === 'input' && x.type === v;
                };
            }
            function Qu(v) {
                return function (x) {
                    var M = x.nodeName.toLowerCase();
                    return (M === 'input' || M === 'button') && x.type === v;
                };
            }
            function fs(v) {
                return function (x) {
                    return 'form' in x
                        ? x.parentNode && x.disabled === !1
                            ? 'label' in x
                                ? 'label' in x.parentNode
                                    ? x.parentNode.disabled === v
                                    : x.disabled === v
                                : x.isDisabled === v ||
                                  (x.isDisabled !== !v && Xu(x) === v)
                            : x.disabled === v
                        : 'label' in x
                          ? x.disabled === v
                          : !1;
                };
            }
            function vn(v) {
                return Et(function (x) {
                    return (
                        (x = +x),
                        Et(function (M, B) {
                            for (
                                var I, $ = v([], M.length, x), V = $.length;
                                V--;

                            )
                                M[(I = $[V])] && (M[I] = !(B[I] = M[I]));
                        })
                    );
                });
            }
            function Ei(v) {
                return v && typeof v.getElementsByTagName < 'u' && v;
            }
            (a = Me.support = {}),
                (h = Me.isXML =
                    function (v) {
                        var x = v && v.namespaceURI,
                            M = v && (v.ownerDocument || v).documentElement;
                        return !Vu.test(x || (M && M.nodeName) || 'HTML');
                    }),
                (D = Me.setDocument =
                    function (v) {
                        var x,
                            M,
                            B = v ? v.ownerDocument || v : pe;
                        return (
                            B == R ||
                                B.nodeType !== 9 ||
                                !B.documentElement ||
                                ((R = B),
                                (re = R.documentElement),
                                (he = !h(R)),
                                pe != R &&
                                    (M = R.defaultView) &&
                                    M.top !== M &&
                                    (M.addEventListener
                                        ? M.addEventListener('unload', us, !1)
                                        : M.attachEvent &&
                                          M.attachEvent('onunload', us)),
                                (a.scope = bt(function (I) {
                                    return (
                                        re
                                            .appendChild(I)
                                            .appendChild(
                                                R.createElement('div')
                                            ),
                                        typeof I.querySelectorAll < 'u' &&
                                            !I.querySelectorAll(
                                                ':scope fieldset div'
                                            ).length
                                    );
                                })),
                                (a.cssSupportsSelector = bt(function () {
                                    return (
                                        CSS.supports('selector(*)') &&
                                        R.querySelectorAll(':is(:jqfake)') &&
                                        !CSS.supports(
                                            'selector(:is(*,:jqfake))'
                                        )
                                    );
                                })),
                                (a.attributes = bt(function (I) {
                                    return (
                                        (I.className = 'i'),
                                        !I.getAttribute('className')
                                    );
                                })),
                                (a.getElementsByTagName = bt(function (I) {
                                    return (
                                        I.appendChild(R.createComment('')),
                                        !I.getElementsByTagName('*').length
                                    );
                                })),
                                (a.getElementsByClassName = nr.test(
                                    R.getElementsByClassName
                                )),
                                (a.getById = bt(function (I) {
                                    return (
                                        (re.appendChild(I).id = Oe),
                                        !R.getElementsByName ||
                                            !R.getElementsByName(Oe).length
                                    );
                                })),
                                a.getById
                                    ? ((l.filter.ID = function (I) {
                                          var $ = I.replace(Ut, Gt);
                                          return function (V) {
                                              return V.getAttribute('id') === $;
                                          };
                                      }),
                                      (l.find.ID = function (I, $) {
                                          if (
                                              typeof $.getElementById < 'u' &&
                                              he
                                          ) {
                                              var V = $.getElementById(I);
                                              return V ? [V] : [];
                                          }
                                      }))
                                    : ((l.filter.ID = function (I) {
                                          var $ = I.replace(Ut, Gt);
                                          return function (V) {
                                              var X =
                                                  typeof V.getAttributeNode <
                                                      'u' &&
                                                  V.getAttributeNode('id');
                                              return X && X.value === $;
                                          };
                                      }),
                                      (l.find.ID = function (I, $) {
                                          if (
                                              typeof $.getElementById < 'u' &&
                                              he
                                          ) {
                                              var V,
                                                  X,
                                                  Y,
                                                  ae = $.getElementById(I);
                                              if (ae) {
                                                  if (
                                                      ((V =
                                                          ae.getAttributeNode(
                                                              'id'
                                                          )),
                                                      V && V.value === I)
                                                  )
                                                      return [ae];
                                                  for (
                                                      Y =
                                                          $.getElementsByName(
                                                              I
                                                          ),
                                                          X = 0;
                                                      (ae = Y[X++]);

                                                  )
                                                      if (
                                                          ((V =
                                                              ae.getAttributeNode(
                                                                  'id'
                                                              )),
                                                          V && V.value === I)
                                                      )
                                                          return [ae];
                                              }
                                              return [];
                                          }
                                      })),
                                (l.find.TAG = a.getElementsByTagName
                                    ? function (I, $) {
                                          if (
                                              typeof $.getElementsByTagName <
                                              'u'
                                          )
                                              return $.getElementsByTagName(I);
                                          if (a.qsa)
                                              return $.querySelectorAll(I);
                                      }
                                    : function (I, $) {
                                          var V,
                                              X = [],
                                              Y = 0,
                                              ae = $.getElementsByTagName(I);
                                          if (I === '*') {
                                              for (; (V = ae[Y++]); )
                                                  V.nodeType === 1 && X.push(V);
                                              return X;
                                          }
                                          return ae;
                                      }),
                                (l.find.CLASS =
                                    a.getElementsByClassName &&
                                    function (I, $) {
                                        if (
                                            typeof $.getElementsByClassName <
                                                'u' &&
                                            he
                                        )
                                            return $.getElementsByClassName(I);
                                    }),
                                (We = []),
                                (ne = []),
                                (a.qsa = nr.test(R.querySelectorAll)) &&
                                    (bt(function (I) {
                                        var $;
                                        (re.appendChild(I).innerHTML =
                                            "<a id='" +
                                            Oe +
                                            "'></a><select id='" +
                                            Oe +
                                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                            I.querySelectorAll(
                                                "[msallowcapture^='']"
                                            ).length &&
                                                ne.push(
                                                    '[*^$]=' + xe + `*(?:''|"")`
                                                ),
                                            I.querySelectorAll('[selected]')
                                                .length ||
                                                ne.push(
                                                    '\\[' +
                                                        xe +
                                                        '*(?:value|' +
                                                        Ti +
                                                        ')'
                                                ),
                                            I.querySelectorAll(
                                                '[id~=' + Oe + '-]'
                                            ).length || ne.push('~='),
                                            ($ = R.createElement('input')),
                                            $.setAttribute('name', ''),
                                            I.appendChild($),
                                            I.querySelectorAll("[name='']")
                                                .length ||
                                                ne.push(
                                                    '\\[' +
                                                        xe +
                                                        '*name' +
                                                        xe +
                                                        '*=' +
                                                        xe +
                                                        `*(?:''|"")`
                                                ),
                                            I.querySelectorAll(':checked')
                                                .length || ne.push(':checked'),
                                            I.querySelectorAll('a#' + Oe + '+*')
                                                .length || ne.push('.#.+[+~]'),
                                            I.querySelectorAll('\\\f'),
                                            ne.push('[\\r\\n\\f]');
                                    }),
                                    bt(function (I) {
                                        I.innerHTML =
                                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                        var $ = R.createElement('input');
                                        $.setAttribute('type', 'hidden'),
                                            I.appendChild($).setAttribute(
                                                'name',
                                                'D'
                                            ),
                                            I.querySelectorAll('[name=d]')
                                                .length &&
                                                ne.push(
                                                    'name' + xe + '*[*^$|!~]?='
                                                ),
                                            I.querySelectorAll(':enabled')
                                                .length !== 2 &&
                                                ne.push(
                                                    ':enabled',
                                                    ':disabled'
                                                ),
                                            (re.appendChild(I).disabled = !0),
                                            I.querySelectorAll(':disabled')
                                                .length !== 2 &&
                                                ne.push(
                                                    ':enabled',
                                                    ':disabled'
                                                ),
                                            I.querySelectorAll('*,:x'),
                                            ne.push(',.*:');
                                    })),
                                (a.matchesSelector = nr.test(
                                    ($e =
                                        re.matches ||
                                        re.webkitMatchesSelector ||
                                        re.mozMatchesSelector ||
                                        re.oMatchesSelector ||
                                        re.msMatchesSelector)
                                )) &&
                                    bt(function (I) {
                                        (a.disconnectedMatch = $e.call(I, '*')),
                                            $e.call(I, "[s!='']:x"),
                                            We.push('!=', Ai);
                                    }),
                                a.cssSupportsSelector || ne.push(':has'),
                                (ne = ne.length && new RegExp(ne.join('|'))),
                                (We = We.length && new RegExp(We.join('|'))),
                                (x = nr.test(re.compareDocumentPosition)),
                                (pt =
                                    x || nr.test(re.contains)
                                        ? function (I, $) {
                                              var V =
                                                      (I.nodeType === 9 &&
                                                          I.documentElement) ||
                                                      I,
                                                  X = $ && $.parentNode;
                                              return (
                                                  I === X ||
                                                  !!(
                                                      X &&
                                                      X.nodeType === 1 &&
                                                      (V.contains
                                                          ? V.contains(X)
                                                          : I.compareDocumentPosition &&
                                                            I.compareDocumentPosition(
                                                                X
                                                            ) & 16)
                                                  )
                                              );
                                          }
                                        : function (I, $) {
                                              if ($) {
                                                  for (; ($ = $.parentNode); )
                                                      if ($ === I) return !0;
                                              }
                                              return !1;
                                          }),
                                (pn = x
                                    ? function (I, $) {
                                          if (I === $) return (W = !0), 0;
                                          var V =
                                              !I.compareDocumentPosition -
                                              !$.compareDocumentPosition;
                                          return (
                                              V ||
                                              ((V =
                                                  (I.ownerDocument || I) ==
                                                  ($.ownerDocument || $)
                                                      ? I.compareDocumentPosition(
                                                            $
                                                        )
                                                      : 1),
                                              V & 1 ||
                                              (!a.sortDetached &&
                                                  $.compareDocumentPosition(
                                                      I
                                                  ) === V)
                                                  ? I == R ||
                                                    (I.ownerDocument == pe &&
                                                        pt(pe, I))
                                                      ? -1
                                                      : $ == R ||
                                                          ($.ownerDocument ==
                                                              pe &&
                                                              pt(pe, $))
                                                        ? 1
                                                        : H
                                                          ? gn(H, I) - gn(H, $)
                                                          : 0
                                                  : V & 4
                                                    ? -1
                                                    : 1)
                                          );
                                      }
                                    : function (I, $) {
                                          if (I === $) return (W = !0), 0;
                                          var V,
                                              X = 0,
                                              Y = I.parentNode,
                                              ae = $.parentNode,
                                              oe = [I],
                                              fe = [$];
                                          if (!Y || !ae)
                                              return I == R
                                                  ? -1
                                                  : $ == R
                                                    ? 1
                                                    : Y
                                                      ? -1
                                                      : ae
                                                        ? 1
                                                        : H
                                                          ? gn(H, I) - gn(H, $)
                                                          : 0;
                                          if (Y === ae) return ls(I, $);
                                          for (V = I; (V = V.parentNode); )
                                              oe.unshift(V);
                                          for (V = $; (V = V.parentNode); )
                                              fe.unshift(V);
                                          for (; oe[X] === fe[X]; ) X++;
                                          return X
                                              ? ls(oe[X], fe[X])
                                              : oe[X] == pe
                                                ? -1
                                                : fe[X] == pe
                                                  ? 1
                                                  : 0;
                                      })),
                            R
                        );
                    }),
                (Me.matches = function (v, x) {
                    return Me(v, null, null, x);
                }),
                (Me.matchesSelector = function (v, x) {
                    if (
                        (D(v),
                        a.matchesSelector &&
                            he &&
                            !ht[x + ' '] &&
                            (!We || !We.test(x)) &&
                            (!ne || !ne.test(x)))
                    )
                        try {
                            var M = $e.call(v, x);
                            if (
                                M ||
                                a.disconnectedMatch ||
                                (v.document && v.document.nodeType !== 11)
                            )
                                return M;
                        } catch {
                            ht(x, !0);
                        }
                    return Me(x, R, null, [v]).length > 0;
                }),
                (Me.contains = function (v, x) {
                    return (v.ownerDocument || v) != R && D(v), pt(v, x);
                }),
                (Me.attr = function (v, x) {
                    (v.ownerDocument || v) != R && D(v);
                    var M = l.attrHandle[x.toLowerCase()],
                        B =
                            M && hn.call(l.attrHandle, x.toLowerCase())
                                ? M(v, x, !he)
                                : void 0;
                    return B !== void 0
                        ? B
                        : a.attributes || !he
                          ? v.getAttribute(x)
                          : (B = v.getAttributeNode(x)) && B.specified
                            ? B.value
                            : null;
                }),
                (Me.escape = function (v) {
                    return (v + '').replace(ss, as);
                }),
                (Me.error = function (v) {
                    throw new Error(
                        'Syntax error, unrecognized expression: ' + v
                    );
                }),
                (Me.uniqueSort = function (v) {
                    var x,
                        M = [],
                        B = 0,
                        I = 0;
                    if (
                        ((W = !a.detectDuplicates),
                        (H = !a.sortStable && v.slice(0)),
                        v.sort(pn),
                        W)
                    ) {
                        for (; (x = v[I++]); ) x === v[I] && (B = M.push(I));
                        for (; B--; ) v.splice(M[B], 1);
                    }
                    return (H = null), v;
                }),
                (p = Me.getText =
                    function (v) {
                        var x,
                            M = '',
                            B = 0,
                            I = v.nodeType;
                        if (I) {
                            if (I === 1 || I === 9 || I === 11) {
                                if (typeof v.textContent == 'string')
                                    return v.textContent;
                                for (v = v.firstChild; v; v = v.nextSibling)
                                    M += p(v);
                            } else if (I === 3 || I === 4) return v.nodeValue;
                        } else for (; (x = v[B++]); ) M += p(x);
                        return M;
                    }),
                (l = Me.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: Et,
                        match: Ar,
                        attrHandle: {},
                        find: {},
                        relative: {
                            '>': { dir: 'parentNode', first: !0 },
                            ' ': { dir: 'parentNode' },
                            '+': { dir: 'previousSibling', first: !0 },
                            '~': { dir: 'previousSibling' },
                        },
                        preFilter: {
                            ATTR: function (v) {
                                return (
                                    (v[1] = v[1].replace(Ut, Gt)),
                                    (v[3] = (
                                        v[3] ||
                                        v[4] ||
                                        v[5] ||
                                        ''
                                    ).replace(Ut, Gt)),
                                    v[2] === '~=' && (v[3] = ' ' + v[3] + ' '),
                                    v.slice(0, 4)
                                );
                            },
                            CHILD: function (v) {
                                return (
                                    (v[1] = v[1].toLowerCase()),
                                    v[1].slice(0, 3) === 'nth'
                                        ? (v[3] || Me.error(v[0]),
                                          (v[4] = +(v[4]
                                              ? v[5] + (v[6] || 1)
                                              : 2 *
                                                (v[3] === 'even' ||
                                                    v[3] === 'odd'))),
                                          (v[5] = +(
                                              v[7] + v[8] || v[3] === 'odd'
                                          )))
                                        : v[3] && Me.error(v[0]),
                                    v
                                );
                            },
                            PSEUDO: function (v) {
                                var x,
                                    M = !v[6] && v[2];
                                return Ar.CHILD.test(v[0])
                                    ? null
                                    : (v[3]
                                          ? (v[2] = v[4] || v[5] || '')
                                          : M &&
                                            qu.test(M) &&
                                            (x = _(M, !0)) &&
                                            (x =
                                                M.indexOf(')', M.length - x) -
                                                M.length) &&
                                            ((v[0] = v[0].slice(0, x)),
                                            (v[2] = M.slice(0, x))),
                                      v.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (v) {
                                var x = v.replace(Ut, Gt).toLowerCase();
                                return v === '*'
                                    ? function () {
                                          return !0;
                                      }
                                    : function (M) {
                                          return (
                                              M.nodeName &&
                                              M.nodeName.toLowerCase() === x
                                          );
                                      };
                            },
                            CLASS: function (v) {
                                var x = Fe[v + ' '];
                                return (
                                    x ||
                                    ((x = new RegExp(
                                        '(^|' + xe + ')' + v + '(' + xe + '|$)'
                                    )) &&
                                        Fe(v, function (M) {
                                            return x.test(
                                                (typeof M.className ==
                                                    'string' &&
                                                    M.className) ||
                                                    (typeof M.getAttribute <
                                                        'u' &&
                                                        M.getAttribute(
                                                            'class'
                                                        )) ||
                                                    ''
                                            );
                                        }))
                                );
                            },
                            ATTR: function (v, x, M) {
                                return function (B) {
                                    var I = Me.attr(B, v);
                                    return I == null
                                        ? x === '!='
                                        : x
                                          ? ((I += ''),
                                            x === '='
                                                ? I === M
                                                : x === '!='
                                                  ? I !== M
                                                  : x === '^='
                                                    ? M && I.indexOf(M) === 0
                                                    : x === '*='
                                                      ? M && I.indexOf(M) > -1
                                                      : x === '$='
                                                        ? M &&
                                                          I.slice(-M.length) ===
                                                              M
                                                        : x === '~='
                                                          ? (
                                                                ' ' +
                                                                I.replace(
                                                                    Ru,
                                                                    ' '
                                                                ) +
                                                                ' '
                                                            ).indexOf(M) > -1
                                                          : x === '|='
                                                            ? I === M ||
                                                              I.slice(
                                                                  0,
                                                                  M.length + 1
                                                              ) ===
                                                                  M + '-'
                                                            : !1)
                                          : !0;
                                };
                            },
                            CHILD: function (v, x, M, B, I) {
                                var $ = v.slice(0, 3) !== 'nth',
                                    V = v.slice(-4) !== 'last',
                                    X = x === 'of-type';
                                return B === 1 && I === 0
                                    ? function (Y) {
                                          return !!Y.parentNode;
                                      }
                                    : function (Y, ae, oe) {
                                          var fe,
                                              me,
                                              Pe,
                                              ue,
                                              Ve,
                                              Ze,
                                              gt =
                                                  $ !== V
                                                      ? 'nextSibling'
                                                      : 'previousSibling',
                                              Le = Y.parentNode,
                                              rr =
                                                  X && Y.nodeName.toLowerCase(),
                                              ir = !oe && !X,
                                              _t = !1;
                                          if (Le) {
                                              if ($) {
                                                  for (; gt; ) {
                                                      for (
                                                          ue = Y;
                                                          (ue = ue[gt]);

                                                      )
                                                          if (
                                                              X
                                                                  ? ue.nodeName.toLowerCase() ===
                                                                    rr
                                                                  : ue.nodeType ===
                                                                    1
                                                          )
                                                              return !1;
                                                      Ze = gt =
                                                          v === 'only' &&
                                                          !Ze &&
                                                          'nextSibling';
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((Ze = [
                                                      V
                                                          ? Le.firstChild
                                                          : Le.lastChild,
                                                  ]),
                                                  V && ir)
                                              ) {
                                                  for (
                                                      ue = Le,
                                                          Pe =
                                                              ue[Oe] ||
                                                              (ue[Oe] = {}),
                                                          me =
                                                              Pe[ue.uniqueID] ||
                                                              (Pe[ue.uniqueID] =
                                                                  {}),
                                                          fe = me[v] || [],
                                                          Ve =
                                                              fe[0] === ut &&
                                                              fe[1],
                                                          _t = Ve && fe[2],
                                                          ue =
                                                              Ve &&
                                                              Le.childNodes[Ve];
                                                      (ue =
                                                          (++Ve &&
                                                              ue &&
                                                              ue[gt]) ||
                                                          (_t = Ve = 0) ||
                                                          Ze.pop());

                                                  )
                                                      if (
                                                          ue.nodeType === 1 &&
                                                          ++_t &&
                                                          ue === Y
                                                      ) {
                                                          me[v] = [ut, Ve, _t];
                                                          break;
                                                      }
                                              } else if (
                                                  (ir &&
                                                      ((ue = Y),
                                                      (Pe =
                                                          ue[Oe] ||
                                                          (ue[Oe] = {})),
                                                      (me =
                                                          Pe[ue.uniqueID] ||
                                                          (Pe[ue.uniqueID] =
                                                              {})),
                                                      (fe = me[v] || []),
                                                      (Ve =
                                                          fe[0] === ut &&
                                                          fe[1]),
                                                      (_t = Ve)),
                                                  _t === !1)
                                              )
                                                  for (
                                                      ;
                                                      (ue =
                                                          (++Ve &&
                                                              ue &&
                                                              ue[gt]) ||
                                                          (_t = Ve = 0) ||
                                                          Ze.pop()) &&
                                                      !(
                                                          (X
                                                              ? ue.nodeName.toLowerCase() ===
                                                                rr
                                                              : ue.nodeType ===
                                                                1) &&
                                                          ++_t &&
                                                          (ir &&
                                                              ((Pe =
                                                                  ue[Oe] ||
                                                                  (ue[Oe] =
                                                                      {})),
                                                              (me =
                                                                  Pe[
                                                                      ue
                                                                          .uniqueID
                                                                  ] ||
                                                                  (Pe[
                                                                      ue.uniqueID
                                                                  ] = {})),
                                                              (me[v] = [
                                                                  ut,
                                                                  _t,
                                                              ])),
                                                          ue === Y)
                                                      );

                                                  );
                                              return (
                                                  (_t -= I),
                                                  _t === B ||
                                                      (_t % B === 0 &&
                                                          _t / B >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (v, x) {
                                var M,
                                    B =
                                        l.pseudos[v] ||
                                        l.setFilters[v.toLowerCase()] ||
                                        Me.error('unsupported pseudo: ' + v);
                                return B[Oe]
                                    ? B(x)
                                    : B.length > 1
                                      ? ((M = [v, v, '', x]),
                                        l.setFilters.hasOwnProperty(
                                            v.toLowerCase()
                                        )
                                            ? Et(function (I, $) {
                                                  for (
                                                      var V,
                                                          X = B(I, x),
                                                          Y = X.length;
                                                      Y--;

                                                  )
                                                      (V = gn(I, X[Y])),
                                                          (I[V] = !($[V] =
                                                              X[Y]));
                                              })
                                            : function (I) {
                                                  return B(I, 0, M);
                                              })
                                      : B;
                            },
                        },
                        pseudos: {
                            not: Et(function (v) {
                                var x = [],
                                    M = [],
                                    B = S(v.replace(Tr, '$1'));
                                return B[Oe]
                                    ? Et(function (I, $, V, X) {
                                          for (
                                              var Y,
                                                  ae = B(I, null, X, []),
                                                  oe = I.length;
                                              oe--;

                                          )
                                              (Y = ae[oe]) &&
                                                  (I[oe] = !($[oe] = Y));
                                      })
                                    : function (I, $, V) {
                                          return (
                                              (x[0] = I),
                                              B(x, null, V, M),
                                              (x[0] = null),
                                              !M.pop()
                                          );
                                      };
                            }),
                            has: Et(function (v) {
                                return function (x) {
                                    return Me(v, x).length > 0;
                                };
                            }),
                            contains: Et(function (v) {
                                return (
                                    (v = v.replace(Ut, Gt)),
                                    function (x) {
                                        return (
                                            (x.textContent || p(x)).indexOf(v) >
                                            -1
                                        );
                                    }
                                );
                            }),
                            lang: Et(function (v) {
                                return (
                                    Wu.test(v || '') ||
                                        Me.error('unsupported lang: ' + v),
                                    (v = v.replace(Ut, Gt).toLowerCase()),
                                    function (x) {
                                        var M;
                                        do
                                            if (
                                                (M = he
                                                    ? x.lang
                                                    : x.getAttribute(
                                                          'xml:lang'
                                                      ) ||
                                                      x.getAttribute('lang'))
                                            )
                                                return (
                                                    (M = M.toLowerCase()),
                                                    M === v ||
                                                        M.indexOf(v + '-') === 0
                                                );
                                        while (
                                            (x = x.parentNode) &&
                                            x.nodeType === 1
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (v) {
                                var x = t.location && t.location.hash;
                                return x && x.slice(1) === v.id;
                            },
                            root: function (v) {
                                return v === re;
                            },
                            focus: function (v) {
                                return (
                                    v === R.activeElement &&
                                    (!R.hasFocus || R.hasFocus()) &&
                                    !!(v.type || v.href || ~v.tabIndex)
                                );
                            },
                            enabled: fs(!1),
                            disabled: fs(!0),
                            checked: function (v) {
                                var x = v.nodeName.toLowerCase();
                                return (
                                    (x === 'input' && !!v.checked) ||
                                    (x === 'option' && !!v.selected)
                                );
                            },
                            selected: function (v) {
                                return (
                                    v.parentNode && v.parentNode.selectedIndex,
                                    v.selected === !0
                                );
                            },
                            empty: function (v) {
                                for (v = v.firstChild; v; v = v.nextSibling)
                                    if (v.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (v) {
                                return !l.pseudos.empty(v);
                            },
                            header: function (v) {
                                return Gu.test(v.nodeName);
                            },
                            input: function (v) {
                                return Uu.test(v.nodeName);
                            },
                            button: function (v) {
                                var x = v.nodeName.toLowerCase();
                                return (
                                    (x === 'input' && v.type === 'button') ||
                                    x === 'button'
                                );
                            },
                            text: function (v) {
                                var x;
                                return (
                                    v.nodeName.toLowerCase() === 'input' &&
                                    v.type === 'text' &&
                                    ((x = v.getAttribute('type')) == null ||
                                        x.toLowerCase() === 'text')
                                );
                            },
                            first: vn(function () {
                                return [0];
                            }),
                            last: vn(function (v, x) {
                                return [x - 1];
                            }),
                            eq: vn(function (v, x, M) {
                                return [M < 0 ? M + x : M];
                            }),
                            even: vn(function (v, x) {
                                for (var M = 0; M < x; M += 2) v.push(M);
                                return v;
                            }),
                            odd: vn(function (v, x) {
                                for (var M = 1; M < x; M += 2) v.push(M);
                                return v;
                            }),
                            lt: vn(function (v, x, M) {
                                for (
                                    var B = M < 0 ? M + x : M > x ? x : M;
                                    --B >= 0;

                                )
                                    v.push(B);
                                return v;
                            }),
                            gt: vn(function (v, x, M) {
                                for (var B = M < 0 ? M + x : M; ++B < x; )
                                    v.push(B);
                                return v;
                            }),
                        },
                    }),
                (l.pseudos.nth = l.pseudos.eq);
            for (i in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
            })
                l.pseudos[i] = zu(i);
            for (i in { submit: !0, reset: !0 }) l.pseudos[i] = Qu(i);
            function cs() {}
            (cs.prototype = l.filters = l.pseudos),
                (l.setFilters = new cs()),
                (_ = Me.tokenize =
                    function (v, x) {
                        var M,
                            B,
                            I,
                            $,
                            V,
                            X,
                            Y,
                            ae = tr[v + ' '];
                        if (ae) return x ? 0 : ae.slice(0);
                        for (V = v, X = [], Y = l.preFilter; V; ) {
                            (!M || (B = Bu.exec(V))) &&
                                (B && (V = V.slice(B[0].length) || V),
                                X.push((I = []))),
                                (M = !1),
                                (B = os.exec(V)) &&
                                    ((M = B.shift()),
                                    I.push({
                                        value: M,
                                        type: B[0].replace(Tr, ' '),
                                    }),
                                    (V = V.slice(M.length)));
                            for ($ in l.filter)
                                (B = Ar[$].exec(V)) &&
                                    (!Y[$] || (B = Y[$](B))) &&
                                    ((M = B.shift()),
                                    I.push({ value: M, type: $, matches: B }),
                                    (V = V.slice(M.length)));
                            if (!M) break;
                        }
                        return x
                            ? V.length
                            : V
                              ? Me.error(v)
                              : tr(v, X).slice(0);
                    });
            function Cr(v) {
                for (var x = 0, M = v.length, B = ''; x < M; x++)
                    B += v[x].value;
                return B;
            }
            function Er(v, x, M) {
                var B = x.dir,
                    I = x.next,
                    $ = I || B,
                    V = M && $ === 'parentNode',
                    X = be++;
                return x.first
                    ? function (Y, ae, oe) {
                          for (; (Y = Y[B]); )
                              if (Y.nodeType === 1 || V) return v(Y, ae, oe);
                          return !1;
                      }
                    : function (Y, ae, oe) {
                          var fe,
                              me,
                              Pe,
                              ue = [ut, X];
                          if (oe) {
                              for (; (Y = Y[B]); )
                                  if ((Y.nodeType === 1 || V) && v(Y, ae, oe))
                                      return !0;
                          } else
                              for (; (Y = Y[B]); )
                                  if (Y.nodeType === 1 || V)
                                      if (
                                          ((Pe = Y[Oe] || (Y[Oe] = {})),
                                          (me =
                                              Pe[Y.uniqueID] ||
                                              (Pe[Y.uniqueID] = {})),
                                          I && I === Y.nodeName.toLowerCase())
                                      )
                                          Y = Y[B] || Y;
                                      else {
                                          if (
                                              (fe = me[$]) &&
                                              fe[0] === ut &&
                                              fe[1] === X
                                          )
                                              return (ue[2] = fe[2]);
                                          if (
                                              ((me[$] = ue),
                                              (ue[2] = v(Y, ae, oe)))
                                          )
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function Oi(v) {
                return v.length > 1
                    ? function (x, M, B) {
                          for (var I = v.length; I--; )
                              if (!v[I](x, M, B)) return !1;
                          return !0;
                      }
                    : v[0];
            }
            function Yu(v, x, M) {
                for (var B = 0, I = x.length; B < I; B++) Me(v, x[B], M);
                return M;
            }
            function Or(v, x, M, B, I) {
                for (
                    var $, V = [], X = 0, Y = v.length, ae = x != null;
                    X < Y;
                    X++
                )
                    ($ = v[X]) &&
                        (!M || M($, B, I)) &&
                        (V.push($), ae && x.push(X));
                return V;
            }
            function Mi(v, x, M, B, I, $) {
                return (
                    B && !B[Oe] && (B = Mi(B)),
                    I && !I[Oe] && (I = Mi(I, $)),
                    Et(function (V, X, Y, ae) {
                        var oe,
                            fe,
                            me,
                            Pe = [],
                            ue = [],
                            Ve = X.length,
                            Ze = V || Yu(x || '*', Y.nodeType ? [Y] : Y, []),
                            gt = v && (V || !x) ? Or(Ze, Pe, v, Y, ae) : Ze,
                            Le = M ? (I || (V ? v : Ve || B) ? [] : X) : gt;
                        if ((M && M(gt, Le, Y, ae), B))
                            for (
                                oe = Or(Le, ue),
                                    B(oe, [], Y, ae),
                                    fe = oe.length;
                                fe--;

                            )
                                (me = oe[fe]) &&
                                    (Le[ue[fe]] = !(gt[ue[fe]] = me));
                        if (V) {
                            if (I || v) {
                                if (I) {
                                    for (oe = [], fe = Le.length; fe--; )
                                        (me = Le[fe]) && oe.push((gt[fe] = me));
                                    I(null, (Le = []), oe, ae);
                                }
                                for (fe = Le.length; fe--; )
                                    (me = Le[fe]) &&
                                        (oe = I ? gn(V, me) : Pe[fe]) > -1 &&
                                        (V[oe] = !(X[oe] = me));
                            }
                        } else
                            (Le = Or(Le === X ? Le.splice(Ve, Le.length) : Le)),
                                I ? I(null, X, Le, ae) : en.apply(X, Le);
                    })
                );
            }
            function Pi(v) {
                for (
                    var x,
                        M,
                        B,
                        I = v.length,
                        $ = l.relative[v[0].type],
                        V = $ || l.relative[' '],
                        X = $ ? 1 : 0,
                        Y = Er(
                            function (fe) {
                                return fe === x;
                            },
                            V,
                            !0
                        ),
                        ae = Er(
                            function (fe) {
                                return gn(x, fe) > -1;
                            },
                            V,
                            !0
                        ),
                        oe = [
                            function (fe, me, Pe) {
                                var ue =
                                    (!$ && (Pe || me !== k)) ||
                                    ((x = me).nodeType
                                        ? Y(fe, me, Pe)
                                        : ae(fe, me, Pe));
                                return (x = null), ue;
                            },
                        ];
                    X < I;
                    X++
                )
                    if ((M = l.relative[v[X].type])) oe = [Er(Oi(oe), M)];
                    else {
                        if (
                            ((M = l.filter[v[X].type].apply(
                                null,
                                v[X].matches
                            )),
                            M[Oe])
                        ) {
                            for (B = ++X; B < I && !l.relative[v[B].type]; B++);
                            return Mi(
                                X > 1 && Oi(oe),
                                X > 1 &&
                                    Cr(
                                        v
                                            .slice(0, X - 1)
                                            .concat({
                                                value:
                                                    v[X - 2].type === ' '
                                                        ? '*'
                                                        : '',
                                            })
                                    ).replace(Tr, '$1'),
                                M,
                                X < B && Pi(v.slice(X, B)),
                                B < I && Pi((v = v.slice(B))),
                                B < I && Cr(v)
                            );
                        }
                        oe.push(M);
                    }
                return Oi(oe);
            }
            function Ju(v, x) {
                var M = x.length > 0,
                    B = v.length > 0,
                    I = function ($, V, X, Y, ae) {
                        var oe,
                            fe,
                            me,
                            Pe = 0,
                            ue = '0',
                            Ve = $ && [],
                            Ze = [],
                            gt = k,
                            Le = $ || (B && l.find.TAG('*', ae)),
                            rr = (ut += gt == null ? 1 : Math.random() || 0.1),
                            ir = Le.length;
                        for (
                            ae && (k = V == R || V || ae);
                            ue !== ir && (oe = Le[ue]) != null;
                            ue++
                        ) {
                            if (B && oe) {
                                for (
                                    fe = 0,
                                        !V &&
                                            oe.ownerDocument != R &&
                                            (D(oe), (X = !he));
                                    (me = v[fe++]);

                                )
                                    if (me(oe, V || R, X)) {
                                        Y.push(oe);
                                        break;
                                    }
                                ae && (ut = rr);
                            }
                            M && ((oe = !me && oe) && Pe--, $ && Ve.push(oe));
                        }
                        if (((Pe += ue), M && ue !== Pe)) {
                            for (fe = 0; (me = x[fe++]); ) me(Ve, Ze, V, X);
                            if ($) {
                                if (Pe > 0)
                                    for (; ue--; )
                                        Ve[ue] ||
                                            Ze[ue] ||
                                            (Ze[ue] = Zt.call(Y));
                                Ze = Or(Ze);
                            }
                            en.apply(Y, Ze),
                                ae &&
                                    !$ &&
                                    Ze.length > 0 &&
                                    Pe + x.length > 1 &&
                                    Me.uniqueSort(Y);
                        }
                        return ae && ((ut = rr), (k = gt)), Ve;
                    };
                return M ? Et(I) : I;
            }
            return (
                (S = Me.compile =
                    function (v, x) {
                        var M,
                            B = [],
                            I = [],
                            $ = xr[v + ' '];
                        if (!$) {
                            for (x || (x = _(v)), M = x.length; M--; )
                                ($ = Pi(x[M])), $[Oe] ? B.push($) : I.push($);
                            ($ = xr(v, Ju(I, B))), ($.selector = v);
                        }
                        return $;
                    }),
                (w = Me.select =
                    function (v, x, M, B) {
                        var I,
                            $,
                            V,
                            X,
                            Y,
                            ae = typeof v == 'function' && v,
                            oe = !B && _((v = ae.selector || v));
                        if (((M = M || []), oe.length === 1)) {
                            if (
                                (($ = oe[0] = oe[0].slice(0)),
                                $.length > 2 &&
                                    (V = $[0]).type === 'ID' &&
                                    x.nodeType === 9 &&
                                    he &&
                                    l.relative[$[1].type])
                            ) {
                                if (
                                    ((x = (l.find.ID(
                                        V.matches[0].replace(Ut, Gt),
                                        x
                                    ) || [])[0]),
                                    x)
                                )
                                    ae && (x = x.parentNode);
                                else return M;
                                v = v.slice($.shift().value.length);
                            }
                            for (
                                I = Ar.needsContext.test(v) ? 0 : $.length;
                                I-- && ((V = $[I]), !l.relative[(X = V.type)]);

                            )
                                if (
                                    (Y = l.find[X]) &&
                                    (B = Y(
                                        V.matches[0].replace(Ut, Gt),
                                        (Si.test($[0].type) &&
                                            Ei(x.parentNode)) ||
                                            x
                                    ))
                                ) {
                                    if (
                                        ($.splice(I, 1),
                                        (v = B.length && Cr($)),
                                        !v)
                                    )
                                        return en.apply(M, B), M;
                                    break;
                                }
                        }
                        return (
                            (ae || S(v, oe))(
                                B,
                                x,
                                !he,
                                M,
                                !x || (Si.test(v) && Ei(x.parentNode)) || x
                            ),
                            M
                        );
                    }),
                (a.sortStable = Oe.split('').sort(pn).join('') === Oe),
                (a.detectDuplicates = !!W),
                D(),
                (a.sortDetached = bt(function (v) {
                    return (
                        v.compareDocumentPosition(R.createElement('fieldset')) &
                        1
                    );
                })),
                bt(function (v) {
                    return (
                        (v.innerHTML = "<a href='#'></a>"),
                        v.firstChild.getAttribute('href') === '#'
                    );
                }) ||
                    Ci('type|href|height|width', function (v, x, M) {
                        if (!M)
                            return v.getAttribute(
                                x,
                                x.toLowerCase() === 'type' ? 1 : 2
                            );
                    }),
                (!a.attributes ||
                    !bt(function (v) {
                        return (
                            (v.innerHTML = '<input/>'),
                            v.firstChild.setAttribute('value', ''),
                            v.firstChild.getAttribute('value') === ''
                        );
                    })) &&
                    Ci('value', function (v, x, M) {
                        if (!M && v.nodeName.toLowerCase() === 'input')
                            return v.defaultValue;
                    }),
                bt(function (v) {
                    return v.getAttribute('disabled') == null;
                }) ||
                    Ci(Ti, function (v, x, M) {
                        var B;
                        if (!M)
                            return v[x] === !0
                                ? x.toLowerCase()
                                : (B = v.getAttributeNode(x)) && B.specified
                                  ? B.value
                                  : null;
                    }),
                Me
            );
        })(n);
        (f.find = de),
            (f.expr = de.selectors),
            (f.expr[':'] = f.expr.pseudos),
            (f.uniqueSort = f.unique = de.uniqueSort),
            (f.text = de.getText),
            (f.isXMLDoc = de.isXML),
            (f.contains = de.contains),
            (f.escapeSelector = de.escape);
        var le = function (t, i, a) {
                for (
                    var l = [], p = a !== void 0;
                    (t = t[i]) && t.nodeType !== 9;

                )
                    if (t.nodeType === 1) {
                        if (p && f(t).is(a)) break;
                        l.push(t);
                    }
                return l;
            },
            Se = function (t, i) {
                for (var a = []; t; t = t.nextSibling)
                    t.nodeType === 1 && t !== i && a.push(t);
                return a;
            },
            qe = f.expr.match.needsContext;
        function ke(t, i) {
            return t.nodeName && t.nodeName.toLowerCase() === i.toLowerCase();
        }
        var nt =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function Qe(t, i, a) {
            return E(i)
                ? f.grep(t, function (l, p) {
                      return !!i.call(l, p, l) !== a;
                  })
                : i.nodeType
                  ? f.grep(t, function (l) {
                        return (l === i) !== a;
                    })
                  : typeof i != 'string'
                    ? f.grep(t, function (l) {
                          return b.call(i, l) > -1 !== a;
                      })
                    : f.filter(i, t, a);
        }
        (f.filter = function (t, i, a) {
            var l = i[0];
            return (
                a && (t = ':not(' + t + ')'),
                i.length === 1 && l.nodeType === 1
                    ? f.find.matchesSelector(l, t)
                        ? [l]
                        : []
                    : f.find.matches(
                          t,
                          f.grep(i, function (p) {
                              return p.nodeType === 1;
                          })
                      )
            );
        }),
            f.fn.extend({
                find: function (t) {
                    var i,
                        a,
                        l = this.length,
                        p = this;
                    if (typeof t != 'string')
                        return this.pushStack(
                            f(t).filter(function () {
                                for (i = 0; i < l; i++)
                                    if (f.contains(p[i], this)) return !0;
                            })
                        );
                    for (a = this.pushStack([]), i = 0; i < l; i++)
                        f.find(t, p[i], a);
                    return l > 1 ? f.uniqueSort(a) : a;
                },
                filter: function (t) {
                    return this.pushStack(Qe(this, t || [], !1));
                },
                not: function (t) {
                    return this.pushStack(Qe(this, t || [], !0));
                },
                is: function (t) {
                    return !!Qe(
                        this,
                        typeof t == 'string' && qe.test(t) ? f(t) : t || [],
                        !1
                    ).length;
                },
            });
        var un,
            Xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Ne = (f.fn.init = function (t, i, a) {
                var l, p;
                if (!t) return this;
                if (((a = a || un), typeof t == 'string'))
                    if (
                        (t[0] === '<' &&
                        t[t.length - 1] === '>' &&
                        t.length >= 3
                            ? (l = [null, t, null])
                            : (l = Xe.exec(t)),
                        l && (l[1] || !i))
                    )
                        if (l[1]) {
                            if (
                                ((i = i instanceof f ? i[0] : i),
                                f.merge(
                                    this,
                                    f.parseHTML(
                                        l[1],
                                        i && i.nodeType
                                            ? i.ownerDocument || i
                                            : O,
                                        !0
                                    )
                                ),
                                nt.test(l[1]) && f.isPlainObject(i))
                            )
                                for (l in i)
                                    E(this[l])
                                        ? this[l](i[l])
                                        : this.attr(l, i[l]);
                            return this;
                        } else
                            return (
                                (p = O.getElementById(l[2])),
                                p && ((this[0] = p), (this.length = 1)),
                                this
                            );
                    else
                        return !i || i.jquery
                            ? (i || a).find(t)
                            : this.constructor(i).find(t);
                else {
                    if (t.nodeType)
                        return (this[0] = t), (this.length = 1), this;
                    if (E(t)) return a.ready !== void 0 ? a.ready(t) : t(f);
                }
                return f.makeArray(t, this);
            });
        (Ne.prototype = f.fn), (un = f(O));
        var Ce = /^(?:parents|prev(?:Until|All))/,
            qt = { children: !0, contents: !0, next: !0, prev: !0 };
        f.fn.extend({
            has: function (t) {
                var i = f(t, this),
                    a = i.length;
                return this.filter(function () {
                    for (var l = 0; l < a; l++)
                        if (f.contains(this, i[l])) return !0;
                });
            },
            closest: function (t, i) {
                var a,
                    l = 0,
                    p = this.length,
                    h = [],
                    _ = typeof t != 'string' && f(t);
                if (!qe.test(t)) {
                    for (; l < p; l++)
                        for (a = this[l]; a && a !== i; a = a.parentNode)
                            if (
                                a.nodeType < 11 &&
                                (_
                                    ? _.index(a) > -1
                                    : a.nodeType === 1 &&
                                      f.find.matchesSelector(a, t))
                            ) {
                                h.push(a);
                                break;
                            }
                }
                return this.pushStack(h.length > 1 ? f.uniqueSort(h) : h);
            },
            index: function (t) {
                return t
                    ? typeof t == 'string'
                        ? b.call(f(t), this[0])
                        : b.call(this, t.jquery ? t[0] : t)
                    : this[0] && this[0].parentNode
                      ? this.first().prevAll().length
                      : -1;
            },
            add: function (t, i) {
                return this.pushStack(
                    f.uniqueSort(f.merge(this.get(), f(t, i)))
                );
            },
            addBack: function (t) {
                return this.add(
                    t == null ? this.prevObject : this.prevObject.filter(t)
                );
            },
        });
        function ln(t, i) {
            for (; (t = t[i]) && t.nodeType !== 1; );
            return t;
        }
        f.each(
            {
                parent: function (t) {
                    var i = t.parentNode;
                    return i && i.nodeType !== 11 ? i : null;
                },
                parents: function (t) {
                    return le(t, 'parentNode');
                },
                parentsUntil: function (t, i, a) {
                    return le(t, 'parentNode', a);
                },
                next: function (t) {
                    return ln(t, 'nextSibling');
                },
                prev: function (t) {
                    return ln(t, 'previousSibling');
                },
                nextAll: function (t) {
                    return le(t, 'nextSibling');
                },
                prevAll: function (t) {
                    return le(t, 'previousSibling');
                },
                nextUntil: function (t, i, a) {
                    return le(t, 'nextSibling', a);
                },
                prevUntil: function (t, i, a) {
                    return le(t, 'previousSibling', a);
                },
                siblings: function (t) {
                    return Se((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return Se(t.firstChild);
                },
                contents: function (t) {
                    return t.contentDocument != null && u(t.contentDocument)
                        ? t.contentDocument
                        : (ke(t, 'template') && (t = t.content || t),
                          f.merge([], t.childNodes));
                },
            },
            function (t, i) {
                f.fn[t] = function (a, l) {
                    var p = f.map(this, i, a);
                    return (
                        t.slice(-5) !== 'Until' && (l = a),
                        l && typeof l == 'string' && (p = f.filter(l, p)),
                        this.length > 1 &&
                            (qt[t] || f.uniqueSort(p),
                            Ce.test(t) && p.reverse()),
                        this.pushStack(p)
                    );
                };
            }
        );
        var Ge = /[^\x20\t\r\n\f]+/g;
        function mt(t) {
            var i = {};
            return (
                f.each(t.match(Ge) || [], function (a, l) {
                    i[l] = !0;
                }),
                i
            );
        }
        f.Callbacks = function (t) {
            t = typeof t == 'string' ? mt(t) : f.extend({}, t);
            var i,
                a,
                l,
                p,
                h = [],
                _ = [],
                S = -1,
                w = function () {
                    for (p = p || t.once, l = i = !0; _.length; S = -1)
                        for (a = _.shift(); ++S < h.length; )
                            h[S].apply(a[0], a[1]) === !1 &&
                                t.stopOnFalse &&
                                ((S = h.length), (a = !1));
                    t.memory || (a = !1),
                        (i = !1),
                        p && (a ? (h = []) : (h = ''));
                },
                k = {
                    add: function () {
                        return (
                            h &&
                                (a && !i && ((S = h.length - 1), _.push(a)),
                                (function H(W) {
                                    f.each(W, function (D, R) {
                                        E(R)
                                            ? (!t.unique || !k.has(R)) &&
                                              h.push(R)
                                            : R &&
                                              R.length &&
                                              ce(R) !== 'string' &&
                                              H(R);
                                    });
                                })(arguments),
                                a && !i && w()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            f.each(arguments, function (H, W) {
                                for (var D; (D = f.inArray(W, h, D)) > -1; )
                                    h.splice(D, 1), D <= S && S--;
                            }),
                            this
                        );
                    },
                    has: function (H) {
                        return H ? f.inArray(H, h) > -1 : h.length > 0;
                    },
                    empty: function () {
                        return h && (h = []), this;
                    },
                    disable: function () {
                        return (p = _ = []), (h = a = ''), this;
                    },
                    disabled: function () {
                        return !h;
                    },
                    lock: function () {
                        return (p = _ = []), !a && !i && (h = a = ''), this;
                    },
                    locked: function () {
                        return !!p;
                    },
                    fireWith: function (H, W) {
                        return (
                            p ||
                                ((W = W || []),
                                (W = [H, W.slice ? W.slice() : W]),
                                _.push(W),
                                i || w()),
                            this
                        );
                    },
                    fire: function () {
                        return k.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!l;
                    },
                };
            return k;
        };
        function Wt(t) {
            return t;
        }
        function On(t) {
            throw t;
        }
        function vr(t, i, a, l) {
            var p;
            try {
                t && E((p = t.promise))
                    ? p.call(t).done(i).fail(a)
                    : t && E((p = t.then))
                      ? p.call(t, i, a)
                      : i.apply(void 0, [t].slice(l));
            } catch (h) {
                a.apply(void 0, [h]);
            }
        }
        f.extend({
            Deferred: function (t) {
                var i = [
                        [
                            'notify',
                            'progress',
                            f.Callbacks('memory'),
                            f.Callbacks('memory'),
                            2,
                        ],
                        [
                            'resolve',
                            'done',
                            f.Callbacks('once memory'),
                            f.Callbacks('once memory'),
                            0,
                            'resolved',
                        ],
                        [
                            'reject',
                            'fail',
                            f.Callbacks('once memory'),
                            f.Callbacks('once memory'),
                            1,
                            'rejected',
                        ],
                    ],
                    a = 'pending',
                    l = {
                        state: function () {
                            return a;
                        },
                        always: function () {
                            return p.done(arguments).fail(arguments), this;
                        },
                        catch: function (h) {
                            return l.then(null, h);
                        },
                        pipe: function () {
                            var h = arguments;
                            return f
                                .Deferred(function (_) {
                                    f.each(i, function (S, w) {
                                        var k = E(h[w[4]]) && h[w[4]];
                                        p[w[1]](function () {
                                            var H =
                                                k && k.apply(this, arguments);
                                            H && E(H.promise)
                                                ? H.promise()
                                                      .progress(_.notify)
                                                      .done(_.resolve)
                                                      .fail(_.reject)
                                                : _[w[0] + 'With'](
                                                      this,
                                                      k ? [H] : arguments
                                                  );
                                        });
                                    }),
                                        (h = null);
                                })
                                .promise();
                        },
                        then: function (h, _, S) {
                            var w = 0;
                            function k(H, W, D, R) {
                                return function () {
                                    var re = this,
                                        he = arguments,
                                        ne = function () {
                                            var $e, pt;
                                            if (!(H < w)) {
                                                if (
                                                    (($e = D.apply(re, he)),
                                                    $e === W.promise())
                                                )
                                                    throw new TypeError(
                                                        'Thenable self-resolution'
                                                    );
                                                (pt =
                                                    $e &&
                                                    (typeof $e == 'object' ||
                                                        typeof $e ==
                                                            'function') &&
                                                    $e.then),
                                                    E(pt)
                                                        ? R
                                                            ? pt.call(
                                                                  $e,
                                                                  k(
                                                                      w,
                                                                      W,
                                                                      Wt,
                                                                      R
                                                                  ),
                                                                  k(w, W, On, R)
                                                              )
                                                            : (w++,
                                                              pt.call(
                                                                  $e,
                                                                  k(
                                                                      w,
                                                                      W,
                                                                      Wt,
                                                                      R
                                                                  ),
                                                                  k(
                                                                      w,
                                                                      W,
                                                                      On,
                                                                      R
                                                                  ),
                                                                  k(
                                                                      w,
                                                                      W,
                                                                      Wt,
                                                                      W.notifyWith
                                                                  )
                                                              ))
                                                        : (D !== Wt &&
                                                              ((re = void 0),
                                                              (he = [$e])),
                                                          (R || W.resolveWith)(
                                                              re,
                                                              he
                                                          ));
                                            }
                                        },
                                        We = R
                                            ? ne
                                            : function () {
                                                  try {
                                                      ne();
                                                  } catch ($e) {
                                                      f.Deferred
                                                          .exceptionHook &&
                                                          f.Deferred.exceptionHook(
                                                              $e,
                                                              We.stackTrace
                                                          ),
                                                          H + 1 >= w &&
                                                              (D !== On &&
                                                                  ((re =
                                                                      void 0),
                                                                  (he = [$e])),
                                                              W.rejectWith(
                                                                  re,
                                                                  he
                                                              ));
                                                  }
                                              };
                                    H
                                        ? We()
                                        : (f.Deferred.getStackHook &&
                                              (We.stackTrace =
                                                  f.Deferred.getStackHook()),
                                          n.setTimeout(We));
                                };
                            }
                            return f
                                .Deferred(function (H) {
                                    i[0][3].add(
                                        k(0, H, E(S) ? S : Wt, H.notifyWith)
                                    ),
                                        i[1][3].add(k(0, H, E(h) ? h : Wt)),
                                        i[2][3].add(k(0, H, E(_) ? _ : On));
                                })
                                .promise();
                        },
                        promise: function (h) {
                            return h != null ? f.extend(h, l) : l;
                        },
                    },
                    p = {};
                return (
                    f.each(i, function (h, _) {
                        var S = _[2],
                            w = _[5];
                        (l[_[1]] = S.add),
                            w &&
                                S.add(
                                    function () {
                                        a = w;
                                    },
                                    i[3 - h][2].disable,
                                    i[3 - h][3].disable,
                                    i[0][2].lock,
                                    i[0][3].lock
                                ),
                            S.add(_[3].fire),
                            (p[_[0]] = function () {
                                return (
                                    p[_[0] + 'With'](
                                        this === p ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (p[_[0] + 'With'] = S.fireWith);
                    }),
                    l.promise(p),
                    t && t.call(p, p),
                    p
                );
            },
            when: function (t) {
                var i = arguments.length,
                    a = i,
                    l = Array(a),
                    p = c.call(arguments),
                    h = f.Deferred(),
                    _ = function (S) {
                        return function (w) {
                            (l[S] = this),
                                (p[S] =
                                    arguments.length > 1
                                        ? c.call(arguments)
                                        : w),
                                --i || h.resolveWith(l, p);
                        };
                    };
                if (
                    i <= 1 &&
                    (vr(t, h.done(_(a)).resolve, h.reject, !i),
                    h.state() === 'pending' || E(p[a] && p[a].then))
                )
                    return h.then();
                for (; a--; ) vr(p[a], _(a), h.reject);
                return h.promise();
            },
        });
        var At = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (f.Deferred.exceptionHook = function (t, i) {
            n.console &&
                n.console.warn &&
                t &&
                At.test(t.name) &&
                n.console.warn(
                    'jQuery.Deferred exception: ' + t.message,
                    t.stack,
                    i
                );
        }),
            (f.readyException = function (t) {
                n.setTimeout(function () {
                    throw t;
                });
            });
        var Yt = f.Deferred();
        (f.fn.ready = function (t) {
            return (
                Yt.then(t).catch(function (i) {
                    f.readyException(i);
                }),
                this
            );
        }),
            f.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                    (t === !0 ? --f.readyWait : f.isReady) ||
                        ((f.isReady = !0),
                        !(t !== !0 && --f.readyWait > 0) &&
                            Yt.resolveWith(O, [f]));
                },
            }),
            (f.ready.then = Yt.then);
        function fn() {
            O.removeEventListener('DOMContentLoaded', fn),
                n.removeEventListener('load', fn),
                f.ready();
        }
        O.readyState === 'complete' ||
        (O.readyState !== 'loading' && !O.documentElement.doScroll)
            ? n.setTimeout(f.ready)
            : (O.addEventListener('DOMContentLoaded', fn),
              n.addEventListener('load', fn));
        var Ye = function (t, i, a, l, p, h, _) {
                var S = 0,
                    w = t.length,
                    k = a == null;
                if (ce(a) === 'object') {
                    p = !0;
                    for (S in a) Ye(t, i, S, a[S], !0, h, _);
                } else if (
                    l !== void 0 &&
                    ((p = !0),
                    E(l) || (_ = !0),
                    k &&
                        (_
                            ? (i.call(t, l), (i = null))
                            : ((k = i),
                              (i = function (H, W, D) {
                                  return k.call(f(H), D);
                              }))),
                    i)
                )
                    for (; S < w; S++)
                        i(t[S], a, _ ? l : l.call(t[S], S, i(t[S], a)));
                return p ? t : k ? i.call(t) : w ? i(t[0], a) : h;
            },
            Xn = /^-ms-/,
            zn = /-([a-z])/g;
        function C(t, i) {
            return i.toUpperCase();
        }
        function P(t) {
            return t.replace(Xn, 'ms-').replace(zn, C);
        }
        var F = function (t) {
            return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType;
        };
        function q() {
            this.expando = f.expando + q.uid++;
        }
        (q.uid = 1),
            (q.prototype = {
                cache: function (t) {
                    var i = t[this.expando];
                    return (
                        i ||
                            ((i = {}),
                            F(t) &&
                                (t.nodeType
                                    ? (t[this.expando] = i)
                                    : Object.defineProperty(t, this.expando, {
                                          value: i,
                                          configurable: !0,
                                      }))),
                        i
                    );
                },
                set: function (t, i, a) {
                    var l,
                        p = this.cache(t);
                    if (typeof i == 'string') p[P(i)] = a;
                    else for (l in i) p[P(l)] = i[l];
                    return p;
                },
                get: function (t, i) {
                    return i === void 0
                        ? this.cache(t)
                        : t[this.expando] && t[this.expando][P(i)];
                },
                access: function (t, i, a) {
                    return i === void 0 ||
                        (i && typeof i == 'string' && a === void 0)
                        ? this.get(t, i)
                        : (this.set(t, i, a), a !== void 0 ? a : i);
                },
                remove: function (t, i) {
                    var a,
                        l = t[this.expando];
                    if (l !== void 0) {
                        if (i !== void 0)
                            for (
                                Array.isArray(i)
                                    ? (i = i.map(P))
                                    : ((i = P(i)),
                                      (i = (i in l) ? [i] : i.match(Ge) || [])),
                                    a = i.length;
                                a--;

                            )
                                delete l[i[a]];
                        (i === void 0 || f.isEmptyObject(l)) &&
                            (t.nodeType
                                ? (t[this.expando] = void 0)
                                : delete t[this.expando]);
                    }
                },
                hasData: function (t) {
                    var i = t[this.expando];
                    return i !== void 0 && !f.isEmptyObject(i);
                },
            });
        var L = new q(),
            U = new q(),
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            K = /[A-Z]/g;
        function z(t) {
            return t === 'true'
                ? !0
                : t === 'false'
                  ? !1
                  : t === 'null'
                    ? null
                    : t === +t + ''
                      ? +t
                      : J.test(t)
                        ? JSON.parse(t)
                        : t;
        }
        function G(t, i, a) {
            var l;
            if (a === void 0 && t.nodeType === 1)
                if (
                    ((l = 'data-' + i.replace(K, '-$&').toLowerCase()),
                    (a = t.getAttribute(l)),
                    typeof a == 'string')
                ) {
                    try {
                        a = z(a);
                    } catch {}
                    U.set(t, i, a);
                } else a = void 0;
            return a;
        }
        f.extend({
            hasData: function (t) {
                return U.hasData(t) || L.hasData(t);
            },
            data: function (t, i, a) {
                return U.access(t, i, a);
            },
            removeData: function (t, i) {
                U.remove(t, i);
            },
            _data: function (t, i, a) {
                return L.access(t, i, a);
            },
            _removeData: function (t, i) {
                L.remove(t, i);
            },
        }),
            f.fn.extend({
                data: function (t, i) {
                    var a,
                        l,
                        p,
                        h = this[0],
                        _ = h && h.attributes;
                    if (t === void 0) {
                        if (
                            this.length &&
                            ((p = U.get(h)),
                            h.nodeType === 1 && !L.get(h, 'hasDataAttrs'))
                        ) {
                            for (a = _.length; a--; )
                                _[a] &&
                                    ((l = _[a].name),
                                    l.indexOf('data-') === 0 &&
                                        ((l = P(l.slice(5))), G(h, l, p[l])));
                            L.set(h, 'hasDataAttrs', !0);
                        }
                        return p;
                    }
                    return typeof t == 'object'
                        ? this.each(function () {
                              U.set(this, t);
                          })
                        : Ye(
                              this,
                              function (S) {
                                  var w;
                                  if (h && S === void 0)
                                      return (
                                          (w = U.get(h, t)),
                                          w !== void 0 ||
                                          ((w = G(h, t)), w !== void 0)
                                              ? w
                                              : void 0
                                      );
                                  this.each(function () {
                                      U.set(this, t, S);
                                  });
                              },
                              null,
                              i,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (t) {
                    return this.each(function () {
                        U.remove(this, t);
                    });
                },
            }),
            f.extend({
                queue: function (t, i, a) {
                    var l;
                    if (t)
                        return (
                            (i = (i || 'fx') + 'queue'),
                            (l = L.get(t, i)),
                            a &&
                                (!l || Array.isArray(a)
                                    ? (l = L.access(t, i, f.makeArray(a)))
                                    : l.push(a)),
                            l || []
                        );
                },
                dequeue: function (t, i) {
                    i = i || 'fx';
                    var a = f.queue(t, i),
                        l = a.length,
                        p = a.shift(),
                        h = f._queueHooks(t, i),
                        _ = function () {
                            f.dequeue(t, i);
                        };
                    p === 'inprogress' && ((p = a.shift()), l--),
                        p &&
                            (i === 'fx' && a.unshift('inprogress'),
                            delete h.stop,
                            p.call(t, _, h)),
                        !l && h && h.empty.fire();
                },
                _queueHooks: function (t, i) {
                    var a = i + 'queueHooks';
                    return (
                        L.get(t, a) ||
                        L.access(t, a, {
                            empty: f.Callbacks('once memory').add(function () {
                                L.remove(t, [i + 'queue', a]);
                            }),
                        })
                    );
                },
            }),
            f.fn.extend({
                queue: function (t, i) {
                    var a = 2;
                    return (
                        typeof t != 'string' && ((i = t), (t = 'fx'), a--),
                        arguments.length < a
                            ? f.queue(this[0], t)
                            : i === void 0
                              ? this
                              : this.each(function () {
                                    var l = f.queue(this, t, i);
                                    f._queueHooks(this, t),
                                        t === 'fx' &&
                                            l[0] !== 'inprogress' &&
                                            f.dequeue(this, t);
                                })
                    );
                },
                dequeue: function (t) {
                    return this.each(function () {
                        f.dequeue(this, t);
                    });
                },
                clearQueue: function (t) {
                    return this.queue(t || 'fx', []);
                },
                promise: function (t, i) {
                    var a,
                        l = 1,
                        p = f.Deferred(),
                        h = this,
                        _ = this.length,
                        S = function () {
                            --l || p.resolveWith(h, [h]);
                        };
                    for (
                        typeof t != 'string' && ((i = t), (t = void 0)),
                            t = t || 'fx';
                        _--;

                    )
                        (a = L.get(h[_], t + 'queueHooks')),
                            a && a.empty && (l++, a.empty.add(S));
                    return S(), p.promise(i);
                },
            });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp('^(?:([+-])=|)(' + ie + ')([a-z%]*)$', 'i'),
            te = ['Top', 'Right', 'Bottom', 'Left'],
            se = O.documentElement,
            ge = function (t) {
                return f.contains(t.ownerDocument, t);
            },
            Ee = { composed: !0 };
        se.getRootNode &&
            (ge = function (t) {
                return (
                    f.contains(t.ownerDocument, t) ||
                    t.getRootNode(Ee) === t.ownerDocument
                );
            });
        var ye = function (t, i) {
            return (
                (t = i || t),
                t.style.display === 'none' ||
                    (t.style.display === '' &&
                        ge(t) &&
                        f.css(t, 'display') === 'none')
            );
        };
        function He(t, i, a, l) {
            var p,
                h,
                _ = 20,
                S = l
                    ? function () {
                          return l.cur();
                      }
                    : function () {
                          return f.css(t, i, '');
                      },
                w = S(),
                k = (a && a[3]) || (f.cssNumber[i] ? '' : 'px'),
                H =
                    t.nodeType &&
                    (f.cssNumber[i] || (k !== 'px' && +w)) &&
                    ee.exec(f.css(t, i));
            if (H && H[3] !== k) {
                for (w = w / 2, k = k || H[3], H = +w || 1; _--; )
                    f.style(t, i, H + k),
                        (1 - h) * (1 - (h = S() / w || 0.5)) <= 0 && (_ = 0),
                        (H = H / h);
                (H = H * 2), f.style(t, i, H + k), (a = a || []);
            }
            return (
                a &&
                    ((H = +H || +w || 0),
                    (p = a[1] ? H + (a[1] + 1) * a[2] : +a[2]),
                    l && ((l.unit = k), (l.start = H), (l.end = p))),
                p
            );
        }
        var st = {};
        function Jt(t) {
            var i,
                a = t.ownerDocument,
                l = t.nodeName,
                p = st[l];
            return (
                p ||
                ((i = a.body.appendChild(a.createElement(l))),
                (p = f.css(i, 'display')),
                i.parentNode.removeChild(i),
                p === 'none' && (p = 'block'),
                (st[l] = p),
                p)
            );
        }
        function Vt(t, i) {
            for (var a, l, p = [], h = 0, _ = t.length; h < _; h++)
                (l = t[h]),
                    l.style &&
                        ((a = l.style.display),
                        i
                            ? (a === 'none' &&
                                  ((p[h] = L.get(l, 'display') || null),
                                  p[h] || (l.style.display = '')),
                              l.style.display === '' && ye(l) && (p[h] = Jt(l)))
                            : a !== 'none' &&
                              ((p[h] = 'none'), L.set(l, 'display', a)));
            for (h = 0; h < _; h++) p[h] != null && (t[h].style.display = p[h]);
            return t;
        }
        f.fn.extend({
            show: function () {
                return Vt(this, !0);
            },
            hide: function () {
                return Vt(this);
            },
            toggle: function (t) {
                return typeof t == 'boolean'
                    ? t
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          ye(this) ? f(this).show() : f(this).hide();
                      });
            },
        });
        var St = /^(?:checkbox|radio)$/i,
            Qn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Je = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var t = O.createDocumentFragment(),
                i = t.appendChild(O.createElement('div')),
                a = O.createElement('input');
            a.setAttribute('type', 'radio'),
                a.setAttribute('checked', 'checked'),
                a.setAttribute('name', 't'),
                i.appendChild(a),
                (T.checkClone = i
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (i.innerHTML = '<textarea>x</textarea>'),
                (T.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue),
                (i.innerHTML = '<option></option>'),
                (T.option = !!i.lastChild);
        })();
        var je = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
        };
        (je.tbody = je.tfoot = je.colgroup = je.caption = je.thead),
            (je.th = je.td),
            T.option ||
                (je.optgroup = je.option =
                    [1, "<select multiple='multiple'>", '</select>']);
        function ze(t, i) {
            var a;
            return (
                typeof t.getElementsByTagName < 'u'
                    ? (a = t.getElementsByTagName(i || '*'))
                    : typeof t.querySelectorAll < 'u'
                      ? (a = t.querySelectorAll(i || '*'))
                      : (a = []),
                i === void 0 || (i && ke(t, i)) ? f.merge([t], a) : a
            );
        }
        function li(t, i) {
            for (var a = 0, l = t.length; a < l; a++)
                L.set(t[a], 'globalEval', !i || L.get(i[a], 'globalEval'));
        }
        var nu = /<|&#?\w+;/;
        function Io(t, i, a, l, p) {
            for (
                var h,
                    _,
                    S,
                    w,
                    k,
                    H,
                    W = i.createDocumentFragment(),
                    D = [],
                    R = 0,
                    re = t.length;
                R < re;
                R++
            )
                if (((h = t[R]), h || h === 0))
                    if (ce(h) === 'object') f.merge(D, h.nodeType ? [h] : h);
                    else if (!nu.test(h)) D.push(i.createTextNode(h));
                    else {
                        for (
                            _ = _ || W.appendChild(i.createElement('div')),
                                S = (Qn.exec(h) || ['', ''])[1].toLowerCase(),
                                w = je[S] || je._default,
                                _.innerHTML = w[1] + f.htmlPrefilter(h) + w[2],
                                H = w[0];
                            H--;

                        )
                            _ = _.lastChild;
                        f.merge(D, _.childNodes),
                            (_ = W.firstChild),
                            (_.textContent = '');
                    }
            for (W.textContent = '', R = 0; (h = D[R++]); ) {
                if (l && f.inArray(h, l) > -1) {
                    p && p.push(h);
                    continue;
                }
                if (
                    ((k = ge(h)),
                    (_ = ze(W.appendChild(h), 'script')),
                    k && li(_),
                    a)
                )
                    for (H = 0; (h = _[H++]); )
                        Je.test(h.type || '') && a.push(h);
            }
            return W;
        }
        var ko = /^([^.]*)(?:\.(.+)|)/;
        function Mn() {
            return !0;
        }
        function Pn() {
            return !1;
        }
        function ru(t, i) {
            return (t === iu()) == (i === 'focus');
        }
        function iu() {
            try {
                return O.activeElement;
            } catch {}
        }
        function fi(t, i, a, l, p, h) {
            var _, S;
            if (typeof i == 'object') {
                typeof a != 'string' && ((l = l || a), (a = void 0));
                for (S in i) fi(t, S, a, l, i[S], h);
                return t;
            }
            if (
                (l == null && p == null
                    ? ((p = a), (l = a = void 0))
                    : p == null &&
                      (typeof a == 'string'
                          ? ((p = l), (l = void 0))
                          : ((p = l), (l = a), (a = void 0))),
                p === !1)
            )
                p = Pn;
            else if (!p) return t;
            return (
                h === 1 &&
                    ((_ = p),
                    (p = function (w) {
                        return f().off(w), _.apply(this, arguments);
                    }),
                    (p.guid = _.guid || (_.guid = f.guid++))),
                t.each(function () {
                    f.event.add(this, i, p, l, a);
                })
            );
        }
        f.event = {
            global: {},
            add: function (t, i, a, l, p) {
                var h,
                    _,
                    S,
                    w,
                    k,
                    H,
                    W,
                    D,
                    R,
                    re,
                    he,
                    ne = L.get(t);
                if (F(t))
                    for (
                        a.handler &&
                            ((h = a), (a = h.handler), (p = h.selector)),
                            p && f.find.matchesSelector(se, p),
                            a.guid || (a.guid = f.guid++),
                            (w = ne.events) ||
                                (w = ne.events = Object.create(null)),
                            (_ = ne.handle) ||
                                (_ = ne.handle =
                                    function (We) {
                                        return typeof f < 'u' &&
                                            f.event.triggered !== We.type
                                            ? f.event.dispatch.apply(
                                                  t,
                                                  arguments
                                              )
                                            : void 0;
                                    }),
                            i = (i || '').match(Ge) || [''],
                            k = i.length;
                        k--;

                    )
                        (S = ko.exec(i[k]) || []),
                            (R = he = S[1]),
                            (re = (S[2] || '').split('.').sort()),
                            R &&
                                ((W = f.event.special[R] || {}),
                                (R = (p ? W.delegateType : W.bindType) || R),
                                (W = f.event.special[R] || {}),
                                (H = f.extend(
                                    {
                                        type: R,
                                        origType: he,
                                        data: l,
                                        handler: a,
                                        guid: a.guid,
                                        selector: p,
                                        needsContext:
                                            p &&
                                            f.expr.match.needsContext.test(p),
                                        namespace: re.join('.'),
                                    },
                                    h
                                )),
                                (D = w[R]) ||
                                    ((D = w[R] = []),
                                    (D.delegateCount = 0),
                                    (!W.setup ||
                                        W.setup.call(t, l, re, _) === !1) &&
                                        t.addEventListener &&
                                        t.addEventListener(R, _)),
                                W.add &&
                                    (W.add.call(t, H),
                                    H.handler.guid ||
                                        (H.handler.guid = a.guid)),
                                p
                                    ? D.splice(D.delegateCount++, 0, H)
                                    : D.push(H),
                                (f.event.global[R] = !0));
            },
            remove: function (t, i, a, l, p) {
                var h,
                    _,
                    S,
                    w,
                    k,
                    H,
                    W,
                    D,
                    R,
                    re,
                    he,
                    ne = L.hasData(t) && L.get(t);
                if (!(!ne || !(w = ne.events))) {
                    for (i = (i || '').match(Ge) || [''], k = i.length; k--; ) {
                        if (
                            ((S = ko.exec(i[k]) || []),
                            (R = he = S[1]),
                            (re = (S[2] || '').split('.').sort()),
                            !R)
                        ) {
                            for (R in w) f.event.remove(t, R + i[k], a, l, !0);
                            continue;
                        }
                        for (
                            W = f.event.special[R] || {},
                                R = (l ? W.delegateType : W.bindType) || R,
                                D = w[R] || [],
                                S =
                                    S[2] &&
                                    new RegExp(
                                        '(^|\\.)' +
                                            re.join('\\.(?:.*\\.|)') +
                                            '(\\.|$)'
                                    ),
                                _ = h = D.length;
                            h--;

                        )
                            (H = D[h]),
                                (p || he === H.origType) &&
                                    (!a || a.guid === H.guid) &&
                                    (!S || S.test(H.namespace)) &&
                                    (!l ||
                                        l === H.selector ||
                                        (l === '**' && H.selector)) &&
                                    (D.splice(h, 1),
                                    H.selector && D.delegateCount--,
                                    W.remove && W.remove.call(t, H));
                        _ &&
                            !D.length &&
                            ((!W.teardown ||
                                W.teardown.call(t, re, ne.handle) === !1) &&
                                f.removeEvent(t, R, ne.handle),
                            delete w[R]);
                    }
                    f.isEmptyObject(w) && L.remove(t, 'handle events');
                }
            },
            dispatch: function (t) {
                var i,
                    a,
                    l,
                    p,
                    h,
                    _,
                    S = new Array(arguments.length),
                    w = f.event.fix(t),
                    k =
                        (L.get(this, 'events') || Object.create(null))[
                            w.type
                        ] || [],
                    H = f.event.special[w.type] || {};
                for (S[0] = w, i = 1; i < arguments.length; i++)
                    S[i] = arguments[i];
                if (
                    ((w.delegateTarget = this),
                    !(H.preDispatch && H.preDispatch.call(this, w) === !1))
                ) {
                    for (
                        _ = f.event.handlers.call(this, w, k), i = 0;
                        (p = _[i++]) && !w.isPropagationStopped();

                    )
                        for (
                            w.currentTarget = p.elem, a = 0;
                            (h = p.handlers[a++]) &&
                            !w.isImmediatePropagationStopped();

                        )
                            (!w.rnamespace ||
                                h.namespace === !1 ||
                                w.rnamespace.test(h.namespace)) &&
                                ((w.handleObj = h),
                                (w.data = h.data),
                                (l = (
                                    (f.event.special[h.origType] || {})
                                        .handle || h.handler
                                ).apply(p.elem, S)),
                                l !== void 0 &&
                                    (w.result = l) === !1 &&
                                    (w.preventDefault(), w.stopPropagation()));
                    return (
                        H.postDispatch && H.postDispatch.call(this, w), w.result
                    );
                }
            },
            handlers: function (t, i) {
                var a,
                    l,
                    p,
                    h,
                    _,
                    S = [],
                    w = i.delegateCount,
                    k = t.target;
                if (w && k.nodeType && !(t.type === 'click' && t.button >= 1)) {
                    for (; k !== this; k = k.parentNode || this)
                        if (
                            k.nodeType === 1 &&
                            !(t.type === 'click' && k.disabled === !0)
                        ) {
                            for (h = [], _ = {}, a = 0; a < w; a++)
                                (l = i[a]),
                                    (p = l.selector + ' '),
                                    _[p] === void 0 &&
                                        (_[p] = l.needsContext
                                            ? f(p, this).index(k) > -1
                                            : f.find(p, this, null, [k])
                                                  .length),
                                    _[p] && h.push(l);
                            h.length && S.push({ elem: k, handlers: h });
                        }
                }
                return (
                    (k = this),
                    w < i.length && S.push({ elem: k, handlers: i.slice(w) }),
                    S
                );
            },
            addProp: function (t, i) {
                Object.defineProperty(f.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: E(i)
                        ? function () {
                              if (this.originalEvent)
                                  return i(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent)
                                  return this.originalEvent[t];
                          },
                    set: function (a) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: a,
                        });
                    },
                });
            },
            fix: function (t) {
                return t[f.expando] ? t : new f.Event(t);
            },
            special: {
                load: { noBubble: !0 },
                click: {
                    setup: function (t) {
                        var i = this || t;
                        return (
                            St.test(i.type) &&
                                i.click &&
                                ke(i, 'input') &&
                                mr(i, 'click', Mn),
                            !1
                        );
                    },
                    trigger: function (t) {
                        var i = this || t;
                        return (
                            St.test(i.type) &&
                                i.click &&
                                ke(i, 'input') &&
                                mr(i, 'click'),
                            !0
                        );
                    },
                    _default: function (t) {
                        var i = t.target;
                        return (
                            (St.test(i.type) &&
                                i.click &&
                                ke(i, 'input') &&
                                L.get(i, 'click')) ||
                            ke(i, 'a')
                        );
                    },
                },
                beforeunload: {
                    postDispatch: function (t) {
                        t.result !== void 0 &&
                            t.originalEvent &&
                            (t.originalEvent.returnValue = t.result);
                    },
                },
            },
        };
        function mr(t, i, a) {
            if (!a) {
                L.get(t, i) === void 0 && f.event.add(t, i, Mn);
                return;
            }
            L.set(t, i, !1),
                f.event.add(t, i, {
                    namespace: !1,
                    handler: function (l) {
                        var p,
                            h,
                            _ = L.get(this, i);
                        if (l.isTrigger & 1 && this[i]) {
                            if (_.length)
                                (f.event.special[i] || {}).delegateType &&
                                    l.stopPropagation();
                            else if (
                                ((_ = c.call(arguments)),
                                L.set(this, i, _),
                                (p = a(this, i)),
                                this[i](),
                                (h = L.get(this, i)),
                                _ !== h || p ? L.set(this, i, !1) : (h = {}),
                                _ !== h)
                            )
                                return (
                                    l.stopImmediatePropagation(),
                                    l.preventDefault(),
                                    h && h.value
                                );
                        } else
                            _.length &&
                                (L.set(this, i, {
                                    value: f.event.trigger(
                                        f.extend(_[0], f.Event.prototype),
                                        _.slice(1),
                                        this
                                    ),
                                }),
                                l.stopImmediatePropagation());
                    },
                });
        }
        (f.removeEvent = function (t, i, a) {
            t.removeEventListener && t.removeEventListener(i, a);
        }),
            (f.Event = function (t, i) {
                if (!(this instanceof f.Event)) return new f.Event(t, i);
                t && t.type
                    ? ((this.originalEvent = t),
                      (this.type = t.type),
                      (this.isDefaultPrevented =
                          t.defaultPrevented ||
                          (t.defaultPrevented === void 0 &&
                              t.returnValue === !1)
                              ? Mn
                              : Pn),
                      (this.target =
                          t.target && t.target.nodeType === 3
                              ? t.target.parentNode
                              : t.target),
                      (this.currentTarget = t.currentTarget),
                      (this.relatedTarget = t.relatedTarget))
                    : (this.type = t),
                    i && f.extend(this, i),
                    (this.timeStamp = (t && t.timeStamp) || Date.now()),
                    (this[f.expando] = !0);
            }),
            (f.Event.prototype = {
                constructor: f.Event,
                isDefaultPrevented: Pn,
                isPropagationStopped: Pn,
                isImmediatePropagationStopped: Pn,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    (this.isDefaultPrevented = Mn),
                        t && !this.isSimulated && t.preventDefault();
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    (this.isPropagationStopped = Mn),
                        t && !this.isSimulated && t.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    (this.isImmediatePropagationStopped = Mn),
                        t && !this.isSimulated && t.stopImmediatePropagation(),
                        this.stopPropagation();
                },
            }),
            f.each(
                {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0,
                },
                f.event.addProp
            ),
            f.each({ focus: 'focusin', blur: 'focusout' }, function (t, i) {
                f.event.special[t] = {
                    setup: function () {
                        return mr(this, t, ru), !1;
                    },
                    trigger: function () {
                        return mr(this, t), !0;
                    },
                    _default: function (a) {
                        return L.get(a.target, t);
                    },
                    delegateType: i,
                };
            }),
            f.each(
                {
                    mouseenter: 'mouseover',
                    mouseleave: 'mouseout',
                    pointerenter: 'pointerover',
                    pointerleave: 'pointerout',
                },
                function (t, i) {
                    f.event.special[t] = {
                        delegateType: i,
                        bindType: i,
                        handle: function (a) {
                            var l,
                                p = this,
                                h = a.relatedTarget,
                                _ = a.handleObj;
                            return (
                                (!h || (h !== p && !f.contains(p, h))) &&
                                    ((a.type = _.origType),
                                    (l = _.handler.apply(this, arguments)),
                                    (a.type = i)),
                                l
                            );
                        },
                    };
                }
            ),
            f.fn.extend({
                on: function (t, i, a, l) {
                    return fi(this, t, i, a, l);
                },
                one: function (t, i, a, l) {
                    return fi(this, t, i, a, l, 1);
                },
                off: function (t, i, a) {
                    var l, p;
                    if (t && t.preventDefault && t.handleObj)
                        return (
                            (l = t.handleObj),
                            f(t.delegateTarget).off(
                                l.namespace
                                    ? l.origType + '.' + l.namespace
                                    : l.origType,
                                l.selector,
                                l.handler
                            ),
                            this
                        );
                    if (typeof t == 'object') {
                        for (p in t) this.off(p, i, t[p]);
                        return this;
                    }
                    return (
                        (i === !1 || typeof i == 'function') &&
                            ((a = i), (i = void 0)),
                        a === !1 && (a = Pn),
                        this.each(function () {
                            f.event.remove(this, t, a, i);
                        })
                    );
                },
            });
        var ou = /<script|<style|<link/i,
            su = /checked\s*(?:[^=]|=\s*.checked.)/i,
            au = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function No(t, i) {
            return (
                (ke(t, 'table') &&
                    ke(i.nodeType !== 11 ? i : i.firstChild, 'tr') &&
                    f(t).children('tbody')[0]) ||
                t
            );
        }
        function uu(t) {
            return (
                (t.type = (t.getAttribute('type') !== null) + '/' + t.type), t
            );
        }
        function lu(t) {
            return (
                (t.type || '').slice(0, 5) === 'true/'
                    ? (t.type = t.type.slice(5))
                    : t.removeAttribute('type'),
                t
            );
        }
        function Lo(t, i) {
            var a, l, p, h, _, S, w;
            if (i.nodeType === 1) {
                if (L.hasData(t) && ((h = L.get(t)), (w = h.events), w)) {
                    L.remove(i, 'handle events');
                    for (p in w)
                        for (a = 0, l = w[p].length; a < l; a++)
                            f.event.add(i, p, w[p][a]);
                }
                U.hasData(t) &&
                    ((_ = U.access(t)), (S = f.extend({}, _)), U.set(i, S));
            }
        }
        function fu(t, i) {
            var a = i.nodeName.toLowerCase();
            a === 'input' && St.test(t.type)
                ? (i.checked = t.checked)
                : (a === 'input' || a === 'textarea') &&
                  (i.defaultValue = t.defaultValue);
        }
        function In(t, i, a, l) {
            i = g(i);
            var p,
                h,
                _,
                S,
                w,
                k,
                H = 0,
                W = t.length,
                D = W - 1,
                R = i[0],
                re = E(R);
            if (
                re ||
                (W > 1 && typeof R == 'string' && !T.checkClone && su.test(R))
            )
                return t.each(function (he) {
                    var ne = t.eq(he);
                    re && (i[0] = R.call(this, he, ne.html())), In(ne, i, a, l);
                });
            if (
                W &&
                ((p = Io(i, t[0].ownerDocument, !1, t, l)),
                (h = p.firstChild),
                p.childNodes.length === 1 && (p = h),
                h || l)
            ) {
                for (_ = f.map(ze(p, 'script'), uu), S = _.length; H < W; H++)
                    (w = p),
                        H !== D &&
                            ((w = f.clone(w, !0, !0)),
                            S && f.merge(_, ze(w, 'script'))),
                        a.call(t[H], w, H);
                if (S)
                    for (
                        k = _[_.length - 1].ownerDocument, f.map(_, lu), H = 0;
                        H < S;
                        H++
                    )
                        (w = _[H]),
                            Je.test(w.type || '') &&
                                !L.access(w, 'globalEval') &&
                                f.contains(k, w) &&
                                (w.src &&
                                (w.type || '').toLowerCase() !== 'module'
                                    ? f._evalUrl &&
                                      !w.noModule &&
                                      f._evalUrl(
                                          w.src,
                                          {
                                              nonce:
                                                  w.nonce ||
                                                  w.getAttribute('nonce'),
                                          },
                                          k
                                      )
                                    : Q(w.textContent.replace(au, ''), w, k));
            }
            return t;
        }
        function Do(t, i, a) {
            for (
                var l, p = i ? f.filter(i, t) : t, h = 0;
                (l = p[h]) != null;
                h++
            )
                !a && l.nodeType === 1 && f.cleanData(ze(l)),
                    l.parentNode &&
                        (a && ge(l) && li(ze(l, 'script')),
                        l.parentNode.removeChild(l));
            return t;
        }
        f.extend({
            htmlPrefilter: function (t) {
                return t;
            },
            clone: function (t, i, a) {
                var l,
                    p,
                    h,
                    _,
                    S = t.cloneNode(!0),
                    w = ge(t);
                if (
                    !T.noCloneChecked &&
                    (t.nodeType === 1 || t.nodeType === 11) &&
                    !f.isXMLDoc(t)
                )
                    for (_ = ze(S), h = ze(t), l = 0, p = h.length; l < p; l++)
                        fu(h[l], _[l]);
                if (i)
                    if (a)
                        for (
                            h = h || ze(t), _ = _ || ze(S), l = 0, p = h.length;
                            l < p;
                            l++
                        )
                            Lo(h[l], _[l]);
                    else Lo(t, S);
                return (
                    (_ = ze(S, 'script')),
                    _.length > 0 && li(_, !w && ze(t, 'script')),
                    S
                );
            },
            cleanData: function (t) {
                for (
                    var i, a, l, p = f.event.special, h = 0;
                    (a = t[h]) !== void 0;
                    h++
                )
                    if (F(a)) {
                        if ((i = a[L.expando])) {
                            if (i.events)
                                for (l in i.events)
                                    p[l]
                                        ? f.event.remove(a, l)
                                        : f.removeEvent(a, l, i.handle);
                            a[L.expando] = void 0;
                        }
                        a[U.expando] && (a[U.expando] = void 0);
                    }
            },
        }),
            f.fn.extend({
                detach: function (t) {
                    return Do(this, t, !0);
                },
                remove: function (t) {
                    return Do(this, t);
                },
                text: function (t) {
                    return Ye(
                        this,
                        function (i) {
                            return i === void 0
                                ? f.text(this)
                                : this.empty().each(function () {
                                      (this.nodeType === 1 ||
                                          this.nodeType === 11 ||
                                          this.nodeType === 9) &&
                                          (this.textContent = i);
                                  });
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                append: function () {
                    return In(this, arguments, function (t) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var i = No(this, t);
                            i.appendChild(t);
                        }
                    });
                },
                prepend: function () {
                    return In(this, arguments, function (t) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var i = No(this, t);
                            i.insertBefore(t, i.firstChild);
                        }
                    });
                },
                before: function () {
                    return In(this, arguments, function (t) {
                        this.parentNode &&
                            this.parentNode.insertBefore(t, this);
                    });
                },
                after: function () {
                    return In(this, arguments, function (t) {
                        this.parentNode &&
                            this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var t, i = 0; (t = this[i]) != null; i++)
                        t.nodeType === 1 &&
                            (f.cleanData(ze(t, !1)), (t.textContent = ''));
                    return this;
                },
                clone: function (t, i) {
                    return (
                        (t = t ?? !1),
                        (i = i ?? t),
                        this.map(function () {
                            return f.clone(this, t, i);
                        })
                    );
                },
                html: function (t) {
                    return Ye(
                        this,
                        function (i) {
                            var a = this[0] || {},
                                l = 0,
                                p = this.length;
                            if (i === void 0 && a.nodeType === 1)
                                return a.innerHTML;
                            if (
                                typeof i == 'string' &&
                                !ou.test(i) &&
                                !je[(Qn.exec(i) || ['', ''])[1].toLowerCase()]
                            ) {
                                i = f.htmlPrefilter(i);
                                try {
                                    for (; l < p; l++)
                                        (a = this[l] || {}),
                                            a.nodeType === 1 &&
                                                (f.cleanData(ze(a, !1)),
                                                (a.innerHTML = i));
                                    a = 0;
                                } catch {}
                            }
                            a && this.empty().append(i);
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var t = [];
                    return In(
                        this,
                        arguments,
                        function (i) {
                            var a = this.parentNode;
                            f.inArray(this, t) < 0 &&
                                (f.cleanData(ze(this)),
                                a && a.replaceChild(i, this));
                        },
                        t
                    );
                },
            }),
            f.each(
                {
                    appendTo: 'append',
                    prependTo: 'prepend',
                    insertBefore: 'before',
                    insertAfter: 'after',
                    replaceAll: 'replaceWith',
                },
                function (t, i) {
                    f.fn[t] = function (a) {
                        for (
                            var l, p = [], h = f(a), _ = h.length - 1, S = 0;
                            S <= _;
                            S++
                        )
                            (l = S === _ ? this : this.clone(!0)),
                                f(h[S])[i](l),
                                y.apply(p, l.get());
                        return this.pushStack(p);
                    };
                }
            );
        var ci = new RegExp('^(' + ie + ')(?!px)[a-z%]+$', 'i'),
            di = /^--/,
            yr = function (t) {
                var i = t.ownerDocument.defaultView;
                return (!i || !i.opener) && (i = n), i.getComputedStyle(t);
            },
            Ho = function (t, i, a) {
                var l,
                    p,
                    h = {};
                for (p in i) (h[p] = t.style[p]), (t.style[p] = i[p]);
                l = a.call(t);
                for (p in i) t.style[p] = h[p];
                return l;
            },
            cu = new RegExp(te.join('|'), 'i'),
            jo = '[\\x20\\t\\r\\n\\f]',
            du = new RegExp(
                '^' + jo + '+|((?:^|[^\\\\])(?:\\\\.)*)' + jo + '+$',
                'g'
            );
        (function () {
            function t() {
                if (k) {
                    (w.style.cssText =
                        'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                        (k.style.cssText =
                            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                        se.appendChild(w).appendChild(k);
                    var H = n.getComputedStyle(k);
                    (a = H.top !== '1%'),
                        (S = i(H.marginLeft) === 12),
                        (k.style.right = '60%'),
                        (h = i(H.right) === 36),
                        (l = i(H.width) === 36),
                        (k.style.position = 'absolute'),
                        (p = i(k.offsetWidth / 3) === 12),
                        se.removeChild(w),
                        (k = null);
                }
            }
            function i(H) {
                return Math.round(parseFloat(H));
            }
            var a,
                l,
                p,
                h,
                _,
                S,
                w = O.createElement('div'),
                k = O.createElement('div');
            k.style &&
                ((k.style.backgroundClip = 'content-box'),
                (k.cloneNode(!0).style.backgroundClip = ''),
                (T.clearCloneStyle = k.style.backgroundClip === 'content-box'),
                f.extend(T, {
                    boxSizingReliable: function () {
                        return t(), l;
                    },
                    pixelBoxStyles: function () {
                        return t(), h;
                    },
                    pixelPosition: function () {
                        return t(), a;
                    },
                    reliableMarginLeft: function () {
                        return t(), S;
                    },
                    scrollboxSize: function () {
                        return t(), p;
                    },
                    reliableTrDimensions: function () {
                        var H, W, D, R;
                        return (
                            _ == null &&
                                ((H = O.createElement('table')),
                                (W = O.createElement('tr')),
                                (D = O.createElement('div')),
                                (H.style.cssText =
                                    'position:absolute;left:-11111px;border-collapse:separate'),
                                (W.style.cssText = 'border:1px solid'),
                                (W.style.height = '1px'),
                                (D.style.height = '9px'),
                                (D.style.display = 'block'),
                                se.appendChild(H).appendChild(W).appendChild(D),
                                (R = n.getComputedStyle(W)),
                                (_ =
                                    parseInt(R.height, 10) +
                                        parseInt(R.borderTopWidth, 10) +
                                        parseInt(R.borderBottomWidth, 10) ===
                                    W.offsetHeight),
                                se.removeChild(H)),
                            _
                        );
                    },
                }));
        })();
        function Yn(t, i, a) {
            var l,
                p,
                h,
                _,
                S = di.test(i),
                w = t.style;
            return (
                (a = a || yr(t)),
                a &&
                    ((_ = a.getPropertyValue(i) || a[i]),
                    S && _ && (_ = _.replace(du, '$1') || void 0),
                    _ === '' && !ge(t) && (_ = f.style(t, i)),
                    !T.pixelBoxStyles() &&
                        ci.test(_) &&
                        cu.test(i) &&
                        ((l = w.width),
                        (p = w.minWidth),
                        (h = w.maxWidth),
                        (w.minWidth = w.maxWidth = w.width = _),
                        (_ = a.width),
                        (w.width = l),
                        (w.minWidth = p),
                        (w.maxWidth = h))),
                _ !== void 0 ? _ + '' : _
            );
        }
        function Fo(t, i) {
            return {
                get: function () {
                    if (t()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = i).apply(this, arguments);
                },
            };
        }
        var Ro = ['Webkit', 'Moz', 'ms'],
            Bo = O.createElement('div').style,
            $o = {};
        function pu(t) {
            for (var i = t[0].toUpperCase() + t.slice(1), a = Ro.length; a--; )
                if (((t = Ro[a] + i), t in Bo)) return t;
        }
        function pi(t) {
            var i = f.cssProps[t] || $o[t];
            return i || (t in Bo ? t : ($o[t] = pu(t) || t));
        }
        var hu = /^(none|table(?!-c[ea]).+)/,
            gu = {
                position: 'absolute',
                visibility: 'hidden',
                display: 'block',
            },
            qo = { letterSpacing: '0', fontWeight: '400' };
        function Wo(t, i, a) {
            var l = ee.exec(i);
            return l ? Math.max(0, l[2] - (a || 0)) + (l[3] || 'px') : i;
        }
        function hi(t, i, a, l, p, h) {
            var _ = i === 'width' ? 1 : 0,
                S = 0,
                w = 0;
            if (a === (l ? 'border' : 'content')) return 0;
            for (; _ < 4; _ += 2)
                a === 'margin' && (w += f.css(t, a + te[_], !0, p)),
                    l
                        ? (a === 'content' &&
                              (w -= f.css(t, 'padding' + te[_], !0, p)),
                          a !== 'margin' &&
                              (w -= f.css(
                                  t,
                                  'border' + te[_] + 'Width',
                                  !0,
                                  p
                              )))
                        : ((w += f.css(t, 'padding' + te[_], !0, p)),
                          a !== 'padding'
                              ? (w += f.css(
                                    t,
                                    'border' + te[_] + 'Width',
                                    !0,
                                    p
                                ))
                              : (S += f.css(
                                    t,
                                    'border' + te[_] + 'Width',
                                    !0,
                                    p
                                )));
            return (
                !l &&
                    h >= 0 &&
                    (w +=
                        Math.max(
                            0,
                            Math.ceil(
                                t['offset' + i[0].toUpperCase() + i.slice(1)] -
                                    h -
                                    w -
                                    S -
                                    0.5
                            )
                        ) || 0),
                w
            );
        }
        function Vo(t, i, a) {
            var l = yr(t),
                p = !T.boxSizingReliable() || a,
                h = p && f.css(t, 'boxSizing', !1, l) === 'border-box',
                _ = h,
                S = Yn(t, i, l),
                w = 'offset' + i[0].toUpperCase() + i.slice(1);
            if (ci.test(S)) {
                if (!a) return S;
                S = 'auto';
            }
            return (
                ((!T.boxSizingReliable() && h) ||
                    (!T.reliableTrDimensions() && ke(t, 'tr')) ||
                    S === 'auto' ||
                    (!parseFloat(S) &&
                        f.css(t, 'display', !1, l) === 'inline')) &&
                    t.getClientRects().length &&
                    ((h = f.css(t, 'boxSizing', !1, l) === 'border-box'),
                    (_ = w in t),
                    _ && (S = t[w])),
                (S = parseFloat(S) || 0),
                S + hi(t, i, a || (h ? 'border' : 'content'), _, l, S) + 'px'
            );
        }
        f.extend({
            cssHooks: {
                opacity: {
                    get: function (t, i) {
                        if (i) {
                            var a = Yn(t, 'opacity');
                            return a === '' ? '1' : a;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function (t, i, a, l) {
                if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
                    var p,
                        h,
                        _,
                        S = P(i),
                        w = di.test(i),
                        k = t.style;
                    if (
                        (w || (i = pi(S)),
                        (_ = f.cssHooks[i] || f.cssHooks[S]),
                        a !== void 0)
                    ) {
                        if (
                            ((h = typeof a),
                            h === 'string' &&
                                (p = ee.exec(a)) &&
                                p[1] &&
                                ((a = He(t, i, p)), (h = 'number')),
                            a == null || a !== a)
                        )
                            return;
                        h === 'number' &&
                            !w &&
                            (a += (p && p[3]) || (f.cssNumber[S] ? '' : 'px')),
                            !T.clearCloneStyle &&
                                a === '' &&
                                i.indexOf('background') === 0 &&
                                (k[i] = 'inherit'),
                            (!_ ||
                                !('set' in _) ||
                                (a = _.set(t, a, l)) !== void 0) &&
                                (w ? k.setProperty(i, a) : (k[i] = a));
                    } else
                        return _ &&
                            'get' in _ &&
                            (p = _.get(t, !1, l)) !== void 0
                            ? p
                            : k[i];
                }
            },
            css: function (t, i, a, l) {
                var p,
                    h,
                    _,
                    S = P(i),
                    w = di.test(i);
                return (
                    w || (i = pi(S)),
                    (_ = f.cssHooks[i] || f.cssHooks[S]),
                    _ && 'get' in _ && (p = _.get(t, !0, a)),
                    p === void 0 && (p = Yn(t, i, l)),
                    p === 'normal' && i in qo && (p = qo[i]),
                    a === '' || a
                        ? ((h = parseFloat(p)),
                          a === !0 || isFinite(h) ? h || 0 : p)
                        : p
                );
            },
        }),
            f.each(['height', 'width'], function (t, i) {
                f.cssHooks[i] = {
                    get: function (a, l, p) {
                        if (l)
                            return hu.test(f.css(a, 'display')) &&
                                (!a.getClientRects().length ||
                                    !a.getBoundingClientRect().width)
                                ? Ho(a, gu, function () {
                                      return Vo(a, i, p);
                                  })
                                : Vo(a, i, p);
                    },
                    set: function (a, l, p) {
                        var h,
                            _ = yr(a),
                            S = !T.scrollboxSize() && _.position === 'absolute',
                            w = S || p,
                            k =
                                w &&
                                f.css(a, 'boxSizing', !1, _) === 'border-box',
                            H = p ? hi(a, i, p, k, _) : 0;
                        return (
                            k &&
                                S &&
                                (H -= Math.ceil(
                                    a[
                                        'offset' +
                                            i[0].toUpperCase() +
                                            i.slice(1)
                                    ] -
                                        parseFloat(_[i]) -
                                        hi(a, i, 'border', !1, _) -
                                        0.5
                                )),
                            H &&
                                (h = ee.exec(l)) &&
                                (h[3] || 'px') !== 'px' &&
                                ((a.style[i] = l), (l = f.css(a, i))),
                            Wo(a, l, H)
                        );
                    },
                };
            }),
            (f.cssHooks.marginLeft = Fo(T.reliableMarginLeft, function (t, i) {
                if (i)
                    return (
                        (parseFloat(Yn(t, 'marginLeft')) ||
                            t.getBoundingClientRect().left -
                                Ho(t, { marginLeft: 0 }, function () {
                                    return t.getBoundingClientRect().left;
                                })) + 'px'
                    );
            })),
            f.each(
                { margin: '', padding: '', border: 'Width' },
                function (t, i) {
                    (f.cssHooks[t + i] = {
                        expand: function (a) {
                            for (
                                var l = 0,
                                    p = {},
                                    h =
                                        typeof a == 'string'
                                            ? a.split(' ')
                                            : [a];
                                l < 4;
                                l++
                            )
                                p[t + te[l] + i] = h[l] || h[l - 2] || h[0];
                            return p;
                        },
                    }),
                        t !== 'margin' && (f.cssHooks[t + i].set = Wo);
                }
            ),
            f.fn.extend({
                css: function (t, i) {
                    return Ye(
                        this,
                        function (a, l, p) {
                            var h,
                                _,
                                S = {},
                                w = 0;
                            if (Array.isArray(l)) {
                                for (h = yr(a), _ = l.length; w < _; w++)
                                    S[l[w]] = f.css(a, l[w], !1, h);
                                return S;
                            }
                            return p !== void 0
                                ? f.style(a, l, p)
                                : f.css(a, l);
                        },
                        t,
                        i,
                        arguments.length > 1
                    );
                },
            });
        function at(t, i, a, l, p) {
            return new at.prototype.init(t, i, a, l, p);
        }
        (f.Tween = at),
            (at.prototype = {
                constructor: at,
                init: function (t, i, a, l, p, h) {
                    (this.elem = t),
                        (this.prop = a),
                        (this.easing = p || f.easing._default),
                        (this.options = i),
                        (this.start = this.now = this.cur()),
                        (this.end = l),
                        (this.unit = h || (f.cssNumber[a] ? '' : 'px'));
                },
                cur: function () {
                    var t = at.propHooks[this.prop];
                    return t && t.get
                        ? t.get(this)
                        : at.propHooks._default.get(this);
                },
                run: function (t) {
                    var i,
                        a = at.propHooks[this.prop];
                    return (
                        this.options.duration
                            ? (this.pos = i =
                                  f.easing[this.easing](
                                      t,
                                      this.options.duration * t,
                                      0,
                                      1,
                                      this.options.duration
                                  ))
                            : (this.pos = i = t),
                        (this.now = (this.end - this.start) * i + this.start),
                        this.options.step &&
                            this.options.step.call(this.elem, this.now, this),
                        a && a.set
                            ? a.set(this)
                            : at.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (at.prototype.init.prototype = at.prototype),
            (at.propHooks = {
                _default: {
                    get: function (t) {
                        var i;
                        return t.elem.nodeType !== 1 ||
                            (t.elem[t.prop] != null &&
                                t.elem.style[t.prop] == null)
                            ? t.elem[t.prop]
                            : ((i = f.css(t.elem, t.prop, '')),
                              !i || i === 'auto' ? 0 : i);
                    },
                    set: function (t) {
                        f.fx.step[t.prop]
                            ? f.fx.step[t.prop](t)
                            : t.elem.nodeType === 1 &&
                                (f.cssHooks[t.prop] ||
                                    t.elem.style[pi(t.prop)] != null)
                              ? f.style(t.elem, t.prop, t.now + t.unit)
                              : (t.elem[t.prop] = t.now);
                    },
                },
            }),
            (at.propHooks.scrollTop = at.propHooks.scrollLeft =
                {
                    set: function (t) {
                        t.elem.nodeType &&
                            t.elem.parentNode &&
                            (t.elem[t.prop] = t.now);
                    },
                }),
            (f.easing = {
                linear: function (t) {
                    return t;
                },
                swing: function (t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                },
                _default: 'swing',
            }),
            (f.fx = at.prototype.init),
            (f.fx.step = {});
        var kn,
            br,
            _u = /^(?:toggle|show|hide)$/,
            vu = /queueHooks$/;
        function gi() {
            br &&
                (O.hidden === !1 && n.requestAnimationFrame
                    ? n.requestAnimationFrame(gi)
                    : n.setTimeout(gi, f.fx.interval),
                f.fx.tick());
        }
        function Uo() {
            return (
                n.setTimeout(function () {
                    kn = void 0;
                }),
                (kn = Date.now())
            );
        }
        function wr(t, i) {
            var a,
                l = 0,
                p = { height: t };
            for (i = i ? 1 : 0; l < 4; l += 2 - i)
                (a = te[l]), (p['margin' + a] = p['padding' + a] = t);
            return i && (p.opacity = p.width = t), p;
        }
        function Go(t, i, a) {
            for (
                var l,
                    p = (Ct.tweeners[i] || []).concat(Ct.tweeners['*']),
                    h = 0,
                    _ = p.length;
                h < _;
                h++
            )
                if ((l = p[h].call(a, i, t))) return l;
        }
        function mu(t, i, a) {
            var l,
                p,
                h,
                _,
                S,
                w,
                k,
                H,
                W = 'width' in i || 'height' in i,
                D = this,
                R = {},
                re = t.style,
                he = t.nodeType && ye(t),
                ne = L.get(t, 'fxshow');
            a.queue ||
                ((_ = f._queueHooks(t, 'fx')),
                _.unqueued == null &&
                    ((_.unqueued = 0),
                    (S = _.empty.fire),
                    (_.empty.fire = function () {
                        _.unqueued || S();
                    })),
                _.unqueued++,
                D.always(function () {
                    D.always(function () {
                        _.unqueued--, f.queue(t, 'fx').length || _.empty.fire();
                    });
                }));
            for (l in i)
                if (((p = i[l]), _u.test(p))) {
                    if (
                        (delete i[l],
                        (h = h || p === 'toggle'),
                        p === (he ? 'hide' : 'show'))
                    )
                        if (p === 'show' && ne && ne[l] !== void 0) he = !0;
                        else continue;
                    R[l] = (ne && ne[l]) || f.style(t, l);
                }
            if (((w = !f.isEmptyObject(i)), !(!w && f.isEmptyObject(R)))) {
                W &&
                    t.nodeType === 1 &&
                    ((a.overflow = [re.overflow, re.overflowX, re.overflowY]),
                    (k = ne && ne.display),
                    k == null && (k = L.get(t, 'display')),
                    (H = f.css(t, 'display')),
                    H === 'none' &&
                        (k
                            ? (H = k)
                            : (Vt([t], !0),
                              (k = t.style.display || k),
                              (H = f.css(t, 'display')),
                              Vt([t]))),
                    (H === 'inline' || (H === 'inline-block' && k != null)) &&
                        f.css(t, 'float') === 'none' &&
                        (w ||
                            (D.done(function () {
                                re.display = k;
                            }),
                            k == null &&
                                ((H = re.display),
                                (k = H === 'none' ? '' : H))),
                        (re.display = 'inline-block'))),
                    a.overflow &&
                        ((re.overflow = 'hidden'),
                        D.always(function () {
                            (re.overflow = a.overflow[0]),
                                (re.overflowX = a.overflow[1]),
                                (re.overflowY = a.overflow[2]);
                        })),
                    (w = !1);
                for (l in R)
                    w ||
                        (ne
                            ? 'hidden' in ne && (he = ne.hidden)
                            : (ne = L.access(t, 'fxshow', { display: k })),
                        h && (ne.hidden = !he),
                        he && Vt([t], !0),
                        D.done(function () {
                            he || Vt([t]), L.remove(t, 'fxshow');
                            for (l in R) f.style(t, l, R[l]);
                        })),
                        (w = Go(he ? ne[l] : 0, l, D)),
                        l in ne ||
                            ((ne[l] = w.start),
                            he && ((w.end = w.start), (w.start = 0)));
            }
        }
        function yu(t, i) {
            var a, l, p, h, _;
            for (a in t)
                if (
                    ((l = P(a)),
                    (p = i[l]),
                    (h = t[a]),
                    Array.isArray(h) && ((p = h[1]), (h = t[a] = h[0])),
                    a !== l && ((t[l] = h), delete t[a]),
                    (_ = f.cssHooks[l]),
                    _ && 'expand' in _)
                ) {
                    (h = _.expand(h)), delete t[l];
                    for (a in h) a in t || ((t[a] = h[a]), (i[a] = p));
                } else i[l] = p;
        }
        function Ct(t, i, a) {
            var l,
                p,
                h = 0,
                _ = Ct.prefilters.length,
                S = f.Deferred().always(function () {
                    delete w.elem;
                }),
                w = function () {
                    if (p) return !1;
                    for (
                        var W = kn || Uo(),
                            D = Math.max(0, k.startTime + k.duration - W),
                            R = D / k.duration || 0,
                            re = 1 - R,
                            he = 0,
                            ne = k.tweens.length;
                        he < ne;
                        he++
                    )
                        k.tweens[he].run(re);
                    return (
                        S.notifyWith(t, [k, re, D]),
                        re < 1 && ne
                            ? D
                            : (ne || S.notifyWith(t, [k, 1, 0]),
                              S.resolveWith(t, [k]),
                              !1)
                    );
                },
                k = S.promise({
                    elem: t,
                    props: f.extend({}, i),
                    opts: f.extend(
                        !0,
                        { specialEasing: {}, easing: f.easing._default },
                        a
                    ),
                    originalProperties: i,
                    originalOptions: a,
                    startTime: kn || Uo(),
                    duration: a.duration,
                    tweens: [],
                    createTween: function (W, D) {
                        var R = f.Tween(
                            t,
                            k.opts,
                            W,
                            D,
                            k.opts.specialEasing[W] || k.opts.easing
                        );
                        return k.tweens.push(R), R;
                    },
                    stop: function (W) {
                        var D = 0,
                            R = W ? k.tweens.length : 0;
                        if (p) return this;
                        for (p = !0; D < R; D++) k.tweens[D].run(1);
                        return (
                            W
                                ? (S.notifyWith(t, [k, 1, 0]),
                                  S.resolveWith(t, [k, W]))
                                : S.rejectWith(t, [k, W]),
                            this
                        );
                    },
                }),
                H = k.props;
            for (yu(H, k.opts.specialEasing); h < _; h++)
                if (((l = Ct.prefilters[h].call(k, t, H, k.opts)), l))
                    return (
                        E(l.stop) &&
                            (f._queueHooks(k.elem, k.opts.queue).stop =
                                l.stop.bind(l)),
                        l
                    );
            return (
                f.map(H, Go, k),
                E(k.opts.start) && k.opts.start.call(t, k),
                k
                    .progress(k.opts.progress)
                    .done(k.opts.done, k.opts.complete)
                    .fail(k.opts.fail)
                    .always(k.opts.always),
                f.fx.timer(
                    f.extend(w, { elem: t, anim: k, queue: k.opts.queue })
                ),
                k
            );
        }
        (f.Animation = f.extend(Ct, {
            tweeners: {
                '*': [
                    function (t, i) {
                        var a = this.createTween(t, i);
                        return He(a.elem, t, ee.exec(i), a), a;
                    },
                ],
            },
            tweener: function (t, i) {
                E(t) ? ((i = t), (t = ['*'])) : (t = t.match(Ge));
                for (var a, l = 0, p = t.length; l < p; l++)
                    (a = t[l]),
                        (Ct.tweeners[a] = Ct.tweeners[a] || []),
                        Ct.tweeners[a].unshift(i);
            },
            prefilters: [mu],
            prefilter: function (t, i) {
                i ? Ct.prefilters.unshift(t) : Ct.prefilters.push(t);
            },
        })),
            (f.speed = function (t, i, a) {
                var l =
                    t && typeof t == 'object'
                        ? f.extend({}, t)
                        : {
                              complete: a || (!a && i) || (E(t) && t),
                              duration: t,
                              easing: (a && i) || (i && !E(i) && i),
                          };
                return (
                    f.fx.off
                        ? (l.duration = 0)
                        : typeof l.duration != 'number' &&
                          (l.duration in f.fx.speeds
                              ? (l.duration = f.fx.speeds[l.duration])
                              : (l.duration = f.fx.speeds._default)),
                    (l.queue == null || l.queue === !0) && (l.queue = 'fx'),
                    (l.old = l.complete),
                    (l.complete = function () {
                        E(l.old) && l.old.call(this),
                            l.queue && f.dequeue(this, l.queue);
                    }),
                    l
                );
            }),
            f.fn.extend({
                fadeTo: function (t, i, a, l) {
                    return this.filter(ye)
                        .css('opacity', 0)
                        .show()
                        .end()
                        .animate({ opacity: i }, t, a, l);
                },
                animate: function (t, i, a, l) {
                    var p = f.isEmptyObject(t),
                        h = f.speed(i, a, l),
                        _ = function () {
                            var S = Ct(this, f.extend({}, t), h);
                            (p || L.get(this, 'finish')) && S.stop(!0);
                        };
                    return (
                        (_.finish = _),
                        p || h.queue === !1
                            ? this.each(_)
                            : this.queue(h.queue, _)
                    );
                },
                stop: function (t, i, a) {
                    var l = function (p) {
                        var h = p.stop;
                        delete p.stop, h(a);
                    };
                    return (
                        typeof t != 'string' &&
                            ((a = i), (i = t), (t = void 0)),
                        i && this.queue(t || 'fx', []),
                        this.each(function () {
                            var p = !0,
                                h = t != null && t + 'queueHooks',
                                _ = f.timers,
                                S = L.get(this);
                            if (h) S[h] && S[h].stop && l(S[h]);
                            else
                                for (h in S)
                                    S[h] && S[h].stop && vu.test(h) && l(S[h]);
                            for (h = _.length; h--; )
                                _[h].elem === this &&
                                    (t == null || _[h].queue === t) &&
                                    (_[h].anim.stop(a),
                                    (p = !1),
                                    _.splice(h, 1));
                            (p || !a) && f.dequeue(this, t);
                        })
                    );
                },
                finish: function (t) {
                    return (
                        t !== !1 && (t = t || 'fx'),
                        this.each(function () {
                            var i,
                                a = L.get(this),
                                l = a[t + 'queue'],
                                p = a[t + 'queueHooks'],
                                h = f.timers,
                                _ = l ? l.length : 0;
                            for (
                                a.finish = !0,
                                    f.queue(this, t, []),
                                    p && p.stop && p.stop.call(this, !0),
                                    i = h.length;
                                i--;

                            )
                                h[i].elem === this &&
                                    h[i].queue === t &&
                                    (h[i].anim.stop(!0), h.splice(i, 1));
                            for (i = 0; i < _; i++)
                                l[i] && l[i].finish && l[i].finish.call(this);
                            delete a.finish;
                        })
                    );
                },
            }),
            f.each(['toggle', 'show', 'hide'], function (t, i) {
                var a = f.fn[i];
                f.fn[i] = function (l, p, h) {
                    return l == null || typeof l == 'boolean'
                        ? a.apply(this, arguments)
                        : this.animate(wr(i, !0), l, p, h);
                };
            }),
            f.each(
                {
                    slideDown: wr('show'),
                    slideUp: wr('hide'),
                    slideToggle: wr('toggle'),
                    fadeIn: { opacity: 'show' },
                    fadeOut: { opacity: 'hide' },
                    fadeToggle: { opacity: 'toggle' },
                },
                function (t, i) {
                    f.fn[t] = function (a, l, p) {
                        return this.animate(i, a, l, p);
                    };
                }
            ),
            (f.timers = []),
            (f.fx.tick = function () {
                var t,
                    i = 0,
                    a = f.timers;
                for (kn = Date.now(); i < a.length; i++)
                    (t = a[i]), !t() && a[i] === t && a.splice(i--, 1);
                a.length || f.fx.stop(), (kn = void 0);
            }),
            (f.fx.timer = function (t) {
                f.timers.push(t), f.fx.start();
            }),
            (f.fx.interval = 13),
            (f.fx.start = function () {
                br || ((br = !0), gi());
            }),
            (f.fx.stop = function () {
                br = null;
            }),
            (f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (f.fn.delay = function (t, i) {
                return (
                    (t = (f.fx && f.fx.speeds[t]) || t),
                    (i = i || 'fx'),
                    this.queue(i, function (a, l) {
                        var p = n.setTimeout(a, t);
                        l.stop = function () {
                            n.clearTimeout(p);
                        };
                    })
                );
            }),
            (function () {
                var t = O.createElement('input'),
                    i = O.createElement('select'),
                    a = i.appendChild(O.createElement('option'));
                (t.type = 'checkbox'),
                    (T.checkOn = t.value !== ''),
                    (T.optSelected = a.selected),
                    (t = O.createElement('input')),
                    (t.value = 't'),
                    (t.type = 'radio'),
                    (T.radioValue = t.value === 't');
            })();
        var Ko,
            Jn = f.expr.attrHandle;
        f.fn.extend({
            attr: function (t, i) {
                return Ye(this, f.attr, t, i, arguments.length > 1);
            },
            removeAttr: function (t) {
                return this.each(function () {
                    f.removeAttr(this, t);
                });
            },
        }),
            f.extend({
                attr: function (t, i, a) {
                    var l,
                        p,
                        h = t.nodeType;
                    if (!(h === 3 || h === 8 || h === 2)) {
                        if (typeof t.getAttribute > 'u') return f.prop(t, i, a);
                        if (
                            ((h !== 1 || !f.isXMLDoc(t)) &&
                                (p =
                                    f.attrHooks[i.toLowerCase()] ||
                                    (f.expr.match.bool.test(i) ? Ko : void 0)),
                            a !== void 0)
                        ) {
                            if (a === null) {
                                f.removeAttr(t, i);
                                return;
                            }
                            return p &&
                                'set' in p &&
                                (l = p.set(t, a, i)) !== void 0
                                ? l
                                : (t.setAttribute(i, a + ''), a);
                        }
                        return p && 'get' in p && (l = p.get(t, i)) !== null
                            ? l
                            : ((l = f.find.attr(t, i)), l ?? void 0);
                    }
                },
                attrHooks: {
                    type: {
                        set: function (t, i) {
                            if (
                                !T.radioValue &&
                                i === 'radio' &&
                                ke(t, 'input')
                            ) {
                                var a = t.value;
                                return (
                                    t.setAttribute('type', i),
                                    a && (t.value = a),
                                    i
                                );
                            }
                        },
                    },
                },
                removeAttr: function (t, i) {
                    var a,
                        l = 0,
                        p = i && i.match(Ge);
                    if (p && t.nodeType === 1)
                        for (; (a = p[l++]); ) t.removeAttribute(a);
                },
            }),
            (Ko = {
                set: function (t, i, a) {
                    return (
                        i === !1 ? f.removeAttr(t, a) : t.setAttribute(a, a), a
                    );
                },
            }),
            f.each(f.expr.match.bool.source.match(/\w+/g), function (t, i) {
                var a = Jn[i] || f.find.attr;
                Jn[i] = function (l, p, h) {
                    var _,
                        S,
                        w = p.toLowerCase();
                    return (
                        h ||
                            ((S = Jn[w]),
                            (Jn[w] = _),
                            (_ = a(l, p, h) != null ? w : null),
                            (Jn[w] = S)),
                        _
                    );
                };
            });
        var bu = /^(?:input|select|textarea|button)$/i,
            wu = /^(?:a|area)$/i;
        f.fn.extend({
            prop: function (t, i) {
                return Ye(this, f.prop, t, i, arguments.length > 1);
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[f.propFix[t] || t];
                });
            },
        }),
            f.extend({
                prop: function (t, i, a) {
                    var l,
                        p,
                        h = t.nodeType;
                    if (!(h === 3 || h === 8 || h === 2))
                        return (
                            (h !== 1 || !f.isXMLDoc(t)) &&
                                ((i = f.propFix[i] || i), (p = f.propHooks[i])),
                            a !== void 0
                                ? p &&
                                  'set' in p &&
                                  (l = p.set(t, a, i)) !== void 0
                                    ? l
                                    : (t[i] = a)
                                : p && 'get' in p && (l = p.get(t, i)) !== null
                                  ? l
                                  : t[i]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var i = f.find.attr(t, 'tabindex');
                            return i
                                ? parseInt(i, 10)
                                : bu.test(t.nodeName) ||
                                    (wu.test(t.nodeName) && t.href)
                                  ? 0
                                  : -1;
                        },
                    },
                },
                propFix: { for: 'htmlFor', class: 'className' },
            }),
            T.optSelected ||
                (f.propHooks.selected = {
                    get: function (t) {
                        var i = t.parentNode;
                        return (
                            i && i.parentNode && i.parentNode.selectedIndex,
                            null
                        );
                    },
                    set: function (t) {
                        var i = t.parentNode;
                        i &&
                            (i.selectedIndex,
                            i.parentNode && i.parentNode.selectedIndex);
                    },
                }),
            f.each(
                [
                    'tabIndex',
                    'readOnly',
                    'maxLength',
                    'cellSpacing',
                    'cellPadding',
                    'rowSpan',
                    'colSpan',
                    'useMap',
                    'frameBorder',
                    'contentEditable',
                ],
                function () {
                    f.propFix[this.toLowerCase()] = this;
                }
            );
        function cn(t) {
            var i = t.match(Ge) || [];
            return i.join(' ');
        }
        function dn(t) {
            return (t.getAttribute && t.getAttribute('class')) || '';
        }
        function _i(t) {
            return Array.isArray(t)
                ? t
                : typeof t == 'string'
                  ? t.match(Ge) || []
                  : [];
        }
        f.fn.extend({
            addClass: function (t) {
                var i, a, l, p, h, _;
                return E(t)
                    ? this.each(function (S) {
                          f(this).addClass(t.call(this, S, dn(this)));
                      })
                    : ((i = _i(t)),
                      i.length
                          ? this.each(function () {
                                if (
                                    ((l = dn(this)),
                                    (a =
                                        this.nodeType === 1 &&
                                        ' ' + cn(l) + ' '),
                                    a)
                                ) {
                                    for (h = 0; h < i.length; h++)
                                        (p = i[h]),
                                            a.indexOf(' ' + p + ' ') < 0 &&
                                                (a += p + ' ');
                                    (_ = cn(a)),
                                        l !== _ &&
                                            this.setAttribute('class', _);
                                }
                            })
                          : this);
            },
            removeClass: function (t) {
                var i, a, l, p, h, _;
                return E(t)
                    ? this.each(function (S) {
                          f(this).removeClass(t.call(this, S, dn(this)));
                      })
                    : arguments.length
                      ? ((i = _i(t)),
                        i.length
                            ? this.each(function () {
                                  if (
                                      ((l = dn(this)),
                                      (a =
                                          this.nodeType === 1 &&
                                          ' ' + cn(l) + ' '),
                                      a)
                                  ) {
                                      for (h = 0; h < i.length; h++)
                                          for (
                                              p = i[h];
                                              a.indexOf(' ' + p + ' ') > -1;

                                          )
                                              a = a.replace(' ' + p + ' ', ' ');
                                      (_ = cn(a)),
                                          l !== _ &&
                                              this.setAttribute('class', _);
                                  }
                              })
                            : this)
                      : this.attr('class', '');
            },
            toggleClass: function (t, i) {
                var a,
                    l,
                    p,
                    h,
                    _ = typeof t,
                    S = _ === 'string' || Array.isArray(t);
                return E(t)
                    ? this.each(function (w) {
                          f(this).toggleClass(t.call(this, w, dn(this), i), i);
                      })
                    : typeof i == 'boolean' && S
                      ? i
                          ? this.addClass(t)
                          : this.removeClass(t)
                      : ((a = _i(t)),
                        this.each(function () {
                            if (S)
                                for (h = f(this), p = 0; p < a.length; p++)
                                    (l = a[p]),
                                        h.hasClass(l)
                                            ? h.removeClass(l)
                                            : h.addClass(l);
                            else
                                (t === void 0 || _ === 'boolean') &&
                                    ((l = dn(this)),
                                    l && L.set(this, '__className__', l),
                                    this.setAttribute &&
                                        this.setAttribute(
                                            'class',
                                            l || t === !1
                                                ? ''
                                                : L.get(
                                                      this,
                                                      '__className__'
                                                  ) || ''
                                        ));
                        }));
            },
            hasClass: function (t) {
                var i,
                    a,
                    l = 0;
                for (i = ' ' + t + ' '; (a = this[l++]); )
                    if (
                        a.nodeType === 1 &&
                        (' ' + cn(dn(a)) + ' ').indexOf(i) > -1
                    )
                        return !0;
                return !1;
            },
        });
        var xu = /\r/g;
        f.fn.extend({
            val: function (t) {
                var i,
                    a,
                    l,
                    p = this[0];
                return arguments.length
                    ? ((l = E(t)),
                      this.each(function (h) {
                          var _;
                          this.nodeType === 1 &&
                              (l
                                  ? (_ = t.call(this, h, f(this).val()))
                                  : (_ = t),
                              _ == null
                                  ? (_ = '')
                                  : typeof _ == 'number'
                                    ? (_ += '')
                                    : Array.isArray(_) &&
                                      (_ = f.map(_, function (S) {
                                          return S == null ? '' : S + '';
                                      })),
                              (i =
                                  f.valHooks[this.type] ||
                                  f.valHooks[this.nodeName.toLowerCase()]),
                              (!i ||
                                  !('set' in i) ||
                                  i.set(this, _, 'value') === void 0) &&
                                  (this.value = _));
                      }))
                    : p
                      ? ((i =
                            f.valHooks[p.type] ||
                            f.valHooks[p.nodeName.toLowerCase()]),
                        i && 'get' in i && (a = i.get(p, 'value')) !== void 0
                            ? a
                            : ((a = p.value),
                              typeof a == 'string'
                                  ? a.replace(xu, '')
                                  : a ?? ''))
                      : void 0;
            },
        }),
            f.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var i = f.find.attr(t, 'value');
                            return i ?? cn(f.text(t));
                        },
                    },
                    select: {
                        get: function (t) {
                            var i,
                                a,
                                l,
                                p = t.options,
                                h = t.selectedIndex,
                                _ = t.type === 'select-one',
                                S = _ ? null : [],
                                w = _ ? h + 1 : p.length;
                            for (h < 0 ? (l = w) : (l = _ ? h : 0); l < w; l++)
                                if (
                                    ((a = p[l]),
                                    (a.selected || l === h) &&
                                        !a.disabled &&
                                        (!a.parentNode.disabled ||
                                            !ke(a.parentNode, 'optgroup')))
                                ) {
                                    if (((i = f(a).val()), _)) return i;
                                    S.push(i);
                                }
                            return S;
                        },
                        set: function (t, i) {
                            for (
                                var a,
                                    l,
                                    p = t.options,
                                    h = f.makeArray(i),
                                    _ = p.length;
                                _--;

                            )
                                (l = p[_]),
                                    (l.selected =
                                        f.inArray(f.valHooks.option.get(l), h) >
                                        -1) && (a = !0);
                            return a || (t.selectedIndex = -1), h;
                        },
                    },
                },
            }),
            f.each(['radio', 'checkbox'], function () {
                (f.valHooks[this] = {
                    set: function (t, i) {
                        if (Array.isArray(i))
                            return (t.checked = f.inArray(f(t).val(), i) > -1);
                    },
                }),
                    T.checkOn ||
                        (f.valHooks[this].get = function (t) {
                            return t.getAttribute('value') === null
                                ? 'on'
                                : t.value;
                        });
            }),
            (T.focusin = 'onfocusin' in n);
        var Xo = /^(?:focusinfocus|focusoutblur)$/,
            zo = function (t) {
                t.stopPropagation();
            };
        f.extend(f.event, {
            trigger: function (t, i, a, l) {
                var p,
                    h,
                    _,
                    S,
                    w,
                    k,
                    H,
                    W,
                    D = [a || O],
                    R = s.call(t, 'type') ? t.type : t,
                    re = s.call(t, 'namespace') ? t.namespace.split('.') : [];
                if (
                    ((h = W = _ = a = a || O),
                    !(a.nodeType === 3 || a.nodeType === 8) &&
                        !Xo.test(R + f.event.triggered) &&
                        (R.indexOf('.') > -1 &&
                            ((re = R.split('.')), (R = re.shift()), re.sort()),
                        (w = R.indexOf(':') < 0 && 'on' + R),
                        (t = t[f.expando]
                            ? t
                            : new f.Event(R, typeof t == 'object' && t)),
                        (t.isTrigger = l ? 2 : 3),
                        (t.namespace = re.join('.')),
                        (t.rnamespace = t.namespace
                            ? new RegExp(
                                  '(^|\\.)' +
                                      re.join('\\.(?:.*\\.|)') +
                                      '(\\.|$)'
                              )
                            : null),
                        (t.result = void 0),
                        t.target || (t.target = a),
                        (i = i == null ? [t] : f.makeArray(i, [t])),
                        (H = f.event.special[R] || {}),
                        !(!l && H.trigger && H.trigger.apply(a, i) === !1)))
                ) {
                    if (!l && !H.noBubble && !j(a)) {
                        for (
                            S = H.delegateType || R,
                                Xo.test(S + R) || (h = h.parentNode);
                            h;
                            h = h.parentNode
                        )
                            D.push(h), (_ = h);
                        _ === (a.ownerDocument || O) &&
                            D.push(_.defaultView || _.parentWindow || n);
                    }
                    for (p = 0; (h = D[p++]) && !t.isPropagationStopped(); )
                        (W = h),
                            (t.type = p > 1 ? S : H.bindType || R),
                            (k =
                                (L.get(h, 'events') || Object.create(null))[
                                    t.type
                                ] && L.get(h, 'handle')),
                            k && k.apply(h, i),
                            (k = w && h[w]),
                            k &&
                                k.apply &&
                                F(h) &&
                                ((t.result = k.apply(h, i)),
                                t.result === !1 && t.preventDefault());
                    return (
                        (t.type = R),
                        !l &&
                            !t.isDefaultPrevented() &&
                            (!H._default ||
                                H._default.apply(D.pop(), i) === !1) &&
                            F(a) &&
                            w &&
                            E(a[R]) &&
                            !j(a) &&
                            ((_ = a[w]),
                            _ && (a[w] = null),
                            (f.event.triggered = R),
                            t.isPropagationStopped() &&
                                W.addEventListener(R, zo),
                            a[R](),
                            t.isPropagationStopped() &&
                                W.removeEventListener(R, zo),
                            (f.event.triggered = void 0),
                            _ && (a[w] = _)),
                        t.result
                    );
                }
            },
            simulate: function (t, i, a) {
                var l = f.extend(new f.Event(), a, {
                    type: t,
                    isSimulated: !0,
                });
                f.event.trigger(l, null, i);
            },
        }),
            f.fn.extend({
                trigger: function (t, i) {
                    return this.each(function () {
                        f.event.trigger(t, i, this);
                    });
                },
                triggerHandler: function (t, i) {
                    var a = this[0];
                    if (a) return f.event.trigger(t, i, a, !0);
                },
            }),
            T.focusin ||
                f.each({ focus: 'focusin', blur: 'focusout' }, function (t, i) {
                    var a = function (l) {
                        f.event.simulate(i, l.target, f.event.fix(l));
                    };
                    f.event.special[i] = {
                        setup: function () {
                            var l = this.ownerDocument || this.document || this,
                                p = L.access(l, i);
                            p || l.addEventListener(t, a, !0),
                                L.access(l, i, (p || 0) + 1);
                        },
                        teardown: function () {
                            var l = this.ownerDocument || this.document || this,
                                p = L.access(l, i) - 1;
                            p
                                ? L.access(l, i, p)
                                : (l.removeEventListener(t, a, !0),
                                  L.remove(l, i));
                        },
                    };
                });
        var Zn = n.location,
            Qo = { guid: Date.now() },
            vi = /\?/;
        f.parseXML = function (t) {
            var i, a;
            if (!t || typeof t != 'string') return null;
            try {
                i = new n.DOMParser().parseFromString(t, 'text/xml');
            } catch {}
            return (
                (a = i && i.getElementsByTagName('parsererror')[0]),
                (!i || a) &&
                    f.error(
                        'Invalid XML: ' +
                            (a
                                ? f.map(a.childNodes, function (l) {
                                      return l.textContent;
                                  }).join(`
`)
                                : t)
                    ),
                i
            );
        };
        var Tu = /\[\]$/,
            Yo = /\r?\n/g,
            Au = /^(?:submit|button|image|reset|file)$/i,
            Su = /^(?:input|select|textarea|keygen)/i;
        function mi(t, i, a, l) {
            var p;
            if (Array.isArray(i))
                f.each(i, function (h, _) {
                    a || Tu.test(t)
                        ? l(t, _)
                        : mi(
                              t +
                                  '[' +
                                  (typeof _ == 'object' && _ != null ? h : '') +
                                  ']',
                              _,
                              a,
                              l
                          );
                });
            else if (!a && ce(i) === 'object')
                for (p in i) mi(t + '[' + p + ']', i[p], a, l);
            else l(t, i);
        }
        (f.param = function (t, i) {
            var a,
                l = [],
                p = function (h, _) {
                    var S = E(_) ? _() : _;
                    l[l.length] =
                        encodeURIComponent(h) +
                        '=' +
                        encodeURIComponent(S ?? '');
                };
            if (t == null) return '';
            if (Array.isArray(t) || (t.jquery && !f.isPlainObject(t)))
                f.each(t, function () {
                    p(this.name, this.value);
                });
            else for (a in t) mi(a, t[a], i, p);
            return l.join('&');
        }),
            f.fn.extend({
                serialize: function () {
                    return f.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = f.prop(this, 'elements');
                        return t ? f.makeArray(t) : this;
                    })
                        .filter(function () {
                            var t = this.type;
                            return (
                                this.name &&
                                !f(this).is(':disabled') &&
                                Su.test(this.nodeName) &&
                                !Au.test(t) &&
                                (this.checked || !St.test(t))
                            );
                        })
                        .map(function (t, i) {
                            var a = f(this).val();
                            return a == null
                                ? null
                                : Array.isArray(a)
                                  ? f.map(a, function (l) {
                                        return {
                                            name: i.name,
                                            value: l.replace(
                                                Yo,
                                                `\r
`
                                            ),
                                        };
                                    })
                                  : {
                                        name: i.name,
                                        value: a.replace(
                                            Yo,
                                            `\r
`
                                        ),
                                    };
                        })
                        .get();
                },
            });
        var Cu = /%20/g,
            Eu = /#.*$/,
            Ou = /([?&])_=[^&]*/,
            Mu = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pu = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Iu = /^(?:GET|HEAD)$/,
            ku = /^\/\//,
            Jo = {},
            yi = {},
            Zo = '*/'.concat('*'),
            bi = O.createElement('a');
        bi.href = Zn.href;
        function es(t) {
            return function (i, a) {
                typeof i != 'string' && ((a = i), (i = '*'));
                var l,
                    p = 0,
                    h = i.toLowerCase().match(Ge) || [];
                if (E(a))
                    for (; (l = h[p++]); )
                        l[0] === '+'
                            ? ((l = l.slice(1) || '*'),
                              (t[l] = t[l] || []).unshift(a))
                            : (t[l] = t[l] || []).push(a);
            };
        }
        function ts(t, i, a, l) {
            var p = {},
                h = t === yi;
            function _(S) {
                var w;
                return (
                    (p[S] = !0),
                    f.each(t[S] || [], function (k, H) {
                        var W = H(i, a, l);
                        if (typeof W == 'string' && !h && !p[W])
                            return i.dataTypes.unshift(W), _(W), !1;
                        if (h) return !(w = W);
                    }),
                    w
                );
            }
            return _(i.dataTypes[0]) || (!p['*'] && _('*'));
        }
        function wi(t, i) {
            var a,
                l,
                p = f.ajaxSettings.flatOptions || {};
            for (a in i)
                i[a] !== void 0 && ((p[a] ? t : l || (l = {}))[a] = i[a]);
            return l && f.extend(!0, t, l), t;
        }
        function Nu(t, i, a) {
            for (
                var l, p, h, _, S = t.contents, w = t.dataTypes;
                w[0] === '*';

            )
                w.shift(),
                    l === void 0 &&
                        (l = t.mimeType || i.getResponseHeader('Content-Type'));
            if (l) {
                for (p in S)
                    if (S[p] && S[p].test(l)) {
                        w.unshift(p);
                        break;
                    }
            }
            if (w[0] in a) h = w[0];
            else {
                for (p in a) {
                    if (!w[0] || t.converters[p + ' ' + w[0]]) {
                        h = p;
                        break;
                    }
                    _ || (_ = p);
                }
                h = h || _;
            }
            if (h) return h !== w[0] && w.unshift(h), a[h];
        }
        function Lu(t, i, a, l) {
            var p,
                h,
                _,
                S,
                w,
                k = {},
                H = t.dataTypes.slice();
            if (H[1])
                for (_ in t.converters) k[_.toLowerCase()] = t.converters[_];
            for (h = H.shift(); h; )
                if (
                    (t.responseFields[h] && (a[t.responseFields[h]] = i),
                    !w &&
                        l &&
                        t.dataFilter &&
                        (i = t.dataFilter(i, t.dataType)),
                    (w = h),
                    (h = H.shift()),
                    h)
                ) {
                    if (h === '*') h = w;
                    else if (w !== '*' && w !== h) {
                        if (((_ = k[w + ' ' + h] || k['* ' + h]), !_)) {
                            for (p in k)
                                if (
                                    ((S = p.split(' ')),
                                    S[1] === h &&
                                        ((_ =
                                            k[w + ' ' + S[0]] ||
                                            k['* ' + S[0]]),
                                        _))
                                ) {
                                    _ === !0
                                        ? (_ = k[p])
                                        : k[p] !== !0 &&
                                          ((h = S[0]), H.unshift(S[1]));
                                    break;
                                }
                        }
                        if (_ !== !0)
                            if (_ && t.throws) i = _(i);
                            else
                                try {
                                    i = _(i);
                                } catch (W) {
                                    return {
                                        state: 'parsererror',
                                        error: _
                                            ? W
                                            : 'No conversion from ' +
                                              w +
                                              ' to ' +
                                              h,
                                    };
                                }
                    }
                }
            return { state: 'success', data: i };
        }
        f.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Zn.href,
                type: 'GET',
                isLocal: Pu.test(Zn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': Zo,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON',
                },
                converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': f.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, i) {
                return i ? wi(wi(t, f.ajaxSettings), i) : wi(f.ajaxSettings, t);
            },
            ajaxPrefilter: es(Jo),
            ajaxTransport: es(yi),
            ajax: function (t, i) {
                typeof t == 'object' && ((i = t), (t = void 0)), (i = i || {});
                var a,
                    l,
                    p,
                    h,
                    _,
                    S,
                    w,
                    k,
                    H,
                    W,
                    D = f.ajaxSetup({}, i),
                    R = D.context || D,
                    re = D.context && (R.nodeType || R.jquery) ? f(R) : f.event,
                    he = f.Deferred(),
                    ne = f.Callbacks('once memory'),
                    We = D.statusCode || {},
                    $e = {},
                    pt = {},
                    Oe = 'canceled',
                    pe = {
                        readyState: 0,
                        getResponseHeader: function (be) {
                            var Fe;
                            if (w) {
                                if (!h)
                                    for (h = {}; (Fe = Mu.exec(p)); )
                                        h[Fe[1].toLowerCase() + ' '] = (
                                            h[Fe[1].toLowerCase() + ' '] || []
                                        ).concat(Fe[2]);
                                Fe = h[be.toLowerCase() + ' '];
                            }
                            return Fe == null ? null : Fe.join(', ');
                        },
                        getAllResponseHeaders: function () {
                            return w ? p : null;
                        },
                        setRequestHeader: function (be, Fe) {
                            return (
                                w == null &&
                                    ((be = pt[be.toLowerCase()] =
                                        pt[be.toLowerCase()] || be),
                                    ($e[be] = Fe)),
                                this
                            );
                        },
                        overrideMimeType: function (be) {
                            return w == null && (D.mimeType = be), this;
                        },
                        statusCode: function (be) {
                            var Fe;
                            if (be)
                                if (w) pe.always(be[pe.status]);
                                else for (Fe in be) We[Fe] = [We[Fe], be[Fe]];
                            return this;
                        },
                        abort: function (be) {
                            var Fe = be || Oe;
                            return a && a.abort(Fe), ut(0, Fe), this;
                        },
                    };
                if (
                    (he.promise(pe),
                    (D.url = ((t || D.url || Zn.href) + '').replace(
                        ku,
                        Zn.protocol + '//'
                    )),
                    (D.type = i.method || i.type || D.method || D.type),
                    (D.dataTypes = (D.dataType || '*')
                        .toLowerCase()
                        .match(Ge) || ['']),
                    D.crossDomain == null)
                ) {
                    S = O.createElement('a');
                    try {
                        (S.href = D.url),
                            (S.href = S.href),
                            (D.crossDomain =
                                bi.protocol + '//' + bi.host !=
                                S.protocol + '//' + S.host);
                    } catch {
                        D.crossDomain = !0;
                    }
                }
                if (
                    (D.data &&
                        D.processData &&
                        typeof D.data != 'string' &&
                        (D.data = f.param(D.data, D.traditional)),
                    ts(Jo, D, i, pe),
                    w)
                )
                    return pe;
                (k = f.event && D.global),
                    k && f.active++ === 0 && f.event.trigger('ajaxStart'),
                    (D.type = D.type.toUpperCase()),
                    (D.hasContent = !Iu.test(D.type)),
                    (l = D.url.replace(Eu, '')),
                    D.hasContent
                        ? D.data &&
                          D.processData &&
                          (D.contentType || '').indexOf(
                              'application/x-www-form-urlencoded'
                          ) === 0 &&
                          (D.data = D.data.replace(Cu, '+'))
                        : ((W = D.url.slice(l.length)),
                          D.data &&
                              (D.processData || typeof D.data == 'string') &&
                              ((l += (vi.test(l) ? '&' : '?') + D.data),
                              delete D.data),
                          D.cache === !1 &&
                              ((l = l.replace(Ou, '$1')),
                              (W =
                                  (vi.test(l) ? '&' : '?') +
                                  '_=' +
                                  Qo.guid++ +
                                  W)),
                          (D.url = l + W)),
                    D.ifModified &&
                        (f.lastModified[l] &&
                            pe.setRequestHeader(
                                'If-Modified-Since',
                                f.lastModified[l]
                            ),
                        f.etag[l] &&
                            pe.setRequestHeader('If-None-Match', f.etag[l])),
                    ((D.data && D.hasContent && D.contentType !== !1) ||
                        i.contentType) &&
                        pe.setRequestHeader('Content-Type', D.contentType),
                    pe.setRequestHeader(
                        'Accept',
                        D.dataTypes[0] && D.accepts[D.dataTypes[0]]
                            ? D.accepts[D.dataTypes[0]] +
                                  (D.dataTypes[0] !== '*'
                                      ? ', ' + Zo + '; q=0.01'
                                      : '')
                            : D.accepts['*']
                    );
                for (H in D.headers) pe.setRequestHeader(H, D.headers[H]);
                if (D.beforeSend && (D.beforeSend.call(R, pe, D) === !1 || w))
                    return pe.abort();
                if (
                    ((Oe = 'abort'),
                    ne.add(D.complete),
                    pe.done(D.success),
                    pe.fail(D.error),
                    (a = ts(yi, D, i, pe)),
                    !a)
                )
                    ut(-1, 'No Transport');
                else {
                    if (
                        ((pe.readyState = 1),
                        k && re.trigger('ajaxSend', [pe, D]),
                        w)
                    )
                        return pe;
                    D.async &&
                        D.timeout > 0 &&
                        (_ = n.setTimeout(function () {
                            pe.abort('timeout');
                        }, D.timeout));
                    try {
                        (w = !1), a.send($e, ut);
                    } catch (be) {
                        if (w) throw be;
                        ut(-1, be);
                    }
                }
                function ut(be, Fe, tr, xr) {
                    var ht,
                        pn,
                        hn,
                        lt,
                        Zt,
                        yt = Fe;
                    w ||
                        ((w = !0),
                        _ && n.clearTimeout(_),
                        (a = void 0),
                        (p = xr || ''),
                        (pe.readyState = be > 0 ? 4 : 0),
                        (ht = (be >= 200 && be < 300) || be === 304),
                        tr && (lt = Nu(D, pe, tr)),
                        !ht &&
                            f.inArray('script', D.dataTypes) > -1 &&
                            f.inArray('json', D.dataTypes) < 0 &&
                            (D.converters['text script'] = function () {}),
                        (lt = Lu(D, lt, pe, ht)),
                        ht
                            ? (D.ifModified &&
                                  ((Zt = pe.getResponseHeader('Last-Modified')),
                                  Zt && (f.lastModified[l] = Zt),
                                  (Zt = pe.getResponseHeader('etag')),
                                  Zt && (f.etag[l] = Zt)),
                              be === 204 || D.type === 'HEAD'
                                  ? (yt = 'nocontent')
                                  : be === 304
                                    ? (yt = 'notmodified')
                                    : ((yt = lt.state),
                                      (pn = lt.data),
                                      (hn = lt.error),
                                      (ht = !hn)))
                            : ((hn = yt),
                              (be || !yt) &&
                                  ((yt = 'error'), be < 0 && (be = 0))),
                        (pe.status = be),
                        (pe.statusText = (Fe || yt) + ''),
                        ht
                            ? he.resolveWith(R, [pn, yt, pe])
                            : he.rejectWith(R, [pe, yt, hn]),
                        pe.statusCode(We),
                        (We = void 0),
                        k &&
                            re.trigger(ht ? 'ajaxSuccess' : 'ajaxError', [
                                pe,
                                D,
                                ht ? pn : hn,
                            ]),
                        ne.fireWith(R, [pe, yt]),
                        k &&
                            (re.trigger('ajaxComplete', [pe, D]),
                            --f.active || f.event.trigger('ajaxStop')));
                }
                return pe;
            },
            getJSON: function (t, i, a) {
                return f.get(t, i, a, 'json');
            },
            getScript: function (t, i) {
                return f.get(t, void 0, i, 'script');
            },
        }),
            f.each(['get', 'post'], function (t, i) {
                f[i] = function (a, l, p, h) {
                    return (
                        E(l) && ((h = h || p), (p = l), (l = void 0)),
                        f.ajax(
                            f.extend(
                                {
                                    url: a,
                                    type: i,
                                    dataType: h,
                                    data: l,
                                    success: p,
                                },
                                f.isPlainObject(a) && a
                            )
                        )
                    );
                };
            }),
            f.ajaxPrefilter(function (t) {
                var i;
                for (i in t.headers)
                    i.toLowerCase() === 'content-type' &&
                        (t.contentType = t.headers[i] || '');
            }),
            (f._evalUrl = function (t, i, a) {
                return f.ajax({
                    url: t,
                    type: 'GET',
                    dataType: 'script',
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { 'text script': function () {} },
                    dataFilter: function (l) {
                        f.globalEval(l, i, a);
                    },
                });
            }),
            f.fn.extend({
                wrapAll: function (t) {
                    var i;
                    return (
                        this[0] &&
                            (E(t) && (t = t.call(this[0])),
                            (i = f(t, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && i.insertBefore(this[0]),
                            i
                                .map(function () {
                                    for (var a = this; a.firstElementChild; )
                                        a = a.firstElementChild;
                                    return a;
                                })
                                .append(this)),
                        this
                    );
                },
                wrapInner: function (t) {
                    return E(t)
                        ? this.each(function (i) {
                              f(this).wrapInner(t.call(this, i));
                          })
                        : this.each(function () {
                              var i = f(this),
                                  a = i.contents();
                              a.length ? a.wrapAll(t) : i.append(t);
                          });
                },
                wrap: function (t) {
                    var i = E(t);
                    return this.each(function (a) {
                        f(this).wrapAll(i ? t.call(this, a) : t);
                    });
                },
                unwrap: function (t) {
                    return (
                        this.parent(t)
                            .not('body')
                            .each(function () {
                                f(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (f.expr.pseudos.hidden = function (t) {
                return !f.expr.pseudos.visible(t);
            }),
            (f.expr.pseudos.visible = function (t) {
                return !!(
                    t.offsetWidth ||
                    t.offsetHeight ||
                    t.getClientRects().length
                );
            }),
            (f.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest();
                } catch {}
            });
        var Du = { 0: 200, 1223: 204 },
            er = f.ajaxSettings.xhr();
        (T.cors = !!er && 'withCredentials' in er),
            (T.ajax = er = !!er),
            f.ajaxTransport(function (t) {
                var i, a;
                if (T.cors || (er && !t.crossDomain))
                    return {
                        send: function (l, p) {
                            var h,
                                _ = t.xhr();
                            if (
                                (_.open(
                                    t.type,
                                    t.url,
                                    t.async,
                                    t.username,
                                    t.password
                                ),
                                t.xhrFields)
                            )
                                for (h in t.xhrFields) _[h] = t.xhrFields[h];
                            t.mimeType &&
                                _.overrideMimeType &&
                                _.overrideMimeType(t.mimeType),
                                !t.crossDomain &&
                                    !l['X-Requested-With'] &&
                                    (l['X-Requested-With'] = 'XMLHttpRequest');
                            for (h in l) _.setRequestHeader(h, l[h]);
                            (i = function (S) {
                                return function () {
                                    i &&
                                        ((i =
                                            a =
                                            _.onload =
                                            _.onerror =
                                            _.onabort =
                                            _.ontimeout =
                                            _.onreadystatechange =
                                                null),
                                        S === 'abort'
                                            ? _.abort()
                                            : S === 'error'
                                              ? typeof _.status != 'number'
                                                  ? p(0, 'error')
                                                  : p(_.status, _.statusText)
                                              : p(
                                                    Du[_.status] || _.status,
                                                    _.statusText,
                                                    (_.responseType ||
                                                        'text') !== 'text' ||
                                                        typeof _.responseText !=
                                                            'string'
                                                        ? { binary: _.response }
                                                        : {
                                                              text: _.responseText,
                                                          },
                                                    _.getAllResponseHeaders()
                                                ));
                                };
                            }),
                                (_.onload = i()),
                                (a = _.onerror = _.ontimeout = i('error')),
                                _.onabort !== void 0
                                    ? (_.onabort = a)
                                    : (_.onreadystatechange = function () {
                                          _.readyState === 4 &&
                                              n.setTimeout(function () {
                                                  i && a();
                                              });
                                      }),
                                (i = i('abort'));
                            try {
                                _.send((t.hasContent && t.data) || null);
                            } catch (S) {
                                if (i) throw S;
                            }
                        },
                        abort: function () {
                            i && i();
                        },
                    };
            }),
            f.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1);
            }),
            f.ajaxSetup({
                accepts: {
                    script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    'text script': function (t) {
                        return f.globalEval(t), t;
                    },
                },
            }),
            f.ajaxPrefilter('script', function (t) {
                t.cache === void 0 && (t.cache = !1),
                    t.crossDomain && (t.type = 'GET');
            }),
            f.ajaxTransport('script', function (t) {
                if (t.crossDomain || t.scriptAttrs) {
                    var i, a;
                    return {
                        send: function (l, p) {
                            (i = f('<script>')
                                .attr(t.scriptAttrs || {})
                                .prop({ charset: t.scriptCharset, src: t.url })
                                .on(
                                    'load error',
                                    (a = function (h) {
                                        i.remove(),
                                            (a = null),
                                            h &&
                                                p(
                                                    h.type === 'error'
                                                        ? 404
                                                        : 200,
                                                    h.type
                                                );
                                    })
                                )),
                                O.head.appendChild(i[0]);
                        },
                        abort: function () {
                            a && a();
                        },
                    };
                }
            });
        var ns = [],
            xi = /(=)\?(?=&|$)|\?\?/;
        f.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
                var t = ns.pop() || f.expando + '_' + Qo.guid++;
                return (this[t] = !0), t;
            },
        }),
            f.ajaxPrefilter('json jsonp', function (t, i, a) {
                var l,
                    p,
                    h,
                    _ =
                        t.jsonp !== !1 &&
                        (xi.test(t.url)
                            ? 'url'
                            : typeof t.data == 'string' &&
                              (t.contentType || '').indexOf(
                                  'application/x-www-form-urlencoded'
                              ) === 0 &&
                              xi.test(t.data) &&
                              'data');
                if (_ || t.dataTypes[0] === 'jsonp')
                    return (
                        (l = t.jsonpCallback =
                            E(t.jsonpCallback)
                                ? t.jsonpCallback()
                                : t.jsonpCallback),
                        _
                            ? (t[_] = t[_].replace(xi, '$1' + l))
                            : t.jsonp !== !1 &&
                              (t.url +=
                                  (vi.test(t.url) ? '&' : '?') +
                                  t.jsonp +
                                  '=' +
                                  l),
                        (t.converters['script json'] = function () {
                            return h || f.error(l + ' was not called'), h[0];
                        }),
                        (t.dataTypes[0] = 'json'),
                        (p = n[l]),
                        (n[l] = function () {
                            h = arguments;
                        }),
                        a.always(function () {
                            p === void 0 ? f(n).removeProp(l) : (n[l] = p),
                                t[l] &&
                                    ((t.jsonpCallback = i.jsonpCallback),
                                    ns.push(l)),
                                h && E(p) && p(h[0]),
                                (h = p = void 0);
                        }),
                        'script'
                    );
            }),
            (T.createHTMLDocument = (function () {
                var t = O.implementation.createHTMLDocument('').body;
                return (
                    (t.innerHTML = '<form></form><form></form>'),
                    t.childNodes.length === 2
                );
            })()),
            (f.parseHTML = function (t, i, a) {
                if (typeof t != 'string') return [];
                typeof i == 'boolean' && ((a = i), (i = !1));
                var l, p, h;
                return (
                    i ||
                        (T.createHTMLDocument
                            ? ((i = O.implementation.createHTMLDocument('')),
                              (l = i.createElement('base')),
                              (l.href = O.location.href),
                              i.head.appendChild(l))
                            : (i = O)),
                    (p = nt.exec(t)),
                    (h = !a && []),
                    p
                        ? [i.createElement(p[1])]
                        : ((p = Io([t], i, h)),
                          h && h.length && f(h).remove(),
                          f.merge([], p.childNodes))
                );
            }),
            (f.fn.load = function (t, i, a) {
                var l,
                    p,
                    h,
                    _ = this,
                    S = t.indexOf(' ');
                return (
                    S > -1 && ((l = cn(t.slice(S))), (t = t.slice(0, S))),
                    E(i)
                        ? ((a = i), (i = void 0))
                        : i && typeof i == 'object' && (p = 'POST'),
                    _.length > 0 &&
                        f
                            .ajax({
                                url: t,
                                type: p || 'GET',
                                dataType: 'html',
                                data: i,
                            })
                            .done(function (w) {
                                (h = arguments),
                                    _.html(
                                        l
                                            ? f('<div>')
                                                  .append(f.parseHTML(w))
                                                  .find(l)
                                            : w
                                    );
                            })
                            .always(
                                a &&
                                    function (w, k) {
                                        _.each(function () {
                                            a.apply(
                                                this,
                                                h || [w.responseText, k, w]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (f.expr.pseudos.animated = function (t) {
                return f.grep(f.timers, function (i) {
                    return t === i.elem;
                }).length;
            }),
            (f.offset = {
                setOffset: function (t, i, a) {
                    var l,
                        p,
                        h,
                        _,
                        S,
                        w,
                        k,
                        H = f.css(t, 'position'),
                        W = f(t),
                        D = {};
                    H === 'static' && (t.style.position = 'relative'),
                        (S = W.offset()),
                        (h = f.css(t, 'top')),
                        (w = f.css(t, 'left')),
                        (k =
                            (H === 'absolute' || H === 'fixed') &&
                            (h + w).indexOf('auto') > -1),
                        k
                            ? ((l = W.position()), (_ = l.top), (p = l.left))
                            : ((_ = parseFloat(h) || 0),
                              (p = parseFloat(w) || 0)),
                        E(i) && (i = i.call(t, a, f.extend({}, S))),
                        i.top != null && (D.top = i.top - S.top + _),
                        i.left != null && (D.left = i.left - S.left + p),
                        'using' in i ? i.using.call(t, D) : W.css(D);
                },
            }),
            f.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return t === void 0
                            ? this
                            : this.each(function (p) {
                                  f.offset.setOffset(this, t, p);
                              });
                    var i,
                        a,
                        l = this[0];
                    if (l)
                        return l.getClientRects().length
                            ? ((i = l.getBoundingClientRect()),
                              (a = l.ownerDocument.defaultView),
                              {
                                  top: i.top + a.pageYOffset,
                                  left: i.left + a.pageXOffset,
                              })
                            : { top: 0, left: 0 };
                },
                position: function () {
                    if (this[0]) {
                        var t,
                            i,
                            a,
                            l = this[0],
                            p = { top: 0, left: 0 };
                        if (f.css(l, 'position') === 'fixed')
                            i = l.getBoundingClientRect();
                        else {
                            for (
                                i = this.offset(),
                                    a = l.ownerDocument,
                                    t = l.offsetParent || a.documentElement;
                                t &&
                                (t === a.body || t === a.documentElement) &&
                                f.css(t, 'position') === 'static';

                            )
                                t = t.parentNode;
                            t &&
                                t !== l &&
                                t.nodeType === 1 &&
                                ((p = f(t).offset()),
                                (p.top += f.css(t, 'borderTopWidth', !0)),
                                (p.left += f.css(t, 'borderLeftWidth', !0)));
                        }
                        return {
                            top: i.top - p.top - f.css(l, 'marginTop', !0),
                            left: i.left - p.left - f.css(l, 'marginLeft', !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var t = this.offsetParent;
                            t && f.css(t, 'position') === 'static';

                        )
                            t = t.offsetParent;
                        return t || se;
                    });
                },
            }),
            f.each(
                { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                function (t, i) {
                    var a = i === 'pageYOffset';
                    f.fn[t] = function (l) {
                        return Ye(
                            this,
                            function (p, h, _) {
                                var S;
                                if (
                                    (j(p)
                                        ? (S = p)
                                        : p.nodeType === 9 &&
                                          (S = p.defaultView),
                                    _ === void 0)
                                )
                                    return S ? S[i] : p[h];
                                S
                                    ? S.scrollTo(
                                          a ? S.pageXOffset : _,
                                          a ? _ : S.pageYOffset
                                      )
                                    : (p[h] = _);
                            },
                            t,
                            l,
                            arguments.length
                        );
                    };
                }
            ),
            f.each(['top', 'left'], function (t, i) {
                f.cssHooks[i] = Fo(T.pixelPosition, function (a, l) {
                    if (l)
                        return (
                            (l = Yn(a, i)),
                            ci.test(l) ? f(a).position()[i] + 'px' : l
                        );
                });
            }),
            f.each({ Height: 'height', Width: 'width' }, function (t, i) {
                f.each(
                    { padding: 'inner' + t, content: i, '': 'outer' + t },
                    function (a, l) {
                        f.fn[l] = function (p, h) {
                            var _ =
                                    arguments.length &&
                                    (a || typeof p != 'boolean'),
                                S =
                                    a ||
                                    (p === !0 || h === !0
                                        ? 'margin'
                                        : 'border');
                            return Ye(
                                this,
                                function (w, k, H) {
                                    var W;
                                    return j(w)
                                        ? l.indexOf('outer') === 0
                                            ? w['inner' + t]
                                            : w.document.documentElement[
                                                  'client' + t
                                              ]
                                        : w.nodeType === 9
                                          ? ((W = w.documentElement),
                                            Math.max(
                                                w.body['scroll' + t],
                                                W['scroll' + t],
                                                w.body['offset' + t],
                                                W['offset' + t],
                                                W['client' + t]
                                            ))
                                          : H === void 0
                                            ? f.css(w, k, S)
                                            : f.style(w, k, H, S);
                                },
                                i,
                                _ ? p : void 0,
                                _
                            );
                        };
                    }
                );
            }),
            f.each(
                [
                    'ajaxStart',
                    'ajaxStop',
                    'ajaxComplete',
                    'ajaxError',
                    'ajaxSuccess',
                    'ajaxSend',
                ],
                function (t, i) {
                    f.fn[i] = function (a) {
                        return this.on(i, a);
                    };
                }
            ),
            f.fn.extend({
                bind: function (t, i, a) {
                    return this.on(t, null, i, a);
                },
                unbind: function (t, i) {
                    return this.off(t, null, i);
                },
                delegate: function (t, i, a, l) {
                    return this.on(i, t, a, l);
                },
                undelegate: function (t, i, a) {
                    return arguments.length === 1
                        ? this.off(t, '**')
                        : this.off(i, t || '**', a);
                },
                hover: function (t, i) {
                    return this.mouseenter(t).mouseleave(i || t);
                },
            }),
            f.each(
                'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                    ' '
                ),
                function (t, i) {
                    f.fn[i] = function (a, l) {
                        return arguments.length > 0
                            ? this.on(i, null, a, l)
                            : this.trigger(i);
                    };
                }
            );
        var Hu = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (f.proxy = function (t, i) {
            var a, l, p;
            if (
                (typeof i == 'string' && ((a = t[i]), (i = t), (t = a)), !!E(t))
            )
                return (
                    (l = c.call(arguments, 2)),
                    (p = function () {
                        return t.apply(i || this, l.concat(c.call(arguments)));
                    }),
                    (p.guid = t.guid = t.guid || f.guid++),
                    p
                );
        }),
            (f.holdReady = function (t) {
                t ? f.readyWait++ : f.ready(!0);
            }),
            (f.isArray = Array.isArray),
            (f.parseJSON = JSON.parse),
            (f.nodeName = ke),
            (f.isFunction = E),
            (f.isWindow = j),
            (f.camelCase = P),
            (f.type = ce),
            (f.now = Date.now),
            (f.isNumeric = function (t) {
                var i = f.type(t);
                return (
                    (i === 'number' || i === 'string') &&
                    !isNaN(t - parseFloat(t))
                );
            }),
            (f.trim = function (t) {
                return t == null ? '' : (t + '').replace(Hu, '$1');
            });
        var ju = n.jQuery,
            Fu = n.$;
        return (
            (f.noConflict = function (t) {
                return (
                    n.$ === f && (n.$ = Fu),
                    t && n.jQuery === f && (n.jQuery = ju),
                    f
                );
            }),
            typeof r > 'u' && (n.jQuery = n.$ = f),
            f
        );
    });
})(gd);
const An = ro;
const Kn = (e, n) => {
        const r = e.__vccOpts || e;
        for (const [o, u] of n) r[o] = u;
        return r;
    },
    _d = {
        created() {
            An(window).on(
                {
                    keydown: (e) => {
                        this.visible && this.toggleVisible(!1);
                    },
                },
                this.$refs.container
            );
        },
        unmounted() {
            An(window).off('keydown', this.$refs.container);
        },
        data() {
            return {};
        },
        computed: { ...Dt('Alert', ['visible', 'message']) },
        methods: {
            ...kt('Alert', { toggleVisible: 'updateVisible' }),
            checkClickClose() {
                this.$refs.container == event.target && this.toggleVisible(!1);
            },
        },
    },
    vd = (e) => (Zr('data-v-8ab7288a'), (e = e()), ei(), e),
    md = { class: 'window-alert-box z-depth-3' },
    yd = { class: 'content' },
    bd = ['innerHTML'],
    wd = { class: 'fixed-bottom' },
    xd = vd(() => Ie('i', { class: 'fa fa-keyboard' }, null, -1));
function Td(e, n, r, o, u, c) {
    return (
        Mt(),
        Ft(
            'div',
            {
                class: Xt(['window-alert', { visible: e.visible }]),
                ref: 'container',
                onClick:
                    n[1] ||
                    (n[1] = (...g) =>
                        c.checkClickClose && c.checkClickClose(...g)),
            },
            [
                Ie('div', md, [
                    Ie('div', yd, [
                        Ie('p', { innerHTML: e.message }, null, 8, bd),
                    ]),
                    Ie('div', wd, [
                        Ie(
                            'button',
                            {
                                class: 'btn h-ripple',
                                onClick:
                                    n[0] || (n[0] = (g) => e.toggleVisible(!1)),
                            },
                            [xd, $n('Press any key to clsoe')]
                        ),
                    ]),
                ]),
            ],
            2
        )
    );
}
const Ad = Kn(_d, [
    ['render', Td],
    ['__scopeId', 'data-v-8ab7288a'],
]);
var _r = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function (e) {
    (function () {
        var n = function () {
            this.init();
        };
        n.prototype = {
            init: function () {
                var s = this || r;
                return (
                    (s._counter = 1e3),
                    (s._html5AudioPool = []),
                    (s.html5PoolSize = 10),
                    (s._codecs = {}),
                    (s._howls = []),
                    (s._muted = !1),
                    (s._volume = 1),
                    (s._canPlayEvent = 'canplaythrough'),
                    (s._navigator =
                        typeof window < 'u' && window.navigator
                            ? window.navigator
                            : null),
                    (s.masterGain = null),
                    (s.noAudio = !1),
                    (s.usingWebAudio = !0),
                    (s.autoSuspend = !0),
                    (s.ctx = null),
                    (s.autoUnlock = !0),
                    s._setup(),
                    s
                );
            },
            volume: function (s) {
                var d = this || r;
                if (
                    ((s = parseFloat(s)),
                    d.ctx || N(),
                    typeof s < 'u' && s >= 0 && s <= 1)
                ) {
                    if (((d._volume = s), d._muted)) return d;
                    d.usingWebAudio &&
                        d.masterGain.gain.setValueAtTime(s, r.ctx.currentTime);
                    for (var m = 0; m < d._howls.length; m++)
                        if (!d._howls[m]._webAudio)
                            for (
                                var T = d._howls[m]._getSoundIds(), E = 0;
                                E < T.length;
                                E++
                            ) {
                                var j = d._howls[m]._soundById(T[E]);
                                j &&
                                    j._node &&
                                    (j._node.volume = j._volume * s);
                            }
                    return d;
                }
                return d._volume;
            },
            mute: function (s) {
                var d = this || r;
                d.ctx || N(),
                    (d._muted = s),
                    d.usingWebAudio &&
                        d.masterGain.gain.setValueAtTime(
                            s ? 0 : d._volume,
                            r.ctx.currentTime
                        );
                for (var m = 0; m < d._howls.length; m++)
                    if (!d._howls[m]._webAudio)
                        for (
                            var T = d._howls[m]._getSoundIds(), E = 0;
                            E < T.length;
                            E++
                        ) {
                            var j = d._howls[m]._soundById(T[E]);
                            j && j._node && (j._node.muted = s ? !0 : j._muted);
                        }
                return d;
            },
            stop: function () {
                for (var s = this || r, d = 0; d < s._howls.length; d++)
                    s._howls[d].stop();
                return s;
            },
            unload: function () {
                for (var s = this || r, d = s._howls.length - 1; d >= 0; d--)
                    s._howls[d].unload();
                return (
                    s.usingWebAudio &&
                        s.ctx &&
                        typeof s.ctx.close < 'u' &&
                        (s.ctx.close(), (s.ctx = null), N()),
                    s
                );
            },
            codecs: function (s) {
                return (this || r)._codecs[s.replace(/^x-/, '')];
            },
            _setup: function () {
                var s = this || r;
                if (
                    ((s.state = (s.ctx && s.ctx.state) || 'suspended'),
                    s._autoSuspend(),
                    !s.usingWebAudio)
                )
                    if (typeof Audio < 'u')
                        try {
                            var d = new Audio();
                            typeof d.oncanplaythrough > 'u' &&
                                (s._canPlayEvent = 'canplay');
                        } catch {
                            s.noAudio = !0;
                        }
                    else s.noAudio = !0;
                try {
                    var d = new Audio();
                    d.muted && (s.noAudio = !0);
                } catch {}
                return s.noAudio || s._setupCodecs(), s;
            },
            _setupCodecs: function () {
                var s = this || r,
                    d = null;
                try {
                    d = typeof Audio < 'u' ? new Audio() : null;
                } catch {
                    return s;
                }
                if (!d || typeof d.canPlayType != 'function') return s;
                var m = d.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                    T = s._navigator ? s._navigator.userAgent : '',
                    E = T.match(/OPR\/([0-6].)/g),
                    j = E && parseInt(E[0].split('/')[1], 10) < 33,
                    O =
                        T.indexOf('Safari') !== -1 &&
                        T.indexOf('Chrome') === -1,
                    Z = T.match(/Version\/(.*?) /),
                    Q = O && Z && parseInt(Z[1], 10) < 15;
                return (
                    (s._codecs = {
                        mp3: !!(
                            !j &&
                            (m ||
                                d.canPlayType('audio/mp3;').replace(/^no$/, ''))
                        ),
                        mpeg: !!m,
                        opus: !!d
                            .canPlayType('audio/ogg; codecs="opus"')
                            .replace(/^no$/, ''),
                        ogg: !!d
                            .canPlayType('audio/ogg; codecs="vorbis"')
                            .replace(/^no$/, ''),
                        oga: !!d
                            .canPlayType('audio/ogg; codecs="vorbis"')
                            .replace(/^no$/, ''),
                        wav: !!(
                            d.canPlayType('audio/wav; codecs="1"') ||
                            d.canPlayType('audio/wav')
                        ).replace(/^no$/, ''),
                        aac: !!d.canPlayType('audio/aac;').replace(/^no$/, ''),
                        caf: !!d
                            .canPlayType('audio/x-caf;')
                            .replace(/^no$/, ''),
                        m4a: !!(
                            d.canPlayType('audio/x-m4a;') ||
                            d.canPlayType('audio/m4a;') ||
                            d.canPlayType('audio/aac;')
                        ).replace(/^no$/, ''),
                        m4b: !!(
                            d.canPlayType('audio/x-m4b;') ||
                            d.canPlayType('audio/m4b;') ||
                            d.canPlayType('audio/aac;')
                        ).replace(/^no$/, ''),
                        mp4: !!(
                            d.canPlayType('audio/x-mp4;') ||
                            d.canPlayType('audio/mp4;') ||
                            d.canPlayType('audio/aac;')
                        ).replace(/^no$/, ''),
                        weba: !!(
                            !Q &&
                            d
                                .canPlayType('audio/webm; codecs="vorbis"')
                                .replace(/^no$/, '')
                        ),
                        webm: !!(
                            !Q &&
                            d
                                .canPlayType('audio/webm; codecs="vorbis"')
                                .replace(/^no$/, '')
                        ),
                        dolby: !!d
                            .canPlayType('audio/mp4; codecs="ec-3"')
                            .replace(/^no$/, ''),
                        flac: !!(
                            d.canPlayType('audio/x-flac;') ||
                            d.canPlayType('audio/flac;')
                        ).replace(/^no$/, ''),
                    }),
                    s
                );
            },
            _unlockAudio: function () {
                var s = this || r;
                if (!(s._audioUnlocked || !s.ctx)) {
                    (s._audioUnlocked = !1),
                        (s.autoUnlock = !1),
                        !s._mobileUnloaded &&
                            s.ctx.sampleRate !== 44100 &&
                            ((s._mobileUnloaded = !0), s.unload()),
                        (s._scratchBuffer = s.ctx.createBuffer(1, 1, 22050));
                    var d = function (m) {
                        for (; s._html5AudioPool.length < s.html5PoolSize; )
                            try {
                                var T = new Audio();
                                (T._unlocked = !0), s._releaseHtml5Audio(T);
                            } catch {
                                s.noAudio = !0;
                                break;
                            }
                        for (var E = 0; E < s._howls.length; E++)
                            if (!s._howls[E]._webAudio)
                                for (
                                    var j = s._howls[E]._getSoundIds(), O = 0;
                                    O < j.length;
                                    O++
                                ) {
                                    var Z = s._howls[E]._soundById(j[O]);
                                    Z &&
                                        Z._node &&
                                        !Z._node._unlocked &&
                                        ((Z._node._unlocked = !0),
                                        Z._node.load());
                                }
                        s._autoResume();
                        var Q = s.ctx.createBufferSource();
                        (Q.buffer = s._scratchBuffer),
                            Q.connect(s.ctx.destination),
                            typeof Q.start > 'u' ? Q.noteOn(0) : Q.start(0),
                            typeof s.ctx.resume == 'function' && s.ctx.resume(),
                            (Q.onended = function () {
                                Q.disconnect(0),
                                    (s._audioUnlocked = !0),
                                    document.removeEventListener(
                                        'touchstart',
                                        d,
                                        !0
                                    ),
                                    document.removeEventListener(
                                        'touchend',
                                        d,
                                        !0
                                    ),
                                    document.removeEventListener(
                                        'click',
                                        d,
                                        !0
                                    ),
                                    document.removeEventListener(
                                        'keydown',
                                        d,
                                        !0
                                    );
                                for (var ce = 0; ce < s._howls.length; ce++)
                                    s._howls[ce]._emit('unlock');
                            });
                    };
                    return (
                        document.addEventListener('touchstart', d, !0),
                        document.addEventListener('touchend', d, !0),
                        document.addEventListener('click', d, !0),
                        document.addEventListener('keydown', d, !0),
                        s
                    );
                }
            },
            _obtainHtml5Audio: function () {
                var s = this || r;
                if (s._html5AudioPool.length) return s._html5AudioPool.pop();
                var d = new Audio().play();
                return (
                    d &&
                        typeof Promise < 'u' &&
                        (d instanceof Promise || typeof d.then == 'function') &&
                        d.catch(function () {
                            console.warn(
                                'HTML5 Audio pool exhausted, returning potentially locked audio object.'
                            );
                        }),
                    new Audio()
                );
            },
            _releaseHtml5Audio: function (s) {
                var d = this || r;
                return s._unlocked && d._html5AudioPool.push(s), d;
            },
            _autoSuspend: function () {
                var s = this;
                if (
                    !(
                        !s.autoSuspend ||
                        !s.ctx ||
                        typeof s.ctx.suspend > 'u' ||
                        !r.usingWebAudio
                    )
                ) {
                    for (var d = 0; d < s._howls.length; d++)
                        if (s._howls[d]._webAudio) {
                            for (var m = 0; m < s._howls[d]._sounds.length; m++)
                                if (!s._howls[d]._sounds[m]._paused) return s;
                        }
                    return (
                        s._suspendTimer && clearTimeout(s._suspendTimer),
                        (s._suspendTimer = setTimeout(function () {
                            if (s.autoSuspend) {
                                (s._suspendTimer = null),
                                    (s.state = 'suspending');
                                var T = function () {
                                    (s.state = 'suspended'),
                                        s._resumeAfterSuspend &&
                                            (delete s._resumeAfterSuspend,
                                            s._autoResume());
                                };
                                s.ctx.suspend().then(T, T);
                            }
                        }, 3e4)),
                        s
                    );
                }
            },
            _autoResume: function () {
                var s = this;
                if (!(!s.ctx || typeof s.ctx.resume > 'u' || !r.usingWebAudio))
                    return (
                        s.state === 'running' &&
                        s.ctx.state !== 'interrupted' &&
                        s._suspendTimer
                            ? (clearTimeout(s._suspendTimer),
                              (s._suspendTimer = null))
                            : s.state === 'suspended' ||
                                (s.state === 'running' &&
                                    s.ctx.state === 'interrupted')
                              ? (s.ctx.resume().then(function () {
                                    s.state = 'running';
                                    for (var d = 0; d < s._howls.length; d++)
                                        s._howls[d]._emit('resume');
                                }),
                                s._suspendTimer &&
                                    (clearTimeout(s._suspendTimer),
                                    (s._suspendTimer = null)))
                              : s.state === 'suspending' &&
                                (s._resumeAfterSuspend = !0),
                        s
                    );
            },
        };
        var r = new n(),
            o = function (s) {
                var d = this;
                if (!s.src || s.src.length === 0) {
                    console.error(
                        'An array of source files must be passed with any new Howl.'
                    );
                    return;
                }
                d.init(s);
            };
        o.prototype = {
            init: function (s) {
                var d = this;
                return (
                    r.ctx || N(),
                    (d._autoplay = s.autoplay || !1),
                    (d._format =
                        typeof s.format != 'string' ? s.format : [s.format]),
                    (d._html5 = s.html5 || !1),
                    (d._muted = s.mute || !1),
                    (d._loop = s.loop || !1),
                    (d._pool = s.pool || 5),
                    (d._preload =
                        typeof s.preload == 'boolean' ||
                        s.preload === 'metadata'
                            ? s.preload
                            : !0),
                    (d._rate = s.rate || 1),
                    (d._sprite = s.sprite || {}),
                    (d._src = typeof s.src != 'string' ? s.src : [s.src]),
                    (d._volume = s.volume !== void 0 ? s.volume : 1),
                    (d._xhr = {
                        method: s.xhr && s.xhr.method ? s.xhr.method : 'GET',
                        headers: s.xhr && s.xhr.headers ? s.xhr.headers : null,
                        withCredentials:
                            s.xhr && s.xhr.withCredentials
                                ? s.xhr.withCredentials
                                : !1,
                    }),
                    (d._duration = 0),
                    (d._state = 'unloaded'),
                    (d._sounds = []),
                    (d._endTimers = {}),
                    (d._queue = []),
                    (d._playLock = !1),
                    (d._onend = s.onend ? [{ fn: s.onend }] : []),
                    (d._onfade = s.onfade ? [{ fn: s.onfade }] : []),
                    (d._onload = s.onload ? [{ fn: s.onload }] : []),
                    (d._onloaderror = s.onloaderror
                        ? [{ fn: s.onloaderror }]
                        : []),
                    (d._onplayerror = s.onplayerror
                        ? [{ fn: s.onplayerror }]
                        : []),
                    (d._onpause = s.onpause ? [{ fn: s.onpause }] : []),
                    (d._onplay = s.onplay ? [{ fn: s.onplay }] : []),
                    (d._onstop = s.onstop ? [{ fn: s.onstop }] : []),
                    (d._onmute = s.onmute ? [{ fn: s.onmute }] : []),
                    (d._onvolume = s.onvolume ? [{ fn: s.onvolume }] : []),
                    (d._onrate = s.onrate ? [{ fn: s.onrate }] : []),
                    (d._onseek = s.onseek ? [{ fn: s.onseek }] : []),
                    (d._onunlock = s.onunlock ? [{ fn: s.onunlock }] : []),
                    (d._onresume = []),
                    (d._webAudio = r.usingWebAudio && !d._html5),
                    typeof r.ctx < 'u' &&
                        r.ctx &&
                        r.autoUnlock &&
                        r._unlockAudio(),
                    r._howls.push(d),
                    d._autoplay &&
                        d._queue.push({
                            event: 'play',
                            action: function () {
                                d.play();
                            },
                        }),
                    d._preload && d._preload !== 'none' && d.load(),
                    d
                );
            },
            load: function () {
                var s = this,
                    d = null;
                if (r.noAudio) {
                    s._emit('loaderror', null, 'No audio support.');
                    return;
                }
                typeof s._src == 'string' && (s._src = [s._src]);
                for (var m = 0; m < s._src.length; m++) {
                    var T, E;
                    if (s._format && s._format[m]) T = s._format[m];
                    else {
                        if (((E = s._src[m]), typeof E != 'string')) {
                            s._emit(
                                'loaderror',
                                null,
                                'Non-string found in selected audio sources - ignoring.'
                            );
                            continue;
                        }
                        (T = /^data:audio\/([^;,]+);/i.exec(E)),
                            T || (T = /\.([^.]+)$/.exec(E.split('?', 1)[0])),
                            T && (T = T[1].toLowerCase());
                    }
                    if (
                        (T ||
                            console.warn(
                                'No file extension was found. Consider using the "format" property or specify an extension.'
                            ),
                        T && r.codecs(T))
                    ) {
                        d = s._src[m];
                        break;
                    }
                }
                if (!d) {
                    s._emit(
                        'loaderror',
                        null,
                        'No codec support for selected audio sources.'
                    );
                    return;
                }
                return (
                    (s._src = d),
                    (s._state = 'loading'),
                    window.location.protocol === 'https:' &&
                        d.slice(0, 5) === 'http:' &&
                        ((s._html5 = !0), (s._webAudio = !1)),
                    new u(s),
                    s._webAudio && g(s),
                    s
                );
            },
            play: function (s, d) {
                var m = this,
                    T = null;
                if (typeof s == 'number') (T = s), (s = null);
                else {
                    if (
                        typeof s == 'string' &&
                        m._state === 'loaded' &&
                        !m._sprite[s]
                    )
                        return null;
                    if (typeof s > 'u' && ((s = '__default'), !m._playLock)) {
                        for (var E = 0, j = 0; j < m._sounds.length; j++)
                            m._sounds[j]._paused &&
                                !m._sounds[j]._ended &&
                                (E++, (T = m._sounds[j]._id));
                        E === 1 ? (s = null) : (T = null);
                    }
                }
                var O = T ? m._soundById(T) : m._inactiveSound();
                if (!O) return null;
                if (
                    (T && !s && (s = O._sprite || '__default'),
                    m._state !== 'loaded')
                ) {
                    (O._sprite = s), (O._ended = !1);
                    var Z = O._id;
                    return (
                        m._queue.push({
                            event: 'play',
                            action: function () {
                                m.play(Z);
                            },
                        }),
                        Z
                    );
                }
                if (T && !O._paused) return d || m._loadQueue('play'), O._id;
                m._webAudio && r._autoResume();
                var Q = Math.max(
                        0,
                        O._seek > 0 ? O._seek : m._sprite[s][0] / 1e3
                    ),
                    ce = Math.max(
                        0,
                        (m._sprite[s][0] + m._sprite[s][1]) / 1e3 - Q
                    ),
                    Ae = (ce * 1e3) / Math.abs(O._rate),
                    f = m._sprite[s][0] / 1e3,
                    Ke = (m._sprite[s][0] + m._sprite[s][1]) / 1e3;
                (O._sprite = s), (O._ended = !1);
                var de = function () {
                    (O._paused = !1),
                        (O._seek = Q),
                        (O._start = f),
                        (O._stop = Ke),
                        (O._loop = !!(O._loop || m._sprite[s][2]));
                };
                if (Q >= Ke) {
                    m._ended(O);
                    return;
                }
                var le = O._node;
                if (m._webAudio) {
                    var Se = function () {
                        (m._playLock = !1), de(), m._refreshBuffer(O);
                        var Qe = O._muted || m._muted ? 0 : O._volume;
                        le.gain.setValueAtTime(Qe, r.ctx.currentTime),
                            (O._playStart = r.ctx.currentTime),
                            typeof le.bufferSource.start > 'u'
                                ? O._loop
                                    ? le.bufferSource.noteGrainOn(0, Q, 86400)
                                    : le.bufferSource.noteGrainOn(0, Q, ce)
                                : O._loop
                                  ? le.bufferSource.start(0, Q, 86400)
                                  : le.bufferSource.start(0, Q, ce),
                            Ae !== 1 / 0 &&
                                (m._endTimers[O._id] = setTimeout(
                                    m._ended.bind(m, O),
                                    Ae
                                )),
                            d ||
                                setTimeout(function () {
                                    m._emit('play', O._id), m._loadQueue();
                                }, 0);
                    };
                    r.state === 'running' && r.ctx.state !== 'interrupted'
                        ? Se()
                        : ((m._playLock = !0),
                          m.once('resume', Se),
                          m._clearTimer(O._id));
                } else {
                    var qe = function () {
                        (le.currentTime = Q),
                            (le.muted =
                                O._muted || m._muted || r._muted || le.muted),
                            (le.volume = O._volume * r.volume()),
                            (le.playbackRate = O._rate);
                        try {
                            var Qe = le.play();
                            if (
                                (Qe &&
                                typeof Promise < 'u' &&
                                (Qe instanceof Promise ||
                                    typeof Qe.then == 'function')
                                    ? ((m._playLock = !0),
                                      de(),
                                      Qe.then(function () {
                                          (m._playLock = !1),
                                              (le._unlocked = !0),
                                              d
                                                  ? m._loadQueue()
                                                  : m._emit('play', O._id);
                                      }).catch(function () {
                                          (m._playLock = !1),
                                              m._emit(
                                                  'playerror',
                                                  O._id,
                                                  'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                                              ),
                                              (O._ended = !0),
                                              (O._paused = !0);
                                      }))
                                    : d ||
                                      ((m._playLock = !1),
                                      de(),
                                      m._emit('play', O._id)),
                                (le.playbackRate = O._rate),
                                le.paused)
                            ) {
                                m._emit(
                                    'playerror',
                                    O._id,
                                    'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                                );
                                return;
                            }
                            s !== '__default' || O._loop
                                ? (m._endTimers[O._id] = setTimeout(
                                      m._ended.bind(m, O),
                                      Ae
                                  ))
                                : ((m._endTimers[O._id] = function () {
                                      m._ended(O),
                                          le.removeEventListener(
                                              'ended',
                                              m._endTimers[O._id],
                                              !1
                                          );
                                  }),
                                  le.addEventListener(
                                      'ended',
                                      m._endTimers[O._id],
                                      !1
                                  ));
                        } catch (un) {
                            m._emit('playerror', O._id, un);
                        }
                    };
                    le.src ===
                        'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' &&
                        ((le.src = m._src), le.load());
                    var ke =
                        (window && window.ejecta) ||
                        (!le.readyState && r._navigator.isCocoonJS);
                    if (le.readyState >= 3 || ke) qe();
                    else {
                        (m._playLock = !0), (m._state = 'loading');
                        var nt = function () {
                            (m._state = 'loaded'),
                                qe(),
                                le.removeEventListener(r._canPlayEvent, nt, !1);
                        };
                        le.addEventListener(r._canPlayEvent, nt, !1),
                            m._clearTimer(O._id);
                    }
                }
                return O._id;
            },
            pause: function (s) {
                var d = this;
                if (d._state !== 'loaded' || d._playLock)
                    return (
                        d._queue.push({
                            event: 'pause',
                            action: function () {
                                d.pause(s);
                            },
                        }),
                        d
                    );
                for (var m = d._getSoundIds(s), T = 0; T < m.length; T++) {
                    d._clearTimer(m[T]);
                    var E = d._soundById(m[T]);
                    if (
                        E &&
                        !E._paused &&
                        ((E._seek = d.seek(m[T])),
                        (E._rateSeek = 0),
                        (E._paused = !0),
                        d._stopFade(m[T]),
                        E._node)
                    )
                        if (d._webAudio) {
                            if (!E._node.bufferSource) continue;
                            typeof E._node.bufferSource.stop > 'u'
                                ? E._node.bufferSource.noteOff(0)
                                : E._node.bufferSource.stop(0),
                                d._cleanBuffer(E._node);
                        } else
                            (!isNaN(E._node.duration) ||
                                E._node.duration === 1 / 0) &&
                                E._node.pause();
                    arguments[1] || d._emit('pause', E ? E._id : null);
                }
                return d;
            },
            stop: function (s, d) {
                var m = this;
                if (m._state !== 'loaded' || m._playLock)
                    return (
                        m._queue.push({
                            event: 'stop',
                            action: function () {
                                m.stop(s);
                            },
                        }),
                        m
                    );
                for (var T = m._getSoundIds(s), E = 0; E < T.length; E++) {
                    m._clearTimer(T[E]);
                    var j = m._soundById(T[E]);
                    j &&
                        ((j._seek = j._start || 0),
                        (j._rateSeek = 0),
                        (j._paused = !0),
                        (j._ended = !0),
                        m._stopFade(T[E]),
                        j._node &&
                            (m._webAudio
                                ? j._node.bufferSource &&
                                  (typeof j._node.bufferSource.stop > 'u'
                                      ? j._node.bufferSource.noteOff(0)
                                      : j._node.bufferSource.stop(0),
                                  m._cleanBuffer(j._node))
                                : (!isNaN(j._node.duration) ||
                                      j._node.duration === 1 / 0) &&
                                  ((j._node.currentTime = j._start || 0),
                                  j._node.pause(),
                                  j._node.duration === 1 / 0 &&
                                      m._clearSound(j._node))),
                        d || m._emit('stop', j._id));
                }
                return m;
            },
            mute: function (s, d) {
                var m = this;
                if (m._state !== 'loaded' || m._playLock)
                    return (
                        m._queue.push({
                            event: 'mute',
                            action: function () {
                                m.mute(s, d);
                            },
                        }),
                        m
                    );
                if (typeof d > 'u')
                    if (typeof s == 'boolean') m._muted = s;
                    else return m._muted;
                for (var T = m._getSoundIds(d), E = 0; E < T.length; E++) {
                    var j = m._soundById(T[E]);
                    j &&
                        ((j._muted = s),
                        j._interval && m._stopFade(j._id),
                        m._webAudio && j._node
                            ? j._node.gain.setValueAtTime(
                                  s ? 0 : j._volume,
                                  r.ctx.currentTime
                              )
                            : j._node && (j._node.muted = r._muted ? !0 : s),
                        m._emit('mute', j._id));
                }
                return m;
            },
            volume: function () {
                var s = this,
                    d = arguments,
                    m,
                    T;
                if (d.length === 0) return s._volume;
                if (d.length === 1 || (d.length === 2 && typeof d[1] > 'u')) {
                    var E = s._getSoundIds(),
                        j = E.indexOf(d[0]);
                    j >= 0 ? (T = parseInt(d[0], 10)) : (m = parseFloat(d[0]));
                } else
                    d.length >= 2 &&
                        ((m = parseFloat(d[0])), (T = parseInt(d[1], 10)));
                var O;
                if (typeof m < 'u' && m >= 0 && m <= 1) {
                    if (s._state !== 'loaded' || s._playLock)
                        return (
                            s._queue.push({
                                event: 'volume',
                                action: function () {
                                    s.volume.apply(s, d);
                                },
                            }),
                            s
                        );
                    typeof T > 'u' && (s._volume = m), (T = s._getSoundIds(T));
                    for (var Z = 0; Z < T.length; Z++)
                        (O = s._soundById(T[Z])),
                            O &&
                                ((O._volume = m),
                                d[2] || s._stopFade(T[Z]),
                                s._webAudio && O._node && !O._muted
                                    ? O._node.gain.setValueAtTime(
                                          m,
                                          r.ctx.currentTime
                                      )
                                    : O._node &&
                                      !O._muted &&
                                      (O._node.volume = m * r.volume()),
                                s._emit('volume', O._id));
                } else
                    return (
                        (O = T ? s._soundById(T) : s._sounds[0]),
                        O ? O._volume : 0
                    );
                return s;
            },
            fade: function (s, d, m, T) {
                var E = this;
                if (E._state !== 'loaded' || E._playLock)
                    return (
                        E._queue.push({
                            event: 'fade',
                            action: function () {
                                E.fade(s, d, m, T);
                            },
                        }),
                        E
                    );
                (s = Math.min(Math.max(0, parseFloat(s)), 1)),
                    (d = Math.min(Math.max(0, parseFloat(d)), 1)),
                    (m = parseFloat(m)),
                    E.volume(s, T);
                for (var j = E._getSoundIds(T), O = 0; O < j.length; O++) {
                    var Z = E._soundById(j[O]);
                    if (Z) {
                        if (
                            (T || E._stopFade(j[O]), E._webAudio && !Z._muted)
                        ) {
                            var Q = r.ctx.currentTime,
                                ce = Q + m / 1e3;
                            (Z._volume = s),
                                Z._node.gain.setValueAtTime(s, Q),
                                Z._node.gain.linearRampToValueAtTime(d, ce);
                        }
                        E._startFadeInterval(Z, s, d, m, j[O], typeof T > 'u');
                    }
                }
                return E;
            },
            _startFadeInterval: function (s, d, m, T, E, j) {
                var O = this,
                    Z = d,
                    Q = m - d,
                    ce = Math.abs(Q / 0.01),
                    Ae = Math.max(4, ce > 0 ? T / ce : T),
                    f = Date.now();
                (s._fadeTo = m),
                    (s._interval = setInterval(function () {
                        var Ke = (Date.now() - f) / T;
                        (f = Date.now()),
                            (Z += Q * Ke),
                            (Z = Math.round(Z * 100) / 100),
                            Q < 0 ? (Z = Math.max(m, Z)) : (Z = Math.min(m, Z)),
                            O._webAudio
                                ? (s._volume = Z)
                                : O.volume(Z, s._id, !0),
                            j && (O._volume = Z),
                            ((m < d && Z <= m) || (m > d && Z >= m)) &&
                                (clearInterval(s._interval),
                                (s._interval = null),
                                (s._fadeTo = null),
                                O.volume(m, s._id),
                                O._emit('fade', s._id));
                    }, Ae));
            },
            _stopFade: function (s) {
                var d = this,
                    m = d._soundById(s);
                return (
                    m &&
                        m._interval &&
                        (d._webAudio &&
                            m._node.gain.cancelScheduledValues(
                                r.ctx.currentTime
                            ),
                        clearInterval(m._interval),
                        (m._interval = null),
                        d.volume(m._fadeTo, s),
                        (m._fadeTo = null),
                        d._emit('fade', s)),
                    d
                );
            },
            loop: function () {
                var s = this,
                    d = arguments,
                    m,
                    T,
                    E;
                if (d.length === 0) return s._loop;
                if (d.length === 1)
                    if (typeof d[0] == 'boolean') (m = d[0]), (s._loop = m);
                    else
                        return (
                            (E = s._soundById(parseInt(d[0], 10))),
                            E ? E._loop : !1
                        );
                else d.length === 2 && ((m = d[0]), (T = parseInt(d[1], 10)));
                for (var j = s._getSoundIds(T), O = 0; O < j.length; O++)
                    (E = s._soundById(j[O])),
                        E &&
                            ((E._loop = m),
                            s._webAudio &&
                                E._node &&
                                E._node.bufferSource &&
                                ((E._node.bufferSource.loop = m),
                                m &&
                                    ((E._node.bufferSource.loopStart =
                                        E._start || 0),
                                    (E._node.bufferSource.loopEnd = E._stop),
                                    s.playing(j[O]) &&
                                        (s.pause(j[O], !0),
                                        s.play(j[O], !0)))));
                return s;
            },
            rate: function () {
                var s = this,
                    d = arguments,
                    m,
                    T;
                if (d.length === 0) T = s._sounds[0]._id;
                else if (d.length === 1) {
                    var E = s._getSoundIds(),
                        j = E.indexOf(d[0]);
                    j >= 0 ? (T = parseInt(d[0], 10)) : (m = parseFloat(d[0]));
                } else
                    d.length === 2 &&
                        ((m = parseFloat(d[0])), (T = parseInt(d[1], 10)));
                var O;
                if (typeof m == 'number') {
                    if (s._state !== 'loaded' || s._playLock)
                        return (
                            s._queue.push({
                                event: 'rate',
                                action: function () {
                                    s.rate.apply(s, d);
                                },
                            }),
                            s
                        );
                    typeof T > 'u' && (s._rate = m), (T = s._getSoundIds(T));
                    for (var Z = 0; Z < T.length; Z++)
                        if (((O = s._soundById(T[Z])), O)) {
                            s.playing(T[Z]) &&
                                ((O._rateSeek = s.seek(T[Z])),
                                (O._playStart = s._webAudio
                                    ? r.ctx.currentTime
                                    : O._playStart)),
                                (O._rate = m),
                                s._webAudio && O._node && O._node.bufferSource
                                    ? O._node.bufferSource.playbackRate.setValueAtTime(
                                          m,
                                          r.ctx.currentTime
                                      )
                                    : O._node && (O._node.playbackRate = m);
                            var Q = s.seek(T[Z]),
                                ce =
                                    (s._sprite[O._sprite][0] +
                                        s._sprite[O._sprite][1]) /
                                        1e3 -
                                    Q,
                                Ae = (ce * 1e3) / Math.abs(O._rate);
                            (s._endTimers[T[Z]] || !O._paused) &&
                                (s._clearTimer(T[Z]),
                                (s._endTimers[T[Z]] = setTimeout(
                                    s._ended.bind(s, O),
                                    Ae
                                ))),
                                s._emit('rate', O._id);
                        }
                } else return (O = s._soundById(T)), O ? O._rate : s._rate;
                return s;
            },
            seek: function () {
                var s = this,
                    d = arguments,
                    m,
                    T;
                if (d.length === 0) s._sounds.length && (T = s._sounds[0]._id);
                else if (d.length === 1) {
                    var E = s._getSoundIds(),
                        j = E.indexOf(d[0]);
                    j >= 0
                        ? (T = parseInt(d[0], 10))
                        : s._sounds.length &&
                          ((T = s._sounds[0]._id), (m = parseFloat(d[0])));
                } else
                    d.length === 2 &&
                        ((m = parseFloat(d[0])), (T = parseInt(d[1], 10)));
                if (typeof T > 'u') return 0;
                if (
                    typeof m == 'number' &&
                    (s._state !== 'loaded' || s._playLock)
                )
                    return (
                        s._queue.push({
                            event: 'seek',
                            action: function () {
                                s.seek.apply(s, d);
                            },
                        }),
                        s
                    );
                var O = s._soundById(T);
                if (O)
                    if (typeof m == 'number' && m >= 0) {
                        var Z = s.playing(T);
                        Z && s.pause(T, !0),
                            (O._seek = m),
                            (O._ended = !1),
                            s._clearTimer(T),
                            !s._webAudio &&
                                O._node &&
                                !isNaN(O._node.duration) &&
                                (O._node.currentTime = m);
                        var Q = function () {
                            Z && s.play(T, !0), s._emit('seek', T);
                        };
                        if (Z && !s._webAudio) {
                            var ce = function () {
                                s._playLock ? setTimeout(ce, 0) : Q();
                            };
                            setTimeout(ce, 0);
                        } else Q();
                    } else if (s._webAudio) {
                        var Ae = s.playing(T)
                                ? r.ctx.currentTime - O._playStart
                                : 0,
                            f = O._rateSeek ? O._rateSeek - O._seek : 0;
                        return O._seek + (f + Ae * Math.abs(O._rate));
                    } else return O._node.currentTime;
                return s;
            },
            playing: function (s) {
                var d = this;
                if (typeof s == 'number') {
                    var m = d._soundById(s);
                    return m ? !m._paused : !1;
                }
                for (var T = 0; T < d._sounds.length; T++)
                    if (!d._sounds[T]._paused) return !0;
                return !1;
            },
            duration: function (s) {
                var d = this,
                    m = d._duration,
                    T = d._soundById(s);
                return T && (m = d._sprite[T._sprite][1] / 1e3), m;
            },
            state: function () {
                return this._state;
            },
            unload: function () {
                for (var s = this, d = s._sounds, m = 0; m < d.length; m++)
                    d[m]._paused || s.stop(d[m]._id),
                        s._webAudio ||
                            (s._clearSound(d[m]._node),
                            d[m]._node.removeEventListener(
                                'error',
                                d[m]._errorFn,
                                !1
                            ),
                            d[m]._node.removeEventListener(
                                r._canPlayEvent,
                                d[m]._loadFn,
                                !1
                            ),
                            d[m]._node.removeEventListener(
                                'ended',
                                d[m]._endFn,
                                !1
                            ),
                            r._releaseHtml5Audio(d[m]._node)),
                        delete d[m]._node,
                        s._clearTimer(d[m]._id);
                var T = r._howls.indexOf(s);
                T >= 0 && r._howls.splice(T, 1);
                var E = !0;
                for (m = 0; m < r._howls.length; m++)
                    if (
                        r._howls[m]._src === s._src ||
                        s._src.indexOf(r._howls[m]._src) >= 0
                    ) {
                        E = !1;
                        break;
                    }
                return (
                    c && E && delete c[s._src],
                    (r.noAudio = !1),
                    (s._state = 'unloaded'),
                    (s._sounds = []),
                    (s = null),
                    null
                );
            },
            on: function (s, d, m, T) {
                var E = this,
                    j = E['_on' + s];
                return (
                    typeof d == 'function' &&
                        j.push(
                            T ? { id: m, fn: d, once: T } : { id: m, fn: d }
                        ),
                    E
                );
            },
            off: function (s, d, m) {
                var T = this,
                    E = T['_on' + s],
                    j = 0;
                if ((typeof d == 'number' && ((m = d), (d = null)), d || m))
                    for (j = 0; j < E.length; j++) {
                        var O = m === E[j].id;
                        if ((d === E[j].fn && O) || (!d && O)) {
                            E.splice(j, 1);
                            break;
                        }
                    }
                else if (s) T['_on' + s] = [];
                else {
                    var Z = Object.keys(T);
                    for (j = 0; j < Z.length; j++)
                        Z[j].indexOf('_on') === 0 &&
                            Array.isArray(T[Z[j]]) &&
                            (T[Z[j]] = []);
                }
                return T;
            },
            once: function (s, d, m) {
                var T = this;
                return T.on(s, d, m, 1), T;
            },
            _emit: function (s, d, m) {
                for (
                    var T = this, E = T['_on' + s], j = E.length - 1;
                    j >= 0;
                    j--
                )
                    (!E[j].id || E[j].id === d || s === 'load') &&
                        (setTimeout(
                            function (O) {
                                O.call(this, d, m);
                            }.bind(T, E[j].fn),
                            0
                        ),
                        E[j].once && T.off(s, E[j].fn, E[j].id));
                return T._loadQueue(s), T;
            },
            _loadQueue: function (s) {
                var d = this;
                if (d._queue.length > 0) {
                    var m = d._queue[0];
                    m.event === s && (d._queue.shift(), d._loadQueue()),
                        s || m.action();
                }
                return d;
            },
            _ended: function (s) {
                var d = this,
                    m = s._sprite;
                if (
                    !d._webAudio &&
                    s._node &&
                    !s._node.paused &&
                    !s._node.ended &&
                    s._node.currentTime < s._stop
                )
                    return setTimeout(d._ended.bind(d, s), 100), d;
                var T = !!(s._loop || d._sprite[m][2]);
                if (
                    (d._emit('end', s._id),
                    !d._webAudio && T && d.stop(s._id, !0).play(s._id),
                    d._webAudio && T)
                ) {
                    d._emit('play', s._id),
                        (s._seek = s._start || 0),
                        (s._rateSeek = 0),
                        (s._playStart = r.ctx.currentTime);
                    var E = ((s._stop - s._start) * 1e3) / Math.abs(s._rate);
                    d._endTimers[s._id] = setTimeout(d._ended.bind(d, s), E);
                }
                return (
                    d._webAudio &&
                        !T &&
                        ((s._paused = !0),
                        (s._ended = !0),
                        (s._seek = s._start || 0),
                        (s._rateSeek = 0),
                        d._clearTimer(s._id),
                        d._cleanBuffer(s._node),
                        r._autoSuspend()),
                    !d._webAudio && !T && d.stop(s._id, !0),
                    d
                );
            },
            _clearTimer: function (s) {
                var d = this;
                if (d._endTimers[s]) {
                    if (typeof d._endTimers[s] != 'function')
                        clearTimeout(d._endTimers[s]);
                    else {
                        var m = d._soundById(s);
                        m &&
                            m._node &&
                            m._node.removeEventListener(
                                'ended',
                                d._endTimers[s],
                                !1
                            );
                    }
                    delete d._endTimers[s];
                }
                return d;
            },
            _soundById: function (s) {
                for (var d = this, m = 0; m < d._sounds.length; m++)
                    if (s === d._sounds[m]._id) return d._sounds[m];
                return null;
            },
            _inactiveSound: function () {
                var s = this;
                s._drain();
                for (var d = 0; d < s._sounds.length; d++)
                    if (s._sounds[d]._ended) return s._sounds[d].reset();
                return new u(s);
            },
            _drain: function () {
                var s = this,
                    d = s._pool,
                    m = 0,
                    T = 0;
                if (!(s._sounds.length < d)) {
                    for (T = 0; T < s._sounds.length; T++)
                        s._sounds[T]._ended && m++;
                    for (T = s._sounds.length - 1; T >= 0; T--) {
                        if (m <= d) return;
                        s._sounds[T]._ended &&
                            (s._webAudio &&
                                s._sounds[T]._node &&
                                s._sounds[T]._node.disconnect(0),
                            s._sounds.splice(T, 1),
                            m--);
                    }
                }
            },
            _getSoundIds: function (s) {
                var d = this;
                if (typeof s > 'u') {
                    for (var m = [], T = 0; T < d._sounds.length; T++)
                        m.push(d._sounds[T]._id);
                    return m;
                } else return [s];
            },
            _refreshBuffer: function (s) {
                var d = this;
                return (
                    (s._node.bufferSource = r.ctx.createBufferSource()),
                    (s._node.bufferSource.buffer = c[d._src]),
                    s._panner
                        ? s._node.bufferSource.connect(s._panner)
                        : s._node.bufferSource.connect(s._node),
                    (s._node.bufferSource.loop = s._loop),
                    s._loop &&
                        ((s._node.bufferSource.loopStart = s._start || 0),
                        (s._node.bufferSource.loopEnd = s._stop || 0)),
                    s._node.bufferSource.playbackRate.setValueAtTime(
                        s._rate,
                        r.ctx.currentTime
                    ),
                    d
                );
            },
            _cleanBuffer: function (s) {
                var d = this,
                    m =
                        r._navigator &&
                        r._navigator.vendor.indexOf('Apple') >= 0;
                if (
                    r._scratchBuffer &&
                    s.bufferSource &&
                    ((s.bufferSource.onended = null),
                    s.bufferSource.disconnect(0),
                    m)
                )
                    try {
                        s.bufferSource.buffer = r._scratchBuffer;
                    } catch {}
                return (s.bufferSource = null), d;
            },
            _clearSound: function (s) {
                var d = /MSIE |Trident\//.test(
                    r._navigator && r._navigator.userAgent
                );
                d ||
                    (s.src =
                        'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            },
        };
        var u = function (s) {
            (this._parent = s), this.init();
        };
        u.prototype = {
            init: function () {
                var s = this,
                    d = s._parent;
                return (
                    (s._muted = d._muted),
                    (s._loop = d._loop),
                    (s._volume = d._volume),
                    (s._rate = d._rate),
                    (s._seek = 0),
                    (s._paused = !0),
                    (s._ended = !0),
                    (s._sprite = '__default'),
                    (s._id = ++r._counter),
                    d._sounds.push(s),
                    s.create(),
                    s
                );
            },
            create: function () {
                var s = this,
                    d = s._parent,
                    m =
                        r._muted || s._muted || s._parent._muted
                            ? 0
                            : s._volume;
                return (
                    d._webAudio
                        ? ((s._node =
                              typeof r.ctx.createGain > 'u'
                                  ? r.ctx.createGainNode()
                                  : r.ctx.createGain()),
                          s._node.gain.setValueAtTime(m, r.ctx.currentTime),
                          (s._node.paused = !0),
                          s._node.connect(r.masterGain))
                        : r.noAudio ||
                          ((s._node = r._obtainHtml5Audio()),
                          (s._errorFn = s._errorListener.bind(s)),
                          s._node.addEventListener('error', s._errorFn, !1),
                          (s._loadFn = s._loadListener.bind(s)),
                          s._node.addEventListener(
                              r._canPlayEvent,
                              s._loadFn,
                              !1
                          ),
                          (s._endFn = s._endListener.bind(s)),
                          s._node.addEventListener('ended', s._endFn, !1),
                          (s._node.src = d._src),
                          (s._node.preload =
                              d._preload === !0 ? 'auto' : d._preload),
                          (s._node.volume = m * r.volume()),
                          s._node.load()),
                    s
                );
            },
            reset: function () {
                var s = this,
                    d = s._parent;
                return (
                    (s._muted = d._muted),
                    (s._loop = d._loop),
                    (s._volume = d._volume),
                    (s._rate = d._rate),
                    (s._seek = 0),
                    (s._rateSeek = 0),
                    (s._paused = !0),
                    (s._ended = !0),
                    (s._sprite = '__default'),
                    (s._id = ++r._counter),
                    s
                );
            },
            _errorListener: function () {
                var s = this;
                s._parent._emit(
                    'loaderror',
                    s._id,
                    s._node.error ? s._node.error.code : 0
                ),
                    s._node.removeEventListener('error', s._errorFn, !1);
            },
            _loadListener: function () {
                var s = this,
                    d = s._parent;
                (d._duration = Math.ceil(s._node.duration * 10) / 10),
                    Object.keys(d._sprite).length === 0 &&
                        (d._sprite = { __default: [0, d._duration * 1e3] }),
                    d._state !== 'loaded' &&
                        ((d._state = 'loaded'),
                        d._emit('load'),
                        d._loadQueue()),
                    s._node.removeEventListener(r._canPlayEvent, s._loadFn, !1);
            },
            _endListener: function () {
                var s = this,
                    d = s._parent;
                d._duration === 1 / 0 &&
                    ((d._duration = Math.ceil(s._node.duration * 10) / 10),
                    d._sprite.__default[1] === 1 / 0 &&
                        (d._sprite.__default[1] = d._duration * 1e3),
                    d._ended(s)),
                    s._node.removeEventListener('ended', s._endFn, !1);
            },
        };
        var c = {},
            g = function (s) {
                var d = s._src;
                if (c[d]) {
                    (s._duration = c[d].duration), A(s);
                    return;
                }
                if (/^data:[^;]+;base64,/.test(d)) {
                    for (
                        var m = atob(d.split(',')[1]),
                            T = new Uint8Array(m.length),
                            E = 0;
                        E < m.length;
                        ++E
                    )
                        T[E] = m.charCodeAt(E);
                    b(T.buffer, s);
                } else {
                    var j = new XMLHttpRequest();
                    j.open(s._xhr.method, d, !0),
                        (j.withCredentials = s._xhr.withCredentials),
                        (j.responseType = 'arraybuffer'),
                        s._xhr.headers &&
                            Object.keys(s._xhr.headers).forEach(function (O) {
                                j.setRequestHeader(O, s._xhr.headers[O]);
                            }),
                        (j.onload = function () {
                            var O = (j.status + '')[0];
                            if (O !== '0' && O !== '2' && O !== '3') {
                                s._emit(
                                    'loaderror',
                                    null,
                                    'Failed loading audio file with status: ' +
                                        j.status +
                                        '.'
                                );
                                return;
                            }
                            b(j.response, s);
                        }),
                        (j.onerror = function () {
                            s._webAudio &&
                                ((s._html5 = !0),
                                (s._webAudio = !1),
                                (s._sounds = []),
                                delete c[d],
                                s.load());
                        }),
                        y(j);
                }
            },
            y = function (s) {
                try {
                    s.send();
                } catch {
                    s.onerror();
                }
            },
            b = function (s, d) {
                var m = function () {
                        d._emit(
                            'loaderror',
                            null,
                            'Decoding audio data failed.'
                        );
                    },
                    T = function (E) {
                        E && d._sounds.length > 0
                            ? ((c[d._src] = E), A(d, E))
                            : m();
                    };
                typeof Promise < 'u' && r.ctx.decodeAudioData.length === 1
                    ? r.ctx.decodeAudioData(s).then(T).catch(m)
                    : r.ctx.decodeAudioData(s, T, m);
            },
            A = function (s, d) {
                d && !s._duration && (s._duration = d.duration),
                    Object.keys(s._sprite).length === 0 &&
                        (s._sprite = { __default: [0, s._duration * 1e3] }),
                    s._state !== 'loaded' &&
                        ((s._state = 'loaded'),
                        s._emit('load'),
                        s._loadQueue());
            },
            N = function () {
                if (r.usingWebAudio) {
                    try {
                        typeof AudioContext < 'u'
                            ? (r.ctx = new AudioContext())
                            : typeof webkitAudioContext < 'u'
                              ? (r.ctx = new webkitAudioContext())
                              : (r.usingWebAudio = !1);
                    } catch {
                        r.usingWebAudio = !1;
                    }
                    r.ctx || (r.usingWebAudio = !1);
                    var s = /iP(hone|od|ad)/.test(
                            r._navigator && r._navigator.platform
                        ),
                        d =
                            r._navigator &&
                            r._navigator.appVersion.match(
                                /OS (\d+)_(\d+)_?(\d+)?/
                            ),
                        m = d ? parseInt(d[1], 10) : null;
                    if (s && m && m < 9) {
                        var T = /safari/.test(
                            r._navigator && r._navigator.userAgent.toLowerCase()
                        );
                        r._navigator && !T && (r.usingWebAudio = !1);
                    }
                    r.usingWebAudio &&
                        ((r.masterGain =
                            typeof r.ctx.createGain > 'u'
                                ? r.ctx.createGainNode()
                                : r.ctx.createGain()),
                        r.masterGain.gain.setValueAtTime(
                            r._muted ? 0 : r._volume,
                            r.ctx.currentTime
                        ),
                        r.masterGain.connect(r.ctx.destination)),
                        r._setup();
                }
            };
        (e.Howler = r),
            (e.Howl = o),
            typeof Dn < 'u'
                ? ((Dn.HowlerGlobal = n),
                  (Dn.Howler = r),
                  (Dn.Howl = o),
                  (Dn.Sound = u))
                : typeof window < 'u' &&
                  ((window.HowlerGlobal = n),
                  (window.Howler = r),
                  (window.Howl = o),
                  (window.Sound = u));
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */ (function () {
        (HowlerGlobal.prototype._pos = [0, 0, 0]),
            (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
            (HowlerGlobal.prototype.stereo = function (r) {
                var o = this;
                if (!o.ctx || !o.ctx.listener) return o;
                for (var u = o._howls.length - 1; u >= 0; u--)
                    o._howls[u].stereo(r);
                return o;
            }),
            (HowlerGlobal.prototype.pos = function (r, o, u) {
                var c = this;
                if (!c.ctx || !c.ctx.listener) return c;
                if (
                    ((o = typeof o != 'number' ? c._pos[1] : o),
                    (u = typeof u != 'number' ? c._pos[2] : u),
                    typeof r == 'number')
                )
                    (c._pos = [r, o, u]),
                        typeof c.ctx.listener.positionX < 'u'
                            ? (c.ctx.listener.positionX.setTargetAtTime(
                                  c._pos[0],
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              c.ctx.listener.positionY.setTargetAtTime(
                                  c._pos[1],
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              c.ctx.listener.positionZ.setTargetAtTime(
                                  c._pos[2],
                                  Howler.ctx.currentTime,
                                  0.1
                              ))
                            : c.ctx.listener.setPosition(
                                  c._pos[0],
                                  c._pos[1],
                                  c._pos[2]
                              );
                else return c._pos;
                return c;
            }),
            (HowlerGlobal.prototype.orientation = function (r, o, u, c, g, y) {
                var b = this;
                if (!b.ctx || !b.ctx.listener) return b;
                var A = b._orientation;
                if (
                    ((o = typeof o != 'number' ? A[1] : o),
                    (u = typeof u != 'number' ? A[2] : u),
                    (c = typeof c != 'number' ? A[3] : c),
                    (g = typeof g != 'number' ? A[4] : g),
                    (y = typeof y != 'number' ? A[5] : y),
                    typeof r == 'number')
                )
                    (b._orientation = [r, o, u, c, g, y]),
                        typeof b.ctx.listener.forwardX < 'u'
                            ? (b.ctx.listener.forwardX.setTargetAtTime(
                                  r,
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              b.ctx.listener.forwardY.setTargetAtTime(
                                  o,
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              b.ctx.listener.forwardZ.setTargetAtTime(
                                  u,
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              b.ctx.listener.upX.setTargetAtTime(
                                  c,
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              b.ctx.listener.upY.setTargetAtTime(
                                  g,
                                  Howler.ctx.currentTime,
                                  0.1
                              ),
                              b.ctx.listener.upZ.setTargetAtTime(
                                  y,
                                  Howler.ctx.currentTime,
                                  0.1
                              ))
                            : b.ctx.listener.setOrientation(r, o, u, c, g, y);
                else return A;
                return b;
            }),
            (Howl.prototype.init = (function (r) {
                return function (o) {
                    var u = this;
                    return (
                        (u._orientation = o.orientation || [1, 0, 0]),
                        (u._stereo = o.stereo || null),
                        (u._pos = o.pos || null),
                        (u._pannerAttr = {
                            coneInnerAngle:
                                typeof o.coneInnerAngle < 'u'
                                    ? o.coneInnerAngle
                                    : 360,
                            coneOuterAngle:
                                typeof o.coneOuterAngle < 'u'
                                    ? o.coneOuterAngle
                                    : 360,
                            coneOuterGain:
                                typeof o.coneOuterGain < 'u'
                                    ? o.coneOuterGain
                                    : 0,
                            distanceModel:
                                typeof o.distanceModel < 'u'
                                    ? o.distanceModel
                                    : 'inverse',
                            maxDistance:
                                typeof o.maxDistance < 'u'
                                    ? o.maxDistance
                                    : 1e4,
                            panningModel:
                                typeof o.panningModel < 'u'
                                    ? o.panningModel
                                    : 'HRTF',
                            refDistance:
                                typeof o.refDistance < 'u' ? o.refDistance : 1,
                            rolloffFactor:
                                typeof o.rolloffFactor < 'u'
                                    ? o.rolloffFactor
                                    : 1,
                        }),
                        (u._onstereo = o.onstereo ? [{ fn: o.onstereo }] : []),
                        (u._onpos = o.onpos ? [{ fn: o.onpos }] : []),
                        (u._onorientation = o.onorientation
                            ? [{ fn: o.onorientation }]
                            : []),
                        r.call(this, o)
                    );
                };
            })(Howl.prototype.init)),
            (Howl.prototype.stereo = function (r, o) {
                var u = this;
                if (!u._webAudio) return u;
                if (u._state !== 'loaded')
                    return (
                        u._queue.push({
                            event: 'stereo',
                            action: function () {
                                u.stereo(r, o);
                            },
                        }),
                        u
                    );
                var c =
                    typeof Howler.ctx.createStereoPanner > 'u'
                        ? 'spatial'
                        : 'stereo';
                if (typeof o > 'u')
                    if (typeof r == 'number')
                        (u._stereo = r), (u._pos = [r, 0, 0]);
                    else return u._stereo;
                for (var g = u._getSoundIds(o), y = 0; y < g.length; y++) {
                    var b = u._soundById(g[y]);
                    if (b)
                        if (typeof r == 'number')
                            (b._stereo = r),
                                (b._pos = [r, 0, 0]),
                                b._node &&
                                    ((b._pannerAttr.panningModel =
                                        'equalpower'),
                                    (!b._panner || !b._panner.pan) && n(b, c),
                                    c === 'spatial'
                                        ? typeof b._panner.positionX < 'u'
                                            ? (b._panner.positionX.setValueAtTime(
                                                  r,
                                                  Howler.ctx.currentTime
                                              ),
                                              b._panner.positionY.setValueAtTime(
                                                  0,
                                                  Howler.ctx.currentTime
                                              ),
                                              b._panner.positionZ.setValueAtTime(
                                                  0,
                                                  Howler.ctx.currentTime
                                              ))
                                            : b._panner.setPosition(r, 0, 0)
                                        : b._panner.pan.setValueAtTime(
                                              r,
                                              Howler.ctx.currentTime
                                          )),
                                u._emit('stereo', b._id);
                        else return b._stereo;
                }
                return u;
            }),
            (Howl.prototype.pos = function (r, o, u, c) {
                var g = this;
                if (!g._webAudio) return g;
                if (g._state !== 'loaded')
                    return (
                        g._queue.push({
                            event: 'pos',
                            action: function () {
                                g.pos(r, o, u, c);
                            },
                        }),
                        g
                    );
                if (
                    ((o = typeof o != 'number' ? 0 : o),
                    (u = typeof u != 'number' ? -0.5 : u),
                    typeof c > 'u')
                )
                    if (typeof r == 'number') g._pos = [r, o, u];
                    else return g._pos;
                for (var y = g._getSoundIds(c), b = 0; b < y.length; b++) {
                    var A = g._soundById(y[b]);
                    if (A)
                        if (typeof r == 'number')
                            (A._pos = [r, o, u]),
                                A._node &&
                                    ((!A._panner || A._panner.pan) &&
                                        n(A, 'spatial'),
                                    typeof A._panner.positionX < 'u'
                                        ? (A._panner.positionX.setValueAtTime(
                                              r,
                                              Howler.ctx.currentTime
                                          ),
                                          A._panner.positionY.setValueAtTime(
                                              o,
                                              Howler.ctx.currentTime
                                          ),
                                          A._panner.positionZ.setValueAtTime(
                                              u,
                                              Howler.ctx.currentTime
                                          ))
                                        : A._panner.setPosition(r, o, u)),
                                g._emit('pos', A._id);
                        else return A._pos;
                }
                return g;
            }),
            (Howl.prototype.orientation = function (r, o, u, c) {
                var g = this;
                if (!g._webAudio) return g;
                if (g._state !== 'loaded')
                    return (
                        g._queue.push({
                            event: 'orientation',
                            action: function () {
                                g.orientation(r, o, u, c);
                            },
                        }),
                        g
                    );
                if (
                    ((o = typeof o != 'number' ? g._orientation[1] : o),
                    (u = typeof u != 'number' ? g._orientation[2] : u),
                    typeof c > 'u')
                )
                    if (typeof r == 'number') g._orientation = [r, o, u];
                    else return g._orientation;
                for (var y = g._getSoundIds(c), b = 0; b < y.length; b++) {
                    var A = g._soundById(y[b]);
                    if (A)
                        if (typeof r == 'number')
                            (A._orientation = [r, o, u]),
                                A._node &&
                                    (A._panner ||
                                        (A._pos ||
                                            (A._pos = g._pos || [0, 0, -0.5]),
                                        n(A, 'spatial')),
                                    typeof A._panner.orientationX < 'u'
                                        ? (A._panner.orientationX.setValueAtTime(
                                              r,
                                              Howler.ctx.currentTime
                                          ),
                                          A._panner.orientationY.setValueAtTime(
                                              o,
                                              Howler.ctx.currentTime
                                          ),
                                          A._panner.orientationZ.setValueAtTime(
                                              u,
                                              Howler.ctx.currentTime
                                          ))
                                        : A._panner.setOrientation(r, o, u)),
                                g._emit('orientation', A._id);
                        else return A._orientation;
                }
                return g;
            }),
            (Howl.prototype.pannerAttr = function () {
                var r = this,
                    o = arguments,
                    u,
                    c,
                    g;
                if (!r._webAudio) return r;
                if (o.length === 0) return r._pannerAttr;
                if (o.length === 1)
                    if (typeof o[0] == 'object')
                        (u = o[0]),
                            typeof c > 'u' &&
                                (u.pannerAttr ||
                                    (u.pannerAttr = {
                                        coneInnerAngle: u.coneInnerAngle,
                                        coneOuterAngle: u.coneOuterAngle,
                                        coneOuterGain: u.coneOuterGain,
                                        distanceModel: u.distanceModel,
                                        maxDistance: u.maxDistance,
                                        refDistance: u.refDistance,
                                        rolloffFactor: u.rolloffFactor,
                                        panningModel: u.panningModel,
                                    }),
                                (r._pannerAttr = {
                                    coneInnerAngle:
                                        typeof u.pannerAttr.coneInnerAngle < 'u'
                                            ? u.pannerAttr.coneInnerAngle
                                            : r._coneInnerAngle,
                                    coneOuterAngle:
                                        typeof u.pannerAttr.coneOuterAngle < 'u'
                                            ? u.pannerAttr.coneOuterAngle
                                            : r._coneOuterAngle,
                                    coneOuterGain:
                                        typeof u.pannerAttr.coneOuterGain < 'u'
                                            ? u.pannerAttr.coneOuterGain
                                            : r._coneOuterGain,
                                    distanceModel:
                                        typeof u.pannerAttr.distanceModel < 'u'
                                            ? u.pannerAttr.distanceModel
                                            : r._distanceModel,
                                    maxDistance:
                                        typeof u.pannerAttr.maxDistance < 'u'
                                            ? u.pannerAttr.maxDistance
                                            : r._maxDistance,
                                    refDistance:
                                        typeof u.pannerAttr.refDistance < 'u'
                                            ? u.pannerAttr.refDistance
                                            : r._refDistance,
                                    rolloffFactor:
                                        typeof u.pannerAttr.rolloffFactor < 'u'
                                            ? u.pannerAttr.rolloffFactor
                                            : r._rolloffFactor,
                                    panningModel:
                                        typeof u.pannerAttr.panningModel < 'u'
                                            ? u.pannerAttr.panningModel
                                            : r._panningModel,
                                }));
                    else
                        return (
                            (g = r._soundById(parseInt(o[0], 10))),
                            g ? g._pannerAttr : r._pannerAttr
                        );
                else o.length === 2 && ((u = o[0]), (c = parseInt(o[1], 10)));
                for (var y = r._getSoundIds(c), b = 0; b < y.length; b++)
                    if (((g = r._soundById(y[b])), g)) {
                        var A = g._pannerAttr;
                        A = {
                            coneInnerAngle:
                                typeof u.coneInnerAngle < 'u'
                                    ? u.coneInnerAngle
                                    : A.coneInnerAngle,
                            coneOuterAngle:
                                typeof u.coneOuterAngle < 'u'
                                    ? u.coneOuterAngle
                                    : A.coneOuterAngle,
                            coneOuterGain:
                                typeof u.coneOuterGain < 'u'
                                    ? u.coneOuterGain
                                    : A.coneOuterGain,
                            distanceModel:
                                typeof u.distanceModel < 'u'
                                    ? u.distanceModel
                                    : A.distanceModel,
                            maxDistance:
                                typeof u.maxDistance < 'u'
                                    ? u.maxDistance
                                    : A.maxDistance,
                            refDistance:
                                typeof u.refDistance < 'u'
                                    ? u.refDistance
                                    : A.refDistance,
                            rolloffFactor:
                                typeof u.rolloffFactor < 'u'
                                    ? u.rolloffFactor
                                    : A.rolloffFactor,
                            panningModel:
                                typeof u.panningModel < 'u'
                                    ? u.panningModel
                                    : A.panningModel,
                        };
                        var N = g._panner;
                        N
                            ? ((N.coneInnerAngle = A.coneInnerAngle),
                              (N.coneOuterAngle = A.coneOuterAngle),
                              (N.coneOuterGain = A.coneOuterGain),
                              (N.distanceModel = A.distanceModel),
                              (N.maxDistance = A.maxDistance),
                              (N.refDistance = A.refDistance),
                              (N.rolloffFactor = A.rolloffFactor),
                              (N.panningModel = A.panningModel))
                            : (g._pos || (g._pos = r._pos || [0, 0, -0.5]),
                              n(g, 'spatial'));
                    }
                return r;
            }),
            (Sound.prototype.init = (function (r) {
                return function () {
                    var o = this,
                        u = o._parent;
                    (o._orientation = u._orientation),
                        (o._stereo = u._stereo),
                        (o._pos = u._pos),
                        (o._pannerAttr = u._pannerAttr),
                        r.call(this),
                        o._stereo
                            ? u.stereo(o._stereo)
                            : o._pos &&
                              u.pos(o._pos[0], o._pos[1], o._pos[2], o._id);
                };
            })(Sound.prototype.init)),
            (Sound.prototype.reset = (function (r) {
                return function () {
                    var o = this,
                        u = o._parent;
                    return (
                        (o._orientation = u._orientation),
                        (o._stereo = u._stereo),
                        (o._pos = u._pos),
                        (o._pannerAttr = u._pannerAttr),
                        o._stereo
                            ? u.stereo(o._stereo)
                            : o._pos
                              ? u.pos(o._pos[0], o._pos[1], o._pos[2], o._id)
                              : o._panner &&
                                (o._panner.disconnect(0),
                                (o._panner = void 0),
                                u._refreshBuffer(o)),
                        r.call(this)
                    );
                };
            })(Sound.prototype.reset));
        var n = function (r, o) {
            (o = o || 'spatial'),
                o === 'spatial'
                    ? ((r._panner = Howler.ctx.createPanner()),
                      (r._panner.coneInnerAngle = r._pannerAttr.coneInnerAngle),
                      (r._panner.coneOuterAngle = r._pannerAttr.coneOuterAngle),
                      (r._panner.coneOuterGain = r._pannerAttr.coneOuterGain),
                      (r._panner.distanceModel = r._pannerAttr.distanceModel),
                      (r._panner.maxDistance = r._pannerAttr.maxDistance),
                      (r._panner.refDistance = r._pannerAttr.refDistance),
                      (r._panner.rolloffFactor = r._pannerAttr.rolloffFactor),
                      (r._panner.panningModel = r._pannerAttr.panningModel),
                      typeof r._panner.positionX < 'u'
                          ? (r._panner.positionX.setValueAtTime(
                                r._pos[0],
                                Howler.ctx.currentTime
                            ),
                            r._panner.positionY.setValueAtTime(
                                r._pos[1],
                                Howler.ctx.currentTime
                            ),
                            r._panner.positionZ.setValueAtTime(
                                r._pos[2],
                                Howler.ctx.currentTime
                            ))
                          : r._panner.setPosition(
                                r._pos[0],
                                r._pos[1],
                                r._pos[2]
                            ),
                      typeof r._panner.orientationX < 'u'
                          ? (r._panner.orientationX.setValueAtTime(
                                r._orientation[0],
                                Howler.ctx.currentTime
                            ),
                            r._panner.orientationY.setValueAtTime(
                                r._orientation[1],
                                Howler.ctx.currentTime
                            ),
                            r._panner.orientationZ.setValueAtTime(
                                r._orientation[2],
                                Howler.ctx.currentTime
                            ))
                          : r._panner.setOrientation(
                                r._orientation[0],
                                r._orientation[1],
                                r._orientation[2]
                            ))
                    : ((r._panner = Howler.ctx.createStereoPanner()),
                      r._panner.pan.setValueAtTime(
                          r._stereo,
                          Howler.ctx.currentTime
                      )),
                r._panner.connect(r._node),
                r._paused || r._parent.pause(r._id, !0).play(r._id, !0);
        };
    })();
})(_r);
const Sd = '/audio/coin.mp3';
const Cd = {
        mounted() {
            this.howl = new _r.Howl({ src: [Sd] });
        },
        created() {
            for (var e = 0; e < this.numOfCols; e++)
                this.setBoardSlotsArray({ index: e, value: [] });
            for (
                var n = 0, r = 0, e = 1;
                e <= this.numOfCols * this.numOfRows;
                e++
            )
                this.pushObjectToBoardSlotsArray({
                    index: r,
                    object: { owner: 0, hover: !1, winner: !1, row: n, col: r },
                }),
                    n++,
                    n == this.numOfRows &&
                        ((n = 0), r < this.numOfCols - 1 && r++);
        },
        data() {
            return { howl: {} };
        },
        computed: {
            ...Dt(['currentPlayer', 'playerCanPlay']),
            ...Dt('Board', ['boardSlots', 'moves', 'numOfRows', 'numOfCols']),
        },
        methods: {
            ...kt(['swapToNextPlayer']),
            ...kt('Board', [
                'setBoardSlotsArray',
                'pushObjectToBoardSlotsArray',
                'updateSpecificSlotProperty',
                'pushToMovesArray',
                'setUndoneMovesArray',
            ]),
            shouldGlow(e, n) {
                return this.moves.length > 0
                    ? this.moves[this.moves.length - 1].row == e &&
                          this.moves[this.moves.length - 1].col == n
                    : !1;
            },
            colIsFull(e) {
                for (var n = !0, r = this.boardSlots[0].length - 1; r >= 0; r--)
                    if (this.boardSlots[e][r].owner == 0) {
                        n = !1;
                        break;
                    }
                return n;
            },
            checkSlot(e) {
                if (this.playerCanPlay) {
                    for (var n = this.boardSlots[0].length - 1; n >= 0; n--)
                        if (this.boardSlots[e][n].owner == 0) {
                            this.updateSpecificSlotProperty({
                                col: e,
                                row: n,
                                property: 'owner',
                                value: this.currentPlayer,
                            }),
                                this.updateSpecificSlotProperty({
                                    col: e,
                                    row: n,
                                    property: 'hover',
                                    value: !1,
                                }),
                                this.swapToNextPlayer(),
                                this.pushToMovesArray({
                                    row: n,
                                    col: e,
                                    owner: this.currentPlayer,
                                }),
                                this.setUndoneMovesArray([]),
                                this.howl.play(),
                                this.emitter.emit('checkForWin', {
                                    row: n,
                                    col: e,
                                });
                            break;
                        }
                }
            },
            addHoverClass(e) {
                if (!this.colIsFull(e) && this.playerCanPlay) {
                    for (var n = 5; n >= 0; n--)
                        if (this.boardSlots[e][n].owner == 0) {
                            this.updateSpecificSlotProperty({
                                col: e,
                                row: n,
                                property: 'hover',
                                value: !0,
                            });
                            break;
                        }
                }
            },
            removeHoverClass(e) {
                for (var n = 5; n >= 0; n--)
                    if (this.boardSlots[e][n].owner == 0) {
                        this.updateSpecificSlotProperty({
                            col: e,
                            row: n,
                            property: 'hover',
                            value: !1,
                        });
                        break;
                    }
            },
        },
    },
    Ed = ['onClick', 'onMouseover', 'onMouseleave'],
    Od = { key: 0, class: 'fa fa-crown' };
function Md(e, n, r, o, u, c) {
    return (
        Mt(),
        Ft(
            'div',
            {
                id: 'board',
                class: Xt([
                    'no-select',
                    [
                        'current-player-' + e.currentPlayer,
                        { disabled: !e.playerCanPlay },
                    ],
                ]),
            },
            [
                (Mt(!0),
                Ft(
                    vt,
                    null,
                    Ss(
                        e.boardSlots,
                        (g, y) => (
                            Mt(),
                            Ft(
                                'div',
                                {
                                    class: Xt([
                                        'board-col',
                                        [{ 'col-full': c.colIsFull(y) }],
                                    ]),
                                    key: y,
                                    onClick: (b) => c.checkSlot(y),
                                    onMouseover: (b) => c.addHoverClass(y),
                                    onMouseleave: (b) => c.removeHoverClass(y),
                                },
                                [
                                    (Mt(!0),
                                    Ft(
                                        vt,
                                        null,
                                        Ss(
                                            g,
                                            (b, A) => (
                                                Mt(),
                                                Ft(
                                                    'div',
                                                    {
                                                        class: Xt([
                                                            'board-slot',
                                                            [
                                                                'ownedBy-player-' +
                                                                    b.owner,
                                                                {
                                                                    hover:
                                                                        b.hover &&
                                                                        b.owner ==
                                                                            0,
                                                                    winner: b.winner,
                                                                    glow: c.shouldGlow(
                                                                        A,
                                                                        y
                                                                    ),
                                                                },
                                                            ],
                                                        ]),
                                                        key: A,
                                                    },
                                                    [
                                                        b.winner
                                                            ? (Mt(),
                                                              Ft('i', Od))
                                                            : zf('', !0),
                                                    ],
                                                    2
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                ],
                                42,
                                Ed
                            )
                        )
                    ),
                    128
                )),
            ],
            2
        )
    );
}
const Pd = Kn(Cd, [
        ['render', Md],
        ['__scopeId', 'data-v-cf66a155'],
    ]),
    Id = '/audio/win.mp3',
    kd = {
        mounted() {
            (this.howl = new _r.Howl({ src: [Id] })),
                this.emitter.on('checkForWin', (e) => {
                    this.checkForWin(e.row, e.col);
                });
        },
        computed: {
            ...Dt('Board', ['boardSlots', 'numOfRows', 'numOfCols', 'moves']),
            ...Dt('Scoreboard', ['score']),
        },
        data() {
            return { howl: {} };
        },
        methods: {
            ...kt(['updatePlayerCanPlay', 'swapToNextPlayer']),
            ...kt('Board', ['updateSpecificSlotProperty']),
            ...kt('Alert', ['showAlert']),
            ...kt('Scoreboard', ['updateScore']),
            checkForWin(e, n) {
                this.moves.length > 6 &&
                    (this.checkHorizontal(e, n),
                    this.checkVertical(e, n),
                    this.checkDiagonal(e, n)),
                    this.moves.length == 42 && this.alertDraw();
            },
            checkHorizontal(e, n) {
                let r = Math.max(n - 3, 0),
                    o = Math.min(n + 3, this.numOfCols - 1),
                    u = [];
                for (var c = r; c <= o; c++)
                    u.push({
                        col: c,
                        row: e,
                        owner: this.boardSlots[c][e].owner,
                    });
                this.checkFourInaRow(u);
            },
            checkVertical(e, n) {
                let r = Math.max(e - 3, 0),
                    o = Math.min(e + 3, this.numOfRows - 1),
                    u = [];
                for (var c = r; c <= o; c++)
                    u.push({
                        col: n,
                        row: c,
                        owner: this.boardSlots[n][c].owner,
                    });
                this.checkFourInaRow(u);
            },
            checkDiagonal(e, n) {
                let r,
                    o,
                    u,
                    c,
                    g,
                    y = [];
                for (
                    r = Math.max(
                        n - Math.abs(e - Math.min(e + 3, this.numOfRows - 1)),
                        0
                    ),
                        o = Math.min(
                            n + (e - Math.max(e - 3, 0)),
                            this.numOfCols - 1
                        ),
                        u = e + (n - r),
                        c = r,
                        g = u;
                    c <= o;
                    c++, g--
                )
                    y.push({
                        col: c,
                        row: g,
                        owner: this.boardSlots[c][g].owner,
                    });
                for (
                    this.checkFourInaRow(y),
                        r = Math.max(n - Math.abs(e - Math.max(e - 3, 0)), 0),
                        o = Math.min(
                            n +
                                Math.abs(
                                    e - Math.min(e + 3, this.numOfRows - 1)
                                ),
                            this.numOfCols - 1
                        ),
                        u = e - (n - r),
                        y = [],
                        c = r,
                        g = u;
                    c <= o;
                    c++, g++
                )
                    y.push({
                        col: c,
                        row: g,
                        owner: this.boardSlots[c][g].owner,
                    });
                this.checkFourInaRow(y);
            },
            checkFourInaRow(e) {
                let n = 1,
                    r = [0];
                for (let o = 0; o <= e.length - 1; o++)
                    if (typeof e[o + 1] < 'u') {
                        if (
                            (e[o].owner == e[o + 1].owner
                                ? (n++, r.push(o + 1))
                                : ((n = 1), (r = [o + 1])),
                            n == 4)
                        ) {
                            for (let u = 0; u <= r.length - 1; u++)
                                this.updateSpecificSlotProperty({
                                    col: e[r[u]].col,
                                    row: e[r[u]].row,
                                    property: 'winner',
                                    value: !0,
                                });
                            this.alertWinner(e[o].owner);
                            break;
                        }
                    } else r.push(o);
            },
            alertWinner(e) {
                this.howl.play(),
                    this.updatePlayerCanPlay(!1),
                    this.showAlert('Player ' + e + ' won the game.'),
                    this.updateScore({
                        player: e,
                        value: this.score['player' + e] + 1,
                    });
            },
            alertDraw() {
                this.showAlert('Looks like a draw.');
            },
        },
    };
function Nd(e, n, r, o, u, c) {
    return null;
}
const Ld = Kn(kd, [['render', Nd]]),
    Dd = '/audio/undo_redo.mp3',
    Hd = '/audio/reset.mp3';
const jd = {
        mounted() {
            (this.howl[0] = new _r.Howl({ src: [Hd] })),
                (this.howl[1] = new _r.Howl({ src: [Dd] })),
                this.resetBoard(!1);
        },
        computed: {
            ...Dt(['currentPlayer', 'multiplayer', 'playerCanPlay']),
            ...Dt('Board', ['boardSlots', 'moves', 'undoneMoves']),
            multiplayerStatus() {
                return this.multiplayer ? 'ON' : 'OFF';
            },
        },
        data() {
            return { howl: [] };
        },
        methods: {
            ...kt([
                'swapToNextPlayer',
                'updateMultiplayer',
                'updatePlayerCanPlay',
            ]),
            ...kt('Board', [
                'updateSpecificSlotProperty',
                'popMovesArray',
                'pushToMovesArray',
                'setMovesArray',
                'popUndoneMovesArray',
                'pushToUndoneMovesArray',
                'setUndoneMovesArray',
            ]),
            resetBoard(e = !0) {
                let n = !0;
                if (
                    (e
                        ? (n = confirm(
                              'Are you sure you want to reset the board?'
                          ))
                        : (n = !0),
                    n)
                ) {
                    for (var r = this.boardSlots.length - 1; r >= 0; r--)
                        for (var o = this.boardSlots[r].length - 1; o >= 0; o--)
                            this.updateSpecificSlotProperty({
                                col: r,
                                row: o,
                                property: 'owner',
                                value: 0,
                            }),
                                this.updateSpecificSlotProperty({
                                    col: r,
                                    row: o,
                                    property: 'hover',
                                    value: !1,
                                }),
                                this.updateSpecificSlotProperty({
                                    col: r,
                                    row: o,
                                    property: 'winner',
                                    value: !1,
                                });
                    this.currentPlayer == 2 && this.swapToNextPlayer(),
                        this.setMovesArray([]),
                        this.setUndoneMovesArray([]),
                        this.updatePlayerCanPlay(!0),
                        e && this.howl[0].play();
                }
            },
            undoLastMove() {
                this.updateSpecificSlotProperty({
                    col: this.moves[this.moves.length - 1].col,
                    row: this.moves[this.moves.length - 1].row,
                    property: 'owner',
                    value: 0,
                }),
                    this.swapToNextPlayer(),
                    this.pushToUndoneMovesArray({
                        row: this.moves[this.moves.length - 1].row,
                        col: this.moves[this.moves.length - 1].col,
                        owner: this.currentPlayer,
                    }),
                    this.popMovesArray(),
                    this.howl[1].play();
            },
            redoLastMove() {
                this.updateSpecificSlotProperty({
                    col: this.undoneMoves[this.undoneMoves.length - 1].col,
                    row: this.undoneMoves[this.undoneMoves.length - 1].row,
                    property: 'owner',
                    value: this.undoneMoves[this.undoneMoves.length - 1].owner,
                }),
                    this.pushToMovesArray({
                        row: this.undoneMoves[this.undoneMoves.length - 1].row,
                        col: this.undoneMoves[this.undoneMoves.length - 1].col,
                        owner: this.undoneMoves[this.undoneMoves.length - 1]
                            .owner,
                    }),
                    this.popUndoneMovesArray(),
                    this.swapToNextPlayer(),
                    this.updatePlayerCanPlay(!0),
                    this.howl[1].play();
            },
        },
    },
    Mo = (e) => (Zr('data-v-448f96d3'), (e = e()), ei(), e),
    Fd = { class: 'container' },
    Rd = { class: 'controls' },
    Bd = { class: 'inline-flex' },
    $d = ['disabled'],
    qd = Mo(() => Ie('i', { class: 'fa fa-undo-alt' }, null, -1)),
    Wd = ['disabled'],
    Vd = Mo(() => Ie('i', { class: 'fa fa-redo-alt' }, null, -1)),
    Ud = Mo(() => Ie('i', { class: 'fa fa-recycle' }, null, -1));
function Gd(e, n, r, o, u, c) {
    return (
        Mt(),
        Ft('div', Fd, [
            Ie('div', Rd, [
                Ie('div', Bd, [
                    Ie(
                        'button',
                        {
                            class: 'btn h-ripple full-width',
                            disabled: e.moves.length == 0 || !e.playerCanPlay,
                            onClick:
                                n[0] ||
                                (n[0] = (...g) =>
                                    c.undoLastMove && c.undoLastMove(...g)),
                        },
                        [qd, $n('Undo')],
                        8,
                        $d
                    ),
                    Ie(
                        'button',
                        {
                            class: 'btn h-ripple full-width',
                            disabled:
                                e.undoneMoves.length == 0 || !e.playerCanPlay,
                            onClick:
                                n[1] ||
                                (n[1] = (...g) =>
                                    c.redoLastMove && c.redoLastMove(...g)),
                        },
                        [Vd, $n('Redo')],
                        8,
                        Wd
                    ),
                ]),
                Ie(
                    'button',
                    {
                        class: 'btn h-ripple full-width red mt-20',
                        onClick:
                            n[2] ||
                            (n[2] = (...g) =>
                                c.resetBoard && c.resetBoard(...g)),
                    },
                    [Ud, $n('Reset')]
                ),
            ]),
        ])
    );
}
const Kd = Kn(jd, [
    ['render', Gd],
    ['__scopeId', 'data-v-448f96d3'],
]);
const Xd = {
        computed: { ...Dt(['currentPlayer']), ...Dt('Scoreboard', ['score']) },
    },
    tu = (e) => (Zr('data-v-802ff8b6'), (e = e()), ei(), e),
    zd = { class: 'scoreboard' },
    Qd = tu(() =>
        Ie(
            'div',
            { class: 'inline' },
            [Ie('div', { class: 'checker player-1' })],
            -1
        )
    ),
    Yd = { class: 'score' },
    Jd = tu(() =>
        Ie(
            'div',
            { class: 'inline' },
            [Ie('div', { class: 'checker player-2' })],
            -1
        )
    ),
    Zd = { class: 'score' };
function ep(e, n, r, o, u, c) {
    return (
        Mt(),
        Ft('div', zd, [
            Ie(
                'div',
                {
                    class: Xt([
                        'player-one',
                        { 'now-playing': e.currentPlayer == 1 },
                    ]),
                },
                [Qd, Ie('p', Yd, ds(e.score.player1), 1)],
                2
            ),
            Ie(
                'div',
                {
                    class: Xt([
                        'player-two',
                        { 'now-playing': e.currentPlayer == 2 },
                    ]),
                },
                [Jd, Ie('p', Zd, ds(e.score.player2), 1)],
                2
            ),
        ])
    );
}
const tp = Kn(Xd, [
    ['render', ep],
    ['__scopeId', 'data-v-802ff8b6'],
]);
const np = {
        components: {
            Alert: Ad,
            Board: Pd,
            WinChecker: Ld,
            GameControls: Kd,
            ScoreBoard: tp,
        },
        mounted() {
            this.addEventListener();
        },
        unmounted() {
            this.removeEventListener();
        },
        methods: {
            addEventListener() {
                An('#projects-app-connect-4-container').on(
                    'mousedown',
                    '.h-ripple',
                    function (e) {
                        var n = An(this);
                        if (
                            (n.closest('[data-ripple], .h-ripple') &&
                                e.stopPropagation(),
                            !n.hasClass('disabled'))
                        ) {
                            var r = 'rgba(255,255,255,0.5)';
                            n.hasClass('light') && (r = '#3F51B5');
                            var o = n.css('position'),
                                u = n.offset();
                            Math.min(this.offsetWidth, 160);
                            var c = Math.min(this.offsetHeight, 160),
                                g = e.pageX - u.left,
                                y = e.pageY - u.top,
                                b = An('<div/>', {
                                    class: 'ripple',
                                    appendTo: n,
                                });
                            (!o || o === 'static') &&
                                n.css({ position: 'relative' }),
                                An('<div/>', {
                                    class: 'rippleWave',
                                    css: {
                                        background: r,
                                        width: c,
                                        height: c,
                                        left: g - c / 2,
                                        top: y - c / 2,
                                    },
                                    appendTo: b,
                                    one: {
                                        animationend: function () {
                                            b.remove();
                                        },
                                    },
                                });
                        }
                    }
                );
            },
            removeEventListener() {
                An('#projects-app-connect-4-container').off(
                    'mousedown',
                    '.h-ripple'
                );
            },
        },
    },
    rp = (e) => (Zr('data-v-f07ee364'), (e = e()), ei(), e),
    ip = rp(() =>
        Ie(
            'div',
            { class: 'menu-back-container' },
            [
                Ie('a', { href: 'https://mixmav.me', class: 'a' }, [
                    Ie('i', {
                        class: 'fa fa-chevron-left',
                        style: { 'font-size': '.8em' },
                    }),
                    $n('mixmav.me'),
                ]),
            ],
            -1
        )
    );
function op(e, n, r, o, u, c) {
    const g = or('alert'),
        y = or('board'),
        b = or('win-checker'),
        A = or('game-controls'),
        N = or('score-board');
    return Mt(), Ft(vt, null, [ip, ct(g), ct(y), ct(b), ct(A), ct(N)], 64);
}
const sp = Kn(np, [
        ['render', op],
        ['__scopeId', 'data-v-f07ee364'],
    ]),
    ap = hd(),
    Po = Pc(sp);
Po.use(pd);
Po.config.globalProperties.emitter = ap;
Po.mount('#app');
