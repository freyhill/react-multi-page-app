import { 
	SHOW_ALL,
	SHOW_COMPLETED ,
	SHOW_ACTIVE} from "../actionTypes";
export const filtAction = (filter="SHOW_ALL") => ({
	type: filter
});
 
export const filterTodo = (todolist, fiterState) => {
	
	switch (fiterState) {
	case SHOW_ALL:
		return todolist;
	case SHOW_COMPLETED:
		return todolist.filter(todo => todo.completed);
	case SHOW_ACTIVE:
		return todolist.filter(todo => !todo.completed);
	default:
		return todolist;
	}
};