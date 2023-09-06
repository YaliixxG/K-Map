---
title: Vue 相关原理实现
---

# <font color="#324FF2">Vue 相关原理实现</font>

### 双向绑定

双向绑定：数据变化-＞视图更新新，视图交互变化(Input)-＞数据 model 变更  
实现：采用“数据劫持“ + “发布者-订阅者模式“

#### 实现 Observer 监听器

Vue 会遍历递归 data 里面的所有属性
通过 Object.defineProperty()来将每个属性劫持，转化成 getter，setter
一旦属性对象被赋值，则会触发 setter，这样就监听到了数据变化。

```js
function observe(obj) {
    Object.keys(obj).froEach(key => {
        let initValue = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                return initValue;
            },
            set(newValue) {
                const isChange = newValue !== initValue;
                if (isChange) {
                    initValue = newValue;
                }
            }
        });
    });
}
```
