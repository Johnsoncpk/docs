"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97162],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?t.createElement(h,i(i({ref:r},s),{},{components:n})):t.createElement(h,i({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81510:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],d={id:"chain-link-max-order-by",title:"chain_link_max_order_by",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/inputs/chain-link-max-order-by",id:"graphql/inputs/chain-link-max-order-by",title:"chain_link_max_order_by",description:'order by max() on columns of table "chain_link"',source:"@site/docs/07-graphql/inputs/chain-link-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-max-order-by",permalink:"/next/graphql/inputs/chain-link-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-max-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"chain-link-max-order-by",title:"chain_link_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_chain_config_order_by",permalink:"/next/graphql/inputs/chain-link-chain-config-order-by"},next:{title:"chain_link_min_order_by",permalink:"/next/graphql/inputs/chain-link-min-order-by"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_time</code> (<code>order_by</code>)",id:"creation_time-order_by",level:4},{value:"<code>external_address</code> (<code>order_by</code>)",id:"external_address-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4}],u={toc:p};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by max() on columns of table "chain_link"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_max_order_by {\n  creation_time: order_by\n  external_address: order_by\n  height: order_by\n  user_address: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"creation_time-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"external_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"external_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"height-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);