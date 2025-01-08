var at=Object.defineProperty;var nt=(t,o,e)=>o in t?at(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var L=(t,o,e)=>(nt(t,typeof o!="symbol"?o+"":o,e),e);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function x(){}function X(t){return t()}function G(){return Object.create(null)}function E(t){t.forEach(X)}function tt(t){return typeof t=="function"}function st(t,o){return t!=t?o==o:t!==o||t&&typeof t=="object"||typeof t=="function"}let I;function J(t,o){return t===o?!0:(I||(I=document.createElement("a")),I.href=o,t===I.href)}function rt(t){return Object.keys(t).length===0}function k(t,o){t.appendChild(o)}function O(t,o,e){t.insertBefore(o,e||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function ot(t){return document.createTextNode(t)}function F(){return ot(" ")}function lt(t,o,e,a){return t.addEventListener(o,e,a),()=>t.removeEventListener(o,e,a)}function v(t,o,e){e==null?t.removeAttribute(o):t.getAttribute(o)!==e&&t.setAttribute(o,e)}function ut(t){return Array.from(t.childNodes)}function D(t,o,e,a){e==null?t.style.removeProperty(o):t.style.setProperty(o,e,a?"important":"")}let M;function $(t){M=t}function dt(){if(!M)throw new Error("Function called outside component initialization");return M}function ct(t){dt().$$.on_mount.push(t)}const b=[],H=[];let j=[];const K=[],pt=Promise.resolve();let B=!1;function ht(){B||(B=!0,pt.then(et))}function T(t){j.push(t)}const V=new Set;let z=0;function et(){if(z!==0)return;const t=M;do{try{for(;z<b.length;){const o=b[z];z++,$(o),mt(o.$$)}}catch(o){throw b.length=0,z=0,o}for($(null),b.length=0,z=0;H.length;)H.pop()();for(let o=0;o<j.length;o+=1){const e=j[o];V.has(e)||(V.add(e),e())}j.length=0}while(b.length);for(;K.length;)K.pop()();B=!1,V.clear(),$(t)}function mt(t){if(t.fragment!==null){t.update(),E(t.before_update);const o=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,o),t.after_update.forEach(T)}}function vt(t){const o=[],e=[];j.forEach(a=>t.indexOf(a)===-1?o.push(a):e.push(a)),e.forEach(a=>a()),j=o}const wt=new Set;function it(t,o){t&&t.i&&(wt.delete(t),t.i(o))}function Q(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function yt(t,o){t.d(1),o.delete(t.key)}function gt(t,o,e,a,i,n,u,w,c,s,r,l){let d=t.length,m=n.length,h=d;const S={};for(;h--;)S[t[h].key]=h;const N=[],P=new Map,A=new Map,W=[];for(h=m;h--;){const p=l(i,n,h),y=e(p);let g=u.get(y);g?a&&W.push(()=>g.p(p,o)):(g=s(y,p),g.c()),P.set(y,N[h]=g),y in S&&A.set(y,Math.abs(h-S[y]))}const R=new Set,Y=new Set;function C(p){it(p,1),p.m(w,r),u.set(p.key,p),r=p.first,m--}for(;d&&m;){const p=N[m-1],y=t[d-1],g=p.key,q=y.key;p===y?(r=p.first,d--,m--):P.has(q)?!u.has(g)||R.has(g)?C(p):Y.has(q)?d--:A.get(g)>A.get(q)?(Y.add(g),C(p)):(R.add(q),d--):(c(y,u),d--)}for(;d--;){const p=t[d];P.has(p.key)||c(p,u)}for(;m;)C(N[m-1]);return E(W),N}function kt(t,o,e){const{fragment:a,after_update:i}=t.$$;a&&a.m(o,e),T(()=>{const n=t.$$.on_mount.map(X).filter(tt);t.$$.on_destroy?t.$$.on_destroy.push(...n):E(n),t.$$.on_mount=[]}),i.forEach(T)}function ft(t,o){const e=t.$$;e.fragment!==null&&(vt(e.after_update),E(e.on_destroy),e.fragment&&e.fragment.d(o),e.on_destroy=e.fragment=null,e.ctx=[])}function zt(t,o){t.$$.dirty[0]===-1&&(b.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[o/31|0]|=1<<o%31}function bt(t,o,e,a,i,n,u=null,w=[-1]){const c=M;$(t);const s=t.$$={fragment:null,ctx:[],props:n,update:x,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(c?c.$$.context:[])),callbacks:G(),dirty:w,skip_bound:!1,root:o.target||c.$$.root};u&&u(s.root);let r=!1;if(s.ctx=e?e(t,o.props||{},(l,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&i(s.ctx[l],s.ctx[l]=h)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](h),r&&zt(t,l)),d}):[],s.update(),r=!0,E(s.before_update),s.fragment=a?a(s.ctx):!1,o.target){if(o.hydrate){const l=ut(o.target);s.fragment&&s.fragment.l(l),l.forEach(_)}else s.fragment&&s.fragment.c();o.intro&&it(t.$$.fragment),kt(t,o.target,o.anchor),et()}$(c)}class jt{constructor(){L(this,"$$");L(this,"$$set")}$destroy(){ft(this,1),this.$destroy=x}$on(o,e){if(!tt(e))return x;const a=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return a.push(e),()=>{const i=a.indexOf(e);i!==-1&&a.splice(i,1)}}$set(o){this.$$set&&!rt(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}const _t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_t);const $t=[{id:1,link:"https://www.ozon.ru/product/fotogid-100-luchshih-ugolkov-mira-vzglyad-fotografa-uilson-kit-1416939312",img:"https://ir.ozone.ru/s3/multimedia-1-p/wc1000/6917259589.jpg"},{id:2,link:"https://www.ozon.ru/product/uchimsya-risovat-za-6-nedel-materialy-tehniki-idei-novoe-oformlenie-barber-barrington-964744532",img:"https://ir.ozone.ru/s3/multimedia-h/wc1000/6641436473.jpg"},{id:3,link:"https://www.ozon.ru/product/axe-excite-dezodorant-muzhskoy-sprey-aromat-kokosa-i-chernogo-pertsa-zashchita-48-chasov-150-ml-1597190445",img:"https://ir.ozone.ru/s3/multimedia-1-s/wc1000/7047071560.jpg"},{id:4,link:"https://www.ozon.ru/product/myshka-besprovodnaya-myshka-dlya-kompyutera-mysh-kompyuternaya-s-podsvetkoy-besshumnaya-1669135103/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-h/wc1000/7215141725.jpg"},{id:5,link:"https://www.ozon.ru/product/zubnaya-pasta-sensodyne-sensodin-mgnovennyy-effekt-dlya-chuvstvitelnyh-zubov-s-ftorom-75ml-uhod-za-913918205/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-b/wc1000/6664339775.jpg"},{id:6,link:"https://www.ozon.ru/product/remen-na-ruku-s-zatyazhkoy-dlya-fotoapparatov-canon-nikon-sony-olympus-fujifilm-pentax-1611569316/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-h/wc1000/7059212297.jpg"},{id:7,link:"https://www.ozon.ru/product/razgruzka-dlya-fotoapparata-remen-dlya-foto-i-video-kamery-raftel-1292509812/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-h/wc1000/7137968453.jpg"},{id:8,link:"https://www.ozon.ru/product/kistevoy-remen-dlya-fotoapparatov-neoprenovyy-universalnyy-1739865544/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7177888635.jpg"},{id:9,link:"https://www.ozon.ru/product/remen-bystrosemnyy-s-klipsami-dlya-fotoapparata-i-kamery-universalnyy-raftel-1674814965/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-p/wc1000/7127482417.jpg"},{id:10,link:"https://www.ozon.ru/product/shtativ-dlya-telefona-i-kamery-universalnyy-tripod-3110-teleskopicheskiy-ot-36-do-106-sm-1744969027/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-0/wc1000/7180126308.jpg"},{id:11,link:"https://www.ozon.ru/product/parfums-plus-duhi-maslyanye-molekula-02-blek-afgano-inviktus-blu-sedakshen-belyy-krokodil-30-ml-765707918/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-q/wc1000/6917580350.jpg"},{id:12,link:"https://www.ozon.ru/product/sirop-barinoff-makadamiya-dlya-kofe-kokteyley-desertov-limonada-i-morozhenogo-1l-1130786439/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-q/wc1000/7226548334.jpg"},{id:13,link:"https://www.ozon.ru/product/sirop-barinoff-vanil-dlya-kofe-kokteyley-desertov-limonada-i-morozhenogo-1l-190747859/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-l/wc1000/7226443785.jpg"},{id:14,link:"https://www.ozon.ru/product/sirop-barinoff-lesnoy-oreh-dlya-kofe-kokteyley-desertov-limonada-i-morozhenogo-1l-190693180/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7226543590.jpg"},{id:15,link:"https://www.ozon.ru/product/yaponskaya-zelenaya-matcha-premium-40-gramm-lycoris-1379726014/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-5/wc1000/7203511985.jpg"},{id:16,link:"https://www.ozon.ru/product/chay-listovoy-leaf-bliss-iz-12-vkusov-assorti-zelenyy-i-chernyy-podarok-muzhchine-na-den-1675603580/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-5/wc1000/7242840689.jpg"},{id:17,link:"https://www.ozon.ru/product/molochnyy-ulun-chay-zelenyy-listovoy-chay-premium-500-g-1548739349/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-3/wc1000/7043001375.jpg"},{id:18,link:"https://www.ozon.ru/product/mysh-besprovodnaya-machenike-l7-arctic-belyy-1680678914/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-5/wc1000/7222445525.jpg"},{id:19,link:"https://www.ozon.ru/product/fistashkovaya-pasta-bez-sahara-zelenyy-slon-100-g-1787795760/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7234421516.jpg"},{id:20,link:"https://www.ozon.ru/product/drip-kofe-makbush-brazil-arabika-100-8-sht-po-11-g-molotyy-kofe-v-drip-paketah-1569079998/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7029727777.jpg"},{id:21,link:"https://www.ozon.ru/product/drip-kofe-tasty-coffee-berri-10-sht-po-11-5-g-288435393/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-e/wc1000/7182246110.jpg"},{id:22,link:"https://www.ozon.ru/product/drip-kofe-10-sht-miks-kolumbiya-i-braziliya-po-12-gr-utro-coffee-molotyy-kofe-v-drip-paketah-1617170239/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-2/wc1000/7210424162.jpg"},{id:23,link:"https://www.ozon.ru/product/magnitnaya-fotobumaga-forceberg-a4-matovaya-10-listov-170199098/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-3/wc1000/6752165511.jpg"},{id:24,link:"https://www.ozon.ru/product/maska-igra-v-kalmara-nabor-iz-4h-shtuk-1608690915/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-m/wc1000/7056800230.jpg"},{id:25,link:"https://www.ozon.ru/product/komplekt-termobele-1662191021/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-l/wc1000/7104257337.jpg"},{id:26,link:"https://www.ozon.ru/product/komplekt-termobelya-mammothica-1123477522/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-p/wc1000/7216994569.jpg"},{id:27,link:"https://www.ozon.ru/product/povodok-dlya-sobak-krupnyh-porod-3-metra-1273687994/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-c/wc1000/7173403320.jpg"},{id:28,link:"https://www.ozon.ru/product/chipsy-nori-miks-vkusov-10-sht-h-3-g-1540689520/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-r/wc1000/7032005883.jpg"},{id:29,link:"https://www.ozon.ru/product/oreo-pechene-vanil-12-sht-po-38-g-1006251151/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-v/wc1000/7196660515.jpg"},{id:30,link:"https://www.ozon.ru/product/glyukoznyy-sirop-konditerskiy-43-1100-g-dlya-karameli-glazuri-1440497805/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-q/wc1000/7191510830.jpg"},{id:31,link:"https://www.ozon.ru/product/elektrogirlyanda-interernaya-nit-svetodiodnaya-100-lamp-10-m-pitanie-ot-porta-usb-i-akkumulyatora-ot-1714331426/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-g/wc1000/7151025688.jpg"},{id:32,link:"https://www.ozon.ru/product/elektrogirlyanda-interernaya-nit-svetodiodnaya-100-lamp-10-m-pitanie-ot-porta-usb-1-sht-1724078052/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-0/wc1000/7158808908.jpg"},{id:33,link:"https://www.ozon.ru/product/la-kri-shampun-penka-dlya-detey-s-0-let-dlya-nezhnoy-kozhi-flakon-150-ml-305502971/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-3/wc1000/7055901939.jpg"},{id:34,link:"https://www.ozon.ru/product/nabor-populyarnyh-muzhskih-duhov-5-sht-1398660852/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-p/wc1000/6908415325.jpg"},{id:35,link:"https://www.ozon.ru/product/nabor-dlya-volos-retsepty-babushki-agafi-shampun-balzam-obem-i-pyshnost-2-shtuki-h-350-ml-1233229312/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-q/wc1000/6795617462.jpg"},{id:36,link:"https://www.ozon.ru/product/kreatin-monogidrat-200-gr-creatine-monohydrate-poroshok-sportivnoe-pitanie-dlya-nabora-massy-i-rosta-1550610162/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7004936920.jpg"},{id:37,link:"https://www.ozon.ru/product/mixit-podarochnyy-nabor-dlya-litsa-ochishchayushchaya-maska-skrab-ohlazhdayushchaya-maska-ot-1702361745/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7196509189.jpg"},{id:38,link:"https://www.ozon.ru/product/mixit-shampun-dlya-volos-i-balzam-konditsioner-vosstanavlivayushchie-professionalnyy-nabor-1162215244/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-g/wc1000/7248969736.jpg"},{id:39,link:"https://www.ozon.ru/product/sheyker-dlya-sportivnogo-pitaniya-proteina-s-venchikom-i-setkoy-400-ml-vottler-297574045/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-q/wc1000/6789062474.jpg"},{id:40,link:"https://www.ozon.ru/product/izotonik-rline-isotonic-yabloko-450-g-310119158/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-r/wc1000/6976870119.jpg"},{id:41,link:"https://www.ozon.ru/product/protein-syvorotochnyy-supptrue-protein-solenaya-karamel-1000g-40-portsiy-632677070/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7147232360.jpg"},{id:42,link:"https://www.ozon.ru/product/podarochnyy-nabor-siropov-fun-n-joy-home-barrista-dlya-kofe-shokolad-solenaya-karamel-amaretto-1600282097/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-o/wc1000/7133854344.jpg"},{id:43,link:"https://www.ozon.ru/product/nabor-siropov-spoom-dlya-kofe-vanil-karamel-mindal-v-firmennoy-upakovke-3-sht-po-330-g-250-ml-3-sht-328235947/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-l/wc1000/7244358501.jpg"},{id:44,link:"https://www.ozon.ru/product/nabor-siropov-spoom-dlya-kofe-kokos-lesnoy-oreh-solenaya-karamel-v-firmennoy-upakovke-3-sht-po-330-g-213535818/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-1-v/wc1000/7244352895.jpg"},{id:45,link:"https://www.ozon.ru/product/sirop-bez-sahara-nizkokaloriynyy-chernoe-more-1-litr-597206284/?avtc=1&avte=4&avts=1736310629",img:"https://ir.ozone.ru/s3/multimedia-c/wc1000/6473515428.jpg"},{id:46,link:"https://www.ozon.ru/product/sirop-barinoff-popkorn-dlya-kofe-kokteyley-desertov-limonada-i-morozhenogo-1l-1130783209/?avtc=1&avte=4&avts=1736310630",img:"https://ir.ozone.ru/s3/multimedia-1-i/wc1000/7227321354.jpg"},{id:47,link:"https://www.ozon.ru/product/le-santi-le-santi-krem-lipidovosstanavlivayushchiy-dlya-suhoy-i-chustvitelnoy-kozhi-564567850/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-z/wc1000/7160877719.jpg"},{id:48,link:"https://www.ozon.ru/product/glitter-kandurin-pishchevoy-krasnoe-vino-fraktsiya-200-700-pm-pishchevaya-dobavka-krasitel-5-g-1616207278/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-w/wc1000/7063573352.jpg"},{id:49,link:"https://www.ozon.ru/product/payalnik-60-vt-keramicheskiy-nagrevatel-mednye-zhala-1750806985/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7187113294.jpg"},{id:50,link:"https://www.ozon.ru/product/2-tsvetnoe-plamya-dlya-kostra-i-kamina-magic-fire-colourful-flame-822991057/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-o/wc1000/6895468536.jpg"},{id:51,link:"https://www.ozon.ru/product/zelenaya-lazernaya-ukazka-moshchnaya-simpleshop-na-akkumulyatore-s-nasadkami-1670122343/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-a/wc1000/7193009062.jpg"},{id:52,link:"https://www.ozon.ru/product/ultrazvukovoy-datchik-dlya-izmereniya-rasstoyaniya-i-dvizheniya-hc-sr04-5v-dlya-arduino-942867025/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-y/wc1000/6878457322.jpg"},{id:53,link:"https://www.ozon.ru/product/zhidkokristallicheskiy-simvolnyy-displey-1602-16h2-znaka-siniy-arduino-1401539279/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-y/wc1000/6903245806.jpg"},{id:54,link:"https://www.ozon.ru/product/infrakrasnyy-datchik-obnaruzheniya-prepyatstviy-arduino-lm393-848776860/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-6/wc1000/6542196834.jpg"},{id:55,link:"https://www.ozon.ru/product/nabor-provoda-peremychki-dupont-120-shtuk-20-sm-dlya-arduino-stm32-nodemcu-raspberry-pi-1335575211/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-m/wc1000/6857616946.jpg"},{id:56,link:"https://www.ozon.ru/product/arduino-datchik-pulsa-i-urovnya-spo2-max30102-i2c-5-shtuk-1600585946/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-7/wc1000/6640829755.jpg"},{id:57,link:"https://www.ozon.ru/product/modul-datchika-temperatury-i-vlazhnosti-ky-015-hw-507-dlya-arduino-1634861775/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-w/wc1000/7079432684.jpg"},{id:58,link:"https://www.ozon.ru/product/modul-2-h-osevogo-dzhoystika-ky-023-hw-504-dlya-arduino-1633299329/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7079617549.jpg"},{id:59,link:"https://www.ozon.ru/product/datchik-atmosfernogo-davleniya-temperatury-vlazhnosti-gy-bme280-dlya-arduino-5v-1303010996/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-d/wc1000/6838504465.jpg"},{id:60,link:"https://www.ozon.ru/product/datchik-temperatury-tsifrovoy-termometr-ds18b20-germetichnyy-ip67-arduino-kabel-1-metr-1sht-1790086757/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-p/wc1000/7235042425.jpg"},{id:61,link:"https://www.ozon.ru/product/plata-rasshireniya-arduino-nano-1318422462/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-6/wc1000/6847209438.jpg"},{id:62,link:"https://www.ozon.ru/product/bespaechnaya-maketnaya-plata-arduino-breadboard-400-tochek-635861199/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-6/wc1000/6772055478.jpg"},{id:63,link:"https://www.ozon.ru/product/lazernyy-modul-ky-008-dlya-arduino-1633045669/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7079354782.jpg"},{id:64,link:"https://www.ozon.ru/product/1-sht-modul-gsmin-rc522-s-kartoy-i-brelokom-dlya-sredy-arduino-rfid-935149005/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-z/wc1000/6621505631.jpg"},{id:65,link:"https://www.ozon.ru/product/kovrik-dlya-myshki-bolshoy-80-x-40-sm-873055633/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1-q/wc1000/7227752498.jpg"},{id:66,link:"https://www.ozon.ru/product/klavio-loson-dlya-nogtey-stimulyator-rosta-na-osnove-hitozana-s-vitaminami-fl-20ml-737527983/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-1/wc1000/6364823569.jpg"},{id:67,link:"https://www.ozon.ru/product/klavio-loson-dlya-nogtey-zashchita-3v1-fl-20ml-743510559/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-i/wc1000/6334807470.jpg"},{id:68,link:"https://www.ozon.ru/product/klavio-loson-dlya-zashchity-i-ukrepleniya-povrezhdennyh-nogtey-fl-20ml-729171232/?avtc=1&avte=4&avts=1736311122",img:"https://ir.ozone.ru/s3/multimedia-e/wc1000/6334798826.jpg"},{id:69,link:"https://www.ozon.ru/product/klavio-loson-dlya-nogtey-vosstanavlivayushchiy-na-osnove-hitozana-fl-20ml-729329141/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-t/wc1000/6921621209.jpg"},{id:70,link:"https://www.ozon.ru/product/kosmetichka-1538032529/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-4/wc1000/6993732640.jpg"},{id:71,link:"https://www.ozon.ru/product/kakao-poroshok-naturalnyy-s-pertsem-rastvorimyy-napitok-225g-296709273/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-n/wc1000/7194785603.jpg"},{id:72,link:"https://www.ozon.ru/product/duhi-muzhskie-nabor-probnikov-5-sht-30-ml-1757835346/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-x/wc1000/7197197577.jpg"},{id:73,link:"https://www.ozon.ru/product/dakimakura-150sm-ot-geekmagazin-s-akterom-rayan-gosling-barbi-barbie-961788400/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-x/wc1000/6639060993.jpg"},{id:74,link:"https://www.ozon.ru/product/paparico-melnitsa-dlya-spetsiy-ruchnaya-2-v-1-vertikal-mehanicheskaya-dvoynaya-pertsemolka-i-solonka-389810961/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-e/wc1000/6859992326.jpg"},{id:75,link:"https://www.ozon.ru/product/build-house-polka-dlya-vannoy-komnaty-pryamaya-1-yarusnaya-1-sht-1631183987/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7059004359.jpg"},{id:76,link:"https://www.ozon.ru/product/nabor-aromaticheskih-diffuzorov-tobacco-vanilla-i-tsvetok-hlopka-idealnyy-dekor-dlya-doma-1745303610/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-u/wc1000/7180496742.jpg"},{id:77,link:"https://www.ozon.ru/product/homeets-forma-dlya-zapekaniya-pryamougolnaya-6-yach-14-sm-x-18-sm-1-sht-1543415868/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-y/wc1000/6998472970.jpg"},{id:78,link:"https://www.ozon.ru/product/menazhnitsa-derevyannaya-servirovochnaya-doska-iz-dereva-dlya-kuhni-731809985/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-s/wc1000/7184011924.jpg"},{id:79,link:"https://www.ozon.ru/product/nabor-iz-3-prozrachnyh-sousnikov-po-375-ml-1193197635/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-o/wc1000/6770632668.jpg"},{id:80,link:"https://www.ozon.ru/product/gazirovannye-napitki-assorti-limonadov-bez-sahara-lemonardo-330ml-6sht-842462727/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-4/wc1000/6545538028.jpg"},{id:81,link:"https://www.ozon.ru/product/barer-byuti-filtr-dlya-dusha-zashchita-ot-hlora-728911681/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-b/wc1000/7228215011.jpg"},{id:82,link:"https://www.ozon.ru/product/spetsii-i-pripravy-kooh-iz-16-vkusov-dlya-kuritsy-i-ryby-plova-i-kartofelya-universalnye-podarok-913970638/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-a/wc1000/7236817354.jpg"},{id:83,link:"https://www.ozon.ru/product/eskin-touch-skrab-dlya-tela-antitsellyulitnyy-solyanoy-s-naturalnymi-maslami-i-aromatom-lavandy-625244022/?advert=ACYBoF3hTN0V4kGEeMWKmbjwdNs72qc-bL0ExTjYPJsfpdiE7FWIPGM4REaY9lwd1VyN0VDMmQ_WGZpiS-mkpBkqikuUPs433CR2Do_Aau8_OQqd80NgoPxoJu1EqHMFpeNhLFb70SwvpJ_W5ECeEVWMBe6NMx0gPnV94w&avtc=1&avte=4&avts=1736312331",img:"https://ir.ozone.ru/s3/multimedia-1-z/wc1000/7051720607.jpg"},{id:84,link:"https://www.ozon.ru/product/riche-skrab-dlya-tela-antitsellyulitnyy-otshelushivayushchiy-latte-cacao-s-orehovymi-maslami-242785392/?avtc=1&avte=4&avts=1736311170",img:"https://ir.ozone.ru/s3/multimedia-1-6/wc1000/7050069150.jpg"},{id:85,link:"https://www.ozon.ru/product/komplekt-noskov-noski-i-sorochka-10-par-1418182045/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-4/wc1000/6918477268.jpg"},{id:86,link:"https://www.ozon.ru/product/kismit-beauty-holodnoe-antitsellyulitnoe-obertyvanie-dlya-pohudeniya-protiv-rastyazhek-i-otekov-184143782/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-6/wc1000/7074102282.jpg"},{id:87,link:"https://www.ozon.ru/product/noski-mystery-bubble-5-par-1271954633/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-s/wc1000/7030138168.jpg"},{id:88,link:"https://www.ozon.ru/product/riche-syvorotka-dlya-kontura-glaz-omolazhivayushchaya-eye-ampoule-uvlazhnyayushchee-sredstvo-1036630030/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-u/wc1000/7122637038.jpg"},{id:89,link:"https://www.ozon.ru/product/skrab-dlya-tela-saharnyy-antitsellyulitnyy-s-vishney-1581397276/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-a/wc1000/7246084546.jpg"},{id:90,link:"https://www.ozon.ru/product/riche-enzimnyy-antitsellyulitnyy-skrab-dlya-tela-mango-ananas-razglazhivayushchiy-rastyazhki-242807269/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-w/wc1000/7050168752.jpg"},{id:91,link:"https://www.ozon.ru/product/riche-holodnoe-antitsellyulitnoe-obertyvanie-frozen-berry-dlya-pohudeniya-257872528/?avtc=1&avte=4&avts=1736312307",img:"https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7050172292.jpg"},{id:92,link:"https://www.ozon.ru/product/energeticheskiy-napitok-monster-energy-ultra-white-zh-b-6-sht-h-330-ml-kitay-1725085832/?avtc=1&avte=4&avts=1736312981",img:"https://ir.ozone.ru/s3/multimedia-1-v/wc1000/7212486847.jpg"}],xt={items:$t};function U(t,o,e){const a=t.slice();return a[8]=o[e],a[10]=e,a}function Z(t,o){let e,a,i,n,u,w,c,s,r,l,d;return{key:t,first:null,c(){e=f("div"),a=f("div"),i=f("div"),n=f("img"),w=F(),c=f("div"),s=f("a"),r=ot("Ссылка"),d=F(),J(n.src,u=o[8].img)||v(n,"src",u),v(n,"alt","Gift preview"),v(n,"class","svelte-n3742h"),v(i,"class","gift-image svelte-n3742h"),v(s,"href",l=o[8].link),v(s,"target","_blank"),v(s,"rel","noopener noreferrer"),v(s,"class","new-todo-info svelte-n3742h"),v(c,"class","gift-link svelte-n3742h"),v(a,"class","gift-content svelte-n3742h"),v(e,"class","gift-card svelte-n3742h"),D(e,"transform","translateY("+o[1][o[10]]+"px)"),this.first=e},m(m,h){O(m,e,h),k(e,a),k(a,i),k(i,n),k(a,w),k(a,c),k(c,s),k(s,r),k(e,d)},p(m,h){o=m,h&1&&!J(n.src,u=o[8].img)&&v(n,"src",u),h&1&&l!==(l=o[8].link)&&v(s,"href",l),h&3&&D(e,"transform","translateY("+o[1][o[10]]+"px)")},d(m){m&&_(e)}}}function Mt(t){let o,e,a,i=[],n=new Map,u,w,c=Q(t[0]);const s=r=>r[8].id;for(let r=0;r<c.length;r+=1){let l=U(t,c,r),d=s(l);n.set(d,i[r]=Z(d,l))}return{c(){o=f("header"),o.innerHTML='<h1 class="svelte-n3742h">Nikita&#39;s Birthday Wishlist</h1> <h3 class="new-todo svelte-n3742h">🤩 Квест 🤩</h3> <h4 class="new-todo-info svelte-n3742h">Всем привет!</h4> <h4 class="new-todo-info svelte-n3742h">На свой ДР я захотел устроить для себя небольшой квест,</h4> <h4 class="new-todo-info svelte-n3742h">в котором организаторами будете непосредственно вы.</h4> <h4 class="new-todo-info svelte-n3742h">Ближайшие пару недель я буду в Питере и хочу</h4> <h4 class="new-todo-info svelte-n3742h">посетить самые разные его уголки, а может даже</h4> <h4 class="new-todo-info svelte-n3742h">и его окрестности (Выборг, Пушкин).</h4> <h4 class="new-todo-info svelte-n3742h">Для этого вы можете заказать мне подарочек</h4> <h4 class="new-todo-info svelte-n3742h">в любой пункт выдачи Озона, а я доберусь до него</h4> <h4 class="new-todo-info svelte-n3742h">и сделаю селфи в этом месте, когда подарочек заберу.</h4> <h4 class="new-todo-info svelte-n3742h">На этой странице список штук, которые я хочу,</h4> <h4 class="new-todo-info svelte-n3742h">но я буду рад совершенно любой мелочи (особенно с волками).</h4> <h4 class="new-todo-info svelte-n3742h">Надеюсь, из этого выйдет интересное приключение.</h4> <h4 class="new-todo-info svelte-n3742h">Чтобы прислать код для получения,</h4> <h4 class="new-todo-info svelte-n3742h">можно написать мне в тг: <a href="https://t.me/MultiFaCs">@MultiFaCs</a></h4> <h4 class="new-todo-info svelte-n3742h">&lt;3</h4>',e=F(),a=f("section");for(let r=0;r<i.length;r+=1)i[r].c();v(o,"class","header rounding"),v(a,"class","gifts-container svelte-n3742h")},m(r,l){O(r,o,l),O(r,e,l),O(r,a,l);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(a,null);u||(w=lt(window,"hashchange",t[2]),u=!0)},p(r,[l]){l&3&&(c=Q(r[0]),i=gt(i,l,s,1,r,c,n,a,yt,Z,null,U))},i:x,o:x,d(r){r&&(_(o),_(e),_(a));for(let l=0;l<i.length;l+=1)i[l].d();u=!1,w()}}}function Et(t){let o=t.length,e;for(;o>0;)e=Math.floor(Math.random()*o),o--,[t[o],t[e]]=[t[e],t[o]];return t}function Nt(){return Math.floor(Math.random()*30)-50}function qt(t,o,e){let a,i=[],n=[],u=new Set;try{i=xt.items,Et(i)}catch{i=[]}const w=()=>{};function c(){u.size>=i.length&&u.clear();let r=Array.from(Array(i.length).keys()).filter(d=>!u.has(d)),l=r[Math.floor(Math.random()*r.length)];return u.add(l),i[l]}function s(){e(3,n=Array(i.length).fill(null).map(()=>c()))}return ct(()=>{s()}),t.$$.update=()=>{if(t.$$.dirty&1)try{localStorage.setItem("todos-svelte",JSON.stringify(i))}catch{}t.$$.dirty&8&&e(1,a=n.map(()=>Nt()))},[i,a,w,n]}class It extends jt{constructor(o){super(),bt(this,o,qt,Mt,st,{})}}window.todomvc=new It({target:document.querySelector(".todoapp")});