"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[3010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||k[d]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),p=n(6550),i=n(1980),s=n(7392),m=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function k(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function c(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=k(e),[l,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,s]=g({queryString:n,groupId:a}),[u,c]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),N=(()=>{const e=i??u;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{N&&p(N)}),[N]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),c(e)}),[s,c,o]),tabValues:o}}var N=n(2389);const v="tabList__CuJ",h="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:p,selectValue:i,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),k=e=>{const t=e.currentTarget,n=m.indexOf(t),a=s[n].value;a!==p&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:k},l,{className:(0,o.Z)("tabs__item",h,l?.className,{"tabs__item--active":p===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function V(e){const t=c(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,N.Z)();return r.createElement(V,(0,a.Z)({key:String(t)},e))}},407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const p={slug:"/settings-interface",sidebar_position:2},i="UV \uc5d0\ub514\ud130 \uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4",s={unversionedId:"editable-mesh/uv-editor/uv-editor-settings-interface",id:"editable-mesh/uv-editor/uv-editor-settings-interface",title:"UV \uc5d0\ub514\ud130 \uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4",description:"1. \ud234\ubc14",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/uv-editor/uv-editor-settings-interface.md",sourceDirName:"editable-mesh/uv-editor",slug:"/settings-interface",permalink:"/docs/settings-interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/uv-editor/uv-editor-settings-interface.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/settings-interface",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"UV \uc5d0\ub514\ud130",permalink:"/docs/uv-editor"},next:{title:"Unwrap \uadf8\ub8f9",permalink:"/docs/uveditor-unwrap"}},m={},u=[{value:"<strong>1. \ud234\ubc14</strong>",id:"1-\ud234\ubc14",level:2},{value:"<strong>\ud654\uba74 \uc774\ub3d9\uacfc \ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8</strong>",id:"\ud654\uba74-\uc774\ub3d9\uacfc-\ud2b8\ub79c\uc2a4\ud3fc-\uae30\uc988\ubaa8",level:3},{value:"Hand \ud234",id:"hand-\ud234",level:3},{value:"Move \ud234",id:"move-\ud234",level:3},{value:"Rotation \ud234",id:"rotation-\ud234",level:3},{value:"Scale \ud234",id:"scale-\ud234",level:3},{value:"Rectangle \ud234",id:"rectangle-\ud234",level:3},{value:"<strong>UV \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd</strong>",id:"uv-\uc5d8\ub9ac\uba3c\ud2b8-\uc120\ud0dd",level:3},{value:"UV Vertex \uc120\ud0dd",id:"uv-vertex-\uc120\ud0dd",level:3},{value:"UV Edge \uc120\ud0dd",id:"uv-edge-\uc120\ud0dd",level:3},{value:"UV Face \uc120\ud0dd",id:"uv-face-\uc120\ud0dd",level:3},{value:"UV Island \uc120\ud0dd",id:"uv-island-\uc120\ud0dd",level:3},{value:"<strong>\uc124\uc815\uacfc \ud53c\ubc97</strong>",id:"\uc124\uc815\uacfc-\ud53c\ubc97",level:3},{value:"Cursor \ud234",id:"cursor-\ud234",level:3},{value:"\uae30\uc988\ubaa8 \uc804\ud658 \ud234",id:"\uae30\uc988\ubaa8-\uc804\ud658-\ud234",level:3},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"<strong>2. \uc124\uc815 \uc601\uc5ed</strong>",id:"2-\uc124\uc815-\uc601\uc5ed",level:2},{value:"Snap Type",id:"snap-type",level:3},{value:"ShowIslandBoundary",id:"showislandboundary",level:3},{value:"FillPolygons",id:"fillpolygons",level:3},{value:"ShowGrid",id:"showgrid",level:3},{value:"ShowAxes",id:"showaxes",level:3},{value:"ShowTexture",id:"showtexture",level:3},{value:"EnableAlphaChannel",id:"enablealphachannel",level:3},{value:"TexXNum",id:"texxnum",level:3},{value:"TexYNum",id:"texynum",level:3},{value:"Material",id:"material",level:3},{value:"All",id:"all",level:4},{value:"<strong>3. \uc791\uc5c5 \uc601\uc5ed</strong>",id:"3-\uc791\uc5c5-\uc601\uc5ed",level:2},{value:"<strong>4. UV \ud234 \uc601\uc5ed</strong>",id:"4-uv-\ud234-\uc601\uc5ed",level:2},{value:"Unwrap \uadf8\ub8f9",id:"unwrap-\uadf8\ub8f9",level:3},{value:"Selection \uadf8\ub8f9",id:"selection-\uadf8\ub8f9",level:3},{value:"Quick Transform \uadf8\ub8f9",id:"quick-transform-\uadf8\ub8f9",level:3},{value:"Alignment \uadf8\ub8f9",id:"alignment-\uadf8\ub8f9",level:3},{value:"Weld And Break \uadf8\ub8f9",id:"weld-and-break-\uadf8\ub8f9",level:3},{value:"Arrange \uadf8\ub8f9",id:"arrange-\uadf8\ub8f9",level:3},{value:"Misc \uadf8\ub8f9",id:"misc-\uadf8\ub8f9",level:3}],k={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uv-\uc5d0\ub514\ud130-\uc124\uc815\uacfc-\uc778\ud130\ud398\uc774\uc2a4"},"UV \uc5d0\ub514\ud130 \uc124\uc815\uacfc \uc778\ud130\ud398\uc774\uc2a4"),(0,r.kt)("h2",{id:"1-\ud234\ubc14"},(0,r.kt)("strong",{parentName:"h2"},"1. \ud234\ubc14")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud654\uba74 \uc774\ub3d9"),", ",(0,r.kt)("strong",{parentName:"p"},"\ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8"),", ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd \ud234, \ucee4\uc11c, \ud53c\ubd07 \uc804\ud658"),"\uc774 \uc21c\uc11c\ub300\ub85c \ub098\uc5f4\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud654\uba74-\uc774\ub3d9\uacfc-\ud2b8\ub79c\uc2a4\ud3fc-\uae30\uc988\ubaa8"},(0,r.kt)("strong",{parentName:"h3"},"\ud654\uba74 \uc774\ub3d9\uacfc \ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hand \ud234"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"\ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8"),"\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6d0\ud558\ub294 UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uba3c\uc800 \uc120\ud0dd \ud6c4 \uae30\uc988\ubaa8 \uc911 \ud55c \uac00\uc9c0\ub97c \ub20c\ub7ec \ub098\uc628 ",(0,r.kt)("strong",{parentName:"p"},"\uae30\uc988\ubaa8"),"\ub97c \uc870\uc791\ud558\uc5ec \uc120\ud0dd\ub41c \uc5d8\ub7ec\uba3c\ud2b8\uc5d0 \ubcc0\ud615\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"hand-\ud234"},"Hand \ud234"),(0,r.kt)("p",null,"\ud654\uba74\uc744 \uc774\ub3d9\ud560 \ub54c \uc4f0\ub294 \ud234\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"Hand \ud234")," \uc2e4\ud589 \ud6c4 ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d0\ub514\ud130 \uc791\uc5c5 \uacf5\uac04"),"\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8"))," \ud558\uba74 \ud654\uba74\uc744 \uc6c0\uc9c1\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8\ucd95\ud0a4"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Q"))),(0,r.kt)("admonition",{title:"\ud301",type:"tip"},(0,r.kt)("h2",{parentName:"admonition",id:"\ub2e8\ucd95\ud0a4-\uac00\uc6b4\ub370\ud074\ub9ad-\ub4dc\ub798\uadf8"},(0,r.kt)("strong",{parentName:"h2"},"\ub2e8\ucd95\ud0a4 ",(0,r.kt)("inlineCode",{parentName:"strong"},"\uac00\uc6b4\ub370\ud074\ub9ad-\ub4dc\ub798\uadf8"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\uac00\uc6b4\ub370\ud074\ub9ad-\ub4dc\ub798\uadf8"))," \ub97c \uc774\uc6a9\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"\ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8")," ",(0,r.kt)("strong",{parentName:"p"},"\ud234"),"\uc744 \uc0ac\uc6a9 \uc911\uc5d0\ub3c4 ",(0,r.kt)("strong",{parentName:"p"},"\ud234 \uc804\ud658 \uc5c6\uc774")," \ud654\uba74 \uc774\ub3d9\uc774 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\uac00\uc6b4\ub370\ud074\ub9ad-\ub4dc\ub798\uadf8"))," \ubc29\uc2dd\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"\ud654\uba74-\uc870\uc791-\ub2e8\ucd95\ud0a4"},(0,r.kt)("strong",{parentName:"h2"},"\ud654\uba74 \uc870\uc791 \ub2e8\ucd95\ud0a4")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud654\uba74 \uc774\ub3d9: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Q(Hand \ud234)+\ud074\ub9ad\ub4dc\ub798\uadf8")," , ",(0,r.kt)("inlineCode",{parentName:"strong"},"\uac00\uc6b4\ub370\ud074\ub9ad-\ub4dc\ub798\uadf8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud654\uba74 \ud655\ub300\ucd95\uc18c:")," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud720\ud68c\uc804"))))),(0,r.kt)("h3",{id:"move-\ud234"},"Move \ud234"),(0,r.kt)("p",null,"\uc120\ud0dd\ud55c ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc774\ub3d9"),"\uc2dc\ud0ac \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8\ucd95\ud0a4"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"W"))),(0,r.kt)("h3",{id:"rotation-\ud234"},"Rotation \ud234"),(0,r.kt)("p",null,"\uc120\ud0dd\ud55c ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud68c\uc804"),"\uc2dc\ud0ac \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8\ucd95\ud0a4"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"E"))),(0,r.kt)("h3",{id:"scale-\ud234"},"Scale \ud234"),(0,r.kt)("p",null,"\uc120\ud0dd\ud55c ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud06c\uae30\ub97c \uc870\uc808"),"\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8\ucd95\ud0a4"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"R"))),(0,r.kt)("h3",{id:"rectangle-\ud234"},"Rectangle \ud234"),(0,r.kt)("p",null,"\uc120\ud0dd\ud55c ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud06c\uae30\ub97c \uc870\uc808"),"\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8\ucd95\ud0a4"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"T"))),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"scale-\ud234\uacfc-\ub2e4\ub978-\uc810"},(0,r.kt)("strong",{parentName:"h2"},"Scale \ud234\uacfc \ub2e4\ub978 \uc810")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rectangle \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uc0c1\uc758 \uc0ac\uac01\ud615\uc5d0 \uc788\ub294 \uc810\ub4e4\uc744 \uc870\uc791"),"\ud558\uc5ec, ",(0,r.kt)("strong",{parentName:"p"},"Scale \ud234"),"\uacfc\ub294 \ub2e4\ub978 \uae30\uc900\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud06c\uae30 \uc870\uc808\uc774 \uac00\ub2a5"),"\ud558\ub2e4\ub294 \uc810\uc774 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"uv-\uc5d8\ub9ac\uba3c\ud2b8-\uc120\ud0dd"},(0,r.kt)("strong",{parentName:"h3"},"UV \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd")),(0,r.kt)("p",null,"\ud3b8\uc9d1\ud560 ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd"),"\ud558\ub294 \ud234\ub4e4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud2b8\ub79c\uc2a4\ud3fc \uae30\uc988\ubaa8 \ud234"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"\ud2b9\uc815 UV \uc5d8\ub9ac\uba3c\ud2b8\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \ud234"),"\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd"),"\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"uv-\uc5d8\ub9ac\uba3c\ud2b8-\uc120\ud0dd\ud558\uae30"},(0,r.kt)("strong",{parentName:"h2"},"UV \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd\ud558\uae30")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd"),"\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc6d0\ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8 \uc120\ud0dd \ud234"),"\uc774 ",(0,r.kt)("strong",{parentName:"p"},"\ud65c\uc131\ud654"),"\ub41c \uc0c1\ud0dc\uc5d0\uc11c, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ub97c \ud1b5\ud574 ",(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd \uc601\uc5ed\uc744 \ub9cc\ub4e4\uc5b4")," \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd \uc601\uc5ed \uc548"),"\uc5d0 \ub4e4\uc5b4\uc624\uac70\ub098, ",(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd \uc601\uc5ed\uc5d0 \uac78\uce58\ub294")," UV \uc5d8\ub9ac\uba3c\ud2b8\ub9cc \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"uv-vertex-\uc120\ud0dd"},"UV Vertex \uc120\ud0dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UV \ubc84\ud14d\uc2a4"),"\ub97c \uc120\ud0dd\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"uv-edge-\uc120\ud0dd"},"UV Edge \uc120\ud0dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UV \uc5e3\uc9c0"),"\ub97c \uc120\ud0dd\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"uv-face-\uc120\ud0dd"},"UV Face \uc120\ud0dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UV \ud398\uc774\uc2a4"),"\ub97c \uc120\ud0dd\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"uv-island-\uc120\ud0dd"},"UV Island \uc120\ud0dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UV \uc544\uc77c\ub79c\ub4dc"),"\ub97c \uc120\ud0dd\ud558\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"uv-\uc544\uc77c\ub79c\ub4dc"},(0,r.kt)("strong",{parentName:"h2"},"UV \uc544\uc77c\ub79c\ub4dc")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"UV \uc544\uc77c\ub79c\ub4dc"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc11c\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 UV \uc5d8\ub9ac\uba3c\ud2b8"),"\ub97c \ub73b\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc124\uc815\uacfc-\ud53c\ubc97"},(0,r.kt)("strong",{parentName:"h3"},"\uc124\uc815\uacfc \ud53c\ubc97")),(0,r.kt)("h3",{id:"cursor-\ud234"},"Cursor \ud234"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cursor \ud234"),"\uc740 UV \uc5d0\ub514\ud130\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud3ec\uc778\ud2b8 \ud615\ud0dc\uc758 \ucee4\uc11c"),"\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \uc704\uce58\ub97c \uae30\uc900"),"\uc73c\ub85c \ud234\uc744 \uc0ac\uc6a9\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc8fc\ub85c ",(0,r.kt)("strong",{parentName:"p"},"Rotation \ud234"),", ",(0,r.kt)("strong",{parentName:"p"},"Scale \ud234")," \uadf8\ub9ac\uace0 ",(0,r.kt)("strong",{parentName:"p"},"UV\uc5d0 \uad00\ub828\ub41c \ud234")," \ub4f1\uc5d0\uc11c \uae30\uc988\ubaa8\uc758 \uc704\uce58\ub85c \uc4f0\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ucee4\uc11c\uc758 \uc911\uc2ec\uc810"),"\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ud558\uc5ec \uc774\ub3d9\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uae30\uc988\ubaa8-\uc804\ud658-\ud234"},"\uae30\uc988\ubaa8 \uc804\ud658 \ud234"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uae30\uc988\ubaa8 \uc704\uce58"),"\uc758 \uae30\uc900\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\uc804\ud658"),"\ud558\ub294 \ud234\ub85c, \ub204\ub97c \ub54c\ub9c8\ub2e4 ",(0,r.kt)("strong",{parentName:"p"},"Pivot \uc18d\uc131"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"Center \uc18d\uc131"),"\uc774 \uc804\ud658\ub418\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Cursor \ud234"),"\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc744 \uacbd\uc6b0 \uae30\uc988\ubaa8 \uc704\uce58\uac00 \ucee4\uc11c \uc704\uce58\ub85c \uace0\uc815\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pivot")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pivot \uc18d\uc131"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc120\ud0dd\ub41c UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc704\uce58"),"\ub97c \uae30\uc988\ubaa8\uc758 \uc704\uce58\ub85c \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ud301",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ud2b9\uc815 UV \uc5d8\ub9ac\uba3c\ud2b8"),"\uc758 \uc704\uce58\ub85c \uae30\uc988\ubaa8\uc758 \uc704\uce58\ub97c \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74, \ud574\ub2f9 UV \uc5d8\ub9ac\uba3c\ud2b8\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ud574\uc81c")," \ud6c4 ",(0,r.kt)("strong",{parentName:"p"},"\ub2e4\uc2dc \uc120\ud0dd"),"\ud558\uba74 \ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Center")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Center \uc18d\uc131"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc911\uc559"),"\uc744 \uae30\uc988\ubaa8\uc758 \uc704\uce58\ub85c \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc5ec\ub7ec UV \uc5d8\ub9ac\uba3c\ud2b8"),"\uac00 \uc120\ud0dd\ub418\uc5c8\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"p"},"\uc120\ud0dd\ub41c UV \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc758 \ud3c9\uade0\uc704\uce58"),"\uac00 \uae30\uc988\ubaa8 \uc704\uce58\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc124\uc815"},"\uc124\uc815"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130\uc758 \uc124\uc815 \uc601\uc5ed\uc744 \ud45c\uc2dc\ud558\ub294 \ubc84\ud2bc\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-\uc124\uc815-\uc601\uc5ed"},(0,r.kt)("strong",{parentName:"h2"},"2. \uc124\uc815 \uc601\uc5ed")),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130\uc640 \uad00\ub828\ub41c \uc124\uc815\uc744 \ud560 \uc218 \uc788\ub294 \uc601\uc5ed\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"snap-type"},"Snap Type"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc774\ub3d9, \ud68c\uc804, \ud06c\uae30\ub97c \uc870\uc791\ud560 \ub54c \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc704\uce58\uac00 ",(0,r.kt)("strong",{parentName:"p"},"SnapType \uc18d\uc131"),"\uacfc \uadf8 \uc678 ",(0,r.kt)("strong",{parentName:"p"},"\uc2a4\ub0c5\uc5d0 \uad00\ub828\ub41c \uc18d\uc131"),"\uc5d0 \ub530\ub77c \uc2a4\ub0c5 \ub429\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,r.kt)("h2",{parentName:"admonition",id:"\uc2a4\ub0c5snap"},(0,r.kt)("strong",{parentName:"h2"},"\uc2a4\ub0c5(Snap)")),(0,r.kt)("p",{parentName:"admonition"},"\uc2a4\ub0c5\uc740 \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc815\ud655\ud55c \uc704\uce58\uc5d0 \ubc30\uce58"),"\ud558\uae30 \uc704\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4. \uc5ec\ub7ec ",(0,r.kt)("strong",{parentName:"p"},"\uc18d\uc131"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"\ubbf8\ub9ac \uc9c0\uc815\ub41c \uac12"),"\uc744 \uc774\uc6a9\ud558\uc5ec, \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \uc704\uce58\ub85c \uc774\ub3d9"),"\ud558\uac70\ub098, ",(0,r.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \uac01\ub3c4\ub9cc\ud07c \ud68c\uc804")," \uc2dc\ud0a4\ub294 \ub4f1 ",(0,r.kt)("strong",{parentName:"p"},"\uc815\ud655"),"\ud558\uace0 ",(0,r.kt)("strong",{parentName:"p"},"\ud6a8\uc728"),"\uc801\uc73c\ub85c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3b8\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)(o.Z,{defaultValue:"None",values:[{label:"None",value:"None"},{label:"World",value:"World"},{label:"Increment",value:"Increment"},{label:"Pixel",value:"Pixel"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"None",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-none"},"SnapType: None"),(0,r.kt)("p",{parentName:"admonition"},"\uc2a4\ub0c5\uc744 \uc801\uc6a9\ud558\uc9c0 \uc54a\uc744 \ub54c\uc758 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(l.Z,{value:"World",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-world"},"SnapType: World"),(0,r.kt)("p",{parentName:"admonition"},"UV \uc5d0\ub514\ud130 \uc791\uc5c5 \uc601\uc5ed\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uaca9\uc790\uc5d0 \ub9de\ucdb0 UV \ubc84\ud14d\uc2a4\uac00 \uc2a4\ub0c5"),"\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"gridsnapsize-\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h4"},"GridSnapSize \uc18d\uc131")),(0,r.kt)("p",{parentName:"admonition"},"UV \uc5d8\ub9ac\uba3c\ud2b8 ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ub3d9, \ud68c\uc804, \ud06c\uae30")," \uc870\uc808 \uc2dc ",(0,r.kt)("strong",{parentName:"p"},"UV \ubc84\ud14d\uc2a4\uac00 \uc2a4\ub0c5"),"\ub418\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uaca9\uc790\uc758 \uac04\uaca9\uc744 \uc124\uc815"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(l.Z,{value:"Increment",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-increment"},"SnapType: Increment"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"SnapSize \uc18d\uc131\uc5d0\uc11c \uc124\uc815\ub41c \uac12\ub9cc\ud07c \uc2a4\ub0c5"),"\ub418\uc5b4 \uc774\ub3d9, \ud68c\uc804\ud558\ub294 \uc18d\uc131\uc73c\ub85c, \uc120\ud0dd\ub41c UV \uc5d8\ub9ac\uba3c\ud2b8\uac00 ",(0,r.kt)("strong",{parentName:"p"},"UV \ubc84\ud14d\uc2a4\uc758 \uc2a4\ub0c5\uc5c6\uc774")," \uc774\ub3d9, \ud68c\uc804\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"gridsnapsize-\uc18d\uc131-1"},(0,r.kt)("strong",{parentName:"h4"},"GridSnapSize \uc18d\uc131")),(0,r.kt)("p",{parentName:"admonition"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ub3d9\uc2dc\ud0ac \ub54c \uc801\uc6a9\ub420 \uc2a4\ub0c5 \ud06c\uae30"),"\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"rotationsnapsize-\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h4"},"RotationSnapSize \uc18d\uc131")),(0,r.kt)("p",{parentName:"admonition"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud68c\uc804\uc2dc\ud0ac \ub54c \uc801\uc6a9\ub420 \uc2a4\ub0c5 \uac01\ub3c4"),"\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(l.Z,{value:"Pixel",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"snaptype-pixel"},"SnapType: Pixel"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub41c \ud14d\uc2a4\uccd0\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140\uc5d0 \ub9de\ucdb0 UV \ubc84\ud14d\uc2a4\uac00 \uc2a4\ub0c5"),"\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("h4",{parentName:"admonition",id:"pixelcenter"},(0,r.kt)("strong",{parentName:"h4"},"PixelCenter")),(0,r.kt)("p",{parentName:"admonition"},"\ud14d\uc2a4\uccd0\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140 \uc911\uc559"),"\uc73c\ub85c \ubc84\ud14d\uc2a4\uac00 \uc2a4\ub0c5\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\ube44\ud65c\uc131\ud654\ud560 \uacbd\uc6b0 \ud14d\uc2a4\uccd0\uc758 ",(0,r.kt)("strong",{parentName:"li"},"\ud53d\uc140 \uac00\uc7a5\uc790\ub9ac"),"\uc5d0 \uc2a4\ub0c5 \ub429\ub2c8\ub2e4.")),(0,r.kt)("admonition",{parentName:"admonition",title:"\ud301",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Pixel \uc18d\uc131"),"\uc740 \uc8fc\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140\uc544\ud2b8 \uc2a4\ud0c0\uc77c\uc758 \ubaa8\ub378"),"\uc744 \uc81c\uc791\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{parentName:"admonition",title:"\uc8fc\uc758",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Pixel \uc18d\uc131"),"\uc744 \uc4f8 \ub54c \uc2a4\ub0c5 \uac04\uaca9\uc740 \ud53d\uc140\uc544\ud2b8\ub97c \ud45c\ud604\ud55c ",(0,r.kt)("strong",{parentName:"p"},"\ud14d\uc2a4\uccd0\uc758 \ud574\uc0c1\ub3c4"),"\ub97c \ub530\ub974\uae30 \ub54c\ubb38\uc5d0, \ud45c\ud604\ub41c \ud53d\uc140 \ud06c\uae30\uc640 \uc2e4\uc81c \ud14d\uc2a4\uccd0\uc758 \ud574\uc0c1\ub3c4\uac00 \ub2ec\ub77c\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4.")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"showislandboundary"},"ShowIslandBoundary"),(0,r.kt)("p",null,"UV \uc544\uc77c\ub79c\ub4dc\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ubc14\uc6b4\ub4dc \ubc15\uc2a4\ub97c \ud45c\uc2dc"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"fillpolygons"},"FillPolygons"),(0,r.kt)("p",null,"UV \ud398\uc774\uc2a4\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ubc18\ud22c\uba85\uc73c\ub85c \ud45c\uc2dc\ud558"),"\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ud301",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"UV \ud398\uc774\uc2a4\ub97c \ubc18\ud22c\uba85"),"\uc73c\ub85c \ud45c\uc2dc\ud558\uae30 \ub54c\ubb38\uc5d0, ",(0,r.kt)("strong",{parentName:"p"},"\ubc18\ud22c\uba85 \ub18d\ub3c4 \ucc28\uc774"),"\ub85c \uacb9\uccd0\uc9c4 UV \ud398\uc774\uc2a4\ub97c \uc27d\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"showgrid"},"ShowGrid"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130 \uc791\uc5c5 \uc601\uc5ed\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\uaca9\uc790\ub97c \ud45c\uc2dc"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"showaxes"},"ShowAxes"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130 \uc791\uc5c5 \uc601\uc5ed\uc758 X,Y\ucd95\uc5d0 \ud574\ub2f9\ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"U\ucd95\uacfc V\ucd95\uc744 \ud45c\uc2dc"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\ucc38\uace0",type:"note"},(0,r.kt)("h2",{parentName:"admonition",id:"\ud14d\uc2a4\ucc98-\uacf5\uac04"},(0,r.kt)("strong",{parentName:"h2"},"\ud14d\uc2a4\ucc98 \uacf5\uac04")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"UV\ucd95\uc758 \uc2dc\uc791\uc810"),"\ubd80\ud130 \ud070 \uac04\uaca9\uc73c\ub85c \ub41c ",(0,r.kt)("strong",{parentName:"p"},"\uace0\uc815\ub41c \uaca9\uc790(Fixed Grid Line)"),"\uac00 ",(0,r.kt)("strong",{parentName:"p"},"UV\ucd95\uacfc \uc77c\uce58\ud558\ub294 \uc9c0\uc810"),"\uae4c\uc9c0\uac00 ",(0,r.kt)("strong",{parentName:"p"},"\ud14d\uc2a4\uccd0 \uacf5\uac04"),"\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub300\uccb4\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud0c0\uc77c\ub9c1 \ub418\ub294 \ud14d\uc2a4\uccd0"),"\ub97c \ud45c\ud604\ud558\ub294 \uac8c \uc544\ub2c8\ub77c\uba74, ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 UV \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ud14d\uc2a4\ucc98 \uacf5\uac04 \uc548"),"\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ubc30\uce58"),"\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"showtexture"},"ShowTexture"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130\uc758 ",(0,r.kt)("strong",{parentName:"p"},"Material \uc18d\uc131"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc124\uc815\ub41c \uba38\ud2f0\ub9ac\uc5bc\uc758 \ud14d\uc2a4\ucc98"),"\ub97c \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"enablealphachannel"},"EnableAlphaChannel"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130\uc758 ",(0,r.kt)("strong",{parentName:"p"},"Material \uc18d\uc131"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc124\uc815\ub41c \uba38\ud2f0\ub9ac\uc5bc\uc758 \ud14d\uc2a4\ucc98 \uc54c\ud30c\ucc44\ub110")," \ubd80\ubd84\uc744 \uc81c\uc678\ud558\uc5ec \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"texxnum"},"TexXNum"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130\uc758 ",(0,r.kt)("strong",{parentName:"p"},"Material \uc18d\uc131"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc124\uc815\ub41c \uba38\ud2f0\ub9ac\uc5bc\uc758 \ud14d\uc2a4\ucc98"),"\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc88c\uc6b0 \ubc18\ubcf5"),"\uc73c\ub85c \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"texynum"},"TexYNum"),(0,r.kt)("p",null,"UV \uc5d0\ub514\ud130\uc758 ",(0,r.kt)("strong",{parentName:"p"},"Material \uc18d\uc131"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc124\uc815\ub41c \uba38\ud2f0\ub9ac\uc5bc\uc758 \ud14d\uc2a4\ucc98"),"\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc0c1\ud558 \ubc18\ubcf5"),"\uc73c\ub85c \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"material"},"Material"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Material \ud234"),"\ub85c \uc801\uc6a9\ub41c \uba38\ud2f0\ub9ac\uc5bc\ub4e4\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc18d\uc131\uc73c\ub85c, \ud574\ub2f9 \uba38\ud2f0\ub9ac\uc5bc\uc774 \ud560\ub2f9\ub41c UV \uc5d8\ub9ac\uba3c\ud2b8\ub9cc \ud45c\uc2dc\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"all"},"All"),(0,r.kt)("p",null,"\ubaa8\ub4e0 UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uba38\ud2f0\ub9ac\uc5bc \ud560\ub2f9\uacfc \uc0c1\uad00\uc5c6\uc774 \ud45c\uc2dc"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-\uc791\uc5c5-\uc601\uc5ed"},(0,r.kt)("strong",{parentName:"h2"},"3. \uc791\uc5c5 \uc601\uc5ed")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3b8\uc9d1\ud558\ub294 \uc601\uc5ed"),"\uc73c\ub85c, \uaca9\uc790\uc640 \ud568\uaed8 \ud14d\uc2a4\uccd0\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-uv-\ud234-\uc601\uc5ed"},(0,r.kt)("strong",{parentName:"h2"},"4. UV \ud234 \uc601\uc5ed")),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3bc\uce58\uac70\ub098 \uc120\ud0dd, \ubc30\uce58 \ub4f1 ",(0,r.kt)("strong",{parentName:"p"},"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3b8\uc9d1\ud558\ub294 \ud234"),"\uc744 \ubaa8\uc544 \ub193\uc740 \uc601\uc5ed\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"unwrap-\uadf8\ub8f9"},"Unwrap \uadf8\ub8f9"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3bc\uce60 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"selection-\uadf8\ub8f9"},"Selection \uadf8\ub8f9"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc120\ud0dd\ud560 \ub54c \uc4f0\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"quick-transform-\uadf8\ub8f9"},"Quick Transform \uadf8\ub8f9"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc704\uce58\ub97c \uac04\ub2e8\ud558\uac8c \ubc18\uc804, \ud68c\uc804\ud560 \uc218 \uc788\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"alignment-\uadf8\ub8f9"},"Alignment \uadf8\ub8f9"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc704\uce58\ub97c \uc815\ub82c\ud560 \uc218 \uc788\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"weld-and-break-\uadf8\ub8f9"},"Weld And Break \uadf8\ub8f9"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ub5bc\uac70\ub098 \ubd99\uc77c \ub54c \uc0ac\uc6a9\ud558\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"arrange-\uadf8\ub8f9"},"Arrange \uadf8\ub8f9"),(0,r.kt)("p",null,"UV \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud14d\uc2a4\uccd0 \uacf5\uac04\uc5d0 \uc77c\uad04\uc801\uc73c\ub85c \ubc30\uce58\ud560 \ub54c \uc4f0\ub294 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"misc-\uadf8\ub8f9"},"Misc \uadf8\ub8f9"),(0,r.kt)("p",null,"\ub2e4\ub978 \uadf8\ub8f9\uc5d0 \uc18d\ud558\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc758 \ud234\uc744 \ubaa8\uc544 \ub193\uc740 \uadf8\ub8f9\uc785\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);