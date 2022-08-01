"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[75676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},s="Genesis file",l={unversionedId:"testnet/join-public/genesis-file",id:"version-4.1.0/testnet/join-public/genesis-file",title:"Genesis File",description:"To configure a full node for the testnet you need to use the following seed nodes. If you are looking for mainnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-4.1.0/05-testnet/03-join-public/02-genesis-file.md",sourceDirName:"05-testnet/03-join-public",slug:"/testnet/join-public/genesis-file",permalink:"/4.1.0/testnet/join-public/genesis-file",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/05-testnet/03-join-public/02-genesis-file.md",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:2,frontMatter:{id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},sidebar:"docs",previous:{title:"Setup",permalink:"/4.1.0/testnet/join-public/setup"},next:{title:"Seeds",permalink:"/4.1.0/testnet/join-public/seeds"}},a={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"genesis-file"},"Genesis file"),(0,i.kt)("admonition",{title:"Testnet only   ",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To configure a full node for the ",(0,i.kt)("strong",{parentName:"p"},"testnet")," you need to use the following seed nodes. If you are looking for mainnet seed nodes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/4.1.0/mainnet/genesis-file"},"this")," instead.")),(0,i.kt)("p",null,"To connect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"morpheus")," testnet, you will need the corresponding genesis file of each testnet. Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/morpheus"},"testnet repo")," and download the correct genesis file by running the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the existing genesis file for the testnet\n# Replace <chain-id> with the id of the testnet you would like to join\ncurl https://raw.githubusercontent.com/desmos-labs/morpheus/master/<chain-id>/genesis.json > $HOME/.desmos/config/genesis.json\n")))}u.isMDXComponent=!0}}]);