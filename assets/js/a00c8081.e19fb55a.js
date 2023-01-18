"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[27656],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],r={sidebar_label:"Epinio Journey: Single Dev Workflow",title:""},p=void 0,s={unversionedId:"tutorials/single-dev-workflow",id:"version-1.1.0/tutorials/single-dev-workflow",title:"",description:"Introduction",source:"@site/versioned_docs/version-1.1.0/tutorials/single-dev-workflow.md",sourceDirName:"tutorials",slug:"/tutorials/single-dev-workflow",permalink:"/1.1.0/tutorials/single-dev-workflow",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.1.0/tutorials/single-dev-workflow.md",tags:[],version:"1.1.0",frontMatter:{sidebar_label:"Epinio Journey: Single Dev Workflow",title:""},sidebar:"docs",previous:{title:"Quick Start",permalink:"/1.1.0/tutorials/quickstart"},next:{title:"Install Epinio",permalink:"/1.1.0/installation/install_epinio"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Optional Additional binaries",id:"optional-additional-binaries",level:3},{value:"Installation",id:"installation",level:2},{value:"CLI",id:"cli",level:3},{value:"Login",id:"login",level:3},{value:"Deploy your application with Epinio",id:"deploy-your-application-with-epinio",level:2},{value:"List the applications deployed",id:"list-the-applications-deployed",level:3},{value:"View installation logs",id:"view-installation-logs",level:3},{value:"View application logs",id:"view-application-logs",level:3},{value:"Create a new port-forward",id:"create-a-new-port-forward",level:3},{value:"Scale your application",id:"scale-your-application",level:3},{value:"Remove your application",id:"remove-your-application",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/1.1.0/tutorials/quickstart"},"quickstart")," is great to get started, as a Developer, you might want to see end-to-end solutions and how Epinio can help you.\nThat's exactly the aim of the \"Epinio Journeys\", where you'll be able to follow different use-cases, according to your needs."),(0,i.kt)("p",null,"In this particular tutorial, we focus on the workflow for a solo developer with an example from a bare Kubernetes deployment to your first app."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial covers primarily a ",(0,i.kt)("em",{parentName:"p"},"solo and local development")," process. While it still can help developers in teams, future journeys will address it more specifically.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you can use Epinio, you need to have a Kubernetes cluster running."),(0,i.kt)("p",null,"As a solo developer, you might be using a local Kubernetes cluster such as ",(0,i.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop"),", ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube")," or ",(0,i.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d"),", just to name a few."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial will not explain how to install a local Kubernetes cluster and assumes you know how to do it.\nHowever, depending on your choice, there's already some examples in the ",(0,i.kt)("strong",{parentName:"p"},"Epinio Howtos")," section which contains links to the respective clusters' installation docs.")),(0,i.kt)("p",null,"In this tutorial, we'll use ",(0,i.kt)("a",{parentName:"p",href:"/1.1.0/howtos/install_epinio_on_rancher_desktop"},"Rancher Desktop")," as our local Kubernetes cluster. However you should be able to follow this tutorial with the local Kubernetes cluster of your choice."),(0,i.kt)("p",null,"If not already done, you can install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"latest version")," of Rancher Desktop for your operating system."),(0,i.kt)("h3",{id:"optional-additional-binaries"},"[Optional]"," Additional binaries"),(0,i.kt)("p",null,"Two additional binaries need to be installed in your system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," for communicating with the Kubernetes cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm")," for deploying the Epinio Helm Charts"))),(0,i.kt)("p",null,"Depending on the local Kubernetes cluster you installed (i.e. Rancher Desktop), these two binaries might be already installed."),(0,i.kt)("p",null,"These two binaries will be used for the ",(0,i.kt)("a",{parentName:"p",href:"#installation"},"Installation")," only. The development workflow will use the ",(0,i.kt)("a",{parentName:"p",href:"#cli"},"Epinio CLI")," alone."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Once you have your local Kubernetes cluster installed and running, you can ",(0,i.kt)("a",{parentName:"p",href:"/1.1.0/installation/install_epinio"},"install Epinio"),"."),(0,i.kt)("p",null,"Here are the steps for Rancher Desktop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.yaml\n\n# Wait for cert-manager to stabilize. This should take approximately 30 seconds depending on your Internet connection.\n\nhelm repo add epinio https://epinio.github.io/helm-charts\n\nhelm repo update\n\nhelm install epinio -n epinio --create-namespace epinio/epinio --set global.domain=127.0.0.1.sslip.io\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can find the password needed for the ",(0,i.kt)("a",{parentName:"p",href:"#login"},"login")," at the end of the installation output.")),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("p",null,"To interact with your Epinio installation, you've to download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/releases/latest"},"Epinio CLI binary"),". The binary is available for the three main Operating Systems (OS), so pick the one suited for your own OS."),(0,i.kt)("h3",{id:"login"},"Login"),(0,i.kt)("p",null,"The first task to perform after Epinio installation, is to ",(0,i.kt)("a",{parentName:"p",href:"/1.1.0/references/commands/cli/epinio_login"},"login")," with the binary you downloaded:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"epinio login -u admin 'https://epinio.127.0.0.1.sslip.io'\n\n# Trust the certificate by pressing 'y' and 'enter'\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your local Kubernetes cluster restarts, you only need to login again with the command above. Epinio stays installed and the certificates are still valid.")),(0,i.kt)("p",null,"You can confirm that you're logged in by checking the Epinio settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"epinio settings show\n")),(0,i.kt)("p",null,"Alternatively, you can also open the Epinio URL, ",(0,i.kt)("a",{parentName:"p",href:"https://epinio.127.0.0.1.sslip.io"},"https://epinio.127.0.0.1.sslip.io"),", in your preferred browser and use the web UI."),(0,i.kt)("h2",{id:"deploy-your-application-with-epinio"},"Deploy your application with Epinio"),(0,i.kt)("p",null,'Now that the "operational" tasks are done, it\'s time to concentrate on the most important task: use Epinio to deploy your application.'),(0,i.kt)("p",null,"Epinio uses ",(0,i.kt)("a",{parentName:"p",href:"https://paketo.io/"},"Paketo buildpacks")," to create a container image for your application. This image is then used to create a container with your application, which will run on your local Kubernetes cluster. You can find additional information about ",(0,i.kt)("a",{parentName:"p",href:"/1.1.0/explanations/detailed-push-process#7-stage"},"the push process explained here"),"."),(0,i.kt)("p",null,"Epinio will also create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress route"),", which will allow you to easily access your application once it's deployed."),(0,i.kt)("p",null,"The whole process is handled by Epinio, which enables you to concentrate on your application rather than knowing how you'll be able to deploy it."),(0,i.kt)("p",null,"Let's see first how to deploy a simple application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Example code: https://github.com/epinio/example-12factor\n\n# Move to the source code directory. Here is an example:\ncd /github/example-12factor\n\n# Deploy your application\nepinio push -n mysimpleapp\n")),(0,i.kt)("p",null,"At the end of the deployment output, you have the URL to be used for checking your application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Deploying application ...\n..............\n\ud83d\udd5e  Creating application resources\n\u2714\ufe0f  App is online.\nName: mysimpleapp\nNamespace: workspace\nBuilder Image:\nRoutes:\n1: https://mysimpleapp.127.0.0.1.sslip.io\n")),(0,i.kt)("h3",{id:"list-the-applications-deployed"},"List the applications deployed"),(0,i.kt)("p",null,"If you're working on many applications, it can be really useful to see when was the last time they were deployed and which URL you should use to check them."),(0,i.kt)("p",null,"You can get the application's information with the following two commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# List all deployed applications\nepinio app list\n\n# Display the applications information\nepinio app show mysimpleapp\n")),(0,i.kt)("h3",{id:"view-installation-logs"},"View installation logs"),(0,i.kt)("p",null,"If your application couldn't be deployed, you might want to check your staging logs or, even better, save them into a file for a better screening with a text editor."),(0,i.kt)("p",null,"You can access the installation logs by running the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"epinio app logs --staging mysimpleapp\n")),(0,i.kt)("h3",{id:"view-application-logs"},"View application logs"),(0,i.kt)("p",null,"Another type of logs that you can access is the application logs. And specially with web applications, you might want to have realtime logs displaying so you spot bugs faster."),(0,i.kt)("p",null,"Epinio can display the logs both statically or dynamically as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Display logs statically\nepinio app logs mysimpleapp\n\n# Display logs dynamically\nepinio app logs --follow mysimpleapp\n")),(0,i.kt)("h3",{id:"create-a-new-port-forward"},"Create a new port-forward"),(0,i.kt)("p",null,"As described above, Epinio creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress route")," for your application. The route is bound by default to the port ",(0,i.kt)("inlineCode",{parentName:"p"},"443"),"."),(0,i.kt)("p",null,"However, you might need to test parts of your application using a different port. For these specific cases, you can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"epinio app port-forward 8080:8080 mysimpleapp\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can specify only one port number. In that case, Epinio will open the port of both ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"remote")," targets."),(0,i.kt)("p",{parentName:"admonition"},"For more information, you can see the ",(0,i.kt)("a",{parentName:"p",href:"/1.1.0/howtos/port_forwarding"},"Port Fowarding page"),".")),(0,i.kt)("h3",{id:"scale-your-application"},"Scale your application"),(0,i.kt)("p",null,"Another common task with Cloud Native applications, is to add (and remove) several instances of your application. This feature, called scaling, can be achieved with Epinio with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"epinio app update mysimpleapp --instances 3\n")),(0,i.kt)("p",null,"After you scaled your application up or down, you can check the status with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"epinio app show mysimpleapp\n")),(0,i.kt)("h2",{id:"remove-your-application"},"Remove your application"),(0,i.kt)("p",null,"Once your application is no more needed on your local Kubernetes cluster, and you want to free resources, you can uninstall it with Epinio as follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Delete the application\nepinio app delete mysimpleapp\n\n# List all the applications, the application should not be shown\nepinio app list\n")))}h.isMDXComponent=!0}}]);