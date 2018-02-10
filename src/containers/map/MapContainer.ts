import { connect } from "react-redux";
import { loadLibrary } from "../../actions/libraries"
import { loadRestaurants } from "../../actions/restaurant";

import {
	IMapContainerDataProps,
	MapContainer,
	IMapContainerCallbackProps
} from "../../components/map/MapContainer"

import { IState } from "../../IState";

const API_KEY = "AIzaSyAmxIE89k6yQfpxikQ4_8J4_aaV2BGhh1o";
const SCRIPT_SOURCE = `https://maps.googleapis.com/maps/api/js?callback=initMap&key=${API_KEY}`

const mapStateToProps = (state: IState): IMapContainerDataProps => {
	return {
		google: state.libraries.google,
		restaurants: state.loadedRestaurants
	};
}

const mapDispatchToProps = (dispatch: Function): IMapContainerCallbackProps => {
	return {
		loadGoogleApi: () => {
			dispatch(loadLibrary([SCRIPT_SOURCE], "google"))
		},
		loadRestaurants: () => {
			dispatch(loadRestaurants())
		}
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(MapContainer);

export default Container;