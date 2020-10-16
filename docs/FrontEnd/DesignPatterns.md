---
title: JS设计模式
---

# <font color="#FBA500">Javascript 设计模式 </font>

> 为了解决在开发中可能遇到的需求（相似），而提出的一套解决方法。

### 为什么要使用设计模式？

使用设计模式的根本目的是为了减少项目变化所造成的影响。

### 书籍

《设计模式》、《大话设计模式》、《23 种常见的设计模式》

### 常用的设计模式

-   工厂设计模式
-   单例设计模式
-   命令模式
-   模板模式
-   策略模式
-   观察者模式
-   命名空间模式

### 目的

-   高内聚，低耦合
-   提高重用性，减少代码冗余
-   扩展性
-   稳定性  
    ......

### 工场设计模式

### 单例设计模式

在整个程序的运行过程中一个类型只有一个实例对象。通过指定的构造函数，无论创建多少次对象，都只有一个。

<strong>应用场景：</strong>全局的用户信息对象；登录/注册；只要有一个对象的时候，避免重复创建，删除对象。

一、通过`全局变量`来实现单例模式：

```js
// 设置全局变量来进行单例控制
let init = null;

function Solo(name, age) {
    // 在构造函数内部先判断全局变量是否有值，有则直接返回，反之将当前的this赋值给全局变量
    if (init) {
        return init;
    }

    // 指向
    init = this;

    // 通过this来进行设置属性和方法
    this.name = name;
    this.age = age;
}
```

<strong>缺点：</strong>使用一个全局变量来保存单例对象，该全局变量在整个作用域中都可以被访问或者被修改，可能会轻易的被覆盖或者是修改。修改之后，创建出来的实例对象则不是之前那个单例对象了。

二、使用`立即执行函数`进行优化  
将上面的逻辑放在一个立即执行函数里面，最终外界只需要拿到构造函数就行，所以将构造函数暴露出来即可。而之前的全局变量 init，外界则无法访问到。

```js
(function(w) {
    let init = null;

    function Solo(name, age) {
        if (init) {
            return init;
        }
        init = this;
        this.name = name;
        this.age = age;
    }
    w.Solo = Solo;
})(window);
```  

三、使用闭包-惰性函数实现单例模式（惰性函数只执行一次）    



```js
function Solo(name, age) {
    // 这一部分只会执行一次，再第一次实例化对象时进行执行
    let init = this;

    // 保存构造函数的原型对象指针
    let oldPrototype = Solo.prototype
    this.name = name;
    this.age = age;

    // 惰性函数，第一次进行实例化时，会将构造函数赋值，后面第二次，第三次实例化，则会直接跳到 return init的部分，因为此时的Solo已经是个返回init的函数了，则会默认执行此部分
    Solo = function() {
        return init;
    };

    // 此时的 Solo已经上面赋值过的 Solo了
    Solo.prototype = oldPrototype  
    init = new Solo()  
    init.constructor = Solo
}
```
