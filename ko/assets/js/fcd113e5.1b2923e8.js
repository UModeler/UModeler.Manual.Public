"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),o=r(86010),a=r(53438),i=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:o?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},80663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const i={slug:"/uveditor/fit-tool",sidebar_position:2,description:""},c="Fit \ud234",l={unversionedId:"editable-mesh/uv-editor/uv-editor-arrange/fit-tool",id:"editable-mesh/uv-editor/uv-editor-arrange/fit-tool",title:"Fit \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-arrange/fit-tool.md",sourceDirName:"editable-mesh/uv-editor/uv-editor-arrange",slug:"/uveditor/fit-tool",permalink:"/ko/docs/uveditor/fit-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/uveditor/fit-tool",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Pack \ud234",permalink:"/ko/docs/uveditor/pack-tool"},next:{title:"Misc \uadf8\ub8f9",permalink:"/ko/docs/uveditor-misc"}},s={},d=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fit-\ud234"},"Fit \ud234"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fit Tool",src:r(322).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\uc758 ",(0,o.kt)("strong",{parentName:"p"},"Fit \ud234"),"\uc740 \uc120\ud0dd\ub41c UV \uac04\uc758 \uac70\ub9ac\uc640 \ud06c\uae30\ub97c \uc720\uc9c0\ud55c \ucc44 ",(0,o.kt)("strong",{parentName:"p"},"\ud14d\uc2a4\uccd0 \uacf5\uac04"),"\uc5d0 \ub9de\uac8c UV\ub97c \ubc30\uce58\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"pack-\ud234\uacfc-\ub2e4\ub978-\uc810"},(0,o.kt)("strong",{parentName:"h2"},"Pack \ud234"),"\uacfc \ub2e4\ub978 \uc810"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Pack Tool",src:r(90661).Z,width:"1920",height:"640"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Pack \ud234"),"\uc740 \uac01 ",(0,o.kt)("strong",{parentName:"p"},"UV\uc758 \ubc14\uc6b4\ub4dc\uc5d0 \ub9de\ucdb0 \uc77c\uad04\uc801"),"\uc73c\ub85c \ud14d\uc2a4\uccd0 \uacf5\uac04\uc5d0 \ubc30\uce58\ud558\uc9c0\ub9cc,\n",(0,o.kt)("strong",{parentName:"p"},"Fit \ud234"),"\uc740 \uc120\ud0dd\ub41c ",(0,o.kt)("strong",{parentName:"p"},"UV \uac04\uc758 \uac70\ub9ac\uc640 \ud06c\uae30\ub97c \uc720\uc9c0"),"\ud55c \uc0c1\ud0dc\ub85c \ud06c\uae30\ub9cc \ub2e4\ub974\uac8c \ubc30\uce58\ud55c\ub2e4\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4."),(0,o.kt)(a.Z,{items:[{type:"link",label:"Pack \ud234",href:"/docs/uveditor/pack-tool"}],mdxType:"DocCardList"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\ud14d\uc2a4\uccd0 \uacf5\uac04\uc5d0 \ub123\uc744 UV\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Fit Tool Select",src:r(80687).Z,width:"898",height:"550"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Fit \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uc120\ud0dd\ud55c UV\ub4e4\uc774 \ud14d\uc2a4\uccd0 \uacf5\uac04\uc5d0 \ubc30\uce58\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Fit Tool Result",src:r(66123).Z,width:"898",height:"550"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/buozpUXxwiE",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Arrange_Fit-a13f6e21c09b9e11a50267165a4b6283.png"},66123:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Arrange_Fit_Result-66e1a8d4e5408aceed8af11967b774e8.png"},80687:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Arrange_Fit_Select-151d2c24343c6291d7bce2403d874a0b.png"},90661:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UVEditor_Arrange_Pack-aa09ac9ebb0cde1314afe86c442a57d5.png"}}]);