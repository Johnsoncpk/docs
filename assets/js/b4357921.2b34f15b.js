"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95446],{3905:function(e,r,o){o.d(r,{Zo:function(){return s},kt:function(){return b}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function d(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),i=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):d(d({},r),e)),o},s=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(o),b=n,f=u["".concat(c,".").concat(b)]||u[b]||p[b]||a;return o?t.createElement(f,d(d({ref:r},s),{},{components:o})):t.createElement(f,d({ref:r},s))}));function b(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,d=new Array(a);d[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var i=2;i<a;i++)d[i]=o[i];return t.createElement.apply(null,d)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},55557:function(e,r,o){o.r(r),o.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var t=o(87462),n=o(63366),a=(o(67294),o(3905)),d=["components"],l={id:"user-block-order-by",title:"user_block_order_by",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/inputs/user-block-order-by",id:"version-4.1.0/graphql/inputs/user-block-order-by",title:"user_block_order_by",description:'Ordering options when selecting data from "user_block".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-order-by",permalink:"/graphql/inputs/user-block-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"user-block-order-by",title:"user_block_order_by",hide_table_of_contents:!1}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>blocked</code> (<code>profile_order_by</code>)",id:"blocked-profile_order_by",level:4},{value:"<code>blocked_user_address</code> (<code>order_by</code>)",id:"blocked_user_address-order_by",level:4},{value:"<code>blocker</code> (<code>profile_order_by</code>)",id:"blocker-profile_order_by",level:4},{value:"<code>blocker_address</code> (<code>order_by</code>)",id:"blocker_address-order_by",level:4},{value:"<code>reason</code> (<code>order_by</code>)",id:"reason-order_by",level:4},{value:"<code>subspace</code> (<code>order_by</code>)",id:"subspace-order_by",level:4}],u={toc:p};function b(e){var r=e.components,o=(0,n.Z)(e,d);return(0,a.kt)("wrapper",(0,t.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "user_block".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_order_by {\n  blocked: profile_order_by\n  blocked_user_address: order_by\n  blocker: profile_order_by\n  blocker_address: order_by\n  reason: order_by\n  subspace: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"blocked-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"blocked_user_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked_user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"blocker-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"blocker_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"reason-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);