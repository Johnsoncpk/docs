"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[45839],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return m}});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(s),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return s?r.createElement(h,a(a({ref:t},c),{},{components:s})):r.createElement(h,a({ref:t},c))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,a=new Array(o);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=s[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}u.displayName="MDXCreateElement"},14122:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=s(87462),n=s(63366),o=(s(67294),s(3905)),a=["components"],i={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},l="Msg Service",p={unversionedId:"developers/modules/relationships/messages",id:"developers/modules/relationships/messages",title:"Messages",description:"Msg/CreateRelationship",source:"@site/docs/02-developers/02-modules/relationships/04-messages.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/messages",permalink:"/next/developers/modules/relationships/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/relationships/04-messages.md",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/next/developers/modules/relationships/state"},next:{title:"Events",permalink:"/next/developers/modules/relationships/events"}},c={},d=[{value:"Msg/CreateRelationship",id:"msgcreaterelationship",level:2},{value:"Msg/DeleteRelationship",id:"msgdeleterelationship",level:2},{value:"Msg/BlockUser",id:"msgblockuser",level:2},{value:"Msg/UnblockUser",id:"msgunblockuser",level:2}],u={toc:d};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msg-service"},"Msg Service"),(0,o.kt)("h2",{id:"msgcreaterelationship"},"Msg/CreateRelationship"),(0,o.kt)("p",null,"A new relationship can be created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateRelationship"),", which allows to specify the subspace inside which the relationship should live and the counterparty address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/relationships/v1/msg_server.proto#L27-L39\n")),(0,o.kt)("p",null,"It's expected to fail if a relationships between the same user and counterparty already exists inside the same subspace. "),(0,o.kt)("h2",{id:"msgdeleterelationship"},"Msg/DeleteRelationship"),(0,o.kt)("p",null,"An existing relationship can be deleted with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgDeleteRelationship"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/relationships/v1/msg_server.proto#L47-L56\n")),(0,o.kt)("p",null,"It's expected to fail if a relationships between the signer and counterparty does not exist inside the specified subspace."),(0,o.kt)("h2",{id:"msgblockuser"},"Msg/BlockUser"),(0,o.kt)("p",null,"A new user block can be created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgBlockUser"),", which allows to specify the subspace inside which the block should be valid, the address of the blocked user and an optional reason for the block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/relationships/v1/msg_server.proto#L64-L74\n")),(0,o.kt)("p",null,"It's expected to fail if a user block between the same user and blocker already exists inside the same subspace."),(0,o.kt)("h2",{id:"msgunblockuser"},"Msg/UnblockUser"),(0,o.kt)("p",null,"An existing user block can be deleted with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgUnblockUser"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/relationships/v1/msg_server.proto#L81-L89\n")),(0,o.kt)("p",null,"It's expected to fail if the user block does not exist inside the specified subspace."))}m.isMDXComponent=!0}}]);