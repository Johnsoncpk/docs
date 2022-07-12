"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[62691],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),_=d(t),u=a,m=_["".concat(p,".").concat(u)]||_[u]||s[u]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=_;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},79036:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"application-link-order-by",title:"application_link_order_by",hide_table_of_contents:!1},p=void 0,d={unversionedId:"graphql/inputs/application-link-order-by",id:"version-4.1.0/graphql/inputs/application-link-order-by",title:"application_link_order_by",description:'Ordering options when selecting data from "application_link".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-order-by",permalink:"/graphql/inputs/application-link-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"application-link-order-by",title:"application_link_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_variance_order_by",permalink:"/graphql/inputs/application-link-oracle-request-variance-order-by"},next:{title:"bigint_comparison_exp",permalink:"/graphql/inputs/bigint-comparison-exp"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>application</code> (<code>order_by</code>)",id:"application-order_by",level:4},{value:"<code>application_link_oracle_requests_aggregate</code> (<code>application_link_oracle_request_aggregate_order_by</code>)",id:"application_link_oracle_requests_aggregate-application_link_oracle_request_aggregate_order_by",level:4},{value:"<code>creation_time</code> (<code>order_by</code>)",id:"creation_time-order_by",level:4},{value:"<code>profile</code> (<code>profile_order_by</code>)",id:"profile-profile_order_by",level:4},{value:"<code>result</code> (<code>order_by</code>)",id:"result-order_by",level:4},{value:"<code>state</code> (<code>order_by</code>)",id:"state-order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4},{value:"<code>username</code> (<code>order_by</code>)",id:"username-order_by",level:4}],_={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},_,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "application_link".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_order_by {\n  application: order_by\n  application_link_oracle_requests_aggregate: application_link_oracle_request_aggregate_order_by\n  creation_time: order_by\n  profile: profile_order_by\n  result: order_by\n  state: order_by\n  user_address: order_by\n  username: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"application-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"application_link_oracle_requests_aggregate-application_link_oracle_request_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_aggregate_order_by")),")"),(0,o.kt)("h4",{id:"creation_time-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"profile-profile_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,o.kt)("h4",{id:"result-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"state-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"username-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);