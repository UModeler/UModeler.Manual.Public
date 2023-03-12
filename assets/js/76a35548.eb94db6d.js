"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[7391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=l,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return r?a.createElement(g,n(n({ref:t},m),{},{components:r})):a.createElement(g,n({ref:t},m))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,n[1]=i;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(67294),l=r(86010),o=r(53438),n=r(39960),i=r(13919),s=r(95999);const c="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return a.createElement(n.Z,{href:t,className:(0,l.Z)("card padding--lg",c)},r)}function u(e){let{href:t,icon:r,title:o,description:n}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",m),title:o},r," ",o),n&&a.createElement("p",{className:(0,l.Z)("text--truncate",p),title:n},n))}function g(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?a.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:r,title:t.label,description:l?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return a.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return a.createElement(b,e);const n=(0,o.MN)(t);return a.createElement("section",{className:(0,l.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},76614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var a=r(87462),l=(r(67294),r(3905)),o=r(52991);const n={slug:"/modeling/multi-material-tool",sidebar_position:3},i="Material Tool",s={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/material-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/material-tool",title:"Material Tool",description:"Material Tool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/modeling-mode/modeling-mode-multiple-objects/material-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-material-tool",permalink:"/docs/modeling/multi-material-tool",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/modeling/multi-material-tool",sidebar_position:3},sidebar:"docs",previous:{title:"Combine Tool",permalink:"/docs/modeling/combine-tool"},next:{title:"Pivot To Center Tool",permalink:"/docs/modeling/multi-pivot-to-center-tool"}},c={},m=[{value:"<strong>How to Use</strong>",id:"how-to-use",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Material",id:"material",level:3},{value:"Apply",id:"apply",level:3},{value:"Reset",id:"reset",level:3},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"material-tool"},"Material Tool"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Material Tool",src:r(39353).Z,width:"1920",height:"640"})),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Material tool")," in the ",(0,l.kt)("strong",{parentName:"p"},"Multiple Objects group")," is a tool that allows you to set a single material on multiple objects, or reset them to the UModelerX default material."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("h2",{parentName:"admonition",id:"different-from-the-material-tool-in-the-surface-group"},(0,l.kt)("strong",{parentName:"h2"},"Different from the Material tool in the Surface group")),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{alt:"Material Tool",src:r(13846).Z,width:"1920",height:"640"})),(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("strong",{parentName:"p"},"Material tool")," in the ",(0,l.kt)("strong",{parentName:"p"},"Surface group")," is different in that it allows you to ",(0,l.kt)("strong",{parentName:"p"},"apply materials, add materials, and delete applied materials")," on a per-face basis."),(0,l.kt)(o.Z,{items:[{type:"link",label:"Material Tool",href:"../modeling/material-tool"}],mdxType:"DocCardList"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"how-to-use"},(0,l.kt)("strong",{parentName:"h2"},"How to Use")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Multiple UModeler X objects"),".\n",(0,l.kt)("img",{alt:"Material Tool Select Object",src:r(82720).Z,width:"1138",height:"640"})),(0,l.kt)("li",{parentName:"ol"},"Launch the ",(0,l.kt)("strong",{parentName:"li"},"Material Tool"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Select the Material")," to apply to the ",(0,l.kt)("strong",{parentName:"li"},"Material Properties"),".\n",(0,l.kt)("img",{alt:"Material Tool Select Material",src:r(65178).Z,width:"1140",height:"266"})),(0,l.kt)("li",{parentName:"ol"},"Run the ",(0,l.kt)("strong",{parentName:"li"},"Apply Property"),".\n",(0,l.kt)("img",{alt:"Material Tool Apply",src:r(57409).Z,width:"1140",height:"266"})),(0,l.kt)("li",{parentName:"ol"},"The Material has been applied to the selected objects in bulk.\n",(0,l.kt)("img",{alt:"Material Tool Result",src:r(70110).Z,width:"1138",height:"640"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},(0,l.kt)("strong",{parentName:"h2"},"Properties")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Material Tool Properties",src:r(67429).Z,width:"1140",height:"266"})),(0,l.kt)("h3",{id:"material"},"Material"),(0,l.kt)("p",null,"Property to select the desired material."),(0,l.kt)("h3",{id:"apply"},"Apply"),(0,l.kt)("p",null,"Property that applies the selected material to the object."),(0,l.kt)("h3",{id:"reset"},"Reset"),(0,l.kt)("p",null,"This property resets the selected object's material to the UModeler X default material."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"example-usage"},(0,l.kt)("strong",{parentName:"h2"},"Example Usage")))}d.isMDXComponent=!0},39353:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material-dc6fee2a7deb8aab863bda25e3735599.png"},57409:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_Apply-812ff0e776eb5c2b17713735b75df366.png"},67429:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_Properties-3e950cc93c58893824c475f1b540d88e.png"},70110:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_Result-720dcd7622cfd0e2da9df5c0d5ca7fa4.png"},65178:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_SelectMaterial-27bc861c5abcd0049da1c6a014d94d9a.png"},82720:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_MultipleObjects_Material_SelectObject-4f8e1c07b9b1a9512a579cd5e68d92c0.png"},13846:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Modeling_Surface_Material-9648ea3e950f5ed089ff1f87f5dc1263.png"}}]);