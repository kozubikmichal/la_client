import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"
import { ViewMode } from "../ViewMode"

const defaultState: ViewMode = ViewMode.Panels;

export function mode(state: ViewMode = defaultState, action: IAction): ViewMode {
	switch (action.type) {
		case actionTypes.Mode_Switch: {
			return action.payload as ViewMode;
		}
	}
	return state;
}