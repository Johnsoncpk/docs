"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1057],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=s,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4086:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],i={id:"set-user-group-permissions",title:"Set user group permissions",sidebar_label:"Set user group permissions",slug:"set-user-group-permissions"},p="MsgSetUserGroupPermissions",u={unversionedId:"developers/transactions/subspaces/set-user-group-permissions",id:"version-3/developers/transactions/subspaces/set-user-group-permissions",title:"Set user group permissions",description:"This message allows to set a user group permissions.",source:"@site/versioned_docs/version-3/02-developers/03-transactions/subspaces/set-user-group-permissions.md",sourceDirName:"02-developers/03-transactions/subspaces",slug:"/developers/transactions/subspaces/set-user-group-permissions",permalink:"/3/developers/transactions/subspaces/set-user-group-permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/03-transactions/subspaces/set-user-group-permissions.md",tags:[],version:"3",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"set-user-group-permissions",title:"Set user group permissions",sidebar_label:"Set user group permissions",slug:"set-user-group-permissions"},sidebar:"version-3/docs",previous:{title:"Remove user from user group",permalink:"/3/developers/transactions/subspaces/remove-user-from-user-group"},next:{title:"Delete user group",permalink:"/3/developers/transactions/subspaces/delete-user-group"}},l={},c=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msgsetusergrouppermissions"},(0,a.kt)("inlineCode",{parentName:"h1"},"MsgSetUserGroupPermissions")),(0,a.kt)("p",null,"This message allows to set a user group permissions."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint64"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the subspace where the group exists"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"group_id")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the group to which we need to set the permission for"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"permissions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Permissions to be set for the group combined and represented as integer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"signer")),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Address of the signer of the message"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1.MsgSetUserGroupPermissions",\n  "subspace_id": "1",\n  "group_id": 1,\n  "permissions": 3,\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,a.kt)("h2",{id:"message-action"},"Message action"),(0,a.kt)("p",null,"The action associated to this message is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set_user_group_permissions\n")))}d.isMDXComponent=!0}}]);