import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"
import { ILibraries } from "../IState";

const defaultState: ILibraries = {}

export function libraries(state: ILibraries = defaultState, action: IAction): ILibraries {
	switch (action.type) {
		case actionTypes.Library_Load_Success: {
			return {
				...state,
				[action.payload]: (window as any)[action.payload]
			};
		}
		case actionTypes.Library_Load_Failure: {
			return {
				...state,
				[action.payload]: undefined
			}
		}
	}

	return state;
}