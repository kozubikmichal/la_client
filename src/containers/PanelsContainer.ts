import { connect } from "react-redux";

import {
	IAsyncPanelsContainerDataProps,
	IAsyncPanelsContainerCallbackProps,
	AsyncPanelsContainer
} from "../components/body/AsyncPanelsContainer"

import { IState } from "../IState";

import { loadRestaurants } from "../actions/restaurant";

const mapStateToProps = (state: IState): IAsyncPanelsContainerDataProps => {
	return {
		restaurants: state.loadedRestaurants.filter(r => state.restaurants.hidden.indexOf(r.id) === -1)
	};
}

const mapDispatchToProps = (dispatch: Function): IAsyncPanelsContainerCallbackProps => {
	return {
		loadRestaurants: () => {
			dispatch(loadRestaurants())
		}
	}
}

const PanelsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AsyncPanelsContainer);

export default PanelsContainer;