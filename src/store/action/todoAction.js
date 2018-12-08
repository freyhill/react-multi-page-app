import {
	ADD_TODO,
	TOGGLE_TODO,
	DELET_TODO,

} from "../actionTypes";

export const addTodo = (text) => ({
	type: ADD_TODO,
	text
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id
});

export const deleteTodo = (newdata) => ({
	type: DELET_TODO,
	newdata: newdata
});
export const setVisibilityFilter = (filter) => ({
	type: filter,
	filter
});
