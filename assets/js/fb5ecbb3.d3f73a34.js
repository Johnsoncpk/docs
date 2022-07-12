"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[43303],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"migrating",title:"Migrating",sidebar_position:5},d="Migrating a validator",s={unversionedId:"validators/migrating",id:"version-3/validators/migrating",title:"Migrating",description:"In some cases, you might want to move your running validator from one server to another. For example, this might be the case if you find a cheaper alternative or if your host does not meet the requirements.",source:"@site/versioned_docs/version-3/04-validators/04-migrating.md",sourceDirName:"04-validators",slug:"/validators/migrating",permalink:"/3/validators/migrating",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/04-validators/04-migrating.md",tags:[],version:"3",lastUpdatedAt:1657618469,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:5,frontMatter:{id:"migrating",title:"Migrating",sidebar_position:5},sidebar:"version-3/docs",previous:{title:"Halting",permalink:"/3/validators/halting"},next:{title:"Common Problems",permalink:"/3/validators/common-problems"}},p={},u=[{value:"1. Setup new fullnode",id:"1-setup-new-fullnode",level:2},{value:"2. Migrate Data",id:"2-migrate-data",level:2},{value:"Stopping both the validator and the newly synced full node",id:"stopping-both-the-validator-and-the-newly-synced-full-node",level:3},{value:"Backup the following data in the validator node",id:"backup-the-following-data-in-the-validator-node",level:3},{value:"Migrating data to the new fullnode",id:"migrating-data-to-the-new-fullnode",level:3},{value:"Startup the new validator node",id:"startup-the-new-validator-node",level:3},{value:"(Optional) Recover your key",id:"optional-recover-your-key",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-a-validator"},"Migrating a validator"),(0,i.kt)("p",null,"In some cases, you might want to move your running validator from one server to another. For example, this might be the case if you find a cheaper alternative or if your host does not meet the requirements."),(0,i.kt)("p",null,"In this case, what you need to do is following a two-step procedure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set and fully sync up a fullnode"),(0,i.kt)("li",{parentName:"ol"},"Migrate data from old node to new node")),(0,i.kt)("h2",{id:"1-setup-new-fullnode"},"1. Setup new fullnode"),(0,i.kt)("p",null,"To avoid as much missed blocks as possible it is recommended that you setup a new server and fully sync up a full node first. To do this,\nyou can read the guide ",(0,i.kt)("a",{parentName:"p",href:"/3/fullnode/setup"},"here"),"."),(0,i.kt)("p",null,"Proceed to step 2 only if your new node has caught up."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n')),(0,i.kt)("h2",{id:"2-migrate-data"},"2. Migrate Data"),(0,i.kt)("h3",{id:"stopping-both-the-validator-and-the-newly-synced-full-node"},"Stopping both the validator and the newly synced full node"),(0,i.kt)("p",null,"In order to avoid as much side affects as possible we will be stopping both nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl stop desmos\n")),(0,i.kt)("h3",{id:"backup-the-following-data-in-the-validator-node"},"Backup the following data in the validator node"),(0,i.kt)("p",null,"In order to properly migrate our validator node to another server we will need to backup the following data:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The validator private key.\nThis is located inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/priv_validator_key.json")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The validator consensus state.\nThis is located inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.desmos/data/priv_validator_state.json")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you keep your keys on the node make sure you have the secret recovery phrase (mnemonic phrase) associated with your key(s)."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Do not delete your old node yet")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We highly suggest you to delete your old node instance once that the new node is running properly. This will allow you to recover any information if you forgot to do so."))),(0,i.kt)("h3",{id:"migrating-data-to-the-new-fullnode"},"Migrating data to the new fullnode"),(0,i.kt)("p",null,"With both nodes stopped we will be copying the backed up data in to the newly synced fullnode."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At this point, both nodes should not be running. This is to prevent any possible side effects such as double signing"))),(0,i.kt)("p",null,"Transfer the following backed up files from the old node to the new node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.desmos/config/priv_validator_key.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.desmos/data/priv_validator_state.json"))),(0,i.kt)("h3",{id:"startup-the-new-validator-node"},"Startup the new validator node"),(0,i.kt)("p",null,"Once you have moved your ",(0,i.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"priv_validator_state")," to the newly synced fullnode, it will be recognized as the same validator node."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"priv_validator_key")," should only be online from a single instance. A good practice would be to remove or rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," in the old node so that even if you accidentally start running both nodes, the validator key would only be online for one of them."))),(0,i.kt)("p",null,"With the old validator node stopped, start up the new node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl start desmos\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Wait before deleting the old node")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We suggest you to wait before deleting the old node. Instead of waiting only to see the blocks syncing, make sure your new node is actually signing blocks as your validator. You will see this by looking at your validator uptime on our ",(0,i.kt)("a",{parentName:"p",href:"https://morpheus.desmos.network/validators"},"explorer"),". If everything is working properly, the uptime should slowly increase."))),(0,i.kt)("h3",{id:"optional-recover-your-key"},"(Optional) Recover your key"),(0,i.kt)("p",null,"If you originally had your key in the previous server you can easily add it back using the secret recovery phrase (mnemonic phrase) you had backed up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"desmos keys add <key_name> --recover\n")))}c.isMDXComponent=!0}}]);