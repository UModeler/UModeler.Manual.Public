"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),a=r(53438),i=r(39960),c=r(13919),l=r(95999);const m="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",m)},r)}function p(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(v,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},50904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const i={slug:"/modeling-remove"},c="Remove \uadf8\ub8f9",l={unversionedId:"editable-mesh/modeling-mode/modeling-mode-remove/index",id:"editable-mesh/modeling-mode/modeling-mode-remove/index",title:"Remove \uadf8\ub8f9",description:"Remove Group",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-remove/index.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-remove",slug:"/modeling-remove",permalink:"/ko/docs/modeling-remove",draft:!1,tags:[],version:"current",frontMatter:{slug:"/modeling-remove"},sidebar:"docs",previous:{title:"Insert Vertex \ud234",permalink:"/ko/docs/modeling/insertvertex-tool"},next:{title:"Detach \ud234",permalink:"/ko/docs/modeling/detach-tool"}},m={},s=[],d={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remove-\uadf8\ub8f9"},"Remove \uadf8\ub8f9"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remove Group",src:r(12700).Z,width:"934",height:"369"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove \uadf8\ub8f9"),"\uc740 \uc2e4\ud589\ud558\uba74\xa0",(0,o.kt)("strong",{parentName:"p"},"\uac01 \uc5d8\ub9ac\uba3c\ud2b8(Vertex, Edge, Face)\uac00 \uc0ad\uc81c"),"\n\ub418\ub294 \ud234\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc8fc\ub85c\xa0",(0,o.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc0ad\uc81c"),"\ub418\uac70\ub098,\xa0",(0,o.kt)("strong",{parentName:"p"},"\ud234\uc5d0 \uc758\ud574 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ud569\uccd0\uc9c0\ub294"),"\n\ud234\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},12700:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ModelingMode_Icon_Remove-bf548571fe7f44be1b8e70a6c49afba1.png"}}]);