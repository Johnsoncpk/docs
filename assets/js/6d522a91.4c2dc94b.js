"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1400],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},o="Client",p={unversionedId:"developers/modules/reactions/client",id:"developers/modules/reactions/client",title:"Client",description:"CLI",source:"@site/docs/02-developers/02-modules/reactions/07-client.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/client",permalink:"/next/developers/modules/reactions/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/reactions/07-client.md",tags:[],version:"current",lastUpdatedAt:1657542942,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:7,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Permissions",permalink:"/next/developers/modules/reactions/permissions"},next:{title:"Overview",permalink:"/next/developers/modules/reports/overview"}},c={},u=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"reaction",id:"reaction",level:4},{value:"reactions",id:"reactions",level:4},{value:"registered-reaction",id:"registered-reaction",level:4},{value:"registered-reactions",id:"registered-reactions",level:4},{value:"params",id:"params",level:3},{value:"gRPC",id:"grpc",level:2},{value:"Reaction",id:"reaction-1",level:3},{value:"Reactions",id:"reactions-1",level:3},{value:"RegisteredReaction",id:"registeredreaction",level:3},{value:"RegisteredReactions",id:"registeredreactions",level:3},{value:"ReactionsParams",id:"reactionsparams",level:3},{value:"REST",id:"rest",level:2},{value:"Reaction",id:"reaction-2",level:3},{value:"Reactions",id:"reactions-2",level:3},{value:"RegisteredReaction",id:"registeredreaction-1",level:3},{value:"RegisteredReactions",id:"registeredreactions-1",level:3},{value:"ReactionsParams",id:"reactionsparams-1",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client"},"Client"),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,"A user can query and interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"reactions")," module using the CLI."),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,r.kt)("inlineCode",{parentName:"p"},"reactions")," state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"desmos query reactions --help\n")),(0,r.kt)("h4",{id:"reaction"},"reaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reaction")," query command allows users to query a specific reaction with the given ID to a post with the given ID, inside the subspace with\nthe given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reaction reaction [subspace-id] [post-id] [reaction-id] [flags]\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions reaction 5 1 1\n")),(0,r.kt)("p",null,"Example output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'reaction:\n  author: desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f\n  id: 1\n  post_id: "1"\n  subspace_id: "5"\n  value:\n    \'@type\': /desmos.reactions.v1.FreeTextValue\n    text: "\\U0001F680"\n')),(0,r.kt)("h4",{id:"reactions"},"reactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reactions")," query command allows users to query all the reactions inside the subspace with the given ID. It's also possible\nto get all the reactions made to a post by specifying also its ID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions reactions [subspace-id] [[post-id]] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions reactions 5 1\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nreactions:\n- author: desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f\n  id: 1\n  post_id: "1"\n  subspace_id: "5"\n  value:\n    \'@type\': /desmos.reactions.v1.FreeTextValue\n    text: "\\U0001F680"\n- author: desmos1dx6h75tkj0cuvyqf6cwn6usc9qynu39v0245m4\n  id: 2\n  post_id: "1"\n  subspace_id: "5"\n  value:\n    \'@type\': /desmos.reactions.v1.FreeTextValue\n    text: "\\U0001F602"\n')),(0,r.kt)("h4",{id:"registered-reaction"},"registered-reaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"registered-reaction")," query command allows users to query the registered-reaction with the given ID inside the subspace\nwith the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions registered-reaction [subspace-id] [reaction-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions registered-reaction 5 1\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'registered_reaction:\n  display_value: https://example.com?image=hello.png\n  id: 7\n  shorthand_code: :hello\n  subspace_id: "5"\n')),(0,r.kt)("h4",{id:"registered-reactions"},"registered-reactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"registered-reactions")," query command allows users to query all the registered-reactions inside the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions registered-reactions [subspace-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions registered-reactions 5\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nregistered_reactions:\n- display_value: https://example.com?image=hello.png\n  id: 7\n  shorthand_code: \':hello:\' \n  subspace_id: "5"\n- display_value: https://example.com?image=bye.png\n  id: 8\n  shorthand_code: \':bye:\'\n  subspace_id: "5"\n')),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," query command allows users to query the reactions parameters for the subspace with the given ID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions params [subspace-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reactions params 5\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"params:\n  free_text:\n    enabled: true\n    max_length: 30\n    reg_ex: '[a-z]'\n  registered_reaction:\n    enabled: true\n  subspace_id: \"5\"\n")),(0,r.kt)("h2",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,"A user can query the ",(0,r.kt)("inlineCode",{parentName:"p"},"reactions")," module gRPC endpoints."),(0,r.kt)("h3",{id:"reaction-1"},"Reaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reaction")," endpoint allows users to query a specific reaction with the given ID to a post with the given ID,\ninside the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reactions.v1.Query/Reaction\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":5, "post_id":1, "reaction_id":1}\' localhost:9090 desmos.reactions.v1.Query/Reaction\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reaction": {\n    "subspaceId": "5",\n    "postId": "1",\n    "id": 1,\n    "value": {"@type":"/desmos.reactions.v1.FreeTextValue","text":"\ud83d\ude80"},\n    "author": "desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f"\n  }\n}\n')),(0,r.kt)("h3",{id:"reactions-1"},"Reactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reactions")," endpoint allows users to query all the reactions inside the subspace with the given ID. It is possible\nto filter this request and get only the reactions made to a post with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reactions.v1.Query/Reactions\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":5, "post_id":1}\' localhost:9090 desmos.reactions.v1.Query/Reactions \n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reactions": [\n    {\n      "subspaceId": "5",\n      "postId": "1",\n      "id": 1,\n      "value": {"@type":"/desmos.reactions.v1.FreeTextValue","text":"\ud83d\ude80"},\n      "author": "desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f"\n    },\n    {\n      "subspaceId": "5",\n      "postId": "1",\n      "id": 2,\n      "value": {"@type":"/desmos.reactions.v1.FreeTextValue","text":"\ud83d\ude02"},\n      "author": "desmos1dx6h75tkj0cuvyqf6cwn6usc9qynu39v0245m4"\n    }\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n')),(0,r.kt)("h3",{id:"registeredreaction"},"RegisteredReaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisteredReaction")," endpoint allows users to query a specific registered reaction with the given ID inside a subspace\nwith the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reactions.v1.Query/RegisteredReaction\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":5, "reaction_id":7}\' localhost:9090 desmos.reactions.v1.Query/RegisteredReaction\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "registeredReaction": {\n    "subspaceId": "5",\n    "id": 7,\n    "shorthandCode": ":hello:",\n    "displayValue": "https://example.com?image=hello.png"\n  }\n}\n')),(0,r.kt)("h3",{id:"registeredreactions"},"RegisteredReactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisteredReactions")," endpoint allows users to query all the registered reactions within the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reactions.v1.Query/RegisteredReactions\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext -d '{\"subspace_id\":5}' localhost:9090 desmos.reactions.v1.Query/RegisteredReactions\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "registeredReactions": [\n    {\n      "subspaceId": "5",\n      "id": 7,\n      "shorthandCode": ":hello:",\n      "displayValue": "https://example.com?image=hello.png"\n    },\n    {\n      "subspaceId": "5",\n      "id": 8,\n      "shorthandCode": ":bye:",\n      "displayValue": "https://example.com?image=bye.png"\n    }\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n')),(0,r.kt)("h3",{id:"reactionsparams"},"ReactionsParams"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactionParams")," endpoint allows users to query the reaction parameters of a subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reactions.v1.Query/ReactionsParams\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext -d '{\"subspace_id\":5}' localhost:9090 desmos.reactions.v1.Query/ReactionsParams\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "subspaceId": "5",\n    "registeredReaction": {\n      "enabled": true\n    },\n    "freeText": {\n      "enabled": true,\n      "maxLength": 30,\n      "regEx": "[a-z]"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"rest"},"REST"),(0,r.kt)("p",null,"A user can query the ",(0,r.kt)("inlineCode",{parentName:"p"},"reactions")," module using REST endpoints."),(0,r.kt)("h3",{id:"reaction-2"},"Reaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reaction")," endpoint allows users to query a specific reaction with the given ID to a post with the given ID,\ninside the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/reactions/v1/subspaces/{subspace_id}/posts/{post_id}/reactions/{reaction_id}\n")),(0,r.kt)("h3",{id:"reactions-2"},"Reactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reactions")," endpoint allows users to query all the reactions inside the subspace with the given ID. It is possible\nto filter this request and get only the reactions made to a post with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/reactions/v1/subspaces/{subspace_id}/posts/{post_id}/reactions\n")),(0,r.kt)("h3",{id:"registeredreaction-1"},"RegisteredReaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisteredReaction")," endpoint allows users to query a specific registered reaction with the given ID inside a subspace\nwith the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/reactions/v1/subspaces/{subspace_id}/registered-reactions/{reaction_id}\n")),(0,r.kt)("h3",{id:"registeredreactions-1"},"RegisteredReactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisteredReactions")," endpoint allows users to query all the registered reactions within the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/reactions/v1/subspaces/{subspace_id}/registered-reactions\n")),(0,r.kt)("h3",{id:"reactionsparams-1"},"ReactionsParams"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactionParams")," endpoint allows users to query the reaction parameters of a subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/reactions/v1/subspaces/{subspace_id}/params\n")))}m.isMDXComponent=!0}}]);