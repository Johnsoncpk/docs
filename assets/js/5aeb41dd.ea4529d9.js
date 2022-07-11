"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90971],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),i=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return o.createElement(s.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),u=r,m=d["".concat(s,".").concat(u)]||d[u]||_[u]||a;return t?o.createElement(m,l(l({ref:n},c),{},{components:t})):o.createElement(m,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94857:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return _}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),l=["components"],p={id:"poll-answer-bool-exp",title:"poll_answer_bool_exp",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/poll-answer-bool-exp",id:"version-4.1.0/graphql/inputs/poll-answer-bool-exp",title:"poll_answer_bool_exp",description:"Boolean expression to filter rows from the table \"poll_answer\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/poll-answer-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/poll-answer-bool-exp",permalink:"/graphql/inputs/poll-answer-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/poll-answer-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"poll-answer-bool-exp",title:"poll_answer_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"jsonb_comparison_exp",permalink:"/graphql/inputs/jsonb-comparison-exp"},next:{title:"poll_answer_order_by",permalink:"/graphql/inputs/poll-answer-order-by"}},c={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[poll_answer_bool_exp!]</code>)",id:"_and-poll_answer_bool_exp",level:4},{value:"<code>_not</code> (<code>poll_answer_bool_exp</code>)",id:"_not-poll_answer_bool_exp",level:4},{value:"<code>_or</code> (<code>[poll_answer_bool_exp!]</code>)",id:"_or-poll_answer_bool_exp",level:4},{value:"<code>answers_indexes</code> (<code>_int8_comparison_exp</code>)",id:"answers_indexes-_int8_comparison_exp",level:4},{value:"<code>post_attachment</code> (<code>post_attachment_bool_exp</code>)",id:"post_attachment-post_attachment_bool_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4}],d={toc:_};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"poll_answer\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input poll_answer_bool_exp {\n  _and: [poll_answer_bool_exp!]\n  _not: poll_answer_bool_exp\n  _or: [poll_answer_bool_exp!]\n  answers_indexes: _int8_comparison_exp\n  post_attachment: post_attachment_bool_exp\n  user_address: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-poll_answer_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[poll_answer_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-poll_answer_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-poll_answer_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[poll_answer_bool_exp!]")),")"),(0,a.kt)("h4",{id:"answers_indexes-_int8_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"answers_indexes"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/int-8-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"_int8_comparison_exp")),")"),(0,a.kt)("h4",{id:"post_attachment-post_attachment_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,a.kt)("h4",{id:"user_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}u.isMDXComponent=!0}}]);