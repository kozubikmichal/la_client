import { connect } from "react-redux";

import {
	IMarkerDataProps,
	Marker,
	IMarkerCallbackProps
} from "../../components/map/Marker"

import { IState } from "../../IState";
import { activateMarker } from "../../actions/map";

const mapStateToProps = (state: IState, ownProps: IMarkerDataProps): IMarkerDataProps => {
	return {
		google: state.libraries.google,
		map: ownProps.map,
		restaurant: ownProps.restaurant
	};
}

const mapDispatchToProps = (dispatch: Function, ownProps: IMarkerDataProps): IMarkerCallbackProps => {
	return {
		onPress: (marker: any) => {
			dispatch(activateMarker(marker, ownProps.restaurant))
		}
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Marker);

export default Container;