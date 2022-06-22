"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3121],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2886:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"2022-06-22-1",title:"\u8fdb\u4e00\u6b65\u8ba4\u8bc6 Hooks \uff1a\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff1f",tags:["React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218","\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"]},c=void 0,s={unversionedId:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",id:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",isDocsHomePage:!1,title:"\u8fdb\u4e00\u6b65\u8ba4\u8bc6 Hooks \uff1a\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff1f",description:"React\u7684\u672c\u8d28\uff1a\u4eceModel\u5230View\u7684\u6620\u5c04",source:"@site/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f.md",sourceDirName:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218",slug:"/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-22-1",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-22-1",tags:[{label:"React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218",permalink:"/Blog/docs/tags/react-hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218"},{label:"\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",permalink:"/Blog/docs/tags/\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"}],version:"current",frontMatter:{slug:"2022-06-22-1",title:"\u8fdb\u4e00\u6b65\u8ba4\u8bc6 Hooks \uff1a\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff1f",tags:["React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218","\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"]},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e Hooks\uff081\uff09\uff1a\u5982\u4f55\u4fdd\u5b58\u7ec4\u4ef6\u72b6\u6001\u548c\u4f7f\u7528\u751f\u547d\u5468\u671f\uff1f",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-21-1"},next:{title:"\u5b57\u5178\u548c\u6563\u5217",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/\u7b97\u6cd5&\u6570\u636e\u7ed3\u6784/map-and-hash"}},p=[{value:"\u91cd\u65b0\u601d\u8003\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",id:"\u91cd\u65b0\u601d\u8003\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f",children:[{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",children:[],level:3},{value:"\u4e09\u79cd\u5e38\u7528\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u4e09\u79cd\u5e38\u7528\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"React\u7684\u672c\u8d28\uff1a\u4eceModel\u5230View\u7684\u6620\u5c04"),(0,o.kt)("p",{parentName:"div"},"React \u672c\u8eab\u6b63\u662f\u4e3a\u52a8\u6001\u7684\u72b6\u6001\u53d8\u5316\u800c\u8bbe\u8ba1\u7684\uff0c\u800c\u53ef\u80fd\u5f15\u8d77\u72b6\u6001\u53d8\u5316\u7684\u539f\u56e0\u57fa\u672c\u53ea\u6709\u4e24\u4e2a\uff1a"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u64cd\u4f5c\u4ea7\u751f\u7684\u4e8b\u4ef6\uff0c\u6bd4\u5982\u70b9\u51fb\u4e86\u67d0\u4e2a\u6309\u94ae\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u526f\u4f5c\u7528\u4ea7\u751f\u7684\u4e8b\u4ef6\uff0c\u6bd4\u5982\u53d1\u8d77\u67d0\u4e2a\u8bf7\u6c42\u6b63\u786e\u8fd4\u56de\u4e86\u3002")),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u4e24\u79cd\u4e8b\u4ef6\u672c\u8eab\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u4f46\u6211\u4eec\u5728\u8fd9\u4e24\u79cd\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\uff0c\u4e00\u5b9a\u662f\u56e0\u4e3a\u6539\u53d8\u4e86\u67d0\u4e2a\u72b6\u6001\uff0c\u8fd9\u4e2a\u72b6\u6001\u53ef\u80fd\u662f State \u6216\u8005 Context\uff0c\u4ece\u800c\u5bfc\u81f4\u4e86 UI \u7684\u91cd\u65b0\u6e32\u67d3\u3002"))),(0,o.kt)("p",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4f60\u8981\u601d\u8003\u7684\u65b9\u5f0f\u6c38\u8fdc\u662f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u5f53\u67d0\u4e2a\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6211\u8981\u505a\u4ec0\u4e48"),"\uff0c\u800c\u4e0d\u518d\u662f\u5728 Class \u7ec4\u4ef6\u4e2d\u7684\u67d0\u4e2a\u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e2d\u6211\u8981\u505a\u4ec0\u4e48\u3002"),(0,o.kt)("h2",{id:"\u91cd\u65b0\u601d\u8003\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"},"\u91cd\u65b0\u601d\u8003\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"),(0,o.kt)("h3",{id:"\u6784\u9020\u51fd\u6570"},"\u6784\u9020\u51fd\u6570"),(0,o.kt)("p",null,"\u5728\u7c7b\u7ec4\u4ef6\u4e2d\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u7684\u4e8b\u60c5\u3002\u90a3\u4e48\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u6211\u4eec\u600e\u4e48\u521d\u59cb\u5316\u4e00\u4e9b\u4e1c\u897f\u5462\uff1f"),(0,o.kt)("p",null,"\uff1a\u51fd\u6570\u7ec4\u4ef6\u57fa\u672c\u4e0a\u6ca1\u6709\u7edf\u4e00\u7684\u521d\u59cb\u5316\u9700\u8981\uff0c\u56e0\u4e3a Hooks \u81ea\u5df1\u4f1a\u8d1f\u8d23\u81ea\u5df1\u7684\u521d\u59cb\u5316\u3002\u6bd4\u5982 useState \u8fd9\u4e2a Hook\uff0c\u63a5\u6536\u7684\u53c2\u6570\u5c31\u662f\u5b9a\u4e49\u7684 State \u521d\u59cb\u503c\u3002\u800c\u5728\u8fc7\u53bb\u7684\u7c7b\u7ec4\u4ef6\u4e2d\uff0c\u4f60\u901a\u5e38\u9700\u8981\u5728\u6784\u9020\u51fd\u6570\u4e2d\u76f4\u63a5\u8bbe\u7f6e this.state \uff0c\u4e5f\u5c31\u662f\u8bbe\u7f6e\u67d0\u4e2a\u503c\u6765\u5b8c\u6210\u521d\u59cb\u5316\u3002"),(0,o.kt)("p",null,"\u6784\u9020\u51fd\u6570\u7684\u672c\u8d28\uff0c\u5176\u5b9e\u5c31\u662f\uff1a\u5728\u6240\u4ee5\u5176\u5b83\u4ee3\u7801\u6267\u884c\u4e4b\u524d\u7684\u4e00\u6b21\u6027\u521d\u59cb\u5316\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u800c\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5176\u5b9e\u6211\u4eec\u8981\u5b9e\u73b0\u7684\u5c31\u662f\u4e00\u6b21\u6027\u7684\u4ee3\u7801\u6267\u884c")),(0,o.kt)("p",null,"\u867d\u7136\u6ca1\u6709\u76f4\u63a5\u7684\u673a\u5236\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4f46\u662f\u5229\u7528 useRef \u8fd9\u4e2a Hook\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a useSingleton \u8fd9\u6837\u7684\u4e00\u6b21\u6027\u6267\u884c\u67d0\u6bb5\u4ee3\u7801\u7684\u81ea\u5b9a\u4e49 Hook\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"\uff1f\uff1f\uff1f\u4e0d\u80fd\u4f7f\u7528useEffect\u6765\u5b9e\u73b0\u5417\uff1f"),"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nimport { useRef } from 'react';\n\n// \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49 Hook \u7528\u4e8e\u6267\u884c\u4e00\u6b21\u6027\u4ee3\u7801\nfunction useSingleton(callback) {\n  // \u7528\u4e00\u4e2a called ref \u6807\u8bb0 callback \u662f\u5426\u6267\u884c\u8fc7\n  const called = useRef(false);\n  // \u5982\u679c\u5df2\u7ecf\u6267\u884c\u8fc7\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\n  if (called.current) return;\n  // \u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u76f4\u63a5\u6267\u884c\n  callBack();\n  // \u8bbe\u7f6e\u6807\u8bb0\u4e3a\u5df2\u6267\u884c\u8fc7\n  called.current = true;\n}\n")),(0,o.kt)("h3",{id:"\u4e09\u79cd\u5e38\u7528\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5"},"\u4e09\u79cd\u5e38\u7528\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5"),(0,o.kt)("p",null,"\u5728\u7c7b\u7ec4\u4ef6\u4e2d\uff0ccomponentDidMount\uff0ccomponentWillUnmount\uff0c\u548c componentDidUpdate \u662f\u5728\u5f00\u53d1\u4e2d\u6700\u5e38\u7528\u7684"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528useEffect\u6765\u4ee3\u66ff")),(0,o.kt)("p",null,"useEffect \u63a5\u6536\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4e0d\u53ea\u662f\u4f1a\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\u6267\u884c\uff0c\u800c\u4e14\u662f\u6bcf\u6b21 Effect \u91cd\u65b0\u6267\u884c\u4e4b\u524d\u90fd\u4f1a\u6267\u884c\uff0c\u7528\u4e8e\u6e05\u7406\u4e0a\u4e00\u6b21 Effect \u7684\u6267\u884c\u7ed3\u679c\u3002"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"useEffect \u63a5\u6536\u7684 callback \u662f\u5728\u4f9d\u8d56\u53d1\u751f\u53d8\u5316\u4ee5\u53ca\u7b2c\u4e00\u6b21\u65f6\u6267\u884c\uff0creturn \u7684\u51fd\u6570\u662f\u5728\u4e0b\u4e00\u6b21 callback  \u6267\u884c\u4e4b\u524d\u6267\u884c\uff0c\u6216\u8005\u9500\u6bc1\u65f6\u6267\u884c\u3002\u5f53\u4f9d\u8d56\u9879\u4e3a\u7a7a\u65f6\u53ea\u4f1a\u5728\u6700\u540e\u7ec4\u4ef6\u9500\u6bc1\u65f6\u6267\u884c\u3002"))))}d.isMDXComponent=!0}}]);