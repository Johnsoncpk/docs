"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,m=u["".concat(l,".").concat(p)]||u[p]||v[p]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},i="Validators Overview",s={unversionedId:"validators/overview",id:"validators/overview",title:"Overview",description:"Introduction",source:"@site/docs/04-validators/01-overview.md",sourceDirName:"04-validators",slug:"/validators/overview",permalink:"/next/validators/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/04-validators/01-overview.md",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Use RocksDB",permalink:"/next/fullnode/rocksdb-installation"},next:{title:"Setup",permalink:"/next/validators/setup"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Seek legal advice",id:"seek-legal-advice",level:2},{value:"Community",id:"community",level:2}],c={toc:d};function v(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validators-overview"},"Validators Overview"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/"},"Desmos")," is based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/tree/master/docs/introduction"},"Tendermint"),", which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key."),(0,o.kt)("p",null,'Validator candidates can bond their own Desmos tokens and have Desmos tokens "delegated", or staked, to them by token holders. Desmos will have 150 validators, but over time this will increase to 300 validators depends on the network performance and needs. The validators are determined by who has the most stake delegated to them\u200a\u2014\u200athe top 150 validator candidates with the most stake will become Desmos validators.'),(0,o.kt)("p",null,"If validators double sign, are frequently offline or do not participate in governance, their staked Desmos tokens (including the tokens of users that delegated to them) can be slashed. The penalty depends on the severity of the violation."),(0,o.kt)("h2",{id:"seek-legal-advice"},"Seek legal advice"),(0,o.kt)("p",null,"Seek legal advice if you intend to run a Validator."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"Discuss the finer details of being a validator on our community chat:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/J6VsHDT"},"Validators Chat"))))}v.isMDXComponent=!0}}]);