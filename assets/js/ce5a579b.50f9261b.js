"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36291],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"query-data",title:"Query data",sidebar_label:"Query data",slug:"query-data"},s="Query data",p={unversionedId:"developers/query-data",id:"version-4.1.0/developers/query-data",title:"Query data",description:"Inside Desmos it is possible to query data in 4 different ways:",source:"@site/versioned_docs/version-4.1.0/02-developers/04-query-data.md",sourceDirName:"02-developers",slug:"/developers/query-data",permalink:"/developers/query-data",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/04-query-data.md",tags:[],version:"4.1.0",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:4,frontMatter:{id:"query-data",title:"Query data",sidebar_label:"Query data",slug:"query-data"},sidebar:"docs",previous:{title:"Tools to build DApps",permalink:"/developers/tools-to-build"},next:{title:"Observing data",permalink:"/developers/observe-data"}},d={},u=[{value:"CLI",id:"cli",level:2},{value:"gRPC",id:"grpc",level:2},{value:"REST",id:"rest",level:2},{value:"GQL",id:"gql",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"query-data"},"Query data"),(0,l.kt)("p",null,"Inside Desmos it is possible to query data in 4 different ways:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"With the ",(0,l.kt)("inlineCode",{parentName:"li"},"CLI")," directly from terminal."),(0,l.kt)("li",{parentName:"ol"},"With the ",(0,l.kt)("inlineCode",{parentName:"li"},"REST")," endpoint directly from a full node."),(0,l.kt)("li",{parentName:"ol"},"With the ",(0,l.kt)("inlineCode",{parentName:"li"},"gRPC")," endpoint directly from a full node."),(0,l.kt)("li",{parentName:"ol"},"With ",(0,l.kt)("inlineCode",{parentName:"li"},"GraphQL"),".")),(0,l.kt)("h2",{id:"cli"},"CLI"),(0,l.kt)("p",null,"To query data using ",(0,l.kt)("inlineCode",{parentName:"p"},"CLI"),", you can check the following commands of each module:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/client#cli"},"Profiles CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/relationships/client#cli"},"Relationships CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/subspaces/client#cli"},"Subspaces CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/posts/client#cli"},"Posts CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/reports/client#cli"},"Reports CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/reactions/client#cli"},"Reactions CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/supply/client#cli"},"Supply CLI commands"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/fees/client#cli"},"Fees CLI commands"),".")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To be able to perform the above queries, you need to have the desmos daemon installed.\nCheck the full node ",(0,l.kt)("a",{parentName:"p",href:"/fullnode/setup#1-build-the-software"},"setup section")," to know how."))),(0,l.kt)("h2",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"To query data using the ",(0,l.kt)("inlineCode",{parentName:"p"},"gRPC")," endpoint, you can use the following endpoints:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/testnet/endpoints#rest--grpc"},"Testnet gRPC endpoint")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/mainnet/endpoints#rest--grpc"},"Mainnet gRPC endpoint"))),(0,l.kt)("p",null,"The above endpoints can be combined with the following endpoints to get the desired data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/client#grpc"},"Profiles gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/relationships/client#grpc"},"Relationships gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/subspaces/client#grpc"},"Subspaces gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/posts/client#grpc"},"Posts gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/reports/client#grpc"},"Reports gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/reactions/client#grpc"},"Reactions gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/fees/client#grpc"},"Supply gRPC endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/fees/client#grpc"},"Fees gRPC endpoints"),".")),(0,l.kt)("h2",{id:"rest"},"REST"),(0,l.kt)("p",null,"TO query data using the ",(0,l.kt)("inlineCode",{parentName:"p"},"REST")," endpoint, you can use the following endpoints:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/testnet/endpoints#rest--grpc"},"Testnet gRPC endpoint")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/mainnet/endpoints#rest--grpc"},"Mainnet gRPC endpoint"))),(0,l.kt)("p",null,"The above endpoints can be used with the following endpoints to get the desired data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/profiles/client#rest"},"Profiles REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/relationships/client#rest"},"Relationships REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/subspaces/client#rest"},"Subspaces REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/posts/client#rest"},"Posts REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/reports/client#rest"},"Reports REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/reactions/client#rest"},"Reactions REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/fees/client#rest"},"Supply REST endpoints"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/fees/client#rest"},"Fees REST endpoints"),".")),(0,l.kt)("h2",{id:"gql"},"GQL"),(0,l.kt)("p",null,"Another way to query the Desmos data is GQL. GQL is different from the above methods because it offers high possibilities of customisation for developers based on their needs. It is possible to interact with GQL endpoints in the client you are building by using one of the many libraries available for this kind of interaction. You can check what suites your needs here: ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/code/"},"GraphQL resources"),"."),(0,l.kt)("p",null,"The GQL endpoints for Desmos chains are the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/testnet/endpoints#gql"},"Testnet GQL endpoint")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/mainnet/endpoints#gql"},"Mainnet GQL endpoint"))))}c.isMDXComponent=!0}}]);