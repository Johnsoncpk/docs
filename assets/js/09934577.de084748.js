"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7346],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78307:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],c={id:"subspace",title:"subspace",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/subscriptions/subspace",id:"graphql/subscriptions/subspace",title:"subspace",description:'fetch data from the table: "subspace"',source:"@site/docs/07-graphql/subscriptions/subspace.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace",permalink:"/next/graphql/subscriptions/subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/subspace.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace",title:"subspace",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission",permalink:"/next/graphql/subscriptions/subspace-user-permission"},next:{title:"user_block_aggregate",permalink:"/next/graphql/subscriptions/user-block-aggregate"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_select_column!]</code>)",id:"distinct_on-subspace_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_order_by!]</code>)",id:"order_by-subspace_order_by",level:4},{value:"<code>where</code> (<code>subspace_bool_exp</code>)",id:"where-subspace_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace</code>",id:"subspace",level:4}],d={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace(\n  distinct_on: [subspace_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_order_by!]\n  where: subspace_bool_exp\n): [subspace!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace"))),(0,s.kt)("p",null,'columns and relationships of "subspace"'))}b.isMDXComponent=!0}}]);