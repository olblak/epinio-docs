"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[57734],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),c=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(a,".").concat(d)]||f[d]||u[d]||o;return t?i.createElement(m,s(s({ref:n},l),{},{components:t})):i.createElement(m,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30696:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],p={title:"epinio info"},a=void 0,c={unversionedId:"references/cli/epinio_info",id:"version-0.8.0/references/cli/epinio_info",title:"epinio info",description:"epinio info",source:"@site/versioned_docs/version-0.8.0/references/cli/epinio_info.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_info",permalink:"/0.8.0/references/cli/epinio_info",editUrl:"https://github.com/epinio/docs/versioned_docs/version-0.8.0/references/cli/epinio_info.md",tags:[],version:"0.8.0",frontMatter:{title:"epinio info"},sidebar:"docs",previous:{title:"epinio settings update",permalink:"/0.8.0/references/cli/epinio_settings_update"},next:{title:"epinio namespace",permalink:"/0.8.0/references/cli/epinio_namespace"}},l={},u=[{value:"epinio info",id:"epinio-info",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-info"},"epinio info"),(0,o.kt)("p",null,"Shows information about the Epinio environment"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Shows status and versions for epinio's server-side components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio info [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for info\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.8.0/references/cli/epinio"},"epinio"),"\t - Epinio cli")))}d.isMDXComponent=!0}}]);