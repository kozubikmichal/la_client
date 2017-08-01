import actionTypes from "./actionTypes"
import IAction from "./IAction";

import ApiWrapper from "../ApiWrapper";

export interface IRestaurantAction extends IAction {
	type: string,
	payload: string
}

const createLoadRestaurants = (apiWrapper: ApiWrapper) => {
	return () => (dispatch: Function) => {
		return apiWrapper.loadRestaurants().then(data => {
			dispatch(loadRestaurantsSuccess(data));
		}).catch(() => {
			dispatch(loadRestaurantsFailure());
		})
	}
}

export const loadRestaurants = createLoadRestaurants(new ApiWrapper());

export function loadRestaurantsSuccess(data: any): IAction {
	return {
		type: actionTypes.Restaurants_Load_Success,
		payload: {
			data: data
		}
	}
}

export function loadRestaurantsFailure(): IAction {
	return {
		type: actionTypes.Restaurants_Load_Failure
	}
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
