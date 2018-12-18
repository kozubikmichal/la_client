import { connect } from "react-redux";
import { loadLibrary } from "../actions/libraries"

import {
	ISnowCallbackProps,
	Snow,
	ISnowDataProps
} from "../components/Snow"

import { IState } from "../IState";

const SCRIPT_SOURCE = `https://cdnjs.cloudflare.com/ajax/libs/JQuery-Snowfall/1.7.4/snowfall.min.js`

const mapStateToProps = (state: IState): ISnowDataProps => {
	return {
		snowFall: state.libraries.snowFall,
		enabled: !state.effects.some(e => e.id === "snowFall" && e.disabled)
	};
}

const mapDispatchToProps = (dispatch: Function): ISnowCallbackProps => {
	return {
		loadSnowfallApi: () => {
			dispatch(loadLibrary([SCRIPT_SOURCE], "snowFall"));
		}
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Snow);

export default Container;