"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7713],{3905:function(e,s,n){n.d(s,{Zo:function(){return i},kt:function(){return d}});var a=n(67294);function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function r(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?r(Object(n),!0).forEach((function(s){t(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function l(e,s){if(null==e)return{};var n,a,t=function(e,s){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=a.createContext({}),o=function(e){var s=a.useContext(u),n=s;return e&&(n="function"==typeof e?e(s):p(p({},s),e)),n},i=function(e){var s=o(e.components);return a.createElement(u.Provider,{value:s},e.children)},c={inlineCode:"code",wrapper:function(e){var s=e.children;return a.createElement(a.Fragment,{},s)}},m=a.forwardRef((function(e,s){var n=e.components,t=e.mdxType,r=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=o(n),d=t,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,p(p({ref:s},i),{},{components:n})):a.createElement(g,p({ref:s},i))}));function d(e,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var r=n.length,p=new Array(r);p[0]=m;var l={};for(var u in s)hasOwnProperty.call(s,u)&&(l[u]=s[u]);l.originalType=e,l.mdxType="string"==typeof e?e:t,p[1]=l;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89078:function(e,s,n){n.r(s),n.d(s,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var a=n(87462),t=n(63366),r=(n(67294),n(3905)),p=["components"],l={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},u="Client",o={unversionedId:"developers/modules/subspaces/client",id:"version-4.1.0/developers/modules/subspaces/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/subspaces/07-client.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/client",permalink:"/developers/modules/subspaces/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/subspaces/07-client.md",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:7,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"}},i={},c=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"subspace",id:"subspace",level:4},{value:"subspaces",id:"subspaces",level:4},{value:"sections",id:"sections",level:4},{value:"list",id:"list",level:5},{value:"section",id:"section",level:5},{value:"groups",id:"groups",level:4},{value:"list",id:"list-1",level:5},{value:"group",id:"group",level:4},{value:"members",id:"members",level:4},{value:"permissions",id:"permissions",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Subspaces",id:"subspaces-1",level:3},{value:"Subspace",id:"subspace-1",level:3},{value:"Sections",id:"sections-1",level:3},{value:"Section",id:"section-1",level:3},{value:"UserGroups",id:"usergroups",level:3},{value:"UserGroup",id:"usergroup",level:3},{value:"UserGroupMembers",id:"usergroupmembers",level:3},{value:"UserPermissions",id:"userpermissions",level:3},{value:"REST",id:"rest",level:2},{value:"Subspaces",id:"subspaces-2",level:3},{value:"Subspace",id:"subspace-2",level:3},{value:"Sections",id:"sections-2",level:3},{value:"Section",id:"section-2",level:3},{value:"UserGroups",id:"usergroups-1",level:3},{value:"UserGroup",id:"usergroup-1",level:3},{value:"UserGroupMembers",id:"usergroupmembers-1",level:3},{value:"UserPermissions",id:"userpermissions-1",level:3}],m={toc:c};function d(e){var s=e.components,n=(0,t.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client"},"Client"),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,"A user can query and interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subspaces")," module using the CLI."),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,r.kt)("inlineCode",{parentName:"p"},"subspaces")," state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces --help\n")),(0,r.kt)("h4",{id:"subspace"},"subspace"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subspace")," query command allows users to query a subspace with the given id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspace [id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspace 1\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'subspace:\n  creation_time: "2022-06-20T14:52:23.049305Z"\n  creator: desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc\n  description: "this is a test subspace"\n  id: "1"\n  name: test\n  owner: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  treasury: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n')),(0,r.kt)("h4",{id:"subspaces"},"subspaces"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subspaces")," query command allows users to query all the subspaces. Optional pagination is available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspaces [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspaces --page=2 --limit=100\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nsubspaces:\n- creation_time: "2022-06-20T14:52:23.049305Z"\n  creator: desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc\n  description: ""\n  id: "1"\n  name: test\n  owner: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  treasury: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n')),(0,r.kt)("h4",{id:"sections"},"sections"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sections")," query command allows users to query the sections state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces sections [command] [flags] --help\n")),(0,r.kt)("h5",{id:"list"},"list"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," query command allows users to query all the sections of a subspace. Optional pagination is available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces sections list [subspace-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces sections list 1 --page=2 --limit=100\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nsections:\n- description: This is the default subspace section\n  id: 0\n  name: Default section\n  parent_id: 0\n  subspace_id: "1"\n- description: ""\n  id: 1\n  name: "1"\n  parent_id: 0\n  subspace_id: "1"\n- description: this is a test section\n  id: 2\n  name: "1"\n  parent_id: 0\n  subspace_id: "1"\n- description: this is a test section 2\n  id: 3\n  name: "1"\n  parent_id: 0\n  subspace_id: "1"\n')),(0,r.kt)("h5",{id:"section"},"section"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"section")," query command allows users to query a specific section inside a subspace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces sections section [subspace-id] [section-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces sections section 1 2\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'section:\n  description: this is a test section\n  id: 2\n  name: "1"\n  parent_id: 0\n  subspace_id: "1"\n')),(0,r.kt)("h4",{id:"groups"},"groups"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," query command allows users to query the groups state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups [command] --help\n")),(0,r.kt)("h5",{id:"list-1"},"list"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," query command allows users to query all the groups of a subspace. Optional pagination is available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups list [subspace-id] [flags] --help\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups list 1 \n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'groups:\n- description: This is a default user group which all users are automatically part\n    of\n  id: 0\n  name: Default\n  permissions: []\n  section_id: 0\n  subspace_id: "1"\n- description: A test group\n  id: 1\n  name: TestGroup\n  permissions: []\n  section_id: 0\n  subspace_id: "1"\npagination:\n  next_key: null\n  total: "0"\n')),(0,r.kt)("h4",{id:"group"},"group"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," query command allows users to query a specific group of a subspace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups group [subspace-id] [group-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups group 1 1\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'group:\n  description: A test group\n  id: 1\n  name: TestGroup\n  permissions: []\n  section_id: 0\n  subspace_id: "1"\n')),(0,r.kt)("h4",{id:"members"},"members"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"members")," query command allows users to query the members of a group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces members [subspace-id] [group-id] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces members 1 1\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'members:\n- desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc\n- desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\npagination:\n  next_key: null\n  total: "0"\n')),(0,r.kt)("h4",{id:"permissions"},"permissions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions")," query command allows users to query user's permissions of a specific subspace or section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces permissions [subspace-id] [section-id] [user] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces permissions 1 0 desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc  \n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'details:\n- section_id: 0\n  subspace_id: "1"\n  user:\n    permission:\n    - EVERYTHING\n    user: desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc\n- group:\n    group_id: 0\n    permission: []\n  section_id: 0\n  subspace_id: "1"\npermissions:\n- EVERYTHING\n')),(0,r.kt)("h2",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,"Users can query the ",(0,r.kt)("inlineCode",{parentName:"p"},"subspaces")," module gRPC endpoints."),(0,r.kt)("h3",{id:"subspaces-1"},"Subspaces"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspaces")," endpoint allows users to query all the subspaces inside Desmos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/Subspaces\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 desmos.subspaces.v2.Query/Subspaces\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subspaces": [\n    {\n      "id": "1",\n      "name": "test",\n      "treasury": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "owner": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "creator": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc",\n      "creationTime": "2022-06-20T14:52:23.049305Z"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"subspace-1"},"Subspace"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspace")," endpoint allows users to query a subspace associated with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/Subspace\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext -d '{\"subspace_id\":1}' localhost:9090 desmos.subspaces.v2.Query/Subspace\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subspace": {\n    "id": "1",\n    "name": "test",\n    "treasury": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n    "owner": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n    "creator": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc",\n    "creationTime": "2022-06-20T14:52:23.049305Z"\n  }\n}\n')),(0,r.kt)("h3",{id:"sections-1"},"Sections"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sections")," endpoint allows users to query the sections associated with the given subspace ID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/Sections\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext -d '{\"subspace_id\":1}' localhost:9090 desmos.subspaces.v2.Query/Sections \n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sections": [\n    {\n      "subspaceId": "1",\n      "name": "Default section",\n      "description": "This is the default subspace section"\n    },\n    {\n      "subspaceId": "1",\n      "id": 1,\n      "name": "1"\n    },\n    {\n      "subspaceId": "1",\n      "id": 2,\n      "name": "1",\n      "description": "this is a test section"\n    },\n    {\n      "subspaceId": "1",\n      "id": 3,\n      "name": "1",\n      "description": "this is a test section 2"\n    }\n  ],\n  "pagination": {\n    "total": "4"\n  }\n}\n')),(0,r.kt)("h3",{id:"section-1"},"Section"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Section")," endpoint allows users to query a section with the given ID inside the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/Section\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "section_id":1}\' localhost:9090 desmos.subspaces.v2.Query/Section\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "section": {\n    "subspaceId": "1",\n    "id": 1,\n    "name": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"usergroups"},"UserGroups"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserGroups")," endpoint allows users to query all the user groups associated with a given subspace ID and section ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/UserGroups\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "section_id": 0}\' localhost:9090 desmos.subspaces.v2.Query/UserGroups\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "groups": [\n    {\n      "subspaceId": "1",\n      "name": "Default",\n      "description": "This is a default user group which all users are automatically part of"\n    },\n    {\n      "subspaceId": "1",\n      "id": 1,\n      "name": "TestGroup",\n      "description": "A test group"\n    }\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n')),(0,r.kt)("h3",{id:"usergroup"},"UserGroup"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserGroup")," endpoint allows users to query a specific user group with the given ID associated with a given subspace ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/UserGroup\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "group_id":1}\' localhost:9090 desmos.subspaces.v2.Query/UserGroup \n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "group": {\n    "subspaceId": "1",\n    "id": 1,\n    "name": "TestGroup",\n    "description": "A test group"\n  }\n}\n')),(0,r.kt)("h3",{id:"usergroupmembers"},"UserGroupMembers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserGroupMembers")," endpoint allows users to query all the members of the user group with the given ID inside the\nsubspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/UserGroupMembers\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "group_id":1}\' localhost:9090 desmos.subspaces.v2.Query/UserGroupMembers\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "members": [\n    "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc",\n    "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3"\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n')),(0,r.kt)("h3",{id:"userpermissions"},"UserPermissions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPermissions")," endpoint allows users to query all the user's permissions inside the subspace with the given ID\nand the section with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.subspaces.v2.Query/UserPermissions\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "section_id":0, "user": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"}\' localhost:9090 desmos.subspaces.v2.Query/UserPermissions\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    "EVERYTHING"\n  ],\n  "details": [\n    {\n      "subspaceId": "1",\n      "user": {\n        "user": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc",\n        "permission": [\n          "EVERYTHING"\n        ]\n      }\n    },\n    {\n      "subspaceId": "1",\n      "group": {\n        \n      }\n    },\n    {\n      "subspaceId": "1",\n      "group": {\n        "groupId": 1\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"rest"},"REST"),(0,r.kt)("p",null,"A user can query the ",(0,r.kt)("inlineCode",{parentName:"p"},"subspaces")," module using REST endpoints."),(0,r.kt)("h3",{id:"subspaces-2"},"Subspaces"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspaces")," endpoint allows users to query all the subspaces inside Desmos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/subspaces\n")),(0,r.kt)("h3",{id:"subspace-2"},"Subspace"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subspace")," endpoint allows users to query a subspace associated with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/subspaces/{subspace_id}\n")),(0,r.kt)("h3",{id:"sections-2"},"Sections"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sections")," endpoint allows users to query the sections associated with the given subspace ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/{subspace_id}/sections\n")),(0,r.kt)("h3",{id:"section-2"},"Section"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Section")," endpoint allows users to query a section with the given ID associated with the subspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/{subspace_id}/sections/{section_id}\n")),(0,r.kt)("h3",{id:"usergroups-1"},"UserGroups"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserGroups")," endpoint allows users to query all the user groups associated with a given subspace ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/subspaces/{subspace_id}/groups\n")),(0,r.kt)("h3",{id:"usergroup-1"},"UserGroup"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserGroup")," endpoint allows users to query a specific user group with the given ID associated with a given subspace ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/subspaces/{subspace_id}/groups/{group_id}\n")),(0,r.kt)("h3",{id:"usergroupmembers-1"},"UserGroupMembers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserGroupMembers")," endpoint allows users to query all the members of the user group with the given ID inside the\nsubspace with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/subspaces/{subspace_id}/groups/{group_id}/members\n")),(0,r.kt)("h3",{id:"userpermissions-1"},"UserPermissions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPermissions")," endpoint allows users to query all the user's permissions inside the subspace with the given ID\nand the section with the given ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/subspaces/v2/subspaces/{subspace_id}/permissions/{user}\n")))}d.isMDXComponent=!0}}]);