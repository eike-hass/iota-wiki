"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1825],{77070:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","limitations","fees","sand-boxed","reference"]},c="EVM Limitations within IOTA Smart Contracts",l={unversionedId:"guide/evm/limitations",id:"guide/evm/limitations",title:"EVM Limitations within IOTA Smart Contracts",description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address.",source:"@site/content/build/wasp/develop/documentation/docs/guide/evm/limitations.md",sourceDirName:"guide/evm",slug:"/guide/evm/limitations",permalink:"/smart-contracts/guide/evm/limitations",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/evm/limitations.md",tags:[],version:"current",frontMatter:{description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","limitations","fees","sand-boxed","reference"]},sidebar:"tutorialSidebar",previous:{title:"EVM/Solidity Based Smart Contracts",permalink:"/smart-contracts/guide/evm/introduction"},next:{title:"Creating an EVM Chain",permalink:"/smart-contracts/guide/evm/create-chain"}},u={},m=[],p={toc:m};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evm-limitations-within-iota-smart-contracts"},"EVM Limitations within IOTA Smart Contracts"),(0,a.kt)("p",null,"The current experimental EVM support for IOTA Smart Contracts allows developers to get a preview of EVM based smart contract solutions on top of IOTA. There are some limitations you should be aware of at the time, which we will be addressing in the months to come:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts"),". It currently can not communicate with non-EVM smart contracts, nor can it interact with assets outside the EVM sandbox yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"You start an EVM chain with a new supply of EVM specific tokens assigned to a single address")," (the main token on the chain which is used for gas as well, comparable to ETH on the Ethereum network). These new tokens are in no way connected to IOTA, or any other token, but are specific for that chain for now."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Because EVM runs inside an IOTA Smart Contracts smart contract, any fees that need to be paid for that IOTA Smart Contracts smart contract have to be taken into account")," while invoking a function on that contract. To support this right now the JSON-RPC gateway uses the wallet account connected to it. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"You need to manually deposit some IOTA to the chain")," you are using to be able to invoke these functions. We are planning to resolve this at a later phase in a more user-friendly way.")),(0,a.kt)("p",null,"Overall these are temporary solutions, the next release of the IOTA Smart Contracts will see a lot of these improved or resolved."))}d.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);