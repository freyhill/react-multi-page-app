import React from "react";
 
class AddTodo extends React.Component {
	render() {
		return (
			<div>
				<input 
					className="input" 
					onChange={this.props.onChange} 
					onKeyDown={this.props.onKeyDown}
				/>
			</div>
		);
	}
}
export default AddTodo;
