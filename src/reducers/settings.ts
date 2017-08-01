import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"

const defaultState: boolean = false;

export function settings(state: boolean = defaultState, action: IAction): boolean {
	switch (action.type) {
		case actionTypes.Settings_Open: {
			return true;
		}
		case actionTypes.Settings_Close: {
			return false;
		}
	}
	return state;
}