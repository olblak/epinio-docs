"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[36959],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Pushing With A Git Job",sidebar_position:5,title:""},l="Push with gitjob",p={unversionedId:"howtos/gitjob_push",id:"version-1.6.0/howtos/gitjob_push",title:"",description:'In some other "application deployment" solutions, they have a feature that allows you to set up a deployment that rebuilds and republishes when your code stored in Git is changed.',source:"@site/versioned_docs/version-1.6.0/howtos/gitjob_push.md",sourceDirName:"howtos",slug:"/howtos/gitjob_push",permalink:"/howtos/gitjob_push",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.0/howtos/gitjob_push.md",tags:[],version:"1.6.0",sidebarPosition:5,frontMatter:{sidebar_label:"Pushing With A Git Job",sidebar_position:5,title:""},sidebar:"docs",previous:{title:"Provisioning Of An External IP Address For Local Kubernetes",permalink:"/howtos/provision_external_ip_for_local_kubernetes"},next:{title:"Setting Up External S3 Storage",permalink:"/howtos/setup_external_s3"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"Install GitJob",id:"install-gitjob",level:3},{value:"Upload Epinio Settings",id:"upload-epinio-settings",level:3},{value:"Setup Sample Project",id:"setup-sample-project",level:3},{value:"Using Webhooks",id:"using-webhooks",level:3}],h={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"push-with-gitjob"},"Push with gitjob"),(0,r.kt)("p",null,'In some other "application deployment" solutions, they have a feature that allows you to set up a deployment that rebuilds and republishes when your code stored in Git is changed.'),(0,r.kt)("p",null,"We can recreate this functionality in Epinio using the GitJob CRD from ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"Rancher Fleet"),"."),(0,r.kt)("p",null,"NOTE: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/issues/1269"},"We will improve this experience in the future"),"!"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"install-gitjob"},"Install GitJob"),(0,r.kt)("p",null,"If you don't have Rancher (or standalone Fleet) installed, we need to install the GitJob operator by following the instructions found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/gitjob#running"},"https://github.com/rancher/gitjob#running"),"."),(0,r.kt)("p",null,"Then we need to setup the Service Account to run our Jobs with (since we don't need to do anything directly with the kube api, we don't need to add any role bindings to it):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: epinio-push\n")),(0,r.kt)("h3",{id:"upload-epinio-settings"},"Upload Epinio Settings"),(0,r.kt)("p",null,"So the GitJob can authenticate and push correctly, we can upload our Epinio settings file to the cluster with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic epinio-creds --from-file=$HOME/.config/epinio/settings.yaml\n")),(0,r.kt)("p",null,"This will create a secret containing the settings.yaml that was created locally when you do ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio login")),(0,r.kt)("h3",{id:"setup-sample-project"},"Setup Sample Project"),(0,r.kt)("p",null,"Next, we can use the 12factor app to show how to write a GitJob."),(0,r.kt)("p",null,"Create a yaml file called ",(0,r.kt)("inlineCode",{parentName:"p"},"12factor-gitjob.yaml")," containing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: gitjob.cattle.io/v1\nkind: GitJob\nmetadata:\n  # The name of the GitJob, doesn\'t need to match the project.\n  name: samplepush\nspec:\n  syncInterval: 15\n  git:\n    # The git repo and branch to track. \n    repo: https://github.com/epinio/example-12factor\n    branch: main\n  jobSpec:\n    template:\n      spec:\n        # This should match what we created in the last step\n        serviceAccountName: epinio-gitjob\n        restartPolicy: "Never"\n        containers:\n        # This version should match your epinio deployment\n        - image: "splatform/epinio-server:v0.6.0"\n          name: epinio-push\n          volumeMounts:\n          - name: settings\n            mountPath: "/settings/"\n            readOnly: true\n          env:\n          - name: EPINIO_CONFIG\n            value: "/settings/settings.yaml"\n          command:\n          - /epinio \n          args:\n          - push \n          # This is the name of the app to push\n          - test12factor\n          workingDir: /workspace/source\n        volumes:\n        - name: settings\n          secret:\n            secretName: epinio-creds\n')),(0,r.kt)("p",null,"You can apply this via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f 12factor-gitjob.yaml\n")),(0,r.kt)("p",null,"Once applied, you should see a Job and then Pod get created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get job,pod\n")),(0,r.kt)("p",null,"You can follow the logs of the pod listed above with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl logs <pod_name> -f\n")),(0,r.kt)("h3",{id:"using-webhooks"},"Using Webhooks"),(0,r.kt)("p",null,"If you prefer to use webhooks instead of polling, set up the job in the same way as before but also follow the instructions found at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/gitjob#webhook"},"https://github.com/rancher/gitjob#webhook")))}d.isMDXComponent=!0}}]);