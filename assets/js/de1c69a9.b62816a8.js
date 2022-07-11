"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[14294],{3905:function(e,r,a){a.d(r,{Zo:function(){return l},kt:function(){return u}});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),c=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},l=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,b=d["".concat(i,".").concat(u)]||d[u]||_[u]||n;return a?t.createElement(b,s(s({ref:r},l),{},{components:a})):t.createElement(b,s({ref:r},l))}));function u(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<n;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40897:function(e,r,a){a.r(r),a.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return _}});var t=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],p={id:"subspace-registered-reaction-params-bool-exp",title:"subspace_registered_reaction_params_bool_exp",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/subspace-registered-reaction-params-bool-exp",id:"version-4.1.0/graphql/inputs/subspace-registered-reaction-params-bool-exp",title:"subspace_registered_reaction_params_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceregisteredreaction_params\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-registered-reaction-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-params-bool-exp",permalink:"/graphql/inputs/subspace-registered-reaction-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-registered-reaction-params-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-registered-reaction-params-bool-exp",title:"subspace_registered_reaction_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_order_by",permalink:"/graphql/inputs/subspace-registered-reaction-order-by"},next:{title:"subspace_registered_reaction_params_order_by",permalink:"/graphql/inputs/subspace-registered-reaction-params-order-by"}},l={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_registered_reaction_params_bool_exp!]</code>)",id:"_and-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_registered_reaction_params_bool_exp</code>)",id:"_not-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_registered_reaction_params_bool_exp!]</code>)",id:"_or-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>enabled</code> (<code>Boolean_comparison_exp</code>)",id:"enabled-boolean_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4}],d={toc:_};function u(e){var r=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_registered_reaction_params\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_params_bool_exp {\n  _and: [subspace_registered_reaction_params_bool_exp!]\n  _not: subspace_registered_reaction_params_bool_exp\n  _or: [subspace_registered_reaction_params_bool_exp!]\n  enabled: Boolean_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-subspace_registered_reaction_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-subspace_registered_reaction_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-subspace_registered_reaction_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"enabled-boolean_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/boolean-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean_comparison_exp")),")"),(0,n.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,n.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}u.isMDXComponent=!0}}]);