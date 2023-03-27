"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/faq-editable-mesh",sidebar_position:1},i="Editable Mesh",l={unversionedId:"faq/faq-editable-mesh",id:"faq/faq-editable-mesh",title:"Editable Mesh",description:"Upon entering the Rigging Mode, 'Set the Root Bone' warning appears.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/faq/faq-editable-mesh.md",sourceDirName:"faq",slug:"/faq-editable-mesh",permalink:"/docs/faq-editable-mesh",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/faq-editable-mesh",sidebar_position:1},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"UModeler Hub",permalink:"/docs/faq-umodeler-hub"}},s={},c=[{value:"Upon entering the Rigging Mode, &#39;Set the Root Bone&#39; warning appears.",id:"upon-entering-the-rigging-mode-set-the-root-bone-warning-appears",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editable-mesh"},"Editable Mesh"),(0,o.kt)("h2",{id:"upon-entering-the-rigging-mode-set-the-root-bone-warning-appears"},"Upon entering the Rigging Mode, 'Set the Root Bone' warning appears."),(0,o.kt)("p",null,"When you start the rigging mode of a UModeler X object without setting a Root Bone, a warning message appears."),(0,o.kt)("p",null,"To resolve this issue, either drag the game object that will serve as the root bone from the hierarchy window and drop it into the Root Bone object property field, or click the disk icon on the right to select the root bone object."),(0,o.kt)("p",null,"Typically, the root bone object forms a hierarchical structure with multiple sub-bone objects and is often found as a child object of the corresponding game object."))}u.isMDXComponent=!0}}]);