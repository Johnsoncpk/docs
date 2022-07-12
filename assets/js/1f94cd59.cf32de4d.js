"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79360],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(o),h=a,u=c["".concat(s,".").concat(h)]||c[h]||_[h]||r;return o?n.createElement(u,p(p({ref:t},d),{},{components:o})):n.createElement(u,p({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,p=new Array(r);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<r;l++)p[l]=o[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},21182:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return _}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),p=["components"],i={id:"post-hashtag-bool-exp",title:"post_hashtag_bool_exp",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/inputs/post-hashtag-bool-exp",id:"version-4.1.0/graphql/inputs/post-hashtag-bool-exp",title:"post_hashtag_bool_exp",description:"Boolean expression to filter rows from the table \"post_hashtag\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-hashtag-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-bool-exp",permalink:"/graphql/inputs/post-hashtag-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-hashtag-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"post-hashtag-bool-exp",title:"post_hashtag_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_avg_order_by",permalink:"/graphql/inputs/post-hashtag-avg-order-by"},next:{title:"post_hashtag_max_order_by",permalink:"/graphql/inputs/post-hashtag-max-order-by"}},d={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_hashtag_bool_exp!]</code>)",id:"_and-post_hashtag_bool_exp",level:4},{value:"<code>_not</code> (<code>post_hashtag_bool_exp</code>)",id:"_not-post_hashtag_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_hashtag_bool_exp!]</code>)",id:"_or-post_hashtag_bool_exp",level:4},{value:"<code>end_index</code> (<code>bigint_comparison_exp</code>)",id:"end_index-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>start_index</code> (<code>bigint_comparison_exp</code>)",id:"start_index-bigint_comparison_exp",level:4},{value:"<code>tag</code> (<code>String_comparison_exp</code>)",id:"tag-string_comparison_exp",level:4}],c={toc:_};function h(e){var t=e.components,o=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boolean expression to filter rows from the table \"post_hashtag\". All fields are combined with a logical 'AND'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_bool_exp {\n  _and: [post_hashtag_bool_exp!]\n  _not: post_hashtag_bool_exp\n  _or: [post_hashtag_bool_exp!]\n  end_index: bigint_comparison_exp\n  post: post_bool_exp\n  start_index: bigint_comparison_exp\n  tag: String_comparison_exp\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"_and-post_hashtag_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_hashtag_bool_exp!]")),")"),(0,r.kt)("h4",{id:"_not-post_hashtag_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp")),")"),(0,r.kt)("h4",{id:"_or-post_hashtag_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_hashtag_bool_exp!]")),")"),(0,r.kt)("h4",{id:"end_index-bigint_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,r.kt)("h4",{id:"post-post_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,r.kt)("h4",{id:"start_index-bigint_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,r.kt)("h4",{id:"tag-string_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}h.isMDXComponent=!0}}]);