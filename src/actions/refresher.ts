import actionTypes from "./actionTypes"
import IAction from "./IAction";

export function startRefresher(): IAction {
	return {
		type: actionTypes.Refresher_Start
	}
}