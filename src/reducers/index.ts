import { combineReducers } from "redux";
import { IState } from "../IState"

import { restaurants } from "./restaurants"
import { loadedRestaurants } from "./loadedRestaurants"
import { menus } from "./menus"
import { refresher } from "./refresher"
import { settings } from "./settings"
import { newFeatures } from "./news"
import { mode } from "./mode"
import { libraries } from "./libraries"
import { map } from "./map"

const reducers = combineReducers<IState>({
	restaurants: restaurants,
	menus: menus,
	loadedRestaurants: loadedRestaurants,
	showSettings: settings,
	newFeatures: newFeatures,
	refresher,
	viewMode: mode,
	libraries: libraries,
	map: map
});

export default reducers;