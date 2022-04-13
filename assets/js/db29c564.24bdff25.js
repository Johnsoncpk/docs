"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8427],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5284:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=r(7462),i=r(3366),s=(r(7294),r(3905)),o=["components"],l={id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},a=void 0,c={unversionedId:"developers/queries/profiles/chain-links",id:"developers/queries/profiles/chain-links",isDocsHomePage:!1,title:"Query chain links",description:"Query chain links",source:"@site/docs/02-developers/04-queries/profiles/chain-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/chain-links",permalink:"/next/developers/queries/profiles/chain-links",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/04-queries/profiles/chain-links.md",version:"current",lastUpdatedAt:1649860686,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},sidebar:"docs",previous:{title:"Incoming DTag requests",permalink:"/next/developers/queries/profiles/incoming-dtag-requests"},next:{title:"Application links",permalink:"/next/developers/queries/profiles/application-link"}},p=[{value:"Query chain links",id:"query-chain-links",children:[]}],u={toc:p};function d(e){var n=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"query-chain-links"},"Query chain links"),(0,s.kt)("p",null,"This query allows you to retrieve all the chain links with optional user ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"chain_name")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLI")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'desmos query profiles chain-links [[user]] [[chain_name]] [[target]] [flags]\n\n# Examples\n# desmos query profiles chain-links\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "cosmos"\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "cosmos" cosmos19s242dxhxgzlsdmfjjg38jgfwhxca7569g84sw\n')))}d.isMDXComponent=!0}}]);