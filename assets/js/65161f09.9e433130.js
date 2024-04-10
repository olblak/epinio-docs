"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7228],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78572:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={sidebar_label:"Separating Application Ingress From Epinio API Server Ingress",sidebar_position:9,title:""},p="How to separate the application's ingress from the epinio server ingress",l={unversionedId:"howtos/separate_workload_ingress",id:"version-1.9.0/howtos/separate_workload_ingress",title:"",description:"By default applications deployed through Epinio share their ingress class with Epinio's API server.",source:"@site/versioned_docs/version-1.9.0/howtos/separate_workload_ingress.md",sourceDirName:"howtos",slug:"/howtos/separate_workload_ingress",permalink:"/1.9.0/howtos/separate_workload_ingress",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.9.0/howtos/separate_workload_ingress.md",tags:[],version:"1.9.0",sidebarPosition:9,frontMatter:{sidebar_label:"Separating Application Ingress From Epinio API Server Ingress",sidebar_position:9,title:""},sidebar:"docs",previous:{title:"Setting Up An External Container Registry",permalink:"/1.9.0/howtos/setup_external_registry"},next:{title:"Setting Up Routing Secrets",permalink:"/1.9.0/howtos/setup_routing_secrets"}},u={},c=[{value:"References",id:"references",level:2}],d={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-separate-the-applications-ingress-from-the-epinio-server-ingress"},"How to separate the application's ingress from the epinio server ingress"),(0,i.kt)("p",null,"By default applications deployed through Epinio share their ingress class with Epinio's API server."),(0,i.kt)("p",null,"In a situation where this kind of behaviour is not wanted the desired separation is achieved by\nsetting the helm template variable ",(0,i.kt)("inlineCode",{parentName:"p"},"server.ingressClassName")," to the name of the ingress class to use\nfor application ingress':"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install \\\n  --set server.ingressClassName=nginx\n  ... (other options here) \\\n  epinio epinio/epinio\n")),(0,i.kt)("p",null,"In order to use this application ingress together with a domain other than the one from the helm\ntemplate variable ",(0,i.kt)("inlineCode",{parentName:"p"},"global.domain"),", the user can use ",(0,i.kt)("inlineCode",{parentName:"p"},"--route")," flag when pushing an application\nthrough the Epinio cli or similarly by setting a ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," value via the Epinio Web UI.\nThe route value must contain the entire domain used by the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app push -n sample -p . --route sample.myawesomedomain.org\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.9.0/references/customization/lb"},"Load Balancers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.9.0/howtos/custom_routes"},"Custom Routes"))))}h.isMDXComponent=!0}}]);