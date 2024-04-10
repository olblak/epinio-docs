"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[39814],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a,o=n(83117),l=n(80102),i=(n(67294),n(3905)),r=["components"],s={sidebar_label:"Custom values for service Helm charts",sidebar_position:17,title:"How to specify custom values for service Helm charts"},u=void 0,p={unversionedId:"howtos/customization/using_custom_service_values",id:"version-1.10.0/howtos/customization/using_custom_service_values",title:"How to specify custom values for service Helm charts",description:"Audience",source:"@site/versioned_docs/version-1.10.0/howtos/customization/using_custom_service_values.md",sourceDirName:"howtos/customization",slug:"/howtos/customization/using_custom_service_values",permalink:"/1.10.0/howtos/customization/using_custom_service_values",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.10.0/howtos/customization/using_custom_service_values.md",tags:[],version:"1.10.0",sidebarPosition:17,frontMatter:{sidebar_label:"Custom values for service Helm charts",sidebar_position:17,title:"How to specify custom values for service Helm charts"},sidebar:"docs",previous:{title:"Creating Custom Application Helm Charts",permalink:"/1.10.0/howtos/customization/create_custom_appcharts"},next:{title:"Working With Multiple Namespaces",permalink:"/1.10.0/howtos/use-develop/namespaces"}},m={},c=[{value:"Audience",id:"audience",level:2},{value:"General information",id:"general-information",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic map, simple value",id:"basic-map-simple-value",level:3},{value:"Basic array, simple value",id:"basic-array-simple-value",level:3},{value:"Mixed map and array, simple values",id:"mixed-map-and-array-simple-values",level:3},{value:"Map-valued map",id:"map-valued-map",level:3}],d=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),v={toc:c};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"audience"},"Audience"),(0,i.kt)("p",null,"This documentation is for operators specifying custom services for users, and users creating instances of those custom services who need to customize them."),(0,i.kt)("p",null,"Operators are shown how to specify user settings based on the form of the field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file of the underlying service Helm chart."),(0,i.kt)("p",null,"Users are shown how to set values for the user settings of a service."),(0,i.kt)("h2",{id:"general-information"},"General information"),(0,i.kt)("p",null,"Operators, see ",(0,i.kt)("a",{parentName:"p",href:"/1.10.0/howtos/customization/create_custom_service"},"Creating A Custom Service")," for the general syntax of\nuser settings."),(0,i.kt)("p",null,"For users, the relevant option is ",(0,i.kt)("inlineCode",{parentName:"p"},"--chart-value")," (short: ",(0,i.kt)("inlineCode",{parentName:"p"},"-v"),") of the ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio service create"),"\ncommand."),(0,i.kt)("p",null,"Following is a series of examples showing how the various forms of helm chart\nvalues are specified in the custom services and then used via ",(0,i.kt)("inlineCode",{parentName:"p"},"--chart-value"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"All the examples have the same basic structure. The tables show, side by side,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"how the field looks like in the ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," of the underlying service,"),(0,i.kt)("li",{parentName:"ul"},"how the field is specified in the custom service, and"),(0,i.kt)("li",{parentName:"ul"},"how it is addressed by the user via ",(0,i.kt)("inlineCode",{parentName:"li"},"--chart-value"),".")),(0,i.kt)("h3",{id:"basic-map-simple-value"},"Basic map, simple value"),(0,i.kt)("p",null,"This example assumes that the field value is of a simple type ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)("pre",null,(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("code",null,"values.yaml")),(0,i.kt)("th",null,"Service spec"),(0,i.kt)("th",null,"CLI usage")),(0,i.kt)("tr",{valign:"top"},(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},"foo:\n  bar: value\n")),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'settings:\n  "foo.bar":\n    type: "T"\n')),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'-v "foo.bar=value"'))))),(0,i.kt)("h3",{id:"basic-array-simple-value"},"Basic array, simple value"),(0,i.kt)("p",null,"This example assumes that the field value is of a simple type ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)("p",null,"Note how the field name in the service spec does not mention that ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," is an array.\nHere the name ",(0,i.kt)("inlineCode",{parentName:"p"},"foo.bar"),", in the service spec, describes the path to the field."),(0,i.kt)("pre",null,(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("code",null,"values.yaml")),(0,i.kt)("th",null,"Service spec"),(0,i.kt)("th",null,"CLI usage")),(0,i.kt)("tr",{valign:"top"},(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},"foo:\n  bar:\n    - value1\n    - value2\n    - ...\n")),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'settings:\n  "foo.bar":\n    type: "T"\n')),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'-v "foo.bar[0]=value1"\n-v "foo.bar[1]=value2"\n...\n'))))),(0,i.kt)("h3",{id:"mixed-map-and-array-simple-values"},"Mixed map and array, simple values"),(0,i.kt)("p",null,"This example assumes that the value field is a simple type ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is the array, having maps as elements, of which the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," are of\ninterest."),(0,i.kt)("p",null,"Again, note how the names of the field do not mention the nature of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," as an array, and how the paths to fields of interest are used to name them in the CLI settings."),(0,i.kt)("pre",null,(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("code",null,"values.yaml")),(0,i.kt)("th",null,"Service spec"),(0,i.kt)("th",null,"CLI usage")),(0,i.kt)("tr",{valign:"top"},(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},"foo:\n  - name: name1\n    value: value1\n  - name: name2\n    value: value2\n  - ...\n")),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'settings:\n  "foo.name":\n    type: "string"\n  "foo.value":\n    type: "T"\n')),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'-v "foo[0].name=name1"\n-v "foo[0].value=value1"\n-v "foo[1].name=name2"\n-v "foo[1].value=value2"\n...\n'))))),(0,i.kt)("h3",{id:"map-valued-map"},"Map-valued map"),(0,i.kt)("p",null,"This example assumes that the field value is a map itself, with arbitrary keys, and values.\nA concrete example would be the various annotation fields provided by bitnami services that enable the user to set custom annotations on the various groups of pods of the service."),(0,i.kt)("pre",null,(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("code",null,"values.yaml")),(0,i.kt)("th",null,"Service spec"),(0,i.kt)("th",null,"CLI usage")),(0,i.kt)("tr",{valign:"top"},(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},"foo:\n  bar:\n    key1: value1\n    key2: value2\n    ...\n")),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'settings:\n  "foo.bar":\n    type: "map"\n')),(0,i.kt)("td",null,(0,i.kt)(d,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'-v "foo.bar.key1=value1\n-v "foo.bar.key2=value2\n...\n'))))))}h.isMDXComponent=!0}}]);