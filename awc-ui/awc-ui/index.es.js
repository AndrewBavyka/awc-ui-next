/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Be = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ve = Symbol(), Qe = /* @__PURE__ */ new WeakMap();
let bo = class {
  constructor(t, o, i) {
    if (this._$cssResult$ = !0, i !== Ve) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = o;
  }
  get styleSheet() {
    let t = this.o;
    const o = this.t;
    if (Be && t === void 0) {
      const i = o !== void 0 && o.length === 1;
      i && (t = Qe.get(o)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Qe.set(o, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const qo = (e) => new bo(typeof e == "string" ? e : e + "", void 0, Ve), j = (e, ...t) => {
  const o = e.length === 1 ? e[0] : t.reduce((i, r, s) => i + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + e[s + 1], e[0]);
  return new bo(o, e, Ve);
}, Wo = (e, t) => {
  if (Be) e.adoptedStyleSheets = t.map((o) => o instanceof CSSStyleSheet ? o : o.styleSheet);
  else for (const o of t) {
    const i = document.createElement("style"), r = he.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = o.cssText, e.appendChild(i);
  }
}, to = Be ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let o = "";
  for (const i of t.cssRules) o += i.cssText;
  return qo(o);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zo, defineProperty: Go, getOwnPropertyDescriptor: Yo, getOwnPropertyNames: Ko, getOwnPropertySymbols: Xo, getPrototypeOf: Jo } = Object, mt = globalThis, eo = mt.trustedTypes, Qo = eo ? eo.emptyScript : "", ke = mt.reactiveElementPolyfillSupport, Kt = (e, t) => e, de = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Qo : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let o = e;
  switch (t) {
    case Boolean:
      o = e !== null;
      break;
    case Number:
      o = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        o = JSON.parse(e);
      } catch {
        o = null;
      }
  }
  return o;
} }, De = (e, t) => !Zo(e, t), oo = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: De };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), mt.litPropertyMetadata ?? (mt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Rt = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, o = oo) {
    if (o.state && (o.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((o = Object.create(o)).wrapped = !0), this.elementProperties.set(t, o), !o.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(t, i, o);
      r !== void 0 && Go(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, o, i) {
    const { get: r, set: s } = Yo(this.prototype, t) ?? { get() {
      return this[o];
    }, set(a) {
      this[o] = a;
    } };
    return { get: r, set(a) {
      const n = r == null ? void 0 : r.call(this);
      s == null || s.call(this, a), this.requestUpdate(t, n, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? oo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Kt("elementProperties"))) return;
    const t = Jo(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Kt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Kt("properties"))) {
      const o = this.properties, i = [...Ko(o), ...Xo(o)];
      for (const r of i) this.createProperty(r, o[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const o = litPropertyMetadata.get(t);
      if (o !== void 0) for (const [i, r] of o) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [o, i] of this.elementProperties) {
      const r = this._$Eu(o, i);
      r !== void 0 && this._$Eh.set(r, o);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const o = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) o.unshift(to(r));
    } else t !== void 0 && o.push(to(t));
    return o;
  }
  static _$Eu(t, o) {
    const i = o.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((o) => this.enableUpdating = o), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((o) => o(this));
  }
  addController(t) {
    var o;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((o = t.hostConnected) == null || o.call(t));
  }
  removeController(t) {
    var o;
    (o = this._$EO) == null || o.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), o = this.constructor.elementProperties;
    for (const i of o.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wo(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((o) => {
      var i;
      return (i = o.hostConnected) == null ? void 0 : i.call(o);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((o) => {
      var i;
      return (i = o.hostDisconnected) == null ? void 0 : i.call(o);
    });
  }
  attributeChangedCallback(t, o, i) {
    this._$AK(t, i);
  }
  _$ET(t, o) {
    var s;
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const a = (((s = i.converter) == null ? void 0 : s.toAttribute) !== void 0 ? i.converter : de).toAttribute(o, i.type);
      this._$Em = t, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
    }
  }
  _$AK(t, o) {
    var s, a;
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), c = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((s = n.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? n.converter : de;
      this._$Em = r, this[r] = c.fromAttribute(o, n.type) ?? ((a = this._$Ej) == null ? void 0 : a.get(r)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, o, i) {
    var r;
    if (t !== void 0) {
      const s = this.constructor, a = this[t];
      if (i ?? (i = s.getPropertyOptions(t)), !((i.hasChanged ?? De)(a, o) || i.useDefault && i.reflect && a === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(s._$Eu(t, i)))) return;
      this.C(t, o, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, o, { useDefault: i, reflect: r, wrapped: s }, a) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? o ?? this[t]), s !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (o = void 0), this._$AL.set(t, o)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (o) {
      Promise.reject(o);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, a] of this._$Ep) this[s] = a;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [s, a] of r) {
        const { wrapped: n } = a, c = this[s];
        n !== !0 || this._$AL.has(s) || c === void 0 || this.C(s, void 0, a, c);
      }
    }
    let t = !1;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), (i = this._$EO) == null || i.forEach((r) => {
        var s;
        return (s = r.hostUpdate) == null ? void 0 : s.call(r);
      }), this.update(o)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var o;
    (o = this._$EO) == null || o.forEach((i) => {
      var r;
      return (r = i.hostUpdated) == null ? void 0 : r.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((o) => this._$ET(o, this[o]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
Rt.elementStyles = [], Rt.shadowRootOptions = { mode: "open" }, Rt[Kt("elementProperties")] = /* @__PURE__ */ new Map(), Rt[Kt("finalized")] = /* @__PURE__ */ new Map(), ke == null || ke({ ReactiveElement: Rt }), (mt.reactiveElementVersions ?? (mt.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt = globalThis, ue = Xt.trustedTypes, io = ue ? ue.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, mo = "$lit$", bt = `lit$${Math.random().toFixed(9).slice(2)}$`, yo = "?" + bt, ti = `<${yo}>`, Pt = document, Jt = () => Pt.createComment(""), Qt = (e) => e === null || typeof e != "object" && typeof e != "function", Fe = Array.isArray, ei = (e) => Fe(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", $e = `[ 	
\f\r]`, Gt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ro = /-->/g, so = />/g, Ot = RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ao = /'/g, no = /"/g, xo = /^(?:script|style|textarea|title)$/i, _o = (e) => (t, ...o) => ({ _$litType$: e, strings: t, values: o }), y = _o(1), W = _o(2), tt = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), co = /* @__PURE__ */ new WeakMap(), Tt = Pt.createTreeWalker(Pt, 129);
function Co(e, t) {
  if (!Fe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return io !== void 0 ? io.createHTML(t) : t;
}
const oi = (e, t) => {
  const o = e.length - 1, i = [];
  let r, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = Gt;
  for (let n = 0; n < o; n++) {
    const c = e[n];
    let h, u, d = -1, f = 0;
    for (; f < c.length && (a.lastIndex = f, u = a.exec(c), u !== null); ) f = a.lastIndex, a === Gt ? u[1] === "!--" ? a = ro : u[1] !== void 0 ? a = so : u[2] !== void 0 ? (xo.test(u[2]) && (r = RegExp("</" + u[2], "g")), a = Ot) : u[3] !== void 0 && (a = Ot) : a === Ot ? u[0] === ">" ? (a = r ?? Gt, d = -1) : u[1] === void 0 ? d = -2 : (d = a.lastIndex - u[2].length, h = u[1], a = u[3] === void 0 ? Ot : u[3] === '"' ? no : ao) : a === no || a === ao ? a = Ot : a === ro || a === so ? a = Gt : (a = Ot, r = void 0);
    const p = a === Ot && e[n + 1].startsWith("/>") ? " " : "";
    s += a === Gt ? c + ti : d >= 0 ? (i.push(h), c.slice(0, d) + mo + c.slice(d) + bt + p) : c + bt + (d === -2 ? n : p);
  }
  return [Co(e, s + (e[o] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class te {
  constructor({ strings: t, _$litType$: o }, i) {
    let r;
    this.parts = [];
    let s = 0, a = 0;
    const n = t.length - 1, c = this.parts, [h, u] = oi(t, o);
    if (this.el = te.createElement(h, i), Tt.currentNode = this.el.content, o === 2 || o === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (r = Tt.nextNode()) !== null && c.length < n; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const d of r.getAttributeNames()) if (d.endsWith(mo)) {
          const f = u[a++], p = r.getAttribute(d).split(bt), v = /([.?@])?(.*)/.exec(f);
          c.push({ type: 1, index: s, name: v[2], strings: p, ctor: v[1] === "." ? ri : v[1] === "?" ? si : v[1] === "@" ? ai : ve }), r.removeAttribute(d);
        } else d.startsWith(bt) && (c.push({ type: 6, index: s }), r.removeAttribute(d));
        if (xo.test(r.tagName)) {
          const d = r.textContent.split(bt), f = d.length - 1;
          if (f > 0) {
            r.textContent = ue ? ue.emptyScript : "";
            for (let p = 0; p < f; p++) r.append(d[p], Jt()), Tt.nextNode(), c.push({ type: 2, index: ++s });
            r.append(d[f], Jt());
          }
        }
      } else if (r.nodeType === 8) if (r.data === yo) c.push({ type: 2, index: s });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(bt, d + 1)) !== -1; ) c.push({ type: 7, index: s }), d += bt.length - 1;
      }
      s++;
    }
  }
  static createElement(t, o) {
    const i = Pt.createElement("template");
    return i.innerHTML = t, i;
  }
}
function Dt(e, t, o = e, i) {
  var a, n;
  if (t === tt) return t;
  let r = i !== void 0 ? (a = o._$Co) == null ? void 0 : a[i] : o._$Cl;
  const s = Qt(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== s && ((n = r == null ? void 0 : r._$AO) == null || n.call(r, !1), s === void 0 ? r = void 0 : (r = new s(e), r._$AT(e, o, i)), i !== void 0 ? (o._$Co ?? (o._$Co = []))[i] = r : o._$Cl = r), r !== void 0 && (t = Dt(e, r._$AS(e, t.values), r, i)), t;
}
class ii {
  constructor(t, o) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = o;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: o }, parts: i } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? Pt).importNode(o, !0);
    Tt.currentNode = r;
    let s = Tt.nextNode(), a = 0, n = 0, c = i[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let h;
        c.type === 2 ? h = new ie(s, s.nextSibling, this, t) : c.type === 1 ? h = new c.ctor(s, c.name, c.strings, this, t) : c.type === 6 && (h = new ni(s, this, t)), this._$AV.push(h), c = i[++n];
      }
      a !== (c == null ? void 0 : c.index) && (s = Tt.nextNode(), a++);
    }
    return Tt.currentNode = Pt, r;
  }
  p(t) {
    let o = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, o), o += i.strings.length - 2) : i._$AI(t[o])), o++;
  }
}
class ie {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, o, i, r) {
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = t, this._$AB = o, this._$AM = i, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const o = this._$AM;
    return o !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = o.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, o = this) {
    t = Dt(this, t, o), Qt(t) ? t === S || t == null || t === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : t !== this._$AH && t !== tt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ei(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== S && Qt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Pt.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var s;
    const { values: o, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = te.createElement(Co(i.h, i.h[0]), this.options)), i);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === r) this._$AH.p(o);
    else {
      const a = new ii(r, this), n = a.u(this.options);
      a.p(o), this.T(n), this._$AH = a;
    }
  }
  _$AC(t) {
    let o = co.get(t.strings);
    return o === void 0 && co.set(t.strings, o = new te(t)), o;
  }
  k(t) {
    Fe(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let i, r = 0;
    for (const s of t) r === o.length ? o.push(i = new ie(this.O(Jt()), this.O(Jt()), this, this.options)) : i = o[r], i._$AI(s), r++;
    r < o.length && (this._$AR(i && i._$AB.nextSibling, r), o.length = r);
  }
  _$AR(t = this._$AA.nextSibling, o) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, o); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var o;
    this._$AM === void 0 && (this._$Cv = t, (o = this._$AP) == null || o.call(this, t));
  }
}
class ve {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, o, i, r, s) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = t, this.name = o, this._$AM = r, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = S;
  }
  _$AI(t, o = this, i, r) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) t = Dt(this, t, o, 0), a = !Qt(t) || t !== this._$AH && t !== tt, a && (this._$AH = t);
    else {
      const n = t;
      let c, h;
      for (t = s[0], c = 0; c < s.length - 1; c++) h = Dt(this, n[i + c], o, c), h === tt && (h = this._$AH[c]), a || (a = !Qt(h) || h !== this._$AH[c]), h === S ? t = S : t !== S && (t += (h ?? "") + s[c + 1]), this._$AH[c] = h;
    }
    a && !r && this.j(t);
  }
  j(t) {
    t === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ri extends ve {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === S ? void 0 : t;
  }
}
class si extends ve {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== S);
  }
}
class ai extends ve {
  constructor(t, o, i, r, s) {
    super(t, o, i, r, s), this.type = 5;
  }
  _$AI(t, o = this) {
    if ((t = Dt(this, t, o, 0) ?? S) === tt) return;
    const i = this._$AH, r = t === S && i !== S || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, s = t !== S && (i === S || r);
    r && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var o;
    typeof this._$AH == "function" ? this._$AH.call(((o = this.options) == null ? void 0 : o.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ni {
  constructor(t, o, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Dt(this, t);
  }
}
const Ae = Xt.litHtmlPolyfillSupport;
Ae == null || Ae(te, ie), (Xt.litHtmlVersions ?? (Xt.litHtmlVersions = [])).push("3.3.0");
const ci = (e, t, o) => {
  const i = (o == null ? void 0 : o.renderBefore) ?? t;
  let r = i._$litPart$;
  if (r === void 0) {
    const s = (o == null ? void 0 : o.renderBefore) ?? null;
    i._$litPart$ = r = new ie(t.insertBefore(Jt(), s), s, void 0, o ?? {});
  }
  return r._$AI(e), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt = globalThis;
let E = class extends Rt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var o;
    const t = super.createRenderRoot();
    return (o = this.renderOptions).renderBefore ?? (o.renderBefore = t.firstChild), t;
  }
  update(t) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ci(o, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return tt;
  }
};
var wo;
E._$litElement$ = !0, E.finalized = !0, (wo = zt.litElementHydrateSupport) == null || wo.call(zt, { LitElement: E });
const Ee = zt.litElementPolyfillSupport;
Ee == null || Ee({ LitElement: E });
(zt.litElementVersions ?? (zt.litElementVersions = [])).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = (e) => (t, o) => {
  o !== void 0 ? o.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const li = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: De }, hi = (e = li, t, o) => {
  const { kind: i, metadata: r } = o;
  let s = globalThis.litPropertyMetadata.get(r);
  if (s === void 0 && globalThis.litPropertyMetadata.set(r, s = /* @__PURE__ */ new Map()), i === "setter" && ((e = Object.create(e)).wrapped = !0), s.set(o.name, e), i === "accessor") {
    const { name: a } = o;
    return { set(n) {
      const c = t.get.call(this);
      t.set.call(this, n), this.requestUpdate(a, c, e);
    }, init(n) {
      return n !== void 0 && this.C(a, void 0, e, n), n;
    } };
  }
  if (i === "setter") {
    const { name: a } = o;
    return function(n) {
      const c = this[a];
      t.call(this, n), this.requestUpdate(a, c, e);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function l(e) {
  return (t, o) => typeof o == "object" ? hi(e, t, o) : ((i, r, s) => {
    const a = r.hasOwnProperty(s);
    return r.constructor.createProperty(s, i), a ? Object.getOwnPropertyDescriptor(r, s) : void 0;
  })(e, t, o);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function vt(e) {
  return l({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const di = (e, t, o) => (o.configurable = !0, o.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, o), o);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function it(e, t) {
  return (o, i, r) => {
    const s = (a) => {
      var n;
      return ((n = a.renderRoot) == null ? void 0 : n.querySelector(e)) ?? null;
    };
    return di(o, i, { get() {
      return s(this);
    } });
  };
}
const ui = j`
    :host {
        display: block;

        --awc-alert-background-primary: #2a8ce31a;
        --awc-alert-background-warning: #ff71881a;
        --awc-alert-background-success: #24b8871a;
        --awc-alert-background-attention: #fd90381a;

        --awc-alert-text-primary: var(--global-cyan-500);
        --awc-alert-text-warning: var(--global-red-400);
        --awc-alert-text-success: var(--global-green-500);
        --awc-alert-text-attention: var(--global-orange-400);
    }

    :host([variant='message']) {
        border-radius: 0 var(--corner-radius-m) var(--corner-radius-m) var(--corner-radius-m);
    }

    :host([variant='block']) {
        border-radius: var(--corner-radius-m);
    }

    :host([color='primary']) {
        background-color: var(--awc-alert-background-primary);
        color: var(--awc-alert-text-primary);
    }

    :host([color='warning']) {
        background-color: var(--awc-alert-background-warning);
        color: var(--awc-alert-text-warning);
    }

    :host([color='success']) {
        background-color: var(--awc-alert-background-success);
        color: var(--awc-alert-text-success);
    }

    :host([color='attention']) {
        background-color: var(--awc-alert-background-attention);
        color: var(--awc-alert-text-attention);
    }

    .awc-alert {
        padding: 12px 16px;
        text-align: start;
        word-wrap: break-word;
        overflow-wrap: break-word;
        font: var(--awc-font-text-regular-14);
    }

    .awc-alert__title {
        margin: 0;
        padding: 0;
    }
`;
var pi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, Ie = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? fi(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && pi(t, o, r), r;
};
const gi = "awc-alert";
let Ft = class extends E {
  constructor() {
    super(...arguments), this.color = "primary", this.variant = "block";
  }
  render() {
    return y`
            <div class="awc-alert">
                <p class="awc-alert__title"><slot></slot></p>
            </div>
        `;
  }
};
Ft.styles = ui;
Ie([
  l({ type: String, reflect: !0 })
], Ft.prototype, "color", 2);
Ie([
  l({ type: String, reflect: !0 })
], Ft.prototype, "variant", 2);
Ft = Ie([
  H(gi)
], Ft);
const vi = j`
    :host {
        display: flex;
        fill: var(--colors-light-secondary);
        // fixes incorrect display in firefox (verified by awc-die)
        min-height: 16px;
        min-width: 16px;
    }

    .awc-icon {
        display: flex;
        max-width: max-content;
    }

    :host([icon-scale]) .awc-icon {
        width: var(--awc-icon-size);
        height: var(--awc-icon-size);
    }

    .awc-icon {
        width: var(--awc-icon-size);
        height: var(--awc-icon-size);
    }
`;
var wi = Object.defineProperty, bi = Object.getOwnPropertyDescriptor, we = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? bi(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && wi(t, o, r), r;
};
const mi = "awc-icon-loader";
let It = class extends E {
  constructor() {
    super(...arguments), this.type = "icon", this.size = "", this.src = "";
  }
  _setGlobalIcons() {
    const e = this.type, t = this.size, o = this.src, i = window.__AWC_ICONS || {};
    return window.__AWC_ICONS = i, i[e] || (i[e] = {}), i[e][t] = o, i;
  }
  firstUpdated() {
    this._setGlobalIcons();
  }
};
we([
  l({ type: String })
], It.prototype, "type", 2);
we([
  l({ type: String })
], It.prototype, "size", 2);
we([
  l({ type: String })
], It.prototype, "src", 2);
It = we([
  H(mi)
], It);
var yi = Object.defineProperty, xi = Object.getOwnPropertyDescriptor, re = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? xi(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && yi(t, o, r), r;
};
const _i = "awc-icon";
let xt = class extends E {
  constructor() {
    super(...arguments), this.type = "icon", this.size = "16", this.name = "", this.iconScale = "";
  }
  _getGlobalIcon() {
    const e = window.__AWC_ICONS;
    if (e && e[this.type] && e[this.type][this.size])
      return e[this.type][this.size];
  }
  render() {
    const e = this._getGlobalIcon();
    if (e)
      return W`
        <svg
          class="awc-icon"
          style=${this.iconScale ? `--awc-icon-size: ${this.iconScale}` : ""}
          width=${this.size}
          height=${this.size}
        >
          <use href="${e}#${this.name}"></use>
        </svg>
        <slot></slot>
      `;
  }
};
xt.styles = [vi];
re([
  l({ type: String, reflect: !0 })
], xt.prototype, "type", 2);
re([
  l({ type: String, reflect: !0 })
], xt.prototype, "size", 2);
re([
  l({ type: String, reflect: !0 })
], xt.prototype, "name", 2);
re([
  l({ type: String, attribute: "icon-scale" })
], xt.prototype, "iconScale", 2);
xt = re([
  H(_i)
], xt);
const Ci = j`
    :host {
        display: block;

        --awc-accordion-item-box-shadow: inset 0 -1px 0 0 var(--awc-accordion-item-divider-theme);
        --awc-accordion-item-color-title: var(--awc-accordion-item-title-theme);
    }

    button {
        margin: 0;
        padding: 0;
        border: none;
        background: none;
    }

    .awc-accordion-item {
        box-shadow: var(--awc-accordion-item-box-shadow);
    }

    .awc-accordion-item__button {
        position: relative;
        cursor: pointer;
        padding: var(--awc-accordion-item-padding-title, 0 16px 0 0);
        min-block-size: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font: var(--awc-font-headline-medium-16);
        color: var(--awc-accordion-item-color-title);
    }

    .awc-accordion-item__button:focus-visible {
        outline: 1px solid var(--colors-light-focus);
        border-radius: var(--corner-radius-m);
    }

    .awc-accordion-item__arrow {
        transition: transform 0.3s ease-in-out;
    }

    :host([active]) .awc-accordion-item__arrow {
        transform: rotate(180deg);
    }

    :host([disabled]) .awc-accordion-item__button {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }

    :host([disabled][active]) .awc-accordion-item__wrapper {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }

    .awc-accordion-item__wrapper {
        display: grid;
        opacity: 0;
        grid-template-rows: 0fr;
        transition:
            padding 0.3s,
            opacity 0.3s,
            grid-template-rows 0.3s;
    }

    .awc-accordion-item__wrapper.active {
        opacity: 1;
        grid-template-rows: 1fr;
        padding: 0 0 16px 0;
    }

    .awc-accordion-item__content {
        overflow-y: hidden;
    }

    /* 
  .awc-accordion-item__button:focus-visible:before {
    content: "";
    position: absolute;
    border: 3px solid #839ff633;
    inset: -3px;
    border-radius: var(--corner-radius-l);
    pointer-events: none;
  }
  */
`;
function ki(e, t) {
  return function(o, i) {
    const r = new CustomEvent(t, {
      detail: o,
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      ...i
    });
    return e.dispatchEvent(r), r;
  };
}
function ct(e) {
  return (t, o) => {
    Object.defineProperty(t, o, {
      get() {
        return ki(this, e || o);
      },
      enumerable: !0,
      configurable: !0
    });
  };
}
var $i = Object.defineProperty, Ai = Object.getOwnPropertyDescriptor, se = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Ai(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && $i(t, o, r), r;
};
const ko = "awc-accordion-item";
let _t = class extends E {
  constructor() {
    super(...arguments), this.active = !1, this.disabled = !1, this._arrowDownSvg = W`
    <svg class="awc-accordion-item__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
    </svg>
  `;
  }
  _toggleActive() {
    this.disabled || (this.active = !this.active, this._onActive(this.active));
  }
  render() {
    return y`
            <div class="awc-accordion-item">
                <button tabindex="0" @click=${this._toggleActive} class="awc-accordion-item__button" type="button">
                    ${this.title} ${this._arrowDownSvg}
                </button>

                <section class="awc-accordion-item__wrapper ${this.active ? "active" : ""}">
                    <div ?inert=${!this.active} class="awc-accordion-item__content">
                        <slot></slot>
                    </div>
                </section>
            </div>
        `;
  }
};
_t.styles = Ci;
se([
  l({ type: String, reflect: !0 })
], _t.prototype, "title", 2);
se([
  l({ type: Boolean, reflect: !0 })
], _t.prototype, "active", 2);
se([
  l({ type: Boolean, reflect: !0 })
], _t.prototype, "disabled", 2);
se([
  ct("awc-accordion-toggle")
], _t.prototype, "_onActive", 2);
_t = se([
  H(ko)
], _t);
const Ei = j`
    :host {
        display: block;
    }

    :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }
`;
var Si = Object.defineProperty, Oi = Object.getOwnPropertyDescriptor, He = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Oi(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Si(t, o, r), r;
};
const Ti = "awc-accordion";
let Ht = class extends E {
  constructor() {
    super(...arguments), this.disabled = !1, this.autoclose = !1;
  }
  get accordionItems() {
    return [...this.querySelectorAll(ko)];
  }
  _autocloseAccordionItem(e) {
    if (!this.autoclose) return;
    const t = e.target;
    t.disabled && this.disabled || (t.active ? (this.accordionItems.forEach((o) => o.active = !1), t.active = !0) : (t.active = !0, t.active && (t.active = !1)));
  }
  _handleAccordionItem(e) {
    this._autocloseAccordionItem(e);
  }
  _shutdownAllAccordionItems() {
    this.disabled ? this.accordionItems.forEach((e) => e.disabled = !0) : this.accordionItems.forEach((e) => e.disabled = !1);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this._shutdownAllAccordionItems();
  }
  render() {
    return y`
            <div ?disabled=${this.disabled} class="awc-accordion">
                <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
            </div>
        `;
  }
};
Ht.styles = Ei;
He([
  l({ type: Boolean, reflect: !0 })
], Ht.prototype, "disabled", 2);
He([
  l({ type: Boolean, reflect: !0 })
], Ht.prototype, "autoclose", 2);
Ht = He([
  H(Ti)
], Ht);
const zi = j`
    :host {
        display: var(--awc-tooltip-display, contents);
        box-sizing: border-box;
    }

    .awc-tooltip {
        left: -9999px;
        isolation: isolate;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        z-index: 99999;
        max-width: 240px;
        width: max-content;
        background-color: var(--colors-light-tooltip);
        border-radius: var(--corner-radius-s);
        transform: scale(0.9);
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        will-change: transform, opacity;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
    }

    :host([match-width]) .awc-tooltip {
        width: unset;
        max-width: none;
    }

    :host([strategy='fixed']) .awc-tooltip {
        position: fixed;
    }

    .awc-tooltip.visible {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }

    .awc-tooltip__message {
        cursor: default;
        font: var(--awc-font-caption-2-regular);
        color: var(--colors-light-white);
        padding: var(--awc-tooltip-message-padding, 6px 10px);
        white-space: pre-wrap;
        overflow-wrap: break-word;
        text-align: center;
        margin: 0;
    }

    :host([match-width]) .awc-tooltip__message {
        text-align: start;
    }

    .awc-tooltip__arrow {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--colors-light-tooltip);
        transform: rotate(45deg);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.2s ease-out;
        backface-visibility: hidden;
    }

    .awc-tooltip.visible .awc-tooltip__arrow {
        opacity: 1;
    }

    :host([disabled]) .awc-tooltip {
        display: none;
    }

    :host([position='top']) .awc-tooltip {
        transform-origin: center bottom;
    }

    :host([position='bottom']) .awc-tooltip {
        transform-origin: center top;
    }

    :host([position='left']) .awc-tooltip {
        transform-origin: right center;
    }

    :host([position='right']) .awc-tooltip {
        transform-origin: left center;
    }
`, Ct = Math.min, Q = Math.max, pe = Math.round, le = Math.floor, dt = (e) => ({
  x: e,
  y: e
}), Pi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Li = {
  start: "end",
  end: "start"
};
function Te(e, t, o) {
  return Q(e, Ct(t, o));
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e) {
  return e.split("-")[0];
}
function qt(e) {
  return e.split("-")[1];
}
function $o(e) {
  return e === "x" ? "y" : "x";
}
function Ue(e) {
  return e === "y" ? "height" : "width";
}
function yt(e) {
  return ["top", "bottom"].includes(kt(e)) ? "y" : "x";
}
function je(e) {
  return $o(yt(e));
}
function Mi(e, t, o) {
  o === void 0 && (o = !1);
  const i = qt(e), r = je(e), s = Ue(r);
  let a = r === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = fe(a)), [a, fe(a)];
}
function Ri(e) {
  const t = fe(e);
  return [ze(e), t, ze(t)];
}
function ze(e) {
  return e.replace(/start|end/g, (t) => Li[t]);
}
function Bi(e, t, o) {
  const i = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? r : i : t ? i : r;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function Vi(e, t, o, i) {
  const r = qt(e);
  let s = Bi(kt(e), o === "start", i);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(ze)))), s;
}
function fe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Pi[t]);
}
function Di(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ao(e) {
  return typeof e != "number" ? Di(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ge(e) {
  const {
    x: t,
    y: o,
    width: i,
    height: r
  } = e;
  return {
    width: i,
    height: r,
    top: o,
    left: t,
    right: t + i,
    bottom: o + r,
    x: t,
    y: o
  };
}
function lo(e, t, o) {
  let {
    reference: i,
    floating: r
  } = e;
  const s = yt(t), a = je(t), n = Ue(a), c = kt(t), h = s === "y", u = i.x + i.width / 2 - r.width / 2, d = i.y + i.height / 2 - r.height / 2, f = i[n] / 2 - r[n] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: i.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      p = {
        x: i.x + i.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: i.x - r.width,
        y: d
      };
      break;
    default:
      p = {
        x: i.x,
        y: i.y
      };
  }
  switch (qt(t)) {
    case "start":
      p[a] -= f * (o && h ? -1 : 1);
      break;
    case "end":
      p[a] += f * (o && h ? -1 : 1);
      break;
  }
  return p;
}
const Fi = async (e, t, o) => {
  const {
    placement: i = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = o, n = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let h = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: d
  } = lo(h, i, c), f = i, p = {}, v = 0;
  for (let w = 0; w < n.length; w++) {
    const {
      name: m,
      fn: b
    } = n[w], {
      x: _,
      y: k,
      data: T,
      reset: g
    } = await b({
      x: u,
      y: d,
      initialPlacement: i,
      placement: f,
      strategy: r,
      middlewareData: p,
      rects: h,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = _ ?? u, d = k ?? d, p = {
      ...p,
      [m]: {
        ...p[m],
        ...T
      }
    }, g && v <= 50 && (v++, typeof g == "object" && (g.placement && (f = g.placement), g.rects && (h = g.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : g.rects), {
      x: u,
      y: d
    } = lo(h, f, c)), w = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: r,
    middlewareData: p
  };
};
async function Ne(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: i,
    y: r,
    platform: s,
    rects: a,
    elements: n,
    strategy: c
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Nt(t, e), v = Ao(p), m = n[f ? d === "floating" ? "reference" : "floating" : d], b = ge(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(m))) == null || o ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(n.floating)),
    boundary: h,
    rootBoundary: u,
    strategy: c
  })), _ = d === "floating" ? {
    x: i,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n.floating)), T = await (s.isElement == null ? void 0 : s.isElement(k)) ? await (s.getScale == null ? void 0 : s.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = ge(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: n,
    rect: _,
    offsetParent: k,
    strategy: c
  }) : _);
  return {
    top: (b.top - g.top + v.top) / T.y,
    bottom: (g.bottom - b.bottom + v.bottom) / T.y,
    left: (b.left - g.left + v.left) / T.x,
    right: (g.right - b.right + v.right) / T.x
  };
}
const Ii = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: i,
      placement: r,
      rects: s,
      platform: a,
      elements: n,
      middlewareData: c
    } = t, {
      element: h,
      padding: u = 0
    } = Nt(e, t) || {};
    if (h == null)
      return {};
    const d = Ao(u), f = {
      x: o,
      y: i
    }, p = je(r), v = Ue(p), w = await a.getDimensions(h), m = p === "y", b = m ? "top" : "left", _ = m ? "bottom" : "right", k = m ? "clientHeight" : "clientWidth", T = s.reference[v] + s.reference[p] - f[p] - s.floating[v], g = f[p] - s.reference[p], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(h));
    let C = x ? x[k] : 0;
    (!C || !await (a.isElement == null ? void 0 : a.isElement(x))) && (C = n.floating[k] || s.floating[v]);
    const A = T / 2 - g / 2, L = C / 2 - w[v] / 2 - 1, V = Ct(d[b], L), Z = Ct(d[_], L), N = V, rt = C - w[v] - Z, z = C / 2 - w[v] / 2 + A, q = Te(N, z, rt), G = !c.arrow && qt(r) != null && z !== q && s.reference[v] / 2 - (z < N ? V : Z) - w[v] / 2 < 0, lt = G ? z < N ? z - N : z - rt : 0;
    return {
      [p]: f[p] + lt,
      data: {
        [p]: q,
        centerOffset: z - q - lt,
        ...G && {
          alignmentOffset: lt
        }
      },
      reset: G
    };
  }
}), Hi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: n,
        platform: c,
        elements: h
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: w = !0,
        ...m
      } = Nt(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const b = kt(r), _ = yt(n), k = kt(n) === n, T = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), g = f || (k || !w ? [fe(n)] : Ri(n)), x = v !== "none";
      !f && x && g.push(...Vi(n, w, v, T));
      const C = [n, ...g], A = await Ne(t, m), L = [];
      let V = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (u && L.push(A[b]), d) {
        const q = Mi(r, a, T);
        L.push(A[q[0]], A[q[1]]);
      }
      if (V = [...V, {
        placement: r,
        overflows: L
      }], !L.every((q) => q <= 0)) {
        var Z, N;
        const q = (((Z = s.flip) == null ? void 0 : Z.index) || 0) + 1, G = C[q];
        if (G) {
          var rt;
          const ot = d === "alignment" ? _ !== yt(G) : !1, ht = ((rt = V[0]) == null ? void 0 : rt.overflows[0]) > 0;
          if (!ot || ht)
            return {
              data: {
                index: q,
                overflows: V
              },
              reset: {
                placement: G
              }
            };
        }
        let lt = (N = V.filter((ot) => ot.overflows[0] <= 0).sort((ot, ht) => ot.overflows[1] - ht.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!lt)
          switch (p) {
            case "bestFit": {
              var z;
              const ot = (z = V.filter((ht) => {
                if (x) {
                  const wt = yt(ht.placement);
                  return wt === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  wt === "y";
                }
                return !0;
              }).map((ht) => [ht.placement, ht.overflows.filter((wt) => wt > 0).reduce((wt, No) => wt + No, 0)]).sort((ht, wt) => ht[1] - wt[1])[0]) == null ? void 0 : z[0];
              ot && (lt = ot);
              break;
            }
            case "initialPlacement":
              lt = n;
              break;
          }
        if (r !== lt)
          return {
            reset: {
              placement: lt
            }
          };
      }
      return {};
    }
  };
};
async function Ui(e, t) {
  const {
    placement: o,
    platform: i,
    elements: r
  } = e, s = await (i.isRTL == null ? void 0 : i.isRTL(r.floating)), a = kt(o), n = qt(o), c = yt(o) === "y", h = ["left", "top"].includes(a) ? -1 : 1, u = s && c ? -1 : 1, d = Nt(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return n && typeof v == "number" && (p = n === "end" ? v * -1 : v), c ? {
    x: p * u,
    y: f * h
  } : {
    x: f * h,
    y: p * u
  };
}
const ji = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, i;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: n
      } = t, c = await Ui(t, e);
      return a === ((o = n.offset) == null ? void 0 : o.placement) && (i = n.arrow) != null && i.alignmentOffset ? {} : {
        x: r + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, Ni = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: i,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: n = {
          fn: (m) => {
            let {
              x: b,
              y: _
            } = m;
            return {
              x: b,
              y: _
            };
          }
        },
        ...c
      } = Nt(e, t), h = {
        x: o,
        y: i
      }, u = await Ne(t, c), d = yt(kt(r)), f = $o(d);
      let p = h[f], v = h[d];
      if (s) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", _ = p + u[m], k = p - u[b];
        p = Te(_, p, k);
      }
      if (a) {
        const m = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", _ = v + u[m], k = v - u[b];
        v = Te(_, v, k);
      }
      const w = n.fn({
        ...t,
        [f]: p,
        [d]: v
      });
      return {
        ...w,
        data: {
          x: w.x - o,
          y: w.y - i,
          enabled: {
            [f]: s,
            [d]: a
          }
        }
      };
    }
  };
}, qi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: r,
        rects: s,
        platform: a,
        elements: n
      } = t, {
        apply: c = () => {
        },
        ...h
      } = Nt(e, t), u = await Ne(t, h), d = kt(r), f = qt(r), p = yt(r) === "y", {
        width: v,
        height: w
      } = s.floating;
      let m, b;
      d === "top" || d === "bottom" ? (m = d, b = f === (await (a.isRTL == null ? void 0 : a.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (b = d, m = f === "end" ? "top" : "bottom");
      const _ = w - u.top - u.bottom, k = v - u.left - u.right, T = Ct(w - u[m], _), g = Ct(v - u[b], k), x = !t.middlewareData.shift;
      let C = T, A = g;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (A = k), (i = t.middlewareData.shift) != null && i.enabled.y && (C = _), x && !f) {
        const V = Q(u.left, 0), Z = Q(u.right, 0), N = Q(u.top, 0), rt = Q(u.bottom, 0);
        p ? A = v - 2 * (V !== 0 || Z !== 0 ? V + Z : Q(u.left, u.right)) : C = w - 2 * (N !== 0 || rt !== 0 ? N + rt : Q(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: C
      });
      const L = await a.getDimensions(n.floating);
      return v !== L.width || w !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function be() {
  return typeof window < "u";
}
function Wt(e) {
  return Eo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pt(e) {
  var t;
  return (t = (Eo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Eo(e) {
  return be() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function st(e) {
  return be() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function ut(e) {
  return be() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function ho(e) {
  return !be() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
function ae(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: i,
    display: r
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + o) && !["inline", "contents"].includes(r);
}
function Wi(e) {
  return ["table", "td", "th"].includes(Wt(e));
}
function me(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function qe(e) {
  const t = We(), o = st(e) ? at(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((i) => o[i] ? o[i] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((i) => (o.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (o.contain || "").includes(i));
}
function Zi(e) {
  let t = $t(e);
  for (; ut(t) && !Ut(t); ) {
    if (qe(t))
      return t;
    if (me(t))
      return null;
    t = $t(t);
  }
  return null;
}
function We() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ut(e) {
  return ["html", "body", "#document"].includes(Wt(e));
}
function at(e) {
  return et(e).getComputedStyle(e);
}
function ye(e) {
  return st(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $t(e) {
  if (Wt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ho(e) && e.host || // Fallback.
    pt(e)
  );
  return ho(t) ? t.host : t;
}
function So(e) {
  const t = $t(e);
  return Ut(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ut(t) && ae(t) ? t : So(t);
}
function ee(e, t, o) {
  var i;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const r = So(e), s = r === ((i = e.ownerDocument) == null ? void 0 : i.body), a = et(r);
  if (s) {
    const n = Pe(a);
    return t.concat(a, a.visualViewport || [], ae(r) ? r : [], n && o ? ee(n) : []);
  }
  return t.concat(r, ee(r, [], o));
}
function Pe(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Oo(e) {
  const t = at(e);
  let o = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const r = ut(e), s = r ? e.offsetWidth : o, a = r ? e.offsetHeight : i, n = pe(o) !== s || pe(i) !== a;
  return n && (o = s, i = a), {
    width: o,
    height: i,
    $: n
  };
}
function Ze(e) {
  return st(e) ? e : e.contextElement;
}
function Bt(e) {
  const t = Ze(e);
  if (!ut(t))
    return dt(1);
  const o = t.getBoundingClientRect(), {
    width: i,
    height: r,
    $: s
  } = Oo(t);
  let a = (s ? pe(o.width) : o.width) / i, n = (s ? pe(o.height) : o.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!n || !Number.isFinite(n)) && (n = 1), {
    x: a,
    y: n
  };
}
const Gi = /* @__PURE__ */ dt(0);
function To(e) {
  const t = et(e);
  return !We() || !t.visualViewport ? Gi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yi(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== et(e) ? !1 : t;
}
function Lt(e, t, o, i) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const r = e.getBoundingClientRect(), s = Ze(e);
  let a = dt(1);
  t && (i ? st(i) && (a = Bt(i)) : a = Bt(e));
  const n = Yi(s, o, i) ? To(s) : dt(0);
  let c = (r.left + n.x) / a.x, h = (r.top + n.y) / a.y, u = r.width / a.x, d = r.height / a.y;
  if (s) {
    const f = et(s), p = i && st(i) ? et(i) : i;
    let v = f, w = Pe(v);
    for (; w && i && p !== v; ) {
      const m = Bt(w), b = w.getBoundingClientRect(), _ = at(w), k = b.left + (w.clientLeft + parseFloat(_.paddingLeft)) * m.x, T = b.top + (w.clientTop + parseFloat(_.paddingTop)) * m.y;
      c *= m.x, h *= m.y, u *= m.x, d *= m.y, c += k, h += T, v = et(w), w = Pe(v);
    }
  }
  return ge({
    width: u,
    height: d,
    x: c,
    y: h
  });
}
function Ge(e, t) {
  const o = ye(e).scrollLeft;
  return t ? t.left + o : Lt(pt(e)).left + o;
}
function zo(e, t, o) {
  o === void 0 && (o = !1);
  const i = e.getBoundingClientRect(), r = i.left + t.scrollLeft - (o ? 0 : (
    // RTL <body> scrollbar.
    Ge(e, i)
  )), s = i.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Ki(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: i,
    strategy: r
  } = e;
  const s = r === "fixed", a = pt(i), n = t ? me(t.floating) : !1;
  if (i === a || n && s)
    return o;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = dt(1);
  const u = dt(0), d = ut(i);
  if ((d || !d && !s) && ((Wt(i) !== "body" || ae(a)) && (c = ye(i)), ut(i))) {
    const p = Lt(i);
    h = Bt(i), u.x = p.x + i.clientLeft, u.y = p.y + i.clientTop;
  }
  const f = a && !d && !s ? zo(a, c, !0) : dt(0);
  return {
    width: o.width * h.x,
    height: o.height * h.y,
    x: o.x * h.x - c.scrollLeft * h.x + u.x + f.x,
    y: o.y * h.y - c.scrollTop * h.y + u.y + f.y
  };
}
function Xi(e) {
  return Array.from(e.getClientRects());
}
function Ji(e) {
  const t = pt(e), o = ye(e), i = e.ownerDocument.body, r = Q(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), s = Q(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let a = -o.scrollLeft + Ge(e);
  const n = -o.scrollTop;
  return at(i).direction === "rtl" && (a += Q(t.clientWidth, i.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: n
  };
}
function Qi(e, t) {
  const o = et(e), i = pt(e), r = o.visualViewport;
  let s = i.clientWidth, a = i.clientHeight, n = 0, c = 0;
  if (r) {
    s = r.width, a = r.height;
    const h = We();
    (!h || h && t === "fixed") && (n = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: n,
    y: c
  };
}
function tr(e, t) {
  const o = Lt(e, !0, t === "fixed"), i = o.top + e.clientTop, r = o.left + e.clientLeft, s = ut(e) ? Bt(e) : dt(1), a = e.clientWidth * s.x, n = e.clientHeight * s.y, c = r * s.x, h = i * s.y;
  return {
    width: a,
    height: n,
    x: c,
    y: h
  };
}
function uo(e, t, o) {
  let i;
  if (t === "viewport")
    i = Qi(e, o);
  else if (t === "document")
    i = Ji(pt(e));
  else if (st(t))
    i = tr(t, o);
  else {
    const r = To(e);
    i = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return ge(i);
}
function Po(e, t) {
  const o = $t(e);
  return o === t || !st(o) || Ut(o) ? !1 : at(o).position === "fixed" || Po(o, t);
}
function er(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let i = ee(e, [], !1).filter((n) => st(n) && Wt(n) !== "body"), r = null;
  const s = at(e).position === "fixed";
  let a = s ? $t(e) : e;
  for (; st(a) && !Ut(a); ) {
    const n = at(a), c = qe(a);
    !c && n.position === "fixed" && (r = null), (s ? !c && !r : !c && n.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || ae(a) && !c && Po(e, a)) ? i = i.filter((u) => u !== a) : r = n, a = $t(a);
  }
  return t.set(e, i), i;
}
function or(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: i,
    strategy: r
  } = e;
  const a = [...o === "clippingAncestors" ? me(t) ? [] : er(t, this._c) : [].concat(o), i], n = a[0], c = a.reduce((h, u) => {
    const d = uo(t, u, r);
    return h.top = Q(d.top, h.top), h.right = Ct(d.right, h.right), h.bottom = Ct(d.bottom, h.bottom), h.left = Q(d.left, h.left), h;
  }, uo(t, n, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ir(e) {
  const {
    width: t,
    height: o
  } = Oo(e);
  return {
    width: t,
    height: o
  };
}
function rr(e, t, o) {
  const i = ut(t), r = pt(t), s = o === "fixed", a = Lt(e, !0, s, t);
  let n = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = dt(0);
  function h() {
    c.x = Ge(r);
  }
  if (i || !i && !s)
    if ((Wt(t) !== "body" || ae(r)) && (n = ye(t)), i) {
      const p = Lt(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else r && h();
  s && !i && r && h();
  const u = r && !i && !s ? zo(r, n) : dt(0), d = a.left + n.scrollLeft - c.x - u.x, f = a.top + n.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: a.width,
    height: a.height
  };
}
function Se(e) {
  return at(e).position === "static";
}
function po(e, t) {
  if (!ut(e) || at(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return pt(e) === o && (o = o.ownerDocument.body), o;
}
function Lo(e, t) {
  const o = et(e);
  if (me(e))
    return o;
  if (!ut(e)) {
    let r = $t(e);
    for (; r && !Ut(r); ) {
      if (st(r) && !Se(r))
        return r;
      r = $t(r);
    }
    return o;
  }
  let i = po(e, t);
  for (; i && Wi(i) && Se(i); )
    i = po(i, t);
  return i && Ut(i) && Se(i) && !qe(i) ? o : i || Zi(e) || o;
}
const sr = async function(e) {
  const t = this.getOffsetParent || Lo, o = this.getDimensions, i = await o(e.floating);
  return {
    reference: rr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function ar(e) {
  return at(e).direction === "rtl";
}
const nr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ki,
  getDocumentElement: pt,
  getClippingRect: or,
  getOffsetParent: Lo,
  getElementRects: sr,
  getClientRects: Xi,
  getDimensions: ir,
  getScale: Bt,
  isElement: st,
  isRTL: ar
};
function Mo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cr(e, t) {
  let o = null, i;
  const r = pt(e);
  function s() {
    var n;
    clearTimeout(i), (n = o) == null || n.disconnect(), o = null;
  }
  function a(n, c) {
    n === void 0 && (n = !1), c === void 0 && (c = 1), s();
    const h = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: p
    } = h;
    if (n || t(), !f || !p)
      return;
    const v = le(d), w = le(r.clientWidth - (u + f)), m = le(r.clientHeight - (d + p)), b = le(u), k = {
      rootMargin: -v + "px " + -w + "px " + -m + "px " + -b + "px",
      threshold: Q(0, Ct(1, c)) || 1
    };
    let T = !0;
    function g(x) {
      const C = x[0].intersectionRatio;
      if (C !== c) {
        if (!T)
          return a();
        C ? a(!1, C) : i = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Mo(h, e.getBoundingClientRect()) && a(), T = !1;
    }
    try {
      o = new IntersectionObserver(g, {
        ...k,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(g, k);
    }
    o.observe(e);
  }
  return a(!0), s;
}
function lr(e, t, o, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: n = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = i, h = Ze(e), u = r || s ? [...h ? ee(h) : [], ...ee(t)] : [];
  u.forEach((b) => {
    r && b.addEventListener("scroll", o, {
      passive: !0
    }), s && b.addEventListener("resize", o);
  });
  const d = h && n ? cr(h, o) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === h && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var k;
      (k = p) == null || k.observe(t);
    })), o();
  }), h && !c && p.observe(h), p.observe(t));
  let v, w = c ? Lt(e) : null;
  c && m();
  function m() {
    const b = Lt(e);
    w && !Mo(w, b) && o(), w = b, v = requestAnimationFrame(m);
  }
  return o(), () => {
    var b;
    u.forEach((_) => {
      r && _.removeEventListener("scroll", o), s && _.removeEventListener("resize", o);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, c && cancelAnimationFrame(v);
  };
}
const hr = ji, dr = Ni, ur = Hi, pr = qi, fr = Ii, gr = (e, t, o) => {
  const i = /* @__PURE__ */ new Map(), r = {
    platform: nr,
    ...o
  }, s = {
    ...r.platform,
    _c: i
  };
  return Fi(e, t, {
    ...r,
    platform: s
  });
};
function Ro(e, t, o, i) {
  const { position: r, strategy: s, spacing: a, middleware: n = [], matchReferenceWidth: c, onPlacementChange: h } = i;
  return lr(e, t, () => {
    gr(e, t, {
      placement: r,
      strategy: s,
      middleware: [
        hr(a),
        ur(),
        dr({ padding: 8 }),
        ...o ? [fr({ element: o })] : [],
        ...c ? [
          pr({
            apply({ elements: f }) {
              f.floating.style.width = `${f.reference.getBoundingClientRect().width}px`;
            }
          })
        ] : [],
        ...n
      ]
    }).then(({ x: f, y: p, placement: v, middlewareData: w }) => {
      Object.assign(t.style, {
        left: `${f}px`,
        top: `${p}px`
      });
      const [m] = v.split("-");
      if (h && m !== r && h(m), o && w.arrow) {
        const { x: b, y: _ } = w.arrow, k = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[v.split("-")[0]];
        k && Object.assign(o.style, {
          left: b != null ? `${b}px` : "",
          top: _ != null ? `${_}px` : "",
          right: "",
          bottom: "",
          [k]: "-4px"
        });
      }
    });
  });
}
var vr = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, Y = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? wr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && vr(t, o, r), r;
};
const br = "awc-tooltip";
let D = class extends E {
  constructor() {
    super(...arguments), this.message = "Tooltip", this.position = "top", this.strategy = "absolute", this.spacing = 8, this.marker = !0, this.active = !1, this.disabled = !1, this.matchWidth = !1, this.cleanupFloating = null, this.showTimeout = null, this.referenceEl = null, this.wasHiddenByVisibility = !1, this.handleSlotChange = () => {
      const e = this.slotEl.assignedElements({ flatten: !0 });
      this.referenceEl = e[0] || null, this.active && this.updatePosition();
    }, this.showTooltip = (e = !1) => {
      if (!this.disabled) {
        this.showTimeout !== null && clearTimeout(this.showTimeout);
        const t = async () => {
          await this.updatePosition(), this.active = !0, this.showTimeout = null, this.wasHiddenByVisibility = !1, this._onShowEvent(!0);
        };
        e ? t() : this.showTimeout = window.setTimeout(t, 300);
      }
    }, this.hideTooltip = () => {
      var e;
      this.disabled || (this.showTimeout !== null && (clearTimeout(this.showTimeout), this.showTimeout = null), this.active = !1, (e = this.cleanupFloating) == null || e.call(this), this._onHideEvent(!0));
    }, this.handleFocusIn = async (e) => {
      this.contains(e.target) && (this.wasHiddenByVisibility || this.showTooltip(!0));
    }, this.handleFocusOut = () => {
      this.contains(document.activeElement) || this.hideTooltip();
    }, this.handleVisibilityChange = () => {
      document.visibilityState === "hidden" && this.active ? (this.wasHiddenByVisibility = !0, this.hideTooltip()) : document.visibilityState === "visible" && setTimeout(() => this.wasHiddenByVisibility = !1, 100);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("mouseenter", () => this.showTooltip()), this.addEventListener("mouseleave", () => this.hideTooltip()), this.addEventListener("focusin", this.handleFocusIn), this.addEventListener("focusout", this.handleFocusOut), this.addEventListener("slotchange", this.handleSlotChange), document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.removeEventListener("mouseenter", () => this.showTooltip()), this.removeEventListener("mouseleave", () => this.hideTooltip()), this.removeEventListener("focusin", this.handleFocusIn), this.removeEventListener("focusout", this.handleFocusOut), this.removeEventListener("slotchange", this.handleSlotChange), document.removeEventListener("visibilitychange", this.handleVisibilityChange), (e = this.cleanupFloating) == null || e.call(this), this.showTimeout !== null && clearTimeout(this.showTimeout);
  }
  updated(e) {
    super.updated(e), (e.has("active") && this.active || e.has("position") || e.has("spacing") || e.has("strategy") || e.has("matchWidth")) && this.updatePosition(), e.has("spacing") && isNaN(Number(this.spacing)) && (this.spacing = 8);
  }
  getValidSpacing() {
    const e = Number(this.spacing);
    return isNaN(e) ? 8 : e;
  }
  updatePosition() {
    var e;
    if (!this.tooltipEl || this.disabled || !this.referenceEl)
      return Promise.resolve();
    if ((e = this.cleanupFloating) == null || e.call(this), this.matchWidth) {
      const t = this.referenceEl.getBoundingClientRect().width;
      this.tooltipEl.style.width = `${t}px`;
    } else
      this.tooltipEl.style.width = "";
    return new Promise((t) => {
      this.cleanupFloating = Ro(this.referenceEl, this.tooltipEl, this.marker ? this.arrowEl : null, {
        position: this.position,
        strategy: this.strategy,
        spacing: this.getValidSpacing()
      }), requestAnimationFrame(() => t());
    });
  }
  /**
   * @method show
   * @description Программно показывает тултип.
   * @fires awc-tooltip-show
   */
  show() {
    this.showTooltip(!0);
  }
  /**
   * @method hide
   * @description Программно скрывает тултип.
   * @fires awc-tooltip-hide
   */
  hide() {
    this.hideTooltip();
  }
  render() {
    return y`
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div class="awc-tooltip ${this.active ? "visible" : ""}" role="tooltip">
        <p class="awc-tooltip__message">${this.message}</p>
        ${this.marker ? y`<div class="awc-tooltip__arrow" data-popper-arrow></div>` : ""}
      </div>
    `;
  }
};
D.shadowRootOptions = { ...E.shadowRootOptions, delegatesFocus: !0 };
D.styles = zi;
Y([
  l({ type: String, reflect: !0 })
], D.prototype, "message", 2);
Y([
  l({ type: String, reflect: !0 })
], D.prototype, "position", 2);
Y([
  l({ type: String, reflect: !0 })
], D.prototype, "strategy", 2);
Y([
  l({ type: Number, reflect: !0 })
], D.prototype, "spacing", 2);
Y([
  l({ type: Boolean, reflect: !0 })
], D.prototype, "marker", 2);
Y([
  l({ type: Boolean, reflect: !0 })
], D.prototype, "active", 2);
Y([
  l({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", 2);
Y([
  l({ type: Boolean, reflect: !0, attribute: "match-width" })
], D.prototype, "matchWidth", 2);
Y([
  ct("awc-tooltip-show")
], D.prototype, "_onShowEvent", 2);
Y([
  ct("awc-tooltip-hide")
], D.prototype, "_onHideEvent", 2);
Y([
  it(".awc-tooltip")
], D.prototype, "tooltipEl", 2);
Y([
  it(".awc-tooltip__arrow")
], D.prototype, "arrowEl", 2);
Y([
  it("slot")
], D.prototype, "slotEl", 2);
D = Y([
  H(br)
], D);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, xe = (e) => (...t) => ({ _$litDirective$: e, values: t });
let _e = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, o, i) {
    this._$Ct = t, this._$AM = o, this._$Ci = i;
  }
  _$AS(t, o) {
    return this.update(t, o);
  }
  update(t, o) {
    return this.render(...o);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Le = xe(class extends _e {
  constructor(e) {
    var t;
    if (super(e), e.type !== ft.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var i, r;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((s) => s !== "")));
      for (const s in t) t[s] && !((i = this.nt) != null && i.has(s)) && this.st.add(s);
      return this.render(t);
    }
    const o = e.element.classList;
    for (const s of this.st) s in t || (o.remove(s), this.st.delete(s));
    for (const s in t) {
      const a = !!t[s];
      a === this.st.has(s) || (r = this.nt) != null && r.has(s) || (a ? (o.add(s), this.st.add(s)) : (o.remove(s), this.st.delete(s)));
    }
    return tt;
  }
}), mr = j`
    :host {
        box-sizing: border-box;
        display: var(--awc-popover-display, contents);
    }
    
    .awc-popover {
        box-sizing: border-box;
        position: absolute;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        z-index: 99999;
        box-shadow: var(--awc-popover-box-shadow, 0px 2px 15px 0px rgba(64, 72, 98, 0.2));
        transform: scale(0.9);
        transition: opacity 0.3s ease, transform 0.3s ease;
        will-change: opacity, transform;
        min-width: var(--awc-popover-min-width);
        max-width: var(--awc-popover-max-width);
        min-height: var(--awc-popover-min-height, 10px);
        max-height: var(--awc-popover-max-height, 300px);
        padding: var(--awc-popover-padding, 12px);
        background-color: var(--colors-light-white);
        border-radius: var(--awc-popover-border-radius, var(--corner-radius-s));
        overflow: var(--awc-popover-overflow, visible);
    }

    :host([strategy="fixed"]) .awc-popover {
        position: fixed;
    }

    :host([no-padding]) .awc-popover {
        padding: 0;
    }

    .awc-popover.visible {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        pointer-events: auto;
    }

    :host([position='top']) .awc-popover {
        transform-origin: center bottom;
    }

    :host([position='bottom']) .awc-popover {
        transform-origin: center top;
    }

    :host([position='left']) .awc-popover {
        transform-origin: right center;
    }

    :host([position='right']) .awc-popover {
        transform-origin: left center;
    }

    :host([disabled]) .awc-popover {
        display: none;
    }
`;
var yr = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, K = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? xr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && yr(t, o, r), r;
};
const _r = "awc-popover";
let F = class extends E {
  constructor() {
    super(...arguments), this.position = "top", this.strategy = "absolute", this.triggerType = "click", this.spacing = 8, this.active = !1, this.disabled = !1, this.noPadding = !1, this.matchReferenceWidth = !1, this.cleanupFloating = null, this._hoverTimeout = null, this.referenceEl = null, this._handleOutsideClick = (e) => {
      e.composedPath().includes(this) || this.hide();
    }, this._onMouseEnter = () => {
      !this.disabled && this.triggerType === "hover" && (this._hoverTimeout && clearTimeout(this._hoverTimeout), this.show());
    }, this._onMouseLeave = () => {
      !this.disabled && this.triggerType === "hover" && (this._hoverTimeout = window.setTimeout(() => this.hide(), 200));
    }, this._onFocus = () => {
      !this.disabled && this.triggerType === "focus" && this.show();
    }, this._onBlur = () => {
      !this.disabled && this.triggerType === "focus" && !this.contains(document.activeElement) && this.hide();
    }, this._onClick = () => {
      !this.disabled && this.triggerType === "click" && (this.active ? this.hide() : this.show());
    }, this._handlePopoverToggle = (e) => {
      e.detail !== this && this.active && this.hide();
    }, this.handleSlotChange = () => {
      if (!this.slotEl) return;
      const e = this.slotEl.assignedElements({ flatten: !0 });
      this.referenceEl = e[0] || null, this.active && this.updatePosition();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("mouseenter", this._onMouseEnter), this.addEventListener("mouseleave", this._onMouseLeave), this.addEventListener("focusin", this._onFocus), this.addEventListener("focusout", this._onBlur), this.addEventListener("click", this._onClick), this.addEventListener("slotchange", this.handleSlotChange), document.addEventListener("awc-popover-toggle", this._handlePopoverToggle);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.removeEventListener("mouseenter", this._onMouseEnter), this.removeEventListener("mouseleave", this._onMouseLeave), this.removeEventListener("focusin", this._onFocus), this.removeEventListener("focusout", this._onBlur), this.removeEventListener("click", this._onClick), this.removeEventListener("slotchange", this.handleSlotChange), document.removeEventListener("awc-popover-toggle", this._handlePopoverToggle), this._removeOutsideClickHandler(), (e = this.cleanupFloating) == null || e.call(this), this._hoverTimeout && clearTimeout(this._hoverTimeout);
  }
  _addOutsideClickHandler() {
    document.addEventListener("click", this._handleOutsideClick);
  }
  _removeOutsideClickHandler() {
    document.removeEventListener("click", this._handleOutsideClick);
  }
  getValidSpacing() {
    const e = Number(this.spacing);
    return isNaN(e) ? 8 : e;
  }
  updatePosition() {
    var t;
    if (!this.popoverEl || !this.referenceEl || this.disabled)
      return Promise.resolve();
    (t = this.cleanupFloating) == null || t.call(this);
    const e = {
      position: this.position,
      strategy: this.strategy,
      spacing: this.getValidSpacing(),
      matchReferenceWidth: this.matchReferenceWidth,
      onPlacementChange: (o) => {
        this.position = o;
      }
    };
    return new Promise((o) => {
      this.cleanupFloating = Ro(this.referenceEl, this.popoverEl, null, e), requestAnimationFrame(() => o());
    });
  }
  updated(e) {
    var t;
    super.updated(e), e.has("active") && (this.active ? (this.updatePosition(), this._popoverOpenEvent(!0), this._popoverToggleEvent(this)) : ((t = this.cleanupFloating) == null || t.call(this), this._popoverCloseEvent(!0))), (e.has("position") || e.has("spacing") || e.has("strategy")) && this.active && this.updatePosition();
  }
  /**
   * @method show
   * @description Программно открывает всплывающее окно.
   * @fires awc-popover-open
   */
  show() {
    !this.disabled && !this.active && (this.active = !0, this.triggerType === "click" && this._addOutsideClickHandler());
  }
  /**
   * @method hide
   * @description Программно закрывает всплывающее окно.
   * @fires awc-popover-close
   */
  hide() {
    !this.disabled && this.active && (this.active = !1, this.triggerType === "click" && this._removeOutsideClickHandler());
  }
  render() {
    const e = {
      "awc-popover": !0,
      visible: this.active,
      "awc-popover--no-padding": this.noPadding
    };
    return y`
            <slot @slotchange=${this.handleSlotChange}></slot>
            <div class=${Le(e)}>
                <slot name="awc-popover-content"></slot>
            </div>
        `;
  }
};
F.shadowRootOptions = { ...E.shadowRootOptions, delegatesFocus: !0 };
F.styles = [mr];
K([
  l({ type: String, reflect: !0 })
], F.prototype, "position", 2);
K([
  l({ type: String, reflect: !0 })
], F.prototype, "strategy", 2);
K([
  l({ type: String, reflect: !0, attribute: "trigger-type" })
], F.prototype, "triggerType", 2);
K([
  l({ type: Number, reflect: !0 })
], F.prototype, "spacing", 2);
K([
  l({ type: Boolean, reflect: !0 })
], F.prototype, "active", 2);
K([
  l({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", 2);
K([
  l({ type: Boolean, reflect: !0, attribute: "no-padding" })
], F.prototype, "noPadding", 2);
K([
  l({ type: Boolean, reflect: !0, attribute: "match-reference-width" })
], F.prototype, "matchReferenceWidth", 2);
K([
  ct("awc-popover-open")
], F.prototype, "_popoverOpenEvent", 2);
K([
  ct("awc-popover-close")
], F.prototype, "_popoverCloseEvent", 2);
K([
  ct("awc-popover-toggle")
], F.prototype, "_popoverToggleEvent", 2);
K([
  it(".awc-popover")
], F.prototype, "popoverEl", 2);
K([
  it("slot")
], F.prototype, "slotEl", 2);
F = K([
  H(_r)
], F);
const Cr = j`
    :host{
        display: inline-block;
    }

    .awc-chips{
        display: flex;
        align-items: center;
        padding: 4px 12px;
        gap: 6px;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
        background-color: var(--colors-light-stroke-hover);
        border-radius: var(--corner-radius-2xl);
        transition: background-color .3s ease-in-out;
    }

    .awc-chips.awc-chips__avatar{
        padding: 4px 12px 4px 3px;
    }

    :host([reset-button]){
        cursor: pointer;
    }

    :host([reset-button]:hover) .awc-chips{
       background-color: var(--colors-light-stroke);
    }

    :host([reset-button]) .awc-chips__reset{
      fill: var(--colors-light-secondary);
      transition: fill .3s ease-in-out;
    }

    :host([reset-button]:hover) .awc-chips__reset{
      fill: var(--colors-light-primary);
    }
`;
var kr = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, ne = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? $r(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && kr(t, o, r), r;
};
let At = class extends E {
  constructor() {
    super(...arguments), this.resetButton = !1;
  }
  _checkedAwcAvatar() {
    this.slotElement.assignedNodes().filter((t) => t.nodeName.toLowerCase() === "awc-avatar").length === 1 ? this.chips.classList.add("awc-chips__avatar") : this.chips.classList.remove("awc-chips__avatar");
  }
  handleResetClick() {
    this._onRemoveChips(this.resetButton);
  }
  updated(e) {
    super.updated(e), this._checkedAwcAvatar();
  }
  render() {
    return y`
            <div class='awc-chips'>
                <slot @slotchange=${this._checkedAwcAvatar}></slot>
                ${this.resetButton ? y`
                    <svg class="awc-chips__reset" @click=${this.handleResetClick} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"/>
                    </svg>` : ""}
            </div>
        `;
  }
};
At.styles = [Cr];
ne([
  l({ type: Boolean, reflect: !0, attribute: "reset-button" })
], At.prototype, "resetButton", 2);
ne([
  ct("awc-chips-reset")
], At.prototype, "_onRemoveChips", 2);
ne([
  it(".awc-chips")
], At.prototype, "chips", 2);
ne([
  it("slot")
], At.prototype, "slotElement", 2);
At = ne([
  H("awc-chips")
], At);
const Ar = j`
  :host {
    box-sizing: border-box;
    display: var(--awc-avatar-display, block);
    max-width: var(--awc-avatar-size);
    max-height: var(--awc-avatar-size);
  }

  a {
    text-decoration: none;
  }

  .awc-avatar {
    box-sizing: border-box;
    position: relative;
    width: var(--awc-avatar-size, 36px);
    height: var(--awc-avatar-size, 36px);
    border-radius: var(--awc-avatar-border-radius, var(--corner-radius-circular));
    border: var(--awc-avatar-border, none);
    transition: all .3s ease;
  }

  .awc-avatar--sliced {
    --awc-avatar-margin: 10px;
    margin-left: calc(-1 * var(--awc-avatar-margin));
  }

  .awc-avatar--hovered:hover {
    --awc-avatar-transform: 8px;
    transform: translate(calc(-1 * var(--awc-avatar-transform)));
  }

  :host([rounded='circle']) {
    --awc-avatar-border-radius: var(--corner-radius-circular);
  }

  :host([rounded='square']) {
    --awc-avatar-border-radius: var(--corner-radius-l);
  }

  :host([size='20']) {
    --awc-avatar-size: 20px;
    --awc-avatar-font: var(--awc-font-text-medium-14);
  }

  :host([size='24']) {
    --awc-avatar-size: 24px;
    --awc-avatar-font: var(--awc-font-text-medium-14);
  }

  :host([size='32']) {
    --awc-avatar-size: 32px;
    --awc-avatar-font: var(--awc-font-h5-medium);
  }

  :host([size='36']) {
    --awc-avatar-size: 36px;
    --awc-avatar-font: var(--awc-font-h5-medium);
  }

  :host([size='40']) {
    --awc-avatar-size: 40px;
    --awc-avatar-font: var(--awc-font-h4-medium);
  }

  :host([size='48']) {
    --awc-avatar-size: 48px;
    --awc-avatar-font: var(--awc-font-h3-medium);
  }

  :host([size='128']) {
    --awc-avatar-size: 128px;
    --awc-avatar-font: var(--awc-font-h2-medium);
  }

  :host([size='160']) {
    --awc-avatar-size: 160px;
    --awc-avatar-font: var(--awc-font-h1-medium);
  }

  :host([invisible]) {
    display: none !important;
  }

  .awc-avatar__status {
    --badge-translate: 10%;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(var(--badge-translate), var(--badge-translate));
  }

  :host([size="20"][status="online"]) .awc-avatar__status, :host([size="20"][status="offline"]) .awc-avatar__status,
  :host([size="24"][status="online"]) .awc-avatar__status, :host([size="24"][status="offline"]) .awc-avatar__status
  {  --badge-translate: 0; bottom: 1px; right: 1px;}

  :host([size="32"][status="online"]) .awc-avatar__status,  :host([size="32"][status="offline"]) .awc-avatar__status
  { --badge-translate: 0;  bottom: 2px;  right: 2px;}

  :host([size="36"][status="online"]) .awc-avatar__status, :host([size="36"][status="offline"]) .awc-avatar__status,
  :host([size="40"][status="online"]) .awc-avatar__status, :host([size="40"][status="offline"]) .awc-avatar__status,
  :host([size="48"][status="online"]) .awc-avatar__status, :host([size="48"][status="offline"]) .awc-avatar__status
  {  --badge-translate: 0; bottom: 3px;  right: 3px;}

  :host([size="128"]) .awc-avatar__status, :host([size="128"]) .awc-avatar__status,
  :host([size="160"]) .awc-avatar__status, :host([size="160"]) .awc-avatar__status
  { --badge-translate: -10%;  bottom:0;  right: 0;}

  .awc-avatar--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--awc-avatar-border-radius, var(--corner-radius-circular));
  }

  .awc-avatar--no-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--colors-light-white);
    font: var(--awc-avatar-font);
    cursor: not-allowed;
    pointer-events: none;
    background-color: var(--awc-avatar-bg-color, var(--awc-avatar-custom-color));
    border-radius: var(--awc-avatar-border-radius, var(--corner-radius-circular));
  }

  .awc-avatar--no-image svg {
    max-width: var(--awc-avatar-icon-size, 85%);
    max-height: var(--awc-avatar-icon-size, 85%);
    fill: var(--awc-avatar-icon-fill, var(--colors-light-white));
  }

  .awc-avatar--no-image.group,
  .awc-avatar--no-image.user {
    --awc-avatar-bg-color: #f2f3fa;
    --awc-avatar-icon-fill: #91a2b6;
    --awc-avatar-icon-size: 67%;
  }

  .awc-avatar--no-image.deleted,
  .awc-avatar--no-image.anonymous {
    --awc-avatar-bg-color: #919bb6;
    --awc-avatar-icon-size: 50%;
  }

  .awc-avatar--no-image.anonymous {
    --awc-avatar-bg-color: var(--colors-light-titles);
  }

  .awc-avatar--no-image.robot {
    --awc-avatar-bg-color: #8dadd0;
  }

  .awc-avatar--no-image.undefined {
    --awc-avatar-bg-color: #919bb6a3;
    --awc-avatar-icon-size: 50%;
  }
`, fo = {
  anonymous: W`
        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71336 5.65322L2.57606 1.31676C2.85923 -0.10662 4.72235 -0.476455 5.52771 0.730849C5.79228 1.12745 6.37513 1.12745 6.63969 0.730849C7.44506 -0.476454 9.30818 -0.106622 9.59135 1.31676L10.4624 5.69495C10.6961 5.75171 10.9288 5.81295 11.1603 5.87864L11.6511 6.01788C11.9062 6.09023 12.0543 6.35563 11.9819 6.61066C11.9095 6.86569 11.6442 7.01378 11.3891 6.94143L10.8983 6.80219C9.73953 6.47345 8.5506 6.2622 7.34949 6.17164C6.45119 6.10391 5.54906 6.10391 4.65075 6.17164C3.44965 6.2622 2.26071 6.47345 1.10193 6.80219L0.611127 6.94143C0.356094 7.01378 0.0906973 6.86569 0.018346 6.61066C-0.0540052 6.35563 0.0940872 6.09023 0.34912 6.01788L0.83992 5.87864C1.12936 5.79653 1.42059 5.72137 1.71336 5.65322ZM7.43831 1.26359C7.76887 0.768059 8.53357 0.919854 8.6498 1.50407L9.44006 5.47641C8.77288 5.35296 8.09911 5.26544 7.42167 5.21436C6.47532 5.143 5.52493 5.143 4.57858 5.21436C3.95977 5.26102 3.34402 5.33808 2.73356 5.44516L3.51761 1.50407C3.63384 0.919854 4.39854 0.76806 4.7291 1.26359C5.37369 2.22987 6.79372 2.22987 7.43831 1.26359Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.960123 9.83963C0.960123 8.6467 1.92719 7.67963 3.12012 7.67963C4.14809 7.67963 5.00833 8.39772 5.2266 9.35963H6.77365C6.99192 8.39772 7.85216 7.67963 8.88012 7.67963C10.0731 7.67963 11.0401 8.6467 11.0401 9.83963C11.0401 11.0326 10.0731 11.9996 8.88012 11.9996C7.85216 11.9996 6.99192 11.2815 6.77365 10.3196H5.2266C5.00833 11.2815 4.14809 11.9996 3.12012 11.9996C1.92719 11.9996 0.960123 11.0326 0.960123 9.83963ZM3.12012 8.63963C2.45738 8.63963 1.92012 9.17689 1.92012 9.83963C1.92012 10.5024 2.45738 11.0396 3.12012 11.0396C3.78286 11.0396 4.32012 10.5024 4.32012 9.83963C4.32012 9.17689 3.78286 8.63963 3.12012 8.63963ZM7.68012 9.83963C7.68012 9.17689 8.21738 8.63963 8.88012 8.63963C9.54286 8.63963 10.0801 9.17689 10.0801 9.83963C10.0801 10.5024 9.54286 11.0396 8.88012 11.0396C8.21738 11.0396 7.68012 10.5024 7.68012 9.83963Z" fill="white"/>
        </svg>
    `,
  deleted: W`
        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00004 0.96C6.8616 0.96 7.56004 1.65844 7.56004 2.52C7.56004 3.38156 6.8616 4.08 6.00004 4.08C5.13847 4.08 4.44004 3.38156 4.44004 2.52C4.44004 1.65844 5.13847 0.96 6.00004 0.96ZM8.52004 2.52C8.52004 1.12824 7.3918 0 6.00004 0C4.60828 0 3.48004 1.12824 3.48004 2.52C3.48004 3.91176 4.60828 5.04 6.00004 5.04C7.3918 5.04 8.52004 3.91176 8.52004 2.52ZM8.04004 6.48C8.04004 6.2149 7.82514 6 7.56004 6H4.44004C2.51809 6 0.96004 7.55805 0.96004 9.48V10.02C0.96004 11.1135 1.84652 12 2.94004 12H5.52004C5.78514 12 6.00004 11.7851 6.00004 11.52C6.00004 11.2549 5.78514 11.04 5.52004 11.04H2.94004C2.37671 11.04 1.92004 10.5833 1.92004 10.02V9.48C1.92004 8.08824 3.04828 6.96 4.44004 6.96H7.56004C7.82514 6.96 8.04004 6.7451 8.04004 6.48ZM10.899 8.85936C11.0865 8.67188 11.0864 8.36796 10.8989 8.18054C10.7114 7.99311 10.4075 7.99316 10.2201 8.18064L9.05939 9.34172L7.89934 8.18243C7.71183 7.99504 7.40791 7.99514 7.22052 8.18265C7.03313 8.37016 7.03323 8.67408 7.22074 8.86147L8.38067 10.0207L7.22104 11.1806C7.03362 11.3681 7.03367 11.672 7.22115 11.8595C7.40863 12.0469 7.71255 12.0468 7.89997 11.8594L9.05971 10.6993L10.2207 11.8595C10.4083 12.0469 10.7122 12.0468 10.8996 11.8593C11.087 11.6718 11.0869 11.3679 10.8993 11.1805L9.73843 10.0203L10.899 8.85936Z" fill="white"/>
        </svg>
    `,
  robot: W`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8Z" fill="white"/>
            <path d="M7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C7 11 7 13 7 15Z" fill="white"/>
            <path d="M17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C17 11 17 13 17 15Z" fill="white"/>
            <path d="M15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C11 7 13 7 15 7Z" fill="white"/>
            <rect x="9" y="13" width="6" height="2" rx="1" fill="white"/>
            <circle cx="10" cy="10" r="1" fill="white"/>
            <circle cx="14" cy="10" r="1" fill="white"/>
        </svg>
    `,
  user: W`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
        </svg>
    `,
  group: W`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M110.5-205v-86q0-25 11.75-45.25T155.5-369q53-31 112-47.75T390-433.5q63.5 0 122.25 16.75T624-369q21.5 12.5 33.25 32.75T669-291v86H110.5Zm629 0v-85q0-41.5-19.25-75.75T669-421.5q36.5 8 70.75 20.75t65.75 32.25Q826-357 837.75-336t11.75 46v85h-110ZM390-479q-58 0-98-40t-40-98q0-58 40-98t98-40q58 0 98 40t40 98q0 58-40 98t-98 40Zm318-138.5q0 57.5-40 97.75t-98 40.25q-6.5 0-12.25-.25T545-482q24.5-27.5 38.75-61.5t14.25-74q0-39.5-14.25-73.75T545-753q6.5-1.5 12.5-1.75T570-755q58 0 98 40t40 97.5Z"/>
        </svg>
    `,
  undefined: W`
        <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25799 2.02428C3.28688 1.85771 2.2515 2.45517 1.94312 3.33182C1.75985 3.85281 1.18893 4.12658 0.667941 3.94331C0.146952 3.76004 -0.126822 3.18912 0.0564498 2.66813C0.706862 0.819198 2.7195 -0.268818 4.59611 0.0530702C6.39616 0.361827 8.01237 2.04641 8.00978 4.00091C8.00934 5.53127 6.87472 6.5419 6.06448 7.08206C5.62885 7.37248 5.20034 7.58602 4.88467 7.72632L4.32601 7.94869C3.80207 8.12334 3.23575 7.84018 3.0611 7.31623C2.88657 6.79264 3.16924 6.22672 3.69251 6.05167C3.82132 6.00646 3.94769 5.95412 4.0724 5.89869C4.31923 5.78899 4.64072 5.62753 4.95508 5.41795C5.64468 4.95822 6.00978 4.46914 6.00978 4.00001L6.00979 3.99852C6.0111 3.11391 5.19369 2.18478 4.25799 2.02428ZM2.99978 11C2.99978 10.4477 3.4475 10 3.99978 10H4.00978C4.56207 10 5.00978 10.4477 5.00978 11C5.00978 11.5523 4.56207 12 4.00978 12H3.99978C3.4475 12 2.99978 11.5523 2.99978 11Z" fill="white"/>
        </svg>
    `,
  none: W``
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bo = "important", Er = " !" + Bo, Me = xe(class extends _e {
  constructor(e) {
    var t;
    if (super(e), e.type !== ft.ATTRIBUTE || e.name !== "style" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, o) => {
      const i = e[o];
      return i == null ? t : t + `${o = o.includes("-") ? o : o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${i};`;
    }, "");
  }
  update(e, [t]) {
    const { style: o } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const i of this.ft) t[i] == null && (this.ft.delete(i), i.includes("-") ? o.removeProperty(i) : o[i] = null);
    for (const i in t) {
      const r = t[i];
      if (r != null) {
        this.ft.add(i);
        const s = typeof r == "string" && r.endsWith(Er);
        i.includes("-") || s ? o.setProperty(i, s ? r.slice(0, -11) : r, s ? Bo : "") : o[i] = r;
      }
    }
    return tt;
  }
});
function Vo(e, t) {
  if (!e) return null;
  const o = (i) => {
    var r;
    if (i.nodeType === Node.ELEMENT_NODE) {
      const s = i;
      if ((r = s.matches) != null && r.call(s, t)) return s;
      for (const a of Array.from(s.children)) {
        const n = a.querySelector(t);
        if (n) return n;
        const c = o(a);
        if (c) return c;
      }
      if (s.shadowRoot) {
        const a = Vo(s.shadowRoot, t);
        if (a) return a;
      }
    }
    return null;
  };
  return o(e);
}
function Do(e, t, o) {
  const i = e.shadowRoot;
  if (!i) return null;
  const r = i.querySelector(`slot[name="${t}"]`);
  if (!r) return null;
  const s = r.assignedElements({ flatten: !0 });
  for (const a of s) {
    const n = a instanceof Element ? a.querySelector(o) : null;
    if (n) return n;
    const c = Vo(a, o);
    if (c) return c;
  }
  return null;
}
var Sr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, X = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Or(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Sr(t, o, r), r;
};
const Tr = "awc-avatar";
let I = class extends E {
  constructor() {
    super(...arguments), this.size = "36", this.rounded = "circle", this.status = "none", this.color = "global-blue-400", this.target = "_self", this.icon = "none", this.croppedTitle = "", this.sliced = !1, this.hovered = !1;
  }
  hasBadgeSlot() {
    const e = Do(this, "awc-avatar-badge", "awc-avatar-badge");
    return e && ("size" in e && (e.size = this.getBadgeSize()), "status" in e && (e.status = this.status)), !!e;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("DOMContentLoaded", () => {
      this.hasBadgeSlot();
    });
  }
  firstUpdated(e) {
    this.hasBadgeSlot();
  }
  updated(e) {
    super.updated(e), e.has("title") && (this.croppedTitle = this.trimTitle(this.title)), (e.has("size") || e.has("status")) && this.hasBadgeSlot();
  }
  trimTitle(e) {
    return e.length > 1 ? e.charAt(0).toUpperCase() : e;
  }
  getBadgeSize() {
    return (this.status === "online" || this.status === "offline" ? {
      20: "4",
      24: "4",
      32: "5",
      36: "5",
      40: "6",
      48: "8",
      128: "32",
      160: "32"
    } : {
      20: "8",
      24: "10",
      32: "12",
      36: "12",
      40: "12",
      48: "14",
      128: "32",
      160: "32"
    })[this.size] || "12";
  }
  renderAvatarContent() {
    if (this.imageLink)
      return y`
        <img
          class="awc-avatar--image"
          src=${this.imageLink}
          alt=${this.title}
          loading="lazy"
        />
      `;
    if (this.icon !== "none" && this.icon in fo)
      return y`
        <span class="awc-avatar--no-image ${this.icon}">
          ${fo[this.icon]}
        </span>
      `;
    const e = {
      backgroundColor: this.customColor || `var(--${this.color})`
    };
    return y`
      <span style=${Me(e)} class="awc-avatar--no-image" title="${this.title}">
        ${this.croppedTitle}
      </span>
    `;
  }
  renderStatus() {
    return this.hasBadgeSlot() || this.status === "none" ? S : y`
      <awc-avatar-badge status=${this.status} size=${this.getBadgeSize()}></awc-avatar-badge>
    `;
  }
  render() {
    const e = y`
      <div class="awc-avatar${this.sliced ? " awc-avatar--sliced" : ""} ${this.hovered ? "awc-avatar--hovered" : ""}">
        ${this.renderAvatarContent()}
        <div class="awc-avatar__status">
            ${this.renderStatus()}
            <slot name="awc-avatar-badge"></slot>
        </div>
      </div>
    `;
    return this.href ? y`<a href=${this.href} target=${this.target}>${e}</a>` : y`${e}`;
  }
};
I.styles = Ar;
X([
  l({ type: String, reflect: !0 })
], I.prototype, "size", 2);
X([
  l({ type: String, reflect: !0 })
], I.prototype, "rounded", 2);
X([
  l({ type: String, reflect: !0 })
], I.prototype, "status", 2);
X([
  l({ type: String, reflect: !0 })
], I.prototype, "color", 2);
X([
  l({ type: String, reflect: !0 })
], I.prototype, "title", 2);
X([
  l({ type: String, attribute: "image-link" })
], I.prototype, "imageLink", 2);
X([
  l({ type: String, reflect: !0 })
], I.prototype, "href", 2);
X([
  l({ type: String })
], I.prototype, "target", 2);
X([
  l({ type: String, reflect: !0, attribute: "custom-color" })
], I.prototype, "customColor", 2);
X([
  l({ type: String, reflect: !0 })
], I.prototype, "icon", 2);
X([
  vt()
], I.prototype, "croppedTitle", 2);
X([
  vt()
], I.prototype, "sliced", 2);
X([
  vt()
], I.prototype, "hovered", 2);
I = X([
  H(Tr)
], I);
const zr = j`
   :host {
        display: inline-flex;
        box-sizing: border-box;
        --badge-size: 12px;
        --badge-shadow-size: 2px;
    }

    :host([status="none"]) {
        display: none;
    }

    .awc-avatar-badge > svg {
        width: 100%;
        height: 100%;
    }

    :host([size="8"]) { --badge-size: 8px; }
    :host([size="10"]) { --badge-size: 10px; }
    :host([size="12"]) { --badge-size: 12px; }
    :host([size="14"]) { --badge-size: 14px; }
    :host([size="24"]) { --badge-size: 24px; }
    :host([size="32"]) {--badge-shadow-size: 6px; --badge-size: 32px; }
   
    :host([size="4"][status="online"]), :host([size="4"][status="offline"]) { --badge-size: 4px; }
    :host([size="5"][status="online"]), :host([size="5"][status="offline"]) { --badge-size: 5px; }
    :host([size="6"][status="online"]), :host([size="6"][status="offline"]) { --badge-size: 6px; }
    :host([size="8"][status="online"]), :host([size="8"][status="offline"]) { --badge-size: 8px; }
    :host([size="24"][status="online"]), :host([size="24"][status="offline"]) { --badge-size: 24px; }
    :host([size="32"][status="online"]), :host([size="24"][status="offline"]) {--badge-shadow-size: 6px; --badge-size: 32px; }

    .awc-avatar-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--badge-size);
        height: var(--badge-size);
        border-radius: var(--corner-radius-circular);
        box-shadow: 0 0 0 var(--badge-shadow-size) var(--colors-light-white);
    }

`, Pr = {
  none: W``,
  complete: W`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#35D3AC"/>
            <path d="M7.96983 3.96975C8.26272 3.67685 8.73748 3.67685 9.03038 3.96975C9.32322 4.26264 9.32325 4.73742 9.03038 5.03029L6.03038 8.03029C5.88973 8.17092 5.699 8.25002 5.5001 8.25002C5.30121 8.25002 5.11048 8.17092 4.96983 8.03029L2.96983 6.03029L2.91807 5.97365C2.67777 5.67908 2.69525 5.24435 2.96983 4.96975C3.24443 4.69514 3.67916 4.67768 3.97374 4.91799L4.03038 4.96975L5.5001 6.43947L7.96983 3.96975Z" fill="white"/>
        </svg>
    `,
  fail: W`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#FF7188"/>
            <path d="M8.02648 2.91808C8.32106 2.67782 8.75581 2.69525 9.03039 2.96984C9.30491 3.24443 9.3224 3.67919 9.08215 3.97374L9.03039 4.03038L7.06066 6.00011L9.03039 7.96984L9.08215 8.02648C9.32238 8.32104 9.30492 8.7558 9.03039 9.03038C8.75581 9.30496 8.32106 9.32238 8.02648 9.08214L7.96984 9.03038L6.00012 7.06066L4.03039 9.03038C3.73752 9.32325 3.26274 9.32321 2.96984 9.03038C2.67695 8.73749 2.67695 8.26273 2.96984 7.96984L4.93957 6.00011L2.96984 4.03038L2.91809 3.97374C2.67778 3.67916 2.69524 3.24444 2.96984 2.96984C3.24445 2.69528 3.67919 2.67778 3.97375 2.91808L4.03039 2.96984L6.00012 4.93956L7.96984 2.96984L8.02648 2.91808Z" fill="white"/>
        </svg>
    `,
  dnd: W`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#FD9038"/>
            <rect x="2.5" y="5" width="7" height="2" rx="1" fill="white"/>
        </svg>
    `,
  offline: W`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#BBB"/>
        </svg>
    `,
  online: W`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6"  fill="#6AC930"/>
        </svg>
    `
};
var Lr = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Ye = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Mr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Lr(t, o, r), r;
};
const Rr = "awc-avatar-badge";
let jt = class extends E {
  constructor() {
    super(...arguments), this.status = "none", this.size = "12";
  }
  render() {
    return y`
            <div class="awc-avatar-badge">
                ${Pr[this.status]}
            </div>
        `;
  }
};
jt.styles = zr;
Ye([
  l({ type: String, reflect: !0 })
], jt.prototype, "status", 2);
Ye([
  l({ type: String, reflect: !0 })
], jt.prototype, "size", 2);
jt = Ye([
  H(Rr)
], jt);
const Br = j`
    :host {
      display: inline-flex;
    }

    .awc-avatar-group {
      display: inline-flex;;
      align-items: center;
    }
   
    .awc-avatar-group__counter {
      display: block;
      position: relative;
      z-index: 1;
      margin-left: -10px;
      display: flex;
      min-width: 24px;
      height: 24px;
      font: var(--awc-font-caption-2-regular);
      align-items: center;
      justify-content: center;
      background-color: var(--colors-light-secondary);
    }

    .awc-avatar-group > ::slotted(awc-avatar),
    .awc-avatar-group > ::slotted([slot="awc-avatar-group-counter"]) {
      --awc-avatar-margin: 10px;
      --awc-avatar-border: 2px solid var(--colors-light-white);
    }

    .awc-avatar-group > ::slotted([slot="awc-avatar-group-counter"]) {
      --awc-avatar-margin: 10px;
      margin-left: calc(-1 * var(--awc-avatar-margin)) !important;
    }

    .awc-avatar-group__counter p {
      color: var(--colors-light-white);
    }

    .awc-avatar-group__counter.circle {
      border-radius: var(--corner-radius-circular);
      border: 2px solid var(--colors-light-white);
    }

    .awc-avatar-group__counter.size_24 {
      width: 24px;
      height: 24px;
    }

    .awc-avatar-group__counter.size_24 p {
      font: var(--awc-font-caption-2-regular);
    }

    .awc-avatar-group__counter.size_32 {
      width: 32px;
      height: 32px;
    }

    .awc-avatar-group__counter.size_32 p {
      font: var(--awc-font-caption-1-regular);
    }

    .awc-avatar-group__counter.hidden{
      display: none;
    }
`, Vr = j`
  :host {
    display: inline-flex;
    box-sizing: border-box;
  }

  .awc-avatar-group__counter {
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    display: flex;
    min-width: 24px;
    height: 24px;
    font: var(--awc-font-caption-2-regular);
    align-items: center;
    justify-content: center;
    background-color: var(--colors-light-secondary);
  }

  .awc-avatar-group__counter--sliced {
    --awc-avatar-margin: 10px;
    margin-left: calc(-1 * var(--awc-avatar-margin));
  }

  .awc-avatar-group__counter p {
    user-select: none;
    margin: 0;
    color: var(--colors-light-white);
  }

  :host([counter-rounded='circle']) .awc-avatar-group__counter {
    border-radius: var(--corner-radius-circular);
    border: 2px solid var(--colors-light-white);
  }

  :host([counter-size='24']) .awc-avatar-group__counter {
    width: 24px;
    height: 24px;
    font: var(--awc-font-caption-2-regular);
  }

  :host([counter-size='32']) .awc-avatar-group__counter {
    width: 32px;
    height: 32px;
    font: var(--awc-font-caption-1-regular);
  }
`;
var Dr = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, ce = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Fr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Dr(t, o, r), r;
};
const Fo = "awc-avatar-group-counter";
let Mt = class extends E {
  constructor() {
    super(...arguments), this.totalUsers = 0, this.counterSize = "24", this.counterRounded = "circle", this.sliced = !1;
  }
  render() {
    return y`
            <div class="awc-avatar-group__counter${this.sliced ? " awc-avatar-group__counter--sliced" : ""}">
                <p>+${this.totalUsers}</p>
            </div>
        `;
  }
};
Mt.styles = [Vr];
ce([
  l({ type: Number, attribute: "total-users", reflect: !0 })
], Mt.prototype, "totalUsers", 2);
ce([
  l({ type: String, attribute: "counter-size", reflect: !0 })
], Mt.prototype, "counterSize", 2);
ce([
  l({ attribute: "counter-rounded", reflect: !0 })
], Mt.prototype, "counterRounded", 2);
ce([
  vt()
], Mt.prototype, "sliced", 2);
Mt = ce([
  H(Fo)
], Mt);
var Ir = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, St = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Hr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Ir(t, o, r), r;
};
const Ur = "awc-avatar-group";
let nt = class extends E {
  constructor() {
    super(...arguments), this.displayUsers = 2, this.totalUsers = 0, this.counterSize = "24", this.counterRounded = "circle", this.counterValue = 0, this.counterHidden = !1;
  }
  get avatarCounter() {
    return this.querySelector(Fo);
  }
  updateDisplayedUsers() {
    var t, o;
    const e = (o = (t = this.shadowRoot) == null ? void 0 : t.querySelector("slot")) == null ? void 0 : o.assignedElements();
    e && e.forEach((i, r) => {
      i.toggleAttribute("invisible", r >= this.displayUsers);
    });
  }
  _applySliceEffect() {
    var i;
    const e = Do(this, "awc-avatar-group-counter", "awc-avatar-group-counter");
    e && this._applyStylesToElement(e);
    const t = (i = this.shadowRoot) == null ? void 0 : i.querySelector("slot"), o = t == null ? void 0 : t.assignedElements();
    o && o.forEach((r, s) => {
      this._applyHoverToElement(r), s !== 0 && this._applyStylesToElement(r);
    });
  }
  _applyStylesToElement(e) {
    e.sliced = !0;
  }
  _applyHoverToElement(e) {
    e instanceof I && (e.hovered = !0);
  }
  updateCounterValue() {
    this.avatarCounter ? this.counterHidden = this.counterValue === 0 : (this.counterValue = Math.max(0, this.totalUsers - this.displayUsers), this.counterHidden = this.counterValue === 0);
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("DOMContentLoaded", () => {
      this.updateDisplayedUsers(), this.updateCounterValue(), this._applySliceEffect();
    });
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.updateDisplayedUsers(), this.updateCounterValue(), this._applySliceEffect();
  }
  updated(e) {
    super.updated(e), (e.has("displayUsers") || e.has("totalUsers")) && (this.updateDisplayedUsers(), this.updateCounterValue());
  }
  render() {
    return y`
      <div class="awc-avatar-group">
        <slot></slot>
        ${this.counterHidden ? S : y`<awc-avatar-group-counter 
            .totalUsers=${this.counterValue}
            .counterSize=${this.counterSize}
            style=${Me({ display: this.counterHidden ? "none" : "block", "margin-left": "-10px" })}>
          </awc-avatar-group-counter>`}
        <slot style=${Me({ "margin-left": "-10px" })} name="awc-avatar-group-counter"></slot>
      </div>
    `;
  }
};
nt.styles = Br;
St([
  l({ type: Number, attribute: "display-users" })
], nt.prototype, "displayUsers", 2);
St([
  l({ type: Number, attribute: "total-users" })
], nt.prototype, "totalUsers", 2);
St([
  l({ type: String, attribute: "counter-size" })
], nt.prototype, "counterSize", 2);
St([
  l({ type: String, attribute: "counter-rounded" })
], nt.prototype, "counterRounded", 2);
St([
  vt()
], nt.prototype, "counterValue", 2);
St([
  vt()
], nt.prototype, "counterHidden", 2);
St([
  it('slot[name="awc-avatar-group-counter"]')
], nt.prototype, "_slottedCounter", 2);
nt = St([
  H(Ur)
], nt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt = (e) => e ?? S, jr = globalThis.SubmitEvent = typeof globalThis.SubmitEvent < "u" ? SubmitEvent : Event, Nr = (e) => {
  if (!(!e.noValidate && !e.reportValidity())) {
    const t = new jr("submit", {
      bubbles: !0,
      cancelable: !0
    });
    e.dispatchEvent(t), t.defaultPrevented || e.submit();
  }
}, qr = j`
    :host {
        display: var(--awc-button-display, inline-flex);
        max-width: 100%;

        --awc-button-border-radius: var(--corner-radius-s);

        --awc-button-padding-large: 0 20px;
        --awc-button-padding-regular: 0 16px;
        --awc-button-padding-small: 0 12px;
        --awc-button-padding-extrasmall: 0 10px;
    }

    .awc-button {
        position: relative;
        text-decoration: none;
        padding: 0;
        border: none;
        position: relative;
        width: 100%;
        gap: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: var(--awc-button-border-radius, var(--awc-button-remove-border-radius));
        cursor: pointer;
        color: var(--colors-light-white);
        transition:
            background-color 0.3s ease,
            color 0.3s,
            border-color 0.3s ease,
            transform 0.3s ease;
        font: var(--awc-font-caption-1-regular);
        background-color: var(--button-background);
    }

    .awc-button:focus {
        outline: none;
    }

    awc-spinner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
    }

    :host ::slotted(awc-spinner) {
        pointer-events: none;
        touch-action: none;
    }

    .awc-button:focus-visible {
        outline: 2px solid var(--colors-light-secondary);
    }

    /* .awc-button:focus-visible:before {
        content: "";
        position: absolute;
        border: 3px solid #839ff633;
        inset: -3px;
        border-radius: var(--corner-radius-m);
        pointer-events: none;
    } */

    :host([disabled]) {
        user-select: none;
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    :host([loading]) {
        pointer-events: none;
        touch-action: none;
        user-select: none;
    }

    .awc-button--disable {
        pointer-events: none;
        touch-action: none;
        user-select: none;
    }

    :host([loading]) .awc-button {
        color: transparent !important;
    }

    /* isBlock */
    :host([block]) .awc-button {
        width: 100%;
    }

    /* Color Primary */
    :host([background='blue']) .awc-button {
        --button-background: var(--colors-light-primary);
    }

    :host([filling]) .awc-button ::slotted(awc-icon) {
        transition: fill 0.3s ease;
        fill: var(--colors-light-white);
    }

    :host([background='blue']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-link-hover);
    }

    :host([background='red']) .awc-button {
        --button-background: var(--colors-light-warning);
    }

    :host([background='red']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-red-500);
    }

    :host([background='green']) .awc-button {
        --button-background: var(--colors-light-success);
    }

    :host([background='green']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-green-400);
    }

    :host([background='gray']) .awc-button {
        --button-background: var(--colors-light-secondary);
    }

    :host([background='gray']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-secondary-hover);
    }

    /* Color Secondary */
    :host([background='blue'][variant='secondary']) .awc-button {
        --button-background: rgba(55, 97, 233, 0.1);
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='blue'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-primary-hover);
        color: var(--colors-light-white);
    }

    :host([background='blue'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='red'][variant='secondary']) .awc-button {
        --button-background: rgba(255, 0, 0, 0.1);
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='red'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-red-500);
        color: var(--colors-light-white);
    }

    :host([background='red'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='green'][variant='secondary']) .awc-button {
        --button-background: rgba(53, 211, 172, 0.1);
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='green'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-green-400);
        color: var(--colors-light-white);
    }

    :host([background='green'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary']) .awc-button {
        --button-background: rgba(145, 155, 182, 0.1);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-secondary-hover);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    /* Color transparent */
    :host([background='blue'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid #3761e959;
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='blue'][variant='transparent']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-primary-hover);
        color: var(--colors-light-white);
    }

    :host([background='blue'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='red'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid #ff000059;
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='red'][variant='transparent']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-red-500);
        color: var(--colors-light-white);
    }

    :host([background='red'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='green'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid #35d3ac59;
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='green'][variant='transparent']:not([disabled])) .awc-button:hover {
        background-color: var(--global-green-400);
        color: var(--colors-light-white);
    }

    :host([background='green'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='gray'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid var(--colors-light-stroke-hover);
        color: var(--colors-light-text);
    }

    :host([background='gray'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-text);
    }

    :host([background='gray'][variant='transparent']:not([disabled])) .awc-button:hover {
        border-color: var(--colors-light-secondary-hover);
        --button-background: var(--colors-light-secondary-hover);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    /* Color link */
    :host([background='blue'][variant='link']) .awc-button {
        --button-background: transparent;
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='blue'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(55, 97, 233, 0.1);
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='red'][variant='link']) .awc-button {
        --button-background: var(--colors-light-white);
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='red'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(255, 0, 0, 0.1);
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='green'][variant='link']) .awc-button {
        --button-background: var(--colors-light-white);
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='green'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(53, 211, 172, 0.1);
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='gray'][variant='link']) .awc-button {
        --button-background: var(--colors-light-white);
        color: var(--colors-light-text);
    }

    :host([background='gray'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-text);
    }

    :host([background='gray'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(145, 155, 182, 0.1);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    /* Size */

    :host([size='large']) .awc-button {
        padding: var(--awc-button-padding-large);
        height: 40px;
        font: var(--awc-font-text-medium-14);
    }

    :host([size='regular']) .awc-button {
        padding: var(--awc-button-padding-regular);
        height: 36px;
        font: var(--awc-font-caption-1-medium);
    }

    :host([size='small']) .awc-button {
        padding: var(--awc-button-padding-small);
        height: 30px;
        font: var(--awc-font-caption-2-regular);
    }

    :host([size='extrasmall']) .awc-button {
        padding: var(--awc-button-padding-extrasmall);
        height: 24px;
        font: var(--awc-font-caption-3-regular);
    }
`, Wr = j`
    :host {
        display: inline-flex;
    }

    :host([size='s']) {
        --awc-spinner-size: 16px;
        --awc-spinner-border-width: 2px;
    }

    :host([size='m']) {
        --awc-spinner-size: 20px;
        --awc-spinner-border-width: 2.5px;
    }

    :host([size='l']) {
        --awc-spinner-size: 28px;
        --awc-spinner-border-width: 3px;
    }

    :host([variant='primary']) {
        --awc-spinner-thumb: rgba(55, 97, 233, 0.12);
        --awc-spinner-track: var(--colors-light-primary);
    }

    :host([variant='secondary']) {
        --awc-spinner-thumb: rgba(255, 255, 255, 0.12);
        --awc-spinner-track: var(--colors-light-white);
    }

    .awc-spinner {
        position: relative;
        width: var(--awc-spinner-size);
        height: var(--awc-spinner-size);
        border: var(--awc-spinner-border-width) solid var(--awc-spinner-thumb);
        border-bottom-color: var(--awc-spinner-track);
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: awc-spinner 0.8s linear infinite;
    }

    @keyframes awc-spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
var Zr = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, Ke = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Gr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Zr(t, o, r), r;
};
const Io = "awc-spinner";
let oe = class extends E {
  constructor() {
    super(...arguments), this.size = "m", this.variant = "primary";
  }
  render() {
    return y` <div class="awc-spinner"></div> `;
  }
};
oe.styles = Wr;
Ke([
  l({ type: String, reflect: !0 })
], oe.prototype, "size", 2);
Ke([
  l({ type: String, reflect: !0 })
], oe.prototype, "variant", 2);
oe = Ke([
  H(Io)
], oe);
var Yr = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, J = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Kr(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && Yr(t, o, r), r;
};
const Xr = "awc-button";
let U = class extends E {
  constructor() {
    super(...arguments), this.background = "blue", this.size = "regular", this.variant = "primary", this.type = "submit", this.target = "_self", this.disabled = !1, this.filling = !1, this.loading = !1, this.autofocus = !1;
  }
  get spinner() {
    return this.querySelector(Io);
  }
  focus() {
    this.button.focus();
  }
  _handleButtonClick() {
    const e = this.closest("form");
    e && (this.type === "submit" ? Nr(e) : this.type === "reset" && e.reset());
  }
  _renderSpinner() {
    const e = this.variant === "primary" ? "secondary" : "primary";
    return y`<awc-spinner size="s" variant=${e}></awc-spinner>`;
  }
  _settingCurrentSpinnerVariant() {
    this.spinner ? (this.button.classList.add("awc-button--disable"), this.variant === "primary" ? this.spinner.variant = "secondary" : this.spinner.variant = "primary") : this.button.classList.remove("awc-button--disable");
  }
  _checkingSpinnerInSlot() {
    this.spinner ? this._settingCurrentSpinnerVariant() : this.button.classList.remove("awc-button--disable");
  }
  updated(e) {
    super.updated(e), e.has("variant") && this._settingCurrentSpinnerVariant();
  }
  render() {
    const e = y`
            <slot @slotchange="${this._checkingSpinnerInSlot}"></slot>
            ${this.loading ? this._renderSpinner() : ""}
        `, t = y`
            <button
                class="awc-button"
                ?filling=${this.filling}
                ?autofocus=${this.autofocus}
                type=${this.type}
                name=${Vt(this.name)}
                value=${Vt(this.value)}
                tabindex="0"
                background=${this.background}
                ?disabled=${this.disabled}
                @focus=${this.focus}
                @click=${this._handleButtonClick}
            >
                ${e}
            </button>
        `, o = y`
            <a
                class="awc-button"
                ?filling=${this.filling}
                ?autofocus=${this.autofocus}
                tabindex="0"
                background=${this.background}
                ?disabled=${this.disabled}
                href=${this.href}
                @focus=${this.focus}
                target=${Vt(this.target)}
                @click=${this._handleButtonClick}
            >
                ${e}
            </a>
        `;
    return this.href ? o : t;
  }
};
U.styles = [qr];
J([
  l({ type: String, reflect: !0 })
], U.prototype, "name", 2);
J([
  l({ type: String, reflect: !0 })
], U.prototype, "value", 2);
J([
  l({ type: String, reflect: !0 })
], U.prototype, "background", 2);
J([
  l({ type: String, reflect: !0 })
], U.prototype, "size", 2);
J([
  l({ type: String, reflect: !0 })
], U.prototype, "variant", 2);
J([
  l({ type: String, reflect: !0 })
], U.prototype, "type", 2);
J([
  l({ type: String })
], U.prototype, "target", 2);
J([
  l({ type: String, reflect: !0 })
], U.prototype, "href", 2);
J([
  l({ type: Boolean, reflect: !0 })
], U.prototype, "disabled", 2);
J([
  l({ type: Boolean, reflect: !0 })
], U.prototype, "filling", 2);
J([
  l({ type: Boolean, reflect: !0 })
], U.prototype, "loading", 2);
J([
  l({ type: Boolean, reflect: !0 })
], U.prototype, "autofocus", 2);
J([
  it(".awc-button")
], U.prototype, "button", 2);
U = J([
  H(Xr)
], U);
var $ = function(e, t, o, i) {
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(e) : i ? i.value : t.get(e);
}, M = function(e, t, o, i, r) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? r.call(e, o) : r ? r.value = o : t.set(e, o), o;
};
function Xe(e) {
  var t, o, i, r, s, a, n, c, h, u, d, f, p, v, w, m, b, _;
  class k extends e {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    constructor(...g) {
      var x, C, A;
      super(...g), t.add(this), this.internals = this.attachInternals(), o.set(this, !1), i.set(this, !1), r.set(this, !1), s.set(this, void 0), a.set(this, void 0), n.set(this, !0), c.set(this, ""), h.set(this, () => {
        M(this, r, !0, "f"), M(this, o, !0, "f"), $(this, t, "m", w).call(this);
      }), u.set(this, () => {
        M(this, o, !1, "f"), $(this, t, "m", m).call(this, this.shouldFormValueUpdate() ? $(this, c, "f") : ""), !this.validity.valid && $(this, r, "f") && M(this, i, !0, "f");
        const L = $(this, t, "m", w).call(this);
        this.validationMessageCallback && this.validationMessageCallback(L ? this.internals.validationMessage : "");
      }), d.set(this, () => {
        var L;
        $(this, n, "f") && this.validationTarget && (this.internals.setValidity(this.validity, this.validationMessage, this.validationTarget), M(this, n, !1, "f")), M(this, r, !0, "f"), M(this, i, !0, "f"), $(this, t, "m", w).call(this), (L = this === null || this === void 0 ? void 0 : this.validationMessageCallback) === null || L === void 0 || L.call(this, this.showError ? this.internals.validationMessage : "");
      }), f.set(this, void 0), p.set(this, !1), v.set(this, Promise.resolve()), (x = this.addEventListener) === null || x === void 0 || x.call(this, "focus", $(this, h, "f")), (C = this.addEventListener) === null || C === void 0 || C.call(this, "blur", $(this, u, "f")), (A = this.addEventListener) === null || A === void 0 || A.call(this, "invalid", $(this, d, "f")), this.setValue(null);
    }
    /** Wires up control instances to be form associated */
    static get formAssociated() {
      return !0;
    }
    static get validators() {
      return this.formControlValidators || [];
    }
    /**
     * Allows the FormControl instance to respond to Validator attributes.
     * For instance, if a given Validator has a `required` attribute, that
     * validator will be evaluated whenever the host's required attribute
     * is updated.
     */
    static get observedAttributes() {
      const g = this.validators.map((A) => A.attribute).flat(), x = super.observedAttributes || [];
      return [.../* @__PURE__ */ new Set([...x, ...g])];
    }
    /**
     * Return the validator associated with a given attribute. If no
     * Validator is associated with the attribute, it will return null.
     */
    static getValidator(g) {
      return this.validators.find((x) => x.attribute === g) || null;
    }
    /**
     * Get all validators that are set to react to a given attribute
     * @param {string} attribute - The attribute that has changed
     * @returns {Validator[]}
     */
    static getValidators(g) {
      return this.validators.filter((x) => {
        var C;
        if (x.attribute === g || !((C = x.attribute) === null || C === void 0) && C.includes(g))
          return !0;
      });
    }
    /** Return a reference to the control's form */
    get form() {
      return this.internals.form;
    }
    /**
     * Will return true if it is recommended that the control shows an internal
     * error. If using this property, it is wise to listen for 'invalid' events
     * on the element host and call preventDefault on the event. Doing this will
     * prevent browsers from showing a validation popup.
     */
    get showError() {
      return $(this, t, "m", w).call(this);
    }
    /**
     * Forward the internals checkValidity method
     * will return the valid state of the control.
     */
    checkValidity() {
      return this.internals.checkValidity();
    }
    /** The element's validity state */
    get validity() {
      return this.internals.validity;
    }
    /**
     * The validation message shown by a given Validator object. If the control
     * is in a valid state this should be falsy.
     */
    get validationMessage() {
      return this.internals.validationMessage;
    }
    attributeChangedCallback(g, x, C) {
      var A;
      (A = super.attributeChangedCallback) === null || A === void 0 || A.call(this, g, x, C);
      const V = this.constructor.getValidators(g);
      V != null && V.length && this.validationTarget && this.setValue($(this, c, "f"));
    }
    /** PUBLIC LIFECYCLE METHODS */
    /**
     * Sets the control's form value if the call to `shouldFormValueUpdate`
     * returns `true`.
     * @param value {FormValue} - The value to pass to the form
     */
    setValue(g) {
      var x;
      M(this, i, !1, "f"), (x = this.validationMessageCallback) === null || x === void 0 || x.call(this, ""), M(this, c, g, "f");
      const A = this.shouldFormValueUpdate() ? g : null;
      this.internals.setFormValue(A), $(this, t, "m", m).call(this, A), this.valueChangedCallback && this.valueChangedCallback(A), $(this, t, "m", w).call(this);
    }
    /**
     * This method can be overridden to determine if the control's form value
     * should be set on a call to `setValue`. An example of when a user might want
     * to skip this step is when implementing checkbox-like behavior, first checking
     * to see if `this.checked` is set to a truthy value. By default this returns
     * `true`.
     */
    shouldFormValueUpdate() {
      return !0;
    }
    /** A promise that will resolve when all pending validations are complete */
    get validationComplete() {
      return new Promise((g) => g($(this, v, "f")));
    }
    /** Reset control state when the form is reset */
    formResetCallback() {
      var g, x;
      M(this, r, !1, "f"), M(this, i, !1, "f"), $(this, t, "m", w).call(this), (g = this.resetFormControl) === null || g === void 0 || g.call(this), (x = this.validationMessageCallback) === null || x === void 0 || x.call(this, $(this, t, "m", w).call(this) ? this.validationMessage : "");
    }
  }
  return o = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), w = function() {
    if (this.hasAttribute("disabled"))
      return !1;
    const g = $(this, i, "f") || $(this, r, "f") && !this.validity.valid && !$(this, o, "f");
    return g && this.internals.states ? this.internals.states.add("--show-error") : this.internals.states && this.internals.states.delete("--show-error"), g;
  }, m = function(g) {
    const x = this.constructor, C = {}, A = x.validators, L = [], V = A.some((z) => z.isValid instanceof Promise);
    $(this, p, "f") || (M(this, v, new Promise((z) => {
      M(this, f, z, "f");
    }), "f"), M(this, p, !0, "f")), $(this, s, "f") && ($(this, s, "f").abort(), M(this, a, $(this, s, "f"), "f"));
    const Z = new AbortController();
    M(this, s, Z, "f");
    let N, rt = !1;
    A.length && (A.forEach((z) => {
      const q = z.key || "customError", G = z.isValid(this, g, Z.signal);
      G instanceof Promise ? (L.push(G), G.then((ot) => {
        ot != null && (C[q] = !ot, N = $(this, t, "m", _).call(this, z, g), $(this, t, "m", b).call(this, C, N));
      })) : (C[q] = !G, this.validity[q] !== !G && (rt = !0), !G && !N && (N = $(this, t, "m", _).call(this, z, g)));
    }), Promise.allSettled(L).then(() => {
      var z;
      Z != null && Z.signal.aborted || (M(this, p, !1, "f"), (z = $(this, f, "f")) === null || z === void 0 || z.call(this));
    }), (rt || !V) && $(this, t, "m", b).call(this, C, N));
  }, b = function(g, x) {
    if (this.validationTarget)
      this.internals.setValidity(g, x, this.validationTarget), M(this, n, !1, "f");
    else {
      if (this.internals.setValidity(g, x), this.internals.validity.valid)
        return;
      M(this, n, !0, "f");
    }
  }, _ = function(g, x) {
    if (this.validityCallback) {
      const C = this.validityCallback(g.key || "customError");
      if (C)
        return C;
    }
    return g.message instanceof Function ? g.message(this, x) : g.message;
  }, k;
}
const Jr = {
  attribute: "required",
  key: "valueMissing",
  message: "Please fill out this field",
  isValid(e, t) {
    let o = !0;
    return (e.hasAttribute("required") || e.required) && !t && (o = !1), o;
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qr = (e) => e.strings === void 0, ts = {}, es = (e, t = ts) => e._$AH = t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Je = xe(class extends _e {
  constructor(e) {
    if (super(e), e.type !== ft.PROPERTY && e.type !== ft.ATTRIBUTE && e.type !== ft.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Qr(e)) throw Error("`live` bindings can only contain a single expression");
  }
  render(e) {
    return e;
  }
  update(e, [t]) {
    if (t === tt || t === S) return t;
    const o = e.element, i = e.name;
    if (e.type === ft.PROPERTY) {
      if (t === o[i]) return tt;
    } else if (e.type === ft.BOOLEAN_ATTRIBUTE) {
      if (!!t === o.hasAttribute(i)) return tt;
    } else if (e.type === ft.ATTRIBUTE && o.getAttribute(i) === t + "") return tt;
    return es(e), t;
  }
}), os = j`
    :host {
        display: inline-flex;

        --awc-checkbox-size: var(--awc-checkbox-size-regular);
        --awc-checkbox-mark: var(--awc-checkbox-mark-regular);

        --awc-checkbox-mark-regular: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 10L9 13L15 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        --awc-checkbox-mark-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 10L9 13L15 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

        --awc-checkbox-size-small: 16px;
        --awc-checkbox-size-regular: 20px;

        --awc-checkbox-background: var(--awc-checkbox-background-theme);
        --awc-checkbox-background-hover: var(--awc-checkbox-background-hover-theme);

        --awc-checkbox-background-checked: var(
            --awc-checkbox-custom-color,
            var(--awc-checkbox-background-checked-theme)
        );
        --awc-checkbox-background-checked-hover: var(--awc-checkbox-background-checked-hover-theme);

        --awc-checkbox-border-color: var(--awc-checkbox-custom-color, var(--awc-checkbox-border-theme));
        --awc-checkbox-border-color-hover: var(--awc-checkbox-border-hover-theme);

        --awc-checkbox-border-color-checked: var(--awc-checkbox-background);

        --awc-checkbox-label: var(--awc-checkbox-label-theme);
    }

    :host([size='small']) {
        --awc-checkbox-size: var(--awc-checkbox-size-small);
        --awc-checkbox-mark: var(--awc-checkbox-mark-small);
    }

    .awc-checkbox__wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .awc-checkbox__container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: var(--awc-checkbox-size);
        height: var(--awc-checkbox-size);
    }

    /* :host([focused]:hover) span {
    background-color: var(--colors-light-primary-hover);
    border-color: var(--colors-light-primary-hover);
  } */

    :host([checked]) .awc-checkbox {
        background-color: var(--awc-checkbox-background-checked);
        outline-color: var(--awc-checkbox-border-color-checked);
        transition: background-color 0.3s ease-out;
    }

    :host([checked]) .awc-checkbox__label:hover .awc-checkbox {
        transition: background-color 0.3s ease-out;
        background-color: var(--awc-checkbox-background-checked-hover);
        outline-color: var(--awc-checkbox-border-color-checked);
    }

    :host([checked][custom-color]) .awc-checkbox__label:hover .awc-checkbox {
        background-color: var(--awc-checkbox-background-checked);
        filter: brightness(95%);
    }

    :host([disabled]) .awc-checkbox,
    :host([disabled]) .awc-checkbox__label,
    :host([disabled]) .checkbox {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    :host([disabled]:hover) .awc-checkbox {
        background-color: var(--colors-light-white);
    }

    :host([disabled][checked]:hover) .awc-checkbox {
        background-color: var(--awc-checkbox-background-checked);
        /* border-color: var(--awc-checkbox-border-color); */
    }

    .awc-checkbox {
        box-sizing: border-box;
        cursor: pointer;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        width: var(--awc-checkbox-size);
        height: var(--awc-checkbox-size);
        max-width: var(--awc-checkbox-size);
        max-height: var(--awc-checkbox-size);

        border-radius: var(--corner-radius-s);
        border: 1px solid var(--awc-checkbox-border-color);
        background-color: var(--awc-checkbox-background);

        transition:
            background-color 0.3s ease,
            outline-color 0.3s ease-out;
    }

    .awc-checkbox__label:hover .awc-checkbox {
        transition:
            background-color 0.3s,
            outline-color 0.3s;
        background-color: var(--awc-checkbox-background-hover);
        outline-color: var(--awc-checkbox-border-color-hover);
    }

    .awc-checkbox::after {
        content: var(--awc-checkbox-mark);

        /* display: flex;
    justify-content: center;
    align-items: center; */

        max-width: inherit;
        max-height: inherit;

        transform: scale3d(0, 0, 0);
        transition: transform 0.3s ease;
    }

    :host([checked]) .awc-checkbox::after {
        transform: scale3d(1, 1, 1);
    }

    .checkbox {
        cursor: pointer;
        width: inherit;
        height: inherit;

        position: absolute;

        opacity: 1;
        margin: 0;

        -webkit-appearance: none;
        border-radius: var(--corner-radius-s);
    }

    .checkbox:focus-visible {
        outline-offset: 0px;
        outline: 1px solid var(--colors-light-focus);
    }

    /* :host .checkbox:focus-visible::before {
    content: "";
    position: absolute;
    border: 3px solid #839ff633;
    inset: -3px;
    border-radius: var(--corner-radius-m);
    pointer-events: none;
  }

  :host([checked]) .checkbox:focus-visible {
    border: 1px solid var(--colors-light-primary);
  } */

    .awc-checkbox__label {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        color: var(--awc-checkbox-label);
        font: var(--awc-base-font, var(--awc-font-text-regular-14));
    }

    :host([static-error]) .awc-checkbox__label.checkbox--error,
    .awc-checkbox__label.checkbox--error {
        color: var(--colors-light-warning);
    }

    .awc-checkbox__error {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-warning);
    }

    .checkbox.checkbox--error {
        outline: 1px solid var(--colors-light-warning);
    }

    :host([static-error][custom-error][required]) .awc-checkbox {
        outline-color: var(--colors-light-warning);
    }
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function go(e, t, o) {
  return e ? t(e) : o == null ? void 0 : o(e);
}
var is = Object.defineProperty, rs = Object.getOwnPropertyDescriptor, R = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? rs(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && is(t, o, r), r;
};
const Ho = "awc-checkbox";
let O = class extends Xe(E) {
  constructor() {
    super(...arguments), this.checked = !1, this.required = !1, this.disabled = !1, this.indeterminate = !1, this.staticError = !1, this.size = "regular", this.validationMessage = "", this._handleFieldValueChange = (e) => {
      this.checked = e.detail.includes(this.value);
    }, this._onInvalid = (e) => {
      e.preventDefault(), this.validationTarget.focus();
    };
  }
  validityCallback() {
    var e;
    return (e = this.validationTarget) == null ? void 0 : e.validationMessage;
  }
  validationMessageCallback(e) {
    this.customError && !this.staticError ? (this.validationMessage = e, this.validationMessage = this.customError) : this.validationMessage = e;
  }
  resetFormControl() {
    this.checked = !1;
  }
  shouldFormValueUpdate() {
    return this.checked;
  }
  update(e) {
    super.update(e), (e.has("checked") || e.has("value")) && this.setValue(this.value), e.has("customColor") && this._settingCustomColor();
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("invalid", this._onInvalid), document.addEventListener("DOMContentLoaded", () => {
      this.field = this.closest(Uo), this.field && this.addEventListener(vo, this._handleFieldValueChange);
    });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.removeEventListener("invalid", this._onInvalid), (e = this.field) == null || e.removeEventListener(vo, this._handleFieldValueChange);
  }
  focus() {
    this.checkboxElement.tabIndex = 0, this.checkboxElement.focus(), this.onFocus(this.value);
  }
  blur() {
    this.onBlur(this.value), this.field && (this.checkboxElement.tabIndex = -1);
  }
  _settingCustomColor() {
    this.customColor && this.style.setProperty("--awc-checkbox-custom-color", this.customColor);
  }
  _handleChange(e) {
    const t = e.target;
    t.checkValidity(), this.checked = t.checked, this.onChange(t.checked), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 })), this.indeterminate = !1;
  }
  render() {
    const e = {
      checkbox: !0,
      "checkbox--error": this.showError
    }, t = {
      "awc-checkbox__label": !0,
      "checkbox--error": this.showError || this.staticError && this.required
    };
    return y`
            <div class="awc-checkbox__wrapper">
                <label class="${Le(t)}"
                    >${this.label}
                    <div class="awc-checkbox__container">
                        <span class="awc-checkbox"></span>
                        <input
                            class="${Le(e)}"
                            type="checkbox"
                            label=${this.label}
                            name=${Vt(this.name)}
                            value=${Vt(this.value)}
                            .checked=${Je(this.checked)}
                            ?disabled=${this.disabled}
                            ?required=${this.required}
                            .indeterminate=${this.indeterminate}
                            @change=${this._handleChange}
                            @blur=${this.blur}
                        />
                    </div>
                </label>

                ${go(
      this.showError && this.required && !this.staticError,
      () => y`<span class="awc-checkbox__error">${this.validationMessage}</span>`
    )}
                ${go(
      this.staticError && this.required && this.customError !== void 0,
      () => y`<span class="awc-checkbox__error">${Vt(this.customError)}</span>`
    )}
            </div>
        `;
  }
};
O.shadowRootOptions = { ...E.shadowRootOptions, delegatesFocus: !0 };
O.formControlValidators = [Jr];
O.styles = os;
R([
  l({ type: String, reflect: !0 })
], O.prototype, "value", 2);
R([
  l({ type: String, reflect: !0 })
], O.prototype, "label", 2);
R([
  l({ type: String, reflect: !0 })
], O.prototype, "name", 2);
R([
  l({ type: Boolean, reflect: !0 })
], O.prototype, "checked", 2);
R([
  l({ type: Boolean, reflect: !0 })
], O.prototype, "required", 2);
R([
  l({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", 2);
R([
  l({ type: Boolean, reflect: !0 })
], O.prototype, "indeterminate", 2);
R([
  l({ type: Boolean, reflect: !0, attribute: "static-error" })
], O.prototype, "staticError", 2);
R([
  l({ reflect: !0, attribute: "custom-error" })
], O.prototype, "customError", 2);
R([
  l({
    reflect: !0,
    converter: {
      toAttribute(e) {
        return e === "regular" ? null : e;
      },
      fromAttribute(e) {
        return e ?? "regular";
      }
    }
  })
], O.prototype, "size", 2);
R([
  l({ reflect: !0, attribute: "custom-color" })
], O.prototype, "customColor", 2);
R([
  vt()
], O.prototype, "validationMessage", 2);
R([
  ct("awc-checkbox-change")
], O.prototype, "onChange", 2);
R([
  ct("awc-focus")
], O.prototype, "onFocus", 2);
R([
  ct("awc-blur")
], O.prototype, "onBlur", 2);
R([
  it("input")
], O.prototype, "checkboxElement", 2);
R([
  it("label")
], O.prototype, "labelCheckboxElement", 2);
R([
  it("input[type=checkbox]")
], O.prototype, "validationTarget", 2);
O = R([
  H(Ho)
], O);
const ss = j`
    :host {
        --awc-checkbox-group-title-color: var(--awc-checkbox-group-title-theme);
    }

    .awc-checkbox-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
    }

    .awc-checkbox-group__label {
        color: var(--awc-checkbox-group-title-color);
        font: var(--awc-font-text-medium-14);
    }

    .awc-checkbox-group__options {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-l);
    }

    :host([horizontal]) .awc-checkbox-group__options {
        flex-direction: row;
    }

    .awc-checkbox-group__hint {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary);
    }
