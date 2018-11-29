import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import App from "./containers/App";
import { IState } from "./IState"
import reducers from "./reducers";
import StateStorage from "./StateStorage";

let stateStorage = new StateStorage();

let store = createStore(
	reducers,
	stateStorage.load(),
	applyMiddleware(thunkMiddleware));

store.subscribe(() => stateStorage.save(store.getState() as IState));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("example")
);