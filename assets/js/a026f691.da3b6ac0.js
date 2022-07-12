"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15345],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49183:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],p={id:"posts-params-order-by",title:"posts_params_order_by",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/inputs/posts-params-order-by",id:"graphql/inputs/posts-params-order-by",title:"posts_params_order_by",description:'Ordering options when selecting data from "posts_params".',source:"@site/docs/07-graphql/inputs/posts-params-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/posts-params-order-by",permalink:"/next/graphql/inputs/posts-params-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/posts-params-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"posts-params-order-by",title:"posts_params_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"posts_params_bool_exp",permalink:"/next/graphql/inputs/posts-params-bool-exp"},next:{title:"profile_bool_exp",permalink:"/next/graphql/inputs/profile-bool-exp"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>params</code> (<code>order_by</code>)",id:"params-order_by",level:4}],d={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "posts_params".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input posts_params_order_by {\n  params: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"params-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);