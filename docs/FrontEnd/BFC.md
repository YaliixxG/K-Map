---
title: BFC及其应用
---

# <font color="#A0522D">BFC及其应用</font> 

### 什么是BFC？
BFC（Block Formatting Context）中文叫块级格式化上下文。

### 怎么生成BFC?  

 * 浮动元素：float 除 none 以外的值。
 * 绝对定位元素：position (absolute、fixed)。
 * display 为 inline-block、table-cells、flex。
 * overflow 除了 visible 以外的值 (hidden、auto、scroll)。

 ### BFC的作用？  

 * 清除浮动
 * 防止同一 BFC 容器中的相邻元素间的外边距重叠问题


