# webpack4+react16多页面架构
![webpack-react-multi-page](http://www.h5cool.com/webpack-react3.png)

 webpack在单页面打包上应用广泛，以create-react-app为首的脚手架众多，单页面打包通常指的是将业务js，css打包到同一个html文件中，整个项目只有一个html文件入口,但也有**许多业务需要多个页面不同的入口，比如不同的h5活动，或者需要支持seo的官方网站，都需要多个不同的html**。**webpack-react-multi-page**架构让你可以在多页面在项目开发中**自动化打包新创建页面并保证每个页面都可以热更新** ，build打包后有清晰的文件层次结构。
## 概览

 key |value
---|---
名称 | webpack+react多页面架构
描述|简单易用的多页面自动化开发架构
开发者 | leinov
发布日期|2018-11-07
版本|2.0|

## 特性
* 👩‍👩‍👧‍👧 支持多页面同时热加载开发
* 📇 自动识别新创建页面
* 📝 每个页面生成个性化信息
* 🚻 分类打包
* 🔗 灵活扩展


## 安装&使用

```
// clone
git clone git@github.com:leinov/webpack-react-multi-page.git

// 安装依赖包
npm install

// 开发
npm run dev

// 编译打包
npm run build

// 启动生产页面
npm start
```
新创建页面在src下添加文件夹并创建```pageinfo.json``` 然后```npm run dev``` 即可
```
|-- src
    |-- index/
    |-- page2/
        |-- index.js
        |-- pageinfo.json
```
## 项目架构
#### 技术使用
* ```react16```
* ```webpack4```
    * ```html-webpack-plugin 生成html文件```
    * ```mini-css-extract-plugin css分离打包```
    * ```uglifyjs-webpack-plugin js压缩```
    * ```optimize-css-assets-webpack-plugin css压缩```
* ```es6```
* ```babel```
* ```node ```
    * ```opn 打开浏览器```
    * ```compression 开启gzip压缩```
    * ```express```
    * ```fs```
* ```git```

#### 目录结构
```
|-- webpack-react-multi-pages //项目
    |-- dist //编译生产目录
        |-- index
            |-- index.css
            |-- index.js
        |-- about
            |-- about.css
            |-- about.js
        |-- images
        |-- index.html
        |-- about.html
    |-- node_modules //node包
    |-- src //开发目录
        |-- index //index页面打包入口
            |-- images/
            |-- js
                |-- app.js// 业务js
            |-- index.sass
            |-- index.js //页面js入口
        |-- about //about页面打包入口
            |-- images/
                |--js
                    |-- app.js// 业务js
            |-- about.sass
            |-- about.js //页面js入口
        |-- template.html // html模板
        |-- style.sass //公共sass
    |-- webpackConfig //在webpack中使用
        |-- getEntry.js //获取入口
        |-- getFilepath.js //src下需要打包页面文件夹
        |-- htmlconfig.js //每个页面html注入数据
    |-- package.json
    |-- .gitignore
    |-- webpack.config.js //webpack配置文件
    |-- www.js //生产启动程序
```

## wiki
### webpack打包单页面应用
webpack在单页面打包上应用广泛，以create-react-app为首的接触脚手架众多，单页面打包通常指的是将业务js，css打包到同一个html文件中，整个项目只有一个html文件入口

### webpack单页面打包配置
webpack.config.js
```
module.exports = (env, argv) => ({
	entry: ".src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
		...
		],
	},
	plugins: [
	    new HtmlWebpackPlugin({
    		title: "首页",
    		filename:"index.html",
    		favicon:"",
    		template: "./src/template.html",

	    })
	]
});
```
这样就可以在```dist```文件夹下打包出一个下面这样的文件

```
<!DOCTYPE html>
<html lang="en">
    <head>
    <title>首页</title>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="bundle.js"></script></body>
</html>

```
### webpack多页面打包配置
webpack 的entry支持两种种格式
#### 打包单个文件
```
module.exports = {
  entry: '.src/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```
这样就会在dist下打包出一个bundle.js

#### 打包出多个文件

```
module.exports = {
  entry: {
    index:"./src/index.js",
    about:"./src/about.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' index.js,about.js这两个文件
  }
};
```
上面在dist下打包出两个与entry属性名对应的js文件

#### 将每个js挂载到相应的html文件上

这里我们需要用到```html-webpack-plugin```这个webpack插件,每添加一个页面就需要在plugins添加一个```new HtmlWebpackPlugin({....})```

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env, argv) => ({
    entry: {
        index:"./src/index.js",
        about:"./src/about.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' index.js,about.js这两个文件
    }
    ....//其他配置
    plugins: [
        new HtmlWebpackPlugin(
            {
        		filename:"index.html",//生成的index.html
        		template: "./src/template.html",}) //模板
        		chunks:["index"]
            }),
		new HtmlWebpackPlugin(
		    {
        		filename:"about.html",//生成的index.html
        		template: "./src/template.html",}) //模板
        		chunks:["index"]
        	})
	]
})
```

```html-webpack-plugin``` 会通过 ```template.html``` 模板生成对应的filename名的html文件，并一并打包到output中对应的文件夹下，注意，在没有特殊配置的情况下所有打包的文件都是对应到output中 ```path``` 这个目录下，也包括html。这里的 ```chunks``` 需要注意，它是确定该html需要引入哪个js，如果没写的话，默认会引出所有打包的js，当然这不是我们想要的。

上面的配置最终可以在dist下打包出下面的文件结构

```
|-- dist
    |-- index.js
    |-- about.js
    |-- index.html //内挂载index.js
    |-- about.html //内挂载about.js
