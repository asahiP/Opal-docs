(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a41ec"],{"04a3":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("通知")]),n("h2",[t._v("基础用法")]),n("div",{staticClass:"wrapper"},[n("o-button",{attrs:{type:"default"},on:{click:function(e){return t.$toast("信息通知")}}},[t._v(" 信息 ")]),n("o-button",{attrs:{type:"success"},on:{click:function(e){return t.$toast({type:"success",msg:"成功通知"})}}},[t._v(" 成功 ")]),n("o-button",{attrs:{type:"warning"},on:{click:function(e){return t.$toast({type:"warning",msg:"警告通知"})}}},[t._v(" 警告 ")]),n("o-button",{attrs:{type:"danger"},on:{click:function(e){return t.$toast({type:"error",msg:"错误通知"})}}},[t._v(" 错误 ")])],1),n("o-code",{attrs:{text:t.demo1Code,lang:"html"}}),n("h2",[t._v("全局方法")]),t._m(0),n("o-code",{attrs:{lang:"typescript"}},[n("pre",[t._v("      $toast(msg: string | options): void\n    ")])]),n("h2",[t._v("Options")]),n("o-table",{attrs:{data:t.Options}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Opal在 "),n("code",[t._v("Vue")]),t._v(" 的根实例中扩展了调用通知组件的方法，你可以通过下列函数来调用弹窗。")])}],r=n("9f12"),s=n("8b83"),i=n("c65a"),c=n("c03e"),p=n("9ab4"),u=n("60a3"),l=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.demo1Code='\n    <template>\n      <o-button type="default" @click="$toast(\'信息通知\')">\n        信息\n      </o-button>\n      <o-button type="success" @click="$toast({ type: \'success\', msg: \'成功通知\' })">\n        成功\n      </o-button>\n      <o-button type="warning" @click="$toast({ type: \'warning\', msg: \'警告通知\' })">\n        警告\n      </o-button>\n      <o-button type="danger" @click="$toast({ type: \'error\', msg: \'错误通知\' })">\n        错误\n      </o-button>\n    </template>\n  ',t.Options={head:[{prop:"name",label:"Name",width:150},{prop:"description",label:"Description",width:200},{prop:"required",label:"Required",width:100},{prop:"type",label:"Type",width:350},{prop:"default",label:"Default",width:100}],body:[{name:"title",description:"标题",required:"false",type:"String",default:"-"},{name:"msg",description:"内容正文",required:"true",type:"String",default:"-"},{name:"type",description:"通知类型",required:"false",type:"'info' | 'success' | 'warning' | 'error'",default:"-"}]},t}return Object(c["a"])(e,t),e}(u["b"]);l=p["a"]([u["a"]],l);var d=l,b=d,f=n("2877"),y=Object(f["a"])(b,o,a,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d0a41ec.53c7209a.js.map