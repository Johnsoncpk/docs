"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9758],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1696:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},d="Seed nodes",c={unversionedId:"mainnet/seeds",id:"mainnet/seeds",isDocsHomePage:!1,title:"Seeds",description:"The following seed nodes are to be used when configuring a full node for the mainnet. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/docs/06-mainnet/seeds.md",sourceDirName:"06-mainnet",slug:"/mainnet/seeds",permalink:"/next/mainnet/seeds",editUrl:"https://github.com/desmos-labs/docs/master/docs/06-mainnet/seeds.md",version:"current",lastUpdatedAt:1639061239,formattedLastUpdatedAt:"12/9/2021",frontMatter:{id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},sidebar:"docs",previous:{title:"Genesis File",permalink:"/next/mainnet/genesis-file"},next:{title:"State Sync",permalink:"/next/mainnet/state-sync"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seed-nodes"},"Seed nodes"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Mainnet only   ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The following seed nodes are to be used when configuring a full node for the ",(0,a.kt)("strong",{parentName:"p"},"mainnet"),". If you are looking for testnet seed nodes, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/next/testnets/join-public/seeds"},"this")," instead.  "))),(0,a.kt)("p",null,"Add these seeds here to the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'seeds = "9bde6ab4e0e00f721cc3f5b4b35f3a0e8979fab5@seed-1.mainnet.desmos.network:26656,5c86915026093f9a2f81e5910107cf14676b48fc@seed-2.mainnet.desmos.network:26656,45105c7241068904bdf5a32c86ee45979794637f@seed-3.mainnet.desmos.network:26656"\n')))}m.isMDXComponent=!0}}]);