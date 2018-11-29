import { combineReducers } from "redux";

import { restaurants } from "./restaurants"
import { loadedRestaurants } from "./loadedRestaurants"
import { menus } from "./menus"
import { settings } from "./settings"
import { newFeatures } from "./news"
import { mode } from "./mode"
import { libraries } from "./libraries"
import { map } from "./map"

const reducers = combineReducers({
	restaurants: restaurants,
	menus: menus,
	loadedRestaurants: loadedRestaurants,
	showSettings: settings,
	newFeatures: newFeatures,
	viewMode: mode,
	libraries: libraries,
	map: map
});

export default reducers;