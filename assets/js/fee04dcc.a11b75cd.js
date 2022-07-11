"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[78855],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48124:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],i={id:"post-url",title:"post_url",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/subscriptions/post-url",id:"version-4.1.0/graphql/subscriptions/post-url",title:"post_url",description:'fetch data from the table: "post_url"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/post-url.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-url",permalink:"/graphql/subscriptions/post-url",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/post-url.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"post-url",title:"post_url",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference",permalink:"/graphql/subscriptions/post-reference"},next:{title:"post",permalink:"/graphql/subscriptions/post"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_url_select_column!]</code>)",id:"distinct_on-post_url_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_url_order_by!]</code>)",id:"order_by-post_url_order_by",level:4},{value:"<code>where</code> (<code>post_url_bool_exp</code>)",id:"where-post_url_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_url</code>",id:"post_url",level:4}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'fetch data from the table: "post_url"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"post_url(\n  distinct_on: [post_url_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_url_order_by!]\n  where: post_url_bool_exp\n): [post_url!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"distinct_on-post_url_select_column"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h4",href:"../enums/post-url-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[post_url_select_column!]")),")"),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("h4",{id:"limit-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("h4",{id:"offset-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("h4",{id:"order_by-post_url_order_by"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/post-url-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[post_url_order_by!]")),")"),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("h4",{id:"where-post_url_bool_exp"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/post-url-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_bool_exp")),")"),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"post_url"},(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url"))),(0,l.kt)("p",null,'columns and relationships of "post_url"'))}m.isMDXComponent=!0}}]);