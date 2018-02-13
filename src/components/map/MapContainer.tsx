import * as React from "react";

import Map from "../../containers/map/Map"
import { Loader } from "../Loader"
import Marker from "../../containers/map/Marker";
import { IRestaurant } from "../../IMenu";
import InfoWindow from "../../containers/map/InfoWindow";

export interface IMapContainerDataProps {
	google: any,
	restaurants: IRestaurant[]
}

export interface IMapContainerCallbackProps {
	loadGoogleApi: () => void;
	loadRestaurants: () => void;
}

export class MapContainer extends React.Component<IMapContainerDataProps & IMapContainerCallbackProps, {}> {
	componentDidMount() {
		this.props.loadGoogleApi();
		this.props.loadRestaurants();
	}

	render() {
		let { google, restaurants }  = this.props;

		return google ?
			(
				<div style={{
						width: "100%",
						height: "800px"
					}}
					>
					<Map google={google} >
						{restaurants.map((restaurant) => {
							return (<Marker restaurant={restaurant} key={restaurant.id} />)
						})}

						<InfoWindow />
					</Map>
				</div>
			)
			: (<Loader />)
	};
}