"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"useResource"},u=void 0,s={unversionedId:"routing/hooks/use-resource/index",id:"routing/hooks/use-resource/index",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns the resource` object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route.",source:"@site/docs/routing/hooks/use-resource/index.md",sourceDirName:"routing/hooks/use-resource",slug:"/routing/hooks/use-resource/",permalink:"/docs/routing/hooks/use-resource/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-resource/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1706882294,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{title:"useResource"},sidebar:"mainSidebar",previous:{title:"Remix",permalink:"/docs/routing/integrations/remix/"},next:{title:"useGo",permalink:"/docs/routing/hooks/use-go/"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Without parameters",id:"without-parameters",level:3},{value:"With a resource name or identifier",id:"with-a-resource-name-or-identifier",level:3},{value:"Return Values",id:"return-values",level:2},{value:"resources",id:"resources",level:3},{value:"resource",id:"resource",level:3},{value:"resourceName",id:"resourcename",level:3},{value:"id",id:"id",level:3},{value:"action",id:"action",level:3},{value:"select",id:"select",level:3},{value:"identifier",id:"identifier",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const f={toc:p};function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route."),(0,n.kt)("p",null,"If you pass a resource name or identifier to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object that matches the name or identifier. If there is no match, a temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"without-parameters"},"Without parameters"),(0,n.kt)("p",null,"If you don't pass any parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the current route by default. If there is no match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,n.kt)("h3",{id:"with-a-resource-name-or-identifier"},"With a resource name or identifier"),(0,n.kt)("p",null,"If you pass a resource name or identifier to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the name or identifier. If there is no match, a temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resource } = useResource("posts");\n')),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("h3",{id:"resources"},"resources"),(0,n.kt)("p",null,"An array of resources that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.kt)("h3",{id:"resource"},"resource"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object."),(0,n.kt)("h3",{id:"resourcename"},"resourceName"),(0,n.kt)("p",null,"Resource name of the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object."),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"id")," parameter of the current route."),(0,n.kt)("h3",{id:"action"},"action"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"action")," from the current route if there is a match."),(0,n.kt)("h3",{id:"select"},"select"),(0,n.kt)("p",null,"The function allows you to retrieve a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object and matched ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," by providing either a resource ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier"),". By default, if there is no match for the given ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier"),", the function will return the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," associated with the provided value."),(0,n.kt)("p",null,"If you don't pass any parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResource"),", it will try to infer the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," from the current route. If there is no match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("p",null,"The function also accepts a second parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"force")," which is ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," by default. If you set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", it will not return a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," if there is no match."),(0,n.kt)("h3",{id:"identifier"},"identifier"),(0,n.kt)("p",null,"Identifier value for the current resource, this can either be the ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," property or the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property of the resource."),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)(d,{module:"@refinedev/core/useResource",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resources"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#interfaces"},(0,n.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#interfaces"},(0,n.kt)("inlineCode",{parentName:"a"},"IResourceItem")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"a"},"undefined")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#basekey"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"clone"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"select"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(resourceName: string, force?: boolean) => { resource: IResourceItem")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined, identifier: string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"identifier"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,n.kt)("h4",{id:"interfaces"},"Interfaces"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceComponents {\n  list?: string | React.ComponentType<any> | { component: React.ComponentType<any>; path: string };\n  create?: string | React.ComponentType<any> | { component: React.ComponentType<any>; path: string };\n  edit?: string | React.ComponentType<any> | { component: React.ComponentType<any>; path: string };\n  show?: string | React.ComponentType<any> | { component: React.ComponentType<any>; path: string };\n}\n\ninterface IResourceItem extends IResourceComponents {\n  name: string;\n  identifier?: string;\n  meta?: MetaProps;\n}\n")))}k.isMDXComponent=!0}}]);