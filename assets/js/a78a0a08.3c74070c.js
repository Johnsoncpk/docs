"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[74150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"state-sync",title:"State Sync",sidebar_label:"State Sync",slug:"state-sync"},s="State sync testnet",d={unversionedId:"testnet/join-public/state-sync",id:"testnet/join-public/state-sync",title:"State Sync",description:"The following seed nodes are to be used when configuring a full node for the testnet. If you are looking for mainnet seed nodes, please refer to this instead.",source:"@site/docs/05-testnet/03-join-public/04-state-sync.md",sourceDirName:"05-testnet/03-join-public",slug:"/testnet/join-public/state-sync",permalink:"/next/testnet/join-public/state-sync",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/05-testnet/03-join-public/04-state-sync.md",tags:[],version:"current",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:4,frontMatter:{id:"state-sync",title:"State Sync",sidebar_label:"State Sync",slug:"state-sync"},sidebar:"docs",previous:{title:"Seeds",permalink:"/next/testnet/join-public/seeds"},next:{title:"Full Sync",permalink:"/next/testnet/join-public/full-sync"}},p={},m=[],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-sync-testnet"},"State sync testnet"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Testnet only   ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following seed nodes are to be used when configuring a full node for the ",(0,i.kt)("strong",{parentName:"p"},"testnet"),". If you are looking for mainnet seed nodes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/next/mainnet/state-sync"},"this")," instead."))),(0,i.kt)("p",null,"In order to use this feature, you will have to edit a couple of things inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file,\nunder the ",(0,i.kt)("inlineCode",{parentName:"p"},"statesync")," section:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable state sync by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"enable=true"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the RPC addresses from where to get the snapshots using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc_servers")," field to\n",(0,i.kt)("inlineCode",{parentName:"p"},"seed-4.morpheus.desmos.network:26657,seed-5.morpheus.desmos.network:26657"),".",(0,i.kt)("br",{parentName:"p"}),"\n","These are two of our fullnodes that are set up to create periodic snapshots every 600 blocks;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get a trusted chain height, and the associated block hash. To do this, you will have to:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Get the current chain height by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s http://seed-4.morpheus.desmos.network:26657/commit | jq "{height: .result.signed_header.header.height}"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once you have the current chain height, get a height that is a little lower (200 blocks) than the current one.",(0,i.kt)("br",{parentName:"p"}),"\n","To do this you can execute:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s http://seed-4.morpheus.desmos.network:26657/commit?height=<your-height> | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"\n\n# Example\n# curl -s http://seed-4.morpheus.desmos.network:26657/commit?height=100000 | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"\n')))),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now that you have a trusted height and block hash, use those values as the ",(0,i.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"trust_hash")," values. Also,\nmake sure they're the right values for the Desmos version you're starting to synchronize:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"State sync height range")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Desmos version")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0 - 1235764")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v0.17.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1235765 - 1415529")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v0.17.4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1415530 - 2121235")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v0.17.6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2121236 - 2226899")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v1.0.4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2226900 - 2589024")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2.0.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2589025 - 2643234")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2.1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2643235 - 2756259")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2.2.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2756260 - 3130831")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2.3.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2756260 - 3130831")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2.3.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"3130831 - 5842610")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2.3.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5842610 - 6233130")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v3.2.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"6233130 - 6339185")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v4.0.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"> 6339185")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v4.1.0"))))))))),(0,i.kt)("p",null,"Here is an example of what the ",(0,i.kt)("inlineCode",{parentName:"p"},"statesync")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file should look like in the end (the ",(0,i.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"trust_hash")," should contain your values instead):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'enable = true\n\nrpc_servers = "seed-4.morpheus.desmos.network:26657,seed-5.morpheus.desmos.network:26657"\ntrust_height = 16962\ntrust_hash = "E8ED7A890A64986246EEB02D7D8C4A6D497E3B60C0CAFDDE30F2EE385204C314"\ntrust_period = "336h0m0s"\n')))}u.isMDXComponent=!0}}]);