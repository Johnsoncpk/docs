"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[28994],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24186:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],l={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},i="x/fees",p={unversionedId:"developers/modules/fees/overview",id:"developers/modules/fees/overview",title:"Overview",description:"Abstract",source:"@site/docs/02-developers/02-modules/fees/01-overview.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/overview",permalink:"/next/developers/modules/fees/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/fees/01-overview.md",tags:[],version:"current",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/next/developers/modules/reports/client"},next:{title:"Concepts",permalink:"/next/developers/modules/fees/concepts"}},c={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xfees"},(0,a.kt)("inlineCode",{parentName:"h1"},"x/fees")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This document specified the fees module of Desmos. "),(0,a.kt)("p",null,"The module allows on-chain governance to specify a minimum amount of fees that users need to pay when broadcasting specific message types. "),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/fees/concepts"},"Concepts")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/fees/concepts#minimum-fees"},"Minimum Fee")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/fees/state"},"State"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/fees/ante-handlers"},"AnteHandlers"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/fees/params"},"Parameters"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/fees/client"},"Client")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/fees/client#cli"},"CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/fees/client#grpc"},"gRPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/fees/client#rest"},"REST"))))))}d.isMDXComponent=!0}}]);