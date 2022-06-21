"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[58355],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_label:"CLI Settings",title:""},l="Epinio, CLI settings",c={unversionedId:"references/settings",id:"references/settings",title:"",description:"The Epinio command line client uses a settings file to store",source:"@site/docs/references/settings.md",sourceDirName:"references",slug:"/references/settings",permalink:"/next/references/settings",editUrl:"https://github.com/epinio/docs/docs/references/settings.md",tags:[],version:"current",frontMatter:{sidebar_label:"CLI Settings",title:""},sidebar:"docs",previous:{title:"Services",permalink:"/next/references/services"},next:{title:"Supported Applications",permalink:"/next/references/supported_applications"}},p={},u=[{value:"Table Of Contents",id:"table-of-contents",level:2},{value:"Location",id:"location",level:2},{value:"Contents",id:"contents",level:2},{value:"Commands",id:"commands",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"epinio-cli-settings"},"Epinio, CLI settings"),(0,a.kt)("p",null,"The Epinio command line client uses a settings file to store\ninformation which has to persist across invocations. This document\ndiscusses various aspects around this."),(0,a.kt)("h2",{id:"table-of-contents"},"Table Of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#location"},"Location")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contents"},"Contents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#commands"},"Commands"))),(0,a.kt)("h2",{id:"location"},"Location"),(0,a.kt)("p",null,"Epinio's settings files is located by default at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config/epinio/settings.yaml"),"."),(0,a.kt)("p",null,"The location can be changed from command to command by specifying a\ndifferent path with the global command line option ",(0,a.kt)("inlineCode",{parentName:"p"},"--settings-file"),"."),(0,a.kt)("p",null,"A more permanent change is possible by setting the environment\nvariable ",(0,a.kt)("inlineCode",{parentName:"p"},"EPINIO_SETTINGS")," to the desired path."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("p",null,"Epinio's settings contains"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The name of the namespace currently targeted."),(0,a.kt)("li",{parentName:"ul"},"Epinio API user name"),(0,a.kt)("li",{parentName:"ul"},"Epinio API password (base64 encoded)"),(0,a.kt)("li",{parentName:"ul"},"Epinio API urls (regular and websocket)"),(0,a.kt)("li",{parentName:"ul"},"Epinio API certificate")),(0,a.kt)("p",null,"The namespace can be changed by running ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio target")," with the\nname of the desired namespace as its single argument."),(0,a.kt)("p",null,"Username and password are used by the client to authenticate itself\nwhen talking to Epinio's API server. The ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio login [URL]")," command asks\nfor your username and password, checks the validity of the\ncredentials, and saves the information to the settings."),(0,a.kt)("p",null,"The installation uses the wildcard domain ",(0,a.kt)("inlineCode",{parentName:"p"},"omg.howdoi.website")," and the\n",(0,a.kt)("inlineCode",{parentName:"p"},"epinio-ca")," issuer by default."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio login [URL]")," checks if the associated certificate is signed by an\nunknown CA and it asks you if you want to trust it and save it\nto the settings so that future invocations of the client are able\nto verify the actual certificate when talking to Epinio's API server."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio settings update-ca")," updates the API url and the certificate."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"The Epinio command line client currently provides 3 commands\nexplicitly targeting the settings. These are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"epinio target")),(0,a.kt)("p",{parentName:"li"},"As noted in the previous section, this command changes\nthe namespace to use with all other commands.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"epinio settings show")),(0,a.kt)("p",{parentName:"li"},"This command shows the details of the currently stored\nsettings. An exception is made for the certificate\nfield, due to its expected size. The command's output only notes\nif certificate data is present or not.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"epinio login [URL]")),(0,a.kt)("p",{parentName:"li"},"Epinio allows users to switch between multiple installations (on\ndifferent clusters) by simply using a different settings file."),(0,a.kt)("p",{parentName:"li"},"When such is done the credentials, cert data, and URLs stored in\nthe settings will not match the newly targeted cluster,\nexcept by coincidence."),(0,a.kt)("p",{parentName:"li"},"Logging in and pointing to the newly targeted installation will create\nnew settings file storing credentials, cert data, and URLs with\ninformation retrieved from the new cluster."))))}m.isMDXComponent=!0}}]);