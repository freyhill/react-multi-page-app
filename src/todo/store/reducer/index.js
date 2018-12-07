import {combineReducers} from "redux";
import todos from "./todo";
import setFilter from "./setFilter";
 
const todoApp = combineReducers({
	todos,
	setFilter
});
 
export default todoApp;
