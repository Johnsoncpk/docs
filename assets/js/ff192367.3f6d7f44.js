"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[43831],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=l,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),l=t(86010),r="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),l=t(67294),r=t(86010),o=t(72389),i=t(67392),s=t(7094),u=t(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,f=e.defaultValue,m=e.values,b=e.groupId,v=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),D=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,l.useState)(y),N=T[0],x=T[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var B=D[b];null!=B&&B!==N&&k.some((function(e){return e.value===B}))&&x(B)}var R=function(e){var n=e.currentTarget,t=E.indexOf(n),a=k[t].value;a!==N&&(I(n),x(a),null!=b&&O(b,String(a)))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=E.indexOf(e.currentTarget)+1;t=null!=(a=E[l])?a:E[0];break;case"ArrowLeft":var r,o=E.indexOf(e.currentTarget)-1;t=null!=(r=E[o])?r:E[E.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:R,onClick:R},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function f(e){var n=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},97558:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),o=t(65488),i=t(85162),s=["components"],u={id:"rocksdb-installation",title:"Use RocksDB",sidebar_position:4},c="Installing RocksDB",d={unversionedId:"fullnode/rocksdb-installation",id:"version-3/fullnode/rocksdb-installation",title:"Use RocksDB",description:"By default, Desmos uses LevelDB as its database backend engine. However, since version",source:"@site/versioned_docs/version-3/03-fullnode/04-rocksdb-installation.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/rocksdb-installation",permalink:"/3/fullnode/rocksdb-installation",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/03-fullnode/04-rocksdb-installation.mdx",tags:[],version:"3",lastUpdatedAt:1657542326,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:4,frontMatter:{id:"rocksdb-installation",title:"Use RocksDB",sidebar_position:4},sidebar:"version-3/docs",previous:{title:"Update",permalink:"/3/fullnode/update"},next:{title:"Use Cosmovisor",permalink:"/3/fullnode/cosmovisor"}},p={},f=[{value:"1. Install the dependencies",id:"1-install-the-dependencies",level:2},{value:"2. Install RocksDB",id:"2-install-rocksdb",level:2}],m={toc:f};function b(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-rocksdb"},"Installing RocksDB"),(0,r.kt)("p",null,"By default, Desmos uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since version\n",(0,r.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),",\nwhich, although still being experimental, is know to be faster and could lead to lower syncing times.\nIf you want to try out RocksDB (which we suggest you to do) you can take a look at our\n",(0,r.kt)("a",{parentName:"p",href:"/3/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further."),(0,r.kt)("p",null,"The following guide allows you to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," inside your local machine,\nso that you will be able to use as Desmos' backend engine for better performances."),(0,r.kt)("h2",{id:"1-install-the-dependencies"},"1. Install the dependencies"),(0,r.kt)("p",null,"The first thing to do is to install all the dependencies for RocksDB.\nFollowing you will find the installation guide for both Ubuntu and MacOS. If you have a different operative system you can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official installation guide")),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y \\\n  libgflags-dev \\\n  libsnappy-dev \\\n  zlib1g-dev \\\n  libbz2-dev \\\n  libzstd-dev \\\n  liblz4-dev\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Only needed if you are first time developing of your machine\nxcode-select --install\n\n# Install the dependencies\nbrew tap homebrew/versions; brew install gcc48 --use-llvm\n")))),(0,r.kt)("h2",{id:"2-install-rocksdb"},"2. Install RocksDB"),(0,r.kt)("p",null,"After having installed the dependencies, you need to install RocksDB. Again, following you will find the Linux and MacOS instructions.\nIf you are running another OS, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official documentation"),"."),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone RocksDB\ngit clone https://github.com/facebook/rocksdb.git && cd rocksdb\n\n# Build RocksDB\nDEBUG_LEVEL=0 make shared_lib\n\n# Install RocksDB so that Desmos can access it\nsudo make install-shared\n\n# Make sure the newly built library is linked correctly\nsudo ldconfig\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rocksdb\n")))),(0,r.kt)("p",null,"Once the installation has finished, you will be able to compile Desmos using the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install DB_BACKEND=rocksdb\n")))}b.isMDXComponent=!0}}]);