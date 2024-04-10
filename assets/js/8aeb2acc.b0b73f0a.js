"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[23811],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Installing Epinio On Rancher",sidebar_position:15,title:""},s="Rancher configuration",p={unversionedId:"howtos/install_epinio_on_rancher",id:"version-1.6.2/howtos/install_epinio_on_rancher",title:"",description:"Before installing Epinio, you need a running Rancher instance.",source:"@site/versioned_docs/version-1.6.2/howtos/install_epinio_on_rancher.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_rancher",permalink:"/1.6.2/howtos/install_epinio_on_rancher",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.2/howtos/install_epinio_on_rancher.md",tags:[],version:"1.6.2",sidebarPosition:15,frontMatter:{sidebar_label:"Installing Epinio On Rancher",sidebar_position:15,title:""},sidebar:"docs",previous:{title:"How To Use Custom Application Helm Charts",permalink:"/1.6.2/howtos/using_custom_appcharts"},next:{title:"Installing Epinio On RKE2 (Rancher)",permalink:"/1.6.2/howtos/install_epinio_on_rke"}},u={},c=[{value:"Kubernetes cluster",id:"kubernetes-cluster",level:2},{value:"Rancher settings",id:"rancher-settings",level:3},{value:"Epinio Prerequisites",id:"epinio-prerequisites",level:2},{value:"Install an Ingress controller",id:"install-an-ingress-controller",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Install Epinio",id:"install-epinio",level:2},{value:"Access the Epinio menu",id:"access-the-epinio-menu",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rancher-configuration"},"Rancher configuration"),(0,r.kt)("p",null,"Before installing Epinio, you need a running Rancher instance."),(0,r.kt)("p",null,"If you do not have such, please use the Rancher's ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs"},"installation guides")," to set one up."),(0,r.kt)("p",null,"This how-to was written using the following versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,r.kt)("li",{parentName:"ul"},"Rancher 2.6.3")),(0,r.kt)("h2",{id:"kubernetes-cluster"},"Kubernetes cluster"),(0,r.kt)("p",null,"The two supported methods are to either deploy a new cluster or to import an existing one into Rancher. The steps to take for either method are detailed in the Rancher documentation (See ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Provisioning"),").",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"While it is possible (for development) to deploy Epinio on the same node where Rancher is installed, this requires more steps and is not supported by Rancher either.")),(0,r.kt)("h3",{id:"rancher-settings"},"Rancher settings"),(0,r.kt)("p",null,"At the time of writing, Epinio is not included in the latest stable Rancher version.",(0,r.kt)("br",null),"\nThis means that you have to update two settings in your Rancher dashboard.",(0,r.kt)("br",null),"\nGo to ",(0,r.kt)("inlineCode",{parentName:"p"},"Global settings")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced settings"),"  and update the following settings:",(0,r.kt)("br",null)),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ui-dashboard-index")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://releases.rancher.com/dashboard/epinio-v0.6.0/index.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ui-offline-preferred")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Remote"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Please keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-dashboard-index")," value will change over time until it's merged in stable Rancher version.")),(0,r.kt)("h2",{id:"epinio-prerequisites"},"Epinio Prerequisites"),(0,r.kt)("h3",{id:"install-an-ingress-controller"},"Install an Ingress controller"),(0,r.kt)("p",null,"If there's no Ingress controller running yet on the cluster, you need to install one. In the example below, Traefik will be installed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are in the rancher dashboard in the browser, most likely you already have an Ingress controller\nrunning.")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace")," >  ",(0,r.kt)("inlineCode",{parentName:"p"},"Repositories")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,r.kt)("p",null,"Give a name to the repo and use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://helm.traefik.io/traefik")," as the index URL."),(0,r.kt)("p",null,'Once done, go to the "Charts" menu and install the ',(0,r.kt)("inlineCode",{parentName:"p"},"traefik")," chart."),(0,r.kt)("p",null,"You'll see a screen where you can edit the traefik helm yaml file, make sure to set the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ingressClass.enabled: true\ningressClass.isDefaultClass: true\nports.web.redirectTo: websecure\nservice.spec.loadBalancerIP: # Set this to the IP of your load balancer if you know that\n")),(0,r.kt)("p",null,"See also the ",(0,r.kt)("a",{parentName:"p",href:"/1.6.2/installation/install_epinio#ingress-controller"},"Install Epinio")," page for more details."),(0,r.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,r.kt)("p",null,"If cert manager is not installed yet, you can install it by adding the relevant repository\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace")," >  ",(0,r.kt)("inlineCode",{parentName:"p"},"Repositories")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")),(0,r.kt)("p",null,"Give a name to the repo and use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://charts.jetstack.io")," as the index URL."),(0,r.kt)("p",null,'Once done, go to the "Charts" menu and install the ',(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," chart."),(0,r.kt)("p",null,"You'll see a screen where you can edit the cert-manager helm yaml file, make sure to set the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"installCRDs: true\nextraArgs:\n- '--enable-certificate-owner-ref=true'\n")),(0,r.kt)("p",null,"See also the ",(0,r.kt)("a",{parentName:"p",href:"/1.6.2/installation/install_epinio#cert-manager"},"Install Epinio")," page for more details."),(0,r.kt)("h2",{id:"install-epinio"},"Install Epinio"),(0,r.kt)("p",null,"In the Rancher Dashboard, go to the cluster on where you want to install Epinio."),(0,r.kt)("p",null,"Add the Epinio Helm repo in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace")," >  ",(0,r.kt)("inlineCode",{parentName:"p"},"Repositories")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")),(0,r.kt)("p",null,"Give a name to the repo and use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://epinio.github.io/helm-charts")," as index URL."),(0,r.kt)("p",null,'Once done, go to the "Charts" menu and install the ',(0,r.kt)("inlineCode",{parentName:"p"},"epinio")," chart."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: While you can select the version you want, it's strongly advised you choose the latest one (default). This how-to was written with version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7.1"),". ")),(0,r.kt)("p",null,"Click install in the top right corner."),(0,r.kt)("p",null,"On the next screen, you can select a namespace where the deployment will happen. You also have to set a name for the deployment."),(0,r.kt)("p",null,"The following screen is where you can configure Epinio according to your needs.",(0,r.kt)("br",null),"\nThe 2 most important settings here are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Domain"),": ",(0,r.kt)("a",{parentName:"li",href:"/1.6.2/installation/dns_setup"},"Explained here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Access control allow origin"),":  It is mandatory to insert your Rancher dashboard URL into this field. It basically allows Rancher to talk with the Epinio API.")),(0,r.kt)("p",null,"Once everything is configured, click on the install button and then wait a few minutes for the installation to complete.",(0,r.kt)("br",null),"\nAfter that follow the instructions given by the Helm install command output."),(0,r.kt)("h2",{id:"access-the-epinio-menu"},"Access the Epinio menu"),(0,r.kt)("p",null,'Click on the "burger" menu icon (\u2630) at the top left and then the Epinio icon under ',(0,r.kt)("strong",{parentName:"p"},"GLOBAL APPS"),"."),(0,r.kt)("p",null,"You should see your fresh Epinio instance there."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ATTENTION: If you use an untrusted certificate, you have to click on the URL, accept the security exception and use the refresh button shown below the page title, i.e. ",(0,r.kt)("strong",{parentName:"p"},"Epinio instances"),".\nNow the state should be available and you can access the instance by clicking on its name.")),(0,r.kt)("p",null,"Once you are in your Epinio instance, you can either deploy or delete things like applications, namespaces or configurations."))}d.isMDXComponent=!0}}]);