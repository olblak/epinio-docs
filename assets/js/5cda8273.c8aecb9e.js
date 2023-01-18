"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7021],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"",sidebar_label:"Load Balancers"},s="Customization point: Load Balancers",u={unversionedId:"references/customization/lb",id:"version-1.6.0/references/customization/lb",title:"",description:"By default Epinio-created ingress resources for applications are based on the",source:"@site/versioned_docs/version-1.6.0/references/customization/lb.md",sourceDirName:"references/customization",slug:"/references/customization/lb",permalink:"/references/customization/lb",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.0/references/customization/lb.md",tags:[],version:"1.6.0",frontMatter:{title:"",sidebar_label:"Load Balancers"},sidebar:"docs",previous:{title:"Image Storage",permalink:"/references/customization/images"},next:{title:"Routing Secrets",permalink:"/references/customization/routing_secrets"}},p={},l=[],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customization-point-load-balancers"},"Customization point: Load Balancers"),(0,i.kt)("p",null,"By default Epinio-created ingress resources for applications are based on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"networking/v1")," Ingress and are not tagged with a specific ingress class name. They do use\n",(0,i.kt)("inlineCode",{parentName:"p"},"Traefik"),"-specific annotations however."),(0,i.kt)("p",null,"This behaviour is a combination of the main Epinio chart and the standard\n",(0,i.kt)("a",{parentName:"p",href:"/references/customization/appcharts"},"application chart")," it provides."),(0,i.kt)("p",null,"To force the use of a specific ingress controller supporting the ",(0,i.kt)("inlineCode",{parentName:"p"},"networking/v1")," API it is\nnecessary to set the chart key ",(0,i.kt)("inlineCode",{parentName:"p"},"server.ingressClassName")," to a name recognized by the\ndesired controller."),(0,i.kt)("p",null,"Note that custom ",(0,i.kt)("a",{parentName:"p",href:"/references/customization/appcharts"},"application charts")," may completely deviate from all of the\nabove."))}m.isMDXComponent=!0}}]);