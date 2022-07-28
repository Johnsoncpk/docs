"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[58485],{3905:function(e,t,o){o.d(t,{Zo:function(){return _},kt:function(){return m}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)o=p[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)o=p[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},_=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,_=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||p;return o?a.createElement(h,r(r({ref:t},_),{},{components:o})):a.createElement(h,r({ref:t},_))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,r=new Array(p);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<p;l++)r[l]=o[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},24624:function(e,t,o){o.r(t),o.d(t,{assets:function(){return _},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=o(87462),n=o(63366),p=(o(67294),o(3905)),r=["components"],i={id:"post-bool-exp",title:"post_bool_exp",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/inputs/post-bool-exp",id:"graphql/inputs/post-bool-exp",title:"post_bool_exp",description:"Boolean expression to filter rows from the table \"post\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/post-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-bool-exp",permalink:"/next/graphql/inputs/post-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1659007645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-bool-exp",title:"post_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_avg_order_by",permalink:"/next/graphql/inputs/post-avg-order-by"},next:{title:"post_hashtag_aggregate_order_by",permalink:"/next/graphql/inputs/post-hashtag-aggregate-order-by"}},_={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_bool_exp!]</code>)",id:"_and-post_bool_exp",level:4},{value:"<code>_not</code> (<code>post_bool_exp</code>)",id:"_not-post_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_bool_exp!]</code>)",id:"_or-post_bool_exp",level:4},{value:"<code>attachments</code> (<code>post_attachment_bool_exp</code>)",id:"attachments-post_attachment_bool_exp",level:4},{value:"<code>author</code> (<code>profile_bool_exp</code>)",id:"author-profile_bool_exp",level:4},{value:"<code>author_address</code> (<code>String_comparison_exp</code>)",id:"author_address-string_comparison_exp",level:4},{value:"<code>conversation</code> (<code>post_bool_exp</code>)",id:"conversation-post_bool_exp",level:4},{value:"<code>creation_date</code> (<code>timestamp_comparison_exp</code>)",id:"creation_date-timestamp_comparison_exp",level:4},{value:"<code>external_id</code> (<code>String_comparison_exp</code>)",id:"external_id-string_comparison_exp",level:4},{value:"<code>hashtags</code> (<code>post_hashtag_bool_exp</code>)",id:"hashtags-post_hashtag_bool_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>last_edited_date</code> (<code>timestamp_comparison_exp</code>)",id:"last_edited_date-timestamp_comparison_exp",level:4},{value:"<code>mentions</code> (<code>post_mention_bool_exp</code>)",id:"mentions-post_mention_bool_exp",level:4},{value:"<code>posts</code> (<code>post_bool_exp</code>)",id:"posts-post_bool_exp",level:4},{value:"<code>reactions</code> (<code>reaction_bool_exp</code>)",id:"reactions-reaction_bool_exp",level:4},{value:"<code>references</code> (<code>post_reference_bool_exp</code>)",id:"references-post_reference_bool_exp",level:4},{value:"<code>reply_settings</code> (<code>String_comparison_exp</code>)",id:"reply_settings-string_comparison_exp",level:4},{value:"<code>section</code> (<code>subspace_section_bool_exp</code>)",id:"section-subspace_section_bool_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4},{value:"<code>text</code> (<code>String_comparison_exp</code>)",id:"text-string_comparison_exp",level:4},{value:"<code>urls</code> (<code>post_url_bool_exp</code>)",id:"urls-post_url_bool_exp",level:4}],d={toc:c};function m(e){var t=e.components,o=(0,n.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"post\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_bool_exp {\n  _and: [post_bool_exp!]\n  _not: post_bool_exp\n  _or: [post_bool_exp!]\n  attachments: post_attachment_bool_exp\n  author: profile_bool_exp\n  author_address: String_comparison_exp\n  conversation: post_bool_exp\n  creation_date: timestamp_comparison_exp\n  external_id: String_comparison_exp\n  hashtags: post_hashtag_bool_exp\n  id: bigint_comparison_exp\n  last_edited_date: timestamp_comparison_exp\n  mentions: post_mention_bool_exp\n  posts: post_bool_exp\n  reactions: reaction_bool_exp\n  references: post_reference_bool_exp\n  reply_settings: String_comparison_exp\n  section: subspace_section_bool_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n  text: String_comparison_exp\n  urls: post_url_bool_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[post_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[post_bool_exp!]")),")"),(0,p.kt)("h4",{id:"attachments-post_attachment_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"attachments"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,p.kt)("h4",{id:"author-profile_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"author"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,p.kt)("h4",{id:"author_address-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"conversation-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"conversation"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,p.kt)("h4",{id:"creation_date-timestamp_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,p.kt)("h4",{id:"external_id-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"hashtags-post_hashtag_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"hashtags"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp")),")"),(0,p.kt)("h4",{id:"id-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"last_edited_date-timestamp_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,p.kt)("h4",{id:"mentions-post_mention_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"mentions"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_mention_bool_exp")),")"),(0,p.kt)("h4",{id:"posts-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,p.kt)("h4",{id:"reactions-reaction_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"reactions"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"reaction_bool_exp")),")"),(0,p.kt)("h4",{id:"references-post_reference_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"references"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_reference_bool_exp")),")"),(0,p.kt)("h4",{id:"reply_settings-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"section-subspace_section_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,p.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,p.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"text-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"urls-post_url_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"urls"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-url-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_url_bool_exp")),")"))}m.isMDXComponent=!0}}]);