export const ADD_TODO              = "ADD_TODO";
export const TOGGLE_TODO           = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER =  "SET_VISIBILITY_FILTER";
 
export const visibilityType = {
	SHOW_ALL      : "SHOW_ALL",
	SHOW_COMPLETED: "SHOW_COMPLETED",
	SHOW_ACTIVE   : "SHOW_ACTIVE"
};
 
export const addTodo = (text) => ({
	type: ADD_TODO,
	text
});
 
export const toggleTodo = (index) => ({
	type: TOGGLE_TODO,
	index
});
 
export const setVisibilityFilter = (filter) => ({
	type: SET_VISIBILITY_FILTER,
	filter
});
