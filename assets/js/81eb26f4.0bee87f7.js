"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90609],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),d=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=d(e.components);return o.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,y=u["".concat(i,".").concat(b)]||u[b]||c[b]||a;return t?o.createElement(y,p(p({ref:r},l),{},{components:t})):o.createElement(y,p({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var d=2;d<a;d++)p[d]=t[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39026:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const a={id:"report-reason-order-by",title:"report_reason_order_by",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/report-reason-order-by",id:"graphql/inputs/report-reason-order-by",title:"report_reason_order_by",description:'Ordering options when selecting data from "report_reason".',source:"@site/docs/07-graphql/inputs/report-reason-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-reason-order-by",permalink:"/next/graphql/inputs/report-reason-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-reason-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"report-reason-order-by",title:"report_reason_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_reason_bool_exp",permalink:"/next/graphql/inputs/report-reason-bool-exp"},next:{title:"report_stddev_order_by",permalink:"/next/graphql/inputs/report-stddev-order-by"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>reason</code> (<code>subspace_report_reason_order_by</code>)",id:"reason-subspace_report_reason_order_by",level:4},{value:"<code>report</code> (<code>report_order_by</code>)",id:"report-report_order_by",level:4}],l={toc:d};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "report_reason".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_reason_order_by {\n  reason: subspace_report_reason_order_by\n  report: report_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"reason-subspace_report_reason_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_order_by")),")"),(0,n.kt)("h4",{id:"report-report_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"report"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_order_by")),")"))}c.isMDXComponent=!0}}]);