---
title: Vue
---

<!--
 * @Description: Vue Bug
 * @Date: 2020-06-08 18:10:03
 -->

# Vue

#### 1. 如何修改Vue引入的第三方库的样式？

答：Vue如果需要在组件内部更改引入的第三方库的样式，可以在前面加’/deep/‘来进行更改;如果是全局通用，则可以在App.vue中引入全局css,进行修改。less中使用/deep/，scss中使用::v-deep。

#### 2. 引入子组件时发生栈溢出？  

答：检查子组件的name命名是否与父组件重名，如果重名会发生循环渲染栈溢出的情况。  

#### 3. Vue引入图片 img 地址无效？  

答：  
这样写是有效的写法，可以正确的引入地址写在模板里面，webpack会将其正确的解析为地址 
```js
<template>
    <img src="../jay.png" />
</template>
```  
写在Vue实例里面是无效的，webpack不会将这个地址正确的解析，只会将其解析成字符串  
```js
<template>
    <img src="logoSrc" />
</template>
<script>
export default {
    data () {
    return {
      logoSrc: './../assets/logo.png'
    }
  }
}
</script>
```   
最好的方法是这样写，用require引入则可以得到正确的图片地址   
```js
<script>
export default {
    data () {
    return {
      logoSrc: {
          src:require('./../assets/logo.png')
      }
    }
  }
}
</script>
```   

#### 4. Vue引入常量不能直接放入模板使用？  

答：`Vue`引入常量`imgUrl`直接放入`template`中用会报错，必须在实例`data`中进行二次赋值才能正常使用  

```js
import { imgUrl } from ’utils/constant.js’   
data() {
        return {
            imgUrl
        }
    },
```
