"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27944],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"security",title:"Security",sidebar_position:2},l=void 0,c={unversionedId:"mainnet/security",id:"version-2.3/mainnet/security",title:"Security",description:"Validator Security",source:"@site/versioned_docs/version-2.3/06-mainnet/security.md",sourceDirName:"06-mainnet",slug:"/mainnet/security",permalink:"/2.3/mainnet/security",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/06-mainnet/security.md",tags:[],version:"2.3",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:2,frontMatter:{id:"security",title:"Security",sidebar_position:2},sidebar:"version-2.3/docs",previous:{title:"Full Sync",permalink:"/2.3/mainnet/full-sync"}},d={},u=[{value:"Validator Security",id:"validator-security",level:2},{value:"Key Management System &amp; Hardware Security Modules",id:"key-management-system--hardware-security-modules",level:2},{value:"Sentry Nodes (DDOS Protection)",id:"sentry-nodes-ddos-protection",level:2}],p={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validator-security"},"Validator Security"),(0,a.kt)("p",null,"Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network."),(0,a.kt)("h2",{id:"key-management-system--hardware-security-modules"},"Key Management System & Hardware Security Modules"),(0,a.kt)("p",null,"It is critical that an attacker cannot steal a validator's key. If this is possible,\nit puts the entire stake delegated to the compromised validator at risk.\nHSM alongside KMS are an important strategies for mitigating this risk."),(0,a.kt)("p",null,"You can take a look on how to setup a KMS with or without HSM by reading ",(0,a.kt)("a",{parentName:"p",href:"/2.3/mainnet/kms/"},"here"),"."),(0,a.kt)("h2",{id:"sentry-nodes-ddos-protection"},"Sentry Nodes (DDOS Protection)"),(0,a.kt)("p",null,"Validators are responsible for ensuring that the network can sustain denial of service attacks."),(0,a.kt)("p",null,"One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture."),(0,a.kt)("p",null,"Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links to the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones."),(0,a.kt)("p",null,"Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network."),(0,a.kt)("p",null,"We suggest sentry nodes to be set up on multiple cloud providers across different regions. A validator may be offline if the connected sentry nodes are all offline due to the outage of a cloud provider in a specific region. "),(0,a.kt)("p",null,"To setup your sentry node architecture you can follow the instructions below:"),(0,a.kt)("p",null,"Validator Nodes should edit their config.toml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Comma separated list of nodes to keep persistent connections to\n# Do not add private peers to this list if you don't want them advertised\npersistent_peers =[list of sentry nodes]\n\n# Set true to enable the peer-exchange reactor\npex = false\n")),(0,a.kt)("p",null,"Sentry Nodes should edit their config.toml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)\n# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656\n\nprivate_peer_ids = "node_ids_of_private_peers"\n')))}y.isMDXComponent=!0}}]);