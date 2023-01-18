"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[91234],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76502:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Advanced topics",title:""},l="Advanced Topics",p={unversionedId:"explanations/advanced",id:"version-0.9.0/explanations/advanced",title:"",description:"Contents",source:"@site/versioned_docs/version-0.9.0/explanations/advanced.md",sourceDirName:"explanations",slug:"/explanations/advanced",permalink:"/0.9.0/explanations/advanced",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.9.0/explanations/advanced.md",tags:[],version:"0.9.0",frontMatter:{sidebar_label:"Advanced topics",title:""},sidebar:"docs",previous:{title:"",permalink:"/0.9.0/explanations/"},next:{title:"Detailed Push Process",permalink:"/0.9.0/explanations/detailed-push-process"}},c={},u=[{value:"Contents",id:"contents",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ingress controller",id:"ingress-controller",level:3},{value:"Cert Manager",id:"cert-manager",level:3},{value:"Epinio installed components",id:"epinio-installed-components",level:2},{value:"Epinio API server",id:"epinio-api-server",level:3},{value:"Kubed",id:"kubed",level:3},{value:"Minio",id:"minio",level:3},{value:"Container Registry",id:"container-registry",level:3},{value:"Other Advanced Topics",id:"other-advanced-topics",level:2},{value:"Git Pushing",id:"git-pushing",level:3}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-topics"},"Advanced Topics"),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#epinio-advanced-topics"},"Epinio, Advanced Topics"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contents"},"Contents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites"},"Epinio prerequisites"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ingress-controller"},"Ingress Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cert-manager"},"Cert Manager")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#epinio-installed-components"},"Epinio installed components"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#kubed"},"Kubed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#minio"},"Minio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#container-registry"},"Container Registry")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#other-advanced-topics"},"Other Advanced Topics"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#git-pushing"},"Git Pushing"))))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"There are some components that need to be installed on a Kubernetes cluster before\nEpinio is installed. Epinio helm chart doesn't deploy these components."),(0,a.kt)("h3",{id:"ingress-controller"},"Ingress controller"),(0,a.kt)("p",null,"On a kubernetes cluster, some services need to be accessible from outside.\nFor Epinio, the ",(0,a.kt)("inlineCode",{parentName:"p"},"API server")," is one of them., and the various applications\ndeployed with Epinio might need to be also reachable from outside."),(0,a.kt)("p",null,"One way to expose services to the world is by creating ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress resources"),".\nIngress resources on their own, have no effect. They are just descriptions of what kind of routing is desired. The actual implementation of this\nwiring is handled by what is called, an Ingress controller."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Most clusters will have an Ingress controller deployed by default. If that's not the case, ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/kubernetes-ingress/"},"Traefik")," can be installed.\nOther Ingress controllers should work too but Traefik is what is used in Epinio CI to test it."),(0,a.kt)("p",{parentName:"blockquote"},"Read the installation documentation on how to install Traefik: ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/installation/install_epinio#ingress-controller"},"Install ingress controller"))),(0,a.kt)("p",null,"An Ingress resource will be created for the Epinio API server and for each application deployed by Epinio."),(0,a.kt)("h3",{id:"cert-manager"},"Cert Manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},"Upstream documentation")),(0,a.kt)("p",null,"Cert Manager is a Kubernetes controller that generates and renews Certificates needed in order to\nserve the various accessible endpoints over TLS (e.g. the Epinio API server)."),(0,a.kt)("p",null,"Epinio supports various options when it comes to certificate issuers (let's encrypt, private CA, bring your own CA, self signed certs).\nCert Manager simplifies the way we handle the various different certificate issuers within Epinio."),(0,a.kt)("p",null,"You can read more about certificate issuers here: ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/howtos/certificate_issuers"},"certificate issuers documentation")),(0,a.kt)("h2",{id:"epinio-installed-components"},"Epinio installed components"),(0,a.kt)("p",null,"The official way to install Epinio is with the ",(0,a.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/epinio/epinio"},"Epinio helm chart"),".\nThis helm chart installs Epinio and additional components, listed below, that are needed for Epinio to work."),(0,a.kt)("h3",{id:"epinio-api-server"},"Epinio API server"),(0,a.kt)("p",null,"The main component of Epinio is the API server. The same ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio")," binary is both\nthe server and the cli. The server is started with ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio server")," command in a properly configured Kubernetes Pod."),(0,a.kt)("p",null,'Epinio cli and web UI functionality are both implemented using the endpoints provided by the Epinio API server\ncomponent. For example, when the user asks Epinio to "push" an application, the\ncli will contact the "Upload", "Stage" and "Deploy" endpoints of the Epinio API to upload the application code,\ncreate a container image for the application using this code and run the application on the cluster.'),(0,a.kt)("p",null,"The Epinio API server is running on the cluster and made accessible using Kubernetes resources like\nDeployments, Services,  Ingresses and Secrets."),(0,a.kt)("h3",{id:"kubed"},"Kubed"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeops/kubed"},"Upstream documentation")),(0,a.kt)("p",null,"Kubed is installed by Epinio to keep secrets that are needed in more than\none namespace synced. For example, the image pull secret is needed in every application namespace\nso that Kubernetes can pull the built application images from the ",(0,a.kt)("a",{parentName:"p",href:"#container-registry"},"Container Registry"),"."),(0,a.kt)("p",null,"Kubed makes sure that if the source secret changes, the copy will change too."),(0,a.kt)("p",null,"Warning: this doesn't mean things will still work if you re-generate a secret manually. Secret rotation will be handled by Epinio in the future."),(0,a.kt)("h3",{id:"minio"},"Minio"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/minio/minio"},"Upstream project link")),(0,a.kt)("p",null,"Minio is a storage solution that implements the same API as ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),"."),(0,a.kt)("p",null,"When the user pushes an application using a source code directory (with the ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/references/cli/epinio_push"},(0,a.kt)("inlineCode",{parentName:"a"},"epinio push"))," command), the first step taken by the cli is to put the source code into a tarball and upload that to the Epinio API server. The server copies that to the configured S3 storage to be used later during the staging of the application."),(0,a.kt)("p",null,"When installing Epinio, the user can choose to use an external S3 compatible storage or let Epinio install Minio on the cluster (",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/howtos/setup_external_s3"},"See here how"),")."),(0,a.kt)("h3",{id:"container-registry"},"Container Registry"),(0,a.kt)("p",null,"The result of Epinio's application staging is a container image. This image is used to create a Kubernetes deployment to run the application code.\nThe staging Job requires that image to be written to some container registry (See also ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/explanations/detailed-push-process"},"Detailed push process"),"). "),(0,a.kt)("p",null,"By default the Epinio installation deploys a container registry inside the Kubernetes cluster to make the process easy and fast."),(0,a.kt)("p",null,"Epinio comes with two consumers of this registry:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Staging job - pushing the images"),(0,a.kt)("li",{parentName:"ol"},"Kubernetes - pulling the images when a Deployment is created for the Application")),(0,a.kt)("p",null,"Ideally all consumers will communicate with the registry over TLS to keep the communication encrypted.\nEpinio controls the staging job and ensures that whatever CA is used to sign the registry certificate is trusted by it. Achieving the same for Kubernetes however requires configuration that cannot happen from within the cluster, therefore Epinio has no way to ensure that. Theoretically there are 3 options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Let the Epinio user manually configure Kubernetes to trust the CA"),(0,a.kt)("li",{parentName:"ol"},"Use a well-known trusted CA, so there's no configuration needed"),(0,a.kt)("li",{parentName:"ol"},"Don't encrypt the communication at all")),(0,a.kt)("p",null,"Currently Epinio doesn't support the first 2 options. If ",(0,a.kt)("inlineCode",{parentName:"p"},"containerregistry.enabled")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," during installation (default), Epinio will make Kubernetes pull the images unencrypted (option #3 above).\nIf encryption is desired, the container registry should be installed manually and configured as an ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/howtos/setup_external_registry"},'"external" registry')," during Epinio installation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Communication between the staging Job and the container registry is encrypted with TLS even when the built-in container registry is used.")),(0,a.kt)("h2",{id:"other-advanced-topics"},"Other Advanced Topics"),(0,a.kt)("h3",{id:"git-pushing"},"Git Pushing"),(0,a.kt)("p",null,"The quick way of pushing an application, as explained at\n",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/tutorials/quickstart#push-an-application"},"Quickstart: Push an application"),", uses a local\ndirectory containing a checkout of the application's sources."),(0,a.kt)("p",null,"Internally this is actually ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/explanations/detailed-push-process"},"quite complex"),". It\ninvolves the creation and upload of an archive (tarball or zip) from these sources by the client\nto the Epinio server, copying into Epinio's internal (or external) S3 storage,\ncopying from that storage to a PersistentVolumeClaim to be used in the job for staging,\ni.e. compilation and creation of the docker image to be used by the underlying kubernetes cluster."),(0,a.kt)("p",null,'The process is a bit different when using the Epinio client\'s "git mode". In\nthis mode ',(0,a.kt)("a",{parentName:"p",href:"/0.9.0/references/cli/epinio_push"},(0,a.kt)("inlineCode",{parentName:"a"},"epinio push"))," does not take a local directory of sources, but the\nlocation of a git repository holding the sources, and the id of the revision to\nuse. The client then asks the Epinio server to pull those sources and store them to the\nS3 storage. The rest of the process is the same."),(0,a.kt)("p",null,"The syntax is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"epinio push --name NAME --git GIT-REPOSITORY-URL,REVISION\n")),(0,a.kt)("p",null,"For comparison all the relevant syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"epinio push\nepinio push MANIFEST-PATH\nepinio push --name NAME\nepinio push --name NAME --path DIRECTORY\nepinio push --name NAME --git GIT-REPOSITORY-URL,REVISION\n")))}d.isMDXComponent=!0}}]);