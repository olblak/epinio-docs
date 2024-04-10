"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[91765],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=r,h=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},64858:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=o(83117),r=o(80102),i=(o(67294),o(3905)),a=["components"],s={sidebar_label:"Setting Up Custom Routes",sidebar_position:12,title:""},p="Custom Routes",u={unversionedId:"howtos/customization/custom_routes",id:"version-1.10.0/howtos/customization/custom_routes",title:"",description:'Epinio has the concept of a "system domain". This domain is set when installing',source:"@site/versioned_docs/version-1.10.0/howtos/customization/custom_routes.md",sourceDirName:"howtos/customization",slug:"/howtos/customization/custom_routes",permalink:"/1.10.0/howtos/customization/custom_routes",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.10.0/howtos/customization/custom_routes.md",tags:[],version:"1.10.0",sidebarPosition:12,frontMatter:{sidebar_label:"Setting Up Custom Routes",sidebar_position:12,title:""},sidebar:"docs",previous:{title:"Setting Up Routing Secrets",permalink:"/1.10.0/howtos/customization/setup_routing_secrets"},next:{title:"Creating A Custom Service",permalink:"/1.10.0/howtos/customization/create_custom_service"}},c={},l=[],m={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-routes"},"Custom Routes"),(0,i.kt)("p",null,'Epinio has the concept of a "system domain". This domain is set when installing\nEpinio (with the ',(0,i.kt)("inlineCode",{parentName:"p"},"global.domain")," helm value). It must be a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wildcard_DNS_record"},"wildcard domain")," and is used in 2 different cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a URL for the Epinio API server"),(0,i.kt)("li",{parentName:"ul"},'To create URLs for the applications deployed with Epinio (also known as "Routes")')),(0,i.kt)("p",null,"For example, if Epinio was deployed with ",(0,i.kt)("inlineCode",{parentName:"p"},"global.domain")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"myawesomedomain.org"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Epinio API would be accessible at ",(0,i.kt)("inlineCode",{parentName:"li"},"https://epinio.myawesomedomain.org")),(0,i.kt)("li",{parentName:"ul"},'An application named "myapp" would be accessible at: ',(0,i.kt)("inlineCode",{parentName:"li"},"https://myapp.myawesomedomain.org"))),(0,i.kt)("p",null,"This requires zero setup for each application. However, sometimes it is needed or desired to add\na custom domain, dedicated to the application. Let's assume that the application\nabove must also be accessible on ",(0,i.kt)("inlineCode",{parentName:"p"},"https://i-own-this-awesome-domain.org"),". "),(0,i.kt)("p",null,"Add this domain to your application with the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app update sample --route i-own-this-awesome-domain.org\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Attention"),", this removed the original route! To keep it, it has to be explicitly specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app update sample --route i-own-this-awesome-domain.org --route myapp.myawesomedomain.org\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--route")," parameter can also be passed when the app is first pushed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app push -n sample -p . --route myapp.myawesomedomain.org\n")),(0,i.kt)("p",null,"Epinio will try to create a TLS certificate for any defined route, like it does\nfor the wildcard system domain ones. Depending on the issuer that is being used,\nDNS may have to work before the domain can be used. In other words, the domain must\nresolve to the cluster's Ingress IP. Read more about the issuers here: ",(0,i.kt)("a",{parentName:"p",href:"/1.10.0/howtos/other/certificate_issuers"},"Certificate Issuers")))}d.isMDXComponent=!0}}]);