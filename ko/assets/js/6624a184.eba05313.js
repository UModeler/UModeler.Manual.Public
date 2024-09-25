"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=n(87462),o=(n(67294),n(3905));const i={slug:"/rigging/weight-transfer-tool",sidebar_position:6,description:""},a="Weight Transfer \ud234",s={unversionedId:"editable-mesh/rigging-mode/weight-transfer-tool",id:"editable-mesh/rigging-mode/weight-transfer-tool",title:"Weight Transfer \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/weight-transfer-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/weight-transfer-tool",permalink:"/ko/docs/rigging/weight-transfer-tool",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/rigging/weight-transfer-tool",sidebar_position:6,description:""},sidebar:"docs",previous:{title:"Rebind Poses \ud234",permalink:"/ko/docs/rigging/rebind-poses-tool"},next:{title:"Build Bones \ud234",permalink:"/ko/docs/rigging/build-bones-tool"}},l={},g=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"\ucc38\uc870 \uc624\ube0c\uc81d\ud2b8 \uc2ac\ub86f",id:"\ucc38\uc870-\uc624\ube0c\uc81d\ud2b8-\uc2ac\ub86f",level:3},{value:"Transfer",id:"transfer",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],c={toc:g};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"weight-transfer-\ud234"},"Weight Transfer \ud234"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Weight Transfer Tool",src:n(42221).Z,width:"1456",height:"595"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Weight Transfer \ud234"),"\uc740 \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ub41c \uc6e8\uc774\ud2b8\ub97c \ud604\uc7ac\uc758 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ubcf5\uc0ac\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Weight Transfer \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ucc38\uc870\ud560 \uc624\ube0c\uc81d\ud2b8\ub97c \uc2ac\ub86f\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Weight Transfer Tool Reference",src:n(12983).Z,width:"901",height:"434"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Transfer \ubc84\ud2bc"),"\uc744 \ub20c\ub7ec \uc801\uc6a9\ud569\ub2c8\ub2e4.\n",(0,o.kt)("img",{alt:"Transfer Result",src:n(75382).Z,width:"1466",height:"651"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc18d\uc131"},(0,o.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Weight Transfer Tool Properties",src:n(38301).Z,width:"800",height:"400"})),(0,o.kt)("h3",{id:"basic"},(0,o.kt)("strong",{parentName:"h3"},"Basic")),(0,o.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-handler"},"Show Handler"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones"},"Show Bones"),(0,o.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,o.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ucc38\uc870-\uc624\ube0c\uc81d\ud2b8-\uc2ac\ub86f"},"\ucc38\uc870 \uc624\ube0c\uc81d\ud2b8 \uc2ac\ub86f"),(0,o.kt)("p",null,"\uc6e8\uc774\ud2b8\ub97c \uac00\uc838\uc62c \uc624\ube0c\uc81d\ud2b8\ub97c  \uc124\uc815\ud558\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hierarchy \ud0ed"),"\uc5d0\uc11c ",(0,o.kt)("strong",{parentName:"p"},"Skinned Mesh Renderer \ucef4\ud3ec\ub10c\ud2b8"),"\ub97c \uac00\uc9c4 \uc624\ube0c\uc81d\ud2b8\ub97c \uc120\ud0dd \ud6c4 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8"))," \ud558\uc5ec \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"transfer"},"Transfer"),(0,o.kt)("p",null,"\uc6e8\uc774\ud2b8 \ubcf5\uc0ac\ub97c \uc2e4\ud589\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4. \ucc38\uc870\ud560 \uc624\ube0c\uc81d\ud2b8\uac00 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc5b4\uc57c \uc2e4\ud589 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,o.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/ASXEP9A7vcs",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},42221:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_WeightTransfer-28167c9c8a0260ded7147c940e3159b4.png"},38301:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_WeightTransfer_Properties-1142aec9d536ec23ba6664b969ce6f8d.png"},12983:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_WeightTransfer_Properties_Slot1-656052dd8132ed52031636b771f08676.png"},75382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rigging_WeightTransfer_Result-0a28b89c1571635fee1f8eb2748772b2.png"}}]);