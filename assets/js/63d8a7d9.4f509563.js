"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[40713],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],r={sidebar_label:"Quickstart",sidebar_position:1,title:"Quickstart",description:"Get started quickly with Epinio.",keywords:["epinio","kubernetes","quickstart","installation"]},p=void 0,s={unversionedId:"tutorials/quickstart",id:"version-1.11.0/tutorials/quickstart",title:"Quickstart",description:"Get started quickly with Epinio.",source:"@site/versioned_docs/version-1.11.0/tutorials/quickstart.md",sourceDirName:"tutorials",slug:"/tutorials/quickstart",permalink:"/tutorials/quickstart",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.11.0/tutorials/quickstart.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{sidebar_label:"Quickstart",sidebar_position:1,title:"Quickstart",description:"Get started quickly with Epinio.",keywords:["epinio","kubernetes","quickstart","installation"]},sidebar:"docs",previous:{title:"Installing Epinio on EKS",permalink:"/installation/other_inst_scenarios/install_epinio_on_eks"},next:{title:"Namespaces",permalink:"/tutorials/namespace-tutorial"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Deploy Epinio",id:"deploy-epinio",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:4},{value:"Install Epinio",id:"install-epinio",level:4},{value:"Download the Epinio CLI binary",id:"download-the-epinio-cli-binary",level:4},{value:"Deploy an application with Epinio",id:"deploy-an-application-with-epinio",level:2},{value:"Login",id:"login",level:3},{value:"Push an application",id:"push-an-application",level:3},{value:"Sample applications",id:"sample-applications",level:4},{value:"Push an application",id:"push-an-application-1",level:4},{value:"Check your application is working",id:"check-your-application-is-working",level:4},{value:"List all commands",id:"list-all-commands",level:3},{value:"Delete an application",id:"delete-an-application",level:3},{value:"Create a separate namespace",id:"create-a-separate-namespace",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide helps you deploy and use Epinio, with the default options.\nIt's a good configuration for evaluation, or testing,\nusing an existing Kubernetes cluster.\nFor advanced Epinio deployment scenarios look at the\n",(0,o.kt)("a",{parentName:"p",href:"/installation/install_epinio"},"installation")," documentation."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Check your Kubernetes environment meets the Epinio ",(0,o.kt)("a",{parentName:"p",href:"/references/system_requirements/global"},"requirements"),".\nYou'll need both a default ",(0,o.kt)("strong",{parentName:"p"},"StorageClass")," and a default ",(0,o.kt)("strong",{parentName:"p"},"IngressClass"),".\nIf you don't yet have a suitable Kubernetes cluster, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/installation/other_inst_scenarios/install_epinio_on_rke"},"RKE2 Installation")," section to get started."),(0,o.kt)("h3",{id:"deploy-epinio"},"Deploy Epinio"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get nodes -o wide")," command to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNAL-IP")," value of the first Kubernetes node in your cluser.\nYou'll use this value along with a wildcard DNS service domain\n(for eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"sslip.io"),")\nas the helm ",(0,o.kt)("inlineCode",{parentName:"p"},"global.domain")," value for installing Epinio."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you use a local Kubernetes cluster, the value should be ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," no matter the output from the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get nodes")," command above.")),(0,o.kt)("h4",{id:"install-cert-manager"},"Install cert-manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm upgrade --install cert-manager jetstack/cert-manager \\\n    --namespace cert-manager --create-namespace \\\n    --set installCRDs=true\n")),(0,o.kt)("h4",{id:"install-epinio"},"Install Epinio"),(0,o.kt)("p",null,"Then install Epinio by using ",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," as shown below.\nReplace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<INTERNAL-IP>")," placeholder with the correct IP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add epinio https://epinio.github.io/helm-charts\nhelm repo update\nhelm upgrade --install epinio epinio/epinio \\\n    --namespace epinio --create-namespace \\\n    --set global.domain=<INTERNAL-IP>.sslip.io\n")),(0,o.kt)("p",null,"You can then point your browser, or Epinio, CLI at the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://epinio.<INTERNAL-IP>.sslip.io")," url."),(0,o.kt)("h4",{id:"download-the-epinio-cli-binary"},"Download the Epinio CLI binary"),(0,o.kt)("p",null,"Install the latest Epinio CLI with ",(0,o.kt)("inlineCode",{parentName:"p"},"brew"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install epinio\n")),(0,o.kt)("p",null,"Or, download the desired version from the Assets section of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/releases/"},"https://github.com/epinio/epinio/releases/"),"."),(0,o.kt)("h2",{id:"deploy-an-application-with-epinio"},"Deploy an application with Epinio"),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"The first task after an Epinio installation is to ",(0,o.kt)("a",{parentName:"p",href:"/references/commands/cli/epinio_login"},"login")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," binary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"epinio login -u admin 'https://epinio.127.0.0.1.sslip.io'\n\n# Trust the certificate by pressing 'y' and 'enter'\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may encounter an x509 error due to mismatched certificates after a restart.\nYou can resolve it by reloading certificates.\nUs the command ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio settings update-ca"),".\nIt will not be necessary to log in again.")),(0,o.kt)("p",null,"To confirm that you're logged check the Epinio settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"epinio settings show\n")),(0,o.kt)("h3",{id:"push-an-application"},"Push an application"),(0,o.kt)("h4",{id:"sample-applications"},"Sample applications"),(0,o.kt)("p",null,"If you want to try a working application use the one inside the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/tree/main/assets/sample-app"},"sample-app directory"),"."),(0,o.kt)("p",null,"You can copy it to your system with the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/epinio/epinio.git\ncd epinio/assets/\n")),(0,o.kt)("h4",{id:"push-an-application-1"},"Push an application"),(0,o.kt)("p",null,"There are two ways to push an application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can provide an ",(0,o.kt)("a",{parentName:"li",href:"/references/manifests"},"Application Manifest")," which has the needed configuration for the applications.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio push manifest.yaml\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can give the configuration as parameters, in which case ",(0,o.kt)("inlineCode",{parentName:"li"},"--name")," is required.\nAs the default route is used the name must be unique across all namespaces.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio push --name sample --path sample-app\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--path")," parameter is optional.\nIf not specified the current working directory is used.\nAlways check that the chosen directory has a supported application.")),(0,o.kt)("p",null,"You can read about the applications supported in ",(0,o.kt)("a",{parentName:"p",href:"/references/supported_applications"},"Epinio supported applications"),"."),(0,o.kt)("p",null,"There is also information about the more advanced ",(0,o.kt)("a",{parentName:"p",href:"/explanations/advanced#git-pushing"},"git model"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For details of the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," process, read the ",(0,o.kt)("a",{parentName:"p",href:"/explanations/detailed-push-process"},"detailed push docs"),".")),(0,o.kt)("h4",{id:"check-your-application-is-working"},"Check your application is working"),(0,o.kt)("p",null,"When pushing the application, a unique URL is printed on the console.\nYou use this to access your application.\nYou can get this URL again by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio app show sample\n")),(0,o.kt)("p",null,'Navigate to the "Routes" section.'),(0,o.kt)("p",null,"Go ahead and open the application URL in your browser!"),(0,o.kt)("h3",{id:"list-all-commands"},"List all commands"),(0,o.kt)("p",null,"To see a list of deployed applications, use the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio apps list\n")),(0,o.kt)("h3",{id:"delete-an-application"},"Delete an application"),(0,o.kt)("p",null,'To delete the application named "sample" run the following command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio delete sample\n")),(0,o.kt)("h3",{id:"create-a-separate-namespace"},"Create a separate namespace"),(0,o.kt)("p",null,"To keep your applications separated, you can use namespaces.\nCreate a new namespace with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio namespace create newspace\n")),(0,o.kt)("p",null,"To start deploying application to this new namespace you have to target it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio target newspace\n")),(0,o.kt)("p",null,"Until you target another namespace, ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," deploys to ",(0,o.kt)("inlineCode",{parentName:"p"},"newspace"),"."))}m.isMDXComponent=!0}}]);