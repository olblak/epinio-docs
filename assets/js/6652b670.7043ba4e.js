"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[74679],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={sidebar_label:"Install Epinio on Rancher Desktop (local)"},s="Rancher Desktop configuration",p={unversionedId:"howtos/install_epinio_on_rancher_desktop",id:"version-0.6.2/howtos/install_epinio_on_rancher_desktop",title:"Rancher Desktop configuration",description:"This how-to was written using the following versions:",source:"@site/versioned_docs/version-0.6.2/howtos/install_epinio_on_rancher_desktop.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_rancher_desktop",permalink:"/0.6.2/howtos/install_epinio_on_rancher_desktop",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.6.2/howtos/install_epinio_on_rancher_desktop.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"Install Epinio on Rancher Desktop (local)"},sidebar:"docs",previous:{title:"Install Epinio on K3s (local)",permalink:"/0.6.2/howtos/install_epinio_on_k3s"},next:{title:"Install Epinio on k3d (local)",permalink:"/0.6.2/howtos/install_epinio_on_k3d"}},u={},c=[{value:"Rancher Desktop Prerequisites",id:"rancher-desktop-prerequisites",level:2},{value:"Install Rancher Desktop",id:"install-rancher-desktop",level:3},{value:"Setup Kubernetes",id:"setup-kubernetes",level:2},{value:"Install epinio",id:"install-epinio",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rancher-desktop-configuration"},"Rancher Desktop configuration"),(0,i.kt)("p",null,"This how-to was written using the following versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,i.kt)("li",{parentName:"ul"},"Rancher desktop 1.1.1")),(0,i.kt)("h2",{id:"rancher-desktop-prerequisites"},"Rancher Desktop Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running on Windows requires Windows Subsystem for Linux (WSL) which is automatically installed by Rancher Desktop."),(0,i.kt)("li",{parentName:"ul"},"Epinio currently only supports x86 and will not work with Rancher Desktop for Mac on the M1 chip.")),(0,i.kt)("h3",{id:"install-rancher-desktop"},"Install Rancher Desktop"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"latest version")," of Rancher Desktop for your operating system."),(0,i.kt)("h2",{id:"setup-kubernetes"},"Setup Kubernetes"),(0,i.kt)("p",null,"When running Rancher Desktop for the first time, wait until the initialization is completed."),(0,i.kt)("p",null,"Make sure that Kubernetes is enabled and a supported version is selected under ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes Settings")," (Epinio has been tested on ",(0,i.kt)("strong",{parentName:"p"},"v1.22.7"),", ",(0,i.kt)("strong",{parentName:"p"},"v1.21.10")," and ",(0,i.kt)("strong",{parentName:"p"},"v1.20.15"),")."),(0,i.kt)("p",null,"Make sure that Traefik is enabled or you have otherwise installed a Ingress controller. "),(0,i.kt)("h2",{id:"install-epinio"},"Install epinio"),(0,i.kt)("p",null,"Make sure Rancher Desktop is running."),(0,i.kt)("p",null,"Rancher Desktop can report Kubernetes as running while some pods are actually not yet ready.\nManual verification is possible by executing the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," in a terminal and checking that all pods report either ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed")," as their status."),(0,i.kt)("p",null,"Rancher Desktop configures it's own loadbalancer to expose Traefik on ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". We can use this with a wildcard DNS to get a system domain of ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1.sslip.io")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export EPINIO_SYSTEM_DOMAIN=${LB_IP}.omg.howdoi.website\n")),(0,i.kt)("p",null,"Previous commands are for Bash, but can be easily adapted for Windows shell."),(0,i.kt)("p",null,'If you don\'t want to use the default "magic" DNS, please follow ',(0,i.kt)("a",{parentName:"p",href:"/0.6.2/installation/dns_setup"},"DNS setup"),"."),(0,i.kt)("p",null,"The Epinio installation is pretty much identical on Linux, MacOS and Windows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start a terminal, use ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell")," on Windows (latest one is preferred) and your preferred one on Linux/MacOS.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("a",{parentName:"p",href:"/0.6.2/installation/install_epinio_cli"},"Epinio CLI"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow the ",(0,i.kt)("a",{parentName:"p",href:"/0.6.2/installation/"},"Epinio installation process"),". Copied here:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.yaml  \n\n# Wait for cert-manager to stabilize\n\n$ helm repo add epinio https://epinio.github.io/helm-charts\n$ helm install epinio -n epinio --create-namespace epinio/epinio --values epinio-values.yaml --set global.domain=127.0.0.1.sslip.io\n\n$ epinio settings update\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: there is currently a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/576"},"blocking issue")," on Linux which prevent Epinio to push application!\nHowever, you will find a workaround at the end of the issue.")))}h.isMDXComponent=!0}}]);