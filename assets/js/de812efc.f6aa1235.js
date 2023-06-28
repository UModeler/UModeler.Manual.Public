"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={slug:"/painting-mode",description:""},o="Painting Mode",l={unversionedId:"editable-mesh/painting-mode/index",id:"editable-mesh/painting-mode/index",title:"Painting Mode",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/painting-mode/index.md",sourceDirName:"editable-mesh/painting-mode",slug:"/painting-mode",permalink:"/docs/painting-mode",draft:!1,tags:[],version:"current",frontMatter:{slug:"/painting-mode",description:""},sidebar:"docs",previous:{title:"Edit Bones Tool",permalink:"/docs/rigging/edit-bones-tool"},next:{title:"Painting 2D",permalink:"/docs/painting/painting-2d"}},s={},p=[{value:"<strong>Starting Painting Mode</strong>",id:"starting-painting-mode",level:2},{value:"UV Unwrap",id:"uv-unwrap",level:3},{value:"Materials",id:"materials",level:3},{value:"Startup Resolution",id:"startup-resolution",level:3},{value:"Startup Material Template",id:"startup-material-template",level:3},{value:"Startup Background Color",id:"startup-background-color",level:3},{value:"<strong>Interface</strong>",id:"interface",level:2},{value:"Painting 2D",id:"painting-2d",level:3},{value:"Material Group",id:"material-group",level:3},{value:"Layers Group",id:"layers-group",level:3},{value:"Layer Mask",id:"layer-mask",level:3},{value:"Group layers",id:"group-layers",level:3},{value:"Paint Layers",id:"paint-layers",level:3},{value:"Fill layers",id:"fill-layers",level:3},{value:"Sticker Layers",id:"sticker-layers",level:3},{value:"Properties Group",id:"properties-group",level:3},{value:"Map Source group",id:"map-source-group",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"painting-mode"},"Painting Mode"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Painting Mode",src:a(45041).Z,width:"2161",height:"1540"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Painting mode")," is the mode for painting colors on the model, allowing you to use ",(0,n.kt)("strong",{parentName:"p"},"layers and brushes")," to express colors and create textures, etc."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"starting-painting-mode"},(0,n.kt)("strong",{parentName:"h2"},"Starting Painting Mode")),(0,n.kt)("p",null,"In order to use Painting Mode, you must first go through the setup steps."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Painting Mode Start",src:a(17540).Z,width:"949",height:"457"})),(0,n.kt)("h3",{id:"uv-unwrap"},"UV Unwrap"),(0,n.kt)("p",null,"This property is displayed when a UV is not unwrapped on the model. It is not displayed if the UV has been edited with the UV Editor.\n",(0,n.kt)("img",{alt:"Painting Mode UV ",src:a(28659).Z,width:"949",height:"609"})),(0,n.kt)("h3",{id:"materials"},"Materials"),(0,n.kt)("p",null,"This property selects the material that will be painted."),(0,n.kt)("h3",{id:"startup-resolution"},"Startup Resolution"),(0,n.kt)("p",null,"This property selects the texture resolution when painting. This can be changed during painting."),(0,n.kt)("h3",{id:"startup-material-template"},"Startup Material Template"),(0,n.kt)("p",null,"This property sets the predefined map source that will be used for painting."),(0,n.kt)("h3",{id:"startup-background-color"},"Startup Background Color"),(0,n.kt)("p",null,"This property sets the color that will be used as the base for painting. This can be changed during painting."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"interface"},(0,n.kt)("strong",{parentName:"h2"},"Interface")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Painting Mode Interface",src:a(41316).Z,width:"2170",height:"2051"})),(0,n.kt)("h3",{id:"painting-2d"},"Painting 2D"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Painting 2D tool")," is an editor-like tool that synchronizes with Painting Mode."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Painting 2D",src:a(84459).Z,width:"1622",height:"1268"})),(0,n.kt)("h3",{id:"material-group"},"Material Group"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Material group")," in ",(0,n.kt)("strong",{parentName:"p"},"Painting mode")," is a group of properties that allows you to select a material for painting, or for its representation in the scene."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Material Group",src:a(28374).Z,width:"1365",height:"330"})),(0,n.kt)("h3",{id:"layers-group"},"Layers Group"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Layer group")," in ",(0,n.kt)("strong",{parentName:"p"},"Painting Mode")," is the group where layers are displayed, along with tools to manage and edit them."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Layers Group",src:a(32431).Z,width:"1365",height:"549"})),(0,n.kt)("h3",{id:"layer-mask"},"Layer Mask"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Layer Mask")," is a property that masks a specific area of a layer."),(0,n.kt)("h3",{id:"group-layers"},"Group layers"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Group layer")," is a layer of properties that ",(0,n.kt)("strong",{parentName:"p"},"manage layers together"),"."),(0,n.kt)("h3",{id:"paint-layers"},"Paint Layers"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Paint layer")," is a layer that applies map sources by painting."),(0,n.kt)("h3",{id:"fill-layers"},"Fill layers"),(0,n.kt)("p",null,"A Fill layer is a layer that applies the value of a MapSource by covering the entire model with the value itself."),(0,n.kt)("h3",{id:"sticker-layers"},"Sticker Layers"),(0,n.kt)("p",null,"A Sticker layer is a layer of properties that represent an image as if it were being stuck to a surface."),(0,n.kt)("h3",{id:"properties-group"},"Properties Group"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Properties group")," is an area that ",(0,n.kt)("strong",{parentName:"p"},"depends on the selected feature, such as a tool or layer"),", and displays properties for the selected feature."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Properties Group",src:a(35001).Z,width:"1365",height:"658"})),(0,n.kt)("h3",{id:"map-source-group"},"Map Source group"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Map Source group")," is a collection of properties for managing map sources, such as setting the resolution of textures, formatting map sources, and adding/deleting map sources."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Map Source Group",src:a(33207).Z,width:"1365",height:"610"})))}d.isMDXComponent=!0},41316:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Interface-8fa33243eb61b0e7b2e71a4c0cf6762b.png"},32431:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers-7340823684b0d4e49b2c054dc0a9d5cb.png"},45041:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Main-a22b47c45a79fbe29f238b45665f71dd.png"},33207:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_MapSource-71bf63ac17adf5afcd047da47116ea7c.png"},28374:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Materials-26ca569594b9789cb4b6e5db1e0b1ba3.png"},84459:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Painting2D_Interface-5eb558c37d5c5e13722ea17402708c86.png"},35001:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Properties-95c348b0f7735c4ad9e6355e79c6747e.png"},17540:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Start-e99f1e23015423c0c949aa45f9bdd764.png"},28659:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_UVUnwrap-83adc48523b4464d3aa4fbc532b77a7d.png"}}]);