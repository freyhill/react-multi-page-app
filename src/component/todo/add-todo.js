import React from "react";
 
class AddTodo extends React.Component {
	render() {
		return (
			<div>
				<input 
					placeholder="input today todo list and press the enter key"
					className="input" 
					onChange={this.props.onChange} 
					onKeyDown={this.props.onKeyDown}
				/>
			</div>
		);
	}
}

export default AddTodo;
