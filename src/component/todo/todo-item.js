import React from "react";
 
class TodoItem extends React.Component {
	render() {
		return (
			<li className="todo-item flex v-center">
				<span className={`${this.props.todoItem.completed ? "todo-checked" :""} todo-checkbox `} onClick={this.props.onClick}></span>	
				<span className={`${this.props.todoItem.completed ? "todo-true" :"todo-false"} flex1 toto-text` } onClick={this.props.onClick}>{this.props.todoItem.text}</span>
				<span className={`${this.props.todoItem.completed ? "todo-true" :"todo-false"}  toto-text v-center` } onClick={this.props.onDeleteClick}><i className="fa fa-trash-alt delete-todo"></i></span>
			</li>
		);
	}
}
 
export default TodoItem;
