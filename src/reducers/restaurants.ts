import actionTypes from "../actions/actionTypes"
import { IRestaurantAction } from "../actions/restaurant"
import IAction from "../actions/IAction"
import { IRestaurants } from "../IState"

const defaultState: IRestaurants = {
	collapsed: [],
	hidden: []
}

const enrichCollection = (state: IRestaurants, collection: "collapsed" | "hidden", id: string): IRestaurants => {
	return {
		...state,
		[collection]: state[collection].concat(id)
	}
}

const pickFromCollection = (state: IRestaurants, collection: "collapsed" | "hidden", id: string): IRestaurants => {
	return {
		...state,
		[collection]: state[collection].filter(entry => entry !== id)
	}
}

export function restaurants(state: IRestaurants = defaultState, action: IRestaurantAction): IRestaurants {
	switch (action.type) {
		case actionTypes.Restaurant_Collapse: {
			return enrichCollection(state, "collapsed", action.payload);
		}
		case actionTypes.Restaurant_Expand: {
			return pickFromCollection(state, "collapsed", action.payload);
		}
		case actionTypes.Restaurant_Hide: {
			return enrichCollection(state, "hidden", action.payload);
		}
		case actionTypes.Restaurant_Unhide: {
			return pickFromCollection(state, "hidden", action.payload);
		}
	}
	return state;
}