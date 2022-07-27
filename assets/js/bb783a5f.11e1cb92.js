"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[82222],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,_=g["".concat(p,".").concat(d)]||g[d]||l[d]||s;return t?n.createElement(_,o(o({ref:r},i),{},{components:t})):n.createElement(_,o({ref:r},i))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=g;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91673:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],u={id:"subspace-user-group-aggregate",title:"subspace_user_group_aggregate",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/subscriptions/subspace-user-group-aggregate",id:"graphql/subscriptions/subspace-user-group-aggregate",title:"subspace_user_group_aggregate",description:'fetch aggregated fields from the table: "subspaceusergroup"',source:"@site/docs/07-graphql/subscriptions/subspace-user-group-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-user-group-aggregate",permalink:"/next/graphql/subscriptions/subspace-user-group-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/subspace-user-group-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"subspace-user-group-aggregate",title:"subspace_user_group_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section",permalink:"/next/graphql/subscriptions/subspace-section"},next:{title:"subspace_user_group_member_aggregate",permalink:"/next/graphql/subscriptions/subspace-user-group-member-aggregate"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_group_select_column!]</code>)",id:"distinct_on-subspace_user_group_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_group_order_by!]</code>)",id:"order_by-subspace_user_group_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_group_bool_exp</code>)",id:"where-subspace_user_group_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group_aggregate</code>",id:"subspace_user_group_aggregate",level:4}],g={toc:l};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch aggregated fields from the table: "subspace_user_group"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_group_aggregate(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): subspace_user_group_aggregate!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_user_group_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_user_group_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_user_group_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_user_group_aggregate"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-aggregate"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_aggregate"))),(0,s.kt)("p",null,'aggregated selection of "subspace_user_group"'))}d.isMDXComponent=!0}}]);