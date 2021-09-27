---
title: 你不知道的 JavaScript
---

# <font color="#00C0FD">你不知道的 JavaScript</font> 

### LHS 查询，RHS 查询  
> LHS和RHS的含义是“赋值操作的左侧或右侧”并不一定意味着就是“=赋值操作符的左侧或右侧”。赋值操作还有其他几种形式，因此在概念上最好将其理解为“赋值操作的目标是谁（LHS）”以及“谁是赋值操作的源头（RHS）”。

```js
    function foo(a) {
        let b = a
        return b + a
    }
    let c = foo(2)
```

LHS查询：  
1. c = ...
2. a = 2
3. b = ... 

RHS查询：
1. foo(...
2. ... = a
3. return a
4. return b

> 变量在左侧，赋值操作，LHS；变量在右侧，引用操作，RHS；仅引用操作，RHS。