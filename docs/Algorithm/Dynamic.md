---
title: 动态规划
--- 

# <font color="#FF8C00">动态规划</font>    

### 设计理念  
动态规划算法设计，最多只需要合并两个子问题，根本不会涉及到两个以上的子问题。但是子问题里面可以包含子问题。  

![动态规划](../.vuepress/public/imgs/dtgh.jpg)  

### 适用问题特点 
* 问题具有最优子结构性质。如果问题的最优解所包含的子问题的解也是最优的，我们就成该问题具有最优子结构性质  
* 无后效性或者说无关联。当前的若干个状态值一旦确定，则此后过程的演变就只和这若干个状态的值有关，和之前是采取哪种手段或者经过那条路径演变到当前的这若干个状态，没有关系    

> 仅当每个子问题都是离散的，即不依赖于其他子问题时，动态规划才管用    

记录一次笔试题目：  

给定数组A，找出 Ai-Aj 最大值，要求 i>j，返回i，j，以及Ai-Aj，数组每个元素为正整数，数组A的长度大于2。  

思路：由于是要求后面的数减去前面的数，则是需要找到最小值min，用当前的元素来减。如果后一个数比前一个数要大，才会更新差值，否则则更新最小值min  

```js
const arr = [2, 1, 1000, 10, 6, 1999];

function findMax(arr) {
    // if (arr.length === 1) return arr[0]
    // if (arr.length === 2) return arr[1] - arr[0]

    // 先比较前两个数，找出最小值（差值最大化，被减数一定要够小才行）
    let min = arr[0] > arr[1] ? arr[1] : arr[0];
    let space = arr[1] - arr[0];
    let minIndex = arr[0] > arr[1] ? 1 : 0;
    let maxIndex = 1

    // 从第三个数开始循环遍历
    for (let i = 2; i < arr.length; i++) {

        // 当后一个数大于等于前一个数时，才有可能出现更大的差值，
        if (arr[i] >= arr[i - 1]) {

            // 当前存的差值与满足条件的后续差值进行比较，取较大者
            if((arr[i] - min) > space) {
                space = arr[i] - min
                maxIndex = i
            }
            
            // space = space > (arr[i] - min) ? space : arr[i] - min

        } else {

            // 如果后一个数比前一个数要小的话，此时可以与最小值进行比较，更新最小值min
            if (arr[i] < min) {
                min = arr[i];
                minIndex = i
            }
        }
    }
    return {'最大差值': space, 'i': maxIndex, 'j': minIndex};
}
```