"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="Installing Desmos",i={unversionedId:"install",id:"install",title:"Installing Desmos",description:"Desmos is represented by the executable named desmos.",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/next/install",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/install.md",tags:[],version:"current",lastUpdatedAt:1659338472,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation procedure",id:"installation-procedure",level:2},{value:"Verify the installation",id:"verify-the-installation",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-desmos"},"Installing Desmos"),(0,a.kt)("p",null,"Desmos is represented by the executable named ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),"."),(0,a.kt)("p",null,"It contains the Command Line Interface (CLI) that you can use to interface with the Desmos blockchain, as well as the\ndaemon that allows you take part to a Desmos blockchain either as a full node or\na ",(0,a.kt)("a",{parentName:"p",href:"/next/validators/overview"},"validator node"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The requirements you must satisfy before attempting to install Desmos are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Having Go 1.15 or later installed.",(0,a.kt)("br",{parentName:"p"}),"\n","If you dont have it, you can download it ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Having Git installed.",(0,a.kt)("br",{parentName:"p"}),"\n","If you need to install it, you can download the installer on the ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"official website"),"."))),(0,a.kt)("h2",{id:"installation-procedure"},"Installation procedure"),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos")," execute the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/$USER\ngit clone https://github.com/desmos-labs/desmos && cd desmos\nmake install\n")),(0,a.kt)("h3",{id:"verify-the-installation"},"Verify the installation"),(0,a.kt)("p",null,"To verify you have correctly ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),", try running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos version\n")),(0,a.kt)("p",null,"If you get an error like ",(0,a.kt)("inlineCode",{parentName:"p"},"No command found"),", please make sure you have appended your ",(0,a.kt)("inlineCode",{parentName:"p"},"GOBIN")," folder path to your\nsystem's ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," environmental variable value."),(0,a.kt)("admonition",{title:"Congratulations!   ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You have successfully installed ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),"!  ")))}u.isMDXComponent=!0}}]);