"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-suspense-guide",source:"@site/blog/2024-02-05-react-suspense.md",title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",date:"2024-02-05T00:00:00.000Z",formattedDate:"February 5, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:8.64,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social.png",hide_table_of_contents:!1},prevItem:{title:"Docker Alternatives",permalink:"/blog/docker-alternatives"},nextItem:{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method"},relatedPosts:[{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:13.81,date:"2022-08-26T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"February 2, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:22.54,date:"2024-02-02T00:00:00.000Z"},{title:"Creating Polished Content with React Markdown",description:"We will explore the process of integrating the markdown editor into a Refine application",permalink:"/blog/react-markdown",formattedDate:"August 24, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.83,date:"2023-08-24T00:00:00.000Z"}],authorPosts:[{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"January 18, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:11.17,date:"2024-01-18T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.95,date:"2022-09-09T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.46,date:"2022-08-20T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Suspense?",id:"what-is-react-suspense",level:2},{value:"Comparing React Suspense to Transitions",id:"comparing-react-suspense-to-transitions",level:2},{value:"Use cases of React Suspense",id:"use-cases-of-react-suspense",level:2},{value:"Fetch data using React suspense",id:"fetch-data-using-react-suspense",level:3},{value:"Lazy load components using React suspense",id:"lazy-load-components-using-react-suspense",level:3},{value:"When to use React Suspense",id:"when-to-use-react-suspense",level:2},{value:"React suspense and Error boundaries",id:"react-suspense-and-error-boundaries",level:2},{value:"Common Mistakes When Using React Suspense",id:"common-mistakes-when-using-react-suspense",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function m(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"This article was last updated on February 5, 2024 to reorganize content for better understanding of React Suspense."))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"React suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. Content delivery and site performance are important factors for web applications. You must deliver content quickly and effectively for better user experience."),(0,a.kt)("p",null,"Traditionally, you need to use state to manage the different stages when fetching data from an API. With React Suspense, you can suspend rendering a component that is still loading data and render a fallback UI. This improves both developer and user experience."),(0,a.kt)("p",null,"Similarly, you can use React suspense to split large React components into chunks and lazy load them to reduce the initial load time and bundle size."),(0,a.kt)("p",null,"In this article, we will discuss the React Suspense API and some of its common use cases. You must have a working knowledge of React and JavaScript to follow along."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-react-suspense"},"What is React Suspense?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#comparing-react-suspense-to-transitions"},"Comparing React Suspense to Transitions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-cases-of-react-suspense"},"Use cases of React Suspense"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fetch-data-using-react-suspense"},"Fetch data using React suspense")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#lazy-load-components-using-react-suspense"},"Lazy load components using React suspense")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#when-to-use-react-suspense"},"When to use React Suspense")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-suspense-and-error-boundaries"},"React suspense and Error boundaries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#common-mistakes-when-using-react-suspense"},"Common Mistakes When Using React Suspense"))),(0,a.kt)("h2",{id:"what-is-react-suspense"},"What is React Suspense?"),(0,a.kt)("p",null,"React Suspense is a built-in React component that you can use to declaratively render a fallback UI until its children finish loading."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Suspense fallback={<FallbackUI />}>\n  <MyComponent />\n</Suspense>\n")),(0,a.kt)("p",null,"It's a low-level implementation that tracks a component's lifecycle and delays rendering while required data pends. It improves user experience because users won't have to view a partially loaded component before data is fully fetched and rendered."),(0,a.kt)("p",null,"For instance, if the duration it takes for a table component to load data is long, users may initially see an empty table before the component rerenders and displays a fully loaded table."),(0,a.kt)("p",null,"The Suspense API acts as a wrapper around a component to be rendered and then provides a fallback that executes before the wrapped component renders."),(0,a.kt)("p",null,"As an example, we may use React Suspense to wrap the component that renders an image and specify a loading animation as the fallback option to prevent viewers from seeing blurry images that gradually change into the original picture after it loads from a CDN or cloud storage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// Logo is a component that fetches an image from a CDN\nimport Logo from "./Logo.js";\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n  <Logo />\n</Suspense>;\n')),(0,a.kt)("h2",{id:"comparing-react-suspense-to-transitions"},"Comparing React Suspense to Transitions"),(0,a.kt)("p",null,"Despite their similarities, do not use Suspense and Transition APIs interchangeably or in the same context."),(0,a.kt)("p",null,"React Suspense tracks a component's readiness before rendering it and only offers a deferred alternative until the original component is ready for rendering."),(0,a.kt)("p",null,"Transition, on the other hand, enables you to prioritize one event over another."),(0,a.kt)("p",null,"For instance, when adding a search feature, you might want to show the user what they are entering but wait to start the search until the user finishes typing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { startTransition } from "react";\n\n// Set the input value but don\'t initiate the search\nsetInputValue(input);\n\nstartTransition(() => {\n  // Set the final search value, then initiate search\n  setSearchQuery(input);\n});\n')),(0,a.kt)("p",null,"State updates tagged as non-urgent inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"startTransition")," are interrupted if an urgent update is made while the non-urgent state is still updating. This process continues until no new urgent updates are made."),(0,a.kt)("h2",{id:"use-cases-of-react-suspense"},"Use cases of React Suspense"),(0,a.kt)("p",null,"As was discussed in the previous section, it is simple to mistake the React Suspense API for Transition and vice versa. Therefore, it's crucial to know when to use and when not to use them."),(0,a.kt)("h3",{id:"fetch-data-using-react-suspense"},"Fetch data using React suspense"),(0,a.kt)("p",null,"Traditionally, the fetch-on-render pattern is the commonest approach when fetching data from an API. With this pattern, you render the component, fetch data in a ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, update state, and the component re-renders to display the data."),(0,a.kt)("p",null,"Therefore, you need to declare state to manage the different data fetching stages. You need to display an appropriate UI when the data is is still loading and an error message when an error occurs like in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function MyComponent() {\n  const [data, setData] = useState();\n  const [isLoading, setIsLoading] = useState(true);\n  const [isError, setIsError] = useState(false);\n\n  useEffect(() => {\n    async function fetchData() {\n      try {\n        setIsLoading(true);\n        const data = await fetchData();\n        setData(data);\n        setIsLoading(false);\n      } catch (error) {\n        setIsError(true);\n        setIsLoading(false);\n      }\n    }\n\n    fetchData();\n  }, []);\n\n  if (isLoading) return <div>Loading data...</div>;\n  if (isError)\n    return (\n      <div>\n        Oops failed to fetch data! <a href="/home">Home page</a>\n      </div>\n    );\n\n  return (\n    <ul>\n      {data.map(({ id, name }) => {\n        return <li key={id}>{name}</li>;\n      })}\n    </ul>\n  );\n}\n')),(0,a.kt)("p",null,"The code above looks simple and easy to maintain. However, it can become complex pretty quickly in a real-world application where you fetch data from multiple data sources and work with several components concurrently. You can refactor the code above to use the Suspense API like in the example. You don't need to track the loading states manually. The temporary fallback UI is rendered while the data is still loading."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import loadData from "./api/loadData.js";\nconst data = loadData("users.json");\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n  <Users />\n</Suspense>;\n\nfunction MyComponent() {\n  const people = data.read();\n\n  return (\n    <div>\n      {people.map(({ id, name }) => {\n        <li key={id}>{name}</li>;\n      })}\n    </div>\n  );\n}\n')),(0,a.kt)("h3",{id:"lazy-load-components-using-react-suspense"},"Lazy load components using React suspense"),(0,a.kt)("p",null,"Lazy loading is an optimization technique for improving the initial load time. For large applications, loading everything at once can lead to a performance hit on initial render. With lazy load, you can defer the initial load for certain components or modules until they're about to be rendered."),(0,a.kt)("p",null,"With lazy load, you can split code into small components and import only those components you need for initial render and defer loading others until the user interacts with the application."),(0,a.kt)("p",null,"You can use the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy")," function to lazy load a component. It takes a function or another thenable as argument. The function you pass to the ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy")," function should return a promise."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy")," function returns a React component that you can render. While lazy-loading a component, attempting to render it will suspend. Therefore, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," component to render a lazy loaded component like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { lazy } from "react";\nimport Loading from "./Loading.js";\n\nconst MyComponent = lazy(() => import("./MyComponent.js"));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <MyComponent />\n    </Suspense>\n  );\n}\n')),(0,a.kt)("p",null,"In the basic example above, React will import ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponent")," when it's about to be rendered. While lazy-loading ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponent"),", React renders the fallback ",(0,a.kt)("inlineCode",{parentName:"p"},"Loading")," component."),(0,a.kt)("h2",{id:"when-to-use-react-suspense"},"When to use React Suspense"),(0,a.kt)("p",null,"You can use React Suspense to manage components that perform asynchronous operations such as fetching data from the server and lazy loading a component."),(0,a.kt)("p",null,"React pauses rendering a component wrapped in React suspense while it's performing an async operation and renders a temporary fallback UI until the operation is complete. This improves both developer and user experience."),(0,a.kt)("p",null,"React Suspense has several use cases:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Data Fetching"),": It allows components to wait for data before rendering. You can use libraries like Relay to integrate data fetching with Suspense."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Code Splitting"),": Suspense can dynamically load components with ",(0,a.kt)("inlineCode",{parentName:"li"},"React.lazy")," and a dynamic ",(0,a.kt)("inlineCode",{parentName:"li"},"import()"),", reducing the initial load time of your application."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Resource Loading"),": It can manage loading states for resources like images or scripts, improving the user experience during resource-intensive operations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Concurrency in React"),": With the concurrent mode, Suspense can handle multiple tasks like data fetching, rendering, and user inputs simultaneously, making the app more responsive.")),(0,a.kt)("h2",{id:"react-suspense-and-error-boundaries"},"React suspense and Error boundaries"),(0,a.kt)("p",null,"In React , Error boundaries are components that you can use to catch errors in the application's component tree. If you don't handle it, an error in a single component can crash the entire application."),(0,a.kt)("p",null,"At the moment, you can define error boundaries using class components. A class component becomes an error boundary if it implements either the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"static getDerivedStateFromError()")," method\xa0or\xa0 the ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidCatch()")," life cycle method or both as in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>An error has occurred.</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n")),(0,a.kt)("p",null,"After that, you can wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," component using the Error boundary like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary>\n  <Suspense fallback={<Loading />}>\n    <MyComponent />\n  </Suspense>\n</ErrorBoundary>\n")),(0,a.kt)("p",null,"Instead of declaring an error boundary as in the example above, you can also use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bvaughn/react-error-boundary"},"React error boundary")," package. It's a popular React error boundary component. You can install it from the npm package registry using any package manager of choice."),(0,a.kt)("p",null,"The Refine blog also has an in-depth article about error boundaries. You can check it out ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-error-boundaries/"},"here"),"."),(0,a.kt)("h2",{id:"common-mistakes-when-using-react-suspense"},"Common Mistakes When Using React Suspense"),(0,a.kt)("p",null,"It's not uncommon to misuse the Suspense API because of its similarity to Transition and other APIs. For illustration:"),(0,a.kt)("p",null,"Using components that handle concurrency using ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()"),' inside Suspense. The use of "useEffect", which is designed to manage concurrency, inside the Suspense API defeats the purpose of the API.'),(0,a.kt)("p",null,"Relay uses Suspense, however, it doesn't perform the same functions as Relay. Some users mistake Suspense for a server API request tool like Axios or Relay."),(0,a.kt)("p",null,"Another mistake people make is using ",(0,a.kt)("inlineCode",{parentName:"p"},"catch()")," to handle errors. This will cause the component to wait for the promise before rendering. Instead, use Error Boundary to handle rendering errors."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"React suspense API comes in handy for building performant and responsive web apps. As explained above, you can use React suspense to render a lazy loaded React component or render a fallback UI while fetching data from an API. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," component will render a fallback UI while its children are loading."),(0,a.kt)("p",null,"As you use the suspense API, be aware that only suspense-enabled functionalities such as lazy loading will activate the Suspense component out of the box."),(0,a.kt)("p",null,"At the moment, React doesn't have out-of-the-box support for suspense-enabled data fetching. However, you can use React meta frameworks such as Next.js because they integrate suspense-enabled data fetching functionality for you."),(0,a.kt)("p",null,"Similarly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," component doesn't detect any data you load inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook or an event handler."),(0,a.kt)("p",null,"Suspense is easy to switch to; if you're interested in learning more about the API, check the ",(0,a.kt)("a",{parentName:"p",href:"https://17.reactjs.org/docs/concurrent-mode-suspense.html"},"official React documentation"),"."))}m.isMDXComponent=!0}}]);