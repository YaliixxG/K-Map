---
title: 浅拷贝， 深拷贝
---

# <font color="#99EEEB">浅拷贝， 深拷贝</font>

### 拷贝

拷贝的含义是创建一个对象的副本，存在另外一个地址。

简单看个例子：

```js
let obj = {
    name: '周杰伦',
    age: 18
};
let other = obj;

other.name = '孙燕姿';
console.log(obj); // {name: '孙燕姿', age: 18}
console.log(other); // {name: '孙燕姿', age: 18}
```

我们发现改变`other`的同时，原对象`obj`也改变了。这种仅仅只是引用，两个对象都指向同一个地址，当一个改变时，另外一个也会改变。

### 浅拷贝

对于数组，我们可以`concat()`，`slice()`来进行拷贝。

```js
let arr = [1, '2', '4'];
let arr1 = arr.concat();
let arr2 = arr.slice();

console.log(arr1); // [1, '2', '4']
console.log(arr2); // [1, '2', '4']

arr1[0] = '44';
console.log(arr1); // ['44', '2', '4']
console.log(arr); // [1, '2', '4']

arr2[1] = '88';
console.log(arr2); // [1, '88', '4']
console.log(arr); // [1, '2', '4']
```

可以看到，改变新数组，原数组也没有改变。接下来，我们将数组里面放置个对象，去改变对象里面的属性，看下会发生什么？

```js
let arr = [1, '2', { a: 1 }];
let new_arr = arr.concat();

new_arr[2].a = 44;
console.log(new_arr); // [1, '2', { a: 44 }]
console.log(arr); // [1, '2', { a: 44 }]
```

改变`new_arr`中对象的属性，发现原对象也一起改变了。  
`concat()`，`slice()`虽然可以很方便的拷贝，但是遇到稍微非简单类型的值就会出现改变原对象的情况。

所以这是简单的拷贝，也就是浅拷贝。

### 深拷贝

深拷贝有一个超级简单的方法 `JSON.parse(JSON.stringify(obj))`，我对于它的理解，就像是将一个`3D`的数据结构，直接通过字符串化降纬成`2D`，再反字符串还原回来。但是它也有一个缺点，无法拷贝函数。

看下例子：

```js
let obj = {
    name: '周杰伦',
    age: 18,
    album: ['Jay', '范特西', '八度空间', '叶惠美', { other: '我很忙' }],
    awards: [['最佳专辑', '最佳歌手'], ['最佳创作'], { other: '其他奖项' }],
    family: {
        mum: {
            name: '叶惠美',
            age: '70'
        },
        dad: {
            name: '某某某',
            age: '72'
        }
    },
    getSong: function(song) {
        console.log('我在听' + song);
    }
};

let new_obj = JSON.parse(JSON.stringify(obj));

console.log(new_obj);
// {
//   name: '周杰伦',
//   age: 18,
//   album: [ 'Jay', '范特西', '八度空间', '叶惠美', { other: '我很忙' } ],
//   awards: [ [ '最佳专辑', '最佳歌手' ], [ '最佳创作' ], { other: '其他奖项' } ],
//   family: { mum: { name: '叶惠美', age: '70' }, dad: { name: '某某某', age: '72' } }
// }
```

打印出来，可以看到`new_obj`里并没有`getSong`这个函数，所以`JSON.parse(JSON.stringify(obj))`方法虽然好用，但是对于原对象里面的函数，束手无策。

那我们就不偷懒，遍历整个对象，将其的值一一取出，依次复制给新对象。

关于遍历对象，我们需要注意的是，我们只需要复制原对象的自有属性，而不需要去理会原型链上的属性。如果用`for in`则会去查找原型链上的属性，此时我们可以用`hasOwnProperty`来判断是否是自由属性。

为了更偷懒，我直接用`Object.entries()`来进行遍历，它只会遍历该对象的自由属性，不会往上查找原型链。

另外简单类型，我们可以直接通过 obj[key] = value 来赋值，遇到引用类型，我们可以通过递归 deepCopy 函数来处理。

```js
let obj = {
    name: '周杰伦',
    age: 18,
    album: ['Jay', '范特西', '八度空间', '叶惠美', { other: '我很忙' }],
    awards: [['最佳专辑', '最佳歌手'], ['最佳创作'], { other: '其他奖项' }],
    family: {
        mum: {
            name: '叶惠美',
            age: '70'
        },
        dad: {
            name: '某某某',
            age: '72'
        }
    },
    getSong: function(song) {
        console.log('我在听' + song);
    }
};

function getDataType(data) {
    return Object.prototype.toString.call(data).slice(-8, 1);
}

function deepCopy(obj) {
    if (typeof obj !== 'object') return;

    // 错误写法
    // let type = getDataType(obj)
    // let new_obj = type === 'Array' ? [] : {};
    // 若这里用 getDataType(obj)来判断是否是数组，会出现更改原对象数组中的对象元素时，拷贝的对象中数据也变化的问题
    let new_obj = obj instanceof Array ? [] : {};

    for (let [key, value] of Object.entries(obj)) {
        // 错误写法
        // new_obj[key] = typeof value === 'object' ? deepCopy(value) : value;
        // 若这里用 typeof value === 'object 来判断是不是对象或数组类型时，是不合适的。因为遇到 new String('1')，或者 new Number(2)这种对象包装的基本类型，则会出现直接成{}的情况
        new_obj[key] = ['Array', 'Object'].includes(vType)
            ? deepCopy(value)
            : value;
    }
    return new_obj;
}

let new_obj = deepCopy(obj);
console.log(new_obj);
```

至此，深拷贝完成。
