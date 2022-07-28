"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32318],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return p}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),g=u(t),p=a,f=g["".concat(i,".").concat(p)]||g[p]||l[p]||o;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},88134:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],d={id:"dtag-transfer-requests-aggregate-order-by",title:"dtag_transfer_requests_aggregate_order_by",hide_table_of_contents:!1},i=void 0,u={unversionedId:"graphql/inputs/dtag-transfer-requests-aggregate-order-by",id:"version-4.2.0/graphql/inputs/dtag-transfer-requests-aggregate-order-by",title:"dtag_transfer_requests_aggregate_order_by",description:'order by aggregate values of table "dtagtransferrequests"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/dtag-transfer-requests-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-aggregate-order-by",permalink:"/graphql/inputs/dtag-transfer-requests-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/dtag-transfer-requests-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"dtag-transfer-requests-aggregate-order-by",title:"dtag_transfer_requests_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_variance_order_by",permalink:"/graphql/inputs/chain-link-variance-order-by"},next:{title:"dtag_transfer_requests_bool_exp",permalink:"/graphql/inputs/dtag-transfer-requests-bool-exp"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>dtag_transfer_requests_max_order_by</code>)",id:"max-dtag_transfer_requests_max_order_by",level:4},{value:"<code>min</code> (<code>dtag_transfer_requests_min_order_by</code>)",id:"min-dtag_transfer_requests_min_order_by",level:4}],g={toc:l};function p(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "dtag_transfer_requests"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_aggregate_order_by {\n  count: order_by\n  max: dtag_transfer_requests_max_order_by\n  min: dtag_transfer_requests_min_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-dtag_transfer_requests_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_max_order_by")),")"),(0,o.kt)("h4",{id:"min-dtag_transfer_requests_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_min_order_by")),")"))}p.isMDXComponent=!0}}]);