"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7464],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=r,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return o?n.createElement(b,l(l({ref:t},p),{},{components:o})):n.createElement(b,l({ref:t},p))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},52991:(e,t,o)=>{o.d(t,{Z:()=>k});var n=o(67294),r=o(86010),a=o(53438),l=o(39960),i=o(13919),s=o(95999);const c="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:o}=e;return n.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},o)}function u(e){let{href:t,icon:o,title:a,description:l}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",p),title:a},o," ",a),l&&n.createElement("p",{className:(0,r.Z)("text--truncate",m),title:l},l))}function b(e){let{item:t}=e;const o=(0,a.Wl)(t);return o?n.createElement(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const o=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:o,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const o=(0,a.jA)();return n.createElement(k,{items:o.items,className:t})}function k(e){const{items:t,className:o}=e;if(!t)return n.createElement(f,e);const l=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",o)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},34866:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905)),a=o(52991);const l={slug:"/modeling/boolean-tool",sidebar_position:5,description:""},i="Boolean Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/boolean-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/boolean-tool",title:"Boolean Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-multiple-objects/boolean-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/boolean-tool",permalink:"/docs/modeling/boolean-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/boolean-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Material Tool",permalink:"/docs/modeling/multi-material-tool"},next:{title:"UV Editor",permalink:"/docs/uv-editor"}},c={},p=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"A",id:"a",level:3},{value:"B",id:"b",level:3},{value:"Union",id:"union",level:3},{value:"Intersection",id:"intersection",level:3},{value:"Subtraction (A-B)",id:"subtraction-a-b",level:3},{value:"Subtraction (B-A)",id:"subtraction-b-a",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"boolean-tool"},"Boolean Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boolean Tool",src:o(55887).Z,width:"1428",height:"619"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Boolean Tool")," is a tool that allows you to glue two objects together, extract only the overlap, or subtract one object from another for a selected ",(0,r.kt)("strong",{parentName:"p"},"two objects"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"two UModeler X objects"),".\n",(0,r.kt)("img",{alt:"Boolean Tool Select Object",src:o(46808).Z,width:"881",height:"635"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("strong",{parentName:"p"},"Boolean tool in the Multiple Objects group"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select one of the ",(0,r.kt)("strong",{parentName:"p"},"Union, Intersection, or Subtraction buttons"),".\n",(0,r.kt)("img",{alt:"Boolean Tool",src:o(24084).Z,width:"974",height:"330"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The first selected object is assigned as A, the next selected object is assigned as B, and the ",(0,r.kt)("strong",{parentName:"li"},"order of A and B")," is important when using the ",(0,r.kt)("strong",{parentName:"li"},"Subtraction button"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The result of the selection is created as a new object.\n",(0,r.kt)("img",{alt:"Boolean Tool Select Object",src:o(16205).Z,width:"900",height:"557"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boolean Tool Properties",src:o(45541).Z,width:"974",height:"414"})),(0,r.kt)("h3",{id:"a"},"A"),(0,r.kt)("p",null,"View the name of the object registered as ",(0,r.kt)("strong",{parentName:"p"},"Object A"),"."),(0,r.kt)("h3",{id:"b"},"B"),(0,r.kt)("p",null,"View the name of the object registered as ",(0,r.kt)("strong",{parentName:"p"},"Object B"),"."),(0,r.kt)("h3",{id:"union"},"Union"),(0,r.kt)("p",null,"Combines two objects into a single object. The overlapping mesh is removed and a new object is created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boolean Tool",src:o(26498).Z,width:"1428",height:"619"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"different-from-the-combine-tool-in-the-multiple-objects-group"},"Different from the Combine Tool in the Multiple Objects group."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Combine Tool",src:o(28147).Z,width:"1502",height:"570"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Combine Tool")," simply combines two or more objects into a single object, while the Union in the ",(0,r.kt)("strong",{parentName:"p"},"Boolean Tool")," combines two objects into one, but removes the mesh of the overlapping parts."),(0,r.kt)(a.Z,{items:[{type:"link",label:"Combine Tool",href:"/docs/modeling/combine-tool"}],mdxType:"DocCardList"})),(0,r.kt)("h3",{id:"intersection"},"Intersection"),(0,r.kt)("p",null,"Button to make two objects into a single object, leaving only the overlapping parts."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boolean Tool",src:o(65982).Z,width:"1428",height:"619"})),(0,r.kt)("h3",{id:"subtraction-a-b"},"Subtraction (A-B)"),(0,r.kt)("p",null,"Button that creates a new object by subtracting ",(0,r.kt)("strong",{parentName:"p"},"Object B")," from ",(0,r.kt)("strong",{parentName:"p"},"Object A"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boolean Tool",src:o(22873).Z,width:"1428",height:"619"})),(0,r.kt)("h3",{id:"subtraction-b-a"},"Subtraction (B-A)"),(0,r.kt)("p",null,"Button that creates a new object by subtracting ",(0,r.kt)("strong",{parentName:"p"},"Object A")," from ",(0,r.kt)("strong",{parentName:"p"},"Object B"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boolean Tool",src:o(66843).Z,width:"1428",height:"619"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/x-4AIjT_VJ4",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},55887:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean-eeae6eb2109385bf1c406c065e96ebcd.png"},65982:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_Intersection-fd76b2eb84e6abdd9625cfc328ae3123.png"},45541:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_Properties-a3c005280751c4214f09e6b424ba78ef.png"},24084:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_Properties_Select-2f230270f3c4eeb9d2742af60a182ec7.png"},16205:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_Result-67160f8503e15a0064a589a74e1396ad.png"},46808:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_SelectObject-ef846bcf29107fd36a6ba9b0649b5e4f.png"},22873:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_SubtractionAB-75d6400c09844281806a425d19b0193b.png"},66843:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_SubtractionBA-ea1aa28288517adb198287f3f93d41a7.png"},26498:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Boolean_Union-bbd14de5a9777d9e1ae05355bf70df0f.png"},28147:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_MultipleObjects_Combine-c560914ae7a883986284c5691de57bfc.png"}}]);