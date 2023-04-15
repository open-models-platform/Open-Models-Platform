"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[5401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,m=u["".concat(l,".").concat(y)]||u[y]||f[y]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},87077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={},o="Classifying an initial prompt or user reply",i={unversionedId:"tasks/label_prompter_reply",id:"tasks/label_prompter_reply",title:"Classifying an initial prompt or user reply",description:"In this task, you'll be shown a random message written by another person. This",source:"@site/docs/tasks/label_prompter_reply.md",sourceDirName:"tasks",slug:"/tasks/label_prompter_reply",permalink:"/Open-Assistant/docs/tasks/label_prompter_reply",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Classifying an assistant reply",permalink:"/Open-Assistant/docs/tasks/label_assistant_reply"},next:{title:"Providing an assistant reply",permalink:"/Open-Assistant/docs/tasks/reply_as_assistant"}},l={},p=[],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"classifying-an-initial-prompt-or-user-reply"},"Classifying an initial prompt or user reply"),(0,a.kt)("p",null,"In this task, you'll be shown a random message written by another person. This\nmessage is mimicing a request or question directed towards the assistant - a\n",(0,a.kt)("strong",{parentName:"p"},"prompt"),". This prompt could either be a start of a conversation, or a reply to\na message from the assistant. Your job is to rate parameters like quality or\npoliteness, as well as include any applicable labels, such as spam, PII or\nsexual content."),(0,a.kt)("p",null,"If you are unsure of the definition of any of the labels, look up their\ndefinition\n",(0,a.kt)("a",{parentName:"p",href:"https://projects.laion.ai/Open-Assistant/docs/guides/guidelines#label-explanation"},"here"),"."),(0,a.kt)("p",null,"Please make sure to read the\n",(0,a.kt)("a",{parentName:"p",href:"https://projects.laion.ai/Open-Assistant/docs/guides/guidelines#classifying-user"},"guidelines"),"\nbefore submitting."))}f.isMDXComponent=!0}}]);