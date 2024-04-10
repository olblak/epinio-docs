"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[17302],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3138:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],p={sidebar_position:2,title:"Namespaces"},s="Namespaces",l={unversionedId:"tutorials/namespace-tutorial",id:"version-1.10.0/tutorials/namespace-tutorial",title:"Namespaces",description:"Introduction",source:"@site/versioned_docs/version-1.10.0/tutorials/namespace-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/namespace-tutorial",permalink:"/1.10.0/tutorials/namespace-tutorial",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.10.0/tutorials/namespace-tutorial.md",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Namespaces"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/1.10.0/tutorials/quickstart"},next:{title:"Epinio Journey: Single Dev Workflow",permalink:"/1.10.0/tutorials/single-dev-workflow"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Workflow",id:"workflow",level:2},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"namespaces"},"Namespaces"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This document explains the basics of working with namespaces. It assumes that Epinio is installed. If this is not the case please visit ",(0,i.kt)("a",{parentName:"p",href:"/next/installation/install_epinio"},"Install Epinio")," first."),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"Epinio")," is deployed, check the existence of the pre-configured namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio namespace list\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udea2  Listing namespaces\n\n\u2714\ufe0f  Epinio Namespaces:\n|   NAME    |            CREATED            | APPLICATIONS | CONFIGURATIONS |\n|-----------|-------------------------------|--------------|----------------|\n| workspace | 2023-03-14 09:48:11 +0100 CET |              |                |\n")),(0,i.kt)("p",null,"Create new namespaces with: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio namespace create newnamespace\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udea2  Creating namespace...\nName: newnamespace\n\n\u2714\ufe0f  Namespace created.\n")),(0,i.kt)("p",null,"Inspect the details of a given namespace like ",(0,i.kt)("strong",{parentName:"p"},"creation date"),", ",(0,i.kt)("strong",{parentName:"p"},"applications")," and ",(0,i.kt)("strong",{parentName:"p"},"configurations")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio namespace show newnamespace\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udea2  Showing namespace...\nName: newnamespace\n\n\u2714\ufe0f  Details:\n|      KEY       |             VALUE             |\n|----------------|-------------------------------|\n| Name           | newnamespace                  |\n| Created        | 2023-03-14 15:27:48 +0100 CET |\n| Applications   |                               |\n| Configurations |                               |\n")),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"Epinio")," creates the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace")," during installation. If no previous local state existed the ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio login")," command used to get access to the installation also set this namespace as the current namespace. To see this use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio target\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2714\ufe0f  \nCurrently targeted namespace: workspace\n")),(0,i.kt)("p",null,"Target the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"newnamespace")," created earlier to operate on its contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio target newnamespace\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udea2  Targeting namespace...\nName: newnamespace\n\n\u2714\ufe0f  Namespace targeted.\n")),(0,i.kt)("p",null,"At last delete the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"newnamespace")," again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio namespace delete newnamespace  \n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are about to delete namespace workspace and everything it includes, i.e. applications, configurations, etc. Are you sure? (y/n): y\n\n\ud83d\udea2  Deleting namespace...\nName: newnamespace\n\n\u2714\ufe0f  Namespace deleted.\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.10.0/references/commands/cli/namespace/epinio_namespace_create"},"epinio namespace create"),"    - Creates an epinio-controlled namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.10.0/references/commands/cli/namespace/epinio_namespace_delete"},"epinio namespace delete"),"    - Deletes an epinio-controlled namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.10.0/references/commands/cli/namespace/epinio_namespace_list"},"epinio namespace list"),"    - Lists all epinio-controlled namespaces"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.10.0/references/commands/cli/namespace/epinio_namespace_show"},"epinio namespace show"),"    - Shows the details of an epinio-controlled namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.10.0/references/commands/cli/epinio_target"},"epinio target"),"  - Targets an epinio-controlled namespace.")))}d.isMDXComponent=!0}}]);