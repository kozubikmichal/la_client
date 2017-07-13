import * as React from "react";

import ApiWrapper from "../../ApiWrapper";

import { MenuPanel } from "./MenuPanel"
import { Loader } from "../Loader"

import IMenu from "../../IMenu";

interface IState {
	menus: IMenu[]
}

export class PanelsContainer extends React.Component<Object, {}> {
	private api = new ApiWrapper();

	state: IState = {
		menus: []
	}

	componentDidMount() {
		this.api.loadMenus()
			.then((data) => {
				this.setState({
					menus: data
				});
			})
	}

	render() {
		let menus = this.state.menus;

		return menus.length ? 
			(<div> 
				{menus.map((menu, index) => {
						return (<MenuPanel menu={menu} key={index} />);
					})
					}
			</div>)
			: (<Loader />)
	};
}