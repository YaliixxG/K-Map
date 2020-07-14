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
        node.next = node.next.next
    }
```
### 2. 计算链表的长度（节点的个数） 

index的长度变量

```js
let l = head, index = 0;

while(l) {
    index++
    l = l.next
}

### 3. 删除倒数第N个节点  

思路：利用双指针来进行，两个指针（first, second）。`first`指针与second指针的相差的节点数就是N，这样当first指针到null时，此时`second`的指针的下一个节点即是要删除的节点。如果仅在操作first指针时就已经到null了，则证明是要删除的节点为头节点（head）,所以返回`head.next`。 

```