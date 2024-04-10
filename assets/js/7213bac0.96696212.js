"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[37445],{3905:function(n,e,i){i.d(e,{Zo:function(){return p},kt:function(){return d}});var t=i(67294);function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function o(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function a(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function c(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var u=t.createContext({}),s=function(n){var e=t.useContext(u),i=e;return n&&(i="function"==typeof n?n(e):a(a({},e),n)),i},p=function(n){var e=s(n.components);return t.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var i=n.components,r=n.mdxType,o=n.originalType,u=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),f=s(i),d=r,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return i?t.createElement(m,a(a({ref:e},p),{},{components:i})):t.createElement(m,a({ref:e},p))}));function d(n,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=i.length,a=new Array(o);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var s=2;s<o;s++)a[s]=i[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}f.displayName="MDXCreateElement"},16528:function(n,e,i){i.r(e),i.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var t=i(83117),r=i(80102),o=(i(67294),i(3905)),a=["components"],c={title:"",sidebar_label:"epinio configuration unbind"},u=void 0,s={unversionedId:"references/commands/cli/configuration/epinio_configuration_unbind",id:"version-1.7.0/references/commands/cli/configuration/epinio_configuration_unbind",title:"",description:"epinio configuration unbind",source:"@site/versioned_docs/version-1.7.0/references/commands/cli/configuration/epinio_configuration_unbind.md",sourceDirName:"references/commands/cli/configuration",slug:"/references/commands/cli/configuration/epinio_configuration_unbind",permalink:"/1.7.0/references/commands/cli/configuration/epinio_configuration_unbind",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.7.0/references/commands/cli/configuration/epinio_configuration_unbind.md",tags:[],version:"1.7.0",frontMatter:{title:"",sidebar_label:"epinio configuration unbind"},sidebar:"docs",previous:{title:"epinio configuration show",permalink:"/1.7.0/references/commands/cli/configuration/epinio_configuration_show"},next:{title:"epinio configuration update",permalink:"/1.7.0/references/commands/cli/configuration/epinio_configuration_update"}},p={},l=[{value:"epinio configuration unbind",id:"epinio-configuration-unbind",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:l};function d(n){var e=n.components,i=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-configuration-unbind"},"epinio configuration unbind"),(0,o.kt)("p",null,"Unbind configuration from an application"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Unbind configuration by name, from named application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio configuration unbind NAME APP [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for unbind\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.7.0/references/commands/cli/configuration/epinio_configuration"},"epinio configuration"),"\t - Epinio configuration features")))}d.isMDXComponent=!0}}]);