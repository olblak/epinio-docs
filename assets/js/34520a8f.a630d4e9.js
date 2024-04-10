"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[41859],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(o,".").concat(g)]||m[g]||c[g]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Install Epinio on EKS",sidebar_position:23,title:""},o="Creating an EKS Kubernetes Cluster",p={unversionedId:"howtos/install_epinio_on_eks",id:"version-1.5.0/howtos/install_epinio_on_eks",title:"",description:"This how-to was written using the following versions:",source:"@site/versioned_docs/version-1.5.0/howtos/install_epinio_on_eks.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_eks",permalink:"/1.5.0/howtos/install_epinio_on_eks",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.0/howtos/install_epinio_on_eks.md",tags:[],version:"1.5.0",sidebarPosition:23,frontMatter:{sidebar_label:"Install Epinio on EKS",sidebar_position:23,title:""},sidebar:"docs",previous:{title:"Install Wordpress with Epinio",permalink:"/1.5.0/howtos/install_wordpress_application"},next:{title:"Global System Requirements",permalink:"/1.5.0/references/system_requirements/global"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create EKS Kubernetes Cluster",id:"create-eks-kubernetes-cluster",level:2},{value:"Install AWS Load Balancer Controller",id:"install-aws-load-balancer-controller",level:2},{value:"Install Cert Manager",id:"install-cert-manager",level:2},{value:"Install Nginx Ingress Controller",id:"install-nginx-ingress-controller",level:2},{value:"Add Helm repo",id:"add-helm-repo",level:3},{value:"Install",id:"install",level:3},{value:"Create Ingress object for Nginx",id:"create-ingress-object-for-nginx",level:3},{value:"Install Epinio on the Cluster",id:"install-epinio-on-the-cluster",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-an-eks-kubernetes-cluster"},"Creating an EKS Kubernetes Cluster"),(0,l.kt)("p",null,"This how-to was written using the following versions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-1.1.0"},"epinio helm chart - v1.1.0")),(0,l.kt)("li",{parentName:"ul"},"AWS EKS - Kubernetes v1.22"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress Nginx- v1.3.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/"},"Aws Load Balancer Controller - v2.4.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cert-manager/cert-manager"},"Cert Manager - v1.9.1"))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl - v1.22")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"aws cli - v2.7.19")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/pt_br/eks/latest/userguide/eksctl.html"},"eksctl - v0.106.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"AWS Public Cetificate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-creating.html"},"AWS WAF - Web ACL"))),(0,l.kt)("h2",{id:"create-eks-kubernetes-cluster"},"Create EKS Kubernetes Cluster"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ensure that you ran ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html"},"aws configure"))," before you proceed with the steps bellow.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"eksctl create cluster \\\n  --name <cluster-name> \\\n  --version 1.22 \\\n  --nodegroup-name <node-group-name> \\\n  --node-type <node-size> \\\n  --nodes <node-qty>\n")),(0,l.kt)("h2",{id:"install-aws-load-balancer-controller"},"Install AWS Load Balancer Controller"),(0,l.kt)("p",null,"The AWS controller is needed to let us interact with AWS ELB service."),(0,l.kt)("p",null,"Please follow the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/deploy/installation/"},"Official Installation Guide")," to get it up and running."),(0,l.kt)("h2",{id:"install-cert-manager"},"Install Cert Manager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add cert-manager https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager --namespace cert-manager --create-namespace jetstack/cert-manager --set installCRDs=true --set extraArgs={--enable-certificate-owner-ref=true}\n")),(0,l.kt)("h2",{id:"install-nginx-ingress-controller"},"Install Nginx Ingress Controller"),(0,l.kt)("h3",{id:"add-helm-repo"},"Add Helm repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\n")),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"controller.service.type"),": must be 'NodePort' to be able to create AWS Application LoadBalancer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"controller.config.use-forwarded-headers"),": must be set TRUE, if not, you are not be able to run 'epinio app exec' command.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm upgrade --install nginx ingress-nginx/ingress-nginx --namespace nginx --create-namespace --set controller.service.type=NodePort  --set-string controller.config.use-forwarded-headers="true"\n')),(0,l.kt)("h3",{id:"create-ingress-object-for-nginx"},"Create Ingress object for Nginx"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a file with the content below;"),(0,l.kt)("li",{parentName:"ul"},"Create ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"AWS Ceriticate Manager")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-creating.html"},"AWS WAF Web ACL"),";"),(0,l.kt)("li",{parentName:"ul"},"Place the resources ARN in the respective annotations section."),(0,l.kt)("li",{parentName:"ul"},"Execute 'kubectl apply -f ....'")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nginx-ingress\n  namespace: nginx\n  annotations:\n    alb.ingress.kubernetes.io/healthcheck-path: /healthz\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/ssl-redirect: '443'\n    alb.ingress.kubernetes.io/listen-ports: '[{\"HTTP\": 80}, {\"HTTPS\":443}]'\n    alb.ingress.kubernetes.io/certificate-arn: <put_your_certificate_arn_here>\n    alb.ingress.kubernetes.io/wafv2-acl-arn: <put_your_waf_arn_here>\nspec:\n  ingressClassName: alb\n  rules:\n  - host: '*.example.com' #Change it to you domain\n    http:\n      paths:\n      - pathType: Prefix\n        path: \"/\"\n        backend:\n          service:\n            name: nginx-ingress-nginx-controller\n            port:\n              number: 80\n")),(0,l.kt)("p",null,"After execute 'kubectl apply', AWS will automatically:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provision a new Application LB;"),(0,l.kt)("li",{parentName:"ul"},"Create a Target Group pointing to your nginx-controller POD;"),(0,l.kt)("li",{parentName:"ul"},"Associate the Application LB and Target Group;"),(0,l.kt)("li",{parentName:"ul"},"Associate the Application LB with WAF.")),(0,l.kt)("p",null,"Get the ALB DNS name and create a CNAME dns entry pointing to it:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Record name: *.example.com"),(0,l.kt)("li",{parentName:"ul"},"Type: CNAME"),(0,l.kt)("li",{parentName:"ul"},"Value: ALB DNS name")),(0,l.kt)("p",null,"Test it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nslookup test.example.com\n")),(0,l.kt)("p",null,"You should get the ALB dns name as an answer"),(0,l.kt)("h2",{id:"install-epinio-on-the-cluster"},"Install Epinio on the Cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install epinio -n epinio --create-namespace epinio/epinio --set global.domain=example.com --set global.tlsIssuer=letsencrypt-epinio --set ingress.ingressClassName=nginx\n")))}g.isMDXComponent=!0}}]);