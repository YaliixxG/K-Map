---
title: Array 数组的“新鲜"方法
---  

### 1. 迭代器 @@iterator
数组的迭代器方法需要通过`Symbol.iterator`来访问。  

可以使用for...of循环进行迭代
```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
// 您的浏览器必须支持for...of循环
// 以及let —— 将变量作用域限定在 for 循环中
for (let letter of eArr) {
  console.log(letter);
}
```  
或者  
```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```  
数组中所有值都迭代完之后，`iterator.next().value`会返回`undefined`   

`Iterator`的遍历过程是这样的：

* 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

* 第一次调用指针对象的`next`方法，可以将指针指向数据结构的第一个成员。

* 第二次调用指针对象的`next`方法，指针就指向数据结构的第二个成员。

* 不断调用指针对象的`next`方法，直到它指向数据结构的结束位置。

每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含`value`和`done`两个属性的对象。其中，`value`属性是当前成员的值，`done`属性是一个布尔值，表示遍历是否结束。  

一个对象要被`for…of`遍历，必须部署`Iterator`，或者在其原型上部署`Iterator`，普通对象并没有部署`Iterator`，如果用`for…of`遍历，会抛出`“not iterable”`错误

### 2. entries、keys、values  
用于遍历数组。它们都返回一个遍历器对象（`Iterator`），可以用`for...of`循环进行遍历，唯一的区别是`keys()`方法是对键名的遍历、`values()`方法是对键值的遍历，`entries()`方法是对键值对的遍历  

可以使用for...of循环进行迭代
```js
for (let index of ['e', 's'].keys()) {
console.log(index);
}
// 0
// 1

for (let elem of ['e', 's'].values()) {
console.log(elem);
}
// 'e'
// 's'

for (let [index, elem] of ['e', 's'].entries()) {
console.log(index, elem);
}
// 0 'e'
// 1 's'
```

如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
```js  
let letter = ['r', 'g', 'b'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'r']
console.log(entries.next().value); // [1, 'g']
console.log(entries.next().value); // [2, 'b']
```

### 3. from  
根据已有的数组，通过它传入的参数来创建一个新数组。

复制arr这个数组  
```js
let arr1 = Array.from(arr)
```

