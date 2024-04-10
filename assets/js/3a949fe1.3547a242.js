"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[54980],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={title:"",sidebar_label:"Buildpacks"},u="Customization point: Buildpacks",c={unversionedId:"references/customization/staging",id:"version-1.9.0/references/customization/staging",title:"",description:"By default Epinio's staging process uses the",source:"@site/versioned_docs/version-1.9.0/references/customization/staging.md",sourceDirName:"references/customization",slug:"/references/customization/staging",permalink:"/1.9.0/references/customization/staging",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.9.0/references/customization/staging.md",tags:[],version:"1.9.0",frontMatter:{title:"",sidebar_label:"Buildpacks"},sidebar:"docs",previous:{title:"Source Code Storage",permalink:"/1.9.0/references/customization/sources"},next:{title:"API",permalink:"/1.9.0/references/api"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customization-point-buildpacks"},"Customization point: Buildpacks"),(0,o.kt)("p",null,"By default Epinio's staging process uses the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/full-stack-release"},"full stack paketo builder image"),"\nfor Paketo ",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/"},"Cloud Native Buildpacks")," to convert application\nsources into deployable application images."),(0,o.kt)("p",null,"To generally use a different image set the chart keys"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image.builder.repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image.builder.full"))),(0,o.kt)("p",null,"to the desired values."),(0,o.kt)("p",null,"To override the image on an individual basis use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--builder-image")," of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," command."),(0,o.kt)("p",null,"Note also the related documentation about the\n",(0,o.kt)("a",{parentName:"p",href:"/1.9.0/references/supported_applications"},"supported applications"),"."))}d.isMDXComponent=!0}}]);