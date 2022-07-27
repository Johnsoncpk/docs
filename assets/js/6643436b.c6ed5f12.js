"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48460],{3905:function(e,n,t){t.d(n,{Zo:function(){return _},kt:function(){return u}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},_=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return t?o.createElement(m,r(r({ref:n},_),{},{components:t})):o.createElement(m,r({ref:n},_))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78932:function(e,n,t){t.r(n),t.d(n,{assets:function(){return _},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],l={id:"application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/application-link-oracle-request-bool-exp",id:"graphql/inputs/application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",description:"Boolean expression to filter rows from the table \"applicationlinkoracle_request\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/application-link-oracle-request-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-bool-exp",permalink:"/next/graphql/inputs/application-link-oracle-request-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-oracle-request-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_avg_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-avg-order-by"},next:{title:"application_link_oracle_request_max_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-max-order-by"}},_={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[application_link_oracle_request_bool_exp!]</code>)",id:"_and-application_link_oracle_request_bool_exp",level:4},{value:"<code>_not</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"_not-application_link_oracle_request_bool_exp",level:4},{value:"<code>_or</code> (<code>[application_link_oracle_request_bool_exp!]</code>)",id:"_or-application_link_oracle_request_bool_exp",level:4},{value:"<code>application_link</code> (<code>application_link_bool_exp</code>)",id:"application_link-application_link_bool_exp",level:4},{value:"<code>call_data</code> (<code>jsonb_comparison_exp</code>)",id:"call_data-jsonb_comparison_exp",level:4},{value:"<code>client_id</code> (<code>String_comparison_exp</code>)",id:"client_id-string_comparison_exp",level:4},{value:"<code>request_id</code> (<code>bigint_comparison_exp</code>)",id:"request_id-bigint_comparison_exp",level:4},{value:"<code>script_id</code> (<code>bigint_comparison_exp</code>)",id:"script_id-bigint_comparison_exp",level:4}],d={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to filter rows from the table \"application_link_oracle_request\". All fields are combined with a logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_bool_exp {\n  _and: [application_link_oracle_request_bool_exp!]\n  _not: application_link_oracle_request_bool_exp\n  _or: [application_link_oracle_request_bool_exp!]\n  application_link: application_link_bool_exp\n  call_data: jsonb_comparison_exp\n  client_id: String_comparison_exp\n  request_id: bigint_comparison_exp\n  script_id: bigint_comparison_exp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_and-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_bool_exp!]")),")"),(0,i.kt)("h4",{id:"_not-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,i.kt)("h4",{id:"_or-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_bool_exp!]")),")"),(0,i.kt)("h4",{id:"application_link-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,i.kt)("h4",{id:"call_data-jsonb_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"call_data"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,i.kt)("h4",{id:"client_id-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"request_id-bigint_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,i.kt)("h4",{id:"script_id-bigint_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}u.isMDXComponent=!0}}]);