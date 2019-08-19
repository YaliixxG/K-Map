---
title: React中的Context上下文对象
---  

# <font color="#3CB371">Context 上下文对象</font> 

> 由于React的数据流是单向流动的，数据是从根组件一直往下传，中间必定会有许多繁杂的中间组件。例如，如果有 A，B，C，D四个组件，A为根组件，数据父子组件传递关系是：A => B => C => D，在React中传递，A组件的数据必须经过一层又一层的组件才能传递到D组件，但是context的出现可以让A组件的数据直接传递到D组件。  

举例：（这里简化，只写了ABC三个组件）
A组件嵌套在App.js中  
```js
import React, { Component } from 'react'
import A from './Context/A'
class App extends Component {
    
    render() {
        return (
            <div>
              <A />
            </div>
        )
    }
}
```
A组件，也是B组件的父组件，这里定义了state数据，并将这个数据一层一层传递到C组件  
```js
import React, { Component } from 'react'
import B from './B'

export default class A extends Component {

    state = {
        name: 'Jay',
        age: 19,
        doing: 'singer'
    }
    render() {
        return (
            <div>
               <B name={this.state.name} />
            </div>
        )
    }
}
```

B组件为A的子组件，并且也是C的父组件，用props接收A组件传递的值，并传递给C
```js
import React from 'react'
import C from './C'


const B = (props) => {
    return (
        <div>
            <C name={props.name} />
        </div>
    )
}

export default B
```  
C组件是这个例子的数据传递终点，接收 
```js
import React from 'react'


const C = (props) => {
    return (
        <div>
            <p>Hiiiiiii,I am {props.name}</p>
        </div>
    )
}

export default C
```  
*从上面可以看到，如果组件之间一层一层来传递数据，是非常容易出错的，步骤也是非常繁杂的*  

### context 来跨组件进行传递数据，直接从A传到C  
> context使用了Provider（提供者）和Customer（消费者）模式，在顶层的Provider中传入value，在子孙级的Consumer中获取该值，并且能够传递函数，用来修改context。  

我在上面的例子里面，进行以下操作：  
1. 创建一个GoContext的组件，这名字随便取的。在这个组件中，用`React.creatContext()`来创建一个context上下文对象ContextPro，并且通过Context提供的`Provider`这个API写入我需要传递的数据以及方法
2. 在需要传递数据的A组件中引用这个组件，并且让它包裹A组件
3. 在C组件中通过Context提供的`Consumer`这个API来接收我们传递的数据和方法，并且*可以通过这个方法来改变我们ContextPro中存的数据值*  

GoContext.js  
```js
import React, { Component } from 'react';

// 创建一个context上下文对象
export const ContextPro = React.createContext();

// 创建Provider
export  class GoContext extends Component {
    // 这里是我们需要传递到 C 组件的数据
    state = {
        name: 'Jay',
        age: 19,
        doing: 'singer'
    };
    render() {
        return (
            // 这里ContextPro.Provider进行包裹并传递数据，value里面是传递的数据，也可以传递事件
            <ContextPro.Provider value={{
                state: this.state,
                increaseAge: () => this.setState({
                    age: this.state.age + 1  
                })
            }}>
                {this.props.children}
            </ContextPro.Provider>
        );
    }
}
```  

A.js  
```js
import React, { Component } from 'react'
import B from './B'
import { GoContext } from './ContextPro'

export default class A extends Component {

    // state = {
    //     name: 'Jay',
    //     age: 19,
    //     doing: 'singer'
    // }
    render() {
        return (
            // 将context组件包裹着需要传递数据的组件 A
            <GoContext>
            <div>
               {/* <B name={this.state.name} /> */}
               <B />
            </div>
            </GoContext>
        )
    }
}
```   

*B组件本来在传递中是需要接收A组件的数据，再传递到C组件的，但是现在有了 Context以后，它就不需要做这个工作了* 

B.js  
```js
import React from 'react'
import C from './C'


// const B = (props) => {
//     return (
//         <div>
//             <C name={props.name} />
//         </div>
//     )
// }

const B = () => {
    return (
        <div>
            <C />
        </div>
    )
}

export default B
```  

C.js  
```js
import React from 'react'
import { ContextPro } from './ContextPro'


const C = (props) => {
    return (
        <div> 
        {/* <p>Hiiiiiii,I am {props.name}</p>  */}
        <ContextPro.Consumer>
        {
            context => (
                <React.Fragment>
                   <p>Hello,我是{context.state.name}</p>
                   <p>今年{context.state.age}岁</p> 
                   <button onClick={context.increaseAge}>点一下，加一岁</button>
                </React.Fragment>
            )
        }
        </ContextPro.Consumer>
        </div>
    )
}

export default C
```

