"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[298],{57761:function(e,r,t){t.r(r),t.d(r,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=t(87462),n=t(63366),p=(t(67294),t(3905)),i=["components"],l={},s=void 0,d={unversionedId:"libraries/java/api/AddressWrapper",id:"libraries/java/api/AddressWrapper",title:"AddressWrapper",description:"from(address, bech32_hrp): AddressWrapper",source:"@site/content/build/wallet.rs/production/documentation/docs/libraries/java/api/AddressWrapper.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/AddressWrapper",permalink:"/wallet.rs/libraries/java/api/AddressWrapper",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/libraries/java/api/AddressWrapper.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"from(address, bech32_hrp): AddressWrapper",id:"fromaddress-bech32_hrp-addresswrapper",level:3},{value:"parse(address): AddressWrapper",id:"parseaddress-addresswrapper",level:3},{value:"toBech32(): String",id:"tobech32-string",level:3}],u={toc:c};function m(e){var r=e.components,t=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h3",{id:"fromaddress-bech32_hrp-addresswrapper"},"from(address, bech32_hrp): ",(0,p.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,p.kt)("p",null,"Create an Address based on its address and Bech segments"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"address"),(0,p.kt)("td",{parentName:"tr",align:null},"String"),(0,p.kt)("td",{parentName:"tr",align:null},"The Address segment")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"bech32_hrp"),(0,p.kt)("td",{parentName:"tr",align:null},"String"),(0,p.kt)("td",{parentName:"tr",align:null},"the bech segment")))),(0,p.kt)("h3",{id:"parseaddress-addresswrapper"},"parse(address): ",(0,p.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,p.kt)("p",null,"parse a fully functional address string into an AddressWrapper"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"address"),(0,p.kt)("td",{parentName:"tr",align:null},"String"),(0,p.kt)("td",{parentName:"tr",align:null},"The address we will parse")))),(0,p.kt)("h3",{id:"tobech32-string"},"toBech32(): String"),(0,p.kt)("p",null,"Get the bech segment of the address"))}m.isMDXComponent=!0},3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return m}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),d=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},o=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||p;return t?a.createElement(f,i(i({ref:r},o),{},{components:t})):a.createElement(f,i({ref:r},o))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<p;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);