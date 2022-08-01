"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||h[k]||o;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"post",title:"post",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/post",id:"graphql/objects/post",title:"post",description:'columns and relationships of "post"',source:"@site/docs/07-graphql/objects/post.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post",permalink:"/next/graphql/objects/post",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post.mdx",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"post",title:"post",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_variance_fields",permalink:"/next/graphql/objects/post-variance-fields"},next:{title:"posts_params",permalink:"/next/graphql/objects/posts-params"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>attachments</code> (<code>[post_attachment!]!</code>)",id:"attachments-post_attachment",level:4},{value:"<code>attachments_aggregate</code> (<code>post_attachment_aggregate!</code>)",id:"attachments_aggregate-post_attachment_aggregate",level:4},{value:"<code>author</code> (<code>profile</code>)",id:"author-profile",level:4},{value:"<code>author_address</code> (<code>String!</code>)",id:"author_address-string",level:4},{value:"<code>conversation</code> (<code>post</code>)",id:"conversation-post",level:4},{value:"<code>creation_date</code> (<code>timestamp!</code>)",id:"creation_date-timestamp",level:4},{value:"<code>external_id</code> (<code>String</code>)",id:"external_id-string",level:4},{value:"<code>hashtags</code> (<code>[post_hashtag!]!</code>)",id:"hashtags-post_hashtag",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>last_edited_date</code> (<code>timestamp</code>)",id:"last_edited_date-timestamp",level:4},{value:"<code>mentions</code> (<code>[post_mention!]!</code>)",id:"mentions-post_mention",level:4},{value:"<code>posts</code> (<code>[post!]!</code>)",id:"posts-post",level:4},{value:"<code>posts_aggregate</code> (<code>post_aggregate!</code>)",id:"posts_aggregate-post_aggregate",level:4},{value:"<code>reactions</code> (<code>[reaction!]!</code>)",id:"reactions-reaction",level:4},{value:"<code>reactions_aggregate</code> (<code>reaction_aggregate!</code>)",id:"reactions_aggregate-reaction_aggregate",level:4},{value:"<code>references</code> (<code>[post_reference!]!</code>)",id:"references-post_reference",level:4},{value:"<code>reply_settings</code> (<code>String!</code>)",id:"reply_settings-string",level:4},{value:"<code>section</code> (<code>subspace_section!</code>)",id:"section-subspace_section",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4},{value:"<code>urls</code> (<code>[post_url!]!</code>)",id:"urls-post_url",level:4}],m={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'columns and relationships of "post"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type post {\n  attachments(\n  distinct_on: [post_attachment_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_attachment_order_by!]\n  where: post_attachment_bool_exp\n): [post_attachment!]!\n  attachments_aggregate(\n  distinct_on: [post_attachment_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_attachment_order_by!]\n  where: post_attachment_bool_exp\n): post_attachment_aggregate!\n  author: profile\n  author_address: String!\n  conversation: post\n  creation_date: timestamp!\n  external_id: String\n  hashtags(\n  distinct_on: [post_hashtag_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_hashtag_order_by!]\n  where: post_hashtag_bool_exp\n): [post_hashtag!]!\n  id: bigint!\n  last_edited_date: timestamp\n  mentions(\n  distinct_on: [post_mention_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_mention_order_by!]\n  where: post_mention_bool_exp\n): [post_mention!]!\n  posts(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): [post!]!\n  posts_aggregate(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): post_aggregate!\n  reactions(\n  distinct_on: [reaction_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [reaction_order_by!]\n  where: reaction_bool_exp\n): [reaction!]!\n  reactions_aggregate(\n  distinct_on: [reaction_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [reaction_order_by!]\n  where: reaction_bool_exp\n): reaction_aggregate!\n  references(\n  distinct_on: [post_reference_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_reference_order_by!]\n  where: post_reference_bool_exp\n): [post_reference!]!\n  reply_settings: String!\n  section: subspace_section!\n  subspace: subspace!\n  subspace_id: bigint!\n  text: String\n  urls(\n  distinct_on: [post_url_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_url_order_by!]\n  where: post_url_bool_exp\n): [post_url!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"attachments-post_attachment"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"attachments"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_attachment_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-attachment-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_attachment_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-attachment-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_attachment_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-attachment-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"attachments_aggregate-post_attachment_aggregate"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"attachments_aggregate"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-attachment-aggregate"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_aggregate!")),")"),(0,r.kt)("p",null,"An aggregate relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_attachment_select_column-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-attachment-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_attachment_order_by-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-attachment-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_attachment_bool_exp-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-attachment-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"author-profile"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"author"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,r.kt)("inlineCode",{parentName:"a"},"profile")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"author_address-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"conversation-post"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"conversation"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post"},(0,r.kt)("inlineCode",{parentName:"a"},"post")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"creation_date-timestamp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,r.kt)("h4",{id:"external_id-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"hashtags-post_hashtag"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"hashtags"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-hashtag"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_hashtag!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_hashtag_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-hashtag-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_hashtag_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_hashtag_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-hashtag-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_hashtag_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_hashtag_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-hashtag-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,r.kt)("h4",{id:"last_edited_date-timestamp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,r.kt)("h4",{id:"mentions-post_mention"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"mentions"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-mention"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_mention_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-mention-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_mention_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-mention-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_mention_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-mention-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"posts-post"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post"},(0,r.kt)("inlineCode",{parentName:"a"},"[post!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"posts_aggregate-post_aggregate"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"posts_aggregate"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-aggregate"},(0,r.kt)("inlineCode",{parentName:"a"},"post_aggregate!")),")"),(0,r.kt)("p",null,"An aggregate relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_select_column-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_order_by-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_bool_exp-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"reactions-reaction"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"reactions"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction"},(0,r.kt)("inlineCode",{parentName:"a"},"[reaction!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-reaction_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/reaction-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[reaction_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-6"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-6"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-reaction_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/reaction-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[reaction_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-reaction_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/reaction-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"reactions_aggregate-reaction_aggregate"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"reactions_aggregate"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-aggregate"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_aggregate!")),")"),(0,r.kt)("p",null,"An aggregate relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-reaction_select_column-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/reaction-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[reaction_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-7"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-7"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-reaction_order_by-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/reaction-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[reaction_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-reaction_bool_exp-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/reaction-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"references-post_reference"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"references"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_reference!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_reference_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-reference-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_reference_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-8"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-8"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_reference_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-reference-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_reference_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_reference_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-reference-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_reference_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"reply_settings-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"section-subspace_section"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_section!")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"subspace-subspace"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"subspace_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,r.kt)("h4",{id:"text-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"urls-post_url"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"urls"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/post-url"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_url!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-post_url_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/post-url-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_url_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int-9"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int-9"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-post_url_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-url-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_url_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-post_url_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/post-url-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_url_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"))}h.isMDXComponent=!0}}]);