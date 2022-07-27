"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[34046],{3905:function(e,n,t){t.d(n,{Zo:function(){return _},kt:function(){return m}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},_=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?o.createElement(u,r(r({ref:n},_),{},{components:t})):o.createElement(u,r({ref:n},_))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24577:function(e,n,t){t.r(n),t.d(n,{assets:function(){return _},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],p={id:"application-link-bool-exp",title:"application_link_bool_exp",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/application-link-bool-exp",id:"graphql/inputs/application-link-bool-exp",title:"application_link_bool_exp",description:"Boolean expression to filter rows from the table \"application_link\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/application-link-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-bool-exp",permalink:"/next/graphql/inputs/application-link-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"application-link-bool-exp",title:"application_link_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_aggregate_order_by",permalink:"/next/graphql/inputs/application-link-aggregate-order-by"},next:{title:"application_link_max_order_by",permalink:"/next/graphql/inputs/application-link-max-order-by"}},_={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[application_link_bool_exp!]</code>)",id:"_and-application_link_bool_exp",level:4},{value:"<code>_not</code> (<code>application_link_bool_exp</code>)",id:"_not-application_link_bool_exp",level:4},{value:"<code>_or</code> (<code>[application_link_bool_exp!]</code>)",id:"_or-application_link_bool_exp",level:4},{value:"<code>application</code> (<code>String_comparison_exp</code>)",id:"application-string_comparison_exp",level:4},{value:"<code>application_link_oracle_requests</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"application_link_oracle_requests-application_link_oracle_request_bool_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>profile</code> (<code>profile_bool_exp</code>)",id:"profile-profile_bool_exp",level:4},{value:"<code>result</code> (<code>jsonb_comparison_exp</code>)",id:"result-jsonb_comparison_exp",level:4},{value:"<code>state</code> (<code>String_comparison_exp</code>)",id:"state-string_comparison_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4},{value:"<code>username</code> (<code>String_comparison_exp</code>)",id:"username-string_comparison_exp",level:4}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to filter rows from the table \"application_link\". All fields are combined with a logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_bool_exp {\n  _and: [application_link_bool_exp!]\n  _not: application_link_bool_exp\n  _or: [application_link_bool_exp!]\n  application: String_comparison_exp\n  application_link_oracle_requests: application_link_oracle_request_bool_exp\n  creation_time: timestamp_comparison_exp\n  profile: profile_bool_exp\n  result: jsonb_comparison_exp\n  state: String_comparison_exp\n  user_address: String_comparison_exp\n  username: String_comparison_exp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_and-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_bool_exp!]")),")"),(0,i.kt)("h4",{id:"_not-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,i.kt)("h4",{id:"_or-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_bool_exp!]")),")"),(0,i.kt)("h4",{id:"application-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"application_link_oracle_requests-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,i.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,i.kt)("h4",{id:"profile-profile_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,i.kt)("h4",{id:"result-jsonb_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,i.kt)("h4",{id:"state-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"user_address-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"username-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}m.isMDXComponent=!0}}]);