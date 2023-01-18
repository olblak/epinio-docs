"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[84146],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(t),f=r,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return t?i.createElement(d,s(s({ref:n},l),{},{components:t})):i.createElement(d,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7139:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),s=["components"],a={title:"",sidebar_label:"epinio push"},p=void 0,c={unversionedId:"references/commands/cli/epinio_push",id:"version-1.0.0/references/commands/cli/epinio_push",title:"",description:"epinio push",source:"@site/versioned_docs/version-1.0.0/references/commands/cli/epinio_push.md",sourceDirName:"references/commands/cli",slug:"/references/commands/cli/epinio_push",permalink:"/1.0.0/references/commands/cli/epinio_push",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.0.0/references/commands/cli/epinio_push.md",tags:[],version:"1.0.0",frontMatter:{title:"",sidebar_label:"epinio push"},sidebar:"docs",previous:{title:"epinio login",permalink:"/1.0.0/references/commands/cli/epinio_login"},next:{title:"epinio server",permalink:"/1.0.0/references/commands/cli/epinio_server"}},l={},u=[{value:"epinio push",id:"epinio-push",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-push"},"epinio push"),(0,o.kt)("p",null,"Push an application declared in the specified manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio push [flags] [PATH_TO_APPLICATION_MANIFEST]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --app-chart string             App chart to use for deployment\n  -b, --bind strings                 configurations to bind immediately\n      --builder-image string         Paketo builder image to use for staging\n      --container-image-url string   Container image url for the app workload image\n  -e, --env strings                  environment variables to be used\n  -g, --git string                   Git repository and revision of sources separated by comma (e.g. GIT_URL,REVISION)\n  -h, --help                         help for push\n  -i, --instances int32              The number of instances the application should have (default 1)\n  -n, --name string                  Application name. (mandatory if no manifest is provided)\n  -p, --path string                  Path to application sources.\n  -r, --route strings                Custom route to use for the application (a subdomain of the default domain will be used if this is not set). Can be set multiple times to use multiple routes with the same application.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli")))}f.isMDXComponent=!0}}]);