"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[66171],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return b}});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},u=Object.keys(e);for(s=0;s<u.length;s++)t=u[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)t=u[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=s.createContext({}),i=function(e){var r=s.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return s.createElement(a.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},l=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=i(t),b=n,d=l["".concat(a,".").concat(b)]||l[b]||m[b]||u;return t?s.createElement(d,o(o({ref:r},c),{},{components:t})):s.createElement(d,o({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,o=new Array(u);o[0]=l;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<u;i++)o[i]=t[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}l.displayName="MDXCreateElement"},38489:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m}});var s=t(87462),n=t(63366),u=(t(67294),t(3905)),o=["components"],p={id:"user-group-members",title:"Query user group members",sidebar_label:"Query user group members",slug:"user-group-members"},a=void 0,i={unversionedId:"developers/queries/subspaces/user-group-members",id:"version-3/developers/queries/subspaces/user-group-members",title:"Query user group members",description:"Query user group members",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-group-members.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-group-members",permalink:"/3/developers/queries/subspaces/user-group-members",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-group-members.md",tags:[],version:"3",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"user-group-members",title:"Query user group members",sidebar_label:"Query user group members",slug:"user-group-members"},sidebar:"version-3/docs",previous:{title:"Query user group",permalink:"/3/developers/queries/subspaces/user-group"},next:{title:"Query user permissions",permalink:"/3/developers/queries/subspaces/user-permissions"}},c={},m=[{value:"Query user group members",id:"query-user-group-members",level:2}],l={toc:m};function b(e){var r=e.components,t=(0,n.Z)(e,o);return(0,u.kt)("wrapper",(0,s.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"query-user-group-members"},"Query user group members"),(0,u.kt)("p",null,"This query allows to get all the members of a given user group"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups members [subspace-id] [group-id] [flags]\n\n# Examples\n# desmos query subspaces groups members 1 1 --page=2 --limit=100\n")))}b.isMDXComponent=!0}}]);