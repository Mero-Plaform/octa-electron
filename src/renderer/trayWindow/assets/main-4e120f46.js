var Q=Object.defineProperty;var X=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(X(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function a(){}function F(e){return e()}function R(){return Object.create(null)}function _(e){e.forEach(F)}function K(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Y(e){return Object.keys(e).length===0}function Z(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function te(e){return document.createTextNode(e)}function ne(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}let A;function $(e){A=e}const m=[],W=[];let p=[];const k=[],ie=Promise.resolve();let v=!1;function ce(){v||(v=!0,ie.then(D))}function E(e){p.push(e)}const b=new Set;let h=0;function D(){if(h!==0)return;const e=A;do{try{for(;h<m.length;){const t=m[h];h++,$(t),se(t.$$)}}catch(t){throw m.length=0,h=0,t}for($(null),m.length=0,h=0;W.length;)W.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];b.has(n)||(b.add(n),n())}p.length=0}while(m.length);for(;k.length;)k.pop()();v=!1,b.clear(),$(e)}function se(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}function ue(e){const t=[],n=[];p.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),p=t}const w=new Set;let d;function fe(){d={r:0,c:[],p:d}}function le(){d.r||_(d.c),d=d.p}function g(e,t){e&&e.i&&(w.delete(e),e.i(t))}function y(e,t,n,r){if(e&&e.o){if(w.has(e))return;w.add(e),d.c.push(()=>{w.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function H(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e){e&&e.c()}function L(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),E(()=>{const c=e.$$.on_mount.map(F).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...c):_(c),e.$$.on_mount=[]}),o.forEach(E)}function j(e,t){const n=e.$$;n.fragment!==null&&(ue(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(m.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(e,t,n,r,o,c,i,f=[-1]){const s=A;$(e);const u=e.$$={fragment:null,ctx:[],props:c,update:a,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:R(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};i&&i(u.root);let P=!1;if(u.ctx=n?n(e,t.props||{},(l,S,...M)=>{const B=M.length?M[0]:S;return u.ctx&&o(u.ctx[l],u.ctx[l]=B)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](B),P&&de(e,l)),S}):[],u.update(),P=!0,_(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const l=re(t.target);u.fragment&&u.fragment.l(l),l.forEach(O)}else u.fragment&&u.fragment.c();t.intro&&g(e.$$.fragment),L(e,t.target,t.anchor),D()}$(s)}class C{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){j(this,1),this.$destroy=a}$on(t,n){if(!K(n))return a;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);const he=e=>{var t;(t=window.electron)==null||t.ipcRenderer.send("trayWinErr",e)},me=e=>{var t;(t=window.electron)==null||t.ipcRenderer.send("trayMenuItemClick",e)};function pe(e){let t,n,r,o;return{c(){t=V("button"),n=te(e[0]),z(t,"class","w-full p-2 text-left bg-emerald-400 hover:bg-emerald-500 text-white transition-all active:scale-95 rounded-md cursor-pointer")},m(c,i){T(c,t,i),Z(t,n),r||(o=ne(t,"click",e[1]),r=!0)},p(c,[i]){i&1&&oe(n,c[0])},i:a,o:a,d(c){c&&O(t),r=!1,o()}}}function ge(e,t,n){let{itemName:r}=t;const o=()=>me(r);return e.$$set=c=>{"itemName"in c&&n(0,r=c.itemName)},[r,o]}class $e extends C{constructor(t){super(),I(this,t,ge,pe,N,{itemName:0})}}function U(e,t,n){const r=e.slice();return r[1]=t[n],r}function q(e){let t,n;return t=new $e({props:{itemName:e[1]}}),{c(){G(t.$$.fragment)},m(r,o){L(t,r,o),n=!0},p:a,i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){y(t.$$.fragment,r),n=!1},d(r){j(t,r)}}}function _e(e){let t,n,r=H(e[0]),o=[];for(let i=0;i<r.length;i+=1)o[i]=q(U(e,r,i));const c=i=>y(o[i],1,1,()=>{o[i]=null});return{c(){t=V("div");for(let i=0;i<o.length;i+=1)o[i].c();z(t,"class","flex justify-center flex-col h-full w-full gap-2 p-2 bg-slate-200 rounded-md")},m(i,f){T(i,t,f);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(t,null);n=!0},p(i,[f]){if(f&1){r=H(i[0]);let s;for(s=0;s<r.length;s+=1){const u=U(i,r,s);o[s]?(o[s].p(u,f),g(o[s],1)):(o[s]=q(u),o[s].c(),g(o[s],1),o[s].m(t,null))}for(fe(),s=r.length;s<o.length;s+=1)c(s);le()}},i(i){if(!n){for(let f=0;f<r.length;f+=1)g(o[f]);n=!0}},o(i){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)y(o[f]);n=!1},d(i){i&&O(t),ee(o,i)}}}function we(e){return[["Open main window","Exit"]]}class ye extends C{constructor(t){super(),I(this,t,we,_e,N,{})}}function xe(e){let t,n;return t=new ye({}),{c(){G(t.$$.fragment)},m(r,o){L(t,r,o),n=!0},p:a,i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){y(t.$$.fragment,r),n=!1},d(r){j(t,r)}}}class be extends C{constructor(t){super(),I(this,t,null,xe,N,{})}}const ve=()=>{if(window.electron===void 0)throw"electron API is missing in window"},J=e=>{he(e)},Ee=({reason:e})=>{const t=`Unhandledrejection: ${e}`;J(t)},Ne=()=>{window.onerror=J,window.onunhandledrejection=Ee};Ne();new be({target:document.getElementById("app")});ve();
