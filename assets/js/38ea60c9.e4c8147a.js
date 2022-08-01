"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,u=d["".concat(l,".").concat(f)]||d[f]||s[f]||n;return r?a.createElement(u,g(g({ref:t},c),{},{components:r})):a.createElement(u,g({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,g=new Array(n);g[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,g[1]=p;for(var i=2;i<n;i++)g[i]=r[i];return a.createElement.apply(null,g)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>g,default:()=>s,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={id:"report-aggregate",title:"report_aggregate",hide_table_of_contents:!1},g=void 0,p={unversionedId:"graphql/objects/report-aggregate",id:"graphql/objects/report-aggregate",title:"report_aggregate",description:'aggregated selection of "report"',source:"@site/docs/07-graphql/objects/report-aggregate.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report-aggregate",permalink:"/next/graphql/objects/report-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/report-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"report-aggregate",title:"report_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_aggregate_fields",permalink:"/next/graphql/objects/report-aggregate-fields"},next:{title:"report_avg_fields",permalink:"/next/graphql/objects/report-avg-fields"}},l={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>aggregate</code> (<code>report_aggregate_fields</code>)",id:"aggregate-report_aggregate_fields",level:4},{value:"<code>nodes</code> (<code>[report!]!</code>)",id:"nodes-report",level:4}],c={toc:i};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'aggregated selection of "report"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type report_aggregate {\n  aggregate: report_aggregate_fields\n  nodes: [report!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"aggregate-report_aggregate_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-aggregate-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_aggregate_fields")),")"),(0,o.kt)("h4",{id:"nodes-report"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report"},(0,o.kt)("inlineCode",{parentName:"a"},"[report!]!")),")"))}s.isMDXComponent=!0}}]);