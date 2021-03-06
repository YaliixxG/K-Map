---
title: OP 面向对象
---

<!--
 * @Description: 面向对象
 * @Date: 2019-08-01 20:31:39
 * @LastEditTime: 2019-10-09 20:41:32
 -->
 
# <font color="#2F4F4F">面向对象</font>

### 什么是对象？  
> 万物皆对象，对象是具体物体，具有属性和行为，把很多东西封装成一个整体  

例如：张三就是一个对象，属性：年龄，名字...,行为：吃饭，睡觉等等。  
例如：DOM对象：属性：innerHTML,innerTEXT,style... 行为： removeChild(),appendChild()等等。  

### 面向过程和面向对象  
> 两者都是一种解题的思路  
* 面向过程：比较着重于解决问题按步骤一个接一个来的过程  
* 面向对象：关注的是解决问题所需要的对象  

举例：  
“把墙刷了后洗干净刷子”  

面向过程：那桶子，刷子，兑油漆，刷墙，洗桶和刷子。相当于一个人做完全部的活。
面向过程：这里面包含了两个技能：一个是刷墙，一个是洗刷子。把这两个技能实现后，找任何一个对象都能完成这个工作。  

所以总体来说*面向对象是面向过程的一种封装*  

### 优点  
面向对象编程：  
* 更方便  
* 复用性更好  
* 高内聚和低耦合  
* 冗余（重复的东西） ==> 封装（提取相同的部分作为函数体，提取不同的部分作为参数）  

### 自定义构造函数  
* 首字母大写（区别于普通函数）
* 创建对象的过程是由 new 关键字实现
* 在构造函数内部会自动创建新对象并赋值this指针  
* 自动返回创建出来的对象  
```js 
// 构造函数 
function Person(name, age) {
    //通过new出的对象，函数内部会自动创建新对象，并赋值this指针  
    // var this = new Object()  这一步是自动做的，不需要我们自己写  
    this.name = name
    this.age = age    

    // return this  这也是自动做的，自动返回创建出来的对象
}

var p = new Person('周杰伦', 20)

```  

关于构造函数内部 `return` 注意： 
1. 如果不写`return this` 或者写`return this`，都直接返回默认的新对象，因为函数本身就做了这一步  
2. 如果返回*基本的数据类型*，直接返回默认的新对象  
3. 如果返回的是对象，则直接把这个对象返回到外界  

### 构造函数终极优化写法    

这是一个终极的写法，但是很多时候还是根据需求来改变
``` js
    function Dog( option ) {
        this._init( option )
    }

    Dog.prototype = {

        _init: function( option ) {
            this.name = option.name
            this.age = option.age
        }, 

        eat: function(sth) {
            console.log(this.name + '吃' + sth)
        },

        run: function(where) {
            console.log(this.name + '跑' + where)
        }

    }
```

### 面向对象的三个特性

* 封装：也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。
* 继承：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
* 多态

### 面向对象 - 继承  

#### 内置对象类型判断 
平常我们判断对象类型都是用 `typeof`，`toString()` 等等，但是他们对于内置对象的类型判断并不准确。  
```js
let arr = [1, 2, 3],
    date = new Date();  

    // 利用`typeof`来判断类型的话
    console.log(typeof arr) // object
    console.log(typeof date) //object  
```  
如上，会发现判断出来都是`object`类型，但是我们想得到更加准确的类型判断，拿到准确的构造函数类型。  

<strong>`constructor`</strong> 就可以来帮我们准确的拿到构造函数的类型名称。  

```js
let arr = [1, 2, 3],
    date = new Date();  

    // 利用`typeof`来判断类型的话
    console.log(arr.constructor.name) // Array
    console.log(date.constructor.name) // Date  
```  

<strong>`Object.prototype.toString.call()`</strong> 可以判断最原始的类型是哪一个，然后构造函数类型的名称是什么。

```js
let arr = [1, 2, 3],
    date = new Date();  

    // 利用`typeof`来判断类型的话
    console.log(Object.prototype.toString.call(arr)) // [Object, Array]
    console.log(Object.prototype.toString.call(date)) // [Object, Date]
``` 

总得来说：  
    1. `typeof` 或者 `toString()`：可以判断是是否是一个对象，或者其它基础类型  
    2. `constructor`：可以用来判断内置对象的构造函数类型  
    3. `Object.prototype.toString.call()`：这种可以用来判断老祖宗是不是object  

#### 自定义对象类型判断  

```js 
function Person(name, age) {
    // this = new Object()
    this.name = name
    this.age = age
}

function Dog(name, age) {
    // this = new Object()
    this.name = name
    this.age = age
}

function Cat(name, age) {
    // this = new Object()
    this.name = name
    this.age = age
}

let P = new Person('周杰伦', 18)
let D = new Dog('司司', 18)
let C = new Cat('老王', 8)  
```  
如上自定义的构造函数对象类型，如果用`typeof` 或者 `toString()`，`Object.prototype.toString.call()`来进行判断的话，会发现，得出的类型都是 `object`，无法得到真实类型。原因是，在创建构造函数时，系统内部自动帮你实行了这一步： 
```js
 this = new Object()
```  
所以如果要拿到真实类型，只能用`constructor`，会得到`Person`，`Dog`，`Cat`。
