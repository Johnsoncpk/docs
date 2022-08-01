"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=l,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(87462),l=(r(67294),r(3905));const o={id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/queries/poll-answer",id:"graphql/queries/poll-answer",title:"poll_answer",description:'fetch data from the table: "poll_answer"',source:"@site/docs/07-graphql/queries/poll-answer.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/poll-answer",permalink:"/next/graphql/queries/poll-answer",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/poll-answer.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_aggregate",permalink:"/next/graphql/queries/poll-answer-aggregate"},next:{title:"post_aggregate",permalink:"/next/graphql/queries/post-aggregate"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[poll_answer_select_column!]</code>)",id:"distinct_on-poll_answer_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[poll_answer_order_by!]</code>)",id:"order_by-poll_answer_order_by",level:4},{value:"<code>where</code> (<code>poll_answer_bool_exp</code>)",id:"where-poll_answer_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>poll_answer</code>",id:"poll_answer",level:4}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'fetch data from the table: "poll_answer"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"poll_answer(\n  distinct_on: [poll_answer_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [poll_answer_order_by!]\n  where: poll_answer_bool_exp\n): [poll_answer!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"distinct_on-poll_answer_select_column"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h4",href:"../enums/poll-answer-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")"),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("h4",{id:"limit-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("h4",{id:"offset-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("h4",{id:"order_by-poll_answer_order_by"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_order_by!]")),")"),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("h4",{id:"where-poll_answer_bool_exp"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp")),")"),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"poll_answer"},(0,l.kt)("a",{parentName:"h4",href:"../objects/poll-answer"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer"))),(0,l.kt)("p",null,'columns and relationships of "poll_answer"'))}d.isMDXComponent=!0}}]);