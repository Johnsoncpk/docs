"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13854],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],i={id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},l="Permissions",p={unversionedId:"developers/modules/subspaces/permissions",id:"developers/modules/subspaces/permissions",title:"Permissions",description:"Based on which x/subspaces related action your users want to perform, they need to be granted with one or more",source:"@site/docs/02-developers/02-modules/subspaces/06-permissions.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/permissions",permalink:"/next/developers/modules/subspaces/permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/subspaces/06-permissions.md",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:6,frontMatter:{id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},sidebar:"docs",previous:{title:"Events",permalink:"/next/developers/modules/subspaces/events"},next:{title:"Client",permalink:"/next/developers/modules/subspaces/client"}},m={},c=[],d={toc:c};function u(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Based on which ",(0,o.kt)("inlineCode",{parentName:"p"},"x/subspaces")," related action your users want to perform, they need to be granted with one or more\nof the following permissions."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Permission Value")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Permission Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"EDIT_SUBSPACE")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to change the subspace's information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"DELETE_SUBSPACE")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to delete a subspace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"MANAGE_SECTIONS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to manage the subspace's sections")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"MANAGE_GROUPS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to manage the subspace's groups")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to set other users' permissions except for ",(0,o.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"EVERYTHING")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to do everything")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning"),"\nNote that when setting permission ",(0,o.kt)("inlineCode",{parentName:"p"},"EVERYTHING")," to a user, that user will de facto be the same as the subspace owner, having control over everything and being able to do everything within that subspace. Use this with caution.")))}u.isMDXComponent=!0}}]);