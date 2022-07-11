"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94330],{3905:function(e,r,o){o.d(r,{Zo:function(){return l},kt:function(){return m}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=t.createContext({}),_=function(e){var r=t.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},l=function(e){var r=_(e.components);return t.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},i=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),i=_(o),m=n,b=i["".concat(u,".").concat(m)]||i[m]||c[m]||p;return o?t.createElement(b,a(a({ref:r},l),{},{components:o})):t.createElement(b,a({ref:r},l))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=o.length,a=new Array(p);a[0]=i;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var _=2;_<p;_++)a[_]=o[_];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}i.displayName="MDXCreateElement"},48598:function(e,r,o){o.r(r),o.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return _},toc:function(){return c}});var t=o(87462),n=o(63366),p=(o(67294),o(3905)),a=["components"],s={id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},u=void 0,_={unversionedId:"graphql/inputs/subspace-user-group-member-bool-exp",id:"graphql/inputs/subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceusergroup_member\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-bool-exp",permalink:"/next/graphql/inputs/subspace-user-group-member-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_aggregate_order_by",permalink:"/next/graphql/inputs/subspace-user-group-member-aggregate-order-by"},next:{title:"subspace_user_group_member_max_order_by",permalink:"/next/graphql/inputs/subspace-user-group-member-max-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_and-subspace_user_group_member_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"_not-subspace_user_group_member_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_or-subspace_user_group_member_bool_exp",level:4},{value:"<code>group</code> (<code>subspace_user_group_bool_exp</code>)",id:"group-subspace_user_group_bool_exp",level:4},{value:"<code>member_address</code> (<code>String_comparison_exp</code>)",id:"member_address-string_comparison_exp",level:4}],i={toc:c};function m(e){var r=e.components,o=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_user_group_member\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_bool_exp {\n  _and: [subspace_user_group_member_bool_exp!]\n  _not: subspace_user_group_member_bool_exp\n  _or: [subspace_user_group_member_bool_exp!]\n  group: subspace_user_group_bool_exp\n  member_address: String_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"group-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"group"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,p.kt)("h4",{id:"member_address-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}m.isMDXComponent=!0}}]);