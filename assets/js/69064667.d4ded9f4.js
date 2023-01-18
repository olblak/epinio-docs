"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[24749],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"",sidebar_label:"Application Charts"},p="Customization point: Application Charts",s={unversionedId:"references/customization/appcharts",id:"version-0.9.0/references/customization/appcharts",title:"",description:"Epinio uses Application charts as templates for the structure of deployed applications,",source:"@site/versioned_docs/version-0.9.0/references/customization/appcharts.md",sourceDirName:"references/customization",slug:"/references/customization/appcharts",permalink:"/0.9.0/references/customization/appcharts",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.9.0/references/customization/appcharts.md",tags:[],version:"0.9.0",frontMatter:{title:"",sidebar_label:"Application Charts"},sidebar:"docs",previous:{title:"Buildpacks",permalink:"/0.9.0/references/customization/staging"},next:{title:"Service Catalog",permalink:"/0.9.0/references/customization/catalog"}},l={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customization-point-application-charts"},"Customization point: Application Charts"),(0,i.kt)("p",null,"Epinio uses Application charts as templates for the structure of deployed applications,\ni.e. of the kubernetes resources used to run an application image."),(0,i.kt)("p",null,"An installation of Epinio provides a single standard application chart."),(0,i.kt)("p",null,"If custom application charts adapted to the local environment are desired or needed please\nfollow the instructions on\n",(0,i.kt)("a",{parentName:"p",href:"/0.9.0/howtos/create_custom_appcharts"},"How To create custom application Helm charts"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"/0.9.0/howtos/using_custom_appcharts"},"How To use custom application Helm charts"),"."),(0,i.kt)("p",null,"Application charts are expected to create the following resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment")," specifying the pod and container running the application image."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"service")," to route web requests to the application."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"/0.9.0/references/customization/lb"},"ingress")," per specified route to front the service.")))}m.isMDXComponent=!0}}]);