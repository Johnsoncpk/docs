!function(){"use strict";var e,f,a,c,d,b={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=b,n.c=t,e=[],n.O=function(f,a,c,d){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],c=e[u][1],d=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=c();void 0!==o&&(f=o)}}return f}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,c,d]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(f){b[f]=function(){return e[f]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({31:"79affdc0",53:"935f2afb",189:"6b126e50",193:"4bfc18b2",235:"85001679",310:"5f0ee14d",444:"fa6c138a",481:"ef3424f1",543:"f926ba2c",593:"4d2ac767",661:"42964f3b",729:"860801bc",775:"d09229b1",854:"93e43e22",857:"ae724e9d",868:"d11d1031",959:"85846968",1105:"7f74471f",1152:"7abd05cb",1410:"5813001f",1438:"36a93236",1442:"6e5f04dc",1455:"bf98cf93",1492:"77969f75",1515:"57fb4fc3",1570:"dabc73d7",1755:"c0e38901",1781:"2e130b63",1806:"a76c76af",1819:"4fff876b",1909:"c50680b2",2123:"a23111aa",2173:"123bc61a",2199:"2097ac36",2351:"7ab7d277",2580:"a71f6e15",2630:"179b344f",2685:"ce1da695",2725:"4e7a3b0a",2771:"fe430f68",2938:"0202f4b8",3028:"042df2bb",3032:"c94b2a52",3087:"8ce70487",3099:"70cd33a5",3108:"0e9e939b",3174:"11138753",3314:"f6e0d00f",3408:"1dc87bc3",3413:"7a7baf9b",3433:"6dd74155",3597:"fa14dfa4",3697:"c68cd3b2",3708:"321256d0",3727:"3a621fae",3767:"93e06a13",3886:"c053b86c",3990:"5786a9c5",4002:"a7778447",4038:"c120c2f5",4088:"56027855",4156:"22febb5a",4165:"8980eb38",4171:"a2273e8c",4228:"d8bfcd3e",4274:"1b7290fb",4295:"02a56038",4305:"178ab2cc",4346:"7aec8988",4371:"11dec914",4478:"31ae66fe",4514:"a86d5361",4561:"65e9964c",4567:"b4a8befa",4628:"ddd3e99e",4716:"19471acf",4844:"690a58fe",4900:"e22b38c0",5017:"43e306ce",5050:"9622c826",5173:"9059af5a",5210:"e1e31221",5332:"4eeabde5",5338:"d4783976",5355:"64e95188",5371:"bba0483b",5446:"b20dc332",5698:"3217a9ce",5749:"3faaa1ff",5787:"bcb3b940",5790:"188eb7f0",5875:"c13efcd7",5902:"d43ed005",5966:"efcd75d6",5993:"b1a4810e",6005:"2d7835d7",6068:"554c7014",6107:"ce332c81",6161:"d0e1ec8f",6175:"6522a234",6181:"d9881868",6241:"fed7d42c",6274:"aec5c99f",6325:"1c63ddd7",6483:"dbc0b342",6565:"5858d508",6601:"6b65ac47",6695:"e01384f5",6797:"f6e257f6",6801:"baa9c19e",6805:"cdb65c85",6902:"44e1bcb1",6948:"39dd0018",6970:"e7039968",6982:"0486ed6b",7051:"b13faa64",7130:"dfdffd26",7184:"3f227556",7260:"ee752b7d",7276:"e653c2fd",7288:"03d9e8e6",7322:"2333e79b",7386:"c5cfa935",7402:"628f851d",7481:"e6c1b019",7554:"519ec747",7557:"b487dca1",7586:"1b433400",7660:"55cbbb7a",7792:"a87c579f",7865:"f656720e",7918:"17896441",7943:"c4de80f8",8012:"a03206a6",8031:"501734c2",8037:"714d427c",8052:"8eecbeed",8104:"c72f7d5f",8137:"b04d5987",8172:"d5e5ef42",8195:"1f36536f",8411:"2ad900aa",8427:"db29c564",8500:"5d70a26c",8516:"9e338310",8521:"304ecae7",8551:"a7f51dce",8798:"a6c72019",8810:"6ffe3a9c",8812:"de6d9531",8895:"9a2eeab7",9294:"acf72060",9351:"000bb25b",9365:"7ddff782",9407:"ac0aeaaf",9514:"1be78505",9522:"826dd745",9620:"e768888f",9728:"84883833",9786:"2ae29c5f",9838:"31ae8f15",9861:"e5c21a28",9894:"e29e6665"}[e]||e)+"."+{31:"5516e0b2",53:"b2b4baee",95:"7b925716",189:"7fad56c9",193:"e1a30d35",235:"d96dcff0",310:"5b3718c0",444:"4aa0d2ca",481:"577fe627",543:"643241cb",593:"681897cb",661:"bfbfa3e9",729:"6e8bcfd9",775:"ccc33b18",854:"de6aebe3",857:"14b8c9cd",868:"ec936029",959:"6d68dfd6",1105:"aaa02b1b",1152:"04bde08c",1410:"5d89f394",1438:"1c148b5e",1442:"41e0b9a2",1455:"ac03e1c2",1492:"784bd869",1515:"06f37e33",1570:"7fe10a19",1755:"b6eea792",1781:"6777fe5f",1806:"5ce3802f",1819:"5f878468",1909:"292450e8",2123:"9b17fa3f",2173:"75a74b66",2199:"e0e20698",2351:"411e4881",2580:"b2b8425f",2630:"ee6b9d13",2685:"b3fad697",2725:"c914d962",2771:"819bec74",2938:"a5ed0aa4",3028:"c965839f",3032:"bc2a90b1",3087:"f9bdf9b4",3099:"a85d84ca",3108:"692504e1",3174:"483a2537",3314:"4d39b2e1",3408:"fe9eaa9c",3413:"9f8ea3bb",3433:"911296cf",3597:"7a170ca8",3697:"be5726ee",3708:"006e58c7",3727:"f6929c4f",3767:"e72bfe7c",3886:"748bdceb",3990:"ac8afeea",4002:"7b8bef24",4034:"e98c433f",4038:"e9a08ba5",4088:"26390d82",4156:"54dd35c0",4165:"5846cccb",4171:"2398d2a6",4228:"21133cfd",4274:"220c2804",4295:"489135d9",4300:"fb9802bc",4305:"0ecbfb44",4346:"f1d1bed3",4371:"1d4e63b7",4478:"d6eea5a0",4514:"dd5125cf",4561:"30c4c182",4567:"b02aa8cc",4608:"2ca45fe5",4628:"4b558575",4716:"46485e01",4844:"a6c25025",4900:"6abf37a2",5017:"409a20a4",5050:"abeab66b",5173:"c5bd5f1a",5210:"099fda79",5256:"1568cb88",5332:"f675b35f",5338:"497b64e2",5355:"0f79764b",5371:"f5f6e55e",5446:"6dfced27",5698:"1cc5adf6",5749:"87441b76",5787:"bc0b7ddf",5790:"14d30264",5875:"41d4c8b8",5902:"29c41f2b",5966:"254dd0e7",5993:"a581b09e",6005:"77c10836",6068:"cdb26fed",6107:"ecabf492",6161:"3b9408e8",6175:"6b7783b1",6181:"3f0b3942",6241:"b40c6b13",6274:"585a24ea",6325:"259343d4",6483:"43f28674",6565:"f2eb2a4c",6601:"280d6994",6695:"0161e240",6797:"5b80878c",6801:"a770cae8",6805:"134cbb23",6902:"4484dfbe",6945:"5a4f9752",6948:"1cece8b8",6970:"099cba0d",6982:"3239085d",7051:"5067feec",7130:"fb8b7315",7184:"65e664d0",7260:"c4f0f839",7276:"164dce66",7288:"bdda84f5",7322:"7d5d3f37",7386:"165b1d29",7402:"913cb4c4",7481:"834c3fc4",7554:"3fcc34bb",7557:"70554176",7586:"d87a2774",7660:"a6ebde7d",7792:"b0e3634b",7865:"34691d66",7918:"39cfa02d",7943:"b0df9268",8012:"7f3b2b96",8031:"ce5ab9c1",8037:"8cb22a92",8052:"c96731cb",8104:"e360b1ea",8137:"218e2925",8172:"b4650bcb",8195:"9c491be1",8411:"d1952a95",8427:"314c2129",8500:"a1a7e72c",8516:"3fcf89e5",8521:"47a790a7",8551:"e9d75290",8798:"0909f315",8810:"93c2ea0e",8812:"70ade0de",8895:"d91cc102",9294:"eb7838c8",9351:"dab95aff",9365:"74618734",9407:"9d68109b",9514:"caa1cdff",9522:"0e25025a",9620:"93b62b49",9728:"1d018959",9786:"6f98fb83",9838:"f879c3d1",9861:"fe73e4d6",9894:"00d907a1"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.cefffb6d.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},d="desmos-docs:",n.l=function(e,f,a,b){if(c[e])c[e].push(f);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+a),t.src=e),c[e]=[f];var s=function(f,a){t.onerror=t.onload=null,clearTimeout(l);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),f)return f(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={11138753:"3174",17896441:"7918",56027855:"4088",84883833:"9728",85001679:"235",85846968:"959","79affdc0":"31","935f2afb":"53","6b126e50":"189","4bfc18b2":"193","5f0ee14d":"310",fa6c138a:"444",ef3424f1:"481",f926ba2c:"543","4d2ac767":"593","42964f3b":"661","860801bc":"729",d09229b1:"775","93e43e22":"854",ae724e9d:"857",d11d1031:"868","7f74471f":"1105","7abd05cb":"1152","5813001f":"1410","36a93236":"1438","6e5f04dc":"1442",bf98cf93:"1455","77969f75":"1492","57fb4fc3":"1515",dabc73d7:"1570",c0e38901:"1755","2e130b63":"1781",a76c76af:"1806","4fff876b":"1819",c50680b2:"1909",a23111aa:"2123","123bc61a":"2173","2097ac36":"2199","7ab7d277":"2351",a71f6e15:"2580","179b344f":"2630",ce1da695:"2685","4e7a3b0a":"2725",fe430f68:"2771","0202f4b8":"2938","042df2bb":"3028",c94b2a52:"3032","8ce70487":"3087","70cd33a5":"3099","0e9e939b":"3108",f6e0d00f:"3314","1dc87bc3":"3408","7a7baf9b":"3413","6dd74155":"3433",fa14dfa4:"3597",c68cd3b2:"3697","321256d0":"3708","3a621fae":"3727","93e06a13":"3767",c053b86c:"3886","5786a9c5":"3990",a7778447:"4002",c120c2f5:"4038","22febb5a":"4156","8980eb38":"4165",a2273e8c:"4171",d8bfcd3e:"4228","1b7290fb":"4274","02a56038":"4295","178ab2cc":"4305","7aec8988":"4346","11dec914":"4371","31ae66fe":"4478",a86d5361:"4514","65e9964c":"4561",b4a8befa:"4567",ddd3e99e:"4628","19471acf":"4716","690a58fe":"4844",e22b38c0:"4900","43e306ce":"5017","9622c826":"5050","9059af5a":"5173",e1e31221:"5210","4eeabde5":"5332",d4783976:"5338","64e95188":"5355",bba0483b:"5371",b20dc332:"5446","3217a9ce":"5698","3faaa1ff":"5749",bcb3b940:"5787","188eb7f0":"5790",c13efcd7:"5875",d43ed005:"5902",efcd75d6:"5966",b1a4810e:"5993","2d7835d7":"6005","554c7014":"6068",ce332c81:"6107",d0e1ec8f:"6161","6522a234":"6175",d9881868:"6181",fed7d42c:"6241",aec5c99f:"6274","1c63ddd7":"6325",dbc0b342:"6483","5858d508":"6565","6b65ac47":"6601",e01384f5:"6695",f6e257f6:"6797",baa9c19e:"6801",cdb65c85:"6805","44e1bcb1":"6902","39dd0018":"6948",e7039968:"6970","0486ed6b":"6982",b13faa64:"7051",dfdffd26:"7130","3f227556":"7184",ee752b7d:"7260",e653c2fd:"7276","03d9e8e6":"7288","2333e79b":"7322",c5cfa935:"7386","628f851d":"7402",e6c1b019:"7481","519ec747":"7554",b487dca1:"7557","1b433400":"7586","55cbbb7a":"7660",a87c579f:"7792",f656720e:"7865",c4de80f8:"7943",a03206a6:"8012","501734c2":"8031","714d427c":"8037","8eecbeed":"8052",c72f7d5f:"8104",b04d5987:"8137",d5e5ef42:"8172","1f36536f":"8195","2ad900aa":"8411",db29c564:"8427","5d70a26c":"8500","9e338310":"8516","304ecae7":"8521",a7f51dce:"8551",a6c72019:"8798","6ffe3a9c":"8810",de6d9531:"8812","9a2eeab7":"8895",acf72060:"9294","000bb25b":"9351","7ddff782":"9365",ac0aeaaf:"9407","1be78505":"9514","826dd745":"9522",e768888f:"9620","2ae29c5f":"9786","31ae8f15":"9838",e5c21a28:"9861",e29e6665:"9894"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var d=new Promise((function(a,d){c=e[f]=[a,d]}));a.push(c[2]=d);var b=n.p+n.u(f),t=new Error;n.l(b,(function(a){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,d,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(f){return 0!==e[f]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(f&&f(a);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[b[o]]=0;return n.O(u)},a=self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();