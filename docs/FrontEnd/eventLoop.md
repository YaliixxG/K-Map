---
title: JS 事件循环
---

# <font color="#FFA500">Javascript 事件循环 </font>

> JS 主线程不断的循环往复的从任务队列中读取任务，执行任务，这中运行机制称为事件循环（event loop）。

### 进程和线程

进程与线程的关系，就好比一个车间（进程）里面拥有多少条生产流水线（线程）。一个车间里面可以拥有多条或者仅仅一条流水线，但是不会一条都没有，否则这个车间没有存在的意义。

### 浏览器

#### 浏览器是多进程还是单进程呢？

老版的浏览器是单进程的，但是现在新版的浏览器大多数都是多进程。可以打开任务管理器查看 chrom 浏览器下，还有许多 chrom 浏览器进程。

#### 浏览器的进程是多线程还是单线程？

浏览器的进程都是多线程的。

### JS 是单线程

#### 验证单线程

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>验证JS单线程</title>
    </head>
    <body>
        <button id="btn">验证点击</button>

        <script>
            let btn = document.getElementById('btn');
            let timer = null;

            btn.onclick = function() {
                clearTimeout(timer);
                let nowTime = Date.now();

                console.log('之前');

                setTimeout(() => {
                    // 如果是多线程，这里应该打印出来的时间差为设置的200毫秒
                    console.log(Date.now() - nowTime);
                }, 200);

                console.log('之后');

                // 创建一个耗时任务
                for (let i = 0; i < 9999999999; i++) {}
            };

            // 打印结果为
            // 之前
            // 之后
            // 11021
        </script>
    </body>
</html>
```  

分析：如果是多线程的话，JS在运行到定时器时，应该会开一个线程来运行，到耗时的循环结构时，应该也会再开一个线程单独运行。但是返回的结果说明，JS是将定时器放到了最后运行，先运行了其他的部分，包括循环，所以由此可见JS为单线程。  

结论：JS为单线程  

### JS是按照什么顺序进行代码执行的？  
在上面的代码中，可以看到会将定时器的代码放到最后执行，那还有哪些是会放到最后执行的呢？是如何划分的呢？ 

### JS代码划分及执行顺序
1. 初始化代码（包括一些特殊代码，设置定时器，绑定监听，网络请求ajax）
2. 回调代码（后面在某个时刻才可能执行回调代码【异步】）   

先执行初始化代码，初始化代码执行完毕，才执行回调代码。

### 为什么JS为单线程，而不改为多线程呢？  
JS的用途主要是用于与用户的互动，以及操作DOM。如果是多线程会带来复杂的同步问题。例如在一个线程中进行删除DOM，却在另一个线程中要求修改这个DOM，这样就会造成很复杂的情况。所以用途决定了JS为单线程。





### 今日头条面试题：

```js
// 如何输出呢？
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('settimeout');
});
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

### 解题：

答：

1. 先看整个代码，执行栈中先执行`console.log('script start')`，在执行中找看有没有可执行的微任务，在下一次渲染页面执行宏任务之前，需要执行完这些微任务。
2. 此时看到 `async1()` 和 `new Promise`。
3. 执行 `async1()`，执行`console.log('async1 start')`，遇到`await async2()` 执行`console.log('async2')`，此时 await 后的代码会加入另一个队列，此时跳出。
4. 执行`new Promise`，执行`console.log('promise1')`，然后`resolve()`立即执行，然后遇到`then`，可以理解为`await`一样，后面的代码会加入另一个队列，此时跳出。
5. 此时发现后面还有`console.log('script end')`，执行。
6. 此时查看微任务还有哪些？ 就是  另一个队列还有排队的两个任务，依次执行`console.log('async1 end')`,`console.log('promise2')`。
7. 最后进行渲染，执行下一个宏任务`console.log('settimeout')`。

所以输出答案是：

```js
'script start';
'async1 start';
'async2';
'promise1';
'script end';
'async1 end';
'promise2';
'settimeout';

```

### 相关概念：

#### JS 任务队列：

-   JS 分为同步任务和异步任务
-   同步任务都在主线程上执行，形成一个执行栈
-   主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
-   一旦执行栈中的所有同步任务执行完毕（此时 JS 引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。

#### 宏任务 (macro)task

浏览器为了能够使得 JS 内部(macro)task 与 DOM 任务能够有序的执行，_会在一个(macro)task 执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染_

主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)

#### 微任务 microtask

可以理解是在当前 task 执行结束后立即执行的任务。也就是说，_在当前 task 任务后，下一个 task 之前，在渲染之前_。

microtask 主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)

#### Promise 和 async 中的立即执行

Promise 中的异步体现在 then 和 catch 中，所以写在 Promise 中的代码是被当做同步任务立即执行的。而在 async/await 中，在出现 await 出现之前，其中的代码也是立即执行的。  
_实际上 await 是一个让出线程的标志_。await 后面的表达式会先执行一遍，_将 await 后面的代码加入到 microtask 中，然后就会跳出整个 async 函数来执行后面的代码_。  
Promise 构造函数是同步执行，而 .then .catch .啥啥的是异步， 而且放到了微队列中，async/await 中，await 前面的是同步，await 后面的是异步，写法上是这样，但是其实是 语法糖，最后还会转为 Promise.then 的形式。

#### 运行顺序

1. 执行一个宏任务（栈中没有就从事件队列中获取）
2. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
3. 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
4. 当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染
5. 渲染完毕后，JS 线程继续接管，开始下一个宏任务（从事件队列中获取）

### 图解事件循环执行顺序

![图解事件循环执行顺序](../.vuepress/public/imgs/eventloop.jpeg)
