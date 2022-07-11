"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13885],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71661:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},p=void 0,s={unversionedId:"developers/queries/profiles/application-links",id:"version-2.3/developers/queries/profiles/application-links",title:"Query application links",description:"Query application links",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/application-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/application-link",permalink:"/2.3/developers/queries/profiles/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/application-links.md",tags:[],version:"2.3",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},sidebar:"version-2.3/docs",previous:{title:"Chain links",permalink:"/2.3/developers/queries/profiles/chain-links"},next:{title:"Observing data",permalink:"/2.3/developers/observe-data"}},c={},u=[{value:"Query application links",id:"query-application-links",level:2}],d={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-application-links"},"Query application links"),(0,o.kt)("p",null,"This query allows you to retrieve the application links with the optional user ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles app-links [[address]]\n\n# Example\n# desmos query app-links\n# desmos query app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}f.isMDXComponent=!0}}]);