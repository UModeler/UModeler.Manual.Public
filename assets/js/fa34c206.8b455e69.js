"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,u=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?l.createElement(u,i(i({ref:t},m),{},{components:n})):l.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(67294),o=n(86010),a=n(53438),i=n(39960),r=n(13919),s=n(95999);const c="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return l.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",c)},n)}function h(e){let{href:t,icon:n,title:a,description:i}=e;return l.createElement(p,{href:t},l.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:a},n," ",a),i&&l.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function u(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?l.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return l.createElement(h,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return l.createElement(k,{item:t});case"category":return l.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,a.jA)();return l.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return l.createElement(f,e);const i=(0,a.MN)(t);return l.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>l.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},l.createElement(g,{item:e})))))}},83890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var l=n(87462),o=(n(67294),n(3905)),a=n(52991);const i={slug:"/modeling-element",description:""},r="Element Group",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-element/index",id:"editable-mesh/modeling-mode/modeling-mode-element/index",title:"Element Group",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-element/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-element",slug:"/modeling-element",permalink:"/docs/modeling-element",draft:!1,tags:[],version:"current",frontMatter:{slug:"/modeling-element",description:""},sidebar:"docs",previous:{title:"Disk Tool",permalink:"/docs/modeling/disk-tool"},next:{title:"Vertex",permalink:"/docs/vertex-element"}},c={},m=[{value:"<strong>Change the element to edit</strong>.",id:"change-the-element-to-edit",level:2},{value:"<strong>Shortcut <code>Shift+ClickDrag</code></strong>",id:"shortcut-shiftclickdrag",level:2},{value:"<strong>Common Properties</strong>",id:"common-properties",level:2},{value:"<strong>Display</strong>",id:"display",level:3},{value:"XRay Mode",id:"xray-mode",level:3},{value:"Hide Edge Overlay",id:"hide-edge-overlay",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Soft Select</strong>",id:"soft-select",level:3},{value:"Soft Selection",id:"soft-selection",level:3},{value:"Soft Selection Curve",id:"soft-selection-curve",level:3},{value:"Soft Selection Range",id:"soft-selection-range",level:3},{value:"<strong>Vertex Snapping</strong>",id:"vertex-snapping",level:2},{value:"<strong>Ruler</strong>",id:"ruler",level:2}],d={toc:m};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"element-group"},"Element Group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ElementGroup",src:n(88848).Z,width:"2068",height:"923"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Element group")," is located at the very top of the modeling mode and is a collection of properties related to each element  (",(0,o.kt)("inlineCode",{parentName:"p"},"Vertex"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edge"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Face"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,o.kt)("h2",{id:"change-the-element-to-edit"},(0,o.kt)("strong",{parentName:"h2"},"Change the element to edit"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top Icons",src:n(70989).Z,width:"890",height:"96"})),(0,o.kt)("p",null,"In Modeling mode, the original mesh, ",(0,o.kt)("strong",{parentName:"p"},"Source Mesh"),", can be edited after ",(0,o.kt)("strong",{parentName:"p"},"selecting elements"),"."),(0,o.kt)("p",null,"There are three editable elements (",(0,o.kt)("strong",{parentName:"p"},"Vertex"),", ",(0,o.kt)("strong",{parentName:"p"},"Edge"),", ",(0,o.kt)("strong",{parentName:"p"},"Face"),") and an ",(0,o.kt)("strong",{parentName:"p"},"Object")," to exit the editing state. You can choose which element to edit through the icons at the top of the scene."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/BVy66in3VWQ",frameborder:"0",allowfullscreen:""})),(0,o.kt)("p",null,"Depending on the selection of elements, there are properties within the ",(0,o.kt)("strong",{parentName:"p"},"Element group")," that are commonly applied to all, as well as properties that vary according to each specific element."),(0,o.kt)("p",null,"Through the pages dedicated to each element below, you can easily find descriptions of each element and the properties that vary depending on the element selected."),(0,o.kt)(a.Z,{mdxType:"DocCardList"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"shortcut-shiftclickdrag"},(0,o.kt)("strong",{parentName:"h2"},"Shortcut ",(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+ClickDrag"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Element Extrude",src:n(99053).Z,width:"2006",height:"667"})),(0,o.kt)("p",null,"After ",(0,o.kt)("strong",{parentName:"p"},"selecting each element (vertex, edge, face)"),", you can create new elements in a protruding or pushing manner in the direction of movement by moving the selected elements using ",(0,o.kt)("strong",{parentName:"p"},"Shift+click-drag"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For ",(0,o.kt)("strong",{parentName:"p"},"face elements"),", you can choose how the faces protrude using the ",(0,o.kt)("strong",{parentName:"p"},"Extrude Option property")," within the ",(0,o.kt)("strong",{parentName:"p"},"Face Element group properties"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Face Extrude Option",src:n(69758).Z,width:"882",height:"345"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"common-properties"},(0,o.kt)("strong",{parentName:"h2"},"Common Properties")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ElementCommon",src:n(89967).Z,width:"790",height:"536"})),(0,o.kt)("p",null,"These are the properties that are commonly applied to each element within the Element group."),(0,o.kt)("h3",{id:"display"},(0,o.kt)("strong",{parentName:"h3"},"Display")),(0,o.kt)("p",null,"This is a property that allows you to choose the display mode of the mesh."),(0,o.kt)("h3",{id:"xray-mode"},"XRay Mode"),(0,o.kt)("p",null,"Displays faces as translucent."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_Xray Mode",src:n(17725).Z,width:"1920",height:"640"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("strong",{parentName:"p"},"XRay Mode property"),", you can easily view elements located on the backside of complex models.")),(0,o.kt)("h3",{id:"hide-edge-overlay"},"Hide Edge Overlay"),(0,o.kt)("p",null,"Makes edges visible or hidden."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_HideEdgeOverlay",src:n(33615).Z,width:"1920",height:"640"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"select"},(0,o.kt)("strong",{parentName:"h3"},"Select")),(0,o.kt)("p",null,"This is a property that allows you to set the selection mode for elements."),(0,o.kt)("h3",{id:"backface-select"},"Backface Select"),(0,o.kt)("p",null,"You can set whether to select elements that are facing the opposite side."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_BackfaceOff",src:n(81060).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"When the Backface Select property is turned off, elements facing the opposite side are not selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_BackfaceOn",src:n(62931).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"When the Backface Select property is turned on, elements facing the opposite side are also selected."),(0,o.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,o.kt)("p",null,"This is a property that allows for the selection of only the elements currently visible from the camera's perspective."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_Camerabased Select Off",src:n(26274).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"When the Camera Based Select property is turned off, elements obscured by the camera are also selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_Camerabased Select On",src:n(72182).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"When the Camera Based Select property is turned on, elements obscured by the camera are not selected."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"soft-select"},(0,o.kt)("strong",{parentName:"h3"},"Soft Select")),(0,o.kt)("p",null,"This property allows for the selection of elements adjacent to the selected elements in the scene (Scene), based on a weighting system."),(0,o.kt)("p",null,"Based on the set weight, the selected elements and the specified range are displayed in color, generally indicated by a smooth circular shape."),(0,o.kt)("h3",{id:"soft-selection"},"Soft Selection"),(0,o.kt)("p",null,"This is a property that activates ",(0,o.kt)("strong",{parentName:"p"},"Soft Selection"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_SoftSelect",src:n(8138).Z,width:"1920",height:"640"})),(0,o.kt)("h3",{id:"soft-selection-curve"},"Soft Selection Curve"),(0,o.kt)("p",null,"This property, in the form of a graph, determines the shape of the weight curve for Soft Selection. You can edit it by clicking on the graph next to the Soft Selection Curve property."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_SoftSelectCurve",src:n(41716).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of Curve shape")),(0,o.kt)("p",null,"This is an example of how the selection shape changes depending on the Curve type."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_SoftSelectCurve_Example1",src:n(63885).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_SoftSelectCurve_Example2",src:n(34817).Z,width:"1920",height:"640"})),(0,o.kt)("h3",{id:"soft-selection-range"},"Soft Selection Range"),(0,o.kt)("p",null,"This property sets the range over which soft selection is applied, starting from the selected elements."),(0,o.kt)("p",null,"Since in Unity 1 meter equals 1.0, a value of 0.5 would mean that elements up to 50cm from the selected element are selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Common_SoftSelectRange",src:n(72757).Z,width:"1920",height:"640"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"vertex-snapping"},(0,o.kt)("strong",{parentName:"h2"},"Vertex Snapping")),(0,o.kt)("p",null,"When you press the ",(0,o.kt)("inlineCode",{parentName:"p"},"V")," key and move the gizmo (handle), you can move the selected element to the position of the vertex pointed by the mouse, or align the position of the element to that location."),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/Qhfd3fry93U",frameborder:"0",allowfullscreen:""})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ruler"},(0,o.kt)("strong",{parentName:"h2"},"Ruler")),(0,o.kt)("p",null,"Displays the length of the selected element. When vertices are selected, the distance between the vertices is displayed in the order selected. For edges, the length of all selected edges is displayed, and for faces, the length of all edges composing the selected faces is displayed. In the bottom right of the scene view, the total length is displayed."),(0,o.kt)("p",null,"The ruler can be enabled or disabled in ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences > UModeler X > Display > Ruler")," property."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ruler property in the Preferences",src:n(93663).Z,width:"1866",height:"764"})),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/gE_8MPFK9qo?si=HyNi8VaVpb5AZ9LE",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},69758:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_Face_ExtrudeOption-f795a5f733f033af11bf74b3b0d52f5e.png"},89967:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common-042132676b35af689474a383d476aacf.png"},81060:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_BackFaceOff-d6177cc24278401547c7273b5da04233.png"},62931:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_BackFaceOn-20c2c42d08b18716a20e1af5e4d392b1.png"},26274:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_CameraBasedOff-4fe13968b619c0d46e52c48b1d1a19c5.png"},72182:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_CameraBasedOn-2f4c40d6d040f8cb6808a12d156f5f35.png"},99053:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_Extrude-3be6a190106e034bd188ae409482b4ab.png"},33615:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_HideEdgeOverlay-8cf8368ef74216553e895268f4c7c61d.png"},8138:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelection-1e4de906974bc06b1779ab3d3a1fa935.png"},41716:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurve-e810f3dd8b70ab879119178831576f4c.png"},63885:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurveExample1-1575b4b5a26da5836c422ce90624c1dd.png"},34817:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionCurveExample2-cf8a818a5e149c80f0946f7e6f741a83.png"},72757:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_SoftSelectionRange-2715297f8e3e28fc4686458a49c49209.png"},17725:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Element_common_Xray-be74e228d3d01f319da7332f6c546578.png"},88848:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Elements_Group-4cddeddef32adbaadd86c3e1f7d767cc.png"},93663:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/Ruler-Preference-3bb2f6206420909018083014371a7e5e.png"},70989:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3oAAABgCAYAAABL9gAYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGiGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMi0yOFQxMjo0NzoxNCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDItMjhUMTI6NDc6MTQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRkMDZkM2Q0LWYyYTYtYmQ0Mi05YzEzLTkyY2RjNTVhNmZmMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTdiZWU4Ni05YzZjLWIzNDMtYWU3ZS1lYmM0OTRlYzQzYTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTdiZWU4Ni05YzZjLWIzNDMtYWU3ZS1lYmM0OTRlYzQzYTEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdlN2JlZTg2LTljNmMtYjM0My1hZTdlLWViYzQ5NGVjNDNhMSIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0yOFQxMTowMTozNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NzdhNzBiNS04MTZlLTcyNDYtYjJmZi1kZjZjYjc1ZjhhYTYiIHN0RXZ0OndoZW49IjIwMjMtMDItMjhUMTI6MzE6MDgrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQwNmQzZDQtZjJhNi1iZDQyLTljMTMtOTJjZGM1NWE2ZmYzIiBzdEV2dDp3aGVuPSIyMDIzLTAyLTI4VDEyOjQ3OjE0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z5yIBQAADeVJREFUeJzt3V+PVHWex/F303RDt420IXa2exREOiAaASNcrJFEI4lXJk4ysxc+htmL3WSdzBOY7M5e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"}}]);