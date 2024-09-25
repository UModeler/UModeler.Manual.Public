"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},g),{},{components:n})):a.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/rigging/weight-tool",sidebar_position:2,description:""},l="Weight \ud234",o={unversionedId:"editable-mesh/rigging-mode/weight-tool",id:"editable-mesh/rigging-mode/weight-tool",title:"Weight \ud234",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/editable-mesh/rigging-mode/weight-tool.md",sourceDirName:"editable-mesh/rigging-mode",slug:"/rigging/weight-tool",permalink:"/ko/docs/rigging/weight-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/rigging/weight-tool",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"\ub9ac\uae45 \ubaa8\ub4dc \uac00\uc774\ub4dc",permalink:"/ko/docs/rigging/guide"},next:{title:"Weight Brush \ud234",permalink:"/ko/docs/rigging/weight-brush-tool"}},s={},c=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>\uc18d\uc131</strong>",id:"\uc18d\uc131",level:2},{value:"Apply Weight",id:"apply-weight",level:3},{value:"<strong>Select</strong>",id:"select",level:3},{value:"Backface Select",id:"backface-select",level:3},{value:"Camera Based Select",id:"camera-based-select",level:3},{value:"<strong>Basic</strong>",id:"basic",level:3},{value:"Show Handler",id:"show-handler",level:3},{value:"Show Bones",id:"show-bones",level:3},{value:"Show Bones Names",id:"show-bones-names",level:3},{value:"Enable Clicking On Bones",id:"enable-clicking-on-bones",level:3},{value:"Apply Animation",id:"apply-animation",level:3},{value:"\ubbf8\ub9ac \uc815\ud574\uc9c4 \uc6e8\uc774\ud2b8 \ubc84\ud2bc",id:"\ubbf8\ub9ac-\uc815\ud574\uc9c4-\uc6e8\uc774\ud2b8-\ubc84\ud2bc",level:3},{value:"Apply Weight",id:"apply-weight-1",level:3},{value:"Scale Weight",id:"scale-weight",level:3},{value:"<strong>\uc0ac\uc6a9 \uc608\uc2dc</strong>",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],g={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"weight-\ud234"},"Weight \ud234"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Tool",src:n(4309).Z,width:"1624",height:"603"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Weight \ud234"),"\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,i.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\uc52c")," \ub610\ub294 ",(0,i.kt)("strong",{parentName:"p"},"Bone Tree \uc601\uc5ed"),"\uc5d0\uc11c \uc6d0\ud558\ub294 \ubcf8\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Bone Select",src:n(47128).Z,width:"684",height:"384"})),(0,i.kt)("admonition",{parentName:"li",title:"\ud301",type:"tip"},(0,i.kt)("h2",{parentName:"admonition",id:"\ub2e8\ucd95\ud0a4-shift\ud074\ub9ad"},(0,i.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad"))),(0,i.kt)("p",{parentName:"admonition"},"\ub2e8\ucd95\ud0a4\ub97c \ud1b5\ud574 ",(0,i.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \ubcf8\uc744 \uc52c\uc5d0\uc11c \ubc14\ub85c \uc120\ud0dd"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/zM2iy-vARhU",frameborder:"0",allowfullscreen:""})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Weight \ud234"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uc120\ud0dd\ud55c \ubcf8\uacfc \uc5f0\uacb0\ud560 \ubc84\ud14d\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Weight Tool Select Vertex",src:n(42251).Z,width:"776",height:"575"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ubc84\ud14d\uc2a4\uac00 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"Apply Weight \uc18d\uc131 \uc870\uc808"),"\ud558\uac70\ub098 ",(0,i.kt)("strong",{parentName:"p"},"\uc6d0\ud558\ub294 \uc6e8\uc774\ud2b8 \uac12 \ubc84\ud2bc"),"\uc744 \ub204\ub985\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Weight Tool Select Vertex",src:n(89012).Z,width:"941",height:"245"}),"\n",(0,i.kt)("img",{alt:"Weight Tool Select Weight",src:n(83058).Z,width:"776",height:"575"}),"    ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\uac00 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Weight Tool Result",src:n(46247).Z,width:"776",height:"575"})))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc18d\uc131"},(0,i.kt)("strong",{parentName:"h2"},"\uc18d\uc131")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Tool Properties",src:n(88600).Z,width:"920",height:"568"})),(0,i.kt)("h3",{id:"apply-weight"},"Apply Weight"),(0,i.kt)("p",null,"\ud560\ub2f9\ud560 \uc6e8\uc774\ud2b8 \uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"select"},(0,i.kt)("strong",{parentName:"h3"},"Select")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Tool Properties Select",src:n(6723).Z,width:"920",height:"190"})),(0,i.kt)("p",null,"\ubc84\ud14d\uc2a4\uc758 \uc120\ud0dd \ubc29\uc2dd\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"backface-select"},"Backface Select"),(0,i.kt)("p",null,"\ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\uace0 \uc788\ub294 \ubc84\ud14d\uc2a4\uc758 \uc120\ud0dd \uc5ec\ubd80\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vertex Backface Select Off",src:n(89109).Z,width:"1920",height:"640"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \ubc84\ud14d\uc2a4\uac00 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vertex Backface Select On",src:n(37681).Z,width:"1920",height:"640"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Backface Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \ubc18\ub300\ud3b8\uc744 \ud5a5\ud558\ub294 \ubc84\ud14d\uc2a4\ub3c4 \ud568\uaed8 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"camera-based-select"},"Camera Based Select"),(0,i.kt)("p",null,"\uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c \ud604\uc7ac \ubcf4\uc5ec\uc9c0\ub294 \ubc84\ud14d\uc2a4\ub9cc \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vertex Camera Based Select Off",src:n(35692).Z,width:"1920",height:"640"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \ubc84\ud14d\uc2a4\ub3c4 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vertex Camera Based Select On",src:n(8653).Z,width:"1920",height:"640"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Camera Based Select \uc18d\uc131"),"\uc774 \ucf1c\uc838 \uc788\uc744 \ub54c\ub294, \uce74\uba54\ub77c\uc5d0 \uac00\ub824\uc9c4 \ubc84\ud14d\uc2a4\ub294 \uc120\ud0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"basic"},(0,i.kt)("strong",{parentName:"h3"},"Basic")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weight Tool Properties Basic",src:n(45730).Z,width:"800",height:"400"})),(0,i.kt)("p",null,"\ub9ac\uae45 \ud3b8\uc758\ub97c \uc704\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"show-handler"},"Show Handler"),(0,i.kt)("p",null,"\ubcf8\uc758 \uc774\ub3d9\uc774\ub098 \ud68c\uc804\uc744 \ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc744 \ubcf4\uc774\uac8c \ud558\uac70\ub098 \uac10\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"show-bones"},"Show Bones"),(0,i.kt)("p",null,"\ubcf8\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"show-bones-names"},"Show Bones Names"),(0,i.kt)("p",null,"\ubcf8\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"enable-clicking-on-bones"},"Enable Clicking On Bones"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Shift+\ud074\ub9ad")),"\uc744 \ud1b5\ud574 ",(0,i.kt)("strong",{parentName:"p"},"\ubcf8\uc744 \uc120\ud0dd\ud560\uc9c0\uc5d0 \ub300\ud55c \ud65c\uc131\ud654 \uc5ec\ubd80"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"apply-animation"},"Apply Animation"),(0,i.kt)("h3",{id:"\ubbf8\ub9ac-\uc815\ud574\uc9c4-\uc6e8\uc774\ud2b8-\ubc84\ud2bc"},"\ubbf8\ub9ac \uc815\ud574\uc9c4 \uc6e8\uc774\ud2b8 \ubc84\ud2bc"),(0,i.kt)("p",null,"\uc120\ud0dd\ub41c \ubc84\ud14d\uc2a4\uc5d0 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"apply-weight-1"},"Apply Weight"),(0,i.kt)("p",null,"\ud560\ub2f9\ud560 \uc6e8\uc774\ud2b8 \uac12\uc744 \uc124\uc815\ud558\uac70\ub098 \uc6e8\uc774\ud2b8\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"scale-weight"},"Scale Weight"),(0,i.kt)("p",null,"\uc120\ud0dd\ud55c \ubc84\ud14d\uc2a4\uc758 \uc6e8\uc774\ud2b8\uc5d0 \uac12\uc744 \uacf1\ud574\uc8fc\uac70\ub098 \uacf1\ud574\uc904 \uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},(0,i.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \uc608\uc2dc")),(0,i.kt)("div",{class:"video-container-4-3"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/-PEKtEOW9zU",frameborder:"0",allowfullscreen:""})))}p.isMDXComponent=!0},89109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Vertex_BackFaceOff-198d8cdc85bb6c41ed53a8658a878944.png"},37681:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Vertex_BackFaceOn-96dfae9ac5060a0cdf6abd5c06c9bf5d.png"},35692:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Vertex_CameraBasedOff-2f22207c5ff0acad0d733304fa6487df.png"},8653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Element_Vertex_CameraBasedOn-827a4e95e272938d9bcca6373ad30e71.png"},47128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_SelectBone-a08f217a2da7ae53b487bedbe3bd0c4e.png"},4309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight-c127fcccb4486c4099b20bdd9e56cd67.png"},88600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_Properties-9de664c14c02e703b599cc6506b4d38f.png"},45730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_Properties_Basic-1142aec9d536ec23ba6664b969ce6f8d.png"},46247:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_Result-9ecebe7488fb28af4367b34cd0e1ea12.png"},6723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_Select-9ff0a1b97267fcbff63fb3665c03bfa0.png"},42251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_SelectVertex-64d642b0fd1e914d248cfbd65fde87f5.png"},83058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_SetWeight-f941b71b0c6c8cd75345bf4fc4c85ae3.png"},89012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Weight_WeightSet1-2b7b423b59e83af86ad7288abc84f522.png"}}]);