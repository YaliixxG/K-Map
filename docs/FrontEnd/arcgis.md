---
title: ArcGIS
---

# ArcGIS  

### Javascript API
::: tip
Javascript的API全部都是英文，所以我把自己要用到的记下来，方便以后开发查看。  
但是对于详细的用例和参数介绍，还是得啃文档。
:::  

#### `esri/map` 创建一个容器和所需的DOM结构，用于添加图层，图形，信息窗口和其他导航控件  
```js
//通常，使用DIV将地图添加到页面。地图的宽度和高度初始化为DIV容器的宽度和高度。
// 定义地图
            let map = new Map("map", {
                extent:extent, //地图可视范围，需设置
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
const titleUrl = 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer'
//加载地图服务，定义主题图层
let tiledLayer = new ArcGISTiledMapServiceLayer(titleUrl);
```  
#### `esri/SpatialReference` 用于在地图中定位地理要素的坐标 
```js
//wkid即well-known ID（定义好的） ，4326代表地理坐标系中的GCS_WGS_1984
new SpatialReference({wkid: 4326})
```  
#### `esri/layers/ArcGISTiledMapServiceLayer` 加载地图服务  
```js
//地图加载链接
const titleUrl = 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer'
//加载地图服务，定义主题图层
let tiledLayer = new ArcGISTiledMapServiceLayer(titleUrl);
```  
#### `esri/geometry/Extent` 设置地图的可视范围，边界框的最小和最大X和Y坐标。  

```js
/* 用法 ：new Extent(xmin, ymin, xmax, ymax, spatialReference)  
xmin：左下x坐标   
ymin：左下y坐标   
xmax：右上x坐标   
ymax：右上y坐标  */
let extent = new Extent(111.89099, 27.8510093, 114.256631248, 28.6642814548253, new SpatialReference({wkid: 4326}));
``` 
#### `esri/Color` 设置颜色  

```js
//里面可以写字符串、16进制以及rgba的数值数组
new Color('yellow')
new Color('#000')
new Color([13, 195, 252, 0.9])  
``` 
#### `dojo/dom-construct` DOM的创建  

```js
//domConstruct需作为参数引入 
const n = domConstruct.create("div");
const n = domConstruct.create("div", { innerHTML:"<p>hi</p>" });
``` 
#### `esri/dijit/Popup` 设置弹出窗口 

```js
//用法：new Popup(options, srcNodeRef)
//在项目中的，创建popup弹出层（点的提示)
const popup = new Popup(null, domConstruct.create('div'));
//后续方法等等...
popup.hide()
popup.show()
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
