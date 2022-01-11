"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9059],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return s}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=c(t),s=l,m=d["".concat(u,".").concat(s)]||d[s]||p[s]||i;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3590:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},default:function(){return d}});var r=t(7462),l=t(3366),i=(t(7294),t(3905)),a=["components"],o={slug:"hard-link-and-symbolic-link",title:"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5",tags:["Linux\u76f8\u5173"]},u=void 0,c={unversionedId:"Linux/hard-link-and-symbolic-link",id:"Linux/hard-link-and-symbolic-link",isDocsHomePage:!1,title:"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5",description:"Linux \u7684\u94fe\u63a5\u6982\u5ff5",source:"@site/docs/Linux/hard-link-and-symbolic-link.md",sourceDirName:"Linux",slug:"/Linux/hard-link-and-symbolic-link",permalink:"/Blog/docs/Linux/hard-link-and-symbolic-link",tags:[{label:"Linux\u76f8\u5173",permalink:"/Blog/docs/tags/linux\u76f8\u5173"}],version:"current",frontMatter:{slug:"hard-link-and-symbolic-link",title:"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5",tags:["Linux\u76f8\u5173"]},sidebar:"tutorialSidebar",previous:{title:"Shell\u591a\u4e2a\u547d\u4ee4\u95f4\u9694\u7b26\u53f7;\u3001&\u3001&&\u3001| \u548c || \u533a\u522b",permalink:"/Blog/docs/Linux/shell\u5206\u9694\u7b26"},next:{title:"Typescript 3.7 \u5e38\u7528\u65b0\u7279\u6027",permalink:"/Blog/docs/Typescript/typescript-3.7"}},f=[{value:"Linux \u7684\u94fe\u63a5\u6982\u5ff5",id:"linux-\u7684\u94fe\u63a5\u6982\u5ff5",children:[],level:2},{value:"\u786c\u94fe\u63a5",id:"\u786c\u94fe\u63a5",children:[],level:2},{value:"\u7b26\u53f7\u94fe\u63a5",id:"\u7b26\u53f7\u94fe\u63a5",children:[],level:2},{value:"\u5b9e\u9a8c\u4e00\u4e0b",id:"\u5b9e\u9a8c\u4e00\u4e0b",children:[],level:2},{value:"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5\u7684\u533a\u522b",id:"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5\u7684\u533a\u522b",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],p={toc:f};function d(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"linux-\u7684\u94fe\u63a5\u6982\u5ff5"},"Linux \u7684\u94fe\u63a5\u6982\u5ff5"),(0,i.kt)("p",null,"Linux \u94fe\u63a5\u5206\u4e24\u79cd\uff0c\u4e00\u79cd\u88ab\u79f0\u4e3a\u786c\u94fe\u63a5\uff08Hard Link\uff09\uff0c\u53e6\u4e00\u79cd\u88ab\u79f0\u4e3a\u7b26\u53f7\u94fe\u63a5\uff08Symbolic Link\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cln \u547d\u4ee4\u4ea7\u751f\u786c\u94fe\u63a5\u3002"),(0,i.kt)("p",null,"\u901a\u4fd7\u4e00\u70b9\u7406\u89e3\uff0c\u53ef\u4ee5\u628a\u786c\u94fe\u63a5\u5f53\u6210\u6e90\u6587\u4ef6\u7684\u526f\u672c\uff0c\u4ed6\u548c\u6e90\u6587\u4ef6\u4e00\u6837\u7684\u5927\u5c0f\u4f46\u662f\u4e8b\u5b9e\u4e0a\u5374\u4e0d\u5360\u4efb\u4f55\u7a7a\u95f4\u3002\n\u7b26\u53f7\u94fe\u63a5\u53ef\u4ee5\u7406\u89e3\u4e3a\u7c7b\u4f3c windows \u4e00\u6837\u7684\u5feb\u6377\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u786c\u94fe\u63a5"},"\u786c\u94fe\u63a5"),(0,i.kt)("p",null,"\u786c\u8fde\u63a5\u6307\u901a\u8fc7\u7d22\u5f15\u8282\u70b9\u6765\u8fdb\u884c\u8fde\u63a5\u3002\n\u5728 Linux \u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u4fdd\u5b58\u5728\u78c1\u76d8\u5206\u533a\u4e2d\u7684\u6587\u4ef6\u4e0d\u7ba1\u662f\u4ec0\u4e48\u7c7b\u578b\u90fd\u7ed9\u5b83\u5206\u914d\u4e00\u4e2a\u7f16\u53f7\uff0c\u79f0\u4e3a\u7d22\u5f15\u8282\u70b9\u53f7(Inode Index)\u3002\n\u5728 Linux \u4e2d\uff0c\u591a\u4e2a\u6587\u4ef6\u540d\u6307\u5411\u540c\u4e00\u7d22\u5f15\u8282\u70b9\u662f\u5b58\u5728\u7684\u3002\u4e00\u822c\u8fd9\u79cd\u8fde\u63a5\u5c31\u662f\u786c\u8fde\u63a5\u3002\n\u786c\u8fde\u63a5\u7684\u4f5c\u7528\u662f\u5141\u8bb8\u4e00\u4e2a\u6587\u4ef6\u62e5\u6709\u591a\u4e2a\u6709\u6548\u8def\u5f84\u540d\uff0c\u8fd9\u6837\u7528\u6237\u5c31\u53ef\u4ee5\u5efa\u7acb\u786c\u8fde\u63a5\u5230\u91cd\u8981\u6587\u4ef6\uff0c\u4ee5\u9632\u6b62\u201c\u8bef\u5220\u201d\u7684\u529f\u80fd\u3002\u5176\u539f\u56e0\u5982\u4e0a\u6240\u8ff0\uff0c\u56e0\u4e3a\u5bf9\u5e94\u8be5\u76ee\u5f55\u7684\u7d22\u5f15\u8282\u70b9\u6709\u4e00\u4e2a\u4ee5\u4e0a\u7684\u8fde\u63a5\u3002\u53ea\u5220\u9664\u4e00\u4e2a\u8fde\u63a5\u5e76\u4e0d\u5f71\u54cd\u7d22\u5f15\u8282\u70b9\u672c\u8eab\u548c\u5176\u5b83\u7684\u8fde\u63a5\uff0c\u53ea\u6709\u5f53\u6700\u540e\u4e00\u4e2a\u8fde\u63a5\u88ab\u5220\u9664\u540e\uff0c\u6587\u4ef6\u7684\u6570\u636e\u5757\u53ca\u76ee\u5f55\u7684\u8fde\u63a5\u624d\u4f1a\u88ab\u91ca\u653e\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6587\u4ef6\u771f\u6b63\u5220\u9664\u7684\u6761\u4ef6\u662f\u4e0e\u4e4b\u76f8\u5173\u7684\u6240\u6709\u786c\u8fde\u63a5\u6587\u4ef6\u5747\u88ab\u5220\u9664\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ln existfile  newfile # \u521b\u5efa\u786c\u94fe\u63a5\n")),(0,i.kt)("p",null,"\u786c\u94fe\u63a5\u6587\u4ef6\u6709\u4e24\u4e2a\u9650\u5236"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8\u7ed9\u76ee\u5f55\u521b\u5efa\u786c\u94fe\u63a5"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u5141\u8bb8\u5728\u540c\u4e00\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u4e4b\u95f4\u624d\u80fd\u521b\u5efa\u94fe\u63a5")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u786c\u94fe\u63a5\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199\u548c\u5220\u9664\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u7ed3\u679c\u548c\u7b26\u53f7\u94fe\u63a5\u76f8\u540c\u3002\u4f46\u662f\u5982\u679c\u6211\u4eec\u5220\u9664\u786c\u94fe\u63a5\u6587\u4ef6\u7684\u6e90\u6587\u4ef6\uff0c\u786c\u94fe\u63a5\u6587\u4ef6\u4ecd\u5b58\u5728\uff0c\u800c\u4e14\u4fdd\u7559\u4e86\u539f\u6709\u7684\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u7b26\u53f7\u94fe\u63a5"},"\u7b26\u53f7\u94fe\u63a5"),(0,i.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u8fde\u63a5\u79f0\u4e4b\u4e3a\u7b26\u53f7\u8fde\u63a5\uff08Symbolic Link\uff09\uff0c\u4e5f\u53eb\u8f6f\u8fde\u63a5\u3002\u8f6f\u94fe\u63a5\u6587\u4ef6\u6709\u7c7b\u4f3c\u4e8e Windows \u7684\u5feb\u6377\u65b9\u5f0f\u3002\u5b83\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6\u3002\u5728\u7b26\u53f7\u8fde\u63a5\u4e2d\uff0c\u6587\u4ef6\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u4e86\u53e6\u4e00\u4e2a\u6587\u4ef6\u7684\u8def\u5f84\u540d\u3002\n\u53ef\u4ee5\u662f\u4efb\u610f\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u94fe\u63a5\u4e0d\u540c\u6587\u4ef6\u7cfb\u7edf\u7684\u6587\u4ef6\u3002\u751a\u81f3\u53ef\u4ee5\u94fe\u63a5\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u8fd9\u5c31\u4ea7\u751f\u4e00\u822c\u79f0\u4e3a\u201c\u65ad\u88c2\u201d\u7684\u95ee\u9898\uff08\u73b0\u8c61\uff09\uff0c\u8fd8\u53ef\u4ee5\u4e0d\u65ad\u7684\u5faa\u73af\u94fe\u63a5\u81ea\u5df1\u3002\n\u5728\u5bf9\u7b26\u53f7\u94fe\u63a5\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u628a\u8be5\u64cd\u4f5c\u8f6c\u6362\u4e3a\u5bf9\u6e90\u6587\u4ef6\u7684\u64cd\u4f5c\u3002\u4f46\u662f\u5220\u9664\u94fe\u63a5\u6587\u4ef6\u65f6\uff0c\u7cfb\u7edf\u4ec5\u4ec5\u5220\u9664\u7b26\u53f7\u94fe\u63a5\u6587\u4ef6\uff0c\u800c\u4e0d\u5220\u9664\u6e90\u6587\u4ef6\u672c\u8eab\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s source_file  softlink_file # \u521b\u5efa\u7b26\u53f7\u94fe\u63a5\n")),(0,i.kt)("h2",{id:"\u5b9e\u9a8c\u4e00\u4e0b"},"\u5b9e\u9a8c\u4e00\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch f1          #\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u6587\u4ef6f1\n$ ln f1 f2          #\u521b\u5efaf1\u7684\u4e00\u4e2a\u786c\u8fde\u63a5\u6587\u4ef6f2\n$ ln -s f1 f3       #\u521b\u5efaf1\u7684\u4e00\u4e2a\u7b26\u53f7\u8fde\u63a5\u6587\u4ef6f3\n$ ls -li            # -i\u53c2\u6570\u663e\u793a\u6587\u4ef6\u7684inode\u8282\u70b9\u4fe1\u606f\ntotal 0\n7722708 -rw-r--r--  2 oracle oinstall 0 Apr 21 08:11 f1\n7722708 -rw-r--r--  2 oracle oinstall 0 Apr 21 08:11 f2\n7722757 lrwxrwxrwx  1 oracle oinstall 2 Apr 21 08:11 f3 -> f1\n")),(0,i.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7ed3\u679c\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u786c\u8fde\u63a5\u6587\u4ef6 f2 \u4e0e\u539f\u6587\u4ef6 f1 \u7684 inode \u8282\u70b9\u76f8\u540c\uff0c\u5747\u4e3a 7722708\uff0c\u7136\u800c\u7b26\u53f7\u8fde\u63a5\u6587\u4ef6\u7684 inode \u8282\u70b9\u4e0d\u540c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'$ echo "I am f1 file" >>f1\n$ cat f1\nI am f1 file\n$ cat f2\nI am f1 file\n$ cat f3\nI am f1 file\n$ rm -f f1\n$ cat f2\nI am f1 file\ncat f3\ncat: f3: No such file or directory\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u6d4b\u8bd5\u53ef\u4ee5\u770b\u51fa\uff1a\u5f53\u5220\u9664\u539f\u59cb\u6587\u4ef6 f1 \u540e\uff0c\u786c\u8fde\u63a5 f2 \u4e0d\u53d7\u5f71\u54cd\uff0c\u4f46\u662f\u7b26\u53f7\u8fde\u63a5 f1 \u6587\u4ef6\u65e0\u6548"),(0,i.kt)("h2",{id:"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5\u7684\u533a\u522b"},"\u786c\u94fe\u63a5\u548c\u7b26\u53f7\u94fe\u63a5\u7684\u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u786c\u94fe\u63a5\u4ec5\u80fd\u94fe\u63a5\u6587\u4ef6\uff0c\u800c\u7b26\u53f7\u94fe\u63a5\u53ef\u4ee5\u94fe\u63a5\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"\u786c\u94fe\u63a5\u5728\u94fe\u63a5\u5b8c\u6210\u540e\u4ec5\u548c\u6587\u4ef6\u5185\u5bb9\u5173\u8054\uff0c\u548c\u4e4b\u524d\u94fe\u63a5\u7684\u6587\u4ef6\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\u3002\u800c\u7b26\u53f7\u94fe\u63a5\u59cb\u7ec8\u548c\u4e4b\u524d\u94fe\u63a5\u7684\u6587\u4ef6\u5173\u8054\uff0c\u548c\u6587\u4ef6\u5185\u5bb9\u4e0d\u76f4\u63a5\u76f8\u5173\u3002")),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5220\u9664\u7b26\u53f7\u8fde\u63a5 f3,\u5bf9 f1,f2 \u65e0\u5f71\u54cd\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5220\u9664\u786c\u8fde\u63a5 f2\uff0c\u5bf9 f1,f3 \u4e5f\u65e0\u5f71\u54cd\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5220\u9664\u539f\u6587\u4ef6 f1\uff0c\u5bf9\u786c\u8fde\u63a5 f2 \u6ca1\u6709\u5f71\u54cd\uff0c\u5bfc\u81f4\u7b26\u53f7\u8fde\u63a5 f3 \u5931\u6548\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u540c\u65f6\u5220\u9664\u539f\u6587\u4ef6 f1,\u786c\u8fde\u63a5 f2\uff0c\u6574\u4e2a\u6587\u4ef6\u4f1a\u771f\u6b63\u7684\u88ab\u5220\u9664\u3002"))),(0,i.kt)("p",null,"\u7b26\u53f7\u94fe\u63a5\uff08symbolic link\uff09\u5728\u5efa\u7acb\u7684\u65f6\u5019\u5efa\u7acb\u4e86\u4e00\u4e2a\u65b0\u7684 inode\uff0c\u5e76\u8bb0\u5f55\u4e86\u6307\u5411\u6e90\u6587\u4ef6 inode \u7684\u8def\u5f84\u3002\u6240\u4ee5 symbolic \u7684 inode number \u8ddf\u539f\u59cb\u6863\u6848\u7684 inode number \u662f\u4e0d\u4e00\u6837\u7684\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48 symbolic link \u80fd\u591f\u8de8\u8d8a\u4e0d\u540c\u6587\u4ef6\u7cfb\u7edf\u7684\u539f\u56e0\u3002\n\u7b26\u53f7\u94fe\u63a5\u5efa\u7acb\u4e86\u65b0\u7684 inode number\uff0c\u6240\u4ee5\u5b83\u662f\u4e00\u4e2a\u771f\u5b9e\u7684\u6587\u4ef6\u5e76\u5360\u6709\u4e00\u5b9a\u7684\u78c1\u76d8\u7a7a\u95f4\u3002\u53e6\u5916\u5bf9 symbolic link \u7684\u64cd\u4f5c\u9664\u4e86\u5220\u9664\u90fd\u4f1a\u76f4\u63a5\u5bf9\u6e90\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"hard link \u7684 inode number \u8ddf\u6e90\u6587\u4ef6\u7684 inode number \u662f\u4e00\u6837\u7684\u3002\u56e0\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\u6709\u7740\u76f8\u540c\u7684 inode number\uff0c\u6240\u4ee5 hard link \u662f\u4e0d\u53ef\u4ee5\u8de8\u6587\u4ef6\u7cfb\u7edf\u521b\u5efa\u7684\u3002\u4e5f\u53ef\u4ee5\u5c06 hard link \u7406\u89e3\u4e3a\u4e0d\u662f\u4e00\u4e2a\u6587\u4ef6\uff0c\u628a\u5b83\u770b\u6210\u662f\u540c\u4e00\u4e2a inode \u7684\u522b\u540d\uff0c\u5efa\u7acb hard link \u540e\u4ed6\u548c\u6e90\u6587\u4ef6\u4e92\u4e3a\u522b\u540d\uff0c\u5220\u9664\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0cinode \u90fd\u4e0d\u4f1a\u91ca\u653e\u3002\u53ea\u6709\u6307\u5411\u540c\u4e00 inode \u7684\u6587\u4ef6\u540d\u90fd\u5220\u9664\u540e\uff0cinode \u624d\u91ca\u653e\u3002hard link \u5b9e\u9645\u4e0a\u662f\u4e0d\u5360\u7a7a\u95f4\u7684\u3002"))}d.isMDXComponent=!0}}]);