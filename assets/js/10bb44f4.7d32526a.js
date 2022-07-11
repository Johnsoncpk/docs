"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8129],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _=a.createContext({}),i=function(e){var r=a.useContext(_),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(_.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,_=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=i(t),m=o,v=l["".concat(_,".").concat(m)]||l[m]||c[m]||n;return t?a.createElement(v,d(d({ref:r},s),{},{components:t})):a.createElement(v,d({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,d=new Array(n);d[0]=l;var p={};for(var _ in r)hasOwnProperty.call(r,_)&&(p[_]=r[_]);p.originalType=e,p.mdxType="string"==typeof e?e:o,d[1]=p;for(var i=2;i<n;i++)d[i]=t[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},19454:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return _},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var a=t(87462),o=t(63366),n=(t(67294),t(3905)),d=["components"],p={id:"report-aggregate-order-by",title:"report_aggregate_order_by",hide_table_of_contents:!1},_=void 0,i={unversionedId:"graphql/inputs/report-aggregate-order-by",id:"graphql/inputs/report-aggregate-order-by",title:"report_aggregate_order_by",description:'order by aggregate values of table "report"',source:"@site/docs/07-graphql/inputs/report-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-aggregate-order-by",permalink:"/next/graphql/inputs/report-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"report-aggregate-order-by",title:"report_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_variance_order_by",permalink:"/next/graphql/inputs/reaction-variance-order-by"},next:{title:"report_avg_order_by",permalink:"/next/graphql/inputs/report-avg-order-by"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>report_avg_order_by</code>)",id:"avg-report_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>report_max_order_by</code>)",id:"max-report_max_order_by",level:4},{value:"<code>min</code> (<code>report_min_order_by</code>)",id:"min-report_min_order_by",level:4},{value:"<code>stddev</code> (<code>report_stddev_order_by</code>)",id:"stddev-report_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>report_stddev_pop_order_by</code>)",id:"stddev_pop-report_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>report_stddev_samp_order_by</code>)",id:"stddev_samp-report_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>report_sum_order_by</code>)",id:"sum-report_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>report_var_pop_order_by</code>)",id:"var_pop-report_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>report_var_samp_order_by</code>)",id:"var_samp-report_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>report_variance_order_by</code>)",id:"variance-report_variance_order_by",level:4}],l={toc:c};function m(e){var r=e.components,t=(0,o.Z)(e,d);return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "report"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_aggregate_order_by {\n  avg: report_avg_order_by\n  count: order_by\n  max: report_max_order_by\n  min: report_min_order_by\n  stddev: report_stddev_order_by\n  stddev_pop: report_stddev_pop_order_by\n  stddev_samp: report_stddev_samp_order_by\n  sum: report_sum_order_by\n  var_pop: report_var_pop_order_by\n  var_samp: report_var_samp_order_by\n  variance: report_variance_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-report_avg_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-avg-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_avg_order_by")),")"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-report_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_max_order_by")),")"),(0,n.kt)("h4",{id:"min-report_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_min_order_by")),")"),(0,n.kt)("h4",{id:"stddev-report_stddev_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-stddev-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_stddev_order_by")),")"),(0,n.kt)("h4",{id:"stddev_pop-report_stddev_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-stddev-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_stddev_pop_order_by")),")"),(0,n.kt)("h4",{id:"stddev_samp-report_stddev_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-stddev-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_stddev_samp_order_by")),")"),(0,n.kt)("h4",{id:"sum-report_sum_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-sum-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_sum_order_by")),")"),(0,n.kt)("h4",{id:"var_pop-report_var_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-var-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_var_pop_order_by")),")"),(0,n.kt)("h4",{id:"var_samp-report_var_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-var-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_var_samp_order_by")),")"),(0,n.kt)("h4",{id:"variance-report_variance_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-variance-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_variance_order_by")),")"))}m.isMDXComponent=!0}}]);