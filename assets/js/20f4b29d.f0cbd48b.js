"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87840],{3905:function(e,r,t){t.d(r,{Zo:function(){return a},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},a=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||s;return t?n.createElement(m,l(l({ref:r},a),{},{components:t})):n.createElement(m,l({ref:r},a))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1294:function(e,r,t){t.r(r),t.d(r,{assets:function(){return a},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),l=["components"],i={id:"blocked-users",title:"Query Blocked users",sidebar_label:"Blocked users",slug:"blocked-users"},u=void 0,c={unversionedId:"developers/queries/profiles/blocked-users",id:"version-2.3/developers/queries/profiles/blocked-users",title:"Query Blocked users",description:"Query blocked users",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/blocks.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/blocked-users",permalink:"/2.3/developers/queries/profiles/blocked-users",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/blocks.md",tags:[],version:"2.3",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"blocked-users",title:"Query Blocked users",sidebar_label:"Blocked users",slug:"blocked-users"},sidebar:"version-2.3/docs",previous:{title:"Relationships",permalink:"/2.3/developers/queries/profiles/relationships"},next:{title:"Chain links",permalink:"/2.3/developers/queries/profiles/chain-links"}},a={},p=[{value:"Query blocked users",id:"query-blocked-users",level:2}],d={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"query-blocked-users"},"Query blocked users"),(0,s.kt)("p",null,"This query allows you to retrieve the user blocked list with the optional user ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLI")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles blocks [[address]] [[subspace]]\n\n# Example\n# desmos query profiles blocks\n# desmos query profiles blocks desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}f.isMDXComponent=!0}}]);