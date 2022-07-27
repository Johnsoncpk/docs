"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[92308],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),_=i(r),m=n,f=_["".concat(c,".").concat(m)]||_[m]||u[m]||s;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=_;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},45876:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],p={id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/queries/subspace-free-text-params",id:"graphql/queries/subspace-free-text-params",title:"subspace_free_text_params",description:'fetch data from the table: "subspacefreetext_params"',source:"@site/docs/07-graphql/queries/subspace-free-text-params.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-free-text-params",permalink:"/next/graphql/queries/subspace-free-text-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/subspace-free-text-params.mdx",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params_by_pk",permalink:"/next/graphql/queries/subspace-free-text-params-by-pk"},next:{title:"subspace_registered_reaction_params_by_pk",permalink:"/next/graphql/queries/subspace-registered-reaction-params-by-pk"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_free_text_params_select_column!]</code>)",id:"distinct_on-subspace_free_text_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_free_text_params_order_by!]</code>)",id:"order_by-subspace_free_text_params_order_by",level:4},{value:"<code>where</code> (<code>subspace_free_text_params_bool_exp</code>)",id:"where-subspace_free_text_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params</code>",id:"subspace_free_text_params",level:4}],_={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_free_text_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_free_text_params(\n  distinct_on: [subspace_free_text_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_free_text_params_order_by!]\n  where: subspace_free_text_params_bool_exp\n): [subspace_free_text_params!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_free_text_params_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-free-text-params-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_free_text_params_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_free_text_params_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_free_text_params"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params"))),(0,s.kt)("p",null,'columns and relationships of "subspace_free_text_params"'))}m.isMDXComponent=!0}}]);