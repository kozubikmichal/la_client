import actionTypes from "./actionTypes"
import IAction from "./IAction";

export interface IRestaurantAction extends IAction {
	type: string,
	payload: string
}

export function collapseRestaurant(id: string): IRestaurantAction {
	return {
		type: actionTypes.Restaurant_Collapse,
		payload: id
	}
}

export function expandRestaurant(id: string): IRestaurantAction {
	return {
		type: actionTypes.Restaurant_Expand,
		payload: id
	}
}

export function hideRestaurant(id: string): IRestaurantAction {
	return {
		type: actionTypes.Restaurant_Hide,
		payload: id
	}
}

export function unhideRestaurant(id: string): IRestaurantAction {
	return {
		type: actionTypes.Restaurant_Unhide,
		payload: id
	}
}