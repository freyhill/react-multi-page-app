<div align="center">
    <img width="120px" src="https://raw.githubusercontent.com/leinov/react-multi-page-app/master/react-multi.png" /><br>
    <div>
        <img src="https://img.shields.io/github/license/leinov/react-multi-page-app.svg" />&nbsp
        <img src="https://img.shields.io/github/forks/leinov/react-multi-page-app.svg" />&nbsp
        <img src="https://img.shields.io/github/stars/leinov/react-multi-page-app.svg">&nbsp
        <img src="https://img.shields.io/npm/dt/rppx-cli.svg" />&nbsp
        <img src="https://img.shields.io/npm/v/rppx-cli.svg?style=flat" />
    </div>
    <h1>react-multi-page-app</h1>
</div>
<br>

中文 | [English](README.md)
<br><br>
react-multi-page-app是一个基于react和webpack的多页面应用架构，通过编译生成对应目录结构清晰的静态页面,实现多页面便捷开发维护

## 概览

key | value
---|---
名称 | react-multi-page-app
描述 | 基于react的多页面应用脚手架
命令 | [rppx-cli](https://github.com/leinov/rppx-cli)
作者 | leinov
版本 | 1.3.0


## 网页效果 
www.h5cool.com/react-multi-page-app/demo


## 特性
* 👩‍👩‍👧‍👧  支持多页面同时热加载开发
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

开发

```
$ npm run dev
```

编译

```
$ npm run build
```

运行
```
$ npm start
```

自动打开浏览器浏览页面 开发: http://localhost:3100  生产: http://localhost:3118

## 开发及使用

在 ```src``` 下的 ```pages``` 目录里添加新页面文件夹并创建，在根目录执行 ```npm run dev``` 即可

```
|-- src
    |-- index/
    |-- page2/
        |-- index.js
        |-- page2.scss
        |-- pageinfo.json
```

## [博客](https://github.com/leinov/react-multi-page-app/issues/1)

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