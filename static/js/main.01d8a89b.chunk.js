(this["webpackJsonponline-code"]=this["webpackJsonponline-code"]||[]).push([[0],{117:function(e,n,t){},189:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(18),r=t.n(c),i=t(108),o=t(109),s=(t(117),t(106)),l=t(195),d=t(196),u=t(197),j=t(193),m=t(198),h=t(199),f=t(200),x=t(4);t(70),t(119),t(45),t(71);var p=[];function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=a.find((function(e){return e.path===t}));if((null===c||void 0===c?void 0:c.inject)&&c.name)return c.name;if(["string","number","boolean"].find((function(n){return typeof e===n})))return typeof e;if(null===e)return"null";var r=Object.keys(e);if(Array.isArray(e))return"".concat(b(e[0],n+1,"".concat(t,".0"),a),"[]");var i=[];r.forEach((function(c){var r=b(e[c],n+1,"".concat(t,".").concat(c),a)+";";i.push({key:c,value:r})}));var o=new Array(4*(n+1)).fill(void 0).join(" "),s=new Array(4*n).fill(void 0).join(" "),l="{\n".concat(i.map((function(e){return"".concat(o).concat(e.key,": ").concat(e.value)})).join("\n"),"\n").concat(s,"}");return(null===c||void 0===c?void 0:c.extract)&&c.name?(p.push({key:c.name,value:l}),c.name):l}var v=function(){var e,n,t=Object(a.useState)([{path:".wife",inject:!0,extract:!1,name:"Wife"},{path:".school.city",inject:!0,extract:!1,name:"My"},{path:".school",extract:!0,inject:!1,name:"School"}]),c=Object(o.a)(t,2),r=c[0],v=c[1];return Object(a.useEffect)((function(){e=window.CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,mode:"jsx",theme:"material"}),n=window.CodeMirror.fromTextArea(document.getElementById("output"),{lineNumbers:!0,mode:"jsx",theme:"material"}),e.on("change",(function(t){console.log(e.getValue()),console.log(n.getValue())}))})),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("div",{className:"editor mirror code-mirror",children:Object(x.jsx)("textarea",{id:"code",children:'{\n  "name": "frank",\n  "skill": [\n    "Java",\n    "Javascript"\n  ],\n  "mother": {\n    "name": "tony",\n    "school": {\n      "name": null\n    }\n  },\n  "wife": {\n    "name": "tony"\n  },\n  "school": {\n    "city": "\u90d1\u5dde"\n  }\n}'})}),Object(x.jsx)(s.a,{type:"primary",className:"run",onClick:function(){var t=b(JSON.parse(e.getValue()),0,"",r),a=p.map((function(e){return"interface ".concat(e.key," ").concat(e.value,"\n")})).join("\n");n.setValue("// reference\n".concat(a," \n// your type \ninterface Struct ").concat(t)),p=[]},children:"\u751f\u6210\u7c7b\u578b"}),Object(x.jsx)("div",{className:"editor mirror output-code",children:Object(x.jsx)("textarea",{id:"output"})})]}),Object(x.jsxs)("div",{className:"runner",id:"container",children:[Object(x.jsx)("div",{className:"header",children:Object(x.jsxs)("div",{className:"title",children:[Object(x.jsxs)(l.a,{content:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"inject: \u6ce8\u5165\u5916\u90e8\u7c7b\u578b"}),Object(x.jsx)("div",{children:"extract: \u63d0\u53d6\u5b50\u8def\u5f84\u4f5c\u4e3a\u72ec\u7acb\u7c7b\u578b"})]}),trigger:"hover",children:[Object(x.jsx)("span",{children:"\u81ea\u5b9a\u4e49 PATH"}),Object(x.jsx)(h.a,{style:{marginLeft:10}})]}),Object(x.jsx)(s.a,{onClick:function(){v((function(e){return[].concat(Object(i.a)(e),[{path:".",extract:!1,inject:!1,name:""}])}))},children:"\u6dfb\u52a0"})]})}),Object(x.jsx)(d.a,{className:"row-header",children:[{title:"\u8def\u5f84",dataIndex:"path",key:"path",span:7},{title:"\u6ce8\u5165",dataIndex:"inject",key:"inject",span:4},{title:"\u62bd\u79bb",dataIndex:"extract",key:"extract",span:4},{title:"\u540d\u79f0",dataIndex:"name",key:"name",span:7},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",span:2,style:{paddingLeft:20}}].map((function(e){return Object(x.jsx)(u.a,{span:e.span,style:e.style,children:e.title})}))}),r.map((function(e,n){return Object(x.jsxs)(d.a,{className:"path",children:[Object(x.jsx)(u.a,{className:"path-name",span:7,children:Object(x.jsx)(j.a,{value:e.path})}),Object(x.jsx)(u.a,{className:"column",span:4,children:Object(x.jsx)(m.a,{defaultChecked:e.inject})}),Object(x.jsx)(u.a,{className:"column",span:4,children:Object(x.jsx)(m.a,{defaultChecked:e.extract})}),Object(x.jsx)(u.a,{className:"column",span:7,children:Object(x.jsx)(j.a,{value:e.name})}),Object(x.jsx)(u.a,{className:"column col-action",span:2,children:Object(x.jsx)(f.a,{onClick:function(){return function(e){v((function(n){return n.filter((function(n,t){return e!==t}))}))}(n)},style:{marginLeft:20,cursor:"pointer"}})})]})}))]})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,201)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(x.jsx)(v,{}),document.getElementById("root")),O()}},[[189,1,2]]]);
//# sourceMappingURL=main.01d8a89b.chunk.js.map