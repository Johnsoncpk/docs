"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59357],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>c});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):p(p({},o),e)),t},d=function(e){var o=s(e.components);return n.createElement(l.Provider,{value:o},e.children)},_={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,b=m["".concat(l,".").concat(c)]||m[c]||_[c]||i;return t?n.createElement(b,p(p({ref:o},d),{},{components:t})):n.createElement(b,p({ref:o},d))}));function c(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=m;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var s=2;s<i;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57418:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>p,default:()=>_,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const i={id:"post-mention-bool-exp",title:"post_mention_bool_exp",hide_table_of_contents:!1},p=void 0,a={unversionedId:"graphql/inputs/post-mention-bool-exp",id:"version-4.1.0/graphql/inputs/post-mention-bool-exp",title:"post_mention_bool_exp",description:"Boolean expression to filter rows from the table \"post_mention\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-mention-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-bool-exp",permalink:"/4.1.0/graphql/inputs/post-mention-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-mention-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"post-mention-bool-exp",title:"post_mention_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_avg_order_by",permalink:"/4.1.0/graphql/inputs/post-mention-avg-order-by"},next:{title:"post_mention_max_order_by",permalink:"/4.1.0/graphql/inputs/post-mention-max-order-by"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_mention_bool_exp!]</code>)",id:"_and-post_mention_bool_exp",level:4},{value:"<code>_not</code> (<code>post_mention_bool_exp</code>)",id:"_not-post_mention_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_mention_bool_exp!]</code>)",id:"_or-post_mention_bool_exp",level:4},{value:"<code>end_index</code> (<code>bigint_comparison_exp</code>)",id:"end_index-bigint_comparison_exp",level:4},{value:"<code>mention</code> (<code>profile_bool_exp</code>)",id:"mention-profile_bool_exp",level:4},{value:"<code>mention_address</code> (<code>String_comparison_exp</code>)",id:"mention_address-string_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>start_index</code> (<code>bigint_comparison_exp</code>)",id:"start_index-bigint_comparison_exp",level:4}],d={toc:s};function _(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boolean expression to filter rows from the table \"post_mention\". All fields are combined with a logical 'AND'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_bool_exp {\n  _and: [post_mention_bool_exp!]\n  _not: post_mention_bool_exp\n  _or: [post_mention_bool_exp!]\n  end_index: bigint_comparison_exp\n  mention: profile_bool_exp\n  mention_address: String_comparison_exp\n  post: post_bool_exp\n  start_index: bigint_comparison_exp\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"_and-post_mention_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_bool_exp!]")),")"),(0,r.kt)("h4",{id:"_not-post_mention_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_bool_exp")),")"),(0,r.kt)("h4",{id:"_or-post_mention_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_bool_exp!]")),")"),(0,r.kt)("h4",{id:"end_index-bigint_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,r.kt)("h4",{id:"mention-profile_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"mention"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,r.kt)("h4",{id:"mention_address-string_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"mention_address"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,r.kt)("h4",{id:"post-post_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,r.kt)("h4",{id:"start_index-bigint_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}_.isMDXComponent=!0}}]);