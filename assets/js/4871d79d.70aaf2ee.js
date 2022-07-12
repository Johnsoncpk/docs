"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26685],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],r={id:"setup",title:"Setup",sidebar_label:"Setup",slug:"setup"},l="Full node setup",d={unversionedId:"fullnode/setup",id:"fullnode/setup",title:"Setup",description:"Following you will find the instructions on how to manually setup your Desmos full node.",source:"@site/docs/03-fullnode/02-setup.md",sourceDirName:"03-fullnode",slug:"/fullnode/setup",permalink:"/next/fullnode/setup",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/03-fullnode/02-setup.md",tags:[],version:"current",lastUpdatedAt:1657610237,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:2,frontMatter:{id:"setup",title:"Setup",sidebar_label:"Setup",slug:"setup"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/fullnode/overview"},next:{title:"Use Cosmovisor",permalink:"/next/fullnode/cosmovisor"}},p={},u=[{value:"1. Build the software",id:"1-build-the-software",level:2},{value:"2. Initialize the Desmos working directory",id:"2-initialize-the-desmos-working-directory",level:2},{value:"3. Get the genesis file",id:"3-get-the-genesis-file",level:2},{value:"4. Setup seeds",id:"4-setup-seeds",level:2},{value:"5. State sync",id:"5-state-sync",level:2},{value:"Changing state sync height",id:"changing-state-sync-height",level:3},{value:"6. Full sync - Sync from block 1",id:"6-full-sync---sync-from-block-1",level:2},{value:"1. Downgrade the software",id:"1-downgrade-the-software",level:3},{value:"2. Disable state-sync",id:"2-disable-state-sync",level:3},{value:"3. Setup Cosmovisor",id:"3-setup-cosmovisor",level:3},{value:"7. (Optional) Edit snapshot config",id:"7-optional-edit-snapshot-config",level:2},{value:"8. (Optional) Change your database backend",id:"8-optional-change-your-database-backend",level:2},{value:"9. Open the proper ports",id:"9-open-the-proper-ports",level:2},{value:"10. Start the Desmos node",id:"10-start-the-desmos-node",level:2},{value:"11. (Optional) Configure the background service",id:"11-optional-configure-the-background-service",level:2},{value:"Service operations",id:"service-operations",level:3},{value:"Check the service status",id:"check-the-service-status",level:4},{value:"Check the node status",id:"check-the-node-status",level:4},{value:"Stopping the service",id:"stopping-the-service",level:4},{value:"10. Cosmovisor",id:"10-cosmovisor",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"full-node-setup"},"Full node setup"),(0,s.kt)("p",null,"Following you will find the instructions on how to manually setup your Desmos full node."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Requirements")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before starting, make sure you read the ",(0,s.kt)("a",{parentName:"p",href:"/next/fullnode/overview"},"overview")," to make sure your hardware meets the needed\nrequirements."))),(0,s.kt)("h2",{id:"1-build-the-software"},"1. Build the software"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Choose your DB backend")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before installing the software, a consideration must be done."),(0,s.kt)("p",{parentName:"div"},"By default, Desmos uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since\nversion ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally\nusing ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),", which, although still being experimental, is known to\nbe faster and could lead to lower syncing times. If you want to try out RocksDB you can take a look at\nour ",(0,s.kt)("a",{parentName:"p",href:"/next/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further."))),(0,s.kt)("p",null,"In your terminal, run the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure we are inside the home directory\ncd $HOME\n\n# Clone the Desmos software\ngit clone https://github.com/desmos-labs/desmos.git && cd desmos\n\n# Checkout the correct tag\ngit checkout tags/v2.3.1\n\n# Build the software\n# If you want to use the default database backend run\nmake install\n\n# If you want to use RocksDB run instead\nmake install DB_BACKEND=rocksdb\n")),(0,s.kt)("p",null,"If the software is built successfully, the ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos")," executable will be located inside your ",(0,s.kt)("inlineCode",{parentName:"p"},"$GOBIN")," path. If you setup\nyour environment variables correctly in the previous step, you should also be able to run it properly. To check this,\ntry running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos version --long\n")),(0,s.kt)("h2",{id:"2-initialize-the-desmos-working-directory"},"2. Initialize the Desmos working directory"),(0,s.kt)("p",null,"Configuration files and chain data will be stored inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"$HOME/.desmos")," directory by default. In order to create\nthis folder and all the necessary data we need to initialize a new full node using the ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos init")," command."),(0,s.kt)("p",null,"Starting from ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.15.0"),", you are now able to provide a custom seed when initializing your node. This will be\nparticularly useful because, in the case that you want to reset your node, you will be able to re-generate the same\nprivate node key instead of having to create a new node."),(0,s.kt)("p",null,"In order to provide a custom seed to your private key, you can do as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Get a new random seed by running"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'desmos keys add node --dry-run\n\n# Example\n# desmos keys add node --dry-run\n# - name: node\n#   type: local\n#   address: desmos126cw9j2wy099lttf2qx0qds6k7t4kdea5ualh9\n#   pubkey: desmospub1addwnpepqdpfv4lh0vqjvmu43spz4lq0l92qret9hv6007j4r28z05wuthw2jz3frd4\n#   mnemonic: ""\n#   threshold: 0\n#   pubkeys: []\n#\n#\n# **Important** write this mnemonic phrase in a safe place.\n# It is the only way to recover your account if you ever forget your password.\n#\n# sort curious village display voyage oppose dice idea mutual inquiry keep swim team direct tired pink clinic figure tiny december giant obvious clump chest\n')),(0,s.kt)("p",{parentName:"li"},"This will create a new key ",(0,s.kt)("strong",{parentName:"p"},"without")," adding it to your keystore, and output the underlying seed.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run the ",(0,s.kt)("inlineCode",{parentName:"p"},"init")," command using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--recover")," flag."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"desmos init <your_node_moniker> --recover\n")),(0,s.kt)("p",{parentName:"li"},"You can choose any ",(0,s.kt)("inlineCode",{parentName:"p"},"moniker")," value you like. It will be saved in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," under the ",(0,s.kt)("inlineCode",{parentName:"p"},".desmos")," working\ndirectory.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Insert the previously outputted secret recovery phrase (mnemonic phrase):"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"> Enter your bip39 mnemonic\nsort curious village display voyage oppose dice idea mutual inquiry keep swim team direct tired pink clinic figure tiny december giant obvious clump chest\n")),(0,s.kt)("p",{parentName:"li"},"This will generate the working files in ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos")),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"By default, running ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos init <your_node_moniker>")," without the ",(0,s.kt)("inlineCode",{parentName:"p"},"--recover")," flag will randomly generate a ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json"),". There is no way to regenerate this key if you lose it.\\\nWe recommend running this command with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--recover")," so that you can regenerate the same ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," from the secret recovery phrase (mnemonic phrase)."))))),(0,s.kt)("h2",{id:"3-get-the-genesis-file"},"3. Get the genesis file"),(0,s.kt)("p",null,"To connect to an existing network, or start a new one, a genesis file is required. The file contains all the settings\ntelling how the genesis block of the network should look like."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you are setting up a ",(0,s.kt)("strong",{parentName:"li"},"testnet")," node refer to this ",(0,s.kt)("a",{parentName:"li",href:"/next/testnet/join-public/genesis-file"},"procedure"),";"),(0,s.kt)("li",{parentName:"ul"},"If you are setting up a ",(0,s.kt)("strong",{parentName:"li"},"mainnet")," node refer to this ",(0,s.kt)("a",{parentName:"li",href:"/next/mainnet/genesis-file"},"procedure"),".")),(0,s.kt)("h2",{id:"4-setup-seeds"},"4. Setup seeds"),(0,s.kt)("p",null,"The next thing you have to do now is telling your node how to connect with other nodes that are already present on the\nnetwork. In order to do so, we will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"seeds")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"persistent_peers")," values of the ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml"),"\nfile."),(0,s.kt)("p",null,"Seed nodes are a particular type of nodes present on the network. Your fullnode will connect to them, and they will\nprovide it with a list of other fullnodes that are present on the network. Then, your fullnode will automatically\nconnect to such nodes. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you are looking for ",(0,s.kt)("strong",{parentName:"li"},"testnet")," seeds please check here: ",(0,s.kt)("a",{parentName:"li",href:"/next/testnet/join-public/seeds"},"Testnet seeds"),";"),(0,s.kt)("li",{parentName:"ul"},"If you are looking for ",(0,s.kt)("strong",{parentName:"li"},"mainnet")," seeds please check here: ",(0,s.kt)("a",{parentName:"li",href:"/next/mainnet/seeds"},"Mainnet seeds"),".")),(0,s.kt)("h2",{id:"5-state-sync"},"5. State sync"),(0,s.kt)("p",null,"Starting from Desmos ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.15.0"),", we've added the support for Tendermint'\ns ",(0,s.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/nodes/state-sync.html#configure-state-sync"},"state sync"),". This feature allows new nodes to\nsync with the chain extremely fast, by downloading snapshots created by other full nodes.\nHere below, you can find the links to check for the correct procedure depending on which network you're setting up your node:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you are setting up state-sync for the ",(0,s.kt)("strong",{parentName:"li"},"testnet")," follow the ",(0,s.kt)("a",{parentName:"li",href:"/next/testnet/join-public/state-sync"},"State sync testnet procedure"),";"),(0,s.kt)("li",{parentName:"ul"},"If you are setting up state-sync for the ",(0,s.kt)("strong",{parentName:"li"},"mainnet")," follow the ",(0,s.kt)("a",{parentName:"li",href:"/next/mainnet/state-sync"},"State sync mainnet procedure"),".")),(0,s.kt)("h3",{id:"changing-state-sync-height"},"Changing state sync height"),(0,s.kt)("p",null,"If you change the state sync height, you will need to perform these actions before trying to sync again:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you're running a ",(0,s.kt)("strong",{parentName:"li"},"validator node"),":",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Backup the ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.desmos/data/priv_validator_state.json"),";"),(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),";"),(0,s.kt)("li",{parentName:"ol"},"Restore the ",(0,s.kt)("inlineCode",{parentName:"li"},"priv_validator_state.json")," file."),(0,s.kt)("li",{parentName:"ol"},"Restart the node."))),(0,s.kt)("li",{parentName:"ul"},"If you're running a ",(0,s.kt)("em",{parentName:"li"},"full node"),":",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),";"),(0,s.kt)("li",{parentName:"ol"},"Restart the node.")))),(0,s.kt)("h2",{id:"6-full-sync---sync-from-block-1"},"6. Full sync - Sync from block 1"),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Full sync from scratch")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"With version ",(0,s.kt)("inlineCode",{parentName:"p"},"2.3.1")," it's no longer possible to sync the node from scratch. If, for any reason, you need to do it,\nplease follow the procedure below."))),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Remember that this procedure takes time (hours, or days) and you will not be able to perform any operation on the node in the meantime."))),(0,s.kt)("h3",{id:"1-downgrade-the-software"},"1. Downgrade the software"),(0,s.kt)("p",null,"The first thing you need to do in order to start sync from scratch is getting the correct Desmos version according to the network you're connecting to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/mainnet/full-sync"},(0,s.kt)("strong",{parentName:"a"},"Mainnet")),";"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/testnet/join-public/full-sync"},(0,s.kt)("strong",{parentName:"a"},"Testnet")),".")),(0,s.kt)("h3",{id:"2-disable-state-sync"},"2. Disable state-sync"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open the ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.desmos/config/config.toml")," file."),(0,s.kt)("li",{parentName:"ol"},"Disable state sync by setting ",(0,s.kt)("inlineCode",{parentName:"li"},"enable = false"),"."),(0,s.kt)("li",{parentName:"ol"},"Run a ",(0,s.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),".")),(0,s.kt)("h3",{id:"3-setup-cosmovisor"},"3. Setup Cosmovisor"),(0,s.kt)("p",null,"Since we're relying on the Cosmos SDK ",(0,s.kt)("inlineCode",{parentName:"p"},"x/upgrade")," module to update the network, you will need to set up Cosmovisor\nin order to handle the updates that happened at different heights in the past. Check how to do it ",(0,s.kt)("a",{parentName:"p",href:"/next/fullnode/cosmovisor"},"here"),"."),(0,s.kt)("h2",{id:"7-optional-edit-snapshot-config"},"7. (Optional) Edit snapshot config"),(0,s.kt)("p",null,"Currently, the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshot")," feature is enabled by the default. This means that your node will periodically create snapshots of the chain state and make them public, allowing other nodes to quickly join the network by syncing the application state at a given height."),(0,s.kt)("p",null,"By default, we have set Desmos to take snapshots every 500 blocks, and persist the last 2 snapshots, deleting older ones. If you want to provide other nodes with more (or less) frequent snapshots, you can do this by editing a couple of things inside your ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/app.toml")," file, under the ",(0,s.kt)("inlineCode",{parentName:"p"},"state-sync")," section:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},"# snapshot-interval specifies the block interval at which local state sync snapshots are\n# taken (0 to disable). Must be a multiple of pruning-keep-every.\nsnapshot-interval = 500\n\n# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).\nsnapshot-keep-recent = 2\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note: Make sure that snapshot-interval is a multiple of ",(0,s.kt)("inlineCode",{parentName:"strong"},"pruning-keep-every")," in the ",(0,s.kt)("inlineCode",{parentName:"strong"},"base")," section")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'pruning-keep-recent = "100"\npruning-keep-every = "500"\npruning-interval = "10"\n')),(0,s.kt)("p",null,"You can find out more about pruning ",(0,s.kt)("a",{parentName:"p",href:"/next/fullnode/overview#understanding-pruning"},"here"),".\nYou can find out more about pruning ",(0,s.kt)("a",{parentName:"p",href:"/next/fullnode/overview#understanding-pruning"},"here"),"."),(0,s.kt)("h2",{id:"8-optional-change-your-database-backend"},"8. (Optional) Change your database backend"),(0,s.kt)("p",null,"If you would like to run your node using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," as the database\nbackend, and you have correctly built the Desmos binaries to work with it following the instructions\nat ",(0,s.kt)("a",{parentName:"p",href:"#1-build-the-software"},"point 1"),", there is one more thing you need to do."),(0,s.kt)("p",null,"In order to tell Tendermint to use RocksDB as its database backend engine, you are required to change the following like\ninside the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "goleveldb"\n')),(0,s.kt)("p",null,"To become"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "rocksdb"\n')),(0,s.kt)("h2",{id:"9-open-the-proper-ports"},"9. Open the proper ports"),(0,s.kt)("p",null,"Now that everything is in place to start the node, the last thing to do is to open up the proper ports."),(0,s.kt)("p",null,"Your node uses vary different ports to interact with the rest of the chain. Particularly, it relies on:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"26656")," to listen for incoming connections from other nodes;"),(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"26657")," to expose the RPC service to clients.")),(0,s.kt)("p",null,"A part from those, it also uses:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"9090")," to expose the ",(0,s.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC")," service that allows clients to query the chain state;"),(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"1317")," to expose the REST APIs service.")),(0,s.kt)("p",null,"While opening any ports are optional, it is beneficial to the whole network if\nyou open port ",(0,s.kt)("inlineCode",{parentName:"p"},"26656"),". This would allow new nodes to connect to you as a peer, making them sync faster and the connections more reliable."),(0,s.kt)("p",null,"For this reason, we will be opening port ",(0,s.kt)("inlineCode",{parentName:"p"},"26656")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"ufw"),". \\\nBy default, ",(0,s.kt)("inlineCode",{parentName:"p"},"ufw")," is not enabled. In order to enable it please run the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# running this should show it is inactive\nsudo ufw status\n\n# Turn on ssh if you need it\nsudo ufw allow ssh\n\n# Accept connections to port 26656 from any address\nsudo ufw allow from any to any port 26656 proto tcp\n\n# enable ufw\nsudo ufw enable\n\n# check ufw is running\nsudo ufw status\n")),(0,s.kt)("p",null,"If you also want to run a gRPC server, RPC node or the REST APIs, you also need to remember to open the related ports as\nwell."),(0,s.kt)("h2",{id:"10-start-the-desmos-node"},"10. Start the Desmos node"),(0,s.kt)("p",null,"After setting up the binary and opening up ports, you are now finally ready to start your node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Run Desmos full node\ndesmos start\n")),(0,s.kt)("p",null,"The full node will connect to the peers and start syncing. You can check the status of the node by executing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Check status of the node\ndesmos status\n")),(0,s.kt)("p",null,"You should see an output like the following one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NodeInfo": {\n    "protocol_version": {\n      "p2p": "8",\n      "block": "11",\n      "app": "0"\n    },\n    "id": "84cc13d6acf22c32c209f4205d2693f70f458dde",\n    "listen_addr": "tcp://0.0.0.0:26656",\n    "network": "morpheus-13001",\n    "version": "",\n    "channels": "40202122233038606100",\n    "moniker": "fullnode",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://0.0.0.0:26657"\n    }\n  },\n  "SyncInfo": {\n    "latest_block_hash": "9BA7801C0935C4E18B4E2F8C6E8A2FF4C598C8E5F71A94113D2F0595524FD4E3",\n    "latest_app_hash": "375C9F0E4E63B7ACAD497F8DEDF5E2382F469668DE671B2FF92A5D2B8B50C6D2",\n    "latest_block_height": "204393",\n    "latest_block_time": "2021-02-03T08:03:06.448549383Z",\n    "earliest_block_hash": "839FEB9ED0257B71116CE54618C7E3C15189239CB571066DDBE9E0F1C101DCC8",\n    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n    "earliest_block_height": "1",\n    "earliest_block_time": "2021-01-20T07:00:00Z",\n    "catching_up": false\n  },\n  "ValidatorInfo": {\n    "Address": "E457913A98EC0F9251BB40008E6680A8EFF93F99",\n    "PubKey": {\n      "type": "tendermint/PubKeyEd25519",\n      "value": "BLT8jjQ+ODKa0ERcrhHfOVFVVrJDq7hxyXx6bLXnCdw="\n    },\n    "VotingPower": "0"\n  }\n}\n')),(0,s.kt)("p",null,"If you see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"catching_up")," value is ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," under the ",(0,s.kt)("inlineCode",{parentName:"p"},"sync_info"),", it means that you are fully synced. If it\nis ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", it means your node is still syncing. You can get the ",(0,s.kt)("inlineCode",{parentName:"p"},"catching_up")," value by simply running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n\n# Example\n# $ desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n# {\n#   "catching_up": false\n# }\n')),(0,s.kt)("p",null,"After your node is fully synced, you can consider running your full node as a ",(0,s.kt)("a",{parentName:"p",href:"/next/validators/setup"},"validator node"),"."),(0,s.kt)("h2",{id:"11-optional-configure-the-background-service"},"11. (Optional) Configure the background service"),(0,s.kt)("p",null,"To allow your ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos")," instance to run in the background as a service you need to execute the following command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"tee /etc/systemd/system/desmosd.service > /dev/null <<EOF\n[Unit]\nDescription=Desmos Full Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOBIN/desmos start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"Once you have successfully created the service, you need to enable it. You can do so by running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable desmosd\n")),(0,s.kt)("p",null,"After this, you can run it by executing"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start desmosd\n")),(0,s.kt)("h3",{id:"service-operations"},"Service operations"),(0,s.kt)("h4",{id:"check-the-service-status"},"Check the service status"),(0,s.kt)("p",null,"If you want to see if the service is running properly, you can execute"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status desmosd\n")),(0,s.kt)("p",null,"If everything is running smoothly you should see something like"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl status desmosd\n\u25cf desmos.service - Desmos Node\n   Loaded: loaded (/etc/systemd/system/desmosd.service; enabled; vendor preset:\n   Active: active (running) since Fri 2020-01-17 10:23:12 CET; 2min 3s ago\n Main PID: 11318 (desmos)\n    Tasks: 10 (limit: 4419)\n   CGroup: /system.slice/desmosd.service\n           \u2514\u250011318 /root/go/bin/desmos start\n")),(0,s.kt)("h4",{id:"check-the-node-status"},"Check the node status"),(0,s.kt)("p",null,"If you want to see the current status of the node, you can do so by running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u desmosd -f\n")),(0,s.kt)("h4",{id:"stopping-the-service"},"Stopping the service"),(0,s.kt)("p",null,"If you wish to stop the service from running, you can do so by running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop desmosd\n")),(0,s.kt)("p",null,"To check the successful stop, execute ",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl status desmos"),". This should return"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl status desmosd\n\u25cf desmos.service - Desmos Node\n   Loaded: loaded (/etc/systemd/system/desmosd.service; enabled; vendor preset: enabled)\n   Active: failed (Result: exit-code) since Fri 2020-01-17 10:28:04 CET; 3s ago\n  Process: 11318 ExecStart=/root/go/bin/desmos start (code=exited, status=143)\n Main PID: 11318 (code=exited, status=143)\n")),(0,s.kt)("h2",{id:"10-cosmovisor"},"10. Cosmovisor"),(0,s.kt)("p",null,"In order to do automatic on-chain upgrades we will be using cosmovisor. Please check out ",(0,s.kt)("a",{parentName:"p",href:"/next/fullnode/cosmovisor"},"Using Cosmovisor")," for information on how to set this up."))}m.isMDXComponent=!0}}]);