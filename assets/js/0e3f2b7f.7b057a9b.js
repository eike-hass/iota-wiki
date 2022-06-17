"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[68559],{65492:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],o={image:"/img/integration-services/logo/integration_services.png",description:"The dashboard is part of the Integration Services Suite and enables management of identities and streams.",keywords:["how to","ecommerce","dashboard","ui","credentials","decentralized identity","streams","verify credential"]},d="Dashboard",c={unversionedId:"services/dashboard/dashboard",id:"services/dashboard/dashboard",title:"Dashboard",description:"The dashboard is part of the Integration Services Suite and enables management of identities and streams.",source:"@site/content/build/integration-services/production/documentation/docs/services/dashboard/dashboard.md",sourceDirName:"services/dashboard",slug:"/services/dashboard/",permalink:"/integration-services/services/dashboard/",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/services/dashboard/dashboard.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The dashboard is part of the Integration Services Suite and enables management of identities and streams.",keywords:["how to","ecommerce","dashboard","ui","credentials","decentralized identity","streams","verify credential"]},sidebar:"docs",previous:{title:"Use Cases",permalink:"/integration-services/services/SSI-bridge/use-cases"},next:{title:"UI Components",permalink:"/integration-services/services/dashboard/ui-components"}},l={},h=[{value:"Login and Registration",id:"login-and-registration",level:2},{value:"Identity Management",id:"identity-management",level:2},{value:"Stream Management",id:"stream-management",level:2},{value:"Channel History",id:"channel-history",level:2},{value:"Verify Credential",id:"verify-credential",level:2}],u={toc:h};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"The Integration Services also includes a dashboard to view and manage all your identities, credentials and streams. The dashboard supports nearly every feature currently supported by the Audit Trail Gateway and SSI Bridge APIs. You can run the dashboard directly with the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," script in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./dashboard")," directory. The dashboard gets automatically deployed if you chosen to install the Integration Services by docker-compose or Kubernetes. The dashboard can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/tree/master/dashboard"},"Integration Services repository"),"."),(0,r.kt)("h2",{id:"login-and-registration"},"Login and Registration"),(0,r.kt)("p",null,"This is the first page visible after opening the dashboard. An already created decentralized identity can be used to login. If no identity was created yet a new one can be registered by clicking on the ",(0,r.kt)("em",{parentName:"p"},"register a new DID")," link.\n",(0,r.kt)("img",{alt:"Login-Screen",src:n(53004).Z,width:"1020",height:"664"})),(0,r.kt)("p",null,"A new DID can be registered on this page. Depending on the identity template you select in the first dropdown different form fields will be shown. A username, first name and last name are mandatory for creating a new DID with the Person template.\n",(0,r.kt)("img",{alt:"Register-Screen",src:n(14912).Z,width:"1020",height:"664"})),(0,r.kt)("h2",{id:"identity-management"},"Identity Management"),(0,r.kt)("p",null,"Identities can be managed in the ",(0,r.kt)("em",{parentName:"p"},"Identities")," tab. Here you can search for identities by name or ID. New identities can be created. The most important information is directly visible in the table. Detailed information about each identity can be viewed by clicking on the table entries.\n",(0,r.kt)("img",{alt:"Identities-Screen",src:n(15877).Z,width:"1020",height:"664"})),(0,r.kt)("p",null,"This is the detail page of the root identity. The identity claim and all credential attached to the identity can be viewed. Here you can also create, revoke and download verifiable credentials if you have sufficient permissions.\n",(0,r.kt)("img",{alt:"Identities-Detail-Screen",src:n(59519).Z,width:"1020",height:"664"})),(0,r.kt)("h2",{id:"stream-management"},"Stream Management"),(0,r.kt)("p",null,"This tab is for managing streams, you can search for streams by the address, topic or source. Additionally you can create new streams. The table shows if you are the author or a subscriber of the listed stream. A detailed view of a stream can be opened by clicking on the table entries.\n",(0,r.kt)("img",{alt:"Streams-Screen",src:n(47469).Z,width:"1020",height:"664"})),(0,r.kt)("p",null,"The detailed view of a stream shows meta information, authorized subscribers and pending subscribers. Pending subscribers can be authorized with just the click of a button. Furthermore, while you are on the detail page, it is polling for new data on the stream in a predefined interval. If you are the author of a stream or have write permissions you can add new messages to the stream here.\n",(0,r.kt)("img",{alt:"Streams-Detail-Screen",src:n(12010).Z,width:"1020",height:"664"})),(0,r.kt)("h2",{id:"channel-history"},"Channel History"),(0,r.kt)("p",null,"In the channel history tab you can fetch the whole history of a stream directly from the Tangle. For encrypted streams a preshared key is needed. For reading public streams you don't have to be subscribed.\n",(0,r.kt)("img",{alt:"Channel-History-Screen",src:n(53977).Z,width:"1020",height:"664"})),(0,r.kt)("h2",{id:"verify-credential"},"Verify Credential"),(0,r.kt)("p",null,"In this tab you can upload verifiable credentials in a .json format to verify them. The verification result will be shown to you.\n",(0,r.kt)("img",{alt:"Verify-Credential-Screen",src:n(68363).Z,width:"1020",height:"664"})))}m.isMDXComponent=!0},53977:function(e,t,n){t.Z=n.p+"assets/images/history_hd-ea917569851ea131f60f77f566e7c8ce.gif"},15877:function(e,t,n){t.Z=n.p+"assets/images/identities_hd-d7f26c57b51d242b51ae720ed18f2077.gif"},59519:function(e,t,n){t.Z=n.p+"assets/images/identity_detail_hd-48260157aacb87b24a568f0a7dcef535.gif"},53004:function(e,t,n){t.Z=n.p+"assets/images/login_hd-c461909bb0bad273ffd79ad433e0bccb.gif"},14912:function(e,t,n){t.Z=n.p+"assets/images/register_hd-663efa81195c3bd064297ea053780924.gif"},12010:function(e,t,n){t.Z=n.p+"assets/images/streams_detail_hd-2bf01b2e39800cac4b6e0bc2b7caebe9.gif"},47469:function(e,t,n){t.Z=n.p+"assets/images/streams_hd-a47f3eef9dad8681a89e3eb311ae77ac.gif"},68363:function(e,t,n){t.Z=n.p+"assets/images/verify_hd-ef4e88ae4ea6357a9dfde4bfefd8426e.gif"},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||h[m]||r;return n?i.createElement(f,s(s({ref:t},l),{},{components:n})):i.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);