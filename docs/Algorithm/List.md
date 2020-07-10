---
title: 链表
--- 

# <font color="#32CD32">链表</font>

### 1. 根据val来删除链表  

总结： 不需要过分纠结`prev`的问题，把简单的问题想得太复杂，直接利用node本身的属性`val`和`next`来进行操作就可以了。只是将传入的这个节点的属性值用它的下一个节点的属性值来取代，它即被删除了。  
```js
    function ListNode(val) {
        this.val = val
        this.next = null
    }
    // 删除函数
    function(node) {
        node.val = val
        node.next = next
    }
```