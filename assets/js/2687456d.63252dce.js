"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56489],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,p=u["".concat(d,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(p,s(s({ref:t},l),{},{components:n})):r.createElement(p,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},d="Seed nodes",c={unversionedId:"mainnet/seeds",id:"mainnet/seeds",title:"Seeds",description:"The following seed nodes are to be used when configuring a full node for the mainnet. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/docs/06-mainnet/02-seeds.md",sourceDirName:"06-mainnet",slug:"/mainnet/seeds",permalink:"/next/mainnet/seeds",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/06-mainnet/02-seeds.md",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:2,frontMatter:{id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},sidebar:"docs",previous:{title:"Genesis File",permalink:"/next/mainnet/genesis-file"},next:{title:"State Sync",permalink:"/next/mainnet/state-sync"}},l={},f=[],u={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seed-nodes"},"Seed nodes"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Mainnet only   ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following seed nodes are to be used when configuring a full node for the ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),". If you are looking for testnet seed nodes, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/next/testnet/join-public/seeds"},"this")," instead.  "))),(0,o.kt)("p",null,"Add these seeds here to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'seeds = "9bde6ab4e0e00f721cc3f5b4b35f3a0e8979fab5@seed-1.mainnet.desmos.network:26656,5c86915026093f9a2f81e5910107cf14676b48fc@seed-2.mainnet.desmos.network:26656,45105c7241068904bdf5a32c86ee45979794637f@seed-3.mainnet.desmos.network:26656,b9ae3a5871e3d9699f339b0af2e38f6095491ab3@desmos-seed.artifact-staking.io:26656"\n')))}m.isMDXComponent=!0}}]);