"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95442],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return b}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=c(t),b=a,m=l["".concat(d,".").concat(b)]||l[b]||u[b]||o;return t?n.createElement(m,s(s({ref:r},i),{},{components:t})):n.createElement(m,s({ref:r},i))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=l;var p={};for(var d in r)hasOwnProperty.call(r,d)&&(p[d]=r[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},40832:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],p={id:"subspace-free-text-params-order-by",title:"subspace_free_text_params_order_by",hide_table_of_contents:!1},d=void 0,c={unversionedId:"graphql/inputs/subspace-free-text-params-order-by",id:"graphql/inputs/subspace-free-text-params-order-by",title:"subspace_free_text_params_order_by",description:'Ordering options when selecting data from "subspacefreetext_params".',source:"@site/docs/07-graphql/inputs/subspace-free-text-params-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-free-text-params-order-by",permalink:"/next/graphql/inputs/subspace-free-text-params-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-free-text-params-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-free-text-params-order-by",title:"subspace_free_text_params_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params_bool_exp",permalink:"/next/graphql/inputs/subspace-free-text-params-bool-exp"},next:{title:"subspace_order_by",permalink:"/next/graphql/inputs/subspace-order-by"}},i={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>enabled</code> (<code>order_by</code>)",id:"enabled-order_by",level:4},{value:"<code>max_length</code> (<code>order_by</code>)",id:"max_length-order_by",level:4},{value:"<code>reg_ex</code> (<code>order_by</code>)",id:"reg_ex-order_by",level:4},{value:"<code>subspace</code> (<code>subspace_order_by</code>)",id:"subspace-subspace_order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],l={toc:u};function b(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "subspace_free_text_params".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_free_text_params_order_by {\n  enabled: order_by\n  max_length: order_by\n  reg_ex: order_by\n  subspace: subspace_order_by\n  subspace_id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"enabled-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max_length-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max_length"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"reg_ex-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reg_ex"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"subspace-subspace_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_order_by")),")"),(0,o.kt)("h4",{id:"subspace_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);