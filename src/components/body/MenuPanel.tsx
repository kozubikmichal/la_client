import * as React from "react";
import { Panel, Table, Glyphicon, Row } from "react-bootstrap";

import IMenu from "../../IMenu";
import { IRestaurant } from "../../IMenu";
import { MenuSection } from "./MenuSection";

import DataStorage from "../../DataStorage";

interface IPanelProps {
	menu: IMenu
}

interface IMenuPanelState {
	expanded: boolean;
	[key:string]: any;
}

export class MenuPanel extends React.Component<IPanelProps, {}> {
	private dataStorage = DataStorage;
	private storageId: string;

	state: IMenuPanelState = {
		expanded: true
	}

	componentWillMount() {
		this.storageId = `state_${this.props.menu.restaurant.id}`;
		this.setState({
			expanded: this.getStoredState(this.storageId).expanded
		})
	}

	render() {
		let { menu } = this.props;
		let main = menu.menus[0];
		let others = menu.menus.slice(1);

		return (
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
				<Panel expanded={this.state.expanded} collapsible bsStyle="primary" header={this.getHeader(menu.restaurant)}>
					<MenuSection section={main} />
					{ others.map((section, index) => {
						return (<MenuSection section={section} key={index}/>)
					})}
				</Panel>
			</div>
		);
	}

	private toggle() {
		this.setState((prevState: any) => ({
			expanded: !(prevState.expanded)
		}))
		this.storeState(this.storageId, "expanded", !(this.state.expanded));
	}

	private getHeader(restaurant: IRestaurant): JSX.Element {
		return (
			<Row>
				<div className="col-xs-9" onClick={() => this.toggle()} style={{cursor: "pointer"}}>
					<strong>{restaurant.name}</strong>
				</div>
				<div className="col-xs-3">
					<Glyphicon title={this.state.expanded ? "Collapse" : "Expand"} glyph={this.state.expanded ? "chevron-up" : "chevron-down"}
						style={{cursor: "pointer", marginLeft: "10px", float: "right"}}
						onClick={() => this.toggle()}
					/>
					<Glyphicon title="Go to original page" glyph="link"
						style={{cursor: "pointer", float: "right"}} 
						onClick={() => this.openPage(restaurant.url)}
					/>
				</div>
			</Row>
		)
	}

	private openPage(url: string) {
		window.open(url, "_blank");
	}

	private getStoredState(id: string): IMenuPanelState {
		let state = this.dataStorage.read(id);

		return state !== null ? JSON.parse(state) : this.getDefaultStoredState();
	}

	private storeState(id: string, key: string, value: any) {
		let state = this.getStoredState(id);
		state[key] = value;

		this.dataStorage.store(id, JSON.stringify(state));
	}

	private getDefaultStoredState() : IMenuPanelState {
		return {
			expanded: true
		}
	}
}