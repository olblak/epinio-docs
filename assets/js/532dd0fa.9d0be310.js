"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[1644],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return u}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),g=s(i),u=r,d=g["".concat(p,".").concat(u)]||g[u]||f[u]||o;return i?n.createElement(d,c(c({ref:t},l),{},{components:i})):n.createElement(d,c({ref:t},l))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,c=new Array(o);c[0]=g;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=i[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},93064:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return f}});var n=i(83117),r=i(80102),o=(i(67294),i(3905)),c=["components"],a={sidebar_label:"epinio gitconfig create",title:"",description:"epinio gitconfig create",keywords:["epinio","kubernetes","epinio gitconfig create"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-gitconfig-create"],"doc-persona":["epinio-developer","epinio-operator"]},p=void 0,s={unversionedId:"references/commands/cli/gitconfig/epinio_gitconfig_create",id:"references/commands/cli/gitconfig/epinio_gitconfig_create",title:"",description:"epinio gitconfig create",source:"@site/docs/references/commands/cli/gitconfig/epinio_gitconfig_create.md",sourceDirName:"references/commands/cli/gitconfig",slug:"/references/commands/cli/gitconfig/epinio_gitconfig_create",permalink:"/next/references/commands/cli/gitconfig/epinio_gitconfig_create",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/references/commands/cli/gitconfig/epinio_gitconfig_create.md",tags:[],version:"current",frontMatter:{sidebar_label:"epinio gitconfig create",title:"",description:"epinio gitconfig create",keywords:["epinio","kubernetes","epinio gitconfig create"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-gitconfig-create"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"epinio gitconfig",permalink:"/next/references/commands/cli/gitconfig/epinio_gitconfig"},next:{title:"epinio gitconfig delete",permalink:"/next/references/commands/cli/gitconfig/epinio_gitconfig_delete"}},l={},f=[{value:"epinio gitconfig create",id:"epinio-gitconfig-create",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],g={toc:f};function u(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-gitconfig-create"},"epinio gitconfig create"),(0,o.kt)("p",null,"Creates a git configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio gitconfig create ID URL [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --cert-file string      path to file holding supporting certificates\n      --git-provider string   Git provider code [git|github|github_enterprise|gitlab|gitlab_enterprise] (default "git")\n  -h, --help                  help for create\n      --password string       password for logging into the host\n      --repository string     specific repository\n      --skip-ssl              skip SSL\n      --user-org string       user/org holding repository\n      --username string       user name for logging into the host\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -H, --header stringArray       Add custom header to every request executed\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-file string        (TRACE_FILE) Print trace messages to the specified file\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --trace-output string      (TRACE_OUTPUT) Sets trace output format [text,json] (default "text")\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/references/commands/cli/gitconfig/epinio_gitconfig"},"epinio gitconfig"),"\t - Epinio git configuration management")))}u.isMDXComponent=!0}}]);