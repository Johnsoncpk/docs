"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93025],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(a),f=r,_=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return a?n.createElement(_,o(o({ref:t},s),{},{components:a})):n.createElement(_,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90550:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],d={id:"reaction-aggregate-fields",title:"reaction_aggregate_fields",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/objects/reaction-aggregate-fields",id:"graphql/objects/reaction-aggregate-fields",title:"reaction_aggregate_fields",description:'aggregate fields of "reaction"',source:"@site/docs/07-graphql/objects/reaction-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/reaction-aggregate-fields",permalink:"/next/graphql/objects/reaction-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/reaction-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"reaction-aggregate-fields",title:"reaction_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"query_root",permalink:"/next/graphql/objects/query-root"},next:{title:"reaction_aggregate",permalink:"/next/graphql/objects/reaction-aggregate"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>reaction_avg_fields</code>)",id:"avg-reaction_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>reaction_max_fields</code>)",id:"max-reaction_max_fields",level:4},{value:"<code>min</code> (<code>reaction_min_fields</code>)",id:"min-reaction_min_fields",level:4},{value:"<code>stddev</code> (<code>reaction_stddev_fields</code>)",id:"stddev-reaction_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>reaction_stddev_pop_fields</code>)",id:"stddev_pop-reaction_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>reaction_stddev_samp_fields</code>)",id:"stddev_samp-reaction_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>reaction_sum_fields</code>)",id:"sum-reaction_sum_fields",level:4},{value:"<code>var_pop</code> (<code>reaction_var_pop_fields</code>)",id:"var_pop-reaction_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>reaction_var_samp_fields</code>)",id:"var_samp-reaction_var_samp_fields",level:4},{value:"<code>variance</code> (<code>reaction_variance_fields</code>)",id:"variance-reaction_variance_fields",level:4}],m={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'aggregate fields of "reaction"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type reaction_aggregate_fields {\n  avg: reaction_avg_fields\n  count(\n  columns: [reaction_select_column!]\n  distinct: Boolean\n): Int!\n  max: reaction_max_fields\n  min: reaction_min_fields\n  stddev: reaction_stddev_fields\n  stddev_pop: reaction_stddev_pop_fields\n  stddev_samp: reaction_stddev_samp_fields\n  sum: reaction_sum_fields\n  var_pop: reaction_var_pop_fields\n  var_samp: reaction_var_samp_fields\n  variance: reaction_variance_fields\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"avg-reaction_avg_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-avg-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_avg_fields")),")"),(0,i.kt)("h4",{id:"count-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"columns-reaction_select_column"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/reaction-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[reaction_select_column!]")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("h4",{id:"max-reaction_max_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-max-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_max_fields")),")"),(0,i.kt)("h4",{id:"min-reaction_min_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-min-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_min_fields")),")"),(0,i.kt)("h4",{id:"stddev-reaction_stddev_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-stddev-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_stddev_fields")),")"),(0,i.kt)("h4",{id:"stddev_pop-reaction_stddev_pop_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-stddev-pop-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_stddev_pop_fields")),")"),(0,i.kt)("h4",{id:"stddev_samp-reaction_stddev_samp_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-stddev-samp-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_stddev_samp_fields")),")"),(0,i.kt)("h4",{id:"sum-reaction_sum_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-sum-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_sum_fields")),")"),(0,i.kt)("h4",{id:"var_pop-reaction_var_pop_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-var-pop-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_var_pop_fields")),")"),(0,i.kt)("h4",{id:"var_samp-reaction_var_samp_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-var-samp-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_var_samp_fields")),")"),(0,i.kt)("h4",{id:"variance-reaction_variance_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/reaction-variance-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"reaction_variance_fields")),")"))}f.isMDXComponent=!0}}]);