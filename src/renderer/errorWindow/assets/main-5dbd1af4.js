var ee=Object.defineProperty;var te=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var L=(e,t,n)=>(te(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function u(){}function T(e){return e()}function D(){return Object.create(null)}function g(e){e.forEach(T)}function K(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let y;function V(e,t){return e===t?!0:(y||(y=document.createElement("a")),y.href=t,e===y.href)}function ne(e){return Object.keys(e).length===0}function b(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function re(e){return document.createTextNode(e)}function J(){return re(" ")}function x(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Q(e){return function(t){return t.preventDefault(),e.call(this,t)}}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return Array.from(e.childNodes)}let w;function $(e){w=e}function se(){if(!w)throw new Error("Function called outside component initialization");return w}function ie(e){se().$$.on_mount.push(e)}function X(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const h=[],H=[];let m=[];const z=[],ce=Promise.resolve();let R=!1;function ue(){R||(R=!0,ce.then(Y))}function U(e){m.push(e)}const O=new Set;let p=0;function Y(){if(p!==0)return;const e=w;do{try{for(;p<h.length;){const t=h[p];p++,$(t),le(t.$$)}}catch(t){throw h.length=0,p=0,t}for($(null),h.length=0,p=0;H.length;)H.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];O.has(n)||(O.add(n),n())}m.length=0}while(h.length);for(;z.length;)z.pop()();R=!1,O.clear(),$(e)}function le(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function ae(e){const t=[],n=[];m.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),m=t}const v=new Set;let fe;function j(e,t){e&&e.i&&(v.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(v.has(e))return;v.add(e),fe.c.push(()=>{v.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function G(e){e&&e.c()}function A(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),U(()=>{const o=e.$$.on_mount.map(T).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...o):g(o),e.$$.on_mount=[]}),s.forEach(U)}function C(e,t){const n=e.$$;n.fragment!==null&&(ae(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(h.push(e),ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(e,t,n,r,s,o,i,d=[-1]){const a=w;$(e);const c=e.$$={fragment:null,ctx:[],props:o,update:u,not_equal:s,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:D(),dirty:d,skip_bound:!1,root:t.target||a.$$.root};i&&i(c.root);let M=!1;if(c.ctx=n?n(e,t.props||{},(f,k,...B)=>{const q=B.length?B[0]:k;return c.ctx&&s(c.ctx[f],c.ctx[f]=q)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](q),M&&de(e,f)),k}):[],c.update(),M=!0,g(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const f=oe(t.target);c.fragment&&c.fragment.l(f),f.forEach(E)}else c.fragment&&c.fragment.c();t.intro&&j(e.$$.fragment),A(e,t.target,t.anchor),Y()}$(a)}class S{constructor(){L(this,"$$");L(this,"$$set")}$destroy(){C(this,1),this.$destroy=u}$on(t,n){if(!K(n))return u;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pe);const he=""+new URL("cross-white-76977b4a.svg",import.meta.url).href,me=[],ge=e=>{me.push({error:e,id:crypto.randomUUID()})},_e=e=>{var t;(t=window.electron)==null||t.ipcRenderer.send("errorWinErr",e)},$e=()=>{var e;(e=window.electron)==null||e.ipcRenderer.on("errorWindowGetError",(t,n)=>{ge(n)})},we=()=>{var e;(e=window.electron)==null||e.ipcRenderer.send("errorWindowGetError")},Z=()=>{var e;(e=window.electron)==null||e.ipcRenderer.send("errorWinClose")};function ye(e){let t,n,r,s,o;return{c(){t=_("button"),n=_("img"),l(n,"class","h-full"),V(n.src,r=he)||l(n,"src",r),l(n,"alt","close icon"),l(t,"class","fixed right-2 top-2 btn p-1 h-6 w-10 text-white hover:bg-red-700 active:scale-100 [&_img]:active:scale-90 rounded-md z-50")},m(i,d){N(i,t,d),b(t,n),s||(o=[x(n,"dragstart",Q(e[0])),x(t,"click",Z)],s=!0)},p:u,i:u,o:u,d(i){i&&E(t),s=!1,g(o)}}}function be(e){function t(n){X.call(this,e,n)}return[t]}class ve extends S{constructor(t){super(),P(this,t,be,ye,I,{})}}const xe=""+new URL("octopus-white-14148693.svg",import.meta.url).href;function Ee(e){let t,n,r,s,o,i,d;return{c(){t=_("div"),n=_("img"),s=J(),o=_("div"),o.innerHTML='<span class="absolute top-0 group-hover:scale-0 transition-all">Octa crash</span> <span class="absolute top-0 scale-0 group-hover:scale-100 transition-all">Close Octa</span>',l(n,"class","h-10 mt-3 animate-bounce transition-all"),V(n.src,r=xe)||l(n,"src",r),l(n,"alt","octa icon"),l(o,"class","relative mt-2 flex justify-center items-center w-32 text-white -translate-y-4 pointer-events-none"),l(t,"class","group flex justify-center items-center gap-4 bg-red-500 hover:bg-red-400 w-screen h-screen p-2 cursor-pointer select-none")},m(a,c){N(a,t,c),b(t,n),b(t,s),b(t,o),i||(d=[x(n,"dragstart",Q(e[0])),x(t,"click",Z)],i=!0)},p:u,i:u,o:u,d(a){a&&E(t),i=!1,g(d)}}}function Le(e){function t(n){X.call(this,e,n)}return[t]}class Oe extends S{constructor(t){super(),P(this,t,Le,Ee,I,{})}}const Re=""+new URL("error-8ecf0d75.mp3",import.meta.url).href,W=e=>{_e(e)},Ue=({reason:e})=>{const t=`Unhandledrejection: ${e}`;W(t)},je=()=>{window.onerror=W,window.onunhandledrejection=Ue},Ae=()=>{if(window.electron===void 0)throw"electron API is missing in window"},Ce={error:Re},Ie=e=>{new Audio(Ce[e]).play().catch(W)};function Ne(e){let t,n,r,s;return t=new ve({}),r=new Oe({}),{c(){G(t.$$.fragment),n=J(),G(r.$$.fragment)},m(o,i){A(t,o,i),N(o,n,i),A(r,o,i),s=!0},p:u,i(o){s||(j(t.$$.fragment,o),j(r.$$.fragment,o),s=!0)},o(o){F(t.$$.fragment,o),F(r.$$.fragment,o),s=!1},d(o){o&&E(n),C(t,o),C(r,o)}}}function Pe(e){return ie(()=>{Ie("error")}),[]}class Se extends S{constructor(t){super(),P(this,t,Pe,Ne,I,{})}}je();$e();we();new Se({target:document.getElementById("app")});Ae();
