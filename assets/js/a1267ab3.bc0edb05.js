"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[59844],{3905:function(e,n,t){t.d(n,{Zo:function(){return a},kt:function(){return m}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},a=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||r;return t?o.createElement(d,l(l({ref:n},a),{},{components:t})):o.createElement(d,l({ref:n},a))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},131:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=t(83117),i=t(80102),r=(t(67294),t(3905)),l=["components"],s={},c=void 0,p={unversionedId:"references/cli/epinio_completion",id:"version-0.6.2/references/cli/epinio_completion",title:"epinio_completion",description:"epinio completion",source:"@site/versioned_docs/version-0.6.2/references/cli/epinio_completion.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_completion",permalink:"/0.6.2/references/cli/epinio_completion",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.6.2/references/cli/epinio_completion.md",tags:[],version:"0.6.2",frontMatter:{}},a={},u=[{value:"epinio completion",id:"epinio-completion",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"epinio-completion"},"epinio completion"),(0,r.kt)("p",null,"Generate completion script for a shell"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"To load completions:"),(0,r.kt)("p",null,"Bash:"),(0,r.kt)("p",null,"$ source <(epinio completion bash)"),(0,r.kt)("h1",{id:"to-load-completions-for-each-session-execute-once"},"To load completions for each session, execute once:"),(0,r.kt)("p",null,"Linux:\n$ epinio completion bash > /etc/bash_completion.d/epinio\nMacOS:\n$ epinio completion bash > /usr/local/etc/bash_completion.d/epinio"),(0,r.kt)("p",null,"ATTENTION:\nThe generated script requires the bash-completion package.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion"},"https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion"),"\nfor information on how to install and activate it."),(0,r.kt)("p",null,"Zsh:"),(0,r.kt)("h1",{id:"if-shell-completion-is-not-already-enabled-in-your-environment-you-will-need"},"If shell completion is not already enabled in your environment you will need"),(0,r.kt)("h1",{id:"to-enable-it--you-can-execute-the-following-once"},"to enable it.  You can execute the following once:"),(0,r.kt)("p",null,'$ echo "autoload -U compinit; compinit" >> ~/.zshrc'),(0,r.kt)("h1",{id:"to-load-completions-for-each-session-execute-once-1"},"To load completions for each session, execute once:"),(0,r.kt)("p",null,'$ epinio completion zsh > "${fpath',"[1]",'}/_epinio"'),(0,r.kt)("h1",{id:"you-will-need-to-start-a-new-shell-for-this-setup-to-take-effect"},"You will need to start a new shell for this setup to take effect."),(0,r.kt)("p",null,"Fish:"),(0,r.kt)("p",null,"$ epinio completion fish | source"),(0,r.kt)("h1",{id:"to-load-completions-for-each-session-execute-once-2"},"To load completions for each session, execute once:"),(0,r.kt)("p",null,"$ epinio completion fish > ~/.config/fish/completions/epinio.fish"),(0,r.kt)("p",null,"Powershell:"),(0,r.kt)("p",null,"PS> epinio completion powershell | Out-String | Invoke-Expression"),(0,r.kt)("h1",{id:"to-load-completions-for-every-new-session-run"},"To load completions for every new session, run:"),(0,r.kt)("p",null,"PS> epinio completion powershell > epinio.ps1"),(0,r.kt)("h1",{id:"and-source-this-file-from-your-powershell-profile"},"and source this file from your powershell profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"epinio completion [bash|zsh|fish|powershell]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for completion\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio"},"epinio"),"\t - Epinio cli")))}m.isMDXComponent=!0}}]);