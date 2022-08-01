"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16293],{3905:(e,r,o)=>{o.d(r,{Zo:()=>m,kt:()=>_});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),i=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):n(n({},r),e)),o},m=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(o),_=a,u=d["".concat(l,".").concat(_)]||d[_]||c[_]||p;return o?t.createElement(u,n(n({ref:r},m),{},{components:o})):t.createElement(u,n({ref:r},m))}));function _(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=o.length,n=new Array(p);n[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var i=2;i<p;i++)n[i]=o[i];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},77502:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var t=o(87462),a=(o(67294),o(3905));const p={id:"reports-params-bool-exp",title:"reports_params_bool_exp",hide_table_of_contents:!1},n=void 0,s={unversionedId:"graphql/inputs/reports-params-bool-exp",id:"version-4.1.0/graphql/inputs/reports-params-bool-exp",title:"reports_params_bool_exp",description:"Boolean expression to filter rows from the table \"reports_params\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/reports-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reports-params-bool-exp",permalink:"/4.1.0/graphql/inputs/reports-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/reports-params-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"reports-params-bool-exp",title:"reports_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_variance_order_by",permalink:"/4.1.0/graphql/inputs/report-variance-order-by"},next:{title:"reports_params_order_by",permalink:"/4.1.0/graphql/inputs/reports-params-order-by"}},l={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[reports_params_bool_exp!]</code>)",id:"_and-reports_params_bool_exp",level:4},{value:"<code>_not</code> (<code>reports_params_bool_exp</code>)",id:"_not-reports_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[reports_params_bool_exp!]</code>)",id:"_or-reports_params_bool_exp",level:4},{value:"<code>params</code> (<code>jsonb_comparison_exp</code>)",id:"params-jsonb_comparison_exp",level:4}],m={toc:i};function c(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"reports_params\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input reports_params_bool_exp {\n  _and: [reports_params_bool_exp!]\n  _not: reports_params_bool_exp\n  _or: [reports_params_bool_exp!]\n  params: jsonb_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-reports_params_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[reports_params_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-reports_params_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"reports_params_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-reports_params_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[reports_params_bool_exp!]")),")"),(0,a.kt)("h4",{id:"params-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}c.isMDXComponent=!0}}]);