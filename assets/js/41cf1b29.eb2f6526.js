"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[769],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,k=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return t?o.createElement(k,a(a({ref:n},i),{},{components:t})):o.createElement(k,a({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<s;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1412:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return i},default:function(){return d}});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],c={slug:"2022-06-22-2",title:"\u81ea\u5b9a\u4e49Hooks",tags:["React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218","\u81ea\u5b9a\u4e49Hooks"]},l=void 0,u={unversionedId:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u81ea\u5b9a\u4e49Hooks",id:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u81ea\u5b9a\u4e49Hooks",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49Hooks",description:"useAsync",source:"@site/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/\u81ea\u5b9a\u4e49Hooks.md",sourceDirName:"\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218",slug:"/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-22-2",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-22-2",tags:[{label:"React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218",permalink:"/Blog/docs/tags/react-hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218"},{label:"\u81ea\u5b9a\u4e49Hooks",permalink:"/Blog/docs/tags/\u81ea\u5b9a\u4e49-hooks"}],version:"current",frontMatter:{slug:"2022-06-22-2",title:"\u81ea\u5b9a\u4e49Hooks",tags:["React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218","\u81ea\u5b9a\u4e49Hooks"]},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u4e00\u6b65\u8ba4\u8bc6 Hooks \uff1a\u5982\u4f55\u6b63\u786e\u7406\u89e3\u51fd\u6570\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff1f",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/React Hooks\u6838\u5fc3\u539f\u7406\u4e0e\u5b9e\u6218/2022-06-22-1"},next:{title:"\u5b57\u5178\u548c\u6563\u5217",permalink:"/Blog/docs/\u8bfb\u4e66\u7b14\u8bb0/\u7b97\u6cd5&\u6570\u636e\u7ed3\u6784/map-and-hash"}},i=[{value:"useAsync",id:"useasync",children:[],level:2},{value:"useScroll",id:"usescroll",children:[],level:2},{value:"\u62c6\u5206\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u62c6\u5206\u51fd\u6570\u5f0f\u7ec4\u4ef6",children:[],level:2}],p={toc:i};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"useasync"},"useAsync"),(0,s.kt)("p",null,"\u53d1\u8d77\u5f02\u6b65\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\u5e76\u663e\u793a\u5728\u754c\u9762\u4e0a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"\n\nimport { useState } from 'react';\n\nconst useAsync = (asyncFunction) => {\n  // \u8bbe\u7f6e\u4e09\u4e2a\u5f02\u6b65\u903b\u8f91\u76f8\u5173\u7684 state\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n  // \u5b9a\u4e49\u4e00\u4e2a callback \u7528\u4e8e\u6267\u884c\u5f02\u6b65\u903b\u8f91\n  const execute = useCallback(() => {\n    // \u8bf7\u6c42\u5f00\u59cb\u65f6\uff0c\u8bbe\u7f6e loading \u4e3a true\uff0c\u6e05\u9664\u5df2\u6709\u6570\u636e\u548c error \u72b6\u6001\n    setLoading(true);\n    setData(null);\n    setError(null);\n    return asyncFunction()\n      .then((response) => {\n        // \u8bf7\u6c42\u6210\u529f\u65f6\uff0c\u5c06\u6570\u636e\u5199\u8fdb state\uff0c\u8bbe\u7f6e loading \u4e3a false\n        setData(response);\n        setLoading(false);\n      })\n      .catch((error) => {\n        // \u8bf7\u6c42\u5931\u8d25\u65f6\uff0c\u8bbe\u7f6e loading \u4e3a false\uff0c\u5e76\u8bbe\u7f6e\u9519\u8bef\u72b6\u6001\n        setError(error);\n        setLoading(false);\n      });\n  }, [asyncFunction]);\n\n  return { execute, loading, data, error };\n};\n")),(0,s.kt)("p",null,"\u5728 Hooks \u4e2d\uff0c\u4f60\u53ef\u4ee5\u7ba1\u7406\u5f53\u524d\u7ec4\u4ef6\u7684 state\uff0c\u4ece\u800c\u5c06\u66f4\u591a\u7684\u903b\u8f91\u5199\u5728\u53ef\u91cd\u7528\u7684 Hooks \u4e2d\u3002\u4f46\u662f\u8981\u77e5\u9053\uff0c\u5728\u666e\u901a\u7684\u5de5\u5177\u51fd\u6570\u4e2d\u662f\u65e0\u6cd5\u76f4\u63a5\u4fee\u6539\u7ec4\u4ef6 state \u7684\uff0c\u90a3\u4e48\u4e5f\u5c31\u65e0\u6cd5\u5728\u6570\u636e\u6539\u53d8\u7684\u65f6\u5019\u89e6\u53d1\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u3002"),(0,s.kt)("h2",{id:"usescroll"},"useScroll"),(0,s.kt)("p",null,"\u6b63\u5982 Hooks \u7684\u5b57\u9762\u610f\u601d\u662f\u201c\u94a9\u5b50\u201d\uff0c\u5b83\u5e26\u6765\u7684\u4e00\u5927\u597d\u5904\u5c31\u662f\uff1a",(0,s.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u8ba9 React \u7684\u7ec4\u4ef6\u7ed1\u5b9a\u5728\u4efb\u4f55\u53ef\u80fd\u7684\u6570\u636e\u6e90\u4e0a\u3002\u8fd9\u6837\u5f53\u6570\u636e\u6e90\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u7ec4\u4ef6\u80fd\u591f\u81ea\u52a8\u5237\u65b0"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'\nimport { useState, useEffect } from \'react\';\n\n// \u83b7\u53d6\u6a2a\u5411\uff0c\u7eb5\u5411\u6eda\u52a8\u6761\u4f4d\u7f6e\nconst getPosition = () => {\n  return {\n    x: document.body.scrollLeft,\n    y: document.body.scrollTop,\n  };\n};\nconst useScroll = () => {\n  // \u5b9a\u4e00\u4e2a position \u8fd9\u4e2a state \u4fdd\u5b58\u6eda\u52a8\u6761\u4f4d\u7f6e\n  const [position, setPosition] = useState(getPosition());\n  useEffect(() => {\n    const handler = () => {\n      setPosition(getPosition(document));\n    };\n    // \u76d1\u542c scroll \u4e8b\u4ef6\uff0c\u66f4\u65b0\u6eda\u52a8\u6761\u4f4d\u7f6e\n    document.addEventListener("scroll", handler);\n    return () => {\n      // \u7ec4\u4ef6\u9500\u6bc1\u65f6\uff0c\u53d6\u6d88\u4e8b\u4ef6\u76d1\u542c\n      document.removeEventListener("scroll", handler);\n    };\n  }, []);\n  return position;\n};\n')),(0,s.kt)("h2",{id:"\u62c6\u5206\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"\u62c6\u5206\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,s.kt)("p",null,"\u5c3d\u91cf\u5c06\u76f8\u5173\u7684\u903b\u8f91\u505a\u6210\u72ec\u7acb\u7684 Hooks\uff0c\u7136\u540e\u5728\u51fd\u6570\u7ec4\u4e2d\u4f7f\u7528\u8fd9\u4e9b Hooks\uff0c\u901a\u8fc7\u53c2\u6570\u4f20\u9012\u548c\u8fd4\u56de\u503c\u8ba9 Hooks \u4e4b\u95f4\u5b8c\u6210\u4ea4\u4e92\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u62c6\u5206\u903b\u8f91\u7684\u76ee\u7684\u4e0d\u4e00\u5b9a\u662f\u4e3a\u4e86\u91cd\u7528\uff0c\u800c\u53ef\u4ee5\u662f\u4ec5\u4ec5\u4e3a\u4e86\u4e1a\u52a1\u903b\u8f91\u7684\u9694\u79bb\u3002"),"\u6240\u4ee5\u5728\u8fd9\u4e2a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u4e0d\u4e00\u5b9a\u8981\u628a Hooks \u653e\u5230\u72ec\u7acb\u7684\u6587\u4ef6\u4e2d\uff0c\u800c\u662f\u53ef\u4ee5\u548c\u51fd\u6570\u7ec4\u4ef6\u5199\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u3002\u8fd9\u4e48\u505a\u7684\u539f\u56e0\u5c31\u5728\u4e8e\uff0c\u8fd9\u4e9b Hooks \u662f\u548c\u5f53\u524d\u51fd\u6570\u7ec4\u4ef6\u7d27\u5bc6\u76f8\u5173\u7684\uff0c\u6240\u4ee5\u5199\u5230\u4e00\u8d77\uff0c\u53cd\u800c\u66f4\u5bb9\u6613\u9605\u8bfb\u548c\u7406\u89e3\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u8981\u771f\u6b63\u628a ",(0,s.kt)("strong",{parentName:"p"},"Hooks \u5c31\u770b\u6210\u666e\u901a\u7684\u51fd\u6570\uff0c\u80fd\u9694\u79bb\u7684\u5c3d\u91cf\u53bb\u505a\u9694\u79bb"),"\uff0c\u4ece\u800c\u8ba9\u4ee3\u7801\u66f4\u52a0\u6a21\u5757\u5316\uff0c\u66f4\u6613\u4e8e\u7406\u89e3\u548c\u7ef4\u62a4\u3002"))}d.isMDXComponent=!0}}]);