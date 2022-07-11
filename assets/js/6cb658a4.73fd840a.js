"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83591],{3905:function(e,n,i){i.d(n,{Zo:function(){return _},kt:function(){return d}});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function c(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),h=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):c(c({},n),e)),i},_=function(e){var n=h(e.components);return t.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,_=o(e,["components","mdxType","originalType","parentName"]),p=h(i),d=r,s=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return i?t.createElement(s,c(c({ref:n},_),{},{components:i})):t.createElement(s,c({ref:n},_))}));function d(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,c=new Array(a);c[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var h=2;h<a;h++)c[h]=i[h];return t.createElement.apply(null,c)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},85337:function(e,n,i){i.r(n),i.d(n,{assets:function(){return _},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return h},toc:function(){return f}});var t=i(87462),r=i(63366),a=(i(67294),i(3905)),c=["components"],o={id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},l=void 0,h={unversionedId:"graphql/queries/chain-link-chain-config",id:"graphql/queries/chain-link-chain-config",title:"chain_link_chain_config",description:'fetch data from the table: "chainlinkchain_config"',source:"@site/docs/07-graphql/queries/chain-link-chain-config.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/chain-link-chain-config",permalink:"/next/graphql/queries/chain-link-chain-config",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/chain-link-chain-config.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link",permalink:"/next/graphql/queries/application-link"},next:{title:"chain_link_proof",permalink:"/next/graphql/queries/chain-link-proof"}},_={},f=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[chain_link_chain_config_select_column!]</code>)",id:"distinct_on-chain_link_chain_config_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[chain_link_chain_config_order_by!]</code>)",id:"order_by-chain_link_chain_config_order_by",level:4},{value:"<code>where</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"where-chain_link_chain_config_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_chain_config</code>",id:"chain_link_chain_config",level:4}],p={toc:f};function d(e){var n=e.components,i=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "chain_link_chain_config"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"chain_link_chain_config(\n  distinct_on: [chain_link_chain_config_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_chain_config_order_by!]\n  where: chain_link_chain_config_bool_exp\n): [chain_link_chain_config!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-chain_link_chain_config_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/chain-link-chain-config-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-chain_link_chain_config_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"chain_link_chain_config"},(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config"))),(0,a.kt)("p",null,'columns and relationships of "chain_link_chain_config"'))}d.isMDXComponent=!0}}]);