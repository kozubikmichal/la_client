import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"
import { IRestaurant } from "../IMenu"

const defaultState: IRestaurant[] = [];

export function loadedRestaurants(state: IRestaurant[] = defaultState, action: IAction): IRestaurant[] {
	switch (action.type) {
		case actionTypes.Restaurants_Load_Success: {
			return action.payload.data;
		}
		case actionTypes.Restaurants_Load_Failure: {
			return null;
		}
	}
	return state;
}
