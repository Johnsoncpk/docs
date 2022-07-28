"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86387],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,d=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=i(t),f=o,y=c["".concat(s,".").concat(f)]||c[f]||u[f]||d;return t?n.createElement(y,p(p({ref:r},l),{},{components:t})):n.createElement(y,p({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var d=t.length,p=new Array(d);p[0]=c;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var i=2;i<d;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},29855:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var n=t(87462),o=t(63366),d=(t(67294),t(3905)),p=["components"],a={id:"post-url-stddev-pop-order-by",title:"post_url_stddev_pop_order_by",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/post-url-stddev-pop-order-by",id:"version-4.2.0/graphql/inputs/post-url-stddev-pop-order-by",title:"post_url_stddev_pop_order_by",description:'order by stddevpop() on columns of table "posturl"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/post-url-stddev-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-url-stddev-pop-order-by",permalink:"/graphql/inputs/post-url-stddev-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/post-url-stddev-pop-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-url-stddev-pop-order-by",title:"post_url_stddev_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_url_stddev_order_by",permalink:"/graphql/inputs/post-url-stddev-order-by"},next:{title:"post_url_stddev_samp_order_by",permalink:"/graphql/inputs/post-url-stddev-samp-order-by"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4}],c={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,p);return(0,d.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("p",null,'order by stddev_pop() on columns of table "post_url"'),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_url_stddev_pop_order_by {\n  end_index: order_by\n  start_index: order_by\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"end_index-order_by"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,d.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,d.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,d.kt)("h4",{id:"start_index-order_by"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,d.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,d.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);