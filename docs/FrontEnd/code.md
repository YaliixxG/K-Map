---
title: 代码书写规范
---

# <font color="#4169E1">代码书写规范</font> 

:smile: 书写规范参考于 [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide/#project-naming)  
其中有一些我自己需要特别注意的点。

### 命名  

* 下划线命名：项目名称，文件名称，目录名称 `my_project_name`  
* 驼峰命名：id，scss中的变量、函数、混合、placeholder  
* 中划线命名：类名 `element-content`   

### 变量命名  

* 标准变量采用驼峰式命名（除了对象的属性外，主要是考虑到cgi返回的数据）
* `'ID'`在变量名中全大写
* `'URL'`在变量名中全大写
* `'Android'`在变量名中大写第一个字母
* `'iOS'`在变量名中小写第一个，大写后两个字母
* 常量全大写，用下划线连接
* 构造函数，大写第一个字母
* `jquery`对象必须以`'$'`开头命名  

```js
var thisIsMyName;

var goodID;

var reportURL;

var AndroidVersion;

var iOSVersion;

var MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}

// not good
var body = $('body');

// good
var $body = $('body');
```

### 缩进

* 缩进4个空格  

### 单行注释  

* 双斜线后，必须跟一个空格；
* 缩进与下一行代码保持一致；
* 可位于一个代码行的末尾，与代码间隔一个空格。  

### 引号  

* 最外层统一使用单引号

### undefined  

* 永远不要直接使用`undefined`进行变量判断；  
* 使用`typeof`和字符串`'undefined'`对变量进行判断。  

```js
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```  
### jshint  

* 用'===', '!=='代替'==', '!='；

* `for-in`里一定要有`hasOwnProperty`的判断；  

### 杂项  

* 不要混用`tab`和`space`；

* 不要在一处使用多个`tab`或`space`；

* 换行符统一用`'LF'`；

* 对上下文`this`的引用只能使用`'_this'`, `'that'`, `'self'`其中一个来命名；

* 行尾不要有空白字符；

* `switch`的`falling` `through`和`no default`的情况一定要有注释特别说明；(fallthrough：不跳出switch语句，后面的无条件执行)

* 不允许有空的代码块。  

```js
// not good
var a   = 1;

function Person() {
    // not good
    var me = this;

    // good
    var _this = this;

    // good
    var that = this;

    // good
    var self = this;
}

// good
switch (condition) {
    case 1:
    case 2:
        ...
        break;
    case 3:
        ...
    // why fall through
    case 4
        ...
        break;
    // why no default
}

// not good with empty block
if (condition) {

}
```

