this.AwcUI=function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jo;const le=globalThis,ke=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),Qe=new WeakMap;let to=class{constructor(t,o,i){if(this._$cssResult$=!0,i!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(ke&&t===void 0){const i=o!==void 0&&o.length===1;i&&(t=Qe.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Qe.set(o,t))}return t}toString(){return this.cssText}};const No=e=>new to(typeof e=="string"?e:e+"",void 0,$e),U=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new to(o,e,$e)},qo=(e,t)=>{if(ke)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const i=document.createElement("style"),r=le.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,e.appendChild(i)}},eo=ke?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const i of t.cssRules)o+=i.cssText;return No(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wo,defineProperty:Zo,getOwnPropertyDescriptor:Go,getOwnPropertyNames:Yo,getOwnPropertySymbols:Ko,getPrototypeOf:Xo}=Object,wt=globalThis,oo=wt.trustedTypes,Jo=oo?oo.emptyScript:"",Ae=wt.reactiveElementPolyfillSupport,Gt=(e,t)=>e,he={toAttribute(e,t){switch(t){case Boolean:e=e?Jo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Ee=(e,t)=>!Wo(e,t),io={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:Ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),wt.litPropertyMetadata??(wt.litPropertyMetadata=new WeakMap);let Rt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=io){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(t,o),!o.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,o);r!==void 0&&Zo(this.prototype,t,r)}}static getPropertyDescriptor(t,o,i){const{get:r,set:s}=Go(this.prototype,t)??{get(){return this[o]},set(a){this[o]=a}};return{get:r,set(a){const n=r==null?void 0:r.call(this);s==null||s.call(this,a),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??io}static _$Ei(){if(this.hasOwnProperty(Gt("elementProperties")))return;const t=Xo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gt("properties"))){const o=this.properties,i=[...Yo(o),...Ko(o)];for(const r of i)this.createProperty(r,o[r])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[i,r]of o)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const r=this._$Eu(o,i);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)o.unshift(eo(r))}else t!==void 0&&o.push(eo(t));return o}static _$Eu(t,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostConnected)==null?void 0:i.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostDisconnected)==null?void 0:i.call(o)})}attributeChangedCallback(t,o,i){this._$AK(t,i)}_$ET(t,o){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:he).toAttribute(o,i.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,o){var s,a;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:he;this._$Em=r,this[r]=c.fromAttribute(o,n.type)??((a=this._$Ej)==null?void 0:a.get(r))??null,this._$Em=null}}requestUpdate(t,o,i){var r;if(t!==void 0){const s=this.constructor,a=this[t];if(i??(i=s.getPropertyOptions(t)),!((i.hasChanged??Ee)(a,o)||i.useDefault&&i.reflect&&a===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,o,{useDefault:i,reflect:r,wrapped:s},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??o??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(o=void 0),this._$AL.set(t,o)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,a]of r){const{wrapped:n}=a,c=this[s];n!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,a,c)}}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(o)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(t){}firstUpdated(t){}};Rt.elementStyles=[],Rt.shadowRootOptions={mode:"open"},Rt[Gt("elementProperties")]=new Map,Rt[Gt("finalized")]=new Map,Ae==null||Ae({ReactiveElement:Rt}),(wt.reactiveElementVersions??(wt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis,de=Yt.trustedTypes,ro=de?de.createPolicy("lit-html",{createHTML:e=>e}):void 0,so="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,ao="?"+bt,Qo=`<${ao}>`,Ot=document,Kt=()=>Ot.createComment(""),Xt=e=>e===null||typeof e!="object"&&typeof e!="function",Se=Array.isArray,ti=e=>Se(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Oe=`[ 	
\f\r]`,Jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,no=/-->/g,co=/>/g,Tt=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lo=/'/g,ho=/"/g,uo=/^(?:script|style|textarea|title)$/i,po=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),y=po(1),q=po(2),Q=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),fo=new WeakMap,zt=Ot.createTreeWalker(Ot,129);function go(e,t){if(!Se(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ro!==void 0?ro.createHTML(t):t}const ei=(e,t)=>{const o=e.length-1,i=[];let r,s=t===2?"<svg>":t===3?"<math>":"",a=Jt;for(let n=0;n<o;n++){const c=e[n];let h,u,d=-1,f=0;for(;f<c.length&&(a.lastIndex=f,u=a.exec(c),u!==null);)f=a.lastIndex,a===Jt?u[1]==="!--"?a=no:u[1]!==void 0?a=co:u[2]!==void 0?(uo.test(u[2])&&(r=RegExp("</"+u[2],"g")),a=Tt):u[3]!==void 0&&(a=Tt):a===Tt?u[0]===">"?(a=r??Jt,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Tt:u[3]==='"'?ho:lo):a===ho||a===lo?a=Tt:a===no||a===co?a=Jt:(a=Tt,r=void 0);const p=a===Tt&&e[n+1].startsWith("/>")?" ":"";s+=a===Jt?c+Qo:d>=0?(i.push(h),c.slice(0,d)+so+c.slice(d)+bt+p):c+bt+(d===-2?n:p)}return[go(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Qt{constructor({strings:t,_$litType$:o},i){let r;this.parts=[];let s=0,a=0;const n=t.length-1,c=this.parts,[h,u]=ei(t,o);if(this.el=Qt.createElement(h,i),zt.currentNode=this.el.content,o===2||o===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=zt.nextNode())!==null&&c.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(so)){const f=u[a++],p=r.getAttribute(d).split(bt),v=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:v[2],strings:p,ctor:v[1]==="."?ii:v[1]==="?"?ri:v[1]==="@"?si:ue}),r.removeAttribute(d)}else d.startsWith(bt)&&(c.push({type:6,index:s}),r.removeAttribute(d));if(uo.test(r.tagName)){const d=r.textContent.split(bt),f=d.length-1;if(f>0){r.textContent=de?de.emptyScript:"";for(let p=0;p<f;p++)r.append(d[p],Kt()),zt.nextNode(),c.push({type:2,index:++s});r.append(d[f],Kt())}}}else if(r.nodeType===8)if(r.data===ao)c.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(bt,d+1))!==-1;)c.push({type:7,index:s}),d+=bt.length-1}s++}}static createElement(t,o){const i=Ot.createElement("template");return i.innerHTML=t,i}}function Bt(e,t,o=e,i){var a,n;if(t===Q)return t;let r=i!==void 0?(a=o._$Co)==null?void 0:a[i]:o._$Cl;const s=Xt(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,o,i)),i!==void 0?(o._$Co??(o._$Co=[]))[i]=r:o._$Cl=r),r!==void 0&&(t=Bt(e,r._$AS(e,t.values),r,i)),t}class oi{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??Ot).importNode(o,!0);zt.currentNode=r;let s=zt.nextNode(),a=0,n=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new te(s,s.nextSibling,this,t):c.type===1?h=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(h=new ai(s,this,t)),this._$AV.push(h),c=i[++n]}a!==(c==null?void 0:c.index)&&(s=zt.nextNode(),a++)}return zt.currentNode=Ot,r}p(t){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,o),o+=i.strings.length-2):i._$AI(t[o])),o++}}class te{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,i,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Bt(this,t,o),Xt(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==Q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ti(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&Xt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ot.createTextNode(t)),this._$AH=t}$(t){var s;const{values:o,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Qt.createElement(go(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(o);else{const a=new oi(r,this),n=a.u(this.options);a.p(o),this.T(n),this._$AH=a}}_$AC(t){let o=fo.get(t.strings);return o===void 0&&fo.set(t.strings,o=new Qt(t)),o}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const s of t)r===o.length?o.push(i=new te(this.O(Kt()),this.O(Kt()),this,this.options)):i=o[r],i._$AI(s),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(t=this._$AA.nextSibling,o){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,o);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,i,r,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=o,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(t,o=this,i,r){const s=this.strings;let a=!1;if(s===void 0)t=Bt(this,t,o,0),a=!Xt(t)||t!==this._$AH&&t!==Q,a&&(this._$AH=t);else{const n=t;let c,h;for(t=s[0],c=0;c<s.length-1;c++)h=Bt(this,n[i+c],o,c),h===Q&&(h=this._$AH[c]),a||(a=!Xt(h)||h!==this._$AH[c]),h===S?t=S:t!==S&&(t+=(h??"")+s[c+1]),this._$AH[c]=h}a&&!r&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ii extends ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class ri extends ue{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class si extends ue{constructor(t,o,i,r,s){super(t,o,i,r,s),this.type=5}_$AI(t,o=this){if((t=Bt(this,t,o,0)??S)===Q)return;const i=this._$AH,r=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==S&&(i===S||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class ai{constructor(t,o,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}}const Te=Yt.litHtmlPolyfillSupport;Te==null||Te(Qt,te),(Yt.litHtmlVersions??(Yt.litHtmlVersions=[])).push("3.3.0");const ni=(e,t,o)=>{const i=(o==null?void 0:o.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const s=(o==null?void 0:o.renderBefore)??null;i._$litPart$=r=new te(t.insertBefore(Kt(),s),s,void 0,o??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis;let E=class extends Rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ni(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Q}};E._$litElement$=!0,E.finalized=!0,(jo=Pt.litElementHydrateSupport)==null||jo.call(Pt,{LitElement:E});const ze=Pt.litElementPolyfillSupport;ze==null||ze({LitElement:E}),(Pt.litElementVersions??(Pt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:Ee},li=(e=ci,t,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),i==="accessor"){const{name:a}=o;return{set(n){const c=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,c,e)},init(n){return n!==void 0&&this.C(a,void 0,e,n),n}}}if(i==="setter"){const{name:a}=o;return function(n){const c=this[a];t.call(this,n),this.requestUpdate(a,c,e)}}throw Error("Unsupported decorator location: "+i)};function l(e){return(t,o)=>typeof o=="object"?li(e,t,o):((i,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(e){return l({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(e,t){return(o,i,r)=>{const s=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(e))??null};return hi(o,i,{get(){return s(this)}})}}const di=U`
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
`;var ui=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,Pe=(e,t,o,i)=>{for(var r=i>1?void 0:i?pi(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&ui(t,o,r),r};const fi="awc-alert";let Vt=class extends E{constructor(){super(...arguments),this.color="primary",this.variant="block"}render(){return y`
            <div class="awc-alert">
                <p class="awc-alert__title"><slot></slot></p>
            </div>
        `}};Vt.styles=di,Pe([l({type:String,reflect:!0})],Vt.prototype,"color",2),Pe([l({type:String,reflect:!0})],Vt.prototype,"variant",2),Vt=Pe([V(fi)],Vt);const gi=U`
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
`;var vi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,pe=(e,t,o,i)=>{for(var r=i>1?void 0:i?wi(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&vi(t,o,r),r};const bi="awc-icon-loader";let Dt=class extends E{constructor(){super(...arguments),this.type="icon",this.size="",this.src=""}_setGlobalIcons(){const e=this.type,t=this.size,o=this.src,i=window.__AWC_ICONS||{};return window.__AWC_ICONS=i,i[e]||(i[e]={}),i[e][t]=o,i}firstUpdated(){this._setGlobalIcons()}};pe([l({type:String})],Dt.prototype,"type",2),pe([l({type:String})],Dt.prototype,"size",2),pe([l({type:String})],Dt.prototype,"src",2),Dt=pe([V(bi)],Dt);var mi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,ee=(e,t,o,i)=>{for(var r=i>1?void 0:i?yi(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&mi(t,o,r),r};const xi="awc-icon";let mt=class extends E{constructor(){super(...arguments),this.type="icon",this.size="16",this.name="",this.iconScale=""}_getGlobalIcon(){const e=window.__AWC_ICONS;if(e&&e[this.type]&&e[this.type][this.size])return e[this.type][this.size]}render(){const e=this._getGlobalIcon();if(e)return q`
        <svg
          class="awc-icon"
          style=${this.iconScale?`--awc-icon-size: ${this.iconScale}`:""}
          width=${this.size}
          height=${this.size}
        >
          <use href="${e}#${this.name}"></use>
        </svg>
        <slot></slot>
      `}};mt.styles=[gi],ee([l({type:String,reflect:!0})],mt.prototype,"type",2),ee([l({type:String,reflect:!0})],mt.prototype,"size",2),ee([l({type:String,reflect:!0})],mt.prototype,"name",2),ee([l({type:String,attribute:"icon-scale"})],mt.prototype,"iconScale",2),mt=ee([V(xi)],mt);const _i=U`
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
`;function Ci(e,t){return function(o,i){const r=new CustomEvent(t,{detail:o,bubbles:!0,cancelable:!1,composed:!0,...i});return e.dispatchEvent(r),r}}function rt(e){return(t,o)=>{Object.defineProperty(t,o,{get(){return Ci(this,e||o)},enumerable:!0,configurable:!0})}}var ki=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,oe=(e,t,o,i)=>{for(var r=i>1?void 0:i?$i(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&ki(t,o,r),r};const vo="awc-accordion-item";let yt=class extends E{constructor(){super(...arguments),this.active=!1,this.disabled=!1,this._arrowDownSvg=q`
    <svg class="awc-accordion-item__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
    </svg>
  `}_toggleActive(){this.disabled||(this.active=!this.active,this._onActive(this.active))}render(){return y`
            <div class="awc-accordion-item">
                <button tabindex="0" @click=${this._toggleActive} class="awc-accordion-item__button" type="button">
                    ${this.title} ${this._arrowDownSvg}
                </button>

                <section class="awc-accordion-item__wrapper ${this.active?"active":""}">
                    <div ?inert=${!this.active} class="awc-accordion-item__content">
                        <slot></slot>
                    </div>
                </section>
            </div>
        `}};yt.styles=_i,oe([l({type:String,reflect:!0})],yt.prototype,"title",2),oe([l({type:Boolean,reflect:!0})],yt.prototype,"active",2),oe([l({type:Boolean,reflect:!0})],yt.prototype,"disabled",2),oe([rt("awc-accordion-toggle")],yt.prototype,"_onActive",2),yt=oe([V(vo)],yt);const Ai=U`
    :host {
        display: block;
    }

    :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }
