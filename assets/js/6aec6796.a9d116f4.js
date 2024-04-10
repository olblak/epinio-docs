"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[33639],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75888:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=t(83117),o=t(80102),r=(t(67294),t(3905)),a=["components"],l={sidebar_label:"epinio login",title:"",description:"epinio login",keywords:["epinio","kubernetes","epinio login"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-login"],"doc-persona":["epinio-developer","epinio-operator"]},s=void 0,c={unversionedId:"references/commands/cli/epinio_login",id:"references/commands/cli/epinio_login",title:"",description:"epinio login",source:"@site/docs/references/commands/cli/epinio_login.md",sourceDirName:"references/commands/cli",slug:"/references/commands/cli/epinio_login",permalink:"/next/references/commands/cli/epinio_login",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/references/commands/cli/epinio_login.md",tags:[],version:"current",frontMatter:{sidebar_label:"epinio login",title:"",description:"epinio login",keywords:["epinio","kubernetes","epinio login"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-login"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"epinio info",permalink:"/next/references/commands/cli/epinio_info"},next:{title:"epinio logout",permalink:"/next/references/commands/cli/epinio_logout"}},p={},u=[{value:"epinio login",id:"epinio-login",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"epinio-login"},"epinio login"),(0,r.kt)("p",null,"Epinio login to the server"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The login command allows you to authenticate against an Epinio instance and updates the settings file with the generated authentication token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"epinio login [URL] [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help              help for login\n      --oidc              perform OIDC authentication (user and password will be ignored)\n  -p, --password string   password that will be used to login\n      --prompt            enable the prompt of the authorization code and disable the local server during OIDC authentication\n      --trust-ca          automatically trust the unknown CA\n  -u, --user string       username that will be used to login\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -H, --header stringArray       Add custom header to every request executed\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-file string        (TRACE_FILE) Print trace messages to the specified file\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --trace-output string      (TRACE_OUTPUT) Sets trace output format [text,json] (default "text")\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli")))}f.isMDXComponent=!0}}]);