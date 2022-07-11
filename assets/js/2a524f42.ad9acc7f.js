"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"reaction",title:"reaction",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/objects/reaction",id:"version-4.1.0/graphql/objects/reaction",title:"reaction",description:'columns and relationships of "reaction"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/reaction.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/reaction",permalink:"/graphql/objects/reaction",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/reaction.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"reaction",title:"reaction",hide_table_of_contents:!1}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>String!</code>)",id:"author_address-string",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>post</code> (<code>post!</code>)",id:"post-post",level:4},{value:"<code>value</code> (<code>jsonb!</code>)",id:"value-jsonb",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'columns and relationships of "reaction"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type reaction {\n  author_address: String!\n  id: bigint!\n  post: post!\n  value(\n  path: String\n): jsonb!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"author_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"id-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,o.kt)("h4",{id:"post-post"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"value-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"value"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"path-string"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,o.kt)("p",null,"JSON select path"))}f.isMDXComponent=!0}}]);