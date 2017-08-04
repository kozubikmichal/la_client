import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"

import { INewFeature } from "../IState"

export function newFeatures(state: INewFeature[] = [], action: IAction): INewFeature[] {
	switch (action.type) {
		case actionTypes.NewFeature_Close: {
			return state.map(f => {
				if (f.elementId === action.payload.elementId) {
					return {
						...f,
						shown: true
					}
				} else {
					return f
				}
			})
		}
	}

	return state;
}