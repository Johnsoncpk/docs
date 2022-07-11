"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85053],{3905:function(e,s,r){r.d(s,{Zo:function(){return i},kt:function(){return d}});var t=r(67294);function n(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function a(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?a(Object(r),!0).forEach((function(s){n(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function o(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),p=function(e){var s=t.useContext(c),r=s;return e&&(r="function"==typeof e?e(s):u(u({},s),e)),r},i=function(e){var s=p(e.components);return t.createElement(c.Provider,{value:s},e.children)},l={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},b=t.forwardRef((function(e,s){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return r?t.createElement(f,u(u({ref:s},i),{},{components:r})):t.createElement(f,u({ref:s},i))}));function d(e,s){var r=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=b;var o={};for(var c in s)hasOwnProperty.call(s,c)&&(o[c]=s[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var p=2;p<a;p++)u[p]=r[p];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},60949:function(e,s,r){r.r(s),r.d(s,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var t=r(87462),n=r(63366),a=(r(67294),r(3905)),u=["components"],o={id:"subspaces",title:"Query all subspaces",sidebar_label:"Query subspaces",slug:"subspaces"},c=void 0,p={unversionedId:"developers/queries/subspaces/subspaces",id:"version-3/developers/queries/subspaces/subspaces",title:"Query all subspaces",description:"Query subspaces",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/subspaces.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/subspaces",permalink:"/3/developers/queries/subspaces/subspaces",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/subspaces.md",tags:[],version:"3",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspaces",title:"Query all subspaces",sidebar_label:"Query subspaces",slug:"subspaces"},sidebar:"version-3/docs",previous:{title:"Blocked users",permalink:"/3/developers/queries/relationships/blocked-users"},next:{title:"Query subspace",permalink:"/3/developers/queries/subspaces/subspace"}},i={},l=[{value:"Query subspaces",id:"query-subspaces",level:2}],b={toc:l};function d(e){var s=e.components,r=(0,n.Z)(e,u);return(0,a.kt)("wrapper",(0,t.Z)({},b,r,{components:s,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"query-subspaces"},"Query subspaces"),(0,a.kt)("p",null,"This query allows to get all the subspaces inside Desmos"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspaces [flags]\n\n# Examples\n# desmos query subspaces subspaces --page=2 --limit=100\n")))}d.isMDXComponent=!0}}]);