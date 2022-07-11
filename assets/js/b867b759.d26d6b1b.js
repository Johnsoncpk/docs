"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54278],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84157:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"halting",title:"Halting",sidebar_label:"Halting",slug:"halting"},c="Halting Your Validator",u={unversionedId:"validators/halting",id:"version-4.1.0/validators/halting",title:"Halting",description:"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have",source:"@site/versioned_docs/version-4.1.0/04-validators/03-halting.md",sourceDirName:"04-validators",slug:"/validators/halting",permalink:"/validators/halting",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/04-validators/03-halting.md",tags:[],version:"4.1.0",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:3,frontMatter:{id:"halting",title:"Halting",sidebar_label:"Halting",slug:"halting"},sidebar:"docs",previous:{title:"Setup",permalink:"/validators/setup"},next:{title:"Migrating",permalink:"/validators/migrating"}},s={},p=[],d={toc:p};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"halting-your-validator"},"Halting Your Validator"),(0,o.kt)("p",null,"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have\nyour validator systematically and gracefully halt. You can achieve this by either setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"halt-height")," to the\nheight at which you want your node to shutdown or by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--halt-height")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos"),". The node will\nshutdown with a zero exit code at that given height after committing the block."))}f.isMDXComponent=!0}}]);