"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const l={slug:"/modeling/local-settings-tool",sidebar_position:4,description:""},a="Local Settings Tool",i={unversionedId:"editable-mesh/modeling-mode/modeling-mode-misc/local-settings-tool",id:"editable-mesh/modeling-mode/modeling-mode-misc/local-settings-tool",title:"Local Settings Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-misc/local-settings-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-misc",slug:"/modeling/local-settings-tool",permalink:"/docs/modeling/local-settings-tool",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/modeling/local-settings-tool",sidebar_position:4,description:""},sidebar:"docs",previous:{title:"Pivot Tool",permalink:"/docs/modeling/pivot-tool"},next:{title:"Multiple Objects Group",permalink:"/docs/modeling-multiple-objects"}},s={},c=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Property</strong>",id:"property",level:2},{value:"Recalculate Tangents",id:"recalculate-tangents",level:3},{value:"Lightmap Static",id:"lightmap-static",level:3},{value:"Generate UVs",id:"generate-uvs",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-settings-tool"},"Local Settings Tool"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Local Settings Tool")," is a tool used to manage and adjust the ",(0,r.kt)("strong",{parentName:"p"},"local settings of selected objects.")),(0,r.kt)("p",null,"It provides the ability to quickly change certain properties of an object, recalculate the state of an object, and more, with additional features planned for the future."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h2"},"How to Use")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch the ",(0,r.kt)("strong",{parentName:"li"},"Local Settings Tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the desired property."),(0,r.kt)("li",{parentName:"ol"},"The feature corresponding to the selected property will be applied to the currently selected object.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"property"},(0,r.kt)("strong",{parentName:"h2"},"Property")),(0,r.kt)("h3",{id:"recalculate-tangents"},"Recalculate Tangents"),(0,r.kt)("p",null,"This property recalculates the ",(0,r.kt)("strong",{parentName:"p"},"object's tangent vectors"),". Use this when you are having trouble applying a normal map, or when you need accurate normals while editing a mesh."),(0,r.kt)("h3",{id:"lightmap-static"},"Lightmap Static"),(0,r.kt)("p",null,"Changes the lighting method to lightmap. This property is linked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contribute Global Illumination")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh Renderer")," component."),(0,r.kt)("h3",{id:"generate-uvs"},"Generate UVs"),(0,r.kt)("p",null,"Generates UVs for lightmaps."),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);