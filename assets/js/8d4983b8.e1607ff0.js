"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"delete-relationship",title:"Delete relationship",sidebar_label:"Delete relationship",slug:"delete-relationship"},s="MsgDeleteRelationship",l={unversionedId:"developers/transactions/profiles/delete-relationship",id:"version-2.3/developers/transactions/profiles/delete-relationship",title:"Delete relationship",description:"This message allows you to delete an existing relationship with a specified counterparty.",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/delete-relationship.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/delete-relationship",permalink:"/2.3/developers/transactions/profiles/delete-relationship",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/delete-relationship.md",tags:[],version:"2.3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"delete-relationship",title:"Delete relationship",sidebar_label:"Delete relationship",slug:"delete-relationship"},sidebar:"version-2.3/docs",previous:{title:"Create Relationship",permalink:"/2.3/developers/transactions/profiles/create-relationship"},next:{title:"Block user",permalink:"/2.3/developers/transactions/profiles/block-user"}},o={},p=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msgdeleterelationship"},(0,a.kt)("inlineCode",{parentName:"h1"},"MsgDeleteRelationship")),(0,a.kt)("p",null,"This message allows you to delete an existing relationship with a specified counterparty."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgDeleteRelationship",\n  "user": "<Desmos address of the user deleting the relationship>",\n  "counterparty": "<Desmos address with which the sender want to end the relationship>",\n  "subspace": "<Subspace of the relationship>"\n}\n')),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"user")),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is deleting the relationship"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"counterparty")),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the relationship's counterparty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"subspace")),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Identifies the app where the relationship should be valid"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgDeleteRelationship",\n  "user": "desmos1e209r8nc8qdkmqujahwrq4xrlxhk3fs9k7yzmw",\n  "counterparty": "desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud",\n  "subspace": "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e"\n} \n')),(0,a.kt)("h2",{id:"message-action"},"Message action"),(0,a.kt)("p",null,"The action associated to this message is the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"delete_relationship\n")))}c.isMDXComponent=!0}}]);