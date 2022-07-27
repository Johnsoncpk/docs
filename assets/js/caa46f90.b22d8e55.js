"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4965],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},l="Concepts",c={unversionedId:"developers/modules/relationships/concepts",id:"developers/modules/relationships/concepts",title:"Concepts",description:"Relationship",source:"@site/docs/02-developers/02-modules/relationships/02-concepts.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/concepts",permalink:"/next/developers/modules/relationships/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/relationships/02-concepts.md",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/developers/modules/relationships/overview"},next:{title:"State",permalink:"/next/developers/modules/relationships/state"}},p={},u=[{value:"Relationship",id:"relationship",level:2},{value:"User Block",id:"user-block",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"concepts"},"Concepts"),(0,s.kt)("h2",{id:"relationship"},"Relationship"),(0,s.kt)("p",null,"A relationships between two users is a ",(0,s.kt)("strong",{parentName:"p"},"mono-directional")," link between a ",(0,s.kt)("em",{parentName:"p"},"creator")," and a ",(0,s.kt)("em",{parentName:"p"},"recipient"),'. This is equivalent to the concept of "follow" that is present on traditional social networks (i.e. Twitter). '),(0,s.kt)("p",null,"When a user A creates a relationships towards a user B, it means that they are interested in being notified about what user B does. "),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Friendship")," can be represented by a mutual relationship, which consists of two mono-directional relationships. If user A creates a relationships towards user B (",(0,s.kt)("inlineCode",{parentName:"p"},"A -> B"),"), and user B creates a relationship towards user A (",(0,s.kt)("inlineCode",{parentName:"p"},"B -> A"),"), then user A and B can be considered to be ",(0,s.kt)("em",{parentName:"p"},"friends")," since a mutual relationship (",(0,s.kt)("inlineCode",{parentName:"p"},"A <-> B"),") exists."),(0,s.kt)("h2",{id:"user-block"},"User Block"),(0,s.kt)("p",null,"A user block from one user (",(0,s.kt)("em",{parentName:"p"},"blocker"),") to another (",(0,s.kt)("em",{parentName:"p"},"blocked"),") represents the willingness of the first to block any future interaction that the latter might have with them. This concept is used to allow users to block misbehaving users from future harassment or unwanted interactions. "),(0,s.kt)("p",null,"When a user A creates a user block towards a user B, they can specify inside which subspace they want to block the user. If no particular subspace is provided, this means the B will not be allowed to have Desmos-level interactions with A in the future (e.g. requesting A to exchange their DTag). Blocking a user on subspace with id ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," (default value) ",(0,s.kt)("strong",{parentName:"p"},"will not")," block such user from interacting inside other subspaces."))}m.isMDXComponent=!0}}]);