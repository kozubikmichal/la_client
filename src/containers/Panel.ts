import { connect } from "react-redux";

import {
	IAsyncMenuPanelDataProps,
	IAsyncMenuPanelCallbackProps,
	AsyncMenuPanel
} from "../components/body/AsyncMenuPanel"

import { IState } from "../IState";
import { IRestaurant } from "../IMenu";

import { collapseRestaurant, expandRestaurant } from "../actions/restaurant";
import { loadMenu } from "../actions/menu";

interface IPanelProps {
	restaurant: IRestaurant,
}

const mapStateToProps = (state: IState, ownProps: IPanelProps): IAsyncMenuPanelDataProps => {
	return {
		expanded: state.restaurants.collapsed.indexOf(ownProps.restaurant.id) === -1,
		restaurant: ownProps.restaurant,
		menu: state.menus[ownProps.restaurant.id]
	};
}

const mapDispatchToProps = (dispatch: Function, ownProps: IPanelProps): IAsyncMenuPanelCallbackProps => {
	return {
		onPressHeader: (expanded: boolean): void => {
			let action = expanded ? collapseRestaurant : expandRestaurant;
			dispatch(action(ownProps.restaurant.id));
		},
		onPressLink: () => {
			window.open(ownProps.restaurant.url, "_blank");
		},
		loadMenu: () => {
			dispatch(loadMenu(ownProps.restaurant.id))
		}
	}
}

const Panel = connect(mapStateToProps, mapDispatchToProps)(AsyncMenuPanel);

export default Panel;