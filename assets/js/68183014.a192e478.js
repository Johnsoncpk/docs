"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32118],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"post-hashtag",title:"post_hashtag",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/post-hashtag",id:"version-4.1.0/graphql/objects/post-hashtag",title:"post_hashtag",description:'columns and relationships of "post_hashtag"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/post-hashtag.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-hashtag",permalink:"/graphql/objects/post-hashtag",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/post-hashtag.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"post-hashtag",title:"post_hashtag",hide_table_of_contents:!1}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>bigint!</code>)",id:"end_index-bigint",level:4},{value:"<code>post</code> (<code>post!</code>)",id:"post-post",level:4},{value:"<code>start_index</code> (<code>bigint!</code>)",id:"start_index-bigint",level:4},{value:"<code>tag</code> (<code>String!</code>)",id:"tag-string",level:4}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'columns and relationships of "post_hashtag"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_hashtag {\n  end_index: bigint!\n  post: post!\n  start_index: bigint!\n  tag: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"end_index-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,o.kt)("h4",{id:"post-post"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"start_index-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,o.kt)("h4",{id:"tag-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"tag"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}h.isMDXComponent=!0}}]);