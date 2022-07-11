"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39769],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,f=u["".concat(p,".").concat(g)]||u[g]||s[g]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27686:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"report-aggregate",title:"report_aggregate",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/queries/report-aggregate",id:"graphql/queries/report-aggregate",title:"report_aggregate",description:'fetch aggregated fields from the table: "report"',source:"@site/docs/07-graphql/queries/report-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/report-aggregate",permalink:"/next/graphql/queries/report-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/report-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"report-aggregate",title:"report_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction",permalink:"/next/graphql/queries/reaction"},next:{title:"report_reason",permalink:"/next/graphql/queries/report-reason"}},d={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[report_select_column!]</code>)",id:"distinct_on-report_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[report_order_by!]</code>)",id:"order_by-report_order_by",level:4},{value:"<code>where</code> (<code>report_bool_exp</code>)",id:"where-report_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>report_aggregate</code>",id:"report_aggregate",level:4}],u={toc:s};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch aggregated fields from the table: "report"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"report_aggregate(\n  distinct_on: [report_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [report_order_by!]\n  where: report_bool_exp\n): report_aggregate!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-report_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/report-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[report_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-report_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[report_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-report_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"report_aggregate"},(0,a.kt)("a",{parentName:"h4",href:"../objects/report-aggregate"},(0,a.kt)("inlineCode",{parentName:"a"},"report_aggregate"))),(0,a.kt)("p",null,'aggregated selection of "report"'))}g.isMDXComponent=!0}}]);