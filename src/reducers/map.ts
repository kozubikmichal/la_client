import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"

import { IMapState } from "../IState"
import { IRestaurant } from "../IMenu";

const defaultState: IMapState = {
	activeMarker: null,
	activeRestaurant: null
}

interface IPayload {
	marker: any,
	restaurant: IRestaurant
}

export function map(state: IMapState = defaultState, action: IAction): IMapState {
	let payload = action.payload as IPayload;

	switch (action.type) {
		case actionTypes.Map_ActivateMarker: {
			if (state.activeMarker === payload.marker) {
				return {
					...state,
					activeMarker: null,
					activeRestaurant: null
				}
			} else {
				return {
					...state,
					activeMarker: payload.marker,
					activeRestaurant: payload.restaurant
				}
			}
		}
	}

	return state;
}