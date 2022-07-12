"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54386],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",hide_table_of_contents:!1},s=void 0,c={unversionedId:"graphql/objects/poll-answer-aggregate-fields",id:"version-4.1.0/graphql/objects/poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",description:'aggregate fields of "poll_answer"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/poll-answer-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/poll-answer-aggregate-fields",permalink:"/graphql/objects/poll-answer-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/poll-answer-aggregate-fields.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests",permalink:"/graphql/objects/dtag-transfer-requests"},next:{title:"poll_answer_aggregate",permalink:"/graphql/objects/poll-answer-aggregate"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>poll_answer_max_fields</code>)",id:"max-poll_answer_max_fields",level:4},{value:"<code>min</code> (<code>poll_answer_min_fields</code>)",id:"min-poll_answer_min_fields",level:4}],f={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'aggregate fields of "poll_answer"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type poll_answer_aggregate_fields {\n  count(\n  columns: [poll_answer_select_column!]\n  distinct: Boolean\n): Int!\n  max: poll_answer_max_fields\n  min: poll_answer_min_fields\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"count-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"columns-poll_answer_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/poll-answer-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,l.kt)("h4",{id:"max-poll_answer_max_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/poll-answer-max-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer_max_fields")),")"),(0,l.kt)("h4",{id:"min-poll_answer_min_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/poll-answer-min-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"poll_answer_min_fields")),")"))}u.isMDXComponent=!0}}]);