"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60054],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9344:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={id:"profile-by-pk",title:"profile_by_pk",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/queries/profile-by-pk",id:"version-4.2.0/graphql/queries/profile-by-pk",title:"profile_by_pk",description:'fetch data from the table: "profile" using primary key columns',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/profile-by-pk.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/profile-by-pk",permalink:"/graphql/queries/profile-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/profile-by-pk.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"profile-by-pk",title:"profile_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"posts_params",permalink:"/graphql/queries/posts-params"},next:{title:"profile_relationship_aggregate",permalink:"/graphql/queries/profile-relationship-aggregate"}},l={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>address</code> (<code>String!</code>)",id:"address-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile</code>",id:"profile",level:4}],c={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "profile" using primary key columns'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"profile_by_pk(\n  address: String!\n): profile\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profile"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"profile"))),(0,o.kt)("p",null,'columns and relationships of "profile"'))}d.isMDXComponent=!0}}]);