"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,p=m["".concat(d,".").concat(g)]||m[g]||c[g]||l;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),l=n(53438),i=n(39960),o=n(13919),d=n(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function c(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function g(e){let{href:t,icon:n,title:l,description:i}=e;return r.createElement(c,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:l},n," ",l),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function p(e){let{item:t}=e;const n=(0,l.Wl)(t);return n?r.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(t.docId??void 0);return r.createElement(g,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,l.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const i=(0,l.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},1365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(52991);const i={sidebar_position:3,slug:"/umx-for-um-users",description:""},o="UModeler X for UModeler users",d={unversionedId:"getting-started/for-um-users",id:"getting-started/for-um-users",title:"UModeler X for UModeler users",description:"",source:"@site/docs/getting-started/for-um-users.md",sourceDirName:"getting-started",slug:"/umx-for-um-users",permalink:"/docs/umx-for-um-users",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/umx-for-um-users",description:""},sidebar:"docs",previous:{title:"Shortcuts",permalink:"/docs/shortcuts"},next:{title:"Preference",permalink:"/docs/preference"}},s={},u=[{value:"<strong>1. Key Features of UModeler X</strong>",id:"1-key-features-of-umodeler-x",level:2},{value:"LSCM Tool",id:"lscm-tool",level:3},{value:"Modifiers",id:"modifiers",level:3},{value:"Rigging",id:"rigging",level:3},{value:"Painting",id:"painting",level:3},{value:"Editing much more polygons",id:"editing-much-more-polygons",level:3},{value:"<strong>2. Simultaneous use of UModeler and UModeler X</strong>",id:"2-simultaneous-use-of-umodeler-and-umodeler-x",level:2},{value:"<strong>3. Converting Objects Created in UModeler to UModeler X</strong>",id:"3-converting-objects-created-in-umodeler-to-umodeler-x",level:2},{value:"<strong>4. Key Differences Between UModeler and UModeler X</strong>.",id:"4-key-differences-between-umodeler-and-umodeler-x",level:2}],m={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"umodeler-x-for-umodeler-users"},"UModeler X for UModeler users"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Migrate to UModeler X Result",src:n(56924).Z,width:"2625",height:"1188"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UModeler")," enabled fast modeling with its sketch-based smart modeling and concise, quick features. However, UModeler X takes this a step further by providing all the features needed for 3D content creation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UModeler X")," includes everything from a ",(0,a.kt)("strong",{parentName:"p"},"modeling mode")," for creating shapes, ",(0,a.kt)("strong",{parentName:"p"},"UV editing"),", a ",(0,a.kt)("strong",{parentName:"p"},"rigging mode")," for animation, to a ",(0,a.kt)("strong",{parentName:"p"},"painting mode")," for coloring and expressing distinctive materials."),(0,a.kt)("p",null,"This guide explains how the familiar features in ",(0,a.kt)("strong",{parentName:"p"},"UModeler")," have changed in ",(0,a.kt)("strong",{parentName:"p"},"UModeler X"),", and how to use the new features."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"1-key-features-of-umodeler-x"},(0,a.kt)("strong",{parentName:"h2"},"1. Key Features of UModeler X")),(0,a.kt)("p",null,"UModeler X offers enhanced performance and new features compared to UModeler."),(0,a.kt)("h3",{id:"lscm-tool"},"LSCM Tool"),(0,a.kt)("p",null,"UModeler X provides a UV unwrapping feature using the ",(0,a.kt)("strong",{parentName:"p"},"LSCM (Least Squares Conformal Maps) algorithm"),". This allows users to generate UV coordinates quickly and efficiently. By using the LSCM tool within the UV Editor, it calculates the least squares distance to produce the optimal UV layout."),(0,a.kt)(l.Z,{items:[{type:"link",label:"LSCM Tool",href:"/docs/uveditor/lscm-tool"}],mdxType:"DocCardList"}),(0,a.kt)("h3",{id:"modifiers"},"Modifiers"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modifier Disable",src:n(17471).Z,width:"1560",height:"640"})),(0,a.kt)("p",null,"UModeler X provides a modifier system that enables non-destructive modeling. Through this system, users can apply various modifications while preserving the original model."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modifier Add",src:n(69584).Z,width:"792",height:"640"})),(0,a.kt)(l.Z,{items:[{type:"link",label:"Modifier",href:"/docs/modifier"}],mdxType:"DocCardList"}),(0,a.kt)("h3",{id:"rigging"},"Rigging"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rigging Mode Guide",src:n(66500).Z,width:"2447",height:"887"})),(0,a.kt)("p",null,"UModeler X provides a rigging mode for creating animations. In this mode, users can assign weights to vertices, and carry out weight editing and bone creation and management."),(0,a.kt)(l.Z,{items:[{type:"link",label:"Rigging Mode",href:"/docs/rigging-mode"}],mdxType:"DocCardList"}),(0,a.kt)("h3",{id:"painting"},"Painting"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Painting Mode",src:n(70120).Z,width:"2161",height:"1540"})),(0,a.kt)("p",null,"UModeler X provides a painting mode for texture painting. In this mode, users can use layers and brushes to color the model and create textures."),(0,a.kt)(l.Z,{items:[{type:"link",label:"Painting Mode",href:"/docs/painting-mode"}],mdxType:"DocCardList"}),(0,a.kt)("h3",{id:"editing-much-more-polygons"},"Editing much more polygons"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UModelerize End",src:n(29919).Z,width:"1690",height:"1120"})),(0,a.kt)("p",null,"UModeler X provides enhanced polygon editing features along with optimized performance, allowing for the display and editing of more polygons."),(0,a.kt)("p",null,"Thanks to this, it is easier to create complex and detailed models while managing polygons more efficiently."),(0,a.kt)("p",null,"It is effective for creating characters that require curved and smooth modeling, or backgrounds requiring complex shapes, and thanks to the optimized performance, you can experience a smoother working environment compared to UModeler."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2-simultaneous-use-of-umodeler-and-umodeler-x"},(0,a.kt)("strong",{parentName:"h2"},"2. Simultaneous use of UModeler and UModeler X")),(0,a.kt)("p",null,"UModeler X can be used together with UModeler. Each version has its own advantages, so you can choose and use them appropriately according to the requirements of the project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UModeler",src:n(90595).Z,width:"1202",height:"352"})),(0,a.kt)("p",null,"In the initial stages, you can utilize the simplicity of UModeler for prototyping, level design, and quick background creation."),(0,a.kt)("p",null,"Later, in the stages where detailed work is needed, it is possible to complete models using the various features of UModeler X, including modeling, modifiers, rigging tools, and layer-supported painting modes."),(0,a.kt)("p",null,"In this way, both versions can be used simultaneously within a single project, allowing users to freely choose according to their production workflow."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"3-converting-objects-created-in-umodeler-to-umodeler-x"},(0,a.kt)("strong",{parentName:"h2"},"3. Converting Objects Created in UModeler to UModeler X")),(0,a.kt)("p",null,"You can edit objects created in UModeler using UModeler X. To do this, you need to convert UModeler objects into UModeler X objects. This conversion process is possible for individual UModeler objects as well as for all UModeler objects in a project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Detailed conversion instructions can be found by clicking on the document below.")),(0,a.kt)(l.Z,{items:[{type:"link",label:"UModeler to UModeler X",href:"/docs/um-to-umx-conversion",description:"UModeler object conversion guide documentation"}],mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"4-key-differences-between-umodeler-and-umodeler-x"},(0,a.kt)("strong",{parentName:"h2"},"4. Key Differences Between UModeler and UModeler X"),"."),(0,a.kt)("p",null,"The table below briefly summarizes the main feature differences between UModeler and UModeler X."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Category")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Feature")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"UModeler")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"UModeler X")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Modeling")),(0,a.kt)("td",{parentName:"tr",align:null},"Polygon Editing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Sketch-based Smart Modeling"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"UV Editing")),(0,a.kt)("td",{parentName:"tr",align:null},"UV Unwrap"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Hotspot Texturing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"LSCM Algorithm UV Unwrap"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Rigging")),(0,a.kt)("td",{parentName:"tr",align:null},"Bone Editing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Weight Editing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Auto Rigging"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2514 Auto Weights"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2514 Build Bones"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Painting")),(0,a.kt)("td",{parentName:"tr",align:null},"3D Painting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Layer Based Texturing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Brush Editing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}c.isMDXComponent=!0},69584:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Modifier_ModifierSystem_Add-b21e28383f6d6c967841541fb63c8dcf.png"},17471:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Modifier_ModifierSystem_Disable-140a4f804feaac416422b8ae73c06384.png"},70120:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PaintingMode_Main-a22b47c45a79fbe29f238b45665f71dd.png"},66500:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_Guide-b7d550fec1e13e826875b4155741e9d5.png"},29919:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Device_5_FHD-e3190ba28060984f7743b4865a7fd9d2.png"},90595:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/for-um-users_2-04ebf8baa4703d9663068c3ec652ee30.png"},56924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/for-um-users_MigratetoUModelerX_Result-d6fa789c3cb1881fc8e4bbd7326b5852.png"}}]);