"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[30050],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,k=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7753:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],l={id:"user-block",title:"User block",sidebar_label:"User block",slug:"user-block"},a="User Block",c={unversionedId:"developers/types/profiles/user-block",id:"version-2.3/developers/types/profiles/user-block",title:"User block",description:"Inside Desmos, a UserBlock identifies the fact that a user blocked another one.",source:"@site/versioned_docs/version-2.3/02-developers/02-types/profiles/user-block.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/user-block",permalink:"/2.3/developers/types/profiles/user-block",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/02-types/profiles/user-block.md",tags:[],version:"2.3",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"user-block",title:"User block",sidebar_label:"User block",slug:"user-block"},sidebar:"version-2.3/docs",previous:{title:"Relationship",permalink:"/2.3/developers/types/profiles/relationship"},next:{title:"Application link",permalink:"/2.3/developers/types/profiles/application-link"}},d={},p=[{value:"Contained data",id:"contained-data",level:2},{value:"<code>Blocker</code> (<code>string</code>)",id:"blocker-string",level:3},{value:"<code>Blocked</code> (<code>string</code>)",id:"blocked-string",level:3},{value:"<code>Reason</code> (<code>string</code>)",id:"reason-string",level:3},{value:"<code>Subspace</code> (<code>string</code>)",id:"subspace-string",level:3}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-block"},"User Block"),(0,i.kt)("p",null,"Inside Desmos, a ",(0,i.kt)("inlineCode",{parentName:"p"},"UserBlock")," identifies the fact that a user blocked another one."),(0,i.kt)("h2",{id:"contained-data"},"Contained data"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UserBlock")," contains data that allows users to create the most complete report they need."),(0,i.kt)("h3",{id:"blocker-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Blocker")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,i.kt)("p",null,"The address of the user blocking another one."),(0,i.kt)("h3",{id:"blocked-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Blocked")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,i.kt)("p",null,"The address of the blocked user."),(0,i.kt)("h3",{id:"reason-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Reason")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,i.kt)("p",null,"The reason why the user has been blocked for."),(0,i.kt)("h3",{id:"subspace-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Subspace")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Subspace")," field identifies the application where the block has been made."))}f.isMDXComponent=!0}}]);