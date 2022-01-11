---
title: 函数柯里化 curry
---

# <font color="#DC8900">函数柯里化 curry</font>

函数柯里化：是将一个多参数的函数变成一个多个单参数的函数。`一个n元`变成`n个一元`

柯里化的思想，用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数。  

根据这个理解可以很容易写出 `curry`  

```js
function curry(fn) {
    // 获取函数的参数个数
    let len = fn.length

    // 用于存储参数的数组
    let argList = []
    return function _curry() {
        // 获取后续参数
        let nextArgs = [].slice.call(arguments)

        // 当已存参数与后续参数的个数够了，就执行函数
        if(argList.length + nextArgs.length >= len) {
            return fn.apply(null, [...argList, ...nextArgs])
        }
        argList = [...argList, ...nextArgs]
        return _curry
    }
}
```