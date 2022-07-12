"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95828],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={id:"user-block",title:"User block",sidebar_label:"User block",slug:"user-block"},l="User Block",c={unversionedId:"developers/types/relationships/user-block",id:"version-3/developers/types/relationships/user-block",title:"User block",description:"Inside Desmos, a UserBlock identifies the fact that a user blocked another one.",source:"@site/versioned_docs/version-3/02-developers/02-types/relationships/user-block.md",sourceDirName:"02-developers/02-types/relationships",slug:"/developers/types/relationships/user-block",permalink:"/3/developers/types/relationships/user-block",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/relationships/user-block.md",tags:[],version:"3",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"user-block",title:"User block",sidebar_label:"User block",slug:"user-block"},sidebar:"version-3/docs",previous:{title:"Relationship",permalink:"/3/developers/types/relationships/relationship"},next:{title:"Subspace",permalink:"/3/developers/types/subspaces/subspace"}},p={},d=[{value:"Attributes",id:"attributes",level:2},{value:"<code>Blocker</code> (<code>string</code>)",id:"blocker-string",level:3},{value:"<code>Blocked</code> (<code>string</code>)",id:"blocked-string",level:3},{value:"<code>Reason</code> (<code>string</code>)",id:"reason-string",level:3},{value:"<code>SubspaceID</code> (<code>uint64</code>)",id:"subspaceid-uint64",level:3}],u={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"user-block"},"User Block"),(0,s.kt)("p",null,"Inside Desmos, a ",(0,s.kt)("inlineCode",{parentName:"p"},"UserBlock")," identifies the fact that a user blocked another one."),(0,s.kt)("h2",{id:"attributes"},"Attributes"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"UserBlock")," contains data that allows users to create the most complete report they need."),(0,s.kt)("h3",{id:"blocker-string"},(0,s.kt)("inlineCode",{parentName:"h3"},"Blocker")," (",(0,s.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,s.kt)("p",null,"The address of the user blocking another one."),(0,s.kt)("h3",{id:"blocked-string"},(0,s.kt)("inlineCode",{parentName:"h3"},"Blocked")," (",(0,s.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,s.kt)("p",null,"The address of the blocked user."),(0,s.kt)("h3",{id:"reason-string"},(0,s.kt)("inlineCode",{parentName:"h3"},"Reason")," (",(0,s.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,s.kt)("p",null,"The reason why the user has been blocked for."),(0,s.kt)("h3",{id:"subspaceid-uint64"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubspaceID")," (",(0,s.kt)("inlineCode",{parentName:"h3"},"uint64"),")"),(0,s.kt)("p",null,"Id of the subspace inside which the user has been blocked.  "),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If set to ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"Blocker")," will block the ",(0,s.kt)("inlineCode",{parentName:"p"},"Blocked"),' user inside the generic "Desmos" subspace. This is useful when a user wants to block any future DTag transfer request from a bad user.',(0,s.kt)("br",{parentName:"p"}),"\n","Blocking someone for the ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," subspace ",(0,s.kt)("strong",{parentName:"p"},"will not")," block it on other subspaces, so other interactions might still be performed there."))))}k.isMDXComponent=!0}}]);