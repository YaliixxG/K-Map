---
title: webpack的优化
---
# <font color="#8B892B">Hwebpack的优化</font>   

### 预编译资源模块  

在项目中经常会引入一些`第三方库`，而这些第三方库不是会经常更新的，所以可以在第一次打包时，将这些第三方库进行打包，后续如果不是升级这些库的情况下，让webpack不再对此进行打包处理，提高打包速度。这就是预编译资源模块。  
可以使用`DllPlugin`，`DllReferencePlugin`插件来实现。  

### 利用缓存提升二次构建速度  

对于静态文件，一些公共文件，可以利用缓存来提高二次编译速度。  
使用`babel-loader`，`cache-loader`， `hard-source-webpack-plugin`来实现