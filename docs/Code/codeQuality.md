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

### 变量权限

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
