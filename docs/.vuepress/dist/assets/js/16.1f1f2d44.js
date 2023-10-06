(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{199:function(t,s,a){t.exports=a.p+"assets/img/eventLoopModel.0af9f163.png"},200:function(t,s,a){t.exports=a.p+"assets/img/eventloop.c3f59522.jpeg"},282:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("JS 主线程不断的循环往复的从任务队列中读取任务，执行任务，这中运行机制称为事件循环（event loop）。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 进程和线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"浏览器是多进程还是单进程呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程还是单进程呢？","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器是多进程还是单进程呢？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"浏览器的进程是多线程还是单线程？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的进程是多线程还是单线程？","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器的进程是多线程还是单线程？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"js-是单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-是单线程","aria-hidden":"true"}},[this._v("#")]),this._v(" JS 是单线程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"验证单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证单线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证单线程")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("验证JS单线程"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("验证点击"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" btn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nowTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'之前'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是多线程，这里应该打印出来的时间差为设置的200毫秒")]),t._v("\n                    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nowTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'之后'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个耗时任务")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999999999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果为")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之前")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11021")]),t._v("\n        ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"js-是按照什么顺序进行代码执行的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-是按照什么顺序进行代码执行的？","aria-hidden":"true"}},[this._v("#")]),this._v(" JS 是按照什么顺序进行代码执行的？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"js-代码划分及执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-代码划分及执行顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" JS 代码划分及执行顺序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("初始化代码（包括一些特殊代码，设置定时器，绑定监听，网络请求 ajax）-- 同步代码")]),this._v(" "),s("li",[this._v("回调代码（后面在某个时刻才可能执行回调代码）-- 异步代码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"为什么-js-为单线程，而不改为多线程呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-js-为单线程，而不改为多线程呢？","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么 JS 为单线程，而不改为多线程呢？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"浏览器内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器内核")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"内核模块组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核模块组成","aria-hidden":"true"}},[this._v("#")]),this._v(" 内核模块组成")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("html、css 文档解析模块：负责页面文本解析")]),t._v(" "),a("li",[t._v("dom/css 模块：负责 dom/css 在内存中的相关处理")]),t._v(" "),a("li",[t._v("布局和渲染模块：负责页面的布局和效果的绘制")]),t._v(" "),a("li",[t._v("定时器模块：负责定时器的管理")]),t._v(" "),a("li",[t._v("网络请求模块：负责服务器请求（常规/ajax）")]),t._v(" "),a("li",[t._v("事件响应模块：负责事件的管理"),a("br"),t._v("\n......")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事件循环模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环模型","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件循环模型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(199),alt:"事件循环模型"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模型解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型解析","aria-hidden":"true"}},[this._v("#")]),this._v(" 模型解析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("首先JS引擎执行代码（ECMAScript），将代码的变量、事件等等放入堆或者栈中，这一步进行初始化。初始化过程中，将回调函数按顺序放入回调队列。")]),this._v(" "),s("li",[this._v("初始化后，JS引擎分发任务给浏览器，通过浏览器API对应模块进行解析，调用，执行。")]),this._v(" "),s("li",[this._v("浏览器调用中发现此事件中有回调函数需要执行时，会将事件发回给JS引擎。")]),this._v(" "),s("li",[this._v("JS引擎收到发回的事件，在“初始化类型代码”完成后，再去回调队列中按顺序\b执行对应的回调函数。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"今日头条面试题："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#今日头条面试题：","aria-hidden":"true"}},[this._v("#")]),this._v(" 今日头条面试题：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如何输出呢？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'settimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"解题："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题：","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("先看整个代码，执行栈中先执行"),a("code",[t._v("console.log('script start')")]),t._v("，在执行中找看有没有可执行的微任务，在下一次渲染页面执行宏任务之前，需要执行完这些微任务。")]),t._v(" "),a("li",[t._v("此时看到 "),a("code",[t._v("async1()")]),t._v(" 和 "),a("code",[t._v("new Promise")]),t._v("。")]),t._v(" "),a("li",[t._v("执行 "),a("code",[t._v("async1()")]),t._v("，执行"),a("code",[t._v("console.log('async1 start')")]),t._v("，遇到"),a("code",[t._v("await async2()")]),t._v(" 执行"),a("code",[t._v("console.log('async2')")]),t._v("，此时 await 后的代码会加入另一个队列，此时跳出。")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("new Promise")]),t._v("，执行"),a("code",[t._v("console.log('promise1')")]),t._v("，然后"),a("code",[t._v("resolve()")]),t._v("立即执行，然后遇到"),a("code",[t._v("then")]),t._v("，可以理解为"),a("code",[t._v("await")]),t._v("一样，后面的代码会加入另一个队列，此时跳出。")]),t._v(" "),a("li",[t._v("此时发现后面还有"),a("code",[t._v("console.log('script end')")]),t._v("，执行。")]),t._v(" "),a("li",[t._v("此时查看微任务还有哪些？ 就是 \b 另一个队列还有排队的两个任务，依次执行"),a("code",[t._v("console.log('async1 end')")]),t._v(","),a("code",[t._v("console.log('promise2')")]),t._v("。")]),t._v(" "),a("li",[t._v("最后进行渲染，执行下一个宏任务"),a("code",[t._v("console.log('settimeout')")]),t._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'settimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"相关概念："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关概念：","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关概念：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"js-任务队列："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-任务队列：","aria-hidden":"true"}},[this._v("#")]),this._v(" JS 任务队列：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("JS 分为同步任务和异步任务")]),this._v(" "),s("li",[this._v("同步任务都在主线程上执行，形成一个执行栈")]),this._v(" "),s("li",[this._v("主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。")]),this._v(" "),s("li",[this._v("一旦执行栈中的所有同步任务执行完毕（此时 JS 引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"宏任务-macro-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-macro-task","aria-hidden":"true"}},[this._v("#")]),this._v(" 宏任务 (macro)task")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("浏览器为了能够使得 JS 内部(macro)task 与 DOM 任务能够有序的执行，"),s("em",[this._v("会在一个(macro)task 执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"微任务-microtask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微任务-microtask","aria-hidden":"true"}},[this._v("#")]),this._v(" 微任务 microtask")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以理解是在当前 task 执行结束后立即执行的任务。也就是说，"),s("em",[this._v("在当前 task 任务后，下一个 task 之前，在渲染之前")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"promise-和-async-中的立即执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-和-async-中的立即执行","aria-hidden":"true"}},[this._v("#")]),this._v(" Promise 和 async 中的立即执行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Promise 中的异步体现在 then 和 catch 中，所以写在 Promise 中的代码是被当做同步任务立即执行的。而在 async/await 中，在出现 await 出现之前，其中的代码也是立即执行的。"),s("br"),this._v(" "),s("em",[this._v("实际上 await 是一个让出线程的标志")]),this._v("。await 后面的表达式会先执行一遍，"),s("em",[this._v("将 await 后面的代码加入到 microtask 中，然后就会跳出整个 async 函数来执行后面的代码")]),this._v("。"),s("br"),this._v("\nPromise 构造函数是同步执行，而 .then .catch .啥啥的是异步， 而且放到了微队列中，async/await 中，await 前面的是同步，await 后面的是异步，写法上是这样，但是其实是 语法糖，最后还会转为 Promise.then 的形式。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"运行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行顺序")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("执行一个宏任务（栈中没有就从事件队列中获取）")]),t._v(" "),a("li",[t._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")]),t._v(" "),a("li",[t._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")]),t._v(" "),a("li",[t._v("当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染")]),t._v(" "),a("li",[t._v("渲染完毕后，JS 线程继续接管，开始下一个宏任务（从事件队列中获取）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"图解事件循环执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解事件循环执行顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解事件循环执行顺序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(200),alt:"图解事件循环执行顺序"}})])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"javascript-事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-事件循环","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("font",{attrs:{color:"#FFA500"}},[t._v("Javascript 事件循环 ")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("进程与线程的关系，就好比一个车间（进程）里面拥有多少条生产流水线（线程）。一个车间里面可以拥有多条或者仅仅一条流水线，但是不会一条都没有，否则这个车间没有存在的意义。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("老版的浏览器是单进程的，但是现在新版的浏览器大多数都是多进程。可以打开任务管理器查看 chrom 浏览器下，还有许多 chrom 浏览器进程。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("浏览器的进程都是多线程的。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("分析：如果是多线程的话，JS 在运行到定时器时，应该会开一个 \b 线程来运行，到耗时的循环结构时，应该也会再开一个线程单独运行。但是返回的结果说明，JS 是将定时器放到了最后运行，先运行了其他的部分，包括循环，所以由此可见 JS 为单线程。")]),t._v(" "),a("p",[t._v("结论：")]),a("h4",[t._v("JS 为单线程")]),a("p"),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("在上面的代码中，可以看到会将定时器的代码放到最后执行，那还有哪些是会放到最后执行的呢？是如何划分的呢？")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("先执行初始化代码，初始化代码执行完毕，才执行回调代码。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("JS 的用途主要是用于与用户的互动，以及操作 DOM。如果是多线程会带来复杂的同步问题。例如在一个线程中进行删除 DOM，却在另一个线程中要求修改这个 DOM，这样就会造成很复杂的情况。所以用途决定了 JS 为单线程。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("支持浏览器运行的最核心程序，相当于人的大脑，计算机的 CPU。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("h4",[t._v("浏览器通过调用一个一个的\b模块，来执行JS发来的一个一个请求。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("答：")]),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("所以输出答案是：")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("microtask 主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36)])},n,!1,null,null,null);s.default=r.exports}}]);