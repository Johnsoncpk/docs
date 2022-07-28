"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88250],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return _}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=c(t),_=s,b=d["".concat(p,".").concat(_)]||d[_]||l[_]||o;return t?n.createElement(b,u(u({ref:r},i),{},{components:t})):n.createElement(b,u({ref:r},i))}));function _(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,u[1]=a;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17668:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return p},default:function(){return _},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=t(87462),s=t(63366),o=(t(67294),t(3905)),u=["components"],a={id:"subspace-user-group",title:"subspace_user_group",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/queries/subspace-user-group",id:"version-4.2.0/graphql/queries/subspace-user-group",title:"subspace_user_group",description:'fetch data from the table: "subspaceusergroup"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/subspace-user-group.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-user-group",permalink:"/graphql/queries/subspace-user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/subspace-user-group.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-group",title:"subspace_user_group",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member",permalink:"/graphql/queries/subspace-user-group-member"},next:{title:"subspace_user_permission",permalink:"/graphql/queries/subspace-user-permission"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_group_select_column!]</code>)",id:"distinct_on-subspace_user_group_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_group_order_by!]</code>)",id:"order_by-subspace_user_group_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_group_bool_exp</code>)",id:"where-subspace_user_group_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group</code>",id:"subspace_user_group",level:4}],d={toc:l};function _(e){var r=e.components,t=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "subspace_user_group"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_group(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): [subspace_user_group!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-subspace_user_group_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-subspace_user_group_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-subspace_user_group_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"subspace_user_group"},(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group"))),(0,o.kt)("p",null,'columns and relationships of "subspace_user_group"'))}_.isMDXComponent=!0}}]);