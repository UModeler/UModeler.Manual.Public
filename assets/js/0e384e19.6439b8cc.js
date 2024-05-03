"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),a=r(86010),i=r(53438),o=r(39960),s=r(13919),l=r(95999);const c="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},r)}function g(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(g,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(52991);const i={sidebar_position:1},o="UModeler X Manual",s={unversionedId:"intro",id:"intro",title:"UModeler X Manual",description:"Intro Main",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/getting-started"}},l={},c=[{value:"<strong>1. Getting Started</strong>",id:"1-getting-started",level:2},{value:"<strong>2. Video Tutorial</strong>",id:"2-video-tutorial",level:2},{value:"<strong>3. Editable Mesh</strong>",id:"3-editable-mesh",level:2},{value:"<strong>4. FAQ and Trouble Shooting</strong>",id:"4-faq-and-trouble-shooting",level:2},{value:"<strong>5. Release Notes</strong>",id:"5-release-notes",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"umodeler-x-manual"},"UModeler X Manual"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Intro Main",src:r(86341).Z,width:"2596",height:"1538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UModeler X")," is a powerful 3D content creation solution available for use in the ",(0,a.kt)("strong",{parentName:"p"},"Unity editor"),". It is designed with an easy-to-understand interface that allows everyone from beginners to experts to easily use functions such as ",(0,a.kt)("strong",{parentName:"p"},"modeling"),", ",(0,a.kt)("strong",{parentName:"p"},"UV unwrapping"),", ",(0,a.kt)("strong",{parentName:"p"},"rigging"),", ",(0,a.kt)("strong",{parentName:"p"},"painting")," and ",(0,a.kt)("strong",{parentName:"p"},"AI texturing")," within the Unity editor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Migrate to UModeler X Result",src:r(56924).Z,width:"2625",height:"1188"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UModeler X")," provides a complete 3D content creation pipeline within the ",(0,a.kt)("strong",{parentName:"p"},"Unity environment"),", allowing users to perform all 3D content creation tasks within Unity without the need for separate external 3D programs."),(0,a.kt)("p",null,"Below are the main categories of this manual and a brief description of each category."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"1-getting-started"},(0,a.kt)("strong",{parentName:"h2"},"1. Getting Started")),(0,a.kt)("p",null,"This is a guide for first-time users of ",(0,a.kt)("strong",{parentName:"p"},"UModeler X"),". You can check step by step, from ",(0,a.kt)("strong",{parentName:"p"},"how to install")," it to ",(0,a.kt)("strong",{parentName:"p"},"basic usage")," methods."),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Getting Started"),(0,a.kt)("a",{href:"/docs/getting-started",class:"card-link"},"Check"))),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Unity Developer"),(0,a.kt)("p",null,"This page includes an installation guide and getting started video for Unity developers."),(0,a.kt)("a",{href:"https://unity.umodeler.com/getting-started",class:"card-link"},"Learn")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Zepeto Creator"),(0,a.kt)("p",null,"This page includes an installation guide and getting started video for Zepeto creators."),(0,a.kt)("a",{href:"https://zepeto.umodeler.com/getting-started",class:"card-link"},"Learn"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2-video-tutorial"},(0,a.kt)("strong",{parentName:"h2"},"2. Video Tutorial")),(0,a.kt)("p",null,"This is a video tutorial that explains the various features of UModeler X step by step."),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("img",{src:"/img/BasicsTutorial_Thumbnail_en.png",alt:"Image description"}),(0,a.kt)("h3",{class:"card-title"},"Basics Tutorial"),(0,a.kt)("p",null,"This tutorial is designed for beginners to give you an overview of the features and basic usage of UModeler X."),(0,a.kt)("a",{href:"/docs/basics-tutorial",class:"card-link"},"Learn")),(0,a.kt)("div",{class:"card"},(0,a.kt)("img",{src:"/img/ZepetoTutorial_Thumbnail_en.png",alt:"Image description"}),(0,a.kt)("h3",{class:"card-title"},"Zepeto Tutorial"),(0,a.kt)("p",null,"This page contains a walkthrough video that explores the features of UModeler X by creating a simple model."),(0,a.kt)("a",{href:"/docs/zepeto",class:"card-link"},"Learn"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"3-editable-mesh"},(0,a.kt)("strong",{parentName:"h2"},"3. Editable Mesh")),(0,a.kt)("p",null,"You can see a detailed description of Editable Mesh, which is a core feature of UModeler X."),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Modeling Mode"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Modeling mode")," is the default mode for editable meshes, and its primary function is mesh editing."),(0,a.kt)("a",{href:"/docs/modeling-mode",class:"card-link"},"Learn")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Modifier System"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"The Modifier system")," can deform the original model in a non-destructive way."),(0,a.kt)("a",{href:"/docs/modifier",class:"card-link"},"Learn")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"UV Editor"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"The UV Editor")," can create and edit UV elements (UV Vertex, UV Edge, and UV Face)."),(0,a.kt)("a",{href:"/docs/uv-editor",class:"card-link"},"Learn"))),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Rigging Mode"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Rigging Mode")," is for animating your model, allowing you to assign weights to meshes and edit weights."),(0,a.kt)("a",{href:"/docs/rigging-mode",class:"card-link"},"Learn")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Painting Mode"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Painting Mode")," is for painting colors on the model, where you can use layers and brushes to express colors and create textures."),(0,a.kt)("a",{href:"/docs/painting-mode",class:"card-link"},"Learn"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"4-faq-and-trouble-shooting"},(0,a.kt)("strong",{parentName:"h2"},"4. FAQ and Trouble Shooting")),(0,a.kt)("p",null,"Check common questions and answers about UModeler X, as well as solutions to various problems you may face while using UModeler X."),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"FAQ"),(0,a.kt)("a",{href:"/docs/faq",class:"card-link"},"Check")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"Trouble Shooting"),(0,a.kt)("a",{href:"/docs/troubleshooting",class:"card-link"},"Check"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"5-release-notes"},(0,a.kt)("strong",{parentName:"h2"},"5. Release Notes")),(0,a.kt)("p",null,"You can check the update contents by version and improvements for UModeler X and Hub."),(0,a.kt)("div",{class:"card-container"},(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"UModeler X Release Note"),(0,a.kt)("a",{href:"/docs/releasenote/umodelerx",class:"card-link"},"Check")),(0,a.kt)("div",{class:"card"},(0,a.kt)("h3",{class:"card-title"},"UModeler Hub Release Note"),(0,a.kt)("a",{href:"/docs/releasenote/umodelerhub",class:"card-link"},"Check"))))}u.isMDXComponent=!0},56924:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/for-um-users_MigratetoUModelerX_Result-d6fa789c3cb1881fc8e4bbd7326b5852.png"},86341:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Manual_Intro_Main-8a771b72d9edba351f4310e65d76dde5.png"}}]);