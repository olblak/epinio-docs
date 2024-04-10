"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[5374],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10407:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],c={title:"",sidebar_label:"Service Catalog"},s="Customization point: Service Catalog",l={unversionedId:"references/customization/catalog",id:"version-1.6.2/references/customization/catalog",title:"",description:"Epinio uses Services classes as templates for service instances, i.e. of the kubernetes",source:"@site/versioned_docs/version-1.6.2/references/customization/catalog.md",sourceDirName:"references/customization",slug:"/references/customization/catalog",permalink:"/1.6.2/references/customization/catalog",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.2/references/customization/catalog.md",tags:[],version:"1.6.2",frontMatter:{title:"",sidebar_label:"Service Catalog"},sidebar:"docs",previous:{title:"Application Charts",permalink:"/1.6.2/references/customization/appcharts"},next:{title:"Image Storage",permalink:"/1.6.2/references/customization/images"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customization-point-service-catalog"},"Customization point: Service Catalog"),(0,i.kt)("p",null,"Epinio uses Services classes as templates for service instances, i.e. of the kubernetes\nresources required to run a specific kind of service."),(0,i.kt)("p",null,"An installation of Epinio provides five standard service classes, one each for"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"mysql"),(0,i.kt)("li",{parentName:"ol"},"postgresql"),(0,i.kt)("li",{parentName:"ol"},"redis"),(0,i.kt)("li",{parentName:"ol"},"rabbitmq"),(0,i.kt)("li",{parentName:"ol"},"mongodb-dev")),(0,i.kt)("p",null,"If custom service classes adapted to the local environment are desired or needed please\nfollow instructions on\n",(0,i.kt)("a",{parentName:"p",href:"/1.6.2/howtos/create_custom_service"},"How To create a custom service")))}m.isMDXComponent=!0}}]);