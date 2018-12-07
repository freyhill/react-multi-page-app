/* eslint-disable no-console */

import { createStore } from "redux";
import todoList from "./reducer/index";
export default function configStore() {
	const store = createStore(todoList);
	return store;
}