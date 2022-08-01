"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68135],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),f=a,u=c["".concat(i,".").concat(f)]||c[f]||_[f]||n;return t?o.createElement(u,s(s({ref:r},d),{},{components:t})):o.createElement(u,s({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=c;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<n;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20927:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>_,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const n={id:"dtag-transfer-requests-bool-exp",title:"dtag_transfer_requests_bool_exp",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/dtag-transfer-requests-bool-exp",id:"version-4.1.0/graphql/inputs/dtag-transfer-requests-bool-exp",title:"dtag_transfer_requests_bool_exp",description:"Boolean expression to filter rows from the table \"dtagtransferrequests\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/dtag-transfer-requests-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-bool-exp",permalink:"/4.1.0/graphql/inputs/dtag-transfer-requests-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/dtag-transfer-requests-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"dtag-transfer-requests-bool-exp",title:"dtag_transfer_requests_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_aggregate_order_by",permalink:"/4.1.0/graphql/inputs/dtag-transfer-requests-aggregate-order-by"},next:{title:"dtag_transfer_requests_max_order_by",permalink:"/4.1.0/graphql/inputs/dtag-transfer-requests-max-order-by"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[dtag_transfer_requests_bool_exp!]</code>)",id:"_and-dtag_transfer_requests_bool_exp",level:4},{value:"<code>_not</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"_not-dtag_transfer_requests_bool_exp",level:4},{value:"<code>_or</code> (<code>[dtag_transfer_requests_bool_exp!]</code>)",id:"_or-dtag_transfer_requests_bool_exp",level:4},{value:"<code>profile</code> (<code>profile_bool_exp</code>)",id:"profile-profile_bool_exp",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile_bool_exp</code>)",id:"profilebysenderaddress-profile_bool_exp",level:4},{value:"<code>receiver_address</code> (<code>String_comparison_exp</code>)",id:"receiver_address-string_comparison_exp",level:4},{value:"<code>sender_address</code> (<code>String_comparison_exp</code>)",id:"sender_address-string_comparison_exp",level:4}],d={toc:l};function _(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"dtag_transfer_requests\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_bool_exp {\n  _and: [dtag_transfer_requests_bool_exp!]\n  _not: dtag_transfer_requests_bool_exp\n  _or: [dtag_transfer_requests_bool_exp!]\n  profile: profile_bool_exp\n  profileBySenderAddress: profile_bool_exp\n  receiver_address: String_comparison_exp\n  sender_address: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_bool_exp!]")),")"),(0,a.kt)("h4",{id:"profile-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"profilebysenderaddress-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"receiver_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"sender_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}_.isMDXComponent=!0}}]);