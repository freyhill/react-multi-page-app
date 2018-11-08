/**
 * @project: nav导航
 * @author: leinov
 * @date: 2018-10-11
 */

import React, { Component } from "react";
import "./nav.scss";

export default class Nav extends Component {

	componentDidMount() {

	}

	render() {

		return (
			<div className=" nav">
				<div className="columns">
					<div className=""><a href= "/">首页</a></div>
					<div className=""><a href= "/about">关于</a></div>
					<div className=""><a href= "https://github.com/leinov/webpack-react-multi-page/">github</a></div>
				</div>
	    </div>
		);
	}
}
