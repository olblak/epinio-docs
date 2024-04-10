"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[75453],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46848:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={sidebar_label:"Routing Secrets",title:""},c="Routing Secrets",u={unversionedId:"references/customization/routing_secrets",id:"version-1.8.0/references/customization/routing_secrets",title:"",description:"Overview",source:"@site/versioned_docs/version-1.8.0/references/customization/routing_secrets.md",sourceDirName:"references/customization",slug:"/references/customization/routing_secrets",permalink:"/1.8.0/references/customization/routing_secrets",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.8.0/references/customization/routing_secrets.md",tags:[],version:"1.8.0",frontMatter:{sidebar_label:"Routing Secrets",title:""},sidebar:"docs",previous:{title:"Load Balancers",permalink:"/1.8.0/references/customization/lb"},next:{title:"Source Code Storage",permalink:"/1.8.0/references/customization/sources"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Troubleshooting Question Sheet",id:"troubleshooting-question-sheet",level:2},{value:"Related",id:"related",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routing-secrets"},"Routing Secrets"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Routing Secrets are kubernetes Secrets of type ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/tls")," and marked by the\npresence of the label ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio.io/routing"),". Note that the value of that label is not\nrelevant, just its presence."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Usage is automatic. When deploying an application into a namespace containing routing\nsecrets, and requesting a route for a domain covered by the secrets (exactly, or as\nwildcard), then the application chart is passed the name of the secret to use for the\nIngress of that route."),(0,i.kt)("p",null,"The matching process prefers exact matches over wildcard matches, and a shorter wildcard\nover a longer one."),(0,i.kt)("h2",{id:"troubleshooting-question-sheet"},"Troubleshooting Question Sheet"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Is the Secret of type ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes.io/tls")," ?"),(0,i.kt)("li",{parentName:"ol"},"Is the Secret labeled with ",(0,i.kt)("inlineCode",{parentName:"li"},"epinio.io/routing")," ?"),(0,i.kt)("li",{parentName:"ol"},"Is the Secret in the application's namespace ?"),(0,i.kt)("li",{parentName:"ol"},"Does the application route match the domain covered by the Secret ?"),(0,i.kt)("li",{parentName:"ol"},"If the application chart is a custom chart, does it support routing secrets ?")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/1.8.0/references/customization/appcharts"},"Application Charts"))))}f.isMDXComponent=!0}}]);