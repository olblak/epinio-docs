"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[62348],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),g=r,m=f["".concat(u,".").concat(g)]||f[g]||l[g]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],c={sidebar_label:"Creating a Git configuration",sidebar_position:13,title:"Creating a Git configuration",description:"How to create a Git configuration",keywords:["epinio","kubernetes","git configuration"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","customize","create-git-config"],"doc-persona":["epinio-operator"]},u=void 0,s={unversionedId:"howtos/customization/create_git_configuration",id:"howtos/customization/create_git_configuration",title:"Creating a Git configuration",description:"How to create a Git configuration",source:"@site/docs/howtos/customization/create_git_configuration.md",sourceDirName:"howtos/customization",slug:"/howtos/customization/create_git_configuration",permalink:"/next/howtos/customization/create_git_configuration",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/customization/create_git_configuration.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Creating a Git configuration",sidebar_position:13,title:"Creating a Git configuration",description:"How to create a Git configuration",keywords:["epinio","kubernetes","git configuration"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","customize","create-git-config"],"doc-persona":["epinio-operator"]},sidebar:"docs",previous:{title:"Creating a custom service",permalink:"/next/howtos/customization/create_custom_service"},next:{title:"Creating A custom role",permalink:"/next/howtos/customization/create_custom_role"}},p={},l=[],f={toc:l};function g(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As described\n",(0,i.kt)("a",{parentName:"p",href:"/next/references/git_configuration"},"in the Git Configuration reference page"),",\nEpinio Git Configurations are Kubernetes secrets with a particular label."),(0,i.kt)("p",null,"Creation is done with the\n",(0,i.kt)("a",{parentName:"p",href:"/next/references/commands/cli/gitconfig/epinio_gitconfig_create"},"epinio gitconfig create"),"\ncommand."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"epinio gitconfig create github-epinio-example-go-configuration https://github.com \\\n    --git-provider github \\\n    --user-org epinio \\\n    --repository example-go \\\n    --skip-ssl \\\n    --username myuser \\\n    --password abcde12345 \\\n    --cert-file /path/to/some/certfile\n")),(0,i.kt)("p",null,"The only required arguments are the name of the git configuration, and the repository URL.\nEverything else is optional, and specified through flags."),(0,i.kt)("p",null,"If, for example, to skip the SSL configuration for a particular provider use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio gitconfig create mygit-config https://gitlab.mydomain.com --skip-ssl\n")))}g.isMDXComponent=!0}}]);