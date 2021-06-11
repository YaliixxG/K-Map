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

## 接口

> 在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范。在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类方法的实现细节，它只规定这批类里必须提供某些方法。提供这些方法的类就可以满足实际需要。

接口类型：

-   属性
-   函数
-   可索引
-   类

### 属性接口

> 对参数对象的约束。关键字 interface

```ts
// 定义接口
interface 接口名称 {
   ... ;
   ... ; // 分号结束
}
```

调用传参时，接口里面定义的参数可以定义为必传和非必传

```ts
interface FullName {
    firstName: string;
    secondName: string;
    age?: number; // 可选属性，参数非必传
    sex: string;
}

function printName(name: FullName) {
    console.log(name.firstName, name.secondName);
}

// 传入参数必须严格按照接口定义的规范来，参数顺序可以不一样
let params = {
    firstName: '张',
    secondName: '三',
    age: 20, // 此为非必传参数，可以不传
    sex: '女'
};
printName(params);
```

### 函数型接口

```ts
interface getNumber {
    (cur: number, next: number): number;
}

const getSum: getNumber = function(cur: number, next: number): number {
    return cur + next;
};

getSum(1, 2);
```

### 可索引接口（不常用）

> 对数组，对象的约束

```ts
// 数组的 key 值为 number，对象的 key 值为 string
interface userArr {
    // key 值为 number, value 值为 string
    [index: number]: string;
}

const arr = ['123', 'js', 'ts'];

interface userObj {
    // key 值为 string, value 值为 string
    [index: string]: string;
}

const obj = { name: '张三', sex: 'man' };
```

### 类类型接口

> 与抽象类接口相似，是对类的约束。关键字 implements，意为实现接口，接口定义的准则必须全部实现，否则报错

```ts
interface Animal {
    name: string;
    eat(str: string): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + '吃狗粮');
    }
}

let dog = new Dog('琪琪');
dog.eat();

class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat(food: string) {
        console.log(this.name + '吃' + food);
    }
}

let cat = new Cat('老王');
cat.eat('猫粮');
```

### 接口继承

> 接口 B 继承接口 A 的话，接口 B 被实现时，接口 A 的部分也必须全部实现。

```ts
interface Person {
    eat(str: string): void;
}

interface Someone extends Person {
    work(str: string): void;
}

// eat 方法，work 方法全部都要有
class Teacher implements Someone {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '喜欢喝茶颜悦色');
    }
    work(job: string) {
        console.log(this.name + '的职业是' + job);
    }
}

let teacher = new Teacher('周杰伦');
teacher.eat();
teacher.work('老师');
```

## 泛型

### 泛型的定义

> 解决类、接口、方法的复用性，以及对不特定数据类型的支持。一般用大写字母 T 来表示泛型

### 泛型函数

```ts
//  这表示传入的类型由具体调用时确定
function getInfo<T>(value: T): T {
    return value;
}

getInfo<number>(123);

function getData<T>(value: T): string {
    return '123';
}

getData<number>(123);
```

### 泛型类

```ts
// 最小值类
// 参数类型明确定义：要求传入参数以及返回值为数字类型
class MinClass {
    public list: number[] = [];
    add(value: number): void {
        this.list.push(value);
    }
    getMin(): number {
        let minNum: number = this.list[0];
        for (let i = 1; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

let m = new MinClass();

m.add(33);
m.add(8);
m.add(3);
m.add(4);
m.getMin();

// 参数类型不明确定义：要求传入参数及返回值为数字或者字符串类型;
class MinClass<T> {
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value);
    }
    getMin(): T {
        let minNum: T = this.list[0];
        for (let i = 1; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let m = new MinClass<number>(); // 实例化类，指定 T 代表的类型

m.add(33);
m.add(8);
m.add(3);
m.add(4);
console.log(m.getMin());

let s = new MinClass<string>();

s.add('h');
s.add('d');
s.add('i');
s.add('l');
s.getMin();

// 类也可以当参数传入泛型类
// 定义一个泛型类
class MysqlDB<T> {
    add(info: T): boolean {
        console.log(info);
        return true;
    }
}

// 定义传入的参数类
class User {
    name: string | undefined;
    age: number | undefined;
    // constructor(name: string | undefined, age: number | undefined) {
    //     this.name = name;
    //     this.age = age;
    // }

    // 如果想传入 JSON 对象的话
    constructor(params: { name: string | undefined; age: number | undefined }) {
        this.name = params.name;
        this.age = params.age;
    }
}

// let u = new User('周杰伦', 38);
let u = new User({ name: '周杰伦', age: 38 });

// 用 User 来校验传入的是不是 User 类，类当做传入参数的校验，作用等同于上面<string> <number>
let mysql = new MysqlDB<User>();
mysql.add(u);
```

### 泛型接口

```ts
// 写法一
interface configFn {
    <T>(value: T): T; // 传入的参数与返回值都是不确定的类型
}

let getName: configFn = function<T>(value: T): T {
    return value;
};

getName('孙燕姿');

// 写法二
interface configFn<T> {
    (value: T): T;
}

function getName<T>(value: T): T {
    return value;
}

let doGetName: configFn<string> = getName;

doGetName('孙燕姿');
```

