---
title: 快速排序
--- 

# <font color="#DB7093">快速排序</font>    

快速排序是在需要排序的序列中，找到一个目标值，然后将剩余的序列元素划分为`比目标值小的`以及`比目标值大的`两个序列分区；然后再在这两个序列分区中分别找到一个目标值再重复以上步骤，直至排序完毕。  

时间复杂度：`O(nlogn)`，一般会小于这个复杂度，最坏的情况是`O(n2)` 

空间复杂度： `O(logn)` 

![选择排序](../.vuepress/public/imgs/quicksort.gif) 

方法一：   
开辟左右两个分区空间，以及确定目标值，根据目标值比较大小，将小于目标值的元素放入左边分区，大于目标值的元素放入右边分区，递归进行。  
此方法需要开辟大量空间，浪费存储。

JavaScript:
```js
function quicksort(arr) {
    if (arr.length < 2) {
        return arr
    } 
    const target = arr[0],
        left = [],
        right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < target) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat([target], quicksort(right));
}
```  
方法二：  
设置一个索引`l`，从序列左边开始，设置一个索引`r`，从序列右边开始。  
当`l < r` 时，如果左侧索引l的值（arr[l]）大于`target`，就将当前索引l（arr[l]）的值赋值给索引r（arr[r]）;   
当`l < r    `时，如果右侧索引r的值（arr[r]）小于`target`，就将当前索引r（arr[r]）的值赋值给索引l（arr[l]）;  
当`l = r` 时，此时左侧的值全部小于`target`，右侧的值全部大于`target`，然后将`target`放置于此处


JavaScript:
```js
function quicksort_index(arr, start, end) {
    if (end - start < 1) { return };
    const target = arr[start]
    let l = start
    let r = end
    while (l < r) {
        while (l < r && arr[r] > target) {
            r--
        }
        arr[l] = arr[r]
        while (l < r && arr[l] < target) {
            l++
        }
        arr[r] = arr[l]
    }
    arr[l] = target
    quicksort_index(arr, start, l - 1)
    quicksort_index(arr, l + 1, end)
    return arr
}
```
