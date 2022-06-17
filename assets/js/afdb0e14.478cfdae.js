"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99],{32269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s=void 0,d={unversionedId:"libraries/java/api/MessageMetadata",id:"libraries/java/api/MessageMetadata",title:"MessageMetadata",description:"Response of GET /api/v1/messages//metadata.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MessageMetadata.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MessageMetadata",permalink:"/iota.rs/libraries/java/api/MessageMetadata",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MessageMetadata.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"messageId(): String",id:"messageid-string",level:3},{value:"parentMessageIds(): String[]",id:"parentmessageids-string",level:3},{value:"isSolid(): boolean",id:"issolid-boolean",level:3},{value:"referencedByMilestoneIndex(): long",id:"referencedbymilestoneindex-long",level:3},{value:"milestoneIndex(): long",id:"milestoneindex-long",level:3},{value:"ledgerInclusionState(): Optional&lt;LedgerInclusionStateDto&gt;",id:"ledgerinclusionstate-optionalledgerinclusionstatedto",level:3},{value:"conflictReason(): int",id:"conflictreason-int",level:3},{value:"shouldPromote(): Optional&lt;Boolean&gt;",id:"shouldpromote-optionalboolean",level:3},{value:"shouldReattach(): Optional&lt;Boolean&gt;",id:"shouldreattach-optionalboolean",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Response of GET /api/v1/messages/{message_id}/metadata.\nReturns the metadata of a message."),(0,r.kt)("h3",{id:"messageid-string"},"messageId(): String"),(0,r.kt)("p",null,"The message id of this message"),(0,r.kt)("h3",{id:"parentmessageids-string"},"parentMessageIds(): String[]"),(0,r.kt)("p",null,"The ids of the parents of this message"),(0,r.kt)("h3",{id:"issolid-boolean"},"isSolid(): boolean"),(0,r.kt)("p",null,"IF this message is solid"),(0,r.kt)("h3",{id:"referencedbymilestoneindex-long"},"referencedByMilestoneIndex(): long"),(0,r.kt)("p",null,"The optional milestone index if this message is referenced"),(0,r.kt)("h3",{id:"milestoneindex-long"},"milestoneIndex(): long"),(0,r.kt)("p",null,"The optional milestone index this was included in"),(0,r.kt)("h3",{id:"ledgerinclusionstate-optionalledgerinclusionstatedto"},"ledgerInclusionState(): Optional","<",(0,r.kt)("a",{parentName:"h3",href:"#ledgerinclusionstatedto"},"LedgerInclusionStateDto"),">"),(0,r.kt)("p",null,"The ledger state"),(0,r.kt)("h3",{id:"conflictreason-int"},"conflictReason(): int"),(0,r.kt)("p",null,"The optional reason of conflict"),(0,r.kt)("h3",{id:"shouldpromote-optionalboolean"},"shouldPromote(): Optional","<","Boolean",">"),(0,r.kt)("p",null,"Optional; if the message needs to be promoted"),(0,r.kt)("h3",{id:"shouldreattach-optionalboolean"},"shouldReattach(): Optional","<","Boolean",">"),(0,r.kt)("p",null,"Optional; if the message needs to be reattached"))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);