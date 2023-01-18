"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[5788],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,d=f["".concat(a,".").concat(m)]||f[m]||u[m]||o;return r?t.createElement(d,s(s({ref:n},p),{},{components:r})):t.createElement(d,s({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58907:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var t=r(83117),i=r(80102),o=(r(67294),r(3905)),s=["components"],c={title:"",sidebar_label:"epinio service show"},a=void 0,l={unversionedId:"references/commands/cli/service/epinio_service_show",id:"version-1.6.0/references/commands/cli/service/epinio_service_show",title:"",description:"epinio service show",source:"@site/versioned_docs/version-1.6.0/references/commands/cli/service/epinio_service_show.md",sourceDirName:"references/commands/cli/service",slug:"/references/commands/cli/service/epinio_service_show",permalink:"/references/commands/cli/service/epinio_service_show",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.0/references/commands/cli/service/epinio_service_show.md",tags:[],version:"1.6.0",frontMatter:{title:"",sidebar_label:"epinio service show"},sidebar:"docs",previous:{title:"epinio service list",permalink:"/references/commands/cli/service/epinio_service_list"},next:{title:"epinio service unbind",permalink:"/references/commands/cli/service/epinio_service_unbind"}},p={},u=[{value:"epinio service show",id:"epinio-service-show",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-service-show"},"epinio service show"),(0,o.kt)("p",null,"Show details of a service SERVICENAME"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio service show SERVICENAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for show\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/service/epinio_service"},"epinio service"),"\t - Epinio service management")))}m.isMDXComponent=!0}}]);