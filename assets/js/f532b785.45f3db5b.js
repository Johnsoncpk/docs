"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39900],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=s,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/subspace-user-permission",id:"graphql/objects/subspace-user-permission",title:"subspace_user_permission",description:'columns and relationships of "subspaceuserpermission"',source:"@site/docs/07-graphql/objects/subspace-user-permission.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-permission",permalink:"/next/graphql/objects/subspace-user-permission",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-permission.mdx",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group",permalink:"/next/graphql/objects/subspace-user-group"},next:{title:"subspace",permalink:"/next/graphql/objects/subspace"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>permissions</code> (<code>_text!</code>)",id:"permissions-_text",level:4},{value:"<code>section</code> (<code>subspace_section!</code>)",id:"section-subspace_section",level:4},{value:"<code>user_address</code> (<code>String!</code>)",id:"user_address-string",level:4}],d={toc:l};function m(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'columns and relationships of "subspace_user_permission"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_permission {\n  permissions: _text!\n  section: subspace_section!\n  user_address: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"permissions-_text"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,o.kt)("inlineCode",{parentName:"a"},"_text!")),")"),(0,o.kt)("h4",{id:"section-subspace_section"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_section!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"user_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}m.isMDXComponent=!0}}]);