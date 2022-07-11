"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85576],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92008:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],l={id:"cancel-dtag-transfer-request",title:"Cancel DTag transfer request",sidebar_label:"Cancel DTag transfer request",slug:"cancel-dtag-transfer-request"},i="MsgCancelDTagTransferRequest",c={unversionedId:"developers/transactions/profiles/cancel-dtag-transfer-request",id:"version-2.3/developers/transactions/profiles/cancel-dtag-transfer-request",title:"Cancel DTag transfer request",description:"This message allows you to cancel a DTag transfer request made by yourself.",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/cancel-dtag-transfer-request.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/cancel-dtag-transfer-request",permalink:"/2.3/developers/transactions/profiles/cancel-dtag-transfer-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/cancel-dtag-transfer-request.md",tags:[],version:"2.3",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"cancel-dtag-transfer-request",title:"Cancel DTag transfer request",sidebar_label:"Cancel DTag transfer request",slug:"cancel-dtag-transfer-request"},sidebar:"version-2.3/docs",previous:{title:"Refuse DTag transfer request",permalink:"/2.3/developers/transactions/profiles/refuse-dtag-transfer-request"},next:{title:"Create Relationship",permalink:"/2.3/developers/transactions/profiles/create-relationship"}},u={},p=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgcanceldtagtransferrequest"},(0,s.kt)("inlineCode",{parentName:"h1"},"MsgCancelDTagTransferRequest")),(0,s.kt)("p",null,"This message allows you to cancel a ",(0,s.kt)("inlineCode",{parentName:"p"},"DTag")," transfer request made by yourself."),(0,s.kt)("h2",{id:"structure"},"Structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest",\n  "sender": "<Desmos address that sent the DTag\'s request>",\n  "receiver": "<Desmos address of the DTag owner>"\n}\n')),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"sender")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that request the ",(0,s.kt)("inlineCode",{parentName:"td"},"DTag")),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"receiver")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is the owner of the requested ",(0,s.kt)("inlineCode",{parentName:"td"},"DTag")),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest",\n  "sender": "desmos1nhgk008jvrxwa9tufr9tcr6zfrhe2uz0v90r2a",\n  "receiver": "desmos1k99c8htyk32srx78efzg7sxm965prtz0j9qrc7"\n}\n')),(0,s.kt)("h2",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cancel_dtag_transfer_request\n")))}f.isMDXComponent=!0}}]);