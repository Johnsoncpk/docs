"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46660],{3905:function(e,r,a){a.d(r,{Zo:function(){return i},kt:function(){return b}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),p=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},i=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,l=u["".concat(d,".").concat(b)]||u[b]||_[b]||s;return a?t.createElement(l,o(o({ref:r},i),{},{components:a})):t.createElement(l,o({ref:r},i))}));function b(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<s;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94208:function(e,r,a){a.r(r),a.d(r,{assets:function(){return i},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return _}});var t=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],c={id:"subspace-section-aggregate-order-by",title:"subspace_section_aggregate_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/subspace-section-aggregate-order-by",id:"version-4.1.0/graphql/inputs/subspace-section-aggregate-order-by",title:"subspace_section_aggregate_order_by",description:'order by aggregate values of table "subspace_section"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-aggregate-order-by",permalink:"/graphql/inputs/subspace-section-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"subspace-section-aggregate-order-by",title:"subspace_section_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_variance_order_by",permalink:"/graphql/inputs/subspace-report-reason-variance-order-by"},next:{title:"subspace_section_avg_order_by",permalink:"/graphql/inputs/subspace-section-avg-order-by"}},i={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_section_avg_order_by</code>)",id:"avg-subspace_section_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_section_max_order_by</code>)",id:"max-subspace_section_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_section_min_order_by</code>)",id:"min-subspace_section_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_section_stddev_order_by</code>)",id:"stddev-subspace_section_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_section_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_section_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_section_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_section_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_section_sum_order_by</code>)",id:"sum-subspace_section_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_section_var_pop_order_by</code>)",id:"var_pop-subspace_section_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_section_var_samp_order_by</code>)",id:"var_samp-subspace_section_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_section_variance_order_by</code>)",id:"variance-subspace_section_variance_order_by",level:4}],u={toc:_};function b(e){var r=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'order by aggregate values of table "subspace_section"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_section_aggregate_order_by {\n  avg: subspace_section_avg_order_by\n  count: order_by\n  max: subspace_section_max_order_by\n  min: subspace_section_min_order_by\n  stddev: subspace_section_stddev_order_by\n  stddev_pop: subspace_section_stddev_pop_order_by\n  stddev_samp: subspace_section_stddev_samp_order_by\n  sum: subspace_section_sum_order_by\n  var_pop: subspace_section_var_pop_order_by\n  var_samp: subspace_section_var_samp_order_by\n  variance: subspace_section_variance_order_by\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"avg-subspace_section_avg_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-avg-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_avg_order_by")),")"),(0,s.kt)("h4",{id:"count-order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,s.kt)("h4",{id:"max-subspace_section_max_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-max-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_max_order_by")),")"),(0,s.kt)("h4",{id:"min-subspace_section_min_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-min-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_min_order_by")),")"),(0,s.kt)("h4",{id:"stddev-subspace_section_stddev_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-stddev-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_stddev_order_by")),")"),(0,s.kt)("h4",{id:"stddev_pop-subspace_section_stddev_pop_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-stddev-pop-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_stddev_pop_order_by")),")"),(0,s.kt)("h4",{id:"stddev_samp-subspace_section_stddev_samp_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-stddev-samp-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_stddev_samp_order_by")),")"),(0,s.kt)("h4",{id:"sum-subspace_section_sum_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-sum-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_sum_order_by")),")"),(0,s.kt)("h4",{id:"var_pop-subspace_section_var_pop_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-var-pop-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_var_pop_order_by")),")"),(0,s.kt)("h4",{id:"var_samp-subspace_section_var_samp_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-var-samp-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_var_samp_order_by")),")"),(0,s.kt)("h4",{id:"variance-subspace_section_variance_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-variance-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_variance_order_by")),")"))}b.isMDXComponent=!0}}]);