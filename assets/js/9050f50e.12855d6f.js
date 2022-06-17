"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49811],{7551:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return m}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),c=["components"],a={description:"High-level overview of the protocol, and its implemented components.",image:"/img/protocol_specification/Protocol_overview_received_message.png",keywords:["overview","protocol","high-level"]},p="Protocol specification",l={unversionedId:"protocol_specification/overview",id:"protocol_specification/overview",title:"Protocol specification",description:"High-level overview of the protocol, and its implemented components.",source:"@site/content/build/goshimmer/develop/documentation/docs/protocol_specification/overview.md",sourceDirName:"protocol_specification",slug:"/protocol_specification/overview",permalink:"/goshimmer/protocol_specification/overview",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/protocol_specification/overview.md",tags:[],version:"current",frontMatter:{description:"High-level overview of the protocol, and its implemented components.",image:"/img/protocol_specification/Protocol_overview_received_message.png",keywords:["overview","protocol","high-level"]},sidebar:"docs",previous:{title:"Object Storage",permalink:"/goshimmer/implementation_design/object_storage"},next:{title:"Protocol High-level Overview",permalink:"/goshimmer/protocol_specification/protocol"}},s={},m=[],u={toc:m};function v(e){var t=e.components,o=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"protocol-specification"},"Protocol specification"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DISCLAIMER")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following sections describe how things are implemented in GoShimmer. They might not reflect the final IOTA 2.0 specification or implementation."))),(0,i.kt)("p",null,"In this chapter we provide an overview of the various protocol components."),(0,i.kt)("p",null,"We start with a ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/protocol"},"high level overview")," of the protocol, followed by sections explaining the various implemented components."),(0,i.kt)("p",null,"Note, this chapter is still work in progress."))}v.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return v}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(o),v=r,f=u["".concat(p,".").concat(v)]||u[v]||m[v]||i;return o?n.createElement(f,c(c({ref:t},s),{},{components:o})):n.createElement(f,c({ref:t},s))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);