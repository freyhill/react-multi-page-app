import React from "react";
import {connect} from "react-redux";
import AddTodo from "./js/addTodo";
import TodoList from "./js/todoList";
import Filter from "./js/filter";
import {visibilityType} from "./store/action/todoAction";
import {addTodo, toggleTodo,deleteTodo, setVisibilityFilter} from "./store/action/todoAction";
import Nav from "../component/nav";
class App extends React.Component {
	constructor(props){
		super(props);
		this.state={}
		
	}
	onChange=(e)=>{
		this.setState({value:e.currentTarget.value});
	}
	// 深拷贝
	deepCopy=(data)=> {
		 const that = this;
		if (Object.prototype.toString.call(data) === "[object Array]"){
			return data.map(((item) => {
				if (Object.prototype.toString.call(item) === "[object Array]" || Object.prototype.toString.call(item) === "[object Object]") {
					return that.deepCopy(item);
				}
				return item;
			}));
		} else if (Object.prototype.toString.call(data) === "[object Object]") {
			let newData = {};
			for (let i in data) {
				if (Object.prototype.toString.call(data[i]) === "[object Array]" || Object.prototype.toString.call(data[i]) === "[object Object]") {
					newData[i] = that.deepCopy(data[i]);
				} else {
					newData[i] = data[i];
				}
			}
			return newData;
		}
	}
	// 按下键盘存入redux
	onKeyDown=(e)=>{
		if(e.keyCode!==13){
			return;
		}
		const value = this.state.value;
		this.props.dispatch(addTodo(value));
	}

	// todo是否完成切换
	onToggleClick=(index)=>{
		console.log(index);
		this.props.dispatch(toggleTodo(index));
	}

	// 删除todo
	deleteTodo=(index)=>{
		const that = this;
		const arr = this.deepCopy(that.props.todos);
		arr.splice(index,1);
		this.props.dispatch(deleteTodo(arr));
	}
	render() {
		const {dispatch,visibilityFilter} = this.props;
		
		return (
			<div>
				<Nav />
				<div className="main todo">
					<h1 className="title">  todo</h1>
					<AddTodo 
						onChange={this.onChange} 
						onKeyDown={this.onKeyDown}
					/>
					<TodoList 
						todos = {this.props.todos}
						onToggleClick = {this.onToggleClick}
						deleteTodo={this.deleteTodo}
					/>
					<Filter 
						filter = {visibilityFilter}
						onFilterChange = {filter => {
							dispatch(setVisibilityFilter(filter));
						}}
					/>
				</div>
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

