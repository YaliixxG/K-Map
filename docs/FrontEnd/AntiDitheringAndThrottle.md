---
title: 防抖和节流
---

# <font color="#20B2AA">防抖和节流</font>

### 防抖函数

高频事件触发时，在规定的秒数之内只会执行一次，若在规定的秒数之内再次触发，则会重新计算时间，也就是说会重新开启这个定时器。  
那这个函数就是每次触发事件时，会清掉上一个定时器，再重新开一个定时器。

```js
function antiD(fn) {
    let time = null 
    return function() {
        clearTimeout(time)
        time = setTimeout(() => {
            fn.apply(this,arguments)
        },1000)
    }
}

function go() {
    console.log('防抖函数')
}

var Input = document.getElementById('input')
Input.addEventListener('input', antiD(go)); // 防抖
```

### 节流函数

高频事件触发时，在规定的秒数之内只会执行一次，若在规定的秒数之内再次触发，也没有用，定时器还是会继续执行，直到时间结束。  
那这个函数就是每次触发事件时，给一个开关，用来会判断上个定时器是否走完了，如果没有走完，则触发也不执行；走完了则可以继续执行这个事件。

```js
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function() {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => {
            // 将外部传入的函数的执行放在setTimeout中
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true;
        }, 500);
    };
}
function go(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(go));
```
