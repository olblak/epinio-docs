"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[74969],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],a={title:"",sidebar_label:"epinio push"},p=void 0,l={unversionedId:"references/cli/epinio_push",id:"version-0.9.0/references/cli/epinio_push",title:"",description:"epinio push",source:"@site/versioned_docs/version-0.9.0/references/cli/epinio_push.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_push",permalink:"/0.9.0/references/cli/epinio_push",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.9.0/references/cli/epinio_push.md",tags:[],version:"0.9.0",frontMatter:{title:"",sidebar_label:"epinio push"},sidebar:"docs",previous:{title:"epinio namespace show",permalink:"/0.9.0/references/cli/epinio_namespace_show"},next:{title:"epinio server",permalink:"/0.9.0/references/cli/epinio_server"}},c={},u=[{value:"epinio push",id:"epinio-push",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-push"},"epinio push"),(0,o.kt)("p",null,"Push an application declared in the specified manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio push [flags] [PATH_TO_APPLICATION_MANIFEST]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --app-chart string             App chart to use for deployment\n  -b, --bind strings                 configurations to bind immediately\n      --builder-image string         Paketo builder image to use for staging\n      --container-image-url string   Container image url for the app workload image\n  -e, --env strings                  environment variables to be used\n  -g, --git string                   Git repository and revision of sources separated by comma (e.g. GIT_URL,REVISION)\n  -h, --help                         help for push\n  -i, --instances int32              The number of instances the application should have (default 1)\n  -n, --name string                  Application name. (mandatory if no manifest is provided)\n  -p, --path string                  Path to application sources.\n  -r, --route strings                Custom route to use for the application (a subdomain of the default domain will be used if this is not set). Can be set multiple times to use multiple routes with the same application.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio"},"epinio"),"\t - Epinio cli")))}d.isMDXComponent=!0}}]);