"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[92236],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return b}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),_=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=_(e.components);return a.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=_(t),b=n,g=u["".concat(i,".").concat(b)]||u[b]||p[b]||s;return t?a.createElement(g,o(o({ref:r},c),{},{components:t})):a.createElement(g,o({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=u;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var _=2;_<s;_++)o[_]=t[_];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94383:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return d},metadata:function(){return _},toc:function(){return p}});var a=t(87462),n=t(63366),s=(t(67294),t(3905)),o=["components"],d={id:"subspace-registered-reaction-aggregate-order-by",title:"subspace_registered_reaction_aggregate_order_by",hide_table_of_contents:!1},i=void 0,_={unversionedId:"graphql/inputs/subspace-registered-reaction-aggregate-order-by",id:"graphql/inputs/subspace-registered-reaction-aggregate-order-by",title:"subspace_registered_reaction_aggregate_order_by",description:'order by aggregate values of table "subspaceregisteredreaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-registered-reaction-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-registered-reaction-aggregate-order-by",title:"subspace_registered_reaction_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_order_by",permalink:"/next/graphql/inputs/subspace-order-by"},next:{title:"subspace_registered_reaction_avg_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-avg-order-by"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_registered_reaction_avg_order_by</code>)",id:"avg-subspace_registered_reaction_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_registered_reaction_max_order_by</code>)",id:"max-subspace_registered_reaction_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_registered_reaction_min_order_by</code>)",id:"min-subspace_registered_reaction_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_registered_reaction_stddev_order_by</code>)",id:"stddev-subspace_registered_reaction_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_registered_reaction_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_registered_reaction_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_registered_reaction_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_registered_reaction_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_registered_reaction_sum_order_by</code>)",id:"sum-subspace_registered_reaction_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_registered_reaction_var_pop_order_by</code>)",id:"var_pop-subspace_registered_reaction_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_registered_reaction_var_samp_order_by</code>)",id:"var_samp-subspace_registered_reaction_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_registered_reaction_variance_order_by</code>)",id:"variance-subspace_registered_reaction_variance_order_by",level:4}],u={toc:p};function b(e){var r=e.components,t=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'order by aggregate values of table "subspace_registered_reaction"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_aggregate_order_by {\n  avg: subspace_registered_reaction_avg_order_by\n  count: order_by\n  max: subspace_registered_reaction_max_order_by\n  min: subspace_registered_reaction_min_order_by\n  stddev: subspace_registered_reaction_stddev_order_by\n  stddev_pop: subspace_registered_reaction_stddev_pop_order_by\n  stddev_samp: subspace_registered_reaction_stddev_samp_order_by\n  sum: subspace_registered_reaction_sum_order_by\n  var_pop: subspace_registered_reaction_var_pop_order_by\n  var_samp: subspace_registered_reaction_var_samp_order_by\n  variance: subspace_registered_reaction_variance_order_by\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"avg-subspace_registered_reaction_avg_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-avg-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_avg_order_by")),")"),(0,s.kt)("h4",{id:"count-order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,s.kt)("h4",{id:"max-subspace_registered_reaction_max_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-max-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_max_order_by")),")"),(0,s.kt)("h4",{id:"min-subspace_registered_reaction_min_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-min-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_min_order_by")),")"),(0,s.kt)("h4",{id:"stddev-subspace_registered_reaction_stddev_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-stddev-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_stddev_order_by")),")"),(0,s.kt)("h4",{id:"stddev_pop-subspace_registered_reaction_stddev_pop_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-stddev-pop-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_stddev_pop_order_by")),")"),(0,s.kt)("h4",{id:"stddev_samp-subspace_registered_reaction_stddev_samp_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-stddev-samp-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_stddev_samp_order_by")),")"),(0,s.kt)("h4",{id:"sum-subspace_registered_reaction_sum_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-sum-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_sum_order_by")),")"),(0,s.kt)("h4",{id:"var_pop-subspace_registered_reaction_var_pop_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-var-pop-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_var_pop_order_by")),")"),(0,s.kt)("h4",{id:"var_samp-subspace_registered_reaction_var_samp_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-var-samp-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_var_samp_order_by")),")"),(0,s.kt)("h4",{id:"variance-subspace_registered_reaction_variance_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-variance-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_variance_order_by")),")"))}b.isMDXComponent=!0}}]);