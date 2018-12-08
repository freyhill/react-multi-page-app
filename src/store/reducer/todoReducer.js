import {
	ADD_TODO,
	TOGGLE_TODO,
	DELET_TODO
} from "../actionTypes";
let id  = 0;
let initState = [{
	text:"coding",
	id:0,
	completed: false,
}];

const todoList = (state = initState, action) => {
	console.log("state",state);
	console.log("action",action);
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false,
					id:id+=1
				}
			];
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				console.log(todo.id,action.id);
				if (action.id === todo.id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		case DELET_TODO:
			return action.newdata;
		
		default:
			return state;
	}
};

export default todoList