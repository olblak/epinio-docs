"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[22141],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,p=function(e,t){if(null==e)return{};var n,i,p={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=p,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?i.createElement(d,r(r({ref:t},s),{},{components:n})):i.createElement(d,r({ref:t},s))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,r=new Array(a);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,r[1]=o;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var i=n(83117),p=n(80102),a=(n(67294),n(3905)),r=["components"],o={sidebar_label:"epinio app",title:"",description:"epinio app",keywords:["epinio","kubernetes","epinio app"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-app"],"doc-persona":["epinio-developer","epinio-operator"]},c=void 0,l={unversionedId:"references/commands/cli/app/epinio_app",id:"version-1.11.0/references/commands/cli/app/epinio_app",title:"",description:"epinio app",source:"@site/versioned_docs/version-1.11.0/references/commands/cli/app/epinio_app.md",sourceDirName:"references/commands/cli/app",slug:"/references/commands/cli/app/epinio_app",permalink:"/references/commands/cli/app/epinio_app",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.11.0/references/commands/cli/app/epinio_app.md",tags:[],version:"1.11.0",frontMatter:{sidebar_label:"epinio app",title:"",description:"epinio app",keywords:["epinio","kubernetes","epinio app"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-app"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"epinio app env unset",permalink:"/references/commands/cli/app/env/epinio_app_env_unset"},next:{title:"epinio app create",permalink:"/references/commands/cli/app/epinio_app_create"}},s={},m=[{value:"epinio app",id:"epinio-app",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:m};function f(e){var t=e.components,n=(0,p.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"epinio-app"},"epinio app"),(0,a.kt)("p",null,"Epinio application features"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Manage epinio application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"epinio app [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for app\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -H, --header stringArray       Add custom header to every request executed\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-file string        (TRACE_FILE) Print trace messages to the specified file\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --trace-output string      (TRACE_OUTPUT) Sets trace output format [text,json] (default "text")\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/chart/epinio_app_chart"},"epinio app chart"),"\t - Epinio application chart management"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_create"},"epinio app create"),"\t - Create just the app, without creating a workload"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_delete"},"epinio app delete"),"\t - Deletes one or more applications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/env/epinio_app_env"},"epinio app env"),"\t - Epinio application configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_exec"},"epinio app exec"),"\t - creates a shell to the application"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_export"},"epinio app export"),"\t - Export the named application into the directory or flag-specified registry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_list"},"epinio app list"),"\t - Lists applications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_logs"},"epinio app logs"),"\t - Streams the logs of the application"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_manifest"},"epinio app manifest"),"\t - Save state of the named application as a manifest"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_port-forward"},"epinio app port-forward"),"\t - forward one or more local ports to a pod"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_push"},"epinio app push"),"\t - Push an application declared in the specified manifest"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_restage"},"epinio app restage"),"\t - Restage the application, then restart, if running and not suppressed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_restart"},"epinio app restart"),"\t - Restart the application"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_show"},"epinio app show"),"\t - Describe the named application"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app_update"},"epinio app update"),"\t - Update the named application")))}f.isMDXComponent=!0}}]);