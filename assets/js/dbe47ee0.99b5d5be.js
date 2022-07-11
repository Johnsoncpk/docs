"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[21724],{3905:function(e,n,o){o.d(n,{Zo:function(){return _},kt:function(){return h}});var i=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,i,a=function(e,n){if(null==e)return{};var o,i,a={},t=Object.keys(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},_=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var o=e.components,a=e.mdxType,t=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),s=c(o),h=a,f=s["".concat(l,".").concat(h)]||s[h]||d[h]||t;return o?i.createElement(f,r(r({ref:n},_),{},{components:o})):i.createElement(f,r({ref:n},_))}));function h(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=o.length,r=new Array(t);r[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<t;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}s.displayName="MDXCreateElement"},55037:function(e,n,o){o.r(n),o.d(n,{assets:function(){return _},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var i=o(87462),a=o(63366),t=(o(67294),o(3905)),r=["components"],p={id:"chain-link-bool-exp",title:"chain_link_bool_exp",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/chain-link-bool-exp",id:"version-4.1.0/graphql/inputs/chain-link-bool-exp",title:"chain_link_bool_exp",description:"Boolean expression to filter rows from the table \"chain_link\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/chain-link-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-bool-exp",permalink:"/graphql/inputs/chain-link-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/chain-link-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"chain-link-bool-exp",title:"chain_link_bool_exp",hide_table_of_contents:!1}},_={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[chain_link_bool_exp!]</code>)",id:"_and-chain_link_bool_exp",level:4},{value:"<code>_not</code> (<code>chain_link_bool_exp</code>)",id:"_not-chain_link_bool_exp",level:4},{value:"<code>_or</code> (<code>[chain_link_bool_exp!]</code>)",id:"_or-chain_link_bool_exp",level:4},{value:"<code>chain_config</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"chain_config-chain_link_chain_config_bool_exp",level:4},{value:"<code>chain_link_proofs</code> (<code>chain_link_proof_bool_exp</code>)",id:"chain_link_proofs-chain_link_proof_bool_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>external_address</code> (<code>String_comparison_exp</code>)",id:"external_address-string_comparison_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>profile</code> (<code>profile_bool_exp</code>)",id:"profile-profile_bool_exp",level:4},{value:"<code>proof</code> (<code>chain_link_proof_bool_exp</code>)",id:"proof-chain_link_proof_bool_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4}],s={toc:d};function h(e){var n=e.components,o=(0,a.Z)(e,r);return(0,t.kt)("wrapper",(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"chain_link\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_bool_exp {\n  _and: [chain_link_bool_exp!]\n  _not: chain_link_bool_exp\n  _or: [chain_link_bool_exp!]\n  chain_config: chain_link_chain_config_bool_exp\n  chain_link_proofs: chain_link_proof_bool_exp\n  creation_time: timestamp_comparison_exp\n  external_address: String_comparison_exp\n  height: bigint_comparison_exp\n  profile: profile_bool_exp\n  proof: chain_link_proof_bool_exp\n  user_address: String_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-chain_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-chain_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-chain_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_bool_exp!]")),")"),(0,t.kt)("h4",{id:"chain_config-chain_link_chain_config_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_config"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,t.kt)("h4",{id:"chain_link_proofs-chain_link_proof_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_proofs"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"),(0,t.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,t.kt)("h4",{id:"external_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"external_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"height-bigint_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",{id:"profile-profile_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,t.kt)("h4",{id:"proof-chain_link_proof_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"proof"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"),(0,t.kt)("h4",{id:"user_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}h.isMDXComponent=!0}}]);