"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46645],{3905:function(e,r,s){s.d(r,{Zo:function(){return c},kt:function(){return d}});var t=s(67294);function n(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function i(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?i(Object(s),!0).forEach((function(r){n(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function a(e,r){if(null==e)return{};var s,t,n=function(e,r){if(null==e)return{};var s,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var p=t.createContext({}),u=function(e){var r=t.useContext(p),s=r;return e&&(s="function"==typeof e?e(r):o(o({},r),e)),s},c=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var s=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(s),d=n,b=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return s?t.createElement(b,o(o({ref:r},c),{},{components:s})):t.createElement(b,o({ref:r},c))}));function d(e,r){var s=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=s.length,o=new Array(i);o[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var u=2;u<i;u++)o[u]=s[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},65849:function(e,r,s){s.r(r),s.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var t=s(87462),n=s(63366),i=(s(67294),s(3905)),o=["components"],a={id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},p=void 0,u={unversionedId:"graphql/subscriptions/subspace-user-permission",id:"version-4.1.0/graphql/subscriptions/subspace-user-permission",title:"subspace_user_permission",description:'fetch data from the table: "subspaceuserpermission"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/subspace-user-permission.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-user-permission",permalink:"/graphql/subscriptions/subspace-user-permission",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/subspace-user-permission.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group",permalink:"/graphql/subscriptions/subspace-user-group"},next:{title:"subspace",permalink:"/graphql/subscriptions/subspace"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_permission_select_column!]</code>)",id:"distinct_on-subspace_user_permission_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_permission_order_by!]</code>)",id:"order_by-subspace_user_permission_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_permission_bool_exp</code>)",id:"where-subspace_user_permission_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_permission</code>",id:"subspace_user_permission",level:4}],m={toc:l};function d(e){var r=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,s,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'fetch data from the table: "subspace_user_permission"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_permission(\n  distinct_on: [subspace_user_permission_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_permission_order_by!]\n  where: subspace_user_permission_bool_exp\n): [subspace_user_permission!]!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"distinct_on-subspace_user_permission_select_column"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/subspace-user-permission-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_select_column!]")),")"),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("h4",{id:"order_by-subspace_user_permission_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_order_by!]")),")"),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("h4",{id:"where-subspace_user_permission_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp")),")"),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"subspace_user_permission"},(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission"))),(0,i.kt)("p",null,'columns and relationships of "subspace_user_permission"'))}d.isMDXComponent=!0}}]);