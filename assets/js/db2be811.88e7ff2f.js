"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[47471],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Install WordPress with Epinio",sidebar_position:25,title:"Installing WordPress with Epinio",description:"How to install WordPress using Epinio.",keywords:["epinio","kubernetes","wordpress","install"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","use-develop","install-wordpress"],"doc-persona":["epinio-developer","epinio-operator"]},p=void 0,l={unversionedId:"howtos/use-develop/install_wordpress_application",id:"howtos/use-develop/install_wordpress_application",title:"Installing WordPress with Epinio",description:"How to install WordPress using Epinio.",source:"@site/docs/howtos/use-develop/install_wordpress_application.md",sourceDirName:"howtos/use-develop",slug:"/howtos/use-develop/install_wordpress_application",permalink:"/next/howtos/use-develop/install_wordpress_application",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/use-develop/install_wordpress_application.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_label:"Install WordPress with Epinio",sidebar_position:25,title:"Installing WordPress with Epinio",description:"How to install WordPress using Epinio.",keywords:["epinio","kubernetes","wordpress","install"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","use-develop","install-wordpress"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"Debugging an application",permalink:"/next/howtos/use-develop/debug"},next:{title:"Application export and transfer",permalink:"/next/howtos/use-develop/export-and-transfer"}},d={},c=[{value:"Create a directory for your application",id:"create-a-directory-for-your-application",level:2},{value:"Get the code",id:"get-the-code",level:2},{value:"Enable the needed PHP extensions",id:"enable-the-needed-php-extensions",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Additional steps",id:"additional-steps",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-a-directory-for-your-application"},"Create a directory for your application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"mkdir wordpress\ncd wordpress\n")),(0,i.kt)("h2",{id:"get-the-code"},"Get the code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wordpress.org/download/#download-install"},"https://wordpress.org/download/#download-install")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"wget https://wordpress.org/latest.tar.gz\ntar xvf latest.tar.gz\ncd wordpress\n")),(0,i.kt)("h2",{id:"enable-the-needed-php-extensions"},"Enable the needed PHP extensions"),(0,i.kt)("p",null,"The PHP buildpack supports additional INI files for PHP through\n",(0,i.kt)("a",{parentName:"p",href:"https://paketo.io/docs/howto/php/#configure-php-with-a-custom-ini-file"},"the PHP_INI_SCAN_DIR mechanism"),"."),(0,i.kt)("p",null,"For WordPress to work, there are certain PHP extensions that need enabling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# This is still needed\nmkdir .php.ini.d\ncat << EOF > .php.ini.d/extensions.ini\nextension=zlib\nextension=mysqli\nextension=openssl\nEOF\n")),(0,i.kt)("h2",{id:"deploy"},"Deploy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"epinio push --name wordpress\n")),(0,i.kt)("h2",{id:"additional-steps"},"Additional steps"),(0,i.kt)("p",null,"WordPress needs a database to work.\nAfter visiting the route of your deployed application,\nyou have to set the connection details to the database."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/next/references/services"},"Service")," feature to deploy your database with Epinio.\nDeploying a database manually is still possible."),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/example-wordpress#step-4---create-a-database-for-wordpress"},"the README of the example app"),",\non how to create a database and how to configure WordPress to use it."))}h.isMDXComponent=!0}}]);