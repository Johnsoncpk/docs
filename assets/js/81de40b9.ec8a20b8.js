"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35753],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90747:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],d={id:"profile-relationship-max-order-by",title:"profile_relationship_max_order_by",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/inputs/profile-relationship-max-order-by",id:"version-4.1.0/graphql/inputs/profile-relationship-max-order-by",title:"profile_relationship_max_order_by",description:'order by max() on columns of table "profile_relationship"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/profile-relationship-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profile-relationship-max-order-by",permalink:"/graphql/inputs/profile-relationship-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/profile-relationship-max-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"profile-relationship-max-order-by",title:"profile_relationship_max_order_by",hide_table_of_contents:!1}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>receiver_address</code> (<code>order_by</code>)",id:"receiver_address-order_by",level:4},{value:"<code>sender_address</code> (<code>order_by</code>)",id:"sender_address-order_by",level:4},{value:"<code>subspace</code> (<code>order_by</code>)",id:"subspace-order_by",level:4}],u={toc:c};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by max() on columns of table "profile_relationship"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input profile_relationship_max_order_by {\n  receiver_address: order_by\n  sender_address: order_by\n  subspace: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"receiver_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"sender_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);