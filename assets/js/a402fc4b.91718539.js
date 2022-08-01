"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[76684],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var r=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(s),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||n;return s?r.createElement(b,l(l({ref:t},c),{},{components:s})):r.createElement(b,l({ref:t},c))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,l=new Array(n);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=s[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,s)}u.displayName="MDXCreateElement"},94670:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=s(87462),a=(s(67294),s(3905));const n={id:"delete-subspace",title:"Delete subspace",sidebar_label:"Delete subspace",slug:"delete-subspace"},l="MsgDeleteSubspace",i={unversionedId:"developers/transactions/subspaces/delete-subspace",id:"version-3/developers/transactions/subspaces/delete-subspace",title:"Delete subspace",description:"This message allows to delete an existent subspace.",source:"@site/versioned_docs/version-3/02-developers/03-transactions/subspaces/delete-subspace.md",sourceDirName:"02-developers/03-transactions/subspaces",slug:"/developers/transactions/subspaces/delete-subspace",permalink:"/3/developers/transactions/subspaces/delete-subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/03-transactions/subspaces/delete-subspace.md",tags:[],version:"3",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"delete-subspace",title:"Delete subspace",sidebar_label:"Delete subspace",slug:"delete-subspace"},sidebar:"version-3/docs",previous:{title:"Edit subspace",permalink:"/3/developers/transactions/subspaces/edit-subspace"},next:{title:"Set user permissions",permalink:"/3/developers/transactions/subspaces/set-user-permissions"}},o={},p=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msgdeletesubspace"},(0,a.kt)("inlineCode",{parentName:"h1"},"MsgDeleteSubspace")),(0,a.kt)("p",null,"This message allows to delete an existent subspace."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint64"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unique id that identifies the subspace"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"signer")),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Address of the signer of the message"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1.MsgDeleteSubspace",\n  "subspace_id": "1",\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,a.kt)("h2",{id:"message-action"},"Message action"),(0,a.kt)("p",null,"The action associated to this message is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"delete_subspace\n")))}d.isMDXComponent=!0}}]);