"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={id:"subspace-section",title:"subspace_section",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/objects/subspace-section",id:"version-4.2.0/graphql/objects/subspace-section",title:"subspace_section",description:'columns and relationships of "subspace_section"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/subspace-section.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-section",permalink:"/graphql/objects/subspace-section",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/subspace-section.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"subspace-section",title:"subspace_section",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason",permalink:"/graphql/objects/subspace-report-reason"},next:{title:"subspace_user_group_aggregate_fields",permalink:"/graphql/objects/subspace-user-group-aggregate-fields"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>children</code> (<code>[subspace_section!]!</code>)",id:"children-subspace_section",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4},{value:"<code>parent</code> (<code>subspace_section</code>)",id:"parent-subspace_section",level:4},{value:"<code>posts</code> (<code>[post!]!</code>)",id:"posts-post",level:4},{value:"<code>posts_aggregate</code> (<code>post_aggregate!</code>)",id:"posts_aggregate-post_aggregate",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4},{value:"<code>user_groups</code> (<code>[subspace_user_group!]!</code>)",id:"user_groups-subspace_user_group",level:4},{value:"<code>user_groups_aggregate</code> (<code>subspace_user_group_aggregate!</code>)",id:"user_groups_aggregate-subspace_user_group_aggregate",level:4},{value:"<code>user_permissions</code> (<code>[subspace_user_permission!]!</code>)",id:"user_permissions-subspace_user_permission",level:4}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'columns and relationships of "subspace_section"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_section {\n  children(\n  distinct_on: [subspace_section_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_section_order_by!]\n  where: subspace_section_bool_exp\n): [subspace_section!]!\n  description: String\n  id: bigint!\n  name: String!\n  parent: subspace_section\n  posts(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): [post!]!\n  posts_aggregate(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): post_aggregate!\n  subspace: subspace!\n  subspace_id: bigint!\n  user_groups(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): [subspace_user_group!]!\n  user_groups_aggregate(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): subspace_user_group_aggregate!\n  user_permissions(\n  distinct_on: [subspace_user_permission_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_permission_order_by!]\n  where: subspace_user_permission_bool_exp\n): [subspace_user_permission!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"children-subspace_section"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"children"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_section!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-subspace_section_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/subspace-section-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_section_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-subspace_section_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-section-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_section_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-subspace_section_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-section-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"description-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,r.kt)("h4",{id:"name-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"parent-subspace_section"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"parent"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_section")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"posts-post"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post"},(0,r.kt)("inlineCode",{parentName:"a"},"[post!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"posts_aggregate-post_aggregate"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"posts_aggregate"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-aggregate"},(0,r.kt)("inlineCode",{parentName:"a"},"post_aggregate!")),")"),(0,r.kt)("p",null,"An aggregate relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_select_column-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_order_by-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_bool_exp-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"subspace-subspace"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"subspace_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,r.kt)("h4",{id:"user_groups-subspace_user_group"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_group!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_group_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-subspace_user_group_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-subspace_user_group_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"user_groups_aggregate-subspace_user_group_aggregate"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user_groups_aggregate"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-aggregate"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_group_aggregate!")),")"),(0,r.kt)("p",null,"An aggregate relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_group_select_column-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-subspace_user_group_order_by-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-subspace_user_group_bool_exp-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"user_permissions-subspace_user_permission"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user_permissions"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_permission_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/subspace-user-permission-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-subspace_user_permission_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-permission-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-subspace_user_permission_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-permission-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"))}c.isMDXComponent=!0}}]);