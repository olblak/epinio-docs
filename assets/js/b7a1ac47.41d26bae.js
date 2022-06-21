"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[65700],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_label:"Install Epinio on Rancher Desktop (local)",sidebar_position:15,title:""},s="Rancher Desktop configuration",p={unversionedId:"howtos/install_epinio_on_rancher_desktop",id:"howtos/install_epinio_on_rancher_desktop",title:"",description:"This how-to was written using the following versions:",source:"@site/docs/howtos/install_epinio_on_rancher_desktop.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_rancher_desktop",permalink:"/next/howtos/install_epinio_on_rancher_desktop",editUrl:"https://github.com/epinio/docs/docs/howtos/install_epinio_on_rancher_desktop.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_label:"Install Epinio on Rancher Desktop (local)",sidebar_position:15,title:""},sidebar:"docs",previous:{title:"Install Epinio on K3s (local)",permalink:"/next/howtos/install_epinio_on_k3s"},next:{title:"Install Epinio on k3d (local)",permalink:"/next/howtos/install_epinio_on_k3d"}},c={},u=[{value:"Rancher Desktop Prerequisites",id:"rancher-desktop-prerequisites",level:2},{value:"Install Rancher Desktop",id:"install-rancher-desktop",level:3},{value:"Setup Kubernetes",id:"setup-kubernetes",level:2},{value:"Install epinio",id:"install-epinio",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rancher-desktop-configuration"},"Rancher Desktop configuration"),(0,o.kt)("p",null,"This how-to was written using the following versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,o.kt)("li",{parentName:"ul"},"Rancher desktop 1.1.1")),(0,o.kt)("h2",{id:"rancher-desktop-prerequisites"},"Rancher Desktop Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running on Windows requires Windows Subsystem for Linux (WSL) which is automatically installed by Rancher Desktop."),(0,o.kt)("li",{parentName:"ul"},"Epinio currently only supports x86 and will not work with Rancher Desktop for Mac on the M1 chip.")),(0,o.kt)("h3",{id:"install-rancher-desktop"},"Install Rancher Desktop"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"latest version")," of Rancher Desktop for your operating system."),(0,o.kt)("h2",{id:"setup-kubernetes"},"Setup Kubernetes"),(0,o.kt)("p",null,"When running Rancher Desktop for the first time, wait until the initialization is completed."),(0,o.kt)("p",null,"Make sure that Kubernetes is enabled and a supported version is selected under ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes Settings")," (Epinio has been tested on ",(0,o.kt)("strong",{parentName:"p"},"v1.22.7"),", ",(0,o.kt)("strong",{parentName:"p"},"v1.21.10")," and ",(0,o.kt)("strong",{parentName:"p"},"v1.20.15"),")."),(0,o.kt)("p",null,"Make sure that Traefik is enabled or you have otherwise installed a Ingress controller. "),(0,o.kt)("h2",{id:"install-epinio"},"Install epinio"),(0,o.kt)("p",null,"Make sure Rancher Desktop is running."),(0,o.kt)("p",null,"Rancher Desktop can report Kubernetes as running while some pods are actually not yet ready.\nManual verification is possible by executing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," in a terminal and checking that all pods report either ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed")," as their status."),(0,o.kt)("p",null,"Rancher Desktop configures it's own loadbalancer to expose Traefik on ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". We can use this with a wildcard DNS to get a system domain of ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1.sslip.io")),(0,o.kt)("p",null,"The Epinio installation is pretty much identical on Linux, MacOS and Windows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a terminal, use ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"powershell")," on Windows (latest one is preferred) and your preferred one on Linux/MacOS.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("a",{parentName:"p",href:"/next/installation/install_epinio_cli"},"Epinio CLI"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/next/installation/install_epinio"},"Epinio installation process"),". Copied here:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.yaml  \n\n# Wait for cert-manager to stabilize\n\n$ helm repo add epinio https://epinio.github.io/helm-charts\n$ helm install epinio -n epinio --create-namespace epinio/epinio --set global.domain=127.0.0.1.sslip.io\n\n$ epinio login [URL]\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For RancherDesktop on Linux, in order to be able to open ports from ",(0,o.kt)("inlineCode",{parentName:"p"},"443")," (and above), in order to access the URL set in ",(0,o.kt)("inlineCode",{parentName:"p"},"global.domain")," (i.e. 127.0.0.1.sslip.io), you need to set the start port of the ",(0,o.kt)("inlineCode",{parentName:"p"},"unprivileged")," list to a lower number:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"# [Optional] Check the current unprivileged port start\nsysctl -n net.ipv4.ip_unprivileged_port_start\n\n# Temporary modification of the unprivileged port start\nsudo sysctl -w net.ipv4.ip_unprivileged_port_start=443\n\n# Permanent modification of the unprivileged port start\nsudo sh -c 'echo \"net.ipv4.ip_unprivileged_port_start=443\" >> /etc/sysctl.d/50-unprivileged-ports.conf'\n\n# [Optional] Check the current unprivileged port start\nsysctl -n net.ipv4.ip_unprivileged_port_start\n")),(0,o.kt)("p",{parentName:"div"},"You can find more information in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/576"},"issue"),"."))))}h.isMDXComponent=!0}}]);