import React from "react";
import {visibilityType} from "../store/action/todoAction";
 
class Filter extends React.Component {
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return name;
		} else {
			return (
				<a href="#" onClick = {
					(e) => {
						e.preventDefault();
						this.props.onFilterChange(filter);
					}
				}>
					{name}
				</a>
			);
		}
	}
	render() {
		return (
			<div>
                options:
				{" "}
				{this.renderFilter(visibilityType.SHOW_ALL, "all")}
				{" ,"}
				{this.renderFilter(visibilityType.SHOW_COMPLETED, "accomplish")}
				{" ,"}
				{this.renderFilter(visibilityType.SHOW_ACTIVE, "unfinished")}
			</div>
		);
	}
}
 
export default Filter;
