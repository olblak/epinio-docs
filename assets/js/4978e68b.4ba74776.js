"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[57587],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86624:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=["components"],l={sidebar_label:"Uninstall Epinio",sidebar_position:5,title:""},s=void 0,p={unversionedId:"installation/uninstall_epinio",id:"version-1.1.0/installation/uninstall_epinio",title:"",description:"Uninstall",source:"@site/versioned_docs/version-1.1.0/installation/uninstall_epinio.md",sourceDirName:"installation",slug:"/installation/uninstall_epinio",permalink:"/installation/uninstall_epinio",draft:!1,editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.1.0/installation/uninstall_epinio.md",tags:[],version:"1.1.0",sidebarPosition:5,frontMatter:{sidebar_label:"Uninstall Epinio",sidebar_position:5,title:""},sidebar:"docs",previous:{title:"Magic DNS setup",permalink:"/installation/magicDNS_setup"},next:{title:"Advanced topics",permalink:"/explanations/advanced"}},u={},c=[{value:"Uninstall",id:"uninstall",level:2}],d={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"NOTE: The command below will delete all the components Epinio originally installed.\n",(0,o.kt)("strong",{parentName:"p"},'This includes all the deployed applications in the default "workspace" namespace, resources deployed in your own namespace will survive.')),(0,o.kt)("p",null,"If after installing Epinio, you deployed other things on the same cluster\nthat depended on those Epinio deployed components (e.g. Kubed, Minio etc),\nthen removing Epinio will remove those components and this may break your other\nworkloads that depended on these. Make sure you understand the implications of\nuninstalling Epinio before you proceed."),(0,o.kt)("p",null,"Assuming you installed Epinio in a namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio"),", uninstall with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm uninstall -n epinio epinio\n")))}f.isMDXComponent=!0}}]);