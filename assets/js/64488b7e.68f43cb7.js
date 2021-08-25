"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6934],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8645:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=["components"],i={id:"perform-transactions",title:"Performing transactions",sidebar_position:3},l="Performing transactions",p={unversionedId:"developers/perform-transactions",id:"developers/perform-transactions",isDocsHomePage:!1,title:"Performing transactions",description:"Introduction",source:"@site/docs/02-developers/03-perform-transactions.md",sourceDirName:"02-developers",slug:"/developers/perform-transactions",permalink:"/developers/perform-transactions",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-perform-transactions.md",version:"current",lastUpdatedAt:1629894424,formattedLastUpdatedAt:"8/25/2021",sidebarPosition:3,frontMatter:{id:"perform-transactions",title:"Performing transactions",sidebar_position:3},sidebar:"docs",previous:{title:"Types",permalink:"/developers/types"},next:{title:"Querying data",permalink:"/developers/query-data"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Available messages",id:"available-messages",children:[{value:"Profiles",id:"profiles",children:[]},{value:"Posts",id:"posts",children:[]},{value:"Subspaces",id:"subspaces",children:[]},{value:"Params",id:"params",children:[]}]}],m={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"performing-transactions"},"Performing transactions"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"As seeing inside the ",(0,s.kt)("a",{parentName:"p",href:"/developers/developer-faq#what-is-a-transaction"},"FAQs"),", transactions are the way to alter the current chain\nstate by providing it with the actions to take. Inside this page you will see all the messages that represents the\navailable actions that can be used to edit the chain state."),(0,s.kt)("h2",{id:"available-messages"},"Available messages"),(0,s.kt)("p",null,"Here is the list of currently available ",(0,s.kt)("a",{parentName:"p",href:"/developers/developer-faq#what-is-a-message"},"messages")," that you can use while creating\ntransactions for the Desmos chain."),(0,s.kt)("h3",{id:"profiles"},"Profiles"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/save-profile"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgSaveProfile")),": allows you to create or edit an existing profile."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/delete-profile"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgDeleteProfile")),": allows you to delete an existing profile."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/request-dtag-transfer"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgRequestDTagTransfer")),": allows you to ask a transfer for another\nuser ",(0,s.kt)("inlineCode",{parentName:"li"},"dTag"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/accept-dtag-transfer-request"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgAcceptDTagTransferRequest")),": allows you to accept a dtag transfer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/refuse-dtag-transfer-request"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgRefuseDTagTransferRequest")),": allows the ",(0,s.kt)("inlineCode",{parentName:"li"},"dTag")," owner to refuse a\ntransfer request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/cancel-dtag-transfer-request"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgCancelDTagTransferRequest")),": allows the ",(0,s.kt)("inlineCode",{parentName:"li"},"dTag")," request's sender to\ncancel his request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/create-relationship"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgCreateRelationship")),": allows you to create a relationship."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/delete-relationship"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgDeleteRelationship")),": allows you to delete a relationship."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/block-user"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgBlockUser")),": allows you to block a user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/unblock-user"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgUnblockUser")),": allows you to unblock a user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/link-application"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgLinkApplication")),": allows you to link a centralized application to your Desmos profile."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/unlink-application"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgUnlinkApplication")),": allows you to unlink a previously linked application from your Desmos profile."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/link-chain-account"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgLinkChainAccount")),": allows you to link an external chain account to your Desmos profile."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/profiles/unlink-chain-account"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgUnlinkChainAccount")),": allows you to unlink a previously linked chain account from your Desmos profile.")),(0,s.kt)("h3",{id:"posts"},"Posts"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/create-post"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgCreatePost")),": allows you to create a new post or a comment for an existing\npost."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/edit-post"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgEditPost")),": allows you to edit a previously created post message."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/report-post"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgReportPost")),": allows you to report an existing post."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/add-post-reaction"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgAddPostReaction")),": allows you to add a reaction to an existing post."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/remove-post-reaction"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgRemovePostReaction")),": allows you to remove a reaction from a post."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/answer-poll"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgAnswerPoll")),": allows you to answer a post's poll."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/posts/register-reaction"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgRegisterReaction")),": allows you to register a reaction.")),(0,s.kt)("h3",{id:"subspaces"},"Subspaces"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/create-subspace"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgCreateSubspace")),": allows you to create a subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/edit-subspace"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgEditSubspace")),": allows you to edit an existent subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/add-admin"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgAddAdmin")),": allows you to add an admin to an existent subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/remove-admin"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgRemoveAdmin")),": allows you to remove an admin from an existent subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/register-user"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgRegisterUser")),": allows you to register a user inside an existent subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/unregister-user"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgUnregisterUser")),": allows you to unregister a user from an existent subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/ban-user"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgBanUser")),": allows you to ban a user from an existent subspace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/subspaces/unban-user"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgUnbanUser")),": allows you to unban a user from an existent subspace.")),(0,s.kt)("h3",{id:"params"},"Params"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/developers/msgs/staging/edit_param_proposal"},(0,s.kt)("inlineCode",{parentName:"a"},"EditParamsProposal")),": allows you to open a proposal to change profile's params.")))}c.isMDXComponent=!0}}]);