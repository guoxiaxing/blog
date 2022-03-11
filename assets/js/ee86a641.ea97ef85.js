"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2475],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),d=m(n),N=r,c=d["".concat(p,".").concat(N)]||d[N]||u[N]||l;return n?a.createElement(c,i(i({ref:e},k),{},{components:n})):a.createElement(c,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9233:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return k},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"SameSite-Cookie",title:"Cookie \u7684 SameSite \u5c5e\u6027",tags:["Cookie","SameSite"]},p=void 0,m={unversionedId:"\u7f51\u7edc/SameSite-Cookie",id:"\u7f51\u7edc/SameSite-Cookie",isDocsHomePage:!1,title:"Cookie \u7684 SameSite \u5c5e\u6027",description:"\u80cc\u666f",source:"@site/docs/\u7f51\u7edc/SameSite-Cookie.md",sourceDirName:"\u7f51\u7edc",slug:"/\u7f51\u7edc/SameSite-Cookie",permalink:"/Blog/docs/\u7f51\u7edc/SameSite-Cookie",tags:[{label:"Cookie",permalink:"/Blog/docs/tags/cookie"},{label:"SameSite",permalink:"/Blog/docs/tags/same-site"}],version:"current",frontMatter:{slug:"SameSite-Cookie",title:"Cookie \u7684 SameSite \u5c5e\u6027",tags:["Cookie","SameSite"]},sidebar:"tutorialSidebar",previous:{title:"HTTP Headers\u5b57\u6bb5\u4ee5\u53ca\u4f5c\u7528",permalink:"/Blog/docs/\u7f51\u7edc/http-headers"},next:{title:"http headers\u4e4borigin\uff0chost\u548creferer\u7684\u533a\u522b",permalink:"/Blog/docs/\u7f51\u7edc/origin-referer-host"}},k=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"SameSite \u5c5e\u6027",id:"samesite-\u5c5e\u6027",children:[{value:"Strict",id:"strict",children:[],level:3},{value:"Lax\uff08\u9ed8\u8ba4\u503c\uff09",id:"lax\u9ed8\u8ba4\u503c",children:[],level:3},{value:"None",id:"none",children:[],level:3}],level:2},{value:"\u8865\u5145\uff08\u540c\u6e90\u548c\u540c\u7ad9\u7684\u533a\u522b\uff09",id:"\u8865\u5145\u540c\u6e90\u548c\u540c\u7ad9\u7684\u533a\u522b",children:[],level:2}],u={toc:k};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u6211\u6700\u8fd1\u770b\u5230\u4e86 CSRF \u653b\u51fb\uff0c\u7136\u540e\u8bf4\u8bbe\u7f6e\u4e86 Cookie \u7684 SameSite \u5c5e\u6027\u53ef\u4ee5\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u9632\u6b62 CSRF \u653b\u51fb\uff0c\u8ba9\u6211\u60f3\u4e86\u89e3\u4e00\u4e0b\u8fd9\u4e2a SameSite \u5c5e\u6027"),(0,l.kt)("h2",{id:"samesite-\u5c5e\u6027"},"SameSite \u5c5e\u6027"),(0,l.kt)("p",null,"Cookie \u7684 SameSite \u5c5e\u6027\u7528\u6765\u9650\u5236\u7b2c\u4e09\u65b9 Cookie\uff0c\u4ece\u800c\u51cf\u5c11\u5b89\u5168\u98ce\u9669\u3002"),(0,l.kt)("p",null,"\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u4e09\u4e2a\u503c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Strict")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"None")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lax\uff08\u9ed8\u8ba4\u503c\uff09"))),(0,l.kt)("h3",{id:"strict"},"Strict"),(0,l.kt)("p",null,"Strict \u6700\u4e3a\u4e25\u683c\uff0cCookies \u53ea\u4f1a\u5728\u7b2c\u4e00\u65b9\u4e0a\u4e0b\u6587\u4e2d\u53d1\u9001\uff0c\u4e0d\u4f1a\u4e0e\u7b2c\u4e09\u65b9\u7f51\u7ad9\u53d1\u8d77\u7684\u8bf7\u6c42\u4e00\u8d77\u53d1\u9001\u3002\u6362\u8a00\u4e4b\uff0c\u53ea\u6709",(0,l.kt)("strong",{parentName:"p"},"\u5f53\u524d\u7f51\u9875\u7684 URL \u4e0e Cookie \u7684 domain \u4e00\u81f4\u65f6"),"\uff0c\u624d\u4f1a\u5e26\u4e0a Cookie\uff08\u4f46\u662f Cookie \u4e5f\u9700\u8981\u6ee1\u8db3\u4e00\u5b9a\u7684\u6761\u4ef6",(0,l.kt)("a",{parentName:"p",href:"https://guoxiaxing.github.io/Blog/docs/%E7%BD%91%E7%BB%9C/http-request-cookie"},"http \u8bf7\u6c42\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u643a\u5e26 cookie"),"\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Set-Cookie: CookieName=CookieValue; SameSite=Strict;\n")),(0,l.kt)("h3",{id:"lax\u9ed8\u8ba4\u503c"},"Lax\uff08\u9ed8\u8ba4\u503c\uff09"),(0,l.kt)("p",null,"Lax \u89c4\u5219\u7a0d\u7a0d\u653e\u5bbd\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e5f\u662f\u4e0d\u53d1\u9001\u7b2c\u4e09\u65b9 Cookie\uff0c\u4f46\u662f\u5bfc\u822a\u5230\u76ee\u6807\u7f51\u5740\u7684 Get \u8bf7\u6c42\u9664\u5916\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Set-Cookie: CookieName=CookieValue; SameSite=Lax;\n")),(0,l.kt)("p",null,"\u5bfc\u822a\u5230\u76ee\u6807\u7f51\u5740\u7684 GET \u8bf7\u6c42\uff0c\u53ea\u5305\u62ec\u4e09\u79cd\u60c5\u51b5\uff1a\u94fe\u63a5\uff0c\u9884\u52a0\u8f7d\u8bf7\u6c42\uff0cGET \u8868\u5355\u3002\u8be6\u89c1\u4e0b\u8868\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ca1\u6709\u8bbe\u7f6e SameSite"),(0,l.kt)("th",{parentName:"tr",align:null},"Lax"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u94fe\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<a href="..."></a>')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9884\u52a0\u8f7d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<link rel="prerender" href="..."/>')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET \u8868\u5355"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<form method="GET" action="...">')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POST \u8868\u5355"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<form method="POST" action="...">')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53d1\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iframe"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<iframe src="..."></iframe>')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53d1\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AJAX"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'$.get("...")')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53d1\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<img src="...">')),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001 Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53d1\u9001")))),(0,l.kt)("p",null,"\u8bbe\u7f6e\u4e86 Strict \u6216 Lax \u4ee5\u540e\uff0c\u57fa\u672c\u5c31\u675c\u7edd\u4e86 CSRF \u653b\u51fb\u3002\u5f53\u7136\uff0c\u524d\u63d0\u662f\u7528\u6237\u6d4f\u89c8\u5668\u652f\u6301 SameSite \u5c5e\u6027\u3002"),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("p",null,"\u7f51\u7ad9\u53ef\u4ee5\u9009\u62e9\u663e\u5f0f\u5173\u95ed SameSite \u5c5e\u6027\uff0c\u5c06\u5176\u8bbe\u4e3a None\u3002\u4e0d\u8fc7\uff0c\u524d\u63d0\u662f\u5fc5\u987b\u540c\u65f6\u8bbe\u7f6e Secure \u5c5e\u6027\uff08Cookie \u53ea\u80fd\u901a\u8fc7 HTTPS \u534f\u8bae\u53d1\u9001\uff09\uff0c\u5426\u5219\u65e0\u6548\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6548\u8bbe\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Set-Cookie: widget_session=abc123; SameSite=None\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u6548\u8bbe\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Set-Cookie: widget_session=abc123; SameSite=None; Secure\n")),(0,l.kt)("h2",{id:"\u8865\u5145\u540c\u6e90\u548c\u540c\u7ad9\u7684\u533a\u522b"},"\u8865\u5145\uff08\u540c\u6e90\u548c\u540c\u7ad9\u7684\u533a\u522b\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u540c\u6e90\uff1a\u534f\u8bae\uff08scheme\uff09+ \u4e3b\u673a\u540d\uff08hostname\uff09+ \u7aef\u53e3\u53f7\uff08port\uff09 \u5b8c\u5168\u4e00\u81f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u7ad9\uff1aeTLD\uff08\u6709\u6548\u9876\u7ea7\u57df\u540d\uff09+1 \uff08\u4e8c\u7ea7\u57df\u540d\uff09\u5b8c\u5168\u4e00\u81f4\u3002")),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://www.example.com:443")," \u4e3a\u4f8b\uff0c\u4e0b\u9762\u7ed9\u51fa\u4e86\u4e00\u7cfb\u5217\u7684\u7f51\u5740\u662f\u5426\u4e0e\u5176\u540c\u6e90\u6216\u540c\u7ad9\u7684\u89e3\u91ca\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5bf9\u6bd4\u7f51\u5740"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u540c\u6e90"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u540c\u7ad9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://www.other.com:443")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u57df\u540d\u4e0d\u4e00\u81f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u4e8c\u7ea7\u57df\u540d\u4e0d\u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://example.com:443")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u57df\u540d\u4e0d\u4e00\u81f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f\uff0c\u5b50\u57df\u540d\u4e0d\u5f71\u54cd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://login.example.com:443")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u57df\u540d\u4e0d\u4e00\u81f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f\uff0c\u5b50\u57df\u540d\u4e0d\u5f71\u54cd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.example.com:443")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u534f\u8bae\u4e0d\u4e00\u81f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f\uff0c\u534f\u8bae\u4e0d\u5f71\u54cd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://www.example.com:80")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u56e0\u4e3a port \u4e0d\u540c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f\uff0c\u7aef\u53e3\u53f7\u4e0d\u5f71\u54cd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://www.example.com:443")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f\uff0c\u5b8c\u5168\u4e00\u81f4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://www.example.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f\uff0c\u9ed8\u8ba4\u7aef\u53e3\u53f7 443")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f"))))))}d.isMDXComponent=!0}}]);