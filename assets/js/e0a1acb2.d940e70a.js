"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26338],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return a?t.createElement(k,s(s({ref:n},u),{},{components:a})):t.createElement(k,s({ref:n},u))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var o=2;o<r;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13178:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var t=a(87462),l=a(63366),r=(a(67294),a(3905)),s=["components"],i={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},p="Client",o={unversionedId:"developers/modules/profiles/client",id:"developers/modules/profiles/client",title:"Client",description:"CLI",source:"@site/docs/02-developers/02-modules/profiles/07-client.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/client",permalink:"/next/developers/modules/profiles/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/profiles/07-client.md",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:7,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Parameters",permalink:"/next/developers/modules/profiles/params"},next:{title:"Overview",permalink:"/next/developers/modules/relationships/overview"}},u={},c=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"profile",id:"profile",level:4},{value:"incoming-dtag-transfer-requests",id:"incoming-dtag-transfer-requests",level:4},{value:"chain-links",id:"chain-links",level:4},{value:"app-links",id:"app-links",level:4},{value:"parameters",id:"parameters",level:4},{value:"Transactions",id:"transactions",level:3},{value:"save",id:"save",level:4},{value:"delete",id:"delete",level:4},{value:"request-dtag-transfer",id:"request-dtag-transfer",level:4},{value:"cancel-dtag-transfer-request",id:"cancel-dtag-transfer-request",level:4},{value:"accept-dtag-transfer-request",id:"accept-dtag-transfer-request",level:4},{value:"refuse-dtag-transfer-request",id:"refuse-dtag-transfer-request",level:4},{value:"link-chain",id:"link-chain",level:4},{value:"unlink-chain",id:"unlink-chain",level:4},{value:"link-app",id:"link-app",level:4},{value:"unlink-app",id:"unlink-app",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Profile",id:"profile-1",level:3},{value:"IncomingDTagTransferRequests",id:"incomingdtagtransferrequests",level:3},{value:"ChainLinks",id:"chainlinks",level:3},{value:"ChainLinkOwners",id:"chainlinkowners",level:3},{value:"ApplicationLinks",id:"applicationlinks",level:3},{value:"ApplicationLinkByClientID",id:"applicationlinkbyclientid",level:3},{value:"ApplicationLinkOwners",id:"applicationlinkowners",level:3},{value:"Params",id:"params",level:3},{value:"REST",id:"rest",level:2},{value:"Profile",id:"profile-2",level:3},{value:"Incoming DTag Transfer Requests",id:"incoming-dtag-transfer-requests-1",level:3},{value:"Chain Links",id:"chain-links-1",level:3},{value:"Chain Links Owners",id:"chain-links-owners",level:3},{value:"Application Links",id:"application-links",level:3},{value:"Application Links By Client ID",id:"application-links-by-client-id",level:3},{value:"Application Links Owners",id:"application-links-owners",level:3},{value:"Params",id:"params-1",level:3}],d={toc:c};function m(e){var n=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client"},"Client"),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,"A user can query and interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles")," module using the CLI."),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles")," state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"desmos query profiles --help\n")),(0,r.kt)("h4",{id:"profile"},"profile"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," command allows users to query a profile given an address or a DTag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles profile [address_or_dtag] [flags]\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles profile jabbey\n")),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"profile:\n  '@type': /desmos.profiles.v2.Profile\n  account:\n    '@type': /cosmos.auth.v1beta1.BaseAccount\n    account_number: \"203491\"\n    address: desmos1xwazl8ftks4gn00y5x3c47auquc62ssu3nt23g\n    pub_key:\n      '@type': /cosmos.crypto.secp256k1.PubKey\n      key: AmyLTnelrZ0zgMx4bFl/n237JKlztLUkhPbHCq6uP/vw\n    sequence: \"10510\"\n  bio: just another dad in the cosmos\n  creation_date: \"2021-11-08T17:51:05.275853979Z\"\n  dtag: jabbey\n  nickname: jabbey\n  pictures:\n    cover: https://ipfs.infura.io/ipfs/QmTNUuMuu5FBVrFRWdwCNKRJj76oZa65n7ECVaKpQ2aFYN\n    profile: https://ipfs.infura.io/ipfs/QmWp7mAnj7UFd13675nEKvWzXKD57SqDA1dbJndV1S4PXD\n")),(0,r.kt)("h4",{id:"incoming-dtag-transfer-requests"},"incoming-dtag-transfer-requests"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"incoming-dtag-transfer-requests")," command allows users to query incoming DTag transfer requests, optionally specifying a recipient user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles incoming-dtag-transfer-requests [[receiver]] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles incoming-dtag-transfer-requests\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nrequests:\n- dtag_to_trade: Jack\n  receiver: desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu\n  sender: desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns\n')),(0,r.kt)("h4",{id:"chain-links"},"chain-links"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-links")," command allows users to query for chain links optionally specifying a user address, a chain name and a target address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles chain-links [[user]] [[chain_name]] [[target]] [flags]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"chain_name")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," one is specified as well"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"chain_name")," one is specified as well")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles chain-links desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd cosmos \n")),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"links:\n- address:\n    '@type': /desmos.profiles.v2.Bech32Address\n    prefix: cosmos\n    value: cosmos1jjectp30f5cp29nudaau94v87tkdxu5n2dvsdy\n  chain_config:\n    name: cosmos\n  creation_time: \"2021-10-25T16:00:17.028200092Z\"\n  proof:\n    plain_text: 7b226163636f756e745f6e756d626572223a2230222c22636861696e5f6964223a22636f736d6f736875622d34222c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a2230222c2264656e6f6d223a2261746f6d227d5d2c22676173223a2231227d2c226d656d6f223a22436861696e204c696e6b2050726f6f662c20444f4e2754204544495420414e595448494e47222c226d736773223a5b5d2c2273657175656e6365223a2230227d\n    pub_key:\n      '@type': /cosmos.crypto.secp256k1.PubKey\n      key: AmSl9tkQOEkT2LvcdReB/tHS1JQESJ6NeFkDEujwWcQz\n    signature:\n      '@type': /desmos.profiles.v2.SingleSignatureData\n      mode: SIGN_MODE_LEGACY_AMINO_JSON\n      signature: rt0E4vQpX/gDI4I8OFykuJCsYyuPlVVUqSpFsCzU8FcbG02kDcDQ+AipVvEBmV1LrDV0/U23Jwi6L8AnMdo1Zw==\n  user: desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd\npagination:\n  next_key: null\n  total: \"0\"\n")),(0,r.kt)("h4",{id:"app-links"},"app-links"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app-links")," allows users to query application links optionally specifying a user, an application name and a username."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles app-links [[user]] [[application]] [[username]] [flags]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"application")," parameter will only be used if the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," one is specified"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," parameter will only be used if the ",(0,r.kt)("inlineCode",{parentName:"li"},"application")," one is specified")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles app-links desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd twitter\n")),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'links:\n- creation_time: "2021-11-04T10:50:54.794047348Z"\n  data:\n    application: twitter\n    username: lucagraziotti\n  oracle_request:\n    call_data:\n      application: twitter\n      call_data: 7b226d6574686f64223a227477656574222c2276616c7565223a2231343536323036353331383830343233343330227d\n    client_id: desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd-twitter-lucagraziotti\n    id: "537363"\n    oracle_script_id: "32"\n  result:\n    success:\n      signature: 3558f0a50c68d48f66f808f7d12f90be07ffecf60bbdb67e514b3b00c0d30322644168a8369d991df65ff2f8e4890ab2ef5677a33a1304a1c1dff8e627296dde\n      value: 6c7563616772617a696f747469\n  state: APPLICATION_LINK_STATE_VERIFICATION_SUCCESS\n  user: desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd\npagination:\n  next_key: null\n  total: "0"\n')),(0,r.kt)("h4",{id:"parameters"},"parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," command allows users to get hte currently set parameters. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles parameters [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles parameters\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'params:\n  bio:\n    max_length: "1000"\n  dtag:\n    max_length: "30"\n    min_length: "3"\n    reg_ex: ^[A-Za-z0-9_]+$\n  nickname:\n    max_length: "1000"\n    min_length: "2"\n  oracle:\n    ask_count: "5"\n    execute_gas: "200000"\n    fee_amount: []\n    min_count: "3"\n    prepare_gas: "50000"\n    script_id: "32"\n')),(0,r.kt)("h3",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles")," module. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles --help\n")),(0,r.kt)("h4",{id:"save"},"save"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," command allows users to save their Desmos profile. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles save [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx profiles save \n    --dtag "JohnSnow" \\\n    --nickname "John Snow" \\\n    --bio "Son of Lyanna Stark and Rhaegar Targaryen" \\\n    --profile-pic "https://profilePic.jpg" \\\n    --cover-pic "https://profileCover.jpg"\n')),(0,r.kt)("h4",{id:"delete"},"delete"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," command allows users to delete their Desmos profile. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles delete [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles delete\n")),(0,r.kt)("h4",{id:"request-dtag-transfer"},"request-dtag-transfer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"request-dtag-transfer")," allows users to request the ownership transferring of a DTag from another user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles request-dtag-transfer [address] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles request-dtag-transfer desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")),(0,r.kt)("h4",{id:"cancel-dtag-transfer-request"},"cancel-dtag-transfer-request"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel-dtag-transfer-request")," allows users to cancel the transferring of a DTag ownership made towards the specified user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles cancel-dtag-transfer-request [recipient] [flags]\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles cancel-dtag-transfer-request desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")),(0,r.kt)("h4",{id:"accept-dtag-transfer-request"},"accept-dtag-transfer-request"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accept-dtag-transfer-request")," allows users to accept an incoming DTag transfer request specifying the new DTag that they will have after the ownership transferring is completed. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles accept-dtag-transfer-request [DTag] [address] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx profiles accept-dtag-transfer-request "NewJohnSnow" desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n')),(0,r.kt)("h4",{id:"refuse-dtag-transfer-request"},"refuse-dtag-transfer-request"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"refuse-dtag-transfer-request")," allows users to refuse an incoming DTag transfer request. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles refuse-dtag-transfer-request [sender] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles refuse-dtag-transfer-request desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")),(0,r.kt)("h4",{id:"link-chain"},"link-chain"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"link-chain")," command allows users to link a new chain account to their Desmos profile. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles link-chain [data-file] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles link-chain chain-link.json\n")),(0,r.kt)("h4",{id:"unlink-chain"},"unlink-chain"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unlink-chain")," allows users to unlink a previously linked chain account. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unlink-chain [chain-name] [address]\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx profiles unlink-chain "cosmos" cosmos18xnmlzqrqr6zt526pnczxe65zk3f4xgmndpxn2`\n')),(0,r.kt)("h4",{id:"link-app"},"link-app"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"link-app")," command allows users to link an external app account to their Desmos profile. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles link-app [src-port] [src-channel] [application] [username] [verification-call-data] [flags]\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx profiles link-app "profiles" "channel-0" "twitter" "twitter_user" "7B22757365726E616D65223A22526963636172"\n')),(0,r.kt)("h4",{id:"unlink-app"},"unlink-app"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unlink-app")," command allows users to unlink a previously linked application account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx profiles unlink-app [application] [username] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx profiles unlink-app "twitter" "twitter_user"\n')),(0,r.kt)("h2",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,"A user can query the ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles")," module gRPC endpoints. "),(0,r.kt)("h3",{id:"profile-1"},"Profile"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," endpoint allows users to query for a profile based on the given address or DTag. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/Profile\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"user": "jack"}\' localhost:9090 desmos.profiles.v2.Query/Profile\n')),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "profile": {\n    "@type": "/desmos.profiles.v2.Profile",\n    "account": {\n      "@type": "/cosmos.auth.v1beta1.BaseAccount",\n      "address": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu",\n      "pubKey": {\n        "@type": "/cosmos.crypto.secp256k1.PubKey",\n        "key": "AzAk6eCtT5MEXvWmC7khceZBjNE7CC56e8PtBTEqC0F9"\n      },\n      "sequence": "3"\n    },\n    "creationDate": "2022-04-21T08:22:58.743790408Z",\n    "dtag": "Jack",\n    "pictures": {}\n  }\n}\n')),(0,r.kt)("h3",{id:"incomingdtagtransferrequests"},"IncomingDTagTransferRequests"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IncomingDTagTransferRequests")," endpoint allows users to query for incoming DTag transfer requests. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/IncomingDTagTransferRequests\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"receiver": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu"}\' localhost:9090 desmos.profiles.v2.Query/IncomingDTagTransferRequests\n')),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requests": [\n    {\n      "dtagToTrade": "Jack",\n      "sender": "desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns",\n      "receiver": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"chainlinks"},"ChainLinks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainLinks")," endpoint allows users to query for chain links specifying an optional user, chain name and target. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/ChainLinks\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"chain_name")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," one is specified as well"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"chain_name")," one is specified as well")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd", "chain_name": "osmosis"}\' localhost:9090 desmos.profiles.v2.Query/ChainLinks\n')),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "links": [\n    {\n      "user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd",\n      "address": {\n        "@type": "/desmos.profiles.v2.Bech32Address",\n        "prefix": "osmo",\n        "value": "osmo1kdl9888p5ez2mt7w59anugx7z0ek927gvdvk7p"\n      },\n      "proof": {\n        "pubKey": {\n          "@type": "/cosmos.crypto.secp256k1.PubKey",\n          "key": "Av/eQ32q7EerWFX7CIxxguthkmlShmR+LIeOmIE+4Qm0"\n        },\n        "signature": {\n          "@type": "/desmos.profiles.v2.SingleSignatureData",\n          "mode": "SIGN_MODE_TEXTUAL",\n          "signature": "b8EYBePyOGDdLautzdiEXj2CR/0gpWyHMwoQfUizrG4q6qTX2ZivWf/NiKsmx9h2YHZq4OOxIwZV/vgf8J7ZLA=="\n        },\n        "plainText": "6465736d6f7331366336307938743876726132377a6a673261726c6364353864636b3963776e37703666777464"\n      },\n      "chainConfig": {\n        "name": "osmosis"\n      },\n      "creationTime": "2021-11-18T13:56:12.238062857Z"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"chainlinkowners"},"ChainLinkOwners"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainLinkOwners")," endpoint allows users to query for chain link owners given an optional chain name and target address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/ChainLinkOwners\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"p"},"chain_name")," is specified as well."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"chain_name": "osmosis", "target": "osmo1kdl9888p5ez2mt7w59anugx7z0ek927gvdvk7p"}\' localhost:9090 desmos.profiles.v2.Query/ChainLinkOwners\n')),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owners": [\n    {\n      "user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd",\n      "chain_name": "osmosis",\n      "target": "osmo1kdl9888p5ez2mt7w59anugx7z0ek927gvdvk7p"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"applicationlinks"},"ApplicationLinks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationLinks")," endpoint allows users to query for application links optionally specifying a user, application name and username. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/ApplicationLinks\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"application")," parameter will only be used if the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," one is specified"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," parameter will only be used if the ",(0,r.kt)("inlineCode",{parentName:"li"},"application")," one is specified")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd", "application": "twitter"}\' localhost:9090 desmos.profiles.v2.Query/ApplicationLinks\n')),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "links": [\n    {\n      "user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd",\n      "data": {\n        "application": "twitter",\n        "username": "lucagraziotti"\n      },\n      "state": "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS",\n      "oracleRequest": {\n        "id": "537363",\n        "oracleScriptId": "32",\n        "callData": {\n          "application": "twitter",\n          "callData": "7b226d6574686f64223a227477656574222c2276616c7565223a2231343536323036353331383830343233343330227d"\n        },\n        "clientId": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd-twitter-lucagraziotti"\n      },\n      "result": {\n        "success": {\n          "value": "6c7563616772617a696f747469",\n          "signature": "3558f0a50c68d48f66f808f7d12f90be07ffecf60bbdb67e514b3b00c0d30322644168a8369d991df65ff2f8e4890ab2ef5677a33a1304a1c1dff8e627296dde"\n        }\n      },\n      "creationTime": "2021-11-04T10:50:54.794047348Z"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"applicationlinkbyclientid"},"ApplicationLinkByClientID"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationLinkByClientID")," endpoint allows users to query an application link given a client id. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/ApplicationLinkByClientID\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"client_id": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd-twitter-lucagraziotti"}\' localhost:9090 desmos.profiles.v2.Query/ApplicationLinkByClientID\n')),(0,r.kt)("p",null,"Example Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "link": {\n    "user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd",\n    "data": {\n      "application": "twitter",\n      "username": "lucagraziotti"\n    },\n    "state": "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS",\n    "oracleRequest": {\n      "id": "537363",\n      "oracleScriptId": "32",\n      "callData": {\n        "application": "twitter",\n        "callData": "7b226d6574686f64223a227477656574222c2276616c7565223a2231343536323036353331383830343233343330227d"\n      },\n      "clientId": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd-twitter-lucagraziotti"\n    },\n    "result": {\n      "success": {\n        "value": "6c7563616772617a696f747469",\n        "signature": "3558f0a50c68d48f66f808f7d12f90be07ffecf60bbdb67e514b3b00c0d30322644168a8369d991df65ff2f8e4890ab2ef5677a33a1304a1c1dff8e627296dde"\n      }\n    },\n    "creationTime": "2021-11-04T10:50:54.794047348Z"\n  }\n}\n')),(0,r.kt)("h3",{id:"applicationlinkowners"},"ApplicationLinkOwners"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationLinkOwners")," endpoint allows users to query the application link owners given an optional application name and username. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/ApplicationLinkOwners\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"p"},"application")," one is specified as well. "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"application": "twitter", "user": "lucagraziotti"}\' localhost:9090 desmos.profiles.v2.Query/ApplicationLinkOwners\n')),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owners": [\n    {\n      "user": "desmos16c60y8t8vra27zjg2arlcd58dck9cwn7p6fwtd",\n      "application": "twitter",\n      "username": "lucagraziotti"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the current params of the ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles")," module. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.profiles.v2.Query/Params\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl localhost:9090 desmos.profiles.v2.Query/Params\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "nickname": {\n      "minLength": "Mg==",\n      "maxLength": "MTAwMA=="\n    },\n    "dtag": {\n      "regEx": "^[A-Za-z0-9_]+$",\n      "minLength": "Mw==",\n      "maxLength": "MzA="\n    },\n    "bio": {\n      "maxLength": "MTAwMA=="\n    },\n    "oracle": {\n      "scriptId": "32",\n      "askCount": "5",\n      "minCount": "3",\n      "prepareGas": "50000",\n      "executeGas": "200000"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"rest"},"REST"),(0,r.kt)("p",null,"A user can query the ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles")," module using REST endpoints. "),(0,r.kt)("h3",{id:"profile-2"},"Profile"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," endpoint allows users to query for a Desmos profile using a DTag or an address. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/profiles/{DTag or address}\n")),(0,r.kt)("h3",{id:"incoming-dtag-transfer-requests-1"},"Incoming DTag Transfer Requests"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dtag-transfer-requests")," endpoint allows users to query for incoming DTag transfer requests given an optional user address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/dtag-transfer-requests?receiver={address}\n")),(0,r.kt)("h3",{id:"chain-links-1"},"Chain Links"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-links")," endpoint allows users to query for chain links given an optional user, chain name and target. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/chain-links?user={user}&chain_name={chainName}&target={target}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"chain_name")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," one is specified as well"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"chain_name")," one is specified as well ")),(0,r.kt)("h3",{id:"chain-links-owners"},"Chain Links Owners"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-links/owners")," endpoint allows users to query for chain link owners given an optional chain name and target. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/chain-links/owners?chain_name={chainName}&target={target}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"p"},"chain_name")," is specified as well."),(0,r.kt)("h3",{id:"application-links"},"Application Links"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app-links")," endpoint allows users to query for application links given an optional user, application name and username. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/app-links?user={user}&application={application}&username={username}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"application")," parameter will only be used if the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," one is specified"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," parameter will only be used if the ",(0,r.kt)("inlineCode",{parentName:"li"},"application")," one is specified  ")),(0,r.kt)("h3",{id:"application-links-by-client-id"},"Application Links By Client ID"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app-links/clients")," endpoint allows users to get application links given a client id. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/app-links/clients/{client_id}\n")),(0,r.kt)("h3",{id:"application-links-owners"},"Application Links Owners"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app-links/owners")," endpoint allows users to query for application link owners specifying an optional application and username. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/app-links/owners?application={applicationName}&username={username}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," parameter will be used only if the ",(0,r.kt)("inlineCode",{parentName:"p"},"application")," one is specified as well."),(0,r.kt)("h3",{id:"params-1"},"Params"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," endpoint allows users to query for the module parameters. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/desmos/profiles/v2/params\n")))}m.isMDXComponent=!0}}]);