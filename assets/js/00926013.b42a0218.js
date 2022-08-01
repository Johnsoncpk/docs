"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},s="Genesis file",a={unversionedId:"mainnet/genesis-file",id:"mainnet/genesis-file",title:"Genesis File",description:"To configure a full node for the mainnet you need to use the following seed nodes. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/docs/06-mainnet/01-genesis-file.md",sourceDirName:"06-mainnet",slug:"/mainnet/genesis-file",permalink:"/next/mainnet/genesis-file",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/06-mainnet/01-genesis-file.md",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:1,frontMatter:{id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},sidebar:"docs",previous:{title:"Endpoints",permalink:"/next/testnet/endpoints"},next:{title:"Seeds",permalink:"/next/mainnet/seeds"}},l={},c=[{value:"1. Download",id:"1-download",level:2},{value:"2. Check",id:"2-check",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"genesis-file"},"Genesis file"),(0,o.kt)("admonition",{title:"Mainnet only   ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To configure a full node for the ",(0,o.kt)("strong",{parentName:"p"},"mainnet")," you need to use the following seed nodes. If you are looking for testnet seed nodes, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/next/testnet/join-public/genesis-file"},"this")," instead.  ")),(0,o.kt)("p",null,"To connect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos-mainnet"),", you will need the corresponding genesis file."),(0,o.kt)("h2",{id:"1-download"},"1. Download"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/mainnet"},"mainnet repo")," and\ndownload the correct genesis file by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the existing genesis file for the mainnet\n# Replace <chain-id> with the id of the testnet you would like to join\ncurl https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json > ~/.desmos/config/genesis.json\n")),(0,o.kt)("h2",{id:"2-check"},"2. Check"),(0,o.kt)("p",null,"After the download, ensure it's the correct one by checking that it has the same hashsum below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jq -S -c -M '' /root/.desmos/config/genesis.json | shasum -a 256\n619c9462ccd9045522300c5ce9e7f4662cac096eed02ef0535cca2a6826074c4  -\n")))}p.isMDXComponent=!0}}]);