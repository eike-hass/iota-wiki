"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42928],{61876:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={},s="Deploy and test the Data Marketplace demo",p={unversionedId:"data-marketplace/deployment-and-testing",id:"data-marketplace/deployment-and-testing",title:"Deploy and test the Data Marketplace demo",description:"To start buying and selling data streams on the Data Marketplace, deploy your own application, or test it in our demo app.",source:"@site/content/build/blueprints/production/data-marketplace/deployment-and-testing.md",sourceDirName:"data-marketplace",slug:"/data-marketplace/deployment-and-testing",permalink:"/blueprints/data-marketplace/deployment-and-testing",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/content/build/blueprints/production/data-marketplace/deployment-and-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Application Architecture",permalink:"/blueprints/data-marketplace/architecture"},next:{title:"Document Immutability",permalink:"/blueprints/doc-immutability/overview"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Programming Knowledge",id:"programming-knowledge",level:3},{value:"IOTA Knowledge",id:"iota-knowledge",level:3},{value:"Deploy the Data Marketplace App",id:"deploy-the-data-marketplace-app",level:2},{value:"Test the Data Marketplace App",id:"test-the-data-marketplace-app",level:2},{value:"Create and Fund a New Wallet",id:"create-and-fund-a-new-wallet",level:3},{value:"Fund an Existing Wallet",id:"fund-an-existing-wallet",level:3},{value:"Query a Data Stream",id:"query-a-data-stream",level:3},{value:"Buy a Data Stream",id:"buy-a-data-stream",level:3},{value:"Remove a Device",id:"remove-a-device",level:3}],c={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-and-test-the-data-marketplace-demo"},"Deploy and test the Data Marketplace demo"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To start buying and selling data streams on the Data Marketplace, deploy your own application, or test it in our demo app.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To submit sensor data to the Data Marketplace, you must have the following:"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A sensor or device that generates data such as the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.netatmo.com/en-us/weather"},"Netatmo Weather Station")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.bosch.com/products-and-services/sdks/xdk"},"Bosch XDK")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nordicsemi.com/Software-and-Tools/Development-Tools/Nordic-Thingy-52-App"},"Nordic Semiconductor Thingy:52")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/2733"},"Raspberry Pi with a sensor kit")," ")))),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/data-marketplace"},"Data Marketplace"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/mam.js"},"MAM (masked authenticated messaging)")))),(0,o.kt)("p",null,"Choose from one of the following cloud services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Google Cloud"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting/"},"Web server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/"},"Authentication service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/"},"NoSQL database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/functions"},"Background tasks and API server")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Amazon"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Web server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/api-gateway/"},"API server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/dynamodb/"},"NoSQL database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Background tasks")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Azure"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/storage/"},"Web server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/app-service/"},"API server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/cosmos-db/"},"NoSQL database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/functions/"},"Background tasks"))))),(0,o.kt)("h3",{id:"programming-knowledge"},"Programming Knowledge"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript/TypeScript"),(0,o.kt)("li",{parentName:"ul"},"HTML/CSS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app"},"React framework")),(0,o.kt)("li",{parentName:"ul"},"Required third-party licenses"),(0,o.kt)("li",{parentName:"ul"},"Cloud service")),(0,o.kt)("h3",{id:"iota-knowledge"},"IOTA Knowledge"),(0,o.kt)("p",null,"An understanding of ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/introducing-masked-authenticated-messaging-e55c1822d50e/"},"MAM channels"),"."),(0,o.kt)("h2",{id:"deploy-the-data-marketplace-app"},"Deploy the Data Marketplace App"),(0,o.kt)("p",null,"To deploy your own data marketplace, follow the instructions in these blog posts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@lexerr/47b608c527c9"},"https://medium.com/@lexerr/47b608c527c9")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@lexerr/b33d9856c852"},"https://medium.com/@lexerr/b33d9856c852"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The blog posts are outdated. Some of the firebase related setup might have changed. Also the usage of the Trinity wallet is not longer supported. The new ",(0,o.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Firefly wallet")," is recommended to use."))),(0,o.kt)("h2",{id:"test-the-data-marketplace-app"},"Test the Data Marketplace App"),(0,o.kt)("p",null,"Instead of deploying your own data marketplace, you can test our demo app by adding your own device to it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/#/dashboard"},"Dashboard \u200bpage")," to log in. Here, you will see a Google OAuth login screen. Click ",(0,o.kt)("strong",{parentName:"p"},"Sign in with Google"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new device"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),":")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can create up to 5 devices per account with the default settings. This number can be adjusted upon request.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter some information about your device. Make sure you complete the fields relating to the data streams you would like to collect."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Device ID"),": This ID should be unique among all existing sensors and will serve as access key when purchasing a data stream. Please note that the ID must begin with a letter (","[a-z]",") and may be followed by any number of letters, digits (","[0\u20139]","), hyphens (\u201c-\u201d), and underscores (\u201c_\u201d). Max allowed length is set to 40 characters. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Device Type"),": Plain text type description, that helps other Data Marketplace participants identify potential usage of the sensors\u2019 data stream. Typical examples: \u201cweather station\u201d, \u201ctracking device\u201d, \u201ccharging station\u201d. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Company"),": Provide the name of the company that owns and maintains the sensor. This information creates more trust between sensor owners and Data Marketplace users who are interested in purchasing the data stream. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Location (city / country)"),": This information helps to identify if the sensor data is relevant for purchasing. For example, some users might be interested in purchasing data streams from weather or environmental sensors located in a specific region. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GPS Coordinates (latitude / longitude)"),": You can use a service like ",(0,o.kt)("a",{parentName:"li",href:"https://www.gps-coordinates.net/"},"https://www.gps-coordinates.net/")," to get the right GPS data for your sensor. We accept coordinates as a number of digits (","[0\u20139]","), that could be prepended by a hyphen (\u201c-\u201d) for negative value, and a decimal separator (\u201c.\u201d). Please do not enter any letters or special characters. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Price of the data stream"),": Here you can define the cost of the sensor data. We do not restrict you with defining the value, but please keep in mind that without a preview and refund options, only a few customers will be ready to pay a fortune for a data stream. On the other hand, setting a very low price might result in a total collected payment under 1/1000 of a cent. We encourage you to check the ",(0,o.kt)("a",{parentName:"li",href:"https://coinmarketcap.com/currencies/iota/"},"current price")," of 1 Mi, which is 1000000 (one million) IOTA tokens. We suggest that you set the price within the range of 1000 i to 50000 i, depending on the cost and maintenance efforts of the sensor. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Fields"),": The most essential part of the sensor configuration. Please provide information for every parameter that will be captured by the sensor and stored in the Tangle. You can add or remove fields by pressing the ",(0,o.kt)("strong",{parentName:"li"},"+")," and ",(0,o.kt)("strong",{parentName:"li"},"X")," buttons on the right.")),(0,o.kt)("p",{parentName:"li"},"Parameter information consist of 3 fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Field ID"),": This ID should be unique among all other parameters for the specific sensor. Please note that the ID must begin with a letter (","[a-z]",") and may be followed by any number of letters, digits (","[0\u20139]","), hyphens (\u201c-\u201d), and underscores (\u201c_\u201d). Max allowed length is set to 40 characters. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Field Name"),": Plain text parameter description that indicates the purpose of the field. Max allowed length is set to 40 characters. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Field Unit"),": ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_physical_quantities"},"Physical quantities")," and ",(0,o.kt)("a",{parentName:"li",href:"https://whatis.techtarget.com/reference/Table-of-Physical-Units"},"units")," \u200babbreviation, primarily in the International ",(0,o.kt)("a",{parentName:"li",href:"https://whatis.techtarget.com/reference/Table-of-Physical-Units"},"System of Units")," \u200b(SI). It can also be a unit of ",(0,o.kt)("a",{parentName:"li",href:"https://www.fondriest.com/environmental-measurements/parameters/"},"environmental measurements"),", like humidity, air quality, precipitation, wind speed or direction. Please keep the length of this field within 20 characters."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Download Publish Script")," to download of a preconfigured ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," archive that contains examples and documentation on how to store data in the Tangle for your device")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the content of the archive, and open the folder in a code editor such as ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Visual Studio Code")," to start working with the script"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),":")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Read the",(0,o.kt)("inlineCode",{parentName:"p"}," README.md")," file before you start using the script."))),(0,o.kt)("p",{parentName:"li"},"The script is pre-configured to publish data for the selected device. You\u2019ll find the sensor ID and its secret key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file."),(0,o.kt)("p",{parentName:"li"},"If you decide to use the same script for multiple sensors, please note that the secret key should be changed as well. Otherwise you won\u2019t be able to decrypt your published data."),(0,o.kt)("p",{parentName:"li"},"By default the script runs in debug mode, which means that no data is published. All captured data is printed out in the console, so you can verify and adjust it. Once the payload looks good, you can disable debug mode by setting the debug variable to false in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file (see screenshot below), and let data be published."),(0,o.kt)("p",{parentName:"li"},"Please note that some computation is done for every data package, which might take up to 60 seconds. Please take this into account and do not interrupt the script while running this operation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/iotatangle/the-iota-data-marketplace-a-tech-intro-part-3-eea5cbcd1eb7/"},"blog post")," to learn more about publishing sensor data to IOTA Tangle"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The blog posts are outdated. Some of the firebase related setup might have changed. Also the usage of the Trinity wallet is not longer supported. The new ",(0,o.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Firefly wallet")," is recommended to use."))),(0,o.kt)("h3",{id:"create-and-fund-a-new-wallet"},"Create and Fund a New Wallet"),(0,o.kt)("p",null,"You can fund a device's wallet with free IOTA tokens. We usually transfer a predefined amount of Devnet tokens for free to your new device's wallet."),(0,o.kt)("p",null,"When you check the balance of your address on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.iota.org/devnet"},"IOTA Explorer")," you will notice that the balance displayed there is higher than on the data marketplace. This difference is due to the ",(0,o.kt)("strong",{parentName:"p"},"Dust Protection")," deployed with the Chrysalis Update which limits micro transactions. To bypass this limitation we will transfer in addition to the usable tokens 1 Mi hidden tokens to your account. You will not be able to use those tokens. For further reading on dust protection\nhave a look at ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36"},"Dust protection on the IOTA Network"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),":")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Devnet tokens can't be used on the Mainnet or exchanged on any cryptocurrency exchange."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a sensor or device for which you want to purchase a data stream")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Sensor \u200bpage, in the top right corner you will find a button to fund your wallet"))),(0,o.kt)("p",null,"Do not interrupt this operation by refreshing the page or navigating to another page of the application. After the transfer is complete, the balance of the wallet is automatically updated."),(0,o.kt)("p",null,"Alternatively, you can ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/static/docs#create-and-fund-wallet"},"use the API to fund a wallet"),"."),(0,o.kt)("h3",{id:"fund-an-existing-wallet"},"Fund an Existing Wallet"),(0,o.kt)("p",null,"If your wallet balance is low and you try to buy a sensor that costs more than your balance the 'Fund' button will reappear to fund your wallet once again."),(0,o.kt)("h3",{id:"query-a-data-stream"},"Query a Data Stream"),(0,o.kt)("p",null,"When you buy a data stream you can query the data that's published to the MAM channel in the Tangle."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Sensor page"),(0,o.kt)("p",{parentName:"li"},"If you've already purchased the stream, data will be automatically loaded in chunks (20 packets per request). ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to the bottom of the page to automatically query the following 20 packets."))),(0,o.kt)("p",null,"Alternatively, you can ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/static/docs#query-stream"},"use the API to query a data stream"),"."),(0,o.kt)("h3",{id:"buy-a-data-stream"},"Buy a Data Stream"),(0,o.kt)("p",null,"You can buy a device's data stream using the balance of the wallet. When you buy a data stream, you're given access to the MAM channel's root so that you can find the data in the Tangle."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Sensor \u200bpage"),(0,o.kt)("p",{parentName:"li"},"If you have not purchased the stream, a message appears asking whether you would like to purchase the data stream for an amount, that was set by the device owner. When you purchase device data stream from the web portal, your wallet balance is automatically updated."))),(0,o.kt)("p",null,"Alternatively, you can ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/static/docs#purchase-stream"},"use the API to buy a data stream"),"."),(0,o.kt)("h3",{id:"remove-a-device"},"Remove a Device"),(0,o.kt)("p",null,"If you no longer want your device to be visible on the Data Marketplace, you can remove it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/#/dashboard"},"Dashboard")," page")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("strong",{parentName:"p"},"X")," in the top-right corner of the device card"),(0,o.kt)("p",{parentName:"li"},"Be aware that the seed associated with the device is also removed. That means that you can no longer withdraw funds that were transferred to the device's seed."))),(0,o.kt)("p",null,"Alternatively, you can ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/static/docs#remove-device"},"use the API to remove a device"),"."))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);