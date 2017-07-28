import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"

import { IMenus } from "../IState"

const defaultState: IMenus = {}

export function menus(state: IMenus = defaultState, action: IAction): IMenus {
	switch (action.type) {
		case actionTypes.Menu_Load_Success: {
			return {
				...state,
				[action.payload.id]: action.payload.data
			};
		}
		case actionTypes.Menu_Load_Failure: {
			return {
				...state,
				[action.payload.id]: undefined
			}
		}
	}

	return state;
}