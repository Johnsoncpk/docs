"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[17458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,g=m["".concat(d,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"post-min-fields",title:"post_min_fields",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/objects/post-min-fields",id:"graphql/objects/post-min-fields",title:"post_min_fields",description:"aggregate min on columns",source:"@site/docs/07-graphql/objects/post-min-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-min-fields",permalink:"/next/graphql/objects/post-min-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-min-fields.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"post-min-fields",title:"post_min_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention",permalink:"/next/graphql/objects/post-mention"},next:{title:"post_reference",permalink:"/next/graphql/objects/post-reference"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>String</code>)",id:"author_address-string",level:4},{value:"<code>creation_date</code> (<code>timestamp</code>)",id:"creation_date-timestamp",level:4},{value:"<code>external_id</code> (<code>String</code>)",id:"external_id-string",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>last_edited_date</code> (<code>timestamp</code>)",id:"last_edited_date-timestamp",level:4},{value:"<code>reply_settings</code> (<code>String</code>)",id:"reply_settings-string",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"aggregate min on columns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_min_fields {\n  author_address: String\n  creation_date: timestamp\n  external_id: String\n  id: bigint\n  last_edited_date: timestamp\n  reply_settings: String\n  subspace_id: bigint\n  text: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"author_address-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"creation_date-timestamp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,r.kt)("h4",{id:"external_id-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"last_edited_date-timestamp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,r.kt)("h4",{id:"reply_settings-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"subspace_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"text-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))}c.isMDXComponent=!0}}]);