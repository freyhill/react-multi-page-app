import React from "react";
import TodoItem from "./todo-item";
 
class TodoList extends React.Component {
	onToggleClick = (index)=>{
		this.props.onToggleClick(index);
	}
	onDeleteClick=(index)=>{
		this.props.deleteTodo(index);
	}
	render() {
		const todoList = this.props.todoList.map((item,index)=>{
			 return (
				 <TodoItem 
					key = {index} 
					todoItem={item} 
					onClick = {this.onToggleClick.bind(this,item.id)}
					onDeleteClick={this.onDeleteClick.bind(this,item.id)}
				 />
			 );
		});
		return (
			<ul className={`${this.props.todoList.length<1?"":"list-shadow"} todo-list`}>
				{todoList}
			</ul>
		);
	}
}
 
export default TodoList;
