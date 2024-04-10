"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[26367],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=i,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],l={sidebar_label:"Epinio Journey: Deploy complex applications with a custom builder image",sidebar_position:4,title:""},p="Deploy Gitea with a custom builder image",s={unversionedId:"tutorials/custom_builder_go",id:"version-1.8.1/tutorials/custom_builder_go",title:"",description:"While you likely won't use Epinio to build and deploy Gitea, we are using it to show how to build a more complex application with Epinio.",source:"@site/versioned_docs/version-1.8.1/tutorials/custom_builder_go.md",sourceDirName:"tutorials",slug:"/tutorials/custom_builder_go",permalink:"/1.8.1/tutorials/custom_builder_go",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.8.1/tutorials/custom_builder_go.md",tags:[],version:"1.8.1",sidebarPosition:4,frontMatter:{sidebar_label:"Epinio Journey: Deploy complex applications with a custom builder image",sidebar_position:4,title:""},sidebar:"docs",previous:{title:"Epinio Journey: Single Dev Workflow",permalink:"/1.8.1/tutorials/single-dev-workflow"},next:{title:"Install Epinio",permalink:"/1.8.1/installation/install_epinio"}},c={},u=[{value:"Basic Concepts and prerequisites",id:"basic-concepts-and-prerequisites",level:2},{value:"Create the stack",id:"create-the-stack",level:2},{value:"Build the stack and publish the image",id:"build-the-stack-and-publish-the-image",level:3},{value:"Create the <code>make</code> buildpack",id:"create-the-make-buildpack",level:2},{value:"<code>bin/detect</code>",id:"bindetect",level:3},{value:"<code>bin/build</code>",id:"binbuild",level:3},{value:"Create and publish the builder",id:"create-and-publish-the-builder",level:2},{value:"Deploy Gitea",id:"deploy-gitea",level:2},{value:"Create and bind the database",id:"create-and-bind-the-database",level:3}],d={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-gitea-with-a-custom-builder-image"},"Deploy Gitea with a custom builder image"),(0,o.kt)("p",null,"While you likely won't use Epinio to build and deploy Gitea, we are using it to show how to build a more complex application with Epinio."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-gitea/gitea"},"Gitea")," is a self-hosted Git service. It is written in Go and Node.js."),(0,o.kt)("p",null,"At the time of writing the Paketo Go buildpack doesn't support Node.js asset compilation (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/go/issues/671"},"issue #671"),"), so we need to create a custom builder."),(0,o.kt)("p",null,"This builder will just check the needed Go and Node dependencies, and execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command to build both the frontend and the backend."),(0,o.kt)("p",null,"The code used during this guide is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/example-builder-gitea"},"example-builder-gitea")," repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/epinio/example-builder-gitea\ngit submodule update --init --recursive\ncd example-builder-gitea\n")),(0,o.kt)("h2",{id:"basic-concepts-and-prerequisites"},"Basic Concepts and prerequisites"),(0,o.kt)("p",null,"Before starting it is useful to know some basic concepts around Buildpacks, and have some tools already installed."),(0,o.kt)("p",null,"You can find in the Buildpack documentation what ",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/concepts/components/stack/"},"stacks"),", ",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/concepts/components/builder/"},"builders"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/concepts/components/buildpack/"},"buildpacks")," are. You should also have ",(0,o.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/tools/pack/"},(0,o.kt)("inlineCode",{parentName:"a"},"pack"))," installed, along with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"skopeo")," (to manage OCI artifacts)."),(0,o.kt)("h2",{id:"create-the-stack"},"Create the stack"),(0,o.kt)("p",null,"Unfortunately we were not able to reuse the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/bionic-full-stack"},"Paketo Full Stack")," because of a missing dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," image. To make it simpler we just ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/bionic-full-stack"},"forked")," this stack and added ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," to the run packages (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/bionic-full-stack/commit/408e949558a437c99858ac7bb99a8b78e78935e8"},"408e949"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note:",(0,o.kt)("br",{parentName:"p"}),"\n","We had to fork and/or reuse the same stack ID in order to reuse some Paketo buildpacks, that are going to work only with these stacks (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/node-engine/blob/main/buildpack.toml#L29"},"https://github.com/paketo-buildpacks/node-engine/blob/main/buildpack.toml#L29"),").")),(0,o.kt)("h3",{id:"build-the-stack-and-publish-the-image"},"Build the stack and publish the image"),(0,o.kt)("p",null,"To build the stack:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./stacks/bionic-full-stack/scripts/create.sh\n")),(0,o.kt)("p",null,"This will create two OCI images in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stacks/bionic-full-stack/build")," folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"build.oci"),(0,o.kt)("li",{parentName:"ul"},"run.oci")),(0,o.kt)("p",null,"From this folder we can untar the OCI artifacts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd stacks/bionic-full-stack/build\nmkdir build && tar -xf build.oci -C build\nmkdir run   && tar -xf run.oci   -C run\n")),(0,o.kt)("p",null,"use ",(0,o.kt)("inlineCode",{parentName:"p"},"skopeo")," to copy the artifacts into our local Docker registry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"skopeo -v copy oci:build docker-daemon:ghcr.io/enrichman/bionic-full-stack-build:0.1.0\nskopeo -v copy oci:run   docker-daemon:ghcr.io/enrichman/bionic-full-stack-run:0.1.0\n")),(0,o.kt)("p",null,"and push them to a public registry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker push ghcr.io/enrichman/bionic-full-stack-build:0.1.0\ndocker push ghcr.io/enrichman/bionic-full-stack-run:0.1.0\n")),(0,o.kt)("h2",{id:"create-the-make-buildpack"},"Create the ",(0,o.kt)("inlineCode",{parentName:"h2"},"make")," buildpack"),(0,o.kt)("p",null,"To build the Gitea application we created a ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," buildpack."),(0,o.kt)("h3",{id:"bindetect"},(0,o.kt)("inlineCode",{parentName:"h3"},"bin/detect")),(0,o.kt)("p",null,"During the ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," phase the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/detect")," script it will check the needed dependencies. "),(0,o.kt)("p",null,"It will check for the existance of the Makefile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"if [[ ! -f Makefile ]]; then\n    echo Makefile not found\n    exit 100\nfi\n")),(0,o.kt)("p",null,"and it will write to the plan.toml file that this buildpack requires Go and Node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat >> "${plan_path}" <<EOL\n[[requires]]\nname = "node"\n# version = "*"\n\n[requires.metadata]\nbuild = true\n\n[[requires]]\nname = "go"\n\n[requires.metadata]\nbuild = true\nEOL\n')),(0,o.kt)("h3",{id:"binbuild"},(0,o.kt)("inlineCode",{parentName:"h3"},"bin/build")),(0,o.kt)("p",null,"During the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," phase the buildpack will run the proper ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command to build the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'TAGS="bindata" make build\n')),(0,o.kt)("p",null,"setup the app configuration changing the listening port in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.ini")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cp custom/conf/app.example.ini custom/conf/app.ini\nsed -i "s/;HTTP_PORT = 3000/HTTP_PORT = 8080/" custom/conf/app.ini\n')),(0,o.kt)("p",null,"and defining the launch process in the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.toml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat >> "${layers_dir}/launch.toml" <<EOL\n[[processes]]\ntype = "web"\ncommand = "./gitea"\ndefault = true\nEOL\n')),(0,o.kt)("h2",{id:"create-and-publish-the-builder"},"Create and publish the builder"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"builder.toml")," file contains the buildpacks references and their execution order/groups."),(0,o.kt)("p",null,"We are referencing our ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," buildpack locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[[buildpacks]]\nid = "make"\nversion = "0.0.1"\nuri = "../../buildpacks/make"\n')),(0,o.kt)("p",null,"and we are also using the Paketo ",(0,o.kt)("inlineCode",{parentName:"p"},"node-engine")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"go-dist")," buildpacks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[[buildpacks]]\nuri = "docker://gcr.io/paketo-buildpacks/node-engine:1.3.0"\nversion = "1.3.0"\n\n[[buildpacks]]\nuri = "docker://gcr.io/paketo-buildpacks/go-dist:2.3.0"\nversion = "2.3.0"\n')),(0,o.kt)("p",null,"These buildpacks will provide the Node.js and Go dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/node-engine"},"https://github.com/paketo-buildpacks/node-engine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/go-dist"},"https://github.com/paketo-buildpacks/go-dist"))),(0,o.kt)("p",null,"We can finally create the builder image with ",(0,o.kt)("inlineCode",{parentName:"p"},"pack")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pack builder create ghcr.io/enrichman/gitea-builder:0.1.0 --config builders/gitea-builder/builder.toml\n")),(0,o.kt)("p",null,"and push it to a public registry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker push ghcr.io/enrichman/gitea-builder:0.1.0\n")),(0,o.kt)("h2",{id:"deploy-gitea"},"Deploy Gitea"),(0,o.kt)("p",null,"To deploy Gitea we can download the code from the reposotory, or refer directly to it."),(0,o.kt)("p",null,"We would like to deploy a stable release, so let's find the commit of the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.19.0")," with a couple of curls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export GITEA_VERSION=v1.19.0\nexport GITEA_TAG_OBJECT_URL=$(curl -s https://api.github.com/repos/go-gitea/gitea/git/refs/tags/$GITEA_VERSION | jq -r '.object.url')\nexport GITEA_TAG_COMMIT_SHA=$(curl -s $GITEA_TAG_OBJECT_URL | jq -r '.object.sha')\n")),(0,o.kt)("p",null,"We can now deply Gitea with a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio push --name gitea \\\n    --git https://github.com/go-gitea/gitea,$GITEA_TAG_COMMIT_SHA \\\n    --builder-image ghcr.io/enrichman/gitea-builder:0.1.0\n")),(0,o.kt)("p",null,"and then it should be available on your cluster (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://gitea."},"https://gitea."),"<SYSTEM_DOMAIN>)!"),(0,o.kt)("h3",{id:"create-and-bind-the-database"},"Create and bind the database"),(0,o.kt)("p",null,"We can go a step further, creating and binding the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," database to our application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio service create mysql-dev mydb\n")),(0,o.kt)("p",null,"We can check the status of the service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-> % epinio service show mydb            \n\n\ud83d\udea2  Showing Service...\n\n\n\u2714\ufe0f  Details:\n|       KEY       |                                     VALUE                                      |\n|-----------------|--------------------------------------------------------------------------------|\n| Name            | mydb                                                                           |\n| Created         | 2023-04-04 15:56:20 +0200 CEST                                                 |\n| Catalog Service | mysql-dev                                                                      |\n| Version         | 8.0.31                                                                         |\n| Status          | deployed                                                                       |\n| Used-By         |                                                                                |\n| Internal Routes | xcca9aa0f19a036fb6389474a7be0-mysql-headless.workspace.svc.cluster.local:3306, |\n|                 | xcca9aa0f19a036fb6389474a7be0-mysql.workspace.svc.cluster.local:3306           |\n")),(0,o.kt)("p",null,"We can use the internal route ",(0,o.kt)("inlineCode",{parentName:"p"},"xcca9aa0f19a036fb6389474a7be0-mysql.workspace.svc.cluster.local:3306")," to reach our DB."),(0,o.kt)("p",null,"Let's bind it to the Gitea application with ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio service bind mydb gitea"),"."),(0,o.kt)("p",null,"And we can now check the username and passwords in the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-> % epinio configuration list\n\n\ud83d\udea2  Listing configurations\nNamespace: workspace\n\n\n\u2714\ufe0f  Epinio Configurations:\n|                NAME                 |            CREATED             |  TYPE   | ORIGIN |          APPLICATIONS          |\n|-------------------------------------|--------------------------------|---------|--------|--------------------------------|\n| xcca9aa0f19a036fb6389474a7be0-mysql | 2023-04-04 15:56:22 +0200 CEST | service | mydb   | gitea (migrate to new access   |\n|                                     |                                |         |        | paths)                         |\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-> % epinio configuration show xcca9aa0f19a036fb6389474a7be0-mysql \n\n\ud83d\udea2  Configuration Details\nName: xcca9aa0f19a036fb6389474a7be0-mysql\nNamespace: workspace\n\n\ud83d\udea2  \nCreated: 2023-04-04 15:56:22 +0200 CEST\nUser: \nType: service\nOrigin: mydb\nUsed-By: gitea\nSiblings: \n\n\u26a0\ufe0f  Attention: Migrate bound apps to new access paths\n\u2714\ufe0f  \n|      PARAMETER      |   VALUE    |               ACCESS PATH                |\n|---------------------|------------|------------------------------------------|\n| mysql-password      | 6oUDWVHVcv | /configurations/mydb/mysql-password      |\n| mysql-root-password | eG83csnOLe | /configurations/mydb/mysql-root-password |\n\n\u26a0\ufe0f  Beware, the shown access paths are only available in the application's container\n")),(0,o.kt)("p",null,"We can use these credential to access the database.\nAccess the first time Gitea configuration from your browser and fill the database fields with the host, username and password. The database name is ",(0,o.kt)("inlineCode",{parentName:"p"},"my_database"),", that is the default value for the Bitnami charts that Epinio is using for its sample services."))}k.isMDXComponent=!0}}]);