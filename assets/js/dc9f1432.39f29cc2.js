"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90106],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),f=o,m=u["".concat(p,".").concat(f)]||u[f]||l[f]||a;return t?n.createElement(m,d(d({ref:r},c),{},{components:t})):n.createElement(m,d({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,d[1]=s;for(var i=2;i<a;i++)d[i]=t[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40425:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),d=["components"],s={id:"post-reference-stddev-samp-order-by",title:"post_reference_stddev_samp_order_by",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/post-reference-stddev-samp-order-by",id:"graphql/inputs/post-reference-stddev-samp-order-by",title:"post_reference_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "postreference"',source:"@site/docs/07-graphql/inputs/post-reference-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-stddev-samp-order-by",permalink:"/next/graphql/inputs/post-reference-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"post-reference-stddev-samp-order-by",title:"post_reference_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_stddev_pop_order_by",permalink:"/next/graphql/inputs/post-reference-stddev-pop-order-by"},next:{title:"post_reference_sum_order_by",permalink:"/next/graphql/inputs/post-reference-sum-order-by"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>order_by</code>)",id:"position_index-order_by",level:4},{value:"<code>reference_id</code> (<code>order_by</code>)",id:"reference_id-order_by",level:4}],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by stddev_samp() on columns of table "post_reference"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_stddev_samp_order_by {\n  position_index: order_by\n  reference_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"position_index-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"reference_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);