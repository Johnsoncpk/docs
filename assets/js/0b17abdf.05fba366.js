"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[98376],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89505:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"user-block-aggregate-fields",title:"user_block_aggregate_fields",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/objects/user-block-aggregate-fields",id:"version-4.2.0/graphql/objects/user-block-aggregate-fields",title:"user_block_aggregate_fields",description:'aggregate fields of "user_block"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/user-block-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/user-block-aggregate-fields",permalink:"/graphql/objects/user-block-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/user-block-aggregate-fields.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"user-block-aggregate-fields",title:"user_block_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace",permalink:"/graphql/objects/subspace"},next:{title:"user_block_aggregate",permalink:"/graphql/objects/user-block-aggregate"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>user_block_max_fields</code>)",id:"max-user_block_max_fields",level:4},{value:"<code>min</code> (<code>user_block_min_fields</code>)",id:"min-user_block_min_fields",level:4}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'aggregate fields of "user_block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type user_block_aggregate_fields {\n  count(\n  columns: [user_block_select_column!]\n  distinct: Boolean\n): Int!\n  max: user_block_max_fields\n  min: user_block_min_fields\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"columns-user_block_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/user-block-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[user_block_select_column!]")),")"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,o.kt)("h4",{id:"max-user_block_max_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/user-block-max-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_max_fields")),")"),(0,o.kt)("h4",{id:"min-user_block_min_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/user-block-min-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_min_fields")),")"))}f.isMDXComponent=!0}}]);