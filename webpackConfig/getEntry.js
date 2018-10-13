/* eslint-env node */
/**
 * @project: 获取entry文件入口
 * @author: leinov
 * @date: 2018-10-11
 */
const fs = require("fs");

/**
 * 【获取entry文件入口】
 *
 * @param {String} path 路径
 * @returns {Object} 返回的entry { "about/aoubt":"./src/about/about.js",...}
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
         * 下面输出格式为{"about/about":".src/aobout/index.js"}
         * 这样目的是为了将js打包到对应的文件夹下
         */
				entry[`${item}/${item}`] = `${currentPath}/index.js`;
			}
		});
		return entry;
	}
};
