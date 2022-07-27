"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35958],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),u=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,h=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,T=(0,r.useState)(y),x=T[0],C=T[1],I=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=w[h];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&C(E)}var q=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==x&&(P(t),C(a),null!=h&&O(h,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var o,l=I.indexOf(e.currentTarget)-1;n=null!=(o=I[l])?o:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:q,onClick:q},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},50671:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(65488),i=n(85162),s=["components"],u={id:"overview",title:"Overview",sidebar_position:1},p="Desmos fullnode overview",d={unversionedId:"fullnode/overview",id:"version-3/fullnode/overview",title:"Overview",description:"A full-node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light-node",source:"@site/versioned_docs/version-3/03-fullnode/01-overview.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/overview",permalink:"/3/fullnode/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/03-fullnode/01-overview.mdx",tags:[],version:"3",lastUpdatedAt:1658913523,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"version-3/docs",previous:{title:"F.A.Q",permalink:"/3/developers/faq"},next:{title:"Setup",permalink:"/3/fullnode/setup"}},c={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Understanding pruning",id:"understanding-pruning",level:3},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"1. Setup your environment",id:"1-setup-your-environment",level:2},{value:"2. Install the software",id:"2-install-the-software",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desmos-fullnode-overview"},"Desmos fullnode overview"),(0,o.kt)("p",null,"A full-node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light-node\nthat only processes block headers and a small subset of transactions. Running a full-node requires more resources than a\nlight-node but is necessary in order to be a validator. In practice, running a full-node only implies running a\nnon-compromised and up-to-date version of the software with low network latency and without downtime."),(0,o.kt)("p",null,"Of course, it is possible and encouraged for users to run full-nodes even if they do not plan to be validators."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"understanding-pruning"},"Understanding pruning"),(0,o.kt)("p",null,"In order to run a full node, different hardware requirements should be met based on the pruning strategy you would like\nto use."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pruning")," is the term used to identify the periodic action that can be taken in order to free some disk space on your\nfull node. This is done by removing old blocks data from the disk, freeing up space."),(0,o.kt)("p",null,"Inside Desmos, there are various types of pruning strategies that can be applied. The main ones are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"default"),": the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"nothing"),": all historic states will be saved, nothing will be deleted (i.e. archiving node);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"everything"),": all saved states will be deleted, storing only the current state; pruning at 10 block intervals\n(At the moment this option is not recommended as it can easily corrupt the database and the node will halt);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"custom"),": allow pruning options to be manually specified through 'pruning-keep-recent', 'pruning-keep-every', and 'pruning-interval'."))),(0,o.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"You can easily understand how using a pruning strategy of ",(0,o.kt)("inlineCode",{parentName:"p"},"nothing")," will use more disk space than ",(0,o.kt)("inlineCode",{parentName:"p"},"everything"),".\nFor this reason, there are different disk space that we recommend based on the pruning strategy you choose:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Pruning strategy"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Minimum disk space"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Recommended disk space"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"everything")),(0,o.kt)("td",{parentName:"tr",align:"center"},"20 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"40 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"default")),(0,o.kt)("td",{parentName:"tr",align:"center"},"80 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"120 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"nothing")),(0,o.kt)("td",{parentName:"tr",align:"center"},"120 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},">"," 240 GB")))),(0,o.kt)("p",null,"Apart from disk space, the following requirements should be met."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Minimum CPU cores"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Recommended CPU cores"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Minimum RAM"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Recommended RAM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"4 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8 GB")))),(0,o.kt)("h2",{id:"1-setup-your-environment"},"1. Setup your environment"),(0,o.kt)("p",null,"In order to run a fullnode, you need to build ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos")," which requires ",(0,o.kt)("inlineCode",{parentName:"p"},"Go"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," installed."),(0,o.kt)("p",null,"This process depends on your working environment."),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"The following example is based on ",(0,o.kt)("strong",{parentName:"p"},"Ubuntu (Debian)")," and assumes you are using a terminal environment by default.\nPlease run the equivalent commands if you are running other Linux distributions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Update the system\nsudo apt update\nsudo apt upgrade\n\n# Install git, gcc and make\nsudo apt install git build-essential ufw curl jq snapd --yes\n\n# Install Go with Snap\nsudo snap install go --classic\n\n# Export environment variables\necho 'export GOPATH=\"$HOME/go\"' >> ~/.profile\necho 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\necho 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\nsource ~/.profile\n"))),(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the required build tools,\nsimple ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/hk/app/xcode/id497799835?l=en&mt=12"},"install Xcode from the Mac App Store"),"."),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," on ",(0,o.kt)("strong",{parentName:"p"},"MacOS"),", the best option is to install with ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},(0,o.kt)("strong",{parentName:"a"},"Homebrew")),". To do so, open\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal")," application and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Install Homebrew\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you don't know how to open a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal"),", you can search it by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Spotlight"),"(to access spotlight press cmd + spacebar simultaneously).")),(0,o.kt)("p",null,"After ",(0,o.kt)("strong",{parentName:"p"},"Homebrew")," is installed, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install software using Homebrew\nbrew install go git curl jq\n\n# Export environment variables\necho 'export GOPATH=\"$HOME/go\"' >> ~/.profile\necho 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\necho 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\nsource ~/.profile\n"))),(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"The software has not been tested on ",(0,o.kt)("strong",{parentName:"p"},"Windows")," If you are currently running a ",(0,o.kt)("strong",{parentName:"p"},"Windows")," PC, the following options\nshould be considered:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Switch to a ",(0,o.kt)("strong",{parentName:"li"},"Mac")," \ud83d\udc68\u200d\ud83d\udcbb."),(0,o.kt)("li",{parentName:"ol"},"Wipe your hard drive and install a ",(0,o.kt)("strong",{parentName:"li"},"Linux")," system on your PC."),(0,o.kt)("li",{parentName:"ol"},"Install a separate ",(0,o.kt)("strong",{parentName:"li"},"Linux")," system using ",(0,o.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")),(0,o.kt)("li",{parentName:"ol"},"Run a ",(0,o.kt)("strong",{parentName:"li"},"Linux")," instance on a cloud provider.")),(0,o.kt)("p",null,"Note that is still possible to build and run the software on ",(0,o.kt)("strong",{parentName:"p"},"Windows")," but it may give you unexpected results and it\nmay require additional setup to be done. If you insist to build and run the software on ",(0,o.kt)("strong",{parentName:"p"},"Windows"),", the best bet would\nbe installing the ",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package manager."))),(0,o.kt)("h2",{id:"2-install-the-software"},"2. Install the software"),(0,o.kt)("p",null,"Once you have set up your environment correctly, you are now ready to install the Desmos software and start your full\nnode."),(0,o.kt)("p",null,"In order to do so, you can follow our ",(0,o.kt)("a",{parentName:"p",href:"/3/fullnode/setup"},"setup guide"),"."))}h.isMDXComponent=!0}}]);