"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3824],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),k=u(n),m=r,d=k["".concat(s,".").concat(m)]||k[m]||p[m]||o;return n?a.createElement(d,l(l({ref:t},i),{},{components:n})):a.createElement(d,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return i},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],c={slug:"hooks-faq",title:"FAQ",tags:["React Hooks"]},s=void 0,u={unversionedId:"\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks/FAQ",id:"\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks/FAQ",isDocsHomePage:!1,title:"FAQ",description:"useState \u76f8\u5173",source:"@site/docs/\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks/FAQ.md",sourceDirName:"\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks",slug:"/\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks/hooks-faq",permalink:"/Blog/docs/\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks/hooks-faq",tags:[{label:"React Hooks",permalink:"/Blog/docs/tags/react-hooks"}],version:"current",frontMatter:{slug:"hooks-faq",title:"FAQ",tags:["React Hooks"]},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7",permalink:"/Blog/docs/\u6846\u67b6&\u5e38\u7528\u5e93/React/super"},next:{title:"Hook \u6982\u89c8",permalink:"/Blog/docs/\u6846\u67b6&\u5e38\u7528\u5e93/React/Reack Hooks/hooks-overview"}},i=[{value:"useState \u76f8\u5173",id:"usestate-\u76f8\u5173",children:[],level:2},{value:"useEffect",id:"useeffect",children:[],level:2},{value:"useContext",id:"usecontext",children:[],level:2},{value:"useReducer",id:"usereducer",children:[],level:2},{value:"useCallback",id:"usecallback",children:[],level:2},{value:"useMemo",id:"usememo",children:[],level:2},{value:"useRef",id:"useref",children:[],level:2},{value:"React \u662f\u5982\u4f55\u5c06 Hook \u548c\u5f53\u524d\u7ec4\u4ef6\u5173\u8054\u8d77\u6765\u7684\uff1f",id:"react-\u662f\u5982\u4f55\u5c06-hook-\u548c\u5f53\u524d\u7ec4\u4ef6\u5173\u8054\u8d77\u6765\u7684",children:[],level:2}],p={toc:i};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usestate-\u76f8\u5173"},"useState \u76f8\u5173"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u6211\u4eec\u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 state \u6765\u66f4\u65b0 state\uff0c\u90a3\u4e48\u7ed9 setState \u4f20\u5165\u4e00\u4e2a update \u7684\u51fd\u6570")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c setState \u66f4\u65b0\u7684 state \u548c\u5f53\u524d\u7684 state \u76f8\u540c\uff0c\u90a3\u4e48 React \u4f1a\u8df3\u8fc7\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u4ee5\u53ca\u5176\u5b50\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u548c effect \u6267\u884c\u3002",(0,o.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cReact \u53ef\u80fd\u4ecd\u9700\u8981\u5728\u8df3\u8fc7\u6e32\u67d3\u524d\u6e32\u67d3\u8be5\u7ec4\u4ef6\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"useState \u7684 setState \u51fd\u6570\uff0c\u4e0d\u4f1a\u8fdb\u884c state \u5408\u5e76\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u65b0\u7684 state \u8986\u76d6\u65e7\u7684 state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"useState \u7684\u521d\u59cb\u503c\u4e5f\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570"))),(0,o.kt)("h2",{id:"useeffect"},"useEffect"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e3b\u4f53\u5185\uff08\u8fd9\u91cc\u6307\u5728 React \u6e32\u67d3\u9636\u6bb5\uff09\u6539\u53d8 DOM\u3001\u6dfb\u52a0\u8ba2\u9605\u3001\u8bbe\u7f6e\u5b9a\u65f6\u5668\u3001\u8bb0\u5f55\u65e5\u5fd7\u4ee5\u53ca\u6267\u884c\u5176\u4ed6\u5305\u542b\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\u90fd\u662f\u4e0d\u88ab\u5141\u8bb8\u7684\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u4ea7\u751f\u83ab\u540d\u5176\u5999\u7684 bug \u5e76\u7834\u574f UI \u7684\u4e00\u81f4\u6027\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"effect \u7684\u6267\u884c\u65f6\u673a\uff1a\u4e0e componentDidMount\u3001componentDidUpdate \u4e0d\u540c\u7684\u662f\uff0c\u4f20\u7ed9 useEffect \u7684\u51fd\u6570\u4f1a\u5728\u6d4f\u89c8\u5668\u5b8c\u6210\u5e03\u5c40\u4e0e\u7ed8\u5236\u4e4b\u540e\uff0c\u5728\u4e00\u4e2a\u5ef6\u8fdf\u4e8b\u4ef6\u4e2d\u88ab\u8c03\u7528\u3002\u4e0d\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u5bf9\u5c4f\u5e55\u7684\u66f4\u65b0")),(0,o.kt)("h2",{id:"usecontext"},"useContext"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = useContext(MyContext);\n")),(0,o.kt)("p",null,"\u63a5\u6536\u4e00\u4e2a context \u5bf9\u8c61\uff08React.createContext \u7684\u8fd4\u56de\u503c\uff09\u5e76\u8fd4\u56de\u8be5 context \u7684\u5f53\u524d\u503c\u3002\u5f53\u524d\u7684 context \u503c\u7531\u4e0a\u5c42\u7ec4\u4ef6\u4e2d\u8ddd\u79bb\u5f53\u524d\u7ec4\u4ef6\u6700\u8fd1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u7684 value prop \u51b3\u5b9a\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5f53\u7ec4\u4ef6\u4e0a\u5c42\u6700\u8fd1\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"<MyContext.Provider>")," \u66f4\u65b0\u65f6\uff0c\u8be5 Hook \u4f1a\u89e6\u53d1\u91cd\u6e32\u67d3\uff0c\u5e76\u4f7f\u7528\u6700\u65b0\u4f20\u9012\u7ed9 MyContext provider \u7684 context value \u503c\u3002\u5373\u4f7f\u7956\u5148\u4f7f\u7528 React.memo \u6216 shouldComponentUpdate\uff0c\u4e5f\u4f1a\u5728\u7ec4\u4ef6\u672c\u8eab\u4f7f\u7528 useContext \u65f6\u91cd\u65b0\u6e32\u67d3\u3002")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"useContext(MyContext) \u53ea\u662f\u8ba9\u4f60\u80fd\u591f\u8bfb\u53d6 context \u7684\u503c\u4ee5\u53ca\u8ba2\u9605 context \u7684\u53d8\u5316\u3002\u4f60\u4ecd\u7136\u9700\u8981\u5728\u4e0a\u5c42\u7ec4\u4ef6\u6811\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u6765\u4e3a\u4e0b\u5c42\u7ec4\u4ef6\u63d0\u4f9b context\u3002"))),(0,o.kt)("h2",{id:"usereducer"},"useReducer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, dispatch] = useReducer(reducer, initialArg, init);\n")),(0,o.kt)("p",null,"\u5b83\u63a5\u6536\u4e00\u4e2a\u5f62\u5982 (state, action) => newState \u7684 reducer\uff0c\u5e76\u8fd4\u56de\u5f53\u524d\u7684 state \u4ee5\u53ca\u4e0e\u5176\u914d\u5957\u7684 dispatch \u65b9\u6cd5\u3002"),(0,o.kt)("h2",{id:"usecallback"},"useCallback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n")),(0,o.kt)("p",null,"useCallback(fn, deps) \u76f8\u5f53\u4e8e useMemo(() => fn, deps)\u3002"),(0,o.kt)("h2",{id:"usememo"},"useMemo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f20\u5165 useMemo \u7684\u51fd\u6570\u4f1a\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c\u3002\u8bf7\u4e0d\u8981\u5728\u8fd9\u4e2a\u51fd\u6570\u5185\u90e8\u6267\u884c\u4e0e\u6e32\u67d3\u65e0\u5173\u7684\u64cd\u4f5c")),(0,o.kt)("h2",{id:"useref"},"useRef"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b83\u7c7b\u4f3c\u4e8e\u7c7b\u7ec4\u4ef6\u4e2d\u7684 this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const refContainer = useRef(initialValue);\n")),(0,o.kt)("p",null,"useRef \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff08\u8fd9\u4e2a\u53ef\u53d8\u4e0d\u662f\u6307 ref \u7684\u5f15\u7528\u4f1a\u5728\u7ec4\u4ef6\u66f4\u65b0\u7684\u8fc7\u7a0b\u4e2d\u6539\u53d8\uff0c\u6307\u7684\u662f\u6211\u4eec\u53ef\u4ee5\u4fee\u6539 ref \u7684 current \u5c5e\u6027\uff09\uff0c\u5176 .current \u5c5e\u6027\u88ab\u521d\u59cb\u5316\u4e3a\u4f20\u5165\u7684\u53c2\u6570\uff08initialValue\uff09\u3002\u8fd4\u56de\u7684 ref \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u6301\u7eed\u5b58\u5728\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u672c\u8d28\u4e0a\uff0cuseRef \u5c31\u50cf\u662f\u53ef\u4ee5\u5728\u5176 .current \u5c5e\u6027\u4e2d\u4fdd\u5b58\u4e00\u4e2a\u53ef\u53d8\u503c\u7684\u201c\u76d2\u5b50\u201d\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u800c useRef() \u548c\u81ea\u5efa\u4e00\u4e2a {current: ...} \u5bf9\u8c61\u7684\u552f\u4e00\u533a\u522b\u662f\uff0cuseRef \u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u8fd4\u56de\u540c\u4e00\u4e2a ref \u5bf9\u8c61\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5f53 ref \u5bf9\u8c61\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\uff0cuseRef \u5e76\u4e0d\u4f1a\u901a\u77e5\u4f60\u3002\u53d8\u66f4 .current \u5c5e\u6027\u4e0d\u4f1a\u5f15\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002")),(0,o.kt)("h2",{id:"react-\u662f\u5982\u4f55\u5c06-hook-\u548c\u5f53\u524d\u7ec4\u4ef6\u5173\u8054\u8d77\u6765\u7684"},"React \u662f\u5982\u4f55\u5c06 Hook \u548c\u5f53\u524d\u7ec4\u4ef6\u5173\u8054\u8d77\u6765\u7684\uff1f"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u7ec4\u4ef6\u5185\u90e8\u90fd\u6709\u4e00\u4e2a\u300c\u8bb0\u5fc6\u5355\u5143\u683c\u300d\u5217\u8868\u3002\u5b83\u4eec\u53ea\u4e0d\u8fc7\u662f\u6211\u4eec\u7528\u6765\u5b58\u50a8\u4e00\u4e9b\u6570\u636e\u7684 JavaScript \u5bf9\u8c61\u3002\u5f53\u4f60\u7528 useState() \u8c03\u7528\u4e00\u4e2a Hook \u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u8bfb\u53d6\u5f53\u524d\u7684\u5355\u5143\u683c\uff08\u6216\u5728\u9996\u6b21\u6e32\u67d3\u65f6\u5c06\u5176\u521d\u59cb\u5316\uff09\uff0c\u7136\u540e\u628a\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u3002\u8fd9\u5c31\u662f\u591a\u4e2a useState() \u8c03\u7528\u4f1a\u5f97\u5230\u5404\u81ea\u72ec\u7acb\u7684\u672c\u5730 state \u7684\u539f\u56e0\u3002"))}k.isMDXComponent=!0}}]);