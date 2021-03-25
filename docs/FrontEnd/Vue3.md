---
title: Vue3
---

# <font color="green">Vue3 学习笔记</font>

## ref 的使用

```js
<template>
  <div id="app">
   <span>{{ count }}</span>
   <button @click="changeCount()">改变</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const count = ref(0)
    const changeCount = () => {
        count.value++
    }
    return { count, changeCount }
  }
}
</script>
```

## watch 监听器的使用  

### 监听单对象 
```js 
// 监听 count  
import { ref, watch } from 'vue'
export default {
  name: 'App',
  setup() {
    const count = ref(0)
    const changeCount = () => {
        count.value++
    }
    watch(count, (newV, oldV) => {
        console.log(newV, oldV)
    })
    return { count, changeCount }
  }
}
```
### 监听多对象 
```js 
// 监听 count  
import { ref, watch } from 'vue'
export default {
  name: 'App',
  setup() {
    const count = ref(0)
    const changeCount = () => {
        count.value++
    }
    watch(count, (newV, oldV) => {
        console.log(newV, oldV)
    })
    return { count, changeCount }
  }
}
```