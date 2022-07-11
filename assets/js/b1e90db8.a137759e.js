"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59520],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return g}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=n.createContext({}),i=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,u=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),g=s,f=d["".concat(a,".").concat(g)]||d[g]||l[g]||u;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function g(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var u=t.length,o=new Array(u);o[0]=d;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var i=2;i<u;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65496:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l}});var n=t(87462),s=t(63366),u=(t(67294),t(3905)),o=["components"],p={id:"user-group",title:"Query user group",sidebar_label:"Query user group",slug:"user-group"},a=void 0,i={unversionedId:"developers/queries/subspaces/user-group",id:"version-3/developers/queries/subspaces/user-group",title:"Query user group",description:"Query user group",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-group.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-group",permalink:"/3/developers/queries/subspaces/user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-group.md",tags:[],version:"3",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"user-group",title:"Query user group",sidebar_label:"Query user group",slug:"user-group"},sidebar:"version-3/docs",previous:{title:"Query user groups",permalink:"/3/developers/queries/subspaces/user-groups"},next:{title:"Query user group members",permalink:"/3/developers/queries/subspaces/user-group-members"}},c={},l=[{value:"Query user group",id:"query-user-group",level:2}],d={toc:l};function g(e){var r=e.components,t=(0,s.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"query-user-group"},"Query user group"),(0,u.kt)("p",null,"This query allows to get the user group having the given id inside the specific subspace"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups group [subspace-id] [group-id]\n\n# Examples\n# desmos query subspaces groups group 1 2\n")))}g.isMDXComponent=!0}}]);