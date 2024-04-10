"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[5341],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84394:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],p={sidebar_label:"epinio app chart default",title:"",description:"epinio app chart default",keywords:["epinio","kubernetes","epinio app chart default"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-app-chart-default"],"doc-persona":["epinio-developer","epinio-operator"]},c=void 0,l={unversionedId:"references/commands/cli/app/chart/epinio_app_chart_default",id:"references/commands/cli/app/chart/epinio_app_chart_default",title:"",description:"epinio app chart default",source:"@site/docs/references/commands/cli/app/chart/epinio_app_chart_default.md",sourceDirName:"references/commands/cli/app/chart",slug:"/references/commands/cli/app/chart/epinio_app_chart_default",permalink:"/next/references/commands/cli/app/chart/epinio_app_chart_default",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/references/commands/cli/app/chart/epinio_app_chart_default.md",tags:[],version:"current",frontMatter:{sidebar_label:"epinio app chart default",title:"",description:"epinio app chart default",keywords:["epinio","kubernetes","epinio app chart default"],"doc-type":["reference"],"doc-topic":["epinio","reference","epinio-cli","epinio-app-chart-default"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"epinio app chart",permalink:"/next/references/commands/cli/app/chart/epinio_app_chart"},next:{title:"epinio app chart list",permalink:"/next/references/commands/cli/app/chart/epinio_app_chart_list"}},s={},u=[{value:"epinio app chart default",id:"epinio-app-chart-default",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"epinio-app-chart-default"},"epinio app chart default"),(0,a.kt)("p",null,"Set or show app chart default"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Set or show app chart default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"epinio app chart default [CHARTNAME] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for default\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -H, --header stringArray       Add custom header to every request executed\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-file string        (TRACE_FILE) Print trace messages to the specified file\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --trace-output string      (TRACE_OUTPUT) Sets trace output format [text,json] (default "text")\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/references/commands/cli/app/chart/epinio_app_chart"},"epinio app chart"),"\t - Epinio application chart management")))}d.isMDXComponent=!0}}]);