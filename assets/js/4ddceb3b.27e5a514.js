"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[75849],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),p=["components"],a={sidebar_label:"epinio app restage",title:"",description:"epinio app restage",keywords:["epinio","kubernetes","epinio app restage"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-app-restage"],"doc-persona":["epinio-developer","epinio-operator"]},s=void 0,c={unversionedId:"references/commands/cli/app/epinio_app_restage",id:"references/commands/cli/app/epinio_app_restage",title:"",description:"epinio app restage",source:"@site/docs/references/commands/cli/app/epinio_app_restage.md",sourceDirName:"references/commands/cli/app",slug:"/references/commands/cli/app/epinio_app_restage",permalink:"/next/references/commands/cli/app/epinio_app_restage",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/references/commands/cli/app/epinio_app_restage.md",tags:[],version:"current",frontMatter:{sidebar_label:"epinio app restage",title:"",description:"epinio app restage",keywords:["epinio","kubernetes","epinio app restage"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-app-restage"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"epinio app push",permalink:"/next/references/commands/cli/app/epinio_app_push"},next:{title:"epinio app restart",permalink:"/next/references/commands/cli/app/epinio_app_restart"}},l={},u=[{value:"epinio app restage",id:"epinio-app-restage",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-app-restage"},"epinio app restage"),(0,o.kt)("p",null,"Restage the application, then restart, if running and not suppressed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app restage NAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help         help for restage\n      --no-restart   Do not restart application after restaging\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -H, --header stringArray       Add custom header to every request executed\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-file string        (TRACE_FILE) Print trace messages to the specified file\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --trace-output string      (TRACE_OUTPUT) Sets trace output format [text,json] (default "text")\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/references/commands/cli/app/epinio_app"},"epinio app"),"\t - Epinio application features")))}d.isMDXComponent=!0}}]);