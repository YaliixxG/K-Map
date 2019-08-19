---
title: 箭头函数 =>
---  

# <font color="#FFB6C1">箭头函数</font>   

> 箭头函数是比较优雅的写法，但是它本质上也与普通函数有区别，并且也不能作为构造函数  

### 箭头函数与普通函数的区别？   
> 箭头函数几乎是属于纯函数的效果，完全剔除了外部状态。所以没有普通函数的this,arguments，所以也不能用 call()、apply()、bind() 去改变 this 的指向 
* 箭头函数本身的`this`是指向定义时所处的对象，普通函数则是谁使用则`this`指向谁  
* 箭头函数里不存在 `arguments` 对象。如果要用，可以用 `rest` 参数代替。
* 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数。
* 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。  

### 箭头函数为什么不能用`new`命令？  
* 没有自己的`this`，无法调用 `call`，`apply`。  
* 没有 `prototype` 属性 ，而 `new` 命令在执行时需要将构造函数的 `prototype` 赋值给新的对象的 `__proto__`。  

new 过程如下：
```js
function newFunc(father, ...rest) {
    // 构造函数本身会自己定义一个 Object
  var result = {};  
  // 然后再将构造函数的prototype 赋值到这个对象上的 proto
  result.__proto__ = father.prototype; 
  // 然后再讲这个对象的指向 指到 新对象 result2 上面
  var result2 = father.apply(result, rest);
  // 在构造函数内部，如果return的是一个对象的数据类型，则直接将这个类型反馈到外界；其他情况都是return默认的 Object
  if (
    (typeof result2 === 'object' || typeof result2 === 'function') &&
    result2 !== null
  ) {
    return result2;
  }
  return result;
}
```