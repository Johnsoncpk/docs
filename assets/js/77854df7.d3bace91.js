"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79199],{3905:function(e,r,o){o.d(r,{Zo:function(){return c},kt:function(){return m}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),l=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},_=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),_=l(o),m=n,u=_["".concat(s,".").concat(m)]||_[m]||d[m]||a;return o?t.createElement(u,p(p({ref:r},c),{},{components:o})):t.createElement(u,p({ref:r},c))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=_;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=o[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}_.displayName="MDXCreateElement"},66190:function(e,r,o){o.r(r),o.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var t=o(87462),n=o(63366),a=(o(67294),o(3905)),p=["components"],i={id:"report-bool-exp",title:"report_bool_exp",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/inputs/report-bool-exp",id:"version-4.1.0/graphql/inputs/report-bool-exp",title:"report_bool_exp",description:"Boolean expression to filter rows from the table \"report\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/report-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-bool-exp",permalink:"/4.1.0/graphql/inputs/report-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/report-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"report-bool-exp",title:"report_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_avg_order_by",permalink:"/4.1.0/graphql/inputs/report-avg-order-by"},next:{title:"report_max_order_by",permalink:"/4.1.0/graphql/inputs/report-max-order-by"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[report_bool_exp!]</code>)",id:"_and-report_bool_exp",level:4},{value:"<code>_not</code> (<code>report_bool_exp</code>)",id:"_not-report_bool_exp",level:4},{value:"<code>_or</code> (<code>[report_bool_exp!]</code>)",id:"_or-report_bool_exp",level:4},{value:"<code>creation_date</code> (<code>timestamp_comparison_exp</code>)",id:"creation_date-timestamp_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>message</code> (<code>String_comparison_exp</code>)",id:"message-string_comparison_exp",level:4},{value:"<code>reasons</code> (<code>report_reason_bool_exp</code>)",id:"reasons-report_reason_bool_exp",level:4},{value:"<code>reporter_address</code> (<code>String_comparison_exp</code>)",id:"reporter_address-string_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4},{value:"<code>target</code> (<code>jsonb_comparison_exp</code>)",id:"target-jsonb_comparison_exp",level:4}],_={toc:d};function m(e){var r=e.components,o=(0,n.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},_,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"report\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_bool_exp {\n  _and: [report_bool_exp!]\n  _not: report_bool_exp\n  _or: [report_bool_exp!]\n  creation_date: timestamp_comparison_exp\n  id: bigint_comparison_exp\n  message: String_comparison_exp\n  reasons: report_reason_bool_exp\n  reporter_address: String_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n  target: jsonb_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-report_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[report_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-report_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-report_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[report_bool_exp!]")),")"),(0,a.kt)("h4",{id:"creation_date-timestamp_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"message-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"message"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"reasons-report_reason_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reasons"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-reason-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"report_reason_bool_exp")),")"),(0,a.kt)("h4",{id:"reporter_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reporter_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,a.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"target-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"target"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}m.isMDXComponent=!0}}]);