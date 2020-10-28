---
title: 代码质量
---

# <font color="#4F0082">代码质量</font>

### 健壮性 - 参数的判断

#### 基础类型参数判断

```js
function(a, b) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        throw new Error('参数类型非number类型')
    }
}
```

#### 参数是一个配置对象，怎么保证必传的参数都传了-选项合并（给予默认值）

```js
function submit(params) {
    let _default = {
        name: '周杰伦',
        age: 18,
        sex: '男'
    };

    for (let item in params) {
        _default[item] = params[item] || _default[item];
    }
}
```

#### 参数是某个类的实例化对象

```js
function class1() {

}

function f1(obj) {
    // 判断obj是否是class1的实例化对象
    if(f1 instanceof class1) {
        ...
    }
}
```

### 健壮性 - JS 构造函数被当做普通函数调用

明明是构造函数，却被当做普通函数调用，此时可以在构造函数里面做一个判断。判断`this`，在普通函数中，`this`是指向`window`，而在构造函数中，是指向由这个构造函数创建的实例化对象。

```js
function Vue() {
    // 判断this是否是Vue的实例化对象
    if (this instanceof Vue) {
        // 是
    } else {
        // 否，证明被当做普通函数调用了，此时可以跑出错误，也可以return 实例化对象
        return new Vue();
    }
}
```

### 健壮性 - 易错代码

对象属性不存在的情况，注意要先判断对象的存在后，在进行属性的获取。现在可以用`?.`来进行操作。

```js
let obj = {
    type: [
        {
            name: '张三'
        }
    ]
};

let name = obj.type[0].name; // 容易报错
let name = obj?.type[0]?.name;
```

-   `?.` - 可选链运算符，检查每个级别，如果碰到的是 `undefined` 或 `null` 属性，直接返回 undefined，不会继续往下检查
-   `??` - 空值合并运算符，仅在 左侧 是 `null` 或 `undefined` 时，使用右侧的值
-   `??=` - 逻辑空赋值运算符 (x ??= y) 仅在 x 是 `null` 或 `undefined` 时对其赋值

### 健壮性 - 变量权限

有一些变量，是不想被外界更改的，例如在`vue`中的`this.$router`，你在代码中将其置成空对象，但是却不起作用，因为 vue 源码中给这种关键的变量设置了权限，不允许外部进行更改。  
`Object.defineProperty(obj, prop, descriptor)`  
`obj` - 要定义属性的对象  
`prop` - 要定义或修改的属性的名称或者`symbol`  
`descriptor` - 要定义或修改的属性描述符(get, set)

```js
function install() {
    let _router = {...} // 原本的router对象

    // 只让其可读，并不允许进行修改，没有set方法
    Object.defineProperty(this, '$router', {
        get: function() {

            // 返回局部对象，保证原本对象不被干扰
            return _router
        }
    })

}
```

### 可读性 - 语义化

-   命名：根据在业务中的作用，用中文来进行概括，用翻译软件（ = = ）翻译成英文  
    类：首字母大写
-   普通方法 & 变量：首字母小写，小驼峰
-   常量：全大写
-   局部变量：方法里面的变量，以下划线开头

### 可读性 - 结构清晰

容易引起结构混乱的问题：

1. if - else
2. 回调

#### 解决回调地狱

举例：连发请求，请求完第一个 ajax1，成功后请求第二个 ajax2，再成功后请求第三个 ajax3

```js
// 原始
$.ajax({
    success: function() {
        $.ajax({
            success: function() {
                $.ajax({
                    success: function() {}
                });
            }
        });
    }
});

// 进化1
Promise.then().then().then()

// 进化2
async function() {
    await ajax1
    await ajax2
    await ajax3
}
```

### 可复用性  
> Don't repeat yourself  
* 逻辑复用
* 提取代码
* 创建公共模板  

### 可扩展性  
* 模块分明
* 耦合度低  
* 合适的扩张技巧  

架构： 划分低耦合的模块，并高效设计模块沟通
