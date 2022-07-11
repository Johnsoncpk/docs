"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[73590],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return _}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(o),_=r,m=u["".concat(l,".").concat(_)]||u[_]||d[_]||a;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function _(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},99734:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],p={id:"reaction-bool-exp",title:"reaction_bool_exp",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/reaction-bool-exp",id:"graphql/inputs/reaction-bool-exp",title:"reaction_bool_exp",description:"Boolean expression to filter rows from the table \"reaction\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/reaction-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reaction-bool-exp",permalink:"/next/graphql/inputs/reaction-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/reaction-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"reaction-bool-exp",title:"reaction_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_avg_order_by",permalink:"/next/graphql/inputs/reaction-avg-order-by"},next:{title:"reaction_max_order_by",permalink:"/next/graphql/inputs/reaction-max-order-by"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[reaction_bool_exp!]</code>)",id:"_and-reaction_bool_exp",level:4},{value:"<code>_not</code> (<code>reaction_bool_exp</code>)",id:"_not-reaction_bool_exp",level:4},{value:"<code>_or</code> (<code>[reaction_bool_exp!]</code>)",id:"_or-reaction_bool_exp",level:4},{value:"<code>author_address</code> (<code>String_comparison_exp</code>)",id:"author_address-string_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>value</code> (<code>jsonb_comparison_exp</code>)",id:"value-jsonb_comparison_exp",level:4}],u={toc:d};function _(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"reaction\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input reaction_bool_exp {\n  _and: [reaction_bool_exp!]\n  _not: reaction_bool_exp\n  _or: [reaction_bool_exp!]\n  author_address: String_comparison_exp\n  id: bigint_comparison_exp\n  post: post_bool_exp\n  value: jsonb_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"reaction_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"author_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"post-post_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,a.kt)("h4",{id:"value-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"value"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}_.isMDXComponent=!0}}]);