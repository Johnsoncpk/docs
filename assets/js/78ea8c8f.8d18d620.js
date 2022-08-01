"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16107],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>_});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},b=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(t),_=o,u=b["".concat(p,".").concat(_)]||b[_]||l[_]||n;return t?a.createElement(u,d(d({ref:r},c),{},{components:t})):a.createElement(u,d({ref:r},c))}));function _(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,d=new Array(n);d[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<n;s++)d[s]=t[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6887:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const n={id:"report-order-by",title:"report_order_by",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/report-order-by",id:"version-4.1.0/graphql/inputs/report-order-by",title:"report_order_by",description:'Ordering options when selecting data from "report".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/report-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-order-by",permalink:"/4.1.0/graphql/inputs/report-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/report-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"report-order-by",title:"report_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_min_order_by",permalink:"/4.1.0/graphql/inputs/report-min-order-by"},next:{title:"report_reason_aggregate_order_by",permalink:"/4.1.0/graphql/inputs/report-reason-aggregate-order-by"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_date</code> (<code>order_by</code>)",id:"creation_date-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>message</code> (<code>order_by</code>)",id:"message-order_by",level:4},{value:"<code>reasons_aggregate</code> (<code>report_reason_aggregate_order_by</code>)",id:"reasons_aggregate-report_reason_aggregate_order_by",level:4},{value:"<code>reporter_address</code> (<code>order_by</code>)",id:"reporter_address-order_by",level:4},{value:"<code>subspace</code> (<code>subspace_order_by</code>)",id:"subspace-subspace_order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4},{value:"<code>target</code> (<code>order_by</code>)",id:"target-order_by",level:4}],c={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "report".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_order_by {\n  creation_date: order_by\n  id: order_by\n  message: order_by\n  reasons_aggregate: report_reason_aggregate_order_by\n  reporter_address: order_by\n  subspace: subspace_order_by\n  subspace_id: order_by\n  target: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"creation_date-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"message-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"message"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"reasons_aggregate-report_reason_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reasons_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-reason-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_aggregate_order_by")),")"),(0,o.kt)("h4",{id:"reporter_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reporter_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"subspace-subspace_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_order_by")),")"),(0,o.kt)("h4",{id:"subspace_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"target-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"target"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);