---
title: 当img尺寸比div大时，该怎么居中显示？
---

# <font color="#CD5C5C">当img尺寸比div大时，该怎么居中显示？</font>

#### 第一种方法：将图片设置成背景图片  

```css
background-position: center;  
```  

#### 第二种方法：给图片设置相对div的100%的宽高，再设置object-fit:cover;    

```css
img {
    width:100%;
    height:100%;
    object-fit: cover;
}
```