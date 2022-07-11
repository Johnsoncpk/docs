"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80131],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93589:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var n=r(87462),i=r(63366),s=(r(67294),r(3905)),o=["components"],a={},p="Permission detail",l={unversionedId:"developers/types/subspaces/permission-detail",id:"version-3/developers/types/subspaces/permission-detail",title:"Permission detail",description:"A permission detail contains the data of a permission.",source:"@site/versioned_docs/version-3/02-developers/02-types/subspaces/permission-detail.md",sourceDirName:"02-developers/02-types/subspaces",slug:"/developers/types/subspaces/permission-detail",permalink:"/3/developers/types/subspaces/permission-detail",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/subspaces/permission-detail.md",tags:[],version:"3",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{},sidebar:"version-3/docs",previous:{title:"User group",permalink:"/3/developers/types/subspaces/user-group"},next:{title:"Save profile",permalink:"/3/developers/transactions/profiles/save-profile"}},u={},c=[{value:"<code>User</code>",id:"user",level:3},{value:"Attributes",id:"attributes",level:4},{value:"<code>User</code>",id:"user-1",level:5},{value:"<code>Permission</code>",id:"permission",level:5},{value:"<code>Group</code>",id:"group",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"<code>GroupID</code>",id:"groupid",level:5},{value:"<code>Permission</code>",id:"permission-1",level:5}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"permission-detail"},"Permission detail"),(0,s.kt)("p",null,"A permission detail contains the data of a permission."),(0,s.kt)("h3",{id:"user"},(0,s.kt)("inlineCode",{parentName:"h3"},"User")),(0,s.kt)("p",null,"It represents a user permission."),(0,s.kt)("h4",{id:"attributes"},"Attributes"),(0,s.kt)("p",null,"The following attributes defines a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," permission."),(0,s.kt)("h5",{id:"user-1"},(0,s.kt)("inlineCode",{parentName:"h5"},"User")),(0,s.kt)("p",null,"The Bech32 address of the user for which the permission is set."),(0,s.kt)("h5",{id:"permission"},(0,s.kt)("inlineCode",{parentName:"h5"},"Permission")),(0,s.kt)("p",null,"The permission set to the user."),(0,s.kt)("h3",{id:"group"},(0,s.kt)("inlineCode",{parentName:"h3"},"Group")),(0,s.kt)("p",null,"It represents a group permission."),(0,s.kt)("h4",{id:"attributes-1"},"Attributes"),(0,s.kt)("p",null,"The following attributes defines a ",(0,s.kt)("inlineCode",{parentName:"p"},"Group")," permission."),(0,s.kt)("h5",{id:"groupid"},(0,s.kt)("inlineCode",{parentName:"h5"},"GroupID")),(0,s.kt)("p",null,"Group ID associated with the permission."),(0,s.kt)("h5",{id:"permission-1"},(0,s.kt)("inlineCode",{parentName:"h5"},"Permission")),(0,s.kt)("p",null,"The permission set to the group."))}m.isMDXComponent=!0}}]);