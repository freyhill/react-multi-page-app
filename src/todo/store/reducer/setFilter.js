import {SET_VISIBILITY_FILTER,visibilityType} from "../action/todoAction";
 
const setFilter = (state = visibilityType.SHOW_ALL, action) => {
    
	switch (action.type) {
	case SET_VISIBILITY_FILTER:
		return action.filter;
	default:
		return state;
	}
};
 
export  default setFilter;
