"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35110],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?t.createElement(g,o(o({ref:n},d),{},{components:r})):t.createElement(g,o({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},62119:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"application-link-aggregate-order-by",title:"application_link_aggregate_order_by",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/application-link-aggregate-order-by",id:"version-4.1.0/graphql/inputs/application-link-aggregate-order-by",title:"application_link_aggregate_order_by",description:'order by aggregate values of table "application_link"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-aggregate-order-by",permalink:"/graphql/inputs/application-link-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"application-link-aggregate-order-by",title:"application_link_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Overview",permalink:"/graphql/overview"},next:{title:"application_link_bool_exp",permalink:"/graphql/inputs/application-link-bool-exp"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>application_link_max_order_by</code>)",id:"max-application_link_max_order_by",level:4},{value:"<code>min</code> (<code>application_link_min_order_by</code>)",id:"min-application_link_min_order_by",level:4}],s={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'order by aggregate values of table "application_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_aggregate_order_by {\n  count: order_by\n  max: application_link_max_order_by\n  min: application_link_min_order_by\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"count-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"max-application_link_max_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-max-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_max_order_by")),")"),(0,i.kt)("h4",{id:"min-application_link_min_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-min-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_min_order_by")),")"))}m.isMDXComponent=!0}}]);