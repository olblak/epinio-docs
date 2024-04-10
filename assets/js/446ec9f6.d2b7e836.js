"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[1403],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],s={sidebar_label:"Installing Epinio on EKS",sidebar_position:23,title:"Installing Epinio on EKS",description:"How to install Epinio on EKS, the Elastic Kubernetes Service.",keywords:["kubernetes","epinio","eks","elastic kubernetes service","install"]},o=void 0,c={unversionedId:"installation/other_inst_scenarios/install_epinio_on_eks",id:"version-1.11.0/installation/other_inst_scenarios/install_epinio_on_eks",title:"Installing Epinio on EKS",description:"How to install Epinio on EKS, the Elastic Kubernetes Service.",source:"@site/versioned_docs/version-1.11.0/installation/other_inst_scenarios/install_epinio_on_eks.md",sourceDirName:"installation/other_inst_scenarios",slug:"/installation/other_inst_scenarios/install_epinio_on_eks",permalink:"/installation/other_inst_scenarios/install_epinio_on_eks",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.11.0/installation/other_inst_scenarios/install_epinio_on_eks.md",tags:[],version:"1.11.0",sidebarPosition:23,frontMatter:{sidebar_label:"Installing Epinio on EKS",sidebar_position:23,title:"Installing Epinio on EKS",description:"How to install Epinio on EKS, the Elastic Kubernetes Service.",keywords:["kubernetes","epinio","eks","elastic kubernetes service","install"]},sidebar:"docs",previous:{title:"Installing Epinio on public clouds",permalink:"/installation/other_inst_scenarios/install_epinio_on_public_cloud"},next:{title:"Quickstart",permalink:"/tutorials/quickstart"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create EKS Kubernetes cluster",id:"create-eks-kubernetes-cluster",level:2},{value:"Install Cert Manager",id:"install-cert-manager",level:2},{value:"Install Nginx Ingress Controller",id:"install-nginx-ingress-controller",level:2},{value:"Add Helm repo and then install",id:"add-helm-repo-and-then-install",level:3},{value:"Create a CNAME DNS entry pointing to a ELB endpoint",id:"create-a-cname-dns-entry-pointing-to-a-elb-endpoint",level:3},{value:"Install Epinio on the cluster",id:"install-epinio-on-the-cluster",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To install on Elastic Kubernetes Service (EKS) this How-to uses these versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-1.6.2"},"epinio helm chart - v1.6.2")),(0,i.kt)("li",{parentName:"ul"},"AWS EKS - Kubernetes v1.22, v1.23",(0,i.kt)("strong",{parentName:"li"},"*")," or v1.24",(0,i.kt)("strong",{parentName:"li"},"*")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress Nginx - v1.6.4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cert-manager/cert-manager"},"Cert Manager - v1.11.0"))),(0,i.kt)("admonition",{title:"Additional requirements for EKS v1.23 and v1.24",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Since EKS v1.23 you need to configure and install an out-of-tree AWS EBS CSI driver add-on into your EKS cluster.\nPlease refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html"},"EKS documentation")," for details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Since EKS v1.24 you need to explicitly allow pulling Epinio's app container images from its internal HTTP registry.\nThis is due to the removal of ",(0,i.kt)("inlineCode",{parentName:"p"},"dockershim")," CRI support and its replacement by ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd"),", which supports only trusted HTTPS registries by default.\nThis configuration is needed on all EKS nodes before deploying an Epinio app:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p /etc/containerd/certs.d/127.0.0.1:30500\ncat > /etc/containerd/certs.d/127.0.0.1:30500/hosts.toml <<EOF\nserver = "http://127.0.0.1:30500"\n\n[host."http://127.0.0.1:30500"]\n  capabilities = ["pull"]\nEOF\n')),(0,i.kt)("p",{parentName:"li"},"  Rather than doing this manually, it's easier to apply ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/epinio/epinio/main/scripts/eks-cri-allow-http-registries.yaml"},"this manifest"),". This does the node configuration for you.\nYou need to edit the manifest to use the correct node count for your cluster.")))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl - v1.22")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_get/"},"helm - v3.11.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"aws cli - v2.9.14")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"eksctl - v0.115.0"))),(0,i.kt)("h2",{id:"create-eks-kubernetes-cluster"},"Create EKS Kubernetes cluster"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You need to run ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html"},"aws configure"))," before proceeding with the steps below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eksctl create cluster \\\n  --name=<cluster-name> \\\n  --region=us-west-1 \\\n  --nodes=2 \\\n  --node-type=t3.xlarge \\\n  --node-volume-size=40 \\\n  --managed \\\n  --kubeconfig=kubeconfig-eks\n")),(0,i.kt)("p",null,"Once the EKS cluster is deployed, try to access the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=$PWD/kubeconfig-eks\nkubectl get nodes\n")),(0,i.kt)("h2",{id:"install-cert-manager"},"Install Cert Manager"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add cert-manager https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager --namespace cert-manager --create-namespace jetstack/cert-manager --set installCRDs=true --set extraArgs={--enable-certificate-owner-ref=true}\n")),(0,i.kt)("h2",{id:"install-nginx-ingress-controller"},"Install Nginx Ingress Controller"),(0,i.kt)("h3",{id:"add-helm-repo-and-then-install"},"Add Helm repo and then install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install nginx ingress-nginx/ingress-nginx --namespace nginx --create-namespace --set controller.ingressClassResource.default=true\n")),(0,i.kt)("h3",{id:"create-a-cname-dns-entry-pointing-to-a-elb-endpoint"},"Create a CNAME DNS entry pointing to a ELB endpoint"),(0,i.kt)("p",null,"The ELB (Elastic Load Balancer) endpoint is automatically assigned after installing ingress-nginx-controller.\nTo get the assigned ELB endpoint in your cluster run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n nginx nginx-ingress-nginx-controller \\\n  -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'\n")),(0,i.kt)("p",null,"This returns output like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"a113b33f6500241a77dcacc1b62c54eb-1234567890.us-west-1.elb.amazonaws.com\n")),(0,i.kt)("p",null,"Use that ELB endpoint value when creating the CNAME record for your DNS zone (for example, in the AWS Route53 service):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Record name: *.example.com\nType: CNAME\nValue: a113b33f6500241a77dcacc1b62c54eb-1234567890.us-west-1.elb.amazonaws.com\n")),(0,i.kt)("p",null,"Test it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nslookup test.example.com\n")),(0,i.kt)("p",null,"You will receive the ELB endpoint value as the answer."),(0,i.kt)("h2",{id:"install-epinio-on-the-cluster"},"Install Epinio on the cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install epinio epinio/epinio --namespace epinio \\\n  --create-namespace --set global.domain=example.com \\\n  --set global.tlsIssuer=letsencrypt-production \\\n  --set global.tlsIssuerEmail=email@example.com\n")))}d.isMDXComponent=!0}}]);