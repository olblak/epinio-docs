"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[20975],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],l={sidebar_label:"Install Epinio on RKE2 (Rancher)",title:""},s="Rancher RKE2 configuration",u={unversionedId:"howtos/install_epinio_on_rke",id:"version-0.8.0/howtos/install_epinio_on_rke",title:"",description:"This page was written using the following versions:",source:"@site/versioned_docs/version-0.8.0/howtos/install_epinio_on_rke.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_rke",permalink:"/0.8.0/howtos/install_epinio_on_rke",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.8.0/howtos/install_epinio_on_rke.md",tags:[],version:"0.8.0",frontMatter:{sidebar_label:"Install Epinio on RKE2 (Rancher)",title:""},sidebar:"docs",previous:{title:"Install Epinio on Rancher",permalink:"/0.8.0/howtos/install_epinio_on_rancher"},next:{title:"Install Epinio on K3s (local)",permalink:"/0.8.0/howtos/install_epinio_on_k3s"}},c={},p=[{value:"Create an RKE2 cluster",id:"create-an-rke2-cluster",level:2},{value:"RKE2 Prerequisites",id:"rke2-prerequisites",level:2},{value:"Installation",id:"installation",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rancher-rke2-configuration"},"Rancher RKE2 configuration"),(0,o.kt)("p",null,"This page was written using the following versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,o.kt)("li",{parentName:"ul"},"RKE2 version v1.22.7+rke2r2")),(0,o.kt)("h2",{id:"create-an-rke2-cluster"},"Create an RKE2 cluster"),(0,o.kt)("p",null,"If you don't have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/quickstart/"},"quickstart")," to create an RKE2 cluster."),(0,o.kt)("h2",{id:"rke2-prerequisites"},"RKE2 Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A load-balancer is mandatory for Epinio to work on RKE2. Here ",(0,o.kt)("a",{parentName:"li",href:"https://metallb.universe.tf"},"MetalLB")," was used as load-balancer.\nSee ",(0,o.kt)("a",{parentName:"li",href:"../howtos/provision_external_ip_for_local_kubernetes"},"Provision of External IP for LoadBalancer service type in Kubernetes")," for more information.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Beside advanced installation options, there are two ways of installing Epinio:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/0.8.0/installation/magicDNS_setup"},"Installation using a MagicDNS Service"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For test environments. This should work on nearly any kubernetes distribution. Epinio will try to automatically create a magic DNS domain, e.g. ",(0,o.kt)("strong",{parentName:"li"},"10.0.0.1.omg.howdoi.website"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/0.8.0/installation/dns_setup"},"DNS setup"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For test and production environments. You will define a system domain, e.g. ",(0,o.kt)("strong",{parentName:"li"},"test.example.com"),".")),(0,o.kt)("p",null,"Then, continue with the ",(0,o.kt)("a",{parentName:"p",href:"/0.8.0/installation/install_epinio"},"Epinio installation process"),"."))}m.isMDXComponent=!0}}]);