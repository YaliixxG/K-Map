---
title: 实现 new
---

# <font color="#4169E1">实现 new</font>

### new 的特点

-   new 操作符会返回一个对象，所以我们需要在内部创建一个对象
-   这个对象，也就是构造函数中的 this，可以访问到挂载在 this 上的任意属性
-   这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来
-   返回原始值需要忽略，返回对象需要正常处理

```js
// 传入构造函数
function create(Con) {
    // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    // 创建对象，拿到构造函数的属性和方法，相当于 obj.__proto__ = Con.prototype
    let obj = Object.create(Con.prototype); // 或者 let obj = {}; Object.setPrototypeOf(obj, Con.prototype);

    // 获取参数，其含义相当于 arguments.slice(1)，slice()是数组的方法，由于 arguments 不是数组，只是类数组，不具备所有数组原型的方法
    // 所以如果arguments要使用数组的方法，这里就通过修改this指针的方式，让 arguments 继承 array。然后arguments就可以使用数组中的各种方法了
    let argArr = [].slice.call(arguments, 1);

    // 将 obj 绑定到构造函数上，并且传入剩余的参数
    let result = Con.apply(obj, argArr);

    // 若是对象则按照正常返回值处理，若是原始值则忽略，确保返回的为对象
    // 如果用 typeof 判断， null 也是 Object，所以用 instanceof 进行判断
    return result instanceof Object ? result : obj;
}
```
