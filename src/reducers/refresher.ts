import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"
import Refresher from "../Refresher"

const createRefresher = (refresher: Refresher) => {
	return (state: any, action: IAction) => {
		switch (action.type) {
			case actionTypes.Refresher_Start: {
				refresher.start()
			}
		}
		return state || null;
	}
}


export const refresher = createRefresher(new Refresher());