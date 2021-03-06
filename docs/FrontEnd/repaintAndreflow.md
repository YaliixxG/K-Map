---
title: 重绘与回流
---
# <font color="#008000">重绘与回流，怎么理解？如何优化？</font>

### 理解  

页面加载的过程，就是根据HTML和CSS，构建DOM和CSSOM，然后根据DOM节点的几何属性以及CSSOM的样式生成 `render tree`渲染树。

重绘：‘重新绘制’？===> 绘制的话，会想到CSS的渲染，比如样式颜色，这种元素改变颜色的行为，不需要重新生成DOM树，不影响页面布局，只需要更改颜色，重新渲染页面。  

回流：比如增删DOM节点，修改一个元素的宽高等，页面布局发生变化，DOM树结构发生变化，那么肯定要重新构建DOM树，而DOM树与渲染树是紧密相连的，DOM树构建完，渲染树也会随之对页面进行再次渲染。  

所以!!! *重绘不一定会造成回流，但是回流一定会造成重绘* 回流的代价要远大于重绘。

### 优化

* 避免进行DOM的增删，删除某个节点，或者增加子节点都会引起回流。增加多个节点，尽量使用`documentfragment`。

* 减少几何属性（元素宽高，border，font-size）的变化，这种变化也会引起布局变化。如果需要改变多个属性，最好将这些属性定义在一个class中，直接修改class名，这样只用引起一次回流。

* 避免元素位置的变化，margin，padding之类的操作，会让元素发生位移，引起布局变化。所以可以用定位来使其脱离文档流，再改变位置会更好。

* 当你要获取元素的偏移量属性，浏览器会通过回流来保证值的准确为你取得最新的值，所以当得到这个值以后，最好将其缓存起来，避免重复操作。（scrollTop、scrollLeft、scrollWidth、offsetTop、offsetLeft、offsetWidth、offsetHeight）

* 页面初次渲染，这样的回流无法避免。

* 浏览器窗口尺寸改变，resize事件发生也会引起回流。

尽量少的进行这种易引起回流的操作，优化页面性能。