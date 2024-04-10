"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[94213],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43724:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],s={sidebar_label:"Ingress separation",sidebar_position:9,title:"Separating application Ingress from Epinio API server Ingress",description:"How to separate application Ingress from Epinio API server Ingress",keywords:["epinio","kubernetes","separate application ingress","epinio api server"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","other","ingress-separation"],"doc-persona":["epinio-developer","epinio-operator"]},p=void 0,l={unversionedId:"howtos/other/separate_workload_ingress",id:"version-1.11.0/howtos/other/separate_workload_ingress",title:"Separating application Ingress from Epinio API server Ingress",description:"How to separate application Ingress from Epinio API server Ingress",source:"@site/versioned_docs/version-1.11.0/howtos/other/separate_workload_ingress.md",sourceDirName:"howtos/other",slug:"/howtos/other/separate_workload_ingress",permalink:"/howtos/other/separate_workload_ingress",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.11.0/howtos/other/separate_workload_ingress.md",tags:[],version:"1.11.0",sidebarPosition:9,frontMatter:{sidebar_label:"Ingress separation",sidebar_position:9,title:"Separating application Ingress from Epinio API server Ingress",description:"How to separate application Ingress from Epinio API server Ingress",keywords:["epinio","kubernetes","separate application ingress","epinio api server"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","other","ingress-separation"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"Pushing with a Git job",permalink:"/howtos/other/gitjob_push"},next:{title:"Port forwarding",permalink:"/howtos/other/port_forwarding"}},c={},u=[{value:"References",id:"references",level:2}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, applications deployed through Epinio share their ingress class with Epinio's API server."),(0,i.kt)("p",null,"For situations where this kind of behavior isn't wanted you achieve separation with a couple of steps."),(0,i.kt)("p",null,"Set the Helm template variable ",(0,i.kt)("inlineCode",{parentName:"p"},"server.ingressClassName")," to the name of the Ingress class to use for application Ingress:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"helm install \\\n  --set server.ingressClassName=nginx\n  ... (other options here) \\\n  epinio epinio/epinio\n")),(0,i.kt)("p",null,"To use this application Ingress with a domain different to the Helm template variable ",(0,i.kt)("inlineCode",{parentName:"p"},"global.domain"),",\nthe user can use ",(0,i.kt)("inlineCode",{parentName:"p"},"--route")," flag.\nDo this when pushing an application through the Epinio CLI or by setting a ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," value using the Epinio Web UI.\nThe route value must contain the entire domain used by the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"epinio app push -n sample -p . --route sample.myawesomedomain.org\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/references/customization/lb"},"Load Balancers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/howtos/customization/custom_routes"},"Custom Routes"))))}f.isMDXComponent=!0}}]);