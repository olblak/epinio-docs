"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[78360],{3905:function(e,n,o){o.d(n,{Zo:function(){return a},kt:function(){return f}});var t=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},a=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),m=p(o),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||r;return o?t.createElement(d,l(l({ref:n},a),{},{components:o})):t.createElement(d,l({ref:n},a))}));function f(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=o.length,l=new Array(r);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=o[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},73423:function(e,n,o){o.r(n),o.d(n,{assets:function(){return a},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var t=o(83117),i=o(80102),r=(o(67294),o(3905)),l=["components"],s={title:"",sidebar_label:"epinio completion"},c=void 0,p={unversionedId:"references/commands/cli/epinio_completion",id:"version-1.7.0/references/commands/cli/epinio_completion",title:"",description:"epinio completion",source:"@site/versioned_docs/version-1.7.0/references/commands/cli/epinio_completion.md",sourceDirName:"references/commands/cli",slug:"/references/commands/cli/epinio_completion",permalink:"/1.7.0/references/commands/cli/epinio_completion",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.7.0/references/commands/cli/epinio_completion.md",tags:[],version:"1.7.0",frontMatter:{title:"",sidebar_label:"epinio completion"},sidebar:"docs",previous:{title:"epinio client-sync",permalink:"/1.7.0/references/commands/cli/epinio_client-sync"},next:{title:"epinio info",permalink:"/1.7.0/references/commands/cli/epinio_info"}},a={},u=[{value:"epinio completion",id:"epinio-completion",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:u};function f(e){var n=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"epinio-completion"},"epinio completion"),(0,r.kt)("p",null,"Generate completion script for a shell"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"To load completions:"),(0,r.kt)("p",null,"Bash:"),(0,r.kt)("p",null,"$ source <(epinio completion bash)"),(0,r.kt)("h1",{id:"to-load-completions-for-each-session-execute-once"},"To load completions for each session, execute once:"),(0,r.kt)("p",null,"Linux:\n$ epinio completion bash > /etc/bash_completion.d/epinio\nMacOS:\n$ epinio completion bash > /usr/local/etc/bash_completion.d/epinio"),(0,r.kt)("p",null,"ATTENTION:\nThe generated script requires the bash-completion package.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion"},"https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion"),"\nfor information on how to install and activate it."),(0,r.kt)("p",null,"Zsh:"),(0,r.kt)("h1",{id:"if-shell-completion-is-not-already-enabled-in-your-environment-you-will-need"},"If shell completion is not already enabled in your environment you will need"),(0,r.kt)("h1",{id:"to-enable-it--you-can-execute-the-following-once"},"to enable it.  You can execute the following once:"),(0,r.kt)("p",null,'$ echo "autoload -U compinit; compinit" >> ~/.zshrc'),(0,r.kt)("h1",{id:"to-load-completions-for-each-session-execute-once-1"},"To load completions for each session, execute once:"),(0,r.kt)("p",null,'$ epinio completion zsh > "${fpath',"[1]",'}/_epinio"'),(0,r.kt)("h1",{id:"you-will-need-to-start-a-new-shell-for-this-setup-to-take-effect"},"You will need to start a new shell for this setup to take effect."),(0,r.kt)("p",null,"Fish:"),(0,r.kt)("p",null,"$ epinio completion fish | source"),(0,r.kt)("h1",{id:"to-load-completions-for-each-session-execute-once-2"},"To load completions for each session, execute once:"),(0,r.kt)("p",null,"$ epinio completion fish > ~/.config/fish/completions/epinio.fish"),(0,r.kt)("p",null,"Powershell:"),(0,r.kt)("p",null,"PS> epinio completion powershell | Out-String | Invoke-Expression"),(0,r.kt)("h1",{id:"to-load-completions-for-every-new-session-run"},"To load completions for every new session, run:"),(0,r.kt)("p",null,"PS> epinio completion powershell > epinio.ps1"),(0,r.kt)("h1",{id:"and-source-this-file-from-your-powershell-profile"},"and source this file from your powershell profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"epinio completion [bash|zsh|fish|powershell]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for completion\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.7.0/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli")))}f.isMDXComponent=!0}}]);