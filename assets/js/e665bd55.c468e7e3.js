"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17628],{16129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",image:"/img/Banner/banner_wasp.png",keywords:["smart contracts","core concepts","scaling","flexibility","explanation"]},c="IOTA Smart Contracts",l={unversionedId:"overview",id:"overview",title:"IOTA Smart Contracts",description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",source:"@site/content/build/wasp/develop/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/smart-contracts/overview",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",image:"/img/Banner/banner_wasp.png",keywords:["smart contracts","core concepts","scaling","flexibility","explanation"]},sidebar:"tutorialSidebar",next:{title:"Smart Contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts"}},u={},p=[{value:"ISC Advantages",id:"isc-advantages",level:2},{value:"Scaling and Fees",id:"scaling-and-fees",level:3},{value:"Custom Chains",id:"custom-chains",level:3},{value:"Flexibility",id:"flexibility",level:3},{value:"Wasp",id:"wasp",level:2},{value:"Feedback",id:"feedback",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-smart-contracts"},"IOTA Smart Contracts"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wasp Node",src:n(73391).Z,width:"862",height:"200"})),(0,r.kt)("p",null,"The IOTA Smart Contracts is a protocol that brings scalable and flexible smart contracts into the IOTA ecosystem. It allows anyone to spin up a smart contract blockchain and anchor it to the IOTA Tangle, a design that offers a multiple advantages."),(0,r.kt)("h2",{id:"isc-advantages"},"ISC Advantages"),(0,r.kt)("h3",{id:"scaling-and-fees"},"Scaling and Fees"),(0,r.kt)("p",null,"Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many transactions per second before it needs to decide on which transactions it needs to postpone until other blocks are produced, as there is no processing power available for them on that chain. This eventually results in high fees on many chains, and limited functionality. "),(0,r.kt)("p",null,"As ISC allows many chains to be anchored to the IOTA Tangle and lets them communicate with each other, we can add additional chains once this becomes a problem. This results in lower fees over solutions that use a single blockchain for all their smart contracts."),(0,r.kt)("h3",{id:"custom-chains"},"Custom Chains"),(0,r.kt)("p",null,"Given that anyone can start a new chain and set its rules, a lot is possible. Not only do you have full control over how the fees are handled on the chain you set up, but you also have full control over the validators and access to your chain. You can even spin up a private blockchain with no public data besides the state hash that is anchored to the main IOTA Tangle. This allows parties that need private blockchains to use the security of the public IOTA network without actually exposing their blockchain to the public."),(0,r.kt)("h3",{id:"flexibility"},"Flexibility"),(0,r.kt)("p",null,"You can run multiple types of virtual machines on any chain. We are starting with\n",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/"},"Rust/Wasm"),"-based smart contracts, followed by\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.6/"},"Solidity/EVM"),"-based smart contracts, but eventually all kinds of virtual machines can be supported in a IOTA Smart Contract chain depending on the demand. "),(0,r.kt)("p",null,"IOTA Smart Contracts are more complex compared to conventional smart contracts, but this provides freedom and flexibility to allow the usage of smart contracts in a wide range of use cases."),(0,r.kt)("h2",{id:"wasp"},"Wasp"),(0,r.kt)("p",null,"Wasp is the node software that we have built to let you validate smart contracts as a part of a committee while using a virtual machine of your choice. Multiple Wasp nodes connect and form a committee of validators. When they reach consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making it immutable. "),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"We are eager to receive your feedback about your experiences with the IOTA Smart Contracts Beta. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSd4jcmLzCPUNDIijEwGzuWerO23MS0Jmgzszgs-D6_awJUWow/viewform"},"this form")," to share your developer experience with us. This feedback will help us improve the product in future releases."))}h.isMDXComponent=!0},73391:function(e,t,n){t.Z=n.p+"assets/images/banner_wasp-41ba3b0d32db6cf5a6704eaafe22d212.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);