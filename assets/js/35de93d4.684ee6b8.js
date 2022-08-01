"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39846],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),i=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=i(e.components);return o.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},b=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=i(t),m=n,l=b["".concat(u,".").concat(m)]||b[m]||c[m]||s;return t?o.createElement(l,a(a({ref:r},d),{},{components:t})):o.createElement(l,a({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=b;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69727:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const s={id:"subspace-user-group-member-order-by",title:"subspace_user_group_member_order_by",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/subspace-user-group-member-order-by",id:"version-4.2.0/graphql/inputs/subspace-user-group-member-order-by",title:"subspace_user_group_member_order_by",description:'Ordering options when selecting data from "subspaceusergroup_member".',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-order-by",permalink:"/graphql/inputs/subspace-user-group-member-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"subspace-user-group-member-order-by",title:"subspace_user_group_member_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_min_order_by",permalink:"/graphql/inputs/subspace-user-group-member-min-order-by"},next:{title:"subspace_user_group_min_order_by",permalink:"/graphql/inputs/subspace-user-group-min-order-by"}},u={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>group</code> (<code>subspace_user_group_order_by</code>)",id:"group-subspace_user_group_order_by",level:4},{value:"<code>member_address</code> (<code>order_by</code>)",id:"member_address-order_by",level:4}],d={toc:i};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "subspace_user_group_member".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_order_by {\n  group: subspace_user_group_order_by\n  member_address: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"group-subspace_user_group_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"group"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group_order_by")),")"),(0,n.kt)("h4",{id:"member_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);