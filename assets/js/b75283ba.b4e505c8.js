"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[55657],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,g=l["".concat(i,".").concat(d)]||l[d]||m[d]||s;return t?a.createElement(g,o(o({ref:r},c),{},{components:t})):a.createElement(g,o({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=l;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},90278:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=t(87462),n=t(63366),s=(t(67294),t(3905)),o=["components"],u={id:"subspace-user-group-member-aggregate-fields",title:"subspace_user_group_member_aggregate_fields",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/objects/subspace-user-group-member-aggregate-fields",id:"graphql/objects/subspace-user-group-member-aggregate-fields",title:"subspace_user_group_member_aggregate_fields",description:'aggregate fields of "subspaceusergroup_member"',source:"@site/docs/07-graphql/objects/subspace-user-group-member-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-member-aggregate-fields",permalink:"/next/graphql/objects/subspace-user-group-member-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-group-member-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-user-group-member-aggregate-fields",title:"subspace_user_group_member_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_max_fields",permalink:"/next/graphql/objects/subspace-user-group-max-fields"},next:{title:"subspace_user_group_member_aggregate",permalink:"/next/graphql/objects/subspace-user-group-member-aggregate"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>subspace_user_group_member_max_fields</code>)",id:"max-subspace_user_group_member_max_fields",level:4},{value:"<code>min</code> (<code>subspace_user_group_member_min_fields</code>)",id:"min-subspace_user_group_member_min_fields",level:4}],l={toc:m};function d(e){var r=e.components,t=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'aggregate fields of "subspace_user_group_member"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group_member_aggregate_fields {\n  count(\n  columns: [subspace_user_group_member_select_column!]\n  distinct: Boolean\n): Int!\n  max: subspace_user_group_member_max_fields\n  min: subspace_user_group_member_min_fields\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"count-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"columns-subspace_user_group_member_select_column"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-member-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,s.kt)("h4",{id:"max-subspace_user_group_member_max_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-max-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_max_fields")),")"),(0,s.kt)("h4",{id:"min-subspace_user_group_member_min_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-min-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_min_fields")),")"))}d.isMDXComponent=!0}}]);