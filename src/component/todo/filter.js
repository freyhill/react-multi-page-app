import React from "react";
import {
	SHOW_ALL,
	SHOW_COMPLETED,
	SHOW_ACTIVE,
} from "store/actionTypes.js";
 
class Filter extends React.Component {

	onFilterChange=(filter)=>{
		this.props.onFilterChange(filter)
	}

	render() {
		return (
			<ul className="flex filter are-small">
                <li className="v-center flex">Filter:</li>
				<li className="button is-primary"  onClick={this.onFilterChange.bind(this,SHOW_ALL)}>All</li>
				<li className="button is-link "   onClick={this.onFilterChange.bind(this,SHOW_COMPLETED)}>completed</li>
				<li className="button is-danger " onClick={this.onFilterChange.bind(this,SHOW_ACTIVE)}>active</li>
			</ul>
		);
	}
}

export default Filter;
