/* eslint-disable no-console */
/********************
 * @file:redux main js
 * @author: leinov
 * @date: 2018-12-07
 ********************/

import { createStore ,applyMiddleware, compose} from "redux";
import todoList from "./reducer/index";
console.log(process.env.NODE_ENV);
export default function configStore() {
	const store = createStore(todoList, 
	(process.env.NODE_ENV === 'development') &&
	  typeof window === 'object' &&
	  typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f // add support for Redux dev tools
  );
	return store;
}

