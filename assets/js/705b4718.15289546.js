"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41093],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),a=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=a(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=a(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var a=2;a<o;a++)l[a]=r[a];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34010:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return u}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],p={id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},s=void 0,a={unversionedId:"developers/queries/profiles/application-links",id:"version-3/developers/queries/profiles/application-links",title:"Query application links",description:"Query application links",source:"@site/versioned_docs/version-3/02-developers/04-queries/profiles/application-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/application-link",permalink:"/3/developers/queries/profiles/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/profiles/application-links.md",tags:[],version:"3",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},sidebar:"version-3/docs",previous:{title:"Chain links",permalink:"/3/developers/queries/profiles/chain-links"},next:{title:"Relationships",permalink:"/3/developers/queries/relationships/relationships"}},c={},u=[{value:"Query application links",id:"query-application-links",level:2}],d={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-application-links"},"Query application links"),(0,o.kt)("p",null,"This query allows you to retrieve the application links with the optional user ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'desmos query profiles app-links [[user]] [[application]] [[username]] [flags]\n\n# Examples\n# desmos query profiles app-links \n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "twitter"\n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "twitter" "twitter_user"\n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n')))}f.isMDXComponent=!0}}]);