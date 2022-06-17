"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26706],{36539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={description:"You can obtain tokens using the Faucet dApp, using the Go Client Library, the HTTP API and the Pollen Wallet",image:"/img/tutorials/request_funds/pollen_wallet.png",keywords:["faucet","proof of work","client library","wallet","dApp","pollen wallet"]},s="How to Obtain Tokens From the Faucet",u={unversionedId:"tutorials/obtain_tokens",id:"tutorials/obtain_tokens",title:"How to Obtain Tokens From the Faucet",description:"You can obtain tokens using the Faucet dApp, using the Go Client Library, the HTTP API and the Pollen Wallet",source:"@site/content/build/goshimmer/develop/documentation/docs/tutorials/obtain_tokens.md",sourceDirName:"tutorials",slug:"/tutorials/obtain_tokens",permalink:"/goshimmer/tutorials/obtain_tokens",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/tutorials/obtain_tokens.md",tags:[],version:"current",frontMatter:{description:"You can obtain tokens using the Faucet dApp, using the Go Client Library, the HTTP API and the Pollen Wallet",image:"/img/tutorials/request_funds/pollen_wallet.png",keywords:["faucet","proof of work","client library","wallet","dApp","pollen wallet"]},sidebar:"docs",previous:{title:"Setting up a GoShimmer node",permalink:"/goshimmer/tutorials/setup"},next:{title:"Command Line Wallet",permalink:"/goshimmer/tutorials/wallet_library"}},c={},p=[{value:"The Faucet dApp",id:"the-faucet-dapp",level:2},{value:"Obtain Tokens From the Faucet",id:"obtain-tokens-from-the-faucet",level:2},{value:"Via the Go Client Library",id:"via-the-go-client-library",level:3},{value:"Via the Wallet",id:"via-the-wallet",level:3}],d={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-obtain-tokens-from-the-faucet"},"How to Obtain Tokens From the Faucet"),(0,r.kt)("h2",{id:"the-faucet-dapp"},"The Faucet dApp"),(0,r.kt)("p",null,"The faucet is a dApp built on top of the ",(0,r.kt)("a",{parentName:"p",href:"/goshimmer/apis/communication"},"value and communication layer"),"). It sends IOTA tokens to addresses by listening to faucet request messages. A faucet message is a Message containing a special payload with an address encoded in Base58, the aManaPledgeID, the cManaPledgeID and a nonce as a proof that some Proof Of Work has been computed. The PoW is just a way to rate limit and avoid abuse of the Faucet. The Faucet has an additional protection by means of granting request to a given address only once. That means that, in order to receive funds from the Faucet multuple times, the address must be different."),(0,r.kt)("p",null,"After sending a faucet request message, you can check your balances via ",(0,r.kt)("a",{parentName:"p",href:"/goshimmer/apis/ledgerstate"},(0,r.kt)("inlineCode",{parentName:"a"},"GetAddressUnspentOutputs()")),"."),(0,r.kt)("h2",{id:"obtain-tokens-from-the-faucet"},"Obtain Tokens From the Faucet"),(0,r.kt)("p",null,"There are 3 ways to send a faucet request message to obtain IOTA tokens:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the Go client library"),(0,r.kt)("li",{parentName:"ol"},"Via the HTTP API directly"),(0,r.kt)("li",{parentName:"ol"},"Via the wallet")),(0,r.kt)("h3",{id:"via-the-go-client-library"},"Via the Go Client Library"),(0,r.kt)("p",null,"Follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"/goshimmer/apis/client_lib"},"Use the API")," to set up the API instance. "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// provide your Base58 encoded destination address,\n// the proof of work difficulty,\n// the optional aManaPledgeID (Base58 encoded),\n// the optional cManaPledgeID (Base58 encoded)\nmessageID, err := goshimAPI.SendFaucetRequest("JaMauTaTSVBNc13edCCvBK9fZxZ1KKW5fXegT1B7N9jY", 22, "2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5", "2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5")\n\n---- or\n\n// invoke go get github.com/iotaledger/goshimmer/client/wallet for wallet usage\n// get the given address from a wallet instance and\nconnector := wallet.GenericConnector(wallet.NewWebConnector("http://localhost:8080"))\naddr := wallet.New(connector).ReceiveAddress()\n// use String() to get base58 representation\n// the proof of work difficulty,\n// the optional aManaPledgeID (Base58 encoded),\n// the optional cManaPledgeID (Base58 encoded)\nmessageID, err := goshimAPI.SendFaucetRequest(addr.Base58(), 22, "2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5", "2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5")\n')),(0,r.kt)("h3",{id:"via-the-wallet"},"Via the Wallet"),(0,r.kt)("p",null,"Currently, there is one cli-wallet that you can refer to the tutorial ",(0,r.kt)("a",{parentName:"p",href:"/goshimmer/tutorials/wallet_library"},"Command Line Wallet\n")," and two GUI wallets to use. One from the community member ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Dr-Electron/ElectricShimmer"},"Dr-Electron ElectricShimmer")," and another from the foundation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/pollen-wallet/tree/master"},"pollen-wallet"),". You can request funds from the faucet with these two implementations."),(0,r.kt)("p",null,"As for pollen-wallet, follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/pollen-wallet/tree/master"},"pollen-wallet")," to build and execute the wallet, or download executable file directly in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/pollen-wallet/releases"},"GoShimmer wallet release"),"."),(0,r.kt)("p",null,"You can request funds by pressing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Request Funds")," in the wallet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": You need to create a wallet first before requesting funds."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pollen Wallet",src:n(42292).Z,title:"Pollen Wallet",width:"896",height:"796"})),(0,r.kt)("p",null,"This may take a while to receive funds:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pollen Wallet requesting funds",src:n(96794).Z,title:"Pollen Wallet requesting funds",width:"835",height:"232"})),(0,r.kt)("p",null,"When the faucet request is successful, you can check the received balances:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pollen Wallet transfer success",src:n(37698).Z,title:"Pollen Wallet requesting transfer success",width:"876",height:"333"})))}m.isMDXComponent=!0},42292:function(e,t,n){t.Z=n.p+"assets/images/pollen_wallet-bf959bef2ea2437caad9c578642b4e41.png"},96794:function(e,t,n){t.Z=n.p+"assets/images/pollen_wallet_requesting_funds-1aeb5b42469522dc1b66512b813c1ba0.png"},37698:function(e,t,n){t.Z=n.p+"assets/images/pollen_wallet_transfer_success-3d3400b227df6e46087e0d6cabbd2cfe.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);