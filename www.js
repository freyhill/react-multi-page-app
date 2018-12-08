/* eslint-env node */

/**
 * @file: 线上启动程序
 * @author: leinov
 * @date: 2018-10-10
 */

var express = require("express");
var app = express();
var http = require("http");
var port = "3118";
//在浏览器中打开 下面执行
const opn = require("opn");

//启动压缩
var compression = require("compression");
app.use(compression());

//静态页面路径
app.use(express.static("./build"));
app.set("port", port);

//启动server
var server = http.createServer(app);
server.listen(port);

server.on("listening", onListening);

function onListening() {
	console.log(`server port 3118 listening and open browser with http://localhost:${port}....` );
	opn(`http://localhost:${port}`,"chrome");
}
