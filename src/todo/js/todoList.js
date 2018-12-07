import React from "react";
import Todo from "./todo";
 
class TodoList extends React.Component {
	onToggleClick = (index)=>{
		this.props.onToggleClick(index);
	}
	onDeleteClick=(index)=>{
		this.props.deleteTodo(index);
	}
	render() {
		const todoList = this.props.todos.map((item,index)=>{
			 return (
				 <Todo 
					key = {index} 
					todoItem={item} 
					onClick = {this.onToggleClick.bind(this,index)}
					onDeleteClick={this.onDeleteClick.bind(this,index)}
				 />
			 );
		});
		return (
			<ul className={`${this.props.todos.length<1?"":"list-shadow"} todo-list`}>
				{todoList}
			</ul>
		);
	}
}
 
export default TodoList;
