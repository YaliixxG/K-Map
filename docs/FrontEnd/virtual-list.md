---
title: 虚拟长列表
---

# <font color="#228B52">虚拟长列表</font>

父级引用

```tsx
<VList
    items={new Array(100).fill(1).map((item, idx) => idx)}
    size={20}
    renderCount={10}
/>
```

VList.tsx

```tsx
/**
 * 虚拟长列表渲染
 * props: items 渲染总列表，size 单项高度，renderCount 渲染条数
 * 核心：
 * 1. 滚动时，找准起始坐标 start end
 * 2. 从长列表中进行截取，渲染在固定高度的渲染框内
 * 3. 渲染框利用绝对定位，控制在渲染区域
 * 4. 滚动条利用空 div 设置总高度进行撑开
 */

import React, { useState } from 'react';
import './index.less';

export default props => {
    const { items, size, renderCount } = props;
    const [showData, setShowData] = useState(items.slice(0, renderCount)); // 截取的渲染数据
    const [start, setStart] = useState(0); // 截取起点坐标
    const [end, setEnd] = useState(showData.length); // 截取终点坐标

    const handleScroll = e => {
        const top = e.target.scrollTop;
        const startIndex = Math.floor(top / size);
        const endIndex = startIndex + renderCount;
        setStart(startIndex);
        setEnd(endIndex);
        setShowData(items.slice(startIndex, endIndex));
    };

    const barHeight = size * items.length; // 撑开滚动条高度 = 单位高度 * 总条数
    const renderHeight = size * renderCount; // 渲染容器高度 = 单位高度 * 真实渲染条数
    const listTop = start * size; // 渲染列表向上滚动需拉回原点改变的 top 值 = 当前start index * 单位高度

    return (
        <div
            className="container"
            style={{ height: renderHeight, overflow: 'scroll' }}
            onScroll={handleScroll}
        >
            <div className="v-list" style={{ top: listTop + 'px' }}>
                {showData.map((item, idx) => (
                    <div
                        className="v-list-item"
                        style={{ height: size + 'px' }}
                        key={idx}
                    >
                        {item}
                    </div>
                ))}
            </div>
            {/* 撑开父级框，出现滚动条，高度为总条数*单位高度 */}
            <div style={{ height: barHeight + 'px' }}></div>
        </div>
    );
};
```

index.less

```less
.container {
    position: relative;
    width: 300px;
    background: #ccc;
}

.v-list {
    position: absolute;
    top: 0;
    width: 100%;
}
```
