"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[31281],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],p={sidebar_label:"OIDC authentication",title:""},c="OIDC authentication",s={unversionedId:"references/authentication_oidc",id:"version-1.6.2/references/authentication_oidc",title:"",description:"Since version 1.3.0, Epinio has integrated Dex as an identity provider which adds the support for external OIDC providers.",source:"@site/versioned_docs/version-1.6.2/references/authentication_oidc.md",sourceDirName:"references",slug:"/references/authentication_oidc",permalink:"/1.6.2/references/authentication_oidc",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.2/references/authentication_oidc.md",tags:[],version:"1.6.2",frontMatter:{sidebar_label:"OIDC authentication",title:""},sidebar:"docs",previous:{title:"API",permalink:"/1.6.2/references/api"},next:{title:"Authorization",permalink:"/1.6.2/references/authorization"}},l={},u=[{value:"Groups and Roles mapping",id:"groups-and-roles-mapping",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oidc-authentication"},"OIDC authentication"),(0,o.kt)("p",null,"Since version ",(0,o.kt)("strong",{parentName:"p"},"1.3.0"),", Epinio has integrated ",(0,o.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"Dex")," as an identity provider which adds the support for external OIDC providers."),(0,o.kt)("p",null,"To authenticate through Dex, you can use the login command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--oidc")," flag. This will open a web page where you can authenticate with the configured providers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio login --oidc https://epinio.mydomain.com\n")),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," cli on a machine without a browser you can provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"--prompt")," flag. This will give you the url of a web page where you can authenticate even on a different machine. After logging in and pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Grant Access")," button the page will return the authorization code that you have to copy and paste back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," cli input to finish the authentication process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epinio login --oidc --prompt https://epinio.172.21.0.4.omg.howdoi.website\n")),(0,o.kt)("p",null,"By default, only the local connector is setup with two users (",(0,o.kt)("inlineCode",{parentName:"p"},"admin@epinio.io")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio@epinio.io"),").\nTo add more connectors you can edit the Dex configuration file (key ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),"), stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dex-config")," secret in the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio")," namespace."),(0,o.kt)("p",null,"After a successful login, a new Epinio user will be created with the username matching the email used to login and returned by the provider."),(0,o.kt)("p",null,"If you want to login with the same email through the Epinio UI, you should set a password for your user by patching the user secret."),(0,o.kt)("p",null,"Find the secret name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export EPINIO_USERNAME=$(echo -n \'admin@epinio.io\' | base64)\nkubectl get secret -n epinio -o json -l epinio.io/api-user-credentials | jq -r ".items[] | select(.data.username==\\"$EPINIO_USERNAME\\") | .metadata.name"\n\nruser-adminepinioio-9341763ee7dcbce070e7c14f246ec8291e9a7278\n')),(0,o.kt)("p",null,"Patch the secret with the encrypted password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export EPINIO_PASSWORD=$(echo -n \'$2a$10$6bCi5NMstMK781In7JGiL.B44pgoplUb330FQvm6mVXMppbXBPiXS\' | base64 -w0)\nkubectl patch secret -n epinio -p="{\\"data\\":{\\"password\\": \\"$EPINIO_PASSWORD\\"}}" ruser-adminepinioio-9341763ee7dcbce070e7c14f246ec8291e9a7278\n\nsecret/ruser-adminepinioio-9341763ee7dcbce070e7c14f246ec8291e9a7278 patched\n')),(0,o.kt)("p",null,"You're now able to login with the credentials in Epinio UI."),(0,o.kt)("h2",{id:"groups-and-roles-mapping"},"Groups and Roles mapping"),(0,o.kt)("p",null,"The external identity providers may provide additional information about the user, for example the groups that he's member of.  "),(0,o.kt)("p",null,"These groups can be used to associate a specific role to the user. To do so you need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"rolesMapping")," key to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dex-config")," secret. The value of the key is a yaml string that will be used to map the groups of a provider to a specific role:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rolesMapping: |-\n  - connectorId: github\n    groups:\n    - id: Org1:Admins\n      role: admin\n    - id: Org1:TeamBlue\n      role: user\n\nconfig.yaml: |-\n  connectors:\n  - type: github\n    id: github\n    name: GitHub\n    config:\n      loadAllGroups: true\n      orgs:\n      - name: Org1\n")),(0,o.kt)("p",null,"The groups will be evaluated in order. In the previous example if the user is a member of both ",(0,o.kt)("inlineCode",{parentName:"p"},"Org1:Admins")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Org1:TeamBlue")," then that user will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role."),(0,o.kt)("p",null,"Please note that the role is bound when the user is created. Any modification of the groups will not propagate to already existing users."))}h.isMDXComponent=!0}}]);