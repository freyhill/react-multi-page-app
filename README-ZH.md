<div style="text-align:center">
    <img width="120px" src="https://raw.githubusercontent.com/leinov/react-multi-page-app/master/react-multi.png" /><br>
    <div style="text-align:center">
        <img src="https://img.shields.io/github/license/leinov/react-multi-page-app.svg" />&nbsp
        <img src="https://img.shields.io/github/forks/leinov/react-multi-page-app.svg" />&nbsp
        <img src="https://img.shields.io/github/stars/leinov/react-multi-page-app.svg">&nbsp
        <img src="https://img.shields.io/npm/dt/rppx-cli.svg" />&nbsp
        <img src="https://img.shields.io/npm/v/rppx-cli.svg?style=flat" />
    </div>
    <h1>react-multi-page-app</h1>
</div>
<br>

中文 | [English](xx)
<br><br>
webpack在单页面打包上应用广泛，以create-react-app为首的脚手架众多，单页面打包通常指的是将业务js，css打包到同一个html文件中，整个项目只有一个html文件入口,但也有**许多业务需要多个页面不同的入口，比如不同的h5活动，或者需要支持seo的官方网站，都需要多个不同的html**。**webpack-react-multi-page**架构让你可以在多页面在项目开发中**自动化打包新创建页面并保证每个页面都可以热更新** ，build打包后有清晰的文件层次结构。



## 概览

key | value
---|---
name | react-multi-page-app
desc | 基于react的多页面应用脚手架
cli | [rppx-cli]()
author | leinov
version | 1.3.0


## 网页实例 
www.h5cool.com/react-multi-page-app/demo
* 一个概览页面
* 基于react-redux的todo页面
* a link to github

## 特性
* 👩‍👩‍👧‍👧 S支持多页面同时热加载开发
* 📇 自动识别新创建页面
* 📝 每个页面生成个性化信息
* 🚻 分类打包
* 🔗 灵活扩展
 

## 安装
```
npm install rppx-cli -g

```

## 快速开始

全局安装```rppx-cli```命令并创建自己的react多页项目

安装 
```
$ npm install rppx-cli -g
```
创建react多页项目

```
$ rppx init my-react
```

安装依赖

```
$ npm install 
```
编译

```
$ npm run build
```

运行
```
$ npm start
```

自动打开浏览器浏览页面 http://localhost:3100 

## 开发及使用
在src下添加文件夹并创建 ```pageinfo.json``` 然后 ```npm run dev``` 即可
```
|-- src
    |-- index/
    |-- page2/
        |-- index.js
        |-- page2.scss
        |-- pageinfo.json
```

## 博客
* 如何实现
* 如何架构
* 详细使用
## 版本

版本 | 描述
---|---
1.3.0 | 添加创建命令<br> 添加demo页面 <br> 重构优化项目 
1.2.0 | html模版自动识别打包
1.1.0 | 初始项目

## License
[MIT](https://opensource.org/licenses/MIT)