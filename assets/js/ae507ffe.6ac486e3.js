"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39716],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),b=c(t),d=a,_=b["".concat(p,".").concat(d)]||b[d]||i[d]||o;return t?n.createElement(_,u(u({ref:r},m),{},{components:t})):n.createElement(_,u({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=b;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},97344:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),u=["components"],s={id:"subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/subspace-user-group-member-aggregate-order-by",id:"graphql/inputs/subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",description:'order by aggregate values of table "subspaceusergroup_member"',source:"@site/docs/07-graphql/inputs/subspace-user-group-member-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-user-group-member-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-member-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_max_order_by",permalink:"/next/graphql/inputs/subspace-user-group-max-order-by"},next:{title:"subspace_user_group_member_bool_exp",permalink:"/next/graphql/inputs/subspace-user-group-member-bool-exp"}},m={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_user_group_member_max_order_by</code>)",id:"max-subspace_user_group_member_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_user_group_member_min_order_by</code>)",id:"min-subspace_user_group_member_min_order_by",level:4}],b={toc:i};function d(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "subspace_user_group_member"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_aggregate_order_by {\n  count: order_by\n  max: subspace_user_group_member_max_order_by\n  min: subspace_user_group_member_min_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-subspace_user_group_member_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_max_order_by")),")"),(0,o.kt)("h4",{id:"min-subspace_user_group_member_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_min_order_by")),")"))}d.isMDXComponent=!0}}]);