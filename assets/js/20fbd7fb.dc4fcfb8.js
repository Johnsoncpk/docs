"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9122],{3905:function(e,a,t){t.d(a,{Zo:function(){return h},kt:function(){return c}});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),_=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},h=function(e){var a=_(e.components);return r.createElement(p.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),g=_(t),c=o,m=g["".concat(p,".").concat(c)]||g[c]||i[c]||n;return t?r.createElement(m,s(s({ref:a},h),{},{components:t})):r.createElement(m,s({ref:a},h))}));function c(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=g;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,s[1]=d;for(var _=2;_<n;_++)s[_]=t[_];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46546:function(e,a,t){t.r(a),t.d(a,{assets:function(){return h},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return _},toc:function(){return i}});var r=t(87462),o=t(63366),n=(t(67294),t(3905)),s=["components"],d={id:"post-hashtag-aggregate-order-by",title:"post_hashtag_aggregate_order_by",hide_table_of_contents:!1},p=void 0,_={unversionedId:"graphql/inputs/post-hashtag-aggregate-order-by",id:"version-4.1.0/graphql/inputs/post-hashtag-aggregate-order-by",title:"post_hashtag_aggregate_order_by",description:'order by aggregate values of table "post_hashtag"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-hashtag-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-aggregate-order-by",permalink:"/graphql/inputs/post-hashtag-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-hashtag-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"post-hashtag-aggregate-order-by",title:"post_hashtag_aggregate_order_by",hide_table_of_contents:!1}},h={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_hashtag_avg_order_by</code>)",id:"avg-post_hashtag_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_hashtag_max_order_by</code>)",id:"max-post_hashtag_max_order_by",level:4},{value:"<code>min</code> (<code>post_hashtag_min_order_by</code>)",id:"min-post_hashtag_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_hashtag_stddev_order_by</code>)",id:"stddev-post_hashtag_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_hashtag_stddev_pop_order_by</code>)",id:"stddev_pop-post_hashtag_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_hashtag_stddev_samp_order_by</code>)",id:"stddev_samp-post_hashtag_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_hashtag_sum_order_by</code>)",id:"sum-post_hashtag_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_hashtag_var_pop_order_by</code>)",id:"var_pop-post_hashtag_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_hashtag_var_samp_order_by</code>)",id:"var_samp-post_hashtag_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_hashtag_variance_order_by</code>)",id:"variance-post_hashtag_variance_order_by",level:4}],g={toc:i};function c(e){var a=e.components,t=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "post_hashtag"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_aggregate_order_by {\n  avg: post_hashtag_avg_order_by\n  count: order_by\n  max: post_hashtag_max_order_by\n  min: post_hashtag_min_order_by\n  stddev: post_hashtag_stddev_order_by\n  stddev_pop: post_hashtag_stddev_pop_order_by\n  stddev_samp: post_hashtag_stddev_samp_order_by\n  sum: post_hashtag_sum_order_by\n  var_pop: post_hashtag_var_pop_order_by\n  var_samp: post_hashtag_var_samp_order_by\n  variance: post_hashtag_variance_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-post_hashtag_avg_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-avg-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_avg_order_by")),")"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-post_hashtag_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_max_order_by")),")"),(0,n.kt)("h4",{id:"min-post_hashtag_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_min_order_by")),")"),(0,n.kt)("h4",{id:"stddev-post_hashtag_stddev_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-stddev-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_stddev_order_by")),")"),(0,n.kt)("h4",{id:"stddev_pop-post_hashtag_stddev_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-stddev-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_stddev_pop_order_by")),")"),(0,n.kt)("h4",{id:"stddev_samp-post_hashtag_stddev_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-stddev-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_stddev_samp_order_by")),")"),(0,n.kt)("h4",{id:"sum-post_hashtag_sum_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-sum-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_sum_order_by")),")"),(0,n.kt)("h4",{id:"var_pop-post_hashtag_var_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-var-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_var_pop_order_by")),")"),(0,n.kt)("h4",{id:"var_samp-post_hashtag_var_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-var-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_var_samp_order_by")),")"),(0,n.kt)("h4",{id:"variance-post_hashtag_variance_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-variance-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_variance_order_by")),")"))}c.isMDXComponent=!0}}]);