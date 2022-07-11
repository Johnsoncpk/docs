"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[28785],{3905:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return b}});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var _=t.createContext({}),d=function(e){var r=t.useContext(_),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=d(e.components);return t.createElement(_.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,_=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(a),b=o,l=u["".concat(_,".").concat(b)]||u[b]||i[b]||n;return a?t.createElement(l,s(s({ref:r},c),{},{components:a})):t.createElement(l,s({ref:r},c))}));function b(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var p={};for(var _ in r)hasOwnProperty.call(r,_)&&(p[_]=r[_]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var d=2;d<n;d++)s[d]=a[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54002:function(e,r,a){a.r(r),a.d(r,{assets:function(){return c},contentTitle:function(){return _},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return i}});var t=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],p={id:"subspace-report-reason-aggregate-order-by",title:"subspace_report_reason_aggregate_order_by",hide_table_of_contents:!1},_=void 0,d={unversionedId:"graphql/inputs/subspace-report-reason-aggregate-order-by",id:"graphql/inputs/subspace-report-reason-aggregate-order-by",title:"subspace_report_reason_aggregate_order_by",description:'order by aggregate values of table "subspacereportreason"',source:"@site/docs/07-graphql/inputs/subspace-report-reason-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-report-reason-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-report-reason-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-report-reason-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-report-reason-aggregate-order-by",title:"subspace_report_reason_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_variance_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-variance-order-by"},next:{title:"subspace_report_reason_avg_order_by",permalink:"/next/graphql/inputs/subspace-report-reason-avg-order-by"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_report_reason_avg_order_by</code>)",id:"avg-subspace_report_reason_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_report_reason_max_order_by</code>)",id:"max-subspace_report_reason_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_report_reason_min_order_by</code>)",id:"min-subspace_report_reason_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_report_reason_stddev_order_by</code>)",id:"stddev-subspace_report_reason_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_report_reason_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_report_reason_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_report_reason_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_report_reason_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_report_reason_sum_order_by</code>)",id:"sum-subspace_report_reason_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_report_reason_var_pop_order_by</code>)",id:"var_pop-subspace_report_reason_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_report_reason_var_samp_order_by</code>)",id:"var_samp-subspace_report_reason_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_report_reason_variance_order_by</code>)",id:"variance-subspace_report_reason_variance_order_by",level:4}],u={toc:i};function b(e){var r=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "subspace_report_reason"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_report_reason_aggregate_order_by {\n  avg: subspace_report_reason_avg_order_by\n  count: order_by\n  max: subspace_report_reason_max_order_by\n  min: subspace_report_reason_min_order_by\n  stddev: subspace_report_reason_stddev_order_by\n  stddev_pop: subspace_report_reason_stddev_pop_order_by\n  stddev_samp: subspace_report_reason_stddev_samp_order_by\n  sum: subspace_report_reason_sum_order_by\n  var_pop: subspace_report_reason_var_pop_order_by\n  var_samp: subspace_report_reason_var_samp_order_by\n  variance: subspace_report_reason_variance_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-subspace_report_reason_avg_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-avg-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_avg_order_by")),")"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-subspace_report_reason_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_max_order_by")),")"),(0,n.kt)("h4",{id:"min-subspace_report_reason_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_min_order_by")),")"),(0,n.kt)("h4",{id:"stddev-subspace_report_reason_stddev_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-stddev-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_stddev_order_by")),")"),(0,n.kt)("h4",{id:"stddev_pop-subspace_report_reason_stddev_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-stddev-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_stddev_pop_order_by")),")"),(0,n.kt)("h4",{id:"stddev_samp-subspace_report_reason_stddev_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-stddev-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_stddev_samp_order_by")),")"),(0,n.kt)("h4",{id:"sum-subspace_report_reason_sum_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-sum-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_sum_order_by")),")"),(0,n.kt)("h4",{id:"var_pop-subspace_report_reason_var_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-var-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_var_pop_order_by")),")"),(0,n.kt)("h4",{id:"var_samp-subspace_report_reason_var_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-var-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_var_samp_order_by")),")"),(0,n.kt)("h4",{id:"variance-subspace_report_reason_variance_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-variance-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_variance_order_by")),")"))}b.isMDXComponent=!0}}]);