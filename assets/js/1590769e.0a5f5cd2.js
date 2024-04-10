"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[93081],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Git Configuration",title:""},p="Git Configuration",s={unversionedId:"references/git_configuration",id:"version-1.10.0/references/git_configuration",title:"",description:"Overview",source:"@site/versioned_docs/version-1.10.0/references/git_configuration.md",sourceDirName:"references",slug:"/references/git_configuration",permalink:"/1.10.0/references/git_configuration",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.10.0/references/git_configuration.md",tags:[],version:"1.10.0",frontMatter:{sidebar_label:"Git Configuration",title:""},sidebar:"docs",previous:{title:"Configurations",permalink:"/1.10.0/references/configurations"},next:{title:"Application Manifests",permalink:"/1.10.0/references/manifests"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Matching process",id:"matching-process",level:2},{value:"Github/Gitlab specialities",id:"githubgitlab-specialities",level:2},{value:"Detailed specification",id:"detailed-specification",level:2},{value:"Example:",id:"example",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-configuration"},"Git Configuration"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Starting with version ",(0,a.kt)("strong",{parentName:"p"},"1.10.0"),", Epinio supports Git configurations."),(0,a.kt)("p",null,"Configurations enable cloning of private repositories, disabling of SSL verification, and/or\nextending verification through a custom bundle of certificates."),(0,a.kt)("p",null,"This is done on a per git host (+user/org, +repository) basis."),(0,a.kt)("p",null,"Management, including creation, is done through the\n",(0,a.kt)("a",{parentName:"p",href:"/1.10.0/references/commands/cli/gitconfig/epinio_gitconfig"},"epinio gitconfig"),"\ncommand ensemble."),(0,a.kt)("h2",{id:"matching-process"},"Matching process"),(0,a.kt)("p",null,"When importing from a git repository Epinio will use the most specific matching configuration, if\nthere is any."),(0,a.kt)("p",null,"This means that a matching configuration specifying url, user/organization, and repository has\npriority over matching configurations specifying only url and user/organization, or even just the\nurl."),(0,a.kt)("p",null,"If no configuration is found then the cloning from the Git repository will run without any\ncustomization."),(0,a.kt)("h2",{id:"githubgitlab-specialities"},"Github/Gitlab specialities"),(0,a.kt)("p",null,"The public Github and Gitlab mega repositories support the use of a ",(0,a.kt)("inlineCode",{parentName:"p"},"PAT")," (Personal Access Token)\nover a plain combination of user and password."),(0,a.kt)("p",null,"When using a PAT it has to be set as the password, and the user can be set to anything except empty."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For reference, it is useful to set it to the username used to generate the token.")),(0,a.kt)("h2",{id:"detailed-specification"},"Detailed specification"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This section contains information useful to operators for debugging and inspection.\nRegular users should not normally need to consult this section.")),(0,a.kt)("p",null,"A Git configuration is a Kubernetes secret with the ",(0,a.kt)("inlineCode",{parentName:"p"},'epinio.io/api-git-credentials: "true"')," label."),(0,a.kt)("p",null,"The fields are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"url")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"the host of the git instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"provider")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"one of ",(0,a.kt)("inlineCode",{parentName:"td"},"github"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"gitlab"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"git"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"github_enterprise"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"gitlab_enterprise"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"used during the Basic Authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"used during the Basic Authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"userOrg")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"used to restrict the configuration to a specific organization/project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"repo")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"used to restrict the configuration to a specific repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"skipSSL")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"used to skip the SSL verification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"certificate")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"the CA bundle to load for the SSL verification with self-signed certificates")))),(0,a.kt)("p",null,"All the fields, except for the URL, are optional."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"Invoking the commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat > certfile <<EOF\n-----BEGIN CERTIFICATE-----\nMIIBaTCCAQ+gAwIBAgIRAN4tvwEOKogvOzT/KccL8t8wCgYIKoZIzj0EAwIwFDES\n***************\n-----END CERTIFICATE-----\nEOF\n\nepinio gitconfig create github-epinio-example-go-configuration https://github.com \\\n    --git-provider github   \\\n    --user-org     epinio   \\\n    --repository   example-go   \\\n    --skip-ssl          \\\n    --username     myuser   \\\n    --password     abcde12345   \\\n    --cert-file    certfile\n")),(0,a.kt)("p",null,"will generate the secret"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1 \nkind: Secret \ntype: Opaque \nmetadata: \n  labels: \n    epinio.io/api-git-credentials: "true"\n  name: github-epinio-example-go-configuration \n  namespace: epinio \nstringData:\n  url: https://github.com\n  provider: github\n  username: "myuser" \n  password: "abcde12345" \n  userOrg: epinio \n  repo: example-go \n  skipSSL: true \n  certificate: |\n    -----BEGIN CERTIFICATE-----\n    MIIBaTCCAQ+gAwIBAgIRAN4tvwEOKogvOzT/KccL8t8wCgYIKoZIzj0EAwIwFDES\n    ***************\n    -----END CERTIFICATE-----\n')),(0,a.kt)("p",null,"For more examples check the ",(0,a.kt)("a",{parentName:"p",href:"/1.10.0/howtos/customization/create_git_configuration"},"How-to"),"."))}g.isMDXComponent=!0}}]);