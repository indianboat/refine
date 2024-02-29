"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",slug:"javascript-slice",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-17-js-slice/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/javascript-slice",source:"@site/blog/2024-01-31-js-slice.md",title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:10.75,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",slug:"javascript-slice",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-17-js-slice/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubernetes Terminated with exit code 1 error",permalink:"/blog/kubernetes-terminated-with-exit-code-1"},nextItem:{title:"Error Handling With try, catch and finally Blocks in JavaScript",permalink:"/blog/javascript-try-catch-finally"},relatedPosts:[{title:"Synchronous vs. Asynchronous Programming",description:"This article explains the differences between the Syncronous and Asynchronous programming and when to use each.",permalink:"/blog/synchronous-vs-asynchronous",formattedDate:"February 16, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.05,date:"2024-02-16T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.93,date:"2022-08-28T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.515,date:"2021-12-27T00:00:00.000Z"}],authorPosts:[{title:"Setting Up the Invoicer App",description:"We start with setting up the Invoicer app by choosing Ant Design as a UI framework and Strapi as a dataprovider",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.145,date:"2023-04-11T00:00:00.000Z"},{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.83,date:"2022-10-21T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.85,date:"2023-04-13T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is Iteration ?",id:"what-is-iteration-",level:2},{value:"JavaScript Iteration Methods: Complete vs Partial Iteration",id:"javascript-iteration-methods-complete-vs-partial-iteration",level:3},{value:"Overview",id:"overview",level:2},{value:"JS Slice - <code>Array.prototype.slice</code>",id:"js-slice---arrayprototypeslice",level:2},{value:"What is JavaScript Array <code>slice</code> ?",id:"what-is-javascript-array-slice-",level:3},{value:"Slicing an Array: How to Use JavaScript <code>slice</code>",id:"slicing-an-array-how-to-use-javascript-slice",level:3},{value:"JavaScript Array <code>slice</code> vs <code>splice</code>",id:"javascript-array-slice-vs-splice",level:3},{value:"Nuances of JavaScript <code>Array.prototype.slice</code>",id:"nuances-of-javascript-arrayprototypeslice",level:3},{value:"<code>Array.prototype.slice</code>: Creating Arrays from a List of Arguments",id:"arrayprototypeslice-creating-arrays-from-a-list-of-arguments",level:3},{value:"When to use JavaScript slice method?",id:"when-to-use-javascript-slice-method",level:2},{value:"JS String Slice - <code>String.prototype.slice</code>",id:"js-string-slice---stringprototypeslice",level:2},{value:"Slicing a JavaScript String: How to Use <code>String.prototype.slice</code>",id:"slicing-a-javascript-string-how-to-use-stringprototypeslice",level:3},{value:"JavaScript String Slice Nuances",id:"javascript-string-slice-nuances",level:3},{value:"Summary",id:"summary",level:2}],d={toc:m};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"This article was last updated on January 31, 2024 to add new sections and organize content for better understanding of JS slice method."))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This post is about the JavaScript slice method, where we explore ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.slice")," in depth."),(0,n.kt)("p",null,"The JavaScript Iteration Methods Series covers posts on iteration methods that are used to loop over a collection of data to act on the items or produce side effects from them. Iteration operations, especially with arrays and strings, are very common in front end development with libraries like React and Angular.js."),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-iteration-"},"What is Iteration ?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#javascript-iteration-methods-complete-vs-partial-iteration"},"JavaScript Iteration Methods: Complete vs Partial Iteration")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#js-slice---arrayprototypeslice"},"JS Slice - ",(0,n.kt)("inlineCode",{parentName:"a"},"Array.prototype.slice")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-javascript-array-slice-"},"What is JavaScript Array ",(0,n.kt)("inlineCode",{parentName:"a"},"slice")," ?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#slicing-an-array-how-to-use-javascript-slice"},"Slicing an Array: How to Use JavaScript ",(0,n.kt)("inlineCode",{parentName:"a"},"slice"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#javascript-array-slice-vs-splice"},"JavaScript Array ",(0,n.kt)("inlineCode",{parentName:"a"},"slice")," vs ",(0,n.kt)("inlineCode",{parentName:"a"},"splice"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#nuances-of-javascript-arrayprototypeslice"},"Nuances of JavaScript ",(0,n.kt)("inlineCode",{parentName:"a"},"Array.prototype.slice"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#arrayprototypeslice-creating-arrays-from-a-list-of-arguments"},(0,n.kt)("inlineCode",{parentName:"a"},"Array.prototype.slice"),": Creating Arrays from a List of Arguments")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#when-to-use-javascript-slice-method"},"When to use JavaScript slice method?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#js-string-slice---stringprototypeslice"},"JS String Slice - ",(0,n.kt)("inlineCode",{parentName:"a"},"String.prototype.slice")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#slicing-a-javascript-string-how-to-use-stringprototypeslice"},"Slicing a JavaScript String: How to Use ",(0,n.kt)("inlineCode",{parentName:"a"},"String.prototype.slice"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#javascript-string-slice-nuances"},"JavaScript String Slice Nuances"))))),(0,n.kt)("h2",{id:"what-is-iteration-"},"What is Iteration ?"),(0,n.kt)("p",null,"Iteration is the process of looping through a collection of data and performing action on each item in order to manipulate it or create a side effect from it. Common examples of iteration methods in JavaScript are ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce"),"."),(0,n.kt)("p",null,"There are other iteration methods which are not as often used, but when needed are always handy tools for iterating over arrays, strings and objects. JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"some()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"every()")," are such examples."),(0,n.kt)("h3",{id:"javascript-iteration-methods-complete-vs-partial-iteration"},"JavaScript Iteration Methods: Complete vs Partial Iteration"),(0,n.kt)("p",null,"Some iteration methods, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map")," iterate over all items in a collection. Others like ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.some")," iterate over the array partially, if not required completely."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In this post, we look into the details of using ",(0,n.kt)("strong",{parentName:"p"},"JavaScript slice")," which is an iteration method available with identical implementations in ",(0,n.kt)("inlineCode",{parentName:"p"},"Array")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"String")," prototypes. We get into the nuances of the two versions with examples involving both of these object types."),(0,n.kt)("p",null,"We set off with an example that expounds some general cases for selecting and storing a section from a source array. Then we see a couple of more interesting examples that help us generate arrays from arguments passed to a function using ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.call")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind"),"."),(0,n.kt)("p",null,"Towards the end, we explore the usage and quirks of the ",(0,n.kt)("inlineCode",{parentName:"p"},"String")," version of JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," with examples of extracting substrings from a source string."),(0,n.kt)("p",null,"Let's start with the array version of Javascript ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()"),"."),(0,n.kt)("h2",{id:"js-slice---arrayprototypeslice"},"JS Slice - ",(0,n.kt)("inlineCode",{parentName:"h2"},"Array.prototype.slice")),(0,n.kt)("p",null,"This section covers the usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"Array")," version of JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()"),"."),(0,n.kt)("h3",{id:"what-is-javascript-array-slice-"},"What is JavaScript Array ",(0,n.kt)("inlineCode",{parentName:"h3"},"slice")," ?"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," is a JS ",(0,n.kt)("inlineCode",{parentName:"p"},"Array"),' method that is used to extract a contiguous subarray or "slice" from an existing array.'),(0,n.kt)("p",null,"JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," can take two arguments: the ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"end")," indicator of the slice -- both of which are optional. It can also be invoked without any argument. So, it has the following call signatures:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// Method signature\n\nslice();\nslice(start);\nslice(start, end);\n")),(0,n.kt)("h3",{id:"slicing-an-array-how-to-use-javascript-slice"},"Slicing an Array: How to Use JavaScript ",(0,n.kt)("inlineCode",{parentName:"h3"},"slice")),(0,n.kt)("p",null,"A typical example of slicing an array involves producing a contiguous section from a source array. For example, the first three items, last three items and some items spanning from a certain index up until another index."),(0,n.kt)("p",null,"As shown in the examples below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const elements = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\nconst firstThree = elements.slice(0, 3);\nconst lastThree = elements.slice(-3, elements.length);\nconst fromThirdToFifth = elements.slice(2, 5);\n')),(0,n.kt)("p",null,"Both arguments of ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()")," stand for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"zero-based"))," index numbers. Negative values denote offset from the end of the array."),(0,n.kt)("p",null,"The first argument (",(0,n.kt)("inlineCode",{parentName:"p"},"0")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"firstThree")," assignment above) represents the starting index or offset in the source array where slicing should begin. The second argument (",(0,n.kt)("inlineCode",{parentName:"p"},"3"),") is the index or offset ",(0,n.kt)("strong",{parentName:"p"},"before")," which extraction should stop."),(0,n.kt)("p",null,"If we log the extracted values above, we can see the three elements we want for each slice:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'console.log(firstThree); // ["Please", "Send", "Cats"]\nconsole.log(lastThree); // ["Make", "Sure", "Padlocked"]\nconsole.log(fromThirdToFifth); // ["Cats", "Monkeys", "And"]\n')),(0,n.kt)("p",null,"It is important to notice that the item represented by the second argument is ",(0,n.kt)("strong",{parentName:"p"},"excluded")," from the extracted slice."),(0,n.kt)("h3",{id:"javascript-array-slice-vs-splice"},"JavaScript Array ",(0,n.kt)("inlineCode",{parentName:"h3"},"slice")," vs ",(0,n.kt)("inlineCode",{parentName:"h3"},"splice")),(0,n.kt)("p",null,"We should also note that unlike in ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.splice"),", the second argument of ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," does ",(0,n.kt)("strong",{parentName:"p"},"not")," stand for ",(0,n.kt)("em",{parentName:"p"},"the number of items to be extracted"),". In JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"splice"),", the second argument is rather the count of items to be ",(0,n.kt)("strong",{parentName:"p"},"deleted"),", as opposed to being ",(0,n.kt)("strong",{parentName:"p"},"extracted"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.splice")," is very dissimilar from ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," because JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"splice()")," mutates the original array, whereas ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()")," creates a copy."),(0,n.kt)("h3",{id:"nuances-of-javascript-arrayprototypeslice"},"Nuances of JavaScript ",(0,n.kt)("inlineCode",{parentName:"h3"},"Array.prototype.slice")),(0,n.kt)("p",null,"The sections below highlight with examples the nuances of how the JS Array ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," method behaves in scenarios with different argument values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JavaScript Array ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," with No Arguments")),(0,n.kt)("p",null,"If we don't pass any argument to JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"slice"),", we get a ",(0,n.kt)("strong",{parentName:"p"},"shallow copy")," of the source array with all items:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const allCopied = elements.slice();\n\nconsole.log(allCopied);\n// (12) ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,n.kt)("p",null,"It's effectively ",(0,n.kt)("inlineCode",{parentName:"p"},"[...elements]"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JavaScript Array ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," Method with No Second Argument")),(0,n.kt)("p",null,"If we don't pass the second argument, the extracted JavaScript Array slice extends to the last element:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const fromThird = elements.slice(2);\nconst lastThree = elements.slice(-3, elements.length);\nconst lastThreeWithNoSecArg = elements.slice(-3);\n\nconsole.log(fromThird);\n// (10) ["Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\nconsole.log(lastThree); // (3) ["Make", "Sure", "Padlocked"]\nconsole.log(lastThreeWithNoSecArg); // (3) ["Make", "Sure", "Padlocked"]\n')),(0,n.kt)("p",null,"Notice that ",(0,n.kt)("inlineCode",{parentName:"p"},"lastThreeWithNoSecArg")," evaluates to the same slice as ",(0,n.kt)("inlineCode",{parentName:"p"},"lastThree"),", albeit missing the second argument."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JavaScript ",(0,n.kt)("inlineCode",{parentName:"strong"},"Array.prototype.slice")," with Negative Offsets")),(0,n.kt)("p",null,"Notice also above that, we can pass in negative numbers as arguments. Negative values of the arguments denote offset positions counted backwards from the last item. We can do this for both arguments:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const latestTwoBeforeLast = elements.slice(-3, -1);\nconsole.log(latestTwoBeforeLast); // (2) ["Make", "Sure"]\n')),(0,n.kt)("p",null,"Here, with ",(0,n.kt)("inlineCode",{parentName:"p"},"latestTwoBeforeLast"),", we're getting the last two items prior to the final one."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JS ",(0,n.kt)("inlineCode",{parentName:"strong"},"Array.prototype.slice"),": Starting Position Greater Than End Position")),(0,n.kt)("p",null,"If we pass in a greater value for ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," than ",(0,n.kt)("inlineCode",{parentName:"p"},"end"),", we get an empty array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const somewhereWeDontKnow = elements.slice(5, 2);\nconsole.log(somewhereWeDontKnow); // []\n")),(0,n.kt)("p",null,"This indicates we have to always start slicing from a lesser positive index."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Array.prototype.slice"),": Starting Position Greater Than Length of Array")),(0,n.kt)("p",null,"Likewise, if we pass in a greater value for ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," than array's ",(0,n.kt)("inlineCode",{parentName:"p"},"length"),", we get an empty array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const somewhereInOuterSpace = elements.slice(15, 2);\nconsole.log(somewhereInOuterSpace); // []\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Using JS ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," with Sparse Arrays")),(0,n.kt)("p",null,"If our target slice has sparse items, they are also copied over:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const elements = [\n  "Please",\n  "Send",\n  ,\n  "Cats",\n  ,\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\nconst sparseItems = elements.slice(0, 6);\n\nconsole.log(sparseItems);\n// (6) [ \'Please\', \'Send\', <1 empty item>, \'Cats\', <1 empty item>, \'Monkeys\' ]\n')),(0,n.kt)("h3",{id:"arrayprototypeslice-creating-arrays-from-a-list-of-arguments"},(0,n.kt)("inlineCode",{parentName:"h3"},"Array.prototype.slice"),": Creating Arrays from a List of Arguments"),(0,n.kt)("p",null,"In this section we go a bit crazy about slicing. We develop two interesting ways with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," to construct an array from a list of arguments passed to a function."),(0,n.kt)("p",null,"The first one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const createArray = (...args) => Array.prototype.slice.call(args);\nconst array = createArray(1, 2, 3, 4);\nconsole.log(array); // (4) [1, 2, 3, 4]\n")),(0,n.kt)("p",null,"Here, we received ",(0,n.kt)("inlineCode",{parentName:"p"},"args")," as a list first, but converted it to an array with rest params ",(0,n.kt)("inlineCode",{parentName:"p"},"...args"),". We then bound the array to ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.call")," and stored the function in ",(0,n.kt)("inlineCode",{parentName:"p"},"createArray"),"."),(0,n.kt)("p",null,"Invoking ",(0,n.kt)("inlineCode",{parentName:"p"},"createArray")," with a list of arguments places them inside ",(0,n.kt)("inlineCode",{parentName:"p"},"args")," and a copy of it is created with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice"),". So, we get the new array as output."),(0,n.kt)("p",null,"That was easy."),(0,n.kt)("p",null,"The next level way of doing this is in the messiest possible way:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const boundSlice = Function.prototype.call.bind(Array.prototype.slice);\n\nconst createArray = (...args) => boundSlice(args);\n\nconst array = createArray(1, 2, 3, 4);\nconsole.log(array); // (4) [1, 2, 3, 4]\n")),(0,n.kt)("p",null,"It seems like an overhead, but what we are doing is declaring two helper functions."),(0,n.kt)("p",null,"The first one, ",(0,n.kt)("inlineCode",{parentName:"p"},"boundSlice"),", is derived from binding the ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.call")," method with ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," which is an array function object. So, we are getting a copy of ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.call")," bound to ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," and storing it in ",(0,n.kt)("inlineCode",{parentName:"p"},"boundSlice"),"."),(0,n.kt)("p",null,"This basically means, if we invoke ",(0,n.kt)("inlineCode",{parentName:"p"},"boundSlice()"),", we are in effect invoking ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice.call"),". When we then pass in an array to ",(0,n.kt)("inlineCode",{parentName:"p"},"boundSlice()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," is invoked and a copy is created from it."),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"createArray()"),", we are accumulating the items as rest arguments and passing them to ",(0,n.kt)("inlineCode",{parentName:"p"},"boundSlice()")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"args")," array. So, whatever we pass to ",(0,n.kt)("inlineCode",{parentName:"p"},"createArray()")," is returned as items inside an array copied from ",(0,n.kt)("inlineCode",{parentName:"p"},"args"),"."),(0,n.kt)("h2",{id:"when-to-use-javascript-slice-method"},"When to use JavaScript slice method?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Creating a Subset of an Array:")," If you need a portion of an array without changing the original array, ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," is the ideal choice.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copying an Array:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," can be used to create a shallow copy of an entire array. This is useful when you want to work with a copy of an array and leave the original array unchanged.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"String Manipulation:")," While often associated with arrays, ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," is also applicable to strings. It's used to extract a substring from a string, based on the start and end indices provided.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Creating Paginated Data:")," When implementing pagination, ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," can be used to get the subset of data that should be displayed on the current page.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Removing Elements Conditionally:")," While ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," itself doesn't remove elements, it can be used in combination with other methods to conditionally remove elements from an array.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Non-Destructive Array Manipulation:")," In scenarios where you need to ensure the original data structure remains unchanged, ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," is preferable over methods like ",(0,n.kt)("inlineCode",{parentName:"p"},"splice")," which modify the array in place.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Working with the ",(0,n.kt)("inlineCode",{parentName:"strong"},"arguments")," Object:")," In functions, to convert the ",(0,n.kt)("inlineCode",{parentName:"p"},"arguments")," object into a real array, ",(0,n.kt)("inlineCode",{parentName:"p"},"slice")," can be used. This allows you to use Array methods on ",(0,n.kt)("inlineCode",{parentName:"p"},"arguments"),"."))),(0,n.kt)("h2",{id:"js-string-slice---stringprototypeslice"},"JS String Slice - ",(0,n.kt)("inlineCode",{parentName:"h2"},"String.prototype.slice")),(0,n.kt)("p",null,"In this section, we explore the String version of ",(0,n.kt)("strong",{parentName:"p"},"JavaScript ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice()"))," method with examples of creating substrins from a source string."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.slice")," does the exact same thing as ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice"),", but with characters in a string as items."),(0,n.kt)("p",null,"Like ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice"),", it takes two optional arguments, ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"end"),". And it works without an argument as well:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// Method signature\n\nslice();\nslice(start);\nslice(end);\n")),(0,n.kt)("h3",{id:"slicing-a-javascript-string-how-to-use-stringprototypeslice"},"Slicing a JavaScript String: How to Use ",(0,n.kt)("inlineCode",{parentName:"h3"},"String.prototype.slice")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.slice")," is useful for directly working on strings. It removes the hassle of converting a string to an array with ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.split"),"."),(0,n.kt)("p",null,"It can be used like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const mnemonic =\n  "Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked";\n\nconst firstThreeChars = mnemonic.slice(0, 3);\nconst lastThreeChars = mnemonic.slice(-3, mnemonic.length);\nconst fromThirdToFifthChars = mnemonic.slice(2, 5);\n\nconsole.log(firstThreeChars); // "Ple"\nconsole.log(lastThreeChars); // "ked"\nconsole.log(fromThirdToFifthChars); // "eas"\n')),(0,n.kt)("p",null,"Again, both arguments represent zero-based index numbers or offset values. Here too, the first argument -- ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"firstThree")," assignment -- stands for the starting index or offset in the source array. And the second argument (",(0,n.kt)("inlineCode",{parentName:"p"},"3"),") denotes the index or offset ",(0,n.kt)("strong",{parentName:"p"},"before")," which extraction should stop."),(0,n.kt)("h3",{id:"javascript-string-slice-nuances"},"JavaScript String Slice Nuances"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Using JavaScript String ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," With No Arguments")),(0,n.kt)("p",null,"Similar to Array ",(0,n.kt)("inlineCode",{parentName:"p"},"slice"),", if we don't pass any argument to String ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()"),", the whole string is copied over:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const mnemonic =\n  "Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked";\nconst memorizedMnemonic = mnemonic.slice();\n\nconsole.log(memorizedMnemonic);\n// "Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JS String ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," with No Second Argument")),(0,n.kt)("p",null,"Here again, if we don't pass the second argument, the copied string extends to the end of the string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const charsFromThird = mnemonic.slice(2);\n\nconsole.log(charsFromThird);\n// "ease Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JavaScript String ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," with Negative Offsets")),(0,n.kt)("p",null,"Similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice"),", negative values for ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"end")," represent offset positions from the end of the array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const mnemonic =\n  "Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked";\n\nconst lastThreeChars = mnemonic.slice(-3);\nconst latestTwoCharsBeforeLast = mnemonic.slice(-3, -1);\n\nconsole.log(lastThreeChars); // "ked"\nconsole.log(latestTwoCharsBeforeLast); // "ke"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JS String ",(0,n.kt)("inlineCode",{parentName:"strong"},"slice")," with Higher Starting Positions")),(0,n.kt)("p",null,"Again, if ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," is greater than ",(0,n.kt)("inlineCode",{parentName:"p"},"end")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"length")," of string, we get an empty string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const inAnotherDimension = mnemonic.slice(5, 2);\nconst doingStringTheory = mnemonic.slice(15, 2);\n\nconsole.log(inAnotherDimension); // ""\nconsole.log(doingStringTheory); // ""\n')),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"In this post, we expounded the ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()")," method in JavaScript. We saw that JavaScript implements ",(0,n.kt)("inlineCode",{parentName:"p"},"slice()")," in two flavors: one for ",(0,n.kt)("inlineCode",{parentName:"p"},"Array"),"s with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," and one for ",(0,n.kt)("inlineCode",{parentName:"p"},"String"),"s with ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.slice"),". We found out through examples that both methods produce a copy of the source object and they are used to extract a target contiguous slice from it."),(0,n.kt)("p",null,"We covered a couple of examples of how function composition and context binding with ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.call")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind")," allows us to define custom functions using ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," to help us generate arrays from a list of arguments."),(0,n.kt)("p",null,"We also saw that ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.slice")," is an identical implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice")," that removes the overhead of converting a string to an array of characters."))}u.isMDXComponent=!0}}]);