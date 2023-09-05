(function(){"use strict";var e={4829:function(e,n,r){var t=r(9242),o=r(3396);const i={class:"wrapper"};function u(e,n,r,t,u,c){const s=(0,o.up)("Title"),a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",i,[(0,o.Wm)(s)]),(0,o.Wm)(a)],64)}const c={class:"title"};function s(e,n,r,t,i,u){return(0,o.wg)(),(0,o.iD)("h1",c,"School Groups")}var a={},f=r(89);const l=(0,f.Z)(a,[["render",s],["__scopeId","data-v-5b6cbfce"]]);var d=l,p={components:{Title:d}};const h=(0,f.Z)(p,[["render",u]]);var v=h,g=r(5431);(0,g.z)("/SchoolGroups/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=r(1120),b=(r(7658),r(65)),y=(0,b.MT)({state:{persons:[],nbGroup:0},getters:{getPersons(e){return e.persons},getNbGroup(e){return e.nbGroup}},mutations:{addPerson(e,n){e.persons.push(n)},removePerson(e,n){e.persons.splice(n,1)},updateGroup(e,n){e.nbGroup=n}},actions:{},modules:{}});(0,t.ri)(v).use(y).use(m.Z).mount("#app")},1120:function(e,n,r){var t=r(2483);const o=[{path:"/",redirect:()=>"home"},{path:"/home",name:"home",component:()=>r.e(80).then(r.bind(r,1624))},{path:"/groups",name:"groups",component:()=>r.e(782).then(r.bind(r,509))}],i=(0,t.p7)({history:(0,t.PO)("/SchoolGroups/"),routes:o});n.Z=i}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,i){if(!t){var u=1/0;for(f=0;f<e.length;f++){t=e[f][0],o=e[f][1],i=e[f][2];for(var c=!0,s=0;s<t.length;s++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(c=!1,i<u&&(u=i));if(c){e.splice(f--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,o,i]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{80:"2c5df4a7",782:"8cf1e5d6"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{80:"5c97889a",782:"10f78eac"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="schoolgroups:";r.l=function(t,o,i,u){if(e[t])e[t].push(o);else{var c,s;if(void 0!==i)for(var a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+i){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",n+i),c.src=t),e[t]=[o];var d=function(n,r){c.onerror=c.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/SchoolGroups/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,t,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(r){if(i.onerror=i.onload=null,"load"===r.type)t();else{var u=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=c,i.parentNode&&i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=u,i.href=n,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=r[t],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){o=u[t],i=o.getAttribute("data-href");if(i===e||i===n)return o}},t=function(t){return new Promise((function(o,i){var u=r.miniCssF(t),c=r.p+u;if(n(u,c))return o();e(t,c,null,o,i)}))},o={143:0};r.f.miniCss=function(e,n){var r={80:1,782:1};o[e]?n.push(o[e]):0!==o[e]&&r[e]&&n.push(o[e]=t(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(r,t){o=e[n]=[r,t]}));t.push(o[2]=i);var u=r.p+r.u(n),c=new Error,s=function(t){if(r.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}};r.l(u,s,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,u=t[0],c=t[1],s=t[2],a=0;if(u.some((function(n){return 0!==e[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var f=s(r)}for(n&&n(t);a<u.length;a++)i=u[a],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(f)},t=self["webpackChunkschoolgroups"]=self["webpackChunkschoolgroups"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(4829)}));t=r.O(t)})();
//# sourceMappingURL=app.1d97c198.js.map