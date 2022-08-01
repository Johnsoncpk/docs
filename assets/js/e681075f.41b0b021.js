"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49523],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=p(t),b=n,m=y["".concat(l,".").concat(b)]||y[b]||c[b]||o;return t?a.createElement(m,d(d({ref:r},s),{},{components:t})):a.createElement(m,d({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,d=new Array(o);d[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var p=2;p<o;p++)d[p]=t[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},51078:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={id:"post-max-order-by",title:"post_max_order_by",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/post-max-order-by",id:"graphql/inputs/post-max-order-by",title:"post_max_order_by",description:'order by max() on columns of table "post"',source:"@site/docs/07-graphql/inputs/post-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-max-order-by",permalink:"/next/graphql/inputs/post-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-max-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"post-max-order-by",title:"post_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_variance_order_by",permalink:"/next/graphql/inputs/post-hashtag-variance-order-by"},next:{title:"post_mention_aggregate_order_by",permalink:"/next/graphql/inputs/post-mention-aggregate-order-by"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>order_by</code>)",id:"author_address-order_by",level:4},{value:"<code>creation_date</code> (<code>order_by</code>)",id:"creation_date-order_by",level:4},{value:"<code>external_id</code> (<code>order_by</code>)",id:"external_id-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>last_edited_date</code> (<code>order_by</code>)",id:"last_edited_date-order_by",level:4},{value:"<code>reply_settings</code> (<code>order_by</code>)",id:"reply_settings-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4},{value:"<code>text</code> (<code>order_by</code>)",id:"text-order_by",level:4}],s={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by max() on columns of table "post"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_max_order_by {\n  author_address: order_by\n  creation_date: order_by\n  external_id: order_by\n  id: order_by\n  last_edited_date: order_by\n  reply_settings: order_by\n  subspace_id: order_by\n  text: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"author_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"creation_date-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"external_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"last_edited_date-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"reply_settings-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"text-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);