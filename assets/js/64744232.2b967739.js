"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[71710],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return l}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),b=p(t),l=o,_=b["".concat(i,".").concat(l)]||b[l]||c[l]||a;return t?n.createElement(_,s(s({ref:r},u),{},{components:t})):n.createElement(_,s({ref:r},u))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=b;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,s[1]=d;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},14981:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],d={id:"subspace-user-group-order-by",title:"subspace_user_group_order_by",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/subspace-user-group-order-by",id:"version-4.1.0/graphql/inputs/subspace-user-group-order-by",title:"subspace_user_group_order_by",description:'Ordering options when selecting data from "subspaceusergroup".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-order-by",permalink:"/graphql/inputs/subspace-user-group-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"subspace-user-group-order-by",title:"subspace_user_group_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_min_order_by",permalink:"/graphql/inputs/subspace-user-group-min-order-by"},next:{title:"subspace_user_group_stddev_order_by",permalink:"/graphql/inputs/subspace-user-group-stddev-order-by"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>order_by</code>)",id:"description-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>members_aggregate</code> (<code>subspace_user_group_member_aggregate_order_by</code>)",id:"members_aggregate-subspace_user_group_member_aggregate_order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4},{value:"<code>permissions</code> (<code>order_by</code>)",id:"permissions-order_by",level:4},{value:"<code>section</code> (<code>subspace_section_order_by</code>)",id:"section-subspace_section_order_by",level:4},{value:"<code>subspace</code> (<code>subspace_order_by</code>)",id:"subspace-subspace_order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],b={toc:c};function l(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "subspace_user_group".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_order_by {\n  description: order_by\n  id: order_by\n  members_aggregate: subspace_user_group_member_aggregate_order_by\n  name: order_by\n  permissions: order_by\n  section: subspace_section_order_by\n  subspace: subspace_order_by\n  subspace_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"description-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"members_aggregate-subspace_user_group_member_aggregate_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"members_aggregate"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-aggregate-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_aggregate_order_by")),")"),(0,a.kt)("h4",{id:"name-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"permissions-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"section-subspace_section_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_section_order_by")),")"),(0,a.kt)("h4",{id:"subspace-subspace_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_order_by")),")"),(0,a.kt)("h4",{id:"subspace_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);