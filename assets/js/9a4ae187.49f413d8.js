"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[31823],{94935:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={},s=void 0,d={unversionedId:"libraries/java/api/MessageBuilder",id:"libraries/java/api/MessageBuilder",title:"MessageBuilder",description:"A builder to build a Message.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MessageBuilder.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MessageBuilder",permalink:"/iota.rs/libraries/java/api/MessageBuilder",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MessageBuilder.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"MessageBuilder(): MessageBuilder",id:"messagebuilder-messagebuilder",level:3},{value:"networkId(network_id): MessageBuilder",id:"networkidnetwork_id-messagebuilder",level:3},{value:"parents(parents): MessageBuilder",id:"parentsparents-messagebuilder",level:3},{value:"payload(payload): MessageBuilder",id:"payloadpayload-messagebuilder",level:3},{value:"nonceProvider(provider, target_score): MessageBuilder",id:"nonceproviderprovider-target_score-messagebuilder",level:3},{value:"finish(): Message",id:"finish-message",level:3}],m={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A builder to build a ",(0,l.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,l.kt)("h3",{id:"messagebuilder-messagebuilder"},"MessageBuilder(): ",(0,l.kt)("a",{parentName:"h3",href:"#messagebuilder"},"MessageBuilder")),(0,l.kt)("p",null,"Creates a new ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageBuilder"),"."),(0,l.kt)("h3",{id:"networkidnetwork_id-messagebuilder"},"networkId(network_id): ",(0,l.kt)("a",{parentName:"h3",href:"#messagebuilder"},"MessageBuilder")),(0,l.kt)("p",null,"Adds a network id to a ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageBuilder"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network_id"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The network id")))),(0,l.kt)("h3",{id:"parentsparents-messagebuilder"},"parents(parents): ",(0,l.kt)("a",{parentName:"h3",href:"#messagebuilder"},"MessageBuilder")),(0,l.kt)("p",null,"Adds parents to a ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageBuilder"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parents"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#messageid"},"MessageId[]")),(0,l.kt)("td",{parentName:"tr",align:null},"A list of parents to set")))),(0,l.kt)("h3",{id:"payloadpayload-messagebuilder"},"payload(payload): ",(0,l.kt)("a",{parentName:"h3",href:"#messagebuilder"},"MessageBuilder")),(0,l.kt)("p",null,"Adds a payload to a ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageBuilder"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#messagepayload"},"MessagePayload")),(0,l.kt)("td",{parentName:"tr",align:null},"the MessagePayload to set")))),(0,l.kt)("h3",{id:"nonceproviderprovider-target_score-messagebuilder"},"nonceProvider(provider, target_score): ",(0,l.kt)("a",{parentName:"h3",href:"#messagebuilder"},"MessageBuilder")),(0,l.kt)("p",null,"Sets a provider for the nonce. Can currently only be obtained from Client.getPowProvider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"provider"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#clientminer"},"ClientMiner")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the nonce provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_score"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"Target score for the nonce, Recommended: 4000")))),(0,l.kt)("h3",{id:"finish-message"},"finish(): ",(0,l.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,l.kt)("p",null,"Finish the MessageBuilder"))}c.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),c=n,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);