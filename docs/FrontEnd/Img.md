---
title: 当img尺寸比div大时，该怎么居中显示？
---

# <font color="#CD5C5C">当img尺寸比div大时，该怎么居中显示？</font>

#### 1. 将图片设置成背景图片  

```css
background-position: center;  
```  

#### 2. 给图片设置相对div的100%的宽高，再设置object-fit:cover;    

```css
img {
    width:100%;
    height:100%;
    object-fit: cover;
}
```