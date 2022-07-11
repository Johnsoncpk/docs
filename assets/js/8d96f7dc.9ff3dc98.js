"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[25176],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2663:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"reaction-max-order-by",title:"reaction_max_order_by",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/inputs/reaction-max-order-by",id:"version-4.1.0/graphql/inputs/reaction-max-order-by",title:"reaction_max_order_by",description:'order by max() on columns of table "reaction"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/reaction-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reaction-max-order-by",permalink:"/graphql/inputs/reaction-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/reaction-max-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"reaction-max-order-by",title:"reaction_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_bool_exp",permalink:"/graphql/inputs/reaction-bool-exp"},next:{title:"reaction_min_order_by",permalink:"/graphql/inputs/reaction-min-order-by"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>order_by</code>)",id:"author_address-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by max() on columns of table "reaction"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input reaction_max_order_by {\n  author_address: order_by\n  id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"author_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);