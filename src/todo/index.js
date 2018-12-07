/* eslint-disable no-unused-vars */
/**
* @project:页面js主引文件
* @author: leinov
* @date: 2018-10-08
*/

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./store/index.js";
import App from "./app.js";
import "./index.scss";

const store = configStore();
ReactDOM.render(
	<Provider store={store}>   
		<App />
	</Provider>, 
	document.getElementById("root"));
