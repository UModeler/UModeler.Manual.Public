"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),A=i,g=s["".concat(d,".").concat(A)]||s[A]||c[A]||a;return n?o.createElement(g,r(r({ref:t},m),{},{components:n})):o.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=A;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}A.displayName="MDXCreateElement"},68694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={slug:"/modeling-mode",description:""},r="Modeling Mode",l={unversionedId:"editable-mesh/modeling-mode/index",id:"editable-mesh/modeling-mode/index",title:"Modeling Mode",description:"",source:"@site/docs/editable-mesh/modeling-mode/index.md",sourceDirName:"editable-mesh/modeling-mode",slug:"/modeling-mode",permalink:"/docs/modeling-mode",draft:!1,tags:[],version:"current",frontMatter:{slug:"/modeling-mode",description:""},sidebar:"docs",previous:{title:"Editable Mesh",permalink:"/docs/editable-mesh"},next:{title:"Start modeling mode",permalink:"/docs/modeling-start"}},d={},p=[{value:"<strong>Groups in Modeling Mode</strong>",id:"groups-in-modeling-mode",level:2},{value:"Element groups",id:"element-groups",level:3},{value:"Primitive Shapes Group",id:"primitive-shapes-group",level:3},{value:"Drawing Group",id:"drawing-group",level:3},{value:"Selection Group",id:"selection-group",level:3},{value:"Add group",id:"add-group",level:3},{value:"Remove Group",id:"remove-group",level:3},{value:"Deform Group",id:"deform-group",level:3},{value:"Surface Group",id:"surface-group",level:3},{value:"Misc Groups",id:"misc-groups",level:3},{value:"Multiple Object Group",id:"multiple-object-group",level:3},{value:"Grid / Incremental Snap",id:"grid--incremental-snap",level:2},{value:"Grid Snap - Moving, rotating, and scaling elements",id:"grid-snap---moving-rotating-and-scaling-elements",level:3},{value:"Incremental Snap - Moving, rotating, and scaling elements",id:"incremental-snap---moving-rotating-and-scaling-elements",level:3},{value:"Grid Snap - Creating primitive shapes",id:"grid-snap---creating-primitive-shapes",level:3}],m={toc:p};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modeling-mode"},"Modeling Mode"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Modeling Mode",src:n(31011).Z,width:"634",height:"380"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modeling mode")," is the primary mode for editable meshes, and its primary function is to edit meshes. This mode is broken down into tools, which serve multiple functions, properties, which are detailed settings for the tools, and groups, which are groups of tools."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("h2",{parentName:"admonition",id:"element"},(0,i.kt)("strong",{parentName:"h2"},"Element"),"."),(0,i.kt)("p",{parentName:"admonition"},"In order to use a tool, you must select or use a 3D primitive called an ",(0,i.kt)("strong",{parentName:"p"},"Element"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Modeling Mode",src:n(85085).Z,width:"890",height:"130"})),(0,i.kt)("p",{parentName:"admonition"},"Elements are composed of ",(0,i.kt)("strong",{parentName:"p"},"Vertices, Edges, Faces, and Objects"),"."),(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("strong",{parentName:"p"},"Vertex")," is a vertex of a 3D object, while an ",(0,i.kt)("strong",{parentName:"p"},"Edge")," represents a corner made up of two vertices. A ",(0,i.kt)("strong",{parentName:"p"},"Face")," is a surface filled by connecting three or more edges.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UModelerX")," provides several tools for editing and creating ",(0,i.kt)("strong",{parentName:"p"},"vertices, edges, and faces"),"."),(0,i.kt)("p",null,"Moving, rotating, and resizing each element is the same as in the Unity Editor."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"groups-in-modeling-mode"},(0,i.kt)("strong",{parentName:"h2"},"Groups in Modeling Mode")),(0,i.kt)("h3",{id:"element-groups"},"Element groups"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Element group")," is located at the top of Modeling Mode and is a collection of properties for each element (",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Edge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Face"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,i.kt)("p",null,"Each element has different visible properties."),(0,i.kt)("h3",{id:"primitive-shapes-group"},"Primitive Shapes Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Primitive Shapes Group",src:n(49460).Z,width:"947",height:"365"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Primitive Shapes group")," is a collection of tools that allow you to create meshes of ",(0,i.kt)("strong",{parentName:"p"},"primitive shapes"),"."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Primitive Shapes group")," page."),(0,i.kt)("h3",{id:"drawing-group"},"Drawing Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drawing Group",src:n(67675).Z,width:"820",height:"219"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Drawing group")," is a collection of tools for creating ",(0,i.kt)("strong",{parentName:"p"},"planar shapes"),"."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Drawing group")," page."),(0,i.kt)("h3",{id:"selection-group"},"Selection Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selection Group",src:n(88248).Z,width:"890",height:"377"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Selection group")," is a collection of tools related to the selection of elements (",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Edge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Face"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Selection Group")," page."),(0,i.kt)("h3",{id:"add-group"},"Add group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Group",src:n(43218).Z,width:"988",height:"369"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Add group")," is a collection of tools that, when executed, will add each element (Vertex, Edge, Face)."),(0,i.kt)("p",null,"It mainly contains tools that either add selected elements or add elements defined in the tool."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Add Group")," page."),(0,i.kt)("h3",{id:"remove-group"},"Remove Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Group",src:n(75261).Z,width:"934",height:"369"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Remove group")," is a collection of tools that, when executed, ",(0,i.kt)("strong",{parentName:"p"},"remove each element (Vertex, Edge, Face)"),"."),(0,i.kt)("p",null,"It usually contains tools that either ",(0,i.kt)("strong",{parentName:"p"},"delete selected elements")," or ",(0,i.kt)("strong",{parentName:"p"},"combine elements by the tool"),"."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Remove group")," page."),(0,i.kt)("h3",{id:"deform-group"},"Deform Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deform Group",src:n(49475).Z,width:"1010",height:"219"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Deform group")," is a collection of brush-like tools that apply deformations to surfaces."),(0,i.kt)("p",null,"For more information, see the Deform group page."),(0,i.kt)("h3",{id:"surface-group"},"Surface Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Surface Group",src:n(45975).Z,width:"916",height:"221"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Surface group")," is a collection of tools for surfaces."),(0,i.kt)("p",null,"It mainly contains vertex colors, material settings, and tools that can be used with the UV Editor."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Surface group")," page."),(0,i.kt)("h3",{id:"misc-groups"},"Misc Groups"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Misc Group",src:n(91740).Z,width:"852",height:"223"})),(0,i.kt)("p",null,"The Misc group is a collection of functional tools that do not belong in any other group."),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("strong",{parentName:"p"},"Misc Groups")," page."),(0,i.kt)("h3",{id:"multiple-object-group"},"Multiple Object Group"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Multiple Object Group",src:n(72484).Z,width:"768",height:"215"})),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Multiple Object group")," is a collection of tools that can be used with multiple UModeler X objects selected."),(0,i.kt)("p",null,"For more information, see the Multiple Object Group page."),(0,i.kt)("h2",{id:"grid--incremental-snap"},"Grid / Incremental Snap"),(0,i.kt)("p",null,"Unity's Grid/Incremental snap also applies to the Editable Mesh."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Grid snap")," operates according to the size of Unity's grid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Incremental snap")," operates while pressing the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl")," key on Windows and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Command")," key on MacOS.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Grid/Incremental Snap",src:n(65312).Z,width:"1232",height:"148"})),(0,i.kt)("p",null,"For more details, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/GridSnapping.html"},"the Unity manual on Grid snapping"),"."),(0,i.kt)("p",null,"Below are examples showing how Grid/Incremental snap is applied."),(0,i.kt)("h3",{id:"grid-snap---moving-rotating-and-scaling-elements"},"Grid Snap - Moving, rotating, and scaling elements"),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/p0-DJz-t19Q?si=h0wAXS9AXaPM7Adc",frameborder:"0",allowfullscreen:""})),(0,i.kt)("h3",{id:"incremental-snap---moving-rotating-and-scaling-elements"},"Incremental Snap - Moving, rotating, and scaling elements"),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/u_idZ6Oq6sk?si=Cnp1Jtd73f-v6ZIW",frameborder:"0",allowfullscreen:""})),(0,i.kt)("h3",{id:"grid-snap---creating-primitive-shapes"},"Grid Snap - Creating primitive shapes"),(0,i.kt)("p",null,"Primitive shape Grid/Incremental snap has been applied since UModeler X version 0.19.0."),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/2uCczAEbd2w?si=8kofaKvfp0cP2q8M",frameborder:"0",allowfullscreen:""})))}s.isMDXComponent=!0},31011:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/EditableMesh_ModelingMode-ab1fcb732fc505459e84539f4a38747c.png"},65312:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Grid.Incremental.Snap-8897d5cf50a75560018e6a5923361df3.png"},43218:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Add-6ce102e4f76cea9fd7b4175eceb919b8.png"},49475:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Deform-b8cf6509a92d26131417eb868ec7bd3b.png"},67675:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Drawing-640fc59bf08ba75b86ee8225f9cb1218.png"},91740:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Misc-5a93fbbd8f6074d618ed9e9c9f658af1.png"},72484:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_MultipleObject-60ca2e0786e64ae4c6d925b82df113e5.png"},49460:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_PrimitiveShapes-e97e384e2ef6570b48bc47ba1acb1aad.png"},75261:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Remove-bf548571fe7f44be1b8e70a6c49afba1.png"},88248:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Selection-648436c66f7183d90561544dc9ea358b.png"},45975:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ModelingMode_Icon_Surface-f25105a8791d2e5e01fbde888a092e9f.png"},85085:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3oAAACCCAYAAAAQerqRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOc2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wOS0zMFQwMzo1MTo0MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDktMzBUMDM6NTE6NDArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1ZjNhMDkxLTZjNjYtYjQ0MS1iNTc0LWQ3OWRhN2I4YmViYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZjYjU0MjA5LTc0MDEtYzI0NS04MzYxLTIzNmEzODQ1ZjFkMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjdlN2JlZTg2LTljNmMtYjM0My1hZTdlLWViYzQ5NGVjNDNhMSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSI4OTAiIHRpZmY6SW1hZ2VMZW5ndGg9IjEzMCIgdGlmZjpDb21wcmVzc2lvbj0iMSIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpQbGFuYXJDb25maWd1cmF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249Ijg5MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEzMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2U3YmVlODYtOWM2Yy1iMzQzLWFlN2UtZWJjNDk0ZWM0M2ExIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDExOjAxOjM2KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3N2E3MGI1LTgxNmUtNzI0Ni1iMmZmLWRmNmNiNzVmOGFhNiIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0yOFQxMjozMTowOCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTRmZTY2OC03NzUyLWE1NDctYThmYS01YjFkMGQ3MDlmOTgiIHN0RXZ0OndoZW49IjIwMjMtMDItMjhUMTI6NDY6NTUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBpbWFnZS90aWZmIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvdGlmZiIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNkZDc0NzUtNDJlYS1jMzRkLWFkMGUtMzRmYmIwYjBmYjIyIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDEyOjQ2OjU1KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFkMDA4MTlhLTNhOTMtMTI0YS05YzM2LTQzY2I4NzgxZWM3NCIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wM1QyMTo1MToyMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMTJhYWM3Zi04MGJhLWJhNDItOThkMS1hODA0OGFjNzY4MzEiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDNUMjE6NTE6MjIrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDVmM2EwOTEtNmM2Ni1iNDQxLWI1NzQtZDc5ZGE3YjhiZWJhIiBzdEV2dDp3aGVuPSIyMDIzLTA5LTMwVDAzOjUxOjQwKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFkMDA4MTlhLTNhOTMtMTI0YS05YzM2LTQzY2I4NzgxZWM3NCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MTc1OTg0LTVmNDEtNmY0Yy05MGViLTE5YWJiNTEyNWU3ZiIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjdlN2JlZTg2LTljNmMtYjM0My1hZTdlLWViYzQ5NGVjNDNhMSIvPiA8dGlmZjpCaXRzUGVyU2FtcGxlPiA8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"}}]);