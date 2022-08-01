"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80649],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>c});var r=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,r,o=function(e,t){if(null==e)return{};var s,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var s=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(s),c=o,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||n;return s?r.createElement(g,a(a({ref:t},d),{},{components:s})):r.createElement(g,a({ref:t},d))}));function c(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=s.length,a=new Array(n);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<n;i++)a[i]=s[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}u.displayName="MDXCreateElement"},26542:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var r=s(87462),o=(s(67294),s(3905));const n={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},a="Msg Service",l={unversionedId:"developers/modules/reports/messages",id:"version-4.1.0/developers/modules/reports/messages",title:"Messages",description:"Msg/CreateReport",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reports/04-messages.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/messages",permalink:"/4.1.0/developers/modules/reports/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reports/04-messages.md",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/4.1.0/developers/modules/reports/state"},next:{title:"Events",permalink:"/4.1.0/developers/modules/reports/events"}},p={},i=[{value:"Msg/CreateReport",id:"msgcreatereport",level:2},{value:"Msg/DeleteReport",id:"msgdeletereport",level:2},{value:"Msg/SupportStandardReason",id:"msgsupportstandardreason",level:2},{value:"Msg/AddReason",id:"msgaddreason",level:2},{value:"Msg/RemoveReason",id:"msgremovereason",level:2}],d={toc:i};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msg-service"},"Msg Service"),(0,o.kt)("h2",{id:"msgcreatereport"},"Msg/CreateReport"),(0,o.kt)("p",null,"A report can be created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateReport"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L33-L58\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the reporter does not have a profile;"),(0,o.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,o.kt)("li",{parentName:"ul"},"one of the specified reasons ids does not exist inside the subspace;"),(0,o.kt)("li",{parentName:"ul"},"the reported does not have the permission to report content within the subspace;"),(0,o.kt)("li",{parentName:"ul"},"another report for the same target has already been created by the same user;"),(0,o.kt)("li",{parentName:"ul"},"the report target does not exist.")),(0,o.kt)("h2",{id:"msgdeletereport"},"Msg/DeleteReport"),(0,o.kt)("p",null,"A report can be deleted using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgDeleteReport"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L76-L92\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the report does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to delete a report within the subspace.")),(0,o.kt)("h2",{id:"msgsupportstandardreason"},"Msg/SupportStandardReason"),(0,o.kt)("p",null,"A standard reason can be supported within a subspace using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSupportStandardReason"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L97-L114\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to manage registered within inside the subspace.")),(0,o.kt)("h2",{id:"msgaddreason"},"Msg/AddReason"),(0,o.kt)("p",null,"A reason can be added to a subspace using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgAddReason"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L126-L143\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to manage reasons within the subspace;"),(0,o.kt)("li",{parentName:"ul"},"the reason name is either empty or blank.")),(0,o.kt)("h2",{id:"msgremovereason"},"Msg/RemoveReason"),(0,o.kt)("p",null,"A previously added reason can be removed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgRemoveReason"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L154-L171\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to manage registered reasons within the subspace.")))}m.isMDXComponent=!0}}]);