"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=o,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const l={slug:"/create-object",sidebar_position:1},a="\uccab \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",i={unversionedId:"getting-started/quick-start/create-object",id:"getting-started/quick-start/create-object",title:"\uccab \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",description:"UModeler X\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c UModelerX \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \ubc29\ubc95 \uc124\uba85\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/getting-started/quick-start/create-object.md",sourceDirName:"getting-started/quick-start",slug:"/create-object",permalink:"/ko/docs/create-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/create-object",sidebar_position:1},sidebar:"docs",previous:{title:"\ud035\uc2a4\ud0c0\ud2b8 \uac00\uc774\ub4dc",permalink:"/ko/docs/QuickStart"},next:{title:"\uae30\uc874 \uc624\ube0c\uc81d\ud2b8 \ud3b8\uc9d1\ud558\uae30",permalink:"/ko/docs/edit-exist-object"}},c={},d=[{value:"1. \uba54\ub274\ub97c \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131",id:"1-\uba54\ub274\ub97c-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131",level:2},{value:"2. \uc52c\ubdf0 \uc544\uc774\ucf58\uc744 \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131",id:"2-\uc52c\ubdf0-\uc544\uc774\ucf58\uc744-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131",level:2},{value:"3. \uae30\uc874 3D \uc624\ube0c\uc81d\ud2b8\ub97c  UModeler X \uc624\ube0c\uc81d\ud2b8\ub85c \ubcc0\ud658",id:"3-\uae30\uc874-3d-\uc624\ube0c\uc81d\ud2b8\ub97c--umodeler-x-\uc624\ube0c\uc81d\ud2b8\ub85c-\ubcc0\ud658",level:2},{value:"1. \uba54\ub274\ub97c \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \uc608\uc2dc",id:"1-\uba54\ub274\ub97c-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131-\uc608\uc2dc",level:2},{value:"2. \uc52c\ubdf0 \uc544\uc774\ucf58\uc744 \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \uc608\uc2dc",id:"2-\uc52c\ubdf0-\uc544\uc774\ucf58\uc744-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131-\uc608\uc2dc",level:2},{value:"3. \uae30\uc874 3D \uc624\ube0c\uc81d\ud2b8\ub97c  UModeler X \uc624\ube0c\uc81d\ud2b8\ub85c \ubcc0\ud658 \uc608\uc2dc",id:"3-\uae30\uc874-3d-\uc624\ube0c\uc81d\ud2b8\ub97c--umodeler-x-\uc624\ube0c\uc81d\ud2b8\ub85c-\ubcc0\ud658-\uc608\uc2dc",level:2}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\uccab-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131\ud558\uae30"},"\uccab \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,o.kt)("h1",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UModeler X"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c ",(0,o.kt)("strong",{parentName:"p"},"UModelerX \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \ubc29\ubc95")," \uc124\uba85\uc785\ub2c8\ub2e4."),(0,o.kt)("h1",{id:"\uc0dd\uc131-\ubc29\ubc95"},"\uc0dd\uc131 \ubc29\ubc95"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UModelerX \uc624\ube0c\uc81d\ud2b8"),"\ub97c \uc0dd\uc131\uc744 \ud558\ub294 \uc138\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\uba54\ub274"),"\ub97c \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\uc52c\ubdf0 \uc544\uc774\ucf58"),"\uc744 \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,o.kt)("li",{parentName:"ol"},"\uae30\uc874 3D \uc624\ube0c\uc81d\ud2b8\ub97c  ",(0,o.kt)("strong",{parentName:"li"},"UModeler X \uc624\ube0c\uc81d\ud2b8\ub85c \ubcc0\ud658"))),(0,o.kt)("h2",{id:"1-\uba54\ub274\ub97c-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131"},"1. \uba54\ub274\ub97c \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uc0c1\ub2e8 \uba54\ub274\uc5d0\uc11c ",(0,o.kt)("strong",{parentName:"li"},"Tools>UModeler X>New Object")," \ub97c \ub20c\ub7ec\uc90d\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Inspector \ud0ed"),"\uc5d0 ",(0,o.kt)("strong",{parentName:"li"},"UModelerX \ucef4\ud37c\ub10c\ud2b8"),"\uac00 \uc0dd\uc131\ub418\uace0 ",(0,o.kt)("strong",{parentName:"li"},"Hierachy \ud0ed"),"\uc5d0 ",(0,o.kt)("strong",{parentName:"li"},"UModelerX Object")," \uac00 \uc0dd\uc131\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"2-\uc52c\ubdf0-\uc544\uc774\ucf58\uc744-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131"},"2. \uc52c\ubdf0 \uc544\uc774\ucf58\uc744 \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uc52c\ubdf0 \uc0c1\ub2e8 ",(0,o.kt)("strong",{parentName:"li"},"UModelerX \uc544\uc774\ucf58"),"\ub4e4 \uc911 \uc6b0\uce21\uc5d0 \uc788\ub294 \uc544\uc774\ucf58\uc744 \ub20c\ub7ec\uc90d\ub2c8\ub2e4.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Inspector \ud0ed"),"\uc5d0 ",(0,o.kt)("strong",{parentName:"li"},"UModelerX \ucef4\ud37c\ub10c\ud2b8"),"\uac00 \uc0dd\uc131\ub418\uace0 ",(0,o.kt)("strong",{parentName:"li"},"Hierachy \ud0ed"),"\uc5d0 ",(0,o.kt)("strong",{parentName:"li"},"UModelerX Object")," \uac00 \uc0dd\uc131\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"3-\uae30\uc874-3d-\uc624\ube0c\uc81d\ud2b8\ub97c--umodeler-x-\uc624\ube0c\uc81d\ud2b8\ub85c-\ubcc0\ud658"},"3. \uae30\uc874 3D \uc624\ube0c\uc81d\ud2b8\ub97c  UModeler X \uc624\ube0c\uc81d\ud2b8\ub85c \ubcc0\ud658"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UModeler X \uc624\ube0c\uc81d\ud2b8"),"\uac00 \uc544\ub2cc 3D \uc624\ube0c\uc81d\ud2b8\ub97c ",(0,o.kt)("strong",{parentName:"li"},"Hierarchy\ud0ed"),"\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"li"},"\uc6b0\ud074\ub9ad")," \ud558\uc5ec \ucee8\ud14d\uc2a4\ud2b8 \uba54\ub274\ub97c \ub744\uc6c1\ub2c8\ub2e4.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"UModeler X>UModelerize")," \ub97c \ub20c\ub7ec \ud574\ub2f9 3D \uc624\ube0c\uc81d\ud2b8\ub97c ",(0,o.kt)("strong",{parentName:"li"},"UModelerX \uc624\ube0c\uc81d\ud2b8"),"\ub85c \ubcc0\ud658 \ud569\ub2c8\ub2e4.")),(0,o.kt)("h1",{id:"\uc0dd\uc131-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h1"},"\uc0dd\uc131 \uc608\uc2dc")),(0,o.kt)("h2",{id:"1-\uba54\ub274\ub97c-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131-\uc608\uc2dc"},"1. \uba54\ub274\ub97c \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \uc608\uc2dc"),(0,o.kt)("h2",{id:"2-\uc52c\ubdf0-\uc544\uc774\ucf58\uc744-\ud1b5\ud55c-umodeler-x-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131-\uc608\uc2dc"},"2. \uc52c\ubdf0 \uc544\uc774\ucf58\uc744 \ud1b5\ud55c UModeler X \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131 \uc608\uc2dc"),(0,o.kt)("h2",{id:"3-\uae30\uc874-3d-\uc624\ube0c\uc81d\ud2b8\ub97c--umodeler-x-\uc624\ube0c\uc81d\ud2b8\ub85c-\ubcc0\ud658-\uc608\uc2dc"},"3. \uae30\uc874 3D \uc624\ube0c\uc81d\ud2b8\ub97c  UModeler X \uc624\ube0c\uc81d\ud2b8\ub85c \ubcc0\ud658 \uc608\uc2dc"))}s.isMDXComponent=!0}}]);