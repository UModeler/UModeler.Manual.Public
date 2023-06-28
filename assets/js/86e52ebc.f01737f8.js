"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,u=g["".concat(s,".").concat(d)]||g[d]||h[d]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={slug:"/rigging/envelope-tool",sidebar_position:9,description:""},i="Envelope Tool",l={unversionedId:"editable-mesh/rigging-mode/envelope-tool",id:"editable-mesh/rigging-mode/envelope-tool",title:"Envelope Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/envelope-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/envelope-tool",permalink:"/docs/rigging/envelope-tool",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{slug:"/rigging/envelope-tool",sidebar_position:9,description:""},sidebar:"docs",previous:{title:"Auto Weight Tool",permalink:"/docs/rigging/auto-weight-tool"},next:{title:"Edit Bones Tool",permalink:"/docs/rigging/edit-bones-tool"}},s={},p=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"Apply Envelope",id:"apply-envelope",level:3},{value:"Reset Envelope",id:"reset-envelope",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"envelope-tool"},"Envelope Tool"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Envelope Tool",src:n(67562).Z,width:"1460",height:"607"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Envelope tool")," is a tool for editing an ",(0,r.kt)("strong",{parentName:"p"},"Envelope"),", which is an ",(0,r.kt)("strong",{parentName:"p"},"encapsulated volume")," that assigns weights to vertices. Each bone has an envelope, and any vertices that are within or affected by the envelope are assigned a weight."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using the ",(0,r.kt)("strong",{parentName:"p"},"Envelope tool")," can make using ",(0,r.kt)("strong",{parentName:"p"},"Rigging Mode")," a little easier, as it allows you to assign weights more comfortably than manually selecting vertices to assign weights.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the desired bones in the ",(0,r.kt)("strong",{parentName:"p"},"Scene")," or ",(0,r.kt)("strong",{parentName:"p"},"Bone Tree area, Bind Bone List"),".\n",(0,r.kt)("img",{alt:"Bone Select",src:n(1611).Z,width:"652",height:"291"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"shortcut-shiftclick"},(0,r.kt)("strong",{parentName:"h2"},"Shortcut ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shift+Click"))),(0,r.kt)("p",{parentName:"admonition"},"You can use a keyboard shortcut to ",(0,r.kt)("strong",{parentName:"p"},"select the desired bone directly in the scene"),"."),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch the ",(0,r.kt)("strong",{parentName:"p"},"Envelope Tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the size and position of the on-screen ",(0,r.kt)("strong",{parentName:"p"},"Envelope capsule")," as desired.\n",(0,r.kt)("img",{alt:"Envelope capsule",src:n(21210).Z,width:"824",height:"592"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press the ",(0,r.kt)("strong",{parentName:"p"},"Apply Envelope button"),".\n",(0,r.kt)("img",{alt:"Envelope Apply",src:n(72148).Z,width:"824",height:"218"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Envelope")," is now weighted to.\n",(0,r.kt)("img",{alt:"Envelope Result",src:n(65205).Z,width:"824",height:"592"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("strong",{parentName:"h2"},"Properties")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Properties",src:n(85801).Z,width:"829",height:"411"})),(0,r.kt)("h3",{id:"basic"},(0,r.kt)("strong",{parentName:"h3"},"Basic")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Basic",src:n(86689).Z,width:"853",height:"324"})),(0,r.kt)("p",null,"Properties for rigging convenience."),(0,r.kt)("h3",{id:"show-handler"},"Show Handler"),(0,r.kt)("p",null,"Shows or hides handlers for moving or rotating bones."),(0,r.kt)("h3",{id:"show-bones"},"Show Bones"),(0,r.kt)("p",null,"Property to show bones."),(0,r.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,r.kt)("p",null,"This property shows the names of the bones."),(0,r.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,r.kt)("p",null,"Property that allows you to set whether or not to enable selecting bones via ",(0,r.kt)("strong",{parentName:"p"},"Shift+Click"),"."),(0,r.kt)("h3",{id:"apply-envelope"},"Apply Envelope"),(0,r.kt)("p",null,"This property sets the ",(0,r.kt)("strong",{parentName:"p"},"weight")," to match the currently set ",(0,r.kt)("strong",{parentName:"p"},"envelope"),"."),(0,r.kt)("p",null,"Even if you change the ",(0,r.kt)("strong",{parentName:"p"},"shape of the envelope"),", it will not be applied unless you press the ",(0,r.kt)("strong",{parentName:"p"},"Apply Envelope button"),"."),(0,r.kt)("h3",{id:"reset-envelope"},"Reset Envelope"),(0,r.kt)("p",null,"This property resets the currently set shape and position of the envelope."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/ux54b68xJhc",frameborder:"0",allowfullscreen:""})))}g.isMDXComponent=!0},67562:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_Envelope-8e8b8c1f9bf36f4d157c105e0ba9f083.png"},72148:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_Envelope_Apply-70a78e07db14de752b89777167c0b0d6.png"},21210:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_Envelope_CapsuleMove-e5c527df6ae294b580d9af7d829feba6.png"},85801:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_Envelope_Properties-fb17e8044e45c01b52decfc7a309ccc0.png"},65205:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_Envelope_Result-acfca77bb1236f9bb650c9a78b6ec490.png"},1611:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_SelectBone_Envelope-0e122324c27ca5a2058514f5dabd3b13.png"},86689:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Rigging_WeightTransfer_Properties_Basic-673835b8412dee8a5a082c2edefe20c7.png"}}]);