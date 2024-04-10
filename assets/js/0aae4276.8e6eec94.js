"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[21541],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66961:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={sidebar_label:"API",title:""},c="API reference",u={unversionedId:"references/api",id:"version-1.7.1/references/api",title:"",description:"Most of the Epinio commands communicate with the Epinio server side component over an API. The API is secured with Basic Auth authentication. You can make requests against that API with the credentials from your Epinio config.",source:"@site/versioned_docs/version-1.7.1/references/api.md",sourceDirName:"references",slug:"/references/api",permalink:"/1.7.1/references/api",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.7.1/references/api.md",tags:[],version:"1.7.1",frontMatter:{sidebar_label:"API",title:""},sidebar:"docs",previous:{title:"Buildpacks",permalink:"/1.7.1/references/customization/staging"},next:{title:"OIDC authentication",permalink:"/1.7.1/references/authentication_oidc"}},p={},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API reference"),(0,i.kt)("p",null,"Most of the Epinio commands communicate with the Epinio server side component over an API. The API is secured with Basic Auth authentication. You can make requests against that API with the credentials from your Epinio config.\nE.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get your credentials with: ",(0,i.kt)("inlineCode",{parentName:"li"},"epinio config show")),(0,i.kt)("li",{parentName:"ul"},"Use curl to make a request:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -u your-username-here:password-here https://epinio.your-system-domain/api/v1/info\n")),(0,i.kt)("p",null,"The responses are all JSON objects, except for some cases where you get an error before the request reaches the Epinio server (e.g. because of bad cluster configuration)."),(0,i.kt)("p",null,"The endpoints are documented in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI Spec")," format. You can find the definition of the API here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/blob/v0.1.6/docs/references/api/swagger.json"},"https://github.com/epinio/epinio/blob/v0.1.6/docs/references/api/swagger.json")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure")," you change to the Epinio release you have deployed."),(0,i.kt)("p",null,"There are various tools you can use to easily browse the API (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/"),"). If you have a Golang environment set up locally, you may find it easier to run ",(0,i.kt)("inlineCode",{parentName:"p"},"make swagger swagger-serve")," from the root of the Epinio repository."))}m.isMDXComponent=!0}}]);