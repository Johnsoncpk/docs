"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[19977],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=d(r),p=o,m=v["".concat(l,".").concat(p)]||v[p]||u[p]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},53350:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"overview",title:"Overview",sidebar_position:1},l="Validators Overview",d={unversionedId:"validators/overview",id:"version-3/validators/overview",title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-3/04-validators/01-overview.md",sourceDirName:"04-validators",slug:"/validators/overview",permalink:"/3/validators/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/04-validators/01-overview.md",tags:[],version:"3",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"version-3/docs",previous:{title:"Use Cosmovisor",permalink:"/3/fullnode/cosmovisor"},next:{title:"Setup",permalink:"/3/validators/setup"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Seek legal advice",id:"seek-legal-advice",level:2},{value:"Community",id:"community",level:2}],v={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validators-overview"},"Validators Overview"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/3/"},"Desmos")," is based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/tree/master/docs/introduction"},"Tendermint"),", which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key."),(0,i.kt)("p",null,'Validator candidates can bond their own Desmos tokens and have Desmos tokens "delegated", or staked, to them by token holders. Desmos will have 150 validators, but over time this will increase to 300 validators depends on the network performance and needs. The validators are determined by who has the most stake delegated to them\u200a\u2014\u200athe top 150 validator candidates with the most stake will become Desmos validators.'),(0,i.kt)("p",null,"If validators double sign, are frequently offline or do not participate in governance, their staked Desmos tokens (including the tokens of users that delegated to them) can be slashed. The penalty depends on the severity of the violation."),(0,i.kt)("h2",{id:"seek-legal-advice"},"Seek legal advice"),(0,i.kt)("p",null,"Seek legal advice if you intend to run a Validator."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Discuss the finer details of being a validator on our community chat:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/J6VsHDT"},"Validators Chat"))))}p.isMDXComponent=!0}}]);