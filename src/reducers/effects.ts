import actionTypes from "../actions/actionTypes"
import IAction from "../actions/IAction"

import { IEffect } from "../IState"
import ISettings from "../ISettings";

const defaultState: IEffect[] = []

export function effects(state: IEffect[] = defaultState, action: IAction): IEffect[] {
	switch (action.type) {
		case actionTypes.Settings_Save: {
			let settings: ISettings = action.payload;
			return settings.effects.slice();
		}
		case actionTypes.Effect_Disable: {
			return state.slice()
				.filter(effect => effect.id !== action.payload)
				.concat({
					id: action.payload,
					disabled: true
				});
		}
	}

	return state;
}