> 当一个类实现泛型接口时，这个类也一定是泛型类

```ts
class 类名<T> implements 接口名称<T> {
    // doSth
}
```

## 命名空间

> 关键字 namespace。用 namespace 加在自己代码的最外部，防止与他人在项目中类，方法，变量命名冲突。内部的类、方法、变量名通过 export 暴露出来。

```ts
namespace Jay {
    export class A {
        ....
    }
    export class B {
        ...
    }
}

// 调用
let Ja = new Jay.A()
let Jb = new Jay.B()
```

命名空间也可以通过`export`暴露出去，再通过`import` 引入

## 装饰器

> 一种特殊类型的声明。它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。通俗的说法就是一个方法，可以注入到类、方法、属性参数上来扩展其功能。

### 类装饰器

一、普通装饰器（无传参，默认传参为当前装饰的类）

```ts
function logInit(target: any) {
    console.log(target); // 打印出来的为当前类 Init

    // 扩展类的属性
    target.prototype.name = '扩展属性 --- name';

    // 扩展类的方法
    target.prototype.loading = function() {
        console.log('扩展类的方法 --- loading');
    };
}

@logInit // 没有传入参数，默认传参为当前装饰的类
class Init {
    constructor() {}
}

let init: any = new Init();
console.log(init.name); // 扩展属性 --- name
init.loading(); // 扩展类的方法 --- loading
```

二、装饰器工厂（可传参）

```ts
function logInit(params: string) {
    return function(target: any) {
        console.log('传过来的参数 --- params', params); // 周杰伦
        console.log('默认传过来的当前装饰类 --- target', target); // 当前装饰类 Init

        // 扩展类的属性
        target.prototype.name = '扩展属性 --- name';

        // 扩展类的方法
        target.prototype.loading = function() {
            console.log('扩展类的方法 --- loading');
        };
    };
}

@logInit('周杰伦')
class Init {
    constructor() {}
}

let init: any = new Init();
console.log(init.name); // 扩展属性 --- name
init.loading(); // 扩展类的方法 --- loading
```

三、重载当前装饰类（修改当前装饰类）

> 关键语句 return class extends xxx (xxx 表示为传过来的类)

```ts
function logInit(target: any) {
    console.log('默认传过来的当前装饰类 --- target', target); // 当前装饰类 Init
    return class extends target {
        // 重载类，通过继承传过来的装饰类来重写，修改类的属性，方法
        name: string = '重载修改后的 name 属性';
        loading() {
            console.log('重载修噶后的 loading 方法');
        }
    };
}

@logInit
class Init {
    public name: string | undefined;
    constructor() {
        this.name = 'name 属性';
    }
    loading() {
        console.log('loading 方法');
    }
}

let init = new Init();
console.log(init.name); // 重载修改后的 name 属性
init.loading(); // 重载修噶后的 loading 方法
```

### 属性装饰器

> 关键语句 return function(参数一, 参数二)

-   参数一：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
-   参数二：被装饰的属性名

```ts
function logProperty(params: any) {
    console.log('传过来的属性参数值 --- params', params); // 八度空间 | 43
    return function(target: any, attr: any) {
        console.log(target);
        console.log('被装饰的属性 --- attr', attr); // 当前装饰属性 name | age

        target[attr] = params; // 修改属性值
    };
}

class Init {
    @logProperty('八度空间') // 需要装饰哪个属性就写在该属性的上面
    name: string | undefined;
    @logProperty(43) // 需要装饰哪个属性就写在该属性的上面
    age: number | undefined;
    constructor() {}
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
}

let init = new Init();
init.getName(); // 八度空间
init.getAge(); // 43
```

### 方法装饰器

> 应用到方法的属性描述符上，可以用来监视，修改，替换方法定义。关键句 return function(参数一, 参数二, 参数三)

-   参数一：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
-   参数二： 被装饰的方法名
-   参数三：被装饰的方法的属性描述符，此参数下的 value 属性即为被装饰的方法函数

```ts
function logFn(params: any) {
    return function(target: any, fnName: any, desc: any) {
        console.log('方法装饰器传来的参数', params) // xxxxx
        console.log(' 参数一', target)
        console.log('参数二', fnName)
        console.log('参数三', desc)

        // 替换方法
        desc.value = function() {
            console.log('这是替换此方法的操作，不会执行原方法printInfo的操作')
        }

        // 修改方法
        // 1. 保存原方法
        let oMethods = desc.value
        desc.value = function(...args: any[]) { // 此参数为实例方法调用时传入的参数
            console.log('这是修改此方法的操作，执行完后会继续执行原方法printInfo的操作')

            // 2. 调用方法，将参数传入
            oMethods.apply(this, args)
        }

        // 扩展方法
        target.add = function() {
            console.log('扩展方法')
        }

    }
}

class Init {
    constructor() {}
    @logFn('xxxxx')
    printInfo(...args: any[]) {
        console.log('原方法的打印信息')
    }
}

let init:any = new Init()

init.printInfo()
init.add()
```
### 方法参数装饰器  
不常用，略。

### 装饰器执行顺序  
属性装饰器 => 方法装饰器 => 方法参数装饰器 => 类装饰器  

如果有多个同类型的装饰器时，执行顺序是由`由后往前`执行
