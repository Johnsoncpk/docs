"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26574],{3905:(e,r,s)=>{s.d(r,{Zo:()=>l,kt:()=>g});var t=s(67294);function u(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function n(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?n(Object(s),!0).forEach((function(r){u(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function p(e,r){if(null==e)return{};var s,t,u=function(e,r){if(null==e)return{};var s,t,u={},n=Object.keys(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||(u[s]=e[s]);return u}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(u[s]=e[s])}return u}var a=t.createContext({}),i=function(e){var r=t.useContext(a),s=r;return e&&(s="function"==typeof e?e(r):o(o({},r),e)),s},l=function(e){var r=i(e.components);return t.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var s=e.components,u=e.mdxType,n=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(s),g=u,y=d["".concat(a,".").concat(g)]||d[g]||c[g]||n;return s?t.createElement(y,o(o({ref:r},l),{},{components:s})):t.createElement(y,o({ref:r},l))}));function g(e,r){var s=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var n=s.length,o=new Array(n);o[0]=d;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:u,o[1]=p;for(var i=2;i<n;i++)o[i]=s[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}d.displayName="MDXCreateElement"},24985:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var t=s(87462),u=(s(67294),s(3905));const n={id:"user-groups",title:"Query user groups",sidebar_label:"Query user groups",slug:"user-groups"},o=void 0,p={unversionedId:"developers/queries/subspaces/user-groups",id:"version-3/developers/queries/subspaces/user-groups",title:"Query user groups",description:"Query user groups",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-groups.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-groups",permalink:"/3/developers/queries/subspaces/user-groups",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-groups.md",tags:[],version:"3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"user-groups",title:"Query user groups",sidebar_label:"Query user groups",slug:"user-groups"},sidebar:"version-3/docs",previous:{title:"Query subspace",permalink:"/3/developers/queries/subspaces/subspace"},next:{title:"Query user group",permalink:"/3/developers/queries/subspaces/user-group"}},a={},i=[{value:"Query user groups",id:"query-user-groups",level:2}],l={toc:i};function c(e){let{components:r,...s}=e;return(0,u.kt)("wrapper",(0,t.Z)({},l,s,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"query-user-groups"},"Query user groups"),(0,u.kt)("p",null,"This query allows to get all the groups that are present inside the subspace with the given id"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups list [subspace-id] [flags]\n\n# Examples\n# desmos query subspaces groups list 1 --page=2 --limit=100\n")))}c.isMDXComponent=!0}}]);