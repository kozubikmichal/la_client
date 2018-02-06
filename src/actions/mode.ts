import actionTypes from "./actionTypes"
import IAction from "./IAction";
import { ViewMode } from "../ViewMode";

export function switchMode(viewMode: ViewMode): IAction {
	return {
		type: actionTypes.Mode_Switch,
		payload: viewMode
	}
}
