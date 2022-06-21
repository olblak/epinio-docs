"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[29892],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),a=["components"],o={sidebar_label:"Principles"},s=void 0,p={unversionedId:"explanations/principles",id:"version-0.6.2/explanations/principles",title:"principles",description:"Design Principles",source:"@site/versioned_docs/version-0.6.2/explanations/principles.md",sourceDirName:"explanations",slug:"/explanations/principles",permalink:"/0.6.2/explanations/principles",editUrl:"https://github.com/epinio/docs/versioned_docs/version-0.6.2/explanations/principles.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"Principles"},sidebar:"docs",previous:{title:"Detailed Push Process",permalink:"/0.6.2/explanations/detailed-push-process"},next:{title:"Security",permalink:"/0.6.2/explanations/security"}},u={},c=[{value:"Design Principles",id:"design-principles",level:2},{value:"Guidelines (Soft Principles)",id:"guidelines-soft-principles",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"design-principles"},"Design Principles"),(0,l.kt)("p",null,"Epinio's development is governed by the following principles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Greater Developer Experience"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Single command push for short learning curve"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edge Friendly")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Has to fit in less than 4GB of RAM"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Easy Installation")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Has to install in less than 5 minutes when images are warm"),(0,l.kt)("li",{parentName:"ul"},"Has to completely uninstall and leave the cluster in its previous state with an one-line command"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Minimum Complexity"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Scale from desktop/local to data center environment"),(0,l.kt)("li",{parentName:"ul"},"Has to install with an one-line command and zero config"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"API Driven Architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Security Focused"))),(0,l.kt)("h3",{id:"guidelines-soft-principles"},"Guidelines (Soft Principles)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When possible, prefer:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"components that are written in go"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes primitives over custom resources"),(0,l.kt)("li",{parentName:"ul"},"Well known components with active community over custom code"))),(0,l.kt)("li",{parentName:"ul"},"all acceptance tests should run in less than 10 minutes"),(0,l.kt)("li",{parentName:"ul"},"all tests should be able to run on the minimal cluster")))}d.isMDXComponent=!0}}]);