"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93833],{86778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={image:"/img/integration-services/diagrams/ecommerce-audit-trail-bridge.jpeg",description:"The Audit Trail GW implementation provides a Channel Service, a Channel Info Service, and a Subscription Service.",keywords:["how to","API definition","Architecture overview","Channel Service","Channel Info Service","Subscription Service"]},s="Software Architecture and APIs Definition",l={unversionedId:"services/audit-trail-gateway/API-definition",id:"services/audit-trail-gateway/API-definition",title:"Software Architecture and APIs Definition",description:"The Audit Trail GW implementation provides a Channel Service, a Channel Info Service, and a Subscription Service.",source:"@site/content/build/integration-services/production/documentation/docs/services/audit-trail-gateway/API-definition.md",sourceDirName:"services/audit-trail-gateway",slug:"/services/audit-trail-gateway/API-definition",permalink:"/integration-services/services/audit-trail-gateway/API-definition",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/services/audit-trail-gateway/API-definition.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/diagrams/ecommerce-audit-trail-bridge.jpeg",description:"The Audit Trail GW implementation provides a Channel Service, a Channel Info Service, and a Subscription Service.",keywords:["how to","API definition","Architecture overview","Channel Service","Channel Info Service","Subscription Service"]},sidebar:"docs",previous:{title:"Ecommerce-Audit Trail Gateway (GW)",permalink:"/integration-services/services/audit-trail-gateway/introduction"},next:{title:"Use Cases",permalink:"/integration-services/services/audit-trail-gateway/use-cases"}},u={},d=[{value:"Channel Service",id:"channel-service",level:2},{value:"Channel Info Service",id:"channel-info-service",level:2},{value:"Subscription Service",id:"subscription-service",level:2}],p={toc:d};function h(e){var t=e.components,c=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software-architecture-and-apis-definition"},"Software Architecture and APIs Definition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ecommerce-audit-trail-bridge",src:n(47293).Z,width:"1001",height:"851"}),"\n",(0,a.kt)("strong",{parentName:"p"},"List of provided APIs.")),(0,a.kt)("p",null,"The Audit Trail GW implementation provides the following services:"),(0,a.kt)("h2",{id:"channel-service"},"Channel Service"),(0,a.kt)("p",null,"You can use this service to create new channels in the Tangle. The identity creating the channel becomes the channel\u2019s\nauthor. The author can read all messages and write data into the channel. Authorized subscribers can also use this\nservice to read and write from/to the channel (see ",(0,a.kt)("a",{parentName:"p",href:"#subscription-service"},"Subscription Service"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prefix:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/{{version}}/channels")),(0,a.kt)("h2",{id:"channel-info-service"},"Channel Info Service"),(0,a.kt)("p",null,"You can use this service to search for one or more channels stored by the API. It can query for all the channels created\nby a specific identity or topic. It also allows you to keep or remove any channel from the database."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prefix:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/{{version}}/channel-info")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When you remove a channel from your database, it ",(0,a.kt)("strong",{parentName:"p"},"will not be removed from the ledger")," since data on the\nTangle is immutable. The service will only remove the index from your database."))),(0,a.kt)("h2",{id:"subscription-service"},"Subscription Service"),(0,a.kt)("p",null,"You can use this service to manage subscriptions to a specific channel. Identities can subscribe to a specific channel\nidentified by a unique channel address. The channel's author can then decide whether to authorize the identity to read from the channel\nor write to it. The channel\u2019s author can still revoke access to the channel at any time. This service can\nalso list all authorized subscriptions to a channel."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prefix:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/{{version}}/subscription")))}h.isMDXComponent=!0},47293:function(e,t,n){t.Z=n.p+"assets/images/ecommerce-audit-trail-bridge-fed6f6e3c6c832b7378086c83aeca9d3.jpeg"},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,v=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(v,o(o({ref:t},u),{},{components:n})):i.createElement(v,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);