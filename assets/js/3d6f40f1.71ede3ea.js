"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=i,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),i=r(6010),o=r(2802),a=r(9960),c=r(3919),l=r(5999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",p),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},2855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(7462),i=(r(7294),r(3905)),o=r(2991);const a={slug:"/modeling-primitive-shapes"},c="Primitive Shapes \uadf8\ub8f9",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/index",id:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes/index",title:"Primitive Shapes \uadf8\ub8f9",description:"Primitive Shapes \uadf8\ub8f9\uc740 \uae30\ubcf8 \ub3c4\ud615 \uba54\uc2dc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ud234\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4.",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-primitiveShapes/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-primitiveShapes",slug:"/modeling-primitive-shapes",permalink:"/docs/modeling-primitive-shapes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/modeling-mode/modeling-mode-primitiveShapes/index.md",tags:[],version:"current",frontMatter:{slug:"/modeling-primitive-shapes"},sidebar:"tutorialSidebar",previous:{title:"\uc624\ube0c\uc81d\ud2b8",permalink:"/docs/object-element"},next:{title:"Box \ud234",permalink:"/docs/modeling/box-tool"}},s={},m=[],p={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"primitive-shapes-\uadf8\ub8f9"},"Primitive Shapes \uadf8\ub8f9"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Primitive Shapes \uadf8\ub8f9"),"\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\uae30\ubcf8 \ub3c4\ud615 \uba54\uc2dc"),"\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ud234\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);