import { connect } from "react-redux";

import {
	WoWBanner, IWoWBannerCallbackProps, IWoWBannerDataProps
} from "../components/WoWBanner"
import { loadLibrary } from "../actions/libraries";
import { IState } from "../IState";
import { disableEffect } from "../actions/effect";
import effectTypes from "../effects/effectTypes";

const SCRIPT_SOURCE = "//www.tickcounter.com/static/js/loader.js";
const ACTIVE_TO = new Date(2019, 7, 31);

const mapStateToProps = (state: IState): IWoWBannerDataProps => {
	let isRelevant = ACTIVE_TO > new Date();
	return {
		enabled: isRelevant && !state.effects.some(e => e.id === effectTypes.WoWBanner && e.disabled)
	};
}

const mapDispatchToProps = (dispatch: Function): IWoWBannerCallbackProps => {
	return {
		loadCountdownScript: () => {
			dispatch(loadLibrary([SCRIPT_SOURCE], "tickcounter-sdk"))
		},
		hide: () => {
			dispatch(disableEffect(effectTypes.WoWBanner))
		}
	}
}

const WoWBannerContainer = connect(mapStateToProps, mapDispatchToProps)(WoWBanner);

export default WoWBannerContainer;