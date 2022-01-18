---
title: instanceof 运算符的原理及实现
---

# <font color="#87CFEB">instanceof 运算符的原理及实现</font>

> instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

### 实现

根据概念，我们可以注意两个重点：

-   构造函数的原型对象（prototype）
-   实例对象的原型链

#### 获取构造函数的原型对象

```js
let ConProto = Con.prototype;
```

#### 获取实例对象的原型

> Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。

```js
let objProto = Object.getPrototypeOf(obj);
```

#### 具体实现

```js
function instanceofFn(obj, Con) {
    // 1. 找出构造函数的原型对象
    let ConProto = Con.prototype;

    // 2. 找出对象的原型, Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
    let objProto = Object.getPrototypeOf(obj);

    while (true) {
        // 查找至对象的原型为 null 时，则返回 false，跳出
        if (!objProto) return false;

        // 构造函数的原型对象与对象的原型一致，则返回 true，跳出
        if (ConProto === objProto) return true;

        // 造函数的原型对象与对象的原型不一致，则继续在对象的原型链上查找原型
        objProto = Object.getPrototypeOf(objProto);
    }
}
```
