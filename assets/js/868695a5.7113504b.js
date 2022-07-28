"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97175],{3905:function(e,t,o){o.d(t,{Zo:function(){return _},kt:function(){return u}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},_=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,_=i(e,["components","mdxType","originalType","parentName"]),c=s(o),u=r,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||p;return o?n.createElement(m,a(a({ref:t},_),{},{components:o})):n.createElement(m,a({ref:t},_))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,a=new Array(p);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<p;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},28071:function(e,t,o){o.r(t),o.d(t,{assets:function(){return _},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=o(87462),r=o(63366),p=(o(67294),o(3905)),a=["components"],i={id:"post-url-bool-exp",title:"post_url_bool_exp",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/inputs/post-url-bool-exp",id:"version-4.2.0/graphql/inputs/post-url-bool-exp",title:"post_url_bool_exp",description:"Boolean expression to filter rows from the table \"post_url\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/post-url-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-url-bool-exp",permalink:"/graphql/inputs/post-url-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/post-url-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-url-bool-exp",title:"post_url_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_url_avg_order_by",permalink:"/graphql/inputs/post-url-avg-order-by"},next:{title:"post_url_max_order_by",permalink:"/graphql/inputs/post-url-max-order-by"}},_={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_url_bool_exp!]</code>)",id:"_and-post_url_bool_exp",level:4},{value:"<code>_not</code> (<code>post_url_bool_exp</code>)",id:"_not-post_url_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_url_bool_exp!]</code>)",id:"_or-post_url_bool_exp",level:4},{value:"<code>display_value</code> (<code>String_comparison_exp</code>)",id:"display_value-string_comparison_exp",level:4},{value:"<code>end_index</code> (<code>bigint_comparison_exp</code>)",id:"end_index-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>start_index</code> (<code>bigint_comparison_exp</code>)",id:"start_index-bigint_comparison_exp",level:4},{value:"<code>url</code> (<code>String_comparison_exp</code>)",id:"url-string_comparison_exp",level:4}],c={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"post_url\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_url_bool_exp {\n  _and: [post_url_bool_exp!]\n  _not: post_url_bool_exp\n  _or: [post_url_bool_exp!]\n  display_value: String_comparison_exp\n  end_index: bigint_comparison_exp\n  post: post_bool_exp\n  start_index: bigint_comparison_exp\n  url: String_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-post_url_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-url-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[post_url_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-post_url_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-url-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_url_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-post_url_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-url-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[post_url_bool_exp!]")),")"),(0,p.kt)("h4",{id:"display_value-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"display_value"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"end_index-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"post-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,p.kt)("h4",{id:"start_index-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"url-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"url"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}u.isMDXComponent=!0}}]);