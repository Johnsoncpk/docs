"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[74906],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),p=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return s.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(t),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?s.createElement(m,o(o({ref:r},c),{},{components:t})):s.createElement(m,o({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var p=2;p<i;p++)o[p]=t[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66152:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=t(87462),n=(t(67294),t(3905));const i={id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"relationships"},o=void 0,a={unversionedId:"developers/queries/relationships/relationships",id:"version-3/developers/queries/relationships/relationships",title:"Query relationships",description:"Query relationships",source:"@site/versioned_docs/version-3/02-developers/04-queries/relationships/relationships.md",sourceDirName:"02-developers/04-queries/relationships",slug:"/developers/queries/relationships/relationships",permalink:"/3/developers/queries/relationships/relationships",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/relationships/relationships.md",tags:[],version:"3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"relationships"},sidebar:"version-3/docs",previous:{title:"Application links",permalink:"/3/developers/queries/profiles/application-link"},next:{title:"Blocked users",permalink:"/3/developers/queries/relationships/blocked-users"}},l={},p=[{value:"Query relationships",id:"query-relationships",level:2}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-relationships"},"Query relationships"),(0,n.kt)("p",null,"This query allows you to retrieve all the relationships made inside the given subspace-id.\nAn optional creator and counterparty addresses can be passed to the query to retrieve the specific's creator's relationships."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CLI")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships relationships [subspace-id] [[creator]] [[counterparty]] [flags]\n\n# Examples\n# desmos query relationships relationships 1\n# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f\n")))}u.isMDXComponent=!0}}]);