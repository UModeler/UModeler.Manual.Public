"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2193],{3905:(A,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>g});var i=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function l(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,i)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,i,n=function(A,e){if(null==A)return{};var t,i,n={},l=Object.keys(A);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(A);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var a=i.createContext({}),c=function(A){var e=i.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},d=function(A){var e=c(A.components);return i.createElement(a.Provider,{value:e},A.children)},m="mdxType",p={inlineCode:"code",wrapper:function(A){var e=A.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(A,e){var t=A.components,n=A.mdxType,l=A.originalType,a=A.parentName,d=r(A,["components","mdxType","originalType","parentName"]),m=c(t),s=n,g=m["".concat(a,".").concat(s)]||m[s]||p[s]||l;return t?i.createElement(g,o(o({ref:e},d),{},{components:t})):i.createElement(g,o({ref:e},d))}));function g(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var l=t.length,o=new Array(l);o[0]=s;var r={};for(var a in e)hasOwnProperty.call(e,a)&&(r[a]=e[a]);r.originalType=A,r[m]="string"==typeof A?A:n,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},36978:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(87462),n=(t(67294),t(3905));const l={slug:"/modeling/disk-tool",sidebar_position:3,description:""},o="Disk Tool",r={unversionedId:"editable-mesh/modeling-mode/modeling-mode-drawing/disk-tool",id:"editable-mesh/modeling-mode/modeling-mode-drawing/disk-tool",title:"Disk Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-drawing/disk-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-drawing",slug:"/modeling/disk-tool",permalink:"/docs/modeling/disk-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/modeling/disk-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Rectangle Tool",permalink:"/docs/modeling/rectangle-tool"},next:{title:"Selection Group",permalink:"/docs/modeling-selection"}},a={},c=[{value:"<strong>How to use</strong>",id:"how-to-use",level:2},{value:"Click and drag to create, edit",id:"click-and-drag-to-create-edit",level:3},{value:"Create, Edit via One Click Build and Properties",id:"create-edit-via-one-click-build-and-properties",level:3},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Segments",id:"segments",level:3},{value:"Radius",id:"radius",level:3},{value:"<strong>Examples of use</strong>",id:"examples-of-use",level:2}],d={toc:c};function m(A){let{components:e,...l}=A;return(0,n.kt)("wrapper",(0,i.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"disk-tool"},"Disk Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Disk Tool",src:t(49694).Z,width:"1294",height:"522"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Disk tool")," is a tool for creating circular planar meshes."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to use")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Disk Tool")," can create circular planes in ",(0,n.kt)("strong",{parentName:"p"},"two ways"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"create, edit via click and drag"),(0,n.kt)("li",{parentName:"ol"},"creation and editing using One Click Build")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"click-and-drag-to-create-edit"},"Click and drag to create, edit"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Disk Tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Click and drag the mouse on the scene to create a plane of the desired size.\n",(0,n.kt)("img",{alt:"Disk Tool Drag 1",src:t(12216).Z,width:"1064",height:"452"})),(0,n.kt)("li",{parentName:"ol"},"Once the plane is the desired size, click to finish creating the mesh."),(0,n.kt)("li",{parentName:"ol"},"Adjust the properties of the Disk tool and select the element, or press another tool to finish.\n",(0,n.kt)("img",{alt:"Disk Tool Properties",src:t(2517).Z,width:"974",height:"331"}),(0,n.kt)("img",{alt:"Disk Tool Result",src:t(76290).Z,width:"860",height:"386"}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can continue fine-tuning with the Disk tool's properties until you select an element or press another tool to finalize.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"create-edit-via-one-click-build-and-properties"},"Create, Edit via One Click Build and Properties"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the Disk tool."),(0,n.kt)("li",{parentName:"ol"},"Enter the desired values in the Disk tool's properties.\n",(0,n.kt)("img",{alt:"Disk Tool Properties",src:t(2517).Z,width:"974",height:"331"})),(0,n.kt)("li",{parentName:"ol"},"Press the One Click Build button to add a shape to the scene.\n",(0,n.kt)("img",{alt:"Disk Tool One Click Build",src:t(93628).Z,width:"898",height:"151"})),(0,n.kt)("li",{parentName:"ol"},"Make any additional adjustments to the Disk tool's properties and select the element, or use another tool to finish.\n",(0,n.kt)("img",{alt:"Disk Tool Result",src:t(76290).Z,width:"860",height:"386"}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can continue to tweak the properties of the Disk tool until you select an element or press another tool to finalize.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Disk Tool Properties",src:t(2517).Z,width:"974",height:"331"})),(0,n.kt)("h3",{id:"segments"},"Segments"),(0,n.kt)("p",null,"This property sets the number of ",(0,n.kt)("strong",{parentName:"p"},"perimeter segments")," of the generated shape."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Disk Tool Segments",src:t(16829).Z,width:"1308",height:"572"})),(0,n.kt)("h3",{id:"radius"},"Radius"),(0,n.kt)("p",null,"Property that sets the ",(0,n.kt)("strong",{parentName:"p"},"radius size")," of the generated shape, in meters."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Disk Tool Radius",src:t(50115).Z,width:"1308",height:"572"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples-of-use"},(0,n.kt)("strong",{parentName:"h2"},"Examples of use")))}m.isMDXComponent=!0},49694:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/Modeling_Drawing_Disk-7fe6a3b72dde859ac09096839223fd81.png"},12216:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/Modeling_Drawing_Disk_Drag-e26c22bd98d91abad3ce820521698511.png"},2517:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/Modeling_Drawing_Disk_Properties-82cd250588180ef58588a1213e5dd6eb.png"},50115:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/Modeling_Drawing_Disk_Radius-20a5c648aca49e37927406109610bc2c.png"},76290:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/Modeling_Drawing_Disk_Result-75c85e53d73f34af1ef1470e923c5faf.png"},16829:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/Modeling_Drawing_Disk_Segments-dfab8c0f4281ca57dbc4897f9ece9eef.png"},93628:(A,e,t)=>{t.d(e,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4IAAACXCAYAAABA+uXUAAAACXBIWXMAAAsTAAALEwEAmpwYAAANY2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOFQxOTo0NjoxNCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDhUMTk6NDY6MTQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZhZDNiYmIyLTZhMzQtMWY0NC1hNzQ4LTg0OGNkNDFmMDgxMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmUzY2M0ZTI5LTM0ODYtYjc0MS1iMDY0LTFmMjcwMjU0N2M0MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NjgwOTY5LTQyOGItODI0MS04ZDVkLTkyMWMzNGMzZWFhZSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOFQxOTo0NTo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNGE1NjA4ZS0yZmM3LTdiNGUtYjk5Ny1hMmFhZGY5NjYyZGEiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDhUMTk6NDU6NTQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmFkM2JiYjItNmEzNC0xZjQ0LWE3NDgtODQ4Y2Q0MWYwODEyIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA4VDE5OjQ2OjE0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NjgwOTY5LTQyOGItODI0MS04ZDVkLTkyMWMzNGMzZWFhZSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NzQwMmRjYzUtNDgzNy1jZDRmLWIwOGMtZTgzZWE0OGNjM2VhPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJiNWY4NjFhLTM4NjUtMjE0Yy1hMjFjLTE1YjMzNGQzODY5YzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cOpWCwAAFgZJREFUeJzt3WtwU+edx/Gf5LslI9kGY3wBbAyYGkxJA2ETTykGhhRoCMQJ05K0nWY67Wy3s519sW2z77Pp7oudnW6XTl91OrMlJaEk3XIJIQ2kaWlgTcxtGrCNAcfGYBxbFiZClq19YY5qBV9kS/bBer6fGc+Eo6Nz/o8UkvPzc3OEw2EBAAAAAMzhtLsAAAAAAMD0IggCAAAAgGEIggAAAABgGIIgAAAAABiGIAgAAAAAhiEIAgAAAIBhCIIAAAAAYBiCIAAAAAAYhiAIAAAAAIYhCAIAAACAYQiCAAAAAGAYgiAAAAAAGIYgCAAAAACGIQgCAAAAgGEIggAAAABgGIIgAAAAABiGIAgAAAAAhiEIAgAAAIBhCIIAAAAAYBiCIAAAAAAYhiAIAAAAAIYhCAIAAACAYQiCAAAAAGAYgiAAAAAAGIYgCAAAAACGIQgCAAAAgGEIggAAAABgGIIgAAAAABiGIAgAAAAAhiEIAgAAAIBhCIIAAAAAYBiCIAAAAAAYhiAIAAAAAIYhCAIAAACAYQiCAAAAAGAYgiAAAAAAGCbV7gJMtmHDhpEOp0t6+v7P30kqun8MAAAAmCnuSPpYUr2kN+//BD970jvvvDPNZcFCEHy47JD0b5Iq7C4EAAAAiINbUuX9n92SWiX9QNJvbawJwzA09OGQIuknGvqLQQgEAABAsimV9LqkVyQ5bK4FIgg+LF6W9M92FwEAAABMIYekH2ro2Rc2Iwjar06EQAAAAJjjhxpaDwM2IgjaK13Sf9hdBAAAADCNHJL+UyyIaCuCoL2elVRidxEAAADANJsvaafdRZiMIGivp+0uAAAAALDJ03YXYDKCoL1W210AAAAAYJNH7S7AZARBexXaXQAAAABgk3l2F2AygqC9MuwuAAAAALBJtt0FmIwgCAAAAACGIQgCAAAAgGEIggAAAABgGIIgAAAAABiGIAgAAAAAhiEIAgAAAIBhUu0uAIkXCoUUCAQUCoU0ODhodzkAAACYgZxOp1JTU5WZmanUVGJDsuEbTTJ3795VIBCwuwwAAADMcIODgwoGgwoGg8rMzFR2Ntv+JROCYBIZHgLz8/Pl8XiUnp5uc1UAAACYiYLBoHw+n7q6uiLPmITB5MEcwSRhDQeVpNLSUs2ZM4cQCAAAgElLT0/XnDlzVFpaKkmRqUdIDgTBJDG8J9DlctlcDQAAAJKFy+VSfn6+JDEFKYkQBJOE9dsZj8djcyUAAABINtYzJj2CyYMgmCSs1UEZDgoAAIBEs54xWZE+eRAEAQAAAMAwBEEAAAAAMAxBEAAAAAAMQxAEAAAAAMMQBAEAAADAMKl2FwAAmLzi4mItWrRIubm5cjqd8vv9am1tVVNTkwYGBuwub8KGt0eS/H6/rl+/rpaWllHbk5WVpZUrV+rTTz/V2bNnI8eLiopUV1cnv9+vX//617p3715ctY12n3isWrVKGRkZDxwPhUK6c+eOWltb1dfXl5B7WUb7XOJpX05OjqqqquT3+3Xx4sWE1gsAmBoEQQCYgTwej7Zv366SkpIHXluzZo16e3t18OBBtbS02FDdxI3VnrVr16q3t1dHjx7V5cuXH3g9OztbtbW16u7ujgowFRUVcrvdcrvdKigoUGtra1w1jnafeNTU1CgnJ2fU1wcHB3X+/Hm9/fbbCgaDCbnnaJ9LPO3zer2qra1Ve3s7QRAAZgiCIADMMIWFhdq1a5dcLpfu3bunc+fOqaOjQ6FQSHl5eaqurlZubq527dqlI0eOqKGhwe6SxzRae4LBoPLz81VVVaU5c+aorq5Ohw8f1ocffhjTdevr6+X1etXb26uPP/54ilsRn1OnTqmnpyfy59TU1EjbV65cKZfLpX379iXkXjPpcwEATB2CIADMIGlpadq5c6dcLpdaWlp04MABBQKBqHP+/Oc/a926dXr88cf15JNPqqOjQx0dHTZVPLZY2nPy5EmtXbtW69ev1+bNm9XW1qZbt26Ne+2+vj797ne/m6rSE+rSpUsj9liePHlS3/rWt1RRUaHS0tK4ezWlmfW5AACmDovFAMAMUlNTI6/Xq87OTu3bt++B0CRJ4XBYx48fV319vZxOp7Zs2RL1usPhkNvtVlZWVuSY2+1WSUmJCgsL5XTG9r+GtLQ0FRQUqKSkRC6Xa0rbc/LkSZ05c0ZOp1Nf/OIXY7r2SO0cqx3FxcVyu92TaockOZ3OyJDLlJSUSV9nuE8++UTnzp2TJM2fPz/qtVjal52dLbfbLYfDMaH3jSU7O1vFxcUqLCxMWDsBANOPHkEAmCEcDodWrFghSTp69Oi4i8G8++67qqqqUmFhoQoKCiK9aHl5efrOd76j9vZ2vfrqq9q2bZuWLFkSeV8gENCJEydUX18/4nWzsrK0fv16rVixIioIXLt2TceOHdPNmzenpD0nT57UI488ovLycqWlpam/v3/M8612dnd3a8+ePTG3o7W1VceOHdONGzdiaoc0NJTzueee08KFC9XU1KT9+/fH/N7xWOE4LS0t6vh47ZOkb3/723K5XPrpT38qv98f8/tGkpeXp40bN6qioiKqtqNHj8rn8020WQAAmxEEAWCGKCkpkdvtVm9vr65fvz7u+cFgUJcvX1Z1dbWWLVv2wHBKh8OhZ555RnPnztVHH32kQCCg0tJS5efna/PmzQqFQg8sGuJ2u/X8888rLy9Pd+7c0ZUrV9Tf36+SkhItWLBA3/jGN7R3796YhjBOtD0+n08vv/zyuOfFIicnR7t3745qx8DAgEpKSlRaWqoXXnhBv/nNb3Tt2rVxr5WSkqK6ujotXLhQzc3N2r9/f8JWbHU4HCovL5ck3b59OyHXnIyCggLt3r1bWVlZ6u3t1dWrVxUKhTR//nw99dRTev/9922rDQAwOQRBAJgh8vPzJQ31WIXD4Zjec+3aNVVXV0feO9y8efN048YN/eIXv9CdO3ckKTKUtLq6Wk888cQDQXDLli3Ky8vT+fPndejQoajAs3btWtXW1mr79u3as2fPuGFoMu1JFKsdly9f1ptvvhnpXXQ4HJH5lVu3btWePXvGrC0lJUXPPPOMysvL1dzcrNdffz1hITArK0sbN25UUVGROjo69Ne//jUh150oh8OhrVu3KisrS+fOndPhw4cjbXQ4HFq/fr1qampsqQ0AMHkEQQCYIaz5a1Zoi4V17mhz3w4fPhx1vcHBQR07dkzLly+X1+uV2+2OvD537lxVVFTo1q1bOnjwoAYHB6Ou9Ze//EWLFy9WaWmplixZMm5wmUx7EqGwsFCLFi1Sb29vVAiUhuYjnjhxQvPmzZPb7VZ+fv6oPXFOp1M7d+5URUWFWlpa4uoJ/PKXvxy1PUR6erry8vLU39+vEydO6PTp07btCzl//nzNmzdPPp8vKgRKQ5/Xu+++q8rKSnm9Xlvqi0UgEFBTU5MqKiqUmZlpdzkA8FAgCALADGHNERtvbtxw1rmfnV8mDQ0dHWk10UAgIJ/Pp9zcXLlcrkhQq6yslCQ1NDQ8EAItly5dUmlpqRYsWDBuEJxMexJh6dKlkqRz586NeO9wOKy9e/eOeQ2n06kdO3Zo8eLFunr1ql577TWFQqFJ1zR79uwRj2dkZKiyslIdHR1qbm6e9PXjYc0JPH/+/IhhNBwO68yZM6qtrZ3u0mLW1NSkixcvSBJhEADuIwgCwAzR19cnaWjVxlhZq3la7x3peiOxeqeGryCal5cnaehBeu7cuSO+z+PxSNKYm6R/9v4TaU8iWENSJ7IYzHBpaWnavn27li5dqmAwqP3798cVAiXp1VdfVXt7e+TPDodDs2bN0ooVK7R69Wrt2rVLr7/+ui5fvhzXfSbD6ukbawuSrq6uaaomPoRBAPgbgiAAzBBWz1xubm7M77HOTcTwSyuwWYuXjCU9PX3ccybTnkSwtk24d+/epN7vdru1bNkyhUIhpaena926dTp69GhcNfX39z+wdcann36qmzdvqru7W5s3b9amTZvU2Ng47fMprcA01ud19+7d6SonLpcuXdbSpUMr5BIGAZiOIAgAM4S1sub8+fOVkZERU5CxtoWIZfXL8VhB5dChQ+NeL5Yesom2x+l0avXq1XI4HKqvr5/0kFKrHfGEgPfff19NTU164YUX9Oijj6q9vV0XLlyY9PXGcubMGdXU1Mjj8SgvL2/ae99i+bwmu4/kdFu8eDFhEADuY0N5AJgh7ty5o9bWVqWkpOjRRx8d9/ySkhKVlJRoYGAgIUMKu7u7JQ319nV3d4/5Y+1Zl8j2lJWVacOGDXrkkUfimlf4ySefSBpaNXUyenp69N5776m9vV1vvfWWpKFVSEcbLhuvcDgcGUabkZEROW7N0xwtyKSkpCRk2K31vY/1ec2ZMyfu+0wXKwxevHhBTU1ND/TEAoApCIIAMIP86U9/kiTV1NSopKRk1PNcLpe2bdsmSTp9+vSkh0EOZ4XJ6upqORyOEc+pqKhQZWVlVGAZS6ztycrK0qZNmyQNLVYTj8bGRknSihUrRlxEx+FwaNeuXXrxxRdHXMRl+NDMhoYGNTQ0KDU1VXV1dZFhp4mUk5MTmdfY29sbOW6Fw6ysrBHrXL58+ajf00RYi9QsX75cqakPDiRyOp1atWpV3PeZToRBACAIAsCMcuXKFTU0NCglJUVf+9rXtGbNmqj5eA6HQ0uWLNE3v/lN5eXl6fbt23rvvfcScu+2tjZdu3ZNBQUF2rJli1JSUqJenzdvnp566int3LlTRUVFCWtPWVmZvv71r0fa88EHHySkHbNmzdJXvvKVB8LNE088oUWLFikjIyOmYZhvvfWW2tvb5fF49PTTTyckfFkKCwtVV1enlJQUtbS0RM31HL7q67Zt2yLbcTgcDi1btkwbNmwYdXXXibh+/bpu3LihWbNmaevWrVHfu7WP4KxZs+K+z3QjDAIwHXMEAWCGOXLkiMLhsFatWqWNGzdq3bp16u7uVigUUm5ubqRXqr29Pe5tDYYLh8M6ePCgdu/erZUrV2rRokVqbm7WvXv3lJ+fr7KyMjmdTp09e1YtLS1xtycYDEa2sJCkzs5O7d27N+799Kx2PP/886qsrFRxcbGam5s1MDCg0tJSFRQUaGBgQIcOHYppYZaBgQHt379fL774osrKyrRu3TodP358QjXt2LEjql0Oh0OZmZmRUNzT06Pf//73D7zvj3/8o5599lkVFRXpe9/7nrq6upSdnS23263jx49r9erVcc/fG/69V1VVqbS0VC0tLerv79eCBQs0e/ZsHTlyRE8++WRc97EDcwYBmIwgCAAzzODgoA4fPqyrV6/qscceU1FRkQoKCiKv+3w+ffjhhzp16lTCQqClp6dHv/zlL/WlL31JVVVVWrlyZdR9P/jgA9XX10/omuO1p6urS2fPnk3opupWO2pra/W5z31On//85yOvtbe36+2331ZbW1vM1/P7/Tpw4IC++tWv6vHHH1dHR4c++uijmN9v9eZZBgcHFQgE1NnZqUuXLo26OE5jY6MOHDig2tpaeTweFRQU6O7duzp27JhOnTql1atXx1zDWG7duqVf/epX2rRpk8rLyyPf+927d/XGG2/o1q1bCbmPHQiDAEzlmO5lqPE3GzZsSNiHby1+YG34DMAcmZmZ8nq9cjqd8vv9MS3UkghpaWnyer3KyMiQ3+9Xb29vQrY2sNojDS0ok4itL8aSnp6u3NxcpaWlyefzTdvnl2gej0fhcFh+v39Kt5hwuVzyer0aGBhQZ2dnwsL5VLpw4YIuXrygwcHRP5fGxkYtXbpEVVXLCYPAKKxfcFn7yibCO++8k7jx9JgQegQBYIYLBAJjbvY9Vfr7+9XZ2Znw6053e4LBoG7evDlt95sqPp9vWu7T19cXWagmmdAzCMA0BEEAAAARBgGYhSAIAABwH2EQgCkIggAAAMMQBgGYgCAIAADwGYRBAMmODeWThNM59FUGg0GbKwEAIDmw6TzwN9YzpvXMiZmPbzJJpKYOde5O16pxAACYgDAIDLGeMa1nTsx8BMEkYQ1X6erqSsplvQEAsAthEKbr6+tTV1eXJDFEOokQBJNEampq5C9ma2urOjs7GSYKAECCEAZhomAwqM7OTrW2tkoaCoH0CCYPvskkkp2dLWloM+aurq7Ib24AADDZ7du3E3Kd4QvI3L59W7Nnz+ahGMbIzMyMPGsiOfBfrySTnZ2t9PR0BQIBhUIhDQ4O2l0SAABJ47OriRIGkcycTmdk1Bn/nicfvtEklJqaKrfbbXcZAAA8FBK9kNrwMJiVlaXi4mKlp6cn9B4AMNWYIwgAADBBVhi8erVFbW1tzMsHMOMQBAEAACaBMAhgJmNoKAAAwAgaGxsjcwHHc/VqiySprKxsKksCgIQhCAIAAOP19PTI6/VGHVuz5gtauDD2YFdcXJzgqgBg6hAEAQCAsU6fPq3HHlsjh8OhgYHolbZ9Pr9yc2ezGAyApMQcQQAAYCQrBC5cWKZZs9x65ZVXol5/+eV/VXf3bbW1tdlUIQBMHYKgvfx2FwAAgImGh8Di4mLl5s7WT37yctQ5P/rRj+TzDf2vmoVggCnRbXcBJiMI2uuG3QUAAGCaz4bA4cM+6RUEplWH3QWYjCBor3N2FwAAgElGC4Gj9Qp+97vfpVcQmDo8C9uIIGivN+wuAAAAU4zVE2j9s8/n15UrVyLHvV4vvYLA1HnD7gJMRhC012uSPra7CAAATDBaCBzO48nRvn37oo4999xz9AoCiXdd0m/tLsJkBEF7BSX9k91FAACQ7DyenHFDoDU89KWXfqyenp7I8fLycnoFgcT7Rw09C8MmBEH7vSbp3+0uAgCAZGUFvPH2A7Re83hy9POf/zzqteG9ggDi9ooYFmo7guDD4ceS/svuIgAASEbp6ekqKyuLaVP4kRaN6enpeWC4KIBJ+4mkf7G7CEipdhcASdKApO9LOq6h35BU2FoNAACGGr5ozM9+9jP5/X699NKPo4aWApiUVkk/EPMCHxoEwYfLfkn/K+lZSTskfUFSsaQ0O4sCAMA0Hk+Ovv/9f4gEQEnjDi0FEKVfUpuk/9PQMNDXxJzAhwpB8OETlPQ/938AAMAU+cMf/jDaSwWS/l6Senr86unx/7ekWy0tLVEn1dbWTml9ADCVHOFw2O4aAAAAAADTiMViAAAAAMAwBEEAAAAAMAxBEAAAAAAMQxAEAAAAAMMQBAEAAADAMARBAAAAADAMQRAAAAAADEMQBAAAAADDEAQBAAAAwDAEQQAAAAAwDEEQAAAAAAxDEAQAAAAAwxAEAQAAAMAwBEEAAAAAMAxBEAAAAAAMQxAEAAAAAMMQBAEAAADAMARBAAAAADAMQRAAAAAADEMQBAAAAADDEAQBAAAAwDAEQQAAAAAwDEEQAAAAAAxDEAQAAAAAwxAEAQAAAMAwBEEAAAAAMAxBEAAAAAAMQxAEAAAAAMMQBAEAAADAMARBAAAAADAMQRAAAAAADEMQBAAAAADDEAQBAAAAwDAEQQAAAAAwDEEQAAAAAAxDEAQAAAAAw/w/DTOxzGzYXFkAAAAASUVORK5CYII="}}]);