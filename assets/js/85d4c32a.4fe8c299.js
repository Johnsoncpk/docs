"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[67634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},s="Concepts",r={unversionedId:"developers/modules/profiles/concepts",id:"developers/modules/profiles/concepts",title:"Concepts",description:"Profile",source:"@site/docs/02-developers/02-modules/profiles/02-concepts.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/concepts",permalink:"/next/developers/modules/profiles/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/profiles/02-concepts.md",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/developers/modules/profiles/overview"},next:{title:"State",permalink:"/next/developers/modules/profiles/state"}},l={},p=[{value:"Profile",id:"profile",level:2},{value:"DTag",id:"dtag",level:3},{value:"Nickname",id:"nickname",level:3},{value:"Bio",id:"bio",level:3},{value:"Pictures",id:"pictures",level:3},{value:"DTag Transfer Request",id:"dtag-transfer-request",level:2},{value:"Chain Link",id:"chain-link",level:2},{value:"Signature",id:"signature",level:3},{value:"SingleSignature",id:"singlesignature",level:4},{value:"CosmosMultiSignature",id:"cosmosmultisignature",level:4},{value:"Creating a chain link",id:"creating-a-chain-link",level:3},{value:"1. Create the ownership proofs",id:"1-create-the-ownership-proofs",level:4},{value:"2. Create the link",id:"2-create-the-link",level:4},{value:"Using IBC",id:"using-ibc",level:5},{value:"LinkChainAccountPacketData",id:"linkchainaccountpacketdata",level:6},{value:"Using the CLI",id:"using-the-cli",level:5},{value:"Default External Address",id:"default-external-address",level:2},{value:"Application Link",id:"application-link",level:2},{value:"Creating an application link",id:"creating-an-application-link",level:3},{value:"States of an application link",id:"states-of-an-application-link",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"concepts"},"Concepts"),(0,i.kt)("h2",{id:"profile"},"Profile"),(0,i.kt)("p",null,"A Desmos profile is a wrap around a common Cosmos on-chain account that adds some fields to it.\nIt is built in order to represent an on-chain social identity that will be unique across the multiple social networks built on top of Desmos. "),(0,i.kt)("p",null,"Each profile is supposed to identify a single ",(0,i.kt)("strong",{parentName:"p"},"on-chain identity"),", but one human user can have multiple profiles connected each one to a different on-chain address. This is particularly useful if you want to have one private profile, one company profile and so on."),(0,i.kt)("h3",{id:"dtag"},"DTag"),(0,i.kt)("p",null,"The most important information about a profile it's the ",(0,i.kt)("inlineCode",{parentName:"p"},"DTag"),", which represents the ",(0,i.kt)("strong",{parentName:"p"},"unique human-readable name")," associated to such profile. "),(0,i.kt)("p",null,"To understand it better, the best reference for this would be Twitter's handles: every user has a unique handle that other users can use to tag them. For example, Jack Dorsey's Twitter handle is ",(0,i.kt)("inlineCode",{parentName:"p"},"jack")," (",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jack"},"@jack")," on Twitter)."),(0,i.kt)("p",null,"If Jack registered a profile inside Desmos, he would probably like to have the same DTag as his Twitter handle: ",(0,i.kt)("inlineCode",{parentName:"p"},"jack")," (which would be referenced as ",(0,i.kt)("inlineCode",{parentName:"p"},"@jack")," inside Desmos too). "),(0,i.kt)("p",null,"When creating your profile, make sure you select a DTag that other people can easily remember if you want them to later find you inside Desmos."),(0,i.kt)("p",null,"Note that you ",(0,i.kt)("strong",{parentName:"p"},"cannot choose whatever DTag you want"),". Instead, you should reference the on-chain parameters to make sure that you respect the rules that have been set. Such rules might contain a set of characters allowed and/or a min/max length the DTag must adhere to. "),(0,i.kt)("h3",{id:"nickname"},"Nickname"),(0,i.kt)("p",null,"A profile nickname represents what on other social networks is often called ",(0,i.kt)("em",{parentName:"p"},"username"),". This is a non-unique name the user decides should be used to identify them. "),(0,i.kt)("p",null,"Such nickname has pretty much no restriction: it can contain any character and has only to be at least 2 characters long. "),(0,i.kt)("h3",{id:"bio"},"Bio"),(0,i.kt)("p",null,"A profile biography allows the user to shortly describe their profile and their personality. It allows up to 1.000 characters and can contain anything the user might want to display publicly to everyone."),(0,i.kt)("h3",{id:"pictures"},"Pictures"),(0,i.kt)("p",null,"A profile owner can specify the profile picture and the cover picture that should be used when displaying the full details of their identity."),(0,i.kt)("h2",{id:"dtag-transfer-request"},"DTag Transfer Request"),(0,i.kt)("p",null,"A DTag transfer request is the method that a user A has in order to ask another user B if they are willing to give them their DTag. This process is particularly useful when trading DTags. Once a request has been made, it can be either accepted/rejected by the recipient, or it can be canceled by the sender themselves if they changed their mind."),(0,i.kt)("h2",{id:"chain-link"},"Chain Link"),(0,i.kt)("p",null,"A chain link represents a link to an external chain account that has been created by the user to connect their Desmos profile to such account. These links can be created either offline or using the IBC protocol and the provided packet data types."),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("p",null,"To be properly verified, a chain link must contain a signature that proves the user owns both the Desmos address and the external account that they are trying to link together. To do this, we require the user to cryptographically sign their Desmos address using the private key associated to the external account, and then publish the signature and the public key that should be used to verify it inside the chain link's proof. "),(0,i.kt)("p",null,"Currently, we support two types of signatures: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CosmosMultiSignature")," should be used when ")),(0,i.kt)("h4",{id:"singlesignature"},"SingleSignature"),(0,i.kt)("p",null,"This signature type should be used when the external wallet is made of a single key. It must specify the type of value that has been signed, as well as the signature bytes. "),(0,i.kt)("p",null,"Single signature value types can be different to support multiple use cases: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIGNATURE_VALUE_TYPE_RAW")," should be used when you have direct access to the external account, and you can sign the Desmos address directly without the need of any wrapping structure;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIGNATURE_VALUE_TYPE_COSMOS_DIRECT")," should be used when you need to wrap the Desmos address into the memo field of a Protobuf-encoded transaction. This might be useful when wanting to support the creation of chain links through external wallets (i.e. Keplr) that only support the signing of transactions;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIGNATURE_VALUE_TYPE_COSMOS_AMINO")," should be used when you need to wrap the Desmos address into the memo field of an Amino-encoded transaction. This might be useful when wanting to support the creation of chain links through an external wallet (i.e. Ledger) that only allows signing Amino-encoded transactions;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN")," should be used when you need to wrap the Desmos address within an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/go-ethereum/pull/2940"},"EVM ",(0,i.kt)("inlineCode",{parentName:"a"},"personal_sign")," signature"),". This might be useful when wanting to support the creation of chain links though an external wallet (i.e. MetaMask) that allows this method.")),(0,i.kt)("h4",{id:"cosmosmultisignature"},"CosmosMultiSignature"),(0,i.kt)("p",null,"This signature type should be used when the external account is a multi-sig account (this might be the case of validators wanting to connect their Desmos profile to an external Cosmos-based account)."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bit_array")," field should be populated with the same value that is returned after the multi-sig creation process, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"signatures")," field should contain the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleSignature")," that make up the multi-sig."),(0,i.kt)("h3",{id:"creating-a-chain-link"},"Creating a chain link"),(0,i.kt)("h4",{id:"1-create-the-ownership-proofs"},"1. Create the ownership proofs"),(0,i.kt)("p",null,"In order to create a valid chain link ownership proof, the following steps are needed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"get the address of the Desmos profile that should be connected to the external address;"),(0,i.kt)("li",{parentName:"ol"},"sign the Desmos address using your external account private key;"),(0,i.kt)("li",{parentName:"ol"},"assemble the signature, Desmos address and public key into a ",(0,i.kt)("inlineCode",{parentName:"li"},"Proof")," object.")),(0,i.kt)("p",null,"Here is an example of how to create a proof (in JavaScript) using a raw signature of the Desmos address. Please note that different value types might be used as described ",(0,i.kt)("a",{parentName:"p",href:"#singlesignature"},"above"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const desmosAddress = "cosmos15uc89vnzufu5kuhhsxdkltt38zfx8vcyggzwfm";\nconst hexEncodedDesmosAddress = hex.encode(utf8.decode(desmosAddress));\nconst signature = base64.encode(externalWallet.sign(utf8.decode(desmosAddress)));\n\nconst proof = {\n    "pub_key": {\n        "@type": "/cosmos.crypto.secp256k1.PubKey",\n        "key": base64.encode(externalWallet.pubKeyBytes)\n    },\n   "signature": {\n      "@type": "/desmos.profiles.v3.SingleSignature",\n      "value_type": 1,\n      "signature": signature,\n   },\n    "plain_text": hexEncodedDesmosAddress\n}\n')),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"pub_key")," field must be encoded using Protobuf and must be compatible with the public key types that are currently supported. These are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/proto/cosmos/crypto/ed25519/keys.proto"},"Ed25519")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/proto/cosmos/crypto/secp256k1/keys.proto"},"Secp256k1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/proto/cosmos/crypto/secp256r1/keys.proto"},"Secp256r1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evmos/ethermint/blob/main/proto/ethermint/crypto/v1/ethsecp256k1/keys.proto"},"EthSecp256k1"))),(0,i.kt)("h4",{id:"2-create-the-link"},"2. Create the link"),(0,i.kt)("p",null,"Once you have created the two ownership proofs, you are now ready to create the link. This can be done in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#using-ibc"},"Using IBC"),";"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#using-the-cli"},"Using the CLI"),".")),(0,i.kt)("h5",{id:"using-ibc"},"Using IBC"),(0,i.kt)("p",null,"This is the way that you want to use when integrating the Desmos connection from your chain.",(0,i.kt)("br",{parentName:"p"}),"\n","To implement the IBC capability of connecting an external account to a Desmos profile, the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/profiles")," module supports the following packet data type."),(0,i.kt)("h6",{id:"linkchainaccountpacketdata"},"LinkChainAccountPacketData"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LinkChainAccountPacketData")," defines the object that should be sent inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgSendPacket")," when wanting to link an external chain to a Desmos profile using IBC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/x/profiles/types/models_packets.pb.go#L28-L43\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"SourceAddress")," field must be one of the currently supported types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Base58Address")," if the external address is represented by the Base58 encoded public key of the account;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bech32Address")," if the external address is Bech32 encoded;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HexAddress")," if the external address is hex encoded.")),(0,i.kt)("h5",{id:"using-the-cli"},"Using the CLI"),(0,i.kt)("p",null,"You can easily create a chain link using the CLI by running two commands:"),(0,i.kt)("p",null,"1.",(0,i.kt)("inlineCode",{parentName:"p"},"desmos create-chain-link-json"),"\nThis will start an interactive prompt session allowing you to generate the proper JSON file containing all the linkage information."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"desmos tx profiles link-chain [/path/to/link_file.json]"),"\nThis will effectively link your Desmos profile to the external chain address. The required argument is the (absolute) path to the file generated using the ",(0,i.kt)("inlineCode",{parentName:"li"},"create-chain-link-json")," command.")),(0,i.kt)("h2",{id:"default-external-address"},"Default External Address"),(0,i.kt)("p",null,"Since each user can have multiple links to the same chain, we allow users to specify which address should be considered as the default one for each chain. By default, the first link created for each chain will be considered as the default one. Also, if a chain link was set as the default one and is later deleted, the oldest chain link for the same chain (if any) will be used as the default one."),(0,i.kt)("h2",{id:"application-link"},"Application Link"),(0,i.kt)("p",null,"An application link (abbr. ",(0,i.kt)("em",{parentName:"p"},"app link"),") represents a link to an external (and possibly centralized) application. Such links are one of the easiest way for Desmos profile owners to verify they are trustworthy: if you have a lot of followers on Twitter, connecting your Desmos profile to your Twitter account will make it easier for users to make sure no other people is trying to impersonate you."),(0,i.kt)("h3",{id:"creating-an-application-link"},"Creating an application link"),(0,i.kt)("p",null,"Application links validity is checked using a multi-step verification process described inside the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/themis"},(0,i.kt)("em",{parentName:"a"},'"Themis"')," repository"),"."),(0,i.kt)("h3",{id:"states-of-an-application-link"},"States of an application link"),(0,i.kt)("p",null,"During its lifetime, an application link can have different states. Here it is a comprehensive lists of all the values the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," field can assume: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED")," if the link has just been created, and the verification process is pending to be started;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_STARTED")," if the verification process has started;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_ERROR")," if the verification process ended with an error;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")," if the verification process ended with success;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_TIMED_OUT")," if the verification process expired due to a timeout.")),(0,i.kt)("p",null,"Based on whether the application has been verified properly (",(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_VERIFICATION_SUCCESS"),") or an error happened (",(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_VERIFICATION_ERROR"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," field will either be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Result_Success")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Result_Failed"),". Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," field will remain empty in all other cases (including the ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_TIMED_OUT"),")."))}u.isMDXComponent=!0}}]);