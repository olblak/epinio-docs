"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[31553],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={sidebar_label:"Create a custom Service",title:""},s="Create a custom service",l={unversionedId:"howtos/create_custom_service",id:"version-1.0.0/howtos/create_custom_service",title:"",description:"As described in the Service reference page, Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed.",source:"@site/versioned_docs/version-1.0.0/howtos/create_custom_service.md",sourceDirName:"howtos",slug:"/howtos/create_custom_service",permalink:"/howtos/create_custom_service",editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.0.0/howtos/create_custom_service.md",tags:[],version:"1.0.0",frontMatter:{sidebar_label:"Create a custom Service",title:""},sidebar:"docs",previous:{title:"Custom Routes",permalink:"/howtos/custom_routes"},next:{title:"How To create custom application Helm charts",permalink:"/howtos/create_custom_appcharts"}},p={},u=[{value:"Adding an Image to the service",id:"adding-an-image-to-the-service",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-custom-service"},"Create a custom service"),(0,o.kt)("p",null,"As described ",(0,o.kt)("a",{parentName:"p",href:"/references/services"},"in the Service reference page"),", Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed."),(0,o.kt)("p",null,"As a starting point, you can check the services installed by default for Epinio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -A\n")),(0,o.kt)("p",null,"If Epinio is installed in a namespace called ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio"),", the following command outputs the Service definition in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -n epinio mysql-dev -o yaml > service.yaml\n")),(0,o.kt)("p",null,"or you can find the definition of the catalog services ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3a12bac7aee5ac36c6d43416f2e83ac10090c62a/chart/epinio/templates/service-catalog.yaml"},"here"),"."),(0,o.kt)("p",null,"Change the fields to point to the desired helm chart and apply the yaml with a command like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubeclt apply -f service.yaml\n")),(0,o.kt)("p",null,"If everything worked correctly, you can see your Service in the Epinio ",(0,o.kt)("inlineCode",{parentName:"p"},"service-catalog"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ epinio service catalog\n")),(0,o.kt)("h2",{id:"adding-an-image-to-the-service"},"Adding an Image to the service"),(0,o.kt)("p",null,"The various consumers of the API (e.g. the web UI of Epinio) can show an icon when\nlisting the various available services. If you want to assign an image to your\ncustom service, make sure you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceIcon")," field in the Custom Resource\nyaml."),(0,o.kt)("p",null,"Generally, helm charts have an icon field defined which already provides such an\nimage. You can find the icon field with the ",(0,o.kt)("inlineCode",{parentName:"p"},"helm show")," command. E.g. for the\nbitnami rabbitmq helm chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm show chart https://charts.bitnami.com/bitnami/rabbitmq-9.0.5.tgz | yq .icon\n")))}d.isMDXComponent=!0}}]);