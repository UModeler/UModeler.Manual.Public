"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9560],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=c(o),m=r,u=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return o?n.createElement(u,a(a({ref:t},d),{},{components:o})):n.createElement(u,a({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},93934:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const l={slug:"/modeling/ring-tool",sidebar_position:7,description:""},a="Ring Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-selection/ring-tool",id:"editable-mesh/modeling-mode/modeling-mode-selection/ring-tool",title:"Ring Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-selection/ring-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-selection",slug:"/modeling/ring-tool",permalink:"/docs/modeling/ring-tool",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/modeling/ring-tool",sidebar_position:7,description:""},sidebar:"docs",previous:{title:"Loop Tool",permalink:"/docs/modeling/loop-tool"},next:{title:"Border Tool",permalink:"/docs/modeling/border-tool"}},s={},c=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"Edge",id:"edge",level:3},{value:"Face",id:"face",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Select Type</strong>",id:"select-type",level:2},{value:"At One Go",id:"at-one-go",level:3},{value:"Grow",id:"grow",level:3},{value:"<strong>Example of Usage</strong>",id:"example-of-usage",level:2},{value:"Edge",id:"edge-1",level:2},{value:"Select Type: At One Go",id:"select-type-at-one-go",level:3},{value:"Select Type: Grow",id:"select-type-grow",level:3},{value:"Face",id:"face-1",level:2},{value:"Select Type: At One Go",id:"select-type-at-one-go-1",level:3}],d={toc:c};function g(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ring-tool"},"Ring Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ring Tool",src:o(2094).Z,width:"1514",height:"600"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Ring tool")," is a tool that selects elements parallel to the selected element."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to use")),(0,r.kt)("h3",{id:"edge"},"Edge"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"one or more edges"),".\n",(0,r.kt)("img",{alt:"Ring Tool Edge Select",src:o(11910).Z,width:"783",height:"514"})),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Ring Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Edges ",(0,r.kt)("strong",{parentName:"li"},"in a direction parallel to the selected edges")," are selected.\n",(0,r.kt)("img",{alt:"Ring Tool Edge Result",src:o(15531).Z,width:"783",height:"514"}))),(0,r.kt)("h3",{id:"face"},"Face"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Ring tool")," only works with faces consisting of 4 edges.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"select ",(0,r.kt)("strong",{parentName:"li"},"2 or more faces")," adjacent to each other.\n",(0,r.kt)("img",{alt:"Ring Tool Face Select",src:o(36027).Z,width:"783",height:"514"})),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Ring tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Faces in a direction ",(0,r.kt)("strong",{parentName:"li"},"parallel to the direction of travel of the selected faces")," will be selected.\n",(0,r.kt)("img",{alt:"Ring Tool Face Result",src:o(10445).Z,width:"783",height:"514"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can change the ",(0,r.kt)("strong",{parentName:"p"},"properties")," in the ",(0,r.kt)("strong",{parentName:"p"},"properties window")," that appears when you ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Alt+Click"))," on the ",(0,r.kt)("strong",{parentName:"p"},"Ring tool icon"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Ring Tool Properties",src:o(70099).Z,width:"876",height:"300"}))),(0,r.kt)("h2",{id:"select-type"},(0,r.kt)("strong",{parentName:"h2"},"Select Type")),(0,r.kt)("h3",{id:"at-one-go"},"At One Go"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ring Tool At One Go",src:o(84771).Z,width:"998",height:"272"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"At One Go property")," is a property that allows you to ",(0,r.kt)("strong",{parentName:"p"},"select all edges and faces at once")," based on the ",(0,r.kt)("strong",{parentName:"p"},"Ring tool selection criteria"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Edge"),"\n",(0,r.kt)("img",{alt:"Ring Tool Edge At One Go",src:o(46797).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Face"),"\n",(0,r.kt)("img",{alt:"Ring Tool Face At One Go",src:o(73513).Z,width:"1920",height:"640"})),(0,r.kt)("h3",{id:"grow"},"Grow"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ring Tool Grow",src:o(9250).Z,width:"998",height:"272"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Grow property")," is a property that allows selection in a way that increases the range each time the ",(0,r.kt)("strong",{parentName:"p"},"Ring tool icon")," is ",(0,r.kt)("strong",{parentName:"p"},"clicked"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Faces are not subject to the ",(0,r.kt)("strong",{parentName:"p"},"Grow property"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ring Tool Face Grow",src:o(82711).Z,width:"1592",height:"640"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-of-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example of Usage")),(0,r.kt)("h2",{id:"edge-1"},"Edge"),(0,r.kt)("h3",{id:"select-type-at-one-go"},"Select Type: At One Go"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/toLgvXTrJZA",frameborder:"0",allowfullscreen:""})),(0,r.kt)("h3",{id:"select-type-grow"},"Select Type: Grow"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/w29RF35WQos",frameborder:"0",allowfullscreen:""})),(0,r.kt)("h2",{id:"face-1"},"Face"),(0,r.kt)("h3",{id:"select-type-at-one-go-1"},"Select Type: At One Go"),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/HItFWsl3MFg",frameborder:"0",allowfullscreen:""})))}g.isMDXComponent=!0},2094:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring-c7463c6caf0ae39906148ff1960b114c.png"},84771:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_AtOneGo-7578ce08ad0e3b59ecc939d0dab73185.png"},46797:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Edge_AtOneGo-47ec2de96f2311f8d36bce3f1d8d8648.png"},82711:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Edge_Grow-2ec6f1bc4c1230ff300f1ce7b553a81a.png"},15531:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Edge_Result-5eeacb4d6470e6d1fed5d33eaba06341.png"},11910:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Edge_Select-b2e58117ffa8debfde6ccb88d0a87682.png"},73513:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Face_AtOneGo-2cf6a53d8e16ed59876bd45c792dec62.png"},10445:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Face_Result-2218bb6e8744b53e32d173535e9986e1.png"},36027:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Face_Select-64a07d426d34e1324f376e9a49a17285.png"},9250:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Grow-39c21eae5b849bd1df1ae2d95618b9c4.png"},70099:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Selection_Ring_Properties-207a3714a443cf1dcc0a85456e1b4df4.png"}}]);