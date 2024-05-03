"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1797],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),p=a(67392),m=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,p]=h({queryString:a,groupId:r}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=l??u;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var g=a(72389);const y="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),r=p[a].value;r!==s&&(u(t),l(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:d},i,{className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},82324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const s={sidebar_position:1,slug:"/painting/layerMask",description:""},l="Layer Mask",p={unversionedId:"editable-mesh/painting-mode/painting-mode-layer/layerMask",id:"editable-mesh/painting-mode/painting-mode-layer/layerMask",title:"Layer Mask",description:"",source:"@site/docs/editable-mesh/painting-mode/painting-mode-layer/layerMask.md",sourceDirName:"editable-mesh/painting-mode/painting-mode-layer",slug:"/painting/layerMask",permalink:"/docs/painting/layerMask",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/painting/layerMask",description:""},sidebar:"docs",previous:{title:"Layers Group",permalink:"/docs/painting-layers"},next:{title:"Group Layer",permalink:"/docs/painting/group-layer"}},m={},u=[{value:"<strong>How to use it</strong>",id:"how-to-use-it",level:2},{value:"<strong>Properties</strong>",id:"properties",level:2},{value:"Add Black Mask",id:"add-black-mask",level:3},{value:"Add White Mask",id:"add-white-mask",level:3},{value:"Add AO Mask",id:"add-ao-mask",level:3},{value:"Remove Mask",id:"remove-mask",level:3},{value:"<strong>Layer Mask Properties Group Properties</strong>",id:"layer-mask-properties-group-properties",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2}],d={toc:u};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"layer-mask"},"Layer Mask"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Layer Masks",src:a(42911).Z,width:"2087",height:"1230"})),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"layer mask")," is a property that masks a ",(0,n.kt)("strong",{parentName:"p"},"specific area")," of a layer."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-use-it"},(0,n.kt)("strong",{parentName:"h2"},"How to use it")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"select the layer you want to add a layer mask to."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Click")," the Layer Mask button.\n",(0,n.kt)("img",{alt:"Layer Masks",src:a(70969).Z,width:"865",height:"523"})),(0,n.kt)("li",{parentName:"ol"},"Select either ",(0,n.kt)("strong",{parentName:"li"},"Add Black Mask")," or ",(0,n.kt)("strong",{parentName:"li"},"Add White Mask"),"."),(0,n.kt)("li",{parentName:"ol"},"A layer mask has been added to the selected layer.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("strong",{parentName:"h2"},"Properties")),(0,n.kt)("h3",{id:"add-black-mask"},"Add Black Mask"),(0,n.kt)("p",null,"This property adds a black layer mask. As a result, all materials on the assigned layer will be hidden."),(0,n.kt)("h3",{id:"add-white-mask"},"Add White Mask"),(0,n.kt)("p",null,"Property that adds a white layer mask."),(0,n.kt)("h3",{id:"add-ao-mask"},"Add AO Mask"),(0,n.kt)("p",null,"Property that adds an Ambient Occlusion (AO) layer mask."),(0,n.kt)("h3",{id:"remove-mask"},"Remove Mask"),(0,n.kt)("p",null,"Properties to ",(0,n.kt)("strong",{parentName:"p"},"remove the selected layer mask"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"layer-mask-properties-group-properties"},(0,n.kt)("strong",{parentName:"h2"},"Layer Mask Properties Group Properties")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Properties group")," is an area where the ",(0,n.kt)("strong",{parentName:"p"},"content")," varies depending on the feature selected, such as a tool or layer."),(0,n.kt)("p",null,"The properties displayed in the ",(0,n.kt)("strong",{parentName:"p"},"Properties group")," when ",(0,n.kt)("strong",{parentName:"p"},"Layer Mask")," is selected are shown below."),(0,n.kt)(o.Z,{defaultValue:"Brush",values:[{label:"Brush",value:"Brush"},{label:"Erase",value:"Erase"},{label:"Rect Fill",value:"Rect Fill"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Brush",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Properties Tab",type:"note"},(0,n.kt)("h1",{parentName:"admonition",id:"brush"},"Brush"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Layer Masks Brush",src:a(99190).Z,width:"1020",height:"727"})),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Brush tool")," is a tool that allows you to ",(0,n.kt)("strong",{parentName:"p"},"apply mask values by painting"),"."),(0,n.kt)("hr",{parentName:"admonition"}),(0,n.kt)("h3",{parentName:"admonition",id:"screensizebrush"},"ScreenSizeBrush"),(0,n.kt)("p",{parentName:"admonition"},"Property that sets the brush size of the ",(0,n.kt)("strong",{parentName:"p"},"Brush tool")," in ",(0,n.kt)("strong",{parentName:"p"},"pixels"),", which when unset sets the brush size relative to its ",(0,n.kt)("strong",{parentName:"p"},"size on the world"),"."),(0,n.kt)("p",{parentName:"admonition"},"You can set the size in the ",(0,n.kt)("strong",{parentName:"p"},"Size property"),"."),(0,n.kt)("h3",{parentName:"admonition",id:"size"},"Size"),(0,n.kt)("p",{parentName:"admonition"},"Property that sets the size of the brush."),(0,n.kt)("h3",{parentName:"admonition",id:"opacity"},"Opacity"),(0,n.kt)("p",{parentName:"admonition"},"This property allows you to set the ",(0,n.kt)("strong",{parentName:"p"},"opacity")," of the mask value being painted."),(0,n.kt)("h3",{parentName:"admonition",id:"hardness"},"Hardness"),(0,n.kt)("p",{parentName:"admonition"},"Property that allows you to set how sharp the edges of the brush in the ",(0,n.kt)("strong",{parentName:"p"},"Brush Tool")," are."),(0,n.kt)("h3",{parentName:"admonition",id:"jittering"},"Jittering"),(0,n.kt)("p",{parentName:"admonition"},"This property sets the amount of randomization of the strokes, which are the lines created by the brush input of the ",(0,n.kt)("strong",{parentName:"p"},"Brush Tool"),"."),(0,n.kt)("h3",{parentName:"admonition",id:"spacing"},"Spacing"),(0,n.kt)("p",{parentName:"admonition"},"Property that allows you to set the spacing of the brush strokes generated by the ",(0,n.kt)("strong",{parentName:"p"},"Brush tool"),"."),(0,n.kt)("h3",{parentName:"admonition",id:"mask-value"},"Mask Value"),(0,n.kt)("p",{parentName:"admonition"},"This property allows you to set the mask value that will be painted."))),(0,n.kt)(i.Z,{value:"Erase",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Properties Tab",type:"note"},(0,n.kt)("h1",{parentName:"admonition",id:"erase"},"Erase"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Layer Masks Erase",src:a(22733).Z,width:"1020",height:"727"})),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Erase tool")," is a tool that allows you to ",(0,n.kt)("strong",{parentName:"p"},"remove painted mask values"),"."),(0,n.kt)("hr",{parentName:"admonition"}),(0,n.kt)("h3",{parentName:"admonition",id:"screensizebrush-1"},"ScreenSizeBrush"),(0,n.kt)("p",{parentName:"admonition"},"Property that sets the size of the brush for the ",(0,n.kt)("strong",{parentName:"p"},"Erase tool")," in ",(0,n.kt)("strong",{parentName:"p"},"pixels"),", which when turned off sets the brush size relative to its ",(0,n.kt)("strong",{parentName:"p"},"size on the world"),"."),(0,n.kt)("p",{parentName:"admonition"},"You can set the size in the ",(0,n.kt)("strong",{parentName:"p"},"Size property"),"."),(0,n.kt)("h3",{parentName:"admonition",id:"size-1"},"Size"),(0,n.kt)("p",{parentName:"admonition"},"Property that sets the size of the brush for the ",(0,n.kt)("strong",{parentName:"p"},"Erase tool"),"."),(0,n.kt)("h3",{parentName:"admonition",id:"opacity-1"},"Opacity"),(0,n.kt)("p",{parentName:"admonition"},"This property allows you to ",(0,n.kt)("strong",{parentName:"p"},"adjust the opacity")," of the erasure."),(0,n.kt)("h3",{parentName:"admonition",id:"hardness-1"},"Hardness"),(0,n.kt)("p",{parentName:"admonition"},"This property allows you to set how sharp the edges of the Erase Tool's brush are."),(0,n.kt)("h3",{parentName:"admonition",id:"jittering-1"},"Jittering"),(0,n.kt)("p",{parentName:"admonition"},"This property sets the amount of randomization of the strokes produced by the Erase Tool's brush input."),(0,n.kt)("h3",{parentName:"admonition",id:"spacing-1"},"Spacing"),(0,n.kt)("p",{parentName:"admonition"},"This property allows you to set how far apart the brush input of the ",(0,n.kt)("strong",{parentName:"p"},"Erase Tool")," is spaced."))),(0,n.kt)(i.Z,{value:"Rect Fill",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Property Tab",type:"note"},(0,n.kt)("h1",{parentName:"admonition",id:"rect-fill"},"Rect Fill"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Layer Masks Rect Fill",src:a(6204).Z,width:"1020",height:"727"})),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Rect Fill tool")," is a tool that allows you to ",(0,n.kt)("strong",{parentName:"p"},"apply a mask value to a face")," via the ",(0,n.kt)("strong",{parentName:"p"},"Mode property"),"."),(0,n.kt)("hr",{parentName:"admonition"}),(0,n.kt)("h3",{parentName:"admonition",id:"mode"},"Mode"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Layer Masks Rect Fill Mode",src:a(94937).Z,width:"796",height:"306"})),(0,n.kt)("p",{parentName:"admonition"},"Properties for how the **Rect Fill tool works."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Polygon Fill")),(0,n.kt)("p",{parentName:"admonition"},"Tool that allows you to apply a mask value to a face when you ",(0,n.kt)("strong",{parentName:"p"},"click")," on the face."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Rect Fill")),(0,n.kt)("p",{parentName:"admonition"},"A tool that allows you to create a rectangular region by ",(0,n.kt)("strong",{parentName:"p"},"clicking and dragging")," in the scene, and apply a mask value to the faces that fall within it."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Polygonal Lasso Fill")),(0,n.kt)("p",{parentName:"admonition"},"This tool creates a polygonal region along vertices by ",(0,n.kt)("strong",{parentName:"p"},"clicking")," in the scene, and applies a mask value to the faces that fall within it."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Island Fill")),(0,n.kt)("p",{parentName:"admonition"},"A tool used with the ",(0,n.kt)("strong",{parentName:"p"},"Painting 2D Editor")," that allows you to ",(0,n.kt)("strong",{parentName:"p"},"click")," on a UV island in the ",(0,n.kt)("strong",{parentName:"p"},"Painting 2D Editor")," and apply a mask value to it."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Isolation Fill")),(0,n.kt)("p",{parentName:"admonition"},"A tool used with the ",(0,n.kt)("strong",{parentName:"p"},"Painting 2D Editor")," that allows you to apply a mask value to all connected elements by clicking on a UV face in the ",(0,n.kt)("strong",{parentName:"p"},"Painting 2D Editor"),"."),(0,n.kt)("h3",{parentName:"admonition",id:"mask-value-1"},"Mask Value"),(0,n.kt)("p",{parentName:"admonition"},"A property that allows you to set the mask value to be applied."),(0,n.kt)("h3",{parentName:"admonition",id:"camera-based-select"},"Camera Based Select"),(0,n.kt)("p",{parentName:"admonition"},"A property that applies a mask value to only the ",(0,n.kt)("strong",{parentName:"p"},"currently visible face")," based on the camera."),(0,n.kt)("h3",{parentName:"admonition",id:"trianglemode"},"TriangleMode"),(0,n.kt)("p",{parentName:"admonition"},"This property applies the mask value to the triangular mesh that makes up the face."),(0,n.kt)("h3",{parentName:"admonition",id:"erase-1"},"Erase"),(0,n.kt)("p",{parentName:"admonition"},"This property deletes the applied mask value."),(0,n.kt)("h3",{parentName:"admonition",id:"opacity-2"},"Opacity"),(0,n.kt)("p",{parentName:"admonition"},"A property that allows you to ",(0,n.kt)("strong",{parentName:"p"},"set the opacity")," of the applied mask value.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"example-usage"},(0,n.kt)("strong",{parentName:"h2"},"Example Usage")),(0,n.kt)("div",{class:"video-container-4-3"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/jPiEMTvfm1A",frameborder:"0",allowfullscreen:""})))}c.isMDXComponent=!0},42911:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers_LayerMask-26f01fc4a6236b15e76823ca73a67304.png"},70969:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers_Mask-21847331993322e884443025bf5247fb.png"},99190:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers_Mask_Brush-8447c0ed24dbf70d3838c65b453d288a.png"},22733:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers_Mask_Erase-642bff5b8ed2c4e14498dfd7b6407b36.png"},6204:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers_Mask_RectFill-e9edf882a76ac25c1b0c1b39b1e5b39d.png"},94937:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PaintingMode_Layers_Mask_RectFill_Mode-939ff69883922f996162063ad22e44ca.png"}}]);