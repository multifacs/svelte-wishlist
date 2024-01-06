var se=Object.defineProperty;var ce=(e,t,n)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>(ce(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function C(){}function te(e){return e()}function U(){return Object.create(null)}function P(e){e.forEach(te)}function ne(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function de(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function L(){return z(" ")}function fe(){return z("")}function oe(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function F(e,t){t=""+t,e.data!==t&&(e.data=t)}function W(e,t,n){e.classList.toggle(t,!!n)}let I;function A(e){I=e}function ae(){if(!I)throw new Error("Function called outside component initialization");return I}function he(e){ae().$$.on_mount.push(e)}const N=[],Z=[];let x=[];const D=[],pe=Promise.resolve();let q=!1;function me(){q||(q=!0,pe.then(le))}function H(e){x.push(e)}const B=new Set;let M=0;function le(){if(M!==0)return;const e=I;do{try{for(;M<N.length;){const t=N[M];M++,A(t),_e(t.$$)}}catch(t){throw N.length=0,M=0,t}for(A(null),N.length=0,M=0;Z.length;)Z.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];B.has(n)||(B.add(n),n())}x.length=0}while(N.length);for(;D.length;)D.pop()();q=!1,B.clear(),A(e)}function _e(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function ge(e){const t=[],n=[];x.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),x=t}const we=new Set;function ie(e,t){e&&e.i&&(we.delete(e),e.i(t))}function G(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ye(e,t){e.d(1),t.delete(e.key)}function ke(e,t,n,o,l,c,i,s,r,u,w,a){let h=e.length,g=c.length,d=h;const y={};for(;d--;)y[e[d].key]=d;const f=[],_=new Map,v=new Map,J=[];for(d=g;d--;){const m=a(l,c,d),$=n(m);let O=i.get($);O?o&&J.push(()=>O.p(m,t)):(O=u($,m),O.c()),_.set($,f[d]=O),$ in y&&v.set($,Math.abs(d-y[$]))}const K=new Set,R=new Set;function j(m){ie(m,1),m.m(s,w),i.set(m.key,m),w=m.first,g--}for(;h&&g;){const m=f[g-1],$=e[h-1],O=m.key,T=$.key;m===$?(w=m.first,h--,g--):_.has(T)?!i.has(O)||K.has(O)?j(m):R.has(T)?h--:v.get(O)>v.get(T)?(R.add(O),j(m)):(K.add(T),h--):(r($,i),h--)}for(;h--;){const m=e[h];_.has(m.key)||r(m,i)}for(;g;)j(f[g-1]);return P(J),f}function be(e,t,n){const{fragment:o,after_update:l}=e.$$;o&&o.m(t,n),H(()=>{const c=e.$$.on_mount.map(te).filter(ne);e.$$.on_destroy?e.$$.on_destroy.push(...c):P(c),e.$$.on_mount=[]}),l.forEach(H)}function ve(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(N.push(e),me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,o,l,c,i=null,s=[-1]){const r=I;A(e);const u=e.$$={fragment:null,ctx:[],props:c,update:C,not_equal:l,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:U(),dirty:s,skip_bound:!1,root:t.target||r.$$.root};i&&i(u.root);let w=!1;if(u.ctx=n?n(e,t.props||{},(a,h,...g)=>{const d=g.length?g[0]:h;return u.ctx&&l(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),w&&$e(e,a)),h}):[],u.update(),w=!0,P(u.before_update),u.fragment=o?o(u.ctx):!1,t.target){if(t.hydrate){const a=ue(t.target);u.fragment&&u.fragment.l(a),a.forEach(E)}else u.fragment&&u.fragment.c();t.intro&&ie(e.$$.fragment),be(e,t.target,t.anchor),le()}A(r)}class ze{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){ve(this,1),this.$destroy=C}$on(t,n){if(!ne(n))return C;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ee="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ee);const Me=[{id:1,description:"Зарядка на несколько портов 🔌",link:"https://www.ozon.ru/product/setevoe-zaryadnoe-ustroystvo-baseus-30w-bystraya-zaryadka-dlya-smartfona-adapter-pitaniya-blok-dlya-523521119",completed:!1,thonked:0},{id:2,description:"Штатив (какой-нибудь) 🎥",link:"https://www.ozon.ru/product/shtativ-napolnyy-evolution-tm-3520e-815328158",completed:!1,thonked:0},{id:3,description:"Интересный кофе (ферментированный) или от Tasty Coffee ☕",link:"https://www.ozon.ru/seller/tasty-coffee-50771",completed:!1,thonked:0},{id:4,description:"Беспроводной микро 🎙",link:"https://www.ozon.ru/product/mikrofon-petlichnyy-trk8-chernyy-1261046477/",completed:!1,thonked:0},{id:5,description:"Гирлянда для моих фоточек 😀",link:"https://www.ozon.ru/product/girlyanda-s-prishchepkami-dlya-foto-20-lamp-3-metra-pitanie-ot-porta-usb-521384538",completed:!1,thonked:0},{id:6,description:"Спортивная балаклава (с волком?) ⛷",link:"",completed:!1,thonked:0},{id:7,description:"Что-нибудь вкусное от The Act 🍨",link:"https://www.ozon.ru/seller/the-act-36067",completed:!1,thonked:0},{id:8,description:"Тостер 🍞",link:"",completed:!1,thonked:0},{id:9,description:"Миксер (который с двумя венчиками) 🔪",link:"",completed:!1,thonked:0},{id:10,description:"Книжка Ловушка счастья. Перестаем переживать - начинаем жить 📖",link:"https://www.ozon.ru/product/lovushka-schastya-perestaem-perezhivat-nachinaem-zhit-2-e-izdanie-dopolnennoe-i-pererabotannoe-646026255",completed:!1,thonked:0},{id:11,description:"Новый повербанк ⚡",link:"",completed:!1,thonked:0}],Ne={items:Me};function Q(e,t,n){const o=e.slice();return o[15]=t[n],o[16]=t,o[17]=n,o}function X(e){let t,n,o=[],l=new Map,c,i,s,r,u,w,a=e[2]===1?"хотелка":"хотелок",h,g,d=G(e[1]);const y=f=>f[15].id;for(let f=0;f<d.length;f+=1){let _=Q(e,d,f),v=y(_);l.set(v,o[f]=ee(v,_))}return{c(){t=k("section"),n=k("ul");for(let f=0;f<o.length;f+=1)o[f].c();c=L(),i=k("footer"),s=k("span"),r=k("strong"),u=z(e[2]),w=L(),h=z(a),g=z(" осталось (нажатия (пока) мне ничего не отправляют)"),b(n,"class","todo-list svelte-17tt4xp"),b(s,"class","todo-count"),b(i,"class","footer"),b(t,"class","main")},m(f,_){S(f,t,_),p(t,n);for(let v=0;v<o.length;v+=1)o[v]&&o[v].m(n,null);p(t,c),p(t,i),p(i,s),p(s,r),p(r,u),p(s,w),p(s,h),p(s,g)},p(f,_){_&2&&(d=G(f[1]),o=ke(o,_,y,1,f,d,l,n,ye,ee,null,Q)),_&4&&F(u,f[2]),_&4&&a!==(a=f[2]===1?"хотелка":"хотелок")&&F(h,a)},d(f){f&&E(t);for(let _=0;_<o.length;_+=1)o[_].d()}}}function Y(e){let t,n,o,l,c;return{c(){t=k("span"),n=z("Ссылка: "),o=k("a"),l=z("OZON"),b(o,"href",c=e[15].link),b(t,"class","todo-link svelte-17tt4xp")},m(i,s){S(i,t,s),p(t,n),p(t,o),p(o,l)},p(i,s){s&2&&c!==(c=i[15].link)&&b(o,"href",c)},d(i){i&&E(t)}}}function ee(e,t){let n,o,l,c,i,s=t[15].description+"",r,u,w,a,h;function g(){t[5].call(l,t[16],t[17])}let d=t[15].link&&Y(t);return{key:e,first:null,c(){n=k("li"),o=k("div"),l=k("input"),c=L(),i=k("label"),r=z(s),u=L(),d&&d.c(),w=L(),b(l,"class","toggle"),b(l,"type","checkbox"),b(o,"class","view"),b(n,"class","svelte-17tt4xp"),W(n,"completed",t[15].completed),this.first=n},m(y,f){S(y,n,f),p(n,o),p(o,l),l.checked=t[15].completed,p(o,c),p(o,i),p(i,r),p(o,u),d&&d.m(o,null),p(n,w),a||(h=oe(l,"change",g),a=!0)},p(y,f){t=y,f&2&&(l.checked=t[15].completed),f&2&&s!==(s=t[15].description+"")&&F(r,s),t[15].link?d?d.p(t,f):(d=Y(t),d.c(),d.m(o,null)):d&&(d.d(1),d=null),f&2&&W(n,"completed",t[15].completed)},d(y){y&&E(n),d&&d.d(),a=!1,h()}}}function Se(e){let t,n,o,l,c,i=e[0].length>0&&X(e);return{c(){t=k("header"),t.innerHTML='<h1 class="svelte-17tt4xp">Nikita&#39;s Birthday Wishlist</h1> <h3 class="new-todo svelte-17tt4xp">🤩 Все хотелки 🤩</h3> <h4 class="new-todo-info svelte-17tt4xp">Актуальный адрес до 11-го числа (пункт выдачи):</h4> <h4 class="new-todo-info svelte-17tt4xp">Н. Новгород, Казанское шоссе, 12к1</h4> <h4 class="new-todo-info svelte-17tt4xp">Адрес после:</h4> <h4 class="new-todo-info svelte-17tt4xp">Н. Новгород, Маршала Баграмяна, 1</h4>',n=L(),i&&i.c(),o=fe(),b(t,"class","header rounding")},m(s,r){S(s,t,r),S(s,n,r),i&&i.m(s,r),S(s,o,r),l||(c=oe(window,"hashchange",e[3]),l=!0)},p(s,[r]){s[0].length>0?i?i.p(s,r):(i=X(s),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null)},i:C,o:C,d(s){s&&(E(t),E(n),E(o)),i&&i.d(s),l=!1,c()}}}function Le(e){let t=e.length,n;for(;t>0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}function xe(e,t,n){let o,l;const c=a=>!a.completed,i=a=>a.completed;let s="all",r=[];try{r=Ne.items}catch{r=[]}console.log(r);const u=()=>{n(4,s="all"),location.hash==="#/active"?n(4,s="active"):location.hash==="#/completed"&&n(4,s="completed")};he(u);function w(a,h){a[h].completed=this.checked,n(1,o),n(4,s),n(0,r)}return e.$$.update=()=>{if(e.$$.dirty&17&&n(1,o=s==="all"?r:r.filter(s==="completed"?i:c)),e.$$.dirty&1&&n(2,l=r.filter(c).length),e.$$.dirty&1&&r.filter(i).length,e.$$.dirty&1)try{localStorage.setItem("todos-svelte",JSON.stringify(r))}catch{}e.$$.dirty&2&&Le(o)},[r,o,l,u,s,w]}class Ae extends ze{constructor(t){super(),Oe(this,t,xe,Se,re,{})}}window.todomvc=new Ae({target:document.querySelector(".todoapp")});
