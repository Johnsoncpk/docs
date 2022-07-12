"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88470],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={id:"ante-handlers",title:"Ante Handlers",sidebar_label:"Ante Handlers",slug:"ante-handlers"},i="Ante Handlers",d={unversionedId:"developers/modules/fees/ante-handlers",id:"version-4.1.0/developers/modules/fees/ante-handlers",title:"Ante Handlers",description:"The fees module presently has no transaction handlers of its own, but does expose the special AnteHandler, used for performing a validity check on a transaction, such that it could be thrown out of the mempool.",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/fees/04-ante-handlers.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/ante-handlers",permalink:"/developers/modules/fees/ante-handlers",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/fees/04-ante-handlers.md",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:4,frontMatter:{id:"ante-handlers",title:"Ante Handlers",sidebar_label:"Ante Handlers",slug:"ante-handlers"},sidebar:"docs",previous:{title:"State",permalink:"/developers/modules/fees/state"},next:{title:"Parameters",permalink:"/developers/modules/fees/params"}},c={},p=[{value:"Decorators",id:"decorators",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ante-handlers"},"Ante Handlers"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," module presently has no transaction handlers of its own, but does expose the special ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler"),", used for performing a validity check on a transaction, such that it could be thrown out of the mempool.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler")," can be seen as a set of decorators that check transactions within the current context, per ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.43.0-alpha1/docs/architecture/adr-010-modular-antehandler.md"},"ADR 010"),"."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler")," is called on both ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", as Tendermint proposers presently have the ability to include in their proposed block transactions which fail ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx"),"."),(0,a.kt)("h2",{id:"decorators"},"Decorators"),(0,a.kt)("p",null,"The fees module provides the following ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteDecorator"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MinFeeDecorator"),": Checks if the ",(0,a.kt)("inlineCode",{parentName:"li"},"tx")," fee is greater or equal to the minimum fee amount computed looking the messages present inside the transaction itself.")))}m.isMDXComponent=!0}}]);