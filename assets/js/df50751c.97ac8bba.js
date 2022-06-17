"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59315],{48114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={description:"How to run and use golangci-lint to lint your code. How to build an image with the buildkit docker engine.",image:"/img/logo/goshimmer_light.png",keywords:["port config","golang","lint","error handling","golangci-lint","docker","buildkit","image","configuration json"]},u="golangci-lint",c={unversionedId:"teamresources/local_development",id:"teamresources/local_development",title:"golangci-lint",description:"How to run and use golangci-lint to lint your code. How to build an image with the buildkit docker engine.",source:"@site/content/build/goshimmer/develop/documentation/docs/teamresources/local_development.md",sourceDirName:"teamresources",slug:"/teamresources/local_development",permalink:"/goshimmer/teamresources/local_development",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/teamresources/local_development.md",tags:[],version:"current",frontMatter:{description:"How to run and use golangci-lint to lint your code. How to build an image with the buildkit docker engine.",image:"/img/logo/goshimmer_light.png",keywords:["port config","golang","lint","error handling","golangci-lint","docker","buildkit","image","configuration json"]},sidebar:"docs",previous:{title:"Code Guidelines",permalink:"/goshimmer/teamresources/guidelines"},next:{title:"GoShimmer Analysis Dashboard",permalink:"/goshimmer/teamresources/analysis_dashboard"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Run",id:"how-to-run",level:2},{value:"Dealing With Errors",id:"dealing-with-errors",level:2},{value:"Building an Image",id:"building-an-image",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],p={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golangci-lint"},"golangci-lint"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We use golangci-lint v1.38.0 to run various types of linters on our codebase. All settings are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},".golangci.yml")," file.\ngolangci-lint is very flexible and customizable. Check the docs to see how configuration works ",(0,o.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/configuration/"},"https://golangci-lint.run/usage/configuration/")),(0,o.kt)("h2",{id:"how-to-run"},"How to Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the golangci-lint program ",(0,o.kt)("a",{parentName:"li",href:"https://golangci-lint.run/usage/install/"},"https://golangci-lint.run/usage/install/")),(0,o.kt)("li",{parentName:"ol"},"In the project root: ",(0,o.kt)("inlineCode",{parentName:"li"},"golangci-lint run"))),(0,o.kt)("h2",{id:"dealing-with-errors"},"Dealing With Errors"),(0,o.kt)("p",null,"Most of the errors that golangci-lint reports are errors from formatting linters like ",(0,o.kt)("inlineCode",{parentName:"p"},"gofmt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"goimports")," and etc. You can easily auto-fix them with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"golangci-lint run --fix\n")),(0,o.kt)("p",null,"Here is the full list of linters that support the auto-fix feature: ",(0,o.kt)("inlineCode",{parentName:"p"},"gofmt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gofumpt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"goimports"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"misspell"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"whitespace"),"."),(0,o.kt)("p",null,"In case it's not a formatting error, do your best to fix it first. If you think it's a false alarm there are a few ways how to disable that check in golangci-lint:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exclude the check by the error text regexp. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"'Error return value of .((os\\.)?std(out|err)\\..*|.*Close|.*Flush|os\\.Remove(All)?|.*print(f|ln)?|os\\.(Un)?Setenv). is not checked'"),"."),(0,o.kt)("li",{parentName:"ul"},"Exclude the entire linter for that file type. Example: don't run ",(0,o.kt)("inlineCode",{parentName:"li"},"errcheck")," in Go test files."),(0,o.kt)("li",{parentName:"ul"},"Change linter settings to make it more relaxed. "),(0,o.kt)("li",{parentName:"ul"},"Disable that particular error occurrence: use a comment with a special ",(0,o.kt)("inlineCode",{parentName:"li"},"nolint")," directive next to the place in code with the error. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"// nolint: errcheck"),".")),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("h2",{id:"building-an-image"},"Building an Image"),(0,o.kt)("p",null,"We use the new buildkit docker engine to build ",(0,o.kt)("inlineCode",{parentName:"p"},"iotaledger/goshimmer")," image.\nThe minimum required docker version that supports this feature is ",(0,o.kt)("inlineCode",{parentName:"p"},"18.09"),".\nTo enable buildkit engine in your local docker add the following to the docker configuration json file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "features": { "buildkit": true } }\n')),(0,o.kt)("p",null,"Check this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/build_enhancements/#to-enable-buildkit-builds"},"article")," for details on how to do that."),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you already enabled the buildkit engine in the configuration json file as described above and docker version is ",(0,o.kt)("inlineCode",{parentName:"p"},"18.09")," or higher,\ntry to set the following env variables when building the docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker build -t iotaledger/goshimmer .\n")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);