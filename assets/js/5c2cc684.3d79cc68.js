"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[18383],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,_=m["".concat(i,".").concat(f)]||m[f]||c[f]||o;return r?a.createElement(_,d(d({ref:t},s),{},{components:r})):a.createElement(_,d({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,d=new Array(o);d[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,d[1]=p;for(var l=2;l<o;l++)d[l]=r[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78733:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),d=["components"],p={id:"report-aggregate-fields",title:"report_aggregate_fields",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/report-aggregate-fields",id:"graphql/objects/report-aggregate-fields",title:"report_aggregate_fields",description:'aggregate fields of "report"',source:"@site/docs/07-graphql/objects/report-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report-aggregate-fields",permalink:"/next/graphql/objects/report-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/report-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"report-aggregate-fields",title:"report_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction",permalink:"/next/graphql/objects/reaction"},next:{title:"report_aggregate",permalink:"/next/graphql/objects/report-aggregate"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>report_avg_fields</code>)",id:"avg-report_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>report_max_fields</code>)",id:"max-report_max_fields",level:4},{value:"<code>min</code> (<code>report_min_fields</code>)",id:"min-report_min_fields",level:4},{value:"<code>stddev</code> (<code>report_stddev_fields</code>)",id:"stddev-report_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>report_stddev_pop_fields</code>)",id:"stddev_pop-report_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>report_stddev_samp_fields</code>)",id:"stddev_samp-report_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>report_sum_fields</code>)",id:"sum-report_sum_fields",level:4},{value:"<code>var_pop</code> (<code>report_var_pop_fields</code>)",id:"var_pop-report_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>report_var_samp_fields</code>)",id:"var_samp-report_var_samp_fields",level:4},{value:"<code>variance</code> (<code>report_variance_fields</code>)",id:"variance-report_variance_fields",level:4}],m={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'aggregate fields of "report"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type report_aggregate_fields {\n  avg: report_avg_fields\n  count(\n  columns: [report_select_column!]\n  distinct: Boolean\n): Int!\n  max: report_max_fields\n  min: report_min_fields\n  stddev: report_stddev_fields\n  stddev_pop: report_stddev_pop_fields\n  stddev_samp: report_stddev_samp_fields\n  sum: report_sum_fields\n  var_pop: report_var_pop_fields\n  var_samp: report_var_samp_fields\n  variance: report_variance_fields\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-report_avg_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-avg-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_avg_fields")),")"),(0,o.kt)("h4",{id:"count-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"columns-report_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/report-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_select_column!]")),")"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,o.kt)("h4",{id:"max-report_max_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-max-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_max_fields")),")"),(0,o.kt)("h4",{id:"min-report_min_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-min-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_min_fields")),")"),(0,o.kt)("h4",{id:"stddev-report_stddev_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-stddev-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_stddev_fields")),")"),(0,o.kt)("h4",{id:"stddev_pop-report_stddev_pop_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-stddev-pop-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_stddev_pop_fields")),")"),(0,o.kt)("h4",{id:"stddev_samp-report_stddev_samp_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-stddev-samp-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_stddev_samp_fields")),")"),(0,o.kt)("h4",{id:"sum-report_sum_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-sum-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_sum_fields")),")"),(0,o.kt)("h4",{id:"var_pop-report_var_pop_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-var-pop-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_var_pop_fields")),")"),(0,o.kt)("h4",{id:"var_samp-report_var_samp_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-var-samp-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_var_samp_fields")),")"),(0,o.kt)("h4",{id:"variance-report_variance_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-variance-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"report_variance_fields")),")"))}f.isMDXComponent=!0}}]);