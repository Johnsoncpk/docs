"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9074],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},d="Seed nodes",c={unversionedId:"testnets/join-public/seeds",id:"version-2.3/testnets/join-public/seeds",isDocsHomePage:!1,title:"Seeds",description:"The following seed nodes are to be used when configuring a full node for the testnet. If you are looking for mainnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-2.3/05-testnets/03-join-public/seeds.md",sourceDirName:"05-testnets/03-join-public",slug:"/testnets/join-public/seeds",permalink:"/2.3/testnets/join-public/seeds",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/05-testnets/03-join-public/seeds.md",version:"2.3",lastUpdatedAt:1649860686,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},sidebar:"version-2.3/docs",previous:{title:"Genesis File",permalink:"/2.3/testnets/join-public/genesis-file"},next:{title:"State Sync",permalink:"/2.3/testnets/join-public/state-sync"}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"seed-nodes"},"Seed nodes"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Testnet only   ")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The following seed nodes are to be used when configuring a full node for the ",(0,s.kt)("strong",{parentName:"p"},"testnet"),". If you are looking for mainnet seed nodes, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/2.3/mainnet/seeds"},"this")," instead."))),(0,s.kt)("p",null,"Add these seeds here to the ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'seeds = "be3db0fe5ee7f764902dbcc75126a2e082cbf00c@seed-1.morpheus.desmos.network:26656,4659ab47eef540e99c3ee4009ecbe3fbf4e3eaff@seed-2.morpheus.desmos.network:26656,1d9cc23eedb2d812d30d99ed12d5c5f21ff40c23@seed-3.morpheus.desmos.network:26656"\n')))}u.isMDXComponent=!0}}]);