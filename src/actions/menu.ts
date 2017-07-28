import actionTypes from "./actionTypes"
import IAction from "./IAction";

import ApiWrapper from "../ApiWrapper";

const createLoadMenu = (apiWrapper: ApiWrapper) => {
	return (id: string) => (dispatch: Function) => {
		return apiWrapper.loadMenu(id).then(data => {
			dispatch(loadMenuSuccess(id, data));
		}).catch(() => {
			dispatch(loadMenuFailure(id));
		})
	}
}

export const loadMenu = createLoadMenu(new ApiWrapper());

export function loadMenuSuccess(id: string, data: any): IAction {
	return {
		type: actionTypes.Menu_Load_Success,
		payload: {
			id: id,
			data: data
		}
	}
}

export function loadMenuFailure(id: string): IAction {
	return {
		type: actionTypes.Menu_Load_Failure,
		payload: id
	}
}