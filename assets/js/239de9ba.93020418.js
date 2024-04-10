"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[53022],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(h,p(p({ref:t},m),{},{components:n})):i.createElement(h,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<r;s++)p[s]=n[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),p=["components"],o={sidebar_label:"Application Manifests",title:""},l="Application Manifests",s={unversionedId:"references/manifests",id:"version-1.11.0/references/manifests",title:"",description:"Overview",source:"@site/versioned_docs/version-1.11.0/references/manifests.md",sourceDirName:"references",slug:"/references/manifests",permalink:"/references/manifests",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.11.0/references/manifests.md",tags:[],version:"1.11.0",frontMatter:{sidebar_label:"Application Manifests",title:""},sidebar:"docs",previous:{title:"Git Configuration",permalink:"/references/git_configuration"},next:{title:"Namespaces",permalink:"/references/namespaces"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Syntax <code>epinio (apps) push</code>",id:"syntax-epinio-apps-push",level:2},{value:"Options",id:"options",level:3},{value:"Manifest format",id:"manifest-format",level:2},{value:"Example",id:"example",level:3}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-manifests"},"Application Manifests"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"An application manifest is a YAML file containing the entire configuration of an\napplication as required by ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio (apps) push")," for succesful operation."),(0,r.kt)("p",null,"Manifests are irrelevant for all other epinio commands."),(0,r.kt)("p",null,"This is especially true for the commands ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio apps create")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio apps update"),".\nNeither of these uses manifests. They operate directly on a named application, and can\nonly set and modify a subset of the data provided by a manifest to ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio (apps) push"),"."),(0,r.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,r.kt)("p",null,"The detailed specifications coming after this section provide the following essential ways\nof pushing an application:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With an explicit manifest file as argument.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With a standard manifest file (",(0,r.kt)("inlineCode",{parentName:"p"},"epinio.yml"),") found in the current directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With no manifest file at all. This simply uses all the defaults, except for the name,\nwhich has no such."))),(0,r.kt)("p",null,"Further defaults:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No environment variables."),(0,r.kt)("li",{parentName:"ul"},"No bound configurations."),(0,r.kt)("li",{parentName:"ul"},"One replica/instance."),(0,r.kt)("li",{parentName:"ul"},"Standard paketo builder image (",(0,r.kt)("inlineCode",{parentName:"li"},"paketobuildpacks/builder:full"),")."),(0,r.kt)("li",{parentName:"ul"},"Current directory for the application sources.")),(0,r.kt)("h2",{id:"syntax-epinio-apps-push"},"Syntax ",(0,r.kt)("inlineCode",{parentName:"h2"},"epinio (apps) push")),(0,r.kt)("p",null,"Outside of options ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio (apps) push")," supports only a single optional argument.\nThis argument is the path to the manifest file to use."),(0,r.kt)("p",null,"When no such path is specified the command looks for an ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio.yml")," file in the current\ndirectory as the manifest to use."),(0,r.kt)("p",null,"When no manifest file is found defaults are applied."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"push [flags] [MANIFEST-PATH]"))),(0,r.kt)("p",null,"The command does support a number of options with which the user can ",(0,r.kt)("strong",{parentName:"p"},"override")," the\ninformation read from the manifest. In other words, the data in the manifest is the\nprimary source, and the options just tweak things."),(0,r.kt)("p",null,"When an option is specified its value replaces the data from the manifest.\nOptions do not extend any manifest values."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--instances"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," ",(0,r.kt)("inlineCode",{parentName:"p"},"N")),(0,r.kt)("p",{parentName:"li"},"The application's number of desired instances/replicas.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--env"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME=VALUE")),(0,r.kt)("p",{parentName:"li"},"Adds the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME")," to the application's environment, with the\nspecified ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUE"),". Multiple uses of the option accumulate. In case of multiple\nassignments to the same ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME")," the last wins.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--bind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-b")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIGURATION")),(0,r.kt)("p",{parentName:"li"},"Binds the named configuration to the application. Multiple uses of the option accumulate."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Side note"),": The three preceding options are supported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"apps create")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apps\nupdate")," commands as well. The following options are not."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-n")," ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME")),(0,r.kt)("p",{parentName:"li"},"The application's name. When used more than once the last use wins."))),(0,r.kt)("p",null,"The next three options specify the location of the application's sources. Only one form is\nallowed. Mixing forms causes push to report an error."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SRC-PATH")),(0,r.kt)("p",{parentName:"li"},"A path in the local filesystem, the directory holding the application's sources.\nWhen used more than once the last use wins."),(0,r.kt)("p",{parentName:"li"},"A relative path is resolved relative to the current working directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--container-image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"li"},"The url of the container image containing the ready-to-run application. In other\nwords, this is a pre-staged application, not sources.\nWhen used more than once the last use wins.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--git"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," ",(0,r.kt)("inlineCode",{parentName:"p"},"REPO?,REV?")),(0,r.kt)("p",{parentName:"li"},"The url of the git repository holding the application's sources, and the revision to\nuse. If the revision is not specified the head of the main branch is assumed.\nWhen used more than once the last use wins."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The comma (",(0,r.kt)("inlineCode",{parentName:"p"},","),") is used as separator between repo url and revision because\nthe nicer separators (",(0,r.kt)("inlineCode",{parentName:"p"},":"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),") are both used in urls, making extraction difficult due\nto the ambiguities coming out of that."))),(0,r.kt)("p",null,"The last option controls staging:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--builder-image")," ",(0,r.kt)("inlineCode",{parentName:"p"},"IMAGE")),(0,r.kt)("p",{parentName:"li"},"The name of the image to use for staging the application's sources."))),(0,r.kt)("h2",{id:"manifest-format"},"Manifest format"),(0,r.kt)("p",null,"An application manifest is a YAML file containing a single mapping as its main structure."),(0,r.kt)("p",null,"The keys of this mapping specify the various elements of an application's configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--name"),". Required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"configuration"),". Optional. The value of this key is a mapping whose keys specify the\nbasic configuration of the application, namely:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"instances"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--instances"),". Optional. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"environment"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--env"),". Optional. Defaults to empty. The value of this key is\na mapping whose keys are the names of the desired environment variables, and their\ndesired values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"configurations"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--bind"),". Optional. Defaults to empty. The value of this keys is a\nsequence of names, for the configurations to bind.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"staging"),". Optional. The value of this key is a mapping whose keys specify information\ncontrolling the application's staging."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"builder"),". See ",(0,r.kt)("inlineCode",{parentName:"li"},"--builder-image"),". Optional."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"origin"),". Optional. The value of this key is a mapping whose keys specify the origin\nof the application (sources), namely:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--path"),". Optional. See below."),(0,r.kt)("p",{parentName:"li"},"A relative path is resolved relative to the directory containing the manifest\nfile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"container"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--container-image"),". Optional. See below.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"--git"),". Optional. See below. The value of this key is a mapping with\nkeys ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"revision"),", for the two part of the git reference. If revision is\nnot present it defaults to the head of the repositories' main branch."))),(0,r.kt)("p",{parentName:"li"},"As with the options the keys ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"container"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," exclude each other.  Only\none may be specified in the manifest."),(0,r.kt)("p",{parentName:"li"},"If none is specified the system defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and the sources are expected to\nreside in the directory containing the manifest file."),(0,r.kt)("p",{parentName:"li"},"Note that specifying any of the origin options replaces any of the origin keys.\nI.e. a ",(0,r.kt)("inlineCode",{parentName:"p"},"--path")," options replaces/displace/overides a ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," key. Etc."))),(0,r.kt)("p",null,"Last, in case it was missed reading the descriptions above, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is the only required\nkey in a manifest file. The same as the ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME")," argument of pre-manifest ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," was the\nonly required argument."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'name: zanzibar\nconfiguration:\n  instances: 333\n  configurations:\n  - snafu\n  environment:\n    DOGMA: "no"\nstaging:\n  builder: "paketobuildpacks/builder:tiny"\norigin:\n  path: /somewhere/over/there\n\n')))}d.isMDXComponent=!0}}]);