"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[61470],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(a),d=i,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41063:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=["components"],l={sidebar_label:"Quick Start",sidebar_position:1,title:""},p="QuickStart",s={unversionedId:"tutorials/quickstart",id:"version-1.5.0/tutorials/quickstart",title:"",description:"If you have not already installed epinio follow these links",source:"@site/versioned_docs/version-1.5.0/tutorials/quickstart.md",sourceDirName:"tutorials",slug:"/tutorials/quickstart",permalink:"/1.5.0/tutorials/quickstart",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.0/tutorials/quickstart.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{sidebar_label:"Quick Start",sidebar_position:1,title:""},sidebar:"docs",previous:{title:"Introduction",permalink:"/1.5.0/"},next:{title:"Epinio Journey: Single Dev Workflow",permalink:"/1.5.0/tutorials/single-dev-workflow"}},u={},c=[{value:"Push an application",id:"push-an-application",level:2},{value:"Clone the sample app",id:"clone-the-sample-app",level:3},{value:"Login",id:"login",level:3},{value:"Push an app",id:"push-an-app",level:3},{value:"Note that the <code>--path</code> parameter is optional. If not specified the current working directory will be used. Always ensure that the chosen directory contains a supported application.",id:"note-that-the---path-parameter-is-optional-if-not-specified-the-current-working-directory-will-be-used-always-ensure-that-the-chosen-directory-contains-a-supported-application",level:6},{value:"Note: If you want to know the details of the <code>epinio push</code> process, please read the detailed push docs",id:"note-if-you-want-to-know-the-details-of-the-epinio-push-process-please-read-the-detailed-push-docs",level:6},{value:"Check that your application is working",id:"check-that-your-application-is-working",level:4},{value:"List all commands",id:"list-all-commands",level:3},{value:"Delete an application",id:"delete-an-application",level:3},{value:"Create a separate namespace",id:"create-a-separate-namespace",level:3}],h={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"QuickStart"),(0,o.kt)("p",null,"If you have not already installed ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," follow these links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.0/installation/install_epinio"},"Installation Section"))),(0,o.kt)("p",null,"In this tutorial, you will learn how to create a namespace and how to push, list and delete an application in it."),(0,o.kt)("h2",{id:"push-an-application"},"Push an application"),(0,o.kt)("h3",{id:"clone-the-sample-app"},"Clone the sample app"),(0,o.kt)("p",null,"If you just want an application that works use the one inside the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/tree/main/assets/sample-app"},"sample-app directory"),"."),(0,o.kt)("p",null,"You can copy it to your system with\nthe following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/epinio/epinio.git\ncd epinio/assets/\n")),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"The first task to perform after Epinio installation, is to ",(0,o.kt)("a",{parentName:"p",href:"/1.5.0/references/commands/cli/epinio_login"},"login")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," binary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"epinio login -u admin 'https://epinio.127.0.0.1.sslip.io'\n\n# Trust the certificate by pressing 'y' and 'enter'\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your local Kubernetes cluster restarts, Epinio stays installed and the certificates are still valid, so you don't have to login again.")),(0,o.kt)("p",null,"You can confirm that you're logged in by checking the Epinio settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"epinio settings show\n")),(0,o.kt)("h3",{id:"push-an-app"},"Push an app"),(0,o.kt)("p",null,"There are two ways to push an application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can provide an ",(0,o.kt)("a",{parentName:"li",href:"/1.5.0/references/manifests"},"Application Manifest")," which contains the required configuration for the applications.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio push manifest.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You can provide the configuration as parameters in which case the parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"--name")," is mandatory.\nBecause of the default route the name has to be unique across all namespaces.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio push --name sample --path sample-app\n")),(0,o.kt)("hr",null),(0,o.kt)("h6",{id:"note-that-the---path-parameter-is-optional-if-not-specified-the-current-working-directory-will-be-used-always-ensure-that-the-chosen-directory-contains-a-supported-application"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"h6"},"--path")," parameter is optional. If not specified the current working directory will be used. Always ensure that the chosen directory contains a supported application."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you want to know what applications are supported in Epinio, please read the\n",(0,o.kt)("a",{parentName:"p",href:"/1.5.0/references/supported_applications"},"notes about supported applications"),"."),(0,o.kt)("p",null,"We also provide information about the more advanced ",(0,o.kt)("a",{parentName:"p",href:"/1.5.0/explanations/advanced#git-pushing"},"git model"),"."),(0,o.kt)("hr",null),(0,o.kt)("h6",{id:"note-if-you-want-to-know-the-details-of-the-epinio-push-process-please-read-the-detailed-push-docs"},"Note: If you want to know the details of the ",(0,o.kt)("inlineCode",{parentName:"h6"},"epinio push")," process, please read the ",(0,o.kt)("a",{parentName:"h6",href:"/1.5.0/explanations/detailed-push-process"},"detailed push docs")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"check-that-your-application-is-working"},"Check that your application is working"),(0,o.kt)("p",null,"After the application has been pushed, a unique URL is printed which you can use to access your application. If you don't have this URL available anymore you can find it again by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio app show sample\n")),(0,o.kt)("p",null,'("Routes" is the part your are looking for)'),(0,o.kt)("p",null,"Go ahead and open the application route in your browser!"),(0,o.kt)("h3",{id:"list-all-commands"},"List all commands"),(0,o.kt)("p",null,"To see all the applications you have deployed use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio apps list\n")),(0,o.kt)("h3",{id:"delete-an-application"},"Delete an application"),(0,o.kt)("p",null,"To delete the application you just deployed run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio delete sample\n")),(0,o.kt)("h3",{id:"create-a-separate-namespace"},"Create a separate namespace"),(0,o.kt)("p",null,"If you want to keep your various application separated, you can use the concept of namespaces. Create a new namespace with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio namespace create newspace\n")),(0,o.kt)("p",null,'To start deploying application to this new namespace you have to "target" it:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio target newspace\n")),(0,o.kt)("p",null,"After this and until you target another namespace, whenever you run ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," you will be deploying to this new namespace."))}d.isMDXComponent=!0}}]);