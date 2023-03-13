"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),a=r(53438),i=r(39960),c=r(13919),l=r(95999);const u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function d(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:o?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},93680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const i={slug:"/uveditor-unwrap"},c="Unwrap \uadf8\ub8f9",l={unversionedId:"editable-mesh/uv-editor/uv-editor-unwrap/index",id:"editable-mesh/uv-editor/uv-editor-unwrap/index",title:"Unwrap \uadf8\ub8f9",description:"UV \uc5d0\ub514\ud130\uc758\xa0Unwrap \uadf8\ub8f9\uc740 UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3bc\uce60 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-unwrap/index.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-unwrap",slug:"/uveditor-unwrap",permalink:"/ko/docs/uveditor-unwrap",draft:!1,tags:[],version:"current",frontMatter:{slug:"/uveditor-unwrap"},sidebar:"docs",previous:{title:"UV \uc5d0\ub514\ud130 \uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4",permalink:"/ko/docs/settings-interface"},next:{title:"Plane \ud234",permalink:"/ko/docs/uveditor/plane-tool"}},u={},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unwrap-\uadf8\ub8f9"},"Unwrap \uadf8\ub8f9"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\uc758\xa0",(0,o.kt)("strong",{parentName:"p"},"Unwrap \uadf8\ub8f9"),"\uc740 UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3bc\uce60 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);