"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[62923],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},o=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=d(a),g=n,f=k["".concat(p,".").concat(g)]||k[g]||m[g]||l;return a?r.createElement(f,s(s({ref:e},o),{},{components:a})):r.createElement(f,s({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},23630:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},s="Events",i={unversionedId:"developers/modules/relationships/events",id:"developers/modules/relationships/events",title:"Events",description:"The relationships module emits the following events:",source:"@site/docs/02-developers/02-modules/relationships/05-events.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/events",permalink:"/next/developers/modules/relationships/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/relationships/05-events.md",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/next/developers/modules/relationships/messages"},next:{title:"Client",permalink:"/next/developers/modules/relationships/client"}},p={},d=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreateRelationship",id:"msgcreaterelationship",level:3},{value:"MsgDeleteRelationship",id:"msgdeleterelationship",level:3},{value:"MsgBlockUser",id:"msgblockuser",level:3},{value:"MsgUnblockUser",id:"msgunblockuser",level:3}],o={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"events"},"Events"),(0,n.kt)("p",null,"The relationships module emits the following events: "),(0,n.kt)("h2",{id:"handlers"},"Handlers"),(0,n.kt)("h3",{id:"msgcreaterelationship"},"MsgCreateRelationship"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_relationship"),(0,n.kt)("td",{parentName:"tr",align:"left"},"creator"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_relationship"),(0,n.kt)("td",{parentName:"tr",align:"left"},"counterparty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{counterpartyAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_relationship"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgCreateRelationship")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgdeleterelationship"},"MsgDeleteRelationship"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_relationship"),(0,n.kt)("td",{parentName:"tr",align:"left"},"creator"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_relationship"),(0,n.kt)("td",{parentName:"tr",align:"left"},"counterparty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{counterpartyAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_relationship"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgDeleteRelationship")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgblockuser"},"MsgBlockUser"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"block_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"blocker"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{blockerAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"block_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"blocked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{blockedAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"block_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgBlockUser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgunblockuser"},"MsgUnblockUser"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unblock_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"blocker"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{blockerAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unblock_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"blocked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{blockedAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unblock_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgUnblockUser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))))}m.isMDXComponent=!0}}]);