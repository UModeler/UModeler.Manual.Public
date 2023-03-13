"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4408],{3905:(A,i,e)=>{e.d(i,{Zo:()=>a,kt:()=>M});var t=e(67294);function n(A,i,e){return i in A?Object.defineProperty(A,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[i]=e,A}function m(A,i){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(A,i).enumerable}))),e.push.apply(e,t)}return e}function l(A){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?m(Object(e),!0).forEach((function(i){n(A,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(i){Object.defineProperty(A,i,Object.getOwnPropertyDescriptor(e,i))}))}return A}function d(A,i){if(null==A)return{};var e,t,n=function(A,i){if(null==A)return{};var e,t,n={},m=Object.keys(A);for(t=0;t<m.length;t++)e=m[t],i.indexOf(e)>=0||(n[e]=A[e]);return n}(A,i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(A);for(t=0;t<m.length;t++)e=m[t],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(n[e]=A[e])}return n}var o=t.createContext({}),I=function(A){var i=t.useContext(o),e=i;return A&&(e="function"==typeof A?A(i):l(l({},i),A)),e},a=function(A){var i=I(A.components);return t.createElement(o.Provider,{value:i},A.children)},c="mdxType",Z={inlineCode:"code",wrapper:function(A){var i=A.children;return t.createElement(t.Fragment,{},i)}},b=t.forwardRef((function(A,i){var e=A.components,n=A.mdxType,m=A.originalType,o=A.parentName,a=d(A,["components","mdxType","originalType","parentName"]),c=I(e),b=n,M=c["".concat(o,".").concat(b)]||c[b]||Z[b]||m;return e?t.createElement(M,l(l({ref:i},a),{},{components:e})):t.createElement(M,l({ref:i},a))}));function M(A,i){var e=arguments,n=i&&i.mdxType;if("string"==typeof A||n){var m=e.length,l=new Array(m);l[0]=b;var d={};for(var o in i)hasOwnProperty.call(i,o)&&(d[o]=i[o]);d.originalType=A,d[c]="string"==typeof A?A:n,l[1]=d;for(var I=2;I<m;I++)l[I]=e[I];return t.createElement.apply(null,l)}return t.createElement.apply(null,e)}b.displayName="MDXCreateElement"},52991:(A,i,e)=>{e.d(i,{Z:()=>Y});var t=e(67294),n=e(86010),m=e(53438),l=e(39960),d=e(13919),o=e(95999);const I="cardContainer_fWXF",a="cardTitle_rnsV",c="cardDescription_PWke";function Z(A){let{href:i,children:e}=A;return t.createElement(l.Z,{href:i,className:(0,n.Z)("card padding--lg",I)},e)}function b(A){let{href:i,icon:e,title:m,description:l}=A;return t.createElement(Z,{href:i},t.createElement("h2",{className:(0,n.Z)("text--truncate",a),title:m},e," ",m),l&&t.createElement("p",{className:(0,n.Z)("text--truncate",c),title:l},l))}function M(A){let{item:i}=A;const e=(0,m.Wl)(i);return e?t.createElement(b,{href:e,icon:"\ud83d\uddc3\ufe0f",title:i.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i.items.length})}):null}function N(A){let{item:i}=A;const e=(0,d.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,m.xz)(i.docId??void 0);return t.createElement(b,{href:i.href,icon:e,title:i.label,description:n?.description})}function g(A){let{item:i}=A;switch(i.type){case"link":return t.createElement(N,{item:i});case"category":return t.createElement(M,{item:i});default:throw new Error(`unknown item type ${JSON.stringify(i)}`)}}function G(A){let{className:i}=A;const e=(0,m.jA)();return t.createElement(Y,{items:e.items,className:i})}function Y(A){const{items:i,className:e}=A;if(!i)return t.createElement(G,A);const l=(0,m.MN)(i);return t.createElement("section",{className:(0,n.Z)("row",e)},l.map(((A,i)=>t.createElement("article",{key:i,className:"col col--6 margin-bottom--lg"},t.createElement(g,{item:A})))))}},50933:(A,i,e)=>{e.r(i),e.d(i,{assets:()=>I,contentTitle:()=>d,default:()=>Z,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=e(87462),n=(e(67294),e(3905)),m=e(52991);const l={sidebar_position:2,slug:"/modifier"},d="Modifier",o={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/index",id:"editable-mesh/modeling-mode/modeling-mode-modifier/index",title:"Modifier",description:"A Modifier System can transform the original model in a non-destructive way. This is a system that allows for efficient modeling because the original model can be preserved while allowing for modifications to be made to the model.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-modifier/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modifier",permalink:"/docs/modifier",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/modifier"},sidebar:"docs",previous:{title:"Modeling Mode",permalink:"/docs/modeling-mode"},next:{title:"Bend Modifier",permalink:"/docs/modeling/bend-modifier"}},I={},a=[{value:"<strong>Interface</strong>",id:"interface",level:2},{value:"Modifier Stack",id:"modifier-stack",level:2},{value:"Renaming Modifiers",id:"renaming-modifiers",level:3},{value:"Disabling Modifiers",id:"disabling-modifiers",level:3},{value:"Change Modifier Position",id:"change-modifier-position",level:3},{value:"Combine Modifiers",id:"combine-modifiers",level:2},{value:"Add a modifier",id:"add-a-modifier",level:2},{value:"Delete Modifier",id:"delete-modifier",level:2},{value:"<strong>Modifier type</strong>",id:"modifier-type",level:2}],c={toc:a};function Z(A){let{components:i,...l}=A;return(0,n.kt)("wrapper",(0,t.Z)({},c,l,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modifier"},"Modifier"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Modifier System")," can transform the original model in a non-destructive way. This is a system that allows for efficient modeling because the original model can be ",(0,n.kt)("strong",{parentName:"p"},"preserved")," while allowing for modifications to be made to the model."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"interface"},(0,n.kt)("strong",{parentName:"h2"},"Interface")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Interface",src:e(41642).Z,width:"1068",height:"640"})),(0,n.kt)("h2",{id:"modifier-stack"},"Modifier Stack"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"modifier")," can accumulate the results of edits made by multiple modifiers in a cumulative history called a ",(0,n.kt)("strong",{parentName:"p"},"modifier stack"),", and it is also possible to turn specific modifiers on and off."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"renaming-modifiers"},"Renaming Modifiers"),(0,n.kt)("p",null,"The name of a Modifier defaults to its function, and can be changed as needed."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Renaming",src:e(48980).Z,width:"1430",height:"314"})),(0,n.kt)("p",null,"To rename a Modifier, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Double-Click"))," on the name portion of the Modifier and press ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Enter")),", or ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Click"))," on any area except the text input area to complete the renaming."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you rename the purpose for which you added the modifier, you can see the purpose as you work without having to check the modifier properties.\n",(0,n.kt)("img",{alt:"Modifier Renaming Name1",src:e(48980).Z,width:"1430",height:"314"}),"\n",(0,n.kt)("img",{alt:"Modifier Renaming Name2",src:e(30133).Z,width:"1430",height:"314"}))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"disabling-modifiers"},"Disabling Modifiers"),(0,n.kt)("p",null,"By default, Modifiers are ",(0,n.kt)("strong",{parentName:"p"},"enabled upon creation"),". If you want to ",(0,n.kt)("strong",{parentName:"p"},"deactivate")," them, you can do so by ",(0,n.kt)("strong",{parentName:"p"},"unchecking the box next to the modifier name"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Disable",src:e(21317).Z,width:"1560",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"change-modifier-position"},"Change Modifier Position"),(0,n.kt)("p",null,"You can change the position of a Modifier by ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Click-Drag"))," it to the desired location."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Modifiers cannot be moved below the ",(0,n.kt)("strong",{parentName:"p"},"Source Mesh"),", nor can they change the position of the ",(0,n.kt)("strong",{parentName:"p"},"Source Mesh"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"combine-modifiers"},"Combine Modifiers"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Combine Button",src:e(82108).Z,width:"621",height:"174"})),(0,n.kt)("p",null,"The Combine Modifiers button reflects the results of the currently applied Modifiers on the original mesh. When combined, the modifiers below will be combined based on the selected modifier."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Combine",src:e(47766).Z,width:"1484",height:"640"})),(0,n.kt)("p",null,"When the modifiers are combined, they are reflected in the original mesh and the modifiers are removed."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This feature is difficult to reverse, and may result in less efficient work.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"add-a-modifier"},"Add a modifier"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Add Button",src:e(76945).Z,width:"621",height:"174"})),(0,n.kt)("p",null,"The Add Modifier button allows you to add a modifier of your choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Add",src:e(63333).Z,width:"792",height:"640"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"delete-modifier"},"Delete Modifier"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Delete Button",src:e(50402).Z,width:"621",height:"174"})),(0,n.kt)("p",null,"The Delete Modifier button allows you to delete the selected Modifier."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modifier Delete",src:e(51991).Z,width:"1430",height:"284"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want to deactivate rather than delete, you can uncheck the box."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Modifier Disable",src:e(21317).Z,width:"1560",height:"640"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"modifier-type"},(0,n.kt)("strong",{parentName:"h2"},"Modifier type")),(0,n.kt)(m.Z,{mdxType:"DocCardList"}))}Z.isMDXComponent=!0},41642:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem-732d889fef36af84adce7a183f34a56b.png"},63333:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem_Add-b21e28383f6d6c967841541fb63c8dcf.png"},76945:(A,i,e)=>{e.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1MzowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTM6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMDU1NTdiLWU5MWItMWQ0OC1hNDMzLTJjMjc0M2VkZWRhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNjMDVmN2E5LTg2NjAtNjU0Mi04NTJiLThiOGE2ODM0MzkzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MToxNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzhlNDYzNC1kOTY1LWZkNDYtOWQyMi00Y2NhZGI0MzExMDQiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTE6MTYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWUwNTU1N2ItZTkxYi0xZDQ4LWE0MzMtMmMyNzQzZWRlZGFjIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUzOjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZmZhMjM4LWY1ZmYtNDY0Ny04Y2E3LTgzMmQ3ZjNjYWVjYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjI5ZTU2YzYtMjBiMi0zYjQ1LWI2YzgtNjAzMDU5Mzg3NzM5PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzhlNTZmNC0yNDY5LTU5NGEtOTU4MC1jODEyMjNmYzI0MTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmI1Zjg2MWEtMzg2NS0yMTRjLWEyMWMtMTViMzM0ZDM4NjljPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlYTI3YjIzLTY0MzItMWI0Ni1iNTkzLWIxMWJjNzNiNjc5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlm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"},47766:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem_Combine-d11183b5dc5357668b59b1f626b8be94.png"},82108:(A,i,e)=>{e.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1Mjo1MiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTI6NTIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0Zjg3M2U5LWQ2NTUtZjc0ZC1hZjk0LTJlMGJjMzU1ZmYzNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjhlZjYxNzQxLWJkYzQtODE0Zi1hNjE4LTAyYjQwNDY1NjNkOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZmM2JkM2U4LTQzNGEtYjU0MC1iMjEyLTkyNmUyMjIxZmRlNSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MDo1NSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZTc0OTQxNy05N2YxLWU0NDMtYjM3OC1lOTM1NjA1NGI1YmYiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTA6NTUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTRmODczZTktZDY1NS1mNzRkLWFmOTQtMmUwYmMzNTVmZjM2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUyOjUyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZmM2JkM2U4LTQzNGEtYjU0MC1iMjEyLTkyNmUyMjIxZmRlNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjI5ZTU2YzYtMjBiMi0zYjQ1LWI2YzgtNjAzMDU5Mzg3NzM5PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzhlNTZmNC0yNDY5LTU5NGEtOTU4MC1jODEyMjNmYzI0MTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmI1Zjg2MWEtMzg2NS0yMTRjLWEyMWMtMTViMzM0ZDM4NjljPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlYTI3YjIzLTY0MzItMWI0Ni1iNTkzLWIxMWJjNzNiNjc5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDZjZmQ0My0yMTQ0LWZmNDItYmU3NC0wNmEwOTkxYTM4NGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIxODg5NWRlLTVmODAtNjg0MC1iNDI3LWRlNGEyYzExNjdkZDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlm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"},51991:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem_Delete-f043d8aa641ffc804d84f57e20d6a662.png"},50402:(A,i,e)=>{e.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAACuCAYAAABk6DqNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOOWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0wMlQyMTo0MDozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0wOVQxNTo1Mjo0MyswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMDlUMTU6NTI6NDMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwNjE2NzUzLWY0NjMtMTU0Yi1iNDNjLWQwMzFmYmY3YTU4ZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYyOWU1NmM2LTIwYjItM2I0NS1iNmM4LTYwMzA1OTM4NzczOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpJbWFnZVdpZHRoPSIxOTIwIiB0aWZmOkltYWdlTGVuZ3RoPSI2NDAiIHRpZmY6Q29tcHJlc3Npb249IjEiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6UGxhbmFyQ29uZmlndXJhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxOTIwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjQwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmVhMjcyMi1hYWU2LTI4NDctOWNiMi02OTYwNzQ2MzlkNDgiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDJUMjE6NDA6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjYjQ0NWUtNzMxNy0zOTQ3LThhZmEtMGQyMDk3NmZiNDQ2IiBzdEV2dDp3aGVuPSIyMDIzLTAzLTAzVDExOjQ1OjA5KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyNzU0OTQ4LTQxY2QtNzY0Yi04OWRjLTE2ZmVhZDJjZWRkYSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0wOVQxNTo1MTozOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzA3ZGM3Yy1lNzc2LWJhNGQtYTQ0NS1kNGMyYTdlMjAxMWEiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDlUMTU6NTE6MzkrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDA2MTY3NTMtZjQ2My0xNTRiLWI0M2MtZDAzMWZiZjdhNThlIiBzdEV2dDp3aGVuPSIyMDIzLTAzLTA5VDE1OjUyOjQzKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyNzU0OTQ4LTQxY2QtNzY0Yi04OWRjLTE2ZmVhZDJjZWRkYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0MDJkY2M1LTQ4MzctY2Q0Zi1iMDhjLWU4M2VhNDhjYzNlYSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE2ZWEyNzIyLWFhZTYtMjg0Ny05Y2IyLTY5NjA3NDYzOWQ0OCIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NzQwMmRjYzUtNDgzNy1jZDRmLWIwOGMtZTgzZWE0OGNjM2VhPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgzOGU1NmY0LTI0NjktNTk0YS05NTgwLWM4MTIyM2ZjMjQxNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYjVmODYxYS0zODY1LTIxNGMtYTIxYy0xNWIzMzRkMzg2OWM8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmVhMjdiMjMtNjQzMi0xYjQ2LWI1OTMtYjExYmM3M2I2NzkzPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRkNmNmZDQzLTIxNDQtZmY0Mi1iZTc0LTA2YTA5OTFhMzg0ZjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MjE4ODk1ZGUtNWY4MC02ODQwLWI0MjctZGU0YTJjMTE2N2RkPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx0aWZmOkJpdHNQZXJTYW1wbGU+IDxyZGY6U2VxPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwv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"},21317:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem_Disable-140a4f804feaac416422b8ae73c06384.png"},48980:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem_Name1-493e92f4ba53e42ccb34fb32b2415ad3.png"},30133:(A,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/Modeling_Modifier_ModifierSystem_Name2-ad78113659f0b81551a489866e9b9a83.png"}}]);