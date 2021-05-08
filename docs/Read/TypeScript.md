---
title: Typescript
---

## 安装

```js
yarn global add typescript
```

## 数据类型

> 数据类型：布尔类型（boolean），数字类型（number），字符串类型（string），元祖类型（tuple），枚举类型（enum），任意类型（any），null，undefined，void 类型，never 类型。

### 字符串

```ts
let str: string = '你好';
```

### 数字

```ts
let num: number = 123;
```

### 布尔类型

```ts
let flag: boolean = false;
```

### 数组

```ts
let arr: number[] = [1, 12, 3, 5];
let arr: string[] = ['js', 'ts'];
let arr: Array<number> = [1, 12, 3, 5];
let arr: Array<string> = ['js', 'ts'];
let arr: any[] = [1, 2, '我', 'hello', true];
let arr: Array<any> = [1, 2, '我', 'hello', true];
```

### 元祖（tuple）

> 属于数组的一种，可以指定数组里面每一个元素的类型。

```ts
let arr: [number, string, boolean] = [1, 'js', true]; // 必须和前面的类型一一对应
```

### 枚举类型

> 事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法成为枚举方法，用这种方法定义的类型称枚举类型。

```ts
enum 枚举值 {
    标识符 = 整型常数,
    标识符 = 整型常数,
    ...
    标识符 = 整型常数
}

// flag  成功状态为 1 错误状态为 -1
enum Flag { success = 1, error = -1 }
let f: Flag = Flag.success
console.log(f) // 1

// 如若没有给出标识符具体的值，则默认值为索引值
enum Color { red, blue, yellow }
let c: Color = Color.yellow
console.log(c) // 2

// 如若中间某个标识符有赋值，则其后面的标识符 的值会在它的基础上加 1
enum Color { red, blue = 5, yellow }
let r: Color = Color.red
let b: Color = Color.blue
let y: Color = Color.yellow
console.log(r) // 0
console.log(b) // 5
console.log(y) // 6
```

### 任意类型（any）

> 可以用来定义 object 类型，也可以定义拥有几种类型或者不确定的类型。

```ts
// 此时的 oBox 是个 object 对象，但是在 TS 中基本类型没有 object，此时就可以用any 类型来进行定义
let oBox: any = document.getElementById('box');
oBox.style.color = 'red';
```

### null 和 undefined

> 是其他类型（never 类型）的子类型。

```ts
// 指定一个变量为 undefined类型
let num: undefined;
// 指定一个变量可以为 number 类型，也可以为 undefined类型
let num: number | undefined;
// 指定一个变量可以为 number 类型，也可以为 undefined类型，也可以为 null 类型
let num: number | undefined | null;
```

### void 类型

> 表示没有任何类型，一般用来定义方法没有返回值。

```ts
// 有返回值
function getNum(): number {
    return 123;
}

// 无返回值
function run(): void {
    console.log('跑步');
}
```

### never 类型，其他类型

> 包括 null 和 undefined，表示从不会出现的值，这意味着声明 never 的变量只能被 never 类型赋值。

```ts
let a: undefined;
a = 123; // 报错
a = undefined; // 正确

let b: null;
b = '你好'; // 报错
b = null; // 正确

let c: never;
c = 123; // 错误
c = (() => {
    throw new Error('错误');
})(); // 正确，因为是其他类型
```

## 函数

### 定义方法

```ts
// 匿名函数定义
let notice = function(): string {
    return '通知'
}

// 函数声明法
function notice(): string {
    return '通知
}
```

### 传参

```ts
let getInfo = function(name: string, age: number): string {
    return `名字${name}，年龄${age}`;
};
function getInfo(name: string, age: number): string {
    return `名字${name}，年龄${age}`;
}
```

### 可选参数

> 可选参数必须配置到参数的尾部，不能放在必选参数的前面。

```ts
// 当 age 参数可传可不传时
function getInfo(name: string, age?: number): string {
    return age ? `名字${name}，年龄${age}` : `名字${name}`;
}
```

### 默认参数

> 默认参数其实就是可选参数的一种

