"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27743],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,g=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1145:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"dtag-transfer-request",title:"DTag transfer request",sidebar_label:"DTag transfer request",slug:"dtag-transfer-request"},l="DTag transfer request",d={unversionedId:"developers/types/profiles/dtag-transfer-request",id:"version-3/developers/types/profiles/dtag-transfer-request",title:"DTag transfer request",description:"A DTag transfer request represents the request made from a user to get the DTag of another one.",source:"@site/versioned_docs/version-3/02-developers/02-types/profiles/dtag-transfer-request.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/dtag-transfer-request",permalink:"/3/developers/types/profiles/dtag-transfer-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/profiles/dtag-transfer-request.md",tags:[],version:"3",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"dtag-transfer-request",title:"DTag transfer request",sidebar_label:"DTag transfer request",slug:"dtag-transfer-request"},sidebar:"version-3/docs",previous:{title:"Profile pictures",permalink:"/3/developers/types/profiles/profile-pictures"},next:{title:"Application link",permalink:"/3/developers/types/profiles/application-link"}},p={},u=[{value:"Attributes",id:"attributes",level:2},{value:"<code>DTagToTrade</code> (<code>string</code>)",id:"dtagtotrade-string",level:3},{value:"<code>Sender</code> (<code>string</code>)",id:"sender-string",level:3},{value:"<code>Receiver</code> (<code>string</code>)",id:"receiver-string",level:3}],c={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dtag-transfer-request"},"DTag transfer request"),(0,o.kt)("p",null,"A DTag transfer request represents the request made from a user to get the DTag of another one."),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("p",null,"Here follows the data of a DTag transfer request. "),(0,o.kt)("h3",{id:"dtagtotrade-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"DTagToTrade")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag")," contains the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag")," that should be transferred from the receiver of the request to the sender."),(0,o.kt)("h3",{id:"sender-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"Sender")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"Sender represents the address of the account that sent the ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag transfer request"),"."),(0,o.kt)("h3",{id:"receiver-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"Receiver")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"Receiver represents the receiver of the request that, if accepted, will\ngive to the sender their ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag"),"."))}f.isMDXComponent=!0}}]);