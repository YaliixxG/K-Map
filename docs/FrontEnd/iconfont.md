---
title: iconfont 图标字体
---

### 什么是 iconfont?

图标字体，就是字体做的图标。

### 优点

-   减少请求次数，将多个 icon 合并到一个字体文件中，从而提高网页性能
-   自由的变化大小和颜色，因为字体是可以通过样式来设置大小和颜色的
-   矢量图不失真，比图片小，加载快

### 缺点

-   只能被渲染成单色或者 CSS3 的渐变色
-   创作自已的字体图标很费时间，重构人员后期维护的成本偏高

### @font-face 特殊字体的引入

```js
@font-face {
    font-family: <YourWebFontName>;
    src: <source> [<format>][,<source> [<format>]]*;
    [font-weight: <weight>];
    [font-style: <style>];
}
```

#### 取值说明：

-   YourWebFontName：字体名称，他将被引用到元素中的 font-family 上

-   source：字体的存放路径，跟 css 引用图片一样；

-   format：字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：truetype , opentype , truetype-aat , embedded-opentype , avg 等；

-   weight 和 style：weight 定义字体是否为粗体，style 主要定义字体样式，如斜体。

        ```js
        @font-face {font-family: "iconfont";

    src: url('iconfont.eot?t=1562741131409'); /_ IE9 _/
    src: url('iconfont.eot?t=1562741131409#iefix') format('embedded-opentype'), /_ IE6-IE8 _/
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMkAAsAAAAABsgAAALVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBTIFSATYCJAMICwYABCAFhG0HNhv+BRHVk11kf4F4iCnYjwgo2rQ1VMVt0xLel1cat2CNw/4LXlfDKZAAAAAAAMHDN67/O1jNPouR+r+CPh0KRSGBjAJ4DNUo7+k6uMFBgIEmGAA167BsstwLgKrXGiDARu3WWp58QI2Zt1BCBaRZHib7+wfZyaUkbFlYkr7KtzfCZpMFgAfcjjmdYmUZ5VoxDP1x7/T/tgcy33mXy9yDugDjQApob4wiK6CQU4FdxB6MxxCAIUwKUXPa0kPRYJUAxKydGKI5HxotJe0IrDUHNWI3wS63yIZd4ffFp6zsILEoUNYxXjvK3oLSsPq/9xH481kA6RgoIAVoED21sTZASGSFiZko7KtYwFv8fQNir1qE9Neh0AWAEJZ3T3xXcKvMEgANo6EaMTBqEqgQl+BlBmvugrT1tgaZXt7fH1fvy1yDHs+n1pz27x44ufrEvJB5zP/W5ODRQH3opZTuc+WsA0cOsxv2b624VXztTya7uqaS1WGz7mRb9MVPOOfgfOivg94n5/4Pw/PWtIb837yWZ7Dn9Y1/odsmV9m3HN+7z5xjutojgWtBRw4Rh6tbo3s5zEBAXVD8rb9h8YVDfHd/raABeMBeQo2mnwPsJ7cL+In8nj3aFEIvtc6vTUmq4eaaDAb4z7u8PB2r8r1ji8Ce40sgsREKCjsxqMangAUnOWDFTjkYktUfd+JtKSC0A0iygQGBh/MgceMyKDxcQTX+CVjw8wWseKTA0Cd4oZO4QFsrGComED2Bjbkgx6i1qPgCzV0WSlYYUm5QShuE1aWVYvIMC5Q5tpT3Zk2VgIRzOGWewyxjcMILjHVprur2lpep7k1LMedeTcFQMYHoCWzMBfmDtVb6/AWauyyUlq4G6w1KaceH1aWVHuiZrOjVdS+vlPdmTZWAhHM4ZSyYUYzB1c9bYKxL8xERt7fM9aO+sqX1FfnXHQIMqGW0W+G2MCbkWczuyfMAAAAA') format('woff2'),
    url('iconfont.woff?t=1562741131409') format('woff'),
    url('iconfont.ttf?t=1562741131409') format('truetype'), /_ chrome, firefox, opera, Safari, Android, iOS 4.2+ _/
    url('iconfont.svg?t=1562741131409#iconfont') format('svg'); /_ iOS 4.1- _/
    }
    ```

#### TureTpe(.ttf) 格式：

.ttf 字体是 Windows 和 Mac 的最常见的字体，是一种 RAW 格式，因此他不为网站优化,支持这种字体的浏览器有 【IE9+ , Firefox3.5+ , Chrome4+ , Safari3+ , Opera10+ , iOS Mobile Safari4.2+】

#### OpenType(.otf) 格式：

.otf 字体被认为是一种原始的字体格式，其内置在 TureType 的基础上，所以也提供了更多的功能,支持这种字体的浏览器有【Firefox3.5+ , Chrome4.0+ , Safari3.1+ , Opera10.0+ , iOS Mobile Safari4.2+】

#### Web Open Font Format(.woff) 格式：

.woff 字体是 Web 字体中最佳格式，他是一个开放的 TrueType/OpenType 的压缩版本，同时也支持元数据包的分离,支持这种字体的浏览器有【IE9+ , Firefox3.5+ , Chrome6+ , Safari3.6+ , Opera11.1+】

#### Embedded Open Type(.eot) 格式：

.eot 字体是 IE 专用字体，可以从 TrueType 创建此格式字体,支持这种字体的浏览器有 【IE4+】  

