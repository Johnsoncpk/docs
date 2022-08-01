"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/objects/poll-answer",id:"version-4.1.0/graphql/objects/poll-answer",title:"poll_answer",description:'columns and relationships of "poll_answer"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/poll-answer.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/poll-answer",permalink:"/4.1.0/graphql/objects/poll-answer",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/poll-answer.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"poll-answer",title:"poll_answer",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_min_fields",permalink:"/4.1.0/graphql/objects/poll-answer-min-fields"},next:{title:"post_aggregate_fields",permalink:"/4.1.0/graphql/objects/post-aggregate-fields"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>answers_indexes</code> (<code>_int8!</code>)",id:"answers_indexes-_int8",level:4},{value:"<code>post_attachment</code> (<code>post_attachment!</code>)",id:"post_attachment-post_attachment",level:4},{value:"<code>user_address</code> (<code>String!</code>)",id:"user_address-string",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "poll_answer"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type poll_answer {\n  answers_indexes: _int8!\n  post_attachment: post_attachment!\n  user_address: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"answers_indexes-_int8"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"answers_indexes"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,a.kt)("inlineCode",{parentName:"a"},"_int8!")),")"),(0,a.kt)("h4",{id:"post_attachment-post_attachment"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"user_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}d.isMDXComponent=!0}}]);