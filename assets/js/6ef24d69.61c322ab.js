"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[37918],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/subscriptions/poll-answer",id:"graphql/subscriptions/poll-answer",title:"poll_answer",description:'fetch data from the table: "poll_answer"',source:"@site/docs/07-graphql/subscriptions/poll-answer.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/poll-answer",permalink:"/next/graphql/subscriptions/poll-answer",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/poll-answer.mdx",tags:[],version:"current",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_aggregate",permalink:"/next/graphql/subscriptions/poll-answer-aggregate"},next:{title:"post_aggregate",permalink:"/next/graphql/subscriptions/post-aggregate"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[poll_answer_select_column!]</code>)",id:"distinct_on-poll_answer_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[poll_answer_order_by!]</code>)",id:"order_by-poll_answer_order_by",level:4},{value:"<code>where</code> (<code>poll_answer_bool_exp</code>)",id:"where-poll_answer_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>poll_answer</code>",id:"poll_answer",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'fetch data from the table: "poll_answer"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"poll_answer(\n  distinct_on: [poll_answer_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [poll_answer_order_by!]\n  where: poll_answer_bool_exp\n): [poll_answer!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"distinct_on-poll_answer_select_column"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h4",href:"../enums/poll-answer-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")"),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("h4",{id:"limit-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("h4",{id:"offset-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("h4",{id:"order_by-poll_answer_order_by"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_order_by!]")),")"),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("h4",{id:"where-poll_answer_bool_exp"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp")),")"),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"poll_answer"},(0,l.kt)("a",{parentName:"h4",href:"../objects/poll-answer"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer"))),(0,l.kt)("p",null,'columns and relationships of "poll_answer"'))}m.isMDXComponent=!0}}]);