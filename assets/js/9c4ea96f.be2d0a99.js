"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[37641],{3905:function(e,r,s){s.d(r,{Zo:function(){return u},kt:function(){return m}});var o=s(67294);function n(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function t(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,o)}return s}function i(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?t(Object(s),!0).forEach((function(r){n(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function p(e,r){if(null==e)return{};var s,o,n=function(e,r){if(null==e)return{};var s,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)s=t[o],r.indexOf(s)>=0||(n[s]=e[s]);return n}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)s=t[o],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var a=o.createContext({}),c=function(e){var r=o.useContext(a),s=r;return e&&(s="function"==typeof e?e(r):i(i({},r),e)),s},u=function(e){var r=c(e.components);return o.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},_=o.forwardRef((function(e,r){var s=e.components,n=e.mdxType,t=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),_=c(s),m=n,d=_["".concat(a,".").concat(m)]||_[m]||l[m]||t;return s?o.createElement(d,i(i({ref:r},u),{},{components:s})):o.createElement(d,i({ref:r},u))}));function m(e,r){var s=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var t=s.length,i=new Array(t);i[0]=_;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<t;c++)i[c]=s[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,s)}_.displayName="MDXCreateElement"},24429:function(e,r,s){s.r(r),s.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var o=s(87462),n=s(63366),t=(s(67294),s(3905)),i=["components"],p={id:"subspace-user-permission-bool-exp",title:"subspace_user_permission_bool_exp",hide_table_of_contents:!1},a=void 0,c={unversionedId:"graphql/inputs/subspace-user-permission-bool-exp",id:"graphql/inputs/subspace-user-permission-bool-exp",title:"subspace_user_permission_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceuserpermission\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-user-permission-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-bool-exp",permalink:"/next/graphql/inputs/subspace-user-permission-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"subspace-user-permission-bool-exp",title:"subspace_user_permission_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_aggregate_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-aggregate-order-by"},next:{title:"subspace_user_permission_max_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-max-order-by"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_user_permission_bool_exp!]</code>)",id:"_and-subspace_user_permission_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_user_permission_bool_exp</code>)",id:"_not-subspace_user_permission_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_user_permission_bool_exp!]</code>)",id:"_or-subspace_user_permission_bool_exp",level:4},{value:"<code>permissions</code> (<code>_text_comparison_exp</code>)",id:"permissions-_text_comparison_exp",level:4},{value:"<code>section</code> (<code>subspace_section_bool_exp</code>)",id:"section-subspace_section_bool_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4}],_={toc:l};function m(e){var r=e.components,s=(0,n.Z)(e,i);return(0,t.kt)("wrapper",(0,o.Z)({},_,s,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_user_permission\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_bool_exp {\n  _and: [subspace_user_permission_bool_exp!]\n  _not: subspace_user_permission_bool_exp\n  _or: [subspace_user_permission_bool_exp!]\n  permissions: _text_comparison_exp\n  section: subspace_section_bool_exp\n  user_address: String_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-subspace_user_permission_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-subspace_user_permission_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-subspace_user_permission_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_bool_exp!]")),")"),(0,t.kt)("h4",{id:"permissions-_text_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/text-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"_text_comparison_exp")),")"),(0,t.kt)("h4",{id:"section-subspace_section_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,t.kt)("h4",{id:"user_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}m.isMDXComponent=!0}}]);