```

通过上面这样的配置，再加上devServer，我们已经可以实现多页面的配置开发了，但这样很不智能，因为你每增加一个页面，就要在wepback里面配置一次，会非常繁琐，所以我们来优化下，让我们只专注于开发页面，配置交给webpack自己.

### webpack多页面配置优化

我们再看下src下面的文件结构

```
|-- src
    |-- index
        |-- app.js
        |-- index.scss
        |-- index.js
    |-- about
        |-- app.js
        |-- index.scss
        |-- index.js
```

src下面每个文件夹对应一个html页面的js业务，如果我们直接把文件夹对应入口js找到并把他们合并生成对应的entry，那是不是就不用手动写entry了呢，是的!

#### 遍历文件目录

```
/* eslint-env node */

/**
 * @file: getFilePath.js  遍历文件目录
 * @author: leinov
 * @date: 2018-10-11
 */

const fs = require("fs");

/**
 * 【遍历某文件下的文件目录】
 *
 * @param {String} path 路径
 * @returns {Array} ["about","index"]
 */
module.exports = function getFilePath(path){
	let fileArr = [];
	let existpath = fs.existsSync(path); //是否存在目录
	if(existpath){
		let readdirSync = fs.readdirSync(path);  //获取目录下所有文件
		readdirSync.map((item)=>{
			let currentPath = path + "/" + item;
			let isDirector = fs.statSync(currentPath).isDirectory(); //判断是不是一个文件夹
			if(isDirector && item !== "component"){ // component目录下为组件 需要排除
				fileArr.push(item);
			}
		});
		return fileArr;
	}
};
```

比如在src下有index页面项目，about项目 遍历结果为["index","about"];

#### 遍历生成打包入口数组

```
/* eslint-env node */
/**
 * @file: getEntry.js 获取entry文件入口
 * @author: leinov
 * @date: 2018-10-11
 * @update: 2018-11-04 优化入口方法 调用getFilePath
 */
const getFilePath = require("./getFilepath");
/**
 * 【获取entry文件入口】
 *
 * @param {String} path 引入根路径
 * @returns {Object} 返回的entry { "about/aoubt":"./src/about/about.js",...}
 */
