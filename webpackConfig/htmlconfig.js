/**
 * @project 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 */

module.exports={
	index:{
		title: "首页",//网站标题
		meta:{
			keywords:"webpack，react，es6",
			description:"这是一个webpack，react多页面架构的首页"
		},
		filename:"index.html",//生成的html
		favicon:"", //网站导航栏显示小图标
		template: "./src/template.html", //该路径要写相对于webpack.config.js的路径
		chunks:["index/index"],
		minify:{//压缩html
			collapseWhitespace: true,
			preserveLineBreaks: true
		}
	},
	about:{
		title: "关于页面",//网站标题
		meta:{
			keywords:"webpack，react，es6",
			description:"这是一个webpack，react多页面架构的首页"
		},
		filename:"about.html",//生成的html
		favicon:"", //网站导航栏显示小图标
		template: "./src/template.html", //该路径要写相对于webpack.config.js的路径
		chunks:["about/about"],
		minify:{//压缩html
			collapseWhitespace: true,
			preserveLineBreaks: true
		}
	}
};
