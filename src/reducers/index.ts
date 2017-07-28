import { combineReducers } from "redux";
import { IState } from "../IState"

import { restaurants } from "./restaurants"
import { menus } from "./menus"

const reducers = combineReducers<IState>({
	restaurants: restaurants,
	menus: menus
});

export default reducers;