module.exports = function getEnty(path){
	let entry = {};
	getFilePath(path).map((item)=>{
		/**
		 * 下面输出格式为{"about/about":"./src/aobout/index.js"}
		 * 这样目的是为了将js打包到对应的文件夹下
		 */
		entry[`${item}/${item}`] = `${path}/${item}/index.js`;
	});
	return entry;
};
```

这里我们使用getFilepath获取的数组，在获取到每个目录下的js文件，组合成一个js入口文件的如下格式的对象。

```
{
    "index/index":"./src/index/index.js",
    "about/about":"./src/about/index.js"
}
```

#### 在webpack中使用getEntry

```
const getEntry = require("./webpackConfig/getEntry");
const entry = getEntry();

module.exports = (env, argv) => ({
	entry: entry,
})

```

这样我们就自动获取到了entry

#### html-webpack-plugin自动配置

因为每个页面都需要配置一个html，而且每个页面的标题，关键字，描述等信息可能不同，所以我们在每个页面文件夹下创建一个pageinfo.json,通过fs模块获取到json里信息再遍历到对应得html-webpack-plugin中生成一个html插件数组。

```index/pageinfo.json```  生成```index.html```页面信息

```
{
    "title":"首页",
     "keywords":"webpack多页面"
}
```

```about/pageinfo.json``` 生成```about.html```页面信息供

```
{
    "title":"关于页面",
    "keywords":"webpack多页面关于页面"
}
```

通过fs遍历读取并生成HtmlWebpackPlugin数组供webpack使用

#### 遍历html插件数组

```
/**
 * @file htmlconfig.js  页面html配置
 * @author:leinov
 * @date: 2018-10-09
 * @update: 2018-11-05
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getFilePath = require("./getFilepath");
let htmlArr = [];

getFilePath("./src").map((item)=>{
	let infoJson ={},infoData={};
	try{
		// 读取pageinfo.json文件内容，如果在页面目录下没有找到pageinfo.json 捕获异常
		infoJson = fs.readFileSync(`src/${item}/pageinfo.json`,"utf-8");//
		infoData = JSON.parse(infoJson);
	}catch(err){
		infoData = {};
	}
	htmlArr.push(new HtmlWebpackPlugin({
		title:infoData.title ? infoData.title : "webpack,react多页面架构",
		meta:{
			keywords: infoData.keywords ? infoData.keywords : "webpack，react，github",
			description:infoData.description ? infoData.description : "这是一个webpack，react多页面架构"
		},
		chunks:[`${item}/${item}`], //引入的js
		template: "./src/template.html",
		filename : item == "index" ? "index.html" : `${item}/index.html`, //html位置
		minify:{//压缩html
			collapseWhitespace: true,
			preserveLineBreaks: true
		},
	}));
});

module.exports = htmlArr;
```

#### wbpack终极配置

```
const path = require("path");
const getEntry = require("./webpackConfig/getEntry"); //入口配置
const entry = getEntry("./src");
const htmlArr =require("./webpackConfig/htmlConfig");// html配置

module.exports = (env, argv) => ({
    entry: entry
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
    ....//其他配置
    devServer: {
	port: 3100,
	open: true,
    },
    plugins: [
        ...htmlArr
    ]
})
```

这样一个自动化完整的多页面架构配置就完成了，如果我们要新创建一个页面

* 1. 在src下创建一个文件目录
* 2. 在新创建的文件目录下添加```index.js```（必须，因为是webpack打包入口文件）
* 3. 在新创建文件夹下添加```pageinfo.json```（非必须） 供html插件使用
* 4. ```npm run dev```开发
完整代码参考项目[code](https://github.com/leinov/webpack-react-multi-page)

## 版本

|版本 | 日期 | 分支 | 备注
|:--:|:--:|:--:|:--:|
[2.0](https://github.com/leinov/webpack-react-multi-page) | 2018-11-08|```master```|优化html插件自动化
[1.0](https://github.com/leinov/webpack-react-multi-page/tree/version1.0) | 2018-10-07|```version1.0```| 第一版
