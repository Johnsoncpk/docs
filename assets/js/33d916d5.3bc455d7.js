"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22592],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,f=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"security",title:"Security",sidebar_position:2},l=void 0,c={unversionedId:"mainnet/security",id:"version-4.1.0/mainnet/security",title:"Security",description:"Validator Security",source:"@site/versioned_docs/version-4.1.0/06-mainnet/05-security.md",sourceDirName:"06-mainnet",slug:"/mainnet/security",permalink:"/mainnet/security",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/06-mainnet/05-security.md",tags:[],version:"4.1.0",lastUpdatedAt:1657536715,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:2,frontMatter:{id:"security",title:"Security",sidebar_position:2}},d={},u=[{value:"Validator Security",id:"validator-security",level:2},{value:"Key Management System &amp; Hardware Security Modules",id:"key-management-system--hardware-security-modules",level:2},{value:"Sentry Nodes (DDOS Protection)",id:"sentry-nodes-ddos-protection",level:2}],p={toc:u};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validator-security"},"Validator Security"),(0,a.kt)("p",null,"Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network."),(0,a.kt)("h2",{id:"key-management-system--hardware-security-modules"},"Key Management System & Hardware Security Modules"),(0,a.kt)("p",null,"It is critical that an attacker cannot steal a validator's key. If this is possible, it puts the entire stake delegated to the compromised validator at risk. HSM alongside KMS are an important strategies for mitigating this risk."),(0,a.kt)("p",null,"You can take a look on how to set up a KMS with or without HSM by reading ",(0,a.kt)("a",{parentName:"p",href:"/mainnet/kms/"},"here"),"."),(0,a.kt)("h2",{id:"sentry-nodes-ddos-protection"},"Sentry Nodes (DDOS Protection)"),(0,a.kt)("p",null,"Validators are responsible for ensuring that the network can sustain denial of service attacks."),(0,a.kt)("p",null,"One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture."),(0,a.kt)("p",null,"Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links to the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones."),(0,a.kt)("p",null,"Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network."),(0,a.kt)("p",null,"We suggest sentry nodes to be set up on multiple cloud providers across different regions. A validator may be offline if the connected sentry nodes are all offline due to the outage of a cloud provider in a specific region. "),(0,a.kt)("p",null,"To setup your sentry node architecture you can follow the instructions below:"),(0,a.kt)("p",null,"Validator Nodes should edit their config.toml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Comma separated list of nodes to keep persistent connections to\n# Do not add private peers to this list if you don't want them advertised\npersistent_peers =[list of sentry nodes]\n\n# Set true to enable the peer-exchange reactor\npex = false\n")),(0,a.kt)("p",null,"Sentry Nodes should edit their config.toml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)\n# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656\n\nprivate_peer_ids = "node_ids_of_private_peers"\n')))}y.isMDXComponent=!0}}]);