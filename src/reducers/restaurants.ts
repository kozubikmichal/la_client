import { combineReducers } from "redux";
import actionTypes from "../actions/actionTypes"
import { IRestaurantAction } from "../actions/restaurant"
import IAction from "../actions/IAction"
import { IRestaurants } from "../IState"
import { ISettings } from "../ISettings"

const collapsed = (state: string[] = [], action: IRestaurantAction): string[] => {
	switch (action.type) {
		case actionTypes.Restaurant_Collapse: {
			return state.concat(action.payload);
		}
		case actionTypes.Restaurant_Expand: {
			return state.filter(r => r !== action.payload);
		}
	}
	return state;
}

const hidden = (state: string[] = [], action: IAction): string[] => {
	switch (action.type) {
		case actionTypes.Settings_Save: {
			let settings: ISettings = action.payload;
			return settings.restaurants.filter(s => s.hidden).map(s => s.restaurant.id);
		}
	}
	return state;
}

export const restaurants = combineReducers({
	hidden: hidden,
	collapsed: collapsed
})