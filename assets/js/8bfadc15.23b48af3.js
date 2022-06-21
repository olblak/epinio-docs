"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[28654],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={sidebar_label:"Port Forwarding"},s=void 0,c={unversionedId:"howtos/port_forwarding",id:"version-0.6.2/howtos/port_forwarding",title:"port_forwarding",description:"How to use Port Forwarding",source:"@site/versioned_docs/version-0.6.2/howtos/port_forwarding.md",sourceDirName:"howtos",slug:"/howtos/port_forwarding",permalink:"/0.6.2/howtos/port_forwarding",editUrl:"https://github.com/epinio/docs/versioned_docs/version-0.6.2/howtos/port_forwarding.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"Port Forwarding"},sidebar:"docs",previous:{title:"Setup external container registry",permalink:"/0.6.2/howtos/setup_external_registry"},next:{title:"Custom Routes",permalink:"/0.6.2/howtos/custom_routes"}},l={},u=[{value:"How to use Port Forwarding",id:"how-to-use-port-forwarding",level:2},{value:"Point to a specific instance",id:"point-to-a-specific-instance",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-use-port-forwarding"},"How to use Port Forwarding"),(0,a.kt)("p",null,"This how-to demonstrates how to use port forwarding to access a running application."),(0,a.kt)("p",null,"Port forwarding can be started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"epinio app port-forward samplejava 34506:8080\n")),(0,a.kt)("p",null,"This will forward the traffic coming from ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:34506")," to the remote ",(0,a.kt)("inlineCode",{parentName:"p"},":8080"),".\n",(0,a.kt)("strong",{parentName:"p"},"Note")," that specification of the local port is optional. When none is provided a random port will be selected."),(0,a.kt)("h3",{id:"point-to-a-specific-instance"},"Point to a specific instance"),(0,a.kt)("p",null,"Port forwarding can be directed to a specific instance of your app. To do this list all the instances of the application, pick the desired ID, and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--instance")," flag to direct the port forwarding to that instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-> % epinio app show samplejava\n\n\ud83d\udea2 Show application details\nNamespace: workspace\nApplication: samplejava\n\n\u2714\ufe0f  Details:\n|        KEY           |                    VALUE                    |\n|----------------------|---------------------------------------------|\n| Origin               | /home/user/sample                           |\n| Status               | 1/1                                         |\n| Username             | admin                                       |\n| StageId              | cac0d6fec92e0a1f                            |\n| Age                  | 2m50s                                       |\n| Active Routes        |                                             |\n|                      | samplejava.172.19.0.4.omg.howdoi.website    |\n| Desired Instances    |                                           1 |\n| Bound Configurations |                                             |\n| Environment          |                                             |\n\n\u2714\ufe0f  Instances: \n|            NAME             | READY |  MEMORY   | MILLICPUS | RESTARTS |  AGE  |\n|-----------------------------|-------|-----------|-----------|----------|-------|\n| samplejava-5f84c47f76-7mvv7 | true  | 214.0 MiB |         2 |        0 | 2m50s |\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"epinio app port-forward samplejava 34506:8080 --instance samplejava-5f84c47f76-7mvv7\n")))}f.isMDXComponent=!0}}]);