`;
var as = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, Zt = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? ns(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && as(t, o, r), r;
};
const Uo = "awc-checkbox-group", vo = "awc-checkbox-group-change";
let gt = class extends Xe(E) {
  constructor() {
    super(...arguments), this.value = [], this.label = "", this.hint = "", this.horizontal = !1, this.focusedOptionIndex = 0;
  }
  get options() {
    return [...this.querySelectorAll(Ho)];
  }
  get checkedOptions() {
    return this.options.filter((e) => e.checked).map((e) => e.value);
  }
  get availableOptions() {
    return this.options.filter((e) => !e.disabled);
  }
  connectedCallback() {
    super.connectedCallback(), this.tabIndex = 0, this._handleCheckboxItem(), this.addEventListener("focus", this.handleFocus), this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("focus", this.handleFocus), this.removeEventListener("keydown", this.handleKeyDown);
  }
  updated(e) {
    super.updated(e), e.has("value") && (this.setValue(this.checkedOptions.join(", ")), this._onChange(this.value));
  }
  _handleCheckboxItem() {
    this.value = this.checkedOptions;
  }
  handleKeyDown(e) {
    if (["ArrowDown", "ArrowRight"].includes(e.key))
      this.focusedOptionIndex++;
    else if (["ArrowUp", "ArrowLeft"].includes(e.key))
      this.focusedOptionIndex--;
    else if (e.key === "Tab") {
      if (e.shiftKey ? this.focusedOptionIndex-- : this.focusedOptionIndex++, this.focusedOptionIndex === this.availableOptions.length) {
        this.tabIndex = 0, this.focusedOptionIndex = 0;
        return;
      }
    } else
      return;
    this.focusedOptionIndex = Math.max(0, Math.min(this.focusedOptionIndex, this.availableOptions.length - 1)), this.availableOptions[this.focusedOptionIndex].focus(), e.preventDefault();
  }
  handleFocus() {
    this.availableOptions[this.focusedOptionIndex].focus();
  }
  render() {
    return y`
            <div class="awc-checkbox-group" role="group" aria-labelledby="label" .value="${Je(this.value)}">
                <legend class="awc-checkbox-group__label">${this.label}</legend>
                <div class="awc-checkbox-group__options" @awc-checkbox-change=${this._handleCheckboxItem}>
                    <slot></slot>
                </div>
                ${this.hint ? y`<span class="awc-checkbox-group__hint">${this.hint}</span>` : ""}
            </div>
        `;
  }
};
gt.styles = [ss];
Zt([
  l({ type: Array, reflect: !0 })
], gt.prototype, "value", 2);
Zt([
  l({ type: String, reflect: !0 })
], gt.prototype, "label", 2);
Zt([
  l({ type: String, reflect: !0 })
], gt.prototype, "hint", 2);
Zt([
  l({ type: Boolean, reflect: !0 })
], gt.prototype, "horizontal", 2);
Zt([
  ct("awc-checkbox-group-change")
], gt.prototype, "_onChange", 2);
gt = Zt([
  H(Uo)
], gt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Re extends _e {
  constructor(t) {
    if (super(t), this.it = S, t.type !== ft.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === S || t == null) return this._t = void 0, this.it = t;
    if (t === tt) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const o = [t];
    return o.raw = o, this._t = { _$litType$: this.constructor.resultType, strings: o, values: [] };
  }
}
Re.directiveName = "unsafeHTML", Re.resultType = 1;
const cs = xe(Re), ls = j`
    :host {
        display: var(--awc-select-display, block);
        box-sizing: border-box;
    }

    .awc-select {
        /* display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start; */
    }

    /* :host([placeholder]) .awc-select__head {
        color: var(--colors-light-secondary);
    } */

    .awc-select__head {
        --awc-select-item-padding: 0;
        --awc-select-item-background: none;

        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--spacing-s);
        cursor: pointer;
        box-sizing: border-box;
        min-height: var(--awc-select-min-height, 40px);
        padding: var(--awc-select-head-padding, 10px 12px);
        border-radius: var(--awc-select-head-border-radius, var(--corner-radius-m));
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
        transition: border-radius .3s ease;
    }

    .awc-select__placeholder {
        color: var(--colors-light-secondary);
        font: var(--awc-font-text-regular-14);
    }

    :host([html]) .awc-select__head {
        padding: var(--awc-select-head-padding, 0 12px);
    }

    :host([variant='fill']) .awc-select__head {
        background-color: var(--awc-select-head-background-color, var(--colors-light-input-background));
    }

    .awc-select__list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        padding: 0;
    }

    .awc-select__input {
        border: none;
        border-bottom: 1px solid var(--colors-light-stroke);
        padding: 0 8px;
        background-color: transparent;
        width: 100%;
        box-sizing: border-box;
        min-height: 36px;
        margin: 0 auto;
        transition: border-color .3s ease;
        font: var(--awc-font-caption-1-regular);
    }

    .awc-select__input:focus {
       outline: none;
       border-bottom: 1px solid var(--colors-dark-primary);
    }

    awc-popover {
        --awc-popover-overflow: hidden auto;
    }

    awc-popover[position="bottom"] {
        --awc-popover-border-radius: 0 0 var(--corner-radius-m) var(--corner-radius-m);
        --awc-popover-box-shadow: 0px 10px 20px 0px rgba(64, 72, 98, 0.2);
    }

    awc-popover[position="bottom"][active] .awc-select__head {
        border-radius:  var(--corner-radius-m) var(--corner-radius-m) 0 0;
    }

    awc-popover[position="top"] {
        --awc-popover-border-radius: var(--corner-radius-m) var(--corner-radius-m) 0 0;
        --awc-popover-box-shadow: 0px -2px 15px 0px rgba(64, 72, 98, 0.2);
    }

    awc-popover[position="top"][active] .awc-select__head {
        border-radius: 0 0  var(--corner-radius-m)  var(--corner-radius-m);
    }

