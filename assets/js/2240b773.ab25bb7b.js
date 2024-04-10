"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[52277],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=i.createContext({}),p=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=p(n.components);return i.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?i.createElement(m,a(a({ref:e},u),{},{components:t})):i.createElement(m,a({ref:e},u))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59830:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=["components"],l={sidebar_label:"Uninstall Epinio",sidebar_position:5,title:"Uninstall Epinio",description:"Uninstalling Epinio and the implications of doing so.",keywords:["epinio","uninstallation"]},s=void 0,p={unversionedId:"installation/uninstall_epinio",id:"version-1.10.0/installation/uninstall_epinio",title:"Uninstall Epinio",description:"Uninstalling Epinio and the implications of doing so.",source:"@site/versioned_docs/version-1.10.0/installation/uninstall_epinio.md",sourceDirName:"installation",slug:"/installation/uninstall_epinio",permalink:"/1.10.0/installation/uninstall_epinio",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.10.0/installation/uninstall_epinio.md",tags:[],version:"1.10.0",sidebarPosition:5,frontMatter:{sidebar_label:"Uninstall Epinio",sidebar_position:5,title:"Uninstall Epinio",description:"Uninstalling Epinio and the implications of doing so.",keywords:["epinio","uninstallation"]},sidebar:"docs",previous:{title:"Wildcard DNS setup",permalink:"/1.10.0/installation/wildcardDNS_setup"},next:{title:"Installing Epinio on Rancher Desktop (RD)",permalink:"/1.10.0/installation/other_inst_scenarios/install_epinio_on_rancher_desktop"}},u={},c=[],d={toc:c};function f(n){var e=n.components,t=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You should understand the implications of uninstalling Epinio. Uninstallation may affect your cluster's operation."),(0,o.kt)("p",null,"Epinio uninstallation removes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio and all the components that it installed at installation"),(0,o.kt)("li",{parentName:"ul"},"Any resources installed in the Epinio ",(0,o.kt)("strong",{parentName:"li"},"default")," workspace")),(0,o.kt)("p",null,"If there are resources in the cluster that depend on Epinio, they will stop working.\nClearly, this will prevent your cluster workload from operating correctly."),(0,o.kt)("p",null,"If you installed Epinio in a namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio"),", you uninstall with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm uninstall -n epinio epinio\n")))}f.isMDXComponent=!0}}]);