```ts
// 设置 age 默认值为 28，同时此参数也是可传可不传
function getInfo(name: string, age: number = 17): string {
    return age ? `名字${name}，年龄${age}` : `名字${name}`;
}
```

### 剩余参数

```ts
// 求和
function sum(...result: number[]): number {
    let res = 0;
    for (let i = 0; i < result.length; i++) {
        res += result[i];
    }
    return sum;
}

function sum(a: number, b: number, ...result: number[]): number {
    let res = a + b;
    for (let i = 0; i < result.length; i++) {
        res += result[i];
    }
    return sum;
}
```

### 函数重载

> js 中是没有函数重载的，出现同名方法，后面的方法会覆盖前面的方法；在 java 中函数重载是指两个或两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况。ts 中的重载是通过为同一个函数提供多个函数类型定义，根据参数来判断调用哪一种方法。

```ts
// 定义函数
function getInfo(name: string): string;
function getInfo(age: number): string;

function getInfo(value: any): any {
    // 根据传入的参数来判断调哪种方法，如果传入参数不在定义范围类型内，则报错
    if (typeof value === 'string') {
        return 'my name is' + value;
    } else {
        return 'my age is' + age;
    }
}
```

## 类

### 类的定义

```ts
// es5
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function() {
        console.log(this.name + '在跑步');
    };
}

// ts
class Person {
    name: string; // 定义属性，前面省略了 public 关键字
    age: number;

    constructor(name: string, age: number) {
        // 构造函数，实例化类时触发的方法
        this.name = name;
        this.age = age;
    }

    run(): void {
        console.log(this.name + '在跑步');
    }
}
```

### 实现继承

> 关键字 extends, super

```ts
class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    run(): void {
        console.log(this.name + '在跑步');
    }
}

class Teacher extends Person {
    public job: string;
    constructor(name: string, age: number, job: string) {
        super(name, age); // 初始化父类的构造函数
        this.job = job;
    }

    work(): void {
        console.log(`${this.name}的职业是${this.job}`);
    }
}

let s = new Teacher('王五', 30, '老师');
s.run();
```

### 修饰符

-   public: 公有，在当前类，子类，以及类外部都可以访问
-   protected: 保护，在当前类，子类可以访问，类外部无法访问
-   private: 私有，在当前类可以访问，子类以及类外部无法访问

### 静态属性和方法

> 关键字 static，静态方法中不能访问类的属性

```ts
// ES5
function Person(name) {
    this.name = name; // 实例属性
    this.run = function() {}; // 实例方法
}
Person.name = '周杰伦'; // 静态属性
Person.run = function() {}; // 静态方法

let p = new Person();
p.run(); // 调用实例方法
Person.run(); // 调用静态方法

// TS
class Person {
    public name: string;
    static name = '周杰伦'; // 静态属性
    constructor(name: string) {
        this.name = name;
    }
    run() {}
    static run() {} // 静态方法
}

let p = new Person();
p.run(); // 调用实例方法
Person.run(); // 调用静态方法
```

### 多态

> 属于继承，父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现

```ts
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {
        // 子类具体吃什么，怎么操作不知道，由继承它的子类去实现，每个子类不一样
        console.log('吃东西的方法');
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    eat() {
        return this.name + '吃骨头';
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    eat() {
        return this.name + '吃老鼠';
    }
}
```

### 抽象类和方法

> 是用来定义其他类继承的基类，不能直接被实例化。实际上就是用来定义标准（定义这个类要求它的子类继承的标准）。用关键字 abstract 来定义，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象方法只能出现在抽象类中。

  
  比如 Animal 类要求它的子类必须包含 eat 方法，则需将 Animal 定义为抽象类，eat 方法定义为抽象方法。

```ts
// 抽象类里面也可以有实例方法，实例属性，这些是不要求子类必须
abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any;
    more() {
        console.log('非抽象类方法，子类可以不实现');
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    // 抽象类的子类必须实现抽象类里面的抽象方法
    eat() {
        return this.name + '吃骨头';
    }
}
```
