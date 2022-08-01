"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return a?r.createElement(m,o(o({ref:t},l),{},{components:a})):r.createElement(m,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/objects/subspace-free-text-params",id:"version-4.1.0/graphql/objects/subspace-free-text-params",title:"subspace_free_text_params",description:'columns and relationships of "subspacefreetext_params"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/subspace-free-text-params.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-free-text-params",permalink:"/4.1.0/graphql/objects/subspace-free-text-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/subspace-free-text-params.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"subspace-free-text-params",title:"subspace_free_text_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subscription_root",permalink:"/4.1.0/graphql/objects/subscription-root"},next:{title:"subspace_registered_reaction_params",permalink:"/4.1.0/graphql/objects/subspace-registered-reaction-params"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>enabled</code> (<code>Boolean!</code>)",id:"enabled-boolean",level:4},{value:"<code>max_length</code> (<code>bigint!</code>)",id:"max_length-bigint",level:4},{value:"<code>reg_ex</code> (<code>String</code>)",id:"reg_ex-string",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4}],l={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'columns and relationships of "subspace_free_text_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_free_text_params {\n  enabled: Boolean!\n  max_length: bigint!\n  reg_ex: String\n  subspace: subspace!\n  subspace_id: bigint!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"enabled-boolean"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,n.kt)("h4",{id:"max_length-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max_length"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h4",{id:"reg_ex-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reg_ex"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"subspace-subspace"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,n.kt)("p",null,"An object relationship"),(0,n.kt)("h4",{id:"subspace_id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}d.isMDXComponent=!0}}]);