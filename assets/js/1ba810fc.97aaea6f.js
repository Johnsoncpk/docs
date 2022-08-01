"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[74967],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,m=d["".concat(l,".").concat(f)]||d[f]||_[f]||p;return o?r.createElement(m,a(a({ref:t},s),{},{components:o})):r.createElement(m,a({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,a=new Array(p);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<p;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},40769:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>_,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const p={id:"post-reference-bool-exp",title:"post_reference_bool_exp",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/inputs/post-reference-bool-exp",id:"graphql/inputs/post-reference-bool-exp",title:"post_reference_bool_exp",description:"Boolean expression to filter rows from the table \"post_reference\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/post-reference-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-bool-exp",permalink:"/next/graphql/inputs/post-reference-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"post-reference-bool-exp",title:"post_reference_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_avg_order_by",permalink:"/next/graphql/inputs/post-reference-avg-order-by"},next:{title:"post_reference_max_order_by",permalink:"/next/graphql/inputs/post-reference-max-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_reference_bool_exp!]</code>)",id:"_and-post_reference_bool_exp",level:4},{value:"<code>_not</code> (<code>post_reference_bool_exp</code>)",id:"_not-post_reference_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_reference_bool_exp!]</code>)",id:"_or-post_reference_bool_exp",level:4},{value:"<code>position_index</code> (<code>bigint_comparison_exp</code>)",id:"position_index-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>reference_id</code> (<code>bigint_comparison_exp</code>)",id:"reference_id-bigint_comparison_exp",level:4},{value:"<code>type</code> (<code>String_comparison_exp</code>)",id:"type-string_comparison_exp",level:4}],s={toc:c};function _(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"post_reference\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_bool_exp {\n  _and: [post_reference_bool_exp!]\n  _not: post_reference_bool_exp\n  _or: [post_reference_bool_exp!]\n  position_index: bigint_comparison_exp\n  post: post_bool_exp\n  reference_id: bigint_comparison_exp\n  type: String_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-post_reference_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_reference_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-post_reference_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_reference_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-post_reference_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_reference_bool_exp!]")),")"),(0,n.kt)("h4",{id:"position_index-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"post-post_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,n.kt)("h4",{id:"reference_id-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"type-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}_.isMDXComponent=!0}}]);