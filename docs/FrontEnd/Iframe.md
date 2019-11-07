---
title: 关于Iframe
---

# <font color="#00FF7F">关于Iframe</font>

最近在项目中嵌入Iframe，发现Iframe的API无法拿到iframe里面的节点，API无效，后来发现是跨域的问题。  
也就是说，如果不是同源，则API是无法起作用的。  
如果是同源的话，则可以对iframe里面的节点进行样式修改。  

```js
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import styles from './abc.less';

@connect(state => ({
    user: state.user
}))
export default class Abc extends PureComponent {
    constructor() {
        super();
        this.state = {
            iFrameHeight: '0px' // 这里是设置高度的自适应
        };
    }
    render() {
        const iframeURL = 'http://xxxxxxxxxxxxx';
        console.log(iframeURL);
        return (
            <div className={styles['resourceDetailLink-wrap']}>
                <iframe
                    style={{
                        width: '100%',
                        height: this.state.iFrameHeight,
                        overflow: 'visible'
                    }}
                    onLoad={() => {
                        const obj = ReactDOM.findDOMNode(this);
                        const _root = obj.contentWindow.document.getElementById(
                            'root'
                        );
                        _root.style.width = '100%';
                        _root.style.boxSizing = 'border-box';
                        _root.style.padding = '10px';
                        this.setState({
                            iFrameHeight:
                                obj.contentWindow.document.body.scrollHeight +
                                'px'
                        });
                    }}
                    name="resourceDetailLinkIframe"
                    title="这里写你的标题，就是鼠标下方的文字"
                    width="1200"
                    height={this.state.iFrameHeight}
                    scrolling="no" // 这个有三个值： no - 代表始终去掉滚动条； auto - 代表需要出现滚动条时出现； yes - 代表始终出现滚动条
                    frameBorder="0" // 去掉iframe的默认样式
                    src={iframeURL}
                />
            </div>
        );
    }
}

```