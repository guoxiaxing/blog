"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7560],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(o),m=r,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||a;return o?n.createElement(d,l(l({ref:t},c),{},{components:o})):n.createElement(d,l({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},8002:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),l=["components"],s={slug:"2022-06-21-1",title:"\u5185\u7f6e Hooks\uff081\uff09\uff1a\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f\uff1f",tags:["React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218","\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f"]},i=void 0,p={unversionedId:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f",id:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f",isDocsHomePage:!1,title:"\u5185\u7f6e Hooks\uff081\uff09\uff1a\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f\uff1f",description:"useState\uff1a\u8ba9\u51fd\u6570\u7ec4\u4ef6\u5177\u6709\u7ef4\u6301\u72b6\u6001\u7684\u80fd\u529b",source:"@site/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f.md",sourceDirName:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218",slug:"/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-21-1",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-21-1",tags:[{label:"React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218",permalink:"/Blog/docs/tags/react-hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218"},{label:"\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f",permalink:"/Blog/docs/tags/\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f"}],version:"current",frontMatter:{slug:"2022-06-21-1",title:"\u5185\u7f6e Hooks\uff081\uff09\uff1a\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f\uff1f",tags:["React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218","\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f"]},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e Hooks\uff082\uff09\uff1a\u4e3a\u4ec0\u4e48\u8981\u907f\u514d\u91cd\u590d\u5b9a\u4e49\u56de\u8c03\u51fd\u6570\uff1f",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-21-2"},next:{title:"\u8fdb\u4e00\u6b65\u8ba4\u8bc6 Hooks \uff1a\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff1f",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-22-1"}},c=[{value:"useState\uff1a\u8ba9\u51fd\u6570\u7ec4\u4ef6\u5177\u6709\u7ef4\u6301\u72b6\u6001\u7684\u80fd\u529b",id:"usestate\u8ba9\u51fd\u6570\u7ec4\u4ef6\u5177\u6709\u7ef4\u6301\u72b6\u6001\u7684\u80fd\u529b",children:[{value:"\u4ec0\u4e48\u6837\u7684\u503c\u5e94\u8be5\u4fdd\u5b58\u4e3a state",id:"\u4ec0\u4e48\u6837\u7684\u503c\u5e94\u8be5\u4fdd\u5b58\u4e3a-state",children:[],level:3}],level:2},{value:"useEffect\uff1a\u6267\u884c\u526f\u4f5c\u7528",id:"useeffect\u6267\u884c\u526f\u4f5c\u7528",children:[],level:2},{value:"\u7406\u89e3 Hooks \u7684\u4f9d\u8d56",id:"\u7406\u89e3-hooks-\u7684\u4f9d\u8d56",children:[],level:2},{value:"\u638c\u63e1 Hooks \u7684\u4f7f\u7528\u89c4\u5219",id:"\u638c\u63e1-hooks-\u7684\u4f7f\u7528\u89c4\u5219",children:[{value:"Hooks \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4f7f\u7528",id:"hooks-\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4f7f\u7528",children:[],level:3},{value:"Hooks \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u5176\u5b83 Hooks \u4e2d\u4f7f\u7528",id:"hooks-\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u5176\u5b83-hooks-\u4e2d\u4f7f\u7528",children:[],level:3}],level:2}],u={toc:c};function k(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usestate\u8ba9\u51fd\u6570\u7ec4\u4ef6\u5177\u6709\u7ef4\u6301\u72b6\u6001\u7684\u80fd\u529b"},"useState\uff1a\u8ba9\u51fd\u6570\u7ec4\u4ef6\u5177\u6709\u7ef4\u6301\u72b6\u6001\u7684\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e00\u4e2a\u7ec4\u4ef6\u7684\u591a\u6b21\u6e32\u67d3\u671f\u95f4 useState \u521b\u5efa\u7684 state \u662f\u5171\u4eab\u7684"),(0,a.kt)("li",{parentName:"ul"},"setState \u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3")),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u6837\u7684\u503c\u5e94\u8be5\u4fdd\u5b58\u4e3a-state"},"\u4ec0\u4e48\u6837\u7684\u503c\u5e94\u8be5\u4fdd\u5b58\u4e3a state"),(0,a.kt)("p",null,"\u6211\u4eec\u8981\u9075\u5faa\u7684\u4e00\u4e2a\u539f\u5219\u5c31\u662f\uff1a",(0,a.kt)("strong",{parentName:"p"},"state \u4e2d\u6c38\u8fdc\u4e0d\u8981\u4fdd\u5b58\u53ef\u4ee5\u901a\u8fc7\u8ba1\u7b97\u5f97\u5230\u7684\u503c\u3002")),(0,a.kt)("p",null,"\u503c\u53d1\u751f\u6539\u53d8\u7684\u65f6\u5019\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u5c31\u9700\u8981\u4f7f\u7528 state \u5b58\u50a8\u8fd9\u4e2a\u503c\u4e86"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece props \u4f20\u9012\u8fc7\u6765\u7684\u503c\u3002\u6709\u65f6\u5019 props \u4f20\u9012\u8fc7\u6765\u7684\u503c\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\uff0c\u800c\u662f\u8981\u901a\u8fc7\u4e00\u5b9a\u7684\u8ba1\u7b97\u540e\u518d\u5728 UI \u4e0a\u5c55\u793a\uff0c\u6bd4\u5982\u8bf4\u6392\u5e8f\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece URL \u4e2d\u8bfb\u5230\u7684\u503c\u3002\u6bd4\u5982\u6709\u65f6\u9700\u8981\u8bfb\u53d6 URL \u4e2d\u7684\u53c2\u6570\uff0c\u628a\u5b83\u4f5c\u4e3a\u7ec4\u4ef6\u7684\u4e00\u90e8\u5206\u72b6\u6001\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5728\u6bcf\u6b21\u9700\u8981\u7528\u7684\u65f6\u5019\u4ece URL \u4e2d\u8bfb\u53d6\uff0c\u800c\u4e0d\u662f\u8bfb\u51fa\u6765\u76f4\u63a5\u653e\u5230 state \u91cc\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece cookie\u3001localStorage \u4e2d\u8bfb\u53d6\u7684\u503c\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u4e5f\u662f\u6bcf\u6b21\u8981\u7528\u7684\u65f6\u5019\u76f4\u63a5\u53bb\u8bfb\u53d6\uff0c\u800c\u4e0d\u662f\u8bfb\u51fa\u6765\u540e\u653e\u5230 state \u91cc\u3002"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728\u5c06 Angular \u7ec4\u4ef6\u8fc1\u79fb\u5230 React \u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u822c\u7684\u539f\u5219\u5c31\u662f\uff1a"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u6a21\u7248\u6e32\u67d3\u7684\u5c5e\u6027\u9700\u8981\u4f5c\u4e3a state"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7684\u5c5e\u6027\u4e00\u822c\u90fd\u662f\u4f7f\u7528 useRef\uff08\u5176\u5b9e\u5c31\u662f\u76f8\u5f53\u4e8e\u7c7b\u4e2d\u7684 this\uff09")))),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0cstate \u867d\u7136\u4fbf\u4e8e\u7ef4\u62a4\u72b6\u6001\uff0c\u4f46\u4e5f\u6709\u81ea\u5df1\u7684\u5f0a\u7aef\u3002",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u65e6\u7ec4\u4ef6\u6709\u81ea\u5df1\u72b6\u6001\uff0c\u610f\u5473\u7740\u7ec4\u4ef6\u5982\u679c\u91cd\u65b0\u521b\u5efa\uff0c\u5c31\u9700\u8981\u6709\u6062\u590d\u72b6\u6001\u7684\u8fc7\u7a0b\uff0c\u8fd9\u901a\u5e38\u4f1a\u8ba9\u7ec4\u4ef6\u53d8\u5f97\u66f4\u590d\u6742\u3002")),(0,a.kt)("p",null,"\u6bd4\u5982\u4e00\u4e2a\u7ec4\u4ef6\u60f3\u5728\u670d\u52a1\u5668\u7aef\u8bf7\u6c42\u83b7\u53d6\u4e00\u4e2a\u7528\u6237\u5217\u8868\u5e76\u663e\u793a\uff0c\u5982\u679c\u628a\u8bfb\u53d6\u5230\u7684\u6570\u636e\u653e\u5230\u672c\u5730\u7684 state \u91cc\uff0c\u90a3\u4e48\u6bcf\u4e2a\u7528\u5230\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u5730\u65b9\uff0c\u5c31\u90fd\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u4e00\u904d\u3002"),(0,a.kt)("p",null,"\u800c\u5982\u679c\u901a\u8fc7\u4e00\u4e9b\u72b6\u6001\u7ba1\u7406\u6846\u67b6\uff0c\u90a3\u4e48\u7ec4\u4ef6\u672c\u8eab\u5c31\u53ef\u4ee5\u662f\u65e0\u72b6\u6001\u7684\u3002\u65e0\u72b6\u6001\u7ec4\u4ef6\u53ef\u4ee5\u6210\u4e3a\u66f4\u7eaf\u7cb9\u7684\u8868\u73b0\u5c42\uff0c\u6ca1\u6709\u592a\u591a\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u4ece\u800c\u66f4\u6613\u4e8e\u4f7f\u7528\u3001\u6d4b\u8bd5\u548c\u7ef4\u62a4\u3002"),(0,a.kt)("h2",{id:"useeffect\u6267\u884c\u526f\u4f5c\u7528"},"useEffect\uff1a\u6267\u884c\u526f\u4f5c\u7528"),(0,a.kt)("p",null,"\u4ec0\u4e48\u662f\u526f\u4f5c\u7528\u5462\uff1f\u901a\u5e38\u6765\u8bf4\uff0c\u526f\u4f5c\u7528\u662f\u6307",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u6bb5\u548c\u5f53\u524d\u6267\u884c\u7ed3\u679c\u65e0\u5173\u7684\u4ee3\u7801\u3002"),"\u6bd4\u5982\u8bf4\u8981\u4fee\u6539\u51fd\u6570\u5916\u90e8\u7684\u67d0\u4e2a\u53d8\u91cf\uff0c\u8981\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42\uff0c\u7b49\u7b49\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u5f53\u6b21\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0cuseEffect \u4e2d\u4ee3\u7801\u7684\u6267\u884c\u662f\u4e0d\u5f71\u54cd\u6e32\u67d3\u51fa\u6765\u7684 UI \u7684\u3002?????"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"useEffect \u662f\u6bcf\u6b21\u7ec4\u4ef6 render \u5b8c\u540e\u5224\u65ad\u4f9d\u8d56\u5e76\u6267\u884c"),"\u5c31\u53ef\u4ee5\u4e86\uff08\u6d4f\u89c8\u5668\u6e32\u67d3\u5b8c\u6bd5\u4e4b\u540e\u5f02\u6b65\u6267\u884c\uff09"),(0,a.kt)("p",null,"ComponentDidMount/ComponentDidUpdate \u662f\u5728 DOM \u66f4\u65b0\u5b8c\u6bd5\u9875\u9762\u6e32\u67d3\u4e4b\u524d\u540c\u6b65\u6267\u884c"),(0,a.kt)("h2",{id:"\u7406\u89e3-hooks-\u7684\u4f9d\u8d56"},"\u7406\u89e3 Hooks \u7684\u4f9d\u8d56"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hooks \u63d0\u4f9b\u4e86\u8ba9\u4f60\u76d1\u542c\u67d0\u4e2a\u6570\u636e\u53d8\u5316\u7684\u80fd\u529b\u3002")),(0,a.kt)("p",null,"\u90a3\u4e48\u5728\u5b9a\u4e49\u4f9d\u8d56\u9879\u65f6\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e09\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u9879\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u4e00\u5b9a\u662f\u4f1a\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u7528\u5230\u7684\uff0c\u5426\u5219\u58f0\u660e\u4f9d\u8d56\u9879\u5176\u5b9e\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u9879\u4e00\u822c\u662f\u4e00\u4e2a\u5e38\u91cf\u6570\u7ec4\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u53d8\u91cf\u3002\u56e0\u4e3a\u4e00\u822c\u5728\u521b\u5efa callback \u7684\u65f6\u5019\uff0c\u4f60\u5176\u5b9e\u975e\u5e38\u6e05\u695a\u5176\u4e2d\u8981\u7528\u5230\u54ea\u4e9b\u4f9d\u8d56\u9879\u4e86\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"React \u4f1a\u4f7f\u7528\u6d45\u6bd4\u8f83\u6765\u5bf9\u6bd4\u4f9d\u8d56\u9879\u662f\u5426\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u6240\u4ee5\u8981\u7279\u522b\u6ce8\u610f\u6570\u7ec4\u6216\u8005\u5bf9\u8c61\u7c7b\u578b\u3002\u5982\u679c\u4f60\u662f\u6bcf\u6b21\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u5373\u4f7f\u548c\u4e4b\u524d\u7684\u503c\u662f\u7b49\u4ef7\u7684\uff0c\u4e5f\u4f1a\u88ab\u8ba4\u4e3a\u662f\u4f9d\u8d56\u9879\u53d1\u751f\u4e86\u53d8\u5316\u3002\u8fd9\u662f\u4e00\u4e2a\u521a\u5f00\u59cb\u4f7f\u7528 Hooks \u65f6\u5f88\u5bb9\u6613\u5bfc\u81f4 Bug \u7684\u5730\u65b9\u3002"))),(0,a.kt)("h2",{id:"\u638c\u63e1-hooks-\u7684\u4f7f\u7528\u89c4\u5219"},"\u638c\u63e1 Hooks \u7684\u4f7f\u7528\u89c4\u5219"),(0,a.kt)("p",null,"\u56e0\u800c Hooks \u7684\u4f7f\u7528\u89c4\u5219\u5305\u62ec\u4ee5\u4e0b\u4e24\u4e2a\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4f7f\u7528"),"\uff1b",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u5176\u4ed6 Hooks \u4e2d\u4f7f\u7528\u3002")),(0,a.kt)("h3",{id:"hooks-\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4f7f\u7528"},"Hooks \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4f7f\u7528"),(0,a.kt)("p",null,"\u6240\u8c13\u9876\u5c42\u4f5c\u7528\u57df\uff0c\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},"Hooks \u4e0d\u80fd\u5728\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5d4c\u5957\u51fd\u6570\u5185\u3001return \u8bed\u53e5\u7684\u540e\u9762\u6267\u884c\uff0c\u800c\u5fc5\u987b\u662f\u5728\u9876\u5c42"),"\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u5728\u591a\u6b21\u6e32\u67d3\u4e2d hooks \u7684\u8c03\u7528\u987a\u5e8f\u662f\u4e00\u81f4\u7684\u3002"),(0,a.kt)("p",null,"\u539f\u56e0\u662f\u5728 React \u7684\u5185\u90e8\uff0chooks \u7684\u987a\u5e8f\u662f\u901a\u8fc7\u4e00\u4e2a\u94fe\u8868\u6765\u7ef4\u62a4\u7684\uff0c\u6bcf\u6267\u884c\u5b8c\u4e00\u4e2a hook\uff0c\u6307\u9488\u90fd\u4f1a\u5411\u4e0b\u79fb\u52a8\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 Hooks \u7684\u8fd9\u4e2a\u89c4\u5219\u53ef\u4ee5\u603b\u7ed3\u4e3a\u4e24\u70b9\uff1a"),(0,a.kt)("p",null,"\u7b2c\u4e00\uff0c\u6240\u6709 Hook \u5fc5\u987b\u8981\u88ab\u6267\u884c\u5230\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\uff0c\u5fc5\u987b\u6309\u987a\u5e8f\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"hooks-\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u5176\u5b83-hooks-\u4e2d\u4f7f\u7528"},"Hooks \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u5176\u5b83 Hooks \u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4e00\u5b9a\u8981\u5728 Class \u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u90a3\u5e94\u8be5\u5982\u4f55\u505a\u5462\uff1f",(0,a.kt)("strong",{parentName:"p"},"\u5176\u5b9e\u6709\u4e00\u4e2a\u901a\u7528\u7684\u673a\u5236\uff0c\u90a3\u5c31\u662f\u5229\u7528\u9ad8\u9636\u7ec4\u4ef6\u7684\u6a21\u5f0f\uff0c\u5c06 Hooks \u5c01\u88c5\u6210\u9ad8\u9636\u7ec4\u4ef6\uff0c\u4ece\u800c\u8ba9\u7c7b\u7ec4\u4ef6\u4f7f\u7528\u3002")))}k.isMDXComponent=!0}}]);