import {ADD_TODO, TOGGLE_TODO,DELET_TODO} from "../action/todoAction";
let initState=[];
const todos = (state = initState, action) => {
	console.log(state);
	switch (action.type) {
	case ADD_TODO:
		return [
			...state,
			{   
				text: action.text,
				completed: false
			}
		];
	case TOGGLE_TODO:
		return state.map((todo, index) => {
			
			if (action.index === index) {
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
export default todos;