---
title: JS 事件循环
---

# Javascript 事件循环  
> JS主线程不断的循环往复的从任务队列中读取任务，执行任务，这中运行机制称为事件循环（event loop）。

### 今日头条面试题：
```js
// 如何输出呢？
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')
```

### 解题：

答：  
1. 先看整个代码，执行栈中先执行`console.log('script start')`，在执行中找看有没有可执行的微任务，在下一次渲染页面执行宏任务之前，需要执行完这些微任务。  
2. 此时看到 `async1()` 和 `new Promise`。
3. 执行 `async1()`，执行`console.log('async1 start')`，遇到`await async2()` 执行`console.log('async2')`，此时await后的代码会加入另一个队列，此时跳出。
4. 执行`new Promise`，执行`console.log('promise1')`，然后`resolve()`立即执行，然后遇到`then`，可以理解为`await`一样，后面的代码会加入另一个队列，此时跳出。
5. 此时发现后面还有`console.log('script end')`，执行。
6. 此时查看微任务还有哪些？ 就是另一个队列还有排队的两个任务，依次执行`console.log('async1 end')`,`console.log('promise2')`。
6. 最后进行渲染，执行下一个宏任务`console.log('settimeout')`。

所以输出答案是：  
```js
'script start'
'async1 start'
'async2'
'promise1'
'script end'
'async1 end'
'promise2'
'settimeout'



```

### 相关概念：
#### JS任务队列：  
* JS分为同步任务和异步任务
* 同步任务都在主线程上执行，形成一个执行栈
* 主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
* 一旦执行栈中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。 

#### 宏任务  (macro)task 
浏览器为了能够使得JS内部(macro)task与DOM任务能够有序的执行，*会在一个(macro)task执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染*  

主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境) 

#### 微任务 microtask
可以理解是在当前 task 执行结束后立即执行的任务。也就是说，*在当前task任务后，下一个task之前，在渲染之前*。

microtask主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)  

#### Promise和async中的立即执行  
Promise中的异步体现在then和catch中，所以写在Promise中的代码是被当做同步任务立即执行的。而在async/await中，在出现await出现之前，其中的代码也是立即执行的。  
*实际上await是一个让出线程的标志*。await后面的表达式会先执行一遍，*将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码*。

#### 运行顺序

1. 执行一个宏任务（栈中没有就从事件队列中获取）
2. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
3. 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
4. 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
5. 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）


### 图解事件循环执行顺序
![图解事件循环执行顺序](../.vuepress/public/imgs/eventloop.jpeg)
