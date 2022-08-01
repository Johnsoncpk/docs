"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[92236],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>u});var t=a(67294);function s(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function d(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?d(Object(a),!0).forEach((function(r){s(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,s=function(e,r){if(null==e)return{};var a,t,s={},d=Object.keys(e);for(t=0;t<d.length;t++)a=d[t],r.indexOf(a)>=0||(s[a]=e[a]);return s}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)a=d[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),_=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},c=function(e){var r=_(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var a=e.components,s=e.mdxType,d=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=_(a),u=s,g=b["".concat(i,".").concat(u)]||b[u]||p[u]||d;return a?t.createElement(g,n(n({ref:r},c),{},{components:a})):t.createElement(g,n({ref:r},c))}));function u(e,r){var a=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var d=a.length,n=new Array(d);n[0]=b;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var _=2;_<d;_++)n[_]=a[_];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},94383:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>_});var t=a(87462),s=(a(67294),a(3905));const d={id:"subspace-registered-reaction-aggregate-order-by",title:"subspace_registered_reaction_aggregate_order_by",hide_table_of_contents:!1},n=void 0,o={unversionedId:"graphql/inputs/subspace-registered-reaction-aggregate-order-by",id:"graphql/inputs/subspace-registered-reaction-aggregate-order-by",title:"subspace_registered_reaction_aggregate_order_by",description:'order by aggregate values of table "subspaceregisteredreaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-registered-reaction-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"subspace-registered-reaction-aggregate-order-by",title:"subspace_registered_reaction_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_order_by",permalink:"/next/graphql/inputs/subspace-order-by"},next:{title:"subspace_registered_reaction_avg_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-avg-order-by"}},i={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_registered_reaction_avg_order_by</code>)",id:"avg-subspace_registered_reaction_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_registered_reaction_max_order_by</code>)",id:"max-subspace_registered_reaction_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_registered_reaction_min_order_by</code>)",id:"min-subspace_registered_reaction_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_registered_reaction_stddev_order_by</code>)",id:"stddev-subspace_registered_reaction_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_registered_reaction_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_registered_reaction_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_registered_reaction_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_registered_reaction_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_registered_reaction_sum_order_by</code>)",id:"sum-subspace_registered_reaction_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_registered_reaction_var_pop_order_by</code>)",id:"var_pop-subspace_registered_reaction_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_registered_reaction_var_samp_order_by</code>)",id:"var_samp-subspace_registered_reaction_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_registered_reaction_variance_order_by</code>)",id:"variance-subspace_registered_reaction_variance_order_by",level:4}],c={toc:_};function p(e){let{components:r,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'order by aggregate values of table "subspace_registered_reaction"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_aggregate_order_by {\n  avg: subspace_registered_reaction_avg_order_by\n  count: order_by\n  max: subspace_registered_reaction_max_order_by\n  min: subspace_registered_reaction_min_order_by\n  stddev: subspace_registered_reaction_stddev_order_by\n  stddev_pop: subspace_registered_reaction_stddev_pop_order_by\n  stddev_samp: subspace_registered_reaction_stddev_samp_order_by\n  sum: subspace_registered_reaction_sum_order_by\n  var_pop: subspace_registered_reaction_var_pop_order_by\n  var_samp: subspace_registered_reaction_var_samp_order_by\n  variance: subspace_registered_reaction_variance_order_by\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"avg-subspace_registered_reaction_avg_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-avg-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_avg_order_by")),")"),(0,s.kt)("h4",{id:"count-order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,s.kt)("h4",{id:"max-subspace_registered_reaction_max_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-max-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_max_order_by")),")"),(0,s.kt)("h4",{id:"min-subspace_registered_reaction_min_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-min-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_min_order_by")),")"),(0,s.kt)("h4",{id:"stddev-subspace_registered_reaction_stddev_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-stddev-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_stddev_order_by")),")"),(0,s.kt)("h4",{id:"stddev_pop-subspace_registered_reaction_stddev_pop_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-stddev-pop-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_stddev_pop_order_by")),")"),(0,s.kt)("h4",{id:"stddev_samp-subspace_registered_reaction_stddev_samp_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-stddev-samp-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_stddev_samp_order_by")),")"),(0,s.kt)("h4",{id:"sum-subspace_registered_reaction_sum_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-sum-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_sum_order_by")),")"),(0,s.kt)("h4",{id:"var_pop-subspace_registered_reaction_var_pop_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-var-pop-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_var_pop_order_by")),")"),(0,s.kt)("h4",{id:"var_samp-subspace_registered_reaction_var_samp_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-var-samp-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_var_samp_order_by")),")"),(0,s.kt)("h4",{id:"variance-subspace_registered_reaction_variance_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-variance-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_variance_order_by")),")"))}p.isMDXComponent=!0}}]);