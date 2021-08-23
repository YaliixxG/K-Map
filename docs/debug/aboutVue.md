---
title: Vue
---

<!--
 * @Description: Vue Bug
 * @Date: 2020-06-08 18:10:03
 -->

# Vue

#### 1. 如何修改 Vue 引入的第三方库的样式？

答：Vue 如果需要在组件内部更改引入的第三方库的样式，可以在前面加’/deep/‘来进行更改;如果是全局通用，则可以在 App.vue 中引入全局 css,进行修改。less 中使用/deep/，scss 中使用::v-deep。

#### 2. 引入子组件时发生栈溢出？

答：检查子组件的 name 命名是否与父组件重名，如果重名会发生循环渲染栈溢出的情况。

#### 3. Vue 引入图片 img 地址无效？

答：  
这样写是有效的写法，可以正确的引入地址写在模板里面，webpack 会将其正确的解析为地址

```js
<template>
    <img src="../jay.png" />
</template>
```

写在 Vue 实例里面是无效的，webpack 不会将这个地址正确的解析，只会将其解析成字符串

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

最好的方法是这样写，用 require 引入则可以得到正确的图片地址

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

#### 4. Vue 引入常量不能直接放入模板使用？

答：`Vue`引入常量`imgUrl`直接放入`template`中用会报错，必须在实例`data`中进行二次赋值才能正常使用

```js
import { imgUrl } from ’utils/constant.js’
data() {
        return {
            imgUrl
        }
    },
```

#### 5 Vue 循环动态绑定变量 v-model="this.formData['name' + index]" ，输入框无法输入

答：在初始化赋值方法时，使用常规的 `this.formData['name' + index] = item.name`是无法正常输入的，此时需要用`this.$set`来解决这个问题

```js
this.$set(this.formData, 'name' + index, item.name);
```
