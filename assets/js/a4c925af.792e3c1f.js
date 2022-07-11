"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59357],{3905:function(e,n,o){o.d(n,{Zo:function(){return d},kt:function(){return m}});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):p(p({},n),e)),o},d=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(o),m=r,u=c["".concat(l,".").concat(m)]||c[m]||_[m]||i;return o?t.createElement(u,p(p({ref:n},d),{},{components:o})):t.createElement(u,p({ref:n},d))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,p=new Array(i);p[0]=c;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var s=2;s<i;s++)p[s]=o[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},57418:function(e,n,o){o.r(n),o.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return _}});var t=o(87462),r=o(63366),i=(o(67294),o(3905)),p=["components"],a={id:"post-mention-bool-exp",title:"post_mention_bool_exp",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/inputs/post-mention-bool-exp",id:"version-4.1.0/graphql/inputs/post-mention-bool-exp",title:"post_mention_bool_exp",description:"Boolean expression to filter rows from the table \"post_mention\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-mention-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-bool-exp",permalink:"/graphql/inputs/post-mention-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-mention-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"post-mention-bool-exp",title:"post_mention_bool_exp",hide_table_of_contents:!1}},d={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_mention_bool_exp!]</code>)",id:"_and-post_mention_bool_exp",level:4},{value:"<code>_not</code> (<code>post_mention_bool_exp</code>)",id:"_not-post_mention_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_mention_bool_exp!]</code>)",id:"_or-post_mention_bool_exp",level:4},{value:"<code>end_index</code> (<code>bigint_comparison_exp</code>)",id:"end_index-bigint_comparison_exp",level:4},{value:"<code>mention</code> (<code>profile_bool_exp</code>)",id:"mention-profile_bool_exp",level:4},{value:"<code>mention_address</code> (<code>String_comparison_exp</code>)",id:"mention_address-string_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>start_index</code> (<code>bigint_comparison_exp</code>)",id:"start_index-bigint_comparison_exp",level:4}],c={toc:_};function m(e){var n=e.components,o=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to filter rows from the table \"post_mention\". All fields are combined with a logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_bool_exp {\n  _and: [post_mention_bool_exp!]\n  _not: post_mention_bool_exp\n  _or: [post_mention_bool_exp!]\n  end_index: bigint_comparison_exp\n  mention: profile_bool_exp\n  mention_address: String_comparison_exp\n  post: post_bool_exp\n  start_index: bigint_comparison_exp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_and-post_mention_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[post_mention_bool_exp!]")),")"),(0,i.kt)("h4",{id:"_not-post_mention_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"post_mention_bool_exp")),")"),(0,i.kt)("h4",{id:"_or-post_mention_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[post_mention_bool_exp!]")),")"),(0,i.kt)("h4",{id:"end_index-bigint_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,i.kt)("h4",{id:"mention-profile_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"mention"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,i.kt)("h4",{id:"mention_address-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"mention_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"post-post_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,i.kt)("h4",{id:"start_index-bigint_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}m.isMDXComponent=!0}}]);