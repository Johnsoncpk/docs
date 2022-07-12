"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85203],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?t.createElement(y,i(i({ref:r},c),{},{components:n})):t.createElement(y,i({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72436:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"application-link-min-order-by",title:"application_link_min_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/application-link-min-order-by",id:"version-4.1.0/graphql/inputs/application-link-min-order-by",title:"application_link_min_order_by",description:'order by min() on columns of table "application_link"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-min-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-min-order-by",permalink:"/graphql/inputs/application-link-min-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-min-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"application-link-min-order-by",title:"application_link_min_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_max_order_by",permalink:"/graphql/inputs/application-link-max-order-by"},next:{title:"application_link_oracle_request_aggregate_order_by",permalink:"/graphql/inputs/application-link-oracle-request-aggregate-order-by"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>application</code> (<code>order_by</code>)",id:"application-order_by",level:4},{value:"<code>creation_time</code> (<code>order_by</code>)",id:"creation_time-order_by",level:4},{value:"<code>state</code> (<code>order_by</code>)",id:"state-order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4},{value:"<code>username</code> (<code>order_by</code>)",id:"username-order_by",level:4}],u={toc:s};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by min() on columns of table "application_link"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_min_order_by {\n  application: order_by\n  creation_time: order_by\n  state: order_by\n  user_address: order_by\n  username: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"application-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"creation_time-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"state-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"username-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);