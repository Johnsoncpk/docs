"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[91893],{3905:function(e,r,o){o.d(r,{Zo:function(){return c},kt:function(){return u}});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=t.createContext({}),_=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},c=function(e){var r=_(e.components);return t.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=_(o),u=a,m=d["".concat(i,".").concat(u)]||d[u]||l[u]||n;return o?t.createElement(m,p(p({ref:r},c),{},{components:o})):t.createElement(m,p({ref:r},c))}));function u(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var _=2;_<n;_++)p[_]=o[_];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},88876:function(e,r,o){o.r(r),o.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return _},toc:function(){return l}});var t=o(87462),a=o(63366),n=(o(67294),o(3905)),p=["components"],s={id:"subspace-bool-exp",title:"subspace_bool_exp",hide_table_of_contents:!1},i=void 0,_={unversionedId:"graphql/inputs/subspace-bool-exp",id:"graphql/inputs/subspace-bool-exp",title:"subspace_bool_exp",description:"Boolean expression to filter rows from the table \"subspace\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-bool-exp",permalink:"/next/graphql/inputs/subspace-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"subspace-bool-exp",title:"subspace_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"String_comparison_exp",permalink:"/next/graphql/inputs/string-comparison-exp"},next:{title:"subspace_free_text_params_bool_exp",permalink:"/next/graphql/inputs/subspace-free-text-params-bool-exp"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_bool_exp!]</code>)",id:"_and-subspace_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_bool_exp</code>)",id:"_not-subspace_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_bool_exp!]</code>)",id:"_or-subspace_bool_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>creator_address</code> (<code>String_comparison_exp</code>)",id:"creator_address-string_comparison_exp",level:4},{value:"<code>description</code> (<code>String_comparison_exp</code>)",id:"description-string_comparison_exp",level:4},{value:"<code>free_text_reactions_params</code> (<code>subspace_free_text_params_bool_exp</code>)",id:"free_text_reactions_params-subspace_free_text_params_bool_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>name</code> (<code>String_comparison_exp</code>)",id:"name-string_comparison_exp",level:4},{value:"<code>owner_address</code> (<code>String_comparison_exp</code>)",id:"owner_address-string_comparison_exp",level:4},{value:"<code>posts</code> (<code>post_bool_exp</code>)",id:"posts-post_bool_exp",level:4},{value:"<code>registered_reactions</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"registered_reactions-subspace_registered_reaction_bool_exp",level:4},{value:"<code>registered_reactions_params</code> (<code>subspace_registered_reaction_params_bool_exp</code>)",id:"registered_reactions_params-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>report_reasons</code> (<code>subspace_report_reason_bool_exp</code>)",id:"report_reasons-subspace_report_reason_bool_exp",level:4},{value:"<code>reports</code> (<code>report_bool_exp</code>)",id:"reports-report_bool_exp",level:4},{value:"<code>sections</code> (<code>subspace_section_bool_exp</code>)",id:"sections-subspace_section_bool_exp",level:4},{value:"<code>treasury_address</code> (<code>String_comparison_exp</code>)",id:"treasury_address-string_comparison_exp",level:4},{value:"<code>user_groups</code> (<code>subspace_user_group_bool_exp</code>)",id:"user_groups-subspace_user_group_bool_exp",level:4}],d={toc:l};function u(e){var r=e.components,o=(0,a.Z)(e,p);return(0,n.kt)("wrapper",(0,t.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"subspace\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_bool_exp {\n  _and: [subspace_bool_exp!]\n  _not: subspace_bool_exp\n  _or: [subspace_bool_exp!]\n  creation_time: timestamp_comparison_exp\n  creator_address: String_comparison_exp\n  description: String_comparison_exp\n  free_text_reactions_params: subspace_free_text_params_bool_exp\n  id: bigint_comparison_exp\n  name: String_comparison_exp\n  owner_address: String_comparison_exp\n  posts: post_bool_exp\n  registered_reactions: subspace_registered_reaction_bool_exp\n  registered_reactions_params: subspace_registered_reaction_params_bool_exp\n  report_reasons: subspace_report_reason_bool_exp\n  reports: report_bool_exp\n  sections: subspace_section_bool_exp\n  treasury_address: String_comparison_exp\n  user_groups: subspace_user_group_bool_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-subspace_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-subspace_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-subspace_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_bool_exp!]")),")"),(0,n.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,n.kt)("h4",{id:"creator_address-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,n.kt)("h4",{id:"description-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,n.kt)("h4",{id:"free_text_reactions_params-subspace_free_text_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"free_text_reactions_params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp")),")"),(0,n.kt)("h4",{id:"id-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"name-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,n.kt)("h4",{id:"owner_address-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"owner_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,n.kt)("h4",{id:"posts-post_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,n.kt)("h4",{id:"registered_reactions-subspace_registered_reaction_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"registered_reactions"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,n.kt)("h4",{id:"registered_reactions_params-subspace_registered_reaction_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"registered_reactions_params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_bool_exp")),")"),(0,n.kt)("h4",{id:"report_reasons-subspace_report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"report_reasons"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"),(0,n.kt)("h4",{id:"reports-report_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reports"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"),(0,n.kt)("h4",{id:"sections-subspace_section_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sections"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,n.kt)("h4",{id:"treasury_address-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"treasury_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,n.kt)("h4",{id:"user_groups-subspace_user_group_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))}u.isMDXComponent=!0}}]);