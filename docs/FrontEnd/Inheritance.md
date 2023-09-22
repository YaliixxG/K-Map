---
title: 继承
---

# <font color="#00F0CD">继承</font>

### 概念

一、继承分为三个类：超类型，父类型，子类型。
例如：`动物`，`狗`，`哈士奇`，对于`哈士奇`来说`动物`就是超类型，`狗`就是父类型，`哈士奇`就是子类型。对于`狗`来说，`动物`是父类型，`哈士奇`是子类型。

二、让子类继承父类的资源

### 继承的方式

原型链继承、借用构造函数继承、组合继承、原型式继承、寄生式继承、寄生式组合继承、拷贝属性继承

### 继承的意义

优点： 减少代码冗余，方便统一操作  
弊端： 耦合性比较强

### 原型链继承

> 每个函数都能构造出一个对象，而这个对象的一个属性`__proto__`就是指向这个函数的原型对象；而原型对象本质也是一个对象，也是由另一个构造函数构造出来的，也指向那个构造函数的原型对象。以上形成一个链式结构，就称为原型链。

-   我们需要牢记两点：①**proto**和 constructor 属性是对象所独有的；② prototype 属性是函数所独有的，因为函数也是一种对象，所以函数也拥有**proto**和 constructor 属性。
-   **proto**  属性，它是对象所独有的，可以看到**proto**属性都是由一个对象指向一个对象，即指向它们的原型对象（也可以理解为父对象）**proto**属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的**proto**属性所指向的那个对象（父对象）里找，一直找，直到**proto**属性的终点 null，再往上找就相当于在 null 上取值，会报错。通过**proto**属性将对象连接起来的这条链路即我们所谓的原型链。
-   prototype 属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，即 f1.**proto** === Foo.prototype。prototype 属性，别忘了一点，就是我们前面提到要牢记的两点中的第二点，它是函数所独有的，它是从一个函数指向一个对象。它的含义是函数的原型对象
-   constructor 属性的含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数都指向 Function。constructor 属性也是对象才拥有的，它是从一个对象指向一个函数，含义就是指向该对象的构造函数，
    画出数组对象完整原型链：  
    ![ArrayPrototype](../.vuepress/public/imgs/ArrayPrototype.png)

### 寄生组合式继承 = 原型链继承 + 构造函数继承 + 寄生式继承

按照下图的要求，手写继承：

![parasitic](../.vuepress/public/imgs/parasitic.jpg)

```js
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.eat = function() {
    console.log('Animal => eat', this.name, this.age);
};

Animal.prototype.run = function() {
    console.log('Animal => run', this.name, this.age);
};

function Person(job, name, age) {
    // 构造函数继承：借助父类构造函数，将父类构造函数中的属性继承过来，记住一定要写在最上面，否则下方的子类属性`job`，将会在修改时被覆盖
    Animal.call(this, name, age);
    this.job = job;
}

/** 
寄生组合式继承 ===>
原型链 + 寄生方式的继承：由于上面已经继承了父类的属性，此时需要继承父类原型对象上面的方法，
仅仅用原型链的继承方式，`Person.prototype = new Animal()`，会导致重复继承属性
的问题。所以需要创建一个构造函数`Temp1`来只继承父类的原型对象上面的方法，然后再将子
类的原型对象，利用原型链继承，继承`Temp1`，然后再将`Temp1`沟造出来的实例对象的
`constructor`属性指向子类构造函数
*/
function Temp1() {}
Temp1.prototype = Animal.prototype;
const personProtoType = new Temp1(); // 原型链继承(被继承对象的原型对象指向父级的实例)，继承后此时需要把personProtoType当做 Person 的原型对象来理解
personProtoType.constructor = Person; // 既然是 Person 的原型对象了，所以指向不能错，需完善指向
Person.prototype = personProtoType; // 完善指向

// 注意！！！！！！！！！！！ 子类的原型对象一定要写在继承后，否则将会修改被覆盖，找不到此方法
Person.prototype.jump = function() {
    console.log('Person => jump', this.name, this.age, this.job);
};

function Student(className, job, name, age) {
    Person.call(this, job, name, age);
    this.className = className;
}

function Temp2() {}
Temp2.prototype = Person.prototype;
const studentProtoType = new Temp2();
studentProtoType.constructor = Student;
Student.prototype = studentProtoType;

Student.prototype.study = function() {
    console.log(
        'Student => study',
        this.name,
        this.age,
        this.job,
        this.className
    );
};

const stu = new Student('人类', '上班', '张三', '17');
stu.eat();
stu.jump();
stu.study();
```

### ES6 类的继承

```js
class A {
    // 类似对象中的构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /** 
    静态写法 :
    1. 有 static关键字，表明该方法是一个静态方法
    2. 需要通过类名来调用，而不是在实例 ( this )上调用
    3. 如果使用this调用，或者在该方法中使用this。均会出现异常
    4. 静态方法可以和非静态方法重名 ( 不推荐这样 )
    5. 父类的静态方法，可以被子类继承
    */

    // 静态属性()
    static hello = '你好';

    // 静态方法
    static say() {
        console.log('say');
    }

    // 动态方法
    getName() {
        console.log('name', this.name);
    }
}

class B extends A {
    constructor(job, name, age) {
        // 类似于 A.call(this, name, age), 这里是拿到父类的 this
        super(name, age);
        this.job = job;
    }

    getJob() {
        console.log('job', this.job);
    }

    getAge() {
        console.log('age', this.age);
    }

    getNameFarther() {
        console.log('name', this.name);
    }
}

const b = new B('医生', '天堂', '30');
b.getName();
b.getJob();
b.getAge();
b.getNameFarther();
A.say();
B.say();
console.log(A.hello, B.hello);
b.say(); // 报错，静态方法不能被实例调用，只能被类调用
```
