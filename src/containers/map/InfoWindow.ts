import { connect } from "react-redux";

import { IState } from "../../IState";
import { loadMenu } from "../../actions/menu";
import { IInfoWindowDataProps, IInfoWindowCallbackProps, InfoWindow } from "../../components/map/InfoWindow";

interface IInfoWindowProps {
	map?: any
}

const mapStateToProps = (state: IState, ownProps: IInfoWindowProps): IInfoWindowDataProps => {
	return {
		google: state.libraries.google,
		map: ownProps.map,
		restaurant: state.map.activeRestaurant,
		menu: state.map.activeRestaurant && state.menus[state.map.activeRestaurant.id],
		marker: state.map.activeMarker,
		visible: Boolean(state.map.activeMarker)
	};
}

const mapDispatchToProps = (dispatch: Function, data: any): IInfoWindowCallbackProps => {
	return {
		loadMenu: (restaurant: string) => {
			dispatch(loadMenu(restaurant))
		}
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(InfoWindow);

export default Container;