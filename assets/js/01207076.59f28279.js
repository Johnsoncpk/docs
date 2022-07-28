"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[74906],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=s,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66152:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=t(87462),s=t(63366),i=(t(67294),t(3905)),o=["components"],a={id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"relationships"},l=void 0,p={unversionedId:"developers/queries/relationships/relationships",id:"version-3/developers/queries/relationships/relationships",title:"Query relationships",description:"Query relationships",source:"@site/versioned_docs/version-3/02-developers/04-queries/relationships/relationships.md",sourceDirName:"02-developers/04-queries/relationships",slug:"/developers/queries/relationships/relationships",permalink:"/3/developers/queries/relationships/relationships",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/relationships/relationships.md",tags:[],version:"3",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"relationships"},sidebar:"version-3/docs",previous:{title:"Application links",permalink:"/3/developers/queries/profiles/application-link"},next:{title:"Blocked users",permalink:"/3/developers/queries/relationships/blocked-users"}},u={},c=[{value:"Query relationships",id:"query-relationships",level:2}],d={toc:c};function f(e){var r=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"query-relationships"},"Query relationships"),(0,i.kt)("p",null,"This query allows you to retrieve all the relationships made inside the given subspace-id.\nAn optional creator and counterparty addresses can be passed to the query to retrieve the specific's creator's relationships."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships relationships [subspace-id] [[creator]] [[counterparty]] [flags]\n\n# Examples\n# desmos query relationships relationships 1\n# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f\n")))}f.isMDXComponent=!0}}]);