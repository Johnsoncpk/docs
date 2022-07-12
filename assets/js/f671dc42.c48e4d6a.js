"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83763],{3905:function(e,r,o){o.d(r,{Zo:function(){return i},kt:function(){return m}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function a(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=t.createContext({}),_=function(e){var r=t.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},i=function(e){var r=_(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),c=_(o),m=n,b=c["".concat(u,".").concat(m)]||c[m]||l[m]||p;return o?t.createElement(b,s(s({ref:r},i),{},{components:o})):t.createElement(b,s({ref:r},i))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=o.length,s=new Array(p);s[0]=c;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var _=2;_<p;_++)s[_]=o[_];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},48565:function(e,r,o){o.r(r),o.d(r,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return _},toc:function(){return l}});var t=o(87462),n=o(63366),p=(o(67294),o(3905)),s=["components"],a={id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},u=void 0,_={unversionedId:"graphql/inputs/subspace-user-group-member-bool-exp",id:"version-4.1.0/graphql/inputs/subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceusergroup_member\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-bool-exp",permalink:"/graphql/inputs/subspace-user-group-member-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_aggregate_order_by",permalink:"/graphql/inputs/subspace-user-group-member-aggregate-order-by"},next:{title:"subspace_user_group_member_max_order_by",permalink:"/graphql/inputs/subspace-user-group-member-max-order-by"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_and-subspace_user_group_member_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"_not-subspace_user_group_member_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_or-subspace_user_group_member_bool_exp",level:4},{value:"<code>group</code> (<code>subspace_user_group_bool_exp</code>)",id:"group-subspace_user_group_bool_exp",level:4},{value:"<code>member_address</code> (<code>String_comparison_exp</code>)",id:"member_address-string_comparison_exp",level:4}],c={toc:l};function m(e){var r=e.components,o=(0,n.Z)(e,s);return(0,p.kt)("wrapper",(0,t.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_user_group_member\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_bool_exp {\n  _and: [subspace_user_group_member_bool_exp!]\n  _not: subspace_user_group_member_bool_exp\n  _or: [subspace_user_group_member_bool_exp!]\n  group: subspace_user_group_bool_exp\n  member_address: String_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"group-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"group"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,p.kt)("h4",{id:"member_address-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}m.isMDXComponent=!0}}]);