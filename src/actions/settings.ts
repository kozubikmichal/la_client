import actionTypes from "./actionTypes"
import IAction from "./IAction";
import ISettings from "../ISettings";

export function openSettings(): IAction {
	return {
		type: actionTypes.Settings_Open
	}
}

export function closeSettings(): IAction {
	return {
		type: actionTypes.Settings_Close
	}
}

export function saveSettings(settings: ISettings): IAction {
	return {
		type: actionTypes.Settings_Save,
		payload: settings
	}
}