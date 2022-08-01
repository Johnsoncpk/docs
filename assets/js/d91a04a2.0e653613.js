"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[23708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||f[m]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"profile-relationship-aggregate-fields",title:"profile_relationship_aggregate_fields",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/objects/profile-relationship-aggregate-fields",id:"graphql/objects/profile-relationship-aggregate-fields",title:"profile_relationship_aggregate_fields",description:'aggregate fields of "profile_relationship"',source:"@site/docs/07-graphql/objects/profile-relationship-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/profile-relationship-aggregate-fields",permalink:"/next/graphql/objects/profile-relationship-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/profile-relationship-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"profile-relationship-aggregate-fields",title:"profile_relationship_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"posts_params",permalink:"/next/graphql/objects/posts-params"},next:{title:"profile_relationship_aggregate",permalink:"/next/graphql/objects/profile-relationship-aggregate"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>profile_relationship_max_fields</code>)",id:"max-profile_relationship_max_fields",level:4},{value:"<code>min</code> (<code>profile_relationship_min_fields</code>)",id:"min-profile_relationship_min_fields",level:4}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'aggregate fields of "profile_relationship"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type profile_relationship_aggregate_fields {\n  count(\n  columns: [profile_relationship_select_column!]\n  distinct: Boolean\n): Int!\n  max: profile_relationship_max_fields\n  min: profile_relationship_min_fields\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"count-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"columns-profile_relationship_select_column"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,a.kt)("a",{parentName:"h5",href:"../enums/profile-relationship-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,a.kt)("h4",{id:"max-profile_relationship_max_fields"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-max-fields"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationship_max_fields")),")"),(0,a.kt)("h4",{id:"min-profile_relationship_min_fields"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-min-fields"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationship_min_fields")),")"))}f.isMDXComponent=!0}}]);