"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57212],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,f=u["".concat(c,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"application-link-oracle-request",title:"application_link_oracle_request",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/application-link-oracle-request",id:"graphql/objects/application-link-oracle-request",title:"application_link_oracle_request",description:'columns and relationships of "applicationlinkoracle_request"',source:"@site/docs/07-graphql/objects/application-link-oracle-request.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/application-link-oracle-request",permalink:"/next/graphql/objects/application-link-oracle-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/application-link-oracle-request.mdx",tags:[],version:"current",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"application-link-oracle-request",title:"application_link_oracle_request",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_order_by",permalink:"/next/graphql/inputs/user-block-order-by"},next:{title:"application_link",permalink:"/next/graphql/objects/application-link"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>application_link</code> (<code>application_link!</code>)",id:"application_link-application_link",level:4},{value:"<code>call_data</code> (<code>jsonb!</code>)",id:"call_data-jsonb",level:4},{value:"<code>client_id</code> (<code>String!</code>)",id:"client_id-string",level:4},{value:"<code>request_id</code> (<code>bigint!</code>)",id:"request_id-bigint",level:4},{value:"<code>script_id</code> (<code>bigint!</code>)",id:"script_id-bigint",level:4}],u={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'columns and relationships of "application_link_oracle_request"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type application_link_oracle_request {\n  application_link: application_link!\n  call_data(\n  path: String\n): jsonb!\n  client_id: String!\n  request_id: bigint!\n  script_id: bigint!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"application_link-application_link"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link!")),")"),(0,i.kt)("p",null,"An object relationship"),(0,i.kt)("h4",{id:"call_data-jsonb"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"call_data"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"path-string"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"JSON select path"),(0,i.kt)("h4",{id:"client_id-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"request_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,i.kt)("h4",{id:"script_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}k.isMDXComponent=!0}}]);