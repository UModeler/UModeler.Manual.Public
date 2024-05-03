"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[230],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(o),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return o?n.createElement(f,a(a({ref:t},m),{},{components:o})):n.createElement(f,a({ref:t},m))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},52991:(e,t,o)=>{o.d(t,{Z:()=>v});var n=o(67294),r=o(86010),i=o(53438),a=o(39960),l=o(13919),c=o(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:o}=e;return n.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",s)},o)}function u(e){let{href:t,icon:o,title:i,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},o," ",i),a&&n.createElement("p",{className:(0,r.Z)("text--truncate",p),title:a},a))}function f(e){let{item:t}=e;const o=(0,i.Wl)(t);return o?n.createElement(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const o=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:o,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const o=(0,i.jA)();return n.createElement(v,{items:o.items,className:t})}function v(e){const{items:t,className:o}=e;if(!t)return n.createElement(b,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",o)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},20454:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=o(87462),r=(o(67294),o(3905)),i=o(52991);const a={slug:"/modeling/multi-pivot-tool",sidebar_position:2,description:""},l="Pivot Tool",c={unversionedId:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/pivot-tool",id:"editable-mesh/modeling-mode/modeling-mode-multiple-objects/pivot-tool",title:"Pivot Tool",description:"",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-multiple-objects/pivot-tool.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-multiple-objects",slug:"/modeling/multi-pivot-tool",permalink:"/docs/modeling/multi-pivot-tool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/modeling/multi-pivot-tool",sidebar_position:2,description:""},sidebar:"docs",previous:{title:"Combine Tool",permalink:"/docs/modeling/combine-tool"},next:{title:"Reset X Form Tool",permalink:"/docs/modeling/multi-reset-xform-tool"}},s={},m=[{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pivot-tool"},"Pivot Tool"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Pivot Tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"Multiple Objects Group")," is a tool for setting the ",(0,r.kt)("strong",{parentName:"p"},"pivot position")," of multiple selected objects, allowing you to change the pivot to the ",(0,r.kt)("strong",{parentName:"p"},"Center, Top Center, Bottom Center, Gizmo Location")," of the objects."),(0,r.kt)("p",null,"It is the same as the ",(0,r.kt)("strong",{parentName:"p"},"Pivot Tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"Misc Group"),", except that it can be applied to multiple objects at once."),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"how-it-differs-from-the-pivot-tool-in-the-misc-group"},"How it differs from the ",(0,r.kt)("strong",{parentName:"h2"},"Pivot Tool")," in the ",(0,r.kt)("strong",{parentName:"h2"},"Misc Group")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Pivot Tool",src:o(65162).Z,width:"1362",height:"560"})),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Pivot Tool")," in the ",(0,r.kt)("strong",{parentName:"p"},"Misc Group")," is different in that it can only ",(0,r.kt)("strong",{parentName:"p"},"set the pivot position")," for the one model that is selected and being edited."),(0,r.kt)(i.Z,{items:[{type:"link",label:"Pivot Tool",href:"/docs/modeling/pivot-tool"}],mdxType:"DocCardList"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-usage"},(0,r.kt)("strong",{parentName:"h2"},"Example Usage")),(0,r.kt)("div",{class:"video-container-4-3"},(0,r.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/LFlbBFFChHg",frameborder:"0",allowfullscreen:""})))}d.isMDXComponent=!0},65162:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Modeling_Misc_Pivot-e735acf07da93e9437b2a0d26969cf3b.png"}}]);