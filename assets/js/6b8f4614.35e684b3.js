"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44029],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=o,h=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return t?r.createElement(h,a(a({ref:n},f),{},{components:t})):r.createElement(h,a({ref:n},f))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},98298:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"chain-link-proof",title:"chain_link_proof",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/queries/chain-link-proof",id:"version-4.1.0/graphql/queries/chain-link-proof",title:"chain_link_proof",description:'fetch data from the table: "chainlinkproof"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/chain-link-proof.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/chain-link-proof",permalink:"/graphql/queries/chain-link-proof",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/chain-link-proof.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"chain-link-proof",title:"chain_link_proof",hide_table_of_contents:!1}},f={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[chain_link_proof_select_column!]</code>)",id:"distinct_on-chain_link_proof_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[chain_link_proof_order_by!]</code>)",id:"order_by-chain_link_proof_order_by",level:4},{value:"<code>where</code> (<code>chain_link_proof_bool_exp</code>)",id:"where-chain_link_proof_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_proof</code>",id:"chain_link_proof",level:4}],s={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'fetch data from the table: "chain_link_proof"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"chain_link_proof(\n  distinct_on: [chain_link_proof_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_proof_order_by!]\n  where: chain_link_proof_bool_exp\n): [chain_link_proof!]!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"distinct_on-chain_link_proof_select_column"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/chain-link-proof-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_select_column!]")),")"),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("h4",{id:"order_by-chain_link_proof_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_order_by!]")),")"),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("h4",{id:"where-chain_link_proof_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"chain_link_proof"},(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof"))),(0,i.kt)("p",null,'columns and relationships of "chain_link_proof"'))}u.isMDXComponent=!0}}]);