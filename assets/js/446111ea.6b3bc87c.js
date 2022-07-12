"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[34922],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||l[f]||i;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71972:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"post-reference-min-order-by",title:"post_reference_min_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/post-reference-min-order-by",id:"version-4.1.0/graphql/inputs/post-reference-min-order-by",title:"post_reference_min_order_by",description:'order by min() on columns of table "post_reference"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-reference-min-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-min-order-by",permalink:"/graphql/inputs/post-reference-min-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-reference-min-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"post-reference-min-order-by",title:"post_reference_min_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_max_order_by",permalink:"/graphql/inputs/post-reference-max-order-by"},next:{title:"post_reference_order_by",permalink:"/graphql/inputs/post-reference-order-by"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>order_by</code>)",id:"position_index-order_by",level:4},{value:"<code>reference_id</code> (<code>order_by</code>)",id:"reference_id-order_by",level:4},{value:"<code>type</code> (<code>order_by</code>)",id:"type-order_by",level:4}],u={toc:l};function f(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'order by min() on columns of table "post_reference"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_min_order_by {\n  position_index: order_by\n  reference_id: order_by\n  type: order_by\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"position_index-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"reference_id-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"type-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);