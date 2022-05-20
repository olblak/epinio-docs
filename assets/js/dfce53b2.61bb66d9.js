"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7328],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87225:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},s="Create a custom service",p={unversionedId:"howtos/create_custom_service",id:"version-0.6.2/howtos/create_custom_service",title:"Create a custom service",description:"As described in the Service reference page, Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed.",source:"@site/versioned_docs/version-0.6.2/howtos/create_custom_service.md",sourceDirName:"howtos",slug:"/howtos/create_custom_service",permalink:"/0.6.2/howtos/create_custom_service",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.6.2/howtos/create_custom_service.md",tags:[],version:"0.6.2",frontMatter:{}},l={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-custom-service"},"Create a custom service"),(0,i.kt)("p",null,"As described ",(0,i.kt)("a",{parentName:"p",href:"/0.6.2/references/services"},"in the Service reference page"),", Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed."),(0,i.kt)("p",null,"As a starting point, you can check the services installed by default for Epinio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -A\n")),(0,i.kt)("p",null,"If Epinio is installed in a namespace called ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio"),", the following command outputs the Service definition in ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -n epinio mysql-dev -o yaml > service.yaml\n")),(0,i.kt)("p",null,"or you can find the definition of the catalog services ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3a12bac7aee5ac36c6d43416f2e83ac10090c62a/chart/epinio/templates/service-catalog.yaml"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3a12bac7aee5ac36c6d43416f2e83ac10090c62a/chart/epinio/templates/service-catalog.yaml"},"https://github.com/epinio/helm-charts/blob/3a12bac7aee5ac36c6d43416f2e83ac10090c62a/chart/epinio/templates/service-catalog.yaml")),(0,i.kt)("p",null,"Change the fields to point to the desired helm chart and apply the yaml with a command like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubeclt apply -f service.yaml\n")),(0,i.kt)("p",null,"If everything worked correctly, you can see your Service in the Epinio ",(0,i.kt)("inlineCode",{parentName:"p"},"service-catalog"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ epinio service catalog\n")))}f.isMDXComponent=!0}}]);