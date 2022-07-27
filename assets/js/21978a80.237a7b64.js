"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11848],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=s,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16880:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),i=["components"],a={},p="User group",u={unversionedId:"developers/types/subspaces/user-group",id:"version-3/developers/types/subspaces/user-group",title:"User group",description:"A User group lives inside a subspace and represents a group of users.",source:"@site/versioned_docs/version-3/02-developers/02-types/subspaces/user-group.md",sourceDirName:"02-developers/02-types/subspaces",slug:"/developers/types/subspaces/user-group",permalink:"/3/developers/types/subspaces/user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/subspaces/user-group.md",tags:[],version:"3",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{},sidebar:"version-3/docs",previous:{title:"Subspace",permalink:"/3/developers/types/subspaces/subspace"},next:{title:"Permission detail",permalink:"/3/developers/types/subspaces/permission-detail"}},c={},l=[{value:"Attributes",id:"attributes",level:2},{value:"<code>SubspaceID</code>",id:"subspaceid",level:3},{value:"<code>ID</code>",id:"id",level:3},{value:"<code>Name</code>",id:"name",level:3},{value:"<code>Description</code>",id:"description",level:3},{value:"<code>Permissions</code>",id:"permissions",level:3}],d={toc:l};function f(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-group"},"User group"),(0,o.kt)("p",null,"A User group lives inside a subspace and represents a group of users."),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("p",null,"The following attributes defines a user group."),(0,o.kt)("h3",{id:"subspaceid"},(0,o.kt)("inlineCode",{parentName:"h3"},"SubspaceID")),(0,o.kt)("p",null,"The ID of the subspace inside which the group exists."),(0,o.kt)("h3",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h3"},"ID")),(0,o.kt)("p",null,"The ID that uniquely identifies the group inside the subspace."),(0,o.kt)("h3",{id:"name"},(0,o.kt)("inlineCode",{parentName:"h3"},"Name")),(0,o.kt)("p",null,"Human-readable name of the group."),(0,o.kt)("h3",{id:"description"},(0,o.kt)("inlineCode",{parentName:"h3"},"Description")),(0,o.kt)("p",null,"Optional description of the group."),(0,o.kt)("h3",{id:"permissions"},(0,o.kt)("inlineCode",{parentName:"h3"},"Permissions")),(0,o.kt)("p",null,"Permissions that will be granted to all the users that are part of the group."))}f.isMDXComponent=!0}}]);