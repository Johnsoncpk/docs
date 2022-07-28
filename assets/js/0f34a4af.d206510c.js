"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[12937],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,h=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10359:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={id:"profile-relationship-aggregate",title:"profile_relationship_aggregate",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/subscriptions/profile-relationship-aggregate",id:"version-4.2.0/graphql/subscriptions/profile-relationship-aggregate",title:"profile_relationship_aggregate",description:'fetch aggregated fields from the table: "profile_relationship"',source:"@site/versioned_docs/version-4.2.0/07-graphql/subscriptions/profile-relationship-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/profile-relationship-aggregate",permalink:"/graphql/subscriptions/profile-relationship-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/subscriptions/profile-relationship-aggregate.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"profile-relationship-aggregate",title:"profile_relationship_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_by_pk",permalink:"/graphql/subscriptions/profile-by-pk"},next:{title:"profile_relationship",permalink:"/graphql/subscriptions/profile-relationship"}},c={},f=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profile_relationship_select_column!]</code>)",id:"distinct_on-profile_relationship_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profile_relationship_order_by!]</code>)",id:"order_by-profile_relationship_order_by",level:4},{value:"<code>where</code> (<code>profile_relationship_bool_exp</code>)",id:"where-profile_relationship_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile_relationship_aggregate</code>",id:"profile_relationship_aggregate",level:4}],d={toc:f};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch aggregated fields from the table: "profile_relationship"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"profile_relationship_aggregate(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): profile_relationship_aggregate!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-profile_relationship_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/profile-relationship-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-profile_relationship_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-profile_relationship_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profile_relationship_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_relationship_aggregate"))),(0,o.kt)("p",null,'aggregated selection of "profile_relationship"'))}u.isMDXComponent=!0}}]);