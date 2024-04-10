"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[23083],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Configurations",title:""},c="Configurations",s={unversionedId:"references/configurations",id:"version-1.6.2/references/configurations",title:"",description:"Overview",source:"@site/versioned_docs/version-1.6.2/references/configurations.md",sourceDirName:"references",slug:"/references/configurations",permalink:"/1.6.2/references/configurations",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.2/references/configurations.md",tags:[],version:"1.6.2",frontMatter:{sidebar_label:"Configurations",title:""},sidebar:"docs",previous:{title:"Cert Manager",permalink:"/1.6.2/references/cert-manager"},next:{title:"Application Manifests",permalink:"/1.6.2/references/manifests"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Management",id:"management",level:2},{value:"Application Interface",id:"application-interface",level:2},{value:"Example",id:"example",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configurations"},"Configurations"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Configurations are, in general, external components providing some kind of configuration (sic!) to\napplications, without being a direct part of the applications."),(0,r.kt)("p",null,"Examples of configurations are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"databases,"),(0,r.kt)("li",{parentName:"ul"},"message brokers,"),(0,r.kt)("li",{parentName:"ul"},"interfaces to other kinds of systems,"),(0,r.kt)("li",{parentName:"ul"},"etc.")),(0,r.kt)("p",null,"In Epinio configurations are identified by a name and the namespace they are defined in. Beyond\nthat they consist of a collection of arbitrarily named attributes and values, which when\nconsumed by an application, tell that aplication how to connect to and interact with that\nconfiguration."),(0,r.kt)("p",null,"Note that while there are guidelines what kind of attributes are required for the above, and\nhow they should be named, and what their content should be, these guidelines are outside\nof the scope for Epinio. Epinio is not aware of such, and cannot validate configuration\ndefinition against such. It will simply pass any attributes to using applications as they\nare, and assumes that they are what the application requires for proper function."),(0,r.kt)("p",null,"For an application to use a configuration, the configuration has to be ",(0,r.kt)("strong",{parentName:"p"},"bound")," to the application. In\nother words, the application has to be made aware of the configuration."),(0,r.kt)("p",null,"Note how this constrains the lifetimes of configurations with respect to applications. A configuration\nis expected to exist before a using application exists, and to only be deleted after all\nusing applications are gone."),(0,r.kt)("p",null,"Deleting a configuration used by an application is considered an error and generally\nprevented. While it can be forced it should then be expected to break the application."),(0,r.kt)("p",null,"As a limitation, applications can only bind configurations defined in the same namespace as the\napplication itself."),(0,r.kt)("h2",{id:"management"},"Management"),(0,r.kt)("p",null,"Configurations in Epinio are managed by the ",(0,r.kt)("a",{parentName:"p",href:"/1.6.2/references/commands/cli/configuration/epinio_configuration"},"epinio configuration"),"\ncommand hierarchy."),(0,r.kt)("p",null,"The connections between configurations and applications specifically are managed by the\n",(0,r.kt)("a",{parentName:"p",href:"/1.6.2/references/commands/cli/configuration/epinio_configuration_bind"},"bind")," and ",(0,r.kt)("a",{parentName:"p",href:"/1.6.2/references/commands/cli/configuration/epinio_configuration_unbind"},"unbind")," commands."),(0,r.kt)("h2",{id:"application-interface"},"Application Interface"),(0,r.kt)("p",null,"From the point of view of an epinio-staged application, a bound configuration appears in the\napplication's file system as a directory under the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/configurations"),". This directory will\nhave the same name as the configuration and will contain a set of files holding the attributes of the\nconfiguration. Each attribute is mapped to a file of the same name as the attribute, and this\nfile contains the value of the attribute."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"To be a bit more concrete, let us assume that we have a configuration created by the command\n",(0,r.kt)("inlineCode",{parentName:"p"},"epinio configuration create orders host over-there port 99 user zetta password 92084dkls"),"."),(0,r.kt)("p",null,"When an application binds that configuration several additional paths will appear in the\nfilesystem of that application, namely:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Kind"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/configurations/orders"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/configurations/orders/host"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"over-there"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/configurations/orders/port"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"99"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/configurations/orders/user"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zetta"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/configurations/orders/password"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"92084dkls"))))),(0,r.kt)("p",null,"The application can now read these files and use their content to connect to the configuration,\nauthenticate, and then use it."))}f.isMDXComponent=!0}}]);