"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[84636],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41571:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],a={id:"profile",title:"profile",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/subscriptions/profile",id:"graphql/subscriptions/profile",title:"profile",description:'fetch data from the table: "profile"',source:"@site/docs/07-graphql/subscriptions/profile.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/profile",permalink:"/next/graphql/subscriptions/profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/profile.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"profile",title:"profile",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship",permalink:"/next/graphql/subscriptions/profile-relationship"},next:{title:"profiles_params",permalink:"/next/graphql/subscriptions/profiles-params"}},s={},f=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profile_select_column!]</code>)",id:"distinct_on-profile_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profile_order_by!]</code>)",id:"order_by-profile_order_by",level:4},{value:"<code>where</code> (<code>profile_bool_exp</code>)",id:"where-profile_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile</code>",id:"profile",level:4}],d={toc:f};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'fetch data from the table: "profile"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"profile(\n  distinct_on: [profile_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_order_by!]\n  where: profile_bool_exp\n): [profile!]!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"distinct_on-profile_select_column"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/profile-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[profile_select_column!]")),")"),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("h4",{id:"order_by-profile_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[profile_order_by!]")),")"),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("h4",{id:"where-profile_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"profile"},(0,i.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))),(0,i.kt)("p",null,'columns and relationships of "profile"'))}u.isMDXComponent=!0}}]);