"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[2357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),p=n(6550),s=n(1980),l=n(7392),m=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,l]=k({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),N=(()=>{const e=s??u;return c({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{N&&p(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),l(e),g(e)}),[l,g,o]),tabValues:o}}var N=n(2389);const h="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:p,selectValue:s,tabValues:l}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),a=l[n].value;a!==p&&(u(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:d},i,{className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":p===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function E(e){const t=(0,N.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const p={sidebar_position:3,slug:"/painting/paint-layer"},s="Paint \ub808\uc774\uc5b4",l={unversionedId:"editable-mesh/painting-mode/painting-mode-layer/paint-layer",id:"editable-mesh/painting-mode/painting-mode-layer/paint-layer",title:"Paint \ub808\uc774\uc5b4",description:"Paint \ub808\uc774\uc5b4\ub294 \uce60\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9\ud558\ub294 \ub808\uc774\uc5b4\uc785\ub2c8\ub2e4.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/editable-mesh/painting-mode/painting-mode-layer/paint-layer.md",sourceDirName:"editable-mesh/painting-mode/painting-mode-layer",slug:"/painting/paint-layer",permalink:"/docs/painting/paint-layer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/painting-mode/painting-mode-layer/paint-layer.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/painting/paint-layer"},sidebar:"tutorialSidebar",previous:{title:"Group \ub808\uc774\uc5b4",permalink:"/docs/painting/group-layer"},next:{title:"Fill \ub808\uc774\uc5b4",permalink:"/docs/painting/fill-layer"}},m={},u=[{value:"<strong>\uc0ac\uc6a9 \ubc29\ubc95</strong>",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"<strong>Paint \ub808\uc774\uc5b4 Properties \uadf8\ub8f9 \uc18d\uc131</strong>",id:"paint-\ub808\uc774\uc5b4-properties-\uadf8\ub8f9-\uc18d\uc131",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paint-\ub808\uc774\uc5b4"},"Paint \ub808\uc774\uc5b4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paint \ub808\uc774\uc5b4"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uce60\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud558\ub294 \ub808\uc774\uc5b4\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},(0,r.kt)("strong",{parentName:"h2"},"\uc0ac\uc6a9 \ubc29\ubc95")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\ub808\uc774\uc5b4 \ucd94\uac00 \ubc84\ud2bc"),"\uc744 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Add Paint Layer \uc18d\uc131"),"\uc744 \ub20c\ub7ec ",(0,r.kt)("strong",{parentName:"li"},"Paint \ub808\uc774\uc5b4"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"paint-\ub808\uc774\uc5b4-properties-\uadf8\ub8f9-\uc18d\uc131"},(0,r.kt)("strong",{parentName:"h2"},"Paint \ub808\uc774\uc5b4 Properties \uadf8\ub8f9 \uc18d\uc131")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Properties \uadf8\ub8f9"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ud234\uc774\ub098 \ub808\uc774\uc5b4 \ub4f1 \uc120\ud0dd\ud55c \uae30\ub2a5"),"\uc5d0 \ub530\ub77c ",(0,r.kt)("strong",{parentName:"p"},"\ub0b4\uc6a9\uc774 \ub2ec\ub77c\uc9c0\ub294 \uc601\uc5ed"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paint \ub808\uc774\uc5b4"),"\ub97c \uc120\ud0dd \uc2dc ",(0,r.kt)("strong",{parentName:"p"},"Properties \uadf8\ub8f9"),"\uc5d0 \ud45c\uc2dc\ub418\ub294 \uc18d\uc131\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{defaultValue:"Brush",values:[{label:"Brush",value:"Brush"},{label:"Erase",value:"Erase"},{label:"Rect Fill",value:"Rect Fill"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Brush",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h1",{parentName:"admonition",id:"brush"},"Brush"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uce60\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,r.kt)("h3",{parentName:"admonition",id:"screensizebrush"},"ScreenSizeBrush"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140 \uae30\uc900"),"\uc73c\ub85c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc73c\ub85c, \ud574\uc81c\ud560 \uacbd\uc6b0 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc6d4\ub4dc \uc0c1\uc758 \ud06c\uae30"),"\ub97c \uae30\uc900\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Size \uc18d\uc131"),"\uc5d0\uc11c \ud06c\uae30\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"size"},"Size"),(0,r.kt)("p",{parentName:"admonition"},"\ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"opacity"},"Opacity"),(0,r.kt)("p",{parentName:"admonition"},"\uce60\ud574\uc9c0\ub294 \ub9f5\uc18c\uc2a4 \uac12\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ubd88\ud22c\uba85\ub3c4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"hardness"},"Hardness"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 \ube0c\ub7ec\uc2dc ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\uc11c\ub9ac \ub610\ub837\ud55c \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"jittering"},"Jittering"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \uc785\ub825\uc73c\ub85c \uc0dd\uae30\ub294 \ub77c\uc778\uc778 \uc2a4\ud2b8\ub85c\ud06c\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc57d\uac04\uc529 \ub79c\ub364\ud558\uac8c \ubc8c\uc5b4\uc9c0\ub294 \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"spacing"},"Spacing"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Brush \ud234"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc785\ub825\ub418\ub294 \ube0c\ub7ec\uc2dc \uac04\uaca9"),"\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"\ub9f5\uc18c\uc2a4"},"\ub9f5\uc18c\uc2a4"),(0,r.kt)("p",{parentName:"admonition"},"\uce60\ud574\uc9c8 ",(0,r.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(i.Z,{value:"Erase",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h1",{parentName:"admonition",id:"erase"},"Erase"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uce60\ud574\uc838 \uc788\ub294 \ub9f5\uc18c\uc2a4 \uac12\uc744 \uc81c\uac70"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,r.kt)("h3",{parentName:"admonition",id:"screensizebrush-1"},"ScreenSizeBrush"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud53d\uc140 \uae30\uc900"),"\uc73c\ub85c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc73c\ub85c, \ud574\uc81c\ud560 \uacbd\uc6b0 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc6d4\ub4dc \uc0c1\uc758 \ud06c\uae30"),"\ub97c \uae30\uc900\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Size \uc18d\uc131"),"\uc5d0\uc11c \ud06c\uae30\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"size-1"},"Size"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \ud06c\uae30\ub97c \uc124\uc815\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"opacity-1"},"Opacity"),(0,r.kt)("p",{parentName:"admonition"},"\uc9c0\uc6cc\uc9c0\ub294 \uc815\ub3c4\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ubd88\ud22c\uba85\ub3c4\ub85c \uc870\uc808"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"hardness-1"},"Hardness"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\uc11c\ub9ac \ub610\ub837\ud55c \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"jittering-1"},"Jittering"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 \ube0c\ub7ec\uc2dc \uc785\ub825\uc73c\ub85c \uc0dd\uae30\ub294 \ub77c\uc778\uc778 \uc2a4\ud2b8\ub85c\ud06c\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc57d\uac04\uc529 \ub79c\ub364\ud558\uac8c \ubc8c\uc5b4\uc9c0\ub294 \uc815\ub3c4"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"spacing-1"},"Spacing"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Erase \ud234"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc785\ub825\ub418\ub294 \ube0c\ub7ec\uc2dc \uac04\uaca9"),"\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"\ub9f5\uc18c\uc2a4-1"},"\ub9f5\uc18c\uc2a4"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uc81c\uac70\ud560 \ub9f5\uc18c\uc2a4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."))),(0,r.kt)(i.Z,{value:"Rect Fill",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\uc18d\uc131 \ud0ed",type:"note"},(0,r.kt)("h1",{parentName:"admonition",id:"rect-fill"},"Rect Fill"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rect Fill \ud234"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Mode \uc18d\uc131"),"\uc744 \ud1b5\ud574 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,r.kt)("h3",{parentName:"admonition",id:"mode"},"Mode"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rect Fill \ud234"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc791\ub3d9 \ubc29\uc2dd"),"\uc5d0 \ub300\ud55c \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Polygon Fill")),(0,r.kt)("p",{parentName:"admonition"},"\ud398\uc774\uc2a4\ub97c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Rect Fill")),(0,r.kt)("p",{parentName:"admonition"},"\uc52c\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad\ub4dc\ub798\uadf8")),"\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc0ac\uac01 \uc601\uc5ed"),"\uc744 \uc0dd\uc131\ud558\uc5ec, \uadf8 \uc548\uc5d0 \ub4e4\uc5b4\uc624\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Polygonal Lasso Fill")),(0,r.kt)("p",{parentName:"admonition"},"\uc52c\uc744 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud074\ub9ad")),"\ud558\uc5ec \uaf2d\uc9c0\uc810\uc744 \ub530\ub77c ",(0,r.kt)("strong",{parentName:"p"},"\ub2e4\uac01\ud615 \uc601\uc5ed"),"\uc744 \uc0dd\uc131\ud558\uace0, \uadf8 \uc548\uc5d0 \ub4e4\uc5b4\uc624\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\uc5d0 \ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Island Fill")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \ud234\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"UV \uc544\uc77c\ub79c\ub4dc"),"\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud074\ub9ad"),"\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Isolation Fill")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \ud234\ub85c, ",(0,r.kt)("strong",{parentName:"p"},"Painting 2D \uc5d0\ub514\ud130"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"UV \ud398\uc774\uc2a4\ub97c \ud074\ub9ad"),"\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"\uc5f0\uacb0\ub41c \uc5d8\ub9ac\uba3c\ud2b8 \uc804\uccb4"),"\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\ub97c \uc801\uc6a9"),"\ud560 \uc218 \uc788\ub294 \ud234\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"mask-value"},"Mask Value"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub420 ",(0,r.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"camera-based-select"},"Camera Based Select"),(0,r.kt)("p",{parentName:"admonition"},"\uce74\uba54\ub77c\ub97c \uae30\uc900\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud604\uc7ac \ubcf4\uc5ec\uc9c0\ub294 \ud398\uc774\uc2a4"),"\ub9cc \ub9f5\uc18c\uc2a4\uac00 \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"trianglemode"},"TriangleMode"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc2a4\ub97c \uc774\ub8e8\ub294 \uc0bc\uac01\ud615 \uba54\uc2dc"),"\uc5d0 \ub9f5\uc18c\uc2a4\uac00 \uc801\uc6a9\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"erase-1"},"Erase"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub41c ",(0,r.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\ub97c \uc0ad\uc81c"),"\ud558\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"opacity-2"},"Opacity"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub418\ub294 \ub9c8\uc2a4\ud06c \uac12\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\ubd88\ud22c\uba85\ub3c4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{parentName:"admonition",id:"\ub9f5\uc18c\uc2a4-2"},"\ub9f5\uc18c\uc2a4"),(0,r.kt)("p",{parentName:"admonition"},"\uc801\uc6a9\ub420 ",(0,r.kt)("strong",{parentName:"p"},"\ub9f5\uc18c\uc2a4\ub97c \uc124\uc815"),"\ud560 \uc218 \uc788\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4.")))))}c.isMDXComponent=!0}}]);