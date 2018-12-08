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
module.exports = function getPath(path){
	let arr = [];
	let existpath = fs.existsSync(path); //是否存在目录
	if(existpath){
		let readdirSync = fs.readdirSync(path);  //获取目录下所有文件
		readdirSync.map((item)=>{
			let currentPath = path + "/" + item;
			let isDirector = fs.statSync(currentPath).isDirectory(); //判断是不是一个文件夹
			if(isDirector){ // component目录下为组件 需要排除
				arr.push(item);
			}
		});
		return arr;
	}
};
