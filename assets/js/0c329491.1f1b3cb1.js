"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74203:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Installing Epinio on EKS",sidebar_position:26,title:""},o="Creating an EKS Kubernetes Cluster",p={unversionedId:"howtos/install_epinio_on_eks",id:"version-1.7.1/howtos/install_epinio_on_eks",title:"",description:"This how-to was written using the following versions:",source:"@site/versioned_docs/version-1.7.1/howtos/install_epinio_on_eks.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_eks",permalink:"/1.7.1/howtos/install_epinio_on_eks",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.7.1/howtos/install_epinio_on_eks.md",tags:[],version:"1.7.1",sidebarPosition:26,frontMatter:{sidebar_label:"Installing Epinio on EKS",sidebar_position:26,title:""},sidebar:"docs",previous:{title:"How To Install Wordpress With Epinio",permalink:"/1.7.1/howtos/install_wordpress_application"},next:{title:"AWS IAM integration",permalink:"/1.7.1/howtos/aws_iam_integration"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create EKS Kubernetes Cluster",id:"create-eks-kubernetes-cluster",level:2},{value:"Install Cert Manager",id:"install-cert-manager",level:2},{value:"Install Nginx Ingress Controller",id:"install-nginx-ingress-controller",level:2},{value:"Add Helm repo",id:"add-helm-repo",level:3},{value:"Install",id:"install",level:3},{value:"Create a CNAME DNS entry pointing to ELB endpoint",id:"create-a-cname-dns-entry-pointing-to-elb-endpoint",level:3},{value:"Install Epinio on the Cluster",id:"install-epinio-on-the-cluster",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-an-eks-kubernetes-cluster"},"Creating an EKS Kubernetes Cluster"),(0,l.kt)("p",null,"This how-to was written using the following versions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-1.6.2"},"epinio helm chart - v1.6.2")),(0,l.kt)("li",{parentName:"ul"},"AWS EKS - Kubernetes v1.22, v1.23",(0,l.kt)("strong",{parentName:"li"},"*")," or v1.24",(0,l.kt)("strong",{parentName:"li"},"*")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress Nginx - v1.6.4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cert-manager/cert-manager"},"Cert Manager - v1.11.0"))),(0,l.kt)("admonition",{title:"*) Additional requirements for EKS v1.23 and v1.24",type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Since EKS v1.23 it is necessary to configure and install an out-of-tree AWS EBS CSI driver as an addon into your EKS cluster. Please refer to this ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html"},"EKS documentation")," for more details.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Since EKS v1.24 it is necessary to explicitly allow the pulling of Epinio's app container images from its internal HTTP registry, due to the removal of ",(0,l.kt)("inlineCode",{parentName:"p"},"dockershim")," CRI support and its replacement by ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd"),", which supports only trusted HTTPS registries by default. The following configuration must be done on all EKS nodes prior deploying an Epinio app:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p /etc/containerd/certs.d/127.0.0.1:30500\ncat > /etc/containerd/certs.d/127.0.0.1:30500/hosts.toml <<EOF\nserver = "http://127.0.0.1:30500"\n\n[host."http://127.0.0.1:30500"]\n  capabilities = ["pull"]\nEOF\n')),(0,l.kt)("p",{parentName:"li"},"  Instead of doing this manually it should be easier to simply apply ",(0,l.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/epinio/epinio/main/scripts/eks-cri-allow-http-registries.yaml"},"this manifest")," which will do the nodes configuration for you, after editing it to use the correct node count.")))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl - v1.22")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_get/"},"helm - v3.11.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"aws cli - v2.9.14")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"eksctl - v0.115.0"))),(0,l.kt)("h2",{id:"create-eks-kubernetes-cluster"},"Create EKS Kubernetes Cluster"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ensure that you ran ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html"},"aws configure"))," before you proceed with the steps below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"eksctl create cluster \\\n  --name=<cluster-name> \\\n  --region=us-west-1 \\\n  --nodes=2 \\\n  --node-type=t3.xlarge \\\n  --node-volume-size=40 \\\n  --managed \\\n  --kubeconfig=kubeconfig-eks\n")),(0,l.kt)("p",null,"Once EKS cluster is deployed try to access the cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=$PWD/kubeconfig-eks\nkubectl get nodes\n")),(0,l.kt)("h2",{id:"install-cert-manager"},"Install Cert Manager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add cert-manager https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager --namespace cert-manager --create-namespace jetstack/cert-manager --set installCRDs=true --set extraArgs={--enable-certificate-owner-ref=true}\n")),(0,l.kt)("h2",{id:"install-nginx-ingress-controller"},"Install Nginx Ingress Controller"),(0,l.kt)("h3",{id:"add-helm-repo"},"Add Helm repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\n")),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install nginx ingress-nginx/ingress-nginx --namespace nginx --create-namespace --set controller.ingressClassResource.default=true\n")),(0,l.kt)("h3",{id:"create-a-cname-dns-entry-pointing-to-elb-endpoint"},"Create a CNAME DNS entry pointing to ELB endpoint"),(0,l.kt)("p",null,"The ELB endpoint is automatically assigned after installing ingress-nginx-controller. For getting the assigned ELB endpoint in your cluster run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n nginx nginx-ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'\n>a113b33f6500241a77dcacc1b62c54eb-1234567890.us-west-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,"Use that ELB endpoint value when creating the CNAME record for your DNS zone (for eg. in AWS Route53 service):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Record name: *.example.com\nType: CNAME\nValue: a113b33f6500241a77dcacc1b62c54eb-1234567890.us-west-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,"Test it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nslookup test.example.com\n")),(0,l.kt)("p",null,"You should get the ELB endpoint value as an answer."),(0,l.kt)("h2",{id:"install-epinio-on-the-cluster"},"Install Epinio on the Cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install epinio epinio/epinio --namespace epinio --create-namespace --set global.domain=example.com --set global.tlsIssuer=letsencrypt-production --set global.tlsIssuerEmail=email@example.com\n")))}d.isMDXComponent=!0}}]);