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
-   观察者模式（发布订阅）
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
### 观察者（发布订阅）模式  

有人发布 => 有人订阅 => 一旦有人发布，订阅者就可以收到消息 => 主动权在发布者手中  

1. 建立发布者对象`lk`  
2. 添加放置订阅者对象的总对象`targetActionsType`，例如：
```js
targetActionsType = {
    click: [
        {
            handleClick: function() {
                console.log('handleClick事件');
            }
        },
        {
            getMsg: function() {
                console.log('getMsg事件');
            }
        }
    ],
    hover: [
        {
            handleHover: function() {
                console.log('handleHover事件');
            }
        },
        {
            changeColor: function() {
                console.log('changeColor事件');
            }
        }
    ]
};
```
3. 添加订阅者方法`addUser`  
4. 添加发布方法`publish`  

```js
let lk = {
    // 用来放不同类型的订阅事件 key值为类型，value值为储存了{target: action}对象的订阅对象数组
    targetActionsType: {},

    /**
     * method 添加订阅对象
     * param {string} type 订阅对象的大类（例如Click事件，Hover事件等等）
     * param {string} target 大类中小类的订阅对象的key值（比如你的事件命名 handleClick）
     * param {function} action 大类中小类的订阅对象的value值（函数，具体的函数操作）
     */
    addUser: function(type, target, action) {
        if (typeof this.targetActionsType[type] === 'undefined') {
            this.targetActionsType[type] = [];
        }
        let obj = {
            target,
            action
        };
        this.targetActionsType[type].push(obj);
    },

    // 发布动作：根据你传递的type，从订阅对象大类targetActionsType取出订阅数组，再循环进行回调操作
    publish: function(type) {
        let targetActions = this.targetActionsType[type];
        for (let i = 0; i < targetActions.length; i++) {
            let { target, action } = targetActions[i];
            action.call(target);
        }
    }
};

const a = { name: '张三' },
    b = { name: '李四' };

lk.addUser('click', a, function() {
    console.log(`${this.name}订阅了点击事件`);
});
lk.addUser('click', b, function() {
    console.log(`${this.name}订阅了点击事件`);
});
lk.addUser('hover', b, function() {
    console.log(`${this.name}订阅了hover事件`);
});

lk.publish('click');
lk.publish('hover');

// 张三订阅了点击事件
// 李四订阅了点击事件
// 李四订阅了hover事件

```  
### 命名空间模式  
* 写法：把所有的东西都写在一个对象里面（变量，方法）  
* 命名：一般是项目的名称或简称，要求所有的字符都大写  

```js  
window.LK = {
    height: 18,  
    width: 1000,
    logMsg: function() {
        console.log('打印巴拉巴拉')
    }
}
```  

### 策略模式  

定义一系列的策略，把它们一个个封装成函数，也可以统一封装进一个对象；然后再定义一方法，该方法可根据参数自动选择执行对应的策略  

举例：小球的运动，从一个点运动到另一个点，可以有很多种策略，比如快速，正常速度，慢速。  
```js  
let Celue = {
    slow: function (distance) {
        console.log(`慢速，耗时${distance * 2}小时`)
    },
    normal: function (distance) {
        console.log(`慢速，耗时${distance}小时`)
    },
    fast: function (distance) {
        console.log(`快速，耗时${distance / 2}小时`)
    }
}

function Ball(from, to) {
    this.from = from
    this.to = to
}

Ball.prototype.run = function (fn) {
    fn(this.to - this.from)
}

let ball = new Ball(0, 20)

ball.run(Celue.slow) // 慢速，耗时40小时
ball.run(Celue.normal) // 慢速，耗时20小时
ball.run(Celue.fast) // 慢速，耗时10小时
```  

### 模板模式  
很多事情的流程步骤都是一模一样的，只是部分细节不同，此时可以在父类型定义这个模板，封装这些固定的操作，子类型继承父类型后，重写部分方法；  

举例：冲果汁  
```js
// 冲果汁有几个步骤：烧水，加入材料，搅拌  
// 其中烧水，搅拌是固定操作，但是放入材料，可以放入苹果做苹果汁，放入橙子做橙汁  

// 父类型
function Juicy() {} 

// 制作方法
Juicy.prototype.make = function() {
    // 1、烧水
    this.water()
    // 2、放入材料 
    this.cailiao() 
    // 3、搅拌 
    this.mix() 
}

Juicy.prototype.water = function() {
    console.log('烧水')
}
Juicy.prototype.cailiao = function() {
    // 此部分由子类型重写，所以暂时先抛出异常  
    throw new Error('此部分由子类型重写，所以暂时先抛出异常')
}
Juicy.prototype.mix = function() {
    console.log('搅拌')
}  

// 子类型
function Apple() {}  

// 先继承父类型 
Apple.prototype = new Juicy() 

// 重写材料方法  
Apple.prototype.cailiao = function() {
    console.log('放入苹果')
}

let apple = new Apple()
apple.make()

// 烧水
// 放入苹果
// 搅拌
```  
### 命令模式  
将请求封装成对象，分离命令接受者和发起者之间的耦合。 命令执行之前在执行对象中传入接受者。主要目的相互之间的解耦。简单而言分为三个对象  
* 发起者：发出调用命令即可，具体如何执行，谁执行并不需要清楚。
* 接受者：有对应的接口处理不同的命令，至于命令是什么，谁发出的，不用关心
* 命令对象：上面讲发起者和接受者分开了，二者之间需要个连接桥梁。这就是命令对象。命令对象接受发送者的调用，然后调用接受者的相应接口。  

```js
// 发出命令者
let setCommand = function(btn, fn) {
    btn.onClick = function() {
        fn()
    }
} 

// 执行命令者  
let doSth = {
    add: function() {
        console.log('添加') 
    },
    del: function() {
        console.log('删除')
    } 
}

// 命令对象
let commandObj = function(reciver) {
    return function() {
        reciver.add()
    }
}

setCommand(button, commandObj(doSth))
``` 

优点：  
1. 降低对象之间的耦合性  
2. 新的命令可以很容易加入到系统之中  
3. 调用同一方法实现不同的功能  


　　