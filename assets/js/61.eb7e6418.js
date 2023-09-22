(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{290:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"实现-new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现-new","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("font",{attrs:{color:"#4169E1"}},[t._v("实现 new")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"new-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-的特点","aria-hidden":"true"}},[this._v("#")]),this._v(" new 的特点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("new 操作符会返回一个对象，所以我们需要在内部创建一个对象")]),this._v(" "),s("li",[this._v("这个对象，也就是构造函数中的 this，可以访问到挂载在 this 上的任意属性")]),this._v(" "),s("li",[this._v("这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来")]),this._v(" "),s("li",[this._v("返回原始值需要忽略，返回对象需要正常处理")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传入构造函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Con")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建对象，拿到构造函数的属性和方法，相当于 obj.__proto__ = Con.prototype")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Con")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者 let obj = {}; Object.setPrototypeOf(obj, Con.prototype);")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取参数，其含义相当于 arguments.slice(1)，slice()是数组的方法，由于 arguments 不是数组，只是类数组，不具备所有数组原型的方法")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以如果arguments要使用数组的方法，这里就通过修改this指针的方式，让 arguments 继承 array。然后arguments就可以使用数组中的各种方法了")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" argArr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 obj 绑定到构造函数上，并且传入剩余的参数")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Con")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若是对象则按照正常返回值处理，若是原始值则忽略，确保返回的为对象")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果用 typeof 判断， null 也是 Object，所以用 instanceof 进行判断")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);