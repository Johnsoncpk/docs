"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[69580],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||l;return n?r.createElement(u,i(i({ref:t},k),{},{components:n})):r.createElement(u,i({ref:t},k))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"profile",title:"profile",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/objects/profile",id:"graphql/objects/profile",title:"profile",description:'columns and relationships of "profile"',source:"@site/docs/07-graphql/objects/profile.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/profile",permalink:"/next/graphql/objects/profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/profile.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"profile",title:"profile",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship",permalink:"/next/graphql/objects/profile-relationship"},next:{title:"profiles_params",permalink:"/next/graphql/objects/profiles-params"}},k={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>address</code> (<code>String!</code>)",id:"address-string",level:4},{value:"<code>application_links</code> (<code>[application_link!]!</code>)",id:"application_links-application_link",level:4},{value:"<code>bio</code> (<code>String!</code>)",id:"bio-string",level:4},{value:"<code>chain_links</code> (<code>[chain_link!]!</code>)",id:"chain_links-chain_link",level:4},{value:"<code>cover_pic</code> (<code>String!</code>)",id:"cover_pic-string",level:4},{value:"<code>creation_time</code> (<code>timestamp!</code>)",id:"creation_time-timestamp",level:4},{value:"<code>dtag</code> (<code>String!</code>)",id:"dtag-string",level:4},{value:"<code>dtagTransferRequestsBySenderAddress</code> (<code>[dtag_transfer_requests!]!</code>)",id:"dtagtransferrequestsbysenderaddress-dtag_transfer_requests",level:4},{value:"<code>dtag_transfer_requests</code> (<code>[dtag_transfer_requests!]!</code>)",id:"dtag_transfer_requests-dtag_transfer_requests",level:4},{value:"<code>nickname</code> (<code>String!</code>)",id:"nickname-string",level:4},{value:"<code>profileRelationshipsBySenderAddress</code> (<code>[profile_relationship!]!</code>)",id:"profilerelationshipsbysenderaddress-profile_relationship",level:4},{value:"<code>profileRelationshipsBySenderAddress_aggregate</code> (<code>profile_relationship_aggregate!</code>)",id:"profilerelationshipsbysenderaddress_aggregate-profile_relationship_aggregate",level:4},{value:"<code>profile_pic</code> (<code>String!</code>)",id:"profile_pic-string",level:4},{value:"<code>profile_relationships</code> (<code>[profile_relationship!]!</code>)",id:"profile_relationships-profile_relationship",level:4},{value:"<code>profile_relationships_aggregate</code> (<code>profile_relationship_aggregate!</code>)",id:"profile_relationships_aggregate-profile_relationship_aggregate",level:4},{value:"<code>userBlocksByBlockerAddress</code> (<code>[user_block!]!</code>)",id:"userblocksbyblockeraddress-user_block",level:4},{value:"<code>userBlocksByBlockerAddress_aggregate</code> (<code>user_block_aggregate!</code>)",id:"userblocksbyblockeraddress_aggregate-user_block_aggregate",level:4},{value:"<code>user_blocks</code> (<code>[user_block!]!</code>)",id:"user_blocks-user_block",level:4},{value:"<code>user_blocks_aggregate</code> (<code>user_block_aggregate!</code>)",id:"user_blocks_aggregate-user_block_aggregate",level:4}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'columns and relationships of "profile"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type profile {\n  address: String!\n  application_links(\n  distinct_on: [application_link_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [application_link_order_by!]\n  where: application_link_bool_exp\n): [application_link!]!\n  bio: String!\n  chain_links(\n  distinct_on: [chain_link_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_order_by!]\n  where: chain_link_bool_exp\n): [chain_link!]!\n  cover_pic: String!\n  creation_time: timestamp!\n  dtag: String!\n  dtagTransferRequestsBySenderAddress(\n  distinct_on: [dtag_transfer_requests_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [dtag_transfer_requests_order_by!]\n  where: dtag_transfer_requests_bool_exp\n): [dtag_transfer_requests!]!\n  dtag_transfer_requests(\n  distinct_on: [dtag_transfer_requests_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [dtag_transfer_requests_order_by!]\n  where: dtag_transfer_requests_bool_exp\n): [dtag_transfer_requests!]!\n  nickname: String!\n  profileRelationshipsBySenderAddress(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): [profile_relationship!]!\n  profileRelationshipsBySenderAddress_aggregate(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): profile_relationship_aggregate!\n  profile_pic: String!\n  profile_relationships(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): [profile_relationship!]!\n  profile_relationships_aggregate(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): profile_relationship_aggregate!\n  userBlocksByBlockerAddress(\n  distinct_on: [user_block_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [user_block_order_by!]\n  where: user_block_bool_exp\n): [user_block!]!\n  userBlocksByBlockerAddress_aggregate(\n  distinct_on: [user_block_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [user_block_order_by!]\n  where: user_block_bool_exp\n): user_block_aggregate!\n  user_blocks(\n  distinct_on: [user_block_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [user_block_order_by!]\n  where: user_block_bool_exp\n): [user_block!]!\n  user_blocks_aggregate(\n  distinct_on: [user_block_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [user_block_order_by!]\n  where: user_block_bool_exp\n): user_block_aggregate!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"address-string"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"address"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,l.kt)("h4",{id:"application_links-application_link"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"application_links"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link"},(0,l.kt)("inlineCode",{parentName:"a"},"[application_link!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-application_link_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/application-link-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[application_link_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-application_link_order_by"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/application-link-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[application_link_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-application_link_bool_exp"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/application-link-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"bio-string"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"bio"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,l.kt)("h4",{id:"chain_links-chain_link"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"chain_links"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/chain-link"},(0,l.kt)("inlineCode",{parentName:"a"},"[chain_link!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-chain_link_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/chain-link-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[chain_link_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-chain_link_order_by"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/chain-link-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[chain_link_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-chain_link_bool_exp"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/chain-link-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"cover_pic-string"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"cover_pic"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,l.kt)("h4",{id:"creation_time-timestamp"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,l.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,l.kt)("h4",{id:"dtag-string"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"dtag"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,l.kt)("h4",{id:"dtagtransferrequestsbysenderaddress-dtag_transfer_requests"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"dtagTransferRequestsBySenderAddress"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests"},(0,l.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-dtag_transfer_requests_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/dtag-transfer-requests-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-dtag_transfer_requests_order_by"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/dtag-transfer-requests-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-dtag_transfer_requests_bool_exp"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"dtag_transfer_requests-dtag_transfer_requests"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests"},(0,l.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-dtag_transfer_requests_select_column-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/dtag-transfer-requests-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-dtag_transfer_requests_order_by-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/dtag-transfer-requests-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-dtag_transfer_requests_bool_exp-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"nickname-string"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"nickname"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,l.kt)("h4",{id:"profilerelationshipsbysenderaddress-profile_relationship"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"profileRelationshipsBySenderAddress"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/profile-relationship"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-profile_relationship_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/profile-relationship-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-4"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-4"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-profile_relationship_order_by"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-profile_relationship_bool_exp"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"profilerelationshipsbysenderaddress_aggregate-profile_relationship_aggregate"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"profileRelationshipsBySenderAddress_aggregate"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-aggregate"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationship_aggregate!")),")"),(0,l.kt)("p",null,"An aggregate relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-profile_relationship_select_column-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/profile-relationship-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-5"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-5"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-profile_relationship_order_by-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-profile_relationship_bool_exp-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"profile_pic-string"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_pic"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,l.kt)("h4",{id:"profile_relationships-profile_relationship"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationships"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/profile-relationship"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-profile_relationship_select_column-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/profile-relationship-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-6"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-6"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-profile_relationship_order_by-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-profile_relationship_bool_exp-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"profile_relationships_aggregate-profile_relationship_aggregate"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationships_aggregate"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-aggregate"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationship_aggregate!")),")"),(0,l.kt)("p",null,"An aggregate relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-profile_relationship_select_column-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/profile-relationship-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-7"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-7"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-profile_relationship_order_by-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-profile_relationship_bool_exp-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/profile-relationship-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"userblocksbyblockeraddress-user_block"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"userBlocksByBlockerAddress"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/user-block"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-user_block_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/user-block-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-8"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-8"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-user_block_order_by"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-user_block_bool_exp"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"userblocksbyblockeraddress_aggregate-user_block_aggregate"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"userBlocksByBlockerAddress_aggregate"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/user-block-aggregate"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_aggregate!")),")"),(0,l.kt)("p",null,"An aggregate relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-user_block_select_column-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/user-block-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-9"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-9"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-user_block_order_by-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-user_block_bool_exp-1"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"user_blocks-user_block"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"user_blocks"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/user-block"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block!]!")),")"),(0,l.kt)("p",null,"An array relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-user_block_select_column-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/user-block-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-10"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-10"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-user_block_order_by-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-user_block_bool_exp-2"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h4",{id:"user_blocks_aggregate-user_block_aggregate"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"user_blocks_aggregate"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/user-block-aggregate"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_aggregate!")),")"),(0,l.kt)("p",null,"An aggregate relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct_on-user_block_select_column-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/user-block-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_select_column!]")),")"))),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"limit-int-11"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"offset-int-11"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"order_by-user_block_order_by-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_order_by!]")),")"))),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"where-user_block_bool_exp-3"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h5",href:"../inputs/user-block-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"))),(0,l.kt)("p",null,"filter the rows returned"))}h.isMDXComponent=!0}}]);