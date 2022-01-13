---
title: 记忆函数
---

# <font color="#FF5347">记忆函数</font>

### 什么是记忆函数

> 函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。

### 实现
根据这个概念，我们可以得知，主要是要将参数存起来，若有相同的参数，则直接取出对应的值。这种键值对的存取，很自然能想到利用 Map 数据结构来进行 key 值的存取，自己写了一版：

```js
function memoize(fn) {
    let res = new Map();
    return function() {
        // 这里将参数取出，字符串化作为键值
        let argStr = [].slice.call(arguments).toString();
        if (res.has(argStr)) return res.get(argStr);
        let result = fn.apply(this, arguments);
        res.set(argStr, result);
        return result;
    };
}
```

来测试一下：

```js
function add(a, b) {
    return a + b;
}

let memoizedAdd = memoize(add);
console.log('第一次调用', memoizedAdd(1, 2)); // 3
console.log('第二次调用缓存', memoizedAdd(1, 2)); // 3

function getNum(obj) {
    return obj.value;
}
var memoizedGetNum = memoize(getNum);
console.log(memoizedAdd({ value: 2 })); // 2
console.log(memoizedAdd({ value: 3 })); // 2 ??? 这里应该打印 3 才对啊，为什么打印了 2？
```

发现当传入的参数为`对象`时，对象被 `toString` 后，会统一变成 `[object Object]`，所以我们可以改一下这个生成 key 的方法，使用 `JSON.stringify()`，第二版如下：

```js
function memoize(fn) {
    let res = new Map();
    return function() {
        // 这里将参数取出，把 toString()改为 JSON.stringigy()
        let argStr = JSON.stringify([].slice.call(arguments));
        if (res.has(argStr)) return res.get(argStr);
        let result = fn.apply(this, arguments);
        res.set(argStr, result);
        return result;
    };
}
```
### underscore的实现  

还可以看下`underscore`的实现，这里的`hasher`是一个方法，你自己自定义 key 值的方法

```js
var memoize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};
```

使用方法：

```js
var memoizedAdd = memoize(add, function() {
    var args = Array.prototype.slice.call(arguments);
    return JSON.stringify(args);
});

console.log(memoizedAdd(1, 2, 3)); // 6
console.log(memoizedAdd(1, 2, 4)); // 7
```
