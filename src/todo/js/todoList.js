import React from "react";
import Todo from "./todo";
 
class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo, index) => 
						<Todo key = {index}
							{...todo}
							onClick = {() => {
								this.props.onToggleClick(index);
							}}
						/>
					)
				}
			</ul>
		);
	}
}
 
export default TodoList;
