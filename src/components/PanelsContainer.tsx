import * as React from "react";

import { MenuPanel } from "./MenuPanel"
import { Loader } from "./Loader"

import IMenu from "../IMenu";

interface IPanelsContainerProps {}
interface IState {
	menus: IMenu[]
}

export class PanelsContainer extends React.Component<IPanelsContainerProps, {}> {
	state: IState = {
		menus: []
	}

	constructor(props: IPanelsContainerProps) {
		super(props);
	}

	componentDidMount() {
		fetch("/api/menu")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					menus: data
				});
			})

	}

	render() {
		let menus = this.state.menus;

		return (
			<div>
				{
					menus.length ? menus.map((menu, index) => {
						return (<MenuPanel menu={menu} key={index} />);
					})
					: <Loader />
				}
			</div>
		);
	}
}