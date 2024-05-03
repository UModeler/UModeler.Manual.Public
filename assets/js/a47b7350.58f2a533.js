"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,h=m["".concat(s,".").concat(g)]||m[g]||p[g]||l;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const l={slug:"/modeling/shrink-tool",sidebar_position:5,description:""},i="Shrink Tool",a={unversionedId:"editable-mesh/modeling-mode/modeling-mode-selection/shrink-tool",id:"editable-mesh/modeling-mode/modeling-mode-selection/shrink-tool",title:"Shrink Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-selection/shrink-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-selection",slug:"/modeling/shrink-tool",permalink:"/docs/modeling/shrink-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/shrink-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Grow Tool",permalink:"/docs/modeling/grow-tool"},next:{title:"Loop Tool",permalink:"/docs/modeling/loop-tool"}},s={},c=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"Vertex",id:"vertex",level:3},{value:"Edge",id:"edge",level:3},{value:"Face",id:"face",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shrink-tool"},"Shrink Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shrink Tool",src:n(3760).Z,width:"1920",height:"640"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Shrink tool")," is a tool that shrinks an ",(0,r.kt)("strong",{parentName:"p"},"area")," on selected elements. It does not work if there is no element selected"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use-it"},(0,r.kt)("strong",{parentName:"h2"},"How to use it")),(0,r.kt)("h3",{id:"vertex"},"Vertex"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"select ",(0,r.kt)("strong",{parentName:"li"},"one or more vertices"),".\n",(0,r.kt)("img",{alt:"Vertex Select",src:n(93566).Z,width:"960",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Shrink Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"The selected vertex ",(0,r.kt)("strong",{parentName:"li"},"area")," will be shrunk and selected. If there is not enough range for the selected faces, they will be deselected.\n",(0,r.kt)("img",{alt:"Vertex Result",src:n(48922).Z,width:"960",height:"640"}))),(0,r.kt)("h3",{id:"edge"},"Edge"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select one or more edges.\n",(0,r.kt)("img",{alt:"Edge Select",src:n(28151).Z,width:"960",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Shrink Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"The selected edges will be shrunk and selected. If the selected faces do not have enough range, they will be deselected.\n",(0,r.kt)("img",{alt:"Edge Result",src:n(23323).Z,width:"960",height:"640"}))),(0,r.kt)("h3",{id:"face"},"Face"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select one or more faces.\n",(0,r.kt)("img",{alt:"Face Select",src:n(46283).Z,width:"960",height:"640"})),(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("strong",{parentName:"li"},"Shrink Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"The selected faces will be shrunk and selected. If there is not enough range in the selected faces, they will be deselected.\n",(0,r.kt)("img",{alt:"Face Result",src:n(69250).Z,width:"960",height:"640"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/hrLpMCOsoeY",frameborder:"0",allowfullscreen:""})))}m.isMDXComponent=!0},3760:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink-e637b31dd92f46541265b329022a9ec0.png"},23323:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink_Edge_Result-6e8f27bad40d9708ecd326de6bb1a840.png"},28151:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink_Edge_Select-e6b388b3e2b5812575cfa5c2735ddbe9.png"},69250:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink_Face_Result-c67f008128a8d2cf1a33b466d016c86e.png"},46283:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink_Face_Select-da6c861bd65cb899a5382fea667ca530.png"},48922:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink_Vertex_Result-1375da51386bde74a21648805a2543e1.png"},93566:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Modeling_Selection_Shrink_Vertex_Select-0217325f0ff3ff0ee3c969574dfb18af.png"}}]);