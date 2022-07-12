"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46472],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),_=p(t),u=a,m=_["".concat(c,".").concat(u)]||_[u]||s[u]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=_;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},66989:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"int-8-comparison-exp",title:"_int8_comparison_exp",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/inputs/int-8-comparison-exp",id:"version-4.1.0/graphql/inputs/int-8-comparison-exp",title:"_int8_comparison_exp",description:"Boolean expression to compare columns of type \"_int8\". All fields are combined with logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/int-8-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/int-8-comparison-exp",permalink:"/graphql/inputs/int-8-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/int-8-comparison-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"int-8-comparison-exp",title:"_int8_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_order_by",permalink:"/graphql/inputs/dtag-transfer-requests-order-by"},next:{title:"jsonb_comparison_exp",permalink:"/graphql/inputs/jsonb-comparison-exp"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>_int8</code>)",id:"_eq-_int8",level:4},{value:"<code>_gt</code> (<code>_int8</code>)",id:"_gt-_int8",level:4},{value:"<code>_gte</code> (<code>_int8</code>)",id:"_gte-_int8",level:4},{value:"<code>_in</code> (<code>[_int8!]</code>)",id:"_in-_int8",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>_int8</code>)",id:"_lt-_int8",level:4},{value:"<code>_lte</code> (<code>_int8</code>)",id:"_lte-_int8",level:4},{value:"<code>_neq</code> (<code>_int8</code>)",id:"_neq-_int8",level:4},{value:"<code>_nin</code> (<code>[_int8!]</code>)",id:"_nin-_int8",level:4}],_={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to compare columns of type \"_int8\". All fields are combined with logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input _int8_comparison_exp {\n  _eq: _int8\n  _gt: _int8\n  _gte: _int8\n  _in: [_int8!]\n  _is_null: Boolean\n  _lt: _int8\n  _lte: _int8\n  _neq: _int8\n  _nin: [_int8!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_eq-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_gt-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_gte-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_in-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"[_int8!]")),")"),(0,i.kt)("h4",{id:"_is_null-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"_lt-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_lte-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_neq-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_nin-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"[_int8!]")),")"))}u.isMDXComponent=!0}}]);