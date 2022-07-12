"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35097],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,d=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,y=u["".concat(c,".").concat(f)]||u[f]||l[f]||d;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var d=t.length,i=new Array(d);i[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<d;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17848:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),d=(t(67294),t(3905)),i=["components"],a={id:"post-reference-stddev-order-by",title:"post_reference_stddev_order_by",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/inputs/post-reference-stddev-order-by",id:"graphql/inputs/post-reference-stddev-order-by",title:"post_reference_stddev_order_by",description:'order by stddev() on columns of table "post_reference"',source:"@site/docs/07-graphql/inputs/post-reference-stddev-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-stddev-order-by",permalink:"/next/graphql/inputs/post-reference-stddev-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-stddev-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"post-reference-stddev-order-by",title:"post_reference_stddev_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_order_by",permalink:"/next/graphql/inputs/post-reference-order-by"},next:{title:"post_reference_stddev_pop_order_by",permalink:"/next/graphql/inputs/post-reference-stddev-pop-order-by"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>order_by</code>)",id:"position_index-order_by",level:4},{value:"<code>reference_id</code> (<code>order_by</code>)",id:"reference_id-order_by",level:4}],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,d.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("p",null,'order by stddev() on columns of table "post_reference"'),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_stddev_order_by {\n  position_index: order_by\n  reference_id: order_by\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"position_index-order_by"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,d.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,d.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,d.kt)("h4",{id:"reference_id-order_by"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,d.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,d.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);