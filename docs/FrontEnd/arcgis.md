---
title: ArcGIS
---

# ArcGIS

#### 1.在项目中安装 esri-loader 模块

```js
yarn add esri-loader     //yarn
npm install esri-loader  //npm
```

#### 2.在 public 目录下的 index.html 中引入 arcgis api 的 css 样式文件

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <meta http-equiv="X-UA-Compatible" content="IE =edge,chrome =1" >
    <link rel="stylesheet" href="https://js.arcgis.com/4.7/esri/css/main.css">
    <title>arcgis4.7&&echarts4.0</title>
  </head>
  <body>
    <noscript>
    </noscript>
    <div id="root"></div>
  </body>
</html>
```

#### 3. 地图组件

```js
import React, { Component } from 'react';
import esriLoader from 'esri-loader';

export default class ArcGISMap extends Component {
    constructor(props) {
        super(props);
        this.tileMapUrl =
            'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer';
    }
    componentDidMount() {
        this.initMap();
    }
    initMap() {
        const mapURL = {
            url: 'https://js.arcgis.com/4.7/dojo/dojo.js'
        };
        esriLoader
            .loadModules(
                [
                    'esri/Map',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/views/MapView',
                    'dojo/domReady!'
                ],
                mapURL
            )
            .then(([Map, Basemap, TileLayer, MapView]) => {
                let layer = new TileLayer({
                    url: this.tileMapUrl
                });
                let baseMap = new Basemap({
                    baseLayers: [layer],
                    title: 'Custom Basemap',
                    id: 'myBasemap'
                });
                // Create a Map instance
                let map = new Map({
                    basemap: baseMap
                });
                // Create a MapView instance (for 2D viewing) and reference the map instance
                let view = new MapView({
                    center: [120.2, 32.1],
                    map: map,
                    container: 'mapDiv',
                    zoom: 5
                });
            });
    }
    render() {
        let style = {
            width: '900px',
            height: '600px'
        };
        return (
            <div>
                <div id="mapDiv" style={style} />
            </div>
        );
    }
}
```

### Javascript API

::: tip
Javascript 的 API 全部都是英文，所以我把自己要用到的记下来，方便以后开发查看。  
但是对于详细的用例和参数介绍，还是得啃文档。
:::

#### `esri/map` 创建一个容器和所需的 DOM 结构，用于添加图层，图形，信息窗口和其他导航控件

```js
//通常，使用DIV将地图添加到页面。地图的宽度和高度初始化为DIV容器的宽度和高度。
// 定义地图
let map = new Map('map', {
    extent: extent, //地图可视范围，需设置
    center: [114.309, 30.578], //地图加载后，初始位置
    zoom: 16, //放大级别，值越大放大的比例就越大
    slider: false,
    maxZoom: 18, //地图最大缩放级别
    minZoom: 7, //地图最小缩放级别
    logo: false //不显示Esri的logo
});
```

#### `esri/layers/ArcGISTiledMapServiceLayer` 加载地图服务

```js
//地图加载链接
const titleUrl =
    'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer';
//加载地图服务，定义主题图层
let tiledLayer = new ArcGISTiledMapServiceLayer(titleUrl);
```

#### `esri/SpatialReference` 用于在地图中定位地理要素的坐标

```js
//wkid即well-known ID（定义好的） ，4326代表地理坐标系中的GCS_WGS_1984
new SpatialReference({ wkid: 4326 });
```

#### `esri/layers/ArcGISTiledMapServiceLayer` 加载地图服务

```js
//地图加载链接
const titleUrl =
    'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer';
