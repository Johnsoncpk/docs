"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11568],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"block-user",title:"Block user",sidebar_label:"Block user",slug:"block-user"},i="MsgBlockUser",c={unversionedId:"developers/transactions/profiles/block-user",id:"version-2.3/developers/transactions/profiles/block-user",title:"Block user",description:"This message allows you to block a specific user associated with a given address.",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/block-user.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/block-user",permalink:"/2.3/developers/transactions/profiles/block-user",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/block-user.md",tags:[],version:"2.3",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"block-user",title:"Block user",sidebar_label:"Block user",slug:"block-user"},sidebar:"version-2.3/docs",previous:{title:"Delete relationship",permalink:"/2.3/developers/transactions/profiles/delete-relationship"},next:{title:"Unblock User",permalink:"/2.3/developers/transactions/profiles/unblock-user"}},p={},d=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msgblockuser"},(0,o.kt)("inlineCode",{parentName:"h1"},"MsgBlockUser")),(0,o.kt)("p",null,"This message allows you to block a specific user associated with a given address."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgBlockUser",\n  "blocker": "<Desmos address that\'s blocking someone>",\n  "blocked": "<Desmos address that\'s been blocked>",\n  "reason": "<Reason of the block>",\n  "subspace": "<Subspace of the block>"\n}   \n')),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"blocker")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is blocking someone else"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"blocked")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the blocked user"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"reason")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reason for the block"),(0,o.kt)("td",{parentName:"tr",align:"left"},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"subspace")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"SHA256 string that identifies the app for which the block should apply"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgBlockUser",\n  "blocker": "desmos1j83hlf5yn5839wgpege3z669r8j3lh2ggmtf5u",\n  "blocked": "desmos15ux5mc98jlhsg30dzwwv06ftjs82uy4g3t99ru",\n  "reason": "reason",\n  "subspace": "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e"\n}   \n')),(0,o.kt)("h2",{id:"message-action"},"Message action"),(0,o.kt)("p",null,"The action associated to this message is the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"block_user\n")))}m.isMDXComponent=!0}}]);