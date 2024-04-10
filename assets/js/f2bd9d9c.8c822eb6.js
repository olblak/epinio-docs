"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[16325],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98757:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Setting Up Custom Routes",sidebar_position:10,title:""},p="Custom Routes",u={unversionedId:"howtos/custom_routes",id:"version-1.6.2/howtos/custom_routes",title:"",description:'Epinio has the concept of a "system domain". This domain is set when installing',source:"@site/versioned_docs/version-1.6.2/howtos/custom_routes.md",sourceDirName:"howtos",slug:"/howtos/custom_routes",permalink:"/1.6.2/howtos/custom_routes",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.2/howtos/custom_routes.md",tags:[],version:"1.6.2",sidebarPosition:10,frontMatter:{sidebar_label:"Setting Up Custom Routes",sidebar_position:10,title:""},sidebar:"docs",previous:{title:"Setting Up And Using Port Forwarding",permalink:"/1.6.2/howtos/port_forwarding"},next:{title:"Creating A Custom Service",permalink:"/1.6.2/howtos/create_custom_service"}},l={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-routes"},"Custom Routes"),(0,i.kt)("p",null,'Epinio has the concept of a "system domain". This domain is set when installing\nEpinio (with the ',(0,i.kt)("inlineCode",{parentName:"p"},"global.domain")," helm value). It must be a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wildcard_DNS_record"},"wildcard domain")," and is used in 2 different cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a URL for the Epinio API server"),(0,i.kt)("li",{parentName:"ul"},'To create URLs for the applications deployed with Epinio (also known as "Routes")')),(0,i.kt)("p",null,"For example, if Epinio was deployed with ",(0,i.kt)("inlineCode",{parentName:"p"},"global.domain")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"myawesomedomain.org"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Epinio API would be accessible at ",(0,i.kt)("inlineCode",{parentName:"li"},"https://epinio.myawesomedomain.org")),(0,i.kt)("li",{parentName:"ul"},'An application named "myapp" would be accessible at: ',(0,i.kt)("inlineCode",{parentName:"li"},"https://myapp.myawesomedomain.org"))),(0,i.kt)("p",null,"This requires zero setup for each application. However, sometimes it is needed or desired to add\na custom domain, dedicated to the application. Let's assume that the application\nabove must also be accessible on ",(0,i.kt)("inlineCode",{parentName:"p"},"https://i-own-this-awesome-domain.org"),". "),(0,i.kt)("p",null,"Add this domain to your application with the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app update sample --route i-own-this-awesome-domain.org\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Attention"),", this removed the original route! To keep it, it has to be explicitly specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app update sample --route i-own-this-awesome-domain.org --route myapp.myawesomedomain.org\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--route")," parameter can also be passed when the app is first pushed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio app push -n sample -p . --route myapp.myawesomedomain.org\n")),(0,i.kt)("p",null,"Epinio will try to create a TLS certificate for any defined route, like it does\nfor the wildcard system domain ones. Depending on the issuer that is being used,\nDNS may have to work before the domain can be used. In other words, the domain must\nresolve to the cluster's Ingress IP. Read more about the issuers here: ",(0,i.kt)("a",{parentName:"p",href:"/1.6.2/howtos/certificate_issuers"},"Certificate Issuers")))}d.isMDXComponent=!0}}]);