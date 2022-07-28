"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[66541],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=c(r),f=n,m=b["".concat(i,".").concat(f)]||b[f]||l[f]||s;return r?a.createElement(m,p(p({ref:t},u),{},{components:r})):a.createElement(m,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<s;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},36434:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),p=["components"],o={id:"subspace-free-text-params-by-pk",title:"subspace_free_text_params_by_pk",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/subscriptions/subspace-free-text-params-by-pk",id:"version-4.2.0/graphql/subscriptions/subspace-free-text-params-by-pk",title:"subspace_free_text_params_by_pk",description:'fetch data from the table: "subspacefreetext_params" using primary key columns',source:"@site/versioned_docs/version-4.2.0/07-graphql/subscriptions/subspace-free-text-params-by-pk.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-free-text-params-by-pk",permalink:"/graphql/subscriptions/subspace-free-text-params-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/subscriptions/subspace-free-text-params-by-pk.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-free-text-params-by-pk",title:"subspace_free_text_params_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_by_pk",permalink:"/graphql/subscriptions/subspace-by-pk"},next:{title:"subspace_free_text_params",permalink:"/graphql/subscriptions/subspace-free-text-params"}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params</code>",id:"subspace_free_text_params",level:4}],b={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_free_text_params" using primary key columns'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_free_text_params_by_pk(\n  subspace_id: bigint!\n): subspace_free_text_params\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"subspace_id-bigint"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,s.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_free_text_params"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params"))),(0,s.kt)("p",null,'columns and relationships of "subspace_free_text_params"'))}f.isMDXComponent=!0}}]);