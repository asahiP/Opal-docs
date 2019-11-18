(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10e269b7"],{29072:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("h1",[e._v("选择器")]),a("h2",[e._v("基础用法")]),a("div",{staticClass:"wrapper"},[a("o-select",{attrs:{datalist:e.datalist}})],1),a("o-code",{attrs:{text:e.demo1Code,lang:"html"}}),a("h2",[e._v("含有禁用选项")]),a("div",{staticClass:"wrapper"},[a("o-select",{attrs:{datalist:e.hasDisabled}})],1),a("o-code",{attrs:{text:e.demo2Code,lang:"html"}}),a("h2",[e._v("禁用状态")]),a("div",{staticClass:"wrapper"},[a("o-select",{attrs:{datalist:e.datalist,disabled:""}})],1),a("o-code",{attrs:{text:e.demo3Code,lang:"html"}}),a("h2",[e._v("远程搜索")]),a("div",{staticClass:"wrapper"},[a("o-select",{attrs:{datalist:e.fetchData}})],1),a("o-code",{attrs:{text:e.demo4Code,lang:"html"}}),a("h2",[e._v("Props")]),a("o-table",{attrs:{data:e.Props}}),a("o-tips",{attrs:{warning:""}},[a("p",[e._v(" Opal没有对该组件的"),a("code",[e._v("远程搜索")]),e._v("进行防抖处理，你需要自行判断是否进行防抖处理 ")])])],1)},n=[],i=(a("d81d"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0"),a("284c")),l=a("9f12"),d=a("53fe"),s=a("8b83"),o=a("c65a"),c=a("c03e"),u=a("9ab4"),p=a("60a3"),h=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.datalist=Object(i["a"])(Array(20).keys()).map((function(e){return{value:"选项"+e}})),e.demo1Code="\n    <template>\n      <o-select :datalist=\"datalist\"/>\n    </template>\n    <code>\n      export default {\n        data () {\n          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }\n        }\n      }\n    </code>\n  ".replace(/code/g,"script"),e.demo2Code="\n    <template>\n      <o-select :datalist=\"hasDisabled\"/>\n    </template>\n    <code>\n      export default {\n        data () {\n          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }\n        },\n        computed: {\n          hasDisabled () {\n            return this.datalist.map(({ value }) => ({ value, disabled: Math.random() > 0.5 }))\n          }\n        }\n      }\n    </code>\n  ".replace(/code/g,"script"),e.demo3Code="\n    <template>\n      <o-select :datalist=\"datalist\" disabled/>\n    </template>\n    <code>\n      export default {\n        data () {\n          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }\n        }\n      }\n    </code>\n  ".replace(/code/g,"script"),e.demo4Code="\n    <template>\n      <o-select :datalist=\"fetchData\"/>\n    </template>\n    <code>\n      export default {\n        data () {\n          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }\n        },\n        methods: {\n          fetchData () {\n            let { datalist } = this\n            return new Promise((res, rej) => {\n              setTimeout(() => {\n                res(datalist)\n              }, 1000)\n            })\n          }\n        }\n      }\n    </code>\n  ".replace(/code/g,"script"),e.Props={head:[{prop:"name",label:"Name",width:150},{prop:"description",label:"Description",width:250},{prop:"required",label:"Required",width:100},{prop:"type",label:"Type",width:300},{prop:"default",label:"Default",width:100}],body:[{name:"name",description:"原生name属性",required:"false",type:"String",default:"-"},{name:"width",description:"选择器的宽度，单位为px",required:"false",type:"String | Number",default:"200"},{name:"disabled",description:"是否禁用",required:"false",type:"Boolean",default:"false"},{name:"placeholder",description:"选择器占位文本",required:"false",type:"String",default:"'请输入内容'"},{name:"datalist",description:"自动完成的数据，数据类型应为包含 { value, disabled } 的数组， 或返回此类数组的Promise工厂函数",required:"false",type:"Array | Function",default:"-"}]},e}return Object(c["a"])(t,e),Object(d["a"])(t,[{key:"fetchData",value:function(){var e=this.datalist;return new Promise((function(t,a){setTimeout((function(){t(e)}),1e3)}))}},{key:"hasDisabled",get:function(){return this.datalist.map((function(e){var t=e.value;return{value:t,disabled:Math.random()>.5}}))}}]),t}(p["b"]);h=u["a"]([p["a"]],h);var v=h,f=v,m=a("2877"),b=Object(m["a"])(f,r,n,!1,null,null,null);t["default"]=b.exports},5319:function(e,t,a){"use strict";var r=a("d784"),n=a("825a"),i=a("7b0b"),l=a("50c4"),d=a("a691"),s=a("1d80"),o=a("8aa5"),c=a("14c3"),u=Math.max,p=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,a){return[function(a,r){var n=s(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n,r):t.call(String(n),a,r)},function(e,i){var s=a(t,e,this,i);if(s.done)return s.value;var h=n(e),v=String(this),f="function"===typeof i;f||(i=String(i));var b=h.global;if(b){var g=h.unicode;h.lastIndex=0}var y=[];while(1){var w=c(h,v);if(null===w)break;if(y.push(w),!b)break;var x=String(w[0]);""===x&&(h.lastIndex=o(v,l(h.lastIndex),g))}for(var k="",C=0,_=0;_<y.length;_++){w=y[_];for(var D=String(w[0]),S=u(p(d(w.index),v.length),0),A=[],j=1;j<w.length;j++)A.push(m(w[j]));var O=w.groups;if(f){var q=[D].concat(A,S,v);void 0!==O&&q.push(O);var $=String(i.apply(void 0,q))}else $=r(D,v,S,A,O,i);S>=C&&(k+=v.slice(C,S)+$,C=S+D.length)}return k+v.slice(C)}];function r(e,a,r,n,l,d){var s=r+e.length,o=n.length,c=f;return void 0!==l&&(l=i(l),c=v),t.call(d,c,(function(t,i){var d;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,r);case"'":return a.slice(s);case"<":d=l[i.slice(1,-1)];break;default:var c=+i;if(0===c)return t;if(c>o){var u=h(c/10);return 0===u?t:u<=o?void 0===n[u-1]?i.charAt(1):n[u-1]+i.charAt(1):t}d=n[c-1]}return void 0===d?"":d}))}}))}}]);
//# sourceMappingURL=chunk-10e269b7.0c88b9f5.js.map