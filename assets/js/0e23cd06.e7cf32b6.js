"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15266],{3905:function(e,o,r){r.d(o,{Zo:function(){return _},kt:function(){return m}});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function p(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),s=function(e){var o=n.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},_=function(e){var o=s(e.components);return n.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=t,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:o},_),{},{components:r})):n.createElement(f,i({ref:o},_))}));function m(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=c;var p={};for(var l in o)hasOwnProperty.call(o,l)&&(p[l]=o[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},44907:function(e,o,r){r.r(o),r.d(o,{assets:function(){return _},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=r(87462),t=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"profile-bool-exp",title:"profile_bool_exp",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/inputs/profile-bool-exp",id:"graphql/inputs/profile-bool-exp",title:"profile_bool_exp",description:"Boolean expression to filter rows from the table \"profile\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/profile-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profile-bool-exp",permalink:"/next/graphql/inputs/profile-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/profile-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"profile-bool-exp",title:"profile_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"posts_params_order_by",permalink:"/next/graphql/inputs/posts-params-order-by"},next:{title:"profile_order_by",permalink:"/next/graphql/inputs/profile-order-by"}},_={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[profile_bool_exp!]</code>)",id:"_and-profile_bool_exp",level:4},{value:"<code>_not</code> (<code>profile_bool_exp</code>)",id:"_not-profile_bool_exp",level:4},{value:"<code>_or</code> (<code>[profile_bool_exp!]</code>)",id:"_or-profile_bool_exp",level:4},{value:"<code>address</code> (<code>String_comparison_exp</code>)",id:"address-string_comparison_exp",level:4},{value:"<code>application_links</code> (<code>application_link_bool_exp</code>)",id:"application_links-application_link_bool_exp",level:4},{value:"<code>bio</code> (<code>String_comparison_exp</code>)",id:"bio-string_comparison_exp",level:4},{value:"<code>chain_links</code> (<code>chain_link_bool_exp</code>)",id:"chain_links-chain_link_bool_exp",level:4},{value:"<code>cover_pic</code> (<code>String_comparison_exp</code>)",id:"cover_pic-string_comparison_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>dtag</code> (<code>String_comparison_exp</code>)",id:"dtag-string_comparison_exp",level:4},{value:"<code>dtagTransferRequestsBySenderAddress</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"dtagtransferrequestsbysenderaddress-dtag_transfer_requests_bool_exp",level:4},{value:"<code>dtag_transfer_requests</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"dtag_transfer_requests-dtag_transfer_requests_bool_exp",level:4},{value:"<code>nickname</code> (<code>String_comparison_exp</code>)",id:"nickname-string_comparison_exp",level:4},{value:"<code>profileRelationshipsBySenderAddress</code> (<code>profile_relationship_bool_exp</code>)",id:"profilerelationshipsbysenderaddress-profile_relationship_bool_exp",level:4},{value:"<code>profile_pic</code> (<code>String_comparison_exp</code>)",id:"profile_pic-string_comparison_exp",level:4},{value:"<code>profile_relationships</code> (<code>profile_relationship_bool_exp</code>)",id:"profile_relationships-profile_relationship_bool_exp",level:4},{value:"<code>userBlocksByBlockerAddress</code> (<code>user_block_bool_exp</code>)",id:"userblocksbyblockeraddress-user_block_bool_exp",level:4},{value:"<code>user_blocks</code> (<code>user_block_bool_exp</code>)",id:"user_blocks-user_block_bool_exp",level:4}],c={toc:d};function m(e){var o=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"profile\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input profile_bool_exp {\n  _and: [profile_bool_exp!]\n  _not: profile_bool_exp\n  _or: [profile_bool_exp!]\n  address: String_comparison_exp\n  application_links: application_link_bool_exp\n  bio: String_comparison_exp\n  chain_links: chain_link_bool_exp\n  cover_pic: String_comparison_exp\n  creation_time: timestamp_comparison_exp\n  dtag: String_comparison_exp\n  dtagTransferRequestsBySenderAddress: dtag_transfer_requests_bool_exp\n  dtag_transfer_requests: dtag_transfer_requests_bool_exp\n  nickname: String_comparison_exp\n  profileRelationshipsBySenderAddress: profile_relationship_bool_exp\n  profile_pic: String_comparison_exp\n  profile_relationships: profile_relationship_bool_exp\n  userBlocksByBlockerAddress: user_block_bool_exp\n  user_blocks: user_block_bool_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[profile_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[profile_bool_exp!]")),")"),(0,a.kt)("h4",{id:"address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"application_links-application_link_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_links"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,a.kt)("h4",{id:"bio-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"bio"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"chain_links-chain_link_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_links"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"),(0,a.kt)("h4",{id:"cover_pic-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"cover_pic"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,a.kt)("h4",{id:"dtag-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"dtagtransferrequestsbysenderaddress-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"dtagTransferRequestsBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"),(0,a.kt)("h4",{id:"dtag_transfer_requests-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"),(0,a.kt)("h4",{id:"nickname-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"nickname"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"profilerelationshipsbysenderaddress-profile_relationship_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profileRelationshipsBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,a.kt)("h4",{id:"profile_pic-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_pic"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"profile_relationships-profile_relationship_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationships"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,a.kt)("h4",{id:"userblocksbyblockeraddress-user_block_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"userBlocksByBlockerAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"),(0,a.kt)("h4",{id:"user_blocks-user_block_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user_blocks"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"))}m.isMDXComponent=!0}}]);