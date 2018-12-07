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
                请选择:
				{" "}
				{this.renderFilter(visibilityType.SHOW_ALL, "All")}
				{" ,"}
				{this.renderFilter(visibilityType.SHOW_COMPLETED, "completed")}
				{" ,"}
				{this.renderFilter(visibilityType.SHOW_ACTIVE, "active")}
			</div>
		);
	}
}
 
export default Filter;
