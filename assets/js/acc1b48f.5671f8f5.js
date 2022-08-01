"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[72928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(n),c=a,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},s="Client",o={unversionedId:"developers/modules/fees/client",id:"version-4.1.0/developers/modules/fees/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/fees/06-client.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/client",permalink:"/4.1.0/developers/modules/fees/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/fees/06-client.md",tags:[],version:"4.1.0",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:6,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Parameters",permalink:"/4.1.0/developers/modules/fees/params"},next:{title:"Overview",permalink:"/4.1.0/developers/modules/supply/overview"}},p={},i=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"parameters",id:"parameters",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Params",id:"params",level:3},{value:"REST",id:"rest",level:2},{value:"Params",id:"params-1",level:3}],u={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," module using the CLI. "),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"desmos query fees --help\n")),(0,a.kt)("h4",{id:"parameters"},"parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," command allows users to get hte currently set parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query fees parameters [flags]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query fees parameters\n")),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'params:\n  min_fees:\n    - message_type: /desmos.profiles.v2.SaveProfile\n      amount: \n        - amount: "100"\n          denom: "stake"\n')),(0,a.kt)("h2",{id:"grpc"},"gRPC"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," module gRPC endpoints. "),(0,a.kt)("h3",{id:"params"},"Params"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the current params of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.fees.v1.Query/Params\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl localhost:9090 desmos.fees.v1.Query/Params\n")),(0,a.kt)("p",null,"Example Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "min_fees": [\n      {\n        "message_type": "/desmos.profiles.v2.SaveProfile",\n        "amount": [\n          {\n            "amount": "100",\n            "denom": "stake"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"rest"},"REST"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," module using REST endpoints."),(0,a.kt)("h3",{id:"params-1"},"Params"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," endpoint allows users to query for the module parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/desmos/fees/v1/params\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1317/desmos/fees/v1/params\n")),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "min_fees": [\n      {\n        "message_type": "/desmos.profiles.v2.SaveProfile",\n        "amount": [\n          {\n            "amount": "100",\n            "denom": "stake"\n          }\n        ]\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0}}]);