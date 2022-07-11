"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22629],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(a,".").concat(d)]||f[d]||c[d]||i;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1379:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],s={id:"profile",title:"Query Profile",sidebar_label:"Profile",slug:"profile"},a="Query a profile",p={unversionedId:"developers/queries/profiles/profile",id:"version-2.3/developers/queries/profiles/profile",title:"Query Profile",description:"This query allows you to retrieve the details of a single profile having its DTag or address.",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/profile.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/profile",permalink:"/2.3/developers/queries/profiles/profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/profile.md",tags:[],version:"2.3",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"profile",title:"Query Profile",sidebar_label:"Profile",slug:"profile"},sidebar:"version-2.3/docs",previous:{title:"Unlink chain account",permalink:"/2.3/developers/transactions/profiles/unlink-chain-account"},next:{title:"Incoming DTag requests",permalink:"/2.3/developers/queries/profiles/incoming-dtag-requests"}},u={},c=[],f={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"query-a-profile"},"Query a profile"),(0,i.kt)("p",null,"This query allows you to retrieve the details of a single profile having its DTag or address. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles profile [address_or_dtag]\n\n# Example\n# desmos query profiles profile desmos12a2y7fflz6g4e5gn0mh0n9dkrzllj0q5vx7c6t\n# desmos query profiles profile leonardo\n")))}d.isMDXComponent=!0}}]);