"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68030],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,k=d["".concat(c,".").concat(f)]||d[f]||h[f]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34440:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"chain-link",title:"chain_link",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/chain-link",id:"version-4.1.0/graphql/objects/chain-link",title:"chain_link",description:'columns and relationships of "chain_link"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/chain-link.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link",permalink:"/graphql/objects/chain-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/chain-link.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"chain-link",title:"chain_link",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof",permalink:"/graphql/objects/chain-link-proof"},next:{title:"dtag_transfer_requests",permalink:"/graphql/objects/dtag-transfer-requests"}},s={},h=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_config</code> (<code>chain_link_chain_config!</code>)",id:"chain_config-chain_link_chain_config",level:4},{value:"<code>chain_link_proofs</code> (<code>[chain_link_proof!]!</code>)",id:"chain_link_proofs-chain_link_proof",level:4},{value:"<code>creation_time</code> (<code>timestamp!</code>)",id:"creation_time-timestamp",level:4},{value:"<code>external_address</code> (<code>String!</code>)",id:"external_address-string",level:4},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"<code>profile</code> (<code>profile!</code>)",id:"profile-profile",level:4},{value:"<code>proof</code> (<code>chain_link_proof</code>)",id:"proof-chain_link_proof",level:4},{value:"<code>user_address</code> (<code>String!</code>)",id:"user_address-string",level:4}],d={toc:h};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'columns and relationships of "chain_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link {\n  chain_config: chain_link_chain_config!\n  chain_link_proofs(\n  distinct_on: [chain_link_proof_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_proof_order_by!]\n  where: chain_link_proof_bool_exp\n): [chain_link_proof!]!\n  creation_time: timestamp!\n  external_address: String!\n  height: bigint!\n  profile: profile!\n  proof: chain_link_proof\n  user_address: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"chain_config-chain_link_chain_config"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_config"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config!")),")"),(0,i.kt)("p",null,"An object relationship"),(0,i.kt)("h4",{id:"chain_link_proofs-chain_link_proof"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proofs"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof!]!")),")"),(0,i.kt)("p",null,"An array relationship"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct_on-chain_link_proof_select_column"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/chain-link-proof-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_select_column!]")),")"))),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"offset-int"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"order_by-chain_link_proof_order_by"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/chain-link-proof-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_order_by!]")),")"))),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-chain_link_proof_bool_exp"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/chain-link-proof-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"))),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h4",{id:"creation_time-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,i.kt)("h4",{id:"external_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"external_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,i.kt)("h4",{id:"profile-profile"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,i.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,i.kt)("p",null,"An object relationship"),(0,i.kt)("h4",{id:"proof-chain_link_proof"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"proof"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof")),")"),(0,i.kt)("p",null,"An object relationship"),(0,i.kt)("h4",{id:"user_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}f.isMDXComponent=!0}}]);