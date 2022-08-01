"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3580],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>_});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=s.createContext({}),c=function(e){var r=s.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=c(e.components);return s.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(t),_=n,b=d["".concat(p,".").concat(_)]||d[_]||l[_]||o;return t?s.createElement(b,a(a({ref:r},i),{},{components:t})):s.createElement(b,a({ref:r},i))}));function _(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46286:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var s=t(87462),n=(t(67294),t(3905));const o={id:"subspace-user-group",title:"subspace_user_group",hide_table_of_contents:!1},a=void 0,u={unversionedId:"graphql/queries/subspace-user-group",id:"version-4.1.0/graphql/queries/subspace-user-group",title:"subspace_user_group",description:'fetch data from the table: "subspaceusergroup"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/subspace-user-group.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-user-group",permalink:"/4.1.0/graphql/queries/subspace-user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/subspace-user-group.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"subspace-user-group",title:"subspace_user_group",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member",permalink:"/4.1.0/graphql/queries/subspace-user-group-member"},next:{title:"subspace_user_permission",permalink:"/4.1.0/graphql/queries/subspace-user-permission"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_group_select_column!]</code>)",id:"distinct_on-subspace_user_group_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_group_order_by!]</code>)",id:"order_by-subspace_user_group_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_group_bool_exp</code>)",id:"where-subspace_user_group_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group</code>",id:"subspace_user_group",level:4}],i={toc:c};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "subspace_user_group"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_group(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): [subspace_user_group!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-subspace_user_group_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-subspace_user_group_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-subspace_user_group_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_user_group"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group"))),(0,n.kt)("p",null,'columns and relationships of "subspace_user_group"'))}l.isMDXComponent=!0}}]);