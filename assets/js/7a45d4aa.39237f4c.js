"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),u=o,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"profile",title:"Profile",sidebar_label:"Profile",slug:"profile"},a="Profile",l={unversionedId:"developers/types/profiles/profile",id:"version-2.3/developers/types/profiles/profile",title:"Profile",description:"Inside Desmos, profile are the way that users could register their own identity.",source:"@site/versioned_docs/version-2.3/02-developers/02-types/profiles/profile.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/profile",permalink:"/2.3/developers/types/profiles/profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/02-types/profiles/profile.md",tags:[],version:"2.3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"profile",title:"Profile",sidebar_label:"Profile",slug:"profile"},sidebar:"version-2.3/docs",previous:{title:"Overview",permalink:"/2.3/developers/overview"},next:{title:"Profile pictures",permalink:"/2.3/developers/types/profiles/profile-pictures"}},s={},p=[{value:"Contained data",id:"contained-data",level:2},{value:"<code>DTag</code> (<code>string</code>)",id:"dtag-string",level:3},{value:"<code>Nickname</code> (<code>string</code>)",id:"nickname-string",level:3},{value:"<code>Bio</code> (<code>string</code>)",id:"bio-string",level:3},{value:"<code>Pictures</code> (<code>object</code>)",id:"pictures-object",level:3},{value:"<code>Account</code> (<code>object</code>)",id:"account-object",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profile"},"Profile"),(0,o.kt)("p",null,"Inside Desmos, profile are the way that users could register their own identity."),(0,o.kt)("p",null,"Since this is a decentralized profile, every data inside it can be omitted except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag")," which could be used to identify a Desmos wallet once the profile is created. "),(0,o.kt)("p",null,"Profile can be enriched with some of your personal data that could be verified later on chain by providing\nsome additional information."),(0,o.kt)("h2",{id:"contained-data"},"Contained data"),(0,o.kt)("p",null,"A profile contains different fields. Most of them are optional and can be edited."),(0,o.kt)("h3",{id:"dtag-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"DTag")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," of min ",(0,o.kt)("inlineCode",{parentName:"p"},"6")," and max ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," characters that uniquely identifies the user.\nIn order to be valid it needs to match the following RegEx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"^[A-Za-z0-9_]+$\n")),(0,o.kt)("h3",{id:"nickname-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"Nickname")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Nickname")," represents the name of the user.\nIt can be either a combination of first, second and last name, or a completely invented name.\nAlthough we always suggest setting one, this field is completely optional.\nIf specified, it has to be at least of ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," characters long."),(0,o.kt)("h3",{id:"bio-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"Bio")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Bio")," contains the biography of the user. It can be at most ",(0,o.kt)("inlineCode",{parentName:"p"},"1000")," characters long."),(0,o.kt)("h3",{id:"pictures-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"Pictures")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/2.3/developers/types/profiles/profile-pictures"},"Pictures")," contains the pictures of the profile."),(0,o.kt)("h3",{id:"account-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"Account")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," represents the base Cosmos account associated with the profile and contains information\nsuch as the user's Bech32 address, public key etc..."))}d.isMDXComponent=!0}}]);