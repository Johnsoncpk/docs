"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8964],{3905:function(e,t,s){s.d(t,{Zo:function(){return d},kt:function(){return u}});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(s),u=n,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return s?r.createElement(g,o(o({ref:t},d),{},{components:s})):r.createElement(g,o({ref:t},d))}));function u(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=s[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},43157:function(e,t,s){s.r(t),s.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=s(87462),n=s(63366),a=(s(67294),s(3905)),o=["components"],i={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},l="Msg Service",c={unversionedId:"developers/modules/reactions/messages",id:"version-4.2.0/developers/modules/reactions/messages",title:"Messages",description:"Msg/AddReaction",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/reactions/04-messages.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/messages",permalink:"/developers/modules/reactions/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/reactions/04-messages.md",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/developers/modules/reactions/state"},next:{title:"Events",permalink:"/developers/modules/reactions/events"}},d={},p=[{value:"Msg/AddReaction",id:"msgaddreaction",level:2},{value:"Msg/RemoveReaction",id:"msgremovereaction",level:2},{value:"Msg/AddRegisteredReaction",id:"msgaddregisteredreaction",level:2},{value:"Msg/EditRegisteredReaction",id:"msgeditregisteredreaction",level:2},{value:"Msg/RemoveRegisteredReaction",id:"msgremoveregisteredreaction",level:2},{value:"Msg/SetReactionsParams",id:"msgsetreactionsparams",level:2}],m={toc:p};function u(e){var t=e.components,s=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msg-service"},"Msg Service"),(0,a.kt)("h2",{id:"msgaddreaction"},"Msg/AddReaction"),(0,a.kt)("p",null,"A post reaction can be added with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAddReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/reactions/v1/msgs.proto#L38-L60\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the user does not have a profile;"),(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post author has blocked the user within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to react to posts inside the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the reaction's value is not valid;"),(0,a.kt)("li",{parentName:"ul"},"the reaction already exists.")),(0,a.kt)("h2",{id:"msgremovereaction"},"Msg/RemoveReaction"),(0,a.kt)("p",null,"A reaction can be removed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRemoveReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/reactions/v1/msgs.proto#L71-L94\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the reaction does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to remove reactions within the subspace.")),(0,a.kt)("h2",{id:"msgaddregisteredreaction"},"Msg/AddRegisteredReaction"),(0,a.kt)("p",null,"A registered reaction can be added to a subspace with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAddRegisteredReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/reactions/v1/msgs.proto#L99-L117\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to register a reaction within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the provided shorthand code is either blank or empty; "),(0,a.kt)("li",{parentName:"ul"},"the provided display value is either blank or empty.")),(0,a.kt)("h2",{id:"msgeditregisteredreaction"},"Msg/EditRegisteredReaction"),(0,a.kt)("p",null,"A registered reaction can be edited with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgEditRegisteredReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/reactions/v1/msgs.proto#L129-L153\n")),(0,a.kt)("p",null,"it's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the registered reaction does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to manage registered reactions;"),(0,a.kt)("li",{parentName:"ul"},"the new shorthand code or display value are invalid.")),(0,a.kt)("h2",{id:"msgremoveregisteredreaction"},"Msg/RemoveRegisteredReaction"),(0,a.kt)("p",null,"A registered reaction ca be removed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRemoveRegisteredReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/reactions/v1/msgs.proto#L159-L176\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the registered reaction does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to manage registered reactions.")),(0,a.kt)("h2",{id:"msgsetreactionsparams"},"Msg/SetReactionsParams"),(0,a.kt)("p",null,"A subspace's reaction params can be set with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSetReactionsParams"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/reactions/v1/msgs.proto#L182-L205\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the specified subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to manage the reactions params;"),(0,a.kt)("li",{parentName:"ul"},"the provided params are invalid.")))}u.isMDXComponent=!0}}]);