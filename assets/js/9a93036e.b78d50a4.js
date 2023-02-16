"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[5745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,c=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(c,a(a({ref:t},g),{},{components:r})):n.createElement(c,a({ref:t},g))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:1,slug:"/rigging-mode-start"},a="\ub9ac\uae45 \ubaa8\ub4dc \uc2dc\uc791\ud558\uae30",i={unversionedId:"editable-mesh/rigging-mode/rigging-mode-start",id:"editable-mesh/rigging-mode/rigging-mode-start",title:"\ub9ac\uae45 \ubaa8\ub4dc \uc2dc\uc791\ud558\uae30",description:"\uac1c\uc694",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/rigging-mode-start.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging-mode-start",permalink:"/docs/rigging-mode-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/rigging-mode/rigging-mode-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/rigging-mode-start"},sidebar:"tutorialSidebar",previous:{title:"\ub9ac\uae45 \ubaa8\ub4dc",permalink:"/docs/rigging-mode"},next:{title:"Weight \ud234",permalink:"/docs/rigging/weight-tool"}},s={},d=[{value:"<strong>\uac1c\uc694</strong>",id:"\uac1c\uc694",level:2},{value:"<strong>\uc2e4\ud589 \ubc29\ubc95</strong>",id:"\uc2e4\ud589-\ubc29\ubc95",level:2},{value:"\uc624\ube0c\uc81d\ud2b8 \uc120\ud0dd&gt;Ed Mesh \ubaa8\ub514\ud30c\uc774\uc5b4&gt;Surface \uadf8\ub8f9&gt;UV Editor \ud234",id:"\uc624\ube0c\uc81d\ud2b8-\uc120\ud0dded-mesh-\ubaa8\ub514\ud30c\uc774\uc5b4surface-\uadf8\ub8f9uv-editor-\ud234",level:3},{value:"\uc624\ube0c\uc81d\ud2b8 \uc120\ud0dd&gt;\uc5f4\ub824\uc788\ub294 UV \uc5d0\ub514\ud130 \ud0ed \uc120\ud0dd",id:"\uc624\ube0c\uc81d\ud2b8-\uc120\ud0dd\uc5f4\ub824\uc788\ub294-uv-\uc5d0\ub514\ud130-\ud0ed-\uc120\ud0dd",level:3},{value:"Tools&gt;UModeler X&gt;UVEditor",id:"toolsumodeler-xuveditor",level:3},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"<strong>1. Toolbar</strong>",id:"1-toolbar",level:3},{value:"<strong>2. Settings</strong>",id:"2-settings",level:3},{value:"<strong>3. Working Area</strong>",id:"3-working-area",level:3},{value:"<strong>4. UV Tools</strong>",id:"4-uv-tools",level:3},{value:"Unwrap \uadf8\ub8f9",id:"unwrap-\uadf8\ub8f9",level:3},{value:"Selection \uadf8\ub8f9",id:"selection-\uadf8\ub8f9",level:3},{value:"Quick Transform \uadf8\ub8f9",id:"quick-transform-\uadf8\ub8f9",level:3},{value:"Alignment \uadf8\ub8f9",id:"alignment-\uadf8\ub8f9",level:3},{value:"Weld And Break \uadf8\ub8f9",id:"weld-and-break-\uadf8\ub8f9",level:3},{value:"Arrange \uadf8\ub8f9",id:"arrange-\uadf8\ub8f9",level:3},{value:"Misc \uadf8\ub8f9",id:"misc-\uadf8\ub8f9",level:3}],g={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ub9ac\uae45-\ubaa8\ub4dc-\uc2dc\uc791\ud558\uae30"},"\ub9ac\uae45 \ubaa8\ub4dc \uc2dc\uc791\ud558\uae30"),(0,o.kt)("h2",{id:"\uac1c\uc694"},(0,o.kt)("strong",{parentName:"h2"},"\uac1c\uc694")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UV"),"\ub294 3D \ud615\ud0dc\uc758 \uc624\ube0c\uc81d\ud2b8\uc640 \ub300\uc751\ud558\ub294 2D \ud615\ud0dc\uc758 \ud14d\uc2a4\uccd0 \uc88c\ud45c \uc785\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\ub97c \uc0ac\uc6a9\ud558\uba74 UV\ub97c \uc0dd\uc131\ud558\uace0 \ud3b8\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc2e4\ud589-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc2e4\ud589 \ubc29\ubc95")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130"),"\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\uc624\ube0c\uc81d\ud2b8-\uc120\ud0dded-mesh-\ubaa8\ub514\ud30c\uc774\uc5b4surface-\uadf8\ub8f9uv-editor-\ud234"},"\uc624\ube0c\uc81d\ud2b8 \uc120\ud0dd>Ed Mesh \ubaa8\ub514\ud30c\uc774\uc5b4>Surface \uadf8\ub8f9>UV Editor \ud234"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Ed Mesh \ubaa8\ub514\ud30c\uc774\uc5b4"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Surface\uadf8\ub8f9"),"\uc5d0 \uc788\ub294 ",(0,o.kt)("strong",{parentName:"li"},"UV Editor \ud234"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UV \uc5d0\ub514\ud130"),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,o.kt)("h3",{id:"\uc624\ube0c\uc81d\ud2b8-\uc120\ud0dd\uc5f4\ub824\uc788\ub294-uv-\uc5d0\ub514\ud130-\ud0ed-\uc120\ud0dd"},"\uc624\ube0c\uc81d\ud2b8 \uc120\ud0dd>\uc5f4\ub824\uc788\ub294 UV \uc5d0\ub514\ud130 \ud0ed \uc120\ud0dd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UModelerX \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uc5f4\ub824\uc788\ub294 \ud0ed\ub4e4 \uc911 ",(0,o.kt)("strong",{parentName:"li"},"UV Editor \ud0ed"),"\uc744 \ub20c\ub7ec \ud65c\uc131\ud654 \uc2dc\ucf1c\uc90d\ub2c8\ub2e4.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UV \uc5d0\ub514\ud130"),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"toolsumodeler-xuveditor"},"Tools>UModeler X>UVEditor"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UModelerX \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\uc0c1\ub2e8 \uba54\ub274")," ",(0,o.kt)("strong",{parentName:"li"},"Tools>UModeler X>UVEditor")," \ub97c \ub204\ub985\ub2c8\ub2e4.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UV \uc5d0\ub514\ud130"),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"\uc18d\uc131"},(0,o.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,o.kt)("p",null,"UV \uc5d0\ub514\ud130\uc758 \uc18d\uc131\uc740 \ud06c\uac8c 4\uac1c\ub85c \ub098\ub204\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \uc601\uc5ed\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"1-toolbar"},(0,o.kt)("strong",{parentName:"h3"},"1. Toolbar")),(0,o.kt)("p",null,"\ud654\uba74 \uc774\ub3d9, \ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8, 3\uac1c\uc758 UV \uc5d8\ub7ec\uba3c\ud2b8, UV \uc544\uc77c\ub79c\ub4dc \uc120\ud0dd\uc774 \uc21c\uc11c\ub300\ub85c \ub098\uc5f4\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"2-settings"},(0,o.kt)("strong",{parentName:"h3"},"2. Settings")),(0,o.kt)("p",null,"UV \uc5d0\ub514\ud130\uc640 \uad00\ub828\ub41c \uc124\uc815\uc744 \ud560 \uc218 \uc788\ub294 \uc601\uc5ed\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"3-working-area"},(0,o.kt)("strong",{parentName:"h3"},"3. Working Area")),(0,o.kt)("p",null,"UV\ub97c \ud3b8\uc9d1\ud558\ub294 \uc601\uc5ed\uc785\ub2c8\ub2e4. \uaca9\uc790\uc640 \ud568\uaed8 \ud14d\uc2a4\uccd0\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"4-uv-tools"},(0,o.kt)("strong",{parentName:"h3"},"4. UV Tools")),(0,o.kt)("p",null,"UV\ub97c \uc120\ud0dd, \ud3b8\uc9d1\ud558\uac70\ub098 \ub0b4\ubcf4\ub0b4\ub294 \ub4f1\uc758 \ud234\uc774 \uc788\ub294 \uc601\uc5ed\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"unwrap-\uadf8\ub8f9"},"Unwrap \uadf8\ub8f9"),(0,o.kt)("p",null,"UV\ub97c \ud3bc\uce60 \ub54c \uc4f0\ub294 \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"selection-\uadf8\ub8f9"},"Selection \uadf8\ub8f9"),(0,o.kt)("p",null,"UV\ub97c \uc120\ud0dd\ud560 \ub54c \uc4f0\ub294 \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"quick-transform-\uadf8\ub8f9"},"Quick Transform \uadf8\ub8f9"),(0,o.kt)("p",null,"UV\uc758 \ube60\ub978 \ubcc0\ud658\uc744  \uc704\ud55c \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"alignment-\uadf8\ub8f9"},"Alignment \uadf8\ub8f9"),(0,o.kt)("p",null,"UV\ub97c \uc815\ub82c\ud560 \ub54c \uc4f0\ub294 \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"weld-and-break-\uadf8\ub8f9"},"Weld And Break \uadf8\ub8f9"),(0,o.kt)("p",null,"UV\uc758 \uc5d8\ub7ec\uba3c\ud2b8\ub97c \ub5bc\uc5b4\ub0b4\uac70\ub098 \ubd99\uc77c \ub54c \uc4f0\ub294 \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"arrange-\uadf8\ub8f9"},"Arrange \uadf8\ub8f9"),(0,o.kt)("p",null,"UV\ub97c \ubc30\uce58\ud560 \ub54c \uc4f0\ub294 \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"misc-\uadf8\ub8f9"},"Misc \uadf8\ub8f9"),(0,o.kt)("p",null,"\uc704 \uadf8\ub8f9\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\ub294 \ud234\uc774 \ubaa8\uc5ec\uc788\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);