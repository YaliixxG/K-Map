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
### 4. 找出链表中间点

思路：利用快慢双指针，慢指针每走一步，快指针走两步。  
* 当链表节点为奇数时，判断条件为 `fast.next!== null` 
* 当链表节点为偶数时，判断条件为 `fast!== null` 

### 5. 反转链表

思路：需要三个指针，一个当前指针 `curr`，一个指向下一个的指针 `next`，一个 `curr`前面的指针 prev。本质上我们是要让链表的指向反过来，则形成了反转链表，所以我们需要把 `curr.next = prev`。但是 `curr`需要继续往下走，所以 `next` 相当于用来存储 `curr` 的下一次位置。 

### 6. 判断是否为回文链表 1->2->2->1  

思路：  
1. 找出中间点，将链表分二
2. 将后半段的链表反转  
3. 将反转后的链表与原链表进行值的比较，若不同则 `false`，否则继续比较直至完成，为 `true`
