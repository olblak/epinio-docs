"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[33048],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],p={sidebar_label:"How To Use Custom Application Helm Charts",sidebar_position:16,title:""},l="Introduction",s={unversionedId:"howtos/using_custom_appcharts",id:"version-1.8.0/howtos/using_custom_appcharts",title:"",description:"Epinio deploys applications on Kubernetes as Helm charts.",source:"@site/versioned_docs/version-1.8.0/howtos/using_custom_appcharts.md",sourceDirName:"howtos",slug:"/howtos/using_custom_appcharts",permalink:"/1.8.0/howtos/using_custom_appcharts",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.8.0/howtos/using_custom_appcharts.md",tags:[],version:"1.8.0",sidebarPosition:16,frontMatter:{sidebar_label:"How To Use Custom Application Helm Charts",sidebar_position:16,title:""},sidebar:"docs",previous:{title:"Creating Custom Application Helm Charts",permalink:"/1.8.0/howtos/create_custom_appcharts"},next:{title:"Installing Epinio On Rancher",permalink:"/1.8.0/howtos/install_epinio_on_rancher"}},c={},u=[],h={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Epinio deploys applications on Kubernetes as ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm charts"),"."),(0,o.kt)("p",null,"By default, a standard Helm chart is provided when Epinio is installed.\nHowever, operators may wish to ",(0,o.kt)("a",{parentName:"p",href:"/1.8.0/howtos/create_custom_appcharts"},"create and register custom charts")," specific to their environment."),(0,o.kt)("p",null,"Once the custom charts are registered in Epinio, the developers can use them when deploying their\napplications as described in this How-To."),(0,o.kt)("h1",{id:"listing-the-available-helm-charts"},"Listing the available Helm charts"),(0,o.kt)("p",null,"You can list the available Helm charts by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app chart list\n")),(0,o.kt)("p",null,"As an example, here is the output of an unmodified Epinio installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"| DEFAULT |   NAME   |        DESCRIPTION         |\n|---------|----------|----------------------------|\n|         | standard | Epinio standard deployment |\n")),(0,o.kt)("p",null,"The output will only list the ",(0,o.kt)("inlineCode",{parentName:"p"}," standard")," Helm chart, which Epinio installs by default."),(0,o.kt)("h1",{id:"deploying-applications-with-a-custom-helm-chart"},"Deploying applications with a custom Helm chart"),(0,o.kt)("p",null,"Use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," to specify the name of the custom Helm chart to use when\ncreating, updating, or deploying an application."),(0,o.kt)("p",null,"For detailed information on the ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," setting, see the following CLI commands pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.8.0/references/commands/cli/app/epinio_app_create"},"epinio app create")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.8.0/references/commands/cli/app/epinio_app_update"},"epinio app update")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.8.0/references/commands/cli/epinio_push"},"epinio push"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Changing the chart to use is ",(0,o.kt)("strong",{parentName:"p"},"not possible")," if the application has an\nactive workload."),(0,o.kt)("p",{parentName:"admonition"},"To switch a deployed application to a different Helm chart, you will have to\ndelete and re-deploy the application.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Scaling the application to zero instances is ",(0,o.kt)("strong",{parentName:"p"},"not sufficient"),". While that effectively\nstops the application it does not remove the deployed workload, just the underlying active\nelements.")),(0,o.kt)("h1",{id:"deploying-applications-with-a-custom-helm-chart-which-has-user-settable-configuration-values"},"Deploying applications with a custom Helm chart which has user-settable configuration values"),(0,o.kt)("p",null,"The general mechanism is the same as described in the previous section."),(0,o.kt)("p",null,"However, further use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--chart-value")," to specify name and value of a single user-settable\nconfiguration value. Use the option multiple times to set all the desired configuration values."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User-settable configuration values are generally ",(0,o.kt)("strong",{parentName:"p"},"optional"),". The application chart is expected to\ncontain and use sensible defaults for all configuration values not set by the user.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio push --name APPNAME --path APPSOURCEPATH --app-chart CHARTNAME --chart-value CVNAME=VALUE ...\n")),(0,o.kt)("h1",{id:"setting-a-default-helm-chart"},"Setting a default Helm chart"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," option described in the previous section is more suitable for\nsingle or few deployments requiring a custom Helm chart."),(0,o.kt)("p",null,"However, if the majority of applications use a specific custom chart, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"FOO"),", it makes more sense to\nchange the default chart."),(0,o.kt)("p",null,"You can set a custom chart as the default by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app chart default FOO\n")),(0,o.kt)("p",null,"Now, all future invocations of ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," will use the custom Helm chart set as default.\nYou will be able to override it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," option, as described above."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," chart is a ",(0,o.kt)("strong",{parentName:"p"},"local")," setting. It affects only the developer who made the change.")),(0,o.kt)("h1",{id:"querying-the-default-helm-chart"},"Querying the default Helm chart"),(0,o.kt)("p",null,"You can check which chart is set as ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app chart default\n")),(0,o.kt)("p",null,"You can also check which chart is set as ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," when listing the available charts.\nAs an example, the output below shows the chart ",(0,o.kt)("inlineCode",{parentName:"p"},"FOO")," as the current default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"| DEFAULT |   NAME   |        DESCRIPTION         |\n|---------|----------|----------------------------|\n| *       | FOO      | Foofy deployment           |\n|         | standard | Epinio standard deployment |\n")),(0,o.kt)("h1",{id:"unsetting-the-default-helm-chart"},"Unsetting the default Helm chart"),(0,o.kt)("p",null,"You can set the system chart ",(0,o.kt)("inlineCode",{parentName:"p"},"standard")," back as the default, by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app chart default ''\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"empty string")," used in place of the chart name is mandatory. If you do not add it,\nthe command will only list the charts available.")))}m.isMDXComponent=!0}}]);