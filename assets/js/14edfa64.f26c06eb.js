"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38344],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},370:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"halting",title:"Halting",sidebar_position:4},c="Halting Your Validator",s={unversionedId:"validators/halting",id:"version-2.3/validators/halting",title:"Halting",description:"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have",source:"@site/versioned_docs/version-2.3/04-validators/03-halting.md",sourceDirName:"04-validators",slug:"/validators/halting",permalink:"/2.3/validators/halting",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/04-validators/03-halting.md",tags:[],version:"2.3",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:4,frontMatter:{id:"halting",title:"Halting",sidebar_position:4},sidebar:"version-2.3/docs",previous:{title:"Setup",permalink:"/2.3/validators/setup"},next:{title:"Migrating",permalink:"/2.3/validators/migrating"}},u={},p=[],d={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"halting-your-validator"},"Halting Your Validator"),(0,a.kt)("p",null,"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have\nyour validator systematically and gracefully halt. You can achieve this by either setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"halt-height")," to the\nheight at which you want your node to shutdown or by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--halt-height")," flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),". The node will\nshutdown with a zero exit code at that given height after committing the block."))}f.isMDXComponent=!0}}]);