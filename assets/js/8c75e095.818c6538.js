"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(m,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/modeling/unmark-uvseam-tool",sidebar_position:3,description:""},l="Unmark UV Seam Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-surface/unmark-uvseam-tool",id:"editable-mesh/modeling-mode/modeling-mode-surface/unmark-uvseam-tool",title:"Unmark UV Seam Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-surface/unmark-uvseam-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-surface",slug:"/modeling/unmark-uvseam-tool",permalink:"/docs/modeling/unmark-uvseam-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/modeling/unmark-uvseam-tool",sidebar_position:3,description:""},sidebar:"docs",previous:{title:"Mark UV Seam Tool",permalink:"/docs/modeling/mark-uvseam-tool"},next:{title:"Vertex Color Brush Tool",permalink:"/docs/modeling/vertexcolor-brush-tool"}},m={},s=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unmark-uv-seam-tool"},"Unmark UV Seam Tool"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Unmark UV Seam Tool",src:n(61951).Z,width:"1920",height:"640"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Unmark UV Seam tool")," is a tool that unmarks a cut line set by the ",(0,a.kt)("strong",{parentName:"p"},"Mark UV Seam tool"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"to-mark-uv-seam"},"To ",(0,a.kt)("strong",{parentName:"h2"},"Mark UV Seam"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"DisplayUVSeam",src:n(21397).Z,width:"838",height:"348"}),"\nSince the ",(0,a.kt)("strong",{parentName:"p"},"UV Seam")," is not actually a cut edge of the mesh, you must have the ",(0,a.kt)("strong",{parentName:"p"},"Display UVSeam property")," of the edge ",(0,a.kt)("strong",{parentName:"p"},"Element group")," enabled in order to ",(0,a.kt)("strong",{parentName:"p"},"visually see it"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h2"},"How to Use")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"With the edge selected, enable the ",(0,a.kt)("strong",{parentName:"li"},"Display UVSeam property")," of the ",(0,a.kt)("strong",{parentName:"li"},"Element group"),".\n",(0,a.kt)("img",{alt:"DisplayUVSeam Properties",src:n(21397).Z,width:"838",height:"348"}),(0,a.kt)("img",{alt:"Display UV Seam",src:n(53437).Z,width:"960",height:"640"})),(0,a.kt)("li",{parentName:"ol"},"Select the edge you want to unmark.\n",(0,a.kt)("img",{alt:"Select Edge",src:n(19619).Z,width:"960",height:"640"})),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("strong",{parentName:"li"},"Unmark UV Seam tool"),"."),(0,a.kt)("li",{parentName:"ol"},"The selected edge has been released from the cut line.\n",(0,a.kt)("img",{alt:"Result",src:n(25919).Z,width:"960",height:"640"}))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example-usage"},(0,a.kt)("strong",{parentName:"h2"},"Example Usage")))}u.isMDXComponent=!0},61951:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Surface_UnmarkUVSeam-bebe09b8f706c58db170d39052307802.png"},21397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Surface_UnmarkUVSeam_DisplayUVSeam-5f8db030c53bed455e2304679062cf5a.png"},25919:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Surface_UnmarkUVSeam_Result-7e6c466080f197f08d8058e7b9ace527.png"},53437:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Surface_UnmarkUVSeam_Seam-6d7c88bf730eda8a6001f69d1ceef96d.png"},19619:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Modeling_Surface_UnmarkUVSeam_SelectEdge-7c7a755a243bfd944c85e3b8d311f65f.png"}}]);