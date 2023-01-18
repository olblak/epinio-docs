"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[53983],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62665:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=["components"],l={sidebar_label:"Windows",title:""},s="Epinio On Windows",c={unversionedId:"references/windows",id:"version-0.9.0/references/windows",title:"",description:"Epinio relies on a number of command line tools which are normally",source:"@site/versioned_docs/version-0.9.0/references/windows.md",sourceDirName:"references",slug:"/references/windows",permalink:"/0.9.0/references/windows",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.9.0/references/windows.md",tags:[],version:"0.9.0",frontMatter:{sidebar_label:"Windows",title:""},sidebar:"docs",previous:{title:"Supported Applications",permalink:"/0.9.0/references/system_requirements"},next:{title:"Command Requirements",permalink:"/0.9.0/references/command_requirements"}},u={},p=[],m={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"epinio-on-windows"},"Epinio On Windows"),(0,o.kt)("p",null,"Epinio relies on a number of command line tools which are normally\navailable on any kind of Unix platform, yet rarely on Windows."),(0,o.kt)("p",null,"The general set contains"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sh"),(0,o.kt)("li",{parentName:"ul"},"sed"),(0,o.kt)("li",{parentName:"ul"},"git")),(0,o.kt)("p",null,"while the specific set consists of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kubectl"),(0,o.kt)("li",{parentName:"ul"},"helm")),(0,o.kt)("p",null,"We are currently recommending to install the\n",(0,o.kt)("a",{parentName:"p",href:"https://gitforwindows.org/"},"Git For Windows")," distribution as it\nprovides everything needed from the general set, and more."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," itself the necessary binaries can\nbe retrieved from the relevant release pages or per their\ninstructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/epinio/epinio/releases"},"Epinio Releases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/releases"},"Helm Releases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/"},"Kubectl Instructions"))))}f.isMDXComponent=!0}}]);