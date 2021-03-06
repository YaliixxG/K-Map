---
title: 为何Vue、React项目时在列表组件中要用key？
---  

# <font color="#5F9EA0">为何Vue、React项目时在列表组件中要用key？</font>   

### 带key和不带key，渲染有何区别？  
* 不带key：由于没有带key，所以没有标识，节点会被复用渲染，在重新加载组件时，会认为是相同的节点，而不进行重新创建渲染更新，直接替换节点中的内容，*这样性能会比较快* 
* 带key：用index来做key，效果和不带key的效果是一样的。因为在列表变更前后，index都是一样的，所以也会被当做相同的节点，不会重新创建更新。所以要key其实是指的“唯一”，‘不重复“，"id"这种的。这样的话，如果确定不是同样的节点则会重新创建更新，会保持最新的，正确的状态。它不是替换节点内容，而是删除更新整个节点，*但是性能的确会比不带key要差一些*。   


### key的作用？  
key的作用就是用来在更新组件时，判断两个节点是否相同。相同就复用，不相同就删除旧的节点创建新的节点。  

### 既然不带key的性能比带key的性能更好，那为何还要用key?  
因为不带key会出现一个问题，就是不会更新最新的状态，也就是比如一个Tab，我在Tab1里面的一个列表中第3个是选中状态，那我点击Tab2的列表第3个也有可能是选中状态。因为复用了组件，保留了前面的状态，所以不带key只适合用于无状态组件。  
而带key的话，则用这个独一无二的标识，来区别是不是同一个节点，如果不是则销毁重新创建新的节点，保持最新，最正确的状态。并且两者性能上并没有差太多，很难感觉到，所以才会推荐用key，来保证组件状态的正确。