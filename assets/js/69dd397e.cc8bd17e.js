"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",slug:"javascript-substring-method",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-23-js-substring/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/javascript-substring-method",source:"@site/blog/2023-10-23-js-substring.md",title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",date:"2023-10-23T00:00:00.000Z",formattedDate:"October 23, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:8.88,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",slug:"javascript-substring-method",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-23-js-substring/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to HTMX",permalink:"/blog/what-is-htmx"},nextItem:{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",permalink:"/blog/kubectl-restart-pod"},relatedPosts:[{title:"TDD vs BDD - A Detailed Guide",description:"We'll be looking at the differences between TDD and BDD, their pros and cons, and how to implement them in a project.",permalink:"/blog/tdd-vs-bdd",formattedDate:"June 9, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:13.085,date:"2023-06-09T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.515,date:"2021-12-27T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",permalink:"/blog/javascript-splice-method",formattedDate:"October 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.03,date:"2023-10-20T00:00:00.000Z"},{title:"Creating an Admin Dashboard with refine",description:"We'll be building a admin backend app for the Pixels client app.",permalink:"/blog/refine-pixels-5",formattedDate:"February 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:18.76,date:"2023-02-18T00:00:00.000Z"},{title:"Essentials of TypeScript Classes",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-classes",formattedDate:"November 7, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.04,date:"2023-11-07T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"JavaScript <code>substring()</code> Method",id:"javascript-substring-method",level:2},{value:"<code>Array.prototype.substring()</code> Method Signature",id:"arrayprototypesubstring-method-signature",level:3},{value:"JavaScript <code>substring()</code> with <code>startIndex</code> Only",id:"javascript-substring-with-startindex-only",level:3},{value:"Extract Tail After First <code>n</code> Characters - JavaScript <code>substring()</code>",id:"extract-tail-after-first-n-characters---javascript-substring",level:3},{value:"JavaScript <code>String.prototype.substring()</code> - Extract a Substring Between Two Points",id:"javascript-stringprototypesubstring---extract-a-substring-between-two-points",level:3},{value:"Extract First <code>n</code> Characters - JavaScript <code>substring()</code>",id:"extract-first-n-characters---javascript-substring",level:3},{value:"Extract Last <code>n</code> Characters Using <code>String.prototype.substring()</code>",id:"extract-last-n-characters-using-stringprototypesubstring",level:3},{value:"Nuances of <code>startIndex</code> and <code>endIndex</code> in JavaScript <code>substring()</code>",id:"nuances-of-startindex-and-endindex-in-javascript-substring",level:2},{value:"JavaScript <code>substring()</code> with <code>startIndex &gt; endIndex</code>",id:"javascript-substring-with-startindex--endindex",level:3},{value:"JavaScripty <code>substring()</code> with Negative <code>startIndex</code> and <code>endIndex</code>",id:"javascripty-substring-with-negative-startindex-and-endindex",level:3},{value:"<code>String.prototype.substring()</code> Comparison",id:"stringprototypesubstring-comparison",level:2},{value:"JavaScript <code>substring()</code> vs <code>slice()</code>",id:"javascript-substring-vs-slice",level:3},{value:"JavaScript <code>substring()</code> vs <code>substr()</code>",id:"javascript-substring-vs-substr",level:3},{value:"Summary",id:"summary",level:2}],m={toc:c};function u(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about how to effectively use the ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.substring()")," method in JavaScript. We go through a few examples to understand how it works, play around to observe a few patterns and explore the quirks."),(0,a.kt)("p",null,"JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," method that is typically used to extract and store part of a string. During the extraction, the original string remains intact, and the target part is returned as a new string."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.substring()")," is handy for producing substrings of characters from a point to another of a parent string. The substring may be from the beginning, in-between specified indexes or from the tail."),(0,a.kt)("p",null,"In this post, we perform some exercise with the JS ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," method by going through a few examples. We start by getting familiar with the method signature of ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.substring()"),", the required argument (",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex"),"), the additional argument (",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),") and understand which ones to use when. We then go ahead and see examples of extracting a number of characters after a starting index, characters from a range between two indexes, characters from the beginning and from the tail. While doing so, we elaborate on a few patterns of extraction from a parent string: namely, that of extracting a tail after first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters, another of producing a substring composed of first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters and that of extracting last ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters."),(0,a.kt)("p",null,"In the later half of the post, we discuss some of the nuances associated with ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," values. In the end, we point out how JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.substring()")," compares to ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," as well as the deprecated method ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.substr()"),"."),(0,a.kt)("p",null,"Step by step, we'll cover the following topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-substring-method"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")," Method"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#arrayprototypesubstring-method-signature"},(0,a.kt)("inlineCode",{parentName:"a"},"Array.prototype.substring()")," Method Signature")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-substring-with-startindex-only"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")," with ",(0,a.kt)("inlineCode",{parentName:"a"},"startIndex")," Only")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extract-tail-after-first-n-characters---javascript-substring"},"Extract Tail After First ",(0,a.kt)("inlineCode",{parentName:"a"},"n")," Characters - JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-stringprototypesubstring---extract-a-substring-between-two-points"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.substring()")," - Extract a Substring Between Two Points")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extract-first-n-characters---javascript-substring"},"Extract First ",(0,a.kt)("inlineCode",{parentName:"a"},"n")," Characters - JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extract-last-n-characters-using-stringprototypesubstring"},"Extract Last ",(0,a.kt)("inlineCode",{parentName:"a"},"n")," Characters Using ",(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.substring()"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nuances-of-startindex-and-endindex-in-javascript-substring"},"Nuances of ",(0,a.kt)("inlineCode",{parentName:"a"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"endIndex")," in JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-substring-with-startindex--endindex"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")," with ",(0,a.kt)("inlineCode",{parentName:"a"},"startIndex > endIndex"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascripty-substring-with-negative-startindex-and-endindex"},"JavaScripty ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")," with Negative ",(0,a.kt)("inlineCode",{parentName:"a"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"endIndex"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#stringprototypesubstring-comparison"},(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.substring()")," Comparison"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-substring-vs-slice"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")," vs ",(0,a.kt)("inlineCode",{parentName:"a"},"slice()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-substring-vs-substr"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"substring()")," vs ",(0,a.kt)("inlineCode",{parentName:"a"},"substr()")))))),(0,a.kt)("h2",{id:"javascript-substring-method"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h2"},"substring()")," Method"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.substring()")," takes two possible arguments: a ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," is mandatory, while ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," can be passed to explicitly indicate the termination of extraction."),(0,a.kt)("h3",{id:"arrayprototypesubstring-method-signature"},(0,a.kt)("inlineCode",{parentName:"h3"},"Array.prototype.substring()")," Method Signature"),(0,a.kt)("p",null,"We can call ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()"),"with the below possible signatures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"substring(startIndex);\nsubstring(startIndex, endIndex);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," represents the point where substring extraction kicks off. The value at ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," is ",(0,a.kt)("strong",{parentName:"p"},"inclusive"),", i.e. it is included in the returned substring. The ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," denotes termination of the extraction. However, the value at ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," is ",(0,a.kt)("strong",{parentName:"p"},"excluded"),". This means that we end extraction at the character ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"before"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),"."),(0,a.kt)("p",null,"Let's see this in action with some examples."),(0,a.kt)("h3",{id:"javascript-substring-with-startindex-only"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")," with ",(0,a.kt)("inlineCode",{parentName:"h3"},"startIndex")," Only"),(0,a.kt)("p",null,"With only ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()"),", we get a substring that begins at ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and spans to the end of the parent string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\nconsole.log(mnemonic.substring(14)); // "cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked."\n')),(0,a.kt)("p",null,"As we can figure out from the string above, chopping starts at ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and we get the tail from that point on."),(0,a.kt)("h3",{id:"extract-tail-after-first-n-characters---javascript-substring"},"Extract Tail After First ",(0,a.kt)("inlineCode",{parentName:"h3"},"n")," Characters - JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")),(0,a.kt)("p",null,"Since we are using a zero-based index for ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex"),", the first ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," number of characters are represented by the index just ",(0,a.kt)("strong",{parentName:"p"},"before")," ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex"),". And since the value at ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," is included in the extracted tail, the following pattern emerges where with ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex = n"),", we get the tail ",(0,a.kt)("strong",{parentName:"p"},"after")," first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters in the parent string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// Extract characters after first 14\nconsole.log(mnemonic.substring(14)); // "cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked."\n\n// Extract tail after first 20\nconsole.log(mnemonic.substring(20)); // "monkeys, and, zebras, in, large, cages, make, sure, padlocked."\n\n// Extract tails after 29\nconsole.log(mnemonic.substring(29)); // "and, zebras, in, large, cages, make, sure, padlocked."\n\n// Extract after 72\nconsole.log(mnemonic.substring(72)); // "padlocked."\n')),(0,a.kt)("h3",{id:"javascript-stringprototypesubstring---extract-a-substring-between-two-points"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"String.prototype.substring()")," - Extract a Substring Between Two Points"),(0,a.kt)("p",null,"When we pass both the ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),", we get a substring of characters in ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex <= str < endIndex")," range:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\nconsole.log(mnemonic.substring(14, 27)); // "cats, monkeys"\n')),(0,a.kt)("p",null,"This means, now we end up with a substring that ends ",(0,a.kt)("strong",{parentName:"p"},"before")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),"."),(0,a.kt)("h3",{id:"extract-first-n-characters---javascript-substring"},"Extract First ",(0,a.kt)("inlineCode",{parentName:"h3"},"n")," Characters - JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")),(0,a.kt)("p",null,"When we need a substring from the start of the parent string, the ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," should be ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\nconsole.log(mnemonic.substring(0, 27)); // "Please send, cats, monkeys"\n')),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex = 0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex = n"),", we get the first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters from the parent string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// First 12 characters\nconsole.log(mnemonic.substring(0, 12)); // "Please, send"\n\n// First 18 characters\nconsole.log(mnemonic.substring(0, 18)); // "Please, send, cats"\n\n// First 27 characters\nconsole.log(mnemonic.substring(0, 27)); // "Please, send, cats, monkeys"\n\n// First 70 characters\nconsole.log(mnemonic.substring(0, 70)); // "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure"\n')),(0,a.kt)("h3",{id:"extract-last-n-characters-using-stringprototypesubstring"},"Extract Last ",(0,a.kt)("inlineCode",{parentName:"h3"},"n")," Characters Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"String.prototype.substring()")),(0,a.kt)("p",null,"We can get the last ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters by leveraging the caller ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// Last 9 characters\nconsole.log(mnemonic.substring(mnemonic.length - 9)); // "padlocked."\n\n// Last 15 characters\nconsole.log(mnemonic.substring(mnemonic.length - 15)); // "sure, padlocked."\n')),(0,a.kt)("p",null,"The way the above pattern works is that ",(0,a.kt)("inlineCode",{parentName:"p"},"mnemonic.length")," sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," ",(0,a.kt)("strong",{parentName:"p"},"just outside")," the parent string. Moving ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," back by ",(0,a.kt)("inlineCode",{parentName:"p"},"-n")," repositions the extraction entry to the tail by ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),". And since we are not passing ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),", extraction continues till the end of the string. So, we get the last ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters."),(0,a.kt)("h2",{id:"nuances-of-startindex-and-endindex-in-javascript-substring"},"Nuances of ",(0,a.kt)("inlineCode",{parentName:"h2"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"endIndex")," in JavaScript ",(0,a.kt)("inlineCode",{parentName:"h2"},"substring()")),(0,a.kt)("p",null,"Other quirks of using ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," include cases when ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," and when either of ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," or both are negative. Let's look at them one by one."),(0,a.kt)("h3",{id:"javascript-substring-with-startindex--endindex"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")," with ",(0,a.kt)("inlineCode",{parentName:"h3"},"startIndex > endIndex")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," ",(0,a.kt)("strong",{parentName:"p"},"swaps")," the indexes to produce the substring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// Swaps to mnemonic.substring(0, 6)\nconsole.log(mnemonic.substring(6, 0)); // "Please"\n')),(0,a.kt)("h3",{id:"javascripty-substring-with-negative-startindex-and-endindex"},"JavaScripty ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")," with Negative ",(0,a.kt)("inlineCode",{parentName:"h3"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"endIndex")),(0,a.kt)("p",null,"A negative value of ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," sets the respective value to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// Same as mnemonic.substring(0, 6)\nconsole.log(mnemonic.substring(-1, 6)); // "Please"\n\n// Same as mnemonic.substring(0, 0)\nconsole.log(mnemonic.substring(-1, -6)); // ""\n\n// // Same as mnemonic.substring(12, 0)\nconsole.log(mnemonic.substring(12, -6)); // "Please, send"\n')),(0,a.kt)("p",null,"In the last invocation above, swapping between ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," is also involved since ",(0,a.kt)("inlineCode",{parentName:"p"},"12 > 0"),". The call is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"mnemonic.substring(0, 12);"),"."),(0,a.kt)("h2",{id:"stringprototypesubstring-comparison"},(0,a.kt)("inlineCode",{parentName:"h2"},"String.prototype.substring()")," Comparison"),(0,a.kt)("p",null,"In this section, we briefly discuss how JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," method differs from ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"substr()"),", which are also similar ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"extraction methods."),(0,a.kt)("h3",{id:"javascript-substring-vs-slice"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")," vs ",(0,a.kt)("inlineCode",{parentName:"h3"},"slice()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.substring()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," both implement string extraction almost identically. However, there are some subtle differences in their implementations."),(0,a.kt)("p",null,"For example, swapping of arguments -- which we saw above in ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," -- doesn't take place in ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex > endIndex"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// Swaps to mnemonic.substring(0, 6)\nconsole.log(mnemonic.substring(6, 0)); // "Please"\n\n// Doesn\'t swap. Returns empty string, meaning non-existent characters\nconsole.log(mnemonic.slice(6, 0)); // ""\n')),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex > endIndex")," returns an empty string."),(0,a.kt)("p",null,"Another difference is when either or both of ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," are negative. In general, when they are negative, ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," wraps ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," to the tail by traversing backward from the last character. And then if ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex < endIndex"),", slicing works:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\n// Zeroes and swaps to mnemonic.substring(0, 18)\nconsole.log(mnemonic.substring(18, -12)); // "Please, send, cats"\n\n// Doesn\'t swap, -12 finds index from tail. String is long enough, slicing works\nconsole.log(mnemonic.slice(20, -12)); // "monkeys, and, zebras, in, large, cages, make, sure"\n.........\n\nconsole.log(mnemonic.substring(-12, 18)); // "Please, send, cats"\n\n// Doesn\'t swap. -12 finds index from tail, but startIndex > endIndex. Returns non-existent string\nconsole.log(mnemonic.slice(-12, 18)); // ""\n.........\n\nconsole.log(mnemonic.substring(-16, -12)); // ""\n\n// Both startIndex and endIndex finds index from tail. startIndex < endIndex. Slicing works\nconsole.log(mnemonic.slice(-16, -12)); // "sure"\n')),(0,a.kt)("h3",{id:"javascript-substring-vs-substr"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring()")," vs ",(0,a.kt)("inlineCode",{parentName:"h3"},"substr()")),(0,a.kt)("p",null,"JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"substr()")," is also another method for extracting substrings from a parent string. However, it is a legacy ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," method that accepts the ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," of the target substring, instead of an index for extraction exit."),(0,a.kt)("p",null,"In other words, with ",(0,a.kt)("inlineCode",{parentName:"p"},"substr()"),", we get indicate the ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," of the substring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\nconsole.log(mnemonic.substring(10, 12)); // "nd"\n\n// Gets 12 characters starting from startIndex onwards\nconsole.log(mnemonic.substr(10, 12)); // "nd, cats, mo"\n')),(0,a.kt)("p",null,"Also, as with ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()"),", with a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substr()")," counts backwards from the last character:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mnemonic = "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";\n\nconsole.log(mnemonic.substring(-10, 12)); // "Please, send"\n\n// startIndex wraps to 10 items from tail. Gets 10 characters from tail, doesn\'t have the other 2\nconsole.log(mnemonic.substr(-10, 12)); // "padlocked."\n')),(0,a.kt)("p",null,"In this case, only ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," characters are picked because ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," out of targeted ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," are not available in the last ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," characters."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this post, we exercised the use of JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," with some basic examples. We first learned that ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," extraction method that returns a target portion from a parent string. We got familiar with the required ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," argument whose value is included in the extracted substring, and also with the ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," argument which indicates termination of the string."),(0,a.kt)("p",null,"We then explored with examples how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," with only ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and discovered how to extract the tail after first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters of the parent string. We also saw how to extract a substring between two points with ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," passed. We found out another pattern where we can produce the first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex"),". We also figured out how we can extract the last ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters using caller ",(0,a.kt)("inlineCode",{parentName:"p"},"length - n"),"."),(0,a.kt)("p",null,"Towards the later half, we touch based on some other nuances of using ",(0,a.kt)("inlineCode",{parentName:"p"},"startIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endIndex")," values. In the end, we compared and discussed how ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," differs in implementation from JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"substr()"),"."))}u.isMDXComponent=!0}}]);