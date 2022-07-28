"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[70776],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=r.createContext({}),i=function(e){var t=r.useContext(_),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(_.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,_=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),l=o,v=c["".concat(_,".").concat(l)]||c[l]||m[l]||a;return n?r.createElement(v,d(d({ref:t},s),{},{components:n})):r.createElement(v,d({ref:t},s))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=c;var p={};for(var _ in t)hasOwnProperty.call(t,_)&&(p[_]=t[_]);p.originalType=e,p.mdxType="string"==typeof e?e:o,d[1]=p;for(var i=2;i<a;i++)d[i]=n[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return _},default:function(){return l},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),d=["components"],p={id:"post-mention-aggregate-order-by",title:"post_mention_aggregate_order_by",hide_table_of_contents:!1},_=void 0,i={unversionedId:"graphql/inputs/post-mention-aggregate-order-by",id:"graphql/inputs/post-mention-aggregate-order-by",title:"post_mention_aggregate_order_by",description:'order by aggregate values of table "post_mention"',source:"@site/docs/07-graphql/inputs/post-mention-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-aggregate-order-by",permalink:"/next/graphql/inputs/post-mention-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-mention-aggregate-order-by",title:"post_mention_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_max_order_by",permalink:"/next/graphql/inputs/post-max-order-by"},next:{title:"post_mention_avg_order_by",permalink:"/next/graphql/inputs/post-mention-avg-order-by"}},s={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_mention_avg_order_by</code>)",id:"avg-post_mention_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_mention_max_order_by</code>)",id:"max-post_mention_max_order_by",level:4},{value:"<code>min</code> (<code>post_mention_min_order_by</code>)",id:"min-post_mention_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_mention_stddev_order_by</code>)",id:"stddev-post_mention_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_mention_stddev_pop_order_by</code>)",id:"stddev_pop-post_mention_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_mention_stddev_samp_order_by</code>)",id:"stddev_samp-post_mention_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_mention_sum_order_by</code>)",id:"sum-post_mention_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_mention_var_pop_order_by</code>)",id:"var_pop-post_mention_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_mention_var_samp_order_by</code>)",id:"var_samp-post_mention_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_mention_variance_order_by</code>)",id:"variance-post_mention_variance_order_by",level:4}],c={toc:m};function l(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by aggregate values of table "post_mention"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_aggregate_order_by {\n  avg: post_mention_avg_order_by\n  count: order_by\n  max: post_mention_max_order_by\n  min: post_mention_min_order_by\n  stddev: post_mention_stddev_order_by\n  stddev_pop: post_mention_stddev_pop_order_by\n  stddev_samp: post_mention_stddev_samp_order_by\n  sum: post_mention_sum_order_by\n  var_pop: post_mention_var_pop_order_by\n  var_samp: post_mention_var_samp_order_by\n  variance: post_mention_variance_order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"avg-post_mention_avg_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-avg-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_avg_order_by")),")"),(0,a.kt)("h4",{id:"count-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"max-post_mention_max_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-max-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_max_order_by")),")"),(0,a.kt)("h4",{id:"min-post_mention_min_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-min-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_min_order_by")),")"),(0,a.kt)("h4",{id:"stddev-post_mention_stddev_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-stddev-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_order_by")),")"),(0,a.kt)("h4",{id:"stddev_pop-post_mention_stddev_pop_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-stddev-pop-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_pop_order_by")),")"),(0,a.kt)("h4",{id:"stddev_samp-post_mention_stddev_samp_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-stddev-samp-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_samp_order_by")),")"),(0,a.kt)("h4",{id:"sum-post_mention_sum_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-sum-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_sum_order_by")),")"),(0,a.kt)("h4",{id:"var_pop-post_mention_var_pop_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-var-pop-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_var_pop_order_by")),")"),(0,a.kt)("h4",{id:"var_samp-post_mention_var_samp_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-var-samp-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_var_samp_order_by")),")"),(0,a.kt)("h4",{id:"variance-post_mention_variance_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-variance-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_variance_order_by")),")"))}l.isMDXComponent=!0}}]);