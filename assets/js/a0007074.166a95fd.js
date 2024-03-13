"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),g=i,h=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),i=n(86010),o=n(53438),r=n(39960),s=n(13919),l=n(95999);const m="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function c(e){let{href:t,children:n}=e;return a.createElement(r.Z,{href:t,className:(0,i.Z)("card padding--lg",m)},n)}function g(e){let{href:t,icon:n,title:o,description:r}=e;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:o},n," ",o),r&&a.createElement("p",{className:(0,i.Z)("text--truncate",p),title:r},r))}function h(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return a.createElement(g,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(u,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const r=(0,o.MN)(t);return a.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(k,{item:e})))))}},26006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),o=n(52991);const r={sidebar_position:3,slug:"/synty-mixamo-animation-integration",image:"img/SyntyMixamo_1.png"},s="Synty Studios Assets and Mixamo Animation Integration Guide",l={unversionedId:"getting-started/syntymixamo",id:"getting-started/syntymixamo",title:"Synty Studios Assets and Mixamo Animation Integration Guide",description:"This guide explains the step-by-step process of selecting and modifying Synty Studios' 3D assets using UModeler X, and downloading and applying Mixamo's animations to Unity projects.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started/syntymixamo.md",sourceDirName:"getting-started",slug:"/synty-mixamo-animation-integration",permalink:"/docs/synty-mixamo-animation-integration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/synty-mixamo-animation-integration",image:"img/SyntyMixamo_1.png"},sidebar:"docs",previous:{title:"Shortcuts",permalink:"/docs/shortcuts"},next:{title:"Editable Mesh",permalink:"/docs/editable-mesh"}},m={},d=[{value:"1. Conversion of Synty Studios Assets",id:"1-conversion-of-synty-studios-assets",level:2},{value:"2. Modeling and Texture Editing",id:"2-modeling-and-texture-editing",level:2},{value:"Modeling Mode",id:"modeling-mode",level:3},{value:"UV Unwrapping and Painting Mode",id:"uv-unwrapping-and-painting-mode",level:3},{value:"3. Using Mixamo Bone Structure",id:"3-using-mixamo-bone-structure",level:2},{value:"4. Applying Mixamo Animation",id:"4-applying-mixamo-animation",level:2},{value:"5. Process Video",id:"5-process-video",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"synty-studios-assets-and-mixamo-animation-integration-guide"},"Synty Studios Assets and Mixamo Animation Integration Guide"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This guide explains the step-by-step process of selecting and modifying Synty Studios&#39; 3D assets using UModeler X, and downloading and applying Mixamo&#39;s animations to Unity projects.",src:n(34293).Z,width:"1686",height:"771"})),(0,i.kt)("p",null,"Using ",(0,i.kt)("strong",{parentName:"p"},"UModeler X"),", it's possible to use various 3D assets from ",(0,i.kt)("strong",{parentName:"p"},"Synty Studios")," and animations from ",(0,i.kt)("strong",{parentName:"p"},"Mixamo together")," within Unity."),(0,i.kt)("p",null,"Previously, you would have to ",(0,i.kt)("strong",{parentName:"p"},"export 3D characters created by Synty Studios")," using the ",(0,i.kt)("strong",{parentName:"p"},"FBX exporter"),", then ",(0,i.kt)("strong",{parentName:"p"},"upload them to Mixamo to use the animations"),". However, this guide document allows you to freely apply animations without leaving Unity."),(0,i.kt)("p",null,"The overall workflow is as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Synty Studios")," asset and convert it into a ",(0,i.kt)("strong",{parentName:"p"},"UModeler X object"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, proceed with ",(0,i.kt)("strong",{parentName:"p"},"rigging and skinning")," according to ",(0,i.kt)("strong",{parentName:"p"},"the bone structure of Mixamo"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After that, ",(0,i.kt)("strong",{parentName:"p"},"download the animation from Mixamo")," and import it into your Unity project to ",(0,i.kt)("strong",{parentName:"p"},"apply to the model"),"."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"synty-studios-assets"},"Synty Studios Assets"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Alt text",src:n(91832).Z,width:"1128",height:"473"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.syntystudios.com/"},(0,i.kt)("strong",{parentName:"a"},"Synty Studios"))," is a company that produces and sells ",(0,i.kt)("strong",{parentName:"p"},"high-quality 3D assets")," that can be used in various fields. They are especially popular in the ",(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/publishers/5217"},(0,i.kt)("strong",{parentName:"a"},"Unity Asset Store")),", and the assets purchased can be quickly imported and used in Unity projects."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Alt text",src:n(3671).Z,width:"1386",height:"677"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/publishers/5217"},(0,i.kt)("strong",{parentName:"a"},"Synty Studios Asset Store"))),(0,i.kt)("p",{parentName:"admonition"},"The assets from ",(0,i.kt)("strong",{parentName:"p"},"Synty Studios")," mainly consist of ",(0,i.kt)("strong",{parentName:"p"},"3D backgrounds and character models")," and can be easily edited through ",(0,i.kt)("strong",{parentName:"p"},"UModeler X"),", allowing for customization to fit your project.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"mixamo-service"},"Mixamo Service"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.mixamo.com/"},(0,i.kt)("strong",{parentName:"a"},"Mixamo"))," is an online platform for ",(0,i.kt)("strong",{parentName:"p"},"3D character animation"),". As a service from ",(0,i.kt)("strong",{parentName:"p"},"Adobe"),", Mixamo especially simplifies the animation and rigging processes, enabling game developers and animators to quickly generate and apply character animations without complex technical knowledge."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Alt text",src:n(29625).Z,width:"1215",height:"697"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.mixamo.com/"},(0,i.kt)("strong",{parentName:"a"},"Mixamo Website"))),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Mixamo's library")," offers ",(0,i.kt)("strong",{parentName:"p"},"animation clips")," made with motion capture, allowing you to easily browse and select various character movements."),(0,i.kt)("p",{parentName:"admonition"},"Using ",(0,i.kt)("strong",{parentName:"p"},"Mixamo's automatic rigging feature"),", you can immediately apply animations to your desired character model, significantly reducing the working time for your project.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"1-conversion-of-synty-studios-assets"},"1. Conversion of Synty Studios Assets"),(0,i.kt)("p",null,"The first step in the conversion process is to convert the desired ",(0,i.kt)("strong",{parentName:"p"},"Synty Studios assets")," into ",(0,i.kt)("strong",{parentName:"p"},"UModeler X objects"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import the ",(0,i.kt)("strong",{parentName:"li"},"Synty Studios asset")," into your Unity project. Once the import is complete, you can access the ",(0,i.kt)("strong",{parentName:"li"},"Prefabs folder"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(94829).Z,width:"1091",height:"623"})),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Prefabs folder"),", find the character prefab you want to convert and ",(0,i.kt)("strong",{parentName:"li"},"drag it into the scene"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(86531).Z,width:"1693",height:"1241"})),(0,i.kt)("li",{parentName:"ol"},"In the scene, find and select the object within the placed prefab that contains a ",(0,i.kt)("strong",{parentName:"li"},"Skinned Mesh Renderer")," or ",(0,i.kt)("strong",{parentName:"li"},"Mesh Renderer component"),". UModeler X can only convert objects that have a mesh.\n",(0,i.kt)("img",{alt:"Alt text",src:n(61957).Z,width:"1485",height:"609"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"static-and-skinned-meshes"},(0,i.kt)("strong",{parentName:"h2"},"Static and Skinned Meshes")),(0,i.kt)("p",{parentName:"admonition"},"When creating and using 3D models in Unity, two types of meshes are utilized."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Static Meshes:"),"\nA ",(0,i.kt)("strong",{parentName:"p"},"static mesh")," is an object that does not undergo deformation and does not have animations applied to it. It is primarily used for non-moving objects such as backgrounds, buildings, and furniture."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Although static meshes are 'typically' used, if objects like furniture and buildings require deformation within the object, they can be made as skinned meshes.")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Skinned Meshes:"),"\nA ",(0,i.kt)("strong",{parentName:"p"},"skinned mesh")," is a 3D model that can undergo animations after the rigging process. It is used for moving objects like characters or animals. Skinned meshes use bones and weight values to connect and move vertices, allowing for the representation of animations."),(0,i.kt)("admonition",{parentName:"admonition",type:"tip"},(0,i.kt)("h2",{parentName:"admonition",id:"how-to-check-for-static-and-skinned-meshes-in-unity"},(0,i.kt)("strong",{parentName:"h2"},"How to check for static and skinned meshes in Unity")),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Select the 3D model."),(0,i.kt)("li",{parentName:"ol"},"Upon selection, the model's information will be displayed in the Inspector window.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If there are ",(0,i.kt)("strong",{parentName:"li"},"Mesh Filter")," and ",(0,i.kt)("strong",{parentName:"li"},"Mesh Renderer components"),":\n",(0,i.kt)("img",{alt:"Static Mesh",src:n(96600).Z,width:"977",height:"483"}),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"This is a ",(0,i.kt)("strong",{parentName:"li"},"Static Mesh"),"."),(0,i.kt)("li",{parentName:"ol"},"These two components are responsible for the mesh's information and rendering settings."))),(0,i.kt)("li",{parentName:"ul"},"If there is a ",(0,i.kt)("strong",{parentName:"li"},"Skinned Mesh Renderer component"),":\n",(0,i.kt)("img",{alt:"Skinned Mesh",src:n(91451).Z,width:"967",height:"580"}),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"This is a Skinned Mesh."),(0,i.kt)("li",{parentName:"ol"},"This component supports animation and has the ability to deform the mesh according to the bones and weight values.")))))))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Hierarchy tab"),", ",(0,i.kt)("strong",{parentName:"li"},"right-click")," the selected object, and choose ",(0,i.kt)("strong",{parentName:"li"},"UModeler X")," > ",(0,i.kt)("strong",{parentName:"li"},"UModelerize Merge Vertices"),(0,i.kt)("img",{alt:"Alt text",src:n(35261).Z,width:"1231",height:"585"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UModelerize Merge Vertices")," is used when you want to merge vertices located in the same position during the conversion to a UModeler X object using UModelerize."),(0,i.kt)("li",{parentName:"ul"},"Since ",(0,i.kt)("strong",{parentName:"li"},"Synty Studios' low-polygon style assets")," have each face separated, resulting in divided vertices, it is necessary to merge these vertices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UModeler X")," maintains the hard edge state even after vertices are merged using UModelerize Merge Vertices.")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h2",{parentName:"admonition",id:"resolving-scale-issues-before-applying-animation"},"Resolving Scale Issues Before Applying Animation"),(0,i.kt)("p",{parentName:"admonition"},"Before rigging and applying animation, it's essential to ensure the character's transform values, especially the ",(0,i.kt)("strong",{parentName:"p"},"scale value"),", are correct."),(0,i.kt)("p",{parentName:"admonition"},"Sometimes, after UModelerizing, you might find that the scale value is not 1. This issue arises if the original object's scale was not 1 before UModelerizing. Applying Mixamo animations in this state can lead to the character unexpectedly enlarging or shrinking during animation playback."),(0,i.kt)("hr",{parentName:"admonition"}),(0,i.kt)("h3",{parentName:"admonition",id:"scale-value-initialization"},(0,i.kt)("strong",{parentName:"h3"},"Scale Value Initialization")),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Check the transform values of the object before conversion, or of the character that has become a UModeler X object through UModelerize, to ensure the ",(0,i.kt)("strong",{parentName:"li"},"scale is 1"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(29897).Z,width:"1481",height:"773"})),(0,i.kt)("li",{parentName:"ol"},"If the scale value is not 1, select the Reset X Form tool from the ",(0,i.kt)("strong",{parentName:"li"},"Misc group in UModeler X's modeling mode"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(73308).Z,width:"1147",height:"515"})),(0,i.kt)("li",{parentName:"ol"},"After selecting the ",(0,i.kt)("strong",{parentName:"li"},"Reset X Form")," tool, click the ",(0,i.kt)("strong",{parentName:"li"},"Reset Scale")," button to initialize the scale value to 1\n",(0,i.kt)("img",{alt:"Alt text",src:n(34722).Z,width:"1543",height:"778"}))),(0,i.kt)(o.Z,{items:[{type:"link",label:"Reset X Form Tool",href:"/docs/modeling/reset-xform-tool"}],mdxType:"DocCardList"}),(0,i.kt)("p",{parentName:"admonition"},"It's recommended to always check and proceed with this process after UModelerizing.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"2-modeling-and-texture-editing"},"2. Modeling and Texture Editing"),(0,i.kt)("p",null,"After converting to UModeler X objects via UModelerize, you can proceed with editing using various modes and editors of ",(0,i.kt)("strong",{parentName:"p"},"UModeler X"),"."),(0,i.kt)("h3",{id:"modeling-mode"},"Modeling Mode"),(0,i.kt)("p",null,"You can make modeling edits using the ",(0,i.kt)("strong",{parentName:"p"},"modeling mode of UModeler X"),". For detailed information on the features and how to use modeling mode, please refer to the following manual."),(0,i.kt)(o.Z,{items:[{type:"link",label:"Modeling Mode",href:"/docs/modeling-mode"}],mdxType:"DocCardList"}),(0,i.kt)("h3",{id:"uv-unwrapping-and-painting-mode"},"UV Unwrapping and Painting Mode"),(0,i.kt)("p",null,"Before using painting mode for texture editing, ",(0,i.kt)("strong",{parentName:"p"},"UV unwrapping")," is necessary. Since ",(0,i.kt)("strong",{parentName:"p"},"Synty Studios' assets")," are designed with very small UVs placed on textures with color sections set for each area, rather than using UV across the entire texture, it is necessary to unwrap the UVs before painting textures in painting mode."),(0,i.kt)("p",null,"For methods and the importance of using the UV editor for UV unwrapping, please refer to the guide document below."),(0,i.kt)(o.Z,{items:[{type:"link",label:"UV Editor Guide",href:"/docs/uveditor/guide"}],mdxType:"DocCardList"}),(0,i.kt)("p",null,"Once ",(0,i.kt)("strong",{parentName:"p"},"UV unwrapping is complete"),", you can switch to painting mode, which allows for texture painting, and edit the texture. For detailed information on the ",(0,i.kt)("strong",{parentName:"p"},"features and how to use painting mode"),", please refer to the following manual."),(0,i.kt)(o.Z,{items:[{type:"link",label:"Painting Mode",href:"/docs/painting-mode"}],mdxType:"DocCardList"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-using-mixamo-bone-structure"},"3. Using Mixamo Bone Structure"),(0,i.kt)("p",null,"To apply ",(0,i.kt)("strong",{parentName:"p"},"Mixamo animations")," to ",(0,i.kt)("strong",{parentName:"p"},"Synty Studios character assets"),", you need to match the bone structure."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After accessing the ",(0,i.kt)("a",{parentName:"li",href:"https://www.mixamo.com/#/"},(0,i.kt)("strong",{parentName:"a"},"Mixamo website")),", select ",(0,i.kt)("strong",{parentName:"li"},"Animations")," from the top category.\n",(0,i.kt)("img",{alt:"Alt text",src:n(25503).Z,width:"1145",height:"275"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you are new to ",(0,i.kt)("a",{parentName:"li",href:"https://www.mixamo.com/#/"},(0,i.kt)("strong",{parentName:"a"},"Mixamo")),", you can see animations in the T-pose state.\n",(0,i.kt)("img",{alt:"Alt text",src:n(41319).Z,width:"2123",height:"1051"})),(0,i.kt)("li",{parentName:"ul"},"If you have used Mixamo before, type ",(0,i.kt)("strong",{parentName:"li"},"T-pose")," in the search bar to find and select the T-Pose animation\n",(0,i.kt)("img",{alt:"Alt text",src:n(20215).Z,width:"1215",height:"779"})))),(0,i.kt)("li",{parentName:"ol"},"Press the ",(0,i.kt)("strong",{parentName:"li"},"Download button"),", then press the ",(0,i.kt)("strong",{parentName:"li"},"Download button")," again on the download options screen to download the animation file\n",(0,i.kt)("img",{alt:"Alt text",src:n(10902).Z,width:"1569",height:"1115"}),(0,i.kt)("img",{alt:"Alt text",src:n(19296).Z,width:"1595",height:"595"})),(0,i.kt)("li",{parentName:"ol"},"Import the downloaded fbx file into your ",(0,i.kt)("strong",{parentName:"li"},"Unity project"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(67546).Z,width:"1539",height:"867"})),(0,i.kt)("li",{parentName:"ol"},"Drag it into the scene, and in the ",(0,i.kt)("strong",{parentName:"li"},"Hierarchy tab"),", copy and separate ",(0,i.kt)("strong",{parentName:"li"},"mixamorig:Hips"),", a child object of the said object\n",(0,i.kt)("img",{alt:"Alt text",src:n(89290).Z,width:"1473",height:"585"})),(0,i.kt)("li",{parentName:"ol"},"After separating the ",(0,i.kt)("strong",{parentName:"li"},"mixamorig:Hips")," object, delete the model object.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This bone structure should be applied to the ",(0,i.kt)("strong",{parentName:"li"},"UModelerized Synty Studios character asset"),"."))),(0,i.kt)("li",{parentName:"ol"},"Register the bones as child objects of the UModeler X object.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete the existing ",(0,i.kt)("strong",{parentName:"li"},"Root objects")," and assign the ",(0,i.kt)("strong",{parentName:"li"},"mixamorig:Hips object"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(54241).Z,width:"1403",height:"435"})))),(0,i.kt)("li",{parentName:"ol"},"In the rigging mode, drag the ",(0,i.kt)("strong",{parentName:"li"},"mixamorig:Hips object")," to the ",(0,i.kt)("strong",{parentName:"li"},"Root Bone slot")," and click the ",(0,i.kt)("strong",{parentName:"li"},"Remap Rigging button")," to proceed with the rigging.\n",(0,i.kt)("img",{alt:"Alt text",src:n(58243).Z,width:"1509",height:"967"})),(0,i.kt)("li",{parentName:"ol"},"You may need to adjust the position of the bones depending on the character.\n",(0,i.kt)("img",{alt:"Alt text",src:n(10004).Z,width:"2231",height:"1411"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bones can be selected in the ",(0,i.kt)("strong",{parentName:"li"},"Bone Tree area")," of rigging mode,"),(0,i.kt)("li",{parentName:"ul"},"Or, With the Enable Clicking On Bones feature activated, you can directly select bones in the scene by ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Shift-clicking"))," on them."))),(0,i.kt)("li",{parentName:"ol"},"Proceed with the ",(0,i.kt)("strong",{parentName:"li"},"skinning process"),", which connects the vertices of the polygons to the bones.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Even if the position of the bones has been modified to fit the shape of the character, the actual vertices and the bones are not connected. In this case, the actual vertices do not follow when the bones move, and to solve this, you must go through a process called ",(0,i.kt)("strong",{parentName:"li"},"skinning"),"."),(0,i.kt)("li",{parentName:"ul"},"Skinning is the process of connecting bones and the surface vertices together so that when the bone moves, the polygon moves along with it. You can simply use the ",(0,i.kt)("strong",{parentName:"li"},"Auto Weight tool")," or other skinning-related tools.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"skinning-related-tools"},"Skinning Related Tools"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use weight editing tools to perform this process. Tools for editing weights are as follows:"),(0,i.kt)(o.Z,{items:[{type:"link",label:"Weight Tool",href:"/docs/rigging/weight-tool"},{type:"link",label:"Weight Brush Tool",href:"/docs/rigging/weight-brush-tool"}],mdxType:"DocCardList"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tools for quickly and conveniently assigning weights automatically are listed below:"),(0,i.kt)(o.Z,{items:[{type:"link",label:"Weight Transfer Tool",href:"/docs/rigging/weight-transfer-tool"},{type:"link",label:"Auto Weight Tool",href:"/docs/rigging/auto-weight-tool"},{type:"link",label:"Envelope Tool",href:"/docs/rigging/envelope-tool"}],mdxType:"DocCardList"})))),(0,i.kt)("p",null,"For a comprehensive guide on rigging mode, please refer to the guide below."),(0,i.kt)(o.Z,{items:[{type:"link",label:"Rigging Mode Guide",href:"/docs/rigging/guide"}],mdxType:"DocCardList"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"4-applying-mixamo-animation"},"4. Applying Mixamo Animation"),(0,i.kt)("p",null,"Once the character's bone setup and skinning processes are completed through Rigging Mode, it's time to apply the animation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access the ",(0,i.kt)("a",{parentName:"li",href:"https://www.mixamo.com/#/"},(0,i.kt)("strong",{parentName:"a"},"Mixamo website")),", select the animation you want, and click the ",(0,i.kt)("strong",{parentName:"li"},"Download button"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(76078).Z,width:"2023",height:"1211"})),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Download Settings window"),", adjust the following settings:\n",(0,i.kt)("img",{alt:"Alt text",src:n(31490).Z,width:"1909",height:"779"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Format"),": Set to FBX Binary (.fbx) format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skin"),": Select ",(0,i.kt)("strong",{parentName:"li"},"'Without Skin'")," to import only the animation. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Since rigging has already been completed through UModeler X, modeling is not required."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Frames per Second"),": Represents the number of frames per second, typically set to 30."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keyframe Reduction"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Animations provided by the ",(0,i.kt)("strong",{parentName:"li"},"Mixamo service")," consist of motion capture data, including numerous animation key points for each frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keyframe Reduction")," is a feature that reduces the number of key points included in the animation, simplifying the data to make the animation easier to manage. "),(0,i.kt)("li",{parentName:"ul"},"You can reduce the number of keyframes if necessary, but be aware that this may occasionally distort the animation."))))),(0,i.kt)("li",{parentName:"ol"},"After adjusting the settings, click the ",(0,i.kt)("strong",{parentName:"li"},"Download button")," to download the animation file, and then import it into your Unity project."),(0,i.kt)("li",{parentName:"ol"},"Select the character, and add an ",(0,i.kt)("strong",{parentName:"li"},"Animation component")," from the ",(0,i.kt)("strong",{parentName:"li"},"Inspector tab"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(18849).Z,width:"1269",height:"609"})),(0,i.kt)("li",{parentName:"ol"},"Drag and drop the downloaded and imported animation file into the ",(0,i.kt)("strong",{parentName:"li"},"Animation component"),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(82452).Z,width:"1813",height:"803"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The animation file is created under the imported FBX, named ",(0,i.kt)("strong",{parentName:"li"},"'mixamo.com'"),"."))),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"Animation window")," by clicking ",(0,i.kt)("strong",{parentName:"li"},"Window > Animation > Animation")," or pressing ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Ctrl+6")),".\n",(0,i.kt)("img",{alt:"Alt text",src:n(19655).Z,width:"1167",height:"635"})),(0,i.kt)("li",{parentName:"ol"},"Press the ",(0,i.kt)("strong",{parentName:"li"},"play button")," in the Animation window to start the animation playback.\n",(0,i.kt)("img",{alt:"Alt text",src:n(47394).Z,width:"2057",height:"1709"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the bones and vertices do not move as desired, you should adjust them using weight-related tools."),(0,i.kt)("li",{parentName:"ul"},"If editing is difficult while the animation is playing, you can disable the ",(0,i.kt)("strong",{parentName:"li"},"Preview button")," at the top left of the Animation window to return to the T-pose state and then proceed with your work.")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"5-process-video"},"5. Process Video"),(0,i.kt)("div",{class:"video-container"},(0,i.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/frix0Taik8w",frameborder:"0",allowfullscreen:""})))}c.isMDXComponent=!0},91451:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Guide_Skinned-9ee141a032c571b5f0c2ba4e5eae55df.png"},96600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Rigging_Guide_Static-63b3f19aadaa63fd2a3eac4e9fcf4982.png"},29625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo-62425f0d16d1e51f9c04d2a35e8655c5.png"},25503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_01-2be5e407fec34c393567c61e34eafa21.png"},41319:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_02-121a676cecf0b5245a55cb477abc9ae4.png"},20215:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_03-9401fb6a297159226f94655891f9deba.png"},10902:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_04-d81b25dc778480ba0be4c576ecc712da.png"},19296:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_05-3c0033d8a9bf4bac060afb7888cdd43e.png"},67546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_06-4ce9a05ba2be791601ff0e3dd0c3785b.png"},89290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_07-177e701bf27adece61fcda89e0085c89.png"},54241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_08-417744d96181f8102ca0ef0123a6def0.png"},58243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_09-42d3b05012f5d366c3ed7269da69b803.png"},10004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_10-17c3ffd515ee59e4bc5fc596dde0b4af.png"},76078:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_ani_01-f81e04682269abc98c917073fdb2dbba.png"},31490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_ani_02-3875fca7d19473ac25028a16f077cce6.png"},18849:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_ani_03-4e9b14b7b61b2f40e365fa1ca401df78.png"},82452:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_ani_04-1faa1f9f363454363972fa66b08682bf.png"},19655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_ani_05-27f00f5f3b669198f8e233e533e41223.png"},47394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Mixamo_ani_06-c121b0d0fddd21b8bf5b186fa7c4f854.png"},34293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SyntyMixamo_1-6e057971d537344159072306da9885c8.png"},3671:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SyntyStudiosStore_Thumbnail-c00b715b5d53aa378fd1e35d9cc2de93.png"},94829:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_1-390f5aeb1677ed6fd032597a11239e8f.png"},86531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_2-043431751f859070b55f2d762af120a7.png"},61957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_3-99c59c7eb3330d3a20335f0f42e45139.png"},35261:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_4-b9e7878f7ae4a97998cc1f2e0b41fbdb.png"},29897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_5-12dfa8ad922164794324d8af4d5b7903.png"},73308:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_6-b71bf593d9570cdfdac2e7e3f5e7bb40.png"},34722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Synty_7-4a578d351686ed1f12fd527d3ec37189.png"},91832:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/synty-studios-logo-f2830a578c1f817ee090309df1404107.png"}}]);