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
			<div className="menu">
				<div className="columns nav">
					<div className="nav-item"><a href= "/">Home</a></div>
					<div className="nav-item"><a href= "/todo">Todo</a></div>
					<div className="nav-item"><a href= "https://github.com/leinov/webpack-react-multi-page/">Github</a></div>
				</div>
	    </div>
		);
	}
}
