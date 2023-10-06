(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{167:function(t,_,e){t.exports=e.p+"assets/img/BFS.720972b6.png"},242:function(t,_,e){"use strict";e.r(_);var v=[function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"什么是广度优先搜索？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是广度优先搜索？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是广度优先搜索？")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[_("img",{attrs:{src:e(167),alt:"广度优先搜索"}})])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("如上图所示，广度优先搜索是先从根节点找与根节点相连，并且最接近的一圈节点开始遍历，也就是先遍历第一层蓝色的圆圈部分，再遍历第二层黄圈的部分。"),_("br"),this._v("\n其中右边的第二层黄圈节点与两个节点都有相连关系，避免重复遍历，则需要再遍历节点后，将其标记为"),_("code",[this._v("已遍历")]),this._v("。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"广度优先搜索主要用来解决什么问题？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索主要用来解决什么问题？","aria-hidden":"true"}},[this._v("#")]),this._v(" 广度优先搜索主要用来解决什么问题？")])},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ul",[e("li",[e("p",[t._v("第一类问题：从节点"),e("code",[t._v("A")]),t._v("出发，有前往节点"),e("code",[t._v("B")]),t._v("的路径吗？"),e("br"),t._v("\n比如：你要在你的朋友中找到一位认识"),e("code",[t._v("周杰伦")]),t._v("的朋友，你就必须把你的朋友（第一层）都列出来，依次检查每个人是否有认识"),e("code",[t._v("周杰伦")]),t._v("的人，有则结束，没有则在朋友的朋友（第二层）中来搜索，以此类推第三层，第四层...")])]),t._v(" "),e("li",[e("p",[t._v("第二类问题：从节点"),e("code",[t._v("A")]),t._v("出发，前往节点"),e("code",[t._v("B")]),t._v("的哪条路径最短？"),e("br"),t._v("\n也就是你要找这个认识"),e("code",[t._v("周杰伦")]),t._v("的人，最少得通过几个人（几层关系）找到。")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"如何进行广度优先搜索？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何进行广度优先搜索？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何进行广度优先搜索？")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("广度优先搜索必须是按顺序进行的，避免重复搜索，或者出现无限循环的情况。"),_("br"),this._v("\n由于是按顺序进行的，则先加入到搜索队列的，优先搜索，符合先进先出，所以可以用队列来实现。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("队列：是一种先进先出（First In First Out, FIFO）的数据结构。支持两种操作：入队和出队。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[_("img",{attrs:{src:e(167),alt:"广度优先搜索"}})])},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ol",[e("li",[t._v("创建队列数据结构，并创建一个空间，用来存储已遍历节点")]),t._v(" "),e("li",[t._v("将第一层待搜索节点"),e("code",[t._v("[A, B, C, D]")]),t._v("加入队列")]),t._v(" "),e("li",[t._v("先搜索最先加入队列的"),e("code",[t._v("A")]),t._v("，此时待搜索队列为"),e("code",[t._v("[B, C, D]")])]),t._v(" "),e("li",[t._v("发现"),e("code",[t._v("A")]),t._v("并不是我要搜索的目标时，就将与"),e("code",[t._v("A")]),t._v("节点的相连最近的下一层节点"),e("code",[t._v("E")]),t._v("加入队列，此时待搜索队列为"),e("code",[t._v("[B, C, D, E]")]),t._v("，并将"),e("code",[t._v("A")]),t._v("标记为已遍历的节点，推入已遍历的数组")]),t._v(" "),e("li",[t._v("再对"),e("code",[t._v("B")]),t._v("进行搜索，如果依然不是目标，就将与"),e("code",[t._v("B")]),t._v("节点的相连最近的下一层节点"),e("code",[t._v("F")]),t._v("加入队列，此时待搜索队列为"),e("code",[t._v("[C, D, E, F]")]),t._v("，并将"),e("code",[t._v("B")]),t._v("标记为已遍历的节点，推入已遍历的数组")]),t._v(" "),e("li",[t._v("如此反复，直至搜寻到目标")]),t._v(" "),e("li",[t._v("每次搜索节点前，请记住先看它是否在已遍历的数组中，如果是的，则搜索下一个")])])}],r=e(0),s=Object(r.a)({},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"广度优先搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("font",{attrs:{color:"#4682B4"}},[t._v("广度优先搜索")])],1),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("广度优先搜索是一种用于图的查找算法。优先遍历最接近根节点的节点。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("再以此图为例：")]),t._v(" "),t._m(8),t._v(" "),t._m(9)])},v,!1,null,null,null);_.default=s.exports}}]);