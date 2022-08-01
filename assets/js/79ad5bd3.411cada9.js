"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"overview",title:"Overview",sidebar_position:1},i="Developers Overview",s={unversionedId:"developers/overview",id:"version-3/developers/overview",title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-3/02-developers/01-overview.md",sourceDirName:"02-developers",slug:"/developers/overview",permalink:"/3/developers/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/01-overview.md",tags:[],version:"3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"version-3/docs",previous:{title:"Introduction",permalink:"/3/"},next:{title:"Profile",permalink:"/3/developers/types/profiles/profile"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Performing transactions",id:"performing-transactions",level:2},{value:"Querying data",id:"querying-data",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developers-overview"},"Developers Overview"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/3/"},"Desmos")," aims to provide developers a platform on which they will be able to create decentralized and\ncensorship-resistant social network applications.\nTo do so, we've implemented a set of transactions that are useful to perform the most common operations related to this world.\nIf you want to know more about the base concepts of a blockchain and understand some key points, please take a look a the ",(0,o.kt)("a",{parentName:"p",href:"/3/developers/faq"},"FAQ page"),". "),(0,o.kt)("h2",{id:"glossary"},"Glossary"),(0,o.kt)("p",null,"Before digging into the available transactions, let's clarify the meaning of some terms that we will be using a lot."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"profile")," contains a series of (personal) data associated to an account that a user can create on the chain;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"post")," is a public message that everyone can read on the chain.",(0,o.kt)("br",{parentName:"p"}),"\n","When creating it you can also specify if it allows\nto be commented on or not;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"comment")," is a post that has been linked to a parent post;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"reaction")," is the way that allows users to express a feeling on a specific post;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"subspace"),' is a "zone" where a specific app or more apps can live on and share contents;'))),(0,o.kt)("p",null,"If you want to know more about how we store the data on-chain and all the chain types, please refer to\nthe ",(0,o.kt)("strong",{parentName:"p"},'"Types" section'),"."),(0,o.kt)("h2",{id:"performing-transactions"},"Performing transactions"),(0,o.kt)("p",null,"If you want to know more about performing transactions to change the current chain state, please go to the ",(0,o.kt)("strong",{parentName:"p"},'"Transactions" section'),"."),(0,o.kt)("h2",{id:"querying-data"},"Querying data"),(0,o.kt)("p",null,"If you want to know all the GRPC endpoints and CLI commands available to query the existing chain state and the\nsaved data, please go to the ",(0,o.kt)("strong",{parentName:"p"},'"Queries" section'),"."))}d.isMDXComponent=!0}}]);