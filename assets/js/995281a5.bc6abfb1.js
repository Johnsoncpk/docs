"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4744],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1511:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"user-block-aggregate-order-by",title:"user_block_aggregate_order_by",hide_table_of_contents:!1},l=void 0,u={unversionedId:"graphql/inputs/user-block-aggregate-order-by",id:"version-4.1.0/graphql/inputs/user-block-aggregate-order-by",title:"user_block_aggregate_order_by",description:'order by aggregate values of table "user_block"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-aggregate-order-by",permalink:"/4.1.0/graphql/inputs/user-block-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"user-block-aggregate-order-by",title:"user_block_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"timestamp_comparison_exp",permalink:"/4.1.0/graphql/inputs/timestamp-comparison-exp"},next:{title:"user_block_bool_exp",permalink:"/4.1.0/graphql/inputs/user-block-bool-exp"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>user_block_max_order_by</code>)",id:"max-user_block_max_order_by",level:4},{value:"<code>min</code> (<code>user_block_min_order_by</code>)",id:"min-user_block_min_order_by",level:4}],p={toc:d};function b(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by aggregate values of table "user_block"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_aggregate_order_by {\n  count: order_by\n  max: user_block_max_order_by\n  min: user_block_min_order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"count-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"max-user_block_max_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-max-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"user_block_max_order_by")),")"),(0,a.kt)("h4",{id:"min-user_block_min_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-min-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"user_block_min_order_by")),")"))}b.isMDXComponent=!0}}]);