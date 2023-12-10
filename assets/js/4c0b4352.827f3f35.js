"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>k});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=o(r),c=l,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||n;return r?a.createElement(k,i(i({ref:t},y),{},{components:r})):a.createElement(k,i({ref:t},y))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<n;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89005:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(87462),l=(r(67294),r(3905));const n={},i="Query User Stats",s={type:"api",id:"query-user-stats",unversionedId:"query-user-stats",title:"Query User Stats",description:"",slug:"/query-user-stats",frontMatter:{},api:{tags:["users"],operationId:"query_user_stats_api_v1_users__user_id__stats_get",parameters:[{required:!0,schema:{title:"User Id",type:"string",format:"uuid"},name:"user_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Query User Stats Api V1 Users  User Id  Stats Get",type:"object",additionalProperties:{title:"UserScore",required:["user_id","username","auth_method","display_name"],type:"object",properties:{rank:{title:"Rank",type:"integer"},user_id:{title:"User Id",type:"string",format:"uuid"},highlighted:{title:"Highlighted",type:"boolean",default:!1},username:{title:"Username",type:"string"},auth_method:{title:"Auth Method",type:"string"},display_name:{title:"Display Name",type:"string"},leader_score:{title:"Leader Score",type:"integer",default:0},level:{title:"Level",type:"integer",default:0},base_date:{title:"Base Date",type:"string",format:"date-time"},modified_date:{title:"Modified Date",type:"string",format:"date-time"},prompts:{title:"Prompts",type:"integer",default:0},replies_assistant:{title:"Replies Assistant",type:"integer",default:0},replies_prompter:{title:"Replies Prompter",type:"integer",default:0},labels_simple:{title:"Labels Simple",type:"integer",default:0},labels_full:{title:"Labels Full",type:"integer",default:0},rankings_total:{title:"Rankings Total",type:"integer",default:0},rankings_good:{title:"Rankings Good",type:"integer",default:0},accepted_prompts:{title:"Accepted Prompts",type:"integer",default:0},accepted_replies_assistant:{title:"Accepted Replies Assistant",type:"integer",default:0},accepted_replies_prompter:{title:"Accepted Replies Prompter",type:"integer",default:0},reply_ranked_1:{title:"Reply Ranked 1",type:"integer",default:0},reply_ranked_2:{title:"Reply Ranked 2",type:"integer",default:0},reply_ranked_3:{title:"Reply Ranked 3",type:"integer",default:0},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},streak_days:{title:"Streak Days",type:"integer"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],description:"Query User Stats",method:"get",path:"/api/v1/users/{user_id}/stats",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Query User Stats",description:{type:"text/plain"},url:{path:["api","v1","users",":user_id","stats"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"user_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/query-user-stats",previous:{title:"Query User Messages Cursor",permalink:"/Open-Assistant/api/query-user-messages-cursor"},next:{title:"Query User Stats Timeframe",permalink:"/Open-Assistant/api/query-user-stats-timeframe"}},p=[],o={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(y,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"query-user-stats"},"Query User Stats"),(0,l.kt)("p",null,"Query User Stats"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"user_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"422")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"msg"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}u.isMDXComponent=!0}}]);