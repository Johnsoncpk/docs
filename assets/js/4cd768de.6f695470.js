"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59248],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(r),c=a,v=u["".concat(p,".").concat(c)]||u[c]||d[c]||n;return r?o.createElement(v,s(s({ref:t},m),{},{components:r})):o.createElement(v,s({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59191:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),s=["components"],l={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},p="x/reports",i={unversionedId:"developers/modules/reports/overview",id:"version-4.1.0/developers/modules/reports/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reports/01-overview.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/overview",permalink:"/developers/modules/reports/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reports/01-overview.md",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/developers/modules/reactions/client"},next:{title:"Concepts",permalink:"/developers/modules/reports/concepts"}},m={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xreports"},(0,n.kt)("inlineCode",{parentName:"h1"},"x/reports")),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"This document specifies the reports module of Desmos.  "),(0,n.kt)("p",null,"This module handles the creation and management of a reporting system toward content and users."),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/concepts"},"Concepts")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/concepts#report"},"Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/concepts#user-target"},"User Target")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/concepts#post-target"},"Post Target")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/concepts#reason"},"Reason")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/state"},"State")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/state#next-report-id"},"Next Report ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/state#report"},"Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/state#posts-report"},"Post Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/state#user-report"},"User Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/state#next-reason-id"},"Next Reason ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/state#reason"},"Reason")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/messages"},"Msg Service")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/messages#msgcreatereport"},"Msg/CreateReport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/messages#msgdeletereport"},"Msg/DeleteReport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/messages#msgsupportstandardreason"},"Msg/SupportStandardReason")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/messages#msgaddreason"},"Msg/AddReason")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/messages#msgremovereason"},"Msg/RemoveReason")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/events"},"Events")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/events#handlers"},"Handlers")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/permissions"},"Permissions"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/params"},"Parameters"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/reports/client"},"Client")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/client#cli"},"CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/client#grpc"},"gRPC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/reports/client#rest"},"REST"))))))}c.isMDXComponent=!0}}]);