`;var Ei=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,Le=(e,t,o,i)=>{for(var r=i>1?void 0:i?Si(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Ei(t,o,r),r};const Oi="awc-accordion";let Ft=class extends E{constructor(){super(...arguments),this.disabled=!1,this.autoclose=!1}get accordionItems(){return[...this.querySelectorAll(vo)]}_autocloseAccordionItem(e){if(!this.autoclose)return;const t=e.target;t.disabled&&this.disabled||(t.active?(this.accordionItems.forEach(o=>o.active=!1),t.active=!0):(t.active=!0,t.active&&(t.active=!1)))}_handleAccordionItem(e){this._autocloseAccordionItem(e)}_shutdownAllAccordionItems(){this.disabled?this.accordionItems.forEach(e=>e.disabled=!0):this.accordionItems.forEach(e=>e.disabled=!1)}updated(e){super.updated(e),e.has("disabled")&&this._shutdownAllAccordionItems()}render(){return y`
            <div ?disabled=${this.disabled} class="awc-accordion">
                <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
            </div>
        `}};Ft.styles=Ai,Le([l({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2),Le([l({type:Boolean,reflect:!0})],Ft.prototype,"autoclose",2),Ft=Le([V(Oi)],Ft);const Ti=U`
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
`,xt=Math.min,tt=Math.max,fe=Math.round,ge=Math.floor,lt=e=>({x:e,y:e}),zi={left:"right",right:"left",bottom:"top",top:"bottom"},Pi={start:"end",end:"start"};function Me(e,t,o){return tt(e,xt(t,o))}function It(e,t){return typeof e=="function"?e(t):e}function _t(e){return e.split("-")[0]}function Ht(e){return e.split("-")[1]}function wo(e){return e==="x"?"y":"x"}function Re(e){return e==="y"?"height":"width"}function Ct(e){return["top","bottom"].includes(_t(e))?"y":"x"}function Be(e){return wo(Ct(e))}function Li(e,t,o){o===void 0&&(o=!1);const i=Ht(e),r=Be(e),s=Re(r);let a=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=ve(a)),[a,ve(a)]}function Mi(e){const t=ve(e);return[Ve(e),t,Ve(t)]}function Ve(e){return e.replace(/start|end/g,t=>Pi[t])}function Ri(e,t,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?s:a;default:return[]}}function Bi(e,t,o,i){const r=Ht(e);let s=Ri(_t(e),o==="start",i);return r&&(s=s.map(a=>a+"-"+r),t&&(s=s.concat(s.map(Ve)))),s}function ve(e){return e.replace(/left|right|bottom|top/g,t=>zi[t])}function Vi(e){return{top:0,right:0,bottom:0,left:0,...e}}function bo(e){return typeof e!="number"?Vi(e):{top:e,right:e,bottom:e,left:e}}function we(e){const{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function mo(e,t,o){let{reference:i,floating:r}=e;const s=Ct(t),a=Be(t),n=Re(a),c=_t(t),h=s==="y",u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,f=i[n]/2-r[n]/2;let p;switch(c){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-r.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Ht(t)){case"start":p[a]-=f*(o&&h?-1:1);break;case"end":p[a]+=f*(o&&h?-1:1);break}return p}const Di=async(e,t,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=o,n=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=mo(h,i,c),f=i,p={},v=0;for(let w=0;w<n.length;w++){const{name:m,fn:b}=n[w],{x:_,y:k,data:z,reset:g}=await b({x:u,y:d,initialPlacement:i,placement:f,strategy:r,middlewareData:p,rects:h,platform:a,elements:{reference:e,floating:t}});u=_??u,d=k??d,p={...p,[m]:{...p[m],...z}},g&&v<=50&&(v++,typeof g=="object"&&(g.placement&&(f=g.placement),g.rects&&(h=g.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):g.rects),{x:u,y:d}=mo(h,f,c)),w=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}};async function De(e,t){var o;t===void 0&&(t={});const{x:i,y:r,platform:s,rects:a,elements:n,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=It(t,e),v=bo(p),m=n[f?d==="floating"?"reference":"floating":d],b=we(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(m)))==null||o?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(n.floating)),boundary:h,rootBoundary:u,strategy:c})),_=d==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n.floating)),z=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},g=we(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:_,offsetParent:k,strategy:c}):_);return{top:(b.top-g.top+v.top)/z.y,bottom:(g.bottom-b.bottom+v.bottom)/z.y,left:(b.left-g.left+v.left)/z.x,right:(g.right-b.right+v.right)/z.x}}const Fi=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:r,rects:s,platform:a,elements:n,middlewareData:c}=t,{element:h,padding:u=0}=It(e,t)||{};if(h==null)return{};const d=bo(u),f={x:o,y:i},p=Be(r),v=Re(p),w=await a.getDimensions(h),m=p==="y",b=m?"top":"left",_=m?"bottom":"right",k=m?"clientHeight":"clientWidth",z=s.reference[v]+s.reference[p]-f[p]-s.floating[v],g=f[p]-s.reference[p],x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let C=x?x[k]:0;(!C||!await(a.isElement==null?void 0:a.isElement(x)))&&(C=n.floating[k]||s.floating[v]);const A=z/2-g/2,L=C/2-w[v]/2-1,H=xt(d[b],L),X=xt(d[_],L),N=H,ct=C-w[v]-X,P=C/2-w[v]/2+A,W=Me(N,P,ct),J=!c.arrow&&Ht(r)!=null&&P!==W&&s.reference[v]/2-(P<N?H:X)-w[v]/2<0,ut=J?P<N?P-N:P-ct:0;return{[p]:f[p]+ut,data:{[p]:W,centerOffset:P-W-ut,...J&&{alignmentOffset:ut}},reset:J}}}),Ii=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:r,middlewareData:s,rects:a,initialPlacement:n,platform:c,elements:h}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...m}=It(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const b=_t(r),_=Ct(n),k=_t(n)===n,z=await(c.isRTL==null?void 0:c.isRTL(h.floating)),g=f||(k||!w?[ve(n)]:Mi(n)),x=v!=="none";!f&&x&&g.push(...Bi(n,w,v,z));const C=[n,...g],A=await De(t,m),L=[];let H=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&L.push(A[b]),d){const W=Li(r,a,z);L.push(A[W[0]],A[W[1]])}if(H=[...H,{placement:r,overflows:L}],!L.every(W=>W<=0)){var X,N;const W=(((X=s.flip)==null?void 0:X.index)||0)+1,J=C[W];if(J){var ct;const it=d==="alignment"?_!==Ct(J):!1,pt=((ct=H[0])==null?void 0:ct.overflows[0])>0;if(!it||pt)return{data:{index:W,overflows:H},reset:{placement:J}}}let ut=(N=H.filter(it=>it.overflows[0]<=0).sort((it,pt)=>it.overflows[1]-pt.overflows[1])[0])==null?void 0:N.placement;if(!ut)switch(p){case"bestFit":{var P;const it=(P=H.filter(pt=>{if(x){const St=Ct(pt.placement);return St===_||St==="y"}return!0}).map(pt=>[pt.placement,pt.overflows.filter(St=>St>0).reduce((St,bs)=>St+bs,0)]).sort((pt,St)=>pt[1]-St[1])[0])==null?void 0:P[0];it&&(ut=it);break}case"initialPlacement":ut=n;break}if(r!==ut)return{reset:{placement:ut}}}return{}}}};async function Hi(e,t){const{placement:o,platform:i,elements:r}=e,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),a=_t(o),n=Ht(o),c=Ct(o)==="y",h=["left","top"].includes(a)?-1:1,u=s&&c?-1:1,d=It(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return n&&typeof v=="number"&&(p=n==="end"?v*-1:v),c?{x:p*u,y:f*h}:{x:f*h,y:p*u}}const Ui=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:r,y:s,placement:a,middlewareData:n}=t,c=await Hi(t,e);return a===((o=n.offset)==null?void 0:o.placement)&&(i=n.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}},ji=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:n={fn:m=>{let{x:b,y:_}=m;return{x:b,y:_}}},...c}=It(e,t),h={x:o,y:i},u=await De(t,c),d=Ct(_t(r)),f=wo(d);let p=h[f],v=h[d];if(s){const m=f==="y"?"top":"left",b=f==="y"?"bottom":"right",_=p+u[m],k=p-u[b];p=Me(_,p,k)}if(a){const m=d==="y"?"top":"left",b=d==="y"?"bottom":"right",_=v+u[m],k=v-u[b];v=Me(_,v,k)}const w=n.fn({...t,[f]:p,[d]:v});return{...w,data:{x:w.x-o,y:w.y-i,enabled:{[f]:s,[d]:a}}}}}},Ni=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,i;const{placement:r,rects:s,platform:a,elements:n}=t,{apply:c=()=>{},...h}=It(e,t),u=await De(t,h),d=_t(r),f=Ht(r),p=Ct(r)==="y",{width:v,height:w}=s.floating;let m,b;d==="top"||d==="bottom"?(m=d,b=f===(await(a.isRTL==null?void 0:a.isRTL(n.floating))?"start":"end")?"left":"right"):(b=d,m=f==="end"?"top":"bottom");const _=w-u.top-u.bottom,k=v-u.left-u.right,z=xt(w-u[m],_),g=xt(v-u[b],k),x=!t.middlewareData.shift;let C=z,A=g;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(A=k),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(C=_),x&&!f){const H=tt(u.left,0),X=tt(u.right,0),N=tt(u.top,0),ct=tt(u.bottom,0);p?A=v-2*(H!==0||X!==0?H+X:tt(u.left,u.right)):C=w-2*(N!==0||ct!==0?N+ct:tt(u.top,u.bottom))}await c({...t,availableWidth:A,availableHeight:C});const L=await a.getDimensions(n.floating);return v!==L.width||w!==L.height?{reset:{rects:!0}}:{}}}};function be(){return typeof window<"u"}function Ut(e){return yo(e)?(e.nodeName||"").toLowerCase():"#document"}function et(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ht(e){var t;return(t=(yo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function yo(e){return be()?e instanceof Node||e instanceof et(e).Node:!1}function st(e){return be()?e instanceof Element||e instanceof et(e).Element:!1}function dt(e){return be()?e instanceof HTMLElement||e instanceof et(e).HTMLElement:!1}function xo(e){return!be()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof et(e).ShadowRoot}function ie(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=at(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function qi(e){return["table","td","th"].includes(Ut(e))}function me(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Fe(e){const t=Ie(),o=st(e)?at(e):e;return["transform","translate","scale","rotate","perspective"].some(i=>o[i]?o[i]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Wi(e){let t=kt(e);for(;dt(t)&&!jt(t);){if(Fe(t))return t;if(me(t))return null;t=kt(t)}return null}function Ie(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function jt(e){return["html","body","#document"].includes(Ut(e))}function at(e){return et(e).getComputedStyle(e)}function ye(e){return st(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function kt(e){if(Ut(e)==="html")return e;const t=e.assignedSlot||e.parentNode||xo(e)&&e.host||ht(e);return xo(t)?t.host:t}function _o(e){const t=kt(e);return jt(t)?e.ownerDocument?e.ownerDocument.body:e.body:dt(t)&&ie(t)?t:_o(t)}function re(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const r=_o(e),s=r===((i=e.ownerDocument)==null?void 0:i.body),a=et(r);if(s){const n=He(a);return t.concat(a,a.visualViewport||[],ie(r)?r:[],n&&o?re(n):[])}return t.concat(r,re(r,[],o))}function He(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Co(e){const t=at(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=dt(e),s=r?e.offsetWidth:o,a=r?e.offsetHeight:i,n=fe(o)!==s||fe(i)!==a;return n&&(o=s,i=a),{width:o,height:i,$:n}}function Ue(e){return st(e)?e:e.contextElement}function Nt(e){const t=Ue(e);if(!dt(t))return lt(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:s}=Co(t);let a=(s?fe(o.width):o.width)/i,n=(s?fe(o.height):o.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!n||!Number.isFinite(n))&&(n=1),{x:a,y:n}}const Zi=lt(0);function ko(e){const t=et(e);return!Ie()||!t.visualViewport?Zi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Gi(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==et(e)?!1:t}function Lt(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const r=e.getBoundingClientRect(),s=Ue(e);let a=lt(1);t&&(i?st(i)&&(a=Nt(i)):a=Nt(e));const n=Gi(s,o,i)?ko(s):lt(0);let c=(r.left+n.x)/a.x,h=(r.top+n.y)/a.y,u=r.width/a.x,d=r.height/a.y;if(s){const f=et(s),p=i&&st(i)?et(i):i;let v=f,w=He(v);for(;w&&i&&p!==v;){const m=Nt(w),b=w.getBoundingClientRect(),_=at(w),k=b.left+(w.clientLeft+parseFloat(_.paddingLeft))*m.x,z=b.top+(w.clientTop+parseFloat(_.paddingTop))*m.y;c*=m.x,h*=m.y,u*=m.x,d*=m.y,c+=k,h+=z,v=et(w),w=He(v)}}return we({width:u,height:d,x:c,y:h})}function je(e,t){const o=ye(e).scrollLeft;return t?t.left+o:Lt(ht(e)).left+o}function $o(e,t,o){o===void 0&&(o=!1);const i=e.getBoundingClientRect(),r=i.left+t.scrollLeft-(o?0:je(e,i)),s=i.top+t.scrollTop;return{x:r,y:s}}function Yi(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e;const s=r==="fixed",a=ht(i),n=t?me(t.floating):!1;if(i===a||n&&s)return o;let c={scrollLeft:0,scrollTop:0},h=lt(1);const u=lt(0),d=dt(i);if((d||!d&&!s)&&((Ut(i)!=="body"||ie(a))&&(c=ye(i)),dt(i))){const p=Lt(i);h=Nt(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const f=a&&!d&&!s?$o(a,c,!0):lt(0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+u.x+f.x,y:o.y*h.y-c.scrollTop*h.y+u.y+f.y}}function Ki(e){return Array.from(e.getClientRects())}function Xi(e){const t=ht(e),o=ye(e),i=e.ownerDocument.body,r=tt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=tt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+je(e);const n=-o.scrollTop;return at(i).direction==="rtl"&&(a+=tt(t.clientWidth,i.clientWidth)-r),{width:r,height:s,x:a,y:n}}function Ji(e,t){const o=et(e),i=ht(e),r=o.visualViewport;let s=i.clientWidth,a=i.clientHeight,n=0,c=0;if(r){s=r.width,a=r.height;const h=Ie();(!h||h&&t==="fixed")&&(n=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:n,y:c}}function Qi(e,t){const o=Lt(e,!0,t==="fixed"),i=o.top+e.clientTop,r=o.left+e.clientLeft,s=dt(e)?Nt(e):lt(1),a=e.clientWidth*s.x,n=e.clientHeight*s.y,c=r*s.x,h=i*s.y;return{width:a,height:n,x:c,y:h}}function Ao(e,t,o){let i;if(t==="viewport")i=Ji(e,o);else if(t==="document")i=Xi(ht(e));else if(st(t))i=Qi(t,o);else{const r=ko(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return we(i)}function Eo(e,t){const o=kt(e);return o===t||!st(o)||jt(o)?!1:at(o).position==="fixed"||Eo(o,t)}function tr(e,t){const o=t.get(e);if(o)return o;let i=re(e,[],!1).filter(n=>st(n)&&Ut(n)!=="body"),r=null;const s=at(e).position==="fixed";let a=s?kt(e):e;for(;st(a)&&!jt(a);){const n=at(a),c=Fe(a);!c&&n.position==="fixed"&&(r=null),(s?!c&&!r:!c&&n.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ie(a)&&!c&&Eo(e,a))?i=i.filter(u=>u!==a):r=n,a=kt(a)}return t.set(e,i),i}function er(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e;const a=[...o==="clippingAncestors"?me(t)?[]:tr(t,this._c):[].concat(o),i],n=a[0],c=a.reduce((h,u)=>{const d=Ao(t,u,r);return h.top=tt(d.top,h.top),h.right=xt(d.right,h.right),h.bottom=xt(d.bottom,h.bottom),h.left=tt(d.left,h.left),h},Ao(t,n,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function or(e){const{width:t,height:o}=Co(e);return{width:t,height:o}}function ir(e,t,o){const i=dt(t),r=ht(t),s=o==="fixed",a=Lt(e,!0,s,t);let n={scrollLeft:0,scrollTop:0};const c=lt(0);function h(){c.x=je(r)}if(i||!i&&!s)if((Ut(t)!=="body"||ie(r))&&(n=ye(t)),i){const p=Lt(t,!0,s,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else r&&h();s&&!i&&r&&h();const u=r&&!i&&!s?$o(r,n):lt(0),d=a.left+n.scrollLeft-c.x-u.x,f=a.top+n.scrollTop-c.y-u.y;return{x:d,y:f,width:a.width,height:a.height}}function Ne(e){return at(e).position==="static"}function So(e,t){if(!dt(e)||at(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return ht(e)===o&&(o=o.ownerDocument.body),o}function Oo(e,t){const o=et(e);if(me(e))return o;if(!dt(e)){let r=kt(e);for(;r&&!jt(r);){if(st(r)&&!Ne(r))return r;r=kt(r)}return o}let i=So(e,t);for(;i&&qi(i)&&Ne(i);)i=So(i,t);return i&&jt(i)&&Ne(i)&&!Fe(i)?o:i||Wi(e)||o}const rr=async function(e){const t=this.getOffsetParent||Oo,o=this.getDimensions,i=await o(e.floating);return{reference:ir(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function sr(e){return at(e).direction==="rtl"}const ar={convertOffsetParentRelativeRectToViewportRelativeRect:Yi,getDocumentElement:ht,getClippingRect:er,getOffsetParent:Oo,getElementRects:rr,getClientRects:Ki,getDimensions:or,getScale:Nt,isElement:st,isRTL:sr};function To(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function nr(e,t){let o=null,i;const r=ht(e);function s(){var n;clearTimeout(i),(n=o)==null||n.disconnect(),o=null}function a(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),s();const h=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=h;if(n||t(),!f||!p)return;const v=ge(d),w=ge(r.clientWidth-(u+f)),m=ge(r.clientHeight-(d+p)),b=ge(u),k={rootMargin:-v+"px "+-w+"px "+-m+"px "+-b+"px",threshold:tt(0,xt(1,c))||1};let z=!0;function g(x){const C=x[0].intersectionRatio;if(C!==c){if(!z)return a();C?a(!1,C):i=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!To(h,e.getBoundingClientRect())&&a(),z=!1}try{o=new IntersectionObserver(g,{...k,root:r.ownerDocument})}catch{o=new IntersectionObserver(g,k)}o.observe(e)}return a(!0),s}function cr(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=Ue(e),u=r||s?[...h?re(h):[],...re(t)]:[];u.forEach(b=>{r&&b.addEventListener("scroll",o,{passive:!0}),s&&b.addEventListener("resize",o)});const d=h&&n?nr(h,o):null;let f=-1,p=null;a&&(p=new ResizeObserver(b=>{let[_]=b;_&&_.target===h&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var k;(k=p)==null||k.observe(t)})),o()}),h&&!c&&p.observe(h),p.observe(t));let v,w=c?Lt(e):null;c&&m();function m(){const b=Lt(e);w&&!To(w,b)&&o(),w=b,v=requestAnimationFrame(m)}return o(),()=>{var b;u.forEach(_=>{r&&_.removeEventListener("scroll",o),s&&_.removeEventListener("resize",o)}),d==null||d(),(b=p)==null||b.disconnect(),p=null,c&&cancelAnimationFrame(v)}}const lr=Ui,hr=ji,dr=Ii,ur=Ni,pr=Fi,fr=(e,t,o)=>{const i=new Map,r={platform:ar,...o},s={...r.platform,_c:i};return Di(e,t,{...r,platform:s})};function zo(e,t,o,i){const{position:r,strategy:s,spacing:a,middleware:n=[],matchReferenceWidth:c,onPlacementChange:h}=i;return cr(e,t,()=>{fr(e,t,{placement:r,strategy:s,middleware:[lr(a),dr(),hr({padding:8}),...o?[pr({element:o})]:[],...c?[ur({apply({elements:f}){f.floating.style.width=`${f.reference.getBoundingClientRect().width}px`}})]:[],...n]}).then(({x:f,y:p,placement:v,middlewareData:w})=>{Object.assign(t.style,{left:`${f}px`,top:`${p}px`});const[m]=v.split("-");if(h&&m!==r&&h(m),o&&w.arrow){const{x:b,y:_}=w.arrow,k={top:"bottom",right:"left",bottom:"top",left:"right"}[v.split("-")[0]];k&&Object.assign(o.style,{left:b!=null?`${b}px`:"",top:_!=null?`${_}px`:"",right:"",bottom:"",[k]:"-4px"})}})})}var gr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Z=(e,t,o,i)=>{for(var r=i>1?void 0:i?vr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&gr(t,o,r),r};const wr="awc-tooltip";let D=class extends E{constructor(){super(...arguments),this.message="Tooltip",this.position="top",this.strategy="absolute",this.spacing=8,this.marker=!0,this.active=!1,this.disabled=!1,this.matchWidth=!1,this.cleanupFloating=null,this.showTimeout=null,this.referenceEl=null,this.wasHiddenByVisibility=!1,this.handleSlotChange=()=>{const e=this.slotEl.assignedElements({flatten:!0});this.referenceEl=e[0]||null,this.active&&this.updatePosition()},this.showTooltip=(e=!1)=>{if(!this.disabled){this.showTimeout!==null&&clearTimeout(this.showTimeout);const t=async()=>{await this.updatePosition(),this.active=!0,this.showTimeout=null,this.wasHiddenByVisibility=!1,this._onShowEvent(!0)};e?t():this.showTimeout=window.setTimeout(t,300)}},this.hideTooltip=()=>{var e;this.disabled||(this.showTimeout!==null&&(clearTimeout(this.showTimeout),this.showTimeout=null),this.active=!1,(e=this.cleanupFloating)==null||e.call(this),this._onHideEvent(!0))},this.handleFocusIn=async e=>{this.contains(e.target)&&(this.wasHiddenByVisibility||this.showTooltip(!0))},this.handleFocusOut=()=>{this.contains(document.activeElement)||this.hideTooltip()},this.handleVisibilityChange=()=>{document.visibilityState==="hidden"&&this.active?(this.wasHiddenByVisibility=!0,this.hideTooltip()):document.visibilityState==="visible"&&setTimeout(()=>this.wasHiddenByVisibility=!1,100)}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",()=>this.showTooltip()),this.addEventListener("mouseleave",()=>this.hideTooltip()),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("slotchange",this.handleSlotChange),document.addEventListener("visibilitychange",this.handleVisibilityChange)}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("mouseenter",()=>this.showTooltip()),this.removeEventListener("mouseleave",()=>this.hideTooltip()),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.removeEventListener("slotchange",this.handleSlotChange),document.removeEventListener("visibilitychange",this.handleVisibilityChange),(e=this.cleanupFloating)==null||e.call(this),this.showTimeout!==null&&clearTimeout(this.showTimeout)}updated(e){super.updated(e),(e.has("active")&&this.active||e.has("position")||e.has("spacing")||e.has("strategy")||e.has("matchWidth"))&&this.updatePosition(),e.has("spacing")&&isNaN(Number(this.spacing))&&(this.spacing=8)}getValidSpacing(){const e=Number(this.spacing);return isNaN(e)?8:e}updatePosition(){var e;if(!this.tooltipEl||this.disabled||!this.referenceEl)return Promise.resolve();if((e=this.cleanupFloating)==null||e.call(this),this.matchWidth){const t=this.referenceEl.getBoundingClientRect().width;this.tooltipEl.style.width=`${t}px`}else this.tooltipEl.style.width="";return new Promise(t=>{this.cleanupFloating=zo(this.referenceEl,this.tooltipEl,this.marker?this.arrowEl:null,{position:this.position,strategy:this.strategy,spacing:this.getValidSpacing()}),requestAnimationFrame(()=>t())})}show(){this.showTooltip(!0)}hide(){this.hideTooltip()}render(){return y`
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div class="awc-tooltip ${this.active?"visible":""}" role="tooltip">
        <p class="awc-tooltip__message">${this.message}</p>
        ${this.marker?y`<div class="awc-tooltip__arrow" data-popper-arrow></div>`:""}
      </div>
    `}};D.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0},D.styles=Ti,Z([l({type:String,reflect:!0})],D.prototype,"message",2),Z([l({type:String,reflect:!0})],D.prototype,"position",2),Z([l({type:String,reflect:!0})],D.prototype,"strategy",2),Z([l({type:Number,reflect:!0})],D.prototype,"spacing",2),Z([l({type:Boolean,reflect:!0})],D.prototype,"marker",2),Z([l({type:Boolean,reflect:!0})],D.prototype,"active",2),Z([l({type:Boolean,reflect:!0})],D.prototype,"disabled",2),Z([l({type:Boolean,reflect:!0,attribute:"match-width"})],D.prototype,"matchWidth",2),Z([rt("awc-tooltip-show")],D.prototype,"_onShowEvent",2),Z([rt("awc-tooltip-hide")],D.prototype,"_onHideEvent",2),Z([ot(".awc-tooltip")],D.prototype,"tooltipEl",2),Z([ot(".awc-tooltip__arrow")],D.prototype,"arrowEl",2),Z([ot("slot")],D.prototype,"slotEl",2),D=Z([V(wr)],D);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},xe=e=>(...t)=>({_$litDirective$:e,values:t});let _e=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,i){this._$Ct=t,this._$AM=o,this._$Ci=i}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=xe(class extends _e{constructor(e){var t;if(super(e),e.type!==gt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(t)}const o=e.element.classList;for(const s of this.st)s in t||(o.remove(s),this.st.delete(s));for(const s in t){const a=!!t[s];a===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(a?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return Q}}),br=U`
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
`;var mr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,G=(e,t,o,i)=>{for(var r=i>1?void 0:i?yr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&mr(t,o,r),r};const xr="awc-popover";let F=class extends E{constructor(){super(...arguments),this.position="top",this.strategy="absolute",this.triggerType="click",this.spacing=8,this.active=!1,this.disabled=!1,this.noPadding=!1,this.matchReferenceWidth=!1,this.cleanupFloating=null,this._hoverTimeout=null,this.referenceEl=null,this._handleOutsideClick=e=>{e.composedPath().includes(this)||this.hide()},this._onMouseEnter=()=>{!this.disabled&&this.triggerType==="hover"&&(this._hoverTimeout&&clearTimeout(this._hoverTimeout),this.show())},this._onMouseLeave=()=>{!this.disabled&&this.triggerType==="hover"&&(this._hoverTimeout=window.setTimeout(()=>this.hide(),200))},this._onFocus=()=>{!this.disabled&&this.triggerType==="focus"&&this.show()},this._onBlur=()=>{!this.disabled&&this.triggerType==="focus"&&!this.contains(document.activeElement)&&this.hide()},this._onClick=()=>{!this.disabled&&this.triggerType==="click"&&(this.active?this.hide():this.show())},this._handlePopoverToggle=e=>{e.detail!==this&&this.active&&this.hide()},this.handleSlotChange=()=>{if(!this.slotEl)return;const e=this.slotEl.assignedElements({flatten:!0});this.referenceEl=e[0]||null,this.active&&this.updatePosition()}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave),this.addEventListener("focusin",this._onFocus),this.addEventListener("focusout",this._onBlur),this.addEventListener("click",this._onClick),this.addEventListener("slotchange",this.handleSlotChange),document.addEventListener("awc-popover-toggle",this._handlePopoverToggle)}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave),this.removeEventListener("focusin",this._onFocus),this.removeEventListener("focusout",this._onBlur),this.removeEventListener("click",this._onClick),this.removeEventListener("slotchange",this.handleSlotChange),document.removeEventListener("awc-popover-toggle",this._handlePopoverToggle),this._removeOutsideClickHandler(),(e=this.cleanupFloating)==null||e.call(this),this._hoverTimeout&&clearTimeout(this._hoverTimeout)}_addOutsideClickHandler(){document.addEventListener("click",this._handleOutsideClick)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}getValidSpacing(){const e=Number(this.spacing);return isNaN(e)?8:e}updatePosition(){var t;if(!this.popoverEl||!this.referenceEl||this.disabled)return Promise.resolve();(t=this.cleanupFloating)==null||t.call(this);const e={position:this.position,strategy:this.strategy,spacing:this.getValidSpacing(),matchReferenceWidth:this.matchReferenceWidth,onPlacementChange:o=>{this.position=o}};return new Promise(o=>{this.cleanupFloating=zo(this.referenceEl,this.popoverEl,null,e),requestAnimationFrame(()=>o())})}updated(e){var t;super.updated(e),e.has("active")&&(this.active?(this.updatePosition(),this._popoverOpenEvent(!0),this._popoverToggleEvent(this)):((t=this.cleanupFloating)==null||t.call(this),this._popoverCloseEvent(!0))),(e.has("position")||e.has("spacing")||e.has("strategy"))&&this.active&&this.updatePosition()}show(){!this.disabled&&!this.active&&(this.active=!0,this.triggerType==="click"&&this._addOutsideClickHandler())}hide(){!this.disabled&&this.active&&(this.active=!1,this.triggerType==="click"&&this._removeOutsideClickHandler())}render(){const e={"awc-popover":!0,visible:this.active,"awc-popover--no-padding":this.noPadding};return y`
            <slot @slotchange=${this.handleSlotChange}></slot>
            <div class=${qe(e)}>
                <slot name="awc-popover-content"></slot>
            </div>
        `}};F.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0},F.styles=[br],G([l({type:String,reflect:!0})],F.prototype,"position",2),G([l({type:String,reflect:!0})],F.prototype,"strategy",2),G([l({type:String,reflect:!0,attribute:"trigger-type"})],F.prototype,"triggerType",2),G([l({type:Number,reflect:!0})],F.prototype,"spacing",2),G([l({type:Boolean,reflect:!0})],F.prototype,"active",2),G([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2),G([l({type:Boolean,reflect:!0,attribute:"no-padding"})],F.prototype,"noPadding",2),G([l({type:Boolean,reflect:!0,attribute:"match-reference-width"})],F.prototype,"matchReferenceWidth",2),G([rt("awc-popover-open")],F.prototype,"_popoverOpenEvent",2),G([rt("awc-popover-close")],F.prototype,"_popoverCloseEvent",2),G([rt("awc-popover-toggle")],F.prototype,"_popoverToggleEvent",2),G([ot(".awc-popover")],F.prototype,"popoverEl",2),G([ot("slot")],F.prototype,"slotEl",2),F=G([V(xr)],F);const _r=U`
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
`;var Cr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,se=(e,t,o,i)=>{for(var r=i>1?void 0:i?kr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Cr(t,o,r),r};let $t=class extends E{constructor(){super(...arguments),this.resetButton=!1}_checkedAwcAvatar(){this.slotElement.assignedNodes().filter(t=>t.nodeName.toLowerCase()==="awc-avatar").length===1?this.chips.classList.add("awc-chips__avatar"):this.chips.classList.remove("awc-chips__avatar")}handleResetClick(){this._onRemoveChips(this.resetButton)}updated(e){super.updated(e),this._checkedAwcAvatar()}render(){return y`
            <div class='awc-chips'>
                <slot @slotchange=${this._checkedAwcAvatar}></slot>
                ${this.resetButton?y`
                    <svg class="awc-chips__reset" @click=${this.handleResetClick} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"/>
                    </svg>`:""}
            </div>
        `}};$t.styles=[_r],se([l({type:Boolean,reflect:!0,attribute:"reset-button"})],$t.prototype,"resetButton",2),se([rt("awc-chips-reset")],$t.prototype,"_onRemoveChips",2),se([ot(".awc-chips")],$t.prototype,"chips",2),se([ot("slot")],$t.prototype,"slotElement",2),$t=se([V("awc-chips")],$t);const $r=U`
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
`,Po={anonymous:q`
        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71336 5.65322L2.57606 1.31676C2.85923 -0.10662 4.72235 -0.476455 5.52771 0.730849C5.79228 1.12745 6.37513 1.12745 6.63969 0.730849C7.44506 -0.476454 9.30818 -0.106622 9.59135 1.31676L10.4624 5.69495C10.6961 5.75171 10.9288 5.81295 11.1603 5.87864L11.6511 6.01788C11.9062 6.09023 12.0543 6.35563 11.9819 6.61066C11.9095 6.86569 11.6442 7.01378 11.3891 6.94143L10.8983 6.80219C9.73953 6.47345 8.5506 6.2622 7.34949 6.17164C6.45119 6.10391 5.54906 6.10391 4.65075 6.17164C3.44965 6.2622 2.26071 6.47345 1.10193 6.80219L0.611127 6.94143C0.356094 7.01378 0.0906973 6.86569 0.018346 6.61066C-0.0540052 6.35563 0.0940872 6.09023 0.34912 6.01788L0.83992 5.87864C1.12936 5.79653 1.42059 5.72137 1.71336 5.65322ZM7.43831 1.26359C7.76887 0.768059 8.53357 0.919854 8.6498 1.50407L9.44006 5.47641C8.77288 5.35296 8.09911 5.26544 7.42167 5.21436C6.47532 5.143 5.52493 5.143 4.57858 5.21436C3.95977 5.26102 3.34402 5.33808 2.73356 5.44516L3.51761 1.50407C3.63384 0.919854 4.39854 0.76806 4.7291 1.26359C5.37369 2.22987 6.79372 2.22987 7.43831 1.26359Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.960123 9.83963C0.960123 8.6467 1.92719 7.67963 3.12012 7.67963C4.14809 7.67963 5.00833 8.39772 5.2266 9.35963H6.77365C6.99192 8.39772 7.85216 7.67963 8.88012 7.67963C10.0731 7.67963 11.0401 8.6467 11.0401 9.83963C11.0401 11.0326 10.0731 11.9996 8.88012 11.9996C7.85216 11.9996 6.99192 11.2815 6.77365 10.3196H5.2266C5.00833 11.2815 4.14809 11.9996 3.12012 11.9996C1.92719 11.9996 0.960123 11.0326 0.960123 9.83963ZM3.12012 8.63963C2.45738 8.63963 1.92012 9.17689 1.92012 9.83963C1.92012 10.5024 2.45738 11.0396 3.12012 11.0396C3.78286 11.0396 4.32012 10.5024 4.32012 9.83963C4.32012 9.17689 3.78286 8.63963 3.12012 8.63963ZM7.68012 9.83963C7.68012 9.17689 8.21738 8.63963 8.88012 8.63963C9.54286 8.63963 10.0801 9.17689 10.0801 9.83963C10.0801 10.5024 9.54286 11.0396 8.88012 11.0396C8.21738 11.0396 7.68012 10.5024 7.68012 9.83963Z" fill="white"/>
        </svg>
    `,deleted:q`
        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00004 0.96C6.8616 0.96 7.56004 1.65844 7.56004 2.52C7.56004 3.38156 6.8616 4.08 6.00004 4.08C5.13847 4.08 4.44004 3.38156 4.44004 2.52C4.44004 1.65844 5.13847 0.96 6.00004 0.96ZM8.52004 2.52C8.52004 1.12824 7.3918 0 6.00004 0C4.60828 0 3.48004 1.12824 3.48004 2.52C3.48004 3.91176 4.60828 5.04 6.00004 5.04C7.3918 5.04 8.52004 3.91176 8.52004 2.52ZM8.04004 6.48C8.04004 6.2149 7.82514 6 7.56004 6H4.44004C2.51809 6 0.96004 7.55805 0.96004 9.48V10.02C0.96004 11.1135 1.84652 12 2.94004 12H5.52004C5.78514 12 6.00004 11.7851 6.00004 11.52C6.00004 11.2549 5.78514 11.04 5.52004 11.04H2.94004C2.37671 11.04 1.92004 10.5833 1.92004 10.02V9.48C1.92004 8.08824 3.04828 6.96 4.44004 6.96H7.56004C7.82514 6.96 8.04004 6.7451 8.04004 6.48ZM10.899 8.85936C11.0865 8.67188 11.0864 8.36796 10.8989 8.18054C10.7114 7.99311 10.4075 7.99316 10.2201 8.18064L9.05939 9.34172L7.89934 8.18243C7.71183 7.99504 7.40791 7.99514 7.22052 8.18265C7.03313 8.37016 7.03323 8.67408 7.22074 8.86147L8.38067 10.0207L7.22104 11.1806C7.03362 11.3681 7.03367 11.672 7.22115 11.8595C7.40863 12.0469 7.71255 12.0468 7.89997 11.8594L9.05971 10.6993L10.2207 11.8595C10.4083 12.0469 10.7122 12.0468 10.8996 11.8593C11.087 11.6718 11.0869 11.3679 10.8993 11.1805L9.73843 10.0203L10.899 8.85936Z" fill="white"/>
        </svg>
    `,robot:q`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8Z" fill="white"/>
            <path d="M7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C7 11 7 13 7 15Z" fill="white"/>
            <path d="M17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C17 11 17 13 17 15Z" fill="white"/>
            <path d="M15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C11 7 13 7 15 7Z" fill="white"/>
            <rect x="9" y="13" width="6" height="2" rx="1" fill="white"/>
            <circle cx="10" cy="10" r="1" fill="white"/>
            <circle cx="14" cy="10" r="1" fill="white"/>
        </svg>
    `,user:q`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
        </svg>
    `,group:q`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M110.5-205v-86q0-25 11.75-45.25T155.5-369q53-31 112-47.75T390-433.5q63.5 0 122.25 16.75T624-369q21.5 12.5 33.25 32.75T669-291v86H110.5Zm629 0v-85q0-41.5-19.25-75.75T669-421.5q36.5 8 70.75 20.75t65.75 32.25Q826-357 837.75-336t11.75 46v85h-110ZM390-479q-58 0-98-40t-40-98q0-58 40-98t98-40q58 0 98 40t40 98q0 58-40 98t-98 40Zm318-138.5q0 57.5-40 97.75t-98 40.25q-6.5 0-12.25-.25T545-482q24.5-27.5 38.75-61.5t14.25-74q0-39.5-14.25-73.75T545-753q6.5-1.5 12.5-1.75T570-755q58 0 98 40t40 97.5Z"/>
        </svg>
    `,undefined:q`
        <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25799 2.02428C3.28688 1.85771 2.2515 2.45517 1.94312 3.33182C1.75985 3.85281 1.18893 4.12658 0.667941 3.94331C0.146952 3.76004 -0.126822 3.18912 0.0564498 2.66813C0.706862 0.819198 2.7195 -0.268818 4.59611 0.0530702C6.39616 0.361827 8.01237 2.04641 8.00978 4.00091C8.00934 5.53127 6.87472 6.5419 6.06448 7.08206C5.62885 7.37248 5.20034 7.58602 4.88467 7.72632L4.32601 7.94869C3.80207 8.12334 3.23575 7.84018 3.0611 7.31623C2.88657 6.79264 3.16924 6.22672 3.69251 6.05167C3.82132 6.00646 3.94769 5.95412 4.0724 5.89869C4.31923 5.78899 4.64072 5.62753 4.95508 5.41795C5.64468 4.95822 6.00978 4.46914 6.00978 4.00001L6.00979 3.99852C6.0111 3.11391 5.19369 2.18478 4.25799 2.02428ZM2.99978 11C2.99978 10.4477 3.4475 10 3.99978 10H4.00978C4.56207 10 5.00978 10.4477 5.00978 11C5.00978 11.5523 4.56207 12 4.00978 12H3.99978C3.4475 12 2.99978 11.5523 2.99978 11Z" fill="white"/>
        </svg>
    `,none:q``};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo="important",Ar=" !"+Lo,We=xe(class extends _e{constructor(e){var t;if(super(e),e.type!==gt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const i=e[o];return i==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?o.removeProperty(i):o[i]=null);for(const i in t){const r=t[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(Ar);i.includes("-")||s?o.setProperty(i,s?r.slice(0,-11):r,s?Lo:""):o[i]=r}}return Q}});function Mo(e,t){if(!e)return null;const o=i=>{var r;if(i.nodeType===Node.ELEMENT_NODE){const s=i;if((r=s.matches)!=null&&r.call(s,t))return s;for(const a of Array.from(s.children)){const n=a.querySelector(t);if(n)return n;const c=o(a);if(c)return c}if(s.shadowRoot){const a=Mo(s.shadowRoot,t);if(a)return a}}return null};return o(e)}function Ro(e,t,o){const i=e.shadowRoot;if(!i)return null;const r=i.querySelector(`slot[name="${t}"]`);if(!r)return null;const s=r.assignedElements({flatten:!0});for(const a of s){const n=a instanceof Element?a.querySelector(o):null;if(n)return n;const c=Mo(a,o);if(c)return c}return null}var Er=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Y=(e,t,o,i)=>{for(var r=i>1?void 0:i?Sr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Er(t,o,r),r};const Or="awc-avatar";let I=class extends E{constructor(){super(...arguments),this.size="36",this.rounded="circle",this.status="none",this.color="global-blue-400",this.target="_self",this.icon="none",this.croppedTitle="",this.sliced=!1,this.hovered=!1}hasBadgeSlot(){const e=Ro(this,"awc-avatar-badge","awc-avatar-badge");return e&&("size"in e&&(e.size=this.getBadgeSize()),"status"in e&&(e.status=this.status)),!!e}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this.hasBadgeSlot()})}firstUpdated(e){this.hasBadgeSlot()}updated(e){super.updated(e),e.has("title")&&(this.croppedTitle=this.trimTitle(this.title)),(e.has("size")||e.has("status"))&&this.hasBadgeSlot()}trimTitle(e){return e.length>1?e.charAt(0).toUpperCase():e}getBadgeSize(){return(this.status==="online"||this.status==="offline"?{20:"4",24:"4",32:"5",36:"5",40:"6",48:"8",128:"32",160:"32"}:{20:"8",24:"10",32:"12",36:"12",40:"12",48:"14",128:"32",160:"32"})[this.size]||"12"}renderAvatarContent(){if(this.imageLink)return y`
        <img
          class="awc-avatar--image"
          src=${this.imageLink}
          alt=${this.title}
          loading="lazy"
        />
      `;if(this.icon!=="none"&&this.icon in Po)return y`
        <span class="awc-avatar--no-image ${this.icon}">
          ${Po[this.icon]}
        </span>
      `;const e={backgroundColor:this.customColor||`var(--${this.color})`};return y`
      <span style=${We(e)} class="awc-avatar--no-image" title="${this.title}">
        ${this.croppedTitle}
      </span>
    `}renderStatus(){return this.hasBadgeSlot()||this.status==="none"?S:y`
      <awc-avatar-badge status=${this.status} size=${this.getBadgeSize()}></awc-avatar-badge>
    `}render(){const e=y`
      <div class="awc-avatar${this.sliced?" awc-avatar--sliced":""} ${this.hovered?"awc-avatar--hovered":""}">
        ${this.renderAvatarContent()}
        <div class="awc-avatar__status">
            ${this.renderStatus()}
            <slot name="awc-avatar-badge"></slot>
        </div>
      </div>
    `;return this.href?y`<a href=${this.href} target=${this.target}>${e}</a>`:y`${e}`}};I.styles=$r,Y([l({type:String,reflect:!0})],I.prototype,"size",2),Y([l({type:String,reflect:!0})],I.prototype,"rounded",2),Y([l({type:String,reflect:!0})],I.prototype,"status",2),Y([l({type:String,reflect:!0})],I.prototype,"color",2),Y([l({type:String,reflect:!0})],I.prototype,"title",2),Y([l({type:String,attribute:"image-link"})],I.prototype,"imageLink",2),Y([l({type:String,reflect:!0})],I.prototype,"href",2),Y([l({type:String})],I.prototype,"target",2),Y([l({type:String,reflect:!0,attribute:"custom-color"})],I.prototype,"customColor",2),Y([l({type:String,reflect:!0})],I.prototype,"icon",2),Y([ft()],I.prototype,"croppedTitle",2),Y([ft()],I.prototype,"sliced",2),Y([ft()],I.prototype,"hovered",2),I=Y([V(Or)],I);const Tr=U`
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

