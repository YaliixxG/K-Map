---
title: OP 面向对象
---
# 面向对象

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