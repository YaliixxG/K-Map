---
title: Vue3
---

# <font color="green">Vue3</font>

## composition-api 组合式 api

> 在以往的 vue2 中，代码需写在规定好的地方，data，methods 等等。在小型项目中，这样写并不会有什么问题但是在大型项目中，这样写会导致代码灵活性不够，无法重用和扩展。所以组合式 api 就是解决这个问题。

-   setup：所有组合式 api 都必须写在这个方法里面
-   ref：定义响应式数据，主要用于定义字符串、布尔类型，number 类型，数组
-   reactive：定义响应式数据，主要用于定义对象
-   watchEffect：监听数据变化
-   watch：监听数据变化
-   computed：计算属性
-   toRefs：主要用于解构响应式对象数据
-   生命周期的 hooks

## 响应式数据 ref，reactive 的基本使用及修改

```html
<template>
    <div id="app">
        <h3>ref --- {{ title }}</h3>
        <p>
            reactive --- 姓名：{{ singerInfo.name }} 性别：{{ singerInfo.gender
            }}
        </p>
        <button @click="getSingerInfo">获取 reactive 数据</button>
        <button @click="getTitle">获取 ref 数据</button>
        <button @click="setSingerInfo">修改 reactive 数据</button>
        <button @click="setTitle">修改 ref 数据</button>
    </div>
</template>
```

```js
<script>
import { ref, reactive } from "vue";
export default {
    name: "App",
    setup() {
        let title = ref("歌手");
        let singerInfo = reactive({
            name: "周杰伦",
            gender: "男"
        });
        // 获取 ref 的数据
        const getTitle = () => {

            // 需拿到 value 才可以拿到值
            alert(title.value)
        }
        // 获取 reactive 数据
        const getSingerInfo = () => {
            alert(singerInfo.name + "---" + singerInfo.gender);
        };
        // 修改 ref 的数据
        const setTitle = () => {
            title.value = "超级巨星"
        }
        // 修改 reactive 数据
        const setSingerInfo = () => {
            singerInfo.name = "Jay Chou"
        };
        // 必须 return 才能在模板内使用
        return {
            title,
            singerInfo,
            getSingerInfo,
            getTitle,
            setSingerInfo,
            setTitle
        };
    }
};
</script>
```

## 响应式数据 ref，reactive 的双向数据绑定

```html
<template>
    <div id="app">
        <input type="text" v-model="title" />
        <input type="text" v-model="singerInfo.name" />
    </div>
</template>
```

```js
<script>
import { ref, reactive } from "vue";
export default {
    name: "App",
    setup() {
        let title = ref("歌手");
        let singerInfo = reactive({
            name: "周杰伦",
            gender: "男"
        });
        // 必须 return 才能在模板内使用
        return {
            title,
            singerInfo
        };
    }
};
</script>
```

### toRefs - 解构响应式对象的数据

> 若用三点运算符直接解构，得出的数据不是响应式数据。利用 toRefs 解构响应式对象，得到的数据也是响应式数据。

```js
// setup
let bestSinger = reactive({
    name: '孙燕姿',
    cd: '神奇'
});

// 写法一
const { name, cd } = toRefs(bestSinger);
return {
    cd,
    name
};

// 写法二
return {
    ...toRefs(bestSinger)
};

// 错误写法：会失去数据的响应式
return {
    ...bestSinger
};
```

### computed 计算属性

```js
// vue2 写法
// setup
computed() {
    fullName: function() {
        return firstName + '' + lastName
    }
}

// vue3
import { computed } from 'vue'
// setup
let fullName = computed(() => firstName + '' + lastName)

return {
    fullName
}
```

### readonly 只读

> 将响应式对象改为原始数据并且无法改变。传入一个对象（响应式或普通）或 ref，返回一个原始对象的只读代理，一个只读的代理是“深层的”，对象内部的任何嵌套的属性也都是只读的

```js
// setup
// 原始数据
let singerInfo = {
    name: '周杰伦',
    gender: '男'
};
// 响应式数据
let singerInfo = reactive({
    name: '周杰伦',
    gender: '男'
});

// 将响应式改为原始数据
import { readonly } from 'vue';

// setup
let singerInfo = readonly(singerInfo);
```

### watchEffect 监听器

