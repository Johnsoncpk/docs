"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=l,c=u["".concat(i,".").concat(f)]||u[f]||d[f]||s;return r?a.createElement(c,n(n({ref:t},m),{},{components:r})):a.createElement(c,n({ref:t},m))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,n=new Array(s);n[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,n[1]=o;for(var p=2;p<s;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),l=(r(67294),r(3905));const s={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},n="x/profiles",o={unversionedId:"developers/modules/profiles/overview",id:"version-4.2.0/developers/modules/profiles/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/01-overview.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/overview",permalink:"/developers/modules/profiles/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/01-overview.md",tags:[],version:"4.2.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Overview",permalink:"/developers/overview"},next:{title:"Concepts",permalink:"/developers/modules/profiles/concepts"}},i={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xprofiles"},(0,l.kt)("inlineCode",{parentName:"h1"},"x/profiles")),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"This document specifies the profiles module of Desmos.  "),(0,l.kt)("p",null,"This module allows the creation and management of an on-chain social profile that can be connected to external chains and services."),(0,l.kt)("h2",{id:"contents"},"Contents"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/profiles/concepts"},"Concepts")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/concepts#profile"},"Profile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/concepts#dtag-transfer-request"},"DTag Transfer Request")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/concepts#chain-link"},"Chain Link")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/concepts#default-external-address"},"Default External Address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/concepts#application-link"},"Application Link")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/profiles/state"},"State")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/state#profile"},"Profile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/state#dtag-transfer-request"},"DTag Transfer Request")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/state#chain-link"},"Chain Link")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/state#default-external-address"},"Default External Address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/state#application-link"},"Application Link")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/state#ibc-port"},"IBC Port")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/profiles/messages"},"Msg Service")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgsaveprofile"},"Msg/SaveProfile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgdeleteprofile"},"Msg/DeleteProfile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgrequestdtagtransfer"},"Msg/RequestDTagTransfer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgcanceldtagtransferrequest"},"Msg/CancelDTagTransferRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgacceptdtagtransferrequest"},"Msg/AcceptDTagTransferRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgrefusedtagtransferrequest"},"Msg/RefuseDTagTransferRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msglinkchainaccount"},"Msg/LinkChainAccount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgunlinkchainaccount"},"Msg/UnlinkChainAccount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgsetdefaultexternaladdress"},"Msg/SetDefaultExternalAddress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msglinkapplication"},"Msg/LinkApplication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/messages#msgunlinkapplication"},"Msg/UnlinkApplication")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/profiles/events"},"Events")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/events#handlers"},"Handlers")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/events#keeper"},"Keeper")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/profiles/params"},"Parameters"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/profiles/client"},"Client")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/client#cli"},"CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/client#grpc"},"gRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/client#rest"},"REST"))))))}d.isMDXComponent=!0}}]);