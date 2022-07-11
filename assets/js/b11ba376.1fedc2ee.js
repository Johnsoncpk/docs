"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13241],{3905:function(e,r,o){o.d(r,{Zo:function(){return l},kt:function(){return d}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},l=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,b=u["".concat(i,".").concat(d)]||u[d]||_[d]||a;return o?t.createElement(b,p(p({ref:r},l),{},{components:o})):t.createElement(b,p({ref:r},l))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=o[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},92002:function(e,r,o){o.r(r),o.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return _}});var t=o(87462),n=o(63366),a=(o(67294),o(3905)),p=["components"],s={id:"subspace-report-reason-bool-exp",title:"subspace_report_reason_bool_exp",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/subspace-report-reason-bool-exp",id:"version-4.1.0/graphql/inputs/subspace-report-reason-bool-exp",title:"subspace_report_reason_bool_exp",description:"Boolean expression to filter rows from the table \"subspacereportreason\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-report-reason-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-report-reason-bool-exp",permalink:"/graphql/inputs/subspace-report-reason-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-report-reason-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-report-reason-bool-exp",title:"subspace_report_reason_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_avg_order_by",permalink:"/graphql/inputs/subspace-report-reason-avg-order-by"},next:{title:"subspace_report_reason_max_order_by",permalink:"/graphql/inputs/subspace-report-reason-max-order-by"}},l={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_report_reason_bool_exp!]</code>)",id:"_and-subspace_report_reason_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_report_reason_bool_exp</code>)",id:"_not-subspace_report_reason_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_report_reason_bool_exp!]</code>)",id:"_or-subspace_report_reason_bool_exp",level:4},{value:"<code>description</code> (<code>String_comparison_exp</code>)",id:"description-string_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4},{value:"<code>title</code> (<code>String_comparison_exp</code>)",id:"title-string_comparison_exp",level:4}],u={toc:_};function d(e){var r=e.components,o=(0,n.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_report_reason\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_report_reason_bool_exp {\n  _and: [subspace_report_reason_bool_exp!]\n  _not: subspace_report_reason_bool_exp\n  _or: [subspace_report_reason_bool_exp!]\n  description: String_comparison_exp\n  id: bigint_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n  title: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-subspace_report_reason_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-subspace_report_reason_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-subspace_report_reason_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_bool_exp!]")),")"),(0,a.kt)("h4",{id:"description-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,a.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"title-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"title"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}d.isMDXComponent=!0}}]);