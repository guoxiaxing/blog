"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1229],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),k=a,d=f["".concat(s,".").concat(k)]||f[k]||i[k]||u;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=["components"],l={slug:"useEvent",title:"useEvent\u89e3\u51b3React Hooks\u7684\u95ed\u5305\u9677\u9631",tags:["React Hooks"]},s=void 0,c={unversionedId:"\u5b66\u4e60\u63d0\u5347/useEvent",id:"\u5b66\u4e60\u63d0\u5347/useEvent",isDocsHomePage:!1,title:"useEvent\u89e3\u51b3React Hooks\u7684\u95ed\u5305\u9677\u9631",description:"useEvent",source:"@site/docs/\u5b66\u4e60\u63d0\u5347/useEvent.md",sourceDirName:"\u5b66\u4e60\u63d0\u5347",slug:"/\u5b66\u4e60\u63d0\u5347/useEvent",permalink:"/Blog/docs/\u5b66\u4e60\u63d0\u5347/useEvent",tags:[{label:"React Hooks",permalink:"/Blog/docs/tags/react-hooks"}],version:"current",frontMatter:{slug:"useEvent",title:"useEvent\u89e3\u51b3React Hooks\u7684\u95ed\u5305\u9677\u9631",tags:["React Hooks"]},sidebar:"tutorialSidebar",previous:{title:"type\u548cinterface\u7684\u533a\u522b",permalink:"/Blog/docs/\u5b66\u4e60\u63d0\u5347/type-interface-diff"},next:{title:"Chrome\u7981\u6b62\u4e86\u8fd9\u79cd\u8de8\u57df\u7684\u89e3\u51b3\u65b9\u6848\uff01\uff01\uff01",permalink:"/Blog/docs/\u5b66\u4e60\u63d0\u5347/2022-02-15"}},p=[{value:"useEvent",id:"useevent",children:[],level:2},{value:"useEvent \u7684\u5b9e\u73b0",id:"useevent-\u7684\u5b9e\u73b0",children:[],level:2},{value:"\u4e0e\u5f00\u6e90 Hooks \u7684\u5dee\u5f02",id:"\u4e0e\u5f00\u6e90-hooks-\u7684\u5dee\u5f02",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],i={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"useevent"},"useEvent"),(0,u.kt)("p",null,"\u4ed6\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6709 2 \u4e2a\u7279\u6027\uff1a"),(0,u.kt)("p",null,"\uff08\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u7f13\u5b58\u4e4b\u540e\u7684\u51fd\u6570\uff09"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u5728\u7ec4\u4ef6\u591a\u6b21 render \u65f6\u4fdd\u6301\u5f15\u7528\u4e00\u81f4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u51fd\u6570\u5185\u59cb\u7ec8\u80fd\u83b7\u53d6\u5230\u6700\u65b0\u7684 props \u4e0e state"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'function Chat() {\n  const [text, setText] = useState("");\n\n  const onClick = useEvent(() => {\n    sendMessage(text);\n  });\n\n  return <SendButton onClick={onClick} />;\n}\n')),(0,u.kt)("p",null,"\u5728 Chat \u7ec4\u4ef6\u591a\u6b21 render \u65f6\uff0conClick \u59cb\u7ec8\u6307\u5411\u540c\u4e00\u4e2a\u5f15\u7528\u3002"),(0,u.kt)("p",null,"\u5e76\u4e14 onClick \u89e6\u53d1\u65f6\u59cb\u7ec8\u80fd\u83b7\u53d6\u5230 text \u7684\u6700\u65b0\u503c\u3002"),(0,u.kt)("p",null,"\u4e4b\u6240\u4ee5\u53eb useEvent\uff0c\u662f\u56e0\u4e3a React \u56e2\u961f\u8ba4\u4e3a\u8fd9\u4e2a Hook \u7684\u4e3b\u8981\u5e94\u7528\u573a\u666f\u662f\uff1a",(0,u.kt)("strong",{parentName:"p"},"\u300c\u5c01\u88c5\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u300d"),"\u3002"),(0,u.kt)("h2",{id:"useevent-\u7684\u5b9e\u73b0"},"useEvent \u7684\u5b9e\u73b0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"function useEvent(handler) {\n  const handlerRef = useRef(null);\n\n  // DOM\u66f4\u65b0\u4e4b\u540e\uff0c\u89c6\u56fe\u6e32\u67d3\u5b8c\u6210\u540e\u4e4b\u524d\u66f4\u65b0`handlerRef.current`\u6307\u5411\n  useLayoutEffect(() => {\n    handlerRef.current = handler;\n  });\n\n  // \u7528useCallback\u5305\u88f9\uff0c\u4f7f\u5f97render\u65f6\u8fd4\u56de\u7684\u51fd\u6570\u5f15\u7528\u4e00\u81f4\n  return useCallback((...args) => {\n    const fn = handlerRef.current;\n    return fn(...args);\n  }, []);\n}\n")),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u4e00\u4e2a\u6ca1\u6709\u4f9d\u8d56\u9879\u7684 useCallback\uff0c\u4f7f\u5f97\u6bcf\u6b21 render \u65f6\u51fd\u6570\u7684\u5f15\u7528\u4e00\u81f4")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"useCallback((...args) => {\n  const fn = handlerRef.current;\n  return fn(...args);\n}, []);\n")),(0,u.kt)("ol",{start:2},(0,u.kt)("li",{parentName:"ol"},"\u5728\u5408\u9002\u7684\u65f6\u673a\u66f4\u65b0 handlerRef.current\uff0c\u4f7f\u5f97\u5b9e\u9645\u6267\u884c\u7684\u51fd\u6570\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u5f15\u7528")),(0,u.kt)("h2",{id:"\u4e0e\u5f00\u6e90-hooks-\u7684\u5dee\u5f02"},"\u4e0e\u5f00\u6e90 Hooks \u7684\u5dee\u5f02"),(0,u.kt)("p",null,"\u5f88\u591a\u5f00\u6e90 Hooks \u5e93\u5df2\u7ecf\u5b9e\u73b0\u7c7b\u4f3c\u529f\u80fd\uff08\u6bd4\u5982 ahooks \u4e2d\u7684 useMemoizedFn\uff09"),(0,u.kt)("p",null,"useEvent \u4e0e\u8fd9\u4e9b\u5f00\u6e90\u5b9e\u73b0\u7684\u5dee\u5f02\u4e3b\u8981\u4f53\u73b0\u5728\uff1a"),(0,u.kt)("p",null,"useEvent \u5b9a\u4f4d\u4e8e ",(0,u.kt)("strong",{parentName:"p"},"\u300c\u5904\u7406\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u300d")," \u8fd9\u4e00\u5355\u4e00\u573a\u666f\uff0c\u800c useMemoizedFn \u5b9a\u4f4d\u4e8e ",(0,u.kt)("strong",{parentName:"p"},"\u300c\u7f13\u5b58\u5404\u79cd\u51fd\u6570\u300d"),"\u3002"),(0,u.kt)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u65e2\u7136\u529f\u80fd\u7c7b\u4f3c\uff0c\u90a3 useEvent \u4e3a\u4ec0\u4e48\u8981\u9650\u5236\u81ea\u5df1\u7684\u4f7f\u7528\u573a\u666f\u5462\uff1f"),(0,u.kt)("p",null,"\u7b54\u6848\u662f\uff1a\u4e3a\u4e86\u66f4\u7a33\u5b9a\u3002"),(0,u.kt)("p",null,"useEvent \u80fd\u5426\u83b7\u53d6\u5230\u6700\u65b0\u7684 state \u4e0e props \u53d6\u51b3\u4e8e handlerRef.current \u66f4\u65b0\u7684\u65f6\u673a\u3002"),(0,u.kt)("p",null,"\u5728\u4e0a\u9762\u6a21\u62df\u5b9e\u73b0\u4e2d\uff0cuseEvent \u66f4\u65b0 handlerRef.current \u7684\u903b\u8f91\u653e\u5728 useLayoutEffect \u56de\u8c03\u4e2d\u8fdb\u884c\u3002"),(0,u.kt)("p",null,"\u8fd9\u5c31\u4fdd\u8bc1\u4e86 handlerRef.current \u59cb\u7ec8\u5728 ",(0,u.kt)("strong",{parentName:"p"},"\u300c\u4f1a\u5728\u6240\u6709\u7684 DOM \u53d8\u66f4\u4e4b\u540e\uff0c\u89c6\u56fe\u5b8c\u6210\u6e32\u67d3\u300d")," \u4e4b\u524d\u66f4\u65b0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"useLayoutEffect(() => {\n  handlerRef.current = handler;\n});\n")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"useLayoutEffect: \u5176\u51fd\u6570\u7b7e\u540d\u4e0e useEffect \u76f8\u540c\uff0c\u4f46\u5b83\u4f1a\u5728\u6240\u6709\u7684 DOM \u53d8\u66f4\u4e4b\u540e\u540c\u6b65\u8c03\u7528 effect\u3002\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8bfb\u53d6 DOM \u5e03\u5c40\u5e76\u540c\u6b65\u89e6\u53d1\u91cd\u6e32\u67d3\u3002\u5728\u6d4f\u89c8\u5668\u6267\u884c\u7ed8\u5236\u4e4b\u524d\uff0cuseLayoutEffect \u5185\u90e8\u7684\u66f4\u65b0\u8ba1\u5212\u5c06\u88ab\u540c\u6b65\u5237\u65b0\u3002")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"useLayoutEffect \u548c useEffect \u7684\u533a\u522b\uff1auseLayoutEffect \u66f4\u201c\u5feb\u201d\uff01\u8fd9\u4e2a\u201c\u5757\u201d\u4e0d\u662f\u901f\u5ea6\u66f4\u5feb\uff0c\u800c\u662f\u4ed6\u201c\u62a2\u8dd1\u201d\u4e86\u3002useLayoutEffect \u662f\u5728 render \u4e4b\u524d\u540c\u6b65\u6267\u884c\uff0cuseEffect \u5728 render \u4e4b\u540e\u5f02\u6b65\u6267\u884c\uff0c\u8fd9\u91cc\u5c31\u662f\u4fdd\u8bc1 useLayoutEffect \u91cc\u7684\u56de\u8c03\u80af\u5b9a\u6bd4 useEffect \u66f4\u65e9\u524d\u88ab\u8c03\u7528\u3001\u88ab\u6267\u884c\u3002")),(0,u.kt)("p",null,"\u800c ",(0,u.kt)("strong",{parentName:"p"},"\u300c\u4e8b\u4ef6\u56de\u8c03\u300d")," \u89e6\u53d1\u7684\u65f6\u673a\u663e\u7136\u5728 ",(0,u.kt)("strong",{parentName:"p"},"\u300c\u89c6\u56fe\u5b8c\u6210\u6e32\u67d3\u300d")," \u4e4b\u540e\uff0c\u6240\u4ee5\u80fd\u591f\u7a33\u5b9a\u83b7\u53d6\u5230\u6700\u65b0\u7684 state \u4e0e props\u3002"),(0,u.kt)("p",null,"\u518d\u6765\u770b\u770b ahooks \u4e2d\u7684 useMemoizedFn\uff0cfnRef.current \u7684\u66f4\u65b0\u65f6\u673a\u662f\u300cuseMemoizedFn \u6267\u884c\u65f6\u300d\uff08\u5373\u300c\u7ec4\u4ef6 render \u65f6\u300d\uff09\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"function useMemoizedFn<T extends noop>(fn: T) {\n  const fnRef = useRef<T>(fn);\n\n  // \u66f4\u65b0fnRef.current\n  fnRef.current = useMemo(() => fn, [fn]);\n\n  // ...\u7701\u7565\u4ee3\u7801\n}\n")),(0,u.kt)("p",null,"\u5f53 React18 \u542f\u7528\u300c\u5e76\u53d1\u66f4\u65b0\u300d\u540e\uff0c\u7ec4\u4ef6 render \u7684\u6b21\u6570\u3001\u65f6\u673a\u5e76\u4e0d\u786e\u5b9a\u3002"),(0,u.kt)("p",null,"\u6240\u4ee5 useMemoizedFn \u4e2d fnRef.current \u7684\u66f4\u65b0\u65f6\u673a\u4e5f\u662f\u4e0d\u786e\u5b9a\u7684\u3002"),(0,u.kt)("p",null,"\u8fd9\u5c31\u589e\u52a0\u4e86\u5728\u300c\u5e76\u53d1\u66f4\u65b0\u300d\u4e0b\u4f7f\u7528\u65f6\u6f5c\u5728\u7684\u98ce\u9669\u3002"),(0,u.kt)("p",null,"\u53ef\u4ee5\u8bf4\uff0cuseEvent \u901a\u8fc7\u9650\u5236 handlerRef.current \u66f4\u65b0\u65f6\u673a\uff0c\u8fdb\u800c\u9650\u5236\u5e94\u7528\u573a\u666f\uff0c\u6700\u7ec8\u8fbe\u5230\u7a33\u5b9a\u7684\u76ee\u7684\u3002"),(0,u.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,u.kt)("p",null,"useEvent \u5f53\u524d\u8fd8\u5904\u4e8e RFC\uff08Request For Comments\uff09","[1]","\u9636\u6bb5\u3002"))}f.isMDXComponent=!0}}]);