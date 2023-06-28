"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6207],{3905:(e,t,A)=>{A.d(t,{Zo:()=>u,kt:()=>m});var i=A(67294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,i)}return A}function l(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function r(e,t){if(null==e)return{};var A,i,n=function(e,t){if(null==e)return{};var A,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)A=o[i],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)A=o[i],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var a=i.createContext({}),d=function(e){var t=i.useContext(a),A=t;return e&&(A="function"==typeof e?e(t):l(l({},t),e)),A},u=function(e){var t=d(e.components);return i.createElement(a.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var A=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=d(A),g=n,m=s["".concat(a,".").concat(g)]||s[g]||h[g]||o;return A?i.createElement(m,l(l({ref:t},u),{},{components:A})):i.createElement(m,l({ref:t},u))}));function m(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=A.length,l=new Array(o);l[0]=g;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r[s]="string"==typeof e?e:n,l[1]=r;for(var d=2;d<o;d++)l[d]=A[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,A)}g.displayName="MDXCreateElement"},51419:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=A(87462),n=(A(67294),A(3905));const o={slug:"/rigging/auto-weight-tool",sidebar_position:8},l="Auto Weight Tool",r={unversionedId:"editable-mesh/rigging-mode/auto-weight-tool",id:"editable-mesh/rigging-mode/auto-weight-tool",title:"Auto Weight Tool",description:"Auto Weight",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/auto-weight-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/auto-weight-tool",permalink:"/docs/rigging/auto-weight-tool",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/rigging/auto-weight-tool",sidebar_position:8},sidebar:"docs",previous:{title:"Build Bones Tool",permalink:"/docs/rigging/build-bones-tool"},next:{title:"Envelope Tool",permalink:"/docs/rigging/envelope-tool"}},a={},d=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Blend Width",id:"blend-width",level:3},{value:"<strong>Selected Bone Attribute</strong>",id:"selected-bone-attribute",level:3},{value:"Exclude Weights",id:"exclude-weights",level:3},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"<strong>Apply Auto Weight</strong>",id:"apply-auto-weight",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],u={toc:d};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"auto-weight-tool"},"Auto Weight Tool"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Auto Weight",src:A(28501).Z,width:"2148",height:"1437"})),(0,n.kt)("p",null,"The Auto Weight Tool automatically weights bones that are close to a vertex. It automatically assigns weights to vertices that are close to bones, making weighting easier."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use"},(0,n.kt)("strong",{parentName:"h2"},"How to Use")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("strong",{parentName:"li"},"Auto Weight Tool"),"."),(0,n.kt)("li",{parentName:"ol"},"Set the required properties and press the ",(0,n.kt)("strong",{parentName:"li"},"Apply Auto Weight")," button.\n",(0,n.kt)("img",{alt:"Auto Weight",src:A(69910).Z,width:"899",height:"100"})),(0,n.kt)("li",{parentName:"ol"},"You can see that the vertices that are close to the bone have been automatically assigned weights.\n",(0,n.kt)("img",{alt:"Auto Weight",src:A(88479).Z,width:"2148",height:"1336"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Auto Weight",src:A(16797).Z,width:"940",height:"563"})),(0,n.kt)("h3",{id:"blend-width"},"Blend Width"),(0,n.kt)("p",null,"This property sets the range in which the weight of a bone is blended with the weight of other bones."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Auto Weight",src:A(96096).Z,width:"2148",height:"853"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The closer the value of the Blend Width property is to 0, the more distinct the weight areas of each bone will be."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is useful when you want to more clearly distinguish movement between bones."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The higher the value of the Blend Width property, the more the weight of a bone will blend with the weight of other bones over a wide range."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This smooths out the movement between bones, so a high value is recommended for natural movement of the bone structure.")))),(0,n.kt)("h3",{id:"selected-bone-attribute"},(0,n.kt)("strong",{parentName:"h3"},"Selected Bone Attribute")),(0,n.kt)("h3",{id:"exclude-weights"},"Exclude Weights"),(0,n.kt)("p",null,"This attribute excludes weights from being applied to the selected bone. Any child bones of that bone will also not be weighted."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Exclude Weights")," attribute is useful when you need to exclude certain bones in the bone structure from being deformed by weights."),(0,n.kt)("p",null,"For example, if a particular bone is focused on controlling structural movement, you may want to not weight that bone so that it is not affected by deformation."),(0,n.kt)("h3",{id:"basic"},(0,n.kt)("strong",{parentName:"h3"},"Basic")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Weight Tool Properties Basic",src:A(84214).Z,width:"853",height:"324"})),(0,n.kt)("p",null,"Properties for rigging convenience."),(0,n.kt)("h3",{id:"show-handler"},"Show Handler"),(0,n.kt)("p",null,"Shows or hides handlers for moving or rotating bones."),(0,n.kt)("h3",{id:"show-bones"},"Show Bones"),(0,n.kt)("p",null,"This property shows the bones."),(0,n.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,n.kt)("p",null,"This property shows the names of the bones."),(0,n.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,n.kt)("p",null,"This property allows you to set whether or not to enable selecting bones via ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,n.kt)("h3",{id:"apply-auto-weight"},(0,n.kt)("strong",{parentName:"h3"},"Apply Auto Weight")),(0,n.kt)("p",null,"A button to automatically assign a weight based on the properties set."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/7pR9fUhE3ps",frameborder:"0",allowfullscreen:""})))}s.isMDXComponent=!0},28501:(e,t,A)=>{A.d(t,{Z:()=>i});const i=A.p+"assets/images/Rigging_AutoWeight-7575f75c1c0022b47f3456269be43271.png"},69910:(e,t,A)=>{A.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4MAAABkCAYAAAA8PuVdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDYtMjZUMjM6NTg6NDgrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA2LTI4VDIyOjQzOjQzKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA2LTI4VDIyOjQzOjQzKzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZTk4NDUyNC00Njk2LTFmNGYtOWNiZi1lYjlkM2Y3YmY4ZjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MTU2ZDkxZS0xN2RiLTg5NGEtOGY4YS04MWFhZWE0NTk2MjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNGM3ZDBjNy03YWJjLTBkNDMtYTc4Ni00M2I3MGQ4OGJjNmQiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjI3NjU3OWIzLTVhNzQtMDg0NC1hNDY3LTc2N2E2YWQxYTk4YjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0YzdkMGM3LTdhYmMtMGQ0My1hNzg2LTQzYjcwZDg4YmM2ZCIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0yNlQyMzo1ODo0OCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTA4MjU1Ny0wZTBmLWZjNDQtOTJhZi03MjhhMGQ5OGJhZGEiIHN0RXZ0OndoZW49IjIwMjMtMDYtMjhUMjI6MzM6NTMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3RpZmYgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS90aWZmIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWRiYmU0YmEtZDlmMS0zNTRmLWEyMjEtZDUwY2E4MGVkNTMxIiBzdEV2dDp3aGVuPSIyMDIzLTA2LTI4VDIyOjMzOjUzKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlOTg0NTI0LTQ2OTYtMWY0Zi05Y2JmLWViOWQzZjdiZjhmOCIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0yOFQyMjo0Mzo0MyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTA4MjU1Ny0wZTBmLWZjNDQtOTJhZi03MjhhMGQ5OGJhZGEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDRjN2QwYzctN2FiYy0wZDQzLWE3ODYtNDNiNzBkODhiYzZkIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDRjN2QwYzctN2FiYy0wZDQzLWE3ODYtNDNiNzBkODhiYzZkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3PpMugAAGBBJREFUeJzt3WlsW3d+7vGHi0iKsmRRskQtlCXLWmwndrbaA9mIx9sUmQR3Yk/c2GMkuTPA7bwopihaFC0KXKADFChw2xf3FrgtMAiKQRoXkyZp0sFgMNfxogzsxI6dsceWF0nxEpMSrcWSRe2iZJ77Qjm0FlKiREq0xe8HEJCcc/5HPx4SMB/9N4th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"},96096:(e,t,A)=>{A.d(t,{Z:()=>i});const i=A.p+"assets/images/Rigging_AutoWeight_BlendWidth-83aa7b48e2525ea9ea5e5f96e81c972b.png"},16797:(e,t,A)=>{A.d(t,{Z:()=>i});const i=A.p+"assets/images/Rigging_AutoWeight_Properties-c423866e7508c4a8d079b660a9bcb4b7.png"},88479:(e,t,A)=>{A.d(t,{Z:()=>i});const i=A.p+"assets/images/Rigging_AutoWeight_Result-c951617d7d82517ea82c8c6bef353cda.png"},84214:(e,t,A)=>{A.d(t,{Z:()=>i});const i=A.p+"assets/images/Rigging_WeightBrush_Properties_Basic-673835b8412dee8a5a082c2edefe20c7.png"}}]);