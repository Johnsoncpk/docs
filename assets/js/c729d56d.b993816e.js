"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88849],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67886:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],i={id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/queries/poll-answer",id:"version-4.1.0/graphql/queries/poll-answer",title:"poll_answer",description:'fetch data from the table: "poll_answer"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/poll-answer.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/poll-answer",permalink:"/graphql/queries/poll-answer",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/poll-answer.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_aggregate",permalink:"/graphql/queries/poll-answer-aggregate"},next:{title:"post_aggregate",permalink:"/graphql/queries/post-aggregate"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[poll_answer_select_column!]</code>)",id:"distinct_on-poll_answer_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[poll_answer_order_by!]</code>)",id:"order_by-poll_answer_order_by",level:4},{value:"<code>where</code> (<code>poll_answer_bool_exp</code>)",id:"where-poll_answer_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>poll_answer</code>",id:"poll_answer",level:4}],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'fetch data from the table: "poll_answer"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"poll_answer(\n  distinct_on: [poll_answer_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [poll_answer_order_by!]\n  where: poll_answer_bool_exp\n): [poll_answer!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"distinct_on-poll_answer_select_column"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h4",href:"../enums/poll-answer-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")"),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("h4",{id:"limit-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("h4",{id:"offset-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("h4",{id:"order_by-poll_answer_order_by"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_order_by!]")),")"),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("h4",{id:"where-poll_answer_bool_exp"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp")),")"),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"poll_answer"},(0,l.kt)("a",{parentName:"h4",href:"../objects/poll-answer"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer"))),(0,l.kt)("p",null,'columns and relationships of "poll_answer"'))}m.isMDXComponent=!0}}]);