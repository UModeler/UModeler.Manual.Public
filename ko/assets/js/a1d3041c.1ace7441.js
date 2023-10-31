"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(67294),n=r(86010),l=r(53438),i=r(39960),o=r(13919),c=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return a.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:l,description:i}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",m),title:l},r," ",l),i&&a.createElement("p",{className:(0,n.Z)("text--truncate",p),title:i},i))}function g(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?a.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,l.jA)();return a.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return a.createElement(h,e);const i=(0,l.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(k,{item:e})))))}},34416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(52991);const i={slug:"/modeling/multi-material-tool",sidebar_position:4,description:""},o="Material \ud234",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/material-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/material-tool",title:"Material \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-multiple-objects/material-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-material-tool",permalink:"/ko/docs/modeling/multi-material-tool",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/modeling/multi-material-tool",sidebar_position:4,description:""},sidebar:"docs",previous:{title:"Reset X Form \ud234",permalink:"/ko/docs/modeling/multi-reset-xform-tool"},next:{title:"Boolean \ud234",permalink:"/ko/docs/modeling/boolean-tool"}},s={},m=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Material",id:"material",level:3},{value:"Apply",id:"apply",level:3},{value:"Reset",id:"reset",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],p={toc:m};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"material-\ud234"},"Material \ud234"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Material Tool",src:r(39353).Z,width:"1920",height:"640"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Multiple Objects \uadf8\ub8f9"),"\uc758 ",(0,n.kt)("strong",{parentName:"p"},"Material \ud234"),"\uc740 \uc5ec\ub7ec \uc624\ube0c\uc81d\ud2b8\uc5d0 ",(0,n.kt)("strong",{parentName:"p"},"\ud558\ub098\uc758 \uba38\ud2f0\ub9ac\uc5bc\uc744 \uc124\uc815"),"\ud558\uac70\ub098, ",(0,n.kt)("strong",{parentName:"p"},"UModelerX \uae30\ubcf8 \uba38\ud2f0\ub9ac\uc5bc"),"\ub85c ",(0,n.kt)("strong",{parentName:"p"},"\ub9ac\uc14b"),"\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,n.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"surface-\uadf8\ub8f9\uc758-material-\ud234\uacfc-\ub2e4\ub978-\uc810"},(0,n.kt)("strong",{parentName:"h2"},"Surface \uadf8\ub8f9"),"\uc758 ",(0,n.kt)("strong",{parentName:"h2"},"Material \ud234"),"\uacfc \ub2e4\ub978 \uc810"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Material Tool",src:r(13846).Z,width:"1920",height:"640"})),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Surface \uadf8\ub8f9"),"\uc758 ",(0,n.kt)("strong",{parentName:"p"},"Material \ud234"),"\uc740 \ud398\uc774\uc2a4 \ub2e8\uc704\uc758\xa0",(0,n.kt)("strong",{parentName:"p"},"\uba38\ud2f0\ub9ac\uc5bc \uc801\uc6a9, \uba38\ud2f0\ub9ac\uc5bc \ucd94\uac00 \ubc0f \uc801\uc6a9\ub41c \uba38\ud2f0\ub9ac\uc5bc \uc0ad\uc81c"),"\ub97c \ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc774 \ub2e4\ub978\uc810\uc785\ub2c8\ub2e4."),(0,n.kt)(l.Z,{items:[{type:"link",label:"Material \ud234",href:"/docs/modeling/material-tool"}],mdxType:"DocCardList"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,n.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\uc5ec\ub7ec UModeler X \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Material Tool Select Object",src:r(82720).Z,width:"1138",height:"640"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Material \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Material \uc18d\uc131"),"\uc5d0 \uc801\uc6a9\ud560 ",(0,n.kt)("strong",{parentName:"li"},"\uba38\ud2f0\ub9ac\uc5bc\uc744 \uc120\ud0dd"),"\ud569\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Material Tool Select Material",src:r(65178).Z,width:"1140",height:"266"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Apply \uc18d\uc131"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Material Tool Apply",src:r(57409).Z,width:"1140",height:"266"})),(0,n.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c \uc624\ube0c\uc81d\ud2b8\uc5d0 \uba38\ud2f0\ub9ac\uc5bc\uc774 \uc77c\uad04\uc801\uc73c\ub85c \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,n.kt)("img",{alt:"Material Tool Result",src:r(70110).Z,width:"1138",height:"640"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc18d\uc131"},(0,n.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Material Tool Properties",src:r(67429).Z,width:"1140",height:"266"})),(0,n.kt)("h3",{id:"material"},"Material"),(0,n.kt)("p",null,"\uc6d0\ud558\ub294 \uba38\ud2f0\ub9ac\uc5bc\uc744 \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"apply"},"Apply"),(0,n.kt)("p",null,"\uc120\ud0dd\ud55c \uba38\ud2f0\ub9ac\uc5bc\uc744 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"reset"},"Reset"),(0,n.kt)("p",null,"\uc120\ud0dd\ud55c \uc624\ube0c\uc81d\ud2b8\uc758 \uba38\ud2f0\ub9ac\uc5bc\uc744 UModeler X \uae30\ubcf8 \uba38\ud2f0\ub9ac\uc5bc\ub85c \ucd08\uae30\ud654 \ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,n.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/5yqzawxI8Oc",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},39353:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material-dc6fee2a7deb8aab863bda25e3735599.png"},57409:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_Apply-812ff0e776eb5c2b17713735b75df366.png"},67429:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_Properties-3e950cc93c58893824c475f1b540d88e.png"},70110:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_Result-720dcd7622cfd0e2da9df5c0d5ca7fa4.png"},65178:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_SelectMaterial-27bc861c5abcd0049da1c6a014d94d9a.png"},82720:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_SelectObject-4f8e1c07b9b1a9512a579cd5e68d92c0.png"},13846:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Surface_Material-9648ea3e950f5ed089ff1f87f5dc1263.png"}}]);