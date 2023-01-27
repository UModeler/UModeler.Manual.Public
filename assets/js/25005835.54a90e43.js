"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[4741],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>c});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=n.createContext({}),u=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(i),v=r,c=m["".concat(a,".").concat(v)]||m[v]||p[v]||o;return i?n.createElement(c,l(l({ref:t},s),{},{components:i})):n.createElement(c,l({ref:t},s))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=v;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var u=2;u<o;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}v.displayName="MDXCreateElement"},2910:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=i(7462),r=(i(7294),i(3905));const o={slug:"/modeling/subdivide-modifier",sidebar_position:1},l="Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4",d={unversionedId:"editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier",id:"editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier",title:"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4",description:"\uac1c\uc694",source:"@site/docs/editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier.md",sourceDirName:"editable-mesh/modeling-mode/modeling-mode-modifier",slug:"/modeling/subdivide-modifier",permalink:"/docs/modeling/subdivide-modifier",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-mesh/modeling-mode/modeling-mode-modifier/subdivide-modifier.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/modeling/subdivide-modifier",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shell \ubaa8\ub514\ud30c\uc774\uc5b4",permalink:"/docs/modeling/shell-modifier"},next:{title:"\ubaa8\ub378\ub9c1 \ubaa8\ub4dc \uc2dc\uc791\ud558\uae30",permalink:"/docs/modeling-start"}},a={},u=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc0ac\uc6a9 \ubc29\ubc95",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"\uc18d\uc131",id:"\uc18d\uc131",level:2},{value:"Subdivision Level",id:"subdivision-level",level:3},{value:"Subdivision Level \uc608\uc2dc",id:"subdivision-level-\uc608\uc2dc",level:4},{value:"Auto smoothing group",id:"auto-smoothing-group",level:3},{value:"\uc0ac\uc6a9 \uc608\uc2dc",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2}],s={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subdivide-\ubaa8\ub514\ud30c\uc774\uc5b4"},"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4"),(0,r.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,r.kt)("p",null,"\ud398\uc774\uc2a4\ub97c \ubd84\ud560\ud558\uc5ec \uba54\uc2dc\ub97c \ubd80\ub4dc\ub7fd\uac8c \ud558\ub294 \ubaa8\ub514\ud30c\uc774\uc5b4 \uc785\ub2c8\ub2e4.\n",(0,r.kt)("strong",{parentName:"p"},"[Vertex, Edge, Face \uadf8\ub9ac\uace0 Object \ud234]")," \uc758 ",(0,r.kt)("strong",{parentName:"p"},"Smoothing Groups")," \uae30\ub2a5\ucc98\ub7fc \ud398\uc774\uc2a4\uac00 \uc5f0\uacb0\ub41c \uac83\ucc98\ub7fc \ubcf4\uc774\uac8c \ud558\ub294 \uac83\uc774 \uc544\ub2cc \uc2e4\uc81c \ud398\uc774\uc2a4\uc758 \uac1c\uc218\uac00 \uc99d\uac00 \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},"\uc0ac\uc6a9 \ubc29\ubc95"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Insert a new modifier \ubc84\ud2bc"),"\uc744 \ub20c\ub7ec ",(0,r.kt)("strong",{parentName:"li"},"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Subdivide \ubaa8\ub514\ud30c\uc774\uc5b4"),"\uc758 \uc18d\uc131\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"li"},"Subdivision Level \ubc84\ud2bc"),"\uc744 \ub20c\ub7ec \ub2e8\uacc4\ub97c \uc62c\ub9bd\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uc18d\uc131"},"\uc18d\uc131"),(0,r.kt)("h3",{id:"subdivision-level"},"Subdivision Level"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subdivision Level"),"\uc5d0 \uc788\ub294 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 Subdivide \ub2e8\uacc4\uac00 \uc62c\ub77c\uac00\uace0 \ud398\uc774\uc2a4 \uac1c\uc218\uac00 \uc99d\uac00\ud569\ub2c8\ub2e4. \uac01 \ub2e8\uacc4\ub9c8\ub2e4 \ud398\uc774\uc2a4\uc758 \uac1c\uc218\ub294 4\ubc30\ub85c \uc99d\uac00\ud558\uba70 \uace1\uba74\uc774 \ubd80\ub4dc\ub7ec\uc6cc\uc9d1\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"subdivision-level-\uc608\uc2dc"},"Subdivision Level \uc608\uc2dc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc Subdivision Level 0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc Subdivision Level 1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc Subdivision Level 2")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc Subdivision Level 3")),(0,r.kt)("h3",{id:"auto-smoothing-group"},"Auto smoothing group"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subdivision Level"),"\uc5d0 \uc758\ud574 \ucd94\uac00\ub41c \ud398\uc774\uc2a4\uc5d0 \ub300\ud574 \uc790\ub3d9\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"Smoothing Group"),"\uc744 \uc801\uc6a9\ud558\uc5ec \ud45c\uba74\uc774 \ubd80\ub4dc\ub7fd\uac8c \ubcf4\uc774\uac8c \ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uc8fc\uc758",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Subdivision Level"),"\uc758 \uac12\uc744 \uc62c\ub9ac\uac8c \ub418\uba74 \uadf8\ub9cc\ud07c \ud3f4\ub9ac\uace4\uc774 \ub9ce\uc544\uc9c0\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"Auto Smoothing Group"),"\uc744 \ud65c\uc131\ud654 \uc0c1\ud0dc\uc5d0\uc11c \ud45c\ud604 \uc218\uc900\uc744 \ubcf4\uba70 ",(0,r.kt)("strong",{parentName:"p"},"Subdivision Level"),"\uc758 \uac12\uc744 \uc62c\ub9ac\ub294 \uac83\uc774 \ucd5c\uc801\ud654\uc5d0 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uc0ac\uc6a9-\uc608\uc2dc"},"\uc0ac\uc6a9 \uc608\uc2dc"))}m.isMDXComponent=!0}}]);