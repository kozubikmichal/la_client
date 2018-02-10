import actionTypes from "./actionTypes"
import IAction from "./IAction";

import ScriptCache from "../ScriptCache";

const createLoadLibrary = (cache: ScriptCache) => {
	return (paths: Array<string>, id?: string) => (dispatch: Function) => {

		return cache.load(paths).then(() => {
			dispatch(loadLibrarySuccess(id));
		}).catch(() => {
			dispatch(loadLibraryFailure(id));
		})
	}
}

export const loadLibrary = createLoadLibrary(new ScriptCache());

export function loadLibrarySuccess(id: string): IAction {
	return {
		type: actionTypes.Library_Load_Success,
		payload: id
	}
}

export function loadLibraryFailure(id: string): IAction {
	return {
		type: actionTypes.Library_Load_Failure,
		payload: id
	}
}