`,zr={none:q``,complete:q`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#35D3AC"/>
            <path d="M7.96983 3.96975C8.26272 3.67685 8.73748 3.67685 9.03038 3.96975C9.32322 4.26264 9.32325 4.73742 9.03038 5.03029L6.03038 8.03029C5.88973 8.17092 5.699 8.25002 5.5001 8.25002C5.30121 8.25002 5.11048 8.17092 4.96983 8.03029L2.96983 6.03029L2.91807 5.97365C2.67777 5.67908 2.69525 5.24435 2.96983 4.96975C3.24443 4.69514 3.67916 4.67768 3.97374 4.91799L4.03038 4.96975L5.5001 6.43947L7.96983 3.96975Z" fill="white"/>
        </svg>
    `,fail:q`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#FF7188"/>
            <path d="M8.02648 2.91808C8.32106 2.67782 8.75581 2.69525 9.03039 2.96984C9.30491 3.24443 9.3224 3.67919 9.08215 3.97374L9.03039 4.03038L7.06066 6.00011L9.03039 7.96984L9.08215 8.02648C9.32238 8.32104 9.30492 8.7558 9.03039 9.03038C8.75581 9.30496 8.32106 9.32238 8.02648 9.08214L7.96984 9.03038L6.00012 7.06066L4.03039 9.03038C3.73752 9.32325 3.26274 9.32321 2.96984 9.03038C2.67695 8.73749 2.67695 8.26273 2.96984 7.96984L4.93957 6.00011L2.96984 4.03038L2.91809 3.97374C2.67778 3.67916 2.69524 3.24444 2.96984 2.96984C3.24445 2.69528 3.67919 2.67778 3.97375 2.91808L4.03039 2.96984L6.00012 4.93956L7.96984 2.96984L8.02648 2.91808Z" fill="white"/>
        </svg>
    `,dnd:q`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#FD9038"/>
            <rect x="2.5" y="5" width="7" height="2" rx="1" fill="white"/>
        </svg>
    `,offline:q`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#BBB"/>
        </svg>
    `,online:q`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6"  fill="#6AC930"/>
        </svg>
    `};var Pr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Ze=(e,t,o,i)=>{for(var r=i>1?void 0:i?Lr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Pr(t,o,r),r};const Mr="awc-avatar-badge";let qt=class extends E{constructor(){super(...arguments),this.status="none",this.size="12"}render(){return y`
            <div class="awc-avatar-badge">
                ${zr[this.status]}
            </div>
        `}};qt.styles=Tr,Ze([l({type:String,reflect:!0})],qt.prototype,"status",2),Ze([l({type:String,reflect:!0})],qt.prototype,"size",2),qt=Ze([V(Mr)],qt);const Rr=U`
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
`,Br=U`
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
`;var Vr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,ae=(e,t,o,i)=>{for(var r=i>1?void 0:i?Dr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Vr(t,o,r),r};const Bo="awc-avatar-group-counter";let Mt=class extends E{constructor(){super(...arguments),this.totalUsers=0,this.counterSize="24",this.counterRounded="circle",this.sliced=!1}render(){return y`
            <div class="awc-avatar-group__counter${this.sliced?" awc-avatar-group__counter--sliced":""}">
                <p>+${this.totalUsers}</p>
            </div>
        `}};Mt.styles=[Br],ae([l({type:Number,attribute:"total-users",reflect:!0})],Mt.prototype,"totalUsers",2),ae([l({type:String,attribute:"counter-size",reflect:!0})],Mt.prototype,"counterSize",2),ae([l({attribute:"counter-rounded",reflect:!0})],Mt.prototype,"counterRounded",2),ae([ft()],Mt.prototype,"sliced",2),Mt=ae([V(Bo)],Mt);var Fr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,At=(e,t,o,i)=>{for(var r=i>1?void 0:i?Ir(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Fr(t,o,r),r};const Hr="awc-avatar-group";let nt=class extends E{constructor(){super(...arguments),this.displayUsers=2,this.totalUsers=0,this.counterSize="24",this.counterRounded="circle",this.counterValue=0,this.counterHidden=!1}get avatarCounter(){return this.querySelector(Bo)}updateDisplayedUsers(){var t,o;const e=(o=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"))==null?void 0:o.assignedElements();e&&e.forEach((i,r)=>{i.toggleAttribute("invisible",r>=this.displayUsers)})}_applySliceEffect(){var i;const e=Ro(this,"awc-avatar-group-counter","awc-avatar-group-counter");e&&this._applyStylesToElement(e);const t=(i=this.shadowRoot)==null?void 0:i.querySelector("slot"),o=t==null?void 0:t.assignedElements();o&&o.forEach((r,s)=>{this._applyHoverToElement(r),s!==0&&this._applyStylesToElement(r)})}_applyStylesToElement(e){e.sliced=!0}_applyHoverToElement(e){e instanceof I&&(e.hovered=!0)}updateCounterValue(){this.avatarCounter?this.counterHidden=this.counterValue===0:(this.counterValue=Math.max(0,this.totalUsers-this.displayUsers),this.counterHidden=this.counterValue===0)}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this.updateDisplayedUsers(),this.updateCounterValue(),this._applySliceEffect()})}firstUpdated(e){super.firstUpdated(e),this.updateDisplayedUsers(),this.updateCounterValue(),this._applySliceEffect()}updated(e){super.updated(e),(e.has("displayUsers")||e.has("totalUsers"))&&(this.updateDisplayedUsers(),this.updateCounterValue())}render(){return y`
      <div class="awc-avatar-group">
        <slot></slot>
        ${this.counterHidden?S:y`<awc-avatar-group-counter 
            .totalUsers=${this.counterValue}
            .counterSize=${this.counterSize}
            style=${We({display:this.counterHidden?"none":"block","margin-left":"-10px"})}>
          </awc-avatar-group-counter>`}
        <slot style=${We({"margin-left":"-10px"})} name="awc-avatar-group-counter"></slot>
      </div>
    `}};nt.styles=Rr,At([l({type:Number,attribute:"display-users"})],nt.prototype,"displayUsers",2),At([l({type:Number,attribute:"total-users"})],nt.prototype,"totalUsers",2),At([l({type:String,attribute:"counter-size"})],nt.prototype,"counterSize",2),At([l({type:String,attribute:"counter-rounded"})],nt.prototype,"counterRounded",2),At([ft()],nt.prototype,"counterValue",2),At([ft()],nt.prototype,"counterHidden",2),At([ot('slot[name="awc-avatar-group-counter"]')],nt.prototype,"_slottedCounter",2),nt=At([V(Hr)],nt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=e=>e??S,Ur=globalThis.SubmitEvent=typeof globalThis.SubmitEvent<"u"?SubmitEvent:Event,jr=e=>{if(!(!e.noValidate&&!e.reportValidity())){const t=new Ur("submit",{bubbles:!0,cancelable:!0});e.dispatchEvent(t),t.defaultPrevented||e.submit()}},Nr=U`
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
`,qr=U`
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
`;var Wr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Ge=(e,t,o,i)=>{for(var r=i>1?void 0:i?Zr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Wr(t,o,r),r};const Vo="awc-spinner";let ne=class extends E{constructor(){super(...arguments),this.size="m",this.variant="primary"}render(){return y` <div class="awc-spinner"></div> `}};ne.styles=qr,Ge([l({type:String,reflect:!0})],ne.prototype,"size",2),Ge([l({type:String,reflect:!0})],ne.prototype,"variant",2),ne=Ge([V(Vo)],ne);var Gr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,K=(e,t,o,i)=>{for(var r=i>1?void 0:i?Yr(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&Gr(t,o,r),r};const Kr="awc-button";let j=class extends E{constructor(){super(...arguments),this.background="blue",this.size="regular",this.variant="primary",this.type="submit",this.target="_self",this.disabled=!1,this.filling=!1,this.loading=!1,this.autofocus=!1}get spinner(){return this.querySelector(Vo)}focus(){this.button.focus()}_handleButtonClick(){const e=this.closest("form");e&&(this.type==="submit"?jr(e):this.type==="reset"&&e.reset())}_renderSpinner(){const e=this.variant==="primary"?"secondary":"primary";return y`<awc-spinner size="s" variant=${e}></awc-spinner>`}_settingCurrentSpinnerVariant(){this.spinner?(this.button.classList.add("awc-button--disable"),this.variant==="primary"?this.spinner.variant="secondary":this.spinner.variant="primary"):this.button.classList.remove("awc-button--disable")}_checkingSpinnerInSlot(){this.spinner?this._settingCurrentSpinnerVariant():this.button.classList.remove("awc-button--disable")}updated(e){super.updated(e),e.has("variant")&&this._settingCurrentSpinnerVariant()}render(){const e=y`
            <slot @slotchange="${this._checkingSpinnerInSlot}"></slot>
            ${this.loading?this._renderSpinner():""}
        `,t=y`
            <button
                class="awc-button"
                ?filling=${this.filling}
                ?autofocus=${this.autofocus}
                type=${this.type}
                name=${Wt(this.name)}
                value=${Wt(this.value)}
                tabindex="0"
                background=${this.background}
                ?disabled=${this.disabled}
                @focus=${this.focus}
                @click=${this._handleButtonClick}
            >
                ${e}
            </button>
        `,o=y`
            <a
                class="awc-button"
                ?filling=${this.filling}
                ?autofocus=${this.autofocus}
                tabindex="0"
                background=${this.background}
                ?disabled=${this.disabled}
                href=${this.href}
                @focus=${this.focus}
                target=${Wt(this.target)}
                @click=${this._handleButtonClick}
            >
                ${e}
            </a>
        `;return this.href?o:t}};j.styles=[Nr],K([l({type:String,reflect:!0})],j.prototype,"name",2),K([l({type:String,reflect:!0})],j.prototype,"value",2),K([l({type:String,reflect:!0})],j.prototype,"background",2),K([l({type:String,reflect:!0})],j.prototype,"size",2),K([l({type:String,reflect:!0})],j.prototype,"variant",2),K([l({type:String,reflect:!0})],j.prototype,"type",2),K([l({type:String})],j.prototype,"target",2),K([l({type:String,reflect:!0})],j.prototype,"href",2),K([l({type:Boolean,reflect:!0})],j.prototype,"disabled",2),K([l({type:Boolean,reflect:!0})],j.prototype,"filling",2),K([l({type:Boolean,reflect:!0})],j.prototype,"loading",2),K([l({type:Boolean,reflect:!0})],j.prototype,"autofocus",2),K([ot(".awc-button")],j.prototype,"button",2),j=K([V(Kr)],j);var $=function(e,t,o,i){if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?i:o==="a"?i.call(e):i?i.value:t.get(e)},M=function(e,t,o,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(e,o):r?r.value=o:t.set(e,o),o};function Ye(e){var t,o,i,r,s,a,n,c,h,u,d,f,p,v,w,m,b,_;class k extends e{constructor(...g){var x,C,A;super(...g),t.add(this),this.internals=this.attachInternals(),o.set(this,!1),i.set(this,!1),r.set(this,!1),s.set(this,void 0),a.set(this,void 0),n.set(this,!0),c.set(this,""),h.set(this,()=>{M(this,r,!0,"f"),M(this,o,!0,"f"),$(this,t,"m",w).call(this)}),u.set(this,()=>{M(this,o,!1,"f"),$(this,t,"m",m).call(this,this.shouldFormValueUpdate()?$(this,c,"f"):""),!this.validity.valid&&$(this,r,"f")&&M(this,i,!0,"f");const L=$(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(L?this.internals.validationMessage:"")}),d.set(this,()=>{var L;$(this,n,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),M(this,n,!1,"f")),M(this,r,!0,"f"),M(this,i,!0,"f"),$(this,t,"m",w).call(this),(L=this===null||this===void 0?void 0:this.validationMessageCallback)===null||L===void 0||L.call(this,this.showError?this.internals.validationMessage:"")}),f.set(this,void 0),p.set(this,!1),v.set(this,Promise.resolve()),(x=this.addEventListener)===null||x===void 0||x.call(this,"focus",$(this,h,"f")),(C=this.addEventListener)===null||C===void 0||C.call(this,"blur",$(this,u,"f")),(A=this.addEventListener)===null||A===void 0||A.call(this,"invalid",$(this,d,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const g=this.validators.map(A=>A.attribute).flat(),x=super.observedAttributes||[];return[...new Set([...x,...g])]}static getValidator(g){return this.validators.find(x=>x.attribute===g)||null}static getValidators(g){return this.validators.filter(x=>{var C;if(x.attribute===g||!((C=x.attribute)===null||C===void 0)&&C.includes(g))return!0})}get form(){return this.internals.form}get showError(){return $(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(g,x,C){var A;(A=super.attributeChangedCallback)===null||A===void 0||A.call(this,g,x,C);const H=this.constructor.getValidators(g);H!=null&&H.length&&this.validationTarget&&this.setValue($(this,c,"f"))}setValue(g){var x;M(this,i,!1,"f"),(x=this.validationMessageCallback)===null||x===void 0||x.call(this,""),M(this,c,g,"f");const A=this.shouldFormValueUpdate()?g:null;this.internals.setFormValue(A),$(this,t,"m",m).call(this,A),this.valueChangedCallback&&this.valueChangedCallback(A),$(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(g=>g($(this,v,"f")))}formResetCallback(){var g,x;M(this,r,!1,"f"),M(this,i,!1,"f"),$(this,t,"m",w).call(this),(g=this.resetFormControl)===null||g===void 0||g.call(this),(x=this.validationMessageCallback)===null||x===void 0||x.call(this,$(this,t,"m",w).call(this)?this.validationMessage:"")}}return o=new WeakMap,i=new WeakMap,r=new WeakMap,s=new WeakMap,a=new WeakMap,n=new WeakMap,c=new WeakMap,h=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const g=$(this,i,"f")||$(this,r,"f")&&!this.validity.valid&&!$(this,o,"f");return g&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),g},m=function(g){const x=this.constructor,C={},A=x.validators,L=[],H=A.some(P=>P.isValid instanceof Promise);$(this,p,"f")||(M(this,v,new Promise(P=>{M(this,f,P,"f")}),"f"),M(this,p,!0,"f")),$(this,s,"f")&&($(this,s,"f").abort(),M(this,a,$(this,s,"f"),"f"));const X=new AbortController;M(this,s,X,"f");let N,ct=!1;A.length&&(A.forEach(P=>{const W=P.key||"customError",J=P.isValid(this,g,X.signal);J instanceof Promise?(L.push(J),J.then(it=>{it!=null&&(C[W]=!it,N=$(this,t,"m",_).call(this,P,g),$(this,t,"m",b).call(this,C,N))})):(C[W]=!J,this.validity[W]!==!J&&(ct=!0),!J&&!N&&(N=$(this,t,"m",_).call(this,P,g)))}),Promise.allSettled(L).then(()=>{var P;X!=null&&X.signal.aborted||(M(this,p,!1,"f"),(P=$(this,f,"f"))===null||P===void 0||P.call(this))}),(ct||!H)&&$(this,t,"m",b).call(this,C,N))},b=function(g,x){if(this.validationTarget)this.internals.setValidity(g,x,this.validationTarget),M(this,n,!1,"f");else{if(this.internals.setValidity(g,x),this.internals.validity.valid)return;M(this,n,!0,"f")}},_=function(g,x){if(this.validityCallback){const C=this.validityCallback(g.key||"customError");if(C)return C}return g.message instanceof Function?g.message(this,x):g.message},k}const Xr={attribute:"required",key:"valueMissing",message:"Please fill out this field",isValid(e,t){let o=!0;return(e.hasAttribute("required")||e.required)&&!t&&(o=!1),o}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=e=>e.strings===void 0,Qr={},ts=(e,t=Qr)=>e._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=xe(class extends _e{constructor(e){if(super(e),e.type!==gt.PROPERTY&&e.type!==gt.ATTRIBUTE&&e.type!==gt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Jr(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Q||t===S)return t;const o=e.element,i=e.name;if(e.type===gt.PROPERTY){if(t===o[i])return Q}else if(e.type===gt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return Q}else if(e.type===gt.ATTRIBUTE&&o.getAttribute(i)===t+"")return Q;return ts(e),t}}),es=U`
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
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Do(e,t,o){return e?t(e):o==null?void 0:o(e)}var os=Object.defineProperty,is=Object.getOwnPropertyDescriptor,R=(e,t,o,i)=>{for(var r=i>1?void 0:i?is(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&os(t,o,r),r};const Fo="awc-checkbox";let O=class extends Ye(E){constructor(){super(...arguments),this.checked=!1,this.required=!1,this.disabled=!1,this.indeterminate=!1,this.staticError=!1,this.size="regular",this.validationMessage="",this._handleFieldValueChange=e=>{this.checked=e.detail.includes(this.value)},this._onInvalid=e=>{e.preventDefault(),this.validationTarget.focus()}}validityCallback(){var e;return(e=this.validationTarget)==null?void 0:e.validationMessage}validationMessageCallback(e){this.customError&&!this.staticError?(this.validationMessage=e,this.validationMessage=this.customError):this.validationMessage=e}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}update(e){super.update(e),(e.has("checked")||e.has("value"))&&this.setValue(this.value),e.has("customColor")&&this._settingCustomColor()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("DOMContentLoaded",()=>{this.field=this.closest(Io),this.field&&this.addEventListener(Ho,this._handleFieldValueChange)})}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),(e=this.field)==null||e.removeEventListener(Ho,this._handleFieldValueChange)}focus(){this.checkboxElement.tabIndex=0,this.checkboxElement.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.field&&(this.checkboxElement.tabIndex=-1)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-checkbox-custom-color",this.customColor)}_handleChange(e){const t=e.target;t.checkValidity(),this.checked=t.checked,this.onChange(t.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.indeterminate=!1}render(){const e={checkbox:!0,"checkbox--error":this.showError},t={"awc-checkbox__label":!0,"checkbox--error":this.showError||this.staticError&&this.required};return y`
            <div class="awc-checkbox__wrapper">
                <label class="${qe(t)}"
                    >${this.label}
                    <div class="awc-checkbox__container">
                        <span class="awc-checkbox"></span>
                        <input
                            class="${qe(e)}"
                            type="checkbox"
                            label=${this.label}
                            name=${Wt(this.name)}
                            value=${Wt(this.value)}
                            .checked=${Ke(this.checked)}
                            ?disabled=${this.disabled}
                            ?required=${this.required}
                            .indeterminate=${this.indeterminate}
                            @change=${this._handleChange}
                            @blur=${this.blur}
                        />
                    </div>
                </label>

                ${Do(this.showError&&this.required&&!this.staticError,()=>y`<span class="awc-checkbox__error">${this.validationMessage}</span>`)}
                ${Do(this.staticError&&this.required&&this.customError!==void 0,()=>y`<span class="awc-checkbox__error">${Wt(this.customError)}</span>`)}
            </div>
        `}};O.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0},O.formControlValidators=[Xr],O.styles=es,R([l({type:String,reflect:!0})],O.prototype,"value",2),R([l({type:String,reflect:!0})],O.prototype,"label",2),R([l({type:String,reflect:!0})],O.prototype,"name",2),R([l({type:Boolean,reflect:!0})],O.prototype,"checked",2),R([l({type:Boolean,reflect:!0})],O.prototype,"required",2),R([l({type:Boolean,reflect:!0})],O.prototype,"disabled",2),R([l({type:Boolean,reflect:!0})],O.prototype,"indeterminate",2),R([l({type:Boolean,reflect:!0,attribute:"static-error"})],O.prototype,"staticError",2),R([l({reflect:!0,attribute:"custom-error"})],O.prototype,"customError",2),R([l({reflect:!0,converter:{toAttribute(e){return e==="regular"?null:e},fromAttribute(e){return e??"regular"}}})],O.prototype,"size",2),R([l({reflect:!0,attribute:"custom-color"})],O.prototype,"customColor",2),R([ft()],O.prototype,"validationMessage",2),R([rt("awc-checkbox-change")],O.prototype,"onChange",2),R([rt("awc-focus")],O.prototype,"onFocus",2),R([rt("awc-blur")],O.prototype,"onBlur",2),R([ot("input")],O.prototype,"checkboxElement",2),R([ot("label")],O.prototype,"labelCheckboxElement",2),R([ot("input[type=checkbox]")],O.prototype,"validationTarget",2),O=R([V(Fo)],O);const rs=U`
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
`;var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,Zt=(e,t,o,i)=>{for(var r=i>1?void 0:i?as(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&ss(t,o,r),r};const Io="awc-checkbox-group",Ho="awc-checkbox-group-change";let vt=class extends Ye(E){constructor(){super(...arguments),this.value=[],this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(Fo)]}get checkedOptions(){return this.options.filter(e=>e.checked).map(e=>e.value)}get availableOptions(){return this.options.filter(e=>!e.disabled)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this._handleCheckboxItem(),this.addEventListener("focus",this.handleFocus),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("keydown",this.handleKeyDown)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.checkedOptions.join(", ")),this._onChange(this.value))}_handleCheckboxItem(){this.value=this.checkedOptions}handleKeyDown(e){if(["ArrowDown","ArrowRight"].includes(e.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(e.key))this.focusedOptionIndex--;else if(e.key==="Tab"){if(e.shiftKey?this.focusedOptionIndex--:this.focusedOptionIndex++,this.focusedOptionIndex===this.availableOptions.length){this.tabIndex=0,this.focusedOptionIndex=0;return}}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),e.preventDefault()}handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}render(){return y`
            <div class="awc-checkbox-group" role="group" aria-labelledby="label" .value="${Ke(this.value)}">
                <legend class="awc-checkbox-group__label">${this.label}</legend>
                <div class="awc-checkbox-group__options" @awc-checkbox-change=${this._handleCheckboxItem}>
                    <slot></slot>
                </div>
                ${this.hint?y`<span class="awc-checkbox-group__hint">${this.hint}</span>`:""}
            </div>
        `}};vt.styles=[rs],Zt([l({type:Array,reflect:!0})],vt.prototype,"value",2),Zt([l({type:String,reflect:!0})],vt.prototype,"label",2),Zt([l({type:String,reflect:!0})],vt.prototype,"hint",2),Zt([l({type:Boolean,reflect:!0})],vt.prototype,"horizontal",2),Zt([rt("awc-checkbox-group-change")],vt.prototype,"_onChange",2),vt=Zt([V(Io)],vt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xe extends _e{constructor(t){if(super(t),this.it=S,t.type!==gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this._t=void 0,this.it=t;if(t===Q)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}Xe.directiveName="unsafeHTML",Xe.resultType=1;const ns=xe(Xe),cs=U`
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

`,ls=U`
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
`;var hs=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,Ce=(e,t,o,i)=>{for(var r=i>1?void 0:i?ds(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&hs(t,o,r),r};const us="awc-select-item";let Et=class extends E{constructor(){super(...arguments),this.selected=!1,this.disabled=!1}render(){return y`
            <li
                class="awc-select-item"
                aria-selected="${this.selected}"
                ?disabled=${this.disabled}
                role="option"
            >
                <slot></slot>
            </li>
        `}};Et.styles=ls,Ce([l({type:String,reflect:!0})],Et.prototype,"value",2),Ce([l({type:Boolean,reflect:!0})],Et.prototype,"selected",2),Ce([l({type:Boolean,reflect:!0})],Et.prototype,"disabled",2),Et=Ce([V(us)],Et);var ps=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,Uo=e=>{throw TypeError(e)},B=(e,t,o,i)=>{for(var r=i>1?void 0:i?fs(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(i?a(t,o,r):a(r))||r);return i&&r&&ps(t,o,r),r},gs=(e,t,o)=>t.has(e)||Uo("Cannot "+o),Je=(e,t,o)=>(gs(e,t,"read from private field"),o?o.call(e):t.get(e)),vs=(e,t,o)=>t.has(e)?Uo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),ce;const ws="awc-select";let T=class extends Ye(E){constructor(){super(...arguments),this.variant="fill",this.html=!1,this.disabled=!1,this.required=!1,this.autoselectOff=!1,this.reset=!1,this.multiple=!1,this.search=!1,this.staticError=!1,this.isOpen=!1,this.inputValue="",vs(this,ce,new Map)}get options(){return[...this.querySelectorAll("awc-select-item")]}get selectedOptions(){return this.options.filter(e=>e.selected)}open(){this.isOpen=!0}close(){this.isOpen=!1}registerOption(e){var o;const t=e.value||((o=e.textContent)==null?void 0:o.trim())||"";Je(this,ce).set(t,{value:t,selected:e.selected,disabled:e.disabled})}unregisterOption(e){var o;const t=e.value||((o=e.textContent)==null?void 0:o.trim())||"";Je(this,ce).delete(t)}update(e){super.update(e),e.has("value")&&this.name&&this.setValue(this.getFormValue())}handleToggleDropdown(){this.isOpen=!this.isOpen}handleInput(e){const t=e.target;this.inputValue=t.value,this.applyFilter(this.inputValue)}handleChipsClick(e){const t=this.selectedOptions[e];t&&(t.selected=!1,this.syncValueWithSelected())}handleOptionSelect(e){const t=e.composedPath().find(o=>o instanceof Et);t&&(this.multiple?this.toggleMultipleOption(t):this.selectSingleOption(t))}applyFilter(e){const t=e.toLowerCase();this.options.forEach(o=>{var r;const i=((r=o.textContent)==null?void 0:r.trim().toLowerCase())||"";o.style.display=e&&!i.includes(t)?"none":"block"})}syncValueWithSelected(){let e=this.selectedOptions;if(e.length===0&&!this.autoselectOff){const o=this.options.find(i=>!i.disabled);o&&(o.selected=!0,e=[o])}const t=e.map(o=>this.getOptionValue(o));if(this.multiple)this.value=t.length>0?t:[];else{const o=e[0];this.value=o?this.getOptionValue(o):void 0,this.options.forEach(i=>{i!==o&&(i.selected=!1,i.requestUpdate())})}this.updateRegisteredOptions()}selectSingleOption(e){this.value=this.getOptionValue(e),e.selected=!0,this.options.forEach(t=>{t!==e&&(t.selected=!1,t.requestUpdate())}),this.updateRegisteredOptions(),this.close()}toggleMultipleOption(e){const t=this.getOptionValue(e),o=Array.isArray(this.value)?[...this.value]:[];e.selected=!e.selected,e.requestUpdate(),o.includes(t)?this.value=o.filter(i=>i!==t):this.value=[...o,t],this.updateRegisteredOptions()}updateRegisteredOptions(){const e=this.multiple?this.value||[]:[this.value].filter(t=>t!==void 0);Je(this,ce).forEach(t=>{t.selected=e.includes(t.value);const o=this.options.find(i=>i.value===t.value);o&&o.selected!==t.selected&&(o.selected=t.selected,o.requestUpdate())}),this.requestUpdate()}getOptionValue(e){var t;return e&&(e.value||((t=e.textContent)==null?void 0:t.trim()))||""}getOptionText(e){var t;return((t=e==null?void 0:e.textContent)==null?void 0:t.trim())||""}getOptionHTML(e){return e?ns(e.outerHTML):""}getFormValue(){if(this.multiple){const e=new FormData;return(this.value||[]).forEach(t=>e.append(this.name,t)),e}return Array.isArray(this.value)?this.value[0]||null:this.value||null}renderSearchInput(){return this.search?y`
            <input
                class="awc-select__input"
                .value=${Ke(this.inputValue)}
                placeholder=${this.inputPlaceholder??""}
                @input=${this.handleInput}
            />
        `:S}renderChips(){return y`
            ${this.selectedOptions.map((e,t)=>y`
                <awc-chips
                .value=${e.value}
                reset-button
                @awc-chips-reset=${()=>this.handleChipsClick(t)}
                @click=${o=>o.stopPropagation()}
                >
                ${this.html?this.getOptionHTML(e):this.getOptionText(e)}
                </awc-chips>
            `)}
        `}renderPlaceholder(){return y`<span class="awc-select__placeholder">${this.placeholder}</span>`}renderHeadContent(){this.syncValueWithSelected();const e=this.selectedOptions[0];return this.multiple?(this.syncValueWithSelected(),y`${e?this.renderChips():this.renderPlaceholder()}`):this.html&&e?y`${this.getOptionHTML(e)}`:y`${e?this.getOptionText(e):this.renderPlaceholder()}`}renderHead(){return y`
            <div class="awc-select__head" @click=${this.handleToggleDropdown}>
                <slot name="awc-select-left-icon"></slot>
                ${this.renderHeadContent()}
            </div>
        `}renderList(){return y`
            <ul class="awc-select__list" slot="awc-popover-content" @click=${this.handleOptionSelect}>
                ${this.renderSearchInput()}
                <slot></slot>
            </ul>
        `}render(){return y`
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
        `}};return ce=new WeakMap,T.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0},T.styles=cs,B([l({type:String,reflect:!0})],T.prototype,"name",2),B([l({type:String})],T.prototype,"label",2),B([l({type:String,reflect:!0})],T.prototype,"placeholder",2),B([l({type:String,attribute:"input-placeholder"})],T.prototype,"inputPlaceholder",2),B([l({type:String,reflect:!0})],T.prototype,"variant",2),B([l({type:String,reflect:!0})],T.prototype,"hint",2),B([l({type:String,attribute:"custom-error"})],T.prototype,"customError",2),B([l({type:Boolean,reflect:!0})],T.prototype,"html",2),B([l({type:Boolean,reflect:!0})],T.prototype,"disabled",2),B([l({type:Boolean,reflect:!0})],T.prototype,"required",2),B([l({type:Boolean,attribute:"autoselect-off"})],T.prototype,"autoselectOff",2),B([l({type:Boolean,reflect:!0})],T.prototype,"reset",2),B([l({type:Boolean,reflect:!0})],T.prototype,"multiple",2),B([l({type:Boolean,reflect:!0})],T.prototype,"search",2),B([l({type:Boolean,attribute:"static-error"})],T.prototype,"staticError",2),B([l({type:Array})],T.prototype,"value",2),B([ft()],T.prototype,"isOpen",2),B([ft()],T.prototype,"inputValue",2),T=B([V(ws)],T),{AwcAlert:Vt,AwcIcon:mt,AwcIconLoader:Dt,AwcAccordion:Ft,AwcAccordionItem:yt,AwcTooltip:D,AwcButton:j,AwcCheckboxGroup:vt,AwcCheckbox:O,AwcPopover:F,AwcSelect:T,AwcSelectItem:Et,AwcChips:$t,AwcAvatar:I,AwcAvatarBadge:qt,AwcAvatarGroup:nt}}();
