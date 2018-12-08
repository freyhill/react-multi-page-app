/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import Nav from "component/nav";
export default class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="main index column is-8">
					<h1 className="title">webpack react multi page</h1>
					<p>Webpack is widely used for single-page packaging.Scaffolding, led by create-react-app, is numerous.Single-page packaging usually refers to the business js, CSS packaging into the same HTML file, the whole project has only one HTML file entry.However, there are many businesses that require multiple entries to different pages, such as different h5 activities, or official websites that support seo, which require multiple different HTML,The webpack-react-multi-page architecture enables you to automate the packaging of newly created pages on multiple pages during project development and ensures that each page is hot replacement,and the build package has a clear hierarchy of files</p>
					<h1 className="title mt20">feature</h1>
					<ul>
						<li>👩‍👩‍👧‍👧 Support multiple pages simultaneously hot loading development</li>
						<li>📇 Automatically identifies newly created pages</li>
						<li>📝 Each page generates personalized information</li>
						<li>🚻 Classification of packaging</li>
						<li>🔗 Flexible extend</li>
					</ul>
					<h1 className="title mt20">use</h1>
					<pre>
						<li><em>npm install rppx-cli</em></li>
						<li><em>rppx init myproject</em></li>	
					</pre>
					<p className="mt20"><a href="https://github.com/leinov/webpack-react-multi-page">view more in github</a></p>	
				</div>
			</div>
		);
	}
}
