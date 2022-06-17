"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20871],{60524:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(76018),o=a(54501),l=["components"],u={keywords:["state","access","storage","key","data","value"],description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",image:"/img/logo/WASP_logo_dark.png"},c="Smart Contract State",d={unversionedId:"guide/schema/state",id:"guide/schema/state",title:"Smart Contract State",description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/state.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/state",permalink:"/smart-contracts/guide/schema/state",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/state.mdx",tags:[],version:"current",frontMatter:{keywords:["state","access","storage","key","data","value"],description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Type Definitions",permalink:"/smart-contracts/guide/schema/typedefs"},next:{title:"Triggering Events",permalink:"/smart-contracts/guide/schema/events"}},p={},m=[],h={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"smart-contract-state"},"Smart Contract State"),(0,s.kt)("p",null,"The smart contract state storage on the host consists of a single key/value map. Both key\nand value are raw data bytes. As long as you access the data in the same way that you used\nto store it, you will always get valid data back. The schema tool will create a type-safe\naccess layer to make sure that data storage and retrieval always uses the expected data\ntype."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," section in the schema definition file contains a number of field definitions\nthat together define the variables that are stored in the state storage. Each field\ndefinition uses a JSON key/value pair to define the name and data type of the field.\nThe JSON key defines the field name. The JSON value (a string) defines the field's data\ntype, and can be followed by an optional comment that describes the field."),(0,s.kt)("p",null,"The schema tool will use this information to generate the specific code that accesses the\nstate variables in a type-safe way. Let's examine the ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"dividend"),"\nexample in more detail:"),(0,s.kt)(i.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": {\n    "memberList": "Address[] // array with all the recipients of this dividend",\n    "members": "map[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  }\n}\n'))),(0,s.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"state:\n  memberList: Address[] // array with all the recipients of this dividend\n  members: map[Address]Int64 // map with all the recipient factors of this dividend\n  owner: AgentID // owner of contract, the only one who can call 'member' func\n  totalFactor: Int64 // sum of all recipient factors\n")))),(0,s.kt)("p",null,"Let's start with the simplest state variables. ",(0,s.kt)("inlineCode",{parentName:"p"},"totalFactor")," is an Int64, and ",(0,s.kt)("inlineCode",{parentName:"p"},"owner")," is\nan AgentID. Both are predefined ",(0,s.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/types"},"WasmLib value types"),"."),(0,s.kt)("p",null,"Then you have the ",(0,s.kt)("inlineCode",{parentName:"p"},"memberList")," variable. The empty brackets ",(0,s.kt)("inlineCode",{parentName:"p"},"[]")," indicate that this is an\narray. The brackets immediately follow the homogenous type of the elements in the array,\nwhich in this case is the predefined Address value type."),(0,s.kt)("p",null,"Finally, you have the ",(0,s.kt)("inlineCode",{parentName:"p"},"members")," variable. The ",(0,s.kt)("inlineCode",{parentName:"p"},"map[]")," indicate that this is a map. Between\nthe brackets is the homogenous type of the keys, which in this case are of the predefined\nAddress type. The brackets are immediately followed by the homogenous type of the values\nin the map, which in this case are of the predefined Int64 type."),(0,s.kt)("p",null,"Here is part of the code in ",(0,s.kt)("inlineCode",{parentName:"p"},"state.xx")," that the schema tool has generated. The\nMutableDividendState struct defines a type-safe interface to access each of the state\nvariables through mutable proxies:"),(0,s.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"type MutableDividendState struct {\n    id int32\n}\n\nfunc (s MutableDividendState) MemberList() ArrayOfMutableAddress {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMemberList], wasmlib.TYPE_ARRAY|wasmlib.TYPE_ADDRESS)\n    return ArrayOfMutableAddress{objID: arrID}\n}\n\nfunc (s MutableDividendState) Members() MapAddressToMutableInt64 {\n    mapID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMembers], wasmlib.TYPE_MAP)\n    return MapAddressToMutableInt64{objID: mapID}\n}\n\nfunc (s MutableDividendState) Owner() wasmlib.ScMutableAgentID {\n    return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxStateOwner])\n}\n\nfunc (s MutableDividendState) TotalFactor() wasmlib.ScMutableInt64 {\n    return wasmlib.NewScMutableInt64(s.id, idxMap[IdxStateTotalFactor])\n}\n"))),(0,s.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct MutableDividendState {\n    pub(crate) id: i32,\n}\n\nimpl MutableDividendState {\n    pub fn member_list(&self) -> ArrayOfMutableAddress {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBER_LIST), TYPE_ARRAY | TYPE_ADDRESS);\n        ArrayOfMutableAddress { obj_id: arr_id }\n    }\n\n    pub fn members(&self) -> MapAddressToMutableInt64 {\n        let map_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBERS), TYPE_MAP);\n        MapAddressToMutableInt64 { obj_id: map_id }\n    }\n\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n\n    pub fn total_factor(&self) -> ScMutableInt64 {\n        ScMutableInt64::new(self.id, idx_map(IDX_STATE_TOTAL_FACTOR))\n    }\n}\n"))),(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export class MutableDividendState extends wasmlib.ScMapID {\n\n    memberList(): sc.ArrayOfMutableAddress {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateMemberList], wasmlib.TYPE_ARRAY|wasmlib.TYPE_ADDRESS);\n        return new sc.ArrayOfMutableAddress(arrID)\n    }\n\n        members(): sc.MapAddressToMutableInt64 {\n        let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateMembers], wasmlib.TYPE_MAP);\n        return new sc.MapAddressToMutableInt64(mapID);\n    }\n\n        owner(): wasmlib.ScMutableAgentID {\n        return new wasmlib.ScMutableAgentID(this.mapID, sc.idxMap[sc.IdxStateOwner]);\n    }\n\n        totalFactor(): wasmlib.ScMutableInt64 {\n        return new wasmlib.ScMutableInt64(this.mapID, sc.idxMap[sc.IdxStateTotalFactor]);\n    }\n}\n")))),(0,s.kt)("p",null,"As you can see, the schema tool has generated a proxy interface for the mutable ",(0,s.kt)("inlineCode",{parentName:"p"},"dividend"),"\nstate, called ",(0,s.kt)("inlineCode",{parentName:"p"},"MutableDividendState"),". It has a 1-to-1 correspondence to the ",(0,s.kt)("inlineCode",{parentName:"p"},"state"),"\nsection in the schema definition file. Each member function accesses a type-safe proxy\nobject for the corresponding variable. In addition, the schema tool generates any\nnecessary intermediate map and array proxy types that force the usage of their respective\nhomogenous types. In the above example both ",(0,s.kt)("inlineCode",{parentName:"p"},"ArrayOfMutableAddress")," and\n",(0,s.kt)("inlineCode",{parentName:"p"},"MapAddressToMutableInt64")," are examples of such automatically generated proxy types.\nSee the full ",(0,s.kt)("inlineCode",{parentName:"p"},"state.xx")," for more details."),(0,s.kt)("p",null,"In the next section we will explore how the schema tool helps to simplify ",(0,s.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/events"},"triggering\nevents"),"."))}f.isMDXComponent=!0},54501:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),s="tabItem_OmH5";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},t)}},76018:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),s=a(5730),i=a(20636),o=a(76602),l=a(63735),u=a(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,a,s,p=e.lazy,m=e.block,h=e.defaultValue,f=e.values,b=e.groupId,y=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=v[0])?void 0:s.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,o.U)(),I=T.tabGroupChoices,M=T.setTabGroupChoices,S=(0,r.useState)(k),D=S[0],x=S[1],A=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=I[b];null!=_&&_!==D&&g.some((function(e){return e.value===_}))&&x(_)}var E=function(e){var t=e.currentTarget,a=A.indexOf(t),n=g[a].value;n!==D&&(O(t),x(n),null!=b&&M(b,n))},N=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=A.indexOf(e.currentTarget)+1;a=A[n]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;a=A[r]||A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},y)},g.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return A.push(e)},onKeyDown:N,onFocus:E,onClick:E},s,{className:(0,u.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);