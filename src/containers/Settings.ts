import { connect } from "react-redux";
import ISettings from "../ISettings";

import {
	ISettingsDataProps,
	ISettingsCallbackProps,
	Settings
} from "../components/Settings"

import { IState } from "../IState";
import { closeSettings, saveSettings } from "../actions/settings";

const mapStateToProps = (state: IState): ISettingsDataProps => {
	return {
		show: state.showSettings,
		config: {
			restaurants: state.loadedRestaurants.map(r => {
				return {
					restaurant: r,
					hidden: state.restaurants.hidden.indexOf(r.id) !== -1
				}
			}),
			effects: [{
				id: "snowFall",
				name: "Snow",
				disabled: true
			}].map(effect => {
				effect.disabled = state.effects.some(e => e.id === effect.id && e.disabled);
				return effect;
			})
		}
	};
}

const mapDispatchToProps = (dispatch: Function): ISettingsCallbackProps => {
	return {
		cancel: () => {
			dispatch(closeSettings())
		},
		save: (config: ISettings) => {
			dispatch(saveSettings(config))
		}
	}
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;