"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[17001],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(i),m=r,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return i?n.createElement(b,a(a({ref:t},p),{},{components:i})):n.createElement(b,a({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},16246:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=i(83117),r=i(80102),o=(i(67294),i(3905)),a=["components"],l={sidebar_label:"Custom builders",sidebar_position:11,title:""},c="Custom a custom Builder image",u={unversionedId:"howtos/custom_builder",id:"version-1.2.0/howtos/custom_builder",title:"",description:"The default builder image used by Epinio (paketobuildpacks/builder:full) may not work for every application.",source:"@site/versioned_docs/version-1.2.0/howtos/custom_builder.md",sourceDirName:"howtos",slug:"/howtos/custom_builder",permalink:"/1.2.0/howtos/custom_builder",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.2.0/howtos/custom_builder.md",tags:[],version:"1.2.0",sidebarPosition:11,frontMatter:{sidebar_label:"Custom builders",sidebar_position:11,title:""},sidebar:"docs",previous:{title:"Create a custom Service",permalink:"/1.2.0/howtos/create_custom_service"},next:{title:"How To create custom application Helm charts",permalink:"/1.2.0/howtos/create_custom_appcharts"}},p={},s=[{value:"Background",id:"background",level:2},{value:"Solution: Using a Custom Builder",id:"solution-using-a-custom-builder",level:2},{value:"Reference",id:"reference",level:2}],d={toc:s};function m(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-a-custom-builder-image"},"Custom a custom Builder image"),(0,o.kt)("p",null,"The default builder image used by Epinio (paketobuildpacks/builder:full) may not work for every application.\nThis could happen if a non-supported programming language is used, or when the application needs to be staged in a very specific way.\nThis page explains how a custom builder image can be built that includes one or more buildpacks.\nWe don't explain how to create a custom buildpack in this guide (",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/buildpack-author-guide/create-buildpack/"},"upstream docs")," or ",(0,o.kt)("a",{parentName:"p",href:"https://paketo.io/docs/howto/create-paketo-buildpack/"},"with packit"),")."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"If you are familiar with the ",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/tools/pack/"},(0,o.kt)("inlineCode",{parentName:"a"},"pack")," cli")," you know that\nit's possible to add a buildpack to a project using ",(0,o.kt)("inlineCode",{parentName:"p"},"project.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[project]\nid = "sample"\nversion = "0.1"\n\n[build]\n\n[[build.buildpacks]]\nid = "paketo-community/python"\nversion = "0.4.2"\n')),(0,o.kt)("p",null,"Pack can then build the image for the application by running ",(0,o.kt)("inlineCode",{parentName:"p"},"pack build test/pip -B paketobuildpacks/builder:full"),"."),(0,o.kt)("p",null,"However, since Epinio is not using ",(0,o.kt)("inlineCode",{parentName:"p"},"pack")," but the ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycle")," directly (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildpacks/lifecycle"},"link 1"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3954c214de3d7b957cfc2054ba4fa4bfa140f5a3/chart/epinio/templates/stage-scripts.yaml#L83"},"link 2"),"), using project.toml is not possible:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/buildpacks/lifecycle/issues/555"},"https://github.com/buildpacks/lifecycle/issues/555")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/haliliceylan/rfcs/blob/2152fc5c817d971b6ead2069d82c459f432a7acc/text/0000-prepare-phase.md"},"https://github.com/haliliceylan/rfcs/blob/2152fc5c817d971b6ead2069d82c459f432a7acc/text/0000-prepare-phase.md"))),(0,o.kt)("h2",{id:"solution-using-a-custom-builder"},"Solution: Using a Custom Builder"),(0,o.kt)("p",null,"We can create a custom builder that supports Python and tell Epinio to use that for staging."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git clone git@github.com:paketo-buildpacks/full-builder.git\n\npatch -p1 <<EOF\ndiff --git a/builder.toml b/builder.toml\nindex f3a35fd..b228671 100644\n--- a/builder.toml\n+++ b/builder.toml\n@@ -32,6 +32,10 @@ description = "Ubuntu bionic base image with buildpacks for Java, .NET Core, Nod\n   uri = "docker://gcr.io/paketo-buildpacks/php:0.5.0"\n   version = "0.5.0"\n\n+[[buildpacks]]\n+  uri = "docker://gcr.io/paketo-community/python:0.4.2"\n+  version = "0.4.2"\n+\n [[buildpacks]]\n   uri = "docker://gcr.io/paketo-buildpacks/procfile:4.2.2"\n   version = "4.2.2"\n@@ -97,6 +101,12 @@ description = "Ubuntu bionic base image with buildpacks for Java, .NET Core, Nod\n     id = "paketo-buildpacks/java"\n     version = "5.9.1"\n\n+[[order]]\n+\n+  [[order.group]]\n+    id = "paketo-community/python"\n+    version = "0.4.2"\n+\n [[order]]\n\n   [[order.group]]\nEOF\n\npack builder create myorg/epicustombuilder --config builder.toml\n')),(0,o.kt)("p",null,"Make the image ",(0,o.kt)("inlineCode",{parentName:"p"},"epicustombuilder:local")," available to your cluster by pushing it to a container registry.\nYou can then push your application to Epinio and use your image with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--builder-image")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio push -n myapp -p app_directory --builder-image myorg/epicustombuilder:latest\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project descriptor: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md#projectlicenses"},"https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md#projectlicenses")),(0,o.kt)("li",{parentName:"ul"},"RFC replace buildpack.yml: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/rfcs/blob/main/text/0003-replace-buildpack-yml.md"},"https://github.com/paketo-buildpacks/rfcs/blob/main/text/0003-replace-buildpack-yml.md")),(0,o.kt)("li",{parentName:"ul"},"RFC environment variable configuration of buildpacks: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/rfcs/blob/main/text/0026-environment-variable-configuration-of-buildpacks.md"},"https://github.com/paketo-buildpacks/rfcs/blob/main/text/0026-environment-variable-configuration-of-buildpacks.md"))))}m.isMDXComponent=!0}}]);