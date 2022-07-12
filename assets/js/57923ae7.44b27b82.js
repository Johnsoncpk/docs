"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95703],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),v=o,m=p["".concat(l,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"observe-data",title:"Observing data",sidebar_label:"Observing data",slug:"observe-data"},l="Observing new data",c={unversionedId:"developers/observe-data",id:"version-4.1.0/developers/observe-data",title:"Observing data",description:"Introduction",source:"@site/versioned_docs/version-4.1.0/02-developers/05-observe-data.md",sourceDirName:"02-developers",slug:"/developers/observe-data",permalink:"/developers/observe-data",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/05-observe-data.md",tags:[],version:"4.1.0",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:5,frontMatter:{id:"observe-data",title:"Observing data",sidebar_label:"Observing data",slug:"observe-data"},sidebar:"docs",previous:{title:"Query data",permalink:"/developers/query-data"},next:{title:"F.A.Q",permalink:"/developers/faq"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Websocket",id:"websocket",level:2},{value:"Events",id:"events",level:3},{value:"Example",id:"example",level:4}],p={toc:d};function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"observing-new-data"},"Observing new data"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Aside from querying data, you can also observe new data as its inserted inside the chain itself. In this way, you will be notified as soon as a transaction is properly executed without having to constantly polling the chain state by yourself. "),(0,a.kt)("h2",{id:"websocket"},"Websocket"),(0,a.kt)("p",null,"All the live data observation is done though the usage of a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"websocket"),". The endpoint of such websocket is the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ws://lcd-endpoint/websocket\n\n# Example\n# ws://morpheus.desmos.network/websocket\n")),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,"In order to subscribe to specific events, you will need to send one or more messages to the websocket once you opened a connection to it. Such messages need to contain the following JSON object and must be string encoded: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "subscribe",\n  "id": "0",\n  "params": {\n    "query": "tm.event=\'eventCategory\' AND eventType.eventAttribute=\'attributeValue\'"\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," field can have the following values: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tm.event='NewBlock'")," if you want to observe each new block that is created (even empty ones);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tm.event='Tx'")," if you want to subscribe to all new transactions;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message.action='<action>'")," if you want to subscribe to events emitted when a specific message is sent to the chain.\nIn this case, please refer to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Message action")," section on each transaction message\nspecification page to know what is the type associated to each message.")),(0,a.kt)("p",null,"Please note that if you want to subscribe to multiple events you will need to send multiple query messages upon connecting to the websocket. "),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "subscribe",\n  "id": "0",\n  "params": {\n    "query": "message.action=\'save_profile\'"\n  }\n}\n')))}v.isMDXComponent=!0}}]);