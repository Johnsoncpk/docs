"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44088],{3905:function(e,n,o){o.d(n,{Zo:function(){return _},kt:function(){return f}});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},_=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),d=c(o),f=r,h=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return o?t.createElement(h,a(a({ref:n},_),{},{components:o})):t.createElement(h,a({ref:n},_))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62176:function(e,n,o){o.r(n),o.d(n,{assets:function(){return _},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var t=o(87462),r=o(63366),i=(o(67294),o(3905)),a=["components"],p={id:"chain-link-proof-bool-exp",title:"chain_link_proof_bool_exp",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/chain-link-proof-bool-exp",id:"graphql/inputs/chain-link-proof-bool-exp",title:"chain_link_proof_bool_exp",description:"Boolean expression to filter rows from the table \"chainlinkproof\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/chain-link-proof-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-bool-exp",permalink:"/next/graphql/inputs/chain-link-proof-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"chain-link-proof-bool-exp",title:"chain_link_proof_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_aggregate_order_by",permalink:"/next/graphql/inputs/chain-link-proof-aggregate-order-by"},next:{title:"chain_link_proof_max_order_by",permalink:"/next/graphql/inputs/chain-link-proof-max-order-by"}},_={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[chain_link_proof_bool_exp!]</code>)",id:"_and-chain_link_proof_bool_exp",level:4},{value:"<code>_not</code> (<code>chain_link_proof_bool_exp</code>)",id:"_not-chain_link_proof_bool_exp",level:4},{value:"<code>_or</code> (<code>[chain_link_proof_bool_exp!]</code>)",id:"_or-chain_link_proof_bool_exp",level:4},{value:"<code>chain_link</code> (<code>chain_link_bool_exp</code>)",id:"chain_link-chain_link_bool_exp",level:4},{value:"<code>plain_text</code> (<code>String_comparison_exp</code>)",id:"plain_text-string_comparison_exp",level:4},{value:"<code>public_key</code> (<code>jsonb_comparison_exp</code>)",id:"public_key-jsonb_comparison_exp",level:4},{value:"<code>signature</code> (<code>String_comparison_exp</code>)",id:"signature-string_comparison_exp",level:4}],d={toc:s};function f(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to filter rows from the table \"chain_link_proof\". All fields are combined with a logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_bool_exp {\n  _and: [chain_link_proof_bool_exp!]\n  _not: chain_link_proof_bool_exp\n  _or: [chain_link_proof_bool_exp!]\n  chain_link: chain_link_bool_exp\n  plain_text: String_comparison_exp\n  public_key: jsonb_comparison_exp\n  signature: String_comparison_exp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_and-chain_link_proof_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_bool_exp!]")),")"),(0,i.kt)("h4",{id:"_not-chain_link_proof_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"),(0,i.kt)("h4",{id:"_or-chain_link_proof_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_bool_exp!]")),")"),(0,i.kt)("h4",{id:"chain_link-chain_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"),(0,i.kt)("h4",{id:"plain_text-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"plain_text"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"public_key-jsonb_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"public_key"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,i.kt)("h4",{id:"signature-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"signature"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}f.isMDXComponent=!0}}]);