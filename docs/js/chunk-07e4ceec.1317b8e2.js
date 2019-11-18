(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e4ceec"],{5319:function(t,n,e){"use strict";var o=e("d784"),r=e("825a"),a=e("7b0b"),c=e("50c4"),i=e("a691"),s=e("1d80"),u=e("8aa5"),l=e("14c3"),p=Math.max,d=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};o("replace",2,(function(t,n,e){return[function(e,o){var r=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,o):n.call(String(r),e,o)},function(t,a){var s=e(n,t,this,a);if(s.done)return s.value;var f=r(t),m=String(this),g="function"===typeof a;g||(a=String(a));var y=f.global;if(y){var b=f.unicode;f.lastIndex=0}var h=[];while(1){var $=l(f,m);if(null===$)break;if(h.push($),!y)break;var k=String($[0]);""===k&&(f.lastIndex=u(m,c(f.lastIndex),b))}for(var _="",w=0,C=0;C<h.length;C++){$=h[C];for(var O=String($[0]),S=p(d(i($.index),m.length),0),x=[],q=1;q<$.length;q++)x.push(v($[q]));var j=$.groups;if(g){var A=[O].concat(x,S,m);void 0!==j&&A.push(j);var E=String(a.apply(void 0,A))}else E=o(O,m,S,x,j,a);S>=w&&(_+=m.slice(w,S)+E,w=S+O.length)}return _+m.slice(w)}];function o(t,e,o,r,c,i){var s=o+t.length,u=r.length,l=g;return void 0!==c&&(c=a(c),l=m),n.call(i,l,(function(n,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(s);case"<":i=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===r[p-1]?a.charAt(1):r[p-1]+a.charAt(1):n}i=r[l-1]}return void 0===i?"":i}))}}))},cf22:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("h1",[t._v("弹窗")]),e("h2",[t._v("基础用法")]),e("h3",[t._v("Alert")]),e("div",{staticClass:"wrapper"},[e("o-button",{attrs:{type:"plain"},on:{click:function(n){return t.$alert("无类型")}}},[t._v(" 无类型 ")]),e("o-button",{attrs:{type:"default"},on:{click:function(n){return t.$alert({type:"info",msg:"信息"})}}},[t._v(" 信息 ")]),e("o-button",{attrs:{type:"success"},on:{click:function(n){return t.$alert({type:"success",msg:"成功"})}}},[t._v(" 成功 ")]),e("o-button",{attrs:{type:"warning"},on:{click:function(n){return t.$alert({type:"warning",msg:"警告"})}}},[t._v(" 警告 ")]),e("o-button",{attrs:{type:"danger"},on:{click:function(n){return t.$alert({type:"error",msg:"错误"})}}},[t._v(" 错误 ")])],1),e("o-code",{attrs:{text:t.demo1Code,lang:"html"}}),e("h3",[t._v("Confirm")]),e("div",{staticClass:"wrapper"},[e("o-button",{attrs:{type:"plain"},on:{click:function(n){return t.$confirm("无类型")}}},[t._v(" 无类型 ")]),e("o-button",{attrs:{type:"default"},on:{click:function(n){return t.$confirm({type:"info",msg:"信息"})}}},[t._v(" 信息 ")]),e("o-button",{attrs:{type:"success"},on:{click:function(n){return t.$confirm({type:"success",msg:"成功"})}}},[t._v(" 成功 ")]),e("o-button",{attrs:{type:"warning"},on:{click:function(n){return t.$confirm({type:"warning",msg:"警告"})}}},[t._v(" 警告 ")]),e("o-button",{attrs:{type:"danger"},on:{click:function(n){return t.$confirm({type:"error",msg:"错误"})}}},[t._v(" 错误 ")])],1),e("o-code",{attrs:{text:t.demo2Code,lang:"html"}}),e("h2",[t._v("异步操作")]),e("div",{staticClass:"wrapper"},[e("o-button",{attrs:{type:"default"},on:{click:t.demo3}},[t._v(" 异步 ")]),e("o-button",{attrs:{type:"default"},on:{click:t.demo4}},[t._v(" 嵌套 ")]),e("o-button",{attrs:{type:"default"},on:{click:t.demo5}},[t._v(" 异步确认 ")])],1),e("o-code",{attrs:{text:t.demo3Code,lang:"html"}}),e("h2",[t._v("全局方法")]),t._m(0),e("o-code",{attrs:{lang:"typescript"}},[e("pre",[t._v("      $alert(msg: string | options): Promise\n      $confirm(msg: string | options): Promise\n    ")])]),e("h2",[t._v("Options")]),e("o-table",{attrs:{data:t.Options}})],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Opal在 "),e("code",[t._v("Vue")]),t._v(" 的根实例中扩展了调用弹窗组件的方法，你可以通过下列函数来调用弹窗。")])}],a=(e("ac1f"),e("5319"),e("9f12")),c=e("53fe"),i=e("8b83"),s=e("c65a"),u=e("c03e"),l=e("9ab4"),p=e("60a3"),d=function(t){function n(){var t;return Object(a["a"])(this,n),t=Object(i["a"])(this,Object(s["a"])(n).apply(this,arguments)),t.demo1Code='\n    <template>\n      <o-button type="plain" @click="$alert(\'无类型\')">\n        无类型\n      </o-button>\n      <o-button type="default" @click="$alert({ type: \'info\', msg: \'信息\' })">\n        信息\n      </o-button>\n      <o-button type="success" @click="$alert({ type: \'success\', msg: \'成功\' })">\n        成功\n      </o-button>\n      <o-button type="warning" @click="$alert({ type: \'warning\', msg: \'警告\' })">\n        警告\n      </o-button>\n      <o-button type="danger" @click="$alert({ type: \'error\', msg: \'错误\' })">\n        错误\n      </o-button>\n    </template>\n  ',t.demo2Code='\n    <template>\n      <o-button type="plain" @click="$confirm(\'无类型\')">\n        无类型\n      </o-button>\n      <o-button type="default" @click="$confirm({ type: \'info\', msg: \'信息\' })">\n        信息\n      </o-button>\n      <o-button type="success" @click="$confirm({ type: \'success\', msg: \'成功\' })">\n        成功\n      </o-button>\n      <o-button type="warning" @click="$confirm({ type: \'warning\', msg: \'警告\' })">\n        警告\n      </o-button>\n      <o-button type="danger" @click="$confirm({ type: \'error\', msg: \'错误\' })">\n        错误\n      </o-button>\n    </template>\n  ',t.demo3Code="\n    <template>\n      <o-button type=\"default\" @click=\"demo3\">\n        异步\n      </o-button>\n      <o-button type=\"default\" @click=\"demo4\">\n        嵌套\n      </o-button>\n      <o-button type=\"default\" @click=\"demo5\">\n        异步确认\n      </o-button>\n    </template>\n    <code>\n      export default {\n        methods: {\n          demo3 () {\n            let { $alert, $toast } = this\n\n            $alert('确认异步操作')\n              .then(() => {\n                $toast({ type: 'success', msg: 'ok' })\n              })\n          },\n\n          demo4 () {\n            let { $alert } = this\n\n            $alert('确认异步操作')\n              .then(() => {\n                $alert('嵌套操作！')\n              })\n          },\n\n          demo5 () {\n            let { $confirm, $toast } = this\n\n            $confirm('确认异步操作')\n              .then(() => {\n                $toast({ type: 'success', msg: '确认了' })\n              })\n              .catch(() => {\n                $toast({ type: 'error', msg: '取消了' })\n              })\n          },\n        }\n      }\n    </code>\n  ".replace(/code/g,"script"),t.Options={head:[{prop:"name",label:"Name",width:150},{prop:"description",label:"Description",width:200},{prop:"required",label:"Required",width:100},{prop:"type",label:"Type",width:350},{prop:"default",label:"Default",width:100}],body:[{name:"title",description:"标题",required:"false",type:"String",default:"-"},{name:"msg",description:"内容正文",required:"true",type:"String",default:"-"},{name:"type",description:"弹窗类型",required:"false",type:"'info' | 'success' | 'warning' | 'error'",default:"-"},{name:"confirm",description:"确认按钮文本",required:"false",type:"String",default:"'OK'"},{name:"cancel",description:"取消按钮文本，$alert 弹窗没有此按钮，因此不会生效",required:"false",type:"String",default:"'CANCEL'"}]},t}return Object(u["a"])(n,t),Object(c["a"])(n,[{key:"demo3",value:function(){var t=this.$alert,n=this.$toast;t("确认异步操作").then((function(){n({type:"success",msg:"ok"})}))}},{key:"demo4",value:function(){var t=this.$alert;t("确认异步操作").then((function(){t("嵌套操作！")}))}},{key:"demo5",value:function(){var t=this.$confirm,n=this.$toast;t("确认异步操作").then((function(){n({type:"success",msg:"确认了"})})).catch((function(){n({type:"error",msg:"取消了"})}))}}]),n}(p["b"]);d=l["a"]([p["a"]],d);var f=d,m=f,g=e("2877"),v=Object(g["a"])(m,o,r,!1,null,null,null);n["default"]=v.exports}}]);
//# sourceMappingURL=chunk-07e4ceec.1317b8e2.js.map