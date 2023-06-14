"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[8821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>v});var i=n(67294),o=n(86010),r=n(53438),a=n(39960),l=n(13919),d=n(95999);const s="cardContainer_fWXF",c="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return i.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:r,description:a}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,o.Z)("text--truncate",c),title:r},n," ",r),a&&i.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?i.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,r.jA)();return i.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return i.createElement(h,e);const a=(0,r.MN)(t);return i.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},32069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=n(87462),o=(n(67294),n(3905)),r=n(52991);const a={slug:"/modeling/subdivide-tool",sidebar_position:5,description:""},l="Subdivide Tool",d={unversionedId:"editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool",id:"editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool",title:"Subdivide Tool",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-add/subdivide-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-add",slug:"/modeling/subdivide-tool",permalink:"/docs/modeling/subdivide-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/modeling/subdivide-tool",sidebar_position:5,description:""},sidebar:"docs",previous:{title:"Bridge Tool",permalink:"/docs/modeling/bridge-tool"},next:{title:"Loop Cut Tool",permalink:"/docs/modeling/loopcut-tool"}},s={},c=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Example of usage</strong>",id:"example-of-usage",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subdivide-tool"},"Subdivide Tool"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Subdivide Tool",src:n(63304).Z,width:"1920",height:"640"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Subdivide tool")," divides the current pace into quarters while simultaneously smoothing out bends."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Running the ",(0,o.kt)("strong",{parentName:"p"},"Subdivide Tool")," will ",(0,o.kt)("strong",{parentName:"p"},"divide the entire face of the selected object into quarters"),", so be careful when running it as it may cause ",(0,o.kt)("strong",{parentName:"p"},"optimization issues with 3D objects due to the large number of faces, momentary editor slowdowns, etc."),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"subdivide-modifier"},"Subdivide Modifier"),(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("strong",{parentName:"p"},"Subdivide tool")," can lead to inefficient modeling because it is applied directly to the underlying mesh."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Subdivide Modifier",src:n(49389).Z,width:"1584",height:"578"})),(0,o.kt)("p",{parentName:"admonition"},"Working through the ",(0,o.kt)("strong",{parentName:"p"},"Subdivide modifier (not a tool)")," allows you to model more efficiently because it allows you to apply deformations to the model while ",(0,o.kt)("strong",{parentName:"p"},"preserving the original mesh"),"."),(0,o.kt)(r.Z,{items:[{type:"link",label:"Subdivide Modifier",href:"/docs/modeling/subdivide-modifier"}],mdxType:"DocCardList"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use-it"},(0,o.kt)("strong",{parentName:"h2"},"How to use it")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("strong",{parentName:"li"},"Subdivide tool"),"."),(0,o.kt)("li",{parentName:"ol"},"the entire face will be quartered and additional faces will be created.\n",(0,o.kt)("img",{alt:"Subdivide Tool",src:n(63304).Z,width:"1920",height:"640"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example-of-usage"},(0,o.kt)("strong",{parentName:"h2"},"Example of usage")),(0,o.kt)("div",{class:"video-container-4-3"},(0,o.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/7Hc3izi9Tf0",frameborder:"0",allowfullscreen:""})))}u.isMDXComponent=!0},63304:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Modeling_Add_Subdivide-c4a8304ad86db6fc5326b7486be7ea78.png"},49389:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Modeling_Modifier_Subdivide-f545980ba8f9e2e9239edfa4f8c690ee.png"}}]);