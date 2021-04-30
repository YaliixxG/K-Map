## 安装
```js
yarn global add typescript
```
## 字符串  
```ts
let str: string = "你好"
```
## 数字  
```ts
let num: number = 123
```
## 布尔类型  
```ts
let  flag: boolean = false
```
## 数组  
```ts
let  arr: number[] = [1, 12, 3, 5]
let  arr: string[] = ['js', 'ts']
let  arr: Array<number> = [1, 12, 3, 5]
let  arr: Array<string> = ['js', 'ts']
```
## 元祖（tuple）  
> 属于数组的一种，可以指定数组里面每一个元素的类型。
```ts
let arr: [number, string, boolean] = [1, 'js', true] // 必须和前面的类型一一对应
```
## 枚举类型 
> 事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法成为枚举方法，用这种方法定义的类型称枚举类型。
```ts
// flag  成功状态为 1 错误状态为 -1
enum Flag { success = 1, error = -1 }
let f: Flag = Flag.success
console.log(f) // 1
```