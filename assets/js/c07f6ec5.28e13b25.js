"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[70884],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return l}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),b=i(t),l=a,_=b["".concat(p,".").concat(l)]||b[l]||c[l]||o;return t?n.createElement(_,s(s({ref:r},u),{},{components:t})):n.createElement(_,s({ref:r},u))}));function l(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=b;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var i=2;i<o;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},73199:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return l},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return c}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],d={id:"subspace-user-group-order-by",title:"subspace_user_group_order_by",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/subspace-user-group-order-by",id:"graphql/inputs/subspace-user-group-order-by",title:"subspace_user_group_order_by",description:'Ordering options when selecting data from "subspaceusergroup".',source:"@site/docs/07-graphql/inputs/subspace-user-group-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-order-by",permalink:"/next/graphql/inputs/subspace-user-group-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-user-group-order-by",title:"subspace_user_group_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_min_order_by",permalink:"/next/graphql/inputs/subspace-user-group-min-order-by"},next:{title:"subspace_user_group_stddev_order_by",permalink:"/next/graphql/inputs/subspace-user-group-stddev-order-by"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>order_by</code>)",id:"description-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>members_aggregate</code> (<code>subspace_user_group_member_aggregate_order_by</code>)",id:"members_aggregate-subspace_user_group_member_aggregate_order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4},{value:"<code>permissions</code> (<code>order_by</code>)",id:"permissions-order_by",level:4},{value:"<code>section</code> (<code>subspace_section_order_by</code>)",id:"section-subspace_section_order_by",level:4},{value:"<code>subspace</code> (<code>subspace_order_by</code>)",id:"subspace-subspace_order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],b={toc:c};function l(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "subspace_user_group".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_order_by {\n  description: order_by\n  id: order_by\n  members_aggregate: subspace_user_group_member_aggregate_order_by\n  name: order_by\n  permissions: order_by\n  section: subspace_section_order_by\n  subspace: subspace_order_by\n  subspace_id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"description-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"members_aggregate-subspace_user_group_member_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"members_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_aggregate_order_by")),")"),(0,o.kt)("h4",{id:"name-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"permissions-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"section-subspace_section_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_section_order_by")),")"),(0,o.kt)("h4",{id:"subspace-subspace_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_order_by")),")"),(0,o.kt)("h4",{id:"subspace_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);