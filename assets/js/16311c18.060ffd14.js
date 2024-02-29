"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',slug:"kubernetes-terminated-with-exit-code-1",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubernetes-terminated-with-exit-code-1",source:"@site/blog/2024-01-31-exit-code-1.md",title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:10.295,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',slug:"kubernetes-terminated-with-exit-code-1",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/social.png",hide_table_of_contents:!1},prevItem:{title:"Next.js vs React - A Beginner's Guide",permalink:"/blog/next-js-vs-react"},nextItem:{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice"},relatedPosts:[{title:"Introduction to Docker Networking",description:"We'll go over the basics of Docker networking, including the default networks, bridge networking, host networking, overlay networking, Macvlan networking, and custom bridge networking.",permalink:"/blog/docker-networking",formattedDate:"October 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.925,date:"2023-10-18T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"A Detailed Guide on kubectl describe",description:"In this article, we will discuss the kubectl describe command in detail.",permalink:"/blog/kubectl-describe-pod",formattedDate:"November 13, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.97,date:"2023-11-13T00:00:00.000Z"}],authorPosts:[{title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",permalink:"/blog/kubectl-scale",formattedDate:"December 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.4,date:"2023-12-25T00:00:00.000Z"},{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2022-12-28T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.07,date:"2022-11-13T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Exit Code 1",id:"understanding-exit-code-1",level:2},{value:"What is an Exit Code",id:"what-is-an-exit-code",level:3},{value:"Common Scenarios Leading to Exit Code 1",id:"common-scenarios-leading-to-exit-code-1",level:3},{value:"Initial Steps for Troubleshooting",id:"initial-steps-for-troubleshooting",level:2},{value:"Checking Container Logs for Immediate Clues",id:"checking-container-logs-for-immediate-clues",level:3},{value:"Verifying Container and Application Configurations",id:"verifying-container-and-application-configurations",level:3},{value:"Advanced Diagnostic Techniques",id:"advanced-diagnostic-techniques",level:2},{value:"A. Application-Specific Debugging Tools",id:"a-application-specific-debugging-tools",level:3},{value:"Example for a Node.js Application:",id:"example-for-a-nodejs-application",level:5},{value:"B. Network and Dependency Checks",id:"b-network-and-dependency-checks",level:3},{value:"Example:",id:"example",level:4},{value:"C. Container Environment Issues",id:"c-container-environment-issues",level:3},{value:"Common Pitfalls in Container Setup",id:"common-pitfalls-in-container-setup",level:4},{value:"System and Network Considerations",id:"system-and-network-considerations",level:2},{value:"System-Level Logs",id:"system-level-logs",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Firewall Rules",id:"firewall-rules",level:3},{value:"Best Practices to Avoid and Fix this Error",id:"best-practices-to-avoid-and-fix-this-error",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'Getting an "Exit Code 1" error in Kubernetes is common and can be frustrating for developers. If you see this error, it means that something is wrong with your containerized application. In this article, we will get into the details of this error, look at some of the most common scenarios that cause it, and then give you a step-by-step plan for fixing it.'),(0,i.kt)("p",null,"Also, we will share with you some of the best practices to ensure that you identify and resolve this error swiftly. But first, let's start with understanding what exactly is an exit code and what is the significance of exit code 1."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#understanding-exit-code-1"},"Understanding Exit Code 1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-an-exit-code"},"What is an Exit Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#common-scenarios-leading-to-exit-code-1"},"Common Scenarios Leading to Exit Code 1")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#initial-steps-for-troubleshooting"},"Initial Steps for Troubleshooting"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checking-container-logs-for-immediate-clues"},"Checking Container Logs for Immediate Clues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#verifying-container-and-application-configurations"},"Verifying Container and Application Configurations")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#advanced-diagnostic-techniques"},"Advanced Diagnostic Techniques"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#a-application-specific-debugging-tools"},"A. Application-Specific Debugging Tools"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example-for-a-nodejs-application"},"Example for a Node.js Application:")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#b-network-and-dependency-checks"},"B. Network and Dependency Checks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#c-container-environment-issues"},"C. Container Environment Issues"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#common-pitfalls-in-container-setup"},"Common Pitfalls in Container Setup")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-and-network-considerations"},"System and Network Considerations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-level-logs"},"System-Level Logs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#network-configuration"},"Network Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#firewall-rules"},"Firewall Rules")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#best-practices-to-avoid-and-fix-this-error"},"Best Practices to Avoid and Fix this Error"))),(0,i.kt)("h2",{id:"understanding-exit-code-1"},"Understanding Exit Code 1"),(0,i.kt)("h3",{id:"what-is-an-exit-code"},"What is an Exit Code"),(0,i.kt)("p",null,"Like on any Unix-like system, when a process inside a Kubernetes container stops running, the container will send an exit code to the Kubernetes system. An exit code of 0 typically indicates success, whereas any value other than zero, such as 1, indicates an error."),(0,i.kt)("p",null,"The presence of exit code 1 is typically indicative of an error. It says something went wrong with the execution of the containerized application but doesn't say what."),(0,i.kt)("h3",{id:"common-scenarios-leading-to-exit-code-1"},"Common Scenarios Leading to Exit Code 1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Application Runtime Errors"),":\nExecution errors, such as a runtime exception or the failure to finish a critical task, can cause your application to exit with code 1. The application's internal tests typically discover that it is unable to operate properly, which leads to this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Example Python snippet: Exiting with code 1 on a failed condition\n    if not critical_service_available():\n        print("Critical service is not available. Exiting.")\n        exit(1)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Container Configuration Issues"),":\nMisconfiguration in your container's command or arguments can lead to immediate termination. For example, if the command you specified in your container spec doesn't exist or is incorrectly spelled, the container will exit with code 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#Kubernetes YAML snippet with a typo in the command\n    containers:\n    - name: myapp\n      image: myapp:latest\n      command: ["/bin/sh", "-c", "exitt 1"]  # \'exitt\' is a typo\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Failed Health Checks"),":\nKubernetes can terminate a container that fails its liveness or readiness checks repeatedly. While this often leads to restarts rather than a direct exit code 1, it can contribute to a situation where the container is unable to stay running."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dependency Issues Inside Containers"),":\nIf your containerized application has dependencies that are not met (e.g., missing libraries, inaccessible external services), this can cause the application to exit with code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resource Limit Constraints"),":\nContainers in Kubernetes have resource limits, and exceeding these can lead to termination. However, this usually results in an ",(0,i.kt)("inlineCode",{parentName:"p"},"OOMKilled")," error rather than an exit code 1, unless your application is explicitly designed to handle such scenarios with a custom exit code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Improper Signal Handling"),":\nIf your application doesn't handle termination signals (",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM"),") properly, Kubernetes' attempts to gracefully shut down the container might result in an abrupt exit with code 1."),(0,i.kt)("h2",{id:"initial-steps-for-troubleshooting"},"Initial Steps for Troubleshooting"),(0,i.kt)("h3",{id:"checking-container-logs-for-immediate-clues"},"Checking Container Logs for Immediate Clues"),(0,i.kt)("p",null,"Containers that exit with exit code 1 should be troubleshooted by checking their logs. Logs often contain container process output and can reveal why the process exited. Execute the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl logs")," to view container logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    kubectl logs <your-pod-name>\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-pod-name>")," with the name of your pod. If your pod has more than one container, specify the container name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    kubectl logs <your-pod-name> -c <pods'container-name>\n  Here is an example output of the above command:\n\n      Error: Invalid configuration\n        at /app/server.js:20:21\n        at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)\n        ...\n    Process exited with status code 1\n")),(0,i.kt)("p",null,"This output indicates that there's an issue with the configuration, which is a good starting point for further investigation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expert tip"),": A container exiting multiple times with a non-zero exit code, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"exit code 1"),", can lead to a ",(0,i.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state in Kubernetes. If you look at the below error logs, you can see ",(0,i.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," which was caused because the container exited many times with exit code 1."),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/image3.png",alt:"describe pod error exit code 1"})),(0,i.kt)("h3",{id:"verifying-container-and-application-configurations"},"Verifying Container and Application Configurations"),(0,i.kt)("p",null,"Sometimes incorrect container or application configuration causes the error. Check your Kubernetes manifests and application configuration files. You can use the below command to see the details of your Kubernetes deployment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    kubectl get deployment <your-deployment-name> -o yaml\n")),(0,i.kt)("p",null,"To see configuration of a particular pod:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    kubectl get pod <your-pod-name> -o yaml\n")),(0,i.kt)("p",null,"Look out for any misconfigurations in environment variables, command arguments, or volume mounts."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expert Tips:"),"\nTo check the logs for a pod that has exited with an error, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl logs")," command as described above. Additionally, you can check the events associated with the pod for any anomalies leading up to the termination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe pod <pod-name>\n")),(0,i.kt)("p",null,"This command provides detailed information about the pod\u2019s lifecycle events, including errors leading to termination.\nThe below screenshot is what you might see in the output:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/image1.png",alt:"describe pod error exit code 1"})),(0,i.kt)("h2",{id:"advanced-diagnostic-techniques"},"Advanced Diagnostic Techniques"),(0,i.kt)("h3",{id:"a-application-specific-debugging-tools"},"A. Application-Specific Debugging Tools"),(0,i.kt)("p",null,"Each programming language or framework comes with its own set of debugging tools that can be leveraged to understand the nature of the error."),(0,i.kt)("h5",{id:"example-for-a-nodejs-application"},"Example for a Node.js Application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    # Install node inspect in the container and start the application with the inspect flag\n\n    kubectl exec -it <pod-name> -- npm install -g node-inspect\n    kubectl exec -it <pod-name> -- node --inspect-brk=0.0.0.0:9229 app.js\n")),(0,i.kt)("p",null,"Remember to expose the debugging port in the Dockerfile and Kubernetes deployment if not already done."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    #Dockerfile snippet\n    expose 9229\n")),(0,i.kt)("p",null,"Below is example snippet for YAML file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      #Kubernetes deployment snippet\n            ports:\n            - containerPort: 9229\n              name: debug\n              protocol: TCP\n")),(0,i.kt)("h3",{id:"b-network-and-dependency-checks"},"B. Network and Dependency Checks"),(0,i.kt)("p",null,"Check if the application's connection to external services or databases is properly configured. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl exec")," to run network checks from within the pod."),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    # Check if the database is reachable\n\n    kubectl exec <pod-name> -- nc -zv <db-service-name> <db-port>\n")),(0,i.kt)("p",null,"If using an ORM or database client, enable verbose logging to capture detailed connection errors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Example for a Node.js application using Sequelize\nconst sequelize = new Sequelize('database', 'username', 'password', {\n  host: 'db-service-name',\n  dialect: 'mysql',\n  logging: console.log,\n});\n")),(0,i.kt)("h3",{id:"c-container-environment-issues"},"C. Container Environment Issues"),(0,i.kt)("p",null,"Issues related to the container environment like Docker or Kubernetes can lead to exit code 1."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Common pitfalls include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Misconfigured environment variables"),(0,i.kt)("li",{parentName:"ul"},"Incorrect file paths or permissions"),(0,i.kt)("li",{parentName:"ul"},"Resource limits being hit (memory, CPU)")),(0,i.kt)("p",null,"To diagnose these, check the container logs and describe events, use below mentioned command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    # Retrieve the logs of the terminated container\n\n    kubectl logs <your-pod-name> --previous\n")),(0,i.kt)("h4",{id:"common-pitfalls-in-container-setup"},"Common Pitfalls in Container Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Environment Variables:")," Ensure that all required environment variables are set. You can check the current environment variables with below command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl exec <your-pod-name> -- env\n")),(0,i.kt)("p",{parentName:"li"},"Below screenshot shows all the env variables for a PostgreSQL installation."),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/image2.png",alt:"showing env variables of postgresql installation"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"File Permissions:")," If your application reads from or writes to files within the container, permissions might cause issues."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    # Check file permissions through below command\n    kubectl exec <your-pod-name> -- ls -l /path/to/check\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Resource Limits:")," Kubernetes allows you to set resource limits on your containers. If these are too low, your application might be terminated.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  # Kubernetes deployment snippet to set resource limits\n    resources:\n      limits:\n        cpu: "1"\n        memory: "1024Mi"\n')),(0,i.kt)("h2",{id:"system-and-network-considerations"},"System and Network Considerations"),(0,i.kt)("p",null,"An application-level error is indicated when a Kubernetes pod terminates with the error 'Terminated with exit code 1'. However, it's critical to look into problems at the system and network levels that might be indirectly causing this issue."),(0,i.kt)("h3",{id:"system-level-logs"},"System-Level Logs"),(0,i.kt)("p",null,"First things first: look in the system logs. Lack of resources is a typical reason for abrupt termination.\n",(0,i.kt)("strong",{parentName:"p"},"Steps:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find the Kubernetes node where the pod is running."),(0,i.kt)("li",{parentName:"ol"},"Use command ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl describe node <node-name>")," to get a summary of the node's status."),(0,i.kt)("li",{parentName:"ol"},"Check for any events or conditions indicating resource bottleneck."),(0,i.kt)("li",{parentName:"ol"},"Check individual resource usage through below command:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Memory: ",(0,i.kt)("inlineCode",{parentName:"li"},"free -h")),(0,i.kt)("li",{parentName:"ul"},"CPU: ",(0,i.kt)("inlineCode",{parentName:"li"},"top")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"htop")),(0,i.kt)("li",{parentName:"ul"},"Disk: ",(0,i.kt)("inlineCode",{parentName:"li"},"df -h"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tip:")," Pay close attention to ",(0,i.kt)("inlineCode",{parentName:"p"},"OOMKilled")," events, which indicate the pod was killed due to Out Of Memory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Screenshot/Config Required:")," Capture a screenshot of the system log where any resource-related issues are clearly indicated. For instance, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"dmesg")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," logs show ",(0,i.kt)("inlineCode",{parentName:"p"},"Out of memory: Killed process"),", it's a definite clue."),(0,i.kt)("h3",{id:"network-configuration"},"Network Configuration"),(0,i.kt)("p",null,"Next, examine the network configuration, as these can disrupt communication with the pod or between the containers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify the network policies in Kubernetes by running the below command:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get networkpolicies --all-namespaces")))),(0,i.kt)("li",{parentName:"ol"},"You need to make sure that the pod's network interface configuration aligns with the cluster's network."),(0,i.kt)("li",{parentName:"ol"},"Check if there are any firewall rules on the node that are blocking the traffic. Use below commands to verify that:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo iptables -L -n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo ufw status"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expert tip:")," Keep eye on the dropped packets in the firewall logs or use ",(0,i.kt)("inlineCode",{parentName:"p"},"tcpdump")," to trace network packets."),(0,i.kt)("h3",{id:"firewall-rules"},"Firewall Rules"),(0,i.kt)("p",null,"Firewalls can also block traffic that your application needs to route. You need to make sure that your firewall rules are not in conflict with the network requirements of your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List current firewall rules with ",(0,i.kt)("inlineCode",{parentName:"li"},"iptables")," or your firewall management tool."),(0,i.kt)("li",{parentName:"ol"},"Cross-reference the required ports for your application with the allowed ports in the firewall."),(0,i.kt)("li",{parentName:"ol"},"Check for any recent modifications in the firewall rules that coincide with the onset of the issue.")),(0,i.kt)("p",null,"To list iptables rules, the following command can be used:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo iptables -S")),(0,i.kt)("h2",{id:"best-practices-to-avoid-and-fix-this-error"},"Best Practices to Avoid and Fix this Error"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Validate Container Entrypoint"),": Ensure the container's entrypoint script is executable and has the correct shebang line (",(0,i.kt)("inlineCode",{parentName:"li"},"#!/bin/bash"),"). A common error is '",(0,i.kt)("inlineCode",{parentName:"li"},"No such file or directory"),"' if the entrypoint is not found or not executable."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Check Application Dependencies"),": Verify all required libraries and dependencies are present. Missing dependencies often lead to '",(0,i.kt)("inlineCode",{parentName:"li"},"Library not found"),"' errors within the container."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Inspect Application Code"),": Review recent code changes for possible mistakes. Errors such as '",(0,i.kt)("inlineCode",{parentName:"li"},"Undefined variable"),"' or '",(0,i.kt)("inlineCode",{parentName:"li"},"Syntax error"),"' in logs often point to new code issues."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Utilize Liveness Probes"),": Configure liveness probes in Kubernetes. Pods frequently restarting, as shown by ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get events"),", suggest failing liveness checks."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Analyze Logs"),": Use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl logs <pod-name>")," for immediate error output. '",(0,i.kt)("inlineCode",{parentName:"li"},"Permission denied"),"' messages could indicate execution permission issues."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Monitor Resource Usage"),": Set up alerts for memory and CPU to catch overuse. Pods terminated with '",(0,i.kt)("inlineCode",{parentName:"li"},"OOMKilled"),"' status have exceeded their memory limits."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Handle Signals Gracefully"),": Ensure your application handles signals like SIGTERM for proper shutdown. Logs stating '",(0,i.kt)("inlineCode",{parentName:"li"},"Signal received: SIGTERM"),"' without a graceful exit can mean improper signal handling."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Avoid Hardcoded Paths"),": Use relative paths or environment variables instead. '",(0,i.kt)("inlineCode",{parentName:"li"},"File not found"),"' errors often occur due to hardcoded paths that don't exist in the container's filesystem."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use Init Containers"),": Leverage init containers to ensure the environment is correctly prepared before the main application starts. Failure logs in ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl describe pod <pod-name>")," for init containers indicate issues with environment setup."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Test Locally"),": Run your container locally to identify discrepancies. '",(0,i.kt)("inlineCode",{parentName:"li"},"Environment variable not set"),"' errors may arise due to differences between local and container environments.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,'In this article, we have walked through the most common causes of the "Terminated with exit code 1" error in Kubernetes and shown you how to fix them. Whether it is a careless typo in the YAML file, a resource bottleneck, or an application\'s internal error, you can follow the steps in this guide and get the error resolved. Remember that the most reliable systems are made through the mistakes and successes of fixing problems in the real world. Have fun fixing things!'))}m.isMDXComponent=!0}}]);