"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60201],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,v=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return a?r.createElement(v,s(s({ref:t},u),{},{components:a})):r.createElement(v,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},95757:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),s=["components"],o={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},l="Concepts",c={unversionedId:"developers/modules/reactions/concepts",id:"version-4.1.0/developers/modules/reactions/concepts",title:"Concepts",description:"Reaction",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/02-concepts.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/concepts",permalink:"/developers/modules/reactions/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/02-concepts.md",tags:[],version:"4.1.0",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/developers/modules/reactions/overview"},next:{title:"State",permalink:"/developers/modules/reactions/state"}},u={},d=[{value:"Reaction",id:"reaction",level:2},{value:"Subspace ID",id:"subspace-id",level:3},{value:"Post ID",id:"post-id",level:3},{value:"ID",id:"id",level:3},{value:"Value",id:"value",level:3},{value:"Author",id:"author",level:3},{value:"Registered Reaction Value",id:"registered-reaction-value",level:2},{value:"Registered reaction ID",id:"registered-reaction-id",level:3},{value:"Free Text Value",id:"free-text-value",level:2},{value:"Text",id:"text",level:3},{value:"Registered reaction",id:"registered-reaction",level:2},{value:"Subspace ID",id:"subspace-id-1",level:3},{value:"ID",id:"id-1",level:3},{value:"Shorthand code",id:"shorthand-code",level:3},{value:"Display value",id:"display-value",level:3},{value:"Subspace Reactions Params",id:"subspace-reactions-params",level:2},{value:"Subspace ID",id:"subspace-id-2",level:3},{value:"Registered Reaction",id:"registered-reaction-1",level:3},{value:"Free Text",id:"free-text",level:3},{value:"Registered Reaction Value Params",id:"registered-reaction-value-params",level:2},{value:"Enabled",id:"enabled",level:3},{value:"Free Text Value Params",id:"free-text-value-params",level:2},{value:"Enabled",id:"enabled-1",level:3},{value:"Max Length",id:"max-length",level:3},{value:"RegEx",id:"regex",level:3}],p={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"concepts"},"Concepts"),(0,n.kt)("h2",{id:"reaction"},"Reaction"),(0,n.kt)("p",null,"Within each subspace, users can react to posts by using a ",(0,n.kt)("em",{parentName:"p"},"reaction"),". This contains all the data referring to the post to which the reaction should be added, along with the reaction value itself. Reactions can be used to represent likes as well as any other type of response the subspace owners have decided to support. "),(0,n.kt)("h3",{id:"subspace-id"},"Subspace ID"),(0,n.kt)("p",null,"The subspace id represents the id of the subspace containing the post to which this reaction is associated."),(0,n.kt)("h3",{id:"post-id"},"Post ID"),(0,n.kt)("p",null,"The post id represents the id of post to which the reaction is associated."),(0,n.kt)("h3",{id:"id"},"ID"),(0,n.kt)("p",null,"A reaction id is a unique id within a post that can be used along with the post id itself to uniquely identify a reaction."),(0,n.kt)("h3",{id:"value"},"Value"),(0,n.kt)("p",null,"The value of the reaction can be either a ",(0,n.kt)("a",{parentName:"p",href:"#registered-reaction-value"},"registered reaction value")," or a ",(0,n.kt)("a",{parentName:"p",href:"#free-text-value"},"text reaction value"),"."),(0,n.kt)("h3",{id:"author"},"Author"),(0,n.kt)("p",null,"The author of a reaction is the user that has created this reaction."),(0,n.kt)("h2",{id:"registered-reaction-value"},"Registered Reaction Value"),(0,n.kt)("p",null,"The registered reaction value contains the details of a reaction value that references\na reaction registered within the subspace."),(0,n.kt)("h3",{id:"registered-reaction-id"},"Registered reaction ID"),(0,n.kt)("p",null,"The id of the registered reaction that should be used as the post's reaction. "),(0,n.kt)("h2",{id:"free-text-value"},"Free Text Value"),(0,n.kt)("p",null,"The free text value contains the details of a reaction value that is made of free text. This is particularly useful to react to posts using emojis or other text inside a subspace that has not registered any supported reaction."),(0,n.kt)("h3",{id:"text"},"Text"),(0,n.kt)("p",null,"The actual value of the reaction."),(0,n.kt)("h2",{id:"registered-reaction"},"Registered reaction"),(0,n.kt)("p",null,"In some cases, subspace owners and admins might want to allow users to only react to posts with a defined set of reactions. This might be the case of dApps that act similarly to Facebook, where you can only use a small set of emojis as reaction. In this case, subspace owners will have to create one ",(0,n.kt)("em",{parentName:"p"},"registered reaction")," for each emoji that can be used as a reaction.\nAt the same time, registered reactions can also be used to customize the set of emojis that can be used within a subspace. For example, you might want to register a reaction with a custom shorthand code that is visualized as a GIF. This is the case for dApps that act like Discord, allowing admins to register custom reactions associated to custom shorthand codes."),(0,n.kt)("h3",{id:"subspace-id-1"},"Subspace ID"),(0,n.kt)("p",null,"The id of the subspace inside which the reaction has been registered."),(0,n.kt)("h3",{id:"id-1"},"ID"),(0,n.kt)("p",null,"Each registered reaction has a unique id within a subspace. This, along with the subspace id itself, is used to uniquely reference a registered reaction while adding a post reaction through the ",(0,n.kt)("a",{parentName:"p",href:"#registered-reaction-value"},"registered reaction value")," type."),(0,n.kt)("h3",{id:"shorthand-code"},"Shorthand code"),(0,n.kt)("p",null,"A registered reaction shorthand code should be used by users to reference the reaction itself within a text. For this reason, each registered reaction should have a unique shorthand code within a subspace. "),(0,n.kt)("p",null,"Usually shorthand codes are in the form of ",(0,n.kt)("inlineCode",{parentName:"p"},":<code>:")," (e.g. the code ",(0,n.kt)("inlineCode",{parentName:"p"},":rocket:")," is associated to the \ud83d\ude80 emoji). "),(0,n.kt)("h3",{id:"display-value"},"Display value"),(0,n.kt)("p",null,"The display value of a registered reaction represents the image, emoji, GIF or video that should be visualized instead of the reaction shorthand code. This can be a simple text value (like an emoji) or an URL pointing to the image/GIF/video wanted. "),(0,n.kt)("h2",{id:"subspace-reactions-params"},"Subspace Reactions Params"),(0,n.kt)("p",null,"Each subspace owner can decide what kind of reactions are supported inside their own subspace. The ",(0,n.kt)("em",{parentName:"p"},"subspace reactions params")," contains all the related configuration about it. "),(0,n.kt)("h3",{id:"subspace-id-2"},"Subspace ID"),(0,n.kt)("p",null,"The id of the subspace for which the parameters are valid."),(0,n.kt)("h3",{id:"registered-reaction-1"},"Registered Reaction"),(0,n.kt)("p",null,"The parameters related to reactions using a ",(0,n.kt)("a",{parentName:"p",href:"#registered-reaction-value"},"registered reaction value"),"."),(0,n.kt)("h3",{id:"free-text"},"Free Text"),(0,n.kt)("p",null,"The parameters related to reactions using a ",(0,n.kt)("a",{parentName:"p",href:"#free-text-value"},"free text value"),"."),(0,n.kt)("h2",{id:"registered-reaction-value-params"},"Registered Reaction Value Params"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"registered reaction value params")," type contains all the parameters related to reactions that use a ",(0,n.kt)("a",{parentName:"p",href:"#registered-reaction-value"},"registered reaction value"),"."),(0,n.kt)("h3",{id:"enabled"},"Enabled"),(0,n.kt)("p",null,"Tells whether ",(0,n.kt)("a",{parentName:"p",href:"#registered-reaction-value"},"registered reaction value")," reactions are supported within the subspace."),(0,n.kt)("h2",{id:"free-text-value-params"},"Free Text Value Params"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"free text value params")," type contains all the parameters related to reactions that use a ",(0,n.kt)("a",{parentName:"p",href:"#free-text-value"},"free text value"),"."),(0,n.kt)("h3",{id:"enabled-1"},"Enabled"),(0,n.kt)("p",null,"Tells whether ",(0,n.kt)("a",{parentName:"p",href:"#free-text-value"},"free text value")," reactions are supported within the subspace."),(0,n.kt)("h3",{id:"max-length"},"Max Length"),(0,n.kt)("p",null,"The max length that a free text value reaction can have."),(0,n.kt)("h3",{id:"regex"},"RegEx"),(0,n.kt)("p",null,"The regular expression that should be used to validate the free text value reaction.\nIt can be useful to limit characters to a certain group."))}h.isMDXComponent=!0}}]);