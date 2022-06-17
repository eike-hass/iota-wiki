"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49481],{74049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={image:"/img/logo/integration_services.png",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",keywords:["how to","integration services sdk","sdk","decentralized identity","maven","java"]},s="Introduction",c={unversionedId:"examples/java/introduction",id:"examples/java/introduction",title:"Introduction",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",source:"@site/content/build/integration-services/production/documentation/docs/examples/java/introduction.mdx",sourceDirName:"examples/java",slug:"/examples/java/introduction",permalink:"/integration-services/examples/java/introduction",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/java/introduction.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",keywords:["how to","integration services sdk","sdk","decentralized identity","maven","java"]},sidebar:"docs",previous:{title:"Search Channel and Validate Data",permalink:"/integration-services/examples/node/search-channel-and-validate-data"},next:{title:"How To Run Examples",permalink:"/integration-services/examples/java/how-to-run-examples"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Clients",id:"clients",level:2},{value:"IdentityClient",id:"identityclient",level:3},{value:"ChannelClient",id:"channelclient",level:3},{value:"Authorization",id:"authorization",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following sections  will guide you in how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/iota-is-sdk"},"Integration Services SDK"),".\nThe Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail)."),(0,r.kt)("p",null,"You should have a basic understanding of ",(0,r.kt)("a",{parentName:"p",href:"../../basics/identity"},"decentralized identities"),"\nto get the most out of the following examples."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Build from source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:albydeca/iota-is-sdk.git\ncd iota-is-sdk\nmvn clean install\n")),(0,r.kt)("p",null,"or download JAR from ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/net.gradbase/iota.is.sdk/0.0.1"},"MVNRepository")),(0,r.kt)("p",null,"or simply add to your POM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/net.gradbase/iota.is.sdk --\x3e\n<dependency>\n    <groupId>net.gradbase</groupId>\n    <artifactId>iota.is.sdk</artifactId>\n    <version>0.0.1</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"clients"},"Clients"),(0,r.kt)("p",null,"The Integration Services SDK has two different clients you can use:"),(0,r.kt)("h3",{id:"identityclient"},"IdentityClient"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityClient")," to manage decentralized identities. This includes, but is not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-identity-and-credentials"},"Creating an identity and verifiable credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"update-users"},"Updating users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"delete-users"},"Deleting users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"trusted-authorities"},"Adding Trusted Authorities"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can test your implementation on our public API which is connected to the IOTA Mainnet."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://demo-integration-services.iota.cafe/"},"https://demo-integration-services.iota.cafe/")),(0,r.kt)("li",{parentName:"ul"},"API key: b85e51a2-9981-11ec-8770-4b8f01948e9b")))),(0,r.kt)("h3",{id:"channelclient"},"ChannelClient"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelClient")," to access Audit Trail features. These include, but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-channel"},"Creating a channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"authorize-to-channel#subscribe-to-a-channel"},"Subscribing or approving access to a channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-channel#write-on-a-channel"},"Reading and Writing on a channel"))),(0,r.kt)("p",null,"You can import and configure these clients using a ",(0,r.kt)("inlineCode",{parentName:"p"},"env.properties")," object which will populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseClient")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," api-key=XXXXXXX\n api-version=vX.X\n api-url=XXXXXXX\n identity-file=adminIdentity.json\n")),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"In order to work with Integration Services API, you will need to be authenticated with a decentralized identity."),(0,r.kt)("p",null,"The Integration Services use a JWT token based authorization mechanism which behaves in the following manner:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client gets a nonce from the API and returns it signed by the identity's private key."),(0,r.kt)("li",{parentName:"ol"},"The API returns a JWT token to authorize any subsequent requests.")),(0,r.kt)("p",null,"You can get an identity using the following script (no auth required):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  IdentityClient client = new IdentityClient();\n  JSONObject jsonClaim = new JSONObject().put("type", "Person").put("name", "randomName");\n\n  Claim claim = new Claim(jsonClaim);\n\n  final String randomUsername = Utils.getRandomUsernameOfLength(5);\n  System.out.println("username: " + randomUsername);\n  JSONObject newUserIdentity = client.create(randomUsername, claim);\n  System.out.println("created new user " + newUserIdentity);\n')),(0,r.kt)("p",null,"The generated identity is stored on the IOTA Tangle and follows ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"did-core specifications"),".\nIt is a JSON file like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss",\n    "authentication": [\n      {\n        "id": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss#key",\n        "controller": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyBase58": "5LT5yjaykKeTqYuqmCELE7xUyN9z4WEN5CKxdWmrU5g5"\n      }\n    ],\n    "created": "2021-12-20T10:43:00Z",\n    "updated": "2021-12-20T10:43:00Z",\n    "proof": {\n      "type": "JcsEd25519Signature2020",\n      "verificationMethod": "#key",\n      "signatureValue": "ktusPiZd5whHTHsJJwSiSbfhmAGypdkTgLFQt4USvVg91WJLYNhEzshcBCvr9Cr42heyB249TvZHVrdGVAYds6s"\n    }\n  },\n  "key": {\n    "type": "ed25519",\n    "public": "5LT5yjaykKeTqYuqmCELE7xUyN9z4WEN5CKxdWmrU5g5",\n    "secret": "9Arv8HTAu3JjLvBhst6deMaULvBc3e7w2WiseEL4BESC",\n    "encoding": "base58"\n  }\n}\n')),(0,r.kt)("p",null,"If you have a JSON Identity, you can authorize your client as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  String id = newUserIdentity.getJSONObject("doc").getString("id");\n  String pubKey = newUserIdentity.getJSONObject("key").getString("public");\n  String privKey = newUserIdentity.getJSONObject("key").getString("secret");\n  client.authenticate(id, pubKey, privKey);\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);