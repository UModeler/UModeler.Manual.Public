"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[6588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),i=r(53438),a=r(39960),l=r(13919),c=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},42542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),i=r(52991);const a={slug:"/modeling/multi-reset-xform-tool",sidebar_position:1,description:""},l="Reset X Form \ud234",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/reset-xform-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/reset-xform-tool",title:"Reset X Form \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-multiple-objects/reset-xform-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-reset-xform-tool",permalink:"/ko/docs/modeling/multi-reset-xform-tool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/modeling/multi-reset-xform-tool",sidebar_position:1,description:""},sidebar:"docs",previous:{title:"Multiple Objects \uadf8\ub8f9",permalink:"/ko/docs/modeling-multiple-objects"},next:{title:"Combine \ud234",permalink:"/ko/docs/modeling/combine-tool"}},s={},m=[{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reset-x-form-\ud234"},"Reset X Form \ud234"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Multiple Objects \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Reset X Form \ud234"),"\uc740 \uc120\ud0dd\ub41c \uc5ec\ub7ec \uc624\ube0c\uc81d\ud2b8\uc758 \ud2b8\ub79c\uc2a4\ud3fc\uc778 Position, Rotation, Scale \uac12\uc744 \ucd08\uae30\ud654\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Misc \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Reset X Form \ud234"),"\uacfc \uac19\uc9c0\ub9cc, \uc5ec\ub7ec \uc624\ube0c\uc81d\ud2b8\uc5d0 \ud55c \ubc88\uc5d0 \uc801\uc6a9 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"misc-\uadf8\ub8f9\uc758-reset-x-form-\ud234\uacfc-\ub2e4\ub978-\uc810"},(0,o.kt)("strong",{parentName:"h2"},"Misc \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"h2"},"Reset X Form \ud234"),"\uacfc \ub2e4\ub978 \uc810"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Reset X Form Tool",src:r(15048).Z,width:"1920",height:"640"})),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Misc \uadf8\ub8f9"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Reset X Form \ud234"),"\uc740 \uc120\ud0dd\ub418\uc5b4 \ud3b8\uc9d1\uc911\uc778 \ud558\ub098\uc758 \ubaa8\ub378\uc5d0 \ub300\ud574\uc11c\ub9cc Position, Rotation, Scale \uac12\uc744 \ucd08\uae30\ud654\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc774 \ub2e4\ub978\uc810\uc785\ub2c8\ub2e4."),(0,o.kt)(i.Z,{items:[{type:"link",label:"Reset X Form \ud234",href:"/docs/modeling/reset-xform-tool"}],mdxType:"DocCardList"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/DzonusWFHKQ",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},15048:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modeling_Misc_ResetXForm-e50f6fff484f689f10d9d46cba29b8c1.png"}}]);