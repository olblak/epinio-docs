"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[38116],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(o),m=i,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||r;return o?n.createElement(b,a(a({ref:t},p),{},{components:o})):n.createElement(b,a({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},35536:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=o(83117),i=o(80102),r=(o(67294),o(3905)),a=["components"],u={sidebar_label:"Custom builders",sidebar_position:14,title:"Creating a custom builder",description:"How to create a custom builder",keywords:["epinio","kubernetes","create a custom builder"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","customize","create-custom-builder"],"doc-persona":["epinio-operator"]},c=void 0,l={unversionedId:"howtos/customization/custom_builder",id:"version-1.11.0/howtos/customization/custom_builder",title:"Creating a custom builder",description:"How to create a custom builder",source:"@site/versioned_docs/version-1.11.0/howtos/customization/custom_builder.md",sourceDirName:"howtos/customization",slug:"/howtos/customization/custom_builder",permalink:"/howtos/customization/custom_builder",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.11.0/howtos/customization/custom_builder.md",tags:[],version:"1.11.0",sidebarPosition:14,frontMatter:{sidebar_label:"Custom builders",sidebar_position:14,title:"Creating a custom builder",description:"How to create a custom builder",keywords:["epinio","kubernetes","create a custom builder"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","customize","create-custom-builder"],"doc-persona":["epinio-operator"]},sidebar:"docs",previous:{title:"Creating A custom role",permalink:"/howtos/customization/create_custom_role"},next:{title:"Custom application Helm charts",permalink:"/howtos/customization/create_custom_appcharts"}},p={},s=[{value:"Background",id:"background",level:2},{value:"Solution: Using a custom builder",id:"solution-using-a-custom-builder",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Reference",id:"reference",level:2}],d={toc:s};function m(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default builder image used by Epinio (",(0,r.kt)("inlineCode",{parentName:"p"},"paketobuildpacks/builder:full"),") may not work for every application.\nIt could happen if using an unsupported programming language,\nor when the application needs staging in a particular way.\nThis page explains how to build a custom builder image including one or more buildpacks.\nThis guide doesn't explain how to create a custom buildpack.\nFor information on that,\nuse the (",(0,r.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/buildpack-author-guide/create-buildpack/"},"Buildpack documentation"),"\nor the ",(0,r.kt)("a",{parentName:"p",href:"https://paketo.io/docs/howto/create-paketo-buildpack/"},"Paketo documentation"),")."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/tools/pack/"},(0,r.kt)("inlineCode",{parentName:"a"},"pack")," CLI"),"\nyou can add a buildpack to a project using a ",(0,r.kt)("inlineCode",{parentName:"p"},"project.toml")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[project]\nid = "sample"\nversion = "0.1"\n\n[build]\n\n[[build.buildpacks]]\nid = "paketo-community/python"\nversion = "0.4.2"\n')),(0,r.kt)("p",null,"You can then build the image for the application by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pack build test/pip -B paketobuildpacks/builder:full\n")),(0,r.kt)("p",null,"However, since Epinio isn't using ",(0,r.kt)("inlineCode",{parentName:"p"},"pack")," but the ",(0,r.kt)("inlineCode",{parentName:"p"},"lifecycle")," directly\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildpacks/lifecycle"},"link 1"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3954c214de3d7b957cfc2054ba4fa4bfa140f5a3/chart/epinio/templates/stage-scripts.yaml#L83"},"link 2"),"),\nusing project.toml isn't possible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/buildpacks/lifecycle/issues/555"},"https://github.com/buildpacks/lifecycle/issues/555")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/haliliceylan/rfcs/blob/2152fc5c817d971b6ead2069d82c459f432a7acc/text/0000-prepare-phase.md"},"https://github.com/haliliceylan/rfcs/blob/2152fc5c817d971b6ead2069d82c459f432a7acc/text/0000-prepare-phase.md"))),(0,r.kt)("h2",{id:"solution-using-a-custom-builder"},"Solution: Using a custom builder"),(0,r.kt)("p",null,"You can create a custom builder that supports Python and then tell Epinio to use that for staging."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'git clone git@github.com:paketo-buildpacks/full-builder.git\n\npatch -p1 <<EOF\ndiff --git a/builder.toml b/builder.toml\nindex f3a35fd..b228671 100644\n--- a/builder.toml\n+++ b/builder.toml\n@@ -32,6 +32,10 @@ description = "Ubuntu bionic base image with buildpacks for Java, .NET Core, Nod\n   uri = "docker://gcr.io/paketo-buildpacks/php:0.5.0"\n   version = "0.5.0"\n\n+[[buildpacks]]\n+  uri = "docker://gcr.io/paketo-community/python:0.4.2"\n+  version = "0.4.2"\n+\n [[buildpacks]]\n   uri = "docker://gcr.io/paketo-buildpacks/procfile:4.2.2"\n   version = "4.2.2"\n@@ -97,6 +101,12 @@ description = "Ubuntu bionic base image with buildpacks for Java, .NET Core, Nod\n     id = "paketo-buildpacks/java"\n     version = "5.9.1"\n\n+[[order]]\n+\n+  [[order.group]]\n+    id = "paketo-community/python"\n+    version = "0.4.2"\n+\n [[order]]\n\n   [[order.group]]\nEOF\n\npack builder create myorg/epicustombuilder --config builder.toml\n')),(0,r.kt)("p",null,"Make the image ",(0,r.kt)("inlineCode",{parentName:"p"},"epicustombuilder:local")," available to your cluster by pushing it to a container registry.\nYou can then push your application to Epinio and use your image with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--builder-image")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"epinio push -n myapp -p app_directory --builder-image myorg/epicustombuilder:latest\n")),(0,r.kt)("h2",{id:"more-examples"},"More examples"),(0,r.kt)("p",null,"You can find a more complete example on how to build and deploy a custom builder at\n",(0,r.kt)("a",{parentName:"p",href:"/tutorials/custom_builder_go"},"Deploy Gitea with a custom builder image"),"."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/buildpacks/spec/blob/main/extensions/project-descriptor.md#projectlicenses"},"Project descriptor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/rfcs/blob/main/text/0003-replace-buildpack-yml.md"},"RFC replace buildpack.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/rfcs/blob/main/text/0026-environment-variable-configuration-of-buildpacks.md"},"RFC environment variable configuration of buildpacks"),".")))}m.isMDXComponent=!0}}]);