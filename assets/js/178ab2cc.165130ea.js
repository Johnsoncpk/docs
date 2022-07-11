"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[34305],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},l="Overview",p={unversionedId:"developers/overview",id:"developers/overview",title:"Overview",description:"Introduction",source:"@site/docs/02-developers/01-overview.md",sourceDirName:"02-developers",slug:"/developers/overview",permalink:"/next/developers/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/01-overview.md",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Introduction",permalink:"/next/"},next:{title:"Overview",permalink:"/next/developers/modules/profiles/overview"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Core features",id:"core-features",level:2},{value:"Support features",id:"support-features",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/next/"},"Desmos")," aims to provide developers a protocol with which they will be able to create decentralized and censorship-resistant social enabled apps. Different apps, with different scopes and their own Term of Services will be able to use the features offered by Desmos to customize their user experience in a unique way."),(0,a.kt)("p",null,"If you want to know more about the base concepts of a blockchain and understand some key points, please take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/next/developers/faq"},"FAQ page"),". "),(0,a.kt)("h2",{id:"core-features"},"Core features"),(0,a.kt)("p",null,"The core features of Desmos are organised in ",(0,a.kt)("strong",{parentName:"p"},"modules")," following the specification of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/building-modules/intro.html"},"Cosmos-SDK"),".   "),(0,a.kt)("p",null,"Here a brief description of each one of these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Profiles"),": Handles the creation and management of a decentralized identity and its own links with both your other chains wallets and centralised applications;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Relationships"),": Handles the creation and management of mono-directional and bidirectional ","[relationships]"," between users' wallets. It also allows managing users blocks lists;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Subspaces"),": Handles the creation and management of a ","[subspace]"," and their ","[sections]"," inside Desmos;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Posts"),": Handles the creation and management of posts and their contents. These contents can include a variety of different attachments such as medias (pics, gifs, videos) and polls. Posts can also be enriched with a variety of ","[entities]",".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Reactions"),": Handles the creation and management of reactions to posts;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Reports"),": Handle the creation and management of posts' and users' reports."))),(0,a.kt)("h2",{id:"support-features"},"Support features"),(0,a.kt)("p",null,"These features are not directly connected to the social-networks scope but serve the network maintainers and\nexternal services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Fees"),": Allows setting custom additional fees to modules' messages;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Supply"),": Allows retrieving information about a particular token total and circulating supply.")),(0,a.kt)("p",null,"If you want to know more about each module, its concepts and how to interact with them check the ","[modules]"," section."))}m.isMDXComponent=!0}}]);