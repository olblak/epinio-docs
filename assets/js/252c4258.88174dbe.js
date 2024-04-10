"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[69532],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52701:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={sidebar_label:"How To Install Wordpress With Epinio",sidebar_position:23,title:""},p="Installing Wordpress with Epinio",l={unversionedId:"howtos/install_wordpress_application",id:"version-1.6.1/howtos/install_wordpress_application",title:"",description:"Create a directory for your application:",source:"@site/versioned_docs/version-1.6.1/howtos/install_wordpress_application.md",sourceDirName:"howtos",slug:"/howtos/install_wordpress_application",permalink:"/1.6.1/howtos/install_wordpress_application",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.1/howtos/install_wordpress_application.md",tags:[],version:"1.6.1",sidebarPosition:23,frontMatter:{sidebar_label:"How To Install Wordpress With Epinio",sidebar_position:23,title:""},sidebar:"docs",previous:{title:"Installing A Metrics Server",permalink:"/1.6.1/howtos/install_metrics_server"},next:{title:"Installing Epinio On EKS",permalink:"/1.6.1/howtos/install_epinio_on_eks"}},d={},c=[{value:"Create a directory for your application:",id:"create-a-directory-for-your-application",level:2},{value:"Get the code:",id:"get-the-code",level:2},{value:"Enable needed php extensions",id:"enable-needed-php-extensions",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Additional steps",id:"additional-steps",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-wordpress-with-epinio"},"Installing Wordpress with Epinio"),(0,i.kt)("h2",{id:"create-a-directory-for-your-application"},"Create a directory for your application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir wordpress\ncd wordpress\n")),(0,i.kt)("h2",{id:"get-the-code"},"Get the code:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wordpress.org/download/#download-install"},"https://wordpress.org/download/#download-install")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://wordpress.org/latest.tar.gz\ntar xvf latest.tar.gz\ncd wordpress\n")),(0,i.kt)("h2",{id:"enable-needed-php-extensions"},"Enable needed php extensions"),(0,i.kt)("p",null,"The PHP buildpack supports additional ini files for PHP through\n",(0,i.kt)("a",{parentName:"p",href:"https://paketo.io/docs/howto/php/#configure-php-with-a-custom-ini-file"},"the PHP_INI_SCAN_DIR mechanism"),"."),(0,i.kt)("p",null,"For Wordpress to work, there are some PHP extensions that need to be enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This is still needed\nmkdir .php.ini.d\ncat << EOF > .php.ini.d/extensions.ini\nextension=zlib\nextension=mysqli\nextension=openssl\nEOF\n")),(0,i.kt)("h2",{id:"deploy"},"Deploy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"epinio push --name wordpress\n")),(0,i.kt)("h2",{id:"additional-steps"},"Additional steps"),(0,i.kt)("p",null,"Wordpress needs a database to work. After visiting the route of your deployed\napplication you will have to set the connection details to the database."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/1.6.1/references/services"},"Service")," feature to deploy your database with Epinio.\nOf course, deploying a database manually is still possible."),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/example-wordpress#step-4---create-a-database-for-wordpress"},"the README of our example app"),",\non how to create a database and how to configure Wordpress to use it."))}h.isMDXComponent=!0}}]);