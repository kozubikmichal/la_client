import actionTypes from "./actionTypes"
import IAction from "./IAction";

export function disableEffect(effect: string): IAction {
	return {
		type: actionTypes.Effect_Disable,
		payload: effect
	}
}