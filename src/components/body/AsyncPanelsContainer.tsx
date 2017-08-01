import * as React from "react";

import Panel from "../../containers/Panel"
import { Loader } from "../Loader"

import { IRestaurant } from "../../IMenu";

export interface IAsyncPanelsContainerDataProps {
	restaurants: IRestaurant[]
}

export interface IAsyncPanelsContainerCallbackProps {
	loadRestaurants: () => void
}

export class AsyncPanelsContainer extends React.Component<IAsyncPanelsContainerDataProps & IAsyncPanelsContainerCallbackProps, {}> {
	componentDidMount() {
		this.props.loadRestaurants()
	}

	render() {
		let { restaurants }  = this.props;
		
		return restaurants.length ? 
			(<div> 
				{restaurants.map((restaurant) => {
						return (<Panel restaurant={restaurant} key={restaurant.id} />);
					})
					}
			</div>)
			: (<Loader />)
	};
}