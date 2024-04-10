"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[42935],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),a=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=a(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=a(t),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return t?i.createElement(d,c(c({ref:n},p),{},{components:t})):i.createElement(d,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var a=2;a<o;a++)c[a]=t[a];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88888:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),c=["components"],l={title:"",sidebar_label:"epinio client-sync"},s=void 0,a={unversionedId:"references/commands/cli/epinio_client-sync",id:"version-1.8.0/references/commands/cli/epinio_client-sync",title:"",description:"epinio client-sync",source:"@site/versioned_docs/version-1.8.0/references/commands/cli/epinio_client-sync.md",sourceDirName:"references/commands/cli",slug:"/references/commands/cli/epinio_client-sync",permalink:"/1.8.0/references/commands/cli/epinio_client-sync",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.8.0/references/commands/cli/epinio_client-sync.md",tags:[],version:"1.8.0",frontMatter:{title:"",sidebar_label:"epinio client-sync"},sidebar:"docs",previous:{title:"epinio cli",permalink:"/1.8.0/references/commands/cli/epinio"},next:{title:"epinio completion",permalink:"/1.8.0/references/commands/cli/epinio_completion"}},p={},u=[{value:"epinio client-sync",id:"epinio-client-sync",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-client-sync"},"epinio client-sync"),(0,o.kt)("p",null,"Downloads a client binary matching the currently logged server"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Synchronizes the epinio client with the server by downloading the matching binary and replacing the current one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio client-sync [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for client-sync\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.8.0/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli")))}m.isMDXComponent=!0}}]);