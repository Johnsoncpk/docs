"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[92401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),_=i(r),m=s,d=_["".concat(c,".").concat(m)]||_[m]||u[m]||n;return r?a.createElement(d,p(p({ref:t},l),{},{components:r})):a.createElement(d,p({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,p=new Array(n);p[0]=_;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,p[1]=o;for(var i=2;i<n;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},20841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var a=r(87462),s=(r(67294),r(3905));const n={id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/queries/subspace-free-text-params",id:"version-4.2.0/graphql/queries/subspace-free-text-params",title:"subspace_free_text_params",description:'fetch data from the table: "subspacefreetext_params"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/subspace-free-text-params.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-free-text-params",permalink:"/graphql/queries/subspace-free-text-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/subspace-free-text-params.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params_by_pk",permalink:"/graphql/queries/subspace-free-text-params-by-pk"},next:{title:"subspace_registered_reaction_params_by_pk",permalink:"/graphql/queries/subspace-registered-reaction-params-by-pk"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_free_text_params_select_column!]</code>)",id:"distinct_on-subspace_free_text_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_free_text_params_order_by!]</code>)",id:"order_by-subspace_free_text_params_order_by",level:4},{value:"<code>where</code> (<code>subspace_free_text_params_bool_exp</code>)",id:"where-subspace_free_text_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params</code>",id:"subspace_free_text_params",level:4}],l={toc:i};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_free_text_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_free_text_params(\n  distinct_on: [subspace_free_text_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_free_text_params_order_by!]\n  where: subspace_free_text_params_bool_exp\n): [subspace_free_text_params!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_free_text_params_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-free-text-params-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_free_text_params_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_free_text_params_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_free_text_params"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params"))),(0,s.kt)("p",null,'columns and relationships of "subspace_free_text_params"'))}u.isMDXComponent=!0}}]);