"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13885],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71661:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const o={id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},a=void 0,l={unversionedId:"developers/queries/profiles/application-links",id:"version-2.3/developers/queries/profiles/application-links",title:"Query application links",description:"Query application links",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/application-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/application-link",permalink:"/2.3/developers/queries/profiles/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/application-links.md",tags:[],version:"2.3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},sidebar:"version-2.3/docs",previous:{title:"Chain links",permalink:"/2.3/developers/queries/profiles/chain-links"},next:{title:"Observing data",permalink:"/2.3/developers/observe-data"}},p={},s=[{value:"Query application links",id:"query-application-links",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"query-application-links"},"Query application links"),(0,i.kt)("p",null,"This query allows you to retrieve the application links with the optional user ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles app-links [[address]]\n\n# Example\n# desmos query app-links\n# desmos query app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}u.isMDXComponent=!0}}]);