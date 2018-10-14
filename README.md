# webpack4+react16多页面架构
> webpack在单页面打包上应用广泛，以create-react-app为首的脚手架众多，单页面打包通常是将业务js，css打包到同一个html文件中，整个项目只有一个html文件入口,但也有许多业务需要多个页面不同的入口，比如不同的h5活动，或者需要支持seo的官方网站，都需要多个不同的html，webpck-react-muitl架构让你可以在多页面在项目开发中保证每个页面都可以热更新并且打包后有清晰的文件层次结构。

## 安装使用

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
            |-- app.js// 业务js
            |-- index.sass
            |-- index.js //页面js入口
        |-- about //about页面打包入口
            |-- images/
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
    <script type="text/javascript" src="bundle.js"></script>
  </body>
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
```在dist下打包出一个bundle.js```

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
``` 上面在dist下打包出一个于entry属性名对应的```

#### 将每个js挂载到相应的html文件上
这里我们需要用到```html-webpack-plugin```这个webpack插件,每添加一个页面就需要在plugins添加一个new HtmlWebpackPlugin({....})
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
> ```html-webpack-plugin```会通过```template.html```模板生成对应的filename名的html文件，并一并打包到output中对应的文件夹下，注意，在没有特殊配置的情况下所有打包的文件都是对应到output中```path```这个目录下，也包括html。这里的```chunks```需要注意，它是确定该html需要引入哪个js，如果没写的话，默认会引出所有打包的js，当然这不是我们想要的。

上面的配置最终可以在dist下打包出下面的文件结构
```
|-- dist
    |-- index.js
    |-- about.js
    |-- index.html //内挂载index.js
    |-- about.html //内挂载about.js
```
通过上面这样的配置，再加上devServer，我们已经可以实现多页面的配置开发了，但这样很不智能，因为你每增加一个页面，就要在wepback里面配置一次，会非常繁琐，所以我们来优化下，让我们只专注于开发页面，配置交给webpack自己.

#### webpack多页面配置优化
我们在看下src下面的文件结构
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
src下面每个文件夹对应一个html页面的js业务，如果我们直接把文件夹对应入口js找到并把他们合并生成对应的entry，那是不是就不用手动写entry了呢，是的
* getEntry.js
```
/* eslint-env node */
/**
 * @file: 获取entry文件入口
 * @author: leinov
 * @date: 2018-10-11
 */
const fs = require("fs");

/**
 * 【获取entry文件入口】
 *
 * @param {String} path 路径
 * @returns {Object} 返回的entry { "about/about":"./src/about/about.js",...}
 */
module.exports = function getEnty(path){
	let entry = {};
	let existpath = fs.existsSync(path); //是否存在目录
	if(existpath){
		let readdirSync = fs.readdirSync(path);  //获取目录下所有文件
		readdirSync.map((item)=>{
			let currentPath = `${path}/${item}`;
			let isDirector = fs.statSync(currentPath).isDirectory(); //判断是否是一个文件夹
			if(isDirector && item !== "component"){
			    /**
                 * 下面输出格式类似为{"about/about":".src/aobout/index.js"}
                 * 这样目的是为了将js打包到对应的文件夹下
                 */
				entry[`${item}/${item}`] = `${currentPath}/index.js`;
			}
		});
		return entry;
	}
};

```
在webpack中使用getEntry
```
const getEntry = require("./webpackConfig/getEntry");
const entry = getEntry();

module.exports = (env, argv) => ({
	entry: entry,
})

```
> 这样我们就自动获取到了entry
##### html-webpack-plugin配置
因为每个页面都需要配置一个html，所以我们也通过fs模块获取src下的目录，遍历出对应得html-webpack-plugin中
* getFilepath.js
```

/* eslint-env node */

/**
 * @project: 遍历文件目录
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
	let arr = [];
	let existpath = fs.existsSync(path); //是否存在目录
	if(existpath){
		let readdirSync = fs.readdirSync(path);  //获取目录下所有文件
		readdirSync.map((item)=>{
			let currentPath = path + "/" + item;
			let isDirector = fs.statSync(currentPath).isDirectory(); //判断是不是一个文件夹
			if(isDirector){
				arr.push(item);
			}
		});
		return arr;
	}
};

```
##### htmlconfig.js
```
/**
 * @project 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 */

module.exports={
	index:{
		title: "首页",//网站标题
		filename:"index.html",
		template: "./src/template.html",  
		chunks:["index/index"],

	},
	about:{
		title: "关于页面",//网站标题
		filename:"about.html",
		template: "./src/template.html",
		chunks:["about/about"]
	}
};

```

通过上面一系列的封装webpack最终的配置如下

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getEntry = require("./webpackConfig/getEntry");
const getFilePath = require("./webpackConfig/getFilepath");
const htmlconfig =require("./webpackConfig/htmlconfig");

const entry = getEntry("./src");
const htmlarr=[];//注入html模板
getFilePath("./src").map(pathname => {
	htmlarr.push(new HtmlWebpackPlugin(htmlconfig[pathname]));
});

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
        ...htmlarr
	]
})
```
这样一个完整的多页面架构配置就完成了，完整代码参考项目code
