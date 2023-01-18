"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[35800],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],l={sidebar_label:"Creating Custom Application Helm Charts",sidebar_position:13,title:""},p="Introduction",s={unversionedId:"howtos/create_custom_appcharts",id:"howtos/create_custom_appcharts",title:"",description:"Epinio deploys applications on Kubernetes as Helm charts.",source:"@site/docs/howtos/create_custom_appcharts.md",sourceDirName:"howtos",slug:"/howtos/create_custom_appcharts",permalink:"/next/howtos/create_custom_appcharts",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/create_custom_appcharts.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Creating Custom Application Helm Charts",sidebar_position:13,title:""},sidebar:"docs",previous:{title:"Custom Builders",permalink:"/next/howtos/custom_builder"},next:{title:"How To Use Custom Application Helm Charts",permalink:"/next/howtos/using_custom_appcharts"}},c={},h=[{value:"Creating the Helm chart",id:"creating-the-helm-chart",level:2},{value:"Making the helm Chart known to Epinio",id:"making-the-helm-chart-known-to-epinio",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Going further",id:"going-further",level:2}],u={toc:h};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Epinio deploys applications on Kubernetes as ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm charts"),"."),(0,i.kt)("p",null,"By default, a standard Helm chart is provided when Epinio is installed.\nHowever, operators may wish to create custom charts specific to their environment, and\nregister them in Epinio, so ",(0,i.kt)("a",{parentName:"p",href:"/next/howtos/using_custom_appcharts"},"their developers can use them"),"."),(0,i.kt)("h1",{id:"setting-up-a-custom-helm-chart"},"Setting up a custom Helm chart"),(0,i.kt)("p",null,"To add a custom Helm chart to the system, there are two mandatory steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the chart,"),(0,i.kt)("li",{parentName:"ol"},"Make it known to the Epinio installation")),(0,i.kt)("p",null,"The following two sections explain these steps in detail."),(0,i.kt)("h2",{id:"creating-the-helm-chart"},"Creating the Helm chart"),(0,i.kt)("p",null,"Instead of starting from scratch, you can use the standard chart provided by Epinio as a\ntemplate."),(0,i.kt)("p",null,"You can download the chart directly from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/tree/main/chart/application"},"here"),"\nor, you can clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts.git"},"Epinio Helm chart repo"),".\nThe chart is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"helm-charts/chart/application"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/epinio/helm-charts.git\n")),(0,i.kt)("p",null,"In this How-To, we will create a variant of the chart by adding an annotation to every\napplication ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),". The annotation will enable the filtering of Epinio applications\nin ",(0,i.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: explanations about setting up and using ",(0,i.kt)("inlineCode",{parentName:"p"},"fluentd")," are out of scope for this How-To.")),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"helm-charts/chart/application/templates/deployment.yaml")," in your editor of\nchoice.  This file is the template for the application's Deployment resource."),(0,i.kt)("p",null,"First, locate the section ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[...]\n  template:\n    metadata:\n      annotations:\n        app.kubernetes.io/name: {{ .Values.epinio.appName }}\n[...]\n")),(0,i.kt)("p",null,"Add the following annotations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fluentd-enable: "true"\nfluentd-application-name: {{ .Values.epinio.appName }}\n')),(0,i.kt)("p",null,"The result should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[...]\n  template:\n    metadata:\n      annotations:\n        fluentd-enable: "true"\n        fluentd-application-name: {{ .Values.epinio.appName }}\n        app.kubernetes.io/name: {{ .Values.epinio.appName }}\n[...]\n')),(0,i.kt)("p",null,"Note how the templating uses the ",(0,i.kt)("inlineCode",{parentName:"p"},".Values.epinio.appName")," field to insert the application\nname into the annotation."),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},"helm-charts/chart/application/values.yaml")," in the chart explains the full set of\nvalues Epinio sets when deploying an application through the chart."),(0,i.kt)("p",null,"Once you modified the chart to your needs, use the following command to package the\nchanged chart into a tarball:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm package helm-charts/chart/application\n")),(0,i.kt)("p",null,"The tarball is placed into the current working directory and the filename should be\n",(0,i.kt)("inlineCode",{parentName:"p"},"application-VERSION.tar.gz")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"VERSION")," is the chart version."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: We didn't change the chart version. Versioned chart development is out of scope\nfor this How-To.")),(0,i.kt)("h2",{id:"making-the-helm-chart-known-to-epinio"},"Making the helm Chart known to Epinio"),(0,i.kt)("p",null,"Once the new chart created, as decribed in the previous section, you have to place the\ngenerated tarball on an accessible web server (i.e. public cloud, company's hosted web\nserver, etc)."),(0,i.kt)("p",null,"Given the plethora of possible options, this How-To simply assumes that the tarball is\navailable at the example URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://mydomain.org/epinio-application-0.1.15-fluentd.tgz\n")),(0,i.kt)("p",null,"Copy the following text, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"RELEASE_NAMESPACE")," value to the namespace where\nEpinio was installed into (by default it is ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio"),") and add it to a file of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: application.epinio.io/v1\nkind: AppChart\nmetadata:\n  namespace: RELEASE_NAMESPACE\n  name: fluentd\nspec:\n  shortDescription: Fluentd filterable standard deployment\n  description: Epinio standard support chart extended for fluent filtering\n  helmChart: https://mydomain.org/epinio-application-0.1.15-fluentd.tgz\n")),(0,i.kt)("p",null,"This How-To now simply assumes that the chosen file is named:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fluentd-appchart.yaml\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Information: this is a Kubernetes custom resource, which will describe the new Helm\nchart to Epinio.  In this example, it provides the information about the name, the\nsource and descriptions.")),(0,i.kt)("p",null,"The necessary Kubernetes CRD is provided by the Epinio installation."),(0,i.kt)("p",null,"Apply this resource to the Epinio cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl apply -f fluentd-appchart.yaml\n")),(0,i.kt)("p",null,"Verify that the new chart is now registered in Epinio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ epinio app chart list\n")),(0,i.kt)("p",null,"You can also see the details of the chart in Epinio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ epinio app chart show fluent\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If the new Helm chart is not correctly registered in Epinio, check that the\n",(0,i.kt)("inlineCode",{parentName:"p"},"RELEASE_NAMESPACE")," was properly set in ",(0,i.kt)("inlineCode",{parentName:"p"},"fluentd-appchart.yaml"),"."),(0,i.kt)("h2",{id:"going-further"},"Going further"),(0,i.kt)("p",null,"The standard app chart, as well as the chart created here use a kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," as\nthe main resource describing the active application."),(0,i.kt)("p",null,"Up to Epinio version 1.0, this was the only kind of resource supported."),(0,i.kt)("p",null,"Since Epinio version 1.0+, other kinds of controllers, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),", are supported."),(0,i.kt)("p",null,"However, even when changing controllers, it is important to keep the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod")," annotations and\nlabels the same as for the standard chart. This allows Epinio's server to locate the required resources and\nuse them properly."),(0,i.kt)("p",null,"Here's a couple of examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"epinio.io/stage-id")," provides the id of the staging Pod which created the application's image.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"epinio.io/app-container")," provides the name of the application's main ",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),",\nwhich is used by ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio exec"),". This label has to match the actual name of the\ncontainer in the pod spec."))))}m.isMDXComponent=!0}}]);