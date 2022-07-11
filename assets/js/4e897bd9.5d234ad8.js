"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[10140],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return _}});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(o),_=a,u=d["".concat(l,".").concat(_)]||d[_]||m[_]||n;return o?r.createElement(u,p(p({ref:t},c),{},{components:o})):r.createElement(u,p({ref:t},c))}));function _(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<n;i++)p[i]=o[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},90320:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var r=o(87462),a=o(63366),n=(o(67294),o(3905)),p=["components"],s={id:"posts-params-bool-exp",title:"posts_params_bool_exp",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/inputs/posts-params-bool-exp",id:"graphql/inputs/posts-params-bool-exp",title:"posts_params_bool_exp",description:"Boolean expression to filter rows from the table \"posts_params\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/posts-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/posts-params-bool-exp",permalink:"/next/graphql/inputs/posts-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/posts-params-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"posts-params-bool-exp",title:"posts_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_variance_order_by",permalink:"/next/graphql/inputs/post-variance-order-by"},next:{title:"posts_params_order_by",permalink:"/next/graphql/inputs/posts-params-order-by"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[posts_params_bool_exp!]</code>)",id:"_and-posts_params_bool_exp",level:4},{value:"<code>_not</code> (<code>posts_params_bool_exp</code>)",id:"_not-posts_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[posts_params_bool_exp!]</code>)",id:"_or-posts_params_bool_exp",level:4},{value:"<code>params</code> (<code>jsonb_comparison_exp</code>)",id:"params-jsonb_comparison_exp",level:4}],d={toc:m};function _(e){var t=e.components,o=(0,a.Z)(e,p);return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"posts_params\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input posts_params_bool_exp {\n  _and: [posts_params_bool_exp!]\n  _not: posts_params_bool_exp\n  _or: [posts_params_bool_exp!]\n  params: jsonb_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-posts_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/posts-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[posts_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-posts_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/posts-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"posts_params_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-posts_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/posts-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[posts_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"params-jsonb_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}_.isMDXComponent=!0}}]);