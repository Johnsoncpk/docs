"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60103],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return g}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),d=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=d(r),g=n,N=k["".concat(o,".").concat(g)]||k[g]||i[g]||l;return r?a.createElement(N,p(p({ref:e},m),{},{components:r})):a.createElement(N,p({ref:e},m))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,p=new Array(l);p[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,p[1]=s;for(var d=2;d<l;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},61987:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return i}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),p=["components"],s={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},o="Events",d={unversionedId:"developers/modules/reports/events",id:"developers/modules/reports/events",title:"Events",description:"The reports module emits the following events:",source:"@site/docs/02-developers/02-modules/reports/05-events.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/events",permalink:"/next/developers/modules/reports/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/reports/05-events.md",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/next/developers/modules/reports/messages"},next:{title:"Permissions",permalink:"/next/developers/modules/reports/permissions"}},m={},i=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreateReport",id:"msgcreatereport",level:3},{value:"<code>Post Target</code>",id:"post-target",level:4},{value:"<code>User Target</code>",id:"user-target",level:4},{value:"MsgDeleteReport",id:"msgdeletereport",level:3},{value:"MsgSupportStandardReason",id:"msgsupportstandardreason",level:3},{value:"MsgAddReason",id:"msgaddreason",level:3},{value:"MsgRemoveReason",id:"msgremovereason",level:3}],k={toc:i};function g(t){var e=t.components,r=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"The reports module emits the following events:"),(0,l.kt)("h2",{id:"handlers"},"Handlers"),(0,l.kt)("h3",{id:"msgcreatereport"},"MsgCreateReport"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,l.kt)("td",{parentName:"tr",align:"left"},"report_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reportID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,l.kt)("td",{parentName:"tr",align:"left"},"creation_time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{creationTime}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgCreateReport")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("p",null,"Other events attributes depending on the type of the report target are attached."),(0,l.kt)("h4",{id:"post-target"},(0,l.kt)("inlineCode",{parentName:"h4"},"Post Target")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"report_post"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"report_post"),(0,l.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reportID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"report_post"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h4",{id:"user-target"},(0,l.kt)("inlineCode",{parentName:"h4"},"User Target")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"report_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"report_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"report_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgdeletereport"},"MsgDeleteReport"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_report"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_report"),(0,l.kt)("td",{parentName:"tr",align:"left"},"report_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reportID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgDeleteReport")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgsupportstandardreason"},"MsgSupportStandardReason"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"support_standard_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"support_standard_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"standard_reason_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"support_standard_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reason_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgSupportStandardReason")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgaddreason"},"MsgAddReason"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reason_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgAddReason")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgremovereason"},"MsgRemoveReason"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reason_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgRemoveReason")))))}g.isMDXComponent=!0}}]);