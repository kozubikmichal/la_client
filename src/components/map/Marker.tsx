import * as React from "react";
import { IRestaurant } from "../../IMenu";

export interface IMarkerDataProps {
	google?: any,
	map?: any,
	restaurant: IRestaurant
}

export interface IMarkerCallbackProps {
	onPress: (marker: any) => void;
}

interface IState {
	marker?: any,
	infoWindow?: any,
	rendered: boolean
}

export class Marker extends React.Component<IMarkerDataProps & IMarkerCallbackProps, {}> {
	state: IState = {
		rendered: false
	}

	componentDidMount() {
		this.tryRerender();
	}

	componentWillUnmount() {
		if (this.state.marker) {
			this.state.marker.setMap(null)
		}
	}

	componentDidUpdate() {
		this.tryRerender();
	}

	private renderMarker() {
		const {google, map} = this.props;
		const {position} = this.props.restaurant;

		const latlng = new google.maps.LatLng(position.lat, position.lng);

		this.setState({
			marker: new google.maps.Marker({
				map: map,
				position: latlng,
				title: this.props.restaurant.name
			}),
			rendered: true
		}, () => {
			this.state.marker.addListener("click", () => this.props.onPress(this.state.marker));
		});
	}

	private tryRerender() {
		if (this.state.rendered) {
			this.state.marker.setMap(this.props.map);
		}

		if (!this.state.rendered && this.props.map && this.props.restaurant) {
			this.renderMarker();
		}
	}

	render(): false {
		return false
	};
}