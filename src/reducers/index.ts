import { combineReducers } from "redux";
import { IState } from "../IState"

import { restaurants } from "./restaurants"
import { loadedRestaurants } from "./loadedRestaurants"
import { menus } from "./menus"

const reducers = combineReducers<IState>({
	restaurants: restaurants,
	menus: menus,
	loadedRestaurants: loadedRestaurants
});

export default reducers;