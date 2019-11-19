---
title: React 组件优化
---

# <font color="#48D1CC">React 组件优化</font>

### 1. 类组件优化

使用`PureComponent`  

```js
export default class XXXX extends PureComponent {
    ...
}
```

### 2. 函数式组件

使用`React.memo()`, `React.memo()`有两个参数：

-   被包裹的组件
-   深层次对比的 props 的函数

```js
function MyComponent(props) {
    /* 使用 props 渲染 */
}
function isSame(prevProps, nextProps) {
    /*
 如果把 nextProps 传入 render 方法的返回结果与
 将 prevProps 传入 render 方法的返回结果一致则返回 true，
 否则返回 false
 */
}
export default React.memo(MyComponent, isSame);
```
