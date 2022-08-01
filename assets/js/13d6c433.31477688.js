"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48747],{3905:(e,r,o)=>{o.d(r,{Zo:()=>m,kt:()=>f});var a=o(67294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},p=Object.keys(e);for(a=0;a<p.length;a++)o=p[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)o=p[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),i=function(e){var r=a.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):n(n({},r),e)),o},m=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,p=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(o),f=t,_=d["".concat(s,".").concat(f)]||d[f]||c[f]||p;return o?a.createElement(_,n(n({ref:r},m),{},{components:o})):a.createElement(_,n({ref:r},m))}));function f(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var p=o.length,n=new Array(p);n[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,n[1]=l;for(var i=2;i<p;i++)n[i]=o[i];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92381:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var a=o(87462),t=(o(67294),o(3905));const p={id:"profiles-params-bool-exp",title:"profiles_params_bool_exp",hide_table_of_contents:!1},n=void 0,l={unversionedId:"graphql/inputs/profiles-params-bool-exp",id:"version-4.1.0/graphql/inputs/profiles-params-bool-exp",title:"profiles_params_bool_exp",description:"Boolean expression to filter rows from the table \"profiles_params\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/profiles-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profiles-params-bool-exp",permalink:"/4.1.0/graphql/inputs/profiles-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/profiles-params-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"profiles-params-bool-exp",title:"profiles_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship_order_by",permalink:"/4.1.0/graphql/inputs/profile-relationship-order-by"},next:{title:"profiles_params_order_by",permalink:"/4.1.0/graphql/inputs/profiles-params-order-by"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[profiles_params_bool_exp!]</code>)",id:"_and-profiles_params_bool_exp",level:4},{value:"<code>_not</code> (<code>profiles_params_bool_exp</code>)",id:"_not-profiles_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[profiles_params_bool_exp!]</code>)",id:"_or-profiles_params_bool_exp",level:4},{value:"<code>params</code> (<code>jsonb_comparison_exp</code>)",id:"params-jsonb_comparison_exp",level:4}],m={toc:i};function c(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"profiles_params\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input profiles_params_bool_exp {\n  _and: [profiles_params_bool_exp!]\n  _not: profiles_params_bool_exp\n  _or: [profiles_params_bool_exp!]\n  params: jsonb_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-profiles_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[profiles_params_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-profiles_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-profiles_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[profiles_params_bool_exp!]")),")"),(0,t.kt)("h4",{id:"params-jsonb_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}c.isMDXComponent=!0}}]);