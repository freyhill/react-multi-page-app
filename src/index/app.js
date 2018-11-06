/**
 * @project: 主业务逻辑页面
 * @author: leinov
 * @date: 2018-10-08
 */

import React, { Component } from "react";
import Nav from "../component/nav";
import indexpic from "./images/index.jpg";
export default class App extends Component {

	componentDidMount() {

	}

	render() {

		return (
			<div>
				<Nav />
				<div className="index">
					<img src={indexpic} />
					<p>这是首页</p>
				</div>
			</div>
		);
	}
}
