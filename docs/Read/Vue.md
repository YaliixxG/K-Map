---
title: Vue 
---

# <font color="#CBA500">Vue</font>  
> 此为记录一次系统培训所整理的知识点  

### MVVM  
本质上就是解决了前端程序员大量繁琐的操作DOM的问题，数据的请求获取依然依赖于Ajax技术，但是数据获取后的展示，不再是操作DOM，而是交由中间的VM层来处理。实现了前后端工程及数据的彻底分离。

### 响应式原理  
Vue最独特的特性之一，就是<strong>非侵入性的响应式系统</strong>    

#### 什么是响应式？  
简单来说，就是数据发生变化时，会重新对页面渲染。  
#### 如何做出数据与视图之间的响应？  
1. Vue会对我们定义的数据`data`进行数据劫持
2. 然后对`data`进行逻辑处理（setter，getter）
3. 通过观察者`Watcher`来监听到数据的变化  
4. 发布阶段，通知组件更新  
5. 组件重新渲染  

### 计算属性 Computed
在模板数据中，如果需要有复杂的逻辑处理，都应当使用计算属性。  
例如：  
```html 
<div id="example">
{{ message.split('').reverse().join('') }}
</div>
```  
这个地方的模板已不再是简单的声明式逻辑。如果要多次引用这个值时，则会变得难以处理，应使用计算属性来获取。  
```js
<div id="example">
{{ reversedMsg }}
</div>

computed: {
    reversedMsg: function() {
        return this.message.split('').reverse().join('')
    }
}
```  

### 监听器 Watch
当你有一些数据需要随着其它数据变动而变动时，可以使用监听器来处理。
```js
<div id="example">
{{ fullName }}
</div>

computed: {
    firstName: function(val) {
        this.fullName = val + '' + this.lastName
    }
    lastName: function(val) {
        this.fullName = firstName + '' + val
    }
}
```  
> 如果数据依赖于其他数据，那么把这个数据设计为computed；如果需要在某个数据变化时做一些事情，则使用watch来观察这个数据变化；当需要在数据变化时执行异步或开销较大的操作时，使用watch是最有用的。

### 生命周期  
* <strong>beforeCreate</strong>：实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。  
* <strong>created</strong>：在这个阶段vue实例已经创建，能获取到数据，但不能获取DOM元素。  
* <strong>beforeMount</strong>：依然得不到具体的DOM元素，但vue挂载的根节点已经创建。  
* <strong>mounted</strong>：在这个阶段，数据和DOM都已被渲染出来。通常请求数据会在该阶段。 
* <strong>beforeUpdate</strong>：在数据更新之前时调用。 
* <strong>updated</strong>：在数据更新之后时调用。  
* <strong>beforeDestroy</strong>：实例销毁之前调用。此时，实例仍然是可用的。  
* <strong>destroyed</strong>：vue实例销毁后调用。调用后，vue实例指示的所有东西都会解绑，所有的时间监听器会被卸载移除，所有的子实例也会被销毁。

