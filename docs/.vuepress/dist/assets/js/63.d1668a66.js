(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{292:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"react-组件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-组件优化","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("font",{attrs:{color:"#48D1CC"}},[t._v("React 组件优化")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-类组件优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-类组件优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 类组件优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("PureComponent")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXX")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PureComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-函数式组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数式组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 函数式组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("React.memo()")]),this._v(", "),s("code",[this._v("React.memo()")]),this._v("有两个参数：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("被包裹的组件")]),this._v(" "),s("li",[this._v("深层次对比的 props 的函数")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 props 渲染 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n 如果把 nextProps 传入 render 方法的返回结果与\n 将 prevProps 传入 render 方法的返回结果一致则返回 true，\n 否则返回 false\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isSame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);