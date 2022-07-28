"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49858],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return h}});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var _=a.createContext({}),c=function(e){var n=a.useContext(_),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=c(e.components);return a.createElement(_.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,_=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=c(r),h=t,m=s["".concat(_,".").concat(h)]||s[h]||p[h]||i;return r?a.createElement(m,o(o({ref:n},l),{},{components:r})):a.createElement(m,o({ref:n},l))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=s;var d={};for(var _ in n)hasOwnProperty.call(n,_)&&(d[_]=n[_]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3693:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return _},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var a=r(87462),t=r(63366),i=(r(67294),r(3905)),o=["components"],d={id:"chain-link-aggregate-order-by",title:"chain_link_aggregate_order_by",hide_table_of_contents:!1},_=void 0,c={unversionedId:"graphql/inputs/chain-link-aggregate-order-by",id:"version-4.1.0/graphql/inputs/chain-link-aggregate-order-by",title:"chain_link_aggregate_order_by",description:'order by aggregate values of table "chain_link"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/chain-link-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-aggregate-order-by",permalink:"/4.1.0/graphql/inputs/chain-link-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/chain-link-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"chain-link-aggregate-order-by",title:"chain_link_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Boolean_comparison_exp",permalink:"/4.1.0/graphql/inputs/boolean-comparison-exp"},next:{title:"chain_link_avg_order_by",permalink:"/4.1.0/graphql/inputs/chain-link-avg-order-by"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>chain_link_avg_order_by</code>)",id:"avg-chain_link_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>chain_link_max_order_by</code>)",id:"max-chain_link_max_order_by",level:4},{value:"<code>min</code> (<code>chain_link_min_order_by</code>)",id:"min-chain_link_min_order_by",level:4},{value:"<code>stddev</code> (<code>chain_link_stddev_order_by</code>)",id:"stddev-chain_link_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>chain_link_stddev_pop_order_by</code>)",id:"stddev_pop-chain_link_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>chain_link_stddev_samp_order_by</code>)",id:"stddev_samp-chain_link_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>chain_link_sum_order_by</code>)",id:"sum-chain_link_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>chain_link_var_pop_order_by</code>)",id:"var_pop-chain_link_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>chain_link_var_samp_order_by</code>)",id:"var_samp-chain_link_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>chain_link_variance_order_by</code>)",id:"variance-chain_link_variance_order_by",level:4}],s={toc:p};function h(e){var n=e.components,r=(0,t.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'order by aggregate values of table "chain_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_aggregate_order_by {\n  avg: chain_link_avg_order_by\n  count: order_by\n  max: chain_link_max_order_by\n  min: chain_link_min_order_by\n  stddev: chain_link_stddev_order_by\n  stddev_pop: chain_link_stddev_pop_order_by\n  stddev_samp: chain_link_stddev_samp_order_by\n  sum: chain_link_sum_order_by\n  var_pop: chain_link_var_pop_order_by\n  var_samp: chain_link_var_samp_order_by\n  variance: chain_link_variance_order_by\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"avg-chain_link_avg_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-avg-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_avg_order_by")),")"),(0,i.kt)("h4",{id:"count-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"max-chain_link_max_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-max-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_max_order_by")),")"),(0,i.kt)("h4",{id:"min-chain_link_min_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-min-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_min_order_by")),")"),(0,i.kt)("h4",{id:"stddev-chain_link_stddev_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-stddev-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_order_by")),")"),(0,i.kt)("h4",{id:"stddev_pop-chain_link_stddev_pop_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-stddev-pop-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_pop_order_by")),")"),(0,i.kt)("h4",{id:"stddev_samp-chain_link_stddev_samp_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-stddev-samp-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_samp_order_by")),")"),(0,i.kt)("h4",{id:"sum-chain_link_sum_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-sum-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_sum_order_by")),")"),(0,i.kt)("h4",{id:"var_pop-chain_link_var_pop_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-var-pop-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_var_pop_order_by")),")"),(0,i.kt)("h4",{id:"var_samp-chain_link_var_samp_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-var-samp-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_var_samp_order_by")),")"),(0,i.kt)("h4",{id:"variance-chain_link_variance_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-variance-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_variance_order_by")),")"))}h.isMDXComponent=!0}}]);