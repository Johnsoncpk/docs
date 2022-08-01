"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[72045],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>o});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=s(a),o=n,N=g["".concat(d,".").concat(o)]||g[o]||k[o]||l;return a?r.createElement(N,i(i({ref:e},m),{},{components:a})):r.createElement(N,i({ref:e},m))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},89828:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},i="Events",p={unversionedId:"developers/modules/profiles/events",id:"developers/modules/profiles/events",title:"Events",description:"The profiles module emits the following events:",source:"@site/docs/02-developers/02-modules/profiles/05-events.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/events",permalink:"/next/developers/modules/profiles/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/profiles/05-events.md",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/next/developers/modules/profiles/messages"},next:{title:"Parameters",permalink:"/next/developers/modules/profiles/params"}},d={},s=[{value:"Handlers",id:"handlers",level:2},{value:"MsgSaveProfile",id:"msgsaveprofile",level:3},{value:"MsgDeleteProfile",id:"msgdeleteprofile",level:2},{value:"MsgRequestDTagTransfer",id:"msgrequestdtagtransfer",level:2},{value:"MsgCancelDTagTransferRequest",id:"msgcanceldtagtransferrequest",level:2},{value:"MsgAcceptDTagTransferRequest",id:"msgacceptdtagtransferrequest",level:2},{value:"MsgRefuseDTagTransferRequest",id:"msgrefusedtagtransferrequest",level:2},{value:"MsgLinkChainAccount",id:"msglinkchainaccount",level:2},{value:"MsgUnlinkChainAccount",id:"msgunlinkchainaccount",level:2},{value:"MsgSetDefaultExternalAddress",id:"msgsetdefaultexternaladdress",level:2},{value:"MsgLinkApplication",id:"msglinkapplication",level:2},{value:"MsgUnlinkApplication",id:"msgunlinkapplication",level:2},{value:"Keeper",id:"keeper",level:2},{value:"Application Link Saved",id:"application-link-saved",level:3}],m={toc:s};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"events"},"Events"),(0,n.kt)("p",null,"The profiles module emits the following events:"),(0,n.kt)("h2",{id:"handlers"},"Handlers"),(0,n.kt)("h3",{id:"msgsaveprofile"},"MsgSaveProfile"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"save_profile"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profile_dtag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{profileDTag}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"save_profile"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profile_creator"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"save_profile"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profile_creation_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{profileCreationTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgSaveProfile")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgdeleteprofile"},"MsgDeleteProfile"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_profile"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profile_creator"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgDeleteProfile")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgrequestdtagtransfer"},"MsgRequestDTagTransfer"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"dtag_to_trade"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{dTagToTrade}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgRequestDTagTransfer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")))),(0,n.kt)("h2",{id:"msgcanceldtagtransferrequest"},"MsgCancelDTagTransferRequest"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cancel_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cancel_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgCancelDTagTransferRequest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgacceptdtagtransferrequest"},"MsgAcceptDTagTransferRequest"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"dtag_to_trade"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{dTagToTrade}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"new_dtag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{newDTag}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgAcceptDTagTransferRequest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgrefusedtagtransferrequest"},"MsgRefuseDTagTransferRequest"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"refuse_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"refuse_dtag_transfer_request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgRefuseDTagTransferRequest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msglinkchainaccount"},"MsgLinkChainAccount"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_target"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{targetAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_source_chain_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{chainName}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_owner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_creation_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{creationTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgLinkChainAccount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgunlinkchainaccount"},"MsgUnlinkChainAccount"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unlink_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_target"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{targetAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unlink_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_source_chain_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{chainName}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unlink_chain_account"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_owner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgUnlinkChainAccount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgsetdefaultexternaladdress"},"MsgSetDefaultExternalAddress"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"set_default_external_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_chain_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{chainName}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"set_default_external_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_external_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{externalAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"set_default_external_address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"chain_link_owner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{chainLinkOwner}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v3.MsgSetDefaultAddress")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msglinkapplication"},"MsgLinkApplication"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{applicationName}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_username"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{applicationUsername}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_link_creation_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{creationTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgLinkApplication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"msgunlinkapplication"},"MsgUnlinkApplication"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unlink_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unlink_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{applicationName}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unlink_application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_username"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{applicationUsername}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgUnlinkApplication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"keeper"},"Keeper"),(0,n.kt)("h3",{id:"application-link-saved"},"Application Link Saved"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"application_link_saved"),(0,n.kt)("td",{parentName:"tr",align:"left"},"user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"application_link_saved"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{applicationName}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"application_link_saved"),(0,n.kt)("td",{parentName:"tr",align:"left"},"application_username"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{applicationUsername}")))))}k.isMDXComponent=!0}}]);