import actionTypes from "./actionTypes"
import IAction from "./IAction";
import { INewFeature } from "../IState";

export function markRead(feature: INewFeature): IAction {
	return {
		type: actionTypes.NewFeature_Close,
		payload: feature
	}
}
