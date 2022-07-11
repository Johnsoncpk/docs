"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[23381],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,c(c({ref:e},l),{},{components:n})):a.createElement(h,c({ref:e},l))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92985:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],s={id:"post-attachment",title:"post_attachment",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/subscriptions/post-attachment",id:"graphql/subscriptions/post-attachment",title:"post_attachment",description:'fetch data from the table: "post_attachment"',source:"@site/docs/07-graphql/subscriptions/post-attachment.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-attachment",permalink:"/next/graphql/subscriptions/post-attachment",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/post-attachment.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"post-attachment",title:"post_attachment",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_aggregate",permalink:"/next/graphql/subscriptions/post-attachment-aggregate"},next:{title:"post_hashtag",permalink:"/next/graphql/subscriptions/post-hashtag"}},l={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_attachment_select_column!]</code>)",id:"distinct_on-post_attachment_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_attachment_order_by!]</code>)",id:"order_by-post_attachment_order_by",level:4},{value:"<code>where</code> (<code>post_attachment_bool_exp</code>)",id:"where-post_attachment_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment</code>",id:"post_attachment",level:4}],d={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "post_attachment"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"post_attachment(\n  distinct_on: [post_attachment_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_attachment_order_by!]\n  where: post_attachment_bool_exp\n): [post_attachment!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-post_attachment_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/post-attachment-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_attachment_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-post_attachment_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_attachment_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-post_attachment_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_attachment"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment"))),(0,o.kt)("p",null,'columns and relationships of "post_attachment"'))}u.isMDXComponent=!0}}]);