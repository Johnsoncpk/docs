"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80649],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),i=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=i(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(r),c=n,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return r?s.createElement(g,a(a({ref:t},d),{},{components:r})):s.createElement(g,a({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<o;i++)a[i]=r[i];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26542:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var s=r(87462),n=r(63366),o=(r(67294),r(3905)),a=["components"],l={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},p="Msg Service",i={unversionedId:"developers/modules/reports/messages",id:"version-4.1.0/developers/modules/reports/messages",title:"Messages",description:"Msg/CreateReport",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reports/04-messages.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/messages",permalink:"/developers/modules/reports/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reports/04-messages.md",tags:[],version:"4.1.0",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/developers/modules/reports/state"},next:{title:"Events",permalink:"/developers/modules/reports/events"}},d={},u=[{value:"Msg/CreateReport",id:"msgcreatereport",level:2},{value:"Msg/DeleteReport",id:"msgdeletereport",level:2},{value:"Msg/SupportStandardReason",id:"msgsupportstandardreason",level:2},{value:"Msg/AddReason",id:"msgaddreason",level:2},{value:"Msg/RemoveReason",id:"msgremovereason",level:2}],m={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msg-service"},"Msg Service"),(0,o.kt)("h2",{id:"msgcreatereport"},"Msg/CreateReport"),(0,o.kt)("p",null,"A report can be created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateReport"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L34-L58\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the reporter does not have a profile;"),(0,o.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,o.kt)("li",{parentName:"ul"},"one of the specified reasons ids does not exist inside the subspace;"),(0,o.kt)("li",{parentName:"ul"},"the reported does not have the permission to report content within the subspace;"),(0,o.kt)("li",{parentName:"ul"},"another report for the same target has already been created by the same user;"),(0,o.kt)("li",{parentName:"ul"},"the report target does not exist.")),(0,o.kt)("h2",{id:"msgdeletereport"},"Msg/DeleteReport"),(0,o.kt)("p",null,"A report can be deleted using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgDeleteReport"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L77-L92\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the report does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to delete a report within the subspace.")),(0,o.kt)("h2",{id:"msgsupportstandardreason"},"Msg/SupportStandardReason"),(0,o.kt)("p",null,"A standard reason can be supported within a subspace using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSupportStandardReason"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L99-L114\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to manage registered within inside the subspace.")),(0,o.kt)("h2",{id:"msgaddreason"},"Msg/AddReason"),(0,o.kt)("p",null,"A reason can be added to a subspace using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgAddReason"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L128-L143\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to manage reasons within the subspace;"),(0,o.kt)("li",{parentName:"ul"},"the reason name is either empty or blank.")),(0,o.kt)("h2",{id:"msgremovereason"},"Msg/RemoveReason"),(0,o.kt)("p",null,"A previously added reason can be removed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgRemoveReason"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reports/v1/msgs.proto#L156-L171\n")),(0,o.kt)("p",null,"It's expected to fail if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subspace reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the reason does not exist;"),(0,o.kt)("li",{parentName:"ul"},"the signer does not have the permission to manage registered reasons within the subspace.")))}c.isMDXComponent=!0}}]);