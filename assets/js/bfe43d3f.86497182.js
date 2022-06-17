"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67867],{34372:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={},l="Application Architecture",c={unversionedId:"track-and-trace/architecture",id:"track-and-trace/architecture",title:"Application Architecture",description:"The track-and-trace application uses the IOTA MAM protocol to give returnable assets an ID and to track those assets in streams of transactions called MAM channels.",source:"@site/content/build/blueprints/production/track-and-trace/architecture.md",sourceDirName:"track-and-trace",slug:"/track-and-trace/architecture",permalink:"/blueprints/track-and-trace/architecture",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/content/build/blueprints/production/track-and-trace/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Track and Trace",permalink:"/blueprints/track-and-trace/overview"},next:{title:"Deploy and Test the Track and Trace Demo",permalink:"/blueprints/track-and-trace/deployment-and-testing"}},d={},h=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"Creating a New Channel",id:"creating-a-new-channel",level:3},{value:"Attaching the Asset Data to the Tangle",id:"attaching-the-asset-data-to-the-tangle",level:3},{value:"Saving the Asset Data in the Database",id:"saving-the-asset-data-in-the-database",level:3},{value:"Customization Considerations",id:"customization-considerations",level:2},{value:"Missing Assets",id:"missing-assets",level:3}],p={toc:h};function u(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"application-architecture"},"Application Architecture"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The track-and-trace application uses the IOTA MAM protocol to give returnable assets an ID and to track those assets in streams of transactions called MAM channels.")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),":Disclaimer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Running an open source project, like any human endeavor, involves uncertainty and trade-offs. We hope the architecture described below helps you to deploy similar systems, but it may include mistakes, and can\u2019t address every situation. If you have any questions about your project, we encourage you to do your own research, seek out experts, and discuss them with the IOTA community."))),(0,i.kt)("p",null,"This blueprint uses the following architecture whereby trackers register their ownership of returnable assets and attach proof of this ownership to a MAM channel in the Tangle. Whenever new trackers receive the asset, they update the MAM channel with their own custodian ID, as well as the asset's new location and its status. This way, tracers can find out where the asset is at any time by monitoring the MAM channel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Track and Trace",src:a(70084).Z,width:"1504",height:"981"})),(0,i.kt)("h2",{id:"building-blocks"},"Building Blocks"),(0,i.kt)("p",null,"To allow trackers to create and update assets' MAM channels, we use a tracker app that does the following: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new channel"),(0,i.kt)("li",{parentName:"ul"},"Attach the asset data to the Tangle, using the new MAM channel"),(0,i.kt)("li",{parentName:"ul"},"Save the asset data in the database")),(0,i.kt)("h3",{id:"creating-a-new-channel"},"Creating a New Channel"),(0,i.kt)("p",null,"When trackers first register their ownership of an asset, the ",(0,i.kt)("inlineCode",{parentName:"p"},"createItemChannel()")," method is called, which creates a new MAM channel, acting as the asset's digital twin. This MAM channel registers the following information about the asset:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Field")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Notes")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetUniqueID")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The unique ID of the asset, which is generated by the registration API"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Assets could carry a QR code, which allows trackers and tracers to capture this ID by scanning the code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetOwnerID")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The unique ID of the asset owner, which is generated by the registration API"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetCustodianID")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The unique ID of the latest tracker to update the asset's MAM channel"),(0,i.kt)("td",{parentName:"tr",align:"left"},"When the asset is first registered, this ID is the same as the asset owner's ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"location")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The location of the asset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time at which this asset information is created"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The current status of the asset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"In the blueprint, this field can be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"in-use"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"returned"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"lost"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// create a new asset \nexport const createItemChannel = (project, itemId, request, userId) => { \n\u2026 \n \nconst messageBody = { \n        ...request,         \n        ...eventBody,         \n        time: null,         \n        location: null,         \n        assetUniqueID: null,         \n        assetOwnerID: null,         \n        assetUserID: null \n    };\n")),(0,i.kt)("p",null,"Before setting up the channel, we recommended setting the channel mode to ",(0,i.kt)("inlineCode",{parentName:"p"},"restricted"),". This mode allows you to encrypt the data in each MAM message and to allow access only to selected trackers and tracers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// create a new restricted channel \nconst createNewChannel = async (payload, secretKey) => { \n    const channelState = createChannel(generateSeed(81), 2, 'restricted', secretKey)\n  return channelState; \n};\n")),(0,i.kt)("h3",{id:"attaching-the-asset-data-to-the-tangle"},"Attaching the Asset Data to the Tangle"),(0,i.kt)("p",null,"After creating the MAM channel, we can publish the asset information to the IOTA Tangle, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mamAttach()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// store new messages for each new asset and for each change of custody \n// Publish to tangle \nconst publish = async data => { \n  try { \n    // Create the MAM payload\n    const trytes = TrytesHelper.fromAscii(JSON.stringify(payload))\n    const mamMessage = createMessage(channelState, trytes) \n \n    // Save the new state of the MAM channel\n    channelState.root = mamMessage.root;\n \n    // Attach the payload\n    await mamAttach(node, mamMessage, \"TRACKANDTRACE\");\n    return channelState;\n  } catch (error) { \n    console.log('MAM publish error', error); \n    return null; \n  } \n}; \n")),(0,i.kt)("h3",{id:"saving-the-asset-data-in-the-database"},"Saving the Asset Data in the Database"),(0,i.kt)("p",null,"To allow trackers to use the API to update the MAM channel, the ",(0,i.kt)("inlineCode",{parentName:"p"},"assetUniqueID")," as well as the following information is also stored in a database."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Field")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Notes")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"channelRoot")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The root of the MAM channel, which allows the API to find it in the Tangle"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the MAM channel is public, this is the address of the first transaction in the channel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"channelSideKey>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the MAM channel is restricted, this field contains its side key, which allows the API to encrypt and decrypt the MAM messages"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createItem()")," function is used to save the necessary data in the database when the asset is created."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Track and Trace",src:a(23898).Z,width:"1360",height:"995"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const createItem = (eventBody, mam) => {\n  const item = {\n    ...eventBody,\n    mam\n  };\n")),(0,i.kt)("p",null,"Then, when a new tracker takes custody of the asset, that tracker updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"assetCustodianID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," fields and attaches it to the same MAM channel, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateItem()")," function to save the new asset data to the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const updateItem = (eventBody, mam) => {\n  const item = {\n    ...eventBody,\n    mam\n  };\n")),(0,i.kt)("h2",{id:"customization-considerations"},"Customization Considerations"),(0,i.kt)("p",null,"If you want to use this blueprint in your own system, you should consider the following."),(0,i.kt)("h3",{id:"missing-assets"},"Missing Assets"),(0,i.kt)("p",null,"You may want to implement a process to handle missing assets. For example, if an asset's MAM channel is not updated within a certain timeframe, you could trigger a message to be sent to the last known custodian."))}u.isMDXComponent=!0},23898:function(e,t,a){t.Z=a.p+"assets/images/track-and-trace-architecture-message-exchange-efb8da0ecc12ffe55851b09d4abdfb20.png"},70084:function(e,t,a){t.Z=a.p+"assets/images/track-and-trace-architecture-dbf97fa7b34be95e301b7fa47ec6db56.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);