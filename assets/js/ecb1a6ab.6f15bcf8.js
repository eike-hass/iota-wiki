"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[83543],{97038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),d=["components"],o={image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples"]},l="Create Identity and Credentials",c={unversionedId:"examples/node/create-identity-and-credentials",id:"examples/node/create-identity-and-credentials",title:"Create Identity and Credentials",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",source:"@site/content/build/integration-services/production/documentation/docs/examples/node/create-identity-and-credentials.mdx",sourceDirName:"examples/node",slug:"/examples/node/create-identity-and-credentials",permalink:"/integration-services/examples/node/create-identity-and-credentials",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/node/create-identity-and-credentials.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples"]},sidebar:"docs",previous:{title:"How To Run Examples",permalink:"/integration-services/examples/node/how-to-run-examples"},next:{title:"Update Users",permalink:"/integration-services/examples/node/update-users"}},s={},u=[{value:"Authentication",id:"authentication",level:2},{value:"Create an Identity",id:"create-an-identity",level:2},{value:"Verify a Credential",id:"verify-a-credential",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-identity-and-credentials"},"Create Identity and Credentials"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/1-CreateIdentityAndCredential.ts"},"example-1"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,r.kt)("a",{parentName:"p",href:"./how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creates a new Identity (",(0,r.kt)("inlineCode",{parentName:"li"},"userIdentity"),")."),(0,r.kt)("li",{parentName:"ol"},"Creates a credential for that identity (",(0,r.kt)("inlineCode",{parentName:"li"},"userCredential"),")."),(0,r.kt)("li",{parentName:"ol"},"Verifies the generated credential (",(0,r.kt)("inlineCode",{parentName:"li"},"await identity.checkCredential(userCredential)"),").")),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-1\n")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"You can use the following script to authenticate the client using the Admin identity and get the\nBasicIdentityCredential that the admin owns: this VC (verifiable credential),\nwhich is required for an Issuer to sign verifiable credentials for other Identities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { IdentityClient, IdentityJson } from \'@iota/is-client\';\n\n...\n\n// Initialize IdentityClient with previously setup parameters\nconst identity = new IdentityClient({\n  ssiBridgeUrl: process.env.SSI_BRIDGE_URL,\n  auditTrailUrl: process.env.AUDIT_TRAIL_URL,\n  apiKey: process.env.API_KEY,\n  apiVersion: ApiVersion.v01\n});\n\n// Recover the admin identity\nconst adminIdentity = JSON.parse(readFileSync("./adminIdentity.json").toString()) as IdentityJson;\n\n// Authenticate as the admin identity\nawait identity.authenticate(adminIdentity.doc.id, adminIdentity.key.secret);\n\n// Get admin identity data\nconst adminIdentityPublic = await identity.find(adminIdentity.doc.id);\n\n// Get admin identy\'s VC\nconst identityCredential = adminIdentityPublic?.verifiableCredentials?.[0];\n\nconsole.log("Identity Credential of Admin", identityCredential);\n')),(0,r.kt)("h2",{id:"create-an-identity"},"Create an Identity"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"createCredential")," requires a valid verifiable credential of type\nBasicIdentity, the destination DID the type and the claim, which can be created using the following script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Create identity for user\nconst userIdentity = await identity.create("User-" + Math.ceil(Math.random() * 100000);\n\nconsole.log("~~~~~~~~~~~~~~~~");\nconsole.log("Created user identity: ", userIdentity);\nconsole.log("~~~~~~~~~~~~~~~~");\n// Assign a verifiable credential to the user as rootIdentity.\n// With the BasicIdentityCredential the user is not allowed to issue further credentials\nconst userCredential = await identity.createCredential(\n  identityCredential,\n  userIdentity?.doc?.id,\n  CredentialTypes.BasicIdentityCredential,\n  UserType.Person,\n  {\n    profession: "Professor",\n  }\n);\n')),(0,r.kt)("h2",{id:"verify-a-credential"},"Verify a Credential"),(0,r.kt)("p",null,"You can verify a credential using the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const verified = await identity.checkCredential(userCredential);\n\nconsole.log("Verification result: ", verified);\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(y,d(d({ref:t},s),{},{components:n})):i.createElement(y,d({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,d=new Array(r);d[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var c=2;c<r;c++)d[c]=n[c];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);