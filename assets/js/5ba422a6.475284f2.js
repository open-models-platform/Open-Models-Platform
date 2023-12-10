"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[102],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var r=a.createContext({}),p=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(r.Provider,{value:e},t.children)},y="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,r=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),y=p(n),u=o,k=y["".concat(r,".").concat(u)]||y[u]||d[u]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[y]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17317:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>r});var a=n(87462),o=(n(67294),n(3905));const l={},i="Get Conv",s={type:"api",id:"get-conv",unversionedId:"get-conv",title:"Get Conv",description:"",slug:"/get-conv",frontMatter:{},api:{tags:["messages"],description:"Get a conversation from the tree root and up to the message with given internal ID.",operationId:"get_conv_api_v1_messages__message_id__conversation_get",parameters:[{required:!0,schema:{title:"Message Id",type:"string",format:"uuid"},name:"message_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}},user_is_author:{title:"User Is Author",type:"boolean"},synthetic:{title:"Synthetic",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],method:"get",path:"/api/v1/messages/{message_id}/conversation",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Conv",description:{content:"Get a conversation from the tree root and up to the message with given internal ID.",type:"text/plain"},url:{path:["api","v1","messages",":message_id","conversation"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-conv",previous:{title:"Mark Message Deleted",permalink:"/Open-Assistant/api/mark-message-deleted"},next:{title:"Get Tree",permalink:"/Open-Assistant/api/get-tree"}},r=[],p={toc:r},c="wrapper";function y(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-conv"},"Get Conv"),(0,o.kt)("p",null,"Get a conversation from the tree root and up to the message with given internal ID."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"message_id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful Response"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"messages"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"user_id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"frontend_message_id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"text"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Text"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"lang"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Lang"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"is_assistant"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"emojis"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"user_emojis"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"user_is_author"),(0,o.kt)("span",{style:{opacity:"0.6"}}," User Is Author"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"synthetic"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Synthetic"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"422")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation Error"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"detail"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"loc"),(0,o.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"msg"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}y.isMDXComponent=!0}}]);