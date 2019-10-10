---
title: 集合
--- 

<!--
 * @Description: 集合
 * @Date: 2019-10-10 10:09:49
 * @LastEditTime: 2019-10-10 11:09:34
 -->

# <font color="#32CD32">集合</font> 

集合（set）是一种包括不同元素的数据结构，是由一组无序但彼此之间又有一定相关性的成员构成的，每个成员在集合中只能出现一次。  

### 定义  
* 空集：不包含任何成员的集合称为空集
* 全集：包含一切可能成员的集合  
* 如果两个集合的成员完全相同，则称两个集合相等 
* 如果一个集合中所有的成员都属于另外一个集合，则前一集合称为后一集合的子集

### 操作
* 并集：将两个集合中的成员进行合并，得到一个新集合
* 交集：两个集合中共同存在额成员组成一个新的集合
* 补集：属于一个集合而不属于另一个集合的成员组成的集合  

### 实现Set类  
```js
function Set() {
    this.dataStore = [];
    this.add = add; // 添加集合元素
    this.remove = remove; // 删除集合元素
    this.show = show; // 展示集合元素
    this.contains = contains; // 检查一个成员是否属于该集合
    this.union = union; // 并集操作
    this.intersect = intersect; // 交集操作  
}

// 添加方法：因为集合元素不能包含相同的元素，所以必须检测是否包含此元素，不包含则添加并返回true，否则返回false
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data)
        return true;
    }else {
        return false;
    }
}

// 删除方法：检查待删元素是否在数组中，如果在，则删除并返回true，否则返回false
function remove(data) {
    let pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }else {
        return false;
    }
}

// 显示集合中的成员：
function show() {
    return this.dataStore;
}

// 检查一个成员是否属于该集合
function contains(data) {
    if (this.dataStore.indexOf(data) > -1){
        return true
    }
    return false
}

// 求与传入的集合的并集 
function union(set) {
    let tempSet = new Set() 

    for (let i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i])
    }
    for (let i = 0; i < set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i])
        }
    }
    return tempSet;
}

// 求与传入的集合的交集  
function intersect(set) {
    let tempSet = new Set()

    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i])
        }
    }
    return tempSet
}
```

