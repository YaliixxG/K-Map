---
title: ssr 服务端渲染
---

# <font color="#fdd333">ssr 服务端渲染</font>

### 什么是 ssr ？

简单理解是将组件或页面通过服务器生成 html 字符串，再发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序

-   没使用服务渲染，当请求 user 页面时，返回的 body 里为空，之后执行 js 将 html 结构注入到 body 里，结合 css 显示出来

    ![没有使用 ssr](../.vuepress/public/imgs/no-ssr.jpg)

-   使用了服务端渲染，当请求 user 页面时，返回的 body 里已经有了首屏的 html 结构，之后结合 css 显示出来

    ![使用 ssr](../.vuepress/public/imgs/yes-ssr.jpg)

### 纯浏览器渲染

![浏览器渲染](../.vuepress/public/imgs/browser-render.jpg)

用户在浏览器上输入网址，访问到的其实是服务器上的一个文件服务。服务器会返回给浏览器一堆文件，这些文件是你 `npm run build`打包之后生成的。其中`app.bundle.js`是你写的业务代码，而`index.html`里面是没有任何东西的，仅仅是引入了 JS 的模板。而浏览器渲染出来的页面都是通过执行 JS 来生成的，生成 html，生成 DOM。

### ssr 与 纯浏览器渲染的利弊

#### 纯浏览器渲染的缺点

-   不利于 `SEO`。`SEO`的根据是请求网站，看返回的 `html` 文件中有没有有价值的信息。搜索引擎是利用爬虫去爬取 `index.html` 中的关键词数据，但是在浏览器渲染中`index.html`文件爬不到任何价值信息。

*   首屏加载。 因为所有的业务组件信息都在`app.bundle.js`中，所以一旦要查看，就需要将这个文件加载完。无论是做异步组件，还是优化始终是没有直接加载 `html` 速度快的。
*   浏览器压力问题。纯浏览器渲染是  拿到返回的文件后，执行 `app.bundle.js`，通过`app.bundle.js`生成 `html`，在进行渲染，渲染过程中又需要发请求，再执行 `JS`重新生成 `html`。所有的工作都压在浏览器，浏览器需要处理的事情太多，所以会造成压力太大，内存占用过大，会卡崩。

####如何解决纯浏览器渲染的问题，为什么要用 ssr

<strong>核心问题：纯浏览器渲染，是需要执行 `JS`（`app.bundle.js`），再根据 `JS` 生成 `html` 页面。</strong>

<strong>问题解决：将 `JS` 的执行移到服务器去进行，减少客户端的压力，客户端只需直接接收服务端返回的 `html` 就可以了。</strong>

### ssr 渲染

![服务端渲染](../.vuepress/public/imgs/ssr-render.jpg)

#### 过程

浏览器请求访问某个页面，服务器接收到请求后，解析执行 `js` 生成 `html` 页面，将其返回给浏览器。比如`vue`，解析 `JS` 时，`JS` 里面全部都是`.vue`的文件，也就是 `vue` 实例，服务器就是要将这些实例转成字符串形式的 `html`

#### 为什么 `Node`

作为服务端语言，解析 `JS` 最好的肯定是 `Node` 了

#### Node + Vue + vue-server-renderer

<strong>vue-server-renderer</strong>: `npm install vue-server-renderer`，这个包主要是提供 Vue 2.0 的 Node.js 服务器端呈现

```js
const vue = require('vue');
const server = require('express')();

// 创建一个 renderer 实例
const renderer = require('vue-server-renderer').createRenderer();
const fs = require('fs');

// 根据请求的地址，生成对应的vue 实例的方法
function createApp(url) {
    // doSth
}
server.get('*', (req, res) => {
    const app = createApp(req.url);

    // 将Vue实例呈现为字符串。 回调是一个标准的Node.js回调，它接收错误作为第一个参数
    renderer.renderToString(app, (err, html) => res.end(html));
});
server.listen(1000);
```

#### 特性

以`vue`项目说明

-   每一次访问必须新建一个 vue 实例
-   只会触发组件的 `beforeCreate` 和 `created` 钩子，所以需要客户端 JS  
    服务端解析 JS 时，看上面的代码可知生命周期只会进行到 `created` 阶段，也就是生成实例的阶段，实例生成后即会被转成字符串形式的 `html` 返回给客户端。所以挂载实例的`mounted`的阶段是没有的，而后续的交互操作（点击事件，鼠标移动事件...）不可能在服务端执行，只能在浏览器上面完成，所以客户端需要有 JS 去执行这些操作，不可能把所有的 JS 都放在服务器。

#### ssr 工程化流程图

![工程化流程图](../.vuepress/public/imgs/ssr-map.png)  

1. `Source`部分：应用代码平常只会有一个入口文件，打包后也只会生成一个 JS 文件。但是现在需要配置两个入口，服务端入口和客户端入口。  
2. 由于有两个入口文件，所以webpack 需进行两次打包，生成 `server.bundle.js` 和 `client.bundle.js`。  
3. 在 node 服务器中，`server.bundle.js`的作用主要是根据请求的地址生成实例，再通过`Bundle Renderer` 将其生成字符串形式的 html，并返回给浏览器。
4. 浏览器接收到服务端返回的 html后，再配合`client.bundle.js`进行渲染，后续就由浏览器进行操作了。  
5. `hydrate` 描述的是 `DOM` 复用服务端渲染的内容时尽可能保留结构，并补充事件绑定等 `Client` 特有内容的过程。
