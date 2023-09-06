---
title: 有趣的写法
---

# <font color="#ddc933">有趣的写法</font>

### 判断两个数字的符号是否相同

```js
(3 ^ -5) >= 0; // false 符号不同
(-3 ^ -5) >= 0; // true 符号相同
```

### 判断一个数 n 是不是 2 的整数幂

```js
const isPowerOf2 = n => (n & (n - 1)) === 0;

isPowerOf2(3); // false
isPowerOf2(4); // true
isPowerOf2(8); // true
isPowerOf2(16); // true
isPowerOf2(21); // false
```

### 倒序遍历简写

```js
for(let i = arr.length - 1; i >= 0; i--) {}

// 简写
for(let i = arr.length; i--) {}
```

### 画评分系统星星

```js
const rate = r => '★★★★★☆☆☆☆☆'.slice(5 - r, 10 - r);

rate(0); // ☆☆☆☆☆
rate(1); // ★☆☆☆☆
rate(2); // ★★☆☆☆
rate(3); // ★★★☆☆
rate(4); // ★★★★☆
rate(5); // ★★★★★
```

### 自动搜索错误 O.O

```js
try {
    // any code
} catch (e) {
    location.href = `https://stackoverflow.com/search?q=js+${e.message}`;
}
```

### 来回切换 1 ，0

```js
let toggle = 0;

toggle ^= 1; // 1
toggle ^= 1; // 0
toggle ^= 1; // 1
toggle ^= 1; // 0
```

### 获取数字整数部分

```js
~~3.14; // 3
3.14 >> 0; // 3
3.14 << 0; // 3
3.14 | 0; // 3
```

### 求一个数 与 2 的 N 次幂的积

```js
1 << 2; // 4；相当于 1 * (2 ** 2)
3 << 5; // 96; 相当于 3 * (2 ** 5)
6 << n; // 6 * (2 ** n)
```