`, hs = j`
    :host {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
    }

    :host([disabled]),
    :host([disabled]) .awc-select-item {
        opacity: .5;
        pointer-events: none;
        touch-action: none;
    }

    .awc-select-item {
        font: var(--awc-base-font, var(--awc-font-text-regular-14));
        color: var(--colors-light-text);
        cursor: pointer;
        list-style-type: none;
        padding: var(--awc-select-item-padding, 10px 12px);
        transition: background-color .3s ease;
        user-select: none;
        background-color: var(--awc-select-item-background, transparent);
    }

    :host(:not([selected])) .awc-select-item:hover {
        background-color: var(--colors-light-input-background-hover);
    }

    :host([selected]) .awc-select-item {
        background-color: var(--awc-select-item-background, var(--colors-light-input-background-hover));
    }
`;
var ds = Object.defineProperty, us = Object.getOwnPropertyDescriptor, Ce = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? us(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && ds(t, o, r), r;
};
const ps = "awc-select-item";
let Et = class extends E {
  constructor() {
    super(...arguments), this.selected = !1, this.disabled = !1;
  }
  // @state() private _noPadding: boolean = false;
  render() {
    return y`
            <li
                class="awc-select-item"
                aria-selected="${this.selected}"
                ?disabled=${this.disabled}
                role="option"
            >
                <slot></slot>
            </li>
        `;
  }
};
Et.styles = hs;
Ce([
  l({ type: String, reflect: !0 })
], Et.prototype, "value", 2);
Ce([
  l({ type: Boolean, reflect: !0 })
], Et.prototype, "selected", 2);
Ce([
  l({ type: Boolean, reflect: !0 })
], Et.prototype, "disabled", 2);
Et = Ce([
  H(ps)
], Et);
var fs = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, jo = (e) => {
  throw TypeError(e);
}, B = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? gs(t, o) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (i ? a(t, o, r) : a(r)) || r);
  return i && r && fs(t, o, r), r;
}, vs = (e, t, o) => t.has(e) || jo("Cannot " + o), Oe = (e, t, o) => (vs(e, t, "read from private field"), o ? o.call(e) : t.get(e)), ws = (e, t, o) => t.has(e) ? jo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Yt;
const bs = "awc-select";
let P = class extends Xe(E) {
  constructor() {
    super(...arguments), this.variant = "fill", this.html = !1, this.disabled = !1, this.required = !1, this.autoselectOff = !1, this.reset = !1, this.multiple = !1, this.search = !1, this.staticError = !1, this.isOpen = !1, this.inputValue = "", ws(this, Yt, /* @__PURE__ */ new Map());
  }
  get options() {
    return [...this.querySelectorAll("awc-select-item")];
  }
  get selectedOptions() {
    return this.options.filter((e) => e.selected);
  }
  open() {
    this.isOpen = !0;
  }
  close() {
    this.isOpen = !1;
  }
  registerOption(e) {
    var o;
    const t = e.value || ((o = e.textContent) == null ? void 0 : o.trim()) || "";
    Oe(this, Yt).set(t, {
      value: t,
      selected: e.selected,
      disabled: e.disabled
    });
  }
  unregisterOption(e) {
    var o;
    const t = e.value || ((o = e.textContent) == null ? void 0 : o.trim()) || "";
    Oe(this, Yt).delete(t);
  }
  update(e) {
    super.update(e), e.has("value") && this.name && this.setValue(this.getFormValue());
  }
  handleToggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  handleInput(e) {
    const t = e.target;
    this.inputValue = t.value, this.applyFilter(this.inputValue);
  }
  handleChipsClick(e) {
    const t = this.selectedOptions[e];
    t && (t.selected = !1, this.syncValueWithSelected());
  }
  handleOptionSelect(e) {
    const t = e.composedPath().find((o) => o instanceof Et);
    t && (this.multiple ? this.toggleMultipleOption(t) : this.selectSingleOption(t));
  }
  applyFilter(e) {
    const t = e.toLowerCase();
    this.options.forEach((o) => {
      var r;
      const i = ((r = o.textContent) == null ? void 0 : r.trim().toLowerCase()) || "";
      o.style.display = e && !i.includes(t) ? "none" : "block";
    });
  }
  syncValueWithSelected() {
    let e = this.selectedOptions;
    if (e.length === 0 && !this.autoselectOff) {
      const o = this.options.find((i) => !i.disabled);
      o && (o.selected = !0, e = [o]);
    }
    const t = e.map((o) => this.getOptionValue(o));
    if (this.multiple)
      this.value = t.length > 0 ? t : [];
    else {
      const o = e[0];
      this.value = o ? this.getOptionValue(o) : void 0, this.options.forEach((i) => {
        i !== o && (i.selected = !1, i.requestUpdate());
      });
    }
    this.updateRegisteredOptions();
  }
  selectSingleOption(e) {
    this.value = this.getOptionValue(e), e.selected = !0, this.options.forEach((t) => {
      t !== e && (t.selected = !1, t.requestUpdate());
    }), this.updateRegisteredOptions(), this.close();
  }
  toggleMultipleOption(e) {
    const t = this.getOptionValue(e), o = Array.isArray(this.value) ? [...this.value] : [];
    e.selected = !e.selected, e.requestUpdate(), o.includes(t) ? this.value = o.filter((i) => i !== t) : this.value = [...o, t], this.updateRegisteredOptions();
  }
  updateRegisteredOptions() {
    const e = this.multiple ? this.value || [] : [this.value].filter((t) => t !== void 0);
    Oe(this, Yt).forEach((t) => {
      t.selected = e.includes(t.value);
      const o = this.options.find((i) => i.value === t.value);
      o && o.selected !== t.selected && (o.selected = t.selected, o.requestUpdate());
    }), this.requestUpdate();
  }
  getOptionValue(e) {
    var t;
    return e && (e.value || ((t = e.textContent) == null ? void 0 : t.trim())) || "";
  }
  getOptionText(e) {
    var t;
    return ((t = e == null ? void 0 : e.textContent) == null ? void 0 : t.trim()) || "";
  }
  getOptionHTML(e) {
    return e ? cs(e.outerHTML) : "";
  }
  getFormValue() {
    if (this.multiple) {
      const e = new FormData();
      return (this.value || []).forEach((t) => e.append(this.name, t)), e;
    }
    return Array.isArray(this.value) ? this.value[0] || null : this.value || null;
  }
  renderSearchInput() {
    return this.search ? y`
            <input
                class="awc-select__input"
                .value=${Je(this.inputValue)}
                placeholder=${this.inputPlaceholder ?? ""}
                @input=${this.handleInput}
            />
        ` : S;
  }
  renderChips() {
    return y`
            ${this.selectedOptions.map((e, t) => y`
                <awc-chips
                .value=${e.value}
                reset-button
                @awc-chips-reset=${() => this.handleChipsClick(t)}
                @click=${(o) => o.stopPropagation()}
                >
                ${this.html ? this.getOptionHTML(e) : this.getOptionText(e)}
                </awc-chips>
            `)}
        `;
  }
  renderPlaceholder() {
    return y`<span class="awc-select__placeholder">${this.placeholder}</span>`;
  }
  renderHeadContent() {
    this.syncValueWithSelected();
    const e = this.selectedOptions[0];
    return this.multiple ? (this.syncValueWithSelected(), y`${e ? this.renderChips() : this.renderPlaceholder()}`) : this.html && e ? y`${this.getOptionHTML(e)}` : y`${e ? this.getOptionText(e) : this.renderPlaceholder()}`;
  }
  renderHead() {
    return y`
            <div class="awc-select__head" @click=${this.handleToggleDropdown}>
                <slot name="awc-select-left-icon"></slot>
                ${this.renderHeadContent()}
            </div>
        `;
  }
  renderList() {
    return y`
            <ul class="awc-select__list" slot="awc-popover-content" @click=${this.handleOptionSelect}>
                ${this.renderSearchInput()}
                <slot></slot>
            </ul>
        `;
  }
  render() {
    return y`
            <div class="awc-select">
                <awc-popover
                match-reference-width
                spacing="0"
                no-padding
                strategy="fixed"
                trigger-type="manual"
                ?active=${this.isOpen}
                >
                ${this.renderHead()}
                ${this.renderList()}
                </awc-popover>
            </div>
        `;
  }
};
Yt = /* @__PURE__ */ new WeakMap();
P.shadowRootOptions = { ...E.shadowRootOptions, delegatesFocus: !0 };
P.styles = ls;
B([
  l({ type: String, reflect: !0 })
], P.prototype, "name", 2);
B([
  l({ type: String })
], P.prototype, "label", 2);
B([
  l({ type: String, reflect: !0 })
], P.prototype, "placeholder", 2);
B([
  l({ type: String, attribute: "input-placeholder" })
], P.prototype, "inputPlaceholder", 2);
B([
  l({ type: String, reflect: !0 })
], P.prototype, "variant", 2);
B([
  l({ type: String, reflect: !0 })
], P.prototype, "hint", 2);
B([
  l({ type: String, attribute: "custom-error" })
], P.prototype, "customError", 2);
B([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "html", 2);
B([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "disabled", 2);
B([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "required", 2);
B([
  l({ type: Boolean, attribute: "autoselect-off" })
], P.prototype, "autoselectOff", 2);
B([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "reset", 2);
B([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "multiple", 2);
B([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "search", 2);
B([
  l({ type: Boolean, attribute: "static-error" })
], P.prototype, "staticError", 2);
B([
  l({ type: Array })
], P.prototype, "value", 2);
B([
  vt()
], P.prototype, "isOpen", 2);
B([
  vt()
], P.prototype, "inputValue", 2);
P = B([
  H(bs)
], P);
const Cs = {
  AwcAlert: Ft,
  AwcIcon: xt,
  AwcIconLoader: It,
  AwcAccordion: Ht,
  AwcAccordionItem: _t,
  AwcTooltip: D,
  AwcButton: U,
  AwcCheckboxGroup: gt,
  AwcCheckbox: O,
  AwcPopover: F,
  AwcSelect: P,
  AwcSelectItem: Et,
  AwcChips: At,
  AwcAvatar: I,
  AwcAvatarBadge: jt,
  AwcAvatarGroup: nt
};
export {
  Cs as default
};
