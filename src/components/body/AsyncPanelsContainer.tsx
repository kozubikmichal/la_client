import * as React from "react";

import ApiWrapper from "../../ApiWrapper";

import Panel from "../../containers/Panel"
import { Loader } from "../Loader"

import { IRestaurant } from "../../IMenu";

interface IState {
	restaurants: IRestaurant[]
}

export class AsyncPanelsContainer extends React.Component<Object, {}> {
	private api = new ApiWrapper();

	state: IState = {
		restaurants: []
	}

	componentDidMount() {
		this.api.loadRestaurants()
			.then((data) => {
				this.setState({
					restaurants: data
				});
			})
	}

	render() {
		let restaurants = this.state.restaurants;

		return restaurants.length ? 
			(<div> 
				{restaurants.map((restaurant, index) => {
						return (<Panel restaurant={restaurant} key={index} />);
					})
					}
			</div>)
			: (<Loader />)
	};
}