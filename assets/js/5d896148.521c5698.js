"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32810],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||s;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59624:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],i={id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/subspace-free-text-params",id:"graphql/objects/subspace-free-text-params",title:"subspace_free_text_params",description:'columns and relationships of "subspacefreetext_params"',source:"@site/docs/07-graphql/objects/subspace-free-text-params.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-free-text-params",permalink:"/next/graphql/objects/subspace-free-text-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-free-text-params.mdx",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subscription_root",permalink:"/next/graphql/objects/subscription-root"},next:{title:"subspace_registered_reaction_params",permalink:"/next/graphql/objects/subspace-registered-reaction-params"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>enabled</code> (<code>Boolean!</code>)",id:"enabled-boolean",level:4},{value:"<code>max_length</code> (<code>bigint!</code>)",id:"max_length-bigint",level:4},{value:"<code>reg_ex</code> (<code>String</code>)",id:"reg_ex-string",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4}],d={toc:u};function b(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'columns and relationships of "subspace_free_text_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_free_text_params {\n  enabled: Boolean!\n  max_length: bigint!\n  reg_ex: String\n  subspace: subspace!\n  subspace_id: bigint!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"enabled-boolean"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,s.kt)("h4",{id:"max_length-bigint"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max_length"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,s.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,s.kt)("h4",{id:"reg_ex-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"reg_ex"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"subspace-subspace"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,s.kt)("p",null,"An object relationship"),(0,s.kt)("h4",{id:"subspace_id-bigint"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,s.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}b.isMDXComponent=!0}}]);