//加载地图服务，定义主题图层
let tiledLayer = new ArcGISTiledMapServiceLayer(titleUrl);
```

#### `esri/geometry/Extent` 设置地图的可视范围，边界框的最小和最大 X 和 Y 坐标。

```js
/* 用法 ：new Extent(xmin, ymin, xmax, ymax, spatialReference)  
xmin：左下x坐标   
ymin：左下y坐标   
xmax：右上x坐标   
ymax：右上y坐标  */
let extent = new Extent(
    111.89099,
    27.8510093,
    114.256631248,
    28.6642814548253,
    new SpatialReference({ wkid: 4326 })
);
```

#### `esri/Color` 设置颜色

```js
//里面可以写字符串、16进制以及rgba的数值数组
new Color('yellow');
new Color('#000');
new Color([13, 195, 252, 0.9]);
```

#### `dojo/dom-construct` DOM 的创建

```js
//domConstruct需作为参数引入
const n = domConstruct.create('div');
const n = domConstruct.create('div', { innerHTML: '<p>hi</p>' });
```

#### `esri/dijit/Popup` 设置弹出窗口

```js
//用法：new Popup(options, srcNodeRef)
//在项目中的，创建popup弹出层（点的提示)
const popup = new Popup(null, domConstruct.create('div'));
//后续方法等等...
popup.hide();
popup.show();
```

#### `esri/toolbars/draw` 画，可以画点、矩形、圆圈等等

```js
//Draw以参数传入
//用法：new Draw(map, options?)
// 初始化Draw 工具栏，主要包括画点、画矩形和圆圈
const initToolbar = () => {
    tb = new Draw(map);
    tb.setFillSymbol(fillSymbol);

    //用户完成绘图时触发event事件函数
    tb.on('draw-complete', event);
};
```

#### `esri/symbols/PictureMarkerSymbol` 点符号用于在图形图层上绘制点和多点

```js
//PictureMarkerSymbol以参数传入
//用法：new PictureMarkerSymbol(url, width, height)
// 设置点正常的填充样式
let markerSymbol = new PictureMarkerSymbol(
    'images/toolbar/mapAddPoint.png',
    35,
    50
);
// 设置点选中的填充样式
let markerSelectedSymbol = new PictureMarkerSymbol(
    'images/toolbar/mapSelectedPoint.png',
    35,
    50
);
```

#### `esri/symbols/SimpleLineSymbol` 线符号用于在图形图层上绘制线性要素

```js
//SimpleLineSymbol以参数传入
//用法：new SimpleLineSymbol(style, color, width)
// 创建线符号（时空圈选--虚线 STYLE_DASH）
let lineSymbol = new SimpleLineSymbol(
    SimpleLineSymbol.STYLE_DASH,
    new Color([0, 180, 237]),
    2
);
```

#### `esri/symbols/SimpleFillSymbol` 填充符号用于在图形图层上绘制面要素

```js
//SimpleFillSymbol以参数传入
//用法：new SimpleFillSymbol(style, outline, color)
// 创建面符号
//lineSymbol为上面⤴️创建的线符号
let fillSymbol = SimpleFillSymbol(
    SimpleFillSymbol.STYLE_SOLID,
    lineSymbol,
    new Color([125, 184, 248, 0.16])
);
```

#### `esri/geometry/Point` 定个点坐标，由 X 坐标和 Y 坐标定义的位置。

```js
//Point以参数传入
//用法：new Point(x, y, spatialReference)
new Point(x, y, spatialReference);
```

#### `esri/geometry/Polyline` 折线，一个路径数组，其中每个路径是一个点数组。

```js
//Polyline以参数传入
//用法：new Polyline(json)
// 生成绘制的图形
const polylineJson = {
    paths: [...path], //绘制的路径数组
    spatialReference: { wkid: 4326 }
};
const polyline = new Polyline(polylineJson);
```

#### `esri/layers/GraphicsLayer` 设置自己的图形图层

```js
//GraphicsLayer以参数传入
//用法：new GraphicsLayer()/new GraphicsLayer(options?)
// 设置图解图层
let gl = new GraphicsLayer();
// 设置路线图层
let lineLayer = new GraphicsLayer('lineLayer');
```

#### `esri/graphic` 设置图形

```js
//Graphic以参数传入
//用法：new Graphic(json)
//new Graphic(geometry?, symbol?, attributes?, infoTemplate?)
const graphic = new Graphic({
    geometry: polyline,
    symbol: {
        color: [13, 195, 252, 0.9],
        outline: {
            color: [13, 195, 252],
            width: 2,
            type: 'esriSLS',
            style: 'esriSLSSolid'
        },
        type: 'esriSFS',
        style: 'esriSFSSolid'
    }
});
```

#### `dojo/dom` DOM 操作

需以参数传入，用于 DOM 操作。

#### `dojo/on` 在元素上绑定 events，需要引用它，通过 on 方法来实现。

on 的返回值是一个对象，只有一个 remove 方法。  
on.once(element,event name,handler)，参数同 on 一样，这个方法顾名思义就是只执行一次，在执行了 handler 后将会自动 remove。  
一个元素可以绑定多个 events，每个 event 按照绑定的先后顺序来执行的。

```js
// on以参数传入

//有前缀写法
obj.on('mouse-over',function(evt){
   ...
})
//无前缀写法
on(myDiv, mouse.enter,function(evt){
            domStyle.set(myDiv,"backgroundColor", "red");
        });
//移除事件
 let handler = on(myDiv, mouse.leave,function(evt){
            domStyle.set(myDiv,"backgroundColor", "");
        });
        handler.remove();//移除event
```

#### `dojo/domReady!` 是一个 AMD 加载的插件，将等到 DOM 完成加载后再返回。

只是等待 DOM 完成加载，而不等待其他 require()或 dojo.require()调用完成。 在 DOM 加载完之前不会调用。
