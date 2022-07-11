"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80602],{3905:function(e,t,s){s.d(t,{Zo:function(){return p},kt:function(){return m}});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(s),m=n,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return s?r.createElement(b,a(a({ref:t},p),{},{components:s})):r.createElement(b,a({ref:t},p))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<i;l++)a[l]=s[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},16770:function(e,t,s){s.r(t),s.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=s(87462),n=s(63366),i=(s(67294),s(3905)),a=["components"],o={id:"state",title:"State",sidebar_label:"State",slug:"state"},u="State",l={unversionedId:"developers/modules/subspaces/state",id:"developers/modules/subspaces/state",title:"State",description:"Next Subspace ID",source:"@site/docs/02-developers/02-modules/subspaces/03-state.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/state",permalink:"/next/developers/modules/subspaces/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/subspaces/03-state.md",tags:[],version:"current",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/next/developers/modules/subspaces/concepts"},next:{title:"Messages",permalink:"/next/developers/modules/subspaces/messages"}},p={},c=[{value:"Next Subspace ID",id:"next-subspace-id",level:2},{value:"Subspace",id:"subspace",level:2},{value:"Next Section ID",id:"next-section-id",level:2},{value:"Section",id:"section",level:2},{value:"Next Group ID",id:"next-group-id",level:2},{value:"User Group",id:"user-group",level:2},{value:"User Group Member",id:"user-group-member",level:2},{value:"User Permission",id:"user-permission",level:2}],d={toc:c};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state"},"State"),(0,i.kt)("h2",{id:"next-subspace-id"},"Next Subspace ID"),(0,i.kt)("p",null,"The next subspace id is stored on the chain as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x00 | -> bytes(NextSubspaceID)"))),(0,i.kt)("h2",{id:"subspace"},"Subspace"),(0,i.kt)("p",null,"A subspace is stored on the chain by using its unique id as the key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Subspace: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | -> ProtocolBuffer(Subspace)"))),(0,i.kt)("h2",{id:"next-section-id"},"Next Section ID"),(0,i.kt)("p",null,"The Next Section ID is stored on the chain using its associated subspace ID as key."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Next Section ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x06 | Subspace ID | -> bytes(NextSectionID)"))),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,"The Section is stored using both the Subspace ID and its ID as keys. This make it easier to query:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the subspace related sections;"),(0,i.kt)("li",{parentName:"ul"},"A specific section inside a given subspace.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Section: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x07 | Subspace ID | Section ID | -> ProtocolBuffer(Section)"))),(0,i.kt)("h2",{id:"next-group-id"},"Next Group ID"),(0,i.kt)("p",null,"The next group id is stored using the subspace id to which it is associated as the key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Next Group ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | -> bytes(NextUserGroupID)"))),(0,i.kt)("h2",{id:"user-group"},"User Group"),(0,i.kt)("p",null,"A user group is stored on the chain with a combination of subspace id, section id and user group id as key. This make it easier to query:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"all the user groups of a subspace;"),(0,i.kt)("li",{parentName:"ul"},"all the user groups of a section;"),(0,i.kt)("li",{parentName:"ul"},"a specific user group.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Group: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x03 | Subspace ID | Section ID | User Group ID -> ProtocolBuffer(UserGroup)"))),(0,i.kt)("h2",{id:"user-group-member"},"User Group Member"),(0,i.kt)("p",null,"A user group member is stored on the chain with a combination of subspace id and user group id as key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Group Member: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x04 | Subspace ID | User Group ID | Address | -> 0x01"))),(0,i.kt)("h2",{id:"user-permission"},"User Permission"),(0,i.kt)("p",null,"A user permission is stored on the chain with a combination of subspace id, section id and user address as key. This make it easy to query:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"all the user permissions set within a subspace;"),(0,i.kt)("li",{parentName:"ul"},"all the user permissions set within a a section;"),(0,i.kt)("li",{parentName:"ul"},"all the permissions set to an address.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Permission: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x05 | Subspace ID | Section ID | Address | -> ProtocolBuffer(UserPermission)"))))}m.isMDXComponent=!0}}]);