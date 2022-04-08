"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4030],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1706:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={slug:"options-request",title:"\u4e3a\u4ec0\u4e48\u4f1a\u6709OPTIONS\u8bf7\u6c42",tags:["\u7f51\u7edc","http","tcp"]},p=void 0,u={unversionedId:"\u7f51\u7edc/\u4e3a\u4ec0\u4e48\u4f1a\u6709Options\u8bf7\u6c42",id:"\u7f51\u7edc/\u4e3a\u4ec0\u4e48\u4f1a\u6709Options\u8bf7\u6c42",isDocsHomePage:!1,title:"\u4e3a\u4ec0\u4e48\u4f1a\u6709OPTIONS\u8bf7\u6c42",description:"Options \u8bf7\u6c42\uff0c\u6211\u6240\u4e86\u89e3\u7684\u5c31\u662f\u5728\u53d1\u8d77\u8de8\u57df\u7684\u975e\u7b80\u5355\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5148\u53d1\u8d77\u4e00\u4e2a options \u9884\u68c0\u8bf7\u6c42\uff08\u6d4f\u89c8\u5668\u662f\u81ea\u52a8\u53d1\u8d77\u7684\uff09\uff0c\u53bb\u68c0\u6d4b\u76ee\u6807\u670d\u52a1\u5668\u662f\u652f\u6301\u8de8\u57df\u8bf7\u6c42\u3002",source:"@site/docs/\u7f51\u7edc/\u4e3a\u4ec0\u4e48\u4f1a\u6709Options\u8bf7\u6c42.md",sourceDirName:"\u7f51\u7edc",slug:"/\u7f51\u7edc/options-request",permalink:"/Blog/docs/\u7f51\u7edc/options-request",tags:[{label:"\u7f51\u7edc",permalink:"/Blog/docs/tags/\u7f51\u7edc"},{label:"http",permalink:"/Blog/docs/tags/http"},{label:"tcp",permalink:"/Blog/docs/tags/tcp"}],version:"current",frontMatter:{slug:"options-request",title:"\u4e3a\u4ec0\u4e48\u4f1a\u6709OPTIONS\u8bf7\u6c42",tags:["\u7f51\u7edc","http","tcp"]},sidebar:"tutorialSidebar",previous:{title:"tcp\u7684\u7c98\u5305\u62c6\u5305\u53ca\u5176\u89e3\u51b3\u65b9\u5f0f",permalink:"/Blog/docs/\u7f51\u7edc/tcp-sticky-package-and-unpacking"},next:{title:"\u5e38\u89c1\u7684\u7f51\u7edc\u653b\u51fb",permalink:"/Blog/docs/\u7f51\u7edc/network-attack"}},s=[{value:"\u4ec0\u4e48\u662f Options \u8bf7\u6c42\uff1f",id:"\u4ec0\u4e48\u662f-options-\u8bf7\u6c42",children:[],level:2},{value:"Options \u9884\u68c0\u8bf7\u6c42",id:"options-\u9884\u68c0\u8bf7\u6c42",children:[{value:"\u5173\u952e\u8bf7\u6c42\u5934",id:"\u5173\u952e\u8bf7\u6c42\u5934",children:[],level:3},{value:"\u5173\u952e\u54cd\u5e94\u5934",id:"\u5173\u952e\u54cd\u5e94\u5934",children:[],level:3},{value:"Options \u8bf7\u6c42\u540e\u7684\u7b2c\u4e8c\u6b21\u8bf7\u6c42",id:"options-\u8bf7\u6c42\u540e\u7684\u7b2c\u4e8c\u6b21\u8bf7\u6c42",children:[],level:3}],level:2},{value:"\u5173\u4e8e Options \u8bf7\u6c42",id:"\u5173\u4e8e-options-\u8bf7\u6c42",children:[{value:"Options \u8bf7\u6c42\u662f\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u8d77\u7684",id:"options-\u8bf7\u6c42\u662f\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u8d77\u7684",children:[],level:3},{value:"\u8de8\u57df\u8bf7\u6c42\u65f6\uff0cOPTIONS \u8bf7\u6c42\u89e6\u53d1\u6761\u4ef6",id:"\u8de8\u57df\u8bf7\u6c42\u65f6options-\u8bf7\u6c42\u89e6\u53d1\u6761\u4ef6",children:[],level:3}],level:2},{value:"\u4f18\u5316 Options \u8bf7\u6c42",id:"\u4f18\u5316-options-\u8bf7\u6c42",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:s};function d(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Options \u8bf7\u6c42\uff0c\u6211\u6240\u4e86\u89e3\u7684\u5c31\u662f\u5728\u53d1\u8d77\u8de8\u57df\u7684\u975e\u7b80\u5355\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5148\u53d1\u8d77\u4e00\u4e2a options \u9884\u68c0\u8bf7\u6c42\uff08\u6d4f\u89c8\u5668\u662f\u81ea\u52a8\u53d1\u8d77\u7684\uff09\uff0c\u53bb\u68c0\u6d4b\u76ee\u6807\u670d\u52a1\u5668\u662f\u652f\u6301\u8de8\u57df\u8bf7\u6c42\u3002"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-options-\u8bf7\u6c42"},"\u4ec0\u4e48\u662f Options \u8bf7\u6c42\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u670d\u52a1\u5668\u652f\u6301\u7684 http \u8bf7\u6c42\u65b9\u6cd5")),(0,a.kt)("p",null,"\u54cd\u5e94\u62a5\u6587\u5305\u542b\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow")," \u9996\u90e8\u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u7684\u503c\u8868\u660e\u4e86\u670d\u52a1\u5668\u652f\u6301\u7684\u6240\u6709 HTTP \u65b9\u6cd5"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u8de8\u57df\u8bf7\u6c42\u7684\u9884\u68c0\u8bf7\u6c42")),(0,a.kt)("h2",{id:"options-\u9884\u68c0\u8bf7\u6c42"},"Options \u9884\u68c0\u8bf7\u6c42"),(0,a.kt)("p",null,"\u5728 CORS \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 OPTIONS \u65b9\u6cd5\u53d1\u8d77\u4e00\u4e2a\u9884\u68c0\u8bf7\u6c42\uff0c\u4ee5\u68c0\u6d4b\u5b9e\u9645\u8bf7\u6c42\u662f\u5426\u53ef\u4ee5\u88ab\u670d\u52a1\u5668\u6240\u63a5\u53d7\u3002"),(0,a.kt)("h3",{id:"\u5173\u952e\u8bf7\u6c42\u5934"},"\u5173\u952e\u8bf7\u6c42\u5934"),(0,a.kt)("p",null,"Options \u8bf7\u6c42\u4f1a\u643a\u5e26\u51e0\u4e2a\u5173\u952e\u7684 Request Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Request-Method"),(0,a.kt)("td",{parentName:"tr",align:null},"\u544a\u8bc9\u670d\u52a1\u5668\u5b9e\u9645\u8bf7\u6c42\u6240\u4f7f\u7528\u7684 HTTP \u65b9\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Request-Headers"),(0,a.kt)("td",{parentName:"tr",align:null},"\u544a\u8bc9\u670d\u52a1\u5668\u5b9e\u9645\u8bf7\u6c42\u6240\u643a\u5e26\u7684\u81ea\u5b9a\u4e49\u9996\u90e8\u5b57\u6bb5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Origin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u8bf7\u6c42\u7684\u57df\u540d \uff08\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\u53f7\uff09")))),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u57fa\u4e8e\u4ece\u9884\u68c0\u8bf7\u6c42\u83b7\u5f97\u7684\u4fe1\u606f\u6765\u5224\u65ad\uff0c\u662f\u5426\u63a5\u53d7\u63a5\u4e0b\u6765\u7684\u5b9e\u9645\u8bf7\u6c42\u3002"),(0,a.kt)("h3",{id:"\u5173\u952e\u54cd\u5e94\u5934"},"\u5173\u952e\u54cd\u5e94\u5934"),(0,a.kt)("p",null,"\u9884\u68c0\u54cd\u5e94\u5934 response header \u7684\u5173\u952e\u5b57\u6bb5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"response header"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Methods"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e86\u670d\u52a1\u7aef\u5141\u8bb8\u7684\u8bf7\u6c42\uff0c\u5305\u542b GET/HEAD/PUT/PATCH/POST/DELETE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Credentials"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u643a\u5e26 cookie\uff08\u8de8\u57df\u8bf7\u6c42\u8981\u643a\u5e26 cookie \u5fc5\u987b\u8bbe\u7f6e\u4e3a true\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Origin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u7684\u57df\u540d\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u914d\u7f6e\u4e00\u4e9b\u4fe1\u4efb\u7684\u57df\u540d\u767d\u540d\u5355")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Headers"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u6240\u643a\u5e26\u7684\u81ea\u5b9a\u4e49\u9996\u90e8\u5b57\u6bb5")))),(0,a.kt)("p",null,"\u6b64\u6b21 OPTIONS \u8bf7\u6c42\u8fd4\u56de\u4e86\u54cd\u5e94\u5934\u7684\u5185\u5bb9\uff0c\u4f46\u6ca1\u6709\u8fd4\u56de\u54cd\u5e94\u5b9e\u4f53 response body \u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"options-\u8bf7\u6c42\u540e\u7684\u7b2c\u4e8c\u6b21\u8bf7\u6c42"},"Options \u8bf7\u6c42\u540e\u7684\u7b2c\u4e8c\u6b21\u8bf7\u6c42"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u624d\u662f\u6211\u4eec\u771f\u6b63\u8981\u53d1\u9001\u7684\u8bf7\u6c42"),(0,a.kt)("h2",{id:"\u5173\u4e8e-options-\u8bf7\u6c42"},"\u5173\u4e8e Options \u8bf7\u6c42"),(0,a.kt)("h3",{id:"options-\u8bf7\u6c42\u662f\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u8d77\u7684"},"Options \u8bf7\u6c42\u662f\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u8d77\u7684"),(0,a.kt)("p",null,"\u8de8\u57df\u8bf7\u6c42\u89e6\u53d1\u4e86\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u8d77 OPTIONS \u8bf7\u6c42\u3002"),(0,a.kt)("h3",{id:"\u8de8\u57df\u8bf7\u6c42\u65f6options-\u8bf7\u6c42\u89e6\u53d1\u6761\u4ef6"},"\u8de8\u57df\u8bf7\u6c42\u65f6\uff0cOPTIONS \u8bf7\u6c42\u89e6\u53d1\u6761\u4ef6"),(0,a.kt)("p",null,"\u8de8\u57df\u7684\u975e\u7b80\u5355\u8bf7\u6c42\u4f1a\u89e6\u53d1\u9884\u68c0\u8bf7\u6c42"),(0,a.kt)("p",null,"\u90a3\u4e48\u6ee1\u8db3\u54ea\u4e9b\u6761\u4ef6\u7684\u8bf7\u6c42\u662f\u975e\u7b80\u5355\u8bf7\u6c42\u5462\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e86\u4e0b\u9762\u4efb\u610f\u4e00\u4e2a\u8bf7\u6c42\u65b9\u6cd5")),(0,a.kt)("p",null,"PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4eba\u4e3a\u8bbe\u7f6e\u4e86\u4ee5\u4e0b\u96c6\u5408\u4e4b\u5916\u9996\u90e8\u5b57\u6bb5")),(0,a.kt)("p",null,"Accept/Accept-Language/Content-Language/Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Content-Type \u7684\u503c\u4e0d\u5c5e\u4e8e\u4e0b\u5217\u4e4b\u4e00:")),(0,a.kt)("p",null,"application/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u4e2d\u7684\u4efb\u610f XMLHttpRequest \u5bf9\u8c61\u5747\u6ca1\u6709\u6ce8\u518c\u4efb\u4f55\u4e8b\u4ef6\u76d1\u542c\u5668\uff1bXMLHttpRequest \u5bf9\u8c61\u53ef\u4ee5\u4f7f\u7528 XMLHttpRequest.upload \u5c5e\u6027\u8bbf\u95ee\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u4e2d\u6ca1\u6709\u4f7f\u7528 ReadableStream \u5bf9\u8c61\u3002"))),(0,a.kt)("h2",{id:"\u4f18\u5316-options-\u8bf7\u6c42"},"\u4f18\u5316 Options \u8bf7\u6c42"),(0,a.kt)("p",null,"\u53ef\u89c1\u4e00\u65e6\u8fbe\u5230\u89e6\u53d1\u6761\u4ef6\uff0c\u8de8\u57df\u8bf7\u6c42\u4fbf\u4f1a\u4e00\u76f4\u53d1\u9001 2 \u6b21\u8bf7\u6c42\uff0c\u8fd9\u6837\u589e\u52a0\u7684\u8bf7\u6c42\u6570\u662f\u5426\u53ef\u4f18\u5316\u5462\uff1f\u7b54\u6848\u662f\u53ef\u4ee5\uff0cOPTIONS \u9884\u68c0\u8bf7\u6c42\u7684\u7ed3\u679c\u53ef\u4ee5\u88ab\u7f13\u5b58\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Access-Control-Max-Age \u8fd9\u4e2a\u54cd\u5e94\u9996\u90e8\u8868\u793a preflight request \uff08\u9884\u68c0\u8bf7\u6c42\uff09\u7684\u8fd4\u56de\u7ed3\u679c\uff08\u5373 Access-Control-Allow-Methods \u548c Access-Control-Allow-Headers \u63d0\u4f9b\u7684\u4fe1\u606f\uff09 \u53ef\u4ee5\u88ab\u7f13\u5b58\u7684\u6700\u957f\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u503c\u4e3a -1\uff0c\u5219\u8868\u793a\u7981\u7528\u7f13\u5b58\uff0c\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u9700\u8981\u63d0\u4f9b\u9884\u68c0\u8bf7\u6c42\uff0c\u5373\u7528 OPTIONS \u8bf7\u6c42\u8fdb\u884c\u68c0\u6d4b\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"OPTIONS \u8bf7\u6c42\u5373\u9884\u68c0\u8bf7\u6c42\uff0c\u53ef\u7528\u4e8e\u68c0\u6d4b\u670d\u52a1\u5668\u5141\u8bb8\u7684 http \u65b9\u6cd5\u3002\u5f53\u53d1\u8d77\u8de8\u57df\u8bf7\u6c42\u65f6\uff0c\u7531\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u89e6\u53d1\u4e00\u5b9a\u6761\u4ef6\u65f6\u6d4f\u89c8\u5668\u4f1a\u5728\u6b63\u5f0f\u8bf7\u6c42\u4e4b\u524d\u81ea\u52a8\u5148\u53d1\u8d77 OPTIONS \u8bf7\u6c42\uff0c\u5373 CORS \u9884\u68c0\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u82e5\u63a5\u53d7\u8be5\u8de8\u57df\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u624d\u7ee7\u7eed\u53d1\u8d77\u6b63\u5f0f\u8bf7\u6c42\u3002"))}d.isMDXComponent=!0}}]);