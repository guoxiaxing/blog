"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[653],{3905:function(e,r,n){n.d(r,{Zo:function(){return i},kt:function(){return u}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},i=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,v=m["".concat(c,".").concat(u)]||m[u]||b[u]||l;return n?t.createElement(v,a(a({ref:r},i),{},{components:n})):t.createElement(v,a({ref:r},i))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8705:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return i},toc:function(){return b},default:function(){return u}});var t=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],s={slug:"rxjs-operators",title:"rxjs \u64cd\u4f5c\u7b26",tags:["Rxjs"]},c=void 0,p={permalink:"/Blog/blog/rxjs-operators",source:"@site/blog/2021-12-20-rxjs-operators.md",title:"rxjs \u64cd\u4f5c\u7b26",description:"\u6761\u4ef6",date:"2021-12-20T00:00:00.000Z",formattedDate:"December 20, 2021",tags:[{label:"Rxjs",permalink:"/Blog/blog/tags/rxjs"}],readingTime:14.845,truncated:!1,authors:[],nextItem:{title:"rxjs \u57fa\u7840\u6982\u5ff5",permalink:"/Blog/blog/rxjs-basic"}},i={authorsImageUrls:[]},b=[{value:"\u6761\u4ef6",id:"\u6761\u4ef6",children:[{value:"every",id:"every",children:[],level:3},{value:"defaultIfEmpty",id:"defaultifempty",children:[],level:3}],level:2},{value:"\u7ec4\u5408",id:"\u7ec4\u5408",children:[{value:"combineLastest",id:"combinelastest",children:[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[],level:4}],level:3},{value:"withLatestFrom",id:"withlatestfrom",children:[{value:"\u6e90 observable \u901f\u7387\u6162",id:"\u6e90-observable-\u901f\u7387\u6162",children:[],level:4},{value:"other \u901f\u7387\u6162",id:"other-\u901f\u7387\u6162",children:[],level:4}],level:3},{value:"zip",id:"zip",children:[],level:3},{value:"forkJoin",id:"forkjoin",children:[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f-1",children:[],level:4},{value:"\u5916\u90e8\u5904\u7406\u9519\u8bef",id:"\u5916\u90e8\u5904\u7406\u9519\u8bef",children:[],level:4},{value:"\u5185\u90e8\u5904\u7406\u9519\u8bef",id:"\u5185\u90e8\u5904\u7406\u9519\u8bef",children:[],level:4}],level:3},{value:"race",id:"race",children:[],level:3},{value:"pairwise()",id:"pairwise",children:[],level:3},{value:"concat()",id:"concat",children:[{value:"\u4f5c\u4e3a\u64cd\u4f5c\u7b26",id:"\u4f5c\u4e3a\u64cd\u4f5c\u7b26",children:[],level:4},{value:"\u4f5c\u4e3a creator",id:"\u4f5c\u4e3a-creator",children:[],level:4}],level:3},{value:"merge()",id:"merge",children:[{value:"\u4f5c\u4e3a operator",id:"\u4f5c\u4e3a-operator",children:[],level:4},{value:"\u4f5c\u4e3a creator",id:"\u4f5c\u4e3a-creator-1",children:[],level:4}],level:3},{value:"concatAll()",id:"concatall",children:[{value:"\u6253\u5e73 observable",id:"\u6253\u5e73-observable",children:[],level:4},{value:"\u4f9d\u6b21\u8ba2\u9605 observable",id:"\u4f9d\u6b21\u8ba2\u9605-observable",children:[],level:4}],level:3},{value:"mergeAll()",id:"mergeall",children:[{value:"\u5e76\u53d1\u63a7\u5236\u7684 mergeAll",id:"\u5e76\u53d1\u63a7\u5236\u7684-mergeall",children:[],level:4}],level:3},{value:"startWith()",id:"startwith",children:[{value:"\u53ef\u4ee5\u521d\u59cb\u5316\u591a\u4e2a\u503c",id:"\u53ef\u4ee5\u521d\u59cb\u5316\u591a\u4e2a\u503c",children:[],level:4}],level:3}],level:2}],m={toc:b};function u(e){var r=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6761\u4ef6"},"\u6761\u4ef6"),(0,l.kt)("h3",{id:"every"},"every"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"every(predicate: function, thisArg: any): Observable\n")),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u7684 every \u65b9\u6cd5\uff0c\u5224\u65ad\u6d41",(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u6210\u65f6"),"\u53d1\u51fa\u7684\u6240\u6709\u503c\u662f\u5426\u6ee1\u8db3\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u7684\u6761\u4ef6\uff0c\u4ece\u800c\u8fd4\u56de true/false\n\u5982\u679c",(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u6210\u65f6"),"\u6240\u6709\u7684\u503c\u90fd\u80fd\u901a\u8fc7\u65ad\u8a00\uff0c\u90a3\u4e48\u53d1\u51fa true\uff0c\u5426\u5219\u53d1\u51fa false \u3002\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u7684 every \u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { every } from "rxjs/operators";\nimport { of } from "rxjs";\n\n// \u53d1\u51fa5\u4e2a\u503c\nconst source = of(1, 2, 3, 4, 5);\nconst example = source.pipe(\n  // \u6bcf\u4e2a\u503c\u90fd\u662f\u5076\u6570\u5417\uff1f\n  every(val => val % 2 === 0)\n);\n// \u8f93\u51fa: false\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"defaultifempty"},"defaultIfEmpty"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"aultIfEmpty(defaultValue: any): Observable\n")),(0,l.kt)("p",null,"\u5982\u679c\u6d41\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u65f6\u6ca1\u6709\u53d1\u51fa\u4efb\u4f55\u503c\uff0c\u5219\u53d1\u51fa defaultIfEmpty \u4e2d\u7684\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { defaultIfEmpty } from "rxjs/operators";\nimport { of } from "rxjs";\n\n// \u5f53\u6e90 observable \u4e3a\u7a7a\u65f6\uff0c\u53d1\u51fa \'Observable.of() Empty!\'\uff0c\u5426\u5219\u53d1\u51fa\u6e90\u7684\u4efb\u610f\u503c\nconst exampleOne = of().pipe(defaultIfEmpty("Observable.of() Empty!"));\n// \u8f93\u51fa: \'Observable.of() Empty!\'\nconst subscribe = exampleOne.subscribe(val => console.log(val));\n')),(0,l.kt)("h2",{id:"\u7ec4\u5408"},"\u7ec4\u5408"),(0,l.kt)("h3",{id:"combinelastest"},"combineLastest"),(0,l.kt)("p",null,"\u662f\u4e00\u4e2a creator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"combineLatest(observables: ...Observable, project: function): Observable\n")),(0,l.kt)("p",null,"\u4f20\u5165\u7684 observables \u90fd\u9700\u8981\u81f3\u5c11\u53d1\u51fa\u4e00\u4e2a\u503c\uff0c\u5b83\u624d\u4f1a\u53d1\u51fa\u503c\uff1b\u7136\u540e\u5c31\u662f\u4efb\u610f\u4e00\u4e2a observable \u53d1\u51fa\u503c\u90fd\u4f1a\u548c\u5176\u4ed6\u7684 observable \u7684\u6700\u65b0\u503c\u7ec4\u5408\u6210\u4e00\u4e2a\u6570\u7ec4\u53d1\u51fa\u3002"),(0,l.kt)("p",null,"\u53d1\u51fa\u7684\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u6bcf\u4e2a\u503c\u65f6\u5f53\u524d\u7684\u6240\u6709 observable \u7684\u6700\u65b0\u503c\uff0c\u5f53\u6700\u540e\u4e00\u4e2a observable complete \u7684\u65f6\u5019\u6574\u4f53\u624d\u4f1a complete"),(0,l.kt)("h4",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5f53\u6709\u591a\u4e2a\u957f\u671f\u6d3b\u52a8\u7684 observables \u4e14\u5b83\u4eec\u4f9d\u9760\u5f7c\u6b64\u6765\u8fdb\u884c\u4e00\u4e9b\u8ba1\u7b97\u6216\u51b3\u5b9a\u65f6\uff0c\u6b64\u64cd\u4f5c\u7b26\u662f\u6700\u9002\u5408\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { timer, combineLatest } from "rxjs";\n\n// timerOne \u57281\u79d2\u65f6\u53d1\u51fa\u7b2c\u4e00\u4e2a\u503c\uff0c\u7136\u540e\u6bcf4\u79d2\u53d1\u9001\u4e00\u6b21\nconst timerOne = timer(1000, 4000);\n// timerTwo \u57282\u79d2\u65f6\u53d1\u51fa\u7b2c\u4e00\u4e2a\u503c\uff0c\u7136\u540e\u6bcf4\u79d2\u53d1\u9001\u4e00\u6b21\nconst timerTwo = timer(2000, 4000);\n// timerThree \u57283\u79d2\u65f6\u53d1\u51fa\u7b2c\u4e00\u4e2a\u503c\uff0c\u7136\u540e\u6bcf4\u79d2\u53d1\u9001\u4e00\u6b21\nconst timerThree = timer(3000, 4000);\n\n// combineLatest \u8fd8\u63a5\u6536\u4e00\u4e2a\u53ef\u9009\u7684 projection \u51fd\u6570\nconst combinedProject = combineLatest(\n  timerOne,\n  timerTwo,\n  timerThree,\n  (one, two, three) => {\n    return `Timer One (Proj) Latest: ${one},\n              Timer Two (Proj) Latest: ${two},\n              Timer Three (Proj) Latest: ${three}`;\n  }\n);\n// \u8f93\u51fa\u503c\n// \u7ec4\u5408\u7684\u7ed3\u679c\u57283s\u4e4b\u540e\u53d1\u51fa\u7b2c\u4e00\u4e2a\u503c\nconst subscribe = combinedProject.subscribe(latestValuesProject =>\n  console.log(latestValuesProject)\n);\n')),(0,l.kt)("h3",{id:"withlatestfrom"},"withLatestFrom"),(0,l.kt)("p",null,"\u662f\u4e00\u4e2a operator\uff0c\u89e3\u51b3\u7684\u95ee\u9898\uff1a\u9632\u6b62\u540c\u6e90\u5e72\u6270"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"withLatestFrom(other: Observable, project: Function): Observable\n")),(0,l.kt)("p",null,"\u8fd8\u63d0\u4f9b\u53e6\u4e00\u4e2a observable \u7684\u6700\u65b0\u503c\u3002\u7531\u6e90 observable \u63a7\u5236\u53d1\u51fa\u503c\u7684\u901f\u7387\uff08\u5f53\u4e24\u4e2a observable \u90fd\u53d1\u51fa\u503c\u540e\uff09\uff0c\u6e90 observable \u6bcf\u6b21\u53d1\u51fa\u503c\u7684\u65f6\u5019\uff0c\u5c06\u6e90 observable \u53d1\u51fa\u7684\u503c\u548c other \u7684\u6700\u65b0\u503c\u5408\u5e76\u4e3a\u4e00\u4e2a\u6570\u7ec4\u53d1\u51fa\n\u4e24\u4e2a observable \u5728\u53d1\u51fa\u503c\u524d\u8981\u786e\u4fdd\u81f3\u5c11\u90fd\u6709 1 \u4e2a\u503c\uff0c\u4e5f\u5c31\u662f\u8bf4\u521d\u59cb\u503c\u9700\u8981\u7b49\u5230\u4e24\u4e2a observable \u90fd\u53d1\u51fa\u503c\u3002"),(0,l.kt)("p",null,"\u53d1\u51fa\u7684\u503c\u65f6\u4e24\u4e2a observable \u7684\u6700\u65b0\u503c\u7ec4\u6210\u7684\u6570\u7ec4"),(0,l.kt)("h4",{id:"\u6e90-observable-\u901f\u7387\u6162"},"\u6e90 observable \u901f\u7387\u6162"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { withLatestFrom, map } from "rxjs/operators";\nimport { interval } from "rxjs";\n\n// \u6bcf5\u79d2\u53d1\u51fa\u503c\nconst source = interval(5000);\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst secondSource = interval(1000);\nconst example = source.pipe(\n  withLatestFrom(secondSource),\n  map(([first, second]) => {\n    return `First Source (5s): ${first} Second Source (1s): ${second}`;\n  })\n);\n/*\n  \u8f93\u51fa:\n  "First Source (5s): 0 Second Source (1s): 4"\n  "First Source (5s): 1 Second Source (1s): 9"\n  "First Source (5s): 2 Second Source (1s): 14"\n  ...\n*/\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h4",{id:"other-\u901f\u7387\u6162"},"other \u901f\u7387\u6162"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { withLatestFrom, map } from "rxjs/operators";\nimport { interval } from "rxjs";\n\n// \u6bcf5\u79d2\u53d1\u51fa\u503c\nconst source = interval(5000);\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst secondSource = interval(1000);\n// withLatestFrom \u7684 observable \u6bd4\u6e90 observable \u6162\nconst example = secondSource.pipe(\n  // \u4e24\u4e2a observable \u5728\u53d1\u51fa\u503c\u524d\u8981\u786e\u4fdd\u81f3\u5c11\u90fd\u67091\u4e2a\u503c (\u9700\u8981\u7b49\u5f855\u79d2)\n  withLatestFrom(source),\n  map(([first, second]) => {\n    return `Source (1s): ${first} Latest From (5s): ${second}`;\n  })\n);\n/*\n  "Source (1s): 4 Latest From (5s): 0"\n  "Source (1s): 5 Latest From (5s): 0"\n  "Source (1s): 6 Latest From (5s): 0"\n  ...\n*/\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"zip"},"zip"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"zip(observables: *): Observable\n")),(0,l.kt)("p",null,"\u5c06\u6240\u6709 observable \u7684\u7b2c i \u4e2a\u5143\u7d20\u7ec4\u6210\u6570\u7ec4\u53d1\u51fa\uff0c\u53d1\u51fa\u7b2c\u4e00\u4e2a\u503c\u7684\u524d\u63d0\u65f6\u6240\u6709 observable \u90fd\u9700\u8981\u53d1\u51fa\u81f3\u5c11\u4e00\u4e2a\u503c\u3002\n\u4efb\u610f\u4e00\u4e2a observable complete\uff0c\u5219 zip \u7ec4\u5408\u5f97\u5230\u7684 observable \u5c31 complete\nzip \u64cd\u4f5c\u7b26\u4f1a\u8ba2\u9605\u6240\u6709\u5185\u90e8 observables\uff0c\u7136\u540e\u7b49\u5f85\u6bcf\u4e2a\u53d1\u51fa\u4e00\u4e2a\u503c\u3002\u4e00\u65e6\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u5c06\u53d1\u51fa\u5177\u6709\u76f8\u5e94\u7d22\u5f15\u7684\u6240\u6709\u503c\u3002\u8fd9\u4f1a\u6301\u7eed\u8fdb\u884c\uff0c\u76f4\u5230\u81f3\u5c11\u4e00\u4e2a\u5185\u90e8 observable \u5b8c\u6210\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0e interval \u6216 timer \u8fdb\u884c\u7ec4\u5408, zip \u53ef\u4ee5\u7528\u6765\u6839\u636e\u53e6\u4e00\u4e2a observable \u8fdb\u884c\u5b9a\u65f6\u8f93\u51fa\uff01")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { take } from "rxjs/operators";\nimport { interval, zip } from "rxjs";\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst source = interval(1000);\n// \u5f53\u4e00\u4e2a observable \u5b8c\u6210\u65f6\uff0c\u4fbf\u4e0d\u4f1a\u518d\u53d1\u51fa\u66f4\u591a\u7684\u503c\u4e86\nconst example = zip(source, source.pipe(take(2)));\n// \u8f93\u51fa: [0,0]...[1,1]\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"forkjoin"},"forkJoin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"forkJoin(...args, selector : function): Observable\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u63a5\u6536\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a observable\uff0cPromise.all \u63a5\u6536\u7684\u662f\u4e00\u4e2a\u6570\u7ec4")),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e Promise.all\uff0c\u5e76\u53d1\u6267\u884c\uff0c\u7ed3\u679c\u662f\u6bcf\u4e2a observable \u53d1\u51fa\u7684\u6700\u65b0\u503c\u7ec4\u5408\u6210\u7684\u6570\u7ec4\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u9700\u8981\u7b49\u6240\u6709\u7684 observable \u90fd\u5b8c\u6210\u4e4b\u540e\uff0c\u5c06\u6bcf\u4e2a observable \u7684\u6700\u65b0\u503c\u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4\u53d1\u51fa"),"\n\u26a0\ufe0f",(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u5185\u90e8 observable \u4e0d\u5b8c\u6210\u7684\u8bdd\uff0cforkJoin \u6c38\u8fdc\u4e0d\u4f1a\u53d1\u51fa\u503c\uff01")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u573a\u666f-1"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5f53\u6709\u4e00\u7ec4 observables\uff0c\u4f46\u4f60\u53ea\u5173\u5fc3\u6bcf\u4e2a observable \u6700\u540e\u53d1\u51fa\u7684\u503c\u65f6\uff0c\u6b64\u64cd\u4f5c\u7b26\u662f\u6700\u9002\u5408\u7684\u3002\u6b64\u64cd\u4f5c\u7b26\u7684\u4e00\u4e2a\u5e38\u89c1\u7528\u4f8b\u662f\u5728\u9875\u9762\u52a0\u8f7d(\u6216\u5176\u4ed6\u4e8b\u4ef6)\u65f6\u4f60\u5e0c\u671b\u53d1\u8d77\u591a\u4e2a\u8bf7\u6c42\uff0c\u5e76\u5728\u6240\u6709\u8bf7\u6c42\u90fd\u54cd\u5e94\u540e\u518d\u91c7\u53d6\u884c\u52a8\u3002\n\u6ce8\u610f\uff0c\u5982\u679c\u4efb\u610f\u4f5c\u7528\u4e8e forkJoin \u7684\u5185\u90e8 observable \u62a5\u9519\u7684\u8bdd\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u5728\u5185\u90e8 observable \u4e0a\u6ca1\u6709\u6b63\u786e catch \u9519\u8bef\uff0c\u4ece\u800c\u5bfc\u81f4\u5b8c\u6210\u7684 observable \u5c06\u4e22\u5931\u5b83\u4eec\u7684\u503c\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5373\u4e00\u4e2a\u5931\u8d25\uff0c\u6574\u4f53\u5931\u8d25")),(0,l.kt)("h4",{id:"\u5916\u90e8\u5904\u7406\u9519\u8bef"},"\u5916\u90e8\u5904\u7406\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { delay, catchError } from "rxjs/operators";\nimport { forkJoin, of, throwError } from "rxjs";\n\n/*\n  \u5f53\u6240\u6709 observables \u5b8c\u6210\u65f6\uff0c\u5c06\u6bcf\u4e2a observable \n  \u7684\u6700\u65b0\u503c\u4f5c\u4e3a\u6570\u7ec4\u53d1\u51fa\n*/\nconst example = forkJoin(\n  // \u7acb\u5373\u53d1\u51fa \'Hello\'\n  of("Hello"),\n  // 1\u79d2\u540e\u53d1\u51fa \'World\'\n  of("World").pipe(delay(1000)),\n  // \u629b\u51fa\u9519\u8bef\n  _throw("This will error")\n).pipe(catchError(error => of(error)));\n// \u8f93\u51fa: \'This will Error\'\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h4",{id:"\u5185\u90e8\u5904\u7406\u9519\u8bef"},"\u5185\u90e8\u5904\u7406\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { delay, catchError } from "rxjs/operators";\nimport { forkJoin, of, throwError } from "rxjs";\n\n/*\n  \u5f53\u6240\u6709 observables \u5b8c\u6210\u65f6\uff0c\u5c06\u6bcf\u4e2a observable \n  \u7684\u6700\u65b0\u503c\u4f5c\u4e3a\u6570\u7ec4\u53d1\u51fa\n*/\nconst example = forkJoin(\n  // \u7acb\u5373\u53d1\u51fa \'Hello\'\n  of("Hello"),\n  // 1\u79d2\u540e\u53d1\u51fa \'World\'\n  of("World").pipe(delay(1000)),\n  // \u629b\u51fa\u9519\u8bef\n  _throw("This will error").pipe(catchError(error => of(error)))\n);\n// \u8f93\u51fa: ["Hello", "World", "This will error"]\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"race"},"race"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"race(...args): Observable\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u63a5\u6536\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a observable\uff0cPromise.race \u63a5\u6536\u7684\u662f\u4e00\u4e2a\u6570\u7ec4")),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e Promise.race\n\u4f7f\u7528\u9996\u5148\u53d1\u51fa\u503c\u7684 observable \u3002\u65e0\u8bba\u4ed6\u7684\u72b6\u6001\u662f\u4ec0\u4e48"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { mapTo } from "rxjs/operators";\nimport { interval } from "rxjs/observable/interval";\nimport { race } from "rxjs/observable/race";\n\n// \u63a5\u6536\u7b2c\u4e00\u4e2a\u53d1\u51fa\u503c\u7684 observable\nconst example = race(\n  // \u6bcf1.5\u79d2\u53d1\u51fa\u503c\n  interval(1500),\n  // \u6bcf1\u79d2\u53d1\u51fa\u503c\n  interval(1000).pipe(mapTo("1s won!")),\n  // \u6bcf2\u79d2\u53d1\u51fa\u503c\n  interval(2000),\n  // \u6bcf2.5\u79d2\u53d1\u51fa\u503c\n  interval(2500)\n);\n// \u8f93\u51fa: "1s won!"..."1s won!"...etc\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { delay, map } from "rxjs/operators";\nimport { of, race } from "rxjs";\n\n// \u629b\u51fa\u9519\u8bef\u5e76\u5ffd\u7565\u5176\u4ed6\u7684 observables \u3002\nconst first = of("first").pipe(\n  delay(100),\n  map(_ => {\n    throw "error";\n  })\n);\nconst second = of("second").pipe(delay(200));\nconst third = of("third").pipe(delay(300));\n// error\nrace(first, second, third).subscribe(\n  val => console.log(val),\n  err => console.log(err)\n);\n')),(0,l.kt)("h3",{id:"pairwise"},"pairwise()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"pairwise(): Observable<Array>\n")),(0,l.kt)("p",null,"\u5c06\u524d\u4e00\u4e2a\u503c\u548c\u5f53\u524d\u503c\u7ec4\u6210\u7684\u6570\u7ec4\u53d1\u51fa\uff0c\u6240\u4ee5\u7b2c\u4e00\u4e2a\u503c\u53d1\u51fa\u7684\u65f6\u5019\u4e0a\u6e38\u7684 observable \u5df2\u7ecf\u53d1\u51fa\u4e86\u4e24\u4e2a\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { pairwise, take } from "rxjs/operators";\nimport { interval } from "rxjs";\n\n// \u8fd4\u56de: [0,1], [1,2], [2,3], [3,4], [4,5]\n// [0, 1] \u5728\u4e24\u79d2\u540e\u53d1\u51fa\uff0c\u540e\u9762\u7684\u503c\u5219\u662f\u6bcf\u9694\u4e00\u79d2\u53d1\u51fa\ninterval(1000)\n  .pipe(pairwise(), take(5))\n  .subscribe(console.log);\n')),(0,l.kt)("h3",{id:"concat"},"concat()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"concat(observable1,observable2,....)\n")),(0,l.kt)("p",null,"\u5c06\u591a\u4e2a observables \u8f6c\u6362\u6210\u5355\u4e2a observable \u3002\n\u628a\u4f20\u5165\u7684\u6bcf\u4e00\u4e2a observable \u4e32\u8054\u8d77\u6765\uff0c\u4f9d\u6b21\u8ba2\u9605\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6309\u7167\u987a\u5e8f\uff0c\u524d\u4e00\u4e2a observable \u5b8c\u6210\u4e86\u518d\u8ba2\u9605\u4e0b\u4e00\u4e2a observable \u5e76\u53d1\u51fa\u503c\u3002\u5f53\u524d\u4e00\u4e2a observable \u6ca1\u6709\u5b8c\u6210\u7684\u65f6\u5019\uff0c\u540e\u9762\u7684 observable \u6c38\u8fdc\u4e0d\u4f1a\u88ab\u8ba2\u9605")),(0,l.kt)("p",null,"\u4e0e concatAll \u7684\u533a\u522b\u662f\uff0cconcatAll \u662f\u4e00\u4e2a observable \u91cc\u9762\u53c8\u5305\u88f9\u4e86\u4e00\u4e2a\u6216\u8005\u591a\u4e2a observable\uff0c\u7136\u540e\u4f9d\u6b21\u8ba2\u9605 observable \u91cc\u9762\u5305\u88f9\u7684 observable\uff0c\u5b83\u4e0d\u63a5\u53d7\u53c2\u6570\uff0c\u76f8\u5f53\u4e8e\uff0c\u53bb\u6389\u4e00\u5c42 observable \u7136\u540e\u5bf9\u91cc\u9762\u7684 observables \u8fdb\u884c concat \u64cd\u4f5c"),(0,l.kt)("h4",{id:"\u4f5c\u4e3a\u64cd\u4f5c\u7b26"},"\u4f5c\u4e3a\u64cd\u4f5c\u7b26"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { concat } from "rxjs/operators";\nimport { of } from "rxjs";\n\n// \u53d1\u51fa 1,2,3\nconst sourceOne = of(1, 2, 3);\n// \u53d1\u51fa 4,5,6\nconst sourceTwo = of(4, 5, 6);\n// \u5148\u53d1\u51fa sourceOne \u7684\u503c\uff0c\u5f53\u5b8c\u6210\u65f6\u8ba2\u9605 sourceTwo\nconst example = sourceOne.pipe(concat(sourceTwo));\n// \u8f93\u51fa: 1,2,3,4,5,6\nconst subscribe = example.subscribe(val =>\n  console.log("Example: Basic concat:", val)\n);\n')),(0,l.kt)("h4",{id:"\u4f5c\u4e3a-creator"},"\u4f5c\u4e3a creator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { of, concat } from "rxjs";\n\n// \u53d1\u51fa 1,2,3\nconst sourceOne = of(1, 2, 3);\n// \u53d1\u51fa 4,5,6\nconst sourceTwo = of(4, 5, 6);\n\n// \u4f5c\u4e3a\u9759\u6001\u65b9\u6cd5\u4f7f\u7528\nconst example = concat(sourceOne, sourceTwo);\n// \u8f93\u51fa: 1,2,3,4,5,6\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"merge"},"merge()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"merge(input: Observable): Observable\n")),(0,l.kt)("p",null,"\u5c06\u591a\u4e2a observables \u8f6c\u6362\u6210\u5355\u4e2a observable \u3002\n\u7528\u6cd5\u548c concat \u7c7b\u4f3c\uff0c\u533a\u522b\u5c31\u662f concat \u662f\u987a\u5e8f\u7684\uff0cmerge \u5219\u662f\u6309\u7167\u5408\u5e76\u7684 observable \u53d1\u51fa\u503c\u7684\u987a\u5e8f\u5c06\u503c\u53d1\u51fa\uff0c\u6240\u6709 observable \u4e00\u8d77\u6267\u884c"),(0,l.kt)("h4",{id:"\u4f5c\u4e3a-operator"},"\u4f5c\u4e3a operator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { merge } from "rxjs/operators";\nimport { interval } from "rxjs";\n\n// \u6bcf2.5\u79d2\u53d1\u51fa\u503c\nconst first = interval(2500);\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst second = interval(1000);\n// \u4f5c\u4e3a\u5b9e\u4f8b\u65b9\u6cd5\u4f7f\u7528\nconst example = first.pipe(merge(second));\n// \u8f93\u51fa: 0,1,0,2....\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h4",{id:"\u4f5c\u4e3a-creator-1"},"\u4f5c\u4e3a creator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { mapTo } from "rxjs/operators";\nimport { interval, merge } from "rxjs";\n\n// \u6bcf2.5\u79d2\u53d1\u51fa\u503c\nconst first = interval(2500);\n// \u6bcf2\u79d2\u53d1\u51fa\u503c\nconst second = interval(2000);\n// \u6bcf1.5\u79d2\u53d1\u51fa\u503c\nconst third = interval(1500);\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst fourth = interval(1000);\n\n// \u4ece\u4e00\u4e2a observable \u4e2d\u53d1\u51fa\u8f93\u51fa\u503c\nconst example = merge(\n  first.pipe(mapTo("FIRST!")),\n  second.pipe(mapTo("SECOND!")),\n  third.pipe(mapTo("THIRD")),\n  fourth.pipe(mapTo("FOURTH"))\n);\n// \u8f93\u51fa: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"concatall"},"concatAll()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"concatAll(): Observable\n")),(0,l.kt)("h4",{id:"\u6253\u5e73-observable"},"\u6253\u5e73 observable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { map, concatAll } from "rxjs/operators";\nimport { of, interval } from "rxjs";\n\n// \u6bcf2\u79d2\u53d1\u51fa\u503c\nconst source = interval(2000);\nconst example = source.pipe(\n  // \u4e3a\u4e86\u6f14\u793a\uff0c\u589e\u52a010\u5e76\u4f5c\u4e3a observable \u8fd4\u56de\n  // source \u6bcf\u6b21\u53d1\u51fa\u503c\u90fd\u4f1a\u88ab\u8f6c\u6362\u4e3a\u4e00\u4e2aobservable(value+10)\u5982\u679c\u6ca1\u6709concatAll\uff0c\u5219subscribe\u6253\u5370\u51fa\u7684\u5219\u662f\u4e00\u4e2aobservable\n  map(val => of(val + 10)),\n  // \u5408\u5e76\u5185\u90e8 observables \u7684\u503c\n  concatAll()\n);\n// \u8f93\u51fa: \'Example with Basic Observable 10\', \'Example with Basic Observable 11\'...\nconst subscribe = example.subscribe(val =>\n  console.log("Example with Basic Observable:", val)\n);\n')),(0,l.kt)("h4",{id:"\u4f9d\u6b21\u8ba2\u9605-observable"},"\u4f9d\u6b21\u8ba2\u9605 observable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { interval, of } from "rxjs";\nimport { take, concatAll } from "rxjs/operators";\n\nconst obs1 = interval(1000).pipe(take(5));\nconst obs2 = interval(500).pipe(take(2));\nconst obs3 = interval(2000).pipe(take(1));\n// \u53d1\u51fa3\u4e2a observables\nconst source = of(obs1, obs2, obs3);\n// \u6309\u987a\u5e8f\u8ba2\u9605\u6bcf\u4e2a\u5185\u90e8 obserable\uff0c\u524d\u4e00\u4e2a\u5b8c\u6210\u4e86\u518d\u8ba2\u9605\u4e0b\u4e00\u4e2a\nconst example = source.pipe(concatAll());\n/*\n  \u8f93\u51fa: 0,1,2,3,4,0,1,0\n  \u600e\u4e48\u8fd0\u884c\u7684...\n  \u8ba2\u9605\u6bcf\u4e2a\u5185\u90e8 observable \u5e76\u53d1\u51fa\u503c\uff0c\u5f53\u4e00\u4e2a\u5b8c\u6210\u4e86\u624d\u8ba2\u9605\u4e0b\u4e00\u4e2a\n  obs1: 0,1,2,3,4 (complete)\n  obs2: 0,1 (complete)\n  obs3: 0 (complete)\n*/\n\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h3",{id:"mergeall"},"mergeAll()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"mergeAll(concurrent: number): Observable\n")),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e concatAll\uff0c\u6253\u5e73\u5916\u5c42\u7684 observable\uff0c\u4f7f\u7528 merge \u7684\u65b9\u5f0f\u5408\u5e76\u5185\u90e8\u7684 observables \u4e3a\u5355\u4e2a observable \u6765\u53d1\u51fa\u503c\n\u6536\u96c6\u5e76\u8ba2\u9605\u6240\u6709\u7684 observables \u3002"),(0,l.kt)("h4",{id:"\u5e76\u53d1\u63a7\u5236\u7684-mergeall"},"\u5e76\u53d1\u63a7\u5236\u7684 mergeAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { take, map, delay, mergeAll } from "rxjs/operators";\nimport { interval } from "rxjs";\n\nconst source = interval(500).pipe(take(5));\n\n/*\n  interval \u6bcf0.5\u79d2\u53d1\u51fa\u4e00\u4e2a\u503c\u3002\u8fd9\u4e2a\u503c\u4f1a\u88ab\u6620\u5c04\u6210\u5ef6\u8fdf1\u79d2\u7684 interval \u3002mergeAll \u64cd\u4f5c\u7b26\u63a5\u6536\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\n  \u4ee5\u51b3\u5b9a\u5728\u540c\u4e00\u65f6\u95f4\u6709\u591a\u5c11\u4e2a\u5185\u90e8 observables \u53ef\u4ee5\u88ab\u8ba2\u9605\u3002\u5176\u4f59\u7684 observables \u4f1a\u5148\u6682\u5b58\u4ee5\u7b49\u5f85\u8ba2\u9605\u3002\n*/\nconst example = source\n  .pipe(\n    map(val => source.pipe(delay(1000), take(3))),\n    mergeAll(2)\n  )\n  .subscribe(val => console.log(val));\n/*\n  \u4e00\u65e6\u64cd\u4f5c\u7b26\u53d1\u51fa\u4e86\u6240\u6709\u503c\uff0c\u5219 subscription \u5b8c\u6210\u3002\n*/\n')),(0,l.kt)("h3",{id:"startwith"},"startWith()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"startWith(an: Values): Observable\n")),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u6d41\uff0c\u7ed9\u6d41\u4e00\u4e2a\u521d\u59cb\u503c\uff0c\u4e5f\u53ef\u4ee5\u7ed9\u591a\u4e2a\u521d\u59cb\u503c\n\u53d1\u51fa\u7ed9\u5b9a\u7684\u7b2c\u4e00\u4e2a\u503c\uff0c\u8be5\u6d41\u7acb\u5373\u53d1\u51fa\u6211\u4eec\u7ed9\u7684\u503c\uff0c\u7c7b\u4f3c\u4e8e BehaviorSubject"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { startWith, scan } from "rxjs/operators";\nimport { of } from "rxjs";\n\n// \u53d1\u51fa (\'World!\', \'Goodbye\', \'World!\')\nconst source = of("World!", "Goodbye", "World!");\n// \u4ee5 \'Hello\' \u5f00\u5934\uff0c\u540e\u9762\u63a5\u5f53\u524d\u5b57\u7b26\u4e32\nconst example = source.pipe(\n  startWith("Hello"),\n  scan((acc, curr) => `${acc} ${curr}`)\n);\n/*\n  \u8f93\u51fa:\n  "Hello"\n  "Hello World!"\n  "Hello World! Goodbye"\n  "Hello World! Goodbye World!"\n*/\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,l.kt)("h4",{id:"\u53ef\u4ee5\u521d\u59cb\u5316\u591a\u4e2a\u503c"},"\u53ef\u4ee5\u521d\u59cb\u5316\u591a\u4e2a\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// RxJS v6+\nimport { startWith } from "rxjs/operators";\nimport { interval } from "rxjs";\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst source = interval(1000);\n// \u4ee5 -3, -2, -1 \u5f00\u59cb\nconst example = source.pipe(startWith(-3, -2, -1));\n// \u8f93\u51fa: -3, -2, -1, 0, 1, 2....\nconst subscribe = example.subscribe(val => console.log(val));\n')))}u.isMDXComponent=!0}}]);