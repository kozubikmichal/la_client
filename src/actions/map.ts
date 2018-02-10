import actionTypes from "./actionTypes"
import IAction from "./IAction";
import { IRestaurant } from "../IMenu";

export function activateMarker(marker: any, restaurant: IRestaurant): IAction {
	return {
		type: actionTypes.Map_ActivateMarker,
		payload: {
			marker: marker,
			restaurant: restaurant
		}
	}
}