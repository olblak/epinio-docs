"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[55323],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(t),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(d,p(p({ref:n},s),{},{components:t})):r.createElement(d,p({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),p=["components"],a={title:"",sidebar_label:"epinio app exec"},c=void 0,l={unversionedId:"references/commands/cli/app/epinio_app_exec",id:"version-1.6.0/references/commands/cli/app/epinio_app_exec",title:"",description:"epinio app exec",source:"@site/versioned_docs/version-1.6.0/references/commands/cli/app/epinio_app_exec.md",sourceDirName:"references/commands/cli/app",slug:"/references/commands/cli/app/epinio_app_exec",permalink:"/references/commands/cli/app/epinio_app_exec",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.0/references/commands/cli/app/epinio_app_exec.md",tags:[],version:"1.6.0",frontMatter:{title:"",sidebar_label:"epinio app exec"},sidebar:"docs",previous:{title:"epinio app delete",permalink:"/references/commands/cli/app/epinio_app_delete"},next:{title:"epinio app export",permalink:"/references/commands/cli/app/epinio_app_export"}},s={},u=[{value:"epinio app exec",id:"epinio-app-exec",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-app-exec"},"epinio app exec"),(0,o.kt)("p",null,"creates a shell to the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app exec NAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for exec\n  -i, --instance string   The name of the instance to shell to\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app"},"epinio app"),"\t - Epinio application features")))}m.isMDXComponent=!0}}]);