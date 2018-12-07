import React from "react";
import {connect} from "react-redux";
import AddTodo from "./js/addTodo";
import TodoList from "./js/todoList";
import Filter from "./js/filter";
import {visibilityType} from "./store/action/todoAction";
import {addTodo, toggleTodo, setVisibilityFilter} from "./store/action/todoAction";
 
class App extends React.Component {
	constructor(props){
		super(props);
		this.state={}
		console.log("thies.pro",this.props);
	}
	onChange=(e)=>{
		this.setState({value:e.currentTarget.value});
	}
	// 按下键盘存入redux
	onKeyDown=(e)=>{
		if(e.keyCode!==13){
			return;
		}
		const value = this.state.value;
		this.props.dispatch(addTodo(value));
	}
	render() {
		const {dispatch, todos, visibilityFilter} = this.props;
		
		return (
			<div>
				<AddTodo onChange={this.onChange} onKeyDown={this.onKeyDown}/>
				<TodoList 
					todos = {todos}
					onToggleClick = {index => {
						dispatch(toggleTodo(index));
					}}
				/>
				<Filter 
					filter = {visibilityFilter}
					onFilterChange = {filter => {
						dispatch(setVisibilityFilter(filter));
					}}
				/>
			</div>
		);
	}
}
 




 
const selectTodo = (todos, visibilityFilter) => {
	switch (visibilityFilter) {
	case visibilityType.SHOW_ALL:
		return todos;
	case visibilityType.SHOW_COMPLETED:
		return todos.filter(todo => todo.completed);
	case visibilityType.SHOW_ACTIVE:
		return todos.filter(todo => !todo.completed);
	default:
		return todos;
	}
};
 
const mapStatesToProps = (state) => ({
	todos: selectTodo(state.todos, state.setFilter),
	visibilityFilter: state.setFilter
});
 
 
export default connect(
	mapStatesToProps
)(App);