> 与以前的监听器功能差不多，只是无论如何，监听器里面一定会执行一次里面的代码。不用写明是监听那个数据，写在函数中的会自动监听。可以监听响应式对象里面属性的变化(data.num)

```js
// setup
let data = reactive({
    num: 1
});

// 不会指明监听数据源，不能监听数据前后变化的值
watchEffect(() => {
    console.log('data.num=', data.num);
});
setInterval(() => {
    data.num++;
}, 2000);
return {
    ...toRefs(data)
};
```

### watch 监听器

> 能懒执行，仅在侦听的源变更时才执行回调；更明确哪些状态的改变会触发侦听器重新运行；访问侦听状态变化前后的值。只能监听返回的整个对象的变化（data）

```js
// setup
let data = reactive({
    num: 1
});
let info = reactive({
    count: 1
});

// 监听单对象
watch(data, (newVal, oldVal) => {
    console.log('单对象num', data.num);
});

// 监听多对象：如下两个对象都发生变化的话，会执行两遍
watch([data, info], (newVal, oldVal) => {
    console.log('多对象num', data.num);
    console.log('多对象count', info.count);
});
```

### 生命周期 hooks

> 在 vue2 的生命周期函数上，因为 setup 是围绕 beforeCreate，created 两个钩子函数运行的，所以不需要显示的定义他们。这两个周期的函数可以直接在 setup 里面编写。其他的生命周期钩子函数需要引入后才能执行，不能直接写。

```js
// setup
onMounted(() => {
    // doSth
});
```

### 接收父组件的 props

> setup()函数中的第一个参数就是父组件传的 props，并且不需要 return 出去，可以直接在模板中使用

```js
export default {
    props: ['msg'],

    // setup 的第一个参数的值就是传过来的参数
    setup(params) {
        console.log(params); // 传过来的 msg
    }
};
```

### Provide 和 Inject 的使用

> 爷，父等高层组件向低层组件传值；并且改变任何一方的数据，另一方也会随之变化。

```js
// 高层组件
setup() {
    let farther = reactive({
            name: '爸爸',
            age: '60'
        })
    provide('farther', farther)
}
```


```html
<!--低层组件-->
<template>
    <div>
        <p>父亲的名字：{{ name }}</p>
        <p>父亲的年龄：{{ age }}</p>
    </div>
</template>
````

```js
setup() {
      let farther = inject('farther')
      return {
          ...toRefs(farther)
      }
  }
```

## 集成 Typescript

### 创建 vue 项目，集成 ts

```js
$ vue create project-name
$ cd project-name
$ vue add typescript
```
### 创建组件  
> 关键词：defineComponent。引入 defineComponent 来定义组件

```js
import { defineComponent } from 'vue'
export default defineComponent({
     name: 'Home',
     // ...
})
```
### 不使用 composition api 时，通过接口 interface 批量定义 data
```js
import { defineComponent } from 'vue'

// 定义 Home接口 
interface Home {
    name: string,
    title: string,
    scanCount: number,
    content?: string
}

// 实现接口 Home
let homeData: Home = {
    name: '我是 Home 组件',
    title: '我是一个标题',
    scanCount: 123
}
export default defineComponent({
     name: 'Home',
     data() {
         return homeData
     },
     methods: {
         setScanCount():void {
            this.scanCount = 567 
         }
     }
})
```
### refs 定义及通过接口 interface 定义 reactive
```js
import { defineComponent, ref, reactive, toRefs } from 'vue'

// 定义 Home接口 
interface User {
    name: string,
    age: number | string,
    setName(username: string): void 
}

// 实现接口 Home
let homeData: Home = {
    name: '我是 Home 组件',
    title: '我是一个标题',
    scanCount: 123
}
export default defineComponent({
     name: 'Home',
     setup() {
        // ref，不能写成 let count: number | string = ref(0)
        let count= ref<number | string>(0)
        // 实现接口的三种方式  
        // 第一种
        let user: User = reactive({
            name: '王尼玛',
            age: 30,
            setName(username: string): void {
                this.name = username
            }
        })

        // 第二种
        let user = reactive<User>({
            name: '王尼玛',
            age: 30,
            setName(username: string): void {
                this.name = username
            }
        })

        // 第三种
        let user = reactive({
            name: '王尼玛',
            age: 30,
            setName(username: string): void {
                this.name = username
            }
        }) as User 

        return {
            ...toRefs(user),
            count
        }
     }
})
```
