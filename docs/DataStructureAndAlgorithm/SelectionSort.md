---
title: 选择排序
--- 

# <font color="#DB7093">选择排序</font>    

选择排序是将一系列值，循环比对，将最小（大）的值挑选出来，放到第一位，再循环剩余无序的值，重复n次，直至只剩最后一个值排序完毕。    

时间复杂度：遍历n个值，遍历n次，所以复杂度为 n*n, 表示为 `O(n2)`  

空间复杂度： 一维，所以为 `O(1)`  

![选择排序](../.vuepress/public/imgs/selectSort.gif) 

JavaScript:
```js
function select(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }            
        }
        let min = arr[minIndex]
        arr[minIndex] = arr[i] // 在现在最小值的位置放入当前i循环的这个值
        arr[i] = min // 在当前这个i循环的位置放入得出的最小值

        // 以上赋值方式也可以直接通过数组解构赋值写法
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
};
```  

Python:
```python
def select(arr):
    for i in range(len(arr)):
        minIndex = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        arr[minIndex], arr[i] = arr[i], arr[minIndex]
